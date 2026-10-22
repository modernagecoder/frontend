---
title: "ICS4U Computer Science Help: Recursion, OOP, Python and Java"
description: "ICS4U help for Ontario Grade 12: the four strands, recursion and objects, one merge sort solved in Python and Java, ten practice questions and an exam plan."
canonical: https://learn.modernagecoders.com/ics4u-computer-science-help
source: src/pages/ics4u-computer-science-help.html
---
> ICS4U is Computer Science, Grade 12, University Preparation, the Ontario course after ICS3U. Students split programs across files, write recursive algorithms, compare searches and sorts by the work they do, and run a team software project. Modern Age Coders teaches ICS4U students live online, one to one or in a group batch, through Ontario Computer Science Companion: ICS3U and ICS4U.

[Home](/) / [Canada](/coding-classes-in-canada) / [Ontario](/coding-classes-in-ontario) / ICS4U help

Ontario · Grade 12 · ICS4U in Python or Java

# ICS4U computer science help, from recursion to the team project

Grade 12 computer science is the year the programs stop fitting on one screen. Classes split across files, a method calls itself, and the teacher starts asking how many comparisons an algorithm makes rather than whether it works. This guide reads ICS4U straight from the Ontario curriculum, then works one Grade 12 problem in Python and in Java, studies the recursion trap the curriculum names, and ends with ten questions we wrote ourselves. Our classes run beside the school course; we do not grant Ontario credits, and the ICS4U credit itself comes only from the school or credit provider that evaluates the student.

At a glance: Course: ICS4U, Grade 12 University; Needs first: ICS3U; Language: Python or Java; Focus: Recursion, classes, algorithm analysis; Format: Batch or one to one; Times: Weekdays or weekends; Credit: Not granted by us; First step: A free class. Rated 4.9 across 547 Google reviews.

## Three courses that fit an ICS4U year

Start with the companion course, which is paced to the school outline. The second goes further on algorithms; the third covers the Grade 12 math that sits beside ICS4U.

- [Ontario Computer Science Companion](/courses/ics3u-ics4u-computer-science-companion-course): Grade 12 work in step with the class: recursion, classes across files, searches and sorts, and the team project plan.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Stacks, queues, dictionaries and the analysis of algorithms, for students who enjoy the hard questions.
- [Ontario Grade 12 University Math](/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course): Advanced Functions and Calculus and Vectors, the Grade 12 math that university computer science pages name, taken in the same year as ICS4U.

## What ICS4U covers, in the curriculum&rsquo;s own words

ICS4U is described in the same 2008 document as the Grade 11 course, and its opening line is modest: &ldquo;This course enables students to further develop knowledge and skills in computer science.&rdquo; The rest of the description is where Grade 12 shows itself: &ldquo;Student teams will manage a large software development project, from planning through to project review.&rdquo; and &ldquo;Students will also analyse algorithms for effectiveness.&rdquo; The course has four strands.

**The four ICS4U strands with every overall expectation the 2008 Computer Studies document gives them (our copy fetched 22 October 2026)**

| Strand | Overall expectations, quoted | In a Grade 12 classroom (our reading) |
|---|---|---|
| A. Programming Concepts and Skills | &ldquo;use different data types and expressions when creating computer programs&rdquo;; &ldquo;describe and use modular programming concepts and principles in the creation of computer programs&rdquo;; &ldquo;design and write algorithms and subprograms to solve a variety of problems&rdquo;; &ldquo;use proper code maintenance techniques when creating computer programs&rdquo; | Classes and objects, programs split over several files, searching and sorting written by hand, recursion, file input and output, testing and documentation |
| B. Software Development | &ldquo;manage the software development process effectively, through all of its stages&rdquo;; &ldquo;apply standard project management techniques in the context of a student-managed team project&rdquo; | A long group project with a scope document, a schedule, shared code and a review at the end |
| C. Designing Modular Programs | &ldquo;apply modular design concepts in computer programs&rdquo;; &ldquo;analyse algorithms for their effectiveness in solving a problem&rdquo; | Breaking a problem into classes before writing any of them, then counting the work an algorithm does |
| D. Topics in Computer Science | &ldquo;analyse ethical issues and propose strategies to encourage ethical practices related to the use of computers&rdquo;; &ldquo;analyse the impact of emerging computer technologies on society and the economy&rdquo;; &ldquo;research and report on different areas of research in computer science, and careers related to computer science&rdquo; | Reports and presentations: an ethics case, an emerging technology, a research field, and the routes into the careers |

