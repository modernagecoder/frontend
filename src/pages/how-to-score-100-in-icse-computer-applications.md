---
title: "How to Score 100 in ICSE Computer Applications 2027"
description: "How to score 100 in ICSE Computer Applications: a marks-loss audit of the 2027 paper, before and after answers, Java checked, and where to practise each fix."
canonical: https://learn.modernagecoders.com/how-to-score-100-in-icse-computer-applications
source: src/pages/how-to-score-100-in-icse-computer-applications.html
updated: 2026-11-06
---

> To score 100 in ICSE Computer Applications, you need all 40 Section A marks and four complete 15-mark programs in Section B, so the work is less about learning more Java and more about stopping marks from leaking. The common leaks are definitions without an example, outputs written without the exact type or spacing, one-sided difference answers, class and method names changed from the question, missing variable descriptions, unlabelled output, and programs that fail on an edge case such as 1 in a prime check. Modern Age Coders audits these live in a Tuesday and Wednesday mini batch in India, or one to one.

## How to prepare for ICSE Computer: know where every mark sits

The 2027 written paper is 100 marks in two hours, after 15 minutes of reading time: Section A is 40 compulsory marks and Section B asks for any four of six programs at 15 marks each. Full marks on the paper therefore means no slip in 30 Section A answers and four programs with nothing missing.

- Part | What it asks | Marks

- Section A, Question 1 | Twenty MCQs, one mark each | 20

- Section A, Question 2 | Ten short parts, two marks each: outputs, errors, definitions, small code | 20

- Section B, Questions 3 to 8 | Answer any four programs | 4 x 15 = 60

- Written paper | Two hours, plus 15 minutes reading | 100

- Internal assessment criterion | Out of

- Class design | 10

- Variable description | 10

- Coding and documentation | 10

- Execution or output | 20

- Per examiner (teacher and external) | 50

Computer Applications is assessed half by the written paper and half by the internal assessment on at least twenty lab assignments, so a full score needs both. Notice what the internal criteria reward: design, variable description and documentation are 30 of the 50 marks each examiner gives, before the program even runs. The lab side is explained on [ICSE project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), and the paper itself on [exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern).

## Mistakes that cost marks in ICSE Computer: the leak list

These are the fourteen places a well-prepared student most often leaks marks. Go through your last test against this list; each leak you find has a specific page to practise on.

- # | Leak | Where | The fix | Practise on

- 1 | Definition with no example | Q2 | One plain sentence, then a line of Java that shows it | Notes

- 2 | Difference answered for one side only | Q2 | Two columns, same point compared on both sides | Differences

- 3 | 8 written where Java prints 8.0 | Q1, Q2 | Decide the type before writing the value | Math methods

- 4 | Output guessed, not traced | Q1, Q2 | A small trace table for any loop of more than a few passes | Outputs

- 5 | MCQ answered from the options, not the code | Q1 | Work it in the margin, then find it in the list | MCQs

- 6 | Error named but not corrected | Q2 | State the error and write the corrected line | Find the error

- 7 | Class or method name changed | Section B | Copy names, types and order from the question letter for letter | Methods

- 8 | Values fixed in the code when the question says accept | Section B | Use Scanner for every value the question says to input | Input

- 9 | No variable descriptions | Section B | Meaningful names plus a comment or a short table | Section 4 below

- 10 | Output printed with no label or in the wrong format | Section B | Print exactly what the question shows, labels and layout included | Patterns

- 11 | Edge case wrong: 1 as prime, 0 digits, empty word | Section B | Test the smallest and oddest input before moving on | Special numbers

- 12 | Integer division where a decimal was wanted | Section B | Divide by 3.0, or cast before dividing | Operators

- 13 | Strings compared with == | Section B | Use equals() or equalsIgnoreCase() | String programs

- 14 | A weak Section B question chosen in a hurry | Reading time | Rank all six during the 15 minutes; pick the four you can finish fully | Past papers

## ICSE computer exam tips for Section A, with before and after answers

Each pair below shows the same question answered twice. The before answer is the kind that loses a mark or both; the after answer gives the marker nothing to take away.

### Leak 1: "What is a wrapper class?" (2 marks)
Before: A class that wraps a data type.

After: A wrapper class is a class in java.lang whose object holds one value of a primitive type, for example Integer for int and Character for char. It also provides methods such as Integer.parseInt("25"), which returns the int 25.

The before answer repeats the name. The after answer defines it, names two pairs and shows one use.

### Leak 2: "Differentiate between break and continue" (2 marks)
Before: break stops the loop and continue continues it.

After: (i) break ends the loop at once and control goes to the statement after the loop; continue skips only the rest of the current pass and the loop goes on to its next pass. (ii) break is also used to leave a switch; continue is used only inside loops.

Two numbered points, each comparing both sides of the same idea.

```
System.out.println(Math.pow(2, 3) + " " + Math.sqrt(49) + " " + Math.round(7.5));

// Before:  8 7 8
// After:   8.0 7.0 8
```

