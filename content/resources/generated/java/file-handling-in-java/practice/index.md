---
title: "Practice: File Handling in Java"
description: "55 practice problems for File Handling in Java in Java"
slug: file-handling-in-java-practice
canonical: https://learn.modernagecoders.com/resources/java/file-handling-in-java/practice
category: "Java"
---
# Practice: File Handling in Java

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```java
File file = new File("test.txt");
System.out.println(file.exists());
```

Assume the file test.txt does NOT exist.

*Hint:* new File() creates a File object representing a path. It does not create the actual file.

**Answer:** `false`

`new File("test.txt")` creates a File object but does not create the file on disk. Since test.txt does not exist, `exists()` returns `false`.

### Q2. [Easy] What is the output?

```java
File file = new File("demo.txt");
file.createNewFile();
System.out.println(file.exists());
System.out.println(file.isFile());
System.out.println(file.isDirectory());
```

*Hint:* createNewFile() actually creates the file on disk.

**Answer:** `true`
`true`
`false`

`createNewFile()` creates an empty file on disk. After creation, `exists()` returns true, `isFile()` returns true (it is a regular file), and `isDirectory()` returns false.

### Q3. [Easy] What is the output?

```java
try (BufferedWriter bw = new BufferedWriter(new FileWriter("test.txt"))) {
    bw.write("Hello");
    bw.newLine();
    bw.write("World");
}
try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
    System.out.println(br.readLine());
    System.out.println(br.readLine());
    System.out.println(br.readLine());
}
```

*Hint:* readLine() returns null when there are no more lines.

**Answer:** `Hello`
`World`
`null`

Two lines are written: "Hello" and "World". The first two `readLine()` calls return these strings. The third call finds no more data and returns `null`.

### Q4. [Easy] What is the output?

```java
FileWriter fw1 = new FileWriter("data.txt");
fw1.write("First");
fw1.close();

FileWriter fw2 = new FileWriter("data.txt");
fw2.write("Second");
fw2.close();

BufferedReader br = new BufferedReader(new FileReader("data.txt"));
System.out.println(br.readLine());
br.close();
```

*Hint:* FileWriter without the append flag truncates the file.

**Answer:** `Second`

The second `FileWriter` opens the file in default (truncate) mode, which erases "First" before writing "Second". Only "Second" remains in the file.

### Q5. [Easy] What is the output?

```java
FileWriter fw1 = new FileWriter("data.txt");
fw1.write("First");
fw1.close();

FileWriter fw2 = new FileWriter("data.txt", true);
fw2.write("Second");
fw2.close();

BufferedReader br = new BufferedReader(new FileReader("data.txt"));
System.out.println(br.readLine());
br.close();
```

*Hint:* The second FileWriter uses append mode (true).

**Answer:** `FirstSecond`

The second `FileWriter` opens with `true` (append mode). "Second" is appended after "First" on the same line. `readLine()` returns the entire line: "FirstSecond".

### Q6. [Medium] What is the output?

```java
try (BufferedWriter bw = new BufferedWriter(new FileWriter("nums.txt"))) {
    for (int i = 1; i <= 3; i++) {
        bw.write(String.valueOf(i * 10));
        bw.newLine();
    }
}

try (BufferedReader br = new BufferedReader(new FileReader("nums.txt"))) {
    String line;
    int sum = 0;
    while ((line = br.readLine()) != null) {
        sum += Integer.parseInt(line);
    }
    System.out.println("Sum: " + sum);
}
```

*Hint:* Three numbers are written: 10, 20, 30.

**Answer:** `Sum: 60`

The file contains three lines: "10", "20", "30". Each is read, parsed to an integer, and added to sum. 10 + 20 + 30 = 60.

### Q7. [Medium] What happens when this code runs?

```java
try (BufferedReader br = new BufferedReader(new FileReader("nonexistent.txt"))) {
    System.out.println(br.readLine());
} catch (FileNotFoundException e) {
    System.out.println("Not found");
} catch (IOException e) {
    System.out.println("IO error");
}
```

*Hint:* FileNotFoundException is a subclass of IOException.

**Answer:** `Not found`

Opening a file that does not exist throws `FileNotFoundException`. Since it is caught before the more general `IOException`, "Not found" is printed. `FileNotFoundException` extends `IOException`.

