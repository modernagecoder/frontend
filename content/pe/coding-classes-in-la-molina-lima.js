// SHIP: market (en district, Lima) | La Molina: speaking lags reading (EF 2025), so a live class trains spoken technical English | grid update: change cells in place and the step reads half-new values; build the next grid from the old one
'use strict';
// Coding classes in La Molina, Lima (ag- English district page, Peru cluster row PE055, hubGroup cities; alloc como,
// #863E49). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// ("City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible at any hour. Fees only through data-price anchors (USD).
// Audience: La Molina families who want coding taught in English, from bilingual and IB pupils to Spanish-first teenagers
// who read English well but rarely speak it; adults too.
// Spine: EF EPI 2025 scores Peru's adult English higher in reading (540) than speaking (480), and its youngest tested
// group (18 to 20) lowest (469). A live coding class is a daily chance to speak technical English aloud, which a
// La Molina teenager (10,681 aged 12 to 17, INEI 2025) can use before university.
// Different from the two Spanish La Molina pages: vacaciones-utiles-de-programacion-la-molina-lima (computación versus
// programación, council workshops table, age table; lesson: str versus int) and clases-de-programacion-la-molina (adults in
// three shifts, age table versus Lima; lesson: short-circuit and/or; live by the end of 10 Nov 2026 and linked).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-la-molina-lima/):
//  - EF EPI 2025 Peru page (ef_peru.raw, page data): "readingScore":540 "readingBandSlug":"moderate; "listeningScore":499
//    "listeningBandSlug":"low; "writingScore":514 (writingBand moderate); "speakingScore":480 "speakingBandSlug":"low;
//    "ageGroup1Score":469 low, "ageGroup2Score":540 moderate, "ageGroup3Score":559 high, "ageGroup4Score":537 moderate,
//    "ageGroup5Score":509 moderate, with tab labels "18-20 yrs", "21-25 yrs", "26-30 yrs", "31-40 yrs", "41+ yrs" in that
//    order; "efEpiScore":519 moderate; cityScore lima high 555; region Lima 544 (data-state="lima" ... 544). Band lines in
//    page data: 600 very high, 550 high, 500 moderate, 450 low. "Based on test results of 2.2m adults" (ef_epi.txt in pilot).
//  - INEI Censos Nacionales 2025 (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO LA MOLINA 151360 71577 79783 143899 67902 75997
//    7461 3675 3786"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO LA MOLINA 143899 5042 8435 10681 24793 29245 30484 35219".
//  - MINEDU press release 17 April 2026 (n-coar-ib-1100/): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron
//    el Diploma del Bachillerato Internacional"; "515 estudiantes de quinto de secundaria de los COAR obtuvieron
//    certificaciones internacionales del idioma inglés Cambridge".
//  - CNEB (cneb/): secundaria JER "Inglés 3 3 3 3 3", "Total de horas 35 35 35 35 35"; hora pedagógica 45 minutes; no
//    computing area (FACTS 39, 44).
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "Lima Metropolitana, el 84,7% de los hogares disponía del servicio".
//  - Time (timezone.tsv): America/Lima UTC-5, Asia/Kolkata UTC+5:30.
//  - Neighbours, plain text: Ate, Cieneguilla, Pachacámac, Villa María del Triunfo, Santiago de Surco.
// Our own calculations: 3 x 45 = 135 minutes of English a week in JER secundaria; 540 - 480 = 60 points between reading
// and speaking; La Molina 12 to 17 = 7.4% and 6 to 11 = 5.9% of people counted (calc.py).
// Code (scratchpad pe/d5/como_v1.py, como_v2.py, python3 -I), exact output:
//   v1: five lines of "....." (the blinker vanishes)
//   v2: "....." / "....." / ".###." / "....." / "....." / Back after two steps: True
// Lesson family: updating a grid in place makes later cells read half-updated neighbours; compute the next state from an
// unchanged copy (double buffering), then check a known pattern (the blinker returns after two steps).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'grid = [',
  '    [0, 0, 0, 0, 0],',
  '    [0, 0, 1, 0, 0],',
  '    [0, 0, 1, 0, 0],',
  '    [0, 0, 1, 0, 0],',
  '    [0, 0, 0, 0, 0],',
  ']',
  '',
  'def neighbours(g, r, c):',
  '    total = 0',
  '    for dr in (-1, 0, 1):',
  '        for dc in (-1, 0, 1):',
  '            if (dr or dc) and 0 <= r + dr < 5 and 0 <= c + dc < 5:',
  '                total += g[r + dr][c + dc]',
  '    return total',
  '',
  'def show(g):',
  '    for row in g:',
  '        print("".join("#" if cell else "." for cell in row))',
  '',
  'for r in range(5):',
  '    for c in range(5):',
  '        n = neighbours(grid, r, c)',
  '        if grid[r][c] == 1 and n not in (2, 3):',
  '            grid[r][c] = 0',
  '        elif grid[r][c] == 0 and n == 3:',
  '            grid[r][c] = 1',
  'show(grid)'
].join('\n');

