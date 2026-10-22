'use strict';
// Coding classes for seniors in Canada (ag- market door; Canada cluster row 74).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Search: coding for seniors canada. Owner note for this row: patient teaching, practical projects, accessibility.
// There is no dedicated seniors course in the catalogue, so the page picks beginner adult courses and says so.
// Accessibility is kept to interface features (text size, zoom, contrast, target size); no medical or condition language.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/coding-classes-for-seniors-in-canada/):
//  - w3.org/TR/WCAG22 (wcag22.html; "W3C Recommendation 12 December 2024"): 1.4.3 contrast "of at least 4.5:1", large
//    text "at least 3:1"; 1.4.4 "text can be resized without assistive technology up to 200 percent without loss of
//    content or functionality."; 2.5.8 Target Size (Minimum), marked New: "is at least 24 by 24 CSS pixels"; relative
//    luminance "L = 0.2126 * R + 0.7152 * G + 0.0722 * B", "if RsRGB <= 0.04045 then R = RsRGB/12.92 else R =
//    ((RsRGB+0.055)/1.055) ^ 2.4"; contrast ratio "(L1 + 0.05) / (L2 + 0.05)".
//  - docs.python.org/3/library/idle.html (python-idle.html): "IDLE is Python's Integrated Development and Learning
//    Environment."; Configure IDLE changes preferences for "fonts, indentation, keybindings, text color themes, startup
//    windows and size"; "On the Font tab, see the text sample for the effect of font face and size".
//  - docs.python.org/3/library/csv.html (python-csv.html): "The so-called CSV (Comma Separated Values) format is the most
//    common import and export format for spreadsheets and databases."
//  - cscircles.cemc.uwaterloo.ca (cscircles.html): "This website teaches computer programming."; "with programming you
//    can automate computer tasks, make art and music, interpret and analyze survey results, build tools for other
//    people, create custom websites, write games"; "We have chosen to teach Python since it is both simple enough for
//    beginners and powerful enough to be used by modern companies."; "Computer Science Circles is a free service of the"
//    Centre for Education in Mathematics and Computing.
//  - laws-lois.justice.gc.ca/eng/acts/A-0.6/page-1.html (accessible-canada-act-p1.html): purpose "the realization ... of
//    a Canada without barriers, on or before January 1, 2040"; the Minister's mandate is "the realization of a Canada
//    without barriers on or before January 1, 2040."
//  - facts-geo.md section 3 (tzdb 2026e) for the class-time note.
// Our own material, labelled on the page: the birthday reminder (Python, csv and datetime, run under CPython on 22 October
// 2026 with the CSV shown; prints Grandpa Joe in 8 days, Aunt Maureen in 12 days, Leo in 30 days), the contrast checker
// (WCAG 2.2 formulas; prints 16.65, 3.54 and 8.08 to 1 for the three pairs shown), the eight-week plan, the set-up
// checklist and the teaching principles.
// Lesson family: one small, useful program at a time, finished before the next.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CSV = `name,month,day
Aunt Maureen,11,3
Daniel,12,19
Priya,1,8
Grandpa Joe,10,30
Leo,11,21`;

const REMIND = `# Our birthday reminder: who has a birthday in the next 30 days?
import csv
from datetime import date

today = date(2026, 10, 22)        # fixed so the example always prints the same
window = 30                       # days ahead to look

coming_up = []
with open("birthdays.csv", newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        when = date(today.year, int(row["month"]), int(row["day"]))
        if when < today:                      # already passed this year
            when = date(today.year + 1, when.month, when.day)
        days_left = (when - today).days
        if days_left <= window:
            coming_up.append((days_left, row["name"], when))

for days_left, name, when in sorted(coming_up):
    print(f"{name}: {when.strftime('%A %d %B')} (in {days_left} days)")`;

const REMIND_OUT = `Grandpa Joe: Friday 30 October (in 8 days)
Aunt Maureen: Tuesday 03 November (in 12 days)
Leo: Saturday 21 November (in 30 days)`;

const CONTRAST = `# Our contrast checker, using the formulas in WCAG 2.2
def channel(c):
    c = c / 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4

def luminance(hex_colour):
    r, g, b = (int(hex_colour[i:i + 2], 16) for i in (1, 3, 5))
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)

