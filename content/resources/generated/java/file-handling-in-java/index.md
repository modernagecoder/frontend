---
title: "File Handling in Java - FileReader, BufferedReader, NIO, try-with-resources | Modern Age Coders"
description: "Learn Java file handling including File class, FileReader, FileWriter, BufferedReader, BufferedWriter, try-with-resources, Scanner for files, byte streams, and Java NIO Path and Files. Includes 55+ practice questions with output prediction and coding challenges."
slug: file-handling-in-java
canonical: https://learn.modernagecoders.com/resources/java/file-handling-in-java
category: "Java"
keywords: ["java file handling", "java read write file", "BufferedReader java", "java file io tutorial", "java FileReader", "java FileWriter", "java NIO", "java try with resources", "java file class", "java read file line by line"]
---
# File Handling in Java

**Difficulty:** Advanced  
**Reading time:** 45 min  
**Chapter:** 21  
**Practice questions:** 55

## What Is File Handling in Java?

**File handling** refers to the ability to create, read, write, and manipulate files on disk from within your Java program. Almost every real-world application needs to interact with the file system: reading configuration files, writing log files, processing CSV data, or saving user preferences.

```java
import java.io.File;

File file = new File("data.txt");
System.out.println("Exists: " + file.exists());
System.out.println("Name: " + file.getName());
```

Java provides two main approaches to file I/O: the classic `java.io` package (character streams and byte streams) and the newer `java.nio.file` package (NIO.2, introduced in Java 7). Both are important for interviews and real development.

### Streams in Java I/O

In the context of file handling, a **stream** is a sequence of data flowing between your program and an external source (file, network, etc.). Java has two categories:

- **Character Streams** (Reader/Writer): Handle text data as characters. Use these for text files.
- **Byte Streams** (InputStream/OutputStream): Handle raw binary data. Use these for images, PDFs, and other binary files.

Understanding the difference is critical: reading a JPEG image with a character stream will corrupt the data, and reading a text file with a byte stream ignores character encoding.

## Why Is File Handling Important?

### 1. Persistence Beyond Program Execution

Variables in memory are lost when the program exits. File handling lets you store data permanently on disk. If Arjun builds a student management system, the student records must survive after the application closes. Without file handling, every restart means starting from scratch.

### 2. Processing External Data

Real applications rarely work with hardcoded data. A data analytics tool reads CSV files. A web server reads configuration files. A compiler reads source code files. File handling is the bridge between your program and the outside world.

### 3. Logging and Auditing

Production applications write log files to track errors, user actions, and system events. When Meera is debugging a server crash at 3 AM, log files are the only source of information about what happened. Writing logs requires file handling.

### 4. Data Exchange Between Systems

Files are one of the most common formats for data exchange between applications. APIs exchange JSON files. Databases export CSV files. Build tools read XML configuration files. Understanding file I/O is essential for system integration.

### 5. Interview and Placement Relevance

File handling questions appear in campus placements at companies like TCS, Infosys, Wipro, and Cognizant. Interviewers test whether candidates understand resource management (try-with-resources), the difference between character and byte streams, and efficient reading techniques (buffered I/O).

## Detailed Explanation

### 1. The File Class

The `java.io.File` class represents a file or directory path. It does not read or write data -- it provides metadata and path operations:

```java
import java.io.File;

File file = new File("report.txt");

// Check existence and type
System.out.println("Exists: " + file.exists());         // true or false
System.out.println("Is file: " + file.isFile());         // true if regular file
System.out.println("Is directory: " + file.isDirectory()); // true if directory

// File properties
System.out.println("Name: " + file.getName());           // report.txt
System.out.println("Path: " + file.getAbsolutePath());   // full path
System.out.println("Size: " + file.length() + " bytes"); // file size

// Create and delete
File newFile = new File("temp.txt");
newFile.createNewFile();  // creates the file
newFile.delete();         // deletes the file

// List directory contents
File dir = new File(".");
String[] contents = dir.list();
File[] files = dir.listFiles();
```

Key point: `new File("report.txt")` does not create a file on disk. It creates a Java object representing that path. The file may or may not actually exist.

### 2. FileReader and FileWriter (Character Streams)

`FileReader` reads characters from a file. `FileWriter` writes characters to a file. These are the simplest text file I/O classes:

