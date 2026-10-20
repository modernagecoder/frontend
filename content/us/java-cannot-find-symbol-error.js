'use strict';
// Java "cannot find symbol" error (ag- school-tools door; US cluster Phase T, row 141).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md
// (Phase T rules: help with the real problem from official docs; never answer keys or graded solutions).
// Search evidence (keyword-research-2026-09/us/autocomplete_tools.tsv): "java error cannot find symbol",
// "java error error cannot find symbol", "bluej error cannot find symbol", "bluej error identifier expected".
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/java-cannot-find-symbol-error/):
//  - docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html: "Variable names are case-sensitive."
//  - docs.oracle.com/javase/tutorial/java/package/usepkgs.html: "the Java compiler automatically imports two entire
//    packages for each source file: (1) the java.lang package and (2) the current package"; a member of a package that
//    has not been imported needs its "fully qualified name".
//  - docs.oracle.com/javase/tutorial/getStarted/problems/index.html: "If you see any compiler errors, then your program
//    did not successfully compile, and the compiler did not create a .class file."
//  - docs.oracle.com/javase/specs/jls/se21/html/jls-6.html (JLS 6.3): "The scope of a local variable declared in a
//    block by a local variable declaration statement ... is the rest of the block".
//  - apcentral.collegeboard.org/courses/ap-computer-science-a/exam: "This is a fully digital exam."; Bluebook; the
//    "Java Quick Reference" "lists the accessible methods from the Java library that may be included on the exam";
//    exam date May 12, 2027; Section II "4 Questions | 1 Hour 30 Minutes"; Question 3 uses an ArrayList, Question 4 a
//    2D array. apcentral.collegeboard.org/courses/ap-computer-science-a: Unit 4 Data Collections "30%–40%" of the
//    multiple-choice section (printed here as 30% to 40%).
// Our own material, labelled on the page: every compiler message on this page comes from our runs of javac 22.0.1
// (Oracle JDK 22.0.1, Windows 11) and of the Eclipse Compiler for Java (ecj 3.46.100) on 17 October 2026, saved as
// ours-javac-22.0.1-runs.txt and ours-ecj-3.46.100-runs.txt; Grades.java, Fixed.java and the practice set are ours.
// Lesson family: scope and declaration (a name exists only where it was declared).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BROKEN = `// Grades.java (ours): two mistakes on purpose
public class Grades {
    public static void main(String[] args) {
        int total = 0;
        for (int i = 1; i <= 3; i++) {
            int score = i * 10;
            total = total + score;
        }
        System.out.println("Last score: " + score);
        System.out.println("Total: " + Total);
    }
}`;

const OUTPUT = `> javac Grades.java
Grades.java:8: error: cannot find symbol
        System.out.println("Last score: " + score);
                                            ^
  symbol:   variable score
  location: class Grades
Grades.java:9: error: cannot find symbol
        System.out.println("Total: " + Total);
                                       ^
  symbol:   variable Total
  location: class Grades
2 errors`;

const FIXED = `// Fixed.java (ours): score declared before the loop,
// total spelled the way it was declared
import java.util.ArrayList;

public class Fixed {
    public static void main(String[] args) {
        int total = 0;
        int score = 0;
        for (int i = 1; i <= 3; i++) {
            score = i * 10;
            total = total + score;
        }
        System.out.println("Last score: " + score);
        System.out.println("Total: " + total);

        ArrayList<String> names = new ArrayList<>();
        names.add("Ada");
        System.out.println(names.size());
    }
}

> javac Fixed.java && java Fixed
Last score: 30
Total: 60
1`;

const MEMBERS = `// Roster.java (ours): four member mistakes, javac 22.0.1 output
String s = "hello";
System.out.println(s.length);     // field that does not exist
  symbol:   variable length
  location: variable s of type String

System.out.println(s.lenght());   // misspelled method
  symbol:   method lenght()
  location: variable s of type String

int[] scores = {90, 85, 77};
System.out.println(scores.length());   // arrays use .length
  symbol:   method length()
  location: variable scores of type int[]

printReport(scores);              // method never written
  symbol:   method printReport(int[])
  location: class Arrays1`;

const IDENT = `// Ident.java (ours): statements outside any method
public class Ident {
    int count = 0;
    count = 5;
    System.out.println(count);
}

