// SHIP: market (en subject door) | online maths classes in Peru: connection, device, live format, school year | percentage points versus per cent, on INEI's household internet figures
'use strict';
// Online maths classes, Peru (ag- English subject door, Peru cluster row PE030, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no typed figure, no soles.
// Search: "clases de matemáticas online" (rows.tsv seed), English "online maths classes". Spanish sibling (live):
// profesor-particular-de-matematicas-online-peru (spine: online vs home visits, CNEB standards, successive percentages).
// This page's spine: can a family in Peru actually do live online maths (INEI connection and computer figures by area),
// what "live" means against recorded video, how classes sit inside the 2026 school year, the set-up, the clock.
// Sources (raw copies: INEI in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-and-coding-for-professionals-peru/
// inei_tic_iit2026.txt; MINEDU files in facts-school/src/; read 8 to 9 November 2026; quotes grepped by pe/e5/verify.py):
//  - INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026
//    https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf: "el 64,5% de los hogares del país contaba
//    con servicio de Internet"; "en Lima Metropolitana, el 84,7% de los hogares disponía del servicio; en el resto urbano, el
//    66,2%; mientras que, en el área rural solo el 27,1% tenía acceso"; "el acceso a Internet a nivel nacional se incrementó
//    en 3,8 puntos porcentuales"; "Lima Metropolitana, con un aumento de 4,3 puntos porcentuales, seguido por el resto urbano
//    con 3,5 puntos porcentuales y el área rural con 3,4 puntos porcentuales"; "el 36,4% de los hogares del país disponía de
//    al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9% en
//    el área rural"; "el 74,3% cuenta con una sola unidad"; "1/ Lima Metropolitana incluye la Provincia Constitucional del
//    Callao." 2025 bases (chart series 80,4 / 62,7 / 23,7) equal the 2026 figures minus INEI's stated increases.
//  - MINEDU, 3 September 2026 (n-satelital): "pondrá en marcha un plan para conectar 55 000 escuelas públicas a internet satelital".
//  - RM 501-2025-MINEDU (OCR, table checked by eye on rm501-2025-page11.png): 36 teaching weeks; blocks "Del 16 marzo al 15 de
//    mayo", "Del 25 mayo al 24 de julio", "Del 10 agosto al 9 de octubre", "Del 19 octubre a 18 de diciembre"; breaks 18 to
//    22 May, 27 July to 7 August, 12 to 16 October; "tienen la potestad de definir una distribución de semanas lectivas".
//  - CNEB: secundaria JER "Matemática 4 4 4 4 4"; JEC "Matemática 6 6 6 6 6"; "horas pedagógicas (45 minutos)".
//  - EF EPI 2025 Peru (ef_peru.raw): Peru 519 moderate; Lima 555 high; Speaking 480.
//  - Time: Peru UTC-5 all year (tzdata America/Lima; last Rule Peru 1994); India UTC+5:30; India 10 h 30 min ahead.
// Our calculations: relative change = points / 2025 figure: Lima 4.3 / 80.4 = 5.3%; other urban 3.5 / 62.7 = 5.6%;
// rural 3.4 / 23.7 = 14.3%; national 3.8 / 60.7 = 6.3%.
// Code (scratchpad pe/e5/mam_v1.py, mam_v2.py, python3 -I): v1 prints "Lima Metropolitana grew by 4.3 %", "Other urban areas
// grew by 3.5 %", "Rural areas grew by 3.4 %"; v2 prints the header line, "Lima Metropolitana | 4.3 points | 5.3%",
// "Other urban areas | 3.5 points | 5.6%", "Rural areas | 3.4 points | 14.3%", "Most points: Lima Metropolitana",
// "Fastest growth: Rural areas".
// Lesson family: percentage points against per cent; the area that gained most points grew slowest in relative terms.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  '# Households with internet, % (INEI, II quarter 2025 and 2026)',
  'areas = {',
  '    "Lima Metropolitana": (80.4, 84.7),',
  '    "Other urban areas": (62.7, 66.2),',
  '    "Rural areas": (23.7, 27.1),',
  '}',
  '',
  'for name, (before, after) in areas.items():',
  '    print(name, "grew by", round(after - before, 1), "%")'
].join('\n');