### Q8. [Medium] What is the output?

```java
Path path = Paths.get("demo.txt");
Files.writeString(path, "Hello NIO");

String content = Files.readString(path);
System.out.println(content);
System.out.println(content.length());

Files.deleteIfExists(path);
```

(Assume Java 11+)

*Hint:* Files.readString() reads the entire file as a single String.

**Answer:** `Hello NIO`
`9`

`Files.writeString()` writes the string to the file. `Files.readString()` reads the entire file as one String. "Hello NIO" has 9 characters.

### Q9. [Medium] What is the output?

```java
Files.write(Paths.get("lines.txt"), 
    List.of("alpha", "beta", "gamma"));

List lines = Files.readAllLines(Paths.get("lines.txt"));
System.out.println(lines.size());
System.out.println(lines.get(1));
```

*Hint:* List.of() creates a list with three elements. readAllLines() reads all lines into a List.

**Answer:** `3`
`beta`

Three lines are written. `readAllLines()` returns a List with 3 elements. `lines.get(1)` returns the second element (index 1): "beta".

### Q10. [Medium] What is the output?

```java
try (FileWriter fw = new FileWriter("test.txt")) {
    fw.write("ABC");
}

File file = new File("test.txt");
System.out.println(file.length());

try (FileReader fr = new FileReader("test.txt")) {
    System.out.println(fr.read());
    System.out.println(fr.read());
}
```

*Hint:* FileReader.read() returns the character's Unicode integer value. 'A' is 65.

**Answer:** `3`
`65`
`66`

"ABC" is 3 bytes (assuming ASCII/UTF-8). `file.length()` returns 3. `fr.read()` returns the int value of each character: 'A' is 65, 'B' is 66.

### Q11. [Hard] What is the output?

```java
Files.write(Paths.get("data.txt"), 
    List.of("hello", "", "world", "", "java"));

long count = Files.lines(Paths.get("data.txt"))
    .filter(line -> !line.isEmpty())
    .count();
System.out.println(count);
```

*Hint:* Two of the five lines are empty strings.

**Answer:** `3`

Five lines are written, two of which are empty. The stream filters out empty lines with `!line.isEmpty()`, leaving 3 non-empty lines.

### Q12. [Hard] What is the output?

```java
try (PrintWriter pw = new PrintWriter("out.txt")) {
    pw.printf("%d + %d = %d%n", 3, 4, 7);
    pw.printf("%d + %d = %d%n", 5, 6, 11);
}

try (BufferedReader br = new BufferedReader(new FileReader("out.txt"))) {
    br.readLine(); // skip first line
    String second = br.readLine();
    System.out.println(second);
}
```

*Hint:* The first readLine() reads and discards the first line.

**Answer:** `5 + 6 = 11`

Two lines are written with `printf`. The first `readLine()` reads and discards "3 + 4 = 7". The second `readLine()` returns "5 + 6 = 11".

### Q13. [Medium] What is the difference between `FileReader` and `FileInputStream`? When would you use each?

*Hint:* Think about what kind of data each handles.

**Answer:** `FileReader` is a character stream that reads text data (characters), applying character encoding. `FileInputStream` is a byte stream that reads raw bytes without any encoding interpretation. Use `FileReader` for text files (.txt, .csv, .json) and `FileInputStream` for binary files (.jpg, .pdf, .exe).

Character streams apply encoding (like UTF-8) to convert bytes to characters. This is correct for text but corrupts binary data. Byte streams read raw bytes without transformation, which is necessary for non-text files.

### Q14. [Hard] Why does `Files.readAllLines()` have a potential problem with very large files? What is the alternative?

*Hint:* Think about where the data goes when you read all lines.

**Answer:** `Files.readAllLines()` loads the entire file into a `List` in memory. For a 2 GB log file, this would require at least 2 GB of heap space, likely causing `OutOfMemoryError`. The alternative is `Files.lines()`, which returns a lazy `Stream` that reads lines on demand without loading the entire file into memory.

Eager loading (readAllLines) is fine for small files. Lazy loading (Files.lines()) is necessary for large files because it processes one line at a time, keeping memory usage constant regardless of file size.

### Q15. [Hard] Explain how try-with-resources works internally. What interface must a class implement to be used in it?

*Hint:* Think about what guarantees automatic closing.

