---
title: "ICSE Computer Applications Answer Key and Paper Analysis"
description: "ICSE Computer Applications answer key and paper analysis: the 2026 paper section by section, every answer run in Java, difficulty notes, and the 2027 plan."
canonical: https://learn.modernagecoders.com/icse-computer-applications-paper-analysis
source: src/pages/icse-computer-applications-paper-analysis.html
updated: 2026-11-06
---

> An ICSE Computer Applications answer key is only useful if every answer has been tested. In the 2026 paper, Section A (40 compulsory marks) mostly tested single facts and short traces, with two assertion and reason items; Section B (any four of six programs at 15 marks) asked for a class with two formulas, a String array count, a sparse matrix, a digit-based number test, an overloading question and a word rebuild. Every answer here was run in Java. Modern Age Coders reviews each new paper live in a Tuesday and Wednesday mini batch in India, or in personalised one to one classes.

## ICSE Computer Applications answer key 2026: Section A, Question 1

Question 1 had twenty one-mark MCQs. Below, each item is described in our own words, not the paper's, with the correct answer and the trap the wrong options were built on. Answers that involve Java were run in Java 21.

- Item | What it tested, in our words | Answer | The trap

- 1(i) | Expanding the abbreviation for the machine that runs bytecode | Java Virtual Machine | Two options swap Virtual for Visible

- 1(ii) | Which of four literals needs exactly 2 bytes | the backslash escape sequence | It looks like two characters but is one char, and a char is 2 bytes

- 1(iii) | Spotting the accumulator in an update statement | the variable on both sides | An accumulator keeps adding to its own old value

- 1(iv) | Which word is not an access specifier | package | Default access exists, but package is not a specifier keyword

- 1(v) | Math.pow with an exponent written as an integer division | 36.0 | 6/5 is 1, not 1.2, and pow returns double

- 1(vi) | Turning an if-else that assigns one of two values into a ternary | condition ? true value : false value | Options swap the two values or misplace the colon

- 1(vii) | Character.toUpperCase on a small letter, then plus 2 | 68 | char plus int is int arithmetic: B is 66

- 1(viii) | Naming the objects in two creation statements | the two reference names, case as written | The class name is not an object; one option changes the capital letter

- 1(ix) | The earth turning daily while circling the sun yearly, as a Java idea | nested loop | One repetition runs inside another

- 1(x) | Return type of a method that sends back YES or NO | String | boolean tempts, but the method returns words, not true or false

- 1(xi) | Several calculate() methods in one calculator class | polymorphism | Overloading is a form of polymorphism, not of encapsulation

- 1(xii) | Assertion and reason: an int expression with + and /, and a false claim about precedence | (A) true, (R) false | 3 + 7/2 is 6 because / goes first; the reason says the opposite

- 1(xiii) | Parameter type of parseInt | String | It converts text to an int, so it takes text

- 1(xiv) | End index needed to pull a three-letter word out of a longer word starting at index 3 | 6 | The end index is excluded, so it is one past the last letter

- 1(xv) | charAt on two elements of a String array joined with a symbol | d*a | The String in the middle turns + into joining

- 1(xvi) | Which String method can return a negative value | compareTo() | length is never negative; equals returns boolean

- 1(xvii) | A picture of three numbers put in order by neighbouring swaps | bubble sort | Selection sort picks the smallest and swaps it once per pass

- 1(xviii) | Bytes taken by a 5 by 5 int array of sales figures | 100 | 25 elements times 4 bytes; 25 and 50 are the slips

- 1(xix) | Assertion and reason: does substring change the original String? | (A) false, (R) true | Strings are immutable; substring returns a new String

- 1(xx) | What must differ between overloaded constructors | parameters | Constructors have no return type to differ in

### ICSE computer applications paper solution: Question 2, ten parts of two marks

- Part | What it asked, in our words | Answer, as run

- 2(i) | Rewrite a while loop that subtracts 2 from 10 as a for loop, then print a product | for ( ; b > 0; b -= 2) { } and the program prints 0, because b ends at 0

- 2(ii) | Evaluate an expression mixing *, % and three pre-increments or decrements with a = 7, b = 8, c = 2 | 17: 56 % 3 is 2, then 2 + 8 + 7

