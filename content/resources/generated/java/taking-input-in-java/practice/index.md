---
title: "Practice: Taking Input with Scanner"
description: "56 practice problems for Taking Input with Scanner in Java"
slug: taking-input-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/taking-input-in-java/practice
category: "Java"
---
# Practice: Taking Input with Scanner

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What is the output if the user enters 10?

```
Scanner sc = new Scanner(System.in);
int x = sc.nextInt();
System.out.println(x * 2);
```

*Hint:* nextInt() reads 10. Then we print 10 * 2.

**Answer:** `20`

`nextInt()` reads the integer 10 from input. `10 * 2` = 20, which is printed.

### Q2. [Easy] What is the output if the user enters "Ravi"?

```
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
System.out.println("Hello " + name);
```

*Hint:* nextLine() reads the entire line.

**Answer:** `Hello Ravi`

`nextLine()` reads the full line "Ravi" and stores it in name. String concatenation produces "Hello Ravi".

### Q3. [Easy] What does `sc.next()` return if the user types "Sita Ram" and presses Enter?

*Hint:* next() reads only up to the first whitespace.

**Answer:** `Sita`

`next()` reads a single token delimited by whitespace. It reads "Sita" and stops at the space. "Ram" remains in the input buffer.

### Q4. [Easy] What is the output if the user enters 5 and 3?

```
Scanner sc = new Scanner(System.in);
int a = sc.nextInt();
int b = sc.nextInt();
System.out.println(a + b);
```

*Hint:* Both nextInt() calls read one integer each.

**Answer:** `8`

The first `nextInt()` reads 5, the second reads 3. `5 + 3 = 8`.

### Q5. [Easy] What is the output if the user enters 3.14?

```
Scanner sc = new Scanner(System.in);
double d = sc.nextDouble();
System.out.println(d + 1);
```

*Hint:* nextDouble() reads a double value.

**Answer:** `4.140000000000001` (or approximately `4.14`)

`nextDouble()` reads 3.14. `3.14 + 1` = 4.14 (with possible floating-point precision variation). The exact output depends on Java's double precision representation.

### Q6. [Medium] What happens if the user enters 25 and then presses Enter? What will name contain?

```
Scanner sc = new Scanner(System.in);
int age = sc.nextInt();
String name = sc.nextLine();
System.out.println("Name: '" + name + "'");
```

*Hint:* This is the classic nextLine() bug.

**Answer:** `Name: ''` (empty string)

`nextInt()` reads 25 but leaves the newline (\n) in the buffer. `nextLine()` immediately consumes that leftover \n and returns an empty string. The program never waits for the user to type a name.

### Q7. [Medium] What is the output if the user enters "true"?

```
Scanner sc = new Scanner(System.in);
boolean flag = sc.nextBoolean();
System.out.println(!flag);
```

*Hint:* nextBoolean() reads true or false as a boolean.

**Answer:** `false`

`nextBoolean()` reads the string "true" and returns the boolean `true`. `!true` = `false`.

### Q8. [Medium] What is the output if the user enters "Hello World Java"?

```
Scanner sc = new Scanner(System.in);
String a = sc.next();
String b = sc.next();
String c = sc.next();
System.out.println(c + " " + b + " " + a);
```

*Hint:* Each next() reads one word.

**Answer:** `Java World Hello`

Each `next()` reads one token: a = "Hello", b = "World", c = "Java". Printing them in reverse order gives "Java World Hello".

### Q9. [Medium] What is the output if the user enters 10 and then 20 on the same line separated by a space?

```
Scanner sc = new Scanner(System.in);
int a = sc.nextInt();
int b = sc.nextInt();
System.out.println("Sum: " + (a + b));
```

*Hint:* nextInt() can read integers separated by whitespace on the same line.

**Answer:** `Sum: 30`

Scanner treats spaces and newlines as delimiters. When the user types "10 20" on one line, `nextInt()` reads 10 (stops at space), then the second `nextInt()` reads 20. Sum = 30.