**Answer:** A class must implement the `AutoCloseable` interface (which has a single method: `close()`). When the try block exits (normally or due to an exception), the JVM automatically calls `close()` on each resource declared in the parentheses, in reverse order of declaration. If both the try block and the close() method throw exceptions, the close() exception is added as a **suppressed exception** to the main exception.

The compiler transforms try-with-resources into a try-finally block internally. The suppressed exception mechanism (Java 7+) ensures no exception is silently lost. You can retrieve suppressed exceptions with `getSuppressed()`.

## Mixed Questions

### Q1. [Easy] What is the output?

```java
File f = new File("mydir");
f.mkdir();
System.out.println(f.isDirectory());
System.out.println(f.isFile());
f.delete();
```

*Hint:* mkdir() creates a directory, not a file.

**Answer:** `true`
`false`

`mkdir()` creates a directory. `isDirectory()` returns true. `isFile()` returns false because it is a directory, not a regular file.

### Q2. [Easy] What is the output?

```java
try (PrintWriter pw = new PrintWriter("simple.txt")) {
    pw.println("Line 1");
    pw.println("Line 2");
}

try (Scanner sc = new Scanner(new File("simple.txt"))) {
    while (sc.hasNextLine()) {
        System.out.println(sc.nextLine());
    }
}
```

*Hint:* PrintWriter.println() writes a line with a newline. Scanner.nextLine() reads one line.

**Answer:** `Line 1`
`Line 2`

Two lines are written with `println()`. Scanner reads them one at a time with `nextLine()` and prints each.

### Q3. [Medium] What is the output?

```java
try (BufferedWriter bw = new BufferedWriter(new FileWriter("count.txt"))) {
    for (int i = 5; i >= 1; i--) {
        bw.write(i + " ");
    }
}
try (BufferedReader br = new BufferedReader(new FileReader("count.txt"))) {
    System.out.println(br.readLine());
}
```

*Hint:* All numbers are written on a single line (no newLine() calls).

**Answer:** `5 4 3 2 1 `

No `newLine()` is called, so all values are written on one line. `readLine()` returns the entire line: "5 4 3 2 1 ".

### Q4. [Medium] What is the output?

```java
Files.write(Paths.get("words.txt"), 
    List.of("apple", "banana", "cherry"));

String result = Files.lines(Paths.get("words.txt"))
    .map(s -> s.substring(0, 1).toUpperCase())
    .reduce("", (a, b) -> a + b);

System.out.println(result);
```

*Hint:* Each word's first character is extracted and capitalized, then all are concatenated.

**Answer:** `ABC`

For each line, `substring(0,1).toUpperCase()` extracts the first character in uppercase: 'A', 'B', 'C'. `reduce` concatenates them into "ABC".

### Q5. [Medium] What is the output?

```java
Path path = Paths.get("info.txt");
Files.writeString(path, "Hello\nWorld\n");

List lines = Files.readAllLines(path);
System.out.println(lines.size());
System.out.println(lines);
```

*Hint:* The string contains two newline characters, creating two lines of content.

**Answer:** `2`
`[Hello, World]`

The string "Hello\nWorld\n" has two lines of content (the trailing newline does not create a third line in readAllLines). The List has 2 elements.

### Q6. [Hard] What is the output?

```java
try (BufferedWriter bw = new BufferedWriter(new FileWriter("test.txt"))) {
    bw.write("Line1");
    bw.newLine();
    bw.write("Line2");
    // Note: no newLine() after Line2
}

int lineCount = 0;
try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
    while (br.readLine() != null) {
        lineCount++;
    }
}
System.out.println(lineCount);
```

*Hint:* readLine() reads until newline or end of file. The last line has no trailing newline.

**Answer:** `2`

Two lines of text exist: "Line1" (followed by newline) and "Line2" (followed by EOF). `readLine()` returns both as valid strings. The count is 2.

### Q7. [Hard] What is the output?

```java
try (PrintWriter pw = new PrintWriter("matrix.txt")) {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            pw.print(i * j + " ");
        }
        pw.println();
    }
}

try (BufferedReader br = new BufferedReader(new FileReader("matrix.txt"))) {
    System.out.println(br.readLine());
    br.readLine(); // skip second line
    System.out.println(br.readLine());
}
```

