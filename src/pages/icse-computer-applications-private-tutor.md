---
title: "ICSE Computer Applications Private Tutor, 1-on-1 Online"
description: "An ICSE Computer Applications private tutor, live online: how a 1-on-1 Java session runs, how BlueJ code is checked on screen, and when it beats a batch."
canonical: https://learn.modernagecoders.com/icse-computer-applications-private-tutor
source: src/pages/icse-computer-applications-private-tutor.html
updated: 2026-11-06
---

> An ICSE Computer Applications private tutor teaches Class 10 Java with BlueJ to one student at a time, at a time the family chooses. The value of one to one is attention: the tutor reads every line as the student types it on a shared screen, finds the exact step where a program goes wrong, and builds the plan around that student's own gaps instead of a batch's pace. Modern Age Coders offers this as personalised one to one, live online in India and abroad, alongside a Tuesday 5:30 PM and Wednesday 8:00 PM IST mini batch of up to six students for families in India.

## What happens in a one to one ICSE Computer Applications session?

A one to one session moves through six steps: last week's work is checked, one gap is taught, the student writes a program while the tutor watches the screen, the program is traced, and new set work is agreed. The student does most of the typing; the tutor does most of the listening.

-
**The set work, opened first** The student shares the BlueJ window with last week's set program. The tutor asks for it to be compiled and run in front of them, never pasted, so the work shown is the work done.

-
**One line from the error list** Every student has a running list of the mistakes they make. The session picks the top one, for example "forgets that substring stops before the end index", and fixes it with three tiny examples.

-
**One idea taught on the student's own code** New material is introduced as a change to a program the student already wrote, so a wrapper class or a 2D array arrives as a small step, not a fresh chapter.

-
**A program written from a blank class** The student writes a Section B style program while the tutor watches the shared screen and stays quiet until the student is stuck for long enough to need a question, not an answer.

-
**Traced by hand, then run** Before running, the student predicts the output with a trace table. If the run disagrees, the trace shows the line where the program left the plan.

-
**Set work and the next gap, agreed aloud** The session ends with the student saying what the set program must do and what will be checked next time. Saying it is how the tutor knows it was understood.

### How BlueJ work is checked on a shared screen

- The student types, the tutor reads. A tutor who types for the child has written the program, not taught it.

- Compile errors are read aloud. The student reads BlueJ's message and points at the line it names before anyone suggests a fix.

- Wrong output means a trace, not a guess. Changing lines at random until the answer looks right is the habit the session exists to break.

- Every program gets its variable description. Written at the end, every time, because the paper asks for it and a tired student leaves it out.

The BlueJ side of the subject, from creating a class to running main with input, is on [ICSE Class 10 BlueJ Java coaching](/icse-class-10-bluej-java-coaching).

## 1 on 1 Java tutor ICSE: a real bug, traced and fixed in one session

The student's task was to count the words in a sentence that begin with a vowel. The program compiled, ran, and gave 4 when the answer is 5. A batch might move on with a corrected answer on the board; one to one, the student finds the cause.

```
public class VowelWordsBuggy {
    static boolean isVowel(char c) {
        return "AEIOU".indexOf(c) >= 0;
    }
    public static void main(String args[]) {
        String s = "an old ICSE paper is easy".toUpperCase();
        int count = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == ' ' && isVowel(s.charAt(i + 1)))
                count++;
        }
        System.out.println("Words starting with a vowel: " + count);
    }
}

// Output: Words starting with a vowel: 4
```

```
public class VowelWords {
    static boolean isVowel(char c) {
        return "AEIOU".indexOf(c) >= 0;
    }
    public static void main(String args[]) {
        String s = " " + "an old ICSE paper is easy".toUpperCase();
        int count = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == ' ' && isVowel(s.charAt(i + 1)))
                count++;
        }
        System.out.println("Words starting with a vowel: " + count);
    }
}

// Output: Words starting with a vowel: 5
```