- 2(iii) | Java expression for the cube root of x plus the absolute value of y | Math.cbrt(x) + Math.abs(y)

- 2(iv) | An age-above-10 eligibility check as a ternary stored in a String | String idStatus = age > 10 ? "Eligible" : "Not eligible"; then print it

- 2(v) | substring from index 4 of one word, then endsWith on another | IOUS on one line, false on the next

- 2(vi) | Output and pass count of a do-while that adds 2 from 1 while the value stays at most 6 | 3, 5, 7 on separate lines; the loop runs 3 times

- 2(vii) | A factorial loop that always prints 0 | Logical error: the product starts at 0. Start it at 1 and it prints 120

- 2(viii) | Index of the largest and smallest values in a 4 by 2 array | largest at [2][0], smallest at [1][1]

- 2(ix) | Two missing lines that swap two array elements without a third variable, using * and / | x[0] = x[0] * x[1]; and x[1] = x[0] / x[1];, printing 8 4

- 2(x) | Return type of equals(), and a String method with no parameter that returns a String | boolean; any of toUpperCase(), toLowerCase() or trim()

Assertion and reason items and picture-based items like 1(ix) now come every year; a set of original ones is on [ICSE Computer Applications competency based questions](/icse-computer-applications-competency-questions), and more trace practice of the 1(v) and 1(vii) kind is on [ICSE Java output questions](/icse-class-10-java-output-questions).

## ICSE computer applications paper solution 2026: Section B checked by running it

A Section B answer is right when it compiles and gives the right output for the example and for the awkward cases. The table lists inputs we ran through our own solutions to each 2026 question and the exact output, so a student can type their answer into BlueJ and compare.

- Q | Task, in our words | Test input | Expected result | Where answers went wrong

- 3 | Step tracker class: calories at 0.04 per step, kilometres at 1300 steps to the km | 6500 steps1000 steps | 260.0 cal, 5.0 km40.0 cal, 0.7692307692307693 km | With an int step count, steps / 1300 is integer division and gives 0 km for 1000 steps; divide by 1300.0

- 4 | Store 100 job titles, then count how many match the one the user types | Manager among six sample titles, three of them Manager | 3 | Comparing Strings with == instead of equals or equalsIgnoreCase

- 5 | 4 by 5 matrix: count zeros and non-zeros, decide if it is sparse | a matrix with 11 zeros | 11 zeros, 9 non-zeros, sparse | Forgetting that "more zeros than non-zeros" is a strict comparison

- 6 | Mark number: digit squares add to an even sum ending in the number's last digit | 28358135 | 68, Mark98, Mark35, not Mark | Destroying n in the loop, then comparing the sum with a 0 that used to be n

- 7 | Overloaded format: a shrinking number triangle, the total of a String's character codes, and 1 to n by formula | no argumentCAB100 | 1 2 3 4 5 down to 51985050 | Returning the sum from a void version, or printing the codes instead of adding them

- 8 | Symbolic word: from the first consonant onwards, then the leading vowels, then TR | AIRWAYSOUTPUTEAU | RWAYSAITRTPUTOUTREAUTR | Not handling a word that is all vowels, which crashes or prints nothing

Two of the six, written our way. Neither is the board's model answer; both are the kind of complete program that earns full marks.

```
import java.util.Scanner;
class MarkCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int t = n, sq = 0;
        while (t > 0) {
            int d = t % 10;
            sq = sq + d * d;
            t = t / 10;
        }
        boolean even = sq % 2 == 0;
        boolean sameEnd = sq % 10 == n % 10;
        System.out.println("Sum of squares = " + sq);
        if (even && sameEnd)
            System.out.println(n + " is a Mark number");
        else
            System.out.println(n + " is not a Mark number");
    }
}
```

```
Sum of squares = 68
28 is a Mark number

Sum of squares = 98
358 is a Mark number

Sum of squares = 35
135 is not a Mark number
```

```
import java.util.Scanner;
class Symbolic {
    static boolean isVowel(char ch) {
        return "AEIOUaeiou".indexOf(ch) >= 0;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String w = sc.next();
        int k = 0;
        while (k < w.length() && isVowel(w.charAt(k)))
            k++;
        String sym = w.substring(k) + w.substring(0, k) + "TR";
        System.out.println("Symbolic word: " + sym);
    }
}
```

