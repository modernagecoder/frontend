// SHIP: market (region) | Piura region: few home computers, a market-price project, live classes in English | units before arithmetic: check the unit columns, then read the data dictionary
'use strict';
// Online coding and AI classes, Piura region, Peru (ag- region page, Peru cluster row PE161; alloc: regions, core, #583D00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// fees in USD only, through the template's data-price anchors.
// Spine: Piura is Peru's most populous region outside Lima Metropolitana, yet in 2025 only about one home in five had a
// computer (INEI). So the page is honest about equipment first, then teaches with the region's own market-price data.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-piura-region-peru/,
// national school facts from pe/facts-school/src; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    PIURA 2115215 (población total, census day 15 September 2025); provinces PIURA 935084, AYABACA 128081, HUANCABAMBA
//    123992, MORROPÓN 180343, PAITA 153649, SULLANA 350259, TALARA 150023, SECHURA 93784; districts VEINTISÉIS DE OCTUBRE
//    206998, SULLANA 195448, CASTILLA 193614, PIURA 155566. Capital Piura (Compendio 2026 cuadro 1.8, places.tsv). Never summed.
//  - INEI Lib1539, Cuadro N° 1.9 (places.tsv): Piura city 473,025 (2017, población censada, conglomerate).
//  - INEI Lib1541, Directorio de Centros Poblados 2017, dpto20.xlsx (single centro poblado, undercounts a spread town):
//    SULLANA 136446, TALARA 91444, PAITA 81163, CHULUCANAS 40867, SECHURA 33134.
//  - INEI, Compendio Estadístico Perú 2026, tomo 1 (ENAHO): cuadro 11.5 "HOGARES QUE TIENEN AL MENOS UNA COMPUTADORA"
//    Piura "22,4 23,4 21,8 22,9 24,3 21,7 24,2 24,4 23,2 26,2 22,3", Total "... 34,1 33,9"; cuadro 11.6 internet households
//    Piura "... 45,3 44,2 43,2 41,2", Total "... 55,2 55,3 55,5 56,8"; cuadro 11.13 internet use 6+ Piura "... 72,5 73,6
//    76,6 77,6", Total "... 79,4 81,1".
//  - DRE Piura, gob.pe note 13 January 2026: "talleres de verano dirigidos a niñas y niños de 8 a 12 años"; "CompuKids –
//    Turno Mañana (8 a 12 años)"; "Días: Lunes y miércoles". DRE Piura note 14 January 2026: "programas orientados al
//    fortalecimiento de competencias digitales, el uso de herramientas TIC y la aplicación de la inteligencia artificial en
//    los procesos de enseñanza y aprendizaje."
//  - EF EPI 2025 Peru page (ef_peru.raw): data-state="piura" Piura 482 (border-epi-low); data-city="piura" Piura 484 (low);
//    Peru 519 moderate, rank 52 of 123.
//  - Ley 28044 (FACTS 5, 6); MINEDU Edades normativas (FACTS 13, 14); CNEB competency 28, transversal, JER secundaria hours
//    (FACTS 32, 33, 39); MINEDU 16 March 2026 opening, 53 631 schools, 6 225 000 students (FACTS 17); Fábrica de
//    Programadores (FACTS 45, 46); ONEM 2026 (FACTS 99, 105).
//  - Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30 (timezone.tsv); India 10 h 30 min ahead.
//  - Data: Gobierno Regional de Piura (GORE Piura), "Precios mayorista y minorista del Mercado Modelo de Piura",
//    datosabiertos.gob.pe, licence "Open Data Commons Attribution License" (ODC-By), released 2025-02-18, modified
//    2026-09-09. Description: "La unidad de medida de los precios es por Kilogramo o por Litro, según la presentación del
//    producto." File mimercado_dataset.csv, 750,045 bytes, 7,464 rows, 51 products, 151 market days 8 January 2024 to
//    13 March 2026, downloaded 9 November 2026.
// Our own calculations (scratchpad pe/r1/core/v1.py, v2.py, python3 -I):
//  v1 prints: Products on 13 March 2026: 50 / Smallest gap: (1.11, 'Carne de porcino (corte unico)') / Biggest gap:
//    (2.63, 'Haba verde serrana')
//  v2 prints: Compared: 31 Set aside: 19 / Smallest gap: (1.15, 'Papaya') / Biggest gap: (2.63, 'Haba verde serrana') /
//    Check: Carne de porcino (corte unico): UNIDAD vs KILOGRAMO / Check: Platano bellaco: sold by the LITRO?
//  summary (kilogram-to-kilogram rows, all dates, rows with a zero price left out): median retail-to-wholesale ratio
//    Carnes y huevos 1.27 (453 rows), Frutas 1.56 (2,176), Hortalizas 1.65 (453), Legumbres 1.98 (302), Menestras 1.54
//    (755), Tuberculos 1.62 (302). 2,714 of 7,464 rows have different wholesale and retail unit labels; 10 rows carry a
//    zero price (mango edward in March and April 2025 among them), so v1 run over every date stops with ZeroDivisionError.
// Lesson family: units before arithmetic. A ratio only means something when both numbers share a unit; check the unit
// columns, set aside what disagrees, and then read the publisher's data dictionary before deciding who is right.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'latest = []',
  'with open("mimercado_dataset.csv", newline="", encoding="utf-8") as market:',
  '    for row in csv.DictReader(market):',
  '        if row["FECHA_REGISTRO"] == "20260313":',
  '            latest.append(row)',
  '',
  'gaps = []',
  'for row in latest:',
  '    times = float(row["PRECIO_MINORISTA"]) / float(row["PRECIO_MAYORISTA"])',
  '    gaps.append((round(times, 2), row["PRODUCTO"]))',
  '',
  'gaps.sort()',
  'print("Products on 13 March 2026:", len(gaps))',
  'print("Smallest gap:", gaps[0])',
  'print("Biggest gap:", gaps[-1])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'SENSIBLE = {"Frutas": {"KILOGRAMO"}, "Hortalizas": {"KILOGRAMO"},',
  '            "Menestras": {"KILOGRAMO"}, "Legumbres": {"KILOGRAMO"},',
  '            "Tuberculos": {"KILOGRAMO"}, "Carnes y huevos": {"KILOGRAMO"},',
  '            "Cereales": {"KILOGRAMO"}, "Agro-industriales": {"KILOGRAMO", "LITRO"}}',
  '',
  'kept, set_aside = [], []',
  'with open("mimercado_dataset.csv", newline="", encoding="utf-8") as market:',
  '    for row in csv.DictReader(market):',
  '        if row["FECHA_REGISTRO"] != "20260313":',
  '            continue',
  '        unit = row["UNIDAD_MEDIDA_MAY"]',
  '        if unit != row["UNIDAD_MEDIDA_MIN"]:',
  '            set_aside.append(row["PRODUCTO"] + ": " + unit + " vs " + row["UNIDAD_MEDIDA_MIN"])',
  '        elif unit not in SENSIBLE[row["CATEGORIA"]]:',
  '            set_aside.append(row["PRODUCTO"] + ": sold by the " + unit + "?")',
  '        else:',
  '            times = float(row["PRECIO_MINORISTA"]) / float(row["PRECIO_MAYORISTA"])',
  '            kept.append((round(times, 2), row["PRODUCTO"]))',
  '',
  'kept.sort()',
  'print("Compared:", len(kept), "Set aside:", len(set_aside))',
  'print("Smallest gap:", kept[0])',
  'print("Biggest gap:", kept[-1])',
  'for note in set_aside:',
  '    if note.endswith("?") or note.startswith("Carne de porcino"):',
  '        print("Check:", note)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Piura region' },
  slug: 'online-coding-and-ai-classes-piura-region-peru',
  code: 'core',
  accent: '#583D00',
  accentRationale: 'Piura region: a dark carob brown #583D00, the colour of the algarrobo wood of the northern dry forest, allocated to this row; contrast 9.51 on #FBF8F2, 8.95 on #F5F1E8 and 8.18 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Piura region, Peru',
  title: 'Online Coding and AI Classes in Piura Region, Peru, in English',
  description: 'Live online coding and AI classes in English across the Piura region: Piura, Sullana, Talara, Paita, what a home needs, school facts and a market price project.',
  ogDescription: 'Coding and AI for children, teenagers and adults across the Piura region, taught live online in English at hours the family chooses: census figures, what equipment a home really needs, the school picture, and a Python project on the Mercado Modelo price list.',
  twitterDescription: 'Piura region, live online coding in English: census figures, home equipment, and a Mercado Modelo price project.',
  pageName: 'Online Coding and AI Classes in the Piura Region',
  webPageDescription: 'A guide for families and adult learners across the Piura region to live online coding and AI classes taught in English, built from INEI census and household survey figures, MINEDU curriculum sources, two DRE Piura notes, EF EPI 2025 and an original Python project on the GORE Piura market price dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Piura region of Peru: block coding and Python for children from 6, Python, data and app building for teenagers, Python, SQL and data analysis for adults, in a group of fifteen to twenty or one to one, at hours chosen by the family.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Piura region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#region', label: 'The region' },
    { href: '#home', label: 'At home' },
    { href: '#market', label: 'Market project' },
    { href: '#ages', label: 'By age' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Piura region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Piura region',
  lede: 'From the city of Piura to Sullana, Talara, Paita and the sierra of Ayabaca and Huancabamba, every learner in the region joins the same live class over video. This page sets out the region in census figures, says plainly what a home needs before a first class, explains where Peruvian school stops, and teaches with a dataset from Piura\'s own wholesale market, where the price list hides a plantain sold by the litre.',
  secondaryCta: { href: '#market', label: 'See the market project' },
  wa: 'Hello Modern Age Coders, we live in the Piura region of Peru and want live coding classes in English. Can we try a free first class?',
  heroNote: 'Live online classes since 2020 &middot; more than 10,000 learners worldwide &middot; mentors who slow down and rephrase',
  spec: [
    ['Who', 'Children from 6, teenagers, adults of any age'],
    ['Where', 'Any province of Piura, from home'],
    ['Language', 'English, spoken slowly and clearly'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour your family picks'],
    ['Equipment', 'A laptop or desktop is best; we check it first']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders gives live online coding and AI classes to learners anywhere in the Piura region of Peru, taught in English by mentors on video. A six year old begins by snapping coding blocks together; by nine or ten most children are typing Python; secundaria students move on to Python, Java, data work and apps; adults pick Python, SQL, data analysis or AI tools. Each class holds fifteen to twenty learners, or just one, on days and hours the family chooses, and the first one costs nothing. Learners work out their own programs step by step instead of copying finished code.',

  picks: {
    eyebrow: 'Start here in Piura',
    h2: 'Three courses Piura learners begin with',
    lede: 'One for children who are ready to type, one for teenagers who like real numbers, and one for adults who work with prices, stock or sales every day.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PIU / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12, from nothing. Typed Python from the first class: turtle drawings, small games and simple AI ideas, at the pace of a child who is still learning English.' },
      { course: 'data-science-course-for-teens-python-data', code: 'PIU / 02', title: 'Data Science for Teens', note: 'Ages 14 to 18 with a little Python. Tables, charts and first models built on real files, like the Mercado Modelo price list on this page.' },
      { course: 'data-analysis-mastery-course-college', code: 'PIU / 03', title: 'Data Analysis for Adults', note: 'From 18, no experience needed. Excel, SQL, Python and dashboards for people who already handle numbers at work, in a shop, a farm business or an office.' }
    ]
  },

  sections: [
    {
      id: 'region',
      eyebrow: 'The region in figures',
      h2: 'How many people live in the Piura region, and in which provinces?',
      lede: 'The 2025 census counted 2,115,215 people in the department of Piura. That makes it the largest of INEI\'s department-level units after Lima Metropolitana. Its people live in eight provinces, and the capital is the city of Piura.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Piura department and its eight provinces, total population on census day 2025', head: ['Unit', 'Population, 2025'], rows: [
          ['Department of Piura', '2,115,215'],
          ['Province of Piura (the capital\'s province)', '935,084'],
          ['Province of Sullana', '350,259'],
          ['Province of Morropón (Chulucanas)', '180,343'],
          ['Province of Paita', '153,649'],
          ['Province of Talara', '150,023'],
          ['Province of Ayabaca', '128,081'],
          ['Province of Huancabamba', '123,992'],
          ['Province of Sechura', '93,784']
        ] },
        { kind: 'source', html: 'From INEI\'s 2025 national census results, table 1 of the demographic indicators file: total population, people counted plus those INEI estimates were missed, on 15 September 2025, within the boundaries in force on 15 July 2026. Every figure is printed exactly as INEI publishes it, and no two rows have been added.' },
        { kind: 'two', mt: true,
          leftH3: 'The towns people name',
          left: [
            'INEI has not yet published 2025 figures for cities, so town sizes still come from the 2017 census. That year INEI counted 473,025 people in the city of Piura, taken as one urban area. Among the larger towns, INEI\'s 2017 directory of populated centres lists Sullana at 136,446, Talara at 91,444, Paita at 81,163, Chulucanas at 40,867 and Sechura at 33,134.',
            'Those directory figures count one populated centre each, so a town that runs into a neighbouring centre is counted short. We print them as published and never stitch two together.'
          ],
          rightH3: 'Districts larger than many cities',
          right: [
            'Inside the capital\'s province, the 2025 census gives Veintiséis de Octubre 206,998 people, Castilla 193,614 and the district of Piura itself 155,566. Sullana district has 195,448.',
            'For a live online class none of these lines matter much. A teenager in Castilla, a child in Talara and an adult in the Huancabamba highlands open the same video link at the hour they chose.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do schools in the Piura region teach programming?',
      lede: 'Not as a subject. Piura\'s schools follow Peru\'s national curriculum, the CNEB, which expects digital skills inside every area but gives programming no place of its own on the timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peruvian school levels, the age MINEDU expects, and where computing sits', head: ['Level', 'Grades', 'Normative age on 31 March', 'Computing'], rows: [
          ['Primaria (six years)', '1° to 6°', '6 to 11', 'Inside every area, never a lesson of its own'],
          ['Secundaria (five years)', '1° to 5°', '12 to 16', 'No computing area in the 35-hour regular week']
        ] },
        { kind: 'source', html: 'Where the rows come from: the General Education Law 28044 fixes six years of primaria and five of secundaria; MINEDU\'s normative-age rule takes the age a child has on 31 March; the CNEB study plan gives the secundaria hours. All three documents were checked in November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'One competency, spread thin',
          left: [
            'Peru\'s curriculum has one competency about technology, number 28, on working in virtual environments created by ICT. It is transversal: every area is meant to touch it, and no area owns it. Its four capacities go from setting up a digital space to creating virtual objects, but none of them asks a teacher to explain a loop or a variable.',
            'Look at the regular secundaria timetable and the gap is plain: four weekly hours of Matemática, four of Comunicación, three of Inglés, two of Educación para el Trabajo, and nothing labelled programming or computing anywhere in the 35.'
          ],
          rightH3: 'What the DRE Piura did in January 2026',
          right: [
            'The regional education office, the DRE Piura, opened summer workshops in January 2026 "dirigidos a niñas y niños de 8 a 12 años". One of them was CompuKids, offered in a morning and an afternoon shift on Mondays and Wednesdays. It shows the demand: computing for children in Piura lives in the summer break, not in the school week.',
            'A day later the DRE Piura announced teacher programmes on digital competencies, TIC tools and "la aplicación de la inteligencia artificial en los procesos de enseñanza y aprendizaje". That work trains teachers; it does not add a programming class for students.'
          ] },
        { kind: 'p', mt: true, html: 'The ministry has a Python programme, but it is a small one far from Piura. Fábrica de Programadores, announced by MINEDU in July 2025, trains a first group of 1,000 public secundaria pupils in their last two years, all in Lima Norte, and graduates may take the PCEP certification exam. A teenager in Sullana or Paita who wants that kind of grounding has to look outside colegio, and that is the gap our evening and weekend classes in English are built to fill.' }
      ]
    },
    {
      id: 'home',
      tint: 'tint',
      eyebrow: 'Before the first class',
      h2: 'What does a home in Piura need for online coding classes?',
      lede: 'A stable connection and, ideally, a laptop or desktop computer. INEI\'s household survey shows that the second is the harder part in Piura, so we check it with every family before we suggest a course.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Homes and people online in Piura and in Peru, 2022 and 2025 (per cent)', head: ['Indicator', 'Piura 2022', 'Piura 2025', 'Peru 2025'], rows: [
          ['Households with at least one computer', '24.4', '22.3', '33.9'],
          ['Households with an internet service', '45.3', '41.2', '56.8'],
          ['People aged 6 and over who use the internet', '72.5', '77.6', '81.1']
        ] },
        { kind: 'source', html: 'Source: INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13, from the Encuesta Nacional de Hogares (ENAHO). INEI prints the figures with a decimal comma (22,3); we show a decimal point. The 2022 column is ours to choose, for comparison; the figures are INEI\'s.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table honestly',
          left: [
            'In 2025 about 22 homes in every hundred in the department of Piura had a computer, against about 34 in every hundred nationally. The share of Piura homes with an internet service fell from 45.3 per cent in 2022 to 41.2 per cent in 2025, while the share of people who use the internet somewhere, at home, school, work or on a phone, rose to 77.6 per cent.',
            'So most people in Piura are online, but many through a phone and a mobile plan rather than a home connection and a computer. A coding class can be followed on a phone; it cannot really be done on one, because the learner has to type, run and fix code.'
          ],
          rightH3: 'What we suggest, by age',
          right: [
            'Six to eight year olds can start block coding on a tablet or a shared family laptop, because they drag pieces rather than type. From about nine, a keyboard matters: a basic laptop, a desktop at a relative\'s house or a computer at a parent\'s workplace after hours all work.',
            'The free first class doubles as a check. The mentor sees the screen, the sound and the connection, and if a phone is the only device, says so kindly and suggests what to try before paying for anything.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Will my child be taught in Spanish or in English?',
      lede: 'In English, always. Our mentors teach from India over live video, adjust to how fast and with what accent each learner speaks, and never switch the class to Spanish. We put this before any booking because in Piura it matters.',
      body: [
        { kind: 'two',
          leftH3: 'Where Piura stands in English',
          left: [
            'The EF English Proficiency Index 2025 gives Peru 519 points, 52nd of 123 countries, in the moderate band. On the same page the Piura region scores 482 and the city of Piura 484, both in EF\'s low band, below the national figure.',
            'That tells us many Piura children will meet English in our classes as a language they are still learning. We plan for it rather than pretend otherwise.'
          ],
          rightH3: 'How a mentor works with that',
          right: [
            'Short sentences, the same words for the same ideas every week, and code on the screen that says what the sentence said. A mentor waits for an answer, accepts one that starts in Spanish, and gives back the English word without fuss.',
            'Python helps: print, if, while and return are English words, so a child who learns the code also learns the vocabulary. After a few months, many learners follow the class more easily than they speak about it, and that is fine.'
          ] },
        { kind: 'p', mt: true, html: 'If English is a real barrier for your child today, tell us in the free class. A one-to-one plan lets a mentor go slower and repeat more, and some families start with a parent sitting in for the first few weeks. For learners at a bilingual colegio, the classes simply run in the language they already use at school.' }
      ]
    },
    {
      id: 'market',
      eyebrow: 'A Piura data project',
      h2: 'How much more does the market stall charge than the wholesaler?',
      lede: 'The Gobierno Regional de Piura publishes the wholesale and retail prices recorded at the Mercado Modelo de Piura as open data. Our students use it for a lesson every programmer meets sooner or later: before you divide one number by another, make sure they are measured in the same unit.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'GORE Piura shares "Precios mayorista y minorista del Mercado Modelo de Piura" through datosabiertos.gob.pe with an Open Data Commons Attribution licence (ODC-By), which allows reuse with credit. It first appeared in February 2025 and was last updated on 9 September 2026. Our copy, mimercado_dataset.csv, fetched on 9 November 2026, holds 7,464 rows: 51 products across 151 market days between 8 January 2024 and 13 March 2026.',
            'Each row gives a product, its category, a wholesale price and a retail price, and two unit columns, one for each price. Those unit columns are where the lesson lives.'
          ],
          rightH3: 'The question',
          right: [
            'Children who go shopping with their family know the stall charges more than the wholesaler. So we ask: on the last day in the file, which product has the smallest gap, and which the biggest? We measure the gap as retail price divided by wholesale price, so 1.5 means the stall asks one and a half times as much.',
            'The first program reads the 50 products recorded on 13 March 2026, divides, sorts and prints both ends. We never print the prices themselves on this page; the ratios tell the story.'
          ] },
        { kind: 'code', label: 'Version 1: divide and sort', lang: 'Python', code: V1, note: 'It prints: <code>Products on 13 March 2026: 50</code>, <code>Smallest gap: (1.11, \'Carne de porcino (corte unico)\')</code> and <code>Biggest gap: (2.63, \'Haba verde serrana\')</code>.' },
        { kind: 'p', mt: true, html: 'Pork with the smallest gap sounds plausible until a student opens the row. Its wholesale price is labelled per UNIDAD and its retail price per KILOGRAMO. A unit and a kilogram are different things, so Version 1 divided one kind of quantity by another and called the answer a ratio. It is the same mistake as comparing the price of a sack of rice with the price of a kilo.' },
        { kind: 'p', html: 'Version 2 adds two checks. If the two unit columns disagree, the row is set aside with a note. If they agree but the unit makes no sense for the category, the row is also set aside, because a matching label can still be the wrong label.' },
        { kind: 'code', label: 'Version 2: compare like with like, and question the labels', lang: 'Python', code: V2, note: 'It prints: <code>Compared: 31 Set aside: 19</code>, <code>Smallest gap: (1.15, \'Papaya\')</code>, <code>Biggest gap: (2.63, \'Haba verde serrana\')</code>, then <code>Check: Carne de porcino (corte unico): UNIDAD vs KILOGRAMO</code> and <code>Check: Platano bellaco: sold by the LITRO?</code>.' },
        { kind: 'p', mt: true, html: 'Now the smallest gap belongs to papaya, at 1.15, and the green broad bean still has the biggest, at 2.63. The second check caught something the first could not: the bellaco plantain has LITRO in both unit columns. The labels agree with each other, and both are surely wrong, because nobody sells plantains by the litre.' },
        { kind: 'p', html: 'Then comes the twist that makes this a real lesson rather than a trick. The dataset\'s own description says: "La unidad de medida de los precios es por Kilogramo o por Litro, según la presentación del producto." In other words, the publisher says every price is per kilogram or per litre, and the SACO or MALLA in a unit column names how the product arrives at the market, not what the price is for. If that is true, most of Version 2\'s 19 set-aside rows were fine all along. A good programmer does not choose between the code and the description; they write down both, and ask the publisher. Version 2 still earned its place, because it is what made us go and read the description.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Retail price as a multiple of wholesale, by category, kilogram rows only, January 2024 to March 2026 (our calculation)', head: ['Category', 'Rows compared', 'Median multiple'], rows: [
          ['Carnes y huevos', '453', '1.27'],
          ['Menestras (dry pulses)', '755', '1.54'],
          ['Frutas', '2,176', '1.56'],
          ['Tubérculos', '302', '1.62'],
          ['Hortalizas', '453', '1.65'],
          ['Legumbres (fresh pulses)', '302', '1.98']
        ] },
        { kind: 'source', html: 'Data credit: GORE Piura, Mercado Modelo wholesale and retail prices, reused under ODC-By. The medians are ours, using only rows where both unit columns say KILOGRAMO, over all 151 market days. Across the whole file, 2,714 of the 7,464 rows carry two different unit labels, and 10 rows hold a zero price, so a program that divides on every date must handle that too.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, at the kitchen table.</strong> A bag of rice and a single cup of rice both have a price. Which is bigger? Why can you not say which is cheaper until you know how much rice is in each?',
          '<strong>Block coding, around 8 to 10.</strong> Make two lists, wholesale and retail, for five fruits from the table, and a loop that shows which fruit has the biggest gap.',
          '<strong>First Python, around 10 to 12.</strong> Run Version 1 yourself, then find the pork row and explain in two sentences why its answer cannot be trusted.',
          '<strong>Ages 13 and over.</strong> Run Version 1 on every date instead of one. It stops with a ZeroDivisionError. Find the product and month that cause it, and decide what the program should do with a zero price.',
          '<strong>Going further.</strong> Write Version 3, which follows the publisher\'s description: treat every price as per kilogram or litre, keep only the plantain on the check list, and compare its smallest gap with Version 2\'s.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Which course fits a child, a teenager or an adult in Piura?',
      lede: 'Begin with the learner\'s age, then with what they would like to build. The ages are the ones our courses use; the school column is the grade most children of that age are in, by MINEDU\'s 31 March cutoff.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where Piura learners usually start (our course ages)', head: ['Age', 'Usual school year', 'Starting course', 'First things they build'], rows: [
          ['Six and seven', 'First or second grade of primaria', 'Block coding with Scratch', 'Animated scenes, simple games'],
          ['Eight to eleven', 'Third to sixth grade of primaria', 'Minecraft or Roblox game coding', 'Game worlds with rules and scores'],
          ['Nine to twelve, ready to type', 'Fourth of primaria up to first of secundaria', 'Python and AI for Kids', 'Typed programs and small AI ideas'],
          ['Thirteen to seventeen', 'Any year of secundaria', 'Python first, then data or Java', 'Data projects, web pages, larger programs'],
          ['Fourteen upwards, some Python', 'Second year of secundaria onwards', 'Data Science for Teens', 'Charts and first models on real files'],
          ['Eighteen and over', 'University, work, home', 'Python, SQL and data analysis', 'Reports, automations, dashboards']
        ] },
        { kind: 'source', html: 'Course ages are ours. School years follow MINEDU\'s normative ages measured on 31 March, so a child with a birthday after that date may sit one year below the row shown.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Classes are short and practical. A six year old makes a character walk and jump; a ten year old types a loop that draws a star. Children only ever share a class with others of a similar age.' },
          { h3: 'Teenagers', p: 'Secundaria students learn Python properly, then pick data, Java or app building. Those who like contests can aim at the national olympiads with problems we write ourselves.' },
          { h3: 'Adults', p: 'Many adults in Piura already work with prices, stock or sales sheets. Python, SQL and data analysis turn that daily work into something faster and more reliable, at hours around the job.' }
        ] },
        { kind: 'p', mt: true, html: 'Families with younger children can read more on our page about <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>, and on <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a>, which explains when a child is ready to move from blocks to typed code. If your family plans to start during the January to March break, <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding classes online</a> sets out a holiday plan of our own.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Can a secundaria student in Piura take part in maths and computing olympiads?',
      lede: 'Yes, and the door is the colegio. The ONEM, Peru\'s school maths olympiad, begins inside each school, and UTEC runs the OPI computing olympiad at no cost to any secundaria pupil. Modern Age Coders has no link with MINEDU, UTEC or either contest.',
      body: [
        { kind: 'two',
          leftH3: 'The ONEM in 2026',
          left: [
            'El Peruano reported that the 2026 ONEM brought in more than 1.7 million pupils nationwide. Every colegio sat its first round on the same day, Wednesday 8 July 2026, in three levels set by grade; winners then climbed through the UGEL round and the regional round before a national final.',
            'We do not reproduce the organiser\'s problems. We teach the habits the ONEM rewards with problems we write: reading slowly, testing small cases, and writing down why an answer must be right.'
          ],
          rightH3: 'Why code helps with maths contests',
          right: [
            'A short Python loop can check a guess on a thousand cases in a second. That never replaces a proof, but it tells a student whether a pattern is worth proving, and it catches a wrong answer before the contest does.',
            'Our practice problem for this page: a stall marks every price up by half, then a regular customer gets one third off. Is the customer paying more or less than the wholesale price? (Ours. Answer: exactly the wholesale price, because 1.5 multiplied by two thirds is 1.)'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would a class be in Piura?',
      lede: 'Whatever time the family picks. Piura shares Lima\'s clock all year round, and the mentor in India plans around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time side by side, as examples only (not a timetable)', head: ['Peru time, Piura', 'India time', 'Same day?'], rows: [
          ['06:30', '17:00', 'Yes'],
          ['08:00', '18:30', 'Yes'],
          ['10:00', '20:30', 'Yes'],
          ['12:00', '22:30', 'Yes'],
          ['16:00', '02:30', 'Next day in India'],
          ['19:00', '05:30', 'Next day in India']
        ] },
        { kind: 'source', html: 'Clock facts: the tz database zone America/Lima puts Peru five hours behind UTC with no daylight saving since 1994, and INACAL keeps Peru\'s official hour; India sits five and a half hours ahead of UTC. The gap from Piura to India is therefore ten and a half hours, on every date.' },
        { kind: 'p', mt: true, html: 'Because no clock changes on either side, a slot fixed in January still falls at the same moment in August. The booking form asks for a time on your own clock and shows the mentor the matching India hour. When MINEDU opened the 2026 school year on 16 March, it counted 53,631 schools and 6,225,000 pupils nationwide; many Piura families begin during the long summer holiday, while afternoons are empty, and simply keep that hour once term starts.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Piura learner can do as they progress',
    lede: 'Our own stages, used for every learner from six to sixty. They help a mentor place a new student and give families something concrete to look for.',
    table: { caption: 'From first blocks to trustworthy calculations (ours)', head: ['Stage', 'Usually reached', 'The learner can'], rows: [
      ['1. Sequence', 'Age 6 or 7', 'Give a character steps in the right order'],
      ['2. Repeat', 'Age 7 to 9', 'Use a loop instead of copying the same block'],
      ['3. Store', 'Age 8 to 10', 'Keep values in variables and lists'],
      ['4. Type', 'Around nine to twelve', 'Type Python that decides and repeats on its own'],
      ['5. Measure', 'Age 11 to adult', 'Check units and labels before any arithmetic'],
      ['6. Question', 'Age 13 to adult', 'Compare a program\'s answer with the data\'s own description']
    ] },
    left: { h3: 'For parents', ps: [
      'The Mercado Modelo project lives in the last two rows. They separate a student who can produce an answer from one who can defend it.',
      'We report progress in things built and explained, not in hours logged.'
    ] },
    right: { h3: 'For learners', ps: [
      'A number without its unit is half a fact. Before you divide, ask: per what?',
      'When your program and the dataset disagree, write both down and find out which one is wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in the Piura region',
    lede: 'Youngest first. All nine are taught live in English by a mentor who stays with the learner, either in a class of fifteen to twenty or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 15', courses: [
        { code: 'PIU / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'The full Scratch path for younger children, from first sprite to finished game.' },
        { code: 'PIU / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Loops and conditions learned by building inside Minecraft.' },
        { code: 'PIU / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, patterns and geometry from school, checked with short programs.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PIU / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Python from a blank file to real programs, for 1° to 5° de secundaria.' },
        { code: 'PIU / TEEN / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Databases and queries, the language behind every price list and register.' },
        { code: 'PIU / TEEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Design and build mobile apps step by step.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 and over', courses: [
        { code: 'PIU / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from zero to advanced, at hours around work or study.' },
        { code: 'PIU / ADULT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Design, query and maintain a real database.' },
        { code: 'PIU / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'Front end, back end and deployment for adults who want to build for the web.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes reach the whole Piura region',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early morning', l: 'A Piura morning is evening in India, a calm hour for a first class before the day warms up.' },
      { time: 'After school', l: 'Afternoon and evening hours are possible too; the mentor adapts.' },
      { time: 'One to one', l: 'A private hour agreed with your mentor, on days you choose.' }
    ],
    cells: [
      { h3: 'A regular mentor', p: 'One familiar person who gets to know the learner\'s habits.' },
      { h3: 'Patient English', p: 'Short sentences, repeated ideas, time to answer.' },
      { h3: 'The learner types', p: 'The mentor guides; the student writes and runs the code.' },
      { h3: 'Classes by age', p: 'Children, teenagers and adults are never mixed.' },
      { h3: 'Device checked first', p: 'The free class confirms the computer and connection work.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a group, or one learner alone.' }
    ]
  },

  projectsH2: 'Projects our older students have finished',
  projectsLede: 'Students who stay with it end up building things other people use. A few are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'What parents and students wrote on Google, quoted word for word.',

  fees: {
    h2: 'Fees for learners in the Piura region',
    lede: 'Fees are monthly and set in US dollars. Your card is charged in dollars and your bank converts the amount into soles at its own rate on the day, so the figure on your statement can differ slightly from the one shown here.',
    free: ['A free first class', 'A device and connection check', 'No card asked for'],
    group: ['Fifteen to twenty learners close in age', 'One regular mentor', 'Two live classes every week', 'Monthly, cancel whenever you wish'],
    one: ['One learner with one mentor', 'Projects shaped around the learner', 'Days and hours of your choosing']
  },

  faq: {
    eyebrow: 'Piura families ask',
    h2: 'Coding and AI classes in the Piura region: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. English is the only language of our classes, which are always live and online. Mentors talk slowly in short sentences, adapt to how each learner speaks, and when a child answers in Spanish they simply offer the English words back.' },
      { q: 'Is there a coding class for children in Piura?', a: 'Yes, held live over video, so the province does not matter: Piura city, Sullana, Talara, Paita, Chulucanas or a village in Ayabaca all join the same way. The youngest begin with blocks at six, and most move to typed Python around nine.' },
      { q: 'Can my child take the classes on a phone?', a: 'A phone is enough to watch, but not to learn coding well, because the learner has to type and fix code. Young children can begin on a tablet. From about nine we recommend a laptop or desktop, and the free first class checks whatever device you have.' },
      { q: 'What time are the classes in Piura?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With India ten and a half hours ahead of Piura, a class at 08:00 in Piura is at 18:30 for the mentor.' },
      { q: 'Do schools in Piura teach coding?', a: 'No timetabled subject covers it. Digital skills are spread across all areas of the national curriculum, and secundaria\'s regular week gives programming no hours. The DRE Piura did run a CompuKids workshop for children of 8 to 12 in the January 2026 holidays.' },
      { q: 'Can adults in Piura join?', a: 'Yes, in adult-only groups or privately. Most begin with Python and continue with SQL and data analysis; anyone who already keeps prices, stock or sales in spreadsheets tends to get the most from the data courses.' },
      { q: 'Do you teach AI to children?', a: 'We teach how AI works, with small programs children build themselves, and we follow each tool\'s age rules. Children under 13 do not use adult chatbot accounts in our classes; teenagers use AI tools only where the provider allows their age.' },
      { q: 'Can you help with the ONEM?', a: 'We train the careful reasoning olympiad problems need, using practice sets we write, never the official papers. Entry is always through the student\'s colegio; in 2026 the first round took place on 8 July. Modern Age Coders is independent of MINEDU and the ONEM.' },
      { q: 'How much do classes cost?', a: 'Each plan has a monthly fee, displayed here and billed in US dollars; the card issuer turns it into soles. Someone opening the page from India is shown rupees instead. No card is needed for the free first class.' },
      { q: 'Do students get a certificate?', a: 'Where a course has one, the learner receives a completion certificate from Modern Age Coders. It carries no Peruvian school credit, and neither MINEDU, the DRE Piura nor any colegio issues or backs it; it simply records what was built.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for families and adult learners in the Piura region.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national page: school system, ages and every Peru guide.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Small AI builds children make and understand.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Building AI projects in the secundaria years.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to program at any age.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits set by each AI provider.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in one of our lessons.' }
    ]
  },

  start: {
    h2: 'Try one class free, from anywhere in Piura',
    lede: 'Expect a small puzzle, a first program and a look at your computer and connection. Afterwards the mentor recommends a course and a group, based on how the learner tackled the puzzle and how easily they followed the English.',
    readFirst: 'Want more detail first? Our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson from start to finish, and the <a class="ag-inline-link" href="/courses">course list</a> has each syllabus.',
    note: 'Mentors teach from India, live over video, and the teaching language is English. Messages on WhatsApp get the quickest reply; please write in English.',
    formNote: 'Free, no card, nothing to continue unless you want to.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Per kilogram, per litre, or per sack?'
  },

  personalityCss: `
.ag-root.ag-core .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-core .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-core .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-core .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-core .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO, cuadros 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026 (UGEL 06 oficio, El Peruano); DRE Piura notes of 13 and 14 January 2026; EF EPI 2025; tz database. Data: GORE Piura, Precios mayorista y minorista del Mercado Modelo de Piura, ODC-By.',
    localProject: 'How much more does the market stall charge than the wholesaler? An original Python project on the GORE Piura Mercado Modelo price dataset (ODC-By): Version 1 divides retail by wholesale for 50 products on 13 March 2026 and ranks pork first on a unit-against-kilogram comparison; Version 2 compares only matching units, sets aside 19 rows and flags a plantain priced by the litre, leaving papaya (1.15) and green broad beans (2.63) at the ends; the publisher\'s own description then says every price is per kilogram or litre. Lesson family: units before arithmetic.',
    requiredMentions: ['mimercado_dataset.csv', 'Compared: 31 Set aside: 19', 'Check: Platano bellaco: sold by the LITRO?', 'Smallest gap: (1.15, \'Papaya\')', '2,115,215', 'CompuKids', 'the Piura region scores 482', 'Per kilogram, per litre, or per sack?', 'Households with at least one computer'],
    sources: [
      { claim: 'Department and province populations of Piura, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Piura city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Sullana, Talara, Paita, Chulucanas and Sechura populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto20.xlsx' },
      { claim: 'Computer, internet and internet-use shares for Piura and Peru, ENAHO 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'DRE Piura summer workshops for 8 to 12 year olds, including CompuKids, January 2026.', url: 'https://www.gob.pe/institucion/regionpiura-dre/noticias/1352061-dre-piura-anuncia-ultimas-vacantes-para-talleres-de-verano-2026-dirigidos-a-ninas-y-ninos' },
      { claim: 'DRE Piura teacher programmes on digital competencies, TIC and AI, January 2026.', url: 'https://www.gob.pe/institucion/regionpiura-dre/noticias/1352054-la-tecnologia-al-servicio-de-la-educacion' },
      { claim: 'Mercado Modelo de Piura price dataset, ODC-By licence and unit description.', url: 'https://www.datosabiertos.gob.pe/dataset/precios-mayorista-y-minorista-del-mercado-modelo-de-piuragobierno-regional-piura-grp' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Peru, the Piura region and Piura city.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 with no summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any price in soles from the market file: the page prints ratios only.',
      'Which unit is right for the SACO and MALLA rows: the code and the publisher disagree, and the page says so instead of choosing.',
      'A summed Piura city or Sullana figure built from districts or populated centres: never summed.',
      'Any connection with the DRE Piura, GORE Piura, MINEDU, the ONEM or UTEC: none.',
      'Spanish-language teaching: every class is in English.',
      'Naming Piura schools as sources of students: refused.'
    ]
  }
};