### Q10. [Medium] What exception is thrown if the user enters "abc" here?

```
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
```

*Hint:* "abc" cannot be parsed as an integer.

**Answer:** `java.util.InputMismatchException`

`nextInt()` expects an integer token. The string "abc" cannot be parsed as an integer, so Java throws an `InputMismatchException`. This is a runtime exception (unchecked), so the compiler does not force you to handle it.

### Q11. [Hard] What is the output if the user enters 5, then presses Enter, then types "Deepa"?

```
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();
sc.nextLine(); // consume newline
String s1 = sc.nextLine();
String s2 = sc.nextLine();
System.out.println(s1);
System.out.println(s2);
```

*Hint:* After consuming the newline, s1 reads the next line. But what about s2?

**Answer:** The program reads 5, consumes the newline, reads "Deepa" into s1, then **waits for more input** for s2.

After `nextInt()` reads 5 and `sc.nextLine()` consumes the leftover \n, the first `sc.nextLine()` reads "Deepa" into s1. The second `sc.nextLine()` waits for the user to type another line because there is nothing left in the buffer.

### Q12. [Hard] What is the output?

```
Scanner sc = new Scanner(System.in);
// User types: 10 20 30
int a = sc.nextInt();
String rest = sc.nextLine();
System.out.println("a = " + a);
System.out.println("rest = '" + rest + "'");
```

*Hint:* nextInt() reads the first token. nextLine() reads the remaining part of the line.

**Answer:** `a = 10`
`rest = ' 20 30'`

`nextInt()` reads 10 and stops. `nextLine()` reads everything remaining on that line: " 20 30" (note the leading space). This shows that `nextLine()` after `nextInt()` reads the **rest of the current line**, not the next line.

### Q13. [Medium] Why does the nextLine() bug occur after nextInt()? Explain the internal mechanism.

*Hint:* Think about what character is left in the input buffer after the user presses Enter.

**Answer:** When the user types a number and presses Enter, the input stream contains the digits followed by a newline character (\n). `nextInt()` reads and consumes only the digits, leaving the \n in the buffer. The subsequent `nextLine()` sees the \n and immediately returns an empty string, because `nextLine()` reads up to (and including) the next newline character.

Scanner internally maintains a buffer of characters from the input stream. Methods like `nextInt()` skip leading whitespace and read a token, but stop before consuming the trailing newline. `nextLine()`, however, reads everything up to and including the next \n. When it finds the leftover \n immediately, it returns an empty string without waiting.

### Q14. [Medium] What is the difference between `next()` and `nextLine()`?

*Hint:* Think about whitespace handling.

**Answer:** `next()` reads a single token (a word) delimited by whitespace. It skips leading whitespace and stops at the first whitespace character after the token. `nextLine()` reads the entire remaining line up to the newline character, including spaces within the line.

Use `next()` when you want one word (e.g., a single name like "Amit"). Use `nextLine()` when you want a full line that may contain spaces (e.g., a full name like "Amit Kumar" or a sentence).

### Q15. [Hard] When should you use BufferedReader instead of Scanner? What are the trade-offs?

*Hint:* Think about speed vs convenience.

**Answer:** Use **BufferedReader** when reading large amounts of input (competitive programming, file processing) because it is significantly faster than Scanner. Scanner is convenient because it parses types directly (`nextInt()`, `nextDouble()`), but this convenience comes with a performance cost. BufferedReader reads raw strings, requiring manual parsing with `Integer.parseInt()` etc. BufferedReader also throws checked `IOException`, which you must handle.

Scanner internally uses regex to parse tokens, which makes it slower. BufferedReader reads bytes into a buffer in bulk, making I/O much faster. For competitive programming where input size can be 10^5 or more lines, BufferedReader can be 5-10x faster than Scanner.

### Q16. [Easy] What is the output if the user enters "true"?

