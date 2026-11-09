// SHIP: market | Peru's school summer break as a live coding start, built on RM 501-2025 | date arithmetic: fencepost days versus counted school weeks
'use strict';
// Summer holiday coding classes online for Peru (ag- English twin of the vacaciones útiles doors, row PE066, P2,
// hubGroup exams). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "Vacaciones útiles pages").
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// What it sells: the normal live classes (group of fifteen to twenty, or one to one) started in the summer break, with a
// suggested holiday plan that is ours and labelled ours. No camp length, start date or price is invented; fees render
// from the template only.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/peru-summer-holiday-coding-classes-online/;
// quotes grepped in the raw text):
//  - RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026 (facts-school FACTS 20 to 24; signed PDF page 7, image
//    rm501-2025-pdf/page11-checked-by-eye.png read by eye 2026-11-09): "El año escolar está compuesto por treinta y seis
//    (36) semanas lectivas y ocho (08) semanas de gestión"; Tabla 1: "Del 2 al 13 de marzo", "Del 16 marzo al 15 de mayo",
//    "Del 18 al 22 de mayo", "Del 25 mayo al 24 de julio", "Del 27 julio a 7 de agosto", "Del 10 agosto al 9 de octubre",
//    "Del 12 al 16 de octubre", "Del 19 octubre a 18 de diciembre", "Del 21 al 31 de diciembre"; DRE/UGEL "tienen la
//    potestad de definir una distribución de semanas lectivas y de gestión distinta a la sugerida".
//  - 2027 calendar: no MINEDU norm for the 2027 school year found on gob.pe as of 2026-11-08 (facts-school BLOCKED.md).
//    MINEDU 14 Oct 2026 (n-mat2027): "inició hoy el despacho de 13.3 millones de unidades de materiales educativos para el
//    año escolar 2027".
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet4_CUADRO_N_3.tsv, Cuadro N° 3, población censada
//    por grupo de edad): "LIMA METROPOLITANA 9600043 555239 818096 867253 ..." (6 to 11: 818,096; 12 to 17: 867,253).
//  - Municipal summer programmes 2026 (raw copies in the three district src-pages folders):
//    Surco, munisurco.gob.pe 6 Jan 2026: "DivertiSurco: Disfruta tu verano 2026", "durante los meses de enero y febrero",
//    "ciencia y robótica". La Molina, gob.pe/institucion/munilamolina nota 380, 6 Jan 2026: "Molitalleres de Verano 2026",
//    "los talleres se iniciarán el próximo lunes 12 de enero". Miraflores, miraflores.gob.pe 5 Jan 2026: ECO KIDS
//    "Programa gratuito está dirigido a menores de 6 a 12 años", "durante 7 semanas, a partir del martes 13 de enero".
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el
//    84,7% de los hogares disponía del servicio"; "el 36,4% de los hogares del país disponía de al menos una computadora";
//    "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)"; "el de 12 a 18 años con un 92,5%". INEI's
//    Lima Metropolitana includes Callao.
//  - EF EPI 2025 Peru page (ef_peru.txt): Lima 555 (high band from 550), Peru 519, rank 52 of 123, speaking 480.
//  - Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; INACAL clock matched UTC-5 on
//    2026-11-08; INEI Compendio 2026 cuadro 1.3: Lima 12:00 M = Delhi 10:30 P.M.
// Our own calculations: python3 -I shc_v1.py prints "Block 1 60 days = 8.6 weeks" (and the same for blocks 2 to 4);
//   shc_v2.py prints "Block 1 Mon 16 Mar to Fri 15 May -> 9 weeks" ... "Block 4 Mon 19 Oct to Fri 18 Dec -> 9 weeks",
//   "Teaching weeks in 2026: 36"; shc_v3.py prints "Break after Block 1: 5 weekdays", "Break after Block 2: 10 weekdays",
//   "Break after Block 3: 5 weekdays" (matching 01, 02 and 01 management weeks in Tabla 1).
// Our suggested holiday plan (four stages, projects per age) is ours and labelled ours, not a camp product.
// Lesson family: date arithmetic; subtracting dates counts the gaps, not the days (fencepost), and a school week must be
// counted as a school week, then checked against the published table.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from datetime import date',
  '',
  'blocks = [',
  "    ('Block 1', date(2026, 3, 16), date(2026, 5, 15)),",
  "    ('Block 2', date(2026, 5, 25), date(2026, 7, 24)),",
  "    ('Block 3', date(2026, 8, 10), date(2026, 10, 9)),",
  "    ('Block 4', date(2026, 10, 19), date(2026, 12, 18)),",
  ']',
  '',
  'for name, start, end in blocks:',
  '    days = (end - start).days',
  "    print(name, days, 'days =', round(days / 7, 1), 'weeks')"
].join('\n');

