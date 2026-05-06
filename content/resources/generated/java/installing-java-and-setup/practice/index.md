---
title: "Practice: Installing Java and Setting Up Your Environment"
description: "52 practice problems for Installing Java and Setting Up Your Environment in Java"
slug: installing-java-and-setup-practice
canonical: https://learn.modernagecoders.com/resources/java/installing-java-and-setup/practice/
category: "Java"
---
# Practice: Installing Java and Setting Up Your Environment

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What command checks your Java version?

```
java -version
```

And what checks the compiler version?

```
javac -version
```

*Hint:* java runs programs, javac compiles them.

**Answer:** java -version shows runtime version. javac -version shows compiler version. Both should match.

java is the JVM that runs compiled code. javac is the Java compiler. Both come with JDK. If javac is not found, JDK is not installed (only JRE).

### Q2. [Easy] What is the output?

```
public class Hello {
    public static void main(String[] args) {
        System.out.println(args.length);
    }
}
```

Run with: java Hello one two three

*Hint:* args is the command-line arguments array.

**Answer:** 3

args receives command-line arguments as a String array. "one two three" gives 3 arguments, so args.length is 3.

### Q3. [Easy] You have this file. What two commands compile and run it?

```
// File: Greet.java
public class Greet {
    public static void main(String[] args) {
        System.out.println("Namaste!");
    }
}
```

*Hint:* First compile with javac, then run with java.

**Answer:** javac Greet.java
java Greet

javac Greet.java compiles to Greet.class (bytecode). java Greet runs it on the JVM. Note: no .class extension when running.

### Q4. [Easy] Will this compile?

```
// File: MyApp.java
public class myApp {
    public static void main(String[] args) {
        System.out.println("Running");
    }
}
```

*Hint:* Public class name must match the filename exactly.

**Answer:** No. Error: class myApp is public, should be declared in a file named myApp.java

The public class name (myApp) must exactly match the filename (MyApp.java). Either rename the class to MyApp or the file to myApp.java.

### Q5. [Easy] What is the output?

```
System.out.println("Line 1");
System.out.print("Line 2");
System.out.print(" still line 2");
System.out.println();
System.out.println("Line 3");
```

*Hint:* println adds newline, print does not.

**Answer:** Line 1
Line 2 still line 2
Line 3

println() adds a newline after printing. print() stays on the same line. println() with no argument just prints a newline.

### Q6. [Medium] What is the output?

```
System.out.printf("Name: %s, Age: %d, GPA: %.2f%n", "Aarav", 20, 9.5678);
```

*Hint:* %s for string, %d for int, %.2f for 2 decimal float.

**Answer:** Name: Aarav, Age: 20, GPA: 9.57

printf uses format specifiers: %s (string), %d (integer), %.2f (float with 2 decimal places, rounded). %n adds a newline.

### Q7. [Medium] What happens when you run this?

```
public class Test {
    public static void main(String args) {
        System.out.println("Hello");
    }
}
```

*Hint:* Check the main method signature carefully.

**Answer:** It compiles but gives runtime error: Main method not found

The main method signature must be exactly: public static void main(String[] args). Without [] it is a regular method, not the entry point.

### Q8. [Medium] What is the output?

```
int a = 10, b = 3;
System.out.println(a + " / " + b + " = " + a/b);
System.out.println(a + " % " + b + " = " + a%b);
```

*Hint:* Integer division and modulus.

**Answer:** 10 / 3 = 3
10 % 3 = 1

10/3=3 (integer division, decimal truncated). 10%3=1 (remainder). String concatenation with + builds the output message.

### Q9. [Medium] What is the output?

```
String s = "JAVA";
for (int i = s.length()-1; i >= 0; i--) {
    System.out.print(s.charAt(i));
}
```

*Hint:* This iterates through the string backwards.

**Answer:** AVAJ

Starting from the last index (3) going to 0, it prints J-A-V-A in reverse: A-V-A-J. This is a common pattern to reverse a string.

### Q10. [Medium] Write a Java program that prints the multiplication table of 7 (from 7x1 to 7x10).

*Hint:* Use a for loop from 1 to 10.

**Answer:** for (int i = 1; i <= 10; i++) {
    System.out.println("7 x " + i + " = " + (7*i));
}

