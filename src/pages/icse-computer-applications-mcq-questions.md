---
title: "ICSE Computer Applications MCQ Questions 2027, Answered"
description: "ICSE Computer Applications MCQ questions for 2027: 32 original Question 1 style MCQs, chapter wise, each with the answer and why every other option is wrong."
canonical: https://learn.modernagecoders.com/icse-computer-applications-mcq-questions
source: src/pages/icse-computer-applications-mcq-questions.html
updated: 2026-11-06
---

> ICSE Computer Applications MCQ questions make up Question 1 of the paper: twenty compulsory one-mark items worth 20 of the 40 Section A marks, answered by writing the correct option only. Recent papers mix concept items, output of short Java code, Math and String method results, scenario or picture items, assertion and reason items and incomplete code. The best practice is a timed set followed by checking why every wrong option is wrong. Modern Age Coders runs these timed sets live: in India in a Tuesday and Wednesday evening mini batch, and anywhere in personalised one to one classes.

## How Q1 MCQ in ICSE Computer Applications is set

Question 1 is twenty multiple choice items of one mark each, all compulsory, inside the 40-mark Section A. The paper asks for the correct option only, without copying the question. The shapes below were checked against solved copies of the 2024, 2025 and 2026 papers.

- Item shape | What it tests | In this bank

- Concept and term | OOP principles, keywords, data type sizes, access specifiers, constructors | 1 to 5, 16 to 19

- Value of an expression | Precedence, integer division, increments, Math return types | 6 to 10

- Output of a short fragment | switch fall-through, loop counts, continue, String and Character methods | 11 to 15, 20 to 24

- Arrays and searching | length, indices, memory, sorting and binary search facts | 25 to 29

- Assertion and reason | Judging two statements and whether one explains the other | 30 and 31

- Scenario or picture | Matching an everyday situation to a Java construct | 32

### What the shape of Question 1 means for practice

- Twenty marks, no choice. Every item must be attempted; there is nothing to skip.

- Many are code. Recent papers carried several output and expression items, so tracing speed matters.

- Newer shapes are small but steady. Assertion and reason items appeared in 2024, 2025 and 2026, and so did picture or scenario items.

### Why every wrong option is explained

Wrong options are built from real slips: dividing as decimals, forgetting a post-increment, expecting Math.round to return a double. Knowing why an option tempts you is what stops you choosing it. Read the reasons even when you were right.

For long practice in output tracing alone, see [ICSE Java output questions sorted by trap](/icse-class-10-java-output-questions).

## ICSE computer MCQ chapter wise: values, data types, operators and Math methods

Items 1 to 10. Pick an option, open the answer, then read the line on each wrong option.

### Classes, values and data types

- A class keeps its data members private and lets other classes reach them only through public methods. This is
(a) inheritance (b) encapsulation (c) polymorphism (d) abstraction
Answer (b) Wrapping data with the methods that guard it is encapsulation. Not (a): inheritance is one class acquiring another's members. Not (c): polymorphism is one name with many forms, such as overloading. Not (d): abstraction is showing only essential features; it does not need private data.

- How much memory does a char take in Java?
(a) 1 byte (b) 2 bytes (c) 4 bytes (d) 8 bytes
Answer (b) Java stores characters in Unicode, two bytes each. Not (a): one byte is the size of byte, and of char in some other languages. Not (c): four bytes is int or float. Not (d): eight bytes is long or double.

- Which is a valid identifier?
(a) 2ndMark (b) total-marks (c) _total2 (d) class
Answer (c) An identifier may start with a letter, an underscore or a dollar sign and then hold digits. Not (a): it begins with a digit. Not (b): the hyphen is read as minus. Not (d): class is a keyword.

- Which literal is of type double?
(a) 25 (b) 25L (c) 25.0 (d) '2'
Answer (c) A number with a decimal point and no suffix is a double. Not (a): a whole number is an int. Not (b): the L suffix makes it a long. Not (d): single quotes make a char.

- Which statement compiles without a cast?
(a) int i = 4.5; (b) double d = 7; (c) char c = 66.0; (d) long n = 3.0f;
Answer (b) int to double is widening, so Java converts it silently and d holds 7.0. Not (a), (c) or (d): each puts a decimal value into a smaller or whole-number type, and javac reports a possible lossy conversion.

### Operators, expressions and Math

- The value of 17 % 5 * 2 + 10 / 4 is
(a) 6 (b) 6.5 (c) 9 (d) 3
Answer (a) % and * go left to right first: 2 * 2 is 4; 10 / 4 is int division, 2; 4 + 2 is 6. Not (b): it treats 10 / 4 as 2.5. Not (c): it works 17 % 10 as if * came first. Not (d): it ignores precedence and divides the whole 14 by 4.

