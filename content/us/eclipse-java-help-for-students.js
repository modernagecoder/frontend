'use strict';
// Eclipse Java help for students (ag- school-tools door; US cluster Phase T, row 149).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md
// (Phase T rules: official docs only; never answer keys or graded solutions).
// Search evidence (keyword-research-2026-09/us/autocomplete_tools.tsv): "eclipse java not running", "eclipse java
// error", "eclipse error java heap space", "eclipse java how to run project", "eclipse java content assist not
// working", "eclipse how to change java version", "unable to launch eclipse java error".
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/eclipse-java-help-for-students/):
//  - eclipse.org/downloads/: "The Eclipse Installer 2026‑09 R now includes a JRE for macOS, Windows and Linux."
//  - eclipse.org/downloads/packages/: "Eclipse IDE 2026-09 R Packages"; Eclipse IDE for Java Developers, 360 MB,
//    "The essential tools for any Java developer, including a Java IDE, a Git client, XML Editor, Maven and Gradle
//    integration"; Enterprise Java and Web Developers, 585 MB.
//  - help.eclipse.org JDT user guide: qs-3 (File > New > Project..., Java Project); qs-7 ("Build problems are displayed
//    in the Problems view and annotated in the vertical ruler of your source code."; light bulb; Ctrl+1; Go To);
//    qs-9 (hover quick fix "Import 'Vector' (java.util)"); qs-OrganizeImports (Source > Organize Imports);
//    tasks-java-local-configuration (Run > Run As > Java Application; Main, Arguments, JRE, Classpath tabs);
//    ref-java-editor-quickfix ("Left click on the light bulb or invoking Ctrl+1 (Edit > Quick Fix) brings up the
//    proposals"; "press Ctrl+Enter" to fix all of the same kind; the Create local variable usage hint);
//    ref-installed_jres ("allowing you to select the one to act as the workspace default");
//    ref-preferences-compiler ("Compiler compliance level", default "Depends on default JRE", "--release").
//  - wiki.eclipse.org/Eclipse.ini: "The -vm option and its value (the path) must be on separate lines."; "The value
//    must be the full absolute or relative path to the Java executable, not just to the Java home directory."; -vm
//    before -vmargs; "32-bit Eclipse will not work with a 64-bit JVM."; -Xmx sets the maximum heap.
//  - apcentral.collegeboard.org/courses/ap-computer-science-a/exam: "This is a fully digital exam."; Bluebook.
// Our own material, labelled on the page: Shop.java, Semi.java, Till.java and the fixed Till.java, compiled with the
// Eclipse Compiler for Java (ecj 3.46.100, -warn:+resource) and javac 22.0.1 on 17 October 2026, raw output in
// ours-ecj-3.46.100-eclipse-page-runs.txt; the troubleshooting order and the before-you-ask checklist.
// Lesson family: tools and environment (the editor, the compiler and the Java runtime are three different things).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TILL = `// Till.java (ours): compiles in neither javac nor Eclipse
import java.util.Scanner;

public class Till {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int total;
        String item = in.nextLine();
        if (item.equals("pen")) {
            total = 2;
        }
        System.out.println(total);
        Thread.sleep(500);
    }
}`;

const TILL_OUT = `Eclipse Compiler for Java (ecj 3.46.100), our run:
1. WARNING in Till.java (at line 5)
Resource leak: 'in' is never closed
2. ERROR in Till.java (at line 11)
The local variable total may not have been initialized
3. ERROR in Till.java (at line 12)
Unhandled exception type InterruptedException
3 problems (2 errors, 1 warning)`;

const TILL_FIXED = `// Till.java, repaired (ours)
import java.util.Scanner;

public class Till {
    public static void main(String[] args)
            throws InterruptedException {
        try (Scanner in = new Scanner(System.in)) {
            int total = 0;
            String item = in.nextLine();
            if (item.equals("pen")) {
                total = 2;
            }
            System.out.println(total);
            Thread.sleep(500);
        }
    }
}

