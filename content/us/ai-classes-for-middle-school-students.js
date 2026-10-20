'use strict';
// AI classes for middle school students (ag- topic door; US cluster Phase 2, row 19).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Never twins /coding-classes-for-middle-school-students (general coding, CS standards) or /ai-classes-for-kids: this page is
// about AI classes for grades 6 to 8 specifically: what schools now offer, what a good class covers, and safety by age.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-classes-for-middle-school-students/):
//  - CodeAI, Artificial Intelligence Discoveries (code.org/curriculum/artificial-intelligence-discoveries): "Duration :
//    Semester, School Year, Quarter"; "AI and Machine Learning moves to Unit 2"; unit list incl. "How ML works, training data,
//    classification models, bias in AI systems", "Programming with Music Lab"; "Choose between Circuit Playground or BBC
//    micro:bit"; AI Tutor support "without giving away the answer"; "Web Lab and AI tools are built for students ages 11 and
//    up"; AI Tutor interactions "automatically deleted after 90 days"; "Student interactions are never used to train
//    third-party AI models"; "AI Discoveries connects directly to AI Foundations".
//  - Day of AI news release, "New York, NY (August 19, 2026)": grade bands, "Upper Elementary and Middle School (Grades 5-8):
//    Students examine predictions, data, machine learning, bias, fairness, and privacy"; topics incl. "mandatory fact-checking
//    of AI-generated content"; "Founded in 2021 through MIT's RAISE initiative"; "became an independent nonprofit in 2024";
//    "reached over 4 million students". (The release's "first" claim is not repeated.)
//  - CodeAI, Hour of AI (code.org/hour-of-ai): "The Hour of Code is now the Hour of AI"; ""100 one-hour tutorials, available in over 45 languages".
//  - Machine Learning for Kids, English strings file (machinelearningforkids.co.uk/static/languages/en.json): "If you are under
//    the age of 13, please only use a small language model with supervision from a trusted adult."
//  - Python docs, math.dist: "Euclidean distance between two points p and q".
// Not used: AI4K12 (ai4k12.org returned HTTP 429), CSTA standards (csteachers.org returned HTTP 403), FTC and eCFR COPPA pages
// (not readable raw; a non-government copy was not used), Teachable Machine (FAQ not readable raw).
// Our own material, labelled on the page: the dance-or-chill nearest-neighbour script in plain Python and its output (run with
// Python 3.13 on 17 October 2026: (120, 6) dance, (95, 3) chill, (100, 6) chill), the distance arithmetic for (100, 6)
// (to (90, 2) about 10.8; to (118, 7) about 18.0), the typical grade-to-age table, the five checks for a class and the
// twelve-week plan.
// Lesson family: learning from examples (nearest neighbour, and why the scale of a feature matters).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const NEAREST = `# Teach the computer: dance song or chill song? (ours)
import math

# examples: (beats per minute, loudness 1 to 10) -> label
examples = [
    ((128, 8), "dance"), ((124, 9), "dance"),
    ((118, 7), "dance"), ((132, 8), "dance"),
    ((70, 3), "chill"),  ((82, 4), "chill"),
    ((90, 2), "chill"),  ((76, 5), "chill"),
]

def guess(song):
    # find the example closest to the new song
    nearest = min(examples,
                  key=lambda ex: math.dist(ex[0], song))
    return nearest[1]

