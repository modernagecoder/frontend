---
title: "ICSE Computer Tuition Bangalore: Evening Java Classes"
description: "ICSE computer tuition in Bangalore, live online on weekday evenings: Class 10 Java with BlueJ, a String program worked in full, lab file support, one to one."
canonical: https://learn.modernagecoders.com/icse-computer-tuition-bangalore
source: src/pages/icse-computer-tuition-bangalore.html
updated: 2026-11-06
---

> Modern Age Coders teaches ICSE computer tuition to Bangalore students live online, in two weekday evening slots: Tuesday at 5:30 PM IST for concepts and Section A questions, and Wednesday at 8:00 PM IST for one complete Section B program. The mini batch takes at most six ICSE Class 10 students and follows the 2027 Computer Applications syllabus in Java with BlueJ, including String handling, arrays, methods and classes, plus support for school lab assignments and timed mock papers. There is no centre in Bengaluru. If neither evening is free, personalised one to one classes run at a time the family chooses.

## When are the ICSE Class 10 Java classes for Bangalore students?

Two fixed evenings: Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, read straight off a Bengaluru clock. Each evening has a different job, so a student always knows what to bring.

- Slot | What the class does | What the student has ready | What they leave with

- Tuesday, 5:30 PM | A concept taught with live examples, then a burst of Section A questions: outputs, errors, short definitions | Notebook, last week's worksheet | A short practice sheet on the same concept

- Wednesday, 8:00 PM | One Section B program planned, coded in BlueJ, run with test data and marked | BlueJ open, Tuesday's notes | A working program and its variable description

- One to one, any agreed evening | Whatever the student most needs that week: a weak topic, a school lab question to understand, a mock paper review | Agreed in advance with the teacher | A specific next step for the coming week

The earlier Tuesday class is light on typing on purpose: a student who has just walked in from school can think and answer aloud without setting up a long program. The Wednesday class sits later, after dinner, because writing a 15-mark program properly takes calm, uninterrupted time. A Bengaluru student with sports practice or another tuition on one of these evenings is better off in one to one than missing half the batch every week.

Both slots are online, so a late finish at school does not mean a late start: there is no road between home and class. The structure of the course, unit by unit, is on [the ICSE Computer Applications syllabus explained](/icse-class-10-computer-applications-syllabus-explained).

## Computer applications tutor in Bengaluru, a centre, or an online batch?

Each works for a particular kind of student. Pick by what your child needs, not by what is nearest. Here is how we would advise a Bengaluru family, including when we are not the right answer.

### A home tutor makes sense if...
your child needs an adult physically beside them to stay on task, or you want one person to cover several subjects in one visit. Ask whether the tutor runs every program on a computer or only checks it on paper.

### A coaching centre makes sense if...
your child works better outside the house and the centre is close enough that the journey does not eat the evening. Ask how many students share one teacher in the computer class.

### Our online mini batch makes sense if...
your child can follow a screen, benefits from hearing a few classmates reason through a program, and is roughly on pace with school. The two evenings fit around the rest of the week.

### Our one to one makes sense if...
your child is behind, aiming for every last mark, or has evenings that change week to week. The teacher spends the whole class on your child's own code.

### We are the wrong choice if...
your child is on the Karnataka SSLC or CBSE rather than ICSE, or you want face to face teaching. We teach only ICSE Computer Applications, and only online.

### Whatever you choose, check...
that the student writes code every week, runs it, writes the variable description, and is helped with the school lab file without anyone writing it for them.

How the small group compares with private classes in more detail is on [small batch ICSE Computer Applications classes](/icse-computer-applications-small-batch-classes) and [the ICSE Computer Applications private tutor page](/icse-computer-applications-private-tutor).

## A String handling program from the Bengaluru batch, traced word by word

String programs turn up in Section B almost every year, and they punish students who have only memorised one pattern. This one is original: it reads a sentence, rewrites every word with a capital first letter, finds the longest word and counts words that begin and end with the same letter.

