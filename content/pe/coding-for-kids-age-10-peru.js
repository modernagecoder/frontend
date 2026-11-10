// SHIP: market | Age 10 in Peru, 5° de primaria: typed code, two years before secundaria, online life about to change | a while loop whose end nobody can promise: the 3n+1 rule, counting steps (27 takes 111)
'use strict';
// Coding for kids age 10 in Peru (ag- English door, Peru cluster row PE074, hubGroup ages; alloc cag, #366618).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: English-reading parents in Peru of a ten year old, usually in 5° de primaria (edad normativa 10 at 31 March).
// Spine (different from the Spanish twin programacion-para-ninos-de-10-anos, which covers the full 5° week in minutes, a
// four-week Scratch-to-Python plan, AI at ten and a palindrome lesson): ten as the last stretch of primaria before the
// move to secundaria; what a ten year old can build in typed code in a term; how online life changes between the 6 to 11
// and 12 to 18 age bands (INEI Cuadros 2.1, 2.6 and 3.3 side by side, the page's primary-source table); what is left of
// primaria (Reglamento Art. 64, ENLA 2024 sample of 6°, CNEB competencies); a 3n+1 while-loop lesson; Peru time.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and facts-market/src/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - Ley 28044 (ley28044-pdf/text.txt): "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y
//    dura seis años."
//  - D.S. 011-2012-ED (ds011-2012-pdf/text.txt, OCR): "Atiende a los adolescentes que hayan aprobado el sexto grado de
//    Educación Primaria."
//  - MINEDU Edades normativas (edades-normativas/text.txt): "Se considera la edad normativa al 31 de marzo de cada año.";
//    table order puts 5to grado at 10 años and 6to grado at 11.
//  - MINEDU ENLA 2024 (n-enla2024/text.txt): "una prueba muestral a 105 534 escolares de 6.º grado de primaria".
//  - MINEDU ENLA 2025 (n-enla2026-200mil/text.txt): "serán evaluados estudiantes de 4.° grado de primaria en Lectura y
//    Matemática; 2.° grado de secundaria en Lectura, Matemática y Ciencia y Tecnología".
//  - CNEB (cneb/text.txt): "Resuelve problemas de regularidad, equivalencia y cambio"; "siguiendo un proceso de mejoras
//    sucesivas y retroalimentación"; "Competencias transversales a las áreas: Se desenvuelve en".
//  - INEI TIC II Trimestre 2026 (facts-market/src/inei_tic_iit2026.txt), II trimestre 2023 2024 2025 2026: Cuadro 2.1
//    (uses internet) "60,1 61,7 61,5 68,2 6,7" (6 a 11) and "89,7 91,4 90,7 92,5 1,8" (12 a 18); Cuadro 2.6 (online by
//    phone, % of internet users) "6 a 11 años 54,7 50,4 43,3 48,5 5,2" and "12 a 18 años 82,6 78,7 75,4 78,1 2,7"; Cuadro 3.3
//    (uses a mobile phone) "67,0 67,7 65,3 67,8 2,5" (6 a 11) and "93,1 93,1 92,6 92,2 -0,4" (12 a 18). Row order checked
//    against the text: "el de 12 a 18 años con un 92,5%"; "los adolescentes de 12 a 18 años con un 78,1%".
//  - Vendor terms (content/ai-tool-age-audit.json): ChatGPT "You must be at least 13 years old"; Claude "You must be at least
//    18 years old"; Teachable Machine trains without signing in.
//  - Time: tzdata America/Lima -5:00 (last Rule Peru 1994), Asia/Kolkata 5:30.
// Our own calculations: gaps between the age bands in 2026 (92.5 - 68.2 = 24.3 points; 78.1 - 48.5 = 29.6; 92.2 - 67.8 =
// 24.4); clock conversions (Peru hour + 10:30).
// Our own example (hail10.py and hail10b.py, run with python3 -I, exact output): "6 3 10 5 16 8 4 2 1", "Steps: 8";
// "6 takes 8 steps and climbs to 16", "7 takes 16 steps and climbs to 52", "26 takes 10 steps and climbs to 40",
// "27 takes 111 steps and climbs to 9232", "28 takes 18 steps and climbs to 52".
// Lesson family: a while loop with a condition rather than a count; % 2 to test even; counting steps and tracking a
// maximum; a rule (Collatz, 3n+1) that every tested number obeys but nobody has proved.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'n = 6',
  'steps = 0',
  'while n != 1:',
  '    print(n, end=" ")',
  '    if n % 2 == 0:',
  '        n = n // 2',
  '    else:',
  '        n = 3 * n + 1',
  '    steps = steps + 1',
  'print(n)',
  'print("Steps:", steps)'
].join('\n');

