'use strict';
// AI course for kids in Germany (ag- English door, Germany cluster row DE030, rows.tsv P2).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: AI literacy for children of about 8 to 14, not chatbot use. What German education policy now says about AI,
// which AI tools a child under 13 can and cannot use under the providers' own terms (no adult chatbot accounts; ChatGPT
// needs a parent's permission under 18; Claude 18+), and an original project in which a child builds a tiny
// nearest-neighbour model and watches lopsided examples make it unfair.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ai-course-for-kids-germany/):
//  - KMK, Bildung in der digitalen Welt (FACTS 100 to 103, fetched 2 November 2026): 2016 strategy "Bildung in der
//    digitalen Welt"; 2021 recommendation "Lehren und Lernen in der digitalen Welt"; "In dem 2026 verabschiedeten
//    KMK-Kompetenzrahmen ... um KI-bezogene Kompetenzen ergänzt"; "Handlungsempfehlung für die Bildungsverwaltung zum
//    Umgang mit Künstlicher Intelligenz in schulischen Bildungsprozessen von 2024".
//  - first-lego-league.org/de/wandel-und-zukunft (FACTS 203, 205, 207): LEGO League from 2027/28; Future Edition "basiert
//    auf den LEGO® Education „Informatik & KI“-Sets"; "ein MINT-Bildungsprogramm für alle von 5 bis 16".
//  - bw-ki.de/teilnahmebedingungen (FACTS 209): BWKI for "Schülerinnen und Schüler der Sekundarstufe I und II".
//  - content/ai-tool-age-audit.json (vendor pages quoted verbatim, audited 2026-07-15): ChatGPT "You must be at least 13
//    years old ... If you are under 18 you must have your parent or legal guardian's permission" (openai.com row terms);
//    Claude "You must be at least 18 years old" (anthropic.com consumer terms); Gemini "You must be 13 (or the applicable
//    age in your country)" and "You still can't access the Gemini web app with a Google Account managed by Family Link",
//    floor 16 in Germany per the audit; Teachable Machine, no floor for the tool, Google Account (13+) only to save;
//    Machine Learning for Kids "Students cannot create their own accounts."
//  - scratchfoundation.org/ai (fetched 3 November 2026): "right now, we are not training any AI models on Scratchers' data."
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own material and calculations (scratchpad de/w/G3/ack/v1.py, v12.py, python3 -I, Python 3.14.8): the fruit
// measurements are invented and labelled ours. Output: "Fair examples, k=3: 8 of 8"; "Lopsided examples, k=1: 7 of 8";
// "Lopsided examples, k=3: 4 of 8"; four "Wrong:" lines, every test pear called an apple. Example slots: 14:45 = 19:15 /
// 18:15; Sunday 12:00 = 16:30 / 15:30.
// Lesson family: a machine learns only from its examples; lopsided examples give lopsided answers.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# Our own measurements, invented for this lesson: (height cm, width cm, label)',
  'train = [',
  '    (7.0, 7.5, "apple"), (6.5, 7.0, "apple"), (7.5, 8.0, "apple"),',
  '    (6.0, 6.8, "apple"), (7.2, 7.0, "apple"), (8.0, 8.2, "apple"),',
  '    (10.0, 6.5, "pear"), (11.5, 7.0, "pear"), (9.0, 6.0, "pear"),',
  '    (12.0, 7.5, "pear"), (9.5, 6.8, "pear"), (10.5, 6.2, "pear"),',
  ']',
  'test = [',
  '    (6.8, 7.2, "apple"), (7.8, 7.6, "apple"), (8.5, 8.0, "apple"), (6.2, 6.5, "apple"),',
  '    (10.8, 6.6, "pear"), (9.2, 6.4, "pear"), (8.6, 6.9, "pear"), (11.0, 7.4, "pear"),',
  ']',
  '',
  'def distance(a, b):',
  '    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** 0.5',
  '',
  'def guess(fruit, examples, k):',
  '    nearest = sorted(examples, key=lambda e: distance(fruit, e))[:k]',
  '    votes = [e[2] for e in nearest]',
  '    if votes.count("apple") > votes.count("pear"):',
  '        return "apple"',
  '    return "pear"',
  '',
  'def score(examples, k):',
  '    right = sum(1 for f in test if guess(f, examples, k) == f[2])',
  '    return str(right) + " of " + str(len(test))',
  '',
  'print("Fair examples, k=3:", score(train, 3))'
].join('\n');

