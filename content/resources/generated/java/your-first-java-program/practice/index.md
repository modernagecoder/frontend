---
title: "Practice: Your First Java Program"
description: "56 practice problems for Your First Java Program in Java"
slug: your-first-java-program-practice
canonical: https://learn.modernagecoders.com/resources/java/your-first-java-program/practice/
category: "Java"
---
# Practice: Your First Java Program

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

*Hint:* println prints the string and moves to the next line.

**Answer:** `Hello, Java!`

`System.out.println` prints the string `"Hello, Java!"` to the console followed by a newline character. This is the most basic Java output statement.

### Q2. [Easy] What is the output?

```
System.out.print("Hello ");
System.out.print("World");
System.out.println("!");
```

*Hint:* print() does not add a newline; println() does.

**Answer:** `Hello World!`

`print` outputs text without a newline, so "Hello " and "World" appear on the same line. `println` outputs "!" and then moves to the next line. The combined output is `Hello World!` on a single line.

### Q3. [Easy] What is the output?

```
System.out.println("First");
System.out.println("Second");
System.out.println("Third");
```

*Hint:* Each println starts a new line.

**Answer:** `First`
`Second`
`Third`

Each `println` call prints its argument and then moves the cursor to the next line. So "First", "Second", and "Third" each appear on separate lines.

### Q4. [Easy] What is the output?

```
System.out.println("Hello\nWorld");
```

*Hint:* \n is the escape sequence for a newline.

**Answer:** `Hello`
`World`

The `\n` escape sequence inserts a newline character within the string. So "Hello" is printed, then the cursor moves to the next line, then "World" is printed. A single `println` call can produce multiple lines if the string contains `\n`.

### Q5. [Easy] What is the output?

```
System.out.println("Name\tAge");
System.out.println("Aarav\t20");
```

*Hint:* \t inserts a tab character for alignment.

**Answer:** `Name    Age`
`Aarav   20`

The `\t` escape sequence inserts a horizontal tab character, which aligns the text into columns. This is a simple way to create formatted tabular output.

### Q6. [Medium] What is the output?

```
System.out.println("Score: " + 10 + 20);
System.out.println(10 + 20 + " points");
```

*Hint:* String concatenation happens left to right. Once a String is encountered, + becomes concatenation.

**Answer:** `Score: 1020`
`30 points`

Line 1: `"Score: " + 10` produces `"Score: 10"` (concatenation), then `"Score: 10" + 20` produces `"Score: 1020"` (still concatenation). Line 2: `10 + 20` produces `30` (arithmetic, since no String yet), then `30 + " points"` produces `"30 points"` (concatenation). The key rule: once a String appears in a left-to-right + chain, everything after becomes concatenation.

### Q7. [Medium] What is the output?

```
System.out.println("Sum: " + (10 + 20));
System.out.println("Product: " + (5 * 3));
```

*Hint:* Parentheses force arithmetic evaluation before concatenation.

**Answer:** `Sum: 30`
`Product: 15`

The parentheses force `10 + 20` to be evaluated as arithmetic (`30`) before concatenation. Similarly, `5 * 3` evaluates to `15` before being concatenated with the string. Always use parentheses when mixing arithmetic and string concatenation.

### Q8. [Medium] What is the output?

```
System.out.println("He said, \"Hello!\"");
```

*Hint:* \" is the escape sequence for a double quote inside a string.

**Answer:** `He said, "Hello!"`

The `\"` escape sequence produces a literal double quote character in the output. Without the backslash, the compiler would think the string ends at the second double quote, causing a syntax error.

### Q9. [Medium] Explain what each keyword in `public static void main(String[] args)` means and why it is required.

*Hint:* Each keyword serves a specific purpose for the JVM to find and execute the method.

**Answer:** `public`: accessible from outside the class (JVM needs to call it). `static`: belongs to the class, not an instance (JVM calls it without creating an object). `void`: returns nothing. `main`: the specific name the JVM looks for. `String[] args`: array of command-line arguments.

