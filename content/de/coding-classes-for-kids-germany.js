'use strict';
// Coding classes for kids in Germany (ag- English door, Germany cluster row DE013, rows.tsv P2).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: the Land a child lives in decides when school computing starts (grade 5 in some Länder, grade 9 or never
// for all pupils in others), so ages 6 to 12 are mostly left to families. Original project: the 16 Länder sorted three
// ways (area, people, people per km2), checked against Destatis's own density column.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026; Destatis workbook copied to ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-germany/):
//  - KMK Primarbereich: Grundschule grades 1 to 4, "in Berlin und Brandenburg bis zur sechsten Jahrgangsstufe" (fact 1);
//    "Eckpunktepapier zur Verankerung von Medienbildung und informatischer Bildung in der Grundschule" (fact 4).
//  - KMK Eurydice dossier: school-start cut-off "zwischen dem 30. Juni und dem 30. September" (fact 289).
//  - GI Informatik-Monitor 2026/27, Land pages: BW Pflichtfach Informatik und Medienbildung from 2025/2026 "zunächst in
//    den Jahrgangsstufen 5 und 6" (67); Bayern Mittelschule grades 5 to 10 "je einer Wochenstunde" (69), Gymnasium
//    grades 6 and 7 Schwerpunkt Informatik (70); Berlin ITG one weekly hour (73); Brandenburg elective only (74); Bremen
//    none in Sek I (75); Hamburg "vier Wochenstunden Informatik verpflichtend" since 2025/26 (76); Hessen "kein
//    verbindlicher Informatikunterricht" (77); MV grades 5 to 10 "mindestens je einer Wochenstunde" (78); Niedersachsen
//    grades 9 and 10 since 2024/25 (79); NRW grades 5 and 6 at all school types (80); RLP "21 Informatik-Profil-Schulen
//    in Jahrgangsstufe 5" (83); Saarland grades 7 and 8 two hours, 9 and 10 one hour (84); Sachsen grades 7 to 10 one
//    hour (85); Sachsen-Anhalt Sekundarschule and Gemeinschaftsschule grades 6 to 10 (87); SH four hours in grades 7 to
//    10 from 2024/25 (88); Thüringen MBI now in grades 5, 6 and 7, up to grade 10 in 2029/30 (89). National page: six
//    Länder without Informatik compulsory for all (92); Bremen from 2027/28 (94); RLP from 2028/29 (95).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: Statistisches Bundesamt (Destatis), Gemeindeverzeichnis GV-ISys, 02-bundeslaender.xlsx, sheet "Bundesländer
//    mit Hauptstädten", Gebietsstand 31.12.2024, Erscheinungsmonat September 2025, population on the Zensus 2022 basis.
//    Workbook licence line: "Vervielfältigung und Verbreitung, auch auszugsweise, mit Quellenangabe gestattet."
// Our own calculations (scratchpad de/w/G3/cki/v1.py, v12.py, python3 -I, Python 3.14.8): Biggest by area: Bayern;
// Biggest by people: Nordrhein-Westfalen; Smallest by area: Bremen; Smallest by people: Bremen. Density: Berlin 4136,
// Hamburg 2467, Bremen 1680, Brandenburg 86, Mecklenburg-Vorpommern 68 people per km2. All 16 rounded densities match
// the workbook's own Bevölkerungsdichte column (16 of 16).
// Lesson family: what you sort by decides the winner; then check your answer against a published one.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'lands = []',
  'with open("laender.csv", encoding="utf-8") as f:',
  '    reader = csv.DictReader(f)',
  '    for row in reader:',
  '        lands.append([row["land"], float(row["km2"]), int(row["people"])])',
  '',
  'def area(land):',
  '    return land[1]',
  '',
  'def people(land):',
  '    return land[2]',
  '',
  'print("Biggest by area:", sorted(lands, key=area, reverse=True)[0][0])',
  'print("Biggest by people:", sorted(lands, key=people, reverse=True)[0][0])',
  'print("Smallest by area:", sorted(lands, key=area)[0][0])',
  'print("Smallest by people:", sorted(lands, key=people)[0][0])'
].join('\n');

