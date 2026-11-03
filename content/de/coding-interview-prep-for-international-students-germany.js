'use strict';
// Coding interview prep for international students in Germany (ag- English door, Germany cluster P2 row DE043).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: international university students in Germany preparing for technical interviews (internships, working-student
// posts, graduate roles) who want to practise thinking aloud in English. No job, salary, visa or work-permit claims;
// the page sends work-rule questions to the university's international office.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-interview-prep-for-
// international-students-germany/):
//  - Wissenschaft weltoffen (DAAD/DZHW), Im Fokus page fokus_herkunft.txt, fetched 2 Nov 2026: "Rund 426.200
//    internationale Studierende"; "6% mehr als im Wintersemester 2024/25"; "14,8% aller Studierenden"; "aus Indien
//    (14,6%) und China (9,7%)"; "seit dem Wintersemester 2019/20 um 137% gestiegen"; India the main origin "seit dem
//    Wintersemester 2022/23".
//  - Wissenschaft weltoffen kompakt 2026 (EN PDF, text via PDFKit, wiwe_kompakt.txt): WS 2024/25 "402,083 (+6%
//    year-on-year)"; "The overwhelming majority (94%) of international students were aiming for a degree in Germany";
//    Fig. 11 bachelor's 34.5%, master's 46.7%; Fig. 12 engineering 42.7%, law, economics and social sciences 25.3%,
//    mathematics and natural sciences 11.9%; "A total of 2,381 English-language study programmes ... as of July 2025";
//    "1,928 cases (81%) master's programmes". Shares only; no absolute count for India is printed (brief rule).
//  - Python docs, Time complexity of built-in types (tc-official.txt): dict "key in d" O(1) average; "In the worst case,
//    when every key hashes to the same value, each of the O(1) operations below instead takes O(n) time." time docs:
//    perf_counter is the "clock with the highest available resolution to measure a short duration".
// Our own code (scratchpad de/w/G6/cip_v1.py, python3 -I, Python 3.14 on our laptop): "(3, 4) (3, 4)"; n=1000 nested
// 0.008 s, dictionary 0.00006 s; n=2000 0.031 s, 0.00016 s; n=4000 0.126 s, 0.00024 s.
// Lesson family: brute force first, then trade memory for time, and prove it by doubling n.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import random',
  'import time',
  '',
  'def pair_slow(prices, budget):',
  '    for i in range(len(prices)):',
  '        for j in range(i + 1, len(prices)):',
  '            if prices[i] + prices[j] == budget:',
  '                return i, j',
  '    return None',
  '',
  'def pair_fast(prices, budget):',
  '    seen = {}',
  '    for j, price in enumerate(prices):',
  '        if budget - price in seen:',
  '            return seen[budget - price], j',
  '        seen[price] = j',
  '    return None',
  '',
  'print(pair_slow([12, 7, 30, 5, 18], 23), pair_fast([12, 7, 30, 5, 18], 23))',
  '',
  'random.seed(2026)',
  'for n in (1000, 2000, 4000):',
  '    prices = [random.randrange(1, 10**6) * 2 for _ in range(n)]',
  '    budget = 1                       # odd: no pair of even numbers can reach it',
  '    start = time.perf_counter()',
  '    pair_slow(prices, budget)',
  '    slow = time.perf_counter() - start',
  '    start = time.perf_counter()',
  '    pair_fast(prices, budget)',
  '    fast = time.perf_counter() - start',
  '    print(f"n={n}: nested loops {slow:.3f} s, dictionary {fast:.5f} s")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding interview prep for international students' },
  slug: 'coding-interview-prep-for-international-students-germany',
  code: 'cip',
  accent: '#256D6B',
  accentRationale: 'Coding interview prep for international students in Germany: a deep teal #256D6B, calm like a whiteboard marker, kept apart from the AI plum, the IB violet and the hub green; contrast on the paper #FBF8F2 about 4.9:1 and at least 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding interview prep for international students in Germany',
  title: 'Coding Interview Prep for International Students in Germany',
  description: 'Live coding interview practice in English for international students in Germany: data structures, algorithms, thinking aloud and mock interviews, one to one.',
  ogDescription: 'Technical interview preparation for international students at German universities, taught live in English: a five-step way to answer any coding question, and a classic problem solved twice and timed.',
  twitterDescription: 'Coding interview practice in English for international students in Germany, with mock interviews and real timings.',
  pageName: 'Coding Interview Prep for International Students in Germany',
  webPageDescription: 'A guide for international students at universities in Germany preparing for technical interviews: who studies in Germany according to Wissenschaft weltoffen, what a coding interview tests, an original pair-sum problem solved by brute force and with a dictionary and timed, and live practice in English.',
  courseDescription: 'Live online coding interview preparation in English for international university students in Germany: data structures and algorithms in Python or Java, complexity, thinking aloud and timed mock interviews, one to one or in a group of fifteen to twenty.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding interview prep',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#who', label: 'Students' },
    { href: '#method', label: 'Steps' },
    { href: '#problem', label: 'Problem' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; University students &middot; Technical interviews',
  h1: 'Coding interview prep for international students in Germany',
  lede: 'A technical interview is a strange exam. You solve a problem you have never seen, out loud, in a language that may not be your first, while someone watches. Many international students at German universities can already code; what they lack is practice at that performance. This page looks at who studies in Germany, sets out a five-step method for any coding question, solves one classic problem two ways and times both, and explains how our one-to-one mock interviews work.',
  secondaryCta: { href: '#method', label: 'See the five steps' },
  wa: 'Hello Modern Age Coders, I am an international student in Germany preparing for coding interviews. Could I book a free first session in English?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; mock interviews with written feedback',
  spec: [
    ['For', 'University students and graduates'],
    ['Languages', 'Python or Java'],
    ['Covers', 'Data structures, algorithms, complexity'],
    ['Format', 'One to one, or groups of fifteen to twenty'],
    ['German times', 'Mornings, lunchtimes, Saturdays'],
    ['First session', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding interview prep for international students in Germany at Modern Age Coders is live online practice in English: data structures and algorithms in Python or Java, Big O reasoning, explaining your thinking aloud and timed mock interviews with written feedback, through our Data Structures and Algorithms course. One regular mentor matches your pace and accent, one to one or in a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for interview preparation',
    lede: 'The algorithms course at the centre of interview practice, and a Python and a Java course for students who want their main language solid first.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', code: 'CIP / 01', title: 'Data Structures and Algorithms', note: 'Arrays, hashing, trees, graphs and dynamic programming, with timed problems and mock interviews in Python or Java.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CIP / 02', title: 'Python Masterclass', note: 'For students whose degree used another language: idiomatic Python, fast enough to write under interview pressure.' },
      { course: 'complete-java-programming-masterclass-college', code: 'CIP / 03', title: 'Java for university students', note: 'Core Java with collections and object design, for students interviewing where Java is the main language.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'International students in Germany',
      h2: 'How many international students are there in Germany, and what do they study?',
      lede: 'About 426,200 in winter semester 2025/26, according to Wissenschaft weltoffen, published by the DAAD with the DZHW. Engineering is by far the largest subject group.',
      body: [
        { kind: 'two',
          leftH3: 'The headline numbers',
          left: [
            'Wissenschaft weltoffen counts around 426,200 international students at German universities in winter semester 2025/26, 6% more than a year earlier and 14.8% of all students in Germany.',
            'In winter semester 2024/25 India was the largest country of origin with 14.6% of international students, ahead of China with 9.7%. The number of Indian students rose by 137% from winter semester 2019/20, and India has been the main country of origin since winter semester 2022/23.'
          ],
          rightH3: 'What they are studying for',
          right: [
            'The 2026 edition of Wissenschaft weltoffen kompakt says 94% of international students in winter semester 2024/25 were aiming for a degree in Germany. In its breakdown by type of degree, 46.7% were working towards a master\'s degree and 34.5% towards a bachelor\'s.',
            'It also counts 2,381 English-language study programmes at state-recognised universities in July 2025, of which 1,928, or 81%, were master\'s programmes.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'International students in Germany by subject group, winter semester 2024/25 (largest groups)', head: ['Subject group', 'Share of international students'], rows: [
          ['Engineering', '42.7%'],
          ['Law, economics and social sciences', '25.3%'],
          ['Mathematics and natural sciences', '11.9%'],
          ['Humanities', '8.3%']
        ] },
        { kind: 'source', html: 'Sources: Wissenschaft weltoffen (DAAD and DZHW), Im Fokus, Internationale Studierende nach Herkunftsländern, read 2 November 2026; Wissenschaft weltoffen kompakt 2026, figures 6, 10, 11, 12 and 36, based on the Federal Statistical Office student statistics. We quote shares as published and do not combine them. We are not connected with the DAAD or the DZHW.' },
        { kind: 'p', mt: true, html: 'For a technical interview the subject matters less than it seems. Engineering, physics and economics students often write code in their degree, in Python, MATLAB or R, but rarely practise the classic interview topics: hashing, recursion, graphs and the cost of an algorithm as the input grows. Those topics can be learnt in a few months by anyone who already programs a little, and they are what this page is about.' }
      ]
    },
    {
      id: 'method',
      tint: 'tint',
      eyebrow: 'A method for any question',
      h2: 'How should you answer a coding interview question?',
      lede: 'With a routine you have practised so often that it runs even when you are nervous. This is the five-step routine we teach; it is ours, and interviewers will not ask for it by name, but they will notice it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Restate the problem.</strong> Say it back in your own words and ask one question about the input: can it be empty, can values repeat, how large can it get?',
          '<strong>Work two small examples by hand.</strong> One normal, one awkward. Write the expected output before any code.',
          '<strong>Give the brute-force answer first.</strong> Describe it in one sentence and state its cost. A correct slow answer on the board beats a clever one in your head.',
          '<strong>Improve it, and say what you trade.</strong> Usually the trade is memory for time: store something you have already seen so that you never look for it twice.',
          '<strong>Test aloud.</strong> Run your two examples through the finished code line by line, then name one case you have not handled.'
        ] },
        { kind: 'p', mt: true, html: 'Step 3 is the one candidates skip, especially strong ones. They sense that the nested loop is too slow, stay silent while hunting for something better, and the interviewer sees a minute of nothing. Saying "the simple version checks every pair, which is quadratic; let me write that and then improve it" shows the two things an interview is trying to see: that you can get to a correct answer, and that you know what it costs.' }
      ]
    },
    {
      id: 'problem',
      eyebrow: 'Our worked problem',
      h2: 'What does the classic pair-sum problem teach about complexity?',
      lede: 'Given a list of prices and a budget, find two different items whose prices add up exactly to the budget. It is one of the oldest interview questions, and it shows the whole five-step routine in twenty lines.',
      body: [
        { kind: 'code', label: 'Our solution: brute force, then a dictionary, both timed', lang: 'Python', code: V1, note: 'On our laptop with Python 3.14 it printed <code>(3, 4) (3, 4)</code>, then <code>n=1000: nested loops 0.008 s, dictionary 0.00006 s</code>, <code>n=2000: nested loops 0.031 s, dictionary 0.00016 s</code> and <code>n=4000: nested loops 0.126 s, dictionary 0.00024 s</code>. Your times will differ; the pattern will not.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'What happens when n doubles (our timings above)', head: ['n', 'Nested loops', 'Dictionary'], rows: [
          ['1,000', '0.008 s', '0.00006 s'],
          ['2,000', '0.031 s', '0.00016 s'],
          ['4,000', '0.126 s', '0.00024 s']
        ] },
        { kind: 'source', html: 'Our own code and timings, measured with time.perf_counter, which the Python documentation describes as the clock with the highest available resolution for short durations. The budget is odd and every price even, so neither function ever finds a pair: that forces the worst case for both.' },
        { kind: 'p', mt: true, html: 'Read the nested-loop column as an interviewer would. Each time n doubles, the time roughly quadruples: 0.008, 0.031, 0.126. That is what quadratic means in practice, and it is far more convincing than reciting "O(n squared)". The dictionary column grows much more gently, because each price is looked at once and each lookup is, on average, constant time. The Python documentation gives <code>key in d</code> as O(1) on average and adds a warning worth repeating in an interview: in the worst case, when every key hashes to the same value, those operations take O(n) time.' },
        { kind: 'two', mt: true,
          leftH3: 'The trade, stated plainly',
          left: [
            'The fast version keeps a dictionary of every price seen so far, so it uses memory that grows with n. The slow version uses almost none. Saying that out loud, unprompted, is step 4 of the routine.',
            'If the interviewer then says memory is tight, the next idea is to sort the list and walk two pointers inwards from both ends: n log n time, little extra memory.'
          ],
          rightH3: 'Follow-up questions to expect',
          right: [
            'What if the list is already sorted? What if you need all pairs, not one? What if the same item may not be used twice, and prices can repeat? Each changes the code a little, and our mock interviews practise exactly these turns.',
            'Notice the check order in <code>pair_fast</code>: it looks for the partner before storing the current price, so an item can never pair with itself.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'How do you think aloud in an English technical interview?',
      lede: 'With a small set of phrases you have said many times before the day. Fluency in an interview is mostly rehearsal, not vocabulary.',
      body: [
        { kind: 'table', numCols: [], caption: 'Phrases we practise for each step (ours)', head: ['Moment', 'A phrase that works'], rows: [
          ['Clarifying', '"Before I start, can the list be empty, and can prices repeat?"'],
          ['Buying time', '"Let me try a small example first so I am sure I understand."'],
          ['Brute force', '"The simple approach checks every pair. That is quadratic, but it is correct."'],
          ['Improving', '"If I remember what I have seen, I can check each item once, at the cost of extra memory."'],
          ['Testing', '"Let me run the first example through the code line by line."'],
          ['Stuck', '"I am not sure yet. Here is what I know, and here is where I am stuck."']
        ] },
        { kind: 'p', mt: true, html: 'Our mentors work in English every day with learners from many countries, and they correct the things that cost marks rather than accent or grammar: unclear variable names said aloud, long silences, and answers that start with code before the plan. Classes are live and in English only. Students who would like to practise the same answer in two ways, first slowly, then at interview speed, can ask for that in one-to-one sessions.' }
      ]
    },
    {
      id: 'scope',
      eyebrow: 'What we do and do not do',
      h2: 'Will interview practice get me a job or a working-student post?',
      lede: 'We cannot promise that, and nobody honest can. What practice changes is how you perform in the technical round.',
      body: [
        { kind: 'two',
          leftH3: 'What we do',
          left: [
            'We teach data structures and algorithms, run timed mock interviews in Python or Java, and give written feedback after each one on correctness, complexity, testing and how clearly you explained.',
            'We also review your solutions to practice problems you have done alone, and help you build a short list of projects you can talk about with confidence.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not place students with employers, we make no claims about offers or pay, and we give no advice on residence permits or on the rules for working while studying. Your university\'s international office and the official authorities answer those questions.',
            'We do not solve take-home tests or online assessments for anyone. Practising on our own problems is the honest route, and the one that holds up in the live round.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Session times',
      h2: 'When can a student in Germany book interview practice?',
      lede: 'Students often have free mornings and lunch breaks between lectures, which suits a mentor in India well: India is 4 h 30 ahead in winter and 3 h 30 ahead in summer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample session times for students in Germany, with Indian time', head: ['Germany', 'India until 28 March 2027', 'India from 28 March 2027'], rows: [
          ['08:00', '12:30', '11:30'],
          ['12:30', '17:00', '16:00'],
          ['Saturday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'German time follows the Einheitenzeitgesetz: MEZ (UTC+1) in winter, MESZ (UTC+2) in summer, with the switch back on 25 October 2026 and forward on 28 March 2027. India keeps UTC+5:30. Sample times only.' },
        { kind: 'p', mt: true, html: 'Before an interview date, many students book two or three mock interviews in the final week. Tell the mentor the date and the language the company uses, and the sessions are planned backwards from it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From brute force to a calm mock interview',
    lede: 'Our own stages for interview preparation, used to plan sessions and to report progress.',
    table: { caption: 'Interview preparation stages (ours)', head: ['Stage', 'Weeks, typically', 'You can'], rows: [
      ['1. Foundations', '1 to 3', 'Use lists, dictionaries and sets fluently and state the cost of each operation'],
      ['2. Patterns', '3 to 8', 'Recognise two pointers, sliding windows, hashing and recursion in a new problem'],
      ['3. Trees and graphs', '6 to 12', 'Write breadth-first and depth-first search without notes'],
      ['4. Dynamic programming', '10 to 16', 'Turn a recursive idea into a table and explain why it is faster'],
      ['5. Mock interviews', 'Throughout', 'Solve a medium problem in 30 minutes while explaining every step']
    ] },
    left: { h3: 'In the interview', ps: [
      'A correct slow answer, written down, is your safety net. Write it first.',
      'Double n in your head: if the time quadruples, say "quadratic".'
    ] },
    right: { h3: 'Before the interview', ps: [
      'Practise aloud. Silent practice trains a different skill.',
      'Ask the company which language you may use, and use that one in practice.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for students and graduates in Germany',
    lede: 'Taught live in English with a regular mentor, one to one or in a group.',
    bands: [
      { num: 'I', h3: 'Engineering basics', sub: 'Adults', courses: [
        { code: 'CIP / ENG / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Branches, pull requests and a clean history.' },
        { code: 'CIP / ENG / 02', slug: 'mysql-database-complete-masterclass-college', title: 'SQL and databases', blurb: 'Queries and joins, a common second round.' },
        { code: 'CIP / ENG / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'A project worth talking about.' }
      ] },
      { num: 'II', h3: 'Data and maths', sub: 'Adults', courses: [
        { code: 'CIP / DATA / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation and applied AI', blurb: 'Scripts that do real work.' },
        { code: 'CIP / DATA / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For data roles and probability puzzles.' },
        { code: 'CIP / DATA / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data analytics', blurb: 'The algebra behind data work.' }
      ] },
      { num: 'III', h3: 'Building with AI', sub: 'Ages 18 and up', courses: [
        { code: 'CIP / AI / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Codex and Claude Code, reviewed and tested by you.' },
        { code: 'CIP / AI / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe coding for adults', blurb: 'Full-stack projects with AI help, checked properly.' },
        { code: 'CIP / AI / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certification from the Python Institute.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How sessions run',
    h2: 'How live interview practice works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Morning', l: 'Early sessions before lectures, German time.' },
      { time: 'Lunchtime', l: 'A midday slot between seminars.' },
      { time: 'One to one', l: 'A time fixed with the mentor, more often near an interview.' }
    ],
    cells: [
      { h3: 'Shared editor', p: 'You type, the mentor watches, as in a real round.' },
      { h3: 'Timed problems', p: 'A clock on every mock, from 20 to 45 minutes.' },
      { h3: 'Spoken English', p: 'Phrases practised until they come easily.' },
      { h3: 'Written feedback', p: 'Notes after each mock on what to fix next.' },
      { h3: 'Your language', p: 'Python or Java, whichever you will use.' },
      { h3: 'One to one first', p: 'Most students choose private sessions; groups exist too.' }
    ]
  },

  projectsH2: 'Projects from our learners',
  projectsLede: 'Work our learners elsewhere in the world have built during their courses; <a class="ag-inline-link" href="/student-labs">student labs</a> has more examples.',
  reviewsLede: 'Learners and parents reviewed us on Google; their words are unchanged here.',

  fees: {
    h2: 'Fees for coding interview preparation',
    lede: 'You pay one monthly fee for eight live sessions. The euro amount shown uses the European Central Bank reference rate, but the payment is collected in US dollars and converted by your bank, whose own rate decides the exact figure you see.',
    free: ['A free first session', 'A short problem to find your level', 'No card needed'],
    group: ['Fifteen to twenty learners', 'One regular mentor', 'Two sessions a week', 'Monthly, stop at any time'],
    one: ['One learner, one mentor', 'Mock interviews on your dates', 'Python or Java']
  },

  faq: {
    eyebrow: 'International students ask',
    h2: 'Coding interview prep in Germany: questions from students',
    items: [
      { q: 'Are the sessions in German?', a: 'No. All sessions are live and in English only. The mentor adjusts to your pace and accent and helps you phrase answers clearly in English.' },
      { q: 'Which programming language should I use?', a: 'The one you will use in the interview, usually Python or Java. If the company lets you choose, pick the language you write fastest and most correctly.' },
      { q: 'I study engineering, not computer science. Can I still prepare?', a: 'Yes. If you can write simple programs, the interview topics can be learnt step by step. Wissenschaft weltoffen reports engineering as the largest subject group of international students in Germany, 42.7% in winter semester 2024/25.' },
      { q: 'How long does preparation take?', a: 'It depends on your start. Students who already program comfortably often need eight to twelve weeks of regular practice for the main patterns; complete beginners should take a Python or Java course first.' },
      { q: 'Do you guarantee a job or a working-student post?', a: 'No. We make no promises about offers or pay. We help you perform better in the technical round, which is the part practice can change.' },
      { q: 'Can you advise me on work permits or the rules for working while studying?', a: 'No. We give no legal, visa or immigration advice. Your university\'s international office and the official authorities are the right places to ask.' },
      { q: 'Will you help with an online assessment I have been sent?', a: 'No. We do not solve live assessments or take-home tests for anyone. We prepare you with our own practice problems beforehand.' },
      { q: 'When can I book sessions?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Students often like German mornings and lunchtimes.' },
      { q: 'How is the fee paid?', a: 'The page shows euro, worked out from the European Central Bank reference rate, and the payment is taken in US dollars; your bank converts it, so the final figure can vary slightly. The first session is free.' },
      { q: 'Are the mock interviews recorded?', a: 'Sessions are live. Your written feedback after each mock interview is the record we keep for you, so you can see what improved from one to the next.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for students and graduates.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for Germany.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms course', p: 'The course behind this page.' },
      { href: '/java-dsa-course', label: 'Java DSA course', p: 'Algorithms practised in Java.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Models built from scratch, in English.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'Where interview topics fit in the bigger picture.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live session looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first interview practice session',
    lede: 'The mentor sets one short problem, watches how you approach it, and tells you honestly which stage to start from and how many weeks that may take, in English and at your pace.',
    readFirst: 'You may want to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look at <a class="ag-inline-link" href="/courses">all courses</a> first.',
    note: 'Sessions are live online, in English, with mentors working in India. WhatsApp, in English, reaches us fastest.',
    formNote: 'No card is needed for the free first session.'
  },

  footer: {
    cols: [
      { h4: 'Interview prep', links: [
        { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms' },
        { href: '/java-dsa-course', label: 'Java DSA course' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'Write the slow answer first'
  },

  personalityCss: `
.ag-root.ag-cip .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cip .ag-capsule { border-left-width: 4px; }
.ag-root.ag-cip .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cip .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-cip .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Wissenschaft weltoffen (DAAD and DZHW), Im Fokus page on countries of origin and Wissenschaft weltoffen kompakt 2026; Python documentation, Time complexity of built-in types and the time module; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Brute force, then a dictionary: an original pair-sum problem solved with nested loops and with a dictionary, both timed with time.perf_counter as n doubles from 1,000 to 4,000 (nested 0.008, 0.031, 0.126 s; dictionary 0.00006, 0.00016, 0.00024 s). Lesson family: brute force first, then trade memory for time, and prove it by doubling n.',
    requiredMentions: ['n=4000: nested loops 0.126 s, dictionary 0.00024 s', 'n=1000: nested loops 0.008 s, dictionary 0.00006 s', 'pair_fast', 'the time roughly quadruples: 0.008, 0.031, 0.126', '2,381 English-language study programmes', 'aiming for a degree in Germany', 'so an item can never pair with itself', 'Write the slow answer first'],
    sources: [
      { claim: 'About 426,200 international students in WS 2025/26; India 14.6% and China 9.7% in WS 2024/25; India +137% since WS 2019/20.', url: 'https://www.wissenschaft-weltoffen.de/de/im-fokus/internationale-studierende-in-deutschland-nach-hochschulart-und-wichtigsten-herkunftslaendern-seit-dem-wintersemester-2014-15/' },
      { claim: 'WS 2024/25 degree types, subject groups, 94% aiming for a degree, 2,381 English-language programmes.', url: 'https://www.wissenschaft-weltoffen.de/content/uploads/2026/05/wiwe_kompakt_2026_EN_BF_ver2.pdf' },
      { claim: 'dict key lookup O(1) average, O(n) worst case.', url: 'https://docs.python.org/3/builtins/time-complexity.html' },
      { claim: 'time.perf_counter description.', url: 'https://docs.python.org/3/library/time.html' }
    ],
    rejectedClaims: [
      'Absolute number of Indian students in Germany: brief rule, shares and totals only.',
      'Any job, offer, salary or placement claim: none.',
      'Any visa, residence permit or student work-rule advice: none, the page refers to the international office.',
      'Stay rates after graduation (Schlaglicht B): migration-adjacent, left out.',
      'German-language teaching: sessions are in English only.'
    ]
  }
};
