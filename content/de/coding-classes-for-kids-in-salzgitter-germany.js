'use strict';
// Coding classes for kids in Salzgitter (ag- city page, Germany cluster P6 row DE199, tier-2 shape
// coding-classes-for-kids-in-<city>-germany: ages 6 to 12). Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: in Lower Saxony compulsory Informatik waits until grade 9, so the years from 6 to 12 are free for play-based
// coding; a snow project on the old Salzgitter-Ringelheim weather station where the winter with no snow at all simply
// vanishes from a careless tally; contests; class times.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - KMK: Grundschule grades 1 to 4 (fact 1); switching tracks possible in grades 5 and 6 (8); Oberschule is the
//    three-track school in Lower Saxony (20).
//  - GI Informatik-Monitor 2026/27, Lower Saxony: "An allen allgemeinbildenden Schularten wird seit dem Schuljahr 2024/25
//    das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10 unterrichtet." (fact 79); Oberstufe G9, grade 11
//    Einführungsphase, 12 and 13 Qualifikationsphase (50); "Schlusslichter sind Baden-Württemberg, Niedersachsen und
//    Bremen: Hier belegt ungefähr jede zwölfte Person das Fach Informatik." (99).
//  - KMK FER2026_27.pdf, Lower Saxony: "12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04. 07.05. und 18.05.
//    08.07. - 18.08." (fact 277).
//  - bwinf.de: Biber 9 to 20 November 2026 (133), grades 3 to 13 (130), practice Schnupper-Biber since 14 September 2026
//    (135), results December 2026 (136). Känguru 2027 on 8 April 2027 (183), registration 1 December 2026 to 31 January
//    2027 (184), 24 problems for grades 3/4 and 5/6 in 75 minutes (186).
//  - Destatis GV-ISys: Salzgitter, Stadt 104,970 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate values, station 04364 "Salzgitter-Ringelheim",
//    tageswerte_KL_04364_19650101_19991231_hist.zip (historical; the location record ends 17 January 2000), downloaded
//    3 November 2026; column SHK_TAG "Schneehoehe Tageswert" in cm (column 10, read by position), read once a day in the
//    morning (07:30 MEZ from 1987). 12,753 days from 1 January 1965 to 31 December 1999; 30 days of November 1999 are
//    absent. Licence: dwd.de rechtliche Hinweise, CC BY 4.0 with attribution. Ringelheim is part of Salzgitter; no other
//    Germany page uses station 04364.
//  - Tried first: Stadt Salzgitter open data: no portal answered (opendata.salzgitter.de no connection, salzgitter.de/
//    opendata 404) and GovData lists no Stadt Salzgitter dataset, 3 November 2026.
// Our own calculations (scratchpad de/w/T7/run/sz/v1.py + v2.py, python3 -I): a winter runs July to June and is named
// by its first year. V1 (keys made only on snow days): 35 winters in the list, fewest snow days 2 (that is the half
// winter starting July 1999). V2 (every full winter 1965/66 to 1998/99 made first, at zero): 34 winters; fewest 0 in
// 1989/1990; most 102 in 1969/1970. Deepest snow in the file 41 cm on 13 January 1987.
// Lesson family: make every box first, at zero; a group with nothing in it is still an answer.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'snow_days = {}',
  'with open("ringelheim_days.txt", encoding="latin-1") as f:',
  '    next(f)',
  '    for line in f:',
  '        cols = [c.strip() for c in line.split(";")]',
  '        day, snow_cm = cols[1], int(float(cols[9]))',
  '        year, month = int(day[:4]), int(day[4:6])',
  '        winter = year if month >= 7 else year - 1   # a winter starts in July',
  '        if snow_cm >= 1:',
  '            snow_days[winter] = snow_days.get(winter, 0) + 1',
  '',
  'print("Winters in the list:", len(snow_days))',
  'print("Fewest snow days:", min(snow_days.values()))'
].join('\n');

