'use strict';
// IntelliJ IDEA and PyCharm free for students (ag- school-tools door; US cluster Phase T, row 147).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md
// (Phase T rules: official docs only; never answer keys or graded solutions; under-18 pages recommend no 18+ tools).
// Search evidence (keyword-research-2026-09/us/autocomplete_tools.tsv): "intellij for students free", "is intellij
// free for students", "how to get intellij for students", "intellij license for students", "pycharm for students
// free", "pycharm professional for students", "pycharm license for students", "pycharm how to set python interpreter",
// "pycharm how to install packages", "pycharm not working", "intellij not working".
// Sources, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/intellij-and-pycharm-free-for-students/):
//  - jetbrains.com/help/idea/installation-guide.html: "Starting with IntelliJ IDEA 2025.3, we're combining these two
//    editions into a single, unified product"; "The core functionality of IntelliJ IDEA remains free"; Ultimate "free
//    30-day trial"; "continue using IntelliJ IDEA for free"; requirements (4 cores, 8 GB RAM with 3 GB for the IDE,
//    10 GB disk, 1280 x 720, Windows 10, 11, macOS 15, 26, Ubuntu 24.04, 26.04 LTS); "JetBrains Runtime is bundled with
//    the IDE (based on JBR 21). However, to develop Java applications, a standalone JDK is required."; Toolbox App.
//  - jetbrains.com/help/pycharm/installation-guide.html and unified-pycharm.html: "Starting with PyCharm 2025.1, PyCharm
//    Community and Professional are combined into a single, unified product"; "PyCharm's core features remain free and
//    open-source."; "Jupyter support is now included in the core functionality."; "30-day free Pro trial"; help
//    version "PyCharm 2026.2 Help".
//  - jetbrains.com/legal/docs/toolbox/license_educational/ (Toolbox Subscription Agreement for Students and Teachers,
//    "Version 4.2, effective as of May 01, 2024"): customer "who is at least 13 years old"; "student" studies full-time
//    at a recognized educational institution "(university, college, high school)" or a vocational program lasting no
//    less than 1 year; proof of status on request; "non-commercial, educational purposes only"; discontinue use on
//    ceasing to be a student; renew "for another year".
//  - sales.jetbrains.com/hc/en-gb/articles: 11557849416594 (eligibility: "accredited educational institutions (high
//    schools, colleges, and universities)"; "one or more years of full-time study"); 11558649766674 (apply with an
//    institutional email, "ISIC/ITIC membership", or GitHub Student Developer Pack via "Authorize with GitHub");
//    11559296363282 (domain not accepted: the "swot repository"); 11564534574994 (renew via JetBrains Account or the
//    reminder sent "2 weeks before your subscription expires"); 11564856632338 ("can be used on multiple machines");
//    11564854623378 (part-time work: "strictly for non-commercial educational purposes").
//  - jetbrains.com/academy/student-pack (meta description only; the page renders by script): "Access all JetBrains
//    IDEs, plugins, and courses for your studies and future tech career."
//  - jetbrains.com/help/pycharm/configuring-python-interpreter.html ("you need to configure at least one Python
//    interpreter"; Python Interpreter selector on the status bar; Virtualenv, pipenv, Poetry, uv, hatch, conda);
//    installing-uninstalling-and-upgrading-packages.html (packages per interpreter; Python Packages tool window; pip by
//    default); jetbrains.com/help/idea/sdk.html ("Download JDK"); jetbrains.com/help/idea/invalidate-caches.html
//    ("File | Invalidate Caches…", "Invalidate and Restart", Local History "retention period of 5 working days").
// Our own material, labelled on the page: which_python.py run with the system Python 3.13.6 and in a fresh virtual
// environment (ModuleNotFoundError: No module named 'requests'), and WhichJava.java (printed 22.0.1, Oracle
// Corporation), all from the command line, not inside the IDEs (ours-interpreter-runs.txt); the free-or-licence table,
// the decision steps and the troubleshooting order.
// Lesson family: environments (which interpreter or JDK is really running your code).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PYCHECK = `# which_python.py (ours): which Python is running this?
import sys
print(sys.version.split()[0])
in_venv = sys.prefix != sys.base_prefix
print("inside a virtual environment:", in_venv)
import requests
print("requests", requests.__version__)`;

const PYRUNS = `Run 1, the computer's own Python (our run):
3.13.6
inside a virtual environment: False
requests 2.32.5