*Hint:* Trace the multiplication table. The second line is skipped.

**Answer:** `1 2 3 `
`3 6 9 `

Row 1: 1*1=1, 1*2=2, 1*3=3. Row 2 (skipped): 2*1=2, 2*2=4, 2*3=6. Row 3: 3*1=3, 3*2=6, 3*3=9. First and third lines are printed.

### Q8. [Hard] What is the output?

```java
Files.write(Paths.get("numbers.txt"), 
    List.of("10", "20", "abc", "30", "xyz"));

int sum = 0;
int errors = 0;
for (String line : Files.readAllLines(Paths.get("numbers.txt"))) {
    try {
        sum += Integer.parseInt(line);
    } catch (NumberFormatException e) {
        errors++;
    }
}
System.out.println("Sum: " + sum);
System.out.println("Errors: " + errors);
```

*Hint:* "abc" and "xyz" cannot be parsed as integers.

**Answer:** `Sum: 60`
`Errors: 2`

10 + 20 + 30 = 60. "abc" and "xyz" each throw `NumberFormatException`, incrementing errors to 2. The try-catch inside the loop allows processing to continue after errors.

### Q9. [Easy] What is the purpose of the `newLine()` method in `BufferedWriter`?

*Hint:* Think about what happens on different operating systems.

**Answer:** `newLine()` writes a platform-independent line separator. On Windows, the line separator is "\r\n". On Linux/Mac, it is "\n". Using `newLine()` instead of hardcoding "\n" makes your code work correctly across all operating systems.

If you hardcode "\n" on Windows, some text editors may not recognize the line breaks. `newLine()` uses `System.lineSeparator()` internally to write the correct sequence for the current platform.

### Q10. [Medium] What is the difference between `Files.readAllLines()` and `Files.lines()`?

*Hint:* One loads everything into memory at once. The other processes lazily.

**Answer:** `Files.readAllLines()` reads the entire file into a `List` (eager loading -- all in memory). `Files.lines()` returns a `Stream` that reads lines lazily (on demand). Use `readAllLines()` for small files when you need random access. Use `Files.lines()` for large files or when using stream operations.

Lazy loading with `Files.lines()` is memory-efficient because only one line is in memory at a time during stream processing. The stream must be closed (use try-with-resources), unlike the List from `readAllLines()`.

## Multiple Choice Questions

### Q1. [Easy] Which class is used to check if a file exists on disk?

A. FileReader
B. FileWriter
C. File
D. Scanner

**Answer:** C

**C is correct.** The `File` class provides the `exists()` method to check if a file or directory exists. `FileReader` and `FileWriter` are for reading/writing, and `Scanner` is for parsing input.

### Q2. [Easy] What does BufferedReader.readLine() return when it reaches the end of the file?

A. An empty string ""
B. The string "EOF"
C. null
D. -1

**Answer:** C

**C is correct.** `readLine()` returns `null` at end of file. An empty string is returned for blank lines in the file. -1 is returned by `read()` (single character), not `readLine()`.

### Q3. [Easy] What does try-with-resources guarantee?

A. The file will be created automatically
B. Resources will be closed automatically when the block exits
C. No exceptions will occur
D. The file will never be corrupted

**Answer:** B

**B is correct.** try-with-resources automatically calls `close()` on all declared resources when the block exits, whether normally or due to an exception.

### Q4. [Easy] Which stream type should you use to copy an image file?

A. FileReader / FileWriter
B. BufferedReader / BufferedWriter
C. FileInputStream / FileOutputStream
D. Scanner / PrintWriter

**Answer:** C

**C is correct.** Images are binary files. Character streams (Reader/Writer) apply character encoding that corrupts binary data. Byte streams (InputStream/OutputStream) handle raw bytes correctly.

### Q5. [Easy] How do you open a FileWriter in append mode?

A. new FileWriter("file.txt", "append")
B. new FileWriter("file.txt", true)
C. new FileWriter("file.txt").append()
D. FileWriter.append("file.txt")

**Answer:** B

**B is correct.** The second parameter `true` enables append mode. Without it (or with `false`), the file is truncated on opening.

### Q6. [Medium] Which method reads the entire file content as a single String in Java 11+?

A. Files.readAllLines()
B. Files.readString()
C. Files.lines()
D. Files.read()