The question. Write a program to accept a sentence. Print it with the first letter of each word in capitals and the rest in small letters. Also print the longest word with its length, and the number of words whose first and last letters are the same, ignoring case. Words are separated by one or more spaces.

```
import java.util.Scanner;

class WordScan {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine().trim() + " ";
        String word = "", longest = "", title = "";
        int sameEnds = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') {
                word = word + ch;
            } else if (word.length() > 0) {
                if (word.length() > longest.length())
                    longest = word;
                char first = Character.toLowerCase(word.charAt(0));
                char last = Character.toLowerCase(
                                word.charAt(word.length() - 1));
                if (first == last)
                    sameEnds++;
                title = title + Character.toUpperCase(word.charAt(0))
                        + word.substring(1).toLowerCase() + " ";
                word = "";
            }
        }
        System.out.println(title.trim());
        System.out.println("Longest word: " + longest
                           + " (" + longest.length() + " letters)");
        System.out.println("Words that start and end with the same letter: "
                           + sameEnds);
    }
}
```

```
Enter a sentence: every evening Anita reads aloud to her level headed sister
Every Evening Anita Reads Aloud To Her Level Headed Sister
Longest word: evening (7 letters)
Words that start and end with the same letter: 2

Enter a sentence: nOON is here
Noon Is Here
Longest word: nOON (4 letters)
Words that start and end with the same letter: 1

Enter a sentence:    two  spaces   between
Two Spaces Between
Longest word: between (7 letters)
Words that start and end with the same letter: 1
```

### Trace of the second run, one word at a time

- Space reached after | word | first, last | sameEnds | longest | title so far

- index 4 | nOON | n, n | 1 | nOON | Noon

- index 7 | is | i, s | 1 | nOON | Noon Is

- index 12, the space added by the program | here | h, e | 1 | nOON (here is not longer) | Noon Is Here

### The four ideas this program is really testing

- The sentinel space. Adding " " to the end means the last word is processed inside the loop. Forget it, and the last word is silently ignored: a classic lost mark.

- Strings do not change in place. word.substring(1).toLowerCase() returns a new String; it has to be joined into title or it is lost.

- Comparing chars, not Strings. first == last is correct because both are char. For two Strings, == would be wrong and equals would be needed.

- Strictly greater. > keeps the first of two equally long words. Using >= would change the answer when there is a tie, and the question should be read for which one it wants.

More programs of this kind, from palindrome words to letter frequency, each run in Java, are on [ICSE Class 10 String programs](/icse-class-10-string-programs).

## A sample week in the String handling unit, for a Bengaluru ICSE student

In many schools String handling is taught in the second half of Class 10, not long before the preboards, so the weeks are tight. This is how one such week is spread out so that no single evening carries too much.

-
**Tuesday class, 5:30 PM IST** The String methods the syllabus names, taught by predicting what each call returns: charAt, indexOf, substring, compareTo, equalsIgnoreCase, replace and the rest. Twelve short output questions follow, answered in writing first and then checked.

-
**Wednesday class, 8:00 PM IST** The WordScan program above: the plan on paper, the code in BlueJ, three test runs including the awkward one, and the variable description. Marks are given against the scheme so the student sees exactly where the 15 go.

-
**Thursday, at home, 25 minutes** A variation of the same program with one change: count vowels in each word instead of matching first and last letters. The student writes it alone and runs it.

-
**Weekend, at home, 40 minutes** A worksheet mixing String outputs with two error-finding questions. Anything left unsolved is the first thing raised on Tuesday.

-
**School lab period, whenever it falls** The school's own assignments carry on as the teacher sets them. If one of them uses Strings, the student now has the method and the test habit to do it independently.

Output questions on String methods, sorted by trap, are on [ICSE Java output questions](/icse-class-10-java-output-questions).

## School lab assignments and the internal assessment: what we do and what we leave to the school

The internal assessment is the school's process from start to finish. We make the student ready for it: able to write, document, run and defend each program they submit.

