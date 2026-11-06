---
title: "ICSE Computer Tuition Mumbai: Live Java Classes, No Commute"
description: "ICSE computer tuition for Mumbai, live online with no commute: Class 10 Java in BlueJ, a menu-driven program solved, school lab work help, one to one too."
canonical: https://learn.modernagecoders.com/icse-computer-tuition-mumbai
source: src/pages/icse-computer-tuition-mumbai.html
updated: 2026-11-06
---

> Modern Age Coders offers ICSE computer tuition to Mumbai students live online, so there is no commute and no local centre. A group capped at six Class 10 ICSE students meets twice a week, at 5:30 PM IST on Tuesday and 8:00 PM IST on Wednesday, to prepare for the 2027 Computer Applications paper in Java with BlueJ: Section A theory and output questions, a full Section B program every week, guidance on the lab assignments schools set for internal assessment, and full papers against the clock. Students who cannot make those evenings take personalised one to one classes at a time the family picks.

## How much time does online ICSE computer tuition save a Mumbai family?

It saves every minute of travel to and from class, twice a week, for the whole board year. The exact amount depends on where you live and where the class would have been, so work it out with your own number.

We are not going to print a figure for Mumbai traffic. Journey times differ too much between, say, Dadar and Mira Road, and we would only be guessing. The arithmetic, though, is simple, and most families are surprised by the total.

- Step | Formula | Example, if one way takes 30 minutes

- Trips each week | 2 classes &times; 2 journeys | 4 journeys

- Travel each week | 4 &times; your one-way time | 120 minutes

- Travel over 16 weeks of the run-up to the boards | weekly time &times; 16 | 32 hours

Thirty-two hours is roughly sixteen two-hour mock papers. That is the honest case for online tuition in a city like Mumbai: the time comes back to the student, at the desk, when it is needed most. There are other gains too. Nobody waits outside a building in the rain, nobody comes home tired at nine, and a parent does not have to arrange a pick-up.

There is a real cost as well. Online means no one sits beside your child. If they drift off a screen easily, a home tutor may suit them better, and we would rather say that now than after the first month. The batch, its syllabus order and its mock calendar are described on [our ICSE Class 10 Java classes overview](/icse-class-10-java-classes-online).

## A menu-driven Section B program, solved and run four ways

Menu-driven programs ask the student to offer choices with a switch and do something different for each. They are a regular Section B shape because they test methods, loops, conditions and switch in one answer. This one is original, written for a Mumbai batch.

The question. Using a switch statement, write a menu-driven program. Choice 1 accepts a number and checks whether it is a Pronic number, the product of two consecutive integers (for example 132 = 11 &times; 12). Choice 2 accepts two limits and prints every Niven number between them, a number divisible by the sum of its digits, followed by how many there were. For any other choice, print an error message. Use a separate method for each check.

```
import java.util.Scanner;

class NumberMenu {
    static boolean isPronic(int n) {
        for (int k = 0; k * (k + 1) <= n; k++) {
            if (k * (k + 1) == n)
                return true;
        }
        return false;
    }

    static boolean isNiven(int n) {
        int sum = 0, t = n;
        while (t > 0) {
            sum += t % 10;
            t /= 10;
        }
        return sum > 0 && n % sum == 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Pronic number check");
        System.out.println("2. Niven numbers in a range");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();
        switch (choice) {
            case 1:
                System.out.print("Enter a number: ");
                int n = sc.nextInt();
                if (isPronic(n))
                    System.out.println(n + " is a Pronic number");
                else
                    System.out.println(n + " is not a Pronic number");
                break;
            case 2:
                System.out.print("Enter the lower and upper limits: ");
                int lo = sc.nextInt(), hi = sc.nextInt();
                int count = 0;
                for (int i = lo; i <= hi; i++) {
                    if (isNiven(i)) {
                        System.out.print(i + " ");
                        count++;
                    }
                }
                System.out.println();
                System.out.println("Count: " + count);
                break;
            default:
                System.out.println("Wrong choice");
        }
    }
}
```

