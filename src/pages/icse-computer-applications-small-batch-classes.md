---
title: "ICSE Computer Applications Group Classes, Up to Six"
description: "ICSE Computer Applications group classes in a mini batch of up to six, live online in India: Tuesday 5:30 PM and Wednesday 8:00 PM IST, every screen read."
canonical: https://learn.modernagecoders.com/icse-computer-applications-small-batch-classes
source: src/pages/icse-computer-applications-small-batch-classes.html
updated: 2026-11-06
---

> ICSE Computer Applications group classes at Modern Age Coders are a mini batch of up to six ICSE Class 10 students, taught live online for families in India every Tuesday at 5:30 PM and Wednesday at 8:00 PM IST. Tuesday is a timed Section A sprint; Wednesday is a programs lab in BlueJ in which the teacher reads each student's screen in turn. The small size is the point: every program gets read and every wrong answer gets traced. Students outside India, or whose evenings clash, take the same course as personalised one to one.

## What are ICSE Computer Applications group classes in a mini batch?

A mini batch is a live online group of at most six ICSE Class 10 students with one teacher, meeting at two fixed times each week. It is taught for families in India, and the whole ICSE Computer Applications course for the 2027 paper runs through it.

- Question | Answer

- Who is in the batch? | ICSE Class 10 Computer Applications students in India, all preparing for the same board paper

- How many students? | Up to six

- When? | Tuesday 5:30 PM IST and Wednesday 8:00 PM IST, every week

- Where? | Live online, from home; the student needs a computer with BlueJ installed

- What happens on Tuesday? | A timed Section A sprint on the week's chapter, answers checked together

- What happens on Wednesday? | A programs lab: each student writes a Section B style program in BlueJ while the teacher reads the screens in turn

- Between classes? | Set work: a few Section A items and a variation on Wednesday's program

- Mock papers? | Full two-hour papers from December, marked by the teacher

- Outside India? | No batch; the same course is taught one to one

- Billing | Monthly, no admission fee, first class a free demo

The marks the batch works towards, 100 for the theory paper and 100 for internal assessment, are set out on [the ICSE Computer Applications syllabus explained](/icse-class-10-computer-applications-syllabus-explained).

## Small batch Java classes ICSE: one Wednesday lab, stage by stage

In a lab, every student writes the same program on their own screen, and the teacher moves from screen to screen reading the code. Here is a 2D array lab followed through its stages, with the program the batch ends up with and the faults that typically appear on different screens along the way.

-
**The task, read aloud by a student** "Store a 3 by 4 matrix. Print it, with the sum of each row at the end of the row and the sum of each column underneath."

-
**Plan on paper first** Each student writes, in plain words, how many loops are needed and which variable holds which sum, before opening BlueJ.

-
**Six screens, one program each** Students share screens; the teacher reads them in turn and asks a question wherever a line is wrong, without typing the fix.

-
**The faults compared** The teacher puts two different wrong versions side by side so the whole batch sees why each fails. One student's fault is everyone's lesson.

-
**Run, then written up** Each corrected program is run, and its variable description is written. It becomes the week's lab file assignment.

```
public class RowColumnSum {
    public static void main(String args[]) {
        int m[][] = { {4, 7, 1, 8},
                      {2, 9, 6, 3},
                      {5, 0, 7, 4} };
        int rows = m.length, cols = m[0].length;
        int colSum[] = new int[cols];
        for (int i = 0; i < rows; i++) {
            int rowSum = 0;
            for (int j = 0; j < cols; j++) {
                System.out.print(m[i][j] + "\t");
                rowSum += m[i][j];
                colSum[j] += m[i][j];
            }
            System.out.println("| " + rowSum);
        }
        for (int j = 0; j < cols; j++)
            System.out.print(colSum[j] + "\t");
        System.out.println();
    }
}

// Output:
4   7   1   8   | 20
2   9   6   3   | 20
5   0   7   4   | 16
11  16  14  15
```

- Fault seen on a screen | What it prints | The question the teacher asks

- int rowSum = 0; written before the outer loop | Row sums 20, 40, 56: each row adds on to the last | "When should rowSum go back to zero?"