### The specific expectations that surprise students

Strand A is longer than most families expect. It asks for &ldquo;integer division and resultant remainders&rdquo;, for &ldquo;non-numeric comparisons (e.g., strings, comparable interface)&rdquo; and for an understanding of the &ldquo;limitations of finite data representations (e.g., integer bounds, precision of floating-point real numbers, rounding errors)&rdquo;. Questions 3 and 4 in our practice set are about exactly those limits.

It also moves from one-dimensional to two-dimensional arrays, with examples that include multiplying matrices and the chance to &ldquo;process pixels in an image&rdquo;, and it asks for a program &ldquo;divided among multiple files&rdquo;. Many students write their first program with more than one source file in this course.

### A new strand C, about design

In Grade 11 the third strand dealt with computer hardware and environments. In ICS4U it becomes Designing Modular Programs. Students are asked to decompose a problem into modules, classes or abstract data types, naming &ldquo;(e.g., stack, queue, dictionary)&rdquo;, and to &ldquo;apply data encapsulation in program design&rdquo;.

The same strand brings in algorithm analysis: preconditions and postconditions, and comparing searches and sorts &ldquo;using run times and computational complexity analysis&rdquo;. This is the part of ICS4U that first-year university computer science builds on most directly.

### Testing and documentation grow up

Grade 11 asked students to test with good cases. Grade 12 asks for a formal testing plan, and names three kinds: &ldquo;unit testing, integration testing, regression testing&rdquo;. In plain terms: test each method alone, test the parts together, and rerun the old tests every time you change something.

Documentation has its own list as well: &ldquo;doc comments, docstrings, block comments, line comments&rdquo;. Javadoc in Java and docstrings in Python are both on it, which is why so many ICS4U marking schemes check comments.

### One rule that applies only to this course

The 2008 document allows its courses to be split into two half credits, &ldquo;with the exception of the Grade 12 university preparation course&rdquo;. ICS4U is that course: it is designed and delivered as one full credit.

Its prerequisite, on both the 2008 document and the current Ontario curriculum website, is ICS3U, written out as &ldquo;Introduction to Computer Science, Grade 11, University Preparation&rdquo;. A student who skipped Grade 11 computer science needs it first.

Source: [The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)](https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf), ICS4U course pages and the section on half-credit courses, read 22 October 2026; the Ontario curriculum website&rsquo;s course record for ICS4U, read through its public content service the same day (year issued 2008). Modern Age Coders has no connection with the Ontario Ministry of Education or any school board.

## Recursion, objects and algorithm analysis

Almost every hard ICS4U question is one of three ideas in disguise. Here is each one in a sentence, and a table we built to show what the curriculum means by comparing two searches.

### Recursion

A method that solves a problem by calling itself on a smaller version of it. The curriculum asks students to &ldquo;design a simple and efficient recursive algorithm&rdquo;, and both words in that phrase matter: simple and efficient.

### Objects

Data and the methods that act on it, bundled in a class. ICS4U names encapsulation, inheritance, overloading, overriding and polymorphism, and asks for arrays of objects, not only of numbers.

### Analysis

Counting the work before trusting the clock. How many comparisons, how many loop passes, how the count grows when the input doubles. That is what turns working code into a defensible choice.

**Worst-case comparisons to find a value in a list, linear search against binary search (ours; binary counts checked by running the search on every possible target for 10 and 1,000 items)**

| Items in the list | Linear search, worst case | Binary search, worst case | Binary search needs |
|---|---|---|---|
| 10 | 10 | 4 | A sorted list |
| 1,000 | 1,000 | 10 | A sorted list |
| 1,000,000 | 1,000,000 | 20 | A sorted list |

### Reading the table

The linear column grows with the list: ten times the items, ten times the checks. The binary column grows by about one probe each time the list doubles, which is why a million sorted items need about twenty. Students who can explain that sentence can answer most search questions on an ICS4U test.

The curriculum&rsquo;s own wording for this skill is to &ldquo;compare the efficiency of linear and binary searches&rdquo;, and it suggests counting &ldquo;the number of comparisons performed&rdquo;. A table like this one, with your own counts, is a strong answer.

