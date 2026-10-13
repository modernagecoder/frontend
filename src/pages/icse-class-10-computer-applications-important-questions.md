---
title: "ICSE Computer Applications Important Questions 2027, Unit-Wise"
description: "ICSE Class 10 Computer Applications (Java) important questions 2027: outputs, string, array and class programs, unit by unit, practised in live classes."
canonical: https://learn.modernagecoders.com/icse-class-10-computer-applications-important-questions
source: src/pages/icse-class-10-computer-applications-important-questions.html
updated: 2026-10-13
---

> The most important questions for ICSE Class 10 Computer Applications in 2027 fall into two groups. Section A, worth 40 compulsory marks, asks mainly for output tracing, loop counts, String and Character method results, wrapper class conversions, errors to find and single Java statements. Section B, worth 60 marks, gives six programs from six families, of which students write four: a class written to a specification, searching or sorting on an array, a string program, a double dimensional array, a number-property program and method overloading. Modern Age Coders practises each shape live, checked in BlueJ and marked like the board, in a Tuesday and Wednesday evening mini batch in India or personalised one to one.

## Output questions, answered and checked by running the code

      Every output below was compiled and run in Java before it went on this page. Try each one on paper first, then compare. The ones you get wrong show which rule to revise.

        - Code | Output | The rule it tests

          - String s = "COMPUTER";System.out.println(s.indexOf('U') + s.lastIndexOf('E')); | 10 | Indices start at 0; two int results are added, not joined

          - System.out.println(s.substring(3, 6).toLowerCase()); | put | The end index is excluded: characters 3, 4 and 5

          - System.out.println("APPLE".compareTo("APRIL")); | -2 | The first differing characters, P and R, are subtracted

          - System.out.println(Integer.parseInt("12") + Double.parseDouble("2.5")); | 14.5 | Wrapper conversion, then int plus double gives double

          - System.out.println((int) Character.toUpperCase('b')); | 66 | The cast prints the character code of B

          - System.out.println(Math.round(-2.5) + " " + Math.ceil(-4.2)); | -2 -4.0 | round goes towards positive infinity at .5; ceil returns a double

          - int i = 1, n = 0; while (i < 50) { i *= 3; n++; }System.out.println(n + " " + i); | 4 81 | Count passes with a step table: 3, 9, 27, 81

          - char c = 'A'; c += 2; System.out.println(c); | C | Compound assignment keeps the char type

          - System.out.println("ICSE".charAt(1) + "ICSE".charAt(2)); | 150 | char plus char is int arithmetic: 67 + 83

          - System.out.println("" + "ICSE".charAt(1) + "ICSE".charAt(2)); | CS | A String on the left turns every later + into joining

      The last two rows show why tracing beats guessing. The code looks almost identical, but the answers are 150 and CS.
      In the 2025 specimen, most Section A questions are labelled Understanding or Analysis rather than Recall, and
      this is what that means in practice. On Tuesdays the mini batch works through fresh fragments like these against
      a timer, then runs them in BlueJ on the shared screen, so every wrong answer is traced back to the rule it broke.

## Important questions for every unit of the 2027 syllabus

      The syllabus for 2027 is the same as for 2026. Section A also draws on Class 9 topics, so the first list is revision. Recursion is not in the syllabus, and nor are StringBuffer or insertion sort.

### Class 9 revision and classes

          - Name the OOP principle shown by a scenario: encapsulation, abstraction, inheritance or polymorphism.

          - Size in bytes of char, int, long and double; the default values of boolean and double.

          - Precedence: which operator is evaluated first in an expression such as a + b % c * d - e?

          - Write the Java expression for a formula with a square root or a power.

          - Rewrite an if-else ladder with switch, or a switch with if-else, and explain fall-through.

          - Convert a for loop to a while loop and give the number of iterations.

          - Nested loops: trace a pattern, or write the loops that print one.

          - Class versus object, and primitive versus composite data types, with an example of each.

### User-defined methods and constructors

          - Pure versus impure methods; static versus non-static methods.

          - Call by value versus call by reference, with the definition the syllabus asks for.

          - Actual versus formal parameters; write a method prototype from a description.

          - What makes two methods overloaded? Which call goes to which version?

          - Constructor versus method: three differences.

          - Default versus parameterised constructor; name the constructor type in a code fragment.

          - Constructor overloading: predict what an object holds after each constructor runs.

### Library classes and encapsulation

          - Define autoboxing and unboxing, with a one-line example of each.

          - Outputs of parseInt, parseDouble, valueOf and the Character methods.

          - Check a character with isLetter, isDigit, isWhitespace or isUpperCase.

          - Why does Integer need no import? (It is in java.lang.)

          - Private, protected and public: who can see each member?

          - Label the variables in a class as class, instance, argument or local variables.