```
Scanner sc = new Scanner(System.in);
String s = sc.nextLine();
System.out.println(s.length());
```

*Hint:* nextLine() reads the string 'true', which has 4 characters.

**Answer:** `4`

`nextLine()` reads the string "true" (4 characters). `s.length()` returns 4.

### Q17. [Medium] What is the output if the user enters "   hello   "?

```
Scanner sc = new Scanner(System.in);
String s = sc.next();
System.out.println("'" + s + "'");
```

*Hint:* next() skips leading whitespace and reads the first token.

**Answer:** `'hello'`

`next()` skips leading whitespace and reads the first token. It returns "hello" without any surrounding spaces.

### Q18. [Hard] What is the output if the user enters 5 on line 1, then "Hello World" on line 2?

```
Scanner sc = new Scanner(System.in);
int n = Integer.parseInt(sc.nextLine());
String s = sc.nextLine();
System.out.println(n + ": " + s);
```

*Hint:* Using Integer.parseInt(sc.nextLine()) avoids the nextLine bug entirely.

**Answer:** `5: Hello World`

By reading everything with `nextLine()` and parsing manually with `Integer.parseInt()`, there is no leftover newline. The first `nextLine()` reads "5" (consumes the \n). The second `nextLine()` reads "Hello World" correctly.

## Mixed Questions

### Q1. [Easy] Write a program that reads two integers from the user and prints their sum, difference, product, and quotient.

*Hint:* Use nextInt() twice. Be careful with integer division.

**Answer:** ```
import java.util.Scanner;

public class BasicCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        if (b != 0) {
            System.out.println("Quotient: " + (a / b));
        } else {
            System.out.println("Cannot divide by zero");
        }
        sc.close();
    }
}
```

We read two integers with `nextInt()`. Since both are ints, division is integer division (truncated). We also check for division by zero before dividing.

### Q2. [Easy] What is the output if the user enters 7?

```
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
System.out.println(n + " squared is " + n * n);
```

*Hint:* Compute 7 * 7.

**Answer:** `7 squared is 49`

`nextInt()` reads 7. `n * n` = 49. String concatenation produces "7 squared is 49".

### Q3. [Medium] What is the output if the user types "42abc"?

```
Scanner sc = new Scanner(System.in);
if (sc.hasNextInt()) {
    System.out.println("Int: " + sc.nextInt());
} else {
    System.out.println("Not an int: " + sc.next());
}
```

*Hint:* Is "42abc" a valid integer token?

**Answer:** `Not an int: 42abc`

`hasNextInt()` checks if the entire next token can be parsed as an int. "42abc" is a single token (no whitespace), and it contains non-digit characters, so `hasNextInt()` returns false. The else branch runs, and `next()` reads the whole token "42abc".

### Q4. [Medium] Write a program that reads a student's name (may contain spaces), roll number (int), and CGPA (double) and prints them in a formatted manner. Handle the nextLine bug correctly.

*Hint:* Read roll number first, consume the newline, then read name.

**Answer:** ```
import java.util.Scanner;

public class StudentInfo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter roll number: ");
        int roll = sc.nextInt();
        System.out.print("Enter CGPA: ");
        double cgpa = sc.nextDouble();
        sc.nextLine(); // Consume leftover newline
        System.out.print("Enter full name: ");
        String name = sc.nextLine();
        System.out.println("\n--- Student Details ---");
        System.out.println("Name: " + name);
        System.out.println("Roll: " + roll);
        System.out.println("CGPA: " + cgpa);
        sc.close();
    }
}
```

We read roll (int) and CGPA (double) first. After `nextDouble()`, the leftover \n is in the buffer. We call `sc.nextLine()` to consume it before reading the full name with another `nextLine()`.

### Q5. [Medium] What is the output if the user enters "Java Programming"?

```
Scanner sc = new Scanner(System.in);
String s = sc.nextLine();
System.out.println("Length: " + s.length());
System.out.println("First char: " + s.charAt(0));
```