### The column people forget

Binary search only works on sorted data. The curriculum asks students to &ldquo;analyse a precondition (i.e., starting state) and a postcondition (i.e., ending state) in an algorithm&rdquo;, and a sorted array is the precondition of binary search.

Practice question 7 runs binary search on an unsorted list. It returns -1 for a value that is sitting in the list. Nothing crashes: the precondition was broken and the answer is quietly wrong.

## One ICS4U problem in Python and Java: ranking objects with merge sort

This problem is ours, written at the level of an ICS4U unit on sorting. It joins three Grade 12 expectations in one program: an array of objects, a comparison rule that is not just a number, and a recursive merge sort, which the curriculum lists by name among its recursion examples. Both versions were run and print the same nine lines.

The problem. A playlist holds tracks, each with a title and a play count. Rank them from most played to least. When two tracks have the same play count, put them in alphabetical order by title. Write the sort yourself, recursively, and count how many comparisons it makes.

1. Model the data first. A Track has two fields, a title and a play count. Writing the class before the sort keeps the sort short, and is the &ldquo;decompose a problem into modules, classes&rdquo; step the curriculum describes.
2. Put the ordering rule in one place. In Python a method, comes_before; in Java the compareTo method of the Comparable interface. The sort never looks inside a Track; it only asks which of two comes first.
3. Find the base case. A list of zero or one track is already sorted. Every recursive call must move toward that case, and halving the list does.
4. Split, sort each half, then merge. The two recursive calls do the sorting; the merge loop does the comparing. Each pass of the merge loop compares the front of the left half with the front of the right half and takes the one that comes first.
5. Decide what happens on a tie. Taking from the left half when neither comes first keeps equal items in their original order. That makes the sort stable, which matters when a list has already been sorted by something else.
6. Count the work. One counter, increased once per comparison, turns the program into evidence for an analysis question. The sample playlist takes 15 comparisons.

**Python · merge sort on Track objects (ours)** (python)
```python
# Rank a playlist with a recursive merge sort on objects (ours)

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
print("Comparisons:", count[0])
```
Output: eight lines from 41 Lake Effect down to 8 Snowbank, then Comparisons: 15. Lake Effect comes before Northern Lights because their play counts tie at 41 and L comes before N.

**Java · merge sort on Track objects (ours)** (java)
```java
// Rank a playlist with a recursive merge sort on objects (ours)
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
}
```
Same nine lines. Java keeps the fields private and exposes only compareTo and toString, which is encapsulation in practice; Python leaves the fields open and relies on convention.

**Comparisons made by insertion sort and by merge sort on lists of whole numbers (ours; shuffled lists use Python&rsquo;s random.shuffle with seed 2026, and every result was checked against sorted())**

| List size | Insertion, already sorted | Insertion, reversed | Insertion, shuffled | Merge, already sorted | Merge, reversed | Merge, shuffled |
|---|---|---|---|---|---|---|
| 8 | 7 | 28 | 26 | 12 | 12 | 14 |
| 32 | 31 | 496 | 259 | 80 | 80 | 124 |
| 128 | 127 | 8,128 | 3,977 | 448 | 448 | 730 |
| 512 | 511 | 130,816 | 63,530 | 2,304 | 2,304 | 3,939 |

### What the counts say

On a reversed list of 512 numbers, insertion sort makes 130,816 comparisons and merge sort makes 2,304. Insertion sort&rsquo;s reversed count is n times (n minus 1), halved, so it grows with the square of the size; merge sort grows close to n times the number of halvings.

The surprise is the first column. On a list that is already sorted, insertion sort makes only 511 comparisons and beats merge sort easily. A good ICS4U answer says which algorithm wins and on what input, not just which one is faster.

### Where students lose marks

Forgetting the base case, so the method calls itself until the program runs out of stack. Merging with the wrong comparison direction, which sorts the playlist from least played to most. Comparing strings with == in Java instead of compareTo or equals.

And the subtle one: counting comparisons in the wrong place. The counter belongs inside the loop that compares, once per comparison, not once per recursive call.

## Recursion pitfalls: why a two-line Fibonacci method takes millions of calls

The ICS4U curriculum is unusually specific about where recursion goes wrong. It asks students to &ldquo;identify common pitfalls in recursive functions (e.g., infinite recursion, exponential growth in recursive algorithms such as Fibonacci numbers)&rdquo;. This small experiment of ours shows the second pitfall with real counts.