### The trace the student wrote

- Index of the space | Next character | Vowel? | count

- none before index 0 | A (of AN) | never tested | 0

- 2 | O | yes | 1

- 6 | I | yes | 2

- 11 | P | no | 2

- 17 | I | yes | 3

- 20 | E | yes | 4

The first row is the lesson. Once the student wrote "never tested" in the trace, the fix was theirs, not the tutor's. The same edge appears in every word program: the first word, the last word, and two spaces in a row. That last case goes on the student's error list for next week. More programs of this family are on [ICSE Class 10 String programs](/icse-class-10-string-programs), and fragments that will not compile at all are on [Java error finding questions](/icse-class-10-java-error-finding-questions).

## Personal computer tuition for Class 10 ICSE: how the one to one plan is built

The plan starts from a diagnosis in the first session: a few Section A items, one short program from a blank class, and a look at the school notebook. From that, the tutor writes down where the student is and what to do first. The table shows how different starting points lead to different plans.

- What the diagnosis shows | First weeks of the plan | Checked by

- Knows the theory, freezes at a blank screen | Programs grown from a three-line skeleton the student writes first, then fewer hints each week | A program started without help

- Class 9 basics shaky: loops, conditions, input | Two to three weeks of Class 9 repair before Class 10 chapters, because every Section B answer stands on them | A menu program with loops written cleanly

- Writes long programs that nearly work | Trace tables before every run, and edge cases written down first | Fewer runs needed to get it right

- Loses easy Section A marks | Short timed trace sets at the start of each session, sorted by the trap that caught them | Accuracy on a mixed Section A set

- Behind on the lab file | Each session's program written up as a lab assignment with its variable description | The count of finished assignments

- Already strong, aiming for every mark | Harder variants, full mock papers, presentation and time on paper | Marks lost per mock, shrinking