```
1. Pronic number check
2. Niven numbers in a range
Enter your choice: 1
Enter a number: 132
132 is a Pronic number

Enter your choice: 1
Enter a number: 140
140 is not a Pronic number

Enter your choice: 2
Enter the lower and upper limits: 40 70
40 42 45 48 50 54 60 63 70
Count: 9

Enter your choice: 5
Wrong choice
```

### How 15 marks are usually earned on a program like this

- Part of the answer | What the examiner looks for | The usual slip

- The menu and switch | Every choice handled, each case ending in break, a default for wrong input | A missing break lets choice 1 fall into choice 2

- The Pronic check | A loop that stops once k(k + 1) passes n, returning a boolean | Looping to n every time, or printing inside the method instead of returning

- The Niven check | Digit sum through % 10 and / 10 on a copy of n | Destroying n while summing its digits, then dividing 0 by the sum

- The range loop | Both limits included, a running count | Writing < instead of <= and losing 70

- Variable description and comments | Each variable named with its type and job | Leaving it out because the code "is obvious"

Many more menu programs are on [ICSE Class 10 menu-driven programs](/icse-class-10-menu-driven-programs), and the full set of number families, from Armstrong to Spy, is on [special number programs in Java](/icse-special-number-programs-java).

## One ordinary week of ICSE Class 10 Computer Applications, studied online from Mumbai

About three hours of computer work in total: two live classes and two short home sessions. This week sits in the methods unit, where menu-driven programs like the one above are built.

- When | Live or at home | Focus | What exists by the end

- Tuesday, 5:30 PM IST | Live, with the group | Writing a method: return type, parameters, the difference between returning a value and printing one. Short Section A questions on method headers. | Notes plus a page of headers written by hand

- Wednesday, 8:00 PM IST | Live, with the group | NumberMenu built in BlueJ, piece by piece: each method tested on its own first, then joined to the switch. | A running program and its variable table

- Thursday or Friday | At home, about 30 minutes | Add a third menu choice: check whether a number is a perfect square without Math.sqrt. | An extended program, run with three inputs

- Weekend | At home, about 45 minutes | A worksheet: two method headers to correct, two outputs to predict, one short overloading question. | Answers to bring on Tuesday

Nothing in that week involves leaving the house, which matters in a city where an evening out can easily cost two hours. The school's own computer lessons and lab periods carry on as usual; the tuition sits next to them, not in place of them. The methods unit itself, overloading included, is explained on [user-defined methods and overloading for ICSE Class 10](/icse-class-10-user-defined-methods-overloading).

## Internal assessment lab assignments: support that sits beside the school's own process

Your school owns the internal assessment. It sets at least twenty assignments over the year, fixes the dates, and its teacher and an external examiner each award 50 of the 100 marks. We prepare the student to do that work well and to explain it.

Each examiner marks four headings: execution or output carries 20, and class design, variable description, and coding with documentation carry 10 apiece. Of these, the one students most often throw away is documentation. A program that runs perfectly can still look careless on paper. So in our classes, every program is finished with the same short documentation habit before it counts as done.

```
/*
 * Program : menu for Pronic and Niven numbers
 * Input   : a menu choice, then a number or two limits
 * Output  : the result of the chosen check
 * Method  : isPronic tries k(k+1) for k = 0, 1, 2 ...
 *           isNiven divides n by the sum of its digits
 */
```

### What we do, and what we leave alone

- We do teach the topic behind a school question, using a different example, until the student can attempt the real one alone.

- We do ask the student to explain their class design and variable choices out loud, the way an external examiner might.

- We do run their program with deliberately awkward input so execution marks are not lost on the day.

- We do not write, type or correct-and-return an assignment for submission.

- We do not change the school's questions, order or format.

The marking scheme in full, with ideas for a strong file, is set out on [ICSE Computer Applications project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment).

