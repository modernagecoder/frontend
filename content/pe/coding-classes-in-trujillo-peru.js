// SHIP: market (city) | Trujillo: a university city, kids to undergraduates, the districts around the centre | concentration: sort, top 1 per cent share of a total, then a like-for-like median
'use strict';
// Coding classes in Trujillo, Peru (ag- city page, Peru cluster row PE046, P6; alloc: cities, cotr, #8F3830). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: any day, any hour; USD only
// through data-price anchors. Kids and teens first; all ages covered.
// Spine (differs from the La Libertad region page, which is about provinces, ONEM numbers and artisans as rates): Trujillo is a
// university city of many districts. The page walks a family from primaria to the first year at university, compares the two
// school-day models a Trujillo teenager may have (JER and JEC), shows the city's universities by size, and teaches with
// Hidrandina's own billing data for Trujillo province.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/; every quote string-matched in the raw file):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (src/inei/tab/tsv_ind_00/sheet2_CUADRO_N_1.tsv):
//    LA LIBERTAD 2056445; PROVINCIA TRUJILLO 1090001; districts TRUJILLO 307542, LA ESPERANZA 211173, EL PORVENIR 113344,
//    HUANCHACO 92324, ALTO TRUJILLO 85323, VÍCTOR LARCO HERRERA 81901, FLORENCIA DE MORA 57224, LAREDO 52834, MOCHE 50098,
//    SALAVERRY 29042, SIMBAL 4793, POROTO 4403 (12 districts). Never summed.
//  - INEI Lib1539 Cuadro N° 1.9 (places.tsv): Trujillo city 919,899 (2017 census, conglomerate).
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (src/inei/pub/compendio2026-tomo1.txt): 5.66 "004 Universidad Nacional de
//    Trujillo ... 14 963" (2025 enrolment); 5.64 UNT entrants 2025 "2 866"; 5.67 (private) "074A Universidad Católica de
//    Trujillo Benedicto XVI ... 9 748"; "090 Universidad Privada de Trujillo ... 2 410".
//  - CNEB (facts-school/src/cneb/text.txt): JER secundaria "Matemática 4 4 4 4 4", "Educación para el trabajo 2 2 2 2 2",
//    "Total de horas 35 35 35 35 35"; JEC "Matemática 6 6 6 6 6", "Educación para el trabajo 3 3 3 3 3", "Total de horas
//    45 45 45 45 45"; "horas pedagógicas (45 minutos)"; competency 28 transversal.
//  - GRE La Libertad, gob.pe 8 July 2026 (FACTS 109): "En esta primera fase participan 177 797 estudiantes de Educación
//    Secundaria ... pertenecientes a 936 instituciones educativas públicas y privadas de la región".
//  - OPI, UTEC (opi-home): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; 2025 rules (FACTS 116,
//    118): Fase 2 C++ only, generative AI banned.
//  - EF EPI 2025 (facts-market/src/ef_peru.raw): cityScore trujillo "moderate" 519; Peru 519; lima 555.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year, last summer time 1994; Asia/Kolkata UTC+5:30.
//  - Data: Hidrandina S.A. (Distriluz), "Consumo energético de clientes Hidrandina [Distriluz - DLZ]", Plataforma Nacional de
//    Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/consumo-energ%C3%A9tico-de-clientes-hidrandina-distriluz-dlz,
//    licence "Open Data Commons Attribution License" (dc:license on the raw page), released 2022-12-28, modified 2026-06-18.
//    Description: "Registro mensual del consumo de energía eléctrica de los usuarios en el ámbito operacional de la empresa
//    Hidrandina, que brinda el servicio a los departamentos de La Libertad, Ancash y Cajamarca." Dictionary: Cartera "Común
//    (Residencial) o Mayor (Empresarial)"; consumption in kWh; names, addresses and ID numbers anonymised. File
//    DatosAbiertos_consumohdna_202507.csv (July 2025 billing), 206,697,916 bytes, sha256 a6c16822...5d0aa9380, 1,046,671 rows,
//    semicolons, saved to src-pages/coding-classes-in-trujillo-peru/data/ on 9 November 2026. The file also carries a billed
//    amount in soles, which this page never prints.
// Our own calculations (scratchpad pe/c1/trujillo/v1.py, v2.py; copies in src-pages/.../data/; python3 -I on the file):
//  v1 prints: Supplies in Trujillo province: 298472 / Average per supply, kWh: 186.8 / Largest single supply, kWh: 578105
//  v2 prints: Top 1%: 2984 supplies use 36.0 % of the kWh / Middle supply of all: 84.0 kWh / Trujillo middle home: 107.0 kWh /
//    La Esperanza middle home: 80.0 kWh / El Porvenir middle home: 59.0 kWh / Victor Larco Herrera middle home: 120.0 kWh
//  summary: top 0.1% (298 supplies) use 20.4% of the kWh; 1,044 "Mayor" supplies use 24.6%; 21,646 supplies billed 0 kWh;
//    Alto Trujillo appears with only 725 supplies (most of the district is probably billed under other district names; the
//    file does not say, so the page does not guess a reason).
// Lesson family: concentration. Sort a large column, measure what share of the total the top 1 per cent holds, and see why
// an average is the wrong "typical" value; then filter to like-for-like rows (homes only) before comparing districts.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = String.raw`import csv