**Answer:** B

**B is correct.** `Files.readString()` (Java 11+) reads the entire file into one String. `readAllLines()` returns a List of lines. `lines()` returns a Stream. There is no `Files.read()` method for text.

### Q7. [Medium] What interface must a class implement to be used in try-with-resources?

A. Serializable
B. Closeable only
C. AutoCloseable
D. Readable

**Answer:** C

**C is correct.** `AutoCloseable` is the required interface. `Closeable` extends `AutoCloseable`, so classes implementing `Closeable` also work. But the actual requirement is `AutoCloseable`.

### Q8. [Medium] What is the advantage of BufferedReader over FileReader?

A. BufferedReader can read binary files
B. BufferedReader uses an internal buffer for better performance
C. BufferedReader can write to files
D. BufferedReader does not require closing

**Answer:** B

**B is correct.** `BufferedReader` reads large chunks into an internal buffer (default 8192 chars), reducing the number of disk I/O operations. `FileReader` reads from disk on every `read()` call, which is much slower.

### Q9. [Medium] What does Files.lines() return?

A. List
B. String[]
C. Stream
D. Iterator

**Answer:** C

**C is correct.** `Files.lines()` returns a `Stream` that lazily reads lines from the file. This stream must be closed after use (try-with-resources).

### Q10. [Medium] What exception is thrown when you try to open a file that does not exist with FileReader?

A. IOException
B. FileNotFoundException
C. NullPointerException
D. IllegalArgumentException

**Answer:** B

**B is correct.** `FileNotFoundException` is thrown when the specified file does not exist. It is a subclass of `IOException`, so `catch (IOException e)` would also catch it.

### Q11. [Hard] In try-with-resources with multiple resources, in what order are they closed?

A. In the order they were declared
B. In reverse order of declaration
C. Alphabetical order
D. Random order

**Answer:** B

**B is correct.** Resources are closed in reverse order of declaration. This is important because later resources may depend on earlier ones (e.g., a BufferedWriter wrapping a FileWriter), so the outer wrapper must be closed first.

### Q12. [Hard] What happens if both the try block and the close() method throw exceptions in try-with-resources?

A. The try exception is lost
B. The close exception is lost
C. The close exception is added as a suppressed exception to the try exception
D. Both exceptions are thrown simultaneously

**Answer:** C

**C is correct.** The exception from the try block is the primary exception that propagates. The exception from `close()` is added as a suppressed exception, retrievable via `getSuppressed()`. This ensures no exception is silently lost.

### Q13. [Hard] Why is Scanner slower than BufferedReader for reading large files?

A. Scanner cannot read files at all
B. Scanner uses regex parsing internally for every token
C. Scanner does not use buffering
D. Scanner reads binary data instead of text

**Answer:** B

**B is correct.** `Scanner` uses regular expressions internally to parse tokens, which adds overhead. `BufferedReader.readLine()` simply reads bytes until a newline, which is significantly faster for plain line-by-line reading.

### Q14. [Hard] What is a suppressed exception in the context of try-with-resources?

A. An exception that is ignored
B. An exception thrown by close() that is attached to the primary exception
C. An exception that does not have a stack trace
D. An exception that occurs in the finally block

**Answer:** B

**B is correct.** When the try block throws an exception and then `close()` also throws an exception, the close exception is added as a suppressed exception to the primary one using `addSuppressed()`. Retrieve it with `exception.getSuppressed()`.

### Q15. [Easy] Which NIO class provides static methods like readAllLines(), write(), and exists()?

A. Path
B. Paths
C. Files
D. File

**Answer:** C

**C is correct.** The `Files` class (java.nio.file.Files) provides static utility methods for file operations. `Path` represents a file path. `Paths` creates Path objects. `File` is the older java.io class.

## Coding Challenges

### Challenge 1. Word Counter

**Difficulty:** Easy

Write a program that reads a text file and counts the total number of lines, words, and characters. Print the results in a formatted table.

**Constraints:**

- Use BufferedReader with try-with-resources. Handle FileNotFoundException.

**Sample input:**

```
Create a file with: "Hello World\nJava is great\nFile handling rocks"
```

**Sample output:**

```
Lines: 3
Words: 8
Characters: 42
```

**Solution:**

