'use strict';
// AI courses for high school students (ag- topic door; US cluster Phase 2, row 18).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Never twins /best-ai-courses-for-teens-2026 (the ranked comparison) or /ai-classes-for-teenagers (our track page): this page
// maps the kinds of AI course a US high schooler can take, from school to free online to live, without ranking.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-courses-for-high-school-students/):
//  - CodeAI (formerly Code.org), Artificial Intelligence Foundations (code.org/curriculum/artificial-intelligence-foundations):
//    "90 class periods per semester (180 total)"; "Builds toward AP CSP, AP CSA, or workforce readiness"; "Aligned to CSTA
//    2026 standards and the TeachAI AI Literacy Framework"; Devices "Chromebook, Computer"; Tools "AI Chat Lab, Python Lab,
//    Web Lab, Sketch Lab"; unit "Foundations of AI Programming", "Learn Python through hands-on projects"; versions
//    "specifically designed to meet Idaho standards" and Indiana standards. code.org/ai footer: "Code.org" "is a former
//    trademark of CodeAI".
//  - CS50's Introduction to Artificial Intelligence with Python (cs50.harvard.edu/ai/): weeks Search, Knowledge, Uncertainty,
//    Optimization, Learning, Neural Networks, Language; "seven weeks of material"; prerequisite "CS50x or at least one year of
//    experience with Python"; submitting projects needs an edX account. edX Terms: "You must be at least 13 years old to use the
//    Service."
//  - Google Machine Learning Crash Course (developers.google.com/machine-learning/crash-course): "Since 2018, millions of people
//    worldwide have relied on Machine Learning Crash Course"; 12 modules in four groups (ML models; Data; Advanced ML models;
//    Real-world ML), e.g. "Intro to Large Language Models", "Datasets, generalization, and overfitting", "Fairness".
//  - Executive Order "Advancing Artificial Intelligence Education for American Youth", April 23, 2025: Sec. 6(a) "online
//    resources focused on teaching K-12 students foundational AI literacy and critical thinking skills"; Sec. 8(d) "support the
//    creation of opportunities for high school students to take AI courses and certification programs".
//  - scikit-learn docs (1.9.1): load_iris (3 classes, 50 per class, 150 samples, 4 features), train_test_split,
//    KNeighborsClassifier (n_neighbors default 5), accuracy_score.
// Not used: Elements of AI (its FAQ answers did not load in the raw page), Kaggle Learn (terms page did not render raw),
// Teachable Machine (FAQ not readable raw), any chatbot whose terms are for adults.
// Our own material, labelled on the page: the k-sweep script and its output (run with Python 3.13 and scikit-learn 1.7.2 on
// 17 October 2026: k=1 0.933, k=3 0.956, k=5 0.978, k=15 0.956, k=45 0.889; the example flower predicted virginica), the course
// map, the five questions for judging any course, the grade 9 to 12 path, and the arithmetic 150 x 0.3 = 45 test flowers and
// 180 / 2 = 90.
// Lesson family: model selection (choosing a setting with a held-out test set).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const KSWEEP = `# Lesson 1 of an AI course, in code (ours)
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3,
    random_state=42, stratify=iris.target)

for k in [1, 3, 5, 15, 45]:
    model = KNeighborsClassifier(n_neighbors=k)
    model.fit(X_train, y_train)
    guess = model.predict(X_test)
    print(k, round(accuracy_score(y_test, guess), 3))