*Hint:* Count all characters including the space.

**Answer:** `Length: 16`
`First char: J`

"Java Programming" has 16 characters (including the space). `length()` returns 16. `charAt(0)` returns 'J'.

### Q6. [Hard] What is the output if the user enters "3 7"?

```
Scanner sc = new Scanner(System.in);
String line = sc.nextLine();
String[] parts = line.split(" ");
int a = Integer.parseInt(parts[0]);
int b = Integer.parseInt(parts[1]);
System.out.println("Max: " + Math.max(a, b));
```

*Hint:* The line is split into two parts, then each is parsed.

**Answer:** `Max: 7`

`nextLine()` reads "3 7". `split(" ")` produces ["3", "7"]. `Integer.parseInt("3")` = 3, `Integer.parseInt("7")` = 7. `Math.max(3, 7)` = 7.

### Q7. [Hard] What is the output if the user enters 5, then 10?

```
Scanner sc = new Scanner(System.in);
int x = Integer.parseInt(sc.nextLine());
int y = Integer.parseInt(sc.nextLine());
System.out.println(x + y);
System.out.println("" + x + y);
```

*Hint:* In the second println, the empty string causes string concatenation, not addition.

**Answer:** `15`
`510`

x = 5, y = 10. `x + y` = 15 (integer addition). In the second print, `"" + x + y` is string concatenation: "" + 5 = "5", then "5" + 10 = "510". The empty string forces string concatenation from left to right.

### Q8. [Hard] What happens with this code?

```
Scanner sc = new Scanner(System.in);
// User types: 3.14
int num = sc.nextInt();
```

*Hint:* Can nextInt() read a decimal number?

**Answer:** `InputMismatchException` is thrown at runtime.

`nextInt()` expects an integer value. The input "3.14" contains a decimal point, which is not a valid integer. Scanner throws `InputMismatchException`. To read 3.14, use `nextDouble()` instead.

### Q9. [Hard] Write a program using BufferedReader that reads N (an integer), then reads N names (each on a separate line), and prints them in reverse order.

*Hint:* Use a String array to store the names. Read N with Integer.parseInt(br.readLine()).

**Answer:** ```
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class ReverseNames {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        String[] names = new String[n];
        for (int i = 0; i < n; i++) {
            names[i] = br.readLine();
        }
        for (int i = n - 1; i >= 0; i--) {
            System.out.println(names[i]);
        }
        br.close();
    }
}
```

We read N using `Integer.parseInt(br.readLine())`. Then we read N lines into a String array. Finally, we iterate the array in reverse order and print each name. BufferedReader does not have the nextLine bug because `readLine()` always consumes the full line including the newline.

### Q10. [Easy] What is the output if the user enters 4 and 6?

```
Scanner sc = new Scanner(System.in);
int a = sc.nextInt();
int b = sc.nextInt();
System.out.println("Product: " + a * b);
```

*Hint:* Read two ints and multiply.

**Answer:** `Product: 24`

a = 4, b = 6. `4 * 6 = 24`.

### Q11. [Medium] What is the output if the user enters "hello"?

```
Scanner sc = new Scanner(System.in);
String s = sc.nextLine();
System.out.println(s.toUpperCase());
System.out.println(s.charAt(0));
```

*Hint:* toUpperCase returns a new string. charAt(0) returns the first character.

**Answer:** `HELLO`
`h`

`toUpperCase()` returns "HELLO" (new String, original unchanged). `charAt(0)` returns 'h' from the original string.

### Q12. [Hard] Write a program that reads integers from the user until they enter -1 (sentinel value). Print the sum and count of all entered numbers (excluding -1).

*Hint:* Use a while loop with nextInt(). Break when input is -1.