The loop runs from 1 to 10. Each iteration prints 7 multiplied by i. Parentheses around (7*i) ensure multiplication happens before concatenation.

### Q11. [Hard] What is the output?

```
char c = 65;
System.out.println(c);
System.out.println(c + 1);
System.out.println((char)(c + 1));
```

*Hint:* char can hold an integer (ASCII value). 65 = A.

**Answer:** A
66
B

char 65 is A (ASCII). c+1 promotes to int (66). (char)(c+1) casts back to char (B). Java chars are numeric under the hood.

### Q12. [Hard] Find the bug:

```
Scanner sc = new Scanner(System.in);
System.out.print("Enter number: ");
int num = sc.nextInt();
System.out.print("Enter name: ");
String name = sc.nextLine();
System.out.println("Hello " + name + ", number: " + num);
```

*Hint:* nextInt() leaves a newline in the buffer.

**Answer:** name will be empty. Fix: add sc.nextLine() after sc.nextInt() to consume the leftover newline.

nextInt() reads the number but leaves 
 in the buffer. The next nextLine() reads that leftover 
 as an empty string. Always consume the newline after nextInt().

### Q13. [Hard] What is the single-file source-code execution feature introduced in Java 11? What are its limitations?

*Hint:* It lets you run a .java file directly with the java command.

**Answer:** Java 11 introduced the ability to run single-file Java programs directly: `java HelloWorld.java` compiles the source in memory and executes it without producing a .class file on disk. **Limitations:** (1) Only works for single-file programs. (2) Cannot reference classes in other source files. (3) Cannot use external library JARs. (4) Recompiles every time (no caching). (5) Not suitable for production code.

This feature was added for convenience in scripting, quick testing, and learning. Behind the scenes, the JVM compiles the source to bytecode in memory and immediately executes it. For multi-file projects, you still need explicit compilation with javac or a build tool.

### Q14. [Easy] What JDK version should a student install in 2026 for learning Java?

*Hint:* Always use the latest Long-Term Support version.

**Answer:** Students should install **JDK 21**, which is the latest Long-Term Support (LTS) version. LTS versions receive extended security updates and are the standard choice for both learning and production use.

While newer non-LTS versions may be available, LTS versions are preferred because they are stable, widely documented, and supported by all major IDEs and build tools. Java 21 includes all modern features (records, sealed classes, pattern matching, virtual threads) while being a stable, well-supported release.

### Q15. [Medium] Neha installed JDK 21 on Windows but gets 'javac is not recognized.' She verified the JDK is installed at C:\Program Files\Java\jdk-21. What steps should she take to fix this?

*Hint:* She needs to set environment variables and open a new terminal.

**Answer:** Neha should: (1) Open System Properties > Environment Variables. (2) Create a new system variable `JAVA_HOME` with value `C:\Program Files\Java\jdk-21`. (3) Edit the `Path` system variable and add `%JAVA_HOME%\bin`. (4) Click OK on all dialogs. (5) Open a **new** Command Prompt (the old one has the old PATH). (6) Run `javac -version` to verify.

The key detail that most beginners miss is step 5: you must open a new terminal window after changing environment variables. Existing terminal windows retain the old PATH values. If it still does not work, verify that the path `C:\Program Files\Java\jdk-21\bin\javac.exe` actually exists.

## Mixed Questions

### Q1. [Easy] What file extension do Java source code files have? What extension do compiled bytecode files have?

*Hint:* One is the code you write, the other is what the compiler produces.

**Answer:** Java source code files have the `.java` extension. Compiled bytecode files have the `.class` extension. The compiler (`javac`) converts `.java` files into `.class` files.

The naming is straightforward: you write code in .java files, and the compiler produces .class files containing bytecode. Each public class in your source code produces one .class file. If you have inner classes, they produce separate .class files with names like OuterClass$InnerClass.class.

### Q2. [Easy] Vikram downloads and installs the JRE but cannot compile his Java program. Why?

*Hint:* What does the JRE include vs what does the JDK include?

**Answer:** The JRE (Java Runtime Environment) only includes the JVM and standard libraries needed to **run** Java programs. It does not include the `javac` compiler needed to **compile** Java programs. Vikram needs to install the **JDK** (Java Development Kit) which includes both the JRE and development tools.

