---
title: "Difference Between Questions ICSE Computer Applications 2027"
description: "Difference between questions for ICSE Computer Applications 2027: 40 Java pairs by chapter, each in two-point answer format, with code proofs run in Java."
canonical: https://learn.modernagecoders.com/icse-computer-difference-between-questions
source: src/pages/icse-computer-difference-between-questions.html
updated: 2026-10-13
---

> Difference between questions in ICSE Computer Applications ask for two points that separate a pair of Java ideas, such as = and ==, while and do-while, call by value and call by reference, pure and impure methods, linear and binary search, or equals() and ==. They are usually two-mark parts of Section A. The answer that earns both marks names a basis for each point and states both sides of it, in a table or two matched sentences. This page answers forty pairs from the 2027 syllabus that way. Modern Age Coders drills them live in a Tuesday and Wednesday mini batch in India, or one to one.

## How do you answer difference between questions in ICSE Computer?

Give two points, and make each point a matched pair: one basis, both sides. A point that describes only one side of the pair leaves the examiner to guess the contrast, and often loses the mark.

- Answer | What was written | Likely result

- One-sided | "while checks the condition first." | Weak: says nothing about do-while

- One matched point | "while tests before the body; do-while tests after it." | One of two marks

- Two matched points | "Test: while tests before the body; do-while after it. Runs: while may run zero times; do-while runs at least once." | Both marks

### Name the basis
Start each point with what is being compared: purpose, return type, when it runs, what it needs. The basis keeps both halves about the same thing.

### Table or two sentences
A three-column table (basis, first, second) is fastest to write and to mark. Two sentences joined by "whereas" work just as well.

### Add an example if it is quick
A one-line example, such as 17 / 5 is 3 and 17 % 5 is 2, can rescue a point whose wording comes out vague.

## = vs ==, while vs do while, and the other operator and loop pairs

The revision chapter supplies the most difference questions, because it holds the most look-alike pairs. These fifteen cover operators, conversion, input, Math and loops.

- Basis | First | Second

- 1. = and ==

- Job | = assigns: it stores the right-hand value in the variable on its left | == compares: it tests whether two values are equal

- Result | The assigned value, of the variable's type | A boolean, true or false

- 2. / and %

- Gives | The quotient of a division | The remainder of a division

- Example | 17 / 5 is 3 (int division) | 17 % 5 is 2

- 3. Prefix (++a) and postfix (a++)

- Order | Changes the value first, then uses it | Uses the value first, then changes it

- Example | q = 3; ++q * 2 is 8 | p = 3; p++ * 2 is 6

- 4. while and do-while

- Test | Before the body: entry controlled | After the body: exit controlled

- Minimum runs | Zero, if the test is false at the start | One, always

- 5. for and while

- Used when | The number of passes is known in advance | The loop runs until a condition changes

- Layout | Start, test and update in one header | Start before the loop, update inside the body

- 6. break and continue

- Effect | Leaves the loop (or switch) at once | Skips the rest of this pass only

- Next step | The statement after the loop runs | The loop moves to its next pass

- 7. if-else and switch

- Tests | Any boolean condition, including ranges | Equality with fixed case values only

- Types | Works with any type, double included | int, char or String (not double or boolean)

- 8. Implicit and explicit type conversion

- Done by | Java, automatically | The programmer, with a cast such as (int)

- Direction | Smaller to larger type, so nothing is lost | Usually larger to smaller, so data may be lost

- 9. print() and println()

- Cursor after | Stays on the same line | Moves to the next line

- Empty call | print() with no argument does not compile | println() alone prints a blank line

- 10. next() and nextLine() of Scanner

- Reads | One word, up to a space | The whole line, spaces included

- Use for | A single token such as a name with no spaces | A full sentence

- 11. Math.ceil() and Math.floor()

- Rounds to | The smallest whole number not less than the value | The largest whole number not greater than the value

- Example | Math.ceil(-4.2) is -4.0 | Math.floor(-4.2) is -5.0

- 12. Character literal and String literal

- Written in | Single quotes: 'A' | Double quotes: "A"

- Holds | Exactly one character, type char | Any number of characters, type String

- 13. Keyword and identifier

- Meaning | A reserved word with a fixed meaning to Java | A name the programmer chooses

- Example | class, int, while | total, marks, findMax

- 14. && and ||

- True when | Both conditions are true | At least one condition is true

- Skips the right side when | The left side is false | The left side is true

- 15. Syntax error and logical error

- Found by | The compiler, before the program runs | Only by checking the output

- Example | A missing semicolon | Using > where >= was needed

Precedence and more operator traps are on [operators in Java for ICSE Class 10](/icse-class-10-operators-in-java), and loop conversions on [loop programs in Java](/icse-class-10-loop-programs-java).

