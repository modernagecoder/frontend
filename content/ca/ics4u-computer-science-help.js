'use strict';
// ICS4U computer science help (ag- school course door; Canada cluster Plan 2, row 4).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ics4u-computer-science-help/;
// the PDF and the API response are byte-identical to the research copies in ca/src/ontario; facts-schools-contests.md rows 22 to 37):
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf.
//    ICS4U description: "This course enables students to further develop knowledge and skills in computer science."; "Student teams
//    will manage a large software development project, from planning through to project review."; "Students will also analyse
//    algorithms for effectiveness."; "Prerequisite: Introduction to Computer Science, Grade 11, University Preparation". Overall
//    expectations A1 to A4, B1, B2, C1, C2, D2, D3, D4 (quoted on the page). Specific expectations: A1.1 "integer division and resultant
//    remainders"; A1.3 "non-numeric comparisons (e.g., strings, comparable interface)"; A1.4 "limitations of finite data representations
//    (e.g., integer bounds, precision of floating-point real numbers, rounding errors)"; A2.1 "divided among multiple files"; A3.5 "process
//    pixels in an image"; A3.6 "calculate a factorial, translate numbers into words, perform a merge sort, generate fractals, perform XML
//    parsing"; A4.2 "unit testing, integration testing, regression testing"; A4.3 "doc comments, docstrings, block comments, line
//    comments"; B1.1 "producing a software scope document and determining the tasks, deliverables, and schedule"; B1.4 "Gantt chart, PERT
//    chart, calendar"; B1.6 "compare plan to actual performance"; B2.2 "managing individual time during a group project"; C1.1
//    "(e.g., stack, queue, dictionary)"; C1.2 "apply data encapsulation in program design"; C2.1 "a precondition (i.e., starting state)
//    and a postcondition (i.e., ending state)"; C2.2 and C2.3 "using run times and computational complexity analysis"; C2.4 "infinite
//    recursion, exponential growth in recursive algorithms such as Fibonacci numbers"; D2.2 "ACM [Association for Computing Machinery]
//    and IEEE"; half-credit rule "with the exception of the Grade 12 university preparation course, they may also be delivered as
//    half-credit courses"; strand names A. Programming Concepts and Skills, B. Software Development, C. Designing Modular Programs,
//    D. Topics in Computer Science; achievement chart level 3 "provincial standard".
//  - Ontario curriculum content API (ws.api.dcp.edu.gov.on.ca): ICS4U "Computer Science", year issued 2008, Grade 12, prerequisite
//    "Introduction to Computer Science, Grade 11, University Preparation" (api-ics-courses.json).
//  - Admissions (facts-schools-contests.md rows 203 to 212, saved in ca/src/admissions): Waterloo Computer Science lists Advanced
//    Functions and Calculus and Vectors and names "Grade 11 U Introduction to Computer Science" as its recommended course (it names no
//    Grade 12 computer science course); U of T's three Computer Science listings name ENG4U / EAE4U and math courses only.
// Our own material, labelled on the page: the playlist ranking problem (Track objects, recursive merge sort) in Python 3.13 and
// Java 22, both run and printing the same eight lines and "Comparisons: 15"; the comparison-count table (insertion sort vs merge
// sort on sorted, reversed and shuffled lists of 8, 32, 128 and 512 integers, shuffle seeded 2026, every sort checked against
// sorted()); the worst-case search table (binary search probes checked by brute force for 10 and 1,000 items, floor(log2 n) + 1);
// the Fibonacci call counts (177 / 21,891 / 2,692,537 slow, 19 / 39 / 59 memoised, from fib.py); the ten practice questions and
// answers (every program run); the Python and Java object comparison (Python recursion limit 1000 read from sys.getrecursionlimit();
// the duplicate-def behaviour run); the eight-week project plan; the ladder.
// Lesson family: recursion and algorithm analysis (find the base case, count the work, test the edges).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const RANK_PY = `# Rank a playlist with a recursive merge sort on objects (ours)

class Track:
    def __init__(self, title, plays):
        self.title = title
        self.plays = plays

    def comes_before(self, other):
        """More plays first; equal plays fall back to title order."""
        if self.plays != other.plays:
            return self.plays > other.plays
        return self.title < other.title


def merge_sort(tracks, counter):
    """Return a new sorted list. counter[0] counts comparisons."""
    if len(tracks) <= 1:                  # base case: already sorted
        return tracks[:]
    mid = len(tracks) // 2
    left = merge_sort(tracks[:mid], counter)    # recursive case
    right = merge_sort(tracks[mid:], counter)
    merged = []
    i = j = 0
    while i < len(left) and j < len(right):
        counter[0] += 1
        if right[j].comes_before(left[i]):
            merged.append(right[j])
            j += 1
        else:                             # ties keep the left one: stable
            merged.append(left[i])
            i += 1
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged


playlist = [Track("Northern Lights", 41), Track("Portage", 17),
            Track("Lake Effect", 41), Track("Snowbank", 8),
            Track("Ferry Line", 23), Track("Big Smoke", 17),
            Track("Muskoka", 30), Track("Algonquin", 23)]
count = [0]
for t in merge_sort(playlist, count):
    print(t.plays, t.title)
print("Comparisons:", count[0])`;

const RANK_JAVA = `// Rank a playlist with a recursive merge sort on objects (ours)
import java.util.Arrays;

class Track implements Comparable<Track> {
    private final String title;
    private final int plays;

    public Track(String title, int plays) {
        this.title = title;
        this.plays = plays;
    }

    // Negative means this track comes first: more plays, then title order.
    @Override
    public int compareTo(Track other) {
        if (plays != other.plays) {
            return Integer.compare(other.plays, plays);
        }
        return title.compareTo(other.title);
    }

    @Override
    public String toString() {
        return plays + " " + title;
    }
}

public class Ranking {
    static int comparisons = 0;

    static Track[] mergeSort(Track[] tracks) {
        if (tracks.length <= 1) {                 // base case
            return tracks;
        }
        int mid = tracks.length / 2;
        Track[] left = mergeSort(Arrays.copyOfRange(tracks, 0, mid));
        Track[] right = mergeSort(Arrays.copyOfRange(tracks, mid, tracks.length));
        Track[] merged = new Track[tracks.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            comparisons++;
            if (right[j].compareTo(left[i]) < 0) {
                merged[k++] = right[j++];
            } else {                              // ties keep the left one
                merged[k++] = left[i++];
            }
        }
        while (i < left.length) merged[k++] = left[i++];
        while (j < right.length) merged[k++] = right[j++];
        return merged;
    }

