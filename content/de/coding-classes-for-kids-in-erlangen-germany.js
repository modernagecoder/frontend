'use strict';
// Coding classes for kids in Erlangen (ag- city page, Germany cluster P6 row DE193, tier-2 shape coding-classes-for-kids
// = ages 6 to 12).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: a picture of numbers can fib. A star chart of Erlangen's street and park trees, one star per 500, makes 4,953
// maples and 4,603 oaks look equal and wipes out hundreds of birches, because whole-number division throws the remainder
// away.
// Sources (school and contest facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/
// FACTS.md, fetched 2 Nov 2026; numbers are fact ids there):
//  - KMK Primarbereich: Grundschule "von der ersten bis zur vierten" Jahrgangsstufe outside Berlin and Brandenburg (1).
//  - GI Informatik-Monitor 2026/27, Bayern page: Mittelschule "in den Jahrgangsstufen 5 bis 10 das verbindliche Fach
//    Informatik im Umfang von je einer Wochenstunde" (69); Gymnasium, Natur und Technik, "in den Jahrgangsstufen 6 und 7 im
//    Umfang von je einer Wochenstunde der Schwerpunkt Informatik" (70).
//  - bwinf.de: Biber "kostenfrei" (129); "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse erforderlich" (130); primary pupils
//    "neun Aufgaben in 30 Minuten" (132); "Die Biberwochen 2026 finden vom 9. bis 20. November statt." (133).
//  - pangea-wettbewerb.de: "ANMELDEBEGINN: 01. Oktober 2026 ANMELDESCHLUSS: 17.02.2027 VORRUNDE: 23.02.–03.03.2027" (189);
//    Vorrunde "15 (Klasse 3&4) bzw. 20 Aufgaben ... innerhalb von 45-60 Minuten" (191).
//  - KMK Ferien 2026/2027, Bayern row: "Bayern 02.11. - 06.11. 24.12. - 08.01. -- 08.02. - 12.02." / "22.03. - 02.04.
//    18.05. - 28.05. 02.08. - 13.09." (raw src-pages/coding-classes-in-land-bremen/kmk-fer2627/fe303dbf.txt).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Erlangen 115,928; Nürnberg 529,508; Fürth 132,036.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Erlangen, "Baumkataster" (GovData baumkataster7ce62 via open.bydata, publisher Stadt Erlangen, resource
//    licence http://dcat-ap.de/def/licenses/cc-by/4.0, modified 10 June 2026), file
//    geodaten.erlangen.de/opendata/ENVI/baumkataster/baumkataster_25832.csv, downloaded 3 November 2026, 2,464,191 bytes,
//    sha256 6bea5a3a...271ab249c6b1, 23,250 trees; columns include GeoVal_Baumarten_gattung (genus) and
//    GeoVal_Baumarten_deutschername. The directory index geodaten.erlangen.de/opendata/ returned 403 (not retried).
//    Class file (ours): erlangen_trees.csv (genus, name).
// Our own calculations (scratchpad de/w/T6/erlangen/v1.py, v2.py, v3.py, python3 -I):
//  v1: "Trees in the file: 23250"; Acer 4953, Quercus 4603, Tilia 2104, Carpinus 1704, Pinus 1339, Fraxinus 1050, Robinia
//      849, Prunus 621, Platanus 550, Betula 474, Populus 474, Aesculus 393.
//  v2 (count // 500): Acer 9 stars, Quercus 9, Tilia 4, Carpinus 3, Pinus 2, Fraxinus 2, Robinia 1, Prunus 1, Platanus 1,
//      Betula 0, Populus 0, Aesculus 0.
//  v3 (round(count / 500)): Acer 10, Quercus 9, Tilia 4, Carpinus 3, Pinus 3, Fraxinus 2, Robinia 2, Prunus 1, Platanus 1,
//      Betula 1, Populus 1, Aesculus 1.
//  Also: 262 trees have no genus; by single species the most common is "Stiel-Eiche, Sommer-Eiche" (3,523), by genus Acer.
// Lesson family: scaling a count into a picture; whole-number division (//) drops the remainder, so round on purpose and
// label the scale.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  'from collections import Counter',
  '',
  'with open("erlangen_trees.csv", encoding="utf-8") as f:',
  '    genus = Counter(row["genus"] for row in csv.DictReader(f))',
  '',
  'print("Trees in the file:", sum(genus.values()))',
  'for name, count in genus.most_common(12):',
  '    print(name, count)'
].join('\n');

