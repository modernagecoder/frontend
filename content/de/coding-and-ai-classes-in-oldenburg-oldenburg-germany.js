'use strict';
// Coding and AI classes in Oldenburg (Oldenburg), Niedersachsen (ag- city page, Germany cluster P6 row DE170, tier-2
// slug shape coding-and-ai: all ages). Owner 2026-11-02: classes are live, in English only, with mentors who match the
// learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "use, build, judge". Learning AI has three layers (using tools, building models, judging what they say), and
// each age starts at a different layer. The project is an anomaly detector on 38 years of ship counts at the Oldenburg
// lock: it flags six unusual years, and only a human can say which flag is a real event and which is a gap in the
// bookkeeping.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-ai-classes-in-oldenburg-oldenburg-germany/):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page: "An allen allgemeinbildenden Schularten wird seit dem Schuljahr
//    2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10 unterrichtet." (FACTS 79); Oberstufe G9, grade 11
//    Einführungsphase, 12 and 13 Qualifikationsphase (50). National page: "Schlusslichter sind Baden-Württemberg,
//    Niedersachsen und Bremen: Hier belegt ungefähr jede zwölfte Person das Fach Informatik." (99).
//  - KMK, Bildung in der digitalen Welt: 2026 framework adds AI competences (FACTS 102).
//  - KMK Ferienkalender 2026/27: "Niedersachsen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04. 07.05.
//    und 18.05. 08.07. - 18.08." (FACTS 277).
//  - Jugend forscht: registration by 30 November, regional contests in February, national final in May (FACTS 197);
//    junior from grade 4 up to 14 (195).
//  - Destatis GV-ISys 31.12.2024: Oldenburg (Oldenburg) 176,614; Niedersachsen 8,004,489 (places.tsv).
//  - AI tool ages: content/ai-tool-age-audit.json (Claude 18+; ChatGPT parent's permission under 18).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Oldenburg (Oldb), "Schleuse Oldenburg seit 1987", opendata.oldenburg.de, file
//    1013_Schleuse_Oldenburg.csv (2,367 bytes), licence Datenlizenz Deutschland Namensnennung 2.0 (dataset page shows
//    dl-de/by-2-0; GovData dcat-ap.de dl-by-de/2.0), modified 28 May 2026, downloaded 3 November 2026. Notes:
//    "Bergfahrt = von der Weser kommend", "Talfahrt = zur Weser fahrend", "Für das Jahr 2019 liegen keine Daten vor."
// Our own calculations (scratchpad de/w/T4/bin old_v1.py, old_v2.py; python3 -I): 38 years 1987 to 2025 (2019 empty);
// mean yearly change -2.0 percent, spread 8.7; |z| > 1.5 flags 1988 (11.5 %, z 1.5), 1994 (-17.1 %, -1.7), 2003 (14.0 %,
// 1.8), 2010 (-16.3 %, -1.6), 2024 (-15.8 %, -1.6), 2025 (13.3 %, 1.8). 1994: up 3757 + down 4039 = 7796 against a total
// column of 6033 (1993 and 1995 agree). 2005 also differs, by 18. Tonnage per ship: 1987 about 472 t, 2025 about 510 t.
// Lesson family: an anomaly detector says "unusual", not "wrong"; flag by z-score, then explain every flag yourself.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "from statistics import mean, pstdev",
  "",
  "ships = {}",
  "with open(\"schleuse_oldenburg.csv\", encoding=\"utf-8\") as table:",
  "    for row in csv.reader(table, delimiter=\";\"):",
  "        if row[0].isdigit() and row[7] != \"\":",
  "            ships[int(row[0])] = int(row[7])        # column 8: ships in total",
  "",
  "print(\"Years with data:\", len(ships), \"from\", min(ships), \"to\", max(ships))",
  "",
  "change = {}",
  "for year in ships:",
  "    if year - 1 in ships:",
  "        change[year] = 100 * (ships[year] - ships[year - 1]) / ships[year - 1]",
  "",
  "centre = mean(change.values())",
  "spread = pstdev(change.values())",
  "print(\"Typical yearly change:\", round(centre, 1), \"%  spread:\", round(spread, 1))",
  "",
  "for year in sorted(change):",
  "    z = (change[year] - centre) / spread",
  "    if abs(z) > 1.5:",
  "        print(\"Unusual:\", year, round(change[year], 1), \"%  z =\", round(z, 1))"
].join('\n');

