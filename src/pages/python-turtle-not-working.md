---
title: "Python Turtle Not Working? Real Errors and Fixes"
description: "Python turtle not working: a file named turtle.py, a window that closes at once, missing tkinter, ignored keys. The real error messages, fixes and text writing."
canonical: https://learn.modernagecoders.com/python-turtle-not-working
source: src/pages/python-turtle-not-working.html
---
> When Python turtle is not working, check four things in order: your file is not named turtle.py (that file hides the real module), the program ends with turtle.done() so the window stays open, tkinter is installed (turtle needs it), and screen.listen() is called if you use keys. Text goes on screen with write(). At Modern Age Coders, turtle graphics is part of our live Python course for children in Grade 3 and above, taught in a group batch or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Python turtle not working

United States · Grade 3 to Grade 12 · Python turtle

# Python turtle not working? Start here

For many students, turtle is the first typed Python they meet, whether in a middle school computer science elective, an after-school club or a summer camp. It is also where they meet their first confusing failure: an error before anything draws, a window that flashes and vanishes, or arrow keys that do nothing. Almost every case comes from a short list of causes. This page goes through them with the messages Python really prints. Each message is either quoted from the official docs or reproduced on our own test laptop (Python 3.13.6, Tk 8.6), and every one says which. Then it shows how to write text on the turtle screen.

At a glance: For: Grade 3 to Grade 12; Module: turtle, built in; Needs: tkinter and a desktop window; Python tested: 3.13.6 with Tk 8.6, our run; Top cause: A file named turtle.py; Format: A batch, or one to one; Times: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses that take turtle drawings somewhere

Turtle is a starting point. Each course below begins there and moves on to real programs.

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Grades 3 to 8. Turtle art first, then games and smart projects.
- [Maths through coding](/courses/maths-through-coding): Ages 10 to 15. Angles, shapes and patterns drawn in Python.
- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. From graphics to full projects.

## What you see, what it usually means

Find the row that matches what happened on your screen. Each cause is explained further down the page.

**Turtle symptoms and causes (our table; the messages are from our run of Python 3.13.6 or the Python documentation)**

| What happens | What Python printed | Most likely cause |
|---|---|---|
| Error on the first turtle line | module 'turtle' has no attribute 'Turtle' | Your own file is named turtle.py |
| Error before anything runs | Standard library module '_tkinter' was not found | tkinter is missing from this Python install |
| A window flashes and closes | Nothing at all | No turtle.done() at the end of the program |
| Arrow keys do nothing | Nothing at all | screen.listen() was never called |
| Error naming a color | bad color string: bleu | A misspelled color name |
| Error with three numbers as a color | bad color sequence: (240, 160, 80) | Color mode is 1.0, not 255 |
| Error on a turtle command | 'Turtle' object has no attribute 'forwad'. Did you mean: 'forward'? | A typo in the command name |
| Error after closing the window | invalid command name ".!canvas" | A turtle command ran after the window was gone |

