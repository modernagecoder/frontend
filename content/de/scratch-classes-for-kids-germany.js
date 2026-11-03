'use strict';
// Scratch classes for kids in Germany (ag- English door, Germany cluster row DE032, rows.tsv P2).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Scratch for children of about 6 to 12 in Germany: what it is (from the Scratch Foundation's own pages), the
// ScratchJr step for 5 to 7, using a multilingual tool in an English class, safety, and an original Scratch project on a
// German traffic light whose four-phase order comes from the Straßenverkehrs-Ordnung.
// Sources (read raw, fetched 3 November 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/scratch-classes-for-kids-germany/):
//  - scratch.mit.edu/about (serves the Scratch Foundation page): "Scratch is free for everyone."; "block-based coding
//    interface that they can drag and snap together: no tricky syntax required"; "Scratch was developed at the MIT Media
//    Lab in 2007 by a team of educational experts and researchers led by Professor Mitchel Resnick."; "In 2019, Scratch
//    was transferred from MIT to the Scratch Foundation: an independent nonprofit"; "safe, moderated online community".
//  - scratchfoundation.org/impact: "used by over 150 million young people in every country"; "1+ Billion Scratch projects
//    created"; "1.8 Million new monthly registrations"; "80 languages".
//  - scratchfoundation.org/ai: "right now, we are not training any AI models on Scratchers' data."
//  - scratchjr.org/about/info (meta description): "With ScratchJr, young children (ages 5-7) can program their own
//    interactive stories and games."
//  - gesetze-im-internet.de/stvo_2013/__37.html, para 37 (2): Wechsellichtzeichen colour order Grün, Gelb, Rot, "Rot und
//    Gelb (gleichzeitig)", Grün (the law text uses dashes, so the order is given here without them); "Rot ist oben, Gelb in
//    der Mitte und Grün unten."; para 37 (2) 3: lights "können auf die Farbfolge Gelb-Rot beschränkt sein".
//  - FACTS.md (fetched 2 November 2026): Informatik-Biber grades 3 to 13, no prior knowledge (130); primary pupils nine
//    tasks in 30 minutes (132); Biberwochen 9 to 20 November 2026 (133). KMK: Grundschule grades 1 to 4, 6 in Berlin and
//    Brandenburg (1). Informatik-Monitor: NRW grades 5 and 6 (80).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own material: the four-phase state table and all timings (6, 2, 8 and 1 seconds; walk light 7 seconds) are ours,
// invented for the lesson and not real signal timings. Example slots: 15:15 = 19:45 / 18:45; Sunday 10:30 = 15:00 / 14:00.
// Lesson family: states and transitions; write down every state and what moves you on before you build.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const S1 = [
  'when green flag clicked',
  'forever',
  '    switch costume to [green v]',
  '    wait (6) seconds',
  '    switch costume to [yellow v]',
  '    wait (2) seconds',
  '    switch costume to [red v]',
  '    wait (8) seconds',
  '    switch costume to [red and yellow v]',
  '    wait (1) seconds',
  'end'
].join('\n');