const V2 = [
  'areas = {',
  '    "Lima Metropolitana": (80.4, 84.7),',
  '    "Other urban areas": (62.7, 66.2),',
  '    "Rural areas": (23.7, 27.1),',
  '}',
  '',
  'print("area | points | per cent of the old figure")',
  'for name, (before, after) in areas.items():',
  '    points = after - before',
  '    relative = 100 * points / before',
  '    print(f"{name} | {points:.1f} points | {relative:.1f}%")',
  '',
  'biggest_points = max(areas, key=lambda n: areas[n][1] - areas[n][0])',
  'biggest_relative = max(areas, key=lambda n: (areas[n][1] - areas[n][0]) / areas[n][0])',
  'print("Most points:", biggest_points)',
  'print("Fastest growth:", biggest_relative)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Online maths classes' },
  slug: 'online-maths-classes-peru',
  code: 'mam',
  accent: '#105E62',
  accentRationale: 'Online maths classes, Peru: a deep teal #105E62, the colour of the Pacific off the Costa Verde cliffs in Lima on a winter morning; it clears 4.5:1 on the paper #FBF8F2 and on both darker papers (checked by the build).',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online maths classes in Peru',
  title: 'Online Maths Classes in Peru: Live, in English, Any Hour',
  description: 'Online maths classes for Peru, taught live in English: what you need at home, how lessons fit the school year, and a real lesson built on INEI data.',
  ogDescription: 'Live online maths classes in English for learners in Peru: INEI figures on home internet and computers, what live means compared with recorded video, how classes fit the 2026 school year, and a Python lesson on percentage points.',
  twitterDescription: 'Live online maths classes in English for Peru: primaria to university, a group or one to one, at any hour.',
  pageName: 'Online Maths Classes in Peru',
  webPageDescription: 'A practical guide to live online maths classes for learners in Peru, built from INEI household technology statistics for the second quarter of 2026, the MINEDU 2026 school-year norm and national curriculum, EF EPI 2025 and the tz database, with an original lesson on percentage points and per cent.',
  courseDescription: 'Live online maths classes taught in English for learners in Peru, from primaria and secundaria to IGCSE, IB and university statistics, in a group of fifteen to twenty or one to one, at any hour in Peru time.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Online maths classes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#connection', label: 'Connection' },
    { href: '#live', label: 'Live or recorded' },
    { href: '#lesson', label: 'Points lesson' },
    { href: '#year', label: 'School year' },
    { href: '#hours', label: 'Peru hours' }
  ],
  eyebrow: 'Peru &middot; Online maths, taught live in English &middot; Ages 6 to adult',
  h1: 'Online maths classes for learners in Peru',
  lede: 'An online maths class can mean almost anything, from a playlist of recorded videos to a teacher who watches a child write every line. Ours are the second kind: live, in English, with a teacher who sees the working as it happens. Before you book anything, though, the practical questions come first. Will the connection hold? Which device? When in the school year? INEI and MINEDU publish the figures that answer them, and the page uses those figures for a real maths lesson too.',
  secondaryCta: { href: '#lesson', label: 'Try the percentage lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like online maths classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every maths class live, online and in English',
  spec: [
    ['Ages', '6 to adult'],
    ['Taught', 'Live on video, in English'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Needs', 'A connection and a screen with a keyboard'],
    ['Peru hours', 'Chosen by you, any day'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders teaches online maths classes for learners in Peru that are live, not recorded: a teacher in India and the learner meet on video, share one whiteboard and work through problems together, entirely in English. Classes cover primaria and secundaria maths, IGCSE and IB, and university statistics, in a group of fifteen to twenty or one to one, at whatever hour you pick in Peru time. You need a steady connection and a laptop or tablet with a keyboard; the first class is free.',

  picks: {
    eyebrow: 'Three common starting points',
    h2: 'Online maths courses families in Peru start with',
    lede: 'One for primaria, one for the algebra years of secundaria, and one for older students and adults who need numbers for university or work.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'MAM / 01', title: 'Elementary Maths', note: 'For the primaria years, with each child placed by school grade after a short check. Counting, place value, fractions and early geometry, taught on a shared board where the teacher sees every answer as it is written.' },
      { course: 'algebra-foundations-masterclass', code: 'MAM / 02', title: 'Algebra Foundations', note: 'A year-long course for secundaria pupils who meet letters in maths and lose their footing. Each step of an equation is written by the learner and checked live, so gaps show up in the lesson rather than in a test.' },
      { course: 'statistics-probability-maths-course', code: 'MAM / 03', title: 'Statistics and Probability', note: 'For university students and adults: data, averages, spread, probability and hypothesis tests over six months. The lesson on this page, about percentage points, is typical of its first weeks.' }
    ]
  },

  sections: [
    {
      id: 'connection',
      eyebrow: 'Connection',
      h2: 'Can a family in Peru follow live online maths classes at home?',
      lede: 'In Lima, almost certainly; elsewhere, very often, but it is worth checking the device before the connection. INEI\'s figures for the second quarter of 2026 show why.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Homes with internet and with a computer in Peru, second quarter of 2026 (INEI)', head: ['Area', 'Households with internet', 'Rise since the same quarter of 2025', 'Households with at least one computer'], rows: [
          ['Peru, all households', '64.5%', '3.8 points', '36.4%'],
          ['Lima Metropolitana (with Callao)', '84.7%', '4.3 points', '53.3%'],
          ['Other urban areas', '66.2%', '3.5 points', '41.3%'],
          ['Rural areas', '27.1%', '3.4 points', '8.9%']
        ] },
        { kind: 'source', html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, second quarter of 2026 (ENAHO), read on 9 November 2026. INEI counts the Constitutional Province of Callao inside Lima Metropolitana and marks the 2026 figures as preliminary.' },
        { kind: 'two', mt: true,
          leftH3: 'The connection',
          left: [
            'Two homes in three across Peru now have an internet service at home, and in Lima Metropolitana more than four in five. A live maths class uses about as much connection as an ordinary video call, so a home that can hold one can hold the other.',
            'In rural areas the picture is different: barely more than a quarter of homes had internet in 2026. For those families a class may have to happen somewhere with a stronger signal, and we would rather say so now than after a dropped first lesson.'
          ],
          rightH3: 'The device',
          right: [
            'The computer column is the one to watch. Only 36.4% of Peruvian homes had at least one computer in 2026, and among those, INEI found 74.3% had just one. In a family with two schoolchildren and a parent working from home, that single machine is in demand.',
            'Maths can be followed on a tablet, and a phone is fine for listening, but writing fractions or equations on a small touch screen is slow. If the only computer is shared, choose a class hour when it is free; we would rather move the hour than teach on a phone.'
          ] }
      ]
    },
    {
      id: 'live',
      tint: 'tint',
      eyebrow: 'Live or recorded',
      h2: 'What is the difference between live online maths and recorded lessons?',
      lede: 'A recorded lesson explains; a live lesson listens. Videos are useful for revision, but maths is learnt by doing problems, and the most useful moment in a lesson is when a teacher sees the wrong step and asks why.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The teacher sees the working', p: 'On a shared whiteboard the learner writes each line and the teacher watches it appear. A sign error is caught in the second line, not discovered in the last one. With a video, nobody sees the working at all.' },
          { h3: 'Questions get answered now', p: 'A learner who is lost can say "I do not understand why we divide here" and get an answer in the same minute, in plain English. A recorded lesson cannot hear the question, so the confusion waits until homework.' },
          { h3: 'The pace belongs to the learner', p: 'A live teacher slows down when faces look puzzled and moves on when an idea has landed. In a one-to-one class that pace is set entirely around one learner; in a group, around learners of a similar level.' }
        ] },
        { kind: 'p', mt: true, html: 'Our classes are always live. We do send short practice sets between lessons, and learners may revisit material at their own pace, but the teaching itself happens with a person, on video, at an hour your family chooses. All of it is in English: the teacher speaks clearly, writes the key words on the board and checks that each instruction has been understood.' },
        { kind: 'p', html: 'If your search was in Spanish, <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">profesor particular de matemáticas online</a> covers one-to-one online tutoring for Peruvian families, and for younger children <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a> explains how primaria maths works in English. Both pages describe the same live classes taught in English.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'What does an online maths lesson look like? Percentage points with real INEI data',
      lede: 'Here is a lesson we teach to learners from about 13 and to adults, using the INEI table above. It deals with a mistake that turns up in newspapers, school projects and work reports alike: mixing up percentage points with per cent.',
      body: [
        { kind: 'two',
          leftH3: 'The question',
          left: [
            'INEI says internet at home rose by 4.3 percentage points in Lima Metropolitana, by 3.5 in other urban areas and by 3.4 in rural areas between the second quarters of 2025 and 2026. The 2025 figures were 80.4%, 62.7% and 23.7%.',
            'We ask the learner a simple question: where did home internet grow fastest? Most people look at the three numbers and answer "Lima". Version 1 writes that answer as code, and prints a percentage sign after the difference.'
          ],
          rightH3: 'The trap',
          right: [
            'Subtracting one percentage from another does not give a percentage; it gives <strong>percentage points</strong>. Lima moved from 80.4% to 84.7%, which is 4.3 points. Saying it "grew by 4.3%" is a different claim, and a wrong one.',
            'To ask how fast something grew, you compare the change with where it started. That is Version 2: divide the points by the 2025 figure.'
          ] },
        { kind: 'code', label: 'Version 1: subtract and add a per cent sign', lang: 'Python', code: V1, note: 'It prints <code>Lima Metropolitana grew by 4.3 %</code>, <code>Other urban areas grew by 3.5 %</code> and <code>Rural areas grew by 3.4 %</code>. The arithmetic is right; the unit is wrong.' },
        { kind: 'code', label: 'Version 2: points, then growth relative to the start', lang: 'Python', code: V2, note: 'It prints a header and then <code>Lima Metropolitana | 4.3 points | 5.3%</code>, <code>Other urban areas | 3.5 points | 5.6%</code> and <code>Rural areas | 3.4 points | 14.3%</code>, followed by <code>Most points: Lima Metropolitana</code> and <code>Fastest growth: Rural areas</code>.' },
        { kind: 'p', mt: true, html: 'The ranking flips. Lima added the most points but grew the least relative to where it began; rural homes added the fewest points but their share of homes online rose by about a seventh in a single year. <strong>The biggest jump in points was the slowest growth.</strong> Both statements are true at once, and a careful writer says which one they mean.' },
        { kind: 'p', html: 'There is a second lesson underneath. A small starting number makes relative growth look dramatic, so neither measure is "the honest one" on its own. We ask learners to write one English sentence that uses both, for example: "Rural home internet rose by 3.4 percentage points, a 14% increase on 2025, but it still reached only about a quarter of rural homes." That sentence would survive any fact-checker.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 11, no code.</strong> A class had 20 children and now has 25; another had 4 and now has 8. Which class grew more? Which grew faster? Explain the difference in one sentence.',
          '<strong>Ages 12 to 14, on paper.</strong> Using the computer column in the table, say how many points separate Lima from rural areas. Then say how many times more likely a Lima home is to have a computer.',
          '<strong>Ages 14 and up, Python.</strong> Run Version 1, then fix it without looking at Version 2. Add the national figures, 60.7% in 2025 and 64.5% in 2026, and see where Peru as a whole lands.',
          '<strong>University and adults.</strong> Find one news headline that says "rose by X%" about a percentage. Decide whether it means points or per cent, and rewrite it so nobody can misread it.'
        ] }
      ]
    },
    {
      id: 'year',
      tint: 'tint',
      eyebrow: 'The school year',
      h2: 'How do online maths classes fit around the Peruvian school year?',
      lede: 'Easily, because they do not depend on it. MINEDU\'s norm for 2026 set 36 teaching weeks in four blocks, with short breaks between them, and classes with us can continue, pause or speed up across those breaks.',
      body: [
        { kind: 'two',
          leftH3: 'The 2026 calendar, in brief',
          left: [
            'Under RM 501-2025-MINEDU, the 2026 school year taught in four blocks of nine weeks: 16 March to 15 May, 25 May to 24 July, 10 August to 9 October and 19 October to 18 December. Between them came breaks of one or two weeks: 18 to 22 May, 27 July to 7 August, and 12 to 16 October.',
            'The same norm lets regional education authorities set a different distribution of weeks where the climate or local life calls for it, so a school in the highlands or the Amazon may not match Lima exactly. Your child\'s school calendar is the one that counts.'
          ],
          rightH3: 'How families use it',
          right: [
            'Many families keep the same weekly rhythm all year. Others use a break week for a short burst of extra sessions on a topic that went badly in the block just finished, which is easy online because nobody has to travel.',
            'The longest pause is the summer, from the end of the school year in December until the next one begins (in 2026 that was mid-March). Learners who keep one or two maths classes a week through those months arrive at the new year with nothing forgotten; the class hour can move to a summer morning if that suits the family better.'
          ] },
        { kind: 'p', mt: true, html: 'Inside school, the national curriculum gives secundaria pupils four maths periods of 45 minutes a week on the regular school day, and six on the full school day. A live class with us adds a fixed, quiet hour where nobody else is asking the teacher a question, which is often what a pupil who sits in a large class most needs.' },
        { kind: 'p', html: 'Schools themselves are going online in other ways. In September 2026 MINEDU announced a plan to connect 55,000 public schools to satellite internet. We are not part of that plan or connected with MINEDU; we mention it because more families will soon be choosing between online options, and it helps to know what to ask.' }
      ]
    },
    {
      id: 'setup',
      eyebrow: 'Set-up',
      h2: 'What do you need at home for an online maths class?',
      lede: 'Less than you might think, and nothing you need to buy from us. These are the steps we suggest before the first class.',
      body: [
        { kind: 'ol', items: [
          '<strong>Choose the screen.</strong> A laptop or desktop is best; a tablet with a stylus or keyboard is workable. Keep the phone for WhatsApp messages with the teacher.',
          '<strong>Test the connection at the class hour.</strong> Run a short video call at the same time of day as the planned class, because evening connections in a busy home are often slower than morning ones.',
          '<strong>Find a quiet corner.</strong> A table, a chair, decent light on the learner\'s face and paper within reach. Maths is still worked on paper as well as on screen.',
          '<strong>Use a headset if you can.</strong> A cheap headset with a microphone removes echo and makes the teacher\'s English much easier to follow.',
          '<strong>Agree the hour on your own clock.</strong> You book in Peru time and the teacher\'s calendar converts it. Nothing changes between summer and winter, because neither country moves its clocks.',
          '<strong>Tell us the school topic.</strong> If a test is coming, say which chapter. Live lessons can follow the school\'s order when that helps.'
        ] },
        { kind: 'p', mt: true, html: 'A parent does not need to sit beside a learner of ten or older for the whole class. For a six or seven year old, a grown-up nearby for the first few lessons helps with the camera, the microphone and the occasional lost cursor.' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'In English',
      h2: 'Is it hard to learn maths online in English from Peru?',
      lede: 'For most learners, no more than learning it in a classroom, once the first few lessons have passed. Maths needs a modest vocabulary and a lot of symbols that are identical in Spanish and English.',
      body: [
        { kind: 'two',
          leftH3: 'What the index says',
          left: [
            'The EF English Proficiency Index 2025 puts Peru at 519 points, "Moderate", with Lima at 555, "High". The weakest skill across Peru is speaking, at 480. EF measures adults who sit its test online, not schoolchildren, but it matches what our teachers see: learners understand more than they say.',
            'Online maths suits that profile. The learner mostly listens, reads and writes, and speaks in short phrases: "I think it is seven", "I do not understand the second line".'
          ],
          rightH3: 'What the teacher does',
          right: [
            'Teachers speak slowly, use the same words for the same operations every time and put each new word on the board with a picture or an example. Nobody is expected to speak perfect English; everyone is expected to try.',
            'Over a term, those short answers grow into full explanations. A learner who can say "I divided by 80.4 because I want growth compared with the start" has learnt the maths and the English in one sentence.'
          ] }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Peru hours',
      h2: 'What time are online maths classes in Peru?',
      lede: 'At the hour you choose. Peru keeps UTC minus 5 all year without daylight saving, and India keeps UTC plus 5:30, so India is 10 hours 30 minutes ahead of Peru on every day of the year. The table converts; it does not schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Peru hours and the same moment in India', head: ['Peru time', 'India time', 'A typical use'], rows: [
          ['09:00', '19:30', 'A summer-holiday morning'],
          ['11:00', '21:30', 'Late morning for a learner at home'],
          ['13:00', '23:30', 'A lunchtime class for an adult'],
          ['15:30', '02:00, next day', 'Straight after a morning school shift'],
          ['18:00', '04:30, next day', 'Early evening, homework hour'],
          ['21:30', '08:00, next day', 'Late evening for university students']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, zones America/Lima (UTC minus 5, no daylight saving since 1994) and Asia/Kolkata (UTC plus 5:30). The third column is our own illustration, not a timetable.' },
        { kind: 'p', mt: true, html: 'Any day, any time: weekday, weekend, morning or night in Peru. Our teachers work across the Indian day and night so that a learner in Peru does not have to. When you book a free class you pick the hour on your own clock, and the confirmation shows it in Peru time.' }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Thinking, not copying',
      h2: 'Will online classes teach my child to think, or just to copy answers?',
      lede: 'To think. A live teacher who watches the working can tell the difference between a learner who understands and one who has found the answer somewhere, and the lessons are built to make understanding the only way through.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Working on the board', p: 'Every answer comes with its steps, written live. A copied answer has no steps behind it, and the teacher asks for them.' },
          { h3: 'AI used carefully', p: 'Claude\'s consumer terms require users to be at least 18, and ChatGPT\'s terms ask under-18s for a parent\'s permission. Children do not use those accounts in our classes; older learners may use AI only to check reasoning they have already done.' },
          { h3: 'One standard, any address', p: 'Lima or Puno, a city flat or a farmhouse with a good signal: the same teachers, the same lessons and the same expectations apply.' }
        ] },
        { kind: 'p', mt: true, html: 'The lesson above is a fair sample. A chatbot will happily print "grew by 4.3%"; the learner who has done the lesson knows to ask "per cent of what?" That question is the skill we are teaching, and it carries well beyond maths.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How online maths learners move forward',
    lede: 'These stages are ours. They help us place a learner in the right group and help parents see progress that a single test mark can hide.',
    table: { numCols: [], caption: 'Stages in our online maths classes (ours)', head: ['Stage', 'Typical age', 'The learner can'], rows: [
      ['1. Count and compare', '6 to 8', 'Count, compare and add small numbers, and say which is more'],
      ['2. Share and group', '8 to 10', 'Multiply, divide and use simple fractions in stories'],
      ['3. Compare fairly', '10 to 12', 'Use fractions, decimals and percentages to compare things of different sizes'],
      ['4. Use letters', '12 to 14', 'Write and solve equations, and check a solution by substituting it back'],
      ['5. Read data', '14 to 17', 'Tell points from per cent, read a table critically and describe change honestly'],
      ['6. Model and test', '16 and up', 'Build a simple model, test it on data and say where it stops working']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the lesson on this page. It is where maths starts to protect a learner from misleading numbers in the news.',
      'Ask what your child got wrong this week and why. A clear answer is a better sign than a perfect worksheet.'
    ] },
    right: { h3: 'For learners', ps: [
      'When a number changes, ask "by how much?" and "compared with what?" before you say anything.',
      'Write the unit after every answer: points, per cent, minutes, soles. Most mistakes hide in a missing unit.'
    ] }
  },

  catalogue: {
    eyebrow: 'More online maths',
    h2: 'Nine more online maths courses',
    lede: 'Live, in English, with the same teacher from week to week, in a group or alone.',
    bands: [
      { num: 'I', h3: 'Early years and primaria', sub: 'Ages 4 to 10', courses: [
        { code: 'MAM / A / 01', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Counting, shapes and number bonds, concrete before abstract.' },
        { code: 'MAM / A / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and spatial puzzles for ages 6 to 9.' },
        { code: 'MAM / A / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From first beads to calculating in the head.' }
      ] },
      { num: 'II', h3: 'The middle years', sub: 'Ages 10 to 15', courses: [
        { code: 'MAM / B / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry, the bridge into secundaria maths.' },
        { code: 'MAM / B / 02', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest problems for confident learners aged about 10 to 14.' },
        { code: 'MAM / B / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, like the lesson above.' }
      ] },
      { num: 'III', h3: 'Older students and adults', sub: 'Ages 14 and up', courses: [
        { code: 'MAM / C / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra through to calculus over about a year.' },
        { code: 'MAM / C / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Cambridge Core, Extended and Additional Mathematics.' },
        { code: 'MAM / C / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and analysis for degree students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'A week of live online maths from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Daytime', l: 'Peru mornings and lunchtimes meet the Indian evening, a comfortable hour for our teachers.' },
      { time: 'Evening', l: 'After-school and late-evening hours in Peru are covered too; tell us what works.' },
      { time: 'One to one', l: 'A single learner and a single teacher, at the pace and hour you set.' }
    ],
    cells: [
      { h3: 'Always live', p: 'A real teacher on video for every class, never a recording.' },
      { h3: 'One shared board', p: 'The learner writes and the teacher sees each step.' },
      { h3: 'Patient English', p: 'Slow speech, key words written down, questions welcome.' },
      { h3: 'Same teacher', p: 'One person who comes to know how your child reasons.' },
      { h3: 'Practice between classes', p: 'Short sets to keep the idea fresh until next time.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty in a group, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Learners who stay often end up mixing maths with code. Here are some of their projects; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents and students, reproduced exactly.',

  fees: {
    h2: 'Fees for online maths classes in Peru',
    lede: 'You pay by card in US dollars. The soles amount on your statement is worked out by your bank on the day of each charge, which is why it may shift slightly between months.',
    free: ['A free first class', 'A quick check of what the learner already knows', 'No card details asked'],
    group: ['Fifteen to twenty learners at a similar level', 'One teacher throughout', 'Two live classes every week', 'Monthly, cancel whenever you need'],
    one: ['A learner and a teacher, nobody else', 'Topics chosen around school', 'Class hours set by your family']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Online maths classes in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All our maths classes are live, online and in English only. Teachers speak clearly, match the learner\'s pace and accent, and write the important words on the board, so a learner whose English is still growing can keep up.' },
      { q: 'Are the classes live or recorded?', a: 'Live, every time. A teacher meets the learner on video, they share a whiteboard and work through problems together. We send short practice sets between classes, but the teaching is never a recording.' },
      { q: 'What do we need at home?', a: 'A steady internet connection, a laptop, desktop or tablet with a keyboard or stylus, and ideally a headset with a microphone. A phone is fine for messages but too small for writing maths comfortably.' },
      { q: 'Will the classes work outside Lima?', a: 'Usually, if the connection is steady at the class hour. INEI reports that 84.7% of homes in Lima Metropolitana and 66.2% in other urban areas had internet in the second quarter of 2026, against 27.1% in rural areas. Test a video call at the planned hour before the first class.' },
      { q: 'What time are classes in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is always 10 hours 30 minutes ahead of Peru, so 09:00 in Peru is 19:30 in India.' },
      { q: 'Which ages and levels do you teach?', a: 'From age 6 to adults: primaria and secundaria maths, Cambridge IGCSE, IB Maths, SAT maths, university calculus and linear algebra, and statistics for work.' },
      { q: 'Can classes continue during the school holidays?', a: 'Yes. Because classes are online and the hour is yours, many families keep going through the summer break and the shorter breaks between school blocks, or add a few extra sessions on a weak topic.' },
      { q: 'Do you follow the Peruvian school curriculum?', a: 'We teach alongside school, not in its place. Our courses cover the maths a learner of that age meets, and in one-to-one classes the teacher can follow the order of your child\'s school topics. The school sets and marks its own tests.' },
      { q: 'Are you connected with MINEDU or any school?', a: 'No. We are an independent online school with teachers based in India. We are not connected with MINEDU, any UGEL, university or school in Peru, and we do not issue Peruvian qualifications. Learners who complete a course receive our own certificate of completion.' },
      { q: 'How do we pay from Peru?', a: 'By card, in US dollars; your bank converts each payment into soles. The first class is free and booking it does not require a card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for families in Peru looking at maths and coding online.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru', p: 'Our full offer for learners in Peru.' },
      { href: '/peru-summer-holiday-coding-classes-online', label: 'Summer holiday classes', p: 'Live online learning through Peru\'s summer break.' },
      { href: '/online-maths-tuition', label: 'Online maths tuition', p: 'How our maths classes work in any country.' },
      { href: '/online-math-circle-for-kids', label: 'Online maths circle', p: 'Puzzle-led maths for curious children.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class described minute by minute.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before shortcuts.' }
    ]
  },

  start: {
    h2: 'Book a free online maths class',
    lede: 'In the free class the learner tries a few problems on the shared board while the teacher listens to how they think, and you see exactly what a live lesson looks like on your own screen and connection. Then the teacher suggests a course, a group or one-to-one classes, and a time.',
    readFirst: 'Prefer to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a class step by step, and the <a class="ag-inline-link" href="/courses">course list</a> has each maths syllabus.',
    note: 'Classes are live video lessons from India, in English only. WhatsApp, in English, is the fastest way to ask a question.',
    formNote: 'Free and without commitment; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Maths online', links: [
        { href: '/online-maths-tuition', label: 'Online maths tuition' },
        { href: '/online-math-circle-for-kids', label: 'Maths circle for kids' },
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/cambridge-igcse-maths-0580-help', label: 'IGCSE Maths 0580' }
      ] },
      { h4: 'About our classes', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Per cent of what? Always ask'
  },

  personalityCss: `
.ag-root.ag-mam .ag-hero h1 { max-width: 19ch; letter-spacing: -0.01em; }
.ag-root.ag-mam .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-mam .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-mam .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mam .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (ENAHO); MINEDU, RM 501-2025-MINEDU (2026 school year) and Currículo Nacional de la Educación Básica; MINEDU press release on satellite internet for schools (September 2026); EF EPI 2025; IANA tz database. Read 8 to 9 November 2026.',
    localProject: 'An original Python lesson on INEI home-internet figures for the second quarters of 2025 and 2026: subtracting percentages and printing "%" (Lima Metropolitana grew by 4.3 %) confuses points with per cent; dividing by the 2025 figure gives Lima 5.3%, other urban 5.6%, rural 14.3%, so the area with the most points (Lima) grew slowest and rural areas fastest. Plus no-code, paper and headline-rewriting tasks.',
    requiredMentions: ['Lima Metropolitana grew by 4.3 %', 'Rural areas | 3.4 points | 14.3%', 'Most points: Lima Metropolitana', 'Fastest growth: Rural areas', 'The biggest jump in points was the slowest growth.', 'Homes with internet and with a computer in Peru, second quarter of 2026 (INEI)', 'INEI found 74.3% had just one', 'connect 55,000 public schools to satellite internet', 'Per cent of what? Always ask'],
    sources: [
      { claim: 'Home internet 64.5% nationally, 84.7% Lima Metropolitana, 66.2% other urban, 27.1% rural; increases of 3.8, 4.3, 3.5 and 3.4 points; computers 36.4%, 53.3%, 41.3%, 8.9%; 74.3% of computer homes have one; Lima Metropolitana includes Callao.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '2026 school year: 36 teaching weeks in four blocks with breaks; regional authorities may redistribute weeks.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Secundaria maths: 4 periods (JER) and 6 periods (JEC) of 45 minutes a week.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'MINEDU plan to connect 55,000 public schools to satellite internet.', url: 'https://www.gob.pe/institucion/minedu/noticias/1438938-minedu-conectara-a-internet-satelital-a-55-000-escuelas-publicas' },
      { claim: 'EF EPI 2025: Peru 519 Moderate, Lima 555 High, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Internet speeds or reliability figures by region: not in the INEI bulletin used; not stated.',
      'A PISA maths figure for Peru: oecd.org returned a Cloudflare challenge on 9 November 2026 and was not retried.',
      'The 2027 school calendar: no MINEDU norm found as of 9 November 2026 (BLOCKED.md); only 2026 dates are printed, with the year.',
      'Any typed fee or soles conversion: refused; fees render from the template in USD.',
      'Any connection with MINEDU, its satellite plan, any UGEL, school or university: none, and the page says so.'
    ]
  }
};
