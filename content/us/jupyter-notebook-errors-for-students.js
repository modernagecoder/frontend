'use strict';
// Jupyter Notebook errors for students (ag- Phase T school-tools door; US cluster row 144).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4): "jupyter notebook error / kernel / permission denied / file not found";
// autocomplete_tools.tsv: "jupyter notebook error starting kernel", "jupyter notebook error file not found",
// "jupyter notebook not working in anaconda environment", "jupyter notebook cell not running".
// Sources, fetched raw with curl on 17 October 2026; raw copies in
// keyword-research-2026-09/us/src/jupyter-notebook-errors-for-students/:
//  - jupyter-notebook.readthedocs.io/en/latest/troubleshooting.html (Notebook 7.7.0a2 docs, "What to do when things go
//    wrong"): "try opening a terminal or command prompt and running the command jupyter notebook"; "you may need to
//    configure your PATH environment variable"; "check with pip or conda that the notebook package is installed";
//    "Try running jupyter-notebook (with a hyphen)"; "try changing between localhost and 127.0.0.1"; "jupyter
//    kernelspec list"; the ipykernel/resources default kernel; "the Notebook server running in one environment, while
//    the kernel and/or its resources, derive from another environment"; kernel.json "argv stanza"; the pywin32 tracebacks
//    "ImportError: DLL load failed: The specified module could not be found." and "pip install --upgrade pywin32";
//    "This Worked An Hour Ago" with "AttributeError: module 'random' has no attribute 'sample'" and "You'll need to
//    rename your file."
//  - jupyter-notebook.readthedocs.io/en/latest/notebook.html: "internally JSON files and are saved with the .ipynb
//    extension"; "This kernel remains active if the web browser window is closed"; Shift-Enter, Esc command mode, Enter
//    edit mode; "Kernel, Interrupt menu option, or the i,i keyboard shortcut"; "Kernel, Restart menu option or 0,0".
//  - docs.jupyter.org/en/latest/running.html: "jupyter notebook"; "by default, http://localhost:8888"; "Use Control-C to
//    stop this server and shut down all kernels (twice to skip confirmation)."; the dashboard lists the directory where
//    the server was started; "By default, the notebook server starts on port 8888."; --port 9999; --no-browser.
//  - docs.jupyter.org/en/latest/install/notebook-classic.html: "pip3 install jupyter"; "Python is a requirement for
//    installing the Jupyter Notebook".
//  - docs.jupyter.org/en/latest/what_is_jupyter.html: each REPL "is called a kernel, and it holds the data and objects
//    you create with your notebook code".
//  - ipython.readthedocs.io (magics, kernel_install): "%pip install [pkgs]", "Run the pip package manager within the
//    current kernel."; "python -m ipykernel install --user --name myenv --display-name "Python (myenv)"".
// Our own runs (labelled on the page), plain Python 3.13.6 with pandas 3.0.0 on Windows 11, 17 October 2026 (not a
// notebook; saved as our-run-python-3.13.6.txt): NameError: name 'average' is not defined; FileNotFoundError: [Errno 2]
// No such file or directory: 'grades.csv'; ModuleNotFoundError: No module named 'seaborn'.
// Our own material: the error map table, the restart-and-run-all test, the nine-step routine, the code cells, the
// working-directory check and the term plan.
// Lesson family: state (what a program remembers, and in what order it learned it).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const ORDER_BUG = `# Cell A, run first by mistake (ours)
print(average)

# Cell B, written above but not run yet
average = 91.5

# Our run of the same two lines as a script:
# NameError: name 'average' is not defined`;

const ORDER_FIX = `# The test that catches it (ours):
# Kernel, Restart (or press 0, 0 in command mode),
# then run every cell from the top.

average = 91.5      # cell 1: define first
print(average)      # cell 2: use after

# If a notebook only works when cells are run in a
# special order, it does not work yet.`;

