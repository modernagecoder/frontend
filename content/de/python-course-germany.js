'use strict';
// Python course in Germany (ag- English door, Germany cluster P2 row DE028), written 2026-11-03.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: a Python course for anyone in Germany, child to retiree. Which Python to learn on in late 2026 (the official
// support table), what a live course covers at each age, where Python meets German school and contests, and one
// original project that reads the official version table and trips over a classic Python trap.
// Sources (read raw):
//  - Python Developer's Guide, "Status of Python versions", devguide.python.org/versions/ (src-pages/python-course-germany/
//    devguide-versions.html/.txt, fetched 3 Nov 2026). "Dates shown in italic are scheduled and can be adjusted."
//    Rows: "main PEP 826 feature 2027-10-06 2032-10"; "3.15 PEP 790 bugfix 2026-10-09 2031-10"; "3.14 PEP 745 bugfix
//    2025-10-07 2030-10"; "3.13 PEP 719 security 2024-10-07 2029-10"; "3.12 PEP 693 security 2023-10-02 2028-10";
//    "3.11 PEP 664 security 2022-10-24 2027-10"; "3.10 PEP 619 end-of-life 2021-10-04 2026-10-01"; "3.9 PEP 596
//    end-of-life 2020-10-05 2025-10-31"; "2.7 PEP 373 end-of-life 2010-07-03 2020-01-01". All 19 rows saved by our
//    regex as python_versions.csv (main written as 3.16).
//  - PEP 745, Python 3.14 release schedule, peps.python.org/pep-0745 (pep745.html), fetched 3 Nov 2026.
//  - FACTS.md (fetched 2 Nov 2026): GI Informatik-Monitor 2026/27, about 15 percent take Informatik in the Q-Phase (97);
//    BWINF IOI pre-selection "Programmiert wird in C++" (155); BWKI requires machine-learning methods (208 to 213, via the
//    live AI module); Jugendwettbewerb levels Bronze/Silber/Gold (142).
//  - Blocked: www.gs1.org returned HTTP 403 on 3 Nov 2026 (two pages); not retried, check-digit idea dropped.
//    bundesbank.de IBAN pages: guessed URLs redirected elsewhere; not used.
//  - Time: EinhZeitG; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own code (scratchpad de/w/G4/pco/v1.py, v2.py, both.py, python3 -I): Version 1 prints "Released versions: 18",
// "Newest released: 3.9", "Oldest three: ['2.6', '2.7', '3.0']  Last three: ['3.7', '3.8', '3.9']". Version 2 prints
// "Newest released: 3.15", "Last three: ['3.13', '3.14', '3.15']", "Supported on 2026-11-03: ['3.11', '3.12', '3.13',
// '3.14', '3.15']".
// Lesson family: version numbers are not decimals or text: compare them as tuples of integers (sort keys).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("python_versions.csv", encoding="utf-8") as f:',
  '    versions = list(csv.DictReader(f))',
  '',
  'today = "2026-11-03"',
  'released = [v["branch"] for v in versions if v["first_release"] <= today]',
  'print("Released versions:", len(released))',
  'print("Newest released:", max(released))',
  'print("Oldest three:", sorted(released)[:3], " Last three:", sorted(released)[-3:])'
].join('\n');

