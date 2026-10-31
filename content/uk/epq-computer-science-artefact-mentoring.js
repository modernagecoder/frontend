'use strict';
// EPQ computer science and AI artefact mentoring (ag- guide door, England, Wales and Northern Ireland; UK and US exams
// cluster Phase 2, row UK042). Sources, read raw on 31 October 2026 (curl; PDF text through the scratchpad pdftext
// helper; raw copies in keyword-research-2026-09/uk-us-gap/src/epq-computer-science-artefact-mentoring/):
//  - AQA, Level 3 Extended Project Qualification (7993) specification, version 1.4 (cdn.sanity.io PDF linked from
//    aqa.org.uk/subjects/projects/level-three/projects-7993). Verbatim: "For teaching from September 2020 onwards";
//    "It will require in total 120 guided learning hours."; "It is expected that 30 guided learning hours will be spent
//    on this taught element."; students "draft a title and aims of the project for formal approval by the centre" and
//    "deliver a presentation to a non specialist audience"; "A project product which consists solely of a research based
//    written report should be approximately 5000 words"; "Where the chosen product is an artefact there must also be a
//    research based written report of a minimum 1000 words."; "photographs of each stage of development as well as the
//    final product"; AO1 Manage 20%, AO2 Use Resources 20%, AO3 Develop and Realise 40%, AO4 Review 20%; AO3 "Select and
//    use a range of skills, including, where appropriate, new technologies and problem-solving, to take decisions
//    critically and achieve planned outcomes."; supervisor checklist "plan, research, analyse, evaluate and explain,
//    rather than simply describe and narrate"; supervisor declaration "that the evidence submitted for assessment is the
//    unaided work of the student"; "If it is believed that a student has received additional assistance and that this
//    is acceptable within the guidelines for the specification, the supervisor should award a mark which represents the
//    student's unaided achievement."; "If the supervisor is unable to sign the authentication statement for a particular
//    candidate, then the student's work cannot be accepted for assessment."; students must not "submit work which is not
//    their own" or "submit work typed or word-processed by a third person without acknowledgement"; "These actions
//    constitute malpractice, for which a penalty (eg disqualification from the qualification) will be applied."
//  - Pearson Edexcel Level 3 Extended Project specification, Issue 4, November 2023. Verbatim: "require 120 guided
//    learning hours"; "Pearson recommends about 40 guided learning hours for the taught element."; four units, "Unit 4:
//    Artefact – for example, making a painting or sculpture, designing a piece of furniture or a garment, creating a
//    website, solving an engineering/construction problem"; "Evidence will be graded A*–E."; "Each learner must sign a
//    declaration on the Candidate Record Sheet"; "If no confirmation has been provided, the learner will be marked as
//    absent for the project."; "Following the 2023 publication by JCQ of two guidance documents relevant to this
//    qualification, centres are advised to support candidates with referencing and recording of any use of AI in
//    relation to the candidates assessed work"; document title "AI Use in Assessments: Protecting the Integrity of
//    Qualifications".
//  - OCR Extended Project H856 page returned only a script shell; jcq.org.uk is known to return 403 (not tried). Neither
//    is quoted.
// Our own: the "the artefact is the student's, the method can be taught" framing, the title-sharpening example, the
// confusion-matrix evaluation example (TP 40, FN 8, FP 10, TN 62), the practice code on a public toy dataset, the
// mentoring boundaries table and the timeline. Spine: AO3 is 40 per cent and must be the student's unaided work, so a
// mentor teaches the technical method on separate practice material. Lesson family: a coursework mentoring door,
// distinct from the A level Computer Science NEA page (AQA 7517 and OCR H446 projects).