```java
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;

// Writing to a file
try {
    FileWriter writer = new FileWriter("output.txt");
    writer.write("Hello, World!\n");
    writer.write("Java file handling.");
    writer.close();
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Reading from a file (character by character)
try {
    FileReader reader = new FileReader("output.txt");
    int ch;
    while ((ch = reader.read()) != -1) {
        System.out.print((char) ch);
    }
    reader.close();
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
```

The `read()` method returns an `int`. It returns -1 when the end of the file is reached. You cast it to `char` to get the actual character. The second argument `true` in `new FileWriter("file.txt", true)` enables append mode.

### 3. BufferedReader and BufferedWriter

Buffered streams wrap around basic streams to improve performance. Instead of reading one character at a time from disk (slow), they read a large chunk into an internal buffer:

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

// Buffered writing
try (BufferedWriter bw = new BufferedWriter(new FileWriter("data.txt"))) {
    bw.write("Line one");
    bw.newLine();  // platform-independent newline
    bw.write("Line two");
    bw.newLine();
    bw.write("Line three");
}

// Buffered reading (line by line)
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
```

`BufferedReader.readLine()` returns a full line as a String, or `null` at end of file. This is the most common way to read text files line by line. The default buffer size is 8192 characters, which is sufficient for most use cases.

### 4. try-with-resources (AutoCloseable)

Streams hold system resources (file handles). If you forget to close them, you leak resources. Java 7 introduced **try-with-resources** to guarantee automatic closing:

```java
// Without try-with-resources (manual close, error-prone)
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("data.txt"));
    String line = br.readLine();
    System.out.println(line);
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (br != null) {
        try {
            br.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// With try-with-resources (automatic close, clean)
try (BufferedReader br2 = new BufferedReader(new FileReader("data.txt"))) {
    String line = br2.readLine();
    System.out.println(line);
} catch (IOException e) {
    e.printStackTrace();
}
// br2 is automatically closed here, even if an exception occurred
```

Any class that implements `AutoCloseable` (or `Closeable`) can be used in try-with-resources. All I/O stream classes implement this. You can declare multiple resources separated by semicolons.

### 5. Scanner for File Reading

The `Scanner` class (familiar from reading console input) can also read from files:

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

try (Scanner scanner = new Scanner(new File("data.txt"))) {
    while (scanner.hasNextLine()) {
        String line = scanner.nextLine();
        System.out.println(line);
    }
} catch (FileNotFoundException e) {
    System.out.println("File not found: " + e.getMessage());
}

// Reading integers from a file
try (Scanner scanner = new Scanner(new File("numbers.txt"))) {
    while (scanner.hasNextInt()) {
        int num = scanner.nextInt();
        System.out.println("Read: " + num);
    }
} catch (FileNotFoundException e) {
    System.out.println("File not found");
}
```

Scanner is convenient for reading formatted data (integers, doubles, tokens), but `BufferedReader` is faster for reading large text files because Scanner uses regex parsing internally.

### 6. FileInputStream and FileOutputStream (Byte Streams)

For binary files (images, audio, executables), use byte streams:

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

// Copy a file byte by byte
try (
    FileInputStream fis = new FileInputStream("source.jpg");
    FileOutputStream fos = new FileOutputStream("copy.jpg")
) {
    int byteData;
    while ((byteData = fis.read()) != -1) {
        fos.write(byteData);
    }
    System.out.println("File copied successfully.");
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}

// Efficient copy with byte array buffer
try (
    FileInputStream fis = new FileInputStream("source.jpg");
    FileOutputStream fos = new FileOutputStream("copy.jpg")
) {
    byte[] buffer = new byte[4096];
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
        fos.write(buffer, 0, bytesRead);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

Reading byte by byte is extremely slow. Always use a buffer (byte array) for real applications. The buffer size of 4096 or 8192 bytes is a common choice.

### 7. Path and Files (Java NIO.2)

Java 7 introduced the `java.nio.file` package with `Path` and `Files` classes. These are modern, more powerful alternatives:

```java
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;
import java.util.List;

// Creating a Path
Path path = Paths.get("data.txt");
System.out.println("Filename: " + path.getFileName());
System.out.println("Absolute: " + path.toAbsolutePath());
System.out.println("Exists: " + Files.exists(path));

// Read all lines into a List
List lines = Files.readAllLines(path);
for (String line : lines) {
    System.out.println(line);
}

// Write lines to a file
List data = List.of("Line 1", "Line 2", "Line 3");
Files.write(Paths.get("output.txt"), data);

// Read entire file as a single String (Java 11+)
String content = Files.readString(path);
System.out.println(content);

// Write a String to a file (Java 11+)
Files.writeString(Paths.get("output.txt"), "Hello from NIO!");
```

`Files.readAllLines()` loads the entire file into memory. This is convenient for small to medium files but dangerous for very large files (you could run out of heap space). For large files, use `BufferedReader` or `Files.lines()` which returns a lazy Stream.

### 8. Reading a File with Streams (Java 8+)

```java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.stream.Stream;

// Lazy reading with Streams
try (Stream lines = Files.lines(Paths.get("data.txt"))) {
    lines.filter(line -> !line.isEmpty())
         .map(String::toUpperCase)
         .forEach(System.out::println);
} catch (IOException e) {
    e.printStackTrace();
}
```

`Files.lines()` returns a `Stream` that reads lines lazily (on demand). It is memory-efficient for large files and integrates with the Streams API for filtering, mapping, and collecting.

### 9. Writing with PrintWriter

`PrintWriter` provides convenient `println()`, `printf()`, and `print()` methods, similar to `System.out`:

```java
import java.io.PrintWriter;
import java.io.IOException;

try (PrintWriter pw = new PrintWriter("report.txt")) {
    pw.println("Student Report");
    pw.println("==============");
    pw.printf("%-15s %5s %5s%n", "Name", "Math", "Java");
    pw.printf("%-15s %5d %5d%n", "Arjun", 92, 88);
    pw.printf("%-15s %5d %5d%n", "Sneha", 96, 91);
} catch (IOException e) {
    e.printStackTrace();
}
```

### 10. Common File Operations Summary

TaskRecommended ApproachRead text file line by lineBufferedReader or Files.lines()Read entire small text fileFiles.readAllLines() or Files.readString()Write text to a fileBufferedWriter or PrintWriter or Files.write()Copy binary filesFileInputStream/FileOutputStream with bufferCheck file existence and metadataFile class or Files.exists()Read structured data (CSV, tokens)Scanner

## Code Examples

### File Class: Checking File Properties

```java
import java.io.File;

public class FileProperties {
    public static void main(String[] args) {
        File file = new File("sample.txt");

        System.out.println("Name: " + file.getName());
        System.out.println("Exists: " + file.exists());
        System.out.println("Absolute path: " + file.getAbsolutePath());

        if (file.exists()) {
            System.out.println("Is file: " + file.isFile());
            System.out.println("Is directory: " + file.isDirectory());
            System.out.println("Size: " + file.length() + " bytes");
            System.out.println("Can read: " + file.canRead());
            System.out.println("Can write: " + file.canWrite());
        }

        // List files in current directory
        File dir = new File(".");
        File[] files = dir.listFiles();
        if (files != null) {
            System.out.println("\nFiles in current directory:");
            for (File f : files) {
                String type = f.isDirectory() ? "[DIR]" : "[FILE]";
                System.out.println("  " + type + " " + f.getName());
            }
        }
    }
}
```

The `File` class provides metadata about files and directories. `new File("sample.txt")` does not create the file -- it creates an object representing that path. Methods like `exists()`, `isFile()`, `length()`, and `listFiles()` query the file system. Always check `exists()` before accessing properties.

**Output:**

```
Name: sample.txt
Exists: true
Absolute path: /home/user/sample.txt
Is file: true
Is directory: false
Size: 45 bytes
Can read: true
Can write: true

Files in current directory:
  [FILE] sample.txt
  [DIR] src
  [FILE] Main.java
```

### BufferedReader and BufferedWriter: Efficient Text I/O

```java
import java.io.BufferedWriter;
import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;

public class BufferedIO {
    public static void main(String[] args) {
        String filename = "students.txt";

        // Write student data
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(filename))) {
            bw.write("Arjun,85,92,78");
            bw.newLine();
            bw.write("Sneha,91,88,95");
            bw.newLine();
            bw.write("Vikram,76,82,89");
            bw.newLine();
            System.out.println("Data written successfully.");
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
        }

        // Read and process student data
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            System.out.println("\nStudent Averages:");
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                String name = parts[0];
                int sum = 0;
                for (int i = 1; i < parts.length; i++) {
                    sum += Integer.parseInt(parts[i]);
                }
                double avg = sum / (double) (parts.length - 1);
                System.out.printf("%s: %.1f%n", name, avg);
            }
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
        }
    }
}
```

`BufferedWriter` wraps a `FileWriter` and buffers output for efficiency. `newLine()` writes a platform-independent line separator. `BufferedReader` wraps a `FileReader` and provides `readLine()` which returns null at end of file. Both are declared in try-with-resources so they are automatically closed.

**Output:**

```
Data written successfully.

Student Averages:
Arjun: 85.0
Sneha: 91.3
Vikram: 82.3
```

### try-with-resources: Automatic Resource Management

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class TryWithResources {
    public static void main(String[] args) {
        // Multiple resources in one try-with-resources
        try (
            BufferedWriter writer = new BufferedWriter(new FileWriter("source.txt"));
        ) {
            writer.write("Line 1: Java is powerful.\n");
            writer.write("Line 2: File handling is essential.\n");
            writer.write("Line 3: try-with-resources prevents leaks.");
        } catch (IOException e) {
            System.out.println("Write failed: " + e.getMessage());
        }

        // Copy file contents using two resources
        try (
            BufferedReader reader = new BufferedReader(new FileReader("source.txt"));
            BufferedWriter writer = new BufferedWriter(new FileWriter("destination.txt"))
        ) {
            String line;
            int lineNumber = 0;
            while ((line = reader.readLine()) != null) {
                lineNumber++;
                writer.write(lineNumber + ": " + line);
                writer.newLine();
            }
            System.out.println("Copied " + lineNumber + " lines.");
        } catch (IOException e) {
            System.out.println("Copy failed: " + e.getMessage());
        }
        // Both reader and writer are automatically closed here
    }
}
```

try-with-resources automatically calls `close()` on every resource declared in the parentheses when the block exits, whether normally or due to an exception. Multiple resources are separated by semicolons. Resources are closed in reverse order of declaration. This eliminates the need for verbose finally blocks.

**Output:**

```
Copied 3 lines.
```

### Scanner for Reading Formatted File Data

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ScannerFileReading {
    public static void main(String[] args) {
        // Create a data file first
        try (PrintWriter pw = new PrintWriter("scores.txt")) {
            pw.println("Arjun 85 92 78");
            pw.println("Priya 91 88 95");
            pw.println("Rohan 76 82 89");
        } catch (FileNotFoundException e) {
            System.out.println("Cannot create file");
            return;
        }

        // Read using Scanner
        try (Scanner scanner = new Scanner(new File("scores.txt"))) {
            System.out.printf("%-10s %6s %6s %6s %8s%n", 
                              "Name", "Sub1", "Sub2", "Sub3", "Average");
            System.out.println("-".repeat(42));

            while (scanner.hasNextLine()) {
                Scanner lineScanner = new Scanner(scanner.nextLine());
                String name = lineScanner.next();
                int s1 = lineScanner.nextInt();
                int s2 = lineScanner.nextInt();
                int s3 = lineScanner.nextInt();
                double avg = (s1 + s2 + s3) / 3.0;
                System.out.printf("%-10s %6d %6d %6d %8.1f%n", 
                                  name, s1, s2, s3, avg);
                lineScanner.close();
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}
```

`Scanner` can read from a `File` object. It supports reading specific types with `nextInt()`, `nextDouble()`, `next()`, and `nextLine()`. Using a separate `Scanner` on each line allows parsing mixed data types. Scanner is convenient for structured data but slower than BufferedReader for large files.

**Output:**

```
Name         Sub1   Sub2   Sub3  Average
------------------------------------------
Arjun          85     92     78     85.0
Priya          91     88     95     91.3
Rohan          76     82     89     82.3
```

### Byte Streams: Copying a Binary File

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class ByteStreamCopy {
    public static void main(String[] args) {
        // Create a sample binary file
        try (FileOutputStream fos = new FileOutputStream("data.bin")) {
            byte[] data = {72, 101, 108, 108, 111}; // "Hello" in ASCII
            fos.write(data);
            System.out.println("Binary file created.");
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
            return;
        }

        // Copy using buffered byte reading
        long startTime = System.nanoTime();
        try (
            FileInputStream fis = new FileInputStream("data.bin");
            FileOutputStream fos = new FileOutputStream("data_copy.bin")
        ) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            long totalBytes = 0;

            while ((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;
            }

            long elapsed = System.nanoTime() - startTime;
            System.out.println("Copied " + totalBytes + " bytes");
            System.out.println("Time: " + (elapsed / 1_000_000) + " ms");
        } catch (IOException e) {
            System.out.println("Copy error: " + e.getMessage());
        }
    }
}
```

Byte streams (`FileInputStream`/`FileOutputStream`) handle raw bytes, making them suitable for binary files. The `read(buffer)` method fills the byte array and returns the number of bytes actually read, or -1 at end of file. `write(buffer, 0, bytesRead)` writes only the bytes that were read, avoiding extra data at the end of the file.

**Output:**

```
Binary file created.
Copied 5 bytes
Time: 1 ms
```

### Java NIO: Path and Files for Modern File I/O

```java
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

public class NIOFileHandling {
    public static void main(String[] args) throws IOException {
        Path path = Paths.get("nio_demo.txt");

        // Write lines using Files.write()
        List<String> lines = List.of(
            "Java NIO is powerful.",
            "Files class simplifies I/O.",
            "Path replaces File in modern Java.",
            "",
            "This is the last line."
        );
        Files.write(path, lines);
        System.out.println("File written with " + lines.size() + " lines.");

        // Read all lines at once
        List<String> readLines = Files.readAllLines(path);
        System.out.println("\nAll lines:");
        for (int i = 0; i < readLines.size(); i++) {
            System.out.println((i + 1) + ": " + readLines.get(i));
        }

        // Read with Streams (lazy, memory-efficient)
        System.out.println("\nNon-empty lines (uppercase):");
        try (Stream<String> stream = Files.lines(path)) {
            stream.filter(line -> !line.isEmpty())
                  .map(String::toUpperCase)
                  .forEach(System.out::println);
        }

        // File metadata via Files class
        System.out.println("\nFile size: " + Files.size(path) + " bytes");
        System.out.println("Is readable: " + Files.isReadable(path));

        // Cleanup
        Files.deleteIfExists(path);
        System.out.println("File deleted.");
    }
}
```

`Files.write()` and `Files.readAllLines()` provide one-line file I/O for small files. `Files.lines()` returns a lazy `Stream` that reads on demand, which is memory-efficient for large files. The stream must be closed (use try-with-resources). `Paths.get()` creates a `Path` object, which is the NIO equivalent of `File`.

**Output:**

```
File written with 5 lines.

All lines:
1: Java NIO is powerful.
2: Files class simplifies I/O.
3: Path replaces File in modern Java.
4: 
5: This is the last line.

Non-empty lines (uppercase):
JAVA NIO IS POWERFUL.
FILES CLASS SIMPLIFIES I/O.
PATH REPLACES FILE IN MODERN JAVA.
THIS IS THE LAST LINE.

File size: 97 bytes
Is readable: true
File deleted.
```

### PrintWriter: Formatted File Output

```java
import java.io.PrintWriter;
import java.io.IOException;

public class PrintWriterDemo {
    public static void main(String[] args) {
        try (PrintWriter pw = new PrintWriter("report.txt")) {
            pw.println("=== Semester Results ===");
            pw.println();

            String[] names = {"Arjun", "Sneha", "Vikram", "Kavya"};
            int[][] marks = {
                {85, 92, 78},
                {91, 88, 95},
                {76, 82, 89},
                {93, 87, 91}
            };

            pw.printf("%-12s %6s %6s %6s %8s%n", "Name", "Math", "Java", "DBMS", "Average");
            pw.println("-".repeat(44));

            for (int i = 0; i < names.length; i++) {
                int sum = marks[i][0] + marks[i][1] + marks[i][2];
                double avg = sum / 3.0;
                pw.printf("%-12s %6d %6d %6d %8.1f%n",
                          names[i], marks[i][0], marks[i][1], marks[i][2], avg);
            }

            pw.println("-".repeat(44));
            System.out.println("Report written to report.txt");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

`PrintWriter` provides `println()`, `print()`, and `printf()` methods identical to `System.out` but directed to a file. It is the most convenient class for writing formatted text reports. Unlike `FileWriter`, it does not throw `IOException` on individual write calls (it swallows them -- check with `checkError()` if needed).

**Output:**

```
Report written to report.txt
```

## Common Mistakes

### Forgetting to Close Streams (Resource Leak)

**Wrong:**

```
BufferedReader br = new BufferedReader(new FileReader("data.txt"));
String line = br.readLine();
System.out.println(line);
// br is never closed -- resource leak!
```

No compile error, but the file handle is never released. Over time, the program can run out of file handles and crash with 'Too many open files'.

**Correct:**

```
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line = br.readLine();
    System.out.println(line);
}
// br is automatically closed here
```

Every stream must be closed after use. try-with-resources is the safest and cleanest approach because it guarantees closing even if an exception occurs. Never rely on garbage collection to close streams -- it is not guaranteed to happen promptly.

### Not Handling IOException

**Wrong:**

```
// This does not compile!
BufferedReader br = new BufferedReader(new FileReader("data.txt"));
String line = br.readLine();
```

Compile error: unreported exception IOException; must be caught or declared to be thrown.

**Correct:**

```
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line = br.readLine();
    System.out.println(line);
} catch (IOException e) {
    System.out.println("Error reading file: " + e.getMessage());
}
```

`IOException` is a checked exception. The compiler forces you to either catch it with try-catch or declare it with `throws IOException` in the method signature. This is a fundamental rule in Java -- you cannot ignore checked exceptions.

### Using Character Streams for Binary Files

**Wrong:**

```
// Reading an image with FileReader -- WRONG
try (FileReader fr = new FileReader("photo.jpg")) {
    int ch;
    while ((ch = fr.read()) != -1) {
        // This corrupts binary data!
    }
}
```

No compile error, but the image data is corrupted because FileReader interprets bytes as characters using a character encoding, which transforms the binary data.

**Correct:**

```
// Use byte streams for binary files
try (FileInputStream fis = new FileInputStream("photo.jpg")) {
    byte[] buffer = new byte[4096];
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
        // Process raw bytes correctly
    }
}
```

`FileReader` applies character encoding (like UTF-8) to the bytes it reads. For text files this is correct, but for binary files it corrupts data. Always use `FileInputStream`/`FileOutputStream` for binary data.

### Overwriting a File Instead of Appending

**Wrong:**

```
// Each call overwrites the previous content!
try (FileWriter fw = new FileWriter("log.txt")) {
    fw.write("Log entry 1\n");
}
try (FileWriter fw = new FileWriter("log.txt")) {
    fw.write("Log entry 2\n");
}
// log.txt only contains "Log entry 2"
```

FileWriter's default constructor truncates the file. The first log entry is lost.

**Correct:**

```
// Use append mode: new FileWriter(filename, true)
try (FileWriter fw = new FileWriter("log.txt", true)) {
    fw.write("Log entry 1\n");
}
try (FileWriter fw = new FileWriter("log.txt", true)) {
    fw.write("Log entry 2\n");
}
// log.txt contains both entries
```

The second parameter `true` in `new FileWriter(filename, true)` enables append mode. Without it, the file is truncated (emptied) every time it is opened. This is a common mistake in logging code.

### Comparing readLine() Return with Empty String Instead of null

**Wrong:**

```
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != "") {  // WRONG comparison
        System.out.println(line);
    }
}
```

This may create an infinite loop or miss the end of file. readLine() returns null at EOF, not an empty string. Also, == compares references, not content.

**Correct:**

```
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {  // Correct: check for null
        System.out.println(line);
    }
}
```

`readLine()` returns `null` at end of file, not an empty string. An empty line in the file returns `""` (empty string), which is a valid value. Always check for `null` to detect end of file.

## Summary

- The File class represents a path (file or directory) and provides metadata methods like exists(), isFile(), getName(), length(), and listFiles(). It does not read or write file content.
- Character streams (FileReader/FileWriter) handle text data. Byte streams (FileInputStream/FileOutputStream) handle binary data. Using the wrong type corrupts data.
- BufferedReader and BufferedWriter wrap basic streams for efficient I/O by using an internal buffer. BufferedReader.readLine() reads one line at a time and returns null at end of file.
- try-with-resources (Java 7+) automatically closes any AutoCloseable resource when the block exits. It eliminates the need for verbose finally blocks and prevents resource leaks.
- Scanner can read files with type-specific methods (nextInt, nextDouble, nextLine) but is slower than BufferedReader for large files due to internal regex parsing.
- FileInputStream and FileOutputStream handle raw bytes. Always use a byte array buffer (not byte-by-byte reading) for acceptable performance.
- Java NIO.2 (Path and Files classes) provides modern file operations: Files.readAllLines() loads a file into a List, Files.lines() returns a lazy Stream, Files.write() writes a collection of lines.
- Files.readString() and Files.writeString() (Java 11+) provide single-method file I/O for small files.
- PrintWriter offers println(), print(), and printf() methods for formatted file output, identical to System.out but directed to a file.
- FileWriter's default mode truncates the file. Pass true as the second constructor argument for append mode: new FileWriter(filename, true).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/file-handling-in-java/*
*Practice questions: https://learn.modernagecoders.com/resources/java/file-handling-in-java/practice/*
