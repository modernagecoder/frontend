'use strict';
// Google Colab help for students (ag- Phase T school-tools door; US cluster row 143).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4): "google colab not working / errors / upload dataset / gpu / vs jupyter";
// autocomplete_tools.tsv: "google colab not running code", "google colab not showing output", "google colab how to
// upload dataset", "google colab how to read file from drive", "google colab gemini not working", "google colab for
// students free", "is google colab safe", "google colab vs jupyter notebook".
// Sources, fetched raw with curl on 17 October 2026; raw copies in
// keyword-research-2026-09/us/src/google-colab-help-for-students/:
//  - research.google.com/colaboratory/faq.html: "Colab is a hosted Jupyter Notebook service that requires no setup to
//    use"; "Yes. Colab is free of charge to use."; "Colab resources are not guaranteed and not unlimited"; "Code is
//    executed in a virtual machine private to your account. Virtual machines are deleted when idle for a while, and
//    have a maximum lifetime enforced by the Colab service."; "notebooks can run for at most 12 hours"; "Runtimes will
//    time out if you are idle."; sharing shares text, code, output and comments but the virtual machine "will not be
//    shared"; "Omit code cell output when saving this notebook"; "Upload notebook"; Runtime > Disconnect and delete
//    runtime; drive.mount "timed out" and "approximately ten thousand items in the root directory can cause mounting to
//    fail"; "OSError: [Errno 5] Input/output error"; "Wait a day for quota limits to reset."; "Mounting Google Drive on
//    Colab allows any code in your notebook to access any files in your Google Drive."; GPU not utilized: "Choose Runtime
//    > Change Runtime Type and set Hardware Accelerator to None"; "Access to Colab's AI features requires your Google
//    account's age to be 18+."; Workspace for Education "parental consent" for students under 18; third-party cookies and
//    googleusercontent.com; "most thoroughly tested with the latest versions of Chrome, Firefox and Safari"; "Python 2 is
//    no longer supported in Colab."; Help menu "Send feedback"; Colab Pro for Education "no longer available for new
//    signups"; the list of disallowed activities.
//  - research.google.com/colaboratory/local-runtimes.html: "Colab lets you connect to a local runtime."; "With a local
//    connection, the code you execute can read, write, and delete files on your computer."
//  - github.com/googlecolab/colabtools (main) google/colab/drive.py and files.py, Google's own Colab package source:
//    "Drive already mounted at {mountpoint}; to attempt to forcibly remount, call drive.mount("{mountpoint}",
//    force_remount=True)."; "Mountpoint must not already contain files"; "Mountpoint must not contain a space.";
//    "Mounted at {mountpoint}"; files.upload() returns "A map of the form {<filename>: <file contents>}"; a repeated
//    upload name is saved as '{} ({}){}', for example "grades (1).csv".
// Not readable: colab.research.google.com/notebooks/*.ipynb (curl failed to connect, not retried around), so nothing is
// quoted from Colab's own example notebooks. support.google.com/colab only links back to the FAQ.
// Our own material, labelled on the page: the symptom table, the three code cells (written to the documented
// google.colab functions; Colab cannot run on our machine, so the reader runs them), the ten-step routine, the
// "grades (1).csv" walk-through and the term plan.
// Lesson family: where code runs (a remote machine, its lifetime, and the files it can see).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MOUNT = `# Cell 1: connect Google Drive  (ours, documented API)
from google.colab import drive
drive.mount('/content/drive')
# Colab asks you to allow access, then prints:
#   Mounted at /content/drive

# Running the cell again prints:
#   Drive already mounted at /content/drive; to attempt
#   to forcibly remount, call
#   drive.mount("/content/drive", force_remount=True).

import pandas as pd
# The source checks for a 'My Drive' folder inside
# the mount point, so your files sit under it:
df = pd.read_csv('/content/drive/My Drive/class/grades.csv')`;

const UPLOAD = `# Cell 2: upload from your laptop  (ours, documented API)
from google.colab import files
import pandas as pd

uploaded = files.upload()      # pick the file in the dialog
name = list(uploaded)[0]       # the name Colab really saved
print(name)                    # e.g. grades (1).csv
df = pd.read_csv(name)

# Uploading grades.csv twice saves the second copy as
# "grades (1).csv", so read_csv("grades.csv") would quietly
# read the OLD file. Using the returned name avoids that.`;

