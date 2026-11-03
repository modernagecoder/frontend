'use strict';
// Coding classes for kids in Hamburg (ag- city door, Germany cluster P5 row DE108).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: Hamburg is one of the few Länder with real compulsory Informatik, but it starts in grade 7, so the ages 6 to 12
// are still a gap. Spine: Hamburg's school path (Grundschule 1 to 4, Naturwissenschaften/Technik in 5 and 6 with a
// Themenfeld Informatik, four compulsory hours across 7 to 10 since 2025/26), why English classes work for a young
// child, a text-search project on Hamburg's playground open data, the Informatik-Biber 2026, Hamburg times and the
// Hamburg-only spring holiday.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-hamburg/):
//  - GI Informatik-Monitor 2026/27, Hamburg page (infmon-hamburg/09e5d2a0.txt): "An Stadtteilschulen und Gymnasien sind
//    seit dem Schuljahr 2025/26 vier Wochenstunden Informatik verpflichtend."; "Über die Verteilung der vier Stunden auf
//    die Jahrgangsstufen 7 bis 10 entscheiden die Schulen."; Bildungspläne "Naturwissenschaften/Technik" in den
//    Jahrgangsstufen 5 und 6, "die mit dem Themenfeld „Informatik“ anteilig Inhalte mit Informatikbezug benennen"; "Die
//    Primarstufe umfasst die Grundschule mit den Jahrgangsstufen 1 bis 4."; Sek I "mit der Stadtteilschule und dem
//    Gymnasium zwei verschiedene Schularten, welche die Jahrgangsstufen 5 bis 10 abdecken".
//  - GI Informatik-Monitor national (FACTS 91, 93): "Mit Baden-Württemberg, Hamburg, Sachsen und Schleswig-Holstein
//    setzen vier weitere Bundesländer die kurzfristige Empfehlung von 4 Pflichtstunden um."; SWK six hours (also on the
//    Hamburg page: "Pflichtfach Informatik im Umfang von sechs Wochenstunden über die gesamte Sekundarstufe I").
//  - bwinf.de (FACTS 129 to 137): Biber free, grades 3 to 13, no prior knowledge; primary 9 tasks in 30 minutes, grades
//    5 and 6 12 in 35, from grade 7 15 in 40; Biberwochen 9 to 20 November 2026; 20th edition; Schnupper-Biber from 14
//    September 2026; results December 2026, certificates January 2027; over 580,000 in 2025.
//  - KMK FER2026_27 (FACTS 285): "Hamburg 19.10. - 30.10. 21.12. - 01.01. 29.01. 01.03. - 12.03. 07.05. - 14.05.";
//    KMK Sommerferienregelung (FACTS 262): Hamburg 2027 "01.07. - 11.08.".
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hamburg 1,862,565; Lübeck 216,889.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA) via Transparenzportal Hamburg, "Spielplätze
//    Hamburg" (https://ckan.govdata.de/dataset/spielplatze-hamburg, record saved), licence Datenlizenz Deutschland
//    Namensnennung 2.0. Download https://geodienste.hamburg.de/download?url=https://geodienste.hamburg.de/wfs_spielplaetze&f=json
//    (ZIP, 20,786 bytes), file de_hh_up_spielplaetze_hh_EPSG_4326.json (56,402 bytes, sha256 01be093d...43864f83),
//    100 features, saved as spielplaetze_hamburg.json, downloaded 3 November 2026. Notes: "Eine Auswahl an beliebten
//    Spielplätzen in Hamburg."; "Im Datensatz verlinkte Fotos ... sind nicht Teil der freien Lizenz." (photos not used).
// Our own code (scratchpad de/w/C1/py/ckh_v1.py, ckh_v2.py, python3 -I, run in the data folder):
//  ckh_v1 prints "Rutsche 18" and "Schaukel 2"; ckh_v2 prints "Rutsche 39", "Schaukel 16", "Slide and water: 7 of 100".
//  Exploration: compound words found only by the lower-case search include Hangrutsche (7), Turmrutsche (5),
//  Tarzanschaukel (5), Netzschaukel (3), Nestschaukel (3), Röhrenrutsche (3); "Wasser" finds 27 either way.
// Lesson family: text search and capital letters; normalise case before you compare, and know why German needs it.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'with open("spielplaetze_hamburg.json", encoding="utf-8") as f:',
  '    places = [feature["properties"] for feature in json.load(f)["features"]]',
  '',
  'for word in ["Rutsche", "Schaukel"]:',
  '    found = [p["name"] for p in places if word in p["beschreibung"]]',
  '    print(word, len(found))'
].join('\n');

