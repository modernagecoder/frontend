// SHIP: market (city, teens 13 to 18) | Sullana teens: secundaria gaps, AI with age rules, contests, the UNP file | composite keys: a cut-off per (programme, admission route), and rows no column explains
'use strict';
// Coding and AI for teens in Sullana, Peru (ag- city page, Peru cluster row PE194; alloc: cities, cats, #721600).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; fees in USD only, through the template's data-price anchors. Audience: teenagers aged 13 to 18 and their parents.
// Spine: Sullana is the second city of the Piura region, and its secundaria students look towards university entry. The
// page says what secundaria gives a teenager in computing (no area of its own), which course fits which goal, how to use
// AI tools within their age rules, the ONEM and OPI, and teaches with the Universidad Nacional de Piura's own applicant
// file. Different spine and dataset from the Piura region module (Mercado Modelo prices, units) and the Piura city work.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-and-ai-for-teens-in-sullana-peru/,
// national facts from pe/facts-school/src and pe/src/inei; every quote string-matched in the raw file):
//  - INEI Lib1541, Directorio de Centros Poblados 2017, dpto20 (tsv_dpto20/sheet0_20.tsv): "SULLANA Chala 76 136 446"
//    (single centro poblado; places.tsv).
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (tsv_ind_00/sheet2): "PIURA 2115215";
//    "PROVINCIA SULLANA 350259"; "DISTRITO SULLANA 195448"; "DISTRITO BELLAVISTA 38343" (province Sullana);
//    "DISTRITO MARCAVELICA 32859"; "DISTRITO QUERECOTILLO 28043". Cuadro N° 3 (censada): PIURA "De 12 a 17 años" 246069.
//    Never summed.
//  - INEI Compendio Estadístico Perú 2026, tomo 1: 11.5 Piura 2025 "22,3" (Total "33,9"); 11.6 Piura 2025 "41,2" (Total
//    "56,8"); 11.13 Piura 2025 "77,6" (Total "81,1"); 5.54 (MINEDU UMC, ECE) 2° secundaria satisfactory 2025: maths Piura
//    "8,3" (Total "12,7"), reading Piura "14,0" (Total "18,5"); 5.66 "013 Universidad Nacional de Piura ... 12 713" (2025).
//  - EF EPI 2025 Peru page (ef_peru.raw): data-state="piura" 482, epi-low; data-city="piura" 484, epi-low; no Sullana
//    score; Peru 519, rank 52 of 123; Lima city 555.
//  - CNEB competency 28 transversal and JER secundaria hours (FACTS 32, 33, 39): 35-hour week, "Matemática 4", "Inglés 3",
//    "Educación para el trabajo 2", no computing area. Fábrica de Programadores (FACTS 45, 46). Edades normativas (FACTS 13,
//    14). ONEM 2026 (FACTS 99 to 108): levels 1 (1°-2°), 2 (3°-4°), 3 (5°); school stage 8 July 2026; national stage
//    11 October 2026, Huampaní, 237 students; more than 1.7 million. OPI (FACTS 111, 112, 116, 118): UTEC, free; 2026
//    final 11 April 2026; 2025 rules: final C++ only, generative AI banned.
//  - AI tool ages (content/ai-tool-age-audit.json): Claude 18+; ChatGPT 13+ with parent or guardian permission under 18.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: Universidad Nacional de Piura (UNP), "Lista de Postulantes Pregrado Universidad Nacional de Piura 2024-2025",
//    Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/lista-de-postulantes-pregrado-
//    universidad-nacional-de-piura-2024-2025, licence "Open Data Commons Attribution License" (dc:license on the raw page),
//    created 27 June 2025. File "Postulantes años 2024-2025.xlsx", 1,280,737 bytes, one sheet DATA, 22,759 rows, converted
//    to postulantes-unp-2024-2025.tsv on 10 November 2026. Header includes the merged column "ESPECIALIDAD,ANIO_POSTULA";
//    cycles 2024-1 (9,467), 2024-2 (4,229), 2025-1 (9,063); INGRESO SI 3,330, NO 19,429. No applicant ID column.
// Our own calculations (scratchpad pe/c6/su/v1.py, v2.py; python3 -I on the converted file):
//  v1 prints: Applications: 954 admitted: 102 / Lowest admitted score: 0.0 / Highest score not admitted: 250.65
//  v2 prints: ADES | admitted 8 | lowest in 254.75 | highest out 250.65 | consistent / ADES 2025 | admitted 9 | lowest in
//    196.15 | highest out 196.0 | consistent / EXAMEN GENERAL ABRIL 2024 | admitted 42 | lowest in 0.0 | highest out 170.5
//    | check by hand / EXAMEN GENERAL MARZO 2025 | admitted 26 | lowest in 63.0 | highest out 157.75 | check by hand /
//    EXAMEN GENERAL SETIEMBRE 2024 | admitted 17 | lowest in 170.65 | highest out 170.5 | consistent
//  extra: lowest admitted scores, April 2024 general exam: 0.0, 87.0, 99.9, 108.25, 143.3, then 174.75; March 2025: 63.0,
//    70.0, 82.75, 87.15, then 162.0. Applications from schools in the province of Sullana: 1,521, of which 144 admitted;
//    to Ingeniería Informática: 71, of which 5 admitted. Whole file: 3,330 of 22,759 admitted.
// Lesson family: composite keys. A cut-off only exists inside one queue, so group by (programme, admission route); when a
// queue still breaks the rule, the file lacks the column that explains it, so flag it rather than invent a reason.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'admitted, missed = [], []',
  'with open("postulantes-unp-2024-2025.tsv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter="\\t"):',
  '        programme = row["ESPECIALIDAD,ANIO_POSTULA"].rsplit(",", 1)[0]',
  '        if programme == "INGENIERÍA INFORMÁTICA":',
  '            score = float(row["CALIFICACION_FINAL"])',
  '            if row["INGRESO"] == "SI":',
  '                admitted.append(score)',
  '            else:',
  '                missed.append(score)',
  '',
  'print("Applications:", len(admitted) + len(missed), "admitted:", len(admitted))',
  'print("Lowest admitted score:", min(admitted))',
  'print("Highest score not admitted:", max(missed))'
].join('\n');

