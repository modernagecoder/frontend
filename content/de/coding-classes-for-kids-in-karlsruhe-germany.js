'use strict';
// Coding classes for kids in Karlsruhe (ag- city page, Germany cluster P6 row DE145, tier-2 shape
// coding-classes-for-kids = ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: questions a Karlsruhe parent actually asks, in the order they ask them, with a dog project that teaches the
// fairest idea in data: compare rates, not raw counts.
// Sources (facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page: "Mit dem Schuljahr 2025/2026 wird schulartübergreifend in der
//    Sekundarstufe I das Pflichtfach Informatik und Medienbildung eingeführt, wobei die Umsetzung zunächst in den
//    Jahrgangsstufen 5 und 6 erfolgt" (67), "... und in den kommenden Schuljahren schrittweise hochwächst" (raw
//    src/infmon-baden-wuerttemberg); national page: BW among four Länder meeting the short-term recommendation of 4
//    compulsory hours (91). KMK: Grundschule grades 1 to 4 (1).
//  - KMK Ferien 2026/2027 raw (src/kmk-fer2627/fe303dbf.txt): "Baden-Württemberg (4) 26.10. - 30.10. 31.10. 23.12. -
//    09.01. -- 25.03. 30.03. - 03.04. 18.05. - 29.05. 29.07. - 11.09."; summer 2027 also fact 257.
//  - Mathematik-Olympiade: about 200,000 a year (162); offered to primary schools since 2005 (164); 66th MO Regionalrunde
//    11 November 2026 (165). Pangea 2027: registration 1 October 2026 to 17 February 2027, Vorrunde 23 February to
//    3 March 2027 (189); 15 questions for grades 3 and 4, no calculators (191). Informatik-Biber 9 to 20 November 2026
//    (133), grades 3 to 13 (130).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Karlsruhe 309,050; Pforzheim 134,912; Heidelberg 155,756.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Karlsruhe (Stadtkämmerei, with the city's own calculations), "Registrierte Hunde", transparenz.karlsruhe.de
//    via Open Data Baden-Württemberg and GovData (ckan.govdata.de/dataset/registrierte-hunde), licence CC BY 4.0. Dataset
//    text: "Nach der Karlsruher Hundesteuersatzung ist jeder über drei Monate alte Hund bei der Stadtkämmerei anzumelden."
//    File registrierte-hunde-hunde-insgesamt.csv downloaded 3 November 2026, 6,924 bytes, sha256 123d8383...3af0bf61,
//    189 rows: 27 Stadtteile x 2014 to 2020, columns Hunde, Hunde je 1.000 Bewohner/-innen (Wohnberechtigte), Hunde je
//    1.000 Haushalte. Raw copy in src-pages/coding-classes-for-kids-in-karlsruhe-germany/.
// Our own calculations (scratchpad de/w/T1/karlsruhe/a.py, b.py, python3 -I):
//  a: "Districts in 2020: 27", "Most dogs: Durlach 1034".
//  b: "Palmbach 113 dogs, 56.6 per 1,000 people", "Hohenwettersbach 166 dogs, 54.1 per 1,000 people", "Stupferich 152
//     dogs, 51.1 per 1,000 people", "Durlach is number 15 by rate".
//  Extra: lowest 2020 rates Innenstadt-Ost 14.3, Innenstadt-West 14.8, Südweststadt 16.0; Durlach 926 dogs in 2014 and
//  1,034 in 2020; 25 of 27 Stadtteile had more dogs in 2020 than in 2014.
// Lesson family: a fair comparison needs a rate; the biggest count is often just the biggest place.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("registrierte-hunde-hunde-insgesamt.csv", encoding="utf-8") as f:',
  '    rows = [r for r in csv.DictReader(f) if r["Jahr"] == "2020"]',
  '',
  'most = max(rows, key=lambda r: int(r["Hunde"]))',
  'print("Districts in 2020:", len(rows))',
  'print("Most dogs:", most["Stadtteil"], most["Hunde"])'
].join('\n');

