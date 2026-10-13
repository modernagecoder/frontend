---
title: "ICSE Computer Applications Project and Internal Assessment 2027"
description: "ICSE Class 10 Computer Applications internal assessment 2027: 20+ Java lab assignments, the four CISCE marking criteria, file ideas and the external examiner."
canonical: https://learn.modernagecoders.com/icse-class-10-computer-applications-project-and-internal-assessment
source: src/pages/icse-class-10-computer-applications-project-and-internal-assessment.html
updated: 2026-10-13
---

> The ICSE Class 10 Computer Applications internal assessment for 2027 is worth 100 marks, the same as the written paper. CISCE's syllabus asks for a minimum of twenty laboratory assignments in Java across the year, marked 50 by the subject teacher and 50 by an external examiner, each out of 50 on four criteria: class design (10), variable description (10), coding and documentation (10) and execution or output (20). The syllabus does not prescribe a separate project; many schools simply call the lab file the computer project. Modern Age Coders builds that file one documented program a week in a live BlueJ lab and rehearses the examiner session, in a Tuesday 5:30 PM and Wednesday 8 PM IST mini batch or personalised one to one.

## Twenty lab assignments, two examiners and four criteria

      CISCE's 2027 syllabus pairs the written paper with internal assessment of equal weight and spells out how that half is marked. Most families have never read it, which is why the same avoidable marks are lost every year.

### What it is made of

        Students complete a minimum of twenty laboratory assignments during the year: programs that need design, implementation and testing and that use the concepts taught in class. The teacher keeps a record of every assignment and evaluates them at the end of the year, and each must carry an appropriate list of variables, comment statements and its output. Fifty marks come from the subject teacher and fifty from an external examiner.

        The syllabus does not prescribe a separate project. Many schools call the finished lab file the computer project, and some set one larger program of their own, so always follow your school's instructions and dates on top of what follows here.

### Who the external examiner is

        The external examiner is nominated by the head of the school and may be a teacher from the same school who does not teach the subject to that class. That is why understanding matters more than volume: an examiner who asks why a loop stops where it does, or why a field is private, is testing whether the work on the page is really the student's.

        A file copied from a guide book can look complete and still fall apart in five minutes of questions. A file written by the student, one program a week, survives any question because every line has a reason the student remembers. The written paper's pattern and dates are on [the exam date and paper pattern page](/icse-class-10-computer-applications-exam-date-and-paper-pattern).

        - Criterion | Marks | What the syllabus asks the marker to check | The habit that secures it

          - Class design | 10 | A suitable class or classes, attributes of the right types, proper encapsulation, a well designed interface | Private fields, a constructor, methods that each do one job

          - Variable description | 10 | A table of every variable: name, data type, purpose | Written the same evening the program is written, never in January

          - Coding and documentation | 10 | Good names, sensible conditions and loops, error handling, layout, and class, variable and method documentation | Comments on each method; meaningful names instead of a, b and x

          - Execution or output | 20 | Does the program run correctly on all sample input? | Test with a tricky input before pasting the output

          - Per examiner | 50 | Graded excellent, good, fair or poor on each criterion | Two examiners, 100 marks in all

    Execution carries twice the weight of each other criterion, so a program that fails on an awkward input costs more than any amount of untidy formatting. The other thirty marks reward exactly what the written paper's Section B also asks for, which is why a well-kept lab file is the best Section B revision there is.

## Twenty-plus programs that cover the syllabus, not twenty of the same kind

      The syllabus says the teacher should see most of its components used across the assignments. A file of twenty number programs meets the count and misses that. The plan below spreads across every unit.

        - Group | Programs | Syllabus unit | Example

          - Input, compute, output | 3 | Revision of Class IX | Electricity bill with slab rates using if-else-if

          - Loops and special numbers | 3 | Revision of Class IX | Armstrong, palindrome and perfect number checks

          - Menu-driven programs | 2 | Conditional constructs | A switch menu for area of shapes or series sums

          - Classes and constructors | 3 | Class, constructors, encapsulation | A Student or Product class with private fields and a parameterised constructor

          - User-defined methods | 2 | Methods and overloading | An overloaded volume() for cube, cuboid and sphere

          - Library and wrapper classes | 2 | Library classes | Character methods to count letters, digits and spaces

          - Arrays | 4 | Arrays | Linear and binary search, bubble and selection sort, a double dimensional array printed as a matrix

          - String handling | 4 | String handling | Word count, reversing words, a palindrome word, alphabetical order of characters

          - Lab file | 23 | Every unit | Each with a variable description, comments and real output

