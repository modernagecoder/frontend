'use strict';
// Python turtle not working (ag- Phase T school-tools door; US cluster row 145).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4): "import turtle python not working / how to write in turtle"; autocomplete_tools.tsv:
// "turtle python commands", "turtle python colors", "trinket python turtle", "python for kids turtle".
// Sources, fetched raw with curl on 17 October 2026 (docs.python.org/3 served 3.15.0); raw copies in
// keyword-research-2026-09/us/src/python-turtle-not-working/:
//  - library/turtle.html: "Turtle graphics requires the tkinter optional module."; "The python.org installers for
//    Windows and macOS include it, but some Linux distributions and other platforms may package it separately.";
//    "Standard library module '_tkinter' was not found"; turtle "is an implementation of the drawing tools introduced in
//    Logo in 1967"; done()/mainloop() "Must be the last statement in a turtle graphics program."; speed strings
//    ("fastest": 0, "normal": 6, "slowest": 1) and "speed = 0 means that no animation takes place"; write(arg,
//    move=False, align='left', font=('Arial', 8, 'normal')); onkey needs focus ("TurtleScreen must have the focus",
//    see listen()); colorstring "such as "red", "yellow", or "#33cc8c""; colormode example "bad color sequence:
//    (240, 160, 80)"; textinput returns None if the dialog is canceled; exitonclick and the IDLE -n remark.
//  - library/tkinter.html: "Running python -m tkinter from the command line should open a window demonstrating a simple
//    Tk interface"; "Tcl/Tk 8.5.12 is the minimum supported version".
//  - tutorial/modules.html: "The directory containing the script being run is placed at the beginning of the search
//    path, ahead of the standard library path."; "This is an error unless the replacement is intended."
//  - whatsnew/3.13.html: the "consider renaming ... since it has the same name as the standard library module" hint,
//    shown there for random.py.
//  - library/idle.html: running IDLE with the -n switch runs user code in a single process.
// Our own runs (labelled on the page), Python 3.13.6 with Tk 8.6 on Windows 11, 17 October 2026, saved as
// our-run-python-3.13.6.txt and our-run-examples.txt: the turtle.py shadowing message, forwad and turtle.turtle typos
// with "Did you mean" hints, the TclError after bye(), "bad color string: bleu", the int + str TypeError in write(),
// the colormode error, and the two fixed programs (star card prints pos (75.00,-60.00) turned 720 heading 0.0; the
// key program runs). Test copies closed themselves with ontimer(bye); the page versions end with turtle.done().
// Our own material: the symptom table, the ten-step checklist, the star-card and arrow-key programs, the 720-degree
// arithmetic (5 x 144 = 720, two full turns) and the term plan.
// Lesson family: events and the main loop (a program that waits for the user).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SHADOW = `# Saved as turtle.py  (the bug is the file name, ours)
import turtle
t = turtle.Turtle()
t.forward(100)
turtle.done()

# Our run, Python 3.13.6:
# AttributeError: module 'turtle' has no attribute
#   'Turtle' (consider renaming 'turtle.py' since it
#   has the same name as the standard library module
#   named 'turtle' and prevents importing that
#   standard library module). Did you mean: 'turtle'?`;

const STAR = `# star_card.py  (ours; any name except turtle.py)
import turtle

screen = turtle.Screen()
screen.bgcolor("lightyellow")
t = turtle.Turtle()
t.color("purple")
t.speed(6)            # 6 is "normal"

for side in range(5):
    t.forward(150)
    t.right(144)      # 5 x 144 = 720: two full turns

t.penup()             # move without drawing
t.goto(75, -60)
t.write("Happy birthday, Ava", align="center",
        font=("Arial", 18, "normal"))
t.hideturtle()
turtle.done()         # keeps the window open`;

const KEYS = `# arrow_keys.py  (ours)
import turtle

screen = turtle.Screen()
t = turtle.Turtle()

def go_up():
    t.forward(20)

def turn_left():
    t.left(30)

screen.onkey(go_up, "Up")
screen.onkey(turn_left, "Left")
screen.listen()       # without this, keys are ignored
turtle.done()`;

