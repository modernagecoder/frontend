// SHIP: market (city, maths) | a maths tutor for Lima, live online in English: CNEB, bilingual schools, admission maths | the triangle inequality on Metro Line 1: hop distances from coordinates always add up to more than end to end
'use strict';
// Maths tutor in Lima, Peru (ag- city page, Peru cluster row PE058; alloc: cities, maa, #602932). priceSubject 'maths'.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; timing flexible (2026-11-08); USD fees
// only through the template's data-price anchors.
// Angle: Lima families searching for a maths tutor; many at bilingual, Cambridge and IB schools where maths is taught
// in English, others who want maths plus English practice. Maths in Lima schools only from CNEB/ENLA (MINEDU blocked
// regional ENLA tables, BLOCKED.md); a geometry lesson on the Metro de Lima Line 1 station file.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, quotes string-matched in raw files):
//  - INEI Censos Nacionales 2025, Cuadro 1 (places.tsv): Lima Metropolitana 10,141,775 (43 districts); San Juan de
//    Lurigancho 1,176,422; Villa El Salvador 451,546 (15 September 2025). INEI Lib1539 Cuadro N° 1.9: Lima city
//    9,562,280 in 2017 (Lima province plus Callao). Never summed.
//  - CNEB (FACTS 55, 57, 39, 41, 44): four maths competencies "Resuelve problemas de regularidad, equivalencia y cambio
//    ... de movimiento, forma y localización ... de gestión de datos e incertidumbre" plus cantidad; primaria "Matemática
//    5 5 4 4 4 4"; secundaria JER "Matemática 4 4 4 4 4", JEC "Matemática 6 6 6 6 6"; "horas pedagógicas (45 minutos)".
//  - ENLA 2025 (FACTS 58, 59, 60, 61): 11 to 13 November 2025, "más de 200 mil estudiantes de 8700 instituciones";
//    grades 4° primaria, 2° and 5° secundaria; national results similar to 2023 and 2024; 2° secundaria maths gains.
//  - FACTS 91: "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del Bachillerato Internacional"
//    (47% COAR).
//  - PUCP guide (FACTS 80): "con especial énfasis en las áreas de comprensión lectora y matemáticas."; UNI (FACTS 67, 68):
//    three papers, the second "MATEMÁTICA"; U de Lima (FACTS 88): wrong answers subtract.
//  - EF EPI 2025 (ef_peru.raw): Lima city 555, high band; Peru 519.
//  - INEI TIC II trimestre 2026 (MARKET.md 1.4): Lima Metropolitana internet use 92.4% (people 6+).
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: MTC, Autoridad Autónoma del Sistema Eléctrico de Transporte Masivo de Lima y Callao (AATE), "MTC - AATE
//    ESTACIONES DE METRO DE LIMA - LINEA 1", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/mtc-aate-estaciones-de-metro-de-lima-linea-1, licence odc-by on the
//    dataset page, modified 9 October 2026. File estaciones2018.xlsx (17,663 bytes): 26 stations with district, address
//    and "latitud  y Longitud" written as text "(-12.207291133469997,-76.93360671401024)". We exported station, district
//    and the coordinate text to estaciones-linea1.csv (ours), in file order Villa El Salvador to Bayóvar.
// Our own calculations (scratchpad pe/c2/ml/v1.py, v2.py; python3 -I, Python 3.14.8):
//  v1 prints: Stations: 26 / Straight line in degrees: 0.2531 / Times 111.19 km: 28.15 km
//  v2 prints: End to end: 28.12 km / Sum of 25 hops: 32.39 km / Ratio: 1.152 / Longest hop: Cabitos to Angamos 1.85 km
//  Shortest hop El Ángel to Presbítero Maestro 0.59 km; cos(12.08 degrees) = 0.9779.
// Lesson family: the triangle inequality (a path through points is never shorter than the straight line), with
// Pythagoras on a local grid made from latitude and longitude.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import math',
  '',
  'stations = []',
  'with open("estaciones-linea1.csv", encoding="utf-8") as src:',
  '    for row in csv.DictReader(src):',
  '        lat, lon = row["latlon"].strip("()").split(",")',
  '        stations.append((row["estacion"], float(lat), float(lon)))',
  '',
  'a, b = stations[0], stations[-1]',
  'd_lat = b[1] - a[1]',
  'd_lon = b[2] - a[2]',
  'print("Stations:", len(stations))',
  'print("Straight line in degrees:", round(math.hypot(d_lat, d_lon), 4))',
  'print("Times 111.19 km:", round(111.19 * math.hypot(d_lat, d_lon), 2), "km")'
].join('\n');

