'use strict';
// Coding classes by age in Germany (ag- English door, Germany cluster row DE017, hub group 'door').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: "coding for 10 year olds germany" and its neighbours. What coding looks like at each age from 6 to adult,
// mapped to the German school stage the learner is in (Grundschule, the Klasse 5 and 6 switch, Sekundarstufe I,
// Oberstufe, after the Abitur), what the school and the national competitions offer at that age, and where our courses
// fit. One original problem, a staircase of blocks, solved at five ages with five tools.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-by-age-germany/;
// quoted in facts-school/FACTS.md, fetched 2 Nov 2026):
//  - KMK Primarbereich: Grundschule "von der ersten bis zur vierten, in Berlin und Brandenburg bis zur sechsten
//    Jahrgangsstufe" (fact 1); over half of the hours on German, maths and Sachunterricht (3); "Eckpunktepapier zur
//    Verankerung von Medienbildung und informatischer Bildung in der Grundschule" (4); no leaving exam (28).
//  - KMK Sekundarstufe I: three Bildungsgänge on the four-year (six-year in Berlin and Brandenburg) Grundschule (5);
//    organised in different school types per Land (6); "So ist in den Jahrgangsstufen 5 und 6 ein Wechsel in einen
//    anderen Bildungsgang möglich." (8). Sekundarstufe II: Einführungsphase one year, Qualifikationsphase two (9);
//    Abitur after 12 or 13 years (26). Eurydice: Länder set the school-entry cut-off "zwischen dem 30. Juni und dem
//    30. September" (289).
//  - GI Informatik-Monitor 2026/27: NRW compulsory in Klasse 5 and 6 (80); Niedersachsen 9 and 10 since 2024/25 (79);
//    Hamburg four hours in 7 to 10 (76); Schleswig-Holstein four hours in 7 to 10 from 2024/25 (88); Sachsen one hour in
//    7 to 10 (85); Bayern "in Jahrgangsstufe 11 in allen Ausbildungsrichtungen verpflichtend zweistündig" (71) and
//    written Informatik Abitur "Programmieraufgaben auf Papier, jedoch keine praktischen Anteile am Rechner" (72); NRW
//    GK 3 hours, LK 5 hours (81); NRW "Der Einsatz eines Computers ist ... nicht vorgesehen." (82); six Länder without
//    compulsory Informatik (92); about 15% in the Oberstufe (97).
//  - BWINF: Biber 9 tasks in 30 minutes (primary), 12 in 35 (Klasse 5 and 6), 15 in 40 (from Klasse 7) (132);
//    Jugendwettbewerb Bronze 5/6, Silber 7 to 9, Gold from 10 (142); Bundeswettbewerb up to 21, not studying or
//    working (145).
//  - Jugend forscht: junior up to 14 from Klasse 4, Jugend forscht 15 to 21 (195). BWKI: Sek I and II (209).
//    FIRST LEGO League: ages 5 to 16 (207).
//  - AI tool ages, content/ai-tool-age-audit.json (vendor quotes, audited 15 July 2026): ChatGPT 13 with a parent's
//    permission under 18; Gemini 16 in Germany; Claude 18.
// Our own work (scratchpad de/w/G2/cba/v1.py, v2.py, python3 -I): v1 prints "4 steps: 10 blocks, guess 8", "10 steps: 55
// blocks, guess 50", "100 steps: 5050 blocks, guess 5000"; v2 prints "Guess wrong for 1000 of 1000, first at 1" and
// "Formula agrees for all 1000: True".
// Lesson family: test a shortcut against brute force before you trust it.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# A staircase of blocks: 1 block in the first column, 2 in the next, and so on.',
  'def count_blocks(steps):',
  '    total = 0',
  '    for column in range(1, steps + 1):',
  '        total += column',
  '    return total',
  '',
  'def guess(steps):',
  '    return steps * steps // 2      # "half of a square", a twelve year old\'s guess',
  '',
  'for steps in [4, 10, 100]:',
  '    print(steps, "steps:", count_blocks(steps), "blocks, guess", guess(steps))'
].join('\n');