const WRITE_BUG = `# The write() mistake (ours)
points = 42
t.write(points + " points")      # TypeError

# Our run: TypeError: unsupported operand type(s)
#   for +: 'int' and 'str'

t.write(str(points) + " points") # works
t.write(f"{points} points")      # also works`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'PYTHON TURTLE', blurb: 'Why Python turtle will not open, closes at once or ignores keys, the real error messages, and how to write text on the turtle screen.' },
  slug: 'python-turtle-not-working',
  code: 'ptnw',
  accent: '#55458F',
  accentRationale: 'Python turtle troubleshooting, US Phase T: the allocated muted violet #55458F from alloc.tsv row 145, distinct from the other Phase T accents',
  pageType: 'market',
  market: US,
  routeLabel: 'Python turtle not working',
  title: 'Python Turtle Not Working? Real Errors and Fixes',
  description: 'Python turtle not working: a file named turtle.py, a window that closes at once, missing tkinter, ignored keys. The real error messages, fixes and text writing.',
  ogDescription: 'Why import turtle fails, why the window closes or freezes, why keys do nothing, and how to write text with turtle, with real error messages from our Python 3.13.6 runs.',
  twitterDescription: 'Python turtle not working? The real errors, the fixes, and how to write text.',
  pageName: 'Python Turtle Not Working',
  webPageDescription: 'A troubleshooting guide for US students whose Python turtle programs fail, built from the Python turtle and tkinter documentation and our own runs.',
  courseDescription: 'Live online Python classes for US kids and teens that start with turtle graphics, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Python turtle not working',
  navLinks: [
    { href: '#symptoms', label: 'Symptoms' },
    { href: '#filename', label: 'turtle.py' },
    { href: '#window', label: 'The window' },
    { href: '#text', label: 'Writing text' },
    { href: '#checklist', label: 'Checklist' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 3 to Grade 12 &middot; Python turtle',
  h1: 'Python turtle not working? Start here',
  lede: 'For many students, turtle is the first typed Python they meet, whether in a middle school computer science elective, an after-school club or a summer camp. It is also where they meet their first confusing failure: an error before anything draws, a window that flashes and vanishes, or arrow keys that do nothing. Almost every case comes from a short list of causes. This page goes through them with the messages Python really prints. Each message is either quoted from the official docs or reproduced on our own test laptop (Python 3.13.6, Tk 8.6), and every one says which. Then it shows how to write text on the turtle screen.',
  secondaryCta: { href: '#symptoms', label: 'Match your symptom' },
  wa: 'Hello Modern Age Coders, my child in the US is learning Python turtle and their programs keep failing. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Turtle graphics in our Python course for kids',
  spec: [
    ['For', 'Grade 3 to Grade 12'],
    ['Module', 'turtle, built in'],
    ['Needs', 'tkinter and a desktop window'],
    ['Python tested', '3.13.6 with Tk 8.6, our run'],
    ['Top cause', 'A file named turtle.py'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'When Python turtle is not working, check four things in order: your file is not named turtle.py (that file hides the real module), the program ends with turtle.done() so the window stays open, tkinter is installed (turtle needs it), and screen.listen() is called if you use keys. Text goes on screen with write(). At Modern Age Coders, turtle graphics is part of our live Python course for children in Grade 3 and above, taught in a group batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that take turtle drawings somewhere',
    lede: 'Turtle is a starting point. Each course below begins there and moves on to real programs.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'TRT / 01', title: 'Python and AI for kids', note: 'Grades 3 to 8. Turtle art first, then games and smart projects.' },
      { course: 'maths-through-coding', code: 'TRT / 02', title: 'Maths through coding', note: 'Ages 10 to 15. Angles, shapes and patterns drawn in Python.' },
      { course: 'python-complete-masterclass-teens', code: 'TRT / 03', title: 'Python for teens', note: 'Ages 13 to 18. From graphics to full projects.' }
    ]
  },

  sections: [
    {
      id: 'symptoms', tint: 'tint', eyebrow: 'Match your symptom',
      h2: 'What you see, what it usually means',
      lede: 'Find the row that matches what happened on your screen. Each cause is explained further down the page.',
      body: [
        { kind: 'table', caption: 'Turtle symptoms and causes (our table; the messages are from our run of Python 3.13.6 or the Python documentation)', head: ['What happens', 'What Python printed', 'Most likely cause'], rows: [
          ['Error on the first turtle line', 'module \'turtle\' has no attribute \'Turtle\'', 'Your own file is named turtle.py'],
          ['Error before anything runs', 'Standard library module \'_tkinter\' was not found', 'tkinter is missing from this Python install'],
          ['A window flashes and closes', 'Nothing at all', 'No turtle.done() at the end of the program'],
          ['Arrow keys do nothing', 'Nothing at all', 'screen.listen() was never called'],
          ['Error naming a color', 'bad color string: bleu', 'A misspelled color name'],
          ['Error with three numbers as a color', 'bad color sequence: (240, 160, 80)', 'Color mode is 1.0, not 255'],
          ['Error on a turtle command', '\'Turtle\' object has no attribute \'forwad\'. Did you mean: \'forward\'?', 'A typo in the command name'],
          ['Error after closing the window', 'invalid command name ".!canvas"', 'A turtle command ran after the window was gone']
        ] },
        { kind: 'source', html: 'The _tkinter and color-sequence messages are quoted from the <a class="ag-inline-link" href="https://docs.python.org/3/library/turtle.html" rel="noopener" target="_blank">turtle documentation</a>; the others come from our own run of Python 3.13.6 with Tk 8.6 on Windows 11, 17 October 2026. We are not connected with the Python Software Foundation.' }
      ]
    },
    {
      id: 'filename', tint: 'deep', eyebrow: 'Cause number one',
      h2: 'The file named turtle.py: why import turtle stops working',
      lede: 'It feels sensible to save your first turtle program as turtle.py. It is also a very common reason import turtle fails, because Python then imports your file instead of the real module.',
      body: [
        { kind: 'code', label: 'Broken &middot; the program is fine, the file name is not', lang: 'python', code: SHADOW, note: 'Python 3.13 added the "consider renaming" hint; the Python 3.13 release notes show the same message for a file named random.py. Older versions print only the first part, which is far less helpful.' },
        { kind: 'two', mt: true,
          leftH3: 'Why Python picks your file',
          left: [
            'The Python tutorial explains that "The directory containing the script being run is placed at the beginning of the search path, ahead of the standard library path." So when your folder holds turtle.py, import turtle finds that file first.',
            'The tutorial adds, flatly: "This is an error unless the replacement is intended." Your file has no Turtle class in it, so the very next line fails.'
          ],
          rightH3: 'The fix, in three moves',
          right: [
            'Rename the file to something like star_card.py or my_drawing.py. Anything except the name of a module you import.',
            'Run the renamed file and read the first line of any new error. With the real module back, the program either draws or fails on a different, honest line.',
            'Check the folder for other borrowed names too. A file called random.py or math.py breaks those modules in exactly the same way.'
          ] }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: 'The window',
      h2: 'The window closes at once, never opens, or freezes',
      lede: 'Turtle draws in a desktop window made by tkinter, Python\'s interface to the Tk toolkit. Window problems tend to come from that window being closed too early, never being allowed to open, or not being available at all.',
      body: [
        { kind: 'three', cells: [
          { h3: 'It flashes and closes', p: 'When the last line finishes, the program ends and takes the window with it. The documentation says turtle.done() "Must be the last statement in a turtle graphics program." Add it, or use turtle.exitonclick() to close on a mouse click.' },
          { h3: 'It never opens', p: 'The documentation is clear: "Turtle graphics requires the tkinter optional module." If you see an error mentioning _tkinter, this Python install has no Tk support. Running python -m tkinter should open a small test window when tkinter works.' },
          { h3: 'It freezes or will not close', p: 'This usually happens when a program is run twice in one session, or a loop never ends. Close the window, restart the Python shell or kernel, and run the file fresh. Add turtle.done() once, at the very end.' }
        ] },
        { kind: 'table', mt: true, caption: 'Will turtle open a window here? (from the Python documentation, plus our reasoning, labelled)', head: ['Setting', 'What the documentation says', 'What that means for a student'], rows: [
          ['python.org Python on Windows or macOS', '"The python.org installers for Windows and macOS include it"', 'Turtle should work after a normal install'],
          ['Python on Linux, including some school setups', 'Some Linux distributions "may package it separately"', 'Ask whoever set up the computer to add the Tk package'],
          ['IDLE, the editor that comes with Python', 'done() must not be used if IDLE runs in -n mode', 'In a normal IDLE install, done() is fine'],
          ['A browser notebook running on a remote server', 'Not covered by the turtle documentation', 'Our reasoning: the code runs on another machine, so there is no desktop window for tkinter to open on your screen']
        ] },
        { kind: 'source', html: 'Quotes from the <a class="ag-inline-link" href="https://docs.python.org/3/library/turtle.html" rel="noopener" target="_blank">turtle</a> and <a class="ag-inline-link" href="https://docs.python.org/3/library/tkinter.html" rel="noopener" target="_blank">tkinter</a> documentation, read 17 October 2026. tkinter lists Tcl/Tk 8.5.12 as its minimum supported version; our test machine reported Tk 8.6.' }
      ]
    },
    {
      id: 'text', tint: 'deep', eyebrow: 'How to write in turtle',
      h2: 'How to write text on the turtle screen',
      lede: 'Searches for how to write in turtle mostly mean one thing: putting words on the drawing. The command is write(), and the documentation gives its full form as write(arg, move=False, align=\'left\', font=(\'Arial\', 8, \'normal\')).',
      body: [
        { kind: 'code', label: 'Working &middot; a star card with a centered message', lang: 'python', code: STAR, note: 'We ran a test copy of this program: the star closed neatly and the turtle finished at (75.00, -60.00) facing heading 0.0, because five turns of 144 degrees add up to 720, exactly two full turns.' },
        { kind: 'table', mt: true, caption: 'The parts of write(), from the turtle documentation', head: ['Part', 'What it does', 'Our tip'], rows: [
          ['arg', 'The object to write; its string form appears on screen', 'Numbers work alone, but joining them to text needs str()'],
          ['align', 'One of "left", "center" or "right", measured from the turtle', 'Use "center" for titles and labels'],
          ['font', 'A triple: (fontname, fontsize, fonttype)', 'Size 8 is the default and is tiny; try 16 to 24'],
          ['move', 'If true, the pen moves to the bottom-right corner of the text', 'Leave it False unless you are writing a line in pieces']
        ] },
        { kind: 'code', mt: true, label: 'Broken, then fixed &middot; the score label mistake', lang: 'python', code: WRITE_BUG, note: 'The error is ordinary Python, not turtle: a number and a string cannot be added. Convert the number first.' }
      ]
    },
    {
      id: 'keys', tint: 'tint', eyebrow: 'Keys, colors and speed',
      h2: 'Keys that do nothing, colors that crash, and a turtle that is too slow',
      lede: 'Once the window opens, the next round of trouble usually comes from three settings that the documentation explains in a line each.',
      body: [
        { kind: 'code', label: 'Working &middot; arrow keys that move the turtle', lang: 'python', code: KEYS, note: 'The documentation says that to register key events, the TurtleScreen "must have the focus", which is what listen() does. Click the turtle window once too, so the keyboard is talking to it and not to your editor.' },
        { kind: 'two', mt: true,
          leftH3: 'Colors: names, hex codes and number triples',
          left: [
            'A color name is a Tk color specification string, which the documentation illustrates with "red", "yellow", or "#33cc8c". A misspelling such as "bleu" stops the program with bad color string: bleu.',
            'Three numbers like (240, 160, 80) only work after screen.colormode(255). In the default mode each value must be between 0 and 1.0, and the documentation shows the resulting error: bad color sequence: (240, 160, 80).'
          ],
          rightH3: 'Speed: why 0 is the fastest',
          right: [
            'speed() takes 0 to 10 or a word. The documentation maps "fastest" to 0, "normal" to 6 and "slowest" to 1, and warns that "speed = 0 means that no animation takes place".',
            'So speed(0) is not "stopped"; it is "draw instantly". For large drawings, students also use tracer(0) with update() to draw everything at once.'
          ] },
        { kind: 'p', mt: true, html: 'Asking the user for input inside turtle works too: textinput() pops up a dialog and, as the documentation notes, returns None if the dialog is canceled, so check for None before using the answer.' }
      ]
    },
    {
      id: 'checklist', tint: 'deep', eyebrow: 'Checklist',
      h2: 'Ten checks, in order, for any turtle program that will not work',
      lede: 'Our checklist, in the order our teachers use it. Stop as soon as one check explains the error.',
      body: [
        { kind: 'ol', items: [
          '<b>Read the last line of the error.</b> It names the type (AttributeError, TypeError, TurtleGraphicsError) and usually the word that is wrong.',
          '<b>Check the file name.</b> If it is turtle.py, rename it and delete any cached turtle file in the same folder.',
          '<b>Check the last line of the program.</b> It should be turtle.done() or turtle.exitonclick(), once, at the end.',
          '<b>Check the capital T.</b> The module is turtle; the class is Turtle. Our run of turtle.turtle() printed: module \'turtle\' has no attribute \'turtle\'. Did you mean: \'Turtle\'?',
          '<b>Check spelling of commands.</b> Python 3.13 suggests the nearest real name, as it did for forwad.',
          '<b>Test tkinter on its own.</b> Run python -m tkinter. If no test window appears, the problem is the Python install, not your code.',
          '<b>Check colors.</b> Names must be real Tk color names; number triples need colormode(255).',
          '<b>For keys, check listen().</b> And click the turtle window before pressing anything.',
          '<b>Restart before rerunning.</b> Close the old window and restart the shell, so an old screen is not still attached.',
          '<b>Make it smaller.</b> Comment out everything except the first three lines and add lines back one at a time until it breaks.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When the error appears after you close the window',
          left: [
            'If a program keeps drawing after the window has gone, tkinter has nothing to draw on. In our test, calling turtle.bye() and then t.forward(50) ended with _tkinter.TclError: invalid command name ".!canvas".',
            'The fix is structure, not luck: draw everything first, then let turtle.done() hold the window open as the final line.'
          ],
          rightH3: 'School assignments',
          right: [
            'If the drawing is a graded school assignment, we will explain why the program fails and teach the idea behind it, but we do not draw anyone\'s assignment for them.',
            'In a lesson, students bring the broken file, and the teacher asks them to read the error aloud first. Fixing it themselves is the part that sticks.'
          ] }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'Where turtle leads',
      h2: 'From a first square to real programs',
      lede: 'Turtle was built for learning. The documentation describes it as an implementation of the drawing tools introduced in Logo in 1967 and notes that its "instant, visible feedback makes it an effective way for learners to encounter programming concepts."',
      body: [
        { kind: 'table', caption: 'What turtle teaches across a first term (our plan for Grades 3 to 8, adjusted for each child)', head: ['Classes', 'What gets drawn', 'The idea behind it'], rows: [
          ['1 to 2', 'Squares, triangles, a house', 'Sequence: commands run in order'],
          ['3 to 4', 'Stars and spirals with for loops', 'Loops, and angles that add up to full turns'],
          ['5 to 6', 'Functions like draw_flower(size)', 'Functions and parameters'],
          ['7 to 8', 'Random colors and positions', 'Variables, random numbers, color modes'],
          ['9 to 10', 'An arrow-key drawing game', 'Events and the main loop'],
          ['11 to 12', 'A card or poster with text', 'Putting it all together; write() and layout']
        ] },
        { kind: 'p', mt: true, html: 'After turtle, children move on to games and data. For age-by-age starting points, see <a class="ag-inline-link" href="/python-for-10-year-olds">Python for 10 year olds</a> and <a class="ag-inline-link" href="/python-for-12-year-olds">Python for 12 year olds</a>; for younger children, <a class="ag-inline-link" href="/online-coding-classes-for-kids-usa">online coding classes for US kids</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From first line to first game',
    h2: 'Four stages of turtle programming',
    lede: 'Where a young coder might be, and what comes next.',
    table: { caption: 'Stages with Python turtle (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Typist', 'Copies commands line by line from a worksheet'],
      ['2. Looper', 'Replaces repeated lines with a for loop'],
      ['3. Builder', 'Writes functions that draw shapes of any size'],
      ['4. Game maker', 'Uses keys, events and text to make something interactive']
    ] },
    left: { h3: 'For parents', ps: [
      'A child who can explain why five turns of 144 degrees make a star is doing geometry and programming at once.',
      'Errors are part of the work. The useful question is whether your child reads them before asking for help.'
    ] },
    right: { h3: 'For kids', ps: [
      'Never name your file turtle.py. Give it a name about what it draws.',
      'End every program with turtle.done(). Then the window waits for you.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young Python coders',
    lede: 'Taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Grades 3 to 8', courses: [
        { code: 'TRT / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle first, then games.' },
        { code: 'TRT / KID / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Drag-and-drop before typing.' },
        { code: 'TRT / KID / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Angles and patterns in code.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'TRT / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Past turtle into real apps.' },
        { code: 'TRT / TEN / 02', slug: 'creative-coding-animation-mastery', title: 'Creative coding', blurb: 'Animation and generative art.' },
        { code: 'TRT / TEN / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Drawing and games in a browser.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'TRT / PRO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Loops and logic, harder puzzles.' },
        { code: 'TRT / PRO / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python models, ages 13 to 18.' },
        { code: 'TRT / PRO / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for adults', blurb: 'Zero to advanced, ages 18 and up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live turtle lessons from home',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batches placed for US time zones.' },
      { time: 'Weekends', l: 'Popular with younger children.' },
      { time: '1-on-1', l: 'A schedule built around your child.' }
    ],
    cells: [
      { h3: 'A familiar face', p: 'One teacher across the term.' },
      { h3: 'Screen shared', p: 'The teacher sees the turtle window too.' },
      { h3: 'Broken files welcome', p: 'We start from the error.' },
      { h3: 'Explain, then fix', p: 'Children fix their own code.' },
      { h3: 'Anywhere in the US', p: 'A laptop with Python is enough.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'What our students drew and built',
  projectsLede: 'Work from learners whose first programs were turtle shapes too. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Turtle comes free with Python. You pay only for live lessons, charged monthly in US dollars; there is no term-long commitment, and you may stop after any month.',
    free: ['A free first lesson', 'Bring the program that broke', 'No card required'],
    group: ['Fifteen to twenty learners', 'A regular teacher', 'Choose a batch time', 'Billed monthly'],
    one: ['One child, one teacher', 'Times you choose', 'A plan around their ideas']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Python turtle problems: common questions',
    items: [
      { q: 'Why is import turtle not working?', a: 'A very common cause is a file of your own named turtle.py in the same folder, which Python imports instead of the real module. Rename it. If the error mentions _tkinter instead, this Python install is missing tkinter, which turtle needs.' },
      { q: 'Why does my turtle window close immediately?', a: 'The program ended. Put turtle.done() as the last line, which the Python documentation says must be the last statement in a turtle graphics program, or use turtle.exitonclick() to close it with a click.' },
      { q: 'How do you write text in Python turtle?', a: 'Use write(), for example t.write("Hello", align="center", font=("Arial", 18, "normal")). The text appears at the turtle\'s position. Convert numbers with str() before joining them to words.' },
      { q: 'Why do my arrow keys not work in turtle?', a: 'Call screen.listen() after setting up onkey(), and click the turtle window once so it has the focus. The documentation says the screen must have the focus to register key events.' },
      { q: 'Does turtle need tkinter?', a: 'Yes. The Python documentation says turtle graphics requires the tkinter optional module. The python.org installers for Windows and macOS include it, and running python -m tkinter shows a test window when it is working.' },
      { q: 'Why does turtle say bad color string?', a: 'The color name is not one Tk recognizes, often a typo. Use a real name such as red or a hex code such as #33cc8c. For number triples up to 255, call screen.colormode(255) first.' },
      { q: 'Does Python turtle work on a Chromebook?', a: 'Turtle needs a desktop window from tkinter, so it works where a full Python install with tkinter can run. On a school Chromebook that depends on how the device is set up, so ask your teacher which Python environment the class uses.' },
      { q: 'Can you do my turtle assignment?', a: 'No. We explain why a program fails and teach the idea so the student can finish their own work. We never complete graded assignments.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do turtle and Python classes cost?', a: 'The first lesson costs nothing. After that you pay month by month for live teaching, and the fees section on this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US families whose children are starting Python.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our full set of pages for US families.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids', p: 'Classes for ages 6 to 14.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'A starting point for fifth graders.' },
      { href: '/python-for-12-year-olds', label: 'Python for 12 year olds', p: 'A starting point for seventh graders.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for any bug, turtle or not.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our learners have shipped.' },
      { href: '/scratch-not-working-help', label: 'Scratch not working', p: 'Scratch not working? Saving, sign-in, school network and tablet fixes, from the Scratch Help Center.' },
      { href: '/makecode-arcade-help-for-students', label: 'MakeCode Arcade help', p: 'MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us what your child is drawing and where it goes wrong. The teacher opens the same program in the first lesson.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how a lesson works</a> or browse <a class="ag-inline-link" href="/courses">all our courses</a> with their syllabuses.',
    note: 'Our teachers are in India and teach entirely over video, so families anywhere in the US join from home. A WhatsApp message gets the quickest answer.',
    formNote: 'Free first lesson. Card details are never requested.'
  },

  footer: {
    cols: [
      { h4: 'Python for kids', links: [
        { href: '/python-for-10-year-olds', label: 'Python for 10 year olds' },
        { href: '/python-for-11-year-olds', label: 'Python for 11 year olds' },
        { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Draw everything, then turtle.done()'
  },

  personalityCss: `
.ag-root.ag-ptnw .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ptnw .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-ptnw .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ptnw .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-ptnw .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Python documentation (docs.python.org/3, served as 3.15.0 on 17 October 2026), read raw: turtle "requires the tkinter optional module"; python.org installers for Windows and macOS include it; the _tkinter not-found message; done() "Must be the last statement in a turtle graphics program."; speed strings and speed 0; write() signature; key events need focus via listen(); Tk color strings; colormode and "bad color sequence: (240, 160, 80)"; textinput returns None on cancel; Logo 1967. tkinter: python -m tkinter test window, Tcl/Tk 8.5.12 minimum. Modules tutorial: script directory first on the search path. Python 3.13 release notes: the rename hint.',
    localProject: 'Our own runs of Python 3.13.6 with Tk 8.6 on Windows 11 (17 October 2026): the turtle.py shadowing message, forwad and turtle.turtle typos with Did you mean hints, invalid command name ".!canvas" after bye(), bad color string: bleu, the int plus str TypeError, a star card that ends at (75.00, -60.00) heading 0.0 (5 x 144 = 720 degrees, two full turns) and an arrow-key program. A symptom table, a ten-check list and a twelve-class plan. Lesson family: events and the main loop.',
    requiredMentions: ['Turtle graphics requires the tkinter optional module.', 'Must be the last statement in a turtle graphics program.', 'ahead of the standard library path', 'consider renaming', 'invalid command name ".!canvas"', 'bad color string: bleu', 'bad color sequence: (240, 160, 80)', 'python -m tkinter', 'speed = 0 means that no animation takes place', 'Logo in 1967', '5 x 144 = 720'],
    sources: [
      { claim: 'turtle needs tkinter; installers include it; done() must be last; speed, write, onkey and listen, colors, colormode, textinput; Logo 1967.', url: 'https://docs.python.org/3/library/turtle.html' },
      { claim: 'python -m tkinter opens a test window; Tcl/Tk 8.5.12 minimum.', url: 'https://docs.python.org/3/library/tkinter.html' },
      { claim: 'The script directory is placed ahead of the standard library on the search path.', url: 'https://docs.python.org/3/tutorial/modules.html' },
      { claim: 'Python 3.13 hint to rename a script that shadows a standard library module.', url: 'https://docs.python.org/3/whatsnew/3.13.html' },
      { claim: 'IDLE -n runs user code without a subprocess.', url: 'https://docs.python.org/3/library/idle.html' }
    ],
    rejectedClaims: [
      'That turtle fails in Google Colab, Jupyter or specific browser editors: no official source read says so; the page gives our reasoning about remote code, labelled as ours, and points students to their teacher.',
      'The turtle.Terminator exception: not reproduced in our run (we saw a TclError instead), so it is not printed.',
      'Which Python environment US school Chromebooks run: not published in any source read; the FAQ tells students to ask their teacher.',
      'Completed solutions to graded turtle assignments: none given; the page says we never complete graded work.',
      'Any affiliation with the Python Software Foundation: none, and the page says so.'
    ]
  }
};
