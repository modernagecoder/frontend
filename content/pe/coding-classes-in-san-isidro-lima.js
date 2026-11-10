// SHIP: market (en district, Lima) | San Isidro adults first: working and retired learners, then their children | max() and min() on a dict compare keys, not values; key=d.get
'use strict';
// Coding classes in San Isidro, Lima (ag- English district page, Peru cluster row PE053, hubGroup cities; alloc csi,
// #9E4B58). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// ("City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible at any hour. Fees only through the template's data-price anchors (USD).
// Audience: adults who live or work in San Isidro and read English (office workers, freelancers, retired professionals),
// then their children and grandchildren at bilingual and international schools.
// Spine: San Isidro is the oldest of the six districts in this batch by INEI 2025 age mix; internet use in Peru rose
// fastest among people of 60 and over between 2023 and 2026 (INEI Cuadro 2.1), so the page is built for adult learners.
// Different from the two Spanish San Isidro pages: vacaciones-utiles-de-programacion-san-isidro-lima (secundaria summer
// before OPI and admission; school-date table; lesson: prefix sums) and clases-de-programacion-san-isidro (library and
// municipal offer by age; lesson: zip strict; live by the end of 10 Nov 2026 and linked).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-san-isidro-lima/):
//  - INEI, Censos Nacionales 2025, Lima Metropolitana (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SAN ISIDRO 73402 33337
//    40065 69137 31339 37798 4265 1998 2267"; "LIMA METROPOLITANA 10141775"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SAN
//    ISIDRO 69137 2507 3596 4048 9660 14891 14895 19540"; "LIMA METROPOLITANA 9600043 555239 818096 867253 1800348
//    2322499 1744864 1491744".
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro N° 2.1 "Perú:
//    Población de 6 y más años de edad que hace uso de Internet, según grupo de edad", 2023 2024 2025 2026: Total 77,6
//    80,0 81,0 84,2; 6 a 11 60,1 61,7 61,5 68,2; 12 a 18 89,7 91,4 90,7 92,5; 19 a 24 95,6 96,4 96,4 97,3; 25 a 40 90,9
//    92,7 93,9 95,2; 41 a 59 76,5 79,9 81,9 86,0; 60 y más 40,8 47,3 50,2 56,7. Text: "el 84,2% de la población de 6 y
//    más años"; "Lima Metropolitana, con un 92,4%"; "el 98,0% de las personas con educación superior universitaria";
//    "el 74,3% cuenta con una sola unidad" (computers per household).
//  - EF EPI 2025 Peru page (ef_peru.raw): Lima city 555 high; "jobFunction" IT 522 per MARKET.md 1.3 (not used).
//  - CNEB (cneb/): no computing area; competency 28 transversal (FACTS 32, 33, 39).
//  - Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30.
//  - Neighbouring districts, plain text: Miraflores, Surquillo, San Borja, La Victoria, Lince, Jesús María, Magdalena del
//    Mar; the Pacific to the west.
// Our own calculations (scratchpad pe/d5/calc.py): San Isidro 60 and over 28.3% of people counted (Lima Metropolitana
// 15.5%); 45 to 59 21.5%; 30 to 44 21.5%; 6 to 11 5.2%; 12 to 17 5.9%. Rises 2023 to 2026 in points (csi_v1.py).
// Code (scratchpad pe/d5/csi_v1.py, csi_v2.py, python3 -I), exact output:
//   v1: Rises: {'6 a 11': 8.1, '12 a 18': 2.8, '19 a 24': 1.7, '25 a 40': 4.3, '41 a 59': 9.5, '60 y mas': 15.9} /
//       Rose most: 60 y mas / Rose least: 12 a 18 /
//       In order: ['12 a 18', '19 a 24', '25 a 40', '41 a 59', '6 a 11', '60 y mas']
//   v2: Rose most: 60 y mas 15.9 / Rose least: 19 a 24 1.7 /
//       In order: ['60 y mas', '41 a 59', '6 a 11', '25 a 40', '12 a 18', '19 a 24']
// Lesson family: max(), min() and sorted() on a dictionary look at the keys, not the values; pass key=d.get, and
// distrust an answer that is right by luck.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'use_2023 = {"6 a 11": 60.1, "12 a 18": 89.7, "19 a 24": 95.6,',
  '            "25 a 40": 90.9, "41 a 59": 76.5, "60 y mas": 40.8}',
  'use_2026 = {"6 a 11": 68.2, "12 a 18": 92.5, "19 a 24": 97.3,',
  '            "25 a 40": 95.2, "41 a 59": 86.0, "60 y mas": 56.7}',
  '',
  'rise = {}',
  'for group in use_2026:',
  '    rise[group] = round(use_2026[group] - use_2023[group], 1)',
  '',
  'print("Rises:", rise)',
  'print("Rose most:", max(rise))',
  'print("Rose least:", min(rise))',
  'print("In order:", sorted(rise))'
].join('\n');