const PIP = `# In a notebook cell (IPython magic, documented):
%pip install seaborn

# This installs into the environment of the kernel
# that runs this notebook, which is the one that
# matters. Then restart the kernel and import:
import seaborn

# Before, our run printed:
# ModuleNotFoundError: No module named 'seaborn'`;

const CWD = `# Where is the notebook looking for files? (ours)
import os
print(os.getcwd())          # the working folder
print(os.listdir())         # what is in it

import pandas as pd
df = pd.read_csv("grades.csv")
# Our run, when grades.csv was elsewhere:
# FileNotFoundError: [Errno 2] No such file or
#   directory: 'grades.csv'
# Fix: move the file next to the notebook,
# or give the path from the folder printed above.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'JUPYTER ERRORS', blurb: 'Jupyter Notebook errors students hit: will not start, kernel will not start, ModuleNotFoundError, file not found, and cells run out of order.' },
  slug: 'jupyter-notebook-errors-for-students',
  code: 'jne',
  accent: '#18569E',
  accentRationale: 'Jupyter Notebook errors, US Phase T: the allocated muted blue #18569E from alloc.tsv row 144, distinct from the other Phase T accents',
  pageType: 'market',
  market: US,
  routeLabel: 'Jupyter Notebook errors for students',
  title: 'Jupyter Notebook Errors: A Fix Guide for Students',
  description: 'Jupyter Notebook errors explained for students: Jupyter will not start, the kernel fails, ModuleNotFoundError, FileNotFoundError, and cells run out of order.',
  ogDescription: 'Kernel will not start, No module named, file not found, NameError after a restart: what each Jupyter error means and the fix, from the Jupyter docs and our own runs.',
  twitterDescription: 'Jupyter Notebook errors students hit, what they mean, and how to fix them.',
  pageName: 'Jupyter Notebook Errors for Students',
  webPageDescription: 'A troubleshooting guide for US high school and college students using Jupyter Notebook, built from the Jupyter and IPython documentation and our own runs.',
  courseDescription: 'Live online Python and data science classes for US teens and college students, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Jupyter Notebook errors',
  navLinks: [
    { href: '#map', label: 'Error map' },
    { href: '#start', label: 'Will not start' },
    { href: '#kernel', label: 'Kernel' },
    { href: '#modules', label: 'No module named' },
    { href: '#order', label: 'Cell order' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 9 to college &middot; Jupyter Notebook',
  h1: 'Jupyter Notebook errors, explained for students',
  lede: 'If your high school data science unit or college statistics lab runs in Jupyter, you have probably seen it fail in ways a plain Python file never does. The server will not start, the kernel dies, a package you just installed cannot be found, or a notebook that worked last night throws a NameError today. Each of those has a known cause. This guide pairs every symptom with what the Jupyter and IPython documentation says about it, plus the exact message from our own runs where we reproduced one.',
  secondaryCta: { href: '#map', label: 'Find your error' },
  wa: 'Hello Modern Age Coders, my teenager in the US is stuck with Jupyter Notebook errors in a data class. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python and data science for teens and adults',
  spec: [
    ['For', 'Grade 9 to college'],
    ['Tool', 'Jupyter Notebook, free'],
    ['File type', '.ipynb, a JSON file'],
    ['Default address', 'localhost:8888'],
    ['Most common error', 'No module named'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Most Jupyter Notebook errors come from one of four places: Jupyter itself is not on your PATH, the kernel points at a Python that no longer exists, a package was installed into a different environment from the kernel, or cells were run out of order. Use %pip install inside the notebook, check jupyter kernelspec list, and test with Restart and run all. Modern Age Coders teaches Python and data science live to teens and adults, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that use notebooks properly',
    lede: 'Each one works in notebooks, taught live by a regular teacher who can see your screen.',
    items: [
      { course: 'data-science-course-for-teens-python-data', code: 'JNE / 01', title: 'Data science for teens', note: 'Ages 14 to 18, some Python first. Notebooks, pandas, charts and first models.' },
      { course: 'ai-ml-masterclass-teens', code: 'JNE / 02', title: 'AI and machine learning for teens', note: 'Ages 13 to 18. Python to working models.' },
      { course: 'data-science-complete-masterclass-college', code: 'JNE / 03', title: 'Data science for college and adults', note: 'Ages 18 and up. A full data science course, live.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'Error map',
      h2: 'Find your Jupyter error: symptom, cause, first fix',
      lede: 'Start with the row that matches what you see. Each one is explained below with its source.',
      body: [
        { kind: 'table', caption: 'Jupyter Notebook errors and first fixes (our table, built from the Jupyter and IPython documentation and our runs)', head: ['What you see', 'Usual cause', 'First thing to try'], rows: [
          ['"jupyter" is not recognized, or command not found', 'Jupyter is not installed, or not on PATH', 'Install it, or reinstall Anaconda with default settings'],
          ['The page will not load in the browser', 'Browser extension, security software, or the address', 'Try another browser; swap localhost and 127.0.0.1'],
          ['A cell shows a star and never runs', 'The kernel did not start', 'Run jupyter kernelspec list and check the kernel path'],
          ['ModuleNotFoundError: No module named ...', 'Package installed in a different environment from the kernel', 'Run %pip install in a notebook cell, then restart the kernel'],
          ['FileNotFoundError: [Errno 2] No such file or directory', 'The working folder is not where the file is', 'Print os.getcwd() and fix the path'],
          ['NameError: name ... is not defined', 'Cells run out of order, or the kernel restarted', 'Restart, then run all cells from the top'],
          ['It worked an hour ago, now nothing imports', 'A new file in your folder shares a module name', 'Rename your file, as the Jupyter docs advise'],
          ['ImportError: DLL load failed (Windows)', 'pywin32 not installed correctly', 'pip install --upgrade pywin32, as the docs show']
        ] },
        { kind: 'source', html: 'Built from Jupyter&rsquo;s <a class="ag-inline-link" href="https://jupyter-notebook.readthedocs.io/en/latest/troubleshooting.html" rel="noopener" target="_blank">What to do when things go wrong</a> page, <a class="ag-inline-link" href="https://docs.jupyter.org/en/latest/running.html" rel="noopener" target="_blank">Running the Notebook</a> and the IPython documentation, all read 17 October 2026. We are not connected with Project Jupyter.' }
      ]
    },
    {
      id: 'start', tint: 'deep', eyebrow: 'It will not start',
      h2: 'When Jupyter will not start, or will not load in the browser',
      lede: 'Jupyter is two things: a server that runs on your computer and a page in your browser that talks to it. A failure at either end looks like "Jupyter is broken", so test them one at a time.',
      body: [
        { kind: 'ol', items: [
          '<b>Start it from a terminal.</b> The Jupyter docs suggest that if a menu shortcut or the Anaconda launcher fails, you should "try opening a terminal or command prompt and running the command jupyter notebook."',
          '<b>If the command is not found,</b> Jupyter is missing or your PATH is not set. The docs say you may need to configure your PATH, or simply reinstall Anaconda with the default settings so it sets PATH for you.',
          '<b>If it says it cannot find notebook,</b> "check with pip or conda that the notebook package is installed." With pip, the classic install command in the docs is pip3 install jupyter.',
          '<b>Try the hyphen.</b> The docs note that jupyter-notebook, with a hyphen, is the real launcher, and jupyter notebook wraps it.',
          '<b>Read the terminal output.</b> A working server prints its address, by default http://localhost:8888, and the line "Use Control-C to stop this server and shut down all kernels (twice to skip confirmation)."',
          '<b>If the browser page fails,</b> try another browser, disable extensions, and, as the docs suggest, "try changing between localhost and 127.0.0.1."',
          '<b>If port 8888 is busy,</b> Jupyter picks the next free port on its own, so read the address it prints; you can also choose one with jupyter notebook --port 9999.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the server starts matters',
          left: [
            'The dashboard lists the notebooks, files and folders in the directory where the server was started. Start Jupyter in a folder that does not contain your class work and the class notebooks simply will not appear in the list.',
            'The Jupyter docs recommend starting the server in the highest folder that contains your notebooks, which is often your home directory.'
          ],
          rightH3: 'Closing the tab is not closing Jupyter',
          right: [
            'The notebook documentation says the kernel "remains active if the web browser window is closed", and reopening the notebook reconnects to the same kernel, with its variables still in memory.',
            'That is convenient, and it is also why a notebook can seem to work in one session and fail in a fresh one. To stop everything, press Control-C in the terminal running the server.'
          ] }
      ]
    },
    {
      id: 'kernel', tint: 'tint', eyebrow: 'The kernel',
      h2: 'Kernel errors: what a kernel is, and why it will not start',
      lede: 'The Jupyter documentation describes a kernel as the program that "holds the data and objects you create with your notebook code". When it will not start, cells sit with a star next to them and nothing happens.',
      body: [
        { kind: 'two',
          leftH3: 'Check which kernels Jupyter knows about',
          left: [
            'Files called kernel specs tell Jupyter how to start each kernel. Run jupyter kernelspec list in a terminal to see where they live.',
            'A Python kernel whose path ends in ipykernel/resources is the built-in default, which runs in the same environment as the notebook server. The docs say that if a python3 kernelspec points somewhere else and fails, deleting or renaming that folder exposes the default.'
          ],
          rightH3: 'Check the path inside kernel.json',
          right: [
            'Each kernel spec has a kernel.json file with an argv stanza: the exact command used to launch the kernel. After a Python reinstall, it often points at a Python that is no longer there.',
            'On Windows, the docs add, Python commands live in a Scripts folder rather than bin, and a path missing its .exe extension typically ends in a FileNotFoundError.'
          ] },
        { kind: 'table', mt: true, caption: 'Kernel commands from the IPython and Jupyter documentation, and when a student needs each', head: ['Command', 'What it does', 'When you need it'], rows: [
          ['jupyter kernelspec list', 'Lists every kernel spec and its folder', 'The kernel will not start, or the wrong Python runs'],
          ['python -m ipykernel install --user', 'Registers the current Python as a kernel', 'You made a new environment and it is missing from the menu'],
          ['--name myenv --display-name "Python (myenv)"', 'Gives that kernel its own name in the menu', 'You have several environments for different classes'],
          ['Kernel, Interrupt (or i, i)', 'Stops a cell that is taking too long', 'A loop never ends'],
          ['Kernel, Restart (or 0, 0)', 'Starts the whole computation fresh', 'Anything strange, and before you submit work']
        ] },
        { kind: 'p', mt: true, html: 'The IPython documentation notes that the --name value is used internally and that these commands "will overwrite any existing kernel with the same name", so give each environment a distinct name. On Windows, a broken pywin32 install shows up in a traceback ending with the line ImportError: DLL load failed: The specified module could not be found. The Jupyter docs give pip install --upgrade pywin32 as the first fix to try.' }
      ]
    },
    {
      id: 'modules', tint: 'deep', eyebrow: 'No module named',
      h2: 'ModuleNotFoundError in Jupyter: installed, but not where the kernel looks',
      lede: 'This one causes a lot of confusion: you ran pip install, it said success, and the notebook still cannot import the package. The Jupyter docs name the cause: the Notebook server running in one environment while the kernel comes from another.',
      body: [
        { kind: 'code', label: 'Fixed &middot; install from inside the notebook', lang: 'python', code: PIP, note: 'The IPython documentation describes %pip as a magic that will "Run the pip package manager within the current kernel." That is the point: it installs where the notebook actually runs. %conda does the same for conda environments.' },
        { kind: 'two', mt: true,
          leftH3: 'Why pip in a terminal can miss',
          left: [
            'A terminal\'s pip belongs to whichever Python comes first on PATH. If the notebook kernel uses Anaconda and the terminal uses a python.org install, or the other way round, the package lands in the wrong place.',
            'The Jupyter docs list the signs: import statements within code cells producing ImportError or ModuleNotFound exceptions, or nothing happening when you try to run a cell.'
          ],
          rightH3: 'How to check in ten seconds',
          right: [
            'Run import sys and then print(sys.executable) in a notebook cell. That is the Python the kernel uses. Compare it with the Python your terminal uses before installing anything else.',
            'If you work across several environments, register each one as its own kernel with python -m ipykernel install, then pick the right one from the notebook\'s kernel menu.'
          ] }
      ]
    },
    {
      id: 'order', tint: 'tint', eyebrow: 'Cell order and files',
      h2: 'NameError and FileNotFoundError: the notebook remembers more than you think',
      lede: 'A notebook is a sequence of cells, and each one runs on Shift-Enter in whatever order you press it. The kernel keeps every variable until it restarts. That flexibility causes two classic notebook errors.',
      body: [
        { kind: 'code', label: 'Broken &middot; a cell used before it was defined', lang: 'python', code: ORDER_BUG, note: 'In a notebook this often works for hours, because the variable was set earlier in the session, then fails the moment the kernel restarts or a teacher opens the file fresh.' },
        { kind: 'code', mt: true, label: 'The test &middot; restart, then run all from the top', lang: 'python', code: ORDER_FIX, note: 'We ask students to do this before every submission. A notebook that survives Restart and run all will work on the grader\'s computer too.' },
        { kind: 'code', mt: true, label: 'Fixed &middot; finding where the notebook looks for files', lang: 'python', code: CWD, note: 'Print the working folder instead of guessing it. A data file sitting in Downloads is invisible to a notebook working somewhere else until you move the file or give its full path.' },
        { kind: 'two', mt: true,
          leftH3: 'The file that breaks imports: "This Worked An Hour Ago"',
          left: [
            'The Jupyter docs describe a student-shaped mistake: a file in your notebook folder named after a real module. Their example is a random.py that leads to AttributeError: module \'random\' has no attribute \'sample\' deep inside the kernel\'s own imports.',
            'Their advice is direct: "You&rsquo;ll need to rename your file." Avoid naming files after anything you import: random, math, pandas, csv or test files called the same as a library.'
          ],
          rightH3: 'Notebook files are JSON',
          right: [
            'The notebook documentation says notebooks "are internally JSON files and are saved with the .ipynb extension." Editing one in a plain text editor, or a merge in Git, can break that JSON so the file will not open.',
            'Keep a copy before experimenting, and if a notebook will not open after editing it by hand, the JSON is the first suspect.'
          ] }
      ]
    },
    {
      id: 'routine', tint: 'deep', eyebrow: 'A routine',
      h2: 'Nine steps for any Jupyter problem',
      lede: 'Our routine, in the order our teachers use it with students. It keeps you from reinstalling everything when one line would do.',
      body: [
        { kind: 'ol', items: [
          '<b>Read the last line of the traceback.</b> It names the error type. The lines above show where it happened.',
          '<b>Decide which half failed:</b> the server (terminal shows errors, browser page will not load) or the kernel (page loads, cells will not run).',
          '<b>For the server,</b> start it from a terminal and read what it prints.',
          '<b>For the kernel,</b> run jupyter kernelspec list and check that the path in kernel.json exists.',
          '<b>For imports,</b> print sys.executable in a cell, then install with %pip from inside the notebook.',
          '<b>For files,</b> print os.getcwd() and os.listdir() and compare with where the file really is.',
          '<b>For strange results,</b> restart the kernel and run all cells from the top.',
          '<b>Check your folder</b> for files named after modules, such as random.py, and rename them.',
          '<b>Only then reinstall.</b> The Jupyter docs suggest updating relevant packages first, because a fixed bug may already be waiting.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Command mode and edit mode', p: 'The notebook docs list Esc for command mode and Enter for edit mode. Shortcuts like 0, 0 to restart only work in command mode, which confuses many first-time users.' },
          { h3: 'School laptops', p: 'If your school manages the laptop, you may not be allowed to install anything. Ask the teacher which environment the class expects before changing PATH or installing Anaconda.' },
          { h3: 'Asking for help well', p: 'The Jupyter docs point to the Jupyter Discourse forum and Stack Overflow. Post the full traceback and your exact command; a screenshot of a red box alone rarely gets answered.' }
        ] }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'Beyond the error',
      h2: 'Learning to work in notebooks, not just survive them',
      lede: 'Notebooks reward a few habits that nobody teaches in a syllabus. This is how our teachers build them across a first term of data science.',
      body: [
        { kind: 'table', caption: 'Notebook habits across a first term (our plan for Grade 9 to college, adjusted for each learner)', head: ['Classes', 'What the student builds', 'The habit it teaches'], rows: [
          ['1 to 2', 'A notebook of small experiments', 'Cells, Shift-Enter, markdown notes'],
          ['3 to 4', 'Loading a CSV with pandas', 'Paths and the working folder'],
          ['5 to 6', 'Cleaning and charting data', 'One idea per cell; restart and run all'],
          ['7 to 8', 'A project with extra packages', 'Environments, kernels and %pip'],
          ['9 to 10', 'A short data story', 'Writing for a reader, not just the grader'],
          ['11 to 12', 'Sharing and presenting', 'Clean outputs, reproducible from the top']
        ] },
        { kind: 'p', mt: true, html: 'We teach the concepts so students can complete their own class notebooks; we never fill in graded work. For bugs that are not about Jupyter at all, see <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>, and for a wider view of the subject, our <a class="ag-inline-link" href="/data-science-course">data science course</a> page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student is',
    h2: 'Four stages of working in Jupyter',
    lede: 'From copying cells to running reliable analyses.',
    table: { caption: 'Stages of notebook skill (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Clicker', 'Runs cells top to bottom without knowing what each holds'],
      ['2. Explorer', 'Runs cells in any order and gets surprising results'],
      ['3. Tidy worker', 'Restarts and runs all before trusting a result'],
      ['4. Analyst', 'Builds notebooks that anyone can rerun and follow']
    ] },
    left: { h3: 'For parents', ps: [
      'If your teenager says the notebook "worked yesterday", that is stage 2, and it is normal. The fix is a habit, not a new laptop.',
      'The same habits carry over to any later course that hands out its work as notebooks.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you submit, restart the kernel and run all. If it breaks, you found the bug before your teacher did.',
      'Install packages with %pip from inside the notebook. It goes where the kernel can see it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for data and Python',
    lede: 'Live online classes with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'JNE / TEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Pandas, charts, first models.' },
        { code: 'JNE / TEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The Python under every notebook.' },
        { code: 'JNE / TEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Notebooks that train models.' }
      ] },
      { num: 'II', h3: 'Bridging', sub: 'Ages 13 and up', courses: [
        { code: 'JNE / BRG / 01', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Ideas first, with Orange.' },
        { code: 'JNE / BRG / 02', slug: 'pcep-pcap-python-certification-course', title: 'Python certification prep', blurb: 'PCEP and PCAP, ages 13 and up.' },
        { code: 'JNE / BRG / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Versioning notebooks safely.' }
      ] },
      { num: 'III', h3: 'College and adults', sub: 'Ages 18 and up', courses: [
        { code: 'JNE / PRO / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'Statistics to machine learning.' },
        { code: 'JNE / PRO / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Cleaning and analysis for college.' },
        { code: 'JNE / PRO / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'For college students and adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes around a US school or college week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches for US time zones.' },
      { time: 'Weekends', l: 'Longer sessions for projects.' },
      { time: '1-on-1', l: 'Fitted around classes and labs.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'Week after week.' },
      { h3: 'Your own setup', p: 'We fix it on your machine.' },
      { h3: 'Shared screen', p: 'We see the notebook you see.' },
      { h3: 'Ideas, not answers', p: 'Your graded work stays yours.' },
      { h3: 'Every state', p: 'Online, from home or dorm.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'Projects from our Python and data students',
  projectsLede: 'Built by learners who started with a notebook that would not run. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews parents left on Google, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'Jupyter is free and open source. What you pay for is a teacher: monthly fees shown in US dollars, no contract for the whole semester, and you can stop at the end of any month.',
    free: ['A free first lesson', 'Bring the notebook that fails', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'A batch time you pick', 'Paid each month'],
    one: ['Private lessons', 'Scheduled at your convenience', 'Your own data and projects']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'Jupyter Notebook errors: common questions',
    items: [
      { q: 'Why is Jupyter Notebook not working?', a: 'Find which half failed. If the terminal shows an error or the command is not found, the server or install is the problem. If the page loads but cells will not run, the kernel is. The Jupyter docs suggest running jupyter notebook from a terminal first.' },
      { q: 'How do I fix "No module named" in Jupyter?', a: 'Install the package from inside the notebook with %pip install followed by the package name, then restart the kernel. That installs into the environment the kernel uses, which is often not the one your terminal uses.' },
      { q: 'Why does Jupyter say the kernel cannot start?', a: 'Usually the kernel spec points at a Python that no longer exists. Run jupyter kernelspec list, open kernel.json in the folder it shows, and check that the path in argv exists. Re-registering the kernel with python -m ipykernel install, as the IPython docs describe, is the standard repair.' },
      { q: 'Why do I get FileNotFoundError in Jupyter?', a: 'The notebook is looking in its own folder and the file is somewhere else. Print os.getcwd() to see the folder, then move the file there or use the correct path.' },
      { q: 'Why did my notebook stop working after a restart?', a: 'Cells were run out of order before, so variables existed that a fresh run never creates. Restart the kernel and run all cells from the top, then fix the first cell that fails.' },
      { q: 'How do I stop a cell that runs forever?', a: 'Use the Kernel menu and choose Interrupt, or press i twice in command mode. If that fails, restart the kernel.' },
      { q: 'Is Jupyter Notebook free?', a: 'Yes. The Jupyter documentation says Jupyter software is free and open-source, and it can be installed with pip or with the Anaconda distribution.' },
      { q: 'Will you do my class notebook for me?', a: 'No. We teach the ideas so you can finish your own notebook, and we never complete graded assignments. A teacher will help you find and fix the error yourself.' },
      { q: 'What times are classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do data science classes cost?', a: 'The first lesson is free. Then you pay monthly for live teaching, and this page\'s fees section lists the monthly figure in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students working with Python and data.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages written for US learners.' },
      { href: '/data-science-course', label: 'Data science course', p: 'What a full course covers.' },
      { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA', p: 'For students moving on to models.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for any bug.' },
      { href: '/blog/how-to-read-and-write-files-in-python', label: 'Files in Python', p: 'Paths, reading and writing.' },
      { href: '/python-for-16-year-olds', label: 'Python for 16 year olds', p: 'A starting point in high school.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation errors explained', p: 'Every Python IndentationError message, what it means, and how to fix it.' },
      { href: '/python-turtle-not-working', label: 'Python turtle not working', p: 'Python turtle not working? The real errors, the fixes, and how to write text.' },
      { href: '/scratch-not-working-help', label: 'Scratch not working', p: 'Scratch not working? Saving, sign-in, school network and tablet fixes, from the Scratch Help Center.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which class or project the notebook belongs to and what error it shows. In the first lesson the teacher works through it with you.',
    readFirst: 'If you want to see the approach first, read <a class="ag-inline-link" href="/how-we-teach">how our lessons run</a>, or open <a class="ag-inline-link" href="/courses">the course catalogue</a> for full syllabuses.',
    note: 'Everything happens on live video, and the teachers are based in India, so there is no campus to visit. For US students, WhatsApp is usually the quickest way to reach us.',
    formNote: 'The first lesson is on us, and we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Python and data', links: [
        { href: '/data-science-course', label: 'Data science course' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/blog/how-to-read-and-write-files-in-python', label: 'Files in Python' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML in the USA' },
        { href: '/python-for-15-year-olds', label: 'Python for 15 year olds' },
        { href: '/python-for-17-year-olds', label: 'Python for 17 year olds' }
      ] }
    ],
    bottomRight: 'Restart the kernel, run all, then trust it'
  },

  personalityCss: `
