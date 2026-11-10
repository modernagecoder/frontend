// SHIP: market (region) | Ayacucho: Huamanga, Huanta and the VRAEM, tablets arriving, long mountain roads | regex: pull "KM 46+191" chainages from free text, pair them, flag an odd count
'use strict';
// Online coding and AI classes, Ayacucho region, Peru (ag- region page, Peru cluster row PE176; alloc: regions, cbc, #40641A).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Ayacucho is a highland region of eleven provinces whose capital (Ayacucho city, in Huamanga) holds almost half its
// people, with the VRAEM valleys far to the north-east. The regional government is handing out tablets and has just created a
// UGEL for the VRAEM because distance slows everything down. The page is honest that home computers are scarce and EF gives
// no Ayacucho English score, steers teenagers and adults first, and the project reads the regional road inventory, whose
// distances are written inside free text, with a regular expression.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-ayacucho-region-peru/
// and the shared ../src/inei/ folder):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (src/inei/tab/ind_00.xlsx): AYACUCHO 709029;
//    provinces HUAMANGA 318114, CANGALLO 41201, HUANCA SANCOS 8487, HUANTA 110067, LA MAR 82283, LUCANAS 51129, PARINACOCHAS
//    31103, PÁUCAR DEL SARA SARA 11404, SUCRE 10633, VÍCTOR FAJARDO 22608, VILCAS HUAMÁN 22000; districts AYACUCHO 102171,
//    SAN JUAN BAUTISTA 53980, HUANTA 44462, CARMEN ALTO 34650, ANDRÉS AVELINO CÁCERES DORREGARAY 31601, JESÚS NAZARENO 21823,
//    SIVIA 14285, LLOCHEGUA 11800, CORACORA 13645, PUQUIO 13639. Anexo: "Ley N° 32649 Del límite entre las provincias de
//    Cangallo y Víctor Fajardo, del departamento de Ayacucho, del 13/06/2026." Capital Ayacucho (Compendio 2026 cuadro 1.8).
//    Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (image table, places.tsv): Ayacucho city 216,444 (2017). Lib1541 dpto05 (single centro
//    poblado, 2017): HUANTA 31757, PUQUIO 12536.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (ENAHO): 11.5 Ayacucho "13,3 14,3 13,6 15,1 15,5 18,8 16,9 19,6 21,4 19,6
//    20,9"; 11.6 "5,3 6,1 5,7 7,2 13,5 16,8 30,8 38,5 35,2 34,3 35,5"; 11.13 "26,6 29,2 28,3 32,8 36,9 43,4 59,9 58,5 65,5
//    69,6 73,5" (2015 to 2025). Peru 2025: 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): Peru 519 moderate; the Regions list names 15 regions (Lima 544 ... Cajamarca 383) and has no
//    Ayacucho entry; cities list has no Ayacucho entry.
//  - GORE Ayacucho on gob.pe, 15 September 2026 (n 1453514): "un lote de 16,955 tabletas"; "séptimo año de operación del
//    Proyecto Regional “Instalación de Banda Ancha para la Conectividad Integral y Desarrollo Social de la Región Ayacucho”";
//    "se vienen coordinando las próximas entregas de laptops".
//  - GORE Ayacucho on gob.pe, 29 August 2026 (n 1453317): "Decreto Regional 004-2026-GRA/GR"; seat Santa Rosa; "207
//    instituciones educativas"; districts "Anchihuay, Samugari, Ayna, Santa Rosa y Río Magdalena"; "14 861 estudiantes,
//    acompañados por 826 docentes"; antecedent "Ordenanza Regional N.° 30-2012-GRA/CR".
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM
//    2026, OPI (FACTS 5, 6, 13, 14, 17, 32, 33, 39, 45, 99, 105, 111). Time: tzdata.
//  - Data: Gobierno Regional de Ayacucho (GORE Ayacucho), "Infraestructura y estado de la red vial departamental de
//    Ayacucho", datosabiertos.gob.pe, "Open Data Commons Attribution License" (ODC-By), created 4 September 2026, modified
//    15 September 2026. Resource INVENTARIO VIAL DEPARTAMENTAL (saved as inventario-vial.csv, 8,395 bytes, UTF-8 with BOM,
//    semicolons, two header lines, 17 route rows, N° 11 used twice). Data dictionary: DENOMINACION DE INTERVENCION "Detalle o
//    alcance específico de las secciones o sub-tramos de vía programados o intervenidos"; coordinates UTM WGS84 zone 18S. The
//    dataset's second file (critical points and emergencies) is not used.
// Our own calculations (scratchpad pe/r4/ay/v1.py, v2.py, python3 -I):
//  v1 prints 14 lines, among them: "AY-100 first to last: 62.143 km", "AY-101 first to last: 148.648 km",
//    "AY-117 first to last: 0.0 km".
//  v2 prints: "Sections with an odd count: ['AY-104', 'AY-107', 'AY-108', 'AY-116', 'AY-117']" / "Inside the sections:
//    622.28 km" / "Between the sections: 34.176 km".
//  Surface column: AFIRMADO 12, ASFALTADO 4, "AFIRMADA " (trailing space) 1; ESTADO_ACTUAL REGULAR on all 17 rows.
// Lesson family: regular expressions on free text: find every "km + metres" chainage, turn it into metres, pair starts with
// ends, and refuse to guess when a route has an odd number of marks.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import re',
  '',
  'CHAINAGE = re.compile(r"(\\d+)\\s*\\+\\s*(\\d+)")',
  '',
  'with open("inventario-vial.csv", encoding="utf-8-sig", newline="") as f:',
  '    rows = list(csv.reader(f, delimiter=";"))[2:]',
  '',
  'for row in rows:',
  '    if not row[1]:',
  '        continue',
  '    marks = [int(km) * 1000 + int(m) for km, m in CHAINAGE.findall(row[4])]',
  '    if marks:',
  '        span = (marks[-1] - marks[0]) / 1000',
  '        print(row[1], "first to last:", span, "km")'
].join('\n');