This is one of the most common beginner mistakes. The distinction is: JRE = for running Java programs, JDK = for developing Java programs. Since Java 11, Oracle no longer provides a standalone JRE download, but the conceptual distinction remains important for understanding the Java ecosystem.

### Q3. [Medium] Ananya has two Java installations on her Windows machine: JDK 8 and JDK 21. When she types `java -version`, it shows Java 8. But she wants to use Java 21. How should she fix this?

*Hint:* The system uses whichever Java comes first in the PATH.

**Answer:** Ananya should: (1) Update `JAVA_HOME` to point to the JDK 21 directory. (2) Ensure `%JAVA_HOME%\bin` appears **before** the JDK 8 path in the `PATH` variable. (3) Alternatively, remove JDK 8 from PATH entirely if she no longer needs it. (4) Open a new terminal and verify with `java -version`.

The operating system searches the PATH variable from left to right and uses the first match. If JDK 8's bin directory appears before JDK 21's, the system will always find Java 8 first. By placing `%JAVA_HOME%\bin` at the beginning of PATH and pointing JAVA_HOME to JDK 21, she ensures the correct version is used.

### Q4. [Medium] Write the terminal commands (not Java code) to: (a) create a directory called 'bin', (b) compile a file called Calculator.java into the bin directory, and (c) run the compiled Calculator class from the bin directory.

*Hint:* Use mkdir, javac with -d, and java with -cp.

**Answer:** ```
mkdir bin
javac -d bin Calculator.java
java -cp bin Calculator
```

`mkdir bin` creates the output directory. `javac -d bin Calculator.java` compiles the source and places Calculator.class in bin/. `java -cp bin Calculator` runs the class, telling the JVM to look in bin/ for .class files. The `-cp` flag sets the classpath.

### Q5. [Medium] What is the standard directory structure for a Java project? What goes in src/, bin/, and lib/?

*Hint:* Source code, compiled classes, and external libraries each have their directory.

**Answer:** `src/` contains Java source code (.java files), organized in package directories. `bin/` (or `target/classes/`) contains compiled bytecode (.class files), mirroring the package structure. `lib/` contains external library JAR files that the project depends on.

This separation keeps the project organized and makes it easy to distribute compiled code without source, or vice versa. Modern build tools (Maven, Gradle) enforce an even more specific structure: Maven uses `src/main/java/` for source and `src/test/java/` for tests.

### Q6. [Hard] Explain the difference between compiling with `javac HelloWorld.java` and running with `java HelloWorld.java` (Java 11+). What happens internally in each case?

*Hint:* One produces a .class file on disk, the other compiles in memory.

**Answer:** `javac HelloWorld.java` compiles the source file and writes `HelloWorld.class` to disk. You then run it separately with `java HelloWorld`. `java HelloWorld.java` (Java 11+) compiles the source in memory, does NOT produce a .class file on disk, and immediately executes the program. The in-memory compilation happens every time you run the command (no caching).

The traditional two-step approach (javac + java) is required for multi-file projects and produces persistent .class files. The single-step approach (java File.java) is a convenience feature for single-file programs. Use the traditional approach for real projects and the shortcut for quick tests and learning exercises.

### Q7. [Hard] Aarav is setting up IntelliJ IDEA for the first time. He creates a new project but the IDE says 'No JDK found.' What should he do? How does IntelliJ detect the JDK?

*Hint:* IntelliJ needs to know where the JDK is installed. It can auto-detect or you can specify manually.

**Answer:** Aarav should: (1) Click the SDK dropdown in the New Project dialog and select 'Download JDK' (IntelliJ can download it for you). (2) Alternatively, click 'Add JDK' and browse to his JDK installation directory. (3) If JAVA_HOME is set correctly, IntelliJ often detects it automatically. IntelliJ looks for JDKs in standard locations and checks the JAVA_HOME environment variable.

IntelliJ IDEA searches several locations for JDKs: the JAVA_HOME variable, standard installation directories (like C:\Program Files\Java\), and any JDKs previously configured in the IDE. The 'Download JDK' feature is convenient because IntelliJ can download, install, and configure the JDK automatically. Once configured, the JDK is saved in the project settings and does not need to be set again.

