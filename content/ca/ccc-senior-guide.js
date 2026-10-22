'use strict';
// CCC Senior guide (ag- contest door; Canada cluster Plan 2, row 39).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Deeper spoke under /canadian-computing-competition-ccc-prep and beside /ccc-junior-guide: this page is CCC SENIOR only.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/cemc/ and src-pilots/ccc-junior-guide/):
//  - cemc.uwaterloo.ca/contests/ccc (ccc.txt): 2027 dates (the Americas Wednesday, February 17, 2027; elsewhere
//    Thursday, February 18, 2027; ordering Thursday, February 11, 2027); "Senior level - any participant with
//    intermediate to advanced programming skills."; Senior ladder Q1-2 "Basic algorithms" "(e.g. sorting,
//    searching)", Q3-4 "More advanced algorithms" "(e.g. careful counting, more advanced mathematical reasoning)", Q5
//    "IOI level question"; "Each question is worth 15."; subtasks: "for later questions, a score might be assigned for
//    input that only efficient solutions can solve within the time limits"; languages; "CCO participants must use
//    C++."; perfect-score caveat for Python or Java and "there is always at least one choice of programming language
//    for which it is possible to achieve a perfect score using the correct algorithm(s)/data structure(s)"; "The names
//    of some top-scoring official participants appear in student honour rolls for the Senior competition."; "Every
//    participant scoring in the top 25% of all competitors receives a Certificate of Distinction."; official participant
//    "born on or after July 1, 2007" and living in Canada; 2026 Senior "Average (Mean)" 15.56, "Certificate of
//    Distinction Cutoff" 26, "Number of Contestants" 2439; about 20 top official Senior participants invited to the CCO;
//    books Competitive Programming (Halim and Halim) and Competitive Programmers Handbook (Laaksonen), linked to
//    cpbook.net and cses.fi/book.
//  - cccgrader.com/rules.pdf (src-pilots/ccc-junior-guide/ccc-rules.txt): time and memory limits, feedback rules ("For
//    each subtask of a problem, if all test cases are correct, this feedback is provided for each test case.
//    Otherwise, feedback is provided for all test cases up to and including the first test case that is not
//    correct."), verdict names (correct, compilation error, time-limit exceeded, run-time error, wrong answer),
//    "Access to other source or starter code is not allowed during the competition."
//  - cccgrader.com/sample_soln.pdf (ccc-sample-soln.txt): C++ "Compiler Version: GCC 11.4.0", "Compiler options: -O2
//    -std=c++17 -static"; Python 3 "Pypy3 7.3.9 (running Python 3.8.13)". The 2012 sample problem is NOT reproduced.
// Our own material, labelled on the page: three original Senior-style problems (Rink Bookings, Trail Count, Ice Time
// Passes) with Python 3.8 and C++ solutions; each solution run on its sample (outputs 3; 6 2; 22) with CPython 3.13
// and with g++ 6.3 using -std=c++14 on 22 October 2026, Python parsed with feature_version (3, 8); all three
// stress-tested against brute force on 300 random small cases each with 0 failures (stress.py in
// src-pilots/ccc-senior-guide/); the slow O(N x T) first attempt; the complexity budget table (our rule of thumb);
// the skills map; the season plan; the arithmetic 26 = 15 + 11, 26 / 75 = about 34.7 percent, 15.56 / 75 = about
// 20.7 percent.
// Lesson family: choosing an algorithm from the input limits (efficiency first).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const P1PY = "# Our practice problem S-A: Rink Bookings (not a CEMC problem)\nimport sys\n\ndef main():\n    data = sys.stdin.buffer.read().split()\n    n = int(data[0])\n    events = []\n    for i in range(n):\n        s = int(data[1 + 2 * i])\n        e = int(data[2 + 2 * i])\n        events.append((s, 1))    # a booking starts\n        events.append((e, -1))   # a booking ends\n    # at equal times, -1 sorts before +1: an end at 5 frees the ice\n    # before a start at 5 takes it\n    events.sort()\n    now = peak = 0\n    for _, change in events:\n        now += change\n        if now > peak:\n            peak = now\n    print(peak)\n\nmain()";

const P1CPP = "// Our practice problem S-A: Rink Bookings (not a CEMC problem)\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<pair<long long, int>> events;\n    events.reserve(2 * n);\n    for (int i = 0; i < n; i++) {\n        long long s, e;\n        cin >> s >> e;\n        events.push_back({s, 1});    // a booking starts\n        events.push_back({e, -1});   // a booking ends\n    }\n    sort(events.begin(), events.end());  // -1 before +1 at equal times\n    int now = 0, peak = 0;\n    for (auto &ev : events) {\n        now += ev.second;\n        peak = max(peak, now);\n    }\n    cout << peak << \"\\n\";\n    return 0;\n}";

const P1IO = "Sample input:\n5\n1 4\n2 5\n4 7\n5 6\n3 4\n\nSample output:\n3";

const P1SLOW = "# Our slow first attempt at Rink Bookings: correct, but O(N x T)\nn = int(input())\nbookings = [tuple(map(int, input().split())) for _ in range(n)]\npeak = 0\nfor t in range(min(s for s, e in bookings), max(e for s, e in bookings)):\n    here = sum(1 for s, e in bookings if s <= t < e)\n    peak = max(peak, here)\nprint(peak)";

