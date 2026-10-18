'use strict';
// AI research programs for high school students (ag- topic door; US cluster Phase 2, row 21).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Never twins /summer-research-programs-coding (which owns the RSI, PRIMES and SSP explainer) or
// /ai-projects-for-high-school-students; this page is about research programs and competitions where AI work is judged.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/ai-research-programs-for-high-school-students/):
//  - Regeneron STS 2027 Rules and Entry Instructions (PDF, sspcdn.blob.core.windows.net/.../STS/2027/Application/Official-Rules.pdf):
//    "APPLICATIONS DUE ON THURSDAY, NOVEMBER 5, 2026 AT 8:00 PM EASTERN TIME"; age "be over 13 years of age and have legal
//    parental or guardian consent"; "Applicants must be in their final year of their secondary school"; "Applicants must
//    complete individual research projects"; "Students may not "split" a team project"; "Research conducted alongside adult
//    researchers in a research institution is permitted"; rule 8 "Students may not use generative Artificial Intelligence (AI)
//    to write Regeneron STS application questions, draft the Research Report or generate citations" and "Use of AI tools for
//    student research projects is permitted, and should be disclosed and appropriately cited"; "The paper should be 20 pages
//    or less"; Appendix 4 chart rows (initial code: "Acceptable, only with explicit citation stating which portions of the code
//    were AI generated and with a log of the prompts"; starter bibliography "Never acceptable"; statistical tests "requires a
//    log of your prompts"); dates: Top 300 January 7, 2027, Top 40 January 21, 2027, Finals Week March 11-17, 2027.
//  - societyforscience.org/regeneron-sts: "around 2,600 students enter Regeneron STS"; 40 finalists. (Award sums not printed.)
//  - Regeneron ISEF: categories page "The following 22 categories are those that will be used at Regeneron ISEF 2026";
//    all-categories page, ROBO "Studies in which the use of machine intelligence is paramount to reducing the reliance on
//    human intervention", subcategory Machine Learning "Construction and/or study of algorithms that can learn from data";
//    home page "2027 Regeneron ISEF in Los Angeles, California, in May 2027", 2026 finalists "selected from 365 affiliate fairs".
//  - CEE, Research Science Institute: "Applications for RSI 2027 are open through 11:59pm December 11, 2026"; "In 2027, CEE is
//    expanding the RSI to Stanford for 50 young scholars"; "five week research internship"; "High school juniors are eligible."
//  - Boston University RISE: six weeks, junior year, Internship track "40 hours each week", computer science among the areas;
//    "The summer 2027 practicum options will be announced in December."
//  - MIT PRIMES: PRIMES-USA "a free year-long remote mentoring program" in "mathematics and bioinformatics"; "The deadline is
//    November 2, 2026".
//  - scikit-learn docs (1.9.1): DummyClassifier "serves as a simple baseline", strategy "most_frequent"; cross_val_score;
//    load_digits (10 classes, 1797 samples, 64 features); KNeighborsClassifier.
// Excluded on purpose: JSHS (jshs.org returned HTTP 429, not retried), Stanford AIMI (health research), award amounts, named
// finalists, and ranking words used by organisers.
// Our own material, labelled on the page: the baseline experiment and its output (run with Python 3.13 and scikit-learn 1.7.2
// on 17 October 2026: baseline mean 0.101; k=1 mean 0.964; k=5 mean 0.963; k=25 mean 0.946), the project-to-research
// checklist, the eleventh-grade calendar, and the arithmetic 40 / 2,600 = about 1.5 in 100 and 1 / 10 = 0.1.
// Lesson family: experimental design (a baseline, a fair comparison and an honest spread).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BASELINE = `# A fair test: model versus baseline (ours)
from sklearn.datasets import load_digits
from sklearn.dummy import DummyClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score

X, y = load_digits(return_X_y=True)

contenders = {
    "baseline": DummyClassifier(strategy="most_frequent"),
    "knn k=1": KNeighborsClassifier(n_neighbors=1),
    "knn k=5": KNeighborsClassifier(n_neighbors=5),
    "knn k=25": KNeighborsClassifier(n_neighbors=25),
}