### Q8. [Hard] What is a JAR file? How do you run a Java program packaged as a JAR?

*Hint:* JAR stands for Java Archive. It bundles .class files into a single file.

**Answer:** A **JAR (Java Archive)** file is a ZIP-format archive that bundles compiled .class files, resources, and metadata into a single file for distribution. It is created using the `jar` command: `jar cf MyApp.jar -C bin .`. To run an executable JAR: `java -jar MyApp.jar`. The JAR's manifest file (`META-INF/MANIFEST.MF`) specifies the main class to execute.

JAR files are the standard way to distribute Java applications and libraries. When you add external libraries to your project, they come as JAR files. An executable JAR has a manifest entry `Main-Class: com.example.Main` that tells the JVM which class to run. Build tools like Maven and Gradle automate JAR creation.

### Q9. [Medium] Why should you install the latest LTS version of Java rather than the latest non-LTS version?

*Hint:* Think about support duration and stability.

**Answer:** LTS (Long-Term Support) versions receive security updates and bug fixes for several years, while non-LTS versions only receive 6 months of support. LTS versions are more stable, better documented, widely supported by all tools and libraries, and are what companies use in production. Current LTS versions: Java 11, 17, and 21.

Non-LTS versions (like Java 18, 19, 20, 22) are useful for testing new features but should not be used for production or long-term learning. If you learn on Java 20 and a library only supports up to Java 21 LTS, you may face compatibility issues. Sticking with LTS ensures a consistent, well-supported development experience.

### Q10. [Easy] Can you write and compile Java programs without an IDE? What tools do you minimally need?

*Hint:* An IDE is convenient but not required.

**Answer:** Yes, you can write Java programs with any text editor (Notepad, Vim, Nano, Sublime Text) and compile them using the `javac` command in the terminal. You minimally need: (1) A text editor to write .java files. (2) The JDK installed and in your PATH for `javac` and `java` commands.

IDEs are productivity tools, not requirements. Understanding command-line compilation is valuable because it teaches what happens behind the scenes. Many coding interviews and competitive programming contests require command-line familiarity. However, for real projects, an IDE is strongly recommended.

### Q11. [Hard] What is the difference between Homebrew installation (`brew install --cask temurin`) on macOS and manual installation? Are there any advantages to using a package manager?

*Hint:* Package managers automate download, installation, PATH configuration, and updates.

**Answer:** Homebrew automates the entire JDK installation: it downloads the correct binary for your architecture, installs it in the standard location, configures symlinks so `java` and `javac` are in PATH, and makes future updates easy (`brew upgrade temurin`). Manual installation requires downloading the binary, extracting it, setting JAVA_HOME, and updating PATH yourself. The advantage of a package manager is **consistency, easy updates, and automated PATH configuration**.

On Linux, similar benefits come from using apt (`sudo apt install openjdk-21-jdk`) or yum. Package managers also handle multiple version installations cleanly. Tools like SDKMAN (`sdk install java 21-tem`) are specifically designed for managing multiple JDK versions on any OS and are popular among Java developers.

## Multiple Choice Questions

### Q1. [Easy] Which command compiles a Java source file?

**B is correct.** `javac` (Java Compiler) compiles .java source files into .class bytecode files. `java` (A) runs compiled programs. `javadoc` (C) generates documentation. `jar` (D) creates archive files.

### Q2. [Easy] What does JAVA_HOME typically point to?

**B is correct.** JAVA_HOME should point to the root directory of the JDK installation (e.g., C:\Program Files\Java\jdk-21). It should NOT point to the JRE (A), the bin directory (C), or the user's home (D). Build tools use JAVA_HOME to locate the JDK.

### Q3. [Easy] What file is produced when you run `javac HelloWorld.java`?

**B is correct.** The Java compiler produces a .class file containing bytecode. Java does not produce .exe files (A) or .byte files (D). A .jar file (C) is an archive created separately using the jar tool.

### Q4. [Easy] Which of the following is a free, open-source Java IDE?

**B is correct.** Eclipse is completely free and open source. IntelliJ IDEA Ultimate (A) requires a paid license (though Community Edition is free). Xcode (C) is for Apple/iOS development. PyCharm Professional (D) is for Python and requires a license.