### Every program documented
Each entry carries the question, the program with comments, a variable description listing every variable with its type and purpose, and the actual output from BlueJ. Those are three of the four marking criteria, secured by a checklist rather than by luck.

### Every program written in class
In our Wednesday lab, the program is written by the student in BlueJ with the teacher watching, run, corrected and documented the same evening. Nothing enters the file that the student did not write, which is exactly what the external examiner probes.

### One a week, not twenty in January
At one program a week from the start of the session, the file passes twenty before winter. Students who start in December write the file instead of revising for the paper, and usually do both badly.

## One lab program, entered carelessly and entered well

      Write a program to input a word and check whether it is a palindrome (reads the same backwards), ignoring case.

```
import java.util.*;
class p {
 void main() {
  Scanner s = new Scanner(System.in);
  String a = s.next(), b = "";
  for (int i = a.length()-1; i >= 0; i--)
   b = b + a.charAt(i);
  if (a.equals(b)) System.out.println("yes");
  else System.out.println("no");
 }
}
# No comments, no variable description,
# no output, and "Madam" prints "no"
# because case was never handled.
```

```
// checks whether a word is a palindrome, ignoring case
class PalindromeWord {
  public static void main(String[] args) {
    java.util.Scanner in = new java.util.Scanner(System.in);
    System.out.print("Enter a word: ");
    String word = in.next().toUpperCase();
    String rev = "";
    for (int i = word.length() - 1; i >= 0; i--)
      rev = rev + word.charAt(i);   // build reverse
    if (word.equals(rev))
      System.out.println(word + " is a palindrome");
    else
      System.out.println(word + " is not a palindrome");
  }
}
Variable description
word  String  the word, in upper case
rev   String  the word reversed
i     int     loop index, last char to first
Output  Enter a word: Madam
        MADAM is a palindrome
```

      The difference is not cleverness. It is a checklist applied to every entry: question copied, program
      tested on an awkward input, comments added, variable description written, real output pasted. Our
      Wednesday lab ends each program with that checklist until it is automatic. More program families are
      worked on [ICSE Java programs practice](/icse-class-10-java-programs-practice).

## Eight bigger programs that sit squarely on the ICSE syllabus

      Some schools ask for one larger program on top of the twenty assignments, and strong students often add one anyway. A good one uses classes, constructors, methods, arrays and strings in a single program that solves a small real problem: ambitious enough to show skill, small enough to explain fully.

### School library manager
A Book class with private fields and a constructor, an array of books, search by title or author, and issue and return methods that update availability. Covers classes, encapsulation, arrays and string comparison.

### Report card generator
A double dimensional array of marks for several students and subjects, totals and averages by row and column, grades from a slab, and the topper found by search. Covers 2D arrays, loops and methods.

### Canteen billing system
A switch-driven menu, an Item class, quantity input, a running bill with a discount slab, and a printed receipt. Covers constructors, menus, conditional logic and formatted output.

### Text analyser
Input a sentence and report the word count, longest word, vowel frequency, words starting with a capital and the sentence with words reversed. Covers String methods, Character wrapper methods and loops.

### Number explorer
A menu that checks a number against several special-number definitions, palindrome, Armstrong, perfect, prime, Niven, using one method per check and overloading where it fits. Covers methods, loops and modular design.

### Simple bank account
An Account class with a private balance, a parameterised constructor, deposit and withdraw methods that refuse invalid amounts, and a short transaction menu. Covers encapsulation and object state.

### Quiz program
Arrays of questions, options and answers, a score that updates as the user answers, and a final grade with feedback. Covers parallel arrays, input handling and conditional logic.

### Sorting visualiser
Input a list, then show bubble sort and selection sort pass by pass, counting comparisons and swaps for each. Covers arrays and both sort techniques in the syllabus, and gives the examiner plenty to ask about.

      Whatever your school asks for in format, the qualities that score map straight onto CISCE's four
      criteria: sensible class design, clear coding with each class and method documented, a complete variable
      description, and output that is correct on every sample input. In our classes, a larger program, where the
      school wants one, is chosen by the end of the first term, built in stages alongside the lab file and
      reviewed monthly, so it never becomes a January emergency.

## A rehearsal with a teacher your child has not met

      Since the external examiner may be a teacher who has never taught your child, the rehearsal uses one too. Answering questions about your own code is a skill, and it can be practised.

      -
**File walk-through** The student opens the file and walks the rehearsal examiner through three programs of the examiner's choosing, explaining the logic aloud without reading the code line by line.

      -
**Why questions** Why is this field private? Why a while loop here and not a for loop? What must be true of the array before binary search works? Each question targets a syllabus concept the program uses.

      -