const P2PY = "# Our practice problem S-B: Trail Count (not a CEMC problem)\nimport sys\nimport heapq\n\nMOD = 1000000007\n\ndef main():\n    data = sys.stdin.buffer.read().split()\n    n, m = int(data[0]), int(data[1])\n    adj = [[] for _ in range(n + 1)]\n    pos = 2\n    for _ in range(m):\n        a, b, w = int(data[pos]), int(data[pos + 1]), int(data[pos + 2])\n        pos += 3\n        adj[a].append((b, w))\n        adj[b].append((a, w))\n    INF = float(\"inf\")\n    dist = [INF] * (n + 1)\n    ways = [0] * (n + 1)\n    dist[1] = 0\n    ways[1] = 1\n    heap = [(0, 1)]\n    while heap:\n        d, u = heapq.heappop(heap)\n        if d > dist[u]:\n            continue                      # an old, longer entry\n        for v, w in adj[u]:\n            nd = d + w\n            if nd < dist[v]:              # a strictly shorter route\n                dist[v] = nd\n                ways[v] = ways[u]\n                heapq.heappush(heap, (nd, v))\n            elif nd == dist[v]:           # another route of equal length\n                ways[v] = (ways[v] + ways[u]) % MOD\n    print(dist[n], ways[n])\n\nmain()";

const P2CPP = "// Our practice problem S-B: Trail Count (not a CEMC problem)\n#include <bits/stdc++.h>\nusing namespace std;\n\nconst long long MOD = 1000000007LL;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n, m;\n    cin >> n >> m;\n    vector<vector<pair<int, int>>> adj(n + 1);\n    for (int i = 0; i < m; i++) {\n        int a, b, w;\n        cin >> a >> b >> w;\n        adj[a].push_back({b, w});\n        adj[b].push_back({a, w});\n    }\n    const long long INF = LLONG_MAX;\n    vector<long long> dist(n + 1, INF), ways(n + 1, 0);\n    priority_queue<pair<long long, int>, vector<pair<long long, int>>,\n                   greater<pair<long long, int>>> pq;\n    dist[1] = 0;\n    ways[1] = 1;\n    pq.push({0, 1});\n    while (!pq.empty()) {\n        long long d = pq.top().first;\n        int u = pq.top().second;\n        pq.pop();\n        if (d > dist[u]) continue;            // an old, longer entry\n        for (auto &edge : adj[u]) {\n            int v = edge.first;\n            long long nd = d + edge.second;\n            if (nd < dist[v]) {               // a strictly shorter route\n                dist[v] = nd;\n                ways[v] = ways[u];\n                pq.push({nd, v});\n            } else if (nd == dist[v]) {       // another route of equal length\n                ways[v] = (ways[v] + ways[u]) % MOD;\n            }\n        }\n    }\n    cout << dist[n] << \" \" << ways[n] << \"\\n\";\n    return 0;\n}";

const P2IO = "Sample input:\n5 6\n1 2 2\n1 3 2\n2 4 3\n3 4 3\n4 5 1\n1 5 7\n\nSample output:\n6 2";

const P3PY = "# Our practice problem S-C: Ice Time Passes (not a CEMC problem)\nimport sys\n\ndef main():\n    data = sys.stdin.buffer.read().split()\n    d = int(data[0])\n    days = set(int(x) for x in data[1:1 + d])\n    day_pass, week_pass, month_pass = (int(x) for x in data[1 + d:4 + d])\n    last = max(days)\n    # fewest[t] = fewest tokens to cover every practice day from 1 to t\n    fewest = [0] * (last + 1)\n    for t in range(1, last + 1):\n        if t not in days:\n            fewest[t] = fewest[t - 1]         # nothing to cover today\n            continue\n        fewest[t] = min(fewest[t - 1] + day_pass,\n                      fewest[max(0, t - 7)] + week_pass,\n                      fewest[max(0, t - 30)] + month_pass)\n    print(fewest[last])\n\nmain()";

const P3CPP = "// Our practice problem S-C: Ice Time Passes (not a CEMC problem)\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    int d;\n    cin >> d;\n    vector<int> days(d);\n    for (int &x : days) cin >> x;\n    long long dayPass, weekPass, monthPass;\n    cin >> dayPass >> weekPass >> monthPass;\n    int last = *max_element(days.begin(), days.end());\n    vector<bool> practice(last + 1, false);\n    for (int x : days) practice[x] = true;\n    // fewest[t] = fewest tokens to cover every practice day from 1 to t\n    vector<long long> fewest(last + 1, 0);\n    for (int t = 1; t <= last; t++) {\n        if (!practice[t]) { fewest[t] = fewest[t - 1]; continue; }\n        fewest[t] = min({fewest[t - 1] + dayPass,\n                       fewest[max(0, t - 7)] + weekPass,\n                       fewest[max(0, t - 30)] + monthPass});\n    }\n    cout << fewest[last] << \"\\n\";\n    return 0;\n}";