If any keyword is changed, the JVM will not recognize the method as the entry point. Removing `public` makes it inaccessible to the JVM. Removing `static` means the JVM would need to create an object first. Changing `void` to `int` changes the signature. Renaming `main` to anything else means the JVM cannot find the entry point.

### Q10. [Medium] What is the output?

```
System.out.printf("%s is %d years old and has a GPA of %.1f%n", "Priya", 21, 9.2567);
```

*Hint:* %s for String, %d for integer, %.1f for float with 1 decimal place, %n for newline.

**Answer:** `Priya is 21 years old and has a GPA of 9.3`

`%s` is replaced by "Priya", `%d` by 21, `%.1f` by 9.2567 rounded to 1 decimal place (9.3). `%n` adds a platform-independent newline. Note that `%.1f` rounds the value, it does not truncate.

### Q11. [Medium] What is the difference between `System.out.println()` with no arguments and `System.out.print("\n")`?

*Hint:* Both produce a newline, but there is a subtle platform difference.

**Answer:** Both produce a newline on the console. `System.out.println()` outputs the platform-specific line separator (e.g., `\r\n` on Windows, `\n` on Linux). `System.out.print("\n")` always outputs exactly `\n` regardless of platform. For console output, the difference is negligible.

In practice, the difference rarely matters for console output. But when writing to files, the platform-specific line separator from `println` may produce different results on different operating systems. For cross-platform file output, use `System.lineSeparator()` or `%n` in printf.

### Q12. [Hard] What is the output?

```
System.out.println(1 + 2 + "3" + 4 + 5);
```

*Hint:* Evaluate left to right. Addition until a String is encountered, then concatenation.

**Answer:** `3345`

Left to right: `1 + 2 = 3` (int addition). `3 + "3" = "33"` (String concatenation starts). `"33" + 4 = "334"` (concatenation continues). `"334" + 5 = "3345"`. Once the String `"3"` is encountered, all subsequent `+` operations become string concatenation.

### Q13. [Hard] What is the output?

```
System.out.println("" + 1 + 2 + 3);
System.out.println(1 + 2 + 3 + "");
```

*Hint:* An empty string at the start forces concatenation from the beginning.

**Answer:** `123`
`6`

Line 1: `"" + 1` starts concatenation immediately, producing `"1"`, then `"12"`, then `"123"`. Line 2: `1 + 2 + 3 = 6` (all integer addition first), then `6 + "" = "6"`. The position of the empty string determines whether arithmetic or concatenation happens first.

### Q14. [Hard] Will this code compile? If not, why?

