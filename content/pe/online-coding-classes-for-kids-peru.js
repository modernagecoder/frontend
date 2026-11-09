// SHIP: market | Online coding for children 6 to 12 in Peru, in English: choosing a live class well | string repetition builds a centred pyramid; odd numbers add up to a square
'use strict';
// Online coding classes for kids in Peru (ag- English door, Peru cluster row PE002, hubGroup ages; alloc coki, #516000).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: English-reading families in Peru with children of 6 to 12: bilingual and international-school families,
// families who moved to Peru, and Peruvian parents who read English and want coding plus English practice.
// Targets: "online coding classes for kids peru", the English twin of "clases de programación para niños online".
// Spine (different from the Spanish twin, which walks through devices, siblings and a class at home): how to choose a
// live online class for a child (live versus recorded, group versus one to one, what to ask in a free class), how
// Peruvian children aged 6 to 11 get online (INEI, three tables of the same bulletin, one age band), where the primaria
// years sit (Ley 28044, Reglamento, normative age), what school does with computing, AI age rules, and the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-market/src/ and facts-school/src/;
// read 9 November 2026; every quote string-matched in the raw text):
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026, N° 03 Setiembre 2026 (inei_tic_iit2026.txt,
//    https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf): Cuadro 2.1 row 6 a 11 años
//    "60,1 61,7 61,5 68,2 6,7" (internet use, 2023 2024 2025 2026, change); text "el uso de Internet fue menor entre los
//    niños de 6 a 11 años (68,2%)". Cuadro 2.6 (internet through a mobile phone, % of internet users) "6 a 11 años 54,7
//    50,4 43,3 48,5 5,2"; text "entre los niños de 6 a 11 años con un 48,5%". Cuadro 3.3 (uses a mobile phone) row
//    "67,0 67,7 65,3 67,8 2,5"; text "en los niños de 6 a 11 años, con una cobertura de 67,8%". "el 36,4% de los hogares
//    del país disponía de al menos una computadora".
//  - Ley 28044 (FACTS 5): "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y dura seis años."
//  - D.S. 011-2012-ED, Reglamento (FACTS 10): "Atiende a niños y niñas a partir de los 6 años de edad."
//  - MINEDU, Edades normativas (FACTS 13): "Se considera la edad normativa al 31 de marzo de cada año."
//  - MINEDU press release 16 March 2026 (FACTS 17): "53 631 colegios de Educación Básica Regular de todo el país volvieron a
//    abrir sus puertas para recibir a 6 225 000 estudiantes, en la apertura del año escolar 2026."
//  - CNEB (FACTS 33, 57): "Competencias transversales a las áreas: Se desenvuelve en"; primaria hours "Matemática 5 5 4 4 4 4
//    Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3"; no computing area in the plan of studies.
//  - MINEDU press release on ENLA 2025 (FACTS 59): "serán evaluados estudiantes de 4.° grado de primaria en Lectura y Matemática".
//  - AI tool ages (content/ai-tool-age-audit.json, vendor terms): ChatGPT "If you are under 18 you must have your parent or
//    legal guardian's permission to use the Services."; Claude "You must be at least 18 years old".
//  - Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv): India 10 h 30 min ahead.
//  - Blocked: scratch.mit.edu statistics bundle returned 403 on 9 November 2026; not retried, Scratch figures not used.
// Our own calculations: none beyond clock conversions (Peru hour + 10:30) and the brick totals printed by the code.
// Our own example (pyramid_v1.py, pyramid_v2.py, pyramid_v3.py in src-pages/online-coding-classes-for-kids-peru/, run with
// python3 -I): v1 prints "#", "###", "#####", "#######" flush left; v2 prints the same rows centred with 3, 2, 1, 0 spaces,
// then "Bricks used: 16"; v3 (height = 10) ends "Bricks used: 100".
// Lesson family: string repetition (text * number) builds each row; the spaces in front centre it; a running total
// shows that 1 + 3 + 5 + ... adds up to height x height (odd numbers make a square).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'height = 4',
  'for row in range(1, height + 1):',
  '    print("#" * (2 * row - 1))'
].join('\n');

