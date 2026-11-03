'use strict';
// Coding classes for kids in Heidelberg (ag- city page, Germany cluster P6 row DE178, tier-2 slug shape
// coding-classes-for-kids, ages 6 to 12).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Spine: Baden-Württemberg has just made Informatik compulsory from grade 5, so a Heidelberg child of 6 to 10 is in the
// years before it; what a child can learn first; and one evening of Heidelberg's street weather sensors, where the
// average says 22.5 degrees on a November night.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched
// 2 Nov 2026; copies under src-pages/coding-classes-for-kids-in-heidelberg-germany/):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page: "Mit dem Schuljahr 2025/2026 wird schulartübergreifend in der
//    Sekundarstufe I das Pflichtfach Informatik und Medienbildung eingeführt, wobei die Umsetzung zunächst in den
//    Jahrgangsstufen 5 und 6 erfolgt" (fact 67). National page: BW among four Länder meeting the 4 compulsory hours
//    recommendation (91); BW among the Länder where about one in twelve Oberstufe pupils takes Informatik (99).
//  - KMK primary page: Grundschule from the first to the fourth grade (fact 1).
//  - KMK FER2026_27.pdf, BW rows: "Baden-Württemberg (4) 26.10. - 30.10. / 31.10. 23.12. - 09.01. -- 25.03. /
//    30.03. - 03.04. 18.05. - 29.05. 29.07. - 11.09." (raw text lines 16 to 18).
//  - bwinf.de: Biber free, grades 3 to 13, no prior knowledge (129, 130); primary pupils 9 tasks in 30 minutes (132);
//    Biberwochen 9 to 20 November 2026 (133). mathe-kaenguru.de: Känguru 2027 on 8 April 2027 (183), registration from
//    1 December 2026 to 31 January 2027 (184).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Heidelberg 155,756; Baden-Württemberg 11,245,898.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Heidelberg, Amt für Umweltschutz, Gewerbeaufsicht und Energie, "Wetterstationen der Stadt Heidelberg
//    (Barani)", via GovData https://ckan.govdata.de/dataset/wetterstationen-der-stadt-heidelberg-barani, licence
//    CC0 1.0 (creativecommons.org/publicdomain/zero/1.0 on both resources). Entities endpoint
//    api.datenplattform.heidelberg.de/ckan/or/environment/main/barani/v2/entities, downloaded 3 November 2026 about
//    17:55 UTC, 221,270 bytes, sha256 503966827e53...b03e6ce0ad8; 25 WeatherObserved entities (two are wind sensors with
//    no temperature). Converted to heidelberg_sensors.csv (place from the entity name, temperature, dateObserved in UTC).
// Our own calculations (scratchpad de/w/T5/heidelberg: v1.py, v2.py, python3 -I): v1 prints "Sensors with a
// temperature: 23", "Average: 22.5", "Warmest: 104.7  Coldest: 7.2". v2 prints "Readings from today: 20  Middle value:
// 8.4", three lines "Does not agree with its neighbours:" (Neuenheim Haydnstr. 104.7, Altstadt Uniplatz West 104.7,
// Handschuhsheim Mühltalstr. 21.8), "Readings we trust: 17", "Average we trust: 8.3". Stale readings: Neuenheim
// Bürgeramt (8 May 2023), Pfaffengrund Richard Drach Str (27 July 2023), Bergheim Alte Eppelheimerstr. (19 July 2026).
// Lesson family: before you average sensors, check each reading's date and whether it agrees with its neighbours (the
// middle value).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'temps = []',
  'with open("heidelberg_sensors.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["temp"] != "":',
  '            temps.append(float(row["temp"]))',
  '',
  'print("Sensors with a temperature:", len(temps))',
  'print("Average:", round(sum(temps) / len(temps), 1))',
  'print("Warmest:", max(temps), " Coldest:", min(temps))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'rows = []',
  'with open("heidelberg_sensors.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        if row["temp"] != "":',
  '            rows.append((row["place"], float(row["temp"]), row["time"]))',
  '',
  'today = [r for r in rows if r[2].startswith("2026-11-03")]',
  'values = sorted(t for _, t, _ in today)',
  'middle = values[len(values) // 2]',
  'print("Readings from today:", len(today), " Middle value:", middle)',
  '',
  'good = []',
  'for place, temp, time in today:',
  '    if abs(temp - middle) > 3:',
  '        print("Does not agree with its neighbours:", place, temp)',
  '    else:',
  '        good.append(temp)',
  '',
  'print("Readings we trust:", len(good))',
  'print("Average we trust:", round(sum(good) / len(good), 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Heidelberg: coding for kids' },
  slug: 'coding-classes-for-kids-in-heidelberg-germany',
  code: 'hei',
  accent: '#715735',
  accentRationale: 'Coding classes for kids, Heidelberg: a warm sandstone brown #715735 for the red-brown Neckar sandstone of the old town and castle; contrast 5.47 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-baden-wuerttemberg', name: 'Baden-Württemberg' }],
  routeLabel: 'Coding classes for kids in Heidelberg',
  title: 'Coding Classes for Kids in Heidelberg: Live, in English',
  description: 'Coding classes for kids in Heidelberg aged 6 to 12, live online in English: the new BW Informatik subject, a first contest, and a Heidelberg weather sensor project.',
  ogDescription: 'Live coding lessons in English for Heidelberg children of 6 to 12: when Baden-Württemberg schools start Informatik, what younger children can learn first, and a project on the city\'s street weather sensors that catches three broken readings.',
  twitterDescription: 'Coding for Heidelberg kids, live in English: BW Informatik from grade 5 and a weather sensor project.',
  pageName: 'Coding Classes for Kids in Heidelberg',
  webPageDescription: 'A guide for Heidelberg parents of children aged 6 to 12 to learning to code in English, built on Gesellschaft für Informatik and KMK sources, BWINF and Känguru dates, and an original project on the City of Heidelberg\'s open weather sensor data.',
  courseDescription: 'Live online coding classes in English for Heidelberg children aged 6 to 12: puzzles and Scratch first, then typed Python and small data projects, one to one or in an age-matched group of fifteen to twenty, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Baden-Württemberg', href: '/coding-classes-in-baden-wuerttemberg' }],
  crumbLabel: 'Kids in Heidelberg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#bw', label: 'BW school' },
    { href: '#sensors', label: 'Weather' },
    { href: '#english', label: 'In English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Heidelberg &middot; Children 6 to 12 &middot; Live online',
  h1: 'Coding classes for kids in Heidelberg',
  lede: 'A Heidelberg pupil now meets Informatik as a required subject in grade 5; Baden-Württemberg brought that rule in for 2025/26. That is good news, and it also means a Heidelberg child in Grundschule has four years before the first computing lesson. Here is what a child of 6 to 12 can learn in those years, how our live English classes work for that age, a free contest that fits a primary pupil, and a small project on Heidelberg\'s own street weather sensors that ends with a lesson about not believing every number.',
  secondaryCta: { href: '#sensors', label: 'See the weather project' },
  wa: 'Hello Modern Age Coders, we live in Heidelberg and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Teaching children live since 2020 &middot; 10,000+ students worldwide &middot; one mentor per child, in English',
  spec: [
    ['Ages', '6 to 12, in age bands'],
    ['First steps', 'Puzzles, Scratch, then Python from about 9'],
    ['Class size', 'Fifteen to twenty, or just your child'],
    ['Lesson length', 'One hour, twice a week'],
    ['Teachers', 'Mentors in India, teaching in English'],
    ['Trial', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs coding classes for kids in Heidelberg as live video lessons in English, for any child from 6 to 12. Younger children start with puzzles and Scratch, older ones move to typed Python and small projects with real Heidelberg data. One regular mentor matches your child\'s pace and accent, one to one or in an age-matched batch of up to twenty, after school or at weekends.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Which coding course suits a Heidelberg child of 6 to 12?',
    lede: 'The right first course depends more on how a child reads and types than on their exact age. These three cover most Heidelberg families.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'HEI / 01', title: 'Reasoning for Young Thinkers', note: 'Built for children of six to nine: spotting a rule, putting things in order and solving small puzzles, the habits a coder needs before the first line.' },
      { course: 'kids-coding-blocks-masterclass', code: 'HEI / 02', title: 'Coding for Kids', note: 'The long route from Scratch blocks to games, apps and a first taste of AI, with batches grouped by age.' },
      { course: 'python-ai-kids-masterclass', code: 'HEI / 03', title: 'Python and AI for Kids', note: 'For confident readers of about nine and up. Real typed code, drawings, games and data, like the sensor project below.' }
    ]
  },

  sections: [
    {
      id: 'bw',
      eyebrow: 'School in Baden-Württemberg',
      h2: 'When does a Heidelberg child first have Informatik at school?',
      lede: 'In grade 5, under a rule that is only one school year old. Before that, in Grundschule, there is no Informatik subject.',
      body: [
        { kind: 'two',
          leftH3: 'A new compulsory subject',
          left: [
            'The Gesellschaft für Informatik reports that from the 2025/26 school year Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung across secondary school types, beginning with grades 5 and 6 and adding a grade each year. Its 2026/27 Informatik-Monitor counts Baden-Württemberg among four Länder that now meet the recommendation of four compulsory hours.',
            'For a Heidelberg family, that means a child who starts secondary school will meet computing as a real subject, in a Gymnasium, Realschule or Gemeinschaftsschule alike.'
          ],
          rightH3: 'Four years before it starts',
          right: [
            'As in most Länder, Heidelberg children spend grades 1 to 4 at Grundschule. Those are the years from about 6 to about 10, and they have no Informatik subject of their own.',
            'The monitor adds a less cheerful figure: across Baden-Württemberg roughly one pupil in twelve in the Oberstufe picks Informatik. The report does not say why so few choose it; our view is simply that a child who already enjoys coding has one more reason to keep it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing for a Heidelberg child, by grade', head: ['Grades', 'Typical age', 'At school', 'What our classes add'], rows: [
          ['1 and 2', '6 to 8', 'Grundschule, no Informatik', 'Puzzles, patterns and Scratch stories'],
          ['3 and 4', '8 to 10', 'Grundschule, no Informatik', 'Scratch games, then typed Python for confident readers'],
          ['5 and 6', '10 to 12', 'Compulsory Informatik und Medienbildung', 'Python projects that go further than the lesson'],
          ['From 7', '12 and up', 'The new subject grows year by year', 'Teen courses in Python, web and AI']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national page and page for Baden-Württemberg; KMK, Primarbereich; both read on 2 November 2026. The right-hand column is ours. Population: Destatis, Gemeindeverzeichnis, 31 December 2024: Heidelberg 155,756, Baden-Württemberg 11,245,898.' },
        { kind: 'p', mt: true, html: 'So the question for a Heidelberg parent is not whether school will teach computing, because from grade 5 it will. It is whether your child arrives in grade 5 already used to breaking a problem into steps, testing an idea and fixing a mistake without giving up. That is what the first years of our classes are for. We teach alongside school, never instead of it, and the school\'s Informatik teacher stays the one who sets the marks.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can a Heidelberg child learn coding in English if English is not their first language?',
      lede: 'Yes. Every class is live and in English only, and the mentor shapes the English to the child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Short, clear sentences', p: 'Mentors speak slowly to younger children, show before they tell and check with a question rather than a long explanation. A seven year old needs only a handful of words to start: move, turn, repeat, if.' },
          { h3: 'Your child\'s accent is fine', p: 'The mentor gets used to how your child speaks within a class or two. A child who answers with one word, or drops in a German word, is understood and simply hears the English one back.' },
          { h3: 'A bonus for school', p: 'Heidelberg children at German schools practise listening and speaking English in a setting that is not a test. Children at bilingual or international schools in the region carry on in the language they already learn in.' }
        ] },
        { kind: 'p', mt: true, html: 'We say plainly that we do not offer lessons in German. Your child\'s mentor works from India over a live video link and stays the same from one week to the next. By the second month that mentor can tell whether your child wants harder puzzles, needs a quiet pause before answering, or learns fastest by tinkering with a finished game.' }
      ]
    },
    {
      id: 'sensors',
      tint: 'tint',
      eyebrow: 'A real Heidelberg project',
      h2: 'Was it really 22.5 degrees in Heidelberg on a November evening?',
      lede: 'Heidelberg has small weather sensors on streets and squares across the city, and it shares their readings as open data that anyone may reuse. One evening of readings is enough for a project that teaches children to ask whether a number can be true.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The City of Heidelberg publishes the readings of its Barani street weather sensors through its data platform, listed on GovData with the licence CC0 1.0. We downloaded every sensor\'s latest reading on 3 November 2026, at about 17:55 UTC, which was just before 19:00 in Heidelberg.',
            'There are 25 sensors in the file. Two are wind sensors with no temperature, which leaves 23 temperatures, from places such as Bismarckplatz, Uniplatz, Bahnstadt, Pfaffengrund, Wieblingen and Boxberg.'
          ],
          rightH3: 'The question',
          right: [
            'What was the temperature in Heidelberg that evening? A child\'s first idea is a good one: add up all the sensors and divide by how many there are. That is the average.',
            'Children work from a tidy file called heidelberg_sensors.csv. Each line holds a place name, a temperature and the moment it was measured. Version 1 follows the child\'s plan exactly.'
          ] },
        { kind: 'code', label: 'Version 1: average every sensor', lang: 'Python', code: V1, note: 'It prints <code>Sensors with a temperature: 23</code>, <code>Average: 22.5</code> and <code>Warmest: 104.7  Coldest: 7.2</code>.' },
        { kind: 'p', mt: true, html: 'A Heidelberg evening in November at 22.5 degrees? Children laugh at this before any adult does. The warmest reading, 104.7, is hotter than boiling water, and it appears three times. Looking at the file shows more: one sensor in Neuenheim last reported in May 2023, one in Pfaffengrund in July 2023, and one in Bergheim on 19 July 2026, a summer evening. Their numbers are old news, still sitting in the list.' },
        { kind: 'p', html: 'So Version 2 asks two questions of every reading. Is it from today? And does it roughly agree with its neighbours? For the second question we sort today\'s readings and take the one in the middle, then set aside any reading more than 3 degrees away from it.' },
        { kind: 'code', label: 'Version 2: today only, and close to the middle', lang: 'Python', code: V2, note: 'It prints <code>Readings from today: 20  Middle value: 8.4</code>, then <code>Does not agree with its neighbours:</code> for Neuenheim Haydnstr. 104.7, Altstadt Uniplatz West 104.7 and Handschuhsheim Mühltalstr. 21.8, then <code>Readings we trust: 17</code> and <code>Average we trust: 8.3</code>.' },
        { kind: 'p', mt: true, html: 'The trusted average is 8.3 degrees, which matches a damp November evening. The middle value works as a referee because a few wild numbers cannot move it: the sensor in the middle of the queue is still an ordinary one. Notice what Version 2 did not throw out. Boxberg read 7.2, more than a degree below the middle, but a degree or so is a believable difference between two parts of one city, so it stays. The rule is "far from the neighbours", not "different".' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Heidelberg sensor readings set aside, 3 November 2026 (our check)', head: ['Sensor', 'Reading', 'Why we set it aside'], rows: [
          ['Neuenheim Haydnstr.', '104.7', 'Far from the middle value of 8.4'],
          ['Altstadt Uniplatz West', '104.7', 'Far from the middle value of 8.4'],
          ['Handschuhsheim Mühltalstr.', '21.8', 'Far from the middle value of 8.4'],
          ['Neuenheim Bürgeramt', '104.7', 'Last reading 8 May 2023'],
          ['Pfaffengrund Richard Drach Str', '18.7', 'Last reading 27 July 2023'],
          ['Bergheim Alte Eppelheimerstr.', '21.8', 'Last reading 19 July 2026']
        ] },
        { kind: 'source', html: 'Data: Stadt Heidelberg, Wetterstationen der Stadt Heidelberg (Barani), licence CC0 1.0, latest readings downloaded 3 November 2026 at about 17:55 UTC. The checks and averages are our own. The data does not say why the readings are wrong, so we do not guess; 104.7 appearing three times looks like an error code rather than a temperature, but that is a question to ask the data owner, not a fact.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Ask five family members to guess the temperature outside, then add a sixth guess of 100. Line the guesses up from smallest to largest and point to the middle one. Did the 100 change it?',
          '<strong>Ages 8 to 10, Scratch.</strong> Put the 23 readings in a list, work out the average, then delete the three biggest and do it again. Say in one sentence why the answers differ.',
          '<strong>Ages 10 to 12, Python.</strong> Start with Version 1. Open the CSV and find the oldest date by eye. Now code your own date filter, and only then compare it with Version 2.',
          '<strong>Going further.</strong> Change the 3 degrees in Version 2 to 1 degree. Which honest sensor is now thrown out by mistake?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'First contests',
      h2: 'Is there a free coding contest for a Heidelberg primary pupil?',
      lede: 'Yes, and it runs this month. Maths lovers have a second one in April 2027. We are not connected to either organiser.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik-Biber, November 2026',
          left: [
            'Bundesweite Informatikwettbewerbe organises the Informatik-Biber, which costs nothing and asks for no coding experience. It is open from grade 3 up to grade 13. A primary pupil gets nine tasks and half an hour; the 2026 Biberwochen are 9 to 20 November 2026.',
            'Entry goes through a school, which signs its classes up and holds the contest during a lesson. A quick message to the class teacher tells you whether your child\'s school is in.'
          ],
          rightH3: 'Känguru der Mathematik, April 2027',
          right: [
            'The Känguru maths contest normally sits in March, but its organisers moved the 2027 contest to 8 April 2027 because the usual date fell just before the Easter holidays in almost every Land. Online registration opens on 1 December 2026 and closes on 31 January 2027.',
            'Like the Biber, it is entered through the school, which registers the class.'
          ] },
        { kind: 'p', mt: true, html: 'Neither contest\'s tasks appear in our lessons. Our mentors invent fresh puzzles about hidden rules, orderings and short paths, and families who want the real style are sent to the organisers\' own free practice sets.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the classes in Heidelberg time?',
      lede: 'Classes sit in Heidelberg afternoons and weekend mornings, which are evenings and afternoons for a mentor in India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Heidelberg times and the clock in India', head: ['Heidelberg', 'India, winter until 27 March 2027', 'India, summer from the end of March 2027'], rows: [
          ['Tuesday 15:15', '19:45', '18:45'],
          ['Friday 14:15', '18:45', '17:45'],
          ['Saturday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Heidelberg runs on MEZ (UTC+1) through the winter and MESZ (UTC+2) through the summer, as the Einheitenzeitgesetz sets out. This autumn\'s change was on 25 October 2026; the spring one falls on 28 March 2027. Indian clocks never change from UTC+5:30, so the gap is four and a half hours now and three and a half from late March. Treat the rows as examples; batches have no fixed time.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Baden-Württemberg school holidays 2026/27 (KMK table)', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '26 to 31 October 2026'],
          ['Christmas', '23 December 2026 to 9 January 2027'],
          ['Easter', '25 March, then 30 March to 3 April 2027'],
          ['Whitsun', '18 to 29 May 2027'],
          ['Summer', '29 July to 11 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Stand 9 October 2025, first and last holiday days for Baden-Württemberg. Classes continue in the holidays; many families pause for a trip and simply carry on afterwards.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How will I know my child is making progress?',
    lede: 'Five stages we use to match a child to a batch and to show parents what has moved on. They are ours, not a school scale.',
    table: { caption: 'Five stages for Heidelberg children (our scale)', head: ['Stage', 'Usual age', 'Your child can'], rows: [
      ['1. Order', '6 to 7', 'Put picture steps in the right order and spot the step that is missing'],
      ['2. Repeat', '7 to 8', 'Make a Scratch character repeat a dance and stop at the right moment'],
      ['3. Decide', '8 to 9', 'Use if and else so a game reacts differently to a win and a loss'],
      ['4. Type', '9 to 11', 'Type a short Python program and calmly read the error message it gives'],
      ['5. Doubt', '10 to 12', 'Check data for old or impossible values before trusting an answer']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the sensor project. It is the stage we care about most, because a child who asks "can that be true?" carries the question far beyond coding.',
      'Reports to parents describe what was built and what your child could explain, not screen time.'
    ] },
    right: { h3: 'For children', ps: [
      'If a computer tells you something odd, it is not always right. Look at the numbers it used.',
      'The middle of a sorted list is hard to fool. One silly number cannot move it far.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Heidelberg children',
    lede: 'Each is taught live in English by a regular mentor, for a single child or an age-matched batch.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 5 to 14', courses: [
        { code: 'HEI / THI / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic puzzles in the spirit of the Biber, all written by us.' },
        { code: 'HEI / THI / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How a machine learns from examples, with no adult accounts.' },
        { code: 'HEI / THI / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for 5 to 10 year olds, without tricks.' }
      ] },
      { num: 'II', h3: 'Games and blocks', sub: 'Ages 6 to 14', courses: [
        { code: 'HEI / GAM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A complete first course that ends with real games.' },
        { code: 'HEI / GAM / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a world children already love.' },
        { code: 'HEI / GAM / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Scripted Roblox games in Luau, 8 to 14.' }
      ] },
      { num: 'III', h3: 'Building things', sub: 'Ages 8 to 12', courses: [
        { code: 'HEI / MAK / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps for kids', blurb: 'Phone apps built with blocks that really run.' },
        { code: 'HEI / MAK / 02', slug: 'kids-ai-web-development-course', title: 'First websites', blurb: 'A child\'s own web page, from 9.' },
        { code: 'HEI / MAK / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'A twelve-week build towards one shared event.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live coding classes work for a Heidelberg family?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After Grundschule', l: 'Heidelberg afternoons, once homework is done.' },
      { time: 'Saturday', l: 'A calm late-morning slot for younger children.' },
      { time: 'Solo', l: 'A time you agree with your child\'s own mentor.' }
    ],
    cells: [
      { h3: 'One familiar face', p: 'The same mentor every week, who learns your child\'s way of thinking.' },
      { h3: 'Age bands', p: 'Six year olds learn with six year olds, not with twelves.' },
      { h3: 'Hands on', p: 'Your child drives the mouse and keyboard from the start.' },
      { h3: 'Gentle English', p: 'Short sentences, shown first, repeated kindly.' },
      { h3: 'Notes for parents', p: 'What was made, what was tricky, what is next.' },
      { h3: 'Batch or solo', p: 'A class of up to twenty, or a mentor all to themselves.' }
    ]
  },

  projectsH2: 'Where young coders can go next',
  projectsLede: 'Projects by some of our older students, to show where an early start can lead; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees for Heidelberg families',
    lede: 'Each month\'s fee pays for eight live classes. We print the amounts in euro, converted with the reference rate of the European Central Bank, while the card payment itself goes through in US dollars; your bank handles the exchange, so the figure on the statement may move a little.',
    free: ['A free first class', 'A puzzle and a first small program', 'No card needed'],
    group: ['An age-matched batch of fifteen to twenty', 'One regular mentor', 'Two classes each week', 'Monthly, stop whenever you like'],
    one: ['Your child with their own mentor', 'Pace and projects set around your child', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Heidelberg parents ask',
    h2: 'Coding classes for kids in Heidelberg: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and only ever in English. Mentors keep sentences short, demonstrate on screen before they explain, and tune their speed to how your child speaks and listens, which makes them easy to follow for a child whose English is still growing.' },
      { q: 'From what age can my child start?', a: 'At 6. The youngest begin with picture puzzles and Scratch blocks that click into place, so no typing is needed. Around 9, children who read comfortably can switch to typed Python.' },
      { q: 'Do Heidelberg schools teach coding?', a: 'From grade 5. Baden-Württemberg introduced the compulsory subject Informatik und Medienbildung from the 2025/26 school year, starting in grades 5 and 6. Grundschule, grades 1 to 4, has no Informatik subject.' },
      { q: 'Will this clash with Informatik in grade 5?', a: 'No. We teach alongside school, and the school course and its teacher remain the ones that count for marks. Children who have coded before usually find the start of the school subject easier and more fun.' },
      { q: 'When are classes in Heidelberg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Heidelberg children take an afternoon slot or a Saturday morning.' },
      { q: 'Who are the teachers?', a: 'Mentors based in India who teach live over video. India is four and a half hours ahead of Heidelberg in winter, so a 15:15 class here is 19:45 for the mentor.' },
      { q: 'How many children are in a class?', a: 'Batches hold fifteen to twenty children close in age. If you would rather your child had the mentor alone, the one-to-one plan means two private lessons weekly, scheduled with you.' },
      { q: 'What is the Informatik-Biber?', a: 'A national online puzzle contest with no entry fee and no coding needed, for grades 3 up to 13. Primary children get nine tasks and 30 minutes. This year it is held between 9 and 20 November 2026, with entry through the school.' },
      { q: 'What does it cost?', a: 'You pay month by month. Prices here appear in euro using the European Central Bank reference rate, the charge runs in US dollars, and your bank converts it, so expect a small difference on the statement. Trying the first class is free.' },
      { q: 'Does my child use AI chatbots in class?', a: 'Not on adult accounts. Younger children learn how AI works through safe examples, and every child writes and explains their own code. We teach thinking, not copying answers from people or machines.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Heidelberg parents.',
    items: [
      { href: '/coding-classes-in-baden-wuerttemberg', label: 'Coding classes in Baden-Württemberg', p: 'The Land\'s school rules and dates.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'Our children\'s courses across Germany.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'The usual first step for under nines.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'How children learn about AI safely.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools allow which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'In the trial lesson your child solves a little puzzle and builds a very small program. Watching that, the mentor learns how your child tackles problems and copes with English, and recommends a course and an age band.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our classes, and <a class="ag-inline-link" href="/courses">all courses</a> lists each syllabus.',
    note: 'Our mentors teach from India, live and in English only. Message us on WhatsApp in English for the quickest answer.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Kids coding in Germany' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/ai-course-for-kids-germany', label: 'AI for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-baden-wuerttemberg', label: 'Baden-Württemberg' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask the middle value first'
  },

  personalityCss: `
.ag-root.ag-hei .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-hei .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-hei .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-hei .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-hei .ag-code-note { font-size: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Baden-Württemberg pages); KMK Primarbereich and Ferien im Schuljahr 2026/2027; Bundesweite Informatikwettbewerbe, Informatik-Biber; Känguru der Mathematik; Destatis Gemeindeverzeichnis 31.12.2024; Einheitenzeitgesetz; all read 2 November 2026. Stadt Heidelberg, Wetterstationen der Stadt Heidelberg (Barani), CC0 1.0, downloaded 3 November 2026.',
    localProject: 'Heidelberg street weather sensors: an original Python project on 23 temperature readings from the City of Heidelberg\'s Barani sensors on the evening of 3 November 2026, where the plain average is 22.5 degrees because of three 104.7 readings, one 21.8 and three stale sensors; checking dates and distance from the middle value gives 17 trusted readings averaging 8.3. Lesson family: check each reading\'s date and its neighbours before you average.',
    requiredMentions: ['heidelberg_sensors.csv', 'Average: 22.5', 'Readings from today: 20  Middle value: 8.4', 'Readings we trust: 17', 'Average we trust: 8.3', 'Informatik und Medienbildung', 'Heidelberg 155,756', 'Ask the middle value first'],
    sources: [
      { claim: 'Baden-Württemberg compulsory Informatik und Medienbildung from 2025/26, grades 5 and 6 first.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW meets the four-hour recommendation; about one in twelve Oberstufe pupils take Informatik.', url: 'https://informatik-monitor.de/' },
      { claim: 'Grundschule grades 1 to 4.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'BW school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru 2027 date and registration.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Heidelberg sensor readings and licence.', url: 'https://ckan.govdata.de/dataset/wetterstationen-der-stadt-heidelberg-barani' }
    ],
    rejectedClaims: [
      'Why three sensors read 104.7: the data does not say, so the page calls it a question for the data owner.',
      'That Boxberg is cooler because of its height: not sourced, so the page says only that the difference is believable.',
      'Naming Heidelberg schools or international schools as sources of students: refused.',
      'Any link to BWINF, the Känguru organisers or the City of Heidelberg: none.'
    ]
  }
};
