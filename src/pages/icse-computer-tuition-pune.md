---
title: "ICSE Computer Tuition Pune: Online Class 10 Java Classes"
description: "ICSE computer tuition for Pune students, live online: Class 10 Java in BlueJ, a 2D array program solved, a lab file pace plan, group or one to one."
canonical: https://learn.modernagecoders.com/icse-computer-tuition-pune
source: src/pages/icse-computer-tuition-pune.html
updated: 2026-11-06
---

> For Pune students, ICSE computer tuition at Modern Age Coders is an online, live, teacher-led class; the company has no centre in the city. ICSE Class 10 students log in to a group of at most six on Tuesdays (5:30 PM IST) and Wednesdays (8:00 PM IST), or take personalised one to one classes at a time the family chooses. The course follows the 2027 Computer Applications syllabus in Java with BlueJ: Section A theory and outputs, one complete Section B program each week, a paced plan for the lab assignments the school assesses internally, and full timed papers before the board exam. The first class is a free demo.

## How does online ICSE computer tuition work for a Pune student?

It starts with a message and a free demo, and within a week your child is writing programs in a live group. There is nothing to travel to, and nothing is paid until the demo has shown whether the format suits.

-
**You get in touch** Through the form on this page or WhatsApp. Tell us the school year, roughly where your child stands in Computer Applications, and which evenings are already taken.

-
**The free demo** Your child joins a live class and writes a small program in BlueJ while the teacher watches. This shows us more than any form: how they plan, how they type, what they do when it fails.

-
**An honest recommendation** Group or private, and where to begin. A student who is on pace with school usually joins the group at its current topic. A student with gaps from Class 9 may need a few private classes first.

-
**Setting up at home** A laptop or desktop with BlueJ installed, a stable connection and a notebook. A phone is not enough, because the student must type and run real programs.

-
**The first full week** A Tuesday class on the current topic, a Wednesday program built and marked, and two short tasks at home. By the end, you can see the rhythm the rest of the year will follow.