const V2 = [
  'def formula(steps):',
  '    return steps * (steps + 1) // 2',
  '',
  'wrong = [n for n in range(1, 1001) if guess(n) != count_blocks(n)]',
  'right = all(formula(n) == count_blocks(n) for n in range(1, 1001))',
  'print("Guess wrong for", len(wrong), "of 1000, first at", wrong[0])',
  'print("Formula agrees for all 1000:", right)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding by age, 6 to adult' },
  slug: 'coding-classes-by-age-germany',
  code: 'cba',
  accent: '#7D3541',
  accentRationale: 'Coding by age: a warm oxblood #7D3541, the red of a growth chart on a kitchen door frame, kept apart from the competitions mulberry, the choosing-guide plum and the Berlin brick; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes by age in Germany',
  title: 'Coding Classes by Age in Germany: From 6 to Adult',
  description: 'What coding looks like at every age in Germany, 6 to adult, matched to Grundschule, Klasse 5 to 10, Oberstufe and beyond, with live online classes in English.',
  ogDescription: 'Coding for 6, 8, 10, 13, 16 year olds and adults in Germany: the school stage at each age, what the Land teaches, the competitions that open up, and one problem solved five ways as a learner grows.',
  twitterDescription: 'Coding in Germany age by age, from the first Grundschule year to adults, mapped to German school stages.',
  pageName: 'Coding Classes by Age in Germany',
  webPageDescription: 'An age-by-age guide to learning to code in Germany, from 6 to adult: the German school stage at each age (Grundschule, the Klasse 5 and 6 transition, Sekundarstufe I, Oberstufe), what Informatik the Länder teach, which competitions and AI tools are open at which age, our course for each stage, and an original staircase problem solved on paper, in Scratch and in Python.',
  courseDescription: 'Live online coding classes in English for every age in Germany: Scratch for children from 6, Python from about 9, Informatik support for Klasse 5 to 10, Java and Python for the Oberstufe, and Python, web and AI for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding by age',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#map', label: 'Ages' },
    { href: '#ten', label: 'Age 10' },
    { href: '#teens', label: 'Teens' },
    { href: '#adults', label: 'Adults' },
    { href: '#staircase', label: 'Problem' }
  ],
  eyebrow: 'Germany &middot; Coding by age &middot; 6 to adult',
  h1: 'Coding classes by age in Germany',
  lede: 'A six year old in the first Grundschule year and a sixteen year old in the Einführungsphase both "learn to code", but they do very different things, with different tools, for different reasons. This page walks through every age from 6 to adult, sets each one against the stage of German school the learner is in, shows what the Land and the national competitions offer at that age, and follows a single problem as it gets deeper from one age to the next.',
  secondaryCta: { href: '#map', label: 'See the age map' },
  wa: 'Hello Modern Age Coders, we live in Germany and would like a free first class in coding, taught in English. My child is this age:',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; learners grouped by age and level',
  spec: [
    ['Ages', '6 to adult'],
    ['Ages 6 to 9', 'Scratch and screen-free puzzles'],
    ['Ages 9 to 13', 'First typed Python'],
    ['Ages 13 to 18', 'Python, Java, data, AI'],
    ['Adults', 'Python, web, automation'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'In Germany, coding at 6 to 8 means Scratch and puzzles alongside the Grundschule; at 9 to 12 first typed Python, around the switch to a secondary school; at 13 to 15 programs that match the Land\'s Informatik; at 16 to 18 Java or Python for the Oberstufe; and for adults, Python, web and AI. Modern Age Coders teaches every stage live online in English, in a group or one to one.',

  picks: {
    eyebrow: 'Where each age starts',
    h2: 'Three first courses, by age',
    lede: 'Most learners in Germany begin with one of these three; the rest of the courses below follow from them.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CBA / 01', title: 'Coding for Kids, ages 6 to 12', note: 'Scratch first: blocks that snap together, stories, games and a first look at apps and AI. Children are grouped by age, so a seven year old is not in a class of twelve year olds.' },
      { course: 'python-ai-kids-masterclass', code: 'CBA / 02', title: 'Python and AI for kids, ages 9 to 12', note: 'The jump from blocks to a keyboard: turtle graphics, simple games and first smart projects. A good fit for a ten year old who finds Scratch too easy.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'CBA / 03', title: 'Informatik Companion, Klasse 5 to 10', note: 'For 10 to 16 year olds: the algorithms, data and programs of Sekundarstufe I Informatik, in English, whether or not the Land makes the subject compulsory.' }
    ]
  },

  sections: [
    {
      id: 'map',
      eyebrow: 'The age map',
      h2: 'What does coding look like at each age in Germany, from 6 to adult?',
      lede: 'The school column comes from the KMK and the Gesellschaft für Informatik; the coding column is our own teaching experience. Ages are approximate, because each Land sets its own school-entry date and children differ.',
      body: [
        { kind: 'table', numCols: [], caption: 'Coding by age, set against the German school stage (school facts sourced, coding column ours)', head: ['Age', 'School stage', 'What school and the Länder offer', 'What coding looks like (ours)'], rows: [
          ['6 to 7', 'Grundschule, Klasse 1 and 2', 'Over half of all lesson hours on German, maths and Sachunterricht', 'Screen-free sequencing, then Scratch blocks with an adult nearby'],
          ['8 to 9', 'Grundschule, Klasse 3 and 4', 'No leaving exam; the Informatik-Biber is open from Klasse 3', 'Scratch games with loops, events and a score'],
          ['10 to 11', 'Klasse 5 and 6 (still Grundschule in Berlin and Brandenburg)', 'A change of track is possible in Klasse 5 and 6; Informatik compulsory in Klasse 5 and 6 in NRW', 'First typed Python: variables, conditions, small games'],
          ['12 to 13', 'Klasse 7 and 8', 'Four compulsory Informatik hours across Klasse 7 to 10 in Hamburg and Schleswig-Holstein', 'Functions, lists, simple data; the Jugendwettbewerb Silber level'],
          ['14 to 15', 'Klasse 9 and 10, MSA or ZP10 year', 'Compulsory Informatik in Klasse 9 and 10 in Niedersachsen; elective in many Länder', 'Files, testing, first projects with real data'],
          ['16 to 18', 'Oberstufe: Einführungsphase, then Qualifikationsphase', 'Informatik as Grundkurs or Leistungskurs where offered; about 15 percent take it nationally', 'Java or Python, data structures, tracing code on paper'],
          ['18 and up', 'University, training or work', 'Bundeswettbewerb Informatik open up to 21 for those not yet studying or working', 'Python for work, web development, data and AI']
        ] },
        { kind: 'source', html: 'Sources: KMK pages on the Primarbereich, Sekundarstufe I and Sekundarstufe II and its Eurydice dossier; Gesellschaft für Informatik, Informatik-Monitor 2026/27, both the summary and the pages for single Länder; bwinf.de (Biber, Jugendwettbewerb, Bundeswettbewerb). Read 2 November 2026. The Länder set the school-entry cut-off date between 30 June and 30 September, which is why a Klasse can hold children almost a year apart in age.' },
        { kind: 'p', mt: true, html: 'Two features of German schooling shape this map more than any other. The first is the Länder: the same age can mean three compulsory Informatik hours a week in one Land and none in another. The second is the transition after Klasse 4, or after Klasse 6 in Berlin and Brandenburg, when children move to different secondary tracks. Both explain why we place every learner by a short check in the first class rather than by age alone.' }
      ]
    },
    {
      id: 'young',
      eyebrow: 'Ages 6 to 9',
      h2: 'Can a six year old in Germany learn to code?',
      lede: 'Yes, if coding means giving precise instructions and seeing what happens, rather than typing. That is what it should mean at this age.',
      body: [
        { kind: 'two',
          leftH3: 'What the Grundschule does',
          left: [
            'According to the KMK, Grundschule runs from Klasse 1 to 4, and to Klasse 6 in Berlin and Brandenburg, and more than half of all lesson hours go to German, maths and Sachunterricht. In 2024 the KMK adopted a key-points paper on anchoring media education and informatics education in the Grundschule, but there is no national computing subject at this stage.',
            'There is also no leaving exam at the end of Grundschule, which leaves room for children to explore without a test in view.'
          ],
          rightH3: 'What coding looks like',
          right: [
            'At six and seven: arranging arrows to guide a toy across a grid, then the same idea in Scratch, where blocks snap together and nothing has to be spelled. At eight and nine: games with a loop, a score and a sprite that reacts to keys, and the first bug a child finds and fixes alone.',
            'Reading is the limit at six, not thinking. A mentor reads instructions aloud and lets the child do the deciding. Parents of the youngest are welcome to sit nearby.'
          ] },
        { kind: 'p', mt: true, html: 'The first national competition opens at Klasse 3: the Informatik-Biber, where pupils in the Grundschule solve nine short tasks in 30 minutes, according to BWINF, and need no programming knowledge. Jugend forscht junior accepts children from Klasse 4, and the FIRST LEGO League in Germany addresses ages 5 to 16.' }
      ]
    },
    {
      id: 'ten',
      tint: 'tint',
      eyebrow: 'Age 10',
      h2: 'What should a 10 year old in Germany learn in coding?',
      lede: 'Ten is the age families ask about most, and for good reason: it is the year of the move to a secondary school in most Länder, and the age at which most children are ready to type real code.',
      body: [
        { kind: 'two',
          leftH3: 'Where a 10 year old is at school',
          left: [
            'In most Länder a ten year old is in Klasse 4 or has just started Klasse 5 at a Gymnasium, a Realschule or one of the multi-track school types that each Land names differently. In Berlin and Brandenburg the same child is still at Grundschule until Klasse 6.',
            'The KMK notes that a change into a different track is still possible in Klasse 5 and 6, so these two years are a period of orientation. In Nordrhein-Westfalen, they are also the years in which every pupil at a general school now has compulsory Informatik.'
          ],
          rightH3: 'What coding looks like at 10',
          right: [
            'Most ten year olds are ready to leave blocks behind. In Python they learn that a variable holds a value, that <code>if</code> makes a decision and that a loop repeats, and they build small games and quizzes that they can show at home. Typing slows them down at first, which is fine: it makes them think before they write.',
            'At this age a child can also start to explain why a program works, out loud and in a sentence. That habit matters more than any particular language.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'What changes for a learner around age 10, by Land situation', head: ['Situation', 'What the child meets', 'Our suggestion (ours)'], rows: [
          ['NRW, Klasse 5 or 6', 'Compulsory Informatik at school', 'Python alongside, to go further than the timetable allows'],
          ['Berlin or Brandenburg, Klasse 5 or 6', 'Still Grundschule; Informatik not compulsory for all', 'Python and Scratch projects as the main contact with coding'],
          ['Bayern, Klasse 5 at a Mittelschule', 'One compulsory Informatik lesson a week from Klasse 5', 'Python with games to keep the interest going'],
          ['Any Land, keen on puzzles', 'Biber: twelve tasks in 35 minutes in Klasse 5 and 6', 'Logic puzzles and our own Biber-style problems'],
          ['Any Land, keen on programming', 'Jugendwettbewerb Informatik, Bronze level', 'Python practice towards small contest tasks']
        ] },
        { kind: 'source', html: 'Sources: KMK, Sekundarstufe I (change of track in Klasse 5 and 6); Gesellschaft für Informatik, Informatik-Monitor 2026/27 (NRW, Berlin, Brandenburg, Bayern); bwinf.de (Biber task counts, Jugendwettbewerb levels). Read 2 November 2026.' }
      ]
    },
    {
      id: 'teens',
      eyebrow: 'Ages 12 to 15',
      h2: 'How should teenagers in Klasse 7 to 10 learn to code in Germany?',
      lede: 'The middle years of Sekundarstufe I are where the Länder differ most, and where a learner either gets serious about programming or drifts away from it.',
      body: [
        { kind: 'two',
          leftH3: 'What the Länder teach',
          left: [
            'Hamburg requires four Informatik hours in total across Klasse 7 to 10 at Stadtteilschulen and Gymnasien, Schleswig-Holstein the same at all school types, and Sachsen one hour a week from Klasse 7 to 10. Niedersachsen makes Informatik compulsory in Klasse 9 and 10. Six Länder, according to the GI monitor, have no Informatik that every pupil must take.',
            'In Nordrhein-Westfalen, Klasse 10 ends with the central ZP10 exams in German, maths and English, and Informatik is not one of them. In the busiest school year, a subject without an exam is easily squeezed.'
          ],
          rightH3: 'What coding looks like at 12 to 15',
          right: [
            'Functions that do one job each, lists and dictionaries, reading a file of real data, and testing a program on its edge cases. At fourteen and fifteen, first projects with a purpose: a quiz app for a younger sibling, a chart of the class\'s survey results, a small game with levels.',
            'The Jugendwettbewerb Informatik follows this progression with its Silber level, recommended for Klasse 7 to 9, and Gold from Klasse 10. Jugend forscht junior is open up to age 14, and Jugend forscht itself from 15.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'AI tools and minimum ages, as the vendors\' terms state them', head: ['Tool', 'Minimum age', 'Note for Germany'], rows: [
          ['ChatGPT', '13; a parent or guardian must agree until 18', 'OpenAI publishes no separate country table'],
          ['Google Gemini', '13 in general', '16 in Germany, as recorded in our audit'],
          ['Claude', '18', 'Not for under-18s anywhere']
        ] },
        { kind: 'source', html: 'Taken from the vendors\' own terms, which our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> quotes word for word (checked in July 2026). Teenagers in our classes only meet tools their age allows, and a parent is asked first wherever the terms want a parent\'s consent.' }
      ]
    },
    {
      id: 'upper',
      eyebrow: 'Ages 16 to 18',
      h2: 'What coding do 16 to 18 year olds need for the Oberstufe and the Abitur?',
      lede: 'The gymnasiale Oberstufe has a one-year Einführungsphase and a two-year Qualifikationsphase, according to the KMK. Informatik there is a real exam subject, and it is examined differently from how most teenagers practise coding.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik in the Oberstufe',
          left: [
            'In Nordrhein-Westfalen, Informatik can be taken as a Grundkurs of three hours or a Leistungskurs of five hours in the Qualifikationsphase. In Bayern every Gymnasium branch has two compulsory hours of informatics in Klasse 11. Nationally, the GI monitor puts the share of Oberstufe pupils who take Informatik at about 15 percent.',
            'The written exam is on paper. In Bayern, large parts of the written Informatik Abitur are programming tasks on paper with no work at a computer; in Nordrhein-Westfalen, a computer is not intended for the written tasks at all.'
          ],
          rightH3: 'What coding looks like at 16 to 18',
          right: [
            'Java or Python with classes and objects, lists, stacks and queues, recursion, and tracing a program by hand to predict its output, the skill the paper exam rewards. Alongside that, larger projects that never fit a school term: a web app, a data analysis, a small machine-learning model.',
            'The national competitions open up fully: the Bundeswettbewerb Informatik, whose round 1 can be solved without deep informatics knowledge, and the BWKI for AI projects in Sekundarstufe II.'
          ] },
        { kind: 'p', mt: true, html: 'We teach alongside school and award no German grades; the school course and the Land\'s exam are the ones that count. Our <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">Informatik Abitur course</a> practises the paper-based exam habit, and the <a class="ag-inline-link" href="/informatik-nachhilfe-online">Informatik-Nachhilfe page</a>, in German, explains each Land\'s rules.' }
      ]
    },
    {
      id: 'adults',
      eyebrow: 'Adults',
      h2: 'Is it too late to learn coding as an adult in Germany?',
      lede: 'No. Adults learn differently from children, not worse: they need fewer games and more reasons, and they usually have a project in mind from the first class.',
      body: [
        { kind: 'three', cells: [
          { h3: 'After the Abitur', p: 'Young adults up to 21 who are not yet at university or in work can still enter the Bundeswettbewerb Informatik, according to BWINF. Many use the year to build a portfolio before a degree.' },
          { h3: 'At work', p: 'Python for automating reports and spreadsheets, SQL for data, and web development. Teams in Germany often write code and documentation in English, so classes in English fit the job.' },
          { h3: 'With AI', p: 'Adults can use the tools that are closed to teenagers, such as Claude, which its terms restrict to users aged 18 and over. We teach how to check what an AI tool writes, not only how to ask it.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults learn in the evening or at the weekend, in a group or one to one, and at whatever pace their week allows. Our <a class="ag-inline-link" href="/ai-and-machine-learning-classes-in-germany">AI and machine learning page for Germany</a> describes the AI track in more detail.' }
      ]
    },
    {
      id: 'staircase',
      eyebrow: 'One problem, five ages',
      h2: 'How does the same coding problem change from age 6 to adult?',
      lede: 'We give learners of every age the same staircase of blocks: one block in the first column, two in the second, three in the third. How many blocks does a staircase of 10 steps need? Watch what each age does with it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ages 6 to 8, with real blocks.</strong> Build staircases of 1, 2, 3 and 4 steps and count the blocks: 1, 3, 6, 10. What do you add each time?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a sprite draw the staircase column by column and keep a counter variable that goes up by one for every block it stamps.',
          '<strong>Ages 10 to 12, Python.</strong> Write a loop that adds the column heights. The program below does that and tries a guess at the same time.',
          '<strong>Ages 12 to 15, test a shortcut.</strong> Guess a formula, then let the computer check it against the loop for a thousand staircases.',
          '<strong>Ages 16 and up, prove it.</strong> Explain why the right formula must be right, and why it is faster than the loop for a staircase of a million steps.'
        ] },
        { kind: 'code', label: 'Ages 10 and up: count the blocks, and try a guess', lang: 'Python', code: V1, note: 'It prints <code>4 steps: 10 blocks, guess 8</code>, <code>10 steps: 55 blocks, guess 50</code> and <code>100 steps: 5050 blocks, guess 5000</code>.' },
        { kind: 'p', mt: true, html: 'The guess looks almost right, and for 100 steps it is within one percent. A staircase does fill about half of a square. But "about half" is not half: every column pokes out above the square\'s diagonal, so a straight cut through the square slices the top block of each column in two. Rather than argue, the learner asks the computer to check the guess, and a better formula, against the loop for every staircase from 1 to 1000 steps.' },
        { kind: 'code', label: 'Ages 12 and up: check every shortcut against the loop', lang: 'Python', code: V2, note: 'It prints <code>Guess wrong for 1000 of 1000, first at 1</code> and <code>Formula agrees for all 1000: True</code>.' },
        { kind: 'two', mt: true,
          leftH3: 'What the older learner adds',
          left: [
            'Why does steps &times; (steps + 1) &divide; 2 work? Put two equal staircases together, one turned upside down, and they make a rectangle of steps by steps + 1 blocks. One staircase is half of that rectangle, exactly.',
            'The loop does one addition per column, so a million steps means a million additions. The formula does one multiplication and one division, whatever the size. That difference, counting the work a program does, is where computer science begins.'
          ],
          rightH3: 'What every age learns',
          right: [
            'A six year old learns that counting carefully beats guessing. A twelve year old learns that a guess must be tested before it is trusted, and that a computer is a fast, honest tester. A sixteen year old learns to prove what the test suggested.',
            'The problem stays the same; the thinking gets deeper. That is how we teach across ages: the same habits, at the depth each learner is ready for.'
          ] },
        { kind: 'source', html: 'Staircase problem, code and printed results: written and run by us in Python 3 on 3 November 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones by age',
    h2: 'What a learner can usually do at each age, with regular classes',
    lede: 'Our own milestones for learners who have taken classes for a while, used to place them in the right group. A late starter catches up faster than the table suggests.',
    table: { caption: 'Coding milestones by age (ours)', head: ['Age', 'The learner can', 'Typical tool'], rows: [
      ['7', 'Give a sequence of exact instructions and fix one that went wrong', 'Paper, then Scratch'],
      ['9', 'Build a Scratch game with a loop, a condition and a score', 'Scratch'],
      ['11', 'Write a short Python program with variables, if and a loop', 'Python'],
      ['14', 'Split a program into functions, read data from a file and test it', 'Python'],
      ['17', 'Write classes, use data structures and trace code on paper', 'Java or Python'],
      ['Adult', 'Plan and build a working tool for their own job or project', 'Python, SQL, web']
    ] },
    left: { h3: 'For parents', ps: [
      'Age tells us where to start looking; the first class tells us where to start teaching.',
      'Siblings of different ages can learn the same subject in separate groups, or one to one, at times that suit the family.'
    ] },
    right: { h3: 'For learners', ps: [
      'When you find a shortcut, test it against the slow way before you use it.',
      'You are never too old to start, and never too young to explain what your program does.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses, from the youngest to adults',
    lede: 'All taught live in English with one regular mentor, as a group class or one to one.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 11', sub: 'Grundschule years', courses: [
        { code: 'CBA / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'From first blocks to finished games.' },
        { code: 'CBA / YOUNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic and patterns, often screen-free.' },
        { code: 'CBA / YOUNG / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works, with no adult-only tools.' }
      ] },
      { num: 'II', h3: 'Ages 12 to 18', sub: 'Klasse 7 to the Abitur', courses: [
        { code: 'CBA / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From basics to files, classes and data.' },
        { code: 'CBA / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language of many Oberstufe courses.' },
        { code: 'CBA / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Paper-based exam practice for Q1 and Q2.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CBA / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A complete path for adult beginners.' },
        { code: 'CBA / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Data, charts and models for work.' },
        { code: 'CBA / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web', blurb: 'Front end, back end and deployment.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work at each age',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Groups are formed by age and level, and every class is an hour with the same mentor.',
    slots: [
      { time: 'Children', l: 'After-school afternoons or weekend mornings, German time.' },
      { time: 'Teenagers', l: 'Late afternoons, around homework.' },
      { time: 'Adults', l: 'Evenings or weekends, or one to one.' }
    ],
    cells: [
      { h3: 'Grouped by age', p: 'Seven year olds with seven year olds.' },
      { h3: 'Placed by level', p: 'A short check in the first class.' },
      { h3: 'Same mentor', p: 'One person who knows the learner.' },
      { h3: 'English, at their pace', p: 'Clear speech, rephrased when needed.' },
      { h3: 'Age-safe tools', p: 'No tool above the learner\'s age.' },
      { h3: 'Moving up', p: 'Learners change group as they grow.' }
    ]
  },

  projectsH2: 'Projects by our students, of many ages',
  projectsLede: 'From first games to AI assistants. A few projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Reviews from parents and learners on Google, exactly as written.',

  fees: {
    h2: 'Fees for every age in Germany',
    lede: 'The fee does not change with age: one monthly amount for eight live classes. It is displayed in euro at the European Central Bank reference rate, and the payment is taken in US dollars, which your bank converts, so your statement can show a slightly different euro figure.',
    free: ['A free first class at the learner\'s age and level', 'A suggested course and group', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age and level', 'One regular mentor', 'Two live classes a week', 'Monthly, stop in any month'],
    one: ['One learner and one mentor', 'Any age, their own pace', 'Times agreed in German time']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Coding by age in Germany: common questions',
    items: [
      { q: 'What age should a child start coding in Germany?', a: 'Many children start at 6 or 7 with screen-free puzzles and Scratch, while they are in the first years of Grundschule. Typed Python usually follows from about 9. There is no wrong age to start; a late starter simply begins further along.' },
      { q: 'What should a 10 year old learn in coding?', a: 'Most ten year olds are ready for typed Python: variables, decisions with if, loops and small games. In Nordrhein-Westfalen they also meet compulsory Informatik in Klasse 5 and 6; in Berlin and Brandenburg they are still at Grundschule until Klasse 6.' },
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by a mentor who matches the learner\'s pace and accent. Younger children are given simple instructions and plenty of time, and many families value the English practice as much as the coding.' },
      { q: 'Do German schools teach coding?', a: 'Some do, depending on the Land and the Klasse. NRW teaches Informatik in Klasse 5 and 6, Niedersachsen in Klasse 9 and 10, and Hamburg four hours across Klasse 7 to 10, while six Länder have no Informatik compulsory for all pupils, according to the GI Informatik-Monitor 2026/27.' },
      { q: 'Can a six year old learn online?', a: 'Yes, in short, active steps with a mentor who reads instructions aloud. Six year olds work with blocks in Scratch and puzzles away from the screen; a parent nearby helps with the first log-in.' },
      { q: 'Which coding competitions are open at which age?', a: 'The Informatik-Biber is open from Klasse 3, the Jugendwettbewerb Informatik has levels for Klasse 5 and 6, 7 to 9 and from 10, and the Bundeswettbewerb Informatik is open to young people up to 21 who are not yet studying or working.' },
      { q: 'Can teenagers use ChatGPT in class?', a: 'From 13, OpenAI says, as long as a parent or guardian agrees while the user is under 18; Claude is for adults only. A teenager in our classes works only with tools that their age permits, and parents are asked first whenever the vendor requires it.' },
      { q: 'When are classes held for different ages?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually come after school or on weekend mornings, adults in the evening.' },
      { q: 'Can siblings of different ages learn together?', a: 'They usually learn better in separate groups of their own age and level, which can be booked at times that suit the family. One-to-one classes are another option for each child.' },
      { q: 'Do you teach adults?', a: 'Yes. Adults learn Python, web development, data and AI with us, usually in the evening or at weekends, in a group or one to one. Many adults in Germany find classes in English useful because their workplace already uses English for code.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for families in Germany with learners of any age.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families in Germany.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For children 6 to 12 in Berlin.' },
      { href: '/coding-milestones-by-age', label: 'Coding milestones by age', p: 'Our general guide to milestones.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik help in English, page in German.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for AI tools, quoted.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the learner\'s age and Klasse. In the first class the mentor gives a small task at that level, sees how they think and how comfortable they are in English, and then suggests a course and a group of the right age.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus by age.',
    note: 'Live online classes in English, with mentors based in India. WhatsApp is the fastest way to ask about a particular age.',
    formNote: 'No card, no obligation, and no fee for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' }
      ] },
      { h4: 'By age', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding for kids, 6 to 12' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI, 9 to 12' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/coding-milestones-by-age', label: 'Milestones by age' }
      ] }
    ],
    bottomRight: 'Test the shortcut'
  },

  personalityCss: `
.ag-root.ag-cba .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-cba .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cba .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cba .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cba .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'KMK pages on the Primarbereich, Sekundarstufe I and Sekundarstufe II and the KMK Eurydice dossier; Gesellschaft für Informatik, Informatik-Monitor 2026/27; Bundesweite Informatikwettbewerbe; Stiftung Jugend forscht; FIRST LEGO League Germany; BWKI; vendors\' terms as quoted in content/ai-tool-age-audit.json. Read 2 November 2026. The coding column, milestones and staircase problem our own.',
    localProject: 'Test the shortcut: one original staircase problem solved at five ages, with real blocks, Scratch, a Python loop, a formula checked against the loop and a proof; the guess steps * steps // 2 prints 8, 50 and 5000 against 10, 55 and 5050 blocks and is wrong for all 1000 staircases, while steps * (steps + 1) // 2 agrees for all 1000. Lesson family: test a shortcut against brute force before you trust it.',
    requiredMentions: ['4 steps: 10 blocks, guess 8', 'Guess wrong for 1000 of 1000, first at 1', 'Formula agrees for all 1000: True', 'Test the shortcut', 'Coding by age, set against the German school stage', 'between 30 June and 30 September', 'What should a 10 year old in Germany learn in coding?', 'twelve tasks in 35 minutes'],
    sources: [
      { claim: 'Grundschule length, lesson hours, 2024 key-points paper, no leaving exam.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'Sekundarstufe I tracks and change of track in Klasse 5 and 6.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-i.html' },
      { claim: 'Oberstufe phases.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-ii-gymnasiale-oberstufe-und-abitur.html' },
      { claim: 'School-entry cut-off between 30 June and 30 September.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'Informatik by Land and in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'Biber task counts, Jugendwettbewerb levels, Bundeswettbewerb eligibility.', url: 'https://bwinf.de/' },
      { claim: 'Jugend forscht age groups.', url: 'https://www.jugend-forscht.de/teilnahme/alterssparten.html' },
      { claim: 'ChatGPT age terms.', url: 'https://openai.com/policies/row-terms-of-use/' }
    ],
    rejectedClaims: [
      'A recommended starting age from any official body: none found; the ages given are our teaching experience.',
      'Scratch\'s own age range: its pages loaded as script shells and gave no text, so no age is attributed to Scratch.',
      'Any claim about which schools our students attend: none made.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
