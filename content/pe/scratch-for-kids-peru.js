// SHIP: market | Scratch for kids in Peru, in English: what runs inside a block, ages, remixing, leaving Scratch | direction to x and y: the trigonometry inside "move 10 steps", and 30 frames a second as speed
'use strict';
// Scratch for kids in Peru (ag- English door, Peru cluster row PE070, hubGroup subjects; alloc sck, #04585C).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Search: "scratch for kids peru", English twin of "scratch para niños" (KEYWORDS.md section 2 and 4; Scratch depth 29).
// The Spanish sibling (scratch-para-ninos-en-ingles, not live yet) covers what Scratch is, free versus a class, grades, the English
// interface and an edge-detection bug. This page takes its own spine: what Scratch's own source code says a block does (a
// table), the lesson on direction and speed, what a 6 year old and a 10 year old each do in Scratch, remixing versus copying,
// what home needs, and the signs a child is ready for typed code.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/scratch-for-kids-peru/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - scratch-vm, src/engine/runtime.js (github.com/scratchfoundation/scratch-vm, develop): "static get STAGE_WIDTH () {
//    return 480;"; THREAD_STEP_INTERVAL "return 1000 / 60;"; "In compatibility mode, how rapidly we try to step threads, in ms."
//    THREAD_STEP_INTERVAL_COMPATIBILITY "return 1000 / 30;".
//  - scratch-gui, src/lib/vm-manager-hoc.jsx: "this.props.vm.setCompatibilityMode(true);" (so the editor steps 30 times a second).
//  - scratch-gui, src/lib/layout-constants.js (copied from the sibling's raw folder): "standardStageWidth: 480,"
//    "standardStageHeight: 360,".
//  - scratch-vm, src/blocks/scratch3_motion.js: moveSteps "const radians = MathUtil.degToRad(90 - util.target.direction);
//    const dx = steps * Math.cos(radians); const dy = steps * Math.sin(radians);".
//  - scratch-vm, src/blocks/scratch3_operators.js: random "// If both arguments are ints, truncate the result to an int."
//    "return low + Math.floor(Math.random() * ((high + 1) - low));" else "return (Math.random() * (high - low)) + low;".
//  - Scratch Foundation home page (scratchfoundation.org/home, about.html from the sibling's raw folder): "Scratch was developed at
//    the MIT Media Lab in 2007"; "In 2019, Scratch was transferred from MIT to the Scratch Foundation: an independent nonprofit";
//    "200 million kids create on Scratch for free"; "created over a billion Scratch projects"; "Scratch is free for everyone.";
//    "Don't want to "start from Scratch"? Try remixing".
//  - Scratch statistics page (scratch.mit.edu/statistics/, statistics.html.txt fetched by the sibling writer): "download the
//    offline editor"; language menu includes "English" and "Español Latinoamericano".
//  - Not fetched by this writer: scratch.mit.edu (403 to a sibling writer earlier; the brief allows one try; the raw copies above
//    were reused instead and no new request was made). Scratch's own age recommendation is not printed: its FAQ renders
//    client-side, so the page gives our course ages only.
//  - MINEDU Edades normativas (FACTS 13, 14): 1° primaria 6, 3° 8, 5° 10, by age on 31 March.
//  - Ley 28044 (FACTS 5): primaria "dura seis años".
//  - CNEB (FACTS 35): "Crea objetos virtuales en diversos formatos: consiste en construir materiales digitales con diversos
//    propósitos, siguiendo un proceso de mejoras sucesivas y retroalimentación".
//  - INEI TIC II Trimestre 2026 (MARKET 1.4): Cuadro 3.3, children 6 to 11 who use a mobile phone, 67.8%.
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv).
// Our own example (motion.py in the src-pages folder, run with python3 -I, Python 3.14), exact output:
//    move 10 steps, direction  90: x +10.00, y +0.00
//    move 10 steps, direction   0: x +0.00, y +10.00
//    move 10 steps, direction  45: x +7.07, y +7.07
//    move 10 steps, direction  30: x +5.00, y +8.66
//    move 10 steps, direction 180: x +0.00, y -10.00
//    move 10 steps, direction -90: x -10.00, y +0.00
//     2 steps a frame: 240 frames, 8.0 seconds to cross
//     5 steps a frame: 96 frames, 3.2 seconds to cross
//    10 steps a frame: 48 frames, 1.6 seconds to cross
// Lesson family: direction to x and y. Scratch's "move" block turns a direction into x and y with cosine and sine of
// (90 - direction); a diagonal step of 10 moves only 7.07 each way; then steps per frame times 30 frames a second becomes a speed,
// and the 480-step stage width becomes a crossing time.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const MOVE = [
  'import math',
  '',
  '',
  'def move(steps, direction):',
  '    radians = math.radians(90 - direction)',
  '    dx = round(steps * math.cos(radians), 2) + 0.0',
  '    dy = round(steps * math.sin(radians), 2) + 0.0',
  '    return dx, dy',
  '',
  '',
  'for direction in (90, 0, 45, 30, 180, -90):',
  '    dx, dy = move(10, direction)',
  '    print(f"move 10 steps, direction {direction:>3}: x {dx:+.2f}, y {dy:+.2f}")'
].join('\n');

