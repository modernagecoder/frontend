'use strict';
// Coding classes for kids in Ingolstadt (ag- city page, Germany cluster P6 row DE181, tier-2 slug shape
// coding-classes-for-kids, ages 6 to 12).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: what a child can do at each age; a project on two city weather stations about a kilometre apart where "which is
// warmer?" has a different answer at night and at noon; then Bavarian school facts and contests for primary pupils.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/coding-classes-for-kids-in-ingolstadt-germany/):
//  - KMK primary page: Grundschule grades 1 to 4 (fact 1). KMK school-type overview: "Hauptschule Mittelschule (Bayern)"
//    (fact 18).
//  - GI Informatik-Monitor 2026/27, Bayern page: Mittelschule Informatik one weekly lesson in grades 5 to 10 (fact 69);
//    Gymnasium grades 6 and 7 one weekly lesson with an Informatik focus within Natur und Technik (70).
//  - KMK FER2026_27.pdf Bayern rows (Herbstferien 02.11. - 06.11., Weihnachten 24.12. - 08.01., 22.03. - 02.04.,
//    18.05. - 28.05., 02.08. - 13.09.).
//  - bwinf.de: Biber grades 3 to 13, free, no prior knowledge; primary pupils 9 tasks in 30 minutes; Biberwochen 9 to
//    20 November 2026 (facts 129, 130, 132, 133). mathe-wettbewerbe.de: Mathematik-Olympiade grades 3 to 13, about
//    200,000 a year (162); offered to grades 3 and 4 since 2005 (164); Regionalrunde 11 November 2026 (165).
//  - Destatis GV-ISys 31.12.2024: Ingolstadt 141,185; Bayern 13,248,928.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Ingolstadt (publisher_name), "Wetterstation Gewerbegebiet Stadt Ingolstadt" (INK_01.csv) and
//    "Wetterstation Landschaftsschutzgebiet Stadt Ingolstadt" (INK_02.csv), via open.bydata and GovData
//    https://ckan.govdata.de/dataset/wetterstation-gewerbegebiet-stadt-ingolstadt and
//    https://ckan.govdata.de/dataset/wetterstation-landschaftsschutzgebiet-stadt-ingolstadt, licence CC BY 4.0 on every
//    resource. Notes: stations set up in the study area "Gewerbegebiet Südost" in the EU project DS4LoReMa; coordinates
//    48.740231N 11.467381E and 48.74415N 11.48109E (about 1.1 km apart, our calculation). Downloaded 3 November 2026:
//    INK_01.csv 3,115,033 bytes sha256 cd0f11157caa...c8ef9e03f2d; INK_02.csv 3,476,290 bytes sha256
//    8ef1f510525c...a747d35fcf5d3c. Readings every 10 minutes, 10 August 2025 to 3 November 2026.
//    Field list (Felderbeschreibung): T = Lufttemperatur. Neither file has any reading with hour 00; the 12:xx rows sit
//    between 01:00 and 23:50 of the previous day in the file order, but their values are noon-like (15 July 2026:
//    12:00 25.5, 11:50 25.4, 13:00 26.6), so we read by timestamp, never by line position.
// Our own calculations (scratchpad de/w/T5/ingolstadt: v1.py, v2.py, python3 -I): "Moments measured at both stations:
// 62011", "Industrial estate warmer: 44263 times", "Average difference: 0.6 degrees", "03:00 average difference: 1.0",
// "12:00 average difference: -0.4", "21:00 average difference: 1.4". Ties 4,048, reserve warmer 13,700. By hour, average
// difference and moments the industrial station was warmer: 03:00 1.0 (2,521 of 2,700); 06:00 1.0 (2,513 of 2,700);
// 09:00 -0.2 (1,005 of 2,700); 12:00 -0.4 (713 of 2,700); 15:00 0.2 (1,474 of 2,700); 18:00 0.7 (2,117 of 2,688);
// 21:00 1.4 (2,486 of 2,688).
// Lesson family: a difference can change sign; split a comparison by time of day before you sum it up in one number.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def load(name):',
  '    with open(name, encoding="utf-8") as f:',
  '        return {row["time"]: float(row["temp"]) for row in csv.DictReader(f)}',
  '',
  'industrial = load("industrial.csv")',
  'reserve = load("reserve.csv")',
  'both = [t for t in industrial if t in reserve]',
  'print("Moments measured at both stations:", len(both))',
  '',
  'warmer = sum(1 for t in both if industrial[t] > reserve[t])',
  'print("Industrial estate warmer:", warmer, "times")',
  'gap = sum(industrial[t] - reserve[t] for t in both) / len(both)',
  'print("Average difference:", round(gap, 1), "degrees")'
].join('\n');

