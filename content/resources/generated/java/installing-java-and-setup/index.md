---
title: "Installing Java JDK and Setting Up IDE - IntelliJ IDEA, Eclipse, VS Code Setup | Modern Age Coders"
description: "Step-by-step guide to install Java JDK, set JAVA_HOME and PATH, verify installation, and set up IntelliJ IDEA, Eclipse, or VS Code for Java development. Includes 52 practice questions."
slug: installing-java-and-setup
canonical: https://learn.modernagecoders.com/resources/java/installing-java-and-setup/
category: "Java"
keywords: ["install java jdk", "java ide setup", "intellij idea setup", "java environment setup", "java home path", "javac java commands", "eclipse java setup", "vs code java", "openjdk download", "java development environment"]
---
# Installing Java and Setting Up Your Environment

**Difficulty:** Beginner  
**Reading time:** 18 min  
**Chapter:** 2  
**Practice questions:** 52

## What Is Java Environment Setup?

Setting up a Java development environment means installing the software tools you need to write, compile, and run Java programs on your computer. At a minimum, you need the **Java Development Kit (JDK)**, which provides the Java compiler (`javac`), the Java runtime (`java`), and the standard class libraries.

Beyond the JDK, most developers use an **Integrated Development Environment (IDE)** -- a specialized text editor that provides code completion, syntax highlighting, debugging tools, project management, and integrated compilation. The three most popular Java IDEs are **IntelliJ IDEA**, **Eclipse**, and **VS Code with Java extensions**.

This chapter walks you through downloading and installing the JDK, configuring environment variables (`JAVA_HOME` and `PATH`), verifying your installation, choosing and setting up an IDE, and compiling your first program from the command line.

## Why Does Proper Setup Matter?

A correctly configured development environment is the foundation of productive Java programming. Here is why each step matters:

### 1. Without the JDK, You Cannot Compile

The JDK provides the `javac` compiler that converts your source code to bytecode. Without it, you can only run pre-compiled Java programs (using the JRE), not create your own. Installing the correct JDK version ensures compatibility with the Java features you want to use.

### 2. Environment Variables Enable Command-Line Access

Setting `JAVA_HOME` and adding Java's `bin` directory to your system `PATH` allows you to run `javac` and `java` commands from any directory in your terminal. Without this configuration, you would need to type the full path to these executables every time, which is impractical.

### 3. IDEs Dramatically Increase Productivity

While you can write Java in a plain text editor and compile from the terminal, an IDE catches errors as you type, suggests code completions, helps you navigate large codebases, and provides integrated debugging. Professional Java developers universally use IDEs. Getting comfortable with one early saves countless hours.

### 4. Correct Setup Prevents Frustrating Errors

Many beginners spend hours debugging errors that are actually environment issues: wrong Java version, `javac` not found in PATH, JAVA_HOME pointing to JRE instead of JDK, or multiple Java installations conflicting. Getting the setup right from the start eliminates these distractions.

## Detailed Explanation

### 1. Choosing a JDK Distribution

There are several JDK distributions available, all based on the same OpenJDK source code:

DistributionProviderLicenseRecommendationOracle JDKOracleFree for development (NFTC license since Java 17)Good for learningEclipse TemurinAdoptiumFree, open source (GPLv2+CE)Recommended for beginnersAmazon CorrettoAmazonFree, open sourceGood for AWS projectsAzul ZuluAzul SystemsFree community editionGood alternativeMicrosoft BuildMicrosoftFree, open sourceGood for Azure projects

For college students, **Eclipse Temurin** (from Adoptium) or **Oracle JDK** are the best choices. Both provide the full JDK with no licensing concerns for learning and personal projects. Always install the latest **LTS version** (Java 21 as of this writing).

### 2. Downloading and Installing the JDK

#### On Windows

