// SHIP: market | Coding after 50 in Peru, in English: one to one, at your pace, for home and family projects | a mail merge: str.format(**dict), a KeyError that stops the batch, and checking gaps first
'use strict';
// Coding for adults over 50 in Peru (ag- English door, Peru cluster row PE006, hubGroup ages; alloc coov, #305301).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: people of 50 and over in Peru who read English: Peruvian professionals planning the next decade, retirees,
// foreign retirees living in Peru, and grandparents who want to code with grandchildren. Targets "coding for adults over 50
// peru", English twin of "cursos para adultos mayores en lima".
// Spine (different from the Spanish twin, which is about basic computing at CIAMs, Ley 30490 and a first class at 65): is
// 50 or 60 too late (no, and how adults learn); how many Peruvian homes include someone of 60 or more (INEI 2026, the
// primary-source table) and what that means for learning with grandchildren; education and work after 60; an original
// lesson on a family mail merge; what to build; how one-to-one classes run; the clock. No health or disability data.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-for-adults-over-50-peru/;
// fetched or copied 9 November 2026; quotes string-matched in the raw text):
//  - INEI press note, 30 de setiembre de 2026 (inei-1450977.html/.txt, https://www.gob.pe/institucion/inei/noticias/
//    1450977-el-45-6-de-los-hogares-del-pais-tenia-al-menos-una-persona-adulta-mayor-entre-abril-y-junio-de-2026), from the
//    informe técnico Situación de la Población Adulta Mayor (ENAHO): "el 45,6% de los hogares del país tenía al menos una
//    persona de 60 y más años de edad, porcentaje superior en 1,0 punto porcentual, respecto a similar periodo del año
//    anterior (44,6%)"; "en Lima Metropolitana, el 49,7% de los hogares contaba con al menos un adulto mayor, porcentaje
//    superior en 1,6 puntos porcentuales, con relación a similar periodo del año anterior (48,1%)"; "En el área rural, el
//    48,5% de los hogares cumplió con esta condición y, en el resto urbano, el porcentaje alcanzó el 41,6%, con aumentos de
//    2,0 y 0,5 puntos porcentuales"; "el 50,2% correspondió a hogares de tipo nuclear"; "El 26,1% correspondió a hogares
//    unipersonales"; "la población de 60 y más años de edad con educación superior creció de 21,6% a 23,4%"; "la población
//    con nivel inicial o sin nivel educativo disminuyó en 2,3 puntos porcentuales, al pasar de 12,5% a 10,2%". The note's
//    health and disability paragraphs are not used (brief rule 10). The official's name in the note is not printed.
//  - INEI press note, 15 de octubre de 2026 (inei-1457276.txt): Censos Nacionales 2025, "Índice de Envejecimiento de 86,9,
//    es decir, por cada 100 menores de 15 años existen 87 adultos mayores (60 y más años), superando el promedio nacional
//    (65,1)" (Moquegua, "el segundo más alto del país").
//  - INEI press note, 30 de setiembre de 2024 (inei-1031021.txt), EPEN abril-mayo-junio 2024: "Por grupos etarios, destacó
//    la participación de la población de 60 a 69 años de edad (68,3%)."
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro 2.1: "41 a 59 años 76,5 79,9 81,9 86,0"; "60 y más 40,8 47,3
//    50,2 56,7"; Cuadro 3.3 "60 y más 81,5 84,4 85,1 85,2".
//  - EF EPI 2025 Peru page (ef_peru.raw): "ageGroup5Score":509, "ageGroup5ProficiencyBand":"moderate" (41 and over).
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own calculation: 56.7 - 40.8 = 15.9 points (internet use at 60+, 2023 to 2026), not printed as an INEI figure.
// Our own example (invite_v1.py, invite_v2.py in the src-pages folder, python3 -I; names invented): v1 prints "Dear Rosa,
// lunch is on Sunday 10 January 2027 at our house." then stops with "KeyError: 'place'"; v2 prints the Rosa line, "Not sent
// to Jorge because of missing place", the Lucía line, "2 of 3 invitations ready". 10 January 2027 is a Sunday (checked).
// Lesson family: a mail merge with str.format(**dict); one missing field raises KeyError and stops the whole batch; the
// fix checks every record for gaps first and reports them by name.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const GUESTS = [
  'template = "Dear {name}, lunch is on {date} at {place}."',
  'guests = [',
  '    {"name": "Rosa", "date": "Sunday 10 January 2027", "place": "our house"},',
  '    {"name": "Jorge", "date": "Sunday 10 January 2027"},',
  '    {"name": "Lucía", "date": "Sunday 10 January 2027", "place": "our house"},',
  ']'
].join('\n');

