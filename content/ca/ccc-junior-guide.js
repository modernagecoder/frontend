'use strict';
// CCC Junior guide (ag- contest door; Canada cluster Plan A pilot 2, row 2).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Deeper spoke under the hub /canadian-computing-competition-ccc-prep: this page is CCC JUNIOR only.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ccc-junior-guide/):
//  - cemc.uwaterloo.ca/contests/ccc (ccc.html / ccc.txt): "North and South America: Wednesday, February 17, 2027";
//    "Outside North and South America: Thursday, February 18, 2027"; ordering deadline "Thursday, February 11, 2027";
//    "Junior level - any participant with beginner to intermediate programming skills."; "Senior level - any participant
//    with intermediate to advanced programming skills."; level chosen "regardless of their grade"; "Written in school,
//    participants write online, individually."; "5 questions."; "Time allowed for completion is 3 hours."; "Score out of
//    75."; "Each question is worth 15."; Junior ladder Q1-2 "(e.g. basic loops and conditions)", Q3-4 "(e.g. some
//    combination of loops, conditions and counting)", Q5 "(e.g. recursion, two-dimensional arrays, efficient/insightful
//    algorithms)"; Senior ladder Q1-2 "(e.g. sorting, searching)", Q3-4 "(e.g. careful counting, more advanced
//    mathematical reasoning)", Q5 "IOI level question"; subtasks with partial scores; "CCC participants may use C, C++,
//    Python 2, Python 3, or Java."; "it may not always be possible to achieve a perfect score with a particular language
//    choice (for example, Python or Java)"; "CCO participants must use C++."; per-participant fee (ten dollars, written
//    in words, never typed as a figure); "An individualized 3-hour timer will begin for each participant as soon as they
//    enter biographical information"; "We strongly recommend that every participant attempt the Practice Contest.";
//    late registrants accommodated before the start; "Any full-time student may participate"; official participant
//    "born on or after July 1, 2007" and "live in Canada" (school inside Canada); Certificate of Distinction for the "top
//    25%"; honour rolls "for the Senior competition"; 2026 table Junior mean 42.65, cutoff 58, max 75, 3421 contestants;
//    Senior mean 15.56, cutoff 26, 2439 contestants (never summed); "Approximately 20 of the top official CCC Senior
//    participants from schools in Canada are invited to the CCO at the University of Waterloo each spring."; CCO "used to
//    select Canada's teams for the International Olympiad in Informatics (IOI)"; selection "at the discretion of the
//    CEMC"; "Participation in the Canadian Computing Competition (CCC) is not required for admission to the Faculty of
//    Mathematics at the University of Waterloo."; books named: Competitive Programming (Halim and Halim) and Competitive
//    Programmers Handbook (Laaksonen); "Contest Supervisors are expected to administer the contest as close to the
//    beginning of the school day as possible in their respective time zones".
//  - cemc.uwaterloo.ca/contests/ccc/ioi (ccc-ioi.txt): "Canada's entry into the annual IOI competition is determined by
//    performance on the Canadian Computing Competition". No contestant or school names reproduced.
//  - cemc.uwaterloo.ca/contests/how-contests-work (how-contests-work.txt): "talk to a math or computer science educator
//    at your school"; "It is not possible for students to individually register for a contest" / "all students must
//    participate through their school." (an em dash between them in the source is not reproduced); "students can look
//    for another local school that will allow them to join as a participant"; "only educators are permitted to request
//    a CEMC School Account"; "can take up to three weeks"; "Contests may not be taken remotely or without supervision.";
//    "Participants may only write the contest at the school which ordered the contest."
//  - cemc.uwaterloo.ca/contests (contests.txt): "This contest is available in English and French."
//  - cemc.uwaterloo.ca/resources/past-contests (past-contests.txt): "Below you will find resources from the last 10
//    years."; year filter 2016 to 2026. cemc.uwaterloo.ca/resources: "There is no registration or fee required to access
//    these materials." CS Circles title "Computer Science Circles". Courseware "No registration is required".
//  - cccgrader.com (cccgrader-home.html, linked from the CEMC CCC page): "This CCC Online Grader is the system used to
//    run the Canadian Computing Competition. It also provides access to practice problems and previous contests."
//  - cccgrader.com/rules.pdf (ccc-rules.txt): "All input is from standard input and all output is to standard output.";
//    "Output must match the output format specified in the problem exactly. Prompts or additional output must not be
//    produced."; "3 second time limit and a 512 MB memory limit"; "up to 50 submissions per problem"; "at most once per
//    minute"; "maximum score over all submissions"; "We will take the maximum score between the Junior and Senior contest
//    as the student's overall score."; "a maximum of 3 hours in total"; internet only for editing, compiling, submitting
//    and official language documentation; "generative AI such as CoPilot or ChatGPT" forbidden; "AI-based tools within an
//    IDE cannot be used."; no starter code; "Do not discuss the problems or solutions from a contest online within 48
//    hours after the contest."
//  - cccgrader.com/sample_soln.pdf (ccc-sample-soln.txt): Python 3 runs as "Pypy3 7.3.9 (running Python 3.8.13)". The
//    sample problem itself is NOT reproduced.
//  - facts-geo.md section 3 (tzdb 2026e): offsets for the class-time note.
// Our own material, labelled on the page: the three practice problems and their Python solutions (run on their sample
// input under CPython on 22 October 2026, written to Python 3.8 syntax), the skills table, the four-stage ladder, the
// 16-week plan, and the arithmetic on CEMC's 2026 Junior figures: 58 = 45 + 13 (three full questions at 15 each plus
// 13 more points) and 42.65 / 75 = about 57 percent.
// Lesson family: reading a specification exactly (the input and output contract).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const P1 = `# Our practice problem 1: Line-up Leaders (not a CEMC problem)
n = int(input())
count = 0
tallest = 0          # every height is at least 1, so 0 is safe
for _ in range(n):
    h = int(input())
    if h > tallest:  # strictly taller; a tie does not count
        count += 1
        tallest = h
print(count)`;

const P1_IO = `Sample input:
5
140
152
152
149
160

