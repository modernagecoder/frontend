---
title: "ICSE Computer Applications Competency Based Questions"
description: "ICSE Computer Applications competency based questions: what is confirmed, the shapes in the paper, and worked assertion reason, case study and HOTS items."
canonical: https://learn.modernagecoders.com/icse-computer-applications-competency-questions
source: src/pages/icse-computer-applications-competency-questions.html
updated: 2026-11-06
---

> ICSE Computer Applications competency based questions test whether a student can apply Java, not just recall it. In the 2024, 2025 and 2026 papers they appeared inside the normal structure: assertion and reason and real-life scenario MCQs in Question 1, find-the-error, write-the-rule and complete-the-code parts in Question 2, and real-world classes in Section B. A separate case-study section has not appeared, and no 2027 Computer Applications specimen has been reported. Modern Age Coders teaches these items in a live mini batch on Tuesday and Wednesday evenings in India, with personalised one to one classes as the other option.

## What are competency based questions in ICSE Computer Applications?

A competency based question gives a situation the student has not seen and asks them to apply, analyse or judge Java knowledge in it. In this subject they have so far appeared as new shapes inside the familiar 40 plus 60 mark paper, not as a separate section.

- Status | What we can say | Source

- Confirmed | Assertion and reason MCQs in Question 1: one in 2024, two in 2025, two in 2026 | Solved copies of those board papers

