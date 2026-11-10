// SHIP: market | Age 8 in Peru, 3° de primaria: games with rules, decisions in code, the right device at home | if/elif chains stop at the first true test: a star-badge sorter that gives everyone bronze
'use strict';
// Coding for kids age 8 in Peru (ag- English door, Peru cluster row PE073, hubGroup ages; alloc cae, #5B6C00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: English-reading parents in Peru of an eight year old, usually in 3° de primaria (edad normativa 8 at 31 March).
// Spine (different from the Spanish twin programacion-para-ninos-de-8-anos, which covers the CNEB periods of 2° to 4°,
// Scratch versus Minecraft versus Roblox, robotics, the ENLA edition by edition and a score that never resets): eight as
// the age when programs start making decisions; what 3° changes on the school plan; which device an eight year old needs,
// read from INEI's device table (Cuadro 2.3, the page's primary-source table) and the children's phone figure (Cuadro 2.6);
// an if/elif lesson; practice between classes (our plan); AI at eight; Peru time.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and facts-market/src/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - MINEDU Edades normativas (edades-normativas/text.txt): "Se considera la edad normativa al 31 de marzo de cada año.";
//    table order (edades-normativas-pdf/text.txt) puts 3er grado at 8 años.
//  - CNEB (cneb/text.txt): "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3"; "horas pedagógicas (45
//    minutos)"; "Competencias transversales a las áreas: Se desenvuelve en"; "Crea objetos virtuales en diversos formatos:
//    consiste en construir materiales digitales con diversos propósitos, siguiendo un proceso de mejoras sucesivas y
//    retroalimentación"; "Diseña y construye soluciones tecnológicas para resolver problemas".
//  - RM 501-2025-MINEDU (rm501-2025-pdf/text.txt): "treinta y seis (36) semanas lectivas".
//  - INEI TIC II Trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): Cuadro 2.3 rows (2023, 2024, 2025, 2026, change)
//    computadora "16,6 16,0 14,3 14,0 -0,3", laptop "18,9 18,9 18,4 18,9 0,5", celular "90,7 90,2 89,1 90,2 1,1",
//    tablet "2,4 2,2 1,9 2,9 1,0", "Otro 2/ 9,9 12,3 15,3 15,7 0,4" (2/ "Smart TV, otros dispositivos con conexión Wi-Fi");
//    text "laptop (18,9%), computadora (14,0%), tablet (2,9%)". Cuadro 2.6 row "6 a 11 años 54,7 50,4 43,3 48,5 5,2";
//    "el 36,4% de los hogares del país disponía de al menos una computadora"; households with internet "el 64,5%", Lima
//    Metropolitana "el 84,7%", rural "solo el 27,1%".
//  - Vendor terms (content/ai-tool-age-audit.json): ChatGPT "You must be at least 13 years old"; Teachable Machine trains in
//    the browser with no sign-in.
//  - Time: tzdata America/Lima -5:00 (last Rule Peru 1994), Asia/Kolkata 5:30.
// Our own calculations: 3 x 45 = 135 minutes of Inglés a week from 3°, against 2 x 45 = 90 in 1° and 2°; 4 x 45 = 180 of
// Matemática from 3° against 5 x 45 = 225 before; clock conversions (Peru hour + 10:30).
// Our own example (medal8.py, run with python3 -I, exact output): "3 stars: keep going / keep going", "7 stars: bronze /
// bronze", "12 stars: bronze / silver", "18 stars: bronze / gold".
// Lesson family: an if/elif chain stops at the first test that is true, so the order of the tests matters; put the
// strictest test first. Distinct from the Spanish twin's score-reset lesson.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def badge_wrong(stars):',
  '    if stars >= 5:',
  '        return "bronze"',
  '    elif stars >= 10:',
  '        return "silver"',
  '    elif stars >= 15:',
  '        return "gold"',
  '    else:',
  '        return "keep going"',
  '',
  'def badge_right(stars):',
  '    if stars >= 15:',
  '        return "gold"',
  '    elif stars >= 10:',
  '        return "silver"',
  '    elif stars >= 5:',
  '        return "bronze"',
  '    else:',
  '        return "keep going"',
  '',
  'for stars in [3, 7, 12, 18]:',
  '    print(stars, "stars:", badge_wrong(stars), "/", badge_right(stars))'
].join('\n');

