'use strict';
// AI projects for middle school students (ag- topic door; US cluster Phase 2, row 20).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Never twins /ai-projects-for-kids (ten account-free builds for ages 6 to 12) or /ai-projects-for-high-school-students
// (the research ladder): this page is the grades 6 to 8 project list, with two complete Python projects and the science fair
// route into the Thermo Fisher JIC.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-projects-for-middle-school-students/):
//  - Machine Learning for Kids, English strings file (machinelearningforkids.co.uk/static/languages/en.json): "This free tool
//    introduces machine learning by providing hands-on experiences for training machine learning systems"; "The tool was first
//    made available in 2017"; the three steps "Collect examples of things you want to be able to recognise", "Use the examples
//    to train a computer...", "Make a game in Scratch..."; "Try without registering"; "You can only create one project at a
//    time if you use 'Try it now'"; worksheet descriptions quoted below (Rock, Paper, Scissors; Journey to school; Headline
//    testing; Fooled; Smart Classroom; Top Trumps; Chatbots). Our count of worksheet entries with a title in that file: 63.
//  - CodeAI Hour of AI page: AI for Oceans, "train a real machine learning model to identify sea creatures and trash in the
//    ocean".
//  - Society for Science, Thermo Fisher Scientific Junior Innovators Challenge (societyforscience.org/jic/): "students must
//    first compete at a Society-affiliated science fair"; "The top 10% of the 6th, 7th, and 8th grade competitors at
//    Society-affiliated fairs in the U.S. are eligible for nomination"; 2026: "all 1,997 entrants", "Top 300 students", "30
//    finalists of the 2026 Thermo Fisher Scientific Junior Innovators Challenge", Finals Week October 23 to 28 in Washington, DC.
//  - Python docs, collections.Counter: "A Counter is a dict subclass for counting hashable objects"; most_common(n).
// Excluded on purpose: the ML for Kids Titanic and Phishing worksheets (disaster and crime topics), named JIC winners, the JIC
// "premier" self-description, Teachable Machine (FAQ not readable raw).
// Our own material, labelled on the page: the rock-paper-scissors bot and the sport-or-music sorter in plain Python and their
// output (run with Python 3.13 on 17 October 2026: "bot won 7 of 10"; "skipping 0 words: 2 of 4", "skipping 6 words: 4 of
// 4"), the ten-project table by grade, the science-fair write-up template and the arithmetic 7 / 10 = 70% and 1,997 x 0.15
// = about 300 (shown only as a rough check of the published Top 300).
// Lesson family: patterns in data (counting, and why common words drown out useful ones).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const RPS = `# Project 1: a rock-paper-scissors bot that learns (ours)
from collections import Counter

BEATS = {"rock": "paper", "paper": "scissors",
         "scissors": "rock"}

def bot_move(history):
    if not history:
        return "paper"            # no data yet: just pick
    favorite = Counter(history).most_common(1)[0][0]
    return BEATS[favorite]        # beat their usual move

friend = ["rock", "rock", "paper", "rock", "scissors",
          "rock", "rock", "paper", "rock", "rock"]

wins = 0
for turn, move in enumerate(friend):
    bot = bot_move(friend[:turn])
    if BEATS[move] == bot:
        wins += 1
print("bot won", wins, "of", len(friend))`;

const TOPICS = `# Project 2: sort messages into sport or music (ours)
from collections import Counter

training = [
    ("the team scored a goal in the last minute", "sport"),
    ("our coach said the match starts at noon", "sport"),
    ("she ran the fastest race of the season", "sport"),
    ("the band played a new song tonight", "music"),
    ("he practiced guitar chords for the concert", "music"),
    ("that album has a great drum beat", "music"),
]
tests = [("the goal came late in the match", "sport"),
         ("a quiet song on the piano", "music"),
         ("the drummer joined the band", "music"),
         ("the race was on a rainy day", "sport")]

def train(skip=()):
    words = {"sport": Counter(), "music": Counter()}
    for text, label in training:
        words[label].update(w for w in text.split()
                            if w not in skip)
    return words

def classify(words, text):
    score = {label: sum(words[label][w] for w in text.split())
             for label in words}
    return max(score, key=score.get)

