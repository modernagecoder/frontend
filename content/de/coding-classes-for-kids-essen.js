'use strict';
// Coding classes for kids in Essen (ag- city door, Germany cluster P5 row DE133, alloc code cke, accent #8D4F0C).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: the choice Essen parents make at the end of grade 4. Every NRW school type teaches the same compulsory
// Informatik in grades 5 and 6, but from grade 7 the amount of computing depends on the school type, so the secondary
// school decision is quietly also a decision about computing. Plus the Jugendwettbewerb Informatik (open from grade 3,
// new Bronze level for grades 5 and 6) and one Essen data project on playground sizes.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - GI Informatik-Monitor 2026/27, NRW page (infmon-nordrhein-westfalen/c73c5f12.txt; facts 80, 81, 82): compulsory
//    Informatik grades 5 and 6 at all general school types; Hauptschule Wahlpflicht 7 to 10 "bis zu acht Wochenstunden";
//    Realschule "Gesamtumfang von 14 Wochenstunden", "In der Regel findet dieses durchgängig dreistündig statt.";
//    Gesamt- and Sekundarschule "zwölf Wochenstunden", usually three hours; Gymnasium G9 grades 9 and 10 "sechs
//    Wochenstunden eigenständig oder als Kombinationsfach verbindlich angeboten"; Einführungsphase "dreistündiger
//    Grundkurs"; written Abitur tasks set centrally, "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich
//    Abituraufgaben nicht vorgesehen."
//  - KMK Sekundarstufe I (fact 8): "So ist in den Jahrgangsstufen 5 und 6 ein Wechsel in einen anderen Bildungsgang möglich."
//  - KMK Primarbereich (fact 1): Grundschule grades 1 to 4.
//  - Jugendwettbewerb Informatik, bwinf.de (facts 139 to 144): round 1 2026 "Vom 23. Februar bis 8. März 2026"; round 2
//    "17. April bis 3. Mai"; round 3 from 1 September with the Bundeswettbewerb, "Einsendeschluss ist der 23. November
//    2026."; "Prinzipiell ist aber eine Teilnahme schon ab Jahrgangsstufe 3 möglich."; "Bronze (empfohlen für Jg. 5/6):
//    3 Aufgaben / 30 Minuten"; Silber 7 to 9, 4 tasks in 40 minutes; Gold from 10, 6 tasks in 60 minutes; record 71,971
//    participants, 7,190 first prizes.
//  - KMK FER2026_27.pdf (fact 275): NRW Christmas 23.12. to 06.01., Easter 22.03. to 03.04.2027, 18.05., summer 19.07. to
//    31.08.2027.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Essen 574,682; NRW 18,034,454.
//  - Time: Einheitenzeitgesetz; summer time ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Stadt Essen, "Spielplätze", via Open.NRW / GovData https://ckan.govdata.de/dataset/spielplatzeb7817, file
//    https://opendata.essen.de/sites/default/files/Spielplaetze.geojson, licence Datenlizenz Deutschland Namensnennung 2.0;
//    "Quelle: FB 67 - Grün und Gruga / FB 62 - Amt für Geoinformation, Vermessung und Kataster". 415 features with
//    BEZIRK_1, STADTTEI_1, OBJEKTNAME, FLAECHE, KATEGORIE (A 87, B 298, S 28, g 2; the codes are not explained in the
//    record, so the page does not interpret them). sha256 85cf66e2...a71f27561. Downloaded 2 Nov 2026.
// Our own calculations (scratchpad de/w/C5/es/v1.py, v2.py; python3 -I, run in the data folder):
//  v1: "Playgrounds: 415", "Average size: 2483 m2". v1+v2 adds "Middle size: 1822 m2", "Above the average: 156",
//  "Largest: 13438 Smallest: 122". Size bands: under 500 m2 32; 500 to 999 84; 1,000 to 1,999 101; 2,000 to 4,999 151;
//  5,000 to 9,999 42; 10,000 and over 5. Largest five: Brehminsel (Werden) 13,438; Westpark (Frohnhausen) 12,033;
//  Stakenholt / Lichtenhorst (Vogelheim) 11,973; Jahnplatz (Altendorf) 11,293; Lohwiese / Lünschermannborn (Karnap)
//  10,035. Smallest: Weststadt-Park (Westviertel) 122. Total 1,030,397 m2. Most playgrounds by Stadtteil:
//  Altenessen-Süd 18; most area: Frohnhausen 53,566 m2.
// Lesson family: the average is not the typical value; one very large value pulls the mean, the middle value does not.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'source = open("Spielplaetze.geojson", encoding="utf-8")',
  'playgrounds = json.load(source)["features"]',
  '',
  'sizes = [p["properties"]["FLAECHE"] for p in playgrounds]',
  'mean = sum(sizes) / len(sizes)',
  'print("Playgrounds:", len(sizes))',
  'print("Average size:", round(mean), "m2")'
].join('\n');

