'use strict';
// Coding classes for kids in Potsdam (ag- city page, Germany cluster P6 row DE166, tier-2 shape coding-classes-for-kids =
// ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: a Potsdam child spends six years in Grundschule and then meets Informatik only as an option, yet the city hosts the
// world's top school programming contest in 2027. The page is about the long early stretch, a first contest, and one habit
// every young programmer needs: a big dataset often arrives in parts, and one part is not the whole.
// IOI 2027 is covered by the live page ioi-2027-potsdam-guide; this page links it and states one sourced fact only.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-in-potsdam-germany/):
//  - KMK Sekundarstufe I (kmk-seki): "Aufbauend auf der gemeinsamen vierjährigen - in Berlin und Brandenburg sechsjährigen -
//    Grundschule umfasst die Sekundarstufe I drei Bildungsgänge" (fact 5).
//  - GI Informatik-Monitor 2026/27, Brandenburg page (infmon-brandenburg): Gesamt- and Oberschulen grades 9 and 10 Schwerpunkt
//    of five hours possible in Informatik; Wahlpflicht Informatik grades 7 to 10 within eight hours (7 and 8) and six hours (9
//    and 10); Gymnasien grades 9 and 10 Schwerpunkt "bis zu sieben Stunden"; Gymnasium Einführungsphase grade 10 two-hour
//    Wahlpflichtkurs; Qualifikationsphase 11 and 12 GK three hours, LK five hours (fact 74). National page: Brandenburg among
//    six Länder without Informatik for all (fact 92) and among three with no binding plans (fact 96).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Brandenburg (1) 19.10. - 30.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 03.04.
//    18.05. 01.07. - 14.08." (fact 279).
//  - BWINF: Informatik-Biber 2026 9 to 20 November 2026; primary pupils nine tasks in 30 minutes; free, grades 3 to 13
//    (facts 130, 132, 133). IOI 2027: "Die 39. Internationale Informatik-Olympiade findet vom 12. bis 19. September 2027 am
//    Hasso-Plattner-Institut in Potsdam statt." (fact 153).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Potsdam 184,754 (Land capital); Brandenburg 2,556,747; Berlin 3,685,265.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Landeshauptstadt Potsdam, "Bäume Teil 1 von 3 Stadtkarte Potsdam", "Bäume Teil 2 von 3 - Stadtkarte Potsdam",
//    "Bäume Teil 3 von 3 Stadtkarte Potsdam", opendata.potsdam.de, licence dl-zero-de/2.0 (Datenlizenz Deutschland Zero 2.0) on
//    each, modified 10 October 2026, records_count 100000, 100000 and 83772. Exports with columns objectid, ggartbez, pktnr,
//    datum downloaded 3 November 2026 as baeume_teil1.csv (6,012,249 bytes, sha256 0c521526...), baeume_teil2.csv (6,014,076,
//    251e0e2e...), baeume_teil3.csv (5,047,286, b3dddc02...); semicolons, UTF-8 with BOM.
// Our own calculations (scratchpad de/w/T3/potsdam/run/v1.py, v12.py, python3 -I, Python 3.14.8):
//  v1: "Rows in part 1: 100000"; "Conifers in part 1: 11272 = 11.3 %".
//  v2: "Rows in all parts: 283772  different ids: 283772"; "Conifers in all parts: 39196 = 13.8 %".
//  Part 2: 12,572 Nadelbaum (12.6 %); part 3: 15,352 (18.3 %). All parts: Laubbaum 223,339, Nadelbaum 39,196, Obstbaum 18,846,
//  Baumstumpf 2,144, "Einzelgebüsch, Strauch" 247. No objectid or pktnr repeats across parts.
// Lesson family: one part is not the whole; a file that stops at a round number is a page of the data, so combine every part
// and check that no id appears twice.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'with open("baeume_teil1.csv", encoding="utf-8-sig") as f:',
  '    kinds = Counter(line["ggartbez"] for line in csv.DictReader(f, delimiter=";"))',
  '',
  'total = sum(kinds.values())',
  'print("Rows in part 1:", total)',
  'print("Conifers in part 1:", kinds["Nadelbaum"], "=", round(100 * kinds["Nadelbaum"] / total, 1), "%")'
].join('\n');