**Python · slow and memoised Fibonacci, with a call counter (ours)** (python)
```python
# Two ways to compute Fibonacci numbers, with a call counter (ours)

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
    print(n, slow, slow_calls, fast, calls)
```
Output, one line per n: the value from each method and the number of calls each one made. The figures are in the table below.

**Calls needed to compute the nth Fibonacci number (ours, from the program above, Python 3.13)**

| n | fib(n) | Calls, plain recursion | Calls, with a memo |
|---|---|---|---|
| 10 | 55 | 177 | 19 |
| 20 | 6,765 | 21,891 | 39 |
| 30 | 832,040 | 2,692,537 | 59 |

### Why the plain version explodes

Each call to fib_slow(n) makes two more calls, and those calls repeat the same work: fib(28) is computed twice inside fib(30), fib(27) three times, and so on down. Going from n = 20 to n = 30 multiplies the calls by more than a hundred.

The memo version stores every answer the first time it is found. After that, asking for fib(25) again costs one call instead of a quarter of a million. Same recursion, same base cases, one dictionary added.

### The other pitfall: no way out

Infinite recursion is the first example in the curriculum&rsquo;s list. It happens when a recursive call never reaches the base case, and practice question 2 is built around it. Java stops with a StackOverflowError; Python stops with a RecursionError once it passes its default limit of 1,000 nested calls.

The curriculum&rsquo;s list of recursion examples is worth knowing too: &ldquo;calculate a factorial, translate numbers into words, perform a merge sort, generate fractals, perform XML parsing&rdquo;. We work through at least three of them with every Grade 12 student, because each one has a different base case.

## ICS4U in Python or Java: the same objects, spelled two ways

The Grade 12 ideas are language-neutral, but object-oriented code looks very different in the two languages Ontario classes use most. This comparison is ours; every line was checked in Python 3.13 and Java 22.

**Object-oriented ICS4U ideas in Python and Java (ours)**

| Idea | Python | Java |
|---|---|---|
| Define a class | class Track: with an __init__ method | class Track { ... } with a constructor named after the class |
| Keep data private | By convention: a leading underscore, self._plays | Enforced: private int plays; plus methods to read it |
| Inherit | class Circle(Shape): | class Circle extends Shape |
| Override a method | Define a method with the same name in the subclass | Same, with @Override so the compiler checks it |
| Overload a method | Not in the Java sense: a second def with the same name replaces the first; use default arguments instead | Several methods with one name and different parameter lists |
| Make objects sortable | Write a comparison method, or define __lt__ | Implement Comparable and its compareTo |
| Too-deep recursion | RecursionError after 1,000 nested calls by default | StackOverflowError when the call stack fills |
| Split across files | One module per file, then import | One public class per file, then compile them together |

### If your class uses Python

Python makes classes quick to write, which hides how much design the curriculum wants. One mistake we meet again and again: a student writes two methods with one name, expecting Java behaviour, and the second silently replaces the first.

We ask Python students to write docstrings on every class and method from the first week, since the curriculum names docstrings, and to draw the class diagram on paper before typing a single def.

### If your class uses Java

Java is strict about types and access, which makes it a natural fit for the encapsulation, inheritance and interface expectations. The cost is ceremony: getters, setters, constructors and generics such as Comparable<Track> before anything sorts.

Our Java students practise reading a long compiler error from the first line, and writing Javadoc comments as they go rather than in a rush the night before. If cannot find symbol keeps appearing across files, our [cannot find symbol guide](/java-cannot-find-symbol-error) covers the usual causes.

## The ICS4U team project, from scope document to review

Strand B makes the project part of the course itself. Students &ldquo;create a software project plan by producing a software scope document and determining the tasks, deliverables, and schedule&rdquo;, then build, deliver and review it. The plan below is ours, for an eight-week project; schools set their own length.

**An eight-week ICS4U team project plan (ours; adjust to the teacher&rsquo;s dates)**

