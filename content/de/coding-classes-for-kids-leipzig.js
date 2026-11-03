'use strict';
// Coding classes for kids in Leipzig (ag- city door, Germany cluster P5 row DE129).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: Sachsen is one of the Länder where every pupil takes Informatik, one lesson a week from grade 7, with a
// Technik/Computer subject in grades 5 and 6; but grades 1 to 4 have none. So the question for a Leipzig parent is not
// whether school will teach computing but what a child does before grade 7. Free contest: the Mathematik-Olympiade, which
// primary pupils in grades 3 and 4 can enter through school. Project: Leipzig's open tree register, where "which tree is
// most common?" has two different answers depending on whether you count kinds or families.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/; read 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Sachsen page (facts-school/src/infmon-sachsen/135681b2.txt): "Sowohl an der Oberschule
//    als auch am Gymnasium wird das Fach Informatik jeweils einstündig in den Jahrgangsstufen 7 bis 10 unterrichtet."
//    (FACTS 85); "Für das interdisziplinäre Fach „Technik/Computer“ liegen Lehrpläne für die Jahrgangsstufen 5 bis 6";
//    Lehrplan Informatik "aus dem Jahr 2022"; "Die Primarstufe umfasst die Grundschule mit den Jahrgangsstufen 1 bis 4";
//    Gymnasium "Jahrgangsstufe 10 als Einführungsphase sowie die Jahrgangsstufen 11 und 12 als Qualifikationsphase
//    (G8-Bildungsgang)"; Leistungskurs "an ausgewählten Gymnasien" (86); key figure "Anteil SuS mit Informatik in der Sek
//    II 43 %".
//  - GI national page: Sachsen among four Länder meeting the four-hour target (91); in Sachsen and MV "etwa die Hälfte der
//    Lernenden" take Informatik in the Oberstufe (98).
//  - Mathematik-Olympiade (facts-school/src/mo-bw/, moev/): about 200,000 a year (162); primary since 2005 (164); "Der
//    Wettbewerb für die Klassen 3 und 4 besteht aus drei Runden"; pupils "wenden sich direkt an die Fachlehrerin oder den
//    Fachlehrer ihrer Schule"; 66th MO "Landesrunde: 26. – 28.02.2027 Bundesrunde: 30.05. – 02.06.2027" (166); 2027
//    Bundesrunde in Kaiserslautern (167).
//  - KMK Ferien 2026/27 row "Sachsen (1)": Herbst 12.10. - 24.10.; Weihnachten 23.12. - 02.01.; Winter 08.02. - 19.02.;
//    Ostern 26.03. - 02.04.; 07.05.; Pfingsten 15.05. - 18.05.; Sommer 10.07. - 20.08.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Leipzig 611,850; Sachsen 4,042,422; Dresden 564,904.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Leipzig via Freistaat Sachsen, "Baumkataster, Stadt Leipzig",
//    https://ckan.govdata.de/dataset/baumkataster-stadt-leipziga1af1, licence Datenlizenz Deutschland Namensnennung 2.0
//    (dcat-ap.de dl-by-de/2.0), CSV via WFS typeName OpenData:Baeume (38,614,754 bytes, 187,690 rows, sha256
//    328e99b4...6fc02d), downloaded 2 Nov 2026, fme_tstamp 2026-10-30. Dataset notes: street trees and trees on city
//    land (parks, cemeteries, allotment associations, forest, waters, sports grounds, schools and children's facilities);
//    "Die Bestandsdatenerfassung der Baumstandorte ist noch nicht abgeschlossen." 615 distinct German species names,
//    102 genera; 11,340 rows named "Linde" with ga_lang_wiss "Tilia species" (11,339) or "Tilia spec." (1).
//    baumhoehe maximum 9002 (a Stiel-Eiche, Habitatbaumkartierung), next 6961, 133, 112.
// Our own calculations (scratchpad de/w/C4/ckl/v1.py, v2.py, python3 -I): v1 prints "Gemeine Esche 12411", "Berg-Ahorn
// 11522", "Linde 11340"; v2 prints "Acer 37236", "Tilia 36025", "Fraxinus 16204".
// Lesson family: decide the level of a category (kind or family) before you count, and read what a vague label means.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'species = {}',
  'with open("leipzig_trees.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        name = row["species"]',
  '        species[name] = species.get(name, 0) + 1',
  '',
  'top = sorted(species, key=species.get, reverse=True)[:3]',
  'for name in top:',
  '    print(name, species[name])'
].join('\n');

