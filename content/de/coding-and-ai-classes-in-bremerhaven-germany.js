'use strict';
// Coding and AI classes in Bremerhaven (ag- city page, Germany cluster P6 row DE191, tier-2 shape coding-and-ai = all ages).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: messages are not ships. One day of the AIS receiver at the Bremerhaven measuring station logs 172,306 position
// messages from just 170 vessels; any AI that learns from port traffic has to count things, not rows, before it learns.
// Bremerhaven is a city of the Land Bremen; the Land page (coding-classes-in-land-bremen) uses the Land budget file, which
// is not reused here. The data is the BSH's own record from its station in Bremerhaven, not a city portal file: GovData
// lists no Magistrat Bremerhaven dataset with a direct file and an allowed licence.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Bremen page: "Es finden weder an der Oberschule noch am Gymnasium curricular
//    hinterlegte Angebote mit Informatikbezug statt." (75). National page: Bremen among six Länder "ohne einen für alle
//    verbindlichen Informatikunterricht" (92); "Zum Schuljahr 2027/28 wird Bremen Informatik als Pflichtfach an allen
//    Schulen im Gesamtumfang von zwei bis vier Wochenstunden einführen." (94); BW, Niedersachsen, Bremen "ungefähr jede
//    zwölfte Person" (99).
//  - KMK, Bildung in der digitalen Welt: 2016 strategy (100); 2026 framework with AI competences (102).
//  - KMK Ferien 2026/2027 (raw src-pages/coding-classes-in-land-bremen/kmk-fer2627/fe303dbf.txt): "Bremen 12.10. - 24.10.
//    23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04. 07.05. und 18.05. 08.07. - 18.08."
//  - AI tool ages: content/ai-tool-age-audit.json (ChatGPT 13 with a parent's permission under 18; Gemini 16 in Germany;
//    Claude 18+).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Bremerhaven 118,610; Bremen (city) 586,271; Land Bremen 704,881.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Bundesamt für Seeschifffahrt und Hydrographie (BSH), "AIS-Daten zur Schiffsabgasmessung an der Messstation
//    Bremerhaven 2025 12" (GovData via Mobilithek; subtitle "Navigationsdaten und Schiffsidentität aufgezeichnet mit dem
//    AIS-Receiver ... an der Messstation Bremerhaven"); BSH atom feed rights: "Dieser Datensatz kann gemäß der
//    "Datenlizenz Deutschland – Namensnennung – Version 2.0" (www.govdata.de/dl-de/by-2-0) genutzt werden.", "Quelle:
//    Bundesamt für Seeschifffahrt und Hydrographie". Day file ...Bremerhaven-2025-12_01.log, downloaded 3 November 2026,
//    19,412,564 bytes, sha256 bb060c80...583f467ab8, 185,120 lines: 172,306 position lines (11 fields), 11,498 static lines
//    (9 fields) and others, 00:00:00 to 23:59:59 on 1 December 2025. Class files (ours): ais_positions_2025-12-01.csv
//    (ship_id, status, speed_kt, time) and ais_ship_types_2025-12-01.csv (ship_id, ship_type, time; 11,479 rows).
//    No ship names, positions or identifiers are shown on the page; the emission-measurement series is not used.
// Our own calculations (scratchpad de/w/T6/bremerhaven/v1.py, v2.py, v3.py, python3 -I):
//  v1: "Position messages: 172306", "Different ships: 170", "Messages per ship, on average: 1014".
//  v1+v2: "Ships that sent their type: 136", "Seen moving or moored but never said their type: 34", "Top kinds:
//      [('Cargo ship', 43), ('Tug', 23), ('Other ship', 18), ('Cargo shipA', 7)]".
//  v1+v2+v3: "Top kinds after tidying: [('Cargo ship', 56), ('Tug', 23), ('Other ship', 18)]".
//  Status of position messages: under way 142,895; moored 19,746; restr.manv 8,319; anchored 1,060; unknown 265; other 21.
//  Two vessels reported two different types during the day (the dictionary keeps the last).
// Lesson family: messages are not things; count distinct identifiers with a set (and a lookup dict) before you count
// anything, then tidy the labels.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'messages = 0',
  'ships = set()',
  'with open("ais_positions_2025-12-01.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        messages += 1',
  '        ships.add(row["ship_id"])',
  '',
  'print("Position messages:", messages)',
  'print("Different ships:", len(ships))',
  'print("Messages per ship, on average:", round(messages / len(ships)))'
].join('\n');