```java
import java.io.*;

public class WordCounter {
    public static void main(String[] args) {
        // Create test file
        try (PrintWriter pw = new PrintWriter("sample.txt")) {
            pw.println("Hello World");
            pw.println("Java is great");
            pw.println("File handling rocks");
        } catch (FileNotFoundException e) {
            System.out.println("Cannot create file");
            return;
        }

        int lines = 0, words = 0, chars = 0;
        try (BufferedReader br = new BufferedReader(new FileReader("sample.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                lines++;
                chars += line.length();
                String[] tokens = line.trim().split("\\s+");
                if (!tokens[0].isEmpty()) {
                    words += tokens.length;
                }
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
            return;
        }
        System.out.println("Lines: " + lines);
        System.out.println("Words: " + words);
        System.out.println("Characters: " + chars);
    }
}
```

### Challenge 2. CSV Processor

**Difficulty:** Medium

Write a program that reads a CSV file containing student names and three subject marks, calculates the average for each student, and writes the results to a new file with a pass/fail status (pass if average >= 40).

**Constraints:**

- Use BufferedReader for reading and PrintWriter for writing. Handle NumberFormatException for invalid data.

**Sample input:**

```
Arjun,85,92,78\nSneha,35,28,42\nVikram,91,88,95
```

**Sample output:**

```
Arjun,85,92,78,85.0,PASS\nSneha,35,28,42,35.0,FAIL\nVikram,91,88,95,91.3,PASS
```

**Solution:**

```java
import java.io.*;

public class CSVProcessor {
    public static void main(String[] args) {
        // Create input file
        try (PrintWriter pw = new PrintWriter("students.csv")) {
            pw.println("Arjun,85,92,78");
            pw.println("Sneha,35,28,42");
            pw.println("Vikram,91,88,95");
        } catch (FileNotFoundException e) {
            return;
        }

        try (
            BufferedReader br = new BufferedReader(new FileReader("students.csv"));
            PrintWriter pw = new PrintWriter(new FileWriter("results.csv"))
        ) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                String name = parts[0];
                try {
                    int m1 = Integer.parseInt(parts[1]);
                    int m2 = Integer.parseInt(parts[2]);
                    int m3 = Integer.parseInt(parts[3]);
                    double avg = (m1 + m2 + m3) / 3.0;
                    String status = avg >= 40 ? "PASS" : "FAIL";
                    pw.printf("%s,%d,%d,%d,%.1f,%s%n", name, m1, m2, m3, avg, status);
                } catch (NumberFormatException e) {
                    System.out.println("Invalid data for: " + name);
                }
            }
            System.out.println("Results written to results.csv");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

### Challenge 3. File Search Tool

**Difficulty:** Medium

Write a program that reads a text file and searches for a given keyword. Print each line that contains the keyword along with its line number. Also print the total number of occurrences.

**Constraints:**

- Use BufferedReader. Perform case-insensitive search. Count total occurrences (not just lines).

**Sample input:**

```
Search for "Java" in a file with multiple lines mentioning Java.
```

**Sample output:**

```
Line 2: Java is a popular language.
Line 5: Java supports OOP.
Found 2 occurrences in 2 lines.
```

**Solution:**

```java
import java.io.*;

