'use strict';
// Python IndentationError explained (ag- Phase T school-tools door; US cluster row 153).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4): "indentation error python / colab indentation error"; autocomplete_tools.tsv has
// "google colab indentation error".
// Sources, fetched raw with curl on 17 October 2026 (docs.python.org/3 served the 3.15.0 documentation that day);
// raw copies in keyword-research-2026-09/us/src/python-indentation-error-explained/:
//  - library/exceptions.html: IndentationError is the "Base class for syntax errors related to incorrect indentation.
//    This is a subclass of SyntaxError."; TabError is "Raised when indentation contains an inconsistent use of tabs and
//    spaces." and "This is a subclass of IndentationError."
//  - reference/lexical_analysis.html (2.1.7 Blank lines, 2.1.8 Indentation): "Leading whitespace (spaces and tabs) at
//    the beginning of a logical line is used to compute the indentation level of the line"; tabs "are replaced (from
//    left to right) by one to eight spaces such that the total number of characters up to and including the
//    replacement is a multiple of eight"; the INDENT/DEDENT stack ("a single zero is pushed on the stack"; a smaller
//    level "must be one of the numbers occurring on the stack"); TabError when the meaning depends "on the worth of a
//    tab in spaces"; a line with only whitespace and possibly a comment "is ignored".
//  - tutorial/introduction.html: "indentation is Python's way of grouping statements"; "each line within a basic
//    block must be indented by the same amount."
//  - tutorial/controlflow.html: "Use 4-space indentation, and no tabs."; the pass statement "does nothing. It can be
//    used when a statement is required syntactically but the program requires no action."
//  - peps.python.org/pep-0008: "Use 4 spaces per indentation level."; "Spaces are the preferred indentation method.";
//    "Python disallows mixing tabs and spaces for indentation."
//  - whatsnew/3.10.html: "IndentationError: expected an indented block after 'if' statement in line 2" (3.10 wording).
//  - library/tabnanny.html: "Detection of ambiguous indentation"; intended "to be called as a script".
// Our own runs (labelled on the page), Python 3.13.6 on Windows 11, 17 October 2026, transcripts saved as
// our-run-python-3.13.6.txt and our-run-practice-set.txt: the five messages, the "on line N" wording of 3.13, the
// caret positions, python -m tabnanny output, and every fixed program (f1 prints 3, f3 prints "A B", f5 prints hi,
// the bracket continuation prints 7).
// Our own material: the indentation stack walk-through table, the seven-snippet practice set with answers (our
// practice, not anyone's graded work), the eight-step fix routine and the twelve-class plan.
// Lesson family: blocks and scope (how a program says which lines belong together).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BROKEN_FOR = `# quiz_score.py  (broken on purpose, ours)
score = 0
for answer in ["a", "b", "c"]:
score = score + 1
print(score)

# Our run, Python 3.13.6:
#   File "quiz_score.py", line 3
#     score = score + 1
#     ^^^^^
# IndentationError: expected an indented block
#   after 'for' statement on line 2`;

const FIXED_FOR = `# quiz_score.py  (fixed, ours)
score = 0
for answer in ["a", "b", "c"]:
    score = score + 1   # 4 spaces: inside the loop
print(score)            # back at 0: after the loop

# Our run prints: 3`;

const STACK = `# grade.py  (broken on purpose, ours)
def grade(points):
    if points >= 90:
        return "A"
      return "B"     # 6 spaces: matches no level

# Our run, Python 3.13.6:
#   File "grade.py", line 4
#     return "B"
#               ^
# IndentationError: unindent does not match
#   any outer indentation level`;