| Week | The team does | Each student owns |
|---|---|---|
| 1 | Agree the idea, write the scope document, list what is out of scope | One section of the scope document |
| 2 | Class diagram, task list and a Gantt chart with milestones | Two or three classes, named in the diagram |
| 3 | Shared repository set up, skeleton classes that compile and run | Their classes as empty methods with doc comments |
| 4 | First working version, however plain | Unit tests for their own methods |
| 5 | Integration: the parts joined and tested together | Fixing whatever breaks where their code meets a teammate&rsquo;s |
| 6 | Features from the plan, and nothing new | Regression tests rerun after every change |
| 7 | Freeze features, write the user guide, rehearse the demonstration | Their part of the user documentation |
| 8 | Deliver, then review the project against the plan | A short reflection on time spent against time planned |

### What the curriculum asks the team to prove

The tools are named: &ldquo;Gantt chart, PERT chart, calendar&rdquo;. So is the ending. Students review the project and &ldquo;compare plan to actual performance&rdquo;, then write it up. A team that kept no plan has nothing to compare, which is why week 2 in our plan is all planning.

Each student is also assessed on their own contribution, including the ability to meet goals by &ldquo;managing individual time during a group project&rdquo;. A student who did good code late can still lose marks for time management.

### Where we help, and where we stop

We help a student scope a project they can finish, design their own classes, write their tests and get through integration week. We review their plan and their code with them, line by line.

We do not write any part of a graded project. That is a matter of honesty, and also of the student&rsquo;s interest: in a review or a demonstration, the teacher will ask them to explain their own code, and they need to own every line of it.

## Ten ICS4U practice questions

We wrote all ten for this page. None of them comes from a school, a board or a past exam. Questions 1 and 2 trace recursion, 3 and 4 probe the limits of numbers, 5 and 6 cover objects and two-dimensional arrays, 7 and 8 are analysis, then one design question and one to write. Try each on paper first.

**Question 1 · trace recursion · Python** (python)
```python
def mystery(n):
    if n == 0:
        return 0
    return n % 10 + mystery(n // 10)

print(mystery(4096))
```
What is printed? Write out each call and what it returns.

**Question 2 · infinite recursion · Java** (java)
```java
static int countDown(int n) {
    if (n == 0) return 0;
    return 1 + countDown(n - 2);
}
// called as countDown(6), then countDown(7)
```
What does countDown(6) return? What happens with countDown(7), and why? Change one line so that both calls finish.

**Question 3 · integer bounds · Java** (java)
```java
int big = 2147483647;
big = big + 1;
System.out.println(big);
```
What is printed? Name the limit involved and one way to avoid it.

**Question 4 · floating point · Python** (python)
```python
print(0.1 + 0.2 == 0.3)
```
True or False? Explain, and write a comparison that gives the answer a person would expect.

**Question 5 · overriding · Java** (java)
```java
class Shape { String name() { return "shape"; } }
class Circle extends Shape {
    @Override String name() { return "circle"; }
}
Shape s = new Circle();
System.out.println(s.name());
```
What is printed? Which ICS4U term describes what happened? Then: what would change if Circle had a method name(String prefix) instead?

**Question 6 · two-dimensional array · Python** (python)
```python
grid = [[3, 1, 4], [1, 5, 9], [2, 6, 5]]
total = 0
for r in range(3):
    total += grid[r][2 - r]
print(total)
```
What is printed? Which cells of the grid are added?

**Question 7 · precondition · Python** (python)
```python
def binary_search(values, target):
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

print(binary_search([9, 2, 7, 4, 5], 9))
```
What is printed, and why is it wrong? State the precondition this function depends on.

**Question 8 · counting work · Python** (python)
```python
count = 0
for i in range(n):
    for j in range(i):
        count += 1
```
For n = 10, what is count at the end? Give a formula in n, and say how count changes when n doubles.

Question 9 · choose an abstract data type. For each feature, choose a stack, a queue or a dictionary, and give one reason. (a) The undo button in a drawing program. (b) Print jobs sent to one shared printer. (c) Looking up a student&rsquo;s timetable from their student number.

Question 10 · write a recursive method. In Python or Java, write count_char(text, ch) (Java: countChar) that returns how many times a character appears in a string, using recursion and no loop. State the base case. What does it return for "saskatoon" and "a"?

## Answers and explanations

Every program here was run to confirm what it prints. The explanation is the part to study: on a written test, the reasoning is usually worth more than the final value.

