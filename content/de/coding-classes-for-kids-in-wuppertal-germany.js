'use strict';
// Coding classes for kids in Wuppertal (ag- city page, Germany cluster P6 row DE142, tier-2 shape
// coding-classes-for-kids = ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: the age question, answered year by year from 6 to 12, then a playground project a child can do first with a
// pencil and later in Python. Lesson family: a category is hiding inside a text label; split the label, then count.
// Sources (school and contest facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/
// FACTS.md, fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, NRW: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in den
//    Jahrgangsstufen 5 und 6 unterrichtet." (80). KMK: Grundschule grades 1 to 4 outside Berlin and Brandenburg (1);
//    switching between tracks possible in grades 5 and 6 (8). KMK 2024 key-points paper on media and informatics
//    education in primary school (4).
//  - KMK Ferien 2026/2027, NRW row (275). KMK: children who turn six by a Land cut-off date start school on 1 August (289).
//  - BWINF: Informatik-Biber free, grades 3 to 13, no prior knowledge (129, 130); primary pupils 9 tasks in 30 minutes
//    (132); Biberwochen 9 to 20 November 2026 (133). Jugendwettbewerb Informatik from grade 3 (141).
//  - Känguru der Mathematik 2027 on 8 April 2027 (183); registration 1 December 2026 to 31 January 2027 (184); 24 problems
//    in 75 minutes for grades 3/4 and 5/6 (186).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Wuppertal 358,193; Solingen 165,626; Remscheid 113,828;
//    Hagen 190,384.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Wuppertal (Ressort 102 Vermessung, Katasteramt und Geodaten; collected by Ressort 208 Kinder, Jugend und
//    Familie), "Kinderspielplätze Wuppertal", daten.wuppertal.de via Open.NRW and GovData
//    (ckan.govdata.de/dataset/kinderspielplatze-wuppertala4633), licence CC BY 4.0. Dataset text: "Zu jedem
//    Spielplatzstandort enthält der Datensatz den Namen (meist Straßenname ggf. mit Zusatz) und die Art des Spielplatzes
//    in Klammern sowie die Fläche." File Kinderspielplaetze_EPSG4326_JSON.json downloaded 3 November 2026, 570,819 bytes,
//    sha256 75692f1c...fcf9d8f6, 359 features with properties name and flaeche. Raw copy in
//    src-pages/coding-classes-for-kids-in-wuppertal-germany/.
// Our own calculations (scratchpad de/w/T1/wuppertal/a.py, b.py, c.py, unit.py, python3 -I):
//  a: "Places in the file: 359", "The first one: {'name': 'Falkenberg (KSP)', 'flaeche': 1199}".
//  b: "{'KSP': 273, 'Skateanlage': 2, 'Spielpunkt': 4, 'Bolzplatz': 80}".
//  c: "Playgrounds: 273", "Largest: Reppkotten,Spielwiese (KSP) 24210 m2", "0 to 1000 m2: 74", "1000 to 5000 m2: 168",
//     "5000 to 30000 m2: 31".
//  unit check: the area of each outline, computed from its coordinates, divided by flaeche has median 0.997 (range 0.995 to
//  1.007), so flaeche is in square metres; the largest outline comes to about 24,131 m2 against 24,210 in the file.
//  Median KSP area 1,692 m2 (our calculation).
// Lesson family: the category is inside the label; split the text, then count.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'with open("Kinderspielplaetze_EPSG4326_JSON.json", encoding="utf-8") as f:',
  '    places = json.load(f)["features"]',
  '',
  'print("Places in the file:", len(places))',
  'print("The first one:", places[0]["properties"])'
].join('\n');

const V2 = [
  'kinds = {}',
  'for p in places:',
  '    name = p["properties"]["name"]',
  '    kind = name[name.rfind("(") + 1:-1]     # the word inside the last brackets',
  '    kinds[kind] = kinds.get(kind, 0) + 1',
  'print(kinds)'
].join('\n');