const V2 = [
  'import csv',
  '',
  'queues = {}',
  'with open("postulantes-unp-2024-2025.tsv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter="\\t"):',
  '        programme = row["ESPECIALIDAD,ANIO_POSTULA"].rsplit(",", 1)[0]',
  '        if programme == "INGENIERÍA INFORMÁTICA":',
  '            key = (programme, row["MODALIDAD"])',
  '            pair = queues.setdefault(key, ([], []))',
  '            score = float(row["CALIFICACION_FINAL"])',
  '            pair[0 if row["INGRESO"] == "SI" else 1].append(score)',
  '',
  'for (programme, route), (admitted, missed) in sorted(queues.items()):',
  '    low, high = min(admitted), max(missed)',
  '    verdict = "consistent" if low > high else "check by hand"',
  '    print(route, "| admitted", len(admitted), "| lowest in", low, "| highest out", high, "|", verdict)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Sullana: coding and AI for teens' },
  slug: 'coding-and-ai-for-teens-in-sullana-peru',
  code: 'cats',
  accent: '#721600',
  accentRationale: 'Coding and AI for teens in Sullana: the allocated #721600, a dark brick red that reads as serious rather than playful for a teenage audience; well above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding and AI for teens in Sullana, Peru',
  title: 'Coding and AI for Teens in Sullana, Peru: Live, in English',
  description: 'Coding and AI for Sullana teens aged 13 to 18, live online in English at flexible hours: what secundaria skips, AI within age rules, ONEM, OPI and a UNP project.',
  ogDescription: 'Live online coding and AI for teenagers in Sullana, taught in English at hours that fit secundaria: what school does not cover, which course fits which goal, how to use AI tools inside their age rules, the ONEM and OPI, and a Python project on the Universidad Nacional de Piura applicant file.',
  twitterDescription: 'Coding and AI for Sullana teens, live online in English: courses by goal, AI with age rules and a university-data project.',
  pageName: 'Coding and AI for Teens in Sullana, Peru',
  webPageDescription: 'A guide for Sullana teenagers and parents to live online coding and AI classes taught in English, built on INEI census and household figures, MINEDU curriculum, assessment and contest sources, EF EPI 2025 and an original Python project on the Universidad Nacional de Piura applicant file (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for teenagers aged 13 to 18 in Sullana, Peru: Python, Java, app and web development, machine learning, competitive problem solving and AI coding tools within their age rules, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Sullana, teens',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#goals', label: 'Courses by goal' },
    { href: '#ai-rules', label: 'AI and age' },
    { href: '#queues', label: 'UNP project' },
    { href: '#when', label: 'Times' }
  ],
  eyebrow: 'Sullana &middot; Ages 13 to 18 &middot; Live online, in English',
  h1: 'Coding and AI for teens in Sullana, Peru',
  lede: 'A teenager in Sullana can finish secundaria without writing a single program, because the national timetable has no computing area. This page is for the ones who want more: which course fits a teenager who wants to build games, one heading for engineering, and one who is curious about AI; how to use AI tools inside their age rules; the ONEM and the OPI; and a project on the Universidad Nacional de Piura\'s own list of applicants.',
  secondaryCta: { href: '#queues', label: 'See the UNP project' },
  wa: 'Hello Modern Age Coders, I am a parent in Sullana, Peru. My teenager would like live coding and AI classes in English. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students across many countries &middot; teenagers taught only with teenagers',
  spec: [
    ['Ages', '13 to 18, 1° to 5° de secundaria'],
    ['Languages', 'Python first; Java, JavaScript, C++ later'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Sullana time', 'Any day, the hour you choose'],
    ['Mentors', 'Teaching live from India'],
    ['Free trial', 'One class, no card']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Modern Age Coders teaches coding and AI to teenagers aged 13 to 18 in Sullana, Peru, live online and in English. Most start with Python, then choose apps and websites, Java, machine learning, or competitive problem solving for contests and engineering. AI coding tools are taught inside each provider\'s age rules, and teenagers learn to check and explain every line rather than paste it. A mentor teaches each class on live video, in a group of fifteen to twenty teenagers or one to one, at the hours your family chooses.',

  picks: {
    eyebrow: 'Most Sullana teenagers start here',
    h2: 'Three first courses for secundaria students',
    lede: 'A foundation, a builder\'s course and an AI course. All three assume no coding before, and all three are taught only to teenagers.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'SUL / 01', title: 'Python for Teens', note: 'The foundation for everything else, from a first program to files, data and finished projects. Suits 1° to 5° de secundaria, and the usual first step before AI or engineering-style problem solving.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'SUL / 02', title: 'App development for teens', note: 'For teenagers who want something on a phone that friends can use. Real apps built with React Native, after a grounding in JavaScript.' },
      { course: 'ai-ml-masterclass-teens', code: 'SUL / 03', title: 'AI and machine learning', note: 'How models learn, trained in Python on real data and tested honestly. For teenagers who already know a little Python or who take it alongside.' }
    ]
  },

  sections: [
    {
      id: 'town',
      eyebrow: 'Sullana in figures',
      h2: 'How big is Sullana, and how many teenagers live in the region?',
      lede: 'Sullana is the second city of the Piura region and the head of its own province. Every figure here comes from INEI with its own census year attached, and no two of them are ever combined.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Sullana, the province and the region, as INEI counts them', head: ['Unit', 'People', 'Census and year'], rows: [
          ['Department of Piura (8 provinces)', '2,115,215', '2025, total population'],
          ['Department of Piura, teenagers aged 12 to 17', '246,069', '2025, people counted'],
          ['Province of Sullana', '350,259', '2025, total population'],
          ['District of Sullana', '195,448', '2025, total population'],
          ['District of Bellavista (province of Sullana)', '38,343', '2025, total population'],
          ['Sullana, the settlement (76 m above sea level)', '136,446', '2017, people counted']
        ] },
        { kind: 'source', html: 'From INEI: the 2025 census tabulation of demographic indicators, tables 1 and 3 (reference day 15 September 2025; table 3 counts people enumerated), and the 2017 directory of populated places for Piura (22 October 2017), which lists Sullana as a single settlement and so undercounts a town that spreads into neighbouring districts. Never add these rows together.' },
        { kind: 'two', mt: true,
          leftH3: 'A big city with its own province',
          left: [
            'The province of Sullana counted 350,259 people in 2025, and the district of Sullana alone 195,448, more than many department capitals. Around it lie Bellavista, Marcavelica and Querecotillo, with 38,343, 32,859 and 28,043 people.',
            'In 2025 the department of Piura counted 246,069 young people aged 12 to 17, the secundaria years. That is a large number of teenagers for whom programming exists only if someone outside school offers it.'
          ],
          rightH3: 'Computers at home',
          right: [
            'INEI\'s household survey found a computer in 22.3 per cent of Piura homes in 2025, against 33.9 per cent across Peru, and an internet service in 41.2 per cent against 56.8. Internet use is far wider: 77.6 per cent of people aged six and over went online, most often by phone.',
            'Coding needs a keyboard. A teenager who has only a phone can follow some of our lessons, but cannot really learn to program on one, and we say so before anyone pays.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Equipment and internet in 2025: Piura region against Peru (per cent)', head: ['Measure', 'Piura region', 'Peru'], rows: [
          ['Homes with at least one computer', '22.3', '33.9'],
          ['Homes with an internet service', '41.2', '56.8'],
          ['People aged 6 and over online', '77.6', '81.1']
        ] },
        { kind: 'source', html: 'Compendio Estadístico Perú 2026 (INEI, volume 1), household tables 11.5, 11.6 and 11.13, from the Encuesta Nacional de Hogares. These cover the whole Piura region; INEI publishes nothing for Sullana alone.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'What school covers',
      h2: 'Does secundaria in Sullana teach programming?',
      lede: 'No, not as a subject. Sullana follows the national CNEB, and the secundaria week has no computing, informatics or programming area.',
      body: [
        { kind: 'two',
          leftH3: 'The week, hour by hour',
          left: [
            'On the regular school day, secundaria runs a 35-hour week: 4 hours of Matemática and 4 of Comunicación in every grade, 3 of Inglés, and 2 of Educación para el Trabajo. No hour is set aside for writing programs.',
            'Digital skills appear in the CNEB as competency 28, which is transversal: every area is expected to use technology, and no area is asked to teach coding. A good teacher may still do so, but the curriculum does not require it.'
          ],
          rightH3: 'How Piura\'s second-year students did in 2025',
          right: [
            'MINEDU\'s 2025 census assessment of 2° de secundaria, reported in INEI\'s 2026 compendium, found 8.3 per cent of Piura pupils at the satisfactory level in maths and 14.0 per cent in reading, against 12.7 and 18.5 nationally.',
            'Those are region-wide figures and say nothing about any one student. But they explain why we start every teen course with careful reasoning, small steps and checking, rather than assuming the maths is already in place.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Secundaria in Sullana and where coding could fit (MINEDU ages; the last column is ours)', head: ['Grade', 'Normative age at 31 March', 'Computing on the timetable', 'A sensible coding step'], rows: [
          ['1° de secundaria', '12', 'None', 'Python from zero, or Scratch to Python'],
          ['2° de secundaria', '13', 'None', 'Python projects, first app or website'],
          ['3° de secundaria', '14', 'None', 'Data, Java or JavaScript; ONEM Nivel 2'],
          ['4° de secundaria', '15', 'None', 'Machine learning, competitive problems'],
          ['5° de secundaria', '16', 'None', 'Portfolio, PCEP, preparation for university study']
        ] },
        { kind: 'source', html: 'Where these come from: the CNEB study plan and its competency 28 (MINEDU), MINEDU\'s table of normative ages, and INEI, Compendio Estadístico Perú 2026, table 5.54 (MINEDU, Evaluación Censal de Estudiantes).' },
        { kind: 'p', mt: true, html: 'Programming is being tried in a few state schools: since 2025 a MINEDU scheme called Fábrica de Programadores has taught Python, ending in the PCEP exam, to 1,000 pupils in the final two secundaria years in Lima Norte. Sullana is outside it. Our overview of <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> sets the national picture beside our own course path.' }
      ]
    },
    {
      id: 'goals',
      eyebrow: 'Choosing a course',
      h2: 'Which coding course should a teenager in Sullana take?',
      lede: 'Start from what the teenager wants to make or become, not from a language. Almost every route begins with a term or two of Python.',
      body: [
        { kind: 'table', numCols: [], caption: 'Courses by goal for Sullana teenagers (our course plan)', head: ['If the teenager wants to', 'Start', 'Then', 'Typical project'], rows: [
          ['Build apps friends can use', 'Python for Teens or JavaScript', 'App development (React Native)', 'A phone app with a login and saved data'],
          ['Make websites', 'JavaScript for teens', 'Frontend, then full stack', 'A working site for a club or a family business'],
          ['Understand AI properly', 'Python for Teens', 'AI and machine learning', 'A model trained and tested on real data'],
          ['Study engineering or computing later', 'Python for Teens', 'Java, then data structures', 'Programs that are tested, timed and explained'],
          ['Enter contests', 'Python, then C++', 'Competitive programming', 'Timed problems in the OPI style, written by us'],
          ['Use AI coding agents (from 13)', 'Python for Teens', 'Codex and Claude Code for teens, within age rules', 'A small app built with an agent and reviewed line by line']
        ] },
        { kind: 'source', html: 'Course names and order are ours. The age column for AI tools follows each provider\'s published terms and our own AI tools age audit.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The builder', p: 'Wants something to show by the end of the year. Python first, then apps or websites, with a finished project every term. Many builders discover they also like the logic underneath, and move on to Java or data.' },
          { h3: 'The future engineer', p: 'Heading for a science or engineering degree. Python, then Java and problem solving with data structures, plus enough statistics to read results honestly, which is exactly what the project on this page practises.' },
          { h3: 'The curious one', p: 'Wants to know how AI really works. Python and then machine learning: what a model is, why it fails, and how to test it fairly. Curiosity is the right reason to start, and it lasts longer than any trend.' }
        ] },
        { kind: 'p', mt: true, html: 'Teenagers who want phone apps will find more detail in our page on <a class="ag-inline-link" href="/app-development-for-teens-peru">app development for teens in Peru</a>, including what accounts and app stores allow at each age.' }
      ]
    },
    {
      id: 'ai-rules',
      tint: 'tint',
      eyebrow: 'AI, safely',
      h2: 'How should a teenager use AI tools while learning to code?',
      lede: 'Inside the tool\'s own age rules, and never as a replacement for understanding. We teach both parts on purpose.',
      body: [
        { kind: 'two',
          leftH3: 'Age rules come first',
          left: [
            'AI providers set their own minimum ages. Some chat assistants accept users from 13 only with a parent\'s or guardian\'s permission until 18; others, Claude among them, accept no one under 18 at all. We check each tool\'s current terms before a teenager uses it in class, and families can see the list in our AI tools age guide.',
            'Where a tool is not allowed for a learner\'s age, the class uses a different tool or none. Learning how AI works does not require an account: teenagers can write and train small models themselves in Python.'
          ],
          rightH3: 'Explain every line',
          right: [
            'The rule in our teen classes is simple: if an AI tool wrote it, you must be able to explain it. A teenager who submits code they cannot explain rebuilds it with the mentor, one step at a time.',
            'This is not a rule against AI. It is how professionals use it: as a fast first draft that a person checks. The Peruvian computing olympiad agrees in its own way; under the OPI\'s 2025 rules, using generative AI to solve the problems was not allowed.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Read before you run.</strong> Before running any AI-suggested code, say in your own words what you expect it to do.',
          '<strong>Test the edges.</strong> Try an empty input, a very large one and a strange one. AI code often works for the obvious case only.',
          '<strong>Ask why, not just what.</strong> If the suggestion uses something new, look it up and write a two-line note on how it works.',
          '<strong>Keep your own version.</strong> Write the first attempt yourself, then compare it with the AI draft. The differences are where you learn.'
        ] },
        { kind: 'p', mt: true, html: 'For teenagers who want to go further with AI agents, our Codex and Claude Code course for teens follows the same principle, using only tools the learner\'s age allows. We never recommend an 18+ tool to anyone under 18.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'National contests',
      h2: 'Can a Sullana teenager enter the ONEM or the OPI?',
      lede: 'Yes. Both are open to any secundaria student in Peru. Neither organiser has any tie to us: what follows is taken from their own published material, and our preparation uses problems our mentors invent.',
      body: [
        { kind: 'two',
          leftH3: 'ONEM: the school maths olympiad',
          left: [
            'MINEDU organises the ONEM, Peru\'s national school maths olympiad, and pupils sign up through their own colegio. Over 1.7 million took part in 2026. Every school sat its first round on 8 July 2026; the strongest moved up through the UGEL and then the region, and 237 reached the final at Huampaní on 11 October 2026.',
            'Pupils compete at one of three levels by grade (1° and 2°, 3° and 4°, or 5°), and within each level state-school pupils (Alfa) are ranked apart from private-school pupils (Beta). At the first round they get two hours for ten problems, writing their own answers rather than ticking options.'
          ],
          rightH3: 'OPI: the computing olympiad',
          right: [
            'UTEC runs the OPI, Peru\'s programming olympiad for school students, and charges nothing to enter. For the 2026 edition sign-ups ended on 18 March, and finalists competed on 11 April 2026.',
            'The 2025 rulebook let contestants answer round one in Python or C++, but the final, held on site, was C++ only. So our competitive route starts in Python for the ideas and switches to C++ once those feel natural.'
          ] },
        { kind: 'p', mt: true, html: '<strong>A practice problem of ours.</strong> A queue of applicants is sorted by score. The lowest admitted score is 170.65 and the highest score that missed out is 170.50. A new applicant scores 170.60. Without knowing anything else, can you say whether they would have been admitted? (Ours, written for this page. Answer: no, you cannot be sure; it depends on how many places were left and on the rules for ties, which the scores alone do not tell you.)' },
        { kind: 'source', html: 'ONEM details: UGEL 06 circular (Oficio Múltiple 164-2026) and an El Peruano report of 11 October 2026. OPI details: UTEC\'s site opi.utec.edu.pe and its 2025 rulebook. No contest problem or official solution appears on this page.' },
        { kind: 'p', mt: true, html: 'For a fuller picture of olympiad preparation, our page on <a class="ag-inline-link" href="/math-olympiad-coaching-peru">maths olympiad coaching in Peru</a> describes how we train reasoning with original problems.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Will a teenager in Sullana manage classes in English?',
      lede: 'Most secundaria students manage better than they expect, but it is not automatic. Every class is in English only, and the free first class is where we check.',
      body: [
        { kind: 'two',
          leftH3: 'An honest fit note',
          left: [
            'EF\'s English Proficiency Index 2025 rates the Piura region at 482 and Piura city at 484, both in its low band, and gives no figure for Sullana. Peru overall scores 519, 52nd of 123 countries; Lima city scores 555. Secundaria gives three hours of Inglés a week, which for many teenagers is not yet enough to follow a fast lesson.',
            'So we do not promise every teenager will be comfortable on day one. A teenager who watches series or plays games in English usually follows quickly; one with only school English may do better one to one for the first months.'
          ],
          rightH3: 'How mentors help',
          right: [
            'Mentors speak clearly, slow down when they see hesitation, and write key words in the chat. Code is largely language-neutral: a loop, a list or a function looks the same whatever language the class is spoken in.',
            'Teenagers often say their English improved more in a term of coding than in a year of grammar, because they had to explain their own programs. That is a side benefit, not the purpose, and we never claim English results.'
          ] }
      ]
    },
    {
      id: 'queues',
      eyebrow: 'A Piura project',
      h2: 'Why did a score of 250 miss a place that a score of 0 won?',
      lede: 'The Universidad Nacional de Piura publishes the list of everyone who applied to its undergraduate programmes in 2024 and 2025, with scores and results. Our teenagers use it to learn how to group data correctly before comparing anything.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file is the Lista de Postulantes Pregrado Universidad Nacional de Piura 2024-2025, published by the university on datosabiertos.gob.pe under the ODC-By licence (Open Data Commons Attribution). We downloaded it on 10 November 2026 and saved its single sheet as postulantes-unp-2024-2025.tsv: 22,759 applications across the 2024-1, 2024-2 and 2025-1 cycles, of which 3,330 were admitted.',
            'Each row is an application, not a person: the file has no applicant number, so someone who applied twice appears twice. One column, oddly, is called ESPECIALIDAD,ANIO_POSTULA and holds the programme and the year together, separated by a comma, so the programs split it on the last comma.'
          ],
          rightH3: 'The question',
          right: [
            'Many Sullana teenagers ask what score gets you into a programme. We pick Ingeniería Informática, the computing degree, and ask the obvious question: what was the lowest score admitted, and the highest score that missed out?',
            'Version 1 collects every Informática application, splits them into admitted and not admitted, and prints the two numbers. If the university simply took the top scores, the lowest admitted should be above the highest rejected.'
          ] },
        { kind: 'code', label: 'Version 1: one list for the whole programme', lang: 'Python', code: V1, note: 'It prints: <code>Applications: 954 admitted: 102</code>, then <code>Lowest admitted score: 0.0</code> and <code>Highest score not admitted: 250.65</code>.' },
        { kind: 'p', mt: true, html: 'A score of 0 admitted and a score of 250.65 turned away looks like a scandal. It is not; it is a grouping mistake. Applicants do not all compete in one queue. The MODALIDAD column shows several admission routes, each a separate competition with its own places: general exams held in April 2024, September 2024 and March 2025, and two rounds the file labels ADES and ADES 2025. Comparing scores across routes is comparing different races.' },
        { kind: 'code', label: 'Version 2: one queue per programme and route', lang: 'Python', code: V2, note: 'It prints five lines, one per route, including <code>ADES | admitted 8 | lowest in 254.75 | highest out 250.65 | consistent</code>, <code>EXAMEN GENERAL SETIEMBRE 2024 | admitted 17 | lowest in 170.65 | highest out 170.5 | consistent</code> and <code>EXAMEN GENERAL ABRIL 2024 | admitted 42 | lowest in 0.0 | highest out 170.5 | check by hand</code>.' },
        { kind: 'p', mt: true, html: 'With the key changed from the programme alone to the pair (programme, route), three of the five queues behave exactly as a ranking should: in the September 2024 exam the last admitted score, 170.65, beat the first one left out, 170.50, by fifteen hundredths of a point. The 250.65 that missed out was in the ADES round, where the lowest admitted score was 254.75.' },
        { kind: 'p', html: 'Two queues still break the rule. In the April 2024 exam, five admitted scores, 0.0, 87.0, 99.9, 108.25 and 143.3, sit far below the next one, 174.75; in March 2025 four sit below 162.0. A good analyst does not invent a reason. Some places may be reserved under separate rules, but this file has no column that says which applicants those were, so the honest program prints "check by hand" and stops there. The missing key is not in the data.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Ingeniería Informática applications by admission route, 2024 and 2025 (our calculation)', head: ['Route (as the file names it)', 'Admitted', 'Lowest admitted', 'Highest not admitted'], rows: [
          ['ADES', '8', '254.75', '250.65'],
          ['ADES 2025', '9', '196.15', '196.00'],
          ['EXAMEN GENERAL ABRIL 2024', '42', '0.00', '170.50'],
          ['EXAMEN GENERAL MARZO 2025', '26', '63.00', '157.75'],
          ['EXAMEN GENERAL SETIEMBRE 2024', '17', '170.65', '170.50']
        ] },
        { kind: 'source', html: 'Data: Universidad Nacional de Piura, Lista de Postulantes Pregrado 2024-2025, datosabiertos.gob.pe, licence ODC-By. Counts and extremes are ours. Applications from schools in the province of Sullana: 1,521, of which 144 were admitted; 71 were to Ingeniería Informática, of which 5 were admitted. MINEDU figures in INEI\'s 2026 compendium put the university\'s enrolment at 12,713 in 2025. We name no school and have no connection with the university; admission decisions are the university\'s alone.' },
        { kind: 'ol', mt: true, items: [
          '<strong>First Python, 13 and 14.</strong> Count how many applications each route has for Ingeniería Informática, using a dictionary. Which route is the biggest?',
          '<strong>Ages 15 and 16.</strong> Run Version 1 and Version 2, then write three sentences for a younger student explaining why the first answer was misleading.',
          '<strong>Ages 16 to 18.</strong> Repeat Version 2 for every programme in the file. How many (programme, route) queues are consistent, and how many need checking by hand?',
          '<strong>Going further.</strong> Filter applications by the province of the applicant\'s school. Explain why you must still compute each cut-off over the whole queue, not just over applicants from Sullana.'
        ] },
        { kind: 'p', mt: true, html: 'The admission exams themselves are in Spanish and are set by each university; our <a class="ag-inline-link" href="/peru-university-admission-exams-explained">guide to Peru\'s university admission exams</a> explains how they work. We teach coding and reasoning in English, and we never promise a place.' }
      ]
    },
    {
      id: 'when',
      eyebrow: 'Class times',
      h2: 'When can a Sullana teenager fit in classes?',
      lede: 'At whatever hour works around secundaria. Sullana keeps Peru time all year, and the mentor adapts.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example hours converted from Peru to India (illustrations only, not a timetable)', head: ['Sullana', 'India', 'Calendar day in India'], rows: [
          ['07:30', '18:00', 'Same'],
          ['11:00', '21:30', 'Same'],
          ['13:30', '00:00', 'Next (midnight)'],
          ['16:30', '03:00', 'Next'],
          ['18:00', '04:30', 'Next'],
          ['20:30', '07:00', 'Next']
        ] },
        { kind: 'source', html: 'Peru stays on UTC minus 5 hours in every season (tz zone America/Lima; legal time from INACAL); India stays on UTC plus 5 hours 30 minutes. The difference is 10 hours 30 minutes on every day of the year.' },
        { kind: 'p', mt: true, html: 'During term most Sullana teenagers choose late afternoon or early evening, after school and before homework. In the long January to March break many take a morning slot, then keep a later one when school restarts. Because neither country changes its clocks, the hour agreed at the start stays put all year. More on Piura-wide options is on our <a class="ag-inline-link" href="/online-coding-and-ai-classes-piura-region-peru">Piura region page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a Sullana teenager can do at each stage',
    lede: 'Our own stages for secundaria learners. They decide which group a teenager joins and show parents real progress.',
    table: { caption: 'From a first program to analysis that holds up (ours)', head: ['Stage', 'Typical timing', 'The teenager can'], rows: [
      ['1. Write', 'First month', 'Write and run programs with variables, input and output'],
      ['2. Control', 'First term', 'Use conditions and loops, and trace a program by hand'],
      ['3. Structure', 'Second term', 'Organise code into functions and data into lists and dictionaries'],
      ['4. Use real data', 'Second or third term', 'Load a large file, clean a messy column and summarise it'],
      ['5. Group correctly', 'Third term onwards', 'Choose the right grouping key and explain why a simpler one misleads'],
      ['6. Build and defend', 'Second year', 'Finish a project, test it and explain every line, including any AI help']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the UNP project. It is the habit that stops a smart teenager from drawing a confident wrong conclusion.',
      'Progress comes to you as finished work and explanations, not as hours online.'
    ] },
    right: { h3: 'For teenagers', ps: [
      'Before comparing two numbers, ask whether they were in the same race.',
      'When the data cannot explain something, say so. That is not failure; it is honesty.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Sullana teenagers',
    lede: 'Grouped by direction. Teenagers learn live, in English, with one mentor all the way through, either in a teen group or alone.',
    bands: [
      { num: 'I', h3: 'Build things', sub: 'Ages 13 to 18', courses: [
        { code: 'SUL / BUILD / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages from the first line of JavaScript.' },
        { code: 'SUL / BUILD / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'React on the front, Node.js behind it, a real site at the end.' },
        { code: 'SUL / BUILD / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Games with physics, levels and menus, built and shipped by teenagers.' }
      ] },
      { num: 'II', h3: 'Think harder', sub: 'Ages 13 to 18', courses: [
        { code: 'SUL / THINK / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented programming from the ground up, the way universities teach it.' },
        { code: 'SUL / THINK / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Logic, data structures and algorithms, timed and explained.' },
        { code: 'SUL / THINK / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest-style problems in Python and C++, written by our mentors.' }
      ] },
      { num: 'III', h3: 'AI and data', sub: 'Ages 13 to 18', courses: [
        { code: 'SUL / AI / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Statistics, charts and first models, for teenagers with some Python.' },
        { code: 'SUL / AI / 02', slug: 'codex-and-claude-code-ai-coding-agents-course-for-teens', title: 'AI coding agents for teens', blurb: 'Agent-assisted building within each tool\'s age rules, every line reviewed.' },
        { code: 'SUL / AI / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Preparation for the Python Institute exams, the same entry certificate MINEDU\'s pilot uses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes fit a secundaria week in Sullana',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'After colegio', l: 'Late afternoon in Sullana is the small hours in India, and mentors teach then too.' },
      { time: 'Summer mornings', l: 'January to March, while school is closed, is the easiest time to start.' },
      { time: 'One to one', l: 'A private slot around exams, sport and family, agreed with your mentor.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same mentor each week, who knows the teenager\'s code.' },
      { h3: 'Clear English', p: 'Plain speech, key words in the chat, time to answer.' },
      { h3: 'Hands on keys', p: 'Teenagers write their own code; the mentor questions and guides.' },
      { h3: 'Teens only', p: 'Groups of teenagers of similar age, never mixed with adults.' },
      { h3: 'Parents kept in touch', p: 'Short updates on work finished and next steps.' },
      { h3: 'Group or private', p: 'Fifteen to twenty teenagers, or one.' }
    ]
  },

  projectsH2: 'What older students have built',
  projectsLede: 'Teenagers who stay the course build things people use. A selection is below, with more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews written by parents and students, reproduced as posted.',

  fees: {
    h2: 'Fees for teenagers in Sullana',
    lede: 'You pay one month at a time. Prices are set in US dollars and charged that way; your bank then turns them into soles using its own exchange rate, which can nudge the final soles amount up or down.',
    free: ['A free first class', 'A short challenge and a first program', 'No card requested'],
    group: ['Fifteen to twenty teenagers of similar age', 'The same mentor throughout', 'Two live classes a week', 'Month to month, cancel any time'],
    one: ['One teenager, one mentor', 'A plan shaped around goals and exams', 'Days and hours you set']
  },

  faq: {
    eyebrow: 'Sullana families ask',
    h2: 'Coding and AI for teens in Sullana: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are in English only, live and online, with mentors who speak clearly, slow down when needed and put key words in the chat. A teenager who answers partly in Spanish is understood and helped to say it in English.' },
      { q: 'Is there coding for teenagers in Sullana?', a: 'Yes, live online. Teenagers in Sullana, Bellavista or Marcavelica join from home on a computer with a mentor on video, in groups of teenagers only or one to one.' },
      { q: 'Does secundaria teach programming?', a: 'No. Of the 35 weekly hours in secundaria, none belongs to computing; the CNEB spreads digital skills through every subject instead. The one MINEDU Python scheme, Fábrica de Programadores, is in Lima Norte.' },
      { q: 'Can my teenager use ChatGPT or Claude in class?', a: 'Only where the provider\'s age rules allow. Claude accepts no one under 18, and some assistants allow 13 to 17 year olds only with a parent\'s permission. We check current terms, never recommend an 18+ tool to a minor, and teach teenagers to explain every line an AI suggests.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The mentor\'s clock reads 10 hours 30 minutes later than Sullana\'s every day of the year: 18:00 for you is 04:30 tomorrow in India.' },
      { q: 'Will this help with university admission?', a: 'It builds reasoning, maths habits and real projects, but we promise no admission. University entrance exams in Peru are in Spanish and set by each university, which alone decides who is admitted.' },
      { q: 'Can you prepare my teenager for the ONEM or the OPI?', a: 'We teach the reasoning both contests reward, using our own problems, never the organisers\'. ONEM entry goes through the colegio; OPI entry is free, directly with UTEC. We have no connection with MINEDU or UTEC.' },
      { q: 'What does my teenager need at home?', a: 'A computer with a keyboard, a stable connection for an hour of video and headphones with a microphone. A phone is not enough. INEI found a computer in 22.3 per cent of Piura homes in 2025, so check first.' },
      { q: 'How much does it cost?', a: 'There is one monthly fee, displayed here in US dollars and charged in dollars; the soles amount is your bank\'s conversion. From India the page shows rupees instead. The first class is free.' },
      { q: 'Is there a certificate?', a: 'Courses with a certificate give our own certificate of completion, which records the work done. No Peruvian school or university recognises it as a qualification, and MINEDU plays no part in it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Sullana teenagers and parents',
    lede: 'Pages that answer what usually comes next.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, grouped.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'How we teach AI to 13 to 18 year olds.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools each age may use.' },
      { href: '/coding-classes-for-teens-peru', label: 'Coding for teens in Peru', p: 'The national overview for secundaria.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects teenagers have finished.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Sullana',
    lede: 'The free class is a short challenge and a first program written by the teenager. The mentor sees how they reason, how comfortable they are in English and whether the home set-up holds, then recommends a course and a group.',
    readFirst: 'Before booking you might read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, which walks through a class, or browse the <a class="ag-inline-link" href="/courses">courses</a> page for every syllabus.',
    note: 'Classes are live and online, taught in English by mentors in India. WhatsApp in English gets the fastest reply.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For teenagers', links: [
        { href: '/coding-classes-for-teens-peru', label: 'Teens in Peru' },
        { href: '/app-development-for-teens-peru', label: 'Apps for teens' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/math-olympiad-coaching-peru', label: 'Olympiad coaching' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages' }
      ] }
    ],
    bottomRight: 'Same race before same score'
  },

  personalityCss: `
.ag-root.ag-cats .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-cats .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cats .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cats .ag-table caption { text-align: left; text-transform: uppercase; letter-spacing: 0.04em; }
.ag-root.ag-cats .ag-code-head b { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Indicadores demográficos, Cuadros 1 and 3) and Directorio de Centros Poblados 2017 (dpto20); INEI Compendio Estadístico Perú 2026 (cuadros 11.5, 11.6, 11.13, 5.54, 5.66); MINEDU CNEB, Edades normativas, Fábrica de Programadores; UGEL 06 and El Peruano on ONEM 2026; UTEC OPI; EF EPI 2025; AI tool age audit; tz database. Data: Universidad Nacional de Piura applicant list 2024 to 2025, ODC-By.',
    localProject: 'Why did a score of 250 miss a place that a score of 0 won? An original Python project on the Universidad Nacional de Piura applicant file (ODC-By): Version 1 groups Ingeniería Informática by programme only and finds the lowest admitted score 0.0 below the highest rejected 250.65; Version 2 groups by (programme, admission route), three queues become consistent and two are flagged "check by hand" because no column explains them. Lesson family: composite keys.',
    requiredMentions: ['postulantes-unp-2024-2025.tsv', 'Highest score not admitted: 250.65', 'ADES | admitted 8 | lowest in 254.75 | highest out 250.65 | consistent', 'EXAMEN GENERAL SETIEMBRE 2024 | admitted 17 | lowest in 170.65 | highest out 170.5 | consistent', '136,446', '350,259', 'Same race before same score', 'rates the Piura region at 482 and Piura city at 484', '8.3 per cent of Piura pupils'],
    sources: [
      { claim: 'Piura, Sullana province and district populations, and the 12 to 17 age band, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Sullana settlement and altitude, 2017.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1541/cuadros/dpto20.xlsx' },
      { claim: 'Household computers and internet, internet use, 2° secundaria results and UNP enrolment.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'UNP applicant list 2024 to 2025 and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/lista-de-postulantes-pregrado-universidad-nacional-de-piura-2024-2025' },
      { claim: 'CNEB and secundaria weekly hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 levels, categories, school-stage date and format.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 national stage and participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'OPI organiser, cost, dates and 2025 rules.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Peru, Piura and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'What ADES stands for: the file and dataset page do not say, so the page uses the label as given.',
      'Why some admitted scores sit far below the rest: no column explains it, so the page flags it rather than naming quotas or any group.',
      'Counting people rather than applications: the file has no applicant ID, so the page says rows are applications.',
      'Any school names from the COLEGIO column: never printed.',
      'A Sullana English score: EF EPI 2025 publishes only Piura region and Piura city.',
      'Admission, grade or job promises: refused.',
      'Any connection with the Universidad Nacional de Piura, MINEDU, UTEC or any school: none.'
    ]
  }
};
