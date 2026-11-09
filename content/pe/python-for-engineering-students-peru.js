// SHIP: market | Python for engineering students in Peru: versions and libraries that last a degree, numerics | root finding: bisection steps predicted by log2, Newton fast from a good start, thrown far from a flat one
'use strict';
// Python for engineering students in Peru (ag- English subject door, Peru cluster row PE009, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: engineering and science students at Peruvian universities (and 5° de secundaria pupils heading there) who typed
// "curso de python uni", "python for engineering students" or "python para ingeniería" (KEYWORDS.md section 1, Python row:
// "curso de python uni (2)"; rows.tsv PE009).
// Spine (different from the Spanish twin python-para-estudiantes-de-ingenieria-peru, which tables UTEC mallas and the UNI
// exam and teaches the trapezoid rule): which Python and which scientific libraries to install so they last a five-year
// degree (SPEC 0 drop schedule), what an engineer actually uses Python for, how it sits beside a Peruvian engineering plan
// (PUCP: four semesters of general sciences then six in the faculty), and an original root-finding lesson.
// Primary-source table: Scientific Python SPEC 0 "Drop Schedule".
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/python-for-engineering-students-peru/,
// fetched 2026-11-09 with curl unless noted; every quote grepped in the raw text):
//  Scientific Python, SPEC 0 Minimum Supported Dependencies (scientific-python.org/specs/spec-0000/, spec0.html): "Support for
//    Python versions be dropped 3 years after their initial release. Support for core package dependencies be dropped 2 years
//    after their initial release."; Drop Schedule: "2026 - Quarter 4: ... matplotlib 3.10.0 released Dec 2024 ... numpy 2.2.0
//    released Dec 2024 python 3.12 released Oct 2023"; "2027 - Quarter 1: ... scipy 1.15.0 released Jan 2025"; "2027 - Quarter
//    2: ... numpy 2.3.0 released Jun 2025 pandas 2.3.0 released Jun 2025 ... scipy 1.16.0 released Jun 2025"; "2027 - Quarter
//    4: ... python 3.13 released Oct 2024"; "2028 - Quarter 4: ... python 3.14 released Oct 2025"; "2029 - Quarter 4: ...
//    python 3.15 released Oct 2026"; "This document builds on NEP 29".
//  SciPy v1.18.0 Manual, scipy.optimize.bisect (numpy-roots.html): "Find root of a function within an interval using
//    bisection."; "f(a) and f(b) cannot have the same signs. Slow but sure."
//  PUCP Facultad de Ciencias e Ingeniería, Ingeniería Informática, Plan de estudios (pucp-inf-plan.html, copied from
//    src-pages/_w2c, fetched 2026-11-09): "El plan de estudios se desarrolla en diez semestres (5 años) divididos en: Cuatro
//    semestres (2 años) en Estudios Generales Ciencias . Seis semestres (3 años) en Facultad."
//  UNI Admisión 2026-2 (FACTS 67, 68; facts-school/src/uni-adm2026-2/): "tres pruebas tomadas en tres días (lunes, miércoles y
//    viernes)"; "2. Segunda prueba: - MATEMÁTICA 3. Tercera prueba: - Física - Química".
//  CPython devguide (src-pages/python-course-peru/devguide-versions.html): "3.12 PEP 693 security 2023-10-02 2028-10";
//    python.org downloads: "Python 3.15.0 Oct. 9, 2026".
//  INEI Boletín TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el 36,4% de los hogares del país disponía de
//    al menos una computadora".
//  AI tool ages, content/ai-tool-age-audit.json: Claude 18+.
//  Course facts (content/courses/data): python-programming-masterclass-zero-to-advanced-college "9-11 months (36-44 weeks)";
//    college-mathematics-complete-masterclass "10-12 months per track (3 tracks, joinable any month)"; ai-ml-masterclass-
//    complete-college "12-14 months (48-56 weeks)".
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: log2(1 / 1e-10) = 33.2, rounded up to 34 bisection steps for an interval of width 1; a Python
// release of October 2026 reaches the SPEC 0 three-year line in October 2029; time conversions.
// Code (scratchpad pe/e2/pes_all.py = pes_v1.py + pes_v2.py, python3 -I 3.14.8): prints "bisection: 2.0945514816 after
// 34 steps", "predicted bisection steps: 34", "newton from 2: first jump to 2.10, 2.0945514815 after 5 steps", "newton
// from 0.82: first jump to 354.81, 2.0945514815 after 19 steps".
// Lesson family: root finding; a bracketing method whose step count you can predict, against a fast method that needs a
// good start; check the derivative before trusting Newton.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def f(x):',
  '    return x**3 - 2*x - 5',
  '',
  'def bisect(a, b, tol=1e-10):',
  '    steps = 0',
  '    while b - a > tol:',
  '        m = (a + b) / 2',
  '        if f(a) * f(m) <= 0:',
  '            b = m',
  '        else:',
  '            a = m',
  '        steps += 1',
  '    return (a + b) / 2, steps',
  '',
  'root, steps = bisect(2, 3)',
  'print(f"bisection: {root:.10f} after {steps} steps")'
].join('\n');

