// SHIP: region | Cusco: 13 provinces, a strong-maths region where connection is the hurdle | average of ratios vs ratio of totals (weighted yield), checking a derived column
'use strict';
// Cusco region (ag- region page, Peru cluster row PE167, P5; alloc: regions, cav, #43623C). Written 2026-11-09.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors.
// Spine: Cusco's pupils beat the national average in maths and its capital city has the second-best English score in
// Peru, yet only 40.0% of its households had an internet service in 2025. The page is honest about that gap, explains
// what live online learning needs, and teaches with the regional agriculture office's quinoa figures.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/<slug>/ and pe/src/inei):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv; tab/tsv_ind_00/sheet2): CUSCO
//    1379251 total (censada 1295360); provinces CUSCO 495112, LA CONVENCIÓN 204096, QUISPICANCHI 99354, CANCHIS 98676,
//    CHUMBIVILCAS 79202, URUBAMBA 71256, CALCA 70621, ESPINAR 67186, ANTA 62018, PAUCARTAMBO 47692, CANAS 33739, PARURO
//    27211, ACOMAYO 23088; district Cusco 102111. 13 provinces; capital Cusco (Compendio 2026 cuadro 1.8). Never summed.
//  - Same tabulado, Cuadro N° 3 (sheet4): CUSCO censada "131405" aged 6 to 11 and "138470" aged 12 to 17.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Cusco city 428,450 (2017, conglomerate). INEI Lib1541 dpto08.xlsx (2017,
//    single centros poblados): CUSCO 111 930 at "3 439" m; SAN SEBASTIAN 109 915 at "3 578"; SANTIAGO 92 729 at "3 464";
//    SICUANI 46 102 at "3 593"; YAURI 28 888 at "3 976"; QUILLABAMBA 23 985 at "1 086".
//  - INEI Compendio Estadístico Perú 2026, tomo 1: cuadro 1.7 "Cusco 71 986,5" km2; 11.5 households with a computer,
//    Cusco 2023 29,4, 2024 33,7, 2025 29,1 (Total 2025 33,9); 11.6 households with internet, Cusco 2023 37,7, 2024 40,7,
//    2025 40,0 (Total 56,8); 11.13 people aged 6+ using internet, Cusco 2023 66,0, 2024 70,0, 2025 65,7 (Total 81,1);
//    5.53 2025 4° primaria satisfactory maths 38,2 (Total 30,0), reading 37,8 (Total 32,7); 5.54 2025 2° secundaria
//    maths 16,9 (Total 12,7), reading 21,9 (Total 18,5); 5.16 public primaria 2025 "121,3" thousand; 5.22 public
//    secundaria "99,9"; 5.75 teachers 2025 "27 832"; 5.66 Universidad Nacional de San Antonio Abad del Cusco 2025
//    "21 697"; Universidad Nacional Intercultural de Quillabamba "1 147".
//  - GEREDU Cusco, gob.pe news 27 May 2026 (geredu-cree.html): CREE "Centro Regional de Recursos Educativos
//    Especializados"; "más de 360 000 estudiantes"; PLADEC "diseñado específicamente para superar las brechas de
//    conectividad que afectan a las comunidades rurales"; "arquitectura offline-first e inteligencia artificial integrada
//    como asistente docente". (The investment figure in soles is not reproduced.)
//  - National (verified raw copies under pe/facts-school/src): Ley 28044; Edades normativas at 31 March; CNEB competency
//    28 transversal and secundaria hours; MINEDU 16 March 2026 "53 631 colegios ... 6 225 000 estudiantes"; ONEM 2026
//    (UGEL 06 oficio: "miércoles 08 de Julio", levels, ten items, two hours; El Peruano: national stage 11 October 2026);
//    OPI, UTEC: free for secundaria students, 2025 final C++ only, generative AI banned.
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): cityScore cusco "moderate" 520 (Lima 555 high, Trujillo 519,
//    Arequipa 512); stateScore "cuzco" "moderate" 504; Peru 519.
//  - Time: tzdata America/Lima UTC-5 (last Peru rule 1994); Asia/Kolkata UTC+5:30; India 10 h 30 min ahead all year.
//  - Data: Gerencia Regional de Agricultura Cusco (GERAGRI CUSCO), "Producción Agrícola periodos 2023 al 2025 en la
//    Región de Cusco [GERAGRI]", Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/producci%C3%B3n-
//    agr%C3%ADcola-periodos-2023-al-2025-en-la-regi%C3%B3n-de-cusco-geragri, licence "Open Data Commons Attribution License"
//    (dc:license on the raw page), modified 2026-10-02. File DataSet_Estadistica_Agricola_2023_2024_2025.csv, 383,956 bytes,
//    sha256 541713774048...eb95a59f, 3,672 rows, Latin-1, semicolon-separated, 75 crops, Fecha_Corte 20251001.
// Our own calculations (scratchpad pe/r2/cusco/v1.py, v2.py, check.py; python3 -I on the downloaded file):
//  v1 prints: Districts growing quinoa: 84 / Average yield, kg per hectare: 1494.2
//  v2 prints: Harvested: 2469.0 ha, produced: 4624.3 t / Yield of the region, kg per hectare: 1873.0 /
//    Biggest grower: (525.0, 'COLQUEMARCA', 3230.48)
//  check prints: 2023-2024 rows checked: 1778 yield disagrees: 0 / 2024-2025 rows checked: 1770 yield disagrees: 1770
//  by province (quinoa 2023-2024): Chumbivilcas 757 ha, 2,419.0 t, 3,195.5 kg/ha; Espinar 456 ha, 291.5 t, 639.3;
//    Anta 386 ha, 774.0 t, 2,005.2; Calca 241 ha, 324.4 t, 1,346.3; Quispicanchi 150 ha, 189.7 t, 1,264.7.
// Lesson family: the average of ratios is not the ratio of totals; weight each district by its harvested area, and
// check that a derived column (yield) really equals production divided by area before trusting it.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'yields = []',
  'with open("DataSet_Estadistica_Agricola_2023_2024_2025.csv", encoding="latin-1") as fh:',
  '    for line in csv.DictReader(fh, delimiter=";"):',
  '        if line["Cultivo_Agricola"].strip() == "QUINUA" and line["Campania_Agricola"] == "2023-2024":',
  '            yields.append(float(line["Rendimiento"]))',
  '',
  'print("Districts growing quinoa:", len(yields))',
  'print("Average yield, kg per hectare:", round(sum(yields) / len(yields), 1))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'tonnes = 0.0',
  'hectares = 0.0',
  'fields = []',
  'with open("DataSet_Estadistica_Agricola_2023_2024_2025.csv", encoding="latin-1") as fh:',
  '    for line in csv.DictReader(fh, delimiter=";"):',
  '        if line["Cultivo_Agricola"].strip() == "QUINUA" and line["Campania_Agricola"] == "2023-2024":',
  '            tonnes += float(line["Produccion"])',
  '            hectares += float(line["Cosechada"])',
  '            fields.append((float(line["Cosechada"]), line["Distrito"], float(line["Rendimiento"])))',
  '',
  'print("Harvested:", hectares, "ha, produced:", round(tonnes, 1), "t")',
  'print("Yield of the region, kg per hectare:", round(1000 * tonnes / hectares, 1))',
  'fields.sort(reverse=True)',
  'print("Biggest grower:", fields[0])'
].join('\n');

