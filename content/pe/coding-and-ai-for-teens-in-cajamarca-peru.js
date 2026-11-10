// SHIP: market (city) | Cajamarca teens 13 to 18: highland city, few home computers, a look ahead to university | fit a guessed rule to every row: exact, round up, round down; keep the exceptions
'use strict';
// Coding and AI for teens in Cajamarca, Peru (ag- city page, Peru cluster row PE191; alloc: cities, catc, #A14D2F).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any
// hour; USD only, through the template's data-price anchors. Audience: teenagers aged 13 to 18 and their parents.
// Spine: Cajamarca teenagers are growing up in a department where internet use has quadrupled in ten years but fewer
// than one home in five has a computer and EF's regional English score is the lowest it publishes for Peru. The page is
// candid about fit, shows Cajamarca teens a coding and AI path that starts with reasoning, and teaches with the public
// university's own course list: a teen guesses how credits are worked out and tests the guess on every row.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-and-ai-for-teens-in-cajamarca-peru/):
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Cajamarca city 201,329 (22 October 2017).
//  - INEI Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (places.tsv): department CAJAMARCA 1,490,742;
//    province CAJAMARCA 398,064; district CAJAMARCA 242,285. Capital Cajamarca (Compendio 2026 cuadro 1.8). Never summed.
//  - INEI Compendio Estadístico Perú 2026 tomo 1 (compendio2026-cuadros-11.5-11.6-11.13.txt), ENAHO: 11.5 Cajamarca
//    "14,6 13,3 14,7 13,4 16,3 16,9 18,8 18,4 18,2 18,4 17,5"; 11.6 "6,1 ... 32,4 33,7"; 11.13 "15,2 ... 62,3 67,8";
//    Totals 2025 33,9 / 56,8 / 81,1.
//  - EF EPI 2025 (ef_peru.raw): stateScore cajamarca "very-low", "Cajamarca 383" (the lowest region score EF lists for
//    Peru); Peru 519 moderate; Lima city 555 high. No Cajamarca city score.
//  - CNEB (FACTS 33, 39, 40): TIC transversal; JER secundaria "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3
//    3", "Educación para el trabajo 2 2 2 2 2". Edades normativas (FACTS 14). Ley Universitaria via PUCP (FACTS 66):
//    "La admisión a la universidad se realiza mediante concurso público ... examen de conocimientos".
//  - OPI (FACTS 111, 116, 118). ONEM 2026 (FACTS 99, 100, 105).
//  - content/ai-tool-age-audit.json and the writer brief: Claude 18+; ChatGPT needs parental permission under 18.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Universidad Nacional de Cajamarca (UNC), "Dataset Cursos pregrado matrícula semestre académico 2026 I",
//    Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/dataset-cursos-pregrado-matr%C3%ADcula-semestre-acad%C3%A9mico-2026-i,
//    licence "Open Data Commons Attribution License" (dataset-page.html), released 2026-10-06. File saved as
//    unc-cursos-pregrado-2026-I.csv, 528,875 bytes, sha256 0009c05f...e6e5ed271ab34cbd85b83e634d58ff2f8462fc3e09a4056fed61,
//    Latin-1, 2,882 rows (course sections), FechaCorte 06/10/2026. Dictionary (unc-diccionario.xlsx): "Creditos Número de
//    créditos académicos del curso"; "HorasTeoria Número de horas teóricas semanales del curso"; "HorasPractica Número de
//    horas prácticas semanales del curso"; "Numero Número de estudiantes matriculados en el curso y sección". No student
//    is identifiable: rows are course sections.
// Our own calculations (scratchpad pe/c5/catc/v1.py, v2.py; python3 -I):
//  v1 prints: Rows: 2882 Rule fits: 1921 Misses: 961
//  v2 prints: {'exact': 961, 'round up': 837, 'round down': 199} / 122 rows: credits 4 theory 2 practice 3 / 19 rows:
//    credits 4 theory 3 practice 4 / 13 rows: credits 3 theory 2 practice 4
//  summary: 1,653 distinct course codes; 30 schools; seats (sum of Numero) 52,488; median section 16 students; four rows
//    with 0 credits (DANZAS TIPICAS PERUANAS, DEPORTE, TURISMO DE AVENTURA, TURISMO Y DEPORTE).
// Lesson family: fitting a guessed rule to data. Test it on every row, compare rival versions (exact, round up, round
// down) by their misses, and keep the exceptions visible instead of declaring the rule true.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'def guess(theory, practice):',
  '    return theory + practice / 2',
  '',
  'match = 0',
  'rows = 0',
  'with open("unc-cursos-pregrado-2026-I.csv", encoding="latin-1") as listing:',
  '    for course in csv.DictReader(listing):',
  '        rows += 1',
  '        t = int(course["HorasTeoria"])',
  '        p = int(course["HorasPractica"])',
  '        if int(course["Creditos"]) == guess(t, p):',
  '            match += 1',
  'print("Rows:", rows, "Rule fits:", match, "Misses:", rows - match)'
].join('\n');

