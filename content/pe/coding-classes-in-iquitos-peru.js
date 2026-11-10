// SHIP: market (city) | Iquitos: live online coding in English for every age, at home anywhere in Loreto | a rule that is too loose: startswith('sp') swallows real species; test what a rule must not catch
'use strict';
// Coding classes in Iquitos, Peru (ag- city page, Peru cluster row PE051; alloc: cities, coiq, #772938).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; timing flexible at any hour (2026-11-08);
// USD only through the template's data-price anchors.
// Angle: Iquitos is the capital of Loreto and the largest Amazon city in Peru. Learning at home matters more where
// there are fewer centres to travel to. The page teaches with the IIAP's open catalogue of Amazon animal sounds,
// recorded at the Allpahuayo biological station in Loreto, where a careless rule miscounts the species.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, quotes string-matched in raw files):
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department Loreto 1,032,771;
//    province Maynas 500,640; district Iquitos 122,521 (15 September 2025). Never summed.
//  - INEI Lib1539 Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Iquitos city 377,609 (22 October 2017),
//    eighth city of Peru (GEO.md top 15).
//  - MINEDU ENLA 2024 news (facts-school/src/n-enla2024/text.txt): "las regiones Loreto y Ucayali son las que más han
//    elevado su promedio en lectura y matemática".
//  - CNEB competency 28 transversal; secundaria JER hours (FACTS 32, 33, 39); Edades normativas (FACTS 13, 14);
//    MINEDU 16 March 2026 opening, 6,225,000 students, 53,631 schools (FACTS 17); MINEDU satellite internet plan for
//    55,000 public schools (FACTS 29): "pondrá en marcha un plan para conectar 55 000 escuelas públicas a internet satelital".
//  - INEI boletín TIC II trimestre 2026 (facts-market/MARKET.md 1.4): homes with internet 64.5% nationally, 84.7% Lima
//    Metropolitana, 66.2% rest urban, 27.1% rural; 36.4% of homes with at least one computer.
//  - EF EPI 2025 (facts-market/src/ef_peru.raw): Peru 519, 52 of 123; Iquitos not among the eight cities listed.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Instituto de Investigaciones de la Amazonía Peruana (IIAP), "Registros de la Fonoteca del IIAP: biblioteca
//    acústica de fauna amazónica", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/registros-de-la-fonoteca-del-iiap-biblioteca-ac%C3%BAstica-de-fauna-amaz%C3%B3nica,
//    licence odc-by on the dataset page ("Open Data Commons Attribution License"), modified 15 October 2026. Description:
//    "Catálogo de 193 registros de sonidos de fauna amazónica de la Fonoteca del Instituto de Investigaciones de la
//    Amazonía Peruana (IIAP): aves, anfibios, insectos y murciélagos, entre otros, grabados en la Estación Biológica
//    Allpahuayo (Loreto)." File catalogo_fonoteca_iiap_0.csv, 119,128 bytes, sha256 d1b47e704aff0f90..., saved 9 November
//    2026; every row estado_verificacion_fuente "pending"; recorder names are not printed.
// Our own calculations (scratchpad pe/c2/iqt/v1.py, v2.py, v3.py; python3 -I, Python 3.14.8):
//  v1: Recordings: 193 / Different names: 153
//  v2: Placeholders: 23 / Named species: 130 / First five: ['Attila spadiceus', 'Chlorophanes spiza',
//      'Conocephalinae sp.', 'Conocephalinae sp1', 'Conocephalinae sp2']
//  v3: Placeholders: 19 / Named species: 134 / Wrongly caught before: ['Attila spadiceus', 'Chlorophanes spiza',
//      'Euchrepomis spodioptila', 'Glyphorynchus spirurus'] / Names listed twice: 40 / Gap between two new codes: {88: 18}
//  Also: 166 codes in the new IIAP-FONO-2026-NNNN format, 27 in older formats; Ramphastos tucanus 0204 and 0116.
// Lesson family: a matching rule that is too loose (startswith) swallows valid names; test a rule on what it must NOT
// catch, then use an exact pattern; a constant gap between duplicate codes points to a copied block.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'names = []',
  'with open("catalogo_fonoteca_iiap_0.csv", encoding="utf-8-sig") as sounds:',
  '    for row in csv.DictReader(sounds):',
  '        names.append(row["titulo"])',
  '',
  'print("Recordings:", len(names))',
  'print("Different names:", len(set(names)))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'names = set()',
  'with open("catalogo_fonoteca_iiap_0.csv", encoding="utf-8-sig") as sounds:',
  '    for row in csv.DictReader(sounds):',
  '        names.add(row["titulo"])',
  '',
  'def placeholder(name):',
  '    return name.split()[1].startswith("sp")',
  '',
  'waiting = sorted(n for n in names if placeholder(n))',
  'print("Placeholders:", len(waiting))',
  'print("Named species:", len(names) - len(waiting))',
  'print("First five:", waiting[:5])'
].join('\n');

