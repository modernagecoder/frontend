'use strict';
// Coding classes for adults in Canada (ag- market door; Canada cluster row 73).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Searches: coding for adults canada / career change to tech canada / web development course canada.
// Owner note for this row: no job, salary or career-outcome promises; say what skills are built and be honest about effort.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/coding-classes-for-adults-in-canada/):
//  - ontario.ca/page/how-make-websites-accessible (ontario-websites-accessible.html; footer "Updated: September 21, 2026"):
//    "As of January 1, 2021, the AODA requires you to make all public websites accessible if you are either: a designated
//    public sector organization or a business or non-profit organization with 50 or more employees"; "These requirements
//    only apply to websites and web content published on a website after January 1, 2012."; WCAG 2.0 "is an
//    internationally accepted standard for web accessibility developed by the World Wide Web Consortium (W3C)"; public
//    websites "must meet the WCAG 2.0 Level AA success criteria, except for: 1.2.4 (live captions) 1.2.5 (pre-recorded
//    audio descriptions)"; "In most cases, you must meet the Level A criteria before you can meet the required Level AA
//    criteria."; criteria names 1.1.1 Non-text content, 1.4.1 Use of color, 2.1.1 Keyboard, 2.4.2 Page titled, 3.1.1
//    Language of page, 3.3.2 Labels or instructions, 1.4.3 Contrast (Minimum). (Words split across tags in the raw HTML
//    were joined before grepping.) The ontario.ca e-Laws copy of O. Reg. 191/11 is JavaScript-only, so the regulation
//    itself is cited only as the page names it.
//  - docs.python.org/3/tutorial/index.html (python-tutorial.html): "Python is an easy to learn, powerful programming
//    language."; "The Python interpreter and the extensive standard library are freely available in source or binary
//    form for all major platforms"; "Be aware that it expects you to have a basic understanding of programming in
//    general."
//  - developer.mozilla.org/en-US/docs/Web/HTML (mdn-html.html): "HTML (HyperText Markup Language) is the most basic
//    building block of the Web. It defines the meaning and structure of web content."; appearance/presentation (CSS),
//    functionality/behavior (JavaScript).
//  - developer.mozilla.org/en-US/docs/Learn_web_development (mdn-learn.html): Designed to take you from "beginner" to
//    "comfortable" (not "beginner" to "expert"); getting-started modules for "complete beginners" "(i.e., you've not
//    installed a code editor or written any code yet)". The partner course's job line on that page is NOT used.
//  - Our course catalogue (content/courses/data): HTML and CSS for Beginners "4 months (16 weeks)", audience "Absolute
//    beginner, ages 10 to adult"; Python Masterclass "9-11 months (36-44 weeks)", "Complete beginner (18+)"; Full Stack
//    "12-14 months (48-56 weeks)", "Complete beginner; college students, graduates and career switchers (18+)".
//  - facts-geo.md section 3 (tzdb 2026e): offsets for the evening-class note.
// Our own material, labelled on the page: the effort table, the volunteer sign-up page (HTML) and the Python
// accessibility spot-check (run under CPython on 22 October 2026 against the HTML shown; it prints the two problems
// shown and "2 problem(s) found"), the skills map, the four-week trial plan and the evening-hour arithmetic
// (7:30 p.m. in Toronto in winter is 6:30 p.m. in Calgary and 5:30 p.m. in Vancouver).
// Lesson family: testing your own work against a written standard.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PAGE = `<!doctype html>
<html lang="en-CA">
<head>
  <meta charset="utf-8">
  <title>Riverside Rink Volunteers: winter schedule</title>
</head>
<body>
  <h1>Riverside Rink Volunteers</h1>
  <img src="rink.jpg" alt="The outdoor rink at dusk, lights on">
  <img src="logo.png">
  <form>
    <label for="email">Email for shift reminders</label>
    <input id="email" type="email">
    <input type="text" placeholder="Your name">
    <button>Sign me up</button>
  </form>
</body>
</html>`;

const CHECK = `# Our accessibility spot-check for one HTML file (a project from our adult web course)
from html.parser import HTMLParser
import sys

