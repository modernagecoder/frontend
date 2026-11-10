// SHIP: market (city) | Juliaca kids 6 to 12: altiplano trading city, homes thinly connected, honest fit | one loop over a list of column names, and blank cells skipped before int()
'use strict';
// Coding classes for kids in Juliaca, Peru (ag- city page, Peru cluster row PE189; alloc: cities, ckj, #772938).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. Audience: children aged 6 to 12 and their parents.
// Spine: Juliaca is the largest city of the Puno department on the 2017 count, but only a quarter of Puno homes had an
// internet service in 2025 and EF scores the region's English very low. The page is unusually frank about who live
// English-taught classes fit in Juliaca, what primaria gives a child, and teaches with INEI's Juliaca employment survey,
// asking which day of the week people in Juliaca work most.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-for-kids-in-juliaca-peru/):
//  - INEI Lib1541, Directorio Nacional de Centros Poblados 2017, dpto21.xlsx (places.tsv): JULIACA 217,743 (poblacion
//    censada 2017) for the single centro poblado 2111010001; the adjoining centro poblado San Miguel (district San
//    Miguel) 58,367 is a separate settlement and is never added.
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department PUNO 1,232,993; province
//    SAN ROMÁN 314,679; district JULIACA 220,379. Capital of Puno is Puno (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (compendio2026-cuadros-11.5-11.6-11.13.txt), ENAHO: 11.5 Puno "20,7 ...
//    22,1 21,4"; 11.6 Puno "5,7 ... 23,1 24,8"; 11.13 Puno "29,7 ... 67,7 69,1"; Totals 2025 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): stateScore puno "very-low", "Puno 417"; Peru 519 moderate; Lima city 555 high. No Juliaca
//    score.
//  - CNEB (FACTS 32, 33, 57): competency 28 transversal; primaria "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4
//    Inglés 2 2 3 3 3 3". Edades normativas (FACTS 13, 14). MINEDU 16 March 2026 (FACTS 17). MINEDU satellite internet
//    plan for 55,000 public schools, September 2026 (FACTS 29): "conectar 55 000 escuelas públicas a internet satelital".
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: INEI, Encuesta Permanente de Empleo Nacional (EPEN) Ciudades 2025, Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/encuesta-permanente-de-empleo-nacional-epen-ciudades-2025-instituto-nacional-de-estad%C3%ADstica,
//    licence "Open Data Commons Open Database License (ODbL)" (dataset-page.html), modified 2026-07-24. Resource
//    anual-2025.zip (proyectos.inei.gob.pe/iinei/srienaho/descarga/CSV/anual-2025.zip, 11,234,446 bytes), inner
//    1000-Modulo1826.zip, file "44 Juliaca EPEN Anual 2025.csv" (saved as juliaca-epen-2025.csv), 2,076,217 bytes, sha256
//    6216764606...7cefefd3f, 8,402 rows, months 01 to 12 of 2025, all AREA 1. Dictionary (dic-2025-186.txt): "C318_1 ...
//    318. Cuántas horas trabajó la semana pasada, Ocupación Principal - domingo", C318_2 lunes ... C318_7 sábado, "Rango :
//    (0:24)". Only the seven C318 columns are read. ODbL is share-alike: a database made from it and published would
//    carry the ODbL; this page publishes only counts and code.
// Our own calculations (scratchpad pe/c5/ckj/v1.py, v2.py; python3 -I):
//  v1 stops with: ValueError: invalid literal for int() with base 10: ''
//  v2 prints: People who answered: 3416 / Sunday 9816 hours, 1297 people worked / Monday 20218 hours, 2636 / Tuesday
//    19136, 2535 / Wednesday 19646, 2607 / Thursday 19900, 2601 / Friday 18728, 2461 / Saturday 15022, 1984.
//  check: every row either fills all seven columns or none (0 mixed); 1,297 / 3,416 = 38.0% worked on Sunday.
// Lesson family: one loop over a list of column names (with a matching list of day names) instead of seven copied lines,
// and a blank cell skipped before int() turns it into a number.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'sunday = 0',
  'monday = 0',
  'with open("juliaca-epen-2025.csv", encoding="latin-1") as sheet:',
  '    for line in csv.DictReader(sheet):',
  '        sunday = sunday + int(line["C318_1"])',
  '        monday = monday + int(line["C318_2"])',
  'print("Sunday hours:", sunday)',
  'print("Monday hours:", monday)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'columns = ["C318_1", "C318_2", "C318_3", "C318_4", "C318_5", "C318_6", "C318_7"]',
  'days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]',
  'hours = [0, 0, 0, 0, 0, 0, 0]',
  'workers = [0, 0, 0, 0, 0, 0, 0]',
  'answered = 0',
  '',
  'with open("juliaca-epen-2025.csv", encoding="latin-1") as sheet:',
  '    for line in csv.DictReader(sheet):',
  '        if line["C318_1"] == "":',
  '            continue',
  '        answered = answered + 1',
  '        for i in range(7):',
  '            h = int(line[columns[i]])',
  '            hours[i] = hours[i] + h',
  '            if h > 0:',
  '                workers[i] = workers[i] + 1',
  '',
  'print("People who answered:", answered)',
  'for i in range(7):',
  '    print(days[i].ljust(10), hours[i], "hours,", workers[i], "people worked")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Juliaca: coding for kids' },
  slug: 'coding-classes-for-kids-in-juliaca-peru',
  code: 'ckj',
  accent: '#772938',
  accentRationale: 'Coding classes for kids in Juliaca: the allocated #772938, a dark wine red with the weight of altiplano adobe; contrast 9.18 on #FBF8F2, 8.63 on #F5F1E8 and 7.90 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes for kids in Juliaca, Peru',
  title: 'Coding Classes for Kids in Juliaca, Peru: Live, in English',
  description: 'Coding classes for kids in Juliaca aged 6 to 12: live online in English at hours you pick, an honest fit check, what primaria covers and a Juliaca work-days project.',
  ogDescription: 'Live online coding for Juliaca children aged 6 to 12, taught in English at flexible hours: who it suits and who should wait, what primaria in Puno covers, and a first Python project on INEI\'s Juliaca survey about the days of the week.',
  twitterDescription: 'Coding for kids in Juliaca, live online in English: an honest fit check, primaria gaps, and a days-of-the-week project.',
  pageName: 'Coding Classes for Kids in Juliaca, Peru',
  webPageDescription: 'A guide for Juliaca parents of children aged 6 to 12 to live online coding classes taught in English, built from INEI census and household-survey figures, MINEDU curriculum sources, EF EPI 2025 and an original Python project on INEI\'s EPEN Ciudades 2025 file for Juliaca (ODbL).',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Juliaca, Peru: Scratch from 6, problem solving and games from 7 and Python from about 9, in a group of fifteen to twenty or one to one, at hours the family picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Juliaca, kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#fit', label: 'Is it a fit?' },
    { href: '#colegio', label: 'Primaria' },
    { href: '#first-courses', label: 'By age' },
    { href: '#weekdays', label: 'Juliaca project' },
    { href: '#juliaca-hours', label: 'Times' }
  ],
  eyebrow: 'Juliaca &middot; Ages 6 to 12 &middot; Live online, in English',
  h1: 'Coding classes for kids in Juliaca, Peru',
  lede: 'This page starts with a question most coding pages skip: is a live class in English, over the internet, the right thing for a child in Juliaca right now? For many families the answer is yes; for some it is "not yet", and we say how to tell. Then it covers what primaria gives a child, which of our courses fits each age, and a project in which children find out from INEI\'s own Juliaca survey which day of the week people there work most.',
  secondaryCta: { href: '#weekdays', label: 'See the Juliaca project' },
  wa: 'Hello Modern Age Coders, we live in Juliaca, Peru and would like live coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Teaching children live since 2020 &middot; 10,000+ students in many countries &middot; we tell families when to wait',
  spec: [
    ['Children', 'Aged 6 to 12, grouped by age'],
    ['First tool', 'Scratch at 6, Python from about 9'],
    ['Class', 'Fifteen to twenty children, or one'],
    ['Juliaca time', 'You choose the day and hour'],
    ['Mentor', 'Teaching from India, on live video'],
    ['To begin', 'A free class, no card']
  ],
  capsuleQ: 'Short answer for Juliaca parents',
  capsule: 'Modern Age Coders teaches coding to children aged 6 to 12 in Juliaca, Peru, live online and in English. Children of six start with Scratch blocks, seven and eight year olds add logic puzzles and games, and from about nine they type Python. Each class is led by a mentor on live video, in a group of fifteen to twenty children of the same age band or one to one, at the hours your family picks. It suits children with some spoken English and a computer at home; the free class tells you honestly if it is too soon.',

  picks: {
    eyebrow: 'First courses in Juliaca',
    h2: 'Three ways a Juliaca child can start',
    lede: 'Blocks for the youngest, puzzles for thinkers, Python for children ready to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'JUL / 01', title: 'Coding for Kids', note: 'Six to twelve year olds, in age-matched groups. Scratch stories and games first, with no typing needed, then simple apps and a first look at AI over the year.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'JUL / 02', title: 'Problem solving for kids', note: 'Seven to twelve year olds. Puzzles, patterns and step-by-step plans that build the habits of a programmer, a good first course for a child still growing their English.' },
      { course: 'python-ai-kids-masterclass', code: 'JUL / 03', title: 'Python and AI for Kids', note: 'Nine to twelve year olds ready for the keyboard. Typed Python, drawings, games and small projects with real data, like the Juliaca one below.' }
    ]
  },

  sections: [
    {
      id: 'juliaca',
      eyebrow: 'Juliaca in figures',
      h2: 'How many people live in Juliaca?',
      lede: 'It depends what you count. INEI\'s most precise figure for the city is from 2017 and covers one settlement only; its 2025 figures are for the district, the province and the department.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Juliaca by the area INEI measured (never add these together)', head: ['What INEI counted', 'People', 'Year'], rows: [
          ['Juliaca, the single centro poblado', '217,743', '2017'],
          ['District of Juliaca', '220,379', '2025'],
          ['Province of San Román', '314,679', '2025'],
          ['Department of Puno', '1,232,993', '2025']
        ] },
        { kind: 'source', html: 'The 2017 row is from INEI\'s Directorio Nacional de Centros Poblados 2017 for Puno, people counted on census day. The 2025 rows are from INEI\'s Censos Nacionales 2025, Indicadores demográficos, table 1. INEI had not published 2025 figures for cities when we checked in November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'One settlement, not the whole city',
          left: [
            'The 217,743 counted in 2017 are the people of one centro poblado called Juliaca. The built-up area spills into the next district: the settlement of San Miguel, in the district of San Miguel, had 58,367 people that year, counted separately. INEI publishes no single figure for the two together, so we do not make one up by adding them.',
            'Juliaca is bigger than Puno city, the department capital, which INEI counted at 128,637 in 2017, but it is not the capital itself.'
          ],
          rightH3: 'Why online, from Juliaca',
          right: [
            'A child in Juliaca who learns online has exactly the same mentor, course and classmates as a child in any other city, with nothing lost to distance.',
            'Nobody has to go out on a cold altiplano evening: the class begins when the laptop opens at home.'
          ] }
      ]
    },
    {
      id: 'fit',
      tint: 'tint',
      eyebrow: 'An honest fit check',
      h2: 'Are live online classes in English right for a Juliaca child?',
      lede: 'For some children, clearly yes; for others, not yet. Two things decide it: whether the home can hold a video class, and how much spoken English the child already follows.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Puno homes and people online, with Peru for comparison (per cent)', head: ['Measure', 'Puno 2015', 'Puno 2025', 'Peru 2025'], rows: [
          ['Homes with an internet service', '5.7', '24.8', '56.8'],
          ['Homes with a computer', '20.7', '21.4', '33.9'],
          ['People aged 6 and over using the internet', '29.7', '69.1', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, tables 11.6, 11.5 and 11.13, from the ENAHO household survey. These are department figures; INEI does not split them by city. Decimal commas shown as points; 2015 as the comparison year is our choice.' },
        { kind: 'two', mt: true,
          leftH3: 'The connection at home',
          left: [
            'In 2025 about a quarter of homes in the Puno department had an internet service, far below the national figure, though up from 5.7% in 2015. Juliaca, as the largest city, is likely better connected than rural Puno, but INEI does not publish a city figure, so we cannot say by how much.',
            'A child needs a connection that holds a video call for an hour, and a computer: about one Puno home in five has one. A borrowed laptop at a relative\'s house works; a phone on mobile data usually does not.'
          ],
          rightH3: 'The English',
          right: [
            'EF\'s English Proficiency Index 2025 scores the Puno region 417, in its very low band, against 519 for Peru and 555 for Lima city. It gives no Juliaca figure. Primaria in Peru teaches Inglés two to three hours a week.',
            'Our classes are taught in English only. A child who understands simple instructions will cope and improve; a child who understands almost none will find a full class in English hard, at least for now.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Try the free class first.</strong> It shows within minutes whether your child follows the mentor. You owe nothing either way.',
          '<strong>Start with blocks or puzzles.</strong> Scratch and the problem-solving course rely on pictures and actions more than words, so children with little English get further.',
          '<strong>Choose one to one if English is the worry.</strong> In a private class the mentor can slow right down, repeat with gestures and check every step.',
          '<strong>Wait a few months if you need to.</strong> If it is too soon, we will say so plainly and suggest a time to try again, rather than take a fee for a class your child cannot follow.'
        ] },
        { kind: 'p', mt: true, html: 'Schools are getting connected too: in September 2026 MINEDU announced a plan to link 55,000 public schools to satellite internet. That helps schools, not homes, but it shows the direction. Our <a class="ag-inline-link" href="/online-coding-and-ai-classes-puno-region-peru">guide to online coding classes across the Puno region</a> looks at connection in more detail, including mobile coverage outside the city.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Primaria',
      h2: 'What does a primaria school in Juliaca teach about computers?',
      lede: 'Digital skills, spread across subjects, but no programming lesson. Juliaca\'s schools follow the national curriculum.',
      body: [
        { kind: 'two',
          leftH3: 'A competency without a timetable',
          left: [
            'Peru\'s national curriculum, the CNEB, includes competency 28, about working in digital environments, and marks it transversal: it is meant to appear in every area. No area is called computing, and no programming language is named anywhere in the standard.',
            'In practice a Juliaca child may use a computer or tablet at school for research or presentations, but is unlikely ever to write a program there.'
          ],
          rightH3: 'What the week does contain',
          right: [
            'The primaria plan gives Matemática five hours a week in 1° and 2° grado and four from 3° to 6°, the same for Comunicación, and Inglés two hours in the first two grades and three after that.',
            'Coding uses all three. Children count and compare in maths, read and follow instructions in Comunicación, and in our classes practise English while they do both.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Primaria grades in Peru and the normative age for each (MINEDU)', head: ['Grade', 'Age at 31 March', 'A coding step that fits'], rows: [
          ['1° grado', '6', 'Ordering blocks so a sprite walks and talks'],
          ['2° grado', '7', 'Repeating with a loop instead of copying'],
          ['3° grado', '8', 'Making a game react to a key press'],
          ['4° grado', '9', 'Keeping a score; first typed Python'],
          ['5° grado', '10', 'Lists and loops in Python'],
          ['6° grado', '11', 'Reading a real data file, as in the project below']
        ] },
        { kind: 'source', html: 'Ages: MINEDU, Edades normativas (normative age measured on 31 March). The coding steps are ours. Hours: MINEDU, CNEB plan de estudios for primaria. When the 2026 school year began on 16 March 2026, MINEDU reported 6,225,000 students in 53,631 schools nationwide.' }
      ]
    },
    {
      id: 'first-courses',
      eyebrow: 'By age',
      h2: 'Which course should a Juliaca child take at 6, 9 or 12?',
      lede: 'Our suggestions by age, with a note on English for each. The free class settles the choice.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested first courses for Juliaca children (our course ages)', head: ['Age', 'Course', 'How much English it needs', 'What they make first'], rows: [
          ['6 to 7', 'Coding for Kids (Scratch)', 'A little: words are few, actions many', 'A llama that jumps over a fence'],
          ['7 to 9', 'Problem solving for kids', 'A little to some', 'Logic puzzles and step-by-step plans'],
          ['8 to 12', 'Roblox game coding', 'Some', 'A simple obstacle course'],
          ['9 to 12', 'Python and AI for Kids', 'Some to good', 'Typed drawings and a quiz'],
          ['10 to 12', 'Maths through coding', 'Some', 'Checking times tables with code']
        ] },
        { kind: 'source', html: 'Course ages, English notes and first projects are ours, based on how children in our classes usually manage.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Six and seven', p: 'Classes are short and full of movement on screen. The mentor demonstrates, the child copies, then changes one thing. English words come one at a time: move, turn, repeat, if.' },
          { h3: 'Eight and nine', p: 'Children start planning before they build. They explain in a sentence what their game will do, then make it. Many are ready to try their first typed lines of Python.' },
          { h3: 'Ten to twelve', p: 'Children type quickly enough for Python and can read a short error message. They work with lists and real data, and present what they found to the group.' }
        ] },
        { kind: 'p', mt: true, html: 'For a fuller view of coding for this age group across the country, see <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>. Spanish-speaking parents may prefer <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>, which explains the same classes in Spanish.' }
      ]
    },
    {
      id: 'weekdays',
      eyebrow: 'A real Juliaca project',
      h2: 'Which day of the week do people in Juliaca work most?',
      lede: 'INEI asks working people in Juliaca how many hours they worked on each day of the past week. Our ten to twelve year olds add those answers up, and on the way learn two habits: never copy the same line seven times, and never turn an empty box into a number.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'INEI\'s Encuesta Permanente de Empleo Nacional surveys homes in Peru\'s main cities every month. Its EPEN Ciudades 2025 dataset is published on Peru\'s open data platform under the Open Data Commons Open Database Licence (ODbL), a share-alike licence: if we published a database built from it, ours would have to use the same licence. We publish only counts and code.',
            'The Juliaca file for 2025, juliaca-epen-2025.csv, has 8,402 rows, one for each person in the homes INEI visited across the year. Seven columns, C318_1 to C318_7, hold the hours worked on Sunday, Monday and so on to Saturday. We read those seven and nothing else.'
          ],
          rightH3: 'The question',
          right: [
            'Ask a class which day people work most and most children say Monday. Some say Saturday, because that is when they see their parents busiest. Nobody can be sure without counting.',
            'The first program tries the obvious thing: add up every number in the Sunday column and the Monday column.'
          ] },
        { kind: 'code', label: 'Version 1: add up two columns', lang: 'Python', code: V1, note: 'It stops before printing anything, with the error <code>ValueError: invalid literal for int() with base 10: \'\'</code>.' },
        { kind: 'p', mt: true, html: 'The error is in English, and the mentor reads it aloud with the children. "Invalid literal for int" means Python was asked to make a whole number out of something that is not one. The two quote marks at the end are the clue: the thing was empty. Babies, school children and people with no job were in those homes too, and nobody asked them about hours, so their boxes are blank. A blank is not the same as zero; it means "no answer".' },
        { kind: 'p', html: 'Version 2 fixes that and a second problem. If a row has no Sunday answer it is skipped. And instead of seven copied lines, one for each day, the column names go into a list, the day names into another list in the same order, and a single loop walks through both.' },
        { kind: 'code', label: 'Version 2: skip blanks and loop over the days', lang: 'Python', code: V2, note: 'It prints <code>People who answered: 3416</code>, then <code>Sunday 9816 hours, 1297 people worked</code>, <code>Monday 20218 hours, 2636 people worked</code>, <code>Tuesday 19136 hours, 2535 people worked</code>, <code>Wednesday 19646 hours, 2607 people worked</code>, <code>Thursday 19900 hours, 2601 people worked</code>, <code>Friday 18728 hours, 2461 people worked</code> and <code>Saturday 15022 hours, 1984 people worked</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Hours worked by day among the Juliaca people who answered (our calculation)', head: ['Day', 'Hours, all answers added', 'People who worked that day'], rows: [
          ['Monday', '20,218', '2,636'],
          ['Thursday', '19,900', '2,601'],
          ['Wednesday', '19,646', '2,607'],
          ['Tuesday', '19,136', '2,535'],
          ['Friday', '18,728', '2,461'],
          ['Saturday', '15,022', '1,984'],
          ['Sunday', '9,816', '1,297']
        ] },
        { kind: 'source', html: 'Data: INEI, Encuesta Permanente de Empleo Nacional (EPEN) Ciudades 2025, Juliaca file, published on datosabiertos.gob.pe under the Open Data Commons Open Database Licence (ODbL, share-alike). The sums and the ordering are ours. Each person reported the week before their own interview, and interviews ran through all of 2025, so these are not hours for one particular week. They describe the people INEI interviewed, not every worker in Juliaca.' },
        { kind: 'p', mt: true, html: 'Monday wins, narrowly, so most children were right. The bigger surprise is Sunday: 1,297 of the 3,416 people who answered, about 38%, worked on Sunday as well. For many people in this survey, the working week did not stop at Saturday. Children then ask the next good question themselves: are Sunday workers working fewer hours, or are there just fewer of them? Dividing hours by people answers it, and that is next week\'s class.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Age 6 to 8, unplugged.</strong> Ask five people at home how many hours they worked yesterday. Write a dash, not a zero, for anyone who did not work. Why does it matter which you write?',
          '<strong>Age 8 to 10, in Scratch.</strong> Make two lists, one of day names and one of numbers, and have a sprite say each day with its number. Use one loop, not seven blocks.',
          '<strong>Age 10 to 12, in Python.</strong> Run Version 1 and read the error aloud. Fix it yourself before you look at Version 2.',
          '<strong>Going further.</strong> Divide each day\'s hours by its number of workers. On which day do the people who work, work longest?'
        ] }
      ]
    },
    {
      id: 'juliaca-hours',
      eyebrow: 'Class times',
      h2: 'What time would a child in Juliaca have class?',
      lede: 'At any hour that suits the family. Juliaca is on Peru time all year, and the mentor adjusts to it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Some Juliaca hours and the same moment in India (conversions only)', head: ['Juliaca', 'India', 'Note'], rows: [
          ['07:30', '18:00', 'Before morning school'],
          ['10:30', '21:00', 'A holiday or afternoon-shift morning'],
          ['13:00', '23:30', 'Straight after a morning shift'],
          ['15:30', '02:00, next day', 'Mid-afternoon'],
          ['17:30', '04:00, next day', 'Before dinner']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours throughout the year and has not changed its clocks since 1994 (tz database zone America/Lima; INACAL publishes the official hour). India keeps UTC plus 5 hours 30 minutes, so the gap is always 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'Since neither country moves its clocks, a slot booked now is the same slot next year. Book in Juliaca time and the system converts it for the mentor. Many families pick a morning class in the January to March holidays and keep it, or move it to the afternoon, once primaria restarts in March.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a Juliaca child moves up, step by step',
    lede: 'Our own stages, so parents can see real progress, not just time spent online.',
    table: { caption: 'Coding stages for children aged 6 to 12 (ours)', head: ['Stage', 'Often at', 'Your child can'], rows: [
      ['1. Follow', '6', 'Put a few blocks in order and predict what happens'],
      ['2. Loop', '7', 'Repeat an action with one block instead of many'],
      ['3. React', '8', 'Make something happen when a key is pressed'],
      ['4. Count', '8 to 9', 'Keep a score that goes up and resets'],
      ['5. Type', '9 to 12', 'Write Python with lists and loops'],
      ['6. Handle gaps', '10 to 12', 'Skip empty answers before adding numbers from a real file']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 6 is the Juliaca project. A child who can explain why a blank is not a zero is thinking like a careful scientist.',
      'You hear each month what your child made, in plain words.'
    ] },
    right: { h3: 'For young coders', ps: [
      'If you are writing the same line seven times, make a list and a loop.',
      'An empty box means nobody answered. It does not mean zero.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Juliaca children',
    lede: 'By age band, from first blocks to first algorithms, all live and in English with a mentor who stays the same.',
    bands: [
      { num: 'I', h3: 'Youngest', sub: 'Ages 6 to 9', courses: [
        { code: 'JUL / Y / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Animation, stories and games with blocks.' },
        { code: 'JUL / Y / 02', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Number sense and patterns for young learners.' },
        { code: 'JUL / Y / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is and is not, at a child\'s level.' }
      ] },
      { num: 'II', h3: 'Builders', sub: 'Ages 8 to 12', courses: [
        { code: 'JUL / B / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripts that bring Roblox worlds to life.' },
        { code: 'JUL / B / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds and changes Minecraft.' },
        { code: 'JUL / B / 03', slug: 'block-coding-app-development-masterclass', title: 'Block coding apps', blurb: 'First phone apps made with blocks.' }
      ] },
      { num: 'III', h3: 'Thinkers', sub: 'Ages 9 to 12', courses: [
        { code: 'JUL / T / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths turned into small programs.' },
        { code: 'JUL / T / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, accurate sums in the head.' },
        { code: 'JUL / T / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Logic and careful thinking, with or without a computer.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How a live class works for a Juliaca child',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'A Juliaca morning is evening in India, calm for a first class.' },
      { time: 'After school', l: 'Afternoons work as well; the family chooses.' },
      { time: 'Private', l: 'One to one at the hour you and the mentor agree.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person every week, who learns your child.' },
      { h3: 'Patient English', p: 'Few words, clear actions, time to answer.' },
      { h3: 'Hands on', p: 'Your child does the building; the mentor guides.' },
      { h3: 'Age groups', p: 'Six year olds never share with twelve year olds.' },
      { h3: 'Parents informed', p: 'What was made and what comes next.' },
      { h3: 'Your choice', p: 'Fifteen to twenty children, or only yours.' }
    ]
  },

  projectsH2: 'What older students have made',
  projectsLede: 'Children who stay with coding go on to build real things. A few appear below and more are in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews left on Google by parents and students, as written.',

  fees: {
    h2: 'Fees for children in Juliaca',
    lede: 'Plans run monthly. They are priced and charged in US dollars on a card, and your bank turns the charge into soles at its own daily rate, so the statement may vary a little.',
    free: ['A free first class', 'A small game and an English check', 'No card needed'],
    group: ['Fifteen to twenty children, similar ages', 'One mentor throughout', 'Two live classes a week', 'Monthly, stop whenever'],
    one: ['Only your child and the mentor', 'Pace set for your child', 'Days and hours you pick']
  },

  faq: {
    eyebrow: 'Juliaca parents ask',
    h2: 'Coding classes for kids in Juliaca: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are live, online and taught only in English. Mentors use short sentences, show every step, adapt to your child\'s pace and accent, and when a child answers in Spanish they reply with the English words. We check at the free class that your child can follow.' },
      { q: 'Are there coding classes for children in Juliaca?', a: 'Yes, live online. Children in Juliaca and nearby, including San Miguel, join from home on a computer. Scratch starts at 6 and typed Python at about 9.' },
      { q: 'Is my child\'s English good enough?', a: 'If your child follows simple spoken instructions, usually yes. If not, start with Scratch or problem solving, choose one to one, or wait a few months. The free class shows you in minutes, and we will tell you honestly.' },
      { q: 'We have no computer at home. Can my child join?', a: 'Not well on a phone alone. A borrowed laptop at a relative\'s home for two hours a week works. INEI counted a computer in about one Puno home in five in 2025, so you are not alone; tell us and we will help you plan.' },
      { q: 'Does primaria in Juliaca teach coding?', a: 'No. The national curriculum treats digital skills as transversal and the primaria plan has no programming area. Children use computers at school sometimes but rarely write programs.' },
      { q: 'What time are classes in Juliaca?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Juliaca all year, so 07:30 in Juliaca is 18:00 for the mentor.' },
      { q: 'What age is right to start?', a: 'Six, with Scratch blocks, where nothing is typed. From about nine most children are ready for Python. Older children can start straight with Python.' },
      { q: 'What is the Juliaca project?', a: 'Children aged 10 to 12 add up INEI\'s Juliaca survey answers about hours worked on each day of the week. They learn to skip empty answers and to use one loop instead of copying code seven times. Monday comes out on top, but 38% of those who answered also worked on Sunday.' },
      { q: 'How are fees paid?', a: 'Monthly, in US dollars, by card; your bank converts the amount into soles. A visitor from India sees rupees. The first class is free and needs no card.' },
      { q: 'Is there a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a school qualification in Peru and has nothing to do with MINEDU or any school; it records what your child built.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages for Juliaca families',
    lede: 'More about coding for children in Peru and about our classes.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The full list of Peru pages.' },
      { href: '/online-coding-and-ai-classes-puno-region-peru', label: 'Online coding and AI classes in the Puno region', p: 'The wider region, from Puno city to the provinces.' },
      { href: '/learn-coding-and-english-together-peru', label: 'Learn coding and English together', p: 'How the English side of our classes works.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where most six year olds begin.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What a ten year old can type.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A class from the inside.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Juliaca',
    lede: 'Your child plays with a short coding puzzle while the mentor watches how they think and how much English they follow. You then get an honest suggestion: a course and group, one to one, or waiting a little.',
    readFirst: 'If you want to read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Mentors teach live from India, in English only. Send a WhatsApp message in English for the quickest answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru' }
      ] }
    ],
    bottomRight: 'A blank is not a zero'
  },

  personalityCss: `
.ag-root.ag-ckj .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ckj .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ckj .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ckj .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ckj .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Directorio Nacional de Centros Poblados 2017 (dpto21), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1) and Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); MINEDU CNEB, Edades normativas, school-year opening 2026, satellite internet plan; EF EPI 2025; tz database America/Lima. Data: INEI EPEN Ciudades 2025, Juliaca file, ODbL (share-alike).',
    localProject: 'Which day of the week do people in Juliaca work most? An original Python project on INEI\'s EPEN Ciudades 2025 Juliaca file (ODbL, share-alike), reading only the seven hours-by-day columns: Version 1 crashes with ValueError on a blank cell; Version 2 skips unanswered rows and loops over a list of column names, finding Monday highest (20,218 hours) and 1,297 of 3,416 people working on Sunday. Lesson family: a loop over column names; a blank is not a zero.',
    requiredMentions: ['juliaca-epen-2025.csv', '217,743', '58,367', '220,379', 'People who answered: 3416', 'Sunday 9816 hours, 1297 people worked', 'Puno region 417', '24.8', 'A blank is not a zero'],
    sources: [
      { claim: 'Juliaca and San Miguel centros poblados, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto21.xlsx' },
      { claim: 'Puno department, San Román province and Juliaca district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Puno city population, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Puno homes with internet and computer, internet use, 2015 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EPEN Ciudades 2025 dataset and its ODbL licence.', url: 'https://www.datosabiertos.gob.pe/dataset/encuesta-permanente-de-empleo-nacional-epen-ciudades-2025-instituto-nacional-de-estad%C3%ADstica' },
      { claim: 'Primaria weekly hours and transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Satellite internet plan for 55,000 public schools.', url: 'https://www.gob.pe/institucion/minedu/noticias/1438938-minedu-conectara-a-internet-satelital-a-55-000-escuelas-publicas' },
      { claim: 'EF EPI 2025 scores for Peru, Lima and Puno.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A combined Juliaca and San Miguel population: INEI publishes none and we never add the two.',
      'A 2025 Juliaca city figure: not published; the 2025 row is the district.',
      'A Juliaca-only internet or English figure: INEI and EF publish department or region figures only.',
      'Reading the hours as one week\'s total for all of Juliaca: they are survey answers spread over 2025.',
      'Any use of the survey\'s disability, mother-tongue, identity or income columns: never read.',
      'Republishing the ODbL database: only counts and code appear.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