const V2 = [
  '# keep the two dictionaries and the rise loop from Version 1',
  'most = max(rise, key=rise.get)',
  'least = min(rise, key=rise.get)',
  'print("Rose most:", most, rise[most])',
  'print("Rose least:", least, rise[least])',
  'print("In order:", sorted(rise, key=rise.get, reverse=True))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'San Isidro, Lima: adults and families' },
  slug: 'coding-classes-in-san-isidro-lima',
  code: 'csi',
  accent: '#9E4B58',
  accentRationale: 'Coding classes in San Isidro: a muted rosewood #9E4B58, the tone of old olive-grove bark against pale paper; contrast 5.50 on #FBF8F2, 5.17 on #F5F1E8 and 4.73 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in San Isidro, Lima',
  title: 'Coding Classes in San Isidro, Lima: Live, in English',
  description: 'Coding classes in San Isidro for adults, retirees and their children: live online in English at any hour, Python, data and AI, in a group or one to one.',
  ogDescription: 'Live coding, data and AI lessons in English for San Isidro: why adults of every age are the main learners here, what INEI says about internet use by age, and a Python lesson on a dictionary that answers the wrong question.',
  twitterDescription: 'Live coding in English for San Isidro, Lima: adults first, from first program to data and AI, and children too, at any hour.',
  pageName: 'Coding Classes in San Isidro, Lima',
  webPageDescription: 'A guide for English-reading adults and families in San Isidro, Lima, to live online coding, data and AI classes taught in English, built from INEI Censos Nacionales 2025, the INEI household technology bulletin for the second quarter of 2026, the CNEB, EF EPI 2025 and the tz database, with an original Python lesson on comparing values in a dictionary.',
  courseDescription: 'Live online coding, data and AI classes taught in English for learners in San Isidro, Lima: Python, data analysis and AI tools for adults of any age, and Scratch, Python and computer science for children and teenagers, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'San Isidro, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#adults', label: 'Adult learners' },
    { href: '#internet', label: 'Internet by age' },
    { href: '#project', label: 'Python lesson' },
    { href: '#children', label: 'Children' },
    { href: '#times', label: 'San Isidro times' }
  ],
  eyebrow: 'San Isidro, Lima &middot; Live online, in English &middot; Adults and children',
  h1: 'Coding classes in San Isidro, Lima',
  lede: 'Most coding pages begin with children. This one begins with grown-ups, because in San Isidro that is who most of the potential learners are: people who work in the district\'s offices, people who have retired from them, and parents who would like to understand what their children are learning. Below you will find what our live classes in English offer each of them, what INEI\'s figures say about adults and the internet, a Python lesson built on those figures, and what we offer the children and grandchildren too.',
  secondaryCta: { href: '#project', label: 'Read the Python lesson' },
  wa: 'Hello Modern Age Coders, I am in San Isidro, Lima, and would like live coding classes in English. Could I book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ learners in many countries &middot; learners aged 6 to 67, all taught in English',
  spec: [
    ['Main learners', 'Adults, from first program to AI'],
    ['Also for', 'Children from 6 and teenagers'],
    ['Language', 'English, spoken clearly and patiently'],
    ['Format', 'Group of fifteen to twenty, or one to one'],
    ['San Isidro hours', 'Before work, at lunch or at night'],
    ['First class', 'Free, without card details']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs live online coding classes in English for people in San Isidro, Lima, and most of our learners there are adults: professionals who want Python, data analysis or AI tools for work, and retired people learning to program for the first time. Children from age 6 and teenagers learn with us too. Each lesson is live on video with a mentor based in India, in a group of fifteen to twenty or one to one, at any hour that suits the learner in Peru time, before work, at lunchtime or in the evening.',

  picks: {
    eyebrow: 'Where San Isidro learners start',
    h2: 'Three first courses, two of them for adults',
    lede: 'A complete Python course for adults who want to write real programs, a data course for those who live in spreadsheets, and one long course for the children of the household.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CSI / 01', title: 'Python for Adults, from Zero', note: 'No previous programming needed. Variables, decisions, loops, files and small automations, built up lesson by lesson, with a mentor who is patient about questions an engineer would never ask aloud.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'CSI / 02', title: 'Data and AI for Non-Programmers', note: 'For people whose work already runs on Excel or Google Sheets. Cleaner tables, clearer charts, dashboards and sensible use of AI assistants, taught in plain English without assuming any code.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CSI / 03', title: 'Coding for Kids', note: 'For children of 6 to 12 in the family, grouped with others of the same age. Scratch games and animations first, then apps and a first look at AI.' }
    ]
  },

  sections: [
    {
      id: 'adults',
      eyebrow: 'Adult learners',
      h2: 'Can an adult in San Isidro learn to code from scratch?',
      lede: 'Yes, and adults usually learn faster than they expect, because they bring a reason. The question is not age but purpose: what do you want the program to do for you?',
      body: [
        { kind: 'three', cells: [
          { h3: 'The professional', p: 'You work in finance, law, consulting or a public body, and your day involves reports that could build themselves. Python and data analysis, learnt live, let you automate the dull parts and check numbers properly. Lessons fit before the office opens, at lunch, or after the evening traffic has eased.' },
          { h3: 'The career changer', p: 'You want to move towards technology, or towards remote work for a company abroad. A structured course in English, with a mentor who reviews your code, is the difference between watching tutorials and actually building things you can show.' },
          { h3: 'The retired learner', p: 'You have time, curiosity and perhaps grandchildren who code. We teach people in their sixties alongside everyone else, at a pace that leaves room for questions. Many start with a small family project: a photo organiser, a budget, a quiz for the grandchildren.' }
        ] },
        { kind: 'p', mt: true, html: 'Every adult course is taught in English. If your English is good for reading but rusty for speaking, say so in the free first class; the mentor adjusts. For a longer look at what we teach working adults in Peru, see our page on <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a>, and for learners over fifty, <a class="ag-inline-link" href="/coding-for-adults-over-50-peru">coding for adults over 50</a>.' }
      ]
    },
    {
      id: 'district',
      tint: 'tint',
      eyebrow: 'San Isidro in figures',
      h2: 'How old are the people who live in San Isidro?',
      lede: 'Older than Lima as a whole. INEI\'s census of 2025 gives San Isidro a total population of 73,402, and among the 69,137 people it actually counted, the largest single age group is 60 and over, with 19,540 people.',
      body: [
        { kind: 'two',
          leftH3: 'The age mix',
          left: [
            'By our own division of INEI\'s counted figures, people of 60 and over make up about 28.3% of San Isidro, against 15.5% across Lima Metropolitana. Adults of 45 to 59 (14,895 people) and of 30 to 44 (14,891) are each about a fifth of the district.',
            'Children are a small share: 3,596 aged 6 to 11 and 4,048 aged 12 to 17, roughly 5.2% and 5.9% of the people counted. Women outnumber men in INEI\'s total, 40,065 to 33,337, and INEI estimates that 4,265 residents were missed by the count.'
          ],
          rightH3: 'Why that shapes this page',
          right: [
            'A district where most residents are adults, and a large share are past working age, needs a coding page that speaks to adults first. That is unusual on the internet, where nearly every coding offer is aimed at children.',
            'It also explains why online classes suit San Isidro well. Plenty of adults would rather not drive across Lima for an evening course, and a small number of children of any one age makes a local specialist class hard to fill. Online, neither problem exists.'
          ] },
        { kind: 'source', html: 'Figures from INEI\'s Censos Nacionales 2025 spreadsheet for Lima Metropolitana (Cuadro N.° 1, totals by sex; Cuadro N.° 3, people counted by age), which we saved on 8 November 2026. The shares are our arithmetic on the counted population. We quote INEI\'s published totals and never add age groups into totals of our own.' },
        { kind: 'p', mt: true, html: 'San Isidro lies between Miraflores and Surquillo to the south and east, San Borja and La Victoria to the east, Lince and Jesús María to the north, and Magdalena del Mar to the west, with the Pacific beyond. Learners from all of these districts join the same classes, often in the same groups.' }
      ]
    },
    {
      id: 'internet',
      eyebrow: 'Internet by age',
      h2: 'Do older adults in Peru use the internet enough to learn online?',
      lede: 'More every year. INEI\'s household survey shows that internet use among people of 60 and over in Peru rose from 40.8% in the second quarter of 2023 to 56.7% in the same quarter of 2026, the steepest rise of any age group.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Share of each age group in Peru that went online, second quarter of 2023 and of 2026, with the change', head: ['Age group', '2023, per cent', '2026, per cent', 'Change, points (ours)'], rows: [
          ['60 and over', '40.8', '56.7', '+15.9'],
          ['41 to 59', '76.5', '86.0', '+9.5'],
          ['6 to 11', '60.1', '68.2', '+8.1'],
          ['25 to 40', '90.9', '95.2', '+4.3'],
          ['12 to 18', '89.7', '92.5', '+2.8'],
          ['19 to 24', '95.6', '97.3', '+1.7'],
          ['Everyone aged 6 and over', '77.6', '84.2', '+6.6']
        ] },
        { kind: 'source', html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026, Cuadro N.° 2.1 (national figures; 2026 preliminary), read on 8 November 2026. INEI\'s table also gives 2024 and 2025; we show the two ends and work out the change ourselves. INEI also reports internet use of 92.4% among people aged 6 and over in Lima Metropolitana, a figure that includes Callao.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table carefully',
          left: [
            'These are national figures for Peru, not figures for San Isidro, and they measure whether a person used the internet at all, not whether they could follow a class. Even so, the direction is clear: the oldest group is the one catching up fastest.',
            'INEI also notes that use rises with education. In the same bulletin, 98.0% of people with a university education used the internet. San Isidro\'s residents are not described by that survey, and we make no assumption about any individual from it.'
          ],
          rightH3: 'What it means for a class',
          right: [
            'A live coding class needs more than the internet: a computer, a keyboard and a little confidence with files and windows. For adults who are new to that, the first lessons cover it gently, without hurry, and nobody is made to feel slow.',
            'If the household has only one computer, plan around it. INEI found that 74.3% of Peruvian households with a computer have just one, which is why many grandparents and grandchildren in our classes take turns at the same desk.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'Which age group took to the internet fastest? A Python lesson with a trap',
      lede: 'We use the INEI table above with adult beginners in their first month. The question is simple, the code is short, and the bug it reveals is one that working analysts make too: asking a dictionary for its largest item and getting the largest label instead.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'The learner types the 2023 and 2026 columns into two Python dictionaries, one entry per age group, and works out each group\'s rise in percentage points. Then come three questions: which group rose most, which rose least, and what is the order from top to bottom?',
            'Version 1 answers them with <code>max</code>, <code>min</code> and <code>sorted</code>, the obvious tools. It runs without an error message, and the first answer is even correct.'
          ],
          rightH3: 'The trap',
          right: [
            'The rises are right: 15.9 points for people of 60 and over, 1.7 for those of 19 to 24. But "rose least" says <code>12 a 18</code>, which rose 2.8. Called on a dictionary, <code>max</code> and <code>min</code> compare <strong>the keys, not the values</strong>: they look for the label that comes last or first as text.',
            'So why was "rose most" correct? Luck. The label <code>60 y mas</code> happens to come last when the labels are compared as text, and that group also happens to have the biggest rise. A program that is right by coincidence is the most dangerous kind.'
          ] },
        { kind: 'code', label: 'Version 1: the obvious tools, asked the wrong question', lang: 'Python', code: V1, note: 'It prints <code>Rises: {\'6 a 11\': 8.1, \'12 a 18\': 2.8, \'19 a 24\': 1.7, \'25 a 40\': 4.3, \'41 a 59\': 9.5, \'60 y mas\': 15.9}</code>, then <code>Rose most: 60 y mas</code>, <code>Rose least: 12 a 18</code> and <code>In order: [\'12 a 18\', \'19 a 24\', \'25 a 40\', \'41 a 59\', \'6 a 11\', \'60 y mas\']</code>.' },
        { kind: 'p', mt: true, html: 'The order line is the clue a careful learner spots. It is alphabetical, with "6 a 11" after "41 a 59", because text is compared character by character and "4" comes before "6". Nothing in that list has anything to do with the rises.' },
        { kind: 'code', label: 'Version 2: tell Python what to compare', lang: 'Python', code: V2, note: 'With Version 1\'s dictionaries and loop above it, it prints <code>Rose most: 60 y mas 15.9</code>, <code>Rose least: 19 a 24 1.7</code> and <code>In order: [\'60 y mas\', \'41 a 59\', \'6 a 11\', \'25 a 40\', \'12 a 18\', \'19 a 24\']</code>.' },
        { kind: 'p', html: 'Passing <code>key=rise.get</code> tells each function to rank the groups by their values. Now the least is 19 to 24, with 1.7 points, and the order runs from the oldest group down to young adults, who were already near the top in 2023 and had little room left to grow. That last observation is the real lesson for an analyst: a small rise can mean a group that is already almost full.' },
        { kind: 'ol', mt: true, items: [
          '<strong>First week, no code.</strong> Rank the six groups by their 2026 figure, by hand. Then rank them by their rise. Which group changes place the most, and why?',
          '<strong>First month.</strong> Type Version 1 and predict every line before running it. Write down which answers you trust and which you do not.',
          '<strong>Second month.</strong> INEI\'s bulletin also prints 2024 and 2025. Add both years as dictionaries and find every group whose use fell from one year to the next. (There are two: 6 to 11 and 12 to 18, between 2024 and 2025.)',
          '<strong>Going further.</strong> Work out each rise as a percentage of the 2023 figure instead of in points. Does the ranking change? Explain in two English sentences why both measures are honest and why they disagree.'
        ] }
      ]
    },
    {
      id: 'children',
      eyebrow: 'Children and teenagers',
      h2: 'What about the children and grandchildren?',
      lede: 'They learn with us too, in groups of their own age. In San Isidro the family pattern we see most is a parent or grandparent taking an adult course while a child takes a children\'s one, sometimes at the same hour on two computers.',
      body: [
        { kind: 'two',
          leftH3: 'What school gives',
          left: [
            'Look through the CNEB\'s plans of study and you will not find computing as a subject at any grade. Digital skills sit in competency 28, a cross-curricular competency that every area is expected to touch and none owns, so most children never write a program at school.',
            'Bilingual, Cambridge and IB schools in and around San Isidro sometimes offer computer science as an exam course. Where a child takes IGCSE or IB computer science, our courses follow that syllabus in English and leave assessment entirely to the school.'
          ],
          rightH3: 'Where children start with us',
          right: [
            'At 6 to 8, Scratch: blocks that snap together into animations and simple games. From about 9, typed Python with turtle drawings and small projects. From 13, Python, Java, web building or AI for teenagers, and the Cambridge or IB course where a pupil needs it.',
            'Every class is in English. Children at bilingual schools find that natural; children at Spanish-medium schools find it harder at first and then, usually, rather proud of themselves.'
          ] },
        { kind: 'p', mt: true, html: 'Families who would rather read about the summer in Spanish can see our guide to <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">vacaciones útiles de programación en San Isidro</a>, written for secundaria students. For learning outside the summer, our Spanish page is <a class="ag-inline-link" href="/clases-de-programacion-san-isidro">clases de programación en San Isidro</a>. Our national guide, <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>, covers every age and every region.' }
      ]
    },
    {
      id: 'thinking',
      tint: 'tint',
      eyebrow: 'Thinking, not copying',
      h2: 'If AI can write code, why should an adult learn to program?',
      lede: 'Because someone has to know whether the code is right. AI assistants write plausible programs quickly; the skill that matters is reading them, testing them and spotting the error, exactly as in the lesson above.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Reason first', p: 'Before any tool is opened, the learner says in plain English what the program should do and how they will check it. That habit catches most mistakes before they are typed.' },
          { h3: 'Use AI as a reviewer', p: 'Adults in our courses use AI assistants, and learn where they go wrong: invented functions, quiet assumptions, answers that are right by luck. The tool becomes a second opinion, not an oracle.' },
          { h3: 'Same teaching everywhere', p: 'A learner in San Isidro gets the same depth and care as one in Mumbai, London or Arequipa. We teach people to think through problems, not to copy answers, whoever they are.' }
        ] },
        { kind: 'p', mt: true, html: 'Children follow stricter rules. Claude\'s terms set a minimum age of 18, and ChatGPT asks for parental permission below 18, so children in our classes do not use adult chatbot accounts. They learn the reasoning first, which is what any later tool will rely on.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'San Isidro times',
      h2: 'What time could I take a class in San Isidro?',
      lede: 'At any hour you like. Peru does not change its clocks, and India is a constant ten and a half hours ahead of Lima, so an agreed hour never drifts. Here are some typical choices, shown as conversions only.',
      body: [
        { kind: 'table', numCols: [], caption: 'San Isidro hours and the matching time in India (examples, not set slots)', head: ['Peru time, San Isidro', 'India time', 'A typical choice for'], rows: [
          ['06:00', '16:30', 'A professional before the office'],
          ['09:30', '20:00', 'A retired learner mid-morning'],
          ['13:00', '23:30', 'A lunch-hour session'],
          ['16:30', '03:00, next day', 'A child home from school'],
          ['19:30', '06:00, next day', 'An adult after work'],
          ['21:00', '07:30, next day', 'A late learner']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, America/Lima (five hours behind UTC; no summer time since 1994) and Asia/Kolkata (five and a half hours ahead of UTC). The conversions are our own arithmetic.' },
        { kind: 'p', mt: true, html: 'When you book, you pick the hour on your own clock and the mentor sees the same moment in India time. For a fuller explanation of the two clocks, see <a class="ag-inline-link" href="/live-coding-classes-peru-time">live coding classes on Peru time</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What an adult beginner can do, month by month',
    lede: 'A rough guide of our own, for an adult taking two live classes a week. Children follow a separate path set by age.',
    table: { numCols: [], caption: 'Adult milestones in Python (ours)', head: ['Stage', 'Usually by', 'You can', 'You can also explain'], rows: [
      ['1. First program', 'Week 2', 'Run a script that asks a question and answers it', 'What a variable holds'],
      ['2. Decisions', 'Month 1', 'Make a program choose between cases', 'Why the order of conditions matters'],
      ['3. Collections', 'Month 2', 'Store tables of values in lists and dictionaries', 'What max() compares, and how to change it'],
      ['4. Files', 'Month 3', 'Read a spreadsheet export and summarise it', 'How you know the summary is right'],
      ['5. Automation', 'Month 5', 'Produce a weekly report without touching it', 'What happens when the input changes'],
      ['6. AI with judgement', 'Month 6 on', 'Use an AI assistant and test what it wrote', 'Where the assistant went wrong']
    ] },
    left: { h3: 'For adults', ps: [
      'Stage 3 is the INEI lesson above. It tends to change how people read every ranking they meet, at work or in the news.',
      'You decide the pace; the stages are only a map.'
    ] },
    right: { h3: 'For families', ps: [
      'A grandparent at stage 2 and a grandchild at stage 2 can explain the same idea to each other. It happens more often than you might think.',
      'Our reports describe what was built and understood, not hours logged.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for San Isidro',
    lede: 'Each runs live, in English, with the same mentor from the first week to the last.',
    bands: [
      { num: 'I', h3: 'Adults at work', sub: 'Data, automation and AI', courses: [
        { code: 'CSI / WORK / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards for numbers that matter.' },
        { code: 'CSI / WORK / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that rename, merge and report so you do not have to.' },
        { code: 'CSI / WORK / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI tools mastery', blurb: 'Assistants and automation used carefully, with checks built in.' }
      ] },
      { num: 'II', h3: 'Adults going deeper', sub: 'Building and agents', courses: [
        { code: 'CSI / DEEP / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Directing coding agents, and reviewing every change they make.' },
        { code: 'CSI / DEEP / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'From a first page to a working web application.' },
        { code: 'CSI / DEEP / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL and databases', blurb: 'Design tables, write queries, and trust the answers.' }
      ] },
      { num: 'III', h3: 'The younger generation', sub: 'Ages 9 to 18', courses: [
        { code: 'CSI / YOUNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python, turtle art and small AI projects from about 9.' },
        { code: 'CSI / YOUNG / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Real programs for teenagers starting from zero.' },
        { code: 'CSI / YOUNG / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science 0478', blurb: 'The Cambridge syllabus in full, joinable at any point in the year.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit a San Isidro week',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'Early Lima hours fall in the Indian evening, when mentors are at their desks.' },
      { time: 'After work', l: 'Evening classes are arranged too; tell us when your day ends.' },
      { time: '1-on-1', l: 'Your own mentor and your own timetable, around meetings and travel.' }
    ],
    cells: [
      { h3: 'A mentor who stays', p: 'One teacher across the course, who knows your goal.' },
      { h3: 'Patient English', p: 'Plain words, steady pace, and time for questions.' },
      { h3: 'Your own project', p: 'Adults bring a task from work or home, and build it.' },
      { h3: 'Peers your age', p: 'Adults learn with adults; children with children.' },
      { h3: 'Written notes', p: 'A short record after each stage: built, understood, next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Adult and teenage learners end up with real things: tools, sites, small data projects. A selection is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on Google by learners and parents, quoted exactly.',

  fees: {
    h2: 'Fees for learners in San Isidro',
    lede: 'Each plan has a monthly fee set in US dollars and taken from a card. Your bank turns the dollar charge into soles when it posts it, at the rate it uses that day, so statements can vary slightly from month to month.',
    free: ['One free class to try', 'A first program, your pace', 'No card required'],
    group: ['Fifteen to twenty learners at a similar level', 'One mentor throughout', 'Two live classes a week', 'Monthly, with no long contract'],
    one: ['A mentor for you alone', 'Your project, your pace', 'Hours you choose each week']
  },

  faq: {
    eyebrow: 'San Isidro learners ask',
    h2: 'Coding classes in San Isidro: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors speak clearly and adjust their pace to each learner, so adults whose English is stronger on paper than aloud can follow comfortably. Python itself is written in English words, so the vocabulary of the class is the vocabulary of the code.' },
      { q: 'I am over 60 and have never programmed. Is that a problem?', a: 'No. Our learners range from 6 to 67, and adults who start late often do very well because they know what they want to build. The first lessons go slowly over the basics of files and windows, and one-to-one classes are available if you prefer to learn without a group.' },
      { q: 'Which course should a working adult choose first?', a: 'If you want to write programs, start with the Python masterclass. If your work is mainly spreadsheets and reports, the data and AI course for non-programmers is gentler. The free first class is a good place to decide, because the mentor can see what you already know.' },
      { q: 'When could I take classes in San Isidro time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru keeps the same clock all year and India is ten and a half hours ahead, so 06:00 in San Isidro is 16:30 in India.' },
      { q: 'Do you have an office in San Isidro?', a: 'No. We have no premises in San Isidro or elsewhere in Peru. Every lesson happens over live video with a mentor based in India, so the class is the same wherever in Lima you join from.' },
      { q: 'Can my child learn while I take an adult course?', a: 'Yes. Children join their own age group, starting with Scratch from 6 or Python from about 9, and adults join adult groups. Many families book both, sometimes at the same hour on two computers.' },
      { q: 'Will I be allowed to use AI tools?', a: 'Adults, yes: we teach you to use AI assistants and to test what they produce. Children do not use adult chatbot accounts, because Claude is for users of 18 and over and ChatGPT needs a parent\'s permission for anyone under 18.' },
      { q: 'Is there a certificate?', a: 'Learners who complete a course receive our own certificate of completion. It is not a Peruvian qualification, and we are not connected with MINEDU, SUNEDU, any university or the Municipalidad de San Isidro.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars. A card in soles works; the bank converts each charge, so the figure on your statement can move a little between months. The first class costs nothing and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for adults and families in San Isidro.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson, step by step.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before tools, at every age.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our older students.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Coding in English for Lima\'s bilingual families.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus, from Scratch to AI agents.' }
    ]
  },

  start: {
    h2: 'Book a free first class from San Isidro',
    lede: 'In a free class you write a first small program with a mentor, and talk about what you would like to build. The mentor gets a sense of where to start and how comfortable you are with spoken English, then suggests a course, a group or private lessons, and a time that works.',
    readFirst: 'Prefer to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a lesson in detail, and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'All teaching is live over video, in English, from India. WhatsApp us in English for a quick answer.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Adults in Peru', links: [
        { href: '/ai-and-coding-for-professionals-peru', label: 'AI and coding for professionals' },
        { href: '/coding-for-adults-over-50-peru', label: 'Coding over 50' },
        { href: '/remote-tech-job-skills-peru', label: 'Remote tech job skills' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding in Peru' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Ask what max() is comparing'
  },

  personalityCss: `
.ag-root.ag-csi .ag-hero h1 { max-width: 17ch; letter-spacing: -0.01em; }
.ag-root.ag-csi .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-csi .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-csi .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-csi .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Censos Nacionales 2025 (Lima Metropolitana demographic indicators, Cuadros 1 and 3); INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (Cuadro 2.1 and text); MINEDU, Currículo Nacional de la Educación Básica (competency 28); IANA tz database. All read 8 to 10 November 2026.',
    localProject: 'An original Python lesson for adult beginners on INEI\'s internet use by age group (Cuadro 2.1, 2023 and 2026): max(), min() and sorted() on the dictionary of rises compare the labels, so "Rose least: 12 a 18" is wrong and "Rose most: 60 y mas" is right only by luck; key=rise.get gives "Rose least: 19 a 24 1.7" and the true order. Lesson family: max, min and sorted on a dict compare keys, not values.',
    requiredMentions: ['Rose least: 12 a 18', 'Rose least: 19 a 24 1.7', 'Rose most: 60 y mas 15.9', 'the keys, not the values', '73,402', '19,540 people', '40.8% in the second quarter of 2023 to 56.7%', 'Ask what max() is comparing', 'A program that is right by coincidence is the most dangerous kind'],
    sources: [
      { claim: 'San Isidro 73,402 total (69,137 counted, 4,265 omitted; 40,065 women, 33,337 men); by age 6 to 11 3,596, 12 to 17 4,048, 30 to 44 14,891, 45 to 59 14,895, 60 and over 19,540; Lima Metropolitana counted by age.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Internet use by age group in Peru, II Trimestre 2023 to 2026 (Cuadro 2.1); Lima Metropolitana 92.4%; university-educated 98.0%; 74.3% of households with a computer have one.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'No computing area in the CNEB; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Income or social-class descriptions of San Isidro (INEI strata tables exist): not used, by rule.',
      'Number of offices, firms or workers in San Isidro: no primary source fetched; the page speaks of people who work there without a figure.',
      'Applying INEI\'s national internet-by-age figures to San Isidro: refused; the page says they are national.',
      'Names or counts of schools in San Isidro: not used; no school named as a source of students.',
      'Any link with the Municipalidad de San Isidro, MINEDU, SUNEDU or a university: none, and the page says so.'
    ]
  }
};
