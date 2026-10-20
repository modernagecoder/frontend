'use strict';
// AI literacy for elementary students (ag- AI door, grades K to 5; US cluster Phase 2, row 24).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence: rows.tsv col 4 "ai literacy for elementary students"; autocomplete_us.tsv "ai literacy for students".
// Distinct from /ai-literacy-for-students (global, five abilities at 8, 13 and 16): this page is K-5, US grades, and
// anchored on the US K-12 CS Framework data strand and US classroom courses.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-literacy-for-elementary-students/):
//  - teachai.org/ailiteracy: "AI literacy represents the technical knowledge, durable skills, and future-ready attitudes
//    required to thrive in a world influenced by AI."; points to the jointly developed European Commission and OECD
//    AI Literacy Framework.
//  - ailiteracyframework.org (home): "The AILit Framework is a joint initiative of the European Commission (EC) and the
//    Organization for Economic Cooperation and Development (OECD). Its development is supported by CodeAI (formerly
//    Code.org)"; "contributes to the Innovative Domain of the PISA 2029 Assessment"; four domains "Engage with AI,
//    Create with AI, Manage AI, and Shape AI"; draft "published in May 2025"; "Insights from more than 2,000
//    individuals helped shape the final version."; designed for "teachers, education leaders, education policymakers,
//    learning designers, and parents".
//  - AILF_en.pdf (Empowering Learners for the Age of AI, OECD / European Union, 2026): levels "Basic to Intermediate and
//    Advanced"; they "do not correspond to specific age ranges or grade levels"; activities "should be adapted to local
//    contexts, guidance and legislation"; Knowledge 1.1 "AI is not human."; Engage 1 Basic "Learners can identify where
//    different types of AI are present in their everyday lives." with the "AI or Not" game; Engage 2 Basic "Learners know
//    AI is a non-human tool that produces outputs based on patterns of data and lacks authentic context or
//    understanding." and the phrases "AI thinks," "AI understands,"; Engage 3 Basic "Learners understand why
//    AI-generated outputs should be verified"; Manage 2 Basic "some types of AI systems can be programmed with specific
//    rules to accomplish tasks, while others can learn patterns from data." and "(e.g. calculators, traffic lights,
//    thermostats)"; Shape 3 Basic "Learners identify examples of data that might be used to train AI systems."
//  - ailiteracyframework.org/ai-for-oceans/: exemplar "AI for Oceans is a web app learning game that introduces young
//    learners to the concepts of how AI systems are trained, and how training can introduce bias, and potentially
//    produce errors."; "60 minutes"; "Primary"; "Age 7 and up".
//  - k12cs.org grade band statements: K-2 Collection "Everyday digital devices collect and display data over time.";
//    K-2 Inference and Models "Data can be used to make inferences or predictions about the world."; 3-5 Collection
//    "People select digital tools for the collection of data based on what is being observed and how the data will be
//    used."; 3-5 Inference and Models "The accuracy of inferences and predictions is related to how realistically data is
//    represented." and "such as the amount and relevance of data collected". FAQ: computer literacy "focuses on the use
//    of existing technologies and computer programs like word processing and spreadsheets".
//  - code.org/en-US/curriculum/artificial-intelligence-discoveries: AI Discoveries "Grades : 6, 7, 8".
// Blocked or missing (not circumvented): ed.gov (HTTP 403 on three pages), so no US Department of Education guidance
// is quoted; csteachers.org (403); two ftc.gov COPPA URLs returned 404, so no COPPA statement is printed.
// Our own material, labelled: the K-2 and 3-5 mapping of the AILit domains (the framework says its levels are not age
// bands), the twelve-item "rules or learning?" sort with answers, the word-counting guesser (run with Python 3.13; the
// third result is "happy" only because "is" appears in a happy example), the four-stage ladder and the parent questions.
// Lesson family: learning from examples (training data decides the answer, including the wrong ones).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GUESSER = `# Learning from examples (ours): a tiny word-counting guesser
examples = [
    ("i love sunny days", "happy"),
    ("this game is fun", "happy"),
    ("i feel sad and tired", "sad"),
    ("the rain spoiled our picnic", "sad"),
]