- int a = 6; int b = a++ * 2 + --a; What is b?
(a) 20 (b) 18 (c) 19 (d) 17
Answer (b) a++ gives 6 and makes a 7; --a makes it 6 again and gives 6; 6 * 2 + 6 is 18. Not (a): it doubles 7, the value after the increment. Not (c): it forgets that --a lowers a before use. Not (d): it decrements from the original 6.

- Math.ceil(-4.2) returns
(a) -5.0 (b) -4.0 (c) -4 (d) 4.0
Answer (b) ceil moves up the number line, and -4 is above -4.2; it returns a double. Not (a): that is floor. Not (c): ceil never returns an int. Not (d): ceil does not drop the sign.

- Math.round(2.5) + Math.round(-2.5) is
(a) 0 (b) 1 (c) 1.0 (d) 5
Answer (b) round adds 0.5 and takes the floor: 3 and -2, sum 1. Not (a): it rounds -2.5 to -3, away from zero. Not (c): round of a double returns a long, so no .0. Not (d): it adds the sizes and ignores the sign.

- int x = 10; x += x-- - 3; x is now
(a) 16 (b) 17 (c) 7 (d) 6
Answer (b) The left x, 10, is saved first; x-- gives 10; 10 + (10 - 3) is 17. Not (a): it adds 7 to the lowered 9. Not (c): it forgets that += adds to the old x. Not (d): it uses 9 - 3 and drops the addition.

The full order of precedence is on [operators in Java for ICSE Class 10](/icse-class-10-operators-in-java), and every Math method with its return type is on [Math library methods](/icse-class-10-math-library-methods).

## Objective questions Java ICSE: conditions, loops, methods and constructors

Items 11 to 19. Loop items reward listing every value of the control variable; method items reward precise definitions.

### Input, conditions and loops

- Which Scanner method reads a full name such as "Riya Sen" in one go?
(a) next() (b) nextLine() (c) nextString() (d) readLine()
Answer (b) nextLine reads up to the end of the line, spaces included. Not (a): next stops at the first space and returns "Riya". Not (c): Scanner has no such method. Not (d): readLine belongs to BufferedReader, not Scanner.

- int k = 2; switch (k) { case 1: k += 10; case 2: k += 20; case 3: k += 30; break; default: k = 0; } k is now
(a) 22 (b) 52 (c) 0 (d) 62
Answer (b) Entry is at case 2, and with no break it falls into case 3: 2 + 20 + 30. Not (a): it stops at case 2 as if a break were there. Not (c): default is never reached, the break comes first. Not (d): it also adds case 1, which is above the entry point.

- How many times does for (int i = 5; i <= 40; i *= 2) run?
(a) 3 (b) 4 (c) 5 (d) it never stops
Answer (b) i takes 5, 10, 20 and 40; at 80 the test fails. Not (a): it drops 40, but the test is <=. Not (c): it counts 80, which fails the test. Not (d): i grows each pass, so the loop ends.

- int s = 0; for (int i = 1; i <= 10; i += 3) s += i; s is
(a) 22 (b) 12 (c) 55 (d) 10
Answer (a) 1 + 4 + 7 + 10. Not (b): it leaves out 10, the last value that passes. Not (c): it adds every number from 1 to 10. Not (d): it gives the last value of i, not the total.

- for (int i = 1; i <= 6; i++) { if (i % 3 == 0) continue; System.out.print(i); } prints
(a) 12 (b) 1245 (c) 36 (d) 123456
Answer (b) continue skips the print for 3 and 6 but the loop goes on. Not (a): that is what break would print. Not (c): it prints only the skipped values. Not (d): it ignores the continue.

### Methods, constructors and access

- Which is true of a constructor?
(a) its return type is void (b) it has no return type (c) it may have any name (d) it must be called explicitly
Answer (b) A constructor has no return type at all. Not (a): writing void turns it into an ordinary method. Not (c): it must have the class's name. Not (d): it runs by itself when new creates the object.

- Which pair can NOT be in the same class?
(a) int area(int s) and double area(double r) (b) void print(int a, char b) and void print(char b, int a) (c) int sum(int a, int b) and double sum(int x, int y) (d) void put() and void put(String s)
Answer (c) The parameter lists match and only the return type differs, so javac says sum is already defined. Not (a): parameter types differ. Not (b): parameter order differs. Not (d): parameter count differs.

- A private data member can be used
(a) anywhere in the program (b) only inside its own class (c) only in main (d) in any class of the same package
Answer (b) private limits access to the class that declares it. Not (a): that is public. Not (c): main has no special access. Not (d): that is default, or package, access.

- A static data member is
(a) copied into every object (b) shared by all objects of the class (c) usable only in main (d) a constant that cannot change
Answer (b) One copy belongs to the class and every object sees it. Not (a): that describes an instance variable. Not (c): any method of the class can use it. Not (d): that is final.

