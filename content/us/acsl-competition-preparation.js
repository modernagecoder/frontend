'use strict';
// ACSL competition preparation (ag- competition door; US cluster Phase 3, row 37).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/acsl-competition-preparation/):
//  - acsl.org (home): "Registration for 2026-27 is now open! Contest #1 will be available on Oct 19th."; contests for K-12
//    schools, organizations and local groups; "49th year of continuous operation"; "over 7,000 students from 21 countries on
//    6 continents"; four contests a season; upper divisions add a problem "using Python, C++ or Java"; online Finals; a
//    Summer Programming Challenge.
//  - /get-started/divisions: "ACSL has five divisions" (Senior, Intermediate, Junior, Classroom, Elementary); 5-score teams
//    up to 10 on the roster, 3-score up to 6; one team per student, no change after Contest #1; Senior/Intermediate/Junior:
//    30-minute, 6-question short answer test plus a programming problem solved in 72 hours; "No student beyond grade 9 may
//    compete in the Junior Division."; Classroom: 50-minute, 10-question test; Elementary: grades 3 - 6, 30-minute,
//    6-question non-programming test on one category.
//  - /get-started/schedule: Contest #1 "available Oct. 19, 2026; closes Sunday January 10, 2027"; #2 Jan. 4 to February 28,
//    2027; #3 Feb. 1 to April 11, 2027; #4 March 1 to May 23, 2027; invitations May 1 to May 28, 2027; Finals Saturday,
//    May 29, 2027.
//  - /get-started/study-materials: topics by contest and division (Number Systems, Recursive Functions, What Does This
//    Program Do?, Prefix/Infix/Postfix, Bit-String Flicking, LISP, Boolean Algebra, Data Structures, FSAs and Regular
//    Expressions, Graph Theory, Digital Electronics, Assembly Language; Junior and Elementary variants).
//  - /get-started/student-guide: tests arrive by email from HackerRank; declaration of honesty; "Students found to be
//    collaborating will score 0 points for that test."; scores on the Leaderboard within 2 hours; programming problem
//    boilerplate, "Your job will be to complete a function with specified parameters, and return a value in the correct
//    format."; up to 12 test cases, "The last 6 are" hidden, one point each.
//  - /get-started (Advisor Guide): "The ACSL team advisor can be any teacher, parent or other adult with CS experience.";
//    advisor registers teams and enters rosters; students complete contests independently.
//  - /Registration: "The deadline for registering for the season is December 31, 2026."; fees per team set by ACSL.
//  - /get-started/finals: Saturday May 29, 2027; HackerRank "Secure Mode" controls; "There are no team awards."; programming
//    test 2 problems, 20 points, 3-hour limit; short problems 1 hour, "Each test will have 20 questions."; invitation
//    thresholds "at least 28 points" (Junior, Intermediate, Senior), 24 (Classroom), 14 (Elementary); a per-student fee.
// Our own material, labelled on the page: the six-item practice set and answers, the two Python checkers, the 13-week plan.
// Lesson family: tracing by hand, then checking by machine.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BASES = `# bases.py (ours): check a number-systems answer by machine
def to_base(n, base):
    digits = "0123456789ABCDEF"
    if n == 0:
        return "0"
    out = ""
    while n > 0:
        out = digits[n % base] + out
        n //= base
    return out

value = int("2A3", 16)      # hexadecimal to decimal
print(value)                # 675
print(to_base(value, 8))    # 1243
print(to_base(value, 2))    # 1010100011`;