const V2 = [
  'print("One star for every 500 trees:")',
  'for name, count in genus.most_common(12):',
  '    print(name.ljust(10), "*" * (count // 500))'
].join('\n');

const V3 = [
  'print("Rounded to the nearest 500:")',
  'for name, count in genus.most_common(12):',
  '    print(name.ljust(10), "*" * round(count / 500))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Erlangen: coding for kids' },
  slug: 'coding-classes-for-kids-in-erlangen-germany',
  code: 'erl',
  accent: '#865933',
  accentRationale: 'Coding classes for kids in Erlangen: a bark brown #865933 for the oaks and maples of the city tree register; contrast 4.88 on the paper #FBF8F2 and above 4.5 on the paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-bavaria', name: 'Bavaria' }],
  routeLabel: 'Coding classes for kids in Erlangen',
  title: 'Coding Classes for Kids in Erlangen: Live Online, in English',
  description: 'Coding classes for kids in Erlangen aged 6 to 12, live online in English: when Bavarian schools start Informatik, free contests and an Erlangen tree data project.',
  ogDescription: 'Live online coding in English for Erlangen children aged 6 to 12: Scratch first, then Python, with a project on the city\'s 23,250 registered trees and a star chart that quietly loses the birches.',
  twitterDescription: 'Coding for Erlangen kids, live in English, with a project on Erlangen\'s tree register.',
  pageName: 'Coding Classes for Kids in Erlangen',
  webPageDescription: 'A guide for Erlangen parents of children aged 6 to 12 to live coding classes in English: when Informatik begins at Bavarian schools, the free Informatik-Biber and the Pangea maths contest in 2026/27, and an original project on Stadt Erlangen\'s tree register.',
  courseDescription: 'Live online coding classes in English for Erlangen children aged 6 to 12: puzzles and Scratch from 6, typed Python from about 9, in a group of fifteen to twenty or one to one, always with the same mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Erlangen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schule', label: 'School' },
    { href: '#trees', label: 'Tree data' },
    { href: '#contests', label: 'Contests' },
    { href: '#uhr', label: 'Times' }
  ],
  eyebrow: 'Erlangen &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Erlangen',
  lede: 'Erlangen keeps a register of 23,250 trees. Ask a child to turn it into a picture, one star for every 500 trees, and the picture tells a small fib: the birches vanish completely. Working out why is what our live lessons in English are really about, for children from 6 to 12. Further down: when Bavarian schools bring in Informatik, a pair of contests a third grader can enter in 2026/27, and lesson times for Erlangen.',
  secondaryCta: { href: '#trees', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, my child lives in Erlangen and would like to learn coding in English. Can we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; one mentor who gets to know your child',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['First', 'Puzzles and Scratch'],
    ['Next', 'Typed Python from about 9'],
    ['Group size', '15 to 20, or one to one'],
    ['Teaching', 'In English, mentors in India'],
    ['Trial', 'A free first class']
  ],
  capsuleQ: 'In brief',
  capsule: 'Erlangen children aged 6 to 12 learn coding with Modern Age Coders in live online classes taught in English. Six and seven year olds start with picture puzzles and Scratch blocks; by nine or ten they type Python and count things in small real files. One mentor stays with each child, adjusting to their speed and the way they speak, whether in an age group of fifteen to twenty or alone, after school or at the weekend.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Which coding course should an Erlangen child start with?',
    lede: 'Three gentle starts. The free class shows which one suits your child.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'ERL / 01', title: 'Scratch Coding for Kids', note: 'From 6. Games and animated stories made with blocks; a short course to see whether coding clicks.' },
      { course: 'kids-coding-blocks-masterclass', code: 'ERL / 02', title: 'Coding for Kids', note: 'Ages 6 to 12 in age groups. A longer path from blocks to apps, step by step.' },
      { course: 'python-ai-kids-masterclass', code: 'ERL / 03', title: 'Python and AI for Kids', note: 'Nine and up. Real typed code, turtle drawings, then the tree star chart further down.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'School in Bavaria',
      h2: 'When do children in Erlangen meet Informatik at school?',
      lede: 'After Grundschule, and how much depends on the school type. The Gesellschaft für Informatik records the Bavarian rules for 2026/27.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing in an Erlangen child\'s school years', head: ['Grades', 'School type', 'Informatik on the timetable'], rows: [
          ['1 to 4', 'Grundschule', 'Before the Bavarian Informatik rules begin'],
          ['5 to 10', 'Mittelschule', 'A required Informatik hour every week, every year'],
          ['6 and 7', 'Gymnasium', 'Informatik as the focus of one Natur und Technik hour a week']
        ] },
        { kind: 'source', html: 'The KMK primary-school page sets out the four Grundschule years; the GI Informatik-Monitor for 2026/27 (Bavaria), checked on 2 November 2026, gives the secondary rules, and for the Gymnasium says "in den Jahrgangsstufen 6 und 7 im Umfang von je einer Wochenstunde der Schwerpunkt Informatik".' },
        { kind: 'two', mt: true,
          leftH3: 'The primary years',
          left: [
            'From about 6 to 10 an Erlangen child is in Grundschule. These are the years when children are most curious about how games and apps work, and the school timetable has not yet reached Informatik.',
            'A weekly class fills that space with play that has a purpose: building, testing and fixing.'
          ],
          rightH3: 'Arriving ready',
          right: [
            'At a Mittelschule computing starts in grade 5, at a Gymnasium in grade 6. A child who has already written small programs meets it with confidence.',
            'What we offer sits next to school: there is no tutoring for tests and nothing we do turns into a mark.'
          ] }
      ]
    },
    {
      id: 'trees',
      tint: 'tint',
      eyebrow: 'An Erlangen data project',
      h2: 'Which trees does Erlangen have most of, and why does our star chart fib?',
      lede: 'Maples first, oaks a close second, and the chart fibs because of one tiny symbol in the code. Stadt Erlangen publishes its tree register as open data under CC BY 4.0, and our older children turn it into a picture.',
      body: [
        { kind: 'two',
          leftH3: 'The register',
          left: [
            'The city\'s Baumkataster lists 23,250 trees, each with its botanical genus, species and German name. Our copy dates from 3 November 2026; children work from a cut-down file, erlangen_trees.csv, with just the genus and the name.',
            'The genus is the tree\'s family name in Latin: Acer for maples, Quercus for oaks, Tilia for limes, Betula for birches.'
          ],
          rightH3: 'The idea',
          right: [
            'First, count the trees of each genus. Then draw a bar for each one out of stars, one star for every 500 trees, so the whole chart fits on a screen.',
            'Before running the chart, children predict how many stars the birches will get. Most say "about one".'
          ] },
        { kind: 'code', label: 'Step 1: count the trees by genus', lang: 'Python', code: V1, note: 'It prints <code>Trees in the file: 23250</code>, then the twelve largest genera: <code>Acer 4953</code>, <code>Quercus 4603</code>, <code>Tilia 2104</code>, <code>Carpinus 1704</code>, <code>Pinus 1339</code>, <code>Fraxinus 1050</code>, <code>Robinia 849</code>, <code>Prunus 621</code>, <code>Platanus 550</code>, <code>Betula 474</code>, <code>Populus 474</code>, <code>Aesculus 393</code>.' },
        { kind: 'code', label: 'Step 2: one star per 500 trees', lang: 'Python', code: V2, note: 'Run after Step 1, it prints the chart: Acer and Quercus get nine stars each, Tilia four, Carpinus three, Pinus and Fraxinus two, Robinia, Prunus and Platanus one, and <code>Betula</code>, <code>Populus</code> and <code>Aesculus</code> get no stars at all.' },
        { kind: 'p', mt: true, html: 'The birches have 474 trees and no stars. The poplars too. And the maples, with 350 more trees than the oaks, look exactly the same size. The reason is the <code>//</code> sign. In Python, <code>474 // 500</code> means "how many whole 500s fit into 474", and the answer is 0. Whole-number division throws the rest away, every time.' },
        { kind: 'p', html: 'The fix is to decide how to round. Version 3 divides normally, which gives 0.948 for the birches, and then rounds to the nearest whole star.' },
        { kind: 'code', label: 'Step 3: round to the nearest star', lang: 'Python', code: V3, note: 'Run after Steps 1 and 2, it prints a fairer chart: Acer ten stars, Quercus nine, Tilia four, Carpinus and Pinus three, Fraxinus and Robinia two, and Prunus, Platanus, Betula, Populus and Aesculus one each.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Erlangen\'s twelve largest tree genera and their stars (our counts and charts)', head: ['Genus (common name)', 'Trees', 'Stars with //', 'Stars rounded'], rows: [
          ['Acer (maple)', '4,953', '9', '10'],
          ['Quercus (oak)', '4,603', '9', '9'],
          ['Tilia (lime)', '2,104', '4', '4'],
          ['Carpinus (hornbeam)', '1,704', '3', '3'],
          ['Pinus (pine)', '1,339', '2', '3'],
          ['Fraxinus (ash)', '1,050', '2', '2'],
          ['Robinia (black locust)', '849', '1', '2'],
          ['Prunus (cherry and plum)', '621', '1', '1'],
          ['Platanus (plane)', '550', '1', '1'],
          ['Betula (birch)', '474', '0', '1'],
          ['Populus (poplar)', '474', '0', '1'],
          ['Aesculus (horse chestnut)', '393', '0', '1']
        ] },
        { kind: 'source', html: 'Counts and charts are ours, made from the Stadt Erlangen Baumkataster (CC BY 4.0) as fetched on 3 November 2026. 262 trees in the file have no genus and are counted under an empty name. By single species the most common tree is the Stiel-Eiche (pedunculate oak) with 3,523, while by genus the maples lead: how you group decides the winner.' },
        { kind: 'p', mt: true, html: 'Every chart has a scale, and every scale hides something. A good chart says its scale out loud, "one star = 500 trees, rounded", so the reader knows what the picture can and cannot show. Children who learn this at ten read charts in the newspaper differently for the rest of their lives.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Count the trees on your street or in a park. Draw one leaf for every 5 trees. What happens to a kind of tree you only saw 3 times?',
          '<strong>Eight to ten, in Scratch.</strong> Program the pen to draw a bar whose length is the number of trees divided by 100. Try it with 474 and with 500. Are the bars the right size?',
          '<strong>Ten to twelve, in Python.</strong> Change the scale to one star per 250 trees and run both versions again. Which genus now gets different stars, and why?'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Will my child manage coding lessons in English?',
      lede: 'Almost always, because a coding lesson is something a child watches and does, not just listens to.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Only in English', p: 'All lessons are live and taught in English by mentors based in India. We do not offer lessons in German, and we say so before you book.' },
          { h3: 'Pace and accent', p: 'Mentors use short sentences, repeat when needed and show on screen what they mean. Over a few weeks they get used to how each child speaks.' },
          { h3: 'A bonus subject', p: 'Children at German schools practise English every week without it feeling like a lesson. Blocks, keywords and error messages are the same English words everywhere.' }
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which contests can an Erlangen primary pupil take part in this school year?',
      lede: 'The Informatik-Biber for logic puzzles and Pangea for maths both start at grade 3. The school is usually the way in, so a question to the teacher comes first.',
      body: [
        { kind: 'table', numCols: [], caption: 'Two contests open to primary pupils in 2026/27 (organisers\' own pages)', head: ['', 'Informatik-Biber', 'Pangea Mathematikwettbewerb'], rows: [
          ['Open to', 'Klasse 3 upwards, nothing to learn beforehand', 'Klasse 3 upwards'],
          ['Klasse 3 and 4', '9 puzzles, 30 minutes', '15 tasks, 45 to 60 minutes'],
          ['Key dates', 'Biberwochen 9 to 20 November 2026', 'Registration 1 October 2026 to 17 February 2027; first round 23 February to 3 March 2027'],
          ['Cost', 'Free', 'See the organiser']
        ] },
        { kind: 'source', html: 'Taken on 2 November 2026 from bwinf.de for the Biber and from the Termine and Ablauf pages of pangea-wettbewerb.de. Modern Age Coders has no link to either contest.' },
        { kind: 'p', mt: true, html: 'The Biber asks children to follow rules, spot patterns and find routes; Pangea asks for careful maths thinking. Both reward reading a question slowly, which is what the star chart teaches too. Real contest tasks stay with the organisers; in class children meet puzzles our mentors invented.' }
      ]
    },
    {
      id: 'uhr',
      eyebrow: 'Times',
      h2: 'What times would work for an Erlangen child?',
      lede: 'After-school hours in Erlangen fall in the Indian evening, where our mentors are, and weekend mornings suit younger children.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Erlangen start times, with the time in India', head: ['Erlangen', 'India, winter', 'India, from 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['16:20', '20:50', '19:50'],
          ['Saturday 08:45', '13:15', '12:15'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz puts German clocks one hour ahead of UTC in winter and two in summer; they changed on 25 October 2026 and change again on 28 March 2027. Indian time, fixed at UTC+5:30, is therefore four and a half hours ahead today and three and a half from late March. Pick any time that suits you.' },
        { kind: 'p', mt: true, html: 'Erlangen follows the Bavarian holiday dates in the KMK table of 9 October 2025. The longest breaks are at Christmas (from Thursday 24 December 2026 until Friday 8 January 2027) and in summer (Monday 2 August until Monday 13 September 2027); there are also a week in November and in February, two weeks around Easter and nearly two at Whitsun. Lessons can carry on through the holidays, or pause, as you prefer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What will my child be able to do as they progress?',
    lede: 'Our own five milestones for ages 6 to 12, used to place children in groups and to report back to parents.',
    table: { caption: 'Five steps we track for children (ours)', head: ['Milestone', 'Usual age', 'What your child can do'], rows: [
      ['Order', '6 to 7', 'Put steps in the right order so a sprite follows them'],
      ['Repeat', '7 to 9', 'Use a loop instead of copying the same blocks'],
      ['Count', '8 to 10', 'Keep a tally in a variable and show it'],
      ['Divide and round', '9 to 11', 'Scale a number for a picture and choose how to round'],
      ['Read a file', '10 to 12', 'Count real records and explain a chart\'s scale']
    ] },
    left: { h3: 'For parents', ps: [
      'After the tree project, ask your child why the birches had no stars. If they talk about remainders, the lesson worked.',
      'Monthly notes tell you what was built and understood, not how long the screen was on.'
    ] },
    right: { h3: 'For children', ps: [
      'When you shrink numbers to fit a picture, something small can disappear. Check the smallest bar.',
      'Write your scale under every chart: one star equals how many?'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Erlangen children',
    lede: 'Grouped into thinking, playing and making.',
    bands: [
      { num: 'I', h3: 'Thinking', sub: 'Puzzles and numbers', courses: [
        { code: 'ERL / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic first, code later.' },
        { code: 'ERL / THINK / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick sums, no calculator.' },
        { code: 'ERL / THINK / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic for the youngest.' }
      ] },
      { num: 'II', h3: 'Playing', sub: 'Games and worlds', courses: [
        { code: 'ERL / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code in a familiar world.' },
        { code: 'ERL / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Make real Roblox games.' },
        { code: 'ERL / PLAY / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot games', blurb: 'A real game engine for older children.' }
      ] },
      { num: 'III', h3: 'Making', sub: 'Bigger projects', courses: [
        { code: 'ERL / MAKE / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second typed language.' },
        { code: 'ERL / MAKE / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep', blurb: 'Build an idea fast, then present it.' },
        { code: 'ERL / MAKE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths turned into programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How do live coding lessons run for an Erlangen child?',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'Soon after Grundschule ends.' },
      { time: 'Later afternoon', l: 'For older children with more homework.' },
      { time: 'Weekend mornings', l: 'Saturday or Sunday, unhurried.' }
    ],
    cells: [
      { h3: 'A steady mentor', p: 'The same mentor each week.' },
      { h3: 'Short, lively lessons', p: 'Sized for young attention spans.' },
      { h3: 'Children drive', p: 'The child builds; the mentor guides.' },
      { h3: 'Same-age classes', p: 'Six year olds learn with six year olds.' },
      { h3: 'Notes for parents', p: 'A short monthly summary.' },
      { h3: 'Two formats', p: 'Groups of 15 to 20, or private.' }
    ]
  },

  projectsH2: 'Where young coders can go',
  projectsLede: 'Work by older students of ours abroad. The <a class="ag-inline-link" href="/student-labs">student labs</a> show the full range.',
  reviewsLede: 'Reviews left on Google by families, unchanged.',

  fees: {
    h2: 'Fees for Erlangen families',
    lede: 'Eight live lessons are included in each monthly fee. To show euro we apply the reference rate of the European Central Bank; what your card is actually charged is a US dollar amount that your bank changes into euro, so the final sum may move a little.',
    free: ['A free first lesson', 'A puzzle and a first Scratch game', 'No card needed'],
    group: ['15 to 20 children of a similar age', 'One regular mentor', 'Two lessons a week', 'Monthly, stop at any time'],
    one: ['Your child and one mentor', 'Their own pace and projects', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Erlangen parents ask',
    h2: 'Coding classes for kids in Erlangen: questions from families',
    items: [
      { q: 'Are the classes in German?', a: 'No. Teaching happens in English and nothing else. Mentors keep their language simple, follow the child\'s tempo and accent, and demonstrate on screen rather than lecture.' },
      { q: 'What is a good age to start?', a: 'Six, with puzzles and Scratch blocks, which need no typing. Most children start typing Python at around 9.' },
      { q: 'When does Informatik start at Bavarian schools?', a: 'After Grundschule. The Gesellschaft für Informatik records compulsory Informatik at the Mittelschule with one weekly lesson in grades 5 to 10, and at the Gymnasium one weekly Informatik-focused lesson in grades 6 and 7 within Natur und Technik.' },
      { q: 'When are classes in Erlangen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The mentors are in India, where an Erlangen afternoon is already evening.' },
      { q: 'What is the Erlangen tree project?', a: 'A Python exercise we created from Stadt Erlangen\'s tree register of 23,250 trees. A star chart with one star per 500 trees gives the 474 birches no stars, and children learn why whole-number division drops the remainder and how to round fairly.' },
      { q: 'Can my child enter the Informatik-Biber?', a: 'Through the school, yes. Entry is free from Klasse 3, and the 2026 contest weeks are 9 to 20 November 2026.' },
      { q: 'What is Pangea?', a: 'A maths contest that primary pupils can enter from grade 3. For 2027 registration runs from 1 October 2026 to 17 February 2027 and the first round from 23 February to 3 March 2027, according to the organisers.' },
      { q: 'Which equipment does my child need?', a: 'Any laptop or desktop with a mouse, internet that copes with video, and headphones if possible. For the first few lessons it helps if an adult can sit close by.' },
      { q: 'How big are the groups?', a: 'Between fifteen and twenty children close in age. A child can also learn alone with a mentor.' },
      { q: 'What do the fees cover?', a: 'Eight live lessons every month. Prices appear in euro via the ECB reference rate; your card is charged in US dollars and your bank does the exchange. The trial lesson is free of charge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More to read',
    h2: 'Related pages',
    lede: 'More for Erlangen families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The Germany starting point.' },
      { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria', p: 'The whole of Bavaria.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'Where most children start.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'What ten year olds can type.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Project ideas by age.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons explained.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson for your Erlangen child',
    lede: 'During the trial your child tackles one puzzle and builds a tiny Scratch game with the mentor, and you can watch. Afterwards you hear which group would suit.',
    readFirst: 'You may like to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">our courses</a> first.',
    note: 'Lessons are taught live online, in English, by mentors in India. A WhatsApp message gets the quickest reply.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-bavaria', label: 'Bavaria' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Check the smallest bar first'
  },

  personalityCss: `
.ag-root.ag-erl .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-erl .ag-capsule { border-left-width: 4px; }
.ag-root.ag-erl .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-erl .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-erl .ag-band-head h3 { letter-spacing: -0.003em; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern page; bwinf.de Biber pages; pangea-wettbewerb.de Termine and Ablauf; KMK Ferien 2026/2027, Bayern row; Einheitenzeitgesetz; read 2 to 3 November 2026. Stadt Erlangen, Baumkataster, CC BY 4.0.',
    localProject: 'The Erlangen tree star chart: an original Python project on Stadt Erlangen\'s Baumkataster (23,250 trees) in which one star per 500 trees with // gives Acer and Quercus nine stars each and Betula, Populus and Aesculus none; rounding gives Acer ten and every genus at least one; screen-free and Scratch versions. Lesson family: whole-number division drops the remainder; round on purpose and label the scale.',
    requiredMentions: ['erlangen_trees.csv', 'Trees in the file: 23250', 'Acer 4953', 'Betula 474', '474 // 500', 'Baumkataster', 'Pangea', 'Check the smallest bar first'],
    sources: [
      { claim: 'Erlangen tree register and its CC BY 4.0 licence.', url: 'https://ckan.govdata.de/dataset/baumkataster7ce62' },
      { claim: 'Bavarian Informatik at Mittelschule and Gymnasium.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Biber 2026 dates and format.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Pangea 2027 dates and format.', url: 'https://www.pangea-wettbewerb.de/termine/' },
      { claim: 'Bavarian holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' }
    ],
    rejectedClaims: [
      'The city\'s defibrillator and population-structure datasets: not used (health and demographic content).',
      'Tree heights and trunk sizes: many are 0 or blank in the file, so no size claims are made.',
      'Naming Erlangen schools as sources of students: refused.',
      'German-language teaching, grades, or any link with the city, Bavaria, BWINF or Pangea: none.'
    ]
  }
};
