// SHIP: region | Puno: Juliaca and Puno on the altiplano, top maths, thin home internet | combine columns with max() and read the data dictionary before counting
'use strict';
// Puno region (ag- region page, Peru cluster row PE168, P5; alloc: regions, cax, #503807). Written 2026-11-09.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors.
// Spine: Puno's primaria pupils post the strongest maths result of any region on this writer's list, but only about a
// quarter of its households had an internet service in 2025 and EF rates the region's English very low. The page is
// frank about both, explains who online classes in English can realistically serve, and teaches with OSIPTEL's mobile
// coverage file, where reading one column says Puno city has little 4G and reading all four says it is fully covered.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/<slug>/ and pe/src/inei):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv; tab/tsv_ind_00/sheet2): PUNO
//    1232993 total (censada 1169970); provinces SAN ROMÁN 314679, PUNO 219267, AZÁNGARO 120983, CHUCUITO 99813, CARABAYA
//    76742, EL COLLAO 73980, MELGAR 72911, HUANCANÉ 61978, SANDIA 52499, LAMPA 47938, YUNGUYO 37465, SAN ANTONIO DE PUTINA
//    33333, MOHO 21405; districts JULIACA 220379, PUNO 125636. 13 provinces; capital Puno (Compendio 2026 cuadro 1.8).
//  - Same tabulado, Cuadro N° 3 (sheet4): PUNO censada "100965" aged 6 to 11 and "112234" aged 12 to 17.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Puno city 128,637 (2017, conglomerate). INEI Lib1541 dpto21.xlsx (2017):
//    JULIACA 217 743 at "3 877" m (single centro poblado; the adjoining San Miguel CP, 58,367, is not added); PUNO
//    125 018 at "3 848" m.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 1.7 "Puno 66 963,7" km2; 11.5 households with a computer Puno 2025
//    "21,4" (Total 33,9); 11.6 households with internet Puno 2025 "24,8" (Total 56,8), 2015 "5,7"; 11.13 people aged 6+
//    using internet Puno 2025 "69,1" (Total 81,1); 5.53 2025 4° primaria satisfactory maths "42,1" (Total 30,0), reading
//    34,1 (32,7); 5.54 2025 2° secundaria maths 15,8 (12,7), reading 17,4 (18,5); 5.16 public primaria 2025 "93,9"
//    thousand; 5.22 public secundaria "84,7"; 5.75 teachers 2025 "27 116"; 5.66 Universidad Nacional del Altiplano 2025
//    "20 419", Universidad Nacional de Juliaca "3 992".
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): stateScore puno "very-low" 417; Peru 519; Lima city 555 high.
//    EF lists no Puno city score.
//  - National (verified raw copies under pe/facts-school/src): Ley 28044; Edades normativas; CNEB competency 28 and
//    secundaria hours; MINEDU 16 March 2026 "53 631 colegios ... 6 225 000 estudiantes"; ONEM 2026 school stage
//    "miércoles 08 de Julio", "NIVEL 1: 1° y 2° grado ... NIVEL 3: 5°", "ALFA: Estudiantes de IIEE públicas BETA:
//    Estudiantes de IIEE privadas", ten items, two hours; El Peruano 11/10/2026 national stage at Huampaní, 237 students.
//  - Time: tzdata America/Lima UTC-5 (last Peru rule 1994); Asia/Kolkata UTC+5:30; India 10 h 30 min ahead all year.
//  - Data: Organismo Supervisor de Inversión Privada en Telecomunicaciones (OSIPTEL), "PORCENTAJE DE COBERTURA MÓVIL POR
//    CENTRO POBLADO, EMPRESA OPERADORA Y TECNOLOGÍA", Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/
//    dataset/porcentaje-de-cobertura-m%C3%B3vil-por-centro-poblado-empresa-operadora-y-tecnolog%C3%ADa, licence "Open Data
//    Commons Attribution License" (dc:license on the raw page), modified 2025-08-06. Dictionary: CG = "Cobertura Garantizada",
//    CAR = "Capacidad Adicional de Red"; value = "porcentaje de intersección entre la huella ... y el área del CCPP";
//    "Información al 2024-IV, actualizada a mayo de 2025"; "Información remitida por las empresas operadoras". The
//    dictionary names the fourth operator's columns "Telefonica_..."; the file header says "Integratel_...". File saved as
//    cobertura-movil-centro-poblado.csv, 18,750,153 bytes, sha256 ffb9d0fd...6f1294a1f9, 108,115 rows, Latin-1, ';'.
// Our own calculations (scratchpad pe/r2/puno/v1.py, v2.py, v3.py; python3 -I on the downloaded file):
//  v1 prints: Column read: Bitel_4G_CG / Puno places in the file: 10544 / Half or more under 4G: 299
//  v2 prints: Columns read: ['Bitel_4G_CG', 'Claro_4G_CG', 'Entel_4G_CG', 'Integratel_4G_CG'] / URBANO places: 164 half
//    or more under 4G: 65 / RURAL places: 10380 half or more under 4G: 392 / Total covered: 457 of 10544
//  v3 prints: Footprint _4G_CG places half or more covered: 457 / Footprint _4G_CG+CAR places half or more covered: 5304
//  Rows: Puno city 4G_CG 27%, 25%, 2.52%, 100%; Juliaca 32%, 25%, 1.71%, 100%.
//  By province (places, CG >= 50, CG+CAR >= 50): Puno 1519, 103, 1039; Carabaya 1440, 10, 392; Melgar 1285, 18, 528;
//  Lampa 1282, 6, 291; Azángaro 1056, 53, 744; San Román 304, 34, 272; Yunguyo 259, 67, 253.
// Lesson family: one place, several columns: combine them with max() before counting, and let the data dictionary decide
// which column answers your question (guaranteed footprint vs with additional capacity).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'def pct(text):',
  '    return float(text.strip().rstrip("%"))',
  '',
  'places = 0',
  'covered = 0',
  'with open("cobertura-movil-centro-poblado.csv", encoding="latin-1") as data:',
  '    reader = csv.DictReader(data, delimiter=";")',
  '    reader.fieldnames = [name.strip() for name in reader.fieldnames]',
  '    first_4g = [name for name in reader.fieldnames if "_4G_CG" in name][0]',
  '    for place in reader:',
  '        if place["Departamento"] == "PUNO":',
  '            places += 1',
  '            if pct(place[first_4g]) >= 50:',
  '                covered += 1',
  '',
  'print("Column read:", first_4g)',
  'print("Puno places in the file:", places)',
  'print("Half or more under 4G:", covered)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'def pct(text):',
  '    return float(text.strip().rstrip("%"))',
  '',
  'places = {"URBANO": 0, "RURAL": 0}',
  'covered = {"URBANO": 0, "RURAL": 0}',
  'with open("cobertura-movil-centro-poblado.csv", encoding="latin-1") as data:',
  '    reader = csv.DictReader(data, delimiter=";")',
  '    reader.fieldnames = [name.strip() for name in reader.fieldnames]',
  '    all_4g = [name for name in reader.fieldnames if name.endswith("_4G_CG")]',
  '    for place in reader:',
  '        if place["Departamento"] == "PUNO":',
  '            kind = place["Clasificacion"]',
  '            top = max(pct(place[name]) for name in all_4g)     # the strongest operator',
  '            places[kind] += 1',
  '            if top >= 50:',
  '                covered[kind] += 1',
  '',
  'print("Columns read:", all_4g)',
  'for kind in places:',
  '    print(kind, "places:", places[kind], "half or more under 4G:", covered[kind])',
  'print("Total covered:", sum(covered.values()), "of", sum(places.values()))'
].join('\n');

