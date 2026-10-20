'use strict';
// AI summer programs for high school students (ag- topic door; US cluster Phase 2, row 23).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Never twins /summer-research-programs-coding (RSI, PRIMES, SSP) or the CS summer programs page; this page covers the
// AI-specific summer options and an AI summer a student can run at home, with real code.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-summer-programs-for-high-school-students/):
//  - Carnegie Mellon Pre-College, AI Scholars (cmu.edu/pre-college/academic-programs/ai_scholars.html): "fully funded,
//    merit-based program for rising high school seniors"; "four-week residential experience at Carnegie Mellon University in
//    Pittsburgh"; "Virtual Pre-Program Python Course", held "approximately one month before arrival", "Prior coding experience
//    is not required."; "Core AI Curriculum: Taught by Carnegie Mellon faculty"; "Capstone Symposium"; "All students leave the
//    program with a completed college application essay"; concurrent summer programs "not permitted"; "You must be 16 years of
//    age by June 26, 2027"; "between your 11th and 12th grade years"; U.S. citizen or permanent resident; dates June 26 to
//    July 24, 2027; application deadline February 1, 2027; decision release April 1, 2027; "There is no option for participants
//    to pay out of pocket tuition fees for this program". (Financial-need detail is not printed.)
//  - CMU CS Scholars page: rising juniors; completers "may be invited to return as rising seniors to CMU's AI Scholars program".
//  - MIT Beaver Works Summer Institute (bwsi.mit.edu, programs, FAQ, apply-now): CogWorks "It was created in 2017", "three
//    distinct modules, which focus on applications of machine learning in the domains of audio, vision, and language", "all
//    lectures are paired with detailed Python-based exercises", "tools like git and VSCode"; Serious Games Development with
//    Artificial Intelligence, students "create their own modifications to a game"; both listed as virtual; "July 5-Aug 1 (2027
//    schedule)"; "We will not offer a residential program"; "In a grade level no higher than a junior (11th grade)"; online
//    prerequisites free; "Python Core and Computer Science and Systems (CSS)"; "All online courses will remain open for
//    independent learners"; "Only those students who live or attend high school in the United States" registered for the
//    online course receive the summer application. (Income thresholds are not printed.)
//  - AI4ALL home page: "Our no-cost virtual accelerator for college students" (AI4ALL Ignite), so it is not a high school
//    summer program today.
//  - scikit-learn docs (1.9.1): load_digits (1797 samples), train_test_split (test_size int = "absolute number of test
//    samples", stratify), DecisionTreeClassifier.score "Return accuracy on provided data and labels."
// Excluded on purpose: BWSI Medlytics (health), BWSI Remote Sensing for Disaster Response (disaster), Stanford Summer Institutes
// (one page returned HTTP 403, host not used), income and financial-need figures, named students.
// Our own material, labelled on the page: the learning-curve script and its output (run with Python 3.13 and scikit-learn 1.7.2
// on 17 October 2026: 50 images 0.440, 100 0.604, 200 0.674, 400 0.792, 800 0.808, 1297 0.844), the program comparison by
// format, the eight-week home plan, and the arithmetic 1797 - 500 = 1297 and 0.844 - 0.440 = 0.404.
// Lesson family: learning curves (how accuracy grows with data).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CURVE = `# Summer week 3: does more data help? (ours)
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

X, y = load_digits(return_X_y=True)
X_pool, X_test, y_pool, y_test = train_test_split(
    X, y, test_size=500, random_state=0, stratify=y)