const V2 = [
  'for land in lands:',
  '    land.append(round(land[2] / land[1]))',
  '',
  'def crowding(land):',
  '    return land[3]',
  '',
  'ranked = sorted(lands, key=crowding, reverse=True)',
  'for land in ranked[:3] + ranked[-2:]:',
  '    print(land[0], land[3], "people per km2")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding classes for kids' },
  slug: 'coding-classes-for-kids-germany',
  code: 'cki',
  accent: '#7E3634',
  accentRationale: 'Coding classes for kids in Germany: a warm oxblood #7E3634, the colour of an old school satchel, kept apart from the Berlin brick and the hub green; contrast 6.92 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Germany',
  title: 'Coding Classes for Kids in Germany, Ages 6 to 12, in English',
  description: 'Coding classes for kids in Germany aged 6 to 12, live online in English: when each Land starts school computing, what to learn first, and a Länder data project.',
  ogDescription: 'Live online coding in English for children aged 6 to 12 across Germany: why school computing starts at grade 5 in some Länder and much later in others, what a child can learn before that, and a project that sorts the 16 Länder three ways.',
  twitterDescription: 'Coding for children in Germany, live in English: school computing by Land, a first path from 6 to 12 and a Länder data project.',
  pageName: 'Coding Classes for Kids in Germany',
  webPageDescription: 'A guide for parents in Germany of children aged 6 to 12 to learning to code, built on the Gesellschaft für Informatik Informatik-Monitor 2026/27, KMK pages and Destatis figures, with an original Python project on the 16 Länder.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 anywhere in Germany: Scratch first, then typed Python, small games and data projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#english', label: 'English' },
    { href: '#project', label: 'Project' },
    { href: '#ages', label: 'By age' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Germany',
  lede: 'Two ten year olds in the same grade can have very different first years of computing in Germany. In Nordrhein-Westfalen every fifth grader now has Informatik on the timetable; in Hessen no school type has to teach it at all. This page sets out, Land by Land, when school computing begins, what a child of 6 to 12 can learn before that, what our lessons in English are like, and a first data project that sorts the sixteen Länder three different ways.',
  secondaryCta: { href: '#school', label: 'See your Land' },
  wa: 'Hello Modern Age Coders, we live in Germany and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; one mentor per child, every week',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['First tool', 'Scratch blocks'],
    ['From about 9', 'Typed Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to children aged 6 to 12 all over Germany, live on video and in English: our Coding for Kids course starts with Scratch, moves on to typed Python, and ends with small projects on real data. A mentor stays with your child and adapts to their speed and accent. You pick a class of fifteen to twenty children or private lessons, in a German afternoon or at the weekend. Most Länder only begin school computing at grade 5 or later.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for children aged 6 to 12 in Germany',
    lede: 'A long course that grows with the child from first blocks to apps, a short Scratch course to test the water, and a Python course for children who are ready to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CKI / 01', title: 'Coding for Kids, the long road', note: 'For children from 6 to 12, grouped by age. Stories and games in Scratch, later phone apps and how AI learns, all paced by the same mentor across the year.' },
      { course: 'scratch-programming-complete-course', code: 'CKI / 02', title: 'Scratch, from zero to games', note: 'Three to four months from a blank screen to finished games. A sensible first step for a six or seven year old, or a test of real interest.' },
      { course: 'python-ai-kids-masterclass', code: 'CKI / 03', title: 'Typed Python at 9 and up', note: 'For children of about 9 and up who read comfortably. Typed Python, turtle drawings, games and small data projects like the Länder one below.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'School computing by Land',
      h2: 'At what age do children in Germany start computing at school?',
      lede: 'It depends on the Land, and the gap is wide. The Gesellschaft für Informatik tracks every Land in its Informatik-Monitor; the table below reads its 2026/27 pages for the first grade in which computing is compulsory.',
      body: [
        { kind: 'table', numCols: [], caption: 'First compulsory computing lesson in secondary school, by Land, school year 2026/27', head: ['Land', 'First compulsory grade', 'What the Informatik-Monitor says'], rows: [
          ['Baden-Württemberg', '5', 'Informatik und Medienbildung, from 2025/26, starting in grades 5 and 6 and growing year by year'],
          ['Bayern', '5 or 6', 'One weekly lesson in grades 5 to 10 at the Mittelschule; at the Gymnasium an Informatik focus in grades 6 and 7'],
          ['Mecklenburg-Vorpommern', '5', 'Informatik und Medienbildung in grades 5 to 10, at least one weekly lesson every year'],
          ['Nordrhein-Westfalen', '5', 'Informatik in grades 5 and 6 at every general school type'],
          ['Thüringen', '5', 'Medienbildung und Informatik, now in grades 5, 6 and 7, reaching grade 10 in 2029/30'],
          ['Sachsen-Anhalt', '6', 'One weekly lesson in grades 6 to 10 at Sekundarschule and Gemeinschaftsschule; elective at the Gymnasium'],
          ['Hamburg', '7', 'Four compulsory weekly hours across grades 7 to 10 since 2025/26, spread by each school'],
          ['Saarland', '7', 'Two hours in grades 7 and 8, one in grades 9 and 10, at Gemeinschaftsschule and the nine-year Gymnasium'],
          ['Sachsen', '7', 'One weekly lesson in grades 7 to 10 at Oberschule and Gymnasium'],
          ['Schleswig-Holstein', '7', 'Compulsory at every school type from 2024/25, four hours in total across grades 7 to 10'],
          ['Berlin', '7 or 8', 'The one-hour ITG course; Informatik itself is an elective'],
          ['Niedersachsen', '9', 'Informatik in grades 9 and 10 at every general school type since 2024/25'],
          ['Rheinland-Pfalz', '5 at 21 schools', 'Grade 5 at 21 Informatik-Profil-Schulen; compulsory at all schools from 2028/29'],
          ['Bremen', 'None yet', 'No Informatik in Sekundarstufe I; compulsory at all schools from 2027/28'],
          ['Brandenburg', 'None', 'Elective only, for example in grades 9 and 10 at a Gymnasium'],
          ['Hessen', 'None', 'No compulsory Informatik at any school type; an elective from grade 7 at the Gymnasium']
        ] },
        { kind: 'source', html: 'Source: the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, national overview and the sixteen Land pages, read on 2 November 2026. By the Monitor\'s count, six Länder still have no Informatik that every pupil must take; Hessen, Brandenburg and Bremen are among them. "First compulsory grade" is our reading of each Land page; where it depends on the school type, both are shown.' },
        { kind: 'two', mt: true,
          leftH3: 'Grade 5 is about age 10',
          left: [
            'Children in Germany start school in the year they turn six, with each Land setting a cut-off date that the KMK says must fall between 30 June and 30 September. So grade 5, the earliest start in the table, usually means a child of 10 or 11. In Berlin and Brandenburg, where Grundschule runs to grade 6, the first compulsory computing comes later still.',
            'For a child of 6 to 9, then, there is no Land in Germany where the timetable guarantees a computing lesson.'
          ],
          rightH3: 'Primary school is next',
          right: [
            'The KMK published a key-points paper in 2024, "zur Verankerung von Medienbildung und informatischer Bildung in der Grundschule": on anchoring media education and informatics education in primary school. That is a direction of travel, not a lesson your child has this year.',
            'Until it arrives, a curious seven year old in Germany learns to code at home, in a club, or in a class like ours.'
          ] },
        { kind: 'p', mt: true, html: 'This matters less as a race and more as a head start. A child who has spent a year or two putting steps in order, repeating them and fixing mistakes arrives at grade 5 or grade 7 with the habit that school Informatik is trying to build. Our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik Companion</a> course then follows the school subject itself, in English, from grade 5.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can a child in Germany learn to code in English?',
      lede: 'Yes, and most do it more easily than their parents expect. Every class is live and in English only; the mentor fits the English to the child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Live, never recorded', p: 'Your child joins a real lesson with a real mentor, on video, and builds while the mentor watches and helps. Nothing is a pre-recorded course the child must push through alone.' },
          { h3: 'English that fits the child', p: 'Mentors slow down for a six year old, use short words, show before they tell, and repeat in a new way when a child looks lost. They also get used to each child\'s accent, and a child who answers half in German is understood and given the English word.' },
          { h3: 'The code does not change', p: 'Scratch blocks look the same in every classroom, and Python\'s words, such as <code>print</code>, <code>if</code> and <code>for</code>, are English already. A child in Germany who learns them in English is learning them in their real form.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India and every lesson is in English; there is no German-language option, and we say so before you book. For families at a bilingual or international school this is simply the classroom language. For a child at a German Grundschule it is a second gain on top of the coding: an hour of English spoken for a purpose, about something the child chose to build.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A first data project',
      h2: 'Which Land is the biggest? It depends what you sort by',
      lede: 'Ask a class of ten year olds in Germany which Land is the biggest and you will hear Bayern and Nordrhein-Westfalen. Both are right, and that is the lesson: a computer sorts by exactly the thing you tell it to.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Statistisches Bundesamt, Destatis, publishes a small workbook listing every Land with its area in square kilometres and its population on 31 December 2024, counted on the basis of the 2022 census. Its licence line allows reproduction with the source named.',
            'We copy the sixteen rows into a file called laender.csv with three columns: land, km2 and people. Sixteen rows is small enough to check by hand, which is the point.'
          ],
          rightH3: 'The question',
          right: [
            'Which Land is the biggest, and which the smallest? The program answers twice, once by area and once by people, using the same list and one small function for each way of measuring.',
            'Then it invents a third measure the children have not met: people per square kilometre. That one gives a winner nobody guesses.'
          ] },
        { kind: 'code', label: 'Version 1: one list, two ways to sort it', lang: 'Python', code: V1, note: 'It prints: <code>Biggest by area: Bayern</code>, <code>Biggest by people: Nordrhein-Westfalen</code>, <code>Smallest by area: Bremen</code> and <code>Smallest by people: Bremen</code>.' },
        { kind: 'p', mt: true, html: 'Bayern covers about 70,542 km2 and Nordrhein-Westfalen about 34,113, yet Nordrhein-Westfalen has more people: 18,034,454 against 13,248,928. So "biggest" was never one question. It was two, and the program needed to be told which. Bremen is smallest both ways, the one easy answer.' },
        { kind: 'code', label: 'Version 2: invent a new measure, then sort by it', lang: 'Python', code: V2, note: 'It prints: <code>Berlin 4136 people per km2</code>, <code>Hamburg 2467 people per km2</code>, <code>Bremen 1680 people per km2</code>, <code>Brandenburg 86 people per km2</code> and <code>Mecklenburg-Vorpommern 68 people per km2</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Five Länder, three ways of being big (Destatis figures; the density is our calculation)', head: ['Land', 'Area, km2', 'People, 31 Dec 2024', 'People per km2'], rows: [
          ['Bayern', '70,541.77', '13,248,928', '188'],
          ['Nordrhein-Westfalen', '34,112.65', '18,034,454', '529'],
          ['Berlin', '891.12', '3,685,265', '4,136'],
          ['Bremen', '419.61', '704,881', '1,680'],
          ['Mecklenburg-Vorpommern', '23,294.83', '1,573,597', '68']
        ] },
        { kind: 'source', html: 'Data: Statistisches Bundesamt (Destatis), Gemeindeverzeichnis-Informationssystem GV-ISys, Bundesländer mit Hauptstädten nach Fläche, Bevölkerung und Bevölkerungsdichte, Gebietsstand 31.12.2024, published September 2025, reproduced with the source named as its licence line allows. Population on the Zensus 2022 basis. Densities are our own, rounded to whole people.' },
        { kind: 'p', mt: true, html: 'The last step is the one we care about most. The workbook has its own column of people per square kilometre, so the children compare. All sixteen of our rounded answers match the Destatis column, 16 of 16. A program that agrees with a trusted published number has earned some trust; one that disagrees has found either a mistake in the code or a question worth asking.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7, no screen.</strong> Cut out sixteen cards, one per Land, with a dot sticker for every million people. Line them up by dots. Now line them up by how big the shape is on a map. Did the order change?',
          '<strong>Ages 8 to 9, Scratch.</strong> Put the populations in a list and write a script that walks through it, keeping the largest so far. Then change one block so it keeps the smallest.',
          '<strong>Ages 10 to 12, in Python.</strong> Type and run the first version, then try the second on your own before you read ours, and check every answer against the Destatis column.',
          '<strong>Going further.</strong> Berlin, Hamburg and Bremen take the three most crowded places. All three are city-states. Find out what a city-state is, and why that puts them at the top.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Age by age',
      h2: 'What should a child in Germany learn first, at 6, 8 and 10?',
      lede: 'The right first step depends far more on reading and patience than on the grade. These are the starting points we use, and they move with the child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'At 6 and 7', p: 'Short lessons of stories and moving characters, made from coloured Scratch blocks with almost nothing to type. The goal is to put steps in order, notice when something goes wrong, and try again without upset.' },
          { h3: 'At 8 and 9', p: 'Real games in Scratch: a score, a timer, a level that gets harder. Children meet variables and conditions without the names first, and finish projects they want to show their family.' },
          { h3: 'At 10 to 12', p: 'Typed Python for children who read well: drawings with turtle, small games, and data like the Länder file. This is the age at which most Länder start school Informatik, so the overlap helps.' }
        ] },
        { kind: 'p', mt: true, html: 'We do not teach children to copy answers or to paste code from an AI tool. A child who can explain why a loop runs four times, or find the one block that makes a sprite vanish, has learned something that lasts. That is the measure we report to parents, and it is the same in every country we teach in.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Book a free first class.</strong> The mentor meets your child, notices how they read and how much English they use, and tries a short puzzle together.',
          '<strong>Get a placement.</strong> You hear which course and which age group fit, or whether one to one suits better.',
          '<strong>Two classes a week.</strong> The same mentor each time, building on the last lesson, with short notes for you on what was made.',
          '<strong>Move up when ready.</strong> A child moves from Scratch to Python when they are ready, not on a fixed date.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in German time?',
      lede: 'After school and at weekends. Germany is three and a half or four and a half hours behind India, so a German afternoon is an Indian evening, which suits the mentors well.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three example slots, with the clock on the mentor\'s desk', head: ['Your clock in Germany', 'Mentor in India, winter', 'Mentor in India, after 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['Saturday 11:00', '15:30', '14:30'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz fixes German legal time: MEZ, one hour on top of UTC, and MESZ in summer, two hours on top. German clocks went back on 25 October 2026 and go forward again on 28 March 2027, while Indian clocks never change (UTC+5:30). That leaves a gap of four and a half hours this winter and three and a half from late March. The slots are examples only; no batch is tied to them.' },
        { kind: 'p', mt: true, html: 'The booking page works in your own time zone and confirms the class in German time. Autumn, Christmas and Easter holidays differ from Land to Land, and classes carry on through them unless you ask to pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a child can do at each stage, from 6 to 12',
    lede: 'Our own milestones. We use them to place children in the right group and to tell parents, in plain words, what has changed.',
    table: { caption: 'Five coding milestones for children (ours)', head: ['Step', 'Usual age', 'What the child can do'], rows: [
      ['1. Order', '6 to 7', 'Put instructions in the right order and make a character move, talk and stop'],
      ['2. Repeat', '7 to 8', 'Use a loop instead of copying the same block again and again'],
      ['3. Decide', '8 to 9', 'Make a game react with if and else, and keep a score in a variable'],
      ['4. Type', '9 to 11', 'Type small Python programs with a list, a loop and a function of their own'],
      ['5. Sort and check', '10 to 12', 'Sort real data by a chosen measure and check the result against a published figure']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the Länder project. The sentence to listen for is "it depends what you sort by", because it shows your child has understood that a question has to be made exact before a computer can answer it.',
      'We report progress as things built and explained, never as minutes on a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If two people both say "biggest" and mean different things, they can both be right. Ask what they are measuring.',
      'When you can check your answer against someone else\'s, check it. If they differ, find out why.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children in Germany',
    lede: 'All nine are taught live and in English by a mentor who stays with your child, whether in a class or privately.',
    bands: [
      { num: 'I', h3: 'Thinking and puzzles', sub: 'Ages 6 to 14', courses: [
        { code: 'CKI / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns, order and logic for children of 6 to 9, before or beside coding.' },
        { code: 'CKI / THINK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking problems into steps, the habit school Informatik builds on.' },
        { code: 'CKI / THINK / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics competitions', blurb: 'Our own puzzles in the style of the Biber and the Jugendwettbewerb.' }
      ] },
      { num: 'II', h3: 'Games and building', sub: 'Ages 7 to 14', courses: [
        { code: 'CKI / PLAY / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft projects in one long course.' },
        { code: 'CKI / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks, then real code, inside a world children already love.' },
        { code: 'CKI / PLAY / 03', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Phone apps a child designs, builds and can hand to a grandparent.' }
      ] },
      { num: 'III', h3: 'School alongside', sub: 'Ages 8 to 16', courses: [
        { code: 'CKI / SCHOOL / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion, Klasse 5 to 10', blurb: 'Follows the school subject in English from the first year it appears.' },
        { code: 'CKI / SCHOOL / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, patterns and graphs worked out in Python, 10 to 15.' },
        { code: 'CKI / SCHOOL / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What a learning machine is, with no chatbot account needed, 8 to 14.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of lessons looks like',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in German time, once homework is done.' },
      { time: 'Weekend', l: 'Saturday or Sunday late mornings, unhurried for younger children.' },
      { time: 'One to one', l: 'A time agreed with the mentor, moved when family plans change.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person every week, who knows how your child learns.' },
      { h3: 'Child at the keyboard', p: 'Your child builds; the mentor guides and asks questions.' },
      { h3: 'Age groups', p: 'A six year old learns beside six and seven year olds.' },
      { h3: 'Plain English', p: 'Short sentences, shown on screen, repeated kindly.' },
      { h3: 'Notes for parents', p: 'What was made, what was tricky, what is next.' },
      { h3: 'Pause in holidays', p: 'Classes run all year; you can pause for a trip.' }
    ]
  },

  projectsH2: 'What our older students build',
  projectsLede: 'Children who start young keep going. Here are a few projects from our older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> show many more.',
  reviewsLede: 'What families wrote on Google, left exactly as they wrote it.',

  fees: {
    h2: 'Fees for children in Germany',
    lede: 'Each month\'s fee pays for eight live lessons. The euro amounts here follow the European Central Bank reference rate; the charge itself is made in US dollars, and your bank does the last conversion, so its figure can end up slightly higher or lower.',
    free: ['A free first class with a mentor', 'A short puzzle and a first program', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two live classes a week', 'Monthly, stop at the end of any month'],
    one: ['Your child and one mentor alone', 'A pace and projects set for your child', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Parents in Germany ask',
    h2: 'Coding classes for kids in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach in English, and only in English, live, with mentors who work from India. They keep sentences short, show on screen before they explain, and get used to how each child talks, so a child with school English can follow from the first lesson.' },
      { q: 'At what age can a child in Germany start?', a: 'From 6. Six and seven year olds begin with Scratch, where blocks snap together and little reading is needed. From about 9, children who read comfortably can move to typed Python.' },
      { q: 'Does school in Germany teach coding?', a: 'Later, and it depends on the Land. The Informatik-Monitor 2026/27 shows compulsory computing from grade 5 in Länder such as Nordrhein-Westfalen, Baden-Württemberg, Mecklenburg-Vorpommern and Thüringen, from grade 7 in several others, and not for every pupil in six Länder, including Hessen and Brandenburg.' },
      { q: 'Is there any computing in Grundschule?', a: 'Not as a compulsory subject in any Land at present. The KMK published a key-points paper in 2024 on anchoring informatics education in primary school, but for a child of 6 to 9 in Germany, coding today happens outside the timetable.' },
      { q: 'When do classes take place in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class at 15:45 in Germany is 20:15 for the mentor in India until 28 March 2027.' },
      { q: 'Does it matter which Land we live in?', a: 'Not for our classes, which are online and the same everywhere. It matters for school, because the year Informatik starts differs by Land, so we place older children with that in mind.' },
      { q: 'How many children are in a group?', a: 'A group class has fifteen to twenty children close in age and one mentor. Families who want private lessons choose one to one instead: two classes a week, just your child and the mentor.' },
      { q: 'Why is the fee in euro but the payment in dollars?', a: 'We show the monthly fee in euro, worked out from the European Central Bank reference rate, so you can compare it easily. The card is charged in US dollars, and your own bank turns that into euro on the day, which is why a statement can be a few cents out. Trying the first class costs nothing.' },
      { q: 'Will my child just watch videos?', a: 'No. Classes are live, and your child does the building while the mentor guides. Children are asked to explain what their code does, not to copy it, and never to paste answers from an AI tool.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a keyboard, a stable internet connection, and headphones with a microphone if the room is noisy. Scratch and Python both run free in a browser or on the computer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other pages for parents in Germany, from Berlin schools to the right starting age.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for every age and Land.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Berlin schools, a Berlin data project.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Help with school Informatik, in German.' },
      { href: '/best-age-to-start-coding', label: 'Best age to start coding', p: 'What changes between 6 and 12.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where young children usually begin.' },
      { href: '/python-for-10-year-olds', label: 'Python at ten', p: 'A ten year old\'s first typed programs.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the mentor gets to know your child, tries a short puzzle and a first program together, and then suggests a course and an age group.',
    readFirst: 'Parents who like to read ahead can open <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a lesson in detail, or browse <a class="ag-inline-link" href="/courses">the course list</a> for the syllabuses.',
    note: 'All classes are live online and in English, with mentors in India. For a quick answer to any question, message us on WhatsApp.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/best-age-to-start-coding', label: 'When to start' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'It depends what you sort by'
  },

  personalityCss: `
.ag-root.ag-cki .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cki .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cki .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cki .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cki .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national overview and sixteen Land pages); KMK Primarbereich and Eurydice dossier; Einheitenzeitgesetz; all read 2 November 2026. Statistisches Bundesamt (Destatis), GV-ISys Bundesländer workbook, Gebietsstand 31.12.2024, reproduction with source permitted.',
    localProject: 'The sixteen Länder sorted three ways: an original Python project on the Destatis Länder workbook in which Bayern is biggest by area, Nordrhein-Westfalen by people and Berlin by people per km2, with all sixteen of our densities checked against the Destatis column (16 of 16); plus screen-free and Scratch versions. Lesson family: what you sort by decides the winner.',
    requiredMentions: ['laender.csv', 'Biggest by people: Nordrhein-Westfalen', 'Biggest by area: Bayern', 'Berlin 4136 people per km2', 'Mecklenburg-Vorpommern 68 people per km2', 'match the Destatis column, 16 of 16', 'zur Verankerung von Medienbildung und informatischer Bildung in der Grundschule', 'It depends what you sort by'],
    sources: [
      { claim: 'First compulsory computing grade in each Land, 2026/27.', url: 'https://informatik-monitor.de/' },
      { claim: 'Nordrhein-Westfalen Informatik in grades 5 and 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Hessen without compulsory Informatik.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'KMK 2024 key-points paper on informatics in primary school; Grundschule length.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'School-start cut-off between 30 June and 30 September.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'Länder area, population and density, 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any Land with compulsory computing in Grundschule: none found in the Informatik-Monitor, so none claimed.',
      'Sachsen-Anhalt grade 5: the quoted Land text says grades 6 to 10, so grade 6 is shown.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the Gesellschaft für Informatik, the KMK, Destatis or a school: none.'
    ]
  }
};