The whole course, from Class 9 revision to mock papers, is laid out on [the main ICSE Class 10 Java classes page](/icse-class-10-java-classes-online). A student shaky on Class 9 basics should also look at [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

## A double dimensional array program, worked for the Pune group

Double dimensional arrays are part of the 2027 syllabus and suit Section B well: nested loops, indexes and a little arithmetic in one question. This original program reads a 4 by 4 grid, prints each row with its sum, adds both diagonals and finds the largest number with its position.

The question. Accept 16 integers into a 4 &times; 4 array. Print the array in matrix form with the sum of each row shown beside it. Print the sum of the left diagonal, the sum of the right diagonal, and the largest element together with its row and column, counting from 1.

```
import java.util.Scanner;

class GridSums {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] m = new int[4][4];
        System.out.println("Enter 16 integers, row by row:");
        for (int r = 0; r < 4; r++)
            for (int c = 0; c < 4; c++)
                m[r][c] = sc.nextInt();
        int left = 0, right = 0, max = m[0][0], maxR = 0, maxC = 0;
        for (int r = 0; r < 4; r++) {
            int rowSum = 0;
            for (int c = 0; c < 4; c++) {
                System.out.print(m[r][c] + "	");
                rowSum += m[r][c];
                if (m[r][c] > max) {
                    max = m[r][c];
                    maxR = r;
                    maxC = c;
                }
            }
            System.out.println("| " + rowSum);
            left += m[r][r];
            right += m[r][3 - r];
        }
        System.out.println("Left diagonal sum: " + left);
        System.out.println("Right diagonal sum: " + right);
        System.out.println("Largest: " + max + " at row " + (maxR + 1)
                           + ", column " + (maxC + 1));
    }
}
```

```
Enter 16 integers, row by row:
7 2 9 4
3 12 5 8
6 1 11 10
15 4 2 3
7	2	9	4	| 22
3	12	5	8	| 28
6	1	11	10	| 28
15	4	2	3	| 24
Left diagonal sum: 33
Right diagonal sum: 25
Largest: 15 at row 4, column 1
```

### How the diagonal indexes work

- Row r | Left diagonal m[r][r] | Value | Right diagonal m[r][3 - r] | Value

- 0 | m[0][0] | 7 | m[0][3] | 4

- 1 | m[1][1] | 12 | m[1][2] | 5

- 2 | m[2][2] | 11 | m[2][1] | 1

- 3 | m[3][3] | 3 | m[3][0] | 15

- Sum | 33 |  | 25

### Mistakes that cost marks on grid programs

- Diagonals inside the inner loop. Adding m[r][r] inside the column loop counts each diagonal value four times. It belongs once per row, in the outer loop.

- Right diagonal written as m[r][4 - r]. With indexes 0 to 3, the partner of row r is column 3 - r. Using 4 runs past the end and throws an exception.

- Starting max at 0. If every number were negative, 0 would wrongly win. Starting from m[0][0] is always safe.

- Printing positions from 0. The question asks for row and column counted from 1, so the answer adds 1 when printing, not when storing.

- Reset in the wrong place. rowSum must go back to 0 at the start of every row, or each row's sum includes the rows above it.

Column sums, transposes and more grid programs are on [ICSE Class 10 2D array programs](/icse-class-10-2d-array-programs).

## A sample week of ICSE Class 10 Java classes for a Pune student

This week pairs double dimensional arrays with wrapper classes, two topics that sit side by side in the 2027 syllabus. Each task has a clear finish line, so a parent can see at a glance whether it is done.

- Day | Task | Done when

- Tuesday, 5:30 PM IST (live) | Declaring and filling a 2D array; rows, columns and m.length against m[0].length. Then wrapper classes: Integer.parseInt, Character.isDigit and friends, through quick output questions. | Fifteen short answers written and checked in class

- Wednesday, 8:00 PM IST (live) | GridSums, built step by step: input loop first, then row sums, then diagonals, then the maximum. Each stage run before the next is added. | The program runs and is marked against the scheme

- Thursday (home, about 30 minutes) | Add column sums below the grid, using the same array. | Output shows four column totals that add up to the same grand total as the rows

- Weekend (home, about 40 minutes) | Worksheet: three wrapper-class outputs, one 2D trace by hand, and a variable description for GridSums. | Answers ready to discuss on Tuesday

- School days | The school's computer periods and any assignment set there. | As the school asks; we do not change it

The Thursday task has a built-in check: row totals and column totals must agree, so the student knows on their own whether the program is right. Wrapper classes in full are on [ICSE Class 10 wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

## Pacing twenty lab assignments across the year, alongside your school

CISCE asks for at least twenty laboratory assignments for the internal assessment, worth 100 marks. Your school decides which ones and when. Our job is to stop them piling up in the winter, when board papers need the time.

The internal assessment is marked half by the subject teacher and half by an external examiner, 50 each. Each examiner gives up to 20 for a program that executes with correct output, and up to 10 apiece for the design of the class, the table describing its variables, and the quality of its code and comments. All four improve when assignments are written steadily rather than in a rush, because a rushed program is usually the one without a description table or comments.

- Part of the year | A sensible running total | What tuition does in that stretch

- First term | About 6 to 8 assignments | Teaches methods, constructors and classes in time for the school's early questions

- Before the half-yearly exams | About 10 to 12 | Covers arrays and sorting, the topics many school assignments use next

- Second term | About 16 to 18 | Strings and 2D arrays, with test plans for each program

- Before the board season | 20 or more, all documented | Rehearses explaining each program for the external examiner, then switches fully to timed papers

These totals are our suggestion for keeping the work spread out, not a CISCE rule, and your school's own deadlines always come first. Within that, we hold two firm lines: the student writes every assignment personally, and we never alter the school's questions or format. What we add is teaching, testing and rehearsal. The full scheme is on [the ICSE internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## Java tuition in Pune for ICSE: group class, private tutor or self-study

All three can work. The deciding question is how much feedback your child needs on their own code, and how often.

- Aspect | Self-study with books and past papers | Our live group of six | Private one to one

- Feedback on code | Only from the compiler and answer keys | Every week, from a teacher, in front of peers | Every class, on every line

- Pace | Entirely the student's | Set by the syllabus plan | Set around the student

- Timings | Any time | Tuesday and Wednesday evenings | Agreed with the family

- Lab file support | None beyond school | Concepts and test plans in class | Concepts, test plans and viva rehearsal one to one

- Who it suits | A disciplined student already scoring well | Most students roughly on pace with school | Students with gaps, crowded weeks or a full-marks target

Some Pune families also ask whether the class suits a Maharashtra SSC student. It does not: we teach only the CISCE ICSE Computer Applications syllabus. If you are not certain which board a school follows, CISCE's own list of affiliated schools is more reliable than a private directory. Students working alone should start with [ICSE Computer Applications previous year papers, solved](/icse-computer-applications-previous-year-papers-solved).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The live Class 9 and 10 course: Section A practice on Tuesdays, a full Section B program on Wednesdays, timed papers in the winter.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoyed arrays and sorting and wants to tackle real algorithm problems next.
- [Python for Teens](/courses/python-complete-masterclass-teens): A second programming language for the months after the boards, learnt quickly on top of solid Java habits.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**Do you have an ICSE computer class in Pune that we can attend in person?** No. Modern Age Coders has no centre in Pune and does not offer home tutoring there. All classes are live online, with a teacher and six students at most, each writing and running code in BlueJ. For face to face teaching, a local tutor is the right choice.

**What are the online ICSE Java class timings for Pune?** The group meets every Tuesday at 5:30 PM and every Wednesday at 8:00 PM IST, which is Pune time. Tuesday is for theory, outputs and short answers; Wednesday is for one full 15-mark program. Private classes can be arranged at other times.

**What equipment does my child need for online Java tuition?** A laptop or desktop with BlueJ installed, a stable internet connection and a notebook for planning and tracing. A phone or tablet is not enough, because the student must type, compile and run Java programs during every class. Headphones help in a busy home.

**Are double dimensional arrays in the ICSE 2027 syllabus?** Yes. Double dimensional arrays are part of the ICSE Class 10 Computer Applications syllabus for 2027, alongside single dimensional arrays. Typical questions ask for row or column sums, diagonal sums, the largest element or a transposed matrix, so nested loops must be secure first.

**Do you teach the Maharashtra SSC computer subject?** No. Our Pune students all sit the ICSE: the course follows the CISCE Computer Applications syllabus set for the 2027 Class 10 examination, taught in Java with BlueJ. Students on the Maharashtra state board or on CBSE follow different syllabi and would not be served by this class.

**How many lab assignments are needed for ICSE Computer Applications?** CISCE requires at least twenty laboratory assignments across the year for the internal assessment, which is worth 100 marks. Your school decides the questions and deadlines. Spreading them out, rather than finishing most in the winter, protects both the file and board preparation.

**Do you write the lab assignments for students?** No, never. The student writes every program they submit. We teach the concept behind a school question using a different example, help the student test their own program, and rehearse the explanations an examiner may ask for. That keeps the work honest and the marks safe.

**How much is ICSE computer tuition for Pune students?** Look at the course card near the top: it lists what one month of the group costs and what one month of private classes costs, converted to your currency. There is nothing to pay on joining, billing is monthly, and you pay nothing until after a free trial class. Compare any quote on what each class includes.

**Is self-study enough for ICSE Computer Applications?** For a disciplined student who already writes programs confidently and scores well, often yes, with past papers and timed practice. Tuition helps most when programs are copied rather than written, Section B marks lag theory marks, or the lab file is falling behind.

**What happens in the free demo for Pune students?** Your child sits in on a genuine lesson, builds a small BlueJ program from a blank screen, then talks the teacher through how it works. You then hear plainly what is strong, what needs work, and whether the group or a private class fits better.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-tuition-pune*