CISCE weighs the internal assessment equally with the written paper, 100 marks each. It is awarded on a minimum of twenty laboratory assignments across the year, half the marks by the subject teacher and half by an external examiner. Ten of every fifty go to the variable description, and another ten to coding and documentation, so a program that runs but is not explained can still lose a fifth of its marks.

- Marking head (out of 50) | What the school does | What we add in class

- Class design, 10 | Sets the assignment question | The student explains the plan aloud before coding; the teacher asks why each method exists

- Variable description, 10 | States the format it wants | Every Wednesday program ends with a description table, so writing one becomes routine

- Coding and documentation, 10 | Checks the file | Comments, indentation and meaningful names are pointed out live, while the code is on screen

- Execution or output, 20 | Sees the program run | Test runs include awkward input, like the extra-spaces case above, so nothing surprises the student

Two lines we do not cross. We never write an assignment for a student to submit, and we never change the school's question or format to suit our teaching. What we will do is take a school question the student finds hard, teach the idea behind it with a different example, and then watch the student solve the real one themselves. The complete internal assessment scheme is on [the ICSE project and internal assessment page](/icse-class-10-computer-applications-project-and-internal-assessment).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications live: concepts on Tuesday, a full program on Wednesday, mock papers before the board exam.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): The natural next course for a student who takes Computer Science in ISC and wants Java to keep growing.
- [Python for Teens](/courses/python-complete-masterclass-teens): For the gap after the board exam: a second language that many students meet next, learnt with the habits Java already built.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**Is there a Modern Age Coders centre in Bangalore?** No. We have no centre in Bengaluru and no home tutors there. All ICSE Computer Applications classes are live online: the teacher and up to six students meet on screen, and every program is written and run in BlueJ while the teacher watches. If you need in-person teaching, a local tutor is the better fit.

**What time are the ICSE computer classes in Bangalore?** Class runs twice a week: Tuesdays from 5:30 PM IST and Wednesdays from 8:00 PM IST, and those are simply Bengaluru times. Tuesday covers concepts and Section A questions; Wednesday is for one full Section B program. If neither evening is free, one to one classes run at a time you choose.

**Which is better for ICSE Class 10 Java, a home tutor or online classes?** It depends on the child. A home tutor helps a student who needs someone physically present. Online works well for Java because the subject is done on a screen: the teacher sees the code as it is typed and run. Whichever you choose, make sure programs are actually run, not only checked on paper.

**Do you teach the Karnataka SSLC computer syllabus?** No. We teach only the CISCE ICSE Class 10 Computer Applications syllabus, in Java with BlueJ, for the 2027 examination. Students on the Karnataka state board or CBSE follow different syllabi and would not fit this class.

**How do you help with ICSE computer lab assignments?** Your school decides the questions, the deadlines and the internal marks. Our job is to teach the ideas behind each question, have the student talk through their class design and write a proper variable description, and run each program with awkward test cases. We never write assignments for students to hand in.

**How many String programs should a student practise for ICSE?** Enough to cover the main families rather than a fixed number: word extraction, counting characters, changing case, palindromes, reversing words and comparing Strings. Each new program should be written without looking at an old one, then run with tricky input such as extra spaces or capitals.

**What does ICSE computer tuition cost in Bengaluru?** Both monthly fees, batch and one to one, are printed on this page in your currency. You pay month by month with no admission charge, and the first class costs nothing. When comparing with a local tutor, compare what each hour contains: code written, code run, code marked.

**Is the batch only for Class 10?** The mini batch on this page is for ICSE Class 10 students preparing for the 2027 paper. The course also covers Class 9, and a Class 9 student can start with personalised one to one classes. Ask in the demo which route fits.

**Can my child join after the preboards?** Yes. A student joining late gets a quick diagnostic, then a plan that goes straight to the highest-value work: Section B program families, timed papers and the Section A traps they keep falling into. A winter start is workable if the student commits to the weekly papers.

**What is the free demo like?** Your child writes a short Java program live, with a teacher watching and asking questions. You then hear honestly where they stand, what to fix first, and whether the evening batch or a one to one slot would serve them better.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-tuition-bangalore*