for name, model in contenders.items():
    scores = cross_val_score(model, X, y, cv=5)
    print(f"{name:9} mean {scores.mean():.3f}"
          f"  spread {scores.min():.3f}-{scores.max():.3f}")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AI RESEARCH', blurb: 'Where a US high schooler\'s AI research can be judged: Regeneron STS, Regeneron ISEF, RSI and BU RISE, from their 2026 to 2027 rules, plus a baseline experiment in Python.' },
  slug: 'ai-research-programs-for-high-school-students',
  code: 'arph',
  accent: '#18429E',
  accentRationale: 'AI research door, US row 21: the deep lab blue #18429E allocated in alloc.tsv, distinct from the other US accents and dark enough for body links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'AI research programs for high school students',
  title: 'AI Research Programs for High School Students: 2026 to 2027',
  description: 'AI research programs for high school students in the US: Regeneron STS, ISEF, RSI and BU RISE from their own 2026 to 2027 rules, plus how to run a fair AI test.',
  ogDescription: 'Regeneron STS closes November 5, 2026 and bans generative AI in the paper itself. A guide to the research programs where a teenager\'s AI work is judged, from their own rules.',
  twitterDescription: 'AI research programs for US high schoolers, from the 2026 to 2027 rules, with a fair-test experiment.',
  pageName: 'AI Research Programs for High School Students',
  webPageDescription: 'A guide for US high school students and parents to research programs and competitions where machine learning work is judged, built from each organizer\'s current rules, with an original baseline experiment.',
  courseDescription: 'Live online machine learning, data science and Python classes for US high school students preparing original AI research, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AI research programs for high school students',
  navLinks: [
    { href: '#programs', label: 'Programs' },
    { href: '#sts', label: 'STS and AI' },
    { href: '#isef', label: 'ISEF' },
    { href: '#method', label: 'A fair test' },
    { href: '#calendar', label: 'Calendar' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 10 to 12 &middot; Machine learning research',
  h1: 'AI research programs for high school students',
  lede: 'Plenty of teenagers now train a model. Far fewer turn one into research, which means asking a question nobody has answered, testing it fairly, and writing up what happened, including what failed. American high schoolers have a handful of serious places where that kind of work is read and judged. This guide takes the ones where machine learning fits naturally, quotes their current rules, and is plain about the new part: what each organizer lets a student do with generative AI, and what it does not.',
  secondaryCta: { href: '#sts', label: 'Read the STS AI rules' },
  wa: 'Hello Modern Age Coders, my high schooler in the US wants to do AI research for a program like Regeneron STS or ISEF. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Research skills taught, never research written for you',
  spec: [
    ['For', 'Grades 10 to 12'],
    ['Programs covered', 'Regeneron STS, ISEF, RSI, BU RISE'],
    ['Next deadline', 'STS: November 5, 2026, 8:00 pm ET'],
    ['AI in the paper', 'Not allowed at STS'],
    ['Our role', 'Teaching method, code and statistics'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'The main US places where a high schooler\'s AI research is judged are Regeneron STS (seniors, individual projects, deadline November 5, 2026), Regeneron ISEF through a Society-affiliated fair (category Robotics and Intelligent Machines, subcategory Machine Learning), and summer research at RSI or BU RISE for juniors. Modern Age Coders teaches the method, Python and statistics live online, ages 13 to 18, in a batch or one to one.',

  picks: {
    eyebrow: 'Build the research toolkit',
    h2: 'Three courses behind a credible AI research project',
    lede: 'Research needs a model, a dataset handled honestly, and the reasoning to defend a result. Each course is taught live by a regular teacher.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'ARPH / 01', title: 'AI and machine learning for teens', note: 'Ages 13 to 18. Models built from the inside, so results can be explained.' },
      { course: 'data-science-course-for-teens-python-data', code: 'ARPH / 02', title: 'Data science for teens', note: 'Ages 14 to 18. Clean data, fair splits and charts a judge can read.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ARPH / 03', title: 'Problem solving for teens', note: 'Ages 13 to 18. The algorithmic thinking that turns a hunch into a method.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'Where AI research is judged',
      h2: 'Four programs, from their 2026 to 2027 rules',
      lede: 'These are the programs where a machine learning project fits naturally. Each row comes from the organizer\'s own page or rule book, read on 17 October 2026. None of them is ranked here; they do different jobs.',
      body: [
        { kind: 'table', caption: 'Research programs open to US high schoolers where AI work fits (from the organizers\' pages, read 17 October 2026)', head: ['Program', 'Run by', 'Who', 'Kind', 'Key date'], rows: [
          ['Regeneron Science Talent Search', 'Society for Science', 'Seniors, final year of secondary school', 'Individual research, judged on a written report', 'Applications due November 5, 2026, 8:00 pm ET'],
          ['Regeneron ISEF', 'Society for Science', 'High schoolers who win at an affiliated fair', 'Science fair, 22 categories in 2026', 'ISEF 2027 in Los Angeles, May 2027'],
          ['Research Science Institute', 'Center for Excellence in Education', 'High school juniors only', 'Summer: classes, then a five-week internship', 'Applications close 11:59 pm, December 11, 2026'],
          ['BU RISE', 'Boston University', 'Juniors, domestic students', 'Six-week summer lab internship or practicum', '2027 practicum subjects announced in December'],
          ['MIT PRIMES-USA', 'MIT Mathematics', 'Juniors and sophomores', 'Free year-long remote mentoring', 'Deadline November 2, 2026']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Competitions and programs are different things',
          left: [
            'STS and ISEF judge finished work. They do not supply a mentor or a lab; the student arrives with a project. RSI, RISE and PRIMES are the opposite: they place a student with a mentor and the research happens inside the program.',
            'A realistic plan for an AI project aimed at STS spreads the work over a junior year and a summer, sometimes inside one of the mentored programs. The two kinds fit together rather than compete.'
          ],
          rightH3: 'What fits an AI project, and what does not',
          right: [
            'PRIMES-USA currently describes its research projects as being in mathematics and bioinformatics, so it suits a student whose AI interest is mathematical rather than applied. Read its own page for the current list before applying.',
            'At RISE, computer science is one of the internship areas the program lists. At RSI, each student works on an individual project with a mentor who is an experienced scientist or researcher. Both are summer programs, so their deadlines fall in the school year before.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://www.societyforscience.org/regeneron-sts/" rel="noopener" target="_blank">Regeneron STS</a> and its <a class="ag-inline-link" href="https://www.societyforscience.org/regeneron-sts/official-rules/" rel="noopener" target="_blank">2027 rules</a>; <a class="ag-inline-link" href="https://www.societyforscience.org/isef/" rel="noopener" target="_blank">Regeneron ISEF</a>; <a class="ag-inline-link" href="https://www.cee.org/programs/research-science-institute" rel="noopener" target="_blank">RSI at CEE</a>; <a class="ag-inline-link" href="https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/" rel="noopener" target="_blank">BU RISE</a>; <a class="ag-inline-link" href="https://math.mit.edu/research/highschool/primes/" rel="noopener" target="_blank">MIT PRIMES</a>. We are not connected with any of these organizations. For the selective summer programs in depth, see our <a class="ag-inline-link" href="/summer-research-programs-coding">summer research programs guide</a>.' }
      ]
    },
    {
      id: 'sts', tint: 'deep', eyebrow: 'Regeneron STS 2027',
      h2: 'Regeneron STS: the eligibility rules and the generative AI rules',
      lede: 'The 2027 rule book includes a full appendix on generative AI in student research. It is worth reading in full; here is the part every AI-minded senior needs.',
      body: [
        { kind: 'table', caption: 'Regeneron STS 2027 eligibility, from the official rules (read 17 October 2026)', head: ['Rule', 'What the rules say'], rows: [
          ['Age', 'Over 13 with parental or guardian consent, or 18 or older but under 21'],
          ['School year', 'Applicants must be in their final year of their secondary school, and must not have entered any previous STS'],
          ['Type of work', 'Applicants must complete individual research projects; team research is not eligible'],
          ['Team projects', 'Students may not "split" a team project and enter as individuals'],
          ['Working in a lab', 'Research conducted alongside adult researchers in a research institution is permitted, if the student\'s own role is clear'],
          ['The paper', 'The paper should be 20 pages or less, with title page, abstract and bibliography outside the limit'],
          ['Deadline', 'Application and recommendations by November 5, 2026 at 8:00 pm Eastern Time']
        ] },
        { kind: 'table', mt: true, caption: 'Generative AI in an STS project: selected rows from Appendix 4 of the 2027 rules', head: ['Task', 'Allowed?', 'Condition in the rules'], rows: [
          ['Writing application answers, the Research Report or citations', 'No', 'Rule 8: "Students may not use generative Artificial Intelligence (AI) to write Regeneron STS application questions, draft the Research Report or generate citations."'],
          ['Using AI to write initial code for the project', 'Yes', 'Only with explicit citation of which code was AI generated, and a log of the prompts'],
          ['Asking AI which statistical tests or tools fit', 'Yes', 'Requires a log of your prompts; interpreting the data stays with the student'],
          ['Asking AI for a starter bibliography', 'No', 'Never acceptable'],
          ['Using AI to produce conclusions or future steps', 'No', 'Never acceptable'],
          ['Polishing grammar in an abstract the student wrote', 'Yes', 'Minor grammar and syntax changes only, and credited']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for an AI project',
          left: [
            'The rules draw a clear line: "Use of AI tools for student research projects is permitted, and should be disclosed and appropriately cited." A model you train is a research tool. A chatbot that writes your discussion section is not allowed.',
            'Keep a prompt log from the first week. It costs a minute a day and it is the evidence the rules ask for if any code or analysis advice came from an AI.'
          ],
          rightH3: 'The numbers, read honestly',
          right: [
            'Society for Science says around 2,600 students enter each year and 40 become finalists. That is 40 / 2,600, about 1.5 in 100, our arithmetic. Entering is still worth it: the rule book itself is a short course in research ethics.',
            'Top 300 scholars are announced on January 7, 2027 and the top 40 finalists on January 21, 2027. Finals Week runs March 11-17, 2027 in Washington, D.C.'
          ] }
      ]
    },
    {
      id: 'isef', tint: 'tint', eyebrow: 'Regeneron ISEF',
      h2: 'Regeneron ISEF: where a machine learning project is entered',
      lede: 'ISEF is reached through a local, regional or state fair affiliated with Society for Science. The category choice matters, because judges are assigned by subcategory.',
      body: [
        { kind: 'table', caption: 'The ISEF category that fits a typical machine learning project (our view), with definitions from the Society for Science category pages (read 17 October 2026)', head: ['Item', 'What Society for Science says'], rows: [
          ['Category', 'Robotics and Intelligent Machines (ROBO)'],
          ['Definition', '"Studies in which the use of machine intelligence is paramount to reducing the reliance on human intervention."'],
          ['Subcategories', 'Biomechanics, Cognitive Systems, Control Theory, Machine Learning, Robot Kinematics, Other'],
          ['Machine Learning (MAC)', '"Construction and/or study of algorithms that can learn from data."'],
          ['Other homes for AI work (our suggestion)','Software Design, Computational Biology and Bioinformatics, Embedded Systems, Mathematics'],
          ['Category count', 'The following 22 categories are those that will be used at Regeneron ISEF 2026']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Choosing between ROBO and Software Design',
          left: [
            'If the question is about the learning itself (does this model generalize, which features matter, how does accuracy change with data size), the Machine Learning subcategory is the natural home.',
            'If the project is an app that happens to use a trained model, and the contribution is the software, Software Design may fit better. Society for Science asks students to choose the primary subcategory rather than Other.'
          ],
          rightH3: 'Getting there',
          right: [
            'The 2026 finalists were selected from 365 affiliate fairs. Your school or district fair is the first step; ask your science teacher which fair it feeds.',
            'Local and state fairs may use their own categories, and Society for Science says so. Check your affiliated fair\'s list before you print a board.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.societyforscience.org/isef/categories-and-subcategories/" rel="noopener" target="_blank">ISEF categories and subcategories</a> and the <a class="ag-inline-link" href="https://www.societyforscience.org/isef/categories-and-subcategories/all-categories/" rel="noopener" target="_blank">full category definitions</a>, read 17 October 2026. Competition is a good reason to finish a project; for event-style alternatives see <a class="ag-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a> and the <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>.' }
      ]
    },
    {
      id: 'method', tint: 'deep', eyebrow: 'A worked example',
      h2: 'The first experiment every AI research project needs: beat a baseline',
      lede: 'Judges ask one question of every machine learning project before any other: better than what? This script is ours. It compares three versions of one model against a baseline that always guesses the most common answer, using five-fold cross-validation on the handwritten digits dataset that ships with scikit-learn. Results below are from our run of 17 October 2026 (scikit-learn 1.7.2, Python 3.13).',
      body: [
        { kind: 'code', label: 'An honest comparison in 20 lines', lang: 'python', code: BASELINE, note: 'Output on our run: baseline mean 0.101; knn k=1 mean 0.964 (spread 0.953 to 0.986); knn k=5 mean 0.963 (0.947 to 0.981); knn k=25 mean 0.946 (0.922 to 0.967).' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the result like a researcher',
          left: [
            'The digits dataset has 10 classes, so a model that always picks the most common digit should be right about 1 / 10 = 0.1 of the time. The baseline\'s 0.101 confirms the test is set up correctly before anything else is believed.',
            'k=1 and k=5 differ by 0.001 in their means while their spreads overlap almost entirely. A careful write-up says they performed about the same on this data, not that k=1 won.'
          ],
          rightH3: 'Turning it into a question',
          right: [
            'The script is a method, not a finding; any student can run it. Research starts when the student changes something nobody has tested in their setting: their own dataset, a deliberate imbalance, or noise added to see where the model breaks.',
            'scikit-learn describes DummyClassifier as a simple baseline to compare against other classifiers. Using one is the cheapest way to look rigorous, because it is rigorous.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Write the question in one sentence.</b> If it needs two, it is two projects.',
          '<b>Name the baseline before training anything.</b> Most frequent class, a simple rule, or last year\'s method.',
          '<b>Fix the split.</b> Cross-validation or a held-out test set, chosen before you see any result.',
          '<b>Report the spread, not just the mean.</b> Overlapping spreads mean no clear winner.',
          '<b>Change one thing at a time.</b> Two changes at once make the result impossible to explain.',
          '<b>Write down what failed.</b> A dead end that is explained is a result, and a judge reading the report will want to see it.',
          '<b>Log every AI assist.</b> Prompts, dates and which code came from where, as the STS rules require.'
        ] }
      ]
    },
    {
      id: 'calendar', tint: 'tint', eyebrow: 'Timing',
      h2: 'A research calendar for an eleventh grader aiming at senior-year programs',
      lede: 'Our suggested calendar, working back from the STS deadline of November 5, 2026 for this year\'s seniors and from the same point a year later for today\'s juniors. Dates in the third column are the organizers\'; the rest is ours.',
      body: [
        { kind: 'table', caption: 'Grade 11 to grade 12, built around published deadlines (our plan; organizer dates as published)', head: ['When', 'Student work (ours)', 'Published dates to know'], rows: [
          ['Grade 11, fall', 'Learn the tools: Python, a first model, a baseline', 'PRIMES-USA deadline November 2, 2026; RSI 2027 closes December 11, 2026'],
          ['Grade 11, winter', 'Pick a question; find or collect a dataset', 'BU RISE announces 2027 practicum subjects in December'],
          ['Grade 11, spring', 'Pilot experiment; enter a local affiliated fair', 'Affiliated fair dates vary; ISEF 2027 is in May 2027 in Los Angeles'],
          ['Summer before grade 12', 'Main experiments, in a program or at home', 'RSI and RISE run in summer'],
          ['Grade 12, September and October', 'Write the report yourself, under 20 pages', 'STS for that year closes in early November']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'For tenth graders', p: 'Spend this year learning to code and to read a results table. The calendar above starts next fall, and students who arrive with the tools move faster.' },
          { h3: 'For juniors now', p: 'The RSI and PRIMES deadlines above are this school year. Apply if the fit is right, and keep a home project going either way.' },
          { h3: 'For seniors now', p: 'The STS deadline is November 5, 2026. If the research is done, the remaining work is the writing, and the rules say that part is yours alone.' }
        ] }
      ]
    },
    {
      id: 'support', tint: 'deep', eyebrow: 'Getting help the right way',
      h2: 'What a teacher can and cannot do for a student researcher',
      lede: 'Every program here expects the work to be the student\'s. The STS rules require entrants to disclose support of any kind, naming paid support and AI use among the examples. That shapes how we teach.',
      body: [
        { kind: 'two',
          leftH3: 'What we do',
          left: [
            'Teach the skills: Python, scikit-learn, experimental design, statistics, and how to read a paper. A student who understands cross-validation can design their own experiment.',
            'Review the method, not write it. We ask the questions a judge would ask and the student answers them, in their own code and their own words.'
          ],
          rightH3: 'What we never do',
          right: [
            'Choose the question, run the experiments, or draft any part of a report or application. That would break the rules and it would not be the student\'s research.',
            'Promise a result. No teacher can promise that a project places, and we do not. A family should disclose our classes if a program asks about outside support.'
          ] },
        { kind: 'p', mt: true, html: 'If your teenager is still at the project stage, our <a class="ag-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a> page sets out a ladder from a first model to research-grade work. For extracurriculars beyond research, see <a class="ag-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From project to research',
    h2: 'Four stages between a tutorial and a research entry',
    lede: 'Where an AI-curious high schooler might be, and what separates each stage from the next.',
    table: { caption: 'Stages of a student AI researcher (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Follower', 'Completes tutorials; results match the tutorial'],
      ['2. Builder', 'Trains a model on a dataset they chose'],
      ['3. Tester', 'Compares against a baseline and reports a spread'],
      ['4. Researcher', 'Asks a new question and writes up what failed']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the real turning point. Ask your teenager what their model was compared with; a clear answer means they are thinking like a researcher.',
      'A project that does not place can still be excellent research. The write-up is what lasts.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick a question small enough to finish. A tight question with an honest answer beats a grand one that stops halfway.',
      'Save every result, including the bad ones. Your future report needs them.'
    ] }
  },

  catalogue: {
    eyebrow: 'The course catalog',
    h2: 'Nine courses for teenagers heading toward research',
    lede: 'Live online with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 13 to 18', courses: [
        { code: 'ARPH / FND / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language almost every student ML paper is written in.' },
        { code: 'ARPH / FND / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Breaking a question into steps a program can test.' },
        { code: 'ARPH / FND / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Storing and querying a dataset you collected.' }
      ] },
      { num: 'II', h3: 'Models and data', sub: 'Ages 13 to 18', courses: [
        { code: 'ARPH / MOD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'From one neuron to networks, measured honestly.' },
        { code: 'ARPH / MOD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Cleaning, charting and testing a claim.' },
        { code: 'ARPH / MOD / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Fast pilot experiments before writing code.' }
      ] },
      { num: 'III', h3: 'Showing the work', sub: 'Teens', courses: [
        { code: 'ARPH / SHW / 01', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Presenting a technical result under time pressure.' },
        { code: 'ARPH / SHW / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'A clean demo page for a finished model.' },
        { code: 'ARPH / SHW / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens (13+)', blurb: 'Using assistants within the rules, with a prompt log.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes that work around a research timeline',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An evening slot that suits your US time zone.' },
      { time: 'Weekends', l: 'Weekend mornings for longer experiment sessions.' },
      { time: '1-on-1', l: 'Paced to a fair date or a deadline.' }
    ],
    cells: [
      { h3: 'A steady teacher', p: 'One teacher who knows the project from week one.' },
      { h3: 'Method first', p: 'Baselines, splits and spreads before any model.' },
      { h3: 'Student-owned', p: 'The question, code and words stay the student\'s.' },
      { h3: 'Rules on the table', p: 'We read each program\'s AI rules together.' },
      { h3: 'Across the US', p: 'Live video, nothing to drive to.' },
      { h3: 'Two formats', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our teenage students',
  projectsLede: 'Projects that started as practice and grew. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' Google reviews, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Programs and competitions set their own terms; we charge only for teaching. Payment is monthly in US dollars, with no long contract, and you can stop when a month ends.',
    free: ['A free first class', 'Bring your research idea', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to your deadline', 'Times at your convenience']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'AI research programs for teenagers: common questions',
    items: [
      { q: 'What are AI research programs for high school students?', a: 'They are programs where a student\'s own research is mentored or judged. In the US, Regeneron STS and Regeneron ISEF judge finished projects, while RSI and BU RISE place juniors in summer research. Machine learning work fits all of them.' },
      { q: 'When is the Regeneron STS 2027 deadline?', a: 'The 2027 rules say applications and recommendations are due on Thursday, November 5, 2026 at 8:00 pm Eastern Time.' },
      { q: 'Can I use ChatGPT or other generative AI in an STS project?', a: 'Only in limited ways. The 2027 rules forbid generative AI for writing application answers, drafting the Research Report or generating citations. AI tools may be used in the research itself if disclosed and cited, and AI-written code needs a citation and a prompt log.' },
      { q: 'Which ISEF category is a machine learning project?', a: 'Usually Robotics and Intelligent Machines, subcategory Machine Learning, which Society for Science defines as the construction and/or study of algorithms that can learn from data. An app built around a model may fit Software Design instead.' },
      { q: 'Can a team enter Regeneron STS?', a: 'No. The rules say applicants must complete individual research projects, and students may not split a team project and enter as individuals.' },
      { q: 'Who can apply to RSI 2027?', a: 'CEE says high school juniors are eligible and seniors are not. Applications for RSI 2027 are open through 11:59pm on December 11, 2026, and in 2027 CEE is adding a site at Stanford for 50 scholars.' },
      { q: 'Does my teenager need a university lab to do AI research?', a: 'No. Many machine learning questions can be tested on a laptop with public datasets. STS also permits research done alongside adult researchers in an institution, as long as the student\'s own role is clear.' },
      { q: 'Will your classes help my child win?', a: 'We cannot promise any result, and we never write a student\'s research. We teach the methods, coding and statistics so the student can design and defend their own work.' },
      { q: 'Are you connected with Society for Science or CEE?', a: 'No. We are an independent online school. Every rule on this page comes from the organizers\' own published pages, which are linked so you can check them.' },
      { q: 'When are classes for US students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do your classes cost?', a: 'The first class is free. After that, teaching is paid monthly, and the fees section of this page gives the figure in US dollars. Programs and competitions set any costs of their own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US high schoolers serious about computer science.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for American families.' },
      { href: '/summer-research-programs-coding', label: 'Summer research programs', p: 'RSI, PRIMES and SSP in depth.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'A ladder from first model to research.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons', p: 'Build fast, present clearly.' },
      { href: '/how-to-train-machine-learning-models', label: 'Training ML models', p: 'The craft behind a fair experiment.' },
      { href: '/ai-ml-course-for-teens', label: 'AI and ML course for teens', p: 'Our full teen machine learning track.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the question your teenager is curious about, even if it is rough. The first class works out what they need to learn to test it themselves.',
    readFirst: 'Want to see the teaching first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a>, each with its syllabus.',
    note: 'Our teachers are based in India and teach on live video, which is how we reach students in every US state. WhatsApp gets the quickest answer.',
    formNote: 'Free first class; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'AI and research', links: [
        { href: '/ai-ml-course-for-teens', label: 'AI and ML course for teens' },
        { href: '/summer-research-programs-coding', label: 'Summer research programs' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA' },
        { href: '/python-for-16-year-olds', label: 'Python for 16 year olds' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] }
    ],
    bottomRight: 'Better than what? Always name the baseline'
  },

  personalityCss: `
.ag-root.ag-arph .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-arph .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-arph .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-arph .ag-table td { line-height: 1.5; }
.ag-root.ag-arph .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-arph .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Organiser rules read raw on 17 October 2026: Regeneron STS 2027 Rules and Entry Instructions (deadline November 5, 2026, 8:00 pm ET; age and final-year rules; individual projects only; rule 8 on generative AI; Appendix 4 AI usage chart; 20-page paper; January 7 and 21 and March 11-17, 2027 dates); Regeneron ISEF category pages (22 categories in 2026, ROBO definition, Machine Learning subcategory) and home page (2027 in Los Angeles, 365 affiliate fairs); CEE RSI (December 11, 2026, juniors only, Stanford site for 50); BU RISE (40 hours a week, 2027 practicum subjects in December); MIT PRIMES-USA (mathematics and bioinformatics, November 2, 2026).',
    localProject: 'A baseline experiment in scikit-learn (ours, run with 1.7.2): DummyClassifier most_frequent against k-nearest neighbours at k=1, 5 and 25 with 5-fold cross-validation on load_digits (means 0.101, 0.964, 0.963, 0.946), read with the 1 / 10 = 0.1 check, plus a seven-step method checklist and a grade 11 to 12 calendar. Lesson family: experimental design.',
    requiredMentions: ['Students may not use generative Artificial Intelligence', 'Use of AI tools for student research projects is permitted', 'The paper should be 20 pages or less', 'explicit citation of which code was AI generated', 'Construction and/or study of algorithms that can learn from data', 'Studies in which the use of machine intelligence is paramount', 'selected from 365 affiliate fairs', 'adding a site at Stanford for 50 scholars', 'mathematics and bioinformatics', 'baseline mean 0.101', '40 / 2,600, about 1.5 in 100', 'DummyClassifier(strategy="most_frequent")'],
    sources: [
      { claim: 'STS 2027 eligibility, individual research rule, generative AI rules, 20-page limit and dates.', url: 'https://sspcdn.blob.core.windows.net/files/Documents/SEP/STS/2027/Application/Official-Rules.pdf' },
      { claim: 'About 2,600 STS entrants a year and 40 finalists.', url: 'https://www.societyforscience.org/regeneron-sts/' },
      { claim: 'ISEF 2026 uses 22 categories; ROBO definition and Machine Learning subcategory.', url: 'https://www.societyforscience.org/isef/categories-and-subcategories/all-categories/' },
      { claim: 'ISEF 2027 in Los Angeles in May 2027; 2026 finalists from 365 affiliate fairs.', url: 'https://www.societyforscience.org/isef/' },
      { claim: 'RSI 2027 deadline, juniors only, Stanford expansion, five-week internship.', url: 'https://www.cee.org/programs/research-science-institute' },
      { claim: 'BU RISE six weeks, 40 hours a week internship track, 2027 practicum announcement.', url: 'https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/' },
      { claim: 'PRIMES-USA scope and November 2, 2026 deadline.', url: 'https://math.mit.edu/research/highschool/primes/' },
      { claim: 'DummyClassifier as a baseline; cross_val_score; load_digits.', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html' }
    ],
    rejectedClaims: [
      'Award and prize amounts for STS and ISEF: published by Society for Science but not printed (no third-party dollar figures on US pages).',
      'JSHS facts: jshs.org returned HTTP 429 and was not retried, so the program is not described.',
      'Stanford AIMI summer research internship: real and open to high schoolers, but it is health research, which these pages do not cover.',
      'Organisers\' own superlatives (oldest, most prestigious, largest): not repeated; no program is ranked.',
      'That PRIMES-USA offers computer science research: its page currently lists mathematics and bioinformatics only.',
      'Any affiliation with Society for Science, Regeneron, CEE, Boston University or MIT: none, and the page says so.'
    ]
  }
};
