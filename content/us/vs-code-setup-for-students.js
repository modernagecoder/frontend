'use strict';
// VS Code setup for students (ag- Phase T school-tools door; US cluster row 146).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4): "vs code for students / java error vscode / python setup"; autocomplete_tools.tsv:
// "vs code not working with python", "vs code how to select python interpreter", "vs code for students",
// "vs code free for students", "vs code not working for c++", "vs code not opening windows 11".
// Sources, fetched raw on 17 October 2026: Markdown from github.com/microsoft/vscode-docs (main) and the rendered
// pages on code.visualstudio.com/docs (quoted strings were grepped in the rendered text, never the template Markdown);
// raw copies in keyword-research-2026-09/us/src/vs-code-setup-for-students/:
//  - docs/python/python-tutorial: "three separate pieces work together to run Python in VS Code"; "The extension
//    doesn't include Python itself."; Microsoft Store option without admin access; "The system install of Python on
//    macOS is not supported."; "py -0" and "The default interpreter is identified by an asterisk (*)."; "close and
//    reopen the terminal (or restart VS Code)"; Python: Create Environment, Python: Select Interpreter, Run Python File;
//    "ModuleNotFoundError: No module named 'numpy'"; python -m pip install numpy; pip freeze > requirements.txt.
//  - docs/setup/windows: User setup "does not require administrator permissions"; "Setup adds Visual Studio Code to your
//    %PATH% environment variable. Restart your console after installation"; "Updates are disabled when VS Code runs as
//    Administrator from a User setup installation."
//  - docs/setup/mac: "Drag Visual Studio Code.app to the Applications folder."; "Shell Command: Install 'code' command in
//    PATH"; Universal, Intel chip and Apple silicon builds.
//  - docs/java/java-tutorial: "The Coding Pack for Java is only available for Windows and macOS."; "supports Java version
//    1.8 or above"; "If you open a Java file in VS Code without opening its folder, the Java Language Server might not
//    work properly."; Language Support for Java by Red Hat and Debugger for Java as the required extensions.
//  - docs/java/java-project: "Lightweight mode doesn't resolve imported dependencies nor build the project"; "Java:
//    Clean Java Language Server Workspace"; Java: Install New JDK.
//  - docs/supporting/faq: "VS Code is free for private or commercial use."; "VS Code version 1.70.3 is the last available
//    release for Windows 7 users"; "if you disable AI functionality in VS Code ... your data is not sent to the Copilot
//    backend services".
// Our own runs (labelled on the page), Windows 11, 17 October 2026, saved as our-run-java-and-launcher.txt: javac 22.0.1
// "error: class Hello is public, should be declared in a file named Hello.java"; "error: ';' expected"; the fixed file
// prints "Hi from VS Code"; py -0 prints "-V:3.13 *        Python 3.13 (64-bit)"; code --version 1.141.0.
// Our own material: the three-pieces table, the school-laptop table, the twelve-step setup, the ten-check list and the
// term plan.
// Lesson family: tools and environments (which program runs your code, and where it looks).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PY_CHECK = `# check_setup.py  (ours) run with Run Python File
import sys
print(sys.version)       # which Python is running
print(sys.executable)    # where it lives on disk

# In the VS Code terminal on Windows, the docs suggest:
#   py -3 --version
#   py -0      (lists installs; * marks the default)
# Our run of py -0:
#   -V:3.13 *        Python 3.13 (64-bit)`;

const JAVA_NAME = `// Saved as Greeting.java  (broken on purpose, ours)
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hi from VS Code");
    }
}

// Our run, javac 22.0.1:
// Greeting.java:1: error: class Hello is public,
//   should be declared in a file named Hello.java`;