const GPU = `# Cell 3: is the GPU actually being used?  (ours)
import sys
print(sys.version)               # Python version on the VM
try:
    import torch
    print(torch.cuda.is_available())
except ImportError:
    print("torch is not installed in this runtime")

# Colab's FAQ: running in a GPU runtime "does not
# automatically mean" the GPU is used. If False, or if
# you are not training a model, switch the runtime back.`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GOOGLE COLAB', blurb: 'Google Colab help for students: disconnected runtimes, lost files, Drive that will not mount, GPU warnings, and why the AI features need an 18+ account.' },
  slug: 'google-colab-help-for-students',
  code: 'gc',
  accent: '#8F2F2F',
  accentRationale: 'Google Colab help, US Phase T: the allocated muted brick #8F2F2F from alloc.tsv row 143, distinct from the other Phase T accents',
  pageType: 'market',
  market: US,
  routeLabel: 'Google Colab help for students',
  title: 'Google Colab Help for Students: Errors, Files and Limits',
  description: 'Google Colab help for students: why the runtime disconnects, where uploaded files go, why Drive will not mount, GPU warnings, and the age rule for AI features.',
  ogDescription: 'Runtime disconnected, files gone, drive.mount timed out, Input/output error, no Gemini button: what Colab is doing and how to fix it, from Google\'s own Colab FAQ and source.',
  twitterDescription: 'Google Colab not working? Runtimes, files, Drive and limits, explained.',
  pageName: 'Google Colab Help for Students',
  webPageDescription: 'A help guide for US students using Google Colab for Python and data science classes, built from the Colab FAQ and Google\'s Colab source code.',
  courseDescription: 'Live online Python and data science classes for US teens and college students, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Google Colab help',
  navLinks: [
    { href: '#symptoms', label: 'Symptoms' },
    { href: '#runtime', label: 'Runtimes' },
    { href: '#files', label: 'Files and Drive' },
    { href: '#accounts', label: 'School accounts' },
    { href: '#routine', label: 'Routine' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 9 to college &middot; Google Colab',
  h1: 'Google Colab help for students',
  lede: 'Google Colab runs Python in a browser tab, with nothing to install, so it suits students on school Chromebooks and anyone without admin rights on a laptop. That convenience has a cost that catches students out: your code runs on a Google machine that can disappear. Files vanish, variables reset, Drive refuses to connect, a GPU warning pops up. This page explains each one using Google\'s own Colab FAQ and the source code of Google\'s google.colab package, and says plainly what to do.',
  secondaryCta: { href: '#symptoms', label: 'Match your problem' },
  wa: 'Hello Modern Age Coders, my teenager in the US uses Google Colab for a Python class and keeps getting stuck. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python and data science online',
  spec: [
    ['For', 'Grade 9 to college'],
    ['Tool', 'Google Colab, free'],
    ['Runs in', 'A browser; code runs on Google machines'],
    ['Free runtime limit', 'At most 12 hours'],
    ['AI features', 'Google account 18+ only'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Most Google Colab problems come from one fact: your code runs on a temporary virtual machine, not your laptop. When it is idle or reaches its limit, Colab deletes it, and uploaded files and variables go with it. Keep data in Google Drive, re-run cells from the top after a reconnect, and switch off the GPU when you do not need it. Our teen data science course at Modern Age Coders runs in Google Colab and is taught live to US high schoolers, as a group batch or private one-to-one classes.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses where Colab is the classroom',
    lede: 'Each uses notebooks from the first week, so students learn how the machine behind them works.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'COL / 01', title: 'Machine learning in Colab, ages 13 to 18', note: 'Heavy training runs on free cloud notebooks with GPU time.' },
      { course: 'data-science-course-for-teens-python-data', code: 'COL / 02', title: 'Teen data science in notebooks', note: 'High schoolers who know a little Python: Drive data, pandas, charts.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'COL / 03', title: 'AI and ML for college students', note: 'Ages 18 and up. Training runs on free cloud notebooks.' }
    ]
  },

  sections: [
    {
      id: 'symptoms', tint: 'tint', eyebrow: 'Match your problem',
      h2: 'What went wrong in Colab, and what it usually means',
      lede: 'Find your row. The explanations below quote the Colab FAQ, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Common Colab problems for students (our table, built from the Colab FAQ and google.colab source)', head: ['What you see', 'What is going on', 'What to do'], rows: [
          ['Runtime disconnected; variables gone', 'The virtual machine was idle too long or hit its lifetime', 'Reconnect, and use Runtime, Run all'],
          ['Uploaded file missing next day', 'It lived on the deleted machine, not in Drive', 'Save data files in Google Drive and mount it'],
          ['drive.mount() says timed out', 'Too many items in the top level of My Drive', 'Move files into subfolders; empty the Trash'],
          ['OSError: [Errno 5] Input/output error', 'A Drive folder with very many items, or a Drive quota', 'Use subfolders, copy one archive, or wait a day'],
          ['A message that the GPU is not being used', 'You chose a GPU runtime but the code does not use it', 'Set Hardware Accelerator to None'],
          ['No Gemini icon or AI suggestions', 'The account is under 18, or the locale is unsupported', 'Nothing to fix for students under 18; learn without it'],
          ['A prompt to enable third-party cookies', 'Colab shows rich output through other origins', 'Allow googleusercontent.com in browser settings'],
          ['Your file reads the wrong data', 'A second upload was saved as "grades (1).csv"', 'Read the name files.upload() returns']
        ] },
        { kind: 'source', html: 'Checked on 17 October 2026 against the <a class="ag-inline-link" href="https://research.google.com/colaboratory/faq.html" rel="noopener" target="_blank">Colaboratory FAQ</a> and Google&rsquo;s <a class="ag-inline-link" href="https://github.com/googlecolab/colabtools" rel="noopener" target="_blank">googlecolab/colabtools</a> code on GitHub. Modern Age Coders has no connection with Google.' }
      ]
    },
    {
      id: 'runtime', tint: 'deep', eyebrow: 'Runtimes',
      h2: 'Why the runtime disconnects, and why your variables vanish',
      lede: 'The Colab FAQ describes Colab as "a hosted Jupyter Notebook service that requires no setup to use". The word hosted is the key: your notebook is saved in Drive, but the code runs somewhere else.',
      body: [
        { kind: 'two',
          leftH3: 'What the FAQ says about the machine',
          left: [
            '"Code is executed in a virtual machine private to your account. Virtual machines are deleted when idle for a while, and have a maximum lifetime enforced by the Colab service."',
            'For the free version, the FAQ says notebooks "can run for at most 12 hours, depending on availability and your usage patterns", and adds that "Runtimes will time out if you are idle."'
          ],
          rightH3: 'What that means for a homework session',
          right: [
            'Walk away for dinner and the machine may be gone when you return. The notebook text and code are safe in Drive; the variables, installed packages and uploaded files are not.',
            'So after any reconnect, run the notebook from the top: Runtime, Run all. If it fails part way, you have found a cell that depended on something that no longer exists.'
          ] },
        { kind: 'table', mt: true, caption: 'Colab limits and rules students meet, from the Colab FAQ (read 17 October 2026)', head: ['Topic', 'What the FAQ says'], rows: [
          ['Cost', '"Yes. Colab is free of charge to use."'],
          ['Guarantees', '"Colab resources are not guaranteed and not unlimited", and Colab does not publish its usage limits'],
          ['Who comes first', 'Colab "prioritizes users who are actively programming in a notebook"'],
          ['Resetting a broken machine', 'Runtime &gt; Disconnect and delete runtime returns the machines to their original state, and how often you can do it is limited'],
          ['GPU not used', '"Choose Runtime &gt; Change Runtime Type and set Hardware Accelerator to None"'],
          ['Languages', 'Colab focuses on Python, and "Python 2 is no longer supported in Colab."'],
          ['Browsers', 'Colab is "most thoroughly tested with the latest versions of Chrome, Firefox and Safari"']
        ] },
        { kind: 'code', mt: true, label: 'A check &middot; is the GPU doing anything?', lang: 'python', code: GPU, note: 'Written by us for this page; run it in your own Colab notebook. Students in a first Python class almost never need a GPU, and the FAQ warns that leaving one on counts towards GPU usage limits.' }
      ]
    },
    {
      id: 'files', tint: 'tint', eyebrow: 'Files and Drive',
      h2: 'Uploading data and mounting Google Drive without losing work',
      lede: 'There are two ways to get a data file into Colab: upload it to the machine, or connect Google Drive. Uploads are quick but disappear with the machine; Drive persists. Both behave in ways the documentation spells out.',
      body: [
        { kind: 'code', label: 'Connecting Drive &middot; the documented way', lang: 'python', code: MOUNT, note: 'The messages are quoted from Google&rsquo;s google.colab source code, which also refuses a mount point that already holds files ("Mountpoint must not already contain files") or contains a space.' },
        { kind: 'code', mt: true, label: 'Uploading a file &middot; and reading the right one', lang: 'python', code: UPLOAD, note: 'In the source, files.upload() returns "A map of the form {&lt;filename&gt;: &lt;file contents&gt;}", and a name that already exists is saved with a number in brackets before the extension. That is where "grades (1).csv" comes from.' },
        { kind: 'two', mt: true,
          leftH3: 'When drive.mount() times out or fails',
          left: [
            'The FAQ explains that Drive operations "can time out when the number of files or subfolders in a folder grows too large", and that storing "more than approximately ten thousand items in the root directory can cause mounting to fail".',
            'Its fix: move files out of the top level of My Drive into subfolders, keep each folder under ten thousand items, and empty the Trash, because deleted files may still count.'
          ],
          rightH3: 'OSError: [Errno 5] and quotas',
          right: [
            'The same error can come from Drive quotas. The FAQ names accessing a popular shared file or too many files too quickly as typical causes, and suggests copying data as one .zip archive and unpacking it on the machine.',
            'Its last suggestion is simply: "Wait a day for quota limits to reset." If a class dataset is shared with every student, make your own copy in Drive first.'
          ] },
        { kind: 'p', mt: true, html: 'A safety note the FAQ makes in so many words: "Mounting Google Drive on Colab allows any code in your notebook to access any files in your Google Drive." Only mount Drive in notebooks you trust, and be careful with notebooks a stranger shared.' }
      ]
    },
    {
      id: 'accounts', tint: 'deep', eyebrow: 'School accounts and AI',
      h2: 'School Google accounts, sharing, and the AI features',
      lede: 'If you open Colab with a school Google account, the school\'s settings change what you can see and use. The Colab FAQ covers that directly.',
      body: [
        { kind: 'table', caption: 'Accounts, sharing and AI in Colab, from the Colab FAQ (read 17 October 2026)', head: ['Question', 'What the FAQ says', 'What it means for a student'], rows: [
          ['Can I use Colab with my school account?', 'Workspace access is "controlled by the Workspace on/off control" set by the school\'s administrator', 'If Colab will not open on a school account, the school decides'],
          ['Do under-18 students need permission?', 'Workspace for Education organizations "are required to obtain parental consent" for students under 18 using Additional Services', 'Your school may need a parent form before Colab is switched on'],
          ['Why is there no Gemini button?', '"Access to Colab\'s AI features requires your Google account\'s age to be 18+."', 'Under 18, the AI features are not for you; the notebook works without them'],
          ['What does sharing share?', 'Text, code, output and comments, but the virtual machine and its files "will not be shared"', 'A classmate must re-run your setup cells and upload the data again'],
          ['Can I hide my outputs?', 'Yes: Edit, Notebook settings, "Omit code cell output when saving this notebook"', 'Useful before sharing a notebook that printed private data'],
          ['Can I bring in a Jupyter file?', 'Yes, with "Upload notebook" from the File menu', 'Files from a teacher\'s Jupyter class open in Colab too']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our rule on AI for students under 18',
          left: [
            'Colab\'s own FAQ sets the AI features at 18 and over, so we do not show or recommend them to students under 18, and we do not suggest any way around that rule.',
            'Students learn to read a traceback and fix it themselves, which is the skill the AI would otherwise skip. Adult learners in our college courses can use the features where their account allows.'
          ],
          rightH3: 'Running Colab on your own computer',
          right: [
            'The Colab documentation says "Colab lets you connect to a local runtime", running the code on your own computer instead of Google\'s.',
            'It also warns that with a local connection "the code you execute can read, write, and delete files on your computer." For a school notebook from a trusted teacher that may be fine; for anything else, stay on the hosted runtime.'
          ] }
      ]
    },
    {
      id: 'routine', tint: 'tint', eyebrow: 'A routine',
      h2: 'Ten steps when a Colab notebook will not run',
      lede: 'Our routine, in order. It works whether the problem is the machine, the files or your code.',
      body: [
        { kind: 'ol', items: [
          '<b>Check the connection.</b> Look at the top right of the notebook. If it says reconnect, the machine is gone.',
          '<b>Reconnect and run all.</b> Use Runtime, Run all, and repair whichever cell stops the run first.',
          '<b>Check the files.</b> Run import os and print(os.listdir()) to see what is really on the machine.',
          '<b>Mount Drive once,</b> at the top of the notebook, and read data from paths under /content/drive/My Drive.',
          '<b>Use the name Colab saved.</b> After files.upload(), read the name it returns, not the name you remember.',
          '<b>Install packages in a cell</b> near the top, so a fresh machine gets them every time.',
          '<b>Turn off the GPU</b> unless you are training a model: Runtime, Change runtime type, None.',
          '<b>Try another browser</b> or allow googleusercontent.com if Colab asks about third-party cookies.',
          '<b>As a last resort, reset.</b> Runtime, Disconnect and delete runtime gives you a clean machine.',
          '<b>Report real bugs</b> with Help, Send feedback, as the FAQ directs.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Colab or Jupyter?', p: 'The FAQ says Jupyter is the open source project Colab is based on. Colab needs no install and runs on Google machines; Jupyter runs on your own computer.' },
          { h3: 'Is Colab safe?', p: 'Your code runs in a machine private to your account. The risks are the ones above: notebooks that mount your Drive, and local runtimes that touch your files.' },
          { h3: 'Python errors in Colab', p: 'A NameError, TypeError or IndentationError in Colab is ordinary Python. Read it the same way you would in any editor; Colab only changes where the code runs.' }
        ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Beyond fixing',
      h2: 'Working in Colab like a data scientist, not a firefighter',
      lede: 'Every problem on this page has the same root: not knowing where the code runs and what survives. Our first term teaches that early.',
      body: [
        { kind: 'table', caption: 'Twelve classes in Colab (ours, for high school and college students, changed to suit each one)', head: ['Classes', 'Notebook work', 'What it trains'], rows: [
          ['1 to 2', 'A first notebook with text and code cells', 'Where the notebook is saved, and where it runs'],
          ['3 to 4', 'Loading a class dataset from Drive', 'Mounting Drive and using full paths'],
          ['5 to 6', 'Cleaning and charting with pandas', 'Setup cells at the top; Run all after a reconnect'],
          ['7 to 8', 'A first machine learning model', 'When a GPU helps, and when to switch it off'],
          ['9 to 10', 'A data project of their own', 'Sharing without leaking outputs'],
          ['11 to 12', 'Presenting the notebook', 'A notebook anyone can rerun from the top']
        ] },
        { kind: 'p', mt: true, html: 'We teach the ideas behind each notebook so students can complete their own coursework; we do not fill in graded notebooks. For the bigger picture, see our <a class="ag-inline-link" href="/data-science-course">data science course</a> page and <a class="ag-inline-link" href="/ai-and-machine-learning-classes-in-usa">AI and machine learning classes in the USA</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student is',
    h2: 'Four stages of using Colab',
    lede: 'From losing work to never worrying about it.',
    table: { caption: 'Stages with Google Colab (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Visitor', 'Opens a shared notebook and presses play on each cell'],
      ['2. Uploader', 'Uploads files each session and loses them often'],
      ['3. Organizer', 'Keeps data in Drive and setup cells at the top'],
      ['4. Builder', 'Writes notebooks that run cleanly on a fresh machine']
    ] },
    left: { h3: 'For parents', ps: [
      'Colab is free and runs in a browser such as Chrome, so it can work on a Chromebook, which makes it a sensible tool for a school data class.',
      'If your child is under 18, the AI features are off by Google\'s own rule. That is not a problem to solve.'
    ] },
    right: { h3: 'For students', ps: [
      'Assume the machine will vanish. Keep files in Drive and setup at the top.',
      'After any reconnect, Run all before you trust a result.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Python, data and AI',
    lede: 'Taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'COL / TEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Teen data science', blurb: 'Datasets kept safely in Drive.' },
        { code: 'COL / TEN / 02', slug: 'ai-ml-masterclass-teens', title: 'Teen machine learning', blurb: 'GPU runtimes used with care.' },
        { code: 'COL / TEN / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Ship a team notebook fast.' }
      ] },
      { num: 'II', h3: 'Bridging', sub: 'Ages 10 and up', courses: [
        { code: 'COL / BRG / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Grades 5 to 10, maths in Python.' },
        { code: 'COL / BRG / 02', slug: 'creative-coding-animation-mastery', title: 'Creative coding', blurb: 'Generative art from data.' },
        { code: 'COL / BRG / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms behind the analysis.' }
      ] },
      { num: 'III', h3: 'College and adults', sub: 'Ages 18 and up', courses: [
        { code: 'COL / PRO / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML for college', blurb: 'Deep learning and projects.' },
        { code: 'COL / PRO / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI analytics', blurb: 'For adults who do not code yet.' },
        { code: 'COL / PRO / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI for college', blurb: 'Ages 18 and up, model building.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons in the notebook you already use',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batches after school, US time zones.' },
      { time: 'Weekends', l: 'Time for a full project session.' },
      { time: '1-on-1', l: 'Around a class deadline or exam.' }
    ],
    cells: [
      { h3: 'A steady teacher', p: 'The same person each class.' },
      { h3: 'Your notebook', p: 'Colab, shared on screen.' },
      { h3: 'Works on Chromebooks', p: 'A browser is all you need.' },
      { h3: 'Concepts only', p: 'Graded work stays yours.' },
      { h3: 'Every state', p: 'Live online, from home.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Data and Python projects from our students',
  projectsLede: 'Work by learners who once lost a whole notebook to a disconnected runtime. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews from parents, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Colab\'s free version costs nothing, and our teen data science course runs in it. You pay us only for teaching, month by month in US dollars, with no semester contract and nothing more to pay when you stop.',
    free: ['A free first lesson', 'Share the notebook that fails', 'No card asked'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'A batch you choose', 'Paid monthly'],
    one: ['One student, one teacher', 'Times that suit you', 'Your own data and goals']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'Google Colab: common questions',
    items: [
      { q: 'Why does Google Colab keep disconnecting?', a: 'Colab runs your code on a virtual machine that is deleted when idle for a while and has a maximum lifetime; the free version runs for at most 12 hours. Reconnect, then run all cells from the top.' },
      { q: 'Where did my uploaded files go in Colab?', a: 'Uploaded files live on the virtual machine, which Colab deletes when it is idle or reaches its limit. Keep data files in Google Drive and mount Drive at the top of the notebook.' },
      { q: 'Why does drive.mount() time out?', a: 'Google says Drive operations can time out when a folder holds too many items, and that more than about ten thousand items in the top level of My Drive can make mounting fail. Move files into subfolders and empty the Trash.' },
      { q: 'Is Google Colab free for students?', a: 'Yes. The Colab FAQ says Colab is free of charge to use, although its resources are not guaranteed and not unlimited.' },
      { q: 'Why can I not see Gemini or AI features in Colab?', a: 'Google says access to Colab AI features requires a Google account aged 18 or over. Students under 18 will not see them, and the notebook works fully without them.' },
      { q: 'Why will Colab not open with my school account?', a: 'Access for school Workspace accounts is switched on or off by the school administrator, and Workspace for Education schools must get parental consent for students under 18. Ask your teacher.' },
      { q: 'Should I use a GPU in Colab?', a: 'Only if your code uses one, usually for training models. Google recommends switching to a standard runtime when the GPU is not used: open the Runtime menu, choose Change runtime type and set the hardware accelerator to None.' },
      { q: 'Can you finish my Colab assignment for me?', a: 'No. Graded notebooks are yours to complete; a teacher explains the concept and the error until you can finish it on your own.' },
      { q: 'When do lessons run for students in the US?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What does a Colab or data science course cost?', a: 'Nothing for the first lesson. After that, fees are charged a month at a time for live classes, with the figure in US dollars shown in the fees section above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for students who work in notebooks.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our pages for US students, in one place.' },
      { href: '/data-science-course', label: 'Data science course', p: 'What a full data course includes.' },
      { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML in the USA', p: 'For students ready for models.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for popular AI tools.' },
      { href: '/blog/how-to-read-and-write-files-in-python', label: 'Reading files in Python', p: 'Paths and files, explained.' },
      { href: '/python-for-17-year-olds', label: 'Python for 17 year olds', p: 'For high school seniors.' },
      { href: '/jupyter-notebook-errors-for-students', label: 'Jupyter Notebook errors for students', p: 'Jupyter Notebook errors students hit, what they mean, and how to fix them.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation errors explained', p: 'Every Python IndentationError message, what it means, and how to fix it.' },
      { href: '/python-turtle-not-working', label: 'Python turtle not working', p: 'Python turtle not working? The real errors, the fixes, and how to write text.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send the notebook link or describe the class it is for. In the first lesson the teacher opens it with you and finds what broke.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how our classes run</a>, or browse <a class="ag-inline-link" href="/courses">our courses</a>, each with a class-by-class outline.',
    note: 'Our teachers live in India and teach only online, so a US student needs just a browser and a quiet half hour. WhatsApp reaches us fastest.',
    formNote: 'No charge for the first lesson, and no card requested.'
  },

  footer: {
    cols: [
      { h4: 'Data and AI', links: [
        { href: '/data-science-course', label: 'Data science course' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/python-for-16-year-olds', label: 'Python for 16 year olds' },
        { href: '/how-to-debug-code', label: 'How to debug code' }
      ] }
    ],
    bottomRight: 'The machine is temporary; Drive is not'
  },

  personalityCss: `
.ag-root.ag-gc .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-gc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-gc .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-gc .ag-table caption { text-align: left; }
.ag-root.ag-gc .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Google Colaboratory FAQ and local-runtimes page (research.google.com/colaboratory), and Google\'s googlecolab/colabtools source (google/colab/drive.py, files.py), read raw 17 October 2026: hosted Jupyter service, free of charge, resources not guaranteed, VM private to your account and deleted when idle, at most 12 hours free, idle timeout, sharing excludes the VM, omit outputs, Upload notebook, Disconnect and delete runtime, drive.mount time-outs and the ten-thousand-item root, OSError [Errno 5], quotas, Drive access warning, GPU not utilized, AI features 18+, Workspace on/off and parental consent, cookies and googleusercontent.com, browsers, Python 2 unsupported, local runtime warning; drive.mount messages; files.upload return value and "(1)" renaming.',
    localProject: 'Three Colab code cells written by us to the documented google.colab functions (mount Drive, upload and read the returned name, check GPU use), a "grades (1).csv" walk-through from the files.py renaming rule, a symptom table, a ten-step routine and a twelve-class plan. Lesson family: where code runs and what survives.',
    requiredMentions: ['a hosted Jupyter Notebook service that requires no setup to use', 'Virtual machines are deleted when idle for a while', 'can run for at most 12 hours', 'approximately ten thousand items in the root directory can cause mounting to fail', 'OSError: [Errno 5] Input/output error', 'requires your Google account\'s age to be 18+.', 'are required to obtain parental consent', 'Drive already mounted at /content/drive', 'grades (1).csv', 'Mounting Google Drive on Colab allows any code in your notebook to access any files in your Google Drive.', 'Wait a day for quota limits to reset.'],
    sources: [
      { claim: 'Colab basics, limits, runtimes, sharing, Drive errors, GPU, AI age rule, Workspace and parental consent, browsers, Python 2.', url: 'https://research.google.com/colaboratory/faq.html' },
      { claim: 'Local runtimes and their file-access warning.', url: 'https://research.google.com/colaboratory/local-runtimes.html' },
      { claim: 'drive.mount messages and mount point rules.', url: 'https://github.com/googlecolab/colabtools/blob/main/google/colab/drive.py' },
      { claim: 'files.upload return value and the "(1)" renaming of repeated uploads.', url: 'https://github.com/googlecolab/colabtools/blob/main/google/colab/files.py' }
    ],
    rejectedClaims: [
      'Colab paid plan prices and compute unit costs: not printed; prices are not the point of a student help page and the FAQ links out for them.',
      'Colab Pro for Education: the FAQ says it is no longer available for new signups, so it is not offered as an option.',
      'Quotes from Colab\'s own example notebooks (colab.research.google.com/notebooks): curl could not connect, and it was not retried around, so nothing is quoted from them.',
      'That every US school enables Colab: the FAQ says the school administrator decides, so the page says to ask the teacher.',
      'Any route for under-18 students to use Colab AI features: none given; the page follows Google\'s 18+ rule.',
      'Completed graded notebooks: none; the page says we never do graded work.',
      'Any affiliation with Google: none, and the page says so.'
    ]
  }
};