## Computer applications tutor in Mumbai: six questions to ask before paying anyone

Whether you choose us, a home tutor in your building or a coaching class near the station, these questions separate real Computer Applications teaching from notes dictation. Our own answers are given so you can hold us to them.

-
**Is it ICSE Computer Applications, specifically?** Not Maharashtra SSC, not CBSE, not general coding. Ours is the CISCE syllabus for the 2027 paper, in Java with BlueJ, and nothing else.

-
**Does my child write code in every class?** Ours do: concepts and Section A practice on Tuesday, one complete Section B program on Wednesday.

-
**Is every program run, not just checked on paper?** Yes. Each one runs in BlueJ on a shared screen, with test input chosen to break it.

-
**How many students share the teacher?** Six at most in our batch, or one in a private class.

-
**Will you help with the school lab file without writing it?** That is exactly the line we hold, as described above.

-
**What happens in the winter?** Full two-hour papers under time, with Section A and Section B marked separately so the student knows where marks leak. The ladder of mocks is on [the specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Live Class 9 and 10 Computer Applications in a group of six at most, with menu, number, String and array programs built every week.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): Carries ICSE Java forward into ISC Computer Science, where programs and theory both get longer.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): A post-board course for a student who liked the number programs and wants to work with real data in Python.

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

**Do you have ICSE computer tuition classes in Mumbai I can visit?** No. Modern Age Coders has no centre in Mumbai, Thane or Navi Mumbai, nor tutors who visit homes. Classes happen only on screen: one teacher, six ICSE students at most, BlueJ shared for all to see. That is the point for many Mumbai families: there is no journey to make.

**What are the timings for the online ICSE Java batch?** Tuesday at 5:30 PM and Wednesday at 8:00 PM, Indian time, which is Mumbai time. Tuesday is for concepts and Section A practice, Wednesday for a complete Section B program. If those evenings are taken, a one to one class can be fixed at another time.

**Is online computer tuition effective for ICSE Class 10?** Computer Applications suits online teaching well, because the work happens in BlueJ on a computer. The teacher sees each student's screen, watches the program being typed and run, and corrects mistakes as they happen. Students who struggle to focus on a screen may still prefer a home tutor.

**What is a menu-driven program in ICSE Computer Applications?** It is a program that shows numbered choices, reads the user's choice and uses a switch statement to run a different task for each one, with a default case for wrong input. It is a common Section B question because it tests methods, loops, conditions and switch together.

**Do you teach the Maharashtra SSC computer syllabus?** No. The classes follow only the CISCE ICSE Class 10 Computer Applications syllabus for the 2027 examination, taught in Java with BlueJ. Students on the Maharashtra state board or CBSE need a different course. If you have one child on each board, ask on WhatsApp and we will point the other child to the right class.

**Can you help with my child's school computer project?** We help the student, not the file. ICSE has no separate prescribed project: the internal assessment is at least twenty lab assignments set by the school. We teach the concepts, rehearse explanations and test programs, and the student writes and submits their own work. We never write assignments.

**How much does online ICSE computer tuition cost?** Both fees, group and private, sit on this page as monthly figures shown in whichever currency applies to you. There is no admission charge, billing is month by month, and the first class is free so you can judge before paying.

**How many hours a week should a Class 10 student give to Computer Applications?** In our plan, about three: two live classes plus two short sessions at home, one to rewrite the week's program alone and one for a worksheet. In the last weeks before the board exam, one full timed paper a week is added.

**Can a Class 10 student join in the middle of the year?** Yes. A mid-year joiner does a short diagnostic in the demo, then follows a catch-up plan ordered by marks: whole programs before short answers, and full papers once both are steady. Joining after the first term is perfectly workable, and parents see the plan so nobody wonders what a given week is for.

**What will my child do in the free demo?** Your child takes part in a real class: types a small Java program, runs it and talks through what it does as the teacher listens. You then get a frank view of where they stand and whether the evening batch or a private slot fits better.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-tuition-mumbai*
