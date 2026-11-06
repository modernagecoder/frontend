---
title: "ICSE Computer Tuition Kolkata: Live Online Java Classes"
description: "ICSE computer tuition for Kolkata students, live online: Class 10 Java with BlueJ, a mini batch of six, lab assignment help and one to one at your time."
canonical: https://learn.modernagecoders.com/icse-computer-tuition-kolkata
source: src/pages/icse-computer-tuition-kolkata.html
updated: 2026-11-06
---

> ICSE computer tuition for Kolkata students at Modern Age Coders is taught live online, not at a local centre. A teacher takes a mini batch of up to six ICSE Class 10 students on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, covering Computer Applications in Java with BlueJ for the 2027 paper: Section A theory and outputs, Section B programs written and checked against the marking scheme, help with the school's internal assessment lab assignments, and timed mock papers in the winter. Families with full evenings can take personalised one to one classes at a time they choose. The first class is a free demo.

## Is online ICSE computer tuition in Kolkata as good as a local tutor?

For Computer Applications it usually is, because the subject happens on a screen anyway. The real comparison is not online against offline but what each option lets the teacher see: your child's code, running, while they write it.

Kolkata families normally weigh three choices: a home tutor who comes to the flat, a coaching centre in the neighbourhood, or a live online class. We run only the third, and there is no Modern Age Coders centre anywhere in Kolkata. That is a real limit for a family who wants a person at the kitchen table. Here is the trade, laid out fairly.

- What matters | Home tutor | Local coaching centre | Our live online class

- Getting there | Tutor travels to you | Student travels, often after school | Nobody travels; log in from home

- Who sees the code | One tutor, often reading it on paper | A teacher with many students at once | Teacher watches each screen share in BlueJ

- Group size | One | Varies, sometimes large | Up to six, or one to one

- Subject focus | Often one tutor for several subjects | Usually many subjects | ICSE Computer Applications only

- When a class is missed | Rescheduled, if possible | Usually lost | Catch-up agreed with the teacher

- How the fee works | Usually hourly or monthly, set by the tutor | Usually per term or per year | Monthly, no admission fee, shown on this page

A home tutor wins when a child genuinely cannot concentrate on a screen, or when a parent wants one person to cover Physics, Maths and Computers together. Online wins when what the student most needs is someone watching them build a Java program step by step, catching the missing semicolon or the wrong loop bound as it happens, rather than marking a printout a day later. For Computer Applications, that second need is the common one.

If you are unsure, the free demo settles it quickly: your child writes a short program with the teacher watching, and you see whether the format works before paying anything. Full details of the batch itself are on [the ICSE Class 10 Java classes page](/icse-class-10-java-classes-online).

## A sample week of ICSE Class 10 computer classes for a Kolkata student, online

Two live classes, two short practice sessions at home, and nothing that needs a bus or an auto. This is an ordinary week in the unit on classes and constructors, which most schools teach in the first half of Class 10.

- Day | What happens | Time it takes

- Tuesday | Live class at 5:30 PM IST. Theory: what a class is, instance variables, how a constructor differs from a method. Ten Section A questions on the topic, answered aloud and discussed. | One class

- Wednesday | Live class at 8:00 PM IST. One full Section B program (this week, the Innings class below) planned on paper, typed in BlueJ, run with test data and marked against the scheme. | One class

- Thursday | At home: type the Wednesday program again without looking, and fill in its variable description table. | About 30 minutes

- Friday or Saturday | A worksheet from the teacher: one constructor question, two outputs to predict, one short class to write. Anything that would not work is brought to the start of the next class. | About 40 minutes

- At school, whenever it falls | The school's own computer period and any lab assignment the teacher has set. We do not replace this; we make sure the student understands what they are submitting. | School timetable

The two class times are deliberately spread out. Tuesday's earlier slot is shorter on writing and longer on thinking, which suits a student who has just come home. Wednesday's later slot is the heavy coding session, after dinner, when there is no rush. If tuition for another subject already takes one of those evenings, personalised one to one classes can be set at a time that leaves the week intact.

Constructor questions on their own, with more practice, are on [ICSE Class 10 constructors questions](/icse-class-10-constructors-questions), and the wider unit is explained on [class as the basis of all computation](/icse-class-10-class-as-basis-of-computation).

## A Section B class program, worked in full: the Innings class

Section B of the ICSE Computer Applications paper offers six programs and the student answers any four, each worth 15 marks. One very common shape asks for a class with data members, a constructor and methods that calculate and display. Here is an original one we wrote for a Kolkata batch, with its real output.