const V2 = [
  '# grid, neighbours() and show() as in Version 1, without its last loop',
  'def step(g):',
  '    new = [[0] * 5 for _ in range(5)]',
  '    for r in range(5):',
  '        for c in range(5):',
  '            n = neighbours(g, r, c)',
  '            if g[r][c] == 1 and n in (2, 3):',
  '                new[r][c] = 1',
  '            elif g[r][c] == 0 and n == 3:',
  '                new[r][c] = 1',
  '    return new',
  '',
  'once = step(grid)',
  'show(once)',
  'print("Back after two steps:", step(once) == grid)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'La Molina, Lima: code and spoken English' },
  slug: 'coding-classes-in-la-molina-lima',
  code: 'como',
  accent: '#863E49',
  accentRationale: 'Coding classes in La Molina: a dusky wine red #863E49, the colour of the bare hills around the valley at evening; contrast 7.08 on #FBF8F2, 6.66 on #F5F1E8 and 6.09 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in La Molina, Lima',
  title: 'Coding Classes in La Molina, Lima: Live and in English',
  description: 'Coding classes for La Molina children, teenagers and adults: live online in English, at any hour, where learners code and also practise speaking technical English.',
  ogDescription: 'Live coding lessons in English for La Molina: why EF\'s 2025 index finds Peruvians read English better than they speak it, how a live class turns that around, and a Python lesson on a grid that destroys itself.',
  twitterDescription: 'Coding in English for La Molina, Lima: live classes that build programs and spoken technical English together, at any hour.',
  pageName: 'Coding Classes in La Molina, Lima',
  webPageDescription: 'A guide for families and adults in La Molina, Lima, to live online coding classes taught in English, built from EF EPI 2025 skill and age scores, INEI Censos Nacionales 2025, the CNEB timetable, MINEDU\'s 2026 release on IB results and INEI household data, with an original Python lesson on updating a grid.',
  courseDescription: 'Live online coding classes taught in English for learners in La Molina, Lima: Scratch and Python for children, Python, Java and IB or IGCSE computer science for teenagers, and Python and AI for adults, in a group of fifteen to twenty or one to one, at hours chosen by the family.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'La Molina, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#speaking', label: 'Speaking English' },
    { href: '#district', label: 'La Molina' },
    { href: '#lesson', label: 'Inside a lesson' },
    { href: '#project', label: 'Python lesson' },
    { href: '#times', label: 'La Molina times' }
  ],
  eyebrow: 'La Molina, Lima &middot; Live online, in English &middot; Ages 6 to adult',
  h1: 'Coding classes in La Molina, Lima',
  lede: 'Plenty of teenagers in La Molina read English comfortably and freeze when they have to say something technical out loud. They are not unusual: EF\'s English index for 2025 finds Peruvian adults score far higher in reading than in speaking. A live coding class taught in English is one of the few places where speaking is not an exercise but a necessity, because the mentor needs to hear what you think your program does. This page explains that idea, what our classes offer each age in La Molina, and what a lesson looks like.',
  secondaryCta: { href: '#project', label: 'Try the Python lesson' },
  wa: 'Hello Modern Age Coders, we live in La Molina, Lima, and would like live coding classes in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ learners in many countries &middot; everything taught in English',
  spec: [
    ['Who', 'Children from 6, teenagers and adults'],
    ['Taught in', 'English, at the learner\'s pace'],
    ['Exam subjects', 'IB and IGCSE computer science'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['La Molina hours', 'Any hour, any day of the week'],
    ['First class', 'Free, and no card details']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders teaches coding in La Molina, Lima, through live online classes in English for children from 6, teenagers and adults. Children start with Scratch, then Python; teenagers go on to Python, Java, AI, and IB or IGCSE computer science; adults learn Python and AI tools. Because every lesson is live, learners also practise explaining their code out loud in English, the skill EF\'s 2025 index finds weakest in Peru. Mentors in India take each class in real time, either a batch of fifteen to twenty or a single student, at an hour the household names.',

  picks: {
    eyebrow: 'Where La Molina learners start',
    h2: 'Three courses to start with',
    lede: 'A full Scratch course for the youngest, Java for teenagers who want a second language with real structure, and IB computer science for Diploma students.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'COMO / 01', title: 'Scratch Coding for Kids', note: 'For children from 6 who have never coded. Animated stories and games built from blocks, with plenty of talking about what each block does, in short, clear English.' },
      { course: 'java-programming-masterclass-for-teens', code: 'COMO / 02', title: 'Java for Teens', note: 'For teenagers ready for a language with strict rules. Classes, objects and real programs from a beginner\'s level, with each idea explained aloud before it is typed.' },
      { course: 'ib-diploma-computer-science-course', code: 'COMO / 03', title: 'IB DP Computer Science', note: 'For Diploma candidates at either level. The new guide\'s concepts, coding practice and support with the internal assessment, while the school keeps every grade in its own hands.' }
    ]
  },

  sections: [
    {
      id: 'speaking',
      eyebrow: 'Speaking English',
      h2: 'Why does a live coding class help with spoken English?',
      lede: 'Because Peruvians, on average, understand written English much better than they speak it, and a live class makes you speak. EF\'s English Proficiency Index 2025 scores Peru 540 in reading and 480 in speaking, a gap of 60 points by our subtraction.',
      body: [
        { kind: 'table', numCols: [1], caption: 'English in Peru by skill and by age, EF English Proficiency Index 2025', head: ['Measure', 'EF EPI 2025 score', 'EF band'], rows: [
          ['Reading', '540', 'Moderate'],
          ['Writing', '514', 'Moderate'],
          ['Listening', '499', 'Low'],
          ['Speaking', '480', 'Low'],
          ['Age 18 to 20', '469', 'Low'],
          ['Age 21 to 25', '540', 'Moderate'],
          ['Age 26 to 30', '559', 'High'],
          ['Age 31 to 40', '537', 'Moderate'],
          ['Age 41 and over', '509', 'Moderate'],
          ['Peru overall', '519', 'Moderate'],
          ['Lima region', '544', 'Moderate'],
          ['Lima city', '555', 'High']
        ] },
        { kind: 'source', html: 'Figures copied from the data behind EF\'s Peru page for its 2025 English Proficiency Index, consulted 8 November 2026. The index is built from adults who take its online test; the youngest group it reports is 18 to 20, so it says nothing directly about children. The 60-point gap is our arithmetic.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table says',
          left: [
            'Two patterns stand out. Reading is the strongest skill and speaking the weakest, which is what you would expect from English learned mostly in class from books. And the youngest adults EF tested, aged 18 to 20, score lowest of all age groups, 469, while people in their late twenties score highest, 559.',
            'One reading of the second pattern is that many Peruvians get most of their English after school, at university or work. EF does not say why; we only note that the years around leaving school are exactly when a teenager starts to need English for study.'
          ],
          rightH3: 'What a live class adds',
          right: [
            'School English in Peru is a few periods a week: under the CNEB, regular secundaria gives Inglés 3 of its 35 weekly periods, 135 minutes by our calculation at 45 minutes a period. Bilingual schools give much more, but even there speaking time per pupil is limited.',
            'In our classes, the learner explains a plan, reads a line of code aloud, says why it failed, and asks for help, all in English and all for a real reason. Over months, that adds up to a lot of speaking about precise ideas, which is exactly the kind university and work demand.'
          ] }
      ]
    },
    {
      id: 'district',
      tint: 'tint',
      eyebrow: 'La Molina in figures',
      h2: 'How many children and teenagers live in La Molina?',
      lede: 'INEI\'s 2025 census gives La Molina a total population of 151,360. Among the 143,899 people it counted in person, 8,435 were aged 6 to 11 and 10,681 were aged 12 to 17, so the district has more teenagers than primary-age children.',
      body: [
        { kind: 'two',
          leftH3: 'The numbers',
          left: [
            'By our own division, teenagers of 12 to 17 make up about 7.4% of the people INEI counted in La Molina and children of 6 to 11 about 5.9%. The largest group is people of 60 and over, 35,219, followed by those of 45 to 59, 30,484.',
            'INEI estimates that a further 7,461 residents were missed by the count, and reports 79,783 women and 71,577 men in the total. We quote those totals as published and never build new ones by adding INEI\'s groups.'
          ],
          rightH3: 'Where the district sits',
          right: [
            'La Molina lies at the eastern edge of the city, in a valley bordered by Ate, Cieneguilla, Pachacámac, Villa María del Triunfo and Santiago de Surco. For many families, any activity outside the district starts with a drive down one of a few main roads.',
            'A live online class avoids that drive entirely. The teenager logs in from home, the class runs, and the evening stays free for homework, sport or rest.'
          ] },
        { kind: 'source', html: 'Source: INEI, Censos Nacionales 2025, demographic indicators for Lima Metropolitana, Cuadro N.° 1 (total, counted and omitted, by sex) and Cuadro N.° 3 (counted population by age group), saved on 8 November 2026. The percentages are our own.' },
        { kind: 'p', mt: true, html: 'Spanish-speaking parents who want to plan the summer can read our guide to <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">vacaciones útiles de programación en La Molina</a>, which explains the difference between a computing workshop and a programming class. Adults and teenagers who prefer Spanish for reading can also see <a class="ag-inline-link" href="/clases-de-programacion-la-molina">clases de programación en La Molina</a>. Everything there, as here, is taught live in English.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'Inside a lesson',
      h2: 'What does a learner actually say in a live coding class?',
      lede: 'More than most parents expect. Here is the shape of a typical hour for a teenager, with the English each part asks for. The structure is ours, and mentors adapt it to the learner.',
      body: [
        { kind: 'ol', items: [
          '<strong>Recap, five minutes.</strong> The learner explains last week\'s program in two or three sentences: what it does and one thing that went wrong. The mentor listens, then asks one question.',
          '<strong>The new idea, ten minutes.</strong> The mentor introduces a concept on the shared screen, slowly, and asks the learner to predict what a short piece of code will print before running it. Predicting aloud is the key habit.',
          '<strong>Building, thirty minutes.</strong> The learner writes code while thinking aloud. When stuck, they describe the problem in English rather than just pointing; half the time, describing it is enough to solve it.',
          '<strong>Testing, ten minutes.</strong> The learner chooses a case that might break the program, says why, and runs it. This is where the reasoning gets sharp.',
          '<strong>Summary, five minutes.</strong> One sentence on what was learned, one on what is still unclear. The mentor writes a short note for parents.'
        ] },
        { kind: 'p', mt: true, html: 'For a child of seven the hour is shorter and simpler: "first", "then", "repeat", "if". For an adult, the conversation is closer to a code review at work. At every age, the learner is the one doing most of the talking about their own program, which is rare in a school English lesson.' },
        { kind: 'p', html: 'We teach in English only. A learner who reaches for a Spanish word is understood and offered the English one; nobody is corrected harshly. Our page on <a class="ag-inline-link" href="/learn-coding-and-english-together-peru">learning coding and English together in Peru</a> goes further into how the two skills support each other.' }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'School and IB',
      h2: 'Do La Molina pupils get computing or IB computer science at school?',
      lede: 'Not from the national curriculum. The CNEB has no computing area in primaria or secundaria. Schools that teach the IB Diploma or Cambridge courses may offer computer science as an examined subject, in English.',
      body: [
        { kind: 'two',
          leftH3: 'National curriculum',
          left: [
            'The CNEB treats digital skills as a cross-curricular competency that all areas share, so a pupil may use technology in many subjects but is not taught to program in any of them.',
            'Our classes add programming alongside school. They do not replace a subject, they do not award grades, and the school is always the one that decides what a pupil has achieved there.'
          ],
          rightH3: 'IB and Cambridge',
          right: [
            'According to a MINEDU release of 17 April 2026, Peru produced 2,502 IB Diploma holders in 2025, and 515 pupils in the final year at its COAR schools gained Cambridge English certificates the same year. English and international programmes are a real route for Peruvian students.',
            'For Diploma or IGCSE pupils, our courses follow the syllabus in English and leave assessment to the school, the IB or Cambridge. We are not connected with any of them, or with MINEDU or COAR.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like? A grid that destroys itself',
      lede: 'We give this lesson to teenagers of about 13 and up. It uses the Game of Life, a famous set of rules invented by the mathematician John Conway, and it teaches a bug that appears in games, simulations and spreadsheets alike: changing data while you are still reading it.',
      body: [
        { kind: 'two',
          leftH3: 'The rules',
          left: [
            'A grid of cells, each alive (#) or dead (.). In each step, a live cell with two or three live neighbours survives, and a dead cell with exactly three live neighbours comes to life. Everything else dies or stays dead. All cells change at the same moment.',
            'The learner starts with a "blinker": three live cells in a vertical line. Before writing any code, they say what should happen. The answer: it should turn into a horizontal line, then back again, for ever.'
          ],
          rightH3: 'What goes wrong',
          right: [
            'Version 1 walks over the grid and changes each cell as soon as it has decided. The top cell of the blinker has only one neighbour, so it dies. Then the middle cell counts its neighbours, and finds only one, because its upper neighbour has already been switched off.',
            'One by one, the cells read a grid that is half old and half new. The blinker vanishes completely, and no new cells are born. The rule "all cells change at the same moment" was broken without anyone noticing.'
          ] },
        { kind: 'code', label: 'Version 1: update the grid while reading it', lang: 'Python', code: V1, note: 'It prints five rows of <code>.....</code>: an empty grid. The blinker has disappeared.' },
        { kind: 'code', label: 'Version 2: build the next grid from the old one', lang: 'Python', code: V2, note: 'With the grid and the two functions from Version 1 above it, it prints <code>.....</code>, <code>.....</code>, <code>.###.</code>, <code>.....</code>, <code>.....</code>, then <code>Back after two steps: True</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 never touches the old grid while it is deciding. It counts neighbours on the old grid and writes results into a fresh one, so every cell sees the same "before". The vertical line becomes horizontal, and after a second step it is back where it started, which the program checks for us. Programmers call this keeping two buffers; the habit is <strong>read from the old, write to the new</strong>.' },
        { kind: 'p', html: 'The same bug turns up far from games: a spreadsheet formula that refers to a cell it has just changed, a program that edits a list while looping over it, a database update that reads its own half-finished work. Once a learner has watched a blinker die for this reason, they recognise the pattern everywhere.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, on squared paper.</strong> Draw the blinker and apply the rules by hand, writing the next grid on a new sheet. Then try doing it on the same sheet with an eraser. What goes wrong?',
          '<strong>Ages 11 to 13.</strong> Run Version 1 and explain, in English, which cell died first and why the next one followed.',
          '<strong>Ages 13 to 15.</strong> Change Version 2 to run ten steps and print each one. Try a 2 by 2 block of live cells. Why does it never change?',
          '<strong>Ages 15 and over.</strong> Make the grid wrap around at the edges, so that cells on the right touch cells on the left. Write a test that shows the blinker still returns after two steps.'
        ] }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'La Molina times',
      h2: 'What time would a class be in La Molina?',
      lede: 'At the hour that suits you. Lima has not touched its clocks since 1994, and neither has India, so the mentor\'s watch always reads ten and a half hours later than yours. These rows are examples of conversion, not class slots.',
      body: [
        { kind: 'table', numCols: [], caption: 'La Molina times and the matching India time (examples only)', head: ['Peru time, La Molina', 'India time', 'Who often chooses it'], rows: [
          ['07:00', '17:30', 'A teenager on a holiday morning'],
          ['09:00', '19:30', 'A younger child in January'],
          ['12:30', '23:00', 'An adult at midday'],
          ['16:00', '02:30, next day', 'A pupil home from school'],
          ['18:30', '05:00, next day', 'A teenager after homework']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, zones America/Lima and Asia/Kolkata. The conversions are our own and hold on every date, since neither country moves its clocks.' },
        { kind: 'p', mt: true, html: 'You choose the hour in Peru time when you book, and the mentor sees it in India time. Bring a computer with a keyboard and microphone, plus a reliable line; INEI\'s April to June 2026 survey found an internet service in 84.7% of homes across Lima Metropolitana and Callao.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a La Molina learner can do, and say, at each stage',
    lede: 'Our own stages, combining code and spoken English. They place a learner in the right group and give parents a clear picture of progress.',
    table: { numCols: [], caption: 'Code and spoken English, stage by stage (ours)', head: ['Stage', 'Typical age', 'In code', 'Out loud, in English'], rows: [
      ['1. Order', '6 to 7', 'Arrange blocks so a sprite moves and speaks', '"First it walks, then it jumps."'],
      ['2. Repeat', '7 to 9', 'Make actions repeat and answer key presses', '"It repeats until the score is ten."'],
      ['3. Decide', '9 to 11', 'Write Python with if and else', '"If the answer is wrong, it asks again."'],
      ['4. Predict', '11 to 13', 'Say what code prints before running it', '"I think it prints 4, because..."'],
      ['5. Separate', '13 and up', 'Keep reading and writing apart, as in the grid lesson', '"It read the new value too early."'],
      ['6. Defend', '15 and up', 'Justify a design in IB or IGCSE work', '"I chose this because the input can be empty."']
    ] },
    left: { h3: 'For parents', ps: [
      'The right-hand column is the one to listen for at home. When a teenager starts using "because" about their own code, the reasoning has taken root.',
      'Our notes report what was built and what was explained, not minutes spent.'
    ] },
    right: { h3: 'For learners', ps: [
      'If you cannot say it, you do not quite know it yet. Say it, then type it.',
      'Read from the old, write to the new.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for La Molina',
    lede: 'Each course is live and taught in English, in a group or one to one, with a steady mentor.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'COMO / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'From about 9: typed Python, turtle drawings and simple AI.' },
        { code: 'COMO / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Building worlds with code, from blocks towards typed programs.' },
        { code: 'COMO / KIDS / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns, fractions and graphs explored in Python, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'COMO / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The first language for most teenagers, from zero.' },
        { code: 'COMO / TEEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, from a first scene to a finished game.' },
        { code: 'COMO / TEEN / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science 0478', blurb: 'The Cambridge syllabus, joinable in any month.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'University and work', courses: [
        { code: 'COMO / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'From a first script to automation and data.' },
        { code: 'COMO / ADULT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Language models, retrieval and agents, built and tested.' },
        { code: 'COMO / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The core of computer science, for students and job seekers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A week of live classes from La Molina',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'Peruvian mornings line up with Indian evenings, a busy teaching time.' },
      { time: 'Evening', l: 'Later Lima hours can be arranged; give us the time that works.' },
      { time: '1-on-1', l: 'A mentor for one learner, at a pace and hour you choose.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One teacher who gets to know the learner\'s voice and habits.' },
      { h3: 'Talk, then type', p: 'Every new idea is said aloud before it becomes code.' },
      { h3: 'Hands on', p: 'Learners build and test in every lesson.' },
      { h3: 'Age-matched', p: 'Children with children, teenagers with teenagers.' },
      { h3: 'Parent notes', p: 'Short updates on what was built and said.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Learners who keep going build real projects. Here are a few from our older students; see more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families and learners, unchanged.',

  fees: {
    h2: 'Fees for families in La Molina',
    lede: 'Fees are shown and charged in US dollars, monthly, to a card. When the card is in soles, the bank applies its own exchange rate to each charge, so what you see on the statement can differ slightly from month to month.',
    free: ['A free first class', 'A first program, explained aloud', 'No card needed to book'],
    group: ['Fifteen to twenty learners matched by age', 'One mentor throughout', 'Two live classes a week', 'Monthly; leave at the end of any month'],
    one: ['A mentor for one learner', 'Pace set by the learner', 'Days and times you pick']
  },

  faq: {
    eyebrow: 'La Molina families ask',
    h2: 'Coding classes in La Molina: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All classes are live, online and taught only in English. Mentors talk plainly, tune pace and pronunciation to the person in front of them, and give time to reply, so a learner who reads English well but speaks it hesitantly can take part fully. That speaking practice is one of the benefits.' },
      { q: 'My teenager reads English well but is shy about speaking. Will this help?', a: 'Usually, yes. In a coding class the learner speaks about something concrete, their own program, in short sentences, with a patient mentor. That is easier than open conversation, and it builds confidence quickly. One-to-one classes suit the shyest learners at first.' },
      { q: 'What age can my child start?', a: 'From 6, with Scratch blocks that need little reading or typing. Around 9, typing Python becomes realistic. Older learners go straight to Python or Java.' },
      { q: 'When are classes in La Molina time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru on every date, so 16:00 in La Molina is 02:30 the next day in India.' },
      { q: 'Is there help for IB or IGCSE computer science?', a: 'There is. Diploma students at either level and Cambridge 0478 candidates follow their syllabus with us in English. Grades, coursework marks and exam results stay with the school, the IB or Cambridge; our job is understanding.' },
      { q: 'Do you have premises in La Molina?', a: 'No. We have no centre anywhere in Lima. Every class is live over video with a mentor based in India, so nobody has to drive out of the district.' },
      { q: 'Does my child get to use AI in lessons?', a: 'Later, and only what their age allows. A child first works the problem through without help. Claude\'s terms require users of 18 or more, and ChatGPT expects parental consent under 18, so we keep children away from adult chatbot accounts.' },
      { q: 'Are you linked to any school, university or the municipality?', a: 'No link of any kind: not with the Municipalidad de La Molina, MINEDU, COAR, the IB, Cambridge, a university or a school. Finishing a course earns our own completion certificate, which is not a Peruvian qualification.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars. With a card in soles, your bank converts each charge, so the amount on the statement can vary a little. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for La Molina families weighing up coding in English.',
    items: [
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'English and computing in Peruvian school, in detail.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our guide for the whole country.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson, start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Our case for thinking before tools.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools suit which ages.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science tuition', p: 'More on Diploma computer science.' }
    ]
  },

  start: {
    h2: 'Book a free first class from La Molina',
    lede: 'During the free class the learner writes a small program and explains it to the mentor. That tells us two things at once: where to start in code, and how much support the learner needs in spoken English. You then get a suggested course, group or one-to-one, and an hour that fits.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'Lessons happen live on video in English, led from India. WhatsApp is quickest; English messages get the fastest answer.',
    formNote: 'Free; no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'English and coding', links: [
        { href: '/learn-coding-and-english-together-peru', label: 'Coding and English together' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium coding, Lima' },
        { href: '/international-school-families-lima-coding', label: 'International-school families' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding in Peru' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Read from the old, write to the new'
  },

  personalityCss: `
.ag-root.ag-como .ag-hero h1 { max-width: 16ch; letter-spacing: -0.012em; }
.ag-root.ag-como .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-como .ag-table td:last-child { font-style: italic; }
.ag-root.ag-como .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-como .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'EF EPI 2025 Peru page (skills, age groups, region and city); INEI Censos Nacionales 2025 (Lima Metropolitana indicators, Cuadros 1 and 3); MINEDU, Currículo Nacional de la Educación Básica (secundaria plan of studies); MINEDU press release of 17 April 2026 on COAR IB results; INEI TIC en los Hogares II Trimestre 2026; IANA tz database. All read 8 to 10 November 2026.',
    localProject: 'An original Python lesson on the Game of Life blinker: updating the grid in place makes each cell read half-updated neighbours, and the blinker vanishes (five rows of "....."); building the next grid from the unchanged old one prints ".###." in the middle row and "Back after two steps: True". Lesson family: read from the old grid, write to a new one (double buffering).',
    requiredMentions: ['Back after two steps: True', 'read from the old, write to the new', 'Read from the old, write to the new', '540 in reading and 480 in speaking', 'Age 18 to 20', '10,681 were aged 12 to 17', '151,360', 'The blinker has disappeared', 'If you cannot say it, you do not quite know it yet'],
    sources: [
      { claim: 'EF EPI 2025 Peru: reading 540, writing 514, listening 499, speaking 480; age 18 to 20 469, 21 to 25 540, 26 to 30 559, 31 to 40 537, 41+ 509; Peru 519; Lima region 544; Lima city 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'La Molina 151,360 total (143,899 counted, 7,461 omitted; 79,783 women, 71,577 men); by age 6 to 11 8,435, 12 to 17 10,681, 45 to 59 30,484, 60 and over 35,219.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Secundaria JER: Inglés 3 of 35 weekly periods; 45-minute period; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025; 515 COAR final-year pupils with Cambridge English certificates.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Lima Metropolitana (with Callao) 84.7% of households with internet, II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any EF figure for children or for La Molina specifically: EF tests adults and reports cities, not districts; the page says so.',
      'A cause for the low 18 to 20 score: EF gives none; the page offers only a hedged reading.',
      'Names or counts of IB or bilingual schools in La Molina: commercial directories only; not used.',
      'Income descriptions of La Molina: not used, by rule.',
      'Commute or traffic times: argued without figures.'
    ]
  }
};