One-mark items often turn into two-mark "difference between" parts in Question 2; those are set out on [difference between questions for ICSE Computer Applications](/icse-computer-difference-between-questions).

## ICSE computer MCQ with answers: Strings, arrays, assertion and reason

Items 20 to 32. String items test indices and return types; array items test length and memory; the last three use the newer shapes.

### Strings, Character and wrapper classes

- "COMPUTER".substring(3, 6) returns
(a) PUT (b) PUTE (c) MPU (d) MPUT
Answer (a) Indices 3, 4 and 5; the end index is left out. Not (b): it includes index 6. Not (c): it counts from 1. Not (d): it counts from 1 and includes the end.

- "banana".indexOf('a', 2) is
(a) 1 (b) 3 (c) 5 (d) 2
Answer (b) The search starts at index 2 ('n'), and the next 'a' is at 3. Not (a): that 'a' is before the start. Not (c): that is lastIndexOf. Not (d): it returns the start index itself.

- "Exam".compareTo("Exit") is
(a) -8 (b) 8 (c) 0 (d) -1
Answer (a) The first difference is 'a' (97) against 'i' (105): 97 - 105. Not (b): the subtraction is the wrong way round. Not (c): the strings differ. Not (d): compareTo returns the code difference, not just a sign.

- Character.isLetter('7') + " " + Character.toLowerCase('Q') gives
(a) true q (b) false q (c) false Q (d) false 113
Answer (b) '7' is a digit, and toLowerCase returns the char q. Not (a): a digit is not a letter. Not (c): the conversion did happen. Not (d): the String join keeps it a character, not a code.

- Integer.parseInt("12") + 3 + "4" gives
(a) 154 (b) 1234 (c) 19 (d) 1534
Answer (a) 12 + 3 is added first as ints, then "4" is joined. Not (b): it joins all three. Not (c): it adds 4 as a number. Not (d): it joins "15" and "34".

More wrapper and Character items are on [wrapper and library classes](/icse-class-10-wrapper-and-library-classes).

### Arrays, sorting and searching

- int[] p = {4, 9, 2, 7}; p.length + " " + p[p.length - 1] gives
(a) 4 7 (b) 3 7 (c) 4 2 (d) an error
Answer (a) Four elements; the last index is 3, which holds 7. Not (b): length counts elements, not the last index. Not (c): it reads index 2. Not (d): length is a field, written correctly without brackets.

- Binary search can be used only when the array is
(a) of int type (b) sorted (c) of even length (d) free of duplicates
Answer (b) Halving works only if order tells you which half to keep. Not (a): Strings and chars can be searched too. Not (c): any length works. Not (d): duplicates do not stop it finding a match.

- How many bytes does new double[5] take for its elements?
(a) 5 (b) 20 (c) 40 (d) 80
Answer (c) Five elements of 8 bytes each. Not (a): that is the count, not the size. Not (b): it uses 4 bytes, the size of int or float. Not (d): it doubles the size of a double.

- A bubble sort of 6 elements needs at most how many passes?
(a) 5 (b) 6 (c) 15 (d) 36
Answer (a) Each pass fixes one element at the end, and the last one is then in place: n - 1. Not (b): the sixth pass has nothing left to fix. Not (c): 15 is the total comparisons, 5 + 4 + 3 + 2 + 1. Not (d): it multiplies n by n.

- Binary search for 56 in {3, 8, 15, 23, 42, 56, 71}: how many elements are compared, the match included?
(a) 1 (b) 2 (c) 3 (d) 6
Answer (b) The middle, 23 at index 3, is smaller, so the search moves right; the middle of 4 to 6 is index 5, which holds 56. Not (a): 56 is not the first middle. Not (c): 42 is never compared. Not (d): that is linear search reaching index 5.

### The newer shapes

- Assertion (A): int q = 7 / 2; stores 3 in q. Reason (R): dividing one int by another gives an int with the fraction dropped.
(a) Both true, R explains A (b) Both true, R does not explain A (c) A true, R false (d) A false, R true
Answer (a) q is 3, and integer division is exactly why. Not (b): R is the cause, not a side fact. Not (c): R is a correct rule. Not (d): A is true, the code stores 3.

- Assertion (A): a do-while loop may execute zero times. Reason (R): a do-while loop checks its condition after the body.
(a) Both true, R explains A (b) Both true, R does not explain A (c) A true, R false (d) A false, R true
Answer (d) Because the test comes after the body, the body always runs once, so A is false. Not (a) or (b): A is false. Not (c): R is the correct rule; it is A that fails.