const OUT1 = [
  '#',
  '###',
  '#####',
  '#######'
].join('\n');

const V2 = [
  'height = 4',
  'total = 0',
  'for row in range(1, height + 1):',
  '    spaces = height - row',
  '    bricks = 2 * row - 1',
  '    total = total + bricks',
  '    print(" " * spaces + "#" * bricks)',
  'print("Bricks used:", total)'
].join('\n');

const OUT2 = [
  '   #',
  '  ###',
  ' #####',
  '#######',
  'Bricks used: 16'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Online coding for kids, 6 to 12' },
  slug: 'online-coding-classes-for-kids-peru',
  code: 'coki',
  accent: '#516000',
  accentRationale: 'Online coding classes for kids in Peru: a deep maize-leaf green #516000, the colour of a young chacra in the Andes, calm enough for a page parents read slowly; contrast 5.64 on the paper #FBF8F2 and above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Online coding classes for kids in Peru',
  title: 'Online Coding Classes for Kids in Peru: Live, in English',
  description: 'Online coding classes for kids in Peru aged 6 to 12: live lessons taught in English, Scratch to Python, in a group or one to one, at hours that suit Peru time.',
  ogDescription: 'How to choose a live online coding class for a child in Peru: what to ask, how Peruvian children aged 6 to 11 get online (INEI 2026), where coding sits beside primaria, and a first Python lesson that builds a pyramid.',
  twitterDescription: 'Live online coding for children of 6 to 12 in Peru, taught in English, in a group or one to one, at any hour.',
  pageName: 'Online Coding Classes for Kids in Peru',
  webPageDescription: 'A guide for English-reading families in Peru choosing live online coding classes for a child of 6 to 12, built from INEI household technology data for the second quarter of 2026, the Ley General de Educación and its Reglamento, MINEDU normative ages and press releases, the CNEB, vendor age terms and the tz database, with an original Python lesson.',
  courseDescription: 'Live online coding classes for children aged 6 to 12 in Peru, taught in English by mentors based in India: Scratch, games, first Python and AI literacy, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Online coding for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#choose', label: 'How to choose' },
    { href: '#online', label: 'Children online' },
    { href: '#school', label: 'Primaria' },
    { href: '#lesson', label: 'First lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 6 to 12 &middot; Live online, in English',
  h1: 'Online coding classes for kids in Peru',
  lede: 'A child learns to code fastest with a real person on the other side of the screen: someone who watches the mistake happen and asks the right question about it. This page is for families in Peru, English-speaking or bilingual, who want that for a child of 6 to 12. It covers how to tell a good live class from a weak one, how Peruvian children of this age actually get online, where coding fits beside primaria, and a first Python lesson you can try at home tonight.',
  secondaryCta: { href: '#lesson', label: 'Try the pyramid lesson' },
  wa: 'Hello Modern Age Coders, we live in Peru and are looking for online coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; rated 4.9 by about 547 Google reviewers &middot; your child codes on their own screen, guided in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['First tools', 'Scratch, then Python'],
    ['Format', 'Live video class, never recorded'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any hour you choose'],
    ['First class', 'Free, no card asked']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches online coding classes for kids in Peru aged 6 to 12. Every lesson is live, on video, and taught in English by a mentor based in India, who shares a screen with your child and corrects mistakes as they happen. Children of 6 to 8 start with Scratch blocks; from about 9 they move to typed Python, games and a first look at AI. Families choose a group of fifteen to twenty children of a similar age or one-to-one lessons, at whatever hour suits them in Peru time, and the first class is free.',

  picks: {
    eyebrow: 'Where most children start',
    h2: 'Three first courses for children in Peru',
    lede: 'Pick by age and by whether your child is already typing comfortably. The free class settles any doubt.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'COKI / 01', title: 'Scratch Coding for Kids', note: 'Ages 6 to 10, about three months. Blocks that snap together, so a child who reads slowly in English can still make a cat dance, a maze game and a quiz, and explain each one in short spoken sentences.' },
      { course: 'python-ai-kids-masterclass', code: 'COKI / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12, for children ready to type. Real Python from the first week: turtle drawings, small games and AI projects built with child-safe tools, never adult chatbot accounts.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'COKI / 03', title: 'Roblox Game Coding', note: 'Ages 8 to 14, for children who already play. They stop being players and start building: doors that open, scores that count, levels that end, all scripted in Luau.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this suits',
      h2: 'Who are these online coding classes for?',
      lede: 'Families in Peru whose children can follow simple spoken English, or who want them to. Most of the families who write to us from Peru fit one of three descriptions.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children at bilingual schools', p: 'They already hear English for much of the school day. A coding class in the same language means the words "repeat", "if" and "variable" stay in one language from primaria to secundaria, and nothing has to be relearnt later.' },
          { h3: 'Families who moved to Peru', p: 'A child whose Spanish is still new may find a Spanish-language coding club hard going. Here the instructions arrive in English, the mentor keeps the same face every week, and the child has one hour a week where language is not the obstacle.' },
          { h3: 'Peruvian parents who read English', p: 'You read this page in English, and you would like your child to use English for something real. Coding gives a reason to listen carefully: the program only works once the instruction has been understood.' }
        ] },
        { kind: 'p', mt: true, html: 'Families who would rather read in Spanish have a page of their own: <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">Leer en español: clases de programación para niños online</a>. It describes the same live classes from a parent\'s point of view at home. Either way, the teaching is in English; nothing changes except the language of the page.' }
      ]
    },
    {
      id: 'choose',
      tint: 'tint',
      eyebrow: 'How to choose',
      h2: 'How do you choose an online coding class for a child?',
      lede: 'Ask what happens when your child gets something wrong. Every course looks good when things work; the difference between a strong class and a weak one shows at the moment of a mistake.',
      body: [
        { kind: 'two',
          leftH3: 'Live, or recorded videos?',
          left: [
            'A recorded course can explain a loop beautifully, but it cannot see that your daughter has put the "forever" block in the wrong place, and it cannot ask her why. Children of 6 to 12 rarely know how to describe what went wrong, so they need someone watching.',
            'In a live class the mentor sees the screen, waits a few seconds, and then asks a question instead of giving the answer. That pause, repeated every week, is most of what teaching a child to think looks like.'
          ],
          rightH3: 'Group, or one to one?',
          right: [
            'A group of fifteen to twenty children of a similar age is lively: children see other solutions to the same puzzle and learn to explain their own. It suits a child who is happy to speak up, even a little.',
            'One to one suits a child who is very young, very shy, new to English, or racing ahead. The mentor sets the pace for one learner. Many families start one way and switch after a month; that is normal.'
          ] },
        { kind: 'p', mt: true, html: 'Whichever provider you try, use the free class to ask questions like these. They are our list, written for parents, and we answer every one of them in the first class.' },
        { kind: 'ol', items: [
          '<strong>Will my child type and build, or mostly watch?</strong> In a good class the child\'s hands are on the mouse or keyboard within the first ten minutes.',
          '<strong>Will it be the same teacher each week?</strong> A child explains a bug far more easily to someone who already knows how they think.',
          '<strong>How are groups formed?</strong> By age and starting level. A six year old should never be in the same class as a twelve year old.',
          '<strong>What happens after a mistake?</strong> Listen for "we ask them to predict, then test" rather than "we show the answer".',
          '<strong>Which AI tools will my child use?</strong> The right answer names tools that allow children, and none that need an adult account.',
          '<strong>What will I hear about progress?</strong> Ask for notes that describe what was built and what was hard, not a count of hours.'
        ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Children online in Peru',
      h2: 'How do children aged 6 to 11 in Peru get online?',
      lede: 'More of them every year, and increasingly through devices other than a phone. Peru\'s statistics institute, INEI, measures it every quarter in its national household survey.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Children aged 6 to 11 in Peru: internet and mobile phone use, second quarter of each year (percent)', head: ['Measure (INEI table)', '2023', '2024', '2025', '2026'], rows: [
          ['Used the internet (Cuadro 2.1, share of all children 6 to 11)', '60.1', '61.7', '61.5', '68.2'],
          ['Went online through a mobile phone (Cuadro 2.6, share of children 6 to 11 who use the internet)', '54.7', '50.4', '43.3', '48.5'],
          ['Used a mobile phone at all (Cuadro 3.3, share of all children 6 to 11)', '67.0', '67.7', '65.3', '67.8']
        ] },
        { kind: 'source', html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026 (bulletin N° 03, September 2026), Cuadros 2.1, 2.6 and 3.3, from the Encuesta Nacional de Hogares; 2026 figures are preliminary. Read on 9 November 2026. INEI writes decimals with a comma; we print them with a point.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table says',
          left: [
            'In the second quarter of 2026, 68.2% of Peruvian children aged 6 to 11 used the internet, up from 61.5% a year earlier. INEI notes that this age group still uses the internet less than any other except people of 60 and over.',
            'Read the middle row with care: it counts only children who use the internet. Among them, 48.5% went online through a mobile phone in 2026, against 90.2% of all internet users aged 6 and over. Many younger children, in other words, reach the internet some other way: a family laptop, a computer or a smart television.'
          ],
          rightH3: 'What it means for a coding class',
          right: [
            'Watching a video on a phone works well enough. Writing code on one does not, because a child needs a keyboard, a mouse or trackpad and room on the screen for both the program and the mentor. Our classes need a laptop or desktop computer.',
            'INEI also reports that 36.4% of Peruvian households had at least one computer in the second quarter of 2026. If yours is shared, book the class at an hour when nobody else needs it; with flexible timing, that is usually easy to arrange.'
          ] }
      ]
    },
    {
      id: 'age',
      tint: 'tint',
      eyebrow: 'The right age',
      h2: 'What age should kids start coding?',
      lede: 'Six is a good age to start with blocks, and nine is a good age to start typing. Those ages line up neatly with the Peruvian primaria years.',
      body: [
        { kind: 'two',
          leftH3: 'Primaria in a few lines',
          left: [
            'Peru\'s Ley General de Educación (Ley 28044) says primaria "dura seis años", and its Reglamento says it serves children "a partir de los 6 años de edad". So a Peruvian child is usually in 1st grade of primaria at 6 and in 6th grade at 11.',
            'Families arriving from abroad should know that MINEDU places a child by age on 31 March of each year, the "edad normativa". A child who turns six in April may therefore be a grade behind a classmate born in February. We group children by age and level, not by grade, so this never matters in our classes.'
          ],
          rightH3: 'Our age path',
          right: [
            '<strong>6 to 8:</strong> Scratch. Children drag blocks, watch a character move and learn sequence, repetition and simple conditions without needing to read long instructions.',
            '<strong>9 to 10:</strong> the first typed Python, short programs that draw or count. <strong>11 to 12:</strong> longer projects, games with scores, first data and a careful look at how AI makes decisions. A child who has done well in Scratch often moves to Python early; the free class tells us.'
          ] },
        { kind: 'p', mt: true, html: 'If your child is ten and wondering about Python specifically, <a class="ag-inline-link" href="/curso-de-python-para-ninos-peru">our Spanish-language page on Python for children of 9 to 12</a> explains when to move from blocks to code. For bilingual families, <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> sets out why English-taught coding helps at this age.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Coding and primaria',
      h2: 'Do Peruvian primary schools teach coding?',
      lede: 'There is no coding lesson in the national primaria timetable. MINEDU\'s curriculum, the CNEB, leaves computing out of its list of areas and treats digital skills as something all subjects share.',
      body: [
        { kind: 'two',
          leftH3: 'What the curriculum sets',
          left: [
            'In the CNEB\'s primaria plan of studies, Matemática has 5 teaching periods a week in grades 1 and 2 and 4 periods from grade 3, and Inglés has 2 periods in grades 1 and 2 and 3 periods from grade 3. No line of that table is called computing or programming.',
            'Competency 28, on working in virtual environments, is filed under the CNEB heading for skills that cross every area ("competencias transversales"). In practice, how much a child codes at school depends on the school and the teacher, not on the national plan.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'MINEDU reopened 53,631 schools for 6,225,000 pupils on 16 March 2026, the start of the 2026 school year. Our classes do not replace any of that; they run alongside the school year and through the January to March summer break.',
            'In 2025 MINEDU\'s national assessment, the ENLA, tested 4th grade of primaria in reading and mathematics. Coding helps both in an honest, indirect way: a child who writes programs reads instructions carefully and checks numbers twice. We make no promise about any school result.'
          ] },
        { kind: 'p', mt: true, html: 'To be clear about status: Modern Age Coders has no link with MINEDU or with any Peruvian school, gives no Peruvian marks, and the only certificate a finishing child receives is one we issue ourselves.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A first Python lesson',
      h2: 'What does a first Python lesson look like for a child?',
      lede: 'Here is one we teach to children of about 9 to 11 in their first weeks of typed code. They build a pyramid out of text, and on the way they discover a piece of mathematics nobody told them about.',
      body: [
        { kind: 'two',
          leftH3: 'The idea',
          left: [
            'In Python you can multiply text by a number. <code>"#" * 3</code> gives <code>###</code>. Children find this funny at first, then useful: it is the quickest way to draw a row of bricks.',
            'We ask for a pyramid four rows high, with one brick on top and two more on every row below. Most children write something like Version 1 within a few minutes, and it runs first time.'
          ],
          rightH3: 'The catch',
          right: [
            'It runs, but it draws a slope, not a pyramid. Every row starts at the left edge. The mentor does not point this out; we ask the child to compare the screen with the picture they had in mind and say what is different, in English.',
            'The fix is to push each row to the right with spaces. The top row needs the most spaces and the bottom row none, so the number of spaces is the height minus the row number.'
          ] },
        { kind: 'code', label: 'Version 1: one brick, then two more on every row', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Exact output when we ran it with Python 3: four rows of 1, 3, 5 and 7 bricks, all starting at the left edge.' },
        { kind: 'code', label: 'Version 2: spaces in front, and a running total', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output of our run: a centred pyramid, then <code>Bricks used: 16</code>.' },
        { kind: 'p', mt: true, html: 'Now the surprise. We ask the child to change the first line to <code>height = 10</code> and, before running it, to guess how many bricks the pyramid will need. Most guess something near 50. The program ends with <code>Bricks used: 100</code>. For four rows the answer was 16, which is 4 times 4; for ten rows it is 10 times 10. The rows hold 1, 3, 5, 7 bricks and so on, and <strong>odd numbers added in order always make a square number</strong>.' },
        { kind: 'p', html: 'Nobody had to teach the rule. The child predicted, ran the program, was surprised, and then found the pattern by testing a third height. That is the habit we want: guess first, test second, and trust the test over the guess. Children who meet a pattern this way remember it far longer than a rule copied from a board.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, on paper.</strong> Draw the pyramid with counters or squares of paper, one row at a time. Count the counters after three rows, then four. What do you notice?',
          '<strong>Ages 8 to 9, in Scratch.</strong> Use a pen sprite and a repeat block to stamp a row of squares. Make each new row two squares longer and start it a little to the right.',
          '<strong>Ages 9 to 11, in Python.</strong> Type Version 2 without looking. Then try a height of 7 and predict the total before you run it.',
          '<strong>Ages 11 and 12.</strong> Turn the pyramid upside down with as few changes as possible. Then tell your mentor, in English, what stayed the same and why.'
        ] }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking first',
      h2: 'Will my child just copy answers from AI?',
      lede: 'No. A child here works the problem out first and is asked to talk through each line of their program; a tool comes later, if at all.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Predict before running', p: 'Every program starts with a guess said out loud. The pyramid lesson above only works because the child guessed 50 before seeing 100.' },
          { h3: 'Age rules respected', p: 'Children never use adult chatbot accounts with us. Claude\'s terms require users to be at least 18, and ChatGPT\'s terms require a parent or guardian\'s permission for anyone under 18.' },
          { h3: 'The same teaching everywhere', p: 'A child in Lima, Piura or Cusco gets the same mentors, the same standard and the same patience. Where a family lives in Peru changes nothing except the hour on the clock.' }
        ] },
        { kind: 'p', mt: true, html: 'Older children do meet AI in our courses, as something to understand and question: how a program can sort pictures, why it sometimes gets them wrong, and why a confident answer can still be false. They learn it through tools built for their age. Using AI to skip the thinking is the one thing we do not teach.' }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'What time are the classes in Peru?',
      lede: 'At an hour your family picks. Peru does not change its clocks during the year (it sits five hours behind UTC), and India sits five and a half hours ahead of UTC, which puts the mentor\'s clock ten and a half hours later than yours. The rows below only convert; they are not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'A few Peru hours converted to India time (examples, not class times)', head: ['Peru time', 'India time', 'A typical moment in Peru'], rows: [
          ['08:30', '19:00', 'Before school on a summer-break morning'],
          ['11:00', '21:30', 'Late morning on a Saturday'],
          ['15:00', '01:30, next day', 'Straight after lunch'],
          ['17:30', '04:00, next day', 'Homework done, before dinner'],
          ['20:00', '06:30, next day', 'Early evening, for older children']
        ] },
        { kind: 'source', html: 'Source: IANA tz database, zones America/Lima (UTC minus 5, no summer time since 1994) and Asia/Kolkata (UTC plus 5:30). Conversions are ours.' },
        { kind: 'p', mt: true, html: 'You pick the hour on your own clock when you book; our system shows the mentor the same moment in India time. Because neither country changes its clocks, a class at 17:30 in Arequipa stays at 17:30 in February and in August. More detail for Lima families is on our <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> page, and every Peru page is listed on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> hub.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will I know my child is learning?',
    lede: 'Through things your child can do and say, not hours logged. These stages are ours; they decide which group a child joins and what the mentor works on next.',
    table: { numCols: [], caption: 'Our stages for children of 6 to 12', head: ['Stage', 'Usual age', 'Can do on screen', 'Can say in English'], rows: [
      ['1. Steps', '6 to 7', 'Put blocks in order so a character moves and speaks', '"First it walks, then it jumps."'],
      ['2. Loops', '7 to 8', 'Repeat an action and stop it at the right moment', '"This repeats ten times."'],
      ['3. Choices', '8 to 9', 'Make a game react to a key or a touch', '"If it touches the wall, it stops."'],
      ['4. Typing', '9 to 10', 'Write a short Python program that draws or counts', '"I changed the number and it moved."'],
      ['5. Patterns', '10 to 11', 'Predict an output, run it, explain the difference', '"I guessed 50, but it was 100 because..."'],
      ['6. Projects', '11 to 12', 'Plan and finish a small game or tool alone', '"Here is what it does and how I tested it."']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to show you the last thing they built and to explain one part. If they can, the class is working.',
      'Stage 5 is the pyramid lesson. A child who reaches it starts asking "why?" about numbers well beyond the class.'
    ] },
    right: { h3: 'For children', ps: [
      'Guess what your program will do before you press run. Being wrong is how you find the interesting part.',
      'If you are stuck, say what you expected and what happened. That sentence is half the answer.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children of 6 to 12',
    lede: 'All taught live, in English, by a mentor who stays with your child, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 9', courses: [
        { code: 'COKI / FIRST / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Puzzles, order and patterns before any screen work, for ages 6 to 9.' },
        { code: 'COKI / FIRST / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A long block-coding path from stories to games and simple apps.' },
        { code: 'COKI / FIRST / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking a problem into steps, the skill under every program.' }
      ] },
      { num: 'II', h3: 'Building things', sub: 'Ages 8 to 12', courses: [
        { code: 'COKI / BUILD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to real code inside a world children already know.' },
        { code: 'COKI / BUILD / 02', slug: 'kids-ai-web-development-course', title: 'Web pages for kids', blurb: 'Real websites, written and published by the child.' },
        { code: 'COKI / BUILD / 03', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Phone-style apps designed and built with block code.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Ages 9 to 12', courses: [
        { code: 'COKI / MORE / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works and where it fails, without adult accounts.' },
        { code: 'COKI / MORE / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns like the pyramid, explored in Python from age 10.' },
        { code: 'COKI / MORE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'First real C++ for confident 9 to 12 year olds.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A normal week of classes, seen from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'School term', l: 'Late afternoons and early evenings in Peru are popular once homework is finished.' },
      { time: 'Summer break', l: 'January to March mornings open up; tell us the hour and we match a mentor.' },
      { time: '1-on-1', l: 'One child, one mentor, at an hour fixed around your family.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same teacher each week, who learns how your child thinks.' },
      { h3: 'Short sentences', p: 'Instructions in simple English, shown on screen as well as said.' },
      { h3: 'Hands busy', p: 'Children build from the first ten minutes of every class.' },
      { h3: 'Age-matched', p: 'Groups formed by age and level, never mixed widely.' },
      { h3: 'Progress notes', p: 'A few lines for parents: built, struggled with, next.' },
      { h3: 'Your choice of format', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our students build once they keep going',
  projectsLede: 'Children who stay with coding into their teens build things that work in the real world. A few examples from older students are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'What parents and students wrote on Google, copied exactly.',

  fees: {
    h2: 'Fees for families in Peru',
    lede: 'Our fees are set in US dollars and paid by card. Your card issuer changes each payment into soles at its own rate, so the amount on your statement may differ slightly from one month to the next.',
    free: ['A free first class', 'Your child builds a first small program', 'No card details asked'],
    group: ['Fifteen to twenty children of similar age', 'One mentor all the way through', 'Two live classes every week', 'Paid monthly, stop whenever you like'],
    one: ['Your child and a mentor, nobody else', 'Pace and projects shaped around your child', 'Class hours chosen by you']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'What parents in Peru ask about online coding for kids',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak slowly and clearly, adapt to your child\'s pace and accent, and show each step on the shared screen, so a child who is still learning English can follow. If you prefer to read about the classes in Spanish, our Spanish-language page describes them, but the teaching itself is always in English.' },
      { q: 'From what age can a child join?', a: 'Six. Between 6 and 8 a child works in Scratch, dragging coloured blocks, so reading long instructions is not needed. From about 9, most children are ready to type Python. In Peru that usually means Scratch in the first years of primaria and Python from 4th or 5th grade, though we place children by age and level, not by grade.' },
      { q: 'Is online coding good for a 10 year old?', a: 'Yes, if it is live. A ten year old learns quickly but rarely knows how to describe a problem, so a recorded video cannot help when they are stuck. In a live class the mentor sees the screen, asks the right question and lets the child find the fix.' },
      { q: 'Group or one-to-one: which is better for my child?', a: 'Groups of fifteen to twenty children of a similar age suit children who enjoy talking about their work. One to one suits very young or shy children, children new to English and children who are racing ahead. You can switch after the first month if the format does not fit.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With Peru five hours behind UTC and India five and a half ahead, the gap is ten and a half hours on every day of the year: 17:30 in Peru is 04:00 the next morning for the mentor.' },
      { q: 'Can my child join from a phone or tablet?', a: 'Not for coding. Coding needs a laptop or desktop with a keyboard and a mouse or trackpad, plus a steady connection; a headset with its own microphone makes listening much easier. A tablet can show the video, but typing code and dragging blocks on it is slow and frustrating.' },
      { q: 'Does school in Peru already teach coding?', a: 'Rarely as its own lesson. MINEDU\'s national curriculum, the CNEB, gives primaria no computing area; digital skills are a transversal competency shared by every subject. Some private schools add their own computing lessons, so ask your child\'s school what they cover.' },
      { q: 'Will my child use ChatGPT or other AI tools?', a: 'Never on adult accounts. Anthropic sets 18 as the minimum age for Claude, and OpenAI asks that a parent or guardian agree before a minor uses ChatGPT. Children study how AI behaves with child-appropriate tools, once they have already worked the problem out by themselves.' },
      { q: 'Are you connected with MINEDU or a school in Peru?', a: 'No. Modern Age Coders is a private online school whose mentors work from India, with no tie to MINEDU or to any Peruvian school. We give no Peruvian marks or qualifications; a child who finishes a course gets a completion certificate issued by us.' },
      { q: 'How are fees paid from Peru?', a: 'Monthly, by card, in US dollars. The bank that issued your card does the conversion into soles, which is why two months can show slightly different amounts. The first class is free and booking it needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for parents of young coders',
    lede: 'Pages that help with the next decision.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Why blocks come first for young children.' },
      { href: '/python-for-10-year-olds', label: 'Python at ten', p: 'What a ten year old can really do in Python.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Each AI tool and the youngest user it allows.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before tools, in every class.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class described from start to end.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built by our students.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'During the free lesson a mentor sits with your child through a short puzzle and a first working program, quietly noting the way they think and the English they catch. Afterwards the mentor suggests a course, a group or one-to-one lessons, and an hour that suits your week.',
    readFirst: 'Would you like to look around first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class in detail, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Classes are live video lessons from India, in English only. For a quick reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Young coders', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Leer en español' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Guess first, then run it'
  },

  personalityCss: `
.ag-root.ag-coki .ag-hero h1 { max-width: 17ch; letter-spacing: -0.015em; }
.ag-root.ag-coki .ag-capsule { border-left-width: 5px; }
.ag-root.ag-coki .ag-steps li { line-height: 1.7; }
.ag-root.ag-coki .ag-table caption { text-align: left; }
.ag-root.ag-coki .ag-code pre { line-height: 1.5; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (Cuadros 2.1, 2.6, 3.3 and the household computer figure); Ley 28044 and its Reglamento D.S. 011-2012-ED; MINEDU Edades normativas; MINEDU press releases of 16 March 2026 (school year opening) and on ENLA 2025; CNEB plan of studies and competency 28; vendor terms for ChatGPT and Claude (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original first Python lesson for children of 9 to 11: string repetition draws rows of 1, 3, 5 and 7 bricks; the first version slopes to the left, the fix adds height minus row spaces, and a running total prints Bricks used: 16, then Bricks used: 100 for height 10, so the child discovers that odd numbers add up to a square. Plus paper, Scratch and older-child versions. Lesson family: string repetition and a running total revealing a number pattern.',
    requiredMentions: ['Bricks used: 16', 'Bricks used: 100', 'odd numbers added in order always make a square number', 'Leer en español: clases de programación para niños online', '48.5% went online through a mobile phone in 2026', 'Went online through a mobile phone (Cuadro 2.6', 'a partir de los 6 años de edad', '53,631 schools for 6,225,000 pupils on 16 March 2026', 'Guess first, then run it'],
    sources: [
      { claim: 'Children 6 to 11: internet use 60.1, 61.7, 61.5, 68.2; through a mobile phone 54.7, 50.4, 43.3, 48.5; use a mobile phone 67.0, 67.7, 65.3, 67.8 (II trimestre 2023 to 2026); 36.4% of households with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Primaria lasts six years (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria serves children from age 6 (Reglamento D.S. 011-2012-ED).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Normative age measured on 31 March each year.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: '53,631 schools reopened for 6,225,000 students on 16 March 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'ENLA 2025 tested 4th grade of primaria in reading and mathematics.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'CNEB primaria hours (Matemática 5 5 4 4 4 4; Inglés 2 2 3 3 3 3); competency 28 transversal; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ChatGPT under 18 needs parental permission; Claude 18 and over.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Scratch user counts for Peru: the Scratch statistics data returned 403 on 9 November 2026 and was not retried; not used.',
      'That children who learn to code score higher in the ENLA: no source; the page says the link is indirect and makes no promise.',
      'A count of bilingual or international-school pupils in Peru: no primary source; not given.',
      'Naming any school as a source of our students: refused.',
      'Spanish-language teaching or any link with MINEDU or a school: none, and the page says so.'
    ]
  }
};