const V2 = [
  'import csv',
  'import math',
  'from collections import Counter',
  '',
  'rules = {',
  '    "exact": lambda t, p: t + p / 2,',
  '    "round up": lambda t, p: math.ceil(t + p / 2),',
  '    "round down": lambda t, p: math.floor(t + p / 2),',
  '}',
  'misses = {name: 0 for name in rules}',
  'left_over = Counter()',
  '',
  'with open("unc-cursos-pregrado-2026-I.csv", encoding="latin-1") as listing:',
  '    for course in csv.DictReader(listing):',
  '        t = int(course["HorasTeoria"])',
  '        p = int(course["HorasPractica"])',
  '        c = int(course["Creditos"])',
  '        for name, rule in rules.items():',
  '            if c != rule(t, p):',
  '                misses[name] += 1',
  '        if c != rules["round down"](t, p):',
  '            left_over[(c, t, p)] += 1',
  '',
  'print(misses)',
  'for (c, t, p), n in left_over.most_common(3):',
  '    print(n, "rows: credits", c, "theory", t, "practice", p)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Cajamarca: coding and AI for teens' },
  slug: 'coding-and-ai-for-teens-in-cajamarca-peru',
  code: 'catc',
  accent: '#A14D2F',
  accentRationale: 'Coding and AI for teens in Cajamarca: the allocated #A14D2F, a terracotta like the city\'s roof tiles, still dark enough for text; contrast 5.48 on #FBF8F2, 5.15 on #F5F1E8 and 4.71 on #EDE7DA, all above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding and AI for teens in Cajamarca, Peru',
  title: 'Coding and AI for Teens in Cajamarca, Peru: Live, in English',
  description: 'Coding and AI for teens in Cajamarca aged 13 to 18: live online in English at flexible hours, a frank fit check, a route to university and a credits project.',
  ogDescription: 'Live online coding and AI for Cajamarca teenagers aged 13 to 18, taught in English at any hour: an honest look at devices and English, what secundaria leaves out, a path towards university, and a Python project testing how a university works out its credits.',
  twitterDescription: 'Coding and AI for Cajamarca teens, live online in English: a frank fit check and a university-credits project.',
  pageName: 'Coding and AI for Teens in Cajamarca, Peru',
  webPageDescription: 'A guide for Cajamarca teenagers aged 13 to 18 and their parents to live online coding and AI classes taught in English, built from INEI census and household-survey figures, the CNEB timetable, university admission and olympiad sources, EF EPI 2025, and an original Python project on the Universidad Nacional de Cajamarca 2026-I course dataset (ODC-By).',
  courseDescription: 'Live online coding and AI classes in English for teenagers aged 13 to 18 in Cajamarca, Peru: problem solving and Python first, then AI, data, Java or apps, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cajamarca, teens',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#candid', label: 'Is it a fit?' },
    { href: '#teen-route', label: 'Teen route' },
    { href: '#credits', label: 'Cajamarca project' },
    { href: '#ai-cajamarca', label: 'AI' },
    { href: '#cajamarca-clock', label: 'Times' }
  ],
  eyebrow: 'Cajamarca &middot; Ages 13 to 18 &middot; Live online, in English',
  h1: 'Coding and AI for teens in Cajamarca, Peru',
  lede: 'Cajamarca teenagers are online far more than their parents were at their age, yet few have a computer at home and English is, by EF\'s measure, harder going here than anywhere else in Peru it scores. This page is honest about both, sets out a coding and AI route from 1° de secundaria to the edge of university, and ends with a project on the public university\'s own course list in which a teenager guesses how credits are worked out, and lets the data say how right the guess is.',
  secondaryCta: { href: '#credits', label: 'See the Cajamarca project' },
  wa: 'Hello Modern Age Coders, we are in Cajamarca, Peru and our teenager would like live coding and AI classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; over ten thousand learners on several continents &middot; frank advice before any fee',
  spec: [
    ['Ages', '13 to 18, teen-only groups'],
    ['Begins with', 'Problem solving and Python'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Cajamarca hours', 'The day and hour you book'],
    ['Mentors', 'Teaching live from India'],
    ['Free class', 'Yes, and no card']
  ],
  capsuleQ: 'For Cajamarca families',
  capsule: 'Cajamarca teenagers aged 13 to 18 can learn coding and AI with Modern Age Coders, live online and in English. They begin with problem solving and Python, then move to AI and machine learning, data, Java or apps, at a pace that fits secundaria. A mentor leads each session over live video, for a group of fifteen to twenty teens or a single learner, whenever the family decides. It suits teens with a computer and some English; the free class tells you plainly if it is too early.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Three first courses for Cajamarca teenagers',
    lede: 'One to build the thinking, one to learn Python properly, one to understand AI from the inside.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CAJ / 01', title: 'Problem solving for teens', note: 'Ages 13 to 18. Breaking problems into steps, choosing the right structure, and proving an answer is right. Strong preparation for contests and for university computing.' },
      { course: 'python-complete-masterclass-teens', code: 'CAJ / 02', title: 'Python for Teens', note: 'No coding needed to join, for anyone aged 13 to 18. Variables to functions to real files, at a steady pace that leaves room for school and for English.' },
      { course: 'ai-ml-masterclass-teens', code: 'CAJ / 03', title: 'Machine learning for teens', note: 'Once a teen has some Python behind them. Models built from simple pieces, so the teenager understands what an AI can and cannot do.' }
    ]
  },

  sections: [
    {
      id: 'cajamarca',
      eyebrow: 'Cajamarca in figures',
      h2: 'How many people live in Cajamarca?',
      lede: 'INEI gives four answers for four areas. One surprise: the 2025 district figure is larger than the 2017 city figure, because they measure different things in different years.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Cajamarca counted four ways (kept separate)', head: ['Area', 'Population', 'Census year'], rows: [
          ['Cajamarca city, capital of the department', '201,329', '2017'],
          ['District of Cajamarca', '242,285', '2025'],
          ['Province of Cajamarca', '398,064', '2025'],
          ['Department of Cajamarca', '1,490,742', '2025']
        ] },
        { kind: 'source', html: 'INEI, Perú: Perfil Sociodemográfico 2017, table 1.9 (city, people counted in 2017), and INEI, Censos Nacionales 2025, Indicadores demográficos, table 1 (total population at 15 September 2025). No 2025 city count had been published by November 2026.' },
        { kind: 'p', mt: true, html: 'The district is an administrative unit, not the same area as the city INEI described in 2017, and its figure is eight years newer, so 242,285 against 201,329 is not a measure of growth. Comparing numbers that count different things is a mistake data scientists learn to avoid early, and it is the same mistake the project lower down guards against.' }
      ]
    },
    {
      id: 'candid',
      tint: 'tint',
      eyebrow: 'A frank fit check',
      h2: 'Can a Cajamarca teenager really take live classes online, in English?',
      lede: 'Many can, some should wait. Two figures decide most cases: a computer at home, and enough English to follow a mentor.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Cajamarca department and Peru, homes and people online (per cent)', head: ['Measure', 'Cajamarca 2015', 'Cajamarca 2025', 'Peru 2025'], rows: [
          ['Internet users among people six or older', '15.2', '67.8', '81.1'],
          ['Households connected to an internet service', '6.1', '33.7', '56.8'],
          ['Homes with a computer', '14.6', '17.5', '33.9']
        ] },
        { kind: 'source', html: 'Tables 11.13, 11.6 and 11.5 in volume one of INEI\'s statistical compendium for 2026, which draws on ENAHO. Department figures; INEI does not split them by city, and the city is likely better connected than the rural provinces. 2015 as a baseline is our choice.' },
        { kind: 'two', mt: true,
          leftH3: 'Devices',
          left: [
            'Internet use has risen more than fourfold in ten years, to 67.8% of people aged six and over. Computers have not kept pace: 17.5% of homes had one in 2025, about half the national share.',
            'A teenager who codes needs a keyboard for at least two hours a week. A shared family laptop, a relative\'s computer or a quiet hour at a cabina can work. A phone alone does not, and we will not pretend otherwise.'
          ],
          rightH3: 'English',
          right: [
            'EF\'s English Proficiency Index 2025 scores the Cajamarca region 383, in its very low band and the lowest of the Peruvian regions it lists. Peru scores 519 and Lima city 555. EF publishes no city figure for Cajamarca.',
            'On the regular school day, Inglés gets three of the 35 weekly hours in secundaria. A teenager who follows simple spoken English will cope and improve quickly with code on the screen; one who follows almost none should start one to one, or wait.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Book the free class.</strong> Within minutes the mentor can see whether your teenager follows. It costs nothing.',
          '<strong>Choose one to one if English is shaky.</strong> The mentor slows down, writes key words in the chat and checks every step.',
          '<strong>Plan the computer first.</strong> Agree a weekly hour when the machine is free before you book a group.',
          '<strong>Wait if it is too soon.</strong> If the fit is wrong today, we say so and suggest when to try again, rather than take a fee for classes your teen cannot follow.'
        ] },
        { kind: 'p', mt: true, html: 'For the wider department, including connection outside the city and the school picture across its provinces, see our <a class="ag-inline-link" href="/online-coding-and-ai-classes-cajamarca-region-peru">guide to online coding and AI classes in the Cajamarca region</a>.' }
      ]
    },
    {
      id: 'secundaria-caj',
      eyebrow: 'Secundaria',
      h2: 'Is programming taught in Cajamarca\'s secundaria schools?',
      lede: 'No. Cajamarca follows the national curriculum, which has no programming area at any grade.',
      body: [
        { kind: 'two',
          leftH3: 'What the week holds',
          left: [
            'On the regular school day, every secundaria grade has a 35-hour week: four hours each of Matemática and Comunicación, three of Inglés and two of Educación para el Trabajo. None of these is a programming class.',
            'Digital skill is a transversal competency of the CNEB, number 28, used across areas rather than taught in one. A teenager can finish 5° de secundaria without ever writing code.'
          ],
          rightH3: 'Where that leaves a teen',
          right: [
            'University courses in engineering, economics, sciences and health increasingly assume some programming or data skill. A teenager who arrives having written real programs starts ahead.',
            'Admission itself is by public competition with a compulsory knowledge exam, under the Ley Universitaria, and those exams are in Spanish. Our classes run beside school, the university alone decides who gets in, and we make no promise about it.'
          ] },
        { kind: 'p', mt: true, html: 'How Peru\'s main admission exams work, from the universities\' own pages, is explained in <a class="ag-inline-link" href="/peru-university-admission-exams-explained">Peru university admission exams explained</a>.' }
      ]
    },
    {
      id: 'teen-route',
      eyebrow: 'A route through secundaria',
      h2: 'What should a Cajamarca teenager learn, year by year?',
      lede: 'A suggested route from 1° to 5° de secundaria. Teens who start later move faster through the early steps.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our suggested route for Cajamarca teenagers (ages at 31 March)', head: ['School year', 'Age', 'Focus', 'Outcome'], rows: [
          ['1° secundaria', '12 to 13', 'Problem solving, first Python', 'Clear step-by-step plans and short programs'],
          ['2° secundaria', '13 to 14', 'Python foundations', 'Functions, lists and files'],
          ['3° secundaria', '14 to 15', 'Data, or Java', 'Real datasets, or object-oriented code'],
          ['4° secundaria', '15 to 16', 'Machine learning', 'One small model whose errors are counted'],
          ['5° secundaria', '16 to 17', 'A project of their own', 'Something to show a university or employer']
        ] },
        { kind: 'source', html: 'Route and outcomes are ours. MINEDU sets normative ages on 31 March, which put a 1° de secundaria pupil at 12 and a 5° pupil at 16; our courses are for 13 to 18, so a 12 year old in 1° joins once they turn 13.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Reasoning before syntax', p: 'Every course starts by planning on paper: what goes in, what comes out, what could go wrong. Syntax is easy to look up; reasoning is not.' },
          { h3: 'Contests if they like', p: 'Teens who enjoy puzzles can aim at the ONEM through their school, or at UTEC\'s free OPI, whose first round accepts Python. We use only problems we write ourselves.' },
          { h3: 'A portfolio by 5°', p: 'By the final year a teen should have a few projects they can explain line by line. That matters more than any certificate.' }
        ] },
        { kind: 'p', mt: true, html: 'Our national guide, <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a>, compares the options in more depth; Spanish-speaking parents can read <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a>.' }
      ]
    },
    {
      id: 'credits',
      eyebrow: 'A real Cajamarca project',
      h2: 'How does a university in Cajamarca turn class hours into credits?',
      lede: 'The Universidad Nacional de Cajamarca publishes the list of every undergraduate course section it ran in the 2026-I semester. Our teenagers use it to do what scientists and AI models both do: guess a rule, test it on every row, and keep the exceptions in sight.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The university released "Dataset Cursos pregrado matrícula semestre académico 2026 I" as open data on datosabiertos.gob.pe, under ODC-By, which lets anyone reuse it with credit. Our copy, unc-cursos-pregrado-2026-I.csv, has 2,882 rows, one per course section, cut on 6 October 2026. Each row gives the course, its credits, its weekly hours of theory and of practice, and how many students enrolled in that section. No student can be identified.',
            'It is a useful look at university for a teenager: 1,653 different courses in 30 professional schools, with a typical section of 16 students. We have no connection with the university.'
          ],
          rightH3: 'The guess',
          right: [
            'Looking at a few rows, a teen spots a pattern: two hours of theory plus two of practice gives three credits, the commonest row of all with 1,334 sections, and three of theory plus two of practice gives four. Our guess, before testing it, is that one hour of theory is worth one credit and one hour of practice half a credit.',
            'The first program turns that guess into a function and counts how many of the 2,882 sections it fits exactly.'
          ] },
        { kind: 'code', label: 'Version 1: test the guess on every row', lang: 'Python', code: V1, note: 'It prints <code>Rows: 2882 Rule fits: 1921 Misses: 961</code>.' },
        { kind: 'p', mt: true, html: 'Two thirds right is not bad for a guess, but 961 misses is too many to ignore. Printing a few of them shows the cause: most have an odd number of practice hours, so the guess gives a half, such as 3 theory and 3 practice giving 4.5. The university\'s credits are whole numbers. So it must round, but which way?' },
        { kind: 'p', html: 'Rather than argue, Version 2 tests three rival rules side by side: the exact guess, the guess rounded up and the guess rounded down. It counts the misses for each, and then lists the rows that even the strongest of the three cannot explain.' },
        { kind: 'code', label: 'Version 2: compare three rules and show what is left', lang: 'Python', code: V2, note: 'It prints <code>{\'exact\': 961, \'round up\': 837, \'round down\': 199}</code>, then <code>122 rows: credits 4 theory 2 practice 3</code>, <code>19 rows: credits 4 theory 3 practice 4</code> and <code>13 rows: credits 3 theory 2 practice 4</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Three guessed credit rules tested on 2,882 course sections (our calculation)', head: ['Rule', 'Sections it misses', 'Sections it fits'], rows: [
          ['Theory + practice / 2, exactly', '961', '1,921'],
          ['The same, rounded up', '837', '2,045'],
          ['The same, rounded down', '199', '2,683']
        ] },
        { kind: 'source', html: 'Course list for 2026-I from the Universidad Nacional de Cajamarca, reused under its Open Data Commons Attribution licence. The rules are our guesses and every count is ours. Hours are weekly hours as the university\'s data dictionary defines them. Four sections carry 0 credits, among them Deporte and Danzas Típicas Peruanas.' },
        { kind: 'p', mt: true, html: 'Rounding down wins clearly: it fits 2,683 of 2,882 sections, about 93%. But 199 sections still break it, and they are not random. The largest group, 122 sections with 2 hours of theory and 3 of practice, gets 4 credits where the rule says 3. Perhaps those courses follow an older study plan, or a school sets its own credits; the file does not say, and an honest analyst says "we do not know" rather than inventing a reason.' },
        { kind: 'p', html: 'This is how an AI model should be judged too. A model that is right 93% of the time is useful, and the 7% it gets wrong is where the interesting questions are. Teens who learn to list the exceptions, instead of hiding them, become the people who can be trusted with real data.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 13 to 14, on paper.</strong> For five rows of the table, work out the guess by hand, then round it both ways. Which rule would you have bet on before seeing the counts?',
          '<strong>First Python.</strong> Run Version 1, then print the first ten rows it misses, with their hours. Write down the pattern you see before reading on.',
          '<strong>Ages 15 and over.</strong> Group the 199 remaining misses by professional school. Are they spread out, or concentrated in a few schools?',
          '<strong>Going further.</strong> The file also gives the number of students in each section. Add them all up: you get 52,488. Explain why that is a number of seats, not of students, and why the two are different.'
        ] }
      ]
    },
    {
      id: 'ai-cajamarca',
      eyebrow: 'AI for teens',
      h2: 'Which AI tools can a Cajamarca teenager use, and how?',
      lede: 'AI is worth learning properly, from the inside. Using a chatbot to do the homework is not the same thing, and the tools set their own age limits.',
      body: [
        { kind: 'two',
          leftH3: 'Age limits',
          left: [
            'Under 18, ChatGPT may only be used with a parent\'s permission, and Claude is restricted to adults. Our mentors keep every under-18 learner to tools their age permits.',
            'Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists the rules tool by tool, for parents who want to check.'
          ],
          rightH3: 'How we use AI in class',
          right: [
            'Teens learn how a model is built: examples, a rule, a measure of error, and adjustment. Then any AI answer is treated like the credit rule above, as a guess to be tested on cases where the right answer is known.',
            'Contests set their own rules, and UTEC\'s OPI forbids generative AI as a way to solve its tasks. Teens who can reason unaided are ready either way.'
          ] }
      ]
    },
    {
      id: 'cajamarca-clock',
      eyebrow: 'Class times',
      h2: 'At what times could a teenager in Cajamarca have class?',
      lede: 'At any hour the family books. Cajamarca uses Peru time throughout the year, and the mentor follows it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cajamarca times beside India times (conversions, not a schedule)', head: ['Cajamarca', 'India', 'Often chosen for'], rows: [
          ['06:30', '17:00', 'Before an afternoon shift at school'],
          ['09:00', '19:30', 'School holidays'],
          ['13:30', '00:00, next day', 'Right after a morning shift'],
          ['17:00', '03:30, next day', 'After homework'],
          ['19:30', '06:00, next day', 'Evening, one to one']
        ] },
        { kind: 'source', html: 'Peru is fixed at UTC minus 5 hours and has used no summer time since 1994 (see the America/Lima zone of the tz database; legal time comes from INACAL). India is fixed at UTC plus 5 hours 30 minutes, which keeps it 10 hours 30 minutes ahead of Cajamarca.' },
        { kind: 'p', mt: true, html: 'Because both clocks stay put all year, a booked slot never drifts. The family books in Cajamarca time and the mentor sees India time. The long summer break from January is a natural moment to begin, and the same hour can carry on into the school year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Milestones for a Cajamarca teenager',
    lede: 'Progress measured as skills a teen can demonstrate, by stages we set ourselves, never as hours logged.',
    table: { caption: 'Teen stages, from first program to tested models (ours)', head: ['Stage', 'Typical timing', 'What the teenager does'], rows: [
      ['1. Plan', 'First weeks', 'Write the steps of a solution before any code'],
      ['2. Program', 'First term', 'Turn a plan into working Python'],
      ['3. Test', 'First term', 'Check a function on cases with known answers'],
      ['4. Fit a rule', 'Within a year', 'Test a guessed rule on every row and count misses'],
      ['5. Model', 'Year two', 'Trains a small model and reports where it fails'],
      ['6. Show', 'By 5° secundaria', 'Present a project and explain every line']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is the credits project. A teenager who says "93% fit, and here are the exceptions" is reasoning like a scientist.',
      'Monthly notes tell you what your teen built and explained.'
    ] },
    right: { h3: 'For teens', ps: [
      'A rule that fits most rows is a good start. The rows it misses are where you learn.',
      'Never say why an exception happens unless the data tells you.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for Cajamarca teenagers',
    lede: 'Three directions after the first year, each taught live in English by one mentor throughout.',
    bands: [
      { num: 'I', h3: 'Languages and logic', sub: 'Ages 13 to 18', courses: [
        { code: 'CAJ / L / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented code, the language of many university courses.' },
        { code: 'CAJ / L / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language used in the OPI final, from first steps.' },
        { code: 'CAJ / L / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Hard, elegant problems of our own making.' }
      ] },
      { num: 'II', h3: 'Data and AI', sub: 'Ages 14 to 18', courses: [
        { code: 'CAJ / D / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Messy real files turned into charts and predictions.' },
        { code: 'CAJ / D / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Machine learning with Orange, before or beside code.' },
        { code: 'CAJ / D / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Picking AI tools a teen may legally use, and using them well.' }
      ] },
      { num: 'III', h3: 'Making things', sub: 'Ages 13 to 18', courses: [
        { code: 'CAJ / M / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'Apps for teens', blurb: 'Plan, build and test a mobile app.' },
        { code: 'CAJ / M / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'First real websites, written by hand.' },
        { code: 'CAJ / M / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Keep and share code the way professionals do.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Week to week',
    h2: 'A teenager\'s live class, seen from Cajamarca',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Around the shift', l: 'Classes slot into the half of the day your teen is not at school.' },
      { time: 'Holidays', l: 'January to March is a good season to begin.' },
      { time: 'Private', l: 'A one-to-one hour that moves with exams and family life.' }
    ],
    cells: [
      { h3: 'A mentor who knows them', p: 'The same teacher every class.' },
      { h3: 'English at their level', p: 'Slower speech, key words written down.' },
      { h3: 'Teens write the code', p: 'Mentors ask questions; teens type.' },
      { h3: 'Only teenagers', p: 'Groups of 13 to 18 year olds.' },
      { h3: 'Parents in the loop', p: 'Short monthly notes on progress.' },
      { h3: 'Group or private', p: 'Fifteen to twenty teens, or one.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Teenagers who keep going build apps, games and data tools. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold more.',
  reviewsLede: 'What parents and students wrote about us on Google.',

  fees: {
    h2: 'Fees for teen classes in Cajamarca',
    lede: 'Plans are paid each month, priced in US dollars and charged to a card in dollars. Your bank decides the soles equivalent on the day, so the statement figure may differ a little.',
    free: ['A free first class', 'A puzzle, a program and an English check', 'No card asked'],
    group: ['Fifteen to twenty teenagers', 'One mentor for the course', 'Two live classes a week', 'Pay monthly, stop anytime'],
    one: ['Your teen and a mentor', 'Projects chosen together', 'Hours you set']
  },

  faq: {
    eyebrow: 'Cajamarca families ask',
    h2: 'Coding and AI for teens in Cajamarca: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live and online, and the only teaching language is English. Mentors slow down, write key words in the chat, adapt to your teenager\'s pace and accent, and answer Spanish questions with the English words. We check at the free class that your teen can follow.' },
      { q: 'Can a teenager in Cajamarca find coding classes?', a: 'Yes, through live online classes. A teen in the city, in Los Baños del Inca or in a provincial town logs in from a computer at whatever hour has been booked.' },
      { q: 'EF scores Cajamarca\'s English very low. Is this realistic?', a: 'For many teens, yes, because code is visual and the vocabulary is small; for some, not yet. EF\'s 2025 regional score for Cajamarca is 383. Start one to one, or book the free class and let the mentor tell you honestly.' },
      { q: 'We do not have a computer. What can we do?', a: 'A phone is not enough for coding. A shared or borrowed laptop for two hours a week works well. INEI counted a computer in 17.5% of Cajamarca homes in 2025, so many families plan this way.' },
      { q: 'Does secundaria in Cajamarca teach programming?', a: 'No. The national secundaria plan has no programming area, and digital skills are a transversal competency rather than a subject.' },
      { q: 'Will this help my teenager get into university?', a: 'It helps them arrive prepared for courses that use programming and data. Admission is by each university\'s own exam, in Spanish, and the university decides. We teach alongside school and promise no admission result.' },
      { q: 'What time are classes for Cajamarca?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With India ten and a half hours ahead all year round, 09:00 in Cajamarca means 19:30 for the mentor.' },
      { q: 'Can my teenager use ChatGPT in class?', a: 'Only with a parent\'s permission, as ChatGPT requires under 18, and never as a way to skip thinking. Tools for adults only, such as Claude, are not used with under-18 learners.' },
      { q: 'How are fees paid?', a: 'By card each month, in US dollars; the soles amount is your bank\'s conversion. From an Indian connection the page shows rupees. No card is taken for the trial, which is free.' },
      { q: 'Is there a certificate?', a: 'Courses that include one give our own certificate of completion. It is not a Peruvian school or university qualification and is issued by no ministry or school; it shows the work your teen actually did.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also worth reading',
    h2: 'Related pages for Cajamarca teenagers',
    lede: 'More for teens and parents in Peru.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, sorted by age and subject.' },
      { href: '/online-coding-and-ai-classes-cajamarca-region-peru', label: 'Online classes in the Cajamarca region', p: 'The wider department, beyond the city.' },
      { href: '/coding-classes-for-teens-peru', label: 'Teen coding classes across Peru', p: 'Choices for every secundaria year.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'How we teach AI to teens.' },
      { href: '/ai-tools-age-guide', label: 'AI tools and ages', p: 'Minimum ages, tool by tool.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Cajamarca',
    lede: 'In the trial your teenager tackles a small puzzle and codes something simple alongside a mentor. Afterwards we tell you straight how the thinking and the English went, and whether we suggest a group, one to one, or waiting a little.',
    readFirst: 'If you prefer to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a class and <a class="ag-inline-link" href="/courses">all courses</a> has every syllabus.',
    note: 'Classes are taught live from India, in English only. A WhatsApp message in English is the quickest way to reach us.',
    formNote: 'Free, no card, no strings.'
  },

  footer: {
    cols: [
      { h4: 'For teens', links: [
        { href: '/coding-classes-for-teens-peru', label: 'Teens in Peru' },
        { href: '/ai-classes-for-teenagers', label: 'AI for teenagers' },
        { href: '/peru-university-admission-exams-explained', label: 'Admission exams' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru' }
      ] }
    ],
    bottomRight: 'The rows a rule misses are where you learn'
  },

  personalityCss: `
.ag-root.ag-catc .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-catc .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-catc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-catc .ag-table caption { text-align: left; font-style: italic; font-weight: 500; }
.ag-root.ag-catc .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Perfil Sociodemográfico 2017 (Cuadro N° 1.9), Censos Nacionales 2025 (Indicadores demográficos, Cuadro 1) and Compendio Estadístico Perú 2026 (ENAHO cuadros 11.5, 11.6, 11.13); MINEDU CNEB and Edades normativas; Ley Universitaria 30220 as quoted by PUCP; ONEM 2026; UTEC OPI; EF EPI 2025; our AI tool age audit; tz database America/Lima. Data: Universidad Nacional de Cajamarca, Cursos pregrado matrícula 2026-I, ODC-By.',
    localProject: 'How does a university in Cajamarca turn class hours into credits? An original Python project on the UNC 2026-I course-section dataset (ODC-By, 2,882 rows): Version 1 tests our guess, credits = theory + practice / 2, and fits 1,921 rows; Version 2 compares exact, rounded-up and rounded-down rules (961, 837 and 199 misses) and lists the leftover exceptions (122 sections with 2 theory and 3 practice hours carry 4 credits). Lesson family: fitting a guessed rule to data and keeping exceptions visible.',
    requiredMentions: ['unc-cursos-pregrado-2026-I.csv', 'Rows: 2882 Rule fits: 1921 Misses: 961', "'round down': 199", '122 rows: credits 4 theory 2 practice 3', '201,329', '242,285', '17.5', 'Cajamarca region 383', 'The rows a rule misses are where you learn'],
    sources: [
      { claim: 'Cajamarca city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Cajamarca department, province and district populations, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cajamarca internet use and homes with internet or a computer.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'UNC 2026-I course-section dataset and its ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/dataset-cursos-pregrado-matr%C3%ADcula-semestre-acad%C3%A9mico-2026-i' },
      { claim: 'Secundaria weekly hours and transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'University admission by public competition with a knowledge exam.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'OPI organiser, cost, languages and AI rule.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Peru, Lima and Cajamarca.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A reason why the 199 exception sections carry their credits: the file does not say, and the page says so.',
      'Reading 242,285 (district, 2025) against 201,329 (city, 2017) as growth: different units and years.',
      'Treating the 52,488 enrolments as students: they are seats in sections.',
      'Any sum of the city, department, province and district counts.',
      'Recommending Claude, or ChatGPT without a parent\'s permission, to under-18s: refused.',
      'Any link with the Universidad Nacional de Cajamarca, MINEDU, UTEC or any school: none; no admission promise.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