const V2 = [
  'sizes.sort()',
  'middle = sizes[len(sizes) // 2]',
  'above = [s for s in sizes if s > mean]',
  'print("Middle size:", round(middle), "m2")',
  'print("Above the average:", len(above))',
  'print("Largest:", round(sizes[-1]), "Smallest:", round(sizes[0]))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Essen: coding for kids' },
  slug: 'coding-classes-for-kids-essen',
  code: 'cke',
  accent: '#8D4F0C',
  accentRationale: 'Coding classes for kids, Essen: a rusted amber-brown #8D4F0C for the steel of the Zollverein headframe; contrast 5.23 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Essen',
  title: 'Coding Classes for Kids in Essen: Live and in English',
  description: 'Coding classes for kids in Essen aged 6 to 12, live online in English: NRW Informatik by school type, the Jugendwettbewerb and an Essen playground data project.',
  ogDescription: 'Live coding lessons in English for Essen children aged 6 to 12: how much Informatik each NRW school type teaches after grade 6, the Jugendwettbewerb Informatik from grade 3, and a project on the size of every Essen playground.',
  twitterDescription: 'Coding for Essen kids, live in English: Informatik by school type and a playground size project.',
  pageName: 'Coding Classes for Kids in Essen',
  webPageDescription: 'A guide for Essen parents of children aged 6 to 12: how much Informatik each NRW school type offers after the compulsory grades 5 and 6, from the GI Informatik-Monitor 2026/27, the Jugendwettbewerb Informatik rules for 2026, and an original Python project on the Essen playground register.',
  courseDescription: 'Live online coding classes in English for children in Essen aged 6 to 12, from Scratch to typed Python and small AI projects, in groups of fifteen to twenty or one to one, with a mentor who follows each child\'s pace.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Essen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#after-four', label: 'School choice' },
    { href: '#sizes', label: 'Project' },
    { href: '#jugend', label: 'Contest' },
    { href: '#essen-times', label: 'Times' }
  ],
  eyebrow: 'Essen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Essen',
  lede: 'When an Essen child finishes grade 4, the family picks a secondary school. Few parents realise that this is also a choice about computing: every NRW school type teaches the same Informatik in grades 5 and 6, but from grade 7 the hours on offer differ a great deal. This page lays out those differences, explains how our live lessons in English give a child aged 6 to 12 a head start that does not depend on the school, introduces a national contest open from grade 3, and walks through a project on the size of Essen\'s playgrounds.',
  secondaryCta: { href: '#sizes', label: 'See the playground project' },
  wa: 'Hello Modern Age Coders, our child is in Essen and would like coding lessons in English. Can we book a free first class?',
  heroNote: 'Live online lessons since 2020 &middot; more than 10,000 students worldwide &middot; taught in English, in Essen afternoons',
  spec: [
    ['Ages', '6 to 12'],
    ['Path', 'Scratch, then typed Python'],
    ['Groups', 'Fifteen to twenty, or 1-on-1'],
    ['Essen times', 'After school, weekend mornings'],
    ['Mentors', 'Live from India'],
    ['First lesson', 'Free, no card']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Modern Age Coders teaches coding to Essen children aged 6 to 12 in live online classes held in English: Scratch to begin with, then Python that the child types, with small AI projects in our Python and AI for Kids course. A mentor matches your child\'s pace and accent, in a group of fifteen to twenty or one to one, on weekday afternoons or weekend mornings. It works the same whichever secondary school your child later attends.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Three courses for Essen children from 6 to 12',
    lede: 'A Scratch course for the youngest, the Python course most children reach around nine, and a course that runs alongside school Informatik from grade 5.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CKE / 01', title: 'Scratch, from zero to finished games', note: 'For beginners in the primary years. Children build stories and games with blocks and leave with projects they can show at home.' },
      { course: 'python-ai-kids-masterclass', code: 'CKE / 02', title: 'Python and AI for Kids', note: 'Typed code for children of about nine and older: turtle drawings, small games, then working with real data like the Essen playground file.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'CKE / 03', title: 'Informatik Companion, Klasse 5 to 10', note: 'From grade 5. Follows the topics of German school Informatik in English, so the compulsory NRW lessons feel familiar rather than new.' }
    ]
  },

  sections: [
    {
      id: 'after-four',
      eyebrow: 'After Grundschule',
      h2: 'Which Essen secondary school teaches the most Informatik?',
      lede: 'In grades 5 and 6, none: they all teach the same compulsory subject. The differences begin in grade 7, and the GI Informatik-Monitor 2026/27 sets them out school type by school type.',
      body: [
        { kind: 'two',
          leftH3: 'The common start',
          left: [
            'Essen children attend Grundschule from grade 1 to grade 4. After that, NRW teaches Informatik as a compulsory subject in grades 5 and 6 at every general school type, so a Gymnasium pupil and a Gesamtschule pupil anywhere in the city sit the same kind of lessons.',
            'The KMK also notes that grades 5 and 6 are a stage where moving to another track is still possible, which takes some pressure off the decision at the end of grade 4.'
          ],
          rightH3: 'Where paths split',
          right: [
            'From grade 7 Informatik is an elective in NRW, chosen inside a block of elective hours. A Realschule can offer it within 14 weekly hours spread over grades 7 to 10, usually as a three-hour subject; a Gesamtschule or Sekundarschule within twelve; a Hauptschule up to eight.',
            'The nine-year Gymnasium waits longer: its elective begins in grade 9, with six weekly hours across grades 9 and 10.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik by NRW school type after the compulsory grades, 2026/27', head: ['School type', 'Compulsory', 'Elective later on'], rows: [
          ['Realschule', 'Grades 5 and 6', 'Grades 7 to 10, in a 14-hour elective block, usually three hours a week'],
          ['Gesamtschule or Sekundarschule', 'Grades 5 and 6', 'Grades 7 to 10, in a 12-hour elective block, usually three hours a week'],
          ['Hauptschule', 'Grades 5 and 6', 'Grades 7 to 10, up to eight weekly hours in total'],
          ['Gymnasium (G9)', 'Grades 5 and 6', 'Grades 9 and 10, six weekly hours in total; then Oberstufe courses']
        ] },
        { kind: 'source', html: 'Source: GI Informatik-Monitor 2026/27, Nordrhein-Westfalen page; KMK pages on Primarbereich and Sekundarstufe I; all read 2 November 2026. Hours are totals across the grades named, as the monitor lists them. In the Gymnasium Oberstufe a three-hour Grundkurs is available in the Einführungsphase, and the written Informatik Abitur is set centrally and taken on paper, without a computer.' },
        { kind: 'p', mt: true, html: 'So for an Essen family the honest summary is: Informatik is guaranteed for two years, and after that it depends on the school and on your child\'s choice. A child who already enjoys building programs by the end of grade 6 is the child who picks the elective in grade 7, or waits for it in grade 9. That enjoyment can start much earlier, at home or online, and it does not care which school your child goes to.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'How do coding lessons in English work for a child from Essen?',
      lede: 'They are live, they are only in English, and the mentor shapes the language around the child. Here is what that looks like in practice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One teaching language', p: 'We do not offer German-language lessons, and we prefer to say so up front. Parents at German schools often see a plus in it: a weekly dose of spoken English with a purpose, on top of the coding itself.' },
          { h3: 'Words chosen for the child', p: 'A mentor uses short sentences, checks understanding with a quick question, and tries a second explanation when the first does not land. Accent and speed are adjusted to the child, and the mentor learns how that child speaks too.' },
          { h3: 'Learning by changing', p: 'Children see a working example, change one thing, and watch what happens. Because the result is on screen, the English mostly labels what the child already sees, and the vocabulary repeats from week to week.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors work from India, which is why weekday afternoons in Essen suit them well: it is evening there. A group keeps the same mentor over the months, so the person teaching your child knows by the second or third week whether a challenge or a slower pace works better.' }
      ]
    },
    {
      id: 'sizes',
      tint: 'tint',
      eyebrow: 'A real Essen project',
      h2: 'How big is a typical Essen playground? The average and the middle',
      lede: 'Essen publishes the outline and area of every public playground as open data. A child can work out the average size in five lines of Python. The more interesting question is whether that average describes a typical playground at all.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The register comes from the City of Essen, compiled by its parks department Grün und Gruga and its land survey office, and is published through Open.NRW under the Datenlizenz Deutschland Namensnennung 2.0, which allows reuse with credit. We downloaded the GeoJSON file on 2 November 2026.',
            'It holds 415 playgrounds. For each one it gives the Stadtbezirk, the Stadtteil, a name and the area in square metres in a field called FLAECHE.'
          ],
          rightH3: 'The question',
          right: [
            'How big is a typical playground in Essen? Most children answer "work out the average", and that is where we start.',
            'Then we ask them to imagine a class where one child is 2 metres tall. The average height of the class goes up, but nobody else has grown. Could the playgrounds have a giant of their own?'
          ] },
        { kind: 'code', label: 'Version 1: the average', lang: 'Python', code: V1, note: 'Our program. It prints <code>Playgrounds: 415</code> and <code>Average size: 2483 m2</code>.' },
        { kind: 'p', mt: true, html: 'So the average Essen playground covers about 2,483 square metres. To check whether that is typical, we sort the sizes from smallest to largest and look at the one in the middle, the value with as many playgrounds below it as above. Statisticians call it the median; children call it "the middle one".' },
        { kind: 'code', label: 'Version 2: the middle one', lang: 'Python', code: V2, note: 'Our program, run after Version 1. It adds <code>Middle size: 1822 m2</code>, <code>Above the average: 156</code> and <code>Largest: 13438 Smallest: 122</code>.' },
        { kind: 'p', html: 'The middle playground is only 1,822 square metres, and just 156 of the 415 are bigger than the average. Most Essen playgrounds are smaller than "average". A handful of very large ones, led by the Brehminsel playground in Werden at 13,438 square metres, pull the average up, exactly like the 2-metre child. Neither number is wrong. They answer different questions, and a good programmer says which one they are giving.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Essen playgrounds by size (our calculation from the register)', head: ['Area', 'Playgrounds'], rows: [
          ['Under 500 m2', '32'],
          ['500 to 999 m2', '84'],
          ['1,000 to 1,999 m2', '101'],
          ['2,000 to 4,999 m2', '151'],
          ['5,000 to 9,999 m2', '42'],
          ['10,000 m2 and more', '5']
        ] },
        { kind: 'source', html: 'Data: Stadt Essen, Spielplätze, via Open.NRW and GovData, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 2 November 2026. Counts and sizes are ours. The five playgrounds of 10,000 square metres or more are in Werden, Frohnhausen, Vogelheim, Altendorf and Karnap; the smallest, at 122 square metres, is in the Westviertel. Altenessen-Süd has the most playgrounds of any Stadtteil (18), Frohnhausen the most playground area.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, with sticks.</strong> Cut seven paper strips of different lengths, one very long. Line them up from short to long and pick the middle one. Is it longer or shorter than "all the strips shared out equally"?',
          '<strong>Ages 8 to 10, in Scratch.</strong> Put ten sizes in a list, work out the average, then sort the list and find the middle item. Change one size to 50,000 and watch which number moves.',
          '<strong>Ages 10 to 12, in Python.</strong> Run both versions, then work out the average and the middle size for one Stadtteil of your choice.',
          '<strong>Going further.</strong> With an even number of values there are two middle ones. Change Version 2 so that it handles both cases, and test it on 414 playgrounds.'
        ] }
      ]
    },
    {
      id: 'jugend',
      eyebrow: 'A contest from grade 3',
      h2: 'Is there a coding contest for an Essen primary or grade 5 pupil?',
      lede: 'Yes: the Jugendwettbewerb Informatik. It is designed for secondary pupils but open from grade 3, and since 2026 it has a level aimed squarely at grades 5 and 6.',
      body: [
        { kind: 'two',
          leftH3: 'What it asks',
          left: [
            'The Jugendwettbewerb Informatik is run by BWINF, the organisers of the national informatics contests. Unlike a pure puzzle quiz, it asks children to solve programming and algorithm tasks within a time limit.',
            'From 2026 the first round has three levels, all open to everyone. Bronze, recommended for grades 5 and 6, has three tasks in 30 minutes; Silver, for grades 7 to 9, four tasks in 40 minutes; Gold, from grade 10, six tasks in 60 minutes. BWINF reports a record 71,971 participants and 7,190 first prizes.'
          ],
          rightH3: 'The 2026 rounds',
          right: [
            'In 2026 the first round ran from 23 February to 8 March and the second from 17 April to 3 May. The third round runs together with the Bundeswettbewerb Informatik from 1 September, with a closing date of 23 November 2026.',
            'Pupils may register themselves or be signed up by a teacher, and in rounds 1 and 2 they can work alone or in a team of two. The organisers will publish the 2027 dates on bwinf.de; if your child is in grade 4 or 5 now, round 1 of 2027 is the one to aim for.'
          ] },
        { kind: 'p', mt: true, html: 'We are independent of BWINF and never copy its tasks. Our own practice problems for this contest are short programs with a twist, of the kind in the playground project: one instruction that gives a surprising answer until the child thinks it through.' }
      ]
    },
    {
      id: 'essen-times',
      eyebrow: 'When classes happen',
      h2: 'When do classes take place in Essen time?',
      lede: 'After school or on weekend mornings. Every booking shows the slot in Essen time and in the mentor\'s own time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example class times in Essen and in India', head: ['Essen', 'India, winter time (to 28 March 2027)', 'India, summer time (from 28 March 2027)'], rows: [
          ['14:20', '18:50', '17:50'],
          ['16:40', '21:10', '20:10'],
          ['Saturday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German time: MEZ, one hour ahead of UTC, for the winter, and MESZ, two hours ahead, for the summer. The 2026 switch back to MEZ was on 25 October, and MESZ returns on 28 March 2027. India uses UTC+5:30 all year round, so the difference is 4 h 30 min until late March and 3 h 30 min afterwards. Rows are examples; there are no fixed batch times.' },
        { kind: 'p', mt: true, html: 'The NRW holiday dates in the KMK table for 2026 to 2027: Christmas from 23 December to 6 January, Easter from 22 March to 3 April 2027, a Whitsun day on 18 May and summer from 19 July to 31 August 2027. Classes carry on in the holidays. Families from Mülheim, Gelsenkirchen, Bottrop or Bochum join the same online groups.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How children progress',
    h2: 'From first blocks to real data: the steps we use',
    lede: 'These stages are ours. They help us put each child in the right group and give parents a plain answer to "what can she do now?"',
    table: { caption: 'Stages of learning to code, ages 6 to 12 (our scheme)', head: ['Stage', 'Around age', 'What it looks like'], rows: [
      ['1. Instructions', '6 to 7', 'Moves a sprite with a short chain of blocks'],
      ['2. Patterns', '7 to 9', 'Spots repetition and turns it into a loop'],
      ['3. Variables', '8 to 10', 'Keeps a score and a list, and changes them'],
      ['4. Python', '9 to 11', 'Types small programs and fixes simple errors'],
      ['5. Data', '10 to 12', 'Loads a real file and chooses the right summary for a question']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the playground project: knowing when to use the middle value instead of the average is a skill children keep for every news chart.',
      'Updates describe what your child built and could explain.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you trust an average, look for a giant in the list.',
      'Sort it, find the middle, and compare.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Essen children',
    lede: 'All taught live in English, and all available in a group or privately.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 6 to 12', courses: [
        { code: 'CKE / FIRST / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids, the long course', blurb: 'Age-grouped batches that move from Scratch to apps and AI basics.' },
        { code: 'CKE / FIRST / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Logic and patterns for 6 to 9 year olds.' },
        { code: 'CKE / FIRST / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI works, explained for 8 to 14, with no adult accounts.' }
      ] },
      { num: 'II', h3: 'Play and build', sub: 'Ages 7 to 14', courses: [
        { code: 'CKE / PLAY / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox scripting', blurb: 'Luau scripts for games they design, 8 to 14.' },
        { code: 'CKE / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft and code', blurb: 'A familiar world as a coding playground, 7 to 12.' },
        { code: 'CKE / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Making games', blurb: 'Several game engines in one course, 8 to 12.' }
      ] },
      { num: 'III', h3: 'Logic and numbers', sub: 'Ages 8 to 15', courses: [
        { code: 'CKE / LOGIC / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Thinking like a programmer', blurb: 'Decomposition and patterns, on and off the screen.' },
        { code: 'CKE / LOGIC / 02', slug: 'maths-through-coding', title: 'Maths with Python', blurb: 'Averages, graphs and patterns in code, 10 to 15.' },
        { code: 'CKE / LOGIC / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik contest training', blurb: 'Our own puzzles for the Biber and the Jugendwettbewerb.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The weekly rhythm',
    h2: 'How live classes fit an Essen school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'Essen school days, from around half past two.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings and early afternoons.' },
      { time: '1-on-1', l: 'A slot set with you and moved when needed.' }
    ],
    cells: [
      { h3: 'Twice weekly', p: 'Two live hours a week, nothing pre-recorded.' },
      { h3: 'Steady mentor', p: 'The group keeps its mentor.' },
      { h3: 'Doing, not watching', p: 'The child types and drags from day one.' },
      { h3: 'Close in age', p: 'Groups are formed by age band.' },
      { h3: 'Updates home', p: 'Parents hear what was made and what is next.' },
      { h3: 'Two formats', p: 'Groups of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Where young coders end up',
  projectsLede: 'A selection of projects by our older students, many of whom started in primary school; browse the <a class="ag-inline-link" href="/student-labs">student labs</a> page for more.',
  reviewsLede: 'Google reviews from families and students, as they posted them.',

  fees: {
    h2: 'Fees for Essen families',
    lede: 'The fee is paid each month and buys eight live classes. We display it in euro using the European Central Bank reference rate; the card payment is made in US dollars, and your bank converts it, so the euro amount you see on the statement may vary slightly.',
    free: ['Free first lesson', 'Meet the mentor and build something small', 'No card details'],
    group: ['A group of fifteen to twenty children', 'One mentor for the group', 'Two lessons every week', 'Paid monthly, cancel any month'],
    one: ['Private lessons for your child', 'Projects that follow their interests', 'A schedule set with you']
  },

  faq: {
    eyebrow: 'What Essen parents ask',
    h2: 'Coding classes for kids in Essen: your questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Our lessons are taught in English and only in English, always live. Mentors keep their language simple, adjust speed and accent to your child and repeat things in other words when needed. Python and Scratch commands are English words anyway.' },
      { q: 'Does my child get Informatik at school in Essen?', a: 'Yes, in grades 5 and 6, which are compulsory Informatik years at every general school type in NRW. After that it is an elective whose size depends on the school type: from grade 7 at Realschule, Gesamtschule, Sekundarschule and Hauptschule, from grade 9 at the Gymnasium.' },
      { q: 'Should the choice of secondary school depend on Informatik?', a: 'That is a family decision we do not advise on. What we can say is that the compulsory lessons in grades 5 and 6 are the same everywhere, and that the elective hours later on differ by school type, as the GI Informatik-Monitor lists them.' },
      { q: 'How young can my child begin?', a: 'At 6. Children of six and seven start with Scratch and puzzles, which need no typing. Most children move on to typed Python at around nine.' },
      { q: 'When are classes in Essen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons after school are the most popular in Essen.' },
      { q: 'Who are the mentors?', a: 'Coding mentors based in India who teach live over video. A 16:40 class in Essen is 21:10 in India in winter and 20:10 in summer, and your child keeps the same mentor.' },
      { q: 'What is the Jugendwettbewerb Informatik?', a: 'A national programming contest run by BWINF, open from grade 3, with a Bronze level of three tasks in 30 minutes for grades 5 and 6. Children can register themselves or through a teacher. We are not connected with BWINF.' },
      { q: 'What is the playground project?', a: 'An original Python project on the Essen playground register. Children compute the average size, 2,483 square metres, then the middle size, 1,822, and learn why a few very large playgrounds make the two differ.' },
      { q: 'How many children are in a group?', a: 'Between fifteen and twenty, all close in age. One-to-one lessons are available if your child would rather have a mentor alone.' },
      { q: 'How do I pay, and in which currency?', a: 'Fees are monthly. We show them in euro, calculated with the European Central Bank reference rate, and charge in US dollars, which your bank converts. The first lesson is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'Related pages',
    lede: 'Further reading for families in Essen and the Ruhr.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our pages for families anywhere in Germany.' },
      { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik', p: 'The contest levels and how to prepare.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'NRW compared with the other Länder.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online coding for kids', p: 'How live online lessons work for children in Germany.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'Everything on the NRW Land page.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A look inside our classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The trial lesson is short and friendly: your child meets a mentor, tries a puzzle and builds a first small program. Afterwards we suggest the course and the age group that suit them.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a> before you book.',
    note: 'Every class is live online, in English only, with a mentor based in India. Send us a WhatsApp message if anything is unclear.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Look for the giant before you average'
  },

  personalityCss: `
.ag-root.ag-cke .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cke .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cke .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-cke .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cke .ag-band-head h3 { letter-spacing: 0.002em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW page; KMK Primarbereich and Sekundarstufe I; Bundesweite Informatikwettbewerbe, Jugendwettbewerb Informatik pages; KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; all read 2 November 2026. Stadt Essen, Spielplätze, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'How big is a typical Essen playground: an original Python project on the city register of 415 playgrounds, where the average size is 2,483 square metres but the middle size is 1,822 and only 156 playgrounds are above the average, because a few very large ones pull the mean up. Lesson family: the average is not the typical value.',
    requiredMentions: ['Spielplaetze.geojson', 'Average size: 2483 m2', 'Middle size: 1822 m2', 'Above the average: 156', 'Largest: 13438 Smallest: 122', 'Bronze, recommended for grades 5 and 6, has three tasks in 30 minutes', 'closing date of 23 November 2026', 'Look for the giant before you average'],
    sources: [
      { claim: 'NRW compulsory Informatik grades 5 and 6; elective hours by school type; Oberstufe and Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Track changes possible in grades 5 and 6.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-i.html' },
      { claim: 'Jugendwettbewerb levels, eligibility and participants.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'Jugendwettbewerb 2026 rounds and closing date.', url: 'https://bwinf.de/jugendwettbewerb/2026/' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Essen playground register and licence.', url: 'https://ckan.govdata.de/dataset/spielplatzeb7817' }
    ],
    rejectedClaims: [
      'Advice on which secondary school to choose: not given; the page lists the rules only.',
      'Meanings of the KATEGORIE codes A, B, S and g: not explained in the record, so not interpreted.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with the City of Essen, the NRW ministry or BWINF: none.'
    ]
  }
};