const V2 = [
  'import csv',
  'import re',
  '',
  'CHAINAGE = re.compile(r"(\\d+)\\s*\\+\\s*(\\d+)")',
  '',
  'with open("inventario-vial.csv", encoding="utf-8-sig", newline="") as f:',
  '    rows = list(csv.reader(f, delimiter=";"))[2:]',
  '',
  'worked = gaps = 0',
  'odd = []',
  'for row in rows:',
  '    marks = [int(km) * 1000 + int(m) for km, m in CHAINAGE.findall(row[4])]',
  '    if not row[1] or not marks:',
  '        continue',
  '    if len(marks) % 2:',
  '        odd.append(row[1])',
  '        continue',
  '    starts, ends = marks[0::2], marks[1::2]',
  '    worked += sum(e - s for s, e in zip(starts, ends))',
  '    gaps += sum(s - e for e, s in zip(ends, starts[1:]))',
  '',
  'print("Sections with an odd count:", odd)',
  'print("Inside the sections:", worked / 1000, "km")',
  'print("Between the sections:", gaps / 1000, "km")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Ayacucho region' },
  slug: 'online-coding-and-ai-classes-ayacucho-region-peru',
  code: 'cbc',
  accent: '#40641A',
  accentRationale: 'Ayacucho region: a deep retama-leaf green #40641A, the broom shrub on the hillsides above Huamanga, allocated to this row; contrast 6.48 on #FBF8F2, 6.10 on #F5F1E8 and 5.58 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Ayacucho region, Peru',
  title: 'Ayacucho Region, Peru: Live Online Coding and AI in English',
  description: 'Live online coding and AI classes in English for the Ayacucho region: who they suit, census and device facts, and a Python project on the regional road inventory.',
  ogDescription: 'Coding, AI and maths for learners in Huamanga, Huanta, the VRAEM and the southern provinces of Ayacucho, taught live online in English: eleven provinces in 2025 census figures, honest notes on computers and English, and a regular-expression project on the GORE Ayacucho road inventory.',
  twitterDescription: 'Ayacucho region, live online coding in English: who it suits, census and device facts, a road-inventory Python project.',
  pageName: 'Online Coding and AI Classes in the Ayacucho Region',
  webPageDescription: 'A guide for families, students and adults across the Ayacucho region of Peru to live online coding and AI classes taught in English, built from INEI census and ENAHO tables, GORE Ayacucho notes, MINEDU curriculum sources and an original Python project on the GORE Ayacucho departmental road inventory (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Ayacucho region of Peru: block coding and puzzles for children, Python, Java and web building for secundaria students, Python, data and Java for university students and working adults, in a group of fifteen to twenty or one to one, at hours the family picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Ayacucho region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#fit', label: 'Fit' },
    { href: '#eleven', label: 'Provinces' },
    { href: '#roads', label: 'Road project' },
    { href: '#home-kit', label: 'Computers' },
    { href: '#clock', label: 'Hours' }
  ],
  eyebrow: 'Ayacucho region &middot; Live online, in English &middot; Older learners first',
  h1: 'Online coding and AI classes in the Ayacucho region',
  lede: 'From Huamanga and Huanta to Puquio, Coracora and the river valleys of the VRAEM, the Ayacucho region is wide, high and slow to cross. A live class on a screen removes the journey but not every obstacle: English and a home computer still matter. Below you will find the region in census and survey numbers, a plain statement of who our English-taught classes suit here today, and a lesson that teaches a real programming idea with the regional government\'s own road inventory.',
  secondaryCta: { href: '#roads', label: 'Open the road-inventory project' },
  wa: 'Hello Modern Age Coders, I live in the Ayacucho region of Peru and would like to know if your live coding classes in English would work for me or my child. Can we book a free class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; patient mentors for learners still building their English',
  spec: [
    ['Strongest fit', 'Secundaria students, university students and adults who read some English'],
    ['Younger children', 'Welcome, usually one to one at first'],
    ['Language', 'English only, spoken slowly'],
    ['Formats', 'Group of fifteen to twenty, or private'],
    ['Hours', 'Chosen by you, any day'],
    ['First step', 'A free class with an honest verdict']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding, AI and maths live online in English across the whole Ayacucho region of Peru, from Ayacucho city (Huamanga) and Huanta to La Mar, Lucanas and the VRAEM. The right fit today is a secundaria student, university student or working adult who reads some English: Python, Java, web building, data and AI, face to face on video with one mentor. Six year olds and up can begin with blocks, most often in private lessons. Classes run in a group of fifteen to twenty or privately, at hours you choose, and the first class is free.',

  picks: {
    eyebrow: 'Where Ayacucho learners start',
    h2: 'Three first courses for learners in the Ayacucho region',
    lede: 'One for teenagers, one for adults and one for curious children, chosen because English-taught classes are easiest to begin at those three points.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'AYA / 01', title: 'Python for Teens', note: 'For pupils in 1° to 5° de secundaria starting from nothing. Python\'s keywords are short English words, so the language of the class and the language of the code grow together.' },
      { course: 'data-analysis-mastery-course-college', code: 'AYA / 02', title: 'Data Analysis', note: 'For university students and adults. Spreadsheets, SQL and Python on real public tables, like the road inventory below, at hours that fit lectures or work.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'AYA / 03', title: 'Problem Solving for Kids', note: 'For children of about seven to twelve. Puzzles, patterns and step-by-step plans before any typing, with very little reading in English.' }
    ]
  },

  sections: [
    {
      id: 'fit',
      eyebrow: 'Before you book',
      h2: 'Who in Ayacucho gets the most from classes taught in English?',
      lede: 'Learners who already read some English and have a computer at home or nearby. Every class is live and online and is taught in English, never Spanish, so it is fair to look at both of those things first.',
      body: [
        { kind: 'two',
          leftH3: 'What the English figures say',
          left: [
            'In the 2025 edition of the EF English Proficiency Index, Peru scores 519, a result EF calls moderate. Its Peru page lists fifteen regions with their own scores, and Ayacucho is not one of them, so there is no published regional figure for us to quote.',
            'Inglés has three hours a week in every grade of the regular secundaria timetable, so most teenagers in the region have studied it for years. How comfortable they feel with it varies a great deal, and the free class is where we find out.'
          ],
          rightH3: 'Who tends to thrive',
          right: [
            'Teenagers who like English and want something to use it on. Students at the regional university or an institute, where manuals, error messages and documentation are in English anyway. Grown-ups who meet English in their jobs or online every day.',
            'Younger children from Spanish-speaking homes can learn with us too. They do well in private lessons, where the teacher shows every step on the screen, uses the same few phrases each week and never hurries.'
          ] },
        { kind: 'p', mt: true, html: 'We would rather turn a family away kindly than take a fee for classes that cannot work. If the free class shows that English is a wall rather than a step, you will hear that directly, along with an alternative: private lessons, a later start, or a gentler first course. Parents who prefer Spanish have <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">a guide written in Spanish for families of younger children</a>, and teenagers can see what a typical path looks like on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a>.' }
      ]
    },
    {
      id: 'eleven',
      tint: 'tint',
      eyebrow: 'Eleven provinces',
      h2: 'What is the population of the Ayacucho region in 2025?',
      lede: 'INEI\'s 2025 census counted 709,029 people in the department of Ayacucho, in eleven provinces. Huamanga, the province around the regional capital, holds 318,114 of them.',
      body: [
        { kind: 'table', numCols: [1], caption: 'People counted in each Ayacucho province, 2025 census', head: ['Province', 'Population (2025)'], rows: [
          ['Huamanga (capital: Ayacucho)', '318,114'],
          ['Huanta', '110,067'],
          ['La Mar', '82,283'],
          ['Lucanas', '51,129'],
          ['Cangallo', '41,201'],
          ['Parinacochas', '31,103'],
          ['Víctor Fajardo', '22,608'],
          ['Vilcas Huamán', '22,000'],
          ['Páucar del Sara Sara', '11,404'],
          ['Sucre', '10,633'],
          ['Huanca Sancos', '8,487'],
          ['Department of Ayacucho', '709,029']
        ] },
        { kind: 'source', html: 'INEI, 2025 national census, demographic indicators table Cuadro N° 1, población total (counted plus omitted) at the census reference day of 15 September 2025, on boundaries in force at 15 July 2026. The department figure is INEI\'s own, not our sum of the provinces. The boundary between Cangallo and Víctor Fajardo was set by Ley N° 32649 of 13 June 2026, listed in the same file.' },
        { kind: 'two', mt: true,
          leftH3: 'Ayacucho city and Huamanga',
          left: [
            'In the 2017 census INEI counted 216,444 people in the city of Ayacucho, which spreads over several districts of Huamanga. In 2025 the district of Ayacucho itself had 102,171 people, San Juan Bautista 53,980, Carmen Alto 34,650, Andrés Avelino Cáceres Dorregaray 31,601 and Jesús Nazareno 21,823.',
            'The city figure is from 2017 and the district figures are from 2025, so we never add the districts up and call it the city today.'
          ],
          rightH3: 'Huanta, the south and the VRAEM',
          right: [
            'Huanta district counted 44,462 people in 2025; its main town had 31,757 in INEI\'s 2017 directory of populated centres. In the south, Coracora district had 13,645 and Puquio 13,639 in 2025.',
            'In the north-east, along the Apurímac and Ene rivers, Sivia had 14,285 people and Llochegua 11,800. These valley towns sit a long way from the regional capital, and a class that comes to the learner\'s screen saves that whole journey.'
          ] }
      ]
    },
    {
      id: 'roads',
      eyebrow: 'An Ayacucho data project',
      h2: 'How long are the road sections in Ayacucho\'s road inventory?',
      lede: 'The answer is in the file, but not in a column. The distances are written inside sentences such as "PACCHANCCA (KM 46+191)", and a program has to dig them out. That makes the inventory a good, honest exercise in regular expressions.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'The Gobierno Regional de Ayacucho publishes "Infraestructura y estado de la red vial departamental de Ayacucho" on datosabiertos.gob.pe with an ODC-By licence (Open Data Commons Attribution), so anyone may reuse it as long as the source is credited. It was created on 4 September 2026 and last changed on 15 September 2026.',
            'We use only its road inventory file, saved as inventario-vial.csv. It has two header lines and 17 route rows, each with a route code such as AY-100, the provinces it crosses, a surface type, a condition, start and end coordinates, and a long text describing the sections programmed for work.'
          ],
          rightH3: 'How a chainage is written',
          right: [
            'Peruvian road engineers mark a point on a road by its chainage: whole kilometres, a plus sign, then metres. "KM 46+191" means 46 kilometres and 191 metres from the start of the route, or 46,191 metres.',
            'The data dictionary describes the text column as the "detalle o alcance específico de las secciones o sub-tramos de vía programados o intervenidos". So the chainages in it mark where each section begins and ends, often several sections per route.'
          ] },
        { kind: 'code', label: 'Version 1: first mark to last mark', lang: 'Python', code: V1, note: 'It prints fourteen lines, one per route row that has any marks. Among them: <code>AY-100 first to last: 62.143 km</code>, <code>AY-101 first to last: 148.648 km</code> and <code>AY-117 first to last: 0.0 km</code>.' },
        { kind: 'p', mt: true, html: 'The pattern <code>(\\d+)\\s*\\+\\s*(\\d+)</code> reads as "some digits, maybe spaces, a plus sign, maybe spaces, some digits", and the brackets capture the kilometres and metres separately. Multiplying the kilometres by 1,000 and adding the metres turns every mark into one whole number, so <code>int("09")</code> and <code>int("00")</code> are handled without fuss. Version 1 then takes the last mark minus the first. It looks reasonable, and two lines of its output already show that it is not: AY-117 comes out at zero kilometres, and AY-100 counts the stretch between two of its sections as if it were part of the work.' },
        { kind: 'code', label: 'Version 2: pair the marks, measure the gaps, and refuse to guess', lang: 'Python', code: V2, note: 'It prints: <code>Sections with an odd count: [\'AY-104\', \'AY-107\', \'AY-108\', \'AY-116\', \'AY-117\']</code>, <code>Inside the sections: 622.28 km</code> and <code>Between the sections: 34.176 km</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 treats the marks as start, end, start, end. The slices <code>marks[0::2]</code> and <code>marks[1::2]</code> separate the starts from the ends, <code>zip</code> lines them up, and a second <code>zip</code> measures the gap from each end to the next start. A route with an odd number of marks cannot be split into pairs, so the program puts it on a list instead of inventing the missing number. Five routes land there. AY-117 has a single mark. AY-107 begins at a junction written as "Emp. PE-30 D" with no chainage, so its first start is missing from the text, even though a person reading it would assume kilometre zero.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'What Version 2 reports for the nine route rows it can pair (our calculation, file modified 15 September 2026)', head: ['Measure', 'Value'], rows: [
          ['Route rows in the file', '17'],
          ['Rows with no chainage at all', '3'],
          ['Rows set aside with an odd count of marks', '5'],
          ['Length inside the paired sections', '622.28 km'],
          ['Length between consecutive sections', '34.176 km']
        ] },
        { kind: 'source', html: 'Data: Gobierno Regional de Ayacucho, Infraestructura y estado de la red vial departamental de Ayacucho, inventory file, ODC-By. Every count and length here is ours, computed from the text column and nothing else; it is not an official network length. The surface column says AFIRMADO on 12 rows, ASFALTADO on 4 and "AFIRMADA " with a trailing space on 1; the condition column says REGULAR on all 17.' },
        { kind: 'ol', mt: true, items: [
          '<strong>For the youngest (around 6 to 8).</strong> Lay a skipping rope on the floor and stick paper marks on it: 2, 5, 9 and 12. Colour the rope between 2 and 5 and between 9 and 12. How much is coloured, and how much is left between?',
          '<strong>Blocks (around 8 to 11).</strong> Make a list of four numbers in Scratch, then use a loop that takes them two at a time and adds up each difference. What should happen if the list has five numbers?',
          '<strong>First Python (around 11 to 13).</strong> Change Version 1 so it also prints how many marks each route has. Which routes would you not trust?',
          '<strong>Teenagers.</strong> Write a pattern that also captures the word before each mark, such as PACCHANCCA, so the program can print the place names in order.',
          '<strong>University and adults.</strong> Clean the surface column with <code>strip()</code> and a small mapping so "AFIRMADA " and "AFIRMADO" count as one type, then total the paired lengths by surface.'
        ] },
        { kind: 'p', mt: true, html: 'The habit we are building is simple to say and hard to keep: when the data does not give you a number, say so and set the row aside, instead of filling the hole with a guess that looks tidy. It is the same habit we ask for when students use AI tools, and our page on <a class="ag-inline-link" href="/learn-to-think-not-copy-coding-peru">learning to think rather than copy</a> explains why we teach it from the first week.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Schools and the region',
      h2: 'Is programming taught in Ayacucho\'s schools?',
      lede: 'Not as its own subject. Ayacucho\'s schools teach the national CNEB, where digital skills are spread across all subjects, and the regional government\'s recent work has been about devices and distance rather than a coding course.',
      body: [
        { kind: 'two',
          leftH3: 'The national picture',
          left: [
            'Peru\'s General Education Law gives primaria six years and secundaria five. Grade placement uses the child\'s age on the last day of March, which puts six year olds in first grade and most sixteen year olds in the final year of secundaria.',
            'Competency 28 of the CNEB, about working in virtual environments created by ICT, is transversal, so every subject shares it and no subject owns it. Across the 35 weekly hours of regular secundaria, Matemática gets four and nothing is called programming.'
          ],
          rightH3: 'What the regional government reports',
          right: [
            'On 15 September 2026 the Gobierno Regional de Ayacucho said it had received 16,955 tablets from PRONATEL for pupils and teachers, in the seventh year of its regional broadband project, and that laptop deliveries for rural areas were being arranged.',
            'On 29 August 2026 it announced Decreto Regional 004-2026-GRA/GR creating the UGEL VRAEM, seated in Santa Rosa, for 207 educational institutions with 14,861 pupils and 826 teachers in Anchihuay, Samugari, Ayna, Santa Rosa and Río Magdalena.'
          ] },
        { kind: 'p', mt: true, html: 'Both notes point the same way: in Ayacucho, the hard part is reaching learners, not deciding what to teach them. Fábrica de Programadores, the MINEDU pilot that teaches Python to secundaria pupils, opened in July 2025 for a first group of 1,000 in Lima Norte; we found nothing showing it in Ayacucho yet. Competitions reach the region all the same. The ONEM maths olympiad held its school round on 8 July 2026, with over 1.7 million secundaria pupils taking part across Peru, and the OPI computing olympiads run by UTEC cost nothing to enter. We have no tie to the regional government, MINEDU, UTEC or either competition, and every problem we set is written by us.' }
      ]
    },
    {
      id: 'home-kit',
      eyebrow: 'Devices and connection',
      h2: 'How many homes in Ayacucho have a computer or internet?',
      lede: 'In 2025 roughly a fifth of Ayacucho homes owned a computer and just over a third paid for an internet connection, on INEI\'s household survey. Going online by phone has grown far faster.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Ayacucho against Peru, ENAHO (per cent)', head: ['Indicator', 'Ayacucho 2022', 'Ayacucho 2025', 'Peru 2025'], rows: [
          ['Homes with at least one computer', '19.6', '20.9', '33.9'],
          ['Homes with an internet service', '38.5', '35.5', '56.8'],
          ['People aged 6 and over using the internet', '58.5', '73.5', '81.1']
        ] },
        { kind: 'source', html: 'Source: tables 11.5, 11.6 and 11.13 of INEI\'s statistical compendium for 2026 (volume 1), based on ENAHO, the national household survey. INEI prints decimal commas; we show points. Survey estimates for the department, not head counts.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the three rows together',
          left: [
            'Internet use among people aged six and over rose from 58.5 to 73.5 per cent between 2022 and 2025, while the share of homes with an internet service did not rise at all. Most of that new use is on mobile phones.',
            'The share of homes with a computer barely moved, at about a fifth. That is the number that matters most for a programming class.'
          ],
          rightH3: 'What a learner actually needs',
          right: [
            'To watch and talk, a phone or tablet is enough. To program, a learner types, runs, reads an error and fixes it, again and again, and that needs a keyboard and a bigger screen.',
            'A shared family laptop works well if the class time is protected. University students can often use a faculty lab. Young children can start block coding on a tablet, which may be one of the 16,955 the region is distributing.'
          ] },
        { kind: 'p', mt: true, html: 'Tell the mentor in the free class what you have. If there is no computer the learner can use regularly, we will say that waiting is better than paying for a course that cannot be practised between sessions.' }
      ]
    },
    {
      id: 'routes',
      eyebrow: 'Choosing',
      h2: 'Which course should an Ayacucho learner take first?',
      lede: 'Begin with age, then English, then the device. The guide below is ours; the age ranges are our course ranges, not school rules.',
      body: [
        { kind: 'table', numCols: [], caption: 'A starting course by age, English and device (our suggestions)', head: ['Learner', 'English today', 'Device', 'First course'], rows: [
          ['Child, 6 to 8', 'Very little', 'Tablet or laptop', 'Reasoning and puzzles, one to one'],
          ['Child, 8 to 12', 'Some from school', 'Laptop, even shared', 'Scratch, then Python and AI for kids'],
          ['1° to 3° de secundaria', 'Basic', 'Laptop', 'Python for Teens'],
          ['4° and 5° de secundaria', 'Reads comfortably', 'Laptop', 'Python, then Java or web building'],
          ['University student', 'Reads technical English', 'Own or faculty computer', 'Data analysis or Java'],
          ['Working adult', 'Any, with time', 'Laptop', 'Python from zero, often one to one']
        ] },
        { kind: 'source', html: 'Our suggestions only. Grade placement follows MINEDU\'s normative age on 31 March, so pupils in one class can be almost a year apart.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Short sessions built on puzzles and blocks. The mentor names each action in English while doing it, so words and ideas arrive together.' },
          { h3: 'Secundaria', p: 'Typed code from the start, with Python first. Students who stay move on to Java, web pages or the PCEP certificate route.' },
          { h3: 'University and work', p: 'Programming and data for engineering, accounting, agronomy or administration, scheduled around lectures and jobs.' }
        ] },
        { kind: 'p', mt: true, html: 'University students in the region can compare options on <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>, and the full national overview, with every Peru guide, is on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Hours',
      h2: 'What time would an online class be in Ayacucho?',
      lede: 'Whenever suits you. Ayacucho keeps Peru time, the mentor works from India, and the hour is set around the learner rather than the other way round.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample conversions from Ayacucho time to India time (examples, not a timetable)', head: ['Ayacucho', 'India', 'Mentor\'s day'], rows: [
          ['06:00', '16:30', 'Afternoon'],
          ['08:30', '19:00', 'Evening'],
          ['10:00', '20:30', 'Evening'],
          ['13:00', '23:30', 'Late night'],
          ['16:00', '02:30', 'Following night'],
          ['19:30', '06:00', 'Following morning']
        ] },
        { kind: 'source', html: 'Ayacucho uses Peru time, five hours behind UTC, with no daylight saving since 1994 (tz database zone America/Lima). India runs five and a half hours ahead of UTC, so the difference never changes from 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'Because neither clock changes, an hour agreed in March still holds in October. You pick it in your own time when booking. Schools reopened for 2026 on 16 March, and many families start in the January to March holidays, when there is more free time; our <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding guide for Peru</a> covers that route.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How an Ayacucho learner moves forward',
    lede: 'Our own stages, shared by every age group, so families can see where a learner stands and what comes next.',
    table: { caption: 'Our stages, from first sequences to reading messy text', head: ['Stage', 'Typical age', 'The learner can'], rows: [
      ['1. Order', '6 to 7', 'Put three or four steps in the right order'],
      ['2. Loop', '7 to 9', 'Repeat a step without copying it out'],
      ['3. Store', '8 to 10', 'Keep a number in a variable and change it'],
      ['4. Write', '9 to 12', 'Type short Python with if, for and lists'],
      ['5. Pair', '11 to adult', 'Walk a list two items at a time with slices and zip'],
      ['6. Extract', '13 to adult', 'Pull numbers out of free text with a pattern, and report what did not fit']
    ] },
    left: { h3: 'For families', ps: [
      'The road project uses stages 5 and 6. A learner who has done it can look at a spreadsheet of sentences and say which numbers are hiding inside.',
      'Each month you get a short note on what was built and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'A number written inside a sentence is still data.',
      'If a pair is missing half, say so.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further choices',
    h2: 'Nine more courses for learners in Ayacucho',
    lede: 'Grouped by age, every one taught live in English by a regular mentor, in a group or alone.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'AYA / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories from blocks, with almost no typing.' },
        { code: 'AYA / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle drawings, small games and first smart projects.' },
        { code: 'AYA / KIDS / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense built step by step, not tricks.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'AYA / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, objects and real programs from week one.' },
        { code: 'AYA / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Logic and algorithms, the base for any olympiad.' },
        { code: 'AYA / TEEN / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certificate preparation, open to adults too.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'AYA / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From a first script to automation and projects.' },
        { code: 'AYA / ADULT / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java course', blurb: 'Core Java to Spring Boot for systems students.' },
        { code: 'AYA / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'Tables, queries and design for real records.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How live online classes run for the Ayacucho region',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Early Ayacucho hours are evening for the mentor in India.' },
      { time: 'After school', l: 'Afternoons and evenings in Peru work as well.' },
      { time: 'Private', l: 'Best when English needs patience and repetition.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person each week, who learns how the student thinks.' },
      { h3: 'Plain English', p: 'Short sentences, shown on screen as well as spoken.' },
      { h3: 'Hands on keys', p: 'The learner types and runs the code, not the mentor.' },
      { h3: 'Age groups apart', p: 'Children, teenagers and adults are never mixed.' },
      { h3: 'Straight reports', p: 'Families hear what is working and what is not.' },
      { h3: 'Two ways to join', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our longer-term students build',
  projectsLede: 'After some months, students make tools that solve real problems. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reviews left on Google by students and parents, copied without edits.',

  fees: {
    h2: 'Fees for learners in the Ayacucho region',
    lede: 'Fees are set in US dollars and paid monthly by card. Your bank changes the dollar amount into soles when the payment goes through, using its own rate, so the soles figure on your statement can move slightly from month to month.',
    free: ['A free first class', 'An honest check of English and equipment', 'No card needed'],
    group: ['Fifteen to twenty learners close in age', 'One regular mentor', 'Live classes every week', 'Pay monthly, stop when you like'],
    one: ['A single learner with the mentor', 'Pace set by the learner', 'An hour you choose']
  },

  faq: {
    eyebrow: 'Questions from Ayacucho',
    h2: 'Online coding and AI classes in Ayacucho: questions families ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak slowly and clearly, match the learner\'s pace and accent, and help a student who answers in Spanish find the English words, but the teaching itself is always in English.' },
      { q: 'Does EF publish an English score for Ayacucho?', a: 'Not in its 2025 index. EF scores Peru as a whole at 519, in its moderate band, and lists fifteen regions with their own scores; Ayacucho is not among them. The free class is how we judge an individual learner.' },
      { q: 'We live in Huanta, the VRAEM or Lucanas. Can we join?', a: 'Yes. The classes are online, so a learner in Huanta, Sivia, Llochegua, Puquio or Coracora joins exactly as one in Ayacucho city does, as long as the connection holds for an hour and there is a suitable device.' },
      { q: 'Is a tablet from school enough?', a: 'For a child starting with blocks, often yes. For typed programming from about nine or ten, a laptop or desktop is much better, because the learner spends most of the class writing and fixing code.' },
      { q: 'When are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Ayacucho is 10 hours 30 minutes behind India all year, so 08:30 in Ayacucho is 19:00 for the mentor.' },
      { q: 'Do schools in Ayacucho teach coding?', a: 'Not as a separate subject. Peru\'s national curriculum treats digital skills as a competency shared by every area, and the regular secundaria timetable has no programming hours.' },
      { q: 'Are the classes useful for university students in Huamanga?', a: 'Often they are the strongest fit. Python, Java, SQL and data analysis in English help in engineering, systems, economics and science degrees, where much of the reading is already in English.' },
      { q: 'Do you teach artificial intelligence?', a: 'Yes. Teenagers and adults learn how AI models work, how to test them and when not to trust them. Children meet the ideas through small projects, and under-13s do not use adult chatbot accounts in our classes.' },
      { q: 'How do we pay?', a: 'Monthly by card, in US dollars; your bank converts to soles. Visitors from India see rupees. The first class is free and needs no card.' },
      { q: 'Will there be a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian school or university qualification, and no Peruvian authority issues or endorses it; it records what the learner built.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More pages for Ayacucho families and students',
    lede: 'Guides that go deeper on one age group or one subject.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide, with every Peru page listed.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding classes for teens in Peru', p: 'Paths for secundaria students.' },
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Clases de programación para niños online', p: 'In Spanish, for parents of younger children.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to program later in life.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools allow which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free class from Ayacucho',
    lede: 'In the trial the learner solves a small puzzle, writes or builds a first program, and talks with the mentor in simple English. Afterwards you hear plainly whether classes make sense now, which course to start with, and whether a group or private lessons would suit better.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> follows a whole lesson, and <a class="ag-inline-link" href="/courses">the course list</a> shows every syllabus.',
    note: 'All classes are live online and taught in English by mentors based in India. A WhatsApp message in English gets the quickest reply.',
    formNote: 'Free, no card, and no obligation afterwards.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Explore', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count the marks before you trust the kilometres'
  },

  personalityCss: `
.ag-root.ag-cbc .ag-hero h1 { letter-spacing: -0.006em; max-width: 20ch; }
.ag-root.ag-cbc .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-cbc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cbc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cbc .ag-code-head b { letter-spacing: 0.04em; text-transform: uppercase; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1 and Anexo), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); GORE Ayacucho notes of 29 August and 15 September 2026; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; UTEC OPI; EF EPI 2025; tz database. Data: GORE Ayacucho, Infraestructura y estado de la red vial departamental de Ayacucho, ODC-By.',
    localProject: 'How long are the road sections in Ayacucho\'s road inventory? An original Python project on the GORE Ayacucho departmental road inventory (ODC-By, modified 15 September 2026): Version 1 subtracts the first chainage from the last and gets AY-117 at 0.0 km; Version 2 pairs "km+metres" marks found with a regular expression, sets aside five routes with an odd count, and finds 622.28 km inside the paired sections and 34.176 km between them. Lesson family: regular expressions on free text, pairing starts and ends, refusing to guess.',
    requiredMentions: ['inventario-vial.csv', 'Inside the sections: 622.28 km', 'Between the sections: 34.176 km', 'AY-117 first to last: 0.0 km', '709,029', '16,955 tablets', 'Decreto Regional 004-2026-GRA/GR', 'Count the marks before you trust the kilometres', 'Ley N° 32649'],
    sources: [
      { claim: 'Department, province and district populations of Ayacucho, 2025, and the Cangallo and Víctor Fajardo boundary law.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ayacucho city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Huanta populated-centre figure, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto05.xlsx' },
      { claim: 'Computers, internet service and internet use in Ayacucho and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Tablets received by GORE Ayacucho, 15 September 2026.', url: 'https://www.gob.pe/institucion/regionayacucho/noticias/1453514-gore-ayacucho-recibe-cerca-de-17-mil-tabletas-para-reducir-la-brecha-digital-educativa' },
      { claim: 'Creation of the UGEL VRAEM, 29 August 2026.', url: 'https://www.gob.pe/institucion/regionayacucho/noticias/1453317-gobierno-regional-de-ayacucho-oficializa-creacion-de-la-ugel-vraem' },
      { claim: 'Ayacucho departmental road inventory, ODC-By, and its data dictionary.', url: 'https://www.datosabiertos.gob.pe/dataset/infraestructura-y-estado-de-la-red-vial-departamental-de-ayacucho' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ONEM 2026 participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'EF EPI 2025 Peru score and regional list.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'An Ayacucho English score: EF EPI 2025 publishes none, so none is given or estimated.',
      'Total length of the departmental road network: the inventory text describes programmed sections, not the network; our 622.28 km is labelled as a sum of paired sections only.',
      'The dataset\'s second file on critical points and road emergencies: not used (no disaster data).',
      'Adding the 2025 district figures to stand for Ayacucho city today: refused; the city figure stays 2017.',
      'Names of officials in the GORE notes: not printed.',
      'Any link between Fábrica de Programadores and Ayacucho schools: none found, so none claimed.',
      'Any connection with GORE Ayacucho, UGELs, MINEDU, UTEC or any school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
