---
title: "CCC Senior 2027 Guide: Graphs, DP and Efficient Code"
description: "CCC Senior 2027 from CEMC's own page: what S1 to S5 test, how efficiency earns subtask marks, and three original problems solved in C++ and Python."
canonical: https://learn.modernagecoders.com/ccc-senior-guide
source: src/pages/ccc-senior-guide.html
---
> CCC Senior is the harder Canadian Computing Competition paper from Waterloo's CEMC: five algorithm problems in three hours on 17 February 2027, from sorting up to IOI level, for fluent coders ready for graphs and dynamic programming. Modern Age Coders teaches it live online, one to one or in a batch, in its CCC Junior and Senior Preparation course.

[Home](/) / [Courses](/courses) / [Coding classes in Canada](/coding-classes-in-canada) / CCC Senior guide

Canada · Canadian Computing Competition · Senior level

# CCC Senior guide for 2027

At Senior level, the Canadian Computing Competition stops asking whether a student can program and starts asking whether the program is fast enough. The five problems climb from sorting and searching to what CEMC calls an "IOI level question", and later problems hold back marks for solutions that only an efficient algorithm can earn inside the grader's time limit. This guide works from CEMC's 2027 contest page and the CCC Online Grader documents. It sets out what each band of questions asks for, how to read input limits as a hint about the intended algorithm, and three Senior-style problems we wrote, each solved in both C++ and Python and tested against a brute-force checker.

At a glance: Organiser: CEMC, University of Waterloo; Senior 2027: Wednesday 17 February 2027; Problems: S1 to S5, 15 marks each; Hardest band: S5, at IOI level; Limits: 3 s and 512 MB per test; Next step: About 20 invited to the CCO; Classes: Weekdays or weekends, flexible; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses for a CCC Senior writer

The first is the CCC course itself, with a Senior track. The second deepens the algorithms; the third is for students switching to the language the CCO requires.

- [CCC Junior and Senior Preparation](/courses/ccc-junior-and-senior-preparation-course): Its Senior track: graphs, dynamic programming and timed Senior papers, paced to the 17 February 2027 contest.
- [Competitive programming for teens](/courses/competitive-programming-for-teens-course): For teenagers ready for contest algorithms. The toolkit behind S3 to S5: shortest paths, DP, data structures, complexity.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): From the first line of C++, for teens. Suits a Python writer moving to C++, the only language CEMC allows at the CCO.

## What CEMC publishes about the 2027 Senior paper

CEMC runs one CCC with two papers. The format is shared; what changes at Senior is the material. The rows below come from CEMC's CCC page and the grader's sample-programs document, read on 22 October 2026.

**CCC Senior 2027, from CEMC (read 22 October 2026)**

| Point | What CEMC says |
|---|---|
| Who Senior is for | "Senior level - any participant with intermediate to advanced programming skills." |
| Date | Wednesday 17 February 2027 in North and South America; Thursday 18 February 2027 elsewhere. |
| S1 and S2 | "Basic algorithms" "(e.g. sorting, searching)" |
| S3 and S4 | "More advanced algorithms" "(e.g. careful counting, more advanced mathematical reasoning)" |
| S5 | "IOI level question" |
| Marks | Five problems at 15 each, so 75 in all, with partial scores by subtask. |
| Efficiency subtasks | For later questions, "a score might be assigned for input that only efficient solutions can solve within the time limits". |
| C++ on the grader | "Compiler Version: GCC 11.4.0", "Compiler options: -O2 -std=c++17 -static" |
| Python 3 on the grader | PyPy3 7.3.9, running Python 3.8.13 |
| Recognition | "The names of some top-scoring official participants appear in student honour rolls for the Senior competition." |
| Onward | CEMC invites about 20 of the top official Senior participants from schools in Canada to the Canadian Computing Olympiad each spring. |