const JAVA_FIXED = `// Saved as Hello.java  (fixed, ours)
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hi from VS Code");
    }
}

// Our run: javac Hello.java, then java Hello
// Hi from VS Code
// Leave out the semicolon and javac 22.0.1 says:
// Hello.java:3: error: ';' expected`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'VS CODE SETUP', blurb: 'Setting up VS Code for Python and Java on a Windows or Mac school laptop, with the errors students hit and the fix for each.' },
  slug: 'vs-code-setup-for-students',
  code: 'cs',
  accent: '#8F1A47',
  accentRationale: 'VS Code setup for students, US Phase T: the allocated muted raspberry #8F1A47 from alloc.tsv row 146, distinct from the other Phase T accents',
  pageType: 'market',
  market: US,
  routeLabel: 'VS Code setup for students',
  title: 'VS Code Setup for Students: Python and Java Without Errors',
  description: 'VS Code setup for students: install it on a school laptop, set up Python and Java, and fix the errors students hit, from No module named to class is public.',
  ogDescription: 'Install VS Code without admin rights, add Python or Java, and fix ModuleNotFoundError, the wrong interpreter and Java file-name errors, with real messages from our runs.',
  twitterDescription: 'Set up VS Code for Python and Java, and fix the errors students hit.',
  pageName: 'VS Code Setup for Students',
  webPageDescription: 'A setup and troubleshooting guide for US students installing Visual Studio Code for Python and Java, built from the VS Code documentation and our own runs.',
  courseDescription: 'Live online Python and Java classes for US teens and college students, including help setting up VS Code, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'VS Code setup for students',
  navLinks: [
    { href: '#pieces', label: 'What to install' },
    { href: '#install', label: 'Installing' },
    { href: '#python', label: 'Python' },
    { href: '#java', label: 'Java' },
    { href: '#checks', label: 'Checks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 6 to college &middot; Visual Studio Code',
  h1: 'VS Code setup for students',
  lede: 'Visual Studio Code is free and runs on Windows and Mac, so it is a natural choice when a teacher asks you to code at home. It also confuses beginners, because installing VS Code does not install Python or Java. This guide sets it up the way Microsoft\'s own documentation describes, on a school-issued laptop or a family computer, then walks through the errors students actually see, with the exact messages from our test machine and the fix for each.',
  secondaryCta: { href: '#pieces', label: 'See what to install' },
  wa: 'Hello Modern Age Coders, my teenager in the US needs help setting up VS Code for Python or Java for school. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python and Java, set up on your own laptop',
  spec: [
    ['For', 'Grade 6 to college'],
    ['Editor', 'VS Code, free'],
    ['Runs on', 'Windows, macOS, Linux'],
    ['For Python', 'Python extension plus Python'],
    ['For Java', 'Java extensions plus a JDK'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'To set up VS Code for school, install three things: VS Code itself, the language extension (Python, or the Extension Pack for Java), and the language (a Python interpreter, or a Java JDK). Open your project folder with File, Open Folder, pick the interpreter in the Status Bar, and run from the play button. Modern Age Coders teaches Python and Java live to students in the US, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that start on your own laptop',
    lede: 'Each is taught live on your own computer, so a teacher can help get the editor working early and keep the focus on code.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'VSC / 01', title: 'Python for teens', note: 'Ages 13 to 18. VS Code, Python and real projects.' },
      { course: 'java-programming-masterclass-for-teens', code: 'VSC / 02', title: 'Java for teens', note: 'Ages 13 to 18. From the first class file to object-oriented programs.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'VSC / 03', title: 'AP Computer Science A', note: 'High school. Java from the basics, built for the AP course.' }
    ]
  },

  sections: [
    {
      id: 'pieces', tint: 'tint', eyebrow: 'What to install',
      h2: 'Three pieces, not one: why VS Code alone runs nothing',
      lede: 'The Python tutorial in the VS Code documentation says it directly: "three separate pieces work together to run Python in VS Code." Java works the same way. When nothing runs in week one, check that all three pieces are there.',
      body: [
        { kind: 'table', caption: 'What each piece does, from the VS Code Python and Java tutorials (read 17 October 2026)', head: ['Piece', 'For Python', 'For Java'], rows: [
          ['The editor', 'VS Code, where you write and organize code', 'VS Code, the same editor'],
          ['The extension', 'The Python extension; the docs note "The extension doesn\'t include Python itself."', 'Extension Pack for Java; the tutorial needs Language Support for Java by Red Hat and Debugger for Java'],
          ['The language', 'A Python interpreter, installed separately', 'A Java Development Kit (JDK); the pack "supports Java version 1.8 or above"'],
          ['An all-in-one option', 'None in the tutorial', 'The Coding Pack for Java bundles VS Code, a JDK and extensions, but "is only available for Windows and macOS"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Is VS Code free for students?',
          left: [
            'Yes, and not only for students. The VS Code FAQ says "VS Code is free for private or commercial use." There is no student edition to apply for.',
            'Python and the JDK distributions the Java tutorial lists are also free to download, so a working setup costs nothing.'
          ],
          rightH3: 'VS Code is not Visual Studio',
          right: [
            'Visual Studio is a different, larger Microsoft product. If your teacher said VS Code, you want Visual Studio Code from code.visualstudio.com.',
            'The pair is confused often enough that vs code vs visual studio shows up in search suggestions. For a school Python or Java class, VS Code is the one to install.'
          ] }
      ]
    },
    {
      id: 'install', tint: 'deep', eyebrow: 'Installing',
      h2: 'Installing VS Code on a school or family laptop',
      lede: 'If your school manages your laptop, you may not have an administrator password. The VS Code docs cover that case, and the Mac and old-Windows cases too.',
      body: [
        { kind: 'table', caption: 'Installing VS Code, from the VS Code setup documentation (read 17 October 2026)', head: ['Your computer', 'What the docs say', 'Watch out for'], rows: [
          ['Windows, no admin password', 'The User setup "does not require administrator permissions" and is "the recommended installation for most people"', '"Updates are disabled when VS Code runs as Administrator from a User setup installation."'],
          ['Windows, family computer', '"Setup adds Visual Studio Code to your %PATH% environment variable. Restart your console after installation"', 'Run code . in a folder to open it, after restarting the terminal'],
          ['Mac', '"Drag Visual Studio Code.app to the Applications folder."', 'Then open it from Applications by double-clicking the icon, as the docs describe'],
          ['Mac, to use code in Terminal', 'Run Shell Command: Install \'code\' command in PATH from the Command Palette', 'Restart the terminal afterwards'],
          ['Mac with Apple silicon', 'The download page lists Universal, Intel chip and Apple silicon builds', 'Universal works on both'],
          ['Windows 7', '"VS Code version 1.70.3 is the last available release for Windows 7 users"', 'Old laptops need a newer Windows for current VS Code']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If Python will not install without admin',
          left: [
            'The Python tutorial in the VS Code docs offers a route: "If you don\'t have admin access, an additional option for installing Python on Windows is to use the Microsoft Store."',
            'If the Store is blocked as well, ask your teacher or the school\'s tech office rather than looking for a workaround; the device belongs to the district.'
          ],
          rightH3: 'Mac students: one Python warning',
          right: [
            'The VS Code docs say "The system install of Python on macOS is not supported." They recommend Homebrew, with brew install python3 in Terminal.',
            'The python.org installer is the other common choice for students. Either way, use a Python you installed, not the one the Mac shipped with.'
          ] }
      ]
    },
    {
      id: 'python', tint: 'tint', eyebrow: 'Python',
      h2: 'Setting up Python in VS Code, and the three errors that follow',
      lede: 'Follow the steps in order. Each one matches a step in the VS Code Python tutorial, and each error below appears when one is skipped.',
      body: [
        { kind: 'ol', items: [
          '<b>Install Python</b> from python.org (Windows) or Homebrew (Mac).',
          '<b>Check it.</b> In a new terminal, run py -3 --version on Windows or python3 --version on a Mac.',
          '<b>Install the Python extension</b> from the Extensions view in VS Code.',
          '<b>Open a folder, not a file.</b> File, Open Folder. In the docs\' words, that folder becomes your "workspace".',
          '<b>Create an environment.</b> Command Palette, Python: Create Environment, choose Venv, then the interpreter you installed.',
          '<b>Select the interpreter.</b> Python: Select Interpreter, or click the Python version in the Status Bar.',
          '<b>Create a .py file,</b> type a line of code and save it.',
          '<b>Run it</b> with the Run Python File play button in the top-right of the editor.'
        ] },
        { kind: 'code', mt: true, label: 'A ten-second check &middot; which Python is VS Code using?', lang: 'python', code: PY_CHECK, note: 'If sys.executable does not point into your project\'s .venv folder, VS Code is using a different Python from the one your packages went into.' },
        { kind: 'table', mt: true, caption: 'Three Python errors and their fixes, from the VS Code Python tutorial', head: ['What you see', 'Why', 'Fix'], rows: [
          ['"ModuleNotFoundError: No module named \'numpy\'"', 'The tutorial says it means "the required package isn\'t available in your interpreter"', 'In the VS Code terminal for that interpreter, run python -m pip install numpy (Windows) or python3 -m pip install numpy (Mac)'],
          ['Python installed, but VS Code or the terminal cannot find it', 'A terminal reads system settings only when it starts', 'The docs say: "close and reopen the terminal (or restart VS Code)"'],
          ['Packages vanish when you switch projects', 'Each virtual environment keeps its own packages', 'Pick the right interpreter in the Status Bar; share setups with pip freeze > requirements.txt']
        ] }
      ]
    },
    {
      id: 'java', tint: 'deep', eyebrow: 'Java',
      h2: 'Setting up Java in VS Code, and the file-name error every AP student meets',
      lede: 'Java in VS Code needs a JDK and the Java extensions. Our AP Computer Science A course is taught in Java, and its students tend to meet the same two compile errors in their first week.',
      body: [
        { kind: 'code', label: 'Broken &middot; the class name and file name disagree', lang: 'java', code: JAVA_NAME, note: 'In Java, a public class must live in a file with exactly the same name, including capital letters. This is a Java rule, not a VS Code one, so it appears in every editor.' },
        { kind: 'code', mt: true, label: 'Fixed &middot; rename the file to match the class', lang: 'java', code: JAVA_FIXED, note: 'Rename the file in the VS Code Explorer, or rename the class; the two must match. Case matters: hello.java is a different name from Hello.java.' },
        { kind: 'two', mt: true,
          leftH3: 'Open the folder, or the language server stalls',
          left: [
            'The Java tutorial warns: "If you open a Java file in VS Code without opening its folder, the Java Language Server might not work properly." Symptoms are red squiggles everywhere, no Run button, or no code completion.',
            'Fix it with File, Open Folder on the folder that holds your .java files. For a school project with a build tool, open the project\'s top folder.'
          ],
          rightH3: 'When Run is missing: lightweight mode',
          right: [
            'The Java project docs explain that "Lightweight mode doesn\'t resolve imported dependencies nor build the project", so it cannot run or debug. Click the Java status item in the Status Bar to switch to standard mode.',
            'If things are still strange, the docs suggest the Java: Clean Java Language Server Workspace command, which rebuilds the language server\'s view of your project.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://code.visualstudio.com/docs/java/java-tutorial" rel="noopener" target="_blank">Getting Started with Java in VS Code</a> and <a class="ag-inline-link" href="https://code.visualstudio.com/docs/java/java-project" rel="noopener" target="_blank">Managing Java Projects in VS Code</a>; compile errors from our own run of javac 22.0.1 on Windows 11. We are not connected with Microsoft.' }
      ]
    },
    {
      id: 'checks', tint: 'tint', eyebrow: 'When it still fails',
      h2: 'Ten checks when VS Code will not run your code',
      lede: 'Our checklist for the evening before an assignment is due. Work through it in order and stop at the first check that explains the error.',
      body: [
        { kind: 'ol', items: [
          '<b>Is the language installed?</b> VS Code does not include Python or a JDK. Check with a version command in a new terminal.',
          '<b>Is the extension installed and enabled?</b> Search @installed in the Extensions view.',
          '<b>Did you open the folder?</b> File, Open Folder, not a single file from Downloads.',
          '<b>Is the right interpreter selected?</b> Look at the Python version in the Status Bar and click it to change.',
          '<b>Did you restart the terminal?</b> After any install, open a fresh terminal so PATH is read again.',
          '<b>Read the whole error.</b> Copy the last line into your notes before trying anything.',
          '<b>Java: does the file name match the class?</b> Hello.java for public class Hello.',
          '<b>Java: is it lightweight mode?</b> Switch to standard mode from the Status Bar.',
          '<b>Is the code saved?</b> The docs note that Run Python File in Terminal saves the file automatically; with any other run method, save first.',
          '<b>Try a one-line program.</b> If print("hi") runs, the setup works and the problem is in your code.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'About the AI features',
          left: [
            'Current VS Code versions include AI chat features linked to GitHub Copilot. They are optional, and the VS Code FAQ says that if you disable AI functionality or do not sign in, your data is not sent to the Copilot back end.',
            'While students are learning to read errors, we keep AI chat switched off in lessons, so they learn to fix problems themselves. Check your school\'s rules before turning such tools on for coursework.'
          ],
          rightH3: 'What we will and will not do',
          right: [
            'A teacher can set up VS Code with you on a shared screen, explain each error, and make sure your own laptop works for the rest of the year.',
            'We do not write or finish graded assignments. We teach the concept so you can solve the assignment yourself.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A first term',
      h2: 'What a first term looks like when the setup is done right',
      lede: 'Our plan for students who are new to a real code editor. The first two classes deal with setup so it never gets in the way again.',
      body: [
        { kind: 'table', caption: 'A first term in VS Code (our plan, adjusted for each student)', head: ['Classes', 'What the student does', 'What it builds'], rows: [
          ['1 to 2', 'Install, open a folder, run a first file', 'A setup that works every time'],
          ['3 to 4', 'Variables, input and output', 'Reading the terminal, saving often'],
          ['5 to 6', 'Decisions and loops', 'Using the debugger and breakpoints'],
          ['7 to 8', 'Functions or methods', 'Splitting code across files'],
          ['9 to 10', 'A project with a package or class', 'Environments, imports, file names'],
          ['11 to 12', 'Version control with Git', 'Committing work from inside VS Code']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Middle school', p: 'In our classes, students in Grades 6 to 8 start with Python, where one file and one play button go a long way.' },
          { h3: 'High school', p: 'Students heading for AP Computer Science A add Java in the second term with us, in the same editor.' },
          { h3: 'College', p: 'We have college students set up one environment per course from day one, which saves a lot of grief at midterms.' }
        ] },
        { kind: 'p', mt: true, html: 'For the AP course itself, see <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A online classes</a>; for Java outside the AP track, <a class="ag-inline-link" href="/java-classes-for-teens">Java classes for teens</a>; and for choosing an editor at all, our post on <a class="ag-inline-link" href="/blog/best-java-ides-for-beginners">Java IDEs for beginners</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student is',
    h2: 'Four stages of working in a real editor',
    lede: 'From fighting the setup to forgetting it is there.',
    table: { caption: 'Stages with VS Code (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Installer', 'VS Code is installed, but nothing runs yet'],
      ['2. Runner', 'Runs single files with the play button'],
      ['3. Organizer', 'Works in folders, environments and projects'],
      ['4. Debugger', 'Uses breakpoints and reads errors before searching']
    ] },
    left: { h3: 'For parents', ps: [
      'If your child is stuck at stage 1, it is almost never their fault: one of the three pieces is missing. Once all three pieces are in place, the setup keeps working.',
      'On a school-managed laptop, some installs are blocked on purpose. Check with the school before working around anything.'
    ] },
    right: { h3: 'For students', ps: [
      'Always open the folder. Half of all VS Code mysteries disappear with that one habit.',
      'Look at the Status Bar. It tells you which Python or which Java mode you are in.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses taught in a real editor',
    lede: 'All live online with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'VSC / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Projects in VS Code.' },
        { code: 'VSC / TEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, objects, real programs.' },
        { code: 'VSC / TEN / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Websites built in the editor.' }
      ] },
      { num: 'II', h3: 'Exams and tools', sub: 'High school', courses: [
        { code: 'VSC / EXM / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for the AP course.' },
        { code: 'VSC / EXM / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Commit and push from VS Code.' },
        { code: 'VSC / EXM / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack web for teens', blurb: 'Front end to server.' }
      ] },
      { num: 'III', h3: 'College and adults', sub: 'Ages 18 and up', courses: [
        { code: 'VSC / PRO / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'For college and beyond.' },
        { code: 'VSC / PRO / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Complete Java, live.' },
        { code: 'VSC / PRO / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for college', blurb: 'Collaboration on real repos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons on your own laptop',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches in US time zones.' },
      { time: 'Weekends', l: 'Good for a full setup session.' },
      { time: '1-on-1', l: 'When an assignment is due soon.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person all term.' },
      { h3: 'Your machine', p: 'We fix the setup you will use.' },
      { h3: 'Screen sharing', p: 'Errors read together, live.' },
      { h3: 'You do the work', p: 'Graded work stays your own.' },
      { h3: 'Anywhere in the US', p: 'Online, from home.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'Projects our students built in their own editors',
  projectsLede: 'Apps and programs from students who once could not get the play button to work. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Word-for-word Google reviews from parents.',

  fees: {
    h2: 'Fees',
    lede: 'VS Code, Python and a JDK are all free. Our fee is for the teaching, charged per month in US dollars, with no semester-long agreement and no charge after you decide to stop.',
    free: ['A free first lesson', 'We can start with your setup', 'No card details'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'Your choice of batch', 'Month by month'],
    one: ['Private lessons', 'Booked at your convenience', 'Your own course and laptop']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'VS Code setup: common questions',
    items: [
      { q: 'Is VS Code free for students?', a: 'Yes. The VS Code FAQ says VS Code is free for private or commercial use, so there is no student version to apply for. Python and the free JDK builds the Java tutorial lists cost nothing either.' },
      { q: 'Why is VS Code not working with Python?', a: 'Usually one of three pieces is missing: VS Code, the Python extension, or Python itself. The extension does not include Python. Install Python, restart the terminal, then choose the interpreter with Python: Select Interpreter.' },
      { q: 'How do I select the Python interpreter in VS Code?', a: 'Click the Python version shown in the Status Bar, or open the Command Palette and run Python: Select Interpreter, then choose your project environment or the Python you installed.' },
      { q: 'Why does VS Code say No module named numpy?', a: 'The package is not installed in the interpreter VS Code is using. In the VS Code terminal for that interpreter, run python -m pip install numpy on Windows or python3 -m pip install numpy on a Mac.' },
      { q: 'How do I set up Java in VS Code?', a: 'Install a JDK and the Extension Pack for Java, or on Windows and macOS use the Coding Pack for Java, which bundles both with VS Code. Then open the folder that holds your .java files.' },
      { q: 'Why does Java say class is public, should be declared in a file named?', a: 'A public class must be in a file with exactly the same name. Our run of public class Hello in Greeting.java failed for that reason. Rename the file to Hello.java, matching capital letters.' },
      { q: 'Can I install VS Code on a school laptop without admin rights?', a: 'The VS Code docs say the Windows User setup does not require administrator permissions. Your school may still block installs, so check with your teacher or school tech office first.' },
      { q: 'Will you do my coding assignment?', a: 'No. We help you set up your tools and teach the ideas so you can finish your own assignment. We never complete graded work.' },
      { q: 'What times are classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Python or Java classes cost?', a: 'The first lesson is free. After that you pay monthly for live lessons, and the fees section on this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students using real code editors.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The full list of our pages for the US.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP CSA online classes', p: 'Java for the AP course.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'Java beyond the AP track.' },
      { href: '/blog/best-java-ides-for-beginners', label: 'Java IDEs for beginners', p: 'Comparing editors before you install.' },
      { href: '/blog/git-vs-github-difference', label: 'Git vs GitHub', p: 'The next tool after the editor.' },
      { href: '/python-for-15-year-olds', label: 'Python for 15 year olds', p: 'A high school starting point.' },
      { href: '/github-classroom-help-for-students', label: 'GitHub Classroom help for students', p: 'GitHub Classroom retired on August 28, 2026: what students need to know.' },
      { href: '/google-colab-help-for-students', label: 'Google Colab help for students', p: 'Google Colab not working? Runtimes, files, Drive and limits, explained.' },
      { href: '/jupyter-notebook-errors-for-students', label: 'Jupyter Notebook errors for students', p: 'Jupyter Notebook errors students hit, what they mean, and how to fix them.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which class needs VS Code and what error you see. The first lesson can be spent getting your laptop working.',
    readFirst: 'To see the method first, read about <a class="ag-inline-link" href="/how-we-teach">our live lessons</a>, or look through <a class="ag-inline-link" href="/courses">every course</a> and its syllabus.',
    note: 'Classes run online with teachers in India, so students join from any state without traveling. Message us on WhatsApp for the fastest reply.',
    formNote: 'The first lesson is free and asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Code editors', links: [
        { href: '/blog/best-java-ides-for-beginners', label: 'Java IDEs for beginners' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/python-for-14-year-olds', label: 'Python for 14 year olds' },
        { href: '/levels/coding-for-teens', label: 'Coding for teens' }
      ] }
    ],
    bottomRight: 'Editor, extension, language: all three'
  },

  personalityCss: `
.ag-root.ag-cs .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cs .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cs .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cs .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-cs .ag-steps { gap: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'VS Code documentation (code.visualstudio.com/docs, rendered pages and github.com/microsoft/vscode-docs Markdown), read 17 October 2026: three separate pieces; the extension does not include Python; Microsoft Store without admin; macOS system Python not supported; py -0 and the asterisk; close and reopen the terminal; Create Environment and Select Interpreter; ModuleNotFoundError numpy; User setup needs no admin and adds VS Code to PATH; Mac Applications folder and the Shell Command; Coding Pack for Java only on Windows and macOS; Java 1.8 or above; open the folder or the Java Language Server might not work properly; lightweight mode; Clean Java Language Server Workspace; free for private or commercial use; 1.70.3 last for Windows 7; AI features optional.',
    localProject: 'Our own runs on Windows 11 (17 October 2026): javac 22.0.1 "error: class Hello is public, should be declared in a file named Hello.java" and "error: \';\' expected", the fixed program printing Hi from VS Code, py -0 output, VS Code 1.141.0. A three-pieces table, a school-laptop install table, an eight-step Python setup, a ten-check list and a twelve-class term plan. Lesson family: tools and environments.',
    requiredMentions: ['three separate pieces work together to run Python in VS Code', 'The extension doesn\'t include Python itself.', 'does not require administrator permissions', 'Drag Visual Studio Code.app to the Applications folder.', 'is only available for Windows and macOS', 'the Java Language Server might not work properly', 'Clean Java Language Server Workspace', 'VS Code is free for private or commercial use.', 'should be declared in a file named Hello.java', 'VS Code version 1.70.3 is the last available release for Windows 7 users', 'The system install of Python on macOS is not supported.'],
    sources: [
      { claim: 'Three pieces; extension excludes Python; Microsoft Store option; macOS system Python; py -0; restart terminal; environments; ModuleNotFoundError numpy; pip install; requirements.txt.', url: 'https://code.visualstudio.com/docs/python/python-tutorial' },
      { claim: 'Windows User setup without admin, PATH, updates disabled when run as Administrator.', url: 'https://code.visualstudio.com/docs/setup/windows' },
      { claim: 'Mac Applications folder, Shell Command for code, Universal and Apple silicon builds.', url: 'https://code.visualstudio.com/docs/setup/mac' },
      { claim: 'Coding Pack for Java only on Windows and macOS; Java 1.8 or above; open the folder; required Java extensions.', url: 'https://code.visualstudio.com/docs/java/java-tutorial' },
      { claim: 'Lightweight mode; Clean Java Language Server Workspace; Install New JDK.', url: 'https://code.visualstudio.com/docs/java/java-project' },
      { claim: 'Free for private or commercial use; Windows 7 last release; AI features and data when disabled.', url: 'https://code.visualstudio.com/docs/supporting/faq' }
    ],
    rejectedClaims: [
      'VS Code on Chromebooks: the setup pages read do not cover ChromeOS, so the page makes no Chromebook claim.',
      'GitHub Copilot age limits or student offers: not confirmed at source for under-18 users, so no AI tool is recommended to students; the page states our own policy of teaching with AI chat off for under-18s.',
      'C++ setup in VS Code (an autocomplete query): no C++ documentation was read for this page, so it is not covered.',
      'Which editor any given US school requires: not published in the sources; the page says plenty of courses expect VS Code and defers to the teacher.',
      'Completed graded assignments: none; the page says we never complete graded work.',
      'Any affiliation with Microsoft: none, and the page says so.'
    ]
  }
};
