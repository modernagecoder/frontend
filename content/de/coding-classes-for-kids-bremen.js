'use strict';
// Coding classes for kids in Bremen (ag- city door, Germany cluster P5 row DE132, alloc code ckb, accent #904A37).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Bremen is, for now, one of the six Länder with no Informatik that every pupil must take; there is no curricular
// Informatik in Sekundarstufe I at all, and a compulsory subject arrives from 2027/28. So a Bremen child aged 6 to 12 has
// no school computing to wait for. The page covers that gap, the free Informatik-Biber this month, and a library project.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Bremen page (infmon-bremen/93ee42e6.txt; facts 56, 75): "Es finden weder an der
//    Oberschule noch am Gymnasium curricular hinterlegte Angebote mit Informatikbezug statt."; grades 5 and 6 WAT
//    (Wirtschaft, Arbeit, Technik) contents "auf den Erwerb von Medienkompetenzen abzielen"; "Die Primarstufe umfasst die
//    Grundschule mit den Jahrgangsstufen 1 bis 4."; Oberschule and Gymnasium cover grades 5 to 10; Gymnasium Oberstufe G8.
//  - GI national page (facts 92, 94, 99): six Länder "ohne einen für alle verbindlichen Informatikunterricht", Bremen
//    named; "Zum Schuljahr 2027/28 wird Bremen Informatik als Pflichtfach an allen Schulen im Gesamtumfang von zwei bis vier
//    Wochenstunden einführen."; Bremen among the Länder where "ungefähr jede zwölfte Person das Fach Informatik" takes.
//  - Informatik-Biber (facts 129, 130, 132, 133, 135, 136, 137): free; "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse
//    erforderlich"; nine tasks in 30 minutes for primary pupils, twelve in 35 for grades 5 and 6, 15 in 40 from grade 7;
//    "Die Biberwochen 2026 finden vom 9. bis 20. November statt."; Schnupper-Biber from 14 September 2026; results December
//    2026, certificates January 2027; over 580,000 participants in 2025.
//  - AGIS directory (fact 234): International School of Bremen lists IB, IPC and IGCSE.
//  - KMK FER2026_27.pdf (kmk-fer2627/fe303dbf.txt): "Bremen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. -
//    03.04. 07.05. und 18.05. 08.07. - 18.08."
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Bremen city 586,271; Land Bremen 704,881; Bremerhaven 118,610.
//  - Time: Einheitenzeitgesetz (MEZ UTC+1, MESZ UTC+2); summer time ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Freie Hansestadt Bremen, "Bibliotheken in Bremen", Transparenzportal Bremen via GovData
//    https://ckan.govdata.de/dataset/bibliotheken-in-bremen, file
//    https://www.transparenz.bremen.de/sixcms/media.php/bremen02.a.13.de/download/Bibliotheken.csv, licence CC BY.
//    GovData record: issued 2011-11-01, modified 2017-01-04; description says the static data give no answer to "welche
//    Bibliothek samstags geöffnet hat". 30 libraries (4 in Bremerhaven); semicolon CSV, damaged umlauts in the file
//    itself. sha256 c1eb89d9...b6e84a53. Downloaded 2 Nov 2026; copy in src-pages/<slug>/data/.
// Our own calculations (scratchpad de/w/C5/hb/v1.py, v2.py; python3 -I, run in the data folder):
//  v1: "Open on Thursday: 26", "Opens first, comparing text: Stadtbibliothek Bremen - Zweigstelle Vegesack 09.00 Uhr".
//  v1+v2: adds "Opens first, comparing minutes: Staats- und UniversitÕ_tsbibliothek (SuUB) Bremen 8.00 Uhr" and
//  "Is the text 9.00 bigger than 10.00? True".
//  Saturday: 10 of 30 list Saturday hours; longest Jacobs University IRC 10.00 to 20.00 (10 h), SuUB 8 h, Zentralbibliothek
//  6 h. Weekly hours in the file (Mo to Sa, both slots): Zentralbibliothek 50, Bremerhaven Stadtbibliothek 36, Vegesack 34,
//  Huchting 33, Vahr 33, West 31, Lesum 24, Osterholz 22.
// Lesson family: a time written as text is not a number; convert before you compare.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'thursday = {}',
  'listing = open("Bibliotheken.csv", encoding="latin-1", newline="")',
  'for library in csv.DictReader(listing, delimiter=";"):',
  '    if library["Name"] and library["Do von"].strip():',
  '        thursday[library["Name"].strip()] = library["Do von"].strip()',
  '',
  'first = min(thursday, key=thursday.get)',
  'print("Open on Thursday:", len(thursday))',
  'print("Opens first, comparing text:", first, thursday[first])'
].join('\n');

