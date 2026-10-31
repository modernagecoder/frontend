'use strict';
// Girls Who Code next step (ag- guide door; UK and US exams cluster Phase 2, row US076, writer group B16). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl -A "Mozilla/5.0" on 31 October
// 2026; copies in keyword-research-2026-09/uk-us-gap/src/girls-who-code-next-step/:
//  - Girls Who Code, Clubs Program (https:__girlswhocode.com_programs_clubs-program, clubs.txt): "Clubs are free programs
//    for all 3rd-12th graders of any skill level" (hyphen range written "grades 3 to 12"); clubs "can be integrated into
//    STEM-focused classes or take place after school, on weekends, or during the summer. Held in-person or entirely
//    online."; grades 3 to 5: "AI Literacy Unit using Teachable Machine" and a block-based coding editor, BlockJam, "our
//    easy to use, drag-and-drop interface. No prior experience is required"; grades 6 to 12: "self-guided video
//    tutorials", topics "web development, cybersecurity, game design, and artificial intelligence (AI)"; facilitators are
//    "teachers, librarians, parents, and volunteers"; "Many Facilitators have no technical experience and learn to code
//    alongside their Club members."
//  - Girls Who Code, Programs (programs.txt): Clubs "grouped by grades 3-5 and 6-12", "Beginner to Advanced", FREE,
//    "1-2 hours per week", "after school or on weekends during the school year"; College & Career Programs for
//    "College-aged students and early career professionals (18-25)", "Career and interview readiness"; Pathways "Flexible
//    self-paced learning", "Beginner to Intermediate", FREE.
//  - Girls Who Code, Pathways (pathways.txt): "our free year-round program"; tracks "game design, data science, AI,
//    cybersecurity, and web development"; community on Discord; eligibility grades 9 to 12 including rising 9th graders
//    and graduating seniors; "6-7 weeks to complete course projects at your own pace"; "We're 100% virtual"; "We accept
//    applications from students around the world."
//  - Girls Who Code, Start a Club (startclub.txt): host requirements: nonprofit host organization, "2-4 hours to plan and
//    host sessions each week", internet and hardware "Required for 6th-12th grade Clubs, optional for 3rd-5th grade
//    Clubs", background check, "I am age 18 or older."
//  - Girls Who Code, College Loops (loops.txt): "18 + years old", "Currently enrolled in a US-based college or university".
//  - Our own live page /coding-classes-for-girls offers a girls-only batch format or a mixed batch; matched, not extended.
// Our own material, labelled on the page: the block-to-Python translation (repeat 4: move 50, turn 90 -> a for loop),
// the club-poll counter program (votes list, dictionary count, Game design 3, Web 2, AI 1, run by us in Python 3), the
// five-exercise translation practice set and its answers, the twelve-week plan and the readiness stages.
// Lesson family: translating a block program into text code, one block at a time. Impact statistics on the GWC pages
// (gender and demographic figures) are deliberately not used (brief rule 7).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SQUARE = `# square.py (ours): the block program "repeat 4: move 50, turn 90", in Python
import turtle

pen = turtle.Turtle()
for side in range(4):      # the repeat block becomes a for loop
    pen.forward(50)        # "move 50 steps"
    pen.right(90)          # "turn 90 degrees"

turtle.done()`;

const POLL = `# club_poll.py (ours): count a club vote on which project to build next
votes = ["Game design", "Web", "Game design", "AI", "Web", "Game design"]

tally = {}
for choice in votes:
    tally[choice] = tally.get(choice, 0) + 1

for choice, count in sorted(tally.items(), key=lambda pair: -pair[1]):
    print(choice, count)

