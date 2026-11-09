// SHIP: market | Peru's July to August mid-year break (RM 501-2025) as a live coding start, with a two-week plan of ours | a running streak counter: reset on a miss, and the last run lost when the check only happens at a break
'use strict';
// Peru July holiday coding classes (ag- English seasonal door, Peru cluster row PE067, P3, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// What it sells: the normal live classes (group of fifteen to twenty, or one to one) started in the mid-year break, with a
// two-week holiday plan that is ours and labelled ours. No camp, camp length, start date or price is invented; fees render
// from the template only. The summer (January to March) break has its own live page (peru-summer-holiday-coding-classes-online),
// whose lesson family is date arithmetic; this page uses a different one (streaks) and does not count dates.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/peru-july-holiday-coding-classes/,
// fetched 9 November 2026 unless stated; quotes grepped in the raw text):
//  RM 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026 (facts-school src/rm501-2025, src/rm501-2025-pdf; OCR text, and
//    the signed page 7 of the norm checked by eye on 9 November 2026 from page11-checked-by-eye.png): Tabla 1 "Segundo bloque de
//    semanas lectivas 09 semanas Del 25 mayo al 24 de julio"; "Tercer bloque de semanas de gestión 02 semanas Del 27 julio a 7
//    de agosto"; "Tercer bloque de semanas lectivas 09 semanas Del 10 agosto al 9 de octubre"; "El año escolar está compuesto
//    por treinta y seis (36) semanas lectivas y ocho (08) semanas de gestión"; definitions 4.1.2 "Semanas de gestión: Período
//    destinado al trabajo colegiado o individual del personal de la institución" and 4.1.3 "Semanas lectivas: Período
//    destinado al desarrollo de las competencias de los estudiantes"; DRE/UGEL "tienen la potestad de definir una distribución
//    de semanas lectivas y de gestión distinta a la sugerida"; "la calendarización puede organizar el año escolar en bimestres,
//    trimestres u otra forma de organización"; EBA "del 13 de marzo al 26 de julio, mientras que el segundo periodo del 10 de
//    agosto al 20 de diciembre".
//  2027 calendar: gob.pe search for the exact title "Norma Técnica para el Año Escolar 2027" returned "total_count":0 on
//    9 November 2026 (gob-search-2027.html); control search for 2026 returned "total_count":26 (gob-search-2026-control.html).
//  gob.pe Feriados pasados 2026 (feriados-historicos.html/.txt): "Jueves 23 de julio Día de la Fuerza Aérea del Perú", "Lunes 27
//    de julio Día no laborable", "Martes 28 de julio hasta Miércoles 29 de julio Fiestas Patrias", "Jueves 6 de agosto Batalla
//    de Junín"; "los días no laborables pueden aplicarse al sector privado previo acuerdo con el empleador" (feriados.txt).
//  ONEM 2026 school stage (facts-school src/ugel06-onem-2026): "Miércoles 08 de julio".
//  CEPRE-UNI 2026-2 (facts-school src/cepre-uni-2026-2): "DOMINGO 02DE AGOSTO – EXAMEN FINAL PRESENCIAL".
//  UNI Admisión 2026-2 (src/uni-adm2026-2): "Lunes 10, miércoles 12 y viernes 14 de agosto de 2026".
//  INEI, TIC en los Hogares, II Trimestre 2026 (facts-market src/inei_tic_iit2026.txt): "Internet fue menor entre los niños de
//    6 a 11 años (68,2%)"; "el de 12 a 18 años con un 92,5%"; "el 36,4% de los hogares del país disponía de al menos una
//    computadora".
//  CNEB (facts-school src/cneb): no computing area in the plan of studies; competency 28 "Se desenvuelve en entornos virtuales
//    generados por las TIC" is transversal.
//  Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30.
// Our own calculations: none on dates (the break length is quoted as MINEDU's "02 semanas").
// Code (scratchpad pe/e6/jhc/v1.py, v2.py, python3 -I): v1 prints "Longest streak: 3 days"; v1+v2 prints "Longest streak: 4
// days" and "Days at goal: 9 of 12". The log of minutes is invented and labelled so.
// Lesson family: a running counter with a reset; checking the best only when a run breaks loses a run that lasts to the end.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  '# minutes of coding practice on each day of the break (an invented log)',
  'log = [30, 25, 0, 20, 40, 35, 0, 15, 30, 25, 45, 20]',
  'GOAL = 20',
  '',
  'longest = 0',
  'run = 0',
  'for minutes in log:',
  '    if minutes >= GOAL:',
  '        run += 1',
  '    else:',
  '        longest = max(longest, run)   # a streak just ended: record it',
  '        run = 0',
  'print("Longest streak:", longest, "days")'
].join('\n');