const POSTFIX = `# postfix.py (ours): evaluate postfix with a stack
def eval_postfix(expr):
    stack = []
    for token in expr.split():
        if token in ("+", "-", "*", "/"):
            right = stack.pop()
            left = stack.pop()
            if token == "+":
                stack.append(left + right)
            elif token == "-":
                stack.append(left - right)
            elif token == "*":
                stack.append(left * right)
            else:
                stack.append(left / right)
        else:
            stack.append(int(token))
    return stack.pop()

print(eval_postfix("6 2 3 + * 4 -"))   # 26`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'How to prepare for the American Computer Science League: the five divisions, the 2026-27 contest windows, the topics by contest, and worked practice with Python checkers.' },
  slug: 'acsl-competition-preparation',
  code: 'acp',
  accent: '#3F662B',
  accentRationale: 'ACSL preparation: the allocated fern green #3F662B, the colour of a circuit board under its lacquer, contrast 6.30, 5.92 and 5.42 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'ACSL competition preparation',
  title: 'ACSL Competition Preparation: Divisions, Dates, Topics',
  description: 'How to prepare for ACSL from the official 2026-27 pages: five divisions, contest windows, topics for each contest, HackerRank scoring and worked practice.',
  ogDescription: 'Four contests from October to May, a short answer test and a 72-hour programming problem in the upper divisions. The 2026-27 ACSL season explained, with original practice.',
  twitterDescription: 'ACSL from the official 2026-27 pages, with original practice problems.',
  pageName: 'ACSL Competition Preparation',
  webPageDescription: 'A preparation guide for US students and advisors to the American Computer Science League, built from the official 2026-27 pages, with a practice set and Python checkers of our own.',
  courseDescription: 'Live online coding and computer science classes for US students in grades 3 to 12 preparing for the American Computer Science League, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'ACSL preparation',
  navLinks: [
    { href: '#divisions', label: 'Divisions' },
    { href: '#windows', label: '2026-27 windows' },
    { href: '#topics', label: 'Topics' },
    { href: '#practice', label: 'Practice set' },
    { href: '#plan', label: '13-week plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 3 to 12 &middot; Four contests a season',
  h1: 'ACSL competition preparation',
  lede: 'The American Computer Science League runs four computer science contests across the school year, with an invitational Finals in May. Unlike most coding contests, half of each ACSL test is pencil-and-paper computer science: number bases, Boolean algebra, graphs, recursion traced by hand. This guide is built from the league&rsquo;s own 2026-27 pages and gives the divisions, the contest windows, the topics in each contest, how HackerRank scores the programming problem, a practice set we wrote ourselves with answers, and a 13-week plan.',
  secondaryCta: { href: '#practice', label: 'Try the practice set' },
  wa: 'Hello Modern Age Coders, my child in the US is doing ACSL this year and wants help preparing. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; computer science taught by hand and by code',
  spec: [
    ['What', 'Computer science contests'],
    ['Who', 'K-12 schools and groups'],
    ['Divisions', 'Five, by age and level'],
    ['Season', 'October to May'],
    ['Languages', 'Python, C++ or Java'],
    ['Platform', 'HackerRank, online'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'ACSL, the American Computer Science League, is a team contest for K-12 students run in four online contests each season. Every contest has a short answer test on computer science topics, and the Junior, Intermediate and Senior divisions add a programming problem in Python, C++ or Java solved within 72 hours. For 2026-27, Contest #1 opens October 19, 2026, team registration closes December 31, 2026, and the Finals are on May 29, 2027.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses that match the ACSL syllabus',
    lede: 'ACSL rewards students who can reason about code without running it, then write a clean function under a time limit. These courses build both halves.',
    items: [
      { course: 'competitive-programming-for-teens-course', code: 'ACP / 01', title: 'Competitive programming for teens', note: 'Ages 13 to 18. Contest problems against hidden tests.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ACP / 02', title: 'Problem solving and data structures', note: 'Ages 13 to 18. Stacks, trees and graphs, the ACSL core.' },
      { course: 'java-programming-masterclass-for-teens', code: 'ACP / 03', title: 'Java for teens', note: 'Ages 13 to 18. One of the three ACSL languages, AP friendly.' }
    ]
  },

  sections: [
    {
      id: 'about', tint: 'tint', eyebrow: 'The league',
      h2: 'What the American Computer Science League is',
      lede: 'A long-running league organised through schools and clubs, scored by team and by individual.',
      body: [
        { kind: 'table', caption: 'ACSL at a glance, from the official home page and Advisor Guide (read 17 October 2026)', head: ['Point', 'What ACSL publishes'], rows: [
          ['Who runs contests for', 'K-12 schools, organizations and local groups'],
          ['History', 'The 2026-27 season is its "49th year of continuous operation"'],
          ['Reach last season', '"over 7,000 students from 21 countries on 6 continents" in the regular season'],
          ['Contests', 'Four per season, then an online invitational Finals'],
          ['Programming', 'Upper divisions solve a problem "using Python, C++ or Java"'],
          ['Who registers', 'An advisor: "any teacher, parent or other adult with CS experience"'],
          ['Summer', 'A separate Summer Programming Challenge']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why families choose it',
          left: [
            'ACSL tests computer science, not only coding speed. A student who has never written a line of Java can still score on number systems and Boolean algebra, which makes it a gentle first contest for a curious middle schooler.',
            'Advisors pick when to run each contest within a long window, so a school can fit it around exams and holidays instead of a single national test day.'
          ],
          rightH3: 'How it differs from USACO',
          right: [
            'USACO is individual and almost entirely programming. ACSL is team based, half theory, and spread over four contests with short tests.',
            'A student can do both in one year: ACSL builds the theory and hand tracing, and that discipline helps in any contest that uses hidden test data.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.acsl.org/" rel="noopener" target="_blank">acsl.org</a> and its <a class="ag-inline-link" href="https://www.acsl.org/get-started" rel="noopener" target="_blank">Advisor Guide</a>, read 17 October 2026. The league sets its own rules and fees; Modern Age Coders is independent of ACSL and teaches the skills only.' }
      ]
    },
    {
      id: 'divisions', tint: 'deep', eyebrow: 'Five divisions',
      h2: 'Which ACSL division fits your student',
      lede: 'Topics are similar across divisions; detail and difficulty rise with each one. Schools may enter more than one division.',
      body: [
        { kind: 'table', caption: 'ACSL divisions and test formats, from the official Divisions page', head: ['Division', 'Who it suits (our summary of the ACSL page)', 'Each contest'], rows: [
          ['Senior', 'Experienced high school coders; ACSL singles out students in AP Computer Science', 'Six short answers in 30 minutes, then one programming task with a 72-hour window'],
          ['Intermediate', 'High school beginners in programming, plus strong younger students', 'The Senior format with gentler problems'],
          ['Junior', 'Middle and junior high students who are learning to code; capped at grade 9', 'The same two parts, on Junior topics'],
          ['Classroom', 'Any grade; a natural fit for AP CS Principles and theory-heavy classes', 'Ten short answers in 50 minutes, nothing to program'],
          ['Elementary', 'Grades 3 to 6', 'Six non-programming questions in 30 minutes, one topic per contest']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Picking between Junior and Intermediate',
          left: [
            'The Divisions page is firm that "No student beyond grade 9 may compete in the Junior Division." A 9th grader new to programming can choose Junior; a confident 8th grader who already writes Python functions may get more from Intermediate.',
            'The short problems in Intermediate and Senior share the same topics, so a student who moves up a division next year is not starting over.'
          ],
          rightH3: 'Teams, rosters and scores',
          right: [
            'A team counts either its top 5 scores or its top 3 in each contest. A 5-score team has up to 10 students on its roster, a 3-score team up to 6, and a school may register several teams in one division.',
            'A student belongs to one team only, and after Contest #1 cannot switch. Plan rosters before October so nobody is stuck in the wrong division.'
          ] }
      ]
    },
    {
      id: 'windows', tint: 'tint', eyebrow: 'The calendar',
      h2: 'ACSL 2026-27 contest windows and Finals date',
      lede: 'Each contest is open on HackerRank for weeks, and the advisor chooses when students sit it. These are the 2026-27 windows as published.',
      body: [
        { kind: 'table', caption: 'ACSL 2026-27 schedule, from the official Schedule and Registration pages (read 17 October 2026)', head: ['2026-27 season', 'Window on HackerRank (closing at 11:59 p.m. Eastern)'], rows: [
          ['Contest #1', 'From October 19, 2026 until Sunday, January 10, 2027'],
          ['Contest #2', 'From January 4, 2027 until Sunday, February 28, 2027'],
          ['Contest #3', 'From February 1, 2027 until Sunday, April 11, 2027'],
          ['Contest #4', 'From March 1, 2027 until Sunday, May 23, 2027'],
          ['Registering teams', 'Deadline December 31, 2026'],
          ['Finals invitations', 'Emailed between May 1 and May 28, 2027'],
          ['Invitational Finals', 'Online on Saturday, May 29, 2027, Memorial Day weekend']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Windows overlap on purpose',
          left: [
            'Contest #2 opens before Contest #1 closes, and the same is true down the list. That gives advisors room, but it also tempts teams to leave everything until the last weeks.',
            'Our advice is to sit each contest early in its window, once the topics have been taught, and keep the spare weeks for anyone who was sick on the planned day.'
          ],
          rightH3: 'Late starters',
          right: [
            'Because registration runs to December 31, 2026 and the Contest #1 window to January 10, 2027, a team that forms in December can still take all four contests this season.',
            'The topics for each contest are published in advance, so a late team can study Contest #1 topics over the winter break and sit it in early January.'
          ] }
      ]
    },
    {
      id: 'topics', tint: 'deep', eyebrow: 'The syllabus',
      h2: 'ACSL topics by contest',
      lede: 'Each short answer test draws on three topics, two problems from each. The list below is the official one for the Intermediate and Senior divisions, with the Junior and Elementary differences.',
      body: [
        { kind: 'table', caption: 'ACSL short answer topics, from the official Study Materials page', head: ['Contest', 'Intermediate and Senior', 'Junior differs', 'Elementary'], rows: [
          ['1', 'Computer Number Systems; Recursive Functions; What Does This Program Do?', 'Program tracing focused on branching', 'Elementary Computer Number Systems'],
          ['2', 'Prefix/Infix/Postfix Notation; Bit-String Flicking; LISP', 'Looping replaces LISP', 'Elementary Prefix/Infix/Postfix'],
          ['3', 'Boolean Algebra; Data Structures; FSAs and Regular Expressions', 'Arrays replace FSAs and Regular Expressions', 'Elementary Boolean Algebra'],
          ['4', 'Graph Theory; Digital Electronics; Assembly Language', 'Strings replace Assembly Language', 'Elementary Graph Theory']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The topics that cost the most points',
          left: [
            'The topics school rarely covers, bit-string flicking, LISP and assembly language, are the ones a student is least likely to have met before. Each is learnable in a few lessons, but only with drill, because the notation is unfamiliar.',
            'Recursive functions and What Does This Program Do? reward careful tracing on paper. Students who try to do them in their head under a 30-minute limit make small slips.'
          ],
          rightH3: 'Where the official material lives',
          right: [
            'Each topic on the Study Materials page links to the ACSL Wiki with explanations, videos and sample problems, and there is a full sample contest from a past year for every division.',
            'ACSL also sells downloadable collections of previous contests to advisors. Past papers are the strongest practice there is, because the style of question repeats.'
          ] }
      ]
    },
    {
      id: 'platform', tint: 'tint', eyebrow: 'Contest day',
      h2: 'How the HackerRank tests are scored',
      lede: 'Every contest is taken online through links HackerRank emails to each student. The Student Guide explains the details that change how you should work.',
      body: [
        { kind: 'ol', items: [
          '<b>The email arrives.</b> The advisor sends the invitation; Junior, Intermediate and Senior students receive a second link for the programming part. Each link is personal and must not be shared.',
          '<b>Sign the honesty declaration.</b> HackerRank checks programs for plagiarism, and "Students found to be collaborating will score 0 points for that test."',
          '<b>Short problems.</b> All are multiple choice. The test submits itself when time runs out, and once submitted the student cannot see the answers again.',
          '<b>The programming problem.</b> Boilerplate already handles input and output. In ACSL&rsquo;s words, "Your job will be to complete a function with specified parameters, and return a value in the correct format."',
          '<b>Hidden tests.</b> There are up to 12 test cases. The last 6 are hidden, and each hidden case passed is worth one point. The last run before time ends is the score.',
          '<b>Results.</b> Scores appear on the ACSL Leaderboard within 2 hours.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What hidden tests mean for practice',
          left: [
            'Passing the six visible cases proves very little. Hidden cases often probe edges: an empty string, a zero, the largest input allowed. We teach students to write three extra test inputs of their own before they press run.',
            'The return format is checked exactly. A space too many or a missing leading zero fails a case that the logic got right.'
          ],
          rightH3: 'Using the 72 hours well',
          right: [
            'Seventy-two hours is generous, and that is the trap: students start late and rush. A better rhythm is to read the problem on day one, write a solution on day two, and test edge cases on day three.',
            'Try the HackerRank Sample Test before Contest #1 so the editor is familiar on the day that counts.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Six ACSL-style practice problems (ours)',
      lede: 'We wrote these to match the official topic list. They are not ACSL problems, and the answers below are our own working.',
      body: [
        { kind: 'table', caption: 'Original practice problems in the style of ACSL short answers, with answers (ours)', head: ['#', 'Topic', 'Problem', 'Answer'], rows: [
          ['1', 'Computer Number Systems', 'Convert 2A3 (base 16) to base 10, then to base 8.', '675; 1243 in base 8'],
          ['2', 'Prefix/Infix/Postfix', 'Evaluate the postfix expression 6 2 3 + * 4 -', '26'],
          ['3', 'Prefix/Infix/Postfix', 'Evaluate the prefix expression - * 6 + 2 3 4', '26, the same expression as #2'],
          ['4', 'Recursive Functions', 'f(x) = f(x - 3) + 2 when x &gt; 5, otherwise x * x. Find f(11).', '29, since f(11) = f(8) + 2 = f(5) + 4 = 25 + 4'],
          ['5', 'Bit-String Flicking', 'Find 10110 AND 01100, then 10110 XOR 01100.', '00100; 11010'],
          ['6', 'Boolean Algebra', 'Simplify A&middot;B + A&middot;(NOT B).', 'A, because B + NOT B is always 1']
        ] },
        { kind: 'code', label: 'Python &middot; check problem 1 by machine', lang: 'python', code: BASES, note: 'The habit we teach: solve by hand first, then let a short program confirm it. Python&rsquo;s int() reads a string in any base from 2 to 36; to_base() goes the other way by repeated division.' },
        { kind: 'code', label: 'Python &middot; check problems 2 and 3 with a stack', lang: 'python', code: POSTFIX, note: 'Postfix evaluation is a stack: push numbers, and on each operator pop two, apply it, push the result. The order of the two pops matters, since 30 - 4 and 4 - 30 differ. Writing this once also prepares students for the Data Structures topic in Contest #3.' },
        { kind: 'p', mt: true, html: 'Why both by hand and by machine? In the contest there is no time to write a program for a short answer question, and in the programming problem there is no partial credit for a correct idea with a wrong return format. Students need the speed of the first and the precision of the second.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Thirteen weeks',
      h2: 'A 13-week plan for the first two ACSL contests',
      lede: 'Our plan for a student starting in mid October 2026 who wants to sit Contest #1 in December and Contest #2 in February. It assumes one live class and about two hours of practice a week.',
      body: [
        { kind: 'table', caption: 'Thirteen weeks to Contests #1 and #2, 2026-27 season (ours)', head: ['Weeks', 'Focus', 'Finished when'], rows: [
          ['1 to 2', 'Computer Number Systems', 'Any base 2, 8, 10 or 16 converted by hand in under two minutes'],
          ['3 to 4', 'Recursive Functions', 'A recursion traced to its base case on paper, every call written down'],
          ['5 to 6', 'What Does This Program Do?', 'Short programs traced line by line with a variables table'],
          ['7', 'Programming practice', 'One past programming problem solved with three edge cases of our own'],
          ['8', 'Sit Contest #1', 'Taken early in December 2026, well before the January 10 close'],
          ['9 to 10', 'Prefix/Infix/Postfix', 'Conversions both ways and stack evaluation by hand'],
          ['11', 'Bit-String Flicking', 'Shifts, circulates and AND, OR, XOR on strings'],
          ['12', 'LISP (or Looping for Junior)', 'Nested list functions evaluated from the inside out'],
          ['13', 'Sit Contest #2', 'Taken in February 2027, ahead of the February 28 close']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Elementary, grades 3 to 6', p: 'One topic per contest, so two weeks per topic is plenty. Short daily drills beat long weekend sessions at this age.' },
          { h3: 'Junior and Classroom', p: 'Tracing programs by hand is the core skill. Classroom students skip programming and spend that time on past short problems.' },
          { h3: 'Intermediate and Senior', p: 'Split time evenly between theory and programming, and treat every programming practice as a hidden-test exercise.' }
        ] }
      ]
    },
    {
      id: 'finals', tint: 'deep', eyebrow: 'The Finals',
      h2: 'The ACSL Finals on May 29, 2027',
      lede: 'High scorers from the regular season are invited to an online Finals. Its rules are stricter than the season&rsquo;s.',
      body: [
        { kind: 'table', caption: 'ACSL Finals 2027, from the official Finals page', head: ['Point', 'Rule'], rows: [
          ['Invitation', 'Scores of at least 28 points (Junior, Intermediate, Senior), 24 (Classroom) or 14 (Elementary)'],
          ['Programming test', 'Two problems, 20 points in total, a 3-hour limit from the moment the student starts'],
          ['Short problems', 'One hour; "Each test will have 20 questions." from every topic of the year'],
          ['Secure Mode', 'Full screen, tab-switch alerts, no copy and paste, single monitor, webcam image checks'],
          ['Awards', '"There are no team awards." Prizes go by individual score'],
          ['Timing', 'Upper divisions start with a livestream at 10 a.m. EDT (7 a.m. on the West Coast); Elementary and Classroom at 2 p.m. EDT']
        ] },
        { kind: 'p', mt: true, html: 'The Finals page also says plainly that the event tests a student&rsquo;s own coding skills, not whether they can get an answer from AI, friends, parents or the internet. We agree, and our lessons work the same way: the teacher explains, the student solves. A per-student registration fee applies to the Finals and is paid through the invitation email.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'From first contest to Finals invitation',
    lede: 'Four stages we see in ACSL students, whatever their division.',
    table: { caption: 'Stages of ACSL readiness (ours)', head: ['Stage', 'The student can'], rows: [
      ['1. Starter', 'Answer number system questions with time to spare'],
      ['2. Tracer', 'Trace recursion and short programs on paper without slips'],
      ['3. Coder', 'Pass visible and their own edge-case tests in the programming problem'],
      ['4. Finalist', 'Cover every topic of the year in timed conditions']
    ] },
    left: { h3: 'For parents', ps: [
      'An advisor must register the team, and ACSL allows that to be a parent with computer science experience, so homeschool groups can take part.',
      'Steady practice across the season matters more than a burst in May, because Finals invitations are based on scores from the regular season.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep a notebook of every mistake by topic. The pattern shows you which two topics to drill next.',
      'Always write down the answer format before you code. Hidden tests check it exactly.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for ACSL students, grade 3 to grade 12',
    lede: 'Taught live online by a regular teacher, grouped by the ACSL divisions they suit best.',
    bands: [
      { num: 'I', h3: 'Elementary and Classroom', sub: 'Theory first', courses: [
        { code: 'ACP / ELM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic for grades 3 to 6.' },
        { code: 'ACP / ELM / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Bases and Boolean in code.' },
        { code: 'ACP / ELM / 03', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'Fits the Classroom division.' }
      ] },
      { num: 'II', h3: 'Junior', sub: 'Middle school', courses: [
        { code: 'ACP / JR / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Ages 9 to 12, first functions.' },
        { code: 'ACP / JR / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Ages 9 to 12, typed and strict.' },
        { code: 'ACP / JR / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to real code.' }
      ] },
      { num: 'III', h3: 'Intermediate and Senior', sub: 'High school', courses: [
        { code: 'ACP / SR / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the AP exam.' },
        { code: 'ACP / SR / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'STL and fast solutions.' },
        { code: 'ACP / SR / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Clean functions, clear output.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Classes around the ACSL season',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An evening class after school, Eastern to Pacific.' },
      { time: 'Weekends', l: 'Timed practice papers on Saturday or Sunday.' },
      { time: '1-on-1', l: 'Drill the exact topics a student keeps missing.' }
    ],
    cells: [
      { h3: 'Topic drills', p: 'Each ACSL topic, until it is quick.' },
      { h3: 'Hand tracing', p: 'Variables tables, on paper.' },
      { h3: 'Hidden tests', p: 'Edge cases before every run.' },
      { h3: 'Past papers', p: 'Timed, then reviewed line by line.' },
      { h3: 'Three languages', p: 'Python, Java or C++.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Contest skills grow into real projects. A few are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews from parents, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'ACSL sets its own fees: the advisor pays per team, and Finals invitees pay a per-student fee through the invitation email. Our classes are separate and billed month by month in US dollars, so a student can study through the season and pause in summer.',
    free: ['A free first lesson', 'A quick topic check', 'No card details'],
    group: ['Fifteen to twenty learners', 'The same teacher all season', 'A batch time you choose', 'Paid monthly'],
    one: ['A teacher for one', 'Your weakest topics first', 'Paced to the windows']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'ACSL: common questions',
    items: [
      { q: 'What is ACSL?', a: 'The American Computer Science League organises computer science and programming contests for K-12 schools, organizations and local groups. The 2026-27 season is its 49th year of continuous operation.' },
      { q: 'When is ACSL Contest #1 in 2026-27?', a: 'Its window runs from October 19, 2026 to 11:59 p.m. Eastern on Sunday, January 10, 2027, and the advisor picks the day students take it.' },
      { q: 'Which division should my child enter?', a: 'Elementary is for grades 3 to 6, Junior for middle school students up to grade 9, Intermediate for high schoolers newer to programming, Senior for experienced programmers, and Classroom for any grade without much programming.' },
      { q: 'What programming languages can be used?', a: 'The official home page says the upper divisions solve a problem using Python, C++ or Java.' },
      { q: 'Can a student enter ACSL without a school team?', a: 'Students compete on teams registered by an adult advisor, and the Advisor Guide allows a parent with computer science experience to take that role, so a club or homeschool group can form a team.' },
      { q: 'What is the registration deadline?', a: 'The Registration page gives December 31, 2026 as the deadline for registering teams for the 2026-27 season.' },
      { q: 'How is the programming problem scored?', a: 'There are up to 12 test cases and the last 6 are hidden. Each hidden case passed is worth one point, and the last run before time ends is the score.' },
      { q: 'How do students qualify for the ACSL Finals?', a: 'Invitations are based on regular-season scores: at least 28 points in the Junior, Intermediate and Senior divisions, 24 in Classroom or 14 in Elementary. The 2027 Finals are online on Saturday, May 29, 2027.' },
      { q: 'Can students use AI or get help during a contest?', a: 'No. Students must work independently, collaboration scores 0 for that test, and the Finals run in a secure mode with full-screen and webcam checks.' },
      { q: 'When are your ACSL classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How does Modern Age Coders prepare students?', a: 'A regular teacher works through the official topics in contest order, drills hand tracing, practises programming problems against hidden-style tests and reviews timed past papers. We never help during a live contest.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who enjoy contests and computer science.',
    items: [
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'The individual programming olympiad.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A', p: 'Java, the Senior division favourite.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'A good match for Classroom division.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Where ACSL fits among other options.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Team building against the clock.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for US families.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the division and the next contest window. The teacher starts with a short topic check so the plan begins where your student actually is.',
    readFirst: 'Want to see how lessons run first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open the <a class="ag-inline-link" href="/courses">course list</a> for full syllabuses.',
    note: 'Lessons are live by video from our teachers in India, timed for US evenings and weekends. Message us on WhatsApp for the fastest answer.',
    formNote: 'A free lesson, with no card required.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'By hand, then by machine'
  },

  personalityCss: `
.ag-root.ag-acp .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-acp .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-acp .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-acp .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-acp .ag-steps { gap: 0.9rem; }
.ag-root.ag-acp .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'American Computer Science League, official pages for the 2026-27 season, read raw on 17 October 2026: 49th year, over 7,000 students from 21 countries; five divisions and formats; 3-score and 5-score teams; Junior limit at grade 9; contest windows October 19, 2026 to May 23, 2027; registration deadline December 31, 2026; topics by contest; HackerRank process, hidden test cases and the collaboration rule; advisor eligibility; Finals on May 29, 2027 with Secure Mode, thresholds and no team awards.',
    localProject: 'Our six-problem practice set with answers (675 and 1243; 26; 26; 29; 00100 and 11010; A), two Python checkers (base conversion and a postfix stack) and our 13-week plan to Contests #1 and #2. Lesson family: tracing by hand, then checking by machine.',
    requiredMentions: ['49th year of continuous operation', 'over 7,000 students from 21 countries on 6 continents', 'No student beyond grade 9 may compete in the Junior Division.', 'October 19, 2026', 'December 31, 2026', 'Online on Saturday, May 29, 2027, Memorial Day weekend', 'Your job will be to complete a function with specified parameters, and return a value in the correct format.', 'Students found to be collaborating will score 0 points for that test.', 'There are no team awards.', 'any teacher, parent or other adult with CS experience', 'eval_postfix("6 2 3 + * 4 -")', '1243 in base 8'],
    sources: [
      { claim: 'Season status, history, reach, contest structure, languages.', url: 'https://www.acsl.org/' },
      { claim: 'Five divisions, test formats, team sizes, Junior grade limit.', url: 'https://www.acsl.org/get-started/divisions' },
      { claim: '2026-27 contest windows and Finals date.', url: 'https://www.acsl.org/get-started/schedule' },
      { claim: 'Topics by contest and division.', url: 'https://www.acsl.org/get-started/study-materials' },
      { claim: 'HackerRank process, hidden tests, collaboration rule.', url: 'https://www.acsl.org/get-started/student-guide' },
      { claim: 'Advisor eligibility and duties.', url: 'https://www.acsl.org/get-started' },
      { claim: 'Registration deadline December 31, 2026.', url: 'https://www.acsl.org/Registration' },
      { claim: 'Finals format, Secure Mode, thresholds.', url: 'https://www.acsl.org/get-started/finals' }
    ],
    rejectedClaims: [
      'ACSL team and Finals fees: published by ACSL, not printed because US pages carry no typed dollar figures; the page says the league sets its own fees.',
      'The number of Classroom division questions: the Divisions page says 10 per contest and the Student Guide says 12; the page uses the Divisions figure and names its source.',
      'Partner organisations abroad and named advisors or alumni: not used.',
      'That our classes lead to a Finals invitation or a prize: refused; invitations depend on the student\'s own season scores.',
      'Any affiliation with ACSL: none, and the page says so.'
    ]
  }
};