1. 19. mystery(4096) is 6 + mystery(409), which is 9 + mystery(40), which is 0 + mystery(4), which is 4 + mystery(0), and mystery(0) is 0. The method adds the digits: 4 + 0 + 9 + 6 = 19. The base case is n == 0, and n // 10 moves toward it by removing one digit each call.
2. countDown(6) returns 3; countDown(7) never finishes. From 7 the values go 5, 3, 1, -1 and keep falling, so n is never exactly 0, and Java throws StackOverflowError. Change the base case to if (n <= 0) return 0;. A base case tested with == is fragile whenever the step is bigger than one.
3. -2147483648. An int holds values up to 2,147,483,647; adding one wraps around to the smallest int. This is the &ldquo;integer bounds&rdquo; limit in the curriculum. Use long when values can grow, or check before adding. Python&rsquo;s integers do not overflow this way, which is one real difference between the languages.
4. False. 0.1 and 0.2 have no exact binary form, so the sum is stored as 0.30000000000000004. Compare with a tolerance instead: abs((0.1 + 0.2) - 0.3) < 1e-9 is True. Money is better kept as whole cents in an int.
5. circle. The variable has type Shape, but the object is a Circle, and the overriding method runs: this is polymorphism. A method name(String prefix) would be an overload, a separate method with a different parameter list, and s.name() would still print circle.
6. 11. As r goes 0, 1, 2, the column 2 - r goes 2, 1, 0, so the cells are grid[0][2] = 4, grid[1][1] = 5 and grid[2][0] = 2: the diagonal from top right to bottom left.
7. -1, although 9 is in the list. The first middle value is 7, and 9 is bigger, so the search throws away the left half, where 9 actually sits. Binary search has a precondition: the list must be sorted. With that broken, it returns a wrong answer without any error.
8. 45. The inner line runs 0 + 1 + 2 + ... + 9 times, which is n(n - 1) / 2. For n = 100 it is 4,950. Doubling n multiplies count by about four, the mark of work that grows with the square of n.
9. (a) A stack: the last action done is the first one undone. (b) A queue: jobs print in the order they arrived. (c) A dictionary: the student number is the key, and lookup by key is direct, with no search through a list.
10. 2. The base case is the empty string, which has no characters to count. Each call checks the first character and recurses on the rest, so the string gets one shorter every time and must reach the base case. Our run also gave 0 for an empty string and 2 for "ottawa" and "t".

**Answer 10 · Python** (python)
```python
def count_char(text, ch):
    if text == "":                 # base case: nothing left to check
        return 0
    first = 1 if text[0] == ch else 0
    return first + count_char(text[1:], ch)

print(count_char("saskatoon", "a"))   # 2
```

**Answer 10 · Java** (java)
```java
static int countChar(String text, char ch) {
    if (text.isEmpty()) {          // base case: nothing left to check
        return 0;
    }
    int first = (text.charAt(0) == ch) ? 1 : 0;
    return first + countChar(text.substring(1), ch);
}
```
Both versions return 2, 0 and 2 for the three test strings in our run. Each call copies the rest of the string, which is fine for practice and slow for very long text; passing an index instead is the efficient version.

## Is ICS4U hard?

Harder than ICS3U, and in a different way. Grade 11 rewards careful typing and tracing; Grade 12 rewards planning and abstract thinking. These are the three places our Grade 12 students most often need help, and nobody can promise a mark in advance.

### Trusting recursion

Students try to trace every call at once and get lost. The habit that works is to trust the recursive call to do its job on the smaller input, and check only the base case and the one step.

### Designing before coding

Classes chosen badly in week one cost hours in week five. Drawing the classes, their fields and their methods on paper first feels slow and saves the project.

### Owning a share of a team

The project is graded partly on each person&rsquo;s contribution and time management. Students who code well but deliver late are often surprised by their mark.

### Who tends to find it easier

Students who finished ICS3U able to write loops and arrays without notes usually find the first units of ICS4U manageable. The step up comes with recursion and object design, often in the middle of the semester.

Students who enjoy math proofs often take to recursion quickly, because the base case and the recursive step have the same shape as a proof by induction.

### A useful check for parents

Ask your student to explain, without the code in front of them, how their sort or their recursive method reaches its answer. A clear explanation in plain words is a better sign than a working program copied from a classmate or produced by an AI tool.

If they can only show the program and not explain it, that gap is exactly what the final evaluation will find, and the time to close it is now.

