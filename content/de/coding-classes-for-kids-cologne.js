'use strict';
// Coding classes for kids in Cologne (ag- city door, Germany cluster P5 row DE116, alloc code coe, hubGroup city).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: in NRW every pupil gets Informatik in grades 5 and 6, and Grundschule maths and Sachunterricht already carry
// informatics content in grades 3 and 4, so a Cologne child aged 6 to 12 is heading straight for the subject; the NRW
// school calendar 2026/27; and a tree-register project in which the same 82,809 trees give two different "most common
// tree" answers depending on how you group them.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-cologne/ and
// facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - GI Informatik-Monitor 2026/27, Nordrhein-Westfalen (infmon-nordrhein-westfalen/c73c5f12.txt): "An allen
//    allgemeinbildenden Schularten wird das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet.";
//    Hauptschulen "im Gesamtumfang von bis zu acht Wochenstunden"; Realschule "im Gesamtumfang von 14 Wochenstunden das
//    Wahlpflichtfach Informatik"; Gesamt- und Sekundarschulen "im Gesamtumfang von zwölf Wochenstunden"; Gymnasien G9
//    "in den Jahrgangsstufen 9 und 10 im Gesamtumfang von sechs Wochenstunden"; "Das Projekt „Informatik an Grundschulen
//    (IaG)“ mit Kindern der Jahrgangsstufen 3 und 4"; "in den Fächern Mathematik und Sachunterricht explizit
//    Kompetenzerwartungen und Inhalte ausgewiesen, die im fachlichen Kontext zur Stärkung der informatischen Bildung
//    insbesondere in den Klassen 3 und 4 beitragen"; "Die Grundschule umfasst die Jahrgangsstufen 1 bis 4".
//  - KMK Ferien 2026/2027 (kmk-fer2627/fe303dbf.txt): "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03.
//    - 03.04. 18.05. 19.07. - 31.08."
//  - bwinf.de Biber (FACTS.md 129 to 137). Destatis GV-ISys 31.12.2024: Köln 1,024,621; NRW 18,034,454.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Köln, "Baumkataster Köln 2017" via Open.NRW / GovData (govdata_baumkataster.json, publisher_name "Stadt
//    Köln"), resource Bestand_Einzelbaeume_Koeln_0.csv, licence Datenlizenz Deutschland Zero 2.0 (dcat-ap.de
//    dl-zero-de/2.0). Notes: "Baumkataster Stand 2017. Inklusive Georeferenzierung und Angaben nach Art, Gattung und Alter
//    der erfassten Bäume." File sha256 0cf4a1fb...dfdf63ea, 134,189 data rows, columns incl. Gattung and DeutscherN.
// Our own calculations (scratchpad de/w/C2/coe, python3 -I): v1.py prints "Linde 11833", "Platane 9070", "Winterlinde
// 6249", "Rows with no name: 52660"; v2.py prints "Tilia 19305", "Acer 16498", "Platanus 9072", "Kinds of tree: 120".
// Extra: 82,809 rows with a genus; within Tilia, names Linde 11,833, Winterlinde 6,249, Silberlinde 468; within Acer,
// Ahorn 6,218, Spitzahorn 4,425, Bergahorn 2,749, Feldahorn 1,551.
// Lesson family: grouping changes the answer; count by the right category.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'tally = {}',
  'skipped = 0',
  'with open("koeln_trees.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        name = row["DeutscherN"].strip()',
  '        if name == "":',
  '            skipped += 1',
  '            continue',
  '        tally[name] = tally.get(name, 0) + 1',
  '',
  'top = sorted(tally, key=tally.get, reverse=True)[:3]',
  'for name in top:',
  '    print(name, tally[name])',
  'print("Rows with no name:", skipped)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'tally = {}',
  'with open("koeln_trees.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        genus = row["Gattung"].strip()',
  '        if genus != "":',
  '            tally[genus] = tally.get(genus, 0) + 1',
  '',
  'top = sorted(tally, key=tally.get, reverse=True)[:3]',
  'for genus in top:',
  '    print(genus, tally[genus])',
  'print("Kinds of tree:", len(tally))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Cologne: coding for kids' },
  slug: 'coding-classes-for-kids-cologne',
  code: 'coe',
  accent: '#136C52',
  accentRationale: 'Coding classes for kids, Cologne: a deep linden green #136C52 for the lime trees that top the city\'s tree register in the project; it clears 4.5:1 on the paper and all three tints (alloc minimum 5.17)',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Cologne',
  title: 'Coding Classes for Kids in Cologne: Live Online, in English',
  description: 'Coding classes for kids in Cologne aged 6 to 12, live online in English: Informatik in NRW from grade 5, the 2026/27 holidays and a Cologne tree data project.',
  ogDescription: 'Live online coding for Cologne children aged 6 to 12, taught in English at their own pace: how NRW brings Informatik to every pupil in grades 5 and 6, the school calendar 2026/27, and a real project on the city\'s register of 134,189 trees.',
  twitterDescription: 'Coding for Cologne kids, live in English: Informatik in NRW, the 2026/27 holidays and a Cologne tree register project.',
  pageName: 'Coding Classes for Kids in Cologne',
  webPageDescription: 'A guide for Cologne parents of children aged 6 to 12 to learning to code, built from the Gesellschaft für Informatik\'s NRW page, the KMK holiday table and the Informatik-Biber rules, with an original Python project on the Stadt Köln tree register.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Cologne: Scratch first, then typed Python and small data projects, in a group of fifteen to twenty or one to one, with one regular mentor who adapts to the child\'s pace and accent.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Cologne',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#trees', label: 'Tree project' },
    { href: '#holidays', label: 'Holidays' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Cologne &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Cologne',
  lede: 'A Cologne child will meet Informatik sooner than children in many other Länder: North Rhine-Westphalia makes it compulsory in grades 5 and 6 at every school type, and its Grundschule maths and Sachunterricht already touch on informatics in grades 3 and 4. Below: what that means for a child of 6 to 12, how our live classes in English work, the dates of the NRW school year 2026/27, and the city\'s own tree register, where the question "which tree is most common?" has two honest answers.',
  secondaryCta: { href: '#trees', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, we live in Cologne and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; one mentor per child, in English',
  spec: [
    ['Ages', '6 to 12, batches by age'],
    ['Path', 'Scratch, then typed Python'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Cologne times', 'After school and Saturdays, flexible'],
    ['Mentors', 'In India, teaching live by video'],
    ['Trial', 'A free first class, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'For children aged 6 to 12 in Cologne, Modern Age Coders teaches coding live online in English: Scratch games to begin, then typed Python and small projects on real Cologne data, such as the city\'s tree register. Each child keeps one mentor, who adapts to their pace and accent. Families choose one to one or a batch of fifteen to twenty, after school or on Saturdays, a good run-up to the compulsory Informatik that NRW starts in grade 5.',

  picks: {
    eyebrow: 'Where Cologne children begin',
    h2: 'Three courses for Cologne children aged 6 to 12',
    lede: 'For the years just before grade 5 there is typed Python; for the youngest, a long block-coding course; and to test the water, a short Scratch course.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'COE / 01', title: 'Python and AI for Kids', note: 'Made for children around 9 to 12 heading for grade 5 Informatik: typed Python, turtle graphics, games, and data projects like the tree tally on this page.' },
      { course: 'kids-coding-blocks-masterclass', code: 'COE / 02', title: 'Coding for Kids', note: 'The longest route, for six to twelve year olds in batches by age: Scratch stories and games, simple apps, and a gentle move to typed code over about a school year.' },
      { course: 'scratch-programming-complete-course', code: 'COE / 03', title: 'Scratch Coding for Kids', note: 'A short course of three to four months that leaves a beginner with real games and gives you a clear sense of whether coding has caught on.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'Schools in Cologne',
      h2: 'Do children in Cologne learn Informatik at school?',
      lede: 'Yes, and earlier than in many Länder. The Gesellschaft für Informatik\'s 2026/27 monitor sets out what North Rhine-Westphalia requires.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 3 and 4: a first taste',
          left: [
            'Grundschule in NRW covers grades 1 to 4. The monitor reports that the Land\'s revised Grundschule curricula name informatics-related expectations inside two existing subjects, Mathematik and Sachunterricht, especially for grades 3 and 4.',
            'It also mentions a project called Informatik an Grundschulen, IaG, run with children in grades 3 and 4 to teach basic informatics concepts, with a handbook for teachers. So a Cologne eight or nine year old may meet algorithms in class, but as part of maths or Sachunterricht, not as a subject of its own.'
          ],
          rightH3: 'Grades 5 and 6: compulsory for everyone',
          right: [
            'From grade 5 the picture changes. At every general school type in NRW, the monitor says, Informatik is a compulsory subject in grades 5 and 6: Hauptschule, Realschule, Sekundarschule, Gesamtschule and Gymnasium alike.',
            'After grade 6 it becomes a choice. Depending on the school type, pupils can pick Informatik as a Wahlpflicht subject in grades 7 to 10, or at the nine-year Gymnasium in grades 9 and 10.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in NRW secondary schools in 2026/27', head: ['Type of school', 'Grades 5 and 6', 'Later, as an elective (Wahlpflicht)'], rows: [
          ['Hauptschule', 'Compulsory', 'Grades 7 to 10, up to eight weekly hours in total'],
          ['Realschule', 'Compulsory', 'Grades 7 to 10, within a 14-hour elective block'],
          ['Sekundarschule, Gesamtschule', 'Compulsory', 'Grades 7 to 10, within a 12-hour elective block'],
          ['Gymnasium (nine years)', 'Compulsory', 'Grades 9 and 10, six weekly hours in total']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen, compiled from the APO-S I; read on 2 November 2026. Weekly hours are totals across the grades named. In the Oberstufe, Informatik can be taken as a Grundkurs or a Leistungskurs.' },
        { kind: 'p', mt: true, html: 'For a parent, the useful fact is the timing. A child who is seven now will sit a compulsory Informatik lesson within a few years, whichever school they move to after grade 4. Children who arrive at grade 5 able to plan a sequence of steps and fix a small bug tend to enjoy the subject instead of fearing it. That is what our classes for six to ten year olds build, through games and stories rather than worksheets.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes taught in English, and is that hard for a young child?',
      lede: 'All teaching is in English. Most children cope far better than parents expect, because so much of a coding lesson is shown on screen.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, and only English', p: 'We do not run German-language classes, and we say so before the first lesson. For Cologne families who speak English at home or whose children attend an international or bilingual school, that is the point; for others it becomes a weekly hour of real, useful English.' },
          { h3: 'Matched to your child', p: 'The mentor speaks at your child\'s speed, repeats with simpler words when needed and gets used to their accent within a few lessons. A child who mixes in a German word is understood, then gently given the English one.' },
          { h3: 'Show, try, change', p: 'A typical lesson is mostly doing: the mentor shows a step, the child tries it and then changes it to make it their own. Coding words like loop, if and repeat appear again and again, so the vocabulary grows by itself.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors teach from India over live video, which is why Cologne afternoons work well: they fall in the Indian evening. Your child keeps the same mentor every week, someone who soon knows whether they like a puzzle to wrestle with or a nudge in the right direction.' }
      ]
    },
    {
      id: 'trees',
      tint: 'tint',
      eyebrow: 'A real Cologne project',
      h2: 'Which tree is most common on Cologne\'s register? Two programs, two answers',
      lede: 'Stadt Köln publishes its register of individual trees as open data that anyone may reuse. Our older children count the trees by name and then by genus, and discover that the grouping you choose decides the winner.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Baumkataster Köln 2017 lists 134,189 trees, each with a location, a height, an estimated age, a genus in Latin (Gattung) and a German name (DeutscherN). The city notes that it includes species, genus and age of the recorded trees.',
            'Not every row is complete: 52,660 trees have no German name and 51,380 no genus. We give the child the file as koeln_trees.csv and tell them to skip empty names rather than count them as a kind of tree.'
          ],
          rightH3: 'The question',
          right: [
            'Which tree does Cologne have most of? The first program tallies the German names with a dictionary: every time a name appears, its count goes up by one. Then it sorts the names by count and prints the top three.',
            'Before running it, children guess. Chestnut is a popular answer, and so is oak. Both are wrong, but the real surprise comes with the second program.'
          ] },
        { kind: 'code', label: 'Version 1: tally the German names', lang: 'Python', code: V1, note: 'It prints: <code>Linde 11833</code>, <code>Platane 9070</code>, <code>Winterlinde 6249</code> and <code>Rows with no name: 52660</code>.' },
        { kind: 'p', mt: true, html: 'Linde, the lime tree, comes first with 11,833. But look at third place: Winterlinde, the small-leaved lime, with 6,249. That is also a lime. The register uses many names for trees of the same kind, so counting names splits one family into several smaller ones.' },
        { kind: 'p', html: 'The second program counts by genus instead, the Latin family name in the Gattung column, so every lime lands in Tilia and every maple in Acer.' },
        { kind: 'code', label: 'Version 2: tally by genus', lang: 'Python', code: V2, note: 'It prints: <code>Tilia 19305</code>, <code>Acer 16498</code>, <code>Platanus 9072</code> and <code>Kinds of tree: 120</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'How the limes and maples on the Cologne register split by German name (our count)', head: ['German name in the register', 'Trees', 'Genus'], rows: [
          ['Linde', '11,833', 'Tilia'],
          ['Winterlinde', '6,249', 'Tilia'],
          ['Silberlinde', '468', 'Tilia'],
          ['Ahorn', '6,218', 'Acer'],
          ['Spitzahorn', '4,425', 'Acer'],
          ['Bergahorn', '2,749', 'Acer'],
          ['Feldahorn', '1,551', 'Acer']
        ] },
        { kind: 'source', html: 'Data: Stadt Köln, Baumkataster Köln 2017, file Bestand_Einzelbaeume_Koeln_0.csv via Open.NRW, licence Datenlizenz Deutschland Zero 2.0, downloaded November 2026. All counts are our own; 82,809 rows have a genus. The register\'s state is 2017, so newer plantings are not in it.' },
        { kind: 'p', mt: true, html: 'Maples show the effect even more strongly. By name, Ahorn manages 6,218 and never reaches the top three; by genus, Acer is second with 16,498. Neither program is wrong. They answer different questions, and a good coder says which question they asked.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Collect ten leaves on a walk. Sort them once by colour and once by shape. Does the biggest pile stay the biggest?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of tree names and a counter for each. Add a "lime family" counter that goes up for Linde and Winterlinde alike.',
          '<strong>From 10, typed Python.</strong> Run Version 1 and Version 2, then print the top five for each and explain in one sentence why the lists differ.',
          '<strong>Going further.</strong> The file has a height column. Find the average height of the limes and the maples, but first decide what to do with heights recorded as 0.'
        ] }
      ]
    },
    {
      id: 'holidays',
      eyebrow: 'The Cologne school year',
      h2: 'When are the NRW school holidays in 2026/27?',
      lede: 'Our classes keep running through the holidays unless you pause. Here are the dates most Cologne families plan around.',
      body: [
        { kind: 'table', numCols: [], caption: 'NRW school holidays in 2026/27, first and last free day', head: ['Break', 'From and to'], rows: [
          ['Herbstferien (autumn)', '17 to 31 October 2026'],
          ['Weihnachtsferien (Christmas)', '23 December 2026 to 6 January 2027'],
          ['Osterferien (Easter)', '22 March to 3 April 2027'],
          ['Pfingsten (Whit Tuesday)', '18 May 2027'],
          ['Sommerferien (summer)', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK holiday overview 2026/2027 (as of 9 October 2025), row for Nordrhein-Westfalen. NRW has no separate winter break in 2026/27, and the table marks three movable days off (bewegliche Ferientage) for the Land.' },
        { kind: 'two', mt: true,
          leftH3: 'A free contest this month',
          left: [
            'The Informatik-Biber, run by Bundesweite Informatikwettbewerbe, takes place in the Biberwochen from 9 to 20 November 2026. It is a free online round of logic puzzles that any pupil from grade 3 to grade 13 can try without having coded before; well over half a million pupils took part in 2025.',
            'Schools enter their classes, so ask your child\'s teacher whether their school takes part. Results arrive in December 2026, certificates in January 2027.'
          ],
          rightH3: 'Using the long breaks',
          right: [
            'The six summer weeks from 19 July 2027 are a good time for a short, focused project, for example finishing a Scratch game or extending the tree tally to heights and ages.',
            'In class we never use actual Biber tasks. We write puzzles of our own about order, hidden rules and shortest paths, which many children enjoy as practice.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Cologne?',
      lede: 'Cologne afternoons sit in the Indian evening, so most classes start between the school bell and the evening meal, or on Saturday.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Cologne start times and the matching time in India', head: ['Cologne time', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['15:50', '20:20', '19:20'],
          ['Saturday 11:45', '16:15', '15:15']
        ] },
        { kind: 'source', html: 'Germany keeps UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and resumes on 28 March 2027. India stays at UTC+5:30 all year: 4.5 hours later than Cologne in winter, 3.5 hours later in summer. Sample rows only; batches have no fixed times.' },
        { kind: 'p', mt: true, html: 'When you book, you choose a slot in your own clock and the mentor sees it in theirs. Children at an Offene Ganztagsschule often take the 15:50 slot or a Saturday, which gives the youngest a calm start.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Cologne child can do at each stage',
    lede: 'Five steps we use ourselves to place a child and to show parents how far they have come.',
    table: { caption: 'Our coding levels for ages 6 to 12', head: ['Level', 'Typical age', 'Your child is able to'], rows: [
      ['1. Sequence', '6 and 7', 'Arrange the steps of a story or a path so a sprite follows them'],
      ['2. Repeat', '7 to 8', 'Replace copied blocks with a loop'],
      ['3. Count', '8 to 10', 'Keep a separate counter for each kind of thing in a list'],
      ['4. Group', '9 to 11', 'Decide which category to count by, and explain the choice'],
      ['5. Real data', '10 to 12', 'Read a large file, tally it and explain what the top result means']
    ] },
    left: { h3: 'For parents', ps: [
      'Steps 3 and 4 are the tree project. Choosing how to group things is a real skill, and it is the same one grade 5 Informatik begins with: sorting and classifying information.',
      'We report on finished pieces of work your child can talk you through; screen time is not a measure we use.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you count, decide what counts as "the same".',
      'Two programs can give two answers and both be right. Say which question yours answers.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Cologne children',
    lede: 'All taught live and in English by one regular mentor, privately or in a batch.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 7 to 15', courses: [
        { code: 'COE / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Logic and problem solving', blurb: 'Puzzles that build step-by-step thinking, from 7.' },
        { code: 'COE / THINK / 02', slug: 'ai-literacy-for-kids-course', title: 'How AI works', blurb: 'Machine learning explained for children, no adult accounts, from 8.' },
        { code: 'COE / THINK / 03', slug: 'maths-through-coding', title: 'Maths in code', blurb: 'School maths topics turned into programs, from 10.' }
      ] },
      { num: 'II', h3: 'Play and build', sub: 'Ages 7 to 14', courses: [
        { code: 'COE / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Programming inside a game children know, from 7.' },
        { code: 'COE / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Games friends can play, written in Luau, from 8.' },
        { code: 'COE / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Game making', blurb: 'Scratch, then Roblox, then Minecraft, from 8.' }
      ] },
      { num: 'III', h3: 'Make it real', sub: 'Ages 8 to 12', courses: [
        { code: 'COE / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Block-coded apps', blurb: 'Apps that run on a real phone, from 8.' },
        { code: 'COE / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Web pages for kids', blurb: 'Design and publish a small site, from 9.' },
        { code: 'COE / MAKE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and small games in C++, from 9.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A typical week of classes for a Cologne family',
    lede: 'Two live hours a week with one mentor. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'From about 14:15 Cologne time, after Grundschule or the OGS.' },
      { time: 'Saturdays', l: 'Late morning, unhurried for the youngest.' },
      { time: '1-on-1', l: 'A time you agree, at your child\'s pace.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One person all year, who knows your child.' },
      { h3: 'Simple English', p: 'Short sentences, checked as you go.' },
      { h3: 'Child at the controls', p: 'Mouse and keyboard from lesson one.' },
      { h3: 'Batches by age', p: 'Seven year olds with seven year olds.' },
      { h3: 'Parent notes', p: 'What was made and what comes next.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'What our older students make',
  projectsLede: 'Some children who start in Grundschule are still building things years later. A handful of projects from our older students follows; the full set is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' and students\' Google reviews, quoted without edits.',

  fees: {
    h2: 'Fees for Cologne families',
    lede: 'You pay a monthly fee that covers eight live classes. This page shows it in euro at the European Central Bank reference rate; payment itself goes through in US dollars, and because your bank handles the exchange, the final amount can vary a little.',
    free: ['A free first class', 'A puzzle and a first program', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two classes a week', 'Pay monthly, stop any month'],
    one: ['Your child and one mentor', 'Projects chosen with your child', 'Times around your week']
  },

  faq: {
    eyebrow: 'Cologne parents ask',
    h2: 'Questions Cologne parents ask about coding classes',
    items: [
      { q: 'Are the classes in German?', a: 'No, never: all classes are live and taught only in English. The mentor slows down, rephrases and adjusts to your child\'s pace and accent, so a child with basic English can take part. Code keywords such as if and repeat are English anyway.' },
      { q: 'Is Informatik compulsory in NRW schools?', a: 'Yes, in grades 5 and 6 at every general school type, according to the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27. After that, Informatik is an elective in most school types, and at the nine-year Gymnasium in grades 9 and 10.' },
      { q: 'Does my child learn any informatics in Grundschule?', a: 'Some, inside other subjects. The monitor reports that the revised NRW Grundschule curricula include informatics-related content in Mathematik and Sachunterricht, especially in grades 3 and 4, while the compulsory subject itself starts in grade 5.' },
      { q: 'What age is right to start?', a: 'Six is fine. The youngest begin in Scratch with blocks that click together, so almost nothing needs typing. Around 9, most children are ready for typed Python, which suits the year or two before grade 5.' },
      { q: 'What time are classes in Cologne?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Common Cologne slots are mid-afternoon, around 15:50, or late Saturday morning.' },
      { q: 'Who are the mentors and where are they?', a: 'They work from India and teach live over video in English, and each child stays with one of them. Until 28 March 2027, a 15:50 class in Cologne begins at 20:20 in India.' },
      { q: 'Do classes stop in the NRW holidays?', a: 'Only if you want them to. Lessons run on through autumn, Christmas and Easter breaks unless you ask for a pause; the KMK lists the summer holidays 2027 for NRW as 19 July to 31 August 2027.' },
      { q: 'How many children are in a batch?', a: 'Fifteen to twenty, all of a similar age. For a child who wants the mentor to themselves, one to one means two private classes a week at agreed times.' },
      { q: 'How much is it, and what currency is charged?', a: 'There is one monthly fee. We display it in euro, converted at the reference rate of the European Central Bank; the actual charge is in US dollars, which your bank changes into euro, so the booked sum can differ slightly. Your first class costs nothing and needs no card.' },
      { q: 'What will my child need at home?', a: 'A laptop or desktop with a real keyboard, a camera and decent internet. Scratch needs only a browser; for Python we help you install what is needed during the first typed lessons.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Cologne parents.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'NRW next to the other fifteen Länder.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'The Biber explained, plus puzzles we wrote ourselves.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Project ideas sorted by age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child solves a short logic puzzle and writes a first tiny program. Meanwhile the mentor notices how they approach a problem and how comfortable English feels, and then suggests a course and a batch.',
    readFirst: 'To read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a class and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'All classes are live online, taught from India in English only. Send us a WhatsApp message, in English, with any question.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Decide what counts as the same before you count'
  },

  personalityCss: `
.ag-root.ag-coe .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-coe .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-coe .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-coe .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-coe .ag-code-head b { letter-spacing: 0.018em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen; KMK Ferien 2026/2027; Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Destatis GV-ISys; Einheitenzeitgesetz; Stadt Köln, Baumkataster Köln 2017 via Open.NRW, Datenlizenz Deutschland Zero 2.0; all read 2 and 3 November 2026.',
    localProject: 'The Cologne tree tally: an original Python project on the Stadt Köln tree register (134,189 rows) that counts trees by German name (Linde 11,833, Platane 9,070, Winterlinde 6,249; 52,660 rows without a name) and then by genus (Tilia 19,305, Acer 16,498, Platanus 9,072; 120 genera), showing that the grouping decides the answer; with screen-free and Scratch versions. Lesson family: grouping changes the answer.',
    requiredMentions: ['koeln_trees.csv', 'Linde 11833', 'Winterlinde 6249', 'Rows with no name: 52660', 'Tilia 19305', 'Kinds of tree: 120', 'Informatik an Grundschulen', 'Decide what counts as the same before you count'],
    sources: [
      { claim: 'Informatik compulsory in grades 5 and 6 at all general school types in NRW; electives later; IaG project and Grundschule content in grades 3 and 4.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026 dates and facts.', url: 'https://bwinf.de/biber/' },
      { claim: 'Baumkataster Köln 2017, Stadt Köln, Datenlizenz Deutschland Zero 2.0.', url: 'https://ckan.govdata.de/dataset/baumkataster-koln-2017' },
      { claim: 'Köln population 1,024,621 (31.12.2024).', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Weekly hours for Informatik in grades 5 and 6 in NRW: not stated in the monitor text we read, so none given.',
      'Any claim about why so many rows lack a name or genus: the city does not say, so none given.',
      'Naming Cologne schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with Stadt Köln, the NRW ministry, BWINF or a school: none.'
    ]
  }
};