.ag-root.ag-jne .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-jne .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-jne .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-jne .ag-table caption { text-align: left; }
.ag-root.ag-jne .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Jupyter and IPython documentation, read raw 17 October 2026: the Notebook troubleshooting page (start from a terminal, PATH, notebook package, jupyter-notebook launcher, localhost versus 127.0.0.1, jupyter kernelspec list, ipykernel/resources default, server and kernel in different environments, kernel.json argv, Windows Scripts folder, pywin32 DLL load failed, random.py "This Worked An Hour Ago"); notebook basics (.ipynb JSON, kernel stays active when the browser closes, Shift-Enter, Esc, Enter, i,i interrupt, 0,0 restart); running (localhost:8888, Control-C twice, port 8888 then next free, --port 9999); kernel definition; IPython %pip and ipykernel install --user --name.',
    localProject: 'Our own runs of plain Python 3.13.6 with pandas 3.0.0 on Windows 11 (17 October 2026): NameError: name \'average\' is not defined; FileNotFoundError: [Errno 2] No such file or directory: \'grades.csv\'; ModuleNotFoundError: No module named \'seaborn\'. An error-map table, a restart-and-run-all test, a nine-step routine, code cells for %pip and the working folder, and a twelve-class notebook-habits plan. Lesson family: program state.',
    requiredMentions: ['jupyter kernelspec list', 'ipykernel/resources', 'try changing between localhost and 127.0.0.1', 'Run the pip package manager within the current kernel.', 'python -m ipykernel install --user', 'remains active if the web browser window is closed', 'are internally JSON files and are saved with the .ipynb extension.', 'pip install --upgrade pywin32', 'FileNotFoundError: [Errno 2] No such file or directory','Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).', 'This Worked An Hour Ago'],
    sources: [
      { claim: 'Start from a terminal, PATH, kernelspec list, environments mismatch, kernel.json argv, pywin32, the random.py example.', url: 'https://jupyter-notebook.readthedocs.io/en/latest/troubleshooting.html' },
      { claim: 'Notebooks are JSON .ipynb files; kernel stays active when the browser closes; shortcuts for run, modes, interrupt and restart.', url: 'https://jupyter-notebook.readthedocs.io/en/latest/notebook.html' },
      { claim: 'jupyter notebook, default localhost:8888, Control-C, port fallback, --port, --no-browser, dashboard directory.', url: 'https://docs.jupyter.org/en/latest/running.html' },
      { claim: 'Installing with pip3 install jupyter or Anaconda.', url: 'https://docs.jupyter.org/en/latest/install/notebook-classic.html' },
      { claim: 'What a kernel is.', url: 'https://docs.jupyter.org/en/latest/what_is_jupyter.html' },
      { claim: '%pip and %conda magics.', url: 'https://ipython.readthedocs.io/en/stable/interactive/magics.html' },
      { claim: 'Registering kernels with python -m ipykernel install --user --name.', url: 'https://ipython.readthedocs.io/en/stable/install/kernel_install.html' }
    ],
    rejectedClaims: [
      'Fixes for "externally managed environment", "error 403" and "error 500": searched for, but no Jupyter documentation page read covers them, so they are not printed.',
      'The Anaconda version named on the classic install page ("currently Python 3.9"): stale, so not repeated.',
      'Notebook-formatted tracebacks: our reproductions ran as plain Python scripts, so the page labels them as plain Python and does not show notebook output formatting.',
      'Which notebook tools a given US school or college uses: not published in any source read; the page only says many classes use Jupyter.',
      'Completed graded notebooks: none given; the page says we never complete graded work.',
      'Any affiliation with Project Jupyter: none, and the page says so.'
    ]
  }
};