const V3 = [
  'playgrounds = [p["properties"] for p in places if p["properties"]["name"].endswith("(KSP)")]',
  'biggest = max(playgrounds, key=lambda p: p["flaeche"])',
  'print("Playgrounds:", len(playgrounds))',
  'print("Largest:", biggest["name"], biggest["flaeche"], "m2")',
  'for low, high in [(0, 1000), (1000, 5000), (5000, 30000)]:',
  '    count = sum(1 for p in playgrounds if low <= p["flaeche"] < high)',
  '    print(f"{low} to {high} m2: {count}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Wuppertal: coding for kids' },
  slug: 'coding-classes-for-kids-in-wuppertal-germany',
  code: 'ckw',
  accent: '#7C5828',
  accentRationale: 'Coding for kids in Wuppertal: a warm bronze brown #7C5828, the tone of old slate-hung Bergisch houses and of playground bark chips, clear of the Bochum rust and the Berlin brick; contrast 5.19 at its lowest on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Wuppertal',
  title: 'Coding Classes for Kids in Wuppertal, Live in English',
  description: 'Coding classes for kids in Wuppertal aged 6 to 12, live online in English: what each age can do, Informatik in NRW from grade 5, and a Wuppertal playground project.',
  ogDescription: 'Live coding lessons in English for Wuppertal children from 6 to 12: what a six year old and a twelve year old can each do, when NRW schools start Informatik, two free contests, and a project on the city\'s own list of playgrounds.',
  twitterDescription: 'Coding for Wuppertal children aged 6 to 12, live in English, with a project on the city\'s playground data.',
  pageName: 'Coding Classes for Kids in Wuppertal',
  webPageDescription: 'A guide for Wuppertal parents of children aged 6 to 12 to learning to code in English: what each age is ready for, when Informatik starts at NRW schools, the Informatik-Biber and Känguru dates, and an original project on Stadt Wuppertal\'s open playground data.',
  courseDescription: 'Live online coding classes in English for Wuppertal children aged 6 to 12: Scratch first, then typed Python and small projects with real data, with a regular mentor, in a group of 15 to 20 children of a similar age or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Wuppertal',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#age', label: 'By age' },
    { href: '#spielplatz', label: 'Project' },
    { href: '#contests', label: 'Contests' },
    { href: '#week', label: 'Times' }
  ],
  eyebrow: 'Wuppertal &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Wuppertal',
  lede: 'A six year old in Wuppertal can already tell a story with moving characters; a twelve year old can write a program that reads a real city dataset. Between the two lie six years and a lot of small steps. This page goes through what each age is ready for, what our live lessons in English feel like for a child, when Informatik arrives at an NRW school, two free contests worth knowing about, and a project on Wuppertal\'s list of playgrounds that starts with a pencil and ends in Python.',
  secondaryCta: { href: '#spielplatz', label: 'Try the playground project' },
  wa: 'Hello Modern Age Coders, we live in Wuppertal and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching children live online since 2020 &middot; 10,000+ students worldwide &middot; one mentor your child gets to know',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['Ages 6 to 8', 'Scratch and screen-free puzzles'],
    ['Ages 9 to 12', 'Scratch, then Python'],
    ['Lessons', 'Two a week, about an hour'],
    ['Group', '15 to 20 children, or 1-on-1'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'For busy parents',
  capsule: 'Modern Age Coders teaches Wuppertal children between 6 and 12 to code in live online classes held in English. Six to eight year olds build Scratch stories and games; from about nine, children move to typed Python and small projects on real data. A regular mentor matches your child\'s pace and accent, and lessons run after school or on weekend mornings, in a group of 15 to 20 children of a similar age or one to one.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Three first courses for Wuppertal children',
    lede: 'A long course for a child who is just starting school, a short one for a quick taste, and a Python course for a child of nine or ten who is ready to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CKW / 01', title: 'Coding for Kids', note: 'Ten to twelve months for children between 6 and 12. Scratch games and animations first, then apps and a gentle first look at AI, in groups sorted by age.' },
      { course: 'scratch-programming-complete-course', code: 'CKW / 02', title: 'Scratch Coding for Kids', note: 'Three to four months, open to any child from 6 to 12. From an empty stage to a finished game, a clear way to find out whether coding clicks.' },
      { course: 'python-ai-kids-masterclass', code: 'CKW / 03', title: 'Python and AI for Kids', note: 'Eight to ten months for nine to twelve year olds. Typed Python, drawings made with code, games, and small data projects like the playground one below.' }
    ]
  },

  sections: [
    {
      id: 'age',
      eyebrow: 'Year by year',
      h2: 'What can a child in Wuppertal learn at 6, 9 and 12?',
      lede: 'Children do not all move at the same speed, but the stages come in the same order. Here is what we usually see, and what we teach at each one.',
      body: [
        { kind: 'table', numCols: [], caption: 'What children usually manage at each age in our classes (our observations)', head: ['Age', 'School year in NRW', 'What they build with us', 'The thinking behind it'], rows: [
          ['6 to 7', 'Grades 1 and 2', 'A character that walks, talks and changes costume', 'Steps happen in order'],
          ['7 to 8', 'Grades 2 and 3', 'A chase game with a score', 'Repeating, and reacting to a key'],
          ['8 to 9', 'Grades 3 and 4', 'A quiz that remembers answers', 'Variables and simple decisions'],
          ['9 to 10', 'Grades 4 and 5', 'First typed Python: drawings and number games', 'Exact spelling matters to a computer'],
          ['10 to 12', 'Grades 5 to 7', 'Programs that read a small data file', 'Sorting things into groups before counting']
        ] },
        { kind: 'source', html: 'Our own teaching plan. NRW school years shown for a child who started school at six; in Germany a child who turns six by the Land\'s cut-off date starts compulsory school on 1 August, according to the KMK.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'At six, short and playful', p: 'Lessons are broken into small tasks of a few minutes. Reading is kept to a minimum: Scratch blocks are coloured by type, and the mentor reads instructions aloud. Children who cannot yet read fluently still make things move on the first day.' },
          { h3: 'At nine, the typing switch', p: 'Most children are ready to type Python around nine or ten. The first weeks are about patience with brackets and capital letters. A mentor who has seen every typing mistake before makes this stage calm instead of frustrating.' },
          { h3: 'At twelve, real questions', p: 'By twelve a child can work with a real file of data, ask a question of it and check the answer. The playground project further down is exactly that kind of work, written so a twelve year old can do every line.' }
        ] },
        { kind: 'p', mt: true, html: 'All lessons are in English only. For a child at a German Grundschule, English in a coding class is easier than it sounds, because so much of the lesson is on the screen: you can see a sprite move without understanding every word. Mentors speak slowly and kindly, repeat in simpler words, and quickly get used to how your child speaks. A child who mixes in a German word is gently given the English one.' }
      ]
    },
    {
      id: 'spielplatz',
      tint: 'tint',
      eyebrow: 'A Wuppertal project',
      h2: 'How many playgrounds does Wuppertal have?',
      lede: 'Stadt Wuppertal publishes a map file of its children\'s play areas under the open licence CC BY 4.0. It sounds like a question with one number for an answer. It has two, and working out why is the lesson.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is called Kinderspielplätze Wuppertal and comes from the city\'s youth office, published through its open data portal. We downloaded the file Kinderspielplaetze_EPSG4326_JSON.json on 3 November 2026.',
            'Each entry has two pieces of information besides its outline on the map: a name and an area. The city explains that the name is mostly a street name, sometimes with an extra word, followed by the type of play area in brackets.'
          ],
          rightH3: 'The question',
          right: [
            'How many playgrounds are there? A younger child can count dots on a printed map. An older child can ask Python, and the first program below gives an answer straight away.',
            'But look at the first entry it prints, and at what is inside the brackets.'
          ] },
        { kind: 'code', label: 'Step 1: count everything in the file', lang: 'Python', code: V1, note: 'It prints <code>Places in the file: 359</code> and <code>The first one: {\'name\': \'Falkenberg (KSP)\', \'flaeche\': 1199}</code>.' },
        { kind: 'p', mt: true, html: '359 places. But the file does not only list playgrounds. The word in brackets says what kind of place each one is, so the next program cuts that word out of every name and keeps a tally, the same way a child would sort cards into piles.' },
        { kind: 'code', label: 'Step 2: sort by the word in brackets', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>{\'KSP\': 273, \'Skateanlage\': 2, \'Spielpunkt\': 4, \'Bolzplatz\': 80}</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'What the 359 entries in Wuppertal\'s file are (our count)', head: ['Label in brackets', 'Entries', 'What it means'], rows: [
          ['KSP', '273', 'Children\'s playgrounds; we read KSP as Kinderspielplatz'],
          ['Bolzplatz', '80', 'Small kick-about football pitches'],
          ['Spielpunkt', '4', 'Small play points'],
          ['Skateanlage', '2', 'Skate parks']
        ] },
        { kind: 'p', mt: true, html: 'So the honest answer is: 273 playgrounds, plus 80 football pitches, 4 play points and 2 skate parks. Both numbers are right; they answer different questions. A child who learns to ask "what exactly am I counting?" has learned something that applies to every survey, chart and headline they will ever read.' },
        { kind: 'code', label: 'Step 3: the largest playground, and sizes in three piles', lang: 'Python', code: V3, note: 'Run after Step 1. It prints <code>Playgrounds: 273</code>, <code>Largest: Reppkotten,Spielwiese (KSP) 24210 m2</code>, <code>0 to 1000 m2: 74</code>, <code>1000 to 5000 m2: 168</code> and <code>5000 to 30000 m2: 31</code>.' },
        { kind: 'source', html: 'Data: Stadt Wuppertal, Kinderspielplätze Wuppertal, daten.wuppertal.de via Open.NRW, licence CC BY 4.0, file Kinderspielplaetze_EPSG4326_JSON.json downloaded 3 November 2026. The file is updated from the city\'s own system, so a later download may give slightly different numbers. All counts are our own.' },
        { kind: 'p', mt: true, html: 'The file never says what unit the area is in. We checked rather than guessed: from the outline of each place on the map we worked out its area ourselves, and our figures came within about one percent of the file\'s numbers every time, which only works if they are square metres. For the largest playground our estimate is about 24,131 square metres against the file\'s 24,210. Older children enjoy that check almost more than the project itself.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Write twelve names on cards, some ending in (KSP) and some in (Bolzplatz). Count all the cards, then sort them into piles and count again.',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of ten names and a counter for each kind. Loop through the list and add one to the right counter each time.',
          '<strong>Ages 10 to 12, Python.</strong> Run Steps 1 to 3, then change Step 3 to find the largest Bolzplatz instead of the largest playground.',
          '<strong>A family challenge.</strong> Find your nearest playground in the file and guess its area before looking it up. Who in the family guessed closest?'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Informatik in NRW',
      h2: 'When does my child meet Informatik at school in Wuppertal?',
      lede: 'In grade 5. Wuppertal follows the rules of Nordrhein-Westfalen, where Informatik becomes a compulsory subject at the start of secondary school.',
      body: [
        { kind: 'two',
          leftH3: 'Grundschule, grades 1 to 4',
          left: [
            'Outside Berlin and Brandenburg, Grundschule runs from grade 1 to grade 4, so most Wuppertal children are in primary school from about six to about ten. The KMK published key points in 2024 on bringing media education and informatics education into primary school, but NRW\'s compulsory Informatik subject begins later.',
            'For a curious six or seven year old, that leaves four school years in which coding happens mostly outside the timetable.'
          ],
          rightH3: 'Grades 5 and 6',
          right: [
            'The Gesellschaft für Informatik records in its Informatik-Monitor 2026/27 that NRW teaches Informatik as a compulsory subject in grades 5 and 6 at every general school type, whether Gymnasium, Realschule, Gesamtschule or another.',
            'Grades 5 and 6 are also the years in which a child can still switch between school tracks, so they matter in more than one way. A child who arrives in grade 5 already able to plan a program step by step usually finds the new subject a pleasure.'
          ] },
        { kind: 'p', mt: true, html: 'Our classes are there alongside school, never instead of it, and the school\'s Informatik lessons and marks are what count. What we add is time: two lessons a week in which a child can follow their own ideas, at their own speed, with a mentor who answers every question.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which free coding and maths contests can a Wuppertal child enter?',
      lede: 'Two national contests are open to primary pupils and need no previous experience. Both are entered through the school, so ask the class teacher.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two contests for children in Germany, 2026 to 2027', head: ['', 'Informatik-Biber', 'Känguru der Mathematik'], rows: [
          ['Subject', 'Logic and computing puzzles', 'Maths problems'],
          ['Who', 'Grades 3 to 13, no prior knowledge', 'From grade 3'],
          ['Length for primary pupils', '9 tasks in 30 minutes', '24 problems in 75 minutes'],
          ['Next date', '9 to 20 November 2026', '8 April 2027'],
          ['Registration', 'By the school', 'By the school, 1 December 2026 to 31 January 2027']
        ] },
        { kind: 'source', html: 'Sources: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026 pages; Känguru der Mathematik e.V., 2027 dates. Read on 2 November 2026. The Biber is free; the Känguru organisers say the 2027 contest is an exception, held in April instead of on its usual Thursday in March, because that date would fall just before the Easter holidays in almost every Land.' },
        { kind: 'p', mt: true, html: 'We are not connected with either contest and do not use their tasks. In class we write puzzles of our own in a similar spirit, sorting, hidden rules, shortest routes, which is the same thinking the playground project uses. Children who enjoy those usually enjoy the contests too.' }
      ]
    },
    {
      id: 'week',
      eyebrow: 'Fitting it into the week',
      h2: 'When are coding classes for Wuppertal children?',
      lede: 'After school on weekdays, or on weekend mornings when younger children are at their freshest. The mentor is in India, where the clock is ahead.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example times for a Wuppertal child, with the mentor\'s time in India', head: ['Wuppertal', 'Mentor now (winter)', 'Mentor after the clocks change'], rows: [
          ['14:45, straight after school', '19:15', '18:15'],
          ['16:15 on a weekday', '20:45', '19:45'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'German time is MEZ (UTC+1) in winter and MESZ (UTC+2) in summer under the Einheitenzeitgesetz. The winter clock started on 25 October 2026 and the summer clock returns on 28 March 2027; India stays on UTC+5:30 all year, so it leads Wuppertal by four and a half hours now and by three and a half after that date. Example slots only.' },
        { kind: 'p', mt: true, html: 'NRW school holidays in 2026/27, from the KMK calendar: Herbstferien 17 to 31 October 2026, Christmas 23 December 2026 to 6 January 2027, Osterferien 22 March to 3 April 2027, Pfingsten on 18 May 2027 and the Sommerferien from 19 July to 31 August 2027. Classes carry on through all of them unless you would like a break; just tell the mentor before you go away.' },
        { kind: 'p', html: 'Wuppertal had 358,193 residents on 31 December 2024, according to Destatis. Families in neighbouring Solingen (165,626), Remscheid (113,828) and Hagen (190,384) learn in exactly the same way, since every class is online; those towns are in NRW too, so the same holiday dates apply.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Small steps',
    h2: 'Five steps from first block to first dataset',
    lede: 'Our milestones for children. Parents hear in the monthly note which step their child is on and what comes next.',
    table: { caption: 'Coding steps for ages 6 to 12 (ours)', head: ['Step', 'Typical age', 'Your child can'], rows: [
      ['1. Order', '6 to 7', 'Put actions in the right order so a story makes sense'],
      ['2. Repeat', '7 to 8', 'Use a loop instead of the same block ten times'],
      ['3. Remember', '8 to 9', 'Keep a score or a name in a variable'],
      ['4. Type', '9 to 10', 'Write and fix short Python programs'],
      ['5. Sort and count', '10 to 12', 'Split data into groups and count each group']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child what they are counting, not just how many. It is the question Step 2 of the project is built on.',
      'Praise the fixed mistake more than the finished game. Fixing is the real skill.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you count, check what is in the pile.',
      'Read the first line of a file before you trust the total.'
    ] }
  },

  catalogue: {
    eyebrow: 'For later',
    h2: 'Nine more courses for Wuppertal children',
    lede: 'Grouped by what children enjoy. Each one is live, in English, with a regular mentor, in a group or alone.',
    bands: [
      { num: 'I', h3: 'Puzzles and numbers', sub: 'Ages 5 to 13', courses: [
        { code: 'CKW / PUZZLE / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles and step-by-step plans, good practice for the Biber.' },
        { code: 'CKW / PUZZLE / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Känguru and Olympiade training', blurb: 'Contest-style maths with problems we write ourselves.' },
        { code: 'CKW / PUZZLE / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for 5 to 10 year olds, without tricks.' }
      ] },
      { num: 'II', h3: 'Worlds they already love', sub: 'Ages 7 to 14', courses: [
        { code: 'CKW / WORLD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds and changes a Minecraft world.' },
        { code: 'CKW / WORLD / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Their own Roblox games, scripted in Luau.' },
        { code: 'CKW / WORLD / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot games', blurb: 'A real game engine, used gently, for older children.' }
      ] },
      { num: 'III', h3: 'Making useful things', sub: 'Ages 8 to 12', courses: [
        { code: 'CKW / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps for kids', blurb: 'Phone apps built with blocks that really run.' },
        { code: 'CKW / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A small website of their own, made from scratch.' },
        { code: 'CKW / MAKE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How machines learn, explained without chatbot accounts.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How our live classes work for a Wuppertal child',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'Soon after school ends, for the youngest children.' },
      { time: 'Later afternoon', l: 'After homework or sport, for older children.' },
      { time: 'Weekend morning', l: 'Saturday or Sunday, when everyone is rested.' }
    ],
    cells: [
      { h3: 'A familiar mentor', p: 'Your child sees the same face every lesson.' },
      { h3: 'Short tasks', p: 'A few minutes each, so young minds stay with it.' },
      { h3: 'Kind, clear English', p: 'Slow speech and simple words, repeated gladly.' },
      { h3: 'Children of one age', p: 'Six year olds learn with six and seven year olds.' },
      { h3: 'A note for parents', p: 'Each month: what your child made and found tricky.' },
      { h3: 'Shared or private', p: 'A class of 15 to 20, or your child alone.' }
    ]
  },

  projectsH2: 'What older students of ours have built',
  projectsLede: 'Children who start at six or seven often stay with us for years. Here are projects by some of our older students around the world; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from parents and students on Google, unchanged.',

  fees: {
    h2: 'Fees for Wuppertal families',
    lede: 'Each month of classes, eight lessons, has a single fee. We show it in euro, calculated with the European Central Bank reference rate; your card is then charged in US dollars, and your bank converts that back to euro, so the final figure can move slightly.',
    free: ['A free first class for your child', 'A short puzzle and a first moving sprite', 'No card needed'],
    group: ['15 to 20 children of a similar age', 'A regular mentor', 'Two lessons a week', 'Paid monthly, stop any month'],
    one: ['Your child and their own mentor', 'Lessons shaped around their interests', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Wuppertal parents ask',
    h2: 'Coding classes for kids in Wuppertal: parents\' questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never: our lessons are held in English and nothing else. What makes that work for a Wuppertal primary pupil is the mentor, who keeps sentences short, waits for an answer, gets used to the way your child talks and says things a second way when the first did not land. Most of the lesson is visible on screen anyway.' },
      { q: 'Is six too young to learn coding?', a: 'Not with the right tools. At six, children drag coloured Scratch blocks into place with the mouse, so reading and spelling hardly come into it. We keep each task to a few minutes, and after the free first class you will know whether your child is ready.' },
      { q: 'When does my child switch from Scratch to Python?', a: 'Usually at nine or ten, when typing and reading are comfortable. Some children are ready a little earlier and some a little later; the mentor decides together with you.' },
      { q: 'Do schools in Wuppertal teach coding?', a: 'Informatik is a compulsory subject in grades 5 and 6 at all general school types in NRW, according to the GI Informatik-Monitor 2026/27. Before grade 5 the compulsory subject has not started, so children in Grundschule mostly learn coding outside school.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer with a keyboard, a headset with a microphone and a quiet corner. A parent nearby for the first lesson helps younger children settle in.' },
      { q: 'When are the classes in Wuppertal time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger children often take early afternoon or weekend morning slots.' },
      { q: 'Can my child enter the Informatik-Biber?', a: 'Yes, if the school signs up. BWINF, the organiser, opens the Biber to every pupil from grade 3 upwards, charges nothing and expects no earlier experience. This year\'s window is 9 to 20 November 2026, and a primary class gets 30 minutes for its nine puzzles.' },
      { q: 'Who are the mentors?', a: 'Mentors based in India who teach live over video. In winter India is four and a half hours ahead of Wuppertal, so a 16:15 class in Wuppertal is 20:45 for the mentor.' },
      { q: 'How are fees shown and charged?', a: 'One fee per month buys eight lessons. You see it in euro here, based on the European Central Bank reference rate; the card payment runs in US dollars and your bank does the conversion, which is why the euro figure on a statement may be a few cents off. Trying the first class is free.' },
      { q: 'Will my child use AI chatbots?', a: 'No. Children under 13 do not use chatbot accounts with us. They learn how AI works by building small sorting and guessing programs themselves, which teaches more than typing questions into a tool.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for parents of young coders in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW rules, holidays and data.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'The national guide for ages 6 to 12.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'Where most young coders begin.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Puzzles in the spirit of the Biber.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Getting ready for the April 2027 contest.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'Expect thirty to forty-five minutes of play: a puzzle, then a sprite your child makes move. Meanwhile the mentor notices how your child approaches a problem and how easily they follow English, and afterwards suggests a course and a group of children the same age.',
    readFirst: 'To see our approach first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Classes are live online, taught in English only by mentors in India. WhatsApp reaches us fastest, in English.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'What exactly are we counting?'
  },

  personalityCss: `
.ag-root.ag-ckw .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-ckw .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-ckw .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ckw .ag-table th { text-transform: none; letter-spacing: 0.01em; }
.ag-root.ag-ckw .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW page); KMK Primarbereich, school-start rule and Ferien 2026/2027; BWINF Informatik-Biber 2026; Känguru der Mathematik 2027 dates; Destatis GV-ISys 31.12.2024; Stadt Wuppertal open data, Kinderspielplätze Wuppertal, CC BY 4.0.',
    localProject: 'What exactly are we counting: an original project on Stadt Wuppertal\'s play area file in which the first count is 359, splitting the bracketed label gives 273 playgrounds (KSP), 80 Bolzplätze, 4 Spielpunkte and 2 Skateanlagen, the largest playground is Reppkotten, Spielwiese at 24,210 m2, and our own outline areas confirm the unit is square metres; with card, Scratch and Python versions. Lesson family: the category is inside the label; split, then count.',
    requiredMentions: ['Kinderspielplaetze_EPSG4326_JSON.json', 'Places in the file: 359', "{'KSP': 273, 'Skateanlage': 2, 'Spielpunkt': 4, 'Bolzplatz': 80}", 'Largest: Reppkotten,Spielwiese (KSP) 24210 m2', '1000 to 5000 m2: 168', 'What exactly are we counting?', '358,193', 'about 24,131 square metres'],
    sources: [
      { claim: 'NRW Informatik compulsory in grades 5 and 6 at all general school types.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Grundschule grades 1 to 4; school start rule.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'Informatik-Biber 2026 rules and dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru 2027 date and registration.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Wuppertal play areas and licence.', url: 'https://ckan.govdata.de/dataset/kinderspielplatze-wuppertala4633' },
      { claim: 'Wuppertal population 358,193 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'The expansion of KSP is our reading (Kinderspielplatz), labelled as such; the file does not define it.',
      'The dataset text also mentions roller rinks, a pump track and parkour sites; this file has only four labels, so we report what is in the file.',
      'Naming any Wuppertal school: refused.',
      'Any affiliation with Stadt Wuppertal, BWINF or Känguru der Mathematik: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