const V3 = [
  'import csv',
  '',
  'def pct(text):',
  '    return float(text.strip().rstrip("%"))',
  '',
  'counts = {}',
  'with open("cobertura-movil-centro-poblado.csv", encoding="latin-1") as data:',
  '    reader = csv.DictReader(data, delimiter=";")',
  '    reader.fieldnames = [name.strip() for name in reader.fieldnames]',
  '    for footprint in ("_4G_CG", "_4G_CG+CAR"):',
  '        counts[footprint] = 0',
  '    columns = {fp: [n for n in reader.fieldnames if n.endswith(fp)] for fp in counts}',
  '    for place in reader:',
  '        if place["Departamento"] == "PUNO":',
  '            for fp, names in columns.items():',
  '                if max(pct(place[n]) for n in names) >= 50:',
  '                    counts[fp] += 1',
  '',
  'for fp, n in counts.items():',
  '    print("Footprint", fp, "places half or more covered:", n)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'Puno region' },
  slug: 'online-coding-and-ai-classes-puno-region-peru',
  code: 'cax',
  accent: '#503807',
  accentRationale: 'Puno region: a deep totora-reed brown #503807, the colour of the reed boats and islands of Lake Titicaca, allocated to this row; contrast 10.37 on #FBF8F2, 9.75 on #F5F1E8 and 8.92 on #EDE7DA, all far above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, Puno region, Peru',
  title: 'Online Coding and AI Classes, Puno Region, Peru',
  description: 'Online coding, AI and maths classes in English for Puno and Juliaca, live with a mentor: census and school facts, home internet, and a mobile coverage data project.',
  ogDescription: 'Live coding, AI and maths in English for learners across the Puno region, from Juliaca and Puno city to the provinces: strong primaria maths results, the honest internet picture, who English-taught classes suit, and a Python project on OSIPTEL\'s 4G coverage file.',
  twitterDescription: 'Puno and Juliaca: live online coding and AI in English, with school, census and internet facts and a 4G coverage data project.',
  pageName: 'Online Coding and AI Classes in the Puno Region, Peru',
  webPageDescription: 'A guide for families and adult learners in the Puno region to live online coding, AI and maths classes taught in English, drawing on INEI census and compendium tables, MINEDU curriculum and ONEM facts, EF EPI 2025, and an original Python project on OSIPTEL\'s open file of mobile coverage by centro poblado (ODC-By).',
  courseDescription: 'Live online coding, AI and maths classes in English for learners in the Puno region of Peru: Scratch and problem solving for children, olympiad maths, C++ and Python for teenagers, and Python and algorithms for university students and adults, one to one or in a group of fifteen to twenty, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Puno region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#altiplano', label: 'The region' },
    { href: '#maths', label: 'Maths results' },
    { href: '#coverage', label: '4G project' },
    { href: '#english', label: 'English' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Puno region &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Online coding and AI classes in the Puno region',
  lede: 'In 2025, more of Puno\'s 4° de primaria pupils reached the satisfactory level in maths than in Peru as a whole, by a wide margin. Fewer Puno homes have an internet service than almost anywhere else. This page puts both facts side by side, says plainly who our English-taught live classes can serve well from Juliaca, Puno and the provinces, and closes with a project on mobile coverage where reading one column makes Puno city look nearly unconnected.',
  secondaryCta: { href: '#coverage', label: 'See the 4G coverage project' },
  wa: 'Hello Modern Age Coders, we are in the Puno region of Peru (Juliaca or Puno) and would like to try live coding, AI or maths classes in English. Is a free class possible?',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 students worldwide &middot; slow, clear English on request',
  spec: [
    ['For', 'Children from 6, teenagers, students and adults'],
    ['Towns', 'Juliaca, Puno and every province, from home'],
    ['Subjects', 'Coding, AI and competition maths'],
    ['Class size', 'One to one, or fifteen to twenty'],
    ['Timing', 'Set by the family, any day'],
    ['Start', 'A free class, no card details']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Yes. Modern Age Coders teaches live online coding, AI and maths classes in English to learners anywhere in the Puno region, whether in Juliaca, Puno city, Ilave or Azángaro. Children begin with Scratch and problem-solving puzzles, teenagers can take olympiad maths, Python or C++, and university students and adults learn Python and algorithms. A mentor teaches each session over video, one to one or in a group of fifteen to twenty, at hours the family chooses. A home connection that can carry a video call is the one firm requirement.',

  picks: {
    eyebrow: 'Puno starting points',
    h2: 'Three courses that suit learners in the Puno region',
    lede: 'Picked for a region with strong primaria maths: a first coding course, a contest maths course, and a certification path in Python. Every age has more options below.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PUN / 01', title: 'Scratch Coding for Kids', note: 'A first coding course built around games. Children drag and snap blocks, so the early weeks need very little typing and very little English vocabulary.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'PUN / 02', title: 'Maths Olympiad and Competition', note: 'For secundaria students who already enjoy maths and want harder problems: careful reading, proof-like reasoning and checking, the habits the ONEM rewards. Our problems, not the organiser\'s.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PUN / 03', title: 'PCEP and PCAP Python', note: 'From about 13 to adult. Python fundamentals aimed at the PCEP and PCAP exams, the same entry certificate MINEDU\'s Lima Norte pilot points its pupils towards.' }
    ]
  },

  sections: [
    {
      id: 'altiplano',
      eyebrow: 'The region in figures',
      h2: 'Who lives in the Puno region, and is Juliaca bigger than Puno?',
      lede: 'The 2025 census counted 1,232,993 people in the department of Puno, over 66,963.7 square kilometres of altiplano and Amazon slope. The capital is the city of Puno, but the province of San Román, home to Juliaca, is the more populous one.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Puno: the department, its largest provinces and its two main districts, 2025 census', head: ['Place', 'Population, 2025', 'Kind of unit'], rows: [
          ['Department of Puno', '1,232,993', '13 provinces; capital Puno'],
          ['Province of San Román', '314,679', 'Province; includes Juliaca'],
          ['Province of Puno', '219,267', 'Province; includes Puno city'],
          ['Province of Azángaro', '120,983', 'Province'],
          ['Province of Chucuito', '99,813', 'Province; includes Juli'],
          ['District of Juliaca', '220,379', 'District'],
          ['District of Puno', '125,636', 'District']
        ] },
        { kind: 'source', html: 'Population: total counts from the first table (Cuadro N° 1) of INEI\'s demographic indicators for the 2025 census, reference day 15 September 2025. Area and capital: INEI\'s 2026 compendium, cuadros 1.7 and 1.8. Districts lie inside provinces and provinces inside the department, so no row is added to another.' },
        { kind: 'two', mt: true,
          leftH3: 'Two cities, 2017 figures',
          left: [
            'INEI has not yet released city figures from the 2025 census. In 2017, it counted 128,637 people in the city of Puno. For Juliaca the published figure is for one centro poblado, the town itself: 217,743 people at 3,877 metres above sea level. A neighbouring centro poblado in the district of San Miguel is listed separately, and we do not add the two together.',
            'INEI\'s 2017 directory puts the centro poblado of Puno at 3,848 metres, beside Lake Titicaca. Both sit well above Cusco, whose centro poblado the same directory places at 3,439 metres.'
          ],
          rightH3: 'Children and teenagers today',
          right: [
            'The 2025 census counted 100,965 people aged 6 to 11 in the department of Puno, and 112,234 aged 12 to 17. Those bands match the ages of primaria and secundaria.',
            'They are counts of people actually interviewed, so they sit slightly below what a share of the 1,232,993 headline total, which includes INEI\'s estimate of people missed, would give.'
          ] },
        { kind: 'p', mt: true, html: 'Other towns families mention, such as Ilave, Juli, Azángaro, Ayaviri or Yunguyo, are smaller, and many learners in the region live in rural centros poblados. That matters for this page, because a live online class depends on a connection, and in Puno that is the real question. Universities are a different story: INEI\'s compendium counts 20,419 undergraduates at the Universidad Nacional del Altiplano and 3,992 at the Universidad Nacional de Juliaca in 2025, a large pool of young adults within reach of an online class.' }
      ]
    },
    {
      id: 'maths',
      tint: 'tint',
      eyebrow: 'Maths results',
      h2: 'How well do Puno pupils do in maths?',
      lede: 'Very well in primaria. On the 2025 national assessment, 42.1% of Puno\'s 4° de primaria pupils reached the satisfactory level in maths, against 30.0% nationally. In 2° de secundaria the region also finished above the national figure.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Maths and reading at the satisfactory level, 2025 national assessment, Puno and Peru (percent of pupils assessed)', head: ['Grade and subject', 'Puno', 'Peru'], rows: [
          ['4° de primaria, maths', '42.1', '30.0'],
          ['4° de primaria, reading', '34.1', '32.7'],
          ['2° de secundaria, maths', '15.8', '12.7'],
          ['2° de secundaria, reading', '17.4', '18.5']
        ] },
        { kind: 'source', html: 'Results published by MINEDU\'s assessment office (UMC) and reproduced in INEI\'s 2026 statistical compendium, first volume, as tables 5.53 (4° de primaria) and 5.54 (2° de secundaria).' },
        { kind: 'two', mt: true,
          leftH3: 'What that means for a family',
          left: [
            'A child who already reasons well with numbers is ready for more than the timetable offers. Peru\'s national curriculum, the CNEB, has no computing area at all: digital skills are a transversal competency spread across subjects, and the regular secundaria week holds 4 hours of Matemática and 3 of Inglés but nothing on programming.',
            'The drop between primaria and secundaria is national, not just Puno\'s: 30.0% of 4° de primaria pupils across Peru were satisfactory in maths in 2025, against 12.7% in 2° de secundaria. Keeping a strong primaria pupil stretched through the first years of secundaria is where outside practice helps most.'
          ],
          rightH3: 'The ONEM route',
          right: [
            'Secundaria students enter the national school maths olympiad, the ONEM, through their colegio. In 2026 the school stage took place on Wednesday 8 July 2026, with level 1 for 1° and 2°, level 2 for 3° and 4°, and level 3 for 5° de secundaria, and separate Alfa and Beta categories for public and private schools. The paper had ten questions and two hours.',
            'Winners move up through the UGEL and regional stages; the 2026 national stage was held on 11 October 2026 at Huampaní with 237 finalists. We prepare students with our own problems in the same spirit and have no connection with MINEDU or the ONEM.'
          ] },
        { kind: 'p', mt: true, html: 'MINEDU places a child by age on 31 March, under Law 28044\'s six years of primaria and five of secundaria, so a strong 10 year old in 5° de primaria can join an olympiad-style group with 11 and 12 year olds if the mentor agrees. Puno\'s public schools taught 93.9 thousand primaria pupils and 84.7 thousand secundaria students in 2025, with 27,116 teachers across all levels; the region\'s results come from their classrooms, and our role is only to add practice alongside them. For maths taught as its own subject in English, see <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">our maths teachers in English for Peru</a>.' }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Getting connected',
      h2: 'How many Puno homes can take a live online class?',
      lede: 'Fewer than in most of Peru. Only 24.8% of Puno households had an internet connection in 2025, according to INEI\'s ENAHO survey, compared with 56.8% nationally. Personal use is much higher, at 69.1% of people aged 6 and over, because many people go online by phone or away from home.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Home technology in Puno and Peru, 2025 (percent, INEI household survey)', head: ['Indicator', 'Puno', 'Peru'], rows: [
          ['Households owning a computer', '21.4', '33.9'],
          ['Households with an internet connection', '24.8', '56.8'],
          ['Share of people 6 and older who go online', '69.1', '81.1']
        ] },
        { kind: 'source', html: 'Compendio Estadístico Perú 2026 (INEI), tables 11.5, 11.6 and 11.13, from ENAHO. In 2015 only 5.7% of Puno households had an internet connection, so 24.8% is a fourfold rise in ten years, even if it is still low.' },
        { kind: 'two', mt: true,
          leftH3: 'Who we can serve well',
          left: [
            'Families in Juliaca and Puno city with a home connection and a laptop can take any of our courses. University students who already follow online lectures usually have what they need. These are the learners we expect to teach most often from the region.',
            'A household that goes online only by phone can still try the free class. Scratch and maths reasoning can work on a tablet with a steady signal; typed Python or C++ really needs a keyboard and a bigger screen.'
          ],
          rightH3: 'What we will not pretend',
          right: [
            'We will not promise that a weak mobile signal in a rural centro poblado will carry a one-hour video lesson. The project below shows how much mobile coverage depends on which numbers you read, and families know their own signal better than any table.',
            'If the connection is the problem, one to one at a quiet hour often helps more than a group, because the mentor can pause and repeat without holding others up.'
          ] }
      ]
    },
    {
      id: 'coverage',
      tint: 'tint',
      eyebrow: 'A real Puno project',
      h2: 'Does Puno city have 4G? It depends which column you read',
      lede: 'OSIPTEL, Peru\'s telecoms regulator, publishes the share of every centro poblado covered by each operator\'s mobile network. Our students use the Puno rows to learn two habits: when one place has several columns, combine them before you count, and read the data dictionary before you decide which column answers your question.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Porcentaje de cobertura móvil por centro poblado, empresa operadora y tecnología", published by OSIPTEL on the Plataforma Nacional de Datos Abiertos under the Open Data Commons Attribution Licence (ODC-By). Its dictionary says the figures run to the fourth quarter of 2024, were updated in May 2025, and come from the operators themselves.',
            'Each of the 108,115 rows is one centro poblado in Peru; 10,544 are in Puno, 164 urban and 10,380 rural. For each of four operators and each technology there are two percentages: "CG", the share of the place inside the operator\'s guaranteed coverage footprint, and "CG+CAR", the share inside that footprint plus additional network capacity.'
          ],
          rightH3: 'The question',
          right: [
            'How many places in Puno have at least half their area under 4G? A first attempt picks the first 4G column in the file and counts the places where it reads 50% or more.',
            'That sounds reasonable until you look at a single row. For the centro poblado of Puno itself, the four operators\' guaranteed 4G figures are 27%, 25%, 2.52% and 100%.'
          ] },
        { kind: 'code', label: 'Version 1: count with the first 4G column only', lang: 'Python', code: V1, note: 'It prints <code>Column read: Bitel_4G_CG</code>, <code>Puno places in the file: 10544</code> and <code>Half or more under 4G: 299</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 reads one operator and ignores three. By its count, Puno city is not covered, because 27% is under half. But a family in Puno only needs one network that works, so the right question for each place is: what is the highest figure among the four operators? That is a job for <code>max()</code> across the columns of the same row.' },
        { kind: 'code', label: 'Version 2: take the strongest of the four operators for each place', lang: 'Python', code: V2, note: 'It prints <code>Columns read: [\'Bitel_4G_CG\', \'Claro_4G_CG\', \'Entel_4G_CG\', \'Integratel_4G_CG\']</code>, then <code>URBANO places: 164 half or more under 4G: 65</code>, <code>RURAL places: 10380 half or more under 4G: 392</code> and <code>Total covered: 457 of 10544</code>.' },
        { kind: 'p', mt: true, html: 'The count rises from 299 to 457, and Puno city and Juliaca both count as covered. Yet only 65 of 164 urban places reach the line, which is surprising until you reread the dictionary: "CG" is the guaranteed footprint, a cautious figure. The file also gives "CG+CAR", which adds the operators\' additional network capacity. Which one to use depends on the question. "Where can I rely on 4G?" suggests CG; "where is there 4G at all?" suggests CG+CAR.' },
        { kind: 'code', label: 'Version 3: the same count for both footprints', lang: 'Python', code: V3, note: 'It prints <code>Footprint _4G_CG places half or more covered: 457</code> and <code>Footprint _4G_CG+CAR places half or more covered: 5304</code>.' },
        { kind: 'p', mt: true, html: 'With the wider footprint the count jumps more than elevenfold, to 5,304 of Puno\'s 10,544 places. None of the three numbers is wrong. They answer three different questions, and a careful report says which one it is answering. One more detail rewards a close reader: the dictionary lists the fourth operator\'s columns under a different company name from the one in the file header, a small reminder that the dictionary and the data can drift apart.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Places with half or more of their area under 4G, strongest operator, by province (our counts from the OSIPTEL file, 2024-IV data)', head: ['Province', 'Places in the file', 'Guaranteed (CG)', 'With added capacity (CG+CAR)'], rows: [
          ['Puno', '1,519', '103', '1,039'],
          ['Carabaya', '1,440', '10', '392'],
          ['Melgar', '1,285', '18', '528'],
          ['Lampa', '1,282', '6', '291'],
          ['Azángaro', '1,056', '53', '744'],
          ['San Román', '304', '34', '272'],
          ['Yunguyo', '259', '67', '253']
        ] },
        { kind: 'source', html: 'Data: OSIPTEL, Porcentaje de cobertura móvil por centro poblado, empresa operadora y tecnología, Plataforma Nacional de Datos Abiertos, licence ODC-By. Figures are declared by the operators and describe coverage footprints over each centro poblado\'s area, not measured speeds or the signal inside any home. The counts are ours; six provinces are left out of the table for space.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 9, with a map and coloured pencils.</strong> Four friends each shade the part of a school yard their torch can light. Is the yard lit if one torch covers it all and the others cover a little?',
          '<strong>Scratch, around 9 to 11.</strong> Store four percentages in a list and show both the first one and the largest one. Which answers "can I get a signal?"',
          '<strong>First Python, around 11 to 13.</strong> Try both of the first two programs on the Puno rows and explain why Puno city changes from "not covered" to "covered".',
          '<strong>Ages 13 and over.</strong> Repeat Version 3 for 3G instead of 4G, then for your own province. Write one sentence stating exactly what each count measures.',
          '<strong>Going further.</strong> Find the places where every column is 0%. Before writing "no signal", decide what the file can and cannot tell you about them.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Every class is taught in English, live and online, by mentors based in India. We say so plainly because in Puno it matters more than anywhere on our list.',
      body: [
        { kind: 'two',
          leftH3: 'The honest starting point',
          left: [
            'EF\'s English Proficiency Index 2025 gives the Puno region a score of 417, in its very low band. Peru\'s national score is 519 and Lima city\'s is 555. EF publishes no separate score for Juliaca or Puno city.',
            'That does not rule a Puno learner out. It means the mentor starts slowly, uses very short sentences and the chat box, and checks understanding often. For younger children Scratch helps, because the blocks carry pictures and colours as well as words.'
          ],
          rightH3: 'Who tends to do well',
          right: [
            'Learners who already study some English at school or at an institute, university students who read English documentation, and children whose parents can sit nearby for the first weeks all settle in faster.',
            'For others, one to one is usually the better start: a single learner can ask for every instruction twice without feeling watched. The free class is where we find out, and we will tell you honestly if we think the English is too big a step for now. For a description in Spanish to share with family, see <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.'
          ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Choosing a course',
      h2: 'Which course fits a Puno learner of each age?',
      lede: 'These are our own course ages and suggestions. The free class confirms the level, the format and how much support with English the learner needs.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested first courses for the Puno region (our recommendations)', head: ['Learner', 'Ages', 'First course', 'Format we suggest at first'], rows: [
          ['Young child, new to English', '6 to 8', 'Scratch Coding for Kids', 'One to one, with a parent nearby'],
          ['Primaria pupil who loves maths', '9 to 12', 'Problem solving, then Python and AI for Kids', 'Group or one to one'],
          ['Secundaria student aiming at the ONEM', '12 to 16', 'Maths Olympiad and Competition', 'Group'],
          ['Secundaria student who wants to code', '13 to 18', 'PCEP and PCAP Python, or C++ for Teens', 'Group'],
          ['University student or adult', '18 and over', 'Python, then data structures and algorithms', 'Group, around lectures or work']
        ] },
        { kind: 'p', mt: true, html: 'Students at the Universidad Nacional del Altiplano or the Universidad Nacional de Juliaca often join for algorithms and interview-style problem solving, which their degree assumes but rarely drills. Our guide to <a class="ag-inline-link" href="/curso-de-java-para-universitarios-peru">Java for university students in Peru</a> covers that path in Spanish, and every class it describes is open to Puno learners.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would classes be in Juliaca and Puno?',
      lede: 'At a time you choose. The whole region uses Peru time, UTC minus five all year, and mentors plan around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Juliaca and Puno against India, sample hours (conversions only, no fixed slots)', head: ['Juliaca or Puno', 'India', 'India\'s calendar'], rows: [
          ['06:00', '16:30', 'Same date'],
          ['08:30', '19:00', 'Same date'],
          ['11:00', '21:30', 'Same date'],
          ['13:30', '00:00', 'Next date'],
          ['16:30', '03:00', 'Next date'],
          ['21:00', '07:30', 'Next date']
        ] },
        { kind: 'source', html: 'Time zones: America/Lima is UTC minus 5 with no daylight saving since 1994; Asia/Kolkata is UTC plus 5:30 with none either (tz database). The gap is 10 hours 30 minutes on every day of the year.' },
        { kind: 'p', mt: true, html: 'Early-morning slots in Puno meet the Indian evening, and they are also hours when a shared home connection is often least busy. Because neither country changes its clocks, the slot you agree in the January holidays still holds when school restarts in March. For a full picture of grades, ages and every Peru page, see our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> guide.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Milestones for a Puno learner, from blocks to careful counting',
    lede: 'Our own six-step scale, the same for every age. It shows families where a learner stands in terms of what they can make and explain.',
    table: { caption: 'Our six milestones', head: ['Level', 'Usually around', 'Shown by'], rows: [
      ['1. Steps', 'Age 6 to 7', 'A sprite that follows a short sequence'],
      ['2. Repetition', 'Age 7 to 9', 'A game loop that responds to the player'],
      ['3. Comparison', 'Age 8 to 11', 'A program that picks the largest of several numbers'],
      ['4. Typed code', 'Age 9 to 12', 'Python functions the learner can explain line by line'],
      ['5. Wide tables', 'Age 12 to adult', 'Combining several columns of one row correctly'],
      ['6. Definitions', 'Age 13 to adult', 'Choosing the column that matches the question, and saying why']
    ] },
    left: { h3: 'For parents', ps: [
      'The 4G project covers levels 5 and 6. A learner who reaches them can be trusted not to report a misleading number.',
      'Each month you hear what was finished and what is next.'
    ] },
    right: { h3: 'For learners', ps: [
      'If one place has four numbers, decide how to combine them before you count.',
      'Read the data dictionary first. It is shorter than the file.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for the Puno region',
    lede: 'From primaria to professional life, in three bands. All are taught live in English by a regular mentor, one to one or in a group.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Primaria', courses: [
        { code: 'PUN / KIDS / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles and plans, light on English, heavy on thinking.' },
        { code: 'PUN / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python, games and small AI projects for about 9 to 12.' },
        { code: 'PUN / KIDS / 03', slug: 'middle-school-math-competitions-course', title: 'Junior maths competitions', blurb: 'Contest problems for strong pupils of roughly 10 to 14.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Secundaria', courses: [
        { code: 'PUN / TEEN / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language of programming olympiad finals, from zero.' },
        { code: 'PUN / TEEN / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems for teens who can already write basic programs.' },
        { code: 'PUN / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Logic, data structures and algorithms for 13 to 18.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'PUN / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to advanced Python for students and working adults.' },
        { code: 'PUN / ADULT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Interview-ready problem solving for 18 and over.' },
        { code: 'PUN / ADULT / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra, taught with care.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A live class from Juliaca or Puno, in practice',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early mornings on the altiplano meet the Indian evening.' },
      { time: 'Late afternoon', l: 'After colegio or lectures, on days you pick.' },
      { time: '1-on-1', l: 'One learner, one mentor, a slot agreed between you.' }
    ],
    cells: [
      { h3: 'A familiar mentor', p: 'The same teacher learns how the student thinks and speaks.' },
      { h3: 'English made easy', p: 'Short sentences, written key words, repeated steps.' },
      { h3: 'Hands on', p: 'The learner types and tests; the mentor guides.' },
      { h3: 'Right age group', p: 'Children, teenagers and adults never mixed.' },
      { h3: 'Clear updates', p: 'Families hear what was finished each month.' },
      { h3: 'Flexible format', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects finished by our older learners',
  projectsLede: 'Students who persevere end up building tools people use. Some are shown here, and the <a class="ag-inline-link" href="/student-labs">student labs</a> list more.',
  reviewsLede: 'What parents and learners wrote on Google, word for word.',

  fees: {
    h2: 'Fees for learners in the Puno region',
    lede: 'You pay monthly, in US dollars, by card. The bank then turns the dollar amount into soles at its own rate, which is why the soles figure can differ a little each month.',
    free: ['A free first lesson', 'A puzzle and a program that runs', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Two live lessons a week', 'Paid monthly, stop any time'],
    one: ['Just the learner and the mentor', 'Pace set by the learner', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Puno families ask',
    h2: 'Online coding and AI classes in Puno: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are taught only in English, live and online. Mentors keep sentences short, repeat steps, write key words in the chat and adapt to each learner\'s pace and accent; Spanish answers are understood and met with the English phrase.' },
      { q: 'Is English a problem for a child in Puno?', a: 'It can be at first. EF scores the Puno region 417, in its very low band, so mentors start slowly and many families begin one to one. Scratch and maths puzzles need little vocabulary, and the free class shows whether the step is manageable.' },
      { q: 'Do you have classes in Juliaca or Puno city?', a: 'Not in person. Every class is online, so a learner in Juliaca, Puno, Ilave, Juli or Azángaro joins from home in the same way.' },
      { q: 'What do we need at home?', a: 'Enough signal to keep a sixty-minute video lesson running, plus a laptop or desktop if possible. In 2025, INEI found an internet connection in 24.8% of Puno households, so please test yours in the free class before choosing a course.' },
      { q: 'From what age?', a: 'Our youngest learners are six and work with Scratch blocks. Most children are ready to type Python by nine or ten. Secundaria students and adults are welcome with no experience at all.' },
      { q: 'Can you help my child with the ONEM?', a: 'We train the reasoning the ONEM rewards with problems we write ourselves, never the organiser\'s papers. Students enter through their colegio; the 2026 school stage was on 8 July. We are not connected with MINEDU or the ONEM.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Puno all year, so 08:30 in Juliaca is 19:00 for the mentor.' },
      { q: 'Can university students join?', a: 'Yes. Students at the Universidad Nacional del Altiplano, the Universidad Nacional de Juliaca or anywhere else join adult groups, usually for Python, algorithms or university maths, at hours around their lectures.' },
      { q: 'How is payment made?', a: 'A card payment each month in US dollars; the soles amount is set by your bank\'s conversion. The page shows rupees only to people viewing it from India. There is no charge for the first lesson.' },
      { q: 'Do students receive a certificate?', a: 'Certain courses close with a Modern Age Coders completion certificate describing the work done. Peruvian authorities play no part in it: MINEDU, the UGEL, universities and schools neither issue nor back it.' },
      { q: 'What is the 4G project on this page?', a: 'An original Python lesson on OSIPTEL\'s open file of mobile coverage by centro poblado. Reading one operator\'s column counts 299 Puno places with half their area under 4G; taking the strongest of four counts 457; using the wider footprint counts 5,304.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for families and learners in the Puno region.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Grades, ages and the full list of Peru pages.' },
      { href: '/curso-de-java-para-universitarios-peru', label: 'Java para universitarios', p: 'Java for university students in Peru, explained in Spanish.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'The block-coding start for younger children.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'When and how children move to typed code.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'For adults who want to start from scratch.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson from the Puno region',
    lede: 'The free lesson is a puzzle and a first program. It shows the mentor how the learner thinks, how comfortably they follow English, and whether your connection holds up, so the suggestion that follows is realistic.',
    readFirst: 'To read more beforehand, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Our mentors are in India and every lesson is live and in English. For a quick reply, send us a WhatsApp message in English.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI in Peru' },
        { href: '/curso-de-java-para-universitarios-peru', label: 'Java para universitarios' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read the dictionary before you count'
  },

  personalityCss: `
.ag-root.ag-cax .ag-hero h1 { letter-spacing: -0.015em; max-width: 21ch; }
.ag-root.ag-cax .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cax .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cax .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cax .ag-code-head b { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017 (dpto21), Compendio Estadístico Perú 2026 (cuadros 1.7, 1.8, 5.16, 5.22, 5.53, 5.54, 5.66, 5.75, 11.5, 11.6, 11.13); Ley 28044; MINEDU Edades normativas and CNEB; ONEM 2026 (UGEL 06 oficio, El Peruano); EF EPI 2025; tz database. Data: OSIPTEL, Porcentaje de cobertura móvil por centro poblado, empresa operadora y tecnología, ODC-By.',
    localProject: 'Does Puno city have 4G? An original Python project on OSIPTEL\'s coverage file (ODC-By): Version 1 reads only the first 4G column and counts 299 of 10,544 Puno places with half their area covered (Puno city reads 27%); Version 2 takes max() across the four operators and counts 457 (65 of 164 urban, 392 of 10,380 rural); Version 3 compares the guaranteed footprint (457) with the footprint plus additional capacity (5,304). Lesson family: combine several columns of one row before counting, and let the data dictionary choose the column.',
    requiredMentions: ['cobertura-movil-centro-poblado.csv', 'Half or more under 4G: 299', 'Total covered: 457 of 10544', 'places half or more covered: 5304', '1,232,993', '217,743', '112,234', '42.1% of Puno', 'Read the dictionary before you count'],
    sources: [
      { claim: 'Department, province and district populations of Puno, 2025, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Puno city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Juliaca and Puno centros poblados with altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto21.xlsx' },
      { claim: 'Area, computers, internet, assessment results, enrolment, teachers and university enrolment for Puno.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'OSIPTEL mobile coverage by centro poblado and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/porcentaje-de-cobertura-m%C3%B3vil-por-centro-poblado-empresa-operadora-y-tecnolog%C3%ADa' },
      { claim: 'ONEM 2026 levels, categories, school-stage date and format.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 national stage at Huampaní, 237 students.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 score for the Puno region, Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A Juliaca total made by adding the adjoining San Miguel centro poblado: never summed.',
      'Ranking or recommending a mobile operator: the page counts places and names columns only.',
      'Claims about signal quality, speed or coverage inside homes: the file gives declared footprints, and the page says so.',
      'The UNA Puno applicants file on the same portal: rejected because it lists named individuals.',
      'Electro Puno consumption data: rejected, its catalogue licence is not specified.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with MINEDU, OSIPTEL, the ONEM, a Puno university or any school: none.'
    ]
  }
};
