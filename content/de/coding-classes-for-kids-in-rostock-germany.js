'use strict';
// Coding classes for kids in Rostock (ag- city page, Germany cluster P6 row DE163, tier-2 shape coding-classes-for-kids =
// ages 6 to 12). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: records. Children love "the hottest ever", and a record is the simplest algorithm there is: keep the biggest so far.
// The Warnemünde weather station shows that how many records you find depends on the year you start counting. Around it:
// Mecklenburg-Vorpommern teaches Informatik from grade 5 at every school type, so the primary years are the open space.
// Sources (copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-in-rostock-germany/):
//  - KMK Primarbereich (kmk-primar): Grundschule grades 1 to 4 outside Berlin and Brandenburg (fact 1).
//  - GI Informatik-Monitor 2026/27, MV page (infmon-mecklenburg-vorpommern): "Das Fach Informatik und Medienbildung wird
//    schulartübergreifend in den Jahrgangsstufen 5 bis 10 im Umfang von mindestens je einer Wochenstunde unterrichtet.";
//    Qualifikationsphase GK three hours, LK five hours; central written tasks by an Aufgabenkommission. National page: MV among
//    three Länder meeting six compulsory hours (fact 90); "Vorreiter sind Sachsen und Mecklenburg-Vorpommern: Hier belegt etwa
//    die Hälfte der Lernenden das Fach Informatik." (fact 98).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025): "Mecklenburg-Vorpommern 15.10. - 24.10. 21.12. - 02.01. 08.02. - 19.02. 24.03. -
//    02.04. 07.05. 14.05. - 18.05. 05.07. - 14.08." (raw kmk-fer2627 text, two lines).
//  - BWINF: Informatik-Biber 2026 runs 9 to 20 November 2026; free, grades 3 to 13 (facts 130, 133).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Rostock 205,307; Mecklenburg-Vorpommern 1,573,597; Schwerin 98,308
//    (Land capital, from the Land row).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 04271 Rostock-Warnemünde, 4.78 m,
//    54.1803 N, 12.0808 E (Metadaten_Geographie), file tageswerte_KL_04271_19470101_20251231_hist.zip downloaded
//    3 November 2026, licence CC BY 4.0 (opendata.dwd.de Terms_of_use.txt). Column TXK, daily maximum air temperature,
//    complete for 1947 to 2025 (no -999 in that column, our check). Our extract warnemuende_max.csv: 28,855 days, 479,736
//    bytes, sha256 9b2f9762...e64680dad4. The city portal opendata-hro.de and its file host geo.sv.rostock.de timed out on
//    3 November 2026, so the DWD station inside the city is used; no other page uses station 04271.
// Our own calculations (scratchpad de/w/T3/rostock/run/v1.py, v12.py, extra.py, python3 -I, Python 3.14.8):
//  v1: "Years: 79"; "Hottest day of all: 2022-07-20 38.4 C"; "Hottest day of 1947: 1947-06-29 35.0 C".
//  v2: "Times the record was broken: 3"; "[('1947', 35.0), ('1992', 36.9), ('2022', 38.4)]".
//  extra: start 1948 gives 1948 32.2, 1954 33.0, 1959 34.2, 1963 34.5, 1992 36.9, 2022 38.4 (six); start 1960 gives 1960 29.0,
//  1963 34.5, 1992 36.9, 2022 38.4 (four); 62 of 79 years have a day of 30 C or more; 1992's hottest day was 1992-08-09.
// Lesson family: a record is a running maximum, and the number of records you count depends on the year you start.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'hottest = {}',
  'with open("warnemuende_max.csv", encoding="utf-8") as f:',
  '    for line in csv.DictReader(f):',
  '        year = line["datum"][:4]',
  '        t = float(line["tmax"])',
  '        if year not in hottest or t > hottest[year][0]:',
  '            hottest[year] = (t, line["datum"])',
  '',
  'top = max(hottest, key=lambda y: hottest[y][0])',
  'print("Years:", len(hottest))',
  'print("Hottest day of all:", hottest[top][1], hottest[top][0], "C")',
  'print("Hottest day of 1947:", hottest["1947"][1], hottest["1947"][0], "C")'
].join('\n');