const S2 = [
  '// Ampel sprite',
  'when green flag clicked',
  'set [phase v] to [green]',
  'set [button v] to [0]',
  'forever',
  '    if <(phase) = [green]> then',
  '        switch costume to [green v]',
  '        wait until <(button) = [1]>',
  '        wait (3) seconds',
  '        set [phase v] to [yellow]',
  '    end',
  '    if <(phase) = [yellow]> then',
  '        switch costume to [yellow v]',
  '        wait (2) seconds',
  '        set [phase v] to [red]',
  '    end',
  '    if <(phase) = [red]> then',
  '        switch costume to [red v]',
  '        broadcast [walk v]',
  '        wait (8) seconds',
  '        set [button v] to [0]',
  '        set [phase v] to [red and yellow]',
  '    end',
  '    if <(phase) = [red and yellow]> then',
  '        switch costume to [red and yellow v]',
  '        wait (1) seconds',
  '        set [phase v] to [green]',
  '    end',
  'end',
  '',
  '// Button sprite',
  'when this sprite clicked',
  'set [button v] to [1]',
  'say [Signal kommt] for (2) seconds',
  '',
  '// Walk light sprite',
  'when I receive [walk v]',
  'switch costume to [walking v]',
  'wait (7) seconds',
  'switch costume to [standing v]'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Scratch classes for kids' },
  slug: 'scratch-classes-for-kids-germany',
  code: 'ski',
  accent: '#5F4F00',
  accentRationale: 'Scratch classes for kids in Germany: a dark ochre #5F4F00, the brown-gold of a traffic-light housing after years of weather, unused elsewhere in the cluster; contrast 6.54 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Scratch classes for kids in Germany',
  title: 'Scratch Classes for Kids in Germany: Live Online, in English',
  description: 'Scratch classes for kids in Germany aged 6 to 12, live online in English: what Scratch is, when to start, safety, and a German traffic light built in Scratch.',
  ogDescription: 'Live Scratch lessons in English for children in Germany: the free block language from the MIT Media Lab, ScratchJr for the youngest, how a child learns in English with a tool in 80 languages, and a project that builds a German Ampel with four phases.',
  twitterDescription: 'Scratch for children in Germany, live in English, with a German traffic-light project built from the StVO.',
  pageName: 'Scratch Classes for Kids in Germany',
  webPageDescription: 'A guide for parents in Germany of children aged 6 to 12 to learning Scratch, built on the Scratch Foundation\'s own pages, ScratchJr, the Straßenverkehrs-Ordnung and the Informatik-Biber rules, with an original Scratch project.',
  courseDescription: 'Live online Scratch classes in English for children in Germany aged 6 to 12: stories, animations and real games from block code, in a group of fifteen to twenty or one to one, with one mentor for the whole course.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Scratch for kids',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#scratch', label: 'Scratch' },
    { href: '#age', label: 'Ages' },
    { href: '#ampel', label: 'Project' },
    { href: '#safe', label: 'Safety' }
  ],
  eyebrow: 'Germany &middot; Scratch for children &middot; Ages 6 to 12',
  h1: 'Scratch classes for kids in Germany',
  lede: 'Scratch is where most children first make a computer do what they want: a cat that walks, a game that keeps score, a story with a twist. It is free, it runs in a browser, and its blocks fit together like puzzle pieces. This page explains what Scratch is, what age suits it and its little sibling ScratchJr, how a child in Germany learns it with us in English, how safe it is, and a project that builds a real German traffic light, Rot und Gelb included.',
  secondaryCta: { href: '#ampel', label: 'See the Ampel project' },
  wa: 'Hello Modern Age Coders, our child lives in Germany and would like to learn Scratch in English. Can we book a free first class?',
  heroNote: 'Teaching children live since 2020 &middot; 10,000+ students worldwide &middot; games your child builds, not watches',
  spec: [
    ['Ages', '6 to 12, in age groups'],
    ['Tool', 'Scratch 3, free, in the browser'],
    ['Youngest', 'ScratchJr ideas at 5 to 7'],
    ['Builds', 'Stories, animations, games'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In a few lines',
  capsule: 'Scratch classes for kids in Germany at Modern Age Coders are live online lessons in English for children aged 6 to 12, using Scratch, the free block-based language first built at the MIT Media Lab. In our Scratch Coding for Kids course a child goes from a first moving sprite to finished games in about three months, with one mentor who adapts to their speed and accent, in a class of fifteen to twenty or one to one, at German afternoon or weekend times.',

  picks: {
    eyebrow: 'Scratch courses',
    h2: 'Three Scratch courses for children in Germany',
    lede: 'A short Scratch course, a long one that continues beyond it, and a games course that starts in Scratch and moves to Roblox and Minecraft.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'SKI / 01', title: 'Scratch, zero to real games', note: 'About three months for complete beginners. The quickest way to find out whether your child loves building things on a screen.' },
      { course: 'kids-coding-blocks-masterclass', code: 'SKI / 02', title: 'Coding for Kids, the full year', note: 'Starts in Scratch, then adds apps and first AI ideas, for children from 6 who want to keep going.' },
      { course: 'game-development-masterclass-for-kids', code: 'SKI / 03', title: 'Game development for kids', note: 'Scratch games first, then Roblox and Minecraft, for children of about 8 to 12 who mainly want to make games.' }
    ]
  },

  sections: [
    {
      id: 'scratch',
      eyebrow: 'What Scratch is',
      h2: 'What is Scratch, and is it really free?',
      lede: 'Yes, it is free, and has been since the beginning. The facts below come from the Scratch Foundation, the nonprofit that runs it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Scratch in the Scratch Foundation\'s own words and figures', head: ['Fact', 'What the Foundation says'], rows: [
          ['Cost', '"Scratch is free for everyone."'],
          ['Where it began', 'Developed at the MIT Media Lab in 2007, by a team led by Professor Mitchel Resnick'],
          ['Who runs it now', 'Since 2019 the Scratch Foundation, an independent nonprofit'],
          ['How it works', 'Blocks children "drag and snap together: no tricky syntax required"'],
          ['Projects', '"1+ Billion Scratch projects created"'],
          ['New users', '"1.8 Million new monthly registrations"'],
          ['Reach', '"used by over 150 million young people in every country"'],
          ['Languages', '"80 languages"']
        ] },
        { kind: 'source', html: 'Sources: Scratch Foundation, About page (scratch.mit.edu/about) and Impact page (scratchfoundation.org/impact), read on 3 November 2026. The figures are the Foundation\'s own and we have not checked them independently.' },
        { kind: 'two', mt: true,
          leftH3: 'Why children take to it',
          left: [
            'In Scratch a program is a stack of coloured blocks. A block that does not fit simply does not snap on, so a child cannot make the spelling mistakes that stop beginners in typed languages.',
            'Everything happens on the stage at once: press the green flag and the sprite moves. That instant result keeps a seven year old going far longer than any worksheet.'
          ],
          rightH3: 'Why it is real coding',
          right: [
            'Under the bright colours are the same ideas as in any language: sequences, loops, conditions, variables, events and messages between parts of a program.',
            'A child who builds a game with a score, a timer and two levels in Scratch has used most of what a first Python course teaches. Only the typing is new.'
          ] }
      ]
    },
    {
      id: 'age',
      eyebrow: 'Which age',
      h2: 'What age is Scratch for, and where does ScratchJr fit?',
      lede: 'Scratch suits most children from about 7 or 8, and younger ones with help. Its little sibling, ScratchJr, is aimed at the youngest.',
      body: [
        { kind: 'three', cells: [
          { h3: 'ScratchJr, 5 to 7', p: 'ScratchJr describes itself as a tool with which "young children (ages 5-7) can program their own interactive stories and games". It uses picture blocks and needs almost no reading.' },
          { h3: 'Scratch with help, 6 to 7', p: 'Six and seven year olds can use full Scratch in short, guided lessons. We keep to a few blocks, lots of movement and sound, and stories rather than scores.' },
          { h3: 'Scratch alone, 8 to 12', p: 'From about 8 most children read the blocks themselves and start planning their own games. By 10 or 11 many are ready to try typed Python next.' }
        ] },
        { kind: 'p', mt: true, html: 'In most of Germany, Grundschule runs from grade 1 to grade 4, and to grade 6 in Berlin and Brandenburg, according to the KMK. Scratch fits that whole span. It is also good preparation for the first school Informatik, which the Informatik-Monitor 2026/27 shows arriving in grades 5 and 6 in Nordrhein-Westfalen, and for the free Informatik-Biber, which is open from grade 3 and needs no prior knowledge. In 2026 the Biberwochen run from 9 to 20 November, and primary pupils get nine puzzles in 30 minutes.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Can my child learn Scratch in English if they use it in German at school?',
      lede: 'Yes. Scratch is the same program in every language; only the words on the blocks change.',
      body: [
        { kind: 'two',
          leftH3: 'One tool, many languages',
          left: [
            'The Scratch Foundation lists Scratch in 80 languages, and the language can be changed from the editor\'s menu at any moment. The blocks keep their colours and shapes, so a child who knows where the orange "wait" block lives finds it again in any language.',
            'In our lessons the editor is set to English, and the mentor names each block in English as it is used.'
          ],
          rightH3: 'English, at the child\'s pace',
          right: [
            'Our mentors are based in India and every class is in English; we do not teach in German. They speak slowly, point at the screen as they talk, and use the same short phrases each week, so that "when green flag clicked" and "forever" become familiar quickly.',
            'Children at bilingual or international schools find this natural. Children at a German Grundschule usually enjoy the extra English, because it is about their own game.'
          ] }
      ]
    },
    {
      id: 'ampel',
      tint: 'tint',
      eyebrow: 'A German project',
      h2: 'Can a child build a German traffic light in Scratch?',
      lede: 'Yes, and it teaches one of the most useful ideas in programming: a program that remembers which state it is in. German traffic lights make it interesting, because they have a phase many children have never noticed.',
      body: [
        { kind: 'two',
          leftH3: 'What the law says',
          left: [
            'The Straßenverkehrs-Ordnung, paragraph 37, sets the colour order of a German traffic light: green, yellow, red, then "Rot und Gelb (gleichzeitig)", red and yellow together, then green again. It even fixes the layout: "Rot ist oben, Gelb in der Mitte und Grün unten", red at the top, yellow in the middle, green at the bottom.',
            'So a German Ampel has four states, not three. That red-and-yellow phase is the one we ask children to find on their way to school.'
          ],
          rightH3: 'What we build',
          right: [
            'One sprite with four costumes, one per state. A second sprite is the pedestrians\' button, and a third is the little walking figure. The timings in seconds are ours, invented for the lesson, and much shorter than a real crossing.',
            'First the children build the light as a simple loop. Then they discover that a loop cannot listen for the button, and rebuild it as a state machine.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The four states of our Scratch Ampel (our design and timings)', head: ['State', 'Lamps lit', 'Seconds', 'What moves it on'], rows: [
          ['green', 'Green (bottom)', 'until pressed, then 3', 'The button is pressed'],
          ['yellow', 'Yellow (middle)', '2', 'Time runs out'],
          ['red', 'Red (top)', '8', 'Time runs out; the walk light shows for 7'],
          ['red and yellow', 'Red and yellow together', '1', 'Time runs out, back to green']
        ] },
        { kind: 'code', label: 'Version 1: the light as one loop', lang: 'Scratch 3 blocks', code: S1, note: 'Our script. It cycles correctly through all four German phases, but nothing can interrupt it, so the button has nothing to talk to.' },
        { kind: 'p', mt: true, html: 'Version 1 looks right, and children are proud of it. Then we add the button and ask: how does the light know someone pressed it? The loop is always busy waiting. The fix is to give the program a memory, a variable called <code>phase</code>, and to write down, for each phase, what the light shows and what makes it move on. That table above is the program before it is code.' },
        { kind: 'code', label: 'Version 2: a state machine with a button and a walk light', lang: 'Scratch 3 blocks', code: S2, note: 'Our scripts for three sprites. The light now rests on green until <code>button</code> is 1, then runs yellow, red and red-and-yellow. The walk light shows for 7 of the 8 red seconds, so the pedestrians are never still walking when the red-and-yellow phase begins.' },
        { kind: 'p', mt: true, html: 'The single second of difference between 7 and 8 is the real lesson for older children. Change the walk light to 9 seconds and run it: the figure is still walking while the cars\' light already shows red and yellow. Nothing crashes and Scratch shows no error, yet the program is wrong. Finding mistakes like that, where every block works and the design does not, is what separates building from copying.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 7.</strong> Draw the four costumes. Put red at the top, yellow in the middle and green at the bottom, just as paragraph 37 says, and build Version 1 with the mentor.',
          '<strong>Ages 8 to 9.</strong> Add the button sprite and the <code>button</code> variable. Make the light wait on green until the button is pressed.',
          '<strong>Ages 10 to 12.</strong> Build Version 2 from the state table without looking at our script, then break it on purpose with a 9-second walk light and explain what goes wrong.',
          '<strong>Going further.</strong> Paragraph 37 also allows lights that use only yellow and red. Add a switch that turns your Ampel into one of those, and decide which states it needs.'
        ] }
      ]
    },
    {
      id: 'safe',
      eyebrow: 'Safety',
      h2: 'Is Scratch safe for a young child?',
      lede: 'Scratch is one of the more carefully run places online for children, and in our classes a child does not need a public account at all.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A moderated community', p: 'The Scratch Foundation describes its sharing site as a "safe, moderated online community" with a team of moderators. Sharing projects there is optional, and parents decide.' },
          { h3: 'Children\'s data and AI', p: 'On its page about AI, the Foundation says that "right now, we are not training any AI models on Scratchers\' data", and that what it collects is used in aggregate, not to identify children.' },
          { h3: 'Our own rule', p: 'Children can build every project in our course without a Scratch account. If a family wants to save and share online, a parent sets the account up; mentors never ask children for personal details.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Example Scratch class times in Germany, with the mentor\'s clock', head: ['Germany', 'Mentor, until 28 March 2027', 'Mentor, after 28 March 2027'], rows: [
          ['Weekday 15:15', '19:45', '18:45'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, as the Einheitenzeitgesetz sets out; the switch back happened on 25 October 2026 and the next switch forward is on 28 March 2027. India is on UTC+5:30 throughout. Two sample slots, not a timetable.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five Scratch milestones, from first sprite to state machine',
    lede: 'Our own ladder. It helps the mentor pitch each lesson and helps parents see what has changed.',
    table: { caption: 'Scratch milestones for children (ours)', head: ['Rung', 'Usual age', 'In Scratch, your child can'], rows: [
      ['1. Move', '6 to 7', 'Make a sprite move, speak and change costume when the green flag is clicked'],
      ['2. Repeat', '7 to 8', 'Use repeat and forever instead of stacking the same block many times'],
      ['3. React', '8 to 9', 'Use if blocks and key presses so the game responds to the player'],
      ['4. Remember', '9 to 10', 'Keep a score or a phase in a variable and change it on purpose'],
      ['5. Coordinate', '10 to 12', 'Make several sprites work together with broadcast messages and states']
    ] },
    left: { h3: 'For parents', ps: [
      'Rung 5 is the Ampel project. When your child can explain why the walk light must stop before the red light ends, they are thinking like a programmer.',
      'We show progress through finished projects, never through time spent online.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you build, write down every state your project can be in, and what makes it change.',
      'If there is no error but it still looks wrong, your design has a bug. Those are the most interesting ones.'
    ] }
  },

  catalogue: {
    eyebrow: 'After and beside Scratch',
    h2: 'Nine more courses for children who like Scratch',
    lede: 'Live and in English, with one mentor throughout. Some build on Scratch, some lead on from it.',
    bands: [
      { num: 'I', h3: 'Thinking alongside', sub: 'Ages 6 to 12', courses: [
        { code: 'SKI / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic for 6 to 9, a good partner to Scratch.' },
        { code: 'SKI / THINK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking big problems into small steps, on and off screen.' },
        { code: 'SKI / THINK / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics competitions', blurb: 'Original puzzles in the spirit of the Informatik-Biber.' }
      ] },
      { num: 'II', h3: 'Bigger games', sub: 'Ages 7 to 14', courses: [
        { code: 'SKI / GAME / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Block code inside Minecraft, then a step towards text.' },
        { code: 'SKI / GAME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'From Scratch ideas to real Luau scripts, 8 to 14.' },
        { code: 'SKI / GAME / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch games with first ideas about AI, 8 to 12.' }
      ] },
      { num: 'III', h3: 'After Scratch', sub: 'Ages 8 to 14', courses: [
        { code: 'SKI / NEXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'The natural next language, typed, from about 9.' },
        { code: 'SKI / NEXT / 02', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Block code that becomes a working phone app.' },
        { code: 'SKI / NEXT / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, taught with no chatbot account.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A Scratch lesson, week by week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After school in Germany, before the evening rush.' },
      { time: 'Sundays', l: 'A relaxed mid-morning slot that younger children like.' },
      { time: 'Solo', l: 'Private lessons at a time you and the mentor agree.' }
    ],
    cells: [
      { h3: 'Build every lesson', p: 'Each lesson ends with something that moves.' },
      { h3: 'Same mentor', p: 'One person who knows your child\'s projects.' },
      { h3: 'Short steps', p: 'One new block or idea at a time.' },
      { h3: 'Show and tell', p: 'Children present their work in simple English.' },
      { h3: 'Grouped by age', p: 'Young children learn with children their own age.' },
      { h3: 'Parent notes', p: 'A line or two on what was built.' }
    ]
  },

  projectsH2: 'From Scratch to bigger projects',
  projectsLede: 'Many of our older students started in Scratch. A few of their later projects are below; see the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Google reviews from our families, unedited.',

  fees: {
    h2: 'Scratch class fees for families in Germany',
    lede: 'Eight live lessons make up each month, paid monthly. Euro prices here are converted at the European Central Bank reference rate for display; the actual charge is in US dollars, and your card issuer converts it, so a statement can show a slightly different euro figure.',
    free: ['A free first Scratch lesson', 'A moving sprite made together', 'No card asked for'],
    group: ['Fifteen to twenty children, grouped by age', 'One mentor for the course', 'Two lessons a week', 'Monthly, stop whenever you need'],
    one: ['A mentor just for your child', 'Projects that follow your child\'s ideas', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Scratch classes for kids in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and in English only, with mentors based in India. The Scratch editor is set to English in class, and the mentor matches your child\'s pace and accent, so children with a little English follow well.' },
      { q: 'Is Scratch free?', a: 'Yes. The Scratch Foundation says Scratch is free for everyone. It runs in a web browser, and our course fee is for the live teaching, not for the software.' },
      { q: 'What age can my child start Scratch?', a: 'From about 6 with a mentor guiding closely, and from about 8 more independently. For 5 to 7 year olds, ScratchJr is designed for that age group, and we use its gentle style with our youngest.' },
      { q: 'My child uses Scratch in German at school. Is that a problem?', a: 'Not at all. Scratch is the same program in every language and the blocks keep their colours and shapes. Switching the language takes one click, and children quickly know the blocks by both names.' },
      { q: 'Does my child need a Scratch account?', a: 'No. Every project in our course can be built without one. If you want your child to save and share projects online, a parent can create the account.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A Sunday class at 10:30 in Germany is 15:00 for the mentor until 28 March 2027.' },
      { q: 'How long does it take to learn Scratch?', a: 'Our Scratch Coding for Kids course takes about three months from a blank screen to finished games. Children who want more continue into the longer Coding for Kids course or into Python.' },
      { q: 'Is Scratch real programming?', a: 'Yes. Scratch uses the same ideas as typed languages: sequences, loops, conditions, variables, events and messages. The Ampel project on this page is a real state machine, a pattern used in professional software.' },
      { q: 'How are fees shown and charged?', a: 'We show the monthly fee in euro using the European Central Bank reference rate. The payment is taken in US dollars and your card issuer converts it, so the statement amount may vary slightly. The first lesson is free.' },
      { q: 'Does Scratch use my child\'s data to train AI?', a: 'The Scratch Foundation states that it is not training any AI models on Scratchers\' data right now, and that the data it collects is used in aggregate. In our classes children do not need an account at all.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for parents of young coders in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'School computing in every Land.' },
      { href: '/online-coding-classes-for-kids-germany', label: 'Online classes explained', p: 'One live lesson, minute by minute.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes worldwide', p: 'Our general Scratch page.' },
      { href: '/python-classes-for-kids-germany', label: 'Python for kids in Germany', p: 'The next step after Scratch.' },
      { href: '/coding-for-8-year-olds', label: 'Coding at eight', p: 'What an eight year old can make.' }
    ]
  },

  start: {
    h2: 'Book a free Scratch lesson',
    lede: 'In the free lesson your child makes a first sprite move and talk with the mentor, who then suggests the course and age group that fit.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> first, or open the <a class="ag-inline-link" href="/courses/scratch-programming-complete-course">Scratch course syllabus</a>.',
    note: 'Live online, in English, with mentors in India. Ask us anything on WhatsApp.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Scratch and after', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/coding-for-8-year-olds', label: 'Coding at eight' },
        { href: '/python-for-9-year-olds', label: 'Python at nine' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/online-coding-classes-for-kids-germany', label: 'Online classes explained' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Rot und Gelb, then green'
  },

  personalityCss: `
.ag-root.ag-ski .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ski .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-ski .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ski .ag-code-head b { letter-spacing: 0.015em; }
.ag-root.ag-ski .ag-table caption { text-align: left; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Foundation About, Impact and AI pages; ScratchJr About; Straßenverkehrs-Ordnung para 37; Bundesweite Informatikwettbewerbe, Informatik-Biber; KMK Primarbereich; Informatik-Monitor 2026/27; Einheitenzeitgesetz; read 2 and 3 November 2026.',
    localProject: 'A German Ampel in Scratch: an original project in which children build the StVO para 37 colour order (green, yellow, red, red and yellow together) first as a loop, then as a four-state machine with a pedestrian button and a walk light, and break it on purpose by letting the walk light outlast the red phase. Lesson family: states and transitions.',
    requiredMentions: ['Rot und Gelb (gleichzeitig)', 'Rot ist oben, Gelb in der Mitte und Grün unten', 'set [phase v] to [red and yellow]', 'say [Signal kommt] for (2) seconds', '1.8 Million new monthly registrations', 'young children (ages 5-7) can program their own interactive stories and games', 'Children can build every project in our course without a Scratch account', 'Rot und Gelb, then green'],
    sources: [
      { claim: 'Scratch free, MIT Media Lab 2007, Scratch Foundation since 2019, moderated community.', url: 'https://scratch.mit.edu/about' },
      { claim: 'Scratch projects, registrations, reach and languages.', url: 'https://www.scratchfoundation.org/impact' },
      { claim: 'Scratch not training AI models on Scratchers\' data.', url: 'https://www.scratchfoundation.org/ai' },
      { claim: 'ScratchJr for ages 5 to 7.', url: 'https://www.scratchjr.org/about/info' },
      { claim: 'German traffic light colour order and layout.', url: 'https://www.gesetze-im-internet.de/stvo_2013/__37.html' },
      { claim: 'Informatik-Biber grades 3 to 13 and 2026 dates.', url: 'https://bwinf.de/biber/2026/' }
    ],
    rejectedClaims: [
      'Real German signal timings: not sourced, so all timings are labelled ours.',
      'The Scratch Foundation\'s "200 million kids" banner figure: it differs from the Impact page\'s 150 million, so only the Impact figure is used.',
      'German block names: not checked against the Scratch translation files, so none are printed.',
      'Any affiliation with the Scratch Foundation, MIT or BWINF: none.'
    ]
  }
};