class Checker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.problems = []
        self.labelled = set()      # ids that a <label for="..."> points at
        self.inputs = []           # (id, type) of every <input>
        self.has_title = False
        self.lang = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        elif tag == "title":
            self.has_title = True
        elif tag == "img" and "alt" not in a:
            self.problems.append("image without alt text: " + a.get("src", "?"))
        elif tag == "label" and "for" in a:
            self.labelled.add(a["for"])
        elif tag == "input":
            self.inputs.append((a.get("id"), a.get("type", "text")))

    def report(self):
        if not self.lang:
            self.problems.append("no lang attribute on <html>")
        if not self.has_title:
            self.problems.append("no <title>")
        for input_id, kind in self.inputs:
            if input_id not in self.labelled:
                self.problems.append("input without a label: type=" + kind)
        return self.problems

checker = Checker()
with open(sys.argv[1], encoding="utf-8") as page:
    checker.feed(page.read())
problems = checker.report()
for p in problems:
    print("FIX:", p)
print(len(problems), "problem(s) found")`;

const CHECK_OUT = `$ python check_page.py index.html
FIX: image without alt text: logo.png
FIX: input without a label: type=text
2 problem(s) found`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ADULTS', blurb: 'Coding for adults in Canada: honest effort, Python and web development from the official docs, Ontario\'s website accessibility rules, and a project we teach.' },
  slug: 'coding-classes-for-adults-in-canada',
  code: 'adc',
  accent: '#9E212E',
  accentRationale: 'Coding classes for adults, Canada: a muted brick red #9E212E, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 7.31 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Coding classes for adults, Canada',
  title: 'Coding Classes for Adults in Canada: Python and Web, Live',
  description: 'Live online coding classes for adults in Canada: Python and web development from zero, the effort it really takes, Ontario\'s accessible-website rules, and a project.',
  ogDescription: 'Learning to code as an adult in Canada, without the hype: what Python and web development involve, how long our courses run, what Ontario requires of public websites, and one project we teach.',
  twitterDescription: 'Coding classes for adults in Canada: Python and web development, taught live, with honest timelines and no job promises.',
  pageName: 'Coding Classes for Adults in Canada',
  webPageDescription: 'A guide for adults in Canada who want to learn programming, covering Python and web development from the official documentation, the effort involved, Ontario website accessibility rules, and how Modern Age Coders teaches adults live online.',
  courseDescription: 'Live online coding classes for adults across Canada, from a first line of Python or HTML to full stack web development, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding classes for adults',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#effort', label: 'The effort' },
    { href: '#web', label: 'Web development' },
    { href: '#access', label: 'Accessibility rules' },
    { href: '#project', label: 'A project' },
    { href: '#change', label: 'Changing careers' }
  ],
  eyebrow: 'Canada &middot; Adults, 18 and over &middot; Python and web development',
  h1: 'Coding classes for adults in Canada',
  lede: 'Adults come to programming for many reasons: a job that keeps asking for spreadsheets that talk to each other, a small business website, a teenager who codes, a long-held curiosity, or a serious thought about changing careers. Whatever the reason, the work is the same: learning to break a problem into steps a computer can follow, then writing, testing and fixing those steps until they work. This page is honest about how long that takes, explains what Python and the three web languages actually do, sets out what Ontario requires of public websites, and shows one project from our adult classes in full.',
  secondaryCta: { href: '#project', label: 'See the project' },
  wa: 'Hello Modern Age Coders, I am an adult in Canada and I would like to learn to code. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['For', 'Adults, 18 and over'],
    ['Start from', 'No experience at all'],
    ['Languages', 'Python, HTML, CSS, JavaScript'],
    ['Taught', 'Live online, one teacher'],
    ['Format', 'Batch or one to one'],
    ['Classes', 'Eight live classes a month'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches adults in Canada to code from zero, live online, in a batch or one to one. Most begin with its Python Masterclass or its HTML and CSS for Beginners course, then move to Full Stack Web Development. Classes teach how to reason through a problem and test your own code, and we are plain that this takes months of steady practice and comes with no job promise.',

  picks: {
    eyebrow: 'Where adults start',
    h2: 'Three courses adults in Canada begin with',
    lede: 'One for general programming, one for building web pages from the first tag, and one for the longer road to complete web applications.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'ADC / 01', title: 'Python Masterclass, zero to advanced', note: 'For complete beginners aged 18 and over. Core Python, testing, files, APIs and automation, over nine to eleven months of live classes.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'ADC / 02', title: 'HTML and CSS for Beginners', note: 'Sixteen weeks from a first tag to a published multi-page website, with flexbox, grid and responsive layout.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'ADC / 03', title: 'Full Stack Web Development', note: 'For beginners and career switchers aged 18 and over: HTML to React, Node.js and databases over twelve to fourteen months.' }
    ]
  },

  sections: [
    {
      id: 'effort', tint: 'tint', eyebrow: 'The honest version',
      h2: 'What learning to code takes as an adult',
      lede: 'Advertising for coding courses often talks in weeks. Our own courses are measured in months, because that is how long it takes most adults with jobs and families to become comfortable. The figures below are our course lengths and our estimate of practice time, labelled as ours.',
      body: [
        { kind: 'table', caption: 'Time and effort in our adult courses (course lengths from our syllabuses; practice estimates are ours)', head: ['Course', 'How long it runs', 'Live classes', 'Practice we suggest between classes', 'What you can do at the end'], rows: [
          ['HTML and CSS for Beginners', '4 months (16 weeks)', 'Eight a month', 'Two to three hours a week', 'Build and publish a small multi-page site that works on a phone'],
          ['Python Masterclass', '9 to 11 months', 'Eight a month', 'Three to four hours a week', 'Write, test and fix programs that read files, call web APIs and automate repetitive tasks'],
          ['Full Stack Web Development', '12 to 14 months', 'Eight a month', 'Four to six hours a week', 'Build a web application with a front end, a server and a database, and put it online']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we promise',
          left: [
            'A regular teacher who reviews your code line by line, explains why a fix works, and expects you to explain it back. A clear syllabus, so you can see what is coming.',
            'Projects you write yourself, not code copied from a video or pasted from an AI tool. By the end of a course you have a body of work you understand.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'We do not promise a job, a salary, a promotion or a new career. We do not place students with employers. Anyone who promises those outcomes after a few months of classes is guessing.',
            'We also cannot make it quick. Adults who keep a steady weekly rhythm progress; adults who stop for a month usually need to repeat a few weeks. Both are normal.'
          ] }
      ]
    },
    {
      id: 'web', tint: 'deep', eyebrow: 'Web development',
      h2: 'Web development in plain words: what HTML, CSS and JavaScript do',
      lede: 'A web development course teaches three languages that do three different jobs. MDN Web Docs, the reference most web developers keep open, describes the split in one sentence each.',
      body: [
        { kind: 'table', caption: 'The three web languages, from MDN Web Docs (read 22 October 2026); the last column is ours', head: ['Language', 'What MDN says it does', 'What an adult beginner builds with it first'], rows: [
          ['HTML', '"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content."', 'Headings, paragraphs, links, images and a form, in a page that reads correctly with no styling at all'],
          ['CSS', 'Used to describe a web page\'s "appearance/presentation"', 'Colour, spacing and a layout that rearranges itself on a phone screen'],
          ['JavaScript', 'Used for a page\'s "functionality/behavior"', 'A button that shows or hides a section, or a form that checks an entry before it is sent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How far a course should take you',
          left: [
            'MDN describes its own learning area as designed to take you from "beginner" to "comfortable" (not "beginner" to "expert"). That is an unusually honest line, and it is the right expectation for a first course.',
            'Comfortable means you can build a page from a blank file, look things up in the documentation, and find your own mistakes. Expertise comes from years of building, which no course replaces.'
          ],
          rightH3: 'Where complete beginners start',
          right: [
            'MDN points complete beginners, meaning someone who has "not installed a code editor or written any code yet", to setup tutorials before anything else. Our first class does the same: we install a free editor together and write a first page in that first class.',
            'From there our HTML and CSS course spends sixteen weeks on structure and layout before any framework, because frameworks make far more sense once the basics are in your hands.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noopener" target="_blank">MDN, HTML</a> and <a class="ag-inline-link" href="https://developer.mozilla.org/en-US/docs/Learn_web_development" rel="noopener" target="_blank">MDN, Learn web development</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'python', tint: 'tint', eyebrow: 'Python',
      h2: 'Python as a first language for adults',
      lede: 'Python is the language most of our adult learners start with, whether they want to automate work, analyse data or build towards web applications.',
      body: [
        { kind: 'two',
          leftH3: 'What the Python documentation says',
          left: [
            'The official Python tutorial opens with: "Python is an easy to learn, powerful programming language." It adds that the interpreter and standard library "are freely available in source or binary form for all major platforms", so nothing has to be bought to start.',
            'The same tutorial warns: "Be aware that it expects you to have a basic understanding of programming in general." That sentence explains why many adults stall when they try to learn from the documentation alone.'
          ],
          rightH3: 'What a teacher adds',
          right: [
            'The tutorial assumes you already think like a programmer. A teacher builds that habit first: naming what a program needs as input, what it must produce, and the steps in between, before a line is typed.',
            'Then the documentation becomes useful rather than baffling. By the middle of our Python course, students look up a function in the official docs before asking, which is the skill that lasts.'
          ] },
        { kind: 'table', mt: true, caption: 'Skills our adult Python learners build, in the order we teach them (ours)', head: ['Stage', 'Skill', 'A small real task'], rows: [
          ['1', 'Variables, input and output, decisions', 'A program that asks for a distance in kilometres and prints it in miles'],
          ['2', 'Loops and lists', 'Reading a list of names and printing them sorted, with duplicates removed'],
          ['3', 'Functions and testing', 'Writing a function, then a test that proves it handles an empty list'],
          ['4', 'Files and text', 'Reading a CSV export from a spreadsheet and counting entries by month'],
          ['5', 'Libraries and web APIs', 'Fetching data from a public API and saving a tidy summary'],
          ['6', 'Automation', 'A script that renames and sorts a folder of files the same way every week']
        ] }
      ]
    },
    {
      id: 'access', tint: 'deep', eyebrow: 'A Canadian rule',
      h2: 'Accessible websites: what Ontario requires, and why it belongs in a web course',
      lede: 'Web development in Canada is not only about making a page look right. Ontario\'s accessibility law sets requirements for many public websites, and the Ontario government publishes a plain-language guide to them. We teach accessibility from the first page a student builds.',
      body: [
        { kind: 'table', caption: 'Website accessibility under Ontario\'s AODA, quoted from ontario.ca, How to make websites accessible (updated September 21, 2026, read 22 October 2026)', head: ['Point', 'What the Ontario page says'], rows: [
          ['Who must comply', '"As of January 1, 2021, the AODA requires you to make all public websites accessible if you are either" a designated public sector organization or "a business or non-profit organization with 50 or more employees".'],
          ['Which content', '"These requirements only apply to websites and web content published on a website after January 1, 2012."'],
          ['The standard', 'WCAG 2.0 "is an internationally accepted standard for web accessibility developed by the World Wide Web Consortium (W3C)".'],
          ['The level', 'Public websites must meet the WCAG 2.0 Level AA success criteria, except for "1.2.4 (live captions)" and "1.2.5 (pre-recorded audio descriptions)".'],
          ['The order', '"In most cases, you must meet the Level A criteria before you can meet the required Level AA criteria."'],
          ['Where it sits in law', 'The page points to the Information and Communications Standards of Ontario Regulation 191/11 under the AODA.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Five criteria a beginner can meet on day one',
          left: [
            'The Ontario page lists every WCAG 2.0 criterion by number. Five of them are within reach of anyone writing a first page: 1.1.1 Non-text content (text alternatives for images), 2.4.2 Page titled, 3.1.1 Language of page, 3.3.2 Labels or instructions, and 2.1.1 Keyboard.',
            'Our project below checks three of those automatically and leaves the other two for a human to test, which is the honest split.'
          ],
          rightH3: 'What this page is and is not',
          right: [
            'This is a summary of a government guide for learners, not legal advice. Whether a particular organisation must comply depends on its own situation, and the Ontario page and the regulation are the places to check.',
            'We are not connected with the Government of Ontario. We teach accessibility because a page that works for more people is simply a better page.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.ontario.ca/page/how-make-websites-accessible" rel="noopener" target="_blank">ontario.ca, How to make websites accessible</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'One project in full',
      h2: 'Project: a volunteer sign-up page and a Python accessibility spot-check',
      lede: 'This project, from our adult classes, joins web development and Python in one exercise. It is our own work, written for our students. First, a small page for an imaginary community rink. Then a Python script that reads the page and reports what a screen-reader user or keyboard user would stumble on.',
      body: [
        { kind: 'code', label: 'index.html &middot; the page, with two deliberate mistakes', lang: 'html', code: PAGE, note: 'The first image has alternative text and the email box has a label. The logo image has no alt attribute, and the name box relies on placeholder text instead of a label, which disappears as soon as someone types.' },
        { kind: 'code', label: 'check_page.py &middot; our spot-check', lang: 'python', code: CHECK, note: 'It uses only Python\'s standard library (html.parser), so there is nothing to install. It checks for a lang attribute, a title, alt text on every image and a label for every input.' },
        { kind: 'code', label: 'What the script prints for the page above', lang: 'text', code: CHECK_OUT },
        { kind: 'ol', mt: true, items: [
          '<b>Run it and read the two problems.</b> They match criteria named on the Ontario page: 1.1.1 Non-text content and 3.3.2 Labels or instructions.',
          '<b>Fix the page.</b> Add alt="Riverside Rink Volunteers logo" to the logo, and add a label with for="name" and an id="name" on the name box.',
          '<b>Run the script again.</b> It should print 0 problem(s) found. A passing script is not proof of an accessible page, only proof that these four checks pass.',
          '<b>Test by hand.</b> Put the mouse away and reach the button with the Tab key alone (2.1.1 Keyboard), then check that a colour is never the only clue to meaning (1.4.1 Use of color).',
          '<b>Extend it.</b> Add a check that every page has exactly one h1, and a check that link text is never just "click here". Each new rule is a short function and a test.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this project teaches',
          left: [
            'Reading a written standard and turning part of it into code. Writing a program that reads another program\'s output. Testing your own work rather than trusting how it looks.',
            'In one line: check your work against a written standard, and be honest about what the check cannot see.'
          ],
          rightH3: 'Why we do not let AI write it',
          right: [
            'An AI assistant could produce a checker in seconds. A learner who has not written one cannot tell whether that checker is right, and the fifth step, extending it, becomes impossible.',
            'Later in our courses adults do learn to work with AI coding tools, after they can read and judge every line those tools produce.'
          ] }
      ]
    },
    {
      id: 'change', tint: 'deep', eyebrow: 'Thinking of changing careers',
      h2: 'A career change into tech: what we can and cannot tell you',
      lede: 'Many adults who search for a career change to tech in Canada want to know whether it will work. We cannot answer that for anyone, and we will not pretend to. What we can offer is a way to find out whether you enjoy the work, and a clear picture of the skills involved.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 to 4: test the interest.</b> Take a month of live classes in Python or HTML and CSS. If you look forward to the practice, that is a meaningful signal. If it feels like a chore after a month, that is useful too.',
          '<b>Months 2 to 4: build three small things of your own.</b> A personal page, a script that saves you time at work, a tool for a club or family. Small, finished and yours.',
          '<b>Months 4 to 12: go deep on one road.</b> Web development, data work or general programming. Depth in one road teaches more than a tour of five.',
          '<b>Throughout: learn in public, carefully.</b> Keep your code in a Git repository with clear notes, so you can show how you think, not only what you finished.',
          '<b>Before any big decision: talk to people doing the work.</b> Employers, recruiters and working developers in your city know far more about hiring than any course provider, including us.'
        ] },
        { kind: 'table', mt: true, caption: 'Skills a programming course can build, and things it cannot (our assessment)', head: ['A course can build', 'A course cannot provide'], rows: [
          ['Breaking a problem into steps and writing them as code', 'A guarantee of employment or income'],
          ['Reading documentation and error messages', 'Years of experience inside a team'],
          ['Testing and debugging your own work', 'Knowledge of your local hiring market'],
          ['Using Git to keep and share code', 'A shortcut around steady practice'],
          ['A portfolio of projects you can explain line by line', 'Certainty that a change of career is right for you']
        ] }
      ]
    },
    {
      id: 'evenings', tint: 'tint', eyebrow: 'Classes after work',
      h2: 'Evening and weekend classes across Canadian time zones',
      lede: 'Most adult learners take classes after work or on a weekend. Because Canada spans six time zones, we agree a time in your own province\'s clock and check it again when the clocks change.',
      body: [
        { kind: 'p', html: 'A worked example, our arithmetic: an evening class at 7:30 p.m. in Toronto during winter 2026 to 2027 (Eastern time, UTC-5) is 6:30 p.m. in Calgary or Regina (UTC-6 all year) and 5:30 p.m. in Vancouver (UTC-7 all year), which may be too early for someone still at work on the coast. So we usually place West Coast adults later in their own evening, or on a weekend morning. Manitoba moves to UTC-5 all year from 1 November 2026, so Winnipeg and Toronto share a clock in winter and sit an hour apart after Eastern clocks go forward on 14 March 2027. Atlantic Canada runs an hour ahead of Eastern time, and Newfoundland ninety minutes ahead.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'After work', p: 'Weekday evening classes in your own time zone.' },
          { h3: 'Weekend mornings', p: 'A slower class with time for a longer exercise.' },
          { h3: 'Shift workers', p: 'One-to-one plans built around a rota that changes.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where an adult starts',
    h2: 'Four stages on the way to writing software',
    lede: 'Our stages, used in the first class to place each adult honestly.',
    table: { caption: 'From first line to own projects (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Following', 'Can copy a tutorial and get it running, but is lost when something differs from the video'],
      ['2. Adapting', 'Changes working code to do something new, and reads simple error messages'],
      ['3. Building', 'Starts from a blank file, plans the steps, and tests the result'],
      ['4. Owning', 'Finishes projects alone, uses documentation first, and can explain every line']
    ] },
    left: { h3: 'For beginners', ps: [
      'Many adults have spent years at stage 1 with free videos. The jump to stage 2 usually takes a few weeks with a teacher, because someone finally explains why the code works.',
      'Being slow at the start is normal for every adult. Speed comes from habits, not talent.'
    ] },
    right: { h3: 'For returning learners', ps: [
      'If you learned a little programming years ago, the first class finds where to rejoin, so you do not repeat what you still know.',
      'Bring any old code you have. Reading it together is the quickest placement there is.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine adult courses, from a first script to full applications',
    lede: 'Every course is taught live online by a regular teacher, in a batch or one to one, to adults in every province and territory.',
    bands: [
      { num: 'I', h3: 'Getting started', sub: 'No experience needed', courses: [
        { code: 'ADC / START / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Excel, Sheets and Power BI without writing code.' },
        { code: 'ADC / START / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python Automation', blurb: 'Scripts that take over repetitive work.' },
        { code: 'ADC / START / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Keeping and sharing code the way teams do.' }
      ] },
      { num: 'II', h3: 'Web development', sub: 'After HTML and CSS', courses: [
        { code: 'ADC / WEB / 01', slug: 'react-js-complete-masterclass-college', title: 'React Masterclass', blurb: 'Interactive front ends, after JavaScript.' },
        { code: 'ADC / WEB / 02', slug: 'python-web-development-django-flask-course', title: 'Python Web Development', blurb: 'Django and Flask for Python learners.' },
        { code: 'ADC / WEB / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and Databases', blurb: 'Designing and querying the data behind a site.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'For committed learners', courses: [
        { code: 'ADC / DEEP / 01', slug: 'data-science-complete-masterclass-college', title: 'Data Science', blurb: 'Python, statistics and machine learning.' },
        { code: 'ADC / DEEP / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java', blurb: 'Core Java to Spring Boot.' },
        { code: 'ADC / DEEP / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI Coding Agents', blurb: 'Working with Codex and Claude Code, for adults who already code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live coding classes built around adult schedules',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening classes after work, set in your province\'s time.' },
      { time: 'Weekends', l: 'Morning sessions for longer, quieter exercises.' },
      { time: '1-on-1', l: 'A private teacher, scheduled around your week.' }
    ],
    cells: [
      { h3: 'Your own code', p: 'Every exercise typed and run by you.' },
      { h3: 'Line-by-line review', p: 'A teacher reads your code and asks why.' },
      { h3: 'Real tools', p: 'A free code editor, Git and the official docs.' },
      { h3: 'Courses for adults', p: 'Our adult courses are written for learners aged 18 and over.' },
      { h3: 'Any province', p: 'Learners from Victoria to St. John\'s.' },
      { h3: 'Batch or one to one', p: 'A group of fifteen to twenty, or a teacher alone.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Learners of every age build real things in our classes. A selection is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more.',
  reviewsLede: 'Google reviews left by our learners and their families, quoted word for word.',

  fees: {
    h2: 'Fees',
    lede: 'You are billed once a month for eight live classes, each with code review. There is no contract for the length of the course: pay a month at a time and stop when you choose, which suits adults whose work and family weeks change.',
    free: ['A free first class', 'Set up your editor with the teacher', 'No card details asked for'],
    group: ['Fifteen to twenty adults in a batch', 'One teacher for the whole course', 'An evening or weekend slot of your choosing', 'Paid a month at a time'],
    one: ['A private teacher', 'Paced to your goals', 'Projects from your own work or interests']
  },

  faq: {
    eyebrow: 'Questions from adult learners in Canada',
    h2: 'Coding for adults: common questions',
    items: [
      { q: 'Am I too old to learn to code?', a: 'No. Our learners range from children to adults in their sixties, and adults bring patience and real problems to solve, which helps. What matters is steady practice, not age.' },
      { q: 'I have never written any code. Where do I start?', a: 'Most adults start with Python or with HTML and CSS. Python suits people who want to automate work or analyse data; HTML and CSS suit people who want to build websites. The first class helps you decide.' },
      { q: 'How long does it take to learn to code as an adult?', a: 'Our HTML and CSS course runs for sixteen weeks, the Python Masterclass for nine to eleven months, and Full Stack Web Development for twelve to fourteen months, with practice between classes. Comfortable takes months; expertise takes years of building.' },
      { q: 'Will your course get me a job in tech?', a: 'We make no job, salary or career promise, and we do not place students with employers. We teach the skills and help you build a portfolio you understand. Talk to employers and working developers in your area about hiring.' },
      { q: 'Is there a web development course for adults in Canada with no experience?', a: 'Yes. HTML and CSS for Beginners starts from a first tag and ends with a published multi-page site, and Full Stack Web Development is built for beginners and career switchers aged 18 and over.' },
      { q: 'Do your web courses cover accessibility?', a: 'Yes, from the first page. The Ontario government\'s guide says many public websites in Ontario must meet WCAG 2.0 Level AA, and we teach students to write pages that work with a keyboard and a screen reader.' },
      { q: 'Can I use AI tools while I learn?', a: 'In the early months we ask you to write code yourself, because you need to be able to judge what an AI tool produces. Later courses, such as our AI Coding Agents course for adults, teach working with those tools properly.' },
      { q: 'When are the classes, given the time zones?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We agree times in your own province\'s clock.' },
      { q: 'Are adult batches separate from children?', a: 'Yes. Adults learn with other adults, in batches of fifteen to twenty, or one to one with a private teacher.' },
      { q: 'Do I need an expensive computer?', a: 'No. Any recent laptop or desktop with a reliable internet connection is enough. Python and the code editor we use are free, and we install them together in the first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for adults in Canada who want to learn programming, data or AI.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have written for learners in Canada.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Our general guide for adult learners anywhere.' },
      { href: '/ai-classes-for-adults', label: 'AI classes for adults', p: 'Understanding and using AI tools well.' },
      { href: '/java-classes-for-adults', label: 'Java classes for adults', p: 'For adults drawn to Java.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning in Canada', p: 'Machine learning courses for Canadian learners.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Turning a problem into steps.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding what is wrong, calmly.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Canadian time zones in 2026', p: 'Class times after this year\'s clock changes.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class we install a free code editor together, write a first small program or page, and talk through what you want to build. You leave knowing which course fits and what the first month would cover.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class, and each <a class="ag-inline-link" href="/courses">course page</a> shows its full syllabus.',
    note: 'Your teacher works from India over live video, which is how our classes reach adults in every province. A WhatsApp message is the fastest way to ask us anything.',
    formNote: 'The first class costs nothing, and we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'Adults', links: [
        { href: '/coding-classes-for-adults', label: 'Coding classes for adults' },
        { href: '/ai-classes-for-adults', label: 'AI classes for adults' },
        { href: '/java-classes-for-adults', label: 'Java for adults' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python Masterclass' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Test it against the standard'
  },

  personalityCss: `