```
Symbolic word: RWAYSAITR
Symbolic word: TPUTOUTR
Symbolic word: EAUTR
Symbolic word: STRENGTHTR
```

The digit loop in Question 6 is the same template behind every number check on [special number programs in Java](/icse-special-number-programs-java), and the zero count in Question 5 is one of the standard tasks on [ICSE Class 10 2D array programs](/icse-class-10-2d-array-programs).

## ICSE computer paper analysis: how difficult was each part of the 2026 paper?

Our reading: a fair, mostly direct paper. A student who had written the standard programs in BlueJ through the year could finish it with time to check. Marks were lost to small type and index slips, not to unfamiliar questions. This is our teachers' judgement from working the paper, not a statistic.

- Part | Our difficulty rating | Why | Time we would budget

- Question 1, recall items | Easy | JVM, access specifiers, parseInt, compareTo and constructor overloading are straight definitions | 5 min

- Question 1, trace items | Moderate | The pow exponent, the char plus int, the substring end index and the 2D array size each hide one rule | 10 min

- Question 1, the two assertion and reason items | Moderate | Each statement must be judged on its own first; the precedence item rewards knowing why 6 is right | 3 min

- Question 2 | Easy to moderate | The do-while count, the swap without a third variable and the factorial with a zero start are classic shapes | 20 min

- Section B, Questions 3 and 7 | Easy | A two-formula class and a three-way overload, both close to textbook exercises | 15 min each

- Section B, Questions 4, 5 and 6 | Easy to moderate | Short single loops or a double loop; the risks are String comparison and keeping the original number | 15 min each

- Section B, Question 8 | Moderate | The only rebuild-a-word task; finding the first consonant and joining the pieces in the right order needs care | 20 min

### What changed from 2025
Question 3 used two fixed formulas instead of a slab bill, and no sorting question was set for the second year running. Two assertion and reason items again sat in Question 1.

### The quiet trap of the paper
Question 3 stored steps as an int. Dividing it by 1300 gives a whole number of kilometres and silently loses the fraction. Writing 1300.0 fixes it, and it is exactly the integer division rule tested in Section A.

### The best choice of four
For most students, Questions 3, 5, 6 and 7 were the safest four: each has one clear loop or formula and a short output. Question 8 suited students confident with substring and character tests.

How the 2026 Section B sits beside 2023, 2024 and 2025, family by family, is on [ICSE Computer Applications previous year papers solved](/icse-computer-applications-previous-year-papers-solved); this page stays with the latest paper only.

## ICSE computer 2027 answer key: what this page adds on exam day

After the 2027 Computer Applications paper, this same page is rewritten for it. The 2027 date is not known yet: as of 6 November 2026 CISCE had not published the ICSE 2027 timetable on cisce.org. For comparison, the 2026 timetable was released on 13 November 2025, and the 2026 ICSE examinations ran from 17 February to 30 March 2026.

-
**The date, once CISCE publishes it** When the official 2027 timetable appears on cisce.org, the Computer Applications date goes at the top of this page. Until then we print no date, because the guesses circulating online do not agree.

-
**Section A, item by item** Each of the twenty MCQs and ten short parts is described in our words with its answer and the rule it tested. Anything with code is typed into Java and run before it is posted.

-
**Section B, tested outputs** For all six programs we post test inputs and the exact outputs our own solutions give, including the edge cases, so students can check their memory of what they wrote.

-
**Difficulty and changes** A rating for each part, and a plain note on anything new: a different count of assertion and reason items, a new program family, or a change in layout.

-
**The 2026 analysis moves, not disappears** The 2026 tables stay available lower on the page, so the two papers can be compared side by side.

### How to read any unofficial answer key

- Keys published after the paper, ours included, are unofficial; marks are decided by the board's examiners.

- For a Section B program, a different correct method still earns marks. Compare outputs, not lines of code.

- If a key and your trace disagree on an output, run the code. The compiler settles it.

### What to do before the 2027 paper

Sit the 2026 paper complete in two hours, mark it with the tables above, and list every item lost by type: integer division, String comparison, an index off by one. Then sit the current specimen paper and the mock tests on [the ICSE specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests). The layout of the 2027 paper is on [ICSE Computer Applications exam date and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern).

## Taking the newest board paper apart in the mini batch