const V2 = [
  'import math',
  '',
  'def df(x):',
  '    return 3*x**2 - 2',
  '',
  'def newton(x, tol=1e-10, limit=50):',
  '    for step in range(1, limit + 1):',
  '        new = x - f(x) / df(x)',
  '        if abs(new - x) < tol:',
  '            return new, step',
  '        x = new',
  '    return x, None',
  '',
  'print("predicted bisection steps:", math.ceil(math.log2(1 / 1e-10)))',
  'for start in (2, 0.82):',
  '    first = start - f(start) / df(start)',
  '    r, n = newton(start)',
  '    print(f"newton from {start}: first jump to {first:.2f}, {r:.10f} after {n} steps")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Python for engineering students' },
  slug: 'python-for-engineering-students-peru',
  code: 'pes',
  accent: '#0C665A',
  accentRationale: 'Python for engineering students, Peru: a mineral green #0C665A, the colour of the copper oxide stains on the rock of Peru\'s southern mining country, for a page about numbers and engineering; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Python for engineering students in Peru',
  title: 'Python for Engineering Students in Peru: Live in English',
  description: 'Python for engineering and science students in Peru, taught live online in English: which versions and libraries to install, numerical methods, and hours.',
  ogDescription: 'Live Python classes in English for engineering students in Peru: which Python and which scientific libraries will last your degree (SPEC 0), what engineers use Python for, and a root-finding lesson comparing bisection with Newton\'s method.',
  twitterDescription: 'Python for engineering students in Peru, live online in English, at hours that fit your semester.',
  pageName: 'Python for Engineering Students in Peru',
  webPageDescription: 'A guide for engineering and science students in Peru learning Python, built from the Scientific Python SPEC 0 drop schedule, the SciPy and CPython documentation, PUCP\'s published plan of studies and UNI\'s admission page, with an original numerical-methods lesson.',
  courseDescription: 'Live online Python and mathematics courses taught in English for university engineering and science students in Peru: Python from zero, numerical methods, data analysis and machine learning, in a group of fifteen to twenty or one to one, at hours the student chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Python for engineering',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#why', label: 'Why Python' },
    { href: '#install', label: 'What to install' },
    { href: '#degree', label: 'Your degree' },
    { href: '#lesson', label: 'Root finding' },
    { href: '#times', label: 'Class hours' }
  ],
  eyebrow: 'Peru &middot; Python for engineers &middot; University and pre-university',
  h1: 'Python for engineering students in Peru',
  lede: 'Many engineering students in Peru meet programming early in their degree, often in a course that moves faster than anyone expected. Python is the language engineers reach for when the maths stops fitting on paper: solving equations, fitting data, simulating a system. This page explains which Python and which libraries to install so they last your whole degree, what engineers actually do with Python, how it fits a Peruvian engineering plan, and a root-finding lesson that shows why numerical methods need judgement, not only code.',
  secondaryCta: { href: '#lesson', label: 'See the root-finding lesson' },
  wa: 'Hello Modern Age Coders, I study engineering in Peru and would like live Python classes in English. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'Engineering and science students'],
    ['Also for', '5th of secundaria, before university'],
    ['Covers', 'Python, numerical methods, data'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Hours in Peru', 'Fitted around your timetable'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The direct answer',
  capsule: 'Modern Age Coders teaches Python to engineering and science students in Peru in live online classes in English. A mentor based in India teaches each class in real time, from the basics to numerical methods, data analysis and machine learning, in a group of fifteen to twenty or one to one. Students choose hours around their university timetable in Peru time. Classes run alongside your degree: we explain and practise, and your university sets and marks every assessment.',

  picks: {
    eyebrow: 'Where engineers start',
    h2: 'Three courses for engineering students',
    lede: 'One for Python itself, one for the mathematics engineering leans on, and one for students heading towards data and AI.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PES / 01', title: 'Python, zero to advanced', note: 'For students of 18 and over, starting from nothing, over nine to eleven months. Functions, data structures, files, objects and testing, with engineering-style problems from the first month.' },
      { course: 'college-mathematics-complete-masterclass', code: 'PES / 02', title: 'University mathematics', note: 'Calculus, linear algebra and related tracks, each ten to twelve months and joinable any month. Students are placed by the course and semester they are taking now.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'PES / 03', title: 'AI and machine learning', note: 'Twelve to fourteen months from Python to deep learning, with the school maths refreshed first. For students who want models they can explain, not only run.' }
    ]
  },

  sections: [
    {
      id: 'why',
      eyebrow: 'Why Python',
      h2: 'Why do engineering students learn Python?',
      lede: 'Because engineering is full of problems that have no tidy formula. Python, with a few free scientific libraries, lets a student solve an equation numerically, fit a curve to lab data, or simulate a system step by step, and then check the result.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Solve', p: 'Roots of equations, systems of linear equations, integrals and differential equations that cannot be done by hand. The lesson further down this page is one of the first methods every engineer meets.' },
          { h3: 'Measure', p: 'Laboratory readings, sensor logs and survey data, cleaned, plotted and summarised. A student who can turn a messy spreadsheet into a clear graph saves hours in every lab report.' },
          { h3: 'Model', p: 'Simulations of circuits, structures, flows or populations, where the student changes one parameter and watches the system respond. This is where programming stops being a separate subject and becomes part of engineering.' }
        ] },
        { kind: 'p', mt: true, html: 'Numerical work also teaches a hard lesson that pure algebra hides: a method can run without error and still give a poor answer. The scientific libraries are honest about this. SciPy\'s own documentation describes its bisection routine as "slow but sure", which is a fair summary of a trade-off every engineer faces, and the subject of our lesson.' },
        { kind: 'p', html: 'For students who prefer reading in Spanish, our page on <a class="ag-inline-link" href="/python-para-estudiantes-de-ingenieria-peru">Python para estudiantes de ingeniería</a> covers the same classes from another angle, and university students in any faculty can see <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">cursos de programación para universitarios</a>. Every class itself is taught in English.' }
      ]
    },
    {
      id: 'install',
      tint: 'tint',
      eyebrow: 'What to install',
      h2: 'Which Python and which libraries should an engineering student install?',
      lede: 'Install a recent Python and recent versions of NumPy, SciPy, pandas and Matplotlib, because the scientific Python projects agree to drop old versions on a schedule. Their shared policy, SPEC 0, recommends dropping support for a Python version three years after it first appeared, and for a core library version after two.',
      body: [
        { kind: 'table', numCols: [], caption: 'When the scientific Python projects recommend dropping support, from the SPEC 0 drop schedule', head: ['Version', 'First released', 'SPEC 0 recommends dropping support in'], rows: [
          ['Python 3.12', 'October 2023', 'Fourth quarter of 2026'],
          ['NumPy 2.2.0', 'December 2024', 'Fourth quarter of 2026'],
          ['Matplotlib 3.10.0', 'December 2024', 'Fourth quarter of 2026'],
          ['SciPy 1.15.0', 'January 2025', 'First quarter of 2027'],
          ['NumPy 2.3.0, pandas 2.3.0, SciPy 1.16.0', 'June 2025', 'Second quarter of 2027'],
          ['Python 3.13', 'October 2024', 'Fourth quarter of 2027'],
          ['Python 3.14', 'October 2025', 'Fourth quarter of 2028'],
          ['Python 3.15', 'October 2026', 'Fourth quarter of 2029']
        ] },
        { kind: 'source', html: 'Source: Scientific Python, SPEC 0 "Minimum Supported Dependencies", policy text and auto-generated Drop Schedule, read on 9 November 2026. SPEC 0 builds on NumPy\'s earlier NEP 29. It is a recommendation that projects endorse; a given library may keep or drop support at a slightly different time.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means over a degree',
          left: [
            'A degree like PUCP\'s lasts five years. If you install Python 3.12 today, the scientific libraries are already being encouraged to leave it behind; Python 3.15, released on 9 October 2026, sits inside the SPEC 0 window until late 2029.',
            'This is not a reason to upgrade in the middle of a lab assignment. It is a reason to start each academic year by checking your versions, and to know how to set up a clean environment when a library refuses to install.'
          ],
          rightH3: 'What we teach on day one',
          right: [
            'Students install a current Python, create a virtual environment for each project, and record the exact versions they used, so a result can be reproduced next semester. These habits save more lab time than any clever trick.',
            'If your university lab runs an older setup, we work in that version and show you what to watch for. The method and the reasoning carry across; only the occasional function name changes.'
          ] }
      ]
    },
    {
      id: 'degree',
      eyebrow: 'Your degree',
      h2: 'How does Python fit into an engineering degree in Peru?',
      lede: 'Alongside it, from the first general-science semesters to the final project. Peruvian engineering degrees put heavy mathematics at the front, and Python is most useful when it is learnt together with that mathematics, not after it.',
      body: [
        { kind: 'two',
          leftH3: 'A five-year plan, front-loaded with science',
          left: [
            'Universities publish their own plans. PUCP\'s plan for Ingeniería Informática, for example, runs for ten semesters (five years): four semesters in Estudios Generales Ciencias, the general science cycle, and six in the faculty itself.',
            'Those first two years are mostly mathematics, physics and chemistry. That is where numerical Python pays off soonest: checking a calculus result, plotting a function to see why a limit behaves strangely, or solving a physics equation that has no neat answer.'
          ],
          rightH3: 'Before university, the exam',
          right: [
            'Admission is decided by each university, in Spanish. UNI\'s ordinary admission exam, for instance, is three papers on three days, and two of the three are mathematics and physics with chemistry, according to UNI\'s own admission page for 2026-2.',
            'We do not prepare for that exam or promise any admission result. What we offer a student in 5th of secundaria is mathematical reasoning and Python in English, which makes the first university semesters less of a shock.'
          ] },
        { kind: 'p', mt: true, html: 'Our classes never replace the university\'s own courses. Your professors set the syllabus, the assignments and the marks. A mentor\'s job is to make sure you understand why a method works, so that the assignment becomes practice rather than a puzzle you copy from a classmate. We are not connected with PUCP, UNI or any other university.' },
        { kind: 'p', html: 'A practical note on equipment: INEI found that 36.4% of Peruvian households had at least one computer in the April to June 2026 quarter. Numerical work is painful on a phone. If you rely on university labs, tell us your lab hours and we will plan classes for times when you have a laptop or desktop in front of you.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How do you find the root of an equation in Python?',
      lede: 'Two ways, and an engineer should know when to use each. This is a lesson we teach to university students in their first months of numerical Python, on the cubic x³ minus 2x minus 5, which has one real root between 2 and 3.',
      body: [
        { kind: 'two',
          leftH3: 'Bisection: slow but sure',
          left: [
            'Start with an interval where the function changes sign, here from 2 to 3. Cut it in half, keep the half where the sign still changes, and repeat until the interval is narrower than the accuracy you need.',
            'Because each step halves the interval, you can predict the number of steps before running anything: to shrink a width of 1 below 10<sup>-10</sup> takes the logarithm base 2 of 10<sup>10</sup>, about 33.2, so 34 steps. Version 1 confirms it.'
          ],
          rightH3: 'Newton: fast, if you start well',
          right: [
            'Newton\'s method uses the slope of the curve to jump towards the root. From a good starting point the number of correct digits roughly doubles each step, so it needs far fewer steps than bisection.',
            'But it divides by the derivative, 3x² minus 2, which is zero near x = 0.8165. Start close to that flat point and the first jump sends you a long way off. Version 2 shows both cases.'
          ] },
        { kind: 'code', label: 'Version 1: bisection, with a step count', lang: 'Python', code: V1, note: 'It prints <code>bisection: 2.0945514816 after 34 steps</code>.' },
        { kind: 'code', label: 'Version 2: Newton\'s method from a good start and from a poor one', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>predicted bisection steps: 34</code>, then <code>newton from 2: first jump to 2.10, 2.0945514815 after 5 steps</code>, then <code>newton from 0.82: first jump to 354.81, 2.0945514815 after 19 steps</code>.' },
        { kind: 'p', mt: true, html: 'The numbers tell the story. Bisection took exactly the 34 steps we predicted on paper. Newton, from a sensible start of 2, needed only 5. From 0.82, almost on the flat point, its <strong>first jump landed at 354.81</strong>, and it took 19 steps to crawl back. On this cubic it recovered; on other functions the same jump can land somewhere the method never returns from, or bounce between two points for ever.' },
        { kind: 'p', html: 'That is why engineering software often combines the two: bracket the root safely, then let a fast method finish the job. Before any of that, a student learns to plot the function and look at it, which is the cheapest check there is. The exercise is ours, written for our classes; the cubic is a standard textbook example, chosen because its one real root is easy to bracket.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> How many bisection steps would a tolerance of 10<sup>-6</sup> need? Work it out with a logarithm, then change <code>tol</code> and check.',
          '<strong>Break it.</strong> Call <code>bisect(3, 4)</code>, where the function does not change sign. Explain in English what the code returns and why it is meaningless.',
          '<strong>Protect it.</strong> Add a check at the start of <code>bisect</code> that raises an error when f(a) and f(b) have the same sign, as SciPy\'s documentation requires.',
          '<strong>Combine.</strong> Write a function that does five bisection steps, then switches to Newton. Compare its step count with both methods alone.'
        ] }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Can I use AI to do my programming assignments?',
      lede: 'You can ask AI to write code, and it may even run. Whether the answer is right, and whether you could defend it in front of your professor, depends on the thinking you did yourself.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Predict on paper', p: 'Like the 34 bisection steps above: before running a method, estimate what it should do. When the computer disagrees, you have found either a bug or a misunderstanding, and both are worth finding.' },
          { h3: 'Check the method', p: 'A chatbot will happily run Newton from a bad start. Knowing when a method fails is engineering judgement, and no tool supplies it for you.' },
          { h3: 'Follow the rules', p: 'Universities set their own rules on AI in coursework, and you should follow them. Claude is for users aged 18 and over; adult students may use such tools to question their work, never to hand in code they cannot explain.' }
        ] },
        { kind: 'p', mt: true, html: 'We hold every student to the same standard, whether they study in Lima, Arequipa or Huancayo: understand first, then automate. A student who can explain why bisection is slow and why Newton can fail will use any tool, AI included, far better than one who only knows which button to press.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class hours',
      h2: 'When can a university student in Peru take live classes?',
      lede: 'Whenever your timetable leaves a gap. Peru is on UTC minus 5 all year with no daylight saving, and India is on UTC plus 5:30, so India is ten and a half hours ahead every day of the year. The rows convert a few hours and do not promise a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours and India hours for a university week (conversions only)', head: ['Peru time', 'India time', 'When a student might use it'], rows: [
          ['07:30', '18:00', 'Before a morning of lectures'],
          ['12:30', '23:00', 'In a free block at midday'],
          ['16:00', '02:30, next day', 'Between afternoon labs and the evening'],
          ['21:30', '08:00, next day', 'Late, after the university day']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, America/Lima and Asia/Kolkata. Neither zone observes daylight saving, so these conversions, which are ours, hold in every semester and every holiday.' },
        { kind: 'p', mt: true, html: 'University timetables change each semester, so we expect changes. One-to-one students can move their class hour between semesters, or around exam weeks, by telling their mentor in advance. Group students can switch to a batch at a different hour when one is available.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels',
    h2: 'Five levels of Python for engineers',
    lede: 'These levels are ours. They place a student in the right group and show what comes next, from first scripts to models that inform real decisions.',
    table: { numCols: [], caption: 'Python for engineering students, our levels', head: ['Level', 'The student can', 'Engineering example'], rows: [
      ['1. Compute', 'Write functions, loops and tests', 'A unit converter that checks itself'],
      ['2. Iterate', 'Implement bisection and Newton, and count steps', 'The root-finding lesson on this page'],
      ['3. Vectorise', 'Use arrays instead of loops for speed', 'Process a thousand lab readings at once'],
      ['4. Fit and plot', 'Fit curves to data and judge the fit', 'A calibration curve for a sensor'],
      ['5. Simulate', 'Step a model through time and test it', 'A cooling tank, a circuit or a population']
    ] },
    left: { h3: 'For students', ps: [
      'At level 2 you stop trusting a number because the computer printed it. That habit is worth more than any library.',
      'Keep a short log of each method: what it assumes, when it fails, how fast it converges.'
    ] },
    right: { h3: 'For parents of first-year students', ps: [
      'The first semesters of engineering are demanding. Regular practice with a mentor turns a weekly struggle into steady progress.',
      'You can ask for short progress notes; we describe what was understood, not hours logged.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for engineering and science students',
    lede: 'Each is taught live in English by a mentor who stays with the student, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Programming foundations', sub: 'First and second year', courses: [
        { code: 'PES / BASE / 01', slug: 'c-programming-course-for-college-beginners', title: 'C programming', blurb: 'Pointers, memory and structs, often the first language in an engineering plan.' },
        { code: 'PES / BASE / 02', slug: 'cpp-programming-complete-masterclass-college', title: 'C++, complete', blurb: 'From fundamentals to modern C++ and systems work.' },
        { code: 'PES / BASE / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control for lab code and team projects.' }
      ] },
      { num: 'II', h3: 'Data and numbers', sub: 'Any year', courses: [
        { code: 'PES / DATA / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics, machine learning and deep learning.' },
        { code: 'PES / DATA / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data analytics', blurb: 'The maths underneath data work, built for university students.' },
        { code: 'PES / DATA / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL and database design for data that outgrows a spreadsheet.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Later years', courses: [
        { code: 'PES / NEXT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The theory behind efficient programs, practised in code.' },
        { code: 'PES / NEXT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and AI', blurb: 'Scripts and applied AI that remove repetitive work.' },
        { code: 'PES / NEXT / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'For students who also want the Python Institute exams.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit a university semester in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'A Peruvian morning is evening in India, a comfortable hour for a class.' },
      { time: 'Late', l: 'After labs, Peru evenings fall in the Indian early morning; tell us what you need.' },
      { time: '1-on-1', l: 'Your own hours, which can change when your semester timetable does.' }
    ],
    cells: [
      { h3: 'Problems, not slides', p: 'Each class centres on code the student writes and tests.' },
      { h3: 'Maths with the code', p: 'Every method is explained on paper as well as in Python.' },
      { h3: 'Clear English', p: 'Technical terms said slowly and typed in the chat.' },
      { h3: 'One mentor', p: 'The same teacher through the course, who knows your gaps.' },
      { h3: 'Exam weeks respected', p: 'Plan lighter weeks around your university assessments.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one student and a mentor.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Students who carry on past the first course build real software and models. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews from our students and their families, copied without edits.',

  fees: {
    h2: 'Fees for engineering students in Peru',
    lede: 'Fees are in US dollars and paid by card each month. The conversion into soles is made by your bank on the day of each charge, which is why your statement may show a slightly different amount from month to month.',
    free: ['A free first class', 'Set up Python and run a first method', 'No card required'],
    group: ['Fifteen to twenty students at a similar stage', 'A mentor who stays with your group', 'Two live classes a week', 'Monthly; pause or stop when you need'],
    one: ['One student and one mentor', 'Methods chosen around your courses', 'Hours that move with your semester']
  },

  faq: {
    eyebrow: 'Students in Peru ask',
    h2: 'Python for engineering students in Peru: questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors speak clearly, adjust to your pace and accent, and write key terms in the chat. Python, its libraries and their documentation are all in English, so learning in English removes a translation step you would meet anyway.' },
      { q: 'I have never programmed. Is that a problem?', a: 'No. The zero-to-advanced Python course starts from the first line of code. Engineering students usually move quickly once the basics are clear, because the mathematics is already familiar.' },
      { q: 'Which Python version should I install for my degree?', a: 'A current one. Python 3.15 was released on 9 October 2026, and the scientific Python projects\' SPEC 0 schedule recommends dropping support for Python 3.12 in the last quarter of 2026. If your university lab uses an older version, we work with it.' },
      { q: 'Will this help with my university programming course?', a: 'It should make it much easier to understand, because we explain the reasoning behind each method and practise it with you. Your university sets the syllabus and the marks; we do not do assignments for students or promise grades.' },
      { q: 'Do you teach numerical methods?', a: 'Yes, as part of our Python and mathematics courses: root finding, interpolation, numerical integration, linear systems and simple differential equations, each explained on paper and then in code.' },
      { q: 'When are the classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 07:30 in Peru is 18:00 in India.' },
      { q: 'I am in 5th of secundaria. Can I start before university?', a: 'Yes. Students under 18 join our teenage Python course; from 18 the university courses. We do not prepare for Spanish-language admission exams or promise admission, but Python and mathematical reasoning in English make the first semesters easier.' },
      { q: 'Are you connected with UNI, PUCP or another university?', a: 'No. We are an independent online school with mentors based in India, and we are not connected with any Peruvian university. Students who finish a course receive our own certificate of completion, not a university credit.' },
      { q: 'Can I use AI tools in class?', a: 'Adult students may use them to question their own work, within their university\'s rules. Claude is for users of 18 and over. We expect every student to explain each line of code they submit, whoever or whatever suggested it.' },
      { q: 'How are fees paid from Peru?', a: 'Monthly, by card, in US dollars. Your bank converts each charge into soles, so the amount you see can change slightly between months. The first class is free and asks for no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for engineering and science students.',
    items: [
      { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para estudiantes de ingeniería', p: 'The same classes, described in Spanish.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'From arrays to analysis.' },
      { href: '/python-for-machine-learning', label: 'Python for machine learning', p: 'The road from numerics to models.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms', p: 'Efficiency, explained and practised.' },
      { href: '/c-plus-plus-classes-for-college-students', label: 'C++ for university students', p: 'When speed matters more than ease.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free class as an engineering student',
    lede: 'In the free class you set up Python, run a first numerical method and tell the mentor which courses you are taking. Afterwards we suggest a course, a group or one-to-one classes, and hours that fit your semester in Peru.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live class, and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'All classes are live video lessons in English, taught from India. For a quick reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Python and numbers', links: [
        { href: '/python-from-the-ground-up', label: 'Python from the ground up' },
        { href: '/python-for-data-science', label: 'Python for data science' },
        { href: '/python-for-machine-learning', label: 'Machine learning' },
        { href: '/c-plus-plus-dsa-course', label: 'C++ and DSA' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python para ingeniería' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Para universitarios' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Bracket first, then be fast'
  },

  personalityCss: `
.ag-root.ag-pes .ag-hero h1 { max-width: 21ch; letter-spacing: -0.01em; }
.ag-root.ag-pes .ag-capsule { border-left-width: 4px; }
.ag-root.ag-pes .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pes .ag-table td:last-child { font-weight: 600; }
.ag-root.ag-pes .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Scientific Python SPEC 0 (Minimum Supported Dependencies, drop schedule); SciPy v1.18.0 manual (scipy.optimize.bisect); CPython developer guide and python.org downloads; PUCP Facultad de Ciencias e Ingeniería, Ingeniería Informática plan de estudios; UNI Admisión 2026-2; INEI Boletín TIC II trimestre 2026; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original numerical-methods lesson for engineering students in Peru on x^3 - 2x - 5 = 0: bisection on [2, 3] takes exactly the predicted 34 steps (log2 of 10^10 rounded up) to reach 2.0945514816; Newton from 2 needs 5 steps, but from 0.82, near the flat point of 3x^2 - 2, its first jump lands at 354.81 and it needs 19 steps. Lesson family: root finding, predictable bracketing against fast but fragile Newton.',
    requiredMentions: ['bisection: 2.0945514816 after 34 steps', 'predicted bisection steps: 34', 'first jump to 354.81', 'first jump landed at 354.81', 'slow but sure', 'Bracket first, then be fast', 'four semesters in Estudios Generales Ciencias', 'three years after it first appeared'],
    sources: [
      { claim: 'SPEC 0: drop Python versions 3 years after release and core packages after 2; drop schedule for Python 3.12 to 3.15, NumPy, SciPy, pandas, Matplotlib.', url: 'https://scientific-python.org/specs/spec-0000/' },
      { claim: 'scipy.optimize.bisect: "Slow but sure"; f(a) and f(b) cannot have the same signs.', url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.bisect.html' },
      { claim: 'PUCP Ingeniería Informática: ten semesters, four in Estudios Generales Ciencias, six in the faculty.', url: 'https://facultad-ciencias-ingenieria.pucp.edu.pe/carreras/ingenieria-informatica/plan-de-estudios/' },
      { claim: 'UNI ordinary admission: three papers on three days; maths, and physics with chemistry.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'Python 3.15.0 released 9 October 2026.', url: 'https://www.python.org/downloads/' },
      { claim: '36.4% of Peruvian households had a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Which programming language each Peruvian engineering faculty teaches first: not verified across universities; only PUCP\'s semester structure is used.',
      'Engineering salary or job figures for Peru: no primary source; none given.',
      'Admission preparation or results for UNI or any university: not offered; the page says so.',
      'Any connection with PUCP, UNI, SciPy or the Scientific Python project: none.',
      'Spanish-language teaching: not offered; the page says so.'
    ]
  }
};