The plan is rewritten whenever the checks say so. A student who clears the Class 9 repair in one week moves on in one week; one who needs four gets four. That flexibility is what one to one is for. Gaps from Class 9 are listed chapter by chapter on [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10), and the lab file on [the project and internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## When does one to one beat a batch, and when does it not?

One to one beats a batch when the student's needs are far from the group's pace or the batch times do not fit. A small batch is often the better choice for a student who is roughly on track and works harder with peers beside them.

- Situation | Better fit | Why

- Weeks of school missed through illness or a move | One to one | The missing chapters have to be taught, not revised, at the student's speed

- The family lives outside India | One to one | The mini batch is for India; abroad the course runs as two private classes a week

- Tuesday 5:30 PM or Wednesday 8:00 PM IST clashes with school or sport | One to one | The slot is agreed with the family and moved around tests

- Very quiet, rarely asks a question in a group | One to one, at least at first | There is no one else to wait for, so silence is noticed at once

- On track, wants steady practice and pace | Mini batch | Two classes a week, other students' mistakes to learn from, a fixed rhythm

- Strong, competitive, likes to be measured | Mini batch | Timed sets against peers push speed in a way a single student rarely feels

### One to one, then the batch
A student with gaps can start privately and move into the mini batch once the gaps close, keeping the same teachers and syllabus.

### The batch, plus a few private sessions
A batch student stuck on one chapter, often strings or class design, can add short one to one help for that chapter alone.

### One to one throughout
For students abroad and for timetables that never match the batch evenings, the whole course runs privately.

What the batch offers in detail is on [ICSE Computer Applications group classes](/icse-computer-applications-small-batch-classes), and the short revision plan before the paper on [the ICSE Computer Applications crash course](/icse-computer-applications-crash-course).

## Choosing an ICSE Computer Applications private tutor: home tutor for ICSE computer, online tutor or batch

Judge a tutor on what happens to your child's code, not on a profile. A home tutor without a computer at the table, or an online tutor who only shares slides, cannot check the 60 marks of Section B or the lab file.

- Option | Sees code as it is typed | Timing | Travel | Lab file help

- Home tutor who visits | Only if a laptop with BlueJ is used in the session | The tutor's free slots | The tutor travels | Varies with the tutor

- Our personalised one to one, online | Yes, on a shared BlueJ screen | Set with the family | None | Each program written up as an assignment

- Our mini batch, up to six, India | Yes, the teacher reads each screen in turn | Tuesday 5:30 PM and Wednesday 8:00 PM IST | None | Built week by week in the lab session

- A large online group class | Rarely, with many students on the call | Fixed | None | Usually left to the school

- Recorded videos | Never | Any time | None | None

### Six questions to ask any ICSE Computer Applications tutor

- Will my child type the programs, or will you?

- Do you write programs in BlueJ during the session, or only explain them?

- How do you check the set work: by reading it, or by watching it compile and run?

- Which chapters are out of the 2027 syllabus? (Recursion, for example, is not examined in 2027.)

- Will you mark a full two-hour mock paper before the board exam?

- Can my child try one session before we commit?

If you are weighing a tutor near home against an online class, [ICSE computer tuition near me](/icse-computer-tuition-near-me) answers that question directly.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The full Class 9 and 10 course that a one to one plan reorders around one student, with the same mocks and lab work as the batch.
- [Python for Teens](/courses/python-complete-masterclass-teens): For the student who finds that one to one coding suits them and wants a second language after the board paper.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who keeps asking why binary search is faster, and wants to work through it with a mentor.

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

**How do I find a good private tutor for ICSE Computer Applications?** Ask to see a session, not a profile. A good tutor has your child type Java in BlueJ while they read the screen, checks set work by watching it compile and run, knows that recursion is not in the 2027 syllabus, and will mark a full mock paper. A free first session is the easiest way to judge all four.

**Is one to one better than group tuition for ICSE Java?** It depends on the student. One to one is better for a student with gaps from missed school, a timetable that clashes with fixed classes, or one who stays silent in groups. A small batch is often better for a student who is on track and works harder beside peers. Many students mix the two.

**Can an online tutor check my child's BlueJ programs?** Yes. The student shares the BlueJ window, compiles and runs the program while the tutor watches, and reads any error message aloud. The tutor sees every keystroke, which is more than a home tutor sees if the session happens on paper.

**Is a home tutor or an online tutor better for ICSE Computer Applications?** What matters is whether the tutor watches your child write and run Java. A home tutor who teaches from the textbook on paper cannot check Section B programs properly. An online tutor on a shared BlueJ screen can, and there is no travel time for anyone.

**How often should my child have one to one classes?** In India our personalised plan is one private class a week at your time, with set work in between; abroad it is two private classes a week. Students in the mini batch get two group classes a week instead. The demo is a good place to ask which rhythm suits your child.

**What happens in the first one to one session?** A short diagnosis: a few Section A questions, one small program written from a blank class, and a look at the school notebook. From that the tutor writes a plan of the first weeks and the checks that will show progress, and talks it through with the family.

**Can a private tutor help with the ICSE lab file?** Yes, by teaching the programs, not by writing them. Each session's program is written by the student, run, and then written up as a lab assignment with its variable description, so the file grows from work the student can explain to the external examiner.

**Do you offer a 1 on 1 Java tutor for ICSE students outside India?** Yes. Outside India the ICSE Computer Applications course is taught one to one only, as two private classes a week, at an after-school time in your own time zone. The tutors and the 2027 syllabus are the same as in India.

**Will the same tutor teach my child every session?** The plan, the error list and the set work stay with the student from session to session, so whoever teaches knows exactly where the last session ended. If the family has a strong preference about continuity, say so after the demo.

**How much does a private ICSE Computer Applications tutor cost?** The monthly fee for personalised one to one is shown on this page in your own currency, next to the mini batch fee. Billing is monthly with no admission fee, so a family can switch between one to one and the batch from one month to the next. The first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-private-tutor*
