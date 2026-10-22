'use strict';
// Canadian Computing Olympiad (CCO) guide (ag- contest door; Canada cluster Plan 2, row 41).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/cemc/ and
// src-pilots/canadian-computing-olympiad-cco-guide/):
//  - cemc.uwaterloo.ca/contests/ccc (ccc.txt): "The Canadian Computing Olympiad (CCO) is a week-long learning
//    experience featuring workshops, a contest and other extracurricular activities."; "This invitation-only event is
//    also used to select Canada's teams for the International Olympiad in Informatics (IOI) hosted by a different
//    country each year."; "Approximately 20 of the top official CCC Senior participants from schools in Canada are
//    invited to the CCO at the University of Waterloo each spring."; "Outstanding participants, including those who are
//    Canadian citizens or permanent residents attending school outside of Canada, may also be invited."; "The selection
//    of CCO participants and the Canadian IOI team members is at the discretion of the CEMC."; "CCO participants must
//    use C++."; Senior Q5 "IOI level question"; official participant rules (born on or after July 1, 2007; live in
//    Canada); only official participants "are eligible to be invited to the Canadian Computing Olympiad (CCO)";
//    screen recording: "we strongly recommend that Contest Supervisors arrange to record their screen for the entire
//    duration of the competition", keep recordings "for a month after the contest", "being asked to provide a screen
//    recording does not guarantee an invitation, and without a screen recording, evidence of broken rules is more
//    likely to lead to disqualification"; CCO awards: "Some CCO participants may receive a plaque for gold, silver or
//    bronze standing based on their results in both the CCC and CCO competitions." and cash prizes for silver and gold
//    medallists (amounts omitted on the page). Gender-scoped programmes on the same page are deliberately left out.
//  - cemc.uwaterloo.ca/contests/ccc/ioi (ccc-ioi.txt): "one of the most recognized computer science competitions in
//    the world"; "The competition tasks are algorithmic; however, the contestants must show basic IT skills like
//    problem analysis, design of algorithms and data structures, programming and testing."; "Canada's entry into the
//    annual IOI competition is determined by performance on the Canadian Computing Competition"; results table back to
//    IOI 1996. No contestant, school or staff names reproduced.
//  - cemc.uwaterloo.ca/team-canada-brought-back-four-medals-ioi-2026 (ioi-2026-news.txt): "returned from Tashkent,
//    Uzbekistan with four medals" (two silver, two bronze; names not reproduced); "Each year, participating countries
//    typically send a delegation of four contestants to compete individually"; "during two competition days"; "Top
//    scorers on this contest at the CCO are then selected to represent team Canada at the IOI."; "The CEMC trains the
//    selected students for the IOI and leads the delegation at the event."
//  - cemc.uwaterloo.ca/resources/past-contests: CCO in the contest filter.
// Our own material, labelled on the page: the original IOI-style task Signal Towers with a subtask-1 C++ solution and
// a full C++ solution (sample output 6 from both; both stress-tested against brute force on 400 random cases with 0
// failures, compiled with g++ 6.3 -std=c++14 on 22 October 2026); the Python-to-C++ table; the multi-year path; the
// arithmetic 200,000 x 199,999 / 2 = 19,999,900,000 pairs, above the 32-bit limit.
// Lesson family: solving in subtasks (partial solutions first, then the full idea).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SUB1 = "// Our practice task: Signal Towers, subtask 1 (N up to 2,000)\n// Check every pair: about N * N / 2 comparisons.\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    int n;\n    long long d;\n    cin >> n >> d;\n    vector<long long> x(n);\n    for (auto &v : x) cin >> v;\n    long long pairs = 0;\n    for (int i = 0; i < n; i++)\n        for (int j = i + 1; j < n; j++)\n            if (llabs(x[i] - x[j]) <= d) pairs++;\n    cout << pairs << \"\\n\";\n    return 0;\n}";