```
public class test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

The file is named test.java.

*Hint:* Think about Java naming conventions vs compiler requirements.

**Answer:** Yes, this code **will compile and run** if the file is named `test.java` (lowercase). The file name must match the class name, and both are `test` here. However, it violates Java naming conventions which require class names to use PascalCase (should be `Test`). It compiles but is considered bad practice.

The Java compiler only requires that the file name matches the public class name. It does not enforce naming conventions. So `test.java` with `public class test` compiles fine. But in any professional or academic setting, this would be marked as incorrect style. Always use PascalCase for class names.

### Q15. [Hard] What are the three valid variations of the main method's parameter?

*Hint:* There are three ways to declare an array parameter in Java.

**Answer:** The three valid variations are: (1) `String[] args`, (2) `String args[]`, and (3) `String... args` (varargs). All three are accepted by the JVM as valid main method signatures. The parameter name can be anything (not just `args`); for example, `String[] params` is also valid.

The JVM looks for a main method that is public, static, void, and takes a String array parameter. Whether you write the brackets before or after the parameter name, or use varargs syntax, makes no difference. The name of the parameter is also irrelevant. Only the type (`String[]`) matters.

### Q16. [Hard] What is the output?

```
System.out.printf("%-10s|%5d|%8.2f%n", "Aarav", 95, 87.5);
System.out.printf("%-10s|%5d|%8.2f%n", "Priya", 100, 92.75);
```

*Hint:* %-10s left-aligns in 10 chars. %5d right-aligns int in 5 chars. %8.2f right-aligns float in 8 chars with 2 decimals.

**Answer:** `Aarav     |   95|   87.50`
`Priya     |  100|   92.75`

`%-10s`: left-aligned string in a 10-character field (Aarav gets 5 trailing spaces). `%5d`: right-aligned integer in a 5-character field. `%8.2f`: right-aligned decimal in an 8-character field with 2 decimal places. `%n` adds a newline. This creates a nicely aligned table.

## Mixed Questions

### Q1. [Easy] Write a Java program that prints your name, your college, and your favorite programming language on three separate lines.

*Hint:* Use three System.out.println statements.

**Answer:** ```
public class AboutMe {
    public static void main(String[] args) {
        System.out.println("Name: Aarav Sharma");
        System.out.println("College: IIT Delhi");
        System.out.println("Favorite Language: Java");
    }
}
```

Each `println` call outputs its string argument followed by a newline. The class name `AboutMe` must match the file name `AboutMe.java`.

### Q2. [Easy] Write a Java program that prints a rectangle made of asterisks, 5 wide and 3 tall.

*Hint:* Use println for each row. Each row has 5 asterisks.

**Answer:** ```
public class Rectangle {
    public static void main(String[] args) {
        System.out.println("*****");
        System.out.println("*****");
        System.out.println("*****");
    }
}
```

Each `println` outputs a row of 5 asterisks followed by a newline. Three rows create a 5x3 rectangle. Later chapters will show how to do this with loops.

### Q3. [Medium] What is the output?

```
int x = 10;
int y = 20;
System.out.println("x + y = " + x + y);
System.out.println("x + y = " + (x + y));
```

*Hint:* Without parentheses, + becomes concatenation after the string.

**Answer:** `x + y = 1020`
`x + y = 30`

Line 1: `"x + y = " + x` concatenates to `"x + y = 10"`, then `+ y` concatenates to `"x + y = 1020"`. Line 2: `(x + y)` evaluates to `30` first (parentheses force arithmetic), then concatenates to `"x + y = 30"`. This is a classic interview question.

### Q4. [Medium] Write a Java program that prints a student's information using printf with aligned formatting: Name (left-aligned, 15 chars), Age (right-aligned, 5 chars), and GPA (right-aligned, 8 chars, 2 decimal places).

*Hint:* Use %-15s, %5d, and %8.2f format specifiers.

**Answer:** ```
public class StudentTable {
    public static void main(String[] args) {
        System.out.printf("%-15s %5s %8s%n", "Name", "Age", "GPA");
        System.out.printf("%-15s %5d %8.2f%n", "Aarav Sharma", 20, 8.75);
        System.out.printf("%-15s %5d %8.2f%n", "Priya Patel", 21, 9.10);
        System.out.printf("%-15s %5d %8.2f%n", "Rohan Kumar", 19, 7.85);
    }
}
```

`%-15s` left-aligns the name in a 15-character field. `%5d` right-aligns the age in a 5-character field. `%8.2f` right-aligns the GPA in an 8-character field with 2 decimal places. The header row uses `%s` for all columns to print column labels.

### Q5. [Medium] What is the output?

```
System.out.println("C:\\Users\\Aarav\\Documents");
System.out.println("Line1\nLine2\nLine3");
System.out.println("Tab1\tTab2\tTab3");
```

*Hint:* \\ produces a single backslash, \n a newline, \t a tab.

**Answer:** `C:\Users\Aarav\Documents`
`Line1`
`Line2`
`Line3`
`Tab1	Tab2	Tab3`

`\\` produces a literal backslash, so four backslashes in the source produce two in the output. `\n` creates line breaks within the string. `\t` inserts tab characters for alignment.

### Q6. [Medium] What is the difference between a Javadoc comment (/** */) and a multi-line comment (/* */)? When would you use each?

*Hint:* One generates documentation, the other is just for code explanations.

**Answer:** A **multi-line comment** (`/* */`) is for internal code explanations and is ignored by all tools. A **Javadoc comment** (`/** */`) is used to document classes, methods, and fields, and can be processed by the `javadoc` tool to generate HTML API documentation. Javadoc comments support special tags like `@param`, `@return`, `@author`, and `@throws`.

Use Javadoc comments on public classes and methods that others will use. Use multi-line comments for implementation details within a method. Javadoc is part of professional Java development and is used extensively in open-source projects and enterprise codebases.

### Q7. [Hard] What is the output?

```
char ch = 'A';
System.out.println(ch + 1);
System.out.println("" + ch + 1);
System.out.println(ch + "" + 1);
```

*Hint:* char is a numeric type in Java. Adding an int to a char gives an int. But once a String appears, concatenation takes over.

**Answer:** `66`
`A1`
`A1`

Line 1: `ch + 1` is `'A' + 1 = 65 + 1 = 66` (char is promoted to int, arithmetic). Line 2: `"" + ch` is `"A"` (String + char = concatenation), then `"A" + 1 = "A1"`. Line 3: `ch + ""` is `"A"` (char + String = concatenation), then `"A" + 1 = "A1"`. The empty string forces concatenation from that point onward.

### Q8. [Hard] Write a Java program that accepts a name and age as command-line arguments and prints a greeting. If no arguments are provided, print a usage message.

*Hint:* Check args.length before accessing args[0] and args[1].

**Answer:** ```
public class Greet {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java Greet  ");
        } else {
            System.out.println("Hello, " + args[0] + "!");
            System.out.println("You are " + args[1] + " years old.");
        }
    }
}
```

Run: java Greet Aarav 20

Command-line arguments are stored in the `args` array. `args.length` tells us how many were provided. We check if at least 2 arguments are present before accessing them. All arguments are Strings, so `args[1]` is "20" (the string), not the integer 20.

### Q9. [Hard] What is the output?

```
System.out.println('A' + 'B');
System.out.println("" + 'A' + 'B');
System.out.println('A' + "" + 'B');
```

*Hint:* char + char = int. String + char = String.

**Answer:** `131`
`AB`
`AB`

Line 1: `'A' + 'B'` = 65 + 66 = 131 (two chars added as integers). Line 2: `"" + 'A'` = `"A"` (String + char = String), then `"A" + 'B'` = `"AB"`. Line 3: `'A' + ""` = `"A"`, then `"A" + 'B'` = `"AB"`. The empty string converts the operation from arithmetic to concatenation.

### Q10. [Hard] Can a Java source file have multiple classes? What are the rules?

*Hint:* Think about public vs non-public classes.

**Answer:** Yes, a Java source file can have multiple classes, but only **one class can be public**, and the file name must match that public class. Other classes must have **default (package-private) access** (no access modifier). Each class produces its own .class file when compiled. In practice, most projects put one class per file for better organization.

If `MyApp.java` contains `public class MyApp` and `class Helper`, compiling produces `MyApp.class` and `Helper.class`. If no class is public, the file can have any name. Having multiple classes in one file is allowed but discouraged in professional Java development.

### Q11. [Easy] What is the output?

```
System.out.println("Java");
System.out.println();
System.out.println("Programming");
```

*Hint:* println() with no arguments prints just a newline.

**Answer:** `Java`
``
`Programming`

The first `println` prints "Java" and a newline. The second `println()` with no arguments prints just a newline (creating a blank line). The third prints "Programming" and a newline.

### Q12. [Medium] Why does Java require semicolons at the end of statements? How is this different from Python?

*Hint:* Think about how the compiler parses code.

**Answer:** Java uses semicolons as **statement terminators** to tell the compiler where one statement ends and the next begins. This allows you to write multiple statements on one line or split a long statement across multiple lines. Python uses **newlines** as statement terminators (and indentation for blocks), making semicolons unnecessary.

Java's semicolons give flexibility in code formatting. You can write `int a = 5; int b = 10;` on one line, or split `String message = "Hello " + "World";` across lines. The semicollon unambiguously marks the end. Python relies on newlines, so each statement must be on its own line (or use explicit line continuation with backslash).

## Multiple Choice Questions

### Q1. [Easy] What is the entry point of a Java program?

**C is correct.** The JVM looks for `public static void main(String[] args)` as the entry point. Execution begins with the first statement inside the main method. Java does not execute code from the top of the file (A) like Python.

### Q2. [Easy] Which of the following correctly prints 'Hello' in Java?

**B is correct.** `System.out.println("Hello")` is the standard way to print in Java. Option A is Python's print function. Option C is JavaScript's console output. Option D is Bash/PHP syntax.

### Q3. [Easy] What must the file name match in Java?

**B is correct.** The file name must exactly match the public class name (including capitalization). If the class is `public class HelloWorld`, the file must be `HelloWorld.java`.

### Q4. [Easy] What does `void` mean in `public static void main`?

**B is correct.** `void` means the method does not return any value. It performs actions but does not produce a return result. The method does accept a parameter (String[] args), so A is wrong.

### Q5. [Easy] Which symbol is used for single-line comments in Java?

**B is correct.** Java uses `//` for single-line comments. `#` (A) is used in Python. `--` (C) is used in SQL. `%%` (D) is not a comment symbol in any major language.