## Call by value vs call by reference, pure vs impure method, and the class pairs

Chapters 2 to 6 give seventeen pairs. Several are set nearly every year in some form, so the wording below is worth learning closely.

- Basis | First | Second

- 16. Class and object

- What it is | A blueprint, a user-defined data type | An instance made from that blueprint

- Memory | No memory for data until objects are made | Takes memory for its own data members when made with new

- 17. Primitive and composite data types

- Built from | Built into Java | Made from primitive and other types

- Example and size | int, char, double, with fixed sizes | String, arrays, classes, sizes vary

- 18. Call by value and call by reference

- What is passed | A copy of the value (primitives) | A reference to the same object (arrays, objects)

- Effect on caller | Changes inside the method do not reach the caller | Changes to the object inside the method are seen by the caller

- 19. Pure and impure method

- Changes state | No: it changes nothing outside itself | Yes: it changes a data member or a passed object

- Same input | Always gives the same result | Its effect may differ as the state changes

- 20. Actual and formal parameters

- Found in | The method call | The method definition

- Example | 5 in area(5) | s in int area(int s)

- 21. Static and non-static method

- Called by | The class name, with no object needed | An object of the class

- Can use | Only static members directly | Both static and instance members

- 22. void method and method with a return type

- Returns | Nothing | One value of the stated type

- Call used as | A statement on its own | A value inside an expression or assignment

- 23. Constructor and method

- Name and return type | Same name as the class, no return type | Any name, must declare a return type or void

- How it runs | Automatically, when new makes an object | Only when called by name

- 24. Default and parameterised constructor

- Parameters | None | One or more

- Initial values | Fixed or default values for every object | Values passed in, so each object can differ

- 25. Autoboxing and unboxing

- Converts | A primitive into its wrapper object | A wrapper object back into its primitive

- Example | Integer k = 25; | int j = k;

- 26. Primitive type and wrapper class

- Nature | A plain value such as int | An object such as Integer holding that value

- Methods | Has none | Has methods such as parseInt and toString

- 27. Integer.parseInt() and Integer.valueOf()

- Returns | A primitive int | An Integer object

- Example | int a = Integer.parseInt("15"); | Integer b = Integer.valueOf("15");

- 28. Character.isUpperCase() and Character.toUpperCase()

- Returns | boolean: is it a capital? | char: the capital form

- Example | isUpperCase('k') is false | toUpperCase('k') is 'K'

- 29. private and public

- Visible in | Its own class only | Every class

- Typical use | Data members, to hide them | Methods that other classes must call

- 30. Local and instance variable

- Declared | Inside a method or block | Inside the class, outside every method

- Lifetime | Only while the method or block runs | As long as the object exists

- 31. Instance and class (static) variable

- Copies | One per object | One shared by every object

- Declared with | No static keyword | The static keyword

- 32. Encapsulation and abstraction

- Means | Binding data with its methods and hiding the data | Showing only essential features, hiding details of how

- Achieved by | A class with private data and public methods | Exposing what an object does, not how it does it