const OUT1 = [
  'Block 1 60 days = 8.6 weeks',
  'Block 2 60 days = 8.6 weeks',
  'Block 3 60 days = 8.6 weeks',
  'Block 4 60 days = 8.6 weeks'
].join('\n');

const V2 = [
  'from datetime import date, timedelta',
  '',
  '# blocks = [...] exactly as before',
  '',
  'def school_weeks(start, end):',
  '    weeks = 0',
  '    day = start',
  '    while day <= end:',
  '        if day.weekday() == 0:',
  '            weeks = weeks + 1',
  '        day = day + timedelta(days=1)',
  '    return weeks',
  '',
  'total = 0',
  'for name, start, end in blocks:',
  '    w = school_weeks(start, end)',
  '    total = total + w',
  "    print(name, start.strftime('%a %d %b'), 'to', end.strftime('%a %d %b'), '->', w, 'weeks')",
  "print('Teaching weeks in 2026:', total)"
].join('\n');

const OUT2 = [
  'Block 1 Mon 16 Mar to Fri 15 May -> 9 weeks',
  'Block 2 Mon 25 May to Fri 24 Jul -> 9 weeks',
  'Block 3 Mon 10 Aug to Fri 09 Oct -> 9 weeks',
  'Block 4 Mon 19 Oct to Fri 18 Dec -> 9 weeks',
  'Teaching weeks in 2026: 36'
].join('\n');

const V3 = [
  'def weekdays_between(a, b):',
  '    count = 0',
  '    day = a + timedelta(days=1)',
  '    while day < b:',
  '        if day.weekday() < 5:',
  '            count = count + 1',
  '        day = day + timedelta(days=1)',
  '    return count',
  '',
  'for i in range(len(blocks) - 1):',
  '    gap = weekdays_between(blocks[i][2], blocks[i + 1][1])',
  "    print('Break after', blocks[i][0] + ':', gap, 'weekdays')"
].join('\n');

