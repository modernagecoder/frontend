'use strict';
// Learn coding in English in Germany (ag- English door, Germany cluster P2 row DE036), written 2026-11-03.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: the "why English" page. Not the hub's three audiences (families who live in English, pupils, adults at work):
// this page is about the language of code itself. Keywords are fixed English words (Python, Java), names may be in any
// language (PEP 3131), the documentation exists in German but the compiler and its errors speak English, and German
// school already puts English beside maths and Informatik. Plus how our English-only teaching adapts to the learner.
// Sources (read raw):
//  - Python 3.14.8 standard library, run 3 Nov 2026 (python3 -I): keyword.kwlist has 35 entries, keyword.softkwlist 4
//    (['_', 'case', 'match', 'type']).
//  - Java Language Specification, Java SE 21, chapter 3, docs.oracle.com/javase/specs/jls/se21/html/jls-3.html
//    (src-pages/learn-coding-in-english-germany/jls-3.html, fetched 3 Nov 2026): "51 character sequences, formed from
//    ASCII characters, are reserved for use as keywords" ... "Another 17 character sequences ... may be interpreted as
//    keywords or as other tokens, depending on the context".
//  - PEP 3131, peps.python.org/pep-3131 (pep3131.html): "This PEP suggests to support non-ASCII letters (such as
//    accented characters, Cyrillic, Greek, Kanji, etc.) in Python identifiers."; "Status : Final"; "Python-Version : 3.0".
//  - docs.python.org/_static/switchers.js (pydocs-switchers.js, fetched 3 Nov 2026): _ALL_LANGUAGES has 17 entries,
//    including ["de", "German | Deutsch"] and ["en", "English"].
//  - FACTS.md (facts-school, fetched 2 Nov 2026): IQB, VERA-8 in "Deutsch, Mathematik, Englisch und Französisch" (113);
//    IQB, common Abitur pools since 2017 for "Deutsch und Mathematik sowie die fortgeführten Fremdsprachen Englisch und
//    Französisch" (30) and common dates since 2022 (31); NRW 2027 written Abitur "Freitag, 30. April 2027 Englisch" (46);
//    NRW ZP10 in Deutsch, Mathematik und Englisch (64); BWKI "sowohl auf deutscher wie auch auf englischer Sprache" (213);
//    AGIS "nutzen Englisch als gemeinsame Sprache im Unterricht" (250).
//  - Time: EinhZeitG; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own code (scratchpad de/w/G4/lce/v1.py, v2.py, both.py, python3 -I, Python 3.14.8): Version 1 prints "German
// keywords -> invalid syntax on line 1", "English keywords -> compiles", "3 -> 9", "4 -> 16". Version 2 prints
// "Keywords: ['for', 'in', 'if']", "Built-in names: ['print', 'range']", "Names the programmer chose: ['größe', 'zahl']",
// "Python keywords in total: 35".
// Lesson family: tokens: the keywords are fixed English words, the names are the programmer's own (keyword vs identifier).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# Version 1: the same program twice, with German keywords and with English ones',
  'german = (\'für zahl in bereich(1, 5):\\n    größe = zahl * zahl\\n\'',
  '          \'    wenn größe > 5:\\n        drucke(zahl, "->", größe)\\n\')',
  'english = (\'for zahl in range(1, 5):\\n    größe = zahl * zahl\\n\'',
  '           \'    if größe > 5:\\n        print(zahl, "->", größe)\\n\')',
  '',
  'for name, source in (("German keywords", german), ("English keywords", english)):',
  '    try:',
  '        compile(source, name, "exec")',
  '        print(name, "-> compiles")',
  '    except SyntaxError as error:',
  '        print(name, "->", error.msg, "on line", error.lineno)',
  '',
  'exec(english)'
].join('\n');