const V2 = [
  'RATE = "Hunde je 1.000 Bewohner/-innen (Wohnberechtigte)"',
  'by_rate = sorted(rows, key=lambda r: float(r[RATE]), reverse=True)',
  'for r in by_rate[:3]:',
  '    print(r["Stadtteil"], r["Hunde"], "dogs,", r[RATE], "per 1,000 people")',
  'print("Durlach is number", [r["Stadtteil"] for r in by_rate].index("Durlach") + 1, "by rate")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Karlsruhe: coding for kids' },
  slug: 'coding-classes-for-kids-in-karlsruhe-germany',
  code: 'ckk',
  accent: '#611C2A',
  accentRationale: 'Coding for kids in Karlsruhe: a dark claret #611C2A, the red sandstone of the palace and the old town, clear of the Bochum rust and the Berlin brick; contrast 9.98 at its lowest on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Coding classes for kids in Karlsruhe',
  title: 'Coding Classes for Kids in Karlsruhe: Live Online, in English',
  description: 'Coding classes for kids in Karlsruhe aged 6 to 12, live online in English: the new BW subject Informatik und Medienbildung, free contests, a Karlsruhe dog project.',
  ogDescription: 'Live coding lessons in English for Karlsruhe children aged 6 to 12: what the new Baden-Württemberg subject covers and when, three free contests for primary pupils, and a project on the city\'s registered dogs that teaches a child to compare fairly.',
  twitterDescription: 'Coding for Karlsruhe children aged 6 to 12, live in English, with a project on the city\'s own dog figures.',
  pageName: 'Coding Classes for Kids in Karlsruhe',
  webPageDescription: 'Answers for Karlsruhe parents of children aged 6 to 12 about learning to code in English: the new compulsory subject Informatik und Medienbildung in Baden-Württemberg, free contests for primary pupils in 2026 and 2027, the BW school holidays, and an original project on Stadt Karlsruhe\'s registered dogs data.',
  courseDescription: 'Live online coding classes in English for Karlsruhe children aged 6 to 12: Scratch games and stories first, then typed Python and small projects on real city data, with a regular mentor, in an age group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Karlsruhe',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#bw', label: 'School' },
    { href: '#hunde', label: 'Dog data' },
    { href: '#wettbewerbe', label: 'Contests' },
    { href: '#when', label: 'Times' }
  ],
  eyebrow: 'Karlsruhe &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Karlsruhe',
  lede: 'Baden-Württemberg has just made Informatik compulsory for every pupil from grade 5, so many Karlsruhe parents are asking a fair question: should my child start before that, and how? This page answers the questions we hear most, in the order parents tend to ask them, from what the new school subject covers to whether a German-speaking child can learn in English. Along the way there is a project on Karlsruhe\'s registered dogs that teaches a nine year old to compare things fairly.',
  secondaryCta: { href: '#hunde', label: 'See the dog project' },
  wa: 'Hello Modern Age Coders, our child lives in Karlsruhe and would like to learn coding in English. Could we arrange a free first class?',
  heroNote: 'Live online classes for children since 2020 &middot; 10,000+ students worldwide &middot; the same mentor every week',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['First steps', 'Scratch stories and games'],
    ['From about 9', 'Typed Python'],
    ['Lessons', 'Two a week, live'],
    ['Group', '15 to 20 children, or 1-on-1'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Modern Age Coders runs coding classes for Karlsruhe children aged 6 to 12 that are live online and taught in English. Younger children build stories and games in Scratch; from about nine they type real Python and work on small projects with real city data. A regular mentor adapts to your child\'s pace and accent, classes fit Karlsruhe afternoons and weekend mornings, and children learn in an age group of 15 to 20 or one to one.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'First coding courses for Karlsruhe children',
    lede: 'A gentle start for the youngest, a long all-round course, and a Python course for children who are ready to type.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CKK / 01', title: 'Scratch Coding for Kids', note: 'Three to four months, for any child between 6 and 12. A first finished game, and a clear sign of whether coding is for them.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CKK / 02', title: 'Coding for Kids', note: 'A ten to twelve month journey for 6 to 12 year olds: Scratch, then apps and first AI ideas, always with children of a similar age.' },
      { course: 'python-ai-kids-masterclass', code: 'CKK / 03', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds, eight to ten months. Real typed code, drawings, games and small data projects like the dog one below.' }
    ]
  },

  sections: [
    {
      id: 'bw',
      eyebrow: 'Question one',
      h2: 'Will my child learn coding at school in Karlsruhe anyway?',
      lede: 'From grade 5, yes, and more than children did a few years ago. Baden-Württemberg introduced a new compulsory subject in the 2025/26 school year.',
      body: [
        { kind: 'two',
          leftH3: 'The new subject',
          left: [
            'The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that Baden-Württemberg introduced Informatik und Medienbildung as a compulsory subject across all secondary school types from 2025/26, starting in grades 5 and 6 and growing year by year after that.',
            'The same monitor counts Baden-Württemberg among four Länder that already meet the short-term recommendation of four compulsory Informatik hours. For Karlsruhe pupils that is a real change.'
          ],
          rightH3: 'Before grade 5',
          right: [
            'In Baden-Württemberg, as in most Länder, Grundschule covers four years, grades 1 to 4, so the typical Karlsruhe pupil leaves it at around ten. Only then does the new subject begin.',
            'Children who want to make games or understand how apps work before then have about four years to fill, which is where most of our Karlsruhe learners start.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Coding in a Karlsruhe child\'s first school years, and how our classes fit around it', head: ['School years', 'At school in Baden-Württemberg', 'With us'], rows: [
          ['Grades 1 and 2', 'Grundschule', 'Scratch stories, sequences and simple games'],
          ['Grades 3 and 4', 'Grundschule', 'Scratch games with scores, variables and lists'],
          ['Grades 5 and 6', 'Informatik und Medienbildung, compulsory since 2025/26', 'Typed Python, which makes the new subject feel familiar'],
          ['Grade 7 onwards', 'The subject continues as it grows year by year', 'Python projects, data and first AI ideas']
        ] },
        { kind: 'source', html: 'Sources: GI Informatik-Monitor 2026/27, Baden-Württemberg entry and national comparison; KMK, Primarbereich. Read on 2 November 2026. The right-hand column is our own plan. We teach alongside school; the school subject and its marks are what count.' }
      ]
    },
    {
      id: 'hunde',
      tint: 'tint',
      eyebrow: 'Question two: what will my child actually do?',
      h2: 'Which part of Karlsruhe has the most dogs?',
      lede: 'Here is a real example. Every dog older than three months in Karlsruhe has to be registered for dog tax, and the city publishes the numbers for each district under a CC BY 4.0 licence. Children love the topic, and it hides one of the most important ideas in all of data.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is called Registrierte Hunde and comes from the city treasury, the Stadtkämmerei. We downloaded registrierte-hunde-hunde-insgesamt.csv on 3 November 2026. It covers 27 Stadtteile for each year from 2014 to 2020, the most recent year in the file.',
            'For every district and year it gives the number of dogs and also the number of dogs per 1,000 residents, worked out by the city.'
          ],
          rightH3: 'The question',
          right: [
            'Where in Karlsruhe are there the most dogs? Most children guess straight away, and many guess right. The trouble is that "most dogs" can mean two different things.',
            'A ten year old can find the first answer with the program below in about ten minutes.'
          ] },
        { kind: 'code', label: 'Program 1: which district has the most dogs?', lang: 'Python', code: V1, note: 'It prints <code>Districts in 2020: 27</code> and <code>Most dogs: Durlach 1034</code>.' },
        { kind: 'p', mt: true, html: 'Durlach, with 1,034 registered dogs. True, but is Durlach really the doggiest part of the city, or simply one of the biggest? A district with more people will usually have more of everything: more dogs, more bicycles, more birthday cakes. To compare fairly, you need to know how many dogs there are for every 1,000 people, and the city has already worked that out for us.' },
        { kind: 'code', label: 'Program 2: dogs for every 1,000 people', lang: 'Python', code: V2, note: 'Run after Program 1. It prints <code>Palmbach 113 dogs, 56.6 per 1,000 people</code>, <code>Hohenwettersbach 166 dogs, 54.1 per 1,000 people</code>, <code>Stupferich 152 dogs, 51.1 per 1,000 people</code> and <code>Durlach is number 15 by rate</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Karlsruhe dogs in 2020: the largest counts and the highest rates are different districts (our ranking of the city\'s figures)', head: ['District', 'Registered dogs', 'Dogs per 1,000 residents'], rows: [
          ['Durlach', '1,034', '33.4'],
          ['Palmbach', '113', '56.6'],
          ['Hohenwettersbach', '166', '54.1'],
          ['Stupferich', '152', '51.1'],
          ['Innenstadt-Ost', '94', '14.3']
        ] },
        { kind: 'source', html: 'Data: Stadt Karlsruhe, Stadtkämmerei, Registrierte Hunde, transparenz.karlsruhe.de via Open Data Baden-Württemberg, licence CC BY 4.0, file downloaded 3 November 2026. The rates are the city\'s own; the rankings are ours. The rate column is per 1,000 Wohnberechtigte, people registered as living in the district.' },
        { kind: 'p', mt: true, html: 'Palmbach has only 113 dogs, about a ninth of Durlach\'s, yet for every 1,000 people it has 56.6 dogs, the highest rate in the city. Durlach drops to fifteenth place. And the lowest rate of all is in Innenstadt-Ost, in the centre, with 14.3. Children usually have a theory about why the small districts on the edge of the city come out on top; the data does not say, so we treat their idea as a question to check, not an answer.' },
        { kind: 'p', html: 'One more thing older children notice when they look at all seven years: in 25 of the 27 districts there were more registered dogs in 2020 than in 2014. Durlach went from 926 to 1,034. A child who spots that has started asking a third question, "how did it change?", all on their own.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, at the kitchen table.</strong> Put 6 sweets on a plate for 2 children and 9 sweets on a plate for 6 children. Which plate has more sweets? Which children get more each?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make two lists, dogs and people, for three made-up villages. Work out dogs per 100 people for each and show the winner on the stage.',
          '<strong>Ages 10 to 12, Python.</strong> Run both programs, then change them to rank by the dogs-per-household column. Does Palmbach still win?',
          '<strong>Going further.</strong> Find the district whose dog count grew most between 2014 and 2020, first as a number and then as a percentage. Are they the same district?'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Question three',
      h2: 'Can a child who speaks German at home learn coding in English?',
      lede: 'Yes, and it usually goes more smoothly than parents expect. All our lessons are in English only; here is why that works for young children.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Most of it is on screen', p: 'A sprite moving left, a score going up, a loop repeating: children understand these by watching, before they understand every word. The mentor shows first and explains second, so English is a help rather than a hurdle.' },
          { h3: 'The mentor adapts', p: 'Mentors speak slowly, use short sentences and say things again in simpler words. They get used to how each child speaks, including German words dropped into an English sentence, and gently offer the English word back.' },
          { h3: 'Code words are English', p: 'Python is written with English words such as print, if and while. A Karlsruhe child who learns in English learns those words in their own language, so to speak, and picks up a lot of school English along the way.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India over a live video call. Your child has the same mentor every week, which matters more for young children than for anyone: after a few lessons the mentor knows whether your child needs a quiet moment before answering, likes to be challenged, or learns most easily by changing a program that already works.' }
      ]
    },
    {
      id: 'wettbewerbe',
      eyebrow: 'Question four',
      h2: 'Are there free contests a primary pupil in Karlsruhe can try?',
      lede: 'Three national contests accept primary pupils in the 2026/27 school year. They test thinking, not knowledge, and they are a good way to see a child enjoy a challenge.',
      body: [
        { kind: 'ol', items: [
          '<strong>Informatik-Biber, 9 to 20 November 2026.</strong> An online puzzle contest that costs nothing, open from grade 3 to grade 13, run by Bundesweite Informatikwettbewerbe and entered through the school. No coding needed.',
          '<strong>Mathematik-Olympiade, Regionalrunde 11 November 2026.</strong> The 66th Mathematik-Olympiade has been offered to primary schools since 2005 and draws about 200,000 pupils a year across Germany. The school round ran until October 2026; pupils who did well there go on to the Regionalrunde.',
          '<strong>Pangea, Vorrunde 23 February to 3 March 2027.</strong> Registration for the 2027 maths contest is open from 1 October 2026 to 17 February 2027. Pupils in grades 3 and 4 answer 15 questions, without a calculator.'
        ] },
        { kind: 'source', html: 'Sources: BWINF, Informatik-Biber 2026; Mathematik-Olympiaden e.V., 66th Mathematik-Olympiade dates; Pangea-Mathematikwettbewerb, Termine 2027. Read on 2 November 2026.' },
        { kind: 'p', mt: true, html: 'We are not connected with any of these contests and never use their tasks in class. What we do is write our own puzzles of the same kind, sorting, patterns, fair comparisons like the dog project, so a child arrives at a contest used to thinking a problem through rather than guessing. Ask your child\'s teacher whether the school takes part.' }
      ]
    },
    {
      id: 'when',
      eyebrow: 'Question five',
      h2: 'When could my child have classes in Karlsruhe time?',
      lede: 'After school or on weekend mornings. Because the mentors are in India, where it is later in the day, Karlsruhe afternoons are a natural fit.',
      body: [
        { kind: 'table', numCols: [], caption: 'Possible Karlsruhe lesson times and the time for a mentor in India', head: ['Karlsruhe time', 'Mentor, winter clock', 'Mentor, summer clock'], rows: [
          ['14:15, early afternoon', '18:45', '17:45'],
          ['17:15, later afternoon', '21:45', '20:45'],
          ['Saturday 10:45', '15:15', '14:15'],
          ['Sunday 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'Germany uses MEZ (UTC+1) and MESZ (UTC+2) under the Einheitenzeitgesetz; the winter clock has applied since 25 October 2026 and the summer clock starts again on 28 March 2027. India keeps UTC+5:30 throughout, which puts it four and a half hours ahead of Karlsruhe now and three and a half hours ahead from late March. Examples, not fixed groups.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Baden-Württemberg school holidays 2026/27', head: ['Holidays', 'Dates'], rows: [
          ['Herbstferien', '26 to 31 October 2026'],
          ['Weihnachten', '23 December 2026 to 9 January 2027'],
          ['Ostern', '25 March and 30 March to 3 April 2027'],
          ['Pfingsten', '18 to 29 May 2027'],
          ['Sommerferien', '29 July to 11 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Baden-Württemberg row, Stand 9 October 2025, first and last holiday day.' },
        { kind: 'p', mt: true, html: 'Classes keep running in the holidays unless you tell us otherwise. The long Pfingsten break and the summer are popular for a short extra project. Karlsruhe had 309,050 residents on 31 December 2024 according to Destatis, and families from Ettlingen, Rastatt, Bruchsal and Pforzheim (134,912) learn with us in exactly the same way, since every lesson is online; they share the Baden-Württemberg holiday dates too.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Karlsruhe child can do as they progress',
    lede: 'Our milestones for ages 6 to 12, shared with parents in a short note each month.',
    table: { caption: 'Children\'s coding milestones (ours)', head: ['Milestone', 'Typical age', 'Your child can'], rows: [
      ['First story', '6 to 7', 'Make two characters talk and move in turn'],
      ['First game', '7 to 8', 'Build a game with a score and a way to lose'],
      ['Lists', '8 to 10', 'Store a list of things and find the largest'],
      ['Typed Python', '9 to 11', 'Write short programs and fix their own errors'],
      ['Fair comparisons', '10 to 12', 'Turn counts into rates before ranking them']
    ] },
    left: { h3: 'For parents', ps: [
      'When your child says "most", ask "most of what, compared with what?" The dog project is built on that question.',
      'A child who explains a mistake has learned more than one who only shows a finished game.'
    ] },
    right: { h3: 'For children', ps: [
      'The biggest number is often just the biggest place.',
      'Before you crown a winner, check whether the race was fair.'
    ] }
  },

  catalogue: {
    eyebrow: 'Later on',
    h2: 'Nine more courses for Karlsruhe children',
    lede: 'For when the first course is done or a child has a special interest. Each taught live and in English by the mentor your child already knows, shared or private.',
    bands: [
      { num: 'I', h3: 'Thinking and maths', sub: 'Ages 6 to 15', courses: [
        { code: 'CKK / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns, rules and plans, the backbone of every contest.' },
        { code: 'CKK / THINK / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Maths contest training', blurb: 'For children curious about the Olympiade or Pangea.' },
        { code: 'CKK / THINK / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, rates and patterns explored in Python, from 10.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CKK / GAME / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft in one long course.' },
        { code: 'CKK / GAME / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that changes a world children already know.' },
        { code: 'CKK / GAME / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Real Roblox games scripted in Luau.' }
      ] },
      { num: 'III', h3: 'Beyond games', sub: 'Ages 8 to 12', courses: [
        { code: 'CKK / MORE / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How machines learn, with no chatbot accounts.' },
        { code: 'CKK / MORE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second typed language, through puzzles and games.' },
        { code: 'CKK / MORE / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'Twelve weeks of building towards a small event, 8 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practical details',
    h2: 'How live classes run for a Karlsruhe child',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After lunch', l: 'Early afternoon, often ideal for six and seven year olds.' },
      { time: 'Before dinner', l: 'Later afternoon, after homework and clubs.' },
      { time: 'Saturday or Sunday', l: 'A relaxed morning lesson at the weekend.' }
    ],
    cells: [
      { h3: 'Live with a mentor', p: 'No videos to watch alone, ever.' },
      { h3: 'Same face each week', p: 'A mentor who knows how your child learns.' },
      { h3: 'Clear, slow English', p: 'Shown on screen, said simply, said again.' },
      { h3: 'Age groups', p: 'Younger and older children are never mixed.' },
      { h3: 'Monthly note', p: 'A few lines for parents on progress and next steps.' },
      { h3: 'Group or one to one', p: '15 to 20 children together, or a private mentor.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Young coders grow into older ones. These projects come from some of our older students around the world, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more.',
  reviewsLede: 'Reviews that parents and students left on Google, as written.',

  fees: {
    h2: 'Fees for Karlsruhe families',
    lede: 'Your monthly fee covers eight live lessons. It is displayed in euro at the European Central Bank reference rate, while the actual payment is taken in US dollars; your bank handles the conversion, so the amount you see on your statement can be marginally different.',
    free: ['A free first class', 'A puzzle and a first Scratch program', 'No card needed'],
    group: ['15 to 20 children of a similar age', 'A regular mentor', 'Two lessons a week', 'Monthly, stop any month'],
    one: ['A mentor just for your child', 'Projects that follow their interests', 'Times that suit your week']
  },

  faq: {
    eyebrow: 'Karlsruhe parents ask',
    h2: 'Coding classes for kids in Karlsruhe: more questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and in English only. Mentors speak slowly, use simple words, adapt to each child\'s pace and accent, and show everything on screen, so children who mostly speak German at home can follow from the first lesson.' },
      { q: 'What is Informatik und Medienbildung?', a: 'It is the compulsory subject Baden-Württemberg introduced in the 2025/26 school year for all secondary school types. It started in grades 5 and 6 and grows year by year, according to the GI Informatik-Monitor 2026/27.' },
      { q: 'Is it worth starting before grade 5?', a: 'For a curious child, yes. The new compulsory subject begins only in grade 5, so grades 1 to 4 are open years for Scratch and puzzles. Children who arrive in grade 5 able to plan a program step by step usually enjoy the new subject.' },
      { q: 'What age is the youngest you teach?', a: 'Six. At that age children use Scratch, where blocks are dragged into place, so they do not need to type or read long instructions. Lessons are split into short tasks.' },
      { q: 'When can my child have lessons in Karlsruhe time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger children often prefer early afternoon or weekend mornings.' },
      { q: 'Do lessons stop in the Baden-Württemberg holidays?', a: 'Only if you would like a pause. The mentors do not follow the BW school calendar, so lessons can continue through the Herbstferien, Christmas, Pfingsten and summer.' },
      { q: 'Can my child enter maths or computing contests?', a: 'Yes, through the school in most cases. The Informatik-Biber runs from 9 to 20 November 2026, the Mathematik-Olympiade Regionalrunde is on 11 November 2026, and the Pangea Vorrunde runs from 23 February to 3 March 2027.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. India is four and a half hours ahead of Karlsruhe in winter, so a 14:15 lesson in Karlsruhe is 18:45 for the mentor.' },
      { q: 'How much does it cost, and what currency is charged?', a: 'The fee is monthly, for eight lessons, shown here in euro at the European Central Bank reference rate. The charge itself is in US dollars and your bank converts it, so the euro amount on your statement can differ slightly. The first class is free.' },
      { q: 'Does my child use AI chatbots in class?', a: 'No. Children under 13 never use chatbot accounts with us. They learn how AI works by building small programs that sort and guess, which is both safer and more educational.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More reading',
    h2: 'Related pages',
    lede: 'Other pages for parents of young coders in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'The Land page for Baden-Württemberg.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids', p: 'How live online lessons suit children.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'When children move to typed code.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How each Land handles the subject.' },
      { href: '/math-and-coding-competitions-germany', label: 'Maths and coding contests', p: 'The national contests, with dates.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your Karlsruhe child',
    lede: 'In the first class your child solves a short puzzle and makes a first Scratch program move. The mentor sees how they think and how comfortably they follow English, and suggests a course and an age group.',
    readFirst: 'If you would like to know more about our approach, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every syllabus is listed under <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Live online lessons in English only, with mentors in India. WhatsApp is the quickest way to reach us, in English.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/math-and-coding-competitions-germany', label: 'Contests in Germany' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Most of what, compared with what?'
  },

  personalityCss: `
.ag-root.ag-ckk .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ckk .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ckk .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ckk .ag-eyebrow { letter-spacing: 0.08em; }
.ag-root.ag-ckk .ag-steps li { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 (Baden-Württemberg page and national comparison); KMK Primarbereich and Ferien 2026/2027; BWINF Informatik-Biber 2026; Mathematik-Olympiaden e.V.; Pangea 2027 dates; Destatis GV-ISys 31.12.2024; Stadt Karlsruhe open data, Registrierte Hunde, CC BY 4.0.',
    localProject: 'Most of what, compared with what: an original Python project on Stadt Karlsruhe\'s registered dogs by Stadtteil in which Durlach has the most dogs in 2020 (1,034) but Palmbach has the highest rate (56.6 per 1,000 residents) and Durlach ranks fifteenth by rate; with sweets-on-a-plate, Scratch and Python versions and a growth extension (25 of 27 districts up since 2014). Lesson family: compare rates, not raw counts.',
    requiredMentions: ['registrierte-hunde-hunde-insgesamt.csv', 'Most dogs: Durlach 1034', 'Palmbach 113 dogs, 56.6 per 1,000 people', 'Durlach is number 15 by rate', 'Informatik und Medienbildung', 'Most of what, compared with what?', '309,050', '26 to 31 October 2026'],
    sources: [
      { claim: 'BW Informatik und Medienbildung compulsory from 2025/26, grades 5 and 6 first.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW among four Länder meeting the 4-hour recommendation.', url: 'https://informatik-monitor.de/' },
      { claim: 'BW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'Mathematik-Olympiade facts and 2026 Regionalrunde.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Pangea 2027 dates.', url: 'https://www.pangea-wettbewerb.de/termine/' },
      { claim: 'Karlsruhe registered dogs and licence.', url: 'https://ckan.govdata.de/dataset/registrierte-hunde' },
      { claim: 'Karlsruhe population 309,050 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any reason why outer districts have higher dog rates: not in the data, left as a question for learners.',
      'Any figure newer than 2020: the file stops at 2020, and the page says so.',
      'Naming Karlsruhe schools: refused.',
      'Any affiliation with Stadt Karlsruhe, the BW ministry, BWINF, the Mathematik-Olympiade or Pangea: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