const PLACEHOLDER = `# Unfinished function: Python needs a statement
def greet():
    pass    # placeholder until you write the body

print("hi")

# Our run prints: hi
# Without the pass line, Python 3.13.6 says:
# IndentationError: expected an indented block
#   after function definition on line 1`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'PYTHON ERRORS', blurb: 'What every Python IndentationError and TabError message means, how Python counts spaces, and a seven-snippet practice set.' },
  slug: 'python-indentation-error-explained',
  code: 'piee',
  accent: '#8F4133',
  accentRationale: 'Python indentation errors, US Phase T: the allocated muted terracotta #8F4133 from alloc.tsv row 153, kept distinct from the other Phase T accents',
  pageType: 'market',
  market: US,
  routeLabel: 'Python indentation errors explained',
  title: 'Python IndentationError Explained: Every Message and Fix',
  description: 'Python IndentationError explained for students: what each message means, how Python counts spaces and tabs, the fix for every case, and a practice set.',
  ogDescription: 'Expected an indented block, unexpected indent, unindent does not match, TabError: what each Python message means and how to fix it, with our own practice set.',
  twitterDescription: 'Every Python IndentationError message, what it means, and how to fix it.',
  pageName: 'Python IndentationError Explained',
  webPageDescription: 'A guide for US students to the Python IndentationError and TabError messages, built from the Python documentation and our own runs of Python 3.13.6.',
  courseDescription: 'Live online Python classes for US students from Grade 3 to college, with a regular teacher, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Python indentation errors',
  navLinks: [
    { href: '#messages', label: 'The messages' },
    { href: '#counting', label: 'How Python counts' },
    { href: '#fix', label: 'Fix routine' },
    { href: '#practice', label: 'Practice set' },
    { href: '#editors', label: 'Editors' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 3 to college &middot; Python errors',
  h1: 'Python IndentationError explained',
  lede: 'An IndentationError is one of the first Python errors a new programmer meets, and its message rarely says what to change. This page reads each message the way Python means it, shows how Python actually counts the spaces at the start of a line, and gives a routine that fixes the error in any editor a US school uses, from IDLE and VS Code to a notebook in the browser. Every error message below comes from the Python documentation or from our own run of Python 3.13.6, and each one is labelled.',
  secondaryCta: { href: '#messages', label: 'Read the five messages' },
  wa: 'Hello Modern Age Coders, my child in the US keeps getting Python indentation errors and wants a teacher to explain blocks properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python from Grade 3 upward',
  spec: [
    ['For', 'Grade 3 to college'],
    ['Error family', 'IndentationError, TabError'],
    ['Parent class', 'SyntaxError'],
    ['Python tested', '3.13.6, our run'],
    ['Rule of thumb', '4 spaces, no tabs'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A Python IndentationError means the spaces at the start of a line do not fit the block structure Python expects: a block after a colon is missing, a line is indented for no reason, or a line steps back to a level that never existed. TabError, its subclass, means tabs and spaces were mixed. Re-indent the block with 4 spaces per level. Modern Age Coders teaches Python live to students from Grade 3 up, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn Python with a teacher',
    h2: 'Three Python courses where blocks are taught, not guessed',
    lede: 'Each course starts with the structure of a program, so indentation errors become rare rather than mysterious.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PIE / 01', title: 'Python and AI for kids', note: 'Grades 3 to 8. Turtle art, games, and blocks of code a child can see.' },
      { course: 'python-complete-masterclass-teens', code: 'PIE / 02', title: 'Python for teens', note: 'Ages 13 to 18. From the first loop to full projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PIE / 03', title: 'Python for college and adults', note: 'Ages 18 and up. Zero to advanced, live.' }
    ]
  },

  sections: [
    {
      id: 'messages', tint: 'tint', eyebrow: 'The messages',
      h2: 'Five messages, one family: what each IndentationError is telling you',
      lede: 'Python reports every indentation problem as an IndentationError or its stricter cousin, TabError. The Python documentation describes IndentationError as the "Base class for syntax errors related to incorrect indentation" and notes that it is a subclass of SyntaxError, which is why the program stops before a single line runs.',
      body: [
        { kind: 'table', caption: 'The messages, as printed by our run of Python 3.13.6 on 17 October 2026, and what each one means', head: ['Message', 'What Python found', 'The usual fix'], rows: [
          ['expected an indented block after \'for\' statement on line 2', 'A line ending in a colon (for, if, while, def, class, else) with no indented line under it', 'Indent the body 4 spaces, or write pass if the body is not ready'],
          ['unexpected indent', 'A line pushed right when nothing above it opened a block', 'Move the line back to the level of the line above'],
          ['unindent does not match any outer indentation level', 'A line stepped back to a column no earlier line used', 'Line it up exactly with the block it belongs to'],
          ['inconsistent use of tabs and spaces in indentation', 'Tabs and spaces mixed so that the meaning depends on tab width (this one is a TabError)', 'Convert the whole file to spaces'],
          ['expected an indented block after function definition on line 1', 'A def with only a comment, or nothing, underneath', 'Add the body, or pass as a placeholder']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the line number can point at the wrong line',
          left: [
            'Python reports the line where it noticed the problem, not the line you need to edit. For "expected an indented block", the line printed is the first line that should have been indented, and the line named at the end of the message is the one with the colon. Read both.',
            'When the block is empty and the file ends, our run pointed at a comment line: a line that holds only a comment is ignored by Python (the documentation says such a line "is ignored"), so a comment can never be the body of a loop or a function.'
          ],
          rightH3: 'Versions word it slightly differently',
          right: [
            'Python 3.10 added the extra context. Its release notes show the message as "IndentationError: expected an indented block after \'if\' statement in line 2", with the word "in".',
            'Our run of Python 3.13.6 printed "on line 2" instead. If your school laptop runs an older Python, the message may be shorter, but the meaning and the fix are the same.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://docs.python.org/3/library/exceptions.html" rel="noopener" target="_blank">Built-in Exceptions</a>, <a class="ag-inline-link" href="https://docs.python.org/3/whatsnew/3.10.html" rel="noopener" target="_blank">What is new in Python 3.10</a>, and our own runs of Python 3.13.6 on Windows 11 (file paths shortened to the file name). We are not connected with the Python Software Foundation.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'Broken, then fixed',
      h2: 'The most common case: a loop with no body',
      lede: 'A student counts quiz answers, presses Run, and gets an error before anything prints. The loop line ends in a colon, which promises a block, and the next line breaks the promise.',
      body: [
        { kind: 'code', label: 'Broken &middot; the loop body sits at the left margin', lang: 'python', code: BROKEN_FOR, note: 'The caret sits under the first word of line 3, the line that should have moved right. The end of the message names line 2, the line that opened the block.' },
        { kind: 'code', label: 'Fixed &middot; four spaces put the line inside the loop', lang: 'python', code: FIXED_FOR, note: 'The print line stays at the left margin on purpose: it runs once, after the loop. Indent it too and the program prints 1, 2 and 3 on separate lines, a logic change rather than an error.' },
        { kind: 'two', mt: true,
          leftH3: 'Indentation is meaning, not decoration',
          left: [
            'The Python tutorial puts it plainly: "indentation is Python&rsquo;s way of grouping statements." In many languages braces mark a block and spacing is only style. In Python, moving a line four spaces changes which block it belongs to.',
            'That is why the fixed program above and a version with print indented are both valid Python but do different things. The error only appears when the spacing makes no sense at all.'
          ],
          rightH3: 'What to check first',
          right: [
            'Find the line that ends in a colon just above the error. Every line that should run as part of that loop, if or function must start further right than the colon line, and all of them by the same amount.',
            'The tutorial states the same rule: "each line within a basic block must be indented by the same amount." Three spaces on one line and four on the next is enough to stop the program.'
          ] }
      ]
    },
    {
      id: 'counting', tint: 'tint', eyebrow: 'How Python counts',
      h2: 'How Python decides a line is inside a block: the indentation stack',
      lede: 'The Python language reference describes the exact rule, and once a student sees it, "unindent does not match any outer indentation level" stops being mysterious. Python keeps a stack of indentation levels, starting with a single zero, and compares each new line against the top of it.',
      body: [
        { kind: 'code', label: 'Broken &middot; a return that matches no level', lang: 'python', code: STACK, note: 'Line 4 starts at column 6. Python has only seen levels 0, 4 and 8, so it cannot tell which block the return belongs to.' },
        { kind: 'table', mt: true, caption: 'Our walk-through of grade.py using the stack rule in the Python language reference (2.1.8 Indentation)', head: ['Line', 'Leading spaces', 'Stack before the line', 'What Python does'], numCols: [1], rows: [
          ['1  def grade(points):', '0', '[0]', 'Equal to the top: nothing happens'],
          ['2  if points >= 90:', '4', '[0]', 'Larger: push 4, one INDENT'],
          ['3  return "A"', '8', '[0, 4]', 'Larger: push 8, one INDENT'],
          ['4  return "B"', '6', '[0, 4, 8]', 'Smaller, but 6 is not on the stack: IndentationError']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rule in the reference',
          left: [
            'The reference says that when a line is indented less than the one before, its level "must be one of the numbers occurring on the stack". Python pops levels until it reaches that number, producing one DEDENT for each.',
            'Moving line 4 to 4 spaces makes it a DEDENT back to the if level, which means "otherwise, return B". Our run of the fixed file prints A B for grade(95) and grade(70).'
          ],
          rightH3: 'Where tabs break the count',
          right: [
            'Tabs are worth a variable number of spaces: the reference says each tab is replaced by one to eight spaces so that the column becomes a multiple of eight. A tab at the start of a line counts as 8; four spaces and then a tab also count as 8.',
            'Two lines can therefore look identical on screen and mean different things. Python refuses to guess: if the meaning depends "on the worth of a tab in spaces", it raises TabError.'
          ] }
      ]
    },
    {
      id: 'fix', tint: 'deep', eyebrow: 'The fix routine',
      h2: 'Eight steps that fix any indentation error',
      lede: 'This is the routine our teachers walk students through, in this order. It works in IDLE, VS Code, PyCharm and browser notebooks, because it relies on Python\'s rules rather than any one editor.',
      body: [
        { kind: 'ol', items: [
          '<b>Read the last line of the error first.</b> It names the error type and, for a missing block, the line with the colon.',
          '<b>Go to the line the caret points at,</b> then look one line up. The problem is almost always between those two lines.',
          '<b>Find the block owner.</b> That is the nearest line above ending in a colon: for, while, if, elif, else, def, class, try, except or with.',
          '<b>Count the spaces.</b> Put the cursor at the start of each line in the block and read the column number most editors show in the status bar. Every line of one block must start in the same column.',
          '<b>Use 4 spaces per level.</b> The Python tutorial says "Use 4-space indentation, and no tabs." PEP 8, the Python style guide, says the same: "Use 4 spaces per indentation level."',
          '<b>Leave nothing empty.</b> If a loop or function body is not written yet, type pass on an indented line. A comment alone does not count.',
          '<b>Hunt for tabs.</b> If the error is a TabError, or the spacing looks right but Python disagrees, run python -m tabnanny on the file: it prints the line number and the line it finds ambiguous.',
          '<b>Run again and read again.</b> Fixing one indentation error often reveals the next one lower down, because Python stops at the first problem it finds.'
        ] },
        { kind: 'code', mt: true, label: 'Fixed &middot; pass holds the place of an unwritten body', lang: 'python', code: PLACEHOLDER, note: 'The Python tutorial describes pass as a statement that "does nothing" and can be used "when a statement is required syntactically but the program requires no action."' },
        { kind: 'two', mt: true,
          leftH3: 'What tabnanny printed for us',
          left: [
            'We ran python -m tabnanny on two of our broken files. It printed e4.py 3 followed by the line that began with a tab, and e7.py 4 followed by the line that used 8 spaces under tab-indented lines. That is the file, the line number and the exact line, which is all a student needs.',
            'The Python documentation describes tabnanny as a tool for the "Detection of ambiguous indentation", intended for the time being to be called as a script.'
          ],
          rightH3: 'What not to do',
          right: [
            'Do not press space until the error goes away. The error may vanish while the logic breaks, for example when a line that should run once ends up inside a loop.',
            'Do not paste a whole file into an AI chatbot and accept whatever comes back. We ask students to explain each block out loud first, because putting a block into words makes a misplaced line easier to spot.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Seven snippets: predict the message, then check',
      lede: 'Our own practice set, written for this page and run on Python 3.13.6. Cover the right-hand column, decide what Python will say, then compare. It is practice for the idea, not anybody\'s homework.',
      body: [
        { kind: 'table', caption: 'Practice set (ours): seven short programs and what our run of Python 3.13.6 printed', head: ['#', 'The program, line by line', 'What Python said'], numCols: [0], rows: [
          ['1', 'for i in range(3): / print(i) at the left margin', 'expected an indented block after \'for\' statement on line 1'],
          ['2', 'total = 0 / then total = total + 5 with one leading space', 'unexpected indent'],
          ['3', 'if True: / 4 spaces print("yes") / 2 spaces print("done")', 'unindent does not match any outer indentation level'],
          ['4', 'while False: / 4 spaces # nothing yet', 'expected an indented block after \'while\' statement on line 1'],
          ['5', 'def hello(): / 4 spaces then a one-line docstring', 'No error: a docstring is a statement, so the body is not empty'],
          ['6', 'class Pet: / a blank line / print("ok")', 'expected an indented block after class definition on line 1'],
          ['7', 'if name == "Ava": / 4 spaces print("Hi Ava") / else: / print("Who are you?") at the margin', 'expected an indented block after \'else\' statement on line 4']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Snippet 4 is the trap', p: 'The body holds only a comment, and Python ignores comment-only lines, so the loop has no body at all. Replace the comment with pass, or keep the comment and add pass under it.' },
          { h3: 'Snippet 5 is the surprise', p: 'A string on its own line is a real statement, so a function whose body is only a docstring is valid. Many students expect an error here; seeing why there is none teaches what a block really needs.' },
          { h3: 'Snippet 7 is the classic', p: 'else opens its own block, so it needs its own indented line. It is easy to fix the if half and forget that the else half follows exactly the same rule.' }
        ] }
      ]
    },
    {
      id: 'editors', tint: 'deep', eyebrow: 'In your editor',
      h2: 'Where indentation errors come from in school editors',
      lede: 'US students write Python in whatever their class uses: IDLE on a school laptop, VS Code at home, a notebook in Google Colab, or a browser editor the teacher assigned. The rules are Python\'s, but each setting has its own usual cause.',
      body: [
        { kind: 'table', caption: 'Common causes by setting (our teaching notes; the rules themselves come from the Python documentation)', head: ['Where you write Python', 'The usual cause', 'What to check'], rows: [
          ['Code copied from a web page or a PDF', 'Non-standard spaces, or tabs mixed with spaces', 'Delete the indentation and retype it with the Tab key in an editor set to spaces'],
          ['A notebook cell (Colab or Jupyter)', 'A cell pasted half from one source, half from another', 'Re-indent the whole cell, then run that one cell'],
          ['The interactive prompt (the >>> shell)', 'A compound statement not finished with a blank line', 'The tutorial says a compound statement typed interactively "must be followed by a blank line"'],
          ['Two editors on one file', 'One saves tabs, the other saves spaces', 'Run python -m tabnanny, then convert the file to spaces'],
          ['A long expression across lines', 'Worry that continuation lines need block indentation', 'Lines inside brackets may be indented freely; the reference says their indentation "is not important"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Make the editor help you',
          left: [
            'The tutorial notes that "all decent text editors have an auto-indent facility." Let the editor indent after a colon, and use its option to show whitespace, so a tab and four spaces stop looking the same.',
            'Many editors can convert a file\'s indentation to spaces in one command. Do that once per file and TabError disappears for good.'
          ],
          rightH3: 'A US classroom habit worth keeping',
          right: [
            'A student moving from block coding in elementary school to typed Python in middle or high school loses the visual nesting that blocks gave them. Indentation is that same nesting, written with spaces.',
            'Students who go on to Java, the language of our AP Computer Science A course, keep the same habit: Java marks blocks with braces, but well-indented Java is far easier to read and debug.'
          ] },
        { kind: 'source', html: 'Rules quoted from the <a class="ag-inline-link" href="https://docs.python.org/3/tutorial/introduction.html" rel="noopener" target="_blank">Python tutorial</a>, the <a class="ag-inline-link" href="https://docs.python.org/3/reference/lexical_analysis.html" rel="noopener" target="_blank">language reference</a> and <a class="ag-inline-link" href="https://peps.python.org/pep-0008/" rel="noopener" target="_blank">PEP 8</a>, read 17 October 2026. PEP 8 also says "Python disallows mixing tabs and spaces for indentation."' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'Learning it properly',
      h2: 'What a teacher changes: from fixing errors to reading structure',
      lede: 'Fixing one error at midnight is useful. Understanding blocks well enough that the errors stop is better, and that is what our classes aim for.',
      body: [
        { kind: 'table', caption: 'How we teach blocks across a first term of Python (our plan, adjusted for each learner)', head: ['Classes', 'What the student does', 'What it teaches about indentation'], rows: [
          ['1 to 2', 'First programs with if and else', 'A colon opens a block; the block is everything indented under it'],
          ['3 to 4', 'Loops that count and total', 'Which lines run every time, and which run once after'],
          ['5 to 6', 'Functions with return', 'Where a function ends, and why a return can end it early'],
          ['7 to 8', 'Nested loops and conditions', 'Reading three levels at once; the stack walk-through above'],
          ['9 to 10', 'A small project of their choice', 'Keeping a long file consistent: 4 spaces, no tabs'],
          ['11 to 12', 'Reading other people\'s code', 'Explaining a program block by block, out loud']
        ] },
        { kind: 'p', mt: true, html: 'We teach the concept so a student can solve their own school assignments; we do not write graded work for anyone. For a wider method that covers every kind of bug, see <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>, and for errors that happen while a program runs, <a class="ag-inline-link" href="/blog/exception-handling-in-python">exception handling in Python</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student is',
    h2: 'Four stages of reading indentation',
    lede: 'Find the row that sounds like you. The goal is stage 4.',
    table: { caption: 'Stages of understanding Python blocks (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Copier', 'Spacing matches an example, but the student cannot say why'],
      ['2. Fixer', 'Can clear an IndentationError by trial, sometimes breaking the logic'],
      ['3. Reader', 'Can say which lines belong to which block before running'],
      ['4. Designer', 'Plans blocks first, and indentation errors almost never appear']
    ] },
    left: { h3: 'For parents', ps: [
      'Indentation errors are a sign your child is writing real Python, not a sign they are bad at it. Every programmer has met them.',
      'Ask your child to explain one block of their code to you. If they can, they are past stage 2.'
    ] },
    right: { h3: 'For students', ps: [
      'Read the colon line and the line under it before touching anything. The message is pointing at one of the two.',
      'Pick 4 spaces and never mix in a tab. That one habit removes TabError for good.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses where Python structure matters',
    lede: 'Live online, with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Grades 3 to 8', courses: [
        { code: 'PIE / KID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle drawings, games, first blocks.' },
        { code: 'PIE / KID / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Nesting you can see, before typed code.' },
        { code: 'PIE / KID / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Loops and conditions on real maths.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'PIE / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Every block type, then projects.' },
        { code: 'PIE / TEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Nested loops that stay readable.' },
        { code: 'PIE / TEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Notebooks, pandas, clean cells.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Ages 13 and up', courses: [
        { code: 'PIE / PRO / 01', slug: 'pcep-pcap-python-certification-course', title: 'Python certification prep', blurb: 'PCEP and PCAP, syntax rules included.' },
        { code: 'PIE / PRO / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for college and adults', blurb: 'Zero to advanced for ages 18 and up.' },
        { code: 'PIE / PRO / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java blocks, braces and style.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Python classes that fit a US school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your time zone, in a batch.' },
      { time: 'Weekends', l: 'A calmer slot for longer projects.' },
      { time: '1-on-1', l: 'Built around your own schedule.' }
    ],
    cells: [
      { h3: 'One teacher, every week', p: 'Someone who knows your code.' },
      { h3: 'Your editor', p: 'IDLE, VS Code or a notebook.' },
      { h3: 'Bring the error', p: 'We start from what broke.' },
      { h3: 'Concept, not answers', p: 'You solve your own assignments.' },
      { h3: 'Online, any state', p: 'From home, coast to coast.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty, or just you.' }
    ]
  },

  projectsH2: 'Python projects our students built',
  projectsLede: 'Programs written by learners who once stared at their first IndentationError too. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' Google reviews, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Python costs nothing to install, and every editor named here has a free version. The fee covers live teaching, billed one month at a time in US dollars, with no semester contract and nothing owed once you stop.',
    free: ['A free first lesson', 'Bring the error that stopped you', 'No card asked for'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Pick the batch that suits you', 'Paid monthly'],
    one: ['A teacher for you alone', 'Times that suit you', 'Your own pace and projects']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'Python indentation errors: common questions',
    items: [
      { q: 'What does IndentationError mean in Python?', a: 'It means the spaces at the start of a line do not fit the block structure Python expects. The Python documentation describes IndentationError as the base class for syntax errors related to incorrect indentation, and it is a subclass of SyntaxError, so nothing runs until it is fixed.' },
      { q: 'How do I fix "expected an indented block"?', a: 'Find the line ending in a colon that the message names, and indent the line under it by 4 spaces. If the body is not written yet, put pass on an indented line. A comment on its own does not count as a body.' },
      { q: 'What does "unexpected indent" mean?', a: 'A line starts further right than it should, even though nothing above it opened a block. Move it back to line up with the line before it.' },
      { q: 'What does "unindent does not match any outer indentation level" mean?', a: 'A line stepped back to a column that no earlier line used, so Python cannot tell which block it belongs to. Line it up exactly with the block it should join, usually 4 spaces per level.' },
      { q: 'What is a TabError?', a: 'It is a subclass of IndentationError, raised when indentation mixes tabs and spaces inconsistently. Convert the whole file to spaces. Running python -m tabnanny on the file shows the line it finds ambiguous.' },
      { q: 'Should I use tabs or spaces in Python?', a: 'Spaces. The Python tutorial says to use 4-space indentation and no tabs, and PEP 8, the Python style guide, calls spaces the preferred indentation method.' },
      { q: 'Why do I get an indentation error in Google Colab?', a: 'Colab runs ordinary Python, so the same rules apply inside each cell. The usual cause is pasted code with mixed spacing. Re-indent the whole cell with 4 spaces per level and run that cell again.' },
      { q: 'Can you just fix my homework code?', a: 'No. We teach the concept so you can solve your own assignments, and we never write graded work. In a lesson, a teacher will walk through your error with you until you can fix it yourself.' },
      { q: 'What times are classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Python classes cost?', a: 'The first lesson is free. After that, families pay for one month of live teaching at a time, and the fees section of this page shows the current monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for US students learning Python.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have written for US families.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method for bugs beyond indentation.' },
      { href: '/blog/exception-handling-in-python', label: 'Exception handling in Python', p: 'Errors that appear while a program runs.' },
      { href: '/python-for-14-year-olds', label: 'Python for 14 year olds', p: 'Where a high school freshman can start.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'The AP course many students meet first.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson, step by step.' },
      { href: '/python-turtle-not-working', label: 'Python turtle not working', p: 'Python turtle not working? The real errors, the fixes, and how to write text.' },
      { href: '/scratch-not-working-help', label: 'Scratch not working', p: 'Scratch not working? Saving, sign-in, school network and tablet fixes, from the Scratch Help Center.' },
      { href: '/makecode-arcade-help-for-students', label: 'MakeCode Arcade help', p: 'MakeCode Arcade help: jumping, gravity, tilemap levels and lost projects.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send us the error your student is stuck on, or the course they are taking at school. The first lesson works through it together.',
    readFirst: 'Curious how a class runs? Our page on <a class="ag-inline-link" href="/how-we-teach">teaching method</a> describes one, and the <a class="ag-inline-link" href="/courses">course list</a> shows each syllabus in full.',
    note: 'Lessons are live on video with teachers based in India, so there is no local center to visit; we schedule around US time zones. WhatsApp is the fastest way to reach us.',
    formNote: 'The first lesson is free and needs no payment details.'
  },

  footer: {
    cols: [
      { h4: 'Python help', links: [
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/blog/exception-handling-in-python', label: 'Python exceptions' },
        { href: '/blog/python-for-beginners', label: 'Python for beginners' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/python-for-13-year-olds', label: 'Python for 13 year olds' },
        { href: '/python-for-16-year-olds', label: 'Python for 16 year olds' }
      ] }
    ],
    bottomRight: 'A colon opens a block; four spaces fill it'
  },

  personalityCss: `
.ag-root.ag-piee .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-piee .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-piee .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-piee .ag-table caption { text-align: left; }
.ag-root.ag-piee .ag-steps { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Python documentation (docs.python.org/3, served as 3.15.0 on 17 October 2026) and PEP 8, read raw: IndentationError "Base class for syntax errors related to incorrect indentation", subclass of SyntaxError; TabError "Raised when indentation contains an inconsistent use of tabs and spaces", subclass of IndentationError; the indentation stack and tab-to-spaces rule in the language reference 2.1.8; comment-only lines ignored (2.1.7); "Use 4-space indentation, and no tabs."; PEP 8 "Use 4 spaces per indentation level." and "Python disallows mixing tabs and spaces for indentation."; the 3.10 message wording "in line 2"; tabnanny.',
    localProject: 'Our own runs of Python 3.13.6 on Windows 11 (17 October 2026): five messages with caret positions, the 3.13 "on line N" wording, python -m tabnanny output (e4.py 3, e7.py 4), fixed programs that print 3, A B, hi and 7. Our indentation-stack walk-through table for grade.py, a seven-snippet practice set with answers, an eight-step fix routine and a twelve-class plan. Lesson family: blocks and scope.',
    requiredMentions: ['Base class for syntax errors related to incorrect indentation', 'unindent does not match any outer indentation level', 'inconsistent use of tabs and spaces in indentation', 'expected an indented block after function definition on line 1', 'Use 4-space indentation, and no tabs.', 'Python disallows mixing tabs and spaces for indentation.', 'must be one of the numbers occurring on the stack', 'python -m tabnanny', 'Python 3.13.6', 'Detection of ambiguous indentation', 'Snippet 5 is the surprise'],
    sources: [
      { claim: 'IndentationError and TabError definitions and their place under SyntaxError.', url: 'https://docs.python.org/3/library/exceptions.html' },
      { claim: 'The indentation stack, tab replacement rule, TabError condition, comment-only lines ignored, continuation lines.', url: 'https://docs.python.org/3/reference/lexical_analysis.html' },
      { claim: 'Indentation groups statements; each line in a block indented the same amount; blank line after an interactive compound statement; auto-indent.', url: 'https://docs.python.org/3/tutorial/introduction.html' },
      { claim: 'Use 4-space indentation and no tabs; the pass statement.', url: 'https://docs.python.org/3/tutorial/controlflow.html' },
      { claim: 'PEP 8: 4 spaces per level, spaces preferred, mixing disallowed.', url: 'https://peps.python.org/pep-0008/' },
      { claim: 'Python 3.10 added the block context to IndentationError messages.', url: 'https://docs.python.org/3/whatsnew/3.10.html' },
      { claim: 'tabnanny detects ambiguous indentation and is run as a script.', url: 'https://docs.python.org/3/library/tabnanny.html' }
    ],
    rejectedClaims: [
      'Which Python version a given US school or editor ships: not published in any source read, so the page only says older versions may word the message differently.',
      'That Colab or any notebook changes the indentation rules: no source says so; the page says the same Python rules apply in each cell.',
      'That any editor converts tabs automatically by default: editor defaults vary and were not checked, so the page only says many editors offer a convert command.',
      'Solutions to any school assignment: none given; the practice set is ours and the page says we never write graded work.',
      'Any affiliation with the Python Software Foundation: none, and the page says so.'
    ]
  }
};
