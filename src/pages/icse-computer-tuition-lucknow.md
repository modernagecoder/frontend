---
title: "ICSE Computer Tuition Lucknow: Live Online Java for Class 10"
description: "ICSE computer tuition for Lucknow students, live online: Class 10 Java in BlueJ, an array sort traced pass by pass, lab file help, batch or one to one."
canonical: https://learn.modernagecoders.com/icse-computer-tuition-lucknow
source: src/pages/icse-computer-tuition-lucknow.html
updated: 2026-11-06
---

> Modern Age Coders teaches ICSE computer tuition to Lucknow students live online; there is no centre in Lucknow. ICSE Class 10 students meet in groups of six or fewer on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST and prepare for the 2027 Computer Applications paper in Java with BlueJ: theory and output questions for Section A, a complete Section B program each week, preparation for the lab assignments schools assess internally, and timed full papers before the board exam. Families who need different hours choose personalised one to one classes at a time they set. The first class is a free demo.

## What does online ICSE computer tuition from Lucknow actually look like?

A teacher, a small group and BlueJ on a shared screen. Every student writes code in every class, and nothing is accepted until it has been run.

Parents who have only seen recorded lectures are often surprised by a live class. Nobody watches a video. The teacher talks to each student by name, asks them to share their screen, and reads their code as they type. Here is how a Wednesday program class unfolds, stage by stage.

-
**Last week's loose end** The class opens with whatever went wrong in the home practice, solved on screen. If three students hit the same error, it becomes the first lesson.

-
**The question, read like an examiner** The Section B question is read aloud and underlined: what must be input, what must be printed, which word decides the method. Students write a five-line plan before touching the keyboard.

-
**Code, typed by the student** Each student types their own version in BlueJ. The teacher moves from screen to screen, asking why a loop starts where it does rather than fixing it for them.

-
**Run it, then try to break it** Programs are run with the given data and then with input chosen to expose mistakes: a tie, a missing value, an unexpected case.

-
**Marked against the scheme** The finished answer is marked the way a board examiner would, including the variable description, so each student knows which marks they kept and which they gave away.

That is the whole difference from sitting in a large room with a whiteboard: no student can stay invisible for a term. More on the format is on [ICSE Class 10 BlueJ Java coaching](/icse-class-10-bluej-java-coaching).

## An arrays program from the Lucknow batch: sort a rank list, then search it

Sorting and searching on single dimensional arrays is one of the most dependable Section B shapes. This original program keeps names and marks in two parallel arrays, sorts them with selection sort, prints a rank list, and finds one student by name.

The question. Accept the names and marks of six students into two arrays. Using selection sort, arrange them in descending order of marks, moving each name with its mark. Print the rank list. Then accept a name and print that student's rank and marks, ignoring case, or a message if the name is not present.

```
import java.util.Scanner;

class RankList {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] name = new String[6];
        int[] marks = new int[6];
        System.out.println("Enter 6 names with marks out of 100:");
        for (int i = 0; i < 6; i++) {
            name[i] = sc.next();
            marks[i] = sc.nextInt();
        }
        // selection sort, highest marks first; swap both arrays together
        for (int i = 0; i < 5; i++) {
            int big = i;
            for (int j = i + 1; j < 6; j++) {
                if (marks[j] > marks[big])
                    big = j;
            }
            int tm = marks[i];
            marks[i] = marks[big];
            marks[big] = tm;
            String tn = name[i];
            name[i] = name[big];
            name[big] = tn;
        }
        System.out.println("Rank	Name	Marks");
        for (int i = 0; i < 6; i++)
            System.out.println((i + 1) + "	" + name[i] + "	" + marks[i]);
        System.out.print("Name to search: ");
        String key = sc.next();
        int pos = -1;
        for (int i = 0; i < 6; i++) {
            if (name[i].equalsIgnoreCase(key)) {
                pos = i;
                break;
            }
        }
        if (pos == -1)
            System.out.println(key + " is not in the list");
        else
            System.out.println(name[pos] + " is at rank " + (pos + 1)
                               + " with " + marks[pos]);
    }
}
```

```
Enter 6 names with marks out of 100:
Aman 71
Zoya 88
Kabir 64
Ira 92
Ved 88
Tara 79
Rank	Name	Marks
1	Ira	92
2	Zoya	88
3	Ved	88
4	Tara	79
5	Aman	71
6	Kabir	64
Name to search: kabir
Kabir is at rank 6 with 64

// second run, same six students:
Name to search: Neel
Neel is not in the list
```