for n in [50, 100, 200, 400, 800, 1297]:
    tree = DecisionTreeClassifier(random_state=0)
    tree.fit(X_pool[:n], y_pool[:n])
    acc = tree.score(X_test, y_test)
    print(f"trained on {n:4} images: {acc:.3f}")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AI SUMMER', blurb: 'AI summer programs for US high schoolers in 2027, CMU AI Scholars and MIT BWSI from their own pages, plus an eight-week AI summer a student can run from home.' },
  slug: 'ai-summer-programs-for-high-school-students',
  code: 'asph',
  accent: '#9E4267',
  accentRationale: 'AI summer door, US row 23: the muted summer berry #9E4267 allocated in alloc.tsv, distinct from the other US accents and dark enough for body links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI summer programs for high school students',
  title: 'AI Summer Programs for High School Students: 2027 Guide',
  description: 'AI summer programs for high school students in 2027: CMU AI Scholars and MIT Beaver Works AI courses from their own pages, plus an eight-week AI summer at home.',
  ogDescription: 'CMU AI Scholars runs June 26 to July 24, 2027 and closes February 1. A guide to AI summer programs for US high schoolers, and a real Python project for a summer at home.',
  twitterDescription: 'AI summer programs for US high schoolers in 2027, and an eight-week AI summer you can run at home.',
  pageName: 'AI Summer Programs for High School Students',
  webPageDescription: 'A guide for US high school students and parents to AI summer programs for 2027, built from the programs\' own pages, with an original eight-week home plan and a learning-curve project in Python.',
  courseDescription: 'Live online AI, Python and machine learning classes for US high school students over the summer, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI summer programs for high school students',
  navLinks: [
    { href: '#programs', label: 'Programs' },
    { href: '#cmu', label: 'CMU AI Scholars' },
    { href: '#bwsi', label: 'MIT BWSI' },
    { href: '#home', label: 'Summer at home' },
    { href: '#project', label: 'The project' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; Summer 2027',
  h1: 'AI summer programs for high school students',
  lede: 'Search for an AI summer program and the results mix university programs with paid camps that are hard to compare. A smaller group of programs is run by universities, publishes its rules, and is free or fully funded for the students it admits. Those are worth knowing about early, because their deadlines fall in the middle of the school year. This guide covers the AI-specific ones we could verify for summer 2027, says plainly who each one is for, and then shows the route open to every student: a structured AI summer at home with one finished project at the end.',
  secondaryCta: { href: '#home', label: 'See the eight-week plan' },
  wa: 'Hello Modern Age Coders, my high schooler in the US wants to spend summer 2027 learning AI. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Summer classes across every US time zone',
  spec: [
    ['For', 'Grades 9 to 12'],
    ['Programs covered', 'CMU AI Scholars, MIT BWSI'],
    ['Earliest deadline', 'CMU AI Scholars: February 1, 2027'],
    ['At home', 'An eight-week plan with real code'],
    ['Our courses', 'Python, AI and ML for teens'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'For summer 2027, CMU AI Scholars is a free four-week residential AI program in Pittsburgh for rising seniors (June 26 to July 24, 2027; apply by February 1, 2027), and MIT Beaver Works offers AI courses such as CogWorks for students no higher than 11th grade. Modern Age Coders runs live online AI and Python classes for teenagers 13 to 18 all summer, as a batch or one to one.',

  picks: {
    eyebrow: 'A summer with a teacher',
    h2: 'Three courses a teenager can start this summer',
    lede: 'Each runs live with a regular teacher, so a summer of learning has someone checking the work every week.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'ASPH / 01', title: 'Vibe coding for teens, 13 to 17', note: 'Three months: Python, web and AI projects, a natural summer length.' },
      { course: 'ai-ml-masterclass-teens', code: 'ASPH / 02', title: 'Machine learning for teenagers', note: 'Start in summer, continue through the school year at the same pace.' },
      { course: 'python-complete-masterclass-teens', code: 'ASPH / 03', title: 'Python from the first line', note: 'For a teenager who wants the foundations before any AI program asks for them.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'Summer 2027',
      h2: 'The AI summer programs we could verify, and who each is for',
      lede: 'Every row below comes from the program\'s own pages, read on 17 October 2026. We list only programs that are run by a university or a university lab and publish their eligibility rules. Paid commercial camps are left out because their terms change too often to check.',
      body: [
        { kind: 'table', caption: 'AI summer programs for US high schoolers, summer 2027 (from the programs\' own pages, read 17 October 2026)', head: ['Program', 'Run by', 'Who', 'Format', 'Dates and deadline'], rows: [
          ['AI Scholars', 'Carnegie Mellon University', 'Between grades 11 and 12, aged 16 by June 26, 2027, U.S. citizen or permanent resident', 'Residential, four weeks, Pittsburgh', 'June 26 to July 24, 2027; apply by February 1, 2027; decisions April 1, 2027'],
          ['CS Scholars', 'Carnegie Mellon University', 'Rising juniors', 'Residential, four weeks', 'Completers may be invited back for AI Scholars a year later'],
          ['BWSI: CogWorks', 'MIT Beaver Works', 'No higher than 11th grade, living or at school in the US', 'Listed as virtual', 'July 5 to August 1 on the 2027 schedule, after free online prerequisites'],
          ['BWSI: Serious Games with AI', 'MIT Beaver Works', 'Same as CogWorks', 'Listed as virtual', 'Same 2027 schedule']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two that people expect, and why they are not here',
          left: [
            'AI4ALL is often recommended for high schoolers, but its own home page now describes AI4ALL Ignite as a "no-cost virtual accelerator for college students". A high school student should look elsewhere for now.',
            'Universities also run paid pre-college courses, some with AI in the title. They can be good, but their fees and selectivity vary, so we suggest reading each one\'s own page rather than any list, including this one.'
          ],
          rightH3: 'What the free programs have in common',
          right: [
            'They choose students. CMU calls AI Scholars merit-based and BWSI says summer enrollment is competitive, so applying is not the same as attending.',
            'They expect preparation. CMU runs a virtual Python course a month before arrival; BWSI requires online prerequisite courses before it sends the summer application. A student who starts Python in the spring arrives ready.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://www.cmu.edu/pre-college/academic-programs/ai_scholars.html" rel="noopener" target="_blank">CMU AI Scholars</a>, <a class="ag-inline-link" href="https://www.cmu.edu/pre-college/academic-programs/computer-science-scholars.html" rel="noopener" target="_blank">CMU CS Scholars</a>, <a class="ag-inline-link" href="https://bwsi.mit.edu/bwsi-programs/" rel="noopener" target="_blank">BWSI programs</a>, the <a class="ag-inline-link" href="https://bwsi.mit.edu/faq/" rel="noopener" target="_blank">BWSI FAQ</a> and <a class="ag-inline-link" href="https://ai-4-all.org/" rel="noopener" target="_blank">AI4ALL</a>. We are not connected with Carnegie Mellon, MIT or AI4ALL. For research-heavy summers, see our <a class="ag-inline-link" href="/summer-research-programs-coding">summer research programs guide</a>.' }
      ]
    },
    {
      id: 'cmu', tint: 'deep', eyebrow: 'Carnegie Mellon',
      h2: 'CMU AI Scholars: four weeks of AI for rising seniors',
      lede: 'CMU describes AI Scholars as a four-week residential experience at Carnegie Mellon University in Pittsburgh, built around AI for students about to start senior year. CMU says all program costs are covered and that there is no option for participants to pay out of pocket tuition fees for this program.',
      body: [
        { kind: 'table', caption: 'What a summer 2027 AI Scholar does, from CMU\'s program page (read 17 October 2026)', head: ['Part', 'What CMU says'], rows: [
          ['Before arrival', 'A Virtual Pre-Program Python Course, approximately one month before arrival; prior coding experience is not required'],
          ['Core teaching', 'Core AI Curriculum: Taught by Carnegie Mellon faculty, introducing foundational computing and AI concepts'],
          ['Research', 'An introduction to ongoing research projects led by CMU faculty and graduate students'],
          ['Group project', 'Collaborative projects led by faculty, graduate students or postdoctoral researchers'],
          ['Writing', 'All students leave the program with a completed college application essay'],
          ['Finish', 'A Capstone Symposium on the final day, where groups present publicly'],
          ['Days', 'Classes, lectures and projects Monday to Friday, 9 a.m. to 6 p.m.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rules that catch families out',
          left: [
            'It is residential: admitted students must live in the CMU dorms for the full program, and CMU says participation in any concurrent summer program, virtual or in person, is not permitted. A student cannot pair it with a summer job or another course.',
            'Age and grade are both checked. The page says you must be 16 years of age by June 26, 2027 and between your 11th and 12th grade years that summer.'
          ],
          rightH3: 'How to prepare from now',
          right: [
            'CMU says no coding experience is necessary, so the strongest preparation is not a crash course. It is genuine interest you can show: a small project, a question you followed, a club you started.',
            'The application deadline is February 1, 2027, with decisions released on April 1, 2027. Students who are tenth graders this year can look at CMU CS Scholars first; CMU says completers may be invited back as rising seniors.'
          ] }
      ]
    },
    {
      id: 'bwsi', tint: 'tint', eyebrow: 'MIT Beaver Works',
      h2: 'MIT Beaver Works: AI courses inside a wider summer institute',
      lede: 'The Beaver Works Summer Institute runs many engineering courses. Two are built around AI, and both are listed as virtual, which matters for families outside Massachusetts.',
      body: [
        { kind: 'three', cells: [
          { h3: 'CogWorks', p: 'BWSI says the course was created in 2017 and has three distinct modules, which focus on applications of machine learning in the domains of audio, vision, and language. All lectures are paired with detailed Python-based exercises, and capstone teams use tools like git and VSCode.' },
          { h3: 'Serious Games with AI', p: 'Students learn game design and AI basics, then work in groups to create their own modifications to a game and investigate a research question of their choosing, using AI to see how a computer handles hard decisions inside the game.' },
          { h3: 'The prerequisites', p: 'The online prerequisite courses are free. BWSI says many courses require the Python Core and Computer Science and Systems (CSS) courses alongside the preferred course, and that all online courses remain open for independent learners even if they are not accepted.' }
        ] },
        { kind: 'table', mt: true, caption: 'BWSI rules for summer 2027, from its FAQ and apply pages (read 17 October 2026)', head: ['Rule', 'What BWSI says'], rows: [
          ['Grade', 'In a grade level no higher than a junior (11th grade); accepted students are generally rising seniors'],
          ['Where students live', 'Only students who live or attend high school in the United States and are registered for the online course are sent the summer application'],
          ['Schedule', 'Monday to Friday, July 5 to August 1 on the 2027 schedule'],
          ['In-person courses', 'We will not offer a residential program; in-person students arrange their own housing with an adult present'],
          ['Selection', 'Competitive; grades in the online courses are an important part of enrollment decisions']
        ] },
        { kind: 'p', mt: true, html: 'The free online prerequisites are useful even for students who never apply. They are a structured, self-paced start in Python from an MIT lab, and BWSI keeps them open to independent learners. A student who works through them in spring and then takes a live class in summer gets both the structure and the feedback.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Choosing',
      h2: 'Residential, virtual or at home: which summer fits',
      lede: 'Our comparison, for families deciding in the fall. It is a judgment, not a ranking: each route suits a different teenager.',
      body: [
        { kind: 'table', caption: 'Three ways to spend an AI summer (ours)', head: ['Route', 'Suits', 'Watch out for'], rows: [
          ['Residential program (CMU AI Scholars)', 'A rising senior ready to live away for four weeks', 'Early deadline; nothing else that summer'],
          ['Virtual program (BWSI CogWorks)', 'A junior or younger student who did the prerequisites', 'Competitive entry; a strict July schedule'],
          ['Live classes at home', 'Any teenager, any grade, any start date', 'Needs a plan and a finished project to mean anything'],
          ['Self-study alone', 'A very self-driven student', 'Hard to sustain without weekly feedback']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Check eligibility first.</b> Grade, age on a specific date, and citizenship or residence each rule a student in or out before anything else matters.',
          '<b>Mark the deadlines now.</b> February 1, 2027 for CMU AI Scholars; BWSI sends its summer application only to students in its online prerequisites.',
          '<b>Start Python before applying.</b> Both programs prepare students in Python; arriving fluent makes the summer about AI, not syntax.',
          '<b>Keep a home plan in reserve.</b> Selective programs cannot take everyone who applies. A plan B that is already written makes a no less disappointing.',
          '<b>Pick one project for the summer.</b> Whatever the route, finish one thing that you can show and explain in September.'
        ] }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'Plan B is a good plan',
      h2: 'An eight-week AI summer a student can run from home',
      lede: 'Any teenager can learn AI over a summer at home. This is our plan for that summer: eight weeks, about six to eight hours a week, ending in one project. It works with live classes or alone, though feedback each week is what keeps it on track.',
      body: [
        { kind: 'table', caption: 'Eight weeks of AI at home, for a high schooler with a little Python (ours)', head: ['Week', 'Learn', 'Make'], rows: [
          ['1', 'Python refresher: lists, loops, functions', 'Ten small programs, each under 20 lines'],
          ['2', 'Data: loading a dataset, looking at it', 'A short description of the digits dataset'],
          ['3', 'A first model and a test set', 'The learning-curve script below, run and explained'],
          ['4', 'Why models fail: overfitting', 'One page on the gap between training and test scores'],
          ['5', 'Choose a question of your own', 'A one-sentence question and a dataset to answer it'],
          ['6', 'Build and test', 'A model, a baseline and a results table'],
          ['7', 'Improve one thing at a time', 'Three changes, each with its effect recorded'],
          ['8', 'Write it up and show it', 'A readme, a short demo and what you would do next']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Rising ninth and tenth graders', p: 'Spend weeks 1 to 4 slowly and stop at a well-explained first model. That is a strong summer at 14 or 15.' },
          { h3: 'Rising eleventh graders', p: 'Do all eight weeks, and use week 5 to choose a question that could grow into next year\'s fair project.' },
          { h3: 'Rising seniors', p: 'Finish the project early so August is free for applications. A clear write-up is worth more than a bigger model.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Week 3, in code',
      h2: 'The summer project in miniature: does more data make a model better?',
      lede: 'This is the week 3 script from the plan above. It is ours: it trains the same decision tree on more and more handwritten digit images and tests each one on the same 500 held-back images. Our test run used Python 3.13 and scikit-learn 1.7.2, on 17 October 2026.',
      body: [
        { kind: 'code', label: 'A learning curve in 15 lines', lang: 'python', code: CURVE, note: 'Output on our run: 50 images 0.440, 100 images 0.604, 200 images 0.674, 400 images 0.792, 800 images 0.808, 1297 images 0.844. The dataset has 1797 images, so after holding back 500 for testing, 1797 - 500 = 1297 are left to train on.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'Accuracy climbs from 0.440 to 0.844 as the training set grows, a gain of 0.844 - 0.440 = 0.404, our arithmetic. The jumps shrink as the data grows: doubling from 400 to 800 images added only 0.016.',
            'That flattening is the most useful thing a student learns all summer. It means the next improvement will come from a better model or better features, not just more of the same data.'
          ],
          rightH3: 'Making it yours in weeks 5 to 8',
          right: [
            'Swap the decision tree for another classifier and draw both curves on one chart. Or collect your own small dataset and ask whether it is big enough to learn from.',
            'Keep test_size and random_state fixed while you experiment. scikit-learn\'s score method returns accuracy on the data you pass it, so the comparison is only fair if every model sees the same test images.'
          ] },
        { kind: 'p', mt: true, html: 'For more project ideas at this level, our <a class="ag-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a> page climbs from a first model to research-grade work, and <a class="ag-inline-link" href="/how-to-train-machine-learning-models">how to train machine learning models</a> covers the craft in more depth.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From curious to ready',
    h2: 'Four stages between a first AI tutorial and a selective summer program',
    lede: 'Where a teenager is in the fall, and what the next summer can realistically achieve.',
    table: { caption: 'Readiness for an AI summer program (ours)', head: ['Stage', 'What you would notice'], rows: [
      ['1. Curious', 'Uses AI tools and wants to know how they work'],
      ['2. Started', 'Writes simple Python and has run someone else\'s model'],
      ['3. Building', 'Has trained and tested a model of their own'],
      ['4. Ready', 'Has one finished project they can explain to a stranger']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 by the spring is enough to apply to the programs above. Stage 4 by the next fall is what makes a student stand out anywhere.',
      'A summer at home that ends at stage 3 or 4 is a real achievement, admitted to a program or not.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick the summer route by your stage, not by the program\'s name. A program you are not ready for is a stressful four weeks.',
      'Write a little every week about what you built. By August it becomes your project write-up.'
    ] }
  },

  catalogue: {
    eyebrow: 'The course catalog',
    h2: 'Nine courses for an AI summer and beyond',
    lede: 'All live online with a regular teacher, in a batch or one to one, starting any week of the summer.',
    bands: [
      { num: 'I', h3: 'Start here', sub: 'Ages 13 to 18', courses: [
        { code: 'ASPH / STR / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language every program on this page asks for.' },
        { code: 'ASPH / STR / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Three months of building with AI, explained line by line.' },
        { code: 'ASPH / STR / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens (13+)', blurb: 'Prompting and checking, for ages 13 and up.' }
      ] },
      { num: 'II', h3: 'Go deeper', sub: 'Ages 13 to 18', courses: [
        { code: 'ASPH / DPR / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Models trained, tested and explained.' },
        { code: 'ASPH / DPR / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'From a raw table to a defensible chart.' },
        { code: 'ASPH / DPR / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Visual machine learning before the code.' }
      ] },
      { num: 'III', h3: 'Show it off', sub: 'Teens', courses: [
        { code: 'ASPH / SHW / 01', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'A summer project, pitched in five minutes.' },
        { code: 'ASPH / SHW / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Put a trained model inside an app.' },
        { code: 'ASPH / SHW / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'The reasoning behind clean, fast code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Summer classes that bend around vacations',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Morning or evening slots across US time zones.' },
      { time: 'Weekends', l: 'Weekend mornings around summer jobs and trips.' },
      { time: '1-on-1', l: 'Paused for a family vacation, resumed after.' }
    ],
    cells: [
      { h3: 'One teacher all summer', p: 'Someone who sees the project grow each week.' },
      { h3: 'The eight-week plan', p: 'Used as the backbone, adjusted to the student.' },
      { h3: 'Code in every class', p: 'Typed, run and debugged live.' },
      { h3: 'A finished project', p: 'The goal for the summer, agreed in week one.' },
      { h3: 'From home', p: 'Live video, in any state.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Projects our teenage students have built',
  projectsLede: 'The kind of finished work a summer should end with. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents said on Google, as they wrote it.',

  fees: {
    h2: 'Fees',
    lede: 'The university programs above set their own terms. Our summer classes are paid month by month in US dollars, with nothing to sign for the whole summer, so a family can stop after July if plans change.',
    free: ['A free first class', 'Bring your summer goal', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Built around vacations', 'Times at your convenience']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'AI summer programs for teenagers: common questions',
    items: [
      { q: 'What AI summer programs are there for high school students?', a: 'Two university options we verified for summer 2027 are Carnegie Mellon\'s AI Scholars, a four-week residential program for rising seniors, and MIT Beaver Works courses such as CogWorks, listed as virtual. Paid university and commercial camps exist too.' },
      { q: 'When is the CMU AI Scholars 2027 deadline?', a: 'CMU lists the application deadline as February 1, 2027, with decisions released on April 1, 2027. The program runs from June 26 to July 24, 2027.' },
      { q: 'Is CMU AI Scholars free?', a: 'CMU describes it as fully funded, says all program costs are covered, and says there is no option for participants to pay tuition themselves.' },
      { q: 'Do I need coding experience for an AI summer program?', a: 'Not always. CMU says no coding experience is necessary for AI Scholars and runs a virtual Python course before arrival. BWSI requires its free online prerequisite courses, which teach the Python its courses use.' },
      { q: 'Can a senior attend MIT Beaver Works?', a: 'No. The BWSI FAQ says students must be in a grade level no higher than a junior, and it does not accept current seniors. Accepted students are generally rising seniors.' },
      { q: 'Is AI4ALL a summer program for high schoolers?', a: 'Not at present. AI4ALL\'s home page describes its main program, AI4ALL Ignite, as a no-cost virtual accelerator for college students.' },
      { q: 'What should my teenager do if they are not accepted?', a: 'Run the summer at home with a plan and a finished project. Our eight-week plan on this page is built for that, and BWSI keeps its online courses open to independent learners even if they are not accepted.' },
      { q: 'Are you connected with CMU or MIT?', a: 'No. We are an independent online school. The program facts on this page come from the programs\' own pages, linked so you can check them.' },
      { q: 'When are your summer classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are your summer classes?', a: 'The first class is free. After that, families pay monthly with no summer-long contract, and the fees section of this page shows the figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US teenagers planning a summer.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our full set of pages for American families.' },
      { href: '/summer-research-programs-coding', label: 'Summer research programs', p: 'RSI, PRIMES and SSP, and how to prepare.' },
      { href: '/summer-coding-camp', label: 'Summer coding camp', p: 'Our own live summer camp.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'The year-round AI track, ages 13 to 18.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects', p: 'What to build once the basics are in place.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Which AI tools are open to under-18s.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'AI literacy for K-5: what it means, what standards expect, and two activities.' },
      { href: '/machine-learning-competitions-for-high-school-students', label: 'Machine learning competitions for high school students', p: 'ML and AI competitions for US high schoolers, 2026-27, from the official rules.' },
      { href: '/ai-courses-for-high-school-students', label: 'AI courses for high school students', p: 'AI courses for US high schoolers: school, free online and live, compared on what they actually teach.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us what your teenager wants from the summer: a program application, a project, or just a solid start. The first class turns that into a week-by-week plan.',
    readFirst: 'To see a class before booking, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">every course</a> and its syllabus.',
    note: 'Our teachers work from India on live video, so summer classes run in every US state, including Alaska and Hawaii. WhatsApp is the quickest way to ask us anything.',
    formNote: 'The first class costs nothing, and we never take card details for it.'
  },

  footer: {
    cols: [
      { h4: 'Summer and AI', links: [
        { href: '/summer-coding-camp', label: 'Summer coding camp' },
        { href: '/summer-research-programs-coding', label: 'Summer research programs' },
        { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA' },
        { href: '/python-for-14-year-olds', label: 'Python for 14 year olds' },
        { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds' }
      ] }
    ],
    bottomRight: 'More data helps, until it stops helping'
  },

  personalityCss: `
.ag-root.ag-asph .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-asph .ag-capsule { border-left-width: 6px; border-radius: 6px; }
.ag-root.ag-asph .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-asph .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-asph .ag-slots { gap: 1rem; }
.ag-root.ag-asph .ag-steps { gap: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Program pages read raw on 17 October 2026: CMU AI Scholars (rising seniors, four-week residential in Pittsburgh, Virtual Pre-Program Python Course, Core AI Curriculum, college application essay, Capstone Symposium, no concurrent programs, age 16 by June 26, 2027, U.S. citizen or permanent resident, June 26 to July 24, 2027, February 1 and April 1, 2027) and CS Scholars (invitation back as rising seniors); MIT BWSI programs, FAQ and apply pages (CogWorks since 2017 with audio, vision and language modules, Python exercises, git and VSCode; Serious Games with AI; virtual listing; July 5 to August 1 on the 2027 schedule; no residential program; no higher than 11th grade; US residence; free prerequisites open to independent learners); AI4ALL home page (Ignite is for college students).',
    localProject: 'A learning-curve experiment in scikit-learn (ours, run with 1.7.2): a DecisionTreeClassifier trained on 50 to 1297 digit images and scored on the same 500 held-back images (0.440 rising to 0.844), with the 1797 - 500 = 1297 and 0.844 - 0.440 = 0.404 arithmetic, plus an eight-week home plan and a route comparison. Lesson family: learning curves.',
    requiredMentions: ['four-week residential experience at Carnegie Mellon University in Pittsburgh', 'Virtual Pre-Program Python Course', 'All students leave the program with a completed college application essay', 'must be 16 years of age by June 26, 2027', 'applications of machine learning in the domains of audio, vision, and language', 'create their own modifications to a game', 'In a grade level no higher than a junior (11th grade)', 'Python Core and Computer Science and Systems (CSS)', 'no-cost virtual accelerator for college students', 'We will not offer a residential program', '1797 - 500 = 1297', '0.844 - 0.440 = 0.404'],
    sources: [
      { claim: 'CMU AI Scholars eligibility, structure, dates, deadline and funding statement.', url: 'https://www.cmu.edu/pre-college/academic-programs/ai_scholars.html' },
      { claim: 'CMU CS Scholars for rising juniors and the invitation back to AI Scholars.', url: 'https://www.cmu.edu/pre-college/academic-programs/computer-science-scholars.html' },
      { claim: 'BWSI CogWorks and Serious Games with AI course descriptions.', url: 'https://bwsi.mit.edu/bwsi-programs/' },
      { claim: 'BWSI grade rule, 2027 schedule, virtual course list, no residential program, free prerequisites.', url: 'https://bwsi.mit.edu/faq/' },
      { claim: 'BWSI summer application only for US students registered in the online course; courses open to independent learners.', url: 'https://bwsi.mit.edu/apply-now/' },
      { claim: 'AI4ALL Ignite is a no-cost virtual accelerator for college students.', url: 'https://ai-4-all.org/' },
      { claim: 'load_digits, train_test_split and DecisionTreeClassifier.score.', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html' }
    ],
    rejectedClaims: [
      'Income thresholds and financial-need rules for BWSI and CMU: published but not printed (no money detail or dollar figures on US pages).',
      'BWSI Medlytics and Remote Sensing for Disaster Response: real AI courses, left out because they are health and disaster topics.',
      'Stanford Summer Institutes course counts: one page on that host returned HTTP 403, so the host was not used.',
      'That AI4ALL runs a high school summer program today: its home page describes a program for college students.',
      'Rankings of summer programs, and organisers\' own superlatives: not repeated.',
      'Any affiliation with Carnegie Mellon, MIT or AI4ALL: none, and the page says so.'
    ]
  }
};