### Q6. [Easy] What is the output of: System.out.println(5 + 3)?

**C is correct.** `5 + 3` is integer addition (both operands are integers), which produces `8`. The result is then printed. It would be `"53"` only if one operand were a String.

### Q7. [Medium] What is the output of: System.out.println("Hello" + 5 + 3)?

**B is correct.** `"Hello" + 5` produces `"Hello5"` (concatenation). Then `"Hello5" + 3` produces `"Hello53"`. Once a String is part of the expression, + becomes concatenation. Option A would require parentheses: `"Hello" + (5 + 3)`.

### Q8. [Medium] Which of these is a valid main method signature?

**C is correct.** `String... args` (varargs) is a valid alternative to `String[] args`. Option A is missing the parameter. Option B returns int instead of void. Option D is missing the `public` keyword. The JVM requires public static void main with a String array (or varargs) parameter.

### Q9. [Medium] What is the escape sequence for a tab character in Java?

**B is correct.** `\t` is the tab escape sequence. `\n` (A) is newline. `\b` (C) is backspace. `\s` (D) is not a valid Java escape sequence (it is a regex pattern for whitespace).

### Q10. [Medium] What naming convention does Java use for class names?

**B is correct.** Java class names use PascalCase (also called UpperCamelCase) where each word starts with a capital letter: `StudentRecord`, `BankAccount`. camelCase (A) is for methods and variables. snake_case (C) is not used in Java. UPPER_CASE (D) is for constants.