flower = [[5.9, 3.0, 5.1, 1.8]]  # cm: sepal, sepal, petal, petal
chosen = KNeighborsClassifier(n_neighbors=5).fit(X_train, y_train)
print(iris.target_names[chosen.predict(flower)[0]])`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AI COURSES', blurb: 'The kinds of AI course open to US high schoolers, from a school AI Foundations class to free CS50 AI and Google\'s crash course to live classes, with real Python.' },
  slug: 'ai-courses-for-high-school-students',
  code: 'achs',
  accent: '#1C4C33',
  accentRationale: 'AI courses door, US row 18: the deep chalkboard green #1C4C33 allocated in alloc.tsv, distinct from the other US accents and dark enough for body links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI courses for high school students',
  title: 'AI Courses for High School Students: School, Free and Live',
  description: 'AI courses for high school students in the US: the AI Foundations school course, free CS50 AI and Google\'s ML crash course, and live classes, with real Python code.',
  ogDescription: 'A US high schooler can take AI in a school course, free online from Harvard or Google, or live with a teacher. What each one covers, who it suits, and a first model in Python.',
  twitterDescription: 'AI courses for US high schoolers: school, free online and live, compared on what they actually teach.',
  pageName: 'AI Courses for High School Students',
  webPageDescription: 'A guide for US high school students and parents to the kinds of AI course open to them, from school curricula to free university and industry courses to live classes, built from each provider\'s own pages.',
  courseDescription: 'Live online AI, machine learning and Python courses for US high school students, ages 13 to 18, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI courses for high school students',
  navLinks: [
    { href: '#map', label: 'Course map' },
    { href: '#school', label: 'At school' },
    { href: '#free', label: 'Free online' },
    { href: '#code', label: 'First model' },
    { href: '#judge', label: 'Judging a course' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AI and machine learning',
  h1: 'AI courses for high school students',
  lede: 'An American teenager who wants to learn AI properly has more choice than ever, and several of the strongest options are free. There is a full-year school course written for high schools, a university course from Harvard that anyone can follow, a crash course from Google, and live classes with a teacher. They differ in one way that matters more than price: whether the student ends up understanding how a model learns, or only how to use one. This page sets out what each kind of course actually covers, using the providers\' own descriptions, so a family can choose with open eyes.',
  secondaryCta: { href: '#map', label: 'See the course map' },
  wa: 'Hello Modern Age Coders, my high schooler in the US wants to take an AI course. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI taught with code, not slides',
  spec: [
    ['For', 'Grades 9 to 12'],
    ['At school', 'CodeAI AI Foundations, 180 periods'],
    ['Free online', 'CS50 AI, Google ML Crash Course'],
    ['Live', 'Our teen AI and Python courses'],
    ['Needs first', 'Python, for the university course'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'High school students in the US can take AI at school through CodeAI\'s AI Foundations (up to 180 class periods, builds toward AP CSP or AP CSA), free online through Harvard\'s CS50 AI (seven weeks, needs about a year of Python) or Google\'s Machine Learning Crash Course, or live with a teacher. Modern Age Coders teaches AI and Python live online for teenagers 13 to 18, in a group batch or one to one.',

  picks: {
    eyebrow: 'Learn it live',
    h2: 'Teen courses that run from a first line of code to a trained model',
    lede: 'These are the three we usually suggest first to a high schooler. A regular teacher runs each one live.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'ACHS / 01', title: 'Python first, then everything else', note: 'Ages 13 to 18. The year of Python that free university AI courses assume.' },
      { course: 'ai-ml-masterclass-teens', code: 'ACHS / 02', title: 'Machine learning, built from scratch', note: 'Ages 13 to 18. Models trained and evaluated, not just called.' },
      { course: 'teens-ai-tools-mastery-course', code: 'ACHS / 03', title: 'AI tools, used with judgment (13+)', note: 'For teens who want to use AI well before they build it.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'The course map',
      h2: 'Four kinds of AI course a high schooler can take',
      lede: 'These are categories, not a ranking. Each row names one real example and describes it from the provider\'s own page, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'AI courses open to US high schoolers, by kind (examples described from the providers\' pages, read 17 October 2026)', head: ['Kind', 'Example', 'Length', 'Needs first', 'Live teacher?'], rows: [
          ['School course', 'CodeAI Artificial Intelligence Foundations', '90 class periods per semester, 180 for the year', 'No prior experience', 'Your school\'s teacher'],
          ['Free university course', 'CS50\'s Introduction to AI with Python', 'Seven weeks of material', 'CS50x or a year of Python', 'No; recorded lectures'],
          ['Free industry course', 'Google Machine Learning Crash Course', '12 self-contained modules', 'Algebra helps (our view)', 'No; self-paced'],
          ['Live classes', 'Teen AI and Python courses, like ours', 'Months, one class at a time', 'Nothing, for a Python start', 'Yes, every class']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the four fit together',
          left: [
            'They are not rivals. A student might take AI Foundations at school in grade 9, learn Python properly in grade 10, and work through CS50 AI the summer after. Each kind covers ground the others assume.',
            'The gap to plan for is the year of Python between a school course and a university one. Harvard\'s course page asks for CS50x or at least one year of experience with Python before starting.'
          ],
          rightH3: 'Where a live teacher earns its place',
          right: [
            'Free courses are excellent and we recommend them. What they cannot do is notice that a student copied a solution without understanding it, or explain the same idea a third way.',
            'A live class is worth paying for when a student has stalled, needs a pace set for them, or wants feedback on their own project. If none of those is true, start free.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://code.org/curriculum/artificial-intelligence-foundations" rel="noopener" target="_blank">CodeAI AI Foundations</a>; <a class="ag-inline-link" href="https://cs50.harvard.edu/ai/" rel="noopener" target="_blank">CS50 AI</a>; <a class="ag-inline-link" href="https://developers.google.com/machine-learning/crash-course" rel="noopener" target="_blank">Google Machine Learning Crash Course</a>. We are not connected with CodeAI, Harvard or Google. For a ranked comparison of paid options, see <a class="ag-inline-link" href="/best-ai-courses-for-teens-2026">our 2026 comparison of AI courses for teens</a>.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'At school',
      h2: 'AI Foundations: a free course US high schools can offer',
      lede: 'The nonprofit long known as Code.org now presents itself as CodeAI; its own footer says "Code.org" is a former trademark of CodeAI. Its high school AI course is free to schools, and a student can ask a teacher or counselor whether it is on the schedule.',
      body: [
        { kind: 'table', caption: 'CodeAI Artificial Intelligence Foundations, from the curriculum page (read 17 October 2026)', head: ['Point', 'What CodeAI says'], rows: [
          ['Length', '90 class periods per semester (180 total) for the full year; semester and unit options too'],
          ['Prior experience', 'No prior experience required'],
          ['Leads to', 'Builds toward AP CSP, AP CSA, or workforce readiness'],
          ['Standards', 'Aligned to CSTA 2026 standards and the TeachAI AI Literacy Framework'],
          ['Tools', 'AI Chat Lab, Python Lab, Web Lab, Sketch Lab'],
          ['Devices', 'Chromebook or computer'],
          ['A Python unit', 'Foundations of AI Programming: "Learn Python through hands-on projects"'],
          ['State versions', 'Versions specifically designed to meet Idaho standards and Indiana standards']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your school offers it',
          left: [
            'Take it. A full year is 180 periods, which is 180 / 2 = 90 a semester, a lot of structured AI time, and CodeAI lists Chromebooks among its supported devices.',
            'Use the second semester well. CodeAI says students learn JavaScript and build web apps with AI as a creative partner. Ask the teacher how much code students write themselves, and write more at home.'
          ],
          rightH3: 'If it does not',
          right: [
            'Ask. Curriculum choices are made by schools and districts, so a request from interested students is a reasonable place to start.',
            'In the meantime the same ground can be covered outside school: Python first, then a structured AI course. That is the route the rest of this page describes.'
          ] }
      ]
    },
    {
      id: 'free', tint: 'tint', eyebrow: 'Free online',
      h2: 'Two free AI courses worth a high schooler\'s time',
      lede: 'Both are free to read and follow, and both are written by people who teach this material for a living. Neither has a teacher who will check in on your teenager, so they work for self-driven students, ideally paired with some feedback.',
      body: [
        { kind: 'table', caption: 'CS50 AI week by week, from the course page (read 17 October 2026)', head: ['Week', 'Topic', 'In one line (ours)'], rows: [
          ['0', 'Search', 'How a program finds a path, such as the way out of a maze'],
          ['1', 'Knowledge', 'Logic a computer can reason with'],
          ['2', 'Uncertainty', 'Probability, when the answer is not sure'],
          ['3', 'Optimization', 'Picking the strongest option among many'],
          ['4', 'Learning', 'Machine learning from examples'],
          ['5', 'Neural Networks', 'Layers of simple units that learn together'],
          ['6', 'Language', 'How programs process human language']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'CS50 AI, honestly',
          left: [
            'Harvard describes the course as seven weeks of material, each with a lecture and a project, and anyone can take it free through its OpenCourseWare. Its weeks run Search, Knowledge, Uncertainty, Optimization, Learning, Neural Networks and Language, and the projects are Python programs the students write themselves, which is what makes it valuable.',
            'It is not a first course. The prerequisite is CS50x or at least one year of experience with Python, and submitting projects for feedback needs an edX account, and the edX terms set a minimum age of 13.'
          ],
          rightH3: 'Google\'s Machine Learning Crash Course',
          right: [
            'Google says that since 2018, millions of people worldwide have relied on Machine Learning Crash Course. It is organized as 12 self-contained modules in four groups: ML models, Data, Advanced ML models and Real-world ML.',
            'The modules include Datasets, generalization, and overfitting, Intro to Large Language Models, and Fairness. Google describes the format as animated videos, interactive visualizations and hands-on practice exercises.'
          ] },
        { kind: 'p', mt: true, html: 'Federal policy now points the same way. An executive order signed on April 23, 2025 asks the agencies on its AI education task force to develop online resources focused on teaching K-12 students foundational AI literacy and critical thinking skills, and tells the Secretary of Labor to support the creation of opportunities for high school students to take AI courses and certification programs. Free, serious courses like these two are what that looks like in practice.' }
      ]
    },
    {
      id: 'code', tint: 'deep', eyebrow: 'A first model, in real code',
      h2: 'What lesson one of a real AI course looks like',
      lede: 'Every serious AI course starts with the same idea: train on some data, test on data the model has not seen. Here it is in 20 lines, using the iris flower dataset that ships with scikit-learn. The script is ours, tested on 17 October 2026 under scikit-learn 1.7.2 and Python 3.13.',
      body: [
        { kind: 'code', label: 'Choosing k for a nearest-neighbor model', lang: 'python', code: KSWEEP, note: 'Output on our run: k=1 0.933, k=3 0.956, k=5 0.978, k=15 0.956, k=45 0.889, then virginica for the example flower. The dataset has 150 flowers, so test_size=0.3 holds back 150 x 0.3 = 45 of them for testing.' },
        { kind: 'two', mt: true,
          leftH3: 'What the student should notice',
          left: [
            'Accuracy rises from k=1 to k=5 and then falls. With k=45 the model asks 45 neighbors to vote, nearly half the training flowers, and the answer blurs. That rise and fall is the first lesson in model selection.',
            'The test flowers were split off before training and stratified, so each species appears in the same proportion. A course that skips this step is teaching a habit that breaks real projects.'
          ],
          rightH3: 'What a good course does next',
          right: [
            'It warns that choosing k by looking at the test score is a quiet form of cheating, and introduces a separate validation set or cross-validation to fix it.',
            'Then it moves from flowers to the student\'s own data. scikit-learn\'s documentation lists the iris set as 150 samples with 4 features; a student\'s first real dataset will be messier, which is the point.'
          ] }
      ]
    },
    {
      id: 'judge', tint: 'tint', eyebrow: 'Choosing',
      h2: 'Five questions that tell you what an AI course really teaches',
      lede: 'Our checklist for reading any AI course page, free or paid, ours included. Course names are cheap; these questions get to what a student will actually be able to do.',
      body: [
        { kind: 'ol', items: [
          '<b>Does the student write the code?</b> Look for projects in Python, not only demonstrations of apps. A course where AI writes everything teaches prompting, which is a different skill.',
          '<b>Is there a test set?</b> Any syllabus that trains models should mention testing on unseen data, and ideally overfitting by name.',
          '<b>Who checks the work?</b> Recorded courses rely on automated checks or none. Decide whether your teenager needs a human to read their code.',
          '<b>Are the tools allowed for their age?</b> Several popular AI chatbots set adult age limits in their terms. A course for under-18s should use tools whose terms allow teenagers.',
          '<b>What exists at the end?</b> A finished project the student can explain is the only outcome worth paying for. Ask to see one from a past student.'
        ] },
        { kind: 'table', mt: true, caption: 'Running the five questions on the four kinds of course (our judgment)', head: ['Question', 'School course', 'Free university', 'Free industry', 'Live classes'], rows: [
          ['Student writes code', 'In the Python and JavaScript units', 'Yes, every week', 'In the exercises', 'Yes, every class'],
          ['Test set taught', 'Check with the teacher', 'Yes', 'Yes, overfitting module', 'Should be; ask'],
          ['Human feedback', 'Yes, the teacher', 'No', 'No', 'Yes'],
          ['Age-appropriate tools', 'Built for students', 'edX account at 13 or older', 'Open web pages', 'Ask which tools'],
          ['Something to show', 'Class projects', 'A project each week', 'Exercises', 'A project of their own']
        ] },
        { kind: 'p', mt: true, html: 'On the age question, our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> lists what each popular tool\'s terms say about teenagers. For studying with AI without crossing a line, see <a class="ag-inline-link" href="/blog/how-to-use-chatgpt-to-study-without-cheating">how to use AI to study without cheating</a>.' }
      ]
    },
    {
      id: 'path', tint: 'deep', eyebrow: 'Grade by grade',
      h2: 'A four-year AI path through high school',
      lede: 'Our suggested sequence for a student who starts with no code in grade 9. It mixes school, free and live courses; swap in whatever your school offers.',
      body: [
        { kind: 'table', caption: 'AI through grades 9 to 12 (our plan)', head: ['Grade', 'Course', 'By the end of the year'], rows: [
          ['9', 'AI Foundations at school, or Python live', 'Writes small Python programs; knows what training data is'],
          ['10', 'Python properly, plus a first machine learning course', 'Has trained and tested a model like the one above'],
          ['11', 'CS50 AI or Google\'s crash course, with feedback', 'Can explain search, probability and neural networks simply'],
          ['12', 'A project of their own, with a teacher reviewing', 'Has one finished project with an honest write-up']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Starting late', p: 'A junior with no code can compress grades 9 and 10 into one year of Python and machine learning. It is a busy year, not an impossible one.' },
          { h3: 'Starting early', p: 'A middle schooler who already codes can begin at grade 10 of this path. Depth matters more than finishing early.' },
          { h3: 'AP alongside', p: 'AI Foundations says it builds toward AP CSP or AP CSA. Our pages on <a class="ag-inline-link" href="/ap-computer-science-principles-online-coaching">AP CSP</a> and <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP CSA</a> cover those exams.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From user to builder',
    h2: 'Four stages of a high schooler learning AI',
    lede: 'Where a teenager might start, and which kind of course moves them on.',
    table: { caption: 'Stages of learning AI in high school (ours)', head: ['Stage', 'Sign of it'], rows: [
      ['1. User', 'Uses AI apps every day; cannot say how they work'],
      ['2. Coder', 'Writes Python; has not yet trained a model'],
      ['3. Trainer', 'Trains and tests models; reads accuracy honestly'],
      ['4. Builder', 'Chooses a problem, a model and a test, and explains all three']
    ] },
    left: { h3: 'For parents', ps: [
      'The jump from stage 1 to 2 is the one to check a course does not skip. A course that goes straight to AI apps leaves a teenager at stage 1 with better vocabulary.',
      'Ask your teenager to show you a test score and explain it. That conversation tells you their stage.'
    ] },
    right: { h3: 'For students', ps: [
      'Learn Python before you learn AI. Every course at stage 3 assumes it.',
      'Change one setting at a time and write down what happened. That habit is most of machine learning.'
    ] }
  },

  catalogue: {
    eyebrow: 'The course catalog',
    h2: 'Nine courses for high schoolers learning AI',
    lede: 'Live and online, with the same teacher each week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Code first', sub: 'Ages 13 to 18', courses: [
        { code: 'ACHS / COD / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From print to programs worth testing.' },
        { code: 'ACHS / COD / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The web side of AI apps.' },
        { code: 'ACHS / COD / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Logic and algorithms under the models.' }
      ] },
      { num: 'II', h3: 'AI and data', sub: 'Ages 13 to 18', courses: [
        { code: 'ACHS / AID / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Ten months from Python to neural networks.' },
        { code: 'ACHS / AID / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Ages 14 to 18, with basic Python.' },
        { code: 'ACHS / AID / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Machine learning without code, then with it.' }
      ] },
      { num: 'III', h3: 'Using and shipping AI', sub: 'Teens', courses: [
        { code: 'ACHS / USE / 01', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens (13+)', blurb: 'Prompting and checking, the honest way.' },
        { code: 'ACHS / USE / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'Building with AI, then reading every line.' },
        { code: 'ACHS / USE / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Put a trained model inside a phone app.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that fit a high school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in your own US time zone.' },
      { time: 'Weekends', l: 'Weekend mornings for students with packed weeks.' },
      { time: '1-on-1', l: 'Around sports seasons and exams.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'Who knows what your teenager built last week.' },
      { h3: 'Python underneath', p: 'No AI topic before the code it needs.' },
      { h3: 'Tested models', p: 'Every model meets a test set.' },
      { h3: 'Their own project', p: 'By the end, a problem they chose.' },
      { h3: 'At home', p: 'Live video, in any state.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'What our teenage students have built',
  projectsLede: 'Finished work from students who started with the courses above. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from parents, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'School and free courses cost nothing, and we say so above. Our live classes are billed monthly in US dollars, with no semester commitment, and you can stop after any month.',
    free: ['A free first class', 'Tell us the course they tried', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Your own project', 'Times at your convenience']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'AI courses for high schoolers: common questions',
    items: [
      { q: 'What AI courses can high school students take?', a: 'Four kinds: a school course such as CodeAI\'s Artificial Intelligence Foundations, a free university course such as Harvard\'s CS50 AI, a free industry course such as Google\'s Machine Learning Crash Course, and live classes with a teacher.' },
      { q: 'Are there free AI courses for high school students?', a: 'Yes. CS50 AI can be followed free through Harvard\'s OpenCourseWare, Google\'s Machine Learning Crash Course is free to read online, and CodeAI offers AI Foundations to schools at no cost.' },
      { q: 'Is CS50 AI good for a beginner?', a: 'Not as a first course. Harvard lists the prerequisite as CS50x or at least one year of experience with Python. Learn Python first, then take it.' },
      { q: 'How long is the AI Foundations course?', a: 'CodeAI lists 90 class periods per semester, 180 for the full year, with shorter semester and unit options. It needs no prior experience.' },
      { q: 'Does AI Foundations count toward AP?', a: 'CodeAI says it builds toward AP CSP, AP CSA, or workforce readiness. It is not itself an AP course; AP exams are run by the College Board.' },
      { q: 'What age do you need to be for CS50 AI?', a: 'Following the free materials needs no account. Submitting projects for feedback needs an edX account, and edX\'s terms say you must be at least 13 years old to use its service.' },
      { q: 'Should a high schooler learn Python before AI?', a: 'Yes, for anything beyond using AI apps. The university and industry courses on this page assume Python, and real machine learning projects are written in it.' },
      { q: 'Do your AI courses use ChatGPT?', a: 'For under-18 students we choose tools whose terms allow teenagers, and we teach students to check those terms themselves. The core of every course is Python code the student writes.' },
      { q: 'When are classes for US high schoolers?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do your AI classes cost?', a: 'The first class is free. After that, families pay monthly for live teaching, and the fees section of this page shows the figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US teenagers getting started with AI.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for American families.' },
      { href: '/best-ai-courses-for-teens-2026', label: 'AI courses for teens, ranked', p: 'Our criteria-led comparison of paid options.' },
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'Our live AI track, ages 13 to 18.' },
      { href: '/ai-ml-course-for-teens', label: 'AI and ML course for teens', p: 'The full syllabus and projects.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'What to build after a first course.' },
      { href: '/how-ai-actually-works', label: 'How AI actually works', p: 'The ideas under the apps, explained.' },
      { href: '/ai-classes-for-middle-school-students', label: 'AI classes for middle school students', p: 'AI classes for US middle schoolers: what school covers, what a good class adds, and a first model in Python.' },
      { href: '/ai-projects-for-middle-school-students', label: 'AI projects for middle school students', p: 'Ten AI projects for US middle schoolers, two in real Python, and how to take one to a science fair.' },
      { href: '/ai-research-programs-for-high-school-students', label: 'AI research programs for high school students', p: 'AI research programs for US high schoolers, from the 2026 to 2027 rules, with a fair-test experiment.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us what your teenager has tried, school course or free course or nothing yet. The first class finds where they are and what to learn next.',
    readFirst: 'Want to see the teaching? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class, and <a class="ag-inline-link" href="/courses">the courses page</a> has every syllabus.',
    note: 'We teach from India on live video, which is why there is no local center to visit and why any US time zone works. WhatsApp reaches us fastest.',
    formNote: 'No card details, and the first class is free.'
  },

  footer: {
    cols: [
      { h4: 'Learning AI', links: [
        { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers' },
        { href: '/ai-ml-course-for-teens', label: 'AI and ML course for teens' },
        { href: '/how-ai-actually-works', label: 'How AI actually works' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA' },
        { href: '/python-for-13-year-olds', label: 'Python for 13 year olds' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' }
      ] }
    ],
    bottomRight: 'Train on some, test on the rest'
  },

  personalityCss: `
