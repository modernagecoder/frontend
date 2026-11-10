// SHIP: market (city) | Ica teens 13 to 18: online desert coast, wine and pisco firms, AI with care | conditional shares: of the big firms, how many export? of the exporters, how many are big?
'use strict';
// Coding and AI for teens in Ica, Peru (ag- city page, Peru cluster row PE188; alloc: cities, cati, #853900).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. Audience: teenagers aged 13 to 18 and their parents.
// Spine: Ica is one of the most connected departments in Peru (nine in ten people over six use the internet), so a teen
// can take live classes from home; but secundaria has no programming slot, EF rates Ica's English low, and AI tools
// have age rules. The page gives Ica teens a path from Python to AI, explains how to use AI without copying, and
// teaches with PRODUCE's register of Ica agro-industry firms, where one percentage read backwards misleads.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-and-ai-for-teens-in-ica-peru/):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Ica city 282,407 (22 October 2017).
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department ICA 1,033,084; province ICA
//    475,739; district ICA 172,313. Capital Ica (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (compendio2026-cuadros-11.5-11.6-11.13.txt), ENAHO: 11.5 Ica "38,1 ...
//    37,3 36,9", Total 2025 "33,9"; 11.6 Ica "26,7 ... 69,0 69,1", Total "56,8"; 11.13 Ica "48,7 ... 87,1 89,1", Total
//    "81,1"; Lima Metropolitana 11.13 2025 "89,0".
//  - EF EPI 2025 (ef_peru.raw): city "Ica 467" low; stateScore "ika" low, "Ika 468"; Peru 519 moderate; Lima city 555.
//  - CNEB (FACTS 33, 39, 41, 42): TIC transversal; JER secundaria "Matemática 4 4 4 4 4 ... Inglés 3 3 3 3 3"; JEC
//    "Matemática 6 6 6 6 6 Comunicación 5 5 5 5 5 Inglés 5 5 5 5 5", total 45.
//  - ONEM 2026 (FACTS 99, 100, 105): XXII ONEM, school stage 8 July 2026, levels 1 (1°-2°), 2 (3°-4°), 3 (5°), over 1.7
//    million. OPI/OPEIA (FACTS 111, 113, 116, 118): UTEC, free; Fase 1 C++ or Python; generative AI banned; the 2025 OPEIA
//    team represented Peru at the IOAI.
//  - content/ai-tool-age-audit.json and the writer brief: Claude is 18+; ChatGPT needs a parent's permission under 18.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Ministerio de la Producción (PRODUCE), OGEIEE, "Empresas Agroindustriales Ica", Plataforma Nacional de Datos
//    Abiertos, https://www.datosabiertos.gob.pe/dataset/empresas-agroindustriales-ica-ministerio-de-la-produccion-produce,
//    licence "Open Data Commons Attribution License" (dataset-page.html), released 2024-12-27, frequency annual. File
//    DataSet1_Agroindustria_ICA_2023_rev.csv, 87,223 bytes, sha256 080e6bc4...e374e418536, 494 rows, anio 2023, ';'.
//    Columns used: tamanio_emp (MICRO 457, PEQUENA 25, MEDIANA 2, GRAN EMPRESA 10), exporta (SI 22, NO 472), descciiu
//    (ELABORACION DE VINOS 117; DESTILACION ... BEBIDAS ALCOHOLICAS 98), provincia (ICA 284, CHINCHA 140, PISCO 39,
//    NAZCA 27, PALPA 4). Money columns are never printed.
// Our own calculations (scratchpad pe/c5/cati/v1.py, v2.py; python3 -I):
//  v1 prints: Firms that export: 22 / Large firms: 10 / Large and exporting: 8
//  v2 prints: MICRO firms 457 | of these, export: 1.3 % | of all exporters: 27.3 % / PEQUENA firms 25 | 28.0 % | 31.8 %
//    / MEDIANA firms 2 | 50.0 % | 4.5 % / GRAN EMPRESA firms 10 | 80.0 % | 36.4 %
// Lesson family: conditional shares read in the right direction. "Of the large firms, what share export?" (80%) is a
// different question from "Of the exporters, what share are large?" (36.4%); the base rate decides which is useful.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'pairs = Counter()',
  'with open("DataSet1_Agroindustria_ICA_2023_rev.csv", encoding="utf-8") as fh:',
  '    for firm in csv.DictReader(fh, delimiter=";"):',
  '        pairs[(firm["tamanio_emp"], firm["exporta"])] += 1',
  '',
  'exporters = pairs[("MICRO", "SI")] + pairs[("PEQUENA", "SI")] + pairs[("MEDIANA", "SI")] + pairs[("GRAN EMPRESA", "SI")]',
  'big = pairs[("GRAN EMPRESA", "SI")] + pairs[("GRAN EMPRESA", "NO")]',
  'print("Firms that export:", exporters)',
  'print("Large firms:", big)',
  'print("Large and exporting:", pairs[("GRAN EMPRESA", "SI")])'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  '',
  'pairs = Counter()',
  'with open("DataSet1_Agroindustria_ICA_2023_rev.csv", encoding="utf-8") as fh:',
  '    for firm in csv.DictReader(fh, delimiter=";"):',
  '        pairs[(firm["tamanio_emp"], firm["exporta"])] += 1',
  '',
  'def share(part, whole):',
  '    return round(100 * part / whole, 1)',
  '',
  'sizes = ["MICRO", "PEQUENA", "MEDIANA", "GRAN EMPRESA"]',
  'exporters = sum(pairs[(s, "SI")] for s in sizes)',
  'for s in sizes:',
  '    firms = pairs[(s, "SI")] + pairs[(s, "NO")]',
  '    print(s.ljust(13), "firms", str(firms).rjust(3),',
  '          "| of these, export:", str(share(pairs[(s, "SI")], firms)).rjust(5), "%",',
  '          "| of all exporters:", str(share(pairs[(s, "SI")], exporters)).rjust(5), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Ica: coding and AI for teens' },
  slug: 'coding-and-ai-for-teens-in-ica-peru',
  code: 'cati',
  accent: '#853900',
  accentRationale: 'Coding and AI for teens in Ica: the allocated #853900, a burnt-amber brown that recalls dune sand at dusk; contrast 7.67 on #FBF8F2, 7.21 on #F5F1E8 and 6.60 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding and AI for teens in Ica, Peru',
  title: 'Coding and AI for Teens in Ica, Peru: Live Online, in English',
  description: 'Coding and AI classes for teens in Ica aged 13 to 18: live online in English at flexible hours, AI without copying, ONEM and OPI, and an Ica wine and pisco project.',
  ogDescription: 'Live online coding and AI for Ica teenagers aged 13 to 18, taught in English at any hour: what secundaria leaves out, which AI tools suit which age, the ONEM and OPI, and a Python project on PRODUCE\'s register of Ica agro-industry firms.',
  twitterDescription: 'Coding and AI for Ica teens, live online in English: AI without copying, contests, and an Ica data project.',
  pageName: 'Coding and AI for Teens in Ica, Peru',
  webPageDescription: 'A guide for Ica teenagers aged 13 to 18 and their parents to live online coding and AI classes taught in English, built from INEI census and household-survey figures, the CNEB timetable, ONEM and UTEC olympiad sources, EF EPI 2025, and an original Python project on PRODUCE\'s Empresas Agroindustriales Ica dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for teenagers aged 13 to 18 in Ica, Peru: Python, data science and machine learning, with Java, app and web development as next steps, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Ica, teens',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#ai-teens', label: 'AI for teens' },
    { href: '#exporters', label: 'Ica project' },
    { href: '#contests-ica', label: 'Contests' },
    { href: '#ica-time', label: 'Times' }
  ],
  eyebrow: 'Ica &middot; Ages 13 to 18 &middot; Live online, in English',
  h1: 'Coding and AI for teens in Ica, Peru',
  lede: 'An Ica teenager is almost certainly online already: INEI counts nine in ten people over six in the department using the internet. What secundaria does not give them is a programming class, or a careful way into AI. This page covers both, plus the contests worth entering, and a project on Ica\'s own wine and pisco makers in which a percentage read the wrong way round gives the wrong answer.',
  secondaryCta: { href: '#exporters', label: 'See the Ica project' },
  wa: 'Hello Modern Age Coders, we are in Ica, Peru and our teenager would like live coding and AI classes in English. Could we book a free first class?',
  heroNote: 'In live classrooms since 2020 &middot; more than 10,000 students across the world &middot; AI taught with judgement, not shortcuts',
  spec: [
    ['Ages', '13 to 18, grouped by age'],
    ['Start', 'Python from zero, then AI and data'],
    ['Group', 'Fifteen to twenty teens, or private'],
    ['Ica time', 'Any day and hour you pick'],
    ['Mentors', 'In India, live on video'],
    ['Trial', 'Free first class, no card']
  ],
  capsuleQ: 'For Ica teenagers',
  capsule: 'Modern Age Coders teaches coding and AI to teenagers aged 13 to 18 in Ica, Peru, live online and in English. Teens start with Python from zero, then choose data science, machine learning, Java, apps or web development, and learn to use AI tools within their age rules without handing their thinking to them. Each class has a mentor on live video, with fifteen to twenty teens of a similar age or one to one, at hours the family chooses, alongside secundaria.',

  picks: {
    eyebrow: 'Where Ica teens begin',
    h2: 'Three courses Ica teenagers start with',
    lede: 'Python first, because it leads everywhere; then AI and data for those who want to understand how models really work.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'ICA / 01', title: 'Python for Teens', note: 'Ages 13 to 18, from nothing. Functions, lists, files and real data, with every line explained. The base for everything else on this page.' },
      { course: 'ai-ml-masterclass-teens', code: 'ICA / 02', title: 'AI and machine learning for teens', note: 'For teens with some Python. How a model learns from examples, built in code step by step, so AI stops being a black box.' },
      { course: 'data-science-course-for-teens-python-data', code: 'ICA / 03', title: 'Data science for teens', note: 'Ages 14 to 18. Cleaning data, charts and first models, using real files like the Ica project below.' }
    ]
  },

  sections: [
    {
      id: 'ica',
      eyebrow: 'Ica in figures',
      h2: 'How big is Ica, and are its homes online?',
      lede: 'Ica is a city of a few hundred thousand inside a department of about a million, and its people are among the most connected in Peru.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Ica by INEI\'s units, each counted separately', head: ['Unit', 'Population', 'When counted'], rows: [
          ['Ica city, capital of the department', '282,407', '2017 census'],
          ['Department of Ica', '1,033,084', '2025 census'],
          ['Province of Ica', '475,739', '2025 census'],
          ['District of Ica', '172,313', '2025 census']
        ] },
        { kind: 'source', html: 'INEI figures: the 2017 city count is in table 1.9 of Perú: Perfil Sociodemográfico 2017; the 2025 counts are in table 1 of the Censos Nacionales 2025 demographic indicators. INEI had published no 2025 city count by November 2026. Units overlap and we never add them.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Connection in the department of Ica compared with Peru (per cent)', head: ['Measure', 'Ica 2015', 'Ica 2025', 'Peru 2025'], rows: [
          ['People aged 6 and over who use the internet', '48.7', '89.1', '81.1'],
          ['Homes with an internet service', '26.7', '69.1', '56.8'],
          ['Homes with a computer', '38.1', '36.9', '33.9']
        ] },
        { kind: 'source', html: 'From cuadros 11.13, 11.6 and 11.5 of INEI\'s Compendio Estadístico Perú 2026 (tomo 1), based on ENAHO, the national household survey. INEI prints decimal commas. The 2015 baseline is our choice.' },
        { kind: 'two', mt: true,
          leftH3: 'Nearly everyone online',
          left: [
            'In 2025, 89.1% of people aged six and over in the department used the internet, slightly above Lima Metropolitana\'s 89.0% in the same table and well above Peru\'s 81.1%. Seven in ten Ica homes had an internet service.',
            'For a teenager in Ica, Parcona or La Tinguiña, the connection is rarely the obstacle to a live class.'
          ],
          rightH3: 'Fewer computers than phones',
          right: [
            'Only 36.9% of Ica homes had a computer in 2025, a little lower than in 2015. Much of that online life happens on phones.',
            'Coding needs a keyboard. A teenager without a computer at home can often use a relative\'s laptop for two hours a week; we will check what works at the free class rather than assume.'
          ] }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'What secundaria covers',
      h2: 'Do secundaria schools in Ica teach programming?',
      lede: 'No. Ica\'s colegios follow the national plan, and neither the regular school day nor the longer full-day model has a programming area.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Weekly hours in every secundaria grade, by school-day model (CNEB)', head: ['Area', 'Regular day (JER)', 'Full day (JEC)'], rows: [
          ['Matemática', '4', '6'],
          ['Inglés', '3', '5'],
          ['Educación para el trabajo', '2', '3'],
          ['Total week', '35', '45'],
          ['Programming', 'no area', 'no area']
        ] },
        { kind: 'source', html: 'MINEDU, CNEB plan de estudios for secundaria, under the Jornada Escolar Regular and the Jornada Escolar Completa. The last row is our reading of the full plans. Read November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Digital, but not coding',
          left: [
            'The curriculum treats digital skill as transversal: competency 28 belongs to every area and to none in particular. A teacher can meet it with research, slides and video, and many do so well.',
            'What it does not require is that any teenager ever writes a program, tests it, and explains why it works. That is the part our classes add.'
          ],
          rightH3: 'English, hour by hour',
          right: [
            'An Ica teenager has three hours of Inglés a week on the regular day, five in a full-day school. EF\'s 2025 index scores Ica city 467 and the Ica region 468, both in its low band, against Lima city\'s 555.',
            'So for many Ica teens a class in English is a stretch. Mentors adapt, and coding helps: the vocabulary is small, the screen shows everything, and errors are read aloud and solved together.'
          ] }
      ]
    },
    {
      id: 'ai-teens',
      tint: 'tint',
      eyebrow: 'AI, carefully',
      h2: 'Should a teenager in Ica learn AI, and which tools can they use?',
      lede: 'Yes, they should learn how AI works, and that is different from letting an AI do their homework. Age rules apply to the tools themselves.',
      body: [
        { kind: 'two',
          leftH3: 'Learn how it works first',
          left: [
            'In our AI courses for teens, models are built in Python from small pieces: a rule that guesses, a score that measures how wrong it is, a change that makes it less wrong. A teenager who has built one knows why a chatbot can sound sure and still be mistaken.',
            'That understanding is the useful skill. Tools change every year; the habit of checking an answer against the data does not.'
          ],
          rightH3: 'Age rules we follow',
          right: [
            'Popular AI tools set their own minimum ages. ChatGPT needs a parent\'s permission for anyone under 18, and some assistants, Claude among them, are for adults only. We never ask an under-18 learner to use a tool above their age.',
            'Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists what each tool allows. In class, AI output is something to test, never something to paste.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Write it yourself first.</strong> Before asking any AI, try the problem. Even a wrong attempt shows what you do not yet understand.',
          '<strong>Ask for an explanation, not an answer.</strong> "Why does this loop stop early?" teaches more than "fix my code".',
          '<strong>Test what comes back.</strong> Run AI-suggested code on a case where you already know the answer. If it fails there, it will fail elsewhere.',
          '<strong>Say what you used.</strong> In school work and in contests, follow the rules. The OPI, for one, bans generative AI for solving its problems.'
        ] },
        { kind: 'p', mt: true, html: 'Parents who want the full argument will find it on our page about <a class="ag-inline-link" href="/build-with-ai-without-copying-peru">building with AI without copying</a>, written for Peruvian families.' }
      ]
    },
    {
      id: 'exporters',
      eyebrow: 'A real Ica project',
      h2: 'Are Ica\'s exporters mostly big firms?',
      lede: 'Ica is famous for wine and pisco, and PRODUCE, the ministry of production, publishes a register of the department\'s agro-industry firms. Our teenagers use it to learn how a percentage can be read in two directions, and why AI models get this wrong as often as people do.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'PRODUCE published "Empresas Agroindustriales Ica" on Peru\'s open data platform under the Open Data Commons Attribution Licence (ODC-By). The file, DataSet1_Agroindustria_ICA_2023_rev.csv, lists 494 manufacturing firms in the department for 2023, with each firm\'s size band and whether it exports.',
            'Wine makers are the biggest group, 117 firms, followed by 98 that distil or blend spirits, the category that covers pisco. The file also has estimated sales ranges, which this lesson leaves alone.'
          ],
          rightH3: 'The question',
          right: [
            'A teenager hears that "big firms export". Two questions hide in that sentence. Of all the large firms, how many export? And of all the exporters, how many are large?',
            'Most people assume the two answers are close. The first program counts the pieces needed to answer both.'
          ] },
        { kind: 'code', label: 'Version 1: count the pieces', lang: 'Python', code: V1, note: 'It prints: <code>Firms that export: 22</code>, <code>Large firms: 10</code> and <code>Large and exporting: 8</code>.' },
        { kind: 'p', mt: true, html: 'Eight firms are both large and exporters. Divide by the 10 large firms and you get 80%: most large firms export. Divide by the 22 exporters and you get 36.4%: most exporters are not large. Same eight firms, two denominators, two true and very different statements.' },
        { kind: 'code', label: 'Version 2: both directions for every size band', lang: 'Python', code: V2, note: 'It prints four lines: <code>MICRO firms 457 | of these, export: 1.3 % | of all exporters: 27.3 %</code>, <code>PEQUENA firms 25 | of these, export: 28.0 % | of all exporters: 31.8 %</code>, <code>MEDIANA firms 2 | of these, export: 50.0 % | of all exporters: 4.5 %</code> and <code>GRAN EMPRESA firms 10 | of these, export: 80.0 % | of all exporters: 36.4 %</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Ica agro-industry firms in 2023, read in both directions (our calculation)', head: ['Size band', 'Firms', 'Share of the band that exports', 'Share of all 22 exporters'], rows: [
          ['Micro', '457', '1.3%', '27.3%'],
          ['Small (pequeña)', '25', '28.0%', '31.8%'],
          ['Medium (mediana)', '2', '50.0%', '4.5%'],
          ['Large (gran empresa)', '10', '80.0%', '36.4%']
        ] },
        { kind: 'source', html: 'Data: Ministerio de la Producción (PRODUCE), Empresas Agroindustriales Ica, 2023, on datosabiertos.gob.pe, licence ODC-By. Shares are our own calculation. The file spells small as PEQUENA, without the ñ. Firms by province: Ica 284, Chincha 140, Pisco 39, Nazca 27 and Palpa 4.' },
        { kind: 'p', mt: true, html: 'The micro row is the surprise. Only 1.3% of micro firms export, yet they are more than a quarter of all exporters, because there are 457 of them. A small rate applied to a big group can outweigh a large rate applied to a small one. Statisticians call the size of each group the base rate, and ignoring it is one of the commonest reasoning errors there is.' },
        { kind: 'p', html: 'AI models make the same slip. A model trained to spot exporters that leans on "large" will be right about large firms and still miss most exporters, because most of them are not large. Our teenagers learn to ask "a percentage of what?" before they trust any number, theirs or a machine\'s.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Without code, ages 13 to 14.</strong> In a class of 30, 4 students play the cajón and 3 of those 4 are in 4° de secundaria; the class has 12 students in 4°. Work out both percentages, and say which one a music teacher would want.',
          '<strong>First Python.</strong> Run Version 1, then add the line that prints both percentages for large firms with the right labels.',
          '<strong>Ages 15 and over.</strong> Change Version 2 so it groups by province instead of size. Which province has the highest share of exporters, and is it also where most exporters are?',
          '<strong>Going further.</strong> Write a function <code>both_ways(a, b)</code> that takes any two yes/no columns and prints the share in each direction, then test it on wine makers and exporters.'
        ] }
      ]
    },
    {
      id: 'contests-ica',
      eyebrow: 'Contests',
      h2: 'Which maths and computing contests can an Ica teenager enter?',
      lede: 'The national maths olympiad and UTEC\'s computing and AI olympiads are open to secundaria students across Peru. We are not connected with any organiser and teach only with our own problems.',
      body: [
        { kind: 'two',
          leftH3: 'ONEM for maths',
          left: [
            'The XXII Olimpiada Nacional Escolar de Matemática, in 2026, drew more than 1.7 million secundaria students. Students enter through their school, which held the first stage nationwide on Wednesday 8 July 2026, and winners move through UGEL and regional stages to the national final.',
            'There are three levels: Nivel 1 for 1° and 2° de secundaria, Nivel 2 for 3° and 4°, and Nivel 3 for 5°. Our <a class="ag-inline-link" href="/onem-preparation-in-english">ONEM preparation page</a> explains how we train the reasoning with problems of our own.'
          ],
          rightH3: 'OPI and OPEIA for computing and AI',
          right: [
            'UTEC organises the Olimpiadas Peruanas de Computación free of charge for every secundaria student in Peru. The OPI\'s first round accepts C++ or Python; its in-person final uses C++ only, and solving problems with generative AI is not allowed.',
            'UTEC also runs the OPEIA, an olympiad in artificial intelligence, whose 2025 team represented Peru at the International Olympiad in Artificial Intelligence (IOAI).'
          ] },
        { kind: 'p', mt: true, html: '<strong>A practice problem of ours.</strong> A register lists 30 firms: 6 export, and 4 of the exporters are large; there are 5 large firms in all. What share of large firms export, and what share of exporters are large? Then: if you picked a firm at random and were told only that it exports, would you bet it is large? (Ours, written for this page. Answers: 80% and about 66.7%; yes, slightly, since two in three exporters are large here, unlike in Ica\'s real register.)' }
      ]
    },
    {
      id: 'teen-path',
      eyebrow: 'Teen by teen',
      h2: 'Which course suits an Ica teenager of 13, 15 or 17?',
      lede: 'Start from what the teenager wants to make, then match it to their year at school.',
      body: [
        { kind: 'table', numCols: [], caption: 'Suggested routes for Ica teenagers (our course ages)', head: ['Age and grade', 'If they like', 'Start with', 'Then'], rows: [
          ['13, 1° or 2° secundaria', 'Games and puzzles', 'Python for Teens', 'Problem solving and algorithms'],
          ['14, 2° or 3° secundaria', 'Numbers and charts', 'Python for Teens', 'Data science for teens'],
          ['15, 3° or 4° secundaria', 'How AI works', 'Python, then AI and machine learning', 'A first model on real data'],
          ['16, 4° or 5° secundaria', 'Phones and apps', 'App development for teens', 'Full-stack web'],
          ['17, 5° secundaria or just finished', 'University computing', 'Java for teens', 'Data structures, contests']
        ] },
        { kind: 'source', html: 'Routes are our suggestions. Grades follow MINEDU\'s normative age on 31 March: 12 in 1° de secundaria, 16 in 5°.' },
        { kind: 'p', mt: true, html: 'Every route keeps reasoning in front: tests before trust, explanations in the learner\'s own words, and no copying from AI. Teenagers heading for university admission exams, which are in Spanish, can see how those exams work on our page <a class="ag-inline-link" href="/peru-university-admission-exams-explained">Peru university admission exams explained</a>; we teach alongside school and never promise admission.' }
      ]
    },
    {
      id: 'ica-time',
      eyebrow: 'Class times',
      h2: 'What time would classes be for a teenager in Ica?',
      lede: 'Any time the family chooses. Ica follows Peru time all year and our mentors fit around it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ica hours shown in India time (conversions, not fixed slots)', head: ['Ica', 'India', 'Typical use'], rows: [
          ['07:00', '17:30', 'Before a turno tarde school day'],
          ['09:30', '20:00', 'Holiday mornings'],
          ['13:30', '00:00, next day', 'Straight after a turno mañana'],
          ['16:30', '03:00, next day', 'After homework'],
          ['20:00', '06:30, next day', 'Evening learners']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours every day and has not used daylight saving since 1994 (tz database, America/Lima; INACAL publishes legal time). India keeps UTC plus 5 hours 30 minutes, so India stays 10 hours 30 minutes ahead of Ica.' },
        { kind: 'p', mt: true, html: 'Neither clock changes, so a slot booked in April is still the same slot in November. Families book in their own time and the mentor sees the matching India hour. Many Ica teenagers start in the January to March holidays and keep their slot when classes resume.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What an Ica teenager can do at each stage',
    lede: 'Our own stages, used to place each teen and to describe progress honestly.',
    table: { caption: 'From first program to careful AI work (ours)', head: ['Stage', 'Usually reached', 'The teen can'], rows: [
      ['1. Write', 'First month', 'Write and run Python with loops and decisions'],
      ['2. Organise', 'First term', 'Split code into functions and test each one'],
      ['3. Read data', 'Within a year', 'Open a real CSV and count it correctly'],
      ['4. Question numbers', 'Within a year', 'Say what a percentage is a percentage of'],
      ['5. Model', 'Second year', 'Train a simple model and measure its errors'],
      ['6. Use AI well', 'Throughout', 'Test AI suggestions instead of trusting them']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is the Ica exporters project. It is a reasoning skill that helps in maths, science and reading the news.',
      'We tell you what your teenager built and explained, not how many hours they logged.'
    ] },
    right: { h3: 'For teens', ps: [
      'Eighty per cent of the big firms export. That does not mean eighty per cent of exporters are big.',
      'When an AI answer looks perfect, test it on a case you can check by hand.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for teens',
    h2: 'Nine more courses for Ica teenagers',
    lede: 'Three directions a teen can take after Python, each taught live in English by a regular mentor.',
    bands: [
      { num: 'I', h3: 'Build things', sub: 'Ages 13 to 18', courses: [
        { code: 'ICA / B / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Design and code mobile apps people can actually use.' },
        { code: 'ICA / B / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack web for teens', blurb: 'Front end, back end and a database, end to end.' },
        { code: 'ICA / B / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'AI-assisted projects where the teen stays in charge of the logic.' }
      ] },
      { num: 'II', h3: 'Think harder', sub: 'Ages 13 to 18', courses: [
        { code: 'ICA / T / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming from first class to full projects.' },
        { code: 'ICA / T / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures and problem solving for contest-minded students.' },
        { code: 'ICA / T / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Contest reasoning with original problems.' }
      ] },
      { num: 'III', h3: 'AI and safety', sub: 'Ages 13 to 18', courses: [
        { code: 'ICA / S / 01', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Using age-appropriate AI tools with care and honesty.' },
        { code: 'ICA / S / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive security and ethics, from passwords to networks.' },
        { code: 'ICA / S / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed problems in the style of computing olympiads.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'In practice',
    h2: 'How live classes work for a teenager in Ica',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Around school', l: 'Whichever turno your teen has, the class takes the free part of the day.' },
      { time: 'Holidays', l: 'Summer and July breaks are a good time to start or go faster.' },
      { time: 'Private', l: 'One-to-one hours set by you and the mentor together.' }
    ],
    cells: [
      { h3: 'Steady mentor', p: 'One teacher for the course, who follows each teen.' },
      { h3: 'Clear English', p: 'Plain words, slower speech, patience with replies.' },
      { h3: 'Teens type the code', p: 'Mentors coach; teenagers write and debug.' },
      { h3: 'Teen-only groups', p: 'No adults or young children in the class.' },
      { h3: 'Updates home', p: 'Parents hear what was built and what is next.' },
      { h3: 'Pick the format', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work our teen students have shipped',
  projectsLede: 'Teenagers who stay with it build apps, games and tools. A few are below and many more are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' and students\' Google reviews, word for word.',

  fees: {
    h2: 'Fees for teen classes in Ica',
    lede: 'Plans are monthly and priced in US dollars, which your card is charged in. The soles you see on the statement come from your bank\'s exchange rate on that day.',
    free: ['A free first class', 'A puzzle, a first program and a chat', 'No card details'],
    group: ['Fifteen to twenty teenagers', 'One regular mentor', 'Two live classes weekly', 'Monthly, stop when you wish'],
    one: ['One teen, one mentor', 'Projects shaped around them', 'Hours you choose']
  },

  faq: {
    eyebrow: 'Ica families ask',
    h2: 'Coding and AI for teens in Ica: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All of our classes are live, online and in English, with no Spanish teaching. Mentors speak clearly, slow down, adapt to the teenager\'s pace and accent, and check understanding often. Code and error messages are in English too, so the practice adds up.' },
      { q: 'Are there coding classes for teenagers in Ica?', a: 'Yes, online and live. Teenagers in Ica, Parcona, La Tinguiña, Subtanjalla or anywhere in the department join from home at the hour the family books.' },
      { q: 'Does secundaria in Ica teach programming?', a: 'No. Neither the regular 35-hour week nor the 45-hour full-day plan has a programming area. Digital skills are transversal, so a teenager may never write a program at school.' },
      { q: 'Can my teenager use ChatGPT or Claude in your classes?', a: 'Only within each tool\'s age rules. ChatGPT requires a parent\'s permission under 18 and Claude is for adults, so we never ask an under-18 learner to use it. In class, AI suggestions are tested, not pasted.' },
      { q: 'What should an Ica teenager learn first?', a: 'Python. It is readable, used in data science and AI, and accepted in the first round of the OPI. After a few months a teenager can choose AI, data, apps, web or Java.' },
      { q: 'What time are classes for Ica?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Ica all year, so 07:00 in Ica is 17:30 for the mentor.' },
      { q: 'Can you prepare my teenager for the ONEM or the OPI?', a: 'We train the reasoning both contests reward, with original problems of our own. Students enter the ONEM through their school and the OPI through UTEC. We are not connected with MINEDU, the ONEM or UTEC and cannot promise any result.' },
      { q: 'My teenager\'s English is basic. Will it work?', a: 'Often, yes: coding vocabulary is small and everything is shown on screen. EF rates Ica\'s English low on average, so our mentors expect beginners. The free class tells you honestly whether it is too soon.' },
      { q: 'How are fees paid?', a: 'Monthly in US dollars by card; your bank converts the charge to soles. From India you would see rupees. The first class is free and asks for no card.' },
      { q: 'Does my teenager get a certificate?', a: 'Courses that offer one end with our own certificate of completion. It does not count toward secundaria grades or university admission in Peru and is not issued by MINEDU or any school; it shows the work actually done.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also useful',
    h2: 'Related pages for Ica teenagers',
    lede: 'More for teens in Peru and their parents.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru pages, by age and subject.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding classes for teens in Peru', p: 'The national guide for 13 to 18 year olds.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'AI for teenagers, explained in Spanish.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Our AI teaching for teens worldwide.' },
      { href: '/ai-tools-age-guide', label: 'AI tools and age rules', p: 'Which tools a teenager may use.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Ica',
    lede: 'Your teenager solves a short puzzle and writes a first program with a mentor. Afterwards you hear how they reasoned, how the English went, and which course and group we suggest.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Teaching is live from India and entirely in English. WhatsApp, in English, gets the fastest reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For teens', links: [
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/coding-classes-for-teens-peru', label: 'Teens in Peru' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/onem-preparation-in-english', label: 'ONEM preparation' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru' }
      ] }
    ],
    bottomRight: 'A percentage of what?'
  },

  personalityCss: `
.ag-root.ag-cati .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cati .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cati .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cati .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-cati .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Censos Nacionales 2025 (Cuadro 1) and Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); MINEDU CNEB (JER and JEC plans, competency 28) and Edades normativas; ONEM 2026 (UGEL 06 oficio, El Peruano); UTEC OPI and OPEIA pages; EF EPI 2025; our AI tool age audit; tz database America/Lima. Data: PRODUCE, Empresas Agroindustriales Ica 2023, ODC-By.',
    localProject: 'Are Ica\'s exporters mostly big firms? An original Python project on PRODUCE\'s Empresas Agroindustriales Ica register (ODC-By, 494 firms, 2023): Version 1 counts 22 exporters, 10 large firms and 8 that are both; Version 2 prints, for each size band, the share that exports and its share of all exporters (large 80.0% against 36.4%; micro 1.3% against 27.3%). Lesson family: conditional shares read in the right direction, and base rates.',
    requiredMentions: ['DataSet1_Agroindustria_ICA_2023_rev.csv', 'Large and exporting: 8', 'GRAN EMPRESA firms 10 | of these, export: 80.0 % | of all exporters: 36.4 %', 'MICRO firms 457', '282,407', '1,033,084', '89.1', 'Ica city 467', 'A percentage of what?'],
    sources: [
      { claim: 'Ica city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Ica department, province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ica internet use and homes with internet or computer.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'PRODUCE agro-industry register for Ica and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/empresas-agroindustriales-ica-ministerio-de-la-produccion-produce' },
      { claim: 'Secundaria hours under JER and JEC; transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 levels, school stage and participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'OPI and OPEIA organiser, cost, language and AI rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Ica city, Ica region, Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any sales or export value from the register\'s money columns: not printed.',
      'Naming any firm: the register is anonymised and the page names none.',
      'A 2025 population for Ica city: not published by INEI.',
      'Any sum of the city, department, province and district counts.',
      'Recommending ChatGPT without a parent\'s permission, or Claude, to under-18s: refused.',
      'Any link with PRODUCE, MINEDU, the ONEM, UTEC or a school: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