const T = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const CODE = `# Practice only (ours): evaluate a classifier on a public toy dataset,
# never on the student's own EPQ data or code.
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import confusion_matrix, accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=1, stratify=y)

model = DecisionTreeClassifier(max_depth=3, random_state=1).fit(X_train, y_train)
pred = model.predict(X_test)
print(confusion_matrix(y_test, pred))
print("accuracy:", round(accuracy_score(y_test, pred), 3))`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'EPQ COMPUTING ARTEFACT', blurb: 'An app or an AI model can be an EPQ artefact. AO3 is 40 per cent and must be the student\'s own: what a mentor can and cannot do.' },
  slug: 'epq-computer-science-artefact-mentoring',
  code: 'ecs',
  accent: '#2C5F75',
  accentRationale: 'EPQ computing artefact: a deep harbour blue (#2C5F75, 6.6:1 on #FBF8F2), cooler than the BTEC violet and apart from the teal and green Scottish pages in this group',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'EPQ computer science artefact mentoring',
  title: 'EPQ Computer Science Artefact Mentoring | AI and App Projects',
  description: 'EPQ computer science artefact mentoring: how an app or AI model counts as an artefact at AQA and Pearson, what AO3 asks, the authenticity rules, and live teaching.',
  ogDescription: 'An app, a website or a machine learning model can be an EPQ artefact. AO3 is 40 per cent and must be the student\'s own. What a mentor can honestly teach.',
  twitterDescription: 'EPQ computing and AI artefacts: titles that analyse, evaluation that holds up, the 1000-word report, and mentoring that never touches the project.',
  pageName: 'EPQ Computer Science Artefact Mentoring',
  webPageDescription: 'Live online mentoring in programming and machine learning method for students taking an Extended Project Qualification with a computing or AI artefact, built from the AQA 7993 and Pearson Level 3 Extended Project specifications.',
  courseDescription: 'Live online teaching for EPQ students building a computing or AI artefact: Python, data handling, machine learning basics, testing and evaluation method, taught on practice material separate from the student\'s project.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'EPQ computing artefact',
  navLinks: [
    { href: '#artefact', label: 'Artefact EPQs' },
    { href: '#marks', label: 'Where marks are' },
    { href: '#rules', label: 'Own work' },
    { href: '#method', label: 'Method' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England, Wales and Northern Ireland &middot; Extended Project Qualification &middot; Computing and AI artefacts',
  h1: 'EPQ computer science artefact mentoring',
  lede: 'A growing number of sixth formers want their Extended Project to be something they built: an app, a website, a game, a machine learning model that classifies images or predicts something from data. Both AQA and Pearson allow it. An artefact is a recognised form of EPQ product, provided it comes with a written research report. But the specifications are just as clear about whose work it must be. At AQA the supervisor signs that the evidence is "the unaided work of the student", and the biggest assessment objective, worth 40 per cent, is the student\'s own development of the product. So a mentor\'s job is narrow and real: teach the programming and the method, on separate practice material, so the student can build and evaluate the artefact themselves. This page explains how computing artefacts fit the EPQ, where the marks sit, the authenticity rules, and how our mentoring works.',
  secondaryCta: { href: '#rules', label: 'What a mentor may do' },
  wa: 'Hello Modern Age Coders, I would like a free first session about programming skills for my EPQ artefact.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the AQA 7993 and Pearson EPQ specifications',
  spec: [
    ['Qualification', 'Level 3 Extended Project (EPQ)'],
    ['Size', '120 guided learning hours'],
    ['Artefact report', 'At least 1000 words at AQA'],
    ['Biggest objective', 'AO3 Develop and Realise, 40%'],
    ['Our role', 'Teaching method, never the project'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First session', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'An EPQ computer science artefact is an Extended Project Qualification (AQA 7993 or the Pearson Edexcel Level 3 Extended Project) whose product is something built, such as an app, website or AI model, with a research-based written report of at least 1000 words at AQA. The qualification is 120 guided learning hours, and at AQA the Develop and Realise objective carries 40 per cent. Modern Age Coders offers EPQ computer science artefact mentoring live online, one to one or in batches of 15 to 20, through its AI and Machine Learning for Teens course, teaching method on practice material and never writing or editing the project. The first session is free; we are not linked with any exam board or school.',

  picks: {
    eyebrow: 'Courses for EPQ builders',
    h2: 'Three courses behind a computing or AI artefact',
    lede: 'AI and Machine Learning for Teens suits model-based artefacts. Python for Teens is the foundation for any built project, and Full Stack Web Development covers app and website artefacts.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'EPQ / 01', title: 'AI and Machine Learning for Teens', note: 'Data, training and testing, and honest evaluation of a model, taught on public practice datasets.' },
      { course: 'python-complete-masterclass-teens', code: 'EPQ / 02', title: 'Python for Teens', note: 'The language most computing artefacts start from, through files, functions and testing.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'EPQ / 03', title: 'Full Stack Web Development', note: 'Front end, back end and data for students whose artefact is a website or web app.' }
    ]
  },

  sections: [
    {
      id: 'artefact', tint: 'tint', eyebrow: 'Artefact EPQs',
      h2: 'Can an EPQ be an app, a website or an AI model?',
      lede: 'Yes. AQA accepts an artefact as the project product alongside a research-based written report of at least 1000 words, and Pearson runs a separate Artefact unit whose examples include creating a website. A program or a trained model fits naturally within both.',
      body: [
        { kind: 'table', caption: 'Computing artefacts at the two boards we read (specifications as published)', head: ['Point', 'AQA EPQ 7993', 'Pearson Edexcel Level 3 Extended Project'], rows: [
          ['Size', '120 guided learning hours', '120 guided learning hours'],
          ['Taught element', 'About 30 guided learning hours', 'About 40 guided learning hours recommended'],
          ['Artefact route', 'An artefact plus a research-based report of at least 1000 words', 'Unit 4: Artefact, one of four units; examples include creating a website'],
          ['Written-only route', 'A report of approximately 5000 words', 'Unit 1: Dissertation'],
          ['Other evidence', 'Production Log and a presentation to a non-specialist audience', 'Activity log and a presentation'],
          ['Grades', 'A* to E', 'A* to E']
        ] },
        { kind: 'p', html: 'The AQA wording is exact: "Where the chosen product is an artefact there must also be a research based written report of a minimum 1000 words." It adds that artefacts can be evidenced with "photographs of each stage of development as well as the final product". For a computing artefact, the equivalent is screenshots, commit history, test records and short screen recordings at each stage, which also make the development visible to the supervisor. Every project also needs its title and aims approved by the school before the main work starts: AQA requires students to "draft a title and aims of the project for formal approval by the centre".' },
        { kind: 'two', mt: true,
          leftH3: 'Why computing artefacts suit the EPQ',
          left: [
            'They produce evidence naturally: versions, tests and measurable results.',
            'They suit students heading for computer science, engineering, data science or medicine, where a well-evaluated model shows the habits a degree will want.'
          ],
          rightH3: 'Where they go wrong',
          right: [
            'A project that becomes a coding tutorial, describing what was built rather than investigating a question.',
            'An ambitious build that is still unfinished in the spring, leaving nothing to evaluate. Both are avoidable with a sharp title and a realistic plan.'
          ] },
        { kind: 'source', html: 'Sources: AQA, <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/projects/level-three/projects-7993" rel="noopener" target="_blank">Level 3 Extended Project Qualification 7993</a> specification, version 1.4; Pearson, <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-project-qualification/level-3.html" rel="noopener" target="_blank">Level 3 Extended Project</a> specification, Issue 4, November 2023. Both read on 31 October 2026. OCR also offers an Extended Project; we could not read its specification for this build, so it is not described here.' }
      ]
    },
    {
      id: 'marks', tint: 'deep', eyebrow: 'Where marks are',
      h2: 'How is an EPQ artefact marked?',
      lede: 'Against four assessment objectives. At AQA, managing the project is 20 per cent, using resources 20 per cent, developing and realising the product 40 per cent, and reviewing it 20 per cent. The artefact itself matters, but well over half the marks reward planning, research and evaluation around it.',
      body: [
        { kind: 'table', caption: 'AQA EPQ 7993 assessment objectives and what they mean for a computing artefact (weightings from the specification; the right-hand column is ours)', head: ['Objective', 'Weighting', 'In a computing or AI artefact'], rows: [
          ['AO1 Manage', '20%', 'A clear question, aims and a plan, monitored and adjusted in the Production Log'],
          ['AO2 Use resources', '20%', 'Research into existing methods and tools, critically selected and referenced, including any use of AI tools'],
          ['AO3 Develop and realise', '40%', 'The student\'s own design, build, testing and problem solving, with decisions taken critically'],
          ['AO4 Review', '20%', 'Evaluation against the original aims, own learning, and a presentation to a non-specialist audience']
        ] },
        { kind: 'p', html: 'AQA describes AO3 as the ability to "Select and use a range of skills, including, where appropriate, new technologies and problem-solving, to take decisions critically and achieve planned outcomes." That is the objective most at risk when someone else helps with the build, because it is precisely the student\'s own skills and decisions that it measures.' },
        { kind: 'p', html: 'The supervisor\'s checklist for approving a proposal asks whether the title lets the student "plan, research, analyse, evaluate and explain, rather than simply describe and narrate". For computing projects, that one test decides a great deal. "Building a chatbot" describes; "How accurately can a small model trained on a few hundred examples answer questions about one topic, and where does it fail?" investigates.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ask a question', p: 'Frame the artefact as a test of something: accuracy, usability, speed or fairness, measured against a stated aim.' },
          { h3: 'Plan for evaluation', p: 'Decide before building how success will be measured, and keep test data aside from the start.' },
          { h3: 'Keep the log honest', p: 'Record dead ends and changes of plan. AO1 and AO4 reward the reasoning, not a smooth story.' }
        ] }
      ]
    },
    {
      id: 'rules', tint: '', eyebrow: 'Own work',
      h2: 'Can someone help with my EPQ artefact?',
      lede: 'Your supervisor guides you, and you can learn skills from anyone. But AQA requires the supervisor to declare that the evidence is the unaided work of the student, treats submitting work that is not your own as malpractice, and Pearson requires a signed declaration on the Candidate Record Sheet. A mentor may teach; a mentor may not build, write or fix the project.',
      body: [
        { kind: 'p', html: 'AQA\'s specification sets out the position. Supervisors sign "a declaration that the evidence submitted for assessment is the unaided work of the student". Where extra help was received and is acceptable, "the supervisor should award a mark which represents the student\'s unaided achievement", and "If the supervisor is unable to sign the authentication statement for a particular candidate, then the student\'s work cannot be accepted for assessment." Students must not "submit work which is not their own" or "submit work typed or word-processed by a third person without acknowledgement", and AQA states: "These actions constitute malpractice, for which a penalty (eg disqualification from the qualification) will be applied."' },
        { kind: 'p', html: 'Pearson\'s specification asks each learner to sign a declaration on the Candidate Record Sheet, warns that without confirmation "the learner will be marked as absent for the project", and on artificial intelligence says that, "Following the 2023 publication by JCQ of two guidance documents relevant to this qualification, centres are advised to support candidates with referencing and recording of any use of AI in relation to the candidates assessed work". Any AI tool used in the project must be declared and referenced as your school instructs.' },
        { kind: 'table', mt: true, caption: 'Our mentoring line, drawn from the AQA and Pearson rules', head: ['Inside our lessons', 'Outside our lessons, always'], rows: [
          ['Teach Python, data handling, machine learning and web skills in lessons', 'Write, debug, refactor or review the code of the artefact'],
          ['Teach evaluation methods on public practice datasets', 'Touch, clean or analyse the student\'s project data'],
          ['Explain what makes a question analytical rather than descriptive, with our own examples', 'Suggest, draft or rewrite the student\'s title, aims or plan'],
          ['Teach how to reference sources and record tool use', 'Write, edit or proofread the report, log or presentation'],
          ['Encourage students to tell their supervisor about outside lessons', 'Work against a school\'s instructions on outside help']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Tell your supervisor',
          left: [
            'If you take lessons alongside an EPQ, say so in a supervisor meeting and note it in your log. A sentence such as "I am taking general Python lessons outside school, on separate practice exercises" is honest and protects you.',
            'Your supervisor can then judge, as AQA asks, what represents your unaided achievement.'
          ],
          rightH3: 'Age-appropriate tools',
          right: [
            'Online AI services set their own age rules in their terms of use. We teach with open libraries such as scikit-learn on public datasets, which need no account.',
            'If your project uses any external AI service, check its age terms and your school\'s policy first.'
          ] },
        { kind: 'source', html: 'Sources: AQA EPQ 7993 specification, version 1.4, sections on supervision, authentication and malpractice; Pearson Edexcel Level 3 Extended Project specification, Issue 4, sections on authentication and use of AI. Read on 31 October 2026.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Method',
      h2: 'How do you evaluate a machine learning EPQ artefact?',
      lede: 'With data the model has never seen, a comparison against a simple baseline, and more than one measure. Accuracy alone can flatter a model. Here is the method as we teach it, on an example of our own that is not anyone\'s project.',
      body: [
        { kind: 'p', html: '<strong>Example (ours).</strong> Imagine a model that labels garden photographs as "robin" or "not robin". It is tested on 120 photos kept aside from training: 48 contain a robin and 72 do not. The model finds 40 of the 48 robins (true positives), misses 8 (false negatives), wrongly labels 10 other photos as robins (false positives), and correctly rejects 62 (true negatives).' },
        { kind: 'table', mt: true, caption: 'Our worked evaluation for the robin example', head: ['Measure', 'Calculation', 'Result', 'What it tells you'], rows: [
          ['Accuracy', '(40 + 62) &divide; 120', '85%', 'Share of all photos labelled correctly'],
          ['Precision', '40 &divide; (40 + 10)', '80%', 'When it says robin, how often it is right'],
          ['Recall', '40 &divide; (40 + 8)', 'About 83%', 'Of the real robins, how many it found'],
          ['Baseline', 'Always answer "not robin": 72 &divide; 120', '60%', 'The score a model with no skill would get']
        ] },
        { kind: 'p', html: 'The baseline is the line most EPQ evaluations miss. A model at 85 per cent sounds strong until you notice that guessing "not robin" every time scores 60. The honest claim is that the model adds 25 percentage points over doing nothing, finds about five robins in six, and is wrong one time in five when it says robin. That is an evaluation an examiner can follow, and it leads naturally into the review: which photos fooled it, and why?' },
        { kind: 'code', label: 'Practice code (ours) on a public toy dataset', lang: 'Python', code: CODE, note: 'We teach evaluation on public datasets such as this one. Students then apply the method to their own project themselves.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Split first.</strong> Put test data aside before any training, and never tune the model on it.',
          '<strong>Set a baseline.</strong> The simplest possible rule, measured on the same test data.',
          '<strong>Report several measures.</strong> Accuracy, precision and recall, or the measures that fit the question.',
          '<strong>Look at failures.</strong> Examine the cases the model got wrong; they are the heart of the review.',
          '<strong>Tie back to the aims.</strong> Did the artefact achieve what the approved aims said, and what would you change?'
        ] },
        { kind: 'p', html: '<strong>Try this (ours, with answers).</strong> A model is tested on 200 emails, 30 of them spam. It flags 25 emails, of which 20 are spam. (1) What is its precision? (2) Its recall? (3) What accuracy would "never flag anything" achieve? <strong>Answers:</strong> (1) 20 &divide; 25 = 80 per cent; (2) 20 &divide; 30, about 67 per cent; (3) 170 &divide; 200 = 85 per cent, which is why accuracy alone would mislead here.' }
      ]
    },
    {
      id: 'timeline', tint: '', eyebrow: 'Timeline',
      h2: 'When should I start learning the skills for a computing EPQ?',
      lede: 'Before the build starts, ideally before the proposal is approved. Learning a language and the evaluation method while also running the project leaves little time for the planning and review that carry 40 per cent of the marks at AQA.',
      body: [
        { kind: 'table', caption: 'A typical skills timeline alongside a one-year EPQ (ours; your school sets the real deadlines)', head: ['Stage', 'Project work (student and supervisor)', 'Skills lessons (with us, separate practice)'], rows: [
          ['Before proposal', 'Choosing an area, reading around it', 'Python foundations, data files, simple models or web basics'],
          ['Proposal and approval', 'Title and aims approved by the school', 'Evaluation method and baselines on practice datasets'],
          ['Research', 'Sources, existing tools and methods, referenced', 'Reading documentation and technical papers, referencing practice'],
          ['Build', 'The student designs, builds and tests the artefact', 'Topic lessons only, on unrelated exercises'],
          ['Review and presentation', 'Evaluation, report, presentation to a non-specialist audience', 'Explaining technical ideas plainly, practised on our own topics']
        ] },
        { kind: 'p', html: 'Students also taking A level Computer Science will find that the same rules shape its coursework; <a class="ag-inline-link" href="/a-level-computer-science-nea-help">the A level Computer Science project page</a> covers that separate project, and <a class="ag-inline-link" href="/a-level-computer-science-tutor-online-uk">A level Computer Science tuition</a> the course. Under AQA\'s rules, no work assessed for the EPQ may also be submitted for another qualification, so the two projects must be genuinely different.' }
      ]
    },
    {
      id: 'classes', tint: 'deep', eyebrow: 'Our mentoring',
      h2: 'How does your EPQ artefact mentoring work?',
      lede: 'It is skills teaching, timed around the project and kept apart from it. Students learn on our exercises and public datasets, then do their own project work with their school supervisor.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first session.</strong> We talk about the kind of artefact you are considering and where your programming stands, and agree a skills plan. We do not look at project documents.',
          '<strong>Foundations.</strong> Python, data handling and testing, or web development, depending on the artefact type.',
          '<strong>Method.</strong> Train and test splits, baselines, measures, user testing for apps, and how to record decisions.',
          '<strong>Communicating.</strong> Explaining technical work to a non-specialist audience, practised on our own topics.',
          '<strong>Boundaries throughout.</strong> No project code, data, title, report or slides are ever shared with or produced by us.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Shared batch or private sessions?',
          left: [
            'A batch of 15 to 20 sixth formers works well for building programming and machine learning foundations steadily.',
            'Private sessions fit a student who needs one specific skill quickly, such as web back ends or model evaluation, before their build begins.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'Any EPQ grade, any university offer, or any link with AQA, Pearson, OCR or a school.',
            'That our teaching replaces the school supervisor. The supervisor guides the project; we teach general skills.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs before the build',
    lede: 'Skills a student should hold securely before the project build begins.',
    table: { caption: 'Our progression for EPQ computing students', head: ['Rung', 'Target time', 'Skill held without help'], rows: [
      ['1. Programming', 'Year 12 autumn', 'Write, run and test small Python programs with files and functions'],
      ['2. Data or web skills', 'Year 12 winter', 'Load and clean a dataset, or build a simple web app with stored data'],
      ['3. Evaluation method', 'Before approval', 'Split data, set a baseline, choose measures, or plan user testing'],
      ['4. Explaining', 'Before presenting', 'Describe a technical result to someone with no computing background']
    ] },
    left: { h3: 'Rung three protects the review', ps: [
      'A project with no planned evaluation struggles in AO4, however good the build.',
      'For a wider route map, see <a class="ag-inline-link" href="/coding-roadmap">the coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is often forgotten', ps: [
      'Both boards expect a presentation. Plain explanation is a skill like any other.',
      'During the build we keep strictly to unrelated exercises.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for sixth-form builders',
    lede: 'Grouped by artefact type. The free session helps choose.',
    bands: [
      { num: 'I', h3: 'AI and data', sub: 'Model-based artefacts', courses: [
        { code: 'UK / EP1 / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Training and evaluating models properly.' },
        { code: 'UK / EP1 / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Machine learning without code, for first experiments.' },
        { code: 'UK / EP1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths behind honest evaluation.' }
      ] },
      { num: 'II', h3: 'Apps and web', sub: 'Built-product artefacts', courses: [
        { code: 'UK / EP2 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Websites and web apps with real data.' },
        { code: 'UK / EP2 / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Mobile apps from idea to testing.' },
        { code: 'UK / EP2 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Games as a vehicle for a research question.' }
      ] },
      { num: 'III', h3: 'Foundations', sub: 'Before any build', courses: [
        { code: 'UK / EP3 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The base for most computing artefacts.' },
        { code: 'UK / EP3 / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Version history that doubles as evidence.' },
        { code: 'UK / EP3 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Thinking clearly about efficiency.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Sessions',
    h2: 'When EPQ skills sessions run',
    lede: T + ' Sessions are led from India yet booked for UK sixth formers on the UK clock.',
    slots: [
      { time: 'After school', l: 'Around sixth-form timetables.' },
      { time: 'Evening', l: 'For students with free periods used for study.' },
      { time: 'Weekend', l: 'Longer blocks for a full practice exercise.' }
    ],
    cells: [
      { h3: 'Skills, not projects', p: 'Lessons teach methods on our material, never on the EPQ itself.' },
      { h3: 'Public datasets', p: 'Practice evaluation on open data that needs no account.' },
      { h3: 'Baselines first', p: 'Every model we train in class is compared with doing nothing.' },
      { h3: 'Plain explanation', p: 'Practice in presenting technical results to non-specialists.' },
      { h3: 'Supervisor-friendly', p: 'Students are encouraged to log outside lessons openly.' },
      { h3: 'Two formats', p: 'A shared batch of 15 to 20, or private one-to-one time.' }
    ]
  },

  projectsH2: 'Class builds by sixth formers and younger teens',
  projectsLede: 'Class projects only, none submitted for any qualification. More are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, quoted without change.',

  fees: {
    h2: 'Fees for EPQ skills sessions',
    lede: 'The first session is free. Then one monthly fee, cheaper in a batch than one to one, begins only once a course and a weekly time are fixed. You can stop at any time.',
    free: ['A talk about your artefact type', 'A skills plan timed to your project', 'Booked with a phone number'],
    group: ['A batch of 15 to 20', 'Steady programming and ML foundations', 'Evaluation method on public data', 'One teacher across the year'],
    one: ['One teacher, one student', 'A specific skill, fast', 'Suits a build starting soon']
  },

  faq: {
    eyebrow: 'EPQ questions',
    h2: 'What students ask about computing and AI EPQs',
    items: [
      { q: 'Can my EPQ be a coding project?', a: 'Yes. AQA accepts an artefact as the product alongside a research-based written report of at least 1000 words, and Pearson has an Artefact unit whose examples include creating a website. An app, game or machine learning model fits either.' },
      { q: 'How long is the written report for an artefact EPQ?', a: 'At AQA, an artefact needs a research-based written report of a minimum of 1000 words. A project that is only a written report should be approximately 5000 words.' },
      { q: 'How is an EPQ marked?', a: 'At AQA against four objectives: Manage 20 per cent, Use Resources 20 per cent, Develop and Realise 40 per cent, and Review 20 per cent. Grades run from A* to E.' },
      { q: 'What are good EPQ ideas for computer science?', a: 'Strong ideas ask a question the artefact can test, such as how accurately a small model classifies something, or whether an app design improves a task for real users. Your supervisor must approve the title and aims, so we never suggest yours.' },
      { q: 'Can a tutor help with my EPQ?', a: 'A tutor can teach general skills on separate practice material. AQA requires the supervisor to declare the evidence is the unaided work of the student, and treats submitting work that is not your own as malpractice, so nobody else should write, build or edit the project.' },
      { q: 'Can I use AI tools in my EPQ?', a: 'Only as your school allows, and any use must be recorded and referenced. Pearson advises centres to support candidates with referencing and recording of any use of AI, following JCQ guidance published in 2023.' },
      { q: 'How many hours is an EPQ?', a: 'Both AQA and Pearson specify 120 guided learning hours, including a taught skills element: about 30 hours at AQA and about 40 recommended at Pearson.' },
      { q: 'Can my EPQ overlap with my A level Computer Science project?', a: 'No. AQA says no work assessed for the EPQ may be submitted for another accredited qualification, so the two projects must be different pieces of work.' },
      { q: 'When are sessions?', a: T + ' Every time is set in UK time.' },
      { q: 'Are you linked with AQA, Pearson or my school?', a: 'No. We are a separate online teaching business, unconnected to AQA, Pearson, OCR or any school or college.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other pages for sixth-form programmers',
    lede: 'Coursework rules elsewhere, and where AI skills lead.',
    items: [
      { href: '/a-level-computer-science-nea-help', label: 'A level Computer Science project', p: 'The A level coursework and its own authenticity rules.' },
      { href: '/a-level-computer-science-tutor-online-uk', label: 'A level Computer Science tuition', p: 'The exam course itself.' },
      { href: '/ai-agents-course-for-students-uk', label: 'AI agents course for students', p: 'Where machine learning skills go next.' },
      { href: '/t-level-digital-coding-help', label: 'T Level digital help', p: 'The technical post-16 route.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level Computer Science H446', p: 'One of the two main A level boards.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The hub that indexes every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free EPQ skills session',
    lede: 'Share a phone number and pick a UK time for our callback. The session is a conversation about your artefact type and your programming, ending with a skills plan that stays separate from the project.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/ai-ml-masterclass-teens">AI and Machine Learning for Teens syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our sessions.',
    note: 'WhatsApp is free from a UK mobile and usually quickest. Our team answers from India, on a +91 number.',
    formNote: 'Nothing to pay and nothing to sign; one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Sixth-form computing', links: [
        { href: '/a-level-computer-science-nea-help', label: 'A level CS project' },
        { href: '/a-level-computer-science-tutor-online-uk', label: 'A level Computer Science' },
        { href: '/t-level-digital-coding-help', label: 'T Level digital' },
        { href: '/ai-agents-course-for-students-uk', label: 'AI agents for students' }
      ] },
      { h4: 'Elsewhere', links: [
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'EPQ computing skills, taught live in UK time'
  },

  personalityCss: `
.ag-root.ag-ecs .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-ecs .ag-capsule { border-left-width: 4px; border-bottom: 1px solid var(--ag-accent); }
.ag-root.ag-ecs .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-ecs .ag-table caption { text-align: left; font-weight: 665; }
.ag-root.ag-ecs .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-ecs .ag-code pre { font-size: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Extended Project Qualification. AQA 7993 specification version 1.4 (teaching from September 2020): 120 guided learning hours, about 30 taught; title and aims approved by the centre; presentation to a non-specialist audience; written-only product about 5000 words; artefact plus research report of at least 1000 words; stage photographs as evidence; AO1 Manage 20, AO2 Use Resources 20, AO3 Develop and Realise 40, AO4 Review 20 per cent; supervisor checklist (analyse and evaluate rather than describe and narrate); supervisor declaration of unaided work; mark representing unaided achievement; no acceptance without authentication; malpractice list and penalty; no dual accreditation. Pearson Edexcel Level 3 Extended Project Issue 4 (November 2023): 120 GLH, about 40 taught; four units including Unit 4 Artefact (creating a website); graded A* to E; Candidate Record Sheet declaration; absent without confirmation; referencing and recording AI use following 2023 JCQ guidance.',
    localProject: 'AO3 is 40 per cent and must be the student\'s unaided work, so a mentor teaches the technical method on separate practice material. An EPQ computing and AI artefact door: an AQA and Pearson comparison for artefact projects, the AQA objectives with a computing reading, the supervisor\'s describe-versus-analyse test, both boards\' authenticity and AI wording quoted, a we-do and we-never table, an original robin-classifier evaluation with accuracy, precision, recall and a baseline, practice code on the public iris dataset, an original spam practice question, and a skills timeline kept apart from the project. Lesson family: a coursework mentoring door.',
    requiredMentions: [
      'Where the chosen product is an artefact there must also be a research based written report of a minimum 1000 words',
      'the unaided work of the student',
      'the supervisor should award a mark which represents the student\'s unaided achievement',
      'If the supervisor is unable to sign the authentication statement for a particular candidate, then the student\'s work cannot be accepted for assessment.',
      'These actions constitute malpractice, for which a penalty (eg disqualification from the qualification) will be applied.',
      'plan, research, analyse, evaluate and explain, rather than simply describe and narrate',
      'centres are advised to support candidates with referencing and recording of any use of AI',
      'the learner will be marked as absent for the project',
      'Always answer "not robin"'
    ],
    sources: [
      { claim: 'AQA Level 3 Extended Project Qualification 7993 specification, version 1.4: size, taught element, products, objectives and weightings, supervision, authentication, malpractice.', url: 'https://www.aqa.org.uk/subjects/projects/level-three/projects-7993' },
      { claim: 'Pearson Edexcel Level 3 Extended Project specification, Issue 4: size, units including Artefact, grades, authentication, use of AI.', url: 'https://qualifications.pearson.com/content/dam/pdf/Project-Qualification/Level-3/2010/Specification/project-specification-level-3.pdf' },
      { claim: 'Pearson Level 3 Extended Project qualification page.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-project-qualification/level-3.html' }
    ],
    rejectedClaims: [
      'OCR Extended Project H856 details: the OCR page returned only a script shell, so OCR is mentioned but not described.',
      'JCQ AI guidance quoted directly: jcq.org.uk is known to return 403; only Pearson\'s description of it is used.',
      'UCAS tariff points for the EPQ: not in the documents read, so not stated.',
      'Suggesting titles, editing reports or reviewing project code: refused under the boards\' authenticity rules.',
      'Any grade or university offer promise: declined.'
    ]
  }
};