const P3IO = "Sample input:\n9\n1 2 3 4 5 9 10 25 31\n3 10 24\n\nSample output:\n22";

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'CCC Senior from CEMC\'s 2027 page: what each question band tests, the efficiency the grader demands, and three original problems with C++ and Python solutions.' },
  slug: 'ccc-senior-guide',
  code: 'csg',
  accent: '#187054',
  accentRationale: 'CCC Senior guide, Canada: a deep teal green #187054, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 5.69 on the paper #FBF8F2 and above 4.8 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'CCC Senior guide',
  title: 'CCC Senior 2027 Guide: Graphs, DP and Efficient Code',
  description: 'CCC Senior 2027 from CEMC\'s own page: what S1 to S5 test, how efficiency earns subtask marks, and three original problems solved in C++ and Python.',
  ogDescription: 'The Senior level of the 2027 Canadian Computing Competition: CEMC\'s question bands, the 2026 Senior numbers, the grader\'s limits, and three Senior-style problems we wrote, solved in C++ and Python.',
  twitterDescription: 'CCC Senior 2027: question bands, efficiency, and three original problems with C++ and Python solutions.',
  pageName: 'CCC Senior Guide',
  webPageDescription: 'A guide for Canadian students to the Senior level of the Canadian Computing Competition, built from CEMC\'s 2027 contest page and the CCC grader documents, with original algorithm problems and solutions in two languages.',
  courseDescription: 'Live online preparation for the Senior level of the Canadian Computing Competition, covering graphs, dynamic programming and efficient code, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'CCC Senior guide',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#senior', label: 'Senior 2027' },
    { href: '#skills', label: 'Skills' },
    { href: '#budget', label: 'Efficiency' },
    { href: '#problems', label: 'Three problems' },
    { href: '#season', label: 'Season plan' }
  ],
  eyebrow: 'Canada &middot; Canadian Computing Competition &middot; Senior level',
  h1: 'CCC Senior guide for 2027',
  lede: 'At Senior level, the Canadian Computing Competition stops asking whether a student can program and starts asking whether the program is fast enough. The five problems climb from sorting and searching to what CEMC calls an "IOI level question", and later problems hold back marks for solutions that only an efficient algorithm can earn inside the grader\'s time limit. This guide works from CEMC\'s 2027 contest page and the CCC Online Grader documents. It sets out what each band of questions asks for, how to read input limits as a hint about the intended algorithm, and three Senior-style problems we wrote, each solved in both C++ and Python and tested against a brute-force checker.',
  secondaryCta: { href: '#problems', label: 'Go to the three problems' },
  wa: 'Hello Modern Age Coders, my child in Canada is preparing for CCC Senior. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; problems and solutions on this page are our own, tested before publishing',
  spec: [
    ['Organiser', 'CEMC, University of Waterloo'],
    ['Senior 2027', 'Wednesday 17 February 2027'],
    ['Problems', 'S1 to S5, 15 marks each'],
    ['Hardest band', 'S5, at IOI level'],
    ['Limits', '3 s and 512 MB per test'],
    ['Next step', 'About 20 invited to the CCO'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CCC Senior is the harder Canadian Computing Competition paper from Waterloo\'s CEMC: five algorithm problems in three hours on 17 February 2027, from sorting up to IOI level, for fluent coders ready for graphs and dynamic programming. Modern Age Coders teaches it live online, one to one or in a batch, in its CCC Junior and Senior Preparation course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for a CCC Senior writer',
    lede: 'The first is the CCC course itself, with a Senior track. The second deepens the algorithms; the third is for students switching to the language the CCO requires.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'CSG / 01', title: 'CCC Junior and Senior Preparation', note: 'Its Senior track: graphs, dynamic programming and timed Senior papers, paced to the 17 February 2027 contest.' },
      { course: 'competitive-programming-for-teens-course', code: 'CSG / 02', title: 'Competitive programming for teens', note: 'For teenagers ready for contest algorithms. The toolkit behind S3 to S5: shortest paths, DP, data structures, complexity.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'CSG / 03', title: 'C++ for teens', note: 'From the first line of C++, for teens. Suits a Python writer moving to C++, the only language CEMC allows at the CCO.' }
    ]
  },

  sections: [
    {
      id: 'senior', tint: 'tint', eyebrow: 'Senior in 2027',
      h2: 'What CEMC publishes about the 2027 Senior paper',
      lede: 'CEMC runs one CCC with two papers. The format is shared; what changes at Senior is the material. The rows below come from CEMC\'s CCC page and the grader\'s sample-programs document, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'CCC Senior 2027, from CEMC (read 22 October 2026)', head: ['Point', 'What CEMC says'], rows: [
          ['Who Senior is for', '"Senior level - any participant with intermediate to advanced programming skills."'],
          ['Date', 'Wednesday 17 February 2027 in North and South America; Thursday 18 February 2027 elsewhere.'],
          ['S1 and S2', '"Basic algorithms" "(e.g. sorting, searching)"'],
          ['S3 and S4', '"More advanced algorithms" "(e.g. careful counting, more advanced mathematical reasoning)"'],
          ['S5', '"IOI level question"'],
          ['Marks', 'Five problems at 15 each, so 75 in all, with partial scores by subtask.'],
          ['Efficiency subtasks', 'For later questions, "a score might be assigned for input that only efficient solutions can solve within the time limits".'],
          ['C++ on the grader', '"Compiler Version: GCC 11.4.0", "Compiler options: -O2 -std=c++17 -static"'],
          ['Python 3 on the grader', 'PyPy3 7.3.9, running Python 3.8.13'],
          ['Recognition', '"The names of some top-scoring official participants appear in student honour rolls for the Senior competition."'],
          ['Onward', 'CEMC invites about 20 of the top official Senior participants from schools in Canada to the Canadian Computing Olympiad each spring.']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, Canadian Computing Competition</a> and <a class="ag-inline-link" href="https://cccgrader.com/sample_soln.pdf" rel="noopener" target="_blank">CCC sample programs and language details</a>, read 22 October 2026. Modern Age Coders has no connection with CEMC or the University of Waterloo. For the Junior paper, see our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'The 2026 Senior numbers, read honestly',
          left: [
            'CEMC\'s table for 2026 gives the Senior paper an average of 15.56 out of 75, a Certificate of Distinction cutoff of 26, and 2439 contestants. Our reading, labelled as ours: the mean is about 20.7 percent of the paper (15.56 / 75), close to one full problem, and the cutoff is one full problem plus 11 more marks (26 = 15 + 11), about 34.7 percent.',
            'Those figures say Senior is hard by design. A student who solves S1 completely and collects partial marks on S2 or S3 was in distinction territory in 2026. CEMC sets the cutoff to "the top 25% of all competitors", so it moves with each year\'s paper.'
          ],
          rightH3: 'Who should write Senior',
          right: [
            'CEMC leaves the choice of level to each student, whatever the grade. Our test is practical: if the student can finish the first two Senior problems from recent past papers inside about an hour, Senior is the right paper.',
            'A student who is close but unsure can open both papers, but the three hours are shared and only the higher score counts, so we settle the level before the day rather than in the room.'
          ] }
      ]
    },
    {
      id: 'skills', tint: 'deep', eyebrow: 'Skills',
      h2: 'The skills each band of Senior questions draws on',
      lede: 'CEMC describes the bands in a few words each. This map, which is ours, expands those words into the techniques that Senior problems have tended to need, and how we teach each one.',
      body: [
        { kind: 'table', caption: 'Senior skills by question band (our map of CEMC\'s outline)', head: ['Band', 'Techniques a student should own', 'Typical warning sign in practice'], rows: [
          ['S1 and S2', 'Sorting with a custom key, binary search, prefix sums, two pointers, simulation with care, sets and maps', 'A correct answer that times out on the largest inputs'],
          ['S3', 'Breadth-first and depth-first search, grids as graphs, greedy choices with a proof, counting with care', 'Missing a case such as an empty grid row or a repeated value'],
          ['S4', 'Weighted shortest paths, dynamic programming on sequences and grids, modular arithmetic, union-find', 'An answer that overflows 32-bit integers'],
          ['S5', 'Harder dynamic programming, data structures such as segment trees, clever reformulations', 'Only the first subtask solved, with no idea of the full method']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Graphs are the backbone',
          left: [
            'Many Senior problems are graph problems in disguise: rooms and doors, stations and tracks, cells of a grid. The first skill we teach at Senior level is recognising the graph, naming its nodes and edges, before writing any code.',
            'Once the graph is named, the method usually follows from the edges: unweighted edges suggest breadth-first search, weighted ones Dijkstra\'s algorithm, and "is everything connected" questions union-find.'
          ],
          rightH3: 'Dynamic programming is the other half',
          right: [
            'The second skill is defining a state: what is the smallest piece of information that, once known, lets the rest of the answer be built? Our third practice problem below is a clean example, where the state is "the cheapest way to cover every day up to day t".',
            'Students who learn DP as a list of famous problems struggle at S4. Students who learn to write the state in one sentence, then the transition, do not.'
          ] }
      ]
    },
    {
      id: 'budget', tint: 'tint', eyebrow: 'Efficiency',
      h2: 'Reading the input limits: how fast does the solution need to be?',
      lede: 'Unless a problem says otherwise, the CCC rules give each test three seconds and 512 MB. Problem statements also state the largest input size, and that number is the strongest clue to the intended algorithm. The budget table below is our rule of thumb for C++, not a CEMC rule.',
      body: [
        { kind: 'table', caption: 'Largest input size and the running time it usually allows (our rule of thumb, C++ with -O2, about 10^8 simple steps a second)', head: ['Largest N in the statement', 'Approach that usually fits', 'Example technique'], rows: [
          ['Up to about 20', 'Exponential, such as 2^N', 'Trying every subset'],
          ['Up to about 500', 'Cubic, N^3', 'Three nested loops, Floyd-Warshall'],
          ['Up to about 5,000', 'Quadratic, N^2', 'DP over pairs'],
          ['Up to about 200,000', 'N log N', 'Sorting, heaps, binary search'],
          ['Up to about 1,000,000 or more', 'Linear, N', 'One pass with prefix sums']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Python at Senior level',
          left: [
            'CEMC is candid that a perfect score may not be possible in every language, naming Python and Java as examples, while promising at least one language in which the right algorithms and data structures can reach full marks. In practice, Python Senior writers should expect to lose some marks on the largest tests of S4 and S5.',
            'The grader runs Python 3 as PyPy3, which helps, but the habits matter more: read all input at once with sys.stdin.buffer, avoid deep recursion, and keep inner loops free of function calls. Write to Python 3.8 syntax, as that is what the grader runs.'
          ],
          rightH3: 'C++ at Senior level',
          right: [
            'The grader compiles C++ with GCC 11.4.0 using -O2 and -std=c++17, so modern library features are available. Two lines of setup, ios::sync_with_stdio(false) and cin.tie(nullptr), make input fast enough for large tests.',
            'The commonest Senior C++ bug we see is overflow: a sum of 200,000 values up to a billion does not fit in an int. Use long long whenever a total might pass about two billion.'
          ] },
        { kind: 'p', mt: true, html: 'How the grader reports a slow program matters too. The CCC rules list five verdicts: correct, compilation error, time-limit exceeded, run-time error and wrong answer. Within a subtask, feedback stops at the first failing test: "Otherwise, feedback is provided for all test cases up to and including the first test case that is not correct." A time-limit verdict on a late test is the grader telling the student the method, not the code, needs to change.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cccgrader.com/rules.pdf" rel="noopener" target="_blank">CCC rules</a>, linked from CEMC\'s CCC page, read 22 October 2026.' }
      ]
    },
    {
      id: 'problems', tint: 'deep', eyebrow: 'Three problems',
      h2: 'Three original Senior-style problems, solved in C++ and Python',
      lede: 'We wrote these three for our Senior students. They are our problems, not CEMC\'s, and none is copied or adapted from a past CCC; CEMC\'s own past papers are in its free archive. Problem A sits at S1 to S2 level, B at S3 to S4, and C at S3 to S4. Every solution was run on its sample input in both languages and checked against a brute-force solver on 300 random small cases, with no mismatches.',
      body: [
        { kind: 'p', html: '<b>Problem A: Rink Bookings.</b> An arena has N bookings for its one rink. Booking i runs from time s to time e, including s but not e, so a booking that ends at 5 and another that starts at 5 do not overlap. Print the largest number of bookings that are in progress at the same moment. <b>Input:</b> N (1 to 200,000), then N lines each holding s and e (0 &le; s &lt; e &le; 1,000,000,000). <b>Output:</b> one integer.' },
        { kind: 'code', label: 'Problem A &middot; sample', lang: 'text', code: P1IO },
        { kind: 'code', label: 'Problem A &middot; a correct but slow first attempt (Python)', lang: 'python', code: P1SLOW, note: 'This checks every moment between the earliest start and the latest end, so its work grows with the time span T as well as N. On small inputs it is right, and on a real Senior paper it would collect an early subtask. With times up to a billion, it cannot finish in three seconds.' },
        { kind: 'code', label: 'Problem A &middot; our efficient solution (Python)', lang: 'python', code: P1PY },
        { kind: 'code', label: 'Problem A &middot; our efficient solution (C++)', lang: 'cpp', code: P1CPP, note: 'Turn each booking into two events, sort them, and sweep once: O(N log N). The detail that decides the answer is the tie: sorting puts an end (-1) before a start (+1) at the same time, which matches "including s but not e". Treat the end as inclusive and the sample gives 4, not 3.' },
        { kind: 'p', mt: true, html: '<b>Problem B: Trail Count.</b> A provincial park has N junctions joined by M two-way trails, each with a length in metres. Print the length of the shortest route from junction 1 to junction N, and the number of different shortest routes, modulo 1,000,000,007. Two routes are different if they use a different sequence of trails. Junction N can always be reached. <b>Input:</b> N and M (2 &le; N &le; 100,000; 1 &le; M &le; 200,000), then M lines a b w (1 &le; w &le; 1,000). <b>Output:</b> the distance and the count, separated by a space.' },
        { kind: 'code', label: 'Problem B &middot; sample', lang: 'text', code: P2IO },
        { kind: 'code', label: 'Problem B &middot; our solution (Python)', lang: 'python', code: P2PY },
        { kind: 'code', label: 'Problem B &middot; our solution (C++)', lang: 'cpp', code: P2CPP, note: 'Dijkstra\'s algorithm with one extra array. When a strictly shorter route reaches v, its count resets to the count at u; when an equally short one arrives, the counts add. Because every length is positive, a junction\'s count is final by the time it leaves the queue. In the sample, 1-2-4-5 and 1-3-4-5 both measure 6 and the direct trail measures 7, so the answer is 6 2. The count goes modulo 1,000,000,007 because it can grow exponentially; the distance cannot exceed about 10^8, so it needs no modulus.' },
        { kind: 'p', mt: true, html: '<b>Problem C: Ice Time Passes.</b> A skater will practise on D given days of the season, numbered 1 to 365. The rink sells a 1-day pass, a 7-day pass and a 30-day pass, priced in tokens; a pass bought on day t covers day t and the following days up to its length. Print the fewest tokens needed to cover every practice day. <b>Input:</b> D (1 to 365), then the D days in increasing order, then the three prices. <b>Output:</b> one integer.' },
        { kind: 'code', label: 'Problem C &middot; sample', lang: 'text', code: P3IO },
        { kind: 'code', label: 'Problem C &middot; our solution (Python)', lang: 'python', code: P3PY },
        { kind: 'code', label: 'Problem C &middot; our solution (C++)', lang: 'cpp', code: P3CPP, note: 'The state, in one sentence: fewest[t] is the cheapest way to cover every practice day from day 1 to day t. On a non-practice day nothing changes; on a practice day, the last pass bought either was a 1-day pass, or a 7-day or 30-day pass that began within the last week or month. In the sample, a 7-day pass for days 1 to 5 and single passes for days 9, 10, 25 and 31 cost 10 + 4 x 3 = 22. The tempting greedy answer, a 30-day pass because it is cheapest per day, gives 24 + 3 = 27.' },
        { kind: 'two', mt: true,
          leftH3: 'How we check our own solutions',
          left: [
            'Every solution on this page was compared with a deliberately simple brute-force program that tries everything, on hundreds of tiny random inputs. When the two disagree, the tiny input that caused it is the fastest bug report there is.',
            'We teach students to write that brute force first at Senior level. It earns the small subtasks on contest day, and in practice it is the safety net that makes the clever solution trustworthy.'
          ],
          rightH3: 'What the three have in common',
          right: [
            'Each has a version that is easy to write and too slow, and a version that needs one real idea: a sweep, a count carried through Dijkstra, a DP state. Senior marks are mostly earned in the step between the two.',
            'Each also hides one detail in the wording: an exclusive end time, parallel trails that count as different routes, a pass that covers the day it is bought. Reading Senior statements slowly is not optional.'
          ] }
      ]
    },
    {
      id: 'season', tint: 'tint', eyebrow: 'A season plan',
      h2: 'A Senior season, from November 2026 to 17 February 2027',
      lede: 'Our plan for a student who can already pass the Junior paper comfortably and is moving up. It assumes two live classes a week in our CCC course, a problem set between them, and C++ or Python chosen before the first block. Each block ends with an exit check, so the student moves on only when ready.',
      body: [
        { kind: 'table', caption: 'A five-block Senior plan (ours)', head: ['Block', 'Dates', 'Focus', 'Exit check'], rows: [
          ['1', '2 to 22 November 2026', 'Sorting with keys, binary search, prefix sums, sweeps', 'Problem A above solved efficiently from a blank file'],
          ['2', '23 November to 13 December 2026', 'BFS and DFS, grids as graphs, union-find', 'Three past S3 problems solved, at least partly'],
          ['3', '14 December 2026 to 10 January 2027', 'Dijkstra, counting with modulus, a lighter holiday fortnight', 'Problem B above, and one past S4'],
          ['4', '11 January to 31 January 2027', 'Dynamic programming on sequences and grids', 'Problem C above, with the state written in one sentence'],
          ['5', '1 to 17 February 2027', 'Two full timed Senior papers, review, the Practice Contest', 'Calm on the day, with a plan for which problems to try first']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Contest-day order',
          left: [
            'Read all five problems in the first fifteen minutes. Solve S1 completely. Then, for each of S2 to S5, ask which subtasks can be taken with a simple method, and collect those before chasing any full solution.',
            'The grader keeps the highest score from all submissions on each problem, so a working slow version submitted early is never wasted.'
          ],
          rightH3: 'What not to do in February',
          right: [
            'Do not learn a new data structure in the final week. Senior marks come from methods that are fluent, not from ones read about on the weekend before.',
            'Do not rely on saved code. The CCC rules say "Access to other source or starter code is not allowed during the competition." Every line is typed on the day, which is why we practise writing Dijkstra from memory.'
          ] }
      ]
    },
    {
      id: 'beyond', tint: 'deep', eyebrow: 'Beyond Senior',
      h2: 'Where a strong Senior result leads',
      lede: 'Senior is the only CCC paper with a path onward. CEMC describes it in a few lines, and the step is steep.',
      body: [
        { kind: 'table', caption: 'After CCC Senior, from CEMC\'s CCC page (read 22 October 2026)', head: ['Step', 'What CEMC says'], rows: [
          ['Honour roll', 'Some top-scoring official participants are named in Senior honour rolls, unless they opt out.'],
          ['Official status', 'For writers at a school in Canada: born on or after 1 July 2007, and living in Canada.'],
          ['Canadian Computing Olympiad', 'About 20 of the top official Senior participants from schools in Canada are invited each spring, at CEMC\'s discretion.'],
          ['Language at the CCO', '"CCO participants must use C++."'],
          ['International Olympiad in Informatics', 'The CCO is also used to select Canada\'s IOI team.']
        ] },
        { kind: 'p', mt: true, html: 'Our honest framing for families: about twenty invitations a year from the whole country is a tiny number, and no teacher can promise one. A Senior paper that goes well is worth preparing for on its own terms, for the algorithms it teaches. Our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers the full route, and <a class="ag-inline-link" href="/ioi-olympiad-informatics-training">IOI training</a> describes what the international level asks.' }
      ]
    },
    {
      id: 'reading', tint: 'tint', eyebrow: 'Further reading',
      h2: 'Reading and practice material for Senior writers',
      lede: 'CEMC points Senior writers to its own archive, its grader and two books. We send students to the originals and never reproduce CEMC\'s problems.',
      body: [
        { kind: 'table', caption: 'Material CEMC lists on its CCC page (read 22 October 2026), and how we use it', head: ['Material', 'What it is', 'How we use it at Senior level'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">CEMC past contests</a>', 'Past CCC papers, solutions and results from the last ten years', 'Past S3 and S4 problems as weekly targets from December'],
          ['<a class="ag-inline-link" href="https://cccgrader.com/" rel="noopener" target="_blank">CCC Online Grader</a>', 'The contest system, with a free practice account and previous contests', 'Every practice solution submitted, so verdicts become familiar'],
          ['<a class="ag-inline-link" href="https://cpbook.net/" rel="noopener" target="_blank">Competitive Programming</a>, Halim and Halim', 'A book CEMC names for preparation', 'Reference for graph and DP chapters'],
          ['<a class="ag-inline-link" href="https://cses.fi/book/index.php" rel="noopener" target="_blank">Competitive Programmers Handbook</a>, Antti Laaksonen', 'A book CEMC names for preparation', 'Our first reading for students new to complexity']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages from Junior to Senior',
    lede: 'How our teachers judge readiness for the Senior paper. The stages are ours.',
    table: { caption: 'Senior readiness (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Strong Junior', 'Solves Junior problems 4 and 5 inside the time'],
      ['2. Correct but slow', 'Solves S1 and S2, but large tests time out'],
      ['3. Efficient', 'Chooses an algorithm from the input limits before coding'],
      ['4. Senior ready', 'Takes subtasks on S3 to S5 and finishes S1 and S2 quickly']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is where most students arrive from Junior, and it is where a teacher helps most: the step from correct to efficient is about method, not effort.',
      'A useful question to ask your child: what is the largest input, and how many steps will your program take on it?'
    ] },
    right: { h3: 'For students', ps: [
      'Before coding, write the complexity you are aiming for next to the input limit.',
      'Keep a brute-force solver for every practice problem. It catches the bugs your clever version hides.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses on the road through CCC Senior',
    lede: 'Live online, one regular teacher, a batch or a one-to-one place, for students anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Before Senior', courses: [
        { code: 'CSG / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Fluent Python before contest Python.' },
        { code: 'CSG / BASE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Another CCC language, from the start.' },
        { code: 'CSG / BASE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures without the clock.' }
      ] },
      { num: 'II', h3: 'Senior toolkit', sub: 'Grades 10 to 12', courses: [
        { code: 'CSG / CORE / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'The reasoning that S3 and S4 lean on.' },
        { code: 'CSG / CORE / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Counting and proof for careful counting problems.' },
        { code: 'CSG / CORE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Math ideas checked in code, for younger strong students.' }
      ] },
      { num: 'III', h3: 'After Senior', sub: 'University level', courses: [
        { code: 'CSG / NEXT / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'Contest work beyond school.' },
        { code: 'CSG / NEXT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The full treatment, ages 18 and up.' },
        { code: 'CSG / NEXT / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ masterclass', blurb: 'Modern C++ in depth, ages 18 and up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Senior classes that fit a Canadian school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening slots after school, in your province\'s time.' },
      { time: 'Weekends', l: 'Weekend mornings for longer algorithm sessions.' },
      { time: '1-on-1', l: 'Paced to the student and to 17 February 2027.' }
    ],
    cells: [
      { h3: 'Our problems', p: 'Original Senior-style sets, tested before use.' },
      { h3: 'Two languages', p: 'Python or C++, and help switching between them.' },
      { h3: 'Complexity first', p: 'Every solution starts from the input limits.' },
      { h3: 'Brute-force checks', p: 'Students learn to test their own code.' },
      { h3: 'Timed papers', p: 'Full three-hour Senior sittings in February.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty, or a teacher to yourself.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Algorithms practice sits beside real projects. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show many more.',
  reviewsLede: 'Parents\' Google reviews, quoted in full.',

  fees: {
    h2: 'Fees',
    lede: 'Schools pay CEMC for the contest; we have no part in that. Our monthly fee pays for live algorithm teaching, month by month, so a family can stop after February with nothing owed.',
    free: ['A free first class', 'One Senior-style problem, solved together', 'No card details asked'],
    group: ['Fifteen to twenty students in a batch', 'The same teacher through February', 'A batch time you pick', 'Monthly payment'],
    one: ['A teacher of your own', 'Built around Senior targets', 'Your own code reviewed line by line']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'CCC Senior: common questions',
    items: [
      { q: 'What is CCC Senior?', a: 'It is the Senior level of the Canadian Computing Competition, run by CEMC at the University of Waterloo, for participants with intermediate to advanced programming skills. Students solve five algorithm problems online, at school, in three hours.' },
      { q: 'When is CCC Senior in 2027?', a: 'CEMC lists the 2027 CCC, Junior and Senior, for Wednesday 17 February 2027 in North and South America and Thursday 18 February 2027 elsewhere. Schools order it by Thursday 11 February 2027.' },
      { q: 'What topics come up in CCC Senior?', a: 'CEMC describes S1 and S2 as basic algorithms such as sorting and searching, S3 and S4 as more advanced algorithms with careful counting and mathematical reasoning, and S5 as an IOI level question. In practice that means graphs, dynamic programming and efficient code.' },
      { q: 'What score earned a Certificate of Distinction on CCC Senior in 2026?', a: 'CEMC lists a 2026 Senior cutoff of 26 out of 75, with an average of 15.56 and 2439 contestants. The cutoff marks the top 25 percent of competitors, so it changes each year.' },
      { q: 'Should a Senior writer use Python or C++?', a: 'Both are allowed. CEMC warns that a perfect score may not always be possible in Python or Java, and the CCO requires C++. We let students write Senior in Python if it is their strong language, and move CCO hopefuls to C++.' },
      { q: 'Can a Grade 9 student write CCC Senior?', a: 'Yes. CEMC lets each participant choose Junior or Senior regardless of grade. The question is skill: whether the student can finish the first two Senior problems from past papers in good time.' },
      { q: 'How does CCC Senior lead to the CCO?', a: 'CEMC invites about 20 of the top official CCC Senior participants from schools in Canada to the Canadian Computing Olympiad each spring, at its discretion. The CCO is also used to choose Canada\'s IOI team.' },
      { q: 'Can students use templates or AI during the CCC?', a: 'No. The CCC rules forbid other source or starter code during the contest and forbid generative AI, including tools inside an editor. Outside the contest, ChatGPT needs a parent\'s permission for anyone under 18.' },
      { q: 'Where are CCC Senior past problems?', a: 'CEMC publishes past CCC papers, solutions and results free on its past contests page, and the CCC Online Grader offers a free practice account with previous contests. Our own practice problems are written by our teachers.' },
      { q: 'When are your CCC Senior classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix the time in Eastern time and convert it for your province.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian students working at the top end of school programming.',
    items: [
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Our main CCC page, Junior and Senior.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The level below, for students moving up.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/ioi-olympiad-informatics-training', label: 'IOI training', p: 'What the international olympiad asks.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'Another online algorithm contest.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the bug a verdict does not name.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is one Senior-style problem, worked live: the teacher watches how the student reads the limits and chooses a method, then tells you honestly whether Senior is the right paper for February 2027.',
    readFirst: 'Want to know how lessons work first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a real class, and the <a class="ag-inline-link" href="/courses">course list</a> has the syllabi.',
    note: 'Classes are taught live over video by teachers based in India, so there is no building to visit in Canada. WhatsApp reaches us fastest.',
    formNote: 'The first class is free; we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Read the limits first'
  },

  personalityCss: `
.ag-root.ag-csg .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-csg .ag-capsule { border-left-width: 3px; border-radius: 3px; }
.ag-root.ag-csg .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-csg .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-csg .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-csg .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) CCC page and the CCC Online Grader rules and sample-programs documents, read raw on 22 October 2026: 2027 dates; Senior audience line; Senior bands S1-S2 basic algorithms (sorting, searching), S3-S4 more advanced algorithms (careful counting, more advanced mathematical reasoning), S5 IOI level; 15 per question; efficiency subtasks; GCC 11.4.0 with -O2 -std=c++17 -static; PyPy3 7.3.9 running Python 3.8.13; honour rolls for Senior; top 25% distinction; 2026 Senior mean 15.56, cutoff 26, 2439 contestants; about 20 invited to the CCO, C++ only, IOI selection; feedback and verdict rules; no starter code.',
    localProject: 'Three original Senior-style problems written by us (Rink Bookings, Trail Count, Ice Time Passes) with Python 3.8 and C++ solutions, run on their samples and stress-tested against brute force on 300 random cases each; a slow first attempt for the subtask lesson; a complexity budget table; a five-block season plan to 17 February 2027; our arithmetic 26 = 15 + 11. Lesson family: choosing an algorithm from the input limits.',
    requiredMentions: ['for input that only efficient solutions can solve within the time limits', 'Compiler Version: GCC 11.4.0', '-O2 -std=c++17 -static', 'Rink Bookings', 'Trail Count', 'Ice Time Passes', '26 = 15 + 11', 'Access to other source or starter code is not allowed during the competition', 'checked against a brute-force solver on 300 random small cases'],
    sources: [
      { claim: 'CCC 2027 dates, Senior audience, Senior question bands, subtasks and efficiency, languages, Python caveat, CCO C++ rule, honour rolls, distinction rule, official status, 2026 Senior figures, CCO invitations, books.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Time and memory limits, feedback rules and verdicts, no starter code, no generative AI.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'C++ compiled with GCC 11.4.0 using -O2 -std=c++17 -static; Python 3 as PyPy3 7.3.9 running Python 3.8.13.', url: 'https://cccgrader.com/sample_soln.pdf' },
      { claim: 'Past CCC papers and solutions from the last 10 years.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' }
    ],
    rejectedClaims: [
      'Any CEMC past problem or solution, including the 2012 sample problem in the grader document: never reproduced.',
      'Timings of our solutions on our own machine: not printed, because the grader\'s hardware differs.',
      'That our classes lead to honour rolls, distinction or CCO invitations: refused; CEMC decides at its discretion.',
      'A combined Junior and Senior contestant total: not printed.',
      'Names of past CCO or IOI participants: not reproduced.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
