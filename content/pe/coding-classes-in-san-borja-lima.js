// SHIP: market (en district, Lima) | San Borja primaria, grade by grade: first coding in English from 6 to 11 | greedy word wrap: the uncounted space, and a word longer than the line
'use strict';
// Coding classes in San Borja, Lima (ag- English district page, Peru cluster row PE056, hubGroup cities; alloc cobo,
// #790002). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// ("City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible at any hour. Fees only through data-price anchors (USD).
// Audience: parents of primary-age children in San Borja who want coding taught in English (bilingual-school pupils and
// Spanish-first children alike); secundaria and adults briefly.
// Spine: grade by grade through primaria using MINEDU's normative ages (age on 31 March), what a child of each grade can
// do in code, and how a first class works in English for a six-year-old.
// Different from the two Spanish San Borja pages: vacaciones-utiles-de-programacion-san-borja-lima (sport talleres plus
// code in summer; council workshops and school-block tables; lesson: mean against median) and clases-de-programacion-
// san-borja (reading and code; age table; lesson: generators run out; live by the end of 10 Nov 2026 and linked).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-san-borja-lima/):
//  - MINEDU, Edades normativas (edades-normativas/text.txt): "Se considera la edad normativa al 31 de marzo de cada año."
//    PDF table (edades-normativas-pdf/text.txt): grades "Inicial 5 años", "III 1er grado 2do grado IV 3er grado 4to grado
//    V 5to grado 6to grado VI 1er grado 2do grado VII 3er grado 4to grado 5to grado"; ages "5 años 6 años 7 años 8 años
//    9 años 10 años 11 años 12 años 13 años 14 años 15 años 16 años".
//  - Ley 28044 (ley28044-pdf/text.txt): "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y
//    dura seis años"; "La Educación Secundaria constituye el tercer nivel de la Educación Básica Regular y dura cinco años".
//  - CNEB (cneb-pilot.txt, cneb/text.txt): primaria "Matemática 5 5 4 4 4 4", "Inglés 2 2 3 3 3 3", "Total de horas 30 30
//    30 30 30 30"; "horas pedagógicas (45 minutos)"; competency 28 transversal; no computing area.
//  - INEI Censos Nacionales 2025 (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SAN BORJA 126125 58131 67994 121870 56045 65825
//    4255 2086 2169"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SAN BORJA 121870 4321 6446 7651 18318 25652 25992 33490".
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el uso de Internet fue menor entre los niños de 6 a 11 años
//    (68,2%)"; Lima Metropolitana households 84,7%.
//  - EF EPI 2025 (ef_peru.raw): Lima 555 high. MINEDU 16 March 2026 (n-inicio2026): 6 225 000 students, 53 631 schools.
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
//  - Neighbours, plain text: San Isidro, La Victoria, San Luis, Ate, Santiago de Surco, Surquillo.
// Our own calculations: San Borja 6 to 11 = 5.3% of people counted, 60 and over 27.5% (calc.py); 2 x 45 = 90 and
// 3 x 45 = 135 minutes of English a week in primaria; Matemática 5 x 45 = 225 and 4 x 45 = 180 minutes.
// Code (scratchpad pe/d5/cobo_v1.py, cobo_v2.py, python3 -I), exact output:
//   v1: "| The llama| 10" / "|jumped over| 11" / "|seventeen| 9" / "|extraordinarily| 15" / "|tall| 4" / "|cactuses| 8"
//   v2: "|The llama | 9" / "|jumped    | 6" / "|over      | 4" / "|seventeen | 9" / "|extraordinarily| 15" /
//       "|tall      | 4" / "|cactuses  | 8" / ['The llama', 'jumped', 'over', 'seventeen', 'extraordin', 'arily tall', 'cactuses']
// Lesson family: greedy word wrap: count the space between words, start a line without a leading space, and decide what
// to do with a word longer than the line (keep it whole, or break it as textwrap does).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'story = "The llama jumped over seventeen extraordinarily tall cactuses"',
  '',
  'def wrap(text, width):',
  '    lines = []',
  '    line = ""',
  '    for word in text.split():',
  '        if len(line) + len(word) <= width:',
  '            line = line + " " + word',
  '        else:',
  '            lines.append(line)',
  '            line = word',
  '    lines.append(line)',
  '    return lines',
  '',
  'for line in wrap(story, 10):',
  '    print("|" + line + "|", len(line))'
].join('\n');