Sample output:
3`;

const P2 = `# Our practice problem 2: Plough Days (not a CEMC problem)
n = int(input())
snow = list(map(int, input().split()))

plough_days = 0
run = 0
longest = 0
for cm in snow:
    if cm >= 5:
        plough_days += 1
        run += 1
        if run > longest:   # update inside the loop, so a run
            longest = run   # that reaches the last day still counts
    else:
        run = 0
print(plough_days)
print(longest)`;

const P2_IO = `Sample input 1:
8
0 6 7 2 5 5 9 1

Sample output 1:
5
3

Sample input 2:
4
1 5 6 7

Sample output 2:
3
3`;

const P3 = `# Our practice problem 3: Postal Pattern (not a CEMC problem)
LETTER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
DIGIT = "0123456789"
PATTERN = [LETTER, DIGIT, LETTER, " ", DIGIT, LETTER, DIGIT]

def is_valid(code):
    if len(code) != len(PATTERN):
        return False
    for ch, allowed in zip(code, PATTERN):
        if ch not in allowed:
            return False
    return True

n = int(input())
for _ in range(n):
    line = input()            # keep the space in the middle
    print("VALID" if is_valid(line) else "INVALID")`;

const P3_IO = `Sample input:
5
A1B 2C3
a1b 2c3
A1B2C3
Z9Y 8X7
A1B 2C3D