The question. Define a class Innings with data members batter (String) and runs, balls, fours, sixes (int). Write a parameterised constructor; a method strikeRate() that returns runs per hundred balls rounded to two decimal places; a method boundaryRuns() that returns the runs scored in fours and sixes; a method boundaryShare() that returns those runs as a percentage of all runs, to one decimal place; and display(). In main, create two objects from input and print who scored faster.

```
import java.util.Scanner;

class Innings {
    String batter;
    int runs, balls, fours, sixes;

    Innings(String b, int r, int bl, int f, int s) {
        batter = b;
        runs = r;
        balls = bl;
        fours = f;
        sixes = s;
    }

    double strikeRate() {
        if (balls == 0)
            return 0.0;
        return Math.round(runs * 10000.0 / balls) / 100.0;
    }

    int boundaryRuns() {
        return fours * 4 + sixes * 6;
    }

    double boundaryShare() {
        if (runs == 0)
            return 0.0;
        return Math.round(boundaryRuns() * 1000.0 / runs) / 10.0;
    }

    void display() {
        System.out.println(batter + ": " + runs + " off " + balls);
        System.out.println("Strike rate: " + strikeRate());
        System.out.println("Runs in boundaries: " + boundaryRuns()
                           + " (" + boundaryShare() + "%)");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("First batter, runs, balls, fours, sixes: ");
        Innings a = new Innings(sc.next(), sc.nextInt(), sc.nextInt(),
                                sc.nextInt(), sc.nextInt());
        System.out.print("Second batter, runs, balls, fours, sixes: ");
        Innings b = new Innings(sc.next(), sc.nextInt(), sc.nextInt(),
                                sc.nextInt(), sc.nextInt());
        System.out.println();
        a.display();
        b.display();
        if (a.strikeRate() > b.strikeRate())
            System.out.println("Faster scorer: " + a.batter);
        else if (b.strikeRate() > a.strikeRate())
            System.out.println("Faster scorer: " + b.batter);
        else
            System.out.println("Same strike rate");
    }
}
```

```
First batter, runs, balls, fours, sixes: Riya 58 41 6 2
Second batter, runs, balls, fours, sixes: Arjun 73 62 9 1

Riya: 58 off 41
Strike rate: 141.46
Runs in boundaries: 36 (62.1%)
Arjun: 73 off 62
Strike rate: 117.74
Runs in boundaries: 42 (57.5%)
Faster scorer: Riya
```

### The variable description, written the way we teach it

- Name | Type | Purpose

- batter | String | Name of the player whose innings is stored

- runs, balls | int | Runs scored and balls faced, used for the strike rate

- fours, sixes | int | Boundary counts, used for boundary runs and share

- a, b | Innings | The two objects created in main from the input

- sc | Scanner | Reads the input from the keyboard

### Where marks are won and lost on a program like this

- Integer division. runs * 100 / balls with ints gives 141, not 141.46. Writing 10000.0 forces double arithmetic before the division happens.

- Rounding to places. Math.round(x * 100) / 100.0 is the standard two-place trick. Dividing by 100 instead of 100.0 silently throws the decimals away again.

- Constructor shape. No return type, same name as the class. Writing void Innings(...) turns it into an ordinary method, and the objects are never filled.

- Guarding zero. A batter who faced no balls must not crash the program. The examiner may not test it, but the habit costs one line.

- Calling, not repeating. boundaryShare() calls boundaryRuns() instead of redoing the arithmetic; examiners reward methods that use each other.

More programs in this family, all with output, are on [ICSE Class 10 Java programs practice](/icse-class-10-java-programs-practice).

## How we support internal assessment lab assignments alongside your school

Your school runs the internal assessment, sets the assignments and awards the marks. Our part is to make sure the student can write, explain and run every program they hand in.

The internal assessment in ICSE Computer Applications is worth 100 marks, as much as the written paper. CISCE asks for at least twenty laboratory assignments across the year. The marks are split between the subject teacher and an external examiner, 50 each, and each of them marks four things: class design (10), variable description (10), coding and documentation (10), and execution or output (20). The assignments themselves come from your child's school, in its own format and on its own dates.

-
**The school's assignment comes first** When a student brings an assignment from their Kolkata school, we read the question as set. We do not swap it for our own, change the school's format or add pages the teacher did not ask for.

-
**The concept is taught, not the answer** If the assignment needs a class with a constructor and the student is unsure, that idea is taught in class with a different example, like the Innings class above. The student then writes their own program for their own question.

-
**Class design gets a second look** Class design is the first of the four marking heads. Before any typing, the student explains which data members and methods their class needs and why. The teacher questions the plan, not the code.

-
**Run, then test the awkward cases** Execution carries the largest share, 20 of the 50 on each side. The student runs the program in BlueJ on screen with normal input and then with the cases most likely to break it, such as zero, a negative value or an empty word.