> javac Ident.java
Ident.java:3: error: <identifier> expected
    count = 5;
         ^`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'JAVA ERRORS', blurb: 'What the Java "cannot find symbol" error means, read line by line from real javac output, with the eight causes, the fixes and a practice set.' },
  slug: 'java-cannot-find-symbol-error',
  code: 'jcfs',
  accent: '#1B158F',
  accentRationale: 'Java cannot find symbol, US: a deep compiler indigo (#1B158F) from the US allocation table, well clear of the other Phase T accents, contrast 12.78 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Java cannot find symbol error',
  title: 'Java "cannot find symbol" Error: What It Means and How to Fix It',
  description: 'The Java cannot find symbol error explained from real javac output: what the symbol and location lines say, eight causes, numbered fixes, and practice.',
  ogDescription: 'Read the Java cannot find symbol error line by line: our javac 22 runs show the eight usual causes, the Eclipse wording for each, and how to fix them yourself.',
  twitterDescription: 'Java cannot find symbol, decoded: real javac output, eight causes, numbered fixes.',
  pageName: 'Java cannot find symbol error',
  webPageDescription: 'A guide for US high school and college students to the Java compiler error cannot find symbol, built from our own javac 22 and Eclipse compiler runs and the Oracle Java documentation.',
  courseDescription: 'Live online Java classes for US teens and college students, including AP Computer Science A preparation, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Java cannot find symbol',
  navLinks: [
    { href: '#anatomy', label: 'The message' },
    { href: '#causes', label: 'Eight causes' },
    { href: '#steps', label: 'Fix it' },
    { href: '#ides', label: 'In your IDE' },
    { href: '#apcsa', label: 'AP CSA' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; High school and college &middot; Java compiler errors',
  h1: 'Java &ldquo;cannot find symbol&rdquo;: what it means and how to fix it',
  lede: 'You press compile and Java answers with &ldquo;error: cannot find symbol&rdquo;, a caret under one word, and two indented lines that look like a riddle. The message is far more helpful than it seems. It names the exact word the compiler could not match to any declaration, says what kind of thing it expected that word to be, and tells you where it was searching. This guide reads the message line by line from programs we compiled ourselves, lists the eight mistakes that cause nearly every case a student meets, and gives you a numbered routine for fixing it in BlueJ, Eclipse, IntelliJ IDEA, VS Code or a browser editor.',
  secondaryCta: { href: '#causes', label: 'See the eight causes' },
  wa: 'Hello Modern Age Coders, my teen in the US keeps getting Java compiler errors like cannot find symbol. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java from first class to AP CSA',
  spec: [
    ['For', 'Grades 9 to 12 and college'],
    ['Error', 'cannot find symbol'],
    ['Tool', 'javac, any editor'],
    ['Tested on', 'JDK 22.0.1'],
    ['Exam link', 'AP Computer Science A'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The error &ldquo;cannot find symbol&rdquo; means the Java compiler met a name (a variable, method or class) that it could not match to any declaration it can see from that spot. The symbol line names the word, the location line says where Java looked. Usual causes: a typo or wrong capital letter, a variable used outside its block, or a missing import.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three Java courses that turn compiler errors into understanding',
    lede: 'Each one is live, and each one starts from the code your student is writing right now.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JCFS / 01', title: 'Java for teens', note: 'Ages 13 to 18. Variables, methods, classes and the habit of reading errors.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'JCFS / 02', title: 'AP Computer Science A', note: 'The four units, the Java Quick Reference and timed free-response practice.' },
      { course: 'complete-java-programming-masterclass-college', code: 'JCFS / 03', title: 'Java for college', note: 'Core Java for intro CS courses, then on to larger programs.' }
    ]
  },

  sections: [
    {
      id: 'anatomy', tint: 'tint', eyebrow: 'Reading the message',
      h2: 'The four parts of a cannot find symbol error',
      lede: 'We wrote a ten-line program with two deliberate mistakes and compiled it with javac 22.0.1. Here is the program, then exactly what the compiler printed.',
      body: [
        { kind: 'code', label: 'The program &middot; Grades.java', lang: 'java', code: BROKEN, note: 'Ours. Line 8 uses score after the loop that declared it has ended; line 9 writes Total with a capital T.' },
        { kind: 'code', label: 'What javac printed', lang: 'console', code: OUTPUT, note: 'Our run, javac 22.0.1 on Windows 11, 17 October 2026. Two separate errors, one per unmatched name.' },
        { kind: 'table', mt: true, caption: 'Each line of the message, decoded (our reading of the run above)', head: ['Part', 'In our run', 'What it tells you'], rows: [
          ['File and line', 'Grades.java:8', 'Open that file and go to that line first. The mistake is almost always on it or just above it.'],
          ['Error name', 'error: cannot find symbol', 'The compiler hit a word it could not connect to anything declared. Nothing was run yet.'],
          ['Caret', 'The ^ under score', 'The exact word the compiler choked on, not the start of the line.'],
          ['symbol:', 'variable score', 'What kind of name Java expected: variable, method (with argument types), or class.'],
          ['location:', 'class Grades', 'Where Java was searching. For a member it reads, for example, variable s of type String.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why one mistake can look like several',
          left: [
            'Java reports each unmatched name separately, so two mistakes produce two errors and the summary line says 2 errors. A missing import is worse: in our runs, one forgotten import of ArrayList printed two errors on the same line, one for the type name and one for the constructor after new.',
            'Fix the first error in the list, compile again, and only then look at the rest. Counting errors is a poor measure of how broken a program is.'
          ],
          rightH3: 'What the compiler did not do',
          right: [
            'Oracle&rsquo;s own troubleshooting page puts it plainly: if you see any compiler errors, the program did not successfully compile and the compiler did not create a .class file. So there is nothing to run until every error is gone.',
            'That is also why an old version of your program sometimes seems to run in an IDE after a failed compile: you are running the last class file that did build, not the code on your screen.'
          ] },
        { kind: 'source', html: 'Sources: our javac 22.0.1 run (raw output kept with our notes), and Oracle, <a class="ag-inline-link" href="https://docs.oracle.com/javase/tutorial/getStarted/problems/index.html" rel="noopener" target="_blank">Common Problems (and Their Solutions)</a>, read 17 October 2026. We are not connected with Oracle.' }
      ]
    },
    {
      id: 'causes', tint: 'deep', eyebrow: 'Eight causes',
      h2: 'The eight mistakes behind almost every cannot find symbol',
      lede: 'Every row below is a mistake we typed on purpose and compiled. The middle column is the symbol line javac printed, word for word, so you can match your own message against it.',
      body: [
        { kind: 'table', caption: 'Cause, symbol line and fix (our javac 22.0.1 runs, 17 October 2026)', head: ['Cause', 'symbol: line we got', 'The fix'], rows: [
          ['1. Wrong capital letter', 'variable Total', 'Java treats total and Total as different names. Match the declaration exactly.'],
          ['2. Variable used outside its block', 'variable score', 'Declare it before the block that changes it, so it still exists afterwards.'],
          ['3. Loop counter used after the loop', 'variable k', 'A counter declared in the for header ends with the loop. Keep a separate variable if you need the value later.'],
          ['4. Missing import', 'class ArrayList', 'Add import java.util.ArrayList; above the class. The same goes for Scanner and Random.'],
          ['5. Misspelled method', 'method lenght()', 'Check the spelling against the documentation or the Java Quick Reference.'],
          ['6. Method or field that does not exist on that type', 'variable length (on a String)', 'Strings use length() with brackets; arrays use .length without; an ArrayList uses size().'],
          ['7. Method you never wrote', 'method printReport(int[])', 'Write the method, or fix the call so its name and argument types match one you wrote.'],
          ['8. Class the compiler cannot see', 'class Student', 'Put Student.java in the same project folder or package, and compile it too.']
        ] },
        { kind: 'code', mt: true, label: 'Causes 5 to 7, as the compiler reported them', lang: 'java', code: MEMBERS, note: 'Ours: lines trimmed from two of our test files to the code and the symbol and location lines. Read the location line: variable scores of type int[] tells you Java looked for length() on an array, where it does not exist.' },
        { kind: 'two', mt: true,
          leftH3: 'Scope, the idea behind causes 2 and 3',
          left: [
            'The Java Language Specification defines it precisely: the scope of a local variable declared in a block is the rest of the block. In plain words, a variable born inside a pair of curly braces dies at the closing brace.',
            'That is why score in Grades.java was fine inside the loop and unknown one line below it. Moving the declaration up, before the loop, widens its scope to the rest of main.'
          ],
          rightH3: 'Imports, the idea behind cause 4',
          right: [
            'Oracle&rsquo;s tutorial says the compiler automatically imports two entire packages for each source file: java.lang and the package your file is in. String, Math and System live in java.lang, which is why they never need an import.',
            'ArrayList, Scanner and Random live in java.util, which is not imported for you. Either write the import line or use the fully qualified name, java.util.ArrayList.'
          ] },
        { kind: 'source', html: 'Sources: Oracle, <a class="ag-inline-link" href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html" rel="noopener" target="_blank">Variables</a> (&ldquo;Variable names are case-sensitive.&rdquo;) and <a class="ag-inline-link" href="https://docs.oracle.com/javase/tutorial/java/package/usepkgs.html" rel="noopener" target="_blank">Using Package Members</a>; <a class="ag-inline-link" href="https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html" rel="noopener" target="_blank">Java Language Specification, Java SE 21, chapter 6</a>. All read 17 October 2026.' }
      ]
    },
    {
      id: 'steps', tint: 'tint', eyebrow: 'Fix it yourself',
      h2: 'A seven-step routine for any cannot find symbol error',
      lede: 'This is the order we teach. It works in any editor, because it relies only on what the compiler printed, not on a particular IDE.',
      body: [
        { kind: 'ol', items: [
          '<b>Go to the first error only.</b> Open the file and line it names. Ignore the error count for now.',
          '<b>Read the symbol line aloud.</b> &ldquo;variable Total&rdquo;, &ldquo;method lenght()&rdquo;, &ldquo;class Scanner&rdquo;. Saying the kind of name out loud tells you which half of the table above to look in.',
          '<b>Search for the declaration.</b> Use Find in your editor for the exact word. If you find it with different capitals or spelling, that is your fix.',
          '<b>If it is declared, check the braces.</b> Is the declaration inside a block (a loop, an if, another method) that has already closed by the line with the error? Then move the declaration up.',
          '<b>If it is a class, check imports and files.</b> Library classes need an import line; your own classes need their .java file in the same project or package.',
          '<b>If it is a method, read the location line.</b> It names the type Java searched. Look that type up in the documentation and check the method really exists there, with those argument types.',
          '<b>Compile again after each single change.</b> One fix, one compile. A second error often disappears on its own, and if a new one appears you know exactly which edit caused it.'
        ] },
        { kind: 'code', mt: true, label: 'The repaired program &middot; Fixed.java', lang: 'java', code: FIXED, note: 'Ours, compiled and run with javac and java 22.0.1. Declaring score before the loop and spelling total consistently clears both errors; the import line makes ArrayList visible.' },
        { kind: 'two', mt: true,
          leftH3: 'Why we do not just hand out the fix',
          left: [
            'When a student brings a homework file to class, we do not type the correction for them, and we never supply answers to graded assignments. The teacher asks which word the caret points at and what the symbol line says, and the student finds the declaration.',
            'Students who fix ten of these errors themselves usually stop making the scope mistake altogether, because they finally see where a variable lives.'
          ],
          rightH3: 'When the routine runs out',
          right: [
            'If the name is declared, spelled right, in scope and imported, and the error still appears, the problem is usually the build: a file outside the project, a stale class file, or two classes with the same name in different packages.',
            'That is the moment to ask a person. A teacher who can see the whole project on a shared screen will usually spot it in a minute.'
          ] }
      ]
    },
    {
      id: 'ides', tint: 'deep', eyebrow: 'Same error, other words',
      h2: 'What the same mistakes look like in Eclipse and other editors',
      lede: 'BlueJ, VS Code and IntelliJ IDEA usually show javac&rsquo;s wording or something close to it. Eclipse ships its own compiler, so its messages read differently. We compiled the same files with the Eclipse Compiler for Java to give you the translation.',
      body: [
        { kind: 'table', caption: 'javac wording against Eclipse compiler wording (our runs of javac 22.0.1 and ecj 3.46.100, 17 October 2026)', head: ['Mistake', 'javac says', 'Eclipse compiler says'], rows: [
          ['Wrong capital letter', 'cannot find symbol, symbol: variable Total', 'Total cannot be resolved to a variable'],
          ['Missing import', 'cannot find symbol, symbol: class ArrayList', 'ArrayList cannot be resolved to a type'],
          ['Misspelled method', 'cannot find symbol, symbol: method lenght()', 'The method lenght() is undefined for the type String'],
          ['length() on an array', 'cannot find symbol, symbol: method length()', 'Cannot invoke length() on the array type int[]'],
          ['Class not in the project', 'cannot find symbol, symbol: class Student', 'Student cannot be resolved to a type']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Red underlines before you compile',
          left: [
            'Most editors check your code as you type, so the red squiggle under a word is the same complaint arriving early. Hovering over it shows the message, and the fix routine above still applies.',
            'An underline that will not go away after you correct the spelling usually means the editor has not saved or rebuilt yet. Save the file and give it a moment.'
          ],
          rightH3: 'Quick fixes: useful, with care',
          right: [
            'Editors offer one-click fixes such as adding an import or creating a missing variable. Adding an import is almost always right. Creating a variable to silence the error is almost always wrong, because it hides the real mistake, which was a typo or a scope problem.',
            'Our rule for students: accept a quick fix only if you can say in one sentence why it is correct.'
          ] }
      ]
    },
    {
      id: 'identifier', tint: 'tint', eyebrow: 'A close relative',
      h2: 'Identifier expected: the error students confuse with this one',
      lede: 'Searches for cannot find symbol often sit next to searches for identifier expected, especially from BlueJ users. They are different problems: one is about names, the other about where code is allowed to go.',
      body: [
        { kind: 'code', label: 'Statements outside a method &middot; Ident.java', lang: 'java', code: IDENT, note: 'Ours, javac 22.0.1. The full run printed three of these errors, two of them on line 4. A declaration with a value is allowed directly in a class; an assignment or a println is not, so it must go inside a method such as main.' },
        { kind: 'table', mt: true, caption: 'Telling the two errors apart (our summary of the runs on this page)', head: ['', 'cannot find symbol', 'identifier expected'], rows: [
          ['What went wrong', 'A name is used that Java cannot match to a declaration', 'Java expected a name at a point where the grammar needs one'],
          ['Typical cause', 'Typo, scope, missing import', 'A statement placed directly in the class body, or a missing bracket'],
          ['Where to look', 'The declaration of the word under the caret', 'The braces around the line: is it inside a method?'],
          ['First fix to try', 'Match spelling and capitals', 'Move the statement into main or another method']
        ] }
      ]
    },
    {
      id: 'apcsa', tint: 'deep', eyebrow: 'AP Computer Science A',
      h2: 'Why this error matters for AP Computer Science A',
      lede: 'AP CSA students meet cannot find symbol constantly, because the course leans on exactly the features that trigger it: objects, String methods, ArrayList and arrays. Here is what College Board publishes about the exam, and how it connects.',
      body: [
        { kind: 'table', caption: 'AP Computer Science A exam facts, from AP Central (read 17 October 2026)', head: ['Point', 'What College Board says'], rows: [
          ['Format', '&ldquo;This is a fully digital exam.&rdquo; Students answer in the Bluebook testing app.'],
          ['Reference sheet', 'The Java Quick Reference &ldquo;lists the accessible methods from the Java library that may be included on the exam&rdquo;.'],
          ['Free response', 'Section II: 4 questions in 1 hour 30 minutes. Question 3 works with an ArrayList, Question 4 with a 2D array.'],
          ['Biggest unit', 'Unit 4, Data Collections, carries 30% to 40% of the multiple-choice weighting.'],
          ['2027 date', 'May 12, 2027, as listed on the AP Central exam page.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The connection, in our experience',
          left: [
            'Cause 6 in our table, mixing up length, length() and size(), is precisely the confusion between arrays, String and ArrayList that Unit 4 tests. A student who can say from memory which one each type uses has learned something the exam rewards.',
            'The Java Quick Reference is the official list of the library methods you may meet on the exam, so it doubles as the reference to check when the compiler says a method does not exist.'
          ],
          rightH3: 'Practicing without a compiler',
          right: [
            'On the free-response section you write code for a reader, not for javac, so nobody prints cannot find symbol for you. Our advice: once a week, write a short method on paper, then compile it and count the names the compiler could not find.',
            'That count dropping over a semester is a better sign of readiness than any single practice score. For course planning, see our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and <a class="ag-inline-link" href="/blog/ap-computer-science-a-changes-2026">what changed in AP CSA for 2026</a>.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam" rel="noopener" target="_blank">AP Computer Science A Exam</a> and <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a" rel="noopener" target="_blank">AP Computer Science A Course</a>, AP Central, read 17 October 2026. AP is a trademark of College Board, which is not connected with this page or with us.' }
      ]
    },
    {
      id: 'practice', tint: '', eyebrow: 'Practice set',
      h2: 'Six lines to test yourself',
      lede: 'Our own practice set. Each line compiles with exactly one cannot find symbol error. Before you look at the right-hand column, predict the symbol line javac will print. We checked every answer with javac 22.0.1.',
      body: [
        { kind: 'table', caption: 'Predict the symbol line (ours; answers from our javac 22.0.1 run)', head: ['Line of code', 'symbol: line javac printed'], rows: [
          ['String name = "Ada"; then println(Name)', 'variable Name'],
          ['Math.squareRoot(16)', 'method squareRoot(int), location: class Math'],
          ['int[] a = new int[3]; then a.size()', 'method size(), location: variable a of type int[]'],
          ['Random r = new Random(); with no import', 'class Random'],
          ['name.toUppercase()', 'method toUppercase(), location: variable name of type String'],
          ['println(k) after for (int k = 0; k &lt; 3; k++)', 'variable k']
        ] },
        { kind: 'p', mt: true, html: 'If you got the kind of symbol right on all six, you can read this error. If the Math line caught you out, the method you wanted is Math.sqrt. For more on reading errors in general, try our guide on <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>, and for a first course, <a class="ag-inline-link" href="/java-for-beginners">Java for beginners</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From stuck to fluent',
    h2: 'Four stages of reading Java errors',
    lede: 'Where most students are when they first search for this error, and where practice takes them.',
    table: { caption: 'How students grow with compiler errors (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Alarmed', 'Sees a wall of red text and starts changing lines at random'],
      ['2. Locating', 'Goes to the file and line number, finds the word under the caret'],
      ['3. Diagnosing', 'Reads the symbol and location lines and names the cause'],
      ['4. Preventing', 'Declares variables in the right place and rarely sees the error at all']
    ] },
    left: { h3: 'For parents', ps: [
      'A teen who is frustrated by compiler errors is not failing at programming. They are at stage 1, which every programmer passes through.',
      'What helps most is someone asking good questions about the message, rather than fixing the code for them.'
    ] },
    right: { h3: 'For students', ps: [
      'The compiler is precise, not hostile. It tells you the word, the kind of name and where it looked.',
      'Fix one error, compile, repeat. Patience here is faster than guessing.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Java students and the languages around it',
    lede: 'Nine live courses chosen for students who write Java at school now, or who are about to.',
    bands: [
      { num: 'I', h3: 'Java first', sub: 'Teens', courses: [
        { code: 'JCFS / JAVA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'From first class to objects and lists.' },
        { code: 'JCFS / JAVA / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The College Board course, unit by unit.' },
        { code: 'JCFS / JAVA / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and data structures behind the code.' }
      ] },
      { num: 'II', h3: 'Alongside Java', sub: 'Teens', courses: [
        { code: 'JCFS / NEXT / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The wider course, with the Create task.' },
        { code: 'JCFS / NEXT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language with friendlier errors.' },
        { code: 'JCFS / NEXT / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Save every working version of your code.' }
      ] },
      { num: 'III', h3: 'College and beyond', sub: 'Ages 18 and up', courses: [
        { code: 'JCFS / PRO / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Intro CS Java, then real applications.' },
        { code: 'JCFS / PRO / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The course after the intro sequence.' },
        { code: 'JCFS / PRO / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'USACO-style problems in Java or C++.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Java classes that fit a US school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your own time zone, Eastern to Pacific.' },
      { time: 'Weekends', l: 'A steady weekly slot for families who prefer it.' },
      { time: '1-on-1', l: 'Booked around the school calendar and exam weeks.' }
    ],
    cells: [
      { h3: 'One teacher all term', p: 'The same person reads your code each week.' },
      { h3: 'Your editor, shared', p: 'BlueJ, Eclipse, IntelliJ IDEA or VS Code.' },
      { h3: 'Errors as lessons', p: 'We start from the message on your screen.' },
      { h3: 'No homework answers', p: 'We teach the idea; the solution stays yours.' },
      { h3: 'Any state', p: 'Live on video, wherever you study.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty learners, or just you.' }
    ]
  },

  projectsH2: 'Programs our students have built',
  projectsLede: 'Work from learners who once stared at the same compiler errors. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students in their own words, as posted on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Java and every editor on this page cost nothing to download. What you pay for is the live teaching: a monthly fee shown in US dollars, no semester contract, and nothing owed if you stop when a month ends.',
    free: ['A free first lesson', 'Bring the file that will not compile', 'No card details'],
    group: ['Fifteen to twenty learners', 'A regular teacher', 'Choose your batch', 'Monthly'],
    one: ['Just you and the teacher', 'Times that suit you', 'Built around your own course']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'Cannot find symbol: common questions',
    items: [
      { q: 'What does cannot find symbol mean in Java?', a: 'It means the compiler found a name (a variable, a method or a class) that it could not match to any declaration it can see from that line. The symbol line says which name and what kind it is; the location line says where Java searched.' },
      { q: 'How do I fix cannot find symbol?', a: 'Go to the first error, read the symbol line, and search your code for that exact word. Fix a spelling or capital letter if it differs, move a declaration up if it sits inside a block that has closed, and add an import for library classes such as ArrayList or Scanner. Compile again after each change.' },
      { q: 'Why does Java say cannot find symbol for a variable I declared?', a: 'Usually because the variable was declared inside a block, such as a loop or an if, and you used it after that block closed. A local variable only exists until the closing brace of the block it was declared in. Declare it before the block instead.' },
      { q: 'Why do I get cannot find symbol for ArrayList or Scanner?', a: 'Both live in the java.util package, which Java does not import automatically. Only java.lang and your own package are imported for you. Add import java.util.ArrayList; or import java.util.Scanner; above your class.' },
      { q: 'Is Java case sensitive?', a: 'Yes. Oracle\'s Java tutorial states that variable names are case-sensitive, so total and Total are two different names. A capital letter in the wrong place is one of the most common causes of this error.' },
      { q: 'What is the difference between cannot find symbol and identifier expected?', a: 'Cannot find symbol is about a name Java cannot match to a declaration. Identifier expected means Java wanted a name at a point where the grammar requires one, often because a statement such as an assignment or a println was written directly inside the class instead of inside a method.' },
      { q: 'What does Eclipse show instead of cannot find symbol?', a: 'Eclipse uses its own compiler, so the wording differs. In our tests the same mistakes appeared as messages such as Total cannot be resolved to a variable, ArrayList cannot be resolved to a type, and The method lenght() is undefined for the type String.' },
      { q: 'Will you fix my CodeHS or school Java assignment for me?', a: 'No. We do not provide answers or solutions to graded assignments. A teacher works through the error message with you and teaches the idea behind it, so you can fix your own code and explain it.' },
      { q: 'Does this error matter for the AP Computer Science A exam?', a: 'Indirectly. The exam is fully digital in College Board\'s Bluebook app, and the mistakes behind this error, especially mixing up length, length() and size() for arrays, String and ArrayList, are exactly the distinctions the course tests.' },
      { q: 'When are live Java classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do the Java classes cost?', a: 'The first lesson is free. After that you pay one month at a time, and the monthly fee is shown in US dollars in the fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students learning Java.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have written for US families.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for any error in any language.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'Our live AP CSA preparation.' },
      { href: '/java-for-beginners', label: 'Java for beginners', p: 'Where a first Java course starts.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'The teen Java track in detail.' },
      { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA first?', p: 'Choosing between the two AP courses.' },
      { href: '/bluej-not-working-fix', label: 'BlueJ not working: fixes', p: 'BlueJ not working? Official fixes for install, VM errors, output and frozen runs.' },
      { href: '/eclipse-java-help-for-students', label: 'Eclipse Java help for students', p: 'Eclipse for Java students: install, run, read errors, fix Java version and memory.' },
      { href: '/intellij-and-pycharm-free-for-students', label: 'IntelliJ and PyCharm free for students', p: 'IntelliJ IDEA and PyCharm for students: free core, student license, setup fixes.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send the error message you are stuck on, or just tell us which course you are taking. The teacher begins from your own code, so the first lesson is about the problem in front of you.',
    readFirst: 'Curious how a lesson actually runs? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes one from start to finish, and the <a class="ag-inline-link" href="/courses">course pages</a> list every syllabus.',
    note: 'Classes are taught live on video by teachers based in India, so there is no local center to visit. For US students, WhatsApp is the fastest way to reach us.',
    formNote: 'The first lesson is free and we never ask for payment details.'
  },

  footer: {
    cols: [
      { h4: 'Java help', links: [
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/java-for-beginners', label: 'Java for beginners' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/blog/java-constructors-explained', label: 'Java constructors explained' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'A name lives only where it was declared'
  },

  personalityCss: `