Run 2, a brand-new virtual environment (our run):
3.13.6
inside a virtual environment: True
Traceback (most recent call last):
  File "which_python.py", line 6, in <module>
    import requests
ModuleNotFoundError: No module named 'requests'`;

const JAVACHECK = `// WhichJava.java (ours): which JDK is running this?
public class WhichJava {
    public static void main(String[] args) {
        System.out.println(System.getProperty("java.version"));
        System.out.println(System.getProperty("java.vendor"));
    }
}

our run:
22.0.1
Oracle Corporation`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STUDENT IDES', blurb: 'Are IntelliJ IDEA and PyCharm free for students? What the free core includes, who qualifies for the JetBrains student license, how to apply, and fixes for interpreter and JDK problems.' },
  slug: 'intellij-and-pycharm-free-for-students',
  code: 'ipf',
  accent: '#943C16',
  accentRationale: 'IntelliJ and PyCharm for students, US: a rust orange (#943C16) from the US allocation table, apart from the umber CodeHS page and the claret Eclipse page, contrast 6.79 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'IntelliJ and PyCharm free for students',
  title: 'IntelliJ and PyCharm Free for Students: License and Setup',
  description: 'Are IntelliJ IDEA and PyCharm free for students? What the free core includes, who qualifies for the JetBrains student license, how to apply, and setup fixes.',
  ogDescription: 'IntelliJ IDEA and PyCharm now have a free core for everyone; the student license adds the paid tier. Who qualifies (13+, high school counts), how to apply, and setup fixes.',
  twitterDescription: 'IntelliJ IDEA and PyCharm for students: free core, student license, setup fixes.',
  pageName: 'IntelliJ and PyCharm free for students',
  webPageDescription: 'A guide for US high school and college students to getting IntelliJ IDEA and PyCharm free, from JetBrains documentation and license terms, with interpreter and JDK fixes.',
  courseDescription: 'Live online Java and Python classes for US students who use IntelliJ IDEA, PyCharm or any other editor, taught in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'IntelliJ and PyCharm for students',
  navLinks: [
    { href: '#free', label: 'What is free' },
    { href: '#license', label: 'Student license' },
    { href: '#apply', label: 'How to apply' },
    { href: '#setup', label: 'Setup' },
    { href: '#fixes', label: 'Fixes' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; High school and college &middot; IntelliJ IDEA and PyCharm',
  h1: 'Are IntelliJ IDEA and PyCharm free for students?',
  lede: 'Short answer: yes, in two different ways. JetBrains has merged the old free Community editions into single products, so the core of IntelliJ IDEA and of PyCharm is now free for anyone. On top of that, students at an accredited high school, college or university can apply for a free educational license that unlocks the paid tier as well. The details matter, though: there is an age floor, a definition of who counts as a student, rules on commercial use, and a yearly renewal. This page sets out what JetBrains&rsquo; own documents say, then covers the setup problems students hit next, such as a missing interpreter or JDK.',
  secondaryCta: { href: '#license', label: 'Check if you qualify' },
  wa: 'Hello Modern Age Coders, my student in the US is setting up IntelliJ IDEA or PyCharm for school. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java and Python in any IDE',
  spec: [
    ['For', 'High school and college'],
    ['Tools', 'IntelliJ IDEA, PyCharm'],
    ['Free core', 'For everyone'],
    ['Student license', 'Ages 13 and up'],
    ['Renewal', 'Once a year'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Yes. IntelliJ IDEA (since 2025.3) and PyCharm (since 2025.1) are each a single product whose core features are free for anyone, after a 30-day trial of the paid tier. Students aged 13 or older at an accredited high school, college or university can also get a free educational license for non-commercial use, renewed each year.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses taught in whichever IDE your student has installed',
    lede: 'The teacher works in the student&rsquo;s own IntelliJ IDEA or PyCharm window, live.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'IPF / 01', title: 'Python for teens', note: 'Ages 13 to 18. Interpreters, packages and real projects in PyCharm.' },
      { course: 'java-programming-masterclass-for-teens', code: 'IPF / 02', title: 'Java for teens', note: 'Ages 13 to 18. Projects, JDKs and Java fundamentals in IntelliJ IDEA.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'IPF / 03', title: 'AP Computer Science A', note: 'The AP Java course, with practice built for the exam format.' }
    ]
  },

  sections: [
    {
      id: 'free', tint: 'tint', eyebrow: 'What is free',
      h2: 'The free core, the trial and the paid tier',
      lede: 'Older guides talk about Community and Ultimate, or Community and Professional. That split has gone. Here is how JetBrains describes the products now.',
      body: [
        { kind: 'table', caption: 'IntelliJ IDEA and PyCharm editions, from the JetBrains installation guides (read 17 October 2026)', head: ['', 'IntelliJ IDEA', 'PyCharm'], rows: [
          ['Merged into one product', 'Starting with IntelliJ IDEA 2025.3', 'Starting with PyCharm 2025.1'],
          ['Free for everyone', '&ldquo;The core functionality of IntelliJ IDEA remains free&rdquo;', '&ldquo;PyCharm&rsquo;s core features remain free and open-source.&rdquo;'],
          ['Included in the free core', 'More features than the former Community Edition', 'Jupyter support is now part of the core'],
          ['Trial on install', 'A free 30-day trial of the Ultimate subscription', 'A 30-day free Pro trial'],
          ['After the trial', 'Subscribe, or continue using IntelliJ IDEA for free', 'Get a Pro subscription, or keep using the core features for free'],
          ['Free paid tier for students', 'Yes, through the educational license', 'Yes, through the educational license']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Do you need the student license at all?',
          left: [
            'For most high school work, probably not. An AP Computer Science A course, a first Python class or a school project runs comfortably on the free core of either IDE, and nothing has to be renewed.',
            'The license is worth having when a course or project needs the advanced tools in the paid tier, which JetBrains lists in its comparison matrix. College students in a computer science major are the usual case.'
          ],
          rightH3: 'What happens when the trial ends',
          right: [
            'Both installation guides say the same thing in different words: when the 30-day trial ends, you can subscribe to keep the advanced features or simply carry on with the free core. Nothing you wrote is lost either way.',
            'If you hold a student license, the paid tier stays switched on for as long as the license is valid, which is the next section.'
          ] },
        { kind: 'source', html: 'Sources: JetBrains, <a class="ag-inline-link" href="https://www.jetbrains.com/help/idea/installation-guide.html" rel="noopener" target="_blank">Install IntelliJ IDEA</a>, <a class="ag-inline-link" href="https://www.jetbrains.com/help/pycharm/installation-guide.html" rel="noopener" target="_blank">Install PyCharm</a> and <a class="ag-inline-link" href="https://www.jetbrains.com/help/pycharm/unified-pycharm.html" rel="noopener" target="_blank">Unified PyCharm overview</a>, read 17 October 2026. We are not connected with JetBrains.' }
      ]
    },
    {
      id: 'license', tint: 'deep', eyebrow: 'The student license',
      h2: 'Who qualifies for the free JetBrains student license',
      lede: 'The rules are in two places: the license agreement itself, which is the legal document, and JetBrains&rsquo; sales help center, which explains it in plain words. They agree.',
      body: [
        { kind: 'table', caption: 'Educational license rules, from the Toolbox Subscription Agreement for Students and Teachers (Version 4.2, effective as of May 01, 2024) and the JetBrains sales help center (read 17 October 2026)', head: ['Question', 'What JetBrains says'], rows: [
          ['Minimum age', 'A student or instructor &ldquo;who is at least 13 years old&rdquo;'],
          ['Does high school count?', 'Yes: the agreement names university, college and high school; the help center says accredited high schools, colleges and universities'],
          ['How long the program must be', 'Full-time study, or a vocational program lasting no less than 1 year; the help center says one or more years of full-time study'],
          ['Proof', 'You must be able to show your active academic status for the current academic year if JetBrains asks'],
          ['What you may use it for', 'Non-commercial, educational purposes only'],
          ['Part-time jobs and internships', 'Not covered: the help center says strictly for non-commercial educational purposes'],
          ['How many computers', 'It can be used on multiple machines, for example a classroom computer and a laptop at home'],
          ['When you stop being a student', 'The agreement says to discontinue use of the licensed products']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Students under 13',
          left: [
            'Middle schoolers younger than 13 do not meet the agreement&rsquo;s age floor, so the student license is not for them. The free core of PyCharm is the usual route for a younger student who wants a full Python IDE, and a parent should read JetBrains&rsquo; general terms with them before installing.',
            'For most children under 13, though, a lighter editor or a browser tool is a better fit than a professional IDE. That is a teaching view of ours, not a JetBrains rule.'
          ],
          rightH3: 'What the student pack says it includes',
          right: [
            'JetBrains describes its free student pack as access to all JetBrains IDEs, plugins and courses for your studies. Its page loads through scripts, so we quote only its own summary here.',
            'Some JetBrains products include AI features with terms of their own. We have not reviewed those terms for students under 18, so we do not recommend them on this page; check the age rules for any AI feature before switching it on.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.jetbrains.com/legal/docs/toolbox/license_educational/" rel="noopener" target="_blank">Toolbox Subscription Agreement for Students and Teachers</a>; JetBrains sales help center, <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/11557849416594-Who-is-eligible-for-free-individual-educational-licenses" rel="noopener" target="_blank">who is eligible</a>, <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/11564854623378-I-m-a-student-and-I-work-part-time-Can-I-use-my-free-educational-license-for-my-work-apprenticeship-or-internship-projects" rel="noopener" target="_blank">part-time work</a> and <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/11564856632338-Can-I-use-my-educational-license-on-several-computers" rel="noopener" target="_blank">several computers</a>; all read 17 October 2026.' }
      ]
    },
    {
      id: 'apply', tint: 'tint', eyebrow: 'How to apply and renew',
      h2: 'Applying for the license, and keeping it each year',
      lede: 'JetBrains lists three ways to prove you are a student. Which one works depends on your school.',
      body: [
        { kind: 'ol', items: [
          '<b>Check you qualify.</b> Aged 13 or older, enrolled at an accredited high school, college or university, studying full-time.',
          '<b>Pick a proof.</b> The help center lists an email address from your school, an ISIC or ITIC card, or a GitHub Student Developer Pack.',
          '<b>Use your school email if you have one.</b> Enter it on the JetBrains student application form, which the help center links to.',
          '<b>If your school email is not accepted,</b> JetBrains says your school&rsquo;s email domain can be submitted to the swot repository it uses to recognize schools. Once the domain is accepted, apply again.',
          '<b>No school email at all?</b> Use an ISIC or ITIC card, or Authorize with GitHub if you have the GitHub Student Developer Pack.',
          '<b>Activate in the IDE.</b> The help center says to create a JetBrains Account, download the product, and log in with that account when the IDE prompts you on first start.',
          '<b>Renew each year.</b> JetBrains sends a reminder email 2 weeks before the subscription expires; renew from that link or from your JetBrains Account if you are still studying full-time.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When a school email does not work',
          left: [
            'JetBrains has two help articles for this. If the domain is not recognized, it can be submitted to the swot repository. If the domain is blocked by JetBrains&rsquo; automated system, the article says to use the GitHub or ISIC/ITIC tabs at the top of the application form instead.',
            'Some school accounts also cannot receive email from outside the district. That is a setting at your school, not at JetBrains, so a teacher or the IT office is the right person to ask.'
          ],
          rightH3: 'Keep it honest',
          right: [
            'The agreement asks for information that is complete and accurate, including real names, and says JetBrains may ask for proof of student status. Do not borrow a sibling&rsquo;s college email; the license belongs to the person studying.',
            'Use it for coursework and your own learning, and not for paid work, which the help center rules out.'
          ] },
        { kind: 'source', html: 'Sources: JetBrains sales help center, <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/11558649766674-How-do-I-apply-for-a-free-educational-license" rel="noopener" target="_blank">how to apply</a>, <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/11559296363282-My-institutional-email-address-is-not-accepted-Can-I-still-apply" rel="noopener" target="_blank">institutional email not accepted</a>, <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/19480024581650-I-don-t-have-an-official-institutional-email-address-How-should-I-apply-for-a-license" rel="noopener" target="_blank">no institutional email</a> and <a class="ag-inline-link" href="https://sales.jetbrains.com/hc/en-gb/articles/11564534574994-How-can-I-renew-my-free-educational-license-for-another-year" rel="noopener" target="_blank">renewing for another year</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'setup', tint: 'deep', eyebrow: 'Setup',
      h2: 'What your computer needs, and what to install first',
      lede: 'Both IDEs list the same hardware and operating systems. ChromeOS is not on either list, which is worth knowing before an assignment is due.',
      body: [
        { kind: 'table', caption: 'System requirements, from the IntelliJ IDEA and PyCharm installation guides (read 17 October 2026)', head: ['Item', 'Requirement listed'], rows: [
          ['Processor', 'x86_64 or arm64 architecture, 4 cores'],
          ['Memory', '8 GB of total RAM, with 3 GB available for the IDE'],
          ['Disk', '10 GB'],
          ['Screen', '1280 x 720'],
          ['Windows', '10, 11'],
          ['macOS', '15, 26'],
          ['Linux (examples)', 'Ubuntu 24.04 and 26.04 LTS, Fedora 43 and 44, Debian 13']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Java students: the IDE is not the JDK',
          left: [
            'The IntelliJ IDEA guide is precise about this. You do not need to install Java to run the IDE, because JetBrains Runtime is bundled with it, but to develop Java applications a standalone JDK is required.',
            'You do not have to hunt for one. When you create a project or open its SDK settings, IntelliJ IDEA offers Download JDK, where you choose a vendor and a version and let the IDE install it.'
          ],
          rightH3: 'Python students: the IDE is not Python',
          right: [
            'The PyCharm documentation says you need to configure at least one Python interpreter to work with your code. That can be the Python already on your computer or a virtual environment made with tools such as Virtualenv, uv or conda.',
            'JetBrains recommends its Toolbox App for installing and updating its IDEs, which is handy if a course asks for a specific version.'
          ] },
        { kind: 'source', html: 'Sources: JetBrains, <a class="ag-inline-link" href="https://www.jetbrains.com/help/idea/installation-guide.html" rel="noopener" target="_blank">Install IntelliJ IDEA</a>, <a class="ag-inline-link" href="https://www.jetbrains.com/help/idea/sdk.html" rel="noopener" target="_blank">SDKs</a> and <a class="ag-inline-link" href="https://www.jetbrains.com/help/pycharm/configuring-python-interpreter.html" rel="noopener" target="_blank">Configure a Python interpreter</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'fixes', tint: 'tint', eyebrow: 'Common fixes',
      h2: 'Package not found, wrong JDK, and an IDE acting strangely',
      lede: 'When PyCharm or IntelliJ IDEA seems not to be working in a new project, ask one question before any other: which Python, or which Java, is actually running the code? Here is how to find out.',
      body: [
        { kind: 'code', label: 'Which Python is running? &middot; which_python.py', lang: 'python', code: PYCHECK, note: 'Ours. Three lines that tell you the Python version, whether you are inside a virtual environment, and whether a package is installed there.' },
        { kind: 'code', mt: true, label: 'The same file, run two ways', lang: 'console', code: PYRUNS, note: 'Our runs on Windows 11, from the command line rather than inside PyCharm. Same computer, same Python version, different environments: the package installed for one interpreter does not exist in the other. That is the usual meaning of ModuleNotFoundError in a new PyCharm project.' },
        { kind: 'ol', mt: true, items: [
          '<b>Look at the interpreter selector.</b> PyCharm shows the project&rsquo;s interpreter in the status bar at the bottom; click it to see or switch interpreters.',
          '<b>Install the package for that interpreter.</b> PyCharm&rsquo;s documentation explains that packages belong to a particular interpreter, so each project has its own set; use the Python Packages tool window, which uses pip by default.',
          '<b>In IntelliJ IDEA, check the project SDK.</b> If the JDK is missing or the wrong version, use Download JDK in the SDK settings.',
          '<b>Confirm with a tiny program.</b> Run the Java check below inside the IDE; it prints the version the project really uses.',
          '<b>If the IDE itself misbehaves</b> (wrong highlighting, missing classes that clearly exist), choose File, then Invalidate Caches, then Invalidate and Restart.'
        ] },
        { kind: 'code', mt: true, label: 'Which JDK is running? &middot; WhichJava.java', lang: 'java', code: JAVACHECK, note: 'Ours, compiled and run with JDK 22.0.1 from the command line. Run inside IntelliJ IDEA, it prints the version of the JDK your run configuration uses, normally the project SDK, which is exactly what you want to check.' },
        { kind: 'two', mt: true,
          leftH3: 'About Invalidate Caches',
          left: [
            'IntelliJ IDEA&rsquo;s help explains that it caches files for every project you have opened, that the caches are not deleted until you restart, and that the files are rebuilt the next time you open a project.',
            'It also notes that Local History, the IDE&rsquo;s own record of your edits, has a retention period of 5 working days by default and is not deleted unless you choose that option. Leave that box unticked.'
          ],
          rightH3: 'Help with school work',
          right: [
            'If a setup problem is blocking a graded assignment, we will help with the setup and teach the idea behind it, but we do not write or fix the assignment itself, and we never provide answer keys.',
            'For a general method that works in every IDE, see <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>, and for AP preparation, our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>.'
          ] },
        { kind: 'source', html: 'Sources: JetBrains, <a class="ag-inline-link" href="https://www.jetbrains.com/help/pycharm/installing-uninstalling-and-upgrading-packages.html" rel="noopener" target="_blank">Install, uninstall, and upgrade packages</a> and <a class="ag-inline-link" href="https://www.jetbrains.com/help/idea/invalidate-caches.html" rel="noopener" target="_blank">Invalidate caches</a>, read 17 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing into a professional IDE',
    h2: 'Four stages of using IntelliJ IDEA or PyCharm',
    lede: 'Where students usually are when they install a JetBrains IDE, and where they get to with practice.',
    table: { caption: 'Stages of a student in a professional IDE (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Installed', 'The IDE opens, but code will not run: no interpreter or JDK set'],
      ['2. Running', 'Projects run; packages and SDKs are still a mystery'],
      ['3. Configured', 'Knows which interpreter or JDK each project uses, and why'],
      ['4. Productive', 'Uses the debugger, refactoring and version control inside the IDE']
    ] },
    left: { h3: 'For parents', ps: [
      'These are the same tools professional developers use. A teen who learns to set one up properly has learned a real skill.',
      'Check the age floor before applying for a student license: JetBrains requires 13 or older.'
    ] },
    right: { h3: 'For students', ps: [
      'When something will not import or compile, ask which interpreter or JDK the project is using before anything else.',
      'Renew the license when the reminder arrives, so the paid tier never switches off mid-semester.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students working in Java and Python',
    lede: 'A regular teacher, live online, with the student&rsquo;s own IDE on screen, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Python', sub: 'Teens', courses: [
        { code: 'IPF / PY / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language PyCharm was built for.' },
        { code: 'IPF / PY / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Notebooks and data, now in the free core.' },
        { code: 'IPF / PY / 03', slug: 'pcep-pcap-python-certification-course', title: 'Python certification', blurb: 'PCEP and PCAP, prepared live.' }
      ] },
      { num: 'II', h3: 'Java', sub: 'Teens', courses: [
        { code: 'IPF / JAVA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Projects and JDKs in IntelliJ IDEA.' },
        { code: 'IPF / JAVA / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The AP course, in any IDE.' },
        { code: 'IPF / JAVA / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control inside the IDE.' }
      ] },
      { num: 'III', h3: 'College', sub: 'Ages 18 and up', courses: [
        { code: 'IPF / PRO / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Core Java to Spring Boot.' },
        { code: 'IPF / PRO / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for college', blurb: 'From zero to advanced Python.' },
        { code: 'IPF / PRO / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The course every CS major meets.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons for US students, in your own IDE',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Times that work across US time zones.' },
      { time: 'Weekends', l: 'A regular weekly slot, if that suits better.' },
      { time: '1-on-1', l: 'Around your semester and project deadlines.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'Every week, the same person.' },
      { h3: 'Your IDE, shared', p: 'IntelliJ IDEA, PyCharm or another.' },
      { h3: 'Setup counts', p: 'Interpreters and JDKs are part of learning.' },
      { h3: 'No graded answers', p: 'The assignment stays yours.' },
      { h3: 'Any state', p: 'Live online, wherever you are.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty learners, or private.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Built by learners using the same tools. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families wrote on Google, quoted without edits.',

  fees: {
    h2: 'Fees',
    lede: 'The IDEs can be free, as this page explains; our lessons are paid separately. Live teaching is billed monthly in US dollars, there is no term to sign up for, and you can stop after any month at no extra cost.',
    free: ['A free first lesson', 'Bring your IDE setup problem', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Pick your batch', 'Monthly billing'],
    one: ['One to one', 'At times that suit you', 'Fitted to your course']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'IntelliJ IDEA and PyCharm for students: common questions',
    items: [
      { q: 'Is IntelliJ IDEA free for students?', a: 'Yes. Since IntelliJ IDEA 2025.3, its core functionality is free for everyone, with a 30-day trial of the paid Ultimate tier on install. Students aged 13 or older at an accredited school can also apply for a free educational license that covers the paid tier.' },
      { q: 'Is PyCharm free for students?', a: 'Yes. Since PyCharm 2025.1, Community and Professional are one product whose core features, including Jupyter support, are free and open-source. A 30-day Pro trial comes with the install, and eligible students can get the Pro tier through the free educational license.' },
      { q: 'Can high school students get the JetBrains student license?', a: 'Yes, if they are at least 13. The license agreement names high schools alongside colleges and universities, and the JetBrains help center says students at accredited high schools are welcome to apply.' },
      { q: 'How do I apply for the JetBrains student license?', a: 'JetBrains lists three ways: an email address from your school, an ISIC or ITIC card, or a GitHub Student Developer Pack through Authorize with GitHub. Apply through the student form on the JetBrains site.' },
      { q: 'What if my school email is not accepted?', a: 'JetBrains says your school\'s email domain can be submitted to the swot repository it uses to recognize schools. Once the domain is accepted you can apply. Meanwhile, an ISIC or ITIC card or the GitHub Student Developer Pack are alternatives.' },
      { q: 'How long does the student license last?', a: 'It runs for a subscription period and can be renewed for another year while you are still studying full-time. JetBrains sends a reminder email 2 weeks before it expires, with a renewal link.' },
      { q: 'Can I use the student license for a part-time job or freelance work?', a: 'No. The JetBrains help center says free educational licenses are strictly for non-commercial educational purposes, and the license agreement says the same.' },
      { q: 'Why does PyCharm say No module named when I installed the package?', a: 'The package was most likely installed for a different Python interpreter. Packages belong to an interpreter, so check the interpreter selector in the status bar and install the package in the Python Packages tool window for that interpreter.' },
      { q: 'Do I need to install Java for IntelliJ IDEA?', a: 'Not to run the IDE, which bundles JetBrains Runtime. To write Java programs you need a JDK, and IntelliJ IDEA can download one for you from the SDK settings with Download JDK.' },
      { q: 'When are classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do your classes cost?', a: 'The first lesson is free. After that, classes are billed monthly, and the fees section of this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students learning Java and Python.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our pages for American students, all in one place.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for bugs in any IDE.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'The teen Java track.' },
      { href: '/blog/python-for-beginners', label: 'Python for beginners', p: 'A first look at Python.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'Live AP CSA preparation.' },
      { href: '/blog/learn-python-step-by-step', label: 'Learn Python step by step', p: 'A route through the language.' },
      { href: '/vs-code-setup-for-students', label: 'VS Code setup for students', p: 'Set up VS Code for Python and Java, and fix the errors students hit.' },
      { href: '/github-classroom-help-for-students', label: 'GitHub Classroom help for students', p: 'GitHub Classroom retired on August 28, 2026: what students need to know.' },
      { href: '/google-colab-help-for-students', label: 'Google Colab help for students', p: 'Google Colab not working? Runtimes, files, Drive and limits, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which IDE you installed and what will not run. The teacher sorts out the setup with you first, then moves on to the Java or Python you are learning.',
    readFirst: 'Want to see a lesson in detail first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers it, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'Lessons are live video classes taught by our teachers in India, so there is no office in your area. US families usually get the fastest reply on WhatsApp.',
    formNote: 'Free first lesson; no card required.'
  },

  footer: {
    cols: [
      { h4: 'Java and Python', links: [
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/blog/python-for-beginners', label: 'Python for beginners' },
        { href: '/blog/learn-python-step-by-step', label: 'Learn Python step by step' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' }
      ] }
    ],
    bottomRight: 'First ask which interpreter is running your code'
  },

  personalityCss: `