### Arrays and strings

          - Declare and initialise a single and a double dimensional array; give the index of the last element.

          - Linear search versus binary search; the condition binary search needs.

          - Trace one pass of bubble sort or selection sort on five numbers.

          - Position of an element in a 2D array, and the value of an expression using two elements.

          - The length of an array versus length() of a String.

          - Outputs of trim, charAt, indexOf, replace, substring, equals and compareTo.

          - equals versus equalsIgnoreCase, and == versus equals for Strings.

          - Sort a String array alphabetically with bubble or selection sort.

## Six program families, with the programs worth practising in each

      Section B offers six programs and students write four. The 2025 specimen gives one from each family below, so a student who keeps all six ready has the full choice on the day.

### A class to a specification
A named class with member variables, an accept() method using Scanner, a calculation from a rate or tariff table, a display() in a set format and a main that creates the object. Practise electricity bills, interest by time slabs, discounts by purchase amount and parking charges.

### Searching and sorting
Binary search on a given sorted list, linear search with a message for found or not found, and bubble or selection sort in ascending or descending order. All of these use single dimensional arrays only, as the syllabus specifies.

### String programs
Change case, replace vowels or consonants by a rule, count words or a given character, check a palindrome word, convert to Pig Latin, print the characters in alphabetical order, and find the longest word. Use only the String and Character methods the syllabus lists.

### Double dimensional arrays
Accept a matrix, display it in matrix format, and find the sum of each row, each column, and the left and right diagonals. The 2027 syllabus covers only these 2D tasks, so sorting a 2D array is not on the paper.

### Number programs
Check a defined special number from its digits: palindrome numbers, Armstrong-style digit power sums, digit sum against digit count, perfect numbers, and Niven numbers. Digit extraction with % 10 and / 10 is the core skill here.

### Method overloading
Three methods with the same name and different parameter lists: one prints a nested-loop pattern, one applies a condition, and one evaluates a formula. Students must decide which version each call in main reaches.

      Complete practice sets for each family, with programs set at increasing difficulty, are on
      [ICSE Java programs practice](/icse-class-10-java-programs-practice). How the families
      appeared in the latest specimen, and the paper's full design, are on
      [ICSE Computer Applications exam date and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern).

## A double dimensional array program, written the weak way and the full-marks way

      Write a program to accept a 3 x 3 integer array, display it in matrix format, and print the sums of its left and right diagonals.

```
int a[][] = new int[3][3];
// input loop ...
int l = 0, r = 0;
for (int i = 0; i < 3; i++) {
    l += a[i][i];
    r += a[i][3 - i];
}
System.out.println(l);
System.out.println(r);

# a[i][3 - i] is out of bounds
# when i is 0: the program stops.
# No matrix display, unlabelled
# output, no variable description.
```

```
import java.util.Scanner;
class Diagonal {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int[][] a = new int[3][3];
    System.out.println("Enter 9 numbers:");
    for (int i = 0; i < 3; i++)
      for (int j = 0; j < 3; j++)
        a[i][j] = sc.nextInt();
    int left = 0, right = 0;
    for (int i = 0; i < 3; i++) {
      left += a[i][i];
      right += a[i][2 - i];
    }
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++)
        System.out.print(a[i][j] + "\t");
      System.out.println();
    }
    System.out.println("Left diagonal sum = " + left);
    System.out.println("Right diagonal sum = " + right);
  }
}
```

        - Variable | Data type | Purpose

          - a | int[][] | Stores the 3 x 3 matrix entered by the user

          - i, j | int | Row and column counters for input, sums and display

          - left | int | Sum of the left diagonal, elements where row equals column

          - right | int | Sum of the right diagonal, elements where column is 2 minus row

          - sc | Scanner | Reads the nine numbers from the keyboard

      The variable description above uses the name, data type and purpose layout that the ICSE syllabus sets for the
      internal assessment, and Section B expects the same with every program. Writing it takes two minutes and protects
      marks in both halves of the subject. In the Wednesday class, programs like this are written in BlueJ, run with a
      student's own test input, and marked part by part, covering input, logic, the output format the question asked for,
      and the variable description.

## Eight habits that cost marks, and the fix for each

        - Using BufferedReader. The paper rules it out for Section B, so use Scanner every time.

        - Leaving out the variable description. Write the three-column table for every program, even in practice.

        - Ignoring the output format. If the question shows labelled output or a matrix layout, match it exactly.

        - Answering a nearby question. Underline what is to be accepted and what is to be printed before writing code.

        - Off-by-one indices. The last index is length minus one, in arrays and in Strings.

        - Using == to compare Strings. Use equals or equalsIgnoreCase.

        - Integer division surprises. 7 / 2 is 3; write 7.0 / 2 when a decimal is wanted.

        - Going beyond the syllabus. Recursion, StringBuffer and 2D sorting earn nothing extra and add risk.

      These are the slips that turn up again and again when Java answers are marked. In the mini batch each student's
      repeated slips are pointed out in every review, so the same mistake is fixed once rather than made in every
      paper.

## A question bank needs someone to mark it

      A student practising alone checks whether the program ran. The examiner checks the output format, the variable description and whether the answer fits the question. Live practice teaches the second kind of checking.