winner = max(tally, key=tally.get)
print("Next project:", winner)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AFTER A CLUB', blurb: 'What Girls Who Code Clubs and Pathways offer, from GWC\'s own pages, and how a club member moves from block code to real Python projects.' },
  slug: 'girls-who-code-next-step',
  code: 'gwcn',
  accent: '#3B5582',
  accentRationale: 'Girls Who Code next step: the allocated steady indigo #3B5582, the colour of an evening club laptop screen; about 7.3:1 on the #FBF8F2 paper, well above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  routeLabel: 'Girls Who Code next step',
  title: 'Girls Who Code Next Step: After a GWC Club or Pathways',
  description: 'Girls Who Code next step: what GWC Clubs and Pathways offer, from GWC\'s own pages, and how a club member moves from block code to real Python projects.',
  ogDescription: 'Your daughter loved her Girls Who Code Club. Here is what GWC itself offers next, by grade, and how to keep the momentum going between club meetings with steady, live coding lessons.',
  twitterDescription: 'After a Girls Who Code Club: Clubs, Pathways and College Loops by grade, plus a block-to-Python lesson.',
  pageName: 'Girls Who Code Next Step',
  webPageDescription: 'A parent and student guide to what comes after a Girls Who Code Club: the Clubs program by grade band, the free Pathways program for high school students, College Loops, how to start a club, and an original lesson on moving from block code to Python.',
  courseDescription: 'Live online coding classes for US girls in grades 3 to 12 who want steady weekly lessons alongside or after a Girls Who Code Club, including Princess Coders, our course designed for girls and women.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Girls Who Code next step',
  navLinks: [
    { href: '#clubs', label: 'GWC Clubs' },
    { href: '#ladder', label: 'GWC by grade' },
    { href: '#blocks', label: 'Blocks to Python' },
    { href: '#project', label: 'A club project' },
    { href: '#plan', label: 'Twelve weeks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 3 to 12 &middot; After a Girls Who Code Club',
  h1: 'Girls Who Code next step: keep the coding going',
  lede: 'A Girls Who Code Club meets for an hour or two a week and gives girls a friendly first taste of code. Many families then ask the same question: what should she do next? This guide sets out what Girls Who Code itself offers at each grade, in its own words, and then shows the most useful single skill a club member can learn next, which is turning a block program into real text code. Everything about GWC comes from girlswhocode.com, read on 31 October 2026.',
  secondaryCta: { href: '#blocks', label: 'See the block-to-Python lesson' },
  wa: 'Hello Modern Age Coders, my daughter in the US has been in a Girls Who Code Club and wants to keep coding. Could we book a free first class?',
  heroNote: 'Teaching coding and math live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Organiser', 'Girls Who Code (GWC)'],
    ['Clubs', 'Grades 3 to 12, free'],
    ['Club time', '1 to 2 hours a week'],
    ['Pathways', 'Grades 9 to 12, free, online'],
    ['Our course', 'Princess Coders and Python'],
    ['Our lessons', 'Live online, batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Girls Who Code runs free Clubs for students in grades 3 to 12, usually 1 to 2 hours a week, and a free online Pathways program for high school students. The natural next step after a club is steady weekly practice that moves from block code into Python and real projects. Modern Age Coders teaches that live online in Princess Coders, our course designed for girls and women, in a batch of 15 to 20 or 1-on-1. The first class is free.',

  picks: {
    eyebrow: 'Where to go after the club',
    h2: 'Three courses for a club member ready for more',
    lede: 'Each one picks up where an hour a week of club coding leaves off and turns it into a regular habit.',
    items: [
      { course: 'princess-coders-complete-coding-masterclass', code: 'GWCN / 01', title: 'Princess Coders', note: 'Our course designed for girls and women, from first program to finished projects.' },
      { course: 'python-ai-kids-masterclass', code: 'GWCN / 02', title: 'Python and AI for kids', note: 'The first text language after blocks, with turtle art and small games.' },
      { course: 'python-complete-masterclass-teens', code: 'GWCN / 03', title: 'Python for teens', note: 'For grades 8 to 12 heading toward Pathways-style projects.' }
    ]
  },

  sections: [
    {
      id: 'clubs', tint: 'tint', eyebrow: 'GWC Clubs',
      h2: 'What is a Girls Who Code Club, and what does it cover?',
      lede: 'A Girls Who Code Club is a free, regular meeting where students explore coding together with a facilitator. GWC says clubs are open to students in grades 3 to 12 of any skill level and can meet in person or online.',
      body: [
        { kind: 'two',
          leftH3: 'In GWC\'s own words',
          left: [
            'The Clubs page describes clubs as "free programs for all 3rd-12th graders of any skill level", and says they "can be integrated into STEM-focused classes or take place after school, on weekends, or during the summer. Held in-person or entirely online."',
            'The Programs page adds the practical detail families ask about: clubs are grouped into two bands, grades 3 to 5 and grades 6 to 12, run from beginner to advanced, and take 1 to 2 hours per week, after school or on weekends during the school year.'
          ],
          rightH3: 'Who leads a club',
          right: [
            'A club is led by a facilitator rather than a professional coding teacher. GWC lists facilitators as "teachers, librarians, parents, and volunteers", and says plainly that "Many Facilitators have no technical experience and learn to code alongside their Club members."',
            'That is a strength for confidence and community. It also explains why many club members reach a point where they want a teacher who can answer "why does my code do that?" straight away.'
          ] },
        { kind: 'table', mt: true, caption: 'The two Girls Who Code Club bands (girlswhocode.com Clubs and Programs pages, read 31 October 2026)', head: ['Band', 'What GWC says members do', 'Tools named by GWC'], rows: [
          ['Grades 3 to 5', 'Explore foundational computer science concepts and computational thinking through hands-on activities', 'BlockJam, a drag-and-drop block editor; an AI Literacy Unit using Teachable Machine'],
          ['Grades 6 to 12', 'Choose their own learning paths from a library of self-guided video tutorials', 'Projects in web development, cybersecurity, game design, and artificial intelligence (AI)'],
          ['Both bands', 'Free, beginner to advanced, 1 to 2 hours a week', 'In person or entirely online']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://girlswhocode.com/programs/clubs-program" rel="noopener" target="_blank">Girls Who Code Clubs Program</a> and <a class="ag-inline-link" href="https://girlswhocode.com/programs" rel="noopener" target="_blank">Girls Who Code Programs</a>, read 31 October 2026. Girls Who Code is a registered name of its owner. Modern Age Coders is an independent online school and is not connected with, endorsed by or a partner of Girls Who Code.' }
      ]
    },
    {
      id: 'ladder', tint: 'deep', eyebrow: 'GWC by grade',
      h2: 'What does Girls Who Code offer after a club, grade by grade?',
      lede: 'Girls Who Code has its own ladder: Clubs from grade 3, the Pathways program in high school, and College Loops and career programs after that. Knowing the ladder helps a family plan what to add at each stage.',
      body: [
        { kind: 'table', caption: 'Girls Who Code programs by stage (girlswhocode.com Programs, Pathways and College Loops pages, read 31 October 2026)', head: ['Stage', 'GWC program', 'Format and cost as published', 'Who it is for'], rows: [
          ['Grades 3 to 5', 'Clubs (younger band)', 'Free; 1 to 2 hours a week; in person or online', 'Any skill level'],
          ['Grades 6 to 12', 'Clubs (older band)', 'Free; self-guided video tutorials and projects', 'Beginner to advanced'],
          ['Grades 9 to 12', 'Pathways', 'Free, year-round, 100% virtual, self-paced; 6 to 7 weeks per course project', 'High school students, including rising 9th graders and graduating seniors'],
          ['Ages 18 to 25', 'College and Career Programs', 'Free; career exploration, interview readiness, leadership', 'College-aged students and early career professionals'],
          ['College', 'College Loops', 'Campus networks that meet during the school year', '18 + years old, enrolled at a US-based college or university']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Pathways, for high school',
          left: [
            'GWC calls Pathways "our free year-round program" and lists curriculum tracks in "game design, data science, AI, cybersecurity, and web development", with a community on Discord and optional partner events and career panels.',
            'The page gives "6-7 weeks to complete course projects at your own pace" and says "We\'re 100% virtual" and "We accept applications from students around the world." Students apply; check the Pathways page for the current application window.'
          ],
          rightH3: 'Starting a club yourself',
          right: [
            'If there is no club nearby, GWC lets adults start one. Its Start a Club page lists the requirements: a nonprofit host organization such as a school or library, "2-4 hours to plan and host sessions each week", internet access, a background check, and "I am age 18 or older."',
            'Hardware such as laptops, Chromebooks or iPads is, in GWC\'s words, "Required for 6th-12th grade Clubs, optional for 3rd-5th grade Clubs". A parent or teacher can start a club without coding experience.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://girlswhocode.com/programs/pathways" rel="noopener" target="_blank">GWC Pathways</a>, <a class="ag-inline-link" href="https://girlswhocode.com/get-involved/start-a-club" rel="noopener" target="_blank">GWC Start a Club</a> and <a class="ag-inline-link" href="https://girlswhocode.com/college-loops" rel="noopener" target="_blank">GWC College Loops</a>, read 31 October 2026. Program details change; always confirm on girlswhocode.com before applying.' }
      ]
    },
    {
      id: 'blocks', tint: 'tint', eyebrow: 'Blocks to Python',
      h2: 'How does a club member move from block code to Python?',
      lede: 'By translating one block at a time. A block program and a Python program say the same thing; Python simply writes it down in words and indentation. The worked example below is ours, written for a student who has used a drag-and-drop editor.',
      body: [
        { kind: 'two',
          leftH3: 'The block program (ours)',
          left: [
            'Picture a stack of four blocks: a "repeat 4" block, and inside it "move 50 steps" and "turn 90 degrees". Run it and the sprite draws a square, because four equal sides with four quarter turns bring it home.',
            'Ask the student first: why 90? Because a full turn is 360 degrees, and 360 / 4 = 90. Understanding that one line of arithmetic is what lets her change the shape later.'
          ],
          rightH3: 'The same idea in Python',
          right: [
            'The repeat block becomes a <b>for loop</b>. The blocks inside it become the indented lines under the loop. Moving becomes <b>forward</b> and turning becomes <b>right</b>.',
            'The single biggest change from blocks is that indentation now carries meaning. In blocks, a piece sits visibly inside the repeat; in Python, four spaces of indent put a line inside the loop.'
          ] },
        { kind: 'code', label: 'square.py (ours)', lang: 'Python', code: SQUARE, note: 'Run on our machine with Python 3 and its built-in turtle module: the pen draws a 50-step square and stops where it started.' },
        { kind: 'table', mt: true, caption: 'A translation table from common blocks to Python (ours)', head: ['Block idea', 'Python', 'What to watch'], rows: [
          ['repeat 4', '<code>for i in range(4):</code>', 'The colon and the indented lines below it'],
          ['forever', '<code>while True:</code>', 'Needs a way to stop, or the program never ends'],
          ['if touching edge', '<code>if x &gt; 200:</code>', 'A test that is either True or False'],
          ['set score to 0', '<code>score = 0</code>', 'One equals sign stores a value'],
          ['change score by 1', '<code>score = score + 1</code>', 'Read it right to left: add 1, store it back'],
          ['say "Hello"', '<code>print("Hello")</code>', 'Text needs quotation marks']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Change one number (ours).</b> Make the square bigger by changing 50 to 100. Nothing else changes, which shows which line controls size.',
          '<b>Change the shape.</b> For a triangle, repeat 3 times and turn 360 / 3 = 120 degrees. For a hexagon, repeat 6 times and turn 60.',
          '<b>Name the number.</b> Write <code>sides = 6</code> at the top, then <code>range(sides)</code> and <code>360 / sides</code>. Now one line changes the whole shape.',
          '<b>Break it on purpose.</b> Remove the indent from the turn line and run it. The pen draws one line and turns once, because the turn has left the loop. Seeing a mistake happen is how the rule sticks.'
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A club project',
      h2: 'What is a good first real project after a club?',
      lede: 'Something small, useful to the club itself and finished in a week. Counting a vote is ideal: the club decides what to build next, and the program tells them the winner. The program below is ours.',
      body: [
        { kind: 'code', label: 'club_poll.py (ours)', lang: 'Python', code: POLL, note: 'Run by us with Python 3: it prints Game design 3, Web 2, AI 1, then Next project: Game design.' },
        { kind: 'two', mt: true,
          leftH3: 'What each part teaches',
          left: [
            'The <b>list</b> holds every vote in order, exactly as the club called them out. The <b>dictionary</b> named tally keeps one count per choice, and <code>tally.get(choice, 0) + 1</code> means "the count so far, or zero if this is new, plus one".',
            'The sorted line prints the biggest count first. The last two lines pick the winner with <code>max</code>, using the counts to compare.'
          ],
          rightH3: 'Make it hers (ours)',
          right: [
            'Swap in the club\'s real choices: cybersecurity, data science, a website for the school library. Add a tie check: if two choices share the top count, print both and call a re-vote.',
            'Then make it ask for votes with <code>input()</code> until someone types "done". That one change turns a fixed script into a tool the club can actually use at its next meeting.'
          ] },
        { kind: 'table', mt: true, caption: 'Five short translation exercises with answers (ours; each checked in Python 3)', head: ['Exercise', 'A good answer', 'Why'], rows: [
          ['Draw a triangle with sides of 80', '<code>for i in range(3): forward(80); right(120)</code>', '360 / 3 = 120'],
          ['Say "Go!" five times', '<code>for i in range(5): print("Go!")</code>', 'range(5) runs 5 times'],
          ['Start a score at 10 and add 5 twice', '<code>score = 10</code>, then <code>score = score + 5</code> twice', 'The score ends at 20'],
          ['Print "Big" only if n is over 100', '<code>if n &gt; 100: print("Big")</code>', 'The test decides'],
          ['Count the letter a in "banana"', '<code>"banana".count("a")</code>', 'The answer is 3']
        ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Twelve weeks',
      h2: 'How can a girl keep coding between club meetings?',
      lede: 'With a short, regular routine and one project at a time. A club gives community; a weekly lesson and twenty minutes of home practice give steady progress. This twelve-week outline is ours.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 to 2 (ours).</b> Rebuild a favorite club project in blocks, then translate it into Python line by line using the table above.',
          '<b>Weeks 3 to 4.</b> Variables and loops in Python: shapes with turtle, a times-table printer, a countdown.',
          '<b>Weeks 5 to 6.</b> Decisions with if and else: a quiz that keeps score and a guessing game with hints.',
          '<b>Weeks 7 to 8.</b> Lists and dictionaries: the club poll above, then a reading log or a playlist sorter.',
          '<b>Weeks 9 to 10.</b> A project of her own choice, planned on paper first: what goes in, what comes out, what the user sees.',
          '<b>Weeks 11 to 12.</b> Finish, test with two friends, fix what they found, and show it at the next club meeting.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 3 to 5', p: 'Stay with blocks a little longer if she enjoys them, then try the square in Python. Short sessions, lots of drawing.' },
          { h3: 'Grades 6 to 8', p: 'Move fully to Python. Small games and quizzes keep it fun, and the club\'s video tutorials become easier to follow.' },
          { h3: 'Grades 9 to 12', p: 'Look at GWC Pathways tracks, and build a portfolio project in web development, data or AI with Python.' }
        ] },
        { kind: 'p', mt: true, html: 'Want more girls-focused options? Our <a class="ag-inline-link" href="/coding-classes-for-girls">coding classes for girls</a> page describes Princess Coders and the choice of a girls-only batch or a mixed batch, and our <a class="ag-inline-link" href="/technovation-girls-guide">Technovation Girls guide</a> covers a team challenge many club members enter.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where she is now',
    h2: 'Four stages from club coder to independent programmer',
    lede: 'Our own description of how a young coder grows, so you can tell what kind of help fits.',
    table: { caption: 'Stages of growing as a coder (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Follows along', 'Completes club activities step by step with the tutorial open'],
      ['2. Changes things', 'Edits numbers and text in a working program to see what happens'],
      ['3. Builds from a plan', 'Writes a small program from her own idea, with help on errors'],
      ['4. Debugs alone', 'Reads an error message, finds the line and fixes it herself']
    ] },
    left: { h3: 'For parents', ps: [
      'Most girls leave a beginner club somewhere between stages 1 and 2, which is exactly right. The jump to stage 3 is where a regular teacher helps most.',
      'Ask to see what she made rather than how long she spent. A finished small project is worth more than a long unfinished one.'
    ] },
    right: { h3: 'For students', ps: [
      'When code breaks, read the last line of the error first. It usually names the problem and the line number.',
      'Keep a notebook of mistakes you fixed. By week twelve it will be the most useful page you own.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Coding courses for girls in grades 3 to 12',
    lede: 'Live courses that take a curious beginner from blocks to real, shareable projects.',
    bands: [
      { num: 'I', h3: 'First code', sub: 'Grades 3 to 5', courses: [
        { code: 'GWCN / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Blocks done properly.' },
        { code: 'GWCN / A / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Thinking before typing.' },
        { code: 'GWCN / A / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI learns from data.' }
      ] },
      { num: 'II', h3: 'Text code', sub: 'Grades 5 to 8', courses: [
        { code: 'GWCN / B / 01', slug: 'princess-coders-complete-coding-masterclass', title: 'Princess Coders', blurb: 'Designed for girls.' },
        { code: 'GWCN / B / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI', blurb: 'Turtle art and games.' },
        { code: 'GWCN / B / 03', slug: 'kids-ai-web-development-course', title: 'Web for kids', blurb: 'A first real website.' }
      ] },
      { num: 'III', h3: 'Projects', sub: 'Grades 8 to 12', courses: [
        { code: 'GWCN / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Beginner to advanced.' },
        { code: 'GWCN / C / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity', blurb: 'White-hat defense.' },
        { code: 'GWCN / C / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Shipped games in Unity.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly coding lessons that build on club time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, on days that do not clash with club.' },
      { time: 'Weekends', l: 'Longer project sessions with time to finish.' },
      { time: '1-on-1', l: 'For a girl racing ahead or catching up.' }
    ],
    cells: [
      { h3: 'A real teacher', p: 'Errors explained on the spot.' },
      { h3: 'Blocks to text', p: 'A planned bridge into Python.' },
      { h3: 'One project a month', p: 'Something finished to show.' },
      { h3: 'Original exercises', p: 'Written by our teachers.' },
      { h3: 'Girls-only or mixed', p: 'The family chooses the batch.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects our young coders have built',
  projectsLede: 'Games, websites and small tools made by students in our classes. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Coding lessons are paid month by month, so a club member can try steady weekly classes for a term and continue only if she loves it.',
    free: ['A free first class', 'Bring a club project', 'No card needed'],
    group: ['Fifteen to twenty learners', 'The same teacher each week', 'Pick a batch time', 'Monthly'],
    one: ['One teacher, one student', 'Paced to her projects', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Girls Who Code next step: questions answered',
    items: [
      { q: 'What do you do after Girls Who Code?', a: 'Within Girls Who Code, high school students can apply to the free online Pathways program, and older students can join College Loops or career programs. Outside GWC, the most useful next step is regular practice that moves from block code into Python and finished projects.' },
      { q: 'Is Girls Who Code free?', a: 'Yes. Girls Who Code describes its Clubs, Pathways and College and Career programs as free on its Programs page. Clubs usually meet for 1 to 2 hours a week.' },
      { q: 'What grades can join a Girls Who Code Club?', a: 'GWC says clubs are for students in grades 3 to 12 of any skill level, grouped into a grades 3 to 5 band and a grades 6 to 12 band.' },
      { q: 'What is Girls Who Code Pathways?', a: 'Pathways is GWC\'s free, year-round, fully virtual program for high school students. It offers self-paced tracks in game design, data science, AI, cybersecurity and web development, with about 6 to 7 weeks per course project.' },
      { q: 'What language should she learn after club block coding?', a: 'Python is the usual first text language because its short, readable lines map neatly onto blocks. A repeat block becomes a for loop and the blocks inside it become indented lines.' },
      { q: 'Can a parent start a Girls Who Code Club?', a: 'Yes, if you meet GWC\'s requirements: a nonprofit host organization such as a school or library, 2 to 4 hours a week, internet access and devices, a background check, and being 18 or older. No coding experience is needed.' },
      { q: 'Do you have a coding course just for girls?', a: 'Yes. Princess Coders is our coding course designed for girls and women, and families can choose a girls-only batch or a mixed batch as described on our coding classes for girls page.' },
      { q: 'How is a class with you different from a club?', a: 'A club is a free, friendly community led by a facilitator who may be learning alongside the members. Our classes are taught by a coding teacher on a planned course, with homework and feedback each week. Many girls enjoy doing both.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Girls Who Code?', a: 'No. Modern Age Coders is an independent online school and has no connection with Girls Who Code. We describe GWC only from its own public pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for girls who code and their families.',
    items: [
      { href: '/coding-classes-for-girls', label: 'Coding classes for girls', p: 'Princess Coders and batch choices.' },
      { href: '/technovation-girls-guide', label: 'Technovation Girls guide', p: 'A team app challenge, explained.' },
      { href: '/computer-science-extracurriculars', label: 'Computer science extracurriculars', p: 'Clubs, contests and projects compared.' },
      { href: '/free-coding-programs-for-high-school-students', label: 'Free coding programs for high schoolers', p: 'No-cost options, side by side.' },
      { href: '/coding-classes-for-elementary-students', label: 'Coding for elementary students', p: 'Where grades 3 to 5 begin.' },
      { href: '/coding-classes-for-middle-school-students', label: 'Coding for middle school students', p: 'The move into Python.' },
      { href: '/python-games-for-kids', label: 'Python games for kids', p: 'Small projects to try next.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us her grade and what she built at club. If she has a project, bring it: the teacher will start from there.',
    readFirst: 'Before booking you might like to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Classes are live video lessons taught from India, scheduled around US school days and club evenings. WhatsApp reaches us fastest.',
    formNote: 'The first class costs nothing and we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'For girls who code', links: [
        { href: '/coding-classes-for-girls', label: 'Coding for girls' },
        { href: '/technovation-girls-guide', label: 'Technovation Girls' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/python-games-for-kids', label: 'Python games' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
        { href: '/free-coding-programs-for-high-school-students', label: 'Free programs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'repeat 4: move 50, turn 90'
  },

  personalityCss: `
.ag-root.ag-gwcn .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-gwcn .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-gwcn .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gwcn .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Girls Who Code pages read raw 31 October 2026: Clubs Program (free, grades 3 to 12, in person or online, BlockJam, Teachable Machine AI Literacy Unit, self-guided video tutorials, facilitators), Programs (grade bands, 1 to 2 hours a week, College and Career ages 18 to 25), Pathways (free year-round, tracks, 6 to 7 weeks, 100% virtual), Start a Club (requirements) and College Loops (18 +, US college).',
    localProject: 'Our block-to-Python square (repeat 4: move 50, turn 90 as a for loop), the translation table, the club_poll.py vote counter (Game design 3, Web 2, AI 1), five translation exercises with answers checked in Python 3, the twelve-week plan and the four coder stages. Lesson family: translating a block program into text code, one block at a time.',
    requiredMentions: ['free programs for all 3rd-12th graders of any skill level', 'Many Facilitators have no technical experience and learn to code alongside their Club members.', 'AI Literacy Unit using Teachable Machine', 'game design, data science, AI, cybersecurity, and web development', '6-7 weeks to complete course projects at your own pace', 'Required for 6th-12th grade Clubs, optional for 3rd-5th grade Clubs', 'repeat 4: move 50, turn 90', 'club_poll.py (ours)', 'tally.get(choice, 0) + 1'],
    sources: [
      { claim: 'Girls Who Code Clubs Program: who clubs serve, formats, grade-band curricula, facilitators.', url: 'https://girlswhocode.com/programs/clubs-program' },
      { claim: 'Girls Who Code Programs: grade bands, hours per week, College and Career ages.', url: 'https://girlswhocode.com/programs' },
      { claim: 'Girls Who Code Pathways: free year-round virtual program, tracks, project length.', url: 'https://girlswhocode.com/programs/pathways' },
      { claim: 'Girls Who Code Start a Club: host requirements.', url: 'https://girlswhocode.com/get-involved/start-a-club' },
      { claim: 'Girls Who Code College Loops: eligibility.', url: 'https://girlswhocode.com/college-loops' }
    ],
    rejectedClaims: [
      'GWC impact statistics (students reached, demographic shares, alumni major rates): not used, under the brief\'s rule against gender and identity statistics and unverifiable outcome claims.',
      'GWC Summer Immersion and self-paced summer program pages: the URLs tried returned 404 on 31 October 2026, so no summer program is described.',
      'Pathways eligibility is paraphrased as high school grades 9 to 12; GWC\'s exact eligibility wording is left on its own page.',
      'Any claim that our classes prepare a student for Pathways admission or a GWC award: none made; no affiliation, partnership or endorsement claimed.',
      'Girls-only batch: matched to our live /coding-classes-for-girls page, which offers a girls-only or mixed batch; no new format claimed.'
    ]
  }
};