.ag-root.ag-ipf .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-ipf .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ipf .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ipf .ag-table caption { text-align: left; font-weight: 400; }
.ag-root.ag-ipf .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-ipf .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'JetBrains documents read raw on 17 October 2026: IntelliJ IDEA unified in 2025.3 with a free core and a 30-day Ultimate trial; PyCharm unified in 2025.1 with free, open-source core features including Jupyter and a 30-day Pro trial; shared system requirements; JetBrains Runtime bundled (JBR 21) but a standalone JDK needed for Java; Download JDK; interpreter configuration and per-interpreter packages; Invalidate Caches and Local History retention. Toolbox Subscription Agreement for Students and Teachers v4.2 (effective May 01, 2024): at least 13, high school included, proof of status, non-commercial educational use, discontinue when no longer a student, renewal for another year. Sales help center: eligibility, three ways to apply, swot repository, reminder 2 weeks before expiry, multiple machines, no part-time work use.',
    localProject: 'which_python.py run with the system Python 3.13.6 (requests 2.32.5 present) and in a fresh virtual environment (ModuleNotFoundError: No module named \'requests\'), and WhichJava.java printing 22.0.1 and Oracle Corporation, all on 17 October 2026 from the command line; plus the edition table, the eligibility table, the seven-step application routine and the five-step fix order. Lesson family: environments.',
    requiredMentions: ['Starting with IntelliJ IDEA 2025.3', 'Starting with PyCharm 2025.1', 'The core functionality of IntelliJ IDEA remains free', 'core features remain free and open-source', 'who is at least 13 years old', 'Version 4.2, effective as of May 01, 2024', 'Non-commercial, educational purposes only', 'swot repository', '2 weeks before the subscription expires', '8 GB of total RAM, with 3 GB available for the IDE', 'JetBrains Runtime', 'No module named', 'retention period of 5 working days'],
    sources: [
      { claim: 'IntelliJ IDEA unified product, free core, 30-day trial, requirements, bundled runtime and JDK need.', url: 'https://www.jetbrains.com/help/idea/installation-guide.html' },
      { claim: 'PyCharm unified product, free open-source core, Jupyter, 30-day Pro trial.', url: 'https://www.jetbrains.com/help/pycharm/unified-pycharm.html' },
      { claim: 'Educational license agreement: age 13, student definition, non-commercial use, renewal.', url: 'https://www.jetbrains.com/legal/docs/toolbox/license_educational/' },
      { claim: 'Eligibility in plain words.', url: 'https://sales.jetbrains.com/hc/en-gb/articles/11557849416594-Who-is-eligible-for-free-individual-educational-licenses' },
      { claim: 'Three ways to apply.', url: 'https://sales.jetbrains.com/hc/en-gb/articles/11558649766674-How-do-I-apply-for-a-free-educational-license' },
      { claim: 'Renewal reminder 2 weeks before expiry.', url: 'https://sales.jetbrains.com/hc/en-gb/articles/11564534574994-How-can-I-renew-my-free-educational-license-for-another-year' },
      { claim: 'Interpreters and packages in PyCharm.', url: 'https://www.jetbrains.com/help/pycharm/configuring-python-interpreter.html' },
      { claim: 'Invalidate caches and Local History retention.', url: 'https://www.jetbrains.com/help/idea/invalidate-caches.html' }
    ],
    rejectedClaims: [
      'Contents of the JetBrains student pack beyond its meta description: the page renders by script and its text was not readable raw, so only the description is quoted.',
      'Any recommendation of JetBrains AI features to students: their terms were not reviewed for under-18 users, so the page recommends none.',
      'JetBrains prices and the graduation discount: not printed (no typed prices on US pages).',
      'Whether the free core may be used by children under 13: JetBrains\' general terms were not read, so the page tells parents to read them and does not claim either way.',
      'That our Python and Java checks ran inside PyCharm or IntelliJ IDEA: they ran from the command line, and the page says so.',
      'The example school address given in JetBrains\' help article: not printed (no institution named).',
      'Any affiliation with JetBrains: none, and the page says so.'
    ]
  }
};