const V2 = [
  'import csv',
  'import math',
  '',
  'KM_PER_DEGREE = 111.19                 # our value: 6,371 km x pi / 180',
  '',
  'stations = []',
  'with open("estaciones-linea1.csv", encoding="utf-8") as src:',
  '    for row in csv.DictReader(src):',
  '        lat, lon = row["latlon"].strip("()").split(",")',
  '        stations.append((row["estacion"], float(lat), float(lon)))',
  '',
  'def km(p, q):',
  '    mid = math.radians((p[1] + q[1]) / 2)',
  '    north = (q[1] - p[1]) * KM_PER_DEGREE',
  '    east = (q[2] - p[2]) * KM_PER_DEGREE * math.cos(mid)',
  '    return math.hypot(north, east)',
  '',
  'ends = km(stations[0], stations[-1])',
  'hops = [km(p, q) for p, q in zip(stations, stations[1:])]',
  'print("End to end:", round(ends, 2), "km")',
  'print("Sum of", len(hops), "hops:", round(sum(hops), 2), "km")',
  'print("Ratio:", round(sum(hops) / ends, 3))',
  'longest = max(range(len(hops)), key=lambda i: hops[i])',
  'print("Longest hop:", stations[longest][0], "to", stations[longest + 1][0], round(hops[longest], 2), "km")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Lima: maths tutor in English' },
  slug: 'maths-tutor-lima-peru',
  code: 'maa',
  accent: '#602932',
  accentRationale: 'Maths tutor in Lima: a dark garnet #602932 allocated to this row, close to the colonial balconies of the Centro de Lima and comfortably above 4.5:1 on every paper',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Maths tutor in Lima, Peru',
  title: 'Maths Tutor in Lima, Peru: Live Online Classes in English',
  description: 'A maths tutor for Lima students from primaria to university, live online in English: CNEB maths by grade, IB and Cambridge help, and a Metro Line 1 geometry lesson.',
  ogDescription: 'Live online maths tutoring in English for Lima children, teenagers and adults: what the CNEB expects by grade, help for bilingual, Cambridge and IB students, the maths in university admission, and an original geometry lesson on the Metro de Lima Line 1 stations.',
  twitterDescription: 'Maths tutoring in Lima, live online in English: school maths by grade, IB and Cambridge, and a Metro Line 1 lesson.',
  pageName: 'Maths Tutor in Lima, Peru',
  webPageDescription: 'A guide for Lima families and students to live online maths tutoring taught in English, built from MINEDU CNEB and ENLA sources, university admission pages, INEI census figures, EF EPI 2025 and an original geometry lesson on the AATE Metro de Lima Line 1 station file (ODC-By).',
  courseDescription: 'Live online maths classes in English for learners in Lima, Peru: primaria number sense, secundaria algebra, geometry and statistics, IGCSE and IB maths, and university or adult maths, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Maths tutor, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#school-maths', label: 'School maths' },
    { href: '#english', label: 'Why English' },
    { href: '#metro', label: 'Metro lesson' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Lima &middot; Maths tutoring &middot; Live online, in English',
  h1: 'Maths tutor in Lima, Peru',
  lede: 'Lima parents look for a maths tutor for many reasons: a child slipping behind in 2° de secundaria, a teenager at an IB school who needs the subject explained in the language of the exam, a student facing the maths paper of a university admission test. This page explains what Lima schools teach in maths and when, how live online tutoring in English works, and one of our own lessons, built on the stations of Metro Line 1.',
  secondaryCta: { href: '#metro', label: 'See the Metro lesson' },
  wa: 'Hello Modern Age Coders, we are in Lima, Peru and are looking for a live online maths tutor in English. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students worldwide &middot; tutors who explain step by step, in clear English',
  spec: [
    ['Levels', 'Primaria, secundaria, IGCSE, IB and adult'],
    ['Focus', 'Understanding first, then speed and exam technique'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Lima time', 'Any day and hour your family chooses'],
    ['Tutors', 'Maths mentors in India, on live video'],
    ['First class', 'Free, with a short diagnostic']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders gives Lima students live online maths tutoring in English, from primaria arithmetic through secundaria algebra, geometry and statistics to IGCSE, IB and university maths. A tutor teaches each class live on video, in a group of fifteen to twenty or one to one, on the days and at the hours your family picks. Lessons follow the topics your child meets at school, and every class asks the student to explain the method, so they learn to think through a problem rather than copy a worked answer.',

  picks: {
    eyebrow: 'Start here in Lima',
    h2: 'Three maths courses Lima students most often begin with',
    lede: 'One to rebuild algebra, one for the full secundaria syllabus, and one for students at Cambridge-curriculum schools. Younger children and adults have options below.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'LIM / M / 01', title: 'Algebra Foundations', note: 'For students who lost confidence somewhere between fractions and equations. Pre-algebra and Algebra 1 rebuilt slowly, with every step written and explained aloud in English.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'LIM / M / 02', title: 'High School Mathematics', note: 'Algebra to calculus across secundaria, matched to what your child is meeting in class, from 1° to 5° de secundaria.' },
      { course: 'igcse-mathematics-mastery', code: 'LIM / M / 03', title: 'IGCSE Maths', note: 'Core and Extended, for Lima students whose school follows a Cambridge programme. Past-paper style practice with every method explained.' }
    ]
  },

  sections: [
    {
      id: 'school-maths',
      eyebrow: 'School maths in Lima',
      h2: 'What maths do Lima schools teach, and how much of it?',
      lede: 'Every state and private school in Lima follows the national curriculum, the CNEB, which sets four maths competencies and a minimum number of hours each week.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths in the CNEB: the four competencies and the weekly hours', head: ['Item', 'What the CNEB sets'], rows: [
          ['Competencies', 'Quantity; regularity, equivalence and change; form, movement and location; data and uncertainty'],
          ['Primaria hours', '5 a week in 1° and 2°, 4 a week in 3° to 6°'],
          ['Secundaria, regular day', '4 hours a week in every grade'],
          ['Secundaria, full day (JEC)', '6 hours a week in every grade'],
          ['Length of a school hour', '45 minutes (hora pedagógica)']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Currículo Nacional de la Educación Básica, competencies of the area Matemática and the plan de estudios tables (read November 2026). The rows paraphrase the competency names: "Resuelve problemas de cantidad", "de regularidad, equivalencia y cambio", "de movimiento, forma y localización" and "de gestión de datos e incertidumbre".' },
        { kind: 'two', mt: true,
          leftH3: 'How Lima students are assessed nationally',
          left: [
            'MINEDU\'s national assessment, the ENLA, was applied from 11 to 13 November 2025 to more than 200,000 students in 8,700 public and private schools, testing maths in 4° de primaria, 2° de secundaria and 5° de secundaria.',
            'The national results, published in May 2026, were similar to 2023 and 2024 overall, with one bright spot: maths in 2° de secundaria improved on 2023, the first positive change in that grade since schools closed. MINEDU\'s regional tables were not reachable when we checked, so we print no Lima-only figure.'
          ],
          rightH3: 'Where tutoring helps most',
          right: [
            'Four or six hours a week is a lot of maths, but it is shared by a whole class. Tutoring adds what a full classroom rarely can: one learner explaining their own method, with someone who listens for exactly where it goes wrong.',
            'The common sticking points we see in Lima students mirror the competencies: fractions and proportion in late primaria, algebra in 1° and 2° de secundaria, functions and statistics in the final years.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Maths in English',
      h2: 'Why choose a maths tutor who teaches in English in Lima?',
      lede: 'For two kinds of family. Some have children whose school already teaches maths in English. Others want maths and English practice in the same hour. Every class is live and in English only; none are in Spanish.',
      body: [
        { kind: 'two',
          leftH3: 'Bilingual, Cambridge and IB schools',
          left: [
            'Many Lima private schools teach maths in English, or follow Cambridge or IB programmes in which exams are written in English. MINEDU reports that 2,502 students in Peru obtained the IB Diploma in 2025, 47% of them at the public COAR schools and the rest at other schools.',
            'For these students a tutor who explains in Spanish leaves a gap: the method is understood, but the words on the exam paper are not. We teach in the language of the exam, with the notation the school uses.'
          ],
          rightH3: 'Spanish-medium schools',
          right: [
            'For a student at a Spanish-medium colegio, maths in English is a second gain. Maths has a small, exact vocabulary, so it is one of the easiest subjects to follow in a second language, and each class adds listening and explaining in English.',
            'EF\'s English Proficiency Index 2025 scores Lima city 555, in its high band, well above Peru\'s 519. Many Lima students are ready for it; the free first class checks.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A few phrases a Lima student meets in English maths (our glossary)', head: ['English', 'Spanish', 'Watch out for'], rows: [
          ['the quotient of 12 and 4', 'el cociente de 12 y 4', 'Order matters: 12 divided by 4'],
          ['3 less than x', '3 menos que x', 'Written x minus 3, not 3 minus x'],
          ['a decimal point', 'una coma decimal', 'English writes 3.5 where Peru often writes 3,5'],
          ['the hypotenuse', 'la hipotenusa', 'Only in a right-angled triangle'],
          ['the median', 'la mediana', 'The middle value, not the average']
        ] }
      ]
    },
    {
      id: 'admission',
      eyebrow: 'Admission maths',
      h2: 'How much maths is in Lima university admission exams?',
      lede: 'A great deal. Each university sets and marks its own exam, in Spanish, and decides admission itself. We explain the maths from the universities\' own pages; we do not prepare students for any admission exam and we are not connected with any university.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths in three Lima admission routes, from the universities\' own pages', head: ['University', 'What its page says', 'What it means for maths'], rows: [
          ['PUCP', 'Exams with "especial énfasis en las áreas de comprensión lectora y matemáticas"', 'Maths is one of two areas weighted most'],
          ['UNI', 'Three in-person papers; the second is MATEMÁTICA', 'A whole day is maths'],
          ['Universidad de Lima', 'A score for each correct answer, subtracted for each wrong one', 'Careless guessing costs points']
        ] },
        { kind: 'source', html: 'Sources: PUCP, Guía del postulante; UNI, Admisión 2026-2 page; Universidad de Lima, Guía del postulante 2027-1(A). All read in November 2026. Each university decides its own admissions; we teach maths, not the exams.' },
        { kind: 'p', mt: true, html: 'What a tutor can honestly offer is the maths underneath: fluent algebra, confident geometry, and the habit of checking an answer before moving on. Students who also want practice in maths reasoning can see our <a class="ag-inline-link" href="/razonamiento-matematico-clases-online-peru">razonamiento matemático classes</a>, and families comparing tutors will find our <a class="ag-inline-link" href="/precio-profesor-particular-matematicas-peru">guide to private maths tutor fees in Peru</a> useful.' }
      ]
    },
    {
      id: 'metro',
      eyebrow: 'A Lima maths lesson',
      h2: 'Is Metro Line 1 longer than a straight line from Villa El Salvador to Bayóvar?',
      lede: 'Obviously, a student says. Then we ask: by how much, and can you prove it from data? This lesson, ours, uses the official list of Line 1 stations and two ideas from secundaria: Pythagoras and the triangle inequality.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The AATE, the Ministry of Transport authority for the Lima and Callao metro, publishes "ESTACIONES DE METRO DE LIMA - LINEA 1" on Peru\'s Plataforma Nacional de Datos Abiertos under the Open Data Commons Attribution Licence (ODC-By). The file, estaciones2018.xlsx, lists 26 stations from Villa El Salvador in the south to Bayóvar in San Juan de Lurigancho, each with a district, an address and its latitude and longitude written as text.',
            'We copied the station, district and coordinate columns into a small file of our own, estaciones-linea1.csv, keeping the stations in the order the file gives them.'
          ],
          rightH3: 'The maths',
          right: [
            'Latitude and longitude are angles, not distances. Near Lima, one degree of latitude is about 111.19 km (our figure: the Earth\'s mean radius of 6,371 km times pi over 180). A degree of longitude is shorter, by the cosine of the latitude, which near 12 degrees south is 0.9779.',
            'Over a few kilometres the ground is nearly flat, so we can turn each pair of stations into a right-angled triangle, north-south and east-west, and use Pythagoras for the straight distance between them.'
          ] },
        { kind: 'code', label: 'Version 1: one straight line, end to end', lang: 'Python', code: V1, note: 'It prints: <code>Stations: 26</code>, <code>Straight line in degrees: 0.2531</code> and <code>Times 111.19 km: 28.15 km</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 treats a degree east the same as a degree north, which is slightly wrong. Version 2 fixes that with the cosine, then does the more interesting thing: it adds up the 25 straight hops from each station to the next.' },
        { kind: 'code', label: 'Version 2: scale longitude, then compare the hops with the straight line', lang: 'Python', code: V2, note: 'It prints: <code>End to end: 28.12 km</code>, <code>Sum of 25 hops: 32.39 km</code>, <code>Ratio: 1.152</code> and <code>Longest hop: Cabitos to Angamos 1.85 km</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Straight-line distances between some neighbouring stations (our calculation)', head: ['From and to', 'Straight distance'], rows: [
          ['Villa El Salvador to Parque Industrial', '1.36 km'],
          ['Cabitos to Angamos (the longest hop)', '1.85 km'],
          ['La Cultura to Arriola', '1.34 km'],
          ['El Ángel to Presbítero Maestro (the shortest)', '0.59 km'],
          ['Santa Rosa to Bayóvar', '1.16 km']
        ] },
        { kind: 'source', html: 'Data: MTC, AATE, Estaciones de Metro de Lima, Línea 1 (estaciones2018.xlsx), Plataforma Nacional de Datos Abiertos, ODC-By. Distances are ours, straight lines between the published coordinates; they are not the length of the track, which curves between stations, and we print no official route length.' },
        { kind: 'p', mt: true, html: 'Three results, three lessons. First, the cosine changed the end-to-end distance by only 0.03 km; ask the student why (the line runs mostly north to south, so the east-west leg is small). Second, the hops add up to 32.39 km against 28.12 km in a straight line, a ratio of 1.152. That is the triangle inequality at work: going from A to C through B is never shorter than going straight from A to C, so every bend adds distance. Third, the real track is longer still, because it curves between stations, so 32.39 km is a lower bound for the track, not its length.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Primaria, 9 to 11.</strong> On squared paper, walk from one corner of a 3 by 4 rectangle to the opposite corner along the edges, then diagonally. Measure both. Which is shorter, and is it always?',
          '<strong>1° and 2° de secundaria.</strong> Prove that a triangle with sides 3 cm, 4 cm and 8 cm cannot exist. What rule did you use?',
          '<strong>3° and 4° de secundaria.</strong> Use Pythagoras by hand on the Cabitos to Angamos hop: the stations are 0.0166 degrees apart north to south and 0.0004 east to west. Check you get about 1.85 km.',
          '<strong>5° de secundaria and IB.</strong> Why does a degree of longitude shrink with the cosine of the latitude? Sketch the Earth and a circle of latitude to explain.',
          '<strong>Going further.</strong> If the metro added a station halfway between two existing ones, but 200 metres to the side, how much would the sum of hops grow? Use the triangle inequality to estimate first, then calculate.'
        ] }
      ]
    },
    {
      id: 'levels',
      eyebrow: 'By level',
      h2: 'What does maths tutoring look like at each age?',
      lede: 'The same principles at every level: diagnose first, explain in small steps, and have the student explain back. The topics change with the grade.',
      body: [
        { kind: 'table', numCols: [], caption: 'Typical tutoring focus by stage (our plans, set beside CNEB grades)', head: ['Stage', 'Grades and ages', 'Typical focus', 'Course'], rows: [
          ['Early primaria', '1° to 3°, ages 6 to 8', 'Place value, addition and subtraction strategies', 'Elementary maths'],
          ['Late primaria', '4° to 6°, ages 9 to 11', 'Fractions, decimals, proportion, area', 'Elementary maths, mental maths'],
          ['Early secundaria', '1° to 2°, ages 12 to 13', 'Integers, first equations, ratio', 'Middle school maths, algebra foundations'],
          ['Late secundaria', '3° to 5°, ages 14 to 16', 'Functions, trigonometry, statistics', 'High school maths'],
          ['Cambridge and IB', 'Usually 14 to 18', 'IGCSE Core and Extended, IB AA and AI', 'IGCSE maths, IB maths'],
          ['After school', '17 and over', 'University calculus, statistics, refreshers', 'University maths, statistics']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Diagnose', p: 'The free first class includes a short diagnostic in the student\'s current topic. The tutor writes down where understanding stops, not just which answers were wrong.' },
          { h3: 'Explain', p: 'New ideas arrive in small steps on a shared whiteboard. The tutor uses the notation the student\'s school uses, and asks for the method out loud before any shortcut.' },
          { h3: 'Check', p: 'Every class ends with a problem the student solves alone. Families get a short note on what was covered and what to practise.' }
        ] }
      ]
    },
    {
      id: 'lima',
      eyebrow: 'Lima and online classes',
      h2: 'Why take maths classes online in Lima?',
      lede: 'Because Lima is very large. INEI counted 10,141,775 people in Lima Metropolitana in 2025, across 43 districts, and a weekly trip to a tutor\'s home or an academy costs real time.',
      body: [
        { kind: 'two',
          leftH3: 'One city, very different distances',
          left: [
            'San Juan de Lurigancho alone had 1,176,422 people in 2025, more than most Peruvian departments; Villa El Salvador had 451,546. A family at either end of Line 1 is the same distance from an online tutor as a family in Miraflores.',
            'Lima\'s 2017 city figure, which INEI gives for Lima province together with Callao, was 9,562,280. The 2025 total for Lima Metropolitana does not include Callao, so the two are never compared as growth.'
          ],
          rightH3: 'What a family needs',
          right: [
            'A laptop or tablet, headphones and a steady connection. In Lima Metropolitana, INEI found 92.4% of people aged 6 and over used the internet in the second quarter of 2026.',
            'A pen and paper matter as much as the screen. Students write their working on paper and hold it up, or use the shared whiteboard, so the tutor sees every step.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are online maths classes in Lima?',
      lede: 'Whenever suits you. Lima is on Peru time all year, and tutors plan around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lima time and the tutor\'s time in India, examples only', head: ['Lima', 'India', 'Day in India'], rows: [
          ['06:00', '16:30', 'Same day'],
          ['08:30', '19:00', 'Same day'],
          ['11:00', '21:30', 'Same day'],
          ['16:00', '02:30', 'Following day'],
          ['19:30', '06:00', 'Following day']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5 hours, no daylight saving (tz database zone America/Lima). India: UTC plus 5 hours 30 minutes. India is therefore 10 hours 30 minutes ahead of Lima on every date.' },
        { kind: 'p', mt: true, html: 'Since neither clock changes, a weekly slot chosen in March holds until December and beyond. Families book in Lima time and the tutor sees the matching India time. Tutoring continues through school holidays unless you choose to pause; many students use the January to March break to close gaps before the new school year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a Lima student\'s maths grows with us',
    lede: 'Our own stages, used for every age. They describe what the student can do and explain, not how many worksheets they finished.',
    table: { caption: 'Maths milestones (ours)', head: ['Stage', 'What it looks like', 'The student can'], rows: [
      ['1. Fluent', 'Facts recalled without strain', 'Calculate accurately and estimate first'],
      ['2. Flexible', 'More than one method', 'Solve a problem two ways and compare'],
      ['3. Symbolic', 'Letters for numbers', 'Turn a sentence into an equation and solve it'],
      ['4. Visual', 'Graphs and diagrams', 'Sketch a function or a figure before calculating'],
      ['5. Proving', 'Why, not only what', 'Justify a rule such as the triangle inequality'],
      ['6. Modelling', 'Maths on real data', 'Use maths on a real file and state its limits']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages 5 and 6 are what the Metro lesson reaches: a student who can say why 32.39 km is a lower bound, not just compute it.',
      'You hear from the tutor after each block of classes.'
    ] },
    right: { h3: 'For students', ps: [
      'A detour is never shorter. If your answer says it is, check your working.',
      'Write the method before the number.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths courses',
    h2: 'Nine more maths courses for Lima learners',
    lede: 'Grouped by stage. Each is taught live in English by a regular tutor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Ages 4 to 11', courses: [
        { code: 'LIM / P / 01', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Playful, concrete number work for ages 4 to 7.' },
        { code: 'LIM / P / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'The full primaria range, grade by grade.' },
        { code: 'LIM / P / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense and calculation strategies for ages 5 to 10.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 11 to 18', courses: [
        { code: 'LIM / S / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry for the first secundaria years.' },
        { code: 'LIM / S / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths', blurb: 'Analysis and Approaches or Applications and Interpretation, SL and HL.' },
        { code: 'LIM / S / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Competition problem solving for strong students.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 17 and over', courses: [
        { code: 'LIM / U / 01', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and beyond.' },
        { code: 'LIM / U / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From data to hypothesis tests.' },
        { code: 'LIM / U / 03', slug: 'sat-math-prep-course', title: 'SAT maths', blurb: 'For Lima students applying to universities in the United States.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live maths tutoring works from Lima',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early Lima mornings are Indian evenings, a quiet time to work.' },
      { time: 'After school', l: 'Afternoon and evening slots too, chosen by you.' },
      { time: '1-on-1', l: 'Your own slot with one tutor, moved around exams when needed.' }
    ],
    cells: [
      { h3: 'One tutor', p: 'The same tutor follows the student all year.' },
      { h3: 'Clear English', p: 'Steady pace, plain words and time to think.' },
      { h3: 'Working shown', p: 'Every step written, every step explained.' },
      { h3: 'School-matched', p: 'Topics and notation from the student\'s own school.' },
      { h3: 'Notes home', p: 'Families hear what was covered and what to practise.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Maths students often move on to coding and data. A few projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'From Google, written by parents and students themselves.',

  fees: {
    h2: 'Maths tutoring fees for Lima families',
    lede: 'Fees are monthly and set in US dollars. We charge your card in dollars; your bank converts to soles at its own rate, which can make the statement differ a little from the amount shown.',
    free: ['A free first class with a short diagnostic', 'A written note on where to start', 'No card needed'],
    group: ['Fifteen to twenty students at a similar level', 'One tutor all year', 'Two live classes a week', 'Pay monthly, stop when you wish'],
    one: ['One student, one tutor', 'Topics set by school and exams', 'Days and hours of your choosing']
  },

  faq: {
    eyebrow: 'Lima families ask',
    h2: 'Maths tutor in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every maths class is live, online and in English only. Tutors speak at a steady pace, follow the student\'s accent and speed, and when a student answers in Spanish they reply with the English term. For many Lima families the English is part of the point.' },
      { q: 'Do you tutor IB and IGCSE maths in Lima?', a: 'Yes. We teach IB Mathematics Analysis and Approaches and Applications and Interpretation at SL and HL, and IGCSE Core and Extended. We are not connected with the IB, Cambridge or any school, and the school awards the grades.' },
      { q: 'Can you help a student at a Spanish-medium colegio?', a: 'Yes. Tutors follow the CNEB topics the student is meeting in class and explain them in simple English. Maths vocabulary is small and exact, so most students follow it quickly.' },
      { q: 'Do you prepare students for university admission exams?', a: 'No. Admission exams are set in Spanish by each university, which alone decides who is admitted. We teach the maths underneath them, such as algebra, geometry and careful checking, and we are not connected with any university.' },
      { q: 'What ages do you teach?', a: 'From early primaria to adults. Six to eight year olds work on number sense, secundaria students on algebra, functions and statistics, and adults on refreshers, university maths or statistics.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Lima is on Peru time all year and the tutor in India is 10 hours 30 minutes ahead, so 08:30 in Lima is 19:00 there.' },
      { q: 'How does a tutor see my child\'s working online?', a: 'On a shared whiteboard, or by the student holding written work up to the camera. Tutors ask for the method out loud as well as on paper.' },
      { q: 'How much does maths tutoring cost?', a: 'Fees are monthly, shown on this page in US dollars and charged by card in dollars; your bank converts them to soles. Visitors in India see rupees. The first class is free.' },
      { q: 'Is there a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian school grade or qualification and is not issued by MINEDU, the IB or Cambridge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Lima students and parents.',
    items: [
      { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Profesor de matemáticas en inglés', p: 'The Spanish-language guide to maths in English.' },
      { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor de matemáticas IB en inglés', p: 'IB Mathematics for students in Peru.' },
      { href: '/igcse-maths-tutor-peru', label: 'IGCSE maths tutor in Peru', p: 'For Cambridge-curriculum schools.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'For bilingual school families who also want coding.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding, AI and maths in Peru', p: 'Every Peru page in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free maths class from Lima',
    lede: 'The first class is a short diagnostic in the topic your child is studying now. Afterwards the tutor explains what they found and proposes a starting point and a format.',
    readFirst: 'If you would rather read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'Classes are live and online, taught in English only by tutors in India. WhatsApp, in English, is the quickest way to reach us.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Peru', links: [
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' },
        { href: '/igcse-maths-tutor-peru', label: 'IGCSE maths' },
        { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'IB maths' },
        { href: '/razonamiento-matematico-clases-online-peru', label: 'Razonamiento matemático' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'A detour is never shorter'
  },

  personalityCss: `
.ag-root.ag-maa .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-maa .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-maa .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-maa .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-maa .ag-table caption { text-align: left; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB (maths competencies, plan de estudios, hora pedagógica), ENLA 2025 news; PUCP, UNI and Universidad de Lima admission pages; MINEDU IB Diploma 2025 news; INEI Censos Nacionales 2025, Perfil Sociodemográfico 2017 and ICT bulletin II trimestre 2026; EF EPI 2025; tz database America/Lima. Data: MTC AATE, Estaciones de Metro de Lima Línea 1, ODC-By.',
    localProject: 'Is Metro Line 1 longer than a straight line? An original geometry lesson on the AATE station file (ODC-By, 26 stations): Version 1 gives 28.15 km end to end from raw degrees; Version 2 scales longitude by the cosine of the latitude (28.12 km) and sums 25 station-to-station hops to 32.39 km, ratio 1.152, longest hop Cabitos to Angamos 1.85 km. Lesson family: the triangle inequality and Pythagoras on a local grid.',
    requiredMentions: ['estaciones-linea1.csv', 'Sum of 25 hops: 32.39 km', 'Ratio: 1.152', 'Cabitos to Angamos 1.85 km', '10,141,775', '1,176,422', 'Lima city 555', 'A detour is never shorter', '2,502 students in Peru obtained the IB Diploma'],
    sources: [
      { claim: 'Metro de Lima Line 1 stations and coordinates, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/mtc-aate-estaciones-de-metro-de-lima-linea-1' },
      { claim: 'CNEB maths competencies, weekly hours and the 45-minute hour.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025 application, grades and scale.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2025 national results and 2° secundaria maths gains.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'IB Diploma 2025: 2,502 students, 47% COAR.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'PUCP admission emphasis on reading and maths.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'UNI three papers, the second Matemática.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'Universidad de Lima negative marking.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'Lima Metropolitana and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'EF EPI 2025 Lima score.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Any Lima-only ENLA percentage: MINEDU\'s regional result pages were blocked (BLOCKED.md), so none is printed.',
      'An official Line 1 track length: not in the dataset; the page prints straight-line distances only and calls 32.39 km a lower bound.',
      'Admission preparation, admission promises or any university connection: refused.',
      'Comparing Lima 2017 (with Callao) and Lima Metropolitana 2025 (without Callao) as growth: refused.',
      'Spanish-language teaching: every class is in English.',
      'Typed tutoring rates: fees render from the template (priceSubject maths).'
    ]
  }
};