const V3 = [
  'import csv',
  'import re',
  'from collections import Counter',
  '',
  'names = []',
  'codes = {}',
  'with open("catalogo_fonoteca_iiap_0.csv", encoding="utf-8-sig") as sounds:',
  '    for row in csv.DictReader(sounds):',
  '        names.append(row["titulo"])',
  '        codes.setdefault(row["titulo"], []).append(row["codigo_registro"])',
  '',
  'def placeholder(name):',
  '    return re.fullmatch(r"sp\\d*\\.?", name.split()[1]) is not None',
  '',
  'distinct = set(names)',
  'waiting = {n for n in distinct if placeholder(n)}',
  'print("Placeholders:", len(waiting))',
  'print("Named species:", len(distinct - waiting))',
  'print("Wrongly caught before:",',
  '      sorted(n for n in distinct - waiting if n.split()[1].startswith("sp")))',
  '',
  'twice = [n for n, k in Counter(names).items() if k == 2]',
  'gaps = Counter()',
  'for n in twice:',
  '    nums = [int(c[-4:]) for c in codes[n] if c.startswith("IIAP-FONO")]',
  '    if len(nums) == 2:',
  '        gaps[nums[0] - nums[1]] += 1',
  'print("Names listed twice:", len(twice))',
  'print("Gap between two new codes:", dict(gaps))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Iquitos: coding for every age' },
  slug: 'coding-classes-in-iquitos-peru',
  code: 'coiq',
  accent: '#772938',
  accentRationale: 'Coding classes in Iquitos: a deep açaí-berry red #772938 allocated to this row, strong on the warm papers and well clear of 4.5:1 on all three',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Iquitos, Peru',
  title: 'Coding Classes in Iquitos, Peru: Live Online, in English',
  description: 'Coding classes in Iquitos for children, teens and adults: live online in English at hours you pick, set up on modest connections, with an Amazon sound-data project.',
  ogDescription: 'Live online coding for learners in Iquitos and Loreto, aged six to adult, taught in English at any hour, with a Python project on the IIAP catalogue of Amazon animal sounds recorded at Allpahuayo.',
  twitterDescription: 'Coding in Iquitos, live online in English: by age, what school covers, and a Python project on Amazon animal sounds.',
  pageName: 'Coding Classes in Iquitos, Peru',
  webPageDescription: 'A guide for families and adult learners in Iquitos and Loreto to live online coding classes taught in English, built from INEI census and internet figures, MINEDU curriculum and ENLA sources, and an original Python project on the IIAP Fonoteca catalogue (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Iquitos, Peru: Scratch and Python for children from 6, Python, data and app building for teenagers, and Python and data skills for adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Iquitos',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#iquitos', label: 'Iquitos' },
    { href: '#setup', label: 'Connection and device' },
    { href: '#project', label: 'Amazon sounds project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Iquitos &middot; Loreto &middot; Live online, in English',
  h1: 'Coding classes in Iquitos, Peru',
  lede: 'In Iquitos a class across town can mean a long ride by mototaxi in the rain, and a course in another city means a long journey. Live online lessons remove both. This page sets out what a child in Iquitos learns about computers at school, which of our courses fits each age, what equipment and connection a class really needs, and a project built on recordings of Amazon frogs, birds, bats and crickets made a short way outside the city.',
  secondaryCta: { href: '#project', label: 'See the Amazon sounds project' },
  wa: 'Hello Modern Age Coders, we are in Iquitos, Peru and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 students taught worldwide &middot; mentors who pace their English to the learner',
  spec: [
    ['Who', 'Children from 6, teenagers and adults'],
    ['First language of code', 'Scratch, then Python from about 9'],
    ['Group', 'Fifteen to twenty learners, or a private class'],
    ['Iquitos time', 'Any day, at an hour you pick'],
    ['Teacher', 'A mentor in India, live on video'],
    ['Try it', 'First class free, no card']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Learners in Iquitos can study coding from home with Modern Age Coders, live online and in English. Children of 6 start with Scratch games, from about 9 they write Python, teenagers go on to Python projects, data and apps, and adults learn Python and data skills for study or work. A mentor teaches each class live on video, in a group of fifteen to twenty or one to one, at whatever day and hour suits the family. A laptop and a steady connection are enough, and the focus is always on thinking a problem through rather than copying a solution.',

  picks: {
    eyebrow: 'Start here in Iquitos',
    h2: 'Three courses most Iquitos learners begin with',
    lede: 'A first course for young children, one for those ready to type, and one for secundaria. Adult options follow further down.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'IQT / 01', title: 'Coding for Kids', note: 'Ages 6 to 12 in groups by age, over 10 to 12 months. Blocks first, so a six year old can make a jaguar chase a ball across the screen before typing a single word.' },
      { course: 'python-ai-kids-masterclass', code: 'IQT / 02', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds with no experience. Typed Python from the start, turtle pictures, quiz games and a first taste of how AI tools are built.' },
      { course: 'python-complete-masterclass-teens', code: 'IQT / 03', title: 'Python for Teens', note: 'Ages 13 to 18, from zero. Real programs, files and data, the level at which the Amazon sounds project on this page becomes possible.' }
    ]
  },

  sections: [
    {
      id: 'iquitos',
      eyebrow: 'Iquitos in figures',
      h2: 'How big is Iquitos?',
      lede: 'The 2017 census counted 377,609 people in the city of Iquitos, the eighth largest in Peru. The 2025 census has so far been published by department, province and district, so those figures carry their own year below.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Iquitos, Maynas and Loreto populations by INEI unit', head: ['Unit', 'Population', 'Census year and measure'], rows: [
          ['Department of Loreto', '1,032,771', '2025, total population'],
          ['Province of Maynas', '500,640', '2025, total population'],
          ['District of Iquitos', '122,521', '2025, total population'],
          ['Iquitos city (urban area)', '377,609', '2017, census count']
        ] },
        { kind: 'source', html: 'INEI figures. The 2025 rows: Censos Nacionales 2025, Indicadores demográficos, Cuadro 1, reference day 15 September 2025. The city row: Perú: Perfil Sociodemográfico 2017, Cuadro N° 1.9, census of 22 October 2017. The city spreads over several districts, so these numbers overlap and are not added.' },
        { kind: 'two', mt: true,
          leftH3: 'Districts that share one city',
          left: [
            'The district of Iquitos holds the old centre, but the city also covers Punchana, Belén and San Juan Bautista. A class at home is the same distance from all of them.',
            'Outside the city, Maynas runs along rivers where families may be hours from the nearest academy of any kind. Wherever a usable connection reaches, so does a live class.'
          ],
          rightH3: 'A region that is catching up',
          right: [
            'MINEDU\'s report on ENLA 2024 singled out Loreto: "las regiones Loreto y Ucayali son las que más han elevado su promedio en lectura y matemática". The two Amazon regions raised their average scores in reading and maths more than any others.',
            'That progress is a good base for coding. A child who is gaining confidence in maths is ready to see numbers move on a screen and to make them obey a rule.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School and computers',
      h2: 'Do schools in Iquitos teach coding?',
      lede: 'Programming is not a school subject anywhere in Peru, Loreto included. Families who want it look for it outside the timetable.',
      body: [
        { kind: 'two',
          leftH3: 'What the curriculum asks for',
          left: [
            'The national curriculum (CNEB) treats digital skill as one of two transversal competencies, number 28, shared by every area rather than taught as its own. Its capacities cover using digital spaces, handling information and making digital objects. No programming language appears in its standards.',
            'In secundaria the regular week runs to 35 hours, with Matemática and Comunicación at 4 hours each, Inglés at 3 and Educación para el Trabajo at 2. Informatics is absent.'
          ],
          rightH3: 'Connecting schools first',
          right: [
            'MINEDU announced in September 2026 that it "pondrá en marcha un plan para conectar 55 000 escuelas públicas a internet satelital". In much of Loreto the first task is a reliable connection, before any question of what to teach on it.',
            'At home the national picture is uneven too. INEI found that in the second quarter of 2026 internet reached 84.7% of homes in Lima Metropolitana, 66.2% of homes in other urban areas and 27.1% of rural homes, and that 36.4% of homes in Peru had at least one computer.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Iquitos school years and our starting course for each', head: ['School years', 'Usual age (MINEDU, 31 March)', 'Our starting course', 'What they make first'], rows: [
          ['1° to 3° primaria', '6 to 8', 'Coding for Kids (Scratch)', 'A moving, talking animal scene'],
          ['4° to 6° primaria', '9 to 11', 'Python and AI for Kids', 'A quiz that keeps score'],
          ['1° to 3° secundaria', '12 to 14', 'Python for Teens', 'A text game with choices'],
          ['4° and 5° secundaria', '15 and 16', 'Python, then data or Java', 'A summary of a real data file'],
          ['After school', '17 and over', 'Python masterclass or data analysis', 'A tool for study or work']
        ] },
        { kind: 'source', html: 'Ages from MINEDU\'s Edades normativas (age on 31 March). Hours and competency 28 from the CNEB. Internet and computer shares from INEI\'s ICT bulletin for the second quarter of 2026. Course choices and first projects are ours.' }
      ]
    },
    {
      id: 'setup',
      eyebrow: 'Connection and device',
      h2: 'What does a child in Iquitos need for an online coding class?',
      lede: 'Less than many families fear. A computer matters more than a fast plan, and a steady connection matters more than a fast one.',
      body: [
        { kind: 'ol', items: [
          '<strong>A laptop or desktop.</strong> Scratch runs in a browser, and Python can be installed or used online. A phone is fine for joining the call but too small for writing code; a tablet with a keyboard is a workable stopgap for under nines.',
          '<strong>Headphones with a microphone.</strong> In a busy house, or under a loud rain on a tin roof, they make the mentor\'s English much easier to follow.',
          '<strong>A connection that holds for an hour.</strong> Video can drop to audio when the signal weakens; the shared screen and the code stay visible. If power or signal cuts out, a one-to-one class can be moved.',
          '<strong>A quiet corner at a regular time.</strong> The same hour each week builds the habit faster than any app reminder.',
          '<strong>A parent nearby for the youngest.</strong> Six and seven year olds do better with an adult in the room for the first few classes.'
        ] },
        { kind: 'p', mt: true, html: 'The free first class doubles as a technical check. If audio, screen sharing or the code editor misbehave on your equipment, the mentor sorts it out with you before anything is paid for.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. We teach live, online and only in English, and we are clear about it from the first message.',
      body: [
        { kind: 'two',
          leftH3: 'How mentors make English easier',
          left: [
            'Mentors are based in India. They use short sentences, show as well as tell on a shared screen, and pause so the learner can answer. A child who mixes Spanish into a reply is understood, and gets the English phrase back to try.',
            'The vocabulary of code is small. Words like print, if, else and repeat come up hundreds of times, and children learn them by using them.'
          ],
          rightH3: 'Two skills in one hour',
          right: [
            'For many Iquitos families the English is part of the appeal. The child practises listening and speaking with a patient adult while building something they care about, which is often easier than a grammar lesson.',
            'EF\'s English Proficiency Index 2025 puts Peru in its moderate band, with a score of 519 and 52nd place of 123 countries; Iquitos is not among the eight cities it scores. We plan for learners whose English is still growing.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'An Amazon data project',
      h2: 'How many kinds of animal can you hear in the Amazon sound library?',
      lede: 'The Instituto de Investigaciones de la Amazonía Peruana publishes a catalogue of its animal sound recordings as open data. It is a perfect file for learning that counting is harder than it looks.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The IIAP describes the dataset, on Peru\'s national open-data platform, as a "Catálogo de 193 registros de sonidos de fauna amazónica", with birds, frogs, insects and bats among others, recorded at the Estación Biológica Allpahuayo in Loreto. It carries the Open Data Commons Attribution Licence (ODC-By). We downloaded catalogo_fonoteca_iiap_0.csv on 9 November 2026.',
            'Every row has a recording code, a scientific name in the column titulo and, usually, a Spanish common name: Tucán de pecho blanco, Rana Gladiadora, Mielero verde. The catalogue marks every identification as still awaiting taxonomic verification, so our counts describe the file, not the forest.'
          ],
          rightH3: 'The question',
          right: [
            'A ten year old asked: how many different animals are in there? The first answer, 193, counts recordings. Some animals were recorded twice, so Version 1 also counts distinct names with a set.',
            'Then a harder problem appears. Some names are not species at all but labels for sounds not yet identified, such as "Sonoespecie sp3" or "Saguinus sp.", a tamarin whose species is unknown. Those should not count as named species.'
          ] },
        { kind: 'code', label: 'Version 1: recordings against distinct names', lang: 'Python', code: V1, note: 'It prints: <code>Recordings: 193</code> and <code>Different names: 153</code>.' },
        { kind: 'p', mt: true, html: 'In scientific naming, "sp." after a genus means "some species of this genus, not yet identified", and labels like sp1 and sp2 number several such unknowns. So a student writes a quick rule: if the second word starts with "sp", it is a placeholder.' },
        { kind: 'code', label: 'Version 2: a quick rule for placeholders', lang: 'Python', code: V2, note: 'It prints: <code>Placeholders: 23</code>, <code>Named species: 130</code> and <code>First five: [\'Attila spadiceus\', \'Chlorophanes spiza\', \'Conocephalinae sp.\', \'Conocephalinae sp1\', \'Conocephalinae sp2\']</code>.' },
        { kind: 'p', mt: true, html: 'Look at the first two names in the list. Attila spadiceus is a real bird with a full species name, and so is Chlorophanes spiza, the Mielero verde. Their second words just happen to begin with "sp". The rule was tested only on the names it was meant to catch, never on the names it had to leave alone.' },
        { kind: 'code', label: 'Version 3: an exact pattern, and a look at the names listed twice', lang: 'Python', code: V3, note: 'It prints: <code>Placeholders: 19</code>, <code>Named species: 134</code>, <code>Wrongly caught before: [\'Attila spadiceus\', \'Chlorophanes spiza\', \'Euchrepomis spodioptila\', \'Glyphorynchus spirurus\']</code>, <code>Names listed twice: 40</code> and <code>Gap between two new codes: {88: 18}</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Counting the catalogue three ways (our counts)', head: ['What is counted', 'Number', 'Why it differs'], rows: [
          ['Rows (recordings)', '193', 'Some names appear twice'],
          ['Distinct scientific names', '153', 'Includes labels for unidentified sounds'],
          ['Named species, loose rule', '130', 'Four real birds wrongly removed'],
          ['Named species, exact rule', '134', 'Only sp., sp1, sp2 and similar removed'],
          ['Names listed twice', '40', '18 of them as pairs exactly 88 codes apart']
        ] },
        { kind: 'source', html: 'Data: IIAP, Registros de la Fonoteca del IIAP: biblioteca acústica de fauna amazónica, Plataforma Nacional de Datos Abiertos, ODC-By. All counts are ours, run with python3 -I. Of the 193 codes, 166 use the newer IIAP-FONO-2026 format and 27 older formats; among the 40 doubled names, the other 22 pair a new code with an old one.' },
        { kind: 'p', mt: true, html: 'The last line is the detective part. Eighteen names, such as the Tucán de pecho blanco at codes 0116 and 0204, appear twice with new-format codes exactly 88 apart. A gap that never varies suggests a block of entries entered twice, rather than eighteen birds that each happened to be recorded again. It could also be a deliberate second recording; the file cannot tell us which. A careful analyst reports the pattern and asks the IIAP before deleting anything.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Under 8, no computer.</strong> Write ten animal names on cards, two of them twice and one as "frog, unknown". How many animals do you have? Argue about the unknown one.',
          '<strong>Scratch, 8 to 10.</strong> Build a list of names and a button that adds a name only if it is not already in the list.',
          '<strong>First Python, 10 to 12.</strong> Run Version 2 in your head on "Attila spadiceus" and "Myotis sp.". Which answer is wrong, and why?',
          '<strong>Teenagers.</strong> Write three names your rule must reject and three it must accept, before you write the rule. Then write the rule.',
          '<strong>Going further.</strong> Group the 134 named species by genus, the first word of the name. Which genus has most recordings? (In this file, the tree frogs of Boana lead.)'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Which coding course suits my child, my teenager or me?',
      lede: 'The main question is age; the second is what the learner wants to make. Our course ages are flexible by a year either way.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children from 6', p: 'Scratch first: pictures, sounds and simple games built by snapping blocks. From about 9, a child types Python and makes quizzes and turtle drawings. Groups are by age, so younger children are never lost in a class of older ones.' },
          { h3: 'Teenagers', p: 'Python as the base, then a direction: data, Java, apps or websites. Secundaria students also learn to test their own programs and to explain their reasoning, which is exactly what Version 3 above asks of them.' },
          { h3: 'Adults', p: 'Anyone from 18, whether studying at a university in Iquitos or working, can begin with Python and move on to data analysis or AI tools. People start in their thirties, fifties and sixties; age is not the hurdle people expect.' }
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'What time would classes be in Iquitos?',
      lede: 'At a time you choose. Iquitos keeps Peru time, like Lima, and the mentor adjusts to it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Iquitos time beside the mentor\'s time in India, as examples only', head: ['In Iquitos', 'In India', 'Date in India'], rows: [
          ['07:30', '18:00', 'Same day'],
          ['09:30', '20:00', 'Same day'],
          ['12:00', '22:30', 'Same day'],
          ['15:30', '02:00', 'The following day'],
          ['18:30', '05:00', 'The following day']
        ] },
        { kind: 'source', html: 'Peru is on UTC minus 5 hours throughout the year without daylight saving (tz database, America/Lima). India is on UTC plus 5 hours 30 minutes. The difference is always 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'A time chosen once stays put, because neither country changes its clocks. You book in your own Iquitos time; the mentor sees the India equivalent. The 2026 school year began nationwide on 16 March 2026, with 6,225,000 students in 53,631 schools, and our classes do not stop for school holidays unless you want them to.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How an Iquitos learner progresses',
    lede: 'The same six steps for every age. They help us place a new student and help families see real progress.',
    table: { caption: 'From blocks to careful counting (our milestones)', head: ['Milestone', 'Often reached', 'The learner is able to'], rows: [
      ['1. Order', 'At 6 or 7', 'Give a character steps in the right sequence'],
      ['2. Loop', 'At 7 or 8', 'Repeat actions and respond to clicks'],
      ['3. Remember', 'At 8 to 10', 'Keep scores and lists that change'],
      ['4. Write', 'From 9', 'Type Python with conditions and functions'],
      ['5. Count honestly', 'From 12', 'Tell rows from things, and distinct from duplicate'],
      ['6. Test the rule', 'From 13', 'Check a rule against cases it must not catch']
    ] },
    left: { h3: 'For parents', ps: [
      'Steps 5 and 6 are the Amazon sounds project. They are what separate someone who runs code from someone whose results can be trusted.',
      'Progress reports describe what your child built and could explain.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you trust a rule, try to break it with an example.',
      'Counting rows is easy. Deciding what a row means is the real work.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Iquitos',
    lede: 'Listed by age. Every course is taught live in English by a regular mentor, in a group or privately.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'IQT / KIDS / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Children of 8 to 14 script their own games in Luau.' },
        { code: 'IQT / KIDS / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and plans for 7 to 12 year olds, beside or before code.' },
        { code: 'IQT / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works and where it goes wrong, for ages 8 to 14.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'IQT / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'From spreadsheets of data to first models, ages 14 to 18.' },
        { code: 'IQT / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A full Java path from first program to objects.' },
        { code: 'IQT / TEEN / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development for teens', blurb: 'Build and publish working websites with React and Node.js.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'IQT / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'A complete Python course for beginners over 18.' },
        { code: 'IQT / ADULT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Excel, Sheets and Power BI with AI help, no coding needed.' },
        { code: 'IQT / ADULT / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and dashboards in one course.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work from Iquitos',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'Iquitos mornings meet the Indian evening, a calm hour for many children.' },
      { time: 'Later', l: 'Afternoons and evenings are possible too; you choose.' },
      { time: 'Private', l: 'A one-to-one slot set with your mentor and moved if the power fails.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One teacher who gets to know the learner.' },
      { h3: 'Plain English', p: 'Slow, clear speech and time to answer.' },
      { h3: 'Learner at the keys', p: 'The student writes the code every class.' },
      { h3: 'Separate ages', p: 'Children, teenagers and adults never mixed.' },
      { h3: 'Families updated', p: 'What was made and what comes next.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty together, or one alone.' }
    ]
  },

  projectsH2: 'Some work by our older students',
  projectsLede: 'Learners who keep going build real tools. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reviews left on Google by parents and learners, unedited.',

  fees: {
    h2: 'Fees for learners in Iquitos',
    lede: 'Payment is monthly and set in US dollars. The card is charged in dollars and your bank does the conversion to soles at its own rate, so your statement may show a slightly different amount.',
    free: ['A free first lesson', 'A small puzzle, a first program and a connection check', 'No card required'],
    group: ['Fifteen to twenty learners near the same age', 'One mentor throughout', 'Two live classes each week', 'Monthly, cancel when you like'],
    one: ['A private class with one mentor', 'Projects built around the learner', 'Days and times you choose']
  },

  faq: {
    eyebrow: 'Iquitos families ask',
    h2: 'Coding classes in Iquitos: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are live and online and the teaching language is English only. Mentors keep to short, clear sentences, adjust to how fast and how the learner speaks, and gently turn Spanish answers into English ones.' },
      { q: 'Can a child in Iquitos learn coding online?', a: 'Yes. Children from 6 join live from home in Iquitos, Punchana, Belén, San Juan Bautista or anywhere in Loreto with a usable connection, starting in Scratch and moving to Python at about 9.' },
      { q: 'Is a phone enough?', a: 'For joining the call, yes; for writing code, not really. A laptop or desktop works much better. A tablet with a keyboard is a reasonable start for children under 9.' },
      { q: 'What if the internet or power cuts out?', a: 'Video can fall back to audio while the shared screen stays up. If a class is lost, one-to-one lessons can be rescheduled with your mentor, and group learners can catch up on what was covered.' },
      { q: 'Do schools in Iquitos teach programming?', a: 'No school in Peru has programming as a subject. The national curriculum treats digital skills as a competency across all areas, and the regular secundaria week has no informatics hours.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Iquitos is on Peru time; India runs 10 hours 30 minutes ahead, so 09:30 in Iquitos is 20:00 there.' },
      { q: 'From what age?', a: 'Six, with Scratch. Typed Python from about 9, teenage courses from 13, and adult courses at any age from 18.' },
      { q: 'Can adults in Iquitos join?', a: 'Yes, in adult groups or one to one, usually starting with Python and moving to data analysis or AI tools for work.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars as shown on this page; your bank changes the amount into soles. Visitors from India see rupees. The first lesson is free.' },
      { q: 'Is there a certificate?', a: 'Courses that include one end with our own certificate of completion. It is not a Peruvian school qualification and is not issued or recognised by MINEDU or any university.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for families and adult learners in Loreto.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The national overview and every Peru page.' },
      { href: '/python-for-kids-peru', label: 'Python for kids in Peru', p: 'What typed code looks like for children.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding classes for teens in Peru', p: 'Paths for secundaria students.' },
      { href: '/coding-for-adults-over-50-peru', label: 'Coding for adults over 50', p: 'For learners who start later.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Iquitos',
    lede: 'The trial lesson is a short puzzle, a first program and a quick check of sound, screen and connection. Afterwards the mentor suggests a course and a group that fit.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'Classes are live online, taught in English only by mentors in India. WhatsApp in English gets the quickest answer.',
    formNote: 'Free and with no obligation.'
  },

  footer: {
    cols: [
      { h4: 'By age', links: [
        { href: '/python-for-kids-peru', label: 'Python for kids' },
        { href: '/coding-classes-for-teens-peru', label: 'Teens in Peru' },
        { href: '/coding-for-adults-over-50-peru', label: 'Adults over 50' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test a rule on what it must not catch'
  },

  personalityCss: `
.ag-root.ag-coiq .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-coiq .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-coiq .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-coiq .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-coiq .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro 1) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); INEI ICT bulletin II trimestre 2026; MINEDU CNEB, Edades normativas, ENLA 2024 news, satellite-internet plan (September 2026); EF EPI 2025; tz database America/Lima. Data: IIAP Fonoteca catalogue, ODC-By.',
    localProject: 'How many kinds of animal are in the IIAP Amazon sound library? An original Python project on the Fonoteca catalogue (ODC-By, 193 recordings from the Allpahuayo station, Loreto): Version 1 counts 193 rows and 153 names; Version 2 removes placeholders with startswith("sp") and wrongly removes four real birds (130 species); Version 3 uses an exact pattern (19 placeholders, 134 species) and finds 18 doubled names whose codes are exactly 88 apart. Lesson family: a rule that is too loose.',
    requiredMentions: ['catalogo_fonoteca_iiap_0.csv', 'Different names: 153', 'Named species: 134', 'Gap between two new codes: {88: 18}', '377,609', '500,640', '1,032,771', 'Loreto y Ucayali', 'Test a rule on what it must not catch'],
    sources: [
      { claim: 'Loreto, Maynas and Iquitos district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Iquitos city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'IIAP Fonoteca catalogue, description and ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/registros-de-la-fonoteca-del-iiap-biblioteca-ac%C3%BAstica-de-fauna-amaz%C3%B3nica' },
      { claim: 'ENLA 2024: Loreto and Ucayali raised their averages most.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'MINEDU plan to connect 55,000 public schools by satellite.', url: 'https://www.gob.pe/institucion/minedu/noticias/1438938-minedu-conectara-a-internet-satelital-a-55-000-escuelas-publicas' },
      { claim: 'Home internet and computer shares, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'CNEB transversal TIC competency and secundaria hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 Peru score and cities listed.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'That the 18 pairs 88 codes apart are duplicates: the page reports the pattern and leaves the answer to the IIAP.',
      'The Maynas traffic-ticket file in opendata.tsv: not used; an enforcement dataset is a poor fit for a children\'s page.',
      'Any road-access or travel-time figure for Iquitos: no primary source checked, so none is printed.',
      'Recorder names from the catalogue: not printed.',
      'A combined Iquitos population from city, province or district figures: never summed.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