**Change one thing** The examiner asks for a small change, count only vowels, sort in descending order, refuse negative deposits, and the student makes it live in BlueJ. Students who wrote their own programs find this easy.

      -
**The design conversation** For the biggest program in the file: what problem does it solve, which classes did you design and why, what would you add with more time? Students practise answering in two or three clear sentences, not a speech.

      -
**Feedback and a second run** Weak answers are noted, revisited in the next class, and the rehearsal is repeated briefly before the school's assessment date. Doubts are taken live throughout.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Wednesday labs produce one finished, documented program a week, so the file passes twenty before the winter and every entry meets the marking criteria.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): The ISC course where object-oriented design, recursion and data structures continue, building directly on a strong Class 10 lab file.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who finishes the syllabus early and wants bigger programs with real searching, sorting and design decisions behind them.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, four or five students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

          - India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

          - United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

          - Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

          - SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**How many marks is the ICSE Computer Applications internal assessment?** One hundred marks, the same weight as the two-hour written paper. CISCE's 2027 syllabus asks for at least twenty laboratory assignments during the year, with fifty marks from the subject teacher and fifty from an external examiner, each marking out of fifty on class design, variable description, coding and documentation, and execution or output.

**How are the lab assignments marked?** On four criteria, each graded excellent, good, fair or poor: class design out of 10, variable description out of 10, coding and documentation out of 10, and execution or output out of 20, making 50. The subject teacher and the external examiner each award marks out of 50 this way, for 100 in all.

**Is a project compulsory in ICSE Class 10 Computer Applications?** Not in CISCE's 2027 syllabus, which asks for a minimum of twenty laboratory assignments and does not prescribe a separate project. Many schools call the finished lab file the computer project, and some set one larger program of their own, so follow your school's instructions. Good larger programs include a library manager, a report card with a 2D array, a billing system or a text analyser.

**How many programs should the lab file have?** At least twenty, and a strong file usually has a few more so it can cover every syllabus unit: input and computation, loops and special numbers, menus, classes and constructors, methods and overloading, library classes, arrays and strings. Each program should have comments, a variable description and its real output.

**Who is the external examiner?** Under CISCE's rules, the external examiner is nominated by the head of the school and may be a teacher from the same school who does not teach the subject to that class. The four CISCE criteria do not include a viva, but many examiners run programs from the file and ask the student to explain choices such as access specifiers, loop types or search methods, so students should be ready to.

**Can you write the lab file for my child?** No, and it would not help: the external examiner's questions are designed to find out whether the student understands the work. Your child writes every program in class with guidance, documents it and rehearses explaining it, so the work and the marks are genuinely theirs.

**When should the lab file be finished?** Before your school's internal assessment dates, which the school announces. We aim for the file to pass twenty programs before winter by writing one a week from the start of the session, so January can go to the written paper.

**We are late. Can the lab file still be done?** Usually, yes. With personalised one to one, a teacher can work through the missing programs in order of syllabus coverage so the file still spans every unit. The free demo is the quickest way to get an honest plan for your child's deadline.

**Do ICSE students abroad have the same internal assessment?** Yes. ICSE schools outside India follow the CISCE scheme, so the internal assessment works the same way. CISCE lists ICSE schools abroad in the UAE, Singapore, Indonesia and Thailand; outside India we teach the course personalised one to one, at a time set in the local time zone of the family.

**Is internal assessment help charged separately?** No. Lab file support and the examiner rehearsal are part of the monthly fee for the mini batch or personalised one to one, shown on this page in your own currency. There is no admission fee, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

Related pages: /cbse-class-10-ai-classes-online, /cbse-class-10-ai-syllabus-explained, /python-for-cbse-class-10-ai, /cbse-class-10-ai-board-exam-preparation, /cbse-class-10-ai-project-and-practical-file, /cbse-class-10-ai-exam-date-and-paper-pattern, /cbse-class-10-ai-sample-paper-and-mock-tests, /cbse-class-10-ai-important-questions, /cbse-class-10-ai-employability-skills-part-a, /cbse-class-10-ai-online-classes-gulf-and-abroad, /icse-class-10-java-classes-online, /icse-class-10-computer-applications-syllabus-explained, /icse-class-10-java-programs-practice, /icse-class-10-bluej-java-coaching, /icse-class-10-computer-applications-board-exam-preparation, /icse-class-10-computer-applications-exam-date-and-paper-pattern, /icse-class-10-computer-applications-specimen-paper-and-mock-tests, /icse-class-10-computer-applications-important-questions, /icse-class-10-computer-applications-classes-gulf-and-abroad.

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-computer-applications-project-and-internal-assessment*
