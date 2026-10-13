'use strict';
// VCE Algorithmics (HESS) help (ag- exam door, Australia cluster Phase 3, row 58).
// Facts read raw on 7 October 2026 from the VCAA: the VCE Algorithmics (HESS) study design page
// ("Accreditation period from 2023") and the study design itself (2023AlgorithmicsSD.docx): Units 3 and 4
// accredited from 1 January 2023, taken as a sequence, each unit at least 50 hours of scheduled classroom
// instruction; Unit 3 Algorithmic problem-solving, Unit 4 Principles of algorithmics; School-assessed
// Coursework 20 per cent (Unit 3 12, Unit 4 8), School-assessed Task 20 per cent, end-of-year examination
// 60 per cent, 2 hours. The 2026 VCE examination timetable lists Algorithmics (HESS) on Wednesday
// 4 November, session 11:45 am to 2:00 pm. Spine: the change-making problem, greedy against dynamic
// programming with a single dimension array (family checked free site-wide on 7 October 2026).
// We never write, edit or debug any School-assessed Task or Coursework.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE ALGORITHMICS', label: 'VCE Algorithmics (HESS) help', blurb: 'The Victorian study built to first-year university standard: its two units, the 60 per cent exam, the School-assessed Task, and the dynamic programming idea the study design names outright.' },
  slug: 'vce-algorithmics-hess-help',
  code: 'vcal',
  accent: '#271E69',
  accentRationale: 'VCE Algorithmics: a deep ink indigo for a theory-first study, at least 13 RGB from every accent on the site and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE Algorithmics (HESS) help',
  title: 'VCE Algorithmics (HESS) Help | Units 3 and 4 Online',
  description: 'VCE Algorithmics (HESS) help for Victorian students: both units, the 2-hour exam worth 60 per cent, the School-assessed Task, and worked algorithm design.',
  ogDescription: 'VCE Algorithmics (HESS) explained from the VCAA study design: Units 3 and 4, how the study score is built, the 2026 exam date, and a worked change-making problem that shows why greedy algorithms can fail.',
  twitterDescription: 'VCE Algorithmics (HESS) from the study design: two units, a 60 per cent exam, and the dynamic programming it names.',
  pageName: 'VCE Algorithmics (HESS) Help',
  webPageDescription: 'Support for Victorian students taking VCE Algorithmics (HESS): structure of Units 3 and 4, assessment weightings, the 2026 examination session, key knowledge areas, and a worked comparison of greedy and dynamic programming solutions to the change-making problem.',
  courseDescription: 'Live online teaching in algorithm design, abstract data types, graph algorithms, complexity analysis and Python implementation for Victorian VCE Algorithmics (HESS) students, without writing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE Algorithmics (HESS)',
  navLinks: [
    { href: '#study', label: 'The study' },
    { href: '#score', label: 'Score and exam' },
    { href: '#change', label: 'Greedy or not' },
    { href: '#integrity', label: 'The SAT' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; VCE Algorithmics (HESS) &middot; Live online',
  h1: 'VCE Algorithmics (HESS) help',
  lede: 'Algorithmics is the one VCE computing study that the VCAA pitches at first-year university level, and it reads that way. Graphs, recurrences, the Master Theorem, the Halting Problem and neural networks all sit inside two units, and the exam alone decides 60 per cent of the study score. Students who do well treat it as a reasoning subject that happens to use code.',
  secondaryCta: { href: '#change', label: 'See the worked problem' },
  wa: 'Hello Modern Age Coders, I would like a free class about VCE Algorithmics (HESS) in Victoria.',
  heroNote: 'Study design read at source &middot; Reasoning before code &middot; Lessons after school in Victorian time',
  spec: [
    ['Study', 'VCE Algorithmics (HESS)'],
    ['Units', '3 and 4, taken as a sequence'],
    ['Accredited from', '1 January 2023'],
    ['Exam weight', '60 per cent of the study score'],
    ['Exam length', '2 hours'],
    ['2026 exam', 'Wednesday 4 November'],
    ['We teach', 'Design, analysis and proof technique'],
    ['We never', 'Touch the School-assessed Task']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE Algorithmics (HESS) is a Victorian Units 3 and 4 study, accredited from 1 January 2023 and designed to the standard of a first-year university subject. Unit 3 covers abstract data types and algorithm design; Unit 4 covers complexity, advanced design patterns and the limits of computation. The study score comes from coursework (20 per cent), a School-assessed Task (20 per cent) and a 2-hour exam (60 per cent).',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that carry the study design',
    lede: 'Reasoning about algorithms first, then the speed and accuracy that exam conditions demand.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', code: 'VCAL / 01', title: 'Data structures and algorithms', note: 'Stacks, queues, graphs, searching and sorting, each traced by hand before it is run: the ground Unit 3 is built on.' },
      { course: 'competitive-programming-for-teens-course', code: 'VCAL / 02', title: 'Competitive programming', note: 'Greedy, dynamic programming and backtracking under time pressure, the three design patterns Unit 4 asks students to tell apart.' },
      { course: 'python-complete-masterclass-teens', code: 'VCAL / 03', title: 'Python for teens', note: 'A very high-level language with dictionaries, sets and graph libraries, which is what the study design requires for implementation.' }
    ]
  },

  sections: [
    {
      id: 'study', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'Two units, six areas of study, one sequence',
      lede: 'The outline below comes from the VCAA study design for VCE Algorithmics (HESS), read on 7 October 2026. Units 3 and 4 cannot be split: the VCAA requires them as a sequence.',
      body: [
        { kind: 'table', caption: 'VCE Algorithmics (HESS): units and areas of study', head: ['Unit', 'Area of study', 'What it covers'], rows: [
          ['Unit 3: Algorithmic problem-solving', 'Data modelling with abstract data types', 'Sets, lists, arrays, dictionaries, stacks, queues, priority queues and graphs, plus decision trees and state graphs'],
          ['Unit 3', 'Algorithm design', 'Pseudocode, recursion, brute-force and greedy patterns, breadth-first and depth-first search, Prim, Dijkstra, Bellman-Ford, Floyd-Warshall and PageRank'],
          ['Unit 3', 'Applied algorithms', 'Choosing and justifying a combination of data types and algorithms for a real problem'],
          ['Unit 4: Principles of algorithmics', 'Formal algorithm analysis', 'Big-O, recurrence relations, the Master Theorem, and the P, NP, NP-Hard and NP-Complete classes'],
          ['Unit 4', 'Advanced algorithm design', 'Binary search, mergesort, quicksort, dynamic programming, backtracking and heuristics including A* and simulated annealing'],
          ['Unit 4', 'Computer science: past and present', 'Turing machines, the Halting Problem, the Chinese Room, support vector machines and multi-layer perceptrons']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The study design is blunt about its own priority: "The focus is not on coding but on ‘algorithmic thinking’." That sentence explains why strong programmers sometimes find Algorithmics harder than they expected. Writing a working Dijkstra is the easy half; explaining why it fails on a negative edge, and naming the algorithm that copes, is the half that earns marks.',
            'Each unit involves at least 50 hours of scheduled classroom instruction. The VCAA also lists assumed mathematics, including sets, recursion-generated sequences, exponents and logarithms, so a student whose algebra is shaky meets the complexity work in Unit 4 with a handicap.'
          ],
          right: [
            'Implementation still matters. The study design says students must implement algorithms "in a very high-level programming language that directly supports a graph ADT", which in practice usually means Python with a graph library. Students are not asked how a dictionary or priority queue is built inside the language, only how to choose and use one well.',
            'The final area of study reaches back to Hilbert, Church and Turing and forward to neural networks. It rewards students who can argue in prose as well as in pseudocode, because the Chinese Room and machine ethics are examined alongside forward propagation.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/algorithms-hess/vce-algorithmics-hess" rel="noopener" target="_blank">VCAA, VCE Algorithmics (HESS) study design page</a>; VCE Algorithmics (HESS) Study Design (accreditation from 1 January 2023), read on 7 October 2026.' }
      ]
    },
    {
      id: 'score', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'Sixty per cent in one 2-hour sitting',
      lede: 'The weightings and exam conditions below are quoted from the study design; the 2026 date and session come from the VCAA examination timetable, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'VCE Algorithmics (HESS) assessment, as the study design sets it', head: ['Component', 'Contribution to the study score', 'What it assesses'], rows: [
          ['Unit 3 School-assessed Coursework', '12 per cent', 'Unit 3 Outcomes 1 and 2: data modelling and algorithm design'],
          ['Unit 4 School-assessed Coursework', '8 per cent', 'Unit 4 Outcome 3: the history of computer science and modern machine learning'],
          ['School-assessed Task', '20 per cent', 'Unit 3 Outcome 3 with Unit 4 Outcomes 1 and 2: a designed solution, its complexity analysis and an improved design'],
          ['End-of-year examination', '60 per cent', 'All key knowledge and key skills from both units; 2 hours']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In 2026 the examination falls on Wednesday 4 November, in the session the VCAA timetable prints as 11:45 am to 2:00 pm. The study design sets the duration at 2 hours and says every key knowledge point and key skill from both units is examinable, so nothing can be left out on the assumption it will not appear.',
            'Because the exam is so heavy, revision should mirror its demands: reading unfamiliar pseudocode and executing it by hand, writing a recurrence for a recursive procedure and solving it with the stated Master Theorem, and arguing correctness by induction or contradiction in a few clear lines.'
          ],
          right: [
            'The School-assessed Task is unusual in that it spans both units. It starts with a data model and algorithm for an applied problem in Unit 3, continues with a formal time complexity analysis, and ends with an improved design and a comparison in Unit 4. A student who rushes the first design inherits a weak base for everything after it.',
            'The study design also notes that some universities may offer accelerated pathways to students who complete the study. That is the universities\' decision, not ours or the VCAA\'s, and no page here promises any pathway, score or ATAR.'
          ] },
        { kind: 'source', html: 'Sources: VCE Algorithmics (HESS) Study Design, assessment sections; <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">VCAA, 2026 VCE examination timetable</a>, checked on 7 October 2026.' }
      ]
    },
    {
      id: 'change', tint: 'tint', eyebrow: 'A worked problem from Unit 4',
      h2: 'When greedy gets the change-making problem wrong',
      lede: 'Unit 4 names it directly: dynamic programming algorithms that need no more than a single dimension array, "including the Fibonacci numbers and change-making problem". Here is that idea worked through on a coin system we invented for practice.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The problem', p: 'Given coin values and a target, use as few coins as possible. Our practice system has coins worth 1, 7 and 10, and every target from 1 to 100 has a solution because the 1 coin always fits.' },
          { h3: 'The greedy guess', p: 'Always take the largest coin that still fits. For a target of 14 that gives 10, then four 1s: five coins. It is fast and it feels sensible, which is exactly why it is dangerous.' },
          { h3: 'The dynamic programme', p: 'Fill an array fewest[0..t] where fewest[v] is the fewest coins for value v, built from smaller values. For 14 the array finds 7 plus 7: two coins.' }
        ] },
        { kind: 'table', caption: 'The single dimension array for targets 0 to 14, coins 1, 7 and 10 (our calculation)', head: ['Value v', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], rows: [
          ['fewest[v]', '0', '1', '2', '3', '4', '5', '6', '1', '2', '3', '1', '2', '3', '4', '2']
        ] },
        { kind: 'table', caption: 'Greedy against dynamic programming, targets 1 to 100, coins 1, 7 and 10 (our calculation)', head: ['Measure', 'Result'], rows: [
          ['Targets where greedy uses more coins than necessary', '27 of the 100'],
          ['First targets where greedy fails', '14, 15, 16, then 24, 25, 26, and so on'],
          ['Largest excess coins from greedy on one target', '3'],
          ['Array cells filled by the dynamic programme for a target of 100', '100, each checking 3 coins'],
          ['The six Australian coin denominations, treated the same way', 'Greedy never fails for any multiple of 5 cents up to 500']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The pattern in the table is the lesson. Greedy fails in runs of three because a 10 plus a few 1s keeps losing to two 7s, and it fails often enough that no one should trust it without a proof. Australian coins happen to form a system where greedy is always right, which is why the habit feels safe in a shop and is unsafe in an exam question that changes the coins.',
            'The dynamic programme also shows what the study design means by a single dimension array. Each cell depends only on cells to its left, so a student can fill it on paper in the exam, row by row, and read the answer from the last cell.'
          ],
          right: [
            'For exam answers the structure that scores is consistent: state the design pattern, give the recurrence in words or symbols (fewest[v] is one more than the smallest fewest[v minus c] over the coins c that fit), show a few cells, and state the time complexity in terms of the target and the number of coins.',
            'The same comparison is a model for the School-assessed Task\'s final stage, where an improved design must be compared with the original. Here the comparison is complete: greedy is faster but sometimes wrong; the array is correct for every target and still cheap.'
          ] },
        { kind: 'source', html: 'Dynamic programming wording quoted from the VCE Algorithmics (HESS) Study Design, Unit 4 Area of Study 2. Coin system, array and counts are our own, computed in Python on 7 October 2026.' }
      ]
    },
    {
      id: 'integrity', tint: '', eyebrow: 'The School-assessed Task',
      h2: 'Whose work the task has to be',
      lede: 'The VCAA accepts School-based assessment only when the teacher can attest to who did it. The wording below is quoted from the study design.',
      body: [
        { kind: 'table', caption: 'VCAA rules that shape how we help', head: ['Point', 'What the study design says'], rows: [
          ['Authentication', 'Work will be accepted only if the teacher can attest that, to the best of their knowledge, all unacknowledged work is the student’s own'],
          ['Coursework conditions', 'Tasks must be completed mainly in class and within a limited timeframe'],
          ['The SAT\'s first part', 'A data model and algorithm combination for a real-world or applied problem, with multiple solution options considered'],
          ['The SAT\'s later parts', 'A formal time complexity analysis, then an improved design compared with the original']
        ] },
        { kind: 'p', text: 'Our rule follows from that. We teach algorithm design, complexity analysis and proof with problems we write ourselves, like the coin system above. We talk about a student\'s task only in general terms, and we never design, write, analyse, edit or debug anything that will be submitted for assessment. A student who can explain every choice in their own task is also the student most likely to explain choices under exam conditions.' },
        { kind: 'source', html: 'Source: VCE Algorithmics (HESS) Study Design, authentication and School-assessed Task sections, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building towards Unit 3',
    h2: 'Four rungs before and during the study',
    lede: 'Most students meet Algorithmics in Year 12, sometimes in Year 11 as an acceleration. The ladder depends on how they reason, not which year they are in.',
    table: { caption: 'From confident coder to algorithmics student', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Before Unit 3', '1. Fluent tracing', 'Executes unfamiliar pseudocode by hand and records every variable without slipping'],
      ['Early Unit 3', '2. Modelling', 'Chooses a stack, queue, dictionary or graph for a problem and says why the others fit worse'],
      ['Late Unit 3', '3. Graph algorithms', 'Picks Dijkstra, Bellman-Ford or Floyd-Warshall for a stated problem and justifies the choice'],
      ['Unit 4', '4. Analysis', 'Writes a recurrence, solves it with the stated Master Theorem, and explains what the bound means']
    ] },
    left: { h3: 'If Unit 3 feels abstract', ps: [
      'The jump from writing programs to modelling problems is the usual stall point. Drawing the graph first, with labelled vertices and weighted edges, before writing a single line of pseudocode fixes most of it.',
      'Students who have only met loops benefit from a few weeks of recursion practice, because Unit 3 assumes recursion is comfortable before it builds on it.'
    ] },
    right: { h3: 'Beyond the study', ps: [
      'Students who enjoy the puzzle side can try the Australian Informatics Olympiad; our <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AIO and CAT preparation page</a> explains how it runs.',
      'The study\'s habits, proving correctness and estimating cost before coding, are the ones first-year computer science subjects ask for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Algorithmics students',
    lede: 'Grouped by the unit they support most. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Unit 3 foundations', sub: 'Data types and design', courses: [
        { code: 'VCAL / U3 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Abstract data types and the searches built on them, reasoned before coded.' },
        { code: 'VCAL / U3 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The implementation language most Victorian classes use, from loops to classes.' },
        { code: 'VCAL / U3 / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A typed second language that makes abstract data types explicit.' }
      ] },
      { num: 'II', h3: 'Unit 4 depth', sub: 'Complexity and design patterns', courses: [
        { code: 'VCAL / U4 / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Greedy, dynamic programming and backtracking, tested against hard cases.' },
        { code: 'VCAL / U4 / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms, university level', blurb: 'Recurrences and complexity at the depth first-year subjects expect.' },
        { code: 'VCAL / U4 / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Logarithms, induction and discrete maths for the analysis work.' }
      ] },
      { num: 'III', h3: 'The AI area of study', sub: 'Machine learning and its limits', courses: [
        { code: 'VCAL / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Training, overfitting and simple networks, built and evaluated honestly.' },
        { code: 'VCAL / AI / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The probability behind randomised search and data-driven algorithms.' },
        { code: 'VCAL / AI / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'For students who finish Unit 4 hungry for harder problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly classes, timed for Victoria',
    lede: 'Our teachers work from India, and Victoria runs ahead of them: four and a half hours in winter and five and a half during daylight saving, which the IANA time zone database places from Sunday 4 October 2026 to Sunday 4 April 2027. A 5 pm lesson in Melbourne therefore lands at 11.30 am India time in summer and 12.30 pm in winter, inside our teachers\' working day.',
    slots: [
      { time: 'Weekday after school', l: 'The common choice through Units 3 and 4.' },
      { time: 'Weekend morning', l: 'Longer sessions for proofs, recurrences or timed papers.' },
      { time: 'School holidays', l: 'Short intensives before the November exam.' }
    ],
    cells: [
      { h3: 'Our own problems', p: 'Every example is written by us, never taken from a student\'s assessed task.' },
      { h3: 'Hand execution drilled', p: 'Pseudocode traced on paper until reading it is as quick as reading prose.' },
      { h3: 'Exam-length answers', p: 'Short written arguments that name a pattern, justify it and state a bound.' },
      { h3: 'Senior groups of fifteen to twenty', p: 'Students at a matching level, each one explaining a solution aloud every week.' },
      { h3: 'Solo sessions', p: 'For one area of study that needs repair before the exam.' },
      { h3: 'Nothing guaranteed', p: 'No study score, ATAR or university offer is promised; the thinking and the outcome are the student\'s.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects only, none of them school assessment. More are in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied word for word from Google, exactly as families and students posted them.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee in US dollars, the same for every family outside India. There is no joining charge and nothing continues past the month you are in.',
    free: ['A full lesson with a teacher', 'A frank view of what needs work', 'No card details asked'],
    group: ['Fifteen to twenty students at one level', 'One teacher all term', 'Practice marked and talked through', 'A certificate when the course ends'],
    one: ['One teacher, one student', 'Aimed at the weakest area of study', 'Useful in the weeks before November']
  },

  faq: {
    eyebrow: 'Questions about the study',
    h2: 'Questions Algorithmics students ask',
    items: [
      { q: 'What is VCE Algorithmics (HESS)?', a: 'It is a Victorian Units 3 and 4 study, accredited from 1 January 2023, that teaches algorithmic thinking: modelling problems with abstract data types, designing algorithms, analysing their efficiency and exploring the limits of computation. HESS stands for Higher Education scored study, and the VCAA designs it to the standard of a first-year university subject.' },
      { q: 'How is the study score made up?', a: 'School-assessed Coursework contributes 20 per cent (12 from Unit 3 and 8 from Unit 4), the School-assessed Task 20 per cent, and the end-of-year examination 60 per cent.' },
      { q: 'When is the 2026 Algorithmics exam?', a: 'The VCAA timetable lists it on Wednesday 4 November 2026, in the session from 11:45 am to 2:00 pm. The study design sets the examination at 2 hours.' },
      { q: 'Do I need to be a strong programmer?', a: 'It helps, but the study design says the focus is on algorithmic thinking rather than coding. Students who can trace, model and argue tend to do better than students who can only write fast code.' },
      { q: 'Which programming language is used?', a: 'The study design asks for a very high-level language that directly supports a graph abstract data type. Python with a graph library is a common choice; your school decides.' },
      { q: 'What is the change-making problem?', a: 'Given coin values and a target amount, find the fewest coins that make the target. The study design names it as an example of dynamic programming with a single dimension array. Greedy algorithms solve it for some coin systems and fail for others.' },
      { q: 'Can I take Units 3 and 4 separately?', a: 'No. The VCAA requires Units 3 and 4 of Algorithmics to be taken as a sequence.' },
      { q: 'Will you help with my School-assessed Task?', a: 'We teach the skills the task needs using our own problems. We never design, write, analyse, edit or debug anything that will be submitted, because the VCAA accepts the work only if it is the student\'s own.' },
      { q: 'Does Algorithmics count towards university entry?', a: 'The study design notes that some universities may offer accelerated pathways to students who complete it. Admission rules belong to each university and to VTAC; we make no promise about scores, ATARs or offers.' },
      { q: 'What time of day suits Victorian students?', a: 'Late afternoon in Victoria suits most senior students, and it falls in the middle of our teachers\' day. The weekly time is agreed together after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Victorian and Australian students',
    lede: 'The Victorian school picture, competitions beside the study, and other senior computing courses.',
    items: [
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Victoria\'s school side and the AI agent skills Melbourne teens ask for.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Coding, maths and AI contests through the year.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'Informatics olympiad preparation', p: 'The AIO, for students who want harder algorithm problems.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'The New South Wales senior computing course, for comparison.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state, every age, and how online lessons fit time zones.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'The logarithms and proof that Unit 4 leans on.' }
    ]
  },

  start: {
    h2: 'Begin with a free class on the hard part',
    lede: 'Tell us the unit, the area of study and the idea that is not landing. The free class works on that idea with our own problems, never with assessed work.',
    readFirst: 'Prefer to read first? Every syllabus is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our teaching method is set out on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the Victorian context sits on the <a class="ag-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>.',
    note: 'WhatsApp is the quickest way to reach us. The +91 prefix is Indian because the school runs from India; no Victorian office is claimed anywhere.',
    formNote: 'No card and no commitment. We reply once to set the class up.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the reasoning; the assessed work stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcal .ag-hero-grid { gap: clamp(1rem, 3.2vw, 2.8rem); }
.ag-root.ag-vcal .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-vcal .ag-capsule { border-left-width: 5px; }
.ag-root.ag-vcal .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vcal .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vcal .ag-table td { line-height: 1.5; }
.ag-root.ag-vcal .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-vcal .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Algorithmics (HESS) Study Design, read on 7 October 2026: Units 3 and 4 accredited from 1 January 2023, taken as a sequence; Unit 3 Algorithmic problem-solving, Unit 4 Principles of algorithmics; each unit at least 50 hours of scheduled classroom instruction; School-assessed Coursework 20 per cent (Unit 3 12, Unit 4 8), School-assessed Task 20 per cent, examination 60 per cent, duration 2 hours. 2026 VCE examination timetable: Algorithmics (HESS) on Wednesday 4 November, 11:45 am to 2:00 pm.',
    localProject: 'The change-making problem from Unit 4 Area of Study 2: an invented coin system of 1, 7 and 10, greedy choice against dynamic programming in a single dimension array. Greedy fails on 27 of the targets 1 to 100 (first at 14, 15, 16; largest excess 3 coins); the array finds 2 coins for 14 where greedy uses 5. The six Australian coin denominations never defeat greedy for multiples of 5 cents up to 500. All computed in Python on 7 October 2026.',
    requiredMentions: ['Higher Education scored study', 'Algorithmic problem-solving', 'Principles of algorithmics', 'change-making problem', 'single dimension array', 'Wednesday 4 November', 'accelerated pathways', 'very high-level programming language', 'Master Theorem'],
    sources: [
      { claim: 'VCAA, VCE Algorithmics (HESS) study design page: accreditation period from 2023 and the study design file.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/algorithms-hess/vce-algorithmics-hess' },
      { claim: 'VCE Algorithmics (HESS) Study Design: accreditation from 1 January 2023, units, areas of study, key knowledge, assessment weightings, authentication and the 2-hour examination.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023AlgorithmicsSD.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: Algorithmics (HESS) on Wednesday 4 November, 11:45 am to 2:00 pm.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027; offsets of 4 hours 30 minutes and 5 hours 30 minutes ahead of India.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'Any statement that Algorithmics is accredited until a stated end date: the study design page gives only "from 2023", so no end date is printed.',
      'Which universities offer accelerated pathways, and on what terms: not read at any university, so no university is named.',
      'Any study score distribution, cohort size or scaling outcome: not quoted, and no score or ATAR is promised.',
      'Exam section structure or question counts: the examination specifications were not read, so only the study design\'s duration and weighting are given.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to design, write, analyse, edit or debug assessed work: refused, stated on the page.'
    ]
  }
};