const V2 = [
  'all_winters = {w: 0 for w in range(1965, 1999)}   # every full winter, 1965/66 to 1998/99',
  'for w in all_winters:',
  '    all_winters[w] = snow_days.get(w, 0)',
  '',
  'print("Winters checked:", len(all_winters))',
  'fewest = min(all_winters.values())',
  'print("Fewest snow days:", fewest, "in", [f"{w}/{w + 1}" for w, n in all_winters.items() if n == fewest])',
  'most = max(all_winters.values())',
  'print("Most snow days:", most, "in", [f"{w}/{w + 1}" for w, n in all_winters.items() if n == most])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Salzgitter: coding for kids' },
  slug: 'coding-classes-for-kids-in-salzgitter-germany',
  code: 'saa',
  accent: '#955100',
  accentRationale: 'Coding for kids in Salzgitter: a warm iron-ore ochre #955100 for the steel town, kept clear of the Lower Saxony burgundy and the Berlin brick; contrast 4.93 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Coding classes for kids in Salzgitter',
  title: 'Coding Classes for Kids in Salzgitter: Live Online, in English',
  description: 'Coding classes for kids in Salzgitter aged 6 to 12: live online in English, why Lower Saxony starts Informatik in grade 9, contests and a snowy-winters project.',
  ogDescription: 'Live coding lessons in English for Salzgitter children of 6 to 12, from Scratch games to typed Python, with an original project on 35 years of snow at Salzgitter-Ringelheim.',
  twitterDescription: 'Coding for Salzgitter children, live in English, with a snow project from Ringelheim.',
  pageName: 'Coding Classes for Kids in Salzgitter',
  webPageDescription: 'A guide for Salzgitter parents of children aged 6 to 12: when Lower Saxony schools start compulsory Informatik, how live coding classes in English work for young children, free contests in 2026 and 2027, and an original snow-day project on Deutscher Wetterdienst data from Salzgitter-Ringelheim.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Salzgitter: Scratch first, then typed Python and small data projects, in a group of fifteen to twenty or one to one, with a regular mentor who matches each child\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Salzgitter',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'School' },
    { href: '#snow', label: 'Snow' },
    { href: '#contests', label: 'Contests' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Salzgitter &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Salzgitter',
  lede: 'In Lower Saxony, Informatik becomes compulsory in grade 9. For a Salzgitter child that is fourteen or fifteen, long after the age when building a game feels like play and every puzzle is a reason to cheer. Below, Salzgitter parents of six to twelve year olds will find what school does and does not cover at that age, what our English-language lessons feel like for a small child, two contests that cost nothing, and a snow project from Ringelheim where one winter with no snow at all quietly disappears from a careless count.',
  secondaryCta: { href: '#snow', label: 'See the snow project' },
  wa: 'Hello Modern Age Coders, my child is in Salzgitter and would like to learn coding in English. May we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; patient mentors, simple English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Begins with', 'Scratch blocks'],
    ['Then', 'Typed Python from about 9'],
    ['Salzgitter times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For Salzgitter children aged 6 to 12, Modern Age Coders runs coding classes that are live, online and in English. Six to eight year olds snap Scratch blocks into games and stories; at nine or so they switch to typing Python and counting real data. Their mentor, who works from India, goes at the child\'s speed and gets used to how they talk. Families choose a class of fifteen to twenty or private lessons, on weekday afternoons or Saturday and Sunday mornings. Lower Saxony\'s compulsory Informatik only begins in grade 9.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Three courses for Salzgitter children',
    lede: 'One that grows with a child over a year, one short taster, and one for older children ready to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'SAA / 01', title: 'Coding for Kids', note: 'Six to twelve, grouped by age, about ten to twelve months. Starts with Scratch stories and games and ends with small apps and a peek at AI.' },
      { course: 'scratch-programming-complete-course', code: 'SAA / 02', title: 'Scratch Coding for Kids', note: 'Six to twelve, three to four months. A compact start for a child who has never coded, finishing with several games of their own.' },
      { course: 'python-ai-kids-masterclass', code: 'SAA / 03', title: 'Python and AI for Kids', note: 'Nine to twelve. Typing real Python, drawing with code and counting real data, such as the snow days below.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Lower Saxony schools',
      h2: 'When will a Salzgitter child first have Informatik at school?',
      lede: 'In grade 9, at around fourteen. Until then computing is not a compulsory subject in Lower Saxony.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 9 and 10, for everyone',
          left: [
            'The Gesellschaft für Informatik reports in its Informatik-Monitor 2026/27 that since the 2024/25 school year Informatik has been compulsory in grades 9 and 10 at every type of general school in Lower Saxony, from the Oberschule to the Gymnasium.',
            'That is a real step forward. It also means a Salzgitter child spends Grundschule, grades 1 to 4, and the first four years of secondary school without a fixed Informatik lesson.'
          ],
          rightH3: 'And afterwards, few continue',
          right: [
            'In the Oberstufe, which in Lower Saxony runs from grade 11 to grade 13, the subject is optional again. The monitor names Lower Saxony among the three Länder where only about one pupil in twelve takes Informatik at that stage.',
            'So the two compulsory years in grades 9 and 10 are, for most young people, all the Informatik they will have at school.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Salzgitter school career, by grade', head: ['Grades', 'Age, roughly', 'Compulsory Informatik?'], rows: [
          ['Grades 1 to 4, Grundschule', '6 to 10', 'No'],
          ['Grades 5 to 8, secondary school', '10 to 14', 'No'],
          ['Grades 9 and 10', '14 to 16', 'Yes, at every general school since 2024/25'],
          ['Grades 11 to 13, Oberstufe', '16 to 19', 'Optional; about one pupil in twelve takes it']
        ] },
        { kind: 'source', html: 'Sources: KMK, Primarbereich and school types (the Oberschule is Lower Saxony\'s school with several tracks); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Lower Saxony page and national summary. Read on 2 November 2026. Ages are our own rough guide.' },
        { kind: 'p', mt: true, html: 'We teach alongside school, not instead of it. What an early start gives a Salzgitter child is not a head start on grades but years of practice in thinking step by step: spotting a pattern, testing an idea, and finding out calmly why a program did something odd. When Informatik arrives in grade 9, those habits are already there. The <a class="ag-inline-link" href="/coding-classes-in-lower-saxony">Lower Saxony page</a> has more on the Land.' }
      ]
    },
    {
      id: 'snow',
      tint: 'tint',
      eyebrow: 'A Salzgitter project',
      h2: 'Which winter in Salzgitter had the fewest snow days?',
      lede: 'From 1965 to 1999 the weather station at Salzgitter-Ringelheim measured the snow every morning, and the Deutscher Wetterdienst now publishes those readings for anyone to reuse under CC BY 4.0. Children of 10 to 12 use them to learn a quiet trap: a box you never create can never show you a zero.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file has one row for each day from 1 January 1965 to 31 December 1999, 12,753 rows in all; November 1999 is missing, shortly before the station closed. One column holds the snow depth in centimetres, measured once each morning. We saved it as ringelheim_days.txt.',
            'A snow day, for us, is a day with at least 1 centimetre of snow on the ground. That is our own rule, and children write it down before they count.'
          ],
          rightH3: 'Winters cross New Year',
          right: [
            'Snow falls in December and in January, so a winter belongs to two years. We name each winter by the year it starts, counting from July to the next June: winter 1978 means July 1978 to June 1979.',
            'The question sounds simple: in which winter did Salzgitter have the fewest snow days? The first program gives an answer, and the answer is wrong for a reason children love to discover.'
          ] },
        { kind: 'code', label: 'Version 1: count snow days in each winter', lang: 'Python', code: V1, note: 'It prints <code>Winters in the list: 35</code> and <code>Fewest snow days: 2</code>.' },
        { kind: 'p', mt: true, html: 'Two things are wrong, and neither is a typing mistake. First, the list includes two half winters at the edges of the file: January to June 1965, and July to December 1999. The "2" is that last half winter, cut off by the end of the data. Second, and sneakier: the program only creates a box for a winter when it meets a snow day. A winter with no snow at all never gets a box, so it can never be the answer. The real record is missing, not because the data lost it, but because the program never looked.' },
        { kind: 'code', label: 'Version 2: make every winter first, at zero', lang: 'Python', code: V2, note: 'It prints <code>Winters checked: 34</code>, <code>Fewest snow days: 0 in [\'1989/1990\']</code> and <code>Most snow days: 102 in [\'1969/1970\']</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Snow days at Salzgitter-Ringelheim, full winters 1965/66 to 1998/99 (our count, at least 1 cm of snow)', head: ['Winter', 'Snow days'], rows: [
          ['1969/1970, the snowiest', '102'],
          ['1978/1979', '76'],
          ['1986/1987', '78'],
          ['1988/1989', '5'],
          ['1989/1990, the only winter with none', '0'],
          ['1991/1992', '6']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily values for station 04364 Salzgitter-Ringelheim, snow depth column, CC BY 4.0, downloaded 3 November 2026. The winter rule, the snow-day rule and every count are ours.' },
        { kind: 'p', mt: true, html: 'Winter 1989/90 had not a single morning with snow lying at Ringelheim, the only one of 34 full winters in the file. Version 1 could not see it, because nothing ever made a box for it. Version 2 makes all 34 boxes first, sets each to zero, and only then fills them in, so an empty winter shows up as exactly what it was. At the other end, 1969/70 had snow on 102 mornings, more than three months. The deepest snow anywhere in the file was 41 centimetres, on 13 January 1987.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Draw a box for every day of the week before you start, then put a sticker in the box each day it rains. Which day has no sticker? Could you tell if you had not drawn its box?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list with one zero for each month, then add one to a month each time a pretend snowflake lands in it. Find the month that stays at zero.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1, explain both mistakes in your own words, then run Version 2 and check the answer.',
          '<strong>Going further.</strong> Change the snow-day rule to at least 5 centimetres. Does 1969/70 stay the snowiest winter?'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live and in English',
      h2: 'Can a Salzgitter child with little English follow the classes?',
      lede: 'Usually, yes. The lessons are in English only, but most of a coding class happens on the screen, and the mentor adjusts to the child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, and only English', p: 'We do not teach in German, and we say so before anything is booked. For a child at a German school, the class is also an hour of listening to clear, simple English, which many Salzgitter parents see as a bonus rather than a hurdle.' },
          { h3: 'Short words, shown not told', p: 'Mentors speak in short sentences, point at the screen and repeat in easier words. A six year old who answers with one English word, or a German one, is understood and gently given the English word back.' },
          { h3: 'The same mentor each week', p: 'Every child keeps one mentor, based in India, who soon knows whether they like to be challenged, need a quiet moment, or learn by changing a game someone else made.' }
        ] },
        { kind: 'p', mt: true, html: 'Classes are an hour long, twice a week, and broken into small tasks for the youngest children. Parents get a short note after classes. Our page on <a class="ag-inline-link" href="/online-coding-classes-for-kids-germany">online coding for kids in Germany</a> explains the format.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which free contests can a Salzgitter child enter this school year?',
      lede: 'Two are open to primary children, both run through schools, and neither needs any coding.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two free contests for young children, 2026/27', head: ['Contest', 'When', 'What children do', 'How to enter'], rows: [
          ['Informatik-Biber', '9 to 20 November 2026', 'Logic puzzles on screen, grades 3 to 13', 'Through the school'],
          ['Känguru der Mathematik', '8 April 2027', '24 maths puzzles in 75 minutes for grades 3/4 and 5/6', 'School registers from 1 December 2026 to 31 January 2027']
        ] },
        { kind: 'source', html: 'Sources: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026 pages; Känguru der Mathematik e.V., 2027 dates. Read on 2 November 2026. The organisers moved Känguru 2027 from its usual third Thursday in March to April, since March would collide with the run-up to Easter breaks across Germany.' },
        { kind: 'p', mt: true, html: 'A practice version of the Biber, the Schnupper-Biber, has been open since 14 September 2026, and results of the main round follow in December 2026. If your child wants to warm up, we have written our own English puzzles for <a class="ag-inline-link" href="/informatik-biber-practice-in-english">Biber practice</a> and for <a class="ag-inline-link" href="/kangaroo-math-germany-practice">Känguru practice</a>. The organisers\' real tasks are theirs, and we have no link to either contest.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Salzgitter time?',
      lede: 'Young children concentrate well straight after school or on a weekend morning. For the mentor in India those hours fall in the late afternoon or evening, which works on both sides.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Salzgitter times beside the mentor\'s clock', head: ['Salzgitter', 'India this winter', 'India after 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['16:20', '20:50', '19:50'],
          ['Saturday 10:15', '14:45', '13:45'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'German law (Einheitenzeitgesetz) sets UTC+1 for winter and UTC+2 for summer; the change back happened on 25 October 2026 and the next change forward is on 28 March 2027. India is on UTC+5:30 all year. Example times only, not set batches.' },
        { kind: 'p', mt: true, html: 'Lower Saxony school holidays for 2026/27, from the Kultusministerkonferenz table: autumn 12 to 24 October 2026; Christmas 23 December 2026 to 9 January 2027; a short winter break on 1 and 2 February 2027; Easter 22 March to 3 April 2027; single days on 7 and 18 May 2027; summer 8 July to 18 August 2027. Lessons do not stop for the holidays unless you ask. Children log in from every district of Salzgitter and from nearby Wolfenbüttel, Braunschweig, Goslar and Peine.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Salzgitter child can do at each stage',
    lede: 'Five steps we watch for. They decide which group a child joins and what we report home.',
    table: { caption: 'Steps a child climbs with us (our scale)', head: ['Step', 'Often around', 'Shown when the child'], rows: [
      ['1. Order', '6 to 7', 'Put a few steps in order and say what a sprite will do'],
      ['2. Repeat', '7 to 9', 'Use a loop instead of copying the same block'],
      ['3. Count', '8 to 10', 'Tallies things in a list and keeps a running score'],
      ['4. Type', '9 to 11', 'Write a short Python program with a loop and an if'],
      ['5. Check', '10 to 12', 'Make every box first, then fill it, and spot an empty one']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the snow project. A child who asks "did I make a box for every case?" will check their own answers in maths too.',
      'You hear what your child built and explained, never just minutes of screen time.'
    ] },
    right: { h3: 'For children', ps: [
      'Zero is a real answer. Make sure your program has a place to put it.',
      'If a list is shorter than you expected, find out who is missing.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Salzgitter children',
    lede: 'Live in English, with a regular mentor, as a class or one to one.',
    bands: [
      { num: 'I', h3: 'Logic and numbers', sub: 'Ages 5 to 12', courses: [
        { code: 'SAA / LOGIC / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Step-by-step puzzles, ideal before the Biber.' },
        { code: 'SAA / LOGIC / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Primary maths taught for understanding.' },
        { code: 'SAA / LOGIC / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From beads to quick mental arithmetic.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'SAA / GAME / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Scratch, Roblox and Minecraft games.' },
        { code: 'SAA / GAME / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code in a world children already know.' },
        { code: 'SAA / GAME / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot games', blurb: 'A real game engine for older children.' }
      ] },
      { num: 'III', h3: 'Making and understanding', sub: 'Ages 8 to 12', courses: [
        { code: 'SAA / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps with blocks', blurb: 'Working phone apps without typing.' },
        { code: 'SAA / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A child\'s own web page.' },
        { code: 'SAA / MAKE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'What AI is, with no adult accounts.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes fit a Salzgitter week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school and homework on weekdays.' },
      { time: 'Saturday or Sunday', l: 'A morning hour, calm for younger children.' },
      { time: 'Private', l: 'A slot arranged with the mentor.' }
    ],
    cells: [
      { h3: 'Little wins', p: 'Young children finish something every few minutes.' },
      { h3: 'Hands on', p: 'The child clicks and types; the mentor asks.' },
      { h3: 'Children of an age', p: 'Groups are kept to similar ages.' },
      { h3: 'Notes for parents', p: 'What was made and what comes next.' },
      { h3: 'Simple English', p: 'Short words, everything shown.' },
      { h3: 'Class or one to one', p: 'Fifteen to twenty children, or private.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Some of what teenagers who started young have gone on to build; more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from our families and students, as written.',

  fees: {
    h2: 'Fees for Salzgitter families',
    lede: 'Eight live classes a month, one payment. The euro figure comes from converting at the ECB reference rate; the money itself moves in US dollars, and your bank does the exchange, so expect the booked euro amount to differ slightly.',
    free: ['A free first class', 'A puzzle and a first Scratch game', 'No card needed'],
    group: ['Fifteen to twenty children of similar age', 'One regular mentor', 'Two classes a week', 'Monthly, stop whenever you want'],
    one: ['Your child and one mentor', 'A plan for your child alone', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Salzgitter parents ask',
    h2: 'Coding classes for kids in Salzgitter: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, live. Mentors keep it simple, show everything on screen and adapt to each child\'s speed and accent, so children who are just starting English can follow.' },
      { q: 'What is the youngest age?', a: 'Six. Children of 6 to 8 start with Scratch blocks, which need no typing, and most move to typed Python at about 9.' },
      { q: 'Do Salzgitter schools teach coding?', a: 'Compulsory Informatik in Lower Saxony begins in grade 9 and continues in grade 10, at every general school since 2024/25, according to the Gesellschaft für Informatik. Before that there is no compulsory computing lesson.' },
      { q: 'Is six too young?', a: 'Not usually. Six year olds make simple stories and games with blocks, in short tasks with lots of praise. The free first class shows quickly whether your child enjoys it.' },
      { q: 'When are classes in Salzgitter time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most children come on weekday afternoons or a weekend morning.' },
      { q: 'Which contests can my child enter?', a: 'The Informatik-Biber, a free puzzle contest from grade 3, runs from 9 to 20 November 2026 through schools. The Känguru der Mathematik follows on 8 April 2027, with school registration from 1 December 2026.' },
      { q: 'Where are the teachers?', a: 'Our mentors live and work in India and teach over live video. Their clock runs ahead of Salzgitter, so a 16:20 class here is 20:50 there this winter.' },
      { q: 'How many children share a class?', a: 'Between fifteen and twenty, all close in age. If you prefer, the one-to-one plan gives your child two private lessons a week.' },
      { q: 'How do I pay?', a: 'Once a month, by card or bank transfer. We list euro, converted at the ECB reference rate, and charge in US dollars, so your bank\'s exchange may shift the final euro figure by a little. The first lesson is free.' },
      { q: 'What is the snow project?', a: 'Children of about 10 to 12 count snow days at the old Salzgitter-Ringelheim weather station from 1965 to 1999. A careless program misses the winter of 1989/90, the only one with no snow at all, and children learn to make every box first.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Salzgitter families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The starting point for every city.' },
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'Informatik rules across the Land.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'Our national page for 6 to 12.' },
      { href: '/python-classes-for-kids-germany', label: 'Python for kids in Germany', p: 'When a child is ready to type.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'How machines learn, for children.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child solves a short puzzle and makes a first Scratch game. The mentor sees how your child thinks and how comfortable English feels, and recommends a course and group.',
    readFirst: 'If you would like to read on first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Every lesson is live, online and in English, given by a mentor in India. Questions? Send us a WhatsApp message in English.',
    formNote: 'Free, no card, no strings.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-lower-saxony', label: 'Lower Saxony' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Zero is an answer too'
  },

  personalityCss: `
.ag-root.ag-saa .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-saa .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-saa .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-saa .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-saa .ag-code-head b { letter-spacing: 0.016em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich and school types; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Lower Saxony page, national summary); KMK Ferienregelung 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); Känguru der Mathematik 2027; Einheitenzeitgesetz; Destatis GV-ISys. Deutscher Wetterdienst, daily values for station 04364 Salzgitter-Ringelheim, CC BY 4.0.',
    localProject: 'Snow at Salzgitter-Ringelheim: an original Python project on DWD daily snow depths 1965 to 1999, where a tally that only creates a winter on its first snow day lists 35 winters and finds a minimum of 2 (a half winter), while creating all 34 full winters at zero first reveals 1989/90 with no snow day at all and 1969/70 with 102; plus sticker and Scratch versions. Lesson family: make every box first, at zero.',
    requiredMentions: ['ringelheim_days.txt', 'Winters in the list: 35', 'Winters checked: 34', 'Fewest snow days: 0 in', 'Most snow days: 102 in', '41 centimetres, on 13 January 1987', 'Wolfenbüttel, Braunschweig, Goslar and Peine', 'Zero is an answer too'],
    sources: [
      { claim: 'Lower Saxony compulsory Informatik in grades 9 and 10 since 2024/25; G9 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'About one in twelve Oberstufe pupils takes Informatik in Lower Saxony.', url: 'https://informatik-monitor.de/' },
      { claim: 'Lower Saxony school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD daily values for Salzgitter-Ringelheim.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD reuse under CC BY 4.0.', url: 'https://www.dwd.de/DE/service/rechtliche_hinweise/rechtliche_hinweise_node.html' },
      { claim: 'Informatik-Biber 2026.', url: 'https://bwinf.de/biber/2026/' }
    ],
    rejectedClaims: [
      'Stadt Salzgitter open data: no portal reachable and none listed on GovData on 3 November 2026; the DWD station in Ringelheim was used.',
      'Any claim about snow in Salzgitter today or in future: the station record ends in January 2000; the page describes 1965 to 1999 only.',
      'Naming Salzgitter schools as sources of students: refused.',
      'Any affiliation with the DWD, BWINF or the Känguru organisers: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