typed: pen
printed: 2`;

const INI = `-startup
plugins/org.eclipse.equinox.launcher_(version).jar
-vm
C:\\Program Files\\Java\\jdk-21\\bin\\javaw.exe
-vmargs
-Xms256m
-Xmx2048m`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'ECLIPSE HELP', blurb: 'Eclipse for Java students: which package to install, how to run a program, what the Problems view and Quick Fix are telling you, and how to fix Java version and memory errors.' },
  slug: 'eclipse-java-help-for-students',
  code: 'ej',
  accent: '#572429',
  accentRationale: 'Eclipse Java help, US: a dark claret (#572429) from the US allocation table, apart from the indigo and brown of the neighbouring Phase T pages, contrast 11.73 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Eclipse Java help for students',
  title: 'Eclipse Java Help for Students: Run, Errors and Setup Fixes',
  description: 'Eclipse help for Java students: which download to choose, how to run a program, what the Problems view and Ctrl+1 Quick Fix mean, and how to fix Java versions.',
  ogDescription: 'Stuck in Eclipse? Install the right package, run with Run As, read Problems view messages from our own Eclipse compiler runs, and fix JRE, compliance and heap settings.',
  twitterDescription: 'Eclipse for Java students: install, run, read errors, fix Java version and memory.',
  pageName: 'Eclipse Java help for students',
  webPageDescription: 'A practical guide to the Eclipse IDE for US high school and college Java students, built from the Eclipse documentation and our own runs of the Eclipse Compiler for Java.',
  courseDescription: 'Live online Java classes for US students using Eclipse or any other editor, from a first program to AP Computer Science A, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Eclipse Java help',
  navLinks: [
    { href: '#install', label: 'Install' },
    { href: '#run', label: 'Run a program' },
    { href: '#problems', label: 'Problems view' },
    { href: '#messages', label: 'Error messages' },
    { href: '#java', label: 'Java versions' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; High school and college &middot; Eclipse IDE',
  h1: 'Eclipse Java help for students',
  lede: 'Eclipse is the IDE many American high schools and colleges still install in their Java labs, and it is a capable one. It is also easy to get lost in: a dozen panels, red markers in three places at once, a Run button that sometimes runs the wrong class, and error messages worded differently from the textbook. This guide covers the four things students get stuck on most often. Which download to pick, how to create and run a program, how to read what the Problems view and Quick Fix are telling you, and how to sort out a Java version or memory problem that stops Eclipse from starting at all.',
  secondaryCta: { href: '#messages', label: 'See the error messages' },
  wa: 'Hello Modern Age Coders, my student in the US uses Eclipse for Java and keeps getting stuck. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java in Eclipse or any editor',
  spec: [
    ['For', 'Grades 9 to 12 and college'],
    ['Tool', 'Eclipse IDE, free'],
    ['Release read', '2026-09 R'],
    ['Language', 'Java'],
    ['Exam link', 'AP Computer Science A'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'For school Java, install Eclipse IDE for Java Developers (the 2026-09 R installer now includes a Java runtime). Create a Java Project, add a class with a main method, then use Run As, Java Application. Errors appear in the Problems view; press Ctrl+1 on a red marker for Quick Fix proposals, and accept one only if you understand why it is right.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three Java courses that work in whatever editor your school uses',
    lede: 'Your student shares their Eclipse window, and the lesson starts from the project already open.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'EJ / 01', title: 'Java for teens', note: 'Ages 13 to 18. Projects, classes and a calm approach to the Problems view.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'EJ / 02', title: 'AP Computer Science A', note: 'All four units, with practice written for the exam&rsquo;s Bluebook format.' },
      { course: 'complete-java-programming-masterclass-college', code: 'EJ / 03', title: 'Java for college', note: 'Intro CS Java in Eclipse, then larger multi-class programs.' }
    ]
  },

  sections: [
    {
      id: 'install', tint: 'tint', eyebrow: 'Install the right thing',
      h2: 'Which Eclipse download a Java student needs',
      lede: 'The Eclipse download page offers many packages, and choosing the wrong one is the first way students lose an afternoon. Here is what the Eclipse Foundation lists for the 2026-09 release.',
      body: [
        { kind: 'table', caption: 'Eclipse packages relevant to students, from eclipse.org/downloads/packages (read 17 October 2026)', head: ['Package', 'Size listed', 'What the Eclipse Foundation says it contains', 'For a school Java class?'], rows: [
          ['Eclipse IDE for Java Developers', '360 MB', '&ldquo;The essential tools for any Java developer, including a Java IDE, a Git client, XML Editor, Maven and Gradle integration&rdquo;', 'Yes: this is the one'],
          ['Eclipse IDE for Enterprise Java and Web Developers', '585 MB', 'A Java IDE plus tools for JavaScript, TypeScript, JavaServer Pages and Faces, web services and more', 'Only if your course asks for it'],
          ['Eclipse Installer', 'Varies', '&ldquo;The Eclipse Installer 2026‑09 R now includes a JRE for macOS, Windows and Linux.&rdquo;', 'Yes, as the way to install the Java package']
        ], numCols: [1] },
        { kind: 'two', mt: true,
          leftH3: 'Runtime and JDK are not the same thing',
          left: [
            'The bundled JRE is what Eclipse itself needs to start. Your programs are compiled by Eclipse&rsquo;s own Java compiler and run on a Java runtime that Eclipse knows about, listed under Installed JREs in the preferences.',
            'Most students never need to touch this. When it does matter, usually because a class requires a particular Java version, the Java versions section below shows where to look.'
          ],
          rightH3: 'School computer or home laptop',
          right: [
            'Lab machines are often locked down, so a student cannot install anything. In that case, check with the teacher which Eclipse release and Java version the lab runs, and match it at home so a project behaves the same in both places.',
            'Eclipse publishes builds for Windows, macOS and Linux, each for both x86_64 and AArch64 processors, so a recent Mac with Apple silicon has a native download of its own.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.eclipse.org/downloads/" rel="noopener" target="_blank">Eclipse downloads</a> and <a class="ag-inline-link" href="https://www.eclipse.org/downloads/packages/" rel="noopener" target="_blank">Eclipse IDE 2026-09 R packages</a>, read 17 October 2026. Package sizes are as listed for that release and change with later ones. We are not connected with the Eclipse Foundation.' }
      ]
    },
    {
      id: 'run', tint: 'deep', eyebrow: 'Create and run',
      h2: 'From an empty workspace to a program that prints',
      lede: 'The Eclipse documentation walks through these steps with a sample project. Here they are in the order a student needs them for a first assignment.',
      body: [
        { kind: 'ol', items: [
          '<b>Pick a workspace.</b> Eclipse asks for a folder when it starts. Use one you can find again; every project lives inside it.',
          '<b>Create a Java project.</b> Choose File, then New, then Project, select Java Project and give it a name. A project with a src folder appears in the Package Explorer.',
          '<b>Add a class.</b> Select the src folder and click New Java Class. Type the class name, and tick the option to create a main method if your program needs one.',
          '<b>Write a line that prints.</b> Inside main, a single println is enough to prove everything works before you write the real program.',
          '<b>Save.</b> Eclipse builds the project automatically when you save, so problems appear the moment the file is saved, not when you press Run.',
          '<b>Run it.</b> With the class open, choose Run, then Run As, then Java Application. Output appears in the Console view at the bottom.',
          '<b>Run the right class next time.</b> The green Run button repeats the last launch, which may be a different class. When you switch files, use Run As again on the one you mean.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Launch configurations, briefly',
          left: [
            'Every Run As creates a launch configuration. The Eclipse help explains that it derives most settings from your project and preferences, and that you can open Run, then Run Configurations, to change them.',
            'The tabs that matter for students are Main (which class has the main method), Arguments (values passed to main, and to the virtual machine) and JRE (which Java runs the program).'
          ],
          rightH3: 'When Run As shows nothing useful',
          right: [
            'If Java Application is missing from the Run As menu, look at the class first. It needs a correctly written public static void main(String[] args) method, and the file must be saved with no errors in it.',
            'If the program waits forever, it is probably reading input. Click into the Console view and type the value it is waiting for, then press Enter.'
          ] },
        { kind: 'source', html: 'Sources: Eclipse JDT user guide, <a class="ag-inline-link" href="https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/gettingStarted/qs-3.htm" rel="noopener" target="_blank">Creating your first Java project</a> and <a class="ag-inline-link" href="https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/tasks/tasks-java-local-configuration.htm" rel="noopener" target="_blank">Creating a Java application launch configuration</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'problems', tint: 'tint', eyebrow: 'The Problems view',
      h2: 'Red markers, the light bulb and Ctrl+1',
      lede: 'Eclipse shows a single mistake in several places at once, which is helpful once you know it and alarming until you do. The documentation lists every place it appears.',
      body: [
        { kind: 'table', caption: 'Where Eclipse shows a problem, from the JDT user guide (read 17 October 2026)', head: ['Where', 'What you see', 'What to do with it'], rows: [
          ['Problems view', 'A list of every error and warning in the project', 'Select one and choose Go To from its menu to jump to the line'],
          ['Editor ruler', 'A marker beside the affected line', 'Hover to read the message'],
          ['Under the code', 'A squiggly line under the word that may have caused it', 'Hover for the message and quick fixes'],
          ['Package Explorer', 'Problem ticks on the file and the folders above it', 'Shows which files still need attention'],
          ['Editor tab', 'A marker on the tab of the open file', 'A reminder when several files are open'],
          ['Light bulb', 'An icon in the marker bar', 'Correction proposals are available: click it or press Ctrl+1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Quick Fix, from the documentation',
          left: [
            'The Eclipse help puts it this way: left click on the light bulb or invoking Ctrl+1 (Edit, then Quick Fix) brings up the proposals for the problem at the cursor position. Each proposal shows a preview before you choose it.',
            'Some fixes can repair every problem of the same kind in the file at once; the documentation says to press Ctrl+Enter for that. Source, then Organize Imports adds all the import lines a file needs in one go.'
          ],
          rightH3: 'Our rule for students',
          right: [
            'The documentation itself suggests a trick for professionals: write a variable that does not exist yet and let Create local variable declare it. For a student, the same proposal is a trap, because it silences an error that was usually a typo.',
            'So we teach a simple test. Accept a proposal only when you can say, in one sentence, why it is the right change. Adding a missing import passes almost every time; creating a field or variable to make red go away almost never does.'
          ] },
        { kind: 'source', html: 'Sources: Eclipse JDT user guide, <a class="ag-inline-link" href="https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/gettingStarted/qs-7.htm" rel="noopener" target="_blank">Identifying problems in your code</a> and <a class="ag-inline-link" href="https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/reference/ref-java-editor-quickfix.htm" rel="noopener" target="_blank">Quick Fix</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'messages', tint: 'deep', eyebrow: 'Eclipse error messages',
      h2: 'What Eclipse&rsquo;s messages mean, from our own compiler runs',
      lede: 'Eclipse compiles with its own compiler, not javac, so its messages are worded differently from what a textbook or a teacher using another editor shows. We wrote a small program with three problems and compiled it with the Eclipse Compiler for Java.',
      body: [
        { kind: 'code', label: 'The program &middot; Till.java', lang: 'java', code: TILL, note: 'Ours. Three separate problems: a Scanner never closed, a variable that only gets a value on one path, and a method that can throw without saying so.' },
        { kind: 'code', label: 'What the Eclipse compiler reported', lang: 'console', code: TILL_OUT, note: 'Our run, ecj 3.46.100 with resource warnings switched on (-warn:+resource), 17 October 2026, trimmed to the message lines. Eclipse shows the same messages in the Problems view.' },
        { kind: 'table', mt: true, caption: 'Eclipse wording, javac wording and the fix (our runs of ecj 3.46.100 and javac 22.0.1 on Till.java, Shop.java, Semi.java and Disc.java)', head: ['Eclipse says', 'javac says', 'What it means and the fix'], rows: [
          ['The local variable total may not have been initialized', 'variable total might not have been initialized', 'Some path reaches the line without giving total a value. Give it a starting value where you declare it.'],
          ['Unhandled exception type InterruptedException', 'unreported exception InterruptedException; must be caught or declared to be thrown', 'Thread.sleep can throw a checked exception. Add throws InterruptedException to the method, or catch it.'],
          ['Resource leak: \'in\' is never closed', '(no message by default)', 'A warning, not an error: the program still runs. Closing the Scanner, or using try with resources, clears it.'],
          ['Type mismatch: cannot convert from double to int', 'incompatible types: possible lossy conversion from double to int', 'A decimal result is being stored in an int. Cast deliberately with (int), or use a double variable.'],
          ['This method must return a result of type int', 'missing return statement', 'Some path through the method ends without a return. Add one for the case your if does not cover.'],
          ['Cannot make a static reference to the non-static field stock', 'non-static variable stock cannot be referenced from a static context', 'main is static and stock belongs to an object. Create an object first, or make the field static if that is what you mean.'],
          ['Syntax error, insert ";" to complete BlockStatements', '\';\' expected', 'A missing semicolon at the end of the line the marker points to.']
        ] },
        { kind: 'code', mt: true, label: 'The repaired program', lang: 'java', code: TILL_FIXED, note: 'Ours, compiled with ecj 3.46.100 with no problems reported, then run: typing pen printed 2. Each change answers one message: a starting value, a throws clause, and try with resources to close the Scanner.' },
        { kind: 'p', mt: true, html: 'The javac column is from our javac 22.0.1 runs on the same mistakes; the missing return row came from a separate one-method file, because javac stopped at two other errors in Shop.java first. If your class uses a different editor, our guide on <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a> covers the general method.' }
      ]
    },
    {
      id: 'java', tint: 'tint', eyebrow: 'Java versions and memory',
      h2: 'When Eclipse uses the wrong Java, or will not start',
      lede: 'Three settings decide which Java you are really using in Eclipse, and they are in three different places. Mixing them up causes most of the version errors students report.',
      body: [
        { kind: 'table', caption: 'The three Java settings in Eclipse, from the Eclipse help and wiki (read 17 October 2026)', head: ['Setting', 'Where it lives', 'What it controls'], rows: [
          ['Installed JREs', 'Preferences, Java, Installed JREs', 'The list of Java installations Eclipse knows, and which one is the workspace default'],
          ['Compiler compliance level', 'Preferences, Java, Compiler', 'Which Java language version your code is compiled as. The default &ldquo;Depends on default JRE&rdquo;'],
          ['The -vm line', 'The eclipse.ini file beside the Eclipse program', 'Which Java runs Eclipse itself, before any project opens']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Read the error first.</b> An error that mentions a class file version, or says a newer language feature cannot be used at this level, usually means the compliance level is lower than the Java your code needs.',
          '<b>Check Installed JREs.</b> Make sure the Java your class uses is listed, and ticked as the default if every project should use it.',
          '<b>Match the compliance level.</b> Set it to the same version as that JRE. The compiler page also offers the --release option, which the help says applies when the JRE is 9 or above.',
          '<b>Check the project, not only the workspace.</b> A project can override both settings in its own properties, so a project copied from school may still point at the lab&rsquo;s version.',
          '<b>If Eclipse will not start at all,</b> the problem is the Java that runs Eclipse. That is set with -vm in eclipse.ini, described next.'
        ] },
        { kind: 'code', mt: true, label: 'An eclipse.ini with -vm and a larger heap (layout from the Eclipse wiki; path and sizes are ours)', lang: 'ini', code: INI, note: 'The wiki&rsquo;s rules: the -vm option and its value must be on separate lines; the value must be the full path to the Java executable, not just the Java home directory; -vm goes before -vmargs, because everything after -vmargs is passed to the virtual machine. The -Xmx line raises the maximum heap, the usual answer to a java heap space error inside Eclipse.' },
        { kind: 'two', mt: true,
          leftH3: 'Two more rules from the wiki',
          left: [
            'The Eclipse wiki is blunt about one mismatch: 32-bit Eclipse will not work with a 64-bit JVM, and the reverse also fails. Download the Eclipse and the Java built for the same processor type.',
            'Keep a copy of eclipse.ini before you edit it. A single misplaced line can stop Eclipse from launching, and the copy gets you back in seconds.'
          ],
          rightH3: 'Heap errors in your own program',
          right: [
            'If the out-of-memory message comes from your program rather than from Eclipse, eclipse.ini is the wrong place. The program&rsquo;s memory is set in its own launch configuration, on the Arguments tab, as a virtual machine argument.',
            'In student code, though, a heap error is usually a bug, typically a loop that keeps adding to a list and never stops. Fix the loop before you add memory.'
          ] },
        { kind: 'source', html: 'Sources: Eclipse JDT user guide, <a class="ag-inline-link" href="https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/reference/preferences/java/debug/ref-installed_jres.htm" rel="noopener" target="_blank">Installed JREs</a> and <a class="ag-inline-link" href="https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/reference/preferences/java/ref-preferences-compiler.htm" rel="noopener" target="_blank">Java Compiler preferences</a>; Eclipse wiki, <a class="ag-inline-link" href="https://wiki.eclipse.org/Eclipse.ini" rel="noopener" target="_blank">Eclipse.ini</a>. All read 17 October 2026.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'Eclipse in a US Java course',
      h2: 'Eclipse, AP Computer Science A and graded work',
      lede: 'Plenty of AP Computer Science A and college intro classes run on Eclipse. A few facts about how the tool fits the course, and about how we help with assignments.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The exam is not in Eclipse', p: 'College Board describes AP CSA as a fully digital exam taken in its Bluebook testing app. Eclipse is for learning and practice; on exam day you write code without the Problems view, so practice reading your own code before you compile it.' },
          { h3: 'Warnings are not errors', p: 'A yellow marker such as the resource leak warning still lets the program run. Teachers and autograders differ on whether warnings matter, so read your course rules rather than guessing.' },
          { h3: 'Projects travel badly', p: 'A project zipped from a school machine may carry the lab&rsquo;s Java settings. Re-check the project&rsquo;s own compliance and JRE before assuming your code is wrong.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we help with assignments',
          left: [
            'We never write or correct graded assignments for a student, and we do not supply answer keys. When a student brings an Eclipse project to class, the teacher asks them to read the Problems view aloud and explain each message, then the student makes the change.',
            'That way the fix belongs to the student, and so does the understanding the assignment was set to test.'
          ],
          rightH3: 'A checklist before you ask for help',
          right: [
            'Our list for students: copy the exact message from the Problems view; note the file and line; say which Java version the project uses; and say what you already tried. With those four things a teacher can usually help in minutes.',
            'For AP CSA planning, see our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and if you are choosing between the two AP courses, <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP or AP CSA first</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam" rel="noopener" target="_blank">AP Computer Science A Exam</a>, AP Central, read 17 October 2026. AP is a trademark of College Board, which is not connected with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting comfortable',
    h2: 'Four stages of working in Eclipse',
    lede: 'How students usually progress from first install to using the IDE with confidence.',
    table: { caption: 'Stages of an Eclipse user (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Overwhelmed', 'Many panels open, unsure which file is running'],
      ['2. Running', 'Creates a project and class, uses Run As, reads the Console'],
      ['3. Reading', 'Uses the Problems view and hovers to understand each message'],
      ['4. In control', 'Manages JREs and compliance, uses Quick Fix only when it is right']
    ] },
    left: { h3: 'For parents', ps: [
      'Eclipse looks complicated because it is built for professionals. Struggling with it in the first weeks says nothing about your child&rsquo;s ability to program.',
      'A short session with someone who knows the tool often saves hours of frustration.'
    ] },
    right: { h3: 'For students', ps: [
      'Close the panels you do not use. The editor, Package Explorer, Problems and Console are enough for school.',
      'Save often. Eclipse checks your code on every save, which is free feedback.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students who code in Java and beyond',
    lede: 'All live, all with a regular teacher, and all available in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Java', sub: 'Teens', courses: [
        { code: 'EJ / JAVA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language behind your Eclipse projects.' },
        { code: 'EJ / JAVA / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Every unit, plus free-response practice.' },
        { code: 'EJ / JAVA / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'A close cousin of Java, closer to the machine.' }
      ] },
      { num: 'II', h3: 'Tools and thinking', sub: 'Teens', courses: [
        { code: 'EJ / TOOL / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'The Git client Eclipse ships with, explained.' },
        { code: 'EJ / TOOL / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Plan the program before the IDE.' },
        { code: 'EJ / TOOL / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'A different language for the browser.' }
      ] },
      { num: 'III', h3: 'College', sub: 'Ages 18 and up', courses: [
        { code: 'EJ / PRO / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Core Java through to Spring Boot.' },
        { code: 'EJ / PRO / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The second-year course, live.' },
        { code: 'EJ / PRO / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for college', blurb: 'Team projects without lost work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Java lessons around your class schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings that work from Eastern to Pacific time.' },
      { time: 'Weekends', l: 'A regular slot for students with busy weekdays.' },
      { time: '1-on-1', l: 'Fitted around labs, tests and project deadlines.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'Someone who knows your project history.' },
      { h3: 'Eclipse on screen', p: 'We work in your own workspace.' },
      { h3: 'Messages first', p: 'Every lesson starts from the Problems view.' },
      { h3: 'Your work stays yours', p: 'No graded answers, ever.' },
      { h3: 'Anywhere in the US', p: 'Online, from any state.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What our Java students go on to build',
  projectsLede: 'Programs by learners who started with the same IDE questions. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left on Google by families we teach, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Eclipse and Java are free. Our fee covers live teaching only, charged monthly and shown in US dollars; there is no term commitment, and stopping after any month costs nothing extra.',
    free: ['A free first lesson', 'Share your Eclipse project', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Pick your batch time', 'Paid monthly'],
    one: ['Private lessons', 'Scheduled at your convenience', 'Your course, your pace']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'Eclipse for Java: common questions',
    items: [
      { q: 'Which Eclipse should I download for a Java class?', a: 'Eclipse IDE for Java Developers. The Eclipse Foundation describes it as the essential tools for any Java developer, including a Java IDE, a Git client, an XML editor and Maven and Gradle integration. The Enterprise package is larger and only needed if your course asks for it.' },
      { q: 'Do I need to install Java before Eclipse?', a: 'For starting Eclipse, usually not any more: the Eclipse download page says the 2026-09 R installer now includes a JRE for macOS, Windows and Linux. Your course may still ask for a particular JDK version, which you add under Installed JREs in the preferences.' },
      { q: 'How do I run a Java program in Eclipse?', a: 'Open the class that contains the main method, then choose Run, then Run As, then Java Application. The output appears in the Console view. The green Run button repeats the last launch, so use Run As again when you switch to another class.' },
      { q: 'What does Ctrl+1 do in Eclipse?', a: 'It opens Quick Fix, the list of correction proposals for the problem under the cursor. You can also click the light bulb in the margin. Each proposal shows a preview before you accept it.' },
      { q: 'Why is Eclipse showing an error that javac does not show, or wording it differently?', a: 'Eclipse uses its own compiler. In our tests the same mistake appeared as variable total might not have been initialized in javac and as The local variable total may not have been initialized in Eclipse. The meaning is the same; only the words differ.' },
      { q: 'What does Resource leak is never closed mean?', a: 'It is a warning that a resource such as a Scanner was opened and never closed. Your program still runs. Closing it, or creating it in a try with resources statement, removes the warning.' },
      { q: 'How do I change the Java version in Eclipse?', a: 'Add the Java you need under Preferences, Java, Installed JREs, then set the compiler compliance level on the Java, Compiler page to match. Check the project\'s own properties too, because a project can override the workspace settings.' },
      { q: 'How do I fix java heap space in Eclipse?', a: 'If Eclipse itself runs out of memory, raise the -Xmx value after -vmargs in eclipse.ini. If your own program runs out, set the memory in its launch configuration instead, and first check for a loop that never stops adding data.' },
      { q: 'Can you fix my Eclipse homework project?', a: 'We do not write or correct graded assignments, and we do not provide answer keys. A teacher will work through the messages with you and teach the idea behind each one, so you can make the fix and explain it.' },
      { q: 'When can US students take live classes?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do the classes cost?', a: 'The first lesson is free. After that, teaching is paid one month at a time, and the fees section of this page shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for US students writing Java.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The full set of our pages for American students.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A general method for finding mistakes.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'Our teen Java course in detail.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'Live preparation for the AP exam.' },
      { href: '/java-for-beginners', label: 'Java for beginners', p: 'Starting Java from zero.' },
      { href: '/blog/java-array-programs-for-beginners', label: 'Java array programs', p: 'Practice programs to run in Eclipse.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which course you are in and what Eclipse is doing that you did not expect. The teacher opens your workspace with you and starts from there.',
    readFirst: 'To see what a class involves before you book, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a> and their syllabi.',
    note: 'Our teachers are based in India and teach entirely online, so lessons happen over video rather than at a local office. WhatsApp gets the quickest answer from us.',
    formNote: 'Free first lesson, and no payment details requested.'
  },

  footer: {
    cols: [
      { h4: 'Java and tools', links: [
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/java-for-beginners', label: 'Java for beginners' },
        { href: '/blog/java-array-programs-for-beginners', label: 'Java array programs' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'Editor, compiler and runtime are three different things'
  },

  personalityCss: `