const CHECK = [
  'import csv',
  '',
  'checked = {}',
  'wrong = {}',
  'with open("DataSet_Estadistica_Agricola_2023_2024_2025.csv", encoding="latin-1") as fh:',
  '    for line in csv.DictReader(fh, delimiter=";"):',
  '        ha = float(line["Cosechada"] or 0)',
  '        if ha == 0:',
  '            continue',
  '        season = line["Campania_Agricola"]',
  '        worked_out = 1000 * float(line["Produccion"] or 0) / ha',
  '        written = float(line["Rendimiento"] or 0)',
  '        checked[season] = checked.get(season, 0) + 1',
  '        if abs(worked_out - written) > 0.01 * max(written, 1):',
  '            wrong[season] = wrong.get(season, 0) + 1',
  '',
  'for season in sorted(checked):',
  '    print(season, "rows checked:", checked[season], "yield disagrees:", wrong.get(season, 0))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Cusco region' },
  slug: 'online-coding-and-ai-classes-cusco-region-peru',
  code: 'cav',
  accent: '#43623C',
  accentRationale: 'Cusco region: a muted highland green #43623C, like terraced fields above the Sacred Valley, allocated to this row; contrast 6.49 on #FBF8F2, 6.11 on #F5F1E8 and 5.59 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Cusco region, Peru',
  title: 'Online Coding and AI Classes, Cusco Region, Peru',
  description: 'Coding and AI classes for the Cusco region, live online and in English: from Cusco city to Sicuani and Quillabamba, with census facts and a quinoa data project.',
  ogDescription: 'Live coding, AI and maths classes in English for children, teenagers and adults across the Cusco region: what the census and school results say, what a home needs to learn online, and a Python project on the region\'s own quinoa harvest figures.',
  twitterDescription: 'Coding and AI for the Cusco region, live online in English: census, school and internet facts, plus a quinoa data project.',
  pageName: 'Online Coding and AI Classes in the Cusco Region, Peru',
  webPageDescription: 'A guide for families and adults in the Cusco region to live online coding, AI and maths classes taught in English, using INEI census and compendium tables, MINEDU curriculum facts, a GEREDU Cusco news release, EF EPI 2025 and an original Python project on the GERAGRI Cusco agricultural production file (ODC-By).',
  courseDescription: 'Live online coding, AI and maths classes in English for learners in the Cusco region of Peru: Python and AI for children, data science and machine learning for teenagers, and data analysis and automation for adults, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cusco region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#provinces', label: 'Provinces' },
    { href: '#connection', label: 'Getting online' },
    { href: '#results', label: 'School and results' },
    { href: '#quinoa', label: 'Quinoa project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Cusco region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Cusco region',
  lede: 'Cusco\'s children do better than the national average in maths, and its capital has the strongest English of any Peruvian city outside Lima. What holds many families back is a connection. This page lays out the region\'s figures honestly, explains what a home needs for live lessons, matches our courses to each age, and ends with a project on the region\'s quinoa harvest in which the obvious average is wrong by nearly 380 kilos a hectare.',
  secondaryCta: { href: '#quinoa', label: 'See the quinoa project' },
  wa: 'Hello Modern Age Coders, we live in the Cusco region of Peru and are interested in live coding or AI classes in English. Could we try a free class?',
  heroNote: 'Online classes since 2020 &middot; 10,000+ learners worldwide &middot; mentors who slow their English down when asked',
  spec: [
    ['Learners', 'From age 6 through secundaria, university and work'],
    ['Reach', 'Cusco city, the Sacred Valley, the provinces of the south and La Convención'],
    ['What we teach', 'Coding, AI, data and maths'],
    ['Group size', 'Fifteen to twenty, or a single learner'],
    ['When', 'Days and hours the family picks'],
    ['To begin', 'One free class, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Yes: families anywhere in the Cusco region, from Wanchaq and San Sebastián to Sicuani, Urubamba or Quillabamba, can join Modern Age Coders for live online coding, AI and maths classes, all taught in English. Children start with Python and AI projects or Minecraft coding, teenagers move into data science and machine learning, and adults learn data analysis and automation. A mentor teaches every session over video, in a group of fifteen to twenty or one to one, at the days and hours your family chooses.',

  picks: {
    eyebrow: 'Good first steps in Cusco',
    h2: 'Three courses Cusco learners often start with',
    lede: 'Chosen for a region whose pupils already do well in maths: each one turns numbers into something a learner builds. More options for every age follow below.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CUS / 01', title: 'Python and AI for Kids', note: 'Typed Python for children of about 9 to 12, starting from nothing: drawings, small games and simple AI projects. A natural next step for a child who enjoys maths at school.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CUS / 02', title: 'Data Science for Teens', note: 'For teenagers who know a little Python. Real tables, charts and first models, including the kind of weighted average the quinoa project below is built on.' },
      { course: 'data-analysis-mastery-course-college', code: 'CUS / 03', title: 'Data Analysis', note: 'For university students and adults: spreadsheets, SQL, Python and dashboards. Useful in any job that keeps records, from a cooperative\'s harvest book to a hotel\'s bookings.' }
    ]
  },

  sections: [
    {
      id: 'provinces',
      eyebrow: 'The region in figures',
      h2: 'How big is the Cusco region beyond Cusco city?',
      lede: 'Much bigger than the city. INEI\'s 2025 census counted 1,379,251 people in the department of Cusco, across 13 provinces and 71,986.5 square kilometres, and only a little over a third of them live in the province of Cusco itself.',
      body: [
        { kind: 'table', numCols: [1], caption: 'The department of Cusco and its six most populous provinces, Censos Nacionales 2025', head: ['Area', 'Total population, 2025', 'A town in it'], rows: [
          ['Department of Cusco (13 provinces)', '1,379,251', 'Capital: Cusco'],
          ['Province of Cusco', '495,112', 'Cusco, San Sebastián, Santiago, Wanchaq'],
          ['Province of La Convención', '204,096', 'Quillabamba'],
          ['Province of Quispicanchi', '99,354', 'Urcos'],
          ['Province of Canchis', '98,676', 'Sicuani'],
          ['Province of Chumbivilcas', '79,202', 'Santo Tomás'],
          ['Province of Urubamba', '71,256', 'Urubamba, in the Sacred Valley']
        ] },
        { kind: 'source', html: 'Population from INEI\'s 2025 census tables (Indicadores demográficos, Cuadro N° 1, población total); capital and area from the Compendio Estadístico Perú 2026, cuadros 1.7 and 1.8. Seven smaller provinces (Calca, Espinar, Anta, Paucartambo, Canas, Paruro and Acomayo) are not shown. A province is part of the department, so the rows are not meant to be added.' },
        { kind: 'two', mt: true,
          leftH3: 'Cusco city and the towns of 2017',
          left: [
            'The 2017 census, INEI\'s most recent source with city totals, put the city of Cusco at 428,450 people. That city spreads over several districts; the district called Cusco had 102,111 people in 2025 on its own.',
            'INEI\'s 2017 directory of centros poblados lists the pieces separately, each with its altitude: Cusco with 111,930 people at 3,439 metres, San Sebastián with 109,915 at 3,578, Santiago with 92,729 at 3,464, Sicuani with 46,102 at 3,593, Yauri in Espinar with 28,888 at 3,976, and Quillabamba with 23,985 at only 1,086 metres, on the way down to the forest. Each is a single place, never a city total.'
          ],
          rightH3: 'Young people in the 2025 census',
          right: [
            'The census counted 131,405 people aged 6 to 11 in the department and 138,470 aged 12 to 17, the two age bands that match primaria and secundaria most closely.',
            'Those age figures are people counted in person; INEI publishes the department\'s headline total of 1,379,251 with an allowance for people the census missed, so the two are not directly comparable.'
          ] }
      ]
    },
    {
      id: 'connection',
      tint: 'tint',
      eyebrow: 'Getting online',
      h2: 'Is home internet in Cusco good enough for live classes?',
      lede: 'In many homes, yes, but fewer than in the rest of Peru. INEI\'s household survey found an internet service in 40.0% of Cusco households in 2025, against 56.8% nationally, and the share of people using the internet fell from 70.0% in 2024 to 65.7% in 2025.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Computers and internet in the department of Cusco, 2023 to 2025, with Peru in 2025 for comparison (percentages)', head: ['Measure', 'Cusco 2023', 'Cusco 2024', 'Cusco 2025', 'Peru 2025'], rows: [
          ['Households with a computer', '29.4', '33.7', '29.1', '33.9'],
          ['Households with internet service', '37.7', '40.7', '40.0', '56.8'],
          ['People aged 6+ using internet', '66.0', '70.0', '65.7', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, first volume, tables 11.5, 11.6 and 11.13, built from the Encuesta Nacional de Hogares (ENAHO). A one-year fall can be survey noise as much as a real change; we show three years so a single figure is not over-read.' },
        { kind: 'two', mt: true,
          leftH3: 'The region\'s own answer',
          left: [
            'The Gerencia Regional de Educación Cusco knows the gap. On 27 May 2026 it announced CREE, a regional centre for specialised educational resources serving more than 360,000 students, with a virtual platform called PLADEC built, in the office\'s words, to overcome the connectivity gaps that affect rural communities.',
            'GEREDU Cusco describes PLADEC as offline-first, with artificial intelligence built in as an assistant for teachers. That is a school-system tool; our classes are something different, live lessons for families who already have a usable connection at home.'
          ],
          rightH3: 'A practical checklist',
          right: [
            'For a live class you need a connection that holds a video call for about an hour, a laptop or desktop for anything typed, and a quiet corner. A tablet with a keyboard is enough for younger children.',
            'If your signal drops in the evening, choose a morning slot, when Cusco mornings line up with the Indian evening. If the connection is shared with siblings doing homework, one to one at an agreed hour is often easier than a group. We would rather tell you honestly at the free class than sell a course your connection cannot carry.'
          ] }
      ]
    },
    {
      id: 'results',
      eyebrow: 'School and results',
      h2: 'Do Cusco schools teach coding, and how do pupils do in maths?',
      lede: 'They do not teach coding as a subject: Cusco follows the national curriculum, which has no computing area. In maths, though, Cusco\'s pupils finished above the national average on the 2025 national assessment, in both grades tested.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Pupils at the satisfactory level, 2025 national assessment (percent of pupils assessed)', head: ['Grade', 'Maths, Cusco', 'Maths, Peru', 'Reading, Cusco', 'Reading, Peru'], rows: [
          ['4° de primaria', '38.2', '30.0', '37.8', '32.7'],
          ['2° de secundaria', '16.9', '12.7', '21.9', '18.5']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, tables 5.53 and 5.54, reporting MINEDU\'s Unidad de Medición de la Calidad Educativa. School enrolment and teacher figures in the text come from tables 5.16, 5.22 and 5.75 of the same volume.' },
        { kind: 'two', mt: true,
          leftH3: 'Where coding is missing',
          left: [
            'The national curriculum, the CNEB, puts digital skills in competency 28, "Se desenvuelve en entornos virtuales generados por las TIC", which is transversal: every subject is meant to use it, but no subject owns it. The regular secundaria week gives Matemática 4 hours and Inglés 3, and has no computing or programming area at all.',
            'MINEDU\'s Python pilot, Fábrica de Programadores, began in July 2025 with 1,000 pupils of 4° and 5° de secundaria in Lima Norte. It has not reached Cusco, so a Cusco teenager who wants the same path learns it outside school.'
          ],
          rightH3: 'The size of the school system',
          right: [
            'In 2025 Cusco had 121.3 thousand pupils in public primaria and 99.9 thousand in public secundaria, with 27,832 teachers across all levels and sectors. Across the country, 6,225,000 students and 53,631 schools started the year on 16 March 2026.',
            'Primaria lasts six years and secundaria five, under Law 28044, and MINEDU places children in a grade by their age on 31 March, so a six year old by that date starts 1° de primaria.'
          ] },
        { kind: 'p', mt: true, html: 'Strong maths results are a good reason to add coding, not to skip it. A pupil who is already comfortable with fractions and proportion is exactly the pupil who enjoys turning them into programs, and who is ready for the national contests: the ONEM for maths, whose 2026 school stage ran on 8 July 2026 with ten questions in two hours, and the OPI for programming, which UTEC runs free for every secundaria student and whose 2025 final banned generative AI. Students enter both through the organisers\' own routes; we are not connected with either. For an English-language view of school maths, see our <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">maths teachers in English for Peru</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. All our teaching is in English, live and online. Mentors are based in India; they speak clearly, slow down when asked, and adapt to each learner.',
      body: [
        { kind: 'two',
          leftH3: 'Cusco\'s English in figures',
          left: [
            'EF\'s English Proficiency Index 2025 scores Cusco city 520, in its moderate band. Among the Peruvian cities EF lists, only Lima, at 555, scores higher; Trujillo follows with 519 and Arequipa with 512. EF\'s score for the Cusco region as a whole is 504, also moderate.',
            'A moderate score means a learner can usually follow a clear explanation and needs practice producing English, not just hearing it. EF also finds speaking is Peru\'s weakest skill, so mentors leave plenty of room for learners to talk.'
          ],
          rightH3: 'How the lessons work in English',
          right: [
            'Each lesson is mostly building on a shared screen. The mentor explains a step in short sentences, the learner tries it, and the conversation is about what the program did. Words like loop, list and average become familiar quickly because they are used, not memorised.',
            'If a learner answers in Spanish, the mentor understands and replies with the English phrase. Families who want a Spanish summary of the approach can share our page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.'
          ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Choosing a course',
      h2: 'What should a Cusco learner study first?',
      lede: 'Start from what the learner already enjoys. The ages are ours and only a guide; the free class settles the level.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested starting points for learners in the Cusco region (our recommendations)', head: ['If the learner is...', 'Roughly', 'Start with', 'Then'], rows: [
          ['A young child who likes games', '6 to 9', 'Minecraft or Scratch coding', 'Python and AI for Kids'],
          ['A primaria pupil who likes maths', '9 to 12', 'Python and AI for Kids', 'Maths-heavy projects with real data'],
          ['A secundaria student curious about AI', '13 to 17', 'Vibe coding with Python and AI, or AI and ML for teens', 'Data science'],
          ['A secundaria student who loves numbers', '14 to 18', 'Data Science for Teens', 'Statistics, machine learning'],
          ['A university student or adult at work', '18 and over', 'Data analysis', 'Automation with Python, generative AI']
        ] },
        { kind: 'p', mt: true, html: 'Students at UNSAAC, the Universidad Nacional de San Antonio Abad del Cusco, which had 21,697 undergraduates in 2025 according to INEI\'s compendium, and at the Universidad Nacional Intercultural de Quillabamba, with 1,147, join adult groups at hours that fit around lectures. For engineering students specifically, our page on <a class="ag-inline-link" href="/python-para-estudiantes-de-ingenieria-peru">Python para estudiantes de ingeniería</a> goes into more detail.' }
      ]
    },
    {
      id: 'quinoa',
      tint: 'tint',
      eyebrow: 'A real Cusco project',
      h2: 'What is the average quinoa yield in the Cusco region?',
      lede: 'The regional agriculture office publishes its crop figures, district by district, as open data. Our students use the quinoa rows to learn something that catches out adults too: the average of 84 districts\' yields is not the yield of the region.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file is "Producción Agrícola periodos 2023 al 2025 en la Región de Cusco", released by the Gerencia Regional de Agricultura Cusco (GERAGRI) on the Plataforma Nacional de Datos Abiertos. Its licence is ODC-By, the Open Data Commons Attribution Licence, which allows reuse with credit. We downloaded it on 9 November 2026.',
            'It has 3,672 rows covering 75 crops in two farming seasons, 2023-2024 and 2024-2025. Each row gives a district, a crop, the hectares sown and harvested, the tonnes produced, and a yield column, Rendimiento, in kilograms per hectare.'
          ],
          rightH3: 'The question',
          right: [
            'Quinoa is grown in 84 districts in the 2023-2024 season. A student wants one number: how many kilograms does a hectare of quinoa give in the Cusco region?',
            'The first idea is natural. There is already a yield column, so take the 84 yields and average them.'
          ] },
        { kind: 'code', label: 'Version 1: average the district yields', lang: 'Python', code: V1, note: 'It prints <code>Districts growing quinoa: 84</code> and <code>Average yield, kg per hectare: 1494.2</code>.' },
        { kind: 'p', mt: true, html: 'That average treats every district as equal. A district that harvested two hectares counts exactly as much as one that harvested five hundred. But a hectare in a big quinoa district is just as much a hectare as one in a small district, so the honest regional yield is all the quinoa produced divided by all the land it came from.' },
        { kind: 'code', label: 'Version 2: total production divided by total harvested area', lang: 'Python', code: V2, note: 'It prints <code>Harvested: 2469.0 ha, produced: 4624.3 t</code>, <code>Yield of the region, kg per hectare: 1873.0</code> and <code>Biggest grower: (525.0, \'COLQUEMARCA\', 3230.48)</code>.' },
        { kind: 'p', mt: true, html: 'The answer rises from 1,494.2 to 1,873.0 kilograms per hectare, a difference of almost 380. The reason is in the last line. Colquemarca, in the province of Chumbivilcas, harvested 525 of the region\'s 2,469 hectares, more than a fifth, at a yield of 3,230 kilograms per hectare. In Version 1 it was one district in 84; in Version 2 it carries the weight of its land. Neither number is a lie. They answer different questions: "what does a typical district get?" and "what does a typical hectare give?"' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Quinoa in the 2023-2024 season by province, five largest by harvested area (our calculation)', head: ['Province', 'Districts', 'Hectares harvested', 'Tonnes', 'kg per hectare'], rows: [
          ['Chumbivilcas', '8', '757', '2,419.0', '3,195.5'],
          ['Espinar', '7', '456', '291.5', '639.3'],
          ['Anta', '9', '386', '774.0', '2,005.2'],
          ['Calca', '6', '241', '324.4', '1,346.3'],
          ['Quispicanchi', '10', '150', '189.7', '1,264.7']
        ] },
        { kind: 'source', html: 'Data: GERAGRI Cusco, Producción Agrícola periodos 2023 al 2025 en la Región de Cusco, on the Plataforma Nacional de Datos Abiertos, licence ODC-By. The sums and ratios are ours, from the 2023-2024 quinoa rows. The file is Latin-1 encoded with semicolons between fields, so it must be opened with <code>encoding="latin-1"</code> and <code>delimiter=";"</code>.' },
        { kind: 'p', mt: true, html: 'There is a second lesson in the same file, and it is the reason we only used 2023-2024. Yield should equal production divided by area, so a careful student checks it on every row before trusting the column.' },
        { kind: 'code', label: 'A check: does the yield column equal production divided by area?', lang: 'Python', code: CHECK, note: 'It prints <code>2023-2024 rows checked: 1778 yield disagrees: 0</code> and <code>2024-2025 rows checked: 1770 yield disagrees: 1770</code>.' },
        { kind: 'p', mt: true, html: 'In 2023-2024 the columns agree on every harvested row. In 2024-2025 they disagree on every single one, by more than 1%. We do not know why, and the page does not guess: the data dictionary may describe a different unit, or the columns may have shifted. Until the publisher explains it, the 2024-2025 yields are left out of anything we teach as a result. Checking that the numbers agree with each other is part of the job, not an extra.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 9, with beans.</strong> One bag holds 2 handfuls of beans from 1 small pot; another holds 30 handfuls from 10 pots. What is the "average per pot" if you average the bags, and if you count all the pots together?',
          '<strong>Scratch, around 9 to 11.</strong> Store three districts\' hectares and tonnes in two lists, then show both averages side by side on the stage.',
          '<strong>First Python, around 11 to 13.</strong> Run Version 1 and Version 2 and write one sentence for each saying what question it answers.',
          '<strong>Ages 13 and over.</strong> Repeat both versions for potatoes or maize amiláceo in 2023-2024. Which crop shows the biggest gap between the two averages, and why?',
          '<strong>Going further.</strong> Read the GERAGRI data dictionary and propose an explanation for the 2024-2025 yields, then test it against the rows before believing it.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When could a Cusco learner have classes?',
      lede: 'At any hour that suits the family. Cusco runs on Peru time, five hours behind UTC throughout the year, and the mentor adjusts.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample conversions from Cusco to the mentor\'s clock in India (a conversion aid, not a timetable)', head: ['Cusco (Peru time)', 'Mentor (India time)', 'Note'], rows: [
          ['07:30', '18:00', 'Evening in India'],
          ['09:30', '20:00', 'Evening in India'],
          ['12:00', '22:30', 'Late evening in India'],
          ['15:30', '02:00', 'India is already on the next day'],
          ['19:00', '05:30', 'India is already on the next day']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5, no daylight saving since 1994 (tz database, America/Lima). India: UTC plus 5:30, no daylight saving. The difference is 10 hours 30 minutes every day of the year.' },
        { kind: 'p', mt: true, html: 'Because the gap never shifts, a time chosen once stays the same through the Peruvian summer break and the school year that follows. You book in Cusco time; the mentor sees the India time on their side. Mornings suit families whose connection is busier in the evening; afternoons suit teenagers after colegio. Our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">national guide for Peru</a> has a fuller time table and an index of every Peru page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a Cusco learner progresses, from first program to sound analysis',
    lede: 'Six milestones of our own, shared by every age group. They help us place a new learner and give families something concrete to look for.',
    table: { caption: 'Our milestones, from first instructions to weighted averages', head: ['Milestone', 'Often reached at', 'Evidence the learner shows'], rows: [
      ['1. Instructions', '6 to 7', 'A character that follows a short script of steps'],
      ['2. Loops and events', '7 to 9', 'A game that repeats and responds to the player'],
      ['3. Lists', '8 to 11', 'A program that stores many values and finds the largest'],
      ['4. Python', '9 to 12', 'Typed code with functions the learner can explain'],
      ['5. Real files', '12 to adult', 'A program that reads a published data file and totals it'],
      ['6. Fair summaries', '13 to adult', 'A weighted figure, with a check that the inputs agree']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestones 5 and 6 are the quinoa project: reading a real regional file and choosing the summary that answers the question asked.',
      'Progress is reported as finished work the learner can show you.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you average, ask what each row stands for.',
      'If a column is supposed to be calculated from two others, calculate it yourself and compare.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in the Cusco region',
    lede: 'Three bands, from primaria to working life. Each runs live in English with one mentor throughout, in a group or individually.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Primaria', courses: [
        { code: 'CUS / KIDS / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks first, then real code, inside a world children already love.' },
        { code: 'CUS / KIDS / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking a problem into steps, before and alongside coding.' },
        { code: 'CUS / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, for ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Secundaria', courses: [
        { code: 'CUS / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'From Python to models that learn from examples.' },
        { code: 'CUS / TEEN / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building with AI help while understanding every line, ages 13 to 17.' },
        { code: 'CUS / TEEN / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Averages, weights, spread and chance, done properly.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'CUS / ADULT / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and machine learning for university and work.' },
        { code: 'CUS / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that do the repetitive work, with applied AI.' },
        { code: 'CUS / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Language models, retrieval and agents, built and tested.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'Live lessons from Cusco, step by step',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Cusco mornings', l: 'They fall in the Indian evening, often the quietest time for a home connection.' },
      { time: 'After colegio', l: 'Afternoon and evening slots for secundaria students.' },
      { time: '1-on-1', l: 'A private time agreed between you and the mentor.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One person who follows the learner\'s progress.' },
      { h3: 'Clear English', p: 'Short sentences, key words in the chat, time to think.' },
      { h3: 'Learner at the keyboard', p: 'The student writes and fixes the code.' },
      { h3: 'Groups by age', p: 'Children, teenagers and adults learn separately.' },
      { h3: 'Progress you can see', p: 'Finished projects reported to the family.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Work our older students have shipped',
  projectsLede: 'Learners who keep going build real tools. A selection is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reviews left on Google by parents and students, unedited.',

  fees: {
    h2: 'Fees for learners in the Cusco region',
    lede: 'Every plan is billed monthly in US dollars to a card. Your bank changes the amount into soles at its own exchange rate, so the soles total can vary slightly from one month to the next.',
    free: ['A free trial lesson', 'A first program and a short puzzle', 'No card required'],
    group: ['Fifteen to twenty learners of similar age', 'One regular mentor', 'Two live lessons a week', 'Monthly, cancel when you like'],
    one: ['One learner with one mentor', 'A plan shaped around the learner', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Cusco families ask',
    h2: 'Coding and AI classes in the Cusco region: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every lesson is in English, live and online. Mentors speak plainly, slow down on request and get used to each learner\'s accent; a learner who answers in Spanish is understood and given the English words.' },
      { q: 'Can we take classes from outside Cusco city?', a: 'Yes. A learner in Sicuani, Urubamba, Quillabamba, Yauri or any other town joins exactly as one in Cusco city does, provided the home connection can hold a video call for about an hour.' },
      { q: 'Is our internet fast enough?', a: 'Try it in the free class. In 2025 INEI found an internet service in 40.0% of Cusco households, so it varies a lot by area. A laptop or desktop is best for typed coding; if evenings are slow, choose a morning slot.' },
      { q: 'What age can my child start?', a: 'Six, with block coding such as Scratch or Minecraft, which needs no typing. Typed Python usually starts around nine. Teenagers and adults can start from zero at any point.' },
      { q: 'Do schools in Cusco teach programming?', a: 'Not as a subject. The national curriculum treats digital skills as part of every area, and the secundaria timetable has no computing subject, though Cusco pupils scored above the national average in maths in 2025.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is 10 hours 30 minutes behind India all year, so 09:30 in Cusco is 20:00 for the mentor.' },
      { q: 'Can UNSAAC students and working adults join?', a: 'Yes. University students and adults have their own groups, usually starting with data analysis or Python and moving on to automation or generative AI, at hours around lectures or work.' },
      { q: 'Do you prepare students for the ONEM or the OPI?', a: 'We build the reasoning both contests reward, with problems we write ourselves and never the organisers\' papers. Students enter through their school for the ONEM and through UTEC for the OPI. We are not connected with MINEDU, UTEC or either contest.' },
      { q: 'How much does it cost, and in what currency?', a: 'Plans are monthly and shown here in US dollars, charged by card in dollars; your bank converts them to soles. Visitors browsing from India see rupees. The first lesson is free.' },
      { q: 'Is there a certificate?', a: 'Some courses end with our own certificate of completion. It is not a Peruvian school or university qualification and is not issued or endorsed by MINEDU, a UGEL, GEREDU Cusco or any school.' },
      { q: 'What is the quinoa project?', a: 'An original Python lesson on the GERAGRI Cusco crop file: averaging 84 district yields gives 1,494.2 kg per hectare, while total production over total area gives 1,873.0, because one district, Colquemarca, harvests over a fifth of the land.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Cusco families and adult learners.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national overview, with every Peru page listed.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'The southern neighbour, and its own data project.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Small AI builds children can understand.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live lessons.' }
    ]
  },

  start: {
    h2: 'Book a free trial lesson from Cusco',
    lede: 'The trial is a short puzzle and a first working program. It also tests your connection, and shows the mentor how easily the learner follows spoken English, so the course suggested afterwards is realistic.',
    readFirst: 'If you would rather read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson from start to finish and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'Lessons are live online, with mentors in India, and always in English. The quickest reply comes on WhatsApp, in English.',
    formNote: 'No cost, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI in Peru' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa' },
        { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para ingeniería' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Weight each district by its hectares'
  },

  personalityCss: `
.ag-root.ag-cav .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-cav .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-cav .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cav .ag-table th { text-transform: uppercase; letter-spacing: 0.03em; font-size: 0.82rem; }
.ag-root.ag-cav .ag-code-head b { font-weight: 700; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017 (dpto08), Compendio Estadístico Perú 2026 (cuadros 1.7, 1.8, 5.16, 5.22, 5.53, 5.54, 5.66, 5.75, 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores; GEREDU Cusco news of 27 May 2026; ONEM 2026 and OPI sources; EF EPI 2025; tz database. Data: GERAGRI Cusco, Producción Agrícola periodos 2023 al 2025, ODC-By.',
    localProject: 'What is the average quinoa yield in the Cusco region? An original Python project on the GERAGRI Cusco crop file (ODC-By): Version 1 averages 84 district yields for 2023-2024 and prints 1494.2 kg per hectare; Version 2 divides 4,624.3 t by 2,469.0 ha and prints 1873.0, because Colquemarca harvests 525 ha at 3,230.48; a check shows the yield column agrees with production over area on all 1,778 rows of 2023-2024 and on none of the 1,770 rows of 2024-2025. Lesson family: average of ratios versus ratio of totals; check a derived column.',
    requiredMentions: ['DataSet_Estadistica_Agricola_2023_2024_2025.csv', 'Average yield, kg per hectare: 1494.2', 'Yield of the region, kg per hectare: 1873.0', 'yield disagrees: 1770', '1,379,251', '428,450', '138,470', 'Cusco city 520', 'Weight each district by its hectares'],
    sources: [
      { claim: 'Department and province populations of Cusco, 2025, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cusco city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Single centros poblados of Cusco with altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto08.xlsx' },
      { claim: 'Area, computers, internet, assessment results, enrolment, teachers and university enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'CREE and the PLADEC offline-first platform, more than 360,000 students.', url: 'https://www.gob.pe/institucion/regioncusco-geredu/noticias/1398354-proyecto-educativo-cree-en-beneficio-de-360000-estudiantes' },
      { claim: 'GERAGRI Cusco agricultural production file and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/producci%C3%B3n-agr%C3%ADcola-periodos-2023-al-2025-en-la-regi%C3%B3n-de-cusco-geragri' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 scores for Cusco city, the Cusco region, Lima, Trujillo and Arequipa.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI organiser, cost and 2025 rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any explanation of the 2024-2025 yield column: the file does not say, so the page reports the mismatch and stops there.',
      'A 2025 population for Cusco city: INEI has no 2025 city figure; the 2017 conglomerate figure is labelled as such.',
      'Adding provinces, districts or centros poblados into a Cusco total: never summed.',
      'The CREE investment amount in soles: not reproduced (no soles figures on Peru pages).',
      'Spanish-language teaching: every class is in English.',
      'Any connection with MINEDU, GEREDU Cusco, GERAGRI, UNSAAC, UTEC, the ONEM or any school: none.',
      'Claims about tourism employment or English use in tourism beyond EF\'s scores: not sourced, kept general.'
    ]
  }
};