.ag-root.ag-jcfs .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-jcfs .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-jcfs .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-jcfs .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-jcfs .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-jcfs .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Oracle Java documentation read raw on 17 October 2026: "Variable names are case-sensitive."; the compiler automatically imports java.lang and the current package; no .class file after a compiler error; JLS SE 21 section 6.3 local variable scope is the rest of the block. College Board AP Central: AP CSA fully digital in Bluebook, Java Quick Reference, Section II 4 questions in 1 hour 30 minutes, Unit 4 30% to 40% of multiple choice, exam May 12, 2027.',
    localProject: 'Our javac 22.0.1 and ecj 3.46.100 runs on deliberately broken programs (Grades.java, Roster.java, Arrays1.java, Ident.java, Practice.java), the decoded message table, the eight-cause table with the exact symbol lines, the javac-to-Eclipse translation table, Fixed.java and a six-line practice set. Lesson family: scope and declaration.',
    requiredMentions: ['symbol:   variable score', 'location: class Grades', 'variable Total', 'method lenght()', 'variable scores of type int[]', 'method printReport(int[])', 'Total cannot be resolved to a variable', 'Cannot invoke length() on the array type int[]', 'Variable names are case-sensitive.', 'is the rest of the block', 'method squareRoot(int)', 'May 12, 2027', 'This is a fully digital exam.'],
    sources: [
      { claim: 'Variable names are case-sensitive.', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html' },
      { claim: 'The compiler automatically imports java.lang and the current package; fully qualified names.', url: 'https://docs.oracle.com/javase/tutorial/java/package/usepkgs.html' },
      { claim: 'A program with compiler errors produces no .class file.', url: 'https://docs.oracle.com/javase/tutorial/getStarted/problems/index.html' },
      { claim: 'Scope of a local variable declared in a block is the rest of the block.', url: 'https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html' },
      { claim: 'AP CSA exam format, Java Quick Reference, free-response structure, 2027 date.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' },
      { claim: 'AP CSA unit weightings.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a' }
    ],
    rejectedClaims: [
      'That BlueJ, VS Code or IntelliJ IDEA print javac\'s exact text: not tested here, so the page says they usually show javac wording or something close.',
      'An Oracle page that lists "cannot find symbol" by name: none found in the Java Tutorials read, so every quoted message on the page is from our own compiler runs and labelled as ours.',
      'Any claim that the AP exam has or lacks a compiler: College Board\'s page says the exam is fully digital in Bluebook; the page says only that nobody prints compiler errors on the free-response section, which is our advice framing, not a College Board statement.',
      'Sums of published College Board figures (section weights or question counts): not added.',
      'Any score or grade improvement promise: none made.',
      'Any affiliation with Oracle or College Board: none, and the page says so.'
    ]
  }
};