## ICS4U exam review: six things to drill

Final evaluations in ICS4U vary by school, and the teacher&rsquo;s outline is the authority on what yours contains. This drill list is ours, for the written or coding parts most Grade 12 classes include.

1. Trace three recursive methods by hand. Write each call on its own line with what it returns. Include one with two recursive calls, like Fibonacci.
2. Rewrite binary search and one sort from a blank file. Then state the precondition of each and the worst case in comparisons for a list of 1,000.
3. Design one small class hierarchy on paper. A base class, two subclasses, one overridden method. Say where encapsulation, inheritance and polymorphism each appear.
4. Predict the output of number traps. Integer division, the remainder operator, int overflow and floating-point comparison, the limits strand A names.
5. Explain one testing plan. One unit test, one integration test and one regression test from your own project, in a sentence each.
6. Prepare the topic answers. One ethical issue, one emerging technology and one research area from strand D, each with a source you could name.

The 2008 curriculum treats level 3 on its achievement chart as the &ldquo;provincial standard&rdquo;, and it describes the four categories teachers assess: Knowledge and Understanding, Thinking, Communication and Application. A drill list that includes explaining, not just coding, covers more of those categories.

## ICS4U online or at night school: teaching, never the credit

Families searching for ICS4U online, at night school or over the summer often need the credit itself. We cannot provide it, and saying so up front saves everyone time.

### Who grants the ICS4U credit

Only an organisation that teaches the course and evaluates the student can put ICS4U on a transcript, whether that is a day school, a board night or summer program, or an Ontario credit provider. We are a tutoring school, so our ICS4U classes are teaching and practice beside the course: we do not grant Ontario credits, issue report card marks or set the final evaluation.

What we can do is make the school course, wherever it is taken, easier to follow: the recursion explained twice, the project plan reviewed, the practice exam marked and discussed.

### ICS4U and university computer science

On 22 October 2026, Waterloo&rsquo;s Computer Science page listed Advanced Functions and Calculus and Vectors among its Ontario requirements and named the Grade 11 course, ICS3U, as its recommended computer science course. None of the three University of Toronto Computer Science listings named a computer science course at all.

So for those programs the Grade 12 math courses are the requirement, and ICS4U is preparation for first year rather than an entry condition. Plan MHF4U and MCV4U alongside it; our [Grade 12 university math course](/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course) teaches both beside the school course. Check each university&rsquo;s own page in the year you apply.

## Four stages of a Grade 12 programmer

Our own stages, from teaching students through ICS4U in both languages.

**Stages from ICS3U graduate to first-year ready (ours)**

| Stage | What it looks like |
|---|---|
| 1. Single-file coder | Solves problems well inside one long file, with everything in main |
| 2. Class builder | Splits a program into classes with fields and methods, and can explain why each class exists |
| 3. Recursive thinker | Writes a recursive method from its base case outward, and spots a missing base case on sight |
| 4. Analyst | Chooses between two algorithms by counting their work, and tests the choice on its worst input |

### For parents

Most students reach stage 2 by the middle of the course. Stage 3 is where outside help pays off fastest, because recursion clicks suddenly after enough worked examples.
A student at stage 4 is ready for the pace of a first-year university course, whatever their current mark says.

### For students

Before you write a recursive method, write the base case and one example of the step in a comment. Then the code almost writes itself.
When you choose a sort, write down why in one sentence. If you cannot, you chose by habit.

## Nine courses for Ontario Grade 12 coders

All taught live by a regular teacher, as a group batch or one to one.

### Beside ICS4U

Grade 12

- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): The shared repository a team project needs.
- [Python for teens](/courses/python-complete-masterclass-teens): Classes, modules and files, with real projects.
- [MySQL for teens](/courses/mysql-mastery-for-teens): Programs that read and write a database.

### For the strongest students

Grades 11 and 12

- [CCC Junior and Senior preparation](/courses/ccc-junior-and-senior-preparation-course): Timed problems for the Waterloo programming contest.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Graphs, dynamic programming and harder recursion.
- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): The language many contest coders switch to.

### After Grade 12

Teens

- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): An emerging field strand D asks students to research.
- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): From a class diagram to a working web app.
- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Defensive security and the ethics around it.