const V2 = [
  "with open(\"schleuse_oldenburg.csv\", encoding=\"utf-8\") as table:",
  "    for row in csv.reader(table, delimiter=\";\"):",
  "        if row[0] in (\"1993\", \"1994\", \"1995\"):",
  "            up, down, total = int(row[1]), int(row[4]), int(row[7])",
  "            print(row[0], \"up\", up, \"+ down\", down, \"=\", up + down, \" total column:\", total)"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Oldenburg: coding and AI' },
  slug: 'coding-and-ai-classes-in-oldenburg-oldenburg-germany',
  code: 'cao',
  accent: '#33594A',
  accentRationale: 'Coding and AI in Oldenburg: a canal green #33594A for the Küstenkanal and the Hunte at the city lock in the project; contrast 6.39 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Coding and AI classes in Oldenburg',
  title: 'Coding and AI Classes in Oldenburg: Live Online, in English',
  description: 'Coding and AI classes in Oldenburg, Lower Saxony, for kids, teens and adults: live online in English, Informatik in Niedersachsen, and a project on the city lock.',
  ogDescription: 'Coding and AI taught live online in English to learners of every age in Oldenburg: using, building and judging AI, what Lower Saxony schools teach, and an original anomaly detector on 38 years of ships at the Oldenburg lock.',
  twitterDescription: 'Coding and AI for every age in Oldenburg, live in English, with an anomaly detector on the city lock data.',
  pageName: 'Coding and AI Classes in Oldenburg',
  webPageDescription: 'A guide for families and adults in Oldenburg (Oldenburg), Lower Saxony, to live online coding and AI classes in English, with Niedersachsen school facts from the Gesellschaft für Informatik and the KMK, and an original Python anomaly detector on Stadt Oldenburg\'s open data on ships passing the city lock since 1987.',
  courseDescription: 'Live online coding and AI classes in English for learners in Oldenburg from age 6 to adult: Scratch, Python, data and machine learning, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Oldenburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#layers', label: 'AI layers' },
    { href: '#school', label: 'School' },
    { href: '#lock', label: 'Lock data' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Oldenburg (Oldb) &middot; Coding and AI &middot; Every age',
  h1: 'Coding and AI classes in Oldenburg',
  lede: 'Learning AI can mean three different things: using the tools well, building a model yourself, and judging whether a model\'s answer deserves trust. A primary child, a Gymnasium pupil and an adult in Oldenburg each start at a different one of those. This page explains the three layers, how our live classes in English take each age through them, what Niedersachsen schools now teach in Informatik, and a project on the Oldenburg lock where a program spots six strange years and a person has to work out why.',
  secondaryCta: { href: '#lock', label: 'See the lock project' },
  wa: 'Hello Modern Age Coders, we are in Oldenburg and are interested in coding or AI classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; one mentor per learner, always in English',
  spec: [
    ['Ages', '6 to 12, 13 to 18, adults'],
    ['Topics', 'Coding, data, machine learning'],
    ['Teaching', 'Live video, in English'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers coding and AI classes to Oldenburg learners of every age, live online in English: AI Literacy for Kids and Scratch for children, Python and Data Science for Teens, and Generative AI and machine-learning courses for adults. Each learner keeps one mentor, based in India, who matches their pace and accent, in a class of fifteen to twenty or one to one. Niedersachsen makes Informatik compulsory only in grades 9 and 10.',

  picks: {
    eyebrow: 'Three first courses',
    h2: 'Where should an Oldenburg learner start with AI?',
    lede: 'Each course starts at the layer that fits the age: understanding for children, building for teenagers, applying and judging for adults.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'CAO / 01', title: 'AI Literacy for Kids', note: 'Eight to fourteen. How a machine learns from examples, why it gets things wrong, and how to tell, all without any adult chatbot account.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CAO / 02', title: 'Data Science for Teens', note: 'Teenagers who already know a little Python move on to real data files, charts and first models, such as the lock detector on this page.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'CAO / 03', title: 'Generative AI Masterclass', note: 'Adults who want to know what is inside the chat tools they use at work: language models, retrieval, agents and their limits.' }
    ]
  },

  sections: [
    {
      id: 'layers',
      eyebrow: 'Three layers of AI',
      h2: 'What does it mean to learn AI, at any age?',
      lede: 'We split it into three layers. Most courses online teach only the first. Our classes reach the second and third, because that is where understanding starts.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Use', p: 'Knowing what a tool can and cannot do, asking it well, and checking what comes back. For adults this includes the chat assistants used at work. For children it means age-appropriate tools only, and never an adult account.' },
          { h3: 'Build', p: 'Writing a small model yourself in Python: a program that learns from examples, a rule that flags strange values, a guess that improves with data. This is where coding and AI meet, and it is the heart of every course.' },
          { h3: 'Judge', p: 'Deciding whether a result is right, and saying why. A model that flags a year as unusual has not explained anything yet. The judging layer is the one that makes a learner hard to fool, by a machine or a headline.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where each age starts and what they make first (ours)', head: ['Age', 'Starting layer', 'A first piece of work'], rows: [
          ['6 to 8', 'Build, with blocks', 'A Scratch game that changes when you press a key'],
          ['8 to 12', 'Use and build', 'Sorting pictures by rules, then letting a program find the rule'],
          ['13 to 15', 'Build', 'A Python program that reads a file and flags odd values'],
          ['16 to 18', 'Build and judge', 'A small model tested on data it has never seen'],
          ['Adults', 'Use, build and judge', 'An anomaly detector on real data, with every flag explained']
        ] },
        { kind: 'p', mt: true, html: 'A parent and a child can learn at the same time on different courses. Some families in Oldenburg book a group course for a child and a one-to-one course for an adult who wants to understand the AI tools arriving at work.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Lower Saxony schools',
      h2: 'What do Oldenburg schools teach in Informatik?',
      lede: 'Since 2024/25 every pupil in Niedersachsen has compulsory Informatik, but only in two school years. The figures below are from the Gesellschaft für Informatik and the KMK, read on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 9 and 10',
          left: [
            'The Informatik-Monitor 2026/27 records that at all general school types in Niedersachsen, Informatik has been a compulsory subject in grades 9 and 10 since the 2024/25 school year. Before grade 9, there is no fixed Informatik lesson for every pupil.',
            'That means an Oldenburg child can go from age 6 to about 14 without regular computing at school, the years in which coding habits are easiest to form.'
          ],
          rightH3: 'In the Oberstufe',
          right: [
            'Niedersachsen\'s Gymnasium follows the nine-year route: grade 11 is the Einführungsphase and grades 12 and 13 the Qualifikationsphase. Informatik is a course a pupil can choose there.',
            'Few do. On its national page the monitor names Niedersachsen, with Baden-Württemberg and Bremen, as the Länder where only about one Oberstufe pupil in twelve takes Informatik.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik through an Oldenburg school career (rules for 2026/27)', head: ['Grades', 'Informatik'], rows: [
          ['1 to 4, Grundschule', 'No compulsory lesson'],
          ['Grades 5 to 8', 'No compulsory lesson'],
          ['9 and 10', 'Compulsory at all general school types, since 2024/25'],
          ['11 to 13, Oberstufe', 'A chosen course; about one pupil in twelve takes it']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Niedersachsen page and national overview, read 2 November 2026. In 2026 the KMK also updated its framework Bildung in der digitalen Welt with AI-related competences. We have no connection with the Gesellschaft für Informatik, the KMK or the Niedersachsen ministry, and our classes run beside school; marks come only from the school.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lower Saxony school holidays 2026/27 (KMK)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '12 to 24 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 9 January 2027'],
          ['Winterferien', '1 and 2 February 2027'],
          ['Osterferien', '22 March to 3 April 2027'],
          ['Single days', '7 May and 18 May 2027'],
          ['Sommerferien', '8 July to 18 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferienkalender 2026/27, Stand 9 October 2025. Lessons continue in the holidays for anyone who wants them.' },
        { kind: 'p', mt: true, html: 'Pupils who want to take an AI or coding project further can enter Jugend forscht, which runs for ages up to 21 and, as Jugend forscht junior, from grade 4 to age 14. Registration closes on 30 November each year, regional contests follow in February and the national final in May. We help with skills, never with writing a pupil\'s entry, and we are not connected to the organisers.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live, in English',
      h2: 'Why English, and how does a mentor in India teach a learner in Oldenburg?',
      lede: 'All teaching is live and in English only. For many learners that is a second benefit, not a barrier.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Plainly English', p: 'We do not offer lessons in German. Families should know that before they book, so it is the first answer in the questions at the bottom of this page too.' },
          { h3: 'Pace and accent', p: 'Mentors speak clearly and adjust: slower and simpler for an eight year old, technical and brisk for a software tester. They get used to each learner\'s accent within a few classes.' },
          { h3: 'The language of AI', p: 'Almost every AI tool, library, paper and error message is written in English. A learner who studies AI in English reads the documentation of tomorrow\'s tools without translating.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors teach from India over live video. A learner keeps the same mentor for the whole course, so the mentor knows which explanations worked last time and which project comes next.' }
      ]
    },
    {
      id: 'lock',
      tint: 'tint',
      eyebrow: 'A real Oldenburg project',
      h2: 'Which years were strange at the Oldenburg lock? An anomaly detector, then a human',
      lede: 'Stadt Oldenburg publishes how many ships passed its lock each year since 1987. Our teenagers and adults use it to build the simplest kind of anomaly detector, and to learn the most important rule about such systems: a flag is a question, not an answer.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset Schleuse Oldenburg seit 1987 lists, for each year, ships travelling up (Bergfahrt, coming from the Weser) and down (Talfahrt, heading to the Weser), how many were loaded, the cargo in tonnes, and a total. It is published by Stadt Oldenburg under the Datenlizenz Deutschland Namensnennung 2.0. We downloaded the file on 3 November 2026.',
            'The city notes that there are no figures for 2019, so that row is empty. We keep the file as published and call it schleuse_oldenburg.csv.'
          ],
          rightH3: 'The idea',
          right: [
            'An anomaly detector learns what normal looks like and flags whatever is far from it. Here, normal is the usual change in the number of ships from one year to the next. For each year we measure how many spreads it sits from the usual change: its z-score.',
            'Anything more than 1.5 spreads away gets flagged. The same idea, with far more data, sits behind systems that flag unusual card payments or a sensor that suddenly reads too high.'
          ] },
        { kind: 'code', label: 'Step 1: learn normal, flag the unusual', lang: 'Python', code: V1, note: 'It prints <code>Years with data: 38 from 1987 to 2025</code>, <code>Typical yearly change: -2.0 %  spread: 8.7</code>, then six flags, among them <code>Unusual: 1988 11.5 %  z = 1.5</code>, <code>Unusual: 1994 -17.1 %  z = -1.7</code> and <code>Unusual: 2025 13.3 %  z = 1.8</code>.' },
        { kind: 'p', mt: true, html: 'Ship numbers fell by about 2 percent a year on average, from 6,344 in 1987 to 2,671 in 2025. The detector flags 1988, 1994, 2003, 2010, 2024 and 2025. The program cannot say why any of them is unusual. That is the judging layer, and it belongs to the learner.' },
        { kind: 'code', label: 'Step 2: look closely at one flag', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>1993 up 3499 + down 3776 = 7275  total column: 7275</code>, <code>1994 up 3757 + down 4039 = 7796  total column: 6033</code> and the same check for 1995, which agrees.' },
        { kind: 'p', html: 'In 1993 and 1995 the ships going up and the ships going down add up exactly to the total. In 1994 they add up to 7,796, but the total column says 6,033. The file does not say which figure is right, so we do not either. What we can say is that the 1994 flag may come from the bookkeeping rather than the canal: measured with the two directions, 1994 would be a rise of about 7 percent, an ordinary year.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'The six flagged years and what a person can find out (our calculation and reading)', head: ['Year', 'Change in ships', 'z-score', 'What we found'], rows: [
          ['1988', '+11.5 %', '1.5', 'A rise after 1987; nothing odd in the file'],
          ['1994', '-17.1 %', '-1.7', 'Up plus down does not match the total'],
          ['2003', '+14.0 %', '1.8', 'A rise; the parts match'],
          ['2010', '-16.3 %', '-1.6', 'A real drop: up and down both fell'],
          ['2024', '-15.8 %', '-1.6', 'A real drop: up and down both fell'],
          ['2025', '+13.3 %', '1.8', 'A recovery after 2024']
        ] },
        { kind: 'source', html: 'Data: Stadt Oldenburg (Oldb), Schleuse Oldenburg seit 1987, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. The z-scores, the 1.5 threshold and the checks are our own. A second, smaller mismatch exists in 2005, where the two directions add up to 18 ships more than the total. The cargo per ship rose from about 472 tonnes in 1987 to about 510 tonnes in 2025, also our calculation. We make no claim about the causes of any change.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Write the ships for six years on cards. Which card looks strange? Now explain how you decided. That explanation is your detector.',
          '<strong>Teenagers.</strong> Change the threshold to 2 and then to 1. How many years are flagged each time, and which threshold would you choose for a real alarm?',
          '<strong>Adults.</strong> Rebuild the detector on cargo in tonnes instead of ships. Do the same years stand out?',
          '<strong>Everyone.</strong> Write one sentence on the difference between "unusual" and "wrong", using 1994 and 2010 as your two examples.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When do classes run in Oldenburg time?',
      lede: 'You choose. Afternoons and early evenings in Oldenburg fall in the Indian evening, and weekend mornings are midday there.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Oldenburg times read on the mentor\'s clock', head: ['Oldenburg', 'India in winter (to 28 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['14:45', '19:15', '18:15'],
          ['15:15', '19:45', '18:45'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz gives Germany MEZ, UTC+1, in winter and MESZ, UTC+2, in summer; the clocks went back on 25 October 2026 and will go forward on 28 March 2027. India is on UTC+5:30 all year, which makes the gap four and a half hours in winter and three and a half in summer. The table shows conversions only; there is no fixed batch time.' },
        { kind: 'p', mt: true, html: 'Learners in Bad Zwischenahn, Hude, Wardenburg or Delmenhorst join in the same way. The booking page lists every time in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How does a learner in Oldenburg move through the layers?',
    lede: 'Our own steps, used for planning and for reports.',
    table: { caption: 'From using to judging (ours)', head: ['Step', 'The learner can'], rows: [
      ['1. Instruct', 'Write exact steps a computer follows'],
      ['2. Program', 'Use loops, conditions and functions in Python'],
      ['3. Read data', 'Load a real file and summarise it'],
      ['4. Build', 'Make a model or detector that learns from data'],
      ['5. Judge', 'Explain each result, and say when not to trust it']
    ] },
    left: { h3: 'For parents', ps: [
      'The lock project reaches step 5. A teenager who has looked behind the 1994 flag knows that a computer\'s alarm still needs a human explanation.',
      'Reports describe what your child built and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'When a program flags something, your work has just started.',
      'Check whether the parts add up before you believe the total.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more coding and AI courses for Oldenburg',
    lede: 'Live, in English, with a regular mentor; group or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CAO / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From Scratch blocks to small apps.' },
        { code: 'CAO / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed code and simple AI ideas from nine.' },
        { code: 'CAO / KIDS / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A short, complete first course.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAO / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind most AI work.' },
        { code: 'CAO / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Models written by hand, then with libraries.' },
        { code: 'CAO / TEEN / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Machine learning as visual workflows.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'CAO / ADULT / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML Masterclass', blurb: 'Classical models to deep learning.' },
        { code: 'CAO / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards.' },
        { code: 'CAO / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with coding agents, for adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live coding and AI classes fit into a week in Oldenburg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'For children and teenagers after school.' },
      { time: 'Early evening', l: 'For adults after work.' },
      { time: '1-on-1', l: 'Any time agreed with the mentor.' }
    ],
    cells: [
      { h3: 'Three layers', p: 'Use, build and judge, at every age.' },
      { h3: 'One mentor', p: 'The same person for the whole course.' },
      { h3: 'Real data', p: 'German open data, not invented examples.' },
      { h3: 'Every flag explained', p: 'No result is accepted without a reason.' },
      { h3: 'Age-safe tools', p: 'No adult AI accounts for under-18s.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'A selection of student work; the <a class="ag-inline-link" href="/student-labs">student labs</a> show the full range.',
  reviewsLede: 'Students and parents in their own words, from Google.',

  fees: {
    h2: 'Fees for coding and AI classes in Oldenburg',
    lede: 'The fee is per month and includes eight live classes. It is displayed in euro using the European Central Bank reference rate; we charge in US dollars, and your bank converts the payment, so what you see on your statement may differ by a small amount.',
    free: ['A free first class', 'A short problem and a first program', 'No card needed'],
    group: ['Fifteen to twenty learners', 'One regular mentor', 'Two classes each week', 'Monthly, stop when you like'],
    one: ['One learner, one mentor', 'Your own projects and speed', 'Times you set']
  },

  faq: {
    eyebrow: 'Questions from Oldenburg',
    h2: 'Coding and AI classes in Oldenburg: your questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, and every class is live. Mentors are based in India, speak clearly, and adapt their pace and accent to each learner, whether that is a primary child or an adult who learnt English at school years ago.' },
      { q: 'What does learning AI involve in your classes?', a: 'Three layers: using AI tools sensibly, building small models in Python, and judging whether a result can be trusted. Children start with ideas and blocks, teenagers build, adults do all three.' },
      { q: 'Is Informatik compulsory in Oldenburg schools?', a: 'Since 2024/25, in grades 9 and 10 at all general school types in Niedersachsen, according to the Gesellschaft für Informatik. Before grade 9 there is no compulsory Informatik lesson, which is why many families start earlier with us.' },
      { q: 'When are classes in Oldenburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons, early evenings and weekend mornings are the usual choices here.' },
      { q: 'Will my child use ChatGPT in class?', a: 'Not with an adult account. ChatGPT needs a parent\'s permission for anyone under 18 and Claude is for adults only, so our children\'s and teenage courses teach AI by building and explaining small models instead.' },
      { q: 'Can adults in Oldenburg learn AI from the beginning?', a: 'Yes. Adults with no coding start with Python and move to data and models; adults who already code can begin with the Generative AI or the AI and ML Masterclass. Many choose one to one.' },
      { q: 'Is the lock project real Oldenburg data?', a: 'Yes. It uses Schleuse Oldenburg seit 1987, published by Stadt Oldenburg under the Datenlizenz Deutschland Namensnennung 2.0 and downloaded on 3 November 2026. The detector, the threshold and the checks are ours.' },
      { q: 'Can you help with a Jugend forscht project?', a: 'We teach the skills a project needs, such as Python, data and testing, but the project and its write-up must be the pupil\'s own. Jugend forscht registration closes on 30 November.' },
      { q: 'How many learners are in a group?', a: 'Fifteen to twenty, grouped by age for children and by level for older learners. One to one is the alternative, with two private lessons a week.' },
      { q: 'How is the fee paid?', a: 'Monthly, in US dollars. The page shows the amount in euro at the European Central Bank reference rate, and your bank converts the dollar payment, so a small difference is possible. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for learners in Oldenburg and Lower Saxony.',
    items: [
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'The Land page for Niedersachsen.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our longer page on learning AI.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Why we teach judgement.' },
      { href: '/informatik-abitur-niedersachsen', label: 'Informatik Abitur Niedersachsen', p: 'The Abitur course in Lower Saxony.' },
      { href: '/jugend-forscht-computer-science-project-mentoring', label: 'Jugend forscht mentoring', p: 'Support for a computing project.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page.' }
    ]
  },

  start: {
    h2: 'Begin with a free first class',
    lede: 'In the first class the mentor sets a small problem, sees how the learner tackles it and how much English support helps, and then recommends a course and a group.',
    readFirst: 'For more detail, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Live online classes with mentors in India, taught only in English. A WhatsApp message in English is the quickest way to reach us.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy AI' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-lower-saxony', label: 'Coding in Lower Saxony' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A flag is a question, not an answer'
  },

  personalityCss: `
.ag-root.ag-cao .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-cao .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-cao .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-cao .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-cao .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Niedersachsen page and national overview); KMK Ferienkalender 2026/27 and Bildung in der digitalen Welt; Stiftung Jugend forscht; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Stadt Oldenburg (Oldb), Schleuse Oldenburg seit 1987, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'A flag is a question: an original Python anomaly detector on Stadt Oldenburg\'s yearly ship counts at the city lock (1987 to 2025, 2019 missing). Yearly changes average -2.0 percent with a spread of 8.7; a z-score above 1.5 flags six years. A closer look shows the 1994 flag may come from bookkeeping (up 3,757 plus down 4,039 is 7,796, the total column says 6,033), while 2010 and 2024 are real drops in both directions. Lesson family: an anomaly detector says unusual, not wrong.',
    requiredMentions: ['schleuse_oldenburg.csv', 'Typical yearly change: -2.0 %  spread: 8.7', 'Unusual: 1994 -17.1 %  z = -1.7', '1994 up 3757 + down 4039 = 7796  total column: 6033', 'Years with data: 38 from 1987 to 2025', 'grades 9 and 10 since the 2024/25 school year', '12 to 24 October 2026', 'A flag is a question, not an answer'],
    sources: [
      { claim: 'Niedersachsen compulsory Informatik grades 9 and 10 since 2024/25; G9 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'About one in twelve Oberstufe pupils takes Informatik in Niedersachsen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Niedersachsen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Jugend forscht cycle and age groups.', url: 'https://www.jugend-forscht.de/teilnahme/ablauf/ablauf-auf-einen-blick.html' },
      { claim: 'Schleuse Oldenburg seit 1987, licence DL-DE BY 2.0.', url: 'https://opendata.oldenburg.de/dataset/schleuse-oldenburg-seit-1987' }
    ],
    rejectedClaims: [
      'Which 1994 figure is correct: the file does not say, so the page does not.',
      'Causes of the 2010 and 2024 drops: not in the data, so none given.',
      'Any link with Stadt Oldenburg, the Niedersachsen ministry or Jugend forscht: none.',
      'German-language teaching: none, said in the first FAQ.'
    ]
  }
};