**Answer:** ```
import java.util.Scanner;

public class SentinelInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0, count = 0;
        System.out.println("Enter numbers (-1 to stop):");
        while (true) {
            int n = sc.nextInt();
            if (n == -1) break;
            sum += n;
            count++;
        }
        System.out.println("Count: " + count);
        System.out.println("Sum: " + sum);
        sc.close();
    }
}
```

An infinite while loop reads integers until -1 is entered. The sentinel value (-1) is not counted or added to the sum.

## Multiple Choice Questions

### Q1. [Easy] Which package must be imported to use the Scanner class?

A. java.io
B. java.util
C. java.lang
D. java.scanner

**Answer:** B

**B is correct.** The Scanner class is in the `java.util` package. `java.lang` is auto-imported. `java.io` contains I/O classes like BufferedReader. `java.scanner` does not exist.

### Q2. [Easy] Which method reads an entire line of input including spaces?

A. next()
B. nextLine()
C. nextWord()
D. readLine()

**Answer:** B

**B is correct.** `nextLine()` reads the entire line up to the newline. `next()` reads only one token (word). `nextWord()` does not exist. `readLine()` is a BufferedReader method, not Scanner.

### Q3. [Easy] What argument is passed to the Scanner constructor for keyboard input?

A. System.out
B. System.in
C. System.keyboard
D. System.console

**Answer:** B

**B is correct.** `System.in` is the standard input stream (keyboard). `System.out` is the output stream. `System.keyboard` does not exist. `System.console()` exists but returns a Console object, not an InputStream.

### Q4. [Easy] Which method reads the next integer from input?

A. nextInteger()
B. readInt()
C. nextInt()
D. getInt()

**Answer:** C

**C is correct.** `nextInt()` is the Scanner method that reads the next token and parses it as an int. The other methods do not exist in the Scanner class.

### Q5. [Easy] What does next() return if the user types "Raj Kumar"?

A. Raj Kumar
B. Raj
C. Kumar
D. R

**Answer:** B

**B is correct.** `next()` reads one token delimited by whitespace. It returns "Raj" and leaves "Kumar" in the buffer.

### Q6. [Medium] What causes the nextLine() bug after nextInt()?

A. nextInt() returns the wrong type
B. nextLine() is deprecated
C. The leftover newline character in the buffer
D. Scanner does not support mixing types

**Answer:** C

**C is correct.** When the user types a number and presses Enter, `nextInt()` reads the number but leaves the \n in the buffer. The subsequent `nextLine()` consumes that \n and returns an empty string.

### Q7. [Medium] How do you fix the nextLine() bug after nextInt()?

A. Use nextString() instead
B. Add sc.nextLine() between nextInt() and the next nextLine()
C. Use sc.flush()
D. Call sc.reset()

**Answer:** B

**B is correct.** Adding an extra `sc.nextLine()` call after `nextInt()` consumes the leftover newline character. The other methods either do not exist (`nextString()`) or do not solve this problem.

### Q8. [Medium] What exception is thrown when nextInt() receives non-integer input?

A. NumberFormatException
B. InputMismatchException
C. IllegalArgumentException
D. ArithmeticException

**Answer:** B

**B is correct.** Scanner throws `InputMismatchException` when the next token does not match the expected type. `NumberFormatException` is thrown by `Integer.parseInt()` and similar parsing methods, not by Scanner directly.

### Q9. [Medium] What does hasNextInt() do?

A. Reads the next integer
B. Checks if there is any input remaining
C. Checks if the next token can be parsed as an int, without consuming it
D. Skips the next integer in the buffer

**Answer:** C

**C is correct.** `hasNextInt()` returns true if the next token can be interpreted as an int, and false otherwise. It does not consume the token from the input buffer, making it useful for validation before calling `nextInt()`.

### Q10. [Medium] Which of these is the fastest way to read input in Java?

A. Scanner
B. System.in.read()
C. BufferedReader
D. Console.readLine()

**Answer:** C

**C is correct.** `BufferedReader` is significantly faster than Scanner because it reads raw bytes in bulk without regex-based token parsing. For competitive programming and large inputs, BufferedReader is the preferred choice.