- Confirmed | MCQs built on a picture or everyday situation (a shape and its examples, a repeated exercise, the earth's rotation and revolution) in each of those three years | Same

- Confirmed | Question 2 parts asking to name an error type and correct the code (2025, 2026), to write a real-life rule as one statement (2026) and to fill blanks in code (2026) | Same

- Confirmed | Section B Question 3 framed as a real service or device: a student stream, a courier, cloud storage, a step tracker (2023 to 2026) | Same

- Reported | CISCE says its 2027 specimen papers weight higher-order skills (apply, analyse, evaluate, create) at about half the marks | News reports of an October 2026 CISCE release, not yet checked against the release itself

- Not confirmed | A 2027 Class 10 Computer Applications specimen: the reported Class 10 list did not include it. Any change to the paper's layout for 2027. A separate case-study section | Check cisce.org before relying on any claim

So the safe plan for 2027 is the one this page follows: master the shapes that have already appeared, and practise case-style reading in case more of it comes. Where these shapes sat in each paper is mapped on [ICSE Computer Applications previous year papers, solved](/icse-computer-applications-previous-year-papers-solved).

## Assertion reason ICSE Computer Applications: the method and six worked items

Judge the assertion alone, judge the reason alone, and only if both are true ask whether the reason is why the assertion holds. The four options are: (a) both true and R explains A, (b) both true but R does not explain A, (c) A true and R false, (d) A false and R true.

- A: System.out.println('A' + 2); prints 67. R: a char used in arithmetic is promoted to int.
Answer (a) 'A' is 65, promoted to int, plus 2 is 67, and the promotion is exactly why a number prints instead of C.

- A: System.out.println(Math.sqrt(25)); prints 5. R: Math.sqrt returns a double.
Answer (d) It prints 5.0, so A is false. R is true, and it is the very reason A fails.

- A: after String s = "board"; s.toUpperCase(); s still holds "board". R: String objects in Java cannot be changed.
Answer (a) toUpperCase builds a new String that was never stored; immutability is the cause.

- A: after int[] m = new int[5]; the element m[5] holds 0. R: elements of a new int array start at 0.
Answer (d) Valid indices are 0 to 4, so m[5] throws ArrayIndexOutOfBoundsException when run. R is a true rule about indices 0 to 4.

- A: a class can have two constructors, Box() and Box(int s). R: a constructor has the same name as its class.
Answer (b) Both are true, but constructors can coexist because their parameter lists differ, not because of their name.

- A: binary search for 9 in {9, 4, 7, 1} reports "not found". R: binary search assumes the array is sorted.
Answer (a) The search checks 4, then 7, then 1, always moving right, and never looks at index 0. It fails because the data is not sorted.

### The trap in (b)
Students pick (a) whenever both statements are true. Ask: if R were false, would A still be true? If yes, R does not explain A.

### The trap in (d)
An assertion that is almost right, such as "prints 5" for 5.0, is false. Exact output is part of the fact.

### Run it if you can
Every item above is a two-line program. While revising, type it into BlueJ: the output settles A in seconds.

Two more assertion items sit among the one-mark bank on [ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions).

## Case study questions ICSE computer: two worked cases

A case study gives a short real situation and then several linked questions on it. The board has not set a separate case-study section in this paper, but its scenario MCQs and real-world Question 3 classes read the same way, so these two original cases train that reading.

### Case 1: the school bus

A school bus makes five stops. The number of students boarding at each is stored as int[] board = {6, 11, 4, 13, 9};. (i) Which construct suits five values of one type? (ii) Find the total and the busiest stop. (iii) The bus is full at 30 or more students; which statement stops counting once it is full? (iv) After which stop is it full?

```
int[] board = {6, 11, 4, 13, 9};
int total = 0, max = 0;
for (int i = 0; i < board.length; i++) {
    total += board[i];
    if (board[i] > board[max])
        max = i;
}
System.out.println("Total boarded: " + total);
System.out.println("Busiest stop: " + (max + 1));
int seats = 0, stop;
for (stop = 0; stop < board.length; stop++) {
    seats += board[stop];
    if (seats >= 30)
        break;
}
System.out.println("Bus full after stop " + (stop + 1) + " with " + seats);
```

```
Total boarded: 43
Busiest stop: 4
Bus full after stop 4 with 34
```

### Case 2: the self-watering planter

A planter reads soil moisture as a percentage. Below 20 it gives 1.5 litres, from 20 to under 45 it gives 0.75 litres, otherwise none. (i) Which kind of constructor takes the reading? (ii) Why should moisture be private? (iii) What does a reading of 32 print? (iv) Write the rule as one statement.

```
public class Planter {
    private int moisture;
    private double litres;
    Planter(int m) { moisture = m; }
    void decide() {
        if (moisture < 20)
            litres = 1.5;
        else if (moisture < 45)
            litres = 0.75;
        else
            litres = 0;
    }
    void show() {
        System.out.println("Moisture " + moisture + "%: water " + litres + " L");
    }
    public static void main(String[] args) {
        Planter p = new Planter(32);
        p.decide();
        p.show();
    }
}
```

```
Moisture 32%: water 0.75 L

// (iv)
litres = moisture < 20 ? 1.5 : moisture < 45 ? 0.75 : 0;
```

Constructors of every kind are drilled on [constructors questions for ICSE Class 10](/icse-class-10-constructors-questions).

## HOTS questions ICSE Java and application based questions, worked

Higher-order items ask you to evaluate or repair code rather than write it from scratch. Four shapes from recent Question 2 papers, each with an original item.

```
int[] a = {7, 8, 10, 6};
int sum = 0;
double avg;
for (int i = 1; i <= a.length; i++)
    sum += a[i];
avg = sum / a.length;
System.out.println(avg);
```

```
for (int i = 0; i < a.length; i++)
    sum += a[i];
avg = (double) sum / a.length;

// prints 7.75
```

### H2. Put the statements in order
To count the vowels in a word: (1) return c; (2) if ("AEIOU".indexOf(w.charAt(i)) >= 0) c++; (3) int c = 0; w = w.toUpperCase(); (4) for (int i = 0; i < w.length(); i++). Answer: 3, 4, 2, 1. For "Education" it returns 5.

### H3. Turn a rule into one statement
A ride admits a rider at least 120 cm tall, or any rider with an adult. Answer: boolean canRide = height >= 120 || withAdult; With height 115 and withAdult true it is true; using && would wrongly refuse that child.

### H4. Fill the blanks to reverse an array in place
int i = 0, j = r.length - 1; then while (i < j) { int t = r[i]; r[i] = r[j]; r[j] = t; ___; ___; }. Answer: i++ and j--. {2, 4, 6, 8, 10} becomes 10 8 6 4 2.

A full set of broken programs to repair is on [ICSE Class 10 Java error finding questions](/icse-class-10-java-error-finding-questions), and tracing practice is on [ICSE Java output questions](/icse-class-10-java-output-questions).

## How the mini batch prepares students for application questions

Competency items reward explaining, so the classes make students explain out loud, then prove the explanation by running the code.

-
**Tuesday: judge before you answer** In the Tuesday 5:30 PM IST session, assertion and scenario items are answered against a timer, then each student defends their choice before the code is run in BlueJ.

-
**Wednesday: repair someone else's code** In the Wednesday 8:00 PM IST session, the week's program arrives with planted errors. Students name each error's kind, fix it and run it.

-
**A short case every fortnight** A situation in a few lines, then four linked questions, as in the cases above, so reading a scenario becomes routine.

-
**Inside every mock from December** Full two-hour mock papers include these shapes in the proportions recent papers used, marked like the board.

If CISCE publishes a 2027 specimen for this paper, the batch will add its shapes the same week. A wider plan for the whole paper is on [how to score 100 in ICSE Computer Applications](/how-to-score-100-in-icse-computer-applications).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, with assertion, scenario and find-and-fix items worked aloud beside the weekly program.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where reading, judging and repairing code becomes a larger share of the paper.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who enjoys asking why a search fails on unsorted data and wants to reason about programs more formally.

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

**What are competency based questions in ICSE Computer Applications?** They are questions that ask a student to apply, analyse or evaluate Java knowledge in a new situation instead of recalling a definition. In recent papers they include assertion and reason MCQs, picture or real-life scenario MCQs, find-and-fix code parts, writing an everyday rule as a Java statement and completing code with blanks.

**Are there case study questions in ICSE Computer Applications?** Not as a separate section so far. The 2024 to 2026 papers kept the usual Section A and Section B, with scenario-based MCQs and real-world class questions instead. No 2027 Computer Applications specimen has been reported. Practising short cases still helps, because the reading skill is the same.

**Are assertion and reason questions asked in ICSE Computer Applications?** Yes. They sit among the twenty one-mark MCQs of Question 1. The 2024 paper carried one, and the 2025 and 2026 papers carried two apiece, judging by solved copies. Treat each as three small decisions: is A true, is R true, and does R cause A.

**How many competency based questions will be in ICSE 2027 Computer Applications?** Nobody can say yet for this paper. News reports of an October 2026 CISCE release say the 2027 specimen papers give about half the weight to higher-order skills, but the reported Class 10 list did not include Computer Applications. Check cisce.org for any specimen before trusting a number.

**What are HOTS questions in ICSE Java?** Higher order thinking skill questions ask you to judge, repair or design rather than repeat. In this paper they look like: name the type of error and correct the code, order jumbled statements, fill blanks so a fragment works, or explain why a search or loop gives a wrong result.

**How do I answer an assertion and reason question?** Decide whether the assertion is true, then whether the reason is true, each on its own. If both are true, ask whether the reason causes the assertion; if the assertion would still hold without it, choose "both true but R does not explain A". An assertion with a slightly wrong value, such as 5 for 5.0, is false.

**How do I prepare for application based questions in ICSE Computer?** Practise reading code you did not write. Take programs with planted errors and name each error type, rewrite everyday rules as single Java statements, and run every guess in BlueJ to check it. Past-paper Section B classes, each built around a real service, are good practice too.

**Is the ICSE Computer Applications paper pattern changing for 2027?** Nothing confirmed. The 2027 syllabus keeps a 100-mark paper with Section A of 40 compulsory marks and Section B of any four from six programs. Reports about competency weighting refer to specimen papers in selected subjects; until CISCE publishes something for this paper, prepare for the pattern of recent years.

**Do you teach competency questions in live classes?** Yes. In the mini batch, Tuesday classes time assertion and scenario items, Wednesday classes repair programs with planted errors, and a short case study comes every fortnight. Each answer is explained aloud and checked in BlueJ. A private one to one slot, timed around the family, is the other route.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-competency-questions*