const MOVE_OUT = [
  'move 10 steps, direction  90: x +10.00, y +0.00',
  'move 10 steps, direction   0: x +0.00, y +10.00',
  'move 10 steps, direction  45: x +7.07, y +7.07',
  'move 10 steps, direction  30: x +5.00, y +8.66',
  'move 10 steps, direction 180: x +0.00, y -10.00',
  'move 10 steps, direction -90: x -10.00, y +0.00'
].join('\n');

const SPEED = [
  'FRAMES_PER_SECOND = 30',
  'STAGE_WIDTH = 480',
  'for steps in (2, 5, 10):',
  '    frames = STAGE_WIDTH / steps',
  '    print(f"{steps:>2} steps a frame: {frames:.0f} frames, "',
  '          f"{frames / FRAMES_PER_SECOND:.1f} seconds to cross")'
].join('\n');

const SPEED_OUT = [
  ' 2 steps a frame: 240 frames, 8.0 seconds to cross',
  ' 5 steps a frame: 96 frames, 3.2 seconds to cross',
  '10 steps a frame: 48 frames, 1.6 seconds to cross'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Scratch for kids' },
  slug: 'scratch-for-kids-peru',
  code: 'sck',
  accent: '#04585C',
  accentRationale: 'Scratch for kids in Peru: a deep teal #04585C, the colour of Lake Titicaca on a cloudy afternoon, a cool partner for Scratch\'s orange cat that stays readable as text; contrast is above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Scratch for kids in Peru',
  title: 'Scratch for Kids in Peru: Live Scratch Classes in English',
  description: 'Scratch for kids in Peru: live Scratch coding classes taught in English for children aged 6 to 12, in a group or one to one, at any hour that suits Peru time.',
  ogDescription: 'What really happens inside a Scratch block, read from Scratch\'s own source code; what children of 6 and of 10 do in Scratch; remixing without copying; and a lesson on direction and speed.',
  twitterDescription: 'Live Scratch classes for children in Peru aged 6 to 12, taught in English, in a group or one to one.',
  pageName: 'Scratch for Kids in Peru',
  webPageDescription: 'A guide for families in Peru whose children are starting Scratch, built from Scratch\'s open source code on GitHub, the Scratch Foundation\'s own pages, MINEDU normative ages, the Ley General de Educación, the CNEB, INEI household data for 2026 and the tz database, with an original lesson on direction and speed.',
  courseDescription: 'Live online Scratch classes for children aged 6 to 12 in Peru, taught in English by mentors based in India: motion, events, loops, variables, games and animations, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Scratch for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#inside', label: 'Inside a block' },
    { href: '#lesson', label: 'Direction lesson' },
    { href: '#ages', label: '6 and 10' },
    { href: '#ready', label: 'After Scratch' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 6 to 12 &middot; Scratch, live in English',
  h1: 'Scratch for kids in Peru',
  lede: 'Scratch looks like a toy: a cat, some coloured blocks, a white stage. Underneath, every block is a small piece of real computing, and a good teacher can show a child the maths and logic hiding inside it. This page is for families in Peru choosing Scratch for a child of 6 to 12. It explains what Scratch is, what a block actually does, how a six year old and a ten year old use it differently, and how to tell when a child is ready to move on.',
  secondaryCta: { href: '#lesson', label: 'See the direction lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like Scratch classes in English for our child. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 4.9 from about 547 Google reviews &middot; children build, test and explain every project',
  spec: [
    ['Ages', '6 to 12'],
    ['Tool', 'Scratch, free in the browser'],
    ['Length', 'Three to four months'],
    ['Format', 'Live video, in English'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru hours', 'Chosen by your family']
  ],
  capsuleQ: 'Scratch in one paragraph',
  capsule: 'Modern Age Coders teaches Scratch to kids in Peru aged 6 to 12 in live online classes, in English. Scratch is a free block-based coding tool from the Scratch Foundation; children snap blocks together to make characters move, talk, score points and react to keys, with no typing needed. A mentor based in India watches the child\'s screen, asks them to predict what each script will do and helps them find their own mistakes. Families pick a group of fifteen to twenty children of the same age or one-to-one lessons, at any hour on Peru time, and the first class is free.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Three Scratch courses for children in Peru',
    lede: 'Choose by age and ambition. The free first class shows which one fits.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'SCK / 01', title: 'Scratch Coding: Zero to Real Games', note: 'Ages 6 to 12, three to four months. Motion, events, loops, variables and a finished game, grouped by age so a six year old never shares a class with a twelve year old.' },
      { course: 'kids-coding-blocks-masterclass', code: 'SCK / 02', title: 'Coding for Kids: Scratch to Apps and AI', note: 'Ages 6 to 12, across a school year. Starts in Scratch and carries on into apps, game worlds and a first taste of Python.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'SCK / 03', title: 'Vibe Coding for Kids: AI, Scratch and Games', note: 'Ages 8 to 12. Scratch games plus a careful, age-appropriate look at how AI tools help and where they go wrong, always after the child has done the thinking.' }
    ]
  },

  sections: [
    {
      id: 'what',
      eyebrow: 'What Scratch is',
      h2: 'What is Scratch, and is it good for kids?',
      lede: 'Scratch is a free coding tool in which children build programs from blocks instead of typed text. It is one of the most widely used first languages in the world, and for good reason.',
      body: [
        { kind: 'two',
          leftH3: 'Where Scratch comes from',
          left: [
            'According to the Scratch Foundation, Scratch "was developed at the MIT Media Lab in 2007", and in 2019 it moved from MIT to the Scratch Foundation, "an independent nonprofit". The Foundation says "200 million kids create on Scratch for free" and that children have "created over a billion Scratch projects".',
            '"Scratch is free for everyone," the Foundation writes. It runs in a web browser, and an offline editor can be downloaded for computers without a steady connection. A family pays nothing for Scratch itself; what a class adds is a teacher.'
          ],
          rightH3: 'Why blocks suit young children',
          right: [
            'A block cannot be misspelt. A six year old who cannot yet type "repeat" correctly can still drag a repeat block and see what it does. Blocks only fit together in ways that make sense, so children spend their effort on the idea rather than on punctuation.',
            'That does not make Scratch shallow. Variables, loops, conditions, events, messages between characters and even simple physics all appear in Scratch. The limit is the teaching, not the tool, which is why the next section looks inside a block.'
          ] }
      ]
    },
    {
      id: 'inside',
      tint: 'tint',
      eyebrow: 'Inside a block',
      h2: 'What does a Scratch block really do?',
      lede: 'Scratch is open source, so anyone can read the code that runs each block. We did, and the answers are useful for parents and children alike.',
      body: [
        { kind: 'table', numCols: [], caption: 'Five facts about Scratch, read from Scratch\'s own source code (November 2026)', head: ['Question', 'Answer in the code', 'What it means for a child'], rows: [
          ['How big is the stage?', '480 wide, 360 high', 'x runs from -240 to 240 and y from -180 to 180, with 0, 0 in the middle'],
          ['How often does Scratch update the screen?', 'The editor turns on compatibility mode, which steps 1000 / 30 milliseconds apart', 'About 30 updates every second; a script inside a forever loop moves once per update'],
          ['What does "move 10 steps" calculate?', 'x changes by steps times cos(90 minus direction); y by steps times sin(90 minus direction)', 'Direction 90 is right, 0 is up; diagonal moves share the 10 steps between x and y'],
          ['Does "pick random 1 to 10" include 10?', 'Yes: with whole numbers both ends can come up', 'A dice game with 1 to 6 really can roll a 6'],
          ['And "pick random 1 to 10.5"?', 'A decimal in either box gives decimal answers', 'Typing 1.0 instead of 1 changes the kind of answer you get']
        ] },
        { kind: 'source', html: 'Source: the Scratch Foundation\'s open source repositories on GitHub (scratch-vm: runtime.js, scratch3_motion.js, scratch3_operators.js; scratch-gui: layout-constants.js and vm-manager-hoc.jsx), develop branch, read on 9 November 2026. The plain-language readings in the last column are ours.' },
        { kind: 'p', mt: true, html: 'None of this needs to be taught to a six year old. But the third row is a piece of real trigonometry, and children of ten or eleven are perfectly able to discover it for themselves if a teacher sets up the right experiment. That is the lesson below.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A lesson for ages 10 to 12',
      h2: 'How can Scratch teach a child real maths?',
      lede: 'By asking questions the child can test. In this lesson a sprite moves 10 steps in different directions and the child writes down how far it travels along x and along y each time.',
      body: [
        { kind: 'two',
          leftH3: 'The experiment in Scratch',
          left: [
            'The child sets a direction, clicks "move 10 steps" once, and reads the change in x and y from the sprite\'s information panel. Direction 90: x goes up by 10. Direction 0: y goes up by 10. So far, nothing surprising.',
            'Then the mentor asks for a prediction: "At direction 45, halfway between, how far will it move along x?" Most children say 5, or 10. Scratch says about 7.07, and the same along y.'
          ],
          rightH3: 'Why 7.07 and not 5',
          right: [
            'The sprite still travels 10 steps, but along a slant. Seven and a bit across and seven and a bit up make a right-angled triangle whose long side is 10. Children who have met squares can check it: 7.07 times 7.07 is about 50, and 50 plus 50 is 100, which is 10 times 10.',
            'Scratch\'s own code does this with cosine and sine of 90 minus the direction. We rebuild it in a few lines of Python so the child can print a whole table of directions at once.'
          ] },
        { kind: 'code', label: 'Scratch\'s "move" block, rebuilt in Python', lang: 'Python', code: MOVE },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: MOVE_OUT, note: 'Exact output of our run with Python 3. Direction 30 gives 5.00 across and 8.66 up; 5 squared plus 8.66 squared is again about 100.' },
        { kind: 'p', html: 'The rule children write in their own notebooks is short: <strong>a step at a slant is shared between x and y, and the two parts always rebuild the full step</strong>. They have just met Pythagoras and a little trigonometry, years before school asks for it, through a block they have used a hundred times.' },
        { kind: 'two', mt: true,
          leftH3: 'Part two: from steps to speed',
          left: [
            'Next question: how fast is "move 5 steps" inside a forever loop? The block does not know about seconds. But the Scratch editor updates about 30 times a second, so 5 steps per update means about 150 steps per second.',
            'The stage is 480 steps wide. Children predict how long a sprite takes to cross it at 2, 5 and 10 steps per update, then run the calculation.'
          ],
          rightH3: 'Why it matters in a game',
          right: [
            'A child who knows that speed is steps per frame times frames per second can design a game on purpose: a slow enemy that takes eight seconds to cross the screen, a fast one that takes under two.',
            'It also explains a common puzzle: the same project can feel slower on an old computer that cannot keep up 30 updates a second. The steps did not change; the frames did.'
          ] },
        { kind: 'code', label: 'Crossing the 480-step stage', lang: 'Python', code: SPEED },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: SPEED_OUT, note: 'Exact output of our run. Doubling the steps per frame halves the time to cross, which children then check with a stopwatch in Scratch.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8.</strong> On squared paper, walk a counter 10 squares right, then 10 squares up. Then try to reach the same diagonal line in 10 counted moves. What happens?',
          '<strong>Ages 8 to 10.</strong> In Scratch, point the sprite in four directions and note x and y after each "move 10 steps". Which directions change only one number?',
          '<strong>Ages 10 to 12.</strong> Run both Python programs. Then predict, and check, how many seconds a sprite moving 8 steps per frame needs to cross the stage.'
        ] }
      ]
    },
    {
      id: 'ages',
      tint: 'tint',
      eyebrow: 'Six and ten',
      h2: 'Is Scratch for 6 year olds or for 10 year olds?',
      lede: 'Both, used very differently. Peruvian primaria lasts six years, and by MINEDU\'s normative-age table a child of 6 is in 1st grade and a child of 10 in 5th grade. A good Scratch class changes shape across those years.',
      body: [
        { kind: 'two',
          leftH3: 'At 6 and 7: stories and sequence',
          left: [
            'Young children make a character walk, speak and change costume. The ideas are order (first this, then that), repetition and simple events such as "when this sprite is clicked". Reading is light, and the mentor names each block aloud.',
            'Projects are short: an animated birthday card, a dancing cat, a talking animal. The aim is confidence and a child who says, in simple English, what their program does.'
          ],
          rightH3: 'At 10 to 12: games and reasoning',
          right: [
            'Older children build games with scores, lives, levels and timers. They use variables, conditions that combine two tests, messages between sprites and lists. The lesson above, on direction and speed, belongs here.',
            'Projects are planned before they are built, and the child is asked to test edge cases: what happens at zero lives, at the edge of the stage, when two keys are pressed together.'
          ] },
        { kind: 'p', mt: true, html: 'Families with a younger child can read our Spanish-language page on <a class="ag-inline-link" href="/programacion-para-ninos-de-6-anos">coding at 6, in 1st grade of primaria</a>, and for the middle years, the page on <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">coding at 8, in 3rd grade</a>. Both describe the same English-taught classes from a parent\'s point of view.' }
      ]
    },
    {
      id: 'remix',
      eyebrow: 'Remix or copy',
      h2: 'Is remixing Scratch projects the same as copying?',
      lede: 'It can be, and that is the risk. Scratch invites children to remix other people\'s projects; the Foundation\'s own page says "Don\'t want to "start from Scratch"? Try remixing". Remixing is a fine way to learn when a child understands what they changed.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Read before you change', p: 'Before remixing, the child explains in a sentence what the original project does and which script does it. If they cannot, they are not ready to change it.' },
          { h3: 'Change one thing, predict the result', p: 'One edit at a time, with a guess first. "If I change 5 to 10, the bat will fly twice as fast." Then run it and compare.' },
          { h3: 'Build the next one alone', p: 'After a remix, the child builds a similar project from an empty stage. Only then is the idea theirs.' }
        ] },
        { kind: 'p', mt: true, html: 'Peru\'s national curriculum, the CNEB, describes creating digital objects as building them "siguiendo un proceso de mejoras sucesivas y retroalimentación", by successive improvement and feedback. That is a fair description of a good Scratch class: build, show, hear a question, improve. Our classes run alongside school; we do not replace any part of it.' }
      ]
    },
    {
      id: 'home',
      tint: 'tint',
      eyebrow: 'At home',
      h2: 'What does my child need for Scratch classes at home?',
      lede: 'A laptop or desktop computer with a browser, a mouse, and a headset if possible. Scratch itself costs nothing and needs no installation, though an offline version exists.',
      body: [
        { kind: 'two',
          leftH3: 'Why not a phone',
          left: [
            'INEI reports that 67.8% of Peruvian children aged 6 to 11 used a mobile phone in the second quarter of 2026. Phones are the screen children know best, but dragging small blocks with a finger while watching a mentor on the same screen is frustrating, so our Scratch classes use a computer.',
            'A mouse makes a real difference for six and seven year olds, whose fingers find a trackpad hard to control. It is the cheapest upgrade a family can make for a Scratch class.'
          ],
          rightH3: 'English or Spanish menus?',
          right: [
            'Scratch\'s language menu includes both English and Español Latinoamericano. In our classes children use the English menus, so the words they see on the blocks are the words the mentor says.',
            'For a Spanish-speaking child that is part of the value: "forever", "repeat" and "if" become everyday words, heard and read in the same moment. Families who want the reasons in Spanish can read <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.'
          ] }
      ]
    },
    {
      id: 'ready',
      eyebrow: 'After Scratch',
      h2: 'When is a child ready to move from Scratch to Python?',
      lede: 'When Scratch starts getting in the way. Age matters less than signs, and most children show them somewhere between 9 and 11.',
      body: [
        { kind: 'ol', items: [
          '<strong>Scripts grow too long to see.</strong> The child scrolls for a long time to find one block and loses track.',
          '<strong>They ask for things Scratch makes awkward,</strong> such as saving a score to a file or working with lots of text.',
          '<strong>They read comfortably in English</strong> and can type a short sentence without hunting for each key.',
          '<strong>They plan before building.</strong> A child who sketches the logic first is ready for a language where logic is all there is.',
          '<strong>They predict correctly</strong> what a script will do most of the time, and can explain why when they are wrong.'
        ] },
        { kind: 'p', mt: true, html: 'When those signs appear, our mentor suggests the move, and the first Python lessons rebuild a familiar Scratch project in typed code, just as the direction lesson above rebuilt a block. <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a> describes that first year of typed code. Children who are still enjoying Scratch at 11 are not behind; there is plenty left to learn in it.' }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'What time can my child have Scratch classes in Peru?',
      lede: 'Whenever suits you. Peru is on UTC minus 5 and India on UTC plus 5:30 all year, which puts India ten and a half hours ahead every day. The table only shows conversions, not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Peru hours converted to India time (not class slots)', head: ['Peru time', 'India time', 'Often chosen for'], rows: [
          ['07:30', '18:00', 'An early summer-holiday start'],
          ['11:30', '22:00', 'A Saturday late morning'],
          ['15:30', '02:00, next day', 'After school for younger children'],
          ['16:30', '03:00, next day', 'After a snack and a rest'],
          ['19:00', '05:30, next day', 'Evenings for older children']
        ] },
        { kind: 'source', html: 'Based on the IANA time zone database: America/Lima at UTC minus 5 with no daylight saving, Asia/Kolkata at UTC plus 5:30. We worked out the conversions.' },
        { kind: 'p', mt: true, html: 'Because neither clock changes during the year, a class booked for 15:30 in Cusco stays at 15:30 in winter and summer. For help judging any live class for a young child, see <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>; all our Peru pages are gathered on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> hub.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How can I see my child improving in Scratch?',
    lede: 'Ask to see a project and hear it explained. These six stages are our own and guide each child\'s next step.',
    table: { numCols: [], caption: 'Our Scratch stages for children of 6 to 12', head: ['Stage', 'Typical age', 'Builds', 'Explains'], rows: [
      ['1. Story', '6 to 7', 'A character that moves and speaks in order', '"First it says hello, then it walks."'],
      ['2. Repeat', '7 to 8', 'Animations with repeat and forever loops', '"It does this ten times, then stops."'],
      ['3. React', '8 to 9', 'Projects that respond to keys, clicks and touching', '"When it touches the wall, it turns."'],
      ['4. Remember', '9 to 10', 'Games with a score or lives in a variable', '"The score goes up by one each time."'],
      ['5. Measure', '10 to 11', 'Movement planned with direction, speed and timing', '"At 45 degrees it only moves 7 across."'],
      ['6. Design', '11 to 12', 'A planned, tested game with levels', '"I tested zero lives and found a bug."']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask which part of the project was hardest. A child who can name it is thinking about their own work.',
      'Stage 5 is the direction lesson. Children who reach it often start explaining maths to the rest of the family.'
    ] },
    right: { h3: 'For young Scratchers', ps: [
      'Before you click the green flag, say what will happen. Then watch.',
      'If a sprite does something strange, change one block at a time until you find the one responsible.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for before, beside and after Scratch',
    lede: 'Live, in English, with one mentor throughout, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before and beside', sub: 'Ages 6 to 9', courses: [
        { code: 'SCK / START / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and puzzles that prepare small children for code.' },
        { code: 'SCK / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Planning a project in steps before building it.' },
        { code: 'SCK / START / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense that helps with scores, speeds and coordinates.' }
      ] },
      { num: 'II', h3: 'Other block worlds', sub: 'Ages 7 to 12', courses: [
        { code: 'SCK / WORLDS / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks that build inside Minecraft Education.' },
        { code: 'SCK / WORLDS / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft in one path.' },
        { code: 'SCK / WORLDS / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps with blocks', blurb: 'Phone-style apps built from blocks.' }
      ] },
      { num: 'III', h3: 'After Scratch', sub: 'Ages 9 to 12', courses: [
        { code: 'SCK / AFTER / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language, with child-safe AI projects.' },
        { code: 'SCK / AFTER / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'More lessons like the direction table, in Python.' },
        { code: 'SCK / AFTER / 03', slug: 'kids-ai-web-development-course', title: 'Web pages for kids', blurb: 'A real website, written and published by the child.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A week of Scratch classes, seen from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'School weeks', l: 'Mid to late afternoon in Peru is the usual choice for primaria children.' },
      { time: 'January to March', l: 'Mornings in the long summer break suit many families; say the hour and we arrange it.' },
      { time: 'Private lessons', l: 'A single child and a mentor, on a schedule set by the family.' }
    ],
    cells: [
      { h3: 'Shared stage', p: 'The mentor sees the child\'s Scratch screen all lesson.' },
      { h3: 'Familiar face', p: 'The same mentor each week, who knows every project so far.' },
      { h3: 'Words on screen', p: 'Spoken English backed up by the words on each block.' },
      { h3: 'Something finished', p: 'A working project, however small, at the end of every class.' },
      { h3: 'A note home', p: 'Two or three lines for parents after each class.' },
      { h3: 'Group or private', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'Where Scratch can lead',
  projectsLede: 'Many of our older students began with Scratch and now build apps, websites and AI projects. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'From parents and students on Google, unchanged.',

  fees: {
    h2: 'Fees for Scratch classes from Peru',
    lede: 'We bill in US dollars, monthly, to a card. Your bank chooses the soles exchange rate when the charge arrives, which is why the amount you see can shift slightly between months.',
    free: ['A free first Scratch class', 'A first animation built by your child', 'No card needed'],
    group: ['Fifteen to twenty children of the same age band', 'One mentor all course', 'Two live classes a week', 'Pay monthly, stop when you like'],
    one: ['Your child alone with the mentor', 'Projects and pace shaped to your child', 'Hours you pick']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Scratch for kids: questions from families in Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every Scratch class is live, online and in English only. The mentor speaks plainly and patiently, follows your child\'s pace and accent, and points to each block while saying its name, so a child still learning English can keep up. Some of our Peru pages are in Spanish for parents, but the lessons are always in English.' },
      { q: 'What age is Scratch for?', a: 'Our Scratch course takes children from 6 to 12, grouped by age. Six and seven year olds make stories and animations; ten to twelve year olds build games with scores, timers and planned movement. In Peru that spans 1st to 6th grade of primaria.' },
      { q: 'Is Scratch free?', a: 'Yes. The Scratch Foundation says Scratch is free for everyone, and it runs in a web browser, with an offline editor available to download. Our classes charge for live teaching by a mentor, not for Scratch.' },
      { q: 'Can my child learn Scratch on a tablet or phone?', a: 'Not in our classes. Scratch needs a laptop or desktop with a mouse to drag blocks accurately, and the screen must show both the project and the mentor. A headset with a microphone helps a lot.' },
      { q: 'Does Scratch teach real coding?', a: 'Yes. Loops, conditions, variables, events and lists are real programming ideas, and Scratch\'s own code turns a single "move" block into trigonometry. Children who learn Scratch well find Python easier because the thinking is already in place.' },
      { q: 'When are Scratch classes on Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so 15:30 in Peru is 02:00 the next day for the mentor.' },
      { q: 'Group or one to one for a young child?', a: 'A group of fifteen to twenty of the same age suits a child who likes sharing their work. One to one suits a six year old who needs more help with the mouse and the English, a shy child, or one far ahead of their age group. You can change format later.' },
      { q: 'When should my child move from Scratch to Python?', a: 'When long scripts become hard to manage, when they read and type comfortably in English, and when they predict what a script will do most of the time. That is usually between 9 and 11, but the signs matter more than the age.' },
      { q: 'Will my child just remix other people\'s projects?', a: 'Only after explaining what the original does, and then changing one thing at a time with a prediction first. Every remix is followed by a similar project built from an empty stage, so the idea becomes the child\'s own.' },
      { q: 'Are you part of Scratch, MINEDU or a school?', a: 'No. Modern Age Coders is an independent online school, not part of the Scratch Foundation, MINEDU or any Peruvian school. We award no Peruvian grades; finishing children receive a completion certificate from us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for Scratch families',
    lede: 'Pages for the next question.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'Our main Scratch course page.' },
      { href: '/scratch-not-working-help', label: 'Scratch not working?', p: 'Common Scratch problems and quick fixes.' },
      { href: '/python-for-10-year-olds', label: 'Python at ten', p: 'What comes after Scratch for many children.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'The youngest age each AI tool allows.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking first', p: 'Why we ask children to predict.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One class described from start to end.' }
    ]
  },

  start: {
    h2: 'Book a free Scratch class',
    lede: 'During the trial your child opens Scratch with a mentor and makes a sprite move, turn and say something, then changes it on their own. The mentor sees how your child thinks and how much English they catch, and suggests a course, a format and a time that suit your week.',
    readFirst: 'Would you rather read more first? The <a class="ag-inline-link" href="/courses/scratch-programming-complete-course">Scratch course page</a> sets out each week, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> follows one lesson through.',
    note: 'Our mentors teach from India by live video, in English only. For a fast answer, write to us on WhatsApp in English.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Scratch', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/scratch-not-working-help', label: 'Scratch help' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Coding for kids, Peru' },
        { href: '/programacion-para-ninos-de-6-anos', label: 'Programación a los 6 años' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Leer en español' }
      ] }
    ],
    bottomRight: 'A slanted step is shared'
  },

  personalityCss: `
.ag-root.ag-sck .ag-hero h1 { max-width: 14ch; letter-spacing: -0.02em; }
.ag-root.ag-sck .ag-capsule { border-left-width: 5px; }
.ag-root.ag-sck .ag-table td { line-height: 1.55; }
.ag-root.ag-sck .ag-code pre { line-height: 1.5; }
.ag-root.ag-sck .ag-steps li { padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Foundation source code on GitHub (scratch-vm runtime.js, scratch3_motion.js, scratch3_operators.js; scratch-gui layout-constants.js and vm-manager-hoc.jsx); Scratch Foundation home page; Scratch statistics page (raw copy); MINEDU Edades normativas; Ley 28044; CNEB; INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026; IANA tz database. Read 9 November 2026.',
    localProject: 'An original lesson for ages 10 to 12: Scratch\'s "move 10 steps" rebuilt in Python from its own source (cos and sin of 90 minus direction), printing x and y changes for six directions (45 degrees gives 7.07 each way, 30 gives 5.00 and 8.66), then steps per frame times 30 frames a second turned into crossing times for the 480-step stage (240 frames and 8.0 seconds, 96 and 3.2, 48 and 1.6). Lesson family: direction to x and y, and rate times time.',
    requiredMentions: ['move 10 steps, direction  45: x +7.07, y +7.07', '10 steps a frame: 48 frames, 1.6 seconds to cross', 'a step at a slant is shared between x and y, and the two parts always rebuild the full step', 'Five facts about Scratch, read from Scratch\'s own source code (November 2026)', 'which steps 1000 / 30 milliseconds apart', '200 million kids create on Scratch for free', '67.8% of Peruvian children aged 6 to 11 used a mobile phone', 'siguiendo un proceso de mejoras sucesivas y retroalimentación', 'A slanted step is shared'],
    sources: [
      { claim: 'Stage width 480; thread step intervals 1000/60 and 1000/30 (compatibility).', url: 'https://github.com/scratchfoundation/scratch-vm/blob/develop/src/engine/runtime.js' },
      { claim: 'The editor turns compatibility mode on.', url: 'https://github.com/scratchfoundation/scratch-gui/blob/develop/src/lib/vm-manager-hoc.jsx' },
      { claim: 'Stage 480 by 360.', url: 'https://github.com/scratchfoundation/scratch-gui/blob/develop/src/lib/layout-constants.js' },
      { claim: 'moveSteps uses cos and sin of 90 minus direction.', url: 'https://github.com/scratchfoundation/scratch-vm/blob/develop/src/blocks/scratch3_motion.js' },
      { claim: 'pick random: integers inclusive of both ends when both inputs are whole numbers, decimals otherwise.', url: 'https://github.com/scratchfoundation/scratch-vm/blob/develop/src/blocks/scratch3_operators.js' },
      { claim: 'Developed at the MIT Media Lab in 2007; moved to the Scratch Foundation in 2019; 200 million kids; over a billion projects; free; remixing.', url: 'https://scratchfoundation.org/home' },
      { claim: 'Offline editor; English and Español Latinoamericano in the language menu.', url: 'https://scratch.mit.edu/statistics/' },
      { claim: '67.8% of children 6 to 11 used a mobile phone, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age measured on 31 March; grade by age table.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'CNEB capacity Crea objetos virtuales: successive improvement and feedback.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Scratch user numbers for Peru: no primary source (the statistics data was blocked to a sibling writer); not given.',
      'Scratch\'s own recommended age range: the Scratch FAQ renders client-side and was not verified; only our course ages are printed.',
      'scratch.mit.edu was not fetched by this writer (a 403 to a sibling earlier); only raw copies already saved were used.',
      'That Scratch raises school maths marks: no source; not claimed.',
      'Any link with the Scratch Foundation, MIT, MINEDU or a school: none, and the page says so.'
    ]
  }
};