### Q11. [Medium] How many .class files are produced when you compile a .java file containing 3 classes?

**C is correct.** Each class in a .java file produces its own .class file. If the file contains classes A, B, and C, the compiler produces A.class, B.class, and C.class. The number of main methods (D) is irrelevant to the number of .class files generated.

### Q12. [Hard] What is the output of: System.out.println('A' + 1)?

**B is correct.** In Java, `char` is a numeric type. `'A'` has the Unicode/ASCII value 65. Adding 1 gives 66 (an int). `println(66)` prints `66`. It does NOT print 'B' because the result type is int, not char. To get 'B', you would need to cast: `(char)('A' + 1)`.

### Q13. [Hard] Which statement about Java comments is FALSE?

**B is the FALSE statement.** Java does NOT support nested multi-line comments. `/* /* */ */` would cause a compiler error because the first `*/` closes the comment, and the second `*/` is orphaned. All other statements are true.

### Q14. [Hard] What is the output of: System.out.printf("%.3f", 3.14)?

**B is correct.** `%.3f` formats the number with exactly 3 decimal places. Since 3.14 only has 2 decimal places, a trailing zero is added to make 3 decimal places: `3.140`. Note: printf does not add a newline unless you include `%n`.

### Q15. [Hard] Why must the main method be static?

**B is correct.** The JVM needs to call the main method as the program entry point before any objects exist. Static methods belong to the class itself, not to any instance. Without `static`, the JVM would need to create an object first, but it does not know how (there is no constructor logic to run). This is the fundamental reason.

### Q16. [Medium] What is the correct way to print a backslash in Java?

**B is correct.** Since backslash is the escape character, you need two backslashes (`\\`) in the source code to produce one backslash in the output. Option A has an unmatched escape sequence and would cause a compiler error.