### Tuesday: shapes against a timer
A set of Section A shapes is written in about a minute per mark, then each answer is run in BlueJ on the shared screen. The trace table that got it right is set beside the shortcut that got it wrong.

### Wednesday: one family in depth
One program family is written in BlueJ, run with tricky test input such as an empty string, a single-digit number or a repeated value, and marked part by part. Each program then goes into the lab file with its description.

### Doubts settled in the moment
Any student can stop the class, share their BlueJ window and have their code read line by line. In a group of four or five, there is time to answer every student's doubt in every class.

      From December the same shapes appear in full two-hour papers. See [the specimen paper and mock tests page](/icse-class-10-computer-applications-specimen-paper-and-mock-tests),
      and for the final revision plan, [ICSE Computer Applications board exam preparation](/icse-class-10-computer-applications-board-exam-preparation).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch: Section A shapes on Tuesdays, Section B program families on Wednesdays, every answer checked in BlueJ.
- [Class 10 Maths board prep](/courses/cbse-class-10-maths-board-exam-prep-course): Board maths in small live classes, with timed papers and every lost mark worked through again.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who finishes the ICSE searching and sorting programs early and wants the ideas behind them in depth.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, four or five students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

          - India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

          - United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

          - Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

          - SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**What are the most important questions for ICSE Computer Applications 2027?** In Section A: output tracing, loop counts, String and Character method results, wrapper class conversions, finding errors and writing single Java statements. In Section B: a class written to a specification, searching and sorting on arrays, string programs, double dimensional array sums, number-property programs and method overloading. Together they cover nearly every mark on the paper.

**Which chapter is most important in ICSE Class 10 Computer Applications?** String handling and arrays are the most important for Section B, because they supply at least two of the six programs and many Section A outputs. User-defined methods and constructors come next, through the class and overloading programs. Class 9 topics such as operators and loops still appear throughout Section A.

**Are output questions important in ICSE Computer Applications?** Yes. Section A is 40 compulsory marks, and much of it asks students to predict outputs, count loop iterations or find what a String method returns. These questions punish guessing, so we teach a step-table method and check every answer by running the code in BlueJ.

**Which programs are important for ICSE Class 10 Section B?** Electricity bill or interest classes written to a specification, binary and linear search, bubble and selection sort, palindrome and Pig Latin string programs, word and character counts, 2D array row, column and diagonal sums, special number checks such as palindrome, perfect and Niven numbers, and method overloading with a pattern.

**Is recursion in the ICSE 2027 Computer Applications syllabus?** No. The 2027 syllabus does not include recursion. It also limits sorting and searching to single dimensional arrays, and covers double dimensional arrays only for input, row, column and diagonal sums, and display. Practising outside the syllabus wastes time in the board year.

**Can we use BufferedReader in ICSE Section B?** No. The specimen paper says BufferedReader and DataInputStream should not be used in Section B programs. Use the Scanner class for input, as the specimen questions themselves ask.

**Is the variable description compulsory?** Section B asks for programs written with variable descriptions or mnemonic codes so the logic is clear, and the internal assessment marks the variable description as one of its four criteria, out of ten. Leaving it out risks marks in both halves of the subject, so our students write one for every program.

**Do you give a list of important questions or teach them?** Both. Students get the shapes and program families unit by unit, but the value is in the live practice: questions written against a timer, outputs checked in BlueJ, programs marked part by part like the board, and doubts answered on the shared screen in every class.

**Can students abroad practise these questions with you?** Yes, one to one. ICSE schools in the UAE, Singapore, Indonesia and Thailand follow the same syllabus. Outside India we teach Computer Applications personalised one to one, at a local time after school, with the same question practice, programs and marking.

**Is question practice charged separately?** No. Question practice, program families and mock papers are part of ordinary teaching, included in the monthly fee for the mini batch or personalised one to one, shown on this page in your own currency. There is no admission fee, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

Related pages: /cbse-class-10-ai-classes-online, /cbse-class-10-ai-syllabus-explained, /python-for-cbse-class-10-ai, /cbse-class-10-ai-board-exam-preparation, /cbse-class-10-ai-project-and-practical-file, /cbse-class-10-ai-exam-date-and-paper-pattern, /cbse-class-10-ai-sample-paper-and-mock-tests, /cbse-class-10-ai-important-questions, /cbse-class-10-ai-employability-skills-part-a, /cbse-class-10-ai-online-classes-gulf-and-abroad, /icse-class-10-java-classes-online, /icse-class-10-computer-applications-syllabus-explained, /icse-class-10-java-programs-practice, /icse-class-10-bluej-java-coaching, /icse-class-10-computer-applications-board-exam-preparation, /icse-class-10-computer-applications-exam-date-and-paper-pattern, /icse-class-10-computer-applications-specimen-paper-and-mock-tests, /icse-class-10-computer-applications-project-and-internal-assessment, /icse-class-10-computer-applications-classes-gulf-and-abroad.

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-computer-applications-important-questions*