public class FileSearch {
    public static void main(String[] args) {
        try (PrintWriter pw = new PrintWriter("article.txt")) {
            pw.println("Programming is fun.");
            pw.println("Java is a popular language.");
            pw.println("Python is also widely used.");
            pw.println("Many companies use both.");
            pw.println("Java supports OOP and multithreading.");
        } catch (FileNotFoundException e) {
            return;
        }

        String keyword = "Java";
        int lineCount = 0, totalOccurrences = 0;
        try (BufferedReader br = new BufferedReader(new FileReader("article.txt"))) {
            String line;
            int lineNum = 0;
            while ((line = br.readLine()) != null) {
                lineNum++;
                String lowerLine = line.toLowerCase();
                String lowerKey = keyword.toLowerCase();
                int index = 0;
                int count = 0;
                while ((index = lowerLine.indexOf(lowerKey, index)) != -1) {
                    count++;
                    index += lowerKey.length();
                }
                if (count > 0) {
                    lineCount++;
                    totalOccurrences += count;
                    System.out.println("Line " + lineNum + ": " + line);
                }
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
            return;
        }
        System.out.println("Found " + totalOccurrences + " occurrences in " + lineCount + " lines.");
    }
}
```

### Challenge 4. File Merger with NIO

**Difficulty:** Medium

Write a program using Java NIO that creates two text files, then merges their content into a third file. Each line in the merged file should be prefixed with the source file name.

**Constraints:**

- Use java.nio.file.Files and Path. Use Streams API to process lines.

**Sample input:**

```
File1: "Hello\nWorld", File2: "Java\nRocks"
```

**Sample output:**

```
[file1.txt] Hello\n[file1.txt] World\n[file2.txt] Java\n[file2.txt] Rocks
```

**Solution:**

```java
import java.nio.file.*;
import java.io.IOException;
import java.util.*;
import java.util.stream.*;

public class FileMerger {
    public static void main(String[] args) throws IOException {
        Path file1 = Paths.get("file1.txt");
        Path file2 = Paths.get("file2.txt");
        Path merged = Paths.get("merged.txt");

        Files.write(file1, List.of("Hello", "World"));
        Files.write(file2, List.of("Java", "Rocks"));

        List<String> mergedLines = new ArrayList<>();

        try (Stream<String> lines = Files.lines(file1)) {
            lines.map(line -> "[file1.txt] " + line)
                 .forEach(mergedLines::add);
        }
        try (Stream<String> lines = Files.lines(file2)) {
            lines.map(line -> "[file2.txt] " + line)
                 .forEach(mergedLines::add);
        }

        Files.write(merged, mergedLines);

        System.out.println("Merged file contents:");
        Files.readAllLines(merged).forEach(System.out::println);

        Files.deleteIfExists(file1);
        Files.deleteIfExists(file2);
        Files.deleteIfExists(merged);
    }
}
```

### Challenge 5. Log File Analyzer

**Difficulty:** Hard

Write a program that reads a log file where each line has the format 'LEVEL: message' (levels: INFO, WARN, ERROR). Count occurrences of each level, find all ERROR messages, and write a summary report to a new file.

**Constraints:**

- Use BufferedReader for reading, PrintWriter for writing. Handle malformed lines gracefully.

**Sample input:**

```
INFO: Server started\nWARN: Low memory\nERROR: Null pointer\nINFO: Request processed\nERROR: Timeout
```

**Sample output:**

```
Summary: INFO=2, WARN=1, ERROR=2\nErrors:\n  1. Null pointer\n  2. Timeout
```

**Solution:**

```java
import java.io.*;
import java.util.*;

public class LogAnalyzer {
    public static void main(String[] args) {
        try (PrintWriter pw = new PrintWriter("app.log")) {
            pw.println("INFO: Server started");
            pw.println("WARN: Low memory detected");
            pw.println("ERROR: NullPointerException in UserService");
            pw.println("INFO: Request processed successfully");
            pw.println("ERROR: Connection timeout to database");
            pw.println("INFO: Scheduled task completed");
            pw.println("WARN: Deprecated API usage");
        } catch (FileNotFoundException e) {
            return;
        }

        Map<String, Integer> counts = new LinkedHashMap<>();
        counts.put("INFO", 0);
        counts.put("WARN", 0);
        counts.put("ERROR", 0);
        List<String> errors = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader("app.log"))) {
            String line;
            while ((line = br.readLine()) != null) {
                int colonIndex = line.indexOf(':');
                if (colonIndex == -1) continue;
                String level = line.substring(0, colonIndex).trim();
                String message = line.substring(colonIndex + 1).trim();
                counts.merge(level, 1, Integer::sum);
                if ("ERROR".equals(level)) {
                    errors.add(message);
                }
            }
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
            return;
        }

        try (PrintWriter pw = new PrintWriter("report.txt")) {
            pw.println("=== Log Analysis Report ===");
            pw.println();
            for (Map.Entry<String, Integer> entry : counts.entrySet()) {
                pw.printf("%-8s: %d%n", entry.getKey(), entry.getValue());
            }
            pw.println();
            pw.println("Error Details:");
            for (int i = 0; i < errors.size(); i++) {
                pw.printf("  %d. %s%n", i + 1, errors.get(i));
            }
            System.out.println("Report written to report.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Write error: " + e.getMessage());
        }
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/file-handling-in-java/*