const V2 = [
  'from collections import Counter',
  '',
  'kind = {}',
  'with open("ais_ship_types_2025-12-01.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        kind[row["ship_id"]] = row["ship_type"]',
  '',
  'by_messages = Counter(kind[s] for s in kind)',
  'print("Ships that sent their type:", len(kind))',
  'print("Seen moving or moored but never said their type:", len(ships - set(kind)))',
  'print("Top kinds:", by_messages.most_common(4))'
].join('\n');

const V3 = [
  'tidy = Counter()',
  'for s, k in kind.items():',
  '    if k.startswith("Cargo ship"):',
  '        k = "Cargo ship"',
  '    tidy[k] += 1',
  'print("Top kinds after tidying:", tidy.most_common(3))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Bremerhaven: coding and AI, all ages' },
  slug: 'coding-and-ai-classes-in-bremerhaven-germany',
  code: 'brf',
  accent: '#652E0C',
  accentRationale: 'Coding and AI in Bremerhaven: a hull-rust brown #652E0C for the ships and quay cranes of the Weser port; contrast 8.74 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-land-bremen', name: 'Land Bremen' }],
  routeLabel: 'Coding and AI classes in Bremerhaven',
  title: 'Coding and AI Classes in Bremerhaven: Live Online, English',
  description: 'Coding and AI classes in Bremerhaven for kids, teens and adults, live online in English: Informatik in the Land Bremen, AI tool ages and a ship data project.',
  ogDescription: 'Live coding and AI lessons in English for Bremerhaven learners from 6 to adult, with a project on one day of ship signals heard at the Bremerhaven measuring station: 172,306 messages, and only 170 ships.',
  twitterDescription: 'Coding and AI for every age in Bremerhaven, live in English, with a project on Bremerhaven ship signals.',
  pageName: 'Coding and AI Classes in Bremerhaven',
  webPageDescription: 'A guide for Bremerhaven children, teenagers, parents and adults to live coding and AI classes in English: why counting comes before AI, what schools in the Land Bremen teach in Informatik now and from 2027/28, AI tool age rules, and an original Python project on the BSH\'s AIS records from its Bremerhaven station.',
  courseDescription: 'Live online coding and AI classes in English for Bremerhaven learners aged 6 to adult: Scratch and Python for children, data and machine learning for teenagers, Python and AI for adults, in a class of fifteen to twenty or one to one with a regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bremerhaven, all ages',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ships', label: 'Ship data' },
    { href: '#ai', label: 'AI' },
    { href: '#schools', label: 'Schools' },
    { href: '#hours', label: 'Times' }
  ],
  eyebrow: 'Bremerhaven &middot; Coding and AI &middot; Every age from 6',
  h1: 'Coding and AI classes in Bremerhaven',
  lede: 'On 1 December 2025 a single radio receiver in Bremerhaven logged more than 170,000 position reports from ships. How many ships was that? Getting that one answer right is a small lesson in coding and a big one in AI, and it is where this page starts. It then explains how our live classes in English work for every age, what schools in the Land Bremen teach in Informatik and what changes in 2027/28, and which AI tools each age may use.',
  secondaryCta: { href: '#ships', label: 'Count the ships' },
  wa: 'Hello Modern Age Coders, I am in Bremerhaven and would like coding and AI classes in English. Could we arrange a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ learners worldwide &middot; counting before AI, at every age',
  spec: [
    ['Ages', '6 to 12, 13 to 18, adults'],
    ['Children', 'Scratch and Python'],
    ['Teenagers', 'Data, models, AI basics'],
    ['Adults', 'Python and AI for work'],
    ['Groups', '15 to 20, or one to one'],
    ['Trial', 'One free class']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Modern Age Coders runs coding and AI classes for Bremerhaven live online, taught in English, from primary school age to adulthood. Six to twelve year olds move from Scratch to Python, teenagers handle real data and small machine-learning models, and adults bring Python and AI into their work. A single mentor adapts to each learner\'s speed and accent, whether in a shared group of fifteen to twenty or in private lessons.',

  picks: {
    eyebrow: 'Choose a start',
    h2: 'Which coding and AI course fits each age in Bremerhaven?',
    lede: 'One course per stage of life to begin with; the free class confirms it.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'BRF / 01', title: 'Vibe Coding for Kids', note: 'Ages 8 to 12. Scratch games made with the mentor and a safe first look at AI, with no chatbot accounts.' },
      { course: 'ai-ml-masterclass-teens', code: 'BRF / 02', title: 'AI and Machine Learning for Teens', note: 'Teenagers. Real files first, such as the ship signals below, then models that are checked on data they have not seen.' },
      { course: 'data-analysis-mastery-course-college', code: 'BRF / 03', title: 'Data Analysis', note: 'Adults. Python for large files, counts, summaries and charts that hold up when someone checks them.' }
    ]
  },

  sections: [
    {
      id: 'ships',
      tint: 'tint',
      eyebrow: 'A Bremerhaven data project',
      h2: 'How many ships does a receiver in Bremerhaven hear in one day?',
      lede: 'Far fewer than the number of messages suggests. The Bundesamt für Seeschifffahrt und Hydrographie (BSH) publishes what the AIS receiver at its Bremerhaven measuring station records, open data under the Datenlizenz Deutschland Namensnennung 2.0. Our learners use one day of it.',
      body: [
        { kind: 'two',
          leftH3: 'What AIS is',
          left: [
            'AIS, the Automatic Identification System, is a radio system on ships. Each ship regularly sends a short message with its identity, status and speed, and from time to time a longer one with its type and voyage. The BSH describes the records as navigation data and ship identity logged by the receiver at the Bremerhaven station.',
            'We downloaded the log for 1 December 2025 on 3 November 2026: 185,120 lines, from midnight to 23:59:59.'
          ],
          rightH3: 'What we give learners',
          right: [
            'Two small files of our own. ais_positions_2025-12-01.csv has one row per position message: a ship number, its status, its speed in knots and the time. ais_ship_types_2025-12-01.csv has one row each time a ship announced its type.',
            'We show no ship names, numbers or positions on this page. The question is about counting, and counting needs none of them.'
          ] },
        { kind: 'code', label: 'Version 1: messages or ships?', lang: 'Python', code: V1, note: 'It prints: <code>Position messages: 172306</code>, <code>Different ships: 170</code> and <code>Messages per ship, on average: 1014</code>.' },
        { kind: 'p', mt: true, html: 'A newcomer reading the file would say "172,306 ships". The set says 170. A set keeps each value once, however often it is added, so it turns a stream of messages into a list of distinct ships. On average each ship sent about a thousand position reports that day, because ships that move report often.' },
        { kind: 'p', html: 'Next question: what kinds of ship were they? The type comes in the longer messages, so Version 2 builds a dictionary from ship number to type, then compares it with the set of ships from Version 1. Set subtraction shows which ships never said what they are.' },
        { kind: 'code', label: 'Version 2: join the types', lang: 'Python', code: V2, note: 'Run after Version 1, it prints: <code>Ships that sent their type: 136</code>, <code>Seen moving or moored but never said their type: 34</code> and <code>Top kinds: [(\'Cargo ship\', 43), (\'Tug\', 23), (\'Other ship\', 18), (\'Cargo shipA\', 7)]</code>.' },
        { kind: 'p', mt: true, html: 'Thirty-four ships sent positions but no type during the day, so any chart of "ship types in Bremerhaven" built from this file is missing a fifth of the ships. Then there is that odd label, "Cargo shipA". The file also contains Cargo shipB, C and D: the letter is an extra category attached to the type. For a simple count of cargo ships they belong together, which Version 3 does.' },
        { kind: 'code', label: 'Version 3: tidy the labels', lang: 'Python', code: V3, note: 'Added after the first two versions, the output is <code>Top kinds after tidying: [(\'Cargo ship\', 56), (\'Tug\', 23), (\'Other ship\', 18)]</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Position messages by reported status, Bremerhaven receiver, 1 December 2025 (our count)', head: ['Status in the message', 'Messages'], rows: [
          ['under way', '142,895'],
          ['moored', '19,746'],
          ['restr.manv (restricted manoeuvrability)', '8,319'],
          ['anchored', '1,060'],
          ['unknown', '265'],
          ['other labels', '21']
        ] },
        { kind: 'source', html: 'Data: Bundesamt für Seeschifffahrt und Hydrographie, AIS-Daten zur Schiffsabgasmessung an der Messstation Bremerhaven 2025 12, day file for 1 December 2025, licence Datenlizenz Deutschland Namensnennung 2.0, "Quelle: Bundesamt für Seeschifffahrt und Hydrographie", downloaded 3 November 2026. All counts are ours. Message counts are not ship counts: one moving ship can fill thousands of rows.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Count every car that passes a window for five minutes, writing a tally mark each time. Then count how many different cars it was. Why are the numbers different?',
          '<strong>From about 9, Python.</strong> Run the first version, then count how many messages said "moored" and how many different ships ever said "moored".',
          '<strong>Teenagers.</strong> Find the two ships that reported two different types during the day. Which type does the dictionary keep, and how would you decide which is right?',
          '<strong>Adults.</strong> Work out, for each hour of the day, how many different ships were heard. Which hour was the quietest, and does that match the message counts?'
        ] }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'Coding and AI together',
      h2: 'Why does counting come before AI?',
      lede: 'Because a model trained on the wrong unit learns the wrong thing. That is as true for a ten year old\'s project as for a large AI system.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The unit matters', p: 'A model that learned from messages instead of ships would think one busy tug is a thousand vessels. Deciding what one row means is the first step of every data and AI project we teach.' },
          { h3: 'Gaps matter', p: 'Thirty-four ships in the file never said their type. A model trained only on ships with a type quietly ignores them. Learners write that limit down before they draw any chart.' },
          { h3: 'Labels matter', p: 'Cargo shipA and Cargo ship look different to a computer and the same to a person. Tidying labels, and saying exactly how, is part of building a fair model.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'AI tools and age rules',
          left: [
            'Each chat tool sets its own lower age limit in its terms: 13 plus parental consent up to 18 for ChatGPT, 16 in Germany for Gemini, and 18 for Claude.',
            'So nobody under those ages is asked to sign up for anything in our classes; instead they write small programs that learn a rule from data, which teaches more.'
          ],
          rightH3: 'What schools are asked to teach',
          right: [
            'In 2026 the Kultusministerkonferenz added AI-related competences to the framework that grew out of its 2016 digital strategy, putting AI on the list of things schools should address.',
            'Our classes work alongside school and never replace any subject. Nothing we teach is graded or counts towards school reports.'
          ] }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'Schools in the Land Bremen',
      h2: 'Do schools in Bremerhaven teach Informatik?',
      lede: 'Not yet as a subject for everyone. Bremerhaven belongs to the Land Bremen, which plans to change that from the 2027/28 school year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in the Land Bremen, from the Informatik-Monitor 2026/27', head: ['Question', 'What the Monitor records'], rows: [
          ['Compulsory for all pupils today?', 'No; Bremen is one of six Länder without it'],
          ['Sek I at Oberschule and Gymnasium', 'No curricular offers with an Informatik focus'],
          ['Planned change', 'Compulsory Informatik at all schools from 2027/28, two to four weekly hours in total'],
          ['Oberstufe', 'About one pupil in twelve takes Informatik']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bremen page and national overview, read on 2 November 2026. Its words on the plan: "Zum Schuljahr 2027/28 wird Bremen Informatik als Pflichtfach an allen Schulen im Gesamtumfang von zwei bis vier Wochenstunden einführen."' },
        { kind: 'p', mt: true, html: 'For a Bremerhaven family this is a year of transition. Pupils in Sekundarstufe I today have no curricular Informatik at Oberschule or Gymnasium, according to the Monitor, while those starting in 2027/28 will meet a compulsory subject. Children who begin coding now arrive ready for it; teenagers who would otherwise miss it can learn the same ideas in a weekly class. We teach alongside school and promise no grades.' }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Times',
      h2: 'When are live classes in Bremerhaven time?',
      lede: 'A Bremerhaven afternoon or early evening is evening in India, where the mentors teach. School holidays need not stop classes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Bremerhaven times as examples, with India\'s time alongside', head: ['Bremerhaven', 'India until 28 March 2027', 'India after 28 March 2027'], rows: [
          ['15:40', '20:10', '19:10'],
          ['17:50', '22:20', '21:20'],
          ['Saturday 10:15', '14:45', '13:45'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'German clock time (Einheitenzeitgesetz) is UTC+1 from late October and UTC+2 from late March; the 2026 change back came on 25 October and the 2027 change forward is on 28 March. With India on UTC+5:30 all year, the difference is four and a half hours now and three and a half in summer. The rows illustrate, they do not fix a batch.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Bremerhaven school breaks in 2026/27', head: ['Break', 'Starts', 'Ends'], rows: [
          ['Autumn', 'Mon 12 Oct 2026', 'Sat 24 Oct 2026'],
          ['Christmas', 'Wed 23 Dec 2026', 'Sat 9 Jan 2027'],
          ['Winter', 'Mon 1 Feb 2027', 'Tue 2 Feb 2027'],
          ['Easter', 'Mon 22 Mar 2027', 'Sat 3 Apr 2027'],
          ['Summer', 'Thu 8 Jul 2027', 'Wed 18 Aug 2027']
        ] },
        { kind: 'source', html: 'Dates from the KMK holiday table for 2026/2027 (as of 9 October 2025), Bremen line, valid for Bremerhaven too; the line also has two single free days in May 2027, the 7th and the 18th.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What are the steps from a first program to an AI project?',
    lede: 'Our stages, the same for every age. Children take years, adults take months.',
    table: { caption: 'Stages in coding and AI (ours)', head: ['Stage', 'Children, roughly', 'Teens and adults, roughly'], rows: [
      ['Precise instructions', 'Age 6 to 8', 'Week 1'],
      ['Loops and decisions', 'Age 8 to 10', 'Weeks 2 to 4'],
      ['Counting what is real (sets)', 'Age 10 to 12', 'Month 2'],
      ['Joining two files', 'Age 11 to 12', 'Month 2 to 3'],
      ['A first model, tested fairly', 'Teenagers', 'Months 3 to 5'],
      ['Explaining limits in writing', 'Teenagers', 'From month 4']
    ] },
    left: { h3: 'For learners', ps: [
      'Before counting, ask what one row stands for. A message? A ship? A day?',
      'When two files are joined, count what did not match. Those rows are part of the story.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child what the difference between 172,306 and 170 is. The answer shows they understand data.',
      'Monthly notes report what was built and understood.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Bremerhaven learners',
    lede: 'By age band. Live lessons in English, each with a regular mentor.',
    bands: [
      { num: 'I', h3: 'Children', sub: '6 to 12', courses: [
        { code: 'BRF / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From first blocks to apps.' },
        { code: 'BRF / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python from about 9.' },
        { code: 'BRF / KID / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coding in a world they know.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: '13 to 18', courses: [
        { code: 'BRF / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The whole language, with projects.' },
        { code: 'BRF / TEEN / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Ready for the new Bremen subject.' },
        { code: 'BRF / TEEN / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Distinct counts and joins in a database.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'For work', courses: [
        { code: 'BRF / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A full course for beginners.' },
        { code: 'BRF / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Automation and applied AI', blurb: 'Python that does the routine work.' },
        { code: 'BRF / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL databases', blurb: 'Structured data, queried properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How are live coding and AI lessons arranged for Bremerhaven?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'Pupils after school.' },
      { time: 'Early evenings', l: 'Adults after work.' },
      { time: 'Weekends', l: 'Saturday or Sunday, any age.' }
    ],
    cells: [
      { h3: 'A regular mentor', p: 'The same mentor every week.' },
      { h3: 'Real time', p: 'Every lesson is live.' },
      { h3: 'Real data', p: 'German open data from early on.' },
      { h3: 'Age bands', p: 'Children, teens and adults apart.' },
      { h3: 'Limits written down', p: 'Every project names what it cannot know.' },
      { h3: 'Group or private', p: '15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'What have our students built?',
  projectsLede: 'Work by our students in other countries. Many more projects are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from learners and parents, unaltered.',

  fees: {
    h2: 'What do the classes cost in Bremerhaven?',
    lede: 'Each month\'s fee covers eight live classes. Amounts shown here are in euro, derived from the European Central Bank reference rate; payment is collected in US dollars and your bank turns it into euro, so the booked amount can vary slightly.',
    free: ['A free first class', 'A small problem and a first program', 'No card details'],
    group: ['15 to 20 learners of similar age', 'A regular mentor', 'Two live classes a week', 'Monthly, cancel any time'],
    one: ['Private lessons', 'Your pace and projects', 'Times arranged with you']
  },

  faq: {
    eyebrow: 'Bremerhaven asks',
    h2: 'Coding and AI classes in Bremerhaven: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only, with mentors in India who adapt to the learner\'s pace and accent. We do not teach in German.' },
      { q: 'Which ages do you teach?', a: 'Six upwards, with no top limit. Primary pupils, teenagers and adults each learn in their own groups, from Scratch at the start to data, AI and work automation later.' },
      { q: 'Is Informatik compulsory in Bremerhaven schools?', a: 'Not yet. The Gesellschaft für Informatik counts Bremen among six Länder without Informatik that is compulsory for all, and reports that the Land Bremen will introduce it at all schools from 2027/28, with two to four weekly hours in total.' },
      { q: 'Can my child use ChatGPT in your classes?', a: 'We do not use it with children. The tool itself is closed to under-13s and needs parental consent until 18; in class, younger learners program the ideas behind AI themselves instead.' },
      { q: 'When are classes in Bremerhaven time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Bremerhaven afternoons are evenings in India.' },
      { q: 'What is the Bremerhaven ship project?', a: 'A Python project we wrote on one day of AIS records from the BSH receiver at its Bremerhaven measuring station. The file holds 172,306 position messages but only 170 different ships, and learners discover why counting rows is not counting ships.' },
      { q: 'Is the ship data free to use?', a: 'Yes. The BSH publishes it under the Datenlizenz Deutschland Namensnennung 2.0, which allows reuse with the source named. We show no ship names, numbers or positions on the page.' },
      { q: 'Can adults with no programming background join?', a: 'Absolutely. Adult beginners write their very first program in lesson one and reach data work and AI services step by step.' },
      { q: 'How large are the classes?', a: 'A group is fifteen to twenty people close in age; otherwise you book private lessons with one mentor.' },
      { q: 'How are fees paid?', a: 'By the month. You see euro on this page, worked out from the ECB reference rate, and the card charge is made in US dollars, which your bank exchanges. Nothing is charged for the trial class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further pages',
    h2: 'Related pages',
    lede: 'More for Bremerhaven learners.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The Germany overview.' },
      { href: '/coding-classes-in-land-bremen', label: 'Coding classes in the Land Bremen', p: 'Bremen and Bremerhaven together.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'A model built on German data.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Every tool\'s minimum age.' },
      { href: '/student-labs', label: 'Student labs', p: 'Our students\' projects.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Bremerhaven',
    lede: 'The free class is a real lesson: one problem, one program and a conversation about goals. Afterwards the mentor recommends a course and either a group or private lessons.',
    readFirst: 'If you would like to read first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">every course we offer</a>.',
    note: 'Our mentors teach from India, live and in English. WhatsApp gets you the fastest reply.',
    formNote: 'Free and non-binding.'
  },

  footer: {
    cols: [
      { h4: 'Learning', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-land-bremen', label: 'Land Bremen' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/coding-classes-for-teens-germany', label: 'Coding for teens in Germany' }
      ] }
    ],
    bottomRight: 'Messages are not ships'
  },

  personalityCss: `
.ag-root.ag-brf .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-brf .ag-capsule { border-left-width: 6px; }
.ag-root.ag-brf .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-brf .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-brf .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Bremen and national pages); KMK, Bildung in der digitalen Welt; KMK Ferien 2026/2027, Bremen row; AI providers\' terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz; read 2 to 3 November 2026. Bundesamt für Seeschifffahrt und Hydrographie, AIS-Daten an der Messstation Bremerhaven, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Messages are not ships: an original Python project on one day (1 December 2025) of the BSH AIS receiver at its Bremerhaven station: 172,306 position messages from 170 ships (a set), a type lookup that leaves 34 ships without a type (set subtraction), and label tidying that merges Cargo shipA to D (56 cargo ships). Lesson family: count distinct identifiers before counting anything.',
    requiredMentions: ['ais_positions_2025-12-01.csv', 'Position messages: 172306', 'Different ships: 170', 'Seen moving or moored but never said their type: 34', "Top kinds after tidying: [('Cargo ship', 56), ('Tug', 23), ('Other ship', 18)]", 'Messstation Bremerhaven', 'Zum Schuljahr 2027/28 wird Bremen Informatik als Pflichtfach', 'Messages are not ships'],
    sources: [
      { claim: 'Bremerhaven AIS day files and their DL-DE BY 2.0 licence.', url: 'https://gdi.bsh.de/de/feed/AIS-data-for-ship-emission-measurement-on-the-mesurementsite-Bremerhaven-2025-12.xml' },
      { claim: 'Bremen: no curricular Informatik in Sek I; compulsory from 2027/28.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bremen' },
      { claim: 'Six Länder without compulsory Informatik; one in twelve in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'Bremen holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'KMK digital strategy and 2026 AI framework.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' }
    ],
    rejectedClaims: [
      'Ship names, identifiers or positions: not shown, not needed for the lesson.',
      'The emission measurements of the same station: not used (pollution and health-adjacent content).',
      'The Land Bremen budget file used by the Land page: not reused.',
      'Any claim about what the port industry uses AI for: not sourced, so not made.',
      'German-language teaching, and any link with the BSH, the city or the Land: none.'
    ]
  }
};