.ag-root.ag-ej .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-ej .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-ej .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ej .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ej .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-ej .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Eclipse Foundation pages read raw on 17 October 2026: installer 2026-09 R includes a JRE; Eclipse IDE for Java Developers 360 MB and its description; JDT user guide on projects, Run As and launch configurations, the Problems view and markers, Quick Fix (Ctrl+1, Ctrl+Enter), Organize Imports, Installed JREs, compiler compliance level and --release; Eclipse wiki eclipse.ini rules for -vm, -vmargs, -Xmx and 32-bit versus 64-bit. College Board: AP CSA is a fully digital exam in Bluebook.',
    localProject: 'Till.java, Shop.java and Semi.java compiled with ecj 3.46.100 (-warn:+resource) and javac 22.0.1 on 17 October 2026: a seven-row Eclipse-to-javac message table, the repaired Till.java (ran: input pen printed 2), an eclipse.ini example with our path and heap sizes, a seven-step first-run routine and a before-you-ask checklist. Lesson family: tools and environment.',
    requiredMentions: ['The Eclipse Installer 2026‑09 R now includes a JRE for macOS, Windows and Linux.', 'Eclipse IDE for Java Developers', '360 MB', 'The local variable total may not have been initialized', 'Unhandled exception type InterruptedException', 'is never closed', 'Type mismatch: cannot convert from double to int', 'This method must return a result of type int', 'Cannot make a static reference to the non-static field stock', 'Depends on default JRE', '32-bit Eclipse will not work with a 64-bit JVM', 'ecj 3.46.100', 'Ctrl+Enter'],
    sources: [
      { claim: 'Eclipse Installer 2026-09 R includes a JRE.', url: 'https://www.eclipse.org/downloads/' },
      { claim: 'Package names, sizes and descriptions for 2026-09 R.', url: 'https://www.eclipse.org/downloads/packages/' },
      { claim: 'Problems view, markers, light bulb, Ctrl+1, Go To.', url: 'https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/gettingStarted/qs-7.htm' },
      { claim: 'Quick Fix proposals, preview, Ctrl+Enter, Create local variable hint.', url: 'https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/reference/ref-java-editor-quickfix.htm' },
      { claim: 'Run As Java Application and launch configuration tabs.', url: 'https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/tasks/tasks-java-local-configuration.htm' },
      { claim: 'Installed JREs and compiler compliance level.', url: 'https://help.eclipse.org/latest/topic/org.eclipse.jdt.doc.user/reference/preferences/java/ref-preferences-compiler.htm' },
      { claim: 'eclipse.ini -vm rules, -vmargs, heap and 32-bit versus 64-bit.', url: 'https://wiki.eclipse.org/Eclipse.ini' },
      { claim: 'AP CSA is a fully digital exam in Bluebook.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' }
    ],
    rejectedClaims: [
      'The exact Eclipse IDE dialog text for a class with no main method (for example a "does not contain a main type" message): not found in the documentation read and not reproducible from the command line, so not quoted.',
      'That the Eclipse IDE shows resource leak warnings by default: our run switched them on with -warn:+resource, and the page says so.',
      'That the javac and Eclipse wordings all come from one file: the missing return row is from a separate file, Disc.java, because javac reported two other errors in Shop.java first; the page says so.',
      'Download counts from the packages page: volatile, not printed.',
      'Any affiliation with the Eclipse Foundation or College Board: none, and the page says so.'
    ]
  }
};