const V2 = [
  '# Version 2: ask Python which words it read as keywords',
  'import builtins, io, keyword, tokenize',
  '',
  'words = [t.string for t in tokenize.generate_tokens(io.StringIO(english).readline)',
  '         if t.type == tokenize.NAME]',
  'print("Keywords:", [w for w in words if keyword.iskeyword(w)])',
  'print("Built-in names:", sorted({w for w in words if hasattr(builtins, w)}))',
  'print("Names the programmer chose:", sorted({w for w in words',
  '      if not keyword.iskeyword(w) and not hasattr(builtins, w)}))',
  'print("Python keywords in total:", len(keyword.kwlist))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Learn coding in English' },
  slug: 'learn-coding-in-english-germany',
  code: 'lce',
  accent: '#684256',
  accentRationale: 'Learning to code in English in Germany: a dusky mauve #684256, a language colour rather than a school one, kept clear of the AI plum, the Berlin brick and the hub fir green; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Learn coding in English in Germany',
  title: 'Learn Coding in English in Germany: Live Online Classes',
  description: 'Why learn to code in English in Germany: keywords, error messages and specifications are English. Live online classes in English, matched to your pace and accent.',
  ogDescription: 'Python has 35 keywords and Java 51 reserved ones, all English words, while the names in a program may be German. Why that makes English the natural language to learn coding in, from Germany.',
  twitterDescription: 'The case for learning to code in English from Germany, with a small Python experiment and live classes matched to you.',
  pageName: 'Learn Coding in English in Germany',
  webPageDescription: 'An explainer for learners and parents in Germany on why programming is learned most easily in English: the fixed English keywords of Python and Java, Unicode names under PEP 3131, documentation and error messages, where English already sits beside maths and Informatik in German school, and how our English-only classes adapt to each learner.',
  courseDescription: 'Live online coding classes taught in English for children, teenagers and adults in Germany: Scratch, Python, Java and web development, with one regular mentor who adapts speed, wording and accent to the learner, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding in English',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#keywords', label: 'Keywords' },
    { href: '#experiment', label: 'Test' },
    { href: '#docs', label: 'Docs' },
    { href: '#school', label: 'School' },
    { href: '#adapt', label: 'Pace' }
  ],
  eyebrow: 'Germany &middot; Taught in English &middot; All ages',
  h1: 'Learn coding in English in Germany',
  lede: 'A program in Python or Java is built from English words whatever language its author speaks: for, if, while, return, class. The names in it can be German, umlauts and all, but the grammar cannot. This page shows that with a two-minute Python experiment, sets out what is and is not available in German, and explains how classes taught entirely in English can still fit a learner whose English is a second or third language.',
  secondaryCta: { href: '#experiment', label: 'Try the experiment' },
  wa: 'Hello Modern Age Coders, I am in Germany and would like to learn coding in English. Could I book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; English at the learner\'s speed',
  spec: [
    ['Language of teaching', 'English only, live'],
    ['Ages', 'Children, teenagers and adults'],
    ['Languages taught', 'Scratch, Python, Java, web'],
    ['German times', 'Afternoons, evenings, weekends'],
    ['Mentors', 'Based in India, one per learner'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'You can learn coding in English from Germany with Modern Age Coders: live online classes for children, teenagers and adults, taught entirely in English by a mentor who adjusts speed, wording and accent to you. It makes sense because code itself is written in English keywords, and its error messages and specifications are English too. Classes run in German time, as a group or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three first courses, taught in English',
    lede: 'A starting point for each age group. The free first class confirms which one fits.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'LCE / 01', title: 'Python and AI for Kids', note: 'Children of about 8 to 12. Turtle drawings, small games and the first English keywords, one at a time.' },
      { course: 'python-complete-masterclass-teens', code: 'LCE / 02', title: 'Python for Teens', note: 'For 13 to 18 year olds: every part of the language, explained in clear English, ending in a program of their own design.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'LCE / 03', title: 'Python for Adults', note: 'From the first line to advanced Python, at an adult\'s pace and around an adult\'s week.' }
    ]
  },

  sections: [
    {
      id: 'keywords',
      eyebrow: 'The vocabulary of code',
      h2: 'Why are programming languages written in English?',
      lede: 'Every mainstream programming language has a small set of reserved words that make up its grammar. In Python and Java those words are English, and they are the same on every computer in the world.',
      body: [
        { kind: 'two',
          leftH3: 'How many there are',
          left: [
            'Python 3.14 has 35 keywords, as listed by its own keyword module, plus four soft keywords that only act as keywords in certain places: match, case, type and the underscore. A learner meets about a dozen of them in the first month.',
            'Java has more. The Java Language Specification for Java SE 21 reserves 51 character sequences as keywords, and names 17 more that act as keywords only in some contexts. All of them are built from plain ASCII letters.'
          ],
          rightH3: 'Why that matters for a learner',
          right: [
            'A child in Hamburg who types if is using a real English word with its real meaning. Learning the word and learning the idea happen together. A learner taught in English hears the instruction and types the same word; a learner taught in German translates the idea, then switches back to English to type it.',
            'That is the plainest reason we teach in English: the gap between what the teacher says and what the learner types disappears.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Ten Python keywords a beginner meets first, and what each word means in German', head: ['Keyword', 'Plain German meaning', 'What it does in Python'], rows: [
          ['if', 'wenn, falls', 'Runs a block only when a condition is true'],
          ['else', 'sonst', 'The block for when it is not'],
          ['for', 'für', 'Repeats for each item in a sequence'],
          ['while', 'solange', 'Repeats as long as a condition holds'],
          ['in', 'in', 'Asks whether an item is in a collection'],
          ['def', 'short for define, festlegen', 'Starts the definition of a function'],
          ['return', 'zurückgeben', 'Hands a result back from a function'],
          ['import', 'importieren, einführen', 'Brings in code from a module'],
          ['True', 'wahr', 'The value for yes'],
          ['None', 'nichts, keiner', 'The value for no value at all']
        ] },
        { kind: 'source', html: 'Sources: Python 3.14.8 standard library, keyword module (keyword.kwlist and keyword.softkwlist), run on 3 November 2026; Oracle, The Java Language Specification, Java SE 21 Edition, section 3.9, read on 3 November 2026. The German meanings and the descriptions are ours.' }
      ]
    },
    {
      id: 'experiment',
      tint: 'tint',
      eyebrow: 'A two-minute experiment',
      h2: 'Can you write Python with German words?',
      lede: 'Half yes, half no, and the line between the two halves is exactly the line between the language and the programmer. Python has allowed letters such as ä, ö, ü and ß in names since version 3.0, under PEP 3131. The keywords stay English.',
      body: [
        { kind: 'two',
          leftH3: 'The test',
          left: [
            'Write one short program twice. Both versions square the numbers 1 to 4 and print the squares bigger than 5. Both name their variables in German, zahl and größe. The first version also translates the keywords: für, wenn, bereich, drucke. The second keeps for, if, range and print.',
            'Then let Python itself judge both versions before running either.'
          ],
          rightH3: 'What to expect',
          right: [
            'Most learners guess that both will fail, or that both will run. The real answer teaches more about how a programming language works than a page of theory.'
          ] },
        { kind: 'code', label: 'Version 1: compile both, run the one that works', lang: 'Python', code: V1, note: 'It prints <code>German keywords -&gt; invalid syntax on line 1</code>, <code>English keywords -&gt; compiles</code>, then <code>3 -&gt; 9</code> and <code>4 -&gt; 16</code>.' },
        { kind: 'p', mt: true, html: 'The German version stops on its first line. Python reads für as an ordinary name, because ü is allowed in names, and then finds a second name, zahl, straight after it, which its grammar does not allow. The English version runs, and its German variable größe is perfectly legal. The message itself, invalid syntax, is English too: standard Python writes its error messages in English.' },
        { kind: 'code', label: 'Version 2: let Python sort the words', lang: 'Python', code: V2, note: 'Run after Version 1 in the same file. It prints <code>Keywords: [\'for\', \'in\', \'if\']</code>, <code>Built-in names: [\'print\', \'range\']</code>, <code>Names the programmer chose: [\'größe\', \'zahl\']</code> and <code>Python keywords in total: 35</code>.' },
        { kind: 'p', mt: true, html: 'The tokenize module splits the program into the pieces Python actually reads. Three of the words are keywords and can never change. Two are built-in names that every Python program shares. Only two belong to the programmer, and those two may be in any language. In our classes children usually start with English names as well, because a name like total or score is one more English word learned, but nothing in Python requires it.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Guess first.</strong> Before running Version 1, write down which version you think will fail and why.',
          '<strong>Find the edge.</strong> Change only für back to for in the German version. Which line fails now?',
          '<strong>Break a name.</strong> Try naming a variable class or if. What does Python say, and why can it not allow it?',
          '<strong>Going further.</strong> List every keyword with <code>print(keyword.kwlist)</code> and write one sentence in English for each of the first ten.'
        ] },
        { kind: 'source', html: 'PEP 3131, Supporting Non-ASCII Identifiers, status Final, Python 3.0, peps.python.org. The code, its output on Python 3.14.8 and the exercises are our own.' }
      ]
    },
    {
      id: 'docs',
      eyebrow: 'Documentation and errors',
      h2: 'Is programming documentation available in German?',
      lede: 'Some of it is, and it is fair to say so. The official Python documentation has a German translation. But the parts a learner meets every few minutes, the keywords, the error messages and the formal specifications, are in English.',
      body: [
        { kind: 'table', numCols: [], caption: 'What a beginner reads while coding, and in which language', head: ['What you read', 'In German?', 'Source'], rows: [
          ['Python keywords and built-in names', 'No, fixed English words', 'Python keyword module'],
          ['Python error messages', 'No, standard Python writes them in English', 'Our test with Python 3.14.8'],
          ['Official Python documentation', 'Yes, German is one of 17 languages in its menu', 'docs.python.org language switcher'],
          ['Java Language Specification', 'Published in English', 'docs.oracle.com, Java SE 21'],
          ['Names you choose yourself', 'Yes, any language, umlauts included', 'PEP 3131']
        ] },
        { kind: 'source', html: 'Sources: docs.python.org, language switcher file read on 3 November 2026 (17 entries, among them German and English); Oracle, Java Language Specification SE 21; PEP 3131; our own run of Python 3.14.8. The table is our summary. How complete any translation is changes over time, so we make no claim about it.' },
        { kind: 'p', mt: true, html: 'In practice that means a learner taught in German still has to read English the moment something goes wrong. Our mentors use those moments on purpose. When an error appears, the learner reads it aloud, says in their own words what they think it means, and only then fixes it. After a few weeks NameError, IndexError and invalid syntax stop being foreign words and become clues.' }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'English at German school',
      h2: 'Where does English already sit beside maths and Informatik in German school?',
      lede: 'In more places than many parents expect. English is one of the subjects Germany tests nationally and examines on shared dates, and some school competitions in computing accept work in English.',
      body: [
        { kind: 'table', numCols: [], caption: 'English in German school assessments and competitions, from the official sources', head: ['Where', 'What the source says', 'Source'], rows: [
          ['VERA-8', 'Pupils in Klasse 8 are tested in German, maths, English and French', 'IQB'],
          ['ZP10 in Nordrhein-Westfalen', 'Central exams at the end of Klasse 10 in German, maths and English', 'NRW Ministry of Schools'],
          ['Abitur task pool', 'Shared pools since 2017 for German, maths, and English and French as continued languages', 'IQB'],
          ['Abitur dates', 'Since 2022 the Abitur in German, English, French and maths is held largely on common dates', 'IQB'],
          ['Abitur 2027 in NRW', 'The written English exam is on Friday 30 April 2027', 'NRW Ministry of Schools'],
          ['BWKI', 'AI projects may be submitted in German or English', 'Bundeswettbewerb Künstliche Intelligenz'],
          ['AGIS member schools', 'English is the shared language of teaching', 'Association of German International Schools']
        ] },
        { kind: 'source', html: 'Sources: IQB pages on VERA and on the Abitur; NRW standardsicherung pages on ZP10 and the 2027 Abitur dates; bw-ki.de, Teilnahmebedingungen; agis-schools.org. All read on 2 November 2026. We are not connected with any of these bodies.' },
        { kind: 'p', mt: true, html: 'For a pupil at a German school, then, an hour of coding in English is not a detour. It is practice in a subject they will be examined in, attached to a skill they want. For a pupil at an international school, it is simply the language of their school day.' }
      ]
    },
    {
      id: 'adapt',
      eyebrow: 'If English is not your first language',
      h2: 'Will I understand a coding class taught in English?',
      lede: 'Almost certainly, if your mentor does their job. Ours teach only in English and adjust to you, not the other way round. This is what that looks like in a real class.',
      body: [
        { kind: 'ol', items: [
          '<strong>The first class sets the level.</strong> The mentor listens to how you speak and read, and pitches their English to match before any code is written.',
          '<strong>New words arrive with the code.</strong> Each keyword is spoken, typed and run in the same minute, so its meaning comes from what it does on screen.',
          '<strong>Rephrase, never repeat louder.</strong> If an instruction does not land, the mentor says it differently, more slowly, or writes it in the chat.',
          '<strong>Accents are expected.</strong> Mentors are used to many accents, including German ones, and learners soon get used to their mentor\'s.',
          '<strong>A short glossary grows.</strong> Learners keep their own list of new words with a German note beside each, which is theirs to use as they like.',
          '<strong>Speaking about code is practised.</strong> Explaining your own program aloud, in simple English, is part of every class, because it is how understanding is checked.'
        ] },
        { kind: 'p', mt: true, html: 'We never switch to German, because we do not teach in German at all, and we think it is right to say so before you book. What we do instead is make the English easy to follow. Young children usually need a few classes to settle in; teenagers and adults at a German school or workplace have generally met enough English to start straight away.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When are English-language coding classes in German time?',
      lede: 'On weekday afternoons and evenings, and at weekends. The mentor is in India, ahead of Germany all year round.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample German class times with the mentor\'s time in India', head: ['In Germany', 'In India until 28 March 2027', 'In India after 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'German time follows the Einheitenzeitgesetz: UTC+1 (MEZ) in winter, UTC+2 (MESZ) in summer, with this winter running from 25 October 2026 to 28 March 2027. India keeps UTC+5:30 and does not change its clocks, so the difference is four and a half hours now and three and a half in summer.' },
        { kind: 'p', mt: true, html: 'Those times are examples. You choose when your free first class takes place, in German time, and a one-to-one learner can agree regular times with the mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first English keyword to explaining your own code',
    lede: 'How English and coding grow together in our classes. These are our own stages, not a language certificate.',
    table: { caption: 'English and coding together (our stages)', head: ['Stage', 'Typical start', 'The learner can'], rows: [
      ['1. First keywords', 'Week 1', 'Use print, if and for, and say what each one means'],
      ['2. Reading errors', 'Weeks 2 to 4', 'Read an error message aloud and point to the line it means'],
      ['3. Naming things', 'Month 2', 'Choose clear English names for variables and functions'],
      ['4. Reading documentation', 'Months 3 to 4', 'Look up a function in the official documentation and use it'],
      ['5. Explaining a program', 'Month 5 and up', 'Walk someone through their own program in simple English']
    ] },
    left: { h3: 'For learners', ps: [
      'Read every error message aloud before you fix it.',
      'Keep your glossary short: ten words you use beat a hundred you copied.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to explain a program to you in English. Listening is enough; you do not need to code.',
      'A child who mixes German and English in the first weeks is learning, not struggling.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses, all in English',
    h2: 'Nine more courses taught in English',
    lede: 'Every course below is taught live in English by a mentor who adapts to the learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'LCE / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Blocks first, with English labels on every one.' },
        { code: 'LCE / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to real code in a world they know.' },
        { code: 'LCE / KIDS / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Games of their own, written in Luau.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'LCE / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language of much German Oberstufe Informatik.' },
        { code: 'LCE / TEEN / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'School Informatik, Klasse 5 to 10, in English.' },
        { code: 'LCE / TEEN / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Front-end for teens', blurb: 'Websites with HTML, CSS and React.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'LCE / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that take over repetitive work.' },
        { code: 'LCE / ADULT / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'A first website, built by hand.' },
        { code: 'LCE / ADULT / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java for adults', blurb: 'From core Java to Spring Boot.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes in English work from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'From about 15:00 German time, after school.' },
      { time: 'Evenings', l: 'For adults, until about 18:00 German time.' },
      { time: 'One to one', l: 'Regular times agreed with your mentor.' }
    ],
    cells: [
      { h3: 'English only', p: 'Every class, every explanation, from the first minute.' },
      { h3: 'Pitched to you', p: 'Speed and vocabulary set by the learner\'s level.' },
      { h3: 'Words with code', p: 'Each new word is typed and run as it is learned.' },
      { h3: 'One mentor', p: 'A voice and accent the learner soon knows well.' },
      { h3: 'All ages', p: 'Children from 6, teenagers and adults.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one alone.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Some work by our students in many countries, all of it learned in English; more is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews by students and parents, quoted as written.',

  fees: {
    h2: 'Fees for coding classes in English from Germany',
    lede: 'The monthly fee is for eight live classes. We display it in euro, worked out from the European Central Bank reference rate, and collect it in US dollars, so your bank makes the conversion and the euro figure on your statement may differ by a little.',
    free: ['A free first class', 'A check of the right English level', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, stop at any time'],
    one: ['One learner, one mentor', 'English pitched exactly to you', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Learners in Germany ask',
    h2: 'Learning to code in English in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only. Mentors match the learner\'s pace and accent, so a learner whose English is still growing can follow comfortably.' },
      { q: 'Why learn coding in English rather than German?', a: 'Because the code itself is English. Python has 35 keywords and Java reserves 51, all English words, and Python reports its errors in English. Taught in English, the words you hear are the words you type.' },
      { q: 'Can I name my variables in German?', a: 'Yes. Since Python 3.0, under PEP 3131, names may contain letters such as ä, ö, ü and ß, so größe is a valid name. The keywords, such as for and if, must stay in English.' },
      { q: 'Is the Python documentation available in German?', a: 'Yes, the official Python documentation lists German among the 17 languages in its language menu. Error messages and keywords remain English, and we teach learners to read both.' },
      { q: 'My child\'s English is basic. Can they still join?', a: 'Usually yes. The mentor pitches the English to the child in the first class, introduces each word together with the code it belongs to, and rephrases whenever needed. Young children often settle within a few classes.' },
      { q: 'Does coding in English help with English at school?', a: 'It is extra practice in reading, listening and explaining, in a subject the learner enjoys. English is tested in VERA-8, in the NRW ZP10 and in the Abitur, but we teach coding and make no promise about school grades.' },
      { q: 'Who are the mentors?', a: 'Our mentors are based in India and teach live over video, in English. Each learner keeps the same mentor from week to week.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons from about 15:00 and weekend mornings are the usual choices.' },
      { q: 'How are fees paid from Germany?', a: 'Fees are shown in euro at the European Central Bank reference rate and paid in US dollars; your bank converts the amount. The first class is free.' },
      { q: 'Which language should a beginner learn first?', a: 'Scratch for young children, Python for almost everyone else. Its keywords read like short English sentences, which makes it the gentlest start.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For Berlin families with children of 6 to 12.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Our page in German about school Informatik.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths Abitur, explained in English.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class from start to finish.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our students have built.' }
    ]
  },

  start: {
    h2: 'Book a free first class in English',
    lede: 'In the first class the mentor gets a feel for your English and your coding, sets a short task at that level and suggests a course, so you leave knowing exactly how the classes will sound.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Classes are live online in English with mentors based in India. Ask us anything on WhatsApp, in English.',
    formNote: 'Free first class; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'In English', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python for kids' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'The keywords stay English'
  },

  personalityCss: `
.ag-root.ag-lce .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-lce .ag-capsule { border-left-width: 4px; }
.ag-root.ag-lce .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-lce .ag-table td:first-child { font-family: var(--mono, monospace); }
.ag-root.ag-lce .ag-code-head b { text-transform: lowercase; }
`,

  dossier: {
    curriculumAuthority: 'Python 3.14.8 keyword module; Oracle, Java Language Specification SE 21, section 3.9; PEP 3131; docs.python.org language switcher; IQB (VERA, Abitur pools and dates); NRW Ministry of Schools (ZP10, Abitur 2027 dates); BWKI Teilnahmebedingungen; AGIS; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'The keywords stay English: an original Python experiment that compiles one program twice, with German keywords (für, wenn, bereich, drucke) and with English ones, both using German names zahl and größe. German keywords: "invalid syntax on line 1"; English: compiles and prints 3 -> 9, 4 -> 16. tokenize then sorts the words: keywords for, in, if; built-ins print, range; programmer\'s names größe, zahl; 35 keywords in Python 3.14. Lesson family: keyword vs identifier (tokens).',
    requiredMentions: ['German keywords -&gt; invalid syntax on line 1', 'Names the programmer chose: [\'größe\', \'zahl\']', 'Python keywords in total: 35', 'reserves 51 character sequences as keywords', 'German is one of 17 languages in its menu', 'Rephrase, never repeat louder.', 'The keywords stay English', 'gap between what the teacher says and what the learner types'],
    sources: [
      { claim: 'Java SE 21: 51 reserved keywords and 17 contextual keywords.', url: 'https://docs.oracle.com/javase/specs/jls/se21/html/jls-3.html' },
      { claim: 'Non-ASCII identifiers in Python since 3.0.', url: 'https://peps.python.org/pep-3131/' },
      { claim: 'Python documentation language menu, 17 languages including German.', url: 'https://docs.python.org/_static/switchers.js' },
      { claim: 'VERA-8 subjects; Abitur pools and common dates.', url: 'https://www.iqb.hu-berlin.de/abitur/' },
      { claim: 'BWKI accepts projects in German or English.', url: 'https://www.bw-ki.de/teilnahmebedingungen' }
    ],
    rejectedClaims: [
      'That programming documentation is unavailable in German: false for Python, which offers a German translation; the page says so.',
      'Any claim on how complete a translation is: not checked, none made.',
      'That coding in English improves school grades in English: no promise made.',
      'Any affiliation with the IQB, the NRW ministry, the BWKI, AGIS, Oracle or the Python Software Foundation: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