const V2 = [
  'lopsided = train[:6] + train[6:7]   # six apples, only one pear',
  'print("Lopsided examples, k=1:", score(lopsided, 1))',
  'print("Lopsided examples, k=3:", score(lopsided, 3))',
  'for f in test:',
  '    if guess(f, lopsided, 3) != f[2]:',
  '        print("Wrong:", f[0], "cm by", f[1], "cm is a", f[2], "but the model says", guess(f, lopsided, 3))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'AI course for kids' },
  slug: 'ai-course-for-kids-germany',
  code: 'ack',
  accent: '#543F75',
  accentRationale: 'AI course for kids in Germany: a deep indigo #543F75, a shade darker and bluer than the Python page violet and well apart from the AI and machine learning page plum; contrast 7.27 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'AI course for kids in Germany',
  title: 'AI Course for Kids in Germany: How Machines Learn, in English',
  description: 'An AI course for kids in Germany aged 8 to 14, live online in English: how machines learn, which AI tools allow children, and a model your child builds and tests.',
  ogDescription: 'AI for children in Germany, taught live in English as understanding rather than chatbot use: what German schools are now asked to teach about AI, which tools a child under 13 may use, and a tiny model that turns unfair when its examples are lopsided.',
  twitterDescription: 'AI literacy for children in Germany, live in English: how machines learn, age rules for AI tools, and a model kids build.',
  pageName: 'AI Course for Kids in Germany',
  webPageDescription: 'A guide for parents in Germany of children aged about 8 to 14 to learning what AI is and how it learns, built on KMK pages, the FIRST LEGO League Germany notice, the providers\' own age terms and an original Python project.',
  courseDescription: 'A live online AI literacy course in English for children in Germany aged about 8 to 14: how machines learn from examples, where they go wrong, and small models built by the child, with no adult chatbot accounts, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'AI for kids',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#tools', label: 'Ages' },
    { href: '#model', label: 'Model' },
    { href: '#thinking', label: 'Thinking' }
  ],
  eyebrow: 'Germany &middot; AI literacy for children &middot; Ages 8 to 14',
  h1: 'AI course for kids in Germany',
  lede: 'Children in Germany hear about AI every day, from the news, from older siblings and from the apps their parents use. Very few have been shown how it actually works. This page is about that: what German education policy now says children should learn about AI, why most AI chatbots are not meant for a child under 13, and a project in which a ten year old builds a tiny model, tests it, and then watches it become unfair because of the examples it was given.',
  secondaryCta: { href: '#model', label: 'See the model project' },
  wa: 'Hello Modern Age Coders, our child in Germany is curious about AI. Could we book a free first class in AI for kids, in English?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; AI understood and built, not just used',
  spec: [
    ['Ages', 'About 8 to 14'],
    ['Focus', 'How machines learn, and where they fail'],
    ['Chatbots', 'No adult chatbot accounts'],
    ['Tools', 'Scratch, Python, child-safe trainers'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'What this is',
  capsule: 'At Modern Age Coders, the AI course for children in Germany is a live online class in English for children of about 8 to 14 that teaches how AI works: how a machine learns from examples, why it makes mistakes and how to test it, using our AI Literacy for Kids course. Children build small models themselves and never need an adult chatbot account. One mentor adapts to their pace and accent, whether they learn with fifteen to twenty classmates or alone.',

  picks: {
    eyebrow: 'AI courses for children',
    h2: 'Three AI courses for children in Germany',
    lede: 'One course built entirely around understanding AI, one that adds typed Python and small AI projects, and one that mixes Scratch games with first AI ideas.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'ACK / 01', title: 'AI Literacy for Kids', note: 'Ages 8 to 14. What AI is, how it learns from examples, how to test it and when not to trust it, taught without adult chatbot accounts.' },
      { course: 'python-ai-kids-masterclass', code: 'ACK / 02', title: 'Python and AI for Kids', note: 'For children of about 9 and up. Typed Python first, then small AI projects like the fruit model on this page.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'ACK / 03', title: 'Vibe coding for kids', note: 'Ages 8 to 12. Scratch games with simple AI ideas, for children who want to make things while they learn.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'Schools and AI',
      h2: 'What do German schools teach children about AI?',
      lede: 'AI is now officially part of what German schools are asked to teach, but for younger children it is a direction, not yet a weekly lesson.',
      body: [
        { kind: 'two',
          leftH3: 'What the KMK has decided',
          left: [
            'The Kultusministerkonferenz set a shared framework for digital education in 2016, called "Bildung in der digitalen Welt", and added a recommendation on teaching and learning in a digital world in 2021.',
            'In 2026 the KMK adopted an updated competence framework that, in its own words, extends the areas of the 2016 strategy "um KI-bezogene Kompetenzen", with AI-related competences. Since 2024 there has also been a KMK recommendation for education administrations on handling artificial intelligence in school learning.'
          ],
          rightH3: 'What that means for a child of 8 to 12',
          right: [
            'A framework tells schools what to aim for; it does not put a lesson on your child\'s timetable tomorrow. Most children in Grundschule today meet AI only through conversations at home.',
            'Children who want to understand AI early, before it arrives at school as a topic, need someone to show them what is happening inside it. That is what this course is for.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'AI in German education and children\'s programmes, from the organisers\' own pages', head: ['Year', 'What', 'Source'], rows: [
          ['2016', 'KMK strategy "Bildung in der digitalen Welt"', 'KMK'],
          ['2021', 'KMK recommendation "Lehren und Lernen in der digitalen Welt"', 'KMK'],
          ['2024', 'KMK recommendation for administrations on AI in school learning', 'KMK'],
          ['2026', 'Updated KMK competence framework with AI-related competences', 'KMK'],
          ['2027/28', 'FIRST LEGO League continues as LEGO League; its Future Edition uses LEGO Education "Informatik & KI" sets', 'HANDS on TECHNOLOGY'],
          ['Every year', 'Bundeswettbewerb Künstliche Intelligenz, for Sekundarstufe I and II pupils', 'BWKI']
        ] },
        { kind: 'source', html: 'Sources: KMK, Bildung in der digitalen Welt; FIRST LEGO League Germany, Wandel und Zukunft, which describes the programme as STEM for everyone "von 5 bis 16"; Bundeswettbewerb Künstliche Intelligenz, Teilnahmebedingungen. All read on 2 November 2026. We are not connected with any of these bodies.' }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'Age rules',
      h2: 'Which AI tools can a child under 13 use in Germany?',
      lede: 'Fewer than most parents assume. The big chatbots set their own minimum ages in their terms, and none of them is designed for a primary-school child.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in each provider\'s own terms, and what they mean for a child of 8 to 12', head: ['Tool', 'What the provider\'s terms say', 'For a child of 8 to 12'], rows: [
          ['ChatGPT', 'At least 13; under 18 only with a parent\'s or guardian\'s permission', 'Not for this age group'],
          ['Claude', 'At least 18, or higher where local law requires', 'Not for children or teenagers'],
          ['Gemini', '13 or the age that applies in the country (16 in Germany in our audit); no Gemini web app for Family Link accounts', 'Not for this age group'],
          ['Teachable Machine', 'No age for the tool itself; a Google Account, 13 and up, only to save work', 'Usable with a parent, without signing in'],
          ['Machine Learning for Kids', 'Students cannot create their own accounts; teachers or schools set them up', 'Usable through a teacher or class']
        ] },
        { kind: 'source', html: 'Source: each provider\'s own terms or help pages, quoted word for word in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> (audited 15 July 2026). Terms change; check the provider\'s page before signing a child up. This is a summary of what providers say, not legal advice.' },
        { kind: 'p', mt: true, html: 'So in our classes for children under 13, nobody opens a chatbot account. We do not need one. To understand AI, a child does not have to talk to a large language model; they have to see, in something small enough to follow, how a computer can learn a rule from examples and where that goes wrong. Children build those small models themselves, in Scratch and in Python, and sometimes train a picture classifier in the browser with a parent beside them.' }
      ]
    },
    {
      id: 'model',
      tint: 'tint',
      eyebrow: 'Build a model',
      h2: 'Can a child build an AI that tells apples from pears?',
      lede: 'Yes, in about thirty lines of Python. And the most valuable moment comes when the child makes it worse on purpose, by changing nothing but the examples it learns from.',
      body: [
        { kind: 'two',
          leftH3: 'The idea',
          left: [
            'At a German Wochenmarkt in autumn there are crates of apples and pears side by side. Measure a fruit\'s height and width, and you can usually tell which it is: apples are about as wide as they are tall; pears are taller than they are wide.',
            'Our model learns that without being told. It keeps a list of measured fruit with their names, and for a new fruit it looks at the closest examples and lets them vote. This is called nearest neighbours, and it is a real machine-learning method.'
          ],
          rightH3: 'The data',
          right: [
            'The measurements are ours, invented for the lesson and written in centimetres: twelve fruit to learn from, six apples and six pears, and eight more kept back for testing, four of each.',
            'Keeping test fruit apart matters. A model that is only checked on the fruit it learned from will always look clever.'
          ] },
        { kind: 'code', label: 'Version 1: learn from fair examples', lang: 'Python', code: V1, note: 'It prints: <code>Fair examples, k=3: 8 of 8</code>. With three neighbours voting, every test fruit is named correctly.' },
        { kind: 'p', mt: true, html: 'Children are delighted, and that is when we change one thing. We keep all six apples but give the model only one pear to learn from, the way a collection of photos can end up with far more of one thing than another. The code that learns is exactly the same.' },
        { kind: 'code', label: 'Version 2: learn from lopsided examples', lang: 'Python', code: V2, note: 'After Version 1, it prints: <code>Lopsided examples, k=1: 7 of 8</code>, <code>Lopsided examples, k=3: 4 of 8</code>, then four lines, starting with <code>Wrong: 10.8 cm by 6.6 cm is a pear but the model says apple</code>. Every pear in the test is called an apple.' },
        { kind: 'table', mt: true, numCols: [2, 3], caption: 'Same code, different examples (our results)', head: ['Examples the model learned from', 'Neighbours voting', 'Test fruit right', 'Pears right'], rows: [
          ['Six apples, six pears', '3', '8 of 8', '4 of 4'],
          ['Six apples, one pear', '1', '7 of 8', '3 of 4'],
          ['Six apples, one pear', '3', '4 of 8', '0 of 4']
        ] },
        { kind: 'source', html: 'Our own invented data and our own results, from Python 3.14. The method is k nearest neighbours with two measurements per fruit.' },
        { kind: 'p', mt: true, html: 'Why does the last row fail so badly? With three neighbours voting and only one pear in its memory, the model can never find two pears to outvote the apples, so it can never answer "pear" at all. Nothing in the code is broken. The examples are. Children understand straight away what this means for any AI: it can only be as fair as what it learned from, and someone has to check.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 9, at the kitchen table.</strong> Measure five apples and five pears with a ruler and write the numbers down. Can you find a rule that sorts them? Does it work on a sixth fruit?',
          '<strong>Ages 9 to 11, Scratch.</strong> Put the measurements into two lists and make a sprite that finds the closest fruit to a new one and says its name.',
          '<strong>Ages 11 to 14, Python.</strong> Run Version 1 and Version 2, then add two more pears to the lopsided list and predict the new score before running it.',
          '<strong>Going further.</strong> Add a third kind of fruit, quinces, and invent measurements for them. What happens to the vote when there are three kinds?'
        ] }
      ]
    },
    {
      id: 'thinking',
      eyebrow: 'Thinking first',
      h2: 'How do children learn to think about AI, not just use it?',
      lede: 'By building small versions themselves and asking hard questions of them. These are the habits we teach, in every lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask where it learned', p: 'Every model learned from examples. Children practise asking: which examples, how many, and who chose them? The fruit project makes the question concrete.' },
          { h3: 'Test on something new', p: 'A model that is right about what it has seen proves nothing. Children always keep test examples apart and count how often the model is right on those.' },
          { h3: 'Explain it yourself', p: 'If a child cannot explain an answer, they do not own it, wherever it came from. We never let children hand in work an AI produced for them.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors teach from India and only in English. AI has its own small vocabulary, examples, training, testing, accuracy, bias, and children pick it up in English quickly because it is the same vocabulary they will meet everywhere later. A child at a German school who also learns the German words at school ends up with both.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Two sample AI slots and the matching hour in India', head: ['German clock', 'Indian clock now', 'Indian clock after 28 March 2027'], rows: [
          ['Weekday 14:45', '19:15', '18:15'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Germany is on MEZ, UTC+1, until summer time starts on 28 March 2027, then on MESZ, UTC+2, as set by the Einheitenzeitgesetz; it last left summer time on 25 October 2026. With India fixed at UTC+5:30, Indian clocks run 4 h 30 ahead of German ones this winter and 3 h 30 ahead from spring. Samples only; no batch is pinned to them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five steps to understanding AI',
    lede: 'Our own milestones for children learning about AI, from first idea to a model they can criticise.',
    table: { caption: 'AI literacy milestones for children (ours)', head: ['Step', 'Usual age', 'Your child can'], rows: [
      ['1. Spot it', '8 to 9', 'Say which everyday things use AI and which just follow fixed rules'],
      ['2. Teach it', '9 to 10', 'Train a simple classifier with examples, with a parent or in class'],
      ['3. Test it', '10 to 11', 'Keep test examples apart and count how often the model is right'],
      ['4. Break it', '11 to 12', 'Change the examples on purpose and explain why the model got worse'],
      ['5. Judge it', '12 to 14', 'Say what a model cannot know and when a person must check it']
    ] },
    left: { h3: 'For parents', ps: [
      'Step 4 is the fruit project. A child who has broken a model with lopsided examples will never again assume an AI answer is neutral.',
      'We judge progress by the models your child can make and defend, not by apps opened.'
    ] },
    right: { h3: 'For children', ps: [
      'An AI only knows what it was shown. Always ask what that was.',
      'If the model is right about everything it has seen, test it on something it has not.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for curious children',
    h2: 'Nine more courses for children curious about AI and coding',
    lede: 'Each is live and in English, with one mentor, and none asks a child under 13 to use an adult AI account.',
    bands: [
      { num: 'I', h3: 'Thinking skills', sub: 'Ages 6 to 12', courses: [
        { code: 'ACK / THINK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Patterns and logic for 6 to 9, the ground AI ideas stand on.' },
        { code: 'ACK / THINK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Rules, steps and patterns, practised in puzzles.' },
        { code: 'ACK / THINK / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'German informatics competitions', blurb: 'From Biber puzzles towards the BWKI later on.' }
      ] },
      { num: 'II', h3: 'Building with code', sub: 'Ages 6 to 12', courses: [
        { code: 'ACK / BUILD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'The block coding a child needs before simple models.' },
        { code: 'ACK / BUILD / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A full year from Scratch to apps and first AI ideas.' },
        { code: 'ACK / BUILD / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'A team project with an AI twist, ending at a free hackathon for 8 to 12 year olds.' }
      ] },
      { num: 'III', h3: 'Maths and more', sub: 'Ages 9 to 15', courses: [
        { code: 'ACK / MORE / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Distances, averages and chance in Python, the maths inside AI.' },
        { code: 'ACK / MORE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'Build and publish a page about your own project.' },
        { code: 'ACK / MORE / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion, Klasse 5 to 10', blurb: 'School Informatik in English, alongside the school course.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A week of AI lessons',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'Early or late afternoon in Germany, after school.' },
      { time: 'Sundays', l: 'A midday slot for a longer model-building session.' },
      { time: 'Private', l: 'Your child alone with the mentor, booked around family life.' }
    ],
    cells: [
      { h3: 'No chatbot accounts', p: 'Children under 13 never need one.' },
      { h3: 'Build, then test', p: 'Every model is checked on new examples.' },
      { h3: 'Same mentor', p: 'One person who knows your child all year.' },
      { h3: 'Plain English', p: 'AI words explained simply, then used.' },
      { h3: 'Honest about limits', p: 'Children learn when AI is wrong, not only when it works.' },
      { h3: 'Parent notes', p: 'What was built and what was learned.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Children who start with AI ideas young go on to bigger projects. A few are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Our families\' Google reviews, kept exactly as written.',

  fees: {
    h2: 'AI course fees for families in Germany',
    lede: 'The fee is paid month by month and each month includes eight live lessons. You see it here in euro, using the European Central Bank reference rate as a guide; the charge goes through in US dollars and is converted by your bank, so the final euro sum can be marginally different.',
    free: ['A free first AI lesson', 'A tiny model trained together', 'No card asked for'],
    group: ['Fifteen to twenty children of a similar age', 'One mentor all year', 'Two lessons a week', 'Monthly, stop at any month\'s end'],
    one: ['Your child with one mentor', 'Projects shaped by your child\'s questions', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'What parents in Germany ask about AI for kids',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only, with mentors based in India. AI has a small vocabulary of its own, and the mentor introduces each word simply, at your child\'s pace and with an ear for their accent.' },
      { q: 'Will my child use ChatGPT or other chatbots?', a: 'Not in classes for under-13s. Under OpenAI\'s terms, ChatGPT users must be 13 or older and need a parent\'s permission until 18; Anthropic\'s terms set 18 for Claude. Children learn how AI works by building small models instead.' },
      { q: 'What age is the AI course for?', a: 'Our AI Literacy for Kids course is for about 8 to 14. Younger children start with patterns and sorting games; from about 10 they build and test small models in Scratch or Python.' },
      { q: 'Do German schools teach AI?', a: 'The KMK adopted an updated competence framework in 2026 that adds AI-related competences to its digital education strategy, and published a recommendation on AI in school learning in 2024. For most children of 8 to 12 it is not yet a weekly lesson.' },
      { q: 'Does my child need to code already?', a: 'No. The first lessons need no code at all. Children who already know Scratch or Python move faster into building models, but beginners are welcome.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. At 14:45 in Germany the mentor\'s clock reads 19:15, until 28 March 2027.' },
      { q: 'Is this about using AI to do homework?', a: 'No, the opposite. We teach children to understand and question AI, and we never let them hand in work an AI produced. A child who knows how a model learns is much harder to fool with one.' },
      { q: 'Which AI tools are suitable for children?', a: 'Tools built for classrooms, such as Teachable Machine, which trains in the browser without signing in, and Machine Learning for Kids, where teachers set up accounts. Our AI tools age guide quotes each provider\'s own terms.' },
      { q: 'How are fees shown and charged?', a: 'We show the monthly fee in euro, based on the European Central Bank reference rate. The card is then charged in US dollars, and your bank\'s conversion may land a few cents away from our figure. Nothing is charged for the first lesson.' },
      { q: 'Can my child enter an AI competition later?', a: 'Yes. The Bundeswettbewerb Künstliche Intelligenz is open to pupils in Sekundarstufe I and II. Children who build models in our course have a head start; we are not connected with the competition.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on AI and coding for children and families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The hub that links all our Germany pages.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'For teenagers and adults.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Each provider\'s age rule, quoted.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for young pupils', p: 'Our general page on AI literacy.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Project ideas for different ages.' },
      { href: '/python-classes-for-kids-germany', label: 'Python for kids in Germany', p: 'The language children build models in.' }
    ]
  },

  start: {
    h2: 'Book a free AI lesson',
    lede: 'In the free lesson your child sorts a few examples with the mentor and sees a tiny model learn from them. The mentor then suggests the course and group that fit.',
    readFirst: 'To read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our lessons, and the <a class="ag-inline-link" href="/courses/ai-literacy-for-kids-course">AI Literacy for Kids syllabus</a> sets out the topics.',
    note: 'Our mentors teach from India, online and in English. A WhatsApp message gets the quickest reply.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'AI for children', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-literacy-for-elementary-students', label: 'AI literacy' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Six apples, one pear, no fair answer'
  },

  personalityCss: `
.ag-root.ag-ack .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-ack .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ack .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ack .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ack .ag-code-head span { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'KMK, Bildung in der digitalen Welt (2016 strategy, 2021 recommendation, 2024 AI recommendation, 2026 framework); FIRST LEGO League Germany, Wandel und Zukunft; BWKI Teilnahmebedingungen; providers\' own terms as quoted in content/ai-tool-age-audit.json; Scratch Foundation AI page; Einheitenzeitgesetz; read 2 and 3 November 2026.',
    localProject: 'Apples and pears: an original Python nearest-neighbour model on our own invented measurements that names all eight test fruit correctly (8 of 8) when it learns from six apples and six pears, and then, with the same code but only one pear to learn from and three neighbours voting, names every pear an apple (4 of 8). Lesson family: lopsided examples give lopsided answers.',
    requiredMentions: ['Fair examples, k=3: 8 of 8', 'Lopsided examples, k=1: 7 of 8', 'Lopsided examples, k=3: 4 of 8', 'Wrong: 10.8 cm by 6.6 cm is a pear but the model says apple', 'the model can never find two pears to outvote the apples', 'LEGO Education "Informatik & KI" sets', 'Machine Learning for Kids', 'Six apples, one pear, no fair answer'],
    sources: [
      { claim: 'KMK digital strategy 2016, 2021 and 2024 recommendations, 2026 framework with AI competences.', url: 'https://www.kmk.org/themen/bildung-in-der-digitalen-welt.html' },
      { claim: 'LEGO League from 2027/28; Future Edition on Informatik & KI sets; ages 5 to 16.', url: 'https://www.first-lego-league.org/de/wandel-und-zukunft' },
      { claim: 'BWKI for Sekundarstufe I and II.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'ChatGPT 13 with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude 18 or older.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Gemini age and Family Link exclusion.', url: 'https://support.google.com/gemini/' }
    ],
    rejectedClaims: [
      'Any chatbot use by under-13s in class: refused; the page teaches how machines learn instead.',
      'Interpreting GDPR consent ages for families: legal advice, left out.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the KMK, BWKI, LEGO, FIRST or any AI provider: none.'
    ]
  }
};