### Selection sort, pass by pass

- Pass (i) | Largest from i onwards | Swap | Marks after the pass

- start | none | none | 71, 88, 64, 92, 88, 79

- 0 | Ira 92 at index 3 | index 0 with 3 | 92, 88, 64, 71, 88, 79

- 1 | Zoya 88 at index 1 | with itself | 92, 88, 64, 71, 88, 79

- 2 | Ved 88 at index 4 | index 2 with 4 | 92, 88, 88, 71, 64, 79

- 3 | Tara 79 at index 5 | index 3 with 5 | 92, 88, 88, 79, 64, 71

- 4 | Aman 71 at index 5 | index 4 with 5 | 92, 88, 88, 79, 71, 64

### Why examiners like this question, and where students slip

- Swapping only one array. Sorting the marks but not the names leaves every name attached to the wrong mark. The output looks plausible and is entirely wrong.

- Outer loop to n - 1. Five passes sort six items; the last one is already in place. Running to 6 does no harm but shows the student does not know why.

- Comparing Strings with ==. The search must use equalsIgnoreCase, or "kabir" will never match "Kabir".

- Forgetting the not-found case. The flag value -1 is what lets the program report a missing name honestly.

- Binary search on unsorted data. Binary search needs the array sorted by the key being searched. Here the list is sorted by marks, not names, so linear search is the right choice.

Bubble sort, binary search and more variations are on [ICSE Class 10 sorting and searching programs](/icse-class-10-sorting-and-searching-programs).

## A sample week in the arrays unit for an ICSE Class 10 student in Lucknow

Two live evenings, two short sessions alone, and the school timetable left exactly as it is. Arrays come after loops and methods, and they reward steady practice more than any long night before a test.

### Tuesday, 5:30 PM IST, live
How an array is declared, created and filled; why indexes run from 0 to length minus 1; default values. Then a dozen quick questions: what does this loop print, which line throws an error, what is a.length here.

### Wednesday, 8:00 PM IST, live
The RankList program above, planned on paper and built in BlueJ. Each student traces one pass of the sort aloud before the program is run, then the answer is marked.

### Thursday, home, about 30 minutes
Rewrite RankList without notes, but sort in ascending order of names with compareTo. Run it and note anything that surprised you.

### Weekend, home, about 40 minutes
A worksheet: trace two passes of bubble sort by hand, find the error in a binary search, and write the variable description for Thursday's program.

### At school, as scheduled
Computer periods and lab assignments go on exactly as the school plans them. The tuition gives the student the understanding to do that work alone.

### Next Tuesday, first minutes
Weekend doubts are cleared first. Then the group moves on to double dimensional arrays, which the 2027 syllabus includes.

Double dimensional arrays, with row, column and diagonal programs, are covered on [ICSE Class 10 2D array programs](/icse-class-10-2d-array-programs).

## Preparing for the internal assessment: the school's assignments, the student's work, our coaching

The school chooses the assignments and holds the assessment. The student writes every program. Our part is the preparation in between, above all for the moment the external examiner asks the student to run and explain their work.

ICSE Computer Applications gives the internal assessment the same 100 marks as the written paper. It rests on at least twenty laboratory assignments done across the year. The subject teacher awards 50 marks and an external examiner awards the other 50, each using the same four headings: execution or output is the heaviest at 20, then class design, variable description, and coding and documentation at 10 each.

Execution marks are the easiest to lose by surprise. A program that worked at home can fail in front of an examiner on input nobody tried. So we teach students to write a small test plan for each of their own assignments. Here is what one looks like for the RankList program; the student makes their own for the school's questions.

- Test | Input chosen | What should happen | Why it matters

- Normal data | Six different marks | A clean descending list | Shows the sort works at all

- A tie | Two students on 88 | Both listed, side by side, neither lost | Exposes a careless >= or a broken swap

- Already sorted | Marks typed highest first | The same order back | Proves the sort does no damage

- Search, mixed case | "kabir" | Found at the right rank | Checks equalsIgnoreCase

- Search, absent | "Neel" | A clear not-found message | Checks the -1 flag

