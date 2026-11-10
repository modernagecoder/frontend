'use strict';
// SHIP: market | AI course for kids in Peru: what children 6 to 12 can learn, safely, in English | a decision tree built by hand: best question first, then an animal it never met
// AI course for kids, Peru (ag- English subject door, Peru cluster row PE019, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: parents in Peru of children aged 6 to 12 who search "ai course for kids", "artificial intelligence for kids
// online", "what age can a child learn AI" (KEYWORDS.md section 6 style questions). Spanish twin (live):
// curso-de-inteligencia-artificial-para-ninos-peru (word-score classifier); this page has its own spine and lesson.
// Spine: what "AI for a child" means (AI4K12 Five Big Ideas), how many Peruvian children are online and on which device
// (INEI ENAHO II Trimestre 2026), what the CNEB does and does not teach, which AI tools a child may use (vendor terms),
// what UNICEF's 2025 guidance asks of anyone building AI for children, Peru's 2025 AI regulation as context, one lesson.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-course-for-kids-peru/, read 9 Nov 2026):
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el uso de Internet fue menor
//    entre los niños de 6 a 11 años (68,2%)"; table 2.1 row "60,1 61,7 61,5 68,2 6,7" (2023 to 2026, change 2026/25); "el de
//    12 a 18 años con un 92,5%"; "el 90,2% de la población usuaria de Internet de 6 y más años usó Internet a través de un
//    teléfono celular"; "laptop (18,9%), computadora (14,0%), tablet (2,9%)"; "el 36,4% de los hogares del país disponía de al
//    menos una computadora"; "el 93,1% usó Internet con fines recreativos".
//  - AI4K12 home https://ai4k12.org/ (ai4k12.txt): "Big Idea 1 – Perception", "Big Idea 2 – Representation & Reasoning",
//    "Big Idea 3 – Learning", "Big Idea 4 – Natural Interaction", "Big Idea 5 – Societal Impact"; "4/16/2019: “Five Big
//    Ideas in AI” poster and graphic released."; "organized in K-12 grade band progression charts".
//  - UNICEF Innocenti, Guidance on AI and children (unicef-ai.txt): "Version 3.0"; "the guidance offers 10 requirements for
//    child-centered AI"; "Prepare and skill children for present and future developments in AI"; "Protect children's data
//    and privacy"; "The draft policy guidance ( version 1.0 ) was released in September 2020"; "December 2025".
//  - Vendor terms via content/ai-tool-age-audit.json (copy saved): ChatGPT "You must be at least 13 years old ... If you are
//    under 18 you must have your parent or legal guardian's permission"; Claude "You must be at least 18 years old";
//    Gemini "You must be 13 (or the applicable age in your country) or over"; Teachable Machine note "Trains in the browser
//    with no sign-in needed".
//  - CNEB (FACTS 33, 34; cneb text): "28 Se desenvuelve en entornos virtuales generados por las TIC"; "Competencias
//    transversales a las áreas"; no computing area in the plan of studies.
//  - DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, 9 September 2025; ds115.txt): art. 12 "deben considerar
//    plenamente las necesidades diferenciadas de mujeres, niñas, niños y adolescentes"; art. 13.2 "uso responsable, ético,
//    transparente e inclusivo de la IA para desarrollo de las competencias estudiantiles en el marco del Currículo Nacional".
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30.
// Our own calculations: 68.2 - 61.5 = 6.7 points (matches INEI's printed change); 100 - 68.2 = 31.8% of 6 to 11 year olds
// not online in the quarter (labelled ours).
// Code (arbol.py, arbol2.py, python3 -I): v1 prints the tree "four_legs?" / "swims?" / "-> frog" ... "-> dolphin" and
// "bat -> dolphin"; v2 (bat added to the table) ends "swims?" / "-> dolphin" / "-> bat" and "bat -> bat".
// Lesson family: a decision tree built by hand: pick the question that splits the group most evenly, then show the tree
// a case it never met (the bat is called a dolphin), then add the case and watch the tree grow a new question.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'animals = {',
  '    "condor":      {"feathers": 1, "swims": 0, "four_legs": 0, "big": 1},',
  '    "hummingbird": {"feathers": 1, "swims": 0, "four_legs": 0, "big": 0},',
  '    "llama":       {"feathers": 0, "swims": 0, "four_legs": 1, "big": 1},',
  '    "guinea pig":  {"feathers": 0, "swims": 0, "four_legs": 1, "big": 0},',
  '    "dolphin":     {"feathers": 0, "swims": 1, "four_legs": 0, "big": 1},',
  '    "frog":        {"feathers": 0, "swims": 1, "four_legs": 1, "big": 0},',
  '}',
  '',
  'def best_question(names):',
  '    pick, best_size = None, len(names)',
  '    for q in ["feathers", "swims", "four_legs", "big"]:',
  '        yes = [n for n in names if animals[n][q]]',
  '        bigger_half = max(len(yes), len(names) - len(yes))',
  '        if bigger_half < best_size:',
  '            pick, best_size = q, bigger_half',
  '    return pick',
  '',
  'def build(names, depth=0):',
  '    if len(names) == 1:',
  '        print("  " * depth + "-> " + names[0])',
  '        return names[0]',
  '    q = best_question(names)',
  '    yes = [n for n in names if animals[n][q]]',
  '    no = [n for n in names if not animals[n][q]]',
  '    print("  " * depth + q + "?")',
  '    return {"q": q, "yes": build(yes, depth + 1), "no": build(no, depth + 1)}',
  '',
  'tree = build(list(animals))',
  '',
  'def guess(tree, thing):',
  '    while isinstance(tree, dict):',
  '        tree = tree["yes"] if thing[tree["q"]] else tree["no"]',
  '    return tree',
  '',
  'bat = {"feathers": 0, "swims": 0, "four_legs": 0, "big": 0}',
  'print("bat ->", guess(tree, bat))'
].join('\n');