### Q17. [Easy] What is System.out in Java?

**B is correct.** `System.out` is a static field of the `System` class, and it is an instance of `PrintStream` that represents the standard output stream (usually the console/terminal). `println`, `print`, and `printf` are methods called on this object.

### Q18. [Hard] What is the output of: System.out.println("Result: " + 2 * 3)?

**B is correct.** Operator precedence matters here. `*` has higher precedence than `+`. So `2 * 3` is evaluated first (giving 6), then `"Result: " + 6` is concatenated to `"Result: 6"`. This is different from `"Result: " + 2 + 3` which would give `"Result: 23"`.

## Coding Challenges

### Challenge 1. Personal Information Card

**Difficulty:** Easy

Write a Java program that prints a formatted personal information card for Ananya with: name, age (20), college (NIT Trichy), branch (CSE), CGPA (8.9). Use tabs for alignment.

**Constraints:**

- Use \t for alignment and System.out.println for each line.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
============================
   STUDENT ID CARD
============================
Name:		Ananya Desai
Age:		20
College:	NIT Trichy
Branch:		CSE
CGPA:		8.9
============================
```

**Solution:**

```java
public class StudentCard {
    public static void main(String[] args) {
        System.out.println("============================");
        System.out.println("   STUDENT ID CARD");
        System.out.println("============================");
        System.out.println("Name:\t\tAnanya Desai");
        System.out.println("Age:\t\t20");
        System.out.println("College:\tNIT Trichy");
        System.out.println("Branch:\t\tCSE");
        System.out.println("CGPA:\t\t8.9");
        System.out.println("============================");
    }
}
```

### Challenge 2. ASCII Art Triangle

**Difficulty:** Easy

Write a Java program that prints a right-angled triangle made of asterisks with 5 rows. Row 1 has 1 asterisk, row 5 has 5 asterisks.

**Constraints:**

- Use only System.out.println statements (no loops yet). Each row is a separate println.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
*
**
***
****
*****
```

**Solution:**

```java
public class Triangle {
    public static void main(String[] args) {
        System.out.println("*");
        System.out.println("**");
        System.out.println("***");
        System.out.println("****");
        System.out.println("*****");
    }
}
```

### Challenge 3. Formatted Student Report

**Difficulty:** Medium

Write a Java program that prints a formatted report of 4 students using printf. Display Name (left-aligned, 15 chars), Roll No (right-aligned, 8 chars), Marks (right-aligned, 6 chars), and Grade (centered, 5 chars). Include a header and separator line.

**Constraints:**

- Use System.out.printf with format specifiers. Include header and footer separators.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
===================================================
Name            | Roll No | Marks | Grade
===================================================
Aarav Sharma    |    1001 |    87 |   A
Priya Patel     |    1002 |    92 |   A+
Rohan Singh     |    1003 |    65 |   B
Neha Gupta      |    1004 |    78 |   B+
===================================================
```

**Solution:**

```java
public class StudentReport {
    public static void main(String[] args) {
        String sep = "===================================================";
        System.out.println(sep);
        System.out.printf("%-16s| %7s | %5s | %s%n", "Name", "Roll No", "Marks", "Grade");
        System.out.println(sep);
        System.out.printf("%-16s| %7d | %5d | %3s%n", "Aarav Sharma", 1001, 87, "A");
        System.out.printf("%-16s| %7d | %5d | %3s%n", "Priya Patel", 1002, 92, "A+");
        System.out.printf("%-16s| %7d | %5d | %3s%n", "Rohan Singh", 1003, 65, "B");
        System.out.printf("%-16s| %7d | %5d | %3s%n", "Neha Gupta", 1004, 78, "B+");
        System.out.println(sep);
    }
}
```

### Challenge 4. String Concatenation Puzzle

**Difficulty:** Medium

Write a Java program that prints the result of these 6 expressions (one per line), and add a comment explaining each result: (a) 1 + 2 + "3", (b) "1" + 2 + 3, (c) 1 + 2 + 3 + "", (d) "" + 1 + 2 + 3, (e) 1 + "" + 2 + 3, (f) "Result: " + (1 + 2 + 3).

**Constraints:**

- Print each expression result and include a comment in the code explaining why.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
a) 33
b) 123
c) 6
d) 123
e) 123
f) Result: 6
```