const V2 = [
  'longest = 0',
  'run = 0',
  'for minutes in log:',
  '    run = run + 1 if minutes >= GOAL else 0',
  '    longest = max(longest, run)       # check after every day, not only at a break',
  'print("Longest streak:", longest, "days")',
  'print("Days at goal:", sum(m >= GOAL for m in log), "of", len(log))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'July holiday coding classes' },
  slug: 'peru-july-holiday-coding-classes',
  code: 'jhc',
  accent: '#583400',
  accentRationale: 'Peru July holiday coding classes: a dark roasted brown #583400, the colour of a winter-afternoon cup of Peruvian coffee in July, deep enough for body text on every paper tone (8.94 on #FBF8F2)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'July holiday coding classes in Peru',
  title: 'Peru July Holiday Coding Classes: Live, Online, in English',
  description: 'Coding classes for Peru\'s July to August school break: live online, taught in English, for ages 6 to 17, with a two-week plan that carries on into term.',
  ogDescription: 'Peru\'s mid-year school break ran from 27 July to 7 August 2026 under MINEDU\'s calendar. How to use those two weeks to start live coding classes in English, a two-week plan by age, and a Python lesson on keeping a practice streak.',
  twitterDescription: 'Start live coding classes in English during Peru\'s July to August school break, at any hour, and keep going in term.',
  pageName: 'Peru July Holiday Coding Classes',
  webPageDescription: 'A guide for families in Peru to the mid-year school break, built from MINEDU\'s RM 501-2025 school calendar, gob.pe public holidays, INEI household data and university and olympiad calendars, with a two-week coding plan of our own and an original Python lesson on practice streaks.',
  courseDescription: 'Live online coding classes taught in English for children and teenagers in Peru, started during the July to August school break and continued in term: Scratch, Python, Roblox, AI and Java, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'July holiday coding',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#break', label: 'When the break is' },
    { href: '#plan', label: 'Two-week plan' },
    { href: '#streak', label: 'Streak lesson' },
    { href: '#around', label: 'Around the break' },
    { href: '#times', label: 'Lima times' }
  ],
  eyebrow: 'Peru &middot; Mid-year school break &middot; Ages 6 to 17',
  h1: 'Coding classes for Peru\'s July holidays',
  lede: 'Peru\'s school year pauses for two weeks in the middle, around Fiestas Patrias. In 2026 MINEDU set that pause from 27 July to 7 August. It is short, it falls in the middle of winter in Lima, and it is a good moment to start something that continues after school restarts. Here is when the break falls, how families can use it, a two-week coding plan of ours, and a Python lesson about the habit that matters most: practising a little every day.',
  secondaryCta: { href: '#plan', label: 'See the two-week plan' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like our child to start live coding classes in English during the July school holidays. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every class in English',
  spec: [
    ['Break in 2026', '27 July to 7 August'],
    ['Ages', '6 to 17, plus adults'],
    ['Taught in', 'English, live online'],
    ['Format', 'Group of fifteen to twenty, or one to one'],
    ['Peru hours', 'Any hour you choose'],
    ['After the break', 'Classes simply continue']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders offers live online coding classes taught in English that children and teenagers in Peru can start during the mid-year school break, which ran from 27 July to 7 August 2026 under MINEDU\'s calendar. Learners aged 6 to 17 begin with Scratch, Python, Roblox, AI or Java, with mentors based in India, in a group of fifteen to twenty or one to one, at an hour the family chooses. There is no separate holiday camp on this page: the break is simply the start, and the same classes carry on in term.',

  picks: {
    eyebrow: 'Where to start in the break',
    h2: 'Three courses that start well in two weeks',
    lede: 'Two weeks is enough to finish a first project and know whether a course fits. These three suit the ages most families ask about in July.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'JHC / 01', title: 'Coding for Kids', note: 'For 6 to 12 year olds, grouped by age. In two holiday weeks a child can build and share a small Scratch game, then keep going through the long course in term, from stories and games to simple apps and a first look at AI.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'JHC / 02', title: 'Roblox Game Coding', note: 'For 8 to 14 year olds who already play Roblox. They script their own obstacle course in Luau, the language Roblox games use, and learn that every game they play was built from instructions like the ones they are writing.' },
      { course: 'python-complete-masterclass-teens', code: 'JHC / 03', title: 'Python for Teens', note: 'For 13 to 17 year olds starting from zero. Real typed Python from the first class; by the end of the break a teenager can write a small program that reads data and answers a question about it, like the streak counter below.' }
    ]
  },

  sections: [
    {
      id: 'break',
      eyebrow: 'When the break is',
      h2: 'When are the July school holidays in Peru?',
      lede: 'In 2026, from Monday 27 July to Friday 7 August, the third block of what MINEDU calls "management weeks". Teaching stopped on Friday 24 July and restarted on Monday 10 August.',
      body: [
        { kind: 'table', numCols: [1], caption: 'The middle of the 2026 school year, from MINEDU\'s Tabla 1', head: ['Block', 'Weeks', '2026 dates'], rows: [
          ['Second block of teaching weeks', '9', '25 May to 24 July'],
          ['Third block of management weeks (the mid-year break)', '2', '27 July to 7 August'],
          ['Third block of teaching weeks', '9', '10 August to 9 October']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Resolución Ministerial 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, Tabla 1 "Distribución y fechas para la calendarización 2026". The scanned, signed page was read by eye on 9 November 2026. The full 2026 year has 36 teaching weeks and 8 management weeks.' },
        { kind: 'two', mt: true,
          leftH3: 'What "management weeks" means',
          left: [
            'MINEDU\'s norm defines management weeks as time for the school\'s staff to plan, follow up and evaluate, working together or alone. Teaching weeks are the ones set aside for developing students\' competencies. So for pupils, the two management weeks in July and August are the mid-year holidays.',
            'The same table places one-week management breaks in May and October, and two-week blocks before teaching starts in March and after it ends in December. July\'s is the only two-week pause that falls between two teaching blocks.'
          ],
          rightH3: 'Why your school\'s dates may differ',
          right: [
            'The norm lets regional education offices (DRE) and local ones (UGEL) set a different distribution of teaching and management weeks for climate or social reasons, and schools may organise the year in two-month or three-month terms. Private schools often publish their own calendar.',
            'Adult education follows its own dates: the norm splits Educación Básica Alternativa into a first period from 13 March to 26 July and a second from 10 August to 20 December. Always check your own school\'s calendar first.'
          ] },
        { kind: 'p', mt: true, html: '<strong>What about July 2027?</strong> MINEDU had not published the 2027 school-year norm when we checked on 9 November 2026: a search of gob.pe for its exact title found nothing, against 26 results for the 2026 norm. We will not guess the 2027 dates. When the norm appears, its Tabla 1 will show them, as it did for 2026.' }
      ]
    },
    {
      id: 'why',
      tint: 'tint',
      eyebrow: 'Why start in July',
      h2: 'Why start coding in the July break rather than wait for summer?',
      lede: 'Because two quiet weeks are long enough to begin and short enough to keep going. A summer start has its own advantages, which our page on Peru\'s January to March break covers; July has different ones.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A start without pressure', p: 'In the break there is no homework competing for the evening. A child can take the first, slowest steps of coding, where most frustration lives, without also juggling school deadlines.' },
          { h3: 'Momentum into term', p: 'Classes do not end on 7 August. A learner who has finished a first project in the break returns to school with a habit already formed, and the weekly classes simply carry on in the second half of the year.' },
          { h3: 'Nothing like it at school', p: 'The national curriculum has no computing subject; digital skills sit across the other subjects without a home of their own. A holiday start gives a child something school does not, rather than repeating it.' }
        ] },
        { kind: 'p', mt: true, html: 'The long summer break from January to March suits a bigger first push. If that is what your family is planning, our English page on <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday coding classes in Peru</a> works through it, and Spanish-speaking parents may prefer <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación</a>. July is the quicker option: start now, keep going, and arrive at summer already able to code.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Two-week plan',
      h2: 'What can a child do in a two-week coding start? Our plan by age',
      lede: 'This plan is ours. It is not a camp, and it sets no class hours. It shows what a learner can realistically finish in the first two weeks of normal classes, two live classes a week, plus short practice at home on the other days.',
      body: [
        { kind: 'table', numCols: [], caption: 'A two-week holiday start, by age (our plan)', head: ['Age', 'Course', 'Week 1', 'Week 2', 'What they show the family'], rows: [
          ['6 to 8', 'Coding for Kids (Scratch)', 'Move and turn a character; make it talk', 'Add a repeat loop and a sound', 'An animated card for a family member'],
          ['9 to 12', 'Coding for Kids or Python and AI for kids', 'Events, loops and a score', 'A simple game with a winning rule', 'A game they can explain step by step'],
          ['8 to 14', 'Roblox Game Coding', 'Parts, scripts and a first Luau script', 'An obstacle course with a checkpoint', 'A level a sibling can play'],
          ['13 to 17', 'Python for Teens', 'Variables, input and decisions', 'Lists and loops: the streak counter', 'A program that answers a question about data'],
          ['16 and up', 'Python, Java or AI courses', 'Setting up and a first real program', 'A small project chosen with the mentor', 'Code on their own computer, explained aloud']
        ] },
        { kind: 'source', html: 'Our plan. It uses only normal live classes (two a week in a group of fifteen to twenty, or one-to-one at the family\'s hours), started in the break and continued in term. It is not a holiday camp, it has no separate fee, and the weeks are a suggestion, not a promise of what every learner finishes.' },
        { kind: 'p', mt: true, html: 'On the non-class days we suggest twenty minutes of practice at home, which is where the lesson below comes from. Twenty minutes a day for two weeks is more useful than a three-hour session once, because coding is learned the way an instrument is, in small regular doses with mistakes fixed the next day.' },
        { kind: 'p', html: 'Children in our classes do not use adult AI chatbot accounts. Claude is restricted to adults, and ChatGPT asks for a parent\'s consent below 18. Holiday projects are built by the learner, with the mentor explaining, so that what the child shows the family at the end is genuinely their own.' }
      ]
    },
    {
      id: 'streak',
      tint: 'tint',
      eyebrow: 'A Python lesson',
      h2: 'How do you count a practice streak? A Python lesson with a hidden bug',
      lede: 'A streak is the number of days in a row a goal is met. Teenagers love counting them, and writing a streak counter teaches one of the classic loop bugs: a result that only gets recorded when something ends, so the last run is never recorded at all.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'We give the learner a list of twelve numbers: invented minutes of coding practice on each calendar day of a twelve-day break, Monday to the Friday of the following week. The goal is 20 minutes. What is the longest run of days in a row at or above the goal?',
            'Looking at the list by hand, the answer is 4: the last four days are 30, 25, 45 and 20. Most first programs look like Version 1, and Version 1 says 3.'
          ],
          rightH3: 'Why Version 1 is wrong',
          right: [
            'Version 1 only updates <code>longest</code> when a run breaks, inside the <code>else</code>. The final run of four never breaks, because the list ends first, so it is never compared with <code>longest</code>. The program reports the earlier run of three.',
            'The fix is to compare after every day, which is what Version 2 does in one line. It is shorter as well as correct, which is often the sign of a better idea rather than a patch.'
          ] },
        { kind: 'code', label: 'Version 1: records a streak only when it breaks', lang: 'Python', code: V1, note: 'It prints <code>Longest streak: 3 days</code>, which is wrong for this log.' },
        { kind: 'code', label: 'Version 2: checks after every day', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>Longest streak: 4 days</code> and <code>Days at goal: 9 of 12</code>.' },
        { kind: 'p', mt: true, html: 'The habit we want to teach is to <strong>test the case where the answer sits at the very end</strong>. The bug hides in any loop that saves its result only at a boundary: a run of wins, a sequence of rising temperatures, a stretch of days online. Learners then write their own test: a log where every day meets the goal. Version 1 prints 0 for it, which is plainly absurd, and nobody forgets the lesson after that.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Colour a square on a paper calendar for every day of the break with some practice. Count the longest line of coloured squares. Did you count the line that touches the edge?',
          '<strong>Ages 9 to 12, Scratch.</strong> Make a sprite that counts how many times in a row you click within two seconds, and shows the longest run. Check what happens if you stop on a good run.',
          '<strong>Ages 13 to 17, Python.</strong> Predict what Version 1 prints for <code>[25, 25, 25]</code>, then run it. Rewrite it so the bug cannot happen.',
          '<strong>16 and up.</strong> Change Version 2 so it also prints which day the longest streak started. Decide what to print if two streaks tie, and write it down as a comment.'
        ] }
      ]
    },
    {
      id: 'around',
      eyebrow: 'Around the break',
      h2: 'What else happens in Peru around the July break?',
      lede: 'Quite a lot, which is why we keep classes flexible rather than fixed. National holidays, a maths olympiad and a university entrance exam all fell close to the 2026 break.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dates around the 2026 mid-year break', head: ['Date in 2026', 'What', 'Source'], rows: [
          ['Wednesday 8 July', 'ONEM school stage, national maths olympiad', 'MINEDU ONEM 2026 bases'],
          ['Thursday 23 July', 'Día de la Fuerza Aérea del Perú, national holiday', 'gob.pe, feriados 2026'],
          ['Friday 24 July', 'Last teaching day before the break', 'RM 501-2025-MINEDU'],
          ['Monday 27 July', 'Non-working day for the public sector; first day of the break', 'gob.pe; RM 501-2025-MINEDU'],
          ['Tuesday 28 and Wednesday 29 July', 'Fiestas Patrias, national holidays', 'gob.pe, feriados 2026'],
          ['Sunday 2 August', 'CEPRE-UNI final exam, in person', 'CEPRE-UNI 2026-2 schedule'],
          ['Thursday 6 August', 'Batalla de Junín, national holiday', 'gob.pe, feriados 2026'],
          ['Monday 10 August', 'Teaching restarts; UNI ordinary admission exam also starts (10, 12 and 14 August)', 'RM 501-2025-MINEDU; UNI Admisión 2026-2']
        ] },
        { kind: 'source', html: 'Sources read on 8 and 9 November 2026: gob.pe, Feriados pasados 2026; MINEDU RM 501-2025; ONEM 2026 bases via UGEL 06; CEPRE-UNI 2026-2 schedule; UNI Admisión 2026-2. gob.pe notes that non-working days can apply to the private sector by agreement with the employer.' },
        { kind: 'p', mt: true, html: 'For a family with a teenager in 5° de secundaria, the break may be revision time rather than a new start, because university exams follow it closely. Our English explainer on <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> shows every course by age, so you can choose something that fits around exams. Holidays with travel are fine too: classes are online, so a learner with a laptop can join from wherever the family spends Fiestas Patrias, as long as the connection holds.' }
      ]
    },
    {
      id: 'home',
      tint: 'tint',
      eyebrow: 'At home',
      h2: 'What does a child need at home for online classes in the break?',
      lede: 'A computer, a reliable connection and a quiet corner. INEI\'s figures for 2026 suggest the computer, not the internet, is the item more families lack.',
      body: [
        { kind: 'two',
          leftH3: 'What INEI measured',
          left: [
            'INEI\'s household survey for the second quarter of 2026 found that 36.4% of Peruvian households had at least one computer. Internet use was lower among children aged 6 to 11, at 68.2%, than among young people aged 12 to 18, at 92.5%.',
            'In other words, many teenagers are already online every day; younger children are less often, and fewer homes have a computer than have a phone.'
          ],
          rightH3: 'What that means for coding',
          right: [
            'Coding needs a keyboard and a screen big enough to see code and a game side by side. A phone can join a video call, but it is not enough to type programs. A shared family laptop is fine if the child can have it for the class hour.',
            'For the youngest learners, a headset with a microphone helps them hear the mentor\'s English clearly, especially in a lively holiday house. Check the setup in the free first class, before the break begins.'
          ] },
        { kind: 'p', mt: true, html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026, read on 8 November 2026. INEI writes decimals with a comma (36,4%); we use a point.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lima times',
      h2: 'What time would holiday classes be in Peru?',
      lede: 'When suits your family. Peru keeps UTC minus 5 in every month with no clock changes, and India keeps UTC plus 5:30, so India is ten and a half hours ahead whether it is July or January. These are clock conversions, not class times.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time during the July break (and every other day)', head: ['Peru time', 'India time', 'A holiday use'], rows: [
          ['08:30', '19:00', 'A late breakfast start, then the day is free'],
          ['10:00', '20:30', 'Mid-morning, the easiest hour on a holiday'],
          ['11:30', '22:00', 'Before lunch, for an older learner'],
          ['16:30', '03:00, next day', 'After an outing, by arrangement'],
          ['19:00', '05:30, next day', 'An evening one-to-one']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, America/Lima (UTC minus 5; Peru\'s last summer-time rule dates from 1994) and Asia/Kolkata (UTC plus 5:30), with INACAL\'s Peru clock matching on 8 November 2026. We worked out the conversions.' },
        { kind: 'p', mt: true, html: 'You pick the hour on your own clock when you book; on the mentor\'s calendar it appears in India time. Since neither country changes its clocks, the hour you choose in the July break can stay the same when term restarts in August.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner can do after the break, and after a term',
    lede: 'Our milestones, not a school standard. They help us place a learner and give parents a straightforward record of progress.',
    table: { numCols: [], caption: 'Coding milestones from a July start (ours)', head: ['Milestone', 'Usually by', 'The learner can', 'Example'], rows: [
      ['1. First project', 'End of the break', 'Finish and show one small program', 'An animated card or first game'],
      ['2. Daily habit', 'Two weeks into term', 'Practise briefly on most days without reminders', 'A practice log they keep themselves'],
      ['3. Loops and decisions', 'End of August', 'Use repetition and if-else with confidence', 'A quiz that keeps score'],
      ['4. Data', 'September', 'Store values in a list and process them', 'The streak counter'],
      ['5. Testing', 'October', 'Write a test that would catch their own bug', 'The all-days-at-goal test'],
      ['6. Own idea', 'End of the school year', 'Plan and build a project of their choice', 'Ready for a bigger summer project']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 2 matters more than it looks: a learner who practises a little most days goes further than one with long, rare sessions.',
      'Our notes after classes describe what was built and what is next.'
    ] },
    right: { h3: 'For learners', ps: [
      'Test the case where the answer is at the end.',
      'Twenty minutes today beats two hours next week.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses to start in the break',
    lede: 'All live, all in English, each with a mentor who stays with the learner, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 6 to 12', courses: [
        { code: 'JHC / YOUNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code, turtle drawings and small AI projects.' },
        { code: 'JHC / YOUNG / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths turned into programs, ages 10 to 15.' },
        { code: 'JHC / YOUNG / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for 5 to 10 year olds, a calm holiday option.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'JHC / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python to working models, with school maths.' },
        { code: 'JHC / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A second language for teens who enjoyed the holiday start.' },
        { code: 'JHC / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Puzzles turned into algorithms, for the competitive teenager.' }
      ] },
      { num: 'III', h3: 'School subjects in English', sub: 'IGCSE and IB years', courses: [
        { code: 'JHC / SCHOOL / 01', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Cambridge 0478 for students already taking it at school.' },
        { code: 'JHC / SCHOOL / 02', slug: 'ib-diploma-computer-science-course', title: 'IB DP Computer Science', blurb: 'SL and HL, with the internal assessment.' },
        { code: 'JHC / SCHOOL / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certification for older teenagers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit the July break and beyond',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Holiday mornings', l: 'Lima mornings are evenings in India, an easy class hour.' },
      { time: 'Later in the day', l: 'Afternoon and evening hours work too; tell us the time.' },
      { time: 'One to one', l: 'A plan that bends around holiday travel and family days.' }
    ],
    cells: [
      { h3: 'Same mentor in term', p: 'The teacher from the break is the teacher in August.' },
      { h3: 'Real projects', p: 'Something finished and shown by the end of week two.' },
      { h3: 'Short home practice', p: 'Twenty minutes on the days between classes.' },
      { h3: 'Age groups', p: 'Six year olds and teenagers never share a class.' },
      { h3: 'Clear English', p: 'Slow, simple instructions, shown on screen as well as said.' },
      { h3: 'Notes home', p: 'What was built, what was hard, what comes next.' }
    ]
  },

  projectsH2: 'Where a holiday start can lead',
  projectsLede: 'Learners who keep going for a few years build serious things. Here are some projects by older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'From Google: parents and students, quoted exactly.',

  fees: {
    h2: 'Fees for classes started in the July break',
    lede: 'There is no separate holiday price on this page: classes started in the break cost the same as at any other time. Fees are in US dollars, charged by card, and your bank converts them into soles at its rate on the day of each charge.',
    free: ['A free first class, before or during the break', 'A small first program, made together', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'One mentor from the break into term', 'Two live classes a week', 'Monthly; stop any month'],
    one: ['One learner, one mentor', 'Hours that work around holiday plans', 'Projects chosen with the learner']
  },

  faq: {
    eyebrow: 'Families in Peru ask',
    h2: 'July holiday coding classes: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors speak slowly and clearly, adapt to each child\'s pace and accent, and put each step on screen as they say it, which lets a child with growing English keep up. The code itself, Scratch or Python, looks identical in any household.' },
      { q: 'When are the July school holidays in Peru?', a: 'In 2026 MINEDU set the mid-year break, its third block of management weeks, from 27 July to 7 August, with teaching restarting on 10 August. Regional offices and private schools may set different dates, so check your school\'s own calendar. The 2027 dates were not yet published in November 2026.' },
      { q: 'Is this a holiday camp?', a: 'No. We sell our normal live classes, in a group or one to one, and the break is simply a good time to start them. The two-week plan on this page is our suggestion of what a learner can finish, and classes continue into term without a gap.' },
      { q: 'What ages do you teach?', a: 'From 6 to 17 on this page, and adults on other courses. Children of 6 to 12 usually start with Scratch, Roblox from about 8, typed Python from about 9 or 10, and teenagers can start straight with Python or Java.' },
      { q: 'When would classes be in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30, so 08:30 in Lima is 19:00 in India.' },
      { q: 'Can my child join if we travel during Fiestas Patrias?', a: 'Yes, if there is a laptop and a stable connection wherever you are. Classes are online, and one-to-one learners can move a class around a family day. In a group, a missed class is caught up with the mentor\'s notes and practice.' },
      { q: 'Will two weeks be enough to learn to code?', a: 'Two weeks is enough to start well: to finish a first project and build a daily habit. Learning to code takes months, which is why the classes continue in term. We would rather say that plainly than promise a skill in a fortnight.' },
      { q: 'Is coding part of the school timetable in Peru?', a: 'No. MINEDU\'s national curriculum, the CNEB, lists no computing or programming area; digital skills appear only as a cross-curricular competency. Starting in the break gives a child programming that the school week does not.' },
      { q: 'Are you connected with MINEDU or my child\'s school?', a: 'No. We run independently, online, with our mentors in India, and have no link to MINEDU, a UGEL or any Peruvian school. Learners who complete a course receive our own certificate of completion.' },
      { q: 'How are fees paid?', a: 'By card, in US dollars, the same as at any other time of year. Each charge reaches your statement in soles at your bank\'s rate, so it can differ a little month to month. Booking the free first class asks for no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for families in Peru planning around school breaks.',
    items: [
      { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer holiday classes in Peru', p: 'The January to March break, in English.' },
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales (Spanish)', p: 'Keeping English alive over the summer, by coding.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Coding for kids in English (Spanish)', p: 'Our main Spanish page for parents in Peru.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'For bilingual and IB school families.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class for the July break',
    lede: 'In the free class your child makes a small program with a mentor, while the mentor notices how they think and how much spoken English they follow. Afterwards you get a suggested course, a batch or one-to-one option, and an hour that works through the break and into term.',
    readFirst: 'If you want detail before booking, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a class from the inside, and the <a class="ag-inline-link" href="/courses">course catalogue</a> has every syllabus.',
    note: 'Classes are live on video, with mentors in India, and only in English. On WhatsApp, an English message gets the quickest reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Starting to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru overview' },
        { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer holidays' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Check the run that ends on the last day'
  },

  personalityCss: `
.ag-root.ag-jhc .ag-hero h1 { max-width: 16ch; letter-spacing: -0.01em; }
.ag-root.ag-jhc .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-jhc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-jhc .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-jhc .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU RM 501-2025-MINEDU (Norma Técnica para el Año Escolar 2026, Tabla 1 and definitions); gob.pe search (2027 norm absent) and Feriados pasados 2026; MINEDU ONEM 2026 bases via UGEL 06; CEPRE-UNI 2026-2 schedule; UNI Admisión 2026-2; INEI TIC en los Hogares II Trimestre 2026; CNEB; IANA tz database and INACAL. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson on a practice streak over the twelve calendar days of the 2026 mid-year break: Version 1 records a run only when it breaks and prints "Longest streak: 3 days"; Version 2 checks after every day and prints "Longest streak: 4 days" and "Days at goal: 9 of 12". Plus a two-week plan by age (ours) and age-graded follow-ups. Lesson family: running counter with reset; the last run lost when the check happens only at a break.',
    requiredMentions: ['Longest streak: 3 days', 'Longest streak: 4 days', 'Days at goal: 9 of 12', 'test the case where the answer sits at the very end', 'Third block of management weeks (the mid-year break)', 'Batalla de Junín, national holiday', 'CEPRE-UNI final exam, in person', 'Check the run that ends on the last day', 'Twenty minutes today beats two hours next week.'],
    sources: [
      { claim: '2026 calendar: teaching to 24 July, management weeks 27 July to 7 August (2 weeks), teaching from 10 August; 36 teaching and 8 management weeks; definitions; DRE/UGEL may vary; bimestres or trimestres; EBA periods.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'No gob.pe result for the exact title of the 2027 school-year norm on 9 November 2026 (2026 control: 26 results).', url: 'https://www.gob.pe/busquedas?term=%22Norma+T%C3%A9cnica+para+el+A%C3%B1o+Escolar+2027%22' },
      { claim: '2026 national holidays and non-working days: 23 July, 27 July (non-working), 28 and 29 July, 6 August.', url: 'https://www.gob.pe/feriados/historicos' },
      { claim: 'ONEM 2026 school stage on 8 July 2026.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'CEPRE-UNI 2026-2 final exam Sunday 2 August 2026.', url: 'https://www.cepre.uni.edu.pe/assets/CRONOGRAMADEACTIVIDADESACAD%C3%89MICAS2026-2.pdf' },
      { claim: 'UNI ordinary admission exam 10, 12 and 14 August 2026.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'Internet use 68.2% (6 to 11) and 92.5% (12 to 18); 36.4% of households with a computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'July 2027 break dates: the 2027 norm is not published; not guessed.',
      'A holiday camp, camp length or holiday price: the owner has not defined one; the page sells normal classes and says so.',
      'Weather or temperature figures for Lima in July: no primary source fetched; "winter" used only as the season.',
      'That every school, region or private school follows the MINEDU break dates: the norm lets DRE and UGEL vary them; the page says so.',
      'Any connection with MINEDU, a UGEL, UNI or a school: none, and the page says so.'
    ]
  }
};