const OUT1 = ['6 3 10 5 16 8 4 2 1', 'Steps: 8'].join('\n');

const V2 = [
  'def steps_to_one(n):',
  '    steps = 0',
  '    highest = n',
  '    while n != 1:',
  '        if n % 2 == 0:',
  '            n = n // 2',
  '        else:',
  '            n = 3 * n + 1',
  '        steps = steps + 1',
  '        if n > highest:',
  '            highest = n',
  '    return steps, highest',
  '',
  'for start in [6, 7, 26, 27, 28]:',
  '    steps, highest = steps_to_one(start)',
  '    print(start, "takes", steps, "steps and climbs to", highest)'
].join('\n');

const OUT2 = [
  '6 takes 8 steps and climbs to 16',
  '7 takes 16 steps and climbs to 52',
  '26 takes 10 steps and climbs to 40',
  '27 takes 111 steps and climbs to 9232',
  '28 takes 18 steps and climbs to 52'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for kids aged 10' },
  slug: 'coding-for-kids-age-10-peru',
  code: 'cag',
  accent: '#366618',
  accentRationale: 'Coding for kids age 10 in Peru: a fern green #366618, the colour of the cloud-forest ferns on the eastern Andean slopes, a step deeper than the younger age pages for a child moving to typed code; above 4.5:1 on the paper #FBF8F2 and every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for kids age 10 in Peru',
  title: 'Coding for Kids Age 10 in Peru: Live Python in English',
  description: 'Coding for a ten year old in Peru: live online classes in English, typed Python, games and maths puzzles for 5° de primaria, in a group or one to one, at any hour.',
  ogDescription: 'Ten is the age of typed code. What a ten year old in Peru can build in a term, how online life changes before secundaria (INEI 2026), and a Python loop that nobody can promise will ever stop.',
  twitterDescription: 'Live Python classes in English for ten year olds in Peru, in a group or one to one, at an hour your family picks.',
  pageName: 'Coding for Kids Age 10 in Peru',
  webPageDescription: 'A guide for parents in Peru whose child is ten and in 5° de primaria, built from the Ley General de Educación and its Reglamento, MINEDU normative ages and ENLA press releases, the CNEB, INEI household technology data by age group for the second quarter of 2026, vendor age terms and the tz database, with an original Python lesson on while loops.',
  courseDescription: 'Live online coding classes for ten year olds in Peru, taught in English by mentors based in India: typed Python, games, web pages and maths through code, in a group of fifteen to twenty or one to one, at an hour the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding at age 10',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#term', label: 'One term' },
    { href: '#online', label: 'Online at 10' },
    { href: '#primaria', label: 'End of primaria' },
    { href: '#lesson', label: 'Loop lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Age 10 &middot; 5° de primaria &middot; Live, in English',
  h1: 'Coding for kids age 10 in Peru',
  lede: 'At ten a child can type quickly enough, read carefully enough and argue well enough to write real code, and in Peru they still have two years of primaria before secundaria changes everything. This page is for parents who want to use those two years well: typed Python, taught live and in English, by a mentor who asks good questions instead of handing out answers.',
  secondaryCta: { href: '#lesson', label: 'Run the loop lesson' },
  wa: 'Hello Modern Age Coders, our child is ten and we live in Peru. We would like to book a free Python class in English. What times are possible?',
  heroNote: 'Live teaching since 2020 &middot; 4.9 from about 547 reviews on Google &middot; ten year olds type real Python and explain it in English',
  spec: [
    ['Age', 'Ten, usually 5° de primaria'],
    ['Main language', 'Python, typed'],
    ['Also', 'Web pages, games, maths in code'],
    ['Format', 'Live, never recorded'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Ten is a very good age to move from blocks to typed code, and Modern Age Coders teaches ten year olds in Peru live, online and in English. Most children of ten start Python with us: loops, decisions, small games and maths puzzles, written line by line and explained aloud. A mentor based in India works on a shared screen with your child, either alongside fifteen to twenty classmates of the same age or one to one, at any hour that suits your family in Peru. The first class is free.',

  picks: {
    eyebrow: 'Where ten year olds begin',
    h2: 'Three courses that fit a ten year old',
    lede: 'All three use typed code. Choose by what lights your child up: games, numbers or making things others can see.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAG / 01', title: 'Python and AI for Kids', note: 'Built for nine to twelve year olds, and where most ten year olds begin. Turtle drawings, text games, small quizzes and child-safe AI projects, all in real Python from week one.' },
      { course: 'maths-through-coding', code: 'CAG / 02', title: 'Maths Through Coding', note: 'Ages 10 to 15. For the child who asks why numbers behave as they do. Patterns, primes and puzzles explored in Python, like the loop lesson further down this page.' },
      { course: 'kids-ai-web-development-course', code: 'CAG / 03', title: 'Web Development for Kids', note: 'Ages 9 to 12. Real web pages with HTML, CSS and a little JavaScript, built and published by the child, so grandparents in another city can see them.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this page is for',
      h2: 'Who are coding classes for ten year olds in Peru for?',
      lede: 'Families in Peru with a child of ten who reads English reasonably well, or who is keen to, and who wants more from a screen than games made by someone else.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Scratch veterans', p: 'They have built games with blocks and are starting to feel the limits. Typed code is the natural next step, and ten is when most children manage it comfortably.' },
          { h3: 'Fresh starters', p: 'Ten year olds who have never coded can begin straight in Python. They lose nothing by skipping blocks at this age; they simply start with smaller programs.' },
          { h3: 'Puzzle lovers', p: 'Some ten year olds care less about games and more about numbers. For them, code is a way to test a guess about a pattern hundreds of times in a second.' }
        ] },
        { kind: 'p', mt: true, html: 'Our Spanish-language page <a class="ag-inline-link" href="/programacion-para-ninos-de-10-anos">programación para niños de 10 años</a> covers the same age with a week-by-week plan from Scratch to Python and a closer look at AI. For the language itself, <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a> lists the English words Python is made of and when children meet them.' }
      ]
    },
    {
      id: 'term',
      tint: 'tint',
      eyebrow: 'One term of Python',
      h2: 'What can a ten year old build in Python in one term?',
      lede: 'More than most parents expect, as long as each project is small and finished. Here is a typical first term with us, described as the child would describe it.',
      body: [
        { kind: 'ol', items: [
          '<strong>"I made the computer say my name in a sentence."</strong> Printing, text and variables. The child learns that a name in quotes is text and a name without quotes is a box holding something.',
          '<strong>"I drew a star with a turtle."</strong> Loops, angles and the surprise that 360 divided by 5 gives the turn for a pentagon, not a star; the star needs 144 degrees.',
          '<strong>"My quiz tells you if you are right."</strong> Input and decisions. The quiz breaks when someone types "Ten" instead of 10, and the child has to decide what to do about it.',
          '<strong>"The computer guesses my animal."</strong> A game of yes and no questions, built from nested decisions, which turns out to be how many real classifiers start.',
          '<strong>"I found a number that takes 111 steps."</strong> A while loop, a counter and some real mathematics, from the lesson on this page.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why typed code at ten',
          left: [
            'Blocks hide the words; typing shows them. A ten year old who types <code>while</code> and <code>if</code> every week learns precise English and precise thinking together, because a single wrong letter stops the program.',
            'Error messages are in English too, and they are short. Reading "NameError" and working out that a variable was misspelt is a small, satisfying act of detective work that ten year olds enjoy.'
          ],
          rightH3: 'What still needs a teacher',
          right: [
            'Ten year olds rush. They type a line, run it, see an error and retype the line exactly the same way. A mentor watching live slows them down: read the message, point to the line, say what you expected.',
            'They also over-trust working code. The program printed something, so it must be right. Our lessons always include one run where the output looks fine and is wrong, so that checking becomes a habit.'
          ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Online at ten',
      h2: 'How does a ten year old\'s online life in Peru change before secundaria?',
      lede: 'Sharply. INEI\'s household survey groups children of 6 to 11 and young people of 12 to 18, and the two groups live very different online lives. A ten year old is two birthdays from crossing that line.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Two INEI age bands compared: internet and phone use in Peru, second quarter of 2025 and 2026 (percent)', head: ['Measure (INEI table)', 'Ages 6 to 11, 2025', 'Ages 6 to 11, 2026', 'Ages 12 to 18, 2025', 'Ages 12 to 18, 2026'], rows: [
          ['Online at all, any device (Cuadro 2.1, % of everyone that age)', '61.5', '68.2', '90.7', '92.5'],
          ['Reached the internet by phone (Cuadro 2.6, % of that age\'s internet users)', '43.3', '48.5', '75.4', '78.1'],
          ['Uses any mobile phone (Cuadro 3.3, % of everyone that age)', '65.3', '67.8', '92.6', '92.2']
        ] },
        { kind: 'source', html: 'Three tables (2.1, 2.6 and 3.3) from INEI\'s technical report on information technology in Peruvian homes, April to June 2026, issue N° 03, which rests on the ENAHO household survey. 2026 values are provisional. Checked 9 November 2026; we write INEI\'s decimal commas as points.' },
        { kind: 'two', mt: true,
          leftH3: 'What changes between the bands',
          left: [
            'Between April and June 2026, INEI counted 68.2% of the younger band online and 92.5% of the older band, a gap of 24.3 points by our subtraction. Phone use jumps by almost the same amount, from 67.8% to 92.2%.',
            'The way young people get online changes too. Among internet users aged 6 to 11, 48.5% went online by phone; among those aged 12 to 18, 78.1% did. Somewhere around the start of secundaria, the phone becomes the main door.'
          ],
          rightH3: 'Why that matters at ten',
          right: [
            'A ten year old who learns to make things on a computer now arrives at twelve with a habit of creating, not only scrolling. That is the quiet case for starting typed code before secundaria, when the phone takes over.',
            'It also means setting rules early. We suggest that classes and practice happen on a laptop in a shared room, with the phone elsewhere; children who learn to code that way usually keep the habit later.'
          ] }
      ]
    },
    {
      id: 'primaria',
      tint: 'tint',
      eyebrow: 'The end of primaria',
      h2: 'What is left of primaria for a ten year old in Peru?',
      lede: 'Fifth and sixth grade. Primaria lasts six years under Ley 28044, and on MINEDU\'s table of normative ages a child of ten belongs in 5° and a child of eleven in 6°, counted on 31 March.',
      body: [
        { kind: 'two',
          leftH3: 'Then secundaria',
          left: [
            'Peru\'s Reglamento of the education law says secundaria takes in adolescents "que hayan aprobado el sexto grado de Educación Primaria". So the move happens after 6°, usually at twelve.',
            'Sixth grade can also bring a national test. In 2024 MINEDU\'s ENLA tested a sample of 105,534 pupils in 6° de primaria, alongside a census of fourth grade. In 2025 the ENLA tested 4° de primaria and 2° and 5° de secundaria. Whether a ten year old will sit it depends on the year and the school\'s selection.'
          ],
          rightH3: 'Where coding touches the curriculum',
          right: [
            'The CNEB lists four mathematics competencies, one of them "Resuelve problemas de regularidad, equivalencia y cambio": finding and describing patterns. Today\'s lesson is exactly that, with a computer doing the arithmetic.',
            'Its competency on virtual environments, shared by all areas rather than taught alone, includes building digital things "siguiendo un proceso de mejoras sucesivas y retroalimentación". That is a fair description of writing a program, running it and fixing it.'
          ] },
        { kind: 'p', mt: true, html: 'None of this makes our classes part of school. Modern Age Coders has no tie to MINEDU, any UGEL or any school, we do not prepare children for the ENLA, and we award no Peruvian grades. A child who completes a course receives our own certificate of completion.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'An original Python lesson',
      h2: 'What does a Python lesson look like at ten? A loop that might never stop',
      lede: 'Our lesson for ten and eleven year olds in their first months of Python. It uses one simple rule, and it ends with a question that the world\'s mathematicians still cannot answer.',
      body: [
        { kind: 'two',
          leftH3: 'The rule',
          left: [
            'Pick any whole number. If it is even, halve it. If it is odd, multiply it by 3 and add 1. Do the same to the answer, and keep going until you reach 1.',
            'The child tries it on paper with 6 first: 6, 3, 10, 5, 16, 8, 4, 2, 1. Eight steps. It feels like a game, and it is, until they try 27 on paper and give up somewhere past 300.'
          ],
          rightH3: 'Why a while loop',
          right: [
            'A <code>for</code> loop needs to know how many times to repeat. Here nobody knows; we only know when to stop. That is what <code>while</code> is for: keep going while a condition is true.',
            'To test whether a number is even, Python uses <code>%</code>, the remainder after division. <code>n % 2 == 0</code> means "dividing by 2 leaves nothing over". Ten year olds learn this one symbol and use it for years.'
          ] },
        { kind: 'code', label: 'Version 1: follow the rule from 6 and count the steps', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Copied unchanged from our own run under Python 3 (python3 -I): the paper path again, and 8 steps.' },
        { kind: 'p', mt: true, html: 'Then we wrap the rule in a function, so it can be tried on many starting numbers, and we add one more thing to watch: the highest number the path reaches before it falls back to 1.' },
        { kind: 'code', label: 'Version 2: a function, tried on five starting numbers', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output of our run. Neighbouring numbers behave very differently: 26 takes 10 steps, 27 takes 111 steps and climbs as high as 9232, and 28 takes 18.' },
        { kind: 'p', mt: true, html: 'Children gasp at 27. Then comes the real question: does every starting number reach 1 in the end? <strong>Every number anyone has ever tested does, and nobody has been able to prove that all of them must.</strong> The idea is known as the Collatz problem. A ten year old has just written a program about an unsolved problem in mathematics, and understood why the program uses <code>while</code> and not <code>for</code>: we cannot promise how long it will run.' },
        { kind: 'p', html: 'There is a second lesson hidden here. Five starting numbers all reaching 1 does not prove that every number will. Testing builds confidence; it is not proof. Children who learn that at ten are much harder to fool later, by an advert, a chart or an AI that sounds sure of itself.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Our practice, predict.</strong> Before running it, guess how many steps 16 will take. Why is it so quick?',
          '<strong>Our practice, search.</strong> Use a <code>for</code> loop to try every start from 1 to 50 and print the one with the most steps.',
          '<strong>Our practice, careful.</strong> What happens if you start at 0? Why? Add a line that refuses numbers below 1.',
          '<strong>Our practice, explain.</strong> Tell your mentor, in English, why this program needs <code>while</code>.'
        ] }
      ]
    },
    {
      id: 'ai',
      tint: 'tint',
      eyebrow: 'AI at ten',
      h2: 'Should a ten year old use AI to help with coding?',
      lede: 'Not to write the code. At ten the point is to build the thinking that AI tools skip, and the main chatbots do not accept children this young anyway.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What the makers allow', p: 'OpenAI\'s terms for ChatGPT begin "You must be at least 13 years old". Anthropic sets 18 for Claude. A ten year old is too young for both, so we never use either with children of this age.' },
          { h3: 'What we teach instead', p: 'How a model learns: with Teachable Machine, which trains in the browser without an account, a child trains a model on their own pictures and finds its blind spots.' },
          { h3: 'Why it matters', p: 'A child who has written the 3n+1 loop knows that a program can be confident and still incomplete. That instinct is the right one to bring to AI later.' }
        ] },
        { kind: 'p', mt: true, html: 'The ages each AI maker sets, with their own words quoted, are collected in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'When could a ten year old in Peru have class?',
      lede: 'Whenever suits the family. Peru stays on UTC minus five every day of the year and India on UTC plus five and a half, so India is ten hours thirty minutes ahead of you without exception. The rows convert sample hours and nothing more.',
      body: [
        { kind: 'table', numCols: [], caption: 'Some Peru hours a ten year old might choose, with the matching India time (conversions only, not class times)', head: ['Hour in Peru', 'Hour in India', 'When it tends to suit'], rows: [
          ['08:30', '19:00', 'Holiday mornings in January and February'],
          ['12:00', '22:30', 'Midday at the weekend'],
          ['15:00', '01:30, next day', 'Once a morning school shift is over'],
          ['17:00', '03:30, next day', 'After homework on a weekday'],
          ['19:30', '06:00, next day', 'Evening, after dinner']
        ] },
        { kind: 'source', html: 'Based on the IANA tz database: America/Lima at UTC minus 5 with no clock change since 1994, Asia/Kolkata at UTC plus 5:30. Each conversion was worked out by us.' },
        { kind: 'p', mt: true, html: 'Because neither country changes its clocks, a slot chosen in March is still the same slot in August. Every Peru page, for every age and many cities, sits together on our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru coding and AI hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress at ten',
    h2: 'How does a ten year old progress in Python?',
    lede: 'Through five stages that we use to place children and plan their next projects. They are ours, not a school scale.',
    table: { numCols: [], caption: 'Five Python stages for ten year olds (ours)', head: ['Stage', 'Typical timing', 'Writes', 'Can explain'], rows: [
      ['1. Prints and stores', 'Weeks 1 to 3', 'Short programs with variables and text', 'What a variable holds'],
      ['2. Repeats', 'Weeks 4 to 8', 'for loops that draw or count', 'Why the loop ran that many times'],
      ['3. Decides', 'Weeks 9 to 12', 'Quizzes and games with if, elif, else', 'Which branch ran and why'],
      ['4. Loops until', 'Months 4 to 6', 'while loops with a stopping condition', 'What would make the loop run forever'],
      ['5. Organises', 'Months 6 to 9', 'Functions called with different inputs', 'What goes in, what comes out']
    ] },
    left: { h3: 'For parents', ps: [
      'The right-hand column matters more than the left. A ten year old who can explain a loop has learnt it; one who can only type it has copied it.',
      'Stage 4 is where today\'s lesson sits. Ask your child why 27 is special, and listen.'
    ] },
    right: { h3: 'For your ten year old', ps: [
      'Before you run a program, say what you think it will print. Then run it and compare.',
      'An error message is a clue written in English. Read it all the way to the end before you change anything.'
    ] }
  },

  catalogue: {
    eyebrow: 'More choices',
    h2: 'Nine more courses that suit a ten year old',
    lede: 'Live, in English, one mentor, a group of children the same age or one to one.',
    bands: [
      { num: 'I', h3: 'Games and code', sub: 'Ages 8 to 17', courses: [
        { code: 'CAG / GAME / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second typed language for confident ten year olds.' },
        { code: 'CAG / GAME / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game making', blurb: '2D and 3D games in GDScript, from ten.' },
        { code: 'CAG / GAME / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Luau scripts in a world children already play in.' }
      ] },
      { num: 'II', h3: 'Making for others', sub: 'Ages 8 and up', courses: [
        { code: 'CAG / MAKE / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How models learn and fail, with no adult accounts.' },
        { code: 'CAG / MAKE / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Websites that look right on a phone, from ten.' },
        { code: 'CAG / MAKE / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Plan, build and test a small app with blocks.' }
      ] },
      { num: 'III', h3: 'Mathematics', sub: 'Ages 6 to 14', courses: [
        { code: 'CAG / MATH / 01', slug: 'middle-school-math-competitions-course', title: 'Maths competitions', blurb: 'Contest problems for strong ten to fourteen year olds.' },
        { code: 'CAG / MATH / 02', slug: 'amc-8-math-competition-prep-course', title: 'AMC 8 preparation', blurb: 'An American contest open to younger students, from ten.' },
        { code: 'CAG / MATH / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Solid grade 1 to 5 maths, placed by level.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for a ten year old in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Term time', l: 'Afternoon or early evening in Peru, around a morning or afternoon school shift.' },
      { time: 'Holidays', l: 'Mornings from January to March, and in the mid-year break.' },
      { time: '1-on-1', l: 'Your ten year old with a mentor alone, at an hour you set.' }
    ],
    cells: [
      { h3: 'Typed from day one', p: 'Real Python, never copied from a video.' },
      { h3: 'Say it before running it', p: 'Every program starts with a spoken prediction.' },
      { h3: 'One mentor', p: 'The same person each week, who knows your child\'s habits.' },
      { h3: 'Same-age groups', p: 'Ten year olds with ten year olds, at a similar level.' },
      { h3: 'Short notes home', p: 'Built, struggled with, next step.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'Projects from students who kept going',
  projectsLede: 'A ten year old\'s first programs are small. Here is where some of our students got to a few years later; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Parents and students, word for word from Google reviews.',

  fees: {
    h2: 'Fees for a ten year old\'s classes, paid from Peru',
    lede: 'The monthly fee is fixed in US dollars and charged to a card. Whoever issued your card turns it into soles on the day, at its own rate, so the soles amount can differ a little from one statement to the next.',
    free: ['A free first class', 'Your child writes and runs a first Python program', 'No card details'],
    group: ['Fifteen to twenty ten year olds', 'The same mentor throughout', 'Two live classes a week', 'Monthly, stop whenever you wish'],
    one: ['Only your child and the mentor', 'Projects and pace built around them', 'Times you choose']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Coding at age 10: what parents in Peru ask us',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons happen live and online, and the only language used is English. Mentors speak plainly and at a steady pace, adjust to the way your child speaks and to how quickly they work, and write key words on the shared screen. Python itself is written in English words, so the language of the class and the language of the code are the same.' },
      { q: 'Is ten too late to start coding?', a: 'Not at all. Ten is one of the easiest ages to start, because a child can type, read error messages and hold a longer program in mind. Many children who start at ten overtake others who began with blocks years earlier.' },
      { q: 'Should a ten year old skip Scratch and go straight to Python?', a: 'Usually yes, if they read comfortably. A ten year old who has never coded can start Python with very small programs. If typing is still slow, a few weeks of blocks first is fine; the free class shows which suits.' },
      { q: 'What does 5° de primaria teach about computing in Peru?', a: 'There is no computing area in MINEDU\'s plan for primaria; digital skills appear as a competency running through all subjects. A number of private schools add coding in hours they control, so tell us what your child does at school and we will build on it.' },
      { q: 'How much English does my ten year old need?', a: 'Enough to follow short spoken instructions with help from the screen. The mentor slows down, repeats and shows. Children who start with modest English often improve quickly, because the code only runs once the instruction is understood.' },
      { q: 'What hours are possible from Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs ten hours thirty minutes ahead of Peru all year, so 17:00 for your child is 03:30 the next day for the mentor.' },
      { q: 'Will my child use ChatGPT or Claude?', a: 'No. ChatGPT requires users to be at least 13 and Claude at least 18. Ten year olds in our classes learn how AI works with tools made for their age, after they have learnt to solve problems themselves.' },
      { q: 'Does coding help with school maths?', a: 'It often helps indirectly: children who code check their working, look for patterns and get used to precise steps. We make no promise about school marks, and our classes do not prepare for the ENLA.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop with a keyboard, a reliable connection and a headset with a microphone. A phone or tablet is not enough for typing Python.' },
      { q: 'Do you work with MINEDU or with Peruvian schools?', a: 'No. We are a private online school with mentors in India and no tie to MINEDU, any UGEL or any Peruvian school. We award no Peruvian grades; a completed course earns our own certificate.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for parents of ten year olds',
    lede: 'Further reading for the years ahead.',
    items: [
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'Our general guide to the age, wherever you live.' },
      { href: '/python-for-10-year-olds', label: 'Python at ten', p: 'A closer look at Python programs children write at this age.' },
      { href: '/coding-for-12-year-olds', label: 'Coding at twelve', p: 'What the start of secundaria brings.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Each tool and its minimum age, in the maker\'s words.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking first', p: 'Why our mentors ask before they tell.' },
      { href: '/student-labs', label: 'Student labs', p: 'Work by our students, from games to tools.' }
    ]
  },

  start: {
    h2: 'Book a free Python class for your ten year old',
    lede: 'In the free class your child types and runs a first Python program, then changes it to do something new while the mentor watches how they reason. You leave with a suggested course, a choice between a group and one-to-one lessons, and hours that fit.',
    readFirst: 'Curious first? See a full lesson on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every syllabus on our <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Live classes from India, taught in English. A WhatsApp message in English gets the fastest answer.',
    formNote: 'Free, no card, nothing to commit to.'
  },

  footer: {
    cols: [
      { h4: 'Ten year olds', links: [
        { href: '/coding-for-10-year-olds', label: 'Coding at ten' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/programacion-para-ninos-de-10-anos', label: 'Leer en español' },
        { href: '/python-for-kids-peru', label: 'Python for kids, Peru' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Keep going while it is true'
  },

  personalityCss: `
.ag-root.ag-cag .ag-hero h1 { max-width: 16ch; letter-spacing: -0.014em; }
.ag-root.ag-cag .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cag .ag-table caption { text-align: left; }
.ag-root.ag-cag .ag-steps li { line-height: 1.66; }
.ag-root.ag-cag .ag-code pre { line-height: 1.52; }
`,

  dossier: {
    curriculumAuthority: 'Ley 28044 and its Reglamento D.S. 011-2012-ED (Art. 64); MINEDU Edades normativas; MINEDU press releases on ENLA 2024 and ENLA 2025; CNEB mathematics competencies and competency 28; INEI Estadísticas de las TIC en los Hogares, II Trimestre 2026 (Cuadros 2.1, 2.6, 3.3 by age group); vendor terms (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original Python lesson for ten and eleven year olds: the 3n+1 rule followed from 6 prints 6 3 10 5 16 8 4 2 1 and Steps: 8; a function tried on 6, 7, 26, 27 and 28 shows 27 taking 111 steps and climbing to 9232; the class meets the unproved Collatz problem and learns why a while loop fits when the number of repeats is unknown, and that testing is not proof. Lesson family: while loops with a stopping condition.',
    requiredMentions: ['6 3 10 5 16 8 4 2 1', '27 takes 111 steps and climbs to 9232', 'Every number anyone has ever tested does, and nobody has been able to prove that all of them must.', 'Two INEI age bands compared: internet and phone use in Peru', 'a gap of 24.3 points by our subtraction', 'a sample of 105,534 pupils in 6° de primaria', 'Five Python stages for ten year olds (ours)', 'Keep going while it is true', '"I found a number that takes 111 steps."'],
    sources: [
      { claim: 'Primaria lasts six years (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Secundaria takes adolescents who passed 6° de primaria (D.S. 011-2012-ED).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Normative age on 31 March; 5° at ten, 6° at eleven.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ENLA 2024 sample of 105,534 pupils in 6° de primaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'ENLA 2025 grades tested.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'CNEB mathematics competency on regularity and change; competency 28 with successive improvement.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Internet use, internet by phone and phone use for ages 6 to 11 and 12 to 18, II trimestre 2025 and 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ChatGPT minimum age 13; Claude 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That every ten year old will sit the ENLA in 6°: the 2024 6° test was a sample; the page says it depends on the year and selection.',
      'That the Collatz rule always reaches 1: unproved; the page says so.',
      'That coding raises school marks: no source; the page promises nothing.',
      'Spanish-language teaching or any link with MINEDU or a school: none, and the page says so.'
    ]
  }
};
