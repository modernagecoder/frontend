// SHIP: market | Age 6 in Peru, 1° de primaria: coding before fluent reading, the first school year, a parent nearby | selection sort, unplugged: find the smallest, move it to the front, repeat; count comparisons
'use strict';
// Coding for kids age 6 in Peru (ag- English door, Peru cluster row PE072, hubGroup ages; alloc coag, #155700).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: English-reading parents in Peru of a child who is 6, usually in 1° de primaria (edad normativa 6 at 31 March).
// Spine (different from the Spanish twin programacion-para-ninos-de-6-anos, which covers inicial at 4 and 5, CNEB Tabla 5
// and 6 in minutes, attention span and a "repeat 3" dance): what a six-year-old can and cannot do with code; what the first
// primaria year sets (law, Reglamento, normative age, Inglés periods, competency 28 transversal); where in the 2026 school
// calendar a start fits (RM 501-2025-MINEDU Tabla 1, the page's primary-source table); the parent's job beside a child of
// six (INEI 2026 home technology); the classroom English a six-year-old hears (our word list); AI age rules; Peru time.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and facts-market/src/, read
// 9 November 2026; every quote string-matched in the raw text; copies of the scripts in src-pages/coding-for-kids-age-6-peru/):
//  - Ley 28044 (ley28044-pdf/text.txt): "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y
//    dura seis años."; "atiende a niños de 0 a 2 años en forma no escolarizada y de 3 a 5 años en forma escolarizada."
//  - D.S. 011-2012-ED Reglamento (ds011-2012-pdf/text.txt, OCR): "Atiende a niños y niñas a partir de los 6 años de edad."
//  - MINEDU Edades normativas (edades-normativas/text.txt): "Se considera la edad normativa al 31 de marzo de cada año."
//  - CNEB (cneb/text.txt): "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3"; "horas pedagógicas (45
//    minutos)"; "Competencias transversales a las áreas: Se desenvuelve en".
//  - RM 501-2025-MINEDU (rm501-2025-pdf/text.txt, OCR, page 11 Tabla 1; week counts match the dates): "Del 2 al 13 de marzo",
//    "Del 16 marzo al 15 de mayo", "Del 18 al 22 de mayo", "Del 25 mayo al 24 de julio", "Del 27 julio a 7 de agosto", "Del
//    10 agosto al 9 de octubre", "Del 12 al 16 de octubre", "Del 19 octubre a 18 de diciembre"; "treinta y seis (36) semanas
//    lectivas y ocho (08) semanas de gestión"; "tienen la potestad de definir una distribución de semanas lectivas y de
//    gestión distinta a la sugerida". No 2027 calendar norm was found on gob.pe on 8 November 2026 (FACTS 28).
//  - INEI TIC II Trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el uso de Internet fue menor entre los niños de 6
//    a 11 años (68,2%)"; "el 36,4% de los hogares del país disponía de al menos una computadora"; "en Lima Metropolitana, el
//    84,7% de los hogares disponía del servicio".
//  - Vendor terms (content/ai-tool-age-audit.json): ChatGPT "You must be at least 13 years old"; Gemini "You must be 13 (or
//    the applicable age in your country) or over"; Teachable Machine works in the browser without signing in.
//  - Time: tzdata southamerica "Zone America/Lima ... -5:00 Peru", last Rule Peru 1994; asia "Asia/Kolkata ... 5:30 IST".
// Our own calculations: 2 x 45 = 90 minutes of Inglés a week in 1° de primaria; clock conversions (Peru hour + 10:30).
// Our own example (sort6.py, run with python3 -I, exact output):
//    Round 1 : ['frog', 'duck', 'bear', 'lion', 'cat'] / Round 2 : same / Round 3 : ['frog', 'duck', 'cat', 'lion', 'bear'] /
//    Round 4 : same / Round 5 : same / Comparisons: 10
// Lesson family: selection sort done with toys first (find the smallest, move it to the front, repeat with the rest),
// replayed in Python by the mentor; some rounds change nothing; 4 + 3 + 2 + 1 = 10 comparisons for five toys.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'toys = [("lion", 9), ("duck", 4), ("bear", 12), ("frog", 2), ("cat", 7)]',
  '',
  'comparisons = 0',
  'for start in range(len(toys)):',
  '    smallest = start',
  '    for i in range(start + 1, len(toys)):',
  '        comparisons = comparisons + 1',
  '        if toys[i][1] < toys[smallest][1]:',
  '            smallest = i',
  '    toys[start], toys[smallest] = toys[smallest], toys[start]',
  '    print("Round", start + 1, ":", [name for name, size in toys])',
  '',
  'print("Comparisons:", comparisons)'
].join('\n');

