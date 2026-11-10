// SHIP: market (en district, Lima) | Barranco, a small district: a specialist class in English without a local crowd | flood fill: what counts as touching (4 or 8 neighbours) changes the count
'use strict';
// Coding classes in Barranco, Lima (ag- English district page, Peru cluster row PE057, hubGroup cities; alloc coba,
// #8D3D14). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// ("City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible at any hour. Fees only through data-price anchors (USD).
// Audience: English-reading households in Barranco and its neighbours: children and teenagers (including bilingual and
// international-school pupils), adults who make things (design, writing, music, photography) and want code as a tool.
// Spine: Barranco is the 7th smallest of Lima's 43 districts (INEI 2025, our sort), with 2,243 children of 6 to 11 and
// 2,559 teenagers of 12 to 17 counted: too few of any one age for a local specialist class taught in English. Online,
// a small district gets the same class as a large one. Table: Barranco and its neighbours in INEI Cuadro 1.
// Different from the two Spanish Barranco pages: vacaciones-utiles-de-programacion-barranco-lima (creative coding summer;
// council workshops table; lesson: modulo patterns) and clases-de-programacion-barranco (adults 40 to 70 after an office
// course; age table; lesson: bit masks; live by the end of 10 Nov 2026 and linked).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-barranco-lima/):
//  - INEI Censos Nacionales 2025 (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO BARRANCO 42986 20490 22496 41076 19537 21539
//    1910 953 957"; "DISTRITO MIRAFLORES 126049 ... 121203 ... 4846"; "DISTRITO SANTIAGO DE SURCO 402074 ... 386432 ...
//    15642"; "DISTRITO CHORRILLOS 377080 184213 192867 359715 175313 184402 17365 8900 8465"; "LIMA METROPOLITANA
//    10141775 ... 9600043 ... 541732"; 43 DISTRITO rows; Barranco 7th smallest by total (our sort).
//    (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO BARRANCO 41076 1560 2243 2559 6611 10819 8043 9241".
//  - CNEB (cneb/): no computing area; competency 28 transversal (FACTS 32, 33, 39); "Arte y cultura" is an area (not used).
//  - EF EPI 2025 (ef_peru.raw): Lima 555 high, Peru 519 moderate.
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): Lima Metropolitana households with internet 84,7%; computer 53,3%;
//    "el 87,4% destina su uso exclusivamente a actividades del hogar".
//  - MINEDU 16 March 2026 (n-inicio2026): 53 631 schools, 6 225 000 students.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30.
//  - Neighbours, plain text: Miraflores (north), Santiago de Surco (east), Chorrillos (south); the Pacific to the west.
// Our own calculations (calc.py): Barranco 30 to 44 = 26.3% of people counted, 60 and over 22.5%, 6 to 11 5.5%, 12 to 17
// 6.2%; Barranco total = 0.42% of Lima Metropolitana (42986 / 10141775).
// Code (scratchpad pe/d5/coba_v1.py, coba_v2.py, python3 -I), exact output:
//   v1: Four directions: [4, 1, 1, 1, 4, 1]
//   v2: Four directions: [4, 1, 1, 1, 4, 1] / Eight directions: [4, 7, 1] / Squares painted: 12 12
// Lesson family: flood fill with a stack and a seen set; the neighbourhood rule (4 or 8 directions) decides what counts as
// one shape, so the same picture gives 6 shapes or 3; the number of squares painted never changes.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'picture = [',
  '    "##....#",',
  '    "##...#.",',
  '    "....#..",',
  '    "..##...",',
  '    "..##..#",',
  ']',
  'STEPS = [(-1, 0), (1, 0), (0, -1), (0, 1)]',
  '',
  'def count_shapes(rows, steps):',
  '    seen = set()',
  '    shapes = []',
  '    for r in range(len(rows)):',
  '        for c in range(len(rows[0])):',
  '            if rows[r][c] == "#" and (r, c) not in seen:',
  '                size = 0',
  '                stack = [(r, c)]',
  '                seen.add((r, c))',
  '                while stack:',
  '                    y, x = stack.pop()',
  '                    size += 1',
  '                    for dy, dx in steps:',
  '                        ny, nx = y + dy, x + dx',
  '                        if (0 <= ny < len(rows) and 0 <= nx < len(rows[0])',
  '                                and rows[ny][nx] == "#" and (ny, nx) not in seen):',
  '                            seen.add((ny, nx))',
  '                            stack.append((ny, nx))',
  '                shapes.append(size)',
  '    return shapes',
  '',
  'print("Four directions:", count_shapes(picture, STEPS))'
].join('\n');