```
int m1 = 78, m2 = 85, m3 = 84;
double before = (m1 + m2 + m3) / 3;
double after = (m1 + m2 + m3) / 3.0;
System.out.println(before + " " + after);

// Output: 82.0 82.33333333333333
```

### Leak 6: "Find the error and correct it" (2 marks)
Question: int x = 5; if (x = 5) System.out.println("five");

Before: There is an error in the if statement.

After: = is assignment and gives an int, but if needs a boolean. Correct line: if (x == 5) System.out.println("five");

### Leak 5: an MCQ on a fragment
Before: reading the four options first, spotting 8 and ticking it because the arithmetic looks right.

After: working the fragment in the margin to 8.0, then finding 8.0 among the options. Wrong options in output MCQs are very often the answers a common slip produces, so the options are the last thing to read.

Thirty Section A answers take about forty minutes at a steady pace. Short case-based questions in Section A are practised on [ICSE competency and case study questions](/icse-computer-applications-competency-questions), and wrapper methods on [wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

## ICSE computer full marks tips for Section B programs

A full-marks program does exactly what the question says, in the names the question uses, with every variable explained and the output printed the way the question shows it. Past ICSE Computer Applications papers instruct that each program be written using variable descriptions or mnemonic codes so the logic is clear, and that flowcharts and algorithms are not required.

Question (original). Define a class Student with data members name, m1, m2, m3, avg and grade. Methods: void input() to accept the name and three marks, void compute() to find the average and set grade to 'A' if the average is 80 or more, else 'B', and void display() to print the name, average and grade. Write main to create an object and call the methods.

```
import java.util.Scanner;
class Marks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String n = sc.nextLine();
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        double x = (a + b + c) / 3;
        System.out.println(n);
        System.out.println(x);
        System.out.println(x >= 80 ? 'A' : 'B');
    }
}
```

```
import java.util.Scanner;

class Student {
    String name;      // student's name
    int m1, m2, m3;   // marks in three tests
    double avg;       // average of the three tests
    char grade;       // 'A' if avg >= 80, else 'B'

    void input() {
        Scanner sc = new Scanner(System.in);
        name = sc.nextLine();
        m1 = sc.nextInt();
        m2 = sc.nextInt();
        m3 = sc.nextInt();
    }

    void compute() {
        avg = (m1 + m2 + m3) / 3.0;
        grade = (avg >= 80) ? 'A' : 'B';
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Average: " + avg);
        System.out.println("Grade: " + grade);
    }

    public static void main(String[] args) {
        Student ob = new Student();
        ob.input();
        ob.compute();
        ob.display();
    }
}

// Input: Riya Sen / 78 85 84
// Output:
// Name: Riya Sen
// Average: 82.33333333333333
// Grade: A
```

```
int c = 0;
for (int i = 2; i < n; i++)
    if (n % i == 0)
        c++;
if (c == 0)
    System.out.println("Prime");
else
    System.out.println("Not prime");

// n = 7: Prime
// n = 9: Not prime
// n = 1: Prime     (wrong)
```

```
int factors = 0;            // divisors from 1 to n
for (int i = 1; i <= n; i++)
    if (n % i == 0)
        factors++;
if (factors == 2)           // exactly 1 and n
    System.out.println(n + " is a prime number");
else
    System.out.println(n + " is not a prime number");

// n = 7: 7 is a prime number
// n = 9: 9 is not a prime number
// n = 1: 1 is not a prime number
```

```
String ans = sc.next();
if (ans == "yes")
    System.out.println("== says equal");
else
    System.out.println("== says not equal");
if (ans.equals("yes"))
    System.out.println("equals says equal");

// Output:
// == says not equal
// equals says equal
```

### Ten seconds per program before you move on

- Names: class, methods, parameter types and order match the question.

- Input: everything the question says to accept is read with Scanner.

- Variables: each one has a meaningful name or a comment.

- Logic: one ordinary input and one awkward input traced by hand.

- Output: labels and layout match the question's sample.

- main: creates the object and calls every method the question lists.

The program families that fill Section B each have their own page: [2D array programs](/icse-class-10-2d-array-programs), [sorting and searching](/icse-class-10-sorting-and-searching-programs), [slab and bill programs](/icse-class-10-slab-and-bill-programs), [menu driven programs](/icse-class-10-menu-driven-programs) and [constructors](/icse-class-10-constructors-questions). The full list is on [ICSE Java programs practice](/icse-class-10-java-programs-practice).

## How to score full marks: from now to the last minute of the paper

The plan is simple: find your own leaks, fix them one at a time, then prove the fixes hold inside full two-hour papers. The 2027 timetable has not been published yet, so count back from your school's preliminary exams instead of a board date.

-
**Audit one old test** Take your last school test or a past paper, and next to every lost mark write the leak number from the list above. Most students find their marks cluster in three or four leaks, and those come first.

-
**Fix by leak, not by chapter** Spend a week on each leak you found: Math return types and outputs one week, definitions and differences another, names and variable descriptions in Section B another.

-
**Write programs on paper** The exam is handwritten. Write each practice program by hand first, then type it into BlueJ and run it on the sample input and on one awkward input.

-
**Full papers under time** Sit complete two-hour papers with 15 minutes of reading first. Use the reading time to rank the six Section B questions and choose four you can finish completely.

-
**Mark against the leak list** After each paper, mark it against the fourteen leaks, not just right and wrong. The leak that keeps returning is the one to drill next.

-
**In the hall: leave ten minutes** Keep the last ten minutes for the checklist: types of every output, names in every program, labels on every print line. That is where full marks are protected.

A paper-by-paper mock ladder is on [specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), the whole-season plan on [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), and the most-asked questions on [ICSE Computer Applications important questions](/icse-class-10-computer-applications-important-questions).

## The marks-loss audit in live classes

Each student keeps a personal leak list, and every class works on removing one item from it.

-
**Tuesday: Section A rewritten** At the 5:30 PM IST class students answer a short set of definitions, differences and outputs, then rewrite any answer that lost a mark until it would earn both.

-
**Wednesday: one program marked** At the 8:00 PM IST class a Section B question is answered on paper, typed, run and marked on screen against names, input, variable descriptions, logic and output.

-
**The leak list updated** Leaks that did not appear for three weeks are ticked off; new ones are added. Parents can see which items are closed.

-
**Doubt time every class** The last part of each class is open for any question from school work, the textbook or the lab file.

-
**Full mocks and lab file checks** From December complete two-hour papers are marked the same way, and lab assignments are checked against the four internal criteria before school submission.

With six students at most, every answer gets read, which is the point of an audit. Printed practice sets for each leak are on [ICSE Computer Applications worksheets](/icse-computer-applications-worksheets).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with every mock answer checked against the leak list on this page.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students taking computing on to ISC, where the same precise answer habits carry into a longer paper and a practical.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For a student who likes getting every case right and wants harder problems to test that habit on.

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

**Is it possible to score 100 in ICSE Computer Applications?** Yes. The paper is objective enough that a complete, correct answer earns full marks: outputs have one right answer and a program either does what was asked or not. Full marks need every Section A answer exact and four Section B programs complete, with names, variable descriptions and output as the question asks.

**How do I prepare for the ICSE Computer Applications exam?** Learn the syllabus chapter by chapter, then switch to practice: output and error questions for Section A, and handwritten programs for each Section B family. In the last months, sit full two-hour papers and mark each one against a list of the mistakes that cost you marks, fixing the commonest first.

**What are the most common mistakes in ICSE Computer Applications?** Writing 8 where Java prints 8.0, changing class or method names from the question, missing variable descriptions, unlabelled output, integer division where a decimal was needed, comparing Strings with ==, one-sided difference answers, and programs that fail on edge cases such as 1 in a prime check.

**Is a variable description table compulsory in ICSE Computer Applications?** Past ICSE Computer Applications papers instruct that each Section B program be written using variable descriptions or mnemonic codes, so meaningful names with short comments meet that instruction. In the internal assessment, variable description is a separate criterion worth 10 of each examiner's 50 marks, so a full table belongs in the lab file.

**Do comments matter in ICSE Computer Applications programs?** Comments are one way to give the variable descriptions the paper asks for, and they make the logic easy for the examiner to follow. In the internal assessment, coding and documentation is a separate criterion worth 10 marks per examiner, so lab programs should always be commented.

**How should I use the 15 minutes of reading time?** Read Section B first and rank the six programs by how surely you can finish each. Choose four, note the class and method names in each, and plan the input and output. Then read Section A so the short questions are fresh when writing starts.

**How many Section B questions should I attempt?** The paper asks for any four of the six Section B questions, each worth 15 marks. Choose the four you can finish completely during the reading time, and spend the time saved on checking them rather than starting a fifth.

**Are flowcharts or algorithms needed in the ICSE Computer Applications paper?** No. Past ICSE Computer Applications papers state that flowcharts and algorithms are not required in Section B. The marks go to the program itself, written in Java with variable descriptions or mnemonic names. Time spent drawing a flowchart is better spent tracing the program on one awkward input before moving on.

**Which chapters are most important for full marks in ICSE Computer?** All chapters carry marks, but Section B programs usually come from user-defined methods and overloading, constructors, String handling, single and double dimensional arrays with sorting and searching, and number or series programs. Section A draws on every chapter, including operators, Math methods and wrapper classes.

**Do you offer live classes to help score 100?** Yes. In the ICSE mini batch on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, each student keeps a leak list, rewrites Section A answers and has a Section B program marked on screen every week, with full two-hour mocks from December. Personalised one to one classes are also available at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/how-to-score-100-in-icse-computer-applications*