const V2 = [
  'def as_numbers(branch):',
  '    return tuple(int(part) for part in branch.split("."))   # "3.15" -> (3, 15)',
  '',
  'print("Newest released:", max(released, key=as_numbers))',
  'print("Last three:", sorted(released, key=as_numbers)[-3:])',
  '',
  'supported = [v["branch"] for v in versions',
  '             if v["first_release"] <= today and v["end_of_life"] > today]',
  'print("Supported on", today + ":", sorted(supported, key=as_numbers))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Python course' },
  slug: 'python-course-germany',
  code: 'pco',
  accent: '#185D6D',
  accentRationale: 'A Python course for Germany: a deep blue-teal #185D6D, nodding to the blue of the Python logo without copying it, and distinct from the Informatik teal and the career-change petrol; contrast on the paper #FBF8F2 above 6:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Python course in Germany',
  title: 'Python Course in Germany: Live Online Classes in English',
  description: 'A live online Python course in English for learners in Germany of any age, from first lines to data, web and AI, on a currently supported Python 3 version.',
  ogDescription: 'Python taught live in English for children, teenagers and adults in Germany: which Python version to learn on in late 2026, what each age group builds, and a first project that reads the official version table.',
  twitterDescription: 'Live Python classes in English for every age in Germany, with one mentor and real projects.',
  pageName: 'Python Course in Germany',
  webPageDescription: 'A guide to learning Python from Germany at any age: the official Python support table as of November 2026, what a live course covers for children, teenagers and adults, where Python meets German school Informatik and competitions, and an original project on sorting version numbers correctly.',
  courseDescription: 'A live online Python course in English for learners in Germany of any age: from first programs to files, objects, testing, data, web and AI, on a supported Python 3 release, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python course',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#versions', label: 'Versions' },
    { href: '#project', label: 'Project' },
    { href: '#ages', label: 'By age' },
    { href: '#school', label: 'School' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Python &middot; Every age',
  h1: 'Python course in Germany',
  lede: 'Python is the language we teach first to almost every learner, whether they are nine or sixty-nine, because it stays useful long after the first lesson. This page answers the practical questions first: which version of Python to learn on now that 3.15 is out, what a course looks like for each age, and how Python relates to Informatik at German schools and to the national contests. Its project is a ten-line program that reads the official Python version table and, on its first try, gets the newest version wrong.',
  secondaryCta: { href: '#versions', label: 'Which Python to install' },
  wa: 'Hello Modern Age Coders, I am in Germany and would like to book a free first Python class, taught in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; Python taught from the first line',
  spec: [
    ['Who', 'Children, teenagers and adults'],
    ['Python version', 'A supported Python 3 release'],
    ['Covers', 'Basics, files, objects, tests, projects'],
    ['Then', 'Data, web, AI or Oberstufe Informatik'],
    ['German times', 'Afternoons, evenings, weekends'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'The Modern Age Coders Python course for Germany is taught live online in English, for any age from about eight upwards: first programs, then files, objects and testing, then a direction such as data, web, AI or school Informatik. Learners code on a currently supported Python 3 release. One regular mentor sets the pace and matches the learner\'s accent, whether the class has fifteen to twenty learners or just one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three Python courses for learners in Germany',
    lede: 'Teenagers, adults, and anyone who wants to test their Python against an internationally used exam.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PCO / 01', title: 'Python for Teens', note: 'Teenagers from 13: variables to classes, small games to data files, at a speed that leaves room for school.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PCO / 02', title: 'Python, Zero to Advanced', note: 'For adults. The full language in depth: functions, modules, files, objects, testing and a project of your choosing.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PCO / 03', title: 'PCEP and PCAP Preparation', note: 'For learners who want to sit the Python Institute exams. We prepare; the exams themselves are run by the Python Institute.' }
    ]
  },

  sections: [
    {
      id: 'versions',
      eyebrow: 'Which Python',
      h2: 'Which Python version should I learn on in 2026?',
      lede: 'One that the Python core team still supports. The Python Developer\'s Guide publishes a table of every version, its status and its end of life, and on 3 November 2026 it listed five released versions as still supported.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python versions and their support status, from the official Developer\'s Guide', head: ['Version', 'Status', 'First release', 'End of life'], rows: [
          ['3.16', 'In development', '6 October 2027 (scheduled)', 'October 2032'],
          ['3.15', 'Bug fixes', '9 October 2026', 'October 2031'],
          ['3.14', 'Bug fixes', '7 October 2025', 'October 2030'],
          ['3.13', 'Security fixes only', '7 October 2024', 'October 2029'],
          ['3.12', 'Security fixes only', '2 October 2023', 'October 2028'],
          ['3.11', 'Security fixes only', '24 October 2022', 'October 2027'],
          ['3.10', 'End of life', '4 October 2021', '1 October 2026'],
          ['2.7', 'End of life', '3 July 2010', '1 January 2020']
        ] },
        { kind: 'source', html: 'Source: Python Developer\'s Guide, Status of Python versions, devguide.python.org/versions, read on 3 November 2026. The guide notes that scheduled dates can be adjusted. Rows from 3.9 back to 2.6, all at end of life, are left out here and kept in our data file.' },
        { kind: 'two', mt: true,
          leftH3: 'What we use in class',
          left: [
            'A beginner should install a version that still receives bug fixes, which in November 2026 means 3.14 or 3.15. Everything taught in a beginner course works the same on either.',
            'Python 3.10 reached its end of life on 1 October 2026, so a school or office computer that still runs it should be updated. Python 2 ended on 1 January 2020 and is never used in our classes.'
          ],
          rightH3: 'Why the version matters less than people think',
          right: [
            'The ideas a learner needs, variables, loops, functions, lists, dictionaries, files and classes, have not changed in years. New versions mostly add speed, clearer error messages and features for experienced programmers.',
            'What matters more is learning to read the official documentation for the version you have, a habit our mentors build from the first month.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A first real project',
      h2: 'Why does Python say 3.9 is newer than 3.15?',
      lede: 'Because it was asked to compare text. We saved the 19 rows of the official table as python_versions.csv and asked a ten-line program for the newest version released by 3 November 2026. This is a favourite early project in our course, because the bug is so easy to make and so hard to see.',
      body: [
        { kind: 'code', label: 'Version 1: compare the version numbers as they are stored', lang: 'Python', code: V1, note: 'It prints <code>Released versions: 18</code>, <code>Newest released: 3.9</code> and <code>Oldest three: [\'2.6\', \'2.7\', \'3.0\']  Last three: [\'3.7\', \'3.8\', \'3.9\']</code>.' },
        { kind: 'p', mt: true, html: 'Eighteen versions had been released by that date, which is right, since 3.16 is still to come. But the program names 3.9 as the newest. Read from a file, each version is a piece of text, and text is compared character by character, as in a dictionary: "3.9" comes after "3.15" because the character 9 comes after the character 1. Turning the versions into decimal numbers does not help either: as a decimal, 3.9 is larger than 3.15 as well.' },
        { kind: 'code', label: 'Version 2: compare them as pairs of whole numbers', lang: 'Python', code: V2, note: 'Add it below Version 1 and run the file again. The new lines are <code>Newest released: 3.15</code>, <code>Last three: [\'3.13\', \'3.14\', \'3.15\']</code> and <code>Supported on 2026-11-03: [\'3.11\', \'3.12\', \'3.13\', \'3.14\', \'3.15\']</code>.' },
        { kind: 'p', mt: true, html: 'The function <code>as_numbers</code> turns "3.15" into the pair (3, 15), and Python compares pairs the way people compare versions: first number first, then the second. Passing it as <code>key</code> to <code>max</code> and <code>sorted</code> fixes both lines without changing the data. The last line uses another quiet trick: the dates are written year first, so comparing them as text happens to give the right answer, and the five supported versions match the official table above.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict it.</strong> Which version do you expect Version 1 to call the newest? Decide before you run it.',
          '<strong>Explain it.</strong> Print <code>"3.9" &gt; "3.15"</code> and <code>3.9 &gt; 3.15</code>. Why are both True?',
          '<strong>Stretch it.</strong> Add a row for a version 3.15.1 and make <code>as_numbers</code> handle three parts.',
          '<strong>Going further.</strong> Print, for each supported version, how many whole months of support it has left after 3 November 2026.'
        ] },
        { kind: 'source', html: 'Data: Python Developer\'s Guide, Status of Python versions, 19 rows, saved on 3 November 2026. Program, printed results (Python 3.14.8) and tasks: ours.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Python at every age',
      h2: 'What does a Python course look like for children, teenagers and adults?',
      lede: 'The language is the same; the first projects, the pace and the reasons are not. Our guide below is what we have found works with each age group since 2020.',
      body: [
        { kind: 'table', numCols: [], caption: 'A Python course by age group (our guide)', head: ['Learner', 'First projects', 'Where it leads'], rows: [
          ['Children, about 8 to 12', 'Turtle drawings, number guessing, a quiz game', 'Games, simple AI ideas, maths through code'],
          ['Teenagers, 13 to 18', 'Text games, data from a file, small simulations', 'Oberstufe Informatik, web, AI, contests'],
          ['Students and young adults', 'Scripts for study tasks, data cleaning', 'Data science, web back ends, algorithms'],
          ['Working adults', 'Automating a spreadsheet or report', 'Automation, data analysis, a career move'],
          ['Retired learners', 'Projects on a personal interest, at an easy pace', 'Whatever keeps them curious']
        ] },
        { kind: 'source', html: 'Our own guide. Children under about eight usually start with Scratch before Python; the free first class is where a mentor checks which start suits.' },
        { kind: 'p', mt: true, html: 'Under-18 learners never use AI tools that their providers restrict to adults. Our Python courses for children and teenagers need no AI account at all; the AI they meet is the AI they build themselves in plain Python. Adults who want to work with AI coding agents can do so in a separate course for those of 18 and over.' }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'Python and German school',
      h2: 'Is Python taught in German schools?',
      lede: 'Informatik is taught very unevenly from Land to Land, and the national monitor of Informatik teaching reports hours and phases rather than languages. So we make no claim about which Länder use Python. What we can say is where Python helps a pupil in Germany.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik at school',
          left: [
            'The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik finds that only about 15 percent of pupils across Germany take Informatik in the Qualifikationsphase of the Oberstufe. In Sachsen and Mecklenburg-Vorpommern it is about half.',
            'A teenager who has learned Python with us arrives in school Informatik already able to write and test programs, whichever language the course uses. Our Informatik Oberstufe course covers both Java and Python for that reason.'
          ],
          rightH3: 'Contests and projects',
          right: [
            'The Bundeswettbewerb Künstliche Intelligenz asks for projects that use machine-learning methods, and Python is the usual language for those. The IOI selection run by BWINF programs in C++, according to BWINF, so pupils aiming that high add C++ after Python.',
            'We are not connected with BWINF, the BWKI or the Gesellschaft für Informatik.'
          ] },
        { kind: 'p', mt: true, html: 'For a family deciding where to start, the honest answer is that Python is a sound first language almost whatever comes next: school Informatik, an apprenticeship or degree, a job that needs data or automation, or simply the pleasure of making a computer do something new.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are live Python classes in German time?',
      lede: 'After school, after work, and at weekends. Mentors teach from India, which is ahead of Germany in every season.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Python class times in Germany and in India', head: ['German clock', 'Indian clock in winter', 'Indian clock from 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German time one hour ahead of UTC in winter and two hours ahead in summer. Winter time began on 25 October 2026 and runs until 28 March 2027. India uses UTC+5:30 the whole year, putting it 4 hours 30 minutes ahead of Germany in winter and 3 hours 30 minutes ahead in summer.' },
        { kind: 'p', mt: true, html: 'The rows are examples rather than set classes. Pick any time for the free trial lesson by the German clock; after that, the regular schedule is planned with the mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Python learner can do at each stage',
    lede: 'Our own markers for Python learners of any age, used to place a learner and to show progress.',
    table: { caption: 'Python milestones (ours)', head: ['Step', 'Usually from', 'What the learner can do'], rows: [
      ['1. First programs', 'Month 1', 'Print, ask, calculate and decide with if'],
      ['2. Loops and lists', 'Months 2 to 3', 'Repeat work and keep many values in one list'],
      ['3. Functions and files', 'Months 3 to 5', 'Write functions, read a CSV file, sort with a key like the version project'],
      ['4. Objects and tests', 'Months 6 to 8', 'Design classes and test them automatically'],
      ['5. A direction', 'Months 9 and up', 'Go deeper into data, web, AI or school Informatik']
    ] },
    left: { h3: 'For learners', ps: [
      'When a comparison gives a strange answer, ask what type the two things really are.',
      'Read the error message to the end. The useful part is often the last line.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask to see the program run, then ask what happens if the input changes.',
      'A small program your child can explain is worth more than a large one copied.'
    ] }
  },

  catalogue: {
    eyebrow: 'More Python',
    h2: 'Nine more Python courses for learners in Germany',
    lede: 'Each is a live course in English; the learner chooses between a small class and private lessons.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 8 to 12', courses: [
        { code: 'PCO / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle art, games and first AI ideas.' },
        { code: 'PCO / KIDS / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths, explored in Python.' },
        { code: 'PCO / KIDS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Thinking like a programmer, step by step.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PCO / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets and first models.' },
        { code: 'PCO / TEEN / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Oberstufe', blurb: 'Java and Python for the Abitur years.' },
        { code: 'PCO / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures and algorithms in Python.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'PCO / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Make routine computer work run by itself.' },
        { code: 'PCO / ADULT / 02', slug: 'python-web-development-django-flask-course', title: 'Web with Django and Flask', blurb: 'Web applications written in Python.' },
        { code: 'PCO / ADULT / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and machine learning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How the live Python course works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'From about 15:00 German time, for school-age learners.' },
      { time: 'Evening', l: 'For adults, up to about 18:00 German time.' },
      { time: 'One to one', l: 'Times set with the mentor, weekends too.' }
    ],
    cells: [
      { h3: 'Real Python', p: 'A supported version, installed on the learner\'s own computer.' },
      { h3: 'Read the docs', p: 'Learners look things up, not just copy.' },
      { h3: 'English, gently', p: 'Clear explanations at the learner\'s speed.' },
      { h3: 'One mentor', p: 'Who knows each learner\'s code and habits.' },
      { h3: 'Every age', p: 'From about eight to well past retirement.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'Projects built by our Python students',
  projectsLede: 'A handful of the projects our students around the world have made; the <a class="ag-inline-link" href="/student-labs">student labs</a> show many more.',
  reviewsLede: 'Students and parents in their own words, from our Google reviews.',

  fees: {
    h2: 'Fees for the Python course in Germany',
    lede: 'Eight live classes a month for one monthly fee. On this page the fee is expressed in euro at the European Central Bank\'s reference rate; we charge it in US dollars, and your bank carries out the conversion, which can make the euro amount you see on your statement a little different.',
    free: ['A free first class', 'A short Python task at your level', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two classes a week', 'Pay by the month, stop any time'],
    one: ['One learner and one mentor', 'Your own Python plan', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Learners in Germany ask',
    h2: 'Python course in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. The Python course is live and in English only, with a mentor who matches each learner\'s pace and accent. Python\'s keywords and error messages are English words anyway.' },
      { q: 'Which Python version will I learn?', a: 'A currently supported Python 3 release, normally 3.14 or 3.15 in November 2026. The Python Developer\'s Guide lists 3.11 to 3.15 as supported on that date, and 3.10 reached end of life on 1 October 2026.' },
      { q: 'What is the youngest age for Python?', a: 'About eight, in our Python and AI course for kids. Younger children usually begin with Scratch and move to Python a little later.' },
      { q: 'Is there an upper age limit?', a: 'No. We teach adults of every age, including retired learners, many of whom prefer one-to-one classes at their own speed.' },
      { q: 'Do I need to install anything?', a: 'Python itself, which is free, and a simple editor. The mentor helps with installation in the first class on Windows, macOS or Linux.' },
      { q: 'Will Python help with Informatik at school?', a: 'It gives a pupil a head start in writing and testing programs, whatever language the school course uses. We teach alongside school and give no grades; the school course is the one that counts.' },
      { q: 'Can I prepare for a Python certificate?', a: 'Yes. Our PCEP and PCAP course prepares for the Python Institute exams, which the Python Institute runs itself. We are not connected with it, and these are not German qualifications.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons suit school-age learners and early evenings or weekends suit adults.' },
      { q: 'How do I pay from Germany?', a: 'Fees are shown in euro at the European Central Bank reference rate and charged in US dollars; your bank converts them. The first class is free.' },
      { q: 'Is it a group class or one to one?', a: 'You choose. Groups have fifteen to twenty learners at a similar level; one-to-one classes follow a single learner\'s plan.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Python learners in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany, by topic and place.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Python models on German open data.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik at school, explained in German.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For Berlin families with younger children.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'What to learn after Python.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first Python class',
    lede: 'The mentor finds out what you already know, sets a short Python task at that level, helps you get Python running if needed, and recommends the course that fits, in English and at your pace.',
    readFirst: 'If you would like to read on first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">our whole catalogue</a>.',
    note: 'All classes are live online in English, with mentors based in India. WhatsApp is the fastest way to reach us, in English.',
    formNote: 'The first class is free and asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python for adults' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: '3.15 comes after 3.9'
  },

  personalityCss: `
.ag-root.ag-pco .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-pco .ag-capsule { border-left-width: 4px; }
.ag-root.ag-pco .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-pco .ag-table td:nth-child(2) { font-weight: 600; }
.ag-root.ag-pco .ag-code-head b { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Python Developer\'s Guide, Status of Python versions (devguide.python.org/versions), read 3 November 2026; PEP 745; Gesellschaft für Informatik, Informatik-Monitor 2026/27; bwinf.de (IOI pre-selection in C++); BWKI Teilnahmebedingungen; Einheitenzeitgesetz.',
    localProject: '3.15 comes after 3.9: an original Python project on the 19-row official Python version table. Comparing versions as text, max() names 3.9 the newest released version on 3 November 2026; with a tuple-of-integers sort key it names 3.15, and the supported versions come out as 3.11 to 3.15, matching the Developer\'s Guide. Lesson family: version numbers are not decimals or text; compare them as tuples (sort keys).',
    requiredMentions: ['python_versions.csv', 'Newest released: 3.9', 'Newest released: 3.15', 'Supported on 2026-11-03: [\'3.11\', \'3.12\', \'3.13\', \'3.14\', \'3.15\']', 'Python 3.10 reached its end of life on 1 October 2026', 'turns "3.15" into the pair (3, 15)', '3.15 comes after 3.9', 'IOI selection run by BWINF programs in C++'],
    sources: [
      { claim: 'Python versions, status, first release and end of life.', url: 'https://devguide.python.org/versions/' },
      { claim: 'Python 3.14 release schedule.', url: 'https://peps.python.org/pep-0745/' },
      { claim: 'About 15 percent take Informatik in the Qualifikationsphase; about half in Sachsen and Mecklenburg-Vorpommern.', url: 'https://informatik-monitor.de/' },
      { claim: 'IOI pre-selection programmed in C++.', url: 'https://bwinf.de/' }
    ],
    rejectedClaims: [
      'Which Länder teach Informatik in Python: not in the Informatik-Monitor, so not claimed.',
      'GS1 check-digit project: gs1.org returned HTTP 403, not retried, dropped.',
      'That PCEP or PCAP is a German qualification or that we are connected with the Python Institute: neither.',
      'Any promise of school grades: none made.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