- A vending machine shows a different message for each coin of 1, 2, 5 and 10 and an error for anything else. Which construct fits best?
(a) a for loop (b) switch with a default (c) a 2D array (d) method overloading
Answer (b) One value, several exact cases and a fallback is the switch pattern. Not (a): nothing repeats. Not (c): there is no table of rows and columns. Not (d): overloading means several methods with one name, not several choices of one value.

Assertion and reason and scenario items are worked in depth on [ICSE Computer Applications competency based questions](/icse-computer-applications-competency-questions).

## How to score 20 out of 20 in the ICSE Computer Applications MCQ question

Work out the answer first, then find it among the options; reading the options first pulls you towards the slips below.

- The tempting option | The slip behind it | The check that catches it

- 6.5 for an int expression | Dividing two ints as decimals | Mark the type of each operand before dividing

- 1.0 for Math.round | Thinking every Math method returns double | round of a double returns long; ceil, floor, sqrt and pow return double

- An answer one step off in a loop | Counting in your head | List every value of the variable, including the one that fails

- The value after an increment | Mixing up a++ and ++a | Write a after each term, left to right

- "Both true, R explains A" | Judging only the assertion | Judge A, then R, then ask whether R is the cause of A

-
**Budget about twenty minutes** The paper is two hours for 100 marks. Question 1 is 20 marks, so it earns roughly a minute an item; most take less, which buys time for Section B.

-
**Trace code items on the margin** A three-line table of variables is faster than rereading the fragment four times.

-
**Leave nothing blank** Nothing in the paper's instructions says marks are taken away for a wrong option, so when stuck, rule out what you can and choose.

How Question 1 sat inside each recent paper is mapped on [ICSE Computer Applications previous year papers, solved](/icse-computer-applications-previous-year-papers-solved).

## A timed Question 1 every week, marked one option at a time

The batch adds the clock and the marking.

### Tuesday: twenty items, twenty minutes
Each Tuesday at 5:30 PM IST, a fresh set of twenty original items mixes the week's chapter with older ones. Everyone commits to answers before any is revealed.

### Every option discussed
The teacher asks who chose each wrong option and why. The slip is named, and code items are run in BlueJ on a shared screen to settle any doubt.

### Wednesday: the weak chapter again
Each Wednesday at 8:00 PM IST, the chapter that cost the most marks comes back as a short set before the Section B program of the week.

From December, Question 1 is sat inside full two-hour mock papers. Abroad, the same sets run one to one.

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where every chapter ends in a timed MCQ set marked option by option.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving on to ISC Computer Science, where the same Java facts return in longer objective and short-answer questions.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who liked the searching and sorting items and wants to measure how fast each method really is.

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

**How many MCQs are there in the ICSE Computer Applications paper?** Question 1 has twenty multiple choice items of one mark each, so 20 marks. They are compulsory and sit inside Section A, which is 40 marks in all; Question 2 makes up the other 20 with ten two-mark parts. Section B, 60 marks, has no MCQs.

**Are ICSE Computer Applications MCQs chapter wise?** In the paper they are mixed, not grouped by chapter. For practice, chapter-wise sets help you find weak topics first. This page groups 32 original items by chapter: data types, operators and Math, loops, methods and constructors, Strings and wrappers, and arrays, then adds the newer assertion and reason and scenario shapes.

**How do I write MCQ answers in the ICSE Computer Applications paper?** Write the item number, the option letter and the answer itself, for example "(iii) (b) 2 bytes". The paper asks for the correct answer only, so do not copy the question. Writing the answer text as well as the letter helps if a number is misread.

**Are there assertion and reason questions in ICSE Computer Applications MCQs?** Yes. Solved copies of the 2024, 2025 and 2026 papers each include assertion and reason items in Question 1, one in 2024 and two in each later year. Judge the assertion and the reason separately, then decide whether the reason actually causes the assertion. Items 30 and 31 above are original practice.

**Is there negative marking in ICSE Computer Applications MCQs?** Nothing in the paper's instructions mentions deducting marks for a wrong option, and Question 1 is compulsory. So never leave an item blank: rule out the options you know are wrong and choose between the rest.

**How long should I spend on Question 1?** About twenty minutes is a sensible ceiling in a two-hour, 100-mark paper. Do the theory items in one quick sweep, then trace the code items on the margin. Time saved here goes to the four Section B programs, which carry 60 marks.

**Are these MCQs from past ICSE papers?** No. All 32 items on this page are original, written in the shapes recent Question 1 papers use. Every code item was compiled and run in Java to confirm the answer, and every wrong option was checked against the slip it represents.

**Do you practise MCQs in live classes?** Yes. In the mini batch, Tuesday classes start with a timed twenty-item set, and every wrong option is discussed with the code run in BlueJ when needed. Weak chapters return on Wednesday. A private one to one slot is available for students who want focused help.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-applications-mcq-questions*