- j < rows in the inner loop | Three columns per row; the 8, 3 and 4 are never added and the last column total stays 0 | "How many columns does each row have?"

- colSum as a single int | One number, the total of the whole matrix | "How many column totals do you need to remember?"

- println instead of print for each element | Every number on its own line | "Where should the line break happen?"

- Column loop placed inside the row loop | A line of column totals after every row, correct only after the last row | "Can you know a column total before the last row?"

With six screens, the teacher sees most of these faults in a single lab and can compare them on the spot. More double dimensional array programs are on [2D array programs for ICSE Class 10](/icse-class-10-2d-array-programs), and the lab file these programs feed on [the project and internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## ICSE computer batch online: a sample Tuesday Section A sprint, with answers

A sprint is a short timed set in the shapes of Section A, where all 40 marks are compulsory. Everyone writes answers before any are revealed, then the snippets are run in BlueJ on the shared screen. These six are from the same week as the matrix lab; every answer was run in Java 21.

- int a[][] = new int[3][5]; What does System.out.println(a.length * a[0].length); print?
Answer 15. a.length is the number of rows (3) and a[0].length the number of columns in row 0 (5).

- With int b[][] = {{2, 4}, {6, 8}, {1, 3}};, what is b[2][0] + b[0][1] * b[1].length?
Answer 9. Multiplication first: 4 * 2 is 8, then 1 + 8.

- Same b. int t = 0; for (int i = 0; i < 3; i++) t += b[i][i % 2]; What is t?
Answer 11. The columns used are 0, 1, 0, so t is 2 + 8 + 1.

- What does System.out.println(Integer.parseInt("12") + Integer.parseInt("3") + "4"); print?
Answer 154. 12 + 3 is added as int first, then "4" is joined to 15.

- What does System.out.println(Character.isUpperCase('b') + " " + Character.toUpperCase('b')); print?
Answer false B. The test returns a boolean; the conversion returns the char B.

- String s = "MATRIX"; What does System.out.println(s.charAt(s.length() / 2) + s.substring(4)); print?
Answer RIX. 6 / 2 is 3, the character at index 3 is R, and a char joined to a String gives a String.

In the batch, whoever got an item wrong traces it aloud to the group, which is often where the quietest students learn the most. Longer sets of this kind, sorted by trap, are on [ICSE Java output questions](/icse-class-10-java-output-questions), and the parse and Character methods on [wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

## Mini batch, one to one or a large group: how ICSE Computer Applications class formats compare

Six is small enough for a teacher to read every screen in a lab and large enough for students to learn from each other's mistakes. One to one gives more attention but no peers; a large group gives peers but almost no attention to any one program.

- Format | Is each program read? | Learning from peers | Pace | Timing

- Our mini batch, up to six, India | Yes, screen by screen in every lab | Yes, faults compared side by side | Steady, set by the syllabus | Tuesday 5:30 PM and Wednesday 8:00 PM IST

- Our personalised one to one | Yes, every line as it is typed | None | Set entirely by the student | Agreed with the family, in India or abroad

- A large online group, dozens of students | Rarely; answers are usually shown, not checked | Through chat, if at all | Set by the class, hard to slow down | Fixed

- A local coaching centre | Depends on whether students code in the room | Yes, in person | Set by the centre | Fixed, plus travel time

- Recorded video lectures | No | No | Any speed, but no one notices a gap | Any time

### Why not twenty?
In a lab of twenty, a teacher cannot read twenty programs. The class turns into a demonstration, and the student who is silently stuck stays stuck until the paper.

### Why not one?
One to one is excellent for gaps and awkward timetables, and we teach it. But a student alone never sees five other wrong versions of the same program, which is how faults become memorable.

### Why online?
Java is written on a screen, so a shared screen shows the teacher exactly what a classroom whiteboard would hide. Nobody loses an evening to travel.

How a one to one session runs, for comparison, is on [the ICSE Computer Applications private tutor page](/icse-computer-applications-private-tutor).

## ICSE computer mini batch: who it suits, who it does not, and joining mid-year

The mini batch suits an ICSE Class 10 student in India who can make both evenings and is roughly keeping up at school. It does not suit a student abroad, one whose evenings clash, or one with whole chapters missing.

### It suits a student who

- Lives in India and can make Tuesday 5:30 PM and Wednesday 8:00 PM IST most weeks.

- Follows the school lessons but cannot yet write a program from a blank screen without help.

- Works better with others around, and pushes harder when a sprint is timed.

- Needs a steady rhythm more than extra attention: two classes, set work, repeat.

### Choose one to one instead if the student

- Lives outside India. The batch is for families in India; abroad the course is one to one.

- Cannot make the two evenings because of school, sport or another class.

- Has missed whole chapters, such as strings or class design, and needs them taught first.

- Needs a very different pace, much faster or much slower than the syllabus rhythm.

### Joining the batch partway through the year

A student can join at any point. After the free demo, the teacher notes which chapters the batch has already covered, and the student catches up on those through set work or a few one to one sessions while attending the batch for the current chapter. Close to the paper, joining means stepping into the mock and revision term, described on [the ICSE Computer Applications crash course](/icse-computer-applications-crash-course). Families comparing online classes with a tutor nearby can read [ICSE computer tuition near me](/icse-computer-tuition-near-me).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The full Class 9 and 10 course taught in the mini batch: Tuesday sprints, Wednesday labs, set work and mocks marked by the teacher.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For mini batch students going on to ISC Computer Science, where the same Java grows into longer programs.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): For the student whose favourite lab was the matrix one, and who wants to see what tables of numbers can tell you.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**How many students are in the ICSE Computer Applications batch?** At most six. The mini batch is kept to six ICSE Class 10 students so that in every Wednesday lab the teacher can read each student's BlueJ screen and ask about the lines that are wrong. A larger group would turn the lab into a demonstration.

**What are the ICSE Computer Applications batch timings?** Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, every week, live online. Tuesday is a timed Section A sprint; Wednesday is a programs lab in BlueJ. The two classes are on different evenings, so a clash on one night does not cost both.

**Are small batch Java classes for ICSE better than one to one?** Neither is better for everyone. A small batch suits a student who is roughly on track and learns from seeing other students' mistakes. One to one suits a student with missing chapters, an awkward timetable or a need for a very different pace. Both use the same teachers and syllabus.

**Can students outside India join the ICSE mini batch?** No. The mini batch is taught for families in India. ICSE students in other countries take the same course as personalised one to one, two private classes a week at an after-school hour in their own time zone, with the same sprints, labs and mocks.

**Is the ICSE computer batch online or offline?** Fully online and live. Students join from home with a computer that has BlueJ installed and share their screens during labs. There is no centre to travel to, and families from any Indian city join the same batch. The teacher sees each student's code through screen sharing, which is closer than a classroom allows.

**What does my child need for the online batch?** A laptop or desktop with BlueJ and Java installed, a steady internet connection, and a quiet room for two evenings a week. A notebook for traces and plans matters too, since students plan programs on paper before typing them, exactly as they must in the exam hall.

**Can my child join the batch in the middle of the year?** Yes. After the free demo the teacher notes which chapters the batch has already covered. The student catches up on those through set work or a few one to one sessions while joining the batch for the current chapter. Close to the paper, a late joiner steps straight into the mock and revision term.

**Are mock tests part of the group classes?** Yes. From December the batch sits full two-hour mock papers, marked by the teacher and returned with the marks lost and why. Before that, every Tuesday sprint and Wednesday lab is timed practice in the shapes of the paper, so the full mocks feel familiar when they arrive.

**Will my child get individual attention in a group class?** Yes, because the group is small. In each lab the teacher reads every student's screen in turn and asks about the exact line that is wrong, and in each sprint every wrong answer is traced aloud. A student who needs more than that can add a few one to one sessions.

**How much do ICSE Computer Applications group classes cost?** The monthly fee for the mini batch is shown on this page, next to the personalised one to one fee. Billing is monthly, there is no admission fee, and the first class is a free demo, so you can see the batch at work before paying anything.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-small-batch-classes*
