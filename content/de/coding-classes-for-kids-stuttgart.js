'use strict';
// Coding classes for kids in Stuttgart (ag- city door, Germany cluster P5 row DE126).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: Baden-Württemberg is phasing in a brand-new compulsory subject, Informatik und Medienbildung, from grade 5 in
// 2025/26, but its curriculum is not written yet and primary school has none. A Stuttgart child of 6 to 12 therefore
// meets school computing for the first time in grade 5, in a subject still being built. The page explains that, how our
// English-only live classes fill the primary years, the Känguru der Mathematik on 8 April 2027 as a free first contest,
// and an original project on the city's two permanent bike counters.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/src/ and src-pages/<slug>/, read
// 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page (infmon-baden-wuerttemberg/0356d1e4.txt): "Mit dem Schuljahr
//    2025/2026 wird schulartübergreifend in der Sekundarstufe I das Pflichtfach Informatik und Medienbildung eingeführt,
//    wobei die Umsetzung zunächst in den Jahrgangsstufen 5 und 6 erfolgt" (FACTS 67); "insgesamt vier Wochenstunden"
//    at Werkrealschule, Hauptschule, Realschule and Gemeinschaftsschule; "Hierfür liegt noch kein Bildungsplan vor. Die
//    Anhörung für den neuen Bildungsplan ist im Schuljahr 2026/2027 vorgesehen, die Inkraftsetzung für August 2027";
//    "Die Grundschule umfasst die Jahrgangsstufen 1 bis 4"; Gymnasium Oberstufe "mehrheitlich die Jahrgangsstufe 10 als
//    Einführungsphase" (G8); Profilfach NIT "zum Schuljahr 2027/2028".
//  - GI Informatik-Monitor national page: BW among four Länder meeting the short-term recommendation of 4 compulsory
//    hours (FACTS 91); BW, Niedersachsen and Bremen "ungefähr jede zwölfte Person" in the Oberstufe takes Informatik (99).
//  - KMK Ferien 2026/27 (kmk-fer2627/fe303dbf.txt, Stand 09.10.2025), row "Baden-Württemberg (4)": Weihnachten
//    23.12. - 09.01.; no winter break (--); Ostern 25.03. and 30.03. - 03.04.; Pfingsten 18.05. - 29.05.; Sommer
//    29.07. - 11.09. KMK long-term summer table: "Baden-Württemberg 31.07. - 13.09. 30.07. - 12.09. 29.07. - 11.09." (257).
//  - Känguru der Mathematik (kaenguru/): 2027 "ausnahmsweise erst im April statt, und zwar am 8. April 2027" (183);
//    "Online-Anmeldung: ab 01.12.2026 Anmeldeschluss: 31.01.2027" (184); 2026 "Über 920.000 Schülerinnen und Schüler aus
//    mehr als 13.000 Schulen" (185); 75 minutes, 24 tasks for 3/4 and 5/6 (186).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Stuttgart 612,663; Baden-Württemberg 11,245,898.
//  - Time: EinhZeitG para 4 (MEZ = UTC+1, MESZ = UTC+2); summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Landeshauptstadt Stuttgart via Open Data BW, "Radfahrende an den Zählstellen in Stuttgart seit 2013 nach
//    Jahreszeiten", https://ckan.govdata.de/dataset/radfahrende-nach-zahlstellen, licence CC BY 4.0 (dcat-ap.de
//    cc-by/4.0), CSV radfahrende_nach_zahlstelleund_jahr.csv (656 bytes, sha256 0a0b185c...4dd13af0), downloaded
//    2 Nov 2026, metadata re-read 3 Nov 2026. Dataset notes: first counter "am 1. Juli 2012 auf der König-Karls-Brücke
//    in Bad Cannstatt an der Hauptradroute 1", second "in Stuttgart-Süd in der Böblinger Straße" counting "seit
//    10. Dezember 2013". Rows 2013 to 2022; Böblinger Straße 2013 is NA.
// Our own calculations (scratchpad de/w/C4/cst/v1.py, v2.py, python3 -I): v1 prints "König-Karls-Brücke grew by 384076"
// and "Böblinger Straße grew by 203508"; v2 prints "König-Karls-Brücke [100, 113, 110, 112, 134, 137, 189, 154, 152]"
// and "Böblinger Straße [100, 104, 108, 117, 147, 154, 195, 178, 195]".
// Lesson family: to compare two series of very different size, index both to the same base year (= 100).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'counts = {}',
  'with open("stuttgart_bikes.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["count"] == "NA":',
  '            continue',
  '        counts[(row["counter"], int(row["year"]))] = int(row["count"])',
  '',
  'for counter in ["König-Karls-Brücke", "Böblinger Straße"]:',
  '    first = counts[(counter, 2014)]',
  '    last = counts[(counter, 2022)]',
  '    print(counter, "grew by", last - first)'
].join('\n');

