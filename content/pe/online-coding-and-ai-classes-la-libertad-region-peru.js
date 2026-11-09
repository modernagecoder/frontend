// SHIP: market (region) | La Libertad: an ONEM region, coast and highlands, an artisan register read as rates | count versus rate: join two tables on a key, then divide by population
'use strict';
// Online coding and AI classes, La Libertad region, Peru (ag- region page, Peru cluster row PE162; alloc: regions, calr, #64590D).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: any day, any hour; USD only
// through data-price anchors.
// Spine: La Libertad runs from the Trujillo coast to the Andean provinces of Sánchez Carrión, Pataz and Santiago de Chuco.
// Its GRE reported 177,797 secundaria pupils in the first ONEM 2026 round, so the page leans on maths reasoning, and the
// project shows why a raw count (artisans per province) and a rate (per 10,000 people) tell different stories.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/online-coding-and-ai-classes-la-libertad-region-peru/):
//  - INEI, Censos Nacionales 2025, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv): LA LIBERTAD 2056445;
//    provinces TRUJILLO 1090001, ASCOPE 127622, BOLÍVAR 16127, CHEPÉN 96338, JULCÁN 29980, OTUZCO 92560, PACASMAYO 123508,
//    PATAZ 84293, SÁNCHEZ CARRIÓN 173502, SANTIAGO DE CHUCO 58138, GRAN CHIMÚ 30356, VIRÚ 134020; districts TRUJILLO
//    307542, LA ESPERANZA 211173, EL PORVENIR 113344, HUANCHACO 92324, ALTO TRUJILLO 85323, VÍCTOR LARCO HERRERA 81901,
//    HUAMACHUCO 82038. Capital Trujillo (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9: Trujillo city 919,899 (2017). Lib1541 dpto13.xlsx (single centro poblado, 2017):
//    HUAMACHUCO 41613, CHEPEN 37466, PACASMAYO 28929.
//  - GRE La Libertad, gob.pe note 8 July 2026: "En esta primera fase participan 177 797 estudiantes de Educación Secundaria
//    de Educación Básica Regular, pertenecientes a 936 instituciones educativas públicas y privadas de la región"; "Nivel 1,
//    dirigido a estudiantes de primero y segundo de secundaria; Nivel 2, para tercero y cuarto de secundaria; y Nivel 3, para
//    quinto de secundaria, en las categorías Alfa y Beta."; Etapa UGEL "inscripciones se realizarán del 15 de julio al 12 de
//    agosto" (FACTS 109).
//  - GRE La Libertad, gob.pe note 13 July 2026: "la primera región en implementar el modelo de Formación Dual y en
//    Alternancia en la educación pública en seis Institutos de Educación Superior Tecnológica Públicos, beneficiando a más de
//    2,000 estudiantes"; "los 27 institutos de educación superior tecnológica públicos de La Libertad"; institutes in
//    "Chocope, Otuzco, Virú, Paiján, Nueva Esperanza y CEFOP La Libertad".
//  - El Peruano 11/10/2026 (FACTS 105, 106): "más de 1,7 millones de estudiantes de secundaria"; national stage Huampaní, 237.
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (ENAHO): cuadro 11.5 La Libertad "... 36,6 33,6 33,5 33,2"; cuadro 11.6
//    "... 55,3 57,8 59,4 63,1"; cuadro 11.13 "... 78,0 79,4 83,4 85,3"; Total 33,9 / 56,8 / 81,1 (2025).
//  - EF EPI 2025 (ef_peru.raw): data-state="la-libertad" La Libertad 513 (moderate); data-city="trujillo" Trujillo 519.
//  - Ley 28044, Edades normativas, CNEB competency 28 and JER hours, MINEDU 2026 opening, OPI (FACTS 5, 6, 13, 14, 32, 33,
//    39, 17, 111). Time: tzdata America/Lima, Asia/Kolkata.
//  - Data: Gobierno Regional de La Libertad (GORE La Libertad), "Artesanos registrados en el RNA De La región La Libertad
//    2025", datosabiertos.gob.pe, licence "Open Data Commons Attribution License" (ODC-By), released 2025-10-13, modified
//    2026-10-12, "actualizado a la fecha 07/10/25". File DIRECTORIO DE ARTESANOS DE LA REGIÓN LA LIBERTAD CON RNAFF_0.csv
//    (saved as artesanos.csv), 343,204 bytes, Latin-1, semicolons, 4,104 rows, 12 provinces, 15 craft lines; it carries
//    contact e-mails, which we never print or use.
// Our own calculations (scratchpad pe/r1/calr/v1.py, v2.py, python3 -I):
//  v1 prints: Provinces: 12 Artisans: 4104 / PATAZ 1074 / SÁNCHEZ CARRIÓN 973 / TRUJILLO 753
//  v2 prints: PATAZ 1074 artisans, 127.4 per 10,000 people / SÁNCHEZ CARRIÓN 973 artisans, 56.1 per 10,000 people /
//    SANTIAGO DE CHUCO 320 artisans, 55.0 per 10,000 people / Lowest: VIRÚ 2.1 / Trujillo comes 10 of 12 with 6.9
//  all rates: Pataz 127.4, Sánchez Carrión 56.1, Santiago de Chuco 55.0, Julcán 35.7, Gran Chimú 29.6, Otuzco 26.4,
//    Bolívar 22.3, Pacasmayo 21.1, Ascope 14.2, Trujillo 6.9, Chepén 3.9, Virú 2.1. Textilería 3,117 of 4,104 (76.0%);
//    Pataz 1,065 of 1,074 textile; Trujillo 308 textile, 160 bisutería, 74 cueros y pieles; Pacasmayo 152 talla of 260.
// Lesson family: count versus rate. Join two tables on a shared key (province name) with a dictionary, divide each count by
// its population, and watch the ranking change.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'count = {}',
  'with open("artesanos.csv", newline="", encoding="latin-1") as rna:',
  '    for row in csv.DictReader(rna, delimiter=";"):',
  '        province = row["PROVINCIA"]',
  '        count[province] = count.get(province, 0) + 1',
  '',
  'ranking = sorted(count.items(), key=lambda pair: pair[1], reverse=True)',
  'print("Provinces:", len(ranking), "Artisans:", sum(count.values()))',
  'for province, n in ranking[:3]:',
  '    print(province, n)'
].join('\n');