### Q5. [Easy] What is the correct command to run a compiled Java class named Main?

**C is correct.** The correct command is `java Main` (class name without extension). `java Main.class` (A) would look for a class literally named "Main.class". `java Main.java` (B) would try to compile and run from source (Java 11+). `javac Main` (D) is the compiler, not the runner.

### Q6. [Medium] If your file is named MyProgram.java, what MUST the public class inside be named?

**B is correct.** The public class name must exactly match the file name, including capitalization. `MyProgram.java` must contain `public class MyProgram`. Options A and C have different capitalization, which will cause a compiler error. Option D is wrong because Java enforces this naming rule.

### Q7. [Medium] What does the `-d bin` flag do in `javac -d bin HelloWorld.java`?

**C is correct.** The `-d` flag specifies the destination directory for compiled .class files. `-d bin` tells the compiler to place output files in the bin/ directory. It does not debug (A), delete (B), or download (D).

### Q8. [Medium] What does `-cp` stand for in the java command?

**C is correct.** `-cp` is shorthand for `-classpath`. It specifies the directories and JAR files where the JVM should look for compiled .class files. It is not about copying (A), compilation (B), or the current directory (D).

### Q9. [Medium] Which Java version introduced single-file source-code execution (`java File.java`)?

**C is correct.** Java 11 (JEP 330) introduced the ability to run single-file Java programs directly with `java File.java`. Java 8 (A) and 9 (B) require explicit compilation. Java 17 (D) is an LTS release but this feature came in Java 11.

### Q10. [Medium] Which JDK distribution is provided by the Eclipse Foundation?

**B is correct.** Eclipse Temurin (formerly AdoptOpenJDK) is the Eclipse Foundation's distribution of OpenJDK via the Adoptium project. Amazon Corretto (A) is from Amazon. Azul Zulu (C) is from Azul Systems. Microsoft Build (D) is from Microsoft.

### Q11. [Medium] What error do you get if you compile with JDK 21 but try to run with JRE 8?

**B is correct.** `UnsupportedClassVersionError` occurs when bytecode compiled for a newer JDK version is run on an older JRE. The JRE cannot interpret bytecode from a version higher than its own. ClassNotFoundException (A) means the class file was not found. NoSuchMethodError (C) means a method is missing. FileNotFoundException (D) is for file I/O operations.

### Q12. [Hard] On Windows, after setting JAVA_HOME and PATH, the `javac` command still does not work in the current terminal. What is the most likely cause?

**B is correct.** On Windows, existing terminal windows retain the PATH values from when they were opened. After changing environment variables, you must open a **new** Command Prompt or PowerShell window. Restarting the computer (C) would also work but is unnecessary. The JDK being not installed (A) is possible but less likely if you just set JAVA_HOME.

### Q13. [Hard] What is the purpose of the META-INF/MANIFEST.MF file inside a JAR?

**B is correct.** The manifest file contains metadata about the JAR, including the main class to execute (Main-Class attribute), the classpath, version information, and other properties. It does not contain source code (A), errors (C), or bytecode (D).

### Q14. [Hard] Which of the following is NOT a valid way to install JDK on Linux?

**D is correct (this is NOT valid).** `pip` is the Python package manager and cannot install the Java JDK. Options A (apt), B (manual download), and C (SDKMAN) are all valid methods to install JDK on Linux.

### Q15. [Hard] When you run `javac src/*.java -d bin`, what happens?

**B is correct.** The wildcard `*.java` matches all Java source files in the src/ directory. The compiler processes all of them, resolves dependencies between classes, and places the compiled .class files in the bin/ directory. Wildcards are supported by both javac and the shell.

### Q16. [Easy] Which of the following is the recommended JDK version type for production and learning?

**C is correct.** LTS versions receive extended support and security patches for years. Beta (A) and Early Access (B) versions are for testing unreleased features. Non-LTS (D) versions only get 6 months of support. Always use LTS for stability.

### Q17. [Medium] Which command checks where the java executable is located on Windows?

**B is correct.** On Windows, `where java` shows the full path of the java executable. On Linux/Mac, `which java` (A) is the equivalent command. `find` (C) searches for files. `locate` (D) uses a file database on Linux.

### Q18. [Hard] What is SDKMAN and why is it useful for Java developers?

