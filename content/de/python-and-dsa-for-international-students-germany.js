'use strict';
// Python and DSA for international students in Germany (ag- English door, Germany cluster P2 row DE044).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: international students at German universities who use Python in their degree (engineering, science, data)
// and want to write it properly: the cost of each built-in operation, read from the official Python documentation, and
// the data structures that follow from it. No job, salary, visa or work-permit content.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/python-and-dsa-for-international-
// students-germany/, fetched 3 Nov 2026; docs header "Python 3.15.2 documentation"):
//  - docs.python.org/3/builtins/time-complexity.html (tc-official.txt): list "x in l" O(n); set "x in s" O(1); "In the
//    worst case, O(1) operations instead take O(n) time"; list sort O(n log n), "Sorting is adaptive and input that is
//    already sorted or reverse-sorted takes only O(n) comparisons"; pop or insert at index k shifts elements, "The worst
//    case is index 0"; "If you need to add or remove at both ends, consider using a collections.deque instead."
//  - bisect docs: "maintaining a list in sorted order without having to sort the list after each insertion".
//  - stdtypes: "The sort() method is guaranteed to be stable."; "Changed in version 3.7: Dictionary order is guaranteed
//    to be insertion order." Sorting HOWTO: "The Timsort algorithm used in Python".
//  - time docs: perf_counter, "clock with the highest available resolution to measure a short duration".
//  - Wissenschaft weltoffen (DAAD/DZHW) Im Fokus (fokus_herkunft.txt): about 426,200 international students in WS
//    2025/26, 14.8% of all students; India 14.6% in WS 2024/25. kompakt 2026 EN (ver2, matches the June 2026
//    corrigendum): mathematics and natural sciences 11.9% of international students in WS 2024/25; share of
//    English-language programmes by subject group 2025: mathematics and natural sciences 21.2%, engineering 13.2%.
//    Shares only; no absolute Indian count.
// Our own code (scratchpad de/w/G6/pdi_v1.py, python3 -I, Python 3.14 on our laptop): building the sorted list 4.04 ms,
// the set 0.74 ms; 2,000 checks against 50,000 IDs: list 326.43 ms, sorted list + bisect 0.46 ms, set 0.13 ms; all
// found 1001.
// Lesson family: look up the cost of each operation before you choose the data structure.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import bisect',
  'import random',
  'import time',
  '',
  'random.seed(44)',
  'register = random.sample(range(10_000_000, 99_999_999), 50_000)',
  'checks = random.sample(register, 1_000) + [random.randrange(10_000_000, 99_999_999) for _ in range(1_000)]',
  '',
  'def in_list(ids, queries):',
  '    return sum(1 for q in queries if q in ids)',
  '',
  'def in_sorted(ids, queries):',
  '    found = 0',
  '    for q in queries:',
  '        i = bisect.bisect_left(ids, q)',
  '        if i < len(ids) and ids[i] == q:',
  '            found += 1',
  '    return found',
  '',
  'def in_set(ids, queries):',
  '    return sum(1 for q in queries if q in ids)',
  '',
  'start = time.perf_counter()',
  'as_sorted = sorted(register)',
  'print(f"building the sorted list {(time.perf_counter() - start) * 1000:.2f} ms")',
  'start = time.perf_counter()',
  'as_set = set(register)',
  'print(f"building the set         {(time.perf_counter() - start) * 1000:.2f} ms")',
  'for label, func, data in [("list, x in l", in_list, register),',
  '                          ("sorted list + bisect", in_sorted, as_sorted),',
  '                          ("set, x in s", in_set, as_set)]:',
  '    start = time.perf_counter()',
  '    found = func(data, checks)',
  '    took = time.perf_counter() - start',
  '    print(f"{label:22} found {found:3}  {took * 1000:8.2f} ms")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Python and DSA for international students' },
  slug: 'python-and-dsa-for-international-students-germany',
  code: 'pdi',
  accent: '#88283C',
  accentRationale: 'Python and DSA for international students in Germany: a claret #88283C, a warm red for a page about speed, apart from the interview teal, the AI plum and the hub green; contrast on the paper #FBF8F2 about 7.1:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Python and DSA for international students in Germany',
  title: 'Python and DSA for International Students in Germany',
  description: 'Live Python and data structures classes in English for international students in Germany: lists, sets, dictionaries, sorting and algorithms, timed and explained.',
  ogDescription: 'Python and data structures for international students at German universities, taught live in English, built on the official cost of every Python operation and a lookup task timed three ways.',
  twitterDescription: 'Python and DSA in English for international students in Germany, with real timings and the official complexity table.',
  pageName: 'Python and DSA for International Students in Germany',
  webPageDescription: 'A guide for international students in Germany who use Python in their degree: what the official Python documentation says each operation costs, why the right data structure matters, an original lookup task timed with a list, a sorted list and a set, and live classes in English.',
  courseDescription: 'Live online Python and data structures and algorithms classes in English for international university students in Germany: idiomatic Python, lists, dictionaries, sets, sorting, searching, recursion, trees and graphs, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python and DSA',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#degree', label: 'Degree' },
    { href: '#costs', label: 'Costs' },
    { href: '#lookup', label: 'Task' },
    { href: '#path', label: 'Path' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; University students &middot; Python and algorithms',
  h1: 'Python and DSA for international students in Germany',
  lede: 'Plenty of students at German universities write Python every week: for a lab report, a simulation, a thesis dataset. Far fewer know why one version of their script takes a second and another takes a minute. The answer is almost always a data structure. This page lays out what the official Python documentation says each common operation costs, runs one lookup three ways on 50,000 records so you can see the difference, and describes how our live classes in English take a student from working scripts to real data structures and algorithms.',
  secondaryCta: { href: '#lookup', label: 'See the timed task' },
  wa: 'Hello Modern Age Coders, I am an international student in Germany and want to learn Python and data structures properly. Could I book a free first class in English?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Python taught with the cost of every step',
  spec: [
    ['For', 'University students and graduates'],
    ['Starts with', 'Python, written well'],
    ['Then', 'Data structures and algorithms'],
    ['Format', 'Groups of fifteen to twenty, or one to one'],
    ['German times', 'Mornings, early afternoons, Sundays'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For international students in Germany, Modern Age Coders teaches Python and DSA in live online classes in English: idiomatic Python first, then data structures and algorithms (lists, dictionaries, sets, sorting, searching, recursion, trees and graphs), always with the cost of each operation measured and explained, through our Python Masterclass and our DSA course. The same mentor stays with you and adapts to your pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for international students in Germany',
    lede: 'Python from first principles, the data structures and algorithms that follow, and a certification route for students who want an external proof of their Python.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PDI / 01', title: 'Python Masterclass', note: 'From scripts to clean, tested Python: functions, files, classes, comprehensions and the standard library.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'PDI / 02', title: 'Data Structures and Algorithms', note: 'Hashing, sorting, searching, recursion, trees, graphs and dynamic programming, each timed and explained.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PDI / 03', title: 'PCEP and PCAP preparation', note: 'For students who want a Python certificate alongside their degree, prepared with our own practice questions.' }
    ]
  },

  sections: [
    {
      id: 'degree',
      eyebrow: 'Python at German universities',
      h2: 'Why do international students in Germany need more than basic Python?',
      lede: 'Because their degrees already ask for it. Most international students in Germany are in engineering, the sciences or economics, where Python is a working tool, not a course of its own.',
      body: [
        { kind: 'two',
          leftH3: 'Who is studying',
          left: [
            'The DAAD and DZHW report series Wissenschaft weltoffen puts the number at around 426,200 international students in Germany in winter semester 2025/26, 14.8% of everyone studying in the country. A year earlier, in winter semester 2024/25, 14.6% of them came from India, more than from any other country.',
            'The 2026 kompakt edition puts mathematics and natural sciences at 11.9% of international students in winter semester 2024/25, behind engineering and behind law, economics and social sciences.'
          ],
          rightH3: 'Where English meets the subject',
          right: [
            'The same edition looks at English-language study programmes in 2025 by subject group. In mathematics and natural sciences, 21.2% of programmes were in English; in engineering, 13.2%.',
            'So many students do their lectures in English, their code in Python, and their exams on topics where a slow script is a real problem: a simulation that has to run overnight, or a thesis dataset that will not fit the way they first wrote it.'
          ] },
        { kind: 'source', html: 'Sources: Wissenschaft weltoffen, Im Fokus, Internationale Studierende nach Herkunftsländern; Wissenschaft weltoffen kompakt 2026, English edition (June 2026 version, figures 6, 10, 12 and 37), read 2 and 3 November 2026. Shares appear exactly as published. Modern Age Coders has no link to the DAAD, the DZHW or any university.' },
        { kind: 'p', mt: true, html: 'The gap we see most often is not syntax. Students can write a loop, read a CSV file and plot a chart. What they have rarely been taught is that <code>x in some_list</code> and <code>x in some_set</code> look identical on the screen and behave completely differently once the data grows. That is a data-structures question, and it is where this course starts.' }
      ]
    },
    {
      id: 'costs',
      tint: 'tint',
      eyebrow: 'The official cost table',
      h2: 'How fast are Python lists, sets and dictionaries?',
      lede: 'The Python documentation publishes a page on the time complexity of built-in types. These are the rows our students use every week.',
      body: [
        { kind: 'table', numCols: [], caption: 'Selected operations and their cost, from the Python documentation', head: ['Operation', 'Type', 'Cost'], rows: [
          ['<code>x in l</code>, membership test', 'list', 'O(n)'],
          ['<code>l[k]</code>, get item by index', 'list', 'O(1)'],
          ['<code>l.pop(k)</code> or <code>l.insert(k, x)</code>', 'list', 'O(n minus k): index 0 is the worst case'],
          ['<code>l.sort()</code>', 'list', 'O(n log n); already sorted input takes O(n) comparisons'],
          ['<code>x in s</code>, membership test', 'set', 'O(1) on average'],
          ['<code>key in d</code>, <code>d[key]</code>', 'dict', 'O(1) on average']
        ] },
        { kind: 'source', html: 'Source: Python documentation, Time complexity of built-in types (docs.python.org, Python 3.15.2 documentation), read 3 November 2026. The page warns that set and dict costs are average cases: in the worst case, when keys collide, O(1) operations take O(n) time.' },
        { kind: 'two', mt: true,
          leftH3: 'Three facts worth remembering',
          left: [
            'Removing from the front of a list is slow, because every remaining element moves one place. The documentation suggests <code>collections.deque</code> when you need to add or remove at both ends.',
            'The <code>sort()</code> method is guaranteed to be stable, says the documentation: records with equal keys keep their order, so you can sort by a second key first and then by the main one.'
          ],
          rightH3: 'And two that surprise people',
          right: [
            'Dictionaries keep insertion order. The documentation records that this became a guarantee in Python 3.7, so older advice to avoid relying on it is out of date.',
            'The <code>bisect</code> module keeps a list sorted without sorting it again after each insertion, and finds things in it by halving the search range again and again.'
          ] }
      ]
    },
    {
      id: 'lookup',
      eyebrow: 'Our timed task',
      h2: 'How much faster is a set than a list for looking things up?',
      lede: 'On our laptop, for 2,000 lookups among 50,000 IDs, about 2,500 times faster. Here is the program, so you can measure it on yours.',
      body: [
        { kind: 'p', html: '<strong>Our task.</strong> A course register holds 50,000 eight-digit student IDs. Today\'s attendance list has 2,000 IDs: half are taken from the register, half are random. How many attendance IDs are on the register? We answer three ways: search the plain list, search a sorted copy with <code>bisect</code>, and search a set. All IDs are invented.' },
        { kind: 'code', label: 'Our program: one question, three data structures', lang: 'Python', code: V1, note: 'With Python 3.14 on our laptop it printed <code>building the sorted list 4.04 ms</code> and <code>building the set 0.74 ms</code>, then <code>list, x in l found 1001 326.43 ms</code>, <code>sorted list + bisect found 1001 0.46 ms</code> and <code>set, x in s found 1001 0.13 ms</code>. Times on your machine will differ.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: '2,000 lookups among 50,000 IDs (our timings)', head: ['Method', 'Found', 'Time'], rows: [
          ['Plain list, <code>x in l</code>', '1,001', '326.43 ms'],
          ['Sorted list and <code>bisect</code>', '1,001', '0.46 ms'],
          ['Set, <code>x in s</code>', '1,001', '0.13 ms'],
          ['Building the sorted list', 'n/a', '4.04 ms'],
          ['Building the set', 'n/a', '0.74 ms']
        ] },
        { kind: 'source', html: 'Our own code, seed 44. The timer is time.perf_counter, documented by Python as its highest-resolution clock for measuring short spans. 1,001 rather than 1,000 are found because one of the random IDs happens to be on the register.' },
        { kind: 'p', mt: true, html: 'All three agree on the answer, which is the first thing to check. Then read the times against the cost table. The list checks IDs one by one, O(n) per lookup, and it shows: about a third of a second. The sorted list halves its search range each step, O(log n), so about sixteen comparisons per lookup among 50,000 IDs. The set goes, on average, straight to the right place. The build lines matter too: sorting cost 4.04 ms and building the set 0.74 ms, so even for a single batch of 2,000 lookups both pay for themselves many times over. For one single lookup, they would not, and the plain list would be the sensible choice.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run it.</strong> Note your own five times. Is the ratio between list and set similar to ours?',
          '<strong>Double the register.</strong> Make it 100,000 IDs and predict, before running, which line roughly doubles and which barely moves.',
          '<strong>Find the break-even.</strong> Reduce the attendance list until building the set costs more than it saves. How many lookups is that?',
          '<strong>Explain it in two sentences,</strong> in English, as if to a lab partner who wrote the list version.'
        ] }
      ]
    },
    {
      id: 'path',
      eyebrow: 'Course path',
      h2: 'What does a Python and DSA course cover, step by step?',
      lede: 'Our path runs from writing Python well to the classic algorithms. Each step ends with something measured, not only something that works.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our Python and DSA path for university students (ours)', head: ['Block', 'Topics', 'Measured by'], rows: [
          ['1. Python properly', 'Functions, files, comprehensions, classes, tests', 'A script a classmate can run and understand'],
          ['2. Built-in structures', 'Lists, tuples, dicts, sets, deque, their costs', 'The timed lookup task above, on your own data'],
          ['3. Sorting and searching', 'Stable sorting, keys, bisect, binary search by hand', 'Explaining why sorted input sorts faster'],
          ['4. Recursion and divide and conquer', 'Recursion, merge sort, memoisation', 'Turning a slow recursion into a fast one'],
          ['5. Trees and graphs', 'Heaps, binary trees, BFS, DFS, shortest paths', 'A route or dependency problem from your field'],
          ['6. Dynamic programming', 'Tables, overlapping subproblems', 'Writing the table before the code']
        ] },
        { kind: 'p', mt: true, html: 'Students from engineering and science often bring their own data: sensor logs, measurement series, simulation output. Where they can share it, we use it in block 2 and block 5, because a structure chosen for your own thesis data is remembered far longer than one chosen for an exercise. Students who also want technical interview practice can continue into our <a class="ag-inline-link" href="/data-structures-and-algorithms-course">data structures and algorithms course</a> with timed mock problems.' },
        { kind: 'p', mt: true, html: 'We do not do coursework, theses or graded assignments for anyone; university rules on own work apply, and the point is that you can do it. Questions about visas, residence or student jobs go to the university\'s international office; we do not advise on them.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are Python and DSA classes in German time?',
      lede: 'Students often have mornings and early afternoons free between lectures. German mornings land around midday for our mentors in India, whose clock leads Germany\'s by four and a half hours in winter and three and a half in summer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample class times in German time, with the mentor\'s Indian time', head: ['German time', 'Indian time, winter until 28 March 2027', 'Indian time, summer from 28 March 2027'], rows: [
          ['09:15', '13:45', '12:45'],
          ['13:15', '17:45', '16:45'],
          ['Sunday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Germany runs on MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, as set by the Einheitenzeitgesetz; the winter switch was on 25 October 2026 and the summer switch is on 28 March 2027. India is UTC+5:30 the whole year. Sample slots, not fixed groups.' },
        { kind: 'p', mt: true, html: 'During exam periods many students pause group classes or move to fewer one-to-one sessions. Tell the mentor your semester dates and the plan follows them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a working script to a structure you can defend',
    lede: 'The checkpoints we use to place students and report progress; they are our own.',
    table: { caption: 'Python and DSA checkpoints (ours)', head: ['Checkpoint', 'Usually by', 'You can'], rows: [
      ['1. Clean Python', 'Week 4', 'Write functions with tests and read a file without copying code'],
      ['2. Costs', 'Week 8', 'Name the cost of the operations in your own script'],
      ['3. Searching', 'Week 12', 'Write binary search by hand and use bisect correctly'],
      ['4. Recursion', 'Month 4', 'Write and speed up a recursive solution'],
      ['5. Graphs', 'Month 6', 'Model a real problem as a graph and search it']
    ] },
    left: { h3: 'At your desk', ps: [
      'Before you optimise, measure with time.perf_counter.',
      'If you write x in something inside a loop, check what something is.'
    ] },
    right: { h3: 'In your degree', ps: [
      'Your thesis data deserves the right structure on day one, not week twelve.',
      'Read the official complexity table once; it saves hours later.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for students in Germany',
    lede: 'Live, in English, with the same mentor each time, one to one or in a group.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'Adults', courses: [
        { code: 'PDI / PROG / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for university students', blurb: 'A typed language beside Python.' },
        { code: 'PDI / PROG / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control for thesis code.' },
        { code: 'PDI / PROG / 03', slug: 'python-web-development-django-flask-course', title: 'Python web development', blurb: 'Django and Flask for real apps.' }
      ] },
      { num: 'II', h3: 'Data and maths', sub: 'Adults', courses: [
        { code: 'PDI / DATA / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'When data outgrows a CSV file.' },
        { code: 'PDI / DATA / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Uncertainty in measured data.' },
        { code: 'PDI / DATA / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analytics', blurb: 'Linear algebra and statistics for data.' }
      ] },
      { num: 'III', h3: 'Automation and AI', sub: 'Adults', courses: [
        { code: 'PDI / AI / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and applied AI', blurb: 'Scripts that clean data and run reports.' },
        { code: 'PDI / AI / 02', slug: 'ai-ml-masterclass-teens', title: 'Machine learning foundations', blurb: 'Models from first principles, open from 13.' },
        { code: 'PDI / AI / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'For adults: agents whose code you check.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Python and DSA classes work from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Morning', l: 'Classes before or between lectures, German time.' },
      { time: 'Early afternoon', l: 'A slot that ends before evening seminars.' },
      { time: 'One to one', l: 'A time agreed with the mentor around your semester.' }
    ],
    cells: [
      { h3: 'Measured code', p: 'Every structure timed, not just described.' },
      { h3: 'Official sources', p: 'Costs checked against the Python documentation.' },
      { h3: 'Plain English', p: 'Explanations in clear, unhurried English.' },
      { h3: 'Your data', p: 'Examples from your own subject where possible.' },
      { h3: 'One mentor', p: 'The same person through the whole path.' },
      { h3: 'Small or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our learners',
  projectsLede: 'A selection of work from our learners in other countries; the full set is on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Students and parents reviewed us on Google; we show their reviews unedited.',

  fees: {
    h2: 'Fees for Python and DSA classes',
    lede: 'Eight live classes a month for one monthly fee. We print it in euro using the European Central Bank reference rate, though the card is charged in US dollars; your bank converts the amount, and its rate on the day sets the final euro figure.',
    free: ['A free first class', 'A short Python task to find your level', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular mentor', 'Two classes a week', 'Monthly, pause in exam periods'],
    one: ['One student, one mentor', 'Paced around your semester', 'Your own data where possible']
  },

  faq: {
    eyebrow: 'International students ask',
    h2: 'Python and DSA classes in Germany: questions we hear',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only. The mentor follows your pace and accent, and technical words are explained the first time they come up.' },
      { q: 'Do I need to know Python already?', a: 'No. The Python Masterclass starts from the beginning. Students who already write scripts are placed further along after the free first class.' },
      { q: 'What is DSA?', a: 'Data structures and algorithms: how to store data so that the operations you need are fast, and step-by-step methods such as sorting, searching and graph search. It is what makes the difference between a script that works and one that still works at scale.' },
      { q: 'Is a set really faster than a list?', a: 'For membership tests, yes, on average. The Python documentation gives x in l as O(n) for a list and x in s as O(1) on average for a set. In our timed task a set answered 2,000 lookups among 50,000 IDs in 0.13 ms against 326.43 ms for the list.' },
      { q: 'Can you help with my thesis or graded coursework?', a: 'We teach the skills and can use your data as examples where your university allows it. We never write graded work, code or text that you submit.' },
      { q: 'Do you give advice on visas or working while studying?', a: 'No. We give no legal, visa or work-rule advice. Your university\'s international office is the place to ask.' },
      { q: 'Which Python version do you teach?', a: 'A current Python 3 release. The official documentation we quote on this page is the Python 3.15 documentation; the timings were measured with Python 3.14.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. University students often choose mornings or early afternoons.' },
      { q: 'How is the fee charged?', a: 'It is listed in euro from the European Central Bank reference rate and charged in US dollars; your bank converts it, so the statement may differ slightly. The first class is free.' },
      { q: 'Is this the same as interview preparation?', a: 'It overlaps. This path puts Python and the structures first; interview preparation adds timed problems and spoken practice. Many students do this path first and the interview practice after it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for students in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages in one place.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms course', p: 'The full DSA course.' },
      { href: '/java-dsa-course', label: 'Java DSA course', p: 'The same ideas in Java.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Python models on German open data.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'Where DSA fits among other skills.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first Python and DSA class',
    lede: 'The mentor asks what you study and what Python you already write, gives a short task, and suggests where on the path to begin, in English and at your pace.',
    readFirst: 'To look around first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'Every class is live online and in English, with a mentor based in India. Send us a WhatsApp message in English for the fastest answer.',
    formNote: 'The free first class needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Python and DSA', links: [
        { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms' },
        { href: '/java-dsa-course', label: 'Java DSA course' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Check the cost before the code'
  },

  personalityCss: `
.ag-root.ag-pdi .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-pdi .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pdi .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pdi .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-pdi .ag-table code { white-space: nowrap; }
`,

  dossier: {
    curriculumAuthority: 'Python documentation (Time complexity of built-in types, bisect, Built-in Types, Sorting HOWTO, time; Python 3.15.2 documentation); Wissenschaft weltoffen Im Fokus and kompakt 2026 (English, June 2026 version); Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'One question, three structures: an original task looking up 2,000 attendance IDs among 50,000 register IDs (all invented) with a list (326.43 ms), a sorted list and bisect (0.46 ms) and a set (0.13 ms), plus build costs (4.04 ms and 0.74 ms), read against the official Python cost table. Lesson family: look up the cost of each operation before you choose the data structure.',
    requiredMentions: ['building the sorted list 4.04 ms', 'set, x in s found 1001 0.13 ms', 'list, x in l found 1001 326.43 ms', 'one of the random IDs happens to be on the register', 'about sixteen comparisons per lookup', 'this became a guarantee in Python 3.7', 'mathematics and natural sciences, 21.2% of programmes were in English', 'Check the cost before the code'],
    sources: [
      { claim: 'Costs of list, set and dict operations; deque advice; sort complexity.', url: 'https://docs.python.org/3/builtins/time-complexity.html' },
      { claim: 'bisect keeps a list sorted without re-sorting.', url: 'https://docs.python.org/3/library/bisect.html' },
      { claim: 'sort() is stable; dict order guaranteed since 3.7.', url: 'https://docs.python.org/3/library/stdtypes.html' },
      { claim: 'About 426,200 international students WS 2025/26, 14.8%; India 14.6% WS 2024/25.', url: 'https://www.wissenschaft-weltoffen.de/de/im-fokus/internationale-studierende-in-deutschland-nach-hochschulart-und-wichtigsten-herkunftslaendern-seit-dem-wintersemester-2014-15/' },
      { claim: 'Subject groups and English-language programme shares.', url: 'https://www.wissenschaft-weltoffen.de/content/uploads/2026/05/wiwe_kompakt_2026_EN_BF_ver2.pdf' }
    ],
    rejectedClaims: [
      'Absolute number of Indian students: brief rule, shares only.',
      'Any job, salary, visa or work-permit claim: none.',
      'Timings as universal facts: labelled as our laptop only.',
      'Any affiliation with the Python Software Foundation, the DAAD or a university: none.',
      'German-language teaching: classes are in English only.'
    ]
  }
};