const V2 = [
  'kinds = Counter()',
  'seen = set()',
  'for part in ["baeume_teil1.csv", "baeume_teil2.csv", "baeume_teil3.csv"]:',
  '    with open(part, encoding="utf-8-sig") as f:',
  '        for line in csv.DictReader(f, delimiter=";"):',
  '            seen.add(line["objectid"])',
  '            kinds[line["ggartbez"]] += 1',
  '',
  'total = sum(kinds.values())',
  'print("Rows in all parts:", total, " different ids:", len(seen))',
  'print("Conifers in all parts:", kinds["Nadelbaum"], "=", round(100 * kinds["Nadelbaum"] / total, 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Potsdam: coding for kids' },
  slug: 'coding-classes-for-kids-in-potsdam-germany',
  code: 'ckp',
  accent: '#363C64',
  accentRationale: 'Coding for kids in Potsdam: a deep Prussian blue #363C64 for the city of Sanssouci; contrast 8.58 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-brandenburg', name: 'Brandenburg' }],
  routeLabel: 'Coding classes for kids in Potsdam',
  title: 'Coding Classes for Kids in Potsdam: Live Online, in English',
  description: 'Coding classes for kids in Potsdam aged 6 to 12, live online in English: six years of Grundschule, optional Informatik, a first contest, and a city tree project.',
  ogDescription: 'Live online coding for Potsdam children aged 6 to 12, in English at the child\'s pace: why Brandenburg leaves computing late and optional, a free first contest in November 2026, and an original project on the city\'s 283,772 mapped trees.',
  twitterDescription: 'Coding for Potsdam children, live in English: Brandenburg schools, a first contest and a city tree project.',
  pageName: 'Coding Classes for Kids in Potsdam',
  webPageDescription: 'A guide for Potsdam parents of children aged 6 to 12 to live coding classes in English, built from the KMK, the GI Informatik-Monitor, BWINF and Destatis, with an original project on the three-part tree register of the Landeshauptstadt Potsdam.',
  courseDescription: 'Live online coding classes in English for Potsdam children aged 6 to 12: Scratch first, Python and C++ later, contest puzzles for the curious, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Brandenburg', href: '/coding-classes-in-brandenburg' }],
  crumbLabel: 'Kids in Potsdam',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#six', label: 'Schools' },
    { href: '#parts', label: 'Trees' },
    { href: '#contests', label: 'Contests' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Potsdam &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Potsdam',
  lede: 'In September 2027 school programmers from around the world will meet in Potsdam for the International Olympiad in Informatics. Most Potsdam children will not have had a single compulsory computing lesson by then, because Brandenburg keeps them in Grundschule for six years and treats Informatik as an option afterwards. Our live classes in English fill those years for children aged 6 to 12: games first, then real code, then real data, like the city\'s own register of more than a quarter of a million trees.',
  secondaryCta: { href: '#parts', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, my child lives in Potsdam and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Google rating 4.9 from about 547 reviews',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['First', 'Scratch, then Python or C++'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Potsdam times', 'After school or weekend mornings'],
    ['Mentors', 'In India, teaching in English'],
    ['Free', 'The first class']
  ],
  capsuleQ: 'In a sentence or three',
  capsule: 'Modern Age Coders runs coding classes for Potsdam children aged 6 to 12 as live online lessons held in English. Children start with Scratch games, switch to typed Python or C++ at around 9 and can try contest puzzles. Each child keeps one mentor who suits their pace and accent, learning either with fifteen to twenty others or alone, after school or at weekends.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Which course should a Potsdam child start with?',
    lede: 'A long all-round course from six, a contest course for puzzle lovers, and typed Python for children ready for a keyboard.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CKP / 01', title: 'Coding for Kids', note: 'Ages 6 to 12 in age bands, ten to twelve months. A child moves from animated Scratch scenes to small apps, and meets the idea of a learning machine near the end.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CKP / 02', title: 'German Informatics Competitions', note: 'From age 9, six months, joinable in any month. The puzzle level needs no code at all and leads towards the Biber and later rounds.' },
      { course: 'python-ai-kids-masterclass', code: 'CKP / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12, eight to ten months. Children type every line themselves; turtle pictures and games come first, city data like the trees below later.' }
    ]
  },

  sections: [
    {
      id: 'six',
      eyebrow: 'Brandenburg schools',
      h2: 'Do Potsdam children learn computing at school?',
      lede: 'Not as a compulsory subject. Brandenburg has six years of Grundschule and offers Informatik only as an option after that.',
      body: [
        { kind: 'two',
          leftH3: 'A six-year Grundschule',
          left: [
            'In most Länder, secondary school starts after grade 4. The KMK describes the exception in its overview of lower secondary education: the shared Grundschule lasts four years, "in Berlin und Brandenburg sechsjährigen", six years in Berlin and Brandenburg.',
            'So a Potsdam child is a Grundschule pupil from about 6 to about 12, the entire age range of this page, and no Brandenburg rule asks for a computing lesson in those six years.'
          ],
          rightH3: 'Informatik as an option',
          right: [
            'After Grundschule, Informatik in Brandenburg stays optional, according to the 2026/27 edition of the GI\'s Informatik-Monitor. Gesamt- and Oberschulen may use a five-hour focus block in grades 9 and 10 for it, or offer it as a Wahlpflicht subject from grade 7; Gymnasien may use up to seven hours in grades 9 and 10.',
            'The GI names Brandenburg among six Länder without Informatik for every pupil and among three where no binding plan to change that is known.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Potsdam school career, school year 2026/27', head: ['Grades', 'School', 'Informatik'], rows: [
          ['1 to 6', 'Grundschule', 'No compulsory computing'],
          ['7 and 8', 'Gesamtschule or Oberschule', 'Possible as a Wahlpflicht subject'],
          ['9 and 10', 'Gesamtschule or Oberschule', 'Wahlpflicht, or a focus block of up to five hours'],
          ['9 and 10', 'Gymnasium', 'A focus block of up to seven hours, if offered'],
          ['10 (Gymnasium)', 'Einführungsphase', 'A two-hour Wahlpflichtkurs, if offered'],
          ['11 and 12 (Gymnasium)', 'Qualifikationsphase', 'Grundkurs three hours, Leistungskurs five hours']
        ] },
        { kind: 'source', html: 'Sources: the KMK overview of lower secondary schooling, and the Informatik-Monitor 2026/27 by the Gesellschaft für Informatik (Brandenburg and Germany-wide pages), consulted 2 November 2026.' },
        { kind: 'p', mt: true, html: 'The result is a long wait. A curious six year old in Potsdam could reach grade 9 before a school offers Informatik at all, and even then only if the school runs it and the child chooses it. Children who start at home or with us at 7 or 8 have years of practice by then. The <a class="ag-inline-link" href="/coding-classes-in-brandenburg">Brandenburg page</a> covers the Land in detail; we teach beside school and award no grades.' }
      ]
    },
    {
      id: 'parts',
      tint: 'tint',
      eyebrow: 'A real Potsdam project',
      h2: 'How many of Potsdam\'s trees are conifers?',
      lede: 'The city maps every tree on its city map and publishes the list. It is so long that it comes in three parts, and that is exactly where the lesson is.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Landeshauptstadt Potsdam publishes its trees from the Stadtkarte as open data on opendata.potsdam.de under the Datenlizenz Deutschland Zero 2.0, free for any use. The register comes as "Teil 1 von 3", "Teil 2 von 3" and "Teil 3 von 3". We downloaded all three on 3 November 2026, keeping four columns: an id, the kind of tree (ggartbez), a point number and a survey date.',
            'The kinds are Laubbaum (broadleaf tree), Nadelbaum (conifer), Obstbaum (fruit tree), Baumstumpf (stump) and Einzelgebüsch, Strauch (a single bush).'
          ],
          rightH3: 'The question',
          right: [
            'What share of Potsdam\'s mapped trees are conifers? A child with only the first file could answer quickly. Version 1 does exactly that.',
            'Before reading the answer, look at the first number it prints, and ask whether anything about it looks odd.'
          ] },
        { kind: 'code', label: 'Version 1: count one file', lang: 'Python', code: V1, note: 'It prints: <code>Rows in part 1: 100000</code> and <code>Conifers in part 1: 11272 = 11.3 %</code>.' },
        { kind: 'p', mt: true, html: 'Exactly 100,000 rows. Real cities do not happen to have a round number of trees. A list that stops at exactly 100,000 has almost certainly been cut, the way a long book is split into volumes, and here the title says so: Teil 1 von 3. Any answer from part 1 alone is an answer about part 1, not about Potsdam.' },
        { kind: 'p', html: 'Version 2 reads all three parts into one count. It also keeps a set of every id it has seen, because when data is split, a row can sometimes land in two parts; if that happened, the number of different ids would be smaller than the number of rows.' },
        { kind: 'code', label: 'Version 2: append to Version 1 and read all three files', lang: 'Python', code: V2, note: 'It prints: <code>Rows in all parts: 283772  different ids: 283772</code> and <code>Conifers in all parts: 39196 = 13.8 %</code>.' },
        { kind: 'p', mt: true, html: 'All 283,772 rows have different ids, so nothing was counted twice, and the conifer share rises from 11.3 to 13.8 percent. The reason is that the parts are not alike: in our count, part 2 is 12.6 percent conifers and part 3 is 18.3 percent. Had a child been handed only part 3, they would have reported nearly one tree in five. Same city, same question, three different answers, until every part is in.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Conifers in each part of Potsdam\'s tree register (our count)', head: ['File', 'Rows', 'Conifers', 'Share'], rows: [
          ['Teil 1', '100,000', '11,272', '11.3 %'],
          ['Teil 2', '100,000', '12,572', '12.6 %'],
          ['Teil 3', '83,772', '15,352', '18.3 %'],
          ['All three', '283,772', '39,196', '13.8 %']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Potsdam, Bäume Teil 1, 2 and 3 von 3, Stadtkarte Potsdam, opendata.potsdam.de, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. Counts and code are ours. The rows also include 2,144 stumps and 247 single bushes; whether to call those trees is a question for the children. We are not connected with the city.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Tip a bag of mixed sweets into three bowls without looking. Count the red ones in the first bowl only. Then count all three. Did the first bowl tell the truth?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make three lists and a sprite that counts the word "tree" in one list, then in all three. Make one list end at exactly 100 items.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1 on part 3 instead of part 1, then run Version 2. Explain to someone at home why the answers differ.',
          '<strong>Going further.</strong> Remove the stumps and bushes from the total and work out the conifer share again. Does a stump count as a tree?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Is there a coding contest a Potsdam child can try?',
      lede: 'Yes, and a big one is coming to the city. Start small, though.',
      body: [
        { kind: 'two',
          leftH3: 'The Informatik-Biber, this month',
          left: [
            'The Bundesweite Informatikwettbewerbe run the Informatik-Biber. It costs nothing, is open to pupils from grade 3 up to grade 13, and asks for no programming at all. In 2026 it runs from 9 to 20 November. Primary pupils get nine tasks in 30 minutes.',
            'Schools register their pupils, so the class teacher is the person to ask. We never use or copy the real Biber tasks; in class we write our own puzzles in the same spirit.'
          ],
          rightH3: 'The IOI, in 2027',
          right: [
            'BWINF announces that the 39th International Olympiad in Informatics takes place from 12 to 19 September 2027 at the Hasso-Plattner-Institut in Potsdam. It is for secondary school students far beyond the level of this page.',
            'For families who want to know how it works and how Germany\'s team is chosen, our <a class="ag-inline-link" href="/ioi-2027-potsdam-guide">IOI 2027 Potsdam guide</a> explains it. We are not connected with BWINF, the HPI or the IOI.'
          ] },
        { kind: 'p', mt: true, html: 'For a child of 6 to 12, the honest path is puzzles first, then Scratch, then a typed language. BWINF notes that its IOI training is programmed in C++, which is one reason some of our older children choose C++ for Kids after Scratch. None of that needs to be decided at seven. Enjoying puzzles at seven is the whole plan.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'How does a Potsdam child manage a class in English?',
      lede: 'Better than most parents expect. Three reasons.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No surprises', p: 'Every lesson is live and in English, taught by mentors in India. We have no German-language classes and tell families so before the free trial, not after it.' },
          { h3: 'Seeing first', p: 'A coding class is mostly showing: a block is dragged, a sprite jumps, a number changes. The English word arrives at the same moment as the thing it means, which is how young children learn words anyway.' },
          { h3: 'Patient mentors', p: 'Our mentors keep a gentle pace and learn quickly how your child pronounces things. Mixing in a German word is fine; the child just hears the English one in reply.' }
        ] },
        { kind: 'p', mt: true, html: 'Your child keeps one mentor from week to week, and that steadiness matters for young children: the mentor learns which kinds of puzzle delight your child and which need a gentler start.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes for Potsdam children?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Potsdam times beside the mentor\'s time in India', head: ['Potsdam', 'India now (MEZ months)', 'India from 28 March 2027 (MESZ)'], rows: [
          ['15:20', '19:50', '18:50'],
          ['16:40', '21:10', '20:10'],
          ['Saturday 09:45', '14:15', '13:15'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'MEZ (UTC+1) and MESZ (UTC+2) are German legal time under the Einheitenzeitgesetz; MEZ began again on 25 October 2026. India keeps UTC+5:30 all year, so the mentor\'s clock is 4 hours 30 minutes ahead of Potsdam until 28 March 2027 and 3 hours 30 minutes ahead after it. The rows are examples only.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Brandenburg school holidays, 2026/27, with weekdays (KMK dates; weekdays ours)', head: ['Break', 'First day', 'Last day'], rows: [
          ['Herbstferien', 'Monday 19.10.2026', 'Friday 30.10.2026'],
          ['Weihnachtsferien', 'Wednesday 23.12.2026', 'Saturday 02.01.2027'],
          ['Winterferien', 'Monday 01.02.2027', 'Saturday 06.02.2027'],
          ['Osterferien', 'Monday 22.03.2027', 'Saturday 03.04.2027'],
          ['Pfingsten', 'Tuesday 18.05.2027', 'Tuesday 18.05.2027'],
          ['Sommerferien', 'Thursday 01.07.2027', 'Saturday 14.08.2027']
        ] },
        { kind: 'source', html: 'Dates from the Brandenburg line of the KMK holiday overview 2026/2027, dated 9 October 2025.' },
        { kind: 'p', mt: true, html: 'Holidays do not stop classes. Potsdam is Brandenburg\'s capital, with 184,754 inhabitants according to Destatis for 31 December 2024, in a Land of 2,556,747. Children from Werder, Michendorf or Kleinmachnow share the Brandenburg calendar. Berlin, with 3,685,265 people right next door, also has a six-year Grundschule, but its holiday dates differ in places, so a Berlin child\'s plan follows Berlin\'s list.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What will my child be able to do, step by step?',
    lede: 'Our milestones for ages 6 to 12, each shown in your child\'s own project.',
    table: { caption: 'From first blocks to real data (our milestones)', head: ['Step', 'Typical age', 'Shown when your child'], rows: [
      ['Order', '6 to 7', 'Makes a sprite do five things in the right order'],
      ['Repeat', '7 to 8', 'Uses a loop instead of copying blocks'],
      ['Remember', '8 to 9', 'Keeps a score in a variable'],
      ['Type', '9 to 10', 'Writes and fixes a short Python program'],
      ['Combine', '10 to 12', 'Counts across several files and checks for repeats']
    ] },
    left: { h3: 'For parents', ps: [
      'The combine step is the Potsdam tree project. A child who asks "is this all of it?" before trusting a number has learned something many adults still miss.',
      'Every few weeks a brief message tells you what your child made.'
    ] },
    right: { h3: 'For children', ps: [
      'If a file ends on a round number, look for the next part.',
      'Count the ids as well as the rows. If they differ, something was counted twice.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Potsdam children',
    lede: 'All nine follow the same pattern: taught live, in English, by a mentor who stays.',
    bands: [
      { num: 'I', h3: 'Thinking', sub: 'Ages 5 to 12', courses: [
        { code: 'CKP / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic in two age bands, 6 to 9.' },
        { code: 'CKP / THINK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Plans, puzzles and step-by-step thinking, 7 to 12.' },
        { code: 'CKP / THINK / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for everyday sums, 5 to 10.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 17', courses: [
        { code: 'CKP / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Programming inside Minecraft, 7 to 12.' },
        { code: 'CKP / GAME / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Scratch, Roblox and Minecraft together, 8 to 12.' },
        { code: 'CKP / GAME / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot games', blurb: 'GDScript in the open-source Godot engine, 10 to 17.' }
      ] },
      { num: 'III', h3: 'Typed code', sub: 'Ages 8 to 12', courses: [
        { code: 'CKP / CODE / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'The contest language, gently, 9 to 12.' },
        { code: 'CKP / CODE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'Pages written in HTML and CSS by the child, 9 to 12.' },
        { code: 'CKP / CODE / 03', slug: 'block-coding-app-development-masterclass', title: 'App making', blurb: 'Block-built apps that run on a phone, 8 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Inside the classes',
    h2: 'How do live classes work for a Potsdam child?',
    lede: 'Twice a week for an hour, always with the mentor your child knows. Younger children work in short bursts: a puzzle, a new block, building, showing.',
    slots: [
      { time: 'After school', l: 'Potsdam afternoons from about twenty past three.' },
      { time: 'Weekend mornings', l: 'Saturday and Sunday, calm times for the youngest.' },
      { time: 'One to one', l: 'Arranged with the mentor around your week.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'A familiar person every class.' },
      { h3: 'Short steps', p: 'Small pieces, lots of trying.' },
      { h3: 'Child drives', p: 'Your child holds the mouse.' },
      { h3: 'Age groups', p: 'Children with their own age.' },
      { h3: 'Parent notes', p: 'A few lines on progress every few weeks.' },
      { h3: 'Batch or alone', p: 'Up to twenty children together, or just one.' }
    ]
  },

  projectsH2: 'What older students go on to build',
  projectsLede: 'A glimpse of where it leads: work by a few of our older students. Many more sit on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on Google by families and students.',

  fees: {
    h2: 'What do coding classes for a Potsdam child cost?',
    lede: 'A monthly fee pays for eight live classes. We display it in euro at the European Central Bank reference rate, while the card is charged in US dollars; the conversion is your bank\'s, so the euro amount on your statement may be slightly off ours.',
    free: ['A free first class', 'A puzzle and a first Scratch program', 'No card needed'],
    group: ['Fifteen to twenty children of similar age', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['Your child with their own mentor', 'Projects picked for your child', 'Times your family chooses']
  },

  faq: {
    eyebrow: 'Potsdam parents ask',
    h2: 'Coding classes for kids in Potsdam: frequent questions',
    items: [
      { q: 'Are the classes taught in German?', a: 'No, we only teach in English. The mentor, who works from India, slows down, repeats and quickly gets used to your child\'s accent, and nearly everything happens visibly on the screen, so limited English is rarely a problem.' },
      { q: 'From which age do you take children?', a: 'From 6, starting with Scratch, whose coloured blocks need no typing. Most children move to Python, or for some C++, at about 9, when reading and typing are comfortable.' },
      { q: 'Do Potsdam schools teach coding?', a: 'Not as a compulsory subject. Brandenburg has a six-year Grundschule, and after it the Gesellschaft für Informatik reports Informatik only as an option: a Wahlpflicht subject or a focus block in grades 9 and 10, depending on the school.' },
      { q: 'Can my child take part in the IOI 2027 in Potsdam?', a: 'The IOI is for secondary school students selected through the Bundeswettbewerb Informatik, far beyond the level of a child of 6 to 12. Our IOI 2027 Potsdam guide explains the selection. For young children, the Informatik-Biber is the right first contest.' },
      { q: 'When are classes in Potsdam time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Potsdam families mostly pick mid-afternoons or weekend mornings.' },
      { q: 'What is the tree project on this page?', a: 'Our own lesson on the Landeshauptstadt Potsdam tree register, which is published in three parts. Children count conifers in one part, then in all three, and learn why a file that ends at exactly 100,000 rows is only part of the story.' },
      { q: 'Will my child use ChatGPT?', a: 'No. OpenAI\'s own terms set 13 as the minimum and ask for parental permission below 18. Our young learners make tiny AI programs of their own instead, which shows them what is going on inside.' },
      { q: 'Where are the mentors?', a: 'They teach from India over a live video call. This winter, a class at 16:40 in Potsdam starts at 21:10 on the mentor\'s clock. Your child does not change mentors partway through.' },
      { q: 'How many children are in a group?', a: 'Between fifteen and twenty, all close in age. One-to-one is the private alternative: two weekly classes for your child alone.' },
      { q: 'How are fees paid?', a: 'By the month. You see the fee in euro, calculated with the reference rate of the European Central Bank; the charge itself is in US dollars and your bank converts it, so expect a small difference. Booking the trial asks for no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'Related pages',
    lede: 'Pages Potsdam parents often read next.',
    items: [
      { href: '/coding-classes-in-brandenburg', label: 'Coding classes in Brandenburg', p: 'The Land, its schools and our classes.' },
      { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 in Potsdam', p: 'The olympiad in your city, explained for families.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own Biber-style puzzles.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'For families on the Berlin side.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'The usual first step.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a lesson with us looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'During the trial hour your child and a mentor solve a puzzle and build a tiny Scratch program. Afterwards you hear which course and age band the mentor recommends.',
    readFirst: 'To read first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Lessons are live online, in English only, with mentors in India. For quick questions, WhatsApp us in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 Potsdam' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-brandenburg', label: 'Brandenburg' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teil 1 von 3 is not the whole city'
  },

  personalityCss: `
.ag-root.ag-ckp .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ckp .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ckp .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ckp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ckp .ag-code-head b { letter-spacing: 0.018em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Sekundarstufe I; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Brandenburg page and national overview); KMK Ferienregelung 2026/2027; BWINF Informatik-Biber 2026 and IOI 2027 pages; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; Landeshauptstadt Potsdam, Bäume Teil 1 to 3 von 3, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'Potsdam trees in three parts: an original Python project on the city\'s tree register. Part 1 alone has exactly 100,000 rows and 11.3 % conifers; all three parts have 283,772 rows with 283,772 different ids and 13.8 % conifers; part 3 alone gives 18.3 %. Lesson family: one part is not the whole; combine every part and check ids.',
    requiredMentions: ['baeume_teil1.csv', 'Rows in part 1: 100000', 'Conifers in part 1: 11272 = 11.3 %', 'Rows in all parts: 283772  different ids: 283772', 'Conifers in all parts: 39196 = 13.8 %', 'in Berlin und Brandenburg sechsjährigen', 'up to seven hours', 'Teil 1 von 3 is not the whole city'],
    sources: [
      { claim: 'Six-year Grundschule in Berlin and Brandenburg.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-i.html' },
      { claim: 'Informatik in Brandenburg by school type and Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/brandenburg' },
      { claim: 'Brandenburg among six without Informatik for all; no binding plans.', url: 'https://informatik-monitor.de/' },
      { claim: 'Brandenburg school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'IOI 2027 in Potsdam, 12 to 19 September 2027.', url: 'https://bwinf.de/olympiade/2027/' },
      { claim: 'Potsdam tree register parts and licence.', url: 'https://opendata.potsdam.de/explore/dataset/baeume-1-stadtkarte-potsdam/' }
    ],
    rejectedClaims: [
      'Any claim that our students take part in or qualify for the IOI: none.',
      'Naming Potsdam schools or the city\'s school dataset as a source of students: not used.',
      'Any connection with the city of Potsdam, BWINF, the HPI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
