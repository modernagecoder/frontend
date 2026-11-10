// SHIP: market | An English-taught option beside Peru's Spanish-language kids' coding academies | edit distance: misspelt keywords measured letter by letter; "fro" lands on from, not for
'use strict';
// Crack The Code alternative in English (ag- English versus page, Peru cluster row PE078, P3 versus, hubGroup guides; alloc ccae, #863764).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fairness: no competitor prices, ratings or reviews; no ranking; no claim that any school is worse. Crack The Code's own site
// did not resolve on 8 and 9 November 2026, so this page names the school only as the search that brought the reader here and
// otherwise describes the category (Spanish-language live coding academies for children in Peru). Nothing from their PDF is used.
// Spine (different from the Spanish sibling alternativa-a-crack-the-code-en-ingles, which uses a weighted decision matrix, EF city
// and skill table and CNEB English hours): what a coding class in English changes for a child; what a child meets in English on
// day one (Python's 35 keywords, error messages); MINEDU normative ages as the primary-source table with our own first-course
// column; a spelling lesson on edit distance; a checklist that applies to any school, ours included; the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/crack-the-code-alternative-in-english/):
//  - Our check, dns-check-2026-11-09.txt: crackthecode.la, curl exit 6 (could not resolve host), 9 November 2026, one try;
//    facts-market/MARKET.md records the same on 8 November 2026.
//  - MINEDU, Edades normativas (edades-normativas.txt, text.txt): "Se considera la edad normativa al 31 de marzo de cada año.";
//    "6 años 7 años 8 años 9 años 10 años 11 años 12 años 13 años 14 años 15 años 16 años" read against 1° to 6° primaria and
//    1° to 5° secundaria (FACTS 14).
//  - CNEB (cneb.txt): "Inglés 3 3 3 3 3" (secundaria, regular day), "Inglés 5 5 5 5 5" (JEC), "horas pedagógicas (45 minutos)".
//  - EF EPI 2025 Peru page (ef_peru.raw): "countryPosition":52,"totalCountries":123; efEpiScore 519; readingScore 540,
//    listeningScore 499, writingScore 514, speakingScore 480; cityScore lima 555 "high".
//  - INEI, TIC en los Hogares II Trimestre 2026 (inei_tic_iit2026.txt): "68,2%" (internet use, ages 6 to 11); "92,5%" (12 to 18);
//    "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - Python 3.14, keyword.kwlist: 35 entries (python3 -I -c "import keyword;print(len(keyword.kwlist))" printed 35).
//  - Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30 (gap 10 h 30 min).
// Our own example (ccae.py in the src-pages folder, python3 -I, Python 3.14.8), exact output:
//    pirnt -> print 2 / retrun -> return 2 / whlie -> while 2 / esle -> else 2 / improt -> import 2 / Print -> print 1 / fro -> from 1
//  and Python's own message for pirnt("hola"): "NameError: name 'pirnt' is not defined. Did you mean: 'print'?"
// Lesson family: Levenshtein edit distance with a rolling row; a swap of two letters costs 2; case counts; the nearest word is
// not always the intended one ("fro" is 1 from "from" and 2 from "for").

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'import keyword',
  '',
  'def distance(a, b):',
  '    prev = list(range(len(b) + 1))',
  '    for i, ca in enumerate(a, 1):',
  '        row = [i]',
  '        for j, cb in enumerate(b, 1):',
  '            cost = 0 if ca == cb else 1',
  '            row.append(min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + cost))',
  '        prev = row',
  '    return prev[-1]',
  '',
  "words = keyword.kwlist + ['print', 'input', 'range', 'len']",
  "typed = ['pirnt', 'retrun', 'whlie', 'esle', 'improt', 'Print', 'fro']",
  '',
  'for t in typed:',
  '    closest = min(words, key=lambda w: (distance(t, w), w))',
  "    print(t, '->', closest, distance(t, closest))"
].join('\n');