const V2 = [
  'genus = {}',
  'with open("leipzig_trees.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        name = row["genus"]',
  '        genus[name] = genus.get(name, 0) + 1',
  '',
  'top = sorted(genus, key=genus.get, reverse=True)[:3]',
  'for name in top:',
  '    print(name, genus[name])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Leipzig: coding for kids' },
  slug: 'coding-classes-for-kids-leipzig',
  code: 'ckl',
  accent: '#1A6E8D',
  accentRationale: 'Coding classes for kids, Leipzig: a lake blue #1A6E8D for the flooded pits of the Leipziger Neuseenland south of the city; contrast 4.66 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Leipzig',
  title: 'Coding Classes for Kids in Leipzig: Live Online, in English',
  description: 'Coding classes for kids in Leipzig, ages 6 to 12: live online in English, Informatik in Saxon schools from grade 7, the Mathematik-Olympiade and a tree data project.',
  ogDescription: 'Live online coding in English for Leipzig children aged 6 to 12: what Saxon schools teach and when, a maths olympiad open from grade 3, and a project on the city\'s register of almost 188,000 trees.',
  twitterDescription: 'Coding for Leipzig kids, live in English: Saxon school Informatik, the Mathematik-Olympiade and a Leipzig tree project.',
  pageName: 'Coding Classes for Kids in Leipzig',
  webPageDescription: 'A guide for Leipzig parents of children aged 6 to 12 to learning to code, built from the Informatik-Monitor page for Sachsen, the Mathematik-Olympiade pages, the KMK holiday table and an original project on the Leipzig Baumkataster.',
  courseDescription: 'Live online coding classes in English for Leipzig children aged 6 to 12: block games first, then typed Python and small data and AI projects, in a group of fifteen to twenty or one to one, with a mentor who stays the same.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Leipzig',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#trees', label: 'Trees' },
    { href: '#olympiad', label: 'Olympiad' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Leipzig &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Leipzig',
  lede: 'Saxony is one of the Länder that already gives every secondary pupil a weekly Informatik lesson, from grade 7. That still leaves six school years, from the first day of Grundschule to the end of grade 6, before a Leipzig child writes a program in class. This page explains the Saxon timetable, how our English-language video lessons run for six to twelve year olds, a maths olympiad that primary pupils can enter, and what Leipzig\'s own tree register teaches about counting carefully.',
  secondaryCta: { href: '#trees', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, we are in Leipzig and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ learners worldwide &middot; one regular mentor, lessons in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Begins with', 'Visual blocks, then typed Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Leipzig times', 'Afternoons and weekend mornings, flexible'],
    ['Mentors', 'Based in India, live by video'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In a nutshell',
  capsule: 'Leipzig children aged 6 to 12 learn to code with Modern Age Coders in live online classes taught in English. They begin with block games, move to typed Python from around nine, and later try small data projects such as counting the trees in Leipzig\'s open register. Each child keeps one mentor, who adapts the pace and speaks clearly for young learners of English. Families choose a class of fifteen to twenty or private lessons, in the afternoon or on weekend mornings.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Three courses for Leipzig children',
    lede: 'A short taster in blocks, a puzzle course that trains the thinking behind code, and a typed Python course that leads to projects like the tree count below.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CKL / 01', title: 'A first term of Scratch', note: 'Suits complete beginners from about 7. Three to four months of building games, so you can see quickly whether coding clicks.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CKL / 02', title: 'Thinking like a programmer', note: 'Suits 7 to 12 year olds. Logic puzzles, patterns and step-by-step plans, useful for school maths and olympiad problems alike.' },
      { course: 'python-ai-kids-masterclass', code: 'CKL / 03', title: 'Python with small AI projects', note: 'Suits 9 to 12 year olds who read fluently. Real typed code, drawings, games and data work such as counting Leipzig\'s trees.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Saxon schools',
      h2: 'When do Leipzig schools start teaching computing?',
      lede: 'In grade 7 as its own subject, with some computing inside a broader subject in grades 5 and 6. The details come from the Sachsen page of the Informatik-Monitor 2026/27, published by the GI.',
      body: [
        { kind: 'two',
          leftH3: 'Primary school and grades 5 and 6',
          left: [
            'In Saxony the Grundschule covers grades 1 to 4 and has no computing subject. In grades 5 and 6, both the Oberschule and the Gymnasium teach Technik/Computer, a combined subject whose curriculum names some media and some informatics skills.',
            'So a Leipzig child of eight sees computers at school, but nobody is required to teach that child how a program works.'
          ],
          rightH3: 'From grade 7: Informatik for everyone',
          right: [
            'From grade 7 to grade 10, Informatik is taught for one lesson a week at both the Oberschule and the Gymnasium, under a curriculum dated 2022. Saxony is one of four Länder the monitor counts as meeting the short-term goal of four compulsory hours.',
            'The subject is popular later on. The monitor puts the share of Saxon upper-secondary pupils taking Informatik at 43 percent, and its national summary says about half take it in Saxony and Mecklenburg-Vorpommern.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing on a Leipzig pupil\'s timetable, 2026/27', head: ['Grades', 'Stage', 'Computing lessons'], rows: [
          ['1 to 4', 'Grundschule', 'None as a subject'],
          ['5 and 6', 'Oberschule or Gymnasium', 'Technik/Computer, a combined subject with some informatics'],
          ['7 to 10', 'Oberschule or Gymnasium', 'Informatik, one lesson a week, compulsory'],
          ['10', 'Gymnasium', 'Einführungsphase of the Oberstufe (eight-year route)'],
          ['11 and 12', 'Gymnasium', 'Informatik as a Grundkurs; a Leistungskurs only at selected schools']
        ] },
        { kind: 'source', html: 'Source: Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, Sachsen page and national summary, read on 2 November 2026. Leipzig, with 611,850 residents on 31 December 2024 according to Destatis, is the largest city in Saxony, slightly ahead of Dresden with 564,904; the Land as a whole has 4,042,422.' },
        { kind: 'p', mt: true, html: 'Because the rules are set for the whole Land, a family in Markkleeberg, Taucha, Schkeuditz or Markranstädt sees the same timetable as one in Connewitz or Gohlis. A child who has spent the primary years making games and solving puzzles walks into grade 7 Informatik already comfortable with loops and variables, and has time to enjoy the subject instead of catching up.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Do the classes happen in German or English?',
      lede: 'English, always, and live. Here is why that works for children who are still learning the language.',
      body: [
        { kind: 'three', cells: [
          { h3: 'We say it up front', p: 'There is no German-language version of our classes. We would rather a Leipzig family knew that before booking than discovered it in the trial.' },
          { h3: 'Pace that fits the child', p: 'The mentor waits, rephrases and demonstrates. When a seven year old mixes German and English in one sentence, the mentor understands and calmly supplies the missing English word.' },
          { h3: 'Code keeps its words', p: 'Programs use the same keywords in every country: repeat, if, print. A child who learns them in English meets exactly the same words in grade 7 Informatik.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors are in India and teach over a live video link with the screen shared. India is ahead of Leipzig by several hours, so the late afternoon here is the mentor\'s evening, and a child keeps the same mentor for months. That continuity matters at this age: the mentor learns which child needs encouragement before trying, and which one wants the harder version straight away.' }
      ]
    },
    {
      id: 'trees',
      tint: 'tint',
      eyebrow: 'A real Leipzig project',
      h2: 'What is the most common tree in Leipzig?',
      lede: 'Leipzig publishes a register of the trees it looks after, open for anyone to reuse. It is a perfect file for a child\'s first data question, because the answer changes depending on how you decide to group the trees.',
      body: [
        { kind: 'two',
          leftH3: 'The register',
          left: [
            'The Baumkataster lists street trees and trees on city land: parks, cemeteries, allotment gardens, forest, river banks, sports grounds, schools and children\'s centres. The copy we downloaded in November 2026 has 187,690 rows, one per tree, and the city notes that the inventory is not finished yet.',
            'Each row gives a genus, such as Acer, and a German species name, such as Berg-Ahorn. We save just those two columns as leipzig_trees.csv.'
          ],
          rightH3: 'The question',
          right: [
            'Which tree does Leipzig have most of? Children guess oak, or chestnut, or "the ones on our street". The first program counts each species name and prints the top three.',
            'The second program counts by genus, the larger family a species belongs to. Watch how the winner changes, and look closely at the third name in the first answer.'
          ] },
        { kind: 'code', label: 'Version 1: count by species name', lang: 'Python', code: V1, note: 'It prints: <code>Gemeine Esche 12411</code>, <code>Berg-Ahorn 11522</code> and <code>Linde 11340</code>.' },
        { kind: 'p', mt: true, html: 'Common ash comes first with 12,411 trees. Third is "Linde", plain linden, with 11,340. But Linde is not a species: in the scientific column those rows say Tilia species, which means someone recorded that the tree is a linden without saying which kind. The register also lists Winter-Linde, Stadt-Linde, Kaiser-Linde and many more as separate names. So the species count mixes exact names with an "unknown kind" bucket, and splits one family into many small piles.' },
        { kind: 'code', label: 'Version 2: count by genus', lang: 'Python', code: V2, note: 'It prints: <code>Acer 37236</code>, <code>Tilia 36025</code> and <code>Fraxinus 16204</code>.' },
        { kind: 'p', html: 'Counted by family, the maples (Acer) win with 37,236 trees and the lindens (Tilia) are close behind with 36,025. The ashes (Fraxinus), first by species, drop to third with 16,204. Neither answer is wrong. They answer two different questions, and a careful programmer says which question was asked before printing a winner.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Leipzig\'s register counted two ways (our calculation)', head: ['Counted by', 'First', 'Second', 'Third'], rows: [
          ['Species name (615 different names)', 'Gemeine Esche, 12,411', 'Berg-Ahorn, 11,522', 'Linde (kind not recorded), 11,340'],
          ['Genus (102 different genera)', 'Acer, maples, 37,236', 'Tilia, lindens, 36,025', 'Fraxinus, ashes, 16,204']
        ] },
        { kind: 'source', html: 'Data: Stadt Leipzig, Baumkataster, published through the Freistaat Sachsen open data portal, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 2 November 2026. All counts are our own; rows with an empty name are counted as their own group and do not reach the top three.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, at the table.</strong> Sort a bag of buttons by colour, then by size. Which pile is biggest each time? Is it the same pile?',
          '<strong>Ages 8 to 10, in Scratch.</strong> Make two lists, one of tree names and one of families, and let a sprite announce which family appears most often.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1, find out what Linde really means, then write Version 2 without looking.',
          '<strong>Going further.</strong> The register also has a height column. Sort by it and look at the top two entries, 9,002 and 6,961 metres. No tree is that tall. What should a program do with values that cannot be true?'
        ] }
      ]
    },
    {
      id: 'olympiad',
      eyebrow: 'A contest from grade 3',
      h2: 'Can a Leipzig primary pupil enter a maths olympiad?',
      lede: 'Yes. The Mathematik-Olympiade has a primary version for grades 3 and 4, entered through the school.',
      body: [
        { kind: 'two',
          leftH3: 'The competition',
          left: [
            'The Mathematik-Olympiade is a national contest with about 200,000 pupils a year, and since 2005 it has been offered to primary schools as well. For grades 3 and 4 it runs in three rounds.',
            'Its problems ask children to explain their reasoning, not only to find a number, which is the same habit good programmers need.'
          ],
          rightH3: 'How to take part',
          right: [
            'The organisers ask pupils to go straight to the maths teacher at their own school. Its information page says the school round starts each year when the new school year begins, so the moment to ask is early in the autumn term.',
            'For older pupils, the national association lists the Landesrunde of the 66th olympiad for 26 to 28 February 2027 and the Bundesrunde, held in Kaiserslautern, for 30 May to 2 June 2027.'
          ] },
        { kind: 'p', mt: true, html: 'We never use the olympiad\'s own problems in class. Our mentors write fresh puzzles that build the same skills, such as trying small cases, spotting a rule and checking it. We have no connection with the Mathematik-Olympiaden e.V. or with any Saxon school.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What times suit a Leipzig family?',
      lede: 'Weekday afternoons and weekend mornings are the usual choices. The rows below translate a few Leipzig start times into the mentor\'s time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Leipzig start times and the matching time in India', head: ['Leipzig', 'India until 27 March 2027', 'India from 28 March 2027'], rows: [
          ['15:40', '20:10', '19:10'],
          ['17:10', '21:40', '20:40'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Example times, not fixed batches. German legal time is CET (UTC+1) in winter and CEST (UTC+2) in summer under the Einheitenzeitgesetz; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India is on UTC+5:30 all year: four and a half hours ahead of Leipzig in winter, three and a half in summer.' },
        { kind: 'p', mt: true, html: 'Saxon school holidays for 2026/27, from the KMK table: autumn break 12 to 24 October 2026, Christmas 23 December 2026 to 2 January 2027, a winter break from 8 to 19 February 2027, Easter 26 March to 2 April 2027, Whitsun 15 to 18 May 2027 and summer 10 July to 20 August 2027. Classes carry on through all of them, and families who travel simply skip a week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five steps from first blocks to real data',
    lede: 'Our own scale. We use it to place a new child and to tell parents, in plain words, what has moved on.',
    table: { caption: 'Our coding steps for ages 6 to 12', head: ['Step', 'Age, roughly', 'What the child does'], rows: [
      ['1. Sequence', '6 to 7', 'Snaps blocks in order so a character walks, jumps and talks'],
      ['2. Loop', '7 to 8', 'Replaces a long chain of copies with one repeat block'],
      ['3. Branch', '8 to 9', 'Builds a game that reacts to keys and keeps a score'],
      ['4. Text code', '9 to 11', 'Types Python with variables, lists and loops'],
      ['5. Grouping data', '10 to 12', 'Counts items in a file and explains how they were grouped']
    ] },
    left: { h3: 'For parents', ps: [
      'Step 5 is the tree project. The skill that matters is the sentence at the end: "counted by family, maples win".',
      'Updates describe what your child made and understood, not minutes spent at a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you say what is biggest, say how you sorted.',
      'If a name looks vague, find out what it really means before you trust it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Leipzig children',
    lede: 'Live, in English and with a regular mentor, either in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Early starters', sub: 'Ages 5 to 10', courses: [
        { code: 'CKL / EARLY / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Readiness for young thinkers', blurb: 'Patterns and order for six to nine year olds.' },
        { code: 'CKL / EARLY / 02', slug: 'kids-coding-blocks-masterclass', title: 'A year of block coding', blurb: 'Games that grow into apps, by age group.' },
        { code: 'CKL / EARLY / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Bead work that turns into mental arithmetic.' }
      ] },
      { num: 'II', h3: 'Building games', sub: 'Ages 7 to 14', courses: [
        { code: 'CKL / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Coding inside Minecraft', blurb: 'From visual blocks to written commands.' },
        { code: 'CKL / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Scripted worlds for 8 to 14 year olds.' },
        { code: 'CKL / GAME / 03', slug: 'game-development-masterclass-for-kids', title: 'Three game platforms', blurb: 'Scratch, Roblox and Minecraft in sequence.' }
      ] },
      { num: 'III', h3: 'Beyond games', sub: 'Ages 8 to 15', courses: [
        { code: 'CKL / MORE / 01', slug: 'maths-through-coding', title: 'Maths meets code', blurb: 'School topics explored with short programs.' },
        { code: 'CKL / MORE / 02', slug: 'cpp-programming-for-kids-course', title: 'First steps in C++', blurb: 'Puzzles and small games for 9 to 12.' },
        { code: 'CKL / MORE / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'A kids\' hackathon', blurb: 'Twelve weeks towards a finished project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A normal week of classes for a Leipzig child',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoons', l: 'After Hort or homework, from mid-afternoon.' },
      { time: 'Weekend mornings', l: 'Quieter sessions that suit the youngest.' },
      { time: '1-on-1', l: 'Booked around your family\'s week.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'The mentor who taught last week teaches this week.' },
      { h3: 'Clear speech', p: 'Short instructions, shown as well as said.' },
      { h3: 'Child at the controls', p: 'Your child builds; the mentor guides.' },
      { h3: 'Age-matched groups', p: 'Classes are formed by age and level.' },
      { h3: 'Notes home', p: 'A few lines after lessons on progress.' },
      { h3: 'Your choice of format', p: 'A class of fifteen to twenty, or private teaching.' }
    ]
  },

  projectsH2: 'What older students have built',
  projectsLede: 'Early starters often keep going into their teens and build things that surprise their parents. A selection is below; <a class="ag-inline-link" href="/student-labs">student labs</a> collects more.',
  reviewsLede: 'Google reviews from parents and students, quoted exactly.',

  fees: {
    h2: 'Fees for Leipzig families',
    lede: 'Each month covers eight live classes. Figures on this page are shown in euro, using the reference rate set by the European Central Bank, while the payment is processed in US dollars; your bank handles the conversion, so the statement may show a slightly different amount.',
    free: ['A free trial class', 'A puzzle and a first small program', 'No card required'],
    group: ['Fifteen to twenty children close in age', 'A regular mentor', 'Two classes each week', 'Paid monthly, easy to stop'],
    one: ['One child, one mentor', 'Projects chosen with your child', 'Times set around your week']
  },

  faq: {
    eyebrow: 'Leipzig parents ask',
    h2: 'Coding classes for kids in Leipzig: frequently asked questions',
    items: [
      { q: 'Are the classes taught in German?', a: 'No. Classes are live and in English only. The mentor uses simple sentences, shows each step on screen and adapts to your child\'s pace and accent, so children who are new to English manage well. Keywords in Scratch and Python are the same in any language.' },
      { q: 'Do Leipzig primary schools teach coding?', a: 'Not as a subject. Grundschule in Saxony runs from grade 1 to grade 4 without one. Grades 5 and 6 have Technik/Computer, a combined subject with some informatics, and Informatik itself starts in grade 7 with one lesson a week.' },
      { q: 'Is Informatik compulsory in Saxony?', a: 'Yes, from grade 7 to grade 10, at both the Oberschule and the Gymnasium, one lesson a week, according to the Informatik-Monitor 2026/27. In the Oberstufe it can be a Grundkurs, and a Leistungskurs exists at selected Gymnasien.' },
      { q: 'How young can my child start?', a: 'At 6. The youngest work with picture blocks, so they need neither typing nor fluent reading. Most children move to typed Python somewhere around 9, when reading and typing feel easy.' },
      { q: 'When are classes in Leipzig time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Leipzig families often pick a slot between about 15:30 and 17:30, or a Sunday morning.' },
      { q: 'Which contest could my primary-age child try?', a: 'The Mathematik-Olympiade has a primary version for grades 3 and 4 with three rounds. Pupils enter through their maths teacher at school, and the school round begins at the start of the school year.' },
      { q: 'Where do the mentors teach from?', a: 'From India, live over video. A 15:40 class in Leipzig starts at 20:10 for the mentor in winter. Your child has the same mentor each week.' },
      { q: 'How large are the groups?', a: 'Fifteen to twenty children of a similar age. If you would prefer private teaching, the one-to-one plan gives your child two lessons a week with the mentor alone.' },
      { q: 'What does it cost, and in which currency?', a: 'Fees are monthly. You see them in euro at the European Central Bank reference rate, but the payment is made in US dollars and converted by your bank, so the amount may differ slightly. The trial class is free and needs no card.' },
      { q: 'What kind of projects will my child do?', a: 'Young children make games and animated stories from blocks. Older children write Python, draw with code and, from about 10, ask questions of real data, such as counting the trees in Leipzig\'s register.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in and around Leipzig.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for families across Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How Saxony compares with the other fifteen Länder.' },
      { href: '/math-olympiad-germany-preparation', label: 'Maths olympiad preparation', p: 'More on the Mathematik-Olympiade and how to prepare.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Ideas sorted by age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in one of our lessons.' }
    ]
  },

  start: {
    h2: 'Book a free trial class',
    lede: 'The trial is a friendly puzzle followed by a first small program. From it the mentor can tell how your child approaches a problem and how much English feels comfortable, and suggests where to begin.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a> before booking.',
    note: 'Live online classes, in English only, with mentors in India. Send us a WhatsApp message in English if you have a question first.',
    formNote: 'No cost and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/math-olympiad-germany-preparation', label: 'Maths olympiad prep' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Say how you sorted before you name a winner'
  },

  personalityCss: `
.ag-root.ag-ckl .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-ckl .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ckl .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ckl .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ckl .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen page and national summary); Mathematik-Olympiaden e.V. and the olympiad information pages; KMK Ferien 2026/27; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; all read 2 and 3 November 2026. Stadt Leipzig, Baumkataster, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Leipzig\'s most common tree, counted two ways: an original Python project on the 187,690-row Baumkataster in which species names put Gemeine Esche first (12,411) with an "unknown kind" Linde bucket third (11,340, Tilia species), while genus counts put Acer first (37,236), Tilia second (36,025) and Fraxinus third (16,204); plus button-sorting and Scratch versions and an impossible 9,002 m height as an extension. Lesson family: decide the level of a category before you count.',
    requiredMentions: ['leipzig_trees.csv', 'Gemeine Esche 12411', 'Linde 11340', 'Acer 37236', 'Tilia species', '9,002 and 6,961 metres', 'Linde (kind not recorded), 11,340', 'Say how you sorted before you name a winner'],
    sources: [
      { claim: 'Saxony: Informatik one lesson a week in grades 7 to 10; Technik/Computer in 5 and 6; Grundschule grades 1 to 4; 43 percent in Sek II; Leistungskurs at selected Gymnasien.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'Saxony meets the four-hour target; about half take Informatik in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'Mathematik-Olympiade: participation, primary rounds, entry via the school, 2027 Landesrunde and Bundesrunde.', url: 'https://www.mathematik-olympiaden.de/moev/index.php' },
      { claim: 'Saxon school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Leipzig Baumkataster contents, coverage note and DL-DE BY 2.0 licence.', url: 'https://ckan.govdata.de/dataset/baumkataster-stadt-leipziga1af1' },
      { claim: 'Populations of Leipzig, Dresden and Sachsen on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any explanation of why 11,340 lindens lack a species: the register does not say, so none is given.',
      'Naming Leipzig schools or Leipzig International School as a source of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the Mathematik-Olympiade, the Land of Saxony or the city of Leipzig: none.'
    ]
  }
};