# training: count how often each word appears with each label
counts = {"happy": {}, "sad": {}}
for sentence, label in examples:
    for word in sentence.split():
        counts[label][word] = counts[label].get(word, 0) + 1

def guess(sentence):
    words = sentence.split()
    scores = {}
    for label in counts:
        scores[label] = sum(counts[label].get(w, 0) for w in words)
    return max(scores, key=scores.get)

print(guess("sunny days are fun"))    # happy
print(guess("a sad rainy picnic"))    # sad
print(guess("my kite is broken"))     # happy, only because of "is"`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AI LITERACY K-5', blurb: 'AI literacy for elementary students: what it means in grades K to 5, the AILit framework basics, US data standards, a sorting activity and a tiny learning program.' },
  slug: 'ai-literacy-for-elementary-students',
  code: 'ale',
  accent: '#9E332F',
  accentRationale: 'AI literacy for elementary door, US: #9E332F, a muted schoolhouse red chosen with the accent picker (hue 2, s .70, v .62), allocated in alloc.tsv row 24 away from the other US accents, contrast 6.67 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI literacy for elementary students',
  title: 'AI Literacy for Elementary Students: A K-5 Guide',
  description: 'AI literacy for elementary students in grades K to 5: what it means, the AILit framework basics, what US data standards expect, and two activities to try.',
  ogDescription: 'Knowing that AI is not human, that it learns from examples, and that its answers need checking. A K-5 guide built from the AILit framework and the US K-12 CS Framework, with live classes from age 8.',
  twitterDescription: 'AI literacy for K-5: what it means, what standards expect, and two activities.',
  pageName: 'AI Literacy for Elementary Students',
  webPageDescription: 'A guide for US parents and teachers of elementary students to AI literacy in grades K to 5, built from TeachAI, the AILit framework and the K-12 Computer Science Framework data strand.',
  courseDescription: 'Live online AI literacy classes for US elementary students from age 8 (grades 3 to 5): how AI learns from data, where it goes wrong and how to check it, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI literacy for elementary students',
  navLinks: [
    { href: '#meaning', label: 'What it means' },
    { href: '#expectations', label: 'Basic level' },
    { href: '#standards', label: 'US standards' },
    { href: '#sort', label: 'Sorting activity' },
    { href: '#program', label: 'A learning program' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 5 &middot; Live classes from age 8',
  h1: 'AI literacy for elementary students',
  lede: 'AI literacy for an elementary student means three things: knowing AI is a tool, not a person; knowing it learns patterns from examples; and knowing its answers must be checked. Modern Age Coders teaches it live online from age 8, in grades 3 to 5, in a batch or one to one, with younger children starting at home.',
  secondaryCta: { href: '#sort', label: 'Try the sorting activity' },
  wa: 'Hello Modern Age Coders, my child is in elementary school in the US and we are interested in your AI literacy classes. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; No child accounts on adult AI services',
  spec: [
    ['Grades', 'K to 5 (classes from grade 3)'],
    ['Class ages', '8 and up'],
    ['Big idea', 'AI learns from examples'],
    ['Habit', 'Check every answer'],
    ['Accounts', 'Only age-appropriate tools'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'For grades K to 5, AI literacy is not about using chatbots. It is understanding that AI is a non-human tool that produces outputs from patterns in data, spotting where AI appears in daily life, telling rule-following machines from ones that learn, and checking AI answers against trusted sources. Coding and data activities build all of it. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for AI literacy in the elementary years',
    lede: 'All live, all taught by a regular teacher, and none asks a child to sign up for an AI service.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'ALE / 01', title: 'AI literacy for kids', note: 'From 8 to 14. How AI learns, fails and should be judged.' },
      { course: 'python-ai-kids-masterclass', code: 'ALE / 02', title: 'Python and AI for kids', note: 'From 9 to 12. Build small smart programs yourself.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'ALE / 03', title: 'Computational thinking', note: 'From 7 to 12. The reasoning underneath AI.' }
    ]
  },

  sections: [
    {
      id: 'meaning', tint: 'tint', eyebrow: 'What it means',
      h2: 'What AI literacy means for a child in kindergarten to fifth grade',
      lede: 'AI literacy is a newer idea than computer literacy, and the two are easy to confuse. The difference matters most for young children, who are surrounded by AI long before they could use a chatbot.',
      body: [
        { kind: 'two',
          leftH3: 'A working definition',
          left: [
            'TeachAI, an initiative whose steering committee is made up of non-profit organizations working across education, workforce and technology, puts it this way: "AI literacy represents the technical knowledge, durable skills, and future-ready attitudes required to thrive in a world influenced by AI."',
            'For a six-year-old, the technical knowledge is small but real: a smart speaker does not understand them the way a friend does; it matches sounds to patterns it was trained on.'
          ],
          rightH3: 'Not the same as computer literacy',
          right: [
            'The K-12 Computer Science Framework separates computer science from computer literacy, which it says "focuses on the use of existing technologies and computer programs like word processing and spreadsheets".',
            'AI literacy sits closer to computer science. A child who can only use an AI tool is not AI literate; a child who can explain, in their own simple words, how it reaches an answer and why it might be wrong is on the way.'
          ] },
        { kind: 'table', mt: true, caption: 'The four AILit domains, and what each can look like in elementary school (domain names from the AILit framework; the grade examples are ours)', head: ['Domain', 'Grades K to 2', 'Grades 3 to 5'], rows: [
          ['Engage with AI', 'Point out where AI is in the house: a voice assistant, a video app&rsquo;s suggestions', 'Explain why an AI answer might be wrong and how to check it'],
          ['Create with AI', 'Talk about a picture an adult made with an AI tool: who had the idea?', 'With a teacher, compare an AI suggestion with their own idea for a story'],
          ['Manage AI', 'Sort tasks into ones a person should do and ones a machine could help with', 'Decide whether a task needs AI at all, or a rule, or a person'],
          ['Shape AI', 'Sort pictures into groups, the way a machine is trained', 'Train a tiny program on examples and see how the examples change its answers']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.teachai.org/ailiteracy" rel="noopener" target="_blank">TeachAI, AI Literacy</a>, the <a class="ag-inline-link" href="https://ailiteracyframework.org/" rel="noopener" target="_blank">AILit Framework site</a> and the <a class="ag-inline-link" href="https://k12cs.org/faq/" rel="noopener" target="_blank">K-12 CS Framework FAQ</a>, read 17 October 2026. We have no connection with TeachAI, the OECD, the European Commission or k12cs.org.' }
      ]
    },
    {
      id: 'expectations', tint: 'deep', eyebrow: 'The basic level',
      h2: 'What the AILit framework expects at its basic level',
      lede: 'The AILit Framework is a joint initiative of the European Commission and the OECD, developed with support from CodeAI, the organisation formerly called Code.org. It sets out learner expectations at three levels, from "Basic to Intermediate and Advanced", and says these "do not correspond to specific age ranges or grade levels". The basic level is the natural starting point for elementary students.',
      body: [
        { kind: 'table', caption: 'Selected basic-level learner expectations, quoted from Empowering Learners for the Age of AI (OECD / European Union, 2026)', head: ['Competence', 'Basic-level expectation', 'Classroom idea in the framework'], rows: [
          ['Engage with AI 1: recognise AI&rsquo;s role', '"Learners can identify where different types of AI are present in their everyday lives."', 'An "AI or Not" game sorting smart home devices, social media and apps'],
          ['Engage with AI 2: describe how AI works', '"Learners know AI is a non-human tool that produces outputs based on patterns of data and lacks authentic context or understanding."', 'Spotting misleading phrases such as "AI thinks" and "AI understands"'],
          ['Engage with AI 3: evaluate outputs', '"Learners understand why AI-generated outputs should be verified" and how to check them', 'Comparing an AI tool&rsquo;s solution to a math problem with the method the teacher taught'],
          ['Manage AI 2: choose an approach', '"some types of AI systems can be programmed with specific rules to accomplish tasks, while others can learn patterns from data."', 'Directing a classmate playing a robot to sort pictures of trash'],
          ['Shape AI 3: data and design', '"Learners identify examples of data that might be used to train AI systems."', 'Deciding what data would train a tool that sorts recycling']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The idea under all of them',
          left: [
            'The framework&rsquo;s first knowledge statement is four words long: "AI is not human." Almost everything an elementary child needs follows from that one sentence, said often and shown in many ways.',
            'Language is part of it. When a child says the computer "knows" or "wants" something, a gentle correction helps: it was trained to match patterns, and it can be wrong without knowing it.'
          ],
          rightH3: 'Built for families too',
          right: [
            'The framework lists parents among its audiences, alongside teachers and policymakers, and its draft, published in May 2025, drew on "Insights from more than 2,000 individuals" before the final version.',
            'Because it is international, it asks that classroom activities be adapted to "local contexts, guidance and legislation". In the US, that means following your district&rsquo;s rules on which AI tools, if any, children may use.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ailiteracyframework.org/pdfs/framework_pdf/AILF_en.pdf" rel="noopener" target="_blank">Empowering Learners for the Age of AI: An AI Literacy Framework for Primary and Secondary Education</a> (OECD / European Union, 2026), read 17 October 2026. The framework also notes that it contributes to the Innovative Domain of the PISA 2029 Assessment.' }
      ]
    },
    {
      id: 'standards', tint: 'tint', eyebrow: 'US standards',
      h2: 'Where AI ideas already sit in US elementary computer science standards',
      lede: 'The K-12 Computer Science Framework, which informs state and district computer science decisions, has no separate AI concept among its five core concepts, but its data strand already covers the foundations for grades K to 5: collecting data, and using it to make predictions.',
      body: [
        { kind: 'table', caption: 'Data and prediction statements for the elementary grades, in the framework&rsquo;s wording (k12cs.org, read 17 October 2026)', head: ['Subconcept', 'By the end of grade 2', 'By the end of grade 5'], rows: [
          ['Collection', '"Everyday digital devices collect and display data over time."', '"People select digital tools for the collection of data based on what is being observed and how the data will be used."'],
          ['Inference and models', '"Data can be used to make inferences or predictions about the world."', '"The accuracy of inferences and predictions is related to how realistically data is represented."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this is AI literacy',
          left: [
            'An AI system is, at heart, a machine that makes predictions from data. A second grader who predicts tomorrow&rsquo;s lunch choice from last week&rsquo;s tally chart is doing, by hand, what a recommendation system does at scale.',
            'The grade 5 statement adds the crucial warning: predictions are only as good as the data, with accuracy affected by factors "such as the amount and relevance of data collected". That is the root of every conversation about AI bias.'
          ],
          rightH3: 'What comes next, in middle school',
          right: [
            'Code.org&rsquo;s AI Discoveries, the course it now recommends for middle school, is listed for grades 6, 7 and 8. Elementary families who want AI ideas earlier can build them through the data activities on this page.',
            'That makes the elementary years a quiet opportunity. Children who already understand data and patterns arrive in middle school ready to reason about AI rather than just use it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://k12cs.org/framework-statements-by-grade-band/" rel="noopener" target="_blank">K-12 CS Framework, statements by grade band</a> and <a class="ag-inline-link" href="https://code.org/en-US/curriculum/artificial-intelligence-discoveries" rel="noopener" target="_blank">Code.org AI Discoveries</a>, read 17 October 2026. We are not connected with either.' }
      ]
    },
    {
      id: 'sort', tint: 'deep', eyebrow: 'Try it at home',
      h2: 'Rules or learning? A twelve-card sorting activity',
      lede: 'This activity takes ten minutes and works from about first grade. Write each item on a card. Your child sorts them into three piles: follows set rules, learns from examples, or not a machine decision at all. The AILit framework uses calculators, traffic lights and thermostats as its examples of rule-following technology.',
      body: [
        { kind: 'table', caption: 'Twelve cards with suggested answers (ours; how a specific product works can vary)', head: ['Card', 'Suggested pile', 'Why'], rows: [
          ['A calculator adding 7 + 5', 'Rules', 'It follows exact instructions and gives the same answer every time'],
          ['A traffic light changing color', 'Rules', 'Usually a timer or sensor rule, not learning'],
          ['A thermostat turning on the heat', 'Rules', 'It compares the temperature with a set number'],
          ['A microwave counting down', 'Rules', 'A timer that does exactly what was typed'],
          ['A voice assistant answering a question', 'Learning', 'Trained on recordings of many voices to match sounds to words'],
          ['A video app suggesting the next video', 'Learning', 'It predicts what you will watch from what people watched before'],
          ['A photo app finding pictures of a dog', 'Learning', 'Trained on many labelled pictures of dogs'],
          ['An email app moving junk mail', 'Learning', 'Trained on examples of mail people marked as junk'],
          ['A translation app turning English into Spanish', 'Learning', 'Trained on huge amounts of translated text'],
          ['Choosing which friend to invite over', 'A person', 'This needs feelings and judgement'],
          ['Deciding if a joke is kind', 'A person', 'Machines can guess, but people should decide'],
          ['Sorting socks by color', 'Either', 'A good debate: a rule could do it, so could a person']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The conversation that matters',
          left: [
            'Disagreement is the point. If your child puts the video app under rules, ask how it could know what they like. If they put the calculator under learning, ask whether it ever surprises them.',
            'End with the framework&rsquo;s key sentence in kid language: a machine that learns is copying patterns from examples, and if the examples are odd, its answers will be odd too.'
          ],
          rightH3: 'A free classroom game to follow',
          right: [
            'The AILit site lists AI for Oceans as an exemplar: "a web app learning game that introduces young learners to the concepts of how AI systems are trained, and how training can introduce bias, and potentially produce errors." It is listed for primary education, "Age 7 and up", in an activity of 60 minutes.',
            'Children train a sorter on pictures, then see it make mistakes. It is a natural next step after the card sort, ideally with an adult nearby.'
          ] },
        { kind: 'source', html: 'Sources: the Manage AI 2 learner expectations in the <a class="ag-inline-link" href="https://ailiteracyframework.org/pdfs/framework_pdf/AILF_en.pdf" rel="noopener" target="_blank">AILit Framework</a> and its <a class="ag-inline-link" href="https://ailiteracyframework.org/ai-for-oceans/" rel="noopener" target="_blank">AI for Oceans exemplar page</a>, read 17 October 2026. The twelve cards are ours.' }
      ]
    },
    {
      id: 'program', tint: 'tint', eyebrow: 'A learning program',
      h2: 'A tiny program that learns from examples, and gets things wrong',
      lede: 'For fourth and fifth graders who have started Python, and for parents who want to see the idea in action, this is a program we use in class. It learns which words go with happy and sad sentences from four examples, then guesses. Its third guess is the lesson.',
      body: [
        { kind: 'code', label: 'Python &middot; a word-counting guesser', lang: 'python', code: GUESSER, note: 'Ours. We ran it with Python 3.13 before printing, and the comments show its real answers. The third sentence is not happy at all, but the only word the program has seen before is "is", which appeared in a happy example, so it answers happy.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Training', p: 'The loop counts words in four labelled examples. That is all the program ever knows.' },
          { h3: 'Predicting', p: 'For a new sentence, it adds up word counts for each label and picks the bigger total.' },
          { h3: 'Being wrong', p: 'With too few examples it answers confidently anyway, and it can never say "I do not know".' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Questions we ask children',
          left: [
            'Why did it say "my kite is broken" was happy? Children who answer "because of the word is" have understood that AI follows patterns in its data, not meaning.',
            'How could we fix it? Add more examples, especially sad ones that use everyday words. Run it again. That is the framework&rsquo;s point about the amount and relevance of data, discovered by a ten-year-old.'
          ],
          rightH3: 'Why a program and not a chatbot',
          right: [
            'A child who builds a tiny guesser sees every step. Nothing is hidden, so nothing seems magical, and the idea that big AI systems work on the same principle, at enormous scale, becomes believable.',
            'It also keeps the lesson inside our own code, so no child needs an account on any AI service to learn how AI works.'
          ] }
      ]
    },
    {
      id: 'safety', tint: 'deep', eyebrow: 'Safety and accounts',
      h2: 'AI tools, accounts and young children: our rules, and questions to ask a school',
      lede: 'Many AI services set a minimum age in their terms of service, and some are for adults only. Those rules change, so we do not list them here; check the terms of any tool before your child uses it.',
      body: [
        { kind: 'two',
          leftH3: 'How we handle it',
          left: [
            'We never ask a child to create an account on a service whose terms do not allow their age. Elementary students in our classes learn with programs they build themselves, child-appropriate activities and demonstrations run by the teacher.',
            'When a teacher demonstrates an AI tool, the lesson is about checking it: find one thing it got right, one thing it got wrong, and how we know.'
          ],
          rightH3: 'Five questions for your child&rsquo;s school',
          right: [
            'Which AI tools, if any, do students in this grade use, and are they school-managed accounts? What does the district policy say about AI for elementary students? Is any student work or data shared with an AI service?',
            'How is AI literacy taught, rather than just AI use? And how should my child say when they have used AI for schoolwork? Schools that have thought these through will have ready answers.'
          ] },
        { kind: 'p', mt: true, html: 'For older children, our guides to <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools and age rules</a> and <a class="ag-inline-link" href="/blog/how-to-use-chatgpt-to-study-without-cheating">studying with AI honestly</a> go further. For the wider picture across all ages, see <a class="ag-inline-link" href="/ai-literacy-for-students">AI literacy for students</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'Four stages of AI understanding in elementary school',
    lede: 'An outline, not a schedule. Many children reach stage 2 at home long before school mentions AI.',
    table: { caption: 'Stages of AI understanding, grades K to 5 (ours)', head: ['Stage', 'A child at this stage says'], rows: [
      ['1. Noticing', '"The speaker heard me and played my song."'],
      ['2. Not a person', '"It does not really understand; it matches what I say to things it learned."'],
      ['3. Learns from examples', '"If you show it lots of cat pictures, it gets better at finding cats."'],
      ['4. Can be wrong', '"It might be wrong if its examples were wrong, so I should check."']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the big one. Saying "it was trained" instead of "it knows" at home helps more than any app.',
      'Ask your child to catch an AI mistake this week, perhaps a wrong song or a silly suggestion. Talk about why it happened.'
    ] },
    right: { h3: 'For kids', ps: [
      'AI is a tool, like a very fast pattern-matcher. It is not your friend and it is not always right.',
      'If an answer matters, check it with a book, a teacher or a grown-up.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'More courses that build the foundations for AI',
    lede: 'Coding, data and problem solving, taught live. The ages are those each course is designed for.',
    bands: [
      { num: 'I', h3: 'Foundations first', sub: 'From age 6', courses: [
        { code: 'ALE / F / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for kids', blurb: 'From 6. Instructions, loops, events.' },
        { code: 'ALE / F / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'From 6. Games that react and keep score.' },
        { code: 'ALE / F / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From 7. Code in a familiar world.' }
      ] },
      { num: 'II', h3: 'Making with code', sub: 'Ages 8 to 12', courses: [
        { code: 'ALE / M / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Rules, scores and design.' },
        { code: 'ALE / M / 02', slug: 'block-coding-app-development-masterclass', title: 'App building', blurb: 'Apps with buttons and sensors.' },
        { code: 'ALE / M / 03', slug: 'kids-ai-web-development-course', title: 'Web and AI for kids', blurb: '9 to 12. Smart web pages.' }
      ] },
      { num: 'III', h3: 'For older siblings', sub: 'Ages 13 to 18', courses: [
        { code: 'ALE / T / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Real models in Python.' },
        { code: 'ALE / T / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Using AI well, from 13.' },
        { code: 'ALE / T / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first step towards building AI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live AI literacy classes for young learners',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches in US time zones.' },
      { time: 'Weekends', l: 'Morning classes for younger children.' },
      { time: '1-on-1', l: 'At a time that suits your family.' }
    ],
    cells: [
      { h3: 'Teacher-led', p: 'A regular teacher guides every activity.' },
      { h3: 'No AI accounts', p: 'Children never sign up for adult services.' },
      { h3: 'Build to understand', p: 'Small programs make AI less mysterious.' },
      { h3: 'Check everything', p: 'Every lesson includes catching a mistake.' },
      { h3: 'Short sessions', p: 'Paced for elementary attention spans.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Older learners built these after the same foundations. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, with no term contract. You can stop at the end of any month, and the first lesson is free so your child can try it first.',
    free: ['A free first lesson', 'A chat about your child&rsquo;s questions on AI', 'No card details'],
    group: ['Fifteen to twenty learners', 'Grouped by age', 'One regular teacher', 'Monthly'],
    one: ['A teacher to yourself', 'Paced for your child', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from parents and teachers',
    h2: 'AI literacy for elementary students: common questions',
    items: [
      { q: 'What is AI literacy for elementary students?', a: 'Knowing that AI is a tool and not a person, that it produces answers from patterns in data it was trained on, where it shows up in daily life, and that its answers need checking. For grades K to 5 it is mostly about understanding, not using chatbots.' },
      { q: 'What age should children learn about AI?', a: 'The ideas can start in kindergarten with games about patterns and sorting. Our live AI literacy course starts at 8, which is usually third grade, and runs to 14.' },
      { q: 'Should elementary students use ChatGPT or other chatbots?', a: 'Many AI services set minimum ages in their terms, and some are for adults only. Check the terms and your school district policy first. Our classes never ask a child to create an account on a service that does not allow their age.' },
      { q: 'What is the AILit Framework?', a: 'An AI literacy framework for primary and secondary education from the European Commission and the OECD, developed with support from CodeAI, formerly Code.org. It has four domains: Engage with AI, Create with AI, Manage AI and Shape AI.' },
      { q: 'Do US elementary standards include AI?', a: 'Not usually by name, but the K-12 Computer Science Framework covers its foundations: by the end of grade 2, using data to make predictions, and by grade 5, understanding that prediction accuracy depends on the data.' },
      { q: 'How can I teach my child about AI at home?', a: 'Try the rules or learning card sort on this page: calculators and thermostats follow rules, while voice assistants and video suggestions learn from examples. Then talk about why a machine that learns can be wrong.' },
      { q: 'Is AI for Oceans suitable for young children?', a: 'The AILit Framework lists it as an exemplar for primary education, age 7 and up, in a 60-minute activity that shows how AI is trained and how training can introduce bias and errors.' },
      { q: 'Does my child need to code to learn AI literacy?', a: 'No coding is needed to begin. Coding helps from about grade 4, because building a tiny program that learns from examples makes the ideas concrete.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do AI literacy classes cost?', a: 'The first lesson costs nothing. Classes after that are paid monthly, and the fees section on this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on AI and coding for young US learners.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our US home page.' },
      { href: '/ai-literacy-for-students', label: 'AI literacy for students', p: 'The same skill, across all ages.' },
      { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds', p: 'Third grade coding, step by step.' },
      { href: '/blog/how-to-teach-kids-ai-at-home', label: 'Teaching kids AI at home', p: 'More ideas for parents.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'What each tool&rsquo;s terms allow.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A class, minute by minute.' },
      { href: '/c-plus-plus-for-kids', label: 'C++ for kids', p: 'C++ for kids: an honest age guide, three real programs and the USACO path.' },
      { href: '/javascript-for-kids', label: 'JavaScript for kids', p: 'JavaScript for kids: an age guide, the Console, and three real programs to try today.' },
      { href: '/app-inventor-for-kids', label: 'App Inventor for kids', p: 'MIT App Inventor for kids: sign-in options, phone setup and a first app in real blocks.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s grade and any questions they have asked about AI. The teacher builds the first lesson around those questions, which young children usually love.',
    readFirst: 'Want to know more first? See <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>, or read the full outline of the <a class="ag-inline-link" href="/courses/ai-literacy-for-kids-course">AI literacy course</a>.',
    note: 'All teaching is live on video, by our teachers in India, so families join from any US state in the same way. WhatsApp is the fastest way to ask a question.',
    formNote: 'The first lesson is free; we will never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'AI for young learners', links: [
        { href: '/ai-literacy-for-students', label: 'AI literacy for students' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/blog/how-to-teach-kids-ai-at-home', label: 'Teaching kids AI at home' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA' },
        { href: '/coding-for-9-year-olds', label: 'Coding for 9 year olds' }
      ] }
    ],
    bottomRight: 'The examples decide the answer'
  },

  personalityCss: `
.ag-root.ag-ale .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ale .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-ale .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ale .ag-table caption { text-align: left; }
.ag-root.ag-ale .ag-grid-3 p { line-height: 1.55; }
.ag-root.ag-ale .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'TeachAI AI literacy definition; AILit Framework (EC and OECD, supported by CodeAI, formerly Code.org; OECD / European Union, 2026), read raw 17 October 2026: four domains, three levels not tied to ages, Knowledge 1.1, basic expectations for Engage 1 to 3, Manage 2 and Shape 3, the local-context instruction, May 2025 draft and 2,000+ respondents, the AI for Oceans exemplar (primary, age 7 and up, 60 minutes). K-12 CS Framework grade 2 and grade 5 Collection and Inference statements and the computer literacy definition. Code.org AI Discoveries grade listing.',
    localProject: 'A twelve-card rules-or-learning sorting activity with suggested answers (ours) and a Python word-counting guesser trained on four examples (ours, run with Python 3.13) whose third answer is wrong because of one common word. Lesson family: learning from examples.',
    requiredMentions: ['AI literacy represents the technical knowledge, durable skills, and future-ready attitudes required to thrive in a world influenced by AI', 'Engage with AI, Create with AI, Manage AI and Shape AI', 'do not correspond to specific age ranges or grade levels', 'AI is not human.', 'Learners can identify where different types of AI are present in their everyday lives', 'a non-human tool that produces outputs based on patterns of data', 'Insights from more than 2,000 individuals', 'Age 7 and up', 'Everyday digital devices collect and display data over time', 'focuses on the use of existing technologies and computer programs like word processing and spreadsheets', 'happy, only because of "is"'],
    sources: [
      { claim: 'TeachAI definition of AI literacy and its pointer to the EC and OECD framework.', url: 'https://www.teachai.org/ailiteracy' },
      { claim: 'AILit as a joint EC and OECD initiative supported by CodeAI; four domains; May 2025 draft; 2,000+ respondents; audiences; PISA 2029.', url: 'https://ailiteracyframework.org/' },
      { claim: 'Levels not tied to ages; Knowledge 1.1; basic expectations and classroom ideas; local adaptation.', url: 'https://ailiteracyframework.org/pdfs/framework_pdf/AILF_en.pdf' },
      { claim: 'AI for Oceans exemplar description, primary, age 7 and up, 60 minutes.', url: 'https://ailiteracyframework.org/ai-for-oceans/' },
      { claim: 'Grade 2 and grade 5 collection and inference statements; computer literacy definition.', url: 'https://k12cs.org/framework-statements-by-grade-band/' },
      { claim: 'AI Discoveries listed for grades 6, 7 and 8.', url: 'https://code.org/en-US/curriculum/artificial-intelligence-discoveries' }
    ],
    rejectedClaims: [
      'US Department of Education AI guidance: ed.gov returned HTTP 403 on three pages, not circumvented, so no federal guidance is quoted or summarised.',
      'COPPA requirements: two ftc.gov URLs returned 404, so no statement about COPPA or under-13 rules is printed.',
      'Minimum ages of named chatbots: not confirmed raw this session, so no tool is named with an age; the page gives the general rule and links to our AI tools age guide.',
      'Who made AI for Oceans: the AILit page read does not name a developer, so none is stated.',
      'The quoted individual experts on the AILit site: named people, not used.',
      'The AILit statistic on teen AI use (ages 13 to 18): outside this page&rsquo;s age range, not used.',
      'Any affiliation with TeachAI, the OECD, the European Commission, CodeAI (Code.org) or k12cs.org: none, and the page says so.'
    ]
  }
};