**B is correct.** SDKMAN (Software Development Kit Manager) allows developers to install, switch between, and manage multiple JDK versions and other JVM-based tools (Maven, Gradle, Kotlin). Commands like `sdk install java 21-tem` and `sdk use java 17-tem` make version management effortless. It is not a framework (A), IDE plugin (C), or profiler (D).

## Coding Challenges

### Challenge 1. Environment Verification Program

**Difficulty:** Easy

Write a Java program called EnvCheck that prints the Java version, Java home directory, operating system name, and available processors. This verifies your development environment is correctly set up.

**Constraints:**

- Use System.getProperty() and Runtime.getRuntime().availableProcessors(). Name the class EnvCheck.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Environment Check ===
Java Version: 21.0.2
Java Home: C:\Program Files\Java\jdk-21
OS: Windows 11
Processors: 8
Setup Status: READY
```

**Solution:**

```java
public class EnvCheck {
    public static void main(String[] args) {
        System.out.println("=== Environment Check ===");
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("Java Home: " + System.getProperty("java.home"));
        System.out.println("OS: " + System.getProperty("os.name"));
        System.out.println("Processors: " + Runtime.getRuntime().availableProcessors());
        System.out.println("Setup Status: READY");
    }
}
```

### Challenge 2. Multi-Line Greeting

**Difficulty:** Easy

Write a Java program called WelcomeMessage that prints a welcome message for a new Java developer. Include 5 lines: the developer's name (Priya), Java version, IDE recommendation, and two learning tips.

**Constraints:**

- Use System.out.println for each line. Use string concatenation with + for the Java version.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
Welcome, Priya!
You are using Java 21.
Recommended IDE: IntelliJ IDEA Community Edition
Tip 1: Always compile before running (javac then java)
Tip 2: Read compiler error messages carefully - they tell you exactly what is wrong
```

**Solution:**

```java
public class WelcomeMessage {
    public static void main(String[] args) {
        String name = "Priya";
        System.out.println("Welcome, " + name + "!");
        System.out.println("You are using Java " + System.getProperty("java.version") + ".");
        System.out.println("Recommended IDE: IntelliJ IDEA Community Edition");
        System.out.println("Tip 1: Always compile before running (javac then java)");
        System.out.println("Tip 2: Read compiler error messages carefully - they tell you exactly what is wrong");
    }
}
```

### Challenge 3. Compilation Steps Printer

**Difficulty:** Easy

Write a Java program called CompileSteps that prints the three steps needed to create and run a Java program: (1) Create .java file, (2) Compile with javac, (3) Run with java. Include example commands for a file called StudentApp.java.

**Constraints:**

- Use System.out.println for each line. Include the note about not using .class extension.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== How to Compile and Run Java ===
Step 1: Create source file
  File: StudentApp.java

Step 2: Compile
  Command: javac StudentApp.java
  Output: StudentApp.class

Step 3: Run
  Command: java StudentApp
  (Note: no .class extension!)
```

**Solution:**

```java
public class CompileSteps {
    public static void main(String[] args) {
        System.out.println("=== How to Compile and Run Java ===");
        System.out.println("Step 1: Create source file");
        System.out.println("  File: StudentApp.java");
        System.out.println();
        System.out.println("Step 2: Compile");
        System.out.println("  Command: javac StudentApp.java");
        System.out.println("  Output: StudentApp.class");
        System.out.println();
        System.out.println("Step 3: Run");
        System.out.println("  Command: java StudentApp");
        System.out.println("  (Note: no .class extension!)");
    }
}
```

### Challenge 4. System Properties Deep Dive

**Difficulty:** Medium

Write a Java program called SystemPropertiesExplorer that prints at least 10 different system properties in a formatted table. Include properties about Java, OS, user, and file system.

**Constraints:**

- Use System.getProperty() for all values. Format with consistent alignment using string formatting or padding.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== System Properties Explorer ===
java.version     : 21.0.2
java.vendor      : Eclipse Adoptium
java.home        : C:\Program Files\Java\jdk-21
os.name          : Windows 11
os.arch          : amd64
os.version       : 10.0
user.name        : Aarav
user.home        : C:\Users\Aarav
user.dir         : C:\Projects\Java
file.separator   : \
path.separator   : ;
line.separator   : (system-dependent)
```

