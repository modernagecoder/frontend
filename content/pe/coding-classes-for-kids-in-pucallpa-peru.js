// SHIP: market (city) | Pucallpa kids 6 to 12: river city, half of homes online, few computers | pictogram scale: a key, half symbols from the remainder, a group that vanishes
'use strict';
// Coding classes for kids in Pucallpa, Peru (ag- city page, Peru cluster row PE186; alloc: cities, copu, #8E3646).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. Audience: children aged 6 to 12 and their parents.
// Spine: Pucallpa is the largest city of the Peruvian Amazon on the 2017 count, and half of Ucayali's homes now have an
// internet service, but only about one in five has a computer and EF rates the region's English low. The page is frank
// about who live classes in English suit, what primaria gives a child, and teaches with a pictogram drawn from INEI's
// city employment survey for Pucallpa.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-for-kids-in-pucallpa-peru/):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Pucallpa city 326,040 (poblacion censada,
//    22 October 2017, capital-city conglomerate).
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department UCAYALI 623,868; province
//    CORONEL PORTILLO 470,664; district CALLERÍA 166,780. Capital Pucallpa (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (compendio2026-cuadros-11.5-11.6-11.13.txt), from ENAHO: 11.5 homes
//    with at least one computer, Ucayali "23,1 ... 21,3 21,2" (2015 ... 2024 2025), Total 2025 "33,9"; 11.6 homes with
//    internet, Ucayali "9,7 12,1 ... 48,7 50,2", Total 2025 "56,8"; 11.13 people aged 6+ using internet, Ucayali
//    "31,3 ... 72,0 75,4", Total 2025 "81,1".
//  - EF EPI 2025 Peru page (ef_peru.raw): stateScore "ukayali" proficiencySlug "low", shown as "Ukayali 458"; Peru 519
//    moderate; Lima city 555 high. EF publishes no Pucallpa city score.
//  - CNEB (FACTS 32, 33, 57): competency 28 transversal; primaria plan "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4
//    Inglés 2 2 3 3 3 3". Edades normativas (FACTS 13, 14): age at 31 March, 1° primaria 6 ... 6° primaria 11.
//  - MINEDU 16 March 2026 (FACTS 17): "53 631 colegios ... 6 225 000 estudiantes". ENLA 2025 (FACTS 59) tested
//    4° primaria in reading and maths.
//  - Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: INEI, Encuesta Permanente de Empleo Nacional (EPEN) Ciudades 2026, Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/encuesta-permanente-de-empleo-nacional-epen-ciudades-2026-instituto-nacional-de-estad%C3%ADstica,
//    licence "Open Data Commons Attribution License" (dataset-page.html), modified 2026-09-04. Resource trimestre1-2026.zip
//    (proyectos.inei.gob.pe/iinei/srienaho/descarga/CSV/trimestre1-2026.zip), inner 1035-Modulo1786.zip, file
//    "49 Pucallpa EPEN Trim. Ene-Feb-Mar 2026.csv" (saved as pucallpa-epen-2026-t1.csv), 789,808 bytes, sha256
//    a90e7c69...ce8e5a4d6, 3,090 rows, months 01, 02, 03 of 2026, Latin-1. Dictionary (dic-2026-184.txt): "C208 ... Qué
//    edad tiene en años cumplidos". Only C208 is used; the file's disability, mother-tongue and identity columns are
//    never read.
// Our own calculations (scratchpad pe/c5/copu/v1.py, v2.py; python3 -I on the downloaded file):
//  v1 prints (key 100, whole stars only): 0 ***** / 10 ***** / 20 **** / 30 **** / 40 *** / 50 ** / 60 ** / 70 * / 80 (blank)
//  v2 prints: Key: * = 50 people, + = about 25 / 0 to 9 ********** 503 / 10 to 19 ***********+ 584 / 20 to 29 ******** 421 /
//    30 to 39 ********+ 434 / 40 to 49 *******+ 390 / 50 to 59 *****+ 288 / 60 to 69 **** 220 / 70 to 79 ** 123 /
//    80 and over + 29. 98 rows have no age; 2,992 do.
// Lesson family: pictogram scale. Choose a key, draw whole symbols with //, add a half symbol from the remainder (%),
// and notice the group that vanishes when the key is too big.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'groups = {}',
  'with open("pucallpa-epen-2026-t1.csv", encoding="latin-1") as survey:',
  '    for person in csv.DictReader(survey):',
  '        if person["C208"] != "":',
  '            age = int(person["C208"])',
  '            band = min(age // 10 * 10, 80)',
  '            groups[band] = groups.get(band, 0) + 1',
  '',
  'for band in sorted(groups):',
  '    print(band, "*" * (groups[band] // 100))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'groups = {}',
  'with open("pucallpa-epen-2026-t1.csv", encoding="latin-1") as survey:',
  '    for person in csv.DictReader(survey):',
  '        if person["C208"] != "":',
  '            age = int(person["C208"])',
  '            band = min(age // 10 * 10, 80)',
  '            groups[band] = groups.get(band, 0) + 1',
  '',
  'KEY = 50',
  'print("Key: * = 50 people, + = about 25")',
  'for band in sorted(groups):',
  '    count = groups[band]',
  '    picture = "*" * (count // KEY)',
  '    if count % KEY >= KEY // 2:',
  '        picture = picture + "+"',
  '    label = str(band) + " to " + str(band + 9)',
  '    if band == 80:',
  '        label = "80 and over"',
  '    print(label.ljust(12), picture, count)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Pucallpa: coding for kids' },
  slug: 'coding-classes-for-kids-in-pucallpa-peru',
  code: 'copu',
  accent: '#8E3646',
  accentRationale: 'Coding classes for kids in Pucallpa: the allocated #8E3646, a deep river-clay red that sits warmly on the cream paper; contrast 7.16 on #FBF8F2, 6.73 on #F5F1E8 and 6.16 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes for kids in Pucallpa, Peru',
  title: 'Coding Classes for Kids in Pucallpa, Peru: Live, in English',
  description: 'Coding classes for kids in Pucallpa aged 6 to 12: live online in English at hours you choose, what primaria covers, home internet in Ucayali and a pictogram project.',
  ogDescription: 'Live online coding for Pucallpa children aged 6 to 12, taught in English at flexible hours: what Peruvian primaria covers, how many Ucayali homes are online, and a first Python project that draws a pictogram from INEI\'s Pucallpa survey.',
  twitterDescription: 'Coding for kids in Pucallpa, live online in English: primaria gaps, honest device advice and a pictogram project.',
  pageName: 'Coding Classes for Kids in Pucallpa, Peru',
  webPageDescription: 'A guide for Pucallpa parents of children aged 6 to 12 to live online coding classes taught in English, built from INEI census and household-survey figures, MINEDU curriculum sources, EF EPI 2025 and an original Python pictogram project on INEI\'s EPEN Ciudades 2026 file for Pucallpa (ODC-By).',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Pucallpa, Peru: Scratch from 6, Roblox games from 8 and typed Python from about 9, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Pucallpa, kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#homes', label: 'At home' },
    { href: '#school', label: 'Primaria' },
    { href: '#kids-ages', label: 'By age' },
    { href: '#pictogram', label: 'Pictogram project' },
    { href: '#clock', label: 'Times' }
  ],
  eyebrow: 'Pucallpa &middot; Ages 6 to 12 &middot; Live online, in English',
  h1: 'Coding classes for kids in Pucallpa, Peru',
  lede: 'A Pucallpa child does not need a coding academy across the Ucayali to learn to program. This page sets out what primaria in Ucayali does and does not teach about computers, what a family needs at home for a live class, which of our courses fits a child of six, eight, ten or twelve, and a first data project in which children draw a picture of their own city from a real INEI survey file.',
  secondaryCta: { href: '#pictogram', label: 'See the pictogram project' },
  wa: 'Hello Modern Age Coders, we live in Pucallpa, Peru and would like live coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; over 10,000 learners in many countries &middot; mentors who slow down and wait for an answer',
  spec: [
    ['Ages', '6 to 12, in groups of similar age'],
    ['Starting point', 'Scratch blocks at 6, typed Python near 9'],
    ['Class size', 'Fifteen to twenty, or one child alone'],
    ['Pucallpa hours', 'Whatever day and hour you pick'],
    ['Teachers', 'Mentors in India, on live video'],
    ['First lesson', 'Free, and no card asked for']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders teaches coding to children aged 6 to 12 in Pucallpa, Peru, live online and in English. Six and seven year olds build games with Scratch blocks, eight year olds can script Roblox worlds, and from about nine children type real Python. A real mentor leads every class over live video, either with fifteen to twenty children of a similar age or with your child alone, on the days and at the hours the family chooses. Children learn to reason a problem out for themselves rather than copy an answer.',

  picks: {
    eyebrow: 'Where Pucallpa children begin',
    h2: 'Three first courses for children in Pucallpa',
    lede: 'One for the youngest, one for game lovers and one for children ready to type. Your child can move from one to the next as they grow.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PUC / 01', title: 'Scratch programming', note: 'For six to ten year olds who have never coded. Children drag blocks to make characters move, talk and score points, and learn order, repetition and decisions without typing a word.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PUC / 02', title: 'Roblox game coding', note: 'For eight to fourteen year olds who already play Roblox. They stop being players and start writing the scripts that make doors open, coins count and obstacles move.' },
      { course: 'python-ai-kids-masterclass', code: 'PUC / 03', title: 'Python and AI for Kids', note: 'For nine to twelve year olds ready for a keyboard. Real typed Python from the first week, turtle drawings and small games, leading to the kind of data project shown lower on this page.' }
    ]
  },

  sections: [
    {
      id: 'pucallpa',
      eyebrow: 'Pucallpa in numbers',
      h2: 'How big is Pucallpa, and which population figure is right?',
      lede: 'Each figure is right for a different area. INEI counts the department, the province and the district in its 2025 census, but the last published count for the city itself is from 2017.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Pucallpa and Ucayali: four official counts, each for its own area', head: ['Area', 'People', 'Count and year'], rows: [
          ['Pucallpa city (capital of Ucayali)', '326,040', 'Census of 22 October 2017, people counted'],
          ['Department of Ucayali', '623,868', '2025 census, all residents'],
          ['Province of Coronel Portillo', '470,664', '2025 census, all residents'],
          ['District of Callería', '166,780', '2025 census, all residents']
        ] },
        { kind: 'source', html: 'The city row comes from table 1.9 of INEI\'s 2017 sociodemographic profile of Peru, which lists capital cities; the other three come from table 1 of the demographic indicators INEI released for its 2025 census, counted as at 15 September 2025. When we checked in November 2026 INEI had not released 2025 figures for cities. The four areas overlap, so we never add them up.' },
        { kind: 'two', mt: true,
          leftH3: 'A city of several districts',
          left: [
            'The city of Pucallpa spreads beyond the district of Callería into Yarinacocha and Manantay, which is why the 2017 city count is so much larger than the 2025 count for Callería alone. When someone quotes "the population of Pucallpa", it is worth asking which of these areas they mean.',
            'For a parent the useful point is simpler: there are a great many children in this city, and very few of them have a coding class within easy reach of home.'
          ],
          rightH3: 'Why online fits a river city',
          right: [
            'A live class over video reaches a child by the Yarinacocha lagoon and a child near the Callería market at the same moment, with no motocarro ride in the afternoon heat or in a sudden downpour.',
            'It also means a family that moves for work, between Pucallpa, Aguaytía or Lima, keeps the same mentor and the same class.'
          ] }
      ]
    },
    {
      id: 'homes',
      eyebrow: 'What you need at home',
      h2: 'Can a child in Pucallpa take live coding classes from home?',
      lede: 'Most families in Ucayali can now get online, but fewer have a computer. Here are INEI\'s figures for the department, and our honest advice on what a child really needs.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Connected homes and people in Ucayali against the national figure (per cent)', head: ['Measure', 'Ucayali 2015', 'Ucayali 2025', 'Peru 2025'], rows: [
          ['Homes with internet service', '9.7', '50.2', '56.8'],
          ['Homes with at least one computer', '23.1', '21.2', '33.9'],
          ['People aged 6 and over who use the internet', '31.3', '75.4', '81.1']
        ] },
        { kind: 'source', html: 'Source: INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13, drawn from the Encuesta Nacional de Hogares (ENAHO). INEI writes decimals with a comma; we show a point. Choosing 2015 as the comparison year is ours.' },
        { kind: 'two', mt: true,
          leftH3: 'Internet has spread fast, computers have not',
          left: [
            'In 2015 fewer than one Ucayali home in ten had an internet service. By 2025 it was one in two. Over the same ten years the share of homes with a computer barely moved, and was 21.2% in 2025, well under the national 33.9%.',
            'So in many Pucallpa homes the internet arrives through a phone. That is fine for chatting and watching, and much harder for coding, where a child needs a bigger screen and, from about nine, a keyboard.'
          ],
          rightH3: 'Our straight advice on devices',
          right: [
            'For Scratch, at six to eight, a tablet or a borrowed laptop is enough for the first months, because everything is done by dragging blocks. For Roblox scripting and for typed Python, a laptop or desktop with a keyboard is needed; a phone will not do.',
            'If the family computer is shared, choose a class hour when it is free, and a headset helps a lot in a busy house. If there is no computer at all yet, tell us at the free class: we would rather say a course will be hard to follow than take a fee for one that is.'
          ] },
        { kind: 'p', mt: true, html: 'A steady connection matters more than a fast one. A live class is a video call plus a shared screen, so a home connection that holds a video call without freezing will usually hold one of our classes too. If the signal drops, the mentor waits, recaps and carries on; nobody is marked absent for a power cut.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What primaria covers',
      h2: 'Do primaria schools in Pucallpa teach coding?',
      lede: 'Not as a lesson of its own. Schools in Ucayali follow the national curriculum, the CNEB, which spreads digital skills across every area instead of giving them a timetable slot.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4, 5, 6], caption: 'Hours a week in primaria for three areas, by grade (CNEB plan de estudios)', head: ['Area', '1°', '2°', '3°', '4°', '5°', '6°'], rows: [
          ['Matemática', '5', '5', '4', '4', '4', '4'],
          ['Comunicación', '5', '5', '4', '4', '4', '4'],
          ['Inglés', '2', '2', '3', '3', '3', '3'],
          ['Programming or computing', 'none', 'none', 'none', 'none', 'none', 'none']
        ] },
        { kind: 'source', html: 'Taken from the primaria plan de estudios in MINEDU\'s national curriculum, the CNEB, as read in November 2026. The bottom row is our own reading of the full plan, in which no such area appears.' },
        { kind: 'two', mt: true,
          leftH3: 'Digital skills, but no programs',
          left: [
            'Competency 28 of the CNEB is about getting along in virtual environments built with ICT, and the curriculum makes it transversal: every area is meant to use it, none owns it. It asks children to manage information and create digital objects, and it names no programming language.',
            'A teacher can therefore meet the standard with slides, videos and online research, and many do. Writing a program is not required at any grade.'
          ],
          rightH3: 'Where English already sits',
          right: [
            'The same plan gives Inglés two hours a week in 1° and 2° grado and three hours from 3° to 6°. So a Pucallpa child already meets English at school, a little each week.',
            'Our classes add a different kind of English practice: listening to a mentor explain a step, then saying back what the program should do. It is spoken, practical and tied to something the child is building.'
          ] },
        { kind: 'p', mt: true, html: 'Grades are set by MINEDU\'s normative age, measured on 31 March each year: a child who is six on that date goes into 1° de primaria, and one who is eleven into 6°. MINEDU\'s ENLA 2025 assessment tested 4° de primaria in reading and maths, the two skills that a coding class quietly exercises every week. On 16 March 2026, the first day of the year\'s classes, MINEDU counted 6,225,000 students returning to 53,631 schools across Peru.' }
      ]
    },
    {
      id: 'kids-ages',
      eyebrow: 'Six to twelve',
      h2: 'Which coding class suits a child of 6, 8, 10 or 12?',
      lede: 'Age is a guide, not a rule. The table shows where most Pucallpa children start; the free first class confirms it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where a Pucallpa child usually starts (our course ages)', head: ['Age', 'Usual grade', 'First course', 'A first project'], rows: [
          ['6 and 7', '1° and 2° primaria', 'Scratch programming', 'A parrot that flies when you press a key'],
          ['7 to 9', '2° to 4° primaria', 'Problem solving for kids, then Scratch', 'Puzzles first, then a maze game'],
          ['8 to 11', 'From 3° primaria', 'Roblox game coding', 'An obby with moving platforms'],
          ['9 to 12', '4° to 6° primaria', 'Python and AI for Kids', 'Turtle drawings, a quiz, a pictogram'],
          ['10 to 12', '5° and 6° primaria', 'Maths through coding', 'Times tables and fractions checked by code']
        ] },
        { kind: 'source', html: 'Course ages and projects are ours. Usual grades follow MINEDU\'s normative age at 31 March, so a child with a birthday late in the year may sit one grade off the row shown.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'At six and seven', p: 'Short, lively classes in which nothing has to be typed. Children predict what a block will do, try it, and laugh when the cat walks off the screen. Reading is not yet needed beyond a few words.' },
          { h3: 'At eight and nine', p: 'Children can follow longer plans, fix their own mistakes and use variables to keep a score. Many choose Roblox here, because they already know the game and want to change it.' },
          { h3: 'At ten to twelve', p: 'Typing is now quick enough for Python. Children write programs that read data, make decisions and draw results, like the pictogram project below, and start to explain their code in their own words.' }
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is live, online and taught in English only. Please read this section before booking, because for some Pucallpa children it matters a lot.',
      body: [
        { kind: 'two',
          leftH3: 'English in Ucayali, by EF\'s measure',
          left: [
            'The 2025 edition of EF\'s English Proficiency Index gives Peru as a whole a score of 519, in its moderate band, and Lima city 555, in its high band. For the Ucayali region, which EF spells "Ukayali", it shows 458, in the low band. EF publishes no separate score for the city of Pucallpa.',
            'Those scores come from adults who chose to take EF\'s test, so they say little about any single child. They do suggest that many Pucallpa children will be meeting spoken English mostly at school.'
          ],
          rightH3: 'Who this suits, honestly',
          right: [
            'Children who follow simple spoken English, or who are keen to, do well: the mentor speaks slowly, shows every step on screen and waits for an answer. A child who replies half in Spanish is understood and given the English words.',
            'A six year old with no English at all may find a whole class in English tiring. The free first class tells us quickly; if it is too soon, we will say so and suggest trying again in a few months.'
          ] },
        { kind: 'p', mt: true, html: 'Many parents see the English as the second gift of the class: an hour of building games is also an hour of listening and speaking. If that is what draws you, our page on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together in Peru</a> explains how mentors plan for it.' }
      ]
    },
    {
      id: 'pictogram',
      tint: 'tint',
      eyebrow: 'A real Pucallpa project',
      h2: 'How many people in a Pucallpa survey are the same age as you?',
      lede: 'Primaria children draw pictograms in maths: one picture stands for several things. Our ten to twelve year olds draw one with Python, from a real INEI file about Pucallpa, and learn why choosing the key changes the picture.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'INEI runs a survey of jobs in Peru\'s main cities, the Encuesta Permanente de Empleo Nacional, and publishes the answers as open data. Its EPEN Ciudades 2026 dataset is released on Peru\'s national open data platform with an ODC-By licence, the Open Data Commons one that asks only for attribution. We use its Pucallpa file for January, February and March 2026, saved as pucallpa-epen-2026-t1.csv, with 3,090 rows: one for each person in the homes INEI visited.',
            'We read only one column, C208, which INEI\'s data dictionary describes as the person\'s age in completed years. The file has other columns about people\'s lives that a children\'s lesson has no business touching, and we never open them.'
          ],
          rightH3: 'The question',
          right: [
            'Children love finding themselves in data. So we ask: in the homes INEI visited in Pucallpa, how many people were in their first ten years, like you? How many were teenagers? How many grandparents?',
            'The program puts every person into a group of ten years (0 to 9, 10 to 19, and so on, with 80 and over as the last group) and then draws one star for every 100 people in each group.'
          ] },
        { kind: 'code', label: 'Version 1: one star for every 100 people', lang: 'Python', code: V1, note: 'It prints: <code>0 *****</code>, <code>10 *****</code>, <code>20 ****</code>, <code>30 ****</code>, <code>40 ***</code>, <code>50 **</code>, <code>60 **</code>, <code>70 *</code>, and then <code>80</code> with nothing after it.' },
        { kind: 'p', mt: true, html: 'Two things look wrong to a careful child. The under-tens and the teenagers get five stars each, as if the groups were the same size, and the over-eighties get no stars at all, as if nobody that old lived in those homes. Both come from the key. The operator <code>//</code> keeps only whole hundreds and throws the rest away, so 503 and 584 both become 5, and 29 becomes 0.' },
        { kind: 'p', html: 'A pictogram in a primaria textbook solves this in two ways: a smaller key, and half pictures for what is left over. Version 2 does both. The key becomes 50 people, and if the leftover, found with <code>%</code>, is at least half a key, the program adds a plus sign as a half star.' },
        { kind: 'code', label: 'Version 2: a smaller key and a half symbol', lang: 'Python', code: V2, note: 'It prints the key line, then: <code>0 to 9 ********** 503</code>, <code>10 to 19 ***********+ 584</code>, <code>20 to 29 ******** 421</code>, <code>30 to 39 ********+ 434</code>, <code>40 to 49 *******+ 390</code>, <code>50 to 59 *****+ 288</code>, <code>60 to 69 **** 220</code>, <code>70 to 79 ** 123</code> and <code>80 and over + 29</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'The same Pucallpa ages under two keys (our calculation from the INEI file)', head: ['Age group', 'People in the file', 'Stars, key 100', 'Stars, key 50 with halves'], rows: [
          ['0 to 9', '503', '5', '10'],
          ['10 to 19', '584', '5', '11 and a half'],
          ['20 to 29', '421', '4', '8'],
          ['60 to 69', '220', '2', '4'],
          ['80 and over', '29', '0', 'a half']
        ] },
        { kind: 'source', html: 'File: the Pucallpa part of INEI\'s EPEN Ciudades 2026, January to March 2026, from datosabiertos.gob.pe, licence ODC-By, credited to INEI. Every count and star in this table is our own work. 2,992 of the 3,090 rows give an age; 98 leave it blank and the program skips them. These are people in the sample of homes INEI visited, not a count of everyone in Pucallpa.' },
        { kind: 'p', mt: true, html: 'Now the picture tells the truth: the teenagers really are the largest group in those homes, and the over-eighties are few but present. The lesson is one children meet again and again in maths and in coding: <strong>a picture is only as honest as its key</strong>. Choose the key, then check that every group still shows up.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Age 6 to 8, on paper.</strong> Draw a pictogram of your family\'s ages, one smiley for every ten years. What do you draw for a three year old cousin?',
          '<strong>Age 8 to 10, in Scratch.</strong> Make a sprite stamp one star for every 50 in a list of numbers. Then try 100 and watch which bars disappear.',
          '<strong>Age 10 to 12, in Python.</strong> Run Version 1, then write the half-star rule yourself before reading ours. Can you make a quarter star for what is left after that?',
          '<strong>Going further.</strong> Change the groups to the school stages: 0 to 5, 6 to 11 for primaria, 12 to 16 for secundaria. Which group is biggest now, and why might the answer be different from the ten-year groups?'
        ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Class times',
      h2: 'What time would classes be for a child in Pucallpa?',
      lede: 'Whenever suits your family. Pucallpa keeps Peru time all year, and our mentors in India plan around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample hours in Pucallpa and the matching hour for a mentor in India (conversions only)', head: ['In Pucallpa', 'In India', 'For the mentor'], rows: [
          ['06:30', '17:00', 'Late afternoon, same day'],
          ['08:30', '19:00', 'Evening, same day'],
          ['10:00', '20:30', 'Evening, same day'],
          ['14:30', '01:00', 'Small hours of the next day'],
          ['16:00', '02:30', 'Small hours of the next day'],
          ['19:30', '06:00', 'Early morning of the next day']
        ] },
        { kind: 'source', html: 'Peru uses UTC minus 5 hours throughout the year and dropped summer time after 1994 (tz database zone America/Lima; official time from INACAL). India uses UTC plus 5 hours 30 minutes. India is therefore always 10 hours 30 minutes ahead of Pucallpa.' },
        { kind: 'p', mt: true, html: 'Neither country moves its clocks, so an hour you agree in March stays the same hour in December. You always book in your own time and the booking page shows the mentor the India time. Many Pucallpa families start in the long January to March school holiday and keep the same slot once colegio returns, often a morning class before afternoon school or a slot after lunch.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a Pucallpa child can do as they move up',
    lede: 'Our own steps, used to place a new child in the right group and to tell parents, plainly, what has changed.',
    table: { caption: 'Coding steps for children aged 6 to 12 (ours)', head: ['Step', 'Often reached at', 'Your child can'], rows: [
      ['1. Sequence', '6 or 7', 'Snap blocks in order so a character walks, jumps and speaks'],
      ['2. Repeat', '7 or 8', 'Use a loop instead of copying the same block ten times'],
      ['3. Decide', '8 or 9', 'Make a game react when a key is pressed or two sprites touch'],
      ['4. Remember', '8 to 10', 'Keep a score or a lives counter in a variable'],
      ['5. Type', '9 to 12', 'Write short Python programs with loops and if statements'],
      ['6. Picture data', '10 to 12', 'Turn a list of numbers into a chart and say whether it is fair']
    ] },
    left: { h3: 'For parents', ps: [
      'Step 6 is the pictogram project. A child who can say "this key hides the smallest group" is reasoning, not just typing.',
      'Each month you hear what your child built and what they found hard, in plain words.'
    ] },
    right: { h3: 'For young coders', ps: [
      'If a bar disappears, the people did not. Your key swallowed them.',
      'Guess the answer first, then run the program and see if you were right.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Pucallpa children',
    lede: 'Arranged by age. In each one your child meets the same mentor, live and in English, with other children or alone.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 9', courses: [
        { code: 'PUC / A / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch stories and games that grow into simple apps over the year.' },
        { code: 'PUC / A / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Riddles, patterns and plans that train a coder\'s habits of mind.' },
        { code: 'PUC / A / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is, what it gets wrong, and how to use it safely, made for children.' }
      ] },
      { num: 'II', h3: 'Games and building', sub: 'Ages 8 to 12', courses: [
        { code: 'PUC / B / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds and changes Minecraft worlds.' },
        { code: 'PUC / B / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Plan, build and polish small games with levels and scores.' },
        { code: 'PUC / B / 03', slug: 'kids-ai-web-development-course', title: 'Web pages with AI help', blurb: 'First web pages, with AI used as a careful helper.' }
      ] },
      { num: 'III', h3: 'Numbers and logic', sub: 'Ages 9 to 12', courses: [
        { code: 'PUC / C / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, tables and shapes, tested with short programs.' },
        { code: 'PUC / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident arithmetic in the head.' },
        { code: 'PUC / C / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A first look at a fast, strict language for keen coders.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'A class, step by step',
    h2: 'How a live class works for a child in Pucallpa',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'An early Pucallpa hour is evening in India, and a good fit for the youngest.' },
      { time: 'After lunch', l: 'Afternoon and early evening slots work as well; the mentor adapts.' },
      { time: 'One to one', l: 'Your own hour, agreed directly between family and mentor.' }
    ],
    cells: [
      { h3: 'Same face each week', p: 'One mentor who learns how your child thinks and talks.' },
      { h3: 'Slow, clear English', p: 'Short sentences, steps shown on screen, time to reply.' },
      { h3: 'Child at the controls', p: 'Your child builds; the mentor guides and asks questions.' },
      { h3: 'Children with children', p: 'Groups of similar age, never mixed with adults.' },
      { h3: 'News for parents', p: 'What was made, what was tricky, what comes next.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty children, or your child only.' }
    ]
  },

  projectsH2: 'What older students have gone on to build',
  projectsLede: 'Children who keep going end up making real things. Some are shown below, and many more are in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What families have written about us on Google, unedited.',

  fees: {
    h2: 'Fees for children in Pucallpa',
    lede: 'Payment is monthly. We price in US dollars and charge the card in that currency; the soles figure on your statement is whatever your bank\'s rate makes it that day.',
    free: ['A free first class', 'A small game and a chat in English', 'No card needed'],
    group: ['Fifteen to twenty children of similar age', 'The same mentor every week', 'Two live classes a week', 'Pay monthly, stop any month'],
    one: ['Your child and one mentor', 'Projects picked around your child', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Pucallpa parents ask',
    h2: 'Coding classes for kids in Pucallpa: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No, never. Our lessons are live and online, and English is the only teaching language. Mentors keep sentences short, follow your child\'s pace and accent, show each step on screen, and when a child answers partly in Spanish they reply with the English words.' },
      { q: 'Is there a coding class for kids in Pucallpa?', a: 'Yes, live online. Children in Callería, Yarinacocha, Manantay and nearby log in from home; nobody has to cross the city. Scratch starts at 6, Roblox scripting at about 8 and typed Python at about 9.' },
      { q: 'What does my child need at home?', a: 'A steady internet connection and, from about nine, a laptop or desktop with a keyboard. A tablet can do for the first Scratch months at six to eight. A phone alone is not enough. A headset helps in a busy house.' },
      { q: 'Only one in five Ucayali homes has a computer. Can we still join?', a: 'INEI\'s 2025 figure for Ucayali is 21.2% of homes with a computer. If you have no computer yet, tell us at the free class and we will be honest about which course, if any, will work, rather than sign you up for one that will not.' },
      { q: 'How young can a child begin?', a: 'Six is a good age, using Scratch, where children drag blocks instead of typing. Most move on to typed Python at nine or ten, when the keyboard no longer slows them down.' },
      { q: 'Does primaria in Ucayali teach programming?', a: 'No. The national curriculum treats digital skills as a transversal competency used in every area, and the primaria plan has no computing or programming area. Programming is learned outside school.' },
      { q: 'What time are the classes in Pucallpa?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With India ten and a half hours ahead every day of the year, 08:30 in Pucallpa is 19:00 for the mentor.' },
      { q: 'My child speaks very little English. Is it too early?', a: 'Possibly, for a six year old. Many children manage well because coding is visual and the mentor waits for answers. The free first class shows us within minutes, and if it is too soon we will tell you so.' },
      { q: 'What currency are the fees in?', a: 'US dollars, paid monthly by card; your bank turns the charge into soles. Visitors from India see rupees on this page instead. The trial class costs nothing and we ask for no card details.' },
      { q: 'Will my child get a certificate?', a: 'Where a course has one, your child receives a completion certificate from us. MINEDU and Peruvian schools play no part in it and it counts for nothing at school; its value is that it lists what your child really made.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages for Pucallpa families',
    lede: 'More on coding for children in Peru, and on our classes.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, by age and by subject.' },
      { href: '/online-coding-classes-for-kids-peru', label: 'Online coding classes for kids in Peru', p: 'The national guide for parents of six to twelve year olds.' },
      { href: '/python-for-kids-peru', label: 'Python for kids in Peru', p: 'When a child is ready to type real code.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'Another Peruvian city, a different data project.' },
      { href: '/ai-tools-age-guide', label: 'Age limits of AI tools', p: 'Why some popular AI apps are not for children.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Pucallpa',
    lede: 'The free class is a small game and a friendly chat. By the end the mentor knows how your child attacks a puzzle and copes with spoken English, and will recommend a course, a group, or simply waiting a while.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Classes run live over video from India, in English only. For a fast reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'About us', links: [
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru' }
      ] }
    ],
    bottomRight: 'A picture is only as honest as its key'
  },

  personalityCss: `
.ag-root.ag-copu .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-copu .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-copu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-copu .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-copu .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1); INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); MINEDU CNEB plan de estudios and competency 28, Edades normativas, ENLA 2025, school-year opening 2026; EF EPI 2025; tz database America/Lima. Data: INEI EPEN Ciudades 2026, Pucallpa file January to March 2026, ODC-By.',
    localProject: 'How many people in a Pucallpa survey are your age? An original Python pictogram on INEI\'s EPEN Ciudades 2026 Pucallpa file (ODC-By), reading only the age column: Version 1 draws a star per 100 people with //, making 503 and 584 look equal and the 29 people aged 80 and over vanish; Version 2 uses a key of 50 and a half symbol from the remainder (%), so every group shows. Lesson family: pictogram scale.',
    requiredMentions: ['pucallpa-epen-2026-t1.csv', '326,040', '623,868', '166,780', '21.2', 'Ukayali', '80 and over + 29', '10 to 19 ***********+ 584', 'A picture is only as honest as its key'],
    sources: [
      { claim: 'Pucallpa city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Ucayali, Coronel Portillo and Callería populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ucayali homes with computer and internet, internet use, 2015 to 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EPEN Ciudades 2026 dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/encuesta-permanente-de-empleo-nacional-epen-ciudades-2026-instituto-nacional-de-estad%C3%ADstica' },
      { claim: 'Primaria weekly hours and the transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages by grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025 scores for Peru, Lima and Ucayali.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A 2025 population for Pucallpa city: INEI has not published one; the 2017 figure is labelled 2017.',
      'Any total made by adding the city, department, province or district counts: never summed.',
      'Reading the survey file as a count of everyone in Pucallpa: it is a sample of homes, and the page says so.',
      'Any use of the file\'s disability, mother-tongue or identity columns: never read.',
      'A Pucallpa city English score: EF publishes none; only the Ucayali region score is quoted.',
      'Spanish-language teaching: every class is in English.',
      'Any link with INEI, MINEDU, any school or the regional government: none.'
    ]
  }
};
