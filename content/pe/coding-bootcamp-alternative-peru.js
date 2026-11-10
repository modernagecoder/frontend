// SHIP: market | Coding bootcamp or live classes in Peru: what each format is, INEI skills data, no job promises | reading a unified diff (difflib): a code review that removes a ZeroDivisionError
'use strict';
// Coding bootcamp alternative for Peru (ag- English versus page, Peru cluster row PE081, P3 versus, hubGroup guides; alloc caq, #760C50).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fairness: bootcamps are described as a category (intensive, cohort-based, career-focused courses); no provider named, priced or
// rated; no claim that bootcamps fail or that we place anyone in a job. No job, salary or placement promises anywhere.
// Spine: what a bootcamp is and what a live part-time class is; INEI Cuadro 4.1 (who in Peru actually writes programs) as the
// primary-source table; what employers' own skill frameworks list (O*NET 15-1252.00), including the degree question honestly;
// what a short course certifies under Ley 30220 Art. 46; how to test any bootcamp's claims; a code-review lesson with difflib.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-bootcamp-alternative-peru/):
//  - INEI, TIC en los Hogares II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro N° 4.1 "Perú: Población de 15 y más años de edad que
//    realizó alguna actividad informática a través de una computadora, laptop, tablet o similar", II Trimestre 2023 to 2026, rows
//    "88,9 92,0 93,0 93,7" (copy/move file) ... "42,3 46,5 46,7 47,7" (find, download, install software) ... "7,8 11,7 11,0 12,1"
//    (write a program); 2026 "P/ Preliminar"; text: "apenas el 12,1% redactó programas informáticos utilizando lenguajes de
//    programación especializados"; "Solo el 15,5% de los hombres redactó un programa ... frente al 8,3% de las mujeres";
//    "97,3% de la población de 19 a 24 años utilizó Internet"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - O*NET OnLine 15-1252.00 Software Developers (onet_15-1252.raw/.txt, fetched once, 9 November 2026; US Department of Labor):
//    Job Zone Four, "Most of these occupations require a four-year bachelor's degree, but some do not."; Education "85%" responded
//    "Bachelor's degree required", "5%" "Associate's degree or other 2-year degree required"; Knowledge includes "English Language";
//    Essential Skills "Critical Thinking", "Reading Comprehension", "Writing", "Speaking"; Transferable Skills "Programming";
//    Detailed Work Activities "Develop testing routines or procedures."; Work Context "Work With or Contribute to a Work Group or
//    Team" "71% responded "Extremely important.""; File versioning software "Git". Wages on the page are deliberately not used.
//  - Ley N.° 30220 (ley30220.txt, El Peruano 9 July 2014, SUNEDU copy): Art. 46 "No conducen a la obtención de grados o títulos,
//    pero sí certifican a quienes los concluyan con nota aprobatoria." (2014 text; amended since).
//  - MINEDU, Fábrica de Programadores (fabrica.txt): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con
//    formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global".
//  - Python Institute PCEP page (pcep.txt): "Number of questions 35", "Exam duration 50 minutes", "Passing score 70%".
//  - EF EPI 2025 Peru (ef_peru.raw): jobFunction "it" score 522 "moderate".
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own example (caq.py, caq_check.py in the src-pages folder, python3 -I, Python 3.14.8), exact output: the unified diff with
//    hunk "@@ -1,5 +1,4 @@" and "similarity: 0.22"; caq_check.py prints "14.0" and "ZeroDivisionError division by zero".
// Lesson family: reading a unified diff (difflib.unified_diff, SequenceMatcher.ratio); a review that guards an empty list.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def average(marks):',
  '    total = 0',
  '    for m in marks:',
  '        total += m',
  '    return total / len(marks)',
  '',
  'print(average([14, 17, 11]))',
  'try:',
  '    average([])',
  'except ZeroDivisionError as e:',
  '    print(type(e).__name__, e)'
].join('\n');

const OUT1 = ['14.0', 'ZeroDivisionError division by zero'].join('\n');