These chapters have their own pages: [user-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [constructors](/icse-class-10-constructors-questions), [wrapper and library classes](/icse-class-10-wrapper-and-library-classes) and [encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers).

## Linear vs binary search, bubble vs selection sort, equals() vs ==

The last two chapters give eight pairs. Linear against binary search is the one most often set; equals() against == is the one most often answered backwards.

- Basis | First | Second

- 33. Linear search and binary search

- Array needed | Any order | Sorted order only

- Method | Checks elements one by one from the start | Checks the middle and discards half each step, so far fewer checks on a large array

- 34. Bubble sort and selection sort

- Compares | Neighbouring elements, swapping when out of order | The current position with the smallest (or largest) of the rest

- Swaps per pass | Possibly many | At most one

- 35. length and length()

- Belongs to | An array: a field, no brackets | A String: a method, with brackets

- Example | arr.length | s.length()

- 36. Single and double dimensional array

- Index | One subscript: a[i] | Two subscripts: m[r][c]

- Shape | A list | A table of rows and columns

- 37. equals() and == for Strings

- Compares | The characters in the two Strings | Whether both names refer to the same object

- Use | To test text for equality | Not for text; it can say false for equal text

- 38. equals() and compareTo()

- Returns | boolean | int: zero, negative or positive

- Tells you | Only whether they are equal | Their dictionary order as well

- 39. equals() and equalsIgnoreCase()

- Case | Matters: "Java" and "java" differ | Ignored: "Java" and "java" match

- Same in both | Return type is boolean | Return type is boolean

- 40. indexOf() and charAt()

- Given | A character or substring | A position (index)

- Returns | An int position, or -1 if absent | The char at that position

The programs behind these pairs are on [sorting and searching programs](/icse-class-10-sorting-and-searching-programs) and [ICSE Class 10 string programs](/icse-class-10-string-programs).

## Four differences proved in Java code

When you cannot remember which side is which, a three-line program settles it. Each fragment below was run in Java 21, and the output is the proof.

```
int a = 4;
boolean same = (a == 5);   // compares
a = 5;                     // assigns
System.out.println(same + " " + a);

int w = 10, d = 10, wc = 0, dc = 0;
while (w < 5) { wc++; w++; }
do { dc++; d++; } while (d < 5);
System.out.println(wc + " " + dc);

// Output: false 5
//         0 1
```

```
static void bump(int x) { x = x + 10; }
static void bumpAll(int[] arr) {
    for (int i = 0; i < arr.length; i++) arr[i] += 10;
}
// in main:
int n = 1;
int[] m = {1, 2};
bump(n);
bumpAll(m);
System.out.println(n + " " + m[0] + " " + m[1]);

String s1 = "exam";
String s2 = new String("exam");
System.out.println((s1 == s2) + " " + s1.equals(s2));

// Output: 1 11 12
//         false true
```

## Writing pairs against the clock in the mini batch

Knowing a difference and writing it in two matched points in under two minutes are separate skills. The class trains the second.

-
**Five pairs, ten minutes** At the Tuesday 5:30 PM IST class, students write five pairs from the chapter in hand, two points each, on a timer.

-
**Marked on screen** Answers are shown together and each point is marked as an examiner would: matched or one-sided, precise or vague.

-
**Proved in BlueJ** Any pair the group argues about is settled at the Wednesday 8:00 PM IST class by running a short program, like the two above.

-
**Back in mock papers** From December the same pairs appear inside full two-hour papers, where the time pressure is real.

Other two-mark shapes, outputs and error spotting, are practised on [ICSE Computer Applications important questions](/icse-class-10-computer-applications-important-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): All eight chapters in a mini batch of up to six, with difference pairs written to time and marked on screen every Tuesday.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where compare and contrast questions return with more depth.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who wants to measure why one search or sort is faster than another.

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

**How many points should I write in an ICSE difference between question?** Two, for a two-mark question, and each point should cover both sides of the pair on the same basis. Writing three or four points does not earn extra marks, and it uses time Section A cannot spare. If the question asks for one difference, give one matched point.

**Should I write differences in a table in the ICSE exam?** A table with three columns, the basis and the two items, is the clearest way and is quick to mark. Two sentences joined by "whereas" are equally acceptable. What matters is that each point compares the same feature of both items, not a different feature of each.

**What is the difference between linear search and binary search?** Linear search checks each element in turn and works on an array in any order. Binary search needs a sorted array; it checks the middle element and discards half of the remaining array at each step. On a large sorted array binary search needs far fewer comparisons.

**What is the difference between call by value and call by reference in Java?** In call by value a copy of a primitive is passed, so changes inside the method do not affect the caller's variable. In call by reference, as the ICSE syllabus describes it for arrays and objects, the method receives a reference to the same object, so changes it makes to that object are seen by the caller.

**What is the difference between pure and impure methods?** A pure method returns a value and changes nothing outside itself, so the same inputs always give the same result. An impure method changes the state of something outside itself, such as a data member of the object or an array it was passed.

**What is the difference between = and == in Java?** The single = is the assignment operator: it stores a value in a variable. The double == is a relational operator: it compares two values and gives true or false. Writing = inside an if condition with an int is a compile error in Java.

**What is the difference between while and do while loop?** while is entry controlled: it tests the condition before the body, so the body may run zero times. do-while is exit controlled: it tests after the body, so the body always runs at least once. do-while also ends with a semicolon after its condition.

**What is the difference between equals() and == for Strings?** equals() compares the characters of two Strings and returns true when the text matches. == compares whether two names point to the same object in memory, so two Strings with the same text can still give false. Always use equals() to compare text.

**Are difference questions asked every year in ICSE Computer Applications?** Two-mark difference questions appear regularly in Section A, though the exact pairs change from paper to paper. That is why this page covers every likely pair from the 2027 syllabus rather than a short list. Learn the two points for each and any pair the paper picks is covered.

**Do you practise difference questions in live classes?** Yes. In the mini batch students write five pairs against a timer every Tuesday at 5:30 PM IST, and each point is marked on screen. Any disputed pair is settled in BlueJ on Wednesday at 8:00 PM IST. Students abroad, or with clashing timings, do the same one to one.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-computer-difference-between-questions*