const OUT = [
  '3 stars: keep going / keep going',
  '7 stars: bronze / bronze',
  '12 stars: bronze / silver',
  '18 stars: bronze / gold'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for kids aged 8' },
  slug: 'coding-for-kids-age-8-peru',
  code: 'cae',
  accent: '#5B6C00',
  accentRationale: 'Coding for kids age 8 in Peru: an olive green #5B6C00, the colour of a ripening olive from the Tacna valleys, steady and grown-up enough for a child who is starting to write rules; above 4.5:1 on the paper #FBF8F2 and every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for kids age 8 in Peru',
  title: 'Coding for Kids Age 8 in Peru: Live Classes in English',
  description: 'Coding for an eight year old in Peru: live online classes in English, games that make decisions, Scratch to first Python, one to one or in a group, at any hour.',
  ogDescription: 'Eight is when a child\'s programs start to make decisions. What 3° de primaria changes, which device an eight year old needs (INEI 2026), and a lesson where every player wins bronze until the tests are reordered.',
  twitterDescription: 'Live coding classes in English for eight year olds in Peru: games with rules, decisions in code, at an hour your family picks.',
  pageName: 'Coding for Kids Age 8 in Peru',
  webPageDescription: 'A guide for parents in Peru whose child is eight and in 3° de primaria, built from MINEDU normative ages, the CNEB plan of studies and its competencies, RM 501-2025-MINEDU, INEI household technology data for the second quarter of 2026 (device and age tables), vendor age terms and the tz database, with an original lesson on decisions in code.',
  courseDescription: 'Live online coding classes for eight year olds in Peru, taught in English by mentors based in India: Scratch games with scores and rules, first steps towards Python, and AI explained for children, in a group of fifteen to twenty or one to one, at an hour the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding at age 8',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#build', label: 'At eight' },
    { href: '#third', label: '3° de primaria' },
    { href: '#device', label: 'Devices' },
    { href: '#lesson', label: 'Badge lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Age 8 &middot; 3° de primaria &middot; Live, in English',
  h1: 'Coding for kids age 8 in Peru',
  lede: 'Something changes around eight. A child stops being happy that the cat moves and starts asking whether it can lose a life when it touches the dog. That question is the beginning of real programming: a program that decides. This page is for parents in Peru whose eight year old has reached that point, or is about to, and who want the next step taught live and in English.',
  secondaryCta: { href: '#lesson', label: 'Try the badge lesson' },
  wa: 'Hello Modern Age Coders, our child is eight and we live in Peru. Could we book a free coding class in English to see which course fits?',
  heroNote: 'Live classes since 2020 &middot; rated 4.9 by about 547 Google reviewers &middot; eight year olds build games that keep score and make choices',
  spec: [
    ['Age', 'Eight, usually 3° de primaria'],
    ['Main tool', 'Scratch, with a look at Python'],
    ['New idea', 'Programs that decide: if, else'],
    ['Format', 'Live video lesson, never pre-recorded'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free, no card asked']
  ],
  capsuleQ: 'In short',
  capsule: 'An eight year old in Peru is ready to build games that keep score and make decisions, and Modern Age Coders teaches exactly that, live, online and in English. Most eight year olds work in Scratch, where a game can ask "if the cat touches the dog, then lose a life", and the strongest readers take their first look at typed Python. A mentor based in India guides each child on a shared screen, in a group of fifteen to twenty eight year olds or one to one, at whatever hour suits the family in Peru. The first class is free.',

  picks: {
    eyebrow: 'Where eight year olds start',
    h2: 'Three courses that suit an eight year old',
    lede: 'Choose by what your child enjoys: making games, solving puzzles, or asking how machines think. The free class settles it.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'CAE / 01', title: 'Game Development for Kids', note: 'Ages 8 to 12. Scratch games first, then Roblox and Minecraft. Every game needs rules, so every game teaches if and else without the child noticing they are learning logic.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CAE / 02', title: 'Problem Solving and Computational Thinking', note: 'For the eight year old who likes puzzles more than games. Breaking a job into steps, spotting patterns and testing an idea before trusting it, with and without a computer.' },
      { course: 'ai-literacy-for-kids-course', code: 'CAE / 03', title: 'AI Literacy for Kids', note: 'Ages 8 to 14. How a machine learns from examples, why it guesses wrong, and how to check it, using tools made for children rather than adult chatbot accounts.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this page is for',
      h2: 'Who are these coding classes for eight year olds for?',
      lede: 'Families in Peru with a child of eight who can follow simple spoken English, or who would like them to learn it while building something.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children who have done some Scratch', p: 'Perhaps at school, perhaps alone on a tablet. They can move a sprite but their games fall apart when there are rules to follow. That is exactly where an eight year old needs a teacher.' },
          { h3: 'Complete beginners', p: 'Eight is a fine age to start from nothing. Reading is easier than at six, so blocks go faster, and many eight year olds catch up with older beginners within a term.' },
          { h3: 'Families who want English with a purpose', p: 'An eight year old who hears "if it touches the edge, bounce" every week learns English the way children pick up a language most easily: because they need it to make their game work.' }
        ] },
        { kind: 'p', mt: true, html: 'Families who read more comfortably in Spanish can turn to <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">programación para niños de 8 años</a>, which looks at this age through Scratch, Minecraft, Roblox and robotics. For younger and older brothers and sisters, our page on <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a> covers the whole range from 6 to 12.' }
      ]
    },
    {
      id: 'build',
      tint: 'tint',
      eyebrow: 'What changes at eight',
      h2: 'What can an eight year old build with code?',
      lede: 'Games with rules, quizzes that check answers and stories that branch. The new idea at this age is the decision: a program that does one thing or another depending on what happens.',
      body: [
        { kind: 'two',
          leftH3: 'Projects that work at eight',
          left: [
            '<strong>A catch game.</strong> Fruit falls, a basket moves left and right, and each catch adds a point. The child decides what happens when a piece is missed.',
            '<strong>A quiz.</strong> The program asks five questions about the child\'s favourite animal and says "Correct!" or "Not quite" for each. Then it gives a badge at the end, which is where today\'s lesson comes from.',
            '<strong>A branching story.</strong> The reader chooses a door, and the story goes one of two ways. Children love writing these for younger siblings.'
          ],
          rightH3: 'The thinking behind them',
          right: [
            'Each of these needs a <strong>condition</strong>: a question the computer can answer with yes or no. Is the fruit touching the basket? Is the answer equal to 12? Did the reader click the red door?',
            'Eight year olds are good at conditions because school is full of them already. If you finish your work, you may read. If it rains, we stay inside. Coding asks them to write those rules down so exactly that a machine can follow them, and that exactness is the real lesson.'
          ] },
        { kind: 'p', mt: true, html: 'A child of eight also starts to <strong>keep things</strong>: a score, a number of lives, a time left. These are variables, and they make games feel real. By the end of a year most eight year olds in our classes can explain, in short English sentences, what each variable in their game is for.' }
      ]
    },
    {
      id: 'third',
      eyebrow: 'Third grade in Peru',
      h2: 'What changes in 3° de primaria, and where is computing?',
      lede: 'Third grade brings more English and slightly less mathematics on the national plan, and still no computing lesson of its own. Here is what MINEDU sets and what it leaves to schools.',
      body: [
        { kind: 'two',
          leftH3: 'The national plan at eight',
          left: [
            'MINEDU decides a child\'s grade by age on 31 March of each school year. On its table of normative ages, 3° de primaria lines up with eight, so most eight year olds in Peru are in third grade.',
            'In the CNEB plan of studies, Inglés goes up by one period at third grade, from two weekly periods to three, while Matemática drops from 5 to 4. With 45-minute periods, that is 135 minutes of English a week from third grade instead of 90, by our sum.'
          ],
          rightH3: 'Computing, technology and making',
          right: [
            'Computing is not on that list of areas. The CNEB treats working in virtual environments as a competency that crosses every area, and describes one of its parts as building digital materials "siguiendo un proceso de mejoras sucesivas y retroalimentación": making something, getting feedback, improving it.',
            'Science and technology has its own competency, "Diseña y construye soluciones tecnológicas para resolver problemas". Coding fits both ideas well, which is why many schools add it in their own way. Ask your child\'s school how much they do; it varies a great deal.'
          ] },
        { kind: 'p', mt: true, html: 'MINEDU\'s norm for 2026 set a school year of thirty-six teaching weeks. Our classes sit beside that year, not inside it: they continue through the breaks and the summer, and nothing we do counts towards a school grade. We are not connected with MINEDU or with any school, and the only certificate we give is our own certificate of completion.' }
      ]
    },
    {
      id: 'device',
      tint: 'tint',
      eyebrow: 'The right device',
      h2: 'Which device does an eight year old need for online coding?',
      lede: 'A laptop or desktop computer. Peru goes online mostly by phone, which is fine for chat and video but hard for building a game. INEI\'s figures show how people actually connect.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Device used to go online by internet users aged 6 and over in Peru, second quarter of each year (percent of internet users; more than one device can be counted)', head: ['Device (INEI Cuadro 2.3)', '2023', '2024', '2025', '2026'], rows: [
          ['Mobile phone', '90.7', '90.2', '89.1', '90.2'],
          ['Laptop', '18.9', '18.9', '18.4', '18.9'],
          ['Desktop computer', '16.6', '16.0', '14.3', '14.0'],
          ['Tablet', '2.4', '2.2', '1.9', '2.9'],
          ['Other (smart TV and other Wi-Fi devices)', '9.9', '12.3', '15.3', '15.7']
        ] },
        { kind: 'source', html: 'Taken from Cuadro 2.3 of INEI\'s quarterly bulletin on household information technology for April to June 2026 (N° 03, published September 2026), which draws on the national household survey (ENAHO). INEI marks the 2026 column as provisional. We consulted it on 9 November 2026 and swapped INEI\'s decimal commas for points.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'Nine in ten Peruvians who used the internet between April and June 2026 did it on a phone, and fewer than one in five used a laptop. Desktop use has slipped from 16.6% to 14.0% since 2023, while smart televisions and other Wi-Fi devices have climbed to 15.7%.',
            'Children are different. In INEI\'s age table, only 48.5% of internet users aged 6 to 11 went online by phone in 2026. So for many families the shared laptop, the desktop in the corner or the television is still the child\'s way onto the internet, far more than for grown-ups.'
          ],
          rightH3: 'What it means for your child',
          right: [
            'For coding, the phone is the wrong tool: blocks are small, there is no room for the mentor\'s screen, and typing is slow. An eight year old needs a laptop or desktop, a mouse, and a headset with a microphone.',
            'Only 36.4% of Peruvian homes owned a computer of any kind in that 2026 survey, and that 84.7% of households in Lima Metropolitana had internet against 27.1% in rural areas. If your family shares one laptop, flexible timing lets you book the class when it is free.'
          ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'An original lesson',
      h2: 'Why does every player get bronze? A lesson on decisions',
      lede: 'This is our lesson for eight and nine year olds who have built a quiz and want it to hand out badges. It shows, in one surprising run, that the order of your questions matters.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'The child\'s quiz counts stars. The rules they choose are: 5 stars or more wins bronze, 10 or more wins silver, 15 or more wins gold, and fewer than 5 means "keep going".',
            'In Scratch they build it with "if, else" blocks, writing the rules in the order they said them: bronze first, then silver, then gold. They test with 7 stars, get bronze, and are delighted.'
          ],
          rightH3: 'The surprise',
          right: [
            'Then a friend scores 18 stars and also gets bronze. So does someone with 12. The mentor does not explain; we ask the child to read the first rule aloud with the number 18 in it. "Is 18 more than or equal to 5?" Yes. So the program stops right there and says bronze.',
            'The fix is to ask the hardest question first: gold, then silver, then bronze. The computer checks the rules from the top and stops at the <strong>first one that is true</strong>, so the strictest rule must come first.'
          ] },
        { kind: 'p', mt: true, html: 'Children of eight do this in blocks. We show the same two versions in Python so parents can see it, and so the child sees, perhaps for the first time, that Scratch and typed code are the same idea in two forms.' },
        { kind: 'code', label: 'Two badge rules, in Python: the order the child said them, and the order that works', lang: 'Python', code: PY },
        { kind: 'code', label: 'What it prints (wrong order first, right order second)', lang: 'Output', code: OUT, note: 'Exact output when we ran it with Python 3 (python3 -I). With the easy rule first, 12 and 18 stars both stop at bronze; with the strictest rule first, they get silver and gold.' },
        { kind: 'p', mt: true, html: 'The real lesson is not about badges. It is that a computer is perfectly obedient and completely literal: it did exactly what the child wrote, not what the child meant. Learning to spot that gap is the most useful habit a young coder can build, and it starts with testing more than one number. <strong>Seven stars looked right; eighteen stars told the truth.</strong>' },
        { kind: 'ol', mt: true, items: [
          '<strong>Our practice, talk it through.</strong> Read the wrong version aloud with 12 stars. Which line does the computer stop at, and why?',
          '<strong>Our practice, a new rule.</strong> Add a "platinum" badge for 20 stars or more. Where must it go in the list?',
          '<strong>Our practice, test the edges.</strong> Try exactly 5, 10 and 15 stars. Do they get the badge you expected? What would change if the rules said "more than" instead of "more than or equal to"?',
          '<strong>Our practice, in Scratch.</strong> Rebuild the right version with nested if, else blocks and test it with four different scores.'
        ] }
      ]
    },
    {
      id: 'practice',
      tint: 'tint',
      eyebrow: 'Between classes',
      h2: 'How should an eight year old practise coding at home?',
      lede: 'A little, often, and on their own project. Here is the routine we suggest to families; it is ours, not a school rule, and you should bend it around your week.',
      body: [
        { kind: 'ol', items: [
          '<strong>Two short sessions a week.</strong> Twenty minutes of tinkering on the game from class is worth more than an hour of new tutorials.',
          '<strong>One change at a time.</strong> Change a single block, run the game, and see what happened. Eight year olds who change five things at once cannot tell which one broke it.',
          '<strong>Keep a bug list.</strong> On paper, write down anything that went wrong and what fixed it. Bring it to the next class; mentors love these lists.',
          '<strong>Show someone.</strong> A grandparent, a cousin, a friend from school. Explaining a game out loud is where the English and the logic both settle.',
          '<strong>Stop while it is fun.</strong> Finish on something that works, so the child wants to come back.'
        ] },
        { kind: 'p', mt: true, html: 'If your child wants more, the next step is usually a second project in the same tool rather than a new tool. A child who has built three Scratch games with scores and badges is far better prepared for Python at nine or ten than one who has tried five different apps for a week each. When that time comes, our page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explains, in Spanish, how the English of code becomes an advantage.' }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'AI at eight',
      h2: 'Can an eight year old learn about AI?',
      lede: 'Yes, as a thing to understand rather than a thing to ask for answers. The big chatbots are not for this age, and we keep it that way.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The rules are clear', p: 'OpenAI\'s terms for ChatGPT open with "You must be at least 13 years old". An eight year old is five years short, so our classes never use it with children of this age.' },
          { h3: 'What we use instead', p: 'Teachable Machine, a Google tool that trains in the browser without signing in. A child shows it ten pictures of a thumbs-up and ten of a thumbs-down, and watches it learn, and fail, from what they gave it.' },
          { h3: 'The habit that lasts', p: 'When the model gets a picture wrong, the child asks why. Too few examples? All taken in the same light? That question is the same one they asked about the bronze badge: what did I actually tell it?' }
        ] },
        { kind: 'p', mt: true, html: 'Each tool and the age its maker allows is listed, with the maker\'s own words, in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'What time would an eight year old have class in Peru?',
      lede: 'Whenever suits your family. Peru keeps UTC minus five all year and India keeps UTC plus five and a half, so the mentor in India is always ten hours and thirty minutes ahead of you. These rows only convert one clock to the other.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Peru hours for an eight year old and the same moment in India (conversions, not a schedule)', head: ['In Peru', 'In India', 'Where an eight year old might be'], rows: [
          ['09:00', '19:30', 'Summer break, after breakfast'],
          ['11:30', '22:00', 'Late Saturday morning'],
          ['16:00', '02:30, next day', 'Home from school, snack eaten'],
          ['17:30', '04:00, next day', 'Homework finished'],
          ['19:00', '05:30, next day', 'After dinner, for a night owl']
        ] },
        { kind: 'source', html: 'Clock rules from the tz database kept by IANA: America/Lima sits at UTC minus 5 and last used daylight saving in 1994; Asia/Kolkata sits at UTC plus 5:30. We did the arithmetic for each row.' },
        { kind: 'p', mt: true, html: 'Bookings are made in Peru time, and the slot does not drift during the year because neither country moves its clocks. Every Peru page, by age, subject and city, is listed on our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> hub.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress at eight',
    h2: 'How will I know my eight year old is progressing?',
    lede: 'By what they can build and explain. These five milestones are ours; mentors use them to decide what comes next.',
    table: { numCols: [], caption: 'Five milestones for an eight year old (ours)', head: ['Milestone', 'Usually by', 'Builds', 'Says'], rows: [
      ['1. Moves with purpose', 'Month 1', 'A sprite that goes where the child intends', '"It walks to the tree, then stops."'],
      ['2. Keeps score', 'Month 2 to 3', 'A game with a score variable that starts at zero', '"Every catch adds one."'],
      ['3. Decides', 'Month 3 to 5', 'A game with if, else rules', '"If it touches the dog, you lose a life."'],
      ['4. Tests', 'Month 5 to 7', 'Tries edge cases like exactly 10', '"I tried 10 and 11 to check."'],
      ['5. Plans', 'Month 7 to 12', 'A whole game planned on paper first', '"First the menu, then the levels, then the badges."']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 4 is the big one. A child who tests more than one number without being asked has started to think like a programmer.',
      'Ask to see the bug list. A growing list is good news: it means your child is noticing.'
    ] },
    right: { h3: 'For your eight year old', ps: [
      'When something works, try to break it. Try a big number, a small number, and the exact edge.',
      'If the computer does something strange, it is following your rules exactly. Read them again slowly.'
    ] }
  },

  catalogue: {
    eyebrow: 'More options',
    h2: 'Nine more courses around the age of eight',
    lede: 'All live, all in English, each with a mentor who knows your child, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Blocks and worlds', sub: 'Ages 6 to 14', courses: [
        { code: 'CAE / BLOCK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Three months from first sprite to a finished game.' },
        { code: 'CAE / BLOCK / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Rules and loops inside a world children know well.' },
        { code: 'CAE / BLOCK / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Real scripts in Luau, for confident eight year olds.' }
      ] },
      { num: 'II', h3: 'Making and inventing', sub: 'Ages 8 to 12', courses: [
        { code: 'CAE / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps from blocks', blurb: 'Small apps an eight year old can plan, build and show off.' },
        { code: 'CAE / MAKE / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Ideas first, with AI and Scratch, under a mentor\'s eye.' },
        { code: 'CAE / MAKE / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'Twelve weeks of building, then a live event.' }
      ] },
      { num: 'III', h3: 'Numbers and next steps', sub: 'Ages 5 to 12', courses: [
        { code: 'CAE / NEXT / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense that makes scores and timers easy.' },
        { code: 'CAE / NEXT / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'School maths for grades 1 to 5, placed by level.' },
        { code: 'CAE / NEXT / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code from about nine, when blocks feel small.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for an eight year old in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'After school', l: 'Late afternoon in Peru, once the snack is eaten and the school bag is down.' },
      { time: 'Summer', l: 'January to March mornings, while school is out.' },
      { time: '1-on-1', l: 'Just your child and the mentor, at a time built around your week.' }
    ],
    cells: [
      { h3: 'Build every class', p: 'The child works on their own game, not a demo.' },
      { h3: 'Same mentor', p: 'Someone who remembers last week\'s bug.' },
      { h3: 'Clear English', p: 'Short instructions, said and shown on screen.' },
      { h3: 'Eight year olds together', p: 'Groups by age and level, never a wide mix.' },
      { h3: 'Notes home', p: 'What was built, what was hard, what is next.' },
      { h3: 'Two formats', p: 'Fifteen to twenty in a group, or one to one.' }
    ]
  },

  projectsH2: 'What our older students go on to build',
  projectsLede: 'Eight year olds make games with scores and badges. Students who keep going build the projects below in their teens, and many more are on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students in their own words, copied from Google.',

  fees: {
    h2: 'Fees for an eight year old\'s classes in Peru',
    lede: 'Fees are set in US dollars and taken monthly by card. Your card provider converts each payment into soles at that day\'s rate, which is why the total on your statement can shift slightly between months.',
    free: ['A free first class', 'Your child builds a small game with a rule in it', 'No card to book'],
    group: ['Fifteen to twenty eight year olds', 'One mentor all term', 'Two live classes a week', 'Monthly, cancel any time'],
    one: ['Your child and a mentor only', 'Projects shaped around your child', 'Hours you set']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Coding at age 8: questions from parents in Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught only in English. Mentors keep their English clear and unhurried, adapt to how fast your child works and how they speak, and put each instruction on the shared screen as they say it. Eight year olds who are still building their English follow well, because the game itself shows whether they understood.' },
      { q: 'Is eight a good age to start coding?', a: 'Yes, and a very common one. An eight year old reads well enough to use blocks quickly, can hold a rule in mind, and is old enough to enjoy testing it. Children who start at eight often move to typed Python at nine or ten.' },
      { q: 'Should an eight year old learn Scratch or Python?', a: 'Scratch first for nearly every eight year old. It teaches decisions, loops and variables without spelling mistakes getting in the way. A strong reader who has already built several Scratch games can start Python; the free class shows us which.' },
      { q: 'What does 3° de primaria cover in computing?', a: 'There is no computing area in the national plan for third grade. MINEDU\'s curriculum treats digital skills as a competency shared across subjects, and Ciencia y Tecnología includes designing technological solutions. Some schools teach coding in their own time; many do not.' },
      { q: 'Can my child use a tablet or phone?', a: 'Only to watch. Building games needs a laptop or desktop with a mouse and a headset. INEI\'s 2026 data show that most people in Peru go online by phone, but coding is one of the jobs a phone does badly.' },
      { q: 'At what hour would my eight year old have class?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is always ten hours thirty minutes ahead of Peru, so a 16:00 class for your child is 02:30 the next day for the mentor.' },
      { q: 'Will my eight year old use ChatGPT?', a: 'No. OpenAI sets a minimum age of 13 for ChatGPT. In our classes eight year olds learn how AI learns with tools like Teachable Machine, which runs in the browser without an account.' },
      { q: 'How much practice is needed between classes?', a: 'Not much: two short sessions a week on the child\'s own game is plenty. The aim is a habit of small changes and testing, not hours at the screen.' },
      { q: 'Do you teach robotics?', a: 'We teach coding, not hardware, so there is no kit to buy. Children program characters, games and simple AI models on screen, which builds the same logic that robot programming uses.' },
      { q: 'Is Modern Age Coders part of MINEDU or any Peruvian school?', a: 'No. We are a private online school with mentors in India, unconnected to MINEDU, any UGEL or any school in Peru. We give no Peruvian grades; finishing a course earns our own certificate of completion.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for parents of eight year olds',
    lede: 'Further reading for the next decision.',
    items: [
      { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds', p: 'Our general guide to this age, wherever you live.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes', p: 'Why blocks remain the right tool at eight.' },
      { href: '/coding-for-10-year-olds', label: 'Coding at ten', p: 'What two more years will change.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'The youngest age each AI maker allows.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class described from start to finish.' },
      { href: '/student-labs', label: 'Student labs', p: 'Games and tools built by our students.' }
    ]
  },

  start: {
    h2: 'Book a free coding class for your eight year old',
    lede: 'The free class starts with a short puzzle, then your child builds a tiny game with one rule in it and tests it with the mentor. You then hear which course suits, whether a group or one-to-one lessons would work better, and what hours are open.',
    readFirst: 'Prefer to read first? Our <a class="ag-inline-link" href="/how-we-teach">how we teach</a> page follows one lesson minute by minute, and every syllabus sits on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Lessons are live video classes from India, taught in English. Message us on WhatsApp, in English, for a fast reply.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Eight year olds', links: [
        { href: '/coding-for-8-year-olds', label: 'Coding at eight' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/programacion-para-ninos-de-8-anos', label: 'Leer en español' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Kids 6 to 12, Peru' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask the hardest question first'
  },

  personalityCss: `
.ag-root.ag-cae .ag-hero h1 { max-width: 16ch; letter-spacing: -0.012em; }
.ag-root.ag-cae .ag-capsule { border-left-width: 4px; }
.ag-root.ag-cae .ag-table caption { text-align: left; }
.ag-root.ag-cae .ag-steps li { line-height: 1.68; }
.ag-root.ag-cae .ag-code pre { line-height: 1.5; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU Edades normativas; CNEB plan of studies (primaria periods, hora pedagógica), competency 28 and the capacity Crea objetos virtuales, and the Ciencia y Tecnología competency on technological solutions; RM 501-2025-MINEDU; INEI Estadísticas de las TIC en los Hogares, II Trimestre 2026 (Cuadros 2.3 and 2.6, households with a computer and internet); vendor terms (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original lesson for eight and nine year olds: a quiz hands out bronze, silver and gold badges by stars; written in the order the child said the rules, 12 and 18 stars both stop at bronze because the first true test wins; reordered strictest first, the run prints silver and gold. Practice set on talking it through, adding a platinum rule, testing the edges 5, 10 and 15, and a Scratch rebuild. Lesson family: if/elif order.',
    requiredMentions: ['12 stars: bronze / silver', '18 stars: bronze / gold', 'Seven stars looked right; eighteen stars told the truth.', 'Device used to go online by internet users aged 6 and over in Peru', 'Other (smart TV and other Wi-Fi devices)', 'only 48.5% of internet users aged 6 to 11 went online by phone in 2026', '135 minutes of English a week from third grade instead of 90', 'Ask the hardest question first', 'Five milestones for an eight year old (ours)'],
    sources: [
      { claim: 'Normative age measured on 31 March; 3° de primaria at eight.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Primaria periods: Inglés 2 2 3 3 3 3, Matemática 5 5 4 4 4 4; hora pedagógica 45 minutes; competency 28 transversal; Crea objetos virtuales; Diseña y construye soluciones tecnológicas.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 school year of 36 teaching weeks.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Devices used to go online (Cuadro 2.3), children 6 to 11 online by phone 48.5% (Cuadro 2.6), 36.4% of households with a computer, households with internet 84.7% Lima Metropolitana and 27.1% rural (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ChatGPT minimum age 13.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That most Peruvian schools teach Scratch in 3°: no source; the page says it varies by school.',
      'Device figures for children only: INEI publishes the device split for all internet users aged 6 and over; the page labels it so and uses the separate age-group phone figure for children.',
      'Robotics kits or hardware: we teach coding only; the page says so.',
      'Spanish-language teaching or any link with MINEDU or a school: none, and the page says so.'
    ]
  }
};