const V1_OUT = [
  'four_legs?',
  '  swims?',
  '    -> frog',
  '    big?',
  '      -> llama',
  '      -> guinea pig',
  '  feathers?',
  '    big?',
  '      -> condor',
  '      -> hummingbird',
  '    -> dolphin',
  'bat -> dolphin'
].join('\n');

const V2 = [
  '# Version 2: one new row in the table, nothing else changes',
  '    "bat":         {"feathers": 0, "swims": 0, "four_legs": 0, "big": 0},',
  '',
  '# the last lines of the new tree, and the new answer:',
  '#   feathers?',
  '#     big?',
  '#       -> condor',
  '#       -> hummingbird',
  '#     swims?',
  '#       -> dolphin',
  '#       -> bat',
  '# bat -> bat'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'AI course for kids' },
  slug: 'ai-course-for-kids-peru',
  code: 'aki',
  accent: '#005C40',
  accentRationale: 'AI course for kids, Peru: a deep forest green #005C40, the colour of the cloud forest on the eastern Andean slopes where the hummingbirds of the lesson live; it holds more than 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI course for kids in Peru',
  title: 'AI Course for Kids in Peru: Live Online Classes in English',
  description: 'An AI course for kids in Peru aged 6 to 12: live online classes taught in English, where children build and test small AI programs instead of chatting to bots.',
  ogDescription: 'What artificial intelligence a child of 6 to 12 can really learn, how many Peruvian children are online and on which device, which AI tools a child may use, and a decision-tree lesson children build by hand.',
  twitterDescription: 'Live AI classes in English for children in Peru aged 6 to 12: build it, test it, understand it.',
  pageName: 'AI Course for Kids in Peru',
  webPageDescription: 'A guide for parents in Peru choosing an AI course for a child of 6 to 12, built from INEI household data for 2026, the AI4K12 Five Big Ideas, UNICEF guidance on AI and children (version 3.0), the CNEB, Peru\'s 2025 AI regulation and vendor age terms, with an original decision-tree lesson.',
  courseDescription: 'Live online artificial intelligence classes for children aged 6 to 12 in Peru, taught in English: how machines sort, guess and learn, built first on paper and in Scratch, then in short Python programs, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI course for kids',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#what', label: 'What kids learn' },
    { href: '#online', label: 'Kids online in Peru' },
    { href: '#tools', label: 'Which AI tools' },
    { href: '#project', label: 'Decision tree lesson' },
    { href: '#safe', label: 'Safety' }
  ],
  eyebrow: 'Peru &middot; Artificial intelligence &middot; Ages 6 to 12',
  h1: 'AI course for kids in Peru',
  lede: 'Most children in Peru meet artificial intelligence as a voice that answers back. Very few get to see inside it. This page is for parents of children aged 6 to 12 who want the second thing: a course where a child builds a tiny machine that guesses, watches it get something wrong, and works out why. Below you will find what a child can realistically learn at each age, what INEI\'s 2026 figures say about how Peruvian children get online, which AI tools a child may and may not use, and one complete lesson.',
  secondaryCta: { href: '#project', label: 'See the decision tree lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and our child is interested in your AI course for kids. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every lesson taught in English',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Begins with', 'Sorting games, then Scratch'],
    ['Typed code', 'Python from about 9 or 10'],
    ['Chatbot accounts', 'None for under 13s'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Trial', 'One free class']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders teaches an AI course for kids in Peru: live online classes, taught in English, for children aged 6 to 12. Children learn how a machine sorts, guesses and learns by building small projects themselves, first with cards and Scratch blocks and later in short Python programs, rather than by chatting to an adult AI app. Each class has a mentor based in India and either a group of fifteen to twenty classmates close in age or just your child, at an hour you pick on the Peru clock. A free first class shows whether it fits.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which AI course suits which child?',
    lede: 'The right first course depends less on the child\'s age than on whether they can read comfortably and type a little. These three cover the whole range from 6 to 12.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'AKI / 01', title: 'Coding for Kids, with AI projects', note: 'Suits 6 to 9 year olds. Scratch blocks first, so nobody has to type, and the AI ideas arrive as games: a sprite that sorts, a quiz that keeps score of its own mistakes.' },
      { course: 'ai-literacy-for-kids-course', code: 'AKI / 02', title: 'AI Literacy for Kids', note: 'For 8 to 14 year olds who want to understand AI rather than just use it: how a machine learns from examples, why it gets things wrong, and how to check an answer before trusting it.' },
      { course: 'python-ai-kids-masterclass', code: 'AKI / 03', title: 'Python and AI for Kids', note: 'For confident readers from about 9 or 10. Real typed Python, turtle drawings, then small programs that sort and predict, including the decision tree further down this page.' }
    ]
  },

  sections: [
    {
      id: 'what',
      eyebrow: 'What kids learn',
      h2: 'What can a child of 6 to 12 actually learn about AI?',
      lede: 'Far more than how to type a question into a chatbot. A child can learn the ideas that sit underneath every AI system, as long as each idea is something they can touch, sort or build.',
      body: [
        { kind: 'p', html: 'A useful map comes from AI4K12, a United States initiative that writes guidelines for teaching AI in school from kindergarten to the end of secondary. In 2019 it published a poster of what it calls the "Five Big Ideas in AI", and its guidelines are arranged in grade-band progression charts, so the same idea returns at a deeper level as a child grows. We are not connected with AI4K12; we use its five ideas because they are clear, and because they make a parent\'s question easier to answer: which of these can my child do now?' },
        { kind: 'table', numCols: [], caption: 'The Five Big Ideas in AI, and what each looks like in our classes', head: ['Big Idea (AI4K12)', 'In plain words', 'Ages 6 to 8 (ours)', 'Ages 9 to 12 (ours)'], rows: [
          ['1. Perception', 'Machines take in the world through sensors', 'Which sense does a robot vacuum use? A card game', 'A Scratch sprite that reacts to sound or a colour'],
          ['2. Representation and Reasoning', 'Machines keep a model of the world and reason with it', 'Sort animal cards with yes or no questions', 'Store facts in a table and write the questions in Python'],
          ['3. Learning', 'Machines can learn from data', 'Spot the pattern in a set of pictures', 'Build a decision tree and test it on something new'],
          ['4. Natural Interaction', 'Talking to people is hard for machines', 'Why did the voice assistant mishear?', 'A chatbot with five fixed answers, and where it breaks'],
          ['5. Societal Impact', 'AI can help and harm', 'Is it fair if the game only knows some animals?', 'Who checks the answer, and what if nobody does?']
        ] },
        { kind: 'source', html: 'Source: AI4K12 (ai4k12.org), the Five Big Ideas in AI, poster first released on 16 April 2019; read on 9 November 2026. The two right-hand columns are our own classroom activities, not part of the AI4K12 guidelines.' },
        { kind: 'two', mt: true,
          leftH3: 'What we leave out on purpose',
          left: [
            'Young children do not need neural network jargon, and they do not need to train a model on their own photos. Both make a course sound impressive while teaching very little, and the second hands a child\'s images to a service that was not built for them.',
            'We also avoid "magic" demonstrations, where a screen does something clever and the child claps. If a child cannot explain, in their own words, why the machine gave its answer, the lesson has not finished.'
          ],
          rightH3: 'What we keep',
          right: [
            'Sorting, guessing, counting mistakes and fixing them. These are the moves every AI system makes, and every one of them can be acted out with cards on a table before it becomes code on a screen.',
            'The habit of asking "how would it know that?" A child who asks that question about a game, a search result or a video recommendation has understood the most important thing a course like this can teach.'
          ] }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Kids online in Peru',
      h2: 'How many children in Peru use the internet, and on what?',
      lede: 'About two in three children of primary age, mostly on a phone. INEI\'s household survey for the second quarter of 2026 puts internet use among 6 to 11 year olds at 68.2%, the lowest of any age group except people over 60, and rising faster than any other.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Share of each age group that used the internet, Peru, second quarter of each year (%)', head: ['Age group', '2023', '2024', '2025', '2026'], rows: [
          ['All aged 6 and over', '77.6', '80.0', '81.0', '84.2'],
          ['6 to 11', '60.1', '61.7', '61.5', '68.2'],
          ['12 to 18', '89.7', '91.4', '90.7', '92.5'],
          ['19 to 24', '95.6', '96.4', '96.4', '97.3']
        ] },
        { kind: 'source', html: 'Source: INEI\'s quarterly TIC household bulletin for April to June 2026, cuadro 2.1, drawn from the ENAHO survey; INEI marks the 2026 column as preliminary. INEI reports the 6 to 11 group rose 6.7 percentage points on 2025. Read on 9 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What the figures mean for a course',
          left: [
            'Subtract 68.2 from 100 and you get 31.8: our own sum says close to one primary-age child in three in Peru was not online at all during those three months. Any family reading this page is already in the connected two thirds, but the gap is a reminder that a live class needs planning, not just a link.',
            'Among everyone who goes online, INEI found that 93.1% used the internet for entertainment such as games, films and music. For most children, AI arrives the same way: inside a game, a video feed or a voice assistant, long before anyone explains it.'
          ],
          rightH3: 'The device question',
          right: [
            'INEI also reports that 90.2% of internet users aged 6 and over connect through a mobile phone, against 18.9% on a laptop, 14.0% on a desktop computer and 2.9% on a tablet. Computers are scarcer still: INEI counts one or more in just 36.4% of homes nationwide for April to June 2026.',
            'A phone is fine for watching a class, but building a program on one is miserable for a child. Before the first lesson we ask for a laptop or desktop, even a shared or borrowed one, a stable connection, and a headset if possible. For 6 and 7 year olds, a parent nearby for the first few sessions helps.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school covers',
      h2: 'Do Peruvian primary schools teach artificial intelligence?',
      lede: 'Not as a subject. Peru\'s national curriculum, the CNEB, has no computing or AI area in primary or secondary; digital skills appear as a transversal competency that every subject is meant to share.',
      body: [
        { kind: 'two',
          leftH3: 'In the curriculum',
          left: [
            'The CNEB lists competency 28, "Se desenvuelve en entornos virtuales generados por las TIC", among its competencies that cut across the subject areas. In practice that means a child may use a tablet in science or make a slideshow in communication, but nobody is required to teach how a program or an AI system works.',
            'So a ten year old in a Lima or Arequipa primary school can be a skilled user of apps and still have no idea that a recommendation is a guess based on counting. That gap is not the school\'s fault; it is simply not in the plan of studies.'
          ],
          rightH3: 'In the 2025 AI regulation',
          right: [
            'Peru regulated artificial intelligence through DS 115-2025-PCM, the regulation of Law 31814, published in El Peruano on 9 September 2025. Article 13.2 asks the government\'s digital transformation office to work with MINEDU on promoting the "uso responsable, ético, transparente e inclusivo de la IA" for student competencies within the national curriculum.',
            'Article 12 adds that digital services built on AI must take full account of the different needs of girls, boys and adolescents, among other groups. We quote both as published context about where Peru is heading. They are not legal advice, and they do not mean any course, ours included, is approved by anyone.'
          ] },
        { kind: 'p', mt: true, html: 'Our classes sit alongside school and never replace it. If you want the Spanish-language version of this guide, written separately for Peruvian parents, read our <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños</a> page; the lessons themselves are taught in English on both.' }
      ]
    },
    {
      id: 'tools',
      tint: 'tint',
      eyebrow: 'Which AI tools',
      h2: 'Which AI tools can a child under 13 use?',
      lede: 'Very few of the famous ones. The companies that make the big chatbots set minimum ages in their own terms, and a child of primary age is under almost all of them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in the vendors\' own terms, as we read them', head: ['Tool', 'What the vendor\'s terms say', 'In our kids\' classes'], rows: [
          ['ChatGPT (OpenAI)', 'At least 13; under 18 needs a parent or guardian\'s permission', 'Not used with under 13s'],
          ['Gemini (Google)', '13 or the applicable age in the country; not with a Family Link account', 'Not used with under 13s'],
          ['Claude (Anthropic)', 'At least 18', 'Never used with children or teenagers'],
          ['Teachable Machine (Google)', 'Trains in the browser with no sign-in needed', 'Used only when the mentor runs it on screen'],
          ['Scratch and plain Python', 'No AI account at all', 'Where most of the work happens']
        ] },
        { kind: 'source', html: 'Sources: OpenAI terms of use, Google Gemini help, Anthropic consumer terms and Google account help, quoted in our own AI tools age audit; read on 9 November 2026. Terms change, so check the vendor\'s page before any child signs up. More detail on the <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' },
        { kind: 'p', mt: true, html: 'This is why our AI course for kids is built mostly from things the child makes. A decision tree written in twenty lines of Python teaches more about how an AI system decides than an hour of chatting, and it involves no account, no data sent anywhere and no terms of service a child cannot legally accept.' },
        { kind: 'p', html: 'From 13, the picture changes: with a parent\'s permission, a teenager can use some AI tools under supervision, and our teen courses introduce them carefully. Under 13, the honest course teaches the ideas and leaves the adult apps alone.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'How does a child build an AI that guesses? A decision tree by hand',
      lede: 'This is a lesson we teach to children from about 9, after a first session with paper cards. The program plays "guess the animal" with yes-or-no questions, and it chooses its own questions. Then we show it an animal it has never met.',
      body: [
        { kind: 'ol', items: [
          '<strong>On paper first.</strong> Six cards: condor, hummingbird, llama, guinea pig, dolphin, frog. Each card says yes or no to four questions: has feathers, swims, has four legs, is bigger than a cat. The child must find a question that splits the pile as evenly as possible.',
          '<strong>Why evenly?</strong> A question that splits six cards into three and three always leaves at most three animals to sort; a question that splits them five and one usually leaves five. Fewer cards left means fewer questions to ask.',
          '<strong>Then in Python.</strong> The function <code>best_question</code> does exactly what the child did with the cards: it tries every question and keeps the one whose bigger half is smallest. The function <code>build</code> asks it again on each smaller pile until one animal is left.'
        ] },
        { kind: 'code', label: 'Version 1: the program chooses its own questions', lang: 'Python', code: V1, note: 'It prints the tree it built, one question per line, and finally <code>bat -&gt; dolphin</code>. The full output is below.' },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: V1_OUT, note: 'Read it from the top: the first question is "four_legs?", which splits the six animals three and three. Indented lines are the questions asked next.' },
        { kind: 'two', mt: true,
          leftH3: 'The surprise',
          left: [
            'The bat has no feathers, does not swim, does not have four legs and is not bigger than a cat. The tree asks "four_legs?" (no), then "feathers?" (no), and lands on the only animal left on that branch: <strong>bat -&gt; dolphin</strong>.',
            'Children laugh, then go quiet. The program did nothing wrong by its own rules. It had never seen a bat, so it could only answer with something it already knew. That is the honest limit of every system that learns from examples.'
          ],
          rightH3: 'The fix teaches the idea',
          right: [
            'We add one row for the bat and run the same code again. The tree grows a new question at the bottom: after "feathers?" it now asks "swims?", and the answer becomes <code>bat -&gt; bat</code>.',
            'Nothing about the code changed. Only the examples changed. A child who sees that has understood, in one afternoon, the sentence adults find hard: an AI system is only as good as what it was shown.'
          ] },
        { kind: 'code', label: 'Version 2: add the bat, keep the code', lang: 'Python', code: V2, note: 'With the bat in the table, the end of the printed tree reads <code>swims?</code>, <code>-&gt; dolphin</code>, <code>-&gt; bat</code>, and the last line is <code>bat -&gt; bat</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, cards only.</strong> Play the game with a friend using the six cards. Then add a card from your own garden or park. Did your questions still work?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a sprite that asks two yes-or-no questions and names one of four animals. Try it on an animal you did not plan for.',
          '<strong>Ages 10 to 12, Python.</strong> Add a fifth question of your own to the list in <code>best_question</code>. Does the tree choose it? Why or why not?',
          '<strong>Challenge.</strong> Find a pair of animals that no question in the list can tell apart, and explain in one English sentence what the tree would need.'
        ] },
        { kind: 'p', mt: true, html: 'The animals and their yes-or-no answers are our own simplification for a children\'s lesson; "bigger than a cat" is a judgement, and children are encouraged to argue about it. That argument is part of the lesson: somebody always decides what goes into the data.' }
      ]
    },
    {
      id: 'safe',
      tint: 'tint',
      eyebrow: 'Safety and fairness',
      h2: 'Is AI safe for children, and how do you keep a course child-centred?',
      lede: 'AI can be safe for children when adults make careful choices about tools, data and supervision. UNICEF\'s Guidance on AI and children, updated to version 3.0 in December 2025, sets out 10 requirements for child-centred AI, and three of them shape our kids\' classes directly.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Protect children\'s data and privacy', p: 'UNICEF lists this among its 10 requirements. In our classes a child never uploads photos, voice recordings or personal details to an AI service. The data in our lessons is invented by us or typed by the child, like the six animals above.' },
          { h3: 'Transparency and explainability', p: 'UNICEF asks that AI be transparent and explainable for children. We take that literally: every model a child meets in our course is small enough to print and read, so the child can point to the line that made the decision.' },
          { h3: 'Prepare and skill children', p: 'The guidance also asks adults to "prepare and skill children for present and future developments in AI". That is the purpose of the course: not to make children fans of a product, but to make them the people who understand and question it.' }
        ] },
        { kind: 'p', mt: true, html: 'UNICEF published its first draft guidance in September 2020 and a second version in 2021, before the third in December 2025. We are not connected with UNICEF; we cite its guidance because it is the most widely used child-rights framework for AI, and because parents deserve a standard they can check us against.' },
        { kind: 'p', html: 'Two classroom rules follow. Children only use AI tools whose terms allow their age, and a child\'s mentor never asks for a home address, school name or photograph. If your child is shy on camera, cameras can stay off; we need to hear them and see their screen, not their face.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Can my child learn AI in English if we speak Spanish at home?',
      lede: 'Usually yes, if they can follow simple spoken instructions. The lessons are mostly short sentences, demonstrations on a shared screen and lots of doing, and the code itself reads the same in any language.',
      body: [
        { kind: 'two',
          leftH3: 'How mentors help',
          left: [
            'Mentors slow down, repeat an instruction in simpler words and show each step before asking the child to try it. Words like "question", "yes", "no", "guess" and "wrong" turn up so often that children absorb them within a few sessions.',
            'For a 6 or 7 year old with very little English, we usually suggest one-to-one classes at first, so the mentor can pause as often as needed without holding a group back.'
          ],
          rightH3: 'What families tell us',
          right: [
            'Many parents choose an English-taught course on purpose, because the child practises listening and speaking with a reason to do it: the game only works once they understand the instruction. Our page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explains that choice in Spanish for parents.',
            'We do not teach in Spanish, and we would rather say so here than after a trial class. The free first class is the truest test: you will see in forty minutes whether your child can follow.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a child moves through AI ideas, stage by stage',
    lede: 'These stages are our own, not a school or AI4K12 standard. They help a mentor place a child and give parents a plain picture of what has been learned.',
    table: { numCols: [], caption: 'AI understanding by stage (ours)', head: ['Stage', 'Usual age', 'The child can', 'Ask them at home'], rows: [
      ['1. Sort', '6 to 7', 'Sort cards with yes-or-no questions', 'Which question did you ask first?'],
      ['2. Spot', '7 to 8', 'Find a pattern in a set of pictures', 'What made you sure?'],
      ['3. Build', '8 to 10', 'Make a Scratch game that guesses', 'When does your game guess wrong?'],
      ['4. Code', '9 to 11', 'Write a decision tree in Python', 'Why that question first?'],
      ['5. Test', '10 to 12', 'Try a case the program never saw', 'What should we add to the data?'],
      ['6. Judge', '11 and up', 'Explain who checks an AI answer', 'Would you trust it, and why?']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the bat lesson above. Children at that point begin to wonder aloud where an app gets its answers, which is precisely the instinct worth growing.',
      'Monthly notes from the mentor describe things built and ideas explained, not minutes spent on a screen.'
    ] },
    right: { h3: 'For children', ps: [
      'A machine that guesses is only as clever as the examples it has seen.',
      'If your program surprises you, that is a clue, not a failure. Find out why.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for curious children',
    lede: 'All live, all in English, each led by a mentor who stays with the child from month to month.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 10', courses: [
        { code: 'AKI / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Stories, animations and first games, three months from zero.' },
        { code: 'AKI / FIRST / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch and game ideas with gentle, supervised AI help, ages 8 to 12.' },
        { code: 'AKI / FIRST / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number puzzles and shapes that come alive in code.' }
      ] },
      { num: 'II', h3: 'Building more', sub: 'Ages 8 to 12', courses: [
        { code: 'AKI / BUILD / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Their own Roblox games, scripted line by line in Luau.' },
        { code: 'AKI / BUILD / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Web pages a child designs, codes and puts online.' },
        { code: 'AKI / BUILD / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Twelve weeks of project building before a friendly event.' }
      ] },
      { num: 'III', h3: 'Ready for the teen courses', sub: 'From 13', courses: [
        { code: 'AKI / NEXT / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'From Python to working models, when the time comes.' },
        { code: 'AKI / NEXT / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining for teens', blurb: 'Machine learning by connecting visual blocks.' },
        { code: 'AKI / NEXT / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The full language, beginner to advanced.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What does a live AI class for kids look like?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'An early hour in Peru falls in the Indian evening, an easy time for a mentor.' },
      { time: 'After school', l: 'Afternoon and evening hours in Peru work as well; tell us yours.' },
      { time: 'One to one', l: 'A single child, a single mentor, a pace that bends to them.' }
    ],
    cells: [
      { h3: 'Cards before code', p: 'Each new idea is acted out first, then built.' },
      { h3: 'Short, clear English', p: 'Instructions in small steps, shown on screen.' },
      { h3: 'Their own hands', p: 'The child drives the mouse and keyboard every class.' },
      { h3: 'Same-age groups', p: 'Seven year olds and twelve year olds learn apart.' },
      { h3: 'A note home', p: 'What your child built and what puzzled them.' },
      { h3: 'No adult AI apps', p: 'Under 13s work without chatbot accounts.' }
    ]
  },

  projectsH2: 'Where these first steps can lead',
  projectsLede: 'Children who keep going for a few years end up building things like these, made by our older students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students have written about us on Google, word for word.',

  fees: {
    h2: 'What the AI course for kids costs',
    lede: 'We price the course in US dollars and take payment by card. Your card issuer handles the switch into soles using its own exchange rate on the day of each charge, which is why two months can show slightly different totals.',
    free: ['One free trial class', 'A sorting game and a first program', 'No card details asked'],
    group: ['Fifteen to twenty children of a similar age', 'One mentor all the way through', 'Two live classes every week', 'Paid monthly; stop when you like'],
    one: ['Your child alone with a mentor', 'Projects chosen around their interests', 'Class hours your family picks']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'AI course for kids: questions parents ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No, never: the teaching language is English from the first minute to the last, live over video. Our mentors keep their sentences short, slow down for a child who needs it, get used to the way your child speaks, and demonstrate before they ask. Most Spanish-speaking children settle in within a handful of lessons.' },
      { q: 'What age can a child start an AI course?', a: 'From 6, with sorting games and Scratch blocks that need no typing. From about 9 or 10, once reading and a little typing are comfortable, children can write short Python programs such as the decision tree on this page.' },
      { q: 'Does my child chat with ChatGPT in the course?', a: 'Not under 13. OpenAI\'s terms set a minimum age of 13 and require a parent\'s permission under 18; Anthropic sets 18 for Claude. Our kids\' lessons are built from programs the child writes, which need no AI account at all.' },
      { q: 'What does a child actually build?', a: 'Small programs that sort, guess and learn from examples: a quiz that counts its own mistakes, a sprite that reacts to sound, a decision tree that plays "guess the animal". Each one is small enough for the child to explain line by line.' },
      { q: 'At what hours do the kids\' AI classes run?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru stays on UTC minus 5 all year and India on UTC plus 5:30, so 16:00 in Lima is 02:30 the next morning in India.' },
      { q: 'Does Peruvian school already teach AI?', a: 'Not as a subject. The CNEB treats digital skills as a transversal competency shared across subjects, with no computing or AI area. Peru\'s 2025 AI regulation asks for responsible AI to be promoted in the curriculum, but that is a direction, not a timetabled class.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer, a stable internet connection and ideally a headset. INEI found that 90.2% of Peruvian internet users connect by phone, but a phone is too small for building programs, so please plan a computer for class time.' },
      { q: 'How do you keep my child\'s data safe?', a: 'Children never upload photos, voice recordings or personal details to an AI service in our classes. The data they work with is invented for the lesson or typed by them. Cameras can stay off if your child prefers.' },
      { q: 'Are you connected with MINEDU or any school in Peru?', a: 'No. We are an independent online school with mentors in India, not connected with MINEDU, any school, AI4K12 or UNICEF. We do not award Peruvian qualifications; children who finish a course receive our own certificate of completion.' },
      { q: 'What happens in the free first class?', a: 'Your child plays a short sorting game, writes a first program and talks with the mentor. Then you hear the mentor\'s honest recommendation: which course, whether a group or one-to-one suits better, and which hours could work. No card details are needed to book it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages for parents',
    lede: 'Other pages that help with choosing a first course.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every course we offer families in Peru, by age.' },
      { href: '/programacion-para-ninos-de-8-anos', label: 'Programación para niños de 8 años', p: 'A Spanish guide to starting at eight.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'For bilingual, Cambridge and IB school families.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The minimum age for over a hundred AI tools.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning comes before tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free AI class for your child',
    lede: 'In the trial your child sorts a few cards, builds a first tiny program and chats with a mentor in simple English. The mentor watches how they think and how much they follow, then recommends a course and a time that suits your family.',
    readFirst: 'Rather read before you book? Our <a class="ag-inline-link" href="/how-we-teach">how we teach</a> page follows one lesson from hello to homework, and each course in the <a class="ag-inline-link" href="/courses">catalogue</a> opens its own syllabus.',
    note: 'Every class is live on video, in English, with a mentor based in India. WhatsApp us in English for a quick reply.',
    formNote: 'The trial is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'AI for young learners', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños (español)' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'It only knows what it was shown'
  },

  personalityCss: `
.ag-root.ag-aki .ag-hero h1 { max-width: 16ch; letter-spacing: -0.015em; }
.ag-root.ag-aki .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aki .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-aki .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-aki .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026; AI4K12 Five Big Ideas in AI; UNICEF Innocenti, Guidance on AI and children, version 3.0 (December 2025); MINEDU CNEB (competency 28, transversal); DS 115-2025-PCM (El Peruano, 9 September 2025), arts. 12 and 13.2; vendor terms of OpenAI, Google and Anthropic via our AI tools age audit. All read 9 November 2026.',
    localProject: 'An original Python decision tree for children: six animals (condor, hummingbird, llama, guinea pig, dolphin, frog) and four yes-or-no questions; the program picks the question that splits each pile most evenly and prints its tree ("four_legs?" first); shown a bat it never saw, it answers "bat -> dolphin"; adding one row for the bat grows a new "swims?" question and the answer becomes "bat -> bat". Plus card, Scratch and extension tasks by age. Lesson family: a decision tree built by hand, and the limit of learning from examples.',
    requiredMentions: ['bat -&gt; dolphin', 'Five Big Ideas in AI', 'Subtract 68.2 from 100', '68.2%', 'prepare and skill children for present and future developments in AI', 'best_question', 'an AI system is only as good as what it was shown', '90.2% of internet users aged 6 and over connect through a mobile phone', 'It only knows what it was shown'],
    sources: [
      { claim: 'Internet use by age group 2023 to 2026, 6 to 11 at 68.2% (+6.7), 12 to 18 at 92.5%; 90.2% connect by phone; 36.4% of households own a computer; 93.1% use the internet for entertainment.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Five Big Ideas in AI: Perception, Representation and Reasoning, Learning, Natural Interaction, Societal Impact; poster 16 April 2019; grade-band progression charts.', url: 'https://ai4k12.org/' },
      { claim: 'UNICEF Guidance on AI and children, version 3.0, December 2025; 10 requirements; version 1.0 September 2020; version 2.0 2021.', url: 'https://www.unicef.org/innocenti/reports/policy-guidance-ai-children' },
      { claim: 'CNEB competency 28 is transversal; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'DS 115-2025-PCM art. 12 (needs of girls, boys and adolescents) and art. 13.2 (responsible AI within the CNEB).', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'ChatGPT 13+ with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Gemini 13+, not with Family Link accounts.', url: 'https://support.google.com/gemini/' }
    ],
    rejectedClaims: [
      'Real animal sizes or weights in the lesson: replaced by a yes-or-no judgement ("bigger than a cat") labelled as our simplification.',
      'Any count of Peruvian children taking AI courses: no primary source; not said.',
      'That the 2025 regulation requires schools or providers to teach AI to children: it promotes, it does not require; quoted as context only, no legal advice.',
      'Affiliation with MINEDU, AI4K12, UNICEF or any school: none, and the page says so.',
      'Use of ChatGPT, Gemini or Claude with under-13s: refused under the vendors\' own terms.'
    ]
  }
};
