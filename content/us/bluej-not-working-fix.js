'use strict';
// BlueJ not working: fixes (ag- school-tools door; US cluster Phase T, row 142).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md
// (Phase T rules: official docs only; never answer keys or graded solutions). Not a twin of
// /icse-class-10-bluej-java-coaching (Indian ICSE exam coaching): this page is BlueJ troubleshooting for US students.
// Search evidence (keyword-research-2026-09/us/autocomplete_tools.tsv): "bluej not working", "bluej not showing
// output", "bluej not opening", "why is my bluej not working", "bluej how to run program", "bluej how to install",
// "is bluej free", "bluej vs intellij".
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/bluej-not-working-fix/):
//  - bluej.org (home): "A free Java Development Environment designed for beginners"; "Version 6.0.1, released
//    4 September 2026"; Windows "Requires 64-bit Windows, Windows 8 or later"; "Standalone zip suitable for USB
//    drives"; macOS "Requires macOS 11 or later", a separate Intel version; Ubuntu/Debian "Debian 11 or Ubuntu 20.04 or
//    later", ARM64 version; "BlueJ requires a 64-bit operating system"; "For 32-bit operating systems, download BlueJ
//    4.1.4 instead."; GNU GPL v2 with the Classpath Exception.
//  - bluej.org/versions.html: 6.0.0 "1 July 2026", "Added support for Kotlin in BlueJ, including editing and execution.";
//    installers "includes JDK"; 5.5.0 (3 June 2025) "Fixed bug with terminal sometimes not showing exceptions if the
//    stderr pane was not previously visible." Note: versions.html lists "64-bit Windows 7 or newer" and "MacOS X
//    10.12+" for the 6.0.x downloads, which differs from the home page; the page prints the home page minimums and
//    says the two pages differ.
//  - bluej.org/faq.html: "BlueJ could not find any Java systems. A JDK must be installed to run BlueJ."; "Most BlueJ
//    installers now ship with the correct version of the JDK included."; "Bluej was unable to create a virtual machine
//    (VM) to execute projects" (firewall; loopback "127.0.0.1"; accented or non-English characters in the project path);
//    "The New Class and Compile buttons are greyed out"; "the class simply needs to be compiled"; a program using
//    Scanner "is waiting (indefinitely) for the input"; "the terminal input is line buffered"; main called by
//    right-clicking the class, default parameter "{ }", arguments "{ "one", "two", "three" }"; 'Clear screen at method
//    call' and System.out.print('\u000C'); bluej.properties locations; "bluej.uid=private"; macOS "Creating object..."
//    and the localhost proxy bypass; macOS splash screen fix "Restore standard fonts..."; window off screen after a
//    second monitor; GitHub passwords replaced by Personal Access Tokens; Linux "~/.bluej/bluej-debuglog.txt".
//  - apcentral.collegeboard.org/courses/ap-computer-science-a: Unit 3 Class Creation "10%–18%" (printed 10% to 18%);
//    /exam: fully digital, Bluebook.
// Our own material, labelled on the page: Greeter.java (no prompt, then with a prompt, the FAQ's form feed and an
// argument count), compiled and run with javac/java 22.0.1 from the command line (not inside BlueJ), saved as
// ours-greeter-runs.txt; the symptom table order, the reset routine and the BlueJ-or-bigger-IDE table.
// Lesson family: objects and the object bench (calling methods on objects you created yourself).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SILENT = `// Greeter.java (ours): looks frozen when run in BlueJ
import java.util.Scanner;

public class Greeter {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String name = in.nextLine();   // waits here, silently
        System.out.println("Hello, " + name);
    }
}`;

const TALKING = `// Greeter.java, fixed (ours)
import java.util.Scanner;

public class Greeter {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Your name: ");   // prompt first
        String name = in.nextLine();
        // the form feed clears the BlueJ terminal
        System.out.print('\\u000C');
        System.out.println("Hello, " + name);
        System.out.println("Arguments: " + args.length);
    }
}