supplies = 0
total = 0.0
biggest = 0.0
with open("DatosAbiertos_consumohdna_202507.csv", encoding="utf-8-sig") as bills:
    for row in csv.DictReader(bills, delimiter=";"):
        if row["Provincia"] == "Trujillo":
            kwh = float(row["ConsumosCalculados"])
            supplies += 1
            total += kwh
            biggest = max(biggest, kwh)

print("Supplies in Trujillo province:", supplies)
print("Average per supply, kWh:", round(total / supplies, 1))
print("Largest single supply, kWh:", round(biggest))`;

const V2 = String.raw`import csv
import statistics

kwh = []
homes = {}
with open("DatosAbiertos_consumohdna_202507.csv", encoding="utf-8-sig") as bills:
    for row in csv.DictReader(bills, delimiter=";"):
        if row["Provincia"] == "Trujillo":
            value = float(row["ConsumosCalculados"])
            kwh.append(value)
            if row["Cartera"] == "C":          # C = comun (residencial)
                homes.setdefault(row["Distrito"], []).append(value)

kwh.sort(reverse=True)
top = len(kwh) // 100
share = 100 * sum(kwh[:top]) / sum(kwh)
print("Top 1%:", top, "supplies use", round(share, 1), "% of the kWh")
print("Middle supply of all:", statistics.median(kwh), "kWh")
for district in ["Trujillo", "La Esperanza", "El Porvenir", "Victor Larco Herrera"]:
    print(district, "middle home:", statistics.median(homes[district]), "kWh")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Trujillo: school to university' },
  slug: 'coding-classes-in-trujillo-peru',
  code: 'cotr',
  accent: '#8F3830',
  accentRationale: 'Coding classes in Trujillo: a brick red #8F3830, allocated to this row, close to the adobe tones the city is known for; contrast 7.14 on #FBF8F2, 6.71 on #F5F1E8 and 6.14 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Trujillo, Peru',
  title: 'Coding Classes in Trujillo, Peru: Live Online in English',
  description: 'Coding classes in Trujillo for children, teens and university students, live online in English at any hour, from primaria to UNT, with a Hidrandina data project.',
  ogDescription: 'Live online coding for Trujillo children, secundaria students, undergraduates and adults, taught in English at the hour each family picks: the JER and JEC school days, the city\'s universities, and a Python project on Hidrandina electricity data.',
  twitterDescription: 'Coding in Trujillo, live online in English: from primaria to university, and a real Hidrandina data project.',
  pageName: 'Coding Classes in Trujillo, Peru',
  webPageDescription: 'A guide for Trujillo families, students and adults to live online coding classes taught in English, built from INEI census and university enrolment figures, MINEDU curriculum hours, regional ONEM figures, OPI rules, EF EPI 2025 and an original Python project on Hidrandina consumption open data (ODC-By).',
  courseDescription: 'Live online coding classes in English for learners in Trujillo, Peru: Scratch and Python for children from 6, Python, Java, data and competitive programming for secundaria students, and Java, Python, data structures and AI tools for university students and adults, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Trujillo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#city', label: 'Trujillo' },
    { href: '#path', label: 'School to university' },
    { href: '#schoolday', label: 'JER or JEC' },
    { href: '#project', label: 'Hidrandina project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Trujillo &middot; Live online, in English &middot; Primaria to university',
  h1: 'Coding classes in Trujillo, Peru',
  lede: 'Trujillo is a city of universities, and many of its children will one day study engineering, computing or economics a short bus ride from home. This page follows that path from the first Scratch game in primaria to the first year at university, compares the two school days a Trujillo teenager may have, and ends with a project on the electricity bills of Trujillo province.',
  secondaryCta: { href: '#path', label: 'See the path by age' },
  wa: 'Hello Modern Age Coders, we are in Trujillo, Peru and are interested in live coding classes in English. Could we try a free first class?',
  heroNote: 'Live classes online since 2020 &middot; 10,000+ students taught worldwide &middot; mentors who adjust to every learner',
  spec: [
    ['City', 'Trujillo and all its districts'],
    ['Ages', '6 to adult, in age groups'],
    ['Teens', 'Python, Java, data, contests'],
    ['Undergraduates', 'Java, DSA and Python'],
    ['Times', 'Any hour, Peru time'],
    ['Trial', 'One free class, no card']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Learners in Trujillo, Peru, can study coding with Modern Age Coders live online and in English. Six year olds begin with Scratch and move to typed Python at about 9; secundaria students go on to Python, Java, data science and contest problem solving; university students in Trujillo add Java, data structures and algorithms; and adults learn Python, data analysis or AI agents. Lessons run with a real mentor on camera, for a class of fifteen to twenty or a single learner, at whatever hour the family sets.',

  picks: {
    eyebrow: 'Start here in Trujillo',
    h2: 'Where most Trujillo learners begin',
    lede: 'A first course for children, one for secundaria students who want more than school gives, and one for those already at university.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'TRU / 01', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds starting from nothing, over 8 to 10 months. They type real Python from the first week: drawings, small games, then tiny AI experiments. Younger children start with Scratch first.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'TRU / 02', title: 'Problem Solving for Teens', note: 'Logic, data structures and algorithms for 13 to 18 year olds who already know a little code. The thinking behind olympiad problems and, later, university computing courses.' },
      { course: 'complete-java-programming-masterclass-college', code: 'TRU / 03', title: 'Java for University', note: 'For undergraduates and adults: core Java, objects, collections and on to Spring Boot. Many first-year computing and engineering courses expect exactly this.' }
    ]
  },

  sections: [
    {
      id: 'city',
      eyebrow: 'Trujillo in figures',
      h2: 'How many people live in Trujillo, and in which districts?',
      lede: 'More than a million people live in the province of Trujillo, according to INEI\'s 2025 census, and the city itself spreads across several of its twelve districts. The table separates each unit and gives each its own year.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Trujillo by the unit INEI counts', head: ['Unit', 'Population', 'Year and source'], rows: [
          ['Department of La Libertad', '2,056,445', '2025 census'],
          ['Province of Trujillo (12 districts)', '1,090,001', '2025 census'],
          ['District of Trujillo (the historic centre)', '307,542', '2025 census'],
          ['District of La Esperanza', '211,173', '2025 census'],
          ['District of El Porvenir', '113,344', '2025 census'],
          ['District of Huanchaco', '92,324', '2025 census'],
          ['District of Alto Trujillo', '85,323', '2025 census'],
          ['District of Víctor Larco Herrera', '81,901', '2025 census'],
          ['Trujillo city (urban area)', '919,899', '2017 census']
        ] },
        { kind: 'source', html: 'INEI figures: Censos Nacionales 2025, table 1 of the Indicadores demográficos (total population, 15 September 2025), and the 2017 capital-cities table in INEI\'s Perfil Sociodemográfico (table 1.9). INEI had published no 2025 figure for cities when we looked in November 2026. Rows overlap and must never be added.' },
        { kind: 'two', mt: true,
          leftH3: 'A centre and its neighbours',
          left: [
            'The district called Trujillo holds the historic centre and 307,542 people, but La Esperanza to the north is not far behind at 211,173, and El Porvenir, Alto Trujillo and Florencia de Mora climb the eastern side. Víctor Larco Herrera and Huanchaco run towards the sea.',
            'A family in Alto Trujillo and a family in Víctor Larco live in the same city but may be an hour apart in traffic. Our classes reach both in the same minute.'
          ],
          rightH3: 'Smaller places close by',
          right: [
            'Laredo, Moche and Salaverry, each with between about 29,000 and 53,000 people, sit within the province, as do the small inland districts of Simbal and Poroto. Further out, the provinces of Ascope, Virú and Pacasmayo send many students into Trujillo every day.',
            'Wherever a learner lives, the class is the same: a mentor, a screen, and a problem to work through. Our page on <a class="ag-inline-link" href="/online-coding-and-ai-classes-la-libertad-region-peru">coding and AI classes across the La Libertad region</a> covers the rest of the department.'
          ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'From primaria to university',
      h2: 'What should a Trujillo child learn first, and what comes after?',
      lede: 'Begin with play, then with typing, then with depth. The route below is our own, and a learner joins it at whatever point fits their age and experience.',
      body: [
        { kind: 'table', numCols: [], caption: 'A coding route for Trujillo learners (our courses and ages)', head: ['Stage of life', 'Age', 'Course to take', 'What they can do at the end'], rows: [
          ['Early primaria', '6 to 8', 'Coding for Kids (Scratch)', 'Build a game with a score and a timer'],
          ['Late primaria', '9 to 12', 'Python and AI for Kids, or Roblox coding', 'Write a typed program with functions'],
          ['Early secundaria', '12 to 14', 'Python for Teens', 'Read a data file and summarise it'],
          ['Late secundaria', '15 to 17', 'Java for Teens, Problem Solving, Data Science', 'Solve contest-style problems and test their code'],
          ['University', '17 and over', 'Java for University, DSA, Python masterclass', 'Pass course projects and prepare for interviews'],
          ['Work and later life', 'Any adult age', 'Data analysis, AI coding agents', 'Automate a task at work and check the result']
        ] },
        { kind: 'source', html: 'Routes and ages are ours. A learner can skip a stage: a fifteen year old with no experience starts at Python for Teens, not at Scratch.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 6 to 12', p: 'Children learn with others of the same age, in short sessions full of making. In Scratch they snap blocks into stories and games; from about nine they type Python and see why spelling matters to a computer.' },
          { h3: 'Ages 13 to 17', p: 'Secundaria is where depth pays off. A teenager who spends a year on Python and then Java arrives at university already able to plan a program, test it and explain it, which is what first-year projects actually ask for.' },
          { h3: 'Undergraduates and adults', p: 'Trujillo\'s students often meet Java and data structures in the first years of a degree. We teach them at the learner\'s pace, alongside the course, and adults use the same classes to move into data or automation.' }
        ] },
        { kind: 'p', mt: true, html: 'For families of secundaria students, our national page on <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> describes the teen courses in more depth, and Spanish-speaking parents of younger children can read <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'schoolday',
      eyebrow: 'The school week',
      h2: 'Does a Trujillo school timetable leave room for coding?',
      lede: 'It depends on the school day. Public secundaria in Peru runs on two models, the regular day (JER) and the full day (JEC), and neither includes a computing subject.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Weekly teaching hours in each secundaria grade, two school-day models (CNEB)', head: ['Area', 'Regular day (JER)', 'Full day (JEC)'], rows: [
          ['Matemática', '4', '6'],
          ['Educación para el Trabajo', '2', '3'],
          ['Total per week', '35', '45'],
          ['Computing or programming', 'None', 'None']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Currículo Nacional de la Educación Básica, plans of study for secundaria. One teaching hour lasts 45 minutes. Digital competency 28 is transversal across all areas rather than a subject.' },
        { kind: 'two', mt: true,
          leftH3: 'What the longer day changes',
          left: [
            'A student on the full day has ten more teaching hours a week, with six of mathematics instead of four. That is good for maths, and it also means late afternoons are taken. Families on JEC often prefer a coding class early in the morning or at the weekend.',
            'Neither model gives programming its own hours. Some schools use their free-disposal hours for workshops, which differ from one school to the next.'
          ],
          rightH3: 'Where coding fits',
          right: [
            'We do not replace school maths, and we do not teach for school marks. What a weekly coding class adds is a place where the maths a student already knows turns into something that runs, and where a wrong answer shows up on the screen straight away.',
            'That is also why secundaria students in La Libertad who enter the ONEM often enjoy coding: in 2026, the regional education office reported 177,797 secundaria students from 936 schools taking part in the first round.'
          ] }
      ]
    },
    {
      id: 'university',
      eyebrow: 'A university city',
      h2: 'Which universities do Trujillo students go to, and what do they need?',
      lede: 'Trujillo is home to a large public university and several private ones. Their own figures, reported to SUNEDU and collected by INEI, show how many students study there.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Undergraduate enrolment in 2025 at three Trujillo universities', head: ['University', 'Students enrolled, 2025', 'Type'], rows: [
          ['Universidad Nacional de Trujillo', '14,963', 'Public'],
          ['Universidad Católica de Trujillo Benedicto XVI', '9,748', 'Private'],
          ['Universidad Privada de Trujillo', '2,410', 'Private']
        ] },
        { kind: 'source', html: 'Source: INEI, Compendio Estadístico Perú 2026, tables 5.66 (public universities) and 5.67 (private universities), with data from SUNEDU\'s university information system. The same compendium counts 2,866 new entrants to the Universidad Nacional de Trujillo in 2025. Other universities with campuses in the city are not listed here, and we are not connected with any of them.' },
        { kind: 'two', mt: true,
          leftH3: 'Before university',
          left: [
            'Admission exams are set by each university, in Spanish, and decided by the university alone. We do not prepare students for them. What we can give a student in 4° or 5° de secundaria is a solid year of programming and reasoning, so that a computing or engineering degree starts from strength.',
            'Students who enjoy competition can also try the OPI, the Peruvian computing olympiad run by UTEC, which is free for every secundaria student in the country. Its 2025 rules allowed only C++ in the in-person final and banned generative AI for solving problems.'
          ],
          rightH3: 'During university',
          right: [
            'First-year computing courses at most universities move fast through variables, loops and objects. Undergraduates who fall behind in Java or data structures often need someone who explains the same idea three different ways; a live mentor can do that.',
            'We teach alongside the degree, never instead of it, and we do not write students\' assessed work. Our page for <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">university students in Peru</a> sets out the Java, Python and DSA courses in more detail.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Lessons are given only in English, live and online, by mentors in India who keep their English clear and simple and slow down whenever a learner needs it.',
      body: [
        { kind: 'two',
          leftH3: 'Trujillo and English',
          left: [
            'EF\'s 2025 English Proficiency Index gives Trujillo city a score of 519, which EF calls moderate and which is exactly level with Peru\'s national score. Lima city scores 555. Many Trujillo teenagers can follow a lesson in English; younger children usually need more support at first.',
            'Mentors give that support: they show before they explain, write key words on the screen, and ask the learner to say back what they understood.'
          ],
          rightH3: 'Why English helps a programmer',
          right: [
            'The documentation, forums and error messages that a university student will rely on are in English. A learner who is used to reading "IndexError: list index out of range" calmly, and working out what it means, has an advantage in any computing degree.',
            'Families also tell us that English practice comes with the code: an hour of explaining a program to a mentor is an hour of speaking English with a purpose.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Trujillo project',
      h2: 'Who uses the electricity in Trujillo, and what does a typical home use?',
      lede: 'Hidrandina, the company that supplies electricity in La Libertad, Ancash and Cajamarca, publishes every customer\'s monthly consumption as anonymised open data. Our teenagers and adults use one month of it to learn why an average can describe nobody.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is "Consumo energético de clientes Hidrandina", published by Hidrandina (Distriluz) on datosabiertos.gob.pe under an Open Data Commons Attribution licence (ODC-By), first released on 28 December 2022 and updated on 18 June 2026. We took the July 2025 file on 9 November 2026: 1,046,671 rows separated by semicolons, about 207 megabytes.',
            'Each row is one supply, usually one home or business, with its tariff, district, a "cartera" column that the data dictionary explains as Común (residential) or Mayor (business), and the kilowatt-hours billed. Names, addresses and ID numbers are masked by the publisher, and we use none of them.'
          ],
          rightH3: 'The question',
          right: [
            'How much electricity does a home in Trujillo use in a month? The quick answer is to add up all the kilowatt-hours in Trujillo province and divide by the number of supplies.',
            'Version 1 does that. It also reads the file one line at a time, which matters: a file of this size would fill a school laptop\'s memory if it were loaded all at once.'
          ] },
        { kind: 'code', label: 'Version 1: total, count and average', lang: 'Python', code: V1, note: 'It prints <code>Supplies in Trujillo province: 298472</code>, <code>Average per supply, kWh: 186.8</code> and <code>Largest single supply, kWh: 578105</code>.' },
        { kind: 'p', mt: true, html: 'The largest supply used 578,105 kWh in one month, more than three thousand times the average. A few supplies like that pull the average up a long way. So the next step is to sort every supply from largest to smallest and ask what share of all the electricity the top 1% uses.' },
        { kind: 'code', label: 'Version 2: how concentrated is it, and what is a typical home?', lang: 'Python', code: V2, note: 'It prints <code>Top 1%: 2984 supplies use 36.0 % of the kWh</code>, <code>Middle supply of all: 84.0 kWh</code>, then <code>Trujillo middle home: 107.0 kWh</code>, <code>La Esperanza middle home: 80.0 kWh</code>, <code>El Porvenir middle home: 59.0 kWh</code> and <code>Victor Larco Herrera middle home: 120.0 kWh</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'One month of electricity in Trujillo province, July 2025 bills (our calculation)', head: ['Group of supplies', 'How many', 'Share of all kWh'], rows: [
          ['Largest 0.1%', '298', '20.4%'],
          ['Largest 1%', '2,984', '36.0%'],
          ['"Mayor" (business) customers', '1,044', '24.6%'],
          ['All supplies', '298,472', '100%']
        ] },
        { kind: 'source', html: 'Data: Hidrandina (Distriluz), Consumo energético de clientes Hidrandina, datosabiertos.gob.pe, ODC-By. July 2025 billing period, Trujillo province only. Shares, medians and counts are ours. 21,646 supplies were billed zero kWh that month. The file also contains billed amounts, which we do not use or print.' },
        { kind: 'p', mt: true, html: 'Three numbers now tell the story. The average supply used 186.8 kWh, but the middle supply, the median, used 84. Fewer than three thousand supplies, mostly businesses and large sites, account for more than a third of the electricity. And once we keep only residential supplies and compare like with like, homes in different districts differ too: the middle home in Víctor Larco Herrera used 120 kWh, in El Porvenir 59. The file cannot say why, whether household size, appliances or something else, and a careful analyst says so rather than guessing.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12, on paper.</strong> Ten children have 2, 2, 3, 3, 3, 4, 4, 5, 5 and 200 marbles. Work out the average and the middle value. Which one describes a typical child?',
          '<strong>Ages 12 to 14, in Python.</strong> Put those ten numbers in a list, sort it and print what share of all the marbles the top child holds.',
          '<strong>Ages 14 and over.</strong> Change Version 2 to print the share used by the top 10% and the top 0.1%. Where does the curve flatten?',
          '<strong>Going further.</strong> Count how many supplies in each district were billed zero kWh, and decide whether they belong in the "typical home" figure.',
          '<strong>University students and adults.</strong> Write the two-sentence summary you would give a journalist, with no number that could mislead.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'At what time can a Trujillo learner have class?',
      lede: 'At the hour you choose. Trujillo runs on Peru time all year, and the mentor fits the class around school, university or work.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time in Trujillo and the same moment in India (conversions only)', head: ['Trujillo', 'India', 'Note'], rows: [
          ['07:30', '18:00', 'Same date'],
          ['09:30', '20:00', 'Same date'],
          ['12:00', '22:30', 'Same date'],
          ['14:30', '01:00', 'Next date in India'],
          ['17:30', '04:00', 'Next date in India'],
          ['21:00', '07:30', 'Next date in India']
        ] },
        { kind: 'source', html: 'Time zones: America/Lima is five hours behind UTC and Peru has had no daylight saving since 1994 (IANA tz database; INACAL holds the legal hour). Asia/Kolkata is five and a half hours ahead of UTC. The difference is a steady ten and a half hours.' },
        { kind: 'p', mt: true, html: 'A student on the full school day might take class at 07:30 before leaving home; an undergraduate might prefer the evening after lectures; a working adult might pick a weekend morning. The slot you book stays put all year because neither country moves its clocks, and you always choose it in Trujillo time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Milestones on the way from first game to real data',
    lede: 'Our own milestones. They help us place a new learner and help families see what has changed after a term.',
    table: { caption: 'From blocks to judging a number (ours)', head: ['Milestone', 'Often around', 'Shown when the learner can'], rows: [
      ['1. Make it move', 'Age 6 or 7', 'Order blocks so a character walks, jumps and stops'],
      ['2. Keep score', 'Age 7 to 9', 'Use a variable that goes up, down and resets'],
      ['3. Type it', 'Age 9 to 12', 'Type Python that repeats, decides and reuses its own functions'],
      ['4. Read a file', 'Age 12 to 15', 'Open a real dataset and count rows that match a rule'],
      ['5. Summarise honestly', 'Age 14 to adult', 'Choose between average and median and say why'],
      ['6. Scale up', 'Age 16 to adult', 'Process a file too big to load at once, line by line']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestones 5 and 6 are what the Hidrandina project practises. They are the difference between quoting a number and understanding it.',
      'Each term ends with something your child can open and explain to you.'
    ] },
    right: { h3: 'For learners', ps: [
      'One huge value can move an average a long way. Look at the middle too.',
      'Before you compare groups, make sure you are comparing the same kind of thing.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Trujillo learners',
    lede: 'Arranged by age. Every course is taught live, in English, by a regular mentor, for a group or a single learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'TRU / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch games and stories for 6 to 12 year olds, with no typing at first.' },
        { code: 'TRU / KIDS / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Children design, build and test small games of their own.' },
        { code: 'TRU / KIDS / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, confident calculation that supports school maths.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 13 to 18', courses: [
        { code: 'TRU / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From zero to files, data and projects across a school year.' },
        { code: 'TRU / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and full programs, a head start on university Java.' },
        { code: 'TRU / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts, summaries and a first model, for those who know some Python.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 17 and over', courses: [
        { code: 'TRU / ADULT / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL databases', blurb: 'Tables, queries and joins, as used in university projects and at work.' },
        { code: 'TRU / ADULT / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From first steps to advanced Python for students and professionals.' },
        { code: 'TRU / ADULT / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'AI-assisted building for students', blurb: 'Full-stack projects with AI tools, checked line by line by the student.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'What a week of classes looks like from Trujillo',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early start', l: 'A class before school or lectures, in the Indian evening.' },
      { time: 'Later in the day', l: 'Afternoon, evening or weekend hours, as your week allows.' },
      { time: 'Just one learner', l: 'A personal slot and pace agreed directly with the mentor.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'Week after week, someone who remembers last week\'s bug.' },
      { h3: 'Clear English', p: 'Plain words, shown on screen, with time to reply.' },
      { h3: 'Learner at the keyboard', p: 'Every line is typed by the student, not the teacher.' },
      { h3: 'Right age group', p: 'Children, teenagers, students and adults learn apart.' },
      { h3: 'Short reports', p: 'Families hear what was made and what is next.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Projects from students who stayed the course',
  projectsLede: 'After a year or two, students build things others can use. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'What parents and students wrote about us on Google, unedited.',

  fees: {
    h2: 'Fees for learners in Trujillo',
    lede: 'You pay month to month. Our fees are fixed in US dollars and your card is billed in dollars; the bank behind your card turns that into soles at its own rate, so the soles amount can move slightly from month to month.',
    free: ['One free class first', 'A puzzle and a small program', 'No card needed'],
    group: ['A class of fifteen to twenty, similar ages', 'One mentor throughout', 'Two live classes weekly', 'Month by month, cancel any time'],
    one: ['A mentor just for your learner', 'Pace and projects set around them', 'Days and hours you decide']
  },

  faq: {
    eyebrow: 'Trujillo families ask',
    h2: 'Coding classes in Trujillo: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our classes are taught in English only, live and online. Mentors keep their language simple, repeat when asked and adapt to how each learner speaks, so a Trujillo child still building their English can follow. A word in Spanish is fine; the mentor answers with the English word.' },
      { q: 'Is there a coding school I can visit in Trujillo?', a: 'We have no building in Trujillo or anywhere in Peru. Every class happens live over video, so learners in La Esperanza, Huanchaco, El Porvenir or the centre join in exactly the same way from home.' },
      { q: 'What age is best to start?', a: 'Any age from six. Young children start with Scratch and move to typed Python around nine; teenagers and adults with no experience start with Python in their own age group. It is never too late: some of our learners are in their sixties.' },
      { q: 'My child is on the full school day (JEC). When could classes fit?', a: 'Many JEC families choose an early morning slot, before school, or a weekend. Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.' },
      { q: 'Can you help a student at the Universidad Nacional de Trujillo?', a: 'We teach Java, Python, data structures and algorithms alongside any degree, at the student\'s pace. We are not connected with the UNT or any other university, and we do not complete assessed work for students.' },
      { q: 'Do you prepare students for university admission exams?', a: 'No. Admission exams are set in Spanish by each university, which alone decides who is admitted. A year of programming and problem solving does build the careful reasoning that any maths paper rewards.' },
      { q: 'Is there a computing olympiad for Trujillo students?', a: 'Yes, the OPI, organised by UTEC and free for all secundaria students in Peru. Under its 2025 rules the final allowed only C++ and banned generative AI. We teach with our own problems and are not connected with the organiser.' },
      { q: 'What does a month cost, and in what currency?', a: 'The monthly fee appears on this page in US dollars and is charged in dollars; your bank turns it into soles. Visitors from India see the fee in rupees. The trial class costs nothing and needs no card.' },
      { q: 'Will my child get a certificate?', a: 'Courses that offer one end with a Modern Age Coders certificate of completion. It is ours alone, with no link to MINEDU, a university or a school, and it is not a Peruvian qualification.' },
      { q: 'Can adults in Trujillo join?', a: 'Yes. Adults learn in adult groups, usually starting with Python and moving to data analysis, databases or AI coding agents, at hours that fit around work.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Trujillo families and students.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The Peru guide and every page in it.' },
      { href: '/online-coding-and-ai-classes-la-libertad-region-peru', label: 'La Libertad region', p: 'Provinces beyond Trujillo.' },
      { href: '/java-course-peru', label: 'Java course in Peru', p: 'Java for school and university students.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What a ten year old\'s Python looks like.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'AI for secundaria, with age rules respected.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' }
    ]
  },

  start: {
    h2: 'Try a free class from Trujillo',
    lede: 'The trial is a real lesson: a puzzle, a short program and a conversation. By the end the mentor knows the learner\'s level and comfort in English, and recommends a course and a group.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">every course</a> and its syllabus.',
    note: 'Classes are live online, with mentors in India, and in English only. For a quick answer, write to us on WhatsApp in English.',
    formNote: 'Free, with no card and no commitment.'
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
        { href: '/online-coding-and-ai-classes-la-libertad-region-peru', label: 'La Libertad region' },
        { href: '/coding-courses-for-university-students-peru', label: 'University students' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'The average described nobody'
  },

  personalityCss: `
.ag-root.ag-cotr .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-cotr .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cotr .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cotr .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-cotr .ag-code-head b { text-transform: uppercase; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Cuadro N° 1), Perfil Sociodemográfico 2017 (Cuadro N° 1.9) and Compendio Estadístico Perú 2026 (tables 5.64, 5.66, 5.67); MINEDU CNEB JER and JEC plans of study; GRE La Libertad ONEM 2026 note; UTEC OPI; EF EPI 2025; tz database and INACAL. Data: Hidrandina (Distriluz), Consumo energético de clientes Hidrandina, ODC-By.',
    localProject: 'Who uses the electricity in Trujillo? An original Python project on Hidrandina\'s July 2025 consumption open data (ODC-By): Version 1 streams the 207 MB file and finds an average of 186.8 kWh across 298,472 supplies in Trujillo province; Version 2 sorts the column and shows the top 1% (2,984 supplies) using 36.0% of all kWh, a median of 84 kWh, and residential medians by district from 59 kWh (El Porvenir) to 120 kWh (Víctor Larco Herrera). Lesson family: concentration and like-for-like comparison.',
    requiredMentions: ['DatosAbiertos_consumohdna_202507.csv', 'Supplies in Trujillo province: 298472', 'Top 1%: 2984 supplies use 36.0 % of the kWh', 'El Porvenir middle home: 59.0 kWh', '1,090,001', '919,899', 'Universidad Católica de Trujillo Benedicto XVI', 'The average described nobody', 'Trujillo city a score of 519'],
    sources: [
      { claim: 'La Libertad, Trujillo province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Trujillo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'University enrolment and entrants, 2025 (Compendio 2026 tables 5.64, 5.66, 5.67).', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Hidrandina consumption dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/consumo-energ%C3%A9tico-de-clientes-hidrandina-distriluz-dlz' },
      { claim: 'JER and JEC secundaria weekly hours; transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'OPI free for secundaria students; 2025 rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Trujillo, Lima and Peru.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any electricity bill amount or tariff price in soles: the file has billed amounts, and the page prints none.',
      'A reason for the district differences in home consumption (income, household size, appliances): the file does not say, so the page does not guess.',
      'A Trujillo total made by adding districts or provinces: never summed.',
      'Admission-exam preparation or results for UNT or any university: refused.',
      'Spanish-language teaching: every class is in English.',
      'Any connection with Hidrandina, Distriluz, MINEDU, the GRE La Libertad, UTEC, UNT or any school or university: none.'
    ]
  }
};
