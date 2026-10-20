'use strict';
// Machine learning competitions for high school students (ag- competition door; US cluster Phase 3, row 43).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Every competition is described only from its own
// official site, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/machine-learning-competitions-for-high-school-students/):
//  - USAAIO (usaaio.org home, /about-usa-na-aio, /2027-usa-na-aio, /syllabus): USA-NA-AIO "for K-12 students in the
//    U.S. and Canada"; eligibility (citizen or permanent resident, or a full-time middle or high school student studying
//    in the U.S. or Canada; "under 20 years old by August 30 of the competition year"; not a full-time university
//    student); "It is an individual competition."; Round 1 "Friday, February 19, 2027, from 12:00 p.m. to 3:00 p.m.
//    U.S. Eastern Time"; registration June 1, 2026 to January 31, 2027; Part 1 non-coding 60 minutes with app lockdown;
//    Part 2 coding 75 minutes in Google Colab; "All code must run on CPUs. In Round 1, GPUs are neither required nor
//    allowed."; OBS screen and face recording; Round 2 March or April 2027, camp June 2027; syllabus topics; "must be
//    programmed with PyTorch rather than TensorFlow"; "neither a pure math Olympiad nor a pure coding Olympiad";
//    Team USA for IAIO 2027 "held in Vietnam from February 25 to March 2, 2027".
//  - IOAI (ioai-official.org): "July 4th - 10th 2027", "Singapore", "4th International Olympiad in AI (IOAI)", "IOAI is
//    the International Science Olympiad in Artificial Intelligence for high school students."
//  - Presidential SI Challenge (orise.orau.gov/si-challenge/): High School Student Category "grades 9-12", "1-4 high
//    school students and one Team Leader"; Standard and Trailblazer tracks ("nationwide impact AND be novel"); "At
//    least three judges"; two State Champions for California, Florida, New York and Texas; PDF limits; video "4-minute
//    maximum"; "How did the team test or verify the accuracy of any SI-generated content"; dates December 18 and 23,
//    2026, State Champions by February 15, 2027, regionals March 4 to April 8, 2027, nationals June 6-9, 2027.
//  - Congressional App Challenge (2026 rulebook copy): AI permitted if "fully disclosed in the submission materials".
//  - CyLab Security Academy (cylabacademy.org): AI domain "Prompt injection, adversarial examples, model inversion".
//  - Society for Science (societyforscience.org/isef/categories-and-subcategories/): "22 categories" used at
//    "Regeneron ISEF 2026" incl. Robotics and Intelligent Machines (ROBO), Software Design (SFTD), Computational Biology
//    and Bioinformatics (CBIO); "more than 1400 projects"; affiliated fairs choose their own categories.
//  - Kaggle (kaggle.com/terms, /docs/competitions): pages render through JavaScript, no readable text in the raw HTML,
//    so no Kaggle rule or age limit is printed.
// Our own material, labelled on the page: the k-nearest-neighbours code and toy data (run in Python with NumPy, prints
// [0 1 0] for k = 3 and [0 1 1] for k = 1), the distance table, and the 18-week Round 1 plan. Lesson family: why a
// model's answer depends on a setting you chose (k).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'The USA-NA-AIO, IOAI, the Presidential SI Challenge and science fair routes for teens who build machine learning models, with 2026-27 dates.' },
  slug: 'machine-learning-competitions-for-high-school-students',
  code: 'mlch',
  accent: '#7A1D43',
  accentRationale: 'Machine learning competitions for high school students: a deep mulberry #7A1D43 from the US allocation table, distinct from the blue and violet competition pages, contrast checked on every paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Machine learning competitions for high school students',
  title: 'Machine Learning Competitions for High School Students',
  description: 'AI and machine learning contests US high schoolers can enter in 2026-27: the USA-NA-AIO, IOAI, the Presidential SI Challenge and more, with rules and dates.',
  ogDescription: 'Where a US teen who builds models can compete this year: the AI Olympiad route to IOAI, the Presidential SI Challenge, app challenges and science fairs, from official pages.',
  twitterDescription: 'ML and AI competitions for US high schoolers, 2026-27, from the official rules.',
  pageName: 'Machine Learning Competitions for High School Students',
  webPageDescription: 'A guide for US high school students and parents to machine learning and AI competitions in 2026-27, built from each organiser\'s official pages, with a from-scratch model example and an 18-week plan.',
  courseDescription: 'Live online machine learning, data science and Python classes for US high school students preparing for AI olympiads and AI project challenges, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'ML competitions for high schoolers',
  navLinks: [
    { href: '#routes', label: 'The routes' },
    { href: '#aio', label: 'USA-NA-AIO' },
    { href: '#syllabus', label: 'Syllabus' },
    { href: '#projects', label: 'Project contests' },
    { href: '#model', label: 'A model from scratch' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AI olympiads and AI projects',
  h1: 'Machine learning competitions for high school students',
  lede: 'Machine learning competitions for teenagers come in two very different shapes. One is the olympiad: a proctored exam where a student derives a gradient by hand and trains a small model in Google Colab under a clock. The other is the project challenge: a team spends weeks applying a model to a real problem and explains it in writing and on video. A US high schooler can do both in 2026-27. This guide describes each route from its organiser&rsquo;s own pages, checked on 17 October 2026, and then builds a tiny classifier from scratch to show the level of understanding the olympiad expects.',
  secondaryCta: { href: '#plan', label: 'Jump to the Round 1 plan' },
  wa: 'Hello Modern Age Coders, my teen in the US is interested in AI and machine learning competitions. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; models built and explained from first principles',
  spec: [
    ['Grades', '9 to 12, some routes from grade 6'],
    ['Olympiad', 'USA-NA-AIO, toward IOAI'],
    ['Project contests', 'SI Challenge, app challenge, fairs'],
    ['Tools', 'Python, NumPy, PyTorch, Colab'],
    ['First deadline', 'December 18, 2026'],
    ['Maths', 'Linear algebra, probability, calculus'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The main machine learning competitions for US high schoolers in 2026-27 are the USA-NA-AIO (an individual, proctored AI olympiad; Round 1 on February 19, 2027, the route to IOAI 2027 in Singapore) and the Presidential SI Challenge (team AI projects; register by December 18, 2026). AI apps can also enter the Congressional App Challenge or a science fair. Modern Age Coders teaches the machine learning behind them live online.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that cover the machine learning these contests test',
    lede: 'From the Python and maths foundations up to models a student can train and defend.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'MLCH / 01', title: 'AI and machine learning for teens', note: 'From 13. Python to real models, with the maths explained.' },
      { course: 'data-science-course-for-teens-python-data', code: 'MLCH / 02', title: 'Data science for teens', note: 'From 14. NumPy, pandas and first scikit-learn models.' },
      { course: 'python-complete-masterclass-teens', code: 'MLCH / 03', title: 'Python for teens', note: 'From 13. The language every ML contest here runs on.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: 'tint', eyebrow: 'The routes',
      h2: 'Five places a US high schooler can compete with machine learning',
      lede: 'They differ in one big way: whether the student is tested on understanding, or judged on a project. Every row comes from that organiser&rsquo;s own pages.',
      body: [
        { kind: 'table', caption: 'Machine learning and AI competitions open to US high schoolers, 2026-27 (official pages checked 17 October 2026)', head: ['Competition', 'Type', 'Solo or team', 'Who can enter', 'Next milestone'], rows: [
          ['USA-NA-AIO (run by USAAIO)', 'Proctored olympiad: theory and coding', 'Individual', 'K-12 students in the US and Canada who meet the age and status rules', 'Round 1, Friday, February 19, 2027'],
          ['IOAI 2027', 'International olympiad week', 'National team', 'High school students chosen by their country; for the US, through the USA-NA-AIO', 'July 4 to 10, 2027, Singapore'],
          ['Presidential SI Challenge', 'Project, written report and video', 'One to four students and a Team Leader', 'High schoolers in grades 9 to 12', 'Registration deadline December 18, 2026'],
          ['Congressional App Challenge', 'An app, which may use AI, with a demo video', 'One student or a team of four at most', 'Students in middle or high school whose district takes part', 'The 2026 deadline is October 26, 2026'],
          ['Science fairs leading to Regeneron ISEF', 'Research or engineering project, judged in person', 'Set by each fair', 'Through a Society-affiliated fair', 'Set by each local or state fair']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Olympiad or project?',
          left: [
            'The olympiad suits a student who likes exact answers: deriving an estimator, computing a backpropagation step by hand, or writing a training loop that runs on a CPU within the time. There is one score and it is individual.',
            'Project contests suit a student who likes a messy real problem, can work in a team and can explain a model to a judge who is not a specialist. Accuracy still matters, but so do the data, the safety thinking and the presentation.'
          ],
          rightH3: 'Why both are worth doing',
          right: [
            'Olympiad preparation forces the theory. Project work forces the judgment about when a model is good enough and when the data is the real problem.',
            'The calendars barely clash: SI Challenge projects are due in December, and the olympiad&rsquo;s first round is in February.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://usaaio.org/2027-usa-na-aio" rel="noopener" target="_blank">USAAIO 2027 USA-NA-AIO</a>, <a class="ag-inline-link" href="https://ioai-official.org/" rel="noopener" target="_blank">IOAI</a>, <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/about/eligibility.html" rel="noopener" target="_blank">Presidential SI Challenge</a>, the <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">Congressional App Challenge</a> and <a class="ag-inline-link" href="https://www.societyforscience.org/isef/categories-and-subcategories/" rel="noopener" target="_blank">Society for Science</a>, checked 17 October 2026. Modern Age Coders is independent of every organiser named here.' }
      ]
    },
    {
      id: 'aio', tint: 'deep', eyebrow: 'The AI olympiad',
      h2: 'The USA-NA-AIO: how the 2027 AI olympiad works',
      lede: 'The USA-North America AI Olympiad is run by USAAIO, which also organises Team USA for the international AI olympiads. Its 2027 rules were posted on September 9, 2026.',
      body: [
        { kind: 'table', caption: 'USA-NA-AIO 2027 key facts, from the USAAIO site (checked 17 October 2026)', head: ['Item', 'As USAAIO publishes it'], rows: [
          ['Eligibility', 'Age: under 20 years old by August 30 of the competition year. Status: a US or Canadian citizen or permanent resident, or a full-time middle or high school student studying in the US or Canada. Not a full-time university student'],
          ['Format', '"It is an individual competition." Every round is taken onsite with a proctor'],
          ['Registration', 'June 1, 2026 to January 31, 2027'],
          ['Round 1', 'Friday, February 19, 2027, from 12:00 p.m. to 3:00 p.m. U.S. Eastern Time, at schools or approved test sites'],
          ['Part 1', 'Non-coding, multiple choice or fill in the blank, 60 minutes, with the contest app locked down'],
          ['Part 2', 'Coding, 75 minutes, written and run in Google Colab'],
          ['Hardware', '"All code must run on CPUs. In Round 1, GPUs are neither required nor allowed."'],
          ['Monitoring', 'Required monitoring software, a single monitor, and an OBS Studio recording of the full screen and the student&rsquo;s face'],
          ['After Round 1', 'Round 2 in March or April 2027 for qualifiers, some problems may need GPUs; a camp in June 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where it leads',
          left: [
            'USAAIO says the USA-NA-AIO is the only pathway for students to qualify for Team USA at the international AI olympiads. IOAI 2027, the fourth International Olympiad in AI, is set for July 4 to 10, 2027 in Singapore.',
            'USAAIO also sends a team to the International AI Olympiad (IAIO); its 2027 edition is listed for Vietnam from February 25 to March 2, 2027, with that team already chosen.'
          ],
          rightH3: 'Practical points for families',
          right: [
            'Students register themselves, then find a proctor; the proctor&rsquo;s details are only collected during the contest. A school teacher, or an approved site such as a library or testing center, can host.',
            'Because the coding part is in Colab with recording software running, a student should rehearse the whole setup on the same laptop at least once before February.'
          ] },
        { kind: 'source', html: 'Sources: USAAIO <a class="ag-inline-link" href="https://usaaio.org/2027-usa-na-aio" rel="noopener" target="_blank">2027 USA-NA-AIO</a>, <a class="ag-inline-link" href="https://usaaio.org/about-usa-na-aio" rel="noopener" target="_blank">About USA-NA-AIO</a> and <a class="ag-inline-link" href="https://usaaio.org/" rel="noopener" target="_blank">home page</a>; <a class="ag-inline-link" href="https://ioai-official.org/" rel="noopener" target="_blank">IOAI</a>; checked 17 October 2026.' }
      ]
    },
    {
      id: 'syllabus', tint: 'tint', eyebrow: 'What is tested',
      h2: 'The USA-NA-AIO syllabus, topic by topic',
      lede: 'USAAIO publishes a syllabus for the whole competition and says which parts Round 1 covers. It is a useful map of what high school machine learning looks like at contest level, whether or not a student enters.',
      body: [
        { kind: 'table', caption: 'USA-NA-AIO syllabus areas and the Round 1 subset (USAAIO syllabus and 2027 rules, checked 17 October 2026)', head: ['Area', 'Examples USAAIO lists', 'In Round 1?'], rows: [
          ['Markdown in Google Colab', 'Text cells, code snippets and typeset maths', 'Yes'],
          ['Mathematical foundations', 'Linear algebra, Bayes&rsquo; rule and Hoeffding&rsquo;s inequality, multivariable derivatives, gradient descent and duality', 'Yes'],
          ['Basic coding', 'Python, NumPy, pandas, matplotlib, seaborn, scikit-learn', 'Yes'],
          ['Machine learning', 'Linear and logistic regression, support vector machines, decision trees, kNN, ensembles, cross-validation; k-means and PCA', 'Yes'],
          ['Deep learning in PyTorch', 'Multilayer perceptrons, batch normalization, dropout, backpropagation by hand', 'Yes, including basic CNNs'],
          ['Transformers and NLP', 'Attention, tokenization, embeddings, pre-training and fine-tuning', 'Round 2 and later'],
          ['Computer vision and generative AI', 'Object detection, UNet, autoencoders, GANs, diffusion models', 'Round 2 and later']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two rules worth noticing',
          left: [
            'Deep learning answers "must be programmed with PyTorch rather than TensorFlow", in line with IOAI. A student who learned TensorFlow first should switch early.',
            'USAAIO also expects theory and code together. Its own example is that knowing the theory without being able to build a PCA class from scratch in NumPy is not enough, and the reverse is not enough either.'
          ],
          rightH3: 'How we read it for a grade 10 student',
          right: [
            'The maths is the long pole. Most of the Round 1 list is reachable for a strong grade 10 or 11 student, but eigenvalues and multivariable derivatives usually have to be taught ahead of the school curriculum.',
            'In USAAIO&rsquo;s words, the AI Olympiad "is neither a pure math Olympiad nor a pure coding Olympiad". Our plan below splits each week between the two for that reason.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://usaaio.org/syllabus" rel="noopener" target="_blank">USA-NA-AIO syllabus</a> and <a class="ag-inline-link" href="https://usaaio.org/2027-usa-na-aio" rel="noopener" target="_blank">2027 Round 1 rules</a>, checked 17 October 2026.' }
      ]
    },
    {
      id: 'projects', tint: 'deep', eyebrow: 'Project contests',
      h2: 'Project contests: the Presidential SI Challenge, apps and science fairs',
      lede: 'Here the model is a means, not the test. Judges want to know what problem it solves, whether it works, and whether the team understands its limits.',
      body: [
        { kind: 'table', caption: 'The Presidential SI Challenge for high school teams, 2026-27 (eligibility, tiers, requirements and timeline pages, checked 17 October 2026)', head: ['Point', 'What the official pages set out'], rows: [
          ['Category', 'Grades 9 to 12, entered with a parent&rsquo;s consent'],
          ['Team', '1 to 4 high school students and one Team Leader, who must be 21 or older'],
          ['Tracks', 'Standard, or Trailblazer for projects with nationwide impact that are also novel'],
          ['Hand-in', 'One PDF: a title page and up to 10 further pages in 12-point type or larger, plus a video of up to four minutes'],
          ['Original work', 'All content created specifically for the Challenge after August 1, 2026'],
          ['Judging', 'At least three judges per eligible project, using rubrics; State Champions by state, category and track, with two each for California, Florida, New York and Texas'],
          ['Dates', 'Team Leaders must register teams by December 18, 2026, and the project upload deadline is December 23, 2026 (both 5:00 p.m. Eastern). State Champions are named between February 11 and 15, 2027; regional judging runs from March 4 to April 8, 2027; the national round is in Washington, DC from June 6 to 9, 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The question that tests ML understanding',
          left: [
            'Among the questions the report must answer is how the team tested or verified the accuracy of any SI-generated content, outputs or predictions, and how accurate they were. That is a machine learning evaluation question in plain words.',
            'A strong answer names the test data, explains why it was kept separate, gives a number, and says where the model fails. The kNN example below shows the smallest version of that habit.'
          ],
          rightH3: 'Two other doors for an ML project',
          right: [
            'The Congressional App Challenge accepts apps built with AI, as long as every use of AI is declared in the entry. Our <a class="ag-inline-link" href="/congressional-app-challenge-guide">guide to that challenge</a> covers the rest of its rules, and our <a class="ag-inline-link" href="/presidential-ai-challenge-guide">Presidential AI Challenge guide</a> goes deeper on the SI Challenge.',
            'Science fairs are the research route. Regeneron ISEF 2026 used 22 categories, including Robotics and Intelligent Machines (ROBO), Software Design (SFTD) and Computational Biology and Bioinformatics (CBIO); each affiliated fair sets its own categories.'
          ] },
        { kind: 'p', mt: true, html: 'The program now called the Presidential SI Challenge was launched as the Presidential AI Challenge. Its official site explains that the federal term changed from "Artificial Intelligence" to "Super Intelligence" under a September 29, 2026 executive order, so search results may show either name. Sources: <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/complete-the-challenge/requirements.html" rel="noopener" target="_blank">requirements</a>, <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/complete-the-challenge/competition-tiers.html" rel="noopener" target="_blank">competition tiers</a>, <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/about/timeline.html" rel="noopener" target="_blank">important dates</a>, <a class="ag-inline-link" href="https://www.societyforscience.org/isef/categories-and-subcategories/" rel="noopener" target="_blank">ISEF categories</a>.' }
      ]
    },
    {
      id: 'model', tint: 'tint', eyebrow: 'A model from scratch',
      h2: 'Build a k-nearest-neighbours classifier in NumPy',
      lede: 'Olympiad problems expect students to build simple models without a library doing the thinking. This example is ours: a complete kNN classifier in a few lines, on six made-up points, runnable on any laptop CPU.',
      body: [
        { kind: 'code', label: 'kNN from scratch with NumPy (ours)', lang: 'Python', code: 'import numpy as np\n\ndef knn_predict(X_train, y_train, X_new, k=3):\n    # distance from every new point to every training point\n    d = np.linalg.norm(X_new[:, None, :] - X_train[None, :, :], axis=2)\n    nearest = np.argsort(d, axis=1)[:, :k]      # indices of the k closest\n    votes = y_train[nearest]                     # their labels\n    return (votes.mean(axis=1) > 0.5).astype(int)\n\nX_train = np.array([[1.0, 1.0], [1.5, 2.0], [2.0, 1.2],\n                    [6.0, 5.5], [7.0, 6.0], [6.5, 7.0]])\ny_train = np.array([0, 0, 0, 1, 1, 1])\nX_new = np.array([[1.8, 1.5], [6.2, 6.1], [4.0, 3.8]])\n\nprint(knn_predict(X_train, y_train, X_new, k=3))   # [0 1 0]\nprint(knn_predict(X_train, y_train, X_new, k=1))   # [0 1 1]', note: 'Run with Python 3 and NumPy. The two outputs differ only in the third point, which sits between the two clusters.' },
        { kind: 'table', mt: true, caption: 'Distances from the in-between point (4.0, 3.8) to each training point (ours, rounded)', head: ['Training point', 'Label', 'Distance', 'Rank'], numCols: [2, 3], rows: [
          ['(6.0, 5.5)', '1', '2.62', '1'],
          ['(1.5, 2.0)', '0', '3.08', '2'],
          ['(2.0, 1.2)', '0', '3.28', '3'],
          ['(7.0, 6.0)', '1', '3.72', '4'],
          ['(6.5, 7.0)', '1', '4.06', '5'],
          ['(1.0, 1.0)', '0', '4.10', '6']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the example teaches',
          left: [
            'With k = 1, the single closest point has label 1, so the prediction is 1. With k = 3, the three closest are labels 1, 0 and 0, so the majority vote is 0. Same data, same code, different answer, because of a setting the student chose.',
            'That is the core idea behind cross-validation, which is on the Round 1 syllabus: choose k by testing on data the model has not seen, not by what looks right.'
          ],
          rightH3: 'Three extensions to try',
          right: [
            'Scale the second feature by 10 and run it again. Why do the predictions change, and what does that say about normalising features?',
            'Replace the vote with a distance-weighted vote, then write the same classifier as a small PyTorch function instead of NumPy.',
            'Hold out two of the six points, choose k on the other four, and report accuracy on the held-out two.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Eighteen weeks',
      h2: 'An 18-week plan to USA-NA-AIO Round 1',
      lede: 'Our plan for a student starting in mid-October 2026 with solid Python and algebra. About four hours a week, one of them a live class. February 19, 2027 is roughly 18 weeks away from the date this page was checked.',
      body: [
        { kind: 'table', caption: 'From October 2026 to Round 1 on February 19, 2027 (our plan, built on the published syllabus)', head: ['Weeks', 'Maths', 'Code', 'Done when'], rows: [
          ['1 to 3', 'Vectors, matrices, dot products', 'NumPy arrays and broadcasting', 'The kNN example runs and the student can explain each line'],
          ['4 to 6', 'Derivatives and gradient descent', 'Linear and logistic regression from scratch', 'A loss curve that goes down, plotted in matplotlib'],
          ['7 to 9', 'Probability, Bayes&rsquo; rule', 'scikit-learn models, cross-validation', 'k chosen by validation, not by guessing'],
          ['10 to 12', 'Eigenvalues, PCA', 'A PCA class in NumPy; k-means', 'PCA output matches scikit-learn on the same data'],
          ['13 to 15', 'Backpropagation by hand', 'PyTorch MLPs, dropout, batch norm', 'One backward pass computed on paper and checked in code'],
          ['16 to 17', 'Review', 'Basic CNNs in PyTorch on CPU', 'A small image model trained inside the time'],
          ['18', 'Rest and rehearsal', 'Full mock in Colab with recording software on', 'Setup tested on the contest laptop']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 9', p: 'Start the plan for next year instead; use this year for Python, NumPy and algebra.' },
          { h3: 'Grades 10 and 11', p: 'The plan above, plus an SI Challenge project in December if time allows.' },
          { h3: 'Grade 12', p: 'Check the under-20 and not-at-university rules; a project contest may fit better.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where teens start',
    h2: 'Four levels between using AI and competing in it',
    lede: 'A teen new to ML competitions is usually at level 1 or 2.',
    table: { caption: 'From AI user to ML competitor (ours)', head: ['Level', 'In practice'], rows: [
      ['1. User', 'Uses AI apps; has not trained a model'],
      ['2. Library user', 'Can call scikit-learn fit and predict on a dataset'],
      ['3. Builder', 'Can write a simple model from scratch and explain the maths'],
      ['4. Evaluator', 'Can show, with held-out data, how good a model is and where it fails']
    ] },
    left: { h3: 'For parents', ps: [
      'Level 2 to level 3 needs maths that many schools teach later. That is normal, and it is the part we spend most time on.',
      'Ask your teen how they know their model works. A clear answer is a better sign than any accuracy number.'
    ] },
    right: { h3: 'For students', ps: [
      'Write one model from scratch before using a library for it. You will understand the library far better afterwards.',
      'Keep a notebook of every experiment, including the ones that failed. Project judges ask about those.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for teens heading into ML competitions',
    lede: 'Live online, one steady teacher per class, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Python and maths', courses: [
        { code: 'MLCH / FND / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Clean code before models.' },
        { code: 'MLCH / FND / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra to calculus.' },
        { code: 'MLCH / FND / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Probability with real data.' }
      ] },
      { num: 'II', h3: 'Machine learning', sub: 'Models and evaluation', courses: [
        { code: 'MLCH / ML / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From regression to neural nets.' },
        { code: 'MLCH / ML / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Data, plots and first models.' },
        { code: 'MLCH / ML / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'Derivatives behind gradient descent.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'For challenge entries', courses: [
        { code: 'MLCH / PRJ / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Put a model inside an app.' },
        { code: 'MLCH / PRJ / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'AI-assisted builds, disclosed.' },
        { code: 'MLCH / PRJ / 03', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Cybersecurity competitions', blurb: 'Includes AI security puzzles.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons built around theory and code',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches across US time zones.' },
      { time: 'Weekends', l: 'Longer sessions suit maths-heavy weeks.' },
      { time: '1-on-1', l: 'Paced to one student&rsquo;s syllabus gaps.' }
    ],
    cells: [
      { h3: 'Maths on paper', p: 'Derivations done by hand, then checked.' },
      { h3: 'Code in Colab', p: 'The same tool the olympiad uses.' },
      { h3: 'From scratch first', p: 'NumPy before libraries.' },
      { h3: 'Evaluation', p: 'Held-out data on every model.' },
      { h3: 'Any time zone', p: 'Live online across the US.' },
      { h3: 'Batch or solo', p: 'A batch of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'AI and web projects by our students',
  projectsLede: 'Models and apps our learners have built and shipped. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'The competitions set their own entry terms; we charge only for teaching. Lessons are paid monthly in US dollars and can stop at any month end, which suits a block of preparation before a round.',
    free: ['A free first lesson', 'Bring a model or a question', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Built around the syllabus', 'Your own projects']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'ML competitions for teens: what families ask',
    items: [
      { q: 'Which ML contests are open to US high schoolers?', a: 'In 2026-27 the main ones are the USA-NA-AIO (the AI olympiad that selects Team USA for IOAI) and the Presidential SI Challenge for team projects. AI apps can also go to the Congressional App Challenge, and research projects to science fairs on the way to Regeneron ISEF.' },
      { q: 'When is the 2027 USA-NA-AIO?', a: 'USAAIO has scheduled Round 1 for Friday, February 19, 2027, from 12:00 p.m. to 3:00 p.m. U.S. Eastern Time. Registration runs until January 31, 2027, and Round 2 is in March or April 2027.' },
      { q: 'Who can take the USA-NA-AIO?', a: 'A US or Canadian citizen or permanent resident, or a full-time middle or high school student studying in the US or Canada, who is under 20 by August 30 of the competition year and is not a full-time university student.' },
      { q: 'Do I need a GPU for the AI olympiad?', a: 'Not for Round 1. USAAIO says all Round 1 code must run on CPUs and GPUs are neither required nor allowed. Some Round 2 problems may require GPUs.' },
      { q: 'Should I learn PyTorch or TensorFlow?', a: 'For the USA-NA-AIO, PyTorch. Its syllabus says deep learning problems must be programmed with PyTorch rather than TensorFlow, in line with IOAI.' },
      { q: 'Where is IOAI 2027?', a: 'The IOAI site lists the fourth International Olympiad in AI for July 4 to 10, 2027 in Singapore. US students reach it through the USA-NA-AIO.' },
      { q: 'Is the Presidential AI Challenge the same as the Presidential SI Challenge?', a: 'Yes. The official site says the name changed after a September 29, 2026 executive order. High school teams of one to four register by December 18, 2026 and submit by December 23, 2026.' },
      { q: 'What times do your classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What about Kaggle competitions?', a: 'Kaggle pages could not be read as plain text when we checked, so we do not describe their rules here. Each Kaggle competition has its own rules page; read the eligibility section with a parent before entering.' },
      { q: 'Are you part of USAAIO or the SI Challenge?', a: 'No. We have no link with any organiser. We teach the machine learning, maths and Python these competitions draw on; registration is always directly with the organiser.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Keep reading',
    lede: 'Other guides for US teens working with AI.',
    items: [
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'Project ideas with real data.' },
      { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA', p: 'Our classes for US students.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'Rules for an AI-powered app.' },
      { href: '/presidential-ai-challenge-guide', label: 'Presidential AI Challenge', p: 'The SI Challenge rules in depth.' },
      { href: '/picoctf-for-beginners', label: 'picoCTF for beginners', p: 'Including its AI security puzzles.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The full list of US pages.' },
      { href: '/ai-courses-for-high-school-students', label: 'AI courses for high school students', p: 'AI courses for US high schoolers: school, free online and live, compared on what they actually teach.' },
      { href: '/ai-classes-for-middle-school-students', label: 'AI classes for middle school students', p: 'AI classes for US middle schoolers: what school covers, what a good class adds, and a first model in Python.' },
      { href: '/ai-projects-for-middle-school-students', label: 'AI projects for middle school students', p: 'Ten AI projects for US middle schoolers, two in real Python, and how to take one to a science fair.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Share what your teen has built or studied in AI so far. The teacher works through one small model with them and maps the gaps against the olympiad syllabus or a project idea.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and browse the <a class="ag-inline-link" href="/courses">course syllabi</a>.',
    note: 'Our teachers teach from India over live video, so classes are online only. Families in the US usually reach us fastest on WhatsApp.',
    formNote: 'Free first lesson. No card asked for.'
  },

  footer: {
    cols: [
      { h4: 'AI and ML', links: [
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA' },
        { href: '/best-ai-courses-for-teens-2026', label: 'AI courses for teens' },
        { href: '/summer-research-programs-coding', label: 'Summer research programs' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/ap-statistics-tutoring-online', label: 'AP Statistics tutoring' }
      ] }
    ],
    bottomRight: 'Choose k on data the model has not seen'
  },

  personalityCss: `
.ag-root.ag-mlch .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-mlch .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-mlch .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-mlch .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-mlch .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-mlch .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Each organiser from its own pages, read raw on 17 October 2026: USAAIO (USA-NA-AIO eligibility, individual, onsite proctoring, registration June 1 2026 to January 31 2027, Round 1 Friday February 19 2027 12:00 to 3:00 p.m. ET, Part 1 60 minutes lockdown, Part 2 75 minutes Colab, CPUs only, monitoring and OBS, Round 2 and camp, syllabus incl. PyTorch rule and theory-plus-code statement, IAIO 2027 Vietnam); IOAI (July 4 to 10 2027, Singapore, 4th edition, for high school students); Presidential SI Challenge (high school category, team of 1 to 4 plus Team Leader 21+, tracks, PDF and video limits, after August 1 2026, three judges, two champions for CA FL NY TX, dates, rename); CAC 2026 AI disclosure; Society for Science ISEF categories (22 categories in 2026, ROBO, SFTD, CBIO). Kaggle not readable raw.',
    localProject: 'Our NumPy k-nearest-neighbours classifier on six made-up points, run in Python: predictions [0 1 0] with k = 3 and [0 1 1] with k = 1; our distance table for the point (4.0, 3.8) (2.62, 3.08, 3.28, 3.72, 4.06, 4.10); our 18-week plan to Round 1. Lesson family: why a model\'s answer depends on a setting you chose (k).',
    requiredMentions: ['It is an individual competition.', 'Friday, February 19, 2027', 'GPUs are neither required nor allowed', 'must be programmed with PyTorch rather than TensorFlow', 'is neither a pure math Olympiad nor a pure coding Olympiad', 'under 20 years old by August 30', 'July 4 to 10, 2027', 'Trailblazer', 'At least three judges', 'Robotics and Intelligent Machines (ROBO)', 'February 25 to March 2, 2027', '[0 1 0]', '2.62', 'December 18, 2026'],
    sources: [
      { claim: 'USA-NA-AIO 2027 eligibility, dates, format, hardware and monitoring rules.', url: 'https://usaaio.org/2027-usa-na-aio' },
      { claim: 'USA-NA-AIO syllabus, PyTorch rule and theory-plus-code statement.', url: 'https://usaaio.org/syllabus' },
      { claim: 'USA-NA-AIO individual format and the only pathway to Team USA.', url: 'https://usaaio.org/about-usa-na-aio' },
      { claim: 'IOAI 2027 dates and host country.', url: 'https://ioai-official.org/' },
      { claim: 'Presidential SI Challenge high school category, tracks, deliverables, judging and dates.', url: 'https://orise.orau.gov/si-challenge/complete-the-challenge/requirements.html' },
      { claim: 'Regeneron ISEF 2026 categories relevant to ML projects.', url: 'https://www.societyforscience.org/isef/categories-and-subcategories/' },
      { claim: 'Congressional App Challenge AI disclosure rule.', url: 'https://www.congressionalappchallenge.us/students/rules/' }
    ],
    rejectedClaims: [
      'Kaggle rules and age limits: kaggle.com returned JavaScript-only pages on 17 October 2026, so nothing about Kaggle is stated beyond advising families to read each competition\'s rules.',
      'Names of USA-NA-AIO, IOAI or IAIO medallists and their schools, which USAAIO publishes: not repeated.',
      'Regeneron ISEF 2027 categories and dates: not on the page read; the 2026 categories are given as 2026.',
      'Technovation\'s AI track: the official site blocked our request (Cloudflare) on 17 October 2026.',
      'That olympiad results improve college admission chances: refused.',
      'Any affiliation with USAAIO, IOAI, the SI Challenge or Society for Science: none, stated on the page.'
    ]
  }
};