const V2 = [
  'import textwrap',
  '',
  'story = "The llama jumped over seventeen extraordinarily tall cactuses"',
  '',
  'def wrap(text, width):',
  '    lines = []',
  '    line = ""',
  '    for word in text.split():',
  '        if line == "":',
  '            line = word',
  '        elif len(line) + 1 + len(word) <= width:',
  '            line = line + " " + word',
  '        else:',
  '            lines.append(line)',
  '            line = word',
  '    if line:',
  '        lines.append(line)',
  '    return lines',
  '',
  'for line in wrap(story, 10):',
  '    print("|" + line.ljust(10) + "|", len(line))',
  'print(textwrap.wrap(story, 10))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'San Borja, Lima: primaria in English' },
  slug: 'coding-classes-in-san-borja-lima',
  code: 'cobo',
  accent: '#790002',
  accentRationale: 'Coding classes in San Borja: a dark cardinal red #790002, like the painted running track of a sports park; contrast 10.92 on #FBF8F2, 10.27 on #F5F1E8 and 9.40 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in San Borja, Lima',
  title: 'Coding Classes in San Borja, Lima: Live Online in English',
  description: 'Coding classes for San Borja children from age 6, grade by grade through primaria: live online in English, at any hour, in a group or one to one, plus teens.',
  ogDescription: 'Live coding lessons in English for San Borja families with primary-age children: what a child can code in each grade from 1° to 6° de primaria, how a six-year-old copes with English, and a Python lesson on wrapping a story onto a card.',
  twitterDescription: 'Coding in English for San Borja children from 6: grade by grade through primaria, live online, at any hour.',
  pageName: 'Coding Classes in San Borja, Lima',
  webPageDescription: 'A guide for San Borja parents of children aged 6 to 11 to live online coding classes taught in English, built from MINEDU\'s normative ages, Ley 28044, the CNEB primaria timetable, INEI Censos Nacionales 2025 and INEI household data, with an original Python lesson on word wrapping.',
  courseDescription: 'Live online coding classes taught in English for children in San Borja, Lima, from age 6: reasoning games and Scratch for the youngest, Python from about 9, with teenage and adult courses too, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'San Borja, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#grades', label: 'Grade by grade' },
    { href: '#six', label: 'Starting at 6' },
    { href: '#district', label: 'San Borja' },
    { href: '#project', label: 'Python lesson' },
    { href: '#times', label: 'San Borja times' }
  ],
  eyebrow: 'San Borja, Lima &middot; Live online, in English &middot; Primaria first',
  h1: 'Coding classes in San Borja, Lima',
  lede: 'Most San Borja parents who ask us about coding have a child in primaria and two questions: is my child old enough, and will they cope with a class in English? This page answers both, grade by grade from 1° to 6° de primaria, using MINEDU\'s own ages for each grade. It also shows what an hour of live coding looks like for a six-year-old, what the national curriculum does and does not cover, and a Python lesson for the oldest children in primaria.',
  secondaryCta: { href: '#grades', label: 'Find your child\'s grade' },
  wa: 'Hello Modern Age Coders, we live in San Borja, Lima, and would like live coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Teaching children live online since 2020 &middot; 10,000+ learners worldwide &middot; classes only in English',
  spec: [
    ['Youngest age', '6, in 1° de primaria'],
    ['First tools', 'Blocks and puzzles, then Python'],
    ['Taught in', 'Simple, patient English'],
    ['Group', 'Fifteen to twenty children of one age, or 1 to 1'],
    ['San Borja hours', 'After school, weekends, holidays'],
    ['First class', 'Free, with no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs live online coding classes in English for children in San Borja, Lima, from age 6. In the early primaria grades children solve reasoning puzzles and build Scratch games; from about 9, in 4° de primaria, most move to typed Python; teenagers and adults have their own courses. Every class is live on video with a mentor based in India who speaks slow, simple English, in a group of fifteen to twenty children of the same age or one to one, at any hour that suits the family in Peru time.',

  picks: {
    eyebrow: 'Where San Borja children start',
    h2: 'Three courses for the primaria years',
    lede: 'One for the youngest thinkers, one long course built on Scratch, and one for children who are ready to type.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'COBO / 01', title: 'Reasoning for Young Thinkers', note: 'For ages 6 to 9. Patterns, sequences and logic puzzles that train the thinking behind code before any code is typed, in short sessions of very simple spoken English.' },
      { course: 'kids-coding-blocks-masterclass', code: 'COBO / 02', title: 'Coding for Kids', note: 'For ages 6 to 12, grouped by age. Scratch stories and games first, then simple apps and a gentle introduction to AI; the usual path through the middle of primaria.' },
      { course: 'python-ai-kids-masterclass', code: 'COBO / 03', title: 'Python and AI for Kids', note: 'For children of about 9 to 12 who can read and type. Real Python, turtle drawings and small AI projects, like the word-wrap lesson further down this page.' }
    ]
  },

  sections: [
    {
      id: 'grades',
      eyebrow: 'Grade by grade',
      h2: 'What can a child learn to code in each grade of primaria?',
      lede: 'Quite a lot, if the tools fit the age. MINEDU links each grade to a "normative age", measured on 31 March of the school year, and primaria lasts six years under the Ley General de Educación, Ley 28044. The right-hand columns are our own.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Peruvian primaria grades and MINEDU\'s normative ages, with where our classes start (our columns)', head: ['Grade (MINEDU)', 'Normative age on 31 March', 'Where we start (ours)', 'A typical first project (ours)'], rows: [
          ['Inicial 5 años', '5', 'Not yet; we begin at 6', 'Ordering picture cards at home'],
          ['1° de primaria', '6', 'Reasoning puzzles, then Scratch', 'A cat that walks and says hello'],
          ['2° de primaria', '7', 'Scratch', 'A story with three scenes'],
          ['3° de primaria', '8', 'Scratch, or Roblox from 8', 'A catch game with a score'],
          ['4° de primaria', '9', 'Scratch or first Python', 'A quiz that counts right answers'],
          ['5° de primaria', '10', 'Python', 'Turtle drawings with loops'],
          ['6° de primaria', '11', 'Python, with small AI projects', 'A story card that wraps its own text'],
          ['1° de secundaria', '12', 'Python for teens, Java later', 'Programs that read and summarise files']
        ] },
        { kind: 'source', html: 'Sources: MINEDU, Edades normativas (page and PDF table: the normative age is the age on 31 March of each year, 3 to 16 from Inicial to 5° de secundaria); Ley N.° 28044, Ley General de Educación (primaria lasts six years, secundaria five). Read 8 to 10 November 2026. The two right-hand columns describe our own courses and are not part of any MINEDU document.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'Age matters more than grade for us. A child born in April may be the youngest in their grade and a child born in March the oldest, so two classmates can be almost a year apart. We place children by age and by what they can already do, after a free first class.',
            'The jump from blocks to typing usually comes in 4° or 5° de primaria. It depends on reading and typing more than on cleverness: a child who reads fluently and finds the keys without hunting is ready.'
          ],
          rightH3: 'What the school week holds',
          right: [
            'The CNEB plan of studies for primaria has 30 teaching periods a week of 45 minutes. Matemática gets 5 in grades 1 and 2 and 4 from grade 3; Inglés gets 2 in the first two grades and 3 from 3° onwards, which is 90 and then 135 minutes a week by our arithmetic.',
            'None of those periods is for computing. The CNEB treats digital skills as a competency shared by every area, number 28, rather than a subject, so a child in a typical primaria never writes a program in class. Bilingual schools in and around San Borja set their own timetables; what each teaches is for the school to say.'
          ] }
      ]
    },
    {
      id: 'six',
      tint: 'tint',
      eyebrow: 'Starting at 6',
      h2: 'Can a six-year-old really follow a live coding class in English?',
      lede: 'Usually, yes, if the class is built for six-year-olds. That means short tasks, a lot of pointing at the screen, very few words, and a mentor who waits.',
      body: [
        { kind: 'ol', items: [
          '<strong>Hello and a warm-up, five minutes.</strong> The mentor greets each child by name and asks one simple question: "What colour is your cat today?" Children answer however they can; one English word is a good start.',
          '<strong>Show, then say, ten minutes.</strong> The mentor drags a block on the shared screen and says only "move", "turn", "say". Children copy it on their own screen. The words come with the action, never alone.',
          '<strong>Make it yours, fifteen minutes.</strong> Each child changes something: a colour, a sound, how far the cat moves. The mentor visits screens one by one and asks "What happens if...?"',
          '<strong>Show the group, five minutes.</strong> A child or two shows their project. Others clap. Speaking in front of others in English starts with a single sentence.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If English is new at home',
          left: [
            'Many San Borja children hear English at school, some barely at all. For a six-year-old with very little English we usually suggest starting one to one: the mentor can slow down as much as needed, use gesture and repetition freely, and nobody else is waiting.',
            'A parent sitting nearby for the first few classes helps too, not to translate, but to make the screen feel safe. After a month, most children prefer to be left alone with their mentor.'
          ],
          rightH3: 'If English is already strong',
          right: [
            'Children at bilingual schools usually treat the class like any other lesson in English. For them the challenge is the thinking, not the language, and the mentor moves faster through the projects.',
            'Either way, the classes are taught only in English. The mentor understands a Spanish answer and offers the English for it, but does not switch languages. That consistency is what makes the English stick.'
          ] },
        { kind: 'p', mt: true, html: 'For more on the very first year, our pages on <a class="ag-inline-link" href="/coding-for-kids-age-6-peru">coding for six-year-olds in Peru</a> and <a class="ag-inline-link" href="/coding-for-kids-age-8-peru">coding for eight-year-olds</a> go into the detail of each age.' }
      ]
    },
    {
      id: 'district',
      eyebrow: 'San Borja in figures',
      h2: 'How many primary-age children live in San Borja?',
      lede: 'INEI counted 6,446 children aged 6 to 11 in San Borja in its 2025 census, out of a total district population of 126,125.',
      body: [
        { kind: 'two',
          leftH3: 'The census',
          left: [
            'Among the 121,870 people INEI counted in San Borja (it estimates another 4,255 were missed), 4,321 were under 6, 6,446 were 6 to 11 and 7,651 were 12 to 17. People of 60 and over form the largest group, 33,490, or about 27.5% by our division.',
            'Primary-age children are about 5.3% of the people counted. INEI\'s total splits into 67,994 women and 58,131 men.'
          ],
          rightH3: 'What it means for a class',
          right: [
            'Six and a half thousand children spread across six school grades and many schools is not many per age. A specialist coding class in English for seven-year-olds would struggle to fill locally; online, a San Borja seven-year-old joins a full group of seven-year-olds.',
            'Grandparents count too. With so many older residents, we often find a grandparent beside the child at the computer, and sometimes signing up for an adult course of their own.'
          ] },
        { kind: 'source', html: 'Source: INEI, Censos Nacionales 2025, Lima Metropolitana indicators, Cuadro N.° 1 and Cuadro N.° 3, saved 8 November 2026. Percentages are our own; we do not add age groups into new totals.' },
        { kind: 'p', mt: true, html: 'San Borja is bordered by San Isidro, La Victoria, San Luis, Ate, Santiago de Surco and Surquillo. Children in any of those districts join the same groups. Parents who prefer Spanish can read our summer plan for <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-borja-lima">vacaciones útiles de programación en San Borja</a>, which pairs morning sport with coding at home. A Spanish guide for every age, all year, is <a class="ag-inline-link" href="/clases-de-programacion-san-borja">clases de programación en San Borja</a>.' }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Why online',
      h2: 'Why choose an online class for a young child in San Borja?',
      lede: 'Because for a child of six to nine, the journey is often the hardest part of an after-school activity, and a live class at home removes it completely.',
      body: [
        { kind: 'two',
          leftH3: 'No journey, no rush',
          left: [
            'We do not quote traffic times; San Borja parents know the afternoon roads better than any table could. What matters is that a forty-five minute class at home costs forty-five minutes, not an afternoon.',
            'Younger children are also tired after school. A class that starts five minutes after a snack, at a familiar table, gets a fresher child than one that starts after a car ride.'
          ],
          rightH3: 'Still a real class',
          right: [
            'Online does not mean a video. The mentor sees each child\'s screen, speaks to each child by name, and notices when someone is lost. Children in the group see and hear each other too.',
            'What you need: a laptop or desktop with a mouse, a camera and a microphone, and a steady connection. A tablet or phone is not enough for building programs. INEI found that 68.2% of Peruvian children of 6 to 11 used the internet in the second quarter of 2026, the lowest share of any school-age group, so for many children this will be their first serious use of a computer.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like for the oldest primaria children? Wrapping a story onto a card',
      lede: 'This lesson is for children of about 10 to 12 who already type Python. They write a short story and want it to fit on a narrow card, ten letters wide. Splitting text into lines sounds easy, and teaches a surprising amount about counting carefully.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'The story is one sentence about a llama and some cactuses. The child writes a function, <code>wrap(text, width)</code>, that takes words one at a time and adds each to the current line if it fits, or starts a new line if it does not. This "fill the line, then move on" method is called greedy wrapping.',
            'Before running it, the child predicts the lines on paper. That prediction is the most important part of the lesson.'
          ],
          rightH3: 'Three surprises',
          right: [
            'Version 1 prints bars around each line so we can see its edges. The first line starts with a space. The second line, "jumped over", is 11 letters long on a card only 10 wide. And "extraordinarily" sticks out at 15.',
            'The space at the start comes from adding " " before every word, even the first. The line of 11 comes from <strong>forgetting to count the space</strong> between words. The long word is a different problem: no rule can fit 15 letters on a line of 10.'
          ] },
        { kind: 'code', label: 'Version 1: almost a word wrapper', lang: 'Python', code: V1, note: 'It prints <code>| The llama| 10</code>, <code>|jumped over| 11</code>, <code>|seventeen| 9</code>, <code>|extraordinarily| 15</code>, <code>|tall| 4</code> and <code>|cactuses| 8</code>.' },
        { kind: 'code', label: 'Version 2: count the space, then compare with textwrap', lang: 'Python', code: V2, note: 'It prints <code>|The llama | 9</code>, <code>|jumped    | 6</code>, <code>|over      | 4</code>, <code>|seventeen | 9</code>, <code>|extraordinarily| 15</code>, <code>|tall      | 4</code>, <code>|cactuses  | 8</code>, and then <code>[\'The llama\', \'jumped\', \'over\', \'seventeen\', \'extraordin\', \'arily tall\', \'cactuses\']</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 starts each line with the first word on its own and adds 1 for the space before every later word. Now no ordinary line goes past 10, and "jumped" and "over" sit on separate lines because together they need 11. The long word still sticks out, and Version 2 keeps it whole on purpose.' },
        { kind: 'p', html: 'The last line uses Python\'s own <code>textwrap</code> module for comparison. It makes a different choice: it cuts the long word into "extraordin" and "arily", and then fits "arily tall" on one line. Neither answer is wrong. The child has to decide what a story card should do, and that decision, explained in a sentence, is what we are really teaching.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7, with paper strips.</strong> Write a sentence on squared paper, one letter per square, and cut it into strips five squares wide without cutting any word. What do you do with a word of seven letters?',
          '<strong>Ages 8 to 9, in Scratch.</strong> Make a sprite say a long sentence in a speech bubble. Then split the sentence into two "say" blocks so it reads better. Where did you choose to split, and why?',
          '<strong>Ages 10 to 12, in Python.</strong> Predict the output of Version 1 on paper before running it. Then change the width to 12 and predict again.',
          '<strong>Going further.</strong> Add a hyphen when a long word is cut, as books do. Check that no line, hyphen included, is longer than the width.'
        ] }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'San Borja times',
      h2: 'What time would a class be in San Borja?',
      lede: 'Any time that suits your child. Peru has no daylight saving, so Peru time sits five hours behind UTC all year, and India sits five and a half ahead; ten and a half hours separate San Borja from the mentor\'s desk on every date. The rows below are conversions, not set slots.',
      body: [
        { kind: 'table', numCols: [], caption: 'San Borja times and the same moment in India (conversions only)', head: ['Peru time, San Borja', 'India time', 'Suits'], rows: [
          ['08:30', '19:00', 'A child on a summer morning'],
          ['10:30', '21:00', 'A Saturday class'],
          ['15:00', '01:30, next day', 'A child home after school'],
          ['17:00', '03:30, next day', 'After a snack and some play']
        ] },
        { kind: 'source', html: 'Source: IANA tz database, America/Lima and Asia/Kolkata; neither zone observes summer time. The conversions are our own.' },
        { kind: 'p', mt: true, html: 'You book in your own time and the mentor sees the India equivalent. Peru\'s school year started on 16 March 2026, when MINEDU reported 53,631 schools reopening for 6,225,000 pupils; many families start our classes in the January to March summer and keep the same hour once school returns.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a San Borja child progresses through primaria',
    lede: 'Our own milestones for children of 6 to 12. They tell us which group a child belongs in, and tell parents what has changed.',
    table: { numCols: [], caption: 'Primaria coding milestones (ours)', head: ['Milestone', 'Typical age', 'Your child can', 'You might hear at home'], rows: [
      ['1. Steps', '6', 'Put three blocks in the right order', '"First it walks, then it talks!"'],
      ['2. Again', '7', 'Use a repeat block instead of copying', '"I don\'t need ten blocks, just one."'],
      ['3. When', '8', 'Make something happen on a key or a click', '"When I press space, it jumps."'],
      ['4. Keep', '9', 'Store a score that goes up and resets', '"The score was wrong, so I fixed it."'],
      ['5. Type', '10', 'Write short Python with loops and if', '"Look, I typed it myself."'],
      ['6. Check', '11 to 12', 'Predict output and test an awkward case', '"I knew that word would be too long."']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 6 is the word-wrap lesson above. Listen for the word "because" when your child talks about a program: that is reasoning, not copying.',
      'Our notes home describe what was made and understood, in plain words.'
    ] },
    right: { h3: 'For children', ps: [
      'Guess first, then run it. Being wrong is how you find out something new.',
      'Spaces are letters too. Count them.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for San Borja',
    lede: 'Every course here runs live in English; children keep one mentor and can learn in a group or alone.',
    bands: [
      { num: 'I', h3: 'Younger primaria', sub: 'Ages 6 to 9', courses: [
        { code: 'COBO / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'From a first sprite to complete games in about three months.' },
        { code: 'COBO / YOUNG / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense for ages 5 to 10, built on understanding, not tricks.' },
        { code: 'COBO / YOUNG / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that build the habits behind every program.' }
      ] },
      { num: 'II', h3: 'Older primaria', sub: 'Ages 8 to 12', courses: [
        { code: 'COBO / OLDER / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Children design and script their own games in Luau.' },
        { code: 'COBO / OLDER / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Worlds built with code, from blocks to typing.' },
        { code: 'COBO / OLDER / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works and where it fails, for ages 8 to 14.' }
      ] },
      { num: 'III', h3: 'Secundaria and beyond', sub: 'Ages 12 and up', courses: [
        { code: 'COBO / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The usual next step after primaria Python.' },
        { code: 'COBO / TEEN / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, ages 10 to 15.' },
        { code: 'COBO / TEEN / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for adults', blurb: 'For parents and grandparents who want to code as well.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How a week of live classes works for a San Borja child',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Peruvian mornings match the Indian evening, when many mentors teach.' },
      { time: 'Afternoons', l: 'After-school hours in San Borja can be arranged too; just ask.' },
      { time: '1-on-1', l: 'One child, one mentor, at the hour and pace you choose.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same friendly face every week.' },
      { h3: 'Few words, clear words', p: 'Simple English, shown as well as said.' },
      { h3: 'Make every time', p: 'Each class ends with something built.' },
      { h3: 'Same age only', p: 'Six-year-olds learn with six-year-olds.' },
      { h3: 'Notes for parents', p: 'What your child made and what comes next.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'What our older students go on to build',
  projectsLede: 'Children who carry on into secundaria build impressive things. A few projects by our older students are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' and students\' Google reviews, quoted as written.',

  fees: {
    h2: 'Fees for families in San Borja',
    lede: 'Our plans are monthly and priced in US dollars, paid by card. If you pay with a card in soles, your bank changes the dollars into soles at its own daily rate, so the statement can show a slightly different amount each month.',
    free: ['A free first class', 'A tiny game made together', 'No card details'],
    group: ['Fifteen to twenty children of the same age', 'The same mentor each week', 'Two live classes a week', 'Monthly; stop when you wish'],
    one: ['Your child and a mentor alone', 'A pace for young or shy learners', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'San Borja parents ask',
    h2: 'Coding classes in San Borja: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught only in English. With young children the mentor uses very simple words, gestures and the screen itself, so a child can follow before they understand every word. A child may answer in Spanish; the mentor understands and replies in English.' },
      { q: 'Is six too young to start?', a: 'No, for the right kind of class. At 6, children solve reasoning puzzles and drag Scratch blocks; they do not type code. Sessions are short and active. Most six-year-olds in 1° de primaria manage well, especially one to one at first.' },
      { q: 'When should my child move from blocks to Python?', a: 'Usually around 9, in 4° de primaria, once they read fluently and type without hunting for keys. The mentor suggests the move when a child is ready, not on a fixed date.' },
      { q: 'When are classes in San Borja time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so 10:30 in San Borja is 21:00 in India.' },
      { q: 'Does my child need a computer?', a: 'Yes: a laptop or desktop with a mouse, a camera and a microphone. Tablets and phones are fine for watching but not for building programs. A shared family computer works if the hour is planned around it.' },
      { q: 'Does primary school in Peru teach coding?', a: 'Not as a subject. The CNEB plan of studies for primaria has no computing period; digital skills are a competency shared across subjects. Some private and bilingual schools add their own computing classes.' },
      { q: 'Will my child use AI chatbots?', a: 'No adult chatbot accounts. Claude is for users aged 18 and over, and ChatGPT requires a parent\'s permission under 18. Children learn how AI works through our own child-safe projects and learn to reason before using any tool.' },
      { q: 'Do you have a centre in San Borja?', a: 'No. We have no premises in San Borja or anywhere in Peru, and we are not connected with the municipality, MINEDU or any school. All classes are live online with mentors in India. Children who complete a course receive our certificate of completion.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars. A card in soles is converted by your bank, so the figure can vary slightly from month to month. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for parents of young coders in San Borja.',
    items: [
      { href: '/coding-classes-in-english-for-peruvian-kids', label: 'Coding in English for Peruvian kids', p: 'How children in Peru learn code in English.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our guide for families across Peru.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'The block-based start, explained.' },
      { href: '/python-for-10-year-olds', label: 'Python at ten', p: 'What a ten-year-old can do in Python.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for popular AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first class from San Borja',
    lede: 'In the free class your child makes something small and fun with a mentor, perhaps a sprite that dances or a first line of Python. The mentor sees how your child thinks and how much English they follow, and then suggests a course, a group or one-to-one start, and a time that suits your family.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'All classes are live on video and in English, with mentors based in India. You can message us on WhatsApp in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children in Peru', links: [
        { href: '/coding-for-kids-age-6-peru', label: 'Coding at 6' },
        { href: '/coding-for-kids-age-8-peru', label: 'Coding at 8' },
        { href: '/coding-for-kids-age-10-peru', label: 'Coding at 10' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Online coding for kids' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Spaces are letters too'
  },

  personalityCss: `
.ag-root.ag-cobo .ag-hero h1 { max-width: 15ch; letter-spacing: -0.01em; }
.ag-root.ag-cobo .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-cobo .ag-table td:first-child { white-space: nowrap; }
.ag-root.ag-cobo .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cobo .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU, Edades normativas (page and PDF table); Ley N.° 28044, Ley General de Educación; MINEDU, Currículo Nacional de la Educación Básica (primaria plan of studies, competency 28); INEI Censos Nacionales 2025 (Lima Metropolitana indicators, Cuadros 1 and 3); INEI TIC en los Hogares II Trimestre 2026; MINEDU news of 16 March 2026; IANA tz database. All read 8 to 10 November 2026.',
    localProject: 'An original Python lesson for children of 10 to 12: wrapping a llama story onto a card 10 letters wide. Version 1 adds a space before every word and forgets to count it, so it prints "| The llama| 10" and "|jumped over| 11"; Version 2 counts the space, starts lines cleanly, keeps "extraordinarily" whole, and compares with textwrap, which cuts it into "extraordin" and "arily". Lesson family: greedy word wrap, the uncounted space, and a word longer than the line.',
    requiredMentions: ['|jumped over| 11', 'forgetting to count the space', 'extraordin', 'Spaces are letters too', '6,446 children aged 6 to 11', '126,125', 'Normative age on 31 March', '4° de primaria', 'Neither answer is wrong'],
    sources: [
      { claim: 'Normative age is the age on 31 March; grades from Inicial 3 años to 5° de secundaria against ages 3 to 16.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Primaria lasts six years; secundaria five (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria: 30 weekly periods of 45 minutes; Matemática 5 5 4 4 4 4; Inglés 2 2 3 3 3 3; competency 28 transversal; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'San Borja 126,125 total (121,870 counted, 4,255 omitted; 67,994 women, 58,131 men); by age 0 to 5 4,321, 6 to 11 6,446, 12 to 17 7,651, 60 and over 33,490.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: '68.2% of children aged 6 to 11 in Peru used the internet, II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '53,631 schools reopened on 16 March 2026 for 6,225,000 pupils.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' }
    ],
    rejectedClaims: [
      'MINEDU\'s maximum-age columns in the normative-age PDF: the extracted text does not align the two columns reliably; not used.',
      'Names or counts of primary or bilingual schools in San Borja: not used; no school named as a source of students.',
      'Income descriptions of San Borja: not used, by rule.',
      'Traffic times: argued without figures.',
      'Any link with the Municipalidad de San Borja, MINEDU or a school: none, and the page says so.'
    ]
  }
};