-
**Rehearse explaining it** The external examiner may ask the student about their own program. We ask the same kind of questions in class: why this loop, what this variable stores, what happens if the input changes.

We never write a lab assignment for a student to submit. That would cost them the understanding the examiner checks, and it is not honest to the school. The full CISCE scheme, with file ideas, is on [the ICSE project and internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## Java tuition Kolkata ICSE families ask about: fit, timings and what to check

The tuition suits an ICSE Class 10 student who wants Computer Applications taught as a subject in its own right, not squeezed into a general coaching evening. It does not suit a student on another board.

### ICSE only, not Madhyamik
West Bengal's own board exam, Madhyamik, has a different syllabus. Our batch follows CISCE's ICSE Computer Applications syllabus for 2027 and nothing else, so every student in the group is preparing for the same paper.

### One paper for the whole country
CISCE sets the same Computer Applications paper for ICSE candidates everywhere. A Kolkata school's internal tests vary, but the board paper does not: two hours, 40 marks in Section A, four of six programs in Section B.

### Evenings that already have a shape
Many Class 10 students already have school, other tuition and sport. The two batch slots are fixed and early enough not to run late; if they clash, one to one is set around the existing plan.

### Starting late in the year
A student who joins in November or December starts with a diagnostic and a revision plan, not from chapter one. The winter is used for full papers and the weakest program families.

### Questions to ask any tutor
Does the student write code every class, or only copy notes? Is each program run? Who checks the variable description? Will they help with the school's lab assignments without writing them? Ask us the same.

### Checking a school's board
Not sure whether a school is ICSE? CISCE's own website lists affiliated schools. We do not print a count of ICSE schools in Kolkata, because private directories disagree with each other.

For a sense of how the year is paced, read [ICSE Computer Applications board exam preparation](/icse-class-10-computer-applications-board-exam-preparation); for the paper itself, see [the 2027 exam date and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The Class 9 and 10 course behind this page: two live classes a week, Section B programs every week, mock papers in the winter.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students who keep Java into ISC Computer Science, where classes and objects get much deeper.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For a strong student who has finished the syllabus early and wants real problem solving beyond it.

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

**Do you have an ICSE computer tuition centre in Kolkata?** No. Modern Age Coders has no centre in Kolkata and does not send home tutors. Every class is live online with a teacher, a small group and BlueJ on a shared screen. Students join from home, so there is no travel. If you specifically need someone in person, a local tutor is the better choice.

**Is online Java tuition good enough for ICSE Class 10?** For Computer Applications it often works better than in person, because the subject is done on a computer. In our classes the teacher watches each student write and run code in BlueJ, catches errors as they happen and marks programs against the ICSE scheme. The free demo lets you judge for yourself before paying.

**What are the class timings for Kolkata students?** The mini batch meets on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, which are Kolkata's own times since India runs on one clock. If either slot clashes with school, sport or other tuition, personalised one to one classes can be set at a time the family chooses.

**How many students are in one batch?** At most six, and all of them are ICSE Class 10 students preparing for the same Computer Applications paper. The small number means every student's program is opened and run in class, not just the strongest student's. Nobody can sit quietly at the back for a whole term.

**Do you help with ICSE computer lab assignments and the project file?** Yes, alongside the school. The school sets the assignments and awards the internal marks. We teach the concepts the assignments need, check that the student can explain their own class design and variable description, and test their program in BlueJ. We never write assignments for students to submit.

**How much is ICSE computer tuition in Kolkata?** The monthly fee for the mini batch and for one to one is shown on this page in your own currency. Billing is monthly, there is no admission fee, and the first class is a free demo. Home tutors in any city set their own rates, so compare on what each class actually includes.

**Can my child join in the middle of Class 10?** Yes. A late joiner starts with a short diagnostic, then a plan that fills the gaps in order of marks: Section B program families first, then Section A theory, then full mock papers. Joining in the winter is workable, and the plan is shared with parents so everyone knows what each week is for.

**Do you teach ICSE Class 9 Computer Applications as well?** Yes. Class 9 lays the base for Class 10: data types, operators, input, conditions and loops. Students who start in Class 9 reach the Class 10 units with fewer gaps and more time for lab assignments. Class 10 programs lean on every one of those Class 9 ideas.

**Do you teach West Bengal board computer subjects?** No. This tuition covers only the CISCE ICSE Computer Applications syllabus in Java with BlueJ. Students on the West Bengal board or CBSE would be in the wrong class here. If a younger sibling is on another board, ask us on WhatsApp and we will point you to the right course.

**What happens in the free demo class?** Your child joins a real live session, writes a short Java program with the teacher watching, and gets feedback on it. Afterwards you hear plainly where they stand and whether the mini batch or one to one suits them better.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-tuition-kolkata*