**Solution:**

```java
public class ConcatPuzzle {
    public static void main(String[] args) {
        // a) 1 + 2 = 3 (int), then 3 + "3" = "33" (concatenation)
        System.out.println("a) " + (1 + 2 + "3"));

        // b) "1" + 2 = "12" (concat), then "12" + 3 = "123" (concat)
        System.out.println("b) " + ("1" + 2 + 3));

        // c) 1 + 2 + 3 = 6 (int), then 6 + "" = "6" (concat)
        System.out.println("c) " + (1 + 2 + 3 + ""));

        // d) "" + 1 = "1" (concat from start), "1" + 2 = "12", "12" + 3 = "123"
        System.out.println("d) " + ("" + 1 + 2 + 3));

        // e) 1 + "" = "1" (concat), "1" + 2 = "12", "12" + 3 = "123"
        System.out.println("e) " + (1 + "" + 2 + 3));

        // f) (1 + 2 + 3) = 6 (parentheses force arithmetic), then "Result: " + 6
        System.out.println("f) " + ("Result: " + (1 + 2 + 3)));
    }
}
```

### Challenge 5. Invoice Generator

**Difficulty:** Hard

Write a Java program that prints a formatted invoice. Include a store name header, 4 items with name, quantity, unit price, and total (quantity * price), and a grand total at the bottom. Use printf for precise alignment and %.2f for prices.

**Constraints:**

- Use printf with format specifiers. Calculate totals arithmetically. Use consistent column widths.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
================================================
         MODERN AGE CODERS BOOKSTORE
================================================
Item              Qty   Price    Total
------------------------------------------------
Java Programming    2  ₹450.00  ₹900.00
Data Structures     1  ₹380.00  ₹380.00
Algorithms          1  ₹520.00  ₹520.00
Design Patterns     1  ₹410.00  ₹410.00
------------------------------------------------
                        TOTAL:  ₹2210.00
================================================
```

**Solution:**

```java
public class Invoice {
    public static void main(String[] args) {
        System.out.println("================================================");
        System.out.println("         MODERN AGE CODERS BOOKSTORE");
        System.out.println("================================================");
        System.out.printf("%-18s %3s %8s %8s%n", "Item", "Qty", "Price", "Total");
        System.out.println("------------------------------------------------");

        double t1 = 2 * 450.00;
        double t2 = 1 * 380.00;
        double t3 = 1 * 520.00;
        double t4 = 1 * 410.00;

        System.out.printf("%-18s %3d %8.2f %8.2f%n", "Java Programming", 2, 450.00, t1);
        System.out.printf("%-18s %3d %8.2f %8.2f%n", "Data Structures", 1, 380.00, t2);
        System.out.printf("%-18s %3d %8.2f %8.2f%n", "Algorithms", 1, 520.00, t3);
        System.out.printf("%-18s %3d %8.2f %8.2f%n", "Design Patterns", 1, 410.00, t4);

        System.out.println("------------------------------------------------");
        System.out.printf("%32s %8.2f%n", "TOTAL:", t1 + t2 + t3 + t4);
        System.out.println("================================================");
    }
}
```

### Challenge 6. Escape Sequence Art

**Difficulty:** Medium

Write a Java program that uses escape sequences to print a dialogue between two characters. Include double quotes around spoken text, tabs for indentation, newlines for spacing, and backslashes in a file path reference.

**Constraints:**

- Use \n, \t, \", and \\ escape sequences. All output from a single main method.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Java Learning Conversation ===

Aarav:	"Have you started learning Java?"
Priya:	"Yes! I saved my first program at
	C:\Users\Priya\JavaProjects\HelloWorld.java"
Aarav:	"Great! Remember:
	1. Every statement needs a semicolon
	2. File name must match class name
	3. main method is the entry point"
Priya:	"Got it. Let's code!"
```

**Solution:**

