'use strict';
// Coding classes for kids in Dortmund (ag- city door, Germany cluster P5 row DE131, alloc code cdo, accent #473368).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: North Rhine-Westphalia puts Informatik on every timetable in grades 5 and 6, so a Dortmund child meets computing
// at about ten. The page is about the four Grundschule years before that, what the grade 5 and 6 subject is and what
// follows it, the Mathematik-Olympiade as a free school contest for primary children, and one Dortmund data project.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - KMK Primarbereich (fact 1): Grundschule "von der ersten bis zur vierten" Jahrgangsstufe (Berlin and Brandenburg to 6).
//  - KMK Eurydice dossier (fact 28): "Am Ende der Grundschule wird keine Abschlussprüfung durchgeführt".
//  - GI Informatik-Monitor 2026/27, NRW page (infmon-nordrhein-westfalen/c73c5f12.txt; facts 80, 62, 81, 82): "An allen
//    allgemeinbildenden Schularten wird das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet.";
//    "Für die Jahrgangsstufen 5 und 6 aller Schulformen liegt ein Kernlehrplan für das Pflichtfach Informatik vor.";
//    Hauptschule Wahlpflicht 7 to 10 "bis zu acht Wochenstunden"; Realschule 7 to 10 "14 Wochenstunden"; Gesamt- und
//    Sekundarschulen 7 to 10 "zwölf Wochenstunden"; Gymnasium G9 Wahlpflicht 9 and 10 "sechs Wochenstunden"; Q-phase
//    Grundkurs "dreistündig", Leistungskurs "fünfstündig"; written Abitur tasks set centrally.
//  - NRW Schulministerium, Zentrale Prüfungen 10 (fact 64): ZP10 in Deutsch, Mathematik, Englisch.
//  - Mathematik-Olympiade (facts 162, 163, 164, 166): "jährlich rund 200.000 Schülerinnen und Schüler"; grades 5 to 7
//    three rounds, four from grade 8; "Seit 2005 wird die Mathematik-Olympiade auch für die Grundschulen angeboten.";
//    66th MO "Landesrunde: 26. bis 28.02.2027 Bundesrunde: 30.05. bis 02.06.2027" (mathematik-olympiaden.de), Bundesrunde
//    2027 in Kaiserslautern (fact 167).
//  - KMK FER2026_27.pdf (fact 275): "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08."
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Dortmund 603,462; NRW 18,034,454.
//  - Time: Einheitenzeitgesetz (MEZ UTC+1, MESZ UTC+2); summer time ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Stadt Dortmund, "Spielplätze" (Orte von Interesse, XErleben) via Open.NRW / GovData
//    https://ckan.govdata.de/dataset/spielplatze816da, CSV export
//    https://open-data.dortmund.de/api/v2/catalog/datasets/spielplatze/exports/csv?use_labels=true, licence Datenlizenz
//    Deutschland Zero 2.0. 366 rows; sha256 b7ae8174...0033accb. Downloaded 2 Nov 2026; copy in src-pages/<slug>/data/.
// Our own calculations (scratchpad de/w/C5/do/v1.py, v2.py; python3 -I, run in the data folder):
//  v1 ends "IndexError: list index out of range" (first empty Information cell is row 39).
//  v2 prints 1870s 1, 1950s 39, 1960s 80, 1970s 54, 1980s 60, 1990s 46, 2000s 47, 2010s 20, 2020s 1;
//  "Read: 348 Could not read: 18". The 18: 10 empty, 4 "Westfalenpark", 1 "Träger: Jugendamt", 3 "Baujahr k.A.".
//  Built before 1970 by Stadtbezirk: Innenstadt-Nord 23 of 31, Innenstadt-Ost 17 of 28, Innenstadt-West 19 of 36,
//  Lütgendortmund 6 of 35, Aplerbeck 3 of 33. Overall 120 of 348 before 1970, 68 from 2000. 1878 is the single 1870s
//  value (Am Münzenkamp, Brackel); 2020 the single 2020s value (Waldmarkenhang, Hombruch). 358 Spielplatz, 5
//  Wasserspielplatz, 3 Abenteuerspielplatz.
// Lesson family: numbers hidden inside text; read them carefully and report what you could not read.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'years = []',
  'register = open("spielplaetze.csv", encoding="utf-8")',
  'for entry in csv.DictReader(register, delimiter=";"):',
  '    text = entry["Information"]          # e.g. "2300 qm, Baujahr 1983"',
  '    year = text.split("Baujahr ")[1]',
  '    years.append(int(year))',
  '',
  'print("Oldest:", min(years))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'decades = {}',
  'unread = []',
  'register = open("spielplaetze.csv", encoding="utf-8")',
  'for entry in csv.DictReader(register, delimiter=";"):',
  '    text = entry["Information"]',
  '    parts = text.split("Baujahr ")',
  '    if len(parts) == 2 and parts[1].strip().isdigit():',
  '        decade = int(parts[1]) // 10 * 10',
  '        decades[decade] = decades.get(decade, 0) + 1',
  '    else:',
  '        unread.append(text)',
  '',
  'for decade in sorted(decades):',
  '    print(str(decade) + "s", "#" * (decades[decade] // 4), decades[decade])',
  'print("Read:", sum(decades.values()), "Could not read:", len(unread))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Dortmund: coding for kids' },
  slug: 'coding-classes-for-kids-dortmund',
  code: 'cdo',
  accent: '#473368',
  accentRationale: 'Coding classes for kids, Dortmund: a dark plum violet #473368, quiet beside the brick red of Berlin and the petrol of the German door; contrast 8.78 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Dortmund',
  title: 'Coding Classes for Kids in Dortmund: Live Online, in English',
  description: 'Coding classes for kids in Dortmund aged 6 to 12, live online in English: NRW Informatik in grades 5 and 6, the Maths Olympiad and a playground data project.',
  ogDescription: 'Live online coding for Dortmund children aged 6 to 12, taught in English at their own speed: what NRW schools teach from grade 5, the four Grundschule years before it, and a project that reads the building year of every city playground.',
  twitterDescription: 'Coding for Dortmund kids, live in English: NRW Informatik from grade 5 and a real playground data project.',
  pageName: 'Coding Classes for Kids in Dortmund',
  webPageDescription: 'A guide for Dortmund parents of children aged 6 to 12: where computing sits in the North Rhine-Westphalia school timetable, sourced to the KMK and the Gesellschaft für Informatik, the Mathematik-Olympiade as a free school contest, and an original Python project on the City of Dortmund playground register.',
  courseDescription: 'Live online coding classes in English for Dortmund children aged 6 to 12: puzzles and Scratch for the youngest, Python and small AI projects from about nine, in groups of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Dortmund',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#nrw', label: 'Schools' },
    { href: '#playgrounds', label: 'Project' },
    { href: '#olympiad', label: 'Olympiad' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Dortmund &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Dortmund',
  lede: 'In North Rhine-Westphalia every pupil gets Informatik in grades 5 and 6, so a Dortmund child meets computing at about ten, earlier than in most of Germany. The four Grundschule years before that have no computing lesson of their own. This page sets out what the NRW subject covers, how our live classes in English fill the primary years, a free maths contest open from grade 3, and a project in which children read the building year of every Dortmund playground and find out how messy real data can be.',
  secondaryCta: { href: '#playgrounds', label: 'See the playground project' },
  wa: 'Hello Modern Age Coders, we live in Dortmund and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; more than 10,000 learners worldwide &middot; Dortmund afternoons, taught in English',
  spec: [
    ['Ages', '6 to 12, in age bands'],
    ['First tools', 'Puzzles, Scratch, then Python'],
    ['Class size', 'Group of fifteen to twenty, or 1-on-1'],
    ['Dortmund times', 'After school or weekend mornings'],
    ['Mentors', 'Based in India, teaching live'],
    ['Trial', 'First class free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'For Dortmund children aged 6 to 12, Modern Age Coders offers coding classes as live online lessons in English: logic puzzles and Scratch first, then real Python, typed line by line, and small AI projects in our Python and AI for Kids course. A mentor who adjusts to your child\'s pace and accent teaches either a group of fifteen to twenty children or your child alone, after school or at weekends. It covers the Grundschule years before NRW Informatik starts in grade 5.',

  picks: {
    eyebrow: 'Where Dortmund children start',
    h2: 'Three courses that fit a Dortmund child from 6 to 12',
    lede: 'A thinking course for the first school years, the Python course most children move into at about nine, and a contest course for children who like the Maths Olympiad.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'CDO / 01', title: 'Reasoning and Readiness', note: 'Ages 6 to 9, in two age bands. Patterns, ordering, simple rules and spoken reasoning in English: the groundwork for coding before a child reads fluently.' },
      { course: 'python-ai-kids-masterclass', code: 'CDO / 02', title: 'Python and AI, typed from day one', note: 'For children of about nine and over: real typed Python from week one, drawings and games, later working with real files, like the playground register further down.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'CDO / 03', title: 'Mathematik-Olympiade and Känguru Training', note: 'From Klassenstufe 3. Our own olympiad-style problems, worked through in English, for children who want more than school maths.' }
    ]
  },

  sections: [
    {
      id: 'nrw',
      eyebrow: 'School in North Rhine-Westphalia',
      h2: 'When do Dortmund children first learn computing at school?',
      lede: 'In grade 5. NRW is one of the Länder that makes Informatik compulsory for every pupil, and it starts at the beginning of secondary school. The full path below is drawn from the GI monitor and the KMK.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 1 to 4: Grundschule, no Informatik',
          left: [
            'Dortmund children spend grades 1 to 4 in Grundschule, as in almost every Land: the KMK describes a primary stage running "von der ersten bis zur vierten" Jahrgangsstufe, with Berlin and Brandenburg as the only exceptions. There is no leaving exam at the end of it, and computing has no lesson of its own.',
            'That makes the years from 6 to about 10 free time for coding in the best sense: nothing is being examined, so a child can play, build and get things wrong without a mark attached.'
          ],
          rightH3: 'Grades 5 and 6: Informatik for everyone',
          right: [
            'The Informatik-Monitor 2026/27 of the GI (Gesellschaft für Informatik) records that NRW teaches "das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6" at all general school types, with a Kernlehrplan written for those two years. Whether your child goes to a Gymnasium, a Gesamtschule, a Realschule or a Hauptschule in Dortmund, Informatik is on the grade 5 timetable.',
            'After grade 6 it becomes a choice, and the size of that choice depends on the school type, as the table shows.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in NRW schools after the compulsory years, 2026/27', head: ['School type', 'Grades', 'What the rules allow'], rows: [
          ['All general schools', '5 and 6', 'Compulsory Informatik for every pupil'],
          ['Hauptschule', '7 to 10', 'Elective (Wahlpflicht), up to eight weekly hours in total'],
          ['Realschule', '7 to 10', 'Elective within a block of 14 weekly hours'],
          ['Gesamtschule, Sekundarschule', '7 to 10', 'Elective within a block of twelve weekly hours'],
          ['Gymnasium (nine-year route)', '9 and 10', 'Elective offered with six weekly hours in total'],
          ['Gymnasium Oberstufe', 'Qualifikationsphase', 'Grundkurs three hours or Leistungskurs five hours a week']
        ] },
        { kind: 'source', html: 'Source: GI Informatik-Monitor 2026/27, Nordrhein-Westfalen page, read on 2 November 2026; KMK, Primarbereich and the Eurydice dossier on the German school system. The written Informatik Abitur in NRW is set centrally. At the end of grade 10 NRW pupils sit the Zentrale Prüfungen 10 (ZP10) in German, maths and English.' },
        { kind: 'p', mt: true, html: 'What this means for a Dortmund family: the school will teach computing, but it starts at ten and, for many pupils, stops being compulsory at twelve. A child who has spent a few years building things before grade 5 tends to enjoy the Informatik lessons rather than struggle through them, and a child who enjoys grades 5 and 6 can keep going with us after the elective choice narrows.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are classes taught in German or in English?',
      lede: 'In English, always. We say so before the first class because it matters for a family choosing between options in Dortmund.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, not German', p: 'Every lesson is live and in English. We do not run German-language groups. Families at German schools often treat this as two subjects at once: a child learns to program and hears an hour of clear spoken English twice a week.' },
          { h3: 'Speed set by the child', p: 'The mentor slows down, rephrases and waits. A child who mixes German words into an answer is understood, and the mentor offers the English word back without fuss. Pace and accent are matched to the learner, not to a script.' },
          { h3: 'The screen does the talking', p: 'In Scratch and Python most of the lesson is visible: blocks snap, a turtle draws, a number prints. Children follow what they can see, and the English they need grows week by week from a small, repeated set of words.' }
        ] },
        { kind: 'p', mt: true, html: 'Every mentor works from India over live video, which is why a Dortmund afternoon lines up with an Indian evening. The same mentor stays with a group, which means that after a month they know which child needs a harder puzzle and which one needs a minute of quiet before answering.' }
      ]
    },
    {
      id: 'playgrounds',
      tint: 'tint',
      eyebrow: 'A real Dortmund project',
      h2: 'How old are Dortmund\'s playgrounds? A project in reading numbers out of text',
      lede: 'The City of Dortmund publishes a register of its playgrounds as open data. One column says, in words, how big each playground is and when it was built. Getting a computer to read that column is a lesson every young programmer needs.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The register is called Spielplätze and comes from the city\'s open-data portal, published under the Datenlizenz Deutschland Zero 2.0, which lets anyone reuse it. We downloaded it on 2 November 2026: 366 rows, one per playground, with the name, the Stadtbezirk and a column called Information.',
            'That column holds short notes such as "2300 qm, Baujahr 1983": the area in square metres and the year the playground was built. It is written for people. A computer sees only a string of characters.'
          ],
          rightH3: 'The question',
          right: [
            'In which decade did Dortmund build most of its playgrounds? Children usually guess "recently", because the playground they know looks new. The register says otherwise.',
            'The first program does the obvious thing: cut each note at the word "Baujahr" and turn what is left into a number. It works on the first 38 rows and then stops.'
          ] },
        { kind: 'code', label: 'Version 1: trust every row', lang: 'Python', code: V1, note: 'Our program. The last line it prints is <code>IndexError: list index out of range</code>. Row 39 has an empty Information cell, so there is nothing after "Baujahr" to read.' },
        { kind: 'p', mt: true, html: 'A crash is a good teacher. The child opens the file and finds that not every row follows the pattern: ten cells are empty, four just say "Westfalenpark", one says "Träger: Jugendamt", and three say "Baujahr k.A.", the German short form for "no information". A program that only works on tidy rows is a program that has not met real data yet.' },
        { kind: 'code', label: 'Version 2: read what you can, count what you cannot', lang: 'Python', code: V2, note: 'Our program. It prints one line per decade, with a bar of # signs: <code>1950s ######### 39</code>, <code>1960s #################### 80</code>, <code>1970s ############# 54</code>, <code>1980s ############### 60</code>, <code>1990s ########### 46</code>, <code>2000s ########### 47</code>, <code>2010s ##### 20</code>, plus single entries for the 1870s and 2020s, and finally <code>Read: 348 Could not read: 18</code>.' },
        { kind: 'p', html: 'The 1960s win clearly, with 80 playgrounds. The second program also says, without being asked twice, that 18 rows could not be read. That last line is the habit we want: a result that admits its own gaps is a result you can trust. And one row stands out by itself: a playground in Brackel listed with the building year 1878. It may be real, or it may be a typing slip for 1978; the file cannot tell us, so a careful programmer reports it and does not quietly drop it.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Playgrounds built before 1970, by Stadtbezirk (our calculation from the register)', head: ['Stadtbezirk', 'Playgrounds with a year', 'Built before 1970'], rows: [
          ['Innenstadt-Nord', '31', '23'],
          ['Innenstadt-Ost', '28', '17'],
          ['Innenstadt-West', '36', '19'],
          ['Brackel', '35', '13'],
          ['Lütgendortmund', '35', '6'],
          ['Aplerbeck', '33', '3']
        ] },
        { kind: 'source', html: 'Data: Stadt Dortmund, Spielplätze, via Open.NRW and GovData, licence Datenlizenz Deutschland Zero 2.0, downloaded 2 November 2026. Counts are ours, from the 348 rows with a readable building year; across all twelve Stadtbezirke, 120 playgrounds date from before 1970 and 68 from 2000 or later. The register also lists five water playgrounds and three adventure playgrounds.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, on paper.</strong> Write ten cards like "800 qm, built 2008". Sort them by year by hand. Then add a card that just says "park". Where does it go?',
          '<strong>Ages 8 to 10, in Scratch.</strong> Keep a list of years and count how many fall in each decade. Then feed it the word "unknown" and see what Scratch does.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1, read the error, find row 39 in the file, and write your own fix before you look at Version 2.',
          '<strong>Going further.</strong> The inner-city districts hold most of the old playgrounds, the outer ones far fewer. Use the area figure in the same notes to ask a second question: are the older playgrounds bigger or smaller?'
        ] }
      ]
    },
    {
      id: 'olympiad',
      eyebrow: 'A free contest from grade 3',
      h2: 'Can a Dortmund primary pupil take part in the Mathematik-Olympiade?',
      lede: 'Yes. The Mathematik-Olympiade has been open to primary schools since 2005, and it is entered through the school, free of charge for the family.',
      body: [
        { kind: 'two',
          leftH3: 'What the contest is',
          left: [
            'The Mathematik-Olympiade is a national maths competition with about 200,000 pupils a year, from grade 3 to grade 13. It is not a speed quiz: children write out solutions to a small number of problems and explain their reasoning, which is exactly the habit that makes a good programmer.',
            'For grades 5 to 7 it runs in three rounds, and from grade 8 in four. Primary pupils in grades 3 and 4 take part in three rounds as well.'
          ],
          rightH3: 'The 2026 to 2027 calendar',
          right: [
            'The school round of the 66th Olympiad runs in the autumn of 2026 at each school. The national association Mathematik-Olympiaden e.V. lists the Landesrunde for 26 to 28 February 2027 and the Bundesrunde for 30 May to 2 June 2027, hosted in Kaiserslautern.',
            'Ask your child\'s maths teacher whether the school takes part this year; the problems are set and marked through the school.'
          ] },
        { kind: 'p', mt: true, html: 'We are not connected with the Olympiad or its organisers, and we never copy its problems. In class we write our own problems in the same spirit: a short story, a pattern to explain, a claim to check for every case. A child who has met a "Could not read: 18" line in a program already knows the most important olympiad question: have I covered every case?' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Dortmund?',
      lede: 'After school on weekdays, or in the morning at weekends. Booking shows every slot in Dortmund time, and the mentor sees that same slot converted to Indian time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Dortmund class times and the matching time in India', head: ['Dortmund', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['14:50', '19:20', '18:20'],
          ['16:25', '20:55', '19:55'],
          ['Saturday 11:20', '15:50', '14:50']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz, Dortmund runs on MEZ (UTC+1) from late October and on MESZ (UTC+2) from late March; this year the change back happened on 25 October 2026, and the next change forward is due on 28 March 2027. India does not change its clocks (UTC+5:30), so the gap to Dortmund is four and a half hours this winter and three and a half once spring arrives. These rows are examples, not fixed batch times.' },
        { kind: 'p', mt: true, html: 'NRW school holidays for 2026 to 2027 are in the KMK table: Christmas from 23 December 2026 to 6 January 2027, Easter from 22 March to 3 April 2027 and summer from 19 July to 31 August 2027. Classes continue through them, and families who travel simply tell the mentor and pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a Dortmund child learns, stage by stage',
    lede: 'Our own stages, used to place each child and to tell parents what has changed.',
    table: { caption: 'Our coding stages from 6 to 12', head: ['Stage', 'Usual age', 'By the end, the child can'], rows: [
      ['1. Order', '6 to 7', 'Follow and give step-by-step instructions, on paper and on screen'],
      ['2. Repeat', '7 to 8', 'Use a loop in Scratch instead of copying the same block'],
      ['3. Decide', '8 to 9', 'Make a sprite react with if and else'],
      ['4. Type', '9 to 11', 'Type a Python script and make sense of an error message'],
      ['5. Read data', '10 to 12', 'Open a real file, handle untidy rows and say what was skipped']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the playground project. It arrives around the time NRW Informatik begins in grade 5, so a child reaches the school subject with something real already built.',
      'Reports describe what your child made and explained, not minutes spent online.'
    ] },
    right: { h3: 'For children', ps: [
      'If your program crashes, it is telling you something about the data. Go and look.',
      'Count the things you skipped. Then say how many there were.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Dortmund children',
    lede: 'Every course is taught live and in English, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 12', courses: [
        { code: 'CDO / START / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'The long course: Scratch games, then apps, then early AI, 6 to 12.' },
        { code: 'CDO / START / 02', slug: 'scratch-programming-complete-course', title: 'Scratch, Start to Finish', blurb: 'A full Scratch course that ends in games of their own.' },
        { code: 'CDO / START / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Breaking big problems into small steps, with and without a screen.' }
      ] },
      { num: 'II', h3: 'Building things', sub: 'Ages 7 to 14', courses: [
        { code: 'CDO / BUILD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Code in Minecraft', blurb: 'Code inside a world they already love, 7 to 12.' },
        { code: 'CDO / BUILD / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps from Blocks', blurb: 'Working phone apps, put together from blocks, for ages 8 to 12.' },
        { code: 'CDO / BUILD / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Games in Luau', blurb: 'Their own Roblox games, scripted line by line, 8 to 14.' }
      ] },
      { num: 'III', h3: 'Numbers and logic', sub: 'Ages 5 to 15', courses: [
        { code: 'CDO / NUM / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Maths for Kids', blurb: 'Number sense rather than tricks, 5 to 10.' },
        { code: 'CDO / NUM / 02', slug: 'maths-through-coding', title: 'Maths, Coded', blurb: 'Fractions, patterns and graphs investigated in Python, 10 to 15.' },
        { code: 'CDO / NUM / 03', slug: 'cpp-programming-for-kids-course', title: 'A Second Language: C++', blurb: 'Puzzles and games in C++, 9 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How a week of classes looks for a Dortmund family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'From mid-afternoon in Dortmund, once homework is done.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, good for the youngest.' },
      { time: '1-on-1', l: 'A slot agreed with your family, moved when school life changes.' }
    ],
    cells: [
      { h3: 'Two live hours', p: 'Two classes a week, each about an hour.' },
      { h3: 'One familiar face', p: 'The same mentor across the months.' },
      { h3: 'Hands on keys', p: 'Children type and click from the first lesson.' },
      { h3: 'Age bands', p: 'Six year olds learn with six year olds.' },
      { h3: 'Short reports', p: 'What was built, what was tricky, what is next.' },
      { h3: 'Group or private', p: 'A class of fifteen to twenty, or just your child.' }
    ]
  },

  projectsH2: 'What older students go on to build',
  projectsLede: 'Children who start at primary age end up building real projects. Here are a few by our older students; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, quoted as written.',

  fees: {
    h2: 'Fees for Dortmund families',
    lede: 'One monthly fee covers eight live classes. We show it in euro, converted at the European Central Bank reference rate, and take the payment in US dollars; your bank does the conversion, so your statement may differ by a few cents.',
    free: ['First class free', 'A puzzle and a first program', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'A regular mentor', 'Two classes each week', 'Monthly, cancel any month'],
    one: ['Your child with a mentor of their own', 'Projects chosen around your child', 'Times set with your family']
  },

  faq: {
    eyebrow: 'Dortmund parents ask',
    h2: 'Coding classes for kids in Dortmund: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and taught only in English. The mentor speaks clearly, adapts to your child\'s pace and accent, and is used to children who are still learning English. Code itself looks the same in every language.' },
      { q: 'Do Dortmund schools teach Informatik?', a: 'Yes, from grade 5. The Gesellschaft für Informatik records that North Rhine-Westphalia teaches Informatik as a compulsory subject in grades 5 and 6 at all general school types. After grade 6 it becomes an elective, and how much is offered depends on the school type.' },
      { q: 'Is there any computing in Dortmund Grundschulen?', a: 'There is no Informatik subject in grades 1 to 4 in NRW. Some schools do media work or clubs, but there is no compulsory computing lesson before grade 5, which is why many families start at home or online.' },
      { q: 'From what age can my child start?', a: 'From 6. The youngest children start with puzzles, ordering games and Scratch blocks, so no typing or reading of long instructions is needed. Typed Python usually starts at about 9.' },
      { q: 'When are classes in Dortmund time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Dortmund children join after school, between mid-afternoon and early evening.' },
      { q: 'Where are the teachers?', a: 'Our mentors are based in India and teach live over video. A class at 16:25 in Dortmund starts at 20:55 in India during the winter months and at 19:55 in summer. Your child keeps the same mentor.' },
      { q: 'Can my child enter the Mathematik-Olympiade?', a: 'Usually yes, through the school. The Olympiad is open from grade 3 and has been offered to primary schools since 2005. Ask the maths teacher whether the school takes part; we are not connected with the organisers.' },
      { q: 'What is the playground project?', a: 'An original Python project on the City of Dortmund playground register. Children read the building year out of a text note, count playgrounds by decade and learn to report the 18 rows the program could not read.' },
      { q: 'How big are the groups?', a: 'Groups have fifteen to twenty children of a similar age. If you prefer, one-to-one classes give your child a mentor of their own at times you agree.' },
      { q: 'What does it cost, and in which currency?', a: 'The fee is monthly and shown on this page in euro at the European Central Bank reference rate. The payment is taken in US dollars and your bank converts it. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More pages for Dortmund families',
    lede: 'Useful next steps on this site.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full set of our pages for Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How all sixteen Länder handle the subject.' },
      { href: '/math-olympiad-germany-preparation', label: 'Maths Olympiad preparation', p: 'The Olympiad rounds in more detail.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'The national picture for ages 6 to 12.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'The Land page: NRW rules, holidays and data.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your child solves a short puzzle and builds a tiny program with a mentor. You see how they cope with English and with the ideas, and we suggest a course and an age group.',
    readFirst: 'If you want to know more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live lesson, and <a class="ag-inline-link" href="/courses">all courses</a> has each syllabus.',
    note: 'Classes are live online, taught in English only, by mentors based in India. Message us on WhatsApp with any question.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count what you skipped'
  },

  personalityCss: `
.ag-root.ag-cdo .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cdo .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cdo .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cdo .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cdo .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich and Eurydice dossier; Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW page; NRW Schulministerium, Zentrale Prüfungen 10; Mathematik-Olympiaden e.V.; KMK Ferienkalender 2026/27; Einheitenzeitgesetz; all read 2 November 2026. Stadt Dortmund, Spielplätze, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'How old are Dortmund\'s playgrounds: an original Python project on the city playground register, in which a first program crashes on row 39 (an empty note), and a second reads the building year out of 348 of 366 text notes, counts playgrounds by decade (the 1960s lead with 80) and reports the 18 unreadable rows and the lone 1878 entry. Lesson family: numbers hidden inside text, read carefully and report what could not be read.',
    requiredMentions: ['spielplaetze.csv', 'Read: 348 Could not read: 18', '1960s #################### 80', 'Row 39 has an empty Information cell', 'Baujahr k.A.', 'das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6', '26 to 28 February 2027', 'Count what you skipped'],
    sources: [
      { claim: 'Grundschule grades 1 to 4 outside Berlin and Brandenburg.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'NRW compulsory Informatik in grades 5 and 6; electives by school type; Oberstufe hours.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'ZP10 in German, maths and English.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'Mathematik-Olympiade participation and rounds.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: '66th MO Landesrunde and Bundesrunde dates.', url: 'https://www.mathematik-olympiaden.de/moev/index.php' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Dortmund playground register and licence.', url: 'https://ckan.govdata.de/dataset/spielplatze816da' }
    ],
    rejectedClaims: [
      'That the 1878 building year is a typing error: the file does not say, so the page reports it as listed.',
      'Any ranking of Dortmund schools or naming schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with the City of Dortmund, the NRW ministry or the Mathematik-Olympiade: none.'
    ]
  }
};