const V2 = [
  'for counter in ["König-Karls-Brücke", "Böblinger Straße"]:',
  '    base = counts[(counter, 2014)]',
  '    index = []',
  '    for year in range(2014, 2023):',
  '        index.append(round(100 * counts[(counter, year)] / base))',
  '    print(counter, index)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Stuttgart: coding for kids' },
  slug: 'coding-classes-for-kids-stuttgart',
  code: 'cst',
  accent: '#964762',
  accentRationale: 'Coding classes for kids, Stuttgart: a muted vineyard red #964762 for the vine slopes above the Neckar valley, distinct from the Berlin brick red; contrast 5.05 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Stuttgart',
  title: 'Coding Classes for Kids in Stuttgart: Live Online in English',
  description: 'Coding classes for kids in Stuttgart, ages 6 to 12: live online in English, the new BW school subject, the Känguru on 8 April 2027, and a bike counter project.',
  ogDescription: 'Live online coding in English for Stuttgart children aged 6 to 12: why Baden-Württemberg schools start computing in grade 5, a free maths contest in April 2027, and a real project on the city\'s two bike counters.',
  twitterDescription: 'Coding for Stuttgart kids, live in English: the new school subject, the Känguru 2027 and a bike counter project.',
  pageName: 'Coding Classes for Kids in Stuttgart',
  webPageDescription: 'A guide for Stuttgart parents of children aged 6 to 12 to learning to code, built from the Gesellschaft für Informatik monitor, the KMK holiday table, the Känguru der Mathematik pages and an original data project on the city\'s open bike counter figures.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Stuttgart: block coding first, then typed Python and small AI projects, in a group of fifteen to twenty or one to one, with the same mentor every week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Stuttgart',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#project', label: 'Project' },
    { href: '#kangaroo', label: 'Kangaroo' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Stuttgart &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Stuttgart',
  lede: 'Baden-Württemberg has just made computing a compulsory school subject, but it starts in grade 5 and its first proper curriculum is not due before August 2027. Before that, a Stuttgart child spends four years of Grundschule with no computing lesson on the timetable. This page sets out what the new subject is, what our English-language video lessons look like for a six to twelve year old, a free maths contest in April 2027, and a project built on the two bike counters whose figures Stuttgart gives away as open data.',
  secondaryCta: { href: '#project', label: 'See the bike project' },
  wa: 'Hello Modern Age Coders, we live in Stuttgart and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; the same mentor each week, in English',
  spec: [
    ['Ages', '6 to 12, in groups by age'],
    ['First steps', 'Block coding, then typed Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Stuttgart times', 'After school or weekend mornings, flexible'],
    ['Mentors', 'Based in India, teaching live by video'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs coding classes for kids in Stuttgart as live video lessons, in English, for six to twelve year olds. The youngest build games from blocks; from about nine, children type real Python and try small AI projects, such as charting Stuttgart\'s own bike counters. A regular mentor sets the speed and speaks clearly for children still learning English. Families pick a shared class of fifteen to twenty pupils or private lessons, after school or on a weekend morning.',

  picks: {
    eyebrow: 'Where Stuttgart children begin',
    h2: 'Three courses for Stuttgart children from 6 to 12',
    lede: 'A gentle start for the youngest, a long course from blocks to apps, and a typed Python route for children ready to leave blocks behind.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'CST / 01', title: 'Thinking before coding', note: 'For six to nine year olds. Patterns, sorting and step-by-step puzzles that build the habits coding needs, before any screen work gets serious.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CST / 02', title: 'Blocks to apps', note: 'For six to twelve year olds, sorted into age groups. A school year of block games that grow into small apps, ending with how an AI makes a choice.' },
      { course: 'python-ai-kids-masterclass', code: 'CST / 03', title: 'Typed Python and AI', note: 'For nine to twelve year olds. Real code typed from week one, turtle drawings, small games and data work like the bike counter chart below.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Schools in Stuttgart',
      h2: 'When does a Stuttgart child first learn computing at school?',
      lede: 'In grade 5, in a subject that is only now being built. Everything below comes from the Gesellschaft für Informatik, which tracks the rules of all sixteen Länder.',
      body: [
        { kind: 'two',
          leftH3: 'A new subject, starting in grade 5',
          left: [
            'Since the 2025/26 school year, Baden-Württemberg has a compulsory subject called Informatik und Medienbildung, computing and media education. The Informatik-Monitor 2026/27 says it is being introduced across secondary school types, beginning in grades 5 and 6 and growing year by year after that.',
            'At Werkrealschule, Hauptschule, Realschule and Gemeinschaftsschule the plan is four lessons a week in total over the years of Sekundarstufe I. That puts the Land among the four that meet the short-term target of four compulsory hours, alongside Hamburg, Sachsen and Schleswig-Holstein.'
          ],
          rightH3: 'A curriculum still being written',
          right: [
            'The same monitor is frank about one gap: "Hierfür liegt noch kein Bildungsplan vor", there is no curriculum for the subject yet. A consultation is planned in the 2026/27 school year and the new Bildungsplan is to take effect in August 2027. Until then, teachers in grades 5 to 7 lean on older plans and a reading guide.',
            'Primary school, Grundschule, covers grades 1 to 4 in Baden-Württemberg, and the new subject does not reach into it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Stuttgart school career, from the 2026/27 rules', head: ['Grades', 'School stage', 'What the timetable offers'], rows: [
          ['1 to 4', 'Grundschule', 'No computing subject'],
          ['5 and 6', 'All secondary school types', 'Informatik und Medienbildung, compulsory, new since 2025/26'],
          ['7 to 10', 'Secondary school', 'The new subject grows up the year groups; older elective courses run out'],
          ['10', 'Gymnasium', 'Usually the Einführungsphase of the Oberstufe (eight-year route)'],
          ['11 and 12', 'Gymnasium Oberstufe', 'Informatik as an elective, a basic subject or an advanced subject, if the school offers it']
        ] },
        { kind: 'source', html: 'Source: the Informatik-Monitor 2026/27 published by the GI (Gesellschaft für Informatik), its Baden-Württemberg page and its national comparison, read on 2 November 2026. The national page also notes that in Baden-Württemberg only about one Oberstufe pupil in twelve takes Informatik, one of the three lowest shares in Germany.' },
        { kind: 'p', mt: true, html: 'School rules are set by the Land, so they are the same in Stuttgart, home to 612,663 people on 31 December 2024 according to Destatis, as in Esslingen, Ludwigsburg, Böblingen, Fellbach or Waiblingen. Our classes are online, so a family anywhere in the Stuttgart region joins the same groups.' },
        { kind: 'p', html: 'For a Stuttgart family with a child of 7 or 8, the practical meaning is simple. Your child will meet computing at school around the age of 10, in a young subject whose teachers are still settling on what to teach. A child who has spent two or three years building games and solving puzzles at home starts that subject relaxed, and often ends up helping the classmate at the next desk.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in English, and can a young child keep up?',
      lede: 'Yes. We teach live and only in English, and small children cope well because the mentor bends to them rather than the reverse.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English, and we say so first', p: 'There is no German-language option. We put that near the top so no family books a trial expecting one. Children at the international and bilingual schools around Stuttgart already learn in English; children at a German Grundschule get an hour of English practice that happens to be about games.' },
          { h3: 'The mentor sets a gentle pace', p: 'Mentors slow down, say a step again in easier words and point at the screen as they talk. If a six year old replies with one word, or with a German word, that is fine: the mentor simply offers the English one.' },
          { h3: 'Most of the lesson is on the screen', p: 'Blocks snap together, characters move, a score goes up. Children learn a great deal by watching and copying a move, then changing it. The English a child needs in the first months is small: start, stop, repeat, if, turn, again.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India over a video call. India runs several hours ahead of Stuttgart, so school-day afternoons here land in the mentor\'s evening, and that is what makes the times below easy. One mentor stays with your child for months and quickly notices whether your child wants a hard task at once, likes a quiet minute before answering, or learns most by repairing a broken program.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Stuttgart project',
      h2: 'Which Stuttgart bike counter grew faster?',
      lede: 'Stuttgart publishes yearly totals from its two permanent bicycle counters, free for anyone to reuse. Our older children use them to learn a trick that grown-up analysts use every day: when two things are very different in size, compare how fast they grow, not how much.',
      body: [
        { kind: 'two',
          leftH3: 'The two counters',
          left: [
            'The city\'s open data file lists two fixed counters. The first has counted since 1 July 2012 on the König-Karls-Brücke in Bad Cannstatt, on main cycle route 1. The second, in Stuttgart-Süd on the Böblinger Straße, has counted since 10 December 2013.',
            'The file gives one total per counter per year from 2013 to 2022. For the Böblinger Straße in 2013 it says NA, not available, which makes sense: that counter only ran for the last three weeks of the year.'
          ],
          rightH3: 'The question',
          right: [
            'Which counter grew faster between 2014 and 2022? A child looks at the numbers and says the bridge, because its totals are much bigger. The first program agrees. The second program shows why that answer is unfair.',
            'Children work from a short file, stuttgart_bikes.csv, holding three columns: year, counter and count. Rows marked NA are skipped on purpose, so that one empty year cannot crash the program.'
          ] },
        { kind: 'code', label: 'Version 1: how many more bikes?', lang: 'Python', code: V1, note: 'It prints: <code>König-Karls-Brücke grew by 384076</code> and <code>Böblinger Straße grew by 203508</code>.' },
        { kind: 'p', mt: true, html: 'The bridge added 384,076 bikes a year, the Böblinger Straße 203,508. So the bridge grew faster? Not so quick. The bridge started in 2014 with more than three times as many bikes, so adding a lot was easy for it. To compare fairly we turn each counter\'s 2014 total into 100 and scale every other year the same way. This is called an index, and it is how prices, sales and many other numbers in the news are compared.' },
        { kind: 'code', label: 'Version 2: give both counters the same start', lang: 'Python', code: V2, note: 'It prints: <code>König-Karls-Brücke [100, 113, 110, 112, 134, 137, 189, 154, 152]</code> and <code>Böblinger Straße [100, 104, 108, 117, 147, 154, 195, 178, 195]</code>.' },
        { kind: 'p', html: 'Now the picture flips. By 2022 the bridge stands at 152, about half as many bikes again as in 2014, while the Böblinger Straße stands at 195, almost twice its 2014 level. The smaller counter grew faster. Both lines jump in 2020, the highest year for the bridge, and the Böblinger Straße beats its own 2020 total in 2022 by only 450 bikes. The file does not say why the numbers moved, so we teach children not to invent a reason the data does not give.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Bikes counted per year, with 2014 set to 100 (our calculation)', head: ['Counter', '2014 total', '2022 total', 'Extra bikes', 'Index in 2022'], rows: [
          ['König-Karls-Brücke', '738,880', '1,122,956', '384,076', '152'],
          ['Böblinger Straße', '214,360', '417,868', '203,508', '195']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Stuttgart, Radfahrende an den Zählstellen in Stuttgart seit 2013, published through Open Data BW, licence CC BY 4.0, downloaded 2 November 2026. Differences and index values are our own calculation from the yearly totals in that file; the file ends with 2022.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, with a ruler.</strong> Draw two towers of bricks, one of 3 and one of 9. Add 2 bricks to the small one and 3 to the big one. Which tower grew more? Which one changed more, compared with how tall it was?',
          '<strong>Ages 8 to 10, in Scratch.</strong> Store both lists of totals and make a sprite say which counter added more bikes. Then divide each year by the first year and multiply by 100 before you compare.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1, write down your answer, then write Version 2 yourself before you look at ours.',
          '<strong>Going further.</strong> Choose 2018 as the base year instead of 2014. Does the faster counter change? Explain why the base year matters, and why 2013 cannot be the base year for the Böblinger Straße.'
        ] }
      ]
    },
    {
      id: 'kangaroo',
      eyebrow: 'A free first contest',
      h2: 'Is there a contest my Stuttgart child could enter this school year?',
      lede: 'One good choice for ages 8 to 12 is the Känguru der Mathematik, a multiple-choice maths contest written at school, which moves to a later date in 2027.',
      body: [
        { kind: 'two',
          leftH3: 'What it is',
          left: [
            'The Känguru der Mathematik is an individual contest of 75 minutes. Pupils in grades 3 and 4, and in grades 5 and 6, each face 24 problems; older pupils get 30. In March 2026 more than 920,000 pupils from more than 13,000 schools took part, according to the organisers.',
            'It is a maths contest, not a coding one, but the thinking overlaps a great deal: spotting a pattern, ruling options out, working backwards from an answer.'
          ],
          rightH3: 'When it runs in 2027',
          right: [
            'Normally the contest falls on the third Thursday of March. For 2027 the organisers moved it to 8 April 2027, since the March date would land right before Easter holidays in nearly all Länder.',
            'Online registration opens on 1 December 2026 and closes on 31 January 2027. Ask your child\'s school early whether it takes part.'
          ] },
        { kind: 'p', mt: true, html: 'None of the contest\'s own problems appear in our lessons. Mentors invent fresh puzzles of a similar kind and train the habits behind them, such as checking each answer option in turn rather than guessing. Children who enjoy those puzzles usually enjoy the Känguru, and a child who later wants a computing contest can try the Informatik-Biber, which runs in schools from 9 to 20 November 2026. We are not connected with either organiser.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Stuttgart?',
      lede: 'Groups meet on weekday afternoons and at weekends; one-to-one lessons go wherever your diary has room. The rows below show how a Stuttgart start time reads on the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Stuttgart start times and the same moment in India', head: ['In Stuttgart', 'Same moment in India, to 27 March 2027', 'Same moment in India, from 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['16:45', '21:15', '20:15'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'Example start times only; no batch hour is fixed. German clocks show CET, UTC+1, through the winter and CEST, UTC+2, in summer, as the Einheitenzeitgesetz sets out. They went back on 25 October 2026 and go forward on 28 March 2027. India does not change its clocks (UTC+5:30), so it sits four and a half hours ahead of Stuttgart until late March and three and a half hours ahead after that.' },
        { kind: 'p', mt: true, html: 'Classes do not stop for the Baden-Württemberg school holidays, which the KMK table for 2026/27 lists as 23 December 2026 to 9 January 2027 at Christmas, 25 March and 30 March to 3 April 2027 at Easter, 18 to 29 May 2027 at Whitsun and 29 July to 11 September 2027 in summer. Many families keep going through the holidays; others pause for a trip and pick up afterwards.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Five stages a Stuttgart child moves through',
    lede: 'Stages we wrote ourselves. Mentors use them to place a new child and to show parents what has changed since last term.',
    table: { caption: 'Coding stages from 6 to 12 (ours)', head: ['Stage', 'Usual age', 'Your child can'], rows: [
      ['1. Order', '6 to 7', 'Put picture steps in order and make a character walk and talk'],
      ['2. Repeat', '7 to 8', 'Use a loop instead of copying the same block ten times'],
      ['3. Decide', '8 to 9', 'Make a game react with if and else, and keep a score'],
      ['4. Type', '9 to 11', 'Type small Python programs that use lists and loops'],
      ['5. Compare', '10 to 12', 'Read a data file and compare two things fairly']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the bike counter project. A child who asks "compared with what?" will ask it about every big number they hear.',
      'Reports to parents describe what your child built and can explain, never screen time.'
    ] },
    right: { h3: 'For children', ps: [
      'A bigger number is not always the bigger change. Ask where each one started.',
      'When the data says NA, it is telling you something. Skip it on purpose, and say you did.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Stuttgart children',
    lede: 'Every course is live, in English, with one mentor who knows your child, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Thinking and maths', sub: 'Ages 5 to 15', courses: [
        { code: 'CST / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Puzzles and logic', blurb: 'Breaking problems into steps, seven to twelve.' },
        { code: 'CST / THINK / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads first, then sums in the head.' },
        { code: 'CST / THINK / 03', slug: 'mental-maths-mastery-kids', title: 'Number sense', blurb: 'Quick, confident arithmetic for five to ten year olds.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CST / PLAY / 01', slug: 'scratch-programming-complete-course', title: 'Scratch in three months', blurb: 'A short course that ends with games your child designed.' },
        { code: 'CST / PLAY / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot games', blurb: 'A real game engine, gently introduced.' },
        { code: 'CST / PLAY / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Building with AI help while learning what the code does.' }
      ] },
      { num: 'III', h3: 'AI and the web', sub: 'Ages 8 to 12', courses: [
        { code: 'CST / MAKE / 01', slug: 'ai-literacy-for-kids-course', title: 'Understanding AI', blurb: 'What a model learns from examples, with no adult accounts.' },
        { code: 'CST / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'Phone apps from blocks', blurb: 'Working apps on a real phone, eight to twelve.' },
        { code: 'CST / MAKE / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Twelve weeks of building towards a project, ages 8 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes work',
    h2: 'How a week of classes looks for a Stuttgart family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Stuttgart afternoons, once homework is done.' },
      { time: 'Weekend mornings', l: 'A calm slot that suits six and seven year olds.' },
      { time: '1-on-1', l: 'A time you agree with the mentor, at your child\'s pace.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person every week, who remembers what your child made.' },
      { h3: 'Plain English', p: 'Short sentences, shown on screen, repeated when needed.' },
      { h3: 'Hands on', p: 'Your child moves the mouse and types from the first class.' },
      { h3: 'Same age', p: 'Groups are formed by age, so nobody is lost or bored.' },
      { h3: 'Short updates', p: 'A note for parents on what was built and what is next.' },
      { h3: 'Two formats', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by our older students',
  projectsLede: 'A seven year old dragging blocks today can be shipping real software as a teenager. Here are a few things our older learners made; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'What parents and students wrote on Google, word for word.',

  fees: {
    h2: 'Fees for families in Stuttgart',
    lede: 'You pay month by month for eight live classes. The euro amounts on this page use the reference rate published by the European Central Bank; the charge itself goes through in US dollars, so your bank converts it and the figure on your statement can move slightly.',
    free: ['A free first class', 'A short puzzle and a first program', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'The same mentor each week', 'Two classes a week', 'Monthly, cancel before the next month'],
    one: ['Your child with one mentor', 'Projects chosen around your child', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Stuttgart parents ask',
    h2: 'Coding classes for kids in Stuttgart: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, always live. The mentor keeps sentences short, checks that your child has followed and gets used to the way your child speaks, so a beginner in English is not left behind. Blocks and Python keywords are identical whatever language the lesson uses.' },
      { q: 'Does my child learn computing at a Stuttgart primary school?', a: 'Not as a subject. Grundschule in Baden-Württemberg runs from grade 1 to grade 4, and the new compulsory subject, Informatik und Medienbildung, only begins in grade 5. It started in 2025/26 with grades 5 and 6 and adds a year group each year.' },
      { q: 'What is Informatik und Medienbildung?', a: 'The Land\'s new compulsory secondary subject, combining computing with media education. According to the Informatik-Monitor 2026/27 it has no written curriculum yet: the draft goes out for consultation in 2026/27 and should apply from August 2027.' },
      { q: 'From what age can my child start?', a: 'From 6. At that age lessons use picture blocks, so your child needs neither typing nor long texts. The Thinking before coding course is built for six to nine year olds, and many children switch to typed Python at around nine.' },
      { q: 'When are classes in Stuttgart time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In practice most Stuttgart pupils log in in the late afternoon or on a Saturday or Sunday morning.' },
      { q: 'Is there a contest for children in Stuttgart this year?', a: 'For eight to twelve year olds the Känguru der Mathematik is a friendly start. Its 2027 date is 8 April, a few weeks later than normal because of Easter. Registration is online from 1 December 2026 until 31 January 2027, so it is worth asking the school soon.' },
      { q: 'Where are the mentors?', a: 'They are in India and teach by live video. That suits Stuttgart: a 15:45 lesson here begins at 20:15 for the mentor during the winter months. The mentor stays the same from one week to the next.' },
      { q: 'How many children are in a group?', a: 'Between fifteen and twenty, all close in age. A family that wants private teaching books the one-to-one plan instead, with two lessons each week at agreed times.' },
      { q: 'How are fees charged?', a: 'Once a month. Amounts on this page are in euro at the European Central Bank reference rate; your card is charged in US dollars and your bank converts the sum, so a small difference on the statement is normal. The trial lesson costs nothing and no card is asked for.' },
      { q: 'What will my child make?', a: 'Six to eight year olds make games and moving stories from blocks. Older children write Python, draw shapes with code and, at ten to twelve, start asking questions of real files, like the Stuttgart bike counter totals on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for families around Stuttgart.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The starting point for all our Germany pages.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'School computing in all sixteen Länder, side by side.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'How the maths contest works and how to get ready.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'The block language many six year olds start with.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for the common AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson explained from start to end.' }
    ]
  },

  start: {
    h2: 'Try a free class',
    lede: 'In the trial lesson your child solves a puzzle and builds something tiny. Afterwards the mentor tells you which course and group would suit, based on how your child reasons and how easily they follow English.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and <a class="ag-inline-link" href="/courses">all courses</a> has each syllabus.',
    note: 'Every lesson is live, online and in English only, with a mentor in India. For quick questions WhatsApp is fastest; please write to us in English.',
    formNote: 'The trial costs nothing and commits you to nothing.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Compared with what? Start both at 100'
  },

  personalityCss: `
.ag-root.ag-cst .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cst .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-cst .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cst .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cst .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Baden-Württemberg page and national comparison); KMK Ferien 2026/27 and long-term summer table; Känguru der Mathematik e.V. pages; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; all read 2 and 3 November 2026. Landeshauptstadt Stuttgart via Open Data BW, Radfahrende an den Zählstellen in Stuttgart seit 2013, CC BY 4.0.',
    localProject: 'Two Stuttgart bike counters compared fairly: an original Python project on the city\'s yearly totals in which raw growth from 2014 to 2022 favours the König-Karls-Brücke (384,076 against 203,508) but an index with 2014 = 100 shows the Böblinger Straße grew faster (195 against 152); the 2013 NA is explained by the counter\'s start on 10 December 2013. Lesson family: index two series of different size to the same base year.',
    requiredMentions: ['stuttgart_bikes.csv', 'König-Karls-Brücke grew by 384076', 'Böblinger Straße [100, 104, 108, 117, 147, 154, 195, 178, 195]', 'has counted since 10 December 2013', 'Hierfür liegt noch kein Bildungsplan vor', 'moved it to 8 April 2027', 'Böblinger Straße grew by 203508', 'Compared with what? Start both at 100'],
    sources: [
      { claim: 'Informatik und Medienbildung compulsory from 2025/26, grades 5 and 6 first; no Bildungsplan yet; consultation 2026/27, in force August 2027; Grundschule grades 1 to 4.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW meets the four-hour short-term target; one in twelve Oberstufe pupils takes Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Baden-Württemberg holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Känguru 2027 on 8 April, registration 1 December 2026 to 31 January 2027, 2026 participation.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Stuttgart bike counter totals, counter start dates and CC BY 4.0 licence.', url: 'https://ckan.govdata.de/dataset/radfahrende-nach-zahlstellen' },
      { claim: 'Stuttgart population 612,663 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any reason for the 2020 jump in both counters: the file gives none, so none is offered.',
      'Naming Stuttgart schools or international schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with the Land, the city, the Känguru organisers or BWINF: none.'
    ]
  }
};