const V2 = [
  'record = None',
  'broken = []',
  'for year in sorted(hottest):',
  '    t = hottest[year][0]',
  '    if record is None or t > record:',
  '        record = t',
  '        broken.append((year, t))',
  'print("Times the record was broken:", len(broken))',
  'print(broken)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Rostock: coding for kids' },
  slug: 'coding-classes-for-kids-in-rostock-germany',
  code: 'cro',
  accent: '#2A7077',
  accentRationale: 'Coding for kids in Rostock: a Baltic sea-green #2A7077, the colour of the water at the Warnemünde lighthouse where the project\'s weather station stands; contrast 4.63 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-mecklenburg-vorpommern', name: 'Mecklenburg-Vorpommern' }],
  routeLabel: 'Coding classes for kids in Rostock',
  title: 'Coding Classes for Kids in Rostock: Live and in English',
  description: 'Coding classes for kids in Rostock aged 6 to 12, live online in English: Informatik in Mecklenburg-Vorpommern from grade 5 and a Warnemünde weather records project.',
  ogDescription: 'Live online coding for Rostock children aged 6 to 12, in English at the child\'s pace: what MV schools teach and from when, 2026/27 holidays, and an original project on 79 years of hottest days at Warnemünde.',
  twitterDescription: 'Coding for Rostock children, live in English, with a Warnemünde hottest-day records project.',
  pageName: 'Coding Classes for Kids in Rostock',
  webPageDescription: 'A guide for Rostock parents of children aged 6 to 12 to live coding classes in English, built from the KMK, the GI Informatik-Monitor and Destatis, with an original records project on Deutscher Wetterdienst data from Rostock-Warnemünde.',
  courseDescription: 'Live online coding classes in English for Rostock children aged 6 to 12: puzzles and Scratch for the youngest, typed Python from about 9, in a group of fifteen to twenty or one to one, with the same mentor every week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Mecklenburg-Vorpommern', href: '/coding-classes-in-mecklenburg-vorpommern' }],
  crumbLabel: 'Kids in Rostock',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#records', label: 'Records' },
    { href: '#school', label: 'School' },
    { href: '#english', label: 'English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Rostock &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Rostock',
  lede: 'Ask a Rostock child what the hottest day at the beach in Warnemünde has ever been and you will get a guess, a story and probably a dare. Ask a computer and you get an exact answer from 79 years of weather records, plus a surprise about how records work. That is the kind of question our live coding classes in English start from. Mecklenburg-Vorpommern gives every pupil Informatik from grade 5; we help children aged 6 to 12 get there curious, confident and already building things.',
  secondaryCta: { href: '#records', label: 'See the records project' },
  wa: 'Hello Modern Age Coders, my child lives in Rostock and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live lessons since 2020 &middot; 10,000+ students around the world &middot; a regular mentor, in English',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['Tools', 'Puzzles, Scratch, then Python'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['When', 'After school, weekend mornings'],
    ['Mentors', 'Teaching from India, in English'],
    ['Try', 'A free first class']
  ],
  capsuleQ: 'Short version',
  capsule: 'Coding classes for kids in Rostock with Modern Age Coders are live online lessons, in English, for children from 6 to 12. The youngest solve puzzles and build Scratch games; from around 9 children write Python and answer real questions with real data. Each child has one regular mentor who matches their pace and accent, either in a batch of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Which first course suits a Rostock child?',
    lede: 'A thinking course for the youngest, a short Scratch course for a quick win, and Python for children ready to type.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'CRO / 01', title: 'Reasoning for Young Thinkers', note: 'Ages 6 to 9, six months, in two age bands. Patterns, sorting and step-by-step puzzles, the habits a child needs before any code.' },
      { course: 'scratch-programming-complete-course', code: 'CRO / 02', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12, three to four months. From a first moving sprite to finished games, a short and clear test of whether coding clicks.' },
      { course: 'python-ai-kids-masterclass', code: 'CRO / 03', title: 'Python and AI for Kids', note: 'For nine to twelve year olds over eight to ten months. Typed Python with drawings and games, then real data such as the Warnemünde records below.' }
    ]
  },

  sections: [
    {
      id: 'records',
      tint: 'tint',
      eyebrow: 'A real Rostock project',
      h2: 'What is the hottest day ever measured in Warnemünde?',
      lede: 'A record is the easiest program in the world to describe: remember the biggest number so far. It still has a trick in it.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Deutscher Wetterdienst runs a weather station called Rostock-Warnemünde, less than five metres above sea level, and publishes its daily readings as open data that anyone may reuse if they name the source (licence CC BY 4.0). We downloaded the file on 3 November 2026.',
            'For children we kept one number per day: the highest temperature reached that day, from 1 January 1947 to 31 December 2025. That makes a file called warnemuende_max.csv with 28,855 rows and, as our check found, no missing days in that column.'
          ],
          rightH3: 'Two questions',
          right: [
            'First: what was the hottest day of all, and how hot was the hottest day of the very first year?',
            'Second, and harder: how many times was the record broken? Every year, the program asks whether that year\'s hottest day beat the record so far. If it did, it is a new record.'
          ] },
        { kind: 'code', label: 'Version 1: the hottest day of every year', lang: 'Python', code: V1, note: 'It prints: <code>Years: 79</code>, <code>Hottest day of all: 2022-07-20 38.4 C</code> and <code>Hottest day of 1947: 1947-06-29 35.0 C</code>.' },
        { kind: 'p', mt: true, html: 'The hottest day in the file is 20 July 2022, at 38.4 degrees. And 1947, the very first year, already had 35.0 on 29 June. Now the record count. The program walks through the years in order, keeps the record in one variable called record, and writes down each year that beats it.' },
        { kind: 'code', label: 'Version 2: put this under Version 1 to count records', lang: 'Python', code: V2, note: 'It prints: <code>Times the record was broken: 3</code> and <code>[(\'1947\', 35.0), (\'1992\', 36.9), (\'2022\', 38.4)]</code>.' },
        { kind: 'p', mt: true, html: 'Only three records in 79 years, and one of them is 1947, which "breaks" the record simply by being first: there was nothing before it to beat. The next record took until 9 August 1992, at 36.9, and the one after that until 2022.' },
        { kind: 'p', html: 'Here is the surprise children enjoy most. Change the starting year and the number of records changes, even though not one temperature changes. Start counting in 1948, and 1947\'s hot summer is out of the picture, so 1948, 1954, 1959, 1963, 1992 and 2022 all become records: six instead of three. Start in 1960 and you get four. A record always means "the biggest since we started counting", and the start is a choice somebody made.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'How many record hottest years Warnemünde has, depending on when you start counting (our calculation)', head: ['Start counting in', 'Records found', 'Record years'], rows: [
          ['1947', '3', '1947, 1992, 2022'],
          ['1948', '6', '1948, 1954, 1959, 1963, 1992, 2022'],
          ['1960', '4', '1960, 1963, 1992, 2022']
        ] },
        { kind: 'source', html: 'Source of the temperatures: DWD Climate Data Center, station 04271 Rostock-Warnemünde, daily maximum air temperature (TXK) for 1947 to 2025, CC BY 4.0, file fetched on 3 November 2026. The code, the counts and the table were made by us. In 62 of the 79 years the hottest day reached at least 30 degrees. The DWD has no part in our classes.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Youngest, with paper.</strong> Roll a dice ten times and write the numbers in a row. Circle every number that is bigger than all the ones before it. How many circles? Roll again: is it the same?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a variable called record that starts at 0. Ask for numbers one at a time, and make the cat cheer when a new record is set.',
          '<strong>Ages 10 to 12, Python.</strong> Change Version 2 so it skips years before 1948, and check that you get six records.',
          '<strong>Going further.</strong> Find the coldest day of each year instead and count record lows. Which start year gives the most records now, and why?'
        ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Rostock schools',
      h2: 'When do Rostock children start Informatik at school?',
      lede: 'In grade 5. Mecklenburg-Vorpommern teaches Informatik und Medienbildung at every school type from then on.',
      body: [
        { kind: 'p', html: 'The KMK describes Grundschule outside Berlin and Brandenburg as grades 1 to 4, so a Rostock child is in Grundschule from about 6 to about 10. In grade 5 things change. The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that Mecklenburg-Vorpommern teaches the subject Informatik und Medienbildung at all school types in grades 5 to 10, at least one weekly hour in each of those years.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik for a Rostock pupil, by grade (2026/27)', head: ['Grade', 'Typical age', 'At school'], rows: [
          ['1 to 4', '6 to 10', 'Grundschule, no Informatik subject'],
          ['5 to 10', '10 to 16', 'Informatik und Medienbildung, at least one weekly hour each year'],
          ['11 and 12', '16 to 18', 'Grundkurs three hours or Leistungskurs five hours, if chosen']
        ] },
        { kind: 'source', html: 'Compiled from KMK information on Grundschule and from the GI Informatik-Monitor 2026/27 (Mecklenburg-Vorpommern and Germany-wide), checked on 2 November 2026. The ages are typical ones.' },
        { kind: 'p', mt: true, html: 'Measured by the GI, the Land is in a group of three that already reach six compulsory Informatik hours, the medium-term target, and it reports that about half of the Land\'s Oberstufe pupils take the subject. Few Länder take computing this seriously. For a parent, the practical point is simple: the school will teach the subject from grade 5, and children who arrive having already built games and asked questions of real data usually enjoy it more and find it easier. We teach beside school, never instead of it.' },
        { kind: 'p', html: 'Our <a class="ag-inline-link" href="/coding-classes-in-mecklenburg-vorpommern">Mecklenburg-Vorpommern page</a> covers the Land in more depth, including the Abitur.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Can a Rostock child follow a coding class in English?',
      lede: 'Yes, and most families are surprised how quickly. Here is why.',
      body: [
        { kind: 'three', cells: [
          { h3: 'We say it first', p: 'Our lessons are live and in English only; we have no German-speaking teachers. We would rather a family knows this before the free class than finds out during it.' },
          { h3: 'Children copy, then speak', p: 'A young child hears "move ten steps" while watching a sprite move ten steps. After a few lessons the words stick, because each one is tied to something that happened on the screen.' },
          { h3: 'The mentor adapts', p: 'Mentors speak slowly, use short sentences, and learn each child\'s accent. A child who answers in a mix of English and German is understood, and hears the English word back without any fuss.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors are based in India and teach over live video, which is why afternoon times work well for Rostock. Your child is not passed from teacher to teacher; one mentor stays, and soon knows whether your child prefers to be challenged straight away or to warm up with something familiar.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'What does a Rostock child build at each age?',
      lede: 'A rough guide from our classes. Where your child actually starts is decided together after the trial hour.',
      body: [
        { kind: 'table', numCols: [], caption: 'Typical projects by age in our classes (ours)', head: ['Age', 'Typical project', 'What it teaches'], rows: [
          ['6', 'A puzzle path for a robot drawn on paper', 'Instructions in order'],
          ['7', 'A Scratch fish that swims when you press a key', 'Events'],
          ['8', 'A Scratch game with a score', 'Variables'],
          ['9', 'A Python turtle drawing a lighthouse', 'Loops and turning'],
          ['10', 'A quiz that keeps the high score', 'A running record, like the project'],
          ['11 to 12', 'The Warnemünde records project', 'Reading a file and questioning the result']
        ] },
        { kind: 'source', html: 'Our own outline. Children who start later move quickly through the early rows.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'At what times can Rostock children take classes?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Rostock times with the mentor\'s local time', head: ['Rostock', 'India, until 28 March 2027', 'India, after 28 March 2027'], rows: [
          ['14:50', '19:20', '18:20'],
          ['16:20', '20:50', '19:50'],
          ['Saturday 09:15', '13:45', '12:45'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Germany uses MEZ (UTC+1) in the winter half of the year and MESZ (UTC+2) in the summer half, under the Einheitenzeitgesetz; the 2026 change back was on 25 October and the 2027 change forward is on 28 March. India does not change its clocks (UTC+5:30): add 4 h 30 to a Rostock time now, and 3 h 30 from late March. Times are examples.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Mecklenburg-Vorpommern school holidays, 2026/27', head: ['Holidays', 'Dates'], rows: [
          ['Herbstferien', '15 October to 24 October 2026'],
          ['Weihnachtsferien', '21 December 2026 to 2 January 2027'],
          ['Winterferien', '8 February to 19 February 2027'],
          ['Osterferien', '24 March to 2 April 2027'],
          ['Ascension and Whitsun', '7 May, and 14 May to 18 May 2027'],
          ['Sommerferien', '5 July to 14 August 2027']
        ] },
        { kind: 'source', html: 'Dates as listed for Mecklenburg-Vorpommern in the KMK school holiday overview 2026/2027, dated 9 October 2025.' },
        { kind: 'p', mt: true, html: 'Classes continue through school holidays unless you pause. Rostock is the largest city in Mecklenburg-Vorpommern, home to 205,307 people on the Destatis count for 31 December 2024, while the Land capital Schwerin has 98,308, in a Land of 1,573,597. Children from Warnemünde, Bad Doberan or Güstrow join the same online groups and share Rostock\'s holiday dates.' },
        { kind: 'p', html: 'One more date for this month: the Informatik-Biber, a free puzzle contest for grades 3 to 13 that needs no coding, takes place from 9 to 20 November 2026. Pupils enter through their school, so it is worth asking the class teacher.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What milestones will my child reach?',
    lede: 'Our milestones, each one something your child can show you on screen.',
    table: { caption: 'Our five milestones between 6 and 12', head: ['Milestone', 'On screen, your child'], rows: [
      ['Sequencer', 'Give a sprite five instructions in the right order'],
      ['Looper', 'Repeat a set of steps without copying them'],
      ['Scorekeeper', 'Keep a score and a high score in a game'],
      ['Typist', 'Write a short Python program and fix its first error'],
      ['Record hunter', 'Find a record in a real file and explain what "since" means']
    ] },
    left: { h3: 'For parents', ps: [
      'The record hunter milestone matters beyond coding: a child who asks "since when?" about a record has learned to read headlines more carefully.',
      'You get a short note every few classes about what was built.'
    ] },
    right: { h3: 'For children', ps: [
      'The first try always wins. That does not make it a great record.',
      'When you change where you start, check whether the answer changes too.'
    ] }
  },

  catalogue: {
    eyebrow: 'More choices',
    h2: 'Nine more courses for Rostock children',
    lede: 'Each is taught live in English with a regular mentor, in a batch or alone.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 5 to 12', courses: [
        { code: 'CRO / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A long course from Scratch to apps, 6 to 12.' },
        { code: 'CRO / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and planning puzzles, 7 to 12.' },
        { code: 'CRO / BASE / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense rather than tricks, 5 to 10.' }
      ] },
      { num: 'II', h3: 'Game worlds', sub: 'Ages 7 to 14', courses: [
        { code: 'CRO / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that changes a Minecraft world, 7 to 12.' },
        { code: 'CRO / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Lua scripting inside Roblox Studio, 8 to 14.' },
        { code: 'CRO / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Several game tools in one course, 8 to 12.' }
      ] },
      { num: 'III', h3: 'Bigger challenges', sub: 'Ages 8 to 19', courses: [
        { code: 'CRO / MORE / 01', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'Twelve weeks of preparation and an event, 8 to 12.' },
        { code: 'CRO / MORE / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'What a machine learns and where it fails, 8 to 14.' },
        { code: 'CRO / MORE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics contests', blurb: 'Preparation for the German school contests, 9 to 19.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Inside a class',
    h2: 'How does an hour of live coding feel for a young child?',
    lede: 'Two live hours a week, each split into short pieces: a warm-up puzzle, a new idea, building, and showing. The child does the building.',
    slots: [
      { time: 'Afternoons', l: 'From about ten to three in Rostock, after school.' },
      { time: 'Weekend mornings', l: 'Saturday and Sunday, popular with younger children.' },
      { time: 'One to one', l: 'Fitted around your family\'s week with the mentor.' }
    ],
    cells: [
      { h3: 'Same face', p: 'One mentor, week after week.' },
      { h3: 'Short steps', p: 'New ideas in small pieces.' },
      { h3: 'Child at the controls', p: 'Mouse and keyboard stay with your child.' },
      { h3: 'Age bands', p: 'Children learn with others their age.' },
      { h3: 'Notes home', p: 'What was made and what is next.' },
      { h3: 'Two formats', p: 'A batch of children or a private class.' }
    ]
  },

  projectsH2: 'Where young coders end up',
  projectsLede: 'Projects from some of our older students, to show where a first Scratch game can lead. There are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families and students, unchanged.',

  fees: {
    h2: 'What do coding classes cost for a Rostock child?',
    lede: 'There is a monthly fee for eight live classes. We list it in euro, using the European Central Bank reference rate, and take the payment in US dollars; your bank handles the conversion, so the euro amount it books can be marginally different.',
    free: ['A free first class', 'A puzzle and a small first project', 'No card needed to book'],
    group: ['A batch of fifteen to twenty children', 'One regular mentor', 'Two classes each week', 'Monthly, pause or stop any month'],
    one: ['Your child and a mentor of their own', 'Projects chosen around your child', 'Times your family decides']
  },

  faq: {
    eyebrow: 'Rostock parents ask',
    h2: 'Coding classes for kids in Rostock: parents\' questions',
    items: [
      { q: 'Are the classes taught in German?', a: 'No. We only teach in English. The mentor in India keeps sentences short, says important words twice and quickly tunes in to how your child talks; because every step also happens on the screen, children with little English still manage.' },
      { q: 'How young can my child start?', a: 'At 6. The youngest start with puzzles and Scratch, where blocks are dragged rather than typed. Children usually move to Python at about 9, once reading and typing are comfortable.' },
      { q: 'When does Informatik start at school in Rostock?', a: 'In grade 5. The Gesellschaft für Informatik reports that Mecklenburg-Vorpommern teaches Informatik und Medienbildung at every school type in grades 5 to 10, at least one weekly hour each year. Grundschule, grades 1 to 4, has no Informatik subject.' },
      { q: 'Why learn coding before grade 5?', a: 'Because the school subject only starts in grade 5, and four years is a long wait for a curious child. Children who have already built a few games arrive in grade 5 with something to show and questions to ask, rather than starting from nothing.' },
      { q: 'When are classes in Rostock time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Rostock families usually pick mid-afternoon or a weekend morning.' },
      { q: 'What is the Warnemünde records project?', a: 'An original lesson we wrote using Deutscher Wetterdienst records from the Rostock-Warnemünde station. Children find the hottest day of each year since 1947, count how often the record was broken, and see that the count changes with the starting year.' },
      { q: 'Does my child need a computer?', a: 'Yes, a laptop or desktop with a keyboard and a headset works well. Very young children can start on a tablet for Scratch, but Python needs a keyboard.' },
      { q: 'Where are the teachers?', a: 'They are in India and join by live video. A 16:20 class in Rostock is at 20:50 on the mentor\'s clock this winter. One mentor stays with your child for the whole course.' },
      { q: 'How many children are in each group?', a: 'Between fifteen and twenty, all roughly the same age. If you would rather your child learned alone, one-to-one means two weekly classes with only the mentor.' },
      { q: 'How do we pay?', a: 'Once a month. You see the price in euro, worked out with the reference rate of the European Central Bank; the actual charge is in US dollars and your bank turns it into euro, sometimes with a small difference. Booking the trial class needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'Further reading for families in Rostock and the rest of the Land.',
    items: [
      { href: '/coding-classes-in-mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern', p: 'School Informatik and the Abitur across the Land.' },
      { href: '/coding-classes-for-kids-germany', label: 'Kids\' coding in Germany', p: 'The national guide for parents.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'Typed code for 9 to 12 year olds.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Puzzles of our own in the Biber style.' },
      { href: '/game-coding-classes-for-kids-germany', label: 'Game coding for kids', p: 'For children who want to make games.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'How our live classes run.' }
    ]
  },

  start: {
    h2: 'Book your child\'s free first class',
    lede: 'Your child spends the free hour on a puzzle and a tiny project with a mentor. By the end, the mentor knows which course and age band will fit and how much help with English to plan for.',
    readFirst: 'For more first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Every lesson is live online and in English, with a mentor in India. Send us a WhatsApp message for the quickest answer, in English.',
    formNote: 'Free, and no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/game-coding-classes-for-kids-germany', label: 'Game coding' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-mecklenburg-vorpommern', label: 'Mecklenburg-Vorpommern' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A record means since when'
  },

  personalityCss: `
.ag-root.ag-cro .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-cro .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-cro .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-cro .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cro .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Mecklenburg-Vorpommern page and national overview); KMK Ferienregelung 2026/2027; BWINF Informatik-Biber 2026; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; Deutscher Wetterdienst CDC daily climate data station 04271, CC BY 4.0.',
    localProject: 'Warnemünde hottest-day records: an original Python project on DWD daily maximum temperatures at Rostock-Warnemünde, 1947 to 2025. The hottest day is 20 July 2022 (38.4 C); the record was broken 3 times counting from 1947 (1947, 1992, 2022), 6 times from 1948 and 4 times from 1960. Lesson family: a record is a running maximum that depends on where you start.',
    requiredMentions: ['warnemuende_max.csv', 'Hottest day of all: 2022-07-20 38.4 C', 'Times the record was broken: 3', '(\'1992\', 36.9)', 'Rostock-Warnemünde', 'Informatik und Medienbildung', '8 February to 19 February 2027', 'A record means since when'],
    sources: [
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'Informatik und Medienbildung grades 5 to 10 in MV; Oberstufe hours.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/mecklenburg-vorpommern' },
      { claim: 'MV meets six hours; about half of Oberstufe pupils take Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'MV school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily climate data, station 04271.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD open data licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Any statement about climate trends from three records: a record count alone proves nothing, so none is made.',
      'Weather warnings or heat advice: not given.',
      'Any connection with the DWD, the city of Rostock, BWINF or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
