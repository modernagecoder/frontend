// SHIP: market (city) | Cusco city: primaria first, what grades 1 to 6 get at school, every age after | digit heaping: n % 10 with a Counter shows which numbers were estimated, not counted
'use strict';
// Coding classes in Cusco, Peru (ag- city page, Peru cluster row PE047, P6; alloc: cities, cocu, #753000). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: any hour; USD only through
// data-price anchors. Kids first; teenagers, students and adults covered.
// Spine (differs from the Cusco region page, which covers 13 provinces, household internet and quinoa yields): Cusco city is
// spread over several districts of the province; the page starts with primaria (what a child of 6 to 11 gets each week:
// maths hours, English hours that depend on hiring a specialist teacher, no computing), then secundaria, students and adults,
// and teaches with a project small children can follow: the last digit of a number tells you if somebody counted it.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    "CUSCO 1379251" (department); PROVINCIA CUSCO 495112; districts CUSCO 102111, SAN SEBASTIÁN 134219, SANTIAGO 99471,
//    SAN JERÓNIMO 75189, WANCHAQ 59185, POROY 14043, SAYLLA 8549, CCORCA 2345. Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Cusco city 428,450 (2017 census, conglomerate).
//  - CNEB (facts-school/src/cneb/text.txt): primaria "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3";
//    "Total de horas 30 30 30 30 30 30"; "la implementación de esta área será progresiva dependiendo de la contratación de
//    estos docentes"; secundaria JER "Total de horas 35 35 35 35 35"; "horas pedagógicas (45 minutos)"; competency 28 transversal.
//  - Ley 28044 (ley28044-pdf/text.txt): primaria "dura seis años"; secundaria "dura cinco años". MINEDU Edades normativas
//    (FACTS 13, 14): 1° primaria = 6 ... 6° primaria = 11, measured on 31 March.
//  - MINEDU 16 March 2026 (n-inicio2026): "6 225 000 estudiantes"; "53 631 colegios de Educación Básica Regular".
//  - UTEC OPI home (opi-home): OPEIA, Peru's AI olympiad, held 19 March 2026; "Estos son los estudiantes que fueron
//    seleccionados para representar al Perú en la IOAI en el año 2025." (FACTS 113); OPI free for secundaria students.
//  - EF EPI 2025 (facts-market/src/ef_peru.raw): cityScore cusco "moderate" 520 (second of eight Peruvian cities listed, after
//    lima 555); stateScore cuzco 504; Peru 519.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year, last summer time 1994; Asia/Kolkata UTC+5:30.
//  - Data: Gobierno Regional de Cusco (GORE Cusco), "Indicadores de Cobertura en el Servicio de Agua Potable en el Departamento
//    de Cusco 2016 - 2019", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/indicadores-de-cobertura-en-el-servicio-de-agua-potable-en-el-departamento-de-cusco-2016,
//    licence "Open Data Commons Attribution License" (dc:license on the raw page), released 2023-08-10, modified 2023-08-23.
//    File Indicadores_de_Cobertura_en_el_Servicio_de_Agua_Potable_en_el_Departamento_de_Cusco_2016_2019.csv saved as
//    cusco-agua.csv, 260,705 bytes, sha256 3aaa8bdc...b8009473, Latin-1, semicolons, 4,250 rows (2016: 3, 2017: 70,
//    2018: 1,408, 2019: 2,769), 13 provinces, 91 rows for the province of Cusco; saved 9 November 2026.
// Our own calculations (scratchpad pe/c1/cusco/v1.py, v2.py; copies in src-pages/.../data/; python3 -I on the file):
//  v1 prints: Populations of 10 or more: 4021 / ends in 0 : 36.7 % / 1 : 3.2 % / 2 : 10.5 % / 3 : 3.6 % / 4 : 6.6 % /
//    5 : 16.2 % / 6 : 6.8 % / 7 : 3.7 % / 8 : 9.5 % / 9 : 3.3 %
//  v2 prints: Rows with lived-in homes: 4177 / People a whole number of times the homes: 1739 / exactly 4 per home: 755 rows /
//    exactly 5 per home: 499 rows / exactly 3 per home: 325 rows
//  control (INEI 2025 Cuadro N° 1, the 116 DISTRITO rows of department CUSCO): 15 end in 0 (12.9%); last digits 0 to 9 =
//    15, 8, 8, 12, 11, 11, 11, 15, 14, 11.
// Lesson family: digit heaping. The last digit (n % 10) of counted numbers is spread fairly evenly; numbers that were estimated
// pile up on 0 and 5. A Counter of last digits, then a second test (people an exact multiple of homes), shows estimation.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = String.raw`import csv
from collections import Counter