### Q11. [Medium] What happens when you close a Scanner that wraps System.in?

A. Only the Scanner is closed, System.in remains open
B. Both the Scanner and System.in are closed
C. An exception is thrown
D. Nothing happens

**Answer:** B

**B is correct.** Closing the Scanner also closes the underlying `System.in` stream. After that, no new Scanner can read from `System.in`. This is why you should use only one Scanner for `System.in` throughout your program.

### Q12. [Hard] What is the correct way to use try-with-resources with Scanner?

A. try { Scanner sc = new Scanner(System.in); }
B. try (Scanner sc = new Scanner(System.in)) { }
C. try-finally (Scanner sc) { }
D. using (Scanner sc = new Scanner(System.in)) { }

**Answer:** B

**B is correct.** The try-with-resources syntax declares the resource inside parentheses after `try`. The resource must implement `AutoCloseable`. Option D uses C# syntax. Option A is a regular try block that does not auto-close the resource.

### Q13. [Hard] Which method should you use to read a line with BufferedReader?

A. nextLine()
B. readLine()
C. getLine()
D. scanLine()

**Answer:** B

**B is correct.** `readLine()` is the BufferedReader method that reads one line of text. `nextLine()` is a Scanner method. The other options do not exist in BufferedReader.

### Q14. [Hard] What exception does Integer.parseInt("abc") throw?

A. InputMismatchException
B. NumberFormatException
C. ClassCastException
D. ParseException

**Answer:** B

**B is correct.** `Integer.parseInt()` throws `NumberFormatException` when the string cannot be parsed as an integer. This is different from Scanner, which throws `InputMismatchException`. Knowing this distinction matters in placement exams.

### Q15. [Hard] What is the output of the following code if the user types "5 10 15" on a single line?
`Scanner sc = new Scanner(System.in);
int sum = 0;
while (sc.hasNextInt()) { sum += sc.nextInt(); }
System.out.println(sum);`

A. 5
B. 15
C. 30
D. Infinite loop

**Answer:** C

**C is correct.** `hasNextInt()` returns true three times (for 5, 10, 15). Each `nextInt()` reads and adds the value. Sum = 5 + 10 + 15 = 30. After all tokens are consumed, `hasNextInt()` waits for more input. In practice, the user would need to signal end-of-input (Ctrl+Z on Windows or Ctrl+D on Unix) for the loop to end.

### Q16. [Easy] What does sc.nextLine() return?

A. The next word
B. The next character
C. The entire line up to the newline
D. The next integer

**Answer:** C

**C is correct.** `nextLine()` reads and returns the entire line of input up to (but not including) the newline character.

### Q17. [Medium] Which of the following reads a double value from Scanner?

A. sc.nextFloat()
B. sc.nextDouble()
C. sc.readDouble()
D. sc.getDouble()

**Answer:** B

**B is correct.** `nextDouble()` reads the next token as a double. `nextFloat()` reads a float (different precision). The other methods do not exist in Scanner.

### Q18. [Hard] What is the difference between InputMismatchException and NumberFormatException?

A. They are the same exception
B. InputMismatchException is from Scanner; NumberFormatException is from Integer.parseInt()
C. NumberFormatException is from Scanner; InputMismatchException is from Integer.parseInt()
D. Neither is a real Java exception

**Answer:** B

**B is correct.** `InputMismatchException` is thrown by Scanner methods (nextInt, nextDouble, etc.) when the input does not match the expected type. `NumberFormatException` is thrown by parsing methods like `Integer.parseInt()` when the string cannot be converted to a number.

## Coding Challenges

### Challenge 1. Temperature Converter

**Difficulty:** Easy

Write a program that reads a temperature in Celsius from the user and converts it to Fahrenheit using the formula: F = (C * 9/5) + 32. Print the result rounded to 2 decimal places.

**Constraints:**

