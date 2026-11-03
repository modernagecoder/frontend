'use strict';
// Coding classes for kids in Koblenz (ag- city page, Germany cluster P6 row DE196, tier-2 shape
// coding-classes-for-kids-in-<city>-germany: ages 6 to 12). Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: two rivers, one town. Rhineland-Palatinate has no Informatik for all until 2028/29, so a Koblenz child of 6 to
// 12 meets computing at home or not at all; our live classes in English; and a project on the Rhine gauge at Koblenz in
// which 157 readings below the zero mark turn out to be only five events.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 November 2026, unless stated):
//  - KMK: Grundschule grades 1 to 4 outside Berlin and Brandenburg (fact 1); no leaving exam after Grundschule (28).
//  - GI Informatik-Monitor 2026/27: RLP among six Länder "ohne einen für alle verbindlichen Informatikunterricht"
//    (fact 92); "Seit dem Schuljahr 2021/22 findet an 21 Informatik-Profil-Schulen in Jahrgangsstufe 5 verbindlicher
//    Informatikunterricht statt." (83); "Zum Schuljahr 2028/29 wird Informatik in Rheinland-Pfalz zum Pflichtfach an
//    allen Schulen im Gesamtumfang von vier Wochenstunden." (95). G8 route at some Gymnasien, default G9 (60).
//  - KMK school types: Realschule plus in RLP (fact 21).
//  - KMK FER2026_27.pdf, RLP: "05.10. - 16.10. 23.12. - 08.01. -- 22.03. - 02.04. -- 28.06. - 06.08." (fact 280).
//  - bwinf.de: Biber 9 to 20 November 2026 (133), grades 3 to 13, free (129, 130), 9 tasks in 30 minutes at primary
//    level (132). Känguru 2027 on 8 April 2027 (183).
//  - Destatis GV-ISys: Koblenz, Stadt 113,378 on 31.12.2024 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Wasserstraßen- und Schifffahrtsverwaltung des Bundes, PEGELONLINE REST API v2. Rhine gauge KOBLENZ (uuid
//    4c7d796a-39f2-4f26-97a9-3aad01713e29, number 25900700, Rhine km 591.49, gaugeZero 57.692 m ü. NHN valid from
//    2019-11-01, series "WASSERSTAND ROHDATEN", equidistance 15 minutes) and Mosel gauge KOBLENZ OP (uuid
//    3f64ff08-ca37-4567-ba64-a387a9358d0c, Mosel km 2.111, gaugeZero 63.075 m ü. NHN). Measurements start=P31D,
//    downloaded 3 November 2026: 2,976 readings each, 3 October 2026 20:30 to 3 November 2026 19:15; 100 readings on
//    25 October 2026 (clock change). Licence on https://www.pegelonline.wsv.de/gast/nutzungsbedingungen: "Dies geschieht
//    auf der Grundlage der Lizenz DL-DE->Zero-2.0", commercial and non-commercial use allowed. Raw copies in
//    src-pages/<slug>/. Not a flood or disaster topic: the October 2026 readings are low water and an ordinary rise.
// Our own calculations (scratchpad de/w/T7/run/kob/v1.py + v2.py, python3 -I): Rhine lowest -4 cm, highest 101 cm;
// 157 readings below 0; 5 dips below 0 starting 2026-10-06T02:00, 11:45, 14:30, 21:00 and 2026-10-07T15:30; first
// reading at or above 50 cm 2026-10-25 12:00, back below 50 cm 2026-10-30 14:45. Mosel gauge 196 to 209 cm.
// Lesson family: count events, not readings; an event is the moment a value crosses the line.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("rhein_koblenz.csv") as f:',
  '    readings = [(row["time"], int(row["cm"])) for row in csv.DictReader(f)]',
  '',
  'print("Readings:", len(readings))',
  'print("Lowest:", min(cm for t, cm in readings), "cm  Highest:", max(cm for t, cm in readings), "cm")',
  '',
  'below = [t for t, cm in readings if cm < 0]',
  'print("Readings below the zero mark:", len(below))'
].join('\n');