const FULL = "// Our practice task: Signal Towers, full solution (N up to 200,000)\n// Sort, then slide a window: O(N log N) for the sort, O(N) after.\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    long long d;\n    cin >> n >> d;\n    vector<long long> x(n);\n    for (auto &v : x) cin >> v;\n    sort(x.begin(), x.end());\n    long long pairs = 0;   // up to about 2 * 10^10: needs long long\n    int left = 0;\n    for (int right = 0; right < n; right++) {\n        while (x[right] - x[left] > d) left++;\n        pairs += right - left;   // towers left .. right-1 reach tower right\n    }\n    cout << pairs << \"\\n\";\n    return 0;\n}";

const SIO = "Sample input:\n6 3\n10 1 4 13 7 2\n\nSample output:\n6";

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'OLYMPIAD', blurb: 'The Canadian Computing Olympiad from CEMC\'s own pages: how CCC Senior leads to the CCO and the IOI, who is invited, why C++, and an IOI-style task with subtasks.' },
  slug: 'canadian-computing-olympiad-cco-guide',
  code: 'ccoc',
  accent: '#121B7A',
  accentRationale: 'Canadian Computing Olympiad guide: a deep royal indigo #121B7A, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 13.54 on the paper #FBF8F2 and above 11.6 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Canadian Computing Olympiad guide',
  title: 'Canadian Computing Olympiad (CCO): From CCC to the IOI',
  description: 'The Canadian Computing Olympiad from CEMC\'s pages: how about 20 CCC Senior writers are invited, why C++ is required, and how Canada\'s IOI team is chosen.',
  ogDescription: 'How Canada picks its informatics olympiad team: CCC Senior, then an invitation to the Canadian Computing Olympiad at Waterloo, then the IOI. CEMC\'s rules, the 2026 IOI result, and an original IOI-style task.',
  twitterDescription: 'The CCO explained from CEMC\'s pages: the CCC Senior to CCO to IOI path, with an original subtask problem.',
  pageName: 'Canadian Computing Olympiad Guide',
  webPageDescription: 'A guide for Canadian students and parents to the Canadian Computing Olympiad and the route from the Canadian Computing Competition to the International Olympiad in Informatics, built from CEMC\'s pages.',
  courseDescription: 'Live online algorithm training in C++ for strong Canadian programmers aiming at CCC Senior and the Canadian Computing Olympiad, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Canadian Computing Olympiad guide',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#path', label: 'The path' },
    { href: '#cco', label: 'The CCO' },
    { href: '#ioi', label: 'The IOI' },
    { href: '#cpp', label: 'C++ only' },
    { href: '#subtasks', label: 'A subtask task' }
  ],
  eyebrow: 'Canada &middot; Informatics olympiad &middot; CCC Senior, CCO, IOI',
  h1: 'The Canadian Computing Olympiad: the road from CCC Senior to the IOI',
  lede: 'Canada does not hold an open informatics olympiad that students sign up for. Its olympiad is an invitation: CEMC, at the University of Waterloo, reads the results of the Canadian Computing Competition Senior paper each February, invites about twenty students to the Canadian Computing Olympiad on campus in the spring, and uses that week to choose the team that represents Canada at the International Olympiad in Informatics. This guide sets out each step in CEMC\'s own words, what an invited student needs to have done in February, why the CCO runs only in C++, and how IOI-style subtasks work, with a practice task we wrote and solved twice.',
  secondaryCta: { href: '#path', label: 'Follow the path' },
  wa: 'Hello Modern Age Coders, my child in Canada is aiming for CCC Senior and the CCO. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; facts from CEMC\'s pages, and no promises about invitations',
  spec: [
    ['Organised by', 'CEMC at Waterloo'],
    ['Entry', 'Invitation, from CCC Senior'],
    ['Invited', 'About 20 a year'],
    ['Where', 'University of Waterloo, each spring'],
    ['Format', 'A week: workshops and a contest'],
    ['Language', 'C++ only'],
    ['Leads to', 'Canada\'s IOI team'],
    ['Classes', 'Weekdays or weekends, flexible']
  ],
  capsuleQ: 'In short',
  capsule: 'The Canadian Computing Olympiad (CCO) is CEMC\'s invitation-only week at the University of Waterloo each spring, for about 20 top official CCC Senior writers from schools in Canada; it is written in C++ and used to select Canada\'s IOI team. Modern Age Coders prepares strong programmers for that road in small live online groups or privately, through its CCC Junior and Senior Preparation course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Courses for the olympiad road',
    lede: 'Every invitation is earned on the CCC Senior paper, so that comes first. The other two build the C++ and the algorithms the olympiad level expects.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'CCO / 01', title: 'CCC Junior and Senior Preparation', note: 'The Senior track, aimed at the February 2027 paper that every CCO invitation is drawn from.' },
      { course: 'competitive-programming-for-teens-course', code: 'CCO / 02', title: 'Competitive programming for teens', note: 'Advanced algorithms and data structures for students already solving Senior problems 3 and 4.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'CCO / 03', title: 'C++ for teens', note: 'C++ from the ground up, with the STL, for students who must leave Python behind.' }
    ]
  },

  sections: [
    {
      id: 'path', tint: 'tint', eyebrow: 'The path',
      h2: 'CCC Senior, then the CCO, then the IOI: the three steps',
      lede: 'There is one road, and CEMC controls each stage of it. The table follows a student along it, using CEMC\'s wording from its CCC page, its IOI page and its 2026 IOI news story, all read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'From the CCC to the IOI, in CEMC\'s words (read 22 October 2026)', head: ['Stage', 'When', 'What CEMC says'], rows: [
          ['1. CCC Senior', 'Wednesday 17 February 2027 (the Americas)', 'Written at school. CEMC\'s top Senior question is an "IOI level question".'],
          ['2. Official status', 'Checked on the results', 'Only official participants "are eligible to be invited to the Canadian Computing Olympiad (CCO)". For a writer at a Canadian school, CEMC means someone born no earlier than 1 July 2007 who lives in Canada.'],
          ['3. Invitation', 'After the CCC results', '"Approximately 20 of the top official CCC Senior participants from schools in Canada are invited to the CCO at the University of Waterloo each spring."'],
          ['4. The CCO', 'Spring, at Waterloo', '"a week-long learning experience featuring workshops, a contest and other extracurricular activities"'],
          ['5. Team selection', 'At the CCO', '"Top scorers on this contest at the CCO are then selected to represent team Canada at the IOI."'],
          ['6. The IOI', 'Later in the year, abroad', 'Hosted "by a different country each year"; CEMC "trains the selected students for the IOI and leads the delegation at the event."']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, Canadian Computing Competition and CCO</a>; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc/ioi" rel="noopener" target="_blank">CEMC, Canada at the IOI</a>; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/team-canada-brought-back-four-medals-ioi-2026" rel="noopener" target="_blank">CEMC news on IOI 2026</a>. All read 22 October 2026. We have no link with CEMC, the University of Waterloo or the IOI.' },
        { kind: 'two', mt: true,
          leftH3: 'Who decides at each step',
          left: [
            'CEMC states it directly: "The selection of CCO participants and the Canadian IOI team members is at the discretion of the CEMC." CEMC lists no application form and no essay: the invitation follows from results.',
            'CEMC also leaves room beyond its main rule: "Outstanding participants, including those who are Canadian citizens or permanent residents attending school outside of Canada, may also be invited."'
          ],
          rightH3: 'The search term that confuses people',
          right: [
            'Many families search for a "Canadian informatics olympiad". The olympiad CEMC runs for Canadian school students is called the Canadian Computing Olympiad, and the national contest that feeds it is the Canadian Computing Competition.',
            'The International Olympiad in Informatics is the world level. CEMC calls it "one of the most recognized computer science competitions in the world".'
          ] }
      ]
    },
    {
      id: 'cco', tint: 'deep', eyebrow: 'The CCO',
      h2: 'What the CCO is, and what invited students should know',
      lede: 'The CCO is not just a contest. CEMC describes a week on campus with teaching as well as competing, and its CCC page sets out what invited students may receive. Every point below is CEMC\'s; the right-hand notes are ours.',
      body: [
        { kind: 'table', caption: 'The Canadian Computing Olympiad, from CEMC\'s CCC page (read 22 October 2026), with our notes', head: ['Point', 'What CEMC says', 'Our note'], rows: [
          ['Format', 'A week of workshops, a contest and other extracurricular activities', 'Invited students learn as well as compete, so the week itself is training'],
          ['Invitation-only', '"This invitation-only event is also used to select Canada\'s teams for the International Olympiad in Informatics (IOI)"', 'No route in except a strong official CCC Senior result, or CEMC\'s discretion'],
          ['Where and when', 'At the University of Waterloo, each spring', 'CEMC had not posted a 2027 CCO date when we checked'],
          ['Language', '"CCO participants must use C++."', 'Switch well before February, not after an invitation'],
          ['Plaques', '"Some CCO participants may receive a plaque for gold, silver or bronze standing based on their results in both the CCC and CCO competitions."', 'The CCC result still counts at the CCO'],
          ['Prizes', 'CEMC lists a cash prize for each silver and each gold medallist', 'Awarded at CEMC\'s discretion'],
          ['Past papers', 'The CCO is among the contests in CEMC\'s past contests filter', 'Useful for students already strong at Senior level']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Screen recording on CCC day',
          left: [
            'CEMC asks something specific of the schools of students hoping for an invitation. For "participants aiming to be invited to the Canadian Computing Olympiad (CCO)", it says "we strongly recommend that Contest Supervisors arrange to record their screen for the entire duration of the competition".',
            'The school keeps the recording, not CEMC, "for a month after the contest", because students being considered may be asked for it before formal invitations go out.'
          ],
          rightH3: 'What a recording does and does not do',
          right: [
            'CEMC is careful on both sides of this. It says that "being asked to provide a screen recording does not guarantee an invitation, and without a screen recording, evidence of broken rules is more likely to lead to disqualification."',
            'Our advice to a CCO hopeful: ask the CCC supervisor in January whether the school can record, and practise one mock paper with recording running so it is routine on the day.'
          ] }
      ]
    },
    {
      id: 'ioi', tint: 'tint', eyebrow: 'The IOI',
      h2: 'The International Olympiad in Informatics, and Canada\'s place in it',
      lede: 'The IOI is the end of the road. CEMC\'s pages describe what it tests and how Canada enters; its news story on 2026 gives the latest result. We give medal counts but not names.',
      body: [
        { kind: 'table', caption: 'The IOI and Canada, from CEMC\'s IOI page and 2026 news story (read 22 October 2026)', head: ['Point', 'What CEMC says'], rows: [
          ['What the IOI tests', '"The competition tasks are algorithmic; however, the contestants must show basic IT skills like problem analysis, design of algorithms and data structures, programming and testing."'],
          ['How Canada enters', '"Canada\'s entry into the annual IOI competition is determined by performance on the" Canadian Computing Competition.'],
          ['Team size', '"Each year, participating countries typically send a delegation of four contestants to compete individually"'],
          ['Contest days', 'Contestants solve informatics problems "during two competition days".'],
          ['IOI 2026', 'The team "returned from Tashkent, Uzbekistan with four medals": two silver and two bronze.'],
          ['History', 'CEMC\'s table of Canada\'s IOI results runs back to IOI 1996.']
        ] },
        { kind: 'p', mt: true, html: 'Put the numbers side by side and the shape of the road is clear. Thousands write the CCC each year; CEMC printed 2439 Senior contestants for 2026. About 20 reach the CCO. Four go to the IOI. That is why we talk to families about the CCO as a direction to grow in, never as a target to be promised.' }
      ]
    },
    {
      id: 'cpp', tint: 'deep', eyebrow: 'C++ only',
      h2: 'Why the CCO is C++ only, and how a Python student switches',
      lede: 'The CCC accepts five languages; the CCO accepts one. CEMC gives the rule without a reason. The practical effect is about speed: CEMC already warns that Python or Java may not reach a perfect score at the CCC, and the CCO is harder still. The table maps the Python a CCC student already knows onto the C++ they will need. It is our teaching table.',
      body: [
        { kind: 'table', caption: 'Python to C++ for contest code (our table)', head: ['In Python', 'In contest C++', 'Watch out for'], rows: [
          ['list', 'vector&lt;int&gt; or vector&lt;long long&gt;', 'Choose the element type; it will not grow into a bigger integer by itself'],
          ['dict', 'map (ordered) or unordered_map (hashed)', 'map is slower but sorted; reading a missing key creates it'],
          ['set', 'set or unordered_set', 'set iterates in sorted order'],
          ['heapq (a min-heap)', 'priority_queue with greater&lt;&gt;', 'priority_queue is a max-heap by default'],
          ['sorted(a), a.sort()', 'sort(a.begin(), a.end())', 'Pass a comparison for custom orders'],
          ['int (any size)', 'int, or long long past about two billion', 'Overflow gives silently wrong answers'],
          ['input().split()', 'cin &gt;&gt; x, with fast input switched on', 'Without ios::sync_with_stdio(false), large inputs can time out'],
          ['Recursion with a raised limit', 'Recursion, with care for very deep calls', 'Very deep recursion can overflow the stack; loops are safer']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When to switch',
          left: [
            'A student aiming at the CCO should write CCC Senior in C++, because the invitation comes from that paper and the student will need C++ the moment it arrives. The year before is the right time to move: the autumn of Grade 9 or 10 for a student who expects to be strong at Senior by Grade 11.',
            'In our classes the switch usually takes several weeks of steady practice before C++ feels as natural as Python did, and the first fortnight is the hardest.'
          ],
          rightH3: 'How we teach it',
          right: [
            'We re-solve problems the student already solved in Python, in C++. The algorithm is familiar, so all the attention goes to the language: types, references, the standard library.',
            'After that, every new Senior problem is attempted in C++ first. Python stays as a scratchpad for checking ideas, not as the contest language.'
          ] }
      ]
    },
    {
      id: 'subtasks', tint: 'tint', eyebrow: 'Worked example',
      h2: 'How IOI-style subtasks work: one task, two solutions',
      lede: 'CCC Senior and the olympiads above it split problems into subtasks: a small version that a simple method can solve, and a large version that needs the real idea. This task is ours, written for our students; it is not a CEMC, CCO or IOI problem. Both solutions are in C++, the CCO\'s language, and both were checked against a brute-force count on 400 random cases with no mismatches.',
      body: [
        { kind: 'p', html: '<b>Our task: Signal Towers.</b> N radio towers stand along a straight highway at positions x (whole numbers, kilometres from a marker). Two towers can talk if they are at most D kilometres apart. Count the pairs of towers that can talk. <b>Input:</b> N and D on the first line, then the N positions on one line. <b>Output:</b> one integer. <b>Subtask 1 (40 percent of the marks):</b> N is at most 2,000. <b>Subtask 2 (60 percent):</b> N is at most 200,000, and positions and D are at most one billion.' },
        { kind: 'code', label: 'Signal Towers &middot; sample', lang: 'text', code: SIO },
        { kind: 'code', label: 'Subtask 1 &middot; check every pair (C++)', lang: 'cpp', code: SUB1, note: 'About two million comparisons when N is 2,000: well inside the time. At N = 200,000 it would need about twenty billion, far too many. This version earns the first 40 percent and nothing more, and that is a perfectly good start on contest day.' },
        { kind: 'code', label: 'Subtask 2 &middot; sort and slide a window (C++)', lang: 'cpp', code: FULL, note: 'After sorting, the towers a given tower can reach on its left form one unbroken block, so a left pointer only ever moves forward. Each tower is added and removed from the window once: linear time after the sort. Our arithmetic on the count: if all 200,000 towers stood at one spot, there would be 200,000 x 199,999 / 2 = 19,999,900,000 pairs, far beyond the roughly 2.1 billion an int can hold, so the count is a long long.' },
        { kind: 'two', mt: true,
          leftH3: 'The habit this teaches',
          left: [
            'Write the subtask 1 solution first, always. It takes minutes, it earns marks, and it becomes the brute-force checker for the clever version. Students who skip this step tend to lose an afternoon to a bug it would have caught in seconds.',
            'Then ask what structure the simple version wastes. Here, it compares towers that are obviously too far apart. Sorting is what lets the program stop looking.'
          ],
          rightH3: 'Reading the sample by hand',
          right: [
            'Sorted, the positions are 1, 2, 4, 7, 10 and 13, with D = 3. The pairs that can talk are 1 and 2, 1 and 4, 2 and 4, 4 and 7, 7 and 10, and 10 and 13: six, as both programs print.',
            'A student who cannot list the six pairs on paper is not ready to code either solution. At the olympiad end, the paper work comes first just as it does at Junior.'
          ] }
      ]
    },
    {
      id: 'years', tint: 'deep', eyebrow: 'A longer view',
      h2: 'A realistic multi-year path towards the CCO',
      lede: 'Very few students reach the CCO in their first CCC year. This is the kind of path we sketch with a strong, keen student who starts in Grade 9. It is ours, and it is a direction rather than a promise.',
      body: [
        { kind: 'table', caption: 'A multi-year path (our plan; contest dates for 2026 to 2027 from CEMC)', head: ['Year', 'CCC paper', 'Language', 'Focus'], rows: [
          ['Grade 9', 'Junior', 'Python', 'Clean input and output, loops, strings, first recursion'],
          ['Grade 10', 'Senior', 'Python, moving to C++ in the autumn', 'Sorting, binary search, BFS and DFS, first DP'],
          ['Grade 11', 'Senior', 'C++', 'Shortest paths, harder DP, union-find, segment trees'],
          ['Grade 12', 'Senior, aiming at the CCO', 'C++', 'Olympiad-level problems, subtasks, full timed papers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What sustains a student over four years',
          left: [
            'Enjoyment of the problems for their own sake. Students who stay with algorithms through Grade 12 are the ones who like the moment an idea clicks, not the ones chasing a medal.',
            'Steady weekly work. Two classes and a few problems a week, every week, beats intense bursts before February.'
          ],
          rightH3: 'What to tell a student who is not invited',
          right: [
            'That about twenty places a year across Canada says nothing about whether a student is good at computer science. The skills built on the way, algorithms, efficient code, careful testing, are the ones university courses and software work ask for.',
            'And that CEMC runs the CCC every year, so a student who is still an official participant can write Senior again next February.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages on the olympiad road',
    lede: 'How we judge where a student stands relative to CCO-level work. The stages are ours.',
    table: { caption: 'From strong Senior writer to olympiad level (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Senior solid', 'Solves S1 and S2 reliably and takes S3 subtasks'],
      ['2. C++ fluent', 'Writes contest C++ from memory, with the standard library'],
      ['3. Full S3 and S4', 'Solves middle Senior problems completely, in time'],
      ['4. Olympiad ready', 'Earns real marks on S5 and on past CCO problems']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child\'s teacher which stage they are at, not whether they will be invited. Stages can be worked on; invitations cannot.',
      'Stage 2 is the one families often skip. Without C++ fluency, a strong Senior result cannot carry into the CCO.'
    ] },
    right: { h3: 'For students', ps: [
      'Solve the small subtask first, every time. It is marks, and it is your checker.',
      'Re-solve your old Python solutions in C++. It is the fastest way to switch.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students heading towards olympiad level',
    lede: 'Each course has a fixed teacher and meets live online; families pick a group place or private lessons, from any province.',
    bands: [
      { num: 'I', h3: 'Building up', sub: 'Grades 8 to 10', courses: [
        { code: 'CCO / UP / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The usual first CCC language.' },
        { code: 'CCO / UP / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures before contests.' },
        { code: 'CCO / UP / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra and proof underneath algorithms.' }
      ] },
      { num: 'II', h3: 'Senior level', sub: 'Grades 10 to 12', courses: [
        { code: 'CCO / SEN / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Counting and combinatorics for S3 and S4.' },
        { code: 'CCO / SEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For students whose school teaches Java.' },
        { code: 'CCO / SEN / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python experiments with number patterns, ages 10 to 15.' }
      ] },
      { num: 'III', h3: 'Olympiad and beyond', sub: 'Strongest students', courses: [
        { code: 'CCO / OLY / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'Contest technique past high school.' },
        { code: 'CCO / OLY / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Advanced structures, ages 18 and up.' },
        { code: 'CCO / OLY / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ masterclass', blurb: 'Templates, memory and the STL, for adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live olympiad-track classes, timed for Canada',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school evenings, shown in your provincial time.' },
      { time: 'Weekends', l: 'Weekend mornings for long problem sessions.' },
      { time: '1-on-1', l: 'Shaped around a multi-year plan for one student.' }
    ],
    cells: [
      { h3: 'C++ throughout', p: 'The olympiad language from the first Senior class.' },
      { h3: 'Subtasks first', p: 'Simple solutions, then the full idea.' },
      { h3: 'Our own tasks', p: 'Original problems; CEMC\'s archive for past ones.' },
      { h3: 'Stress testing', p: 'Brute-force checks on every solution.' },
      { h3: 'Every province', p: 'Students from British Columbia to the Atlantic.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Olympiad training runs alongside real projects. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'Parents\' Google reviews, as written.',

  fees: {
    h2: 'Fees',
    lede: 'No family pays for a CCO invitation, and none can buy one. Our fee is for live teaching only, paid monthly, so a student can train for a season or for several years without committing to either.',
    free: ['A free first class', 'One Senior-level task in C++', 'No card required'],
    group: ['Fifteen to twenty students in a batch', 'A regular teacher', 'A batch time you choose', 'Charged by the month'],
    one: ['A teacher for one student', 'A plan across several years', 'C++ reviewed line by line']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'The Canadian Computing Olympiad: common questions',
    items: [
      { q: 'What is the Canadian Computing Olympiad?', a: 'It is an invitation-only week run by CEMC at the University of Waterloo each spring, with workshops, a contest and other activities. CEMC also uses it to select Canada\'s team for the International Olympiad in Informatics.' },
      { q: 'How does a student qualify for the CCO?', a: 'Through the Senior paper of the Canadian Computing Competition. CEMC invites about 20 of the top official CCC Senior participants from schools in Canada, and may also invite outstanding participants such as Canadian citizens or permanent residents at school abroad. Selection is at CEMC\'s discretion.' },
      { q: 'Can a student apply to the CCO directly?', a: 'No. CEMC lists no application. Invitations come from CCC Senior results, and only official participants are eligible, which for a school in Canada means born on or after 1 July 2007 and living in Canada.' },
      { q: 'What programming language is used at the CCO?', a: 'C++ only. CEMC says CCO participants must use C++, even though the CCC itself also accepts C, Python and Java. Students hoping for an invitation should switch to C++ before writing CCC Senior.' },
      { q: 'How is Canada\'s IOI team chosen?', a: 'CEMC says Canada\'s IOI entry is determined by performance on the Canadian Computing Competition, and that top scorers on the CCO contest are then selected for the team. CEMC trains the team and leads the delegation.' },
      { q: 'How did Canada do at IOI 2026?', a: 'CEMC reports that the team returned from Tashkent, Uzbekistan with four medals in 2026, two silver and two bronze.' },
      { q: 'Does my child need to screen-record the CCC to be invited?', a: 'It is not required, but CEMC strongly recommends that schools record the screens of students aiming for the CCO, and keep the recordings for a month. CEMC adds that being asked for one does not guarantee an invitation.' },
      { q: 'When is the 2027 CCO?', a: 'CEMC says the CCO is held at the University of Waterloo each spring, but it had not posted a 2027 date when we checked on 22 October 2026. The CCC Senior paper that leads to it is on 17 February 2027.' },
      { q: 'Can Modern Age Coders get my child into the CCO?', a: 'No. Invitations are decided by CEMC from CCC results, at its discretion, and we are not connected with CEMC. We teach the algorithms and C++ that strong Senior writers need.' },
      { q: 'When are your olympiad-track classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are agreed in Eastern time and converted to your province.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian students aiming high in algorithms.',
    items: [
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The contest every CCO invitation comes from.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'Where most olympiad students began.' },
      { href: '/ioi-olympiad-informatics-training', label: 'IOI training', p: 'The international level in more depth.' },
      { href: '/coding-olympiad-medal-track', label: 'Coding olympiad track', p: 'Our longer view of olympiad training.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'Another algorithm contest open to Canadians.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every Canada page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a Senior-level task in C++, solved with the student. Afterwards the teacher tells you honestly which stage the student is at, and what a sensible path towards the CCO would look like from here.',
    readFirst: 'Curious about the teaching first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live class, and our <a class="ag-inline-link" href="/courses">courses page</a> sets out what each one covers.',
    note: 'All lessons are live over video; our teachers are in India and there is no Canadian centre. WhatsApp gets the quickest reply.',
    formNote: 'No card is needed, and the first class is free.'
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
    bottomRight: 'Small subtask first'
  },

  personalityCss: `
.ag-root.ag-ccoc .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ccoc .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-ccoc .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-ccoc .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.005em; }
.ag-root.ag-ccoc .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-ccoc .ag-slots { gap: 1.35rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) CCC page (CCO section and awards), Canada at the IOI page, the 2026 IOI news story and the past contests page, read raw on 22 October 2026: CCO a week-long learning experience with workshops and a contest; invitation-only; about 20 top official Senior participants from schools in Canada, each spring at Waterloo; outstanding participants abroad may be invited; selection at CEMC\'s discretion; C++ only; official status rules; screen recording recommended for CCO hopefuls and kept a month; plaques and medallist prizes; IOI tasks algorithmic; Canada\'s IOI entry determined by CCC performance; four-person delegations, two competition days; IOI 2026 four medals (two silver, two bronze) from Tashkent; results back to IOI 1996.',
    localProject: 'An original IOI-style task, Signal Towers, with a subtask-1 C++ solution and a full sort-and-window C++ solution, both stress-tested against brute force on 400 random cases; a Python-to-C++ contest table; a multi-year path from Grade 9 to Grade 12; our arithmetic 200,000 x 199,999 / 2 = 19,999,900,000. Lesson family: solving in subtasks.',
    requiredMentions: ['is at the discretion of the CEMC', 'Canadian citizens or permanent residents attending school outside of Canada', 'being asked to provide a screen recording does not guarantee an invitation', 'during two competition days', 'typically send a delegation of four contestants to compete individually', 'Top scorers on this contest at the CCO are then selected to represent team Canada at the IOI', 'Signal Towers', 'Subtask 1 (40 percent of the marks)', 'priority_queue with greater'],
    sources: [
      { claim: 'CCO format, invitation rule, about 20 invited each spring at Waterloo, outstanding participants abroad, discretion, C++ only, official status, screen recording, plaques and prizes.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'IOI tasks algorithmic; Canada\'s IOI entry determined by CCC performance; results table back to 1996.', url: 'https://cemc.uwaterloo.ca/contests/ccc/ioi' },
      { claim: 'IOI 2026 four medals from Tashkent; delegations of four; two competition days; CCO top scorers selected; CEMC trains and leads the team.', url: 'https://cemc.uwaterloo.ca/team-canada-brought-back-four-medals-ioi-2026' },
      { claim: 'CCO included in the past contests archive filter.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' }
    ],
    rejectedClaims: [
      'Names of IOI medallists, team leaders, schools or cities from CEMC\'s pages: not reproduced; medal counts only.',
      'Gender-scoped workshops and teams described on the same CEMC page: deliberately left out of this page.',
      'A 2027 CCO date: not posted by CEMC when checked; the grader\'s undated May notice is not used.',
      'Prize amounts as typed figures: omitted.',
      'That our classes lead to CCO invitations or IOI places: refused; CEMC decides at its discretion.',
      'Any affiliation with CEMC, the University of Waterloo or the IOI: none, and the page says so.'
    ]
  }
};