Alongside the test plan, students practise explaining their class design and variable choices in a minute or two, which is what an examiner tends to ask. What we will not do is write any part of an assignment for submission, or rewrite the school's question. The scheme in detail is on [ICSE Computer Applications project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), and likely oral questions are on [ICSE Computer Applications viva questions](/icse-computer-applications-viva-questions).

## Computer applications tutor in Lucknow, or no tuition? Signs that help is needed

Not every ICSE student needs a tutor for Computer Applications. A student who writes and runs programs confidently and scores well in school tests may only need past-style papers before the board exam. These signs suggest otherwise.

- What you notice | What it usually means | What helps

- Programs are copied from a guide into the notebook | The student can read Java but cannot yet write it | Writing one program a week from a blank screen, with feedback

- Good theory marks, weak Section B marks | Concepts are known but not combined into whole programs | The weekly Section B program, marked to the scheme

- Programs "work" but marks still drop | Missing variable descriptions, comments or edge cases | Marking that counts those parts, every time

- The lab file is weeks behind | Assignments feel too hard to start | Concepts taught first so the student can attempt them alone

- Panic about the two-hour paper | No practice under time | Full timed papers through the winter

Lucknow families also weigh which board suits a child, and some students switch between ICSE, CBSE and the UP Board across their school years. We teach only the CISCE syllabus. If you want to confirm that a school is ICSE, check CISCE's own list of affiliated schools rather than a directory: private directories give different counts, which is also why this page quotes none. For a full plan to the exam, read [ICSE Computer Applications board exam preparation](/icse-class-10-computer-applications-board-exam-preparation).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications taught live in a group of six at most, with one complete Section B program every week.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students who choose Computer Science in ISC and want their Class 10 Java to keep paying off.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): A course for after the board exam, for a student who wants to see how sorting, searching and data lead into machine learning.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [Python for Teens](/courses/python-complete-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**Is there an ICSE computer tuition centre of yours in Lucknow?** No. Modern Age Coders runs no centre in Lucknow and sends no tutors to homes there. Classes are entirely live online: a teacher with six students at most, each sharing their BlueJ screen. If a teacher in the room is essential for your child, a local tutor is the honest recommendation.

**What are the class timings for Lucknow students?** The group meets on Tuesday at 5:30 PM and Wednesday at 8:00 PM, Indian Standard Time, which is Lucknow time. Tuesday covers concepts and short Section A questions; Wednesday is one long Section B program. Private classes can be booked at other hours.

**How do I find a good computer applications tutor in Lucknow?** Ask four things. Does the student write a full program every week? Is every program run, not only checked on paper? Is the variable description marked? Will the tutor help with the school lab assignments without writing them? Any tutor, including us, should answer yes to all four.

**Do you teach the UP Board computer syllabus?** No. These classes cover only the CISCE ICSE Class 10 Computer Applications syllabus for the 2027 examination, in Java with BlueJ. UP Board and CBSE students study different syllabi, so this class would not match their exams. A sibling on another board can ask us on WhatsApp for the course that fits.

**Which sorting and searching methods are in the ICSE Class 10 syllabus?** Students are expected to know bubble sort and selection sort, and linear search and binary search, on single dimensional arrays. Binary search only works on an array already sorted by the value being searched, which is a common question in its own right.

**How do you help with ICSE computer lab assignments?** We teach the concept behind each school question with a different example, help the student build a test plan for their own program, and rehearse explaining it as an external examiner might ask. The school sets and marks the assignments, and the student writes every line.

**What is the fee for online ICSE computer tuition?** The monthly fees for the group and for private classes are shown on this page in your currency. Payment is monthly, there is no joining fee, and the first class is a free demo so you can see the teaching first.

**Is online tuition enough for ICSE Computer Applications?** For most students, yes, because Computer Applications is practised on a computer. In a live class the teacher sees each student type and run code and corrects errors as they appear. A student who cannot focus on a screen may still do better with a tutor in person.

**When should a Class 10 student start tuition?** The earlier the better for the lab file, which is built across the whole year. Starting at the beginning of Class 10 leaves room for every unit and full papers. A later start still works, with a plan that puts the highest-mark program families first.

**What does the free demo involve?** A live class in which your child writes and runs a small Java program, explains it, and gets direct feedback. Afterwards you get a plain view of strengths and gaps, and a recommendation between the group and private classes. Nothing is charged for the demo and there is no obligation to continue.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-tuition-lucknow*