**Solution:**

```java
public class SystemPropertiesExplorer {
    public static void main(String[] args) {
        System.out.println("=== System Properties Explorer ===");
        String format = "%-17s: %s%n";
        System.out.printf(format, "java.version", System.getProperty("java.version"));
        System.out.printf(format, "java.vendor", System.getProperty("java.vendor"));
        System.out.printf(format, "java.home", System.getProperty("java.home"));
        System.out.printf(format, "os.name", System.getProperty("os.name"));
        System.out.printf(format, "os.arch", System.getProperty("os.arch"));
        System.out.printf(format, "os.version", System.getProperty("os.version"));
        System.out.printf(format, "user.name", System.getProperty("user.name"));
        System.out.printf(format, "user.home", System.getProperty("user.home"));
        System.out.printf(format, "user.dir", System.getProperty("user.dir"));
        System.out.printf(format, "file.separator", System.getProperty("file.separator"));
        System.out.printf(format, "path.separator", System.getProperty("path.separator"));
        System.out.printf(format, "line.separator", System.getProperty("line.separator").replace("\n", "\\n").replace("\r", "\\r"));
    }
}
```

### Challenge 5. JDK vs JRE vs JVM Visual

**Difficulty:** Medium

Write a Java program called JdkComponents that prints a detailed breakdown of what each Java component (JDK, JRE, JVM) contains. Use ASCII formatting to show the nested hierarchy with specific tool names.

**Constraints:**

- Use ASCII tree formatting. Include at least 4 tools under JDK, 4 libraries under JRE, and 5 components under JVM.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== JDK Components Breakdown ===

JDK (Java Development Kit)
|-- Development Tools:
|   |-- javac    (Java Compiler)
|   |-- jdb      (Java Debugger)
|   |-- javadoc  (Documentation Generator)
|   |-- jar      (Archive Tool)
|   |-- jshell   (Interactive REPL)
|
|-- JRE (Java Runtime Environment)
    |-- Standard Libraries:
    |   |-- java.lang  (Core classes)
    |   |-- java.util  (Collections, Date)
    |   |-- java.io    (File I/O)
    |   |-- java.net   (Networking)
    |
    |-- JVM (Java Virtual Machine)
        |-- Class Loader
        |-- Bytecode Verifier
        |-- Interpreter
        |-- JIT Compiler
        |-- Garbage Collector
```

**Solution:**

```java
public class JdkComponents {
    public static void main(String[] args) {
        System.out.println("=== JDK Components Breakdown ===");
        System.out.println();
        System.out.println("JDK (Java Development Kit)");
        System.out.println("|-- Development Tools:");
        System.out.println("|   |-- javac    (Java Compiler)");
        System.out.println("|   |-- jdb      (Java Debugger)");
        System.out.println("|   |-- javadoc  (Documentation Generator)");
        System.out.println("|   |-- jar      (Archive Tool)");
        System.out.println("|   |-- jshell   (Interactive REPL)");
        System.out.println("|");
        System.out.println("|-- JRE (Java Runtime Environment)");
        System.out.println("    |-- Standard Libraries:");
        System.out.println("    |   |-- java.lang  (Core classes)");
        System.out.println("    |   |-- java.util  (Collections, Date)");
        System.out.println("    |   |-- java.io    (File I/O)");
        System.out.println("    |   |-- java.net   (Networking)");
        System.out.println("    |");
        System.out.println("    |-- JVM (Java Virtual Machine)");
        System.out.println("        |-- Class Loader");
        System.out.println("        |-- Bytecode Verifier");
        System.out.println("        |-- Interpreter");
        System.out.println("        |-- JIT Compiler");
        System.out.println("        |-- Garbage Collector");
    }
}
```

### Challenge 6. Error Diagnosis Tool

**Difficulty:** Hard

Write a Java program called ErrorDiagnosis that prints a troubleshooting guide for the 5 most common Java setup errors. For each error, print the error message, the cause, and the fix. Format it clearly with separators.

**Constraints:**

- Include at least 5 common errors with causes and fixes. Use consistent formatting.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Java Setup Error Diagnosis Guide ===

[Error 1] 'javac' is not recognized
  Cause: JDK bin directory is not in system PATH
  Fix: Add %JAVA_HOME%\bin to PATH, then open a new terminal
---
[Error 2] UnsupportedClassVersionError
  Cause: Compiled with newer JDK, running on older JRE
  Fix: Update JRE to match JDK version or compile with -target flag
...
```