const V2 = [
  'import json',
  '',
  'with open("spielplaetze_hamburg.json", encoding="utf-8") as f:',
  '    places = [feature["properties"] for feature in json.load(f)["features"]]',
  '',
  'for word in ["Rutsche", "Schaukel"]:',
  '    found = [p["name"] for p in places if word.lower() in p["beschreibung"].lower()]',
  '    print(word, len(found))',
  '',
  'both = [p for p in places',
  '        if "rutsche" in p["beschreibung"].lower() and "wasser" in p["beschreibung"].lower()]',
  'print("Slide and water:", len(both), "of", len(places))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Hamburg: coding for kids' },
  slug: 'coding-classes-for-kids-hamburg',
  code: 'ckh',
  accent: '#144039',
  accentRationale: 'Coding classes for kids, Hamburg: a deep harbour green #144039, the colour of the Elbe on a grey day and of Hamburg\'s green copper roofs; contrast 9.35 at its lowest on the paper tints and well above 4.5 on all three',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Hamburg',
  title: 'Coding Classes for Kids in Hamburg: Live Online, in English',
  description: 'Coding classes for kids in Hamburg aged 6 to 12: live online in English, when Hamburg schools start Informatik, the Biber, and a Hamburg playground project.',
  ogDescription: 'Live online coding for Hamburg children aged 6 to 12, in English and at the child\'s pace: Hamburg\'s four compulsory Informatik hours start only in grade 7, the free Informatik-Biber runs in November 2026, and a project searches Hamburg\'s own playground list.',
  twitterDescription: 'Coding for Hamburg kids, live in English: when school Informatik starts, the Biber, and a playground search project.',
  pageName: 'Coding Classes for Kids in Hamburg',
  webPageDescription: 'A guide for Hamburg parents of children aged 6 to 12 to learning to code, built from the Gesellschaft für Informatik, KMK and Bundesweite Informatikwettbewerbe sources, with an original text-search project on the Transparenzportal\'s playground data.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Hamburg: Scratch and game making first, then typed Python and small AI projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Hamburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#project', label: 'Project' },
    { href: '#biber', label: 'Biber' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Hamburg &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Hamburg',
  lede: 'Hamburg takes school computing more seriously than most of Germany: since 2025/26 every pupil at a Stadtteilschule or Gymnasium has four compulsory hours of Informatik. Those hours fall between grades 7 and 10, though, so a Hamburg child of 6 to 12 still meets very little coding at school. Below: the Hamburg school path grade by grade, what an English-only class feels like for a seven year old, a free puzzle contest open to Hamburg schools this November, and a project on Hamburg\'s playground list where a capital letter hides half the slides in the city.',
  secondaryCta: { href: '#project', label: 'See the playground project' },
  wa: 'Hello Modern Age Coders, my child lives in Hamburg and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; one mentor, in clear English',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['First steps', 'Scratch games, then Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Hamburg times', 'After school and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding classes for kids in Hamburg live over video, in English, to children from 6 to 12. Younger ones build Scratch stories and games; from about 9 they type Python and try small AI projects. A regular mentor keeps to your child\'s pace and accent. Lessons fit Hamburg afternoons and weekend mornings, one to one or with fifteen to twenty classmates, years before school Informatik begins in grade 7.',

  picks: {
    eyebrow: 'Where Hamburg children start',
    h2: 'Three courses for Hamburg children aged 6 to 12',
    lede: 'One for children ready to type real code, one long course from blocks to apps, and one for children who mostly want to build games.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CKH / 01', title: 'Python and AI, ages 9 to 12', note: 'Roughly eight to ten months in which children type Python from the first lesson, draw with the turtle, build games and finish with small AI projects on real files such as the playground list.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CKH / 02', title: 'Coding for Kids, ages 6 to 12', note: 'Grouped by age, over ten to twelve months: Scratch first, then simple apps, then a gentle look inside how AI decides.' },
      { course: 'game-development-masterclass-for-kids', code: 'CKH / 03', title: 'Game Development for Kids', note: 'Ages 8 to 12. Scratch, Roblox and Minecraft in one course, for a child whose first question is how games are made.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Hamburg schools',
      h2: 'When do Hamburg schools start teaching Informatik?',
      lede: 'In grade 7 at the earliest, as a full subject. Before that there are only a few informatics topics inside a science subject. The facts come from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing in a Hamburg school career, by grade, 2026/27', head: ['Grades', 'School', 'Computing on the timetable'], rows: [
          ['1 to 4', 'Grundschule', 'No Informatik subject'],
          ['5 and 6', 'Stadtteilschule or Gymnasium', 'Naturwissenschaften/Technik, with a Themenfeld Informatik as one part'],
          ['7 to 10', 'Stadtteilschule or Gymnasium', 'Informatik, four compulsory hours in total since 2025/26; the school decides how to spread them'],
          ['7 to 10', 'Stadtteilschule or Gymnasium', 'More Informatik possible as an elective (Wahlpflicht)'],
          ['10 to 12 or 11 to 13', 'Oberstufe', 'Informatik as a course or profile subject, if offered']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hamburg page, read on 2 November 2026. At a Hamburg Gymnasium the Oberstufe runs from grade 10 to 12; at a Stadtteilschule with an Oberstufe, from grade 11 to 13.' },
        { kind: 'two', mt: true,
          leftH3: 'Ahead of most Länder',
          left: [
            'The Informatik-Monitor names Hamburg with Baden-Württemberg, Sachsen and Schleswig-Holstein as the four Länder that meet the short-term recommendation of four compulsory hours. The education ministers\' standing scientific commission recommends six hours across lower secondary school, so even Hamburg is still on the way.',
            'For a Hamburg parent the good news is real: by the end of grade 10, every pupil at a Stadtteilschule or Gymnasium will have had some Informatik.'
          ],
          rightH3: 'But not before grade 7',
          right: [
            'Hamburg\'s Grundschule covers grades 1 to 4, and the monitor lists no Informatik subject there. In grades 5 and 6 the science subject Naturwissenschaften/Technik includes a Themenfeld Informatik as one part of its plan, not as a subject of its own.',
            'And because each school decides how to spread its four hours over grades 7 to 10, some children will not meet them until grade 9. A child who is curious at 8 has years to wait.'
          ] },
        { kind: 'p', mt: true, html: 'That is the gap our classes fill. Start at 7 or 8, and by grade 7 your child can already split a task into steps, read a short program and spot the bug, which is roughly where Hamburg\'s school Informatik picks up.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can a Hamburg child learn coding in English?',
      lede: 'Yes. Lessons are live, English is the only teaching language, and the mentor bends to the child rather than the reverse.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only, said up front', p: 'Lessons are in English and only in English; we have no German-language classes. Children from English-medium schools hear their school language; children from German schools get an hour of listening practice with every lesson.' },
          { h3: 'Slow, clear, repeated', p: 'Mentors speak in short sentences, show before they tell, and say it again in simpler words when a face looks puzzled. They get used to each child\'s accent within a few classes.' },
          { h3: 'The screen does the talking', p: 'In Scratch most of the meaning is in coloured blocks, and Python\'s keywords are short English words a child sees working. The English needed in the first months is smaller than most parents expect.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India over live video, and a Hamburg afternoon is their evening. Because it is the same person each week, they soon know whether your child enjoys a hard puzzle, wants a moment before answering, or learns most easily by changing a game someone else made. We teach children to think a problem through, not to copy an answer, and we never ask a child under 13 to use an adult AI chatbot.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Hamburg project',
      h2: 'How many Hamburg playgrounds have a slide? A search that depends on one capital letter',
      lede: 'Hamburg publishes a list of popular playgrounds on its Transparenzportal, free to reuse. Our older children use it to learn how computers search text, and why German words make that harder than it looks.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset Spielplätze Hamburg comes from the city\'s environment authority, BUKEA, under the Datenlizenz Deutschland Namensnennung 2.0. We downloaded it on 3 November 2026 and saved it as spielplaetze_hamburg.json: 100 playgrounds, each with a name, a short description and the nearest bus or train stop.',
            'The description says it is a selection of popular playgrounds, not every playground in the city, so our counts describe this list only. A typical description reads "Wasserspielbereich, Tischtennis, Kletterturm mit Rutsche".'
          ],
          rightH3: 'The question',
          right: [
            'How many playgrounds on the list have a slide? In German a slide is a Rutsche, so the obvious program looks for the word Rutsche in each description and counts the matches.',
            'A ten year old writes that in five lines. The surprise comes when the child checks the answer by reading a few descriptions aloud.'
          ] },
        { kind: 'code', label: 'Version 1: search for the word', lang: 'Python', code: V1, note: 'It prints <code>Rutsche 18</code> and <code>Schaukel 2</code>.' },
        { kind: 'p', mt: true, html: 'Only 18 slides and 2 swings in 100 playgrounds? Reading the list shows why. German glues words together: a tower slide is a Turmrutsche, a hillside slide a Hangrutsche, a tube slide a Röhrenrutsche. Inside those words, rutsche starts with a small r, and Python treats R and r as different letters. Swings are worse: Tarzanschaukel, Netzschaukel and Nestschaukel all hide the word with a small s.' },
        { kind: 'code', label: 'Version 2: make both sides lower case first', lang: 'Python', code: V2, note: 'It prints <code>Rutsche 39</code>, <code>Schaukel 16</code> and <code>Slide and water: 7 of 100</code>.' },
        { kind: 'p', html: 'One small change, turning both the word and the description into lower case before comparing, more than doubles the slides to 39 and multiplies the swings by eight, to 16. Wasser, water, gives 27 either way, because in this list water always comes at the start of its compound, as in Wasserspielbereich, where the capital stays. The last line combines two searches with and: 7 playgrounds on the list offer both a slide and water play.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Matches in the 100 playground descriptions, exact search against lower-case search (our calculation)', head: ['Word', 'Exact search', 'Lower-case search'], rows: [
          ['Rutsche (slide)', '18', '39'],
          ['Schaukel (swing)', '2', '16'],
          ['Seilbahn (zip line)', '5', '8'],
          ['Kletter (climbing)', '49', '51'],
          ['Wasser (water)', '27', '27']
        ] },
        { kind: 'source', html: 'Data: Behörde für Umwelt, Klima, Energie und Agrarwirtschaft, via Transparenzportal Hamburg, Spielplätze Hamburg, Datenlizenz Deutschland Namensnennung 2.0; downloaded 3 November 2026. The photos linked in the dataset are not under the free licence, so we do not use them. Every count is our own.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Write ten words on cards, some with a capital letter, some without. Ask: find every card with the word ball in it. Did football count?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of five playground descriptions and use the contains block to find Rutsche. Then try rutsche and see which answer changes.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1, predict how many slides you are missing, then write Version 2 yourself.',
          '<strong>Going further.</strong> Count how many different kinds of slide the list mentions. Hint: split each description at the commas and look at the end of each word.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free first contest',
      h2: 'Can my child in Hamburg take part in the Informatik-Biber?',
      lede: 'Yes, through the school, and the 2026 contest starts in a few days. It is a puzzle quiz, not a coding test.',
      body: [
        { kind: 'two',
          leftH3: 'What children do',
          left: [
            'The organiser, Bundesweite Informatikwettbewerbe, describes the Biber as the biggest informatics contest for school pupils in Germany: a free online quiz for grades 3 to 13 that assumes no knowledge at all. Over 580,000 pupils entered in 2025, and 2026 is its 20th year.',
            'The length grows with age: nine tasks in 30 minutes at primary level, twelve in 35 for grades 5 and 6, fifteen in 40 from grade 7. Hamburg children in grades 3 and 4 sit the primary version.'
          ],
          rightH3: 'Dates for 2026 and 2027',
          right: [
            'The Biberwochen 2026 run from 9 to 20 November 2026, a few weeks after Hamburg\'s autumn holiday ended on 30 October 2026. Schools register their pupils, so ask the class teacher whether your child\'s school takes part. Anyone can warm up on the Schnupper-Biber, the practice round, which opened on 14 September 2026.',
            'The organiser publishes results in December 2026 and posts certificates and prizes in January 2027.'
          ] },
        { kind: 'p', mt: true, html: 'The puzzles test ordering, hidden rules, shortest routes and simple codes, which is the same thinking the playground project trains. We never use or copy the real Biber tasks. Our lessons use puzzles we write ourselves in that style, and we have no link with the organiser. Our <a class="ag-inline-link" href="/informatik-biber-practice-in-english">Biber practice page</a> has more of our own puzzles in English.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes for a Hamburg child?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Hamburg and Berlin share one clock, so the times below hold anywhere in Germany.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample lesson times on the Hamburg clock and the mentor\'s clock', head: ['In Hamburg', 'Mentor in India, winter', 'Mentor in India, from 28 March 2027'], rows: [
          ['16:05', '20:35', '19:35'],
          ['17:35', '22:05', '21:05'],
          ['Saturday 10:50', '15:20', '14:20'],
          ['Sunday 09:30', '14:00', '13:00']
        ] },
        { kind: 'source', html: 'Germany uses Central European Time, UTC+1, and Central European Summer Time, UTC+2, under the Einheitenzeitgesetz; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India stays on UTC+5:30, so the mentor\'s clock runs 4 h 30 min ahead of Hamburg in winter and 3 h 30 min ahead once summer time starts. These are example times, not fixed batches.' },
        { kind: 'p', mt: true, html: 'Hamburg\'s spring holiday comes early: the KMK table lists it from 1 to 12 March 2027, while Berlin and many other Länder have theirs from 22 March 2027. The Christmas break is 21 December 2026 to 1 January 2027, and summer runs from 1 July to 11 August 2027. Classes carry on through holidays unless you pause them, and many families use the March fortnight for a short project.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five steps from first block to real data',
    lede: 'Our own scale. We use it to place each child and to report progress to parents.',
    table: { caption: 'Our five coding steps for ages 6 to 12', head: ['Step', 'Usual age', 'By then the child can'], rows: [
      ['1. Order', '6 to 7', 'Put steps in the right order and make a sprite move'],
      ['2. Repeat and react', '7 to 9', 'Use loops and events, and respond to keys and clicks'],
      ['3. Store and compare', '8 to 10', 'Keep a score, compare two values and test a condition'],
      ['4. Type real code', '9 to 11', 'Type short Python programs that loop, decide and keep lists'],
      ['5. Search real data', '10 to 12', 'Read a file, search its text fairly and check the answer by hand']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the playground project. A child who learns to check a search by hand will question a surprising number, which is a habit worth more than any one language.',
      'You hear what your child can now build and explain, not how long they sat at a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If a computer says only 18, read some of the list yourself. Does it look like only 18?',
      'A computer sees R and r as two different letters. You have to tell it they are the same.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Hamburg children',
    lede: 'Live, in English, with a mentor who stays the same; choose a group or private lessons.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 5 to 14', courses: [
        { code: 'CKH / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles and step-by-step plans, ideal before the Biber.' },
        { code: 'CKH / THINK / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is and how it learns, with no grown-up chatbot accounts.' },
        { code: 'CKH / THINK / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense that makes coding logic easier.' }
      ] },
      { num: 'II', h3: 'Blocks and games', sub: 'Ages 6 to 14', courses: [
        { code: 'CKH / PLAY / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A three-month start with real games at the end.' },
        { code: 'CKH / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks to code in a world children already know.' },
        { code: 'CKH / PLAY / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripting real games in Luau.' }
      ] },
      { num: 'III', h3: 'Building and showing', sub: 'Ages 8 to 12', courses: [
        { code: 'CKH / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Working phone apps, snapped together from blocks.' },
        { code: 'CKH / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'Their own web page, coded line by line.' },
        { code: 'CKH / MAKE / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'A twelve-week build toward a project to present.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of classes looks like for a Hamburg family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live classes a week of an hour each, always with the same mentor, never a recording.',
    slots: [
      { time: 'Afternoons', l: 'Hamburg weekdays, from about 16:00.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings, calm for younger children.' },
      { time: '1-on-1', l: 'A time agreed with the mentor around school and clubs.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'Someone who knows how your child thinks.' },
      { h3: 'Plain English', p: 'Short sentences, shown on screen.' },
      { h3: 'Hands on', p: 'Your child drives the mouse and keyboard.' },
      { h3: 'Age groups', p: 'Six year olds learn with six year olds.' },
      { h3: 'Parent notes', p: 'What was built and what comes next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty children, or one.' }
    ]
  },

  projectsH2: 'What our older students build',
  projectsLede: 'Start at seven, and a few years later you can make things other people use. Here are some projects by our older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews from parents and students, as written.',

  fees: {
    h2: 'Fees for Hamburg families',
    lede: 'One monthly fee pays for eight live classes. We display it in euro using the European Central Bank reference rate, but the payment runs in US dollars and your bank converts it, which is why the statement may show a slightly different euro amount.',
    free: ['A free first class', 'A short puzzle and a first program', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two classes a week', 'Monthly, stop whenever you like'],
    one: ['Your child and one mentor', 'Your child\'s own pace and ideas', 'Times around your family week']
  },

  faq: {
    eyebrow: 'Hamburg parents ask',
    h2: 'Coding classes for kids in Hamburg: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and taught only in English. Mentors keep their English simple and unhurried and tune it to your child\'s pace and accent, so a child still learning the language keeps up. Scratch blocks and Python keywords look the same whatever language the lesson is in.' },
      { q: 'Is Informatik compulsory in Hamburg schools?', a: 'Yes, from grade 7. The Informatik-Monitor 2026/27 says that since 2025/26 four weekly hours of Informatik are compulsory at Stadtteilschulen and Gymnasien, spread across grades 7 to 10 as each school decides. Grundschule, grades 1 to 4, has no Informatik subject.' },
      { q: 'What age can my child start?', a: 'From 6. Young children begin with Scratch, where blocks snap together and almost nothing has to be typed. From about 9 they can move on to typed Python in our Python and AI for Kids course.' },
      { q: 'Will this help my child with school Informatik later?', a: 'It gives them a head start. Children who have coded for a few years reach grade 7 already used to breaking a problem into steps and finding mistakes. We teach alongside school and never replace it; the school\'s Informatik course is the one that counts.' },
      { q: 'When are classes in Hamburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class at 16:05 in Hamburg is 20:35 for the mentor in India during winter.' },
      { q: 'What is the Informatik-Biber, and when is it?', a: 'It is a free online puzzle quiz from Bundesweite Informatikwettbewerbe for grades 3 to 13. The 2026 round is open from 9 to 20 November; entry goes through the school, so the class teacher is the person to ask. The practice round opened on 14 September 2026.' },
      { q: 'Where are the teachers?', a: 'In India, teaching live over video. Hamburg afternoons fall in their evening, which is why the times work, and your child stays with one mentor from week to week.' },
      { q: 'How big are the groups?', a: 'A group has fifteen to twenty children close in age. For a mentor to themselves, choose one to one: two private lessons each week at times agreed with you.' },
      { q: 'How much is it, and in what currency do we pay?', a: 'We charge monthly. The euro figure on this page uses the European Central Bank reference rate; the card payment itself is in US dollars, converted by your bank, so your statement may show a slightly different sum. Your first class costs nothing and needs no card.' },
      { q: 'Do you have classes during the Hamburg school holidays?', a: 'Yes, unless you pause. Hamburg\'s spring holiday from 1 to 12 March 2027 is a popular time for a short project, and many families take a break for part of the summer holiday from 1 July 2027.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Hamburg families thinking about coding.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for families in Germany.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids, Germany', p: 'The national picture for ages 6 to 12.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Our own Biber-style puzzles in English.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes', p: 'Where most young children begin.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages from each tool\'s own terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child solves a small puzzle and builds a first program. Watching that, the mentor can tell how your child reasons and how easy English feels, and then recommends a course and a format.',
    readFirst: 'If you want to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live class, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Every lesson is live, online and in English, with a mentor in India. For questions, WhatsApp is quickest, in English.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids, Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'R and r are different letters to a computer'
  },

  personalityCss: `
.ag-root.ag-ckh .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ckh .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-ckh .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ckh .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ckh .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hamburg page and national comparison); Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; KMK holidays 2026/27 and summer rules; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: BUKEA via Transparenzportal Hamburg, Spielplätze Hamburg, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The playground search: an original Python project on the Transparenzportal list of 100 popular Hamburg playgrounds in which an exact search finds 18 slides and 2 swings, and a lower-case search finds 39 and 16, because German compounds such as Turmrutsche and Tarzanschaukel hide the word with a small letter; plus an and-search (7 with slide and water play) and screen-free and Scratch versions. Lesson family: text search and letter case.',
    requiredMentions: ['spielplaetze_hamburg.json', 'Rutsche 18', 'Rutsche 39', 'Schaukel 16', 'Slide and water: 7 of 100', 'four compulsory hours', '1 to 12 March 2027', 'R and r are different letters to a computer'],
    sources: [
      { claim: 'Hamburg Informatik: four compulsory hours in grades 7 to 10 since 2025/26; grades 5 and 6; Grundschule 1 to 4.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hamburg' },
      { claim: 'Hamburg among four Länder meeting the four-hour recommendation.', url: 'https://informatik-monitor.de/' },
      { claim: 'Informatik-Biber 2026 facts and dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Hamburg holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Hamburg playground data and licence.', url: 'https://ckan.govdata.de/dataset/spielplatze-hamburg' }
    ],
    rejectedClaims: [
      'That the list counts every playground in Hamburg: it is a selection, and the page says so.',
      'Using the dataset\'s photos: they are outside the free licence, so none are used.',
      'Naming Hamburg schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with BWINF, the Hamburg authorities or a school: none.'
    ]
  }
};