Sources: [CEMC, Canadian Computing Competition](https://cemc.uwaterloo.ca/contests/ccc) and [CCC sample programs and language details](https://cccgrader.com/sample_soln.pdf), read 22 October 2026. Modern Age Coders has no connection with CEMC or the University of Waterloo. For the Junior paper, see our [CCC Junior guide](/ccc-junior-guide).

### The 2026 Senior numbers, read honestly

CEMC's table for 2026 gives the Senior paper an average of 15.56 out of 75, a Certificate of Distinction cutoff of 26, and 2439 contestants. Our reading, labelled as ours: the mean is about 20.7 percent of the paper (15.56 / 75), close to one full problem, and the cutoff is one full problem plus 11 more marks (26 = 15 + 11), about 34.7 percent.

Those figures say Senior is hard by design. A student who solves S1 completely and collects partial marks on S2 or S3 was in distinction territory in 2026. CEMC sets the cutoff to "the top 25% of all competitors", so it moves with each year's paper.

### Who should write Senior

CEMC leaves the choice of level to each student, whatever the grade. Our test is practical: if the student can finish the first two Senior problems from recent past papers inside about an hour, Senior is the right paper.

A student who is close but unsure can open both papers, but the three hours are shared and only the higher score counts, so we settle the level before the day rather than in the room.

## The skills each band of Senior questions draws on

CEMC describes the bands in a few words each. This map, which is ours, expands those words into the techniques that Senior problems have tended to need, and how we teach each one.

**Senior skills by question band (our map of CEMC's outline)**

| Band | Techniques a student should own | Typical warning sign in practice |
|---|---|---|
| S1 and S2 | Sorting with a custom key, binary search, prefix sums, two pointers, simulation with care, sets and maps | A correct answer that times out on the largest inputs |
| S3 | Breadth-first and depth-first search, grids as graphs, greedy choices with a proof, counting with care | Missing a case such as an empty grid row or a repeated value |
| S4 | Weighted shortest paths, dynamic programming on sequences and grids, modular arithmetic, union-find | An answer that overflows 32-bit integers |
| S5 | Harder dynamic programming, data structures such as segment trees, clever reformulations | Only the first subtask solved, with no idea of the full method |

### Graphs are the backbone

Many Senior problems are graph problems in disguise: rooms and doors, stations and tracks, cells of a grid. The first skill we teach at Senior level is recognising the graph, naming its nodes and edges, before writing any code.

Once the graph is named, the method usually follows from the edges: unweighted edges suggest breadth-first search, weighted ones Dijkstra's algorithm, and "is everything connected" questions union-find.

### Dynamic programming is the other half

The second skill is defining a state: what is the smallest piece of information that, once known, lets the rest of the answer be built? Our third practice problem below is a clean example, where the state is "the cheapest way to cover every day up to day t".

Students who learn DP as a list of famous problems struggle at S4. Students who learn to write the state in one sentence, then the transition, do not.

## Reading the input limits: how fast does the solution need to be?

Unless a problem says otherwise, the CCC rules give each test three seconds and 512 MB. Problem statements also state the largest input size, and that number is the strongest clue to the intended algorithm. The budget table below is our rule of thumb for C++, not a CEMC rule.

**Largest input size and the running time it usually allows (our rule of thumb, C++ with -O2, about 10^8 simple steps a second)**

| Largest N in the statement | Approach that usually fits | Example technique |
|---|---|---|
| Up to about 20 | Exponential, such as 2^N | Trying every subset |
| Up to about 500 | Cubic, N^3 | Three nested loops, Floyd-Warshall |
| Up to about 5,000 | Quadratic, N^2 | DP over pairs |
| Up to about 200,000 | N log N | Sorting, heaps, binary search |
| Up to about 1,000,000 or more | Linear, N | One pass with prefix sums |

### Python at Senior level

CEMC is candid that a perfect score may not be possible in every language, naming Python and Java as examples, while promising at least one language in which the right algorithms and data structures can reach full marks. In practice, Python Senior writers should expect to lose some marks on the largest tests of S4 and S5.

The grader runs Python 3 as PyPy3, which helps, but the habits matter more: read all input at once with sys.stdin.buffer, avoid deep recursion, and keep inner loops free of function calls. Write to Python 3.8 syntax, as that is what the grader runs.

### C++ at Senior level

The grader compiles C++ with GCC 11.4.0 using -O2 and -std=c++17, so modern library features are available. Two lines of setup, ios::sync_with_stdio(false) and cin.tie(nullptr), make input fast enough for large tests.

The commonest Senior C++ bug we see is overflow: a sum of 200,000 values up to a billion does not fit in an int. Use long long whenever a total might pass about two billion.

How the grader reports a slow program matters too. The CCC rules list five verdicts: correct, compilation error, time-limit exceeded, run-time error and wrong answer. Within a subtask, feedback stops at the first failing test: "Otherwise, feedback is provided for all test cases up to and including the first test case that is not correct." A time-limit verdict on a late test is the grader telling the student the method, not the code, needs to change.

Source: [CCC rules](https://cccgrader.com/rules.pdf), linked from CEMC's CCC page, read 22 October 2026.

## Three original Senior-style problems, solved in C++ and Python

We wrote these three for our Senior students. They are our problems, not CEMC's, and none is copied or adapted from a past CCC; CEMC's own past papers are in its free archive. Problem A sits at S1 to S2 level, B at S3 to S4, and C at S3 to S4. Every solution was run on its sample input in both languages and checked against a brute-force solver on 300 random small cases, with no mismatches.

Problem A: Rink Bookings. An arena has N bookings for its one rink. Booking i runs from time s to time e, including s but not e, so a booking that ends at 5 and another that starts at 5 do not overlap. Print the largest number of bookings that are in progress at the same moment. Input: N (1 to 200,000), then N lines each holding s and e (0 &le; s < e &le; 1,000,000,000). Output: one integer.

**Problem A · sample** (text)
```text
Sample input:
5
1 4
2 5
4 7
5 6
3 4

Sample output:
3
```

**Problem A · a correct but slow first attempt (Python)** (python)
```python
# Our slow first attempt at Rink Bookings: correct, but O(N x T)
n = int(input())
bookings = [tuple(map(int, input().split())) for _ in range(n)]
peak = 0
for t in range(min(s for s, e in bookings), max(e for s, e in bookings)):
    here = sum(1 for s, e in bookings if s <= t < e)
    peak = max(peak, here)
print(peak)
```
This checks every moment between the earliest start and the latest end, so its work grows with the time span T as well as N. On small inputs it is right, and on a real Senior paper it would collect an early subtask. With times up to a billion, it cannot finish in three seconds.

**Problem A · our efficient solution (Python)** (python)
```python
# Our practice problem S-A: Rink Bookings (not a CEMC problem)
import sys

def main():
    data = sys.stdin.buffer.read().split()
    n = int(data[0])
    events = []
    for i in range(n):
        s = int(data[1 + 2 * i])
        e = int(data[2 + 2 * i])
        events.append((s, 1))    # a booking starts
        events.append((e, -1))   # a booking ends
    # at equal times, -1 sorts before +1: an end at 5 frees the ice
    # before a start at 5 takes it
    events.sort()
    now = peak = 0
    for _, change in events:
        now += change
        if now > peak:
            peak = now
    print(peak)

main()
```

**Problem A · our efficient solution (C++)** (cpp)
```cpp
// Our practice problem S-A: Rink Bookings (not a CEMC problem)
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<pair<long long, int>> events;
    events.reserve(2 * n);
    for (int i = 0; i < n; i++) {
        long long s, e;
        cin >> s >> e;
        events.push_back({s, 1});    // a booking starts
        events.push_back({e, -1});   // a booking ends
    }
    sort(events.begin(), events.end());  // -1 before +1 at equal times
    int now = 0, peak = 0;
    for (auto &ev : events) {
        now += ev.second;
        peak = max(peak, now);
    }
    cout << peak << "\n";
    return 0;
}
```
Turn each booking into two events, sort them, and sweep once: O(N log N). The detail that decides the answer is the tie: sorting puts an end (-1) before a start (+1) at the same time, which matches "including s but not e". Treat the end as inclusive and the sample gives 4, not 3.

Problem B: Trail Count. A provincial park has N junctions joined by M two-way trails, each with a length in metres. Print the length of the shortest route from junction 1 to junction N, and the number of different shortest routes, modulo 1,000,000,007. Two routes are different if they use a different sequence of trails. Junction N can always be reached. Input: N and M (2 &le; N &le; 100,000; 1 &le; M &le; 200,000), then M lines a b w (1 &le; w &le; 1,000). Output: the distance and the count, separated by a space.

**Problem B · sample** (text)
```text
Sample input:
5 6
1 2 2
1 3 2
2 4 3
3 4 3
4 5 1
1 5 7

Sample output:
6 2
```

**Problem B · our solution (Python)** (python)
```python
# Our practice problem S-B: Trail Count (not a CEMC problem)
import sys
import heapq

MOD = 1000000007

def main():
    data = sys.stdin.buffer.read().split()
    n, m = int(data[0]), int(data[1])
    adj = [[] for _ in range(n + 1)]
    pos = 2
    for _ in range(m):
        a, b, w = int(data[pos]), int(data[pos + 1]), int(data[pos + 2])
        pos += 3
        adj[a].append((b, w))
        adj[b].append((a, w))
    INF = float("inf")
    dist = [INF] * (n + 1)
    ways = [0] * (n + 1)
    dist[1] = 0
    ways[1] = 1
    heap = [(0, 1)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue                      # an old, longer entry
        for v, w in adj[u]:
            nd = d + w
            if nd < dist[v]:              # a strictly shorter route
                dist[v] = nd
                ways[v] = ways[u]
                heapq.heappush(heap, (nd, v))
            elif nd == dist[v]:           # another route of equal length
                ways[v] = (ways[v] + ways[u]) % MOD
    print(dist[n], ways[n])

main()
```

**Problem B · our solution (C++)** (cpp)
```cpp
// Our practice problem S-B: Trail Count (not a CEMC problem)
#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007LL;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n, m;
    cin >> n >> m;
    vector<vector<pair<int, int>>> adj(n + 1);
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        adj[a].push_back({b, w});
        adj[b].push_back({a, w});
    }
    const long long INF = LLONG_MAX;
    vector<long long> dist(n + 1, INF), ways(n + 1, 0);
    priority_queue<pair<long long, int>, vector<pair<long long, int>>,
                   greater<pair<long long, int>>> pq;
    dist[1] = 0;
    ways[1] = 1;
    pq.push({0, 1});
    while (!pq.empty()) {
        long long d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        if (d > dist[u]) continue;            // an old, longer entry
        for (auto &edge : adj[u]) {
            int v = edge.first;
            long long nd = d + edge.second;
            if (nd < dist[v]) {               // a strictly shorter route
                dist[v] = nd;
                ways[v] = ways[u];
                pq.push({nd, v});
            } else if (nd == dist[v]) {       // another route of equal length
                ways[v] = (ways[v] + ways[u]) % MOD;
            }
        }
    }
    cout << dist[n] << " " << ways[n] << "\n";
    return 0;
}
```
Dijkstra's algorithm with one extra array. When a strictly shorter route reaches v, its count resets to the count at u; when an equally short one arrives, the counts add. Because every length is positive, a junction's count is final by the time it leaves the queue. In the sample, 1-2-4-5 and 1-3-4-5 both measure 6 and the direct trail measures 7, so the answer is 6 2. The count goes modulo 1,000,000,007 because it can grow exponentially; the distance cannot exceed about 10^8, so it needs no modulus.

Problem C: Ice Time Passes. A skater will practise on D given days of the season, numbered 1 to 365. The rink sells a 1-day pass, a 7-day pass and a 30-day pass, priced in tokens; a pass bought on day t covers day t and the following days up to its length. Print the fewest tokens needed to cover every practice day. Input: D (1 to 365), then the D days in increasing order, then the three prices. Output: one integer.

**Problem C · sample** (text)
```text
Sample input:
9
1 2 3 4 5 9 10 25 31
3 10 24

Sample output:
22
```

**Problem C · our solution (Python)** (python)
```python
# Our practice problem S-C: Ice Time Passes (not a CEMC problem)
import sys

def main():
    data = sys.stdin.buffer.read().split()
    d = int(data[0])
    days = set(int(x) for x in data[1:1 + d])
    day_pass, week_pass, month_pass = (int(x) for x in data[1 + d:4 + d])
    last = max(days)
    # fewest[t] = fewest tokens to cover every practice day from 1 to t
    fewest = [0] * (last + 1)
    for t in range(1, last + 1):
        if t not in days:
            fewest[t] = fewest[t - 1]         # nothing to cover today
            continue
        fewest[t] = min(fewest[t - 1] + day_pass,
                      fewest[max(0, t - 7)] + week_pass,
                      fewest[max(0, t - 30)] + month_pass)
    print(fewest[last])

main()
```

**Problem C · our solution (C++)** (cpp)
```cpp
// Our practice problem S-C: Ice Time Passes (not a CEMC problem)
#include <bits/stdc++.h>
using namespace std;

int main() {
    int d;
    cin >> d;
    vector<int> days(d);
    for (int &x : days) cin >> x;
    long long dayPass, weekPass, monthPass;
    cin >> dayPass >> weekPass >> monthPass;
    int last = *max_element(days.begin(), days.end());
    vector<bool> practice(last + 1, false);
    for (int x : days) practice[x] = true;
    // fewest[t] = fewest tokens to cover every practice day from 1 to t
    vector<long long> fewest(last + 1, 0);
    for (int t = 1; t <= last; t++) {
        if (!practice[t]) { fewest[t] = fewest[t - 1]; continue; }
        fewest[t] = min({fewest[t - 1] + dayPass,
                       fewest[max(0, t - 7)] + weekPass,
                       fewest[max(0, t - 30)] + monthPass});
    }
    cout << fewest[last] << "\n";
    return 0;
}
```
The state, in one sentence: fewest[t] is the cheapest way to cover every practice day from day 1 to day t. On a non-practice day nothing changes; on a practice day, the last pass bought either was a 1-day pass, or a 7-day or 30-day pass that began within the last week or month. In the sample, a 7-day pass for days 1 to 5 and single passes for days 9, 10, 25 and 31 cost 10 + 4 x 3 = 22. The tempting greedy answer, a 30-day pass because it is cheapest per day, gives 24 + 3 = 27.

### How we check our own solutions

Every solution on this page was compared with a deliberately simple brute-force program that tries everything, on hundreds of tiny random inputs. When the two disagree, the tiny input that caused it is the fastest bug report there is.

We teach students to write that brute force first at Senior level. It earns the small subtasks on contest day, and in practice it is the safety net that makes the clever solution trustworthy.

### What the three have in common

Each has a version that is easy to write and too slow, and a version that needs one real idea: a sweep, a count carried through Dijkstra, a DP state. Senior marks are mostly earned in the step between the two.

Each also hides one detail in the wording: an exclusive end time, parallel trails that count as different routes, a pass that covers the day it is bought. Reading Senior statements slowly is not optional.

## A Senior season, from November 2026 to 17 February 2027

Our plan for a student who can already pass the Junior paper comfortably and is moving up. It assumes two live classes a week in our CCC course, a problem set between them, and C++ or Python chosen before the first block. Each block ends with an exit check, so the student moves on only when ready.

**A five-block Senior plan (ours)**

| Block | Dates | Focus | Exit check |
|---|---|---|---|
| 1 | 2 to 22 November 2026 | Sorting with keys, binary search, prefix sums, sweeps | Problem A above solved efficiently from a blank file |
| 2 | 23 November to 13 December 2026 | BFS and DFS, grids as graphs, union-find | Three past S3 problems solved, at least partly |
| 3 | 14 December 2026 to 10 January 2027 | Dijkstra, counting with modulus, a lighter holiday fortnight | Problem B above, and one past S4 |
| 4 | 11 January to 31 January 2027 | Dynamic programming on sequences and grids | Problem C above, with the state written in one sentence |
| 5 | 1 to 17 February 2027 | Two full timed Senior papers, review, the Practice Contest | Calm on the day, with a plan for which problems to try first |

### Contest-day order

Read all five problems in the first fifteen minutes. Solve S1 completely. Then, for each of S2 to S5, ask which subtasks can be taken with a simple method, and collect those before chasing any full solution.

The grader keeps the highest score from all submissions on each problem, so a working slow version submitted early is never wasted.

### What not to do in February

Do not learn a new data structure in the final week. Senior marks come from methods that are fluent, not from ones read about on the weekend before.

Do not rely on saved code. The CCC rules say "Access to other source or starter code is not allowed during the competition." Every line is typed on the day, which is why we practise writing Dijkstra from memory.

## Where a strong Senior result leads

Senior is the only CCC paper with a path onward. CEMC describes it in a few lines, and the step is steep.

**After CCC Senior, from CEMC's CCC page (read 22 October 2026)**

| Step | What CEMC says |
|---|---|
| Honour roll | Some top-scoring official participants are named in Senior honour rolls, unless they opt out. |
| Official status | For writers at a school in Canada: born on or after 1 July 2007, and living in Canada. |
| Canadian Computing Olympiad | About 20 of the top official Senior participants from schools in Canada are invited each spring, at CEMC's discretion. |
| Language at the CCO | "CCO participants must use C++." |
| International Olympiad in Informatics | The CCO is also used to select Canada's IOI team. |

Our honest framing for families: about twenty invitations a year from the whole country is a tiny number, and no teacher can promise one. A Senior paper that goes well is worth preparing for on its own terms, for the algorithms it teaches. Our [CCC preparation page](/canadian-computing-competition-ccc-prep) covers the full route, and [IOI training](/ioi-olympiad-informatics-training) describes what the international level asks.

## Reading and practice material for Senior writers

CEMC points Senior writers to its own archive, its grader and two books. We send students to the originals and never reproduce CEMC's problems.

**Material CEMC lists on its CCC page (read 22 October 2026), and how we use it**

| Material | What it is | How we use it at Senior level |
|---|---|---|
| [CEMC past contests](https://cemc.uwaterloo.ca/resources/past-contests) | Past CCC papers, solutions and results from the last ten years | Past S3 and S4 problems as weekly targets from December |
| [CCC Online Grader](https://cccgrader.com/) | The contest system, with a free practice account and previous contests | Every practice solution submitted, so verdicts become familiar |
| [Competitive Programming](https://cpbook.net/), Halim and Halim | A book CEMC names for preparation | Reference for graph and DP chapters |
| [Competitive Programmers Handbook](https://cses.fi/book/index.php), Antti Laaksonen | A book CEMC names for preparation | Our first reading for students new to complexity |

## Four stages from Junior to Senior

How our teachers judge readiness for the Senior paper. The stages are ours.

**Senior readiness (ours)**

| Stage | What it looks like |
|---|---|
| 1. Strong Junior | Solves Junior problems 4 and 5 inside the time |
| 2. Correct but slow | Solves S1 and S2, but large tests time out |
| 3. Efficient | Chooses an algorithm from the input limits before coding |
| 4. Senior ready | Takes subtasks on S3 to S5 and finishes S1 and S2 quickly |

### For parents

Stage 2 is where most students arrive from Junior, and it is where a teacher helps most: the step from correct to efficient is about method, not effort.
A useful question to ask your child: what is the largest input, and how many steps will your program take on it?

### For students

Before coding, write the complexity you are aiming for next to the input limit.
Keep a brute-force solver for every practice problem. It catches the bugs your clever version hides.

## Nine courses on the road through CCC Senior

Live online, one regular teacher, a batch or a one-to-one place, for students anywhere in Canada.

### Foundations

Before Senior

- [Python for teens](/courses/python-complete-masterclass-teens): Fluent Python before contest Python.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Another CCC language, from the start.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Data structures without the clock.

### Senior toolkit

Grades 10 to 12

- [High school math](/courses/complete-high-school-mathematics-mastery): The reasoning that S3 and S4 lean on.
- [Competition math](/courses/olympiad-competition-mathematics-mastery): Counting and proof for careful counting problems.
- [Maths through coding](/courses/maths-through-coding): Math ideas checked in code, for younger strong students.

### After Senior

University level

- [Competitive programming, advanced](/courses/competitive-programming-masterclass-college): Contest work beyond school.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): The full treatment, ages 18 and up.
- [C++ masterclass](/courses/cpp-programming-complete-masterclass-college): Modern C++ in depth, ages 18 and up.

## Live Senior classes that fit a Canadian school year

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Evening slots after school, in your province's time.
- **Weekends** Weekend mornings for longer algorithm sessions.
- **1-on-1** Paced to the student and to 17 February 2027.

- **Our problems** Original Senior-style sets, tested before use.
- **Two languages** Python or C++, and help switching between them.
- **Complexity first** Every solution starts from the input limits.
- **Brute-force checks** Students learn to test their own code.
- **Timed papers** Full three-hour Senior sittings in February.
- **Batch or one to one** A batch of fifteen to twenty, or a teacher to yourself.

## Fees

Schools pay CEMC for the contest; we have no part in that. Our monthly fee pays for live algorithm teaching, month by month, so a family can stop after February with nothing owed.

- Free first class: USD 0. A free first class. One Senior-style problem, solved together. No card details asked.
- Group batch: USD 100 a month. Fifteen to twenty students in a batch. The same teacher through February. A batch time you pick. Monthly payment.
- One to one: USD 150 a month. A teacher of your own. Built around Senior targets. Your own code reviewed line by line.

## CCC Senior: common questions

### What is CCC Senior?

It is the Senior level of the Canadian Computing Competition, run by CEMC at the University of Waterloo, for participants with intermediate to advanced programming skills. Students solve five algorithm problems online, at school, in three hours.

### When is CCC Senior in 2027?

CEMC lists the 2027 CCC, Junior and Senior, for Wednesday 17 February 2027 in North and South America and Thursday 18 February 2027 elsewhere. Schools order it by Thursday 11 February 2027.

### What topics come up in CCC Senior?

CEMC describes S1 and S2 as basic algorithms such as sorting and searching, S3 and S4 as more advanced algorithms with careful counting and mathematical reasoning, and S5 as an IOI level question. In practice that means graphs, dynamic programming and efficient code.

### What score earned a Certificate of Distinction on CCC Senior in 2026?

CEMC lists a 2026 Senior cutoff of 26 out of 75, with an average of 15.56 and 2439 contestants. The cutoff marks the top 25 percent of competitors, so it changes each year.

### Should a Senior writer use Python or C++?

Both are allowed. CEMC warns that a perfect score may not always be possible in Python or Java, and the CCO requires C++. We let students write Senior in Python if it is their strong language, and move CCO hopefuls to C++.

### Can a Grade 9 student write CCC Senior?

Yes. CEMC lets each participant choose Junior or Senior regardless of grade. The question is skill: whether the student can finish the first two Senior problems from past papers in good time.

### How does CCC Senior lead to the CCO?

CEMC invites about 20 of the top official CCC Senior participants from schools in Canada to the Canadian Computing Olympiad each spring, at its discretion. The CCO is also used to choose Canada's IOI team.

### Can students use templates or AI during the CCC?

No. The CCC rules forbid other source or starter code during the contest and forbid generative AI, including tools inside an editor. Outside the contest, ChatGPT needs a parent's permission for anyone under 18.

### Where are CCC Senior past problems?

CEMC publishes past CCC papers, solutions and results free on its past contests page, and the CCC Online Grader offers a free practice account with previous contests. Our own practice problems are written by our teachers.

### When are your CCC Senior classes for Canadian families?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix the time in Eastern time and convert it for your province.

## Related pages

- [CCC preparation](/canadian-computing-competition-ccc-prep): Our main CCC page, Junior and Senior.
- [CCC Junior guide](/ccc-junior-guide): The level below, for students moving up.
- [Coding classes in Canada](/coding-classes-in-canada): All our pages for Canadian families.
- [IOI training](/ioi-olympiad-informatics-training): What the international olympiad asks.
- [USACO preparation](/usaco-preparation-online-coaching): Another online algorithm contest.
- [How to debug code](/how-to-debug-code): Finding the bug a verdict does not name.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ccc-senior-guide](https://learn.modernagecoders.com/ccc-senior-guide#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