Called from BlueJ with { "one", "two", "three" }
Your name: Ada
Hello, Ada
Arguments: 3`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'BLUEJ FIXES', blurb: 'BlueJ will not start, will not compile, will not show output or seems frozen: the fixes from the official BlueJ FAQ, in the order to try them, for US Java students.' },
  slug: 'bluej-not-working-fix',
  code: 'bnwf',
  accent: '#8A4E65',
  accentRationale: 'BlueJ not working, US: a muted plum rose (#8A4E65) from the US allocation table, distinct from the claret and indigo Java pages, contrast 5.90 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'BlueJ not working: fixes',
  title: 'BlueJ Not Working? Fixes for Install, Output and Frozen Programs',
  description: 'BlueJ not working? Fixes from the official BlueJ FAQ for a missing JDK, the virtual machine error, grayed-out buttons, no terminal output and frozen programs.',
  ogDescription: 'BlueJ will not open, compile or show output? The official FAQ fixes in the order to try them, plus how to run main with arguments and where BlueJ keeps its settings.',
  twitterDescription: 'BlueJ not working? Official fixes for install, VM errors, output and frozen runs.',
  pageName: 'BlueJ not working: fixes',
  webPageDescription: 'A troubleshooting guide to BlueJ for US high school and college Java students, built from the official BlueJ download page, version history and FAQ.',
  courseDescription: 'Live online Java classes for US students who use BlueJ or any other editor, from objects and classes to AP Computer Science A, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'BlueJ not working',
  navLinks: [
    { href: '#symptoms', label: 'Symptoms' },
    { href: '#install', label: 'Install' },
    { href: '#frozen', label: 'Frozen or silent' },
    { href: '#main', label: 'Running main' },
    { href: '#reset', label: 'Reset' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 and college &middot; BlueJ',
  h1: 'BlueJ not working? The fixes, in the order to try them',
  lede: 'BlueJ is built for beginners, and most of the time it is pleasantly simple: draw classes, compile, right-click to make objects. So when it refuses to open, grays out its buttons, or runs a program that seems to do nothing at all, students tend to assume they broke something. Usually they did not. The BlueJ team publishes a frequently asked questions page that covers nearly every one of these failures, and the causes are few: a missing or mismatched Java kit, a firewall blocking BlueJ&rsquo;s two halves from talking, a class that has not been compiled yet, or a program quietly waiting for input. This page puts those fixes in the order that solves problems fastest.',
  secondaryCta: { href: '#symptoms', label: 'Find your symptom' },
  wa: 'Hello Modern Age Coders, my student in the US uses BlueJ for Java and it is not working properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java in BlueJ or any editor',
  spec: [
    ['For', 'Grades 9 to 12 and college'],
    ['Tool', 'BlueJ, free'],
    ['Version read', '6.0.1'],
    ['Language', 'Java'],
    ['Exam link', 'AP Computer Science A'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Most BlueJ problems have four causes, all covered in the official BlueJ FAQ: no Java kit found (reinstall BlueJ with its bundled JDK), a firewall or proxy blocking BlueJ&rsquo;s local connection, a class that is not compiled yet (grayed options), or a program waiting silently for keyboard input in the terminal. Check them in that order.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three Java courses for students who started in BlueJ',
    lede: 'BlueJ is a fine place to learn objects. These courses take that understanding further, live.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'BNWF / 01', title: 'Java for teens', note: 'Ages 13 to 18. Classes, objects and methods, then real programs.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'BNWF / 02', title: 'AP Computer Science A', note: 'Class design, ArrayList and 2D arrays the way the exam asks for them.' },
      { course: 'complete-java-programming-masterclass-college', code: 'BNWF / 03', title: 'Java for college', note: 'From the object bench to full applications.' }
    ]
  },

  sections: [
    {
      id: 'symptoms', tint: 'tint', eyebrow: 'Find your symptom',
      h2: 'What you see, what it usually means, and the fix',
      lede: 'Every row is an entry in the official BlueJ FAQ. Find the line that matches your screen, then read the fuller explanation further down.',
      body: [
        { kind: 'table', caption: 'BlueJ symptoms and fixes, from bluej.org/faq.html (read 17 October 2026)', head: ['What you see', 'What the FAQ says causes it', 'What to do'], rows: [
          ['&ldquo;BlueJ could not find any Java systems. A JDK must be installed to run BlueJ.&rdquo;', 'No Java development kit was found', 'Reinstall BlueJ from bluej.org; the FAQ says most installers now ship with the correct JDK included'],
          ['&ldquo;Bluej was unable to create a virtual machine (VM) to execute projects&rdquo;', 'Usually firewall software blocking BlueJ&rsquo;s local connection; on Windows, also accented or non-English characters in the project path', 'Allow traffic on 127.0.0.1 for BlueJ, or move the project to a plain folder name'],
          ['&ldquo;The New Class and Compile buttons are greyed out&rdquo;', 'No project is open', 'Use Open Project or New Project from the Project menu'],
          ['Right-click shows Inspect grayed out, no way to make objects', 'The class has not been compiled', 'Compile the class, then right-click it again'],
          ['The program runs forever and nothing happens', 'It is waiting for input it asked for', 'Open the terminal from the View menu, type the input, press Enter'],
          ['On a Mac, &ldquo;Creating object...&rdquo; never finishes', 'A network proxy affecting BlueJ&rsquo;s local sockets', 'Add localhost to the bypass list in the Mac&rsquo;s network proxy settings'],
          ['On a Mac, the splash screen or main window never appears', 'A Java bug affecting some macOS systems', 'Open Font Book and choose Restore standard fonts from the File menu'],
          ['The window is in the taskbar but not on screen', 'It opened on a second monitor that is no longer connected', 'Move the window back to the visible screen area']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why BlueJ has a virtual machine error at all',
          left: [
            'The FAQ explains that BlueJ actually runs two Java virtual machines: one for BlueJ itself and one for your code. When you create an object, it lives in the second one, and the two talk over a network connection inside your own computer.',
            'That design is what makes the object bench possible, and it is also why a strict firewall or a school proxy can break BlueJ even though nothing ever leaves the machine. The FAQ says communication must be allowed when both source and destination are 127.0.0.1, the loopback address.'
          ],
          rightH3: 'On a school laptop',
          right: [
            'Many US districts manage student laptops centrally, so you cannot change the firewall yourself. If the virtual machine error appears on a managed machine, show the FAQ entry to your teacher or the school IT team; the fix belongs to whoever manages the device.',
            'For Macs managed by a school, the FAQ lists the BlueJ components that must also be authorized in the management profile, which is again an IT task rather than a student one.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.bluej.org/faq.html" rel="noopener" target="_blank">BlueJ Frequently Asked Questions</a>, read 17 October 2026. We are not connected with the BlueJ project.' }
      ]
    },
    {
      id: 'install', tint: 'deep', eyebrow: 'Install or reinstall',
      h2: 'Installing BlueJ cleanly, and what each download needs',
      lede: 'Half of all BlueJ problems disappear with a clean install of the current version, because the installer brings its own Java with it. Here is what bluej.org lists.',
      body: [
        { kind: 'table', caption: 'BlueJ 6.0.1 downloads, from the bluej.org home page (read 17 October 2026)', head: ['System', 'Requirement listed', 'Also offered'], rows: [
          ['Windows', '64-bit Windows, Windows 8 or later', 'A standalone zip suitable for USB drives'],
          ['macOS', 'macOS 11 or later', 'A separate version for Macs with Intel processors (2021 and earlier)'],
          ['Ubuntu or Debian', '64-bit Intel, Debian 11 or Ubuntu 20.04 or later', 'A version for ARM64, for example Raspberry Pi'],
          ['32-bit systems', 'Not supported by current versions', 'BlueJ 4.1.4']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Check the version you have.</b> The current release on bluej.org is 6.0.1, released 4 September 2026. An older copy may carry bugs the team has already fixed.',
          '<b>Pick the right file.</b> On a Mac, check whether you have Apple silicon or an Intel processor before downloading; there are two different builds.',
          '<b>Use the full installer, not a bare jar,</b> unless you know you need it. The version history lists the Windows and Mac downloads as including the JDK.',
          '<b>On a school laptop without install rights,</b> the standalone zip for Windows runs from a folder or a USB drive.',
          '<b>Open a project before anything else.</b> Use Project, then New Project, so the class buttons come alive.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Is BlueJ free?',
          left: [
            'Yes. The BlueJ home page calls it a free Java Development Environment designed for beginners, and it is published under the GNU General Public License version 2 with the Classpath Exception. The source code is public.',
            'The FAQ adds that BlueJ sends a little anonymous information, such as the BlueJ and Java versions and the operating system, to help plan development, and that a bluej.uid=private setting switches it off.'
          ],
          rightH3: 'A note on the two pages',
          right: [
            'The download lists on the version history page give different minimums for the same 6.0.x installers (they mention Windows 7 and macOS 10.12) than the home page does. We print the home page figures, which are the stricter ones; if your machine sits between the two, try the installer and see.',
            'The 6.0.0 release on 1 July 2026 added Kotlin support for editing and running code. For a Java course that changes nothing; the 6.0.1 point release only added Kotlin class templates that were missing.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bluej.org/" rel="noopener" target="_blank">bluej.org</a> and <a class="ag-inline-link" href="https://www.bluej.org/versions.html" rel="noopener" target="_blank">BlueJ version history</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'frozen', tint: 'tint', eyebrow: 'Frozen or silent',
      h2: 'When a program seems to do nothing, or shows no output',
      lede: 'The BlueJ FAQ has an entry for a program that seems to run forever and do nothing. Usually it is working perfectly and waiting for you. Here is a tiny example that does exactly that.',
      body: [
        { kind: 'code', label: 'A program that looks frozen &middot; Greeter.java', lang: 'java', code: SILENT, note: 'Ours. It compiles cleanly. Run from BlueJ, it sits at nextLine() waiting for a line of input, and because it prints nothing first, there is no sign that it wants anything.' },
        { kind: 'two', mt: true,
          leftH3: 'What the BlueJ FAQ says',
          left: [
            'The FAQ answers this one directly: if your program requests input, you must supply the input before the program can continue running; what is happening is that it is waiting, indefinitely, for the input it asked for.',
            'You can open the terminal from the View menu and type into it, pressing Enter at the end, because the terminal input is line buffered.'
          ],
          rightH3: 'The better fix, also from the FAQ',
          right: [
            'The FAQ&rsquo;s recommended solution is to print a prompt, such as &ldquo;Please enter your name&rdquo;, before reading input. Printing makes BlueJ open the terminal window automatically, so the program no longer looks frozen.',
            'It is also simply better programming: anyone running your code, including a teacher grading it, can see what it expects.'
          ] },
        { kind: 'code', mt: true, label: 'The same program, talking to its user', lang: 'java', code: TALKING, note: 'Ours. We compiled and ran it with javac and java 22.0.1 from the command line, piping in Ada and passing three arguments, and checked that the form feed character the FAQ recommends was printed. In BlueJ you would call main with the array shown.' },
        { kind: 'table', mt: true, caption: 'No output in BlueJ: four checks (from the BlueJ FAQ and version history)', head: ['Check', 'Why'], rows: [
          ['Is the terminal window open?', 'Output goes to the terminal, which you can open from the View menu'],
          ['Did the program print before it read input?', 'Printing opens the terminal automatically; reading alone does not'],
          ['Is the window off screen?', 'After unplugging a second monitor, the terminal can open where you cannot see it'],
          ['Are you on an old version?', 'BlueJ 5.5.0 fixed a bug where the terminal sometimes did not show exceptions if the error pane had not been visible']
        ] }
      ]
    },
    {
      id: 'main', tint: 'deep', eyebrow: 'Running main',
      h2: 'How to run a program, with arguments, in BlueJ',
      lede: 'BlueJ does not have a single Run button for main, which confuses students coming from other editors. The FAQ explains the BlueJ way.',
      body: [
        { kind: 'ol', items: [
          '<b>Compile the class.</b> The FAQ notes that gray diagonal stripes across a class box disappear once it is compiled, so stripes mean it still needs compiling.',
          '<b>Right-click the class box</b> in the class diagram. Static methods, including main, appear in the menu.',
          '<b>Choose void main(String[] args).</b> A dialog asks for the array of strings main takes.',
          '<b>Leave it as { } for no arguments,</b> which is the default, an empty array.',
          '<b>Or type arguments as an array,</b> for example { &quot;one&quot;, &quot;two&quot;, &quot;three&quot; }, which passes three strings exactly as a command line would.',
          '<b>Watch the terminal.</b> Output appears there; tick Clear screen at method call in the terminal&rsquo;s Options menu if old output gets in the way.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why BlueJ works this way',
          left: [
            'BlueJ is designed around objects rather than whole programs. You can create an object from any compiled class and call its methods one at a time, without writing a main method at all, and inspect the values of its fields as you go.',
            'For learning what a constructor does, or how two objects share data, that interactive object bench is genuinely useful, and it is the main reason teachers choose BlueJ for a first course.'
          ],
          rightH3: 'Libraries and the standard classes',
          right: [
            'If your class gives you a jar file, the FAQ lists three ways to add it: the Libraries tab in Preferences, the userlib folder inside the BlueJ installation, or a folder named +libs inside your project.',
            'To experiment with a standard class such as String or java.awt.Point, the Tools menu has Use Library Class, which lets you create objects from it directly on the bench.'
          ] }
      ]
    },
    {
      id: 'reset', tint: 'tint', eyebrow: 'When nothing else works',
      h2: 'A reset routine, and where BlueJ keeps its settings',
      lede: 'If BlueJ misbehaves in a way none of the entries above describe, these steps work through the remaining causes, from the least to the most disruptive.',
      body: [
        { kind: 'ol', items: [
          '<b>Restart BlueJ and the computer.</b> It sounds trivial, but it clears a stuck second virtual machine.',
          '<b>Open a brand-new project</b> and make one class. If that works, the problem is in the old project, not BlueJ.',
          '<b>Move the project</b> to a folder whose path has only plain English letters and no accented characters.',
          '<b>Update to the current version</b> from bluej.org, using the installer that includes the JDK.',
          '<b>Rename your settings file</b> so BlueJ starts with defaults (locations below). Rename rather than delete, so you can restore it.',
          '<b>Check the firewall or proxy,</b> or ask whoever manages the computer to allow BlueJ on 127.0.0.1.',
          '<b>Collect the debug log</b> if you need to contact BlueJ support. On Linux, the FAQ says it is normally at ~/.bluej/bluej-debuglog.txt.'
        ] },
        { kind: 'table', mt: true, caption: 'Where BlueJ stores bluej.properties, from the BlueJ FAQ (read 17 October 2026)', head: ['System', 'Location the FAQ gives'], rows: [
          ['Windows (the FAQ lists Vista, 7 and 8)', 'C:\\Users\\your-user-name\\bluej\\bluej.properties'],
          ['macOS', '/User/your-user-name/Library/Preferences/org.bluej/bluej.properties'],
          ['Linux', 'your-home-directory/.bluej/bluej.properties']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Git and GitHub from BlueJ',
          left: [
            'BlueJ can share a project through Git. If team actions fail even though your GitHub password is right, the FAQ explains why: GitHub no longer allows account passwords for version control operations, and you need a Personal Access Token in the password field instead.',
            'On a school network, a proxy can also block Git. The FAQ describes passing the proxy settings to BlueJ&rsquo;s Java as -D options, which is again a job for the person who knows the network.'
          ],
          rightH3: 'Settings that override settings',
          right: [
            'BlueJ reads two files: bluej.defs, installed with BlueJ for every user, and bluej.properties, which is yours. The FAQ notes that properties set in bluej.properties override those in bluej.defs.',
            'So a student&rsquo;s personal file can carry an old, broken setting even after a reinstall. That is why renaming bluej.properties is on the reset list.'
          ] }
      ]
    },
    {
      id: 'apcsa', tint: 'deep', eyebrow: 'BlueJ in a US course',
      h2: 'BlueJ, AP Computer Science A and the step to a larger IDE',
      lede: 'BlueJ appears in many first Java courses in the US. Here is how it lines up with AP CSA, what College Board publishes about the exam, and how we handle graded work.',
      body: [
        { kind: 'table', caption: 'BlueJ or a larger IDE? Our comparison for students (ours, from the BlueJ pages above)', head: ['If you need', 'BlueJ', 'A larger IDE such as Eclipse or IntelliJ IDEA'], rows: [
          ['To see objects and call methods one by one', 'Built in: the object bench', 'Possible through a debugger, less direct'],
          ['A simple screen for a first course', 'Yes, deliberately minimal', 'Many more panels and settings'],
          ['To work on large, many-file programs', 'Workable, limited', 'Built for it'],
          ['Its own Java bundled', 'The Windows and Mac downloads include a JDK', 'Varies by product'],
          ['Cost', 'Free, open source', 'Free options exist']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What lines up with the exam',
          left: [
            'AP Central lists Unit 3, Class Creation, at 10% to 18% of the multiple-choice weighting. Designing a class, writing its constructor and calling its methods is exactly what BlueJ&rsquo;s object bench makes visible.',
            'The exam itself is fully digital and taken in College Board&rsquo;s Bluebook app, not in any IDE, so BlueJ is a place to learn and practice rather than the exam environment. See our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> for preparation.'
          ],
          rightH3: 'Graded work stays the student&rsquo;s',
          right: [
            'When a BlueJ project is homework, our teachers do not write or fix it, and we never give answer keys. The teacher helps the student find which symptom row matches, and the student makes the change.',
            'For a general method of finding bugs that works in any editor, see <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>. Students preparing for India&rsquo;s ICSE board use BlueJ differently, and our <a class="ag-inline-link" href="/icse-class-10-bluej-java-coaching">ICSE BlueJ coaching</a> page covers that course.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a" rel="noopener" target="_blank">AP Computer Science A Course</a> and <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam" rel="noopener" target="_blank">Exam</a>, AP Central, read 17 October 2026. AP is a trademark of College Board, which is not connected with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing with BlueJ',
    h2: 'Four stages from first project to confident Java',
    lede: 'Where students usually are when BlueJ first goes wrong, and where they head next.',
    table: { caption: 'Stages of a BlueJ learner (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Setting up', 'Installing, opening a first project, wondering why buttons are gray'],
      ['2. On the bench', 'Creating objects by right-clicking and calling their methods'],
      ['3. Writing programs', 'Using main, the terminal and input with a clear prompt'],
      ['4. Moving on', 'Ready for a larger IDE and many-file projects']
    ] },
    left: { h3: 'For parents', ps: [
      'When BlueJ stops working, it is almost always the setup, not your child&rsquo;s code or ability.',
      'If the computer is a school device, the fix may need the school&rsquo;s IT team, and that is normal.'
    ] },
    right: { h3: 'For students', ps: [
      'Print a prompt before every input. It saves you and everyone who runs your code.',
      'Compile first, then right-click. Most grayed-out menus are an uncompiled class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students learning Java with objects',
    lede: 'Each one is a live course with the same teacher every week, taken in a group or alone.',
    bands: [
      { num: 'I', h3: 'Java', sub: 'Teens', courses: [
        { code: 'BNWF / JAVA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects first, then whole programs.' },
        { code: 'BNWF / JAVA / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Classes, lists and arrays for the exam.' },
        { code: 'BNWF / JAVA / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Thinking through a task before coding it.' }
      ] },
      { num: 'II', h3: 'Next languages', sub: 'Teens', courses: [
        { code: 'BNWF / NEXT / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Quick scripts and data, in fewer lines.' },
        { code: 'BNWF / NEXT / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The broader AP course and its Create task.' },
        { code: 'BNWF / NEXT / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Share BlueJ projects the proper way.' }
      ] },
      { num: 'III', h3: 'College', sub: 'Ages 18 and up', courses: [
        { code: 'BNWF / PRO / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'The intro sequence and what follows it.' },
        { code: 'BNWF / PRO / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Lists, trees and graphs in Java.' },
        { code: 'BNWF / PRO / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ for college', blurb: 'A second systems language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Java lessons at times that suit US students',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school times across the US time zones.' },
      { time: 'Weekends', l: 'A weekly slot that leaves weekdays free.' },
      { time: '1-on-1', l: 'Arranged around your class and test dates.' }
    ],
    cells: [
      { h3: 'A teacher who stays', p: 'The same person every week.' },
      { h3: 'BlueJ, shared', p: 'We see your class diagram live.' },
      { h3: 'Setup help included', p: 'Install and settings problems count too.' },
      { h3: 'Concepts, not answers', p: 'Your graded work stays your own.' },
      { h3: 'Online, nationwide', p: 'Wherever in the US you study.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Programs our Java students have made',
  projectsLede: 'Built by learners who once had their own BlueJ troubles. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'BlueJ is free and so is Java. The only cost is the live teaching, which is paid month by month in US dollars, with no long contract and no charge for stopping when a month is over.',
    free: ['A free first lesson', 'Bring the project that will not run', 'No card asked for'],
    group: ['Fifteen to twenty in a batch', 'The same teacher each week', 'Your choice of batch', 'Paid each month'],
    one: ['One student, one teacher', 'Times you choose', 'Paced to your course']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'BlueJ not working: common questions',
    items: [
      { q: 'Why is BlueJ not working?', a: 'The official BlueJ FAQ points to a few causes: no Java development kit found, firewall or proxy software blocking BlueJ\'s connection to its own second virtual machine, a class that has not been compiled, or a program waiting for input. Reinstalling the current BlueJ, which includes a JDK, fixes many cases.' },
      { q: 'What does BlueJ could not find any Java systems mean?', a: 'It means no JDK was found, and the FAQ says a JDK must be installed to run BlueJ. The FAQ also says most BlueJ installers now ship with the correct JDK included, so downloading the current installer from bluej.org is the simplest fix.' },
      { q: 'How do I fix Bluej was unable to create a virtual machine?', a: 'The FAQ says firewall software is the usual cause. BlueJ needs to communicate when both source and destination are 127.0.0.1. On Windows, accented or non-English characters in the project path can also cause it, so move the project to a plain folder name.' },
      { q: 'Why is my BlueJ program not showing output?', a: 'Output appears in the terminal window, which you can open from the View menu. If the program reads input before printing anything, it can look frozen while it waits. Print a prompt first; the FAQ notes that printing opens the terminal automatically.' },
      { q: 'Why are the New Class and Compile buttons grayed out?', a: 'No project is open. The FAQ says to use Open Project or New Project from the Project menu first, after which you can create and compile classes.' },
      { q: 'How do I run main in BlueJ?', a: 'Compile the class, right-click it in the class diagram and choose the main method. A dialog asks for the String array; leave it as { } for no arguments, or type something like { "one", "two", "three" } to pass three.' },
      { q: 'Is BlueJ free?', a: 'Yes. The BlueJ home page describes it as a free Java Development Environment designed for beginners, released under the GNU General Public License version 2 with the Classpath Exception.' },
      { q: 'Does BlueJ work on a Chromebook or a 32-bit computer?', a: 'The BlueJ home page lists downloads for 64-bit Windows, macOS and Debian or Ubuntu Linux, and says BlueJ requires a 64-bit operating system; for 32-bit systems it points to BlueJ 4.1.4. It lists no ChromeOS download.' },
      { q: 'Will you fix my BlueJ homework?', a: 'No. We do not write or repair graded assignments or provide answer keys. A teacher helps you find the cause and teaches the idea behind it, so you can make the change yourself.' },
      { q: 'When are live Java classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are the classes?', a: 'The first lesson is free. After that, teaching is paid monthly, and the fees section of this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students learning Java.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our hub for American students and families.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding mistakes in any language.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'The teen Java course.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'Live AP CSA preparation.' },
      { href: '/blog/java-constructors-explained', label: 'Java constructors explained', p: 'What happens when you create an object.' },
      { href: '/java-for-beginners', label: 'Java for beginners', p: 'A first course from zero.' },
      { href: '/eclipse-java-help-for-students', label: 'Eclipse Java help for students', p: 'Eclipse for Java students: install, run, read errors, fix Java version and memory.' },
      { href: '/intellij-and-pycharm-free-for-students', label: 'IntelliJ and PyCharm free for students', p: 'IntelliJ IDEA and PyCharm for students: free core, student license, setup fixes.' },
      { href: '/vs-code-setup-for-students', label: 'VS Code setup for students', p: 'Set up VS Code for Python and Java, and fix the errors students hit.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us what BlueJ is doing, or not doing, and which course you are taking. The teacher looks at your setup with you first, then moves on to the Java itself.',
    readFirst: 'For a picture of a real lesson, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every course on <a class="ag-inline-link" href="/courses">our course list</a> has its syllabus published.',
    note: 'All our classes are live online sessions with teachers who work from India; there is no campus near you to drop in on. The quickest way to reach us is WhatsApp.',
    formNote: 'A free first lesson with no card details needed.'
  },

  footer: {
    cols: [
      { h4: 'Java help', links: [
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/blog/java-constructors-explained', label: 'Java constructors explained' },
        { href: '/java-for-beginners', label: 'Java for beginners' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'Make an object, call a method, watch what changes'
  },

  personalityCss: `