const V2 = [
  'by_hour = {}',
  'for t in both:',
  '    hour = int(t[11:13])',
  '    by_hour.setdefault(hour, []).append(industrial[t] - reserve[t])',
  '',
  'for hour in (3, 12, 21):',
  '    diffs = by_hour[hour]',
  '    print(f"{hour:02d}:00 average difference:", round(sum(diffs) / len(diffs), 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Ingolstadt: coding for kids' },
  slug: 'coding-classes-for-kids-in-ingolstadt-germany',
  code: 'ing',
  accent: '#3E3B59',
  accentRationale: 'Coding classes for kids, Ingolstadt: a dark night indigo #3E3B59 for the night hours in the project, when the industrial estate stays warmer; contrast 8.63 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-bavaria', name: 'Bavaria' }],
  routeLabel: 'Coding classes for kids in Ingolstadt',
  title: 'Coding Classes for Kids in Ingolstadt: Live in English',
  description: 'Coding classes for kids in Ingolstadt aged 6 to 12, live online in English: what each age can learn, Bavarian school facts, and two Ingolstadt weather stations.',
  ogDescription: 'Live coding lessons in English for Ingolstadt children of 6 to 12: what a child can do at 6, 9 and 12, a project on two city weather stations where the warmer one depends on the hour, and what Bavarian schools and contests offer primary pupils.',
  twitterDescription: 'Coding for Ingolstadt kids, live in English: two weather stations, night against noon, and Bavarian school facts.',
  pageName: 'Coding Classes for Kids in Ingolstadt',
  webPageDescription: 'A guide for Ingolstadt parents of children aged 6 to 12 to coding classes in English, with KMK and Gesellschaft für Informatik facts for Bavaria, contest dates for 2026, and an original project on the City of Ingolstadt\'s two open weather stations.',
  courseDescription: 'Live online coding classes in English for Ingolstadt children aged 6 to 12: Scratch and puzzles first, then typed Python and real data, with a regular mentor, either one to one or in an age-matched batch of fifteen to twenty.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Bavaria', href: '/coding-classes-in-bavaria' }],
  crumbLabel: 'Kids in Ingolstadt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#temps', label: 'Two stations' },
    { href: '#bavaria', label: 'Bavaria' },
    { href: '#english', label: 'English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Ingolstadt &middot; Coding for children &middot; 6 to 12',
  h1: 'Coding classes for kids in Ingolstadt',
  lede: 'Ingolstadt runs two small weather stations about a kilometre apart, one in an industrial estate and one in a protected landscape, and publishes every reading. Ask a ten year old which is warmer and you get a confident answer; ask the data and you get two answers, depending on the time of day. That project sits at the centre of this page, alongside what children of 6 to 12 can learn in our live English classes, what Bavarian schools teach and when, and two free contests open to primary pupils this November.',
  secondaryCta: { href: '#temps', label: 'See the weather project' },
  wa: 'Hello Modern Age Coders, our child lives in Ingolstadt and would like to learn coding in English. Could we try a free first class?',
  heroNote: 'Live classes for children since 2020 &middot; 10,000+ students worldwide &middot; the same mentor each week, in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Path', 'Puzzles and Scratch, then Python'],
    ['Group', 'Up to twenty children, or one to one'],
    ['Each week', 'Two live lessons of an hour'],
    ['Mentors', 'Teaching from India, in English'],
    ['To try', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for kids in Ingolstadt from Modern Age Coders are live online lessons in English for children aged 6 to 12. Children start with puzzles and Scratch games, move to typed Python around 9, and by 11 or 12 work with real Ingolstadt data. One regular mentor adapts to each child\'s pace and accent, one to one or in an age-matched batch of fifteen to twenty.',

  picks: {
    eyebrow: 'Three first courses',
    h2: 'Which first coding course fits an Ingolstadt child?',
    lede: 'Most families pick by how their child likes to learn: by playing, by puzzling or by typing.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'ING / 01', title: 'Scratch Coding for Kids', note: 'For the child who learns by playing: three to four months of block coding that ends in games of their own design.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'ING / 02', title: 'Problem Solving for Kids', note: 'For the puzzler: logic, patterns and step-by-step plans, the thinking behind both coding and contests like the Biber.' },
      { course: 'python-ai-kids-masterclass', code: 'ING / 03', title: 'Python and AI for Kids', note: 'For a confident reader of about nine or older who wants real typed code, games, drawings and data.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'Age by age',
      h2: 'What can a child learn about coding at 6, at 9 and at 12?',
      lede: 'More than most parents expect, provided each age gets the right tool. This is how we plan it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Coding at three ages (our plan)', head: ['Age', 'Tool', 'A typical project', 'The big idea'], rows: [
          ['6 to 7', 'Picture puzzles, then Scratch Junior style blocks', 'A character that walks, jumps and says hello', 'Steps happen in order'],
          ['8 to 9', 'Scratch', 'A catch-the-falling-apples game with a score', 'Repeat, and react to events'],
          ['9 to 10', 'Typed Python', 'A turtle that draws a star or a spiral', 'Loops and variables in real code'],
          ['11 to 12', 'Python with data files', 'Comparing two weather stations', 'Data can surprise you']
        ] },
        { kind: 'source', html: 'Our plan, not a school curriculum. Children move on when they are ready, not on a birthday; the mentor decides with you.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'At six: order', p: 'A six year old learns that a computer does exactly what it is told, in the order it is told. Getting a cat to cross the screen and stop at the right place is a real achievement, and a lesson in patience.' },
          { h3: 'At nine: rules', p: 'By nine, most children can handle if this, then that. A game that keeps score, gets faster and ends when you lose three lives already uses most of the ideas in a first programming course.' },
          { h3: 'At twelve: doubt', p: 'By eleven or twelve, children can read real data and, more importantly, question it. The weather project below is aimed at this age: the computer gives an answer, and the child finds out it is only half the story.' }
        ] }
      ]
    },
    {
      id: 'temps',
      tint: 'tint',
      eyebrow: 'A real Ingolstadt project',
      h2: 'Is the Ingolstadt industrial estate warmer than the countryside next to it?',
      lede: 'The City of Ingolstadt publishes readings from two weather stations every ten minutes, free to reuse. One stands in an industrial estate, one in a protected landscape, about a kilometre apart. Children love this question because everyone has a guess.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The two datasets are Wetterstation Gewerbegebiet Stadt Ingolstadt and Wetterstation Landschaftsschutzgebiet Stadt Ingolstadt, published by the City of Ingolstadt under the licence CC BY 4.0. Their description says they were set up in the study area Gewerbegebiet Südost as part of an EU project.',
            'We downloaded both on 3 November 2026. They run from 10 August 2025 to 3 November 2026, a reading every ten minutes, with the air temperature in a column called T. We save the time and temperature as industrial.csv and reserve.csv.'
          ],
          rightH3: 'The question',
          right: [
            'Which place is warmer? Many children guess the industrial estate, thinking of roofs, roads and machines. To test it fairly we must compare the two stations at exactly the same moments, so Version 1 keeps only the times that appear in both files.',
            'Then it counts how often the industrial estate was warmer and works out the average difference.'
          ] },
        { kind: 'code', label: 'Version 1: compare the same moments', lang: 'Python', code: V1, note: 'It prints <code>Moments measured at both stations: 62011</code>, <code>Industrial estate warmer: 44263 times</code> and <code>Average difference: 0.6 degrees</code>.' },
        { kind: 'p', mt: true, html: 'So the children were right: the industrial estate was warmer at 44,263 of the 62,011 shared moments, and on average 0.6 degrees warmer. Case closed? Not quite. A single average can hide a pattern, so Version 2 splits the same differences by the hour of the day and looks at three hours: the middle of the night, noon and the evening.' },
        { kind: 'code', label: 'Version 2: split the difference by hour', lang: 'Python', code: V2, note: 'It prints <code>03:00 average difference: 1.0</code>, <code>12:00 average difference: -0.4</code> and <code>21:00 average difference: 1.4</code>.' },
        { kind: 'p', mt: true, html: 'At three in the morning and nine in the evening the industrial estate is clearly warmer. At noon the minus sign means the opposite: the protected landscape is a little warmer. The average of 0.6 was true, but it mixed two different stories into one number. A good scientist, of any age, says "it depends on the time" and shows the table.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Industrial estate minus protected landscape, by hour (our calculation)', head: ['Hour in the file', 'Average difference, degrees', 'Times the industrial estate was warmer'], rows: [
          ['03:00', '1.0', '2,521 of 2,700'],
          ['06:00', '1.0', '2,513 of 2,700'],
          ['09:00', '-0.2', '1,005 of 2,700'],
          ['12:00', '-0.4', '713 of 2,700'],
          ['15:00', '0.2', '1,474 of 2,700'],
          ['18:00', '0.7', '2,117 of 2,688'],
          ['21:00', '1.4', '2,486 of 2,688']
        ] },
        { kind: 'source', html: 'Data: Stadt Ingolstadt, Wetterstation Gewerbegebiet and Wetterstation Landschaftsschutzgebiet, licence CC BY 4.0, downloaded 3 November 2026. Comparisons and averages are our own. Two oddities a careful coder spots: neither file has any reading from the hour after midnight, and the noon readings are stored in an unexpected place in the file. Because our program looks up each reading by its time, not its line, neither problem changes the answers. The data does not explain why the stations differ, so we do not either.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Put a thermometer, or your hand, on a sunny pavement and on grass at lunchtime, then again after dark if you can. Draw two faces: warm and cool.',
          '<strong>Ages 8 to 10, Scratch.</strong> Make two lists of five made-up temperatures, one for each place, and a sprite that says which list has the bigger total.',
          '<strong>Ages 10 to 12, Python.</strong> Run both versions, then change Version 2 to print every hour from 1 to 23. Find the hour when the sign first flips.',
          '<strong>Going further.</strong> Look at only the summer months. Does the noon difference grow or shrink? Guess first, then check.'
        ] }
      ]
    },
    {
      id: 'bavaria',
      eyebrow: 'Ingolstadt schools',
      h2: 'When does a child in Ingolstadt first meet Informatik at school?',
      lede: 'Not in Grundschule. In Bavaria the first computing lessons come in grade 5 or 6, depending on the school type.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 1 to 4',
          left: [
            'Grundschule runs from grade 1 to grade 4, and there is no Informatik subject in it. Those are the years from about 6 to about 10, when children are curious about how games and tablets work and school has no slot for that question.',
            'Ingolstadt children then move to a Mittelschule, a Realschule or a Gymnasium. The Mittelschule is Bavaria\'s name for the Hauptschule track.'
          ],
          rightH3: 'Grades 5 to 7',
          right: [
            'The Gesellschaft für Informatik reports that Bavarian Mittelschulen teach compulsory Informatik for one lesson a week in every grade from 5 to 10. At the Gymnasium, the subject Natur und Technik gives one weekly lesson an Informatik focus in grades 6 and 7.',
            'A child who has coded since 7 or 8 starts those lessons already used to trying, failing and trying again.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A Bavarian child\'s first computing lessons', head: ['School', 'Grades', 'Computing'], rows: [
          ['Grundschule', '1 to 4', 'No Informatik subject'],
          ['Mittelschule', '5 to 10', 'Informatik, one lesson a week, compulsory'],
          ['Gymnasium', '6 and 7', 'One lesson a week with an Informatik focus in Natur und Technik']
        ] },
        { kind: 'source', html: 'Sources: KMK, Primarbereich and school-type overview; Gesellschaft für Informatik, Informatik-Monitor 2026/27, page for Bayern; read on 2 November 2026. Population: Destatis, 31 December 2024: Ingolstadt 141,185, Bayern 13,248,928. Families from nearby Manching, Gaimersheim, Neuburg an der Donau and Eichstätt follow the same Bavarian rules.' },
        { kind: 'two', mt: true,
          leftH3: 'Informatik-Biber, 9 to 20 November 2026',
          left: [
            'A free online puzzle contest from Bundesweite Informatikwettbewerbe, open from grade 3, needing no coding knowledge. Primary pupils get nine tasks in 30 minutes. Schools sign up whole classes, so a short question to the class teacher tells you whether your child can take part.'
          ],
          rightH3: 'Mathematik-Olympiade, 11 November 2026',
          right: [
            'The Mathematik-Olympiade is open to grades 3 to 13 and has been offered to grades 3 and 4 since 2005; about 200,000 pupils take part each year. The 66th Olympiad\'s regional round is on 11 November 2026, after the school round.'
          ] },
        { kind: 'p', mt: true, html: 'We have no connection to either organiser and we never use their tasks. Our mentors write their own puzzles in a similar spirit. We teach alongside school; your child\'s teachers stay in charge of grades.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'How do classes in English work for an Ingolstadt child?',
      lede: 'All our lessons are in English, live, with a mentor who adjusts to the child. We do not teach in German.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Little English needed', p: 'Coding at this age is mostly shown, not told. A six year old who knows "go", "stop", "left" and "again" can follow the first lesson, and picks up the rest by doing.' },
          { h3: 'Pace and accent', p: 'The mentor slows down for younger children, rephrases when a face looks puzzled, and soon understands the child\'s own way of speaking, German words included.' },
          { h3: 'One person, every week', p: 'Children do better with someone they know. The same mentor teaches your child each week and notices when they are tired, bored or ready for something harder.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors are in India and teach over a live video link. For Ingolstadt families that means classes in the afternoon after school or on weekend mornings, which are Indian evenings and afternoons. Parents get a short note after classes on what was built and what comes next.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Ingolstadt?',
      lede: 'Afternoons and weekend mornings, chosen when you book. The table shows a few examples against the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Ingolstadt slots and the time in India', head: ['Ingolstadt', 'India this winter', 'India in summer 2027'], rows: [
          ['Friday 15:45', '20:15', '19:15'],
          ['Saturday 13:30', '18:00', '17:00'],
          ['Sunday 10:45', '15:15', '14:15']
        ] },
        { kind: 'source', html: 'German time, set by the Einheitenzeitgesetz, is UTC+1 in winter (MEZ) and UTC+2 in summer (MESZ). The switch back happened on 25 October 2026; the next switch forward is 28 March 2027. India stays on UTC+5:30, so its clocks are four and a half hours ahead of Ingolstadt in winter and three and a half in summer. Example slots only.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Bavarian school holidays in 2026/27 (KMK table)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '2 to 6 November 2026, this week'],
          ['Weihnachtsferien', '24 December 2026 to 8 January 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Pfingstferien', '18 to 28 May 2027'],
          ['Sommerferien', '2 August to 13 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027 (Stand 9 October 2025), Bayern. Classes keep running in the holidays; families who travel simply pause.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How do we track a child\'s progress?',
    lede: 'Five stages of our own, used to choose the right group and to show parents what has changed.',
    table: { caption: 'Five stages from 6 to 12 (our scale)', head: ['Stage', 'Age, roughly', 'The child can'], rows: [
      ['1. Steps', '6 to 7', 'Give a character instructions in the right order'],
      ['2. Loops', '7 to 9', 'Use repeat instead of copying the same block ten times'],
      ['3. Score', '8 to 10', 'Keep a score in a variable and end the game at the right moment'],
      ['4. Python', '9 to 11', 'Write a short typed program and fix a misspelt word in it'],
      ['5. It depends', '10 to 12', 'Split a result into groups and explain why the groups disagree']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the weather project. "It depends, and here is on what" is one of the most grown-up answers a child can give.',
      'We report what your child built and explained, not minutes on a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'An average is one number for many moments. Sometimes the moments disagree.',
      'If a result has a minus sign, say out loud what it means.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Ingolstadt children',
    lede: 'Live and in English, with a regular mentor, one to one or in an age-matched batch.',
    bands: [
      { num: 'I', h3: 'Games', sub: 'Ages 6 to 14', courses: [
        { code: 'ING / GAM / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'The long course: Scratch to games, apps and a first look at AI.' },
        { code: 'ING / GAM / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to code in a familiar world, 7 to 12.' },
        { code: 'ING / GAM / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Their own Roblox games, scripted in Luau.' }
      ] },
      { num: 'II', h3: 'Numbers', sub: 'Ages 5 to 15', courses: [
        { code: 'ING / NUM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Grades 1 to 5, taught live and patiently.' },
        { code: 'ING / NUM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident number sense for 5 to 10 year olds.' },
        { code: 'ING / NUM / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a maths laboratory, 10 to 15.' }
      ] },
      { num: 'III', h3: 'Making', sub: 'Ages 8 to 12', courses: [
        { code: 'ING / MAK / 01', slug: 'block-coding-app-development-masterclass', title: 'App making', blurb: 'Working phone apps built from blocks.' },
        { code: 'ING / MAK / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first website, built from nine.' },
        { code: 'ING / MAK / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and small games in C++, 9 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live classes work for an Ingolstadt family?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoons', l: 'When Ingolstadt schools let out.' },
      { time: 'Weekend', l: 'Saturday early afternoon or Sunday morning.' },
      { time: 'One to one', l: 'A slot agreed with your child\'s mentor.' }
    ],
    cells: [
      { h3: 'Live', p: 'A real mentor, a real call, every lesson.' },
      { h3: 'Age-matched', p: 'Children learn with others of a similar age.' },
      { h3: 'Doing, not watching', p: 'Your child builds from minute one.' },
      { h3: 'Patient English', p: 'Simple words, shown and repeated.' },
      { h3: 'Parent notes', p: 'A short update on what was made.' },
      { h3: 'Your choice of size', p: 'Up to twenty children, or just yours.' }
    ]
  },

  projectsH2: 'Where an early start leads',
  projectsLede: 'Projects from our older students show what children who start young can go on to build; see the <a class="ag-inline-link" href="/student-labs">student labs</a> page for more.',
  reviewsLede: 'Google reviews from families and students, as they wrote them.',

  fees: {
    h2: 'Fees for Ingolstadt families',
    lede: 'Families pay monthly for eight live classes. Prices are displayed in euro using the European Central Bank reference rate, but the charge goes through in US dollars; your bank converts it, so the amount on your statement may be a few cents different.',
    free: ['A free first lesson', 'A puzzle and a first small game', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'The same mentor each week', 'Two lessons a week', 'Monthly, no long contract'],
    one: ['Your child and their own mentor', 'Projects shaped around your child', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Ingolstadt parents ask',
    h2: 'Coding classes for kids in Ingolstadt: questions parents ask',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and given in English only. Mentors keep the language simple for young children, adapt to each child\'s pace and accent, and show everything on screen, so a child still learning English can join in.' },
      { q: 'Is 6 too young to start coding?', a: 'Usually not. Six year olds start with picture puzzles and simple blocks, with short, playful lessons and no typing. The free first class shows whether your child is ready.' },
      { q: 'When do Bavarian schools start teaching Informatik?', a: 'Not in Grundschule. Mittelschulen teach compulsory Informatik for one lesson a week from grade 5 to 10, and Gymnasien give one weekly lesson in grades 6 and 7 an Informatik focus within Natur und Technik.' },
      { q: 'When are classes in Ingolstadt time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons after school and weekend mornings are the most popular.' },
      { q: 'Where are the teachers?', a: 'Our mentors are in India and teach live over video. India is four and a half hours ahead of Ingolstadt in winter, so a Friday 15:45 class here is 20:15 for the mentor.' },
      { q: 'How many children are in a group?', a: 'Fifteen to twenty children of a similar age. One-to-one lessons are also available: two private classes a week, at times you agree with the mentor.' },
      { q: 'Can my child take part in the Informatik-Biber?', a: 'If the school registers. The Biber is free, needs no coding, and is open from grade 3; primary pupils get nine tasks in 30 minutes. In 2026 it runs from 9 to 20 November.' },
      { q: 'What does my child need at home?', a: 'A computer or laptop with a mouse, a stable internet connection and a quiet corner. Younger children often like a parent nearby for the first lesson or two.' },
      { q: 'How much does it cost?', a: 'A monthly fee, shown on this page in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so the statement can differ slightly. The first lesson is free.' },
      { q: 'Will my child use AI chatbots?', a: 'No adult chatbot accounts are used with children. Children learn how AI works through safe examples and always write and explain their own code.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ingolstadt parents thinking about coding.',
    items: [
      { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria', p: 'Bavarian school rules and dates.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids in Germany', p: 'How our children\'s classes work.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'The usual first step.' },
      { href: '/python-classes-for-kids-germany', label: 'Python for kids', p: 'Typed code from about nine.' },
      { href: '/game-coding-classes-for-kids-germany', label: 'Game coding for kids', p: 'Games as a way into coding.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, explained.' }
    ]
  },

  start: {
    h2: 'Try a free first lesson',
    lede: 'In the first lesson your child solves a puzzle and makes something small move on screen. The mentor sees how your child thinks and how much English they follow, and suggests where to start.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a> first.',
    note: 'All lessons are taught live by mentors in India, in English only. WhatsApp us in English for a quick reply.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/game-coding-classes-for-kids-germany', label: 'Game coding' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-bavaria', label: 'Bavaria' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Warmer at night, cooler at noon'
  },

  personalityCss: `
.ag-root.ag-ing .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ing .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ing .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ing .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ing .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich and school-type overview; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Bayern page); KMK Ferien im Schuljahr 2026/2027; Bundesweite Informatikwettbewerbe, Informatik-Biber; Mathematik-Olympiaden e.V.; Destatis 31.12.2024; Einheitenzeitgesetz; read 2 November 2026. Stadt Ingolstadt, Wetterstation Gewerbegebiet and Wetterstation Landschaftsschutzgebiet, CC BY 4.0, downloaded 3 November 2026.',
    localProject: 'Two Ingolstadt weather stations: an original Python project pairing 62,011 ten-minute readings from the City of Ingolstadt\'s industrial-estate and protected-landscape stations. The industrial estate is warmer at 44,263 moments and 0.6 degrees warmer on average, but split by hour it is 1.0 warmer at 03:00, 1.4 warmer at 21:00 and 0.4 cooler at 12:00. Lesson family: a difference can change sign; split by time of day before summarising.',
    requiredMentions: ['industrial.csv', 'Moments measured at both stations: 62011', 'Industrial estate warmer: 44263 times', 'Average difference: 0.6 degrees', '12:00 average difference: -0.4', '21:00 average difference: 1.4', 'Ingolstadt 141,185', 'Warmer at night, cooler at noon'],
    sources: [
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'Bavarian Mittelschule and Gymnasium Informatik lessons.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Bavarian holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Mathematik-Olympiade facts and 2026 regional round.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Ingolstadt industrial-estate station, licence and description.', url: 'https://ckan.govdata.de/dataset/wetterstation-gewerbegebiet-stadt-ingolstadt' },
      { claim: 'Ingolstadt protected-landscape station and licence.', url: 'https://ckan.govdata.de/dataset/wetterstation-landschaftsschutzgebiet-stadt-ingolstadt' }
    ],
    rejectedClaims: [
      'Why the stations differ (roofs, roads, waste heat): plausible but not in the data, so the page does not explain it.',
      'Which time zone the timestamps use: the files do not say, so the table says "hour in the file".',
      'Naming Ingolstadt schools as sources of students: refused.',
      'Any link with the City of Ingolstadt, BWINF or the Mathematik-Olympiade: none.'
    ]
  }
};