The _tkinter and color-sequence messages are quoted from the [turtle documentation](https://docs.python.org/3/library/turtle.html); the others come from our own run of Python 3.13.6 with Tk 8.6 on Windows 11, 17 October 2026. We are not connected with the Python Software Foundation.

## The file named turtle.py: why import turtle stops working

It feels sensible to save your first turtle program as turtle.py. It is also a very common reason import turtle fails, because Python then imports your file instead of the real module.

### Why Python picks your file

The Python tutorial explains that "The directory containing the script being run is placed at the beginning of the search path, ahead of the standard library path." So when your folder holds turtle.py, import turtle finds that file first.

The tutorial adds, flatly: "This is an error unless the replacement is intended." Your file has no Turtle class in it, so the very next line fails.

### The fix, in three moves

Rename the file to something like star_card.py or my_drawing.py. Anything except the name of a module you import.

Run the renamed file and read the first line of any new error. With the real module back, the program either draws or fails on a different, honest line.

Check the folder for other borrowed names too. A file called random.py or math.py breaks those modules in exactly the same way.

## The window closes at once, never opens, or freezes

Turtle draws in a desktop window made by tkinter, Python's interface to the Tk toolkit. Window problems tend to come from that window being closed too early, never being allowed to open, or not being available at all.

### It flashes and closes

When the last line finishes, the program ends and takes the window with it. The documentation says turtle.done() "Must be the last statement in a turtle graphics program." Add it, or use turtle.exitonclick() to close on a mouse click.

### It never opens

The documentation is clear: "Turtle graphics requires the tkinter optional module." If you see an error mentioning _tkinter, this Python install has no Tk support. Running python -m tkinter should open a small test window when tkinter works.

### It freezes or will not close

This usually happens when a program is run twice in one session, or a loop never ends. Close the window, restart the Python shell or kernel, and run the file fresh. Add turtle.done() once, at the very end.

**Will turtle open a window here? (from the Python documentation, plus our reasoning, labelled)**

| Setting | What the documentation says | What that means for a student |
|---|---|---|
| python.org Python on Windows or macOS | "The python.org installers for Windows and macOS include it" | Turtle should work after a normal install |
| Python on Linux, including some school setups | Some Linux distributions "may package it separately" | Ask whoever set up the computer to add the Tk package |
| IDLE, the editor that comes with Python | done() must not be used if IDLE runs in -n mode | In a normal IDLE install, done() is fine |
| A browser notebook running on a remote server | Not covered by the turtle documentation | Our reasoning: the code runs on another machine, so there is no desktop window for tkinter to open on your screen |

Quotes from the [turtle](https://docs.python.org/3/library/turtle.html) and [tkinter](https://docs.python.org/3/library/tkinter.html) documentation, read 17 October 2026. tkinter lists Tcl/Tk 8.5.12 as its minimum supported version; our test machine reported Tk 8.6.

## How to write text on the turtle screen

Searches for how to write in turtle mostly mean one thing: putting words on the drawing. The command is write(), and the documentation gives its full form as write(arg, move=False, align='left', font=('Arial', 8, 'normal')).

**The parts of write(), from the turtle documentation**

| Part | What it does | Our tip |
|---|---|---|
| arg | The object to write; its string form appears on screen | Numbers work alone, but joining them to text needs str() |
| align | One of "left", "center" or "right", measured from the turtle | Use "center" for titles and labels |
| font | A triple: (fontname, fontsize, fonttype) | Size 8 is the default and is tiny; try 16 to 24 |
| move | If true, the pen moves to the bottom-right corner of the text | Leave it False unless you are writing a line in pieces |

## Keys that do nothing, colors that crash, and a turtle that is too slow

Once the window opens, the next round of trouble usually comes from three settings that the documentation explains in a line each.

### Colors: names, hex codes and number triples

A color name is a Tk color specification string, which the documentation illustrates with "red", "yellow", or "#33cc8c". A misspelling such as "bleu" stops the program with bad color string: bleu.

Three numbers like (240, 160, 80) only work after screen.colormode(255). In the default mode each value must be between 0 and 1.0, and the documentation shows the resulting error: bad color sequence: (240, 160, 80).

### Speed: why 0 is the fastest

speed() takes 0 to 10 or a word. The documentation maps "fastest" to 0, "normal" to 6 and "slowest" to 1, and warns that "speed = 0 means that no animation takes place".

So speed(0) is not "stopped"; it is "draw instantly". For large drawings, students also use tracer(0) with update() to draw everything at once.

Asking the user for input inside turtle works too: textinput() pops up a dialog and, as the documentation notes, returns None if the dialog is canceled, so check for None before using the answer.

## Ten checks, in order, for any turtle program that will not work

Our checklist, in the order our teachers use it. Stop as soon as one check explains the error.

### When the error appears after you close the window

If a program keeps drawing after the window has gone, tkinter has nothing to draw on. In our test, calling turtle.bye() and then t.forward(50) ended with _tkinter.TclError: invalid command name ".!canvas".

The fix is structure, not luck: draw everything first, then let turtle.done() hold the window open as the final line.

### School assignments

If the drawing is a graded school assignment, we will explain why the program fails and teach the idea behind it, but we do not draw anyone's assignment for them.

In a lesson, students bring the broken file, and the teacher asks them to read the error aloud first. Fixing it themselves is the part that sticks.

## From a first square to real programs

Turtle was built for learning. The documentation describes it as an implementation of the drawing tools introduced in Logo in 1967 and notes that its "instant, visible feedback makes it an effective way for learners to encounter programming concepts."

**What turtle teaches across a first term (our plan for Grades 3 to 8, adjusted for each child)**

| Classes | What gets drawn | The idea behind it |
|---|---|---|
| 1 to 2 | Squares, triangles, a house | Sequence: commands run in order |
| 3 to 4 | Stars and spirals with for loops | Loops, and angles that add up to full turns |
| 5 to 6 | Functions like draw_flower(size) | Functions and parameters |
| 7 to 8 | Random colors and positions | Variables, random numbers, color modes |
| 9 to 10 | An arrow-key drawing game | Events and the main loop |
| 11 to 12 | A card or poster with text | Putting it all together; write() and layout |

After turtle, children move on to games and data. For age-by-age starting points, see [Python for 10 year olds](/python-for-10-year-olds) and [Python for 12 year olds](/python-for-12-year-olds); for younger children, [online coding classes for US kids](/online-coding-classes-for-kids-usa).

## Four stages of turtle programming

Where a young coder might be, and what comes next.

**Stages with Python turtle (ours)**

| Stage | What it looks like |
|---|---|
| 1. Typist | Copies commands line by line from a worksheet |
| 2. Looper | Replaces repeated lines with a for loop |
| 3. Builder | Writes functions that draw shapes of any size |
| 4. Game maker | Uses keys, events and text to make something interactive |

### For parents

A child who can explain why five turns of 144 degrees make a star is doing geometry and programming at once.
Errors are part of the work. The useful question is whether your child reads them before asking for help.

### For kids

Never name your file turtle.py. Give it a name about what it draws.
End every program with turtle.done(). Then the window waits for you.

## Nine courses for young Python coders

Taught live online by a regular teacher, in a batch or one to one.

### Kids

Grades 3 to 8

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Turtle first, then games.
- [Scratch coding](/courses/scratch-programming-complete-course): Drag-and-drop before typing.
- [Maths through coding](/courses/maths-through-coding): Angles and patterns in code.

### Teens

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): Past turtle into real apps.
- [Creative coding](/courses/creative-coding-animation-mastery): Animation and generative art.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Drawing and games in a browser.

### Going further

Teens and adults

- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Loops and logic, harder puzzles.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Python models, ages 13 to 18.
- [Python for adults](/courses/python-programming-masterclass-zero-to-advanced-college): Zero to advanced, ages 18 and up.

## Live turtle lessons from home

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** Batches placed for US time zones.
- **Weekends** Popular with younger children.
- **1-on-1** A schedule built around your child.

- **A familiar face** One teacher across the term.
- **Screen shared** The teacher sees the turtle window too.
- **Broken files welcome** We start from the error.
- **Explain, then fix** Children fix their own code.
- **Anywhere in the US** A laptop with Python is enough.
- **Batch or private** Fifteen to twenty, or one child.

## Fees

Turtle comes free with Python. You pay only for live lessons, charged monthly in US dollars; there is no term-long commitment, and you may stop after any month.

- Free first class: USD 0. A free first lesson. Bring the program that broke. No card required.
- Group batch: USD 100 a month. Fifteen to twenty learners. A regular teacher. Choose a batch time. Billed monthly.
- One to one: USD 150 a month. One child, one teacher. Times you choose. A plan around their ideas.

## Python turtle problems: common questions

### Why is import turtle not working?

A very common cause is a file of your own named turtle.py in the same folder, which Python imports instead of the real module. Rename it. If the error mentions _tkinter instead, this Python install is missing tkinter, which turtle needs.

### Why does my turtle window close immediately?

The program ended. Put turtle.done() as the last line, which the Python documentation says must be the last statement in a turtle graphics program, or use turtle.exitonclick() to close it with a click.

### How do you write text in Python turtle?

Use write(), for example t.write("Hello", align="center", font=("Arial", 18, "normal")). The text appears at the turtle's position. Convert numbers with str() before joining them to words.

### Why do my arrow keys not work in turtle?

Call screen.listen() after setting up onkey(), and click the turtle window once so it has the focus. The documentation says the screen must have the focus to register key events.

### Does turtle need tkinter?

Yes. The Python documentation says turtle graphics requires the tkinter optional module. The python.org installers for Windows and macOS include it, and running python -m tkinter shows a test window when it is working.

### Why does turtle say bad color string?

The color name is not one Tk recognizes, often a typo. Use a real name such as red or a hex code such as #33cc8c. For number triples up to 255, call screen.colormode(255) first.

### Does Python turtle work on a Chromebook?

Turtle needs a desktop window from tkinter, so it works where a full Python install with tkinter can run. On a school Chromebook that depends on how the device is set up, so ask your teacher which Python environment the class uses.

### Can you do my turtle assignment?

No. We explain why a program fails and teach the idea so the student can finish their own work. We never complete graded assignments.

### What times are classes for US families?

Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### How much do turtle and Python classes cost?

The first lesson costs nothing. After that you pay month by month for live teaching, and the fees section on this page shows the amount in US dollars.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): Our full set of pages for US families.
- [Online coding for US kids](/online-coding-classes-for-kids-usa): Classes for ages 6 to 14.
- [Python for 10 year olds](/python-for-10-year-olds): A starting point for fifth graders.
- [Python for 12 year olds](/python-for-12-year-olds): A starting point for seventh graders.
- [How to debug code](/how-to-debug-code): A method for any bug, turtle or not.
- [Student labs](/student-labs): Projects our learners have shipped.
- [Scratch not working](/scratch-not-working-help): Scratch not working? Saving, sign-in, school network and tablet fixes, from the Scratch Help Center.
- [MakeCode Arcade help](/makecode-arcade-help-for-students): MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.
- [Roblox Studio errors fixed](/roblox-studio-errors-fixed): Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.

## Contact

Book the free first class at [https://learn.modernagecoders.com/python-turtle-not-working](https://learn.modernagecoders.com/python-turtle-not-working#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