print(guess((120, 6)))   # a new song
print(guess((95, 3)))
print(guess((100, 6)))   # a hard one`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MIDDLE SCHOOL AI', blurb: 'AI classes for US middle schoolers in grades 6 to 8: what schools now teach, what a good class covers, which tools fit the age, and a first model in plain Python.' },
  slug: 'ai-classes-for-middle-school-students',
  code: 'ai',
  accent: '#12665E',
  accentRationale: 'Middle school AI door, US row 19: the muted teal #12665E allocated in alloc.tsv, distinct from the other US accents and dark enough for body links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI classes for middle school students',
  title: 'AI Classes for Middle School Students: Grades 6 to 8',
  description: 'AI classes for middle school students in the US: what grades 6 to 8 learn about AI at school, what a good class adds, safe tools by age, and a first Python model.',
  ogDescription: 'Middle schoolers are now taught how AI is trained, where it fails and how to check it. What a good AI class for grades 6 to 8 covers, which tools suit ages 11 to 14, and a first model in Python.',
  twitterDescription: 'AI classes for US middle schoolers: what school covers, what a good class adds, and a first model in Python.',
  pageName: 'AI Classes for Middle School Students',
  webPageDescription: 'A guide for US parents of students in grades 6 to 8 to AI classes: the new school curricula, what a good class should teach, tool safety by age, and an original first project in plain Python.',
  courseDescription: 'Live online AI literacy, Python and machine learning classes for US middle school students in grades 6 to 8, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI classes for middle school students',
  navLinks: [
    { href: '#school', label: 'At school' },
    { href: '#topics', label: 'What to learn' },
    { href: '#safe', label: 'Safe tools' },
    { href: '#model', label: 'First model' },
    { href: '#plan', label: 'Twelve weeks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 8 &middot; Ages 11 to 14',
  h1: 'AI classes for middle school students',
  lede: 'Middle school is when AI stops being a toy and starts being homework help, a search engine and a source of rumors, all at once. It is also, conveniently, the age when students can understand how it works: that a model learns from examples, that the examples can be skewed, and that a confident answer can be wrong. US schools have started teaching exactly this. This page explains what that school teaching now covers in grades 6 to 8, what a good outside class should add, which tools suit an 11 year old versus a 14 year old, and what a first model looks like in a few lines of Python.',
  secondaryCta: { href: '#model', label: 'See a first model' },
  wa: 'Hello Modern Age Coders, my middle schooler in the US is interested in AI. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI explained to the age, not dumbed down',
  spec: [
    ['For', 'Grades 6 to 8, ages 11 to 14'],
    ['At school', 'CodeAI AI Discoveries, Day of AI'],
    ['Core ideas', 'Data, training, bias, checking'],
    ['First code', 'Plain Python, no accounts'],
    ['Tools', 'Chosen for the student\'s age'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'A good AI class for middle schoolers teaches how models learn from data, where they go wrong (bias, made-up answers), how to check AI output, and a first model in code. US schools increasingly cover this through CodeAI\'s AI Discoveries and Day of AI. Modern Age Coders teaches AI live online for grades 6 to 8 through its AI Literacy course (ages 8 to 14) and its Python courses, as a batch or one to one.',

  picks: {
    eyebrow: 'Live AI classes for grades 6 to 8',
    h2: 'Courses built for the middle school years',
    lede: 'Chosen for ages 11 to 14. Each is taught live by a regular teacher who adjusts the pace to the student.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'AIMS / 01', title: 'AI literacy, ages 8 to 14', note: 'How AI learns, where it fails, and how to check it, with small builds.' },
      { course: 'python-ai-kids-masterclass', code: 'AIMS / 02', title: 'Python and AI, ages 9 to 12', note: 'Real typed code for sixth and seventh graders, with smart projects.' },
      { course: 'python-complete-masterclass-teens', code: 'AIMS / 03', title: 'Python for eighth graders, 13 and up', note: 'The teen Python course, for students ready for longer programs.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: 'tint', eyebrow: 'What school now offers',
      h2: 'AI in US middle schools: two free curricula worth knowing',
      lede: 'Two nonprofits now publish full AI courses for middle school, free for any school to adopt. Knowing what they cover helps a parent judge what an outside class should add. Both are described here from their own pages, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Two middle school AI curricula, from the publishers\' pages (read 17 October 2026)', head: ['', 'CodeAI AI Discoveries', 'Day of AI PreK to 12 curriculum'], rows: [
          ['Who publishes it', 'CodeAI, the nonprofit formerly presented as Code.org', 'Day of AI, founded in 2021 through MIT\'s RAISE initiative'],
          ['Middle school content', 'A unit on AI and machine learning: how ML works, training data, classification models, bias in AI systems', 'Grades 5 to 8: predictions, data, machine learning, bias, fairness and privacy'],
          ['Length', 'A quarter, a semester or a school year', 'Grade-by-grade lessons across the year'],
          ['Also covers', 'Web development, games, apps, data, devices', 'Fact-checking AI output, data privacy, environmental impacts'],
          ['Released', 'Current course page', 'Announced August 19, 2026'],
          ['Cost to schools', 'Free', 'Free to educators, schools and districts']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'AI Discoveries in more detail',
          left: [
            'CodeAI rebuilt its middle school course around AI. Its page says AI and Machine Learning moves to Unit 2, so AI ideas come early in the year rather than at the end, and AI Discoveries connects directly to AI Foundations, the high school course.',
            'The physical computing unit lets classes choose between Circuit Playground or BBC micro:bit, and an AI Tutor in programming units helps students work through problems without giving away the answer.'
          ],
          rightH3: 'Day of AI in more detail',
          right: [
            'Day of AI says it became an independent nonprofit in 2024 and has reached over 4 million students. Its new curriculum, announced in a release dated August 19, 2026, is built as a progression from preschool to grade 12.',
            'For grades 5 to 8 the release lists predictions, data, machine learning, bias, fairness, and privacy, and among its broader topics, mandatory fact-checking of AI-generated content. That last one is the habit most worth bringing home.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://code.org/curriculum/artificial-intelligence-discoveries" rel="noopener" target="_blank">CodeAI AI Discoveries</a>; the <a class="ag-inline-link" href="https://dayofai.org/news/day-of-ai-launches-nations-first-free-grade-by-grade-prek-12-ai-literacy-curriculum" rel="noopener" target="_blank">Day of AI curriculum release</a>. We are not connected with CodeAI or Day of AI. Ask your child\'s teacher which, if either, the school uses.' }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'What to learn',
      h2: 'What a good AI class for grades 6 to 8 should cover',
      lede: 'Our list, built from what the school curricula above emphasize and from the questions middle schoolers bring to class. A class that covers only the first row is a tool tutorial, not an AI class.',
      body: [
        { kind: 'table', caption: 'Five things a middle school AI class should teach (ours)', head: ['Topic', 'What the student can do after', 'A question that tests it'], rows: [
          ['Using AI carefully', 'Ask a clear question and judge the answer', '"How would you check that?"'],
          ['Learning from examples', 'Explain that a model copies patterns in its training data', '"Where did it learn that?"'],
          ['Bias and gaps', 'Spot when examples leave someone or something out', '"Who is missing from the examples?"'],
          ['Wrong but confident', 'Know that fluent text can be invented', '"Is there a source for this?"'],
          ['A first model in code', 'Train and test a tiny model themselves', '"What happens if we add one more example?"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why middle school is the right moment',
          left: [
            'Sixth graders meet AI in search results, recommendations and voice assistants, often without knowing it, and chatbots are a click away by eighth grade. Learning how these systems work before habits set is easier than unlearning them at 16.',
            'Middle schoolers are also ready for the core idea. A twelve year old can follow why a model trained only on loud songs will call every song loud, and that one example carries most of AI literacy.'
          ],
          rightH3: 'How it differs from a coding class',
          right: [
            'A coding class teaches a language. An AI class teaches how systems learn from data, using code as one of its tools. The strongest mix is a class where students write the small model themselves.',
            'For general programming at this age, from Scratch to Python, see our page on <a class="ag-inline-link" href="/coding-for-12-year-olds">coding for 12 year olds</a>. This page stays on AI.'
          ] }
      ]
    },
    {
      id: 'safe', tint: 'tint', eyebrow: 'Safe tools by age',
      h2: 'Which AI tools suit an 11 year old, and which wait until 13 or later',
      lede: 'Grades 6 to 8 straddle an important line: 13 is a common minimum age in online terms (edX, for one, requires users to be at least 13), and some services set a higher age. Read each tool\'s own terms before a child signs up. These are the points we could check at source.',
      body: [
        { kind: 'table', caption: 'Typical US grade and age, and what that means for AI tools (ages typical; tool rules from each provider, read 17 October 2026)', head: ['Grade', 'Typical age', 'What to know'], rows: [
          ['6', '11 to 12', 'CodeAI says Web Lab and AI tools are built for students ages 11 and up'],
          ['7', '12 to 13', 'Machine Learning for Kids asks under-13s to use only a small language model with an adult supervising'],
          ['8', '13 to 14', 'Some services open at 13, some only with a parent\'s consent, and some later; check each one\'s terms'],
          ['Any', 'Any', 'Plain Python on the family computer needs no account at all']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the providers say',
          left: [
            'CodeAI states that AI Tutor interactions in AI Discoveries are stored securely and automatically deleted after 90 days, and that student interactions are never used to train third-party AI models. That is the kind of statement to look for in any tool a school uses.',
            'Machine Learning for Kids, a free teaching tool, tells users: "If you are under the age of 13, please only use a small language model with supervision from a trusted adult." It is a sensible rule well beyond that one site.'
          ],
          rightH3: 'How we choose tools in class',
          right: [
            'For students under 13 we teach the ideas with Scratch, with tools built for children, and with Python that runs offline. Nothing needs the child to create an account on an adult service.',
            'For 13 and 14 year olds we add tools whose terms allow teenagers, with a parent\'s consent where the terms ask for it. Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> lists what popular tools\' terms say.'
          ] },
        { kind: 'p', mt: true, html: 'For homework, the line that matters is honesty about what the student did. Our guide to <a class="ag-inline-link" href="/blog/safe-ai-tools-for-kids-homework-2025">safe AI tools for homework</a> goes through it, and <a class="ag-inline-link" href="/blog/how-to-teach-kids-ai-at-home">teaching kids AI at home</a> has activities that need no tool at all.' }
      ]
    },
    {
      id: 'model', tint: 'deep', eyebrow: 'A first model',
      h2: 'A first AI model a middle schooler can write and understand',
      lede: 'This is the first model we suggest a middle schooler writes. It uses plain Python, no libraries to install and no accounts, and it learns from eight examples. We wrote it and checked the output under Python 3.13 on 17 October 2026.',
      body: [
        { kind: 'code', label: 'Dance song or chill song: nearest neighbor by hand', lang: 'python', code: NEAREST, note: 'Output on our run: dance, then chill, then chill. Python\'s math.dist gives the Euclidean distance between two points, so the model simply finds the example song closest to the new one and copies its label.' },
        { kind: 'two', mt: true,
          leftH3: 'The surprise in the third answer',
          left: [
            'A song at 100 beats per minute and loudness 6 sounds like it could go either way. The model says chill. Our arithmetic: its distance to the chill example (90, 2) is about 10.8, and to the dance example (118, 7) about 18.0.',
            'Why? Tempo numbers run from 70 to 132, while loudness only runs from 2 to 9. A difference of 18 in tempo outweighs everything loudness can say. The model is not weighing the two features fairly.'
          ],
          rightH3: 'What the student has just learned',
          right: [
            'That a model only knows its examples, and that the way data is measured changes the answer. Real machine learning engineers fix this with scaling, and a middle schooler has now seen why it matters.',
            'Next steps in class: add examples and watch answers change, invent a song the model gets wrong, then rescale tempo to 1 to 10 and run it again.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Run it as written.</b> Check the three answers match.',
          '<b>Add a ninth example.</b> Put a dance song at (100, 5) and run the third guess again.',
          '<b>Break it on purpose.</b> Find a new song the model labels wrongly and say why.',
          '<b>Fix the scale.</b> Divide every tempo by 13 so both features run about 1 to 10, then compare.',
          '<b>Explain it to someone.</b> If they understand why the third answer changed, the lesson worked.'
        ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Twelve weeks',
      h2: 'What a middle schooler covers in twelve weeks of AI classes',
      lede: 'Our plan for a first term, for students in grades 6 to 8 with or without coding. Students who already code move faster through weeks 1 to 4.',
      body: [
        { kind: 'table', caption: 'A first term of AI for grades 6 to 8 (ours)', head: ['Weeks', 'Focus', 'Made by the student'], rows: [
          ['1 to 2', 'What AI is and is not; where they already meet it', 'A list of AI they used this week, sorted by how sure they are'],
          ['3 to 4', 'Examples and patterns, in Scratch or on paper', 'A sorting game a friend can play'],
          ['5 to 6', 'A first model in Python', 'The dance or chill script, extended with their own songs'],
          ['7 to 8', 'Bias and missing data', 'A model that fails on purpose, and a fix'],
          ['9 to 10', 'Checking AI answers', 'Three AI claims, each checked against a real source'],
          ['11 to 12', 'A small project of their choice', 'A model, a test and a two-minute explanation']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 6', p: 'More discussion and Scratch, shorter Python. The ideas are the same; the code is lighter.' },
          { h3: 'Grade 7', p: 'The full plan as written, with the project in weeks 11 and 12 chosen by the student.' },
          { h3: 'Grade 8', p: 'Faster through the basics, then a second model with a real dataset and an honest test.' }
        ] },
        { kind: 'p', mt: true, html: 'Schools are adding AI activities too. CodeAI says the Hour of Code is now the Hour of AI, with 100 one-hour tutorials available in over 45 languages. A one-hour activity is a good taster; a term of classes is where understanding sets in.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From user to maker',
    h2: 'Four stages of a middle schooler learning AI',
    lede: 'Where a sixth grader might start, and where a year of good teaching can take them.',
    table: { caption: 'Stages of AI understanding in grades 6 to 8 (ours)', head: ['Stage', 'How you can tell'], rows: [
      ['1. User', 'Uses AI apps; trusts most answers'],
      ['2. Questioner', 'Asks where an answer came from, and checks'],
      ['3. Explainer', 'Can say how a model learns from examples'],
      ['4. Maker', 'Has written a small model and broken it on purpose']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the one that protects your child. Ask "how would you check that?" at dinner and you are teaching it.',
      'Stage 4 is where a middle schooler becomes genuinely ahead: not using more AI, but understanding it.'
    ] },
    right: { h3: 'For students', ps: [
      'When an AI answer surprises you, ask where it learned it. That question is most of AI.',
      'Write your own tiny model. Once you have, every AI app makes a bit more sense.'
    ] }
  },

  catalogue: {
    eyebrow: 'The course catalog',
    h2: 'Nine courses for students in grades 6 to 8',
    lede: 'Live online with a regular teacher, as a batch or one to one. Courses marked 13 and up suit eighth graders who have turned 13.',
    bands: [
      { num: 'I', h3: 'Ideas first', sub: 'Ages 8 to 14', courses: [
        { code: 'AIMS / IDE / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'Understanding AI, not just using it.' },
        { code: 'AIMS / IDE / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Patterns and logic, before typed code.' },
        { code: 'AIMS / IDE / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Ages 10 to 15: the math under the models.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 12', courses: [
        { code: 'AIMS / COD / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Games, turtle art and first smart programs.' },
        { code: 'AIMS / COD / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Ages 8 to 12: making with AI, explained.' },
        { code: 'AIMS / COD / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Pages a model can live on.' }
      ] },
      { num: 'III', h3: 'Eighth grade and up', sub: 'Ages 13 and over', courses: [
        { code: 'AIMS / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Longer programs and real data.' },
        { code: 'AIMS / TEN / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens (13+)', blurb: 'Teen-suitable tools, used with care.' },
        { code: 'AIMS / TEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'From one neuron to trained networks.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes around a middle school schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school and activities, in your US time zone.' },
      { time: 'Weekends', l: 'Weekend mornings, before the day fills up.' },
      { time: '1-on-1', l: 'Paced for one child, at your convenience.' }
    ],
    cells: [
      { h3: 'A familiar teacher', p: 'The same face every week.' },
      { h3: 'Age-fit tools', p: 'Nothing that needs an adult account.' },
      { h3: 'Ideas, then code', p: 'Discussion first, then a model they write.' },
      { h3: 'Parents in the loop', p: 'What we covered and what to ask at home.' },
      { h3: 'From home', p: 'Live video, any state.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What our younger students have made',
  projectsLede: 'Projects from students who started at this age. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' words from Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'School AI curricula are free and we encourage them. Our live classes are paid month to month in US dollars, with no term contract, so a family can stop after any month.',
    free: ['A free first class', 'Your child sets the questions', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced for your child', 'Times at your convenience']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'AI classes for middle schoolers: common questions',
    items: [
      { q: 'What should an AI class for middle school students teach?', a: 'How models learn from examples, where they go wrong through bias and invented answers, how to check AI output, and a first small model in code. Using AI tools well is part of it, not all of it.' },
      { q: 'Do US middle schools teach AI?', a: 'Some do, and free curricula make it easier. CodeAI publishes a free middle school course, AI Discoveries, with a unit on AI and machine learning, and Day of AI publishes a free grade-by-grade curriculum that covers grades 5 to 8. Ask your school which it uses.' },
      { q: 'Is AI safe for an 11 year old?', a: 'With the right tools and supervision, yes. CodeAI says its Web Lab and AI tools are built for students ages 11 and up, and Machine Learning for Kids asks under-13s to use only a small language model with a trusted adult supervising.' },
      { q: 'Can a middle schooler use ChatGPT?', a: 'Check the tool\'s own terms first, because age rules differ between services and change over time. For students under 13 we teach the ideas without adult chatbot accounts, using child-suitable tools and offline Python.' },
      { q: 'Does my child need to code before an AI class?', a: 'No. A good class starts with ideas and examples, then introduces a small amount of Python. Our first model on this page is about 20 lines.' },
      { q: 'What is the difference between AI classes and coding classes?', a: 'Coding classes teach a programming language. AI classes teach how systems learn from data, using code as one tool. Doing both, in that order or side by side, works well.' },
      { q: 'What happens to my child\'s data in school AI tools?', a: 'It depends on the tool, so ask the school. CodeAI says AI Tutor interactions in AI Discoveries are automatically deleted after 90 days and never used to train third-party AI models.' },
      { q: 'Which course should an eighth grader take?', a: 'An eighth grader who is 13 or older can usually join our teen Python course or AI tools course for ages 13 and up. Younger or newer students start with AI literacy for ages 8 to 14.' },
      { q: 'When are classes for US middle schoolers?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do your AI classes cost?', a: 'The first class is free. After that, families pay monthly, and the fees section of this page shows the figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families with a middle schooler.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our full set of US pages.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'For younger children, ages 6 to 12.' },
      { href: '/ai-literacy-for-students', label: 'AI literacy for students', p: 'The five abilities, age by age.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Builds that need no accounts.' },
      { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds', p: 'The step up for eighth graders.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids', p: 'Every track, ages 6 to 14.' },
      { href: '/ai-projects-for-middle-school-students', label: 'AI projects for middle school students', p: 'Ten AI projects for US middle schoolers, two in real Python, and how to take one to a science fair.' },
      { href: '/ai-research-programs-for-high-school-students', label: 'AI research programs for high school students', p: 'AI research programs for US high schoolers, from the 2026 to 2027 rules, with a fair-test experiment.' },
      { href: '/ai-certification-for-high-school-students', label: 'AI certification for high school students', p: 'Four AI and Python certification exams for US high schoolers, compared from the issuers\' own pages.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade and what they already do with AI. The teacher starts the first class from a question your child brings.',
    readFirst: 'To see the approach first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all our courses</a> with full syllabuses.',
    note: 'Classes are live on video with teachers based in India, so families in any US state can join without travel. Message us on WhatsApp for a quick reply.',
    formNote: 'Free first class. We never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'AI for younger students', links: [
        { href: '/ai-classes-for-kids', label: 'AI classes for kids' },
        { href: '/ai-literacy-for-students', label: 'AI literacy for students' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' }
      ] }
    ],
    bottomRight: 'A model only knows its examples'
  },

  personalityCss: `
.ag-root.ag-ai .ag-hero h1 { letter-spacing: -0.012em; max-width: 17ch; }
.ag-root.ag-ai .ag-capsule { border-left-width: 6px; border-radius: 8px; }
.ag-root.ag-ai .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-ai .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ai .ag-steps { gap: 0.85rem; }
.ag-root.ag-ai .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Provider pages read raw on 17 October 2026: CodeAI AI Discoveries (quarter, semester or year; AI and Machine Learning moves to Unit 2; ML unit topics; Circuit Playground or BBC micro:bit; AI Tutor without giving away the answer; tools built for ages 11 and up; AI Tutor data deleted after 90 days and never used to train third-party models; connects to AI Foundations); Day of AI release of August 19, 2026 (grades 5 to 8 topics, fact-checking, founded 2021, independent nonprofit 2024, over 4 million students); CodeAI Hour of AI (Hour of Code is now the Hour of AI, 100 tutorials in over 45 languages); Machine Learning for Kids under-13 guidance; Python math.dist.',
    localProject: 'A nearest-neighbour model in plain Python (ours, run with Python 3.13): eight labelled songs by tempo and loudness, math.dist to the closest example, answers dance, chill, chill, with the distance arithmetic for (100, 6) showing how a large-scale feature dominates, plus a five-step extension, a five-topic class checklist and a twelve-week plan. Lesson family: learning from examples and feature scale.',
    requiredMentions: ['Web Lab and AI tools are built for students ages 11 and up', 'automatically deleted after 90 days', 'never used to train third-party AI models', 'AI and Machine Learning moves to Unit 2', 'choose between Circuit Playground or BBC micro:bit', 'predictions, data, machine learning, bias, fairness, and privacy', 'became an independent nonprofit in 2024', 'If you are under the age of 13, please only use a small language model with supervision from a trusted adult', 'the Hour of Code is now the Hour of AI', '100 one-hour tutorials available in over 45 languages', 'math.dist(ex[0], song)', 'about 10.8'],
    sources: [
      { claim: 'AI Discoveries units, durations, devices, AI Tutor, age of tools, data deletion and link to AI Foundations.', url: 'https://code.org/curriculum/artificial-intelligence-discoveries' },
      { claim: 'Day of AI grade bands and topics, founding, nonprofit status and reach.', url: 'https://dayofai.org/news/day-of-ai-launches-nations-first-free-grade-by-grade-prek-12-ai-literacy-curriculum' },
      { claim: 'Hour of Code renamed Hour of AI; tutorial count and languages.', url: 'https://code.org/hour-of-ai' },
      { claim: 'Under-13 guidance for language models.', url: 'https://machinelearningforkids.co.uk/' },
      { claim: 'math.dist returns the Euclidean distance between two points.', url: 'https://docs.python.org/3/library/math.html' }
    ],
    rejectedClaims: [
      'AI4K12 and CSTA standards: ai4k12.org returned HTTP 429 and csteachers.org returned HTTP 403, neither retried, so no standards text is quoted.',
      'The COPPA under-13 definition: the FTC and eCFR pages did not return readable text raw, so the law is not quoted; the page speaks of each tool\'s own terms instead.',
      'Day of AI\'s description of its curriculum as the first of its kind: not repeated.',
      'Named chatbots as suitable for middle schoolers: none recommended; terms differ and change.',
      'Any affiliation with CodeAI, Day of AI or Machine Learning for Kids: none, and the page says so.'
    ]
  }
};