const V2 = [
  'def minutes(clock):',
  '    clock = clock.replace("Uhr", "").strip()    # "9.00 Uhr" becomes "9.00"',
  '    if "." in clock:',
  '        hours, mins = clock.split(".")',
  '    else:',
  '        hours, mins = clock, "0"                 # a bare "10" means 10.00',
  '    return int(hours) * 60 + int(mins)',
  '',
  'first = min(thursday, key=lambda name: minutes(thursday[name]))',
  'print("Opens first, comparing minutes:", first, thursday[first])',
  'print("Is the text 9.00 bigger than 10.00?", "9.00" > "10.00")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bremen: coding for kids' },
  slug: 'coding-classes-for-kids-bremen',
  code: 'ckb',
  accent: '#904A37',
  accentRationale: 'Coding classes for kids, Bremen: a warm terracotta #904A37 for the brick gables of the Böttcherstraße and the old harbour warehouses; contrast 5.29 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-land-bremen', name: 'Land Bremen' }],
  routeLabel: 'Coding classes for kids in Bremen',
  title: 'Coding Classes for Kids in Bremen: Live Online in English',
  description: 'Coding classes for kids in Bremen aged 6 to 12, live online in English: why Bremen schools have no Informatik yet, the free Biber and a library data project.',
  ogDescription: 'Live online coding in English for Bremen children aged 6 to 12: Bremen schools have no Informatik in grades 5 to 10 until 2027/28, the Informatik-Biber runs this November, and a project on the city\'s library opening hours.',
  twitterDescription: 'Coding for Bremen kids, live in English: no school Informatik until 2027/28, the Biber, and a library hours project.',
  pageName: 'Coding Classes for Kids in Bremen',
  webPageDescription: 'A guide for parents in Bremen and Bremerhaven with children aged 6 to 12: the state of Informatik in Bremen schools from the GI Informatik-Monitor 2026/27, the free Informatik-Biber in November 2026, and an original Python project on the open data list of Bremen libraries and their opening hours.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Bremen: Scratch and puzzle work for the youngest, typed Python and small AI projects later, in groups of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Bremen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#bremen-school', label: 'School' },
    { href: '#libraries', label: 'Libraries' },
    { href: '#biber', label: 'Biber' },
    { href: '#hours', label: 'Times' }
  ],
  eyebrow: 'Bremen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Bremen',
  lede: 'A child in Bremen can go through Grundschule and all of grades 5 to 10 without a single curricular Informatik lesson: the Land is one of six without a computing subject for everyone, and its compulsory subject only begins with the school year 2027/28. If your child is between 6 and 12, there is nothing at school to wait for. Below you will find the Bremen rules in detail, what a live lesson in English is like for a young child, the free puzzle contest happening this month, and a project on Bremen\'s own library opening hours.',
  secondaryCta: { href: '#libraries', label: 'See the library project' },
  wa: 'Hello Modern Age Coders, we are in Bremen and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students around the world &middot; lessons in English for Bremen families',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Begins with', 'Scratch and logic puzzles'],
    ['Then', 'Typed Python, small AI projects'],
    ['Group size', 'Fifteen to twenty, or 1-on-1'],
    ['Mentors', 'Teaching live from India'],
    ['Trial class', 'Free, no card required']
  ],
  capsuleQ: 'In a few lines',
  capsule: 'Coding classes for kids in Bremen, run by Modern Age Coders, are taught live over video in English to children between 6 and 12: Scratch and logic puzzles first, then Python typed by the child and small AI projects. A mentor who adapts to each child\'s pace and accent teaches either a group of fifteen to twenty children or one child by themselves, after school or at weekends. Bremen schools teach no Informatik in grades 5 to 10 before 2027/28, so this fills a real gap.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Three courses for Bremen children aged 6 to 12',
    lede: 'One broad course for a first year of coding, one that moves into real Python, and one built around the national informatics contests, which Bremen pupils can enter even without Informatik at school.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CKB / 01', title: 'Coding for Kids, 6 to 12', note: 'A long first course in age-grouped batches: Scratch stories and games, then apps, then a gentle look at how AI works.' },
      { course: 'python-ai-kids-masterclass', code: 'CKB / 02', title: 'Python and AI, from about nine', note: 'Children type their own Python, draw with code and build games, then work on small data and AI projects like the library list below.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CKB / 03', title: 'Informatik contests in English', note: 'From Klasse 3. Puzzle thinking in the style of the Informatik-Biber, using problems we write ourselves, then on towards the Jugendwettbewerb.' }
    ]
  },

  sections: [
    {
      id: 'bremen-school',
      eyebrow: 'Informatik in the Land Bremen',
      h2: 'Do Bremen schools teach coding?',
      lede: 'Not yet as a subject. The Gesellschaft für Informatik, which compares every Land each year, finds no curricular Informatik in Bremen\'s lower secondary schools in 2026/27. A compulsory subject is on its way.',
      body: [
        { kind: 'two',
          leftH3: 'The position in 2026/27',
          left: [
            'Bremen children go to Grundschule for grades 1 to 4 and then to an Oberschule or a Gymnasium for grades 5 to 10. For those secondary years the GI Informatik-Monitor 2026/27 is blunt: "Es finden weder an der Oberschule noch am Gymnasium curricular hinterlegte Angebote mit Informatikbezug statt." Neither school type has any curricular offer connected to Informatik.',
            'In grades 5 and 6, the subject Wirtschaft, Arbeit, Technik (WAT) includes digital content, but the monitor notes that it aims at media skills, not at programming.'
          ],
          rightH3: 'What changes from 2027/28',
          right: [
            'The same report says Bremen will introduce Informatik as a compulsory subject at all schools from the school year 2027/28, with two to four weekly hours in total. Until then the Land stays on the list of six Länder that have no Informatik lesson for every pupil.',
            'Later on, in the Oberstufe, Informatik can be chosen as a course, but the GI finds that in Bremen only about one pupil in twelve at that stage takes it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Bremen school career, 2026/27', head: ['Grades', 'School', 'Informatik on the timetable'], rows: [
          ['1 to 4', 'Grundschule', 'None as a subject'],
          ['5 and 6', 'Oberschule or Gymnasium', 'None; WAT covers media skills'],
          ['7 to 10', 'Oberschule or Gymnasium', 'No curricular offer in 2026/27'],
          ['From 2027/28', 'All schools', 'Compulsory Informatik, two to four weekly hours in total'],
          ['10 to 12', 'Gymnasium Oberstufe (G8)', 'Informatik as an elective course, where offered']
        ] },
        { kind: 'source', html: 'Source: GI Informatik-Monitor 2026/27, national comparison and Bremen page, read 2 November 2026. Bremen Gymnasien follow the eight-year route, so their Oberstufe spans grades 10 to 12, with grade 10 as the Einführungsphase. The Land Bremen has 704,881 inhabitants, 586,271 of them in the city of Bremen and 118,610 in Bremerhaven (Destatis, 31 December 2024).' },
        { kind: 'p', mt: true, html: 'For a parent this is unusually clear. A Bremen child who wonders how a game decides who has won will not meet that question in a school lesson before the new subject arrives, and a child who is ten today will already be in grade 7 or 8 when it does. Starting at home or online is not getting ahead of school here; it is simply the only way to start.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Will my child understand a coding class in English?',
      lede: 'Almost always, yes. The classes are live and in English only, and the mentor\'s job is to make that work for your child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German lessons', p: 'We teach in English and only in English. That is said here and again before any trial, so no family is surprised. Bremen also has international schools, such as the International School of Bremen, which lists the IB and IGCSE in the AGIS directory; families whose children attend German schools tend to see the English as a bonus.' },
          { h3: 'Matched to the child', p: 'Mentors adjust their speed, choose simple words and repeat a step in a different way when a face looks puzzled. Half-sentence answers are fine, and if a German word slips in, the mentor simply says the English word back and carries on.' },
          { h3: 'Show, then say', p: 'Most of a lesson happens on the shared screen. The mentor shows a block or a line, the child copies it and changes it, and the result appears at once. The words follow the picture, which keeps the English load small.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors teach from India over live video; a Bremen afternoon is an Indian evening, which is why the class times below work. A group keeps its mentor from month to month, and the mentor keeps short notes on each child: who rushes, who hesitates, who learns by breaking things first.' }
      ]
    },
    {
      id: 'libraries',
      tint: 'tint',
      eyebrow: 'A real Bremen project',
      h2: 'Which Bremen library opens first on a Thursday? A project on times stored as text',
      lede: 'Bremen publishes a list of its libraries, with opening hours for every weekday, as open data. Asking the computer a simple question about it teaches one of the commonest mistakes in programming: comparing words when you meant to compare numbers.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file "Bibliotheken in Bremen" comes from the Transparenzportal of the Freie Hansestadt Bremen and is published under a CC BY licence, so it may be reused with credit. It lists 30 libraries in Bremen and Bremerhaven: the Stadtbibliothek and its branches, the Staats- und Universitätsbibliothek, museum and research libraries.',
            'Each weekday has two columns, "von" (from) and "bis" (until), filled with text such as "9.00 Uhr". The portal\'s own description even says that this static list cannot answer a question like which library is open on Saturday. A short program can.'
          ],
          rightH3: 'The question',
          right: [
            'On a Thursday morning, which library opens first? A child scanning the list by eye finds it quickly. The program should too, and the first version uses Python\'s min() to pick the smallest opening time.',
            'Before running it, we ask the child to predict the answer. Then we look at what the computer says, and whether it agrees.'
          ] },
        { kind: 'code', label: 'Version 1: compare the times as text', lang: 'Python', code: V1, note: 'Our program. It prints <code>Open on Thursday: 26</code> and <code>Opens first, comparing text: Stadtbibliothek Bremen - Zweigstelle Vegesack 09.00 Uhr</code>.' },
        { kind: 'p', mt: true, html: 'The answer looks sensible until someone notices that the Staats- und Universitätsbibliothek opens at 8.00, an hour earlier. Why did the computer miss it? Because it was comparing text, letter by letter, like words in a dictionary. "09.00" begins with 0, so it comes first; "8.00" begins with 8, which comes after 1, so it lands behind "10.00" and "11.00". Text that looks like a time is still only text.' },
        { kind: 'code', label: 'Version 2: turn each time into minutes first', lang: 'Python', code: V2, note: 'Our program, run after Version 1. It adds <code>Opens first, comparing minutes: Staats- und UniversitÕ_tsbibliothek (SuUB) Bremen 8.00 Uhr</code> and <code>Is the text 9.00 bigger than 10.00? True</code>.' },
        { kind: 'p', html: 'Now the library opening at 8.00 wins. Two more surprises sit in that output, and children enjoy both. First, Python really does say that the text "9.00" is bigger than "10.00". Second, the name shows "UniversitÕ_tsbibliothek" instead of "Universitätsbibliothek": the umlauts were damaged inside the file itself, long before we opened it. Real data carries the marks of how it was made, and part of the job is spotting them.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Weekly opening hours listed for Stadtbibliothek branches (our calculation from the file)', head: ['Library', 'Hours a week in the file'], rows: [
          ['Stadtbibliothek Bremen, Zentralbibliothek', '50'],
          ['Stadtbibliothek Bremerhaven', '36'],
          ['Zweigstelle Vegesack', '34'],
          ['Zweigstelle Huchting', '33'],
          ['Zweigstelle Vahr', '33'],
          ['Zweigstelle West', '31'],
          ['Zweigstelle Lesum', '24'],
          ['Zweigstelle Osterholz', '22']
        ] },
        { kind: 'source', html: 'Data: Freie Hansestadt Bremen, Bibliotheken in Bremen, Transparenzportal Bremen via GovData, licence CC BY, downloaded 2 November 2026. The hours are as the file lists them, adding Monday to Saturday and both time slots per day; our sums. The catalogue record shows the file was last changed on 4 January 2017, so check a library\'s own website before you visit. In the file, 10 of the 30 libraries list Saturday hours.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, with a clock.</strong> Write five opening times on cards, some as "9.00" and some as "10.00". Sort them by the first digit only. Then sort them by the clock. Which order is right?',
          '<strong>Ages 8 to 10, in Scratch.</strong> Store opening times as hours and minutes in two lists, work out minutes since midnight, and let a sprite announce the earliest.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1, explain the wrong answer to someone else, then write minutes() before you read ours.',
          '<strong>Going further.</strong> Use the same function on the "bis" columns to find which libraries stay open after 18.00, and the Saturday columns to rebuild the table above.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free first contest',
      h2: 'What is the Informatik-Biber, and can a Bremen child enter?',
      lede: 'A free online contest of logic puzzles, open to every school year from grade 3 to grade 13, with no coding knowledge required. The 2026 contest weeks are 9 to 20 November. It suits Bremen children well, because it asks for exactly the thinking their timetable does not yet teach.',
      body: [
        { kind: 'two',
          leftH3: 'How it works',
          left: [
            'The Informatik-Biber is run by Bundesweite Informatikwettbewerbe (BWINF), which calls it Germany\'s largest school informatics competition. In 2025 the organisers counted over 580,000 participants.',
            'The tasks are puzzles about order, rules, codes and routes, and the length grows with age: 30 minutes for nine tasks at primary level, 35 minutes for twelve in grades 5 and 6, and 40 minutes for fifteen from grade 7 upwards.'
          ],
          rightH3: 'Taking part from Bremen',
          right: [
            'Entry goes through the school, and the contest fits into a single lesson, so the first step is a quick question to the class teacher about 9 to 20 November 2026. For practice at home, BWINF opened its Schnupper-Biber on 14 September 2026.',
            'BWINF publishes results in December 2026 and posts certificates and prizes in January 2027.'
          ] },
        { kind: 'p', mt: true, html: 'We have no connection with BWINF and do not reuse its tasks. In class we write puzzles of our own in the same spirit; the library question above is one of them, since putting times in order is a Biber kind of problem. If your child\'s school is not taking part this year, the practice round is a pleasant free afternoon all the same.' }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Class times',
      h2: 'What times do classes run in Bremen?',
      lede: 'Mostly after school and on weekend mornings. Slots are shown in Bremen time when you book, and converted for the mentor automatically.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example times for Bremen families and the mentor\'s clock in India', head: ['Bremen', 'India before 28 March 2027', 'India from 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['17:05', '21:35', '20:35'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Bremen is on MEZ (UTC+1) this winter and moves to MESZ (UTC+2) when the clocks go forward on 28 March 2027, as set by the Einheitenzeitgesetz; the last change, back to winter time, was on 25 October 2026. India keeps UTC+5:30 the whole year, which puts it four and a half hours ahead of Bremen in winter and three and a half in summer. The rows are examples, not fixed batches.' },
        { kind: 'p', mt: true, html: 'The KMK holiday table for Bremen in 2026 to 2027 lists Christmas from 23 December 2026 to 9 January 2027, two winter days on 1 and 2 February, Easter from 22 March to 3 April and summer from 8 July to 18 August 2027. Lessons carry on through holidays; families who go away just let the mentor know.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five steps from first blocks to real files',
    lede: 'We wrote these steps ourselves; mentors use them to choose a group for each child and to explain progress at home.',
    table: { caption: 'Our five coding steps for ages 6 to 12', head: ['Step', 'Rough age', 'What the child can do'], rows: [
      ['1. Steps', '6 to 7', 'Give a sprite a list of moves and predict where it ends'],
      ['2. Loops', '7 to 9', 'Repeat a pattern instead of repeating blocks'],
      ['3. Choices', '8 to 10', 'Use if and else, and test both paths'],
      ['4. Text and numbers', '9 to 11', 'Tell a number from text that looks like a number'],
      ['5. Real files', '10 to 12', 'Read a published file, convert what it holds and check the answer by hand']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is the library lesson: once a child has seen "9.00" beat "10.00", they look twice at every sorted list.',
      'Reports talk about what your child built and could explain, never about screen time.'
    ] },
    right: { h3: 'For children', ps: [
      'If the computer\'s answer surprises you, check it by hand on two or three rows.',
      'A clock time is a number of minutes. Turn it into one before you compare.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children in Bremen',
    lede: 'Live lessons in English for every course, with a choice between a group and private classes.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 6 to 14', courses: [
        { code: 'CKB / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic for ages 6 to 9, before reading gets in the way.' },
        { code: 'CKB / THINK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Splitting problems into steps, a good partner for the Biber.' },
        { code: 'CKB / THINK / 03', slug: 'ai-literacy-for-kids-course', title: 'Understanding AI', blurb: 'What AI is and is not, for 8 to 14, without adult chatbot accounts.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CKB / GAME / 01', slug: 'scratch-programming-complete-course', title: 'Scratch games', blurb: 'From an empty stage to finished games.' },
        { code: 'CKB / GAME / 02', slug: 'game-development-masterclass-for-kids', title: 'Game making, three ways', blurb: 'Scratch, Roblox and Minecraft in one course, 8 to 12.' },
        { code: 'CKB / GAME / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft with code', blurb: 'Blocks first, then real code, inside Minecraft, 7 to 12.' }
      ] },
      { num: 'III', h3: 'Making and maths', sub: 'Ages 8 to 15', courses: [
        { code: 'CKB / MAKE / 01', slug: 'kids-ai-web-development-course', title: 'A first website', blurb: 'Pages of their own on the web, 9 to 12.' },
        { code: 'CKB / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'Phone apps from blocks', blurb: 'Apps that run on a real phone, 8 to 12.' },
        { code: 'CKB / MAKE / 03', slug: 'maths-through-coding', title: 'Maths in Python', blurb: 'School maths explored with code, 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Running the classes',
    h2: 'How the classes work for families in Bremen',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'School days', l: 'Late afternoon in Bremen, after lunch and homework.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, calm for younger children.' },
      { time: '1-on-1', l: 'A time you choose, changed when the school term does.' }
    ],
    cells: [
      { h3: 'Live, twice a week', p: 'Two classes of about an hour each week.' },
      { h3: 'Known mentor', p: 'The same person teaches the group each week.' },
      { h3: 'Child at the keyboard', p: 'Children build from the first minute.' },
      { h3: 'Similar ages', p: 'Groups are formed by age, never mixed widely.' },
      { h3: 'Notes for parents', p: 'A short update on what was made.' },
      { h3: 'Group or solo', p: 'Join fifteen to twenty others, or learn alone.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Some of our students started at primary age and kept going; these are a few things they built later, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'What parents and students wrote in their Google reviews, unedited.',

  fees: {
    h2: 'Fees for families in Bremen',
    lede: 'You pay monthly for eight live classes. The euro figure on this page is calculated from the ECB reference rate; the actual charge is made in US dollars, and your bank turns it into euro, so the amount on your statement can be a little different.',
    free: ['A free trial class', 'One puzzle, one tiny Scratch project', 'No payment card needed'],
    group: ['Fifteen to twenty children close in age', 'A mentor who stays with the group', 'Two live classes a week', 'Monthly, stop whenever you like'],
    one: ['One child, one mentor', 'Pace and projects set around your child', 'Class times that suit your week']
  },

  faq: {
    eyebrow: 'Questions from Bremen parents',
    h2: 'Coding classes for kids in Bremen: frequent questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, they are not. We teach only in English, always live. Your child\'s mentor slows down, uses simple words and gets used to how your child speaks, which is why children with limited English manage well. The code on screen is identical whatever language the lesson is in.' },
      { q: 'Is Informatik taught in Bremen schools?', a: 'Not as a curricular subject in grades 5 to 10 in 2026/27. The GI Informatik-Monitor finds no curricular Informatik offer at Bremen Oberschulen or Gymnasien. Bremen plans compulsory Informatik at all schools from 2027/28, with two to four weekly hours in total.' },
      { q: 'What age can my child start?', a: 'Six is a good age to begin. The youngest work with Scratch blocks and spoken puzzles, which needs neither typing nor much reading. Around nine most children are ready to type Python.' },
      { q: 'When are classes in Bremen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In Bremen the late afternoon is the usual choice.' },
      { q: 'Where do the mentors teach from?', a: 'From India, live over video. A class at 15:15 in Bremen is at 19:45 in India this winter and at 18:45 after the clocks change on 28 March 2027.' },
      { q: 'Can my child take part in the Informatik-Biber?', a: 'Yes, through the school. The contest costs nothing, takes pupils from grade 3 upwards and asks for no coding. This year\'s contest weeks are 9 to 20 November 2026, so speak to the class teacher soon. We have no link with the organisers.' },
      { q: 'What is the library project?', a: 'An original Python project on Bremen\'s open data list of libraries. Children ask which library opens first on a Thursday, see the computer get it wrong by comparing text, and fix it by turning each time into minutes.' },
      { q: 'Do you teach children from Bremerhaven too?', a: 'Yes. Classes are online, so any child in the Land Bremen, or anywhere in Germany, can join the same groups at the same times.' },
      { q: 'How large is a group?', a: 'A group has fifteen to twenty children close in age. Private one-to-one lessons are the other option, scheduled around your family.' },
      { q: 'How are fees shown and paid?', a: 'This page displays the monthly fee in euro, converted with the reference rate of the European Central Bank. We charge in US dollars, so your bank handles the conversion. The trial class is free and asks for no card details.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Where Bremen parents usually go next.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for families in Germany.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber in English', p: 'How the Biber works and how to practise.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Bremen beside the other fifteen Länder.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids in Germany', p: 'Where most young children begin.' },
      { href: '/coding-classes-in-land-bremen', label: 'Coding classes in the Land Bremen', p: 'Bremen and Bremerhaven, the whole Land.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our classes in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'During the trial your child works through one puzzle and builds a very small Scratch project with a mentor. You see how your child copes with the ideas and with English, and the mentor suggests a course and an age group.',
    readFirst: 'Before booking you may like to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a> and their syllabuses.',
    note: 'All lessons happen live online, in English only, with mentors based in India. For a quick question, WhatsApp works best for most parents.',
    formNote: 'No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Nine o\'clock is not after ten'
  },

  personalityCss: `
.ag-root.ag-ckb .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-ckb .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ckb .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ckb .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-ckb .ag-code-head b { text-transform: uppercase; letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Bremen pages); Bundesweite Informatikwettbewerbe, Informatik-Biber pages and dates; AGIS directory; KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; all read 2 November 2026. Freie Hansestadt Bremen, Bibliotheken in Bremen, CC BY.',
    localProject: 'Which Bremen library opens first on a Thursday: an original Python project on the Transparenzportal library list, where comparing opening times as text picks the Vegesack branch at 09.00 and converting to minutes finds the Staats- und Universitätsbibliothek at 8.00; the file\'s own damaged umlauts and its 2017 change date are discussed. Lesson family: a time written as text is not a number.',
    requiredMentions: ['Bibliotheken.csv', 'Opens first, comparing text: Stadtbibliothek Bremen - Zweigstelle Vegesack 09.00 Uhr', 'Is the text 9.00 bigger than 10.00? True', 'Open on Thursday: 26', 'Es finden weder an der Oberschule noch am Gymnasium curricular hinterlegte Angebote mit Informatikbezug statt.', 'from the school year 2027/28, with two to four weekly hours in total', '23 December 2026 to 9 January 2027', 'Nine o\'clock is not after ten'],
    sources: [
      { claim: 'No curricular Informatik in Bremen Sek I; WAT media skills; Grundschule 1 to 4; G8 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bremen' },
      { claim: 'Six Länder without Informatik for all; Bremen compulsory from 2027/28; one in twelve takes Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Informatik-Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Biber participants and task counts.', url: 'https://bwinf.de/biber/' },
      { claim: 'Bremen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'International School of Bremen qualifications.', url: 'https://www.agis-schools.org/school/international-school-of-bremen' },
      { claim: 'Bremen libraries open data and licence.', url: 'https://ckan.govdata.de/dataset/bibliotheken-in-bremen' }
    ],
    rejectedClaims: [
      'That the opening hours are current: the record was last changed on 4 January 2017, and the page says so.',
      'Naming the International School of Bremen as a source of our students: refused; it appears only as context.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with BWINF, the Bremen education authority or any library: none.'
    ]
  }
};