const DIFF = [
  'import difflib',
  '',
  "before = '''def average(marks):",
  '    total = 0',
  '    for m in marks:',
  '        total += m',
  '    return total / len(marks)',
  "'''.splitlines(keepends=True)",
  '',
  "after = '''def average(marks):",
  '    if not marks:',
  '        return None',
  '    return sum(marks) / len(marks)',
  "'''.splitlines(keepends=True)",
  '',
  "for line in difflib.unified_diff(before, after, 'average_v1.py', 'average_v2.py'):",
  "    print(line, end='')",
  '',
  'ratio = difflib.SequenceMatcher(None, before, after).ratio()',
  "print('similarity:', round(ratio, 2))"
].join('\n');

const OUT2 = [
  '--- average_v1.py',
  '+++ average_v2.py',
  '@@ -1,5 +1,4 @@',
  ' def average(marks):',
  '-    total = 0',
  '-    for m in marks:',
  '-        total += m',
  '-    return total / len(marks)',
  '+    if not marks:',
  '+        return None',
  '+    return sum(marks) / len(marks)',
  'similarity: 0.22'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Bootcamp or live classes' },
  slug: 'coding-bootcamp-alternative-peru',
  code: 'caq',
  accent: '#760C50',
  accentRationale: 'Coding bootcamp alternative for Peru: a deep mulberry #760C50, the colour of the red pen in a code review, softened; it suits a page that weighs claims carefully, and its contrast on the paper #FBF8F2 is far above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'A coding bootcamp alternative for Peru',
  title: 'Coding Bootcamp Alternative in Peru: Live Classes in English',
  description: 'Thinking about a coding bootcamp in Peru? How bootcamps differ from part-time live classes in English, what employers list, and how to test any claim first.',
  ogDescription: 'Bootcamp or part-time live classes? What each format is, how few Peruvians write code (INEI 2026), what employer skill frameworks list, and a code-review lesson in Python.',
  twitterDescription: 'Bootcamp or live classes in English? A fair guide for adults in Peru, with no job promises.',
  pageName: 'Coding Bootcamp Alternative in Peru',
  webPageDescription: 'A fair guide for adults in Peru choosing between an intensive coding bootcamp and part-time live coding classes taught in English, built from INEI\'s 2026 household survey of computing skills, the US Department of Labor\'s O*NET profile for software developers, Peru\'s Ley Universitaria 30220, MINEDU and the Python Institute, with an original code-review lesson in Python.',
  courseDescription: 'Part-time live online coding courses for adults and university students in Peru, taught in English by mentors based in India: web development, Python, data structures and algorithms, databases and AI, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Bootcamp alternative',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#formats', label: 'Two formats' },
    { href: '#peru-data', label: 'Who codes in Peru' },
    { href: '#employers', label: 'What employers list' },
    { href: '#review', label: 'Code review lesson' },
    { href: '#test', label: 'Test any claim' }
  ],
  eyebrow: 'Peru &middot; Adults and career changers &middot; Live online, in English',
  h1: 'A coding bootcamp alternative for Peru',
  lede: 'A coding bootcamp promises a lot in a short time: a few intense months, a cohort, a portfolio, help with the job search. For some people in Peru that is exactly right. For others, a slower, part-time route with a live mentor fits better around a job, a degree or a family. This page explains both formats honestly, shows what Peru\'s own statistics say about who writes code, lists what employers\' skill frameworks actually ask for, and gives you a way to test the claims of any course before you pay, ours included.',
  secondaryCta: { href: '#test', label: 'Go to the claim checklist' },
  wa: 'Hello Modern Age Coders, I am in Peru and comparing bootcamps with part-time live classes in English. Could I book a free class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; part-time, in English, with no job promises',
  spec: [
    ['Format', 'Part-time, live, online'],
    ['Language', 'English only'],
    ['Pace', 'Two classes a week, or one to one'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Chosen around your work'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'A coding bootcamp is a short, intensive, usually full-time course aimed at a first tech job. The part-time alternative is what Modern Age Coders offers adults in Peru: live coding lessons over video, always in English, led by mentors who work from India; learners join a group of up to twenty at their level or study privately, at times that sit around work or study. It takes longer than a bootcamp, keeps your income, and builds the same core skills: programming, testing, Git, databases and explaining your code. We make no job or salary promises, and nor should anyone.',

  picks: {
    eyebrow: 'Part-time routes',
    h2: 'Three courses adults choose instead of a bootcamp',
    lede: 'Each covers what bootcamps usually cover, at a part-time pace, taught live.',
    items: [
      { course: 'mern-stack-development-masterclass-college', code: 'CAQ / 01', title: 'MERN stack web development', note: 'MongoDB, Express, React and Node.js: the stack many web bootcamps teach, built up over months into an application you deploy yourself.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'CAQ / 02', title: 'Data structures and algorithms', note: 'The problem-solving that technical interviews test and short courses often squeeze. Taught live, one pattern at a time, explained aloud in English.' },
      { course: 'python-web-development-django-flask-course', code: 'CAQ / 03', title: 'Python web with Django and Flask', note: 'Back-end web development in Python, from routes and templates to databases and tests, for learners who prefer Python to JavaScript.' }
    ]
  },

  sections: [
    {
      id: 'formats',
      eyebrow: 'Two formats',
      h2: 'What is the difference between a coding bootcamp and live classes?',
      lede: 'Mostly time and intensity. A bootcamp compresses learning into a short, full-time block with a cohort. Part-time live classes spread similar material over a longer period, a few hours a week, alongside the rest of your life.',
      body: [
        { kind: 'two',
          leftH3: 'A bootcamp, typically',
          left: [
            'A fixed start date, a cohort that moves together, many hours a week for a few months, and a final project. Many add career coaching. Some are live, some recorded, some mixed; some teach in Spanish, some in English.',
            'Its strength is focus: for people who can stop working for a few months, total immersion is a fast way to build momentum. Its risk is the same compression: there is little time to absorb ideas, and anyone who falls behind in week three may struggle to catch up.'
          ],
          rightH3: 'Our part-time live classes',
          right: [
            'Twice a week you join a level-matched group of up to twenty, or you book private lessons at times you pick. Each lesson runs in English, led by an India-based mentor who reads what you wrote and asks you to justify it.',
            'The strength is sustainability: you keep your job or degree and still progress every week. The cost is time. Reaching a solid working level usually takes many months, not a few weeks, and we say so before you start.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A bootcamp and part-time live classes: questions to ask of each', head: ['Question', 'Typical bootcamp', 'Our live classes'], rows: [
          ['Hours per week', 'Often full-time', 'A few hours, plus practice'],
          ['Length', 'A few months', 'Many months, at your pace'],
          ['Keep your job?', 'Often hard', 'Yes, classes fit around it'],
          ['Start date', 'Fixed cohort', 'Whenever you are ready'],
          ['Teaching language', 'Varies by provider', 'English only'],
          ['Feedback on code', 'Varies; ask how often', 'Your mentor, every week'],
          ['Job outcome', 'Ask for audited evidence', 'We promise neither a job nor a salary']
        ] },
        { kind: 'source', html: 'The bootcamp column describes the format in general, not any provider; check each school\'s own terms. The right-hand column is our offer in November 2026.' }
      ]
    },
    {
      id: 'peru-data',
      tint: 'tint',
      eyebrow: 'Who codes in Peru',
      h2: 'How many people in Peru can write code?',
      lede: 'Few, by INEI\'s measure. Between April and June 2026, just 12.1% of Peruvians aged 15 or older who used a computer, laptop or tablet for anything at all had ever coded a program. Most digital skills are far more common.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Peru: people aged 15 and over who did a computing task on a computer, laptop, tablet or similar, second quarter, per cent', head: ['Computing task', '2023', '2024', '2025', '2026 (preliminary)'], rows: [
          ['Copied or moved a file or folder', '88.9', '92.0', '93.0', '93.7'],
          ['Copied and pasted within a document', '86.9', '90.2', '92.1', '92.7'],
          ['Sent emails with attachments', '87.0', '86.2', '87.6', '86.4'],
          ['Made electronic presentations', '65.4', '71.2', '71.7', '75.1'],
          ['Used basic formulas in a spreadsheet', '67.1', '71.7', '71.7', '73.7'],
          ['Transferred files between devices', '66.1', '70.8', '69.1', '70.5'],
          ['Connected and installed new devices', '53.5', '58.8', '57.2', '59.2'],
          ['Found, downloaded, installed and set up software', '42.3', '46.5', '46.7', '47.7'],
          ['Wrote a program in a programming language', '7.8', '11.7', '11.0', '12.1']
        ] },
        { kind: 'source', html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026, Cuadro N° 4.1, from the Encuesta Nacional de Hogares; 2026 figures are preliminary. Task names are our English translation. Read on 9 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table says',
          left: [
            'Programming is the rarest computing skill INEI measures, well below installing software (47.7%) or using spreadsheet formulas (73.7%). The same bulletin finds 15.5% of men and 8.3% of women had written a program in 2026.',
            'The figure has grown from 7.8% in 2023, though not every year: it dipped to 11.0% in 2025 before reaching 12.1%. Read these as survey estimates, not a count of professional developers.'
          ],
          rightH3: 'What it means for choosing a course',
          right: [
            'Our reading: most adults starting a bootcamp or a course in Peru begin from zero in programming, even if they use computers every day. A course that assumes prior coding will lose them; a good one starts with the basics and checks them.',
            'Equipment matters too. INEI\'s 2026 survey puts computer ownership at just 36.4% of homes, against internet use by 97.3% of young adults between 19 and 24. A phone gets you online; it does not get you coding.'
          ] }
      ]
    },
    {
      id: 'employers',
      eyebrow: 'What employers list',
      h2: 'What skills do software developer jobs actually ask for?',
      lede: 'Employers\' own frameworks are a better guide than any course brochure. The most detailed public one is O*NET, run for the US Department of Labor, whose profile of software developers lists tasks, skills and knowledge gathered from workers and job postings.',
      body: [
        { kind: 'two',
          leftH3: 'What O*NET lists for software developers',
          left: [
            'Under transferable skills, "Programming" comes first, followed by judgement, systems analysis and complex problem solving. The essential skills include critical thinking, reading comprehension, writing and speaking. Under knowledge, alongside computers and mathematics, it lists "English Language".',
            'Among detailed work activities it lists "Develop testing routines or procedures." In the work context, 71% of respondents rated working with or contributing to a team as extremely important. Git appears under its file versioning software.'
          ],
          rightH3: 'The honest part about degrees',
          right: [
            'O*NET places software developers in Job Zone Four, where "most of these occupations require a four-year bachelor\'s degree, but some do not". In its education data, 85% of respondents said a bachelor\'s degree is required. That is US data, and hiring varies by country and company, but it is the official picture.',
            'So we do not tell anyone that a short course replaces a degree. For people who already have one, or are studying for one, a course adds practical skills; for those without, it can be a start, and the evidence that counts is work you can show and explain.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Programming fluency.</strong> Write and read code without notes in at least one language.',
          '<strong>Testing.</strong> Check your own code with tests before anyone else sees it.',
          '<strong>Version control.</strong> Branches, commits and pull requests in Git.',
          '<strong>Data.</strong> Store, query and change data with SQL.',
          '<strong>Communication in English.</strong> Read documentation, write a clear message, explain a decision aloud.',
          '<strong>Teamwork.</strong> Review others\' code and accept review of yours.'
        ] },
        { kind: 'p', mt: true, html: 'That last point is where English matters in Peru. In EF\'s English Proficiency Index 2025, Peruvians who work in IT score 522, in its "moderate" band. A part-time class in English builds the language and the code together, week after week, which a short full-time sprint has less room to do.' }
      ]
    },
    {
      id: 'review',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a code review teach that a tutorial does not? A diff lesson in Python',
      lede: 'In a job, almost every change you make is read by someone else as a diff: the lines removed and the lines added. Learning to read and write diffs is one of the habits a part-time course has time to build. This lesson uses Python\'s own <code>difflib</code> module.',
      body: [
        { kind: 'two',
          leftH3: 'The bug a reviewer would catch',
          left: [
            'Version 1 of <code>average</code> works for normal input: the marks 14, 17 and 11 give 14.0. But give it an empty list, which happens the first time a class has no marks yet, and it divides by zero.',
            'The program below runs both cases and prints exactly what Python raises: <code>ZeroDivisionError division by zero</code>. A tutorial usually shows the happy path; a reviewer asks "what if the list is empty?"'
          ],
          rightH3: 'How to read the diff',
          right: [
            'Lines starting with <code>-</code> were removed; lines starting with <code>+</code> were added; lines starting with a space are unchanged context. The header <code>@@ -1,5 +1,4 @@</code> means five lines from line 1 of the old file became four lines from line 1 of the new one.',
            'The new version guards the empty list first and uses <code>sum()</code> instead of a hand-written loop. <code>SequenceMatcher</code> reports a similarity of 0.22: most of the function changed, which a reviewer should notice and ask about.'
          ] },
        { kind: 'code', label: 'Version 1, and the case it misses', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Pasted unchanged from a Python 3.14 run.' },
        { kind: 'code', label: 'The review as a unified diff', lang: 'Python', code: DIFF },
        { kind: 'code', label: 'What the diff prints', lang: 'Output', code: OUT2, note: 'Pasted unchanged from the same Python 3.14 session; Git and most review tools show changes in this unified format.' },
        { kind: 'p', mt: true, html: 'Is returning <code>None</code> the right fix? That is a design question worth arguing in English. Some teams would rather raise a clear <code>ValueError</code>; others return 0. A good review ends in a decision both people can explain, which is exactly the kind of conversation our mentors hold with learners every week.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> What does Version 2 return for <code>[]</code>, and for <code>[20]</code>?',
          '<strong>Argue.</strong> Write two English sentences for and against returning <code>None</code>.',
          '<strong>Change it.</strong> Make Version 2 raise <code>ValueError</code> instead, then regenerate the diff.',
          '<strong>Review someone.</strong> Swap code with a classmate and leave three comments on their diff.'
        ] }
      ]
    },
    {
      id: 'test',
      eyebrow: 'Test any claim',
      h2: 'How can you check a bootcamp\'s claims before paying?',
      lede: 'By asking for things that can be checked. These questions work for any bootcamp, course or school in Peru, and we expect to be asked them too.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask how outcomes are measured.</strong> If a provider quotes a job rate, ask who was counted, over what period, and whether anyone outside the company checked it.',
          '<strong>Ask what the certificate is.</strong> Article 46 of the 2014 text of Peru\'s university law says that even a university\'s own continuing-education programmes lead to no degree or professional title; they only certify that a learner passed. A private course certificate is not a degree either.',
          '<strong>Ask for the syllabus week by week.</strong> Look for testing, Git, databases and a project you design yourself, not only tutorials followed step by step.',
          '<strong>Ask about the language.</strong> Which language is every lesson, every piece of feedback and every interview practice in?',
          '<strong>Ask what happens if you fall behind.</strong> Repeat a module, move cohort, pause, or lose your place?',
          '<strong>Ask for a sample class.</strong> Watch how much time is spent on your code rather than the teacher\'s.',
          '<strong>Read the payment and refund terms.</strong> Especially for any plan that links fees to future income.',
          '<strong>Talk to a graduate yourself.</strong> One you find, not one the provider chooses.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Exams with a defined syllabus',
          left: [
            'If you want a credential with a clear meaning, consider an exam set by an independent body. The Python Institute describes its PCEP as a 35-question exam lasting 50 minutes, passed at 70%. MINEDU\'s Fábrica de Programadores pilot trained 1,000 students of 4° and 5° de secundaria in Lima Norte in Python and lets those who finish both stages sit the PCEP.',
            'We prepare learners for the PCEP in our certification course; the Python Institute sets and awards it, not us.'
          ],
          rightH3: 'Where we stand',
          right: [
            'We are not a bootcamp and do not offer job placement, income-share agreements or salary guarantees. We teach the skills employer frameworks list, live and in English, and give our own certificate of completion.',
            'If you can stop work for several months and want full immersion with a cohort, a bootcamp may be the right choice for you. If you need to keep your income and learn steadily, a part-time route may suit better.'
          ] },
        { kind: 'p', mt: true, html: 'More for adults in Peru: <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals</a>, <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students</a>, and in Spanish <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">programación para adultos</a> and <a class="ag-inline-link" href="/curso-de-desarrollo-de-software-en-ingles-peru">desarrollo de software, clases en inglés</a>. Every Peru page is on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Class hours on a Lima clock and the mentor\'s clock in India (worked conversions, not a timetable)', head: ['Lima', 'India', 'Fits'], rows: [
          ['07:00', '17:30', 'Before an office day'],
          ['12:30', '23:00', 'A lunch break'],
          ['20:00', '06:30, next day', 'After work'],
          ['21:30', '08:00, next day', 'After the children are asleep']
        ] },
        { kind: 'source', html: 'Worked out by us: Lima keeps one offset, five hours behind UTC, through the whole year, while India sits five and a half hours ahead (tz database).' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A part-time year',
    h2: 'What does a part-time year look like compared with a bootcamp?',
    lede: 'Our own outline for an adult starting from zero with two live classes a week. It is a plan, not a promise, and it moves with you.',
    table: { numCols: [], caption: 'Our part-time path for adults (our levels)', head: ['Months', 'Focus', 'You can show', 'In English'], rows: [
      ['1 to 2', 'Programming basics', 'Twenty small solved exercises', 'Explain any line you wrote'],
      ['3 to 4', 'Functions, data and files', 'A tool that cleans real data', 'Read an error and say its cause'],
      ['5 to 6', 'Web or back end, with Git', 'A small app in a repository', 'Write a clear commit message'],
      ['7 to 8', 'Databases and testing', 'Tests that catch your own bugs', 'Review a classmate\'s diff'],
      ['9 to 10', 'Algorithms and structure', 'Solve timed problems', 'Narrate a solution aloud'],
      ['11 to 12', 'Your own project', 'A deployed project you designed', 'Present it in five minutes']
    ] },
    left: { h3: 'If you are working', ps: [
      'Two classes and three short practice sessions a week is enough to keep moving. Missing a week is fine; missing a month is where people stall.',
      'Use one-to-one if your hours change often; the class moves with you.'
    ] },
    right: { h3: 'If you are deciding', ps: [
      'Ask yourself how many months you could study full-time without income. If the answer is none, a bootcamp\'s pace may not be realistic.',
      'Either way, start with the free class and see how you work with a live mentor.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more part-time courses, live and in English',
    lede: 'Each runs at a part-time pace with one mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Developer habits', sub: 'What every role uses', courses: [
        { code: 'CAQ / HAB / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Commits, branches, pull requests and reviews.' },
        { code: 'CAQ / HAB / 02', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript', blurb: 'Typed JavaScript that catches errors early.' },
        { code: 'CAQ / HAB / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save hours of office work.' }
      ] },
      { num: 'II', h3: 'Deeper languages', sub: 'Beyond the first stack', courses: [
        { code: 'CAQ / LANG / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Statistics, pandas and models, done honestly.' },
        { code: 'CAQ / LANG / 02', slug: 'complete-golang-programming-masterclass-college', title: 'Go', blurb: 'A simple, fast language for back-end services.' },
        { code: 'CAQ / LANG / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++', blurb: 'Memory, performance and contest programming.' }
      ] },
      { num: 'III', h3: 'Proving it', sub: 'Evidence of skill', courses: [
        { code: 'CAQ / PROOF / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Python Institute exams, prepared live.' },
        { code: 'CAQ / PROOF / 02', slug: 'hackathon-prep-for-adults-professionals-coding-ai-innovation-course', title: 'Hackathon preparation', blurb: 'Build fast with a team, under a deadline.' },
        { code: 'CAQ / PROOF / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Building with AI, carefully', blurb: 'AI assistants used with tests and review.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How our part-time live classes run from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'A class before the working day, on the Lima clock.' },
      { time: 'Evening', l: 'An hour after work, chosen when you join.' },
      { time: '1-on-1', l: 'Your own mentor, at hours that change with your week.' }
    ],
    cells: [
      { h3: 'Reviews, not lectures', p: 'Your code is read and discussed.' },
      { h3: 'Tests from early on', p: 'You learn to check your own work.' },
      { h3: 'Git every week', p: 'Projects live in a repository.' },
      { h3: 'English aloud', p: 'You explain decisions, not just type them.' },
      { h3: 'Same mentor', p: 'One person follows your progress.' },
      { h3: 'Pause when needed', p: 'Monthly terms, no long contract.' }
    ]
  },

  projectsH2: 'Projects from our adult learners',
  projectsLede: 'People who keep at it build working software, not just exercises. A few examples follow; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from learners and families on Google, as they wrote them.',

  fees: {
    h2: 'Fees for adults in Peru',
    lede: 'You pay month by month, in US dollars, by card, with no long contract and no income-share agreement. The soles figure you see depends on the exchange rate your bank uses on the day.',
    free: ['A free live class', 'An honest level check', 'No card to book'],
    group: ['Fifteen to twenty learners at your level', 'One mentor throughout', 'Two live classes a week', 'Monthly, cancel any month'],
    one: ['One learner, one mentor', 'A plan for your goal', 'Hours around your job']
  },

  faq: {
    eyebrow: 'Adults ask',
    h2: 'Bootcamp or live classes: questions from Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach only in English, live and online. Our mentors in India speak slowly and clearly, adjust to your speed and accent, and keep the code on screen throughout. Working in English is part of the training.' },
      { q: 'Is this a bootcamp?', a: 'No. We run part-time live courses: two classes a week in a group, or one-to-one at your hours. There is no fixed cohort start, no job placement service and no income-share agreement.' },
      { q: 'Will I get a job after the course?', a: 'We make no job or salary promise. We teach the skills that employer frameworks list, such as programming, testing, Git and clear communication in English, and help you build projects you can show. Hiring decisions belong to employers.' },
      { q: 'Is a bootcamp a bad idea?', a: 'Not at all. For someone who can study full-time for a few months, a good bootcamp can be a strong choice. Check its claims with the questions on this page before paying, as you should with us.' },
      { q: 'Do I need a degree to work as a developer?', a: 'It depends on the employer and country. O*NET, the US Department of Labor\'s occupational database, says most software developer roles require a bachelor\'s degree, but some do not. A course is not a degree, and we never present it as one.' },
      { q: 'How long until I am job-ready?', a: 'It varies widely. Our own outline for a beginner with two classes a week runs about a year to a finished, deployed project. Some move faster, some slower; we tell you honestly where you are.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Lima is 10 hours 30 minutes behind India all year, so 20:00 in Lima is 06:30 the next morning in India.' },
      { q: 'Is your certificate recognised in Peru?', a: 'It is our own certificate of completion. It is not a degree, title or official Peruvian qualification, and we are not connected with SUNEDU, MINEDU or any university.' },
      { q: 'Can I use AI tools in class?', a: 'Yes, for learners aged 18 and over, within each tool\'s terms. We teach you to solve the problem first and then use AI to review and question your code, as the diff lesson on this page shows.' },
      { q: 'How do I pay from Peru?', a: 'By card, monthly, in US dollars; your bank converts the amount into soles. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More for adults weighing their options',
    lede: 'Useful pages before you commit to any course.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking over copying', p: 'Our view on learning to reason.' },
      { href: '/student-labs', label: 'Learner projects', p: 'What our students built.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Terms and age limits, tool by tool.' },
      { href: '/courses', label: 'Every course', p: 'Syllabuses side by side.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'Every Peru page, indexed.' }
    ]
  },

  start: {
    h2: 'Book a free live class before you decide',
    lede: 'Whatever you choose in the end, one free class costs you an hour. A mentor works through a real problem with you in English, sees your starting level, and tells you honestly whether a part-time route fits your goal and how long it is likely to take.',
    readFirst: 'Want detail first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'All classes are live video from India, in English. WhatsApp us in English for the quickest answer.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'For learners', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/ai-and-coding-for-professionals-peru', label: 'Professionals' },
        { href: '/coding-courses-for-university-students-peru', label: 'University students' },
        { href: '/curso-de-desarrollo-de-software-en-ingles-peru', label: 'En español: software' }
      ] }
    ],
    bottomRight: 'What if the list is empty?'
  },

  personalityCss: `
.ag-root.ag-caq .ag-hero h1 { max-width: 19ch; letter-spacing: -0.01em; }
.ag-root.ag-caq .ag-capsule { border-left-width: 3px; }
.ag-root.ag-caq .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-caq .ag-steps li { line-height: 1.6; }
.ag-root.ag-caq .ag-code pre { font-size: 0.9em; }
`,

  dossier: {
    curriculumAuthority: 'INEI TIC en los Hogares II Trimestre 2026, Cuadro 4.1; O*NET OnLine 15-1252.00 Software Developers (US Department of Labor); Ley N.° 30220 (2014 text), Art. 46; MINEDU Fábrica de Programadores note; Python Institute PCEP page; EF EPI 2025 Peru (IT job function); IANA tz database. Read 9 November 2026.',
    localProject: 'An original code-review lesson in Python: an average() that returns 14.0 for [14, 17, 11] and raises ZeroDivisionError for [], then a unified diff (difflib) to a guarded version, hunk @@ -1,5 +1,4 @@, similarity 0.22. Lesson family: reading and writing unified diffs; guarding an empty input.',
    requiredMentions: ['@@ -1,5 +1,4 @@', 'similarity: 0.22', 'ZeroDivisionError division by zero', 'What if the list is empty?', 'Wrote a program in a programming language', 'Found, downloaded, installed and set up software', 'Ask for audited evidence', 'The honest part about degrees', 'Peruvians who work in IT score 522'],
    sources: [
      { claim: 'INEI Cuadro 4.1, people 15+ doing computing tasks, II trimestre 2023 to 2026; 12.1% wrote a program (15.5% men, 8.3% women); 97.3% internet use 19 to 24; 36.4% of households with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'O*NET 15-1252.00: Programming, essential skills, English Language knowledge, testing routines, teamwork 71% extremely important, Git; Job Zone Four; 85% say a bachelor\'s degree is required.', url: 'https://www.onetonline.org/link/summary/15-1252.00' },
      { claim: 'Ley 30220 (2014 text) Art. 46: continuing-education programmes certify but do not lead to degrees or titles.', url: 'https://www.sunedu.gob.pe/wp-content/uploads/2017/04/Ley-universitaria-30220.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'PCEP: 35 questions, 50 minutes, 70% pass.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'EF EPI 2025 Peru: IT job function 522, moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'O*NET wage and employment figures: not used (US data; no salary promises on Peru pages).',
      'Any bootcamp named, priced, rated or described as failing: not done; the format is described in general.',
      'Job placement, income share or salary guarantees: none offered and none implied.',
      'That a course replaces a degree: rejected explicitly with O*NET Job Zone data.',
      'Spanish-language teaching: none; the page says the classes are in English only.'
    ]
  }
};