const OUT = [
  "Round 1 : ['frog', 'duck', 'bear', 'lion', 'cat']",
  "Round 2 : ['frog', 'duck', 'bear', 'lion', 'cat']",
  "Round 3 : ['frog', 'duck', 'cat', 'lion', 'bear']",
  "Round 4 : ['frog', 'duck', 'cat', 'lion', 'bear']",
  "Round 5 : ['frog', 'duck', 'cat', 'lion', 'bear']",
  'Comparisons: 10'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for kids aged 6' },
  slug: 'coding-for-kids-age-6-peru',
  code: 'coag',
  accent: '#155700',
  accentRationale: 'Coding for kids age 6 in Peru: a deep sprout green #155700, the colour of the first leaves on a seedling, for a page about the very first year of coding; dark enough to pass 4.5:1 on the paper #FBF8F2 and on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for kids age 6 in Peru',
  title: 'Coding for Kids Age 6 in Peru: Live Classes in English',
  description: 'Coding for a six year old in Peru: live online classes in English, Scratch blocks and games for 1° de primaria, a parent nearby, a group or one to one, at any hour.',
  ogDescription: 'What a six year old in Peru can really learn in a coding class, where a start fits in the 2026 school calendar (RM 501-2025-MINEDU), what parents do beside the screen, and a sorting lesson done with toys.',
  twitterDescription: 'Live coding classes in English for six year olds in Peru, with blocks, toys and patient mentors, at an hour your family picks.',
  pageName: 'Coding for Kids Age 6 in Peru',
  webPageDescription: 'A guide for parents in Peru whose child is six and in the first year of primaria, built from the Ley General de Educación and its Reglamento, MINEDU normative ages, the CNEB plan of studies, the 2026 school calendar in RM 501-2025-MINEDU, INEI household technology data for the second quarter of 2026, vendor age terms and the tz database, with an original sorting lesson.',
  courseDescription: 'Live online coding classes for six year olds in Peru, taught in English by mentors based in India: block coding in Scratch, puzzles and unplugged games, in a group of fifteen to twenty children of the same age or one to one, at an hour the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding at age 6',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#can', label: 'At six' },
    { href: '#calendar', label: 'School year' },
    { href: '#parent', label: 'Parents' },
    { href: '#lesson', label: 'Toy lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Age 6 &middot; 1° de primaria &middot; Live, in English',
  h1: 'Coding for kids age 6 in Peru',
  lede: 'Six is the age when most children in Peru walk into 1° de primaria, still learning to read and very ready to play. A coding class at this age looks less like typing and more like a game with rules: drag a block, watch a cat move, try again. This page is for parents who want that for their six year old, in English, with a real teacher watching every move.',
  secondaryCta: { href: '#lesson', label: 'See the toy-sorting lesson' },
  wa: 'Hello Modern Age Coders, our child is six and lives in Peru. We would like to try a free coding class in English. Could you help us book one?',
  heroNote: 'Teaching live since 2020 &middot; 4.9 from about 547 Google reviews &middot; a six year old clicks and drags, the mentor talks them through it in English',
  spec: [
    ['Age', 'Six, usually 1° de primaria'],
    ['Tools', 'Scratch blocks, toys, paper'],
    ['Reading needed', 'Very little'],
    ['Format', 'Live video, never a recording'],
    ['Group or alone', 'Fifteen to twenty peers, or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Yes, a six year old in Peru can learn to code, and Modern Age Coders teaches it live, online and in English. Children of six work in Scratch, snapping coloured blocks together to make a character move, talk and repeat, so they need very little reading. A mentor based in India shares the screen, speaks slowly, and lets the child find each fix. Families pick a group of fifteen to twenty six year olds or one-to-one lessons, at any hour that suits them in Peru, and the first class is free.',

  picks: {
    eyebrow: 'Where six year olds begin',
    h2: 'Three courses that fit a six year old',
    lede: 'All three assume nothing: no reading speed, no typing, no earlier coding. The free class tells us which one suits your child.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'COAG / 01', title: 'Scratch Coding for Kids', note: 'The usual first course at six. Over about three months a child makes a character dance, a simple chase game and a talking card for the family, each one built from blocks they choose themselves.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'COAG / 02', title: 'Reasoning for Young Thinkers', note: 'For a child who loves puzzles but is not yet comfortable with a mouse. Patterns, order, more and less, and if-this-then-that, mostly away from the keyboard, in a band for ages 6 and 7.' },
      { course: 'kids-coding-blocks-masterclass', code: 'COAG / 03', title: 'Coding for Kids, the long path', note: 'A year-long block-coding journey that starts at six and grows with the child: stories first, then games, then small apps, always grouped with children of the same age.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this page is for',
      h2: 'Who are coding classes for six year olds in Peru for?',
      lede: 'Parents of a child who has just turned six or is about to, most often in the first year of primaria, who would like that child to meet coding with a patient adult and in English.',
      body: [
        { kind: 'three', cells: [
          { h3: 'First graders in bilingual schools', p: 'English is already part of their school day. A coding class in English gives the same words a second, playful use: "move", "turn" and "again" stop being vocabulary and become instructions that make something happen on screen.' },
          { h3: 'Children who arrived in Peru recently', p: 'A six year old who is still finding their feet in Spanish may enjoy one hour a week where the language is familiar and the task is pure play. The mentor stays the same each week, which matters a great deal at this age.' },
          { h3: 'Peruvian families who want English to be useful', p: 'A child of six does not need perfect English to follow a coding class. They need a teacher who shows each step, waits, and repeats. Hearing English while building something real is a gentle way in.' }
        ] },
        { kind: 'p', mt: true, html: 'If you would rather read about this in Spanish, our page <a class="ag-inline-link" href="/programacion-para-ninos-de-6-anos">programación para niños de 6 años</a> takes a different route through the same age, including what to do when a child is still in inicial at four or five. The classes it describes are the same live English lessons.' }
      ]
    },
    {
      id: 'can',
      tint: 'tint',
      eyebrow: 'What is realistic at six',
      h2: 'Can a six year old really learn to code?',
      lede: 'Yes, as long as "coding" means giving clear instructions in order and watching what happens, not typing lines of text. That is the real skill under every program, and six year olds are surprisingly good at it.',
      body: [
        { kind: 'two',
          leftH3: 'What a six year old can do',
          left: [
            'Put three or four steps in the right order so a character walks to a door, opens it and says hello. Notice when the order is wrong, because the character walks into the wall instead. Use a "repeat" block once they see the same steps coming round again.',
            'React to a click or a key: when the green flag is pressed, the cat starts; when the space bar is pressed, it jumps. Simple cause and effect is the heart of coding at six, and the child sees it the moment they press the key.'
          ],
          rightH3: 'What can wait until later',
          right: [
            'Typing words of code. Most children are ready for that between nine and ten, once reading and spelling feel easy. Before then, blocks do the same job with no spelling to get wrong.',
            'Long projects, variables that keep a score, and anything that needs a child to hold more than three or four ideas in their head at once. We bring those in around seven or eight, when the child asks for them by trying to build a game that needs them.'
          ] },
        { kind: 'p', mt: true, html: 'A good sign that coding suits your six year old: they like to arrange things. Toy cars in a line, stickers in a row, a story told in the right order. Coding gives that instinct a screen and a purpose. Children who do not show it yet often grow into it after a few weeks of play; it is a habit, not a talent.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'The first year of primaria',
      h2: 'What does first grade in Peru give a six year old in computing?',
      lede: 'A great deal of reading, writing, numbers and English, and no separate computing lesson. Coding, if it happens at school at this age, depends on the school.',
      body: [
        { kind: 'two',
          leftH3: 'Where a six year old sits',
          left: [
            'Under Ley 28044, the education law of 2003, primaria "dura seis años"; the Reglamento that puts the law into practice opens primaria to children "a partir de los 6 años de edad". Before that, the law describes inicial as serving children of 3 to 5 in a school setting.',
            'MINEDU places each child by their age on 31 March of the school year, which it calls the edad normativa. So a child who is six by that date belongs in 1° de primaria, while one who turns six in April waits a year and is then among the oldest in the room. For that reason our groups follow a child\'s age and stage, never the grade printed on a school report.'
          ],
          rightH3: 'What the national plan sets for 1°',
          right: [
            'In MINEDU\'s national curriculum, the CNEB, the weekly plan for 1° de primaria gives Matemática 5 teaching periods, Comunicación 5 and Inglés 2. A teaching period, the hora pedagógica, lasts 45 minutes, so a first grader in a school that follows the plan gets about 90 minutes of English a week.',
            'Digital skills are not an area of their own. The CNEB lists "Se desenvuelve en entornos virtuales generados por las TIC" among the competencies shared across all areas, the competencias transversales. How much screen work a first grader actually does is therefore up to each school.'
          ] },
        { kind: 'p', mt: true, html: 'We say this plainly so nobody is misled: Modern Age Coders is not linked to MINEDU, to any UGEL or to any school in Peru. We award no Peruvian grades. A child who completes one of our courses receives a certificate of completion issued by us, and nothing more official than that.' }
      ]
    },
    {
      id: 'calendar',
      tint: 'tint',
      eyebrow: 'When to start',
      h2: 'When in the school year should a six year old start coding?',
      lede: 'Any week works, because our classes do not follow a term. Many families still like to begin in a school break, when a new routine has room to settle. The 2026 calendar set by MINEDU shows where those breaks fell.',
      body: [
        { kind: 'table', numCols: [1], caption: 'The 2026 school year in Peru, block by block (RM 501-2025-MINEDU, Tabla 1)', head: ['Block', 'Weeks', 'Dates in 2026'], rows: [
          ['First management block (no classes for pupils)', '2', '2 to 13 March'],
          ['First teaching block', '9', '16 March to 15 May'],
          ['Second management block', '1', '18 to 22 May'],
          ['Second teaching block', '9', '25 May to 24 July'],
          ['Third management block', '2', '27 July to 7 August'],
          ['Third teaching block', '9', '10 August to 9 October'],
          ['Fourth management block', '1', '12 to 16 October'],
          ['Fourth teaching block', '9', '19 October to 18 December'],
          ['Fifth management block', '2', '21 to 31 December']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Resolución Ministerial N.° 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, Tabla 1, read from the signed PDF on 9 November 2026. The norm sets thirty-six teaching weeks and eight management weeks, and lets regional education offices (DRE and UGEL) set a different split for climate or social reasons, so check your own school\'s calendar.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the calendar as a parent',
          left: [
            'The management weeks are the gaps. In 2026 there was a week in late May, two weeks from late July into early August, and a week in mid-October. For a six year old, starting coding in one of those weeks means the first two or three classes happen without homework competing for energy.',
            'The longest gap of all is the summer, from January until the school year opens in March. In 2026 the first management block began on 2 March, so January and February sat outside the school calendar entirely.'
          ],
          rightH3: 'And for 2027',
          right: [
            'When we checked gob.pe on 8 November 2026, MINEDU had begun sending out materials for the 2027 school year but had not yet published the 2027 calendar norm. Until it appears, treat the 2026 pattern as a guide only.',
            'Because our lessons run all year at hours you choose, a start date is never a deadline. A child who begins in October simply carries on through the summer and into the new school year, with the same mentor.'
          ] }
      ]
    },
    {
      id: 'parent',
      eyebrow: 'Beside the screen',
      h2: 'What does a parent do during an online class for a six year old?',
      lede: 'In the first few weeks, quite a lot; after that, very little. A six year old needs help with the set-up and a calm adult within earshot, not a second teacher.',
      body: [
        { kind: 'ol', items: [
          '<strong>Choose the machine.</strong> A laptop or desktop with a mouse works far better than anything else. Small hands find a trackpad hard, and a phone is too small for blocks and a mentor\'s face at the same time.',
          '<strong>Fit a headset.</strong> Children\'s headsets with a built-in microphone cut out the noise of a busy home and help the child hear English clearly.',
          '<strong>Sit nearby for the first classes.</strong> Help with logging in and with the mouse, then step back. When the mentor asks your child a question, let your child answer, even slowly, even in a mix of words.',
          '<strong>Stay within earshot later.</strong> After three or four weeks most six year olds manage alone, as long as an adult can be called if the internet drops.',
          '<strong>Ask for a show-and-tell.</strong> After each class, ask your child to show you one thing they made and to tell you what it does. That one minute fixes the lesson in their memory.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Peruvian homes have',
          left: [
            'INEI\'s household survey for the second quarter of 2026 found that 68.2% of children aged 6 to 11 in Peru used the internet, the lowest share of any age group except people over 60. In Lima Metropolitana, 84.7% of households had an internet service.',
            'In that same quarter only 36.4% of homes across the country owned so much as one computer. If the family laptop is shared, choose a class hour when nobody else needs it; with timing that is entirely flexible, that is easy to arrange.'
          ],
          rightH3: 'Screen time, kept sensible',
          right: [
            'A class for a six year old is a short, active session: the child is building and talking, not watching. We keep the screen part tight and fill the rest with things to do with the hands, such as the toy lesson below.',
            'If your child is tired, it is fine to stop early and pick up next time. Pushing a six year old through a bad day teaches them that coding is a chore, which is the one lesson we never want them to learn.'
          ] }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'An original lesson',
      h2: 'What does a first sorting lesson look like? Lining up toys by size',
      lede: 'Sorting is one of the oldest problems in computing, and a six year old can solve it with five toys on the floor. The lesson is ours; we run it in the first month with children of six and seven.',
      body: [
        { kind: 'two',
          leftH3: 'The game, with toys',
          left: [
            'Your child brings five toys to the camera: say a lion, a duck, a bear, a frog and a cat, all different sizes. The mentor asks for them in a line, smallest first. Most six year olds just shuffle them about until it looks right, which works but cannot be explained.',
            'So the mentor gives one rule to follow, and only one. <strong>Find the smallest toy. Put it at the front. Now do the same with the toys that are left.</strong> The child says the rule out loud in English, then plays it, round by round.'
          ],
          rightH3: 'What the child notices',
          right: [
            'In some rounds nothing moves, because the smallest toy left is already in the right place. Children find this funny and slightly suspicious: did we do the round at all? Yes, we looked at every toy, and looking counts.',
            'By the end the child has done something real programmers do: followed the same short rule again and again until the job is finished. That is a loop, and this way of sorting has a name, selection sort.'
          ] },
        { kind: 'p', mt: true, html: 'Then the mentor shows the same game on screen, written in Python. A six year old does not type this. We show it so that the child can watch the computer play their game, and so that you, the parent, can see the rule your child has just used turned into code. The numbers are the toys\' sizes in centimetres, which we made up.' },
        { kind: 'code', label: 'The toy line-up, as the mentor runs it in Python', lang: 'Python', code: PY },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: OUT, note: 'Exact output when we ran it with Python 3 (python3 -I). Rounds 2, 4 and 5 change nothing, just as on the floor, and the computer compared two toys 10 times in all.' },
        { kind: 'p', mt: true, html: 'Ten comparisons for five toys comes from 4 + 3 + 2 + 1: in the first round you check four toys against the smallest so far, then three, then two, then one. Older children in our classes later work out that ten toys take 45 comparisons, and start to wonder whether there is a quicker way. There is, and that question leads to a lot of good computing.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Our practice, on the floor.</strong> Line up five spoons by length using the rule. Say "smallest to the front" each round.',
          '<strong>Our practice, a twist.</strong> Now line them up biggest first. What one word in the rule has to change?',
          '<strong>Our practice, counting.</strong> With three toys, how many times do you compare two of them? Try it, then try four toys.',
          '<strong>Our practice, in Scratch (with the mentor).</strong> Drag three sprites into a row and make each one say its size when clicked.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Classroom English',
      h2: 'Which English words will a six year old hear in a coding class?',
      lede: 'Short, concrete ones, said slowly and shown on screen at the same moment. By the end of the first month most six year olds understand all of these and use several.',
      body: [
        { kind: 'table', numCols: [], caption: 'The words our mentors use most with six year olds (our classroom list)', head: ['Word', 'What it means in class', 'What the child does'], rows: [
          ['Click', 'Press the mouse button once', 'Clicks the green flag to start'],
          ['Drag', 'Hold the button down and move', 'Pulls a block into place'],
          ['Move, turn', 'The two things a sprite does most', 'Snaps a "move" or "turn" block on'],
          ['Repeat', 'Do it again, a set number of times', 'Wraps steps in a repeat block'],
          ['First, next, last', 'The order of the steps', 'Says the steps aloud in order'],
          ['Bigger, smaller', 'Comparing sizes', 'Sorts toys and sprites'],
          ['Try again', 'A mistake is fine, run it once more', 'Runs the program after a change'],
          ['Show me', 'Point to it on your screen', 'Moves the mouse to the block']
        ] },
        { kind: 'p', mt: true, html: 'Classes for six year olds are in English only, but the mentor never rushes and never makes a child feel slow. If a child answers in Spanish, the mentor nods, says the English word back, and moves on. Understanding comes long before speaking, and that is perfectly normal at six.' }
      ]
    },
    {
      id: 'ai',
      tint: 'tint',
      eyebrow: 'AI and young children',
      h2: 'Should a six year old use AI tools?',
      lede: 'Not chatbots. The companies that make them do not allow children this young, and a six year old has better things to do than ask a machine for answers.',
      body: [
        { kind: 'two',
          leftH3: 'What the companies say',
          left: [
            'OpenAI\'s terms for ChatGPT say "You must be at least 13 years old". Google says that to use Gemini with a personal or school account "You must be 13 (or the applicable age in your country) or over". Neither tool is meant for a six year old, and we never put one in front of a child this age.',
            'Our full list of tools and the ages their makers allow is in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, which quotes each company\'s own terms.'
          ],
          rightH3: 'What AI looks like at six',
          right: [
            'At six, AI is a game of sorting and guessing done with the mentor: which of these pictures shows a cat, and how did you know? Later, around eight, children try Teachable Machine, a Google tool that trains in the browser without signing in, and see a computer learn from examples they show it.',
            'The habit we build now is the one that matters later: think first, test second, and do not believe something just because a machine says it.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'What time of day suits a six year old in Peru?',
      lede: 'Usually a morning in the summer break, a weekend morning, or late afternoon on a school day after a rest. Peru stays five hours behind UTC all year, and India stays five and a half hours ahead, so whatever your clock says, the mentor\'s reads ten hours and thirty minutes on.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours a six year old might use, converted to India time (examples only, not class times)', head: ['Peru time', 'India time', 'Why families pick it'], rows: [
          ['08:00', '18:30', 'A fresh summer-break morning'],
          ['10:00', '20:30', 'Saturday, after breakfast'],
          ['15:30', '02:00, next day', 'After lunch and a rest'],
          ['17:00', '03:30, next day', 'Before dinner on a school day'],
          ['18:30', '05:00, next day', 'Early evening, for a child who naps']
        ] },
        { kind: 'source', html: 'Source: IANA tz database (America/Lima, UTC minus 5 with no summer time since 1994; Asia/Kolkata, UTC plus 5:30). The conversions are ours.' },
        { kind: 'p', mt: true, html: 'Neither country changes its clocks, so a class booked for 17:00 in Trujillo or Lima stays at 17:00 in January and in July. For young children we suggest sessions before about 18:30, when attention is still good. All our Peru pages, by age and by city, are listed on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> page, and families in the capital will find more on our <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress at six',
    h2: 'How does a six year old grow as a coder over a year?',
    lede: 'In small, visible steps. These four stages are ours; they tell the mentor what to work on next and tell you what to look for at home.',
    table: { numCols: [], caption: 'Our four stages for the first year, for children of six', head: ['Stage', 'Usually by', 'On screen', 'Out loud'], rows: [
      ['1. Order', 'Month 1 to 2', 'Puts three or four blocks in order so a sprite reaches a goal', '"First move, then turn."'],
      ['2. Repeat', 'Month 3 to 4', 'Uses a repeat block instead of copying the same block', '"Repeat four times."'],
      ['3. Events', 'Month 5 to 7', 'Makes a sprite react to a click or a key', '"When I press space, it jumps."'],
      ['4. A small game', 'Month 8 to 12', 'Builds a short game with a start and an end', '"You win when the cat finds the fish."']
    ] },
    left: { h3: 'For parents', ps: [
      'Look for the child explaining, not just clicking. A six year old who can tell you why the cat stopped has learnt more than one who made it move faster.',
      'Progress at this age is uneven. A slow month is often followed by a jump; keep the routine and let it come.'
    ] },
    right: { h3: 'For your six year old', ps: [
      'If the cat goes the wrong way, that is a clue, not a mistake. Look at the blocks and find the one that sent it there.',
      'You can always press the green flag again. Coders try things lots of times.'
    ] }
  },

  catalogue: {
    eyebrow: 'Also good at six',
    h2: 'Nine more courses for six year olds and the years just after',
    lede: 'Every one of them taught live, in English, with children of a similar age, or one to one if you prefer.',
    bands: [
      { num: 'I', h3: 'Numbers and patterns', sub: 'Ages 4 to 10', courses: [
        { code: 'COAG / NUM / 01', slug: 'early-math-foundations', title: 'Early Maths Foundations', blurb: 'Counting, shapes and patterns with real objects, from four to seven.' },
        { code: 'COAG / NUM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths for Kids', blurb: 'Number sense built slowly, without tricks to memorise.' },
        { code: 'COAG / NUM / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and Mental Maths', blurb: 'Beads first, then pictures in the head, from age five.' }
      ] },
      { num: 'II', h3: 'Thinking and building', sub: 'Ages 6 to 12', courses: [
        { code: 'COAG / BUILD / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Maths, Grades 1 to 5', blurb: 'School maths with a placement check, grade by grade.' },
        { code: 'COAG / BUILD / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking a job into steps, from age seven.' },
        { code: 'COAG / BUILD / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks inside a world children already love, from seven.' }
      ] },
      { num: 'III', h3: 'For the next birthdays', sub: 'Ages 8 to 12', courses: [
        { code: 'COAG / NEXT / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines guess, and where they go wrong, from eight.' },
        { code: 'COAG / NEXT / 02', slug: 'game-development-masterclass-for-kids', title: 'Game making for kids', blurb: 'Scratch, Roblox and Minecraft games, from eight.' },
        { code: 'COAG / NEXT / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed code, usually from about nine.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How classes run for a six year old in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'School days', l: 'Late afternoon, after lunch and a rest, is a favourite for first graders.' },
      { time: 'January to March', l: 'Summer mornings are free; tell us the hour that suits your house.' },
      { time: '1-on-1', l: 'Your child alone with a mentor, at an hour set around naps and meals.' }
    ],
    cells: [
      { h3: 'Short, busy sessions', p: 'Hands on the mouse early, with a toy or paper task in the middle.' },
      { h3: 'One familiar face', p: 'The same mentor every week, so the child feels safe to try.' },
      { h3: 'English, slowly', p: 'Simple words, said clearly and shown on the screen together.' },
      { h3: 'Six year olds together', p: 'Groups formed by age, so nobody is left behind or held back.' },
      { h3: 'A note for you', p: 'What your child built, what was tricky, what comes next.' },
      { h3: 'Your choice', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Where young coders get to if they keep going',
  projectsLede: 'Six year olds build small things. The students below started small too and kept at it into their teens; more of their work is on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from parents and students, as they wrote them on Google.',

  fees: {
    h2: 'What classes for a six year old cost from Peru',
    lede: 'We charge in US dollars, monthly, by card. The bank behind your card turns each charge into soles at its own rate on the day, so the figure on your statement can move a little from month to month.',
    free: ['A free first class', 'Your child builds something small and shows it', 'No card needed to book'],
    group: ['Fifteen to twenty six year olds', 'The same mentor throughout', 'Two live classes a week', 'Pay by the month, stop when you like'],
    one: ['One child, one mentor', 'Pace set around your child', 'Hours you choose']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Coding at age 6: what parents in Peru ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only, by mentors who speak slowly and clearly and adjust to your child\'s pace and accent. At six, most of the work is clicking, dragging and watching, and the mentor shows each step on the screen while saying it, so a child who is new to English can still follow.' },
      { q: 'Is six too young to start coding?', a: 'No. Blocks suit a six year old very well, because a child can build a working program without reading or spelling. What is too early at six is typed code; we leave that until about nine.' },
      { q: 'My child cannot read well yet. Can they still join?', a: 'Yes. Scratch blocks have colours and shapes as well as words, and the mentor reads each one aloud. Many six year olds in our classes are still learning to read in Spanish and in English, and coding often gives reading a push.' },
      { q: 'Does my child need to know how to use a mouse?', a: 'It helps, but it is not required. In the first classes the mentor practises clicking and dragging with your child. A small mouse is much easier for six year olds than a trackpad.' },
      { q: 'How long is a class for a six year old?', a: 'Classes are kept short and active for this age, with a hands-on task in the middle so the child is not staring at the screen the whole time. Your mentor will explain the exact length for your group or one-to-one plan at the free class.' },
      { q: 'What time are the classes in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Because the gap never changes, 17:00 for your child is always 03:30 the following morning for the mentor in India.' },
      { q: 'Does first grade in Peru already teach coding?', a: 'No, not as a subject of its own. MINEDU\'s national curriculum gives 1° de primaria periods of Matemática, Comunicación and Inglés among others, but no computing area; digital skills are treated as a competency shared by all subjects. Some private schools add their own computing classes.' },
      { q: 'Will my six year old use ChatGPT?', a: 'No. OpenAI\'s terms say users must be at least 13, and Google sets 13 for Gemini on personal and school accounts. Six year olds in our classes learn what AI is through games with the mentor, never through adult chatbots.' },
      { q: 'Can siblings of different ages share a class?', a: 'Not in a group: we form groups by age so a six year old is with other six year olds. Brothers and sisters can each have their own group, or share a one-to-one plan if the mentor agrees it will work for both.' },
      { q: 'Are you connected with MINEDU or a Peruvian school?', a: 'No. We are an independent online school, our mentors work from India, and we have no link to MINEDU, a UGEL or any school in Peru. We give no Peruvian grades; children who finish a course get a completion certificate from us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for parents of young children',
    lede: 'Pages that help with the next step.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Why block coding comes before typing.' },
      { href: '/best-age-to-start-coding', label: 'When to start coding', p: 'Ages, readiness signs and first tools.' },
      { href: '/coding-for-8-year-olds', label: 'Coding at eight', p: 'What changes two birthdays from now.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Each tool and the youngest user its maker allows.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, from hello to goodbye.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why we ask before we tell.' }
    ]
  },

  start: {
    h2: 'Try a free class with your six year old',
    lede: 'In the free class a mentor plays a short sorting or ordering game with your child, then helps them make a sprite move for the first time. Afterwards you hear what the mentor noticed and which course, format and hour would suit your child.',
    readFirst: 'Want to know more before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a real class, and our <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'All classes are live video lessons from India, taught in English. WhatsApp us in English for the quickest answer.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Young children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/best-age-to-start-coding', label: 'When to start' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/programacion-para-ninos-de-6-anos', label: 'Leer en español' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Smallest to the front, then again'
  },

  personalityCss: `
.ag-root.ag-coag .ag-hero h1 { max-width: 16ch; letter-spacing: -0.01em; }
.ag-root.ag-coag .ag-capsule { border-left-width: 6px; }
.ag-root.ag-coag .ag-table td { line-height: 1.6; }
.ag-root.ag-coag .ag-steps li { margin-bottom: 0.4rem; }
.ag-root.ag-coag .ag-code pre { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'Ley 28044 and its Reglamento D.S. 011-2012-ED; MINEDU Edades normativas; CNEB plan of studies (primaria periods, hora pedagógica, competencias transversales); RM 501-2025-MINEDU Tabla 1 (2026 calendar); INEI Estadísticas de las TIC en los Hogares, II Trimestre 2026; vendor terms for ChatGPT, Gemini and Teachable Machine (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original first-month lesson for children of six: five toys lined up by size with one spoken rule (find the smallest, move it to the front, repeat with the rest), then replayed by the mentor in Python; the run shows rounds 2, 4 and 5 changing nothing and ends Comparisons: 10 (4 + 3 + 2 + 1). Practice set with spoons, a reversed rule, counting comparisons, and a Scratch version. Lesson family: selection sort, unplugged first.',
    requiredMentions: ['Find the smallest toy. Put it at the front.', 'Comparisons: 10', 'this way of sorting has a name, selection sort', 'The 2026 school year in Peru, block by block (RM 501-2025-MINEDU, Tabla 1)', '19 October to 18 December', 'about 90 minutes of English a week', 'The words our mentors use most with six year olds', 'Smallest to the front, then again', '68.2% of children aged 6 to 11 in Peru used the internet, the lowest share'],
    sources: [
      { claim: 'Primaria lasts six years; inicial serves ages 3 to 5 in school settings (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria serves children from age 6 (D.S. 011-2012-ED).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Normative age taken on 31 March.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Primaria periods Matemática 5, Comunicación 5, Inglés 2 in 1°; hora pedagógica 45 minutes; TIC competency transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 calendar blocks, 36 teaching and 8 management weeks, regional variation allowed.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Children 6 to 11: 68.2% used the internet; 36.4% of households with a computer; 84.7% of Lima Metropolitana households with internet (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ChatGPT and Gemini minimum age 13.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'An exact attention span in minutes for six year olds: no primary source fetched; the page gives none.',
      'Dates of the 2027 school calendar: no 2027 norm on gob.pe on 8 November 2026; the page says so.',
      'That coding improves reading or ENLA results: no source; the page only says coding often gives reading a push, as our classroom observation.',
      'Any link with MINEDU, a UGEL or a school: none, stated on the page.',
      'Spanish-language teaching: refused; classes are in English only.'
    ]
  }
};