const V2 = [
  'import csv',
  '',
  '# INEI, Censos Nacionales 2025, Cuadro 1: total population by province',
  'people = {"TRUJILLO": 1090001, "ASCOPE": 127622, "BOLÍVAR": 16127,',
  '          "CHEPÉN": 96338, "JULCÁN": 29980, "OTUZCO": 92560,',
  '          "PACASMAYO": 123508, "PATAZ": 84293, "SÁNCHEZ CARRIÓN": 173502,',
  '          "SANTIAGO DE CHUCO": 58138, "GRAN CHIMÚ": 30356, "VIRÚ": 134020}',
  '',
  'count = {}',
  'with open("artesanos.csv", newline="", encoding="latin-1") as rna:',
  '    for row in csv.DictReader(rna, delimiter=";"):',
  '        province = row["PROVINCIA"]',
  '        count[province] = count.get(province, 0) + 1',
  '',
  'rates = []',
  'for province, n in count.items():',
  '    per_10k = n / people[province] * 10000',
  '    rates.append((round(per_10k, 1), province, n))',
  '',
  'rates.sort(reverse=True)',
  'for rate, province, n in rates[:3]:',
  '    print(province, n, "artisans,", rate, "per 10,000 people")',
  'print("Lowest:", rates[-1][1], rates[-1][0])',
  'place = [r[1] for r in rates].index("TRUJILLO") + 1',
  'print("Trujillo comes", place, "of", len(rates), "with", rates[place - 1][0])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'regions', label: 'La Libertad region' },
  slug: 'online-coding-and-ai-classes-la-libertad-region-peru',
  code: 'calr',
  accent: '#64590D',
  accentRationale: 'La Libertad region: an olive-gold #64590D, the tone of dried totora reed on the Huanchaco shore, allocated to this row; contrast 6.66 on #FBF8F2, 6.26 on #F5F1E8 and 5.73 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding and AI classes, La Libertad region, Peru',
  title: 'Coding and AI Classes Online, La Libertad Region, Peru',
  description: 'Live online coding and AI classes in English for La Libertad: Trujillo to Huamachuco, the ONEM and OPI, census and internet figures, and an artisan register project.',
  ogDescription: 'For families and adults from Trujillo to the highland provinces of La Libertad: coding and AI taught live online in English at any hour, the region\'s ONEM numbers, what school leaves out, and a Python project that turns an artisan register into fair comparisons.',
  twitterDescription: 'La Libertad, live online coding in English: ONEM figures, school gaps, and an artisan register turned into rates.',
  pageName: 'Online Coding and AI Classes in the La Libertad Region',
  webPageDescription: 'A guide to live online coding and AI classes in English for learners across the La Libertad region of Peru, built from INEI census and ENAHO figures, two GRE La Libertad notes, MINEDU curriculum sources, EF EPI 2025, and an original Python project on the GORE La Libertad artisan register (ODC-By).',
  courseDescription: 'Live online coding, AI and maths reasoning classes in English for learners in La Libertad, Peru: block coding and Python for children, Python, C++, algorithms and olympiad maths for secundaria students, Java and algorithms for university students and adults, in groups of fifteen to twenty or one to one, at hours the family picks.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'La Libertad region',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#provinces', label: 'Provinces' },
    { href: '#onem', label: 'ONEM' },
    { href: '#register', label: 'Artisan project' },
    { href: '#paths', label: 'Courses by goal' },
    { href: '#clock', label: 'Clock' }
  ],
  eyebrow: 'La Libertad &middot; Live online, in English &middot; Children, teens, adults',
  h1: 'Online coding and AI classes in La Libertad',
  lede: 'La Libertad stretches from the beaches of Huanchaco and the avenues of Trujillo up to Huamachuco, Otuzco and the eastern province of Pataz. A live class over video reaches all of it equally. Below you will find the region\'s provinces in census figures, how many of its pupils sat the 2026 maths olympiad, what Peruvian school does not cover, and a project in which an artisan register teaches the difference between a big number and a big share.',
  secondaryCta: { href: '#register', label: 'Open the artisan project' },
  wa: 'Hello Modern Age Coders, we are in La Libertad, Peru, and would like live coding classes in English. May we book the free first class?',
  heroNote: 'Teaching live online since 2020 &middot; over 10,000 learners in many countries &middot; English adjusted to each learner',
  spec: [
    ['Learners', 'Six years old to retirement age'],
    ['Reach', 'All twelve provinces, from home'],
    ['Teaching language', 'English, clear and unhurried'],
    ['Groups', 'Fifteen to twenty, or private lessons'],
    ['Schedule', 'Chosen by you, any day'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'The quick answer',
  capsule: 'Learners anywhere in La Libertad, Peru, can take live online coding and AI classes in English with Modern Age Coders. Children of six begin with coding blocks and usually type their first Python at nine or ten; secundaria students go deeper into Python, C++, algorithms and olympiad-style maths; university students and adults learn Java, Python, data and AI. Lessons are given by a mentor on video to a class of fifteen to twenty or to one learner, at times the family sets, and the first one is free. The aim is a learner who can think a problem through, not one who copies.',

  picks: {
    eyebrow: 'Where La Libertad learners begin',
    h2: 'Three starting courses for La Libertad',
    lede: 'A first course for children, one for secundaria students who enjoyed the ONEM, and one for teenagers who want to program properly.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'LIB / 01', title: 'Coding for Kids', note: 'For children of 6 to 12, grouped by age. Blocks first, then games, simple apps and a gentle look at how AI decides. Nothing to install for the youngest.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'LIB / 02', title: 'Olympiad Mathematics', note: 'For secundaria students who already like hard problems: number theory, combinatorics, geometry and proof, taught with problems we write, never contest papers.' },
      { course: 'python-complete-masterclass-teens', code: 'LIB / 03', title: 'Python for Teens', note: 'Ages 13 to 18, from a blank screen. Real programs with files and data, the kind of work the artisan project on this page asks for.' }
    ]
  },

  sections: [
    {
      id: 'provinces',
      eyebrow: 'Twelve provinces',
      h2: 'How is the population of La Libertad spread across its provinces?',
      lede: 'INEI counted 2,056,445 people in La Libertad on census day 2025. A little over half live in the province of Trujillo; the rest are spread along the coast and across the highland provinces to the east.',
      body: [
        { kind: 'table', numCols: [1], caption: 'La Libertad, its twelve provinces and their total population in the 2025 census', head: ['Area', 'People, 2025'], rows: [
          ['Department of La Libertad', '2,056,445'],
          ['Trujillo', '1,090,001'],
          ['Sánchez Carrión (Huamachuco)', '173,502'],
          ['Virú', '134,020'],
          ['Ascope', '127,622'],
          ['Pacasmayo', '123,508'],
          ['Chepén', '96,338'],
          ['Otuzco', '92,560'],
          ['Pataz', '84,293'],
          ['Santiago de Chuco', '58,138'],
          ['Gran Chimú', '30,356'],
          ['Julcán', '29,980'],
          ['Bolívar', '16,127']
        ] },
        { kind: 'source', html: 'INEI, results of the Censos Nacionales 2025, demographic indicators table 1: población total for the reference date of 15 September 2025. Each number is copied from INEI; we did not compute the department line from the provinces, and we do not add rows.' },
        { kind: 'two', mt: true,
          leftH3: 'Trujillo and its districts',
          left: [
            'The 2017 census, the latest with city totals, counted 919,899 people in the city of Trujillo. In 2025 the district of Trujillo alone had 307,542, La Esperanza 211,173, El Porvenir 113,344, Huanchaco 92,324, Alto Trujillo 85,323 and Víctor Larco Herrera 81,901.',
            'A district line is not a city line, and a 2017 number is not a 2025 one. We keep them apart rather than stitching a "Trujillo today" figure that INEI never published.'
          ],
          rightH3: 'Beyond the capital',
          right: [
            'INEI\'s 2017 directory of populated centres lists Huamachuco at 41,613, Chepén at 37,466 and Pacasmayo at 28,929, each counted as a single centre, which can understate a town that has grown into its neighbours. In 2025 the district of Huamachuco counted 82,038 people.',
            'Highland families often tell us the nearest computing teacher is hours away. Over video, a pupil in Huamachuco sits in the same class as one in Víctor Larco, with no bus ride for either.'
          ] }
      ]
    },
    {
      id: 'onem',
      tint: 'tint',
      eyebrow: 'The maths olympiad',
      h2: 'How many students in La Libertad take part in the ONEM?',
      lede: 'A great many. The Gerencia Regional de Educación de La Libertad reported 177,797 secundaria pupils from 936 public and private schools in the first round of the 2026 ONEM, the national school maths olympiad.',
      body: [
        { kind: 'two',
          leftH3: 'What the GRE reported in July 2026',
          left: [
            'In its note of 8 July 2026, the GRE wrote that "En esta primera fase participan 177 797 estudiantes de Educación Secundaria", from 936 schools across the region. The contest runs in three levels: first and second of secundaria, third and fourth, and fifth on its own, each split into Alfa and Beta categories.',
            'Pupils who did best in their school went on to the UGEL round, with registration open from 15 July to 12 August 2026, and from there towards the national phase.'
          ],
          rightH3: 'The national picture',
          right: [
            'Nationally, El Peruano reported that the 2026 ONEM drew more than 1.7 million secundaria pupils, and that the national stage on Sunday 11 October 2026 at Huampaní brought together 237 students.',
            'Students take part through their colegio; nobody enters as an individual. Modern Age Coders has no tie to MINEDU, the GRE or the ONEM, and we never reproduce or sell official problems.'
          ] },
        { kind: 'p', mt: true, html: 'Why does a coding school care about a maths contest? Because the habits overlap almost completely. Olympiad problems reward reading slowly, trying small cases, spotting a pattern and then proving it. Programming rewards reading slowly, testing small inputs, spotting a bug and then explaining the fix. A secundaria student who does one well is usually ready for the other.' },
        { kind: 'p', html: '<strong>A problem of ours in the olympiad spirit.</strong> A weaver in a highland town finishes one shawl in her first week, two in the second, three in the third, and so on, one more each week. After how many weeks has she finished more than 100 shawls in total? Solve it with a short sum first, then check it with a three-line loop. (Written by us for this page. Answer: 14 weeks, because 1 + 2 + ... + 13 = 91 and adding 14 gives 105.)' },
        { kind: 'p', html: 'Teenagers who enjoy this kind of puzzle often want the computing olympiad too. UTEC\'s OPI is open free of charge to all secundaria students in Peru; its 2025 rules allowed only C++ in the final phase and banned generative AI for solving the problems, which suits students who learn to write their own code.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School and after',
      h2: 'Is programming taught in La Libertad\'s schools?',
      lede: 'Not as its own subject. La Libertad follows the national curriculum, which wants every subject to build digital skills but gives programming no lesson of its own. The newest regional effort is in technical institutes, after secundaria.',
      body: [
        { kind: 'table', numCols: [], caption: 'The school ladder in Peru and what each step offers in computing', head: ['Stage', 'Years', 'Expected age (at 31 March)', 'Programming in the plan?'], rows: [
          ['Primaria', 'Six grades', 'From 6 in first grade', 'No; digital skills cross all areas'],
          ['Secundaria', 'Five grades', 'From 12 in first year, 16 in fifth', 'No computing area in the regular 35-hour week'],
          ['Public technical institute (IEST)', 'After secundaria', 'Usually 17 and over', 'Depends on the career chosen']
        ] },
        { kind: 'source', html: 'Built from Ley 28044 (six years of primaria, five of secundaria), MINEDU\'s normative-age table, the CNEB secundaria study plan, and the GRE La Libertad note of 13 July 2026 on technical institutes. The age in the last row is our general description, not a rule.' },
        { kind: 'two', mt: true,
          leftH3: 'Inside the colegio',
          left: [
            'The national curriculum lists a transversal competency for working in virtual environments built with ICT. Every area is supposed to develop it, so in practice it depends on each teacher. The regular secundaria week gives Matemática and Comunicación four hours each, Inglés three, Educación para el Trabajo two, and no hours to programming.',
            'MINEDU\'s Python pilot, Fábrica de Programadores, started in July 2025 with 1,000 pupils in Lima Norte, not in La Libertad.'
          ],
          rightH3: 'After the colegio',
          right: [
            'In July 2026 the GRE announced that La Libertad had become "la primera región en implementar el modelo de Formación Dual y en Alternancia" in public technical education, in six institutes, among them Chocope, Otuzco, Virú, Paiján and Nueva Esperanza, for more than 2,000 students. The aim is for all 27 public technical institutes in the region to follow.',
            'The first specialities are agricultural production, industrial electricity, mechanics, industrial electronics and automotive mechatronics. Programming is useful in nearly all of them, and is a natural thing to learn alongside.'
          ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Getting online',
      h2: 'Do homes in La Libertad have what an online class needs?',
      lede: 'More than most of Peru. INEI\'s household survey for 2025 puts La Libertad above the national figure for internet at home and for internet use, and level with it for computers.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Internet and computers in La Libertad homes against the whole of Peru (per cent)', head: ['Measure', 'La Libertad, 2022', 'La Libertad, 2025', 'All Peru, 2025'], rows: [
          ['Homes with an internet connection', '55.3', '63.1', '56.8'],
          ['Homes with one computer or more', '36.6', '33.2', '33.9'],
          ['Residents aged 6+ who use the internet', '78.0', '85.3', '81.1']
        ] },
        { kind: 'source', html: 'INEI, Compendio Estadístico Perú 2026, volume 1, tables 11.6, 11.5 and 11.13, drawn from the national household survey (ENAHO). Figures as INEI prints them, with the decimal comma turned into a point.' },
        { kind: 'p', mt: true, html: 'The connection is improving fast: the share of La Libertad homes online rose from 55.3 per cent in 2022 to 63.1 per cent in 2025. Computers have not kept pace, and about one home in three has one. For children under nine a tablet is enough to start with blocks; from about nine, typing real code calls for a keyboard, so we ask about the device in the free class and suggest what to do if there is only a phone. Regional averages also hide a gap between Trujillo and the highland provinces, so we never assume; we ask.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'Do the mentors speak Spanish in class?',
      lede: 'No. Every class is taught in English, live and online, by mentors in India who adapt to the learner\'s speed and accent. Families should know that before they book.',
      body: [
        { kind: 'two',
          leftH3: 'La Libertad on the EF index',
          left: [
            'EF\'s English Proficiency Index for 2025 places Peru 52nd of 123 countries with 519 points. On the same page La Libertad scores 513 and the city of Trujillo 519, both inside EF\'s moderate band.',
            'In other words, a typical learner here understands a fair amount and speaks less. That is exactly the profile our mentors work with every day.'
          ],
          rightH3: 'What changes in the classroom',
          right: [
            'Mentors speak a little slower than normal, show on screen what they say, and ask the learner to explain in their own words, even if those words are mixed. Code helps: Python reads almost like plain English.',
            'For students preparing for university, an hour of technical English a week has value of its own: documentation, error messages and most programming help online are in English.'
          ] }
      ]
    },
    {
      id: 'register',
      eyebrow: 'A La Libertad data project',
      h2: 'Which province of La Libertad has the most registered artisans?',
      lede: 'It depends on what "most" means. Our older students answer the question twice with the regional artisan register, once by counting and once by comparing with population, and learn why the two answers disagree.',
      body: [
        { kind: 'two',
          leftH3: 'Where the data comes from',
          left: [
            'The Gobierno Regional de La Libertad publishes "Artesanos registrados en el RNA De La región La Libertad 2025", its list of artisans in Peru\'s Registro Nacional del Artesano, on datosabiertos.gob.pe under the Open Data Commons Attribution Licence (ODC-By). The publisher describes it as updated to 7 October 2025; the dataset page was last modified on 12 October 2026.',
            'We saved the CSV as artesanos.csv on 9 November 2026. It has 4,104 rows, one per registration, with the province and the craft line. It also has e-mail addresses, which we never print, share or use; the lesson needs only the province column.'
          ],
          rightH3: 'The two questions',
          right: [
            'First question: in which province are the most artisans registered? A count answers it.',
            'Second question: in which province is craft work most common? A count cannot answer that, because provinces differ hugely in size. Trujillo has more than a million people, Bolívar about sixteen thousand. We need artisans per 10,000 people, which means bringing in a second table, the 2025 census, and matching the two by province name.'
          ] },
        { kind: 'code', label: 'Version 1: count registrations per province', lang: 'Python', code: V1, note: 'It prints: <code>Provinces: 12 Artisans: 4104</code>, then <code>PATAZ 1074</code>, <code>SÁNCHEZ CARRIÓN 973</code> and <code>TRUJILLO 753</code>.' },
        { kind: 'p', mt: true, html: 'Students usually expect Trujillo to win, and are surprised to see Pataz first. Then someone points out that Trujillo comes third by count while having about thirteen times as many people as Pataz. The count is correct; it just answers the first question, not the second.' },
        { kind: 'code', label: 'Version 2: join the census and divide by population', lang: 'Python', code: V2, note: 'It prints: <code>PATAZ 1074 artisans, 127.4 per 10,000 people</code>, <code>SÁNCHEZ CARRIÓN 973 artisans, 56.1 per 10,000 people</code>, <code>SANTIAGO DE CHUCO 320 artisans, 55.0 per 10,000 people</code>, <code>Lowest: VIRÚ 2.1</code> and <code>Trujillo comes 10 of 12 with 6.9</code>.' },
        { kind: 'p', mt: true, html: 'The dictionary called people is the join: for each province in the register, the program looks up its 2025 population by name. That only works because both tables spell the names identically, accents included. Type "SANCHEZ CARRION" without accents and the program stops with a KeyError, which is a good thing; a silent wrong match would be worse. Once joined, the rate shows the region\'s shape: craft registration is most common in the highland provinces, and Trujillo, third by count, drops to tenth of twelve.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Registered artisans and artisans per 10,000 people, by province (our calculation)', head: ['Province', 'Registered', 'Per 10,000 people'], rows: [
          ['Pataz', '1,074', '127.4'],
          ['Sánchez Carrión', '973', '56.1'],
          ['Santiago de Chuco', '320', '55.0'],
          ['Julcán', '107', '35.7'],
          ['Gran Chimú', '90', '29.6'],
          ['Otuzco', '244', '26.4'],
          ['Bolívar', '36', '22.3'],
          ['Pacasmayo', '260', '21.1'],
          ['Ascope', '181', '14.2'],
          ['Trujillo', '753', '6.9'],
          ['Chepén', '38', '3.9'],
          ['Virú', '28', '2.1']
        ] },
        { kind: 'source', html: 'Data: GORE La Libertad, Artesanos registrados en el RNA De La región La Libertad 2025, ODC-By; population from INEI, Censos Nacionales 2025. The rates are ours. The register counts registrations, not every person who makes crafts, and registration habits may differ between provinces. Textiles account for 3,117 of the 4,104 rows, 76.0 per cent; in Pataz, 1,065 of 1,074 are textile, while Trujillo\'s 753 include 308 textile, 160 bisutería and 74 leather registrations, and Pacasmayo\'s largest line is carving, with 152 of 260.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, with counters.</strong> One basket holds 3 red beads out of 4. Another holds 10 red beads out of 100. Which basket has more red beads? Which is redder?',
          '<strong>Block coding, around 8 to 10.</strong> Make a list of the twelve counts and find the largest. Then make a second list of populations and ask what you would need to do to compare fairly.',
          '<strong>First Python, around 10 to 12.</strong> Run Version 1, then change the program to print every province, not just the top three, and mark where Trujillo is.',
          '<strong>Ages 13 and over.</strong> Remove the accents from one key in the people dictionary and run Version 2. Read the KeyError, explain it in a sentence, and write a check that names any province with no population.',
          '<strong>Going further.</strong> Repeat the rate for textiles only. Does Pataz still lead? Then write two sentences on what this register can and cannot tell us about craft work in La Libertad.'
        ] }
      ]
    },
    {
      id: 'paths',
      eyebrow: 'Courses by goal',
      h2: 'Which course suits a learner in La Libertad, by what they want?',
      lede: 'Some families start from age, others from a goal: the ONEM, the OPI, university, or a better job. The table goes by goal, with our usual starting ages.',
      body: [
        { kind: 'table', numCols: [], caption: 'Common goals and where we suggest starting (our course ages)', head: ['Goal', 'Typical age', 'Suggested course', 'What the learner gains'], rows: [
          ['A first taste of coding', 'From 6', 'Coding for Kids', 'Sequences, loops and simple games'],
          ['Games and creativity', '8 to 12', 'Roblox game coding', 'Scripts that make a world react'],
          ['Stronger in ONEM-style maths', 'Secundaria', 'Olympiad Mathematics', 'Proof, cases and careful writing'],
          ['Ready for the OPI', 'Secundaria', 'C++ for teens, then algorithms', 'Fast, correct programs under time limits'],
          ['University in engineering or science', 'Last years of secundaria and after', 'Python for Teens, then Java', 'Habits that university courses assume'],
          ['Work and career', '18 and over', 'Java or data structures and algorithms', 'Skills employers test in interviews']
        ] },
        { kind: 'source', html: 'Course ages and pairings are ours. MINEDU counts a child\'s age on 31 March when placing them in a grade, so classmates can be almost a year apart.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Younger children', p: 'Lessons are short, playful and grouped tightly by age. A seven year old in Trujillo and one in Otuzco learn side by side, and nobody is rushed.' },
          { h3: 'Secundaria', p: 'This is where contest maths and real programming meet. Students who like both often move between our olympiad and C++ courses over a school year.' },
          { h3: 'Students and adults', p: 'Classes fit around university timetables and shifts. Java, algorithms and data analysis are the usual choices, with Python for anyone starting cold.' }
        ] },
        { kind: 'p', mt: true, html: 'For more on each path, see <a class="ag-inline-link" href="/java-course-peru">our Java course for Peru</a>, <a class="ag-inline-link" href="/c-plus-plus-course-peru">the C++ course page for Peru</a> and, for the youngest, <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>. The national overview is on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Timing',
      h2: 'When are classes held for families in La Libertad?',
      lede: 'At the hour you choose. Trujillo, Huamachuco and the whole region run on Peru time, and the mentor fits around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'How a few Peru times read on the mentor\'s clock in India (examples, not a schedule)', head: ['In La Libertad', 'In India', 'Note'], rows: [
          ['07:30', '18:00', 'Indian evening'],
          ['09:30', '20:00', 'Indian evening'],
          ['11:30', '22:00', 'Late evening in India'],
          ['14:00', '00:30', 'Just after midnight in India'],
          ['17:30', '04:00', 'Early morning in India'],
          ['20:30', '07:00', 'Morning in India']
        ] },
        { kind: 'source', html: 'Peru keeps one time all year, five hours behind UTC, with no summer change since 1994 (tz database, zone America/Lima). India keeps UTC plus five and a half hours. The difference is a steady 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'Since the difference never moves, a slot you agree in the summer break stays put through the school year. You pick a time on your own clock when booking; the system shows the mentor the India time. The 2026 school year in Peru began on 16 March 2026, so many La Libertad families start in January or February and keep the same hour when classes resume.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Stages a La Libertad learner moves through',
    lede: 'Our own milestones, the same whether the learner is seven or seventy. They help us place a student and help families see what has changed.',
    table: { caption: 'Our stages, from first blocks to fair comparisons', head: ['Stage', 'Often reached', 'Can now'], rows: [
      ['1. Order', 'About 6 or 7', 'Arrange instructions so a character does what was planned'],
      ['2. Loop', 'About 7 to 9', 'Replace copied blocks with one repeated block'],
      ['3. Count', 'About 8 to 10', 'Keep a tally in a variable and update it correctly'],
      ['4. Write', 'About 9 to 12', 'Type Python with if, for and their own functions'],
      ['5. Join', 'About 12 to adult', 'Combine two tables by a shared key and spot names that do not match'],
      ['6. Compare fairly', 'About 13 to adult', 'Choose between a count and a rate, and say why']
    ] },
    left: { h3: 'For parents', ps: [
      'The artisan project sits at stages 5 and 6. A learner who reaches them can read a news headline with a big number in it and ask: out of how many?',
      'Progress reports describe what your child built and explained that month.'
    ] },
    right: { h3: 'For learners', ps: [
      'A big count can come from a big place. Divide before you decide.',
      'If two tables will not join, the spelling is usually the reason.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for La Libertad learners',
    lede: 'Three for children, three for secundaria, three for university and work. Each is given live in English by one mentor, to a group or to a single learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 5 to 12', courses: [
        { code: 'LIB / KIDS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripts that bring a child\'s own Roblox world to life.' },
        { code: 'LIB / KIDS / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident arithmetic for ages 5 to 10, the base for later contest work.' },
        { code: 'LIB / KIDS / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Design and build small games, ages 8 to 12.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 13 to 18', courses: [
        { code: 'LIB / TEEN / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language of the OPI final, from first program to algorithms.' },
        { code: 'LIB / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Data structures and contest thinking for 13 to 18 year olds.' },
        { code: 'LIB / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Build and test real models in Python, with honest limits explained.' }
      ] },
      { num: 'III', h3: 'University and work', sub: 'Ages 18 and over', courses: [
        { code: 'LIB / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java, core to Spring Boot', blurb: 'Object-oriented Java up to web back ends.' },
        { code: 'LIB / ADULT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Interview-grade problem solving for students and graduates.' },
        { code: 'LIB / ADULT / 03', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Engines, physics and design for adults building games.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'The format',
    h2: 'How classes work for learners in La Libertad',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early Peru hours are evening in India, when mentors are fresh.' },
      { time: 'Later in the day', l: 'Afternoons and evenings work as well; tell us what fits.' },
      { time: 'Private', l: 'A one-to-one hour on the days you name.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'Continuity from week to week, so nothing is explained twice.' },
      { h3: 'Unhurried English', p: 'On-screen examples back up every spoken step.' },
      { h3: 'Learner at the keyboard', p: 'Students write and run every line themselves.' },
      { h3: 'Age-matched groups', p: 'Primary pupils, teenagers and adults study separately.' },
      { h3: 'Monthly updates', p: 'Families hear what was built and what comes next.' },
      { h3: 'Your choice of size', p: 'A class of fifteen to twenty, or one-to-one.' }
    ]
  },

  projectsH2: 'Work by our more advanced students',
  projectsLede: 'Learners who stay the course go on to build real tools. Some are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on Google by families and learners, unedited.',

  fees: {
    h2: 'Fees for La Libertad learners',
    lede: 'Plans are billed monthly in US dollars. The charge goes to your card in dollars, and your bank decides the soles amount using its own exchange rate, so your statement may show a slightly different figure.',
    free: ['One free class to start', 'A puzzle, a first program, a device check', 'No card details asked'],
    group: ['Fifteen to twenty learners of similar age', 'One consistent mentor', 'Two live lessons per week', 'Pay monthly, stop at any time'],
    one: ['Just the learner and the mentor', 'Goals such as the ONEM or OPI built in', 'Times that you choose']
  },

  faq: {
    eyebrow: 'Questions from La Libertad',
    h2: 'Online coding and AI classes in La Libertad: questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No, never. Every lesson is live, online and in English, given by mentors in India who slow down, rephrase and adapt to each learner\'s pace and accent. If a child answers in Spanish, the mentor gives the English back and carries on.' },
      { q: 'Can a child in Huamachuco or Otuzco join?', a: 'Yes. The class happens over video, so any province of La Libertad works, Trujillo or the highlands alike. All that is needed is a steady connection and, from about nine, a computer with a keyboard.' },
      { q: 'Will this help with the ONEM?', a: 'It helps with the thinking the ONEM rewards: careful reading, small cases and clear explanations. We use problems we write ourselves and never the official ones. Pupils enter through their colegio, and we have no link with MINEDU, the GRE La Libertad or the ONEM.' },
      { q: 'Do you prepare students for the OPI?', a: 'Our C++ and algorithms courses build the skills the OPI tests. The OPI is run by UTEC and is free for secundaria students; its 2025 rules required C++ in the final and banned generative AI. We are not connected with UTEC.' },
      { q: 'What time are classes in La Libertad?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Trujillo every day, so a 09:30 class there is 20:00 for the mentor.' },
      { q: 'Is programming part of school in La Libertad?', a: 'Not as a subject. The national curriculum asks all subjects to build digital skills, and the regular secundaria week has no programming hours. The region\'s new dual-training model applies to public technical institutes after secundaria.' },
      { q: 'From what age can my child start?', a: 'From six, with coding blocks that need no typing. Around nine or ten most children are ready for Python. Teenagers and adults can start from zero at any age.' },
      { q: 'Are there classes for university students and adults?', a: 'Yes, in adult groups or one to one. Java, Python, data structures and algorithms, and data analysis are the usual choices, scheduled around lectures, shifts or family time.' },
      { q: 'How is the fee paid?', a: 'Monthly, in US dollars, by card; your bank converts the charge to soles. The page shows the fee in dollars, or in rupees for visitors from India. The trial class is free.' },
      { q: 'Do you award a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian qualification, and it is not issued or recognised by MINEDU, the GRE or any school; it describes the work the learner completed.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related reading',
    lede: 'Pages that La Libertad families and learners often open next.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Peru\'s school system, ages and our full list of Peru pages.' },
      { href: '/java-for-computer-science-students-peru', label: 'Java for computer science students in Peru', p: 'For university students already on a CS degree.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What typed code looks like at ten.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Learning to code later in life.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Provider age limits, tool by tool.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built by our learners.' }
    ]
  },

  start: {
    h2: 'Start with a free class from La Libertad',
    lede: 'In the trial lesson the learner solves a small puzzle and writes a first program while the mentor checks sound, screen and connection. Then you get a suggestion: which course, which group, and whether a private plan would suit better.',
    readFirst: 'To see a lesson in detail first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every syllabus is under <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Lessons are live, online and in English, with mentors based in India. For a fast answer, message us on WhatsApp in English.',
    formNote: 'No cost, no card, no obligation afterwards.'
  },

  footer: {
    cols: [
      { h4: 'Ages', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Read more', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Out of how many?'
  },

  personalityCss: `
.ag-root.ag-calr .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-calr .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-calr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-calr .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-calr .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Directorio de Centros Poblados 2017; INEI Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); GRE La Libertad notes of 8 and 13 July 2026; El Peruano on ONEM 2026; Ley 28044; MINEDU Edades normativas, CNEB, Fábrica de Programadores; UTEC OPI rules 2025; EF EPI 2025; tz database. Data: GORE La Libertad artisan register (RNA 2025), ODC-By.',
    localProject: 'Which province of La Libertad has the most registered artisans? An original Python project on the GORE La Libertad RNA artisan register (ODC-By): Version 1 counts 4,104 registrations and ranks Pataz, Sánchez Carrión and Trujillo; Version 2 joins the INEI 2025 province populations by name and finds Pataz at 127.4 per 10,000 people while Trujillo drops to tenth of twelve at 6.9. Lesson family: count versus rate, via a dictionary join.',
    requiredMentions: ['artesanos.csv', 'Provinces: 12 Artisans: 4104', 'PATAZ 1074 artisans, 127.4 per 10,000 people', 'Trujillo comes 10 of 12 with 6.9', '2,056,445', '177,797 secundaria pupils from 936 public and private schools', 'La Libertad scores 513', 'Out of how many?', 'Formación Dual y en Alternancia'],
    sources: [
      { claim: 'Department and province populations of La Libertad, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Trujillo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Huamachuco, Chepén and Pacasmayo populated-centre figures, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto13.xlsx' },
      { claim: '177,797 La Libertad pupils from 936 schools in the first ONEM 2026 round; levels; UGEL registration dates.', url: 'https://www.gob.pe/institucion/regionlalibertad-gre/noticias/1416180-mas-de-177-mil-escolares-de-la-libertad-participan-en-la-olimpiada-nacional-escolar-de-matematicas-2026-onem' },
      { claim: 'Dual training model in six public technical institutes, over 2,000 students, 27 institutes.', url: 'https://www.gob.pe/institucion/regionlalibertad-gre/noticias/1418072-la-libertad-lidera-la-formacion-dual-y-en-alternancia-en-institutos-tecnologicos-publicos-a-nivel-nacional' },
      { claim: 'Internet, computer and internet-use shares for La Libertad and Peru, 2022 and 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Artisan register dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/artesanos-registrados-en-el-rna-de-la-regi%C3%B3n-la-libertad-2025' },
      { claim: 'ONEM 2026 national totals and final.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'EF EPI 2025 scores for Peru, La Libertad and Trujillo.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time without daylight saving.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Names of ONEM medal winners in the GRE note: private individuals, left out.',
      'Any artisan name or e-mail address from the register: never printed or used.',
      'A combined "Trujillo today" population from districts: INEI publishes none, so none is made.',
      'Any claim that the rate measures all craft work: it measures registrations only.',
      'Any connection with the GRE or GORE La Libertad, MINEDU, the ONEM or UTEC: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