const V1 = GUESTS + '\n' + [
  'for g in guests:',
  '    print(template.format(**g))'
].join('\n');

const OUT1 = [
  'Dear Rosa, lunch is on Sunday 10 January 2027 at our house.',
  'Traceback (most recent call last):',
  '  ...',
  'KeyError: \'place\''
].join('\n');

const V2 = GUESTS + '\n' + [
  'needed = ["name", "date", "place"]',
  'ready = 0',
  'for g in guests:',
  '    gaps = [k for k in needed if k not in g]',
  '    if gaps:',
  '        print("Not sent to", g["name"], "because of missing", ", ".join(gaps))',
  '    else:',
  '        print(template.format(**g))',
  '        ready += 1',
  'print(ready, "of", len(guests), "invitations ready")'
].join('\n');

const OUT2 = [
  'Dear Rosa, lunch is on Sunday 10 January 2027 at our house.',
  'Not sent to Jorge because of missing place',
  'Dear Lucía, lunch is on Sunday 10 January 2027 at our house.',
  '2 of 3 invitations ready'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for adults over 50' },
  slug: 'coding-for-adults-over-50-peru',
  code: 'coov',
  accent: '#305301',
  accentRationale: 'Coding for adults over 50 in Peru: a deep olive-grove green #305301, the colour of the old olive groves of the southern coast, unhurried and warm; contrast 7.21 on the paper #FBF8F2 and above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for adults over 50 in Peru',
  title: 'Coding for Adults Over 50 in Peru: Live Classes in English',
  description: 'Coding for adults over 50 in Peru: live online classes in English, one to one or in a group, at your own pace. Python, websites, spreadsheets and AI tools.',
  ogDescription: 'Is 50 or 60 too late to learn to code? How many Peruvian homes include someone over 60 (INEI 2026), learning alongside grandchildren, a family mail-merge lesson in Python, and how unhurried one-to-one classes in English work.',
  twitterDescription: 'Live coding classes in English for people over 50 in Peru, one to one or in a group, at your own pace and hours.',
  pageName: 'Coding for Adults Over 50 in Peru',
  webPageDescription: 'A guide for people of 50 and over in Peru who want to learn coding live and in English, built from INEI press notes of 2024 and 2026 on older adults and the 2025 census, INEI household technology data for 2026, EF EPI 2025 and the tz database, with an original Python lesson on a family mail merge.',
  courseDescription: 'Live online coding and technology classes for adults aged 50 and over in Peru, taught in English by patient mentors based in India: Python, websites, spreadsheets and data, AI tools and maths for pleasure, one to one or in a group of fifteen to twenty, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Adults over 50',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#late', label: 'Too late?' },
    { href: '#homes', label: 'Homes and family' },
    { href: '#lesson', label: 'Invitations lesson' },
    { href: '#build', label: 'What to build' },
    { href: '#time', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Adults of 50 and over &middot; Live online, in English',
  h1: 'Coding for adults over 50 in Peru',
  lede: 'Learning to code after 50 is less about catching up and more about finally having the time to do it properly. This page is for people in Peru who read English, whether you are planning the next stage of your working life, have recently retired, have moved to Peru from abroad, or want to build something with a grandchild. It covers whether it is too late (it is not), what Peruvian homes look like today, a first Python lesson with a practical use, and how unhurried live classes work.',
  secondaryCta: { href: '#lesson', label: 'Try the invitations lesson' },
  wa: 'Hello Modern Age Coders, I am over 50, I live in Peru and I would like to learn coding in English. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; learners from 6 to 67 &middot; one mentor who adjusts to your pace and accent',
  spec: [
    ['For', 'Adults of 50 and over'],
    ['Learn', 'Python, websites, data, AI tools'],
    ['Best format', 'One to one, at your pace'],
    ['Also', 'Groups of fifteen to twenty adults'],
    ['Peru time', 'Mornings, afternoons or evenings'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In a few lines',
  capsule: 'Modern Age Coders teaches coding to adults aged 50 and over in Peru. Lessons happen live over video, in English, with a patient mentor based in India who explains each step, repeats it whenever asked and goes at your pace. Learners write Python, build simple websites, organise their own data and learn to use AI tools with judgement. Most people over 50 choose one-to-one classes; groups of fifteen to twenty adults are also available, at an hour that suits you in Peru time. The first class is free.',

  picks: {
    eyebrow: 'Where most begin',
    h2: 'Three courses adults over 50 in Peru start with',
    lede: 'One for programming itself, one for the data you already keep, and one for using AI tools without being fooled by them.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'COOV / 01', title: 'Python from Zero', note: 'Programming from the very first line, with nothing assumed. Small, useful programs from week one: lists, letters, sums and files. One to one, it moves exactly as fast as you do.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'COOV / 02', title: 'Data and AI without Code', note: 'For anyone who keeps lists, accounts or records in a spreadsheet. Excel, Google Sheets and Power BI, with AI help, to answer real questions about your own figures.' },
      { course: 'ai-tools-mastery-complete-college', code: 'COOV / 03', title: 'AI Tools Mastery', note: 'ChatGPT, Claude and similar tools used with care: asking clearly, checking every answer, spotting invented facts and keeping private information private.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who are coding classes for adults over 50 for?',
      lede: 'People in Peru, aged 50 and over, who can follow spoken English and want to make something with a computer rather than only use it. We teach learners aged 6 to 67.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Planning the next decade', p: 'Professionals in their fifties who want new skills before retirement, or a second career that uses data, automation or simple websites. INEI found 68.3% of Peruvians aged 60 to 69 active in the labour market in April to June 2024.' },
          { h3: 'Retired and curious', p: 'People who finally have the time to learn something properly, for the pleasure of it: a puzzle a day, a program that does something useful at home, a website for a hobby or a family history.' },
          { h3: 'Living in Peru from abroad', p: 'Foreign retirees and long-stay residents who would rather learn in English. The classes are online, so nothing depends on where in Peru you live, from Lima to Arequipa or the Sacred Valley.' }
        ] },
        { kind: 'p', mt: true, html: 'These classes assume you can already use a computer for email and the web. If you are starting with the very basics, the municipal centres for older adults described on our Spanish page are a better first step: <a class="ag-inline-link" href="/cursos-de-tecnologia-para-adultos-mayores-peru">Leer en español: cursos de tecnología para adultos mayores</a>. Come to us once you want to go further.' }
      ]
    },
    {
      id: 'late',
      tint: 'tint',
      eyebrow: 'Too late?',
      h2: 'Is 50 or 60 too late to learn to code?',
      lede: 'No. Programming is learnt by thinking carefully and practising regularly, and people over 50 often do both better than younger learners. What changes is how the teaching should be paced.',
      body: [
        { kind: 'two',
          leftH3: 'What older learners bring',
          left: [
            'Patience, and a lifetime of solving real problems. A program is a set of precise instructions, and people who have run a household, a shop or a department already know how to break a job into steps and notice when one is missing.',
            'A clear reason to learn. Younger students often code because they are told to; adults over 50 usually come with a project in mind. That makes every class immediately useful, which is the strongest motivation there is.'
          ],
          rightH3: 'What we change for them',
          right: [
            'Smaller steps and more repetition. A mentor never moves on until you have done the step yourself, and will happily explain it a third time in different words. Written notes after every class mean nothing depends on memory.',
            'Comfortable screens and pace. Larger text, a slower speaking pace and short breaks are normal. You decide how much homework you want, including none. Nobody is compared with anyone else.'
          ] },
        { kind: 'p', mt: true, html: 'English is rarely the obstacle people fear. EF\'s English Proficiency Index 2025 places Peruvians aged 41 and over in its "moderate" band, at 509, and our mentors adapt their pace and accent to each learner. Programming itself uses a small set of English words, such as <code>if</code>, <code>for</code> and <code>print</code>, which quickly become familiar.' }
      ]
    },
    {
      id: 'homes',
      eyebrow: 'Homes and family',
      h2: 'How many homes in Peru include someone over 60?',
      lede: 'Almost half. INEI reported in September 2026 that 45.6% of Peruvian households had at least one person aged 60 or over in the second quarter of the year, and in Lima the share was close to one in two.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Households with at least one person aged 60 or over, second quarter of 2026', head: ['Area', 'Share of households, 2026', 'Change from the same quarter of 2025, as INEI reports it'], rows: [
          ['Peru', '45.6%', 'Up 1.0 point, from 44.6%'],
          ['Lima Metropolitana', '49.7%', 'Up 1.6 points, from 48.1%'],
          ['Rural areas', '48.5%', 'Up 2.0 points'],
          ['Other urban areas', '41.6%', 'Up 0.5 point']
        ] },
        { kind: 'source', html: 'Source: INEI press note of 30 September 2026, from its technical report Situación de la Población Adulta Mayor (Encuesta Nacional de Hogares, April to June 2026), read on 9 November 2026. INEI writes decimals with a comma; we use a point. "Other urban areas" is INEI\'s "resto urbano", the urban population outside Lima Metropolitana.' },
        { kind: 'two', mt: true,
          leftH3: 'Who these homes are',
          left: [
            'In homes headed by someone of 60 or more, INEI counts 50.2% as nuclear households, a couple with or without children, and 26.1% as one-person households, an older adult living alone. Both kinds of home benefit from learning that comes to you rather than requiring a journey.',
            'Peru is getting older. In its October 2026 note on the 2025 census, INEI gave a national ageing index of 65.1, meaning about 65 people aged 60 and over for every 100 children under 15; in Moquegua, the second highest, the index reached 86.9.'
          ],
          rightH3: 'Learning across generations',
          right: [
            'With so many homes shared by grandparents and grandchildren, coding can be something a family does together. A grandparent who learns Python can sit with a grandchild of 10 and build the same small game; each explains a different part.',
            'We teach both ages, though always in separate classes. Families sometimes book a grandparent one to one and a grandchild in a children\'s group, then let them compare projects at home.'
          ] },
        { kind: 'p', mt: true, html: 'Education among older Peruvians is rising too. The same INEI note reports that the share of people aged 60 and over with higher education grew from 21.6% to 23.4% between the second quarters of 2025 and 2026, while the share with only early schooling or none fell from 12.5% to 10.2%. More people now reach 60 with the habits of study that make learning to code feel natural.' }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Already online',
      h2: 'Are older Peruvians online enough to learn this way?',
      lede: 'Increasingly, yes. In INEI\'s 2026 figures, 86.0% of Peruvians aged 41 to 59 used the internet, and among those aged 60 and over the share had reached 56.7%.',
      body: [
        { kind: 'two',
          leftH3: 'The trend',
          left: [
            'Internet use among people of 60 and over has risen every year in INEI\'s quarterly survey, from 40.8% in the second quarter of 2023 to 56.7% in the same quarter of 2026. By our own subtraction, that is almost 16 percentage points in three years.',
            'Mobile phones are nearly universal at that age: INEI counts 85.2% of people of 60 and over using one in 2026. A phone, though, is the one device we do not recommend for coding.'
          ],
          rightH3: 'What you need',
          right: [
            'Any reasonably recent laptop or desktop will do, on a reliable connection, ideally with a headset or decent speakers. A larger screen helps a great deal; so does a proper mouse rather than a trackpad.',
            'Nothing needs installing before the first class. If software is needed later, it is free and the mentor installs it with you, step by step, on a shared screen.'
          ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A first lesson',
      h2: 'What does a first lesson look like? Writing family invitations with Python',
      lede: 'Many of our older learners begin with this lesson, because it is useful the same day. Python fills in a letter for each guest from a list, a mail merge, and it teaches a lesson about checking that goes far beyond invitations. The names are invented.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'One short template with three gaps in curly brackets: <code>{name}</code>, <code>{date}</code> and <code>{place}</code>. One list of guests, each with those three details. One loop that fills in the template for every guest.',
            'Version 1 is only two lines once the list is written. It prints Rosa\'s invitation perfectly, and then the program stops with an error message.'
          ],
          rightH3: 'What went wrong',
          right: [
            'Jorge\'s entry has no <code>place</code>. Python cannot fill a gap it has no information for, so it raises a <code>KeyError</code> and stops. Notice who else suffers: Lucía\'s details were complete, but her invitation is never printed, because the program never reached her.',
            'Version 2 checks each guest for missing details first. Complete entries are printed; incomplete ones are named, with what is missing, and the program carries on to the end and reports how many are ready.'
          ] },
        { kind: 'code', label: 'Version 1: fill in every invitation', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'From our run with Python 3, with the middle of the error message shortened. Rosa\'s letter, then a stop at Jorge.' },
        { kind: 'code', label: 'Version 2: look for gaps before printing', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output of our run. Two letters printed, one guest named for checking.' },
        { kind: 'p', mt: true, html: 'The idea underneath is one that every careful person already knows: <strong>one missing detail should not stop the whole job, and it should never be filled in by guesswork</strong>. Version 2 does not invent a place for Jorge. It tells you, by name, exactly whose details to check, which is what a good assistant would do.' },
        { kind: 'p', html: 'From here, learners usually make the program their own: invitations read from a spreadsheet instead of typed in, letters saved as separate files, or the same idea used for receipts, reminders or a club newsletter. Each step adds one new piece of Python, and each one is useful at home.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Change the words.</strong> Rewrite the template for a birthday or a club meeting and run it again.',
          '<strong>Add a guest.</strong> Add a fourth person with no date at all. Before running it, say what Version 2 will print.',
          '<strong>Add a detail.</strong> Put <code>{time}</code> in the template. Which guests now fail, and why does Version 2 still finish?',
          '<strong>Explain it.</strong> In two sentences, tell your mentor why Lucía never received her invitation from Version 1.'
        ] }
      ]
    },
    {
      id: 'build',
      tint: 'tint',
      eyebrow: 'What to build',
      h2: 'What can you build after 50?',
      lede: 'Whatever is useful to you. These are projects our adult learners commonly choose; each takes a few weeks, and each teaches a real part of programming.',
      body: [
        { kind: 'three', cells: [
          { h3: 'For the household', p: 'A program that totals monthly spending from a bank export by category; a reminder list that sorts itself by date; a small tool that renames hundreds of photos by the day they were taken.' },
          { h3: 'For family and friends', p: 'A family-history website with photographs and stories; invitations and letters merged from a list, like the lesson above; a simple quiz game to play with grandchildren.' },
          { h3: 'For the mind', p: 'Number puzzles solved in Python, probability tested with simulations, or a return to the mathematics you once enjoyed at school, now with a computer to check every idea.' }
        ] },
        { kind: 'p', mt: true, html: 'AI tools can help with all of these, once you can judge their work. We teach adults to treat an AI answer the way they would treat advice from a confident stranger: useful, often right, and always worth checking. Never give an AI tool passwords, bank details or private family information. For adults who want coding for work rather than home, our page on <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">cursos de programación para adultos</a> covers that path.' }
      ]
    },
    {
      id: 'time',
      eyebrow: 'Peru time',
      h2: 'When are the classes in Peru time?',
      lede: 'At a time you choose. Whatever the season, your mentor in India is ten and a half hours later in the day than you are in Peru, because neither country moves its clocks. The rows below just translate one clock into the other.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours an older learner might choose, and the mentor\'s time in India', head: ['Peru time', 'India time', 'When people like it'], rows: [
          ['09:00', '19:30', 'After breakfast, fresh for thinking'],
          ['10:30', '21:00', 'Mid-morning, before errands'],
          ['16:00', '02:30, next day', 'A quiet afternoon at home'],
          ['18:30', '05:00, next day', 'Early evening'],
          ['20:30', '07:00, next day', 'After dinner, for night owls']
        ] },
        { kind: 'source', html: 'Clock rules from the IANA time zone database: America/Lima has kept UTC minus 5 since Peru last used summer time in 1994, and Asia/Kolkata keeps UTC plus 5:30. We did the arithmetic.' },
        { kind: 'p', mt: true, html: 'You book on your own clock and the mentor sees the same moment in India time. Because neither country changes its clocks, your class stays at the same hour all year. Lima readers can find more on our <a class="ag-inline-link" href="/english-medium-coding-classes-lima">coding classes in English for Lima</a> page, and every Peru page is gathered on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will I notice my progress?',
    lede: 'By what you can make and explain, not by tests. These stages are ours, and there is no deadline on any of them.',
    table: { numCols: [], caption: 'Our stages for learners over 50', head: ['Stage', 'Often after', 'You can', 'You can explain'], rows: [
      ['1. First program', 'One class', 'Run a program that prints a message you chose', 'What each word in it does'],
      ['2. Lists', 'Two to four weeks', 'Keep a list and go through it item by item', 'What a loop is, in your own words'],
      ['3. Decisions', 'One to two months', 'Make a program act differently when something is missing', 'Why the program checked first'],
      ['4. Your data', 'Two to three months', 'Read your own spreadsheet into Python and total it', 'Where the numbers came from'],
      ['5. A project', 'Three to five months', 'Finish a small tool you use every week', 'How you tested it'],
      ['6. Sharing', 'Six months onwards', 'Publish a simple website or share a tool with family', 'How someone else could change it']
    ] },
    left: { h3: 'For you', ps: [
      'Stage 3 is the invitations lesson. Once it clicks, you will start noticing missing details everywhere.',
      'Keep your mentor\'s notes in one folder. Rereading them is often the quickest way forward.'
    ] },
    right: { h3: 'For your family', ps: [
      'Ask to see what was built this month. It is usually something they will want to use too.',
      'A shared project with a grandchild is a fine stage 5.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses adults over 50 choose',
    lede: 'Each live and in English with one mentor throughout, and every one can be taken one to one.',
    bands: [
      { num: 'I', h3: 'Making things', sub: 'Websites, design, automation', courses: [
        { code: 'COOV / MAKE / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'Websites from scratch', blurb: 'HTML and CSS to build and publish your own pages.' },
        { code: 'COOV / MAKE / 02', slug: 'canva-ai-design-masterclass', title: 'Canva and AI design', blurb: 'Invitations, posters and albums designed properly.' },
        { code: 'COOV / MAKE / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Let Python do the repetitive jobs on your computer.' }
      ] },
      { num: 'II', h3: 'Maths for pleasure', sub: 'At your own pace', courses: [
        { code: 'COOV / MATHS / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Chance and data, explained and tested.' },
        { code: 'COOV / MATHS / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Finance mathematics', blurb: 'Interest, investment and risk, worked through calmly.' },
        { code: 'COOV / MATHS / 03', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Calculus and linear algebra, revisited or met for the first time.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Data and AI', courses: [
        { code: 'COOV / MORE / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and charts for your own records.' },
        { code: 'COOV / MORE / 02', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Keep and query collections properly.' },
        { code: 'COOV / MORE / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How AI models work, and how to build with them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes run for learners over 50',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'A Peru morning is the Indian evening, a calm hour for a class.' },
      { time: 'Afternoons', l: 'Afternoons and evenings in Peru work too; tell us your hour.' },
      { time: '1-on-1', l: 'You and one mentor, at a pace and hour set entirely by you.' }
    ],
    cells: [
      { h3: 'One patient mentor', p: 'The same person every class, who learns how you like to learn.' },
      { h3: 'Unhurried English', p: 'Slow, clear speech, and every step shown on screen.' },
      { h3: 'You type', p: 'You write every line yourself, with help at your side.' },
      { h3: 'Adults together', p: 'Group classes are for adults only, at a similar level.' },
      { h3: 'Written notes', p: 'A summary and the code after each class, to keep.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty adults, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Our students, of every age, build working software. Some examples are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews from our students and families on Google, exactly as they were posted.',

  fees: {
    h2: 'Fees for adults in Peru',
    lede: 'Fees are in US dollars, paid monthly by card. Your bank converts each payment into soles at the rate of the day, so what you see on the statement may change a little between months.',
    free: ['A free first class', 'Your first program, written by you', 'No card asked'],
    group: ['Fifteen to twenty adults of a similar level', 'One mentor throughout', 'Two live classes a week', 'Monthly, and you may stop at any time'],
    one: ['You and a single mentor', 'Your own pace and projects', 'Hours you choose']
  },

  faq: {
    eyebrow: 'People over 50 ask',
    h2: 'Questions people over 50 in Peru ask us',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our lessons are given live online, and English is the only teaching language. Your mentor talks slowly, adjusts to the way you speak and how quickly you work, and puts each step on a screen you both see. A Spanish-language page describes the classes for older adults, but the lessons themselves are always in English.' },
      { q: 'Am I too old to learn to code?', a: 'No. We teach people aged 6 to 67, and many of our adult learners start after 50. Programming rewards patience and careful thinking, which most people over 50 have in abundance. We simply pace the teaching to suit you, with smaller steps and written notes after every class.' },
      { q: 'Do I need to know anything first?', a: 'You should be comfortable using email and a web browser. Nothing else is assumed. If you are just starting with computers, a basic course first, such as one at a municipal centre for older adults, will make our classes far easier.' },
      { q: 'One to one or a group?', a: 'Most learners over 50 choose one to one, because the pace is entirely theirs and questions are never rushed. Groups of fifteen to twenty adults suit people who enjoy company and a regular rhythm. You can switch at any time.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With India 10 hours 30 minutes later than Peru on every date, 10:30 for you is 21:00 for your mentor.' },
      { q: 'What will I actually make?', a: 'Things you use: letters and invitations merged from a list, a household spending summary, a reminder tool, a family website, puzzles and games. The first useful program usually comes within the first few classes.' },
      { q: 'Can I learn alongside my grandchild?', a: 'Yes, though in separate classes: adults learn with adults, children with children. Many families book both and then build the same small project at home, each explaining their part to the other.' },
      { q: 'Will I use ChatGPT or other AI tools?', a: 'If you wish, once you can check their work. We teach you to ask clearly, verify every answer and never share passwords, bank details or private family information with an AI tool.' },
      { q: 'Are you connected with a municipality or the government?', a: 'No. Modern Age Coders is an independent online school with mentors in India. We are not connected with any municipality, ministry or Peruvian institution, and our certificate of completion is our own, not a Peruvian qualification.' },
      { q: 'How do I pay from Peru?', a: 'By card, once a month, in US dollars. Your bank turns the payment into soles at its own rate, so the amount can vary slightly. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for adult learners',
    lede: 'Pages to help you decide where to begin.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class is like, minute by minute.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why we teach reasoning first.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our students have made.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus, in one list.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'Every page we have for Peru.' },
      { href: '/english-medium-coding-classes-lima', label: 'Coding in English in Lima', p: 'Classes in English for all ages in Lima.' }
    ]
  },

  start: {
    h2: 'Book a free first class, at your own pace',
    lede: 'Your free class is calm and practical. A mentor helps you write and run your first small program, answers every question, and gets a sense of what you would like to build and how you like to learn. Afterwards you receive a suggestion: a course, one to one or a group, and an hour that suits you.',
    readFirst: 'Would you like to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'All lessons are live video from India, in English. For the fastest reply, write to us on WhatsApp in English.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For adult learners', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/cursos-de-tecnologia-para-adultos-mayores-peru', label: 'Leer en español' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' }
      ] }
    ],
    bottomRight: 'Check every guest before you send any'
  },

  personalityCss: `
.ag-root.ag-coov .ag-hero h1 { max-width: 18ch; letter-spacing: -0.008em; }
.ag-root.ag-coov .ag-capsule { border-left-width: 6px; }
.ag-root.ag-coov .ag-section p { line-height: 1.75; }
.ag-root.ag-coov .ag-table caption { text-align: left; }
.ag-root.ag-coov .ag-steps li { line-height: 1.75; }
`,

  dossier: {
    curriculumAuthority: 'INEI press notes of 30 September 2026 (Situación de la Población Adulta Mayor, ENAHO II trimestre 2026), 15 October 2026 (Censos Nacionales 2025, ageing index) and 30 September 2024 (EPEN, labour participation 60 to 69); INEI TIC en los Hogares II Trimestre 2026 (Cuadros 2.1 and 3.3); EF EPI 2025 Peru page (41 and over); IANA tz database. Read 9 November 2026.',
    localProject: 'An original first Python lesson for adults over 50: a family-lunch mail merge with str.format(**guest) prints Rosa\'s invitation and stops with KeyError: \'place\' at Jorge, so Lucía is never reached; the fix checks every guest for missing fields first, prints the complete ones, names Jorge, and reports 2 of 3 invitations ready. Lesson family: mail merge, KeyError stopping a batch, checking gaps before acting.',
    requiredMentions: ['Not sent to Jorge because of missing place', '2 of 3 invitations ready', 'Lucía never received her invitation from Version 1', 'one missing detail should not stop the whole job, and it should never be filled in by guesswork', 'Households with at least one person aged 60 or over, second quarter of 2026', 'Up 1.6 points, from 48.1%', 'national ageing index of 65.1', 'grew from 21.6% to 23.4%', 'Leer en español: cursos de tecnología para adultos mayores', 'Check every guest before you send any'],
    sources: [
      { claim: 'Households with a person 60+: Peru 45.6% (44.6% in 2025), Lima Metropolitana 49.7% (48.1%), rural 48.5% (+2.0), other urban 41.6% (+0.5); 50.2% nuclear and 26.1% one-person among households headed by 60+; higher education among 60+ from 21.6% to 23.4%; none or early schooling from 12.5% to 10.2% (II trimestre 2026).', url: 'https://www.gob.pe/institucion/inei/noticias/1450977-el-45-6-de-los-hogares-del-pais-tenia-al-menos-una-persona-adulta-mayor-entre-abril-y-junio-de-2026' },
      { claim: 'Censos Nacionales 2025: national ageing index 65.1; Moquegua 86.9, second highest.', url: 'https://www.gob.pe/institucion/inei/noticias/1457276-censos-nacionales-2025-moquegua-es-la-segunda-region-mas-envejecida-del-peru-con-un-indice-de-86-9' },
      { claim: '68.3% of people aged 60 to 69 active in the labour market (April to June 2024).', url: 'https://www.gob.pe/institucion/inei/noticias/1031021-aumenta-a-47-0-la-poblacion-adulta-mayor-que-hace-uso-de-internet' },
      { claim: 'Internet use 41 to 59: 86.0%; 60 and over: 40.8% (2023) to 56.7% (2026); mobile phone use 60 and over 85.2% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: ages 41 and over score 509, moderate band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Health, disability and insurance figures from the same INEI notes: excluded under the brief (no health data).',
      'Naming the INEI official quoted in the press notes: not printed.',
      'That coding protects memory or health in later life: no source and health claims are out of scope; not made.',
      'Any affiliation with a municipality, CIAM, ministry or Peruvian institution: none, and the page says so.',
      'Spanish-language teaching: none; the page says the classes are in English only.'
    ]
  }
};