## Live Grade 12 classes, planned around the semester

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Evenings after the school day, in your own time zone.
- **Weekends** Mornings, often the calmest time to work on the project.
- **1-on-1** Extra sessions before a unit test or a project milestone.

- **One regular teacher** Who reads the course outline with you.
- **Python or Java** Matched to the class, not to us.
- **Recursion, slowly** Worked examples until it clicks.
- **Project reviews** Plans and code checked, never written.
- **Exam practice** Timed, marked, then talked through.
- **Group or private** A batch of fifteen to twenty, or one student.

## Fees

Your first class is free. Families then pay a monthly fee for eight live classes a month; the fee is shown below in your own currency, there is no semester contract, and you can stop after any month.

- Free first class: USD 0. A free first class. Bring the current unit or project. No card required.
- Group batch: USD 100 a month. Batch of fifteen to twenty. The same teacher each week. Pick a batch time. Monthly payment.
- One to one: USD 150 a month. One teacher, one student. Booked around deadlines. Built from their own course.

## ICS4U: questions families ask

### What is ICS4U?

ICS4U is Computer Science, Grade 12, University Preparation. Its expectations sit in Ontario's 2008 Computer Studies curriculum for Grades 10 to 12, and it covers data types and expressions, modular programming, algorithms including searching, sorting and recursion, a student-managed team project, algorithm analysis, and topics such as ethics and emerging technology.

### What is the prerequisite for ICS4U?

ICS3U, Introduction to Computer Science, Grade 11, University Preparation. Both the 2008 curriculum document and the current Ontario curriculum website list it as the prerequisite.

### Can you give my student the ICS4U credit?

No. Our ICS4U classes are teaching and practice beside the school course, and we do not grant Ontario credits. The credit comes from the school, night school, summer school or credit provider that teaches and evaluates the course.

### Is ICS4U taught in Python or Java?

It depends on the school. The 2008 curriculum leaves the programming language to the teacher, and Ontario classes commonly use Python or Java. We teach in whichever one the student's class uses.

### Is ICS4U hard?

It is a step up from ICS3U. Most students find recursion, designing classes before coding, and managing their share of the team project the hardest parts. Each of those improves with worked examples and practice, but nobody can honestly promise a mark in advance.

### What does recursion mean in ICS4U?

A method that solves a problem by calling itself on a smaller version of it, stopping at a base case. The curriculum asks students to design simple and efficient recursive algorithms, and to recognise pitfalls such as infinite recursion and the exponential growth of a plain recursive Fibonacci method.

### Which sorting and searching algorithms does ICS4U include?

The curriculum asks for linear and binary search, a sort such as bubble, insertion or selection, and lists merge sort among its recursion examples. It also asks students to compare their efficiency using run times and counts of comparisons or loop passes.

### Can ICS4U be taken as a half credit?

No. The 2008 curriculum allows its courses to be delivered as half-credit courses with the exception of the Grade 12 university preparation course, which is ICS4U.

### Do universities require ICS4U for computer science?

On 22 October 2026, Waterloo's Computer Science page listed Advanced Functions and Calculus and Vectors among its Ontario requirements and recommended the Grade 11 computer science course, and the University of Toronto's three Computer Science listings named no computer science course. Requirements change, so check each university's page in the year you apply.

### When are classes for Ontario families?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We agree the time in your own Ontario time zone.

### How much do ICS4U classes cost?

The first class is free. After it, families pay a monthly fee and can stop after any month. The fees section on this page shows the current figure for a batch and for one to one.

## Related pages for Ontario students

- [ICS3U computer science help](/ics3u-computer-science-help): The Grade 11 course that ICS4U builds on.
- [Coding classes in Ontario](/coding-classes-in-ontario): Live classes for every age across the province.
- [Canadian Computing Competition](/canadian-computing-competition-ccc-prep): The CEMC contest that rewards ICS4U skills.
- [Math tutoring in Canada](/online-math-tutor-canada): Advanced Functions and Calculus and Vectors.
- [Recursion explained](/blog/recursion-explained-for-beginners): A slower introduction to methods that call themselves.
- [How to read code](/how-to-read-code): A method for understanding a program you did not write.
- [How to debug code](/how-to-debug-code): Finding the faulty line without guessing.
- [Canada](/coding-classes-in-canada): Every guide we have written for Canadian families.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ics4u-computer-science-help](https://learn.modernagecoders.com/ics4u-computer-science-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