def contrast(a, b):
    light, dark = sorted((luminance(a), luminance(b)), reverse=True)
    return (light + 0.05) / (dark + 0.05)

for text, background in [("#1C1814", "#FBF8F2"), ("#888888", "#FFFFFF"), ("#703F36", "#FBF8F2")]:
    ratio = contrast(text, background)
    verdict = "passes" if ratio >= 4.5 else "fails"
    print(f"{text} on {background}: {ratio:.2f} to 1, {verdict} 4.5 to 1")`;

const CONTRAST_OUT = `#1C1814 on #FBF8F2: 16.65 to 1, passes 4.5 to 1
#888888 on #FFFFFF: 3.54 to 1, fails 4.5 to 1
#703F36 on #FBF8F2: 8.08 to 1, passes 4.5 to 1`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'SENIORS', blurb: 'Coding for seniors in Canada: a patient pace, readable screens, a birthday reminder in Python and a contrast checker built on WCAG 2.2.' },
  slug: 'coding-classes-for-seniors-in-canada',
  code: 'sc',
  accent: '#703F36',
  accentRationale: 'Coding classes for seniors, Canada: a muted cedar brown #703F36, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 8.08 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Coding classes for seniors, Canada',
  title: 'Coding Classes for Seniors in Canada: Patient, Live Online',
  description: 'Coding for seniors in Canada, taught live online at a patient pace: readable screens, Python and web projects that are useful at home, and a full worked example.',
  ogDescription: 'Learning to code later in life, from anywhere in Canada. A slower pace, large readable text, one useful program at a time, and two complete projects: a birthday reminder and a colour contrast checker.',
  twitterDescription: 'Coding classes for seniors in Canada: patient live teaching, readable screens and practical projects.',
  pageName: 'Coding Classes for Seniors in Canada',
  webPageDescription: 'A guide for older adults in Canada who want to learn programming, covering a patient way to start, how to make the screen comfortable, practical Python and web projects, and how Modern Age Coders teaches live online.',
  courseDescription: 'Live online coding classes for older adults across Canada, starting from no experience, one to one or in a batch, with Python and web projects for everyday use.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding classes for seniors',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#pace', label: 'Our pace' },
    { href: '#screen', label: 'A readable screen' },
    { href: '#reminder', label: 'Project one' },
    { href: '#contrast', label: 'Project two' },
    { href: '#weeks', label: 'Eight weeks' }
  ],
  eyebrow: 'Canada &middot; Older adults &middot; Python and the web, at a patient pace',
  h1: 'Coding classes for seniors in Canada',
  lede: 'Plenty of people start programming after a working life in something else entirely. Some want to understand the technology their grandchildren talk about, some want a small tool that does a job at home, and some simply enjoy a puzzle that answers back. This page is for them. It explains how we pace classes for older beginners, how to make the screen easy to read before the first line of code, and walks through two complete projects from our classes: a birthday reminder written in Python, and a checker that tells you whether text on a web page is easy enough to read.',
  secondaryCta: { href: '#reminder', label: 'See the first project' },
  wa: 'Hello Modern Age Coders, I am a retiree in Canada and I would like to learn to code. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['For', 'Older adults, from no experience'],
    ['Pace', 'One idea per class'],
    ['Format', 'One to one or a batch'],
    ['Languages', 'Python, HTML and CSS'],
    ['Projects', 'Useful at home'],
    ['Screen', 'Large text, set up together'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to seniors across Canada, live online, one to one or in a batch, starting with Python or with HTML and CSS. We do not run a separate seniors course; we teach our beginner adult courses at a slower, patient pace, with large readable text, a recap at the end of each class, and small projects that are useful at home.',

  picks: {
    eyebrow: 'Gentle places to start',
    h2: 'Three beginner courses older learners choose',
    lede: 'None of these is a special seniors course. They are our courses for complete beginners, which we pace to suit each learner.',
    items: [
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'SC / 01', title: 'HTML and CSS for Beginners', note: 'Build and publish a small website of your own, perhaps family recipes or a club page. Written for absolute beginners, sixteen weeks.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'SC / 02', title: 'Python from zero', note: 'For complete beginners aged 18 and over. We slow the first months right down for older learners who want plenty of practice.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'SC / 03', title: 'Data and AI for Non-Programmers', note: 'Spreadsheets, charts and AI assistants without writing code, for learners who want practical skills before programming.' }
    ]
  },

  sections: [
    {
      id: 'pace', tint: 'tint', eyebrow: 'How we pace it',
      h2: 'A patient way to learn programming later in life',
      lede: 'Older beginners learn programming perfectly well. What usually goes wrong is the pace: courses written for students racing to a deadline pile up new words faster than anyone can absorb them. These are the principles we teach by, written by us.',
      body: [
        { kind: 'table', caption: 'How we teach older beginners (our principles)', head: ['Principle', 'What it means in a class'], rows: [
          ['One idea per class', 'A class introduces one new idea, such as a loop, and spends the rest of the hour using it in different ways.'],
          ['Plain words first', 'Every technical word is explained in everyday language before it is used, and kept on a running word list.'],
          ['Typing it yourself', 'You type every line. Watching someone else code feels like learning but rarely sticks.'],
          ['Mistakes on purpose', 'The teacher breaks a working program and you fix it, so error messages become familiar instead of frightening.'],
          ['A recap you write', 'The last minutes of each class go on writing down, in your own words, what was covered, plus one small exercise to try.'],
          ['Repeat without apology', 'Any idea can be taught again, in another way, as often as needed. Nobody is behind.'],
          ['Finish something useful', 'Every few weeks ends with a small program you will actually use, not an exercise thrown away.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why one to one often suits',
          left: [
            'Many older learners prefer a teacher to themselves at first, because the pace is entirely theirs and questions never feel like an interruption.',
            'Others enjoy learning alongside other adults in a batch of fifteen to twenty. Both work; the first class is a good time to decide.'
          ],
          rightH3: 'What you need at home',
          right: [
            'A laptop or desktop computer, a reliable internet connection, and a quiet place for an hour. A mouse often feels easier than a touchpad.',
            'Nothing needs to be bought. Python and the editor we use are free, and we install them together, step by step, during the first class.'
          ] }
      ]
    },
    {
      id: 'screen', tint: 'deep', eyebrow: 'Before the first line of code',
      h2: 'Making the screen comfortable to read',
      lede: 'Small grey text on a bright screen makes any lesson harder. We spend part of the first class making text larger and clearer, using settings that already exist. The web standards behind this are public, and so are Python\'s own settings.',
      body: [
        { kind: 'table', caption: 'Settings that make coding easier on the eyes, with the standard or documentation behind each (read 22 October 2026)', head: ['What to change', 'What the source says', 'How we do it in class'], rows: [
          ['Text size on web pages', 'WCAG 2.2 asks that text "can be resized without assistive technology up to 200 percent without loss of content or functionality."', 'Browser zoom: hold Ctrl (Command on a Mac) and press the plus key until reading is comfortable.'],
          ['Contrast between text and background', 'WCAG 2.2 sets a contrast ratio "of at least 4.5:1" for normal text, and at least 3:1 for large-scale text.', 'Dark text on a pale background in the editor; our second project below measures it.'],
          ['Buttons and links you can hit', 'WCAG 2.2 added a new criterion, Target Size (Minimum): a pointer target "is at least 24 by 24 CSS pixels", with some exceptions.', 'When you build web pages, we make buttons generous from the start.'],
          ['The Python editor\'s font', 'IDLE, "Python\'s Integrated Development and Learning Environment", lets you change "fonts, indentation, keybindings, text color themes, startup windows and size".', 'Options, then Configure IDLE, then the Font tab, where the documentation says to "see the text sample for the effect of font face and size".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A checklist for the first class',
          left: [
            'Zoom the browser so this page reads easily. Set the editor font to a size you can read from a relaxed sitting position. Choose a light or dark colour theme, whichever feels calmer.',
            'Turn up the volume on the video call, and if it helps, turn on the call\'s own captions. Keep a notebook and pen beside the keyboard.'
          ],
          rightH3: 'Why accessibility is part of the course',
          right: [
            'The settings that help you read your own code are the same ideas good web developers build into every page. Learners who build websites with us learn to meet these standards for other people too.',
            'Canada\'s federal Accessible Canada Act sets the aim of "a Canada without barriers, on or before January 1, 2040". Readable, usable websites are one small part of that.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.w3.org/TR/WCAG22/" rel="noopener" target="_blank">W3C, Web Content Accessibility Guidelines (WCAG) 2.2</a>, Recommendation of 12 December 2024; <a class="ag-inline-link" href="https://docs.python.org/3/library/idle.html" rel="noopener" target="_blank">Python documentation, IDLE</a>; <a class="ag-inline-link" href="https://laws-lois.justice.gc.ca/eng/acts/A-0.6/page-1.html" rel="noopener" target="_blank">Accessible Canada Act</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'why', tint: 'tint', eyebrow: 'What programming is for',
      h2: 'What older learners actually build',
      lede: 'Computer Science Circles, the free Python course from the Centre for Education in Mathematics and Computing at the University of Waterloo, opens with a list of what programming lets you do: "automate computer tasks, make art and music, interpret and analyze survey results, build tools for other people, create custom websites, write games". Our older learners pick from that list too.',
      body: [
        { kind: 'table', caption: 'Projects our older learners have chosen, grouped by interest (our examples)', head: ['Interest', 'A first project', 'A later project'], rows: [
          ['Family', 'A birthday reminder from a short list (project one below)', 'A family history website with photos and captions'],
          ['Garden and outdoors', 'A planting log that prints what was sown and when', 'A chart of first and last frost dates kept over several years'],
          ['Clubs and volunteering', 'A sign-up list that sorts names and removes duplicates', 'A simple website for the club, readable on any phone'],
          ['Reading and writing', 'A program that counts words in a chapter you wrote', 'A small collection of your stories, published as web pages'],
          ['Puzzles', 'A number-guessing game to play with grandchildren', 'A word puzzle that checks answers and keeps score'],
          ['Photos', 'A script that renames photos by the date they were taken', 'A web gallery that shows one album per page']
        ] },
        { kind: 'p', mt: true, html: 'Computer Science Circles explains its choice of language this way: "We have chosen to teach Python since it is both simple enough for beginners and powerful enough to be used by modern companies." We teach Python for the same reason, and we point learners to <a class="ag-inline-link" href="https://cscircles.cemc.uwaterloo.ca/" rel="noopener" target="_blank">Computer Science Circles</a> for extra practice between classes, which CEMC describes as a free service. Modern Age Coders is not connected with CEMC.' }
      ]
    },
    {
      id: 'reminder', tint: 'deep', eyebrow: 'Project one',
      h2: 'Project one: a birthday reminder in Python',
      lede: 'This is a project we wrote for our older beginners, usually around week six. It reads a short list of family birthdays from a file and prints the ones coming up in the next thirty days, soonest first.',
      body: [
        { kind: 'p', html: 'The list lives in a CSV file, the plain format spreadsheets can save. The Python documentation describes it as "the most common import and export format for spreadsheets and databases", so a learner can keep the list in a spreadsheet and save it as CSV.' },
        { kind: 'code', label: 'birthdays.csv &middot; the list (names made up)', lang: 'text', code: CSV },
        { kind: 'code', label: 'reminders.py &middot; our program', lang: 'python', code: REMIND, note: 'We fixed today\'s date at 22 October 2026 so the output below never changes. In real use, replace that line with today = date.today().' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: REMIND_OUT },
        { kind: 'ol', mt: true, items: [
          '<b>Read it aloud first.</b> Before running anything, the teacher and learner read the program line by line in plain English: open the file, look at each row, work out the next birthday, keep it if it is close.',
          '<b>Run it and compare.</b> Three names appear. Daniel (19 December) and Priya (8 January) are further than thirty days away, so they are left out.',
          '<b>Change one thing.</b> Set window to 60 and run it again. Daniel now appears, Priya still does not. This is how a learner discovers what a variable does.',
          '<b>Break it on purpose.</b> Add a line Sam,13,5 to the CSV. Python stops with an error, because there is no thirteenth month. Reading that message calmly is a skill in itself.',
          '<b>Ask the awkward question.</b> What happens to someone born on 29 February in a year that has no 29 February? Finding that out, and deciding what the program should do, is real programming.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this project teaches',
          left: [
            'Reading a file, looping over its rows, making a decision for each one, and sorting the results. Those four ideas sit underneath a surprising amount of everyday software.',
            'It also teaches the habit we care about most: change one thing, run it, see what happened.'
          ],
          rightH3: 'Where it can go next',
          right: [
            'Add anniversaries in a second column. Print how old each person will be. Later, turn the list into a small web page that shows the month ahead.',
            'Each step adds one small idea to a program that already works. We call that our rule for older beginners: one small, useful program at a time.'
          ] }
      ]
    },
    {
      id: 'contrast', tint: 'tint', eyebrow: 'Project two',
      h2: 'Project two: a colour contrast checker built on WCAG 2.2',
      lede: 'Older learners who build websites often care about readability more than anyone. This project, also ours, turns the contrast formula published in WCAG 2.2 into a short Python program that tells you whether text will be easy to read on its background.',
      body: [
        { kind: 'p', html: 'WCAG 2.2 defines relative luminance as "L = 0.2126 * R + 0.7152 * G + 0.0722 * B", after each colour channel is adjusted with the rule "if RsRGB <= 0.04045 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4". The contrast ratio is then "(L1 + 0.05) / (L2 + 0.05)", lighter colour on top. The program follows those three formulas exactly.' },
        { kind: 'code', label: 'contrast.py &middot; our checker', lang: 'python', code: CONTRAST, note: 'Colours are written as hex codes, the six-character form web pages use. The second pair, mid-grey on white, is the kind of pale text many websites still use.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: CONTRAST_OUT },
        { kind: 'two', mt: true,
          leftH3: 'Reading the result',
          left: [
            'Near-black on cream scores about 16.65 to 1, far above the 4.5 to 1 that WCAG 2.2 asks for normal text. Mid-grey on white scores 3.54 to 1 and fails, which is why so much small grey web text is tiring to read.',
            'The third pair is the colour used for headings on this page, and it passes with 8.08 to 1.'
          ],
          rightH3: 'Why a formula is a good first project',
          right: [
            'It shows that a published standard can be turned into code line by line, and that the code can be checked against the standard. Nothing is magic.',
            'Learners then use the checker on the colours of their own first website, before anyone else sees it.'
          ] }
      ]
    },
    {
      id: 'weeks', tint: 'deep', eyebrow: 'The first eight weeks',
      h2: 'An eight-week start for a complete beginner',
      lede: 'Our plan for an older learner starting Python one to one, with two classes a week. A group moves at the pace of the group, and any week can be repeated.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1:</b> set up the screen and the editor together; type a first line and see it run; learn what an error message looks like and that it is not your fault.',
          '<b>Week 2:</b> storing information in variables; asking a question with input and answering it with print; a greeting program that uses your name.',
          '<b>Week 3:</b> making decisions with if and else; a program that answers differently depending on the reply.',
          '<b>Week 4:</b> repeating with loops; a times-table printer; a number-guessing game to play with family.',
          '<b>Week 5:</b> lists of things; adding, removing and sorting a shopping list or a list of club members.',
          '<b>Week 6:</b> reading a file; the birthday reminder above, built step by step over both classes.',
          '<b>Week 7:</b> writing your own small functions, so a program reads like a set of named steps.',
          '<b>Week 8:</b> a project of your choice from the table above, finished and kept, with a talk about what comes next.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Short practice', p: 'Twenty to thirty minutes between classes is plenty, ideally on two different days.' },
          { h3: 'A notebook', p: 'Writing a new word and its meaning by hand helps it stay.' },
          { h3: 'No exams', p: 'The only test is whether your program does what you wanted.' }
        ] }
      ]
    },
    {
      id: 'times', tint: 'tint', eyebrow: 'Across Canada',
      h2: 'Class times for learners in every province',
      lede: 'Our teachers teach from India, which lets them cover hours across all of Canada\'s time zones. Times are agreed in your own local clock.',
      body: [
        { kind: 'p', html: 'Two clock changes affect learners this season. Eastern and Atlantic Canada, and Newfoundland, set their clocks back on Sunday 1 November 2026 and forward on Sunday 14 March 2027. British Columbia stays on UTC-7 all year, Alberta and Saskatchewan on UTC-6, and Manitoba moves to UTC-5 all year from 1 November 2026. If your grandchildren live in another province, a class time can look different on their clock than on yours, so we always state the time in your own zone and check it again after each change. Many retired learners like weekend mornings; others prefer a weekday slot. Both are available, and a one-to-one plan can move from week to week.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a learner starts',
    h2: 'Four stages for an older beginner',
    lede: 'Our stages, to place each learner kindly and honestly in the first class.',
    table: { caption: 'From first click to own programs (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Comfortable on the computer', 'Opens files, uses a browser and a video call, and can type steadily'],
      ['2. First programs', 'Types short programs from the teacher\'s example and runs them'],
      ['3. Changing programs', 'Alters a working program to do something new and reads simple error messages'],
      ['4. Own projects', 'Plans and writes a small useful program from a blank file']
    ] },
    left: { h3: 'If you are at stage 1', ps: [
      'That is a fine place to begin. The first classes include whatever computer basics you need, such as saving a file and finding it again.',
      'There is no hurry. Being comfortable with the computer makes every later week easier.'
    ] },
    right: { h3: 'If you used computers at work', ps: [
      'Years of spreadsheets, databases or office systems are a real head start: you already think in rows, columns and steps.',
      'The first class may move you straight to stage 2 or 3.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses older learners take with us',
    lede: 'All taught live online by a regular teacher, in a batch or one to one, at a pace we agree with you.',
    bands: [
      { num: 'I', h3: 'Without heavy coding', sub: 'Practical first', courses: [
        { code: 'SC / EASY / 01', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'Using AI assistants sensibly, and knowing their limits.' },
        { code: 'SC / EASY / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and Probability', blurb: 'Making sense of numbers in the news, no programming needed.' },
        { code: 'SC / EASY / 03', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL and charts for your own data.' }
      ] },
      { num: 'II', h3: 'Python', sub: 'After the first weeks', courses: [
        { code: 'SC / PY / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python Automation', blurb: 'Small scripts that save time every week.' },
        { code: 'SC / PY / 02', slug: 'python-web-development-django-flask-course', title: 'Python for the Web', blurb: 'Turning a Python program into a web page.' },
        { code: 'SC / PY / 03', slug: 'pcep-pcap-python-certification-course', title: 'Python Certification', blurb: 'For learners who like a clear goal to work towards.' }
      ] },
      { num: 'III', h3: 'Websites', sub: 'Building for others', courses: [
        { code: 'SC / WEB / 01', slug: 'mysql-database-complete-masterclass-college', title: 'Databases with MySQL', blurb: 'Keeping club or family records tidy and searchable.' },
        { code: 'SC / WEB / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Web Development', blurb: 'The long road to complete web applications.' },
        { code: 'SC / WEB / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Keeping every version of your work safe.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes at a pace that suits you',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'A regular slot on the days that suit your week.' },
      { time: 'Weekends', l: 'Unhurried morning classes.' },
      { time: '1-on-1', l: 'Your own teacher, at a time agreed with you.' }
    ],
    cells: [
      { h3: 'Large, clear text', p: 'Screen and editor set up for easy reading.' },
      { h3: 'Recaps', p: 'Each class ends by noting what was learned.' },
      { h3: 'Useful projects', p: 'Programs for home, family and clubs.' },
      { h3: 'Patient teachers', p: 'Questions welcome, repeats welcome.' },
      { h3: 'Every province', p: 'Learners from coast to coast to coast.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty adults, or a teacher alone.' }
    ]
  },

  projectsH2: 'Things our learners have built',
  projectsLede: 'Projects from learners of all ages are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has a wider collection.',
  reviewsLede: 'Reviews our learners and families posted on Google, reproduced without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Classes are paid monthly, eight live classes at a time, with no long commitment. Many older learners take a month, pause for travel or family, and come back: that is welcome.',
    free: ['A free first class', 'Screen and editor set up together', 'No card needed to book'],
    group: ['A batch of fifteen to twenty adults', 'The same teacher each class', 'Choose days that suit your week', 'Monthly payment'],
    one: ['A teacher just for you', 'Your own pace, always', 'Projects you choose']
  },

  faq: {
    eyebrow: 'Questions from older learners',
    h2: 'Coding for seniors: common questions',
    items: [
      { q: 'Is it too late to learn to code in retirement?', a: 'No. Programming rewards patience, care and curiosity, which many retired learners have in abundance. Our learners include adults in their sixties, and steady practice matters far more than age.' },
      { q: 'Do you have a special course for seniors?', a: 'Not a separate course. We teach our beginner courses, such as Python from zero or HTML and CSS for Beginners, at a slower pace for older learners, with a recap at the end of each class and as much repetition as each person wants.' },
      { q: 'I am not confident with computers. Can I still join?', a: 'Yes. The first classes include any computer basics you need, such as saving and finding files, and we set up everything together on the call.' },
      { q: 'Can you make the text bigger on screen?', a: 'Yes, and we do it in the first class. We use the browser\'s own zoom and the font settings in the Python editor, so text is large and clear before any coding starts.' },
      { q: 'What can I actually make?', a: 'Small programs that help at home: a birthday reminder, a planting log, a sorted list for a club, a game for grandchildren, or a simple family website. Each one is finished and kept.' },
      { q: 'Is one-to-one better than a group?', a: 'Many older learners start one to one so the pace is entirely their own, then some move to a batch of fifteen to twenty for company. Both work well.' },
      { q: 'What equipment do I need?', a: 'A laptop or desktop computer and a reliable internet connection. A mouse is often easier than a touchpad. The software we use is free.' },
      { q: 'When can classes be held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We give every time in your own province\'s clock.' },
      { q: 'Will there be tests or homework?', a: 'There are no exams. Each class ends with a short recap and one small optional exercise, usually twenty to thirty minutes of practice.' },
      { q: 'Can my grandchild and I learn together?', a: 'Our courses for children and our courses for adults are separate, but many grandparents and grandchildren take parallel courses and compare projects. We are happy to suggest matching courses.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for adult learners in Canada, and for their families.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for learners in every province.' },
      { href: '/java-classes-for-adults', label: 'Java classes for adults', p: 'A second language, once Python feels familiar.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Our general guide for adult beginners.' },
      { href: '/ai-classes-for-adults', label: 'AI classes for adults', p: 'Understanding AI tools without the hype.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Breaking a task into small steps.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'What to do when a program stops.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Canadian time zones in 2026', p: 'How this year\'s clock changes affect classes.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A look inside a live class.' },
      { href: '/student-labs', label: 'Student projects', p: 'Work from our learners.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is unhurried. We make the screen comfortable, install Python together, run a first short program, and talk about what you would like to make. You decide afterwards whether to continue.',
    readFirst: 'Would you like to read a little more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains what happens in a class, and the <a class="ag-inline-link" href="/courses">full course list</a> shows each syllabus.',
    note: 'Our teachers are in India and teach over live video, so you learn from your own home wherever you are in Canada. If you would rather message than fill in a form, WhatsApp reaches us quickly.',
    formNote: 'Booking the first class is free, with no payment details.'
  },

  footer: {
    cols: [
      { h4: 'Learning', links: [
        { href: '/java-classes-for-adults', label: 'Java for adults' },
        { href: '/coding-classes-for-adults', label: 'Coding for adults' },
        { href: '/ai-classes-for-adults', label: 'AI for adults' },
        { href: '/courses/html-css-course-for-beginners-build-real-websites', label: 'HTML and CSS for Beginners' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by province' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'One small program at a time'
  },

  personalityCss: `
.ag-root.ag-sc .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-sc .ag-lede { line-height: 1.7; }
.ag-root.ag-sc .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-sc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-sc .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-sc .ag-steps { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'W3C WCAG 2.2 Recommendation (12 December 2024): 1.4.3 contrast 4.5:1 and 3:1 for large text, 1.4.4 resize to 200 percent, 2.5.8 target size 24 by 24 CSS pixels, relative luminance and contrast ratio formulas; Python documentation for IDLE (font and theme settings) and the csv module; CEMC Computer Science Circles home page (what programming is for, why Python, free service); Accessible Canada Act purpose (a Canada without barriers on or before January 1, 2040). All read raw on 22 October 2026.',
    localProject: 'Birthday reminder in Python (csv and datetime, fixed date 22 October 2026, prints three names within 30 days), with a five-step read, run, change, break and question sequence; a contrast checker that implements the WCAG 2.2 luminance and contrast formulas, printing 16.65, 3.54 and 8.08 to 1 for three colour pairs; an eight-week plan for a complete beginner; a screen set-up checklist; a project table by interest. Lesson family: one small, useful program at a time.',
    requiredMentions: ['birthdays.csv', 'Grandpa Joe: Friday 30 October (in 8 days)', '#888888 on #FFFFFF: 3.54 to 1', 'One idea per class', 'Repeat without apology', 'reminders.py', 'contrast.py', 'a Canada without barriers, on or before January 1, 2040', 'the most common import and export format for spreadsheets and databases', 'interpret and analyze survey results'],
    sources: [
      { claim: 'WCAG 2.2 contrast, resize text and target size criteria; relative luminance and contrast ratio formulas.', url: 'https://www.w3.org/TR/WCAG22/' },
      { claim: 'IDLE is Python\'s Integrated Development and Learning Environment; font and theme settings.', url: 'https://docs.python.org/3/library/idle.html' },
      { claim: 'CSV is the most common import and export format for spreadsheets and databases.', url: 'https://docs.python.org/3/library/csv.html' },
      { claim: 'Computer Science Circles: what programming is for, why Python, a free CEMC service.', url: 'https://cscircles.cemc.uwaterloo.ca/' },
      { claim: 'Accessible Canada Act purpose: a Canada without barriers on or before January 1, 2040.', url: 'https://laws-lois.justice.gc.ca/eng/acts/A-0.6/page-1.html' }
    ],
    rejectedClaims: [
      'A dedicated seniors course: none exists in the catalogue, so the page says plainly that beginner courses are taught at a slower pace.',
      'Any medical, cognitive or health benefit of learning to code: not claimed (health content is out of scope).',
      'Population or survey figures about older Canadians online: not used (Statistics Canada blocked; no populations until it is pulled live).',
      'An upper age for learners: not printed.',
      'Scam or fraud-prevention advice: out of scope for these pages.',
      'Money projects such as budgets: avoided on purpose.',
      'Any affiliation with W3C, the Python Software Foundation, CEMC or the Government of Canada: none.'
    ]
  }
};