for skip in [(), {"the", "a", "of", "in", "on", "at"}]:
    words = train(skip)
    right = sum(classify(words, t) == label
                for t, label in tests)
    print("skipping", len(skip), "words:", right, "of 4")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MIDDLE SCHOOL PROJECTS', blurb: 'Ten AI projects for US middle schoolers in grades 6 to 8, two of them complete in Python, plus the science fair route to the Thermo Fisher Junior Innovators Challenge.' },
  slug: 'ai-projects-for-middle-school-students',
  code: 'apms',
  accent: '#0E2E4C',
  accentRationale: 'Middle school AI projects door, US row 20: the deep notebook navy #0E2E4C allocated in alloc.tsv, distinct from the other US accents and dark enough for body links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI projects for middle school students',
  title: 'AI Projects for Middle School Students: 10 Ideas, 2 in Python',
  description: 'AI projects for middle school students: ten ideas for grades 6 to 8, two complete Python projects with real output, and how to enter one in a US science fair.',
  ogDescription: 'A rock-paper-scissors bot that learns, a message sorter that fails and gets fixed, and eight more AI projects for grades 6 to 8, with the science fair route to the Junior Innovators Challenge.',
  twitterDescription: 'Ten AI projects for US middle schoolers, two in real Python, and how to take one to a science fair.',
  pageName: 'AI Projects for Middle School Students',
  webPageDescription: 'A guide for US middle school students, parents and teachers to AI projects for grades 6 to 8, with two original Python projects, a project table by grade and the science fair route, built from each tool\'s and organizer\'s own pages.',
  courseDescription: 'Live online AI and Python project classes for US middle school students in grades 6 to 8, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI projects for middle school students',
  navLinks: [
    { href: '#ideas', label: 'Ten projects' },
    { href: '#bot', label: 'Project 1' },
    { href: '#sorter', label: 'Project 2' },
    { href: '#scratch', label: 'In Scratch' },
    { href: '#fair', label: 'Science fair' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 8 &middot; Projects with real code',
  h1: 'AI projects for middle school students',
  lede: 'The difference between a middle schooler who has heard about AI and one who understands it is usually a single project: one they built, broke and fixed themselves. The right project for grades 6 to 8 is small enough to finish in a few weeks, needs no adult accounts, and teaches one real idea, such as learning from examples, or why a model trained on lopsided data gets things wrong. Below are ten such projects, two of them written out in full Python with the output we got, and the route by which a good one can become a science fair entry.',
  secondaryCta: { href: '#bot', label: 'Start with project 1' },
  wa: 'Hello Modern Age Coders, my middle schooler in the US wants to build an AI project. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Projects your child writes, not ones we write for them',
  spec: [
    ['For', 'Grades 6 to 8'],
    ['Projects', 'Ten, two with full code'],
    ['Tools', 'Python, Scratch, Machine Learning for Kids'],
    ['Accounts', 'None needed for the Python projects'],
    ['Science fair', 'Route to the Junior Innovators Challenge'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Strong AI projects for middle school students teach one real idea each: a rock-paper-scissors bot that learns a friend\'s habits, a message sorter that learns topics from examples, a Scratch game trained in Machine Learning for Kids, or AI for Oceans. Modern Age Coders runs live online project classes for grades 6 to 8 (ages 11 to 14) in Python and Scratch, in a batch or one to one.',

  picks: {
    eyebrow: 'Build with a teacher',
    h2: 'Where these projects get built, with a teacher',
    lede: 'Each is live, with a regular teacher who helps a student finish what they start.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'APMS / 01', title: 'Python and AI projects, grades 4 to 7', note: 'Ages 9 to 12. Typed code, games and the first smart programs.' },
      { course: 'ai-literacy-for-kids-course', code: 'APMS / 02', title: 'AI literacy with builds', note: 'Ages 8 to 14. Projects that show how AI learns and where it fails.' },
      { course: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', code: 'APMS / 03', title: 'Hackathon prep for kids', note: 'Ages 8 to 12. Twelve weeks of building toward one finished project.' }
    ]
  },

  sections: [
    {
      id: 'ideas', tint: 'tint', eyebrow: 'Ten projects',
      h2: 'Ten AI projects for grades 6 to 8, by difficulty',
      lede: 'Our list, ordered from a first afternoon to a science fair entry. The Scratch and browser projects come from free tools described on their own pages; the Python ones are written out in full further down.',
      body: [
        { kind: 'table', caption: 'AI projects for middle schoolers (our selection; tool descriptions quoted from each tool, read 17 October 2026)', head: ['Project', 'Tool', 'The idea it teaches', 'Grade'], rows: [
          ['AI for Oceans', 'CodeAI, in the browser', 'Training: "train a real machine learning model to identify sea creatures and trash in the ocean"', '6'],
          ['Rock, Paper, Scissors', 'Machine Learning for Kids and Scratch', 'Images: "Make a Rock, Paper, Scissors game in Scratch that learns to recognise hand shapes."', '6 to 7'],
          ['Journey to school', 'Machine Learning for Kids', 'Prediction: "Train the computer to be able to predict how you travel to school in the morning."', '6 to 7'],
          ['Smart Classroom', 'Machine Learning for Kids and Scratch', 'Language: a smart assistant that controls virtual devices', '6 to 8'],
          ['Top Trumps', 'Machine Learning for Kids and Scratch', 'Numbers: "Train a computer to be able to play the Top Trumps card game in Scratch."', '7'],
          ['Fooled', 'Machine Learning for Kids', 'Bad data: how computers make mistakes if they are trained badly', '7 to 8'],
          ['Rock-paper-scissors bot', 'Python, no installs', 'Learning a habit from history (project 1 below)', '7 to 8'],
          ['Sport or music sorter', 'Python, no installs', 'Learning words from examples (project 2 below)', '7 to 8'],
          ['Headline testing', 'Machine Learning for Kids and Scratch', 'Testing: "Create a testing tool in Scratch to measure how good a machine learning model is."', '8'],
          ['Chatbot on a topic', 'Machine Learning for Kids and Scratch', 'Questions: a chatbot that answers questions about a topic you choose', '8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to choose one',
          left: [
            'Pick by the idea, not the tool. A sixth grader who has never trained anything learns most from AI for Oceans or Rock, Paper, Scissors, where the training step is visible and quick.',
            'Seventh and eighth graders get more from the Python projects, because nothing is hidden. Every line that does the learning is on the screen, and they can change it.'
          ],
          rightH3: 'What makes a project count',
          right: [
            'It is finished, it was tested on examples it never saw, and the student can say why it got something wrong. Those three together are what a teacher or a science fair judge looks for.',
            'A project that only works on the examples it was trained on has not learned anything yet. Testing on new examples is the step to make sure is never skipped.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://machinelearningforkids.co.uk/" rel="noopener" target="_blank">Machine Learning for Kids</a> (worksheet descriptions from its published English text) and <a class="ag-inline-link" href="https://code.org/hour-of-ai" rel="noopener" target="_blank">CodeAI Hour of AI</a>. We are not connected with either. For younger children\'s projects, ages 6 to 12, see <a class="ag-inline-link" href="/ai-projects-for-kids">AI projects for kids</a>.' }
      ]
    },
    {
      id: 'bot', tint: 'deep', eyebrow: 'Project 1, in Python',
      h2: 'A rock-paper-scissors bot that learns its opponent',
      lede: 'This bot keeps a record of every move a friend has made, finds the friend\'s favorite, and plays whatever beats it. It is the simplest honest example of learning from data. It is our own script, built only on the collections module that comes with Python, and its output below is from a run on 17 October 2026 with Python 3.13.',
      body: [
        { kind: 'code', label: 'Project 1 &middot; the learning bot', lang: 'python', code: RPS, note: 'Output on our run: bot won 7 of 10, which is 7 / 10 = 70%. Python describes a Counter as a dict subclass for counting hashable objects, and most_common(1) returns the single most frequent move with its count.' },
        { kind: 'two', mt: true,
          leftH3: 'Why it wins',
          left: [
            'Our pretend friend plays rock seven times out of ten. After a couple of turns the bot has seen enough rocks to play paper almost every time, and paper beats rock.',
            'That is the simplest kind of prediction: find the most common pattern in the past and bet on it continuing. When people are predictable, it works well.'
          ],
          rightH3: 'How to beat it, and improve it',
          right: [
            'Play a different move every turn and the bot\'s favorite keeps changing; its wins drop. Ask the student to try, and to explain why.',
            'Then improve the bot: let it look only at the last five moves, or at what the friend plays after a win. Each change is a small experiment with a number to compare.'
          ] }
      ]
    },
    {
      id: 'sorter', tint: 'tint', eyebrow: 'Project 2, in Python',
      h2: 'A message sorter that fails, and the one-line fix',
      lede: 'This program learns which words belong to sport and which to music from six example sentences, then sorts four new ones. The first version gets half of them wrong, which is the most useful thing it does. Our script again, run the same day.',
      body: [
        { kind: 'code', label: 'Project 2 &middot; sport or music, before and after', lang: 'python', code: TOPICS, note: 'Output on our run: skipping 0 words: 2 of 4, then skipping 6 words: 4 of 4. The only change between the two runs is the set of words the program ignores.' },
        { kind: 'two', mt: true,
          leftH3: 'What went wrong first',
          left: [
            'The sport sentences happen to use "the" more often. So in the first run, any new sentence full of "the", such as the drummer joined the band, scores higher for sport. The model learned the wrong pattern.',
            'This is a real problem in real systems. Common words like the and a carry almost no meaning but appear everywhere, and they can drown out the words that matter.'
          ],
          rightH3: 'What the fix teaches',
          right: [
            'Telling the program to skip six very common words lets the useful ones, band, song, goal, race, decide. The score goes from 2 of 4 to 4 of 4.',
            'Four test sentences are far too few to prove much, and a curious student should say so. Writing ten more tests, including some tricky ones, is the natural next step.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Run both versions.</b> Check you get 2 of 4, then 4 of 4.',
          '<b>Add a third topic.</b> Try food, with three example sentences, and two tests.',
          '<b>Write tricky tests.</b> "The band played at the game" belongs to which? Decide first, then run it.',
          '<b>Count the evidence.</b> Print the score dictionary for one sentence to see why the model chose.',
          '<b>Write it up.</b> One paragraph: what it does, where it fails, what you changed.'
        ] }
      ]
    },
    {
      id: 'scratch', tint: 'deep', eyebrow: 'Without typed code',
      h2: 'AI projects in Scratch with Machine Learning for Kids',
      lede: 'For sixth graders, or anyone not ready for typed code, Machine Learning for Kids connects real training to Scratch. Its own description: "This free tool introduces machine learning by providing hands-on experiences for training machine learning systems and building things with them."',
      body: [
        { kind: 'table', caption: 'How Machine Learning for Kids works, from its published English text (read 17 October 2026)', head: ['Point', 'What the site says'], rows: [
          ['Step 1', '"Collect examples of things you want to be able to recognise"'],
          ['Step 2', 'Use the examples to train a computer to recognize them'],
          ['Step 3', 'Make a game in Scratch that uses what the computer learned'],
          ['Without an account', '"Try without registering"; with Try it now you can only create one project at a time'],
          ['How long it has run', 'The tool was first made available in 2017'],
          ['Project worksheets', 'Each project has a downloadable worksheet; we counted 63 titled worksheet entries in its English text']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A good first Scratch project',
          left: [
            'Rock, Paper, Scissors suits a first try: the student photographs their own hand shapes as examples, trains, and then plays. When the game misreads a hand, the fix is obvious and physical, more examples, better lighting.',
            'The Fooled worksheet then makes the point deliberately. Its description is "Learn about how computers can be confused and can make mistakes if they\'re trained badly", and it is the lesson most worth having by grade 7.'
          ],
          rightH3: 'Moving on to Python',
          right: [
            'Scratch projects hide the learning step inside the tool. Once a student asks how it works inside, they are ready for projects 1 and 2 above, where the counting is on screen.',
            'A good order is one project of each kind: a Scratch one to see AI working, then a Python one to see how.'
          ] }
      ]
    },
    {
      id: 'fair', tint: 'tint', eyebrow: 'Science fair',
      h2: 'Turning an AI project into a science fair entry',
      lede: 'The national competition for grades 6 to 8 is reached through science fairs affiliated with Society for Science; ask whether your local fair takes computer science entries. Here is the route as Society for Science describes it, then our template for the write-up.',
      body: [
        { kind: 'table', caption: 'The Thermo Fisher Scientific Junior Innovators Challenge, from Society for Science (read 17 October 2026)', head: ['Point', 'What Society for Science says'], rows: [
          ['Who', 'Students in 6th, 7th and 8th grade in the United States'],
          ['How to enter', 'Students must first compete at a Society-affiliated science fair'],
          ['Nomination', 'The top 10% of the 6th, 7th, and 8th grade competitors at Society-affiliated fairs in the U.S. are eligible for nomination'],
          ['2026 numbers', '1,997 entrants, a Top 300, and 30 finalists'],
          ['2026 Finals Week', 'October 23 to 28, in Washington, DC']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Making an AI project fair-ready',
          left: [
            'A fair project needs a question, not just a program. "Can a bot beat my sister at rock-paper-scissors?" becomes "Does a bot that remembers only the last five moves beat one that remembers all of them?"',
            'Then it needs a fair test: the same opponent moves for both bots, enough games to mean something, and the results in a table. Project 1 above is most of that already.'
          ],
          rightH3: 'The write-up, in five parts (our template)',
          right: [
            'Question. Prediction before testing. Method, including the code and the test examples. Results, with numbers. What went wrong and what you would change.',
            'The fifth part matters most. A judge learns more from a student who can explain why the sorter failed than from one who only shows it working.'
          ] },
        { kind: 'p', mt: true, html: 'Our rough check of the published 2026 numbers: 1,997 x 0.15 is about 300, so the Top 300 was roughly the top 15% of entrants. That is our arithmetic on Society for Science\'s figures. Your school or district fair is the first step; ask a science teacher which affiliated fair it feeds. Source: <a class="ag-inline-link" href="https://www.societyforscience.org/jic/" rel="noopener" target="_blank">Society for Science, Thermo Fisher JIC</a>. We are not connected with Society for Science or Thermo Fisher Scientific.' }
      ]
    },
    {
      id: 'parents', tint: 'deep', eyebrow: 'For parents and teachers',
      h2: 'Helping without doing it for them',
      lede: 'Middle schoolers need help to finish projects, and the help is where projects go wrong. These are the rules we teach by.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask, do not type', p: 'When a student is stuck, ask what they expected and what happened. The fix they find themselves is the one they remember.' },
          { h3: 'Keep it small', p: 'A finished project with four test examples beats an ambitious one that never runs. Scope down early and often.' },
          { h3: 'No adult accounts', p: 'The Python projects here need nothing but Python. For any online tool, read its terms for the child\'s age first.' }
        ] },
        { kind: 'p', mt: true, html: 'For more on how AI fits this age, see <a class="ag-inline-link" href="/ai-literacy-for-students">AI literacy for students</a> and our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>. Students who outgrow these projects can move on to <a class="ag-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Project by project',
    h2: 'Four stages of a middle schooler building AI',
    lede: 'Where a first project leaves a student, and what the next one adds.',
    table: { caption: 'Stages of AI project work in grades 6 to 8 (ours)', head: ['Level', 'What the student can show'], rows: [
      ['1. Trainer', 'Has trained a model in a tool such as AI for Oceans'],
      ['2. Tester', 'Tests on new examples and counts the right answers'],
      ['3. Coder', 'Has written a learning program in Python'],
      ['4. Investigator', 'Changes one thing, measures it, and explains why']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the leap. Ask "did you test it on something new?" after every project.',
      'Stage 4 is science fair ready, whatever the grade.'
    ] },
    right: { h3: 'For students', ps: [
      'When your model gets something wrong, celebrate. You just found your next experiment.',
      'Keep a notebook of every change and its score. It becomes your write-up.'
    ] }
  },

  catalogue: {
    eyebrow: 'The course catalog',
    h2: 'Nine courses for middle school makers',
    lede: 'Live online with a regular teacher, in a batch or one to one. Teen courses suit eighth graders who have turned 13.',
    bands: [
      { num: 'I', h3: 'Blocks and ideas', sub: 'Ages 6 to 14', courses: [
        { code: 'APMS / BLK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'The home of the Machine Learning for Kids games.' },
        { code: 'APMS / BLK / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI learns, shown with builds.' },
        { code: 'APMS / BLK / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Ages 8 to 12: apps built from blocks.' }
      ] },
      { num: 'II', h3: 'First typed code', sub: 'Ages 8 to 15', courses: [
        { code: 'APMS / TYP / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Where projects 1 and 2 are taught.' },
        { code: 'APMS / TYP / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Counting, chance and averages in Python.' },
        { code: 'APMS / TYP / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Building with AI help, explained.' }
      ] },
      { num: 'III', h3: 'Ready for more', sub: 'Ages 13 and up', courses: [
        { code: 'APMS / MOR / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Bigger programs and real datasets.' },
        { code: 'APMS / MOR / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'The next step after these projects.' },
        { code: 'APMS / MOR / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Ages 14 and up, with basic Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Project classes that fit around middle school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, at a time that suits your US time zone.' },
      { time: 'Weekends', l: 'Weekend mornings, good for longer builds.' },
      { time: '1-on-1', l: 'Paced to a science fair date.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'Who knows the project from day one.' },
      { h3: 'Their own idea', p: 'We help shape it; they build it.' },
      { h3: 'Tested properly', p: 'Every project meets new examples.' },
      { h3: 'Write-up included', p: 'The five-part template, used in class.' },
      { h3: 'From home', p: 'Live video, any state.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have finished',
  projectsLede: 'Work by learners who started with a first small project. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents on Google, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'Every project on this page can be built for free at home, and we say so. Our classes add a teacher, billed monthly in US dollars with no long contract; stop after any month.',
    free: ['A free first class', 'Start a project in it', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Built around a fair date', 'Times at your convenience']
  },

  faq: {
    eyebrow: 'Questions from families and teachers',
    h2: 'AI projects for middle schoolers: common questions',
    items: [
      { q: 'What is a good AI project for a middle school student?', a: 'One that teaches a single real idea and can be finished in a few weeks: a rock-paper-scissors bot that learns habits, a message sorter that learns topics, a Scratch game trained in Machine Learning for Kids, or AI for Oceans.' },
      { q: 'Can a sixth grader build an AI project?', a: 'Yes. Browser and Scratch tools let a sixth grader train a model with no typed code. CodeAI\'s AI for Oceans has students train a real machine learning model to identify sea creatures and trash in the ocean.' },
      { q: 'Does my child need an account for these projects?', a: 'Not for the Python projects on this page, which need only Python. Machine Learning for Kids offers a Try without registering option, limited to one project at a time.' },
      { q: 'Can an AI project go to a science fair?', a: 'Yes, if your school or district fair accepts computer science entries; ask your science teacher. For grades 6 to 8, the Thermo Fisher Scientific Junior Innovators Challenge is reached by competing first at a Society-affiliated science fair.' },
      { q: 'How do students qualify for the Junior Innovators Challenge?', a: 'Society for Science says the top 10% of 6th, 7th and 8th grade competitors at its affiliated fairs in the US are eligible for nomination. In 2026 there were 1,997 entrants and 30 finalists.' },
      { q: 'Why did the message sorter get answers wrong at first?', a: 'Because common words like the appeared more in the sport examples, so any sentence full of them looked like sport. Skipping six common words fixed it, which is a real technique in language AI.' },
      { q: 'Should I help my child with their AI project?', a: 'Help by asking questions, not by writing code. Ask what they expected and what happened. A project the student can explain is worth more than a polished one they cannot.' },
      { q: 'Do you build projects for students?', a: 'No. We teach the ideas and the code so students build their own projects. That is also what science fairs expect.' },
      { q: 'When are classes for US middle schoolers?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do your project classes cost?', a: 'The first class is free. After that, families pay monthly, and the fees section of this page gives the figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families with a young builder.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for US families.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Ten account-free builds, ages 6 to 12.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'The next ladder up.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Our live AI classes for children.' },
      { href: '/python-for-13-year-olds', label: 'Python for 13 year olds', p: 'For eighth graders ready for more.' },
      { href: '/blog/how-to-teach-kids-ai-at-home', label: 'Teaching AI at home', p: 'Activities that need no tools.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade and any project idea, however rough. In the first class they start building it, and you see how we teach.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a> and their syllabuses.',
    note: 'Our teachers teach from India over live video, so any US family can join from home. WhatsApp is the quickest way to reach us.',
    formNote: 'Free first class, no card details asked.'
  },

  footer: {
    cols: [
      { h4: 'Young builders', links: [
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-classes-for-kids', label: 'AI classes for kids' },
        { href: '/ai-literacy-for-students', label: 'AI literacy for students' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' },
        { href: '/python-for-11-year-olds', label: 'Python for 11 year olds' }
      ] }
    ],
    bottomRight: 'Count the patterns, then test on something new'
  },

  personalityCss: `
.ag-root.ag-apms .ag-hero h1 { letter-spacing: -0.013em; max-width: 18ch; }
.ag-root.ag-apms .ag-capsule { border-left-width: 5px; border-radius: 5px; }
.ag-root.ag-apms .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-apms .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-apms .ag-steps { gap: 0.95rem; }
.ag-root.ag-apms .ag-band-head h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Tool and organiser pages read raw on 17 October 2026: Machine Learning for Kids English text (free tool description, first available in 2017, three steps, Try without registering, one project at a time, worksheet descriptions for Rock, Paper, Scissors, Journey to school, Top Trumps, Fooled, Headline testing, Smart Classroom and Chatbots); CodeAI Hour of AI (AI for Oceans); Society for Science JIC (grades 6 to 8, affiliated fair first, top 10% nomination, 2026: 1,997 entrants, Top 300, 30 finalists, October 23 to 28 in Washington, DC); Python collections.Counter.',
    localProject: 'Two plain-Python projects (ours, run with Python 3.13): a rock-paper-scissors bot using Counter.most_common that won 7 of 10 (7 / 10 = 70%), and a sport-or-music word-count sorter that scored 2 of 4 until six common words were skipped, then 4 of 4; plus a ten-project table by grade, a five-part science fair write-up and the 1,997 x 0.15 = about 300 check. Lesson family: patterns in data.',
    requiredMentions: ['train a real machine learning model to identify sea creatures and trash in the ocean', 'Make a Rock, Paper, Scissors game in Scratch that learns to recognise hand shapes.', 'Train the computer to be able to predict how you travel to school in the morning.', 'Create a testing tool in Scratch to measure how good a machine learning model is.', 'This free tool introduces machine learning by providing hands-on experiences', 'The tool was first made available in 2017', 'The top 10% of the 6th, 7th, and 8th grade competitors at Society-affiliated fairs in the U.S. are eligible for nomination', '1,997 entrants', 'bot won 7 of 10', 'skipping 6 words: 4 of 4', '1,997 x 0.15 is about 300', 'Counter(history).most_common(1)'],
    sources: [
      { claim: 'Machine Learning for Kids description, history, three steps, no-registration option and worksheet descriptions.', url: 'https://machinelearningforkids.co.uk/static/languages/en.json' },
      { claim: 'AI for Oceans trains a real machine learning model on sea creatures and trash.', url: 'https://code.org/hour-of-ai' },
      { claim: 'JIC eligibility, affiliated fair route, top 10% nomination and 2026 figures.', url: 'https://www.societyforscience.org/jic/' },
      { claim: 'collections.Counter and most_common.', url: 'https://docs.python.org/3/library/collections.html' }
    ],
    rejectedClaims: [
      'The Machine Learning for Kids Titanic and Phishing worksheets: real projects, left out as disaster and crime topics.',
      'The JIC\'s description of itself as the premier competition, and named past winners: not repeated.',
      'Teachable Machine: its FAQ did not render raw, so it is not described or recommended.',
      'That the Top 300 is exactly 15% of entrants: our 1,997 x 0.15 check is rough and labelled as ours.',
      'Any affiliation with Society for Science, Thermo Fisher Scientific, Machine Learning for Kids or CodeAI: none, and the page says so.'
    ]
  }
};