const V2 = [
  '# picture, STEPS and count_shapes() as in Version 1',
  'DIAGONALS = STEPS + [(-1, -1), (-1, 1), (1, -1), (1, 1)]',
  'print("Four directions:", count_shapes(picture, STEPS))',
  'print("Eight directions:", count_shapes(picture, DIAGONALS))',
  'print("Squares painted:", sum(count_shapes(picture, STEPS)), sum(count_shapes(picture, DIAGONALS)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Barranco, Lima: a small district, full classes' },
  slug: 'coding-classes-in-barranco-lima',
  code: 'coba',
  accent: '#8D3D14',
  accentRationale: 'Coding classes in Barranco: a fired-brick sienna #8D3D14, the colour of the old ranch-house walls near the Bajada de Baños; contrast 7.05 on #FBF8F2, 6.63 on #F5F1E8 and 6.07 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Barranco, Lima',
  title: 'Coding Classes in Barranco, Lima: Live and Taught in English',
  description: 'Coding classes for Barranco children, teenagers and adults: live online in English at any hour, a full class of the right age even from a small district.',
  ogDescription: 'Live coding lessons in English for Barranco: why a small district rarely has a specialist class nearby, how online classes solve that, what children, teenagers and makers learn, and a Python lesson on a paint-bucket tool.',
  twitterDescription: 'Coding in English for Barranco, Lima: children, teens and adult makers, live online at any hour, with a real Python lesson.',
  pageName: 'Coding Classes in Barranco, Lima',
  webPageDescription: 'A guide for English-reading households in Barranco, Lima, to live online coding classes taught in English, built from INEI Censos Nacionales 2025 (Barranco and its neighbouring districts), the CNEB, EF EPI 2025 and INEI household data, with an original Python lesson on flood fill.',
  courseDescription: 'Live online coding classes taught in English for learners in Barranco, Lima: Scratch and Python for children, Python, creative coding, web and game development for teenagers, and Python and web building for adults, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Barranco, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#small', label: 'A small district' },
    { href: '#who', label: 'Who learns' },
    { href: '#makers', label: 'Code for makers' },
    { href: '#project', label: 'Python lesson' },
    { href: '#times', label: 'Barranco times' }
  ],
  eyebrow: 'Barranco, Lima &middot; Live online, in English &middot; Children, teens and makers',
  h1: 'Coding classes in Barranco, Lima',
  lede: 'Barranco is small. INEI\'s 2025 census puts it among the smallest districts of Lima, with only a couple of thousand children of primary age and a couple of thousand teenagers. That is wonderful for a neighbourhood and awkward for anyone looking for a specialist class taught in English: there are rarely enough learners of one age and level nearby to fill one. This page explains how live online classes get round that, who in Barranco takes them, what code offers people who already make things, and what a lesson looks like.',
  secondaryCta: { href: '#project', label: 'See the Python lesson' },
  wa: 'Hello Modern Age Coders, we are in Barranco, Lima, and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; more than 10,000 learners in many countries &middot; every class in English',
  spec: [
    ['Learners', 'Children from 6, teenagers, adults'],
    ['Language', 'English, clear and unhurried'],
    ['Good for', 'Games, art, the web and data'],
    ['Class size', 'Fifteen to twenty of one age, or 1 to 1'],
    ['Barranco hours', 'Morning, afternoon or night'],
    ['First class', 'Free, nothing to pay']
  ],
  capsuleQ: 'The short answer',
  capsule: 'In Barranco, Lima, Modern Age Coders offers coding as live online classes taught in English. Children start with Scratch at 6 and Python at about 9; teenagers learn Python, web and game development and creative coding; adults learn Python and web building, often for their own design, writing or music projects. Because classes are online, a Barranco learner joins a full group of the same age and level drawn from many places, fifteen to twenty learners, or studies one to one with a mentor based in India, at any hour chosen on Peru time.',

  picks: {
    eyebrow: 'Where Barranco learners start',
    h2: 'Three courses for three kinds of maker',
    lede: 'Games for children, creative coding and animation for teenagers and adults with an eye for design, and web building for anyone who wants a site of their own.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'COBA / 01', title: 'Game Development for Kids', note: 'For children who would rather build a game than play one. Scratch first, then Roblox and Minecraft projects, with every rule of the game explained, and then written, in plain English.' },
      { course: 'creative-coding-animation-mastery', code: 'COBA / 02', title: 'Creative Coding and Animation', note: 'For teenagers and adults who think visually. Motion, pattern and colour made with code in p5.js, where every image on screen is a small program that the learner can read and change.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'COBA / 03', title: 'HTML and CSS for Beginners', note: 'For anyone who wants their own website, from a teenager\'s portfolio to an artist\'s gallery. Real, responsive pages written by hand, so the learner understands every line.' }
    ]
  },

  sections: [
    {
      id: 'small',
      eyebrow: 'A small district',
      h2: 'How many people live in Barranco, compared with its neighbours?',
      lede: 'Far fewer than next door. INEI\'s census of 2025 gives Barranco a total population of 42,986, the seventh smallest of Lima\'s 43 districts by our sort of INEI\'s table, beside neighbours several times its size.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Barranco and the districts around it, Censos Nacionales 2025 (INEI)', head: ['District', 'Total population', 'People counted', 'People missed (INEI estimate)'], rows: [
          ['Barranco', '42,986', '41,076', '1,910'],
          ['Miraflores (to the north)', '126,049', '121,203', '4,846'],
          ['Santiago de Surco (to the east)', '402,074', '386,432', '15,642'],
          ['Chorrillos (to the south)', '377,080', '359,715', '17,365'],
          ['Lima Metropolitana (43 districts)', '10,141,775', '9,600,043', '541,732']
        ] },
        { kind: 'source', html: 'Taken from Cuadro N.° 1 of INEI\'s Censos Nacionales 2025 spreadsheet for the capital, saved on 8 November 2026. INEI\'s total is the counted population plus its estimate of people missed. The rows are separate districts and are not meant to be added; the ranking among the 43 districts is our own sort of the same table.' },
        { kind: 'two', mt: true,
          leftH3: 'Barranco by age',
          left: [
            'Of the 41,076 people INEI counted in Barranco, 2,243 were aged 6 to 11 and 2,559 were 12 to 17. The largest group is adults of 30 to 44, 10,819 people, about 26.3% by our division, and 9,241 were 60 or over.',
            'Barranco holds about 0.4% of the population of Lima Metropolitana, again by our arithmetic. Women outnumber men slightly, 22,496 to 20,490 in INEI\'s total.'
          ],
          rightH3: 'Why size matters for a class',
          right: [
            'Spread two thousand primary-age children over six school years and many schools, and there are only a few hundred of any one age in the whole district. Fewer still will want a coding class, and fewer again want it taught in English.',
            'That is why a specialist class in English is hard to find close to home in a small district. Online, the arithmetic disappears: a Barranco nine-year-old joins a group of nine-year-olds from many places, and the class is full from the first week.'
          ] }
      ]
    },
    {
      id: 'who',
      tint: 'tint',
      eyebrow: 'Who learns',
      h2: 'Who in Barranco takes coding classes in English?',
      lede: 'A mix that reflects the district: families with children at bilingual or international schools, teenagers who draw, film or make music, and adults who make things for a living or for love.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children and their parents', p: 'Children from 6 start with Scratch, where a story or a game appears in the first lesson. Pupils at bilingual schools follow easily; children who speak mostly Spanish at home learn the English of the class alongside the code. Either way, nobody switches to Spanish.' },
          { h3: 'Teenagers who make things', p: 'A teenager who already draws or edits video often loves creative coding: shapes, motion and colour from a few lines of code. Others want games or a website of their own. All of it starts with the same foundations of Python or JavaScript.' },
          { h3: 'Adult makers and freelancers', p: 'Designers, photographers, writers and musicians use code to build portfolios, automate dull tasks, or make generative work. Adults learn at their own pace, in a group of adults or one to one, at an hour around their work.' }
        ] },
        { kind: 'p', mt: true, html: 'Peruvian school does not teach programming as a subject: no area of the CNEB plans of study covers it, and the curriculum treats digital skills as a competency spread across all subjects. Children who want to code learn it outside school, which is where we come in. Spanish-speaking parents planning the summer can read our guide to <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-barranco-lima">vacaciones útiles de programación en Barranco</a>, about creative coding in January and February. Adults returning to learning after an office course can read, in Spanish, <a class="ag-inline-link" href="/clases-de-programacion-barranco">clases de programación en Barranco</a>.' }
      ]
    },
    {
      id: 'makers',
      eyebrow: 'Code for makers',
      h2: 'Why should someone who draws, writes or makes music learn to code?',
      lede: 'Because code is a material, like paint or clay, with properties you can only learn by working it. Once you can write a few lines, a computer stops being a tool you use and becomes something you can shape.',
      body: [
        { kind: 'two',
          leftH3: 'What it opens up',
          left: [
            'An illustrator can generate a thousand variations of a pattern and keep the few that please the eye; a photographer can rename, resize and sort a whole shoot in seconds; a writer can build an interactive story; a musician can program a rhythm that changes every bar.',
            'None of this needs a computer science degree. It needs the foundations, taught properly: variables, loops, conditions, lists and functions, then a library for the medium the learner cares about.'
          ],
          rightH3: 'Why learn it live',
          right: [
            'Creative coding is full of small, puzzling failures: a shape drawn off the edge, a colour that never changes, an animation that freezes. A mentor watching your screen spots the cause in seconds and, more usefully, asks the question that lets you spot it yourself.',
            'And because the class is in English, the learner meets the vocabulary of the documentation, the forums and the libraries in the language they are written in.'
          ] },
        { kind: 'p', mt: true, html: 'We teach learners to think through a problem rather than copy an answer, from a tutorial or from an AI tool. Adults in our classes use AI assistants and learn to check what they produce; children stay off adult chatbot accounts, since Claude sets 18 as its minimum age and ChatGPT asks for a parent\'s consent below 18.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like? How a paint bucket decides what to fill',
      lede: 'Every drawing program has a paint-bucket tool: click inside a shape and the colour floods to its edges. We teach how it works to learners of about 12 and up, and it turns on a question an artist would ask: do two squares that touch only at a corner belong to the same shape?',
      body: [
        { kind: 'two',
          leftH3: 'The picture',
          left: [
            'Our picture, drawn for the lesson, is a small grid of squares: a 2 by 2 block in the top-left corner, a diagonal line of three squares running down from the top-right, a second 2 by 2 block lower down that the diagonal touches at one corner, and a single square on its own at the bottom right.',
            'An artist looking at it sees three shapes: the first block, the diagonal joined to the second block, and the lone square. The program has to decide for itself.'
          ],
          rightH3: 'How the fill works',
          right: [
            'The program finds a filled square it has not seen, then keeps a stack of squares to visit. It takes one from the stack, counts it, and pushes every filled neighbour it has not seen yet. When the stack is empty, one shape is finished, and it records the size.',
            'The <code>seen</code> set is essential: without it the fill would visit the same squares back and forth for ever. Marking a square as seen when it is pushed, not when it is popped, also stops any square being counted twice.'
          ] },
        { kind: 'code', label: 'Version 1: a fill that moves up, down, left and right', lang: 'Python', code: V1, note: 'It prints <code>Four directions: [4, 1, 1, 1, 4, 1]</code>.' },
        { kind: 'p', mt: true, html: 'Six shapes, not three. The fill can only move up, down, left or right, so the diagonal line falls apart into three single squares, and none of them can reach the lower block. Nothing is broken in the code; it answered a different question from the one the artist asked. The fix is to say what <strong>touching</strong> means.' },
        { kind: 'code', label: 'Version 2: let the paint pass through corners', lang: 'Python', code: V2, note: 'With Version 1\'s picture, STEPS and function above it, it prints <code>Four directions: [4, 1, 1, 1, 4, 1]</code>, <code>Eight directions: [4, 7, 1]</code> and <code>Squares painted: 12 12</code>.' },
        { kind: 'p', html: 'With eight directions, corners count as touching. The diagonal joins up and links to the lower block, giving one shape of seven squares, and the count matches the artist\'s three. The last line is the check every learner should write: whichever rule we use, all 12 filled squares are painted exactly once. Only the grouping changes.' },
        { kind: 'p', html: 'Real paint programs choose deliberately. Many fill with four directions, because otherwise colour leaks through a diagonal line meant as a border; the same choice appears in maps, games and medical images. There is no universally right answer, only a rule you have to state. That is the lesson: before you count shapes, decide what makes two pieces one.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, with crayons.</strong> Colour some squares on squared paper. Ask a friend how many shapes there are. Do you agree about the squares that only touch at a corner?',
          '<strong>Ages 9 to 11, in Scratch.</strong> Draw a maze with the pen, and make a sprite that can only move up, down, left and right. Can it squeeze between two walls that meet at a corner?',
          '<strong>Ages 12 to 14, in Python.</strong> Change the picture so that four directions and eight directions give the same count. What did you have to remove?',
          '<strong>Ages 15 and over.</strong> Rewrite the fill as a recursive function, then try it on a 200 by 200 picture that is entirely filled. Explain, in English, why Python complains, and why the stack version does not.'
        ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Why online',
      h2: 'Why learn online from Barranco rather than at a centre elsewhere in Lima?',
      lede: 'For a small district, the alternative to an online class is usually a journey to a bigger one. A live class at home keeps the time for learning and costs no travel at all.',
      body: [
        { kind: 'two',
          leftH3: 'The trip you skip',
          left: [
            'We do not publish traffic estimates without a source, and Barranco residents hardly need them. Whatever the route, an hour-long class elsewhere means an afternoon organised around getting there and back.',
            'At home, the learner sits down, logs in and starts. A parent working nearby can glance over; nobody needs to drive.'
          ],
          rightH3: 'What you need',
          right: [
            'A laptop or desktop computer with a keyboard, camera and microphone, and a steady connection. INEI\'s household survey for the second quarter of 2026 reported internet in 84.7% of homes in Lima Metropolitana, which for INEI includes Callao, and at least one computer in 53.3%.',
            'For creative work a mouse helps, and headphones help everyone. A phone is fine for following a class but not for writing code.'
          ] },
        { kind: 'p', mt: true, html: 'Plenty of Lima adults use English daily, and EF\'s English Proficiency Index 2025 rates the city of Lima "High" at 555, against 519 for Peru as a whole. Lima-wide context, from the school timetable to IB students, is on our page about <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Barranco times',
      h2: 'At what hour can a Barranco learner have class?',
      lede: 'Whenever you choose. Peru keeps one clock all year, without daylight saving, and India is always 10 hours 30 minutes ahead of it. The table shows a few conversions; none is a fixed slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'Barranco hours with the matching India time (sample conversions)', head: ['Peru time, Barranco', 'India time', 'A likely learner'], rows: [
          ['07:30', '18:00', 'A freelancer before the day\'s work'],
          ['09:30', '20:00', 'A child in the January holidays'],
          ['16:30', '03:00, next day', 'A pupil after school'],
          ['19:00', '05:30, next day', 'A teenager after homework'],
          ['21:30', '08:00, next day', 'An adult maker late in the evening']
        ] },
        { kind: 'source', html: 'Clock rules: tz database entries for America/Lima and Asia/Kolkata; Peru last changed its clocks in 1994. The conversions are ours and hold on every date.' },
        { kind: 'p', mt: true, html: 'Book on your own clock and the mentor sees the India time. The Peruvian school calendar starts in March, when MINEDU reported 53,631 schools reopening for 6,225,000 pupils on 16 March 2026, to December; our classes run through all of it, and through the summer holidays, unless you pause them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Barranco learner can make at each stage',
    lede: 'Our own stages, described by what the learner makes. They place learners in the right group and show parents and adult learners real progress.',
    table: { numCols: [], caption: 'Making things with code, stage by stage (ours)', head: ['Stage', 'Typical start', 'The learner makes', 'And understands'], rows: [
      ['1. Scene', 'Age 6', 'A Scratch scene where characters move and talk', 'Order matters'],
      ['2. Game', 'Age 8', 'A playable game with a score', 'Events and variables'],
      ['3. Pattern', 'Age 10', 'Repeating drawings with loops', 'How a loop builds a picture'],
      ['4. Page', 'Age 12', 'A personal website in HTML and CSS', 'Structure versus style'],
      ['5. Tool', 'Age 13 and up', 'A program that fills, counts or sorts', 'Rules must be stated, like touching'],
      ['6. Work', 'Teens and adults', 'Generative art, a portfolio or a small app', 'How to test and explain it']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the paint-bucket lesson above. A child who can explain why the count changed has learned something that applies far beyond pictures.',
      'Our notes describe what was made and understood, not hours spent.'
    ] },
    right: { h3: 'For makers', ps: [
      'Before you count shapes, decide what makes two pieces one.',
      'Change one thing at a time, then look. Code rewards the same patience as any craft.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Barranco',
    lede: 'All taught live and in English; pick a batch or private lessons, and keep the same mentor throughout.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'COBA / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch stories, games and simple apps, grouped by age.' },
        { code: 'COBA / KIDS / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Children build real websites of their own.' },
        { code: 'COBA / KIDS / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle art and small AI projects in typed Python.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'COBA / TEEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games from scratch.' },
        { code: 'COBA / TEEN / 02', slug: 'creative-media-design-masterclass-teens', title: 'Creative media for teens', blurb: 'Photo, video and design skills with a technical edge.' },
        { code: 'COBA / TEEN / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: '2D and 3D games in GDScript for kids and teens.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Makers and professionals', courses: [
        { code: 'COBA / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From a first script to automating your own work.' },
        { code: 'COBA / ADULT / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'From pages to a complete web application.' },
        { code: 'COBA / ADULT / 03', slug: 'canva-ai-design-masterclass', title: 'Canva and AI design', blurb: 'Graphic design skills with AI tools used carefully, 13 and over.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes across a Barranco week',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Barranco mornings fall in the Indian evening, a natural teaching hour.' },
      { time: 'Late', l: 'Afternoon and night classes in Lima are arranged as well; name your hour.' },
      { time: '1-on-1', l: 'A mentor of your own, around studio, school or work.' }
    ],
    cells: [
      { h3: 'Steady mentor', p: 'One teacher who learns what you like to make.' },
      { h3: 'Plain English', p: 'Calm pace, simple sentences, room for questions.' },
      { h3: 'Make something', p: 'Every class ends with a thing that works.' },
      { h3: 'Right group', p: 'Learners grouped by age and level.' },
      { h3: 'Short reports', p: 'What was made, what was hard, what is next.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a group, or one to one.' }
    ]
  },

  projectsH2: 'What our older students have made',
  projectsLede: 'Learners who stay with coding make work worth sharing. Some projects by older students are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds more.',
  reviewsLede: 'Word-for-word Google reviews from families and learners.',

  fees: {
    h2: 'Fees for learners in Barranco',
    lede: 'Prices are in US dollars and billed monthly to a card. A card in soles is no problem: the bank converts each charge at its own rate, so the figure you see may drift a little between months.',
    free: ['A free first class', 'Something small made on the day', 'No card details'],
    group: ['Fifteen to twenty learners of one age and level', 'A regular mentor', 'Two live classes a week', 'Month by month, no contract'],
    one: ['One learner, one mentor', 'Projects you choose', 'Hours that fit your week']
  },

  faq: {
    eyebrow: 'Barranco learners ask',
    h2: 'Coding classes in Barranco: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught only in English. Mentors speak clearly, adapt to the learner\'s pace and accent, and show each step on screen, so children and adults whose English is still growing can follow. Code is written in English keywords anyway, so class and code share a language.' },
      { q: 'Is Barranco too small for a proper class?', a: 'Not online. Groups are formed from learners of the same age and level in many places, so a Barranco learner joins a full group of fifteen to twenty from the start, or chooses one-to-one lessons.' },
      { q: 'What age can my child start?', a: 'From 6, with Scratch, where blocks snap together and little typing is needed. From about 9, most children can move to typed Python. Teenagers and adults start directly with Python, JavaScript or web building.' },
      { q: 'When are classes in Barranco time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru on every date, so 09:30 in Barranco is 20:00 in India.' },
      { q: 'I am an adult designer with no coding background. Where do I start?', a: 'Usually with HTML and CSS if you want a website, or creative coding if you want to make images and motion. Both start from zero. If you want to automate work, start with Python. The free first class helps you choose.' },
      { q: 'Do you have a studio or centre in Barranco?', a: 'No. We have no premises in Barranco or anywhere in Peru. Every class is live over video with a mentor based in India, which is how a small district gets the same classes as a large one.' },
      { q: 'Do children use AI tools in your classes?', a: 'Only what suits their age, and never before they have reasoned the problem out themselves. Claude is limited to users aged 18 or older, and ChatGPT requires parental consent for minors, so we keep children off adult chatbot accounts.' },
      { q: 'Are you connected with the municipality or any school?', a: 'No. We are an independent online school, not connected with the Municipalidad de Barranco, MINEDU or any school, and we do not award Peruvian qualifications. Learners who complete a course receive our own certificate of completion.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars. If the card is in soles, your bank converts each charge, so the amount can vary slightly between months. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Barranco learners and families.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our guide for learners across Peru.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson from start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning first, tools second.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by older students.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus, from Scratch to full stack.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Barranco',
    lede: 'In the free class you, or your child, make something small with a mentor: a moving sprite, a shape on a page, a first line of Python. The mentor sees how the learner thinks and how much English they follow, then suggests a course, a group or private lessons, and an hour that fits.',
    readFirst: 'To read before booking, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a lesson and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'Teaching is live on video, in English, by mentors in India. Write to us on WhatsApp in English for a quick answer.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Lima and Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding in Peru' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium coding, Lima' },
        { href: '/web-development-course-peru', label: 'Web development, Peru' },
        { href: '/live-coding-classes-peru-time', label: 'Classes on Peru time' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Decide what touching means'
  },

  personalityCss: `
.ag-root.ag-coba .ag-hero h1 { max-width: 15ch; letter-spacing: -0.018em; }
.ag-root.ag-coba .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-coba .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-coba .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-coba .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Censos Nacionales 2025 (Lima Metropolitana demographic indicators, Cuadros 1 and 3); MINEDU, Currículo Nacional de la Educación Básica (competency 28); EF EPI 2025 Peru page; INEI TIC en los Hogares II Trimestre 2026; MINEDU news of 16 March 2026; IANA tz database. All read 8 to 10 November 2026.',
    localProject: 'An original Python lesson on a paint-bucket (flood fill) tool for learners of 12 and up: an invented grid with two blocks, a diagonal line and a lone square. Filling in four directions prints Four directions: [4, 1, 1, 1, 4, 1]; allowing diagonals prints Eight directions: [4, 7, 1]; both paint all 12 squares (Squares painted: 12 12). Lesson family: flood fill with a stack and a seen set; the neighbourhood rule decides what counts as one shape.',
    requiredMentions: ['Four directions: [4, 1, 1, 1, 4, 1]', 'Eight directions: [4, 7, 1]', 'Squares painted: 12 12', 'Decide what touching means', 'decide what makes two pieces one', '42,986', '2,243 were aged 6 to 11', 'seventh smallest of Lima\'s 43 districts', 'Chorrillos (to the south)'],
    sources: [
      { claim: 'Barranco 42,986 total (41,076 counted, 1,910 omitted; 22,496 women, 20,490 men); Miraflores, Santiago de Surco, Chorrillos and Lima Metropolitana totals; Barranco by age 6 to 11 2,243, 12 to 17 2,559, 30 to 44 10,819, 60 and over 9,241.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'No computing area in the CNEB; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 High; Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Lima Metropolitana (with Callao) 84.7% of households with internet, 53.3% with a computer, II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '53,631 schools reopened on 16 March 2026 for 6,225,000 pupils.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' }
    ],
    rejectedClaims: [
      'Counts of artists, galleries or creative workers in Barranco: no primary source; the page describes makers without a figure.',
      'Names or counts of schools in or near Barranco: not used; no school named as a source of students.',
      'Income descriptions of Barranco: not used, by rule.',
      'Traffic or commute times: argued without figures.',
      'Any link with the Municipalidad de Barranco, MINEDU or a school: none, and the page says so.'
    ]
  }
};