endings = Counter()
with open("cusco-agua.csv", encoding="latin-1") as sheet:
    for row in csv.DictReader(sheet, delimiter=";"):
        people = int(row["TOTAL_POBLACION"])
        if people >= 10:
            endings[people % 10] += 1

rows = sum(endings.values())
print("Populations of 10 or more:", rows)
for digit in range(10):
    print("ends in", digit, ":", round(100 * endings[digit] / rows, 1), "%")`;

const V2 = String.raw`import csv
from collections import Counter

per_home = Counter()
rows = 0
with open("cusco-agua.csv", encoding="latin-1") as sheet:
    for row in csv.DictReader(sheet, delimiter=";"):
        people = int(row["TOTAL_POBLACION"])
        homes = int(row["VIVIENDAS_HABITADAS"])
        if homes > 0:
            rows += 1
            if people % homes == 0:
                per_home[people // homes] += 1

print("Rows with lived-in homes:", rows)
print("People a whole number of times the homes:", sum(per_home.values()))
for times, count in per_home.most_common(3):
    print("exactly", times, "per home:", count, "rows")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Cusco: primaria first' },
  slug: 'coding-classes-in-cusco-peru',
  code: 'cocu',
  accent: '#753000',
  accentRationale: 'Coding classes in Cusco: a burnt sienna #753000, the shade allocated to this row, close to the city\'s roof tiles; contrast 9.09 on #FBF8F2, 8.55 on #F5F1E8 and 7.82 on #EDE7DA, comfortably above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Cusco, Peru',
  title: 'Coding Classes in Cusco, Peru: For Kids and Teens, in English',
  description: 'Coding classes in Cusco for children from 6, teens and adults, live online in English at any hour: what primaria covers, each age after, and a Cusco data puzzle.',
  ogDescription: 'Live online coding for Cusco children, teenagers and adults, taught in English at any hour: what a primaria week gives a child, the step to typed code, secundaria and beyond, and a Python puzzle on the regional water register.',
  twitterDescription: 'Coding in Cusco, live online in English, from 6 years old: primaria first, then every age, and a real Cusco data puzzle.',
  pageName: 'Coding Classes in Cusco, Peru',
  webPageDescription: 'A guide for Cusco families, students and adults to live online coding classes taught in English, built from INEI census figures, MINEDU curriculum hours, the Ley General de Educación, UTEC olympiad pages, EF EPI 2025 and an original Python project on the Gobierno Regional de Cusco drinking-water register (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Cusco, Peru: Scratch, games and Python for children from 6, Python, Java, AI and problem solving for secundaria students, and Python, data analysis and AI tools for university students and adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cusco',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#primaria', label: 'Primaria' },
    { href: '#older', label: 'Teens and adults' },
    { href: '#project', label: 'Cusco puzzle' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Cusco &middot; Live online, in English &middot; From age 6',
  h1: 'Coding classes in Cusco, Peru',
  lede: 'Most questions we get from Cusco are about children: when to start, whether a seven year old can follow a class in English, and what coding adds to primaria. This page answers those first, then covers teenagers, university students and adults, and ends with a puzzle from the Cusco regional government\'s own data that a ten year old can solve with one line of arithmetic.',
  secondaryCta: { href: '#primaria', label: 'Start with primaria' },
  wa: 'Hello Modern Age Coders, we are a family in Cusco, Peru, and would like live coding classes in English for our child. Could we book a free class?',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students in many countries &middot; patient mentors for young beginners',
  spec: [
    ['Youngest', 'Six years old, with Scratch'],
    ['Typing code', 'Usually from about nine'],
    ['Older learners', 'Teens, students, adults'],
    ['Group', 'Fifteen to twenty, or private'],
    ['Cusco time', 'Any hour, any day'],
    ['Trial', 'Free class, no card']
  ],
  capsuleQ: 'The short version',
  capsule: 'Modern Age Coders gives live online coding classes in English to children, teenagers and adults in Cusco, Peru. A six year old starts by snapping Scratch blocks into games, children of about nine move to typed Python, secundaria students learn Python, Java, AI and problem solving, and adults take Python, data analysis or AI tools. A real mentor leads every lesson on camera, for a class of fifteen to twenty or a single learner, on the days and at the hours the family picks.',

  picks: {
    eyebrow: 'Start here in Cusco',
    h2: 'Three courses for Cusco children and teenagers',
    lede: 'Two of the three are for primaria, because that is where most Cusco families start. Adult courses come later on the page.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CUS / 01', title: 'Coding for Kids', note: 'Children of six to twelve, each with classmates of the same age, across ten to twelve months. Scratch animations and games first, so that a young child learns sequence and repetition before any typing.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CUS / 02', title: 'Problem Solving for Kids', note: 'Ages 7 to 12. Puzzles, patterns and step-by-step plans, on and off the screen. A good first course for a child who loves maths, or one who needs confidence with it.' },
      { course: 'python-complete-masterclass-teens', code: 'CUS / 03', title: 'Python for Teens', note: 'For 13 to 18 year olds starting from zero, over 10 to 12 months. Real typed Python, files and data, built up week by week through secundaria.' }
    ]
  },

  sections: [
    {
      id: 'city',
      eyebrow: 'Cusco in figures',
      h2: 'How many people live in Cusco?',
      lede: 'It depends on what you call Cusco. INEI counts the department, the province, the central district and, in its 2017 census, the city as a whole. Each figure below keeps its own year.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Cusco, unit by unit', head: ['What is counted', 'People', 'Census'], rows: [
          ['Department of Cusco (13 provinces)', '1,379,251', '2025'],
          ['Province of Cusco (8 districts)', '495,112', '2025'],
          ['District of San Sebastián', '134,219', '2025'],
          ['District of Cusco (the historic centre)', '102,111', '2025'],
          ['District of Santiago', '99,471', '2025'],
          ['District of San Jerónimo', '75,189', '2025'],
          ['District of Wanchaq', '59,185', '2025'],
          ['Cusco city (urban area)', '428,450', '2017']
        ] },
        { kind: 'source', html: 'From INEI: the 2025 census table of total population by department, province and district (Indicadores demográficos, table 1, census day 15 September 2025), and the 2017 table of department capitals in Perú: Perfil Sociodemográfico (table 1.9). Smaller districts of the province are Poroy (14,043), Saylla (8,549) and Ccorca (2,345). We never add rows together.' },
        { kind: 'two', mt: true,
          leftH3: 'Most of Cusco lives outside the centre',
          left: [
            'Visitors know the district of Cusco, with the Plaza de Armas and the old streets. Yet San Sebastián, further east, has more people, 134,219 in 2025 against 102,111, and Santiago, San Jerónimo and Wanchaq together house a large share of the city\'s families.',
            'For a child in San Jerónimo, an after-school class in the centre can mean a long trip each way. A live online class starts the moment the computer is on.'
          ],
          rightH3: 'Beyond the city',
          right: [
            'The department stretches from the high provinces of Espinar and Chumbivilcas to the warm valleys of La Convención. Families there join our classes in the same way as families in the city, as long as the connection holds.',
            'Our page on <a class="ag-inline-link" href="/online-coding-and-ai-classes-cusco-region-peru">coding and AI classes across the Cusco region</a> deals with the provinces and with internet access at home in more detail.'
          ] }
      ]
    },
    {
      id: 'primaria',
      eyebrow: 'Primaria',
      h2: 'What does a Cusco child of 6 to 11 learn at school each week, and where does coding fit?',
      lede: 'Primaria lasts six years under the Ley General de Educación, and the national plan of study gives each grade 30 teaching hours a week. Maths and Spanish take the largest share; there is no computing area.',
      body: [
        { kind: 'table', numCols: [2, 3, 4], caption: 'Weekly teaching hours in primaria, selected areas (CNEB)', head: ['Grade', 'Normative age', 'Matemática', 'Comunicación', 'Inglés'], rows: [
          ['1° primaria', '6', '5', '5', '2'],
          ['2° primaria', '7', '5', '5', '2'],
          ['3° primaria', '8', '4', '4', '3'],
          ['4° primaria', '9', '4', '4', '3'],
          ['5° primaria', '10', '4', '4', '3'],
          ['6° primaria', '11', '4', '4', '3']
        ] },
        { kind: 'source', html: 'Sources: MINEDU, Currículo Nacional de la Educación Básica, primaria plan of study (30 hours a week in every grade, each teaching hour 45 minutes); MINEDU normative ages, measured on 31 March; Ley N.° 28044, which sets primaria at six years and secundaria at five.' },
        { kind: 'two', mt: true,
          leftH3: 'English hours that depend on a teacher',
          left: [
            'The table promises two or three hours of English a week. The same curriculum adds a condition: English needs a specialist teacher, so "la implementación de esta área será progresiva dependiendo de la contratación de estos docentes". In other words, a school without that teacher may not teach the hours.',
            'This is why many Cusco parents ask whether a child can follow a coding class in English. Our answer is in the next section, and it is usually yes, with patience.'
          ],
          rightH3: 'Digital skills, but no coding',
          right: [
            'Primaria has no computing area. The curriculum lists a digital competency, number 28, but it is transversal: teachers of every area are expected to develop it, and nothing in it asks a child to write a program.',
            'A weekly coding class gives a primaria child what the timetable cannot: an hour of building something that only works if every step is in the right order. It is also, quietly, extra maths: counting, patterns, coordinates and comparing numbers.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Age 6 or 7.</strong> Scratch, with blocks and pictures. The child makes a character move, talk and repeat. Reading is helpful but not required.',
          '<strong>Age 8.</strong> Games with a score, a timer and simple rules. Children start to plan a game before they build it.',
          '<strong>Age 9 or 10.</strong> The move to typed Python for most children: short programs, drawings with code, and the first error messages read together with the mentor.',
          '<strong>Age 11.</strong> Small projects with real numbers, like the Cusco puzzle on this page, and a first look at how an AI tool learns from examples.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. We teach only in English, always live and online, with mentors in India who are used to young learners for whom English is a second language.',
      body: [
        { kind: 'two',
          leftH3: 'How a seven year old copes',
          left: [
            'Young children follow more than adults expect. In Scratch the mentor points, demonstrates and names: "Drag the blue block. Now press the green flag." After a few weeks the words become familiar because the child uses them every class.',
            'Mentors speak slowly, use the same phrases each week, write key words on screen and wait for an answer. If a child replies in Spanish, the mentor understands the idea and gives back the English words for it.'
          ],
          rightH3: 'What the English figures say about Cusco',
          right: [
            'EF\'s 2025 English Proficiency Index scores Cusco city 520, in its moderate band. Of the eight Peruvian cities in that index, only Lima scores higher, at 555. The Cusco region as a whole scores 504.',
            'Those figures describe adults who took EF\'s test, not children. Still, they suggest many Cusco families already use English, and a weekly class adds steady listening and speaking practice. Our page on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together</a> explains how.'
          ] }
      ]
    },
    {
      id: 'older',
      eyebrow: 'Teenagers, students and adults',
      h2: 'What about Cusco teenagers, university students and adults?',
      lede: 'The same live classes continue at every age, with each age group taught separately. The course route below is ours.',
      body: [
        { kind: 'table', numCols: [], caption: 'Courses for older learners in Cusco (our course ages)', head: ['Learner', 'Usual starting course', 'Next steps'], rows: [
          ['12 to 14, new to code', 'Python for Teens', 'Data projects, then Java or web'],
          ['14 to 18, some experience', 'Problem Solving for Teens, AI and Machine Learning', 'Contest practice, AI projects, PCEP'],
          ['IB or IGCSE student', 'IB Computer Science or IGCSE Computer Science', 'Coursework and exam support'],
          ['University student', 'Python or Java for university, data structures', 'Course projects, interview practice'],
          ['Adult, any age', 'Python masterclass, data analysis', 'Automation and AI coding agents']
        ] },
        { kind: 'source', html: 'Course ages and routes are ours. Learners of 13 to 17 never use tools whose terms require users to be 18; see our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Secundaria and the AI olympiad',
          left: [
            'Secundaria in Peru lasts five years, and the regular plan of study gives 35 teaching hours a week with no computing area. Teenagers who want to program learn it outside school.',
            'UTEC runs national olympiads that are free for secundaria students, including the OPI for programming and the OPEIA for artificial intelligence, which was held on 19 March 2026; its 2025 team represented Peru at the international AI olympiad, the IOAI. We are not connected with UTEC and teach with our own problems.'
          ],
          rightH3: 'Students and adults',
          right: [
            'University students in Cusco use our Java, Python and data-structures classes alongside their degree. We teach, explain and give practice; we never write assessed work.',
            'Adults, from young professionals to retirees, usually start with Python and then choose data analysis or AI agents. Some of our learners began in their sixties. Our page on <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">courses for university students in Peru</a> covers the student side.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Cusco puzzle',
      h2: 'Can the last digit of a number tell you if someone counted it?',
      lede: 'Yes, often. The Gobierno Regional de Cusco publishes a register of drinking-water coverage, row by row, for communities across the department. Our learners look at the last digit of each population figure and find out which numbers were counted and which were estimated.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Indicadores de Cobertura en el Servicio de Agua Potable en el Departamento de Cusco 2016 - 2019", published by the Gobierno Regional de Cusco on Peru\'s open-data portal, datosabiertos.gob.pe, under the Open Data Commons Attribution licence (ODC-By), and last changed on 23 August 2023. Our copy, saved on 9 November 2026, has 4,250 rows from all 13 provinces, most of them from 2018 and 2019.',
            'Each row describes a local water service: the district, the year, the number of people, the number of homes, how many homes are lived in, and how many people have drinking water. We use only the people and homes columns, as a numbers puzzle.'
          ],
          rightH3: 'The idea',
          right: [
            'If people really count every person in a village, the result is as likely to end in 3 or 7 as in 0. Each last digit should turn up about one time in ten.',
            'If instead someone writes "about 250" or "around 1,000", round numbers pile up. So Version 1 takes each population of 10 or more and counts its last digit with <code>people % 10</code>, the remainder after dividing by ten.'
          ] },
        { kind: 'code', label: 'Version 1: count the last digits', lang: 'Python', code: V1, note: 'It prints <code>Populations of 10 or more: 4021</code>, then <code>ends in 0 : 36.7 %</code>, <code>ends in 1 : 3.2 %</code>, <code>ends in 2 : 10.5 %</code>, <code>ends in 3 : 3.6 %</code>, <code>ends in 4 : 6.6 %</code>, <code>ends in 5 : 16.2 %</code>, <code>ends in 6 : 6.8 %</code>, <code>ends in 7 : 3.7 %</code>, <code>ends in 8 : 9.5 %</code> and <code>ends in 9 : 3.3 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'How often each last digit appears (our calculation)', head: ['Last digit', 'Water register, population column', 'INEI 2025 census, Cusco districts'], rows: [
          ['0', '36.7%', '12.9%'],
          ['5', '16.2%', '9.5%'],
          ['1, 3, 7 and 9 (each)', '3.2% to 3.7%', '6.9% to 12.9%'],
          ['Expected if counted', 'About 10% each', 'About 10% each']
        ] },
        { kind: 'source', html: 'Water data: Gobierno Regional de Cusco, drinking-water coverage indicators 2016 to 2019, datosabiertos.gob.pe, ODC-By. Census comparison: the 116 district totals for the department of Cusco in INEI\'s 2025 census table 1, where 15 end in 0. All percentages are ours.' },
        { kind: 'p', mt: true, html: 'More than a third of the register\'s populations end in 0, and another sixth end in 5. The census district totals, which INEI built by counting, look nothing like that: their zeros are close to one in ten. So many of the register\'s figures were rounded or estimated before they were typed in. That is not a scandal; field staff often estimate. But a careful analyst writes it down before quoting any total from the file.' },
        { kind: 'p', html: 'There is a second clue. Odd digits are rare in the register, and even ones common. One explanation a student can test is that people were worked out from homes, by multiplying. Version 2 checks every row with lived-in homes: is the population an exact multiple of the number of homes?' },
        { kind: 'code', label: 'Version 2: were people worked out from homes?', lang: 'Python', code: V2, note: 'It prints <code>Rows with lived-in homes: 4177</code>, <code>People a whole number of times the homes: 1739</code>, then <code>exactly 4 per home: 755 rows</code>, <code>exactly 5 per home: 499 rows</code> and <code>exactly 3 per home: 325 rows</code>.' },
        { kind: 'p', mt: true, html: 'In 1,739 of 4,177 rows, the population is exactly 3, 4 or 5 times (or another whole number of times) the homes. Some of that happens by chance, but 755 rows at exactly four people per home is far too many to be luck. The file does not say how its figures were made, so we do not claim to know; we can only say that the numbers carry the fingerprints of estimation. The register covers local water services, not whole districts, so none of its rows should be compared with INEI\'s census figures for Cusco.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 to 9, unplugged.</strong> Ask ten classmates how many steps there are from the door to their desk. How many answers end in 0? Then count the steps for real.',
          '<strong>Ages 9 to 11, in Scratch or Python.</strong> Make a list of twenty numbers you invent quickly, and twenty from a real source such as page numbers. Count the last digits of each list.',
          '<strong>Ages 12 to 14.</strong> Run Version 1 on the homes column, <code>VIVIENDAS_HABITADAS</code>, instead of people. Is it heaped too?',
          '<strong>Ages 15 and over.</strong> Change Version 2 to print the share of rows at exactly 4 per home in each province. Which province\'s rows look most estimated?',
          '<strong>Adults.</strong> Draft the one-paragraph note you would attach to any report that uses this file.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would classes be in Cusco?',
      lede: 'Whenever suits your family. Cusco is on Peru time all year, and the mentor works around primaria hours, secundaria hours or a working day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cusco hours and the mentor\'s clock in India (conversions, not a schedule)', head: ['Cusco', 'India', 'Calendar day in India'], rows: [
          ['06:30', '17:00', 'Same'],
          ['08:30', '19:00', 'Same'],
          ['11:30', '22:00', 'Same'],
          ['15:30', '02:00', 'One day later'],
          ['18:30', '05:00', 'One day later'],
          ['20:30', '07:00', 'One day later']
        ] },
        { kind: 'source', html: 'Peru: UTC minus five hours, no summer time since 1994 (tz database zone America/Lima; INACAL keeps the official time). India: UTC plus five and a half hours. The gap stays at ten and a half hours all year.' },
        { kind: 'p', mt: true, html: 'Younger Cusco children often do best early, before school or on a Saturday morning, when they are fresh. Older students tend to choose late afternoon or evening. On 16 March 2026 Peru\'s school year opened for 6,225,000 pupils in 53,631 schools, MINEDU reported; our classes need not follow it, and families can begin in any month, including the long summer break.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a Cusco learner grows, step by step',
    lede: 'Our own steps, the same for every age. They place a learner in the right group and show a family what has changed.',
    table: { caption: 'From first blocks to doubting a number (ours)', head: ['Step', 'Typical age', 'The learner can'], rows: [
      ['1. Order', '6 to 7', 'Arrange blocks so a character follows a plan'],
      ['2. Repeat', '7 to 8', 'Use a loop instead of copying the same block'],
      ['3. Count', '8 to 10', 'Keep a tally and find the remainder of a division'],
      ['4. Type', '9 to 12', 'Write short Python programs and fix the first errors alone'],
      ['5. Question', '11 to adult', 'Ask whether a number was counted, estimated or copied'],
      ['6. Report', '14 to adult', 'Describe a dataset\'s limits in plain words before using it']
    ] },
    left: { h3: 'For parents', ps: [
      'The water-register puzzle sits at step 5. Few adults ever look at a number this way.',
      'We tell you what your child built each term and what they can now explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'If too many numbers end in zero, somebody probably rounded them.',
      'The remainder, % in Python, is one of the most useful tools you will ever learn.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Cusco learners',
    lede: 'Youngest first. All run live, in English, with a regular mentor, for a group or a single learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'CUS / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'A full Scratch course, from first sprite to finished game.' },
        { code: 'CUS / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The step from blocks to typed code, for 9 to 12 year olds.' },
        { code: 'CUS / KIDS / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Number sense and confidence for the youngest learners.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 13 to 18', courses: [
        { code: 'CUS / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'From Python to working models, using school maths.' },
        { code: 'CUS / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms and data structures for contests and beyond.' },
        { code: 'CUS / TEEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Design and build mobile apps that friends can use.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'CUS / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from scratch to advanced, for students and adults.' },
        { code: 'CUS / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL, Python and dashboards for beginners.' },
        { code: 'CUS / ADULT / 03', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Full games built and shipped by older learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for Cusco families',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'Early in Cusco is evening in India, a quiet hour for a first class.' },
      { time: 'After school', l: 'Later hours and weekends are open too, as the family prefers.' },
      { time: 'Private class', l: 'A mentor and one learner, at times agreed between them.' }
    ],
    cells: [
      { h3: 'A familiar face', p: 'Children see the same mentor every week.' },
      { h3: 'English made easy', p: 'Pictures, gestures and the same words each class.' },
      { h3: 'Child in control', p: 'The learner moves the blocks and types the code.' },
      { h3: 'Ages apart', p: 'Six year olds never share a class with teenagers.' },
      { h3: 'Parents in the loop', p: 'A note on what was made and what comes next.' },
      { h3: 'Class size', p: 'Fifteen to twenty in a class, or just one.' }
    ]
  },

  projectsH2: 'Built by students who kept going',
  projectsLede: 'Students who stay a year or two make tools and games of their own. Some are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> have more.',
  reviewsLede: 'Parents and students in their own words, from our Google reviews.',

  fees: {
    h2: 'Fees for learners in Cusco',
    lede: 'Plans are paid one month at a time. The fee is set and charged in US dollars on your card, and your bank changes it into soles at the rate it uses that day.',
    free: ['A first class at no cost', 'A puzzle and a tiny program', 'No card details'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor each week', 'Two live classes a week', 'Pay monthly, stop any time'],
    one: ['Your learner alone with a mentor', 'Projects shaped around them', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Cusco families ask',
    h2: 'Coding classes in Cusco: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No, never. We teach only in English, live and online. Mentors use short, clear sentences, show as well as tell, and adjust to each child\'s accent and speed. A young learner who answers in Spanish is understood and hears the English words back.' },
      { q: 'Can a six year old in Cusco really learn to code?', a: 'Yes. At six, children use Scratch blocks that need no typing, and classes are short and practical. They learn order, repetition and simple rules by making a character move, which is coding in its first form.' },
      { q: 'Will my child follow a class in English if their school English is weak?', a: 'Usually yes. Scratch is visual, mentors repeat the same phrases every week and wait for answers, and the free first class shows how comfortable your child is before you decide anything.' },
      { q: 'Do schools in Cusco teach coding?', a: 'Not as a subject. Primaria has 30 hours a week and secundaria 35 under the regular plan, and neither includes a computing area; digital skills are spread across all areas. Coding is learned outside school.' },
      { q: 'Is there a centre in Cusco I can visit?', a: 'No. All our classes are live online, so a child in San Sebastián, Santiago or Wanchaq joins exactly as a child in the historic centre does.' },
      { q: 'What time are classes in Cusco?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Cusco keeps Peru time all year; 08:30 in Cusco is 19:00 for a mentor in India.' },
      { q: 'Do you teach teenagers and adults too?', a: 'Yes. Teenagers learn Python, Java, AI and problem solving; university students add data structures; adults take Python, data analysis or AI tools. Every age group has its own classes.' },
      { q: 'How is the fee charged?', a: 'Monthly, in US dollars, the currency this page shows, charged to your card; your bank converts it into soles. Visitors in India see rupees. The trial class is free and no card is needed for it.' },
      { q: 'Is there a certificate?', a: 'Where a course provides one, it is our own Modern Age Coders certificate of completion. It is not from MINEDU, a school or a university, and it is not a Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Cusco families.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our guide for the whole country.' },
      { href: '/online-coding-and-ai-classes-cusco-region-peru', label: 'Cusco region', p: 'The provinces, internet and school results.' },
      { href: '/programacion-para-ninos-de-6-anos', label: 'Programación para niños de 6 años', p: 'In Spanish, for parents of six year olds.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where the youngest learners begin.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Safe, age-appropriate AI ideas.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from the inside.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Cusco',
    lede: 'The trial lasts one class. Your child solves a small puzzle and builds a first program with the mentor, who sees how they think and how much English they follow, then suggests a course and a group.',
    readFirst: 'Want more detail first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Live online classes, mentors in India, English only. Message us on WhatsApp in English for the quickest reply.',
    formNote: 'No cost, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru guide' },
        { href: '/online-coding-and-ai-classes-cusco-region-peru', label: 'Cusco region' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Too many zeros means someone rounded'
  },

  personalityCss: `
.ag-root.ag-cocu .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cocu .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-cocu .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cocu .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-cocu .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); Ley N.° 28044; MINEDU CNEB primaria and secundaria plans of study, normative ages and 2026 school opening; UTEC olympiad pages; EF EPI 2025; tz database and INACAL. Data: Gobierno Regional de Cusco, drinking-water coverage indicators 2016 to 2019, ODC-By.',
    localProject: 'Can the last digit tell you if someone counted? An original Python puzzle on the GORE Cusco drinking-water register (ODC-By): Version 1 counts the last digit of 4,021 populations and finds 36.7% ending in 0 against 12.9% among INEI\'s 116 Cusco district totals; Version 2 finds 1,739 of 4,177 rows where people are an exact multiple of lived-in homes, 755 at exactly four per home. Lesson family: digit heaping, n % 10 with a Counter.',
    requiredMentions: ['cusco-agua.csv', 'Populations of 10 or more: 4021', 'ends in 0 : 36.7 %', 'exactly 4 per home: 755 rows', '495,112', '428,450', 'San Sebastián', 'Too many zeros means someone rounded', 'Cusco city 520'],
    sources: [
      { claim: 'Cusco department, province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cusco city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'GORE Cusco drinking-water coverage dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/indicadores-de-cobertura-en-el-servicio-de-agua-potable-en-el-departamento-de-cusco-2016' },
      { claim: 'Primaria and secundaria weekly hours; English implementation clause; transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Primaria six years, secundaria five (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'OPEIA 2026 date and the 2025 IOAI delegation; OPI free for secundaria.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Cusco city and region.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any drinking-water coverage percentage for Cusco city or a district: the register covers local services, not whole districts, so the page prints none.',
      'A claim about how the register\'s figures were produced: the file does not say; the page reports only the patterns.',
      'A Cusco total made by adding districts, provinces or register rows: never done.',
      'Any statement that Cusco schools do or do not hire English teachers: only the curriculum clause is quoted.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with the Gobierno Regional de Cusco, MINEDU, UTEC or any school or university: none.'
    ]
  }
};