Sample output:
VALID
INVALID
INVALID
VALID
INVALID`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'CCC Junior from CEMC\'s own 2027 pages: format, the grader rules, school registration, three original practice problems in Python and a 16-week plan.' },
  slug: 'ccc-junior-guide',
  code: 'ccj',
  accent: '#2C614F',
  accentRationale: 'CCC Junior guide, Canada: a muted spruce green #2C614F, at least 8 RGB units (Euclidean) and 6 on the largest channel from every accent on the site, contrast 6.76 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'CCC Junior guide',
  title: 'CCC Junior 2027 Guide: Format, Rules, Practice Problems',
  description: 'CCC Junior from CEMC\'s 2027 pages: 5 questions in 3 hours out of 75, how school entry works, Junior vs Senior, three original Python problems and a 16-week plan.',
  ogDescription: 'CEMC lists the 2027 CCC for Wednesday 17 February 2027. Everything a Junior writer needs: the format, the grader rules, school entry, three practice problems with Python solutions, and a plan.',
  twitterDescription: 'CCC Junior 2027 from CEMC\'s pages, with three original practice problems and a 16-week plan.',
  pageName: 'CCC Junior Guide',
  webPageDescription: 'A guide for Canadian students and parents to the Junior level of the Canadian Computing Competition, built from CEMC\'s 2027 contest page and the CCC grader rules, with original practice problems and a study plan.',
  courseDescription: 'Live online preparation for the Junior and Senior levels of the Canadian Computing Competition, for students across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'CCC Junior guide',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#facts', label: '2027 facts' },
    { href: '#register', label: 'Entry' },
    { href: '#versus', label: 'Junior vs Senior' },
    { href: '#practice', label: 'Practice problems' },
    { href: '#plan', label: '16-week plan' }
  ],
  eyebrow: 'Canada &middot; Canadian Computing Competition &middot; Junior level',
  h1: 'CCC Junior guide for 2027',
  lede: 'The Junior level of the Canadian Computing Competition is where most Canadian students meet contest programming for the first time: one online sitting at school, five problems, three hours, and an automatic grader that only accepts output in exactly the form the problem asks for. This guide is built from the 2027 contest page published by the Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo and from the rules of its CCC Online Grader. It covers what the paper looks like, how entry through a school works, how Junior compares with Senior, the skills Junior problems lean on, three practice problems we wrote with full Python solutions, and a sixteen-week plan that ends on contest day.',
  secondaryCta: { href: '#practice', label: 'Try the three problems' },
  wa: 'Hello Modern Age Coders, my child in Canada is preparing for CCC Junior. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; practice problems written by our teachers, never copied from CEMC',
  spec: [
    ['Run by', 'CEMC, University of Waterloo'],
    ['2027 contest', 'Wednesday 17 February 2027 (the Americas)'],
    ['Paper', '5 questions, 3 hours'],
    ['Score', 'Out of 75, 15 per question'],
    ['Languages', 'C, C++, Python 2 or 3, Java'],
    ['Entry', 'Through a school only'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CCC Junior is the beginner-to-intermediate level of the Canadian Computing Competition, run by CEMC at the University of Waterloo: five programming problems, three hours, scored out of 75, written online at school. It suits students who can write loops and conditions, in any grade. Modern Age Coders prepares students live online, in a batch or one to one, in its CCC Junior and Senior Preparation course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for a CCC Junior writer',
    lede: 'The first is built around the CCC itself. The other two are where a student goes to strengthen the programming underneath it.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'CCJ / 01', title: 'CCC Junior and Senior Preparation', note: 'Ages 13 to 18. Junior and Senior tracks in Python or C++, two live classes a week and timed practice contests, up to the 17 February 2027 contest.' },
      { course: 'competitive-programming-for-teens-course', code: 'CCJ / 02', title: 'Competitive programming for teens', note: 'Ages 13 to 18. Algorithms and contest habits for students heading from Junior towards Senior.' },
      { course: 'python-complete-masterclass-teens', code: 'CCJ / 03', title: 'Python for teens', note: 'Ages 13 to 18. Fluent Python first, for a student who is not yet comfortable with loops, lists and strings.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'The 2027 contest',
      h2: 'CCC 2027 at a glance, from CEMC\'s contest page',
      lede: 'Each line below comes from CEMC\'s own page for the Canadian Computing Competition, read on 22 October 2026. CEMC sets these details each year, so check its page again before the contest.',
      body: [
        { kind: 'table', caption: 'The 2027 Canadian Computing Competition, as published by CEMC (read 22 October 2026)', head: ['Point', 'What CEMC publishes for 2027'], rows: [
          ['Contest date', 'CEMC lists "North and South America: Wednesday, February 17, 2027" and "Outside North and South America: Thursday, February 18, 2027".'],
          ['Ordering deadline', 'CEMC gives schools until Thursday, February 11, 2027 to order the 2027 CCC.'],
          ['Levels', 'Junior: "any participant with beginner to intermediate programming skills." Senior: "any participant with intermediate to advanced programming skills."'],
          ['Choosing a level', 'CEMC lets each writer pick a level "regardless of their grade".'],
          ['Where and how', '"Written in school, participants write online, individually."'],
          ['Format', '"5 questions." "Time allowed for completion is 3 hours." "Score out of 75." "Each question is worth 15."'],
          ['Partial marks', 'CEMC says problems may be split into subtasks, with a partial score for each, including an easier, restricted version of a problem.'],
          ['Programming languages', '"CCC participants may use C, C++, Python 2, Python 3, or Java."'],
          ['Contest language', 'CEMC: "This contest is available in English and French."'],
          ['Fee', 'CEMC sets a ten-dollar fee per participant, plus a processing fee per school order; the school places the order.'],
          ['Practice', 'The CCC Online Grader, "where participants can create a free practice account and access previous contests".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the three hours mean',
          left: [
            'CEMC\'s supervisor instructions say "An individualized 3-hour timer will begin for each participant as soon as they enter biographical information" after logging in to the grader. The clock is personal, so a student who starts a few minutes late still gets the full three hours.',
            'The grader rules add a detail many families miss: a student may open both the Junior and the Senior contest, but has "a maximum of 3 hours in total" across the two. CEMC then counts the higher result: "We will take the maximum score between the Junior and Senior contest as the student\'s overall score."'
          ],
          rightH3: 'When the paper starts',
          right: [
            'There is no single national start time. CEMC asks supervisors to run the contest "as close to the beginning of the school day as possible in their respective time zones" on the official date, so a student in Halifax and a student in Vancouver write on the same Wednesday 17 February 2027 but at different moments.',
            'Results reach the school\'s supervisor through CEMC\'s Contest Supervisor Portal within a few weeks of the contest, according to the CCC page.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, Canadian Computing Competition</a>, and the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC contests overview</a>, read 22 October 2026. Modern Age Coders is not connected with CEMC or the University of Waterloo; we teach students who write the contest through their schools.' }
      ]
    },
    {
      id: 'grader', tint: 'deep', eyebrow: 'The grader rules',
      h2: 'What the CCC Online Grader checks, and why it trips up first-time writers',
      lede: 'Every CCC answer is a program, and a machine marks it. The rules document linked from CEMC\'s page is short, and nearly every Junior mark lost to a "silly mistake" breaks one of the lines below.',
      body: [
        { kind: 'table', caption: 'CCC grader rules that matter most at Junior level, quoted from the CCC rules document (read 22 October 2026)', head: ['Rule', 'What the CCC rules say', 'What it means for a Junior writer'], rows: [
          ['Input and output', '"All input is from standard input and all output is to standard output."', 'Read with input(); never open a file.'],
          ['Exact output', '"Output must match the output format specified in the problem exactly. Prompts or additional output must not be produced."', 'input("Enter a number: ") costs the whole test case.'],
          ['Limits', '"3 second time limit and a 512 MB memory limit" unless a problem says otherwise', 'Slow code fails on big inputs even when it is correct.'],
          ['Submissions', '"up to 50 submissions per problem", "at most once per minute"', 'Test on your own machine first; the grader is not a debugger.'],
          ['Scoring', 'The "maximum score over all submissions" counts for each problem', 'A later, worse submission never lowers a score.'],
          ['Help allowed', 'Official language documentation only; "generative AI such as CoPilot or ChatGPT" is forbidden, and "AI-based tools within an IDE cannot be used."', 'Practise with plain documentation open, not an AI assistant.'],
          ['After the contest', '"Do not discuss the problems or solutions from a contest online within 48 hours after the contest."', 'Wait two days before posting about it.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The Python version matters',
          left: [
            'CEMC\'s sample-programs document lists the Python 3 compiler as "Pypy3 7.3.9 (running Python 3.8.13)". Code written with newer syntax, such as a match statement, will not run there.',
            'We write every practice solution on this page in Python 3.8 syntax for that reason, and we ask students to avoid features they have only seen in the newest tutorials.'
          ],
          rightH3: 'Python or another language?',
          right: [
            'CEMC warns that "it may not always be possible to achieve a perfect score with a particular language choice (for example, Python or Java)", while there is always at least one language in which a perfect score is possible.',
            'For a first Junior paper we teach in Python, because the student\'s attention belongs on the problem. Students who aim for Senior and the Canadian Computing Olympiad move to C++, which the CCO requires.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cccgrader.com/rules.pdf" rel="noopener" target="_blank">CCC rules</a> and <a class="ag-inline-link" href="https://cccgrader.com/sample_soln.pdf" rel="noopener" target="_blank">sample programs and language details</a>, both linked from CEMC\'s CCC page and read 22 October 2026. Outside the contest, ChatGPT needs a parent\'s permission for anyone under 18.' }
      ]
    },
    {
      id: 'register', tint: 'tint', eyebrow: 'Entry',
      h2: 'How to enter CCC Junior: only through a school',
      lede: 'Families often look for a sign-up form. There is none for students. CEMC is direct about it on its How contests work page: "It is not possible for students to individually register for a contest", and "all students must participate through their school."',
      body: [
        { kind: 'ol', items: [
          '<b>Talk to a teacher early.</b> CEMC\'s first step for a student is to "talk to a math or computer science educator at your school". Ask in the autumn whether the school orders the CCC.',
          '<b>If the school already takes part,</b> the teacher gives the student the school\'s CEMC school number (never the password) so the student can create a CCC Online Grader account, which the teacher then approves.',
          '<b>If the school has never ordered a CEMC contest,</b> the principal or head of math applies for a school account. CEMC says "only educators are permitted to request a CEMC School Account" and that review "can take up to three weeks", so this cannot wait until February 2027.',
          '<b>If the school will not take part,</b> CEMC\'s answer is that "students can look for another local school that will allow them to join as a participant." Ask nearby schools politely and well before the deadline.',
          '<b>Check the order is in.</b> The 2027 ordering deadline CEMC lists is Thursday, February 11, 2027. CEMC adds that late and even last-minute registrants can be added before the contest starts, with the school invoiced afterwards.',
          '<b>Write at that school.</b> CEMC\'s standards say "Participants may only write the contest at the school which ordered the contest" and "Contests may not be taken remotely or without supervision."'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Homeschooled students, and schools without the CCC',
          left: [
            'CEMC\'s pages that we read give one route for a student whose own school does not take part: another local school that agrees to host them. They do not describe a separate route for homeschooled students, so we do not invent one. A homeschooling family\'s practical step is the same: contact a nearby school\'s math or computer science department and ask whether the student can write there.',
            'An online class cannot host the sitting. We teach the preparation; the contest itself is always written in person at a school, under that school\'s supervision.'
          ],
          rightH3: 'Who counts as an official participant',
          right: [
            'CEMC says "Any full-time student may participate" in the CCC. For writers at a school inside Canada, CEMC counts a participant as official if they were born on or after July 1, 2007, and live in Canada.',
            'Official status matters mainly for invitations onward from Senior. Unofficial participants, CEMC notes, are still eligible for certificates.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a> and the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CCC page</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'versus', tint: 'deep', eyebrow: 'Junior or Senior',
      h2: 'CCC Junior vs Senior: what each paper asks of a student',
      lede: 'Both papers share the same format and the same afternoon. They differ in what the five problems demand, and in where a strong result can lead.',
      body: [
        { kind: 'table', caption: 'CCC Junior and Senior compared, from CEMC\'s CCC page (read 22 October 2026); the last row is our guidance', head: ['', 'Junior', 'Senior'], rows: [
          ['CEMC\'s audience line', 'Beginner to intermediate programming skills', 'Intermediate to advanced programming skills'],
          ['Questions 1 and 2', 'Straightforward: "basic loops and conditions"', 'Basic algorithms: "sorting, searching"'],
          ['Questions 3 and 4', 'More challenging: "some combination of loops, conditions and counting"', 'More advanced algorithms: "careful counting, more advanced mathematical reasoning"'],
          ['Question 5', '"recursion, two-dimensional arrays, efficient/insightful algorithms"', '"IOI level question"'],
          ['Format', '5 questions, 3 hours, out of 75', '5 questions, 3 hours, out of 75'],
          ['2026 average (mean)', '42.65 out of 75', '15.56 out of 75'],
          ['2026 Certificate of Distinction cutoff', '58', '26'],
          ['2026 number of contestants', '3421', '2439'],
          ['Honour roll', 'Not listed by CEMC for Junior', 'Some top official participants named'],
          ['Leads onward', 'CEMC names no onward invitation from Junior', 'About 20 top official Senior participants from schools in Canada invited to the CCO'],
          ['Our guidance', 'A student who still checks how to write a loop, or has never written a contest program', 'A student who solves the last Junior problems from past papers comfortably within the time']
        ] },
        { kind: 'p', mt: true, html: 'Our own reading of CEMC\'s 2026 Junior figures, labelled as ours: the Certificate of Distinction cutoff of 58 is three full questions at 15 points each plus 13 more points (58 = 45 + 13), so in 2026 a Junior writer needed roughly four questions\' worth of marks to reach it. The Junior mean of 42.65 is about 57 percent of 75 (42.65 / 75). CEMC awards the certificate to "the top 25%" of all competitors, so the cutoff moves from year to year with the paper.' },
        { kind: 'two', mt: true,
          leftH3: 'Why Junior is a sound first contest',
          left: [
            'The first two Junior problems reward plain, careful programming. A student who reads the statement slowly and prints exactly what is asked can collect 30 points before any clever idea is needed.',
            'Junior is also where students learn the rhythm of a contest: the personal timer, the grader\'s verdicts, the decision to stop polishing one problem and move to the next.'
          ],
          rightH3: 'When to move a student up',
          right: [
            'We look at evidence from timed practice, not at the grade on a report card. When a student finishes Junior questions 4 and 5 from several past years inside the time, the Senior paper is the more useful afternoon.',
            'CEMC allows a student to open both levels, and the higher score counts, but the three hours are shared, so time spent on one paper is time lost on the other. We settle the level in late January or early February 2027, after two timed papers, so the student walks in planning to spend the afternoon on one.'
          ] }
      ]
    },
    {
      id: 'skills', tint: 'tint', eyebrow: 'What Junior tests',
      h2: 'The six skills CCC Junior problems lean on',
      lede: 'CEMC describes its Junior questions in a single line each. In our teaching, those lines break down into six habits a student can practise. The descriptions below are ours, not CEMC\'s.',
      body: [
        { kind: 'table', caption: 'Skills behind CCC Junior problems (our analysis, linked to CEMC\'s question outline)', head: ['Skill', 'What it looks like in a Junior problem', 'How we practise it'], rows: [
          ['Input parsing', 'A count on the first line, then values one per line or several on one line', 'Students write the reading code first and print what they read before solving anything'],
          ['Loops and conditions', 'Deciding what happens to each item: count it, skip it, compare it', 'Short drills where the only change is a word such as "at least" versus "more than"'],
          ['Simulation', 'Following a process step by step: a queue, a game, a timetable', 'Tracing the sample by hand on paper, one row per step, before any code'],
          ['String handling', 'Checking characters one at a time, building an answer string, slicing', 'Problems where spaces, capitals and punctuation matter, so careless shortcuts fail'],
          ['Simple data structures', 'Lists, dictionaries for counting, a two-dimensional grid by question 5', 'One structure a week, used in three different problems'],
          ['Careful reading', 'Edge cases hidden in the wording: ties, the first item, an empty run', 'Students write two test inputs of their own for every problem, one of them tiny']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why careful reading comes last but matters most',
          left: [
            'Almost every Junior problem is solvable by a student who knows loops, lists and strings. What separates the scores is how exactly the statement is followed: whether "taller" means strictly taller, whether output goes on one line or two.',
            'That is why our three practice problems below each hide one small trap in the wording, and why each solution names the mistake it is built to catch.'
          ],
          rightH3: 'Subtasks change the strategy',
          right: [
            'Because CEMC can award partial scores for an easier, restricted version of a problem, a student who cannot see the full solution to question 5 should still solve the small case.',
            'A simple program that is correct for small inputs and too slow for large ones can still earn the subtask points. We practise writing that version first, then improving it.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Three practice problems',
      h2: 'Three original CCC Junior-style problems with Python solutions',
      lede: 'We wrote these three problems for our students; they are our practice problems, not CEMC problems, and they are not copied or adapted from any past contest. They follow the Junior ladder in difficulty: the first is question 1 or 2 level, the second question 3 level, the third a string problem of the kind that appears in the middle of a Junior paper. Each solution is written in Python 3.8 syntax, to suit the grader, and was run on its sample input.',
      body: [
        { kind: 'p', html: '<b>Practice problem 1: Line-up Leaders.</b> Students stand in a line. Count how many students are strictly taller than every student in front of them; the first student always counts. <b>Input:</b> the first line holds N (1 to 100), the number of students. Each of the next N lines holds one height in centimetres, a whole number from 1 to 250. <b>Output:</b> one line with the count.' },
        { kind: 'code', label: 'Problem 1 &middot; sample input and output', lang: 'text', code: P1_IO },
        { kind: 'code', label: 'Problem 1 &middot; our solution', lang: 'python', code: P1, note: 'The mistake it catches: writing <b>&gt;=</b> instead of <b>&gt;</b>. The second student of height 152 ties, so does not count, and the answer is 3, not 4. The second trap is a prompt: input("How many students? ") prints extra text, and the grader marks the case wrong.' },
        { kind: 'p', mt: true, html: '<b>Practice problem 2: Plough Days.</b> A town ploughs its roads on any day with at least 5 cm of new snow. Given the snowfall for N days, print how many plough days there were, then the length of the longest run of plough days in a row. <b>Input:</b> the first line holds N (1 to 1000). The second line holds N whole numbers from 0 to 100, separated by single spaces. <b>Output:</b> two lines, the number of plough days and then the longest run.' },
        { kind: 'code', label: 'Problem 2 &middot; sample input and output', lang: 'text', code: P2_IO },
        { kind: 'code', label: 'Problem 2 &middot; our solution', lang: 'python', code: P2, note: 'The mistake it catches: many first attempts update the longest run only when a run breaks. On the second sample the run of 5, 6 and 7 reaches the last day and never breaks, so that version prints 0 instead of 3. Updating inside the loop, as above, fixes it. The input trap: all the numbers sit on one line, so a program that reads each day with int(input()) receives the whole line "0 6 7 2 5 5 9 1" at once, raises a ValueError, and the grader reports a run-time error.' },
        { kind: 'p', mt: true, html: '<b>Practice problem 3: Postal Pattern.</b> Our simplified postal pattern has exactly seven characters: a capital letter, a digit, a capital letter, one space, a digit, a capital letter and a digit. For each line, print VALID if it matches the pattern and INVALID if it does not. (This is our made-up checking rule for practice, not a full postal-code validator.) <b>Input:</b> the first line holds N (1 to 50). Each of the next N lines holds one string of up to 20 characters. <b>Output:</b> N lines, each VALID or INVALID.' },
        { kind: 'code', label: 'Problem 3 &middot; sample input and output', lang: 'text', code: P3_IO },
        { kind: 'code', label: 'Problem 3 &middot; our solution', lang: 'python', code: P3, note: 'The mistake it catches: reading the line with input().split() cuts "A1B 2C3" into two pieces and loses the space the pattern needs. The second trap is isalpha(), which accepts lower-case letters, so "a1b 2c3" would wrongly pass. Comparing each character with an explicit list of allowed characters follows the statement exactly.' },
        { kind: 'two', mt: true,
          leftH3: 'How to use these problems',
          left: [
            'Solve each one before reading our solution, then type your program into a fresh file and run it on the sample input. If it disagrees with the sample output, find out why before you look.',
            'Then write two inputs of your own: a tiny one (N equal to 1) and an awkward one, such as all ties in problem 1 or no snow at all in problem 2. Predict the output by hand first.'
          ],
          rightH3: 'What the three have in common',
          right: [
            'None needs an algorithm a Grade 8 student has not met. Each needs the statement read twice: a strict comparison, a run that ends at the edge, a space that must survive.',
            'That is the lesson family behind this page: treat the input and output description as a contract, and test the contract before the clever part.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Sixteen weeks',
      h2: 'A 16-week CCC Junior plan, from October 2026 to contest day',
      lede: 'Our plan for a student writing Junior on Wednesday 17 February 2027, the date CEMC lists for the Americas. It assumes two live one-hour classes a week, as in our CCC course, a short problem set between them, and lighter weeks over the winter break. Our full course season began in September 2026; this plan is for a student who begins in late October 2026.',
      body: [
        { kind: 'ol', items: [
          '<b>Late October 2026, before week 1:</b> ask the school\'s math or computer science teacher whether it orders the 2027 CCC, and if not, start looking for a host school. Create a free CCC Online Grader practice account and read one old Junior paper from CEMC\'s archive without timing it.',
          '<b>Weeks 1 to 2 (2 to 15 November 2026):</b> the input and output contract. Reading a count then N lines, reading a list from one line, printing exactly the required lines. Practice problem 1 above.',
          '<b>Weeks 3 to 4 (16 to 29 November 2026):</b> loops and conditions with exact wording: strict and non-strict comparisons, ties, the first and last item. Questions 1 and 2 from three past Junior papers.',
          '<b>Weeks 5 to 6 (30 November to 13 December 2026):</b> counting and simulation: running totals, streaks, a state that changes step by step. Practice problem 2, then a past question 3.',
          '<b>Weeks 7 to 8 (14 to 27 December 2026):</b> strings, character by character, with slicing and building answers. Practice problem 3. Shorter sessions over the holidays: one problem a day is plenty.',
          '<b>Weeks 9 to 10 (28 December 2026 to 10 January 2027):</b> lists, dictionaries for counting, and a first two-dimensional grid with nested loops. The first full timed Junior paper, three hours, at the end of week 10.',
          '<b>Weeks 11 to 12 (11 to 24 January 2027):</b> question 5 material at Junior level: a first look at recursion, grids, and spotting a faster method. Practise taking the subtask points with a simple, slow program first.',
          '<b>Weeks 13 to 14 (25 January to 7 February 2027):</b> two more timed papers in three-hour sittings, each reviewed line by line with the teacher. Settle the level and confirm the school\'s order before CEMC\'s Thursday, February 11, 2027 deadline.',
          '<b>Week 15 (8 to 14 February 2027):</b> no new topics. Re-solve the problems missed in the timed papers and try the Practice Contest, which CEMC strongly recommends every participant attempt.',
          '<b>Week 16 (15 to 17 February 2027):</b> light review, a good night\'s sleep, and the contest at school on Wednesday 17 February 2027. Afterwards, nothing about the problems online for 48 hours, as the rules ask.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 6 to 8', p: 'Weeks 1 to 8 matter most. A first paper with questions 1 to 3 solved cleanly is a strong start.' },
          { h3: 'Grades 9 to 10', p: 'The full sixteen weeks, with question 4 as the target and question 5 subtasks as the stretch.' },
          { h3: 'Grades 11 to 12', p: 'Faster through weeks 1 to 6, then the question 5 work and an honest look at Senior.' }
        ] }
      ]
    },
    {
      id: 'pathway', tint: 'deep', eyebrow: 'Beyond Junior',
      h2: 'From CCC Junior to Senior, the CCO and the IOI',
      lede: 'Junior is a contest in its own right, but CEMC\'s pages show it as the first rung of a longer ladder. CEMC describes every step above it in terms of the Senior paper.',
      body: [
        { kind: 'table', caption: 'The CCC pathway, from CEMC\'s CCC and IOI pages (read 22 October 2026)', head: ['Step', 'What CEMC says'], rows: [
          ['CCC Senior', 'The Senior question 5 is described as an "IOI level question".'],
          ['Canadian Computing Olympiad', '"Approximately 20 of the top official CCC Senior participants from schools in Canada are invited to the CCO at the University of Waterloo each spring."'],
          ['What the CCO is', 'A "week-long learning experience featuring workshops, a contest and other extracurricular activities".'],
          ['CCO language', '"CCO participants must use C++."'],
          ['International Olympiad in Informatics', 'The CCO "is also used to select Canada\'s teams for the International Olympiad in Informatics (IOI)".'],
          ['How Canada enters the IOI', '"Canada\'s entry into the annual IOI competition is determined by performance on the" Canadian Computing Competition.'],
          ['Who decides', 'Selection of CCO participants and IOI team members "is at the discretion of the CEMC".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a Junior student adds to reach Senior',
          left: [
            'Senior questions 1 and 2 begin where Junior question 5 ends: sorting, searching and choosing an efficient method. The season after a first Junior paper is mostly about speed of thought on those ideas, and about the mathematical reasoning CEMC names for Senior questions 3 and 4.',
            'A move from Python to C++ belongs in that year too, for a student who wants the CCO in view, because the CCO accepts only C++.'
          ],
          rightH3: 'Keeping the ladder in proportion',
          right: [
            'About 20 invitations a year, across the whole country, is a very small number. For nearly every student the honest goal is a strong CCC paper, and the skills behind it.',
            'We cannot influence any invitation. CEMC decides on results, at its discretion, and we say so to every family that asks.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, CCC and CCO</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc/ioi" rel="noopener" target="_blank">Canada at the IOI</a>, read 22 October 2026. For the full Senior route, see our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a>.' }
      ]
    },
    {
      id: 'bank', tint: 'tint', eyebrow: 'The practice bank',
      h2: 'CEMC\'s free past contests and resources',
      lede: 'The richest store of CCC Junior problems belongs to CEMC, and it is free. CEMC says of its resources: "There is no registration or fee required to access these materials." We never reproduce those problems on our pages; we send students to the originals.',
      body: [
        { kind: 'table', caption: 'Free CEMC resources for a CCC Junior writer (read 22 October 2026)', head: ['Resource', 'What CEMC says it is', 'How we use it'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past contests, solutions and results</a>', '"Below you will find resources from the last 10 years." The CCC can be filtered by year, from 2016 to 2026.', 'One past Junior paper every two to three weeks, untimed at first, timed from January 2027'],
          ['<a class="ag-inline-link" href="https://cccgrader.com/" rel="noopener" target="_blank">CCC Online Grader</a>', '"the system used to run the Canadian Computing Competition", which "also provides access to practice problems and previous contests"', 'Every past problem is submitted to the grader, so students meet its verdicts long before the contest'],
          ['<a class="ag-inline-link" href="https://cscircles.cemc.uwaterloo.ca/" rel="noopener" target="_blank">Computer Science Circles</a>', 'CEMC\'s Python programming tutorials', 'Revision for a student whose loops or lists are still shaky'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">CEMC Courseware</a>', 'Math and computer science lessons for Grades 4 to 12; "No registration is required"', 'Background math for Senior-bound students'],
          ['Books CEMC names', 'Competitive Programming by Halim and Halim, and Competitive Programmers Handbook by Antti Laaksonen', 'Reading for students moving from Junior towards Senior']
        ] },
        { kind: 'p', mt: true, html: 'A note on honesty with past papers: a solution read before the problem is attempted teaches far less than one struggled towards. We ask students to spend at least twenty minutes on a past problem before opening CEMC\'s solution, and to explain the official solution back in their own words afterwards. The <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources" rel="noopener" target="_blank">CEMC resources page</a> lists everything else CEMC offers.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Across Canada',
      h2: 'Class times across Canadian time zones',
      lede: 'Our live classes are arranged in Eastern time and converted for each family, because students join from every province. There is no fixed batch time on this page; you choose the slot that suits you.',
      body: [
        { kind: 'table', caption: 'UTC offsets for winter 2026 to 2027 and summer 2027 (from the tz database, release 2026e)', head: ['Where', 'Winter (from 1 November 2026)', 'Summer (from 14 March 2027)'], rows: [
          ['British Columbia (most), Yukon', 'UTC-7', 'UTC-7, all year (in BC since 8 March 2026)'],
          ['Alberta, Saskatchewan', 'UTC-6', 'UTC-6, all year'],
          ['Manitoba', 'UTC-5', 'UTC-5, all year from 1 November 2026'],
          ['Ontario and Quebec (ET)', 'UTC-5', 'UTC-4'],
          ['Nova Scotia, New Brunswick, Prince Edward Island (AT)', 'UTC-4', 'UTC-3'],
          ['Newfoundland (NT)', 'UTC-3:30', 'UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'Eastern clocks go back on Sunday 1 November 2026 and forward on Sunday 14 March 2027, so a class time agreed in Toronto in October 2026 shifts for a family in Calgary or Vancouver when the clocks change. We confirm the time with each family at both changes. The contest itself follows the school day: CEMC asks each school to start it near the beginning of its own day on Wednesday 17 February 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages on the way to a CCC Junior paper',
    lede: 'Our stages, to place a student honestly in the first class.',
    table: { caption: 'From first program to a Junior paper (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Typing code', 'Can follow a tutorial and change a program, but not yet write one from a blank file'],
      ['2. Writing code', 'Writes short programs with loops, conditions and lists without help'],
      ['3. Reading problems', 'Turns a written problem into input, processing and output, and tests the sample'],
      ['4. Contest ready', 'Solves Junior questions 1 to 3 from past papers inside the time, and knows why a submission failed']
    ] },
    left: { h3: 'For parents', ps: [
      'A student at stage 1 in October 2026 can still write a respectable Junior paper on Wednesday 17 February 2027 with steady weekly work. Stage 2 by December 2026 is the milestone to watch.',
      'The step from stage 2 to stage 3 is where a teacher helps most, because the problem is no longer the code but the reading.'
    ] },
    right: { h3: 'For students', ps: [
      'Print what you read before you solve anything. Half of all early bugs are input bugs.',
      'Keep a list of every wrong answer and its cause. By February 2027 it is the most useful page you own.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around the CCC, from first programs to Senior',
    lede: 'Each is taught live online by one regular teacher, in a batch or one to one, for students anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'Building the base', sub: 'Before a first Junior paper', courses: [
        { code: 'CCJ / BASE / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Typed code for younger students in Grades 5 to 7.' },
        { code: 'CCJ / BASE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'One of the five CCC languages, from scratch.' },
        { code: 'CCJ / BASE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and data structures, step by step.' }
      ] },
      { num: 'II', h3: 'Junior to Senior', sub: 'Grades 9 to 12', courses: [
        { code: 'CCJ / STEP / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language the CCO requires.' },
        { code: 'CCJ / STEP / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'The reasoning Senior questions 3 and 4 ask for.' },
        { code: 'CCJ / STEP / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'For students also writing math contests.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Strong coders and university', courses: [
        { code: 'CCJ / ADV / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'Contest technique beyond high school.' },
        { code: 'CCJ / ADV / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The systematic treatment, for ages 18 and up.' },
        { code: 'CCJ / ADV / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'For schools that offer AP, in Java.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live CCC classes that fit a Canadian school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches, with the time converted to your province.' },
      { time: 'Weekends', l: 'Weekend mornings leave the school week free for homework.' },
      { time: '1-on-1', l: 'Timed around the student, and paced to the 2027 contest date.' }
    ],
    cells: [
      { h3: 'Problems we wrote', p: 'Original practice sets, with CEMC\'s archive for past papers.' },
      { h3: 'Grader-style testing', p: 'Exact input and output, checked like the real thing.' },
      { h3: 'Timed papers', p: 'Three-hour sittings from January 2027, reviewed afterwards.' },
      { h3: 'Python, then C++', p: 'Python for Junior; C++ when Senior comes into view.' },
      { h3: 'Coast to coast', p: 'Students from British Columbia to Newfoundland.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty, or a teacher to yourself.' }
    ]
  },

  projectsH2: 'Work our students have built',
  projectsLede: 'Contest practice sits alongside real projects. A selection from our learners is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds more.',
  reviewsLede: 'Parents\' Google reviews, printed exactly as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'The contest fee is the school\'s business with CEMC. Our fee covers the teaching only, paid one month at a time with no contract for the season, so a student can stop after February 2027 without anything owed.',
    free: ['A free first class', 'A short Junior-style problem to start', 'No card details asked for'],
    group: ['Fifteen to twenty students in a batch', 'One teacher all season', 'Pick the batch that suits you', 'Billed monthly'],
    one: ['A teacher to yourself', 'Paced to the 2027 contest', 'Built on your own code']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'CCC Junior: common questions',
    items: [
      { q: 'What is CCC Junior?', a: 'It is the Junior level of the Canadian Computing Competition, run by CEMC at the University of Waterloo. CEMC describes Junior as being for any participant with beginner to intermediate programming skills, whatever their grade. Students solve five programming problems online, at school.' },
      { q: 'When is the CCC in 2027?', a: 'CEMC lists the 2027 CCC for Wednesday, February 17, 2027 in North and South America, and Thursday, February 18, 2027 elsewhere. The ordering deadline for schools is Thursday, February 11, 2027.' },
      { q: 'How long is the CCC?', a: 'Three hours. CEMC says an individual 3-hour timer starts when the student enters their details in the CCC Online Grader. A student who opens both Junior and Senior has a maximum of 3 hours in total across the two.' },
      { q: 'How many questions are on CCC Junior, and how is it scored?', a: 'Five questions, each worth 15, for a score out of 75. CEMC says problems may have subtasks with partial scores, and the grader keeps the highest score across a student\'s submissions for each problem.' },
      { q: 'Should my child write CCC Junior or Senior?', a: 'CEMC lets each student choose a level regardless of grade. Our rule of thumb: if past Junior questions 4 and 5 are solved comfortably inside the time, Senior is the more useful paper. CEMC invites about 20 of the top official CCC Senior participants from schools in Canada to the Canadian Computing Olympiad, at its discretion.' },
      { q: 'Can a student register for the CCC on their own?', a: 'No. CEMC says it is not possible for students to individually register, and all students must participate through their school. If their own school is not taking part, CEMC suggests looking for another local school that will let them join.' },
      { q: 'Can a homeschooled student write the CCC?', a: 'CEMC\'s pages that we read describe one route for a student whose school does not take part: another local school that agrees to host them. The contest must be written in person at the ordering school, under supervision, so ask a nearby school early.' },
      { q: 'Which programming languages can be used on the CCC?', a: 'CEMC allows C, C++, Python 2, Python 3 and Java, and the contest is available in English and French. The CCO, the next step after Senior, requires C++.' },
      { q: 'Can students use AI tools or the internet during the CCC?', a: 'Only for editing, compiling, submitting and reading official language documentation. The CCC rules forbid generative AI and AI tools inside an editor. Outside the contest, ChatGPT needs a parent\'s permission for anyone under 18.' },
      { q: 'Where can I find CCC Junior past problems?', a: 'CEMC publishes past contests, solutions and results free on its website, covering the last ten years, and the CCC Online Grader lets students open a free practice account. We do not copy those problems; we link to them and write our own practice sets.' },
      { q: 'What times are CCC classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We arrange times in Eastern time and convert them for your province.' },
      { q: 'Does the CCC help with university admission?', a: 'CEMC states that taking part in the CCC is not required for admission to the Faculty of Mathematics at the University of Waterloo. Its value is the problem solving a student builds while preparing, which no contest result can promise.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian students who like to solve problems with code.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have for families across Canada.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Our main CCC page, with the Senior route in detail.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The math contests CEMC runs for Grades 7 to 12.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help that sits under a Senior paper.' },
      { href: '/ioi-olympiad-informatics-training', label: 'IOI training', p: 'What the top of the informatics ladder asks.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'Another online contest many CCC writers try.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the bug a wrong-answer verdict hides.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Turning a problem statement into steps.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation errors', p: 'The error first-time contest writers meet most.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class starts with one short Junior-style problem we wrote, solved together on screen. By the end, the teacher can tell you which stage the student is at and what the weeks to February 2027 should hold.',
    readFirst: 'Prefer to read more before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows what happens in a live class, and the <a class="ag-inline-link" href="/courses">course list</a> carries every syllabus in full.',
    note: 'Our teachers are based in India and teach every class over live video, so there is no Canadian centre to visit. WhatsApp is the quickest way to reach us from any province.',
    formNote: 'The first class is free, and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Read the statement twice'
  },

  personalityCss: `
