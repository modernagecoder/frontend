// SHIP: market (region) | Junín: Mantaro valley to selva central, school science, sunlight data from Huayao | a sliding window with a running sum that skips windows with a gap, not whole days
'use strict';
// Online coding and AI classes, Junín region, Peru (ag- region page, Peru cluster row PE165; alloc: regions, cajr, #385F04).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: flexible hours; USD only via
// data-price anchors.
// Spine: Junín joins the Andes (Huancayo, Jauja, Tarma, Concepción) and the selva central (Chanchamayo, Satipo). Its DRE
// reported 3,322 public school premises for 2026 and a Concepción school's science win abroad; the region also hosts the
// IGP observatory at Huayao, whose sunlight readings power an original project on finding the sunniest three hours.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-junin-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1: JUNÍN 1422780; provinces HUANCAYO 626199, CONCEPCIÓN 62358, CHANCHAMAYO
//    180290, JAUJA 86816, JUNÍN 25657, SATIPO 245776, TARMA 96625, YAULI 32592, CHUPACA 66467; districts EL TAMBO 175527,
//    HUANCAYO 124447, CHILCA 101215, PANGOA 70786. Capital Huancayo (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9: Huancayo city 456,250 (2017). Lib1541 dpto12.xlsx (single centro poblado 2017): TARMA 39456.
//  - INEI API geografia distritos codRegion=12 ccpp=09: ubigeo 120904 = "Huáchac" (province Chupaca).
//  - DRE Junín, gob.pe note 11 February 2026: "mantenimiento preventivo y correctivo de 3,322 locales educativos públicos";
//    headline "En Beneficio De Más De 277 Mil Estudiantes"; "Rutas Solidarias, destinado al mantenimiento de bicicletas y
//    equipamiento de seguridad para estudiantes de zonas rurales de la sierra y selva de Junín". Soles amounts not used.
//  - DRE Junín, gob.pe note 20 October 2026: I.E. "9 de Julio" de Concepción "conquistaron el Primer Lugar en la Feria
//    Internacional Aurora de Paraguay 2026"; "alcanzando posteriormente el tercer puesto a nivel nacional en el rubro de
//    Clubes de Ciencia y Tecnología" (EUREKA 2025); "Feria Internacional de Ciencia y Tecnología (FENIC) 2027, en Brasil".
//    Student and teacher names left out.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): cuadro 11.5 Junín "... 27,8 27,3 29,2 31,9"; 11.6 "... 42,5 43,1
//    44,7 49,6"; 11.13 "... 62,4 72,4 80,8 81,6"; Total 2025 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): data-state="junin" Junin 497 (low); data-city="huancayo" Huancayo 499 (low).
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, Fábrica de Programadores, ONEM 2026
//    (FACTS 5, 6, 13, 14, 32, 33, 39, 17, 45, 99, 105). Time: tzdata.
//  - Data: Instituto Geofísico del Perú (IGP), Laboratorio de Micro Física Atmosférica y Radiación (LAMAR), "Estación BSRN
//    para el Balance Energético Solar Tierra-Atmósfera de LAMAR - Junín, Perú", datosabiertos.gob.pe, "Open Data Commons
//    Attribution License" (ODC-By), released 2025-05-30, modified 2026-05-29. Description: "Observatorio de Huancayo-Huayao,
//    ubicado en Junín, Perú (latitud: -12.0424, longitud: -75.3189)"; "frecuencia horaria"; "La estación fue reubicada hacia
//    una torre de 6 metros"; "No se cuenta con datos durante todo el mes de marzo del 2025." Dictionary: global_SW_rad
//    "Global shortwave irrandiance ... W m^{-2}"; hour "hora promedio del registro". File IGP_EstacionBSRN_data_2025_2025.csv
//    (saved as bsrn-2025.csv), 570,672 bytes, 8,760 hourly rows for 2025, global_SW_rad blank in 1,684 rows.
// Our own calculations (scratchpad pe/r1/cajr/v1.py, v2.py, python3 -I):
//  v1 prints: Days in the file: 365 / Days with no gap: 92 / Peak three hours start at: 11
//  v2 prints: Days we can use: 317 / Most common starts: [(11, 139), (10, 70), (9, 39)] / Check by hand (month, day): [(10, 21)]
//  hourly means of global_SW_rad over readings present (hour: mean, readings): 6: 43.2 (260), 7: 202.3 (271), 8: 407.0
//    (294), 9: 624.5 (307), 10: 756.7 (307), 11: 842.8 (282), 12: 821.7 (284), 13: 749.9 (302), 14: 598.1 (307), 15: 387.7
//    (294), 16: 201.9 (235), 17: 41.1 (165). Blank readings by month: Jan 26, Feb 97, Mar 744, Apr 222, May 7, Jun 12,
//    Jul 110, Aug 85, Sep 53, Oct 114, Nov 143, Dec 71. 21 October 2025 has readings at 6, 12, 13, 15 and 16 only in daylight.
//    A running sum can leave a tiny float residue (2.8e-14 on 3 December); v2 treats totals under 1 as no daylight.
// Lesson family: a sliding window. Keep a running total and a gap count; add the reading that enters, subtract the one that
// leaves; skip a window that holds a gap instead of throwing away the whole day; then sanity-check the winners.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'days = {}',
  'with open("bsrn-2025.csv", newline="", encoding="utf-8") as station:',
  '    for row in csv.DictReader(station):',
  '        key = (int(row["month"]), int(row["day"]))',
  '        days.setdefault(key, [None] * 24)',
  '        if row["global_SW_rad"] != "":',
  '            days[key][int(row["hour"])] = float(row["global_SW_rad"])',
  '',
  'starts = {}',
  'complete = 0',
  'for hours in days.values():',
  '    if None in hours:',
  '        continue',
  '    complete += 1',
  '    peak = max(range(22), key=lambda s: sum(hours[s:s + 3]))',
  '    starts[peak] = starts.get(peak, 0) + 1',
  '',
  'print("Days in the file:", len(days))',
  'print("Days with no gap:", complete)',
  'print("Peak three hours start at:", max(starts, key=starts.get))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'days = {}',
  'with open("bsrn-2025.csv", newline="", encoding="utf-8") as station:',
  '    for row in csv.DictReader(station):',
  '        key = (int(row["month"]), int(row["day"]))',
  '        days.setdefault(key, [None] * 24)',
  '        if row["global_SW_rad"] != "":',
  '            days[key][int(row["hour"])] = float(row["global_SW_rad"])',
  '',
  'def best_window(hours, width=3):',
  '    total, gaps, peak = 0.0, 0, None',
  '    for h in range(24):',
  '        if hours[h] is None:',
  '            gaps += 1',
  '        else:',
  '            total += hours[h]',
  '        if h >= width:',
  '            leaving = hours[h - width]',
  '            if leaving is None:',
  '                gaps -= 1',
  '            else:',
  '                total -= leaving',
  '        if h >= width - 1 and gaps == 0:',
  '            if peak is None or total > peak[0]:',
  '                peak = (total, h - width + 1)',
  '    return peak',
  '',
  'starts = {}',
  'odd = []',
  'for key, hours in days.items():',
  '    found = best_window(hours)',
  '    if found is None or found[0] < 1:   # night, or no daylight in any gap-free window',
  '        continue',
  '    starts[found[1]] = starts.get(found[1], 0) + 1',
  '    if found[1] < 6:',
  '        odd.append(key)',
  '',
  'print("Days we can use:", sum(starts.values()))',
  'print("Most common starts:", sorted(starts.items(), key=lambda p: -p[1])[:3])',
  'print("Check by hand (month, day):", odd)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Junín region' },
  slug: 'online-coding-and-ai-classes-junin-region-peru',
  code: 'cajr',
  accent: '#385F04',
  accentRationale: 'Junín region: a forest green #385F04, the coffee slopes of Chanchamayo and Satipo below the Mantaro valley, allocated to this row; contrast 7.06 on #FBF8F2, 6.64 on #F5F1E8 and 6.07 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Junín region, Peru',
  title: 'Junín Region Online Coding and AI Classes, Taught in English',
  description: 'Live online coding and AI classes in English for Junín: Huancayo, Tarma, Jauja and the selva central, school facts, home internet, and a sunlight data project.',
  ogDescription: 'Coding and AI for children, teenagers and adults in Huancayo, El Tambo, Jauja, Tarma, La Merced, Satipo and every other part of Junín, taught live online in English: the region in census figures, what schools cover, and a Python project on hourly sunlight from the Huayao observatory.',
  twitterDescription: 'Junín, live online coding in English: census, school science, home internet, and a sunlight data project from Huayao.',
  pageName: 'Online Coding and AI Classes in the Junín Region',
  webPageDescription: 'A guide to live online coding and AI classes in English for learners across the Junín region of Peru, built from INEI census and ENAHO tables, two DRE Junín notes, MINEDU curriculum sources, EF EPI 2025, and an original Python project on the IGP Huayao solar radiation dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for learners in the Junín region of Peru: blocks, Minecraft and Python for children, maths through code, data science and AI for teenagers, Python, data and app building for adults, in groups of fifteen to twenty or one to one, at any hour the learner picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Junín region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#sierra-selva', label: 'The region' },
    { href: '#science', label: 'School science' },
    { href: '#sunlight', label: 'Sunlight project' },
    { href: '#internet', label: 'Internet' },
    { href: '#timing', label: 'Timing' }
  ],
  eyebrow: 'Junín &middot; Live online, in English &middot; Ages 6 and up',
  h1: 'Online coding and AI classes in the Junín region',
  lede: 'Junín runs from the selva central of Chanchamayo and Satipo up to the Andean Mantaro valley, home to Huancayo, Concepción and Jauja. Our classes reach every part of it the same way, live over video and in English. Here you will find the region\'s provinces in 2025 census figures, what its schools are doing in science, how many homes are online, and a project built on hourly sunlight readings from the Huayao observatory, where the sun is strongest at the hours you would expect and the data has holes you would not.',
  secondaryCta: { href: '#sunlight', label: 'See the sunlight project' },
  wa: 'Hello Modern Age Coders, we are in the Junín region of Peru and would like live online coding classes in English. Could we start with a free class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ learners around the world &middot; English matched to the learner',
  spec: [
    ['Ages', 'Six to adult, in age-matched groups'],
    ['Places', 'Sierra and selva alike, from home'],
    ['Language', 'English, with a patient mentor'],
    ['Class format', 'Fifteen to twenty learners, or one to one'],
    ['Timing', 'Any day, the hour you prefer'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The answer up front',
  capsule: 'Modern Age Coders teaches live online coding and AI classes in English to learners across the Junín region of Peru, from Huancayo, El Tambo and Chilca to Jauja, Tarma, La Merced and Satipo. Six year olds start with block coding, children of nine or ten write Python, teenagers combine Python with maths, data science and AI, and adults learn Python, data analysis and app building. A mentor teaches each class on video, to a group of fifteen to twenty or to one learner, on the days and at the hours the family picks. The first class is free.',

  picks: {
    eyebrow: 'Good places to begin in Junín',
    h2: 'Three first courses for learners in Junín',
    lede: 'One that mixes school maths with code, one for teenagers who like real measurements, and one for adults starting from zero.',
    items: [
      { course: 'maths-through-coding', code: 'JUN / 01', title: 'Maths Through Coding', note: 'For ages 10 to 15. Fractions, patterns, graphs and geometry from the school syllabus, explored and checked in Python, so maths and programming grow together.' },
      { course: 'data-science-course-for-teens-python-data', code: 'JUN / 02', title: 'Data Science for Teens', note: 'For teenagers of 14 to 18 who know a little Python. Real measurement files, charts and first models, the natural next step after the Huayao project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'JUN / 03', title: 'Python Masterclass', note: 'For university students and adults. A full Python course from the first line, timed around lectures, work or the harvest.' }
    ]
  },

  sections: [
    {
      id: 'sierra-selva',
      eyebrow: 'Sierra and selva',
      h2: 'How many people live in Junín, and in which provinces?',
      lede: 'On census day in 2025 INEI counted 1,422,780 people in the department of Junín. Nearly half live in the province of Huancayo; the selva provinces of Satipo and Chanchamayo come next.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Junín and its nine provinces: total population, 2025 census', head: ['Area', 'Population, 2025'], rows: [
          ['Junín department', '1,422,780'],
          ['Huancayo', '626,199'],
          ['Satipo', '245,776'],
          ['Chanchamayo', '180,290'],
          ['Tarma', '96,625'],
          ['Jauja', '86,816'],
          ['Chupaca', '66,467'],
          ['Concepción', '62,358'],
          ['Yauli', '32,592'],
          ['Junín (province)', '25,657']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, Cuadro N° 1 of the demographic indicators: total population at 15 September 2025, within boundaries as of 15 July 2026. Each figure is INEI\'s; nothing has been added up by us. "Nearly half" is our rounding of 626,199 out of 1,422,780.' },
        { kind: 'two', mt: true,
          leftH3: 'Huancayo and its neighbours',
          left: [
            'The 2017 census counted 456,250 people in the city of Huancayo. Its districts are now large in their own right: in 2025 El Tambo had 175,527 people, Huancayo district 124,447 and Chilca 101,215.',
            'We keep the 2017 city figure and the 2025 district figures apart. They count different areas in different years.'
          ],
          rightH3: 'Tarma, Jauja and the selva',
          right: [
            'In INEI\'s 2017 directory of populated centres, the town of Tarma counted 39,456 people, a single-centre figure. In the selva, the district of Pangoa, in Satipo, had 70,786 people in 2025.',
            'Distances in Junín are long and roads climb steeply. A live class from home spares a teenager in Satipo or Pangoa a journey to a city course.'
          ] }
      ]
    },
    {
      id: 'science',
      tint: 'tint',
      eyebrow: 'School science',
      h2: 'What are Junín\'s schools doing in science and technology?',
      lede: 'Two notes from the Dirección Regional de Educación de Junín in 2026 give a picture: a large maintenance effort across thousands of school buildings, and a Concepción school winning abroad with a science project.',
      body: [
        { kind: 'two',
          leftH3: 'Thousands of school buildings',
          left: [
            'On 11 February 2026 the DRE Junín reported funds for the "mantenimiento preventivo y correctivo de 3,322 locales educativos públicos" for the new school year, benefiting more than 277 thousand students.',
            'Part of the money went to Rutas Solidarias, which maintains bicycles and safety equipment "para estudiantes de zonas rurales de la sierra y selva de Junín". It is a reminder that for many rural pupils, just reaching school is an effort.'
          ],
          rightH3: 'From Concepción to Paraguay',
          right: [
            'On 20 October 2026 the DRE reported that two pupils from the I.E. "9 de Julio" in Concepción won first place at the Feria Internacional Aurora in Paraguay in 2026, with a project on nanoparticles made from discarded batteries to fight bacteria in water from the Mantaro river.',
            'The same project had come third nationally in 2025 in the Clubes de Ciencia y Tecnología category of the EUREKA school science fair, and earned a place at the FENIC 2027 fair in Brazil.'
          ] },
        { kind: 'p', mt: true, html: 'Science projects like that run on measurement: samples, counts, tables, and the patience to check them. Programming is the tool that turns those tables into answers, which is why the sunlight project further down uses a real scientific dataset from Junín itself. We have no connection with the DRE Junín, the school or the fairs; we mention them only as the DRE published them.' }
      ]
    },
    {
      id: 'curriculum',
      eyebrow: 'The national curriculum',
      h2: 'Is programming a school subject in Junín?',
      lede: 'No. Junín\'s schools follow Peru\'s national curriculum, which asks every area to build digital skills but gives programming no lesson of its own.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru\'s school stages, as they apply in Junín', head: ['Stage', 'Duration', 'Age MINEDU expects', 'Programming'], rows: [
          ['Primaria', 'Six years', '6 on 31 March of first grade, 11 in sixth', 'Not a subject'],
          ['Secundaria', 'Five years', '12 in first year, 16 in fifth', 'No hours in the regular 35-hour week']
        ] },
        { kind: 'source', html: 'From Ley 28044 (six years of primaria, five of secundaria), MINEDU\'s normative ages counted on 31 March, and the CNEB secundaria plan of studies. Read in November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'A competency without a lesson',
          left: [
            'The CNEB includes a technology competency, number 28, about working in ICT-based virtual environments. It is transversal, meaning every area shares it, and none of its four capacities mentions writing a program.',
            'In secundaria, a regular week gives Matemática four hours, Comunicación four, Inglés three and Educación para el Trabajo two, with nothing set aside for programming.'
          ],
          rightH3: 'Contests and pilots',
          right: [
            'The ONEM maths olympiad, entered through the school, drew more than 1.7 million pupils nationwide in 2026, with its first round on 8 July. MINEDU\'s Python pilot, Fábrica de Programadores, began in July 2025 with 1,000 pupils in Lima Norte.',
            'Nothing in those programmes reaches a typical Junín pupil who wants to learn to code this year, which is the gap a live online class fills.'
          ] }
      ]
    },
    {
      id: 'sunlight',
      eyebrow: 'A Junín data project',
      h2: 'When are the sunniest three hours of the day at Huayao?',
      lede: 'The Instituto Geofísico del Perú measures sunlight every hour at its Huancayo observatory at Huayao and publishes the readings as open data. Our older students use them to learn the sliding window, one of the most useful patterns in programming, and what to do when a day has holes in it.',
      body: [
        { kind: 'two',
          leftH3: 'The dataset',
          left: [
            'The IGP\'s atmospheric physics and radiation laboratory, LAMAR, publishes "Estación BSRN para el Balance Energético Solar Tierra-Atmósfera de LAMAR - Junín, Perú" on datosabiertos.gob.pe, with an Open Data Commons Attribution licence (ODC-By). It was last updated on 29 May 2026. The station is at the Huancayo-Huayao observatory, at latitude -12.0424 and longitude -75.3189; its location code, 120904, is the district of Huáchac in Chupaca province.',
            'Our copy of the 2025 file, saved as bsrn-2025.csv, has one row for every hour of 2025, 8,760 in all. We use the column global_SW_rad, the global shortwave irradiance in watts per square metre: in plain words, how strongly the sun is shining on a flat surface.'
          ],
          rightH3: 'The holes',
          right: [
            'The column is blank in 1,684 of those hours. The IGP explains part of it: the station was moved to a six-metre tower, and because of trouble with its solar tracker, "No se cuenta con datos durante todo el mes de marzo del 2025." March is entirely empty, and other months have scattered gaps.',
            'So the question, which three hours in a row get the most sun on a typical day, has to be answered with data that is missing in places. That is the realistic version of almost every data problem.'
          ] },
        { kind: 'code', label: 'Version 1: brute force, complete days only', lang: 'Python', code: V1, note: 'It prints: <code>Days in the file: 365</code>, <code>Days with no gap: 92</code> and <code>Peak three hours start at: 11</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 works, but look at what it threw away. It only uses days with no gap at all, and because a single blank hour, even at night, ruins a day, only 92 of 365 days survive. It also adds up every three-hour slice from scratch, which is fine here and wasteful on longer data. The answer, a window starting with the reading labelled 11, is reasonable, but it rests on a quarter of the year.' },
        { kind: 'p', html: 'Version 2 slides a three-hour window along each day. It keeps a running total and a count of gaps: when an hour enters the window, it is added (or the gap count goes up); when an hour leaves, it is taken away (or the gap count goes down). A window is only considered when its gap count is zero, so a blank hour at midnight no longer spoils the afternoon. It also flags any day whose peak window starts before six in the morning, because that cannot be right for sunlight.' },
        { kind: 'code', label: 'Version 2: a sliding window that skips gaps, not days', lang: 'Python', code: V2, note: 'It prints: <code>Days we can use: 317</code>, <code>Most common starts: [(11, 139), (10, 70), (9, 39)]</code> and <code>Check by hand (month, day): [(10, 21)]</code>.' },
        { kind: 'p', mt: true, html: 'Now 317 days count instead of 92, and the answer holds: on 139 of them the sunniest three hours begin with the reading labelled 11, and on most of the rest they begin at 10 or 9. The check catches one day, 21 October 2025. Opening it shows why: that day has daylight readings only at 6, 12, 13, 15 and 16, so every window covering the middle of the day contains a gap, and the "peak" complete window is in the early morning. The program did exactly what it was told; the flag makes sure a person looks before anyone trusts that day. One more detail for the curious: running totals of decimals can leave a tiny leftover such as 0.00000000000003 instead of zero, which is why Version 2 ignores totals under 1.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Average global shortwave irradiance at Huayao by hourly reading, 2025, daylight hours (our calculation)', head: ['Reading labelled', 'Average, W per m²', 'Hours with a reading'], rows: [
          ['6', '43.2', '260'],
          ['8', '407.0', '294'],
          ['10', '756.7', '307'],
          ['11', '842.8', '282'],
          ['12', '821.7', '284'],
          ['13', '749.9', '302'],
          ['15', '387.7', '294'],
          ['17', '41.1', '165']
        ] },
        { kind: 'source', html: 'Data: Instituto Geofísico del Perú (IGP), LAMAR, Estación BSRN para el Balance Energético Solar Tierra-Atmósfera de LAMAR - Junín, Perú, 2025 file, ODC-By. Averages are ours, over the hours that have a reading; the data dictionary describes the hour column as the average hour of the record. Blank readings by month: January 26, February 97, March 744 (the whole month), April 222, May 7, June 12, July 110, August 85, September 53, October 114, November 143, December 71.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, outdoors.</strong> Put a stick in the ground and mark the end of its shadow three times in a morning. When is the shadow shortest? What does that tell you about the sun?',
          '<strong>Blocks, around 8 to 10.</strong> Make a list of twelve numbers for the hours of daylight and find the biggest single number. Then find the biggest sum of two numbers side by side.',
          '<strong>First Python, around 10 to 12.</strong> Run Version 1. Change the window from three hours to two, then to four. Does the peak starting hour move?',
          '<strong>Ages 13 and over.</strong> In Version 2, print the window totals for 21 October 2025 hour by hour and explain, in two sentences, why the peak gap-free window is so early.',
          '<strong>Going further.</strong> Group the 317 usable days by month and find, for each month, the most common starting reading. Is the pattern the same in the rainy and the dry months?'
        ] }
      ]
    },
    {
      id: 'internet',
      eyebrow: 'Online at home',
      h2: 'How many homes in Junín can follow a live online class?',
      lede: 'More every year. INEI\'s household survey shows Junín climbing quickly between 2022 and 2025, though home computers are still in fewer than one home in three.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Junín and Peru: home computers, home internet and internet use (per cent)', head: ['Indicator', 'Junín 2022', 'Junín 2025', 'Peru 2025'], rows: [
          ['Homes with at least one computer', '27.8', '31.9', '33.9'],
          ['Homes with internet service', '42.5', '49.6', '56.8'],
          ['People aged 6 or more using the internet', '62.4', '81.6', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5, 11.6 and 11.13 (Encuesta Nacional de Hogares). INEI uses decimal commas; we print points.' },
        { kind: 'two', mt: true,
          leftH3: 'A fast change',
          left: [
            'The share of Junín residents aged six and over who use the internet rose from 62.4 per cent in 2022 to 81.6 per cent in 2025, now level with the national figure. Homes with an internet service went from 42.5 to 49.6 per cent.',
            'Computers lag behind: 31.9 per cent of Junín homes had one in 2025. Many people go online by phone.'
          ],
          rightH3: 'What a learner needs',
          right: [
            'For block coding at six or seven, a tablet is fine. From around nine, when typing begins, a laptop or desktop makes learning possible rather than frustrating.',
            'Tell the mentor in the free class what device you have. If the answer is a phone only, we will say so honestly and suggest options before you pay for anything.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Do the mentors teach in Spanish if a child needs it?',
      lede: 'No. Every class is in English only, live and online, with mentors in India who adjust their speed and phrasing to each learner. We explain here how that works for Junín learners.',
      body: [
        { kind: 'two',
          leftH3: 'Junín on the EF index',
          left: [
            'In EF\'s English Proficiency Index 2025, Peru scores 519, in the moderate band. On the same page Junín scores 497 and the city of Huancayo 499, both just inside EF\'s low band.',
            'That points to learners who recognise a fair amount of English but need time to answer. Our classes are built for exactly that.'
          ],
          rightH3: 'How the mentor adapts',
          right: [
            'Instructions are short and repeated in the same words each week. Every idea is shown on screen as well as said. A learner who replies partly in Spanish is understood and given the English words back.',
            'Python helps here too: most of its keywords are everyday English, so learning the code teaches the vocabulary along the way.'
          ] }
      ]
    },
    {
      id: 'choose',
      eyebrow: 'By age',
      h2: 'Which course suits a learner in Junín?',
      lede: 'Start with age, then interest. The ages are our course ages; the grade is the one MINEDU expects for that age on 31 March.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested first courses by age (ours)', head: ['Learner', 'Usual grade', 'Start with', 'Build towards'], rows: [
          ['Six to eight years old', 'First to third of primaria', 'Coding for Kids', 'Games and animations'],
          ['Eight to twelve, loves Minecraft', 'Third to sixth of primaria', 'Minecraft coding', 'Worlds that follow their own rules'],
          ['Ten to fifteen, likes maths', 'Fifth of primaria to third of secundaria', 'Maths Through Coding', 'Maths checked by programs'],
          ['Thirteen to eighteen', 'Secundaria', 'Python for teens', 'Data science or AI'],
          ['University student', 'After secundaria', 'Python masterclass', 'Engineering and science computing'],
          ['Adult at work', 'Any', 'Data analysis', 'Reports and automation']
        ] },
        { kind: 'source', html: 'Pairings are our suggestion. Because MINEDU fixes the age on 31 March, children born after that date may be a grade lower than shown.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Children', p: 'Short, lively classes in small age bands. The youngest never type; they drag blocks and see results straight away.' },
          { h3: 'Teenagers', p: 'Python and maths together, then data and AI. Students who enjoy science fairs find that code makes their measurements far easier to analyse.' },
          { h3: 'Adults', p: 'Python and data skills for work, study or a new career, at hours that fit around everything else.' }
        ] },
        { kind: 'p', mt: true, html: 'Parents of younger children may like <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a>, and Spanish speakers <a class="ag-inline-link" href="/programacion-para-ninos-de-12-anos">programación para niños de 12 años</a>. University students in engineering can read <a class="ag-inline-link" href="/python-for-engineering-students-peru">Python for engineering students in Peru</a>, and the national overview is <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'timing',
      eyebrow: 'Timing',
      h2: 'What time do classes run for Junín?',
      lede: 'At whatever hour suits the learner. Junín keeps Peru time all year, and the mentor in India schedules around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Peru times with the matching India time (illustrative, not a timetable)', head: ['Junín', 'India', 'Day in India'], rows: [
          ['07:15', '17:45', 'Same day'],
          ['09:45', '20:15', 'Same day'],
          ['11:15', '21:45', 'Same day'],
          ['14:30', '01:00', 'Following day'],
          ['16:45', '03:15', 'Following day'],
          ['19:45', '06:15', 'Following day']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours with no daylight saving (tz database, zone America/Lima, unchanged since 1994). India keeps UTC plus 5 hours 30 minutes. The gap is 10 hours 30 minutes every day of the year.' },
        { kind: 'p', mt: true, html: 'With no clock changes on either side, a class hour stays the same from one season to the next. You pick a time in your own clock when booking. The 2026 school year in Peru opened on 16 March 2026, and families often start in the long summer holiday and keep the hour when school resumes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a Junín learner\'s skills develop',
    lede: 'Our own stages for every learner, from a six year old to a retired teacher. They let a mentor place each student and let families see what has changed.',
    table: { caption: 'From blocks to sliding windows (ours)', head: ['Stage', 'Usually', 'The learner can'], rows: [
      ['1. Sequence', '6 to 7', 'Arrange steps so a sprite does what was planned'],
      ['2. Loop', '7 to 9', 'Let a loop do repeated work'],
      ['3. Remember', '8 to 10', 'Keep readings in a list and find the largest'],
      ['4. Code', '9 to 12', 'Write Python with functions, if and for'],
      ['5. Slide', '12 to adult', 'Move a window along data with a running total'],
      ['6. Trust carefully', '13 to adult', 'Keep data with gaps, and flag results that cannot be right']
    ] },
    left: { h3: 'For parents', ps: [
      'The Huayao project practises stages 5 and 6, the same skills scientists use with real instruments that sometimes fail.',
      'Every month you hear what your child made and explained.'
    ] },
    right: { h3: 'For learners', ps: [
      'Do not throw away a whole day for one missing hour.',
      'When a result looks impossible, open the data before you fix the code.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Junín',
    lede: 'In three age bands. Each course is taught live in English by a regular mentor, either in a class of fifteen to twenty or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'JUN / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Blocks, games and simple apps for the youngest.' },
        { code: 'JUN / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Programming ideas learned inside Minecraft worlds.' },
        { code: 'JUN / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'First typed code and small AI ideas, ages 9 to 12.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'JUN / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full Python course for secundaria.' },
        { code: 'JUN / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built, tested and explained.' },
        { code: 'JUN / TEEN / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Design and code complete games.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'JUN / ADULT / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheets, SQL, Python and dashboards.' },
        { code: 'JUN / ADULT / 02', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ masterclass', blurb: 'C++ for engineering and systems students.' },
        { code: 'JUN / ADULT / 03', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter app development', blurb: 'Cross-platform mobile apps from scratch.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live online classes work across Junín',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'Junín mornings fall in the Indian evening, a good time to begin.' },
      { time: 'Afternoon or evening', l: 'Possible as well; the mentor works around you.' },
      { time: 'Private lessons', l: 'A one-to-one hour on days you choose.' }
    ],
    cells: [
      { h3: 'Steady mentor', p: 'The same teacher each week, who knows the learner well.' },
      { h3: 'Clear English', p: 'Short, repeated phrases with everything shown on screen.' },
      { h3: 'Learning by doing', p: 'The student writes, runs and fixes the code.' },
      { h3: 'Grouped by age', p: 'Children, teenagers and adults learn apart.' },
      { h3: 'Updates for families', p: 'A note on what was built and what is next.' },
      { h3: 'Choose the size', p: 'A class of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Projects from our long-term students',
  projectsLede: 'Students who carry on build real tools. A selection is below; the <a class="ag-inline-link" href="/student-labs">student labs</a> have the rest.',
  reviewsLede: 'Families and learners reviewing us on Google, word for word.',

  fees: {
    h2: 'Fees for Junín learners',
    lede: 'Plans are monthly, priced in US dollars and charged to your card in dollars. Your bank converts the charge into soles at its own rate, so the soles amount on your statement may differ a little from day to day.',
    free: ['Free trial class', 'A puzzle, a program and a device check', 'No card asked for'],
    group: ['Fifteen to twenty learners of similar age', 'The same mentor every week', 'Two live classes weekly', 'Monthly, stop at any point'],
    one: ['One mentor, one learner', 'A plan built around the learner', 'The schedule you prefer']
  },

  faq: {
    eyebrow: 'Junín families ask',
    h2: 'Online coding and AI classes in Junín: questions answered',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All teaching is in English, live and online. Mentors in India speak slowly, repeat key phrases, adapt to how each learner talks, and when a learner answers in Spanish they help with the English words while carrying on in English.' },
      { q: 'Can we join from Satipo, La Merced or Tarma?', a: 'Yes. Every class is online, so selva and sierra towns join exactly like Huancayo. You need a steady connection and, for typed code from about nine, a computer with a keyboard.' },
      { q: 'At what age can my child start?', a: 'At six, with blocks that need no typing. Most children are ready for Python at nine or ten. Teenagers and adults can begin from zero whenever they like.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Junín throughout the year, so 09:45 in Huancayo is 20:15 for the mentor.' },
      { q: 'Is coding taught at school in Junín?', a: 'Not as a subject. Digital skills are meant to run through all areas of the national curriculum, but secundaria\'s regular timetable has no programming hours.' },
      { q: 'My teenager enjoys science fairs. Will this help?', a: 'Very likely. Science projects depend on measurements and tables, and Python and data science make those far easier to analyse and present. We teach with original data projects such as the Huayao sunlight one on this page.' },
      { q: 'Do you teach AI?', a: 'Yes, at every age in a suitable form. Children learn how simple AI decides; teenagers build and test models. Under-13s never use adult chatbot accounts with us, and teenagers only use tools that allow their age.' },
      { q: 'Are there classes for adults?', a: 'Yes, in adult groups or one to one. Python, data analysis, C++ and app building are the usual choices, scheduled around work and study.' },
      { q: 'How do we pay?', a: 'Monthly by card in US dollars, converted to soles by your bank. Visitors from India see rupees on this page. The first class is free.' },
      { q: 'Is there a certificate?', a: 'Where a course includes one, the learner receives our own certificate of completion. It is not a Peruvian qualification and is not issued or backed by MINEDU, the DRE Junín or any school; it records the learner\'s work.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'Useful next reads for Junín learners and families.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national guide, with every Peru page listed.' },
      { href: '/python-for-engineering-students-peru', label: 'Python for engineering students in Peru', p: 'Numerical Python for university courses.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Teenagers building and testing AI.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Simple AI builds for children.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to program at any age.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools allow which ages.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Junín',
    lede: 'In the trial the learner tries a puzzle and writes a first program, and the mentor checks the device and connection. You then get a clear suggestion of course and format.',
    readFirst: 'More detail first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or every syllabus on <a class="ag-inline-link" href="/courses">the courses page</a>.',
    note: 'Lessons are live and online, in English, with mentors in India. A WhatsApp message in English is the quickest way to reach us.',
    formNote: 'Free, card-free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Read on', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'One missing hour should not cost a whole day'
  },

  personalityCss: `
.ag-root.ag-cajr .ag-hero h1 { letter-spacing: -0.018em; max-width: 23ch; }
.ag-root.ag-cajr .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-cajr .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cajr .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-cajr .ag-code-head b { letter-spacing: 0.02em; text-transform: uppercase; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017, INEI geography API; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); DRE Junín notes of 11 February and 20 October 2026; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores, ONEM 2026; EF EPI 2025; tz database. Data: IGP LAMAR, Estación BSRN Huayao, 2025 file, ODC-By.',
    localProject: 'When are the sunniest three hours of the day at Huayao? An original Python project on the IGP LAMAR BSRN station dataset (ODC-By, hourly 2025, 1,684 blank readings, March missing): Version 1 uses only the 92 gap-free days and finds the peak three-hour window starting at reading 11; Version 2 slides a window with a running total and a gap count, uses 317 days, confirms 11 (139 days), then 10 and 9, and flags 21 October 2025 for a human check. Lesson family: a sliding window that skips gaps, not days.',
    requiredMentions: ['bsrn-2025.csv', 'Days with no gap: 92', 'Days we can use: 317', 'Check by hand (month, day): [(10, 21)]', '1,422,780', '3,322 locales educativos públicos', 'Junín scores 497', 'One missing hour should not cost a whole day', 'Feria Internacional Aurora'],
    sources: [
      { claim: 'Department and province populations of Junín, 2025, and district figures.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huancayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Tarma populated-centre figure, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto12.xlsx' },
      { claim: 'Maintenance of 3,322 public school premises and Rutas Solidarias, 2026.', url: 'https://www.gob.pe/institucion/regionjunin-dre/noticias/1362550-junin-recibira-mas-de-s-18-millones-para-mantenimiento-de-3-322-locales-educativos-en-beneficio-de-mas-de-277-mil-estudiantes' },
      { claim: 'Concepción school first place at the Feria Internacional Aurora 2026; EUREKA 2025 third place.', url: 'https://www.gob.pe/institucion/regionjunin-dre/noticias/1459913-de-concepcion-para-el-mundo-estudiantes-juninenses-logran-primer-lugar-en-feria-internacional-de-paraguay' },
      { claim: 'Computers, internet and internet use in Junín and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'IGP BSRN Huayao dataset, ODC-By licence, station location and the March 2025 gap.', url: 'https://www.datosabiertos.gob.pe/dataset/estaci%C3%B3n-bsrn-para-el-balance-energ%C3%A9tico-solar-tierra-atm%C3%B3sfera-de-lamar-jun%C3%ADn-per%C3%BA' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Peru, Junín and Huancayo.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any soles amount from the DRE maintenance note: not printed.',
      'Names of the Concepción pupils and their adviser: left out.',
      'Whether the hour column marks the start, middle or end of each hour: the dictionary says "hora promedio del registro", so the page says "reading labelled" instead of a clock time.',
      'Any solar-energy or panel advice from the radiation figures: not given.',
      'A combined Huancayo population from districts: never summed.',
      'Any connection with the DRE Junín, the IGP, MINEDU, the school or the fairs: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