```java
public class EscapeArt {
    public static void main(String[] args) {
        System.out.println("=== Java Learning Conversation ===");
        System.out.println();
        System.out.println("Aarav:\t\"Have you started learning Java?\"");
        System.out.println("Priya:\t\"Yes! I saved my first program at");
        System.out.println("\tC:\\Users\\Priya\\JavaProjects\\HelloWorld.java\"");
        System.out.println("Aarav:\t\"Great! Remember:");
        System.out.println("\t1. Every statement needs a semicolon");
        System.out.println("\t2. File name must match class name");
        System.out.println("\t3. main method is the entry point\"");
        System.out.println("Priya:\t\"Got it. Let's code!\"");
    }
}
```

### Challenge 7. Command-Line Calculator

**Difficulty:** Hard

Write a Java program that takes two numbers as command-line arguments and prints their sum, difference, product, and quotient. Handle the case where no arguments or fewer than 2 arguments are provided with a usage message.

**Constraints:**

- Use Integer.parseInt() to convert args to numbers. Handle missing arguments. Use printf for the quotient to show decimal places.

**Sample input:**

```
java Calculator 15 4
```

**Sample output:**

```
Number 1: 15
Number 2: 4
Sum: 19
Difference: 11
Product: 60
Quotient: 3.75
```

**Solution:**

```java
public class Calculator {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java Calculator <num1> <num2>");
            System.out.println("Example: java Calculator 15 4");
            return;
        }

        int num1 = Integer.parseInt(args[0]);
        int num2 = Integer.parseInt(args[1]);

        System.out.println("Number 1: " + num1);
        System.out.println("Number 2: " + num2);
        System.out.println("Sum: " + (num1 + num2));
        System.out.println("Difference: " + (num1 - num2));
        System.out.println("Product: " + (num1 * num2));
        System.out.printf("Quotient: %.2f%n", (double) num1 / num2);
    }
}
```

### Challenge 8. Java Cheat Sheet Printer

**Difficulty:** Hard

Write a Java program that prints a comprehensive cheat sheet covering all topics from this chapter: program structure, output methods (println, print, printf), comment types, naming conventions, and escape sequences. Format it as a reference card with sections and examples.

**Constraints:**

- Must include at least 5 sections. Use a mix of println and printf. Include actual code examples as strings.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
(A formatted cheat sheet with 5 sections, examples in each)
```

**Solution:**

```java
public class CheatSheet {
    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("   JAVA BASICS CHEAT SHEET - Chapter 3");
        System.out.println("========================================");

        System.out.println("\n--- 1. PROGRAM STRUCTURE ---");
        System.out.println("public class ClassName {");
        System.out.println("    public static void main(String[] args) {");
        System.out.println("        // Your code here");
        System.out.println("    }");
        System.out.println("}");

        System.out.println("\n--- 2. OUTPUT METHODS ---");
        System.out.println("println(x)  - prints x + newline");
        System.out.println("print(x)    - prints x (no newline)");
        System.out.println("printf(fmt) - formatted: %s %d %.2f %n");

        System.out.println("\n--- 3. COMMENTS ---");
        System.out.println("// Single-line comment");
        System.out.println("/* Multi-line comment */");
        System.out.println("/** Javadoc comment */");

        System.out.println("\n--- 4. NAMING CONVENTIONS ---");
        System.out.printf("%-12s -> %s%n", "Classes", "PascalCase (StudentRecord)");
        System.out.printf("%-12s -> %s%n", "Methods", "camelCase (calculateGpa)");
        System.out.printf("%-12s -> %s%n", "Variables", "camelCase (studentName)");
        System.out.printf("%-12s -> %s%n", "Constants", "UPPER_SNAKE (MAX_SIZE)");

        System.out.println("\n--- 5. ESCAPE SEQUENCES ---");
        System.out.printf("%-6s -> %s%n", "\\n", "Newline");
        System.out.printf("%-6s -> %s%n", "\\t", "Tab");
        System.out.printf("%-6s -> %s%n", "\\\\", "Backslash");
        System.out.printf("%-6s -> %s%n", "\\\"", "Double quote");

        System.out.println("\n========================================");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/your-first-java-program/*