A fresh board paper is the closest thing to the real exam a student can practise. The batch does not just read the key; it sits the paper, marks it and fixes each lost mark.

### Sat first, discussed later
Students write the paper under a two-hour timer before seeing any answer. Their own score is the starting point for everything that follows.

### Tuesday: Section A traced aloud
At the 5:30 PM IST class, every Question 1 and 2 item a student missed is traced on a shared screen until the rule behind it is clear, then a fresh item on the same rule is tried.

### Wednesday: Section B rewritten
At the 8:00 PM IST class, students type their programs into BlueJ and feed in the test inputs from the table above. Wrong outputs are fixed while the teacher watches.

### Worksheets on the weak spots
Each student leaves with a short worksheet built on the items they lost, checked at the next class.

### Doubt time every week
The end of each class is kept for questions from school work, so the paper review never crowds out the syllabus.

### Full mocks before the exam
From January, complete papers are sat under time and marked like the board, the latest paper among them.

A batch never has more than six students, so every paper gets read by the teacher. Abroad, the same review runs one to one.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where the newest board paper is answered, traced and rewritten in BlueJ in class.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving to ISC Computer Science, where the same Java grows into longer programs, recursion and data structures.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who finished Section B early and wants to learn why one search or sort beats another.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**Where can I find the ICSE Computer Applications answer key?** This page carries an answer key for the 2026 board paper: every Section A item described in our own words with its answer and trap, and tested outputs for all six Section B programs. Each answer was run in Java 21. The page is rewritten after the 2027 paper, at the same address.

**Does CISCE publish an official answer key for ICSE Computer Applications?** Keys that appear after the paper, including this one, come from teachers and publishers rather than from a board release, so treat them as unofficial. The board's examiners decide the marks. For a program, any correct method earns credit, so compare your outputs with the key rather than your exact lines of code.

**When is the ICSE Computer Applications exam in 2027?** Not announced yet. As of 6 November 2026, CISCE had not published the ICSE 2027 timetable on cisce.org. The 2026 timetable came out on 13 November 2025 and the 2026 examinations ran from 17 February to 30 March 2026. This page will show the 2027 date once the official timetable is out.

**Was the ICSE Computer Applications 2026 paper easy?** In our teachers' view it was fair and mostly direct. Section A tested single rules and short traces, and Section B asked for familiar programs: a class with formulas, a String array count, a sparse matrix, a number check, an overloading question and a word rebuild. Most lost marks came from integer division and String comparison slips.

**What came in Section B of the ICSE computer paper 2026?** In our words: a step tracker class turning steps into calories and kilometres, a count of matching job titles in a String array, a sparse matrix check on a 4 by 5 array, a Mark number test using squared digits, an overloaded method with a number triangle, a character code total and a formula sum, and a word rebuilt from its first consonant.

**How many assertion and reason questions were in the 2026 ICSE Computer Applications paper?** Two, both in Question 1. One paired a true claim about an integer expression with a false claim about operator precedence; the other paired a false claim that substring changes the original String with a true description of what substring does. Judge each statement alone before deciding whether one explains the other.

**How do I check my Section B answer if I cannot remember my exact code?** Rewrite the program in BlueJ the way you wrote it in the exam, then feed in the test inputs in the Section B table on this page. If your outputs match, including the edge cases such as a word made only of vowels, your logic was right even if your variable names differ.

**Why does 1000 steps give 0 km in some Question 3 answers?** Because the step count was an int, and an int divided by the int 1300 is integer division, which drops the fraction. Dividing by 1300.0, or casting to double first, gives about 0.769 km. It is the same rule Section A tested with the pow exponent written as 6/5.

**Will ICSE Computer Applications 2027 follow the same pattern as 2026?** The 2027 syllabus keeps the same structure: a two-hour, 100-mark paper with Section A of 40 compulsory marks and Section B of six programs, any four at 15 marks each, plus internal assessment. Whether the item styles change is only known on the day, which is why this page is rewritten after the paper.

**Do you go through the board paper in your live classes?** Yes. In the mini batch the latest paper is sat under a two-hour timer, missed Section A items are traced on a shared screen on Tuesday, and Section B programs are rerun in BlueJ with test inputs on Wednesday. Families can also choose personalised one to one classes at a time that suits them.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-paper-analysis*