.ag-root.ag-achs .ag-hero h1 { letter-spacing: -0.015em; max-width: 19ch; }
.ag-root.ag-achs .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-achs .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-achs .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-achs .ag-steps { gap: 1rem; }
.ag-root.ag-achs .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Provider pages read raw on 17 October 2026: CodeAI Artificial Intelligence Foundations (90 class periods per semester, 180 total; builds toward AP CSP, AP CSA or workforce readiness; CSTA 2026 and TeachAI alignment; AI Chat Lab, Python Lab, Web Lab, Sketch Lab; Chromebook; Idaho and Indiana versions; Code.org a former trademark of CodeAI); CS50 AI (seven weeks, seven topics, CS50x or a year of Python, edX account); edX terms (13+); Google Machine Learning Crash Course (since 2018, 12 modules in four groups); Executive Order of April 23, 2025, Sec. 6(a) and 8(d).',
    localProject: 'A k-sweep with scikit-learn (ours, run with 1.7.2): k-nearest neighbours on load_iris with a stratified 30% test set, k = 1, 3, 5, 15, 45 giving 0.933, 0.956, 0.978, 0.956, 0.889, and a prediction of virginica for one example flower, with the 150 x 0.3 = 45 and 180 / 2 = 90 arithmetic, plus a four-kind course map, a five-question checklist and a grade 9 to 12 path. Lesson family: model selection.',
    requiredMentions: ['90 class periods per semester (180 total)', 'Aligned to CSTA 2026 standards and the TeachAI AI Literacy Framework', 'AI Chat Lab, Python Lab, Web Lab, Sketch Lab', 'CS50x or at least one year of experience with Python', 'Search, Knowledge, Uncertainty', 'since 2018, millions of people worldwide have relied on Machine Learning Crash Course', 'Intro to Large Language Models', 'foundational AI literacy and critical thinking skills', '150 x 0.3 = 45', 'k=5 0.978', 'Learn Python through hands-on projects', 'Builds toward AP CSP, AP CSA, or workforce readiness'],
    sources: [
      { claim: 'AI Foundations length, prerequisites, AP link, standards alignment, tools, devices, units and state versions.', url: 'https://code.org/curriculum/artificial-intelligence-foundations' },
      { claim: 'Code.org is a former trademark of CodeAI.', url: 'https://code.org/ai' },
      { claim: 'CS50 AI topics, seven weeks of material, prerequisite and edX submission.', url: 'https://cs50.harvard.edu/ai/' },
      { claim: 'edX users must be at least 13.', url: 'https://www.edx.org/edx-terms-service' },
      { claim: 'Machine Learning Crash Course history and module list.', url: 'https://developers.google.com/machine-learning/crash-course' },
      { claim: 'Executive Order Sec. 6(a) and 8(d) on K-12 AI resources and high school AI courses.', url: 'https://www.whitehouse.gov/presidential-actions/2025/04/advancing-artificial-intelligence-education-for-american-youth/' },
      { claim: 'load_iris, train_test_split, KNeighborsClassifier and accuracy_score.', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html' }
    ],
    rejectedClaims: [
      'Rankings of AI courses: not made here; the site\'s ranked comparison is linked instead.',
      'Elements of AI, Kaggle Learn and Teachable Machine details: their key pages did not render in raw HTML, so nothing is claimed about them.',
      'That AI Foundations is an AP course or earns AP credit: CodeAI says it builds toward AP CSP or AP CSA; AP exams belong to the College Board.',
      'Named chatbots for under-18s: not recommended; several set adult age limits in their terms.',
      'Any affiliation with CodeAI, Harvard, edX or Google: none, and the page says so.'
    ]
  }
};
