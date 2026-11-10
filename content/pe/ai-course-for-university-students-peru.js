'use strict';
// SHIP: market | AI course for university students in Peru: what a degree leaves out, in English | k-means by hand: the same data, two starts, a local minimum 20 times worse
// AI course for university students, Peru (ag- English subject door, Peru cluster row PE021, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: undergraduates in Peru (engineering, computer science, maths, economics, any degree) searching "ai course for
// university students", "machine learning course online with certificate", "learn AI in English". Spanish pages on the same
// ground (live): curso-de-inteligencia-artificial-en-ingles-peru (gradient descent line), cursos-de-programacion-para-
// universitarios-peru (Fibonacci memo). This page has its own spine and lesson.
// Spine: how many university students Peru has (SUNEDU 2021, trade.gov 2022, never summed); what Peru's 2025 AI regulation
// asks universities to add (DS 115-2025-PCM art. 13.3, art. 19); what an AI course should add to a degree; the k-means lesson
// (scikit-learn user guide on inertia and initialisation); English by age group (EF EPI 2025 Peru, the page's table); tools for
// an 18-year-old and the 17-year-old first-year exception; internet use by education level (INEI 2026).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-course-for-university-students-peru/,
// read 9 November 2026):
//  - SUNEDU press note, 15 September 2021 (sunedu_1_1m.txt): "el país cuenta con 94 universidades licenciadas (46 públicas y
//    48 privadas) que albergan a 1 millón 100 mil de estudiantes universitarios, distribuidos en 5500 programas".
//  - trade.gov, Peru Country Commercial Guide, Education (tradegov_education.txt): "In Peru, there are over eight million
//    school children and 1.2 million university students." (2022 guide; printed with its year, never added to SUNEDU's.)
//  - DS 115-2025-PCM (El Peruano, 9 September 2025; ds115.txt): art. 13.3 "fomenta la incorporación progresiva de contenidos
//    relacionados con la IA en los programas de estudios vinculados a ingeniería de sistemas, ciberseguridad, ingeniería
//    electrónica, ingeniería de software, ciencias de la computación, tecnologías de la información, matemáticas y demás
//    disciplinas afines"; art. 19 "podrá habilitar los recursos de computación en la nube pública" ... "docentes, estudiantes de
//    pregrado y de posgrado"; first final provision: "universidades públicas en un plazo no mayor de dos (2) años".
//  - scikit-learn user guide 2.3.2 K-means (sklearn-kmeans.txt, version 1.9.1 page): "minimizing a criterion known as the
//    inertia or within-cluster sum-of-squares"; "This algorithm requires the number of clusters to be specified."; "Given
//    enough time, K-means will always converge, however this may be to a local minimum. This is highly dependent on the
//    initialization of the centroids."; "the computation is often done several times, with different initializations";
//    "k-means++ initialization scheme"; "Inertia is not a normalized metric".
//  - EF EPI 2025, Peru page (ef_peru.raw): "ageGroup1Score":469 low (18-20 yrs), "ageGroup2Score":540 moderate (21-25),
//    "ageGroup3Score":559 high (26-30), "ageGroup4Score":537 moderate (31-40), "ageGroup5Score":509 moderate (41+);
//    national 519 "moderate".
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el 98,0% de las personas con educación superior universitaria y el
//    97,1% de aquellas con educación superior no universitaria utilizaron este servicio"; "el 97,3% de la población de 19 a
//    24 años utilizó Internet"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - Vendor terms (content/ai-tool-age-audit.json): Claude 18+; ChatGPT 13+ with parent permission under 18.
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own calculations: 121.33 / 6.0 = about 20 times the inertia (labelled ours).
// Code (kmedias.py, python3 -I; the twelve points are invented):
//    start A -> [(1.5, 1.5), (8.5, 1.5), (5.5, 8.5)] inertia 6.0
//    start B -> [(1.33, 1.33), (2.0, 2.0), (7.0, 5.0)] inertia 121.33
//    start C [(1, 1), (6, 9), (9, 1)] -> inertia 6.0
// Lesson family: k-means on invented points; initialisation, local minima, and a farthest-first start.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# Twelve invented points: three tight groups on a plane.',
  'points = [(1, 1), (1, 2), (2, 1), (2, 2),',
  '          (8, 1), (8, 2), (9, 1), (9, 2),',
  '          (5, 8), (5, 9), (6, 8), (6, 9)]',
  '',
  'def dist2(a, b):',
  '    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2',
  '',
  'def kmeans(centroids, rounds=10):',
  '    for _ in range(rounds):',
  '        groups = [[] for _ in centroids]',
  '        for p in points:',
  '            nearest = min(range(len(centroids)), key=lambda i: dist2(p, centroids[i]))',
  '            groups[nearest].append(p)',
  '        new = []',
  '        for g, c in zip(groups, centroids):',
  '            if g:',
  '                new.append((sum(x for x, y in g) / len(g), sum(y for x, y in g) / len(g)))',
  '            else:',
  '                new.append(c)',
  '        if new == centroids:',
  '            break',
  '        centroids = new',
  '    inertia = sum(min(dist2(p, c) for c in centroids) for p in points)',
  '    return centroids, inertia',
  '',
  'for name, start in [("start A", [(1, 1), (8, 1), (5, 8)]),',
  '                    ("start B", [(1, 1), (2, 2), (7, 5)])]:',
  '    cents, inertia = kmeans(start)',
  '    print(name, "->", [(round(x, 2), round(y, 2)) for x, y in cents], "inertia", round(inertia, 2))',
  '',
  'def farthest_first(k):',
  '    chosen = [points[0]]',
  '    while len(chosen) < k:',
  '        chosen.append(max(points, key=lambda p: min(dist2(p, c) for c in chosen)))',
  '    return chosen',
  '',
  'start_c = farthest_first(3)',
  'cents, inertia = kmeans(start_c)',
  'print("start C", start_c, "->", "inertia", round(inertia, 2))'
].join('\n');