**Solution:**

```java
public class ErrorDiagnosis {
    public static void main(String[] args) {
        System.out.println("=== Java Setup Error Diagnosis Guide ===");
        System.out.println();
        System.out.println("[Error 1] 'javac' is not recognized");
        System.out.println("  Cause: JDK bin directory is not in system PATH");
        System.out.println("  Fix: Add %JAVA_HOME%\\bin to PATH, then open a new terminal");
        System.out.println("---");
        System.out.println("[Error 2] UnsupportedClassVersionError");
        System.out.println("  Cause: Compiled with newer JDK, running on older JRE");
        System.out.println("  Fix: Update JRE to match JDK version, or use: javac --release 8 File.java");
        System.out.println("---");
        System.out.println("[Error 3] Could not find or load main class");
        System.out.println("  Cause: Class name mismatch, wrong directory, or missing -cp flag");
        System.out.println("  Fix: Verify class name matches, and use: java -cp bin ClassName");
        System.out.println("---");
        System.out.println("[Error 4] class X is public, should be declared in file named X.java");
        System.out.println("  Cause: File name does not match the public class name");
        System.out.println("  Fix: Rename the file to match the public class name exactly");
        System.out.println("---");
        System.out.println("[Error 5] JAVA_HOME points to a JRE, not a JDK");
        System.out.println("  Cause: JAVA_HOME is set to JRE directory instead of JDK");
        System.out.println("  Fix: Update JAVA_HOME to point to JDK root (containing bin/javac)");
    }
}
```

### Challenge 7. Build Script Simulator

**Difficulty:** Hard

Write a Java program called BuildSimulator that simulates and prints what a simple build process would do: list source files, compile them, output .class files, and run the main class. Print each step with timestamps using System.currentTimeMillis().

**Constraints:**

- Use System.currentTimeMillis() for timestamps. Simulate at least 3 source files. Print build summary.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
=== Build Simulator ===
[1712345678000] Scanning source directory: src/
[1712345678001] Found: Main.java
[1712345678001] Found: Student.java
[1712345678001] Found: Grade.java
[1712345678002] Compiling 3 source files...
[1712345678010] Generated: bin/Main.class
[1712345678010] Generated: bin/Student.class
[1712345678010] Generated: bin/Grade.class
[1712345678011] Build successful! 3 files compiled.
[1712345678012] Running: java -cp bin Main
[1712345678012] === Application Output ===
[1712345678012] Student Management System v1.0
```

**Solution:**

```java
public class BuildSimulator {
    public static void main(String[] args) {
        System.out.println("=== Build Simulator ===");
        long time = System.currentTimeMillis();
        System.out.println("[" + time + "] Scanning source directory: src/");
        System.out.println("[" + System.currentTimeMillis() + "] Found: Main.java");
        System.out.println("[" + System.currentTimeMillis() + "] Found: Student.java");
        System.out.println("[" + System.currentTimeMillis() + "] Found: Grade.java");
        System.out.println("[" + System.currentTimeMillis() + "] Compiling 3 source files...");
        System.out.println("[" + System.currentTimeMillis() + "] Generated: bin/Main.class");
        System.out.println("[" + System.currentTimeMillis() + "] Generated: bin/Student.class");
        System.out.println("[" + System.currentTimeMillis() + "] Generated: bin/Grade.class");
        System.out.println("[" + System.currentTimeMillis() + "] Build successful! 3 files compiled.");
        System.out.println("[" + System.currentTimeMillis() + "] Running: java -cp bin Main");
        System.out.println("[" + System.currentTimeMillis() + "] === Application Output ===");
        System.out.println("[" + System.currentTimeMillis() + "] Student Management System v1.0");
        long elapsed = System.currentTimeMillis() - time;
        System.out.println("[" + System.currentTimeMillis() + "] Total build time: " + elapsed + "ms");
    }
}
```

---

*Notes: https://learn.modernagecoders.com/resources/java/installing-java-and-setup/*