.ag-root.ag-bnwf .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-bnwf .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-bnwf .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-bnwf .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-bnwf .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-bnwf .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'bluej.org read raw on 17 October 2026: free Java environment for beginners; 6.0.1 released 4 September 2026; Windows 8 or later 64-bit, macOS 11 or later, Debian 11 or Ubuntu 20.04, 32-bit users to 4.1.4; GPL v2 with Classpath Exception. Version history: 6.0.0 1 July 2026 Kotlin support; installers include a JDK; 5.5.0 terminal exception fix. FAQ: the JDK message, the virtual machine message and 127.0.0.1, grayed buttons, uncompiled classes, input waiting, main with { } and arguments, clearing the terminal, bluej.properties paths, bluej.uid=private, Mac proxy and font fixes, GitHub tokens, Linux debug log. College Board: AP CSA Unit 3 10% to 18%, fully digital exam in Bluebook.',
    localProject: 'Greeter.java in two versions (silent read, then a prompt, the FAQ form feed and an argument count), compiled and run with javac/java 22.0.1 on 17 October 2026: piping Ada with three arguments printed Your name:, a form feed, Hello, Ada and Arguments: 3. Also our symptom table, the seven-step reset routine and the BlueJ-or-larger-IDE comparison. Lesson family: objects and the object bench.',
    requiredMentions: ['BlueJ could not find any Java systems. A JDK must be installed to run BlueJ.', 'Bluej was unable to create a virtual machine (VM) to execute projects', '127.0.0.1', '6.0.1, released 4 September 2026', 'BlueJ 4.1.4', 'The New Class and Compile buttons are greyed out', 'line buffered', 'Restore standard fonts', 'bluej.uid=private', 'bluej-debuglog.txt', 'Personal Access Token', '10% to 18%'],
    sources: [
      { claim: 'BlueJ is free; 6.0.1 release date; system requirements; 32-bit users to 4.1.4; licence.', url: 'https://www.bluej.org/' },
      { claim: '6.0.0 date and Kotlin support; installers include a JDK; 5.5.0 terminal fix.', url: 'https://www.bluej.org/versions.html' },
      { claim: 'Every troubleshooting entry, main and arguments, terminal clearing, settings locations, Git tokens.', url: 'https://www.bluej.org/faq.html' },
      { claim: 'AP CSA unit weightings.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a' },
      { claim: 'AP CSA fully digital exam in Bluebook.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' }
    ],
    rejectedClaims: [
      'That we reproduced the virtual machine, JDK or grayed-button problems inside BlueJ: we did not; those rows quote the BlueJ FAQ. Our only runs are Greeter.java with javac and java from the command line.',
      'A single minimum operating system for BlueJ 6.0.1: the home page and the version history list different minimums, so the page prints the home page figures and says the two differ.',
      'BlueJ usage figures ("used by millions") and textbook sales: promotional and not needed, not printed.',
      'Names of BlueJ\'s creators or of the person quoted on the home page: not printed (no individuals named).',
      'Any ChromeOS support: no ChromeOS download is listed, and the page says only that.',
      'Any affiliation with the BlueJ project or College Board: none, and the page says so.'
    ]
  }
};