- Use Scanner with nextDouble(). Use printf or String.format for 2 decimal places.

**Sample input:**

```
Enter temperature in Celsius: 37.5
```

**Sample output:**

```
37.5 C = 99.50 F
```

**Solution:**

```java
import java.util.Scanner;

public class TempConverter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter temperature in Celsius: ");
        double celsius = sc.nextDouble();
        double fahrenheit = (celsius * 9.0 / 5.0) + 32;
        System.out.printf("%.1f C = %.2f F%n", celsius, fahrenheit);
        sc.close();
    }
}
```

### Challenge 2. Student Report Card

**Difficulty:** Easy

Read a student's name, roll number, and marks in 3 subjects. Print the total, average (2 decimal places), and whether the student passed (average >= 40) or failed.

**Constraints:**

- Handle the nextLine bug correctly. Read all three marks on one line or separately.

**Sample input:**

```
Enter name: Sneha Gupta
Enter roll number: 42
Enter marks in 3 subjects: 78 85 92
```

**Sample output:**

```
Name: Sneha Gupta
Roll: 42
Total: 255
Average: 85.00
Result: Pass
```

**Solution:**

```java
import java.util.Scanner;

public class ReportCard {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter roll number: ");
        int roll = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        System.out.print("Enter marks in 3 subjects: ");
        int m1 = sc.nextInt();
        int m2 = sc.nextInt();
        int m3 = sc.nextInt();
        int total = m1 + m2 + m3;
        double avg = total / 3.0;
        System.out.println("Name: " + name);
        System.out.println("Roll: " + roll);
        System.out.println("Total: " + total);
        System.out.printf("Average: %.2f%n", avg);
        System.out.println("Result: " + (avg >= 40 ? "Pass" : "Fail"));
        sc.close();
    }
}
```

### Challenge 3. Word Counter

**Difficulty:** Medium

Read a sentence from the user and count the number of words in it. Words are separated by spaces. Handle multiple spaces between words.

**Constraints:**

- Use nextLine() to read the sentence. Use split with regex to handle multiple spaces.

**Sample input:**

```
Enter a sentence: Java  is  a  powerful  language
```

**Sample output:**

```
Word count: 5
```

**Solution:**

```java
import java.util.Scanner;

public class WordCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine().trim();
        if (sentence.isEmpty()) {
            System.out.println("Word count: 0");
        } else {
            String[] words = sentence.split("\\s+");
            System.out.println("Word count: " + words.length);
        }
        sc.close();
    }
}
```

### Challenge 4. Sum of N Numbers

**Difficulty:** Medium

Read an integer N, then read N integers from the user. Print the sum, minimum, and maximum of those N integers.

**Constraints:**

- Use a loop to read N numbers. Track min and max while reading.

**Sample input:**

```
Enter N: 5
Enter 5 numbers: 12 7 45 3 28
```

**Sample output:**

```
Sum: 95
Min: 3
Max: 45
```

**Solution:**

```java
import java.util.Scanner;

public class SumOfN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        System.out.print("Enter " + n + " numbers: ");
        int sum = 0;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            sum += num;
            if (num < min) min = num;
            if (num > max) max = num;
        }
        System.out.println("Sum: " + sum);
        System.out.println("Min: " + min);
        System.out.println("Max: " + max);
        sc.close();
    }
}
```

### Challenge 5. Input Validation Loop

**Difficulty:** Medium

Write a program that keeps asking the user for a valid integer between 1 and 100. If the input is not an integer or is out of range, print an error and ask again. Once valid input is received, print it.

**Constraints:**

- Use hasNextInt() for type validation and a while loop for repeated input.

**Sample input:**

```
Enter a number (1-100): abc
Invalid! Enter a number (1-100): 150
Out of range! Enter a number (1-100): 42
```

**Sample output:**

```
You entered: 42
```

**Solution:**