1. Visit [https://adoptium.net/](https://adoptium.net/) or [Oracle's download page](https://www.oracle.com/java/technologies/downloads/)
2. Download the **JDK 21 (LTS)** installer for Windows x64 (.msi)
3. Run the installer and follow the prompts
4. Note the installation directory (typically `C:\Program Files\Java\jdk-21`)

#### On macOS

1. Download the JDK 21 .dmg or .pkg installer from Adoptium or Oracle
2. Double-click the downloaded file and follow the installation wizard
3. The JDK is typically installed in `/Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home`
4. Alternatively, use Homebrew: `brew install --cask temurin`

#### On Linux (Ubuntu/Debian)

1. Open a terminal and run: `sudo apt update`
2. Install OpenJDK: `sudo apt install openjdk-21-jdk`
3. Verify: `java -version` and `javac -version`

### 3. Setting JAVA_HOME and PATH

After installing the JDK, you need to configure two environment variables so your system knows where Java is located:

#### JAVA_HOME

`JAVA_HOME` should point to the root directory of your JDK installation. Many tools (Maven, Gradle, IDEs) use this variable to locate the JDK.

#### PATH

The `PATH` variable tells your operating system where to look for executable programs. You need to add the JDK's `bin` directory to PATH so you can run `javac` and `java` from any directory.

#### Windows Configuration

1. Open **System Properties** > **Environment Variables** (search "Environment Variables" in Start)
2. Under **System Variables**, click **New**:
Variable name: `JAVA_HOME`
Variable value: `C:\Program Files\Java\jdk-21`
3. Find the **Path** variable in System Variables, click **Edit**
4. Click **New** and add: `%JAVA_HOME%\bin`
5. Click OK on all dialogs
6. Open a **new** Command Prompt (existing ones will not have the updated PATH)

#### macOS/Linux Configuration

Add the following lines to your shell profile file (`~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`):

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```

Then run `source ~/.zshrc` (or the appropriate file) to apply the changes.

### 4. Verifying Your Installation

After setting environment variables, verify your installation by running two commands in a terminal:

```
java -version
```

This shows the JRE/JVM version and confirms that the `java` command is accessible. Expected output:

```
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment Temurin-21.0.2+13 (build 21.0.2+13)
OpenJDK 64-Bit Server VM Temurin-21.0.2+13 (build 21.0.2+13, mixed mode, sharing)
```

```
javac -version
```

This confirms the compiler is accessible. Expected output:

```
javac 21.0.2
```

If either command fails with "command not found" or "not recognized," your PATH is not configured correctly. Go back and verify the environment variables.

### 5. IDE Setup

#### IntelliJ IDEA (Recommended)

IntelliJ IDEA by JetBrains is widely considered the best Java IDE. The **Community Edition** is free and sufficient for learning.

1. Download from [jetbrains.com/idea](https://www.jetbrains.com/idea/download/)
2. Install and launch IntelliJ IDEA
3. Click **New Project**
4. Select **Java** from the left panel
5. Choose your installed JDK from the SDK dropdown (IntelliJ usually detects it automatically)
6. Give your project a name (e.g., "JavaLearning") and click Create
7. Right-click on the `src` folder > New > Java Class > Name it "HelloWorld"

#### Eclipse

Eclipse is a free, open-source IDE that has been the standard Java IDE in many companies for decades.

1. Download Eclipse IDE for Java Developers from [eclipse.org](https://www.eclipse.org/downloads/)
2. Extract and run the installer
3. Choose a workspace directory (where your projects will be stored)
4. Go to File > New > Java Project
5. Name the project and click Finish
6. Right-click on `src` > New > Class > Name it "HelloWorld" and check "public static void main"

#### VS Code

Visual Studio Code is a lightweight editor that becomes a capable Java IDE with extensions.

1. Install VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
2. Open VS Code and go to Extensions (Ctrl+Shift+X)
3. Search for and install **"Extension Pack for Java"** by Microsoft
4. This installs Language Support for Java, Debugger for Java, Maven, Test Runner, and Project Manager
5. Create a new file with `.java` extension and start coding

### 6. Compiling and Running from the Terminal

Understanding command-line compilation is essential even if you use an IDE, because it teaches you what happens behind the scenes.

#### Step 1: Create a Source File

Create a file named `HelloWorld.java` (the file name must match the public class name).

#### Step 2: Compile

```
javac HelloWorld.java
```

This produces `HelloWorld.class` in the same directory. If there are errors, the compiler will display them with line numbers.

#### Step 3: Run

```
java HelloWorld
```

Note: You provide the **class name**, not the file name. Do NOT write `java HelloWorld.class`.

#### Common Compilation Flags

FlagPurposeExample`-d`Specify output directory for .class files`javac -d bin HelloWorld.java``-cp` or `-classpath`Specify classpath for dependencies`java -cp bin HelloWorld``-source`Specify source compatibility version`javac -source 17 HelloWorld.java``-verbose`Show detailed compilation info`javac -verbose HelloWorld.java`

### 7. Project Directory Structure

As your projects grow, organizing files becomes important. A standard Java project follows this structure:

```
MyProject/
  src/
    com/
      example/
        Main.java
        Student.java
  bin/
    com/
      example/
        Main.class
        Student.class
  lib/
    (external .jar files)
```

Source files go in `src/`, compiled classes go in `bin/`, and external libraries go in `lib/`. IDEs manage this structure automatically, but understanding it helps when working with build tools like Maven or Gradle.

## Code Examples

### Verifying Java Installation from Terminal

```java
// Run these commands in your terminal (not in a Java file)

// Check JVM/JRE version:
// $ java -version
// openjdk version "21.0.2" 2024-01-16
// OpenJDK Runtime Environment Temurin-21.0.2+13
// OpenJDK 64-Bit Server VM Temurin-21.0.2+13

// Check compiler version:
// $ javac -version
// javac 21.0.2

// Check JAVA_HOME:
// Windows: echo %JAVA_HOME%
// Linux/Mac: echo $JAVA_HOME

// Verify from within Java:
public class VerifySetup {
    public static void main(String[] args) {
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("Java Home: " + System.getProperty("java.home"));
        System.out.println("Java Vendor: " + System.getProperty("java.vendor"));
        System.out.println("JVM: " + System.getProperty("java.vm.name"));
        System.out.println("OS: " + System.getProperty("os.name") + " " + System.getProperty("os.arch"));
    }
}
```

The terminal commands `java -version` and `javac -version` confirm that both the runtime and compiler are accessible from your PATH. The Java program uses `System.getProperty()` to display detailed environment information. If `java -version` works but `javac -version` fails, you have the JRE but not the JDK -- install the JDK.

**Output:**

```
Java Version: 21.0.2
Java Home: C:\Program Files\Java\jdk-21
Java Vendor: Eclipse Adoptium
JVM: OpenJDK 64-Bit Server VM
OS: Windows 11 amd64
```

### Compiling and Running from Command Line

```java
// Step 1: Create this file as Greeting.java
public class Greeting {
    public static void main(String[] args) {
        String name = "Aarav";
        System.out.println("Welcome to Java, " + name + "!");
        System.out.println("You compiled and ran this from the terminal.");
    }
}

// Step 2: Open terminal and navigate to the file's directory
// $ cd path/to/your/file

// Step 3: Compile (creates Greeting.class)
// $ javac Greeting.java

// Step 4: Run (note: no .class extension)
// $ java Greeting
```

This demonstrates the fundamental compile-and-run workflow. The file must be named exactly `Greeting.java` (matching the public class name). The `javac` command compiles it to `Greeting.class`. The `java` command runs the class by name (not file name). Note the absence of `.class` extension in the run command -- a common beginner mistake.

**Output:**

```
Welcome to Java, Aarav!
You compiled and ran this from the terminal.
```

### Compiling to a Separate Output Directory

```java
// File: src/Calculator.java
public class Calculator {
    public static void main(String[] args) {
        int a = 25;
        int b = 10;
        System.out.println(a + " + " + b + " = " + (a + b));
        System.out.println(a + " - " + b + " = " + (a - b));
        System.out.println(a + " * " + b + " = " + (a * b));
    }
}

// Compile to bin/ directory:
// $ mkdir bin
// $ javac -d bin src/Calculator.java

// Run from bin/ directory:
// $ java -cp bin Calculator
```

The `-d bin` flag tells the compiler to place the output `.class` file in the `bin/` directory instead of the source directory. The `-cp bin` (classpath) flag tells the JVM where to find the compiled class files. This separation of source and compiled files is a professional best practice that IDEs follow automatically.

**Output:**

```
25 + 10 = 35
25 - 10 = 15
25 * 10 = 250
```

### Handling Compilation Errors

```java
// This file has intentional errors to demonstrate compiler messages
public class ErrorDemo {
    public static void main(String[] args) {
        // Error 1: Missing semicolon
        // System.out.println("Hello")
        // Fix:
        System.out.println("Hello");

        // Error 2: Undeclared variable
        // System.out.println(x);
        // Fix:
        int x = 42;
        System.out.println(x);

        // Error 3: Type mismatch
        // int name = "Priya";
        // Fix:
        String name = "Priya";
        System.out.println(name);

        System.out.println("All errors fixed!");
    }
}
```

The Java compiler provides detailed error messages with line numbers. A missing semicolon gives: `error: ';' expected`. An undeclared variable gives: `error: cannot find symbol`. A type mismatch gives: `error: incompatible types`. Learning to read compiler error messages is an essential skill. Always fix errors from top to bottom, as one error can cascade into multiple error messages.

**Output:**

```
Hello
42
Priya
All errors fixed!
```

### Using Java 11+ Single-File Source Execution

```java
// Since Java 11, you can run single-file programs directly:
// $ java QuickTest.java
// (No separate javac step needed!)

public class QuickTest {
    public static void main(String[] args) {
        System.out.println("This file was compiled and run in one step!");
        System.out.println("Java version: " + System.getProperty("java.version"));

        // This shortcut works for:
        // - Single-file programs
        // - Quick testing and prototyping
        // - Learning exercises

        // It does NOT work for:
        // - Multi-file projects
        // - Programs that need external libraries
        // - Production code
    }
}
```

Java 11 introduced the ability to run a single-file Java program without explicitly compiling it first. Instead of `javac QuickTest.java` followed by `java QuickTest`, you can simply run `java QuickTest.java`. The JVM compiles the source in memory and executes it. This is convenient for quick tests and learning, but professional projects still use explicit compilation with build tools.

**Output:**

```
This file was compiled and run in one step!
Java version: 21.0.2
```

### Checking Classpath and Multiple Directories

```java
// Project structure:
// project/
//   src/
//     Main.java
//     MathHelper.java

// --- MathHelper.java ---
// public class MathHelper {
//     public static int add(int a, int b) { return a + b; }
//     public static int multiply(int a, int b) { return a * b; }
// }

// --- Main.java ---
public class Main {
    public static void main(String[] args) {
        System.out.println("5 + 3 = " + MathHelper.add(5, 3));
        System.out.println("5 * 3 = " + MathHelper.multiply(5, 3));
    }
}

// Compile both files:
// $ javac -d bin src/Main.java src/MathHelper.java
// Or compile all .java files in src/:
// $ javac -d bin src/*.java

// Run:
// $ java -cp bin Main
```

When a project has multiple Java files, you can compile them all at once using wildcards (`src/*.java`). The compiler automatically resolves dependencies between classes. The `-cp` flag specifies the classpath where the JVM looks for compiled classes. This example shows a simple two-class project where `Main` depends on `MathHelper`.

**Output:**

```
5 + 3 = 8
5 * 3 = 15
```

## Common Mistakes

### javac Not Found After Installation

**Wrong:**

```
// Terminal:
// C:\Users\Priya> javac HelloWorld.java
// 'javac' is not recognized as an internal or external command
```

'javac' is not recognized as an internal or external command, operable program or batch file.

**Correct:**

```
// Fix: Add JDK bin to PATH
// 1. Set JAVA_HOME = C:\Program Files\Java\jdk-21
// 2. Add %JAVA_HOME%\bin to PATH
// 3. Open a NEW terminal (existing terminals have old PATH)
// 4. Verify: javac -version
```

This is the most common setup issue. The `javac` command is located in the JDK's `bin` directory. If this directory is not in your system PATH, the terminal cannot find it. After modifying environment variables on Windows, you must open a **new** Command Prompt -- existing terminals retain the old PATH values.

### JAVA_HOME Points to JRE Instead of JDK

**Wrong:**

```
// JAVA_HOME = C:\Program Files\Java\jre-21
// Result: javac works from PATH but build tools fail
```

Build tools (Maven, Gradle) report: 'JAVA_HOME points to a JRE, not a JDK. Please set JAVA_HOME to a JDK installation.'

**Correct:**

```
// JAVA_HOME should point to JDK, not JRE:
// Correct: JAVA_HOME = C:\Program Files\Java\jdk-21
// Wrong:   JAVA_HOME = C:\Program Files\Java\jre-21
// The path should contain bin/javac, not just bin/java
```

JAVA_HOME must point to the JDK root directory (which contains `bin/javac`), not the JRE directory. Build tools like Maven and Gradle check JAVA_HOME to find the compiler. If it points to the JRE, they cannot compile your code. Verify by checking that `%JAVA_HOME%/bin/javac` exists.

### Running with .class Extension

**Wrong:**

```
// Terminal:
// $ javac HelloWorld.java     (compiles correctly)
// $ java HelloWorld.class      (ERROR!)
```

Error: Could not find or load main class HelloWorld.class
Caused by: java.lang.ClassNotFoundException: HelloWorld.class

**Correct:**

```
// Correct: use class name without extension
// $ java HelloWorld
```

The `java` command expects a **class name**, not a file name. When you write `java HelloWorld.class`, Java looks for a class literally named `HelloWorld.class` (with the dot and "class" being part of the name), which does not exist. Always use just the class name: `java HelloWorld`.

### File Name Does Not Match Class Name

**Wrong:**

```
// File saved as: hello.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

error: class HelloWorld is public, should be declared in a file named HelloWorld.java

**Correct:**

```
// File must be saved as: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

In Java, the file name must exactly match the public class name, including capitalization. A public class named `HelloWorld` must be in a file named `HelloWorld.java`. This is not just a convention -- it is a compiler requirement. This is different from Python, where file names and class names can differ.

### Multiple Java Versions Conflict

**Wrong:**

```
// Terminal:
// $ java -version
// java version "1.8.0_301"  (old version!)
// $ javac -version
// javac 21.0.2              (new version!)
// Mismatch causes runtime errors
```

UnsupportedClassVersionError: HelloWorld has been compiled by a more recent version of the Java Runtime

**Correct:**

```
// Ensure java and javac are from the same JDK:
// $ where java      (Windows)
// $ which java      (Linux/Mac)
// Both should point to the same JDK installation.
// Remove old Java versions from PATH or uninstall them.
```

Having multiple Java installations can cause version mismatches where `javac` (compiler) and `java` (runtime) come from different versions. If you compile with JDK 21 but run with JRE 8, you get an `UnsupportedClassVersionError`. Use `where java` (Windows) or `which java` (Linux/Mac) to check which Java executable is being used, and ensure both tools come from the same installation.

## Summary

- You need the JDK (Java Development Kit) to develop Java programs. It includes the javac compiler, java runtime, and standard libraries. Use the latest LTS version (Java 21).
- Popular JDK distributions include Oracle JDK, Eclipse Temurin (Adoptium), Amazon Corretto, and Azul Zulu. All are based on the same OpenJDK source code.
- Set the JAVA_HOME environment variable to your JDK installation directory, and add %JAVA_HOME%\bin (Windows) or $JAVA_HOME/bin (Linux/Mac) to your PATH.
- Verify your installation with `java -version` (checks runtime) and `javac -version` (checks compiler). Both should show the same version number.
- IntelliJ IDEA Community Edition is the recommended IDE for Java development. Eclipse and VS Code with Java extensions are good alternatives.
- To compile from terminal: `javac FileName.java` produces a .class file. To run: `java ClassName` (without .class extension).
- The file name must exactly match the public class name (case-sensitive). HelloWorld class must be in HelloWorld.java.
- Use `-d` flag to specify output directory: `javac -d bin src/Main.java`. Use `-cp` to set classpath: `java -cp bin Main`.
- Java 11+ supports single-file source execution: `java HelloWorld.java` compiles and runs in one step, useful for quick tests.
- Always fix compilation errors from top to bottom. One error can cascade into multiple error messages. Read the first error carefully.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/java/installing-java-and-setup/*
*Practice questions: https://learn.modernagecoders.com/resources/java/installing-java-and-setup/practice/*