const OUT3 = [
  'Break after Block 1: 5 weekdays',
  'Break after Block 2: 10 weekdays',
  'Break after Block 3: 5 weekdays'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Summer holiday coding (vacaciones útiles)' },
  slug: 'peru-summer-holiday-coding-classes-online',
  code: 'shc',
  accent: '#7C4B02',
  accentRationale: 'Summer holiday coding for Peru: a sun-baked caramel brown #7C4B02, the colour of a January afternoon on the Costa Verde cliffs, warm without turning into a summer-camp orange; contrast 5.95 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Summer holiday coding classes for Peru',
  title: 'Summer Holiday Coding Classes Online for Peru, Live in English',
  description: 'Summer holiday coding classes for children and teens in Peru: live, online and in English, a start for the January to March break, in a group or one to one.',
  ogDescription: 'Use Peru\'s summer school break to start coding: the 2026 MINEDU calendar, what Lima districts ran in summer 2026, a holiday plan of our own and a Python lesson that checks the school calendar.',
  twitterDescription: 'Live coding classes in English for Peru\'s summer break, for ages 6 to 17, in a group or one to one, at any hour.',
  pageName: 'Summer Holiday Coding Classes Online for Peru',
  webPageDescription: 'A guide for families in Peru who want to use the summer school break (vacaciones útiles) to start coding, built from RM 501-2025-MINEDU, INEI Censos Nacionales 2025 and INEI household technology data, Lima district council announcements, EF EPI 2025 and the tz database, with an original Python lesson that checks the 2026 school calendar.',
  courseDescription: 'Live online coding classes taught in English for children and teenagers in Peru, started during the summer school break: Scratch, Python, Roblox, web and AI projects, in a group of fifteen to twenty or one to one, at any hour in Peru time, continuing into the school year if the family wishes.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Summer holiday coding',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#break', label: 'The break' },
    { href: '#districts', label: 'Summer 2026' },
    { href: '#plan', label: 'Holiday plan' },
    { href: '#lesson', label: 'Python lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Summer school break &middot; Ages 6 to 17',
  h1: 'Summer holiday coding classes online for Peru',
  lede: 'Peruvian schools close in December and reopen in March, and every January parents across Lima and the regions start hunting for <em>vacaciones útiles</em>. This page is for families who want those weeks to count: what the official calendar says about the break, what Lima district councils offered in summer 2026, a holiday plan of our own for each age, and a real Python lesson your child could do in the first week.',
  secondaryCta: { href: '#plan', label: 'See the holiday plan' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like our child to start coding classes in English during the summer holidays. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; one mentor all summer, always in English',
  spec: [
    ['Who', 'Children of 6 to 12 and teenagers of 13 to 17'],
    ['When', 'From the end of the school year in December'],
    ['What', 'Scratch, Python, Roblox, web and AI projects'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour in Peru time'],
    ['First class', 'Free, with no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Yes, your child can spend Peru\'s summer school break learning to code from home. Modern Age Coders teaches live online coding classes in English for children of 6 to 12 and teenagers of 13 to 17 anywhere in Peru, with mentors based in India who speak clearly and adapt to each learner. There is no fixed camp: your child starts our normal classes whenever the break begins, in a group of fifteen to twenty or one to one, at any hour that suits your family, and can carry on when school returns.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses families start in the summer',
    lede: 'One for young children who have never coded, one for the age when typed code becomes possible, and one for teenagers who want to build with AI rather than just ask it questions.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'SHC / 01', title: 'Coding for kids: Scratch to games and apps', alt: 'Course thumbnail for Coding for Kids, Scratch to games, apps and AI', note: 'Ages 6 to 12, grouped by age. Blocks, animations and small games, so a summer produces something your child can show the family in February.' },
      { course: 'python-ai-kids-masterclass', code: 'SHC / 02', title: 'Python and AI for kids', alt: 'Course thumbnail for Python and AI for Kids', note: 'Ages 9 to 12. The step from dragging blocks to typing real code, with turtle drawings, quizzes and small AI projects.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'SHC / 03', title: 'Vibe coding for teens', alt: 'Course thumbnail for Vibe Coding for Teens, Python, web development and AI', note: 'Ages 13 to 17. Python and web projects built with AI help, where the teenager reads, tests and explains every line before keeping it.' }
    ]
  },

  sections: [
    {
      id: 'break',
      eyebrow: 'The school calendar',
      h2: 'When is the summer school holiday in Peru?',
      lede: 'Roughly from the last week of December to early March. For 2026, MINEDU\'s technical norm RM 501-2025 put the last teaching day on 18 December 2026, and the 2026 year had started with teaching on 16 March 2026, so the long break sits between those two points of the calendar.',
      body: [
        { kind: 'table', numCols: [], caption: 'The 2026 school year in public and private schools, by block (RM 501-2025-MINEDU, Tabla 1)', head: ['Block', 'Length', 'Dates in 2026'], rows: [
          ['Management weeks (school staff only)', '2 weeks', '2 to 13 March'],
          ['Teaching block 1', '9 weeks', '16 March to 15 May'],
          ['Management week', '1 week', '18 to 22 May'],
          ['Teaching block 2', '9 weeks', '25 May to 24 July'],
          ['Management weeks', '2 weeks', '27 July to 7 August'],
          ['Teaching block 3', '9 weeks', '10 August to 9 October'],
          ['Management week', '1 week', '12 to 16 October'],
          ['Teaching block 4', '9 weeks', '19 October to 18 December'],
          ['Management weeks', '2 weeks', '21 to 31 December']
        ] },
        { kind: 'source', html: 'Source: Ministerio de Educación, Resolución Ministerial N.° 501-2025-MINEDU, "Norma Técnica para el Año Escolar 2026 en las Instituciones y Programas Educativos públicos y privados de la educación básica", Tabla 1, page 7 of the signed PDF, read by eye on 9 November 2026. The norm sets 36 teaching weeks and 8 management weeks for 2026, and lets regional bodies (DRE and UGEL) set a different distribution for climate or social reasons, so a school outside Lima may differ.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for January to March',
          left: [
            'Pupils stop on 18 December 2026; the last two weeks of December are for school staff. The 2026 year opened with two staff weeks from 2 March and pupils back on 16 March 2026, so in that year the summer break for children ran from Christmas to mid-March. Families use that stretch for the <em>vacaciones útiles</em>, the summer programmes run by councils, schools and private academies.',
            'Each school still sets its own calendar inside the norm: the RM lets schools organise the year in bimestres, trimestres or another pattern, and private schools often start or finish a few days apart. Check the dates your own school sends home.'
          ],
          rightH3: 'What we do not know yet: 2027',
          right: [
            'As of 8 November 2026 we found no MINEDU norm for the 2027 school year on gob.pe, so nobody can yet say on what date classes will restart in March 2027. MINEDU has started preparing that year: on 14 October 2026 it began dispatching 13.3 million units of school materials for the 2027 school year.',
            'Because the restart date is still open, we do not print a fixed length for a summer programme. Your child simply begins our normal classes when the break begins and keeps going as long as suits the family.'
          ] },
        { kind: 'p', mt: true, html: 'The scale is large. In the Censos Nacionales 2025, INEI counted 818,096 children of 6 to 11 and 867,253 young people of 12 to 17 living in Lima Metropolitana (población censada, Cuadro N.° 3). Almost all of them are at school from March to December and free from late December, which is why every district council in the capital runs some kind of summer offer, and why searches for <em>vacaciones útiles</em> climb in December.' }
      ]
    },
    {
      id: 'districts',
      eyebrow: 'Summer 2026 in Lima',
      h2: 'What did Lima district councils offer in summer 2026?',
      lede: 'Mostly sport, arts and a little technology, in person and in the district. Three examples from the councils\' own announcements show the pattern, and where a live online coding class fits beside it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three Lima district summer programmes in 2026, as announced by each council', head: ['District', 'Programme', 'What the council announced'], rows: [
          ['Santiago de Surco', 'DivertiSurco: Disfruta tu verano 2026', 'Workshops in January and February for children and teenagers of the district and of Lima in general, including science and robotics'],
          ['La Molina', 'Molitalleres de Verano 2026', 'Workshops from Monday 12 January 2026 for children, teenagers and adults, including robotics and, for older learners, computing'],
          ['Miraflores', 'ECO KIDS', 'A free environmental programme for children of 6 to 12, seven weeks in district parks from Tuesday 13 January 2026']
        ] },
        { kind: 'source', html: 'Sources: Municipalidad de Santiago de Surco, munisurco.gob.pe, note of 6 January 2026; Municipalidad de La Molina, press note N.° 380 on gob.pe, 6 January 2026; Municipalidad de Miraflores, miraflores.gob.pe, note of 5 January 2026. All read on 9 November 2026. We are not connected with any district council, and the 2027 programmes had not been announced when we checked.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'They are local and in person', p: 'Council workshops happen in sports complexes, community centres and parks, which is part of their charm: children meet neighbours and get outdoors. They also mean a trip each time, at the hour the council chose.' },
          { h3: 'Robotics, not much code', p: 'Where technology appears in the 2026 announcements, it is usually robotics or general computing. That is a fine taste. A child who wants to write programs, and to understand what the robot is running, needs time with a language such as Scratch or Python.' },
          { h3: 'Both can fit in one summer', p: 'Live online classes take about an hour twice a week, at any hour you choose. Many families combine them: swimming or football at the council in the morning, coding from home in the afternoon.' }
        ] },
        { kind: 'p', mt: true, html: 'We write district by district in Spanish as well; for Lima families who want the whole picture of English-taught coding in the capital, our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> covers bilingual, Cambridge and IB pupils in detail.' }
      ]
    },
    {
      id: 'different',
      eyebrow: 'How our summer works',
      h2: 'Is this a summer camp or regular classes?',
      lede: 'Regular classes, started in the summer. We do not run a fixed summer camp for Peru with its own dates. Your child joins the same live course any of our students would join, at the moment the school break begins, and that is a strength rather than a compromise.',
      body: [
        { kind: 'two',
          leftH3: 'Why not a short camp',
          left: [
            'A two-week camp is long enough to make one game and too short to learn how to make the next one alone. Children forget a programming idea quickly if they meet it once; they keep it when they use it again a week later in a new project.',
            'A summer start avoids that problem. Your child has a calm stretch with no homework to build habits, and the course simply continues, at a lighter pace if you wish, when school returns in March.'
          ],
          rightH3: 'What stays the same all year',
          right: [
            'The same mentor teaches your child from the first summer class, knows how they think, and sends you a short note on what was practised and what comes next.',
            'You choose a group of fifteen to twenty learners of a similar age or one-to-one classes, and you choose the hours. You can pause or stop at the end of any month.'
          ] },
        { kind: 'p', mt: true, html: 'Nothing here is connected with MINEDU, a UGEL, a council or any school. Our classes run alongside school and do not give Peruvian grades or credits. When a child finishes a course, we give our own certificate of completion.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'A holiday plan of our own',
      h2: 'What could a summer of coding look like for my child?',
      lede: 'Here is the plan our mentors suggest for a first summer, in four stages. It is our own suggestion, not a fixed programme: a stage usually takes a couple of weeks at two classes a week, and the mentor stretches or shortens it to match your child.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our suggested first-summer plan by age (ours; projects are examples)', head: ['Stage', 'Ages 6 to 8', 'Ages 9 to 12', 'Ages 13 to 17'], rows: [
          ['1. First steps', 'Make a cat walk, jump and talk in Scratch', 'Scratch game with a score, then a first line of Python', 'Python basics: variables, input, if and else'],
          ['2. Repeat and decide', 'An animated story with loops', 'A Python quiz that keeps score', 'Loops and lists: a playlist or a reading log'],
          ['3. Data', 'A catch game that gets faster', 'A drawing program with the turtle', 'Dates and files: the calendar lesson below'],
          ['4. Show it', 'Present the game to the family', 'A Roblox obstacle course or small website', 'A web page or AI helper, explained line by line']
        ] },
        { kind: 'source', html: 'This plan is ours, written by our mentors for this page. Every child is placed after the free first class, so a 10-year-old who already knows Scratch may start at stage 2.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Book the free class before the break.</strong> December is a good time: your child meets a mentor, solves a small puzzle and you agree a starting stage and an hour.',
          '<strong>Fix two hours a week.</strong> Two classes on fixed days give the summer a rhythm, even when the rest of the day is free. Pick hours that do not clash with the beach, council workshops or family trips.',
          '<strong>Add short practice.</strong> Twenty minutes between classes, on a project the child chose, does more than one long session on Sunday.',
          '<strong>Keep a project log.</strong> A notebook with the date, what was built and one new English word. By March it becomes a record your child is proud of.',
          '<strong>Decide in late February.</strong> Continue into the school year at the same pace, slow down to one class a week, or pause. Any of the three is fine.'
        ] },
        { kind: 'p', mt: true, html: 'Families with a child at primaria will find more detail on the age question, and on why we start with Scratch, on our Spanish page <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the summer classes taught in Spanish?',
      lede: 'No. Every class is live, online and in English only. Our mentors are based in India; they speak slowly and clearly, repeat in other words, show every step on the shared screen, and adapt their pace and accent to your child. A summer is a very good time to start this way.',
      body: [
        { kind: 'two',
          leftH3: 'Why the summer helps',
          left: [
            'During the school year a child switches between Spanish lessons, homework and family life all day. In January the mind is fresher. The first two or three weeks of getting used to a mentor\'s accent happen without any school pressure, and by March the English of the lesson feels ordinary.',
            'The words of code are already English: <code>print</code>, <code>if</code>, <code>while</code>, <code>return</code>. Hearing them spoken, in a sentence, is what turns them from symbols into meaning.'
          ],
          rightH3: 'What EF\'s index says about Peru',
          right: [
            'In the EF English Proficiency Index 2025, Peru scored 519 ("Moderate", 52nd of 123 countries) and Lima 555, the one Peruvian city in EF\'s "High" band, which starts at 550. Peru\'s speaking score, 480, is its weakest skill.',
            'EF tests adults, so these figures describe parents more than children. They still show the gap a spoken class works on: Peruvians read English better than they speak it, and a coding lesson asks a child to speak, explain and ask questions every few minutes.'
          ] },
        { kind: 'p', mt: true, html: 'Your child does not need to arrive speaking English. Young children start with blocks, pictures and one new word per class; older children pick up the technical vocabulary as they type. You can always write to us on WhatsApp in Spanish if that is easier for you; the lessons themselves stay in English.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a summer coding lesson look like?',
      lede: 'This is a lesson our mentors use with teenagers of 13 and over in the first summer stage, and with keen 11 and 12 year olds. The code is ours; the data are the four teaching blocks of the 2026 school calendar from the table above. The question is simple: does the calendar really give nine weeks per block?',
      body: [
        { kind: 'code', label: 'Version 1: subtract the dates', lang: 'Python', code: V1, note: 'Before running it, the mentor asks in English: "How many weeks will it print for each block?" Most students say nine, because the table says nine.' },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Exact output, copied after running the program ourselves with Python 3. Not nine. Is MINEDU wrong, or is the program?' },
        { kind: 'ol', mt: true, items: [
          '<strong>Find the fencepost.</strong> <code>end - start</code> counts the gaps between days, not the days. From Monday 16 March to Friday 15 May there are 60 gaps but 61 days. It is the old puzzle of fence posts and fence panels.',
          '<strong>Find the second mistake.</strong> Even 61 days divided by 7 is 8.7, not 9. A school week is Monday to Friday; the last week of the block ends on a Friday, so dividing calendar days by seven will never land on a whole number. The program is measuring the wrong thing.',
          '<strong>Count what the table counts.</strong> The norm counts school weeks. So the new version walks through every day and counts the Mondays: each Monday inside the block starts one school week.'
        ] },
        { kind: 'code', label: 'Version 2: count school weeks', lang: 'Python', code: V2, note: '<code>weekday()</code> returns 0 for Monday and 6 for Sunday. <code>while day &lt;= end</code> includes the last day on purpose: that single <code>=</code> is where the fencepost is fixed.' },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output from our own run. Nine weeks per block and 36 in the year, the same as the norm\'s "treinta y seis (36) semanas lectivas".' },
        { kind: 'code', label: 'Version 3: check the breaks too', lang: 'Python', code: V3, note: 'This counts the weekdays strictly between the end of one block and the start of the next, so <code>while day &lt; b</code> leaves the first day of the next block out.' },
        { kind: 'code', label: 'What Version 3 prints', lang: 'Output', code: OUT3, note: 'Exact output from our own run: 5, 10 and 5 weekdays, which are the one, two and one management weeks in the table.' },
        { kind: 'p', mt: true, html: 'The lesson is not really about calendars. It is about the habit we teach in every class: predict, run, notice the surprise, and find out whether the data or the program is wrong before changing anything. When MINEDU publishes the 2027 calendar, the student only needs to change four lines of data to check it the same way. An AI tool would have given a number; the student now knows why the first number was wrong.' }
      ]
    },
    {
      id: 'home',
      eyebrow: 'At home',
      h2: 'What does my child need at home for online summer classes?',
      lede: 'A computer with a keyboard, a camera and a microphone, a stable connection and a quiet corner. A phone is fine for watching but not for typing code.',
      body: [
        { kind: 'two',
          leftH3: 'What INEI says about homes in 2026',
          left: [
            'INEI\'s survey of information technology in households for the second quarter of 2026 found that 84.7% of households in Lima Metropolitana, which in INEI\'s figures includes Callao, had internet at home. Across the whole country, 36.4% of households had at least one computer.',
            'The same survey found that internet use was lowest among children of 6 to 11 (68.2%) and much higher among 12 to 18 year olds (92.5%). For many younger children, a summer coding class is their first serious use of a computer, which is another reason we start them with blocks.'
          ],
          rightH3: 'A simple checklist',
          right: [
            'A laptop or desktop, even a shared family one. A headset with a microphone helps a child hear the mentor\'s English clearly.',
            'The same table and chair for every class, away from the television, and the class link opened five minutes early. Scratch runs in the browser; for Python the mentor helps install free software in the first lesson.'
          ] },
        { kind: 'p', mt: true, html: 'If your home has only one computer, choose class hours when nobody else needs it; that is one of the reasons we let families choose the hour instead of fixing a timetable.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'What time are the classes in Peru?',
      lede: 'Whatever hour you choose. Our mentors are in India, and because neither country changes its clocks, the gap between Peru time and India time is the same in January as in July.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time side by side (conversions only, not a class timetable)', head: ['Peru time', 'India time', 'Day in India'], rows: [
          ['9:00 a.m.', '7:30 p.m.', 'Same day'],
          ['11:00 a.m.', '9:30 p.m.', 'Same day'],
          ['1:00 p.m.', '11:30 p.m.', 'Same day'],
          ['4:00 p.m.', '2:30 a.m.', 'Next day'],
          ['6:00 p.m.', '4:30 a.m.', 'Next day'],
          ['8:00 p.m.', '6:30 a.m.', 'Next day']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 all year and has not used summer time since 1994 (tz database, zone America/Lima; INACAL\'s official clock read as UTC minus 5 on 8 November 2026). India keeps UTC plus 5:30 all year, so India is 10 hours 30 minutes ahead of Peru every day. INEI\'s Compendio Estadístico 2026 gives the same gap: 12:00 noon in Lima is 10:30 p.m. in Delhi.' },
        { kind: 'p', mt: true, html: 'In the summer many families pick a morning hour, while the day is still cool and before the beach or a council workshop, or a late afternoon slot. When you book the free class you pick the hour on your own clock, in Peru time, and the mentor sees it in India time.' }
      ]
    },
    {
      id: 'march',
      eyebrow: 'After the break',
      h2: 'What happens when school starts again in March?',
      lede: 'You decide. Many families keep going at the same two classes a week; some slow to one; a few pause and return in the July break. The course and the mentor stay the same.',
      body: [
        { kind: 'two',
          leftH3: 'Continuing alongside school',
          left: [
            'Peruvian secondary school has no computing subject: the national curriculum, the CNEB, treats digital skills as a transversal competency shared between other areas. A child who keeps coding through the school year therefore builds something school does not teach directly.',
            'If hours change when school starts, or when a school moves between morning and afternoon shifts, you simply move the class hour.'
          ],
          rightH3: 'Pausing without losing the summer',
          right: [
            'If the school year is too full, pause at the end of a month. Before you stop, the mentor gives your child one small project to keep alive, so the summer\'s work is not forgotten.',
            'Children who started in a region outside Lima follow exactly the same plan; our page on <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a> shows how families there fit classes around school.'
          ] },
        { kind: 'p', mt: true, html: 'For an overview of everything we teach in Peru, from primaria to university and adults, start at our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will I know the summer worked?',
    lede: 'We use five levels of our own. By March, children in their first summer have usually moved up one or two.',
    table: { caption: 'Five coding levels we use with families in Peru (ours)', head: ['Level', 'Usual age', 'Your child can'], rows: [
      ['1. Sequence', '6 to 8', 'put steps in order so a character reaches its goal'],
      ['2. Repeat and choose', '7 to 10', 'use loops and if blocks, and say in English what each one does'],
      ['3. Type it', '9 to 12', 'write a short Python program and predict its output before running it'],
      ['4. Data', '11 to 15', 'store data in lists and dates, and check a result against a source'],
      ['5. Own project', '13 to 17', 'plan, build and present a game, web page or small AI tool']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to show you one thing a week and explain it. If they can explain it, even mixing Spanish and English, they understood it.',
      'The jump from level 2 to level 3, from blocks to typing, is the hardest. It is normal for it to take a few weeks of the summer.'
    ] },
    right: { h3: 'For learners', ps: [
      'Say what you expect before you press run. Then check whether you were right.',
      'When the answer looks wrong, ask first whether the data or the program is wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses to start in the break',
    lede: 'All taught live in English by one mentor through the course, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Games and building', sub: 'Ages 7 to 12', courses: [
        { code: 'SHC / PLAY / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Obstacle courses, scores and shops in Roblox Studio with Luau, from 8.' },
        { code: 'SHC / PLAY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Automating a world children already know, blocks first, then code.' },
        { code: 'SHC / PLAY / 03', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'HTML and CSS to publish a first site of their own.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'SHC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From the first variable to files, classes and small apps.' },
        { code: 'SHC / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games, built and tested.' },
        { code: 'SHC / TEEN / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C# for a teenager who wants to ship a real game.' }
      ] },
      { num: 'III', h3: 'Thinking and maths', sub: 'Ages 8 to 17', courses: [
        { code: 'SHC / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and patterns that make code easier later.' },
        { code: 'SHC / THINK / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, for ages 10 to 15.' },
        { code: 'SHC / THINK / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns and when it gets things wrong, from 8.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How do live summer classes run?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Summer mornings', l: 'Popular in January and February, before the day gets hot.' },
      { time: 'Late afternoons', l: 'After the beach, a council workshop or a family outing.' },
      { time: 'Your hour', l: 'One-to-one classes on the days and at the time you pick.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person from the first summer class into the school year.' },
      { h3: 'Clear English', p: 'Short sentences, a shared screen and patience to say it again.' },
      { h3: 'Hands on the keyboard', p: 'Your child types and fixes the code; the mentor guides.' },
      { h3: 'A project per stage', p: 'Each stage ends with something to show at home.' },
      { h3: 'Notes for parents', p: 'A short update on what was practised and what is next.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners of a similar age, or one to one.' }
    ]
  },

  projectsH2: 'Where a first summer can lead',
  projectsLede: 'A first summer is the start. Here is work by some of our older students, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students reviewing us on Google, word for word.',

  fees: {
    h2: 'Fees for summer classes in Peru',
    lede: 'Our monthly fees show here in US dollars and are charged to a card. Your bank converts each payment into soles at its own exchange rate, so the amount on your statement may differ slightly from one month to the next.',
    free: ['A free first class with a mentor', 'A starting stage agreed for the summer', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor all summer', 'Two live classes a week', 'Monthly, stop at the end of any month'],
    one: ['Your child and a mentor alone', 'Projects chosen around your child', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Families in Peru ask',
    h2: 'Summer holiday coding classes for Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Our mentors in India speak clearly, repeat in simpler words and adapt their pace and accent to each child. Many families choose us for exactly that reason: a summer of coding is also a summer of spoken English practice.' },
      { q: 'When is the summer school holiday in Peru?', a: 'For 2026, RM 501-2025-MINEDU set the last teaching day as 18 December 2026, and the 2026 year began with pupils on 16 March 2026. The 2027 calendar had not been published when we checked on 8 November 2026, so the exact March 2027 restart is not known yet.' },
      { q: 'Is this a summer camp with fixed dates?', a: 'No. We do not run a separate summer camp for Peru. Your child starts our normal live course when the break begins, in a group or one to one, and can continue into the school year, slow down or stop at the end of any month.' },
      { q: 'What age can my child start?', a: 'From 6. Children of 6 to 8 start with Scratch blocks and stories; from about 9 they can begin typed Python; teenagers of 13 to 17 can start with Python, web or AI projects straight away. The free first class places each child.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 11:00 a.m. in Peru is 9:30 p.m. in India.' },
      { q: 'Does my child need to speak English already?', a: 'No. Understanding simple instructions is enough to begin. The first two or three weeks are for getting used to the mentor\'s accent, and a summer start gives that time without school pressure.' },
      { q: 'Can my child do a council summer workshop as well?', a: 'Yes. A live class takes about an hour twice a week at the hour you choose, so it fits easily beside a morning sport or arts workshop. We are not connected with any district council.' },
      { q: 'Do you teach robotics?', a: 'We teach coding, not hardware, and we never send a robot kit. Robots in school workshops are programmed with the same loops and conditions children learn with us, so the two fit together well.' },
      { q: 'Will the classes count for school?', a: 'No. We are not connected with MINEDU, any UGEL or any school, and we do not give Peruvian grades. When a child finishes a course we give our own certificate of completion.' },
      { q: 'How do we pay?', a: 'By card, in US dollars, monthly. Your bank converts the payment into soles at its rate. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More summer reading',
    lede: 'Other pages for families planning a summer of coding, all in English.',
    items: [
      { href: '/summer-coding-camp-kids', label: 'Summer coding for kids', p: 'Our general guide to a holiday start for younger children.' },
      { href: '/summer-coding-camp-teens', label: 'Summer coding for teens', p: 'What teenagers can realistically build over a break.' },
      { href: '/summer-math-program-online', label: 'Summer maths online', p: 'Live maths through the holidays, if numbers need attention too.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why we put reasoning ahead of tools and answers.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools each age is allowed to use.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class described from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class before the break',
    lede: 'In the free class your child meets a mentor, tries a short puzzle and writes or builds something small. The mentor notices how they reason and how much spoken English they follow, then suggests where to start in our summer plan and an hour that fits your family.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a live class, and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'Classes are live and online with mentors in India, in English only. WhatsApp is the quickest way to reach us, and you may write in Spanish.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Summer courses', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding for kids' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', label: 'Vibe coding for teens' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Planning the break', links: [
        { href: '/summer-coding-camp-kids', label: 'Summer coding for kids' },
        { href: '/summer-coding-camp-teens', label: 'Summer coding for teens' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count the posts, not the gaps'
  },

  personalityCss: `
.ag-root.ag-shc .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-shc .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-shc .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-shc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-shc .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: RM 501-2025-MINEDU (Norma Técnica para el Año Escolar 2026, Tabla 1, read by eye from the signed PDF), press note of 14 October 2026 on 2027 materials, CNEB (transversal digital competency); INEI Censos Nacionales 2025 (Lima Metropolitana, Cuadro N.° 3); INEI TIC en los Hogares II Trimestre 2026; Municipalidad de Santiago de Surco (6 January 2026), Municipalidad de La Molina (press note 380, 6 January 2026), Municipalidad de Miraflores (5 January 2026); EF EPI 2025 Peru page; tz database and INACAL. Read 8 and 9 November 2026. The holiday plan, levels and Python lesson are our own.',
    localProject: 'Does the 2026 Peruvian school calendar really give nine weeks per block? An original Python lesson on the four teaching blocks of RM 501-2025-MINEDU: Version 1 subtracts dates and prints "Block 1 60 days = 8.6 weeks" (fencepost plus dividing calendar days by seven); Version 2 counts Mondays and prints "Block 1 Mon 16 Mar to Fri 15 May -> 9 weeks" and "Teaching weeks in 2026: 36"; Version 3 counts weekdays between blocks and prints 5, 10 and 5, matching the management weeks. Lesson family: date arithmetic, fencepost errors, counting the unit the source counts.',
    requiredMentions: ['Block 1 60 days = 8.6 weeks', 'Teaching weeks in 2026: 36', 'Break after Block 2: 10 weekdays', '818,096 children of 6 to 11', 'DivertiSurco: Disfruta tu verano 2026', 'Molitalleres de Verano 2026', 'seven weeks in district parks from Tuesday 13 January 2026', 'Count the posts, not the gaps', '13.3 million units of school materials for the 2027 school year', '84.7% of households in Lima Metropolitana'],
    sources: [
      { claim: '2026 school year blocks and dates (Tabla 1), 36 teaching and 8 management weeks, DRE/UGEL may redistribute.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'MINEDU began dispatching 13.3 million units of materials for the 2027 school year on 14 October 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'Lima Metropolitana censused population aged 6 to 11 (818,096) and 12 to 17 (867,253), Censos Nacionales 2025, Cuadro N.° 3.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'DivertiSurco 2026: January and February workshops including science and robotics.', url: 'https://www.munisurco.gob.pe/surco-abre-talleres-educativos-culturales-y-deportivos-para-un-verano-2026-util-y-divertido/' },
      { claim: 'Molitalleres de Verano 2026 start Monday 12 January, including robotics and computing.', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1328590-este-viernes-cierran-las-inscripciones-para-los-molitalleres-de-verano-2026' },
      { claim: 'ECO KIDS: free, ages 6 to 12, seven weeks from Tuesday 13 January 2026.', url: 'https://www.miraflores.gob.pe/miraflores-lanza-eco-kids-vacaciones-utiles-ambientales-para-ninas-y-ninos-del-distrito/' },
      { claim: 'Lima Metropolitana 84.7% of households with internet; 36.4% of households with a computer; internet use 68.2% at 6 to 11 and 92.5% at 12 to 18 (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, 52 of 123, Lima 555 in the High band, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A summer camp length, start date or price for Peru: none defined by the owner; the page sells normal classes started in the break and labels the four-stage plan as ours.',
      'The 2027 school restart date: no 2027 norm found on gob.pe as of 8 November 2026; the page says so instead of guessing.',
      'Council 2027 summer programmes: not announced when checked; only 2026 programmes are described, each with its council source, and we say we are not connected.',
      'Council workshop prices: published by the councils but not repeated (no soles figures on our pages).',
      'Adding the 6 to 11 and 12 to 17 groups into one total: refused; the two published figures are printed separately.',
      'Spanish-language teaching, robot kits, Peruvian grades or any MINEDU, UGEL or council affiliation: none, and the page says so.'
    ]
  }
};