```java
import java.util.Scanner;

public class ValidInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = 0;
        boolean valid = false;
        while (!valid) {
            System.out.print("Enter a number (1-100): ");
            if (sc.hasNextInt()) {
                num = sc.nextInt();
                if (num >= 1 && num <= 100) {
                    valid = true;
                } else {
                    System.out.println("Out of range!");
                }
            } else {
                System.out.println("Invalid!");
                sc.next(); // consume invalid token
            }
        }
        System.out.println("You entered: " + num);
        sc.close();
    }
}
```

### Challenge 6. Multi-Line Input Processor

**Difficulty:** Hard

Using BufferedReader, read N (the first line), then read N lines of text. For each line, print the line number, the line itself, and the number of characters in it.

**Constraints:**

- Use BufferedReader only (not Scanner). Handle IOException.

**Sample input:**

```
3
Hello World
Java
BufferedReader is fast
```

**Sample output:**

```
Line 1: Hello World (11 chars)
Line 2: Java (4 chars)
Line 3: BufferedReader is fast (21 chars)
```

**Solution:**

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class MultiLineProcessor {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        for (int i = 1; i <= n; i++) {
            String line = br.readLine();
            System.out.println("Line " + i + ": " + line + " (" + line.length() + " chars)");
        }
        br.close();
    }
}
```

### Challenge 7. Space-Separated Input Parser

**Difficulty:** Hard

Read a single line containing multiple integers separated by spaces. Without knowing how many integers there will be, compute the sum, average, and count of the numbers.

**Constraints:**

- Read the whole line with nextLine(), split by spaces, parse each part. Handle empty input.

**Sample input:**

```
10 20 30 40 50
```

**Sample output:**

```
Count: 5
Sum: 150
Average: 30.0
```

**Solution:**

```java
import java.util.Scanner;

public class SpaceSeparated {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line = sc.nextLine().trim();
        if (line.isEmpty()) {
            System.out.println("No input provided.");
        } else {
            String[] parts = line.split("\\s+");
            int sum = 0;
            int count = parts.length;
            for (String part : parts) {
                sum += Integer.parseInt(part);
            }
            double avg = (double) sum / count;
            System.out.println("Count: " + count);
            System.out.println("Sum: " + sum);
            System.out.println("Average: " + avg);
        }
        sc.close();
    }
}
```

### Challenge 8. Menu-Driven Calculator

**Difficulty:** Hard

Build a menu-driven calculator that displays a menu (1. Add, 2. Subtract, 3. Multiply, 4. Divide, 5. Exit), reads the user's choice, reads two numbers if needed, performs the operation, and loops until the user chooses Exit. Validate all inputs.

**Constraints:**

- Use a while loop with switch-case. Handle division by zero. Use proper Scanner techniques.

**Sample input:**

```
Choice: 1
Enter two numbers: 15 25
Result: 40
Choice: 5
```

**Sample output:**

```
Result: 40
Goodbye!
```

**Solution:**

```java
import java.util.Scanner;

public class MenuCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean running = true;
        while (running) {
            System.out.println("\n1. Add  2. Subtract  3. Multiply  4. Divide  5. Exit");
            System.out.print("Choice: ");
            int choice = sc.nextInt();
            if (choice == 5) {
                System.out.println("Goodbye!");
                running = false;
            } else if (choice >= 1 && choice <= 4) {
                System.out.print("Enter two numbers: ");
                double a = sc.nextDouble();
                double b = sc.nextDouble();
                switch (choice) {
                    case 1: System.out.println("Result: " + (a + b)); break;
                    case 2: System.out.println("Result: " + (a - b)); break;
                    case 3: System.out.println("Result: " + (a * b)); break;
                    case 4:
                        if (b == 0) System.out.println("Error: Division by zero!");
                        else System.out.println("Result: " + (a / b));
                        break;
                }
            } else {
                System.out.println("Invalid choice!");
            }
        }
        sc.close();
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/taking-input-in-java/*