.ag-root.ag-adc .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-adc .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-adc .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-adc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-adc .ag-code-note { line-height: 1.6; }
.ag-root.ag-adc .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'ontario.ca How to make websites accessible (AODA, updated September 21, 2026): who must comply from January 1, 2021, content after January 1, 2012, WCAG 2.0 Level AA except 1.2.4 and 1.2.5, Level A before AA, the criteria list; the official Python tutorial (easy to learn, free for all major platforms, assumes a basic understanding of programming); MDN HTML and Learn web development (HTML as the basic building block, CSS presentation, JavaScript behaviour, beginner to comfortable, complete-beginner setup). All read raw on 22 October 2026.',
    localProject: 'Riverside Rink Volunteers sign-up page with two deliberate accessibility mistakes, and an original Python spot-check (html.parser, standard library only) that reports missing alt text and an unlabelled input, run on 22 October 2026 with the output shown; a five-step fix-and-extend sequence mapped to WCAG criteria named on the Ontario page; a six-stage Python skills table; an effort table from our own course lengths; a four-step career-change trial with no outcome promise. Lesson family: testing your own work against a written standard.',
    requiredMentions: ['Riverside Rink Volunteers', 'check_page.py', '2 problem(s) found', 'input without a label: type=text', 'business or non-profit organization with 50 or more employees', '1.2.5 (pre-recorded audio descriptions)', 'it expects you to have a basic understanding of programming in general', 'Five criteria a beginner can meet on day one', 'A course cannot provide', '7:30 p.m. in Toronto'],
    sources: [
      { claim: 'AODA website requirements: who must comply, content dates, WCAG 2.0 Level AA with two exceptions, criteria list.', url: 'https://www.ontario.ca/page/how-make-websites-accessible' },
      { claim: 'Python is easy to learn and freely available; the tutorial assumes a basic understanding of programming.', url: 'https://docs.python.org/3/tutorial/index.html' },
      { claim: 'HTML is the most basic building block of the Web; CSS for presentation, JavaScript for behaviour.', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { claim: 'MDN learning area takes learners from beginner to comfortable; setup modules for complete beginners.', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development' }
    ],
    rejectedClaims: [
      'Any job, salary, placement or career-outcome promise: refused on the owner\'s instruction; the page says so plainly.',
      'Labour-market or salary figures for developers in Canada: not used (Job Bank occupation URL returned 404; Statistics Canada blocked), and outcome numbers would read as a promise.',
      'The MDN partner course\'s job line: not reproduced.',
      'The text of Ontario Regulation 191/11: e-Laws is JavaScript-only, so the regulation is cited only as the ontario.ca guide names it, and the page says it is not legal advice.',
      'Government training credits or grants: not discussed (money content is out of scope for these pages).',
      'Any affiliation with the Government of Ontario, MDN or the Python Software Foundation: none.'
    ]
  }
};