    public static void main(String[] args) {
        Track[] playlist = {
            new Track("Northern Lights", 41), new Track("Portage", 17),
            new Track("Lake Effect", 41), new Track("Snowbank", 8),
            new Track("Ferry Line", 23), new Track("Big Smoke", 17),
            new Track("Muskoka", 30), new Track("Algonquin", 23)
        };
        for (Track t : mergeSort(playlist)) {
            System.out.println(t);
        }
        System.out.println("Comparisons: " + comparisons);
    }
}`;

const FIB_PY = `# Two ways to compute Fibonacci numbers, with a call counter (ours)

calls = 0

def fib_slow(n):
    global calls
    calls += 1
    if n < 2:                      # base cases: fib(0) = 0, fib(1) = 1
        return n
    return fib_slow(n - 1) + fib_slow(n - 2)

def fib_memo(n, memo):
    global calls
    calls += 1
    if n < 2:
        return n
    if n not in memo:              # work out each value once, then reuse it
        memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

for n in (10, 20, 30):
    calls = 0
    slow = fib_slow(n)
    slow_calls = calls
    calls = 0
    fast = fib_memo(n, {})
    print(n, slow, slow_calls, fast, calls)`;

const P1 = `def mystery(n):
    if n == 0:
        return 0
    return n % 10 + mystery(n // 10)

print(mystery(4096))`;

const P2 = `static int countDown(int n) {
    if (n == 0) return 0;
    return 1 + countDown(n - 2);
}
// called as countDown(6), then countDown(7)`;

const P3 = `int big = 2147483647;
big = big + 1;
System.out.println(big);`;

const P4 = `print(0.1 + 0.2 == 0.3)`;

const P5 = `class Shape { String name() { return "shape"; } }
class Circle extends Shape {
    @Override String name() { return "circle"; }
}
Shape s = new Circle();
System.out.println(s.name());`;

const P6 = `grid = [[3, 1, 4], [1, 5, 9], [2, 6, 5]]
total = 0
for r in range(3):
    total += grid[r][2 - r]
print(total)`;

const P7 = `def binary_search(values, target):
    lo, hi = 0, len(values) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if values[mid] == target:
            return mid
        if values[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

print(binary_search([9, 2, 7, 4, 5], 9))`;

const P8 = `count = 0
for i in range(n):
    for j in range(i):
        count += 1`;

const A10_PY = `def count_char(text, ch):
    if text == "":                 # base case: nothing left to check
        return 0
    first = 1 if text[0] == ch else 0
    return first + count_char(text[1:], ch)

print(count_char("saskatoon", "a"))   # 2`;

const A10_JAVA = `static int countChar(String text, char ch) {
    if (text.isEmpty()) {          // base case: nothing left to check
        return 0;
    }
    int first = (text.charAt(0) == ch) ? 1 : 0;
    return first + countChar(text.substring(1), ch);
}`;

const PDF = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ICS4U HELP', blurb: 'ICS4U from the 2008 Ontario curriculum: recursion, objects and algorithm analysis, a merge sort in Python and Java, and ten practice questions.' },
  slug: 'ics4u-computer-science-help',
  code: 'icc',
  accent: '#7A1212',
  accentRationale: 'ICS4U help, Canada: a deep brick red, #7A1212, allocated for this row; 6.6 RGB units from the nearest site accent (#7C1814) and at least 14 from every other Canada accent, with contrast 10.30 on the paper #FBF8F2 and 8.86 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'ICS4U computer science help',
  title: 'ICS4U Computer Science Help: Recursion, OOP, Python and Java',
  description: 'ICS4U help for Ontario Grade 12: the four strands, recursion and objects, one merge sort solved in Python and Java, ten practice questions and an exam plan.',
  ogDescription: 'What Grade 12 computer science in Ontario asks for, from the 2008 curriculum: modular design, recursion, algorithm analysis and a team project, with worked code in Python and Java.',
  twitterDescription: 'ICS4U from the Ontario curriculum, with a merge sort in Python and Java and ten practice questions.',
  pageName: 'ICS4U Computer Science Help',
  webPageDescription: 'A guide for Ontario Grade 12 students and parents to ICS4U, Computer Science, University Preparation, built from the 2008 curriculum document, with a recursive merge sort on objects in two languages, a recursion pitfalls study and ten practice questions with answers.',
  courseDescription: 'Live online ICS4U help for Ontario Grade 12 students in Python or Java, run beside the school course in a batch or one to one. Ontario credits are not granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'ICS4U help',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#covers', label: 'Strands' },
    { href: '#worked', label: 'Merge sort' },
    { href: '#recursion', label: 'Recursion' },
    { href: '#practice', label: 'Practice' },
    { href: '#exam', label: 'Exam' }
  ],
  eyebrow: 'Ontario &middot; Grade 12 &middot; ICS4U in Python or Java',
  h1: 'ICS4U computer science help, from recursion to the team project',
  lede: 'Grade 12 computer science is the year the programs stop fitting on one screen. Classes split across files, a method calls itself, and the teacher starts asking how many comparisons an algorithm makes rather than whether it works. This guide reads ICS4U straight from the Ontario curriculum, then works one Grade 12 problem in Python and in Java, studies the recursion trap the curriculum names, and ends with ten questions we wrote ourselves. Our classes run beside the school course; we do not grant Ontario credits, and the ICS4U credit itself comes only from the school or credit provider that evaluates the student.',
  secondaryCta: { href: '#practice', label: 'Go to the practice set' },
  wa: 'Hello Modern Age Coders, my Grade 12 student in Ontario is taking ICS4U and wants help with recursion and the project. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; Taught in the language the school uses',
  spec: [
    ['Course', 'ICS4U, Grade 12 University'],
    ['Needs first', 'ICS3U'],
    ['Language', 'Python or Java'],
    ['Focus', 'Recursion, classes, algorithm analysis'],
    ['Format', 'Batch or one to one'],
    ['Times', 'Weekdays or weekends'],
    ['Credit', 'Not granted by us'],
    ['First step', 'A free class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'ICS4U is Computer Science, Grade 12, University Preparation, the Ontario course after ICS3U. Students split programs across files, write recursive algorithms, compare searches and sorts by the work they do, and run a team software project. Modern Age Coders teaches ICS4U students live online, one to one or in a group batch, through Ontario Computer Science Companion: ICS3U and ICS4U.',

  picks: {
    eyebrow: 'Courses for Grade 12',
    h2: 'Three courses that fit an ICS4U year',
    lede: 'Start with the companion course, which is paced to the school outline. The second goes further on algorithms; the third covers the Grade 12 math that sits beside ICS4U.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'ICC / 01', title: 'Ontario Computer Science Companion', note: 'Grade 12 work in step with the class: recursion, classes across files, searches and sorts, and the team project plan.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ICC / 02', title: 'Problem solving for teens', note: 'Stacks, queues, dictionaries and the analysis of algorithms, for students who enjoy the hard questions.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'ICC / 03', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, the Grade 12 math that university computer science pages name, taken in the same year as ICS4U.' }
    ]
  },

  sections: [
    {
      id: 'covers', tint: 'tint', eyebrow: 'The curriculum, Grade 12',
      h2: 'What ICS4U covers, in the curriculum&rsquo;s own words',
      lede: 'ICS4U is described in the same 2008 document as the Grade 11 course, and its opening line is modest: &ldquo;This course enables students to further develop knowledge and skills in computer science.&rdquo; The rest of the description is where Grade 12 shows itself: &ldquo;Student teams will manage a large software development project, from planning through to project review.&rdquo; and &ldquo;Students will also analyse algorithms for effectiveness.&rdquo; The course has four strands.',
      body: [
        { kind: 'table', caption: 'The four ICS4U strands with every overall expectation the 2008 Computer Studies document gives them (our copy fetched 22 October 2026)', head: ['Strand', 'Overall expectations, quoted', 'In a Grade 12 classroom (our reading)'], rows: [
          ['A. Programming Concepts and Skills', '&ldquo;use different data types and expressions when creating computer programs&rdquo;; &ldquo;describe and use modular programming concepts and principles in the creation of computer programs&rdquo;; &ldquo;design and write algorithms and subprograms to solve a variety of problems&rdquo;; &ldquo;use proper code maintenance techniques when creating computer programs&rdquo;', 'Classes and objects, programs split over several files, searching and sorting written by hand, recursion, file input and output, testing and documentation'],
          ['B. Software Development', '&ldquo;manage the software development process effectively, through all of its stages&rdquo;; &ldquo;apply standard project management techniques in the context of a student-managed team project&rdquo;', 'A long group project with a scope document, a schedule, shared code and a review at the end'],
          ['C. Designing Modular Programs', '&ldquo;apply modular design concepts in computer programs&rdquo;; &ldquo;analyse algorithms for their effectiveness in solving a problem&rdquo;', 'Breaking a problem into classes before writing any of them, then counting the work an algorithm does'],
          ['D. Topics in Computer Science', '&ldquo;analyse ethical issues and propose strategies to encourage ethical practices related to the use of computers&rdquo;; &ldquo;analyse the impact of emerging computer technologies on society and the economy&rdquo;; &ldquo;research and report on different areas of research in computer science, and careers related to computer science&rdquo;', 'Reports and presentations: an ethics case, an emerging technology, a research field, and the routes into the careers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The specific expectations that surprise students',
          left: [
            'Strand A is longer than most families expect. It asks for &ldquo;integer division and resultant remainders&rdquo;, for &ldquo;non-numeric comparisons (e.g., strings, comparable interface)&rdquo; and for an understanding of the &ldquo;limitations of finite data representations (e.g., integer bounds, precision of floating-point real numbers, rounding errors)&rdquo;. Questions 3 and 4 in our practice set are about exactly those limits.',
            'It also moves from one-dimensional to two-dimensional arrays, with examples that include multiplying matrices and the chance to &ldquo;process pixels in an image&rdquo;, and it asks for a program &ldquo;divided among multiple files&rdquo;. Many students write their first program with more than one source file in this course.'
          ],
          rightH3: 'A new strand C, about design',
          right: [
            'In Grade 11 the third strand dealt with computer hardware and environments. In ICS4U it becomes Designing Modular Programs. Students are asked to decompose a problem into modules, classes or abstract data types, naming &ldquo;(e.g., stack, queue, dictionary)&rdquo;, and to &ldquo;apply data encapsulation in program design&rdquo;.',
            'The same strand brings in algorithm analysis: preconditions and postconditions, and comparing searches and sorts &ldquo;using run times and computational complexity analysis&rdquo;. This is the part of ICS4U that first-year university computer science builds on most directly.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Testing and documentation grow up',
          left: [
            'Grade 11 asked students to test with good cases. Grade 12 asks for a formal testing plan, and names three kinds: &ldquo;unit testing, integration testing, regression testing&rdquo;. In plain terms: test each method alone, test the parts together, and rerun the old tests every time you change something.',
            'Documentation has its own list as well: &ldquo;doc comments, docstrings, block comments, line comments&rdquo;. Javadoc in Java and docstrings in Python are both on it, which is why so many ICS4U marking schemes check comments.'
          ],
          rightH3: 'One rule that applies only to this course',
          right: [
            'The 2008 document allows its courses to be split into two half credits, &ldquo;with the exception of the Grade 12 university preparation course&rdquo;. ICS4U is that course: it is designed and delivered as one full credit.',
            'Its prerequisite, on both the 2008 document and the current Ontario curriculum website, is ICS3U, written out as &ldquo;Introduction to Computer Science, Grade 11, University Preparation&rdquo;. A student who skipped Grade 11 computer science needs it first.'
          ] },
        { kind: 'source', html: 'Source: ' + PDF + ', ICS4U course pages and the section on half-credit courses, read 22 October 2026; the Ontario curriculum website&rsquo;s course record for ICS4U, read through its public content service the same day (year issued 2008). Modern Age Coders has no connection with the Ontario Ministry of Education or any school board.' }
      ]
    },
    {
      id: 'ideas', tint: 'deep', eyebrow: 'The three big ideas',
      h2: 'Recursion, objects and algorithm analysis',
      lede: 'Almost every hard ICS4U question is one of three ideas in disguise. Here is each one in a sentence, and a table we built to show what the curriculum means by comparing two searches.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Recursion', p: 'A method that solves a problem by calling itself on a smaller version of it. The curriculum asks students to &ldquo;design a simple and efficient recursive algorithm&rdquo;, and both words in that phrase matter: simple and efficient.' },
          { h3: 'Objects', p: 'Data and the methods that act on it, bundled in a class. ICS4U names encapsulation, inheritance, overloading, overriding and polymorphism, and asks for arrays of objects, not only of numbers.' },
          { h3: 'Analysis', p: 'Counting the work before trusting the clock. How many comparisons, how many loop passes, how the count grows when the input doubles. That is what turns working code into a defensible choice.' }
        ] },
        { kind: 'table', mt: true, caption: 'Worst-case comparisons to find a value in a list, linear search against binary search (ours; binary counts checked by running the search on every possible target for 10 and 1,000 items)', head: ['Items in the list', 'Linear search, worst case', 'Binary search, worst case', 'Binary search needs'], numCols: [0, 1, 2], rows: [
          ['10', '10', '4', 'A sorted list'],
          ['1,000', '1,000', '10', 'A sorted list'],
          ['1,000,000', '1,000,000', '20', 'A sorted list']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'The linear column grows with the list: ten times the items, ten times the checks. The binary column grows by about one probe each time the list doubles, which is why a million sorted items need about twenty. Students who can explain that sentence can answer most search questions on an ICS4U test.',
            'The curriculum&rsquo;s own wording for this skill is to &ldquo;compare the efficiency of linear and binary searches&rdquo;, and it suggests counting &ldquo;the number of comparisons performed&rdquo;. A table like this one, with your own counts, is a strong answer.'
          ],
          rightH3: 'The column people forget',
          right: [
            'Binary search only works on sorted data. The curriculum asks students to &ldquo;analyse a precondition (i.e., starting state) and a postcondition (i.e., ending state) in an algorithm&rdquo;, and a sorted array is the precondition of binary search.',
            'Practice question 7 runs binary search on an unsorted list. It returns -1 for a value that is sitting in the list. Nothing crashes: the precondition was broken and the answer is quietly wrong.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'A worked problem, ours',
      h2: 'One ICS4U problem in Python and Java: ranking objects with merge sort',
      lede: 'This problem is ours, written at the level of an ICS4U unit on sorting. It joins three Grade 12 expectations in one program: an array of objects, a comparison rule that is not just a number, and a recursive merge sort, which the curriculum lists by name among its recursion examples. Both versions were run and print the same nine lines.',
      body: [
        { kind: 'p', html: '<b>The problem.</b> A playlist holds tracks, each with a title and a play count. Rank them from most played to least. When two tracks have the same play count, put them in alphabetical order by title. Write the sort yourself, recursively, and count how many comparisons it makes.' },
        { kind: 'ol', items: [
          '<b>Model the data first.</b> A Track has two fields, a title and a play count. Writing the class before the sort keeps the sort short, and is the &ldquo;decompose a problem into modules, classes&rdquo; step the curriculum describes.',
          '<b>Put the ordering rule in one place.</b> In Python a method, <code>comes_before</code>; in Java the <code>compareTo</code> method of the Comparable interface. The sort never looks inside a Track; it only asks which of two comes first.',
          '<b>Find the base case.</b> A list of zero or one track is already sorted. Every recursive call must move toward that case, and halving the list does.',
          '<b>Split, sort each half, then merge.</b> The two recursive calls do the sorting; the merge loop does the comparing. Each pass of the merge loop compares the front of the left half with the front of the right half and takes the one that comes first.',
          '<b>Decide what happens on a tie.</b> Taking from the left half when neither comes first keeps equal items in their original order. That makes the sort stable, which matters when a list has already been sorted by something else.',
          '<b>Count the work.</b> One counter, increased once per comparison, turns the program into evidence for an analysis question. The sample playlist takes 15 comparisons.'
        ] },
        { kind: 'code', label: 'Python &middot; merge sort on Track objects (ours)', lang: 'python', code: RANK_PY, note: 'Output: eight lines from 41 Lake Effect down to 8 Snowbank, then Comparisons: 15. Lake Effect comes before Northern Lights because their play counts tie at 41 and L comes before N.' },
        { kind: 'code', label: 'Java &middot; merge sort on Track objects (ours)', lang: 'java', code: RANK_JAVA, note: 'Same nine lines. Java keeps the fields private and exposes only compareTo and toString, which is encapsulation in practice; Python leaves the fields open and relies on convention.' },
        { kind: 'table', mt: true, caption: 'Comparisons made by insertion sort and by merge sort on lists of whole numbers (ours; shuffled lists use Python&rsquo;s random.shuffle with seed 2026, and every result was checked against sorted())', head: ['List size', 'Insertion, already sorted', 'Insertion, reversed', 'Insertion, shuffled', 'Merge, already sorted', 'Merge, reversed', 'Merge, shuffled'], numCols: [0, 1, 2, 3, 4, 5, 6], rows: [
          ['8', '7', '28', '26', '12', '12', '14'],
          ['32', '31', '496', '259', '80', '80', '124'],
          ['128', '127', '8,128', '3,977', '448', '448', '730'],
          ['512', '511', '130,816', '63,530', '2,304', '2,304', '3,939']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the counts say',
          left: [
            'On a reversed list of 512 numbers, insertion sort makes 130,816 comparisons and merge sort makes 2,304. Insertion sort&rsquo;s reversed count is n times (n minus 1), halved, so it grows with the square of the size; merge sort grows close to n times the number of halvings.',
            'The surprise is the first column. On a list that is already sorted, insertion sort makes only 511 comparisons and beats merge sort easily. A good ICS4U answer says which algorithm wins and on what input, not just which one is faster.'
          ],
          rightH3: 'Where students lose marks',
          right: [
            'Forgetting the base case, so the method calls itself until the program runs out of stack. Merging with the wrong comparison direction, which sorts the playlist from least played to most. Comparing strings with <code>==</code> in Java instead of <code>compareTo</code> or <code>equals</code>.',
            'And the subtle one: counting comparisons in the wrong place. The counter belongs inside the loop that compares, once per comparison, not once per recursive call.'
          ] }
      ]
    },
    {
      id: 'recursion', tint: 'deep', eyebrow: 'The trap the curriculum names',
      h2: 'Recursion pitfalls: why a two-line Fibonacci method takes millions of calls',
      lede: 'The ICS4U curriculum is unusually specific about where recursion goes wrong. It asks students to &ldquo;identify common pitfalls in recursive functions (e.g., infinite recursion, exponential growth in recursive algorithms such as Fibonacci numbers)&rdquo;. This small experiment of ours shows the second pitfall with real counts.',
      body: [
        { kind: 'code', label: 'Python &middot; slow and memoised Fibonacci, with a call counter (ours)', lang: 'python', code: FIB_PY, note: 'Output, one line per n: the value from each method and the number of calls each one made. The figures are in the table below.' },
        { kind: 'table', mt: true, caption: 'Calls needed to compute the nth Fibonacci number (ours, from the program above, Python 3.13)', head: ['n', 'fib(n)', 'Calls, plain recursion', 'Calls, with a memo'], numCols: [0, 1, 2, 3], rows: [
          ['10', '55', '177', '19'],
          ['20', '6,765', '21,891', '39'],
          ['30', '832,040', '2,692,537', '59']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the plain version explodes',
          left: [
            'Each call to <code>fib_slow(n)</code> makes two more calls, and those calls repeat the same work: fib(28) is computed twice inside fib(30), fib(27) three times, and so on down. Going from n = 20 to n = 30 multiplies the calls by more than a hundred.',
            'The memo version stores every answer the first time it is found. After that, asking for fib(25) again costs one call instead of a quarter of a million. Same recursion, same base cases, one dictionary added.'
          ],
          rightH3: 'The other pitfall: no way out',
          right: [
            'Infinite recursion is the first example in the curriculum&rsquo;s list. It happens when a recursive call never reaches the base case, and practice question 2 is built around it. Java stops with a StackOverflowError; Python stops with a RecursionError once it passes its default limit of 1,000 nested calls.',
            'The curriculum&rsquo;s list of recursion examples is worth knowing too: &ldquo;calculate a factorial, translate numbers into words, perform a merge sort, generate fractals, perform XML parsing&rdquo;. We work through at least three of them with every Grade 12 student, because each one has a different base case.'
          ] }
      ]
    },
    {
      id: 'language', tint: 'tint', eyebrow: 'Python or Java',
      h2: 'ICS4U in Python or Java: the same objects, spelled two ways',
      lede: 'The Grade 12 ideas are language-neutral, but object-oriented code looks very different in the two languages Ontario classes use most. This comparison is ours; every line was checked in Python 3.13 and Java 22.',
      body: [
        { kind: 'table', caption: 'Object-oriented ICS4U ideas in Python and Java (ours)', head: ['Idea', 'Python', 'Java'], rows: [
          ['Define a class', '<code>class Track:</code> with an <code>__init__</code> method', '<code>class Track { ... }</code> with a constructor named after the class'],
          ['Keep data private', 'By convention: a leading underscore, <code>self._plays</code>', 'Enforced: <code>private int plays;</code> plus methods to read it'],
          ['Inherit', '<code>class Circle(Shape):</code>', '<code>class Circle extends Shape</code>'],
          ['Override a method', 'Define a method with the same name in the subclass', 'Same, with <code>@Override</code> so the compiler checks it'],
          ['Overload a method', 'Not in the Java sense: a second <code>def</code> with the same name replaces the first; use default arguments instead', 'Several methods with one name and different parameter lists'],
          ['Make objects sortable', 'Write a comparison method, or define <code>__lt__</code>', 'Implement <code>Comparable</code> and its <code>compareTo</code>'],
          ['Too-deep recursion', 'RecursionError after 1,000 nested calls by default', 'StackOverflowError when the call stack fills'],
          ['Split across files', 'One module per file, then <code>import</code>', 'One public class per file, then compile them together']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your class uses Python',
          left: [
            'Python makes classes quick to write, which hides how much design the curriculum wants. One mistake we meet again and again: a student writes two methods with one name, expecting Java behaviour, and the second silently replaces the first.',
            'We ask Python students to write docstrings on every class and method from the first week, since the curriculum names docstrings, and to draw the class diagram on paper before typing a single <code>def</code>.'
          ],
          rightH3: 'If your class uses Java',
          right: [
            'Java is strict about types and access, which makes it a natural fit for the encapsulation, inheritance and interface expectations. The cost is ceremony: getters, setters, constructors and generics such as <code>Comparable&lt;Track&gt;</code> before anything sorts.',
            'Our Java students practise reading a long compiler error from the first line, and writing Javadoc comments as they go rather than in a rush the night before. If <code>cannot find symbol</code> keeps appearing across files, our <a class="ag-inline-link" href="/java-cannot-find-symbol-error">cannot find symbol guide</a> covers the usual causes.'
          ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Strand B in practice',
      h2: 'The ICS4U team project, from scope document to review',
      lede: 'Strand B makes the project part of the course itself. Students &ldquo;create a software project plan by producing a software scope document and determining the tasks, deliverables, and schedule&rdquo;, then build, deliver and review it. The plan below is ours, for an eight-week project; schools set their own length.',
      body: [
        { kind: 'table', caption: 'An eight-week ICS4U team project plan (ours; adjust to the teacher&rsquo;s dates)', head: ['Week', 'The team does', 'Each student owns'], numCols: [0], rows: [
          ['1', 'Agree the idea, write the scope document, list what is out of scope', 'One section of the scope document'],
          ['2', 'Class diagram, task list and a Gantt chart with milestones', 'Two or three classes, named in the diagram'],
          ['3', 'Shared repository set up, skeleton classes that compile and run', 'Their classes as empty methods with doc comments'],
          ['4', 'First working version, however plain', 'Unit tests for their own methods'],
          ['5', 'Integration: the parts joined and tested together', 'Fixing whatever breaks where their code meets a teammate&rsquo;s'],
          ['6', 'Features from the plan, and nothing new', 'Regression tests rerun after every change'],
          ['7', 'Freeze features, write the user guide, rehearse the demonstration', 'Their part of the user documentation'],
          ['8', 'Deliver, then review the project against the plan', 'A short reflection on time spent against time planned']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the curriculum asks the team to prove',
          left: [
            'The tools are named: &ldquo;Gantt chart, PERT chart, calendar&rdquo;. So is the ending. Students review the project and &ldquo;compare plan to actual performance&rdquo;, then write it up. A team that kept no plan has nothing to compare, which is why week 2 in our plan is all planning.',
            'Each student is also assessed on their own contribution, including the ability to meet goals by &ldquo;managing individual time during a group project&rdquo;. A student who did good code late can still lose marks for time management.'
          ],
          rightH3: 'Where we help, and where we stop',
          right: [
            'We help a student scope a project they can finish, design their own classes, write their tests and get through integration week. We review their plan and their code with them, line by line.',
            'We do not write any part of a graded project. That is a matter of honesty, and also of the student&rsquo;s interest: in a review or a demonstration, the teacher will ask them to explain their own code, and they need to own every line of it.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Ten ICS4U practice questions',
      lede: 'We wrote all ten for this page. None of them comes from a school, a board or a past exam. Questions 1 and 2 trace recursion, 3 and 4 probe the limits of numbers, 5 and 6 cover objects and two-dimensional arrays, 7 and 8 are analysis, then one design question and one to write. Try each on paper first.',
      body: [
        { kind: 'code', label: 'Question 1 &middot; trace recursion &middot; Python', lang: 'python', code: P1, note: 'What is printed? Write out each call and what it returns.' },
        { kind: 'code', label: 'Question 2 &middot; infinite recursion &middot; Java', lang: 'java', code: P2, note: 'What does countDown(6) return? What happens with countDown(7), and why? Change one line so that both calls finish.' },
        { kind: 'code', label: 'Question 3 &middot; integer bounds &middot; Java', lang: 'java', code: P3, note: 'What is printed? Name the limit involved and one way to avoid it.' },
        { kind: 'code', label: 'Question 4 &middot; floating point &middot; Python', lang: 'python', code: P4, note: 'True or False? Explain, and write a comparison that gives the answer a person would expect.' },
        { kind: 'code', label: 'Question 5 &middot; overriding &middot; Java', lang: 'java', code: P5, note: 'What is printed? Which ICS4U term describes what happened? Then: what would change if Circle had a method name(String prefix) instead?' },
        { kind: 'code', label: 'Question 6 &middot; two-dimensional array &middot; Python', lang: 'python', code: P6, note: 'What is printed? Which cells of the grid are added?' },
        { kind: 'code', label: 'Question 7 &middot; precondition &middot; Python', lang: 'python', code: P7, note: 'What is printed, and why is it wrong? State the precondition this function depends on.' },
        { kind: 'code', label: 'Question 8 &middot; counting work &middot; Python', lang: 'python', code: P8, note: 'For n = 10, what is count at the end? Give a formula in n, and say how count changes when n doubles.' },
        { kind: 'p', mt: true, html: '<b>Question 9 &middot; choose an abstract data type.</b> For each feature, choose a stack, a queue or a dictionary, and give one reason. (a) The undo button in a drawing program. (b) Print jobs sent to one shared printer. (c) Looking up a student&rsquo;s timetable from their student number.' },
        { kind: 'p', html: '<b>Question 10 &middot; write a recursive method.</b> In Python or Java, write <code>count_char(text, ch)</code> (Java: <code>countChar</code>) that returns how many times a character appears in a string, using recursion and no loop. State the base case. What does it return for &quot;saskatoon&quot; and &quot;a&quot;?' }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Answers and explanations',
      lede: 'Every program here was run to confirm what it prints. The explanation is the part to study: on a written test, the reasoning is usually worth more than the final value.',
      body: [
        { kind: 'ol', items: [
          '<b>19.</b> mystery(4096) is 6 + mystery(409), which is 9 + mystery(40), which is 0 + mystery(4), which is 4 + mystery(0), and mystery(0) is 0. The method adds the digits: 4 + 0 + 9 + 6 = 19. The base case is n == 0, and n // 10 moves toward it by removing one digit each call.',
          '<b>countDown(6) returns 3; countDown(7) never finishes.</b> From 7 the values go 5, 3, 1, -1 and keep falling, so n is never exactly 0, and Java throws StackOverflowError. Change the base case to <code>if (n &lt;= 0) return 0;</code>. A base case tested with == is fragile whenever the step is bigger than one.',
          '<b>-2147483648.</b> An int holds values up to 2,147,483,647; adding one wraps around to the smallest int. This is the &ldquo;integer bounds&rdquo; limit in the curriculum. Use <code>long</code> when values can grow, or check before adding. Python&rsquo;s integers do not overflow this way, which is one real difference between the languages.',
          '<b>False.</b> 0.1 and 0.2 have no exact binary form, so the sum is stored as 0.30000000000000004. Compare with a tolerance instead: <code>abs((0.1 + 0.2) - 0.3) &lt; 1e-9</code> is True. Money is better kept as whole cents in an int.',
          '<b>circle.</b> The variable has type Shape, but the object is a Circle, and the overriding method runs: this is polymorphism. A method name(String prefix) would be an overload, a separate method with a different parameter list, and <code>s.name()</code> would still print circle.',
          '<b>11.</b> As r goes 0, 1, 2, the column 2 - r goes 2, 1, 0, so the cells are grid[0][2] = 4, grid[1][1] = 5 and grid[2][0] = 2: the diagonal from top right to bottom left.',
          '<b>-1, although 9 is in the list.</b> The first middle value is 7, and 9 is bigger, so the search throws away the left half, where 9 actually sits. Binary search has a precondition: the list must be sorted. With that broken, it returns a wrong answer without any error.',
          '<b>45.</b> The inner line runs 0 + 1 + 2 + ... + 9 times, which is n(n - 1) / 2. For n = 100 it is 4,950. Doubling n multiplies count by about four, the mark of work that grows with the square of n.',
          '<b>(a) A stack:</b> the last action done is the first one undone. <b>(b) A queue:</b> jobs print in the order they arrived. <b>(c) A dictionary:</b> the student number is the key, and lookup by key is direct, with no search through a list.',
          '<b>2.</b> The base case is the empty string, which has no characters to count. Each call checks the first character and recurses on the rest, so the string gets one shorter every time and must reach the base case. Our run also gave 0 for an empty string and 2 for &quot;ottawa&quot; and &quot;t&quot;.'
        ] },
        { kind: 'code', label: 'Answer 10 &middot; Python', lang: 'python', code: A10_PY },
        { kind: 'code', label: 'Answer 10 &middot; Java', lang: 'java', code: A10_JAVA, note: 'Both versions return 2, 0 and 2 for the three test strings in our run. Each call copies the rest of the string, which is fine for practice and slow for very long text; passing an index instead is the efficient version.' }
      ]
    },
    {
      id: 'hard', tint: 'tint', eyebrow: 'An honest answer',
      h2: 'Is ICS4U hard?',
      lede: 'Harder than ICS3U, and in a different way. Grade 11 rewards careful typing and tracing; Grade 12 rewards planning and abstract thinking. These are the three places our Grade 12 students most often need help, and nobody can promise a mark in advance.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Trusting recursion', p: 'Students try to trace every call at once and get lost. The habit that works is to trust the recursive call to do its job on the smaller input, and check only the base case and the one step.' },
          { h3: 'Designing before coding', p: 'Classes chosen badly in week one cost hours in week five. Drawing the classes, their fields and their methods on paper first feels slow and saves the project.' },
          { h3: 'Owning a share of a team', p: 'The project is graded partly on each person&rsquo;s contribution and time management. Students who code well but deliver late are often surprised by their mark.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who tends to find it easier',
          left: [
            'Students who finished ICS3U able to write loops and arrays without notes usually find the first units of ICS4U manageable. The step up comes with recursion and object design, often in the middle of the semester.',
            'Students who enjoy math proofs often take to recursion quickly, because the base case and the recursive step have the same shape as a proof by induction.'
          ],
          rightH3: 'A useful check for parents',
          right: [
            'Ask your student to explain, without the code in front of them, how their sort or their recursive method reaches its answer. A clear explanation in plain words is a better sign than a working program copied from a classmate or produced by an AI tool.',
            'If they can only show the program and not explain it, that gap is exactly what the final evaluation will find, and the time to close it is now.'
          ] }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'Before the final',
      h2: 'ICS4U exam review: six things to drill',
      lede: 'Final evaluations in ICS4U vary by school, and the teacher&rsquo;s outline is the authority on what yours contains. This drill list is ours, for the written or coding parts most Grade 12 classes include.',
      body: [
        { kind: 'ol', items: [
          '<b>Trace three recursive methods by hand.</b> Write each call on its own line with what it returns. Include one with two recursive calls, like Fibonacci.',
          '<b>Rewrite binary search and one sort from a blank file.</b> Then state the precondition of each and the worst case in comparisons for a list of 1,000.',
          '<b>Design one small class hierarchy on paper.</b> A base class, two subclasses, one overridden method. Say where encapsulation, inheritance and polymorphism each appear.',
          '<b>Predict the output of number traps.</b> Integer division, the remainder operator, int overflow and floating-point comparison, the limits strand A names.',
          '<b>Explain one testing plan.</b> One unit test, one integration test and one regression test from your own project, in a sentence each.',
          '<b>Prepare the topic answers.</b> One ethical issue, one emerging technology and one research area from strand D, each with a source you could name.'
        ] },
        { kind: 'p', mt: true, html: 'The 2008 curriculum treats level 3 on its achievement chart as the &ldquo;provincial standard&rdquo;, and it describes the four categories teachers assess: Knowledge and Understanding, Thinking, Communication and Application. A drill list that includes explaining, not just coding, covers more of those categories.' }
      ]
    },
    {
      id: 'credit', tint: '', eyebrow: 'Online, night school and university',
      h2: 'ICS4U online or at night school: teaching, never the credit',
      lede: 'Families searching for ICS4U online, at night school or over the summer often need the credit itself. We cannot provide it, and saying so up front saves everyone time.',
      body: [
        { kind: 'two',
          leftH3: 'Who grants the ICS4U credit',
          left: [
            'Only an organisation that teaches the course and evaluates the student can put ICS4U on a transcript, whether that is a day school, a board night or summer program, or an Ontario credit provider. We are a tutoring school, so our ICS4U classes are teaching and practice beside the course: we do not grant Ontario credits, issue report card marks or set the final evaluation.',
            'What we can do is make the school course, wherever it is taken, easier to follow: the recursion explained twice, the project plan reviewed, the practice exam marked and discussed.'
          ],
          rightH3: 'ICS4U and university computer science',
          right: [
            'On 22 October 2026, Waterloo&rsquo;s Computer Science page listed Advanced Functions and Calculus and Vectors among its Ontario requirements and named the Grade 11 course, ICS3U, as its recommended computer science course. None of the three University of Toronto Computer Science listings named a computer science course at all.',
            'So for those programs the Grade 12 math courses are the requirement, and ICS4U is preparation for first year rather than an entry condition. Plan MHF4U and MCV4U alongside it; our <a class="ag-inline-link" href="/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course">Grade 12 university math course</a> teaches both beside the school course. Check each university&rsquo;s own page in the year you apply.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your student is now',
    h2: 'Four stages of a Grade 12 programmer',
    lede: 'Our own stages, from teaching students through ICS4U in both languages.',
    table: { caption: 'Stages from ICS3U graduate to first-year ready (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Single-file coder', 'Solves problems well inside one long file, with everything in main'],
      ['2. Class builder', 'Splits a program into classes with fields and methods, and can explain why each class exists'],
      ['3. Recursive thinker', 'Writes a recursive method from its base case outward, and spots a missing base case on sight'],
      ['4. Analyst', 'Chooses between two algorithms by counting their work, and tests the choice on its worst input']
    ] },
    left: { h3: 'For parents', ps: [
      'Most students reach stage 2 by the middle of the course. Stage 3 is where outside help pays off fastest, because recursion clicks suddenly after enough worked examples.',
      'A student at stage 4 is ready for the pace of a first-year university course, whatever their current mark says.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you write a recursive method, write the base case and one example of the step in a comment. Then the code almost writes itself.',
      'When you choose a sort, write down why in one sentence. If you cannot, you chose by habit.'
    ] }
  },

  catalogue: {
    eyebrow: 'More to study',
    h2: 'Nine courses for Ontario Grade 12 coders',
    lede: 'All taught live by a regular teacher, as a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'Beside ICS4U', sub: 'Grade 12', courses: [
        { code: 'ICC / SCH / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'The shared repository a team project needs.' },
        { code: 'ICC / SCH / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Classes, modules and files, with real projects.' },
        { code: 'ICC / SCH / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Programs that read and write a database.' }
      ] },
      { num: 'II', h3: 'For the strongest students', sub: 'Grades 11 and 12', courses: [
        { code: 'ICC / ADV / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'Timed problems for the Waterloo programming contest.' },
        { code: 'ICC / ADV / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Graphs, dynamic programming and harder recursion.' },
        { code: 'ICC / ADV / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language many contest coders switch to.' }
      ] },
      { num: 'III', h3: 'After Grade 12', sub: 'Teens', courses: [
        { code: 'ICC / NXT / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'An emerging field strand D asks students to research.' },
        { code: 'ICC / NXT / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'From a class diagram to a working web app.' },
        { code: 'ICC / NXT / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive security and the ethics around it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times and format',
    h2: 'Live Grade 12 classes, planned around the semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings after the school day, in your own time zone.' },
      { time: 'Weekends', l: 'Mornings, often the calmest time to work on the project.' },
      { time: '1-on-1', l: 'Extra sessions before a unit test or a project milestone.' }
    ],
    cells: [
      { h3: 'One regular teacher', p: 'Who reads the course outline with you.' },
      { h3: 'Python or Java', p: 'Matched to the class, not to us.' },
      { h3: 'Recursion, slowly', p: 'Worked examples until it clicks.' },
      { h3: 'Project reviews', p: 'Plans and code checked, never written.' },
      { h3: 'Exam practice', p: 'Timed, marked, then talked through.' },
      { h3: 'Group or private', p: 'A batch of fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'Projects our students have shipped',
  projectsLede: 'Work by students who went beyond the course they were taking at school. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families and students have written about us on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class is free. Families then pay a monthly fee for eight live classes a month; the fee is shown below in your own currency, there is no semester contract, and you can stop after any month.',
    free: ['A free first class', 'Bring the current unit or project', 'No card required'],
    group: ['Batch of fifteen to twenty', 'The same teacher each week', 'Pick a batch time', 'Monthly payment'],
    one: ['One teacher, one student', 'Booked around deadlines', 'Built from their own course']
  },

  faq: {
    eyebrow: 'Questions from Grade 12 families',
    h2: 'ICS4U: questions families ask',
    items: [
      { q: 'What is ICS4U?', a: 'ICS4U is Computer Science, Grade 12, University Preparation. Its expectations sit in Ontario\'s 2008 Computer Studies curriculum for Grades 10 to 12, and it covers data types and expressions, modular programming, algorithms including searching, sorting and recursion, a student-managed team project, algorithm analysis, and topics such as ethics and emerging technology.' },
      { q: 'What is the prerequisite for ICS4U?', a: 'ICS3U, Introduction to Computer Science, Grade 11, University Preparation. Both the 2008 curriculum document and the current Ontario curriculum website list it as the prerequisite.' },
      { q: 'Can you give my student the ICS4U credit?', a: 'No. Our ICS4U classes are teaching and practice beside the school course, and we do not grant Ontario credits. The credit comes from the school, night school, summer school or credit provider that teaches and evaluates the course.' },
      { q: 'Is ICS4U taught in Python or Java?', a: 'It depends on the school. The 2008 curriculum leaves the programming language to the teacher, and Ontario classes commonly use Python or Java. We teach in whichever one the student\'s class uses.' },
      { q: 'Is ICS4U hard?', a: 'It is a step up from ICS3U. Most students find recursion, designing classes before coding, and managing their share of the team project the hardest parts. Each of those improves with worked examples and practice, but nobody can honestly promise a mark in advance.' },
      { q: 'What does recursion mean in ICS4U?', a: 'A method that solves a problem by calling itself on a smaller version of it, stopping at a base case. The curriculum asks students to design simple and efficient recursive algorithms, and to recognise pitfalls such as infinite recursion and the exponential growth of a plain recursive Fibonacci method.' },
      { q: 'Which sorting and searching algorithms does ICS4U include?', a: 'The curriculum asks for linear and binary search, a sort such as bubble, insertion or selection, and lists merge sort among its recursion examples. It also asks students to compare their efficiency using run times and counts of comparisons or loop passes.' },
      { q: 'Can ICS4U be taken as a half credit?', a: 'No. The 2008 curriculum allows its courses to be delivered as half-credit courses with the exception of the Grade 12 university preparation course, which is ICS4U.' },
      { q: 'Do universities require ICS4U for computer science?', a: 'On 22 October 2026, Waterloo\'s Computer Science page listed Advanced Functions and Calculus and Vectors among its Ontario requirements and recommended the Grade 11 computer science course, and the University of Toronto\'s three Computer Science listings named no computer science course. Requirements change, so check each university\'s page in the year you apply.' },
      { q: 'When are classes for Ontario families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We agree the time in your own Ontario time zone.' },
      { q: 'How much do ICS4U classes cost?', a: 'The first class is free. After it, families pay a monthly fee and can stop after any month. The fees section on this page shows the current figure for a batch and for one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'Related pages for Ontario students',
    lede: 'Guides and classes that sit next to ICS4U.',
    items: [
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The Grade 11 course that ICS4U builds on.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live classes for every age across the province.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'Canadian Computing Competition', p: 'The CEMC contest that rewards ICS4U skills.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Advanced Functions and Calculus and Vectors.' },
      { href: '/blog/recursion-explained-for-beginners', label: 'Recursion explained', p: 'A slower introduction to methods that call themselves.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'A method for understanding a program you did not write.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the faulty line without guessing.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Every guide we have written for Canadian families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the school language, the unit the class is on and the next deadline, whether that is a test or a project milestone. The first class picks up from there.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">companion course syllabus</a> shows the Grade 12 weeks, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a live class from start to finish.',
    note: 'Lessons happen live on video with teachers based in India, so there is no travel and no home visit. WhatsApp reaches us fastest from Ontario.',
    formNote: 'Booking the free class needs no card details.'
  },

  footer: {
    cols: [
      { h4: 'Grade 12 computer science', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'ICS3U and ICS4U companion' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/blog/recursion-explained-for-beginners', label: 'Recursion explained' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Base case first, then count the work'
  },

  personalityCss: `
.ag-root.ag-icc .ag-hero h1 { letter-spacing: -0.015em; max-width: 21ch; }
.ag-root.ag-icc .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-icc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-icc .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-icc .ag-code-head b { letter-spacing: 0.02em; }
.ag-root.ag-icc .ag-steps li { margin-bottom: 0.6rem; line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), fetched raw 22 October 2026: ICS4U description and prerequisite, the four strand names, overall expectations A1 to A4, B1, B2, C1, C2, D2 to D4, specific expectations A1.1, A1.3, A1.4, A2.1, A3.5, A3.6, A4.2, A4.3, B1.1, B1.4, B1.6, B2.2, C1.1, C1.2, C2.1 to C2.4; the half-credit exception for the Grade 12 university preparation course; the achievement chart categories and level 3 provincial standard. Ontario curriculum content API record for ICS4U (2008, Grade 12, prerequisite ICS3U). Waterloo and U of T Computer Science pages (facts rows 203 to 212).',
    localProject: 'Our playlist ranking problem: Track objects sorted by plays then title with a recursive, stable merge sort, in Python and Java, both run and printing the same order and "Comparisons: 15"; a comparison-count table for insertion and merge sort on sorted, reversed and shuffled lists up to 512; a binary and linear search worst-case table; a Fibonacci call-count study (2,692,537 calls plain against 59 memoised for n = 30); ten original practice questions with run-checked answers; an eight-week team project plan. Lesson family: recursion and algorithm analysis.',
    requiredMentions: ['Designing Modular Programs', 'finite data representations', 'with the exception of the Grade 12 university preparation course', 'precondition (i.e., starting state)', 'process pixels in an image', 'comes_before', 'Comparisons: 15', 'fib_memo', '2,692,537', 'count_char', 'StackOverflowError when the call stack fills', 'Lake Effect'],
    sources: [
      { claim: 'ICS4U description, prerequisite, strands, overall and specific expectations; half-credit exception; achievement chart.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'The ICS4U course record on the current Ontario curriculum website (2008, Grade 12, prerequisite ICS3U).', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0' },
      { claim: 'Waterloo Computer Science Ontario requirements and recommended course.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'University of Toronto Computer Science prerequisites by campus.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' }
    ],
    rejectedClaims: [
      'That ICS4U is required for Waterloo or U of T Computer Science: neither page lists it; the page says so.',
      'That merge sort is always faster than insertion sort: our own table shows insertion sort winning on already sorted input.',
      'Any mark, grade or admission outcome from our classes: none promised.',
      'That we write or complete any part of a graded project: the page says we do not.',
      'That ICS4U can be taken as two half credits: the 2008 document excludes the Grade 12 university preparation course.',
      'Named schools, night schools or credit providers: none named.',
      'Any affiliation with the Ontario Ministry of Education, a school board, Waterloo or U of T: none, and the page says so.',
      'A Python recursion limit stated as a language rule: given as the default, read from sys.getrecursionlimit() in Python 3.13.'
    ]
  }
};