.ag-root.ag-ccj .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ccj .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-ccj .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ccj .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ccj .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-ccj .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) CCC page, How contests work, contests overview, past contests and resources pages, and the CCC Online Grader rules and sample-programs documents, read raw on 22 October 2026: 2027 dates (Wednesday, February 17, 2027 in the Americas; Thursday, February 18, 2027 elsewhere; ordering deadline Thursday, February 11, 2027); Junior and Senior audience lines; 5 questions, 3 hours, score out of 75, 15 per question, subtasks; languages C, C++, Python 2, Python 3, Java; English and French; school-only entry and the another-local-school route; official participant rule; 2026 Junior mean 42.65, cutoff 58, 3421 contestants; CCO about 20 Senior writers, C++ only, IOI selection; grader rules on standard input and output, exact output, 3 s and 512 MB, 50 submissions, max of Junior and Senior, no generative AI; Pypy3 7.3.9.',
    localProject: 'Three original Junior-style practice problems written by us (Line-up Leaders, Plough Days, Postal Pattern) with Python 3.8 solutions run on their sample input, each naming the mistake it catches; a six-skill table; a 16-week plan from 2 November 2026 to the 17 February 2027 contest; our arithmetic on CEMC\'s 2026 Junior figures, 58 = 45 + 13 and 42.65 / 75 = about 57 percent. Lesson family: reading a specification exactly.',
    requiredMentions: ['Wednesday, February 17, 2027', 'Thursday, February 11, 2027', 'Score out of 75', 'Prompts or additional output must not be produced', 'maximum score between the Junior and Senior contest', 'such as CoPilot or ChatGPT', 'Pypy3 7.3.9', 'up to 50 submissions per problem', 'another local school that will allow them to join as a participant', '58 = 45 + 13', 'Line-up Leaders', 'Plough Days'],
    sources: [
      { claim: 'CCC 2027 dates, levels, format, languages, fee, practice account, official participants, 2026 averages and cutoffs, CCO and IOI selection, Waterloo admission note.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Entry only through a school; another local school; school accounts; in-person supervised writing only.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Canada\'s IOI entry determined by performance on the CCC.', url: 'https://cemc.uwaterloo.ca/contests/ccc/ioi' },
      { claim: 'CCC grader rules: standard input and output, exact output, limits, submissions, scoring, AI and internet rules, 48-hour rule.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'Python 3 on the grader is Pypy3 7.3.9 running Python 3.8.13.', url: 'https://cccgrader.com/sample_soln.pdf' },
      { claim: 'Past contests from the last 10 years; free resources with no registration or fee.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' }
    ],
    rejectedClaims: [
      'Any CEMC past problem or solution: never reproduced; the page links to CEMC\'s archive and uses three problems we wrote.',
      'A separate CEMC route for homeschooled students: not found on the pages read, so the page states only the another-local-school route.',
      'A combined Junior and Senior contestant total: not printed; CEMC\'s two figures are shown separately.',
      'Names of IOI medallists or their schools from CEMC\'s IOI page: not reproduced.',
      'That our classes raise scores, earn certificates or lead to CCO invitations: refused; CEMC decides at its discretion.',
      'The fee as a typed figure: written in words, outside the FAQ, as CEMC\'s ten-dollar fee per participant.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