const OUT = [
  'start A -> [(1.5, 1.5), (8.5, 1.5), (5.5, 8.5)] inertia 6.0',
  'inertia 121.33',
  'start C [(1, 1), (6, 9), (9, 1)] -> inertia 6.0'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'AI for university students' },
  slug: 'ai-course-for-university-students-peru',
  code: 'aus',
  accent: '#1D6746',
  accentRationale: 'AI course for university students, Peru: a sober bottle green #1D6746, the green of a library lamp and of the reading rooms where degree work happens; clears 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI course for university students in Peru',
  title: 'AI Course for University Students in Peru, Live in English',
  description: 'An AI course for university students in Peru: live online classes in English covering Python, machine learning, generative AI and agents, beside any degree.',
  ogDescription: 'What a Peruvian degree may not yet cover in AI, what the 2025 regulation asks universities to add, a k-means lesson on why the same data can give two answers, and English scores by age group.',
  twitterDescription: 'Live AI and machine learning classes in English for university students in Peru, beside any degree.',
  pageName: 'AI Course for University Students in Peru',
  webPageDescription: 'A guide for undergraduates in Peru choosing an AI course, built from SUNEDU and trade.gov enrolment figures, DS 115-2025-PCM, the scikit-learn user guide, EF EPI 2025 age-group scores and INEI household data for 2026, with an original k-means lesson on initialisation and local minima.',
  courseDescription: 'Live online artificial intelligence courses for university students in Peru, taught in English: Python, the maths of machine learning, supervised and unsupervised models, generative AI and agents, with projects tested on unseen data, in a group of fifteen to twenty or one to one, at hours the student chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI for university students',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#degree', label: 'Beside your degree' },
    { href: '#rules', label: 'What 2025 changed' },
    { href: '#project', label: 'k-means lesson' },
    { href: '#english', label: 'English by age' },
    { href: '#choose', label: 'Which course' }
  ],
  eyebrow: 'Peru &middot; AI for undergraduates &middot; Any degree',
  h1: 'AI course for university students in Peru',
  lede: 'Whatever you study, from systems engineering at a public university to economics, law or medicine at a private one, artificial intelligence is now part of your field, and your syllabus may not have caught up. This page is for university students in Peru who want a serious AI course alongside their degree: what to learn, what Peru\'s 2025 AI regulation asks universities to add, a lesson that shows why an algorithm can give two different answers on the same data, and how English fits in.',
  secondaryCta: { href: '#project', label: 'Work through the k-means lesson' },
  wa: 'Hello Modern Age Coders, I am a university student in Peru and would like to know more about your AI course. Can I book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; all classes live and in English',
  spec: [
    ['For', 'Undergraduates, any degree'],
    ['Starts at', 'Python from zero, or straight to ML'],
    ['Covers', 'ML, generative AI, agents'],
    ['Maths', 'Revised as it is needed'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Try first', 'One free class']
  ],
  capsuleQ: 'What this is',
  capsule: 'Modern Age Coders offers an AI course for university students in Peru: live online classes taught in English, beside any degree. Students learn Python, the maths behind machine learning, supervised and unsupervised models, generative AI and agents, and they test every project on data the model has not seen. Mentors based in India teach a group of fifteen to twenty students or one student alone, at times that fit lectures and exams in Peru. It suits engineering and computer science students who want depth and students of other subjects who want AI they can actually explain.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three AI courses for undergraduates',
    lede: 'The first is the broad foundation; the second goes into classical AI theory; the third is for students who already code and want generative AI and agents.',
    items: [
      { course: 'ai-ml-masterclass-complete-college', code: 'AUS / 01', title: 'AI and ML Masterclass', note: 'Python, statistics and linear algebra as they are needed, then supervised and unsupervised learning, neural networks and an introduction to generative AI. The usual starting point for students of any degree.' },
      { course: 'artificial-intelligence-complete-masterclass-college', code: 'AUS / 02', title: 'Artificial Intelligence: Search, Logic and Agents', note: 'The theory a computer science degree touches only briefly: search, logic, planning, probabilistic reasoning and agents. For students who want to understand AI rather than only use libraries.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'AUS / 03', title: 'Generative AI: LLMs, RAG and Agents', note: 'For students who already write Python. How large language models are used in practice: retrieval, evaluation, tool use and agents, built and tested as real projects.' }
    ]
  },

  sections: [
    {
      id: 'degree',
      eyebrow: 'Beside your degree',
      h2: 'Why take an AI course while studying at a Peruvian university?',
      lede: 'Because AI now touches almost every degree, and most programmes are still adding it. A focused course fills the gap without changing what you study.',
      body: [
        { kind: 'p', html: 'Peru has a large university population. SUNEDU, the national university regulator, reported on 15 September 2021 that the country had 94 licensed universities, 46 public and 48 private, with 1.1 million university students across 5,500 programmes. The United States government\'s trade guide to Peru gave a figure of 1.2 million university students in its 2022 edition. The two counts come from different sources and years, so we print each with its own date rather than combine them.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Engineering and computer science', p: 'You may already code. What a course adds is depth in the machine learning your syllabus covers lightly: unsupervised learning, evaluation, generative AI and agents, with time to build projects properly.' },
          { h3: 'Economics, business and science', p: 'You work with data already. A course teaches you to fit, test and question models yourself, in Python, instead of reading results someone else produced.' },
          { h3: 'Law, health, education and the arts', p: 'You will meet AI in your profession. Understanding how a model learns and fails lets you judge its output, which is a different skill from using a chatbot.' }
        ] },
        { kind: 'p', mt: true, html: 'Online access is rarely the problem. INEI\'s household survey for the second quarter of 2026 found that 98.0% of people in Peru with university education used the internet, and 97.3% of those aged 19 to 24. A laptop is the real requirement: only 36.4% of Peruvian households owned at least one computer in the same quarter, so many students rely on a university lab or a shared machine. Our classes work on any modest laptop; nothing in the first months needs a powerful graphics card.' }
      ]
    },
    {
      id: 'rules',
      tint: 'tint',
      eyebrow: 'What 2025 changed',
      h2: 'What does Peru\'s AI regulation ask universities to teach?',
      lede: 'It asks for AI content to be added progressively to related programmes. DS 115-2025-PCM, the regulation of Law 31814 published in El Peruano on 9 September 2025, names the disciplines.',
      body: [
        { kind: 'table', numCols: [], caption: 'Programmes named in article 13.3 of DS 115-2025-PCM', head: ['Programme area (as named)', 'In English', 'Our nearest course (our choice)'], rows: [
          ['Ingeniería de sistemas', 'Systems engineering', 'AI and ML Masterclass; Search, Logic and Agents'],
          ['Ciberseguridad', 'Cybersecurity', 'Generative AI: LLMs, RAG and Agents'],
          ['Ingeniería electrónica', 'Electronic engineering', 'AI and ML Masterclass'],
          ['Ingeniería de software', 'Software engineering', 'Data Structures and Algorithms; Codex and Claude Code'],
          ['Ciencias de la computación', 'Computer science', 'Search, Logic and Agents; DSA'],
          ['Tecnologías de la información', 'Information technology', 'Data Analysis'],
          ['Matemáticas', 'Mathematics', 'Maths for data science; AI and ML Masterclass']
        ] },
        { kind: 'source', html: 'Source: DS 115-2025-PCM, Reglamento de la Ley 31814, article 13.3, El Peruano, 9 September 2025 (the list also adds "demás disciplinas afines", other related disciplines). The right-hand column is our own mapping to our courses; it is not part of the regulation. Read on 9 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What the text says',
          left: [
            'Article 13.3 says the government\'s digital transformation office "fomenta la incorporación progresiva" of AI content in those programmes, to strengthen graduates\' profiles and respond to digital transformation. "Progressive" is the important word: the change happens over years, programme by programme.',
            'Article 19 adds that the office may open public cloud computing resources for AI work to public bodies, researchers, teachers and undergraduate and postgraduate students. The same regulation gives public universities up to two years to implement several of its obligations.'
          ],
          rightH3: 'What it means for you',
          right: [
            'If you are in one of those programmes now, AI content may arrive in your syllabus before you graduate, or after. A course alongside your degree means you do not have to wait for it.',
            'We quote the regulation as published context, not legal advice. It does not endorse any course, ours included, and we are not connected with any Peruvian university, SUNEDU or the government.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'Why can the same algorithm give two answers? k-means by hand',
      lede: 'This lesson comes early in our unsupervised learning unit. Students write k-means from scratch in plain Python, run it twice on the same twelve points, and get two different results, one of them twenty times worse.',
      body: [
        { kind: 'p', html: 'The scikit-learn user guide describes k-means as an algorithm that groups data by "minimizing a criterion known as the inertia or within-cluster sum-of-squares": the total squared distance from each point to the centre of its group. It repeats two steps, assign each point to its nearest centre, then move each centre to the mean of its points, until nothing moves. Our version below does exactly that in about twenty lines, with no library.' },
        { kind: 'code', label: 'k-means from scratch, three starting positions', lang: 'Python', code: CODE, note: 'Run with Python 3, it prints three lines, shown below. The twelve points are invented by us: three tight groups of four.' },
        { kind: 'code', label: 'Output', lang: 'Output', code: OUT, note: 'Starts A and C find the three obvious groups, with inertia 6.0. Start B stops at inertia 121.33.' },
        { kind: 'two', mt: true,
          leftH3: 'What happened with start B',
          left: [
            'Start B places two centres inside the same bottom-left group and one centre between the other two groups. The two close centres split the bottom-left group between them, and the third centre sits at (7, 5), the average of eight points that belong to two different groups.',
            'Nothing moves after that: every point is already nearest to its current centre, so the algorithm stops. It has converged, correctly by its own rules, to a poor answer. By our own division, its inertia is about twenty times that of the good solution.'
          ],
          rightH3: 'What the documentation says',
          right: [
            'The scikit-learn guide is direct about it: "Given enough time, K-means will always converge, however this may be to a local minimum. This is highly dependent on the initialization of the centroids." Its remedies are to run the computation several times from different starts, and to use the k-means++ initialisation, which spreads the first centres apart.',
            'Start C uses a simpler cousin of that idea, which we call farthest-first: take the first point, then repeatedly add the point farthest from every centre chosen so far. It picks (1, 1), (6, 9) and (9, 1), one per group, and finds the good answer.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Before running, sketch the points and the three starts on paper. Which start do you expect to fail, and where will its centres end up?',
          '<strong>Choose k.</strong> Run k-means with k from 1 to 5 using farthest-first starts and print the inertia each time. Why does inertia always fall as k grows, and why does that make it a poor way to choose k on its own?',
          '<strong>Break farthest-first.</strong> Add one point far away from everything, such as (20, 20). What does farthest-first choose now, and what does that tell you about outliers?',
          '<strong>Compare with the library.</strong> Run scikit-learn\'s <code>KMeans</code> on the same points with <code>n_init=1</code> and different random seeds, then with k-means++. Report how often each finds inertia 6.0.'
        ] },
        { kind: 'p', mt: true, html: 'The point is not k-means itself. It is the habit of distrusting a single run: of asking whether a result depends on a random start, a seed or an ordering, and checking. That habit applies to training a neural network, tuning a language model prompt or reading a published result, and it is the habit we most want university students to leave with.' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'English by age',
      h2: 'How good is English among young adults in Peru?',
      lede: 'It improves sharply through the early twenties. In EF\'s English Proficiency Index 2025, Peruvians aged 18 to 20 score in the "low" band, while those aged 26 to 30 reach "high".',
      body: [
        { kind: 'table', numCols: [1], caption: 'EF EPI 2025, Peru, score by age group', head: ['Age group', 'EF EPI 2025 score', 'EF band'], rows: [
          ['18 to 20', '469', 'Low'],
          ['21 to 25', '540', 'Moderate'],
          ['26 to 30', '559', 'High'],
          ['31 to 40', '537', 'Moderate'],
          ['41 and over', '509', 'Moderate']
        ] },
        { kind: 'source', html: 'Source: EF Education First, EF English Proficiency Index 2025, Peru country page, age-group scores and bands as published; Peru overall scores 519, "Moderate". Read on 9 November 2026. EF tests adults who choose to take its online test, so these are not university statistics.' },
        { kind: 'two', mt: true,
          leftH3: 'Why it matters for AI',
          left: [
            'Most AI research papers, library documentation, model cards and courses are written in English, and so are error messages. The gap between a score of 469 and one of 540 is roughly the gap between needing a translator for a paper and reading it directly.',
            'Taking an AI course in English while at university means the two skills grow together: the vocabulary of the subject (inertia, centroid, overfitting, embedding) becomes ordinary words, used in class every week.'
          ],
          rightH3: 'How our classes handle it',
          right: [
            'Mentors speak clearly and at a steady pace, type key terms and formulas in the chat, and stop for questions. Students present their projects in short spoken summaries and written reports, both in English, with feedback on the explanation as well as the code.',
            'We do not teach in Spanish. If you would rather read about our AI courses in Spanish first, see the <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a> page; the classes it describes are the same live, English-taught classes.'
          ] }
      ]
    },
    {
      id: 'choose',
      eyebrow: 'Which course',
      h2: 'Which AI course should a university student choose?',
      lede: 'Start from what you can already do, not from what sounds most advanced. A student who skips the foundations usually returns to them within a month.',
      body: [
        { kind: 'table', numCols: [], caption: 'Choosing a first AI course (our recommendations)', head: ['If you', 'Start with', 'Then'], rows: [
          ['Have never coded', 'Python Masterclass, or the AI and ML Masterclass from its first unit', 'Data analysis, then generative AI'],
          ['Code a little, any degree', 'AI and ML Masterclass', 'Generative AI, or Search, Logic and Agents'],
          ['Study CS or systems engineering', 'Search, Logic and Agents, beside DSA', 'Generative AI and agents'],
          ['Want maths depth', 'Maths for Data Science', 'AI and ML Masterclass'],
          ['Want to build with AI coding agents', 'Codex and Claude Code for professionals (18+)', 'Generative AI']
        ] },
        { kind: 'source', html: 'Our own recommendations, adjusted for each student after the free first class.' },
        { kind: 'two', mt: true,
          leftH3: 'Age and tools',
          left: [
            'Most undergraduates are 18 or over, so adult tools are open to them under the vendors\' terms; Anthropic\'s Claude, for example, requires users to be at least 18. Some students start university at 16 or 17. For them we follow our teen rules: no Claude, and ChatGPT only with a parent\'s permission, as OpenAI\'s terms require under 18.',
            'In every case, students first solve a problem without AI help, then use tools to check and extend their work, never to replace their understanding.'
          ],
          rightH3: 'What a course will not do',
          right: [
            'It will not replace your degree, award Peruvian credits or guarantee a job. Students who finish a course receive our own certificate of completion. What employers and graduate programmes usually look at is the work: projects you can explain, tested properly, with code they can read.',
            'For a wider view of programming courses for students, our Spanish page <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">cursos de programación para universitarios</a> covers Java, Python and DSA as well as AI.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first model to defensible project: milestones',
    lede: 'Our milestones for university students. They are not academic credits, and they are not tied to any Peruvian university\'s syllabus.',
    table: { numCols: [], caption: 'AI milestones for undergraduates (ours)', head: ['Milestone', 'The student can', 'What they hand in'], rows: [
      ['1. Python fluency', 'Write and debug functions, classes and data handling', 'A small data tool with tests'],
      ['2. Supervised models', 'Train, tune and compare regression and classification', 'A comparison on held-out data'],
      ['3. Unsupervised models', 'Cluster and reduce dimensions; check stability across starts', 'The k-means lesson, extended'],
      ['4. Neural networks', 'Train a small network and read its learning curves', 'A short report on what went wrong'],
      ['5. Generative AI', 'Use a language model with retrieval and evaluation', 'A tested application with an evaluation set'],
      ['6. Defend it', 'Explain a project\'s data, limits and risks aloud', 'A ten-minute talk in English']
    ] },
    left: { h3: 'For students', ps: [
      'A result you got once is an anecdote. Run it again from a different start.',
      'Write down what your model cannot do before someone else finds out.'
    ] },
    right: { h3: 'For parents', ps: [
      'Monthly notes describe projects completed and concepts mastered.',
      'Milestone 6 is where most students discover how much they actually know.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for university students',
    lede: 'All taught live in English, each with a mentor who stays with you through the course.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Any degree', courses: [
        { code: 'AUS / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From zero to advanced, the language every AI course assumes.' },
        { code: 'AUS / BASE / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for Data Science', blurb: 'Statistics, linear algebra and the maths behind ML.' },
        { code: 'AUS / BASE / 03', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL, Python and BI on real datasets.' }
      ] },
      { num: 'II', h3: 'Computer science depth', sub: 'CS and engineering', courses: [
        { code: 'AUS / CS / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The problem solving technical interviews test.' },
        { code: 'AUS / CS / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Python, machine learning and deep learning end to end.' },
        { code: 'AUS / CS / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python Automation and Applied AI', blurb: 'Scripts, scraping and practical AI tools.' }
      ] },
      { num: 'III', h3: 'Building with AI', sub: '18 and over', courses: [
        { code: 'AUS / BUILD / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'AI coding agents, with every change reviewed by you.' },
        { code: 'AUS / BUILD / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe Coding for College', blurb: 'Full stack apps built with AI help and real DSA.' },
        { code: 'AUS / BUILD / 03', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', title: 'AI Agents with Copilot Studio', blurb: 'One to one: agents on Microsoft\'s low-code platform.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do live AI classes fit around lectures?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning in Peru', l: 'Evening in India; a good slot before or between lectures.' },
      { time: 'Evening in Peru', l: 'Early morning in India; possible with the right mentor.' },
      { time: 'One to one', l: 'Moves around exams and lab weeks when you need it to.' }
    ],
    cells: [
      { h3: 'Theory, then code', p: 'Each idea is derived, then implemented from scratch.' },
      { h3: 'Unseen-data tests', p: 'Every result is checked on held-out data.' },
      { h3: 'Exam-season pauses', p: 'Tell us your calendar and we plan around it.' },
      { h3: 'Written reports', p: 'Projects end with a short English write-up.' },
      { h3: 'Same mentor', p: 'One person follows your work from start to finish.' },
      { h3: 'Modest hardware', p: 'Any ordinary laptop is enough to begin.' }
    ]
  },

  projectsH2: 'Work by our older students',
  projectsLede: 'A sample of projects built by students in our longer courses; more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from students and families, quoted exactly.',

  fees: {
    h2: 'What the AI courses cost',
    lede: 'You pay in US dollars with a card. The conversion to soles happens at your bank, on the day of each payment and at the bank\'s rate, so a statement can differ slightly from the previous month\'s.',
    free: ['A free first class', 'A short ML task with a mentor', 'No card needed to book'],
    group: ['Fifteen to twenty students', 'One mentor for the whole course', 'Two live classes weekly', 'Billed monthly; leave whenever you want'],
    one: ['A mentor working only with you', 'Pace and projects shaped by your degree', 'Hours that fit your timetable']
  },

  faq: {
    eyebrow: 'Students ask',
    h2: 'AI course for university students: questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All classes are live online sessions taught in English, with no Spanish-language option. Mentors explain at a measured pace, write key terms and formulas in the chat and adjust to your accent, so a student with intermediate English can follow and improve as the course goes on.' },
      { q: 'Do I need to study computer science to take an AI course?', a: 'No. Students from economics, engineering, business, health, law and the sciences take our courses. If you have never coded, we start with Python; the maths needed for machine learning is taught as it comes up.' },
      { q: 'How much maths do I need?', a: 'Secondary school algebra is enough to begin. Statistics, probability and linear algebra are introduced as each model needs them. Students who want more depth can take our Maths for Data Science course alongside.' },
      { q: 'Does Peru require universities to teach AI?', a: 'DS 115-2025-PCM, published 9 September 2025, promotes the progressive addition of AI content to programmes such as systems engineering, software engineering, computer science and mathematics. It promotes rather than sets a fixed date for every programme; this is context, not legal advice.' },
      { q: 'When are classes held?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru stays on UTC minus 5 all year and India on UTC plus 5:30, so 09:00 in Lima is 19:30 in India.' },
      { q: 'Can I use Claude or ChatGPT in the course?', a: 'If you are 18 or over, yes, within each vendor\'s terms, after you can solve the problem yourself. Students under 18 follow our teen rules: Claude is not used, because Anthropic\'s terms require users to be 18, and ChatGPT only with a parent\'s permission.' },
      { q: 'Will this help me get a job?', a: 'We make no job or salary promises. What the course gives you is skill and evidence: projects you built, tested on unseen data and can explain in English. Those are what you show an employer or a graduate programme.' },
      { q: 'Is there a certificate?', a: 'Yes, our own certificate of completion. It is not a university credit or an official Peruvian qualification, and we are not connected with SUNEDU or any university in Peru.' },
      { q: 'What computer do I need?', a: 'Any ordinary laptop with a stable connection and a headset. The early units run plain Python; later units use free cloud notebooks where heavier computation is needed, so a gaming graphics card is never required.' },
      { q: 'Can I pause during exams?', a: 'Yes. Tell your mentor your university calendar. One-to-one students can move classes around exams; group students can pause a month and rejoin a suitable group.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'More for students in Peru.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every course we offer in Peru.' },
      { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para estudiantes de ingeniería', p: 'Python for engineering students, in Spanish.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The age rules behind every AI tool we use.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Understanding before tools.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our students.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free AI class',
    lede: 'The trial is a working session: you write a few lines of Python, fit a small model and test it, while the mentor gauges your coding, maths and English. You leave with a recommended course and a plan that fits your semester.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open any syllabus from the <a class="ag-inline-link" href="/courses">list of courses</a>.',
    note: 'Live video classes in English, taught by mentors in India. For a fast reply, write to us on WhatsApp in English.',
    formNote: 'Free to book, no card required.'
  },

  footer: {
    cols: [
      { h4: 'AI for students', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools and age' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'IA en inglés' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación universitaria' },
        { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para ingeniería' }
      ] }
    ],
    bottomRight: 'One run is an anecdote'
  },

  personalityCss: `
.ag-root.ag-aus .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-aus .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-aus .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-aus .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-aus .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'SUNEDU press note (15 September 2021); trade.gov Peru Country Commercial Guide, Education (2022); DS 115-2025-PCM arts. 13.3 and 19 and first final provision (El Peruano, 9 September 2025); scikit-learn user guide 2.3.2 K-means; EF EPI 2025 Peru age groups; INEI TIC en los Hogares II Trimestre 2026; vendor terms via our AI tools age audit. All read 9 November 2026.',
    localProject: 'An original k-means lesson in plain Python on twelve invented points in three groups: start A finds the groups (inertia 6.0); start B, with two centres in one group, converges to a local minimum (inertia 121.33, about twenty times worse, our division); a farthest-first start picks (1, 1), (6, 9), (9, 1) and recovers inertia 6.0. Plus four tasks including choosing k and comparing with scikit-learn. Lesson family: k-means initialisation and local minima.',
    requiredMentions: ['inertia 121.33', 'Given enough time, K-means will always converge, however this may be to a local minimum.', 'farthest-first', 'fomenta la incorporación progresiva', '94 licensed universities, 46 public and 48 private', '98.0% of people in Peru with university education', 'Peruvians aged 18 to 20 score in the "low" band', 'the habit of distrusting a single run', 'One run is an anecdote'],
    sources: [
      { claim: '94 licensed universities (46 public, 48 private), 1.1 million students, 5,500 programmes (15 September 2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: '1.2 million university students (2022 guide).', url: 'https://www.trade.gov/country-commercial-guides/peru-education' },
      { claim: 'DS 115-2025-PCM art. 13.3 (AI content in named programmes), art. 19 (cloud for students), public universities within two years.', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'k-means minimises inertia; needs k; may converge to a local minimum depending on initialisation; several runs and k-means++ recommended.', url: 'https://scikit-learn.org/stable/modules/clustering.html' },
      { claim: 'EF EPI 2025 Peru age groups: 469, 540, 559, 537, 509; national 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use 98.0% with university education, 97.3% aged 19 to 24; 36.4% of households own a computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Claude 18+; ChatGPT parental permission under 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'A current national total of university students: none found on an official page; SUNEDU 2021 and trade.gov 2022 are printed separately with their years and never combined.',
      'That DS 115-2025-PCM sets a deadline for AI in every university programme: it promotes progressive incorporation; not said.',
      'Naming any Peruvian university as a source of our students, or any partnership: none.',
      'EF EPI as a measure of university students: EF tests self-selected adults; the page says so.',
      'Job, salary, credit or admission promises: none made.'
    ]
  }
};