const V2 = [
  'dips = []',
  'was_below = False',
  'for t, cm in readings:',
  '    now_below = cm < 0',
  '    if now_below and not was_below:      # it has just crossed the line',
  '        dips.append(t)',
  '    was_below = now_below',
  '',
  'print("Times the river went below the zero mark:", len(dips))',
  'for t in dips:',
  '    print("  ", t[:16])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Koblenz: coding for kids' },
  slug: 'coding-classes-for-kids-in-koblenz-germany',
  code: 'kob',
  accent: '#444200',
  accentRationale: 'Coding for kids in Koblenz: a dark river olive #444200 for the Rhine and Mosel slopes, far from the Berlin brick and the Rhineland-Palatinate purple; contrast 8.42 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-rhineland-palatinate', name: 'Rhineland-Palatinate' }],
  routeLabel: 'Coding classes for kids in Koblenz',
  title: 'Coding Classes for Kids in Koblenz: Live Online, in English',
  description: 'Coding classes for kids in Koblenz aged 6 to 12: live online in English, what Rhineland-Palatinate schools teach, the Biber contest and a Rhine gauge project.',
  ogDescription: 'Live coding lessons in English for Koblenz children of 6 to 12, from Scratch to Python, with an original project on the Rhine water gauge at Koblenz that teaches children to count events, not readings.',
  twitterDescription: 'Coding for Koblenz children, live in English, with a project on the Rhine gauge.',
  pageName: 'Coding Classes for Kids in Koblenz',
  webPageDescription: 'A guide for Koblenz parents of children aged 6 to 12: what Rhineland-Palatinate schools teach about computing before 2028/29, how live coding classes in English work, the Informatik-Biber 2026, and an original project on the PEGELONLINE Rhine gauge at Koblenz.',
  courseDescription: 'Live online coding classes in English for Koblenz children aged 6 to 12: Scratch first, then typed Python and small projects with real data, in a group of fifteen to twenty or one to one, with a regular mentor who matches each child\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Koblenz',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'School' },
    { href: '#river', label: 'River' },
    { href: '#biber', label: 'Biber' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Koblenz &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Koblenz',
  lede: 'A child in Koblenz grows up where the Mosel flows into the Rhine, and can still reach the age of twelve without a single compulsory computing lesson, because Rhineland-Palatinate only makes Informatik a subject for everyone from 2028/29. This page is for parents of children from 6 to 12: what local schools offer and when, how a live coding class in English works for a young child, a free contest this month, and a project on the Rhine gauge where a child learns that counting readings and counting events are different things.',
  secondaryCta: { href: '#river', label: 'See the river project' },
  wa: 'Hello Modern Age Coders, my child lives in Koblenz and would like to try coding in English. Could we book a free first class?',
  heroNote: 'Teaching online since 2020 &middot; 10,000+ students worldwide &middot; one patient mentor, in English',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['First steps', 'Scratch, then typed Python'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Koblenz times', 'After school and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for kids in Koblenz with Modern Age Coders are live video lessons in English for children of 6 to 12. Younger children build games with Scratch blocks; from about 9 they type Python and try small projects with real data. A regular mentor in India keeps to each child\'s pace and accent, in a class of fifteen to twenty or one to one, after school or on weekend mornings. Rhineland-Palatinate schools have no compulsory Informatik for all until 2028/29.',

  picks: {
    eyebrow: 'Where Koblenz children start',
    h2: 'Three courses for children aged 6 to 12',
    lede: 'A long course that grows with a child, a short one to see whether coding clicks, and one that goes straight to typed code for older children.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'KOB / 01', title: 'Coding for Kids', note: 'For 6 to 12, in groups by age, over about a year. Scratch games and stories first, then simple apps and a gentle first look at AI.' },
      { course: 'scratch-programming-complete-course', code: 'KOB / 02', title: 'Scratch Coding for Kids', note: 'For 6 to 12, about three to four months. A short, complete start that ends with a few finished games of the child\'s own design.' },
      { course: 'python-ai-kids-masterclass', code: 'KOB / 03', title: 'Python and AI for Kids', note: 'For 9 to 12. Real typed Python from week one, turtle drawings, small games, and data projects like the river gauge below.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Rhineland-Palatinate schools',
      h2: 'What do Koblenz schools teach about computing, and when?',
      lede: 'Rhineland-Palatinate is in a period of change. For now, computing is optional for most pupils; from the 2028/29 school year it becomes a subject at every school.',
      body: [
        { kind: 'two',
          leftH3: 'Today: optional for most pupils',
          left: [
            'In its Informatik-Monitor 2026/27 the Gesellschaft für Informatik places Rhineland-Palatinate in a group of six Länder where no Informatik lesson is binding on every pupil. A Koblenz child spends grades 1 to 4 at Grundschule, as in most of Germany, and there is no fixed computing lesson in those years.',
            'Since 2021/22, a group of 21 Informatik-Profil-Schulen across the Land has taught compulsory Informatik in grade 5. Whether a child attends one of them depends on the school, not on the city.'
          ],
          rightH3: 'From 2028/29: a subject for all',
          right: [
            'The same monitor reports the plan: from the 2028/29 school year Informatik becomes a compulsory subject at all schools in Rhineland-Palatinate, with four weekly hours in total across the years it is taught.',
            'A child who is 6 now will meet it in secondary school. A child who is 11 now may finish lower secondary just as it arrives. Either way, the years from 6 to 12 are open, and they are the years when puzzles and games make thinking in steps feel like play.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing for a Koblenz child, by school stage', head: ['Stage', 'Grades', 'Computing on the timetable'], rows: [
          ['Grundschule', '1 to 4', 'No compulsory computing lesson; no leaving exam'],
          ['Secondary school, today', '5', 'Compulsory Informatik only at the 21 profile schools'],
          ['Secondary school, today', '6 to 10', 'Informatik if a school offers it as an option'],
          ['Every school, from 2028/29', 'Secondary', 'Informatik compulsory, four weekly hours in total']
        ] },
        { kind: 'source', html: 'Sources: KMK, Primarbereich and school-type overview (Realschule plus is the Rhineland-Palatinate school with two tracks); Gesellschaft für Informatik, Informatik-Monitor 2026/27, national summary and Rhineland-Palatinate page. Read on 2 November 2026. Most Gymnasien in the Land run the nine-year route; some offer eight years.' },
        { kind: 'p', mt: true, html: 'Our classes run beside school and do not replace anything a school teaches. What they add for a Koblenz child of primary age is early practice in the habits Informatik will later ask for: breaking a task into steps, testing an idea, and finding out why a program did something unexpected. The <a class="ag-inline-link" href="/coding-classes-in-rhineland-palatinate">Rhineland-Palatinate page</a> covers the Land in more depth.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live and in English',
      h2: 'How does a live class in English work for a young child?',
      lede: 'Short, friendly and hands-on. The child does the clicking and typing; the mentor watches, encourages and asks questions.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only English, explained simply', p: 'We teach in English and nothing else, and we say so before any trial. Mentors use short sentences, show rather than tell, and repeat in easier words. A Koblenz child who knows only a few English words still follows, because most of the class happens on the screen.' },
          { h3: 'The same face every week', p: 'Each child has one mentor, based in India, who learns how that child thinks: who races ahead, who goes quiet before an answer, who would rather tinker with a finished game than start from an empty screen. Younger children relax quickly when the person on the screen stays the same.' },
          { h3: 'Blocks first, then words', p: 'Children of 6 to 8 snap Scratch blocks together and make sprites move and talk. From about 9, children type Python. The code words, repeat, if, print, are English, so lessons and code reinforce each other.' }
        ] },
        { kind: 'p', mt: true, html: 'A class lasts an hour, twice a week. For six and seven year olds the mentor splits the hour into short tasks with a small win every ten minutes. Parents receive a short note on what was built and what comes next. Our <a class="ag-inline-link" href="/online-coding-classes-for-kids-germany">online coding for kids page</a> explains the format in more detail.' }
      ]
    },
    {
      id: 'river',
      tint: 'tint',
      eyebrow: 'A Koblenz project',
      h2: 'How often did the Rhine at Koblenz drop below its zero mark?',
      lede: 'The federal waterways administration measures the Rhine at Koblenz every fifteen minutes and anyone may reuse what it publishes. Children of ten to twelve take one month of those numbers to learn a question programmers ask all the time: am I counting readings, or am I counting events?',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'PEGELONLINE is the federal service that publishes water levels on German waterways under the Datenlizenz Deutschland Zero 2.0. On 3 November 2026 we downloaded the last 31 days for the Rhine gauge called KOBLENZ, at Rhine kilometre 591.49: 2,976 readings in centimetres, one every quarter of an hour, from the evening of 3 October 2026 to the evening of 3 November 2026.',
            'They are raw readings, published as they arrive and not yet checked. We saved them as rhein_koblenz.csv with two columns: the time and the level.'
          ],
          rightH3: 'A strange number',
          right: [
            'Children are surprised that the level sometimes reads below zero. The river has not disappeared. A gauge measures from its own fixed mark, called the gauge zero, which at Koblenz sits 57.692 metres above sea level; at low water the surface can dip below that mark.',
            'So the question is: in this month, how often did the Rhine go below zero? A first program says one thing, a second program says something very different, and both are correct about different questions.'
          ] },
        { kind: 'code', label: 'Version 1: count the readings', lang: 'Python', code: V1, note: 'It prints <code>Readings: 2976</code>, <code>Lowest: -4 cm  Highest: 101 cm</code> and <code>Readings below the zero mark: 157</code>.' },
        { kind: 'p', mt: true, html: 'A child might say "the Rhine went below zero 157 times". But a reading every fifteen minutes means one long dip produces many readings. Picture a light that stays on for an hour: if you look every fifteen minutes you see it on four times, yet it was switched on once. To count switch-ons, you look for the moment it changes from off to on.' },
        { kind: 'code', label: 'Version 2: count the moments it crossed the line', lang: 'Python', code: V2, note: 'It prints <code>Times the river went below the zero mark: 5</code>, then <code>2026-10-06T02:00</code>, <code>2026-10-06T11:45</code>, <code>2026-10-06T14:30</code>, <code>2026-10-06T21:00</code> and <code>2026-10-07T15:30</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'The Rhine at Koblenz, 3 October to 3 November 2026: readings and events (our count)', head: ['Question', 'Answer'], rows: [
          ['Readings in the month', '2,976'],
          ['Readings below the zero mark', '157'],
          ['Dips below the zero mark (events)', '5, all on 6 and 7 October 2026'],
          ['Lowest and highest reading', '-4 cm and 101 cm'],
          ['First reading at 50 cm or more', '25 October 2026, 12:00'],
          ['Back below 50 cm', '30 October 2026, 14:45']
        ] },
        { kind: 'source', html: 'Data: Wasserstraßen- und Schifffahrtsverwaltung des Bundes, PEGELONLINE, gauge KOBLENZ (Rhine) and gauge KOBLENZ OP (Mosel), raw water levels, Datenlizenz Deutschland Zero 2.0, downloaded 3 November 2026. The counts are ours.' },
        { kind: 'p', mt: true, html: 'All five dips happened on 6 and 7 October 2026, when the river hovered just around its zero mark and wobbled across it again and again. Later in the month the level rose: it reached 50 centimetres at midday on 25 October 2026 and stayed above that until the afternoon of 30 October. That was one rise, one event, even though it lasted for hundreds of readings. On 25 October the file even holds 100 readings instead of 96, because German clocks went back an hour that night and the day had 25 hours.' },
        { kind: 'p', html: 'There is a second river in the data. The Mosel gauge KOBLENZ OP, about two kilometres up the Mosel from where it joins the Rhine, read between 196 and 209 centimetres all month. That does not mean the Mosel is two metres deeper than the Rhine: each gauge has its own zero mark, and the Mosel\'s is at 63.075 metres above sea level. Comparing the two raw numbers would be like comparing two children\'s heights measured from different steps.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Switch a lamp on and off a few times while a friend looks every ten seconds and draws a tick when it is on. How many ticks? How many times was it switched on?',
          '<strong>Ages 8 to 10, Scratch.</strong> Store a list of numbers, some below zero. Make a sprite say "dip!" only when a number is below zero and the one before it was not.',
          '<strong>Ages 10 to 12, Python.</strong> Run both versions, then change Version 2 to count the times the Rhine rose above 50 centimetres. You should find one.',
          '<strong>Going further.</strong> Work out how long each dip lasted, in minutes, by counting its readings and multiplying by 15.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free contest',
      h2: 'Can a Koblenz child take part in the Informatik-Biber?',
      lede: 'Usually yes, if the school signs up. It is a half-hour quiz of logic puzzles on screen, no programming required, and the 2026 round starts within days.',
      body: [
        { kind: 'two',
          leftH3: 'The basics',
          left: [
            'Bundesweite Informatikwettbewerbe organises the Informatik-Biber. Entry costs nothing, pupils from grade 3 to grade 13 may take part, and nobody needs to know anything in advance. A primary class gets nine puzzles and half an hour, working alone or two together. This year\'s Biber weeks are 9 to 20 November 2026.',
            'Entry is through the school, which books its classes and runs the quiz during lesson time. A short question to the class teacher tells you whether a Koblenz school is joining.'
          ],
          rightH3: 'And in spring',
          right: [
            'For children who like number puzzles, the Känguru der Mathematik follows in 2027, unusually in April, on 8 April 2027, because the usual March date falls just before the Easter holidays in almost every Land.',
            'Our <a class="ag-inline-link" href="/informatik-biber-practice-in-english">Biber practice page</a> and <a class="ag-inline-link" href="/kangaroo-math-germany-practice">Känguru practice page</a> have original puzzles in English. We never copy the organisers\' tasks, and we are not connected with either contest.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are classes in Koblenz time?',
      lede: 'After school on weekdays and in the morning at weekends suit most Koblenz children. The mentor\'s clock in India is several hours ahead, so a Koblenz afternoon is an Indian evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Koblenz times and the same moment in India', head: ['Koblenz', 'India until 27 March 2027', 'India from 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Koblenz follows German legal time from the Einheitenzeitgesetz: MEZ, an hour ahead of UTC, from the last Sunday of October (25 October 2026), and MESZ, two hours ahead, from 28 March 2027. Indian time never shifts from UTC+5:30. The four rows are examples, not fixed slots.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Rhineland-Palatinate school holidays, 2026/27', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '5 to 16 October 2026'],
          ['Christmas', '23 December 2026 to 8 January 2027'],
          ['Easter', '22 March to 2 April 2027'],
          ['Summer', '28 June to 6 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferienregelung 2026/27, Rhineland-Palatinate row (FER2026_27.pdf, dated 9 October 2025). Classes continue in the holidays for families who want them.' },
        { kind: 'p', mt: true, html: 'Children join from every part of Koblenz and from nearby Lahnstein, Vallendar, Bendorf, Neuwied and Andernach. The class is online, so the only journey is to the family computer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Koblenz child learns, stage by stage',
    lede: 'Our own milestones for children, used to choose the right group and to tell parents what has changed.',
    table: { caption: 'Children\'s coding milestones (ours)', head: ['Stage', 'Usual age', 'The child can'], rows: [
      ['1. Steps in order', '6 to 7', 'Give a sprite a few steps and predict where it ends up'],
      ['2. Repeat and react', '7 to 9', 'Use a loop and make something happen on a click or key'],
      ['3. Remember things', '8 to 10', 'Keep a score and store a list of values'],
      ['4. Typed code', '9 to 11', 'Type a Python program of ten lines that repeats and chooses'],
      ['5. Real data', '10 to 12', 'Open a data file, then tell readings apart from events']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the river project. A child who can tell readings from events will ask the same question about step counters, game scores and school statistics.',
      'You hear what your child made and explained, never just how long they sat at the screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If a number appears many times in a row, ask whether it is one long thing or many short things.',
      'A zero on a ruler is just where the ruler starts. Always ask where the zero is.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Koblenz children',
    lede: 'All taught live in English by a regular mentor, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 6 to 12', courses: [
        { code: 'KOB / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns, logic and careful reading for 6 to 9.' },
        { code: 'KOB / THINK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles in the spirit of the Biber.' },
        { code: 'KOB / THINK / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense without tricks, 5 to 10.' }
      ] },
      { num: 'II', h3: 'Games and play', sub: 'Ages 7 to 12', courses: [
        { code: 'KOB / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks then code in a familiar world.' },
        { code: 'KOB / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox games', blurb: 'Simple games scripted in Luau.' },
        { code: 'KOB / PLAY / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch games with careful AI help, 8 to 12.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Ages 8 to 12', courses: [
        { code: 'KOB / MAKE / 01', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first web page, built by the child.' },
        { code: 'KOB / MAKE / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps with blocks', blurb: 'Phone apps from coloured blocks.' },
        { code: 'KOB / MAKE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How machines learn, without adult accounts.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes fit a Koblenz family week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons once Koblenz schools are out.' },
      { time: 'Weekend mornings', l: 'A calm hour on Saturday or Sunday.' },
      { time: 'One to one', l: 'A time agreed with your child\'s mentor.' }
    ],
    cells: [
      { h3: 'Short tasks', p: 'Small wins every few minutes for young children.' },
      { h3: 'Child at the controls', p: 'The mentor guides; the child clicks and types.' },
      { h3: 'Age groups', p: 'Six year olds learn with six and seven year olds.' },
      { h3: 'Parent notes', p: 'A few lines after classes on progress.' },
      { h3: 'Simple English', p: 'Short sentences, shown on screen.' },
      { h3: 'Class or private', p: 'A class of fifteen to twenty, or a mentor to themselves.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Where an early start can lead: work by teenagers who once began as young as your child. The <a class="ag-inline-link" href="/student-labs">student labs</a> collect the rest.',
  reviewsLede: 'Reviews from parents and students on Google, as they posted them.',

  fees: {
    h2: 'Fees for Koblenz families',
    lede: 'A monthly fee pays for eight live classes. We display it in euro, using the European Central Bank reference rate, and take the payment in US dollars; your bank exchanges the amount, which is why the euro figure on your statement can be slightly different.',
    free: ['A free first class', 'A small puzzle and a first Scratch game', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'The same mentor each week', 'Two classes a week', 'Pay month by month'],
    one: ['Your child with one mentor', 'Pace and projects set for your child', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Koblenz parents ask',
    h2: 'Coding classes for kids in Koblenz: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is in English, live. Because mentors speak in short sentences, demonstrate on screen and adjust to how fast your child works and how they speak, even a Koblenz child with a little school English keeps up.' },
      { q: 'How young can my child start?', a: 'From 6. Six to eight year olds use Scratch blocks, which need no typing. Most children move on to typed Python at around 9.' },
      { q: 'Is coding taught at Koblenz schools?', a: 'Not yet for everyone. Rhineland-Palatinate has no Informatik that all pupils must take, apart from grade 5 at 21 Informatik-Profil-Schulen. From the 2028/29 school year Informatik becomes compulsory at all schools, four weekly hours in total.' },
      { q: 'What does a class look like for a six year old?', a: 'An hour split into short tasks: make a cat walk, make it talk, make it jump when a key is pressed. The mentor praises each small step and keeps the pace gentle.' },
      { q: 'When are classes in Koblenz time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most children come between about 14:30 and 17:30 on weekdays, or on a weekend morning.' },
      { q: 'Can my child enter the Informatik-Biber?', a: 'If the school registers, yes. The contest is free for grades 3 to 13 and involves puzzles, not programming. The 2026 window is 9 to 20 November, and primary children get nine puzzles to do in half an hour.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live online. India is four and a half hours ahead of Koblenz in winter, so a 15:00 class in Koblenz is 19:30 for the mentor.' },
      { q: 'How big are the groups?', a: 'Group classes have fifteen to twenty children of similar age. For a mentor all to themselves, choose one to one, two private classes a week.' },
      { q: 'How are fees paid?', a: 'Once a month. You see the fee in euro, calculated from the ECB reference rate; the charge itself is in US dollars and your bank changes it into euro, so a few cents\' difference is normal. There is no charge for the first class.' },
      { q: 'What is the river project?', a: 'Children aged about 10 to 12 use a month of real Rhine levels from the Koblenz gauge. They find 157 readings below the gauge\'s zero mark but only five moments when the river crossed it, and learn why those are different questions.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Koblenz parents.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Start here for every German city and Land.' },
      { href: '/coding-classes-in-rhineland-palatinate', label: 'Coding classes in Rhineland-Palatinate', p: 'The Land\'s rules and dates.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'The national page for 6 to 12.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes in Germany', p: 'Where young children begin.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Original puzzles in English.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'During the free hour your child cracks a small puzzle and makes something move in Scratch. Meanwhile the mentor notices how your child approaches a problem and how much English feels easy, then recommends a course and a group.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online classes, taught in English only by mentors in India. WhatsApp is the fastest way to ask a question, in English.',
    formNote: 'The first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/ai-course-for-kids-germany', label: 'AI course for kids' }
      ] },
      { h4: 'Nearby', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-rhineland-palatinate', label: 'Rhineland-Palatinate' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count the moments, not the ticks'
  },

  personalityCss: `
.ag-root.ag-kob .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-kob .ag-capsule { border-left-width: 5px; }
.ag-root.ag-kob .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-kob .ag-table caption { text-align: left; }
.ag-root.ag-kob .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich and school-type overview; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national summary and Rhineland-Palatinate page); KMK Ferienregelung 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); Känguru der Mathematik 2027; Einheitenzeitgesetz; Destatis GV-ISys. WSV PEGELONLINE gauges KOBLENZ (Rhine) and KOBLENZ OP (Mosel), Datenlizenz Deutschland Zero 2.0.',
    localProject: 'The Rhine gauge at Koblenz: an original Python project on 2,976 raw readings from 3 October to 3 November 2026, where 157 readings sit below the gauge zero but only five dips (all on 6 and 7 October 2026) crossed it, and one rise above 50 cm lasted from 25 to 30 October; with a lamp exercise for 6 to 8 and a Scratch version. Lesson family: count events, not readings.',
    requiredMentions: ['rhein_koblenz.csv', 'Readings below the zero mark: 157', 'Times the river went below the zero mark: 5', 'Lowest: -4 cm  Highest: 101 cm', '57.692 metres above sea level', '21 Informatik-Profil-Schulen', 'Lahnstein, Vallendar, Bendorf, Neuwied and Andernach', 'Count the moments, not the ticks'],
    sources: [
      { claim: 'Rhineland-Palatinate without compulsory Informatik for all; compulsory at all schools from 2028/29.', url: 'https://informatik-monitor.de/' },
      { claim: '21 Informatik-Profil-Schulen with compulsory Informatik in grade 5 since 2021/22.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/rheinland-pfalz' },
      { claim: 'Rhineland-Palatinate school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'PEGELONLINE gauge data and its DL-DE Zero 2.0 licence.', url: 'https://www.pegelonline.wsv.de/gast/nutzungsbedingungen' },
      { claim: 'Informatik-Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' }
    ],
    rejectedClaims: [
      'Any flood or emergency framing: the month shows low water and an ordinary rise, described only as levels.',
      'Comparing Rhine and Mosel raw levels as depths: refused; each gauge has its own zero.',
      'Naming Koblenz schools, including profile schools, as sources of students: refused.',
      'Any affiliation with the WSV, BWINF, the Känguru organisers or the city: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