const OUT = [
  'pirnt -> print 2',
  'retrun -> return 2',
  'whlie -> while 2',
  'esle -> else 2',
  'improt -> import 2',
  'Print -> print 1',
  'fro -> from 1'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'An English-taught option to Crack The Code' },
  slug: 'crack-the-code-alternative-in-english',
  code: 'ccae',
  accent: '#863764',
  accentRationale: 'Crack The Code alternative in English: a deep plum #863764, the colour of a well-thumbed bilingual dictionary cover; it reads as considered rather than loud, and holds well above 4.5 contrast on the paper #FBF8F2',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'An English-taught alternative to Crack The Code',
  title: 'Crack The Code Alternative in English: Live Coding, Peru',
  description: 'Looking for a Crack The Code alternative taught in English? Live online coding for children and teens in Peru, group or one to one, and how to choose any school.',
  ogDescription: 'For Peruvian families who want coding taught in English: what changes when the class language changes, a spelling lesson in Python, and a checklist that works for any school.',
  twitterDescription: 'An English-taught option for families in Peru: live online coding for ages 6 to 18, in a group or one to one.',
  pageName: 'Crack The Code Alternative in English',
  webPageDescription: 'A fair guide for families in Peru comparing Spanish-language live coding academies for children with live coding classes taught in English, built from MINEDU normative ages, the CNEB study plan, EF EPI 2025, INEI household technology data and Python\'s own keyword list, with an original lesson on edit distance.',
  courseDescription: 'Live online coding classes for children and teenagers in Peru, taught in English by mentors based in India: Scratch, Roblox, Python, web and Java, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Crack The Code alternative in English',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#checked', label: 'What we checked' },
    { href: '#difference', label: 'The difference' },
    { href: '#english', label: 'English on day one' },
    { href: '#lesson', label: 'Spelling lesson' },
    { href: '#choose', label: 'How to choose' }
  ],
  eyebrow: 'Peru &middot; Children and teens &middot; Live online, in English',
  h1: 'A Crack The Code alternative taught in English',
  lede: 'Many Peruvian parents first meet children\'s coding through a Spanish-language academy, and Crack The Code is one name they search for. Some of those parents then ask a second question: could my child learn to code and use English at the same time? This page answers that question fairly. It explains what changes when a coding class is taught in English, what a child actually meets in English on the first day, and how to choose any coding school, ours included.',
  secondaryCta: { href: '#lesson', label: 'Try the spelling lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and looking for coding classes in English for my child. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every lesson spoken in clear English',
  spec: [
    ['Ages', '6 to 18, and adults too'],
    ['Teaching language', 'English, every lesson'],
    ['Format', 'Live video, never recorded'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Chosen by your family'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'If you want an alternative to a Spanish-language coding academy such as Crack The Code, Modern Age Coders teaches coding live online in English to children and teenagers in Peru, aged 6 to 18. Mentors based in India teach Scratch, Roblox, Python, web development and Java, in a group of fifteen to twenty or one to one, at hours your family chooses in Peru time. The real difference is the language and the format, not a claim that one school is better. The first class is free, so your child can test the English before you decide.',

  picks: {
    eyebrow: 'Where children start',
    h2: 'Three first courses, by age',
    lede: 'Most children in Peru begin with one of these. A mentor confirms the choice after the free class.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CCAE / 01', title: 'Scratch for younger children', note: 'For primaria, from about 6. Blocks that snap together, so spelling never stops a program from running, while the mentor names every idea aloud in English.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'CCAE / 02', title: 'Roblox game coding', note: 'For children of about 9 to 12 who already play. Real Lua code inside Roblox Studio, where every keyword is an English word they start to recognise.' },
      { course: 'python-ai-kids-masterclass', code: 'CCAE / 03', title: 'Python and AI for kids', note: 'For confident readers from about 10. Typed code, honest error messages in English and small AI projects explained step by step.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this page is for',
      h2: 'Who looks for an English-taught alternative to Crack The Code?',
      lede: 'Usually a Peruvian parent who already likes the idea of live coding classes for a child, and wonders whether English could be part of the bargain.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Bilingual-school families', p: 'Children at Lima\'s bilingual, Cambridge or IB schools already learn some subjects in English. A coding class in the same language fits the way they study.' },
          { h3: 'Families planning ahead', p: 'Parents who expect a child to study or work in English later, and would rather the technical vocabulary arrives early and in context.' },
          { h3: 'Children who want more', p: 'A child who has enjoyed Scratch or Roblox in Spanish and is ready for typed code, where almost every keyword is English anyway.' }
        ] },
        { kind: 'p', mt: true, html: 'If your child would rather learn in Spanish, a Spanish-language academy may simply suit them better, and that is a perfectly good decision. If English is part of what you want, read on. A Spanish version of our offer for younger children is on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>; the classes it describes are still taught in English.' }
      ]
    },
    {
      id: 'checked',
      tint: 'tint',
      eyebrow: 'What we checked',
      h2: 'What could we check about Crack The Code?',
      lede: 'Very little, and we would rather say so than guess. When we tried to load the school\'s own website, crackthecode.la, on 8 and 9 November 2026, the address did not resolve.',
      body: [
        { kind: 'two',
          leftH3: 'What that means for this page',
          left: [
            'We describe other schools only from their own public pages, read in full. Because we could not read Crack The Code\'s site on either day, this page does not describe its courses, ages, group sizes, teachers or fees. A website being unreachable for a day says nothing about a school\'s teaching, and we draw no conclusion from it.',
            'The fair comparison we can make is with a category: Spanish-language academies that teach coding live online to children in Peru. Several exist, and parents compare them with each other as well as with us.'
          ],
          rightH3: 'What to ask any school directly',
          right: [
            'Which language is every lesson taught in, and does that ever change?',
            'Is the class live with a teacher, recorded, or a mix of the two?',
            'How many children share one teacher, and is one-to-one possible?',
            'Who chooses the hour, and what happens when a class is missed?'
          ] },
        { kind: 'p', mt: true, html: 'A school will answer those four questions in a few minutes, by message or in a trial class. Write the answers down for every school you consider, including us, and compare the notes side by side rather than from memory. Parents who prefer to read in Spanish will find a separate page, with its own decision method, at <a class="ag-inline-link" href="/alternativa-a-crack-the-code-en-ingles">alternativa a Crack The Code en inglés</a>.' }
      ]
    },
    {
      id: 'difference',
      eyebrow: 'The honest difference',
      h2: 'What is different about a coding class taught in English?',
      lede: 'The coding ideas are the same in any language: sequences, loops, conditions, variables, functions. What changes is the language a child hears them explained in, and how much English practice comes along for free.',
      body: [
        { kind: 'two',
          leftH3: 'A Spanish-language class',
          left: [
            'Explanations, questions and jokes all happen in the child\'s first language, so nothing is lost to vocabulary. For a younger child, or one who finds English hard, that comfort is a real advantage.',
            'The code itself still contains English words. A child writing Python in Spanish-language classes still types <code>print</code>, <code>if</code> and <code>while</code>, usually learning them as symbols rather than words.'
          ],
          rightH3: 'Our class, in English',
          right: [
            'Every lesson is live, online and spoken in English by a mentor based in India who speaks clearly and slows down for each child. The keywords on screen and the words the mentor uses are the same words, so they stop being symbols quickly.',
            'Children answer, explain and ask in English, a little at a time. Nobody is expected to be fluent on day one; the mentor rephrases, writes key words in the chat and checks understanding before moving on.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Format side by side: what our classes offer, and what to confirm with any other school', head: ['Question', 'Modern Age Coders', 'Ask the other school'], rows: [
          ['Teaching language', 'English only, every lesson', 'Which language, always?'],
          ['Live or recorded', 'Live video with a mentor', 'Live, recorded or both?'],
          ['Ages', '6 to 18, and adults in other courses', 'From what age, up to what age?'],
          ['Group or private', 'Group of fifteen to twenty, or one to one', 'How many per teacher?'],
          ['Hours', 'Any day and hour your family picks', 'Fixed slots or flexible?'],
          ['Languages taught', 'Scratch, Lua, Python, JavaScript, Java', 'Which, and in what order?']
        ] },
        { kind: 'source', html: 'Left column: our own offer as of November 2026. Right column: questions only, because we do not describe other schools without reading their own pages.' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'English on day one',
      h2: 'Can a Peruvian child follow a coding class in English?',
      lede: 'Most children of 9 or more who have had English at school can, with a patient mentor. Younger children follow through the screen as much as the words. What helps is knowing which English a child really meets in the first weeks.',
      body: [
        { kind: 'two',
          leftH3: 'The words on the screen',
          left: [
            'Python 3.14 reserves 35 keywords, and every one of them is an English word or a shortening of one: <code>if</code>, <code>else</code>, <code>while</code>, <code>for</code>, <code>return</code>, <code>import</code>, <code>True</code>, <code>False</code> and the rest. Add a few everyday functions such as <code>print</code>, <code>input</code> and <code>range</code>, and that is most of the vocabulary of a first term.',
            'Error messages are English too. A child who misspells <code>print</code> sees <code>NameError: name \'pirnt\' is not defined. Did you mean: \'print\'?</code>. Reading that sentence calmly is a skill we practise from the first class.'
          ],
          rightH3: 'The English in the room',
          right: [
            'EF\'s English Proficiency Index 2025 places Peru 52nd of 123 countries with a score of 519, and Lima at 555, in EF\'s "high" band. Speaking is the lowest of Peru\'s four skill scores at 480, against 540 for reading. EF tests adults who choose to take its test, so treat this as a signal about the country, not about any one child.',
            'Our reading of that pattern: Peruvian learners often read English better than they speak it. A live class, where a child has to say a short sentence aloud every few minutes, works on exactly the weaker side.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'Peruvian school grades, MINEDU\'s normative age for each, and the first course we would usually suggest', head: ['School grade', 'Normative age (MINEDU)', 'Our usual first course'], rows: [
          ['1° primaria', '6', 'Scratch, with spoken English and pictures'],
          ['2° primaria', '7', 'Scratch'],
          ['3° primaria', '8', 'Scratch, or Minecraft coding'],
          ['4° primaria', '9', 'Roblox or Minecraft coding'],
          ['5° primaria', '10', 'Roblox, or Python for kids'],
          ['6° primaria', '11', 'Python for kids'],
          ['1° secundaria', '12', 'Python for kids, or teen Python'],
          ['2° and 3° secundaria', '13 and 14', 'Teen Python, web, or Java'],
          ['4° and 5° secundaria', '15 and 16', 'Java, Python, data structures']
        ] },
        { kind: 'source', html: 'Source for the first two columns: MINEDU, Edades normativas, which sets each grade\'s normative age as the age on 31 March of the school year, read on 9 November 2026. The third column is our own suggestion, not MINEDU\'s, and a mentor adjusts it after the free class.' },
        { kind: 'p', mt: true, html: 'At school, English has a fixed place: the CNEB study plan gives secundaria three teaching hours of English a week on the regular day and five in full-day (JEC) schools, each teaching hour lasting 45 minutes. A coding class in English adds practice that is not labelled English, which many children find easier, because the point of the sentence is to make a program work.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'What does an English-taught coding lesson look like? Spelling mistakes, measured',
      lede: 'This lesson is for children of about 11 and up who have written a little Python. It starts from something every beginner does, misspelling an English keyword, and turns it into an algorithm: how many single-letter changes turn one word into another?',
      body: [
        { kind: 'two',
          leftH3: 'The idea, in plain words',
          left: [
            'Take the typo <code>pirnt</code>. To turn it into <code>print</code> you could change the <code>i</code> to <code>r</code> and the <code>r</code> to <code>i</code>: two changes. That count of insertions, deletions and substitutions is called the edit distance, or Levenshtein distance.',
            'The program below works it out with a table, one row at a time. For each typed word it then finds the nearest real word from Python\'s own keyword list plus four everyday functions, and prints the match and its distance.'
          ],
          rightH3: 'Three things the output teaches',
          right: [
            '<strong>A swap costs two.</strong> <code>pirnt</code>, <code>whlie</code>, <code>esle</code> and <code>improt</code> each have two letters in the wrong order, and each is 2 away, because swapping is two substitutions in this method.',
            '<strong>Capitals count.</strong> <code>Print</code> is 1 away from <code>print</code>. Python treats them as different names, and so does the distance.',
            '<strong>Nearest is not the same as meant.</strong> A child who typed <code>fro</code> almost certainly meant <code>for</code>. But <code>fro</code> is 1 away from <code>from</code> and 2 from <code>for</code>, so the program suggests the wrong word. The computer measures; the child decides.'
          ] },
        { kind: 'code', label: 'Nearest keyword by edit distance', lang: 'Python', code: CODE },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: OUT, note: 'Exact output from our run with Python 3.14. The word list is Python\'s keyword list plus print, input, range and len; ties are broken alphabetically by the second item in the key.' },
        { kind: 'p', mt: true, html: 'Python itself uses a similar idea. In Python 3.14, which we ran, a misspelt name comes with a suggestion of a nearby one, which is why the misspelt <code>pirnt</code> earlier came with <em>Did you mean: \'print\'?</em> The lesson shows children that the suggestion is arithmetic, not magic, and that it can be wrong, as <code>fro</code> proves.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Before running anything, say aloud in English how far <code>retrun</code> is from <code>return</code>, and why.',
          '<strong>Add a word.</strong> Put <code>for</code> in the typed list and check its distance to itself.',
          '<strong>Fix the trap.</strong> Change the program so it prints every word within distance 2, not only the nearest, and see <code>for</code> appear for <code>fro</code>.',
          '<strong>Explain it.</strong> Tell the class, in two English sentences, why a swap of two letters costs 2 here.'
        ] }
      ]
    },
    {
      id: 'choose',
      tint: 'tint',
      eyebrow: 'How to choose',
      h2: 'How do you choose a coding school for a child in Peru?',
      lede: 'Use the same short test for every school, in Spanish or English, online or in person. It applies to us exactly as it applies to anyone else.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask for a trial class with your child present.</strong> Watch how much of the hour your child spends building, not watching.',
          '<strong>Listen for the teacher\'s questions.</strong> A good teacher asks the child to predict what the code will do before running it.',
          '<strong>Check the language plainly.</strong> Ask which language every lesson is taught in, and whether it changes when a child struggles.',
          '<strong>Ask what happens after a mistake.</strong> The answer should be "we find it together", never "the teacher fixes it".',
          '<strong>See real work.</strong> Ask for a project a child of the same age built, and ask the child to explain one part of it.',
          '<strong>Confirm the practical side.</strong> Group size, who sets the hour, how missed classes are handled, and how you can stop.',
          '<strong>Check the equipment.</strong> Typed coding needs a laptop or desktop; INEI found that 36.4% of Peruvian households had at least one computer in the second quarter of 2026.',
          '<strong>Decide on evidence.</strong> After a month, ask your child to show you something they made and explain it without help.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Signs a school suits your child',
          left: [
            'Your child talks about what they built, not only what they watched. They can explain a bug they found. They want to keep going after the class ends.',
            'For an English-taught class, add one more sign: after a few weeks your child uses words like loop, condition or variable naturally, in either language.'
          ],
          rightH3: 'Signs to slow down',
          right: [
            'Most of the hour is copying from a teacher\'s screen. Every project looks identical. Your child cannot say what any line does.',
            'In an English-taught class, if your child is still lost after three or four sessions, ask for a slower group, try one-to-one, or choose a Spanish-language class for now. There is no prize for struggling.'
          ] },
        { kind: 'p', mt: true, html: 'Online access matters too. INEI reports that 92.5% of Peruvians aged 12 to 18 used the internet in the second quarter of 2026, but only 68.2% of children aged 6 to 11 did. For younger children, a parent nearby for the first sessions makes live online classes far smoother.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Time',
      h2: 'What time would classes be from Peru?',
      lede: 'Whenever suits your family. Peru stays on UTC minus 5 all year and India on UTC plus 5:30, so India is always 10 hours 30 minutes ahead, and the conversion never shifts.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru times and the matching India time (conversions only, not a timetable)', head: ['Peru time', 'India time', 'Often used for'], rows: [
          ['08:00 Saturday', '18:30 Saturday', 'A weekend morning class'],
          ['15:00', '01:30, next day', 'After a morning school shift'],
          ['16:30', '03:00, next day', 'After lunch on a school day'],
          ['18:00', '04:30, next day', 'Early evening'],
          ['20:00', '06:30, next day', 'After dinner, older children']
        ] },
        { kind: 'source', html: 'Source: IANA tz database, America/Lima (UTC minus 5, no daylight saving) and Asia/Kolkata (UTC plus 5:30). The conversions are ours.' },
        { kind: 'p', mt: true, html: 'Families in Lima who want a fuller picture of English-medium options for children can read <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>; for a first course by age, see <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a> and <a class="ag-inline-link" href="/python-for-kids-peru">Python for kids in Peru</a>. Every page we have written for Peru is listed on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What does progress look like in the first year?',
    lede: 'Two tracks move together: the code a child can write, and the English they can use about it. These are our own levels, not school grades.',
    table: { numCols: [], caption: 'Our levels for children learning to code in English', head: ['Stage', 'Usually by', 'In code', 'In English'], rows: [
      ['1. Listener', 'Week 2', 'Runs and changes a ready-made project', 'Follows short spoken steps with the screen'],
      ['2. Namer', 'Month 1', 'Uses loops and events on purpose', 'Names the block or keyword being used'],
      ['3. Predictor', 'Month 3', 'Guesses the result before running', 'Says the guess in one sentence'],
      ['4. Debugger', 'Month 5', 'Finds and fixes a mistake alone', 'Reads an error message aloud and explains it'],
      ['5. Builder', 'Month 8', 'Plans and finishes an own project', 'Presents it for two minutes'],
      ['6. Teacher', 'Month 12', 'Helps a classmate with a bug', 'Explains an idea to someone younger']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to show you one thing each week and say one sentence about it in English. The sentence matters more than the size of the project.',
      'Progress in English is often invisible for a month and then sudden. That is normal.'
    ] },
    right: { h3: 'For children', ps: [
      'You do not need perfect English to start. You need to try one sentence, even a short one.',
      'Keep a list of new words from each class. By the end of a term it is longer than you expect.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children and teens in Peru',
    lede: 'All live, all in English, each with one mentor from start to finish, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Roughly 6 to 10', courses: [
        { code: 'CCAE / YOUNG / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding with blocks', blurb: 'Logic and sequencing before any typing.' },
        { code: 'CCAE / YOUNG / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Loops and conditions inside a world they know.' },
        { code: 'CCAE / YOUNG / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that teach how to break problems down.' }
      ] },
      { num: 'II', h3: 'Older children', sub: 'Roughly 9 to 13', courses: [
        { code: 'CCAE / MID / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Designing and coding small games of their own.' },
        { code: 'CCAE / MID / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI guesses, and when it guesses wrong.' },
        { code: 'CCAE / MID / 03', slug: 'creative-coding-animation-mastery', title: 'Creative coding', blurb: 'Animation and art made with code.' }
      ] },
      { num: 'III', h3: 'Teenagers', sub: 'Roughly 13 to 18', courses: [
        { code: 'CCAE / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From the basics to files, data and small apps.' },
        { code: 'CCAE / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects, classes and the language many universities use.' },
        { code: 'CCAE / TEEN / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development', blurb: 'Pages, styles and scripts, up to a site that runs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How live classes in English run for families in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'School days', l: 'An afternoon or evening hour on your own clock, after the school shift.' },
      { time: 'Weekends', l: 'A morning class many families like, chosen when you book.' },
      { time: '1-on-1', l: 'Your child and one mentor, at the hour you fix together.' }
    ],
    cells: [
      { h3: 'Spoken slowly', p: 'Mentors pace their English to each child.' },
      { h3: 'Words in the chat', p: 'Key terms are typed as well as said.' },
      { h3: 'Building, not watching', p: 'Children write and run code every class.' },
      { h3: 'Parent updates', p: 'Short notes on what was built and learnt.' },
      { h3: 'Same mentor', p: 'One mentor follows your child all course.' },
      { h3: 'Group or private', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Children who keep coming build games, stories and small tools of their own. A few are below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families have written about us on Google, unedited.',

  fees: {
    h2: 'Fees for families in Peru',
    lede: 'We charge in US dollars, monthly, to a debit or credit card. The amount in soles on your statement is set by your bank\'s rate on the day, so expect small differences from month to month.',
    free: ['A free first class', 'Your child builds something real', 'No card to book'],
    group: ['Fifteen to twenty children by level', 'One mentor all course', 'Two live classes a week', 'Pay monthly, stop any month'],
    one: ['Your child and one mentor', 'A plan for their age and English', 'Hours you choose']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Questions from parents comparing coding schools in Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only, taught by mentors based in India who speak clearly and match your child\'s pace and accent. If your child needs Spanish in the classroom, a Spanish-language academy may suit them better for now.' },
      { q: 'Are you connected with Crack The Code?', a: 'No. We are a separate, independent online school. We mention Crack The Code only because many Peruvian parents search for it, and we do not describe its courses because we could not read its website when we checked on 8 and 9 November 2026.' },
      { q: 'Is your school better than a Spanish-language academy?', a: 'We do not make that claim. The difference is format: our classes are taught in English, live, for ages 6 upward, in a group or one to one, at flexible hours. Which suits your child depends on the child, and a trial class at each school is the fairest test.' },
      { q: 'My child\'s English is basic. Can they still join?', a: 'Usually, yes. Younger children follow the screen as much as the words, and mentors repeat, slow down and type key words in the chat. The free first class shows quickly whether your child is comfortable; if not, we say so honestly.' },
      { q: 'From what age do you teach?', a: 'From 6, which is MINEDU\'s normative age for 1° de primaria. Younger children start with Scratch; typed Python usually begins at about 10 or 11, once reading and typing are comfortable.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is 10 hours 30 minutes behind India all year, so a 17:00 class in Lima is 03:30 the next morning in India.' },
      { q: 'What equipment does my child need?', a: 'A laptop or desktop computer, a stable internet connection and headphones with a microphone. Scratch can run in a browser; for typed code a real keyboard matters. We help install anything needed in the first class.' },
      { q: 'How many children are in a class?', a: 'A group has fifteen to twenty children at a similar level, with one mentor throughout. One-to-one classes are one child and one mentor, at hours you fix together.' },
      { q: 'Will my child get a certificate?', a: 'Yes, our own certificate of completion when a course ends. It is not a Peruvian qualification and is not issued or recognised by MINEDU; it records what your child completed with us.' },
      { q: 'How do I pay from Peru?', a: 'By card, monthly, in US dollars. Your bank converts the charge into soles at its own rate. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for parents deciding',
    lede: 'Pages that help you look closer before choosing.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, from start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking first', p: 'Why we teach reasoning before shortcuts.' },
      { href: '/student-labs', label: 'Student labs', p: 'Work our students have made.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Which AI tools allow which ages.' },
      { href: '/courses', label: 'Every course', p: 'Full syllabuses in one place.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'All our Peru pages together.' }
    ]
  },

  start: {
    h2: 'Book a free first class in English',
    lede: 'In the first class your child builds something small with a mentor, in English, while you watch if you like. Afterwards the mentor tells you honestly how your child coped with the language, which course fits, and whether a group or one-to-one would work better.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a real class, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'All classes are live video from India, in English. Message us on WhatsApp in English or Spanish, and we reply in English.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For parents', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Leer en español' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium, Lima' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Kids, online' }
      ] }
    ],
    bottomRight: 'fro is nearer from than for'
  },

  personalityCss: `
.ag-root.ag-ccae .ag-hero h1 { max-width: 19ch; letter-spacing: -0.012em; }
.ag-root.ag-ccae .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ccae .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ccae .ag-steps li { line-height: 1.62; }
.ag-root.ag-ccae .ag-code pre { font-size: 0.9em; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU Edades normativas (normative age at 31 March); CNEB study plan (English hours, 45-minute teaching hour); EF EPI 2025 Peru page; INEI TIC en los Hogares II Trimestre 2026; Python 3.14 keyword list; IANA tz database. Read 9 November 2026.',
    localProject: 'An original edit-distance lesson in Python: seven misspelt keywords measured against Python\'s keyword list plus four functions; swaps cost 2, capital P costs 1, and fro lands on from (1) instead of the intended for (2). Lesson family: Levenshtein distance with a rolling row, case sensitivity, nearest is not meant.',
    requiredMentions: ['A swap costs two.', 'Capitals count.', 'The computer measures; the child decides', 'crackthecode.la', 'Nearest is not the same as meant', 'Python 3.14 reserves 35 keywords', 'Our usual first course', 'fro is nearer from than for', 'Speaking is the lowest of Peru\'s four skill scores at 480'],
    sources: [
      { claim: 'Normative age per grade measured at 31 March; 1° primaria 6 to 5° secundaria 16.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'CNEB secundaria English 3 hours (regular day) and 5 (JEC); teaching hour of 45 minutes.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Peru 52 of 123, score 519; Lima 555 high; reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'INEI II Trimestre 2026: internet use 68.2% (ages 6 to 11), 92.5% (12 to 18); 36.4% of households with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Python keyword list (35 entries in Python 3.14).', url: 'https://docs.python.org/3/library/keyword.html' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any description of Crack The Code courses, ages, group size, teachers or fees: crackthecode.la did not resolve on 8 and 9 November 2026 (one try each); category only.',
      'Any claim that one school is better, any ranking, any competitor price, rating or review: not made.',
      'That English-taught classes suit every child: not made; the page says a Spanish-language class may suit some children better.',
      'Spanish-language teaching: none; the page says the classes are in English only.',
      'MINEDU recognition of our certificate: none, and the FAQ says so.'
    ]
  }
};
