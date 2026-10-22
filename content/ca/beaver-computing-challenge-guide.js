'use strict';
// Beaver Computing Challenge guide (ag- contest door; Canada cluster Plan 2, row 42).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026:
//  - cemc.uwaterloo.ca/contests/bcc (keyword-research-2026-09/ca/src/cemc/bcc.html, bcc.txt): "North and South
//    America: Monday, November 9, 2026 to Friday, November 20, 2026"; ordering deadline "Monday, October 26, 2026";
//    "Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC." (and the Grade 8 or below,
//    Grade 10 or below lines); "12 multiple-choice questions out of a total of 60 (Grade 5/6)."; "15 multiple-choice
//    questions out of a total of 90 (Grade 7/8 and Grade 9/10)."; "Time allowed for completion is 45 minutes.";
//    "Written in school, participants write online, individually."; "Some calculators permitted."; content line "only
//    require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"; "an
//    online, multiple-choice contest designed to introduce students to computer science concepts and problem-solving
//    techniques"; supervision "within the two-week contest period"; "Students may participate in at most one Beaver
//    Computing Challenge in a school year."; level chosen at the start by a grade button; Part A/B/C values (5/6: 6, 5,
//    4; 7/8 and 9/10: 8, 6, 4); "Each unanswered question is worth 2 up to a maximum of 5 unanswered questions at the
//    Grade 5/6 level and a maximum of 6 unanswered questions at the Grade 7/8 and 9/10 levels."; "exactly 45 minutes";
//    "Participants will not receive their results immediately."; results "approximately one week after the end of the
//    two-week contest period"; solutions "will include Connections to Computer Science"; "The BCC emphasizes
//    participation over competition."; fee three dollars per participant plus a processing fee per order (words only),
//    "minimum order requirement of 10 contests"; "Our contests are not tests or exams. There is no passing or failing
//    score."; Certificate of Distinction "top 25% of all participants within their own school, for schools with at
//    least 4 participants"; 2025 table means 37.22/60, 68.93/90, 65.84/90, contestants 14 260, 16 344, 7827 (never
//    summed); practice on the "BCC Practice and Live Challenges website", "made available closer to the official
//    contest date".
//  - cemc.uwaterloo.ca/contests (src/cemc/contests.txt): "This contest is available in English only."; Grade 5 to 10.
//  - beavercomputingchallenge.ca (src-pilots/beaver-computing-challenge-guide/beavercomputingchallenge-home.txt):
//    "You may change your answer at any time, and may complete the problems in any order."; "you will not be
//    automatically moved onto the next question"; A easier than B easier than C, "Within each group (A,B or C), the
//    problems will be in random order."; "Incorrectly answered questions are worth 0 marks."; "Erase" appears "as the
//    fifth choice in all multiple choice questions".
//  - cemc.uwaterloo.ca/resources/past-contests (src/cemc/past-contests.txt): BCC 2025 papers for 5/6, 7/8, 9/10 with
//    solutions; "resources from the last 10 years".
// Our own material, labelled on the page: six original practice tasks (Canoe Dock, Trail Lanterns, Plough Route,
// Rover Commands, Portage Pack, Library Check Digit) with answers and explanations; a Python checker for tasks 3 and 5
// (run under CPython 3.13 on 22 October 2026, parses as Python 3.8): "Task 3: 13 minutes via A-C-B-D-E-F" and
// "Task 5: 14 points with food barrel + canoe pack"; inversion count 3 for 3 1 4 2; check digits verified; the scoring
// arithmetic 5 x 8 + 5 x 6 + 5 x 4 = 90 and 4 x 6 + 4 x 5 + 4 x 4 = 60; the guess-versus-blank expected values,
// which assume four answer choices (the contest site calls Erase the fifth choice); the 2025 means as percentages
// (37.22 / 60 = 62.0, 68.93 / 90 = 76.6, 65.84 / 90 = 73.2); the three-week run-up.
// Lesson family: computational thinking without code (model the situation, then reason about it).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CHECK = `# Our answer checker for practice tasks 3 and 5 (our tasks, not CEMC's)
from itertools import combinations

# Task 3: every trail and its ploughing time in minutes
trails = {("A", "B"): 4, ("A", "C"): 2, ("B", "C"): 1, ("B", "D"): 5,
          ("C", "D"): 8, ("C", "E"): 10, ("D", "E"): 2, ("D", "F"): 6,
          ("E", "F"): 3}
roads = {}
for (x, y), t in trails.items():
    roads.setdefault(x, []).append((y, t))
    roads.setdefault(y, []).append((x, t))

def routes(here, goal, seen, time):
    if here == goal:
        yield time, seen
        return
    for nxt, t in roads[here]:
        if nxt not in seen:
            yield from routes(nxt, goal, seen + [nxt], time + t)

fastest = min(routes("A", "F", ["A"], 0))
print("Task 3:", fastest[0], "minutes via", "-".join(fastest[1]))

# Task 5: weight in kg and points for each item; the pack holds 10 kg
gear = {"tent": (6, 10), "food barrel": (5, 7),
        "canoe pack": (5, 7), "map case": (1, 1)}
top = (0, ())
for r in range(len(gear) + 1):
    for pick in combinations(gear, r):
        kg = sum(gear[g][0] for g in pick)
        points = sum(gear[g][1] for g in pick)
        if kg <= 10 and points > top[0]:
            top = (points, pick)
print("Task 5:", top[0], "points with", " + ".join(top[1]))`;

const CHECK_OUT = `Task 3: 13 minutes via A-C-B-D-E-F
Task 5: 14 points with food barrel + canoe pack`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'The Beaver Computing Challenge for Grades 5 to 10 from CEMC\'s 2026 page: dates, scoring, entry through school, and six original practice tasks with answers.' },
  slug: 'beaver-computing-challenge-guide',
  code: 'bccg',
  accent: '#2E1975',
  accentRationale: 'Beaver Computing Challenge guide, Canada: a deep ink violet #2E1975, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 13.10 on the paper #FBF8F2 and above 11 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Beaver Computing Challenge guide',
  title: 'Beaver Computing Challenge 2026: Guide and Practice Tasks',
  description: 'The 2026 Beaver Computing Challenge for Grades 5 to 10: CEMC\'s dates, the 45-minute format, how marks and blanks score, and six original practice tasks.',
  ogDescription: 'CEMC runs the 2026 Beaver Computing Challenge from 9 to 20 November 2026. The format, the scoring rules, how a school enters, and six practice tasks we wrote, with answers.',
  twitterDescription: 'The 2026 Beaver Computing Challenge, explained from CEMC\'s page, with six original practice tasks.',
  pageName: 'Beaver Computing Challenge Guide',
  webPageDescription: 'A guide for Canadian families and students to the 2026 Beaver Computing Challenge, built from CEMC\'s contest page and the BCC contest site, with original practice tasks and worked answers.',
  courseDescription: 'Live online problem solving and computational thinking classes for students in Grades 3 to 8 across Canada, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Beaver Computing Challenge guide',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#glance', label: '2026 at a glance' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#tasks', label: 'Practice tasks' },
    { href: '#entry', label: 'Entry' },
    { href: '#runup', label: 'Three weeks' }
  ],
  eyebrow: 'Canada &middot; CEMC computing contests &middot; Grades 5 to 10',
  h1: 'Beaver Computing Challenge guide for 2026',
  lede: 'The Beaver Computing Challenge is the gentlest door into computer science that the University of Waterloo\'s Centre for Education in Mathematics and Computing (CEMC) offers. Nobody writes a line of code. Students read short puzzles about routes, codes, sorting and rules, pick one of the answers on screen, and have 45 minutes to do it. This page sets out what CEMC publishes for the 2026 contest, how the marks work (including the two points a blank answer earns), how a student gets entered, and six practice tasks our teachers wrote, each with the answer, the reasoning and the computer science idea underneath it.',
  secondaryCta: { href: '#tasks', label: 'Try the six tasks' },
  wa: 'Hello Modern Age Coders, my child in Canada is writing the Beaver Computing Challenge. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; every practice task on this page written by our teachers',
  spec: [
    ['Run by', 'CEMC, University of Waterloo'],
    ['2026 window', '9 to 20 November 2026'],
    ['Length', '45 minutes'],
    ['Levels', 'Grade 5/6, 7/8, 9/10'],
    ['Questions', '12 or 15, multiple choice'],
    ['Coding needed', 'None'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Beaver Computing Challenge (BCC) is CEMC\'s 45-minute online multiple-choice contest in computational thinking for Grades 5 to 10, written at school between 9 and 20 November 2026. No coding is needed. Modern Age Coders prepares students live online, in a batch or one to one, in its Problem Solving and Computational Thinking for Kids course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for a Beaver writer',
    lede: 'The first matches the Beaver almost exactly: puzzles first, code second. The other two carry the same thinking into math and into real programs.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'BCC / 01', title: 'Problem Solving and Computational Thinking for Kids', note: 'Grades 3 to 8. Logic, patterns, sequencing and step-by-step reasoning, taught live with puzzles before any typing.' },
      { course: 'maths-through-coding', code: 'BCC / 02', title: 'Maths Through Coding', note: 'Ages 10 to 15. Number sense and patterns explored in Python, the same mix of math and computing the Beaver rewards.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BCC / 03', title: 'Problem Solving for Teens', note: 'Ages 13 to 18. For a Grade 9/10 writer ready to turn Beaver-style reasoning into algorithms and data structures.' }
    ]
  },

  sections: [
    {
      id: 'glance', tint: 'tint', eyebrow: 'The 2026 contest',
      h2: 'The 2026 Beaver Computing Challenge at a glance',
      lede: 'Every row below is taken from CEMC\'s Beaver Computing Challenge page or its contests overview, both read on 22 October 2026. The ordering deadline is close: CEMC set it for Monday, October 26, 2026.',
      body: [
        { kind: 'table', caption: 'The 2026 BCC as CEMC publishes it (read 22 October 2026)', head: ['Point', 'What CEMC says for 2026'], rows: [
          ['Contest window', '"North and South America: Monday, November 9, 2026 to Friday, November 20, 2026". Schools outside the Americas are asked to contact CEMC.'],
          ['Ordering deadline', 'Schools order by Monday, October 26, 2026.'],
          ['Who can write which level', '"Students in Grade 6 or below are eligible to participate in the Grade 5/6 BCC." The Grade 7/8 level is for Grade 8 or below, and Grade 9/10 for Grade 10 or below.'],
          ['Questions', '"12 multiple-choice questions out of a total of 60 (Grade 5/6)." "15 multiple-choice questions out of a total of 90 (Grade 7/8 and Grade 9/10)."'],
          ['Time', '"Time allowed for completion is 45 minutes."'],
          ['Setting', '"Written in school, participants write online, individually." "Some calculators permitted."'],
          ['What it assumes', 'The questions "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces".'],
          ['Language', '"This contest is available in English only."'],
          ['How often', '"Students may participate in at most one Beaver Computing Challenge in a school year."'],
          ['Fee', 'A three-dollar fee per participant plus a processing fee per order, paid by the school, with a minimum order of 10 contests.'],
          ['Results', 'Available to the supervising teacher "approximately one week after the end of the two-week contest period", with Certificates of Participation and Certificates of Distinction.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A contest about thinking, not typing',
          left: [
            'CEMC describes the BCC as "an online, multiple-choice contest designed to introduce students to computer science concepts and problem-solving techniques". The puzzles borrow their ideas from computer science (searching, sorting, encoding, networks, rules that change a state) but the student solves them with a pencil, scrap paper and careful reading.',
            'That is why a Grade 5 student who has never opened a code editor can do well, and why a confident Grade 9 programmer can still be caught out. The skill being tested is building an accurate picture of the situation before choosing.'
          ],
          rightH3: 'One sitting, chosen by the school',
          right: [
            'The two-week window is for schools, not students. CEMC asks supervisors to run the contest "within the two-week contest period", and notes that schools typically use one day in it, spreading across several days only when numbers or rooms require.',
            'So a family\'s first question is simply which day the school has picked. The student then sits once, for 45 minutes, on the BCC contest site.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">CEMC, Beaver Computing Challenge</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC contests overview</a>, read 22 October 2026. Modern Age Coders is not connected with CEMC or the University of Waterloo; students write the BCC through their own schools.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'How the marks work',
      h2: 'BCC scoring: three parts, and why a blank is worth 2',
      lede: 'The Beaver is scored in a way most students have never met. Easier questions are worth more, a wrong answer scores zero, and a question left blank earns a small fixed mark, up to a limit. Knowing this changes how a student should spend the last five minutes.',
      body: [
        { kind: 'table', caption: 'Marks per question in the 2026 BCC, from CEMC\'s supervisor steps and the BCC contest site (read 22 October 2026)', head: ['', 'Grade 5/6', 'Grade 7/8 and Grade 9/10'], rows: [
          ['Part A (easiest)', '4 questions, 6 marks each', '5 questions, 8 marks each'],
          ['Part B', '4 questions, 5 marks each', '5 questions, 6 marks each'],
          ['Part C (hardest)', '4 questions, 4 marks each', '5 questions, 4 marks each'],
          ['Wrong answer', '0 marks', '0 marks'],
          ['Left blank', '2 marks each, for up to 5 blanks', '2 marks each, for up to 6 blanks'],
          ['Total', 'Out of 60', 'Out of 90']
        ] },
        { kind: 'p', mt: true, html: 'CEMC\'s own wording for the blank rule: "Each unanswered question is worth 2 up to a maximum of 5 unanswered questions at the Grade 5/6 level and a maximum of 6 unanswered questions at the Grade 7/8 and 9/10 levels." The contest site adds that "Incorrectly answered questions are worth 0 marks", and that a student can clear a choice with an "Erase" option, which "will appear as the fifth choice in all multiple choice questions".' },
        { kind: 'p', html: 'Our check that the parts add up, labelled as ours: at Grade 7/8 and 9/10, 5 x 8 + 5 x 6 + 5 x 4 = 40 + 30 + 20 = 90; at Grade 5/6, 4 x 6 + 4 x 5 + 4 x 4 = 24 + 20 + 16 = 60. Part A alone carries 24 of the 60 marks at Grade 5/6 and 40 of the 90 at the upper levels, which is why careful work on the first questions matters more than heroics on the last.' },
        { kind: 'table', mt: true, caption: 'Guess or leave it blank? Expected marks from a pure guess (our arithmetic, assuming four answer choices, since the site lists Erase as the fifth)', head: ['Question type', 'Blank', 'Blind guess (1 in 4)', 'After ruling out one choice (1 in 3)', 'After ruling out two (1 in 2)'], rows: [
          ['Part A, Grade 7/8 or 9/10 (8 marks)', '2', '2.00', 'about 2.67', '4.00'],
          ['Part B, Grade 7/8 or 9/10 (6 marks)', '2', '1.50', '2.00', '3.00'],
          ['Part C, any level (4 marks)', '2', '1.00', 'about 1.33', '2.00'],
          ['Part A, Grade 5/6 (6 marks)', '2', '1.50', '2.00', '3.00']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table tells a student',
          left: [
            'On a hard Part C question, a blind guess is worth half of what a blank is worth on average. Unless two choices can honestly be ruled out, the blank is the better bet there.',
            'On an easy Part A question the sums tilt the other way: rule out even one choice and a guess beats the blank. The blank allowance is also capped at five or six questions, so it is a safety net for a few questions, not a strategy.'
          ],
          rightH3: 'What the table does not tell a student',
          right: [
            'Expected marks are averages over many guesses; one sitting is one throw. The real lesson in our classes is the habit of eliminating answers for a reason, which is the same habit that solves the question outright.',
            'The 2025 averages CEMC publishes, read as percentages by us, show how the levels compare: 37.22 of 60 at Grade 5/6 (about 62.0 percent), 68.93 of 90 at Grade 7/8 (about 76.6 percent) and 65.84 of 90 at Grade 9/10 (about 73.2 percent).'
          ] },
        { kind: 'source', html: 'Sources: CEMC\'s BCC page (supervisor steps, 2025 averages and statistics) and the instructions on the <a class="ag-inline-link" href="https://beavercomputingchallenge.ca/" rel="noopener" target="_blank">BCC contest site</a>, read 22 October 2026. CEMC printed 14 260, 16 344 and 7827 contestants for the three 2025 levels; we show them separately and do not add them.' }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'What it rewards',
      h2: 'The thinking behind Beaver questions',
      lede: 'CEMC says the BCC "emphasizes computational and logical thinking", and publishes its solutions with a section called Connections to Computer Science that links each puzzle to a real idea in the field. The task families below are our own grouping of those ideas, written to help a student recognise a question type quickly.',
      body: [
        { kind: 'table', caption: 'Common Beaver task families (our classification, not CEMC\'s)', head: ['Task family', 'What the puzzle usually looks like', 'The computer science idea'], rows: [
          ['Ordering and swapping', 'Objects in a row that must be rearranged under a rule about which moves are allowed', 'Sorting, and counting the steps a sort needs'],
          ['Codes and signals', 'Lights, flags, beads or symbols standing for letters or numbers', 'Binary, encoding and how many patterns a few symbols can make'],
          ['Routes and networks', 'Towns joined by paths with times or costs; find the quickest or cheapest way', 'Graphs and shortest paths'],
          ['Following instructions', 'A robot, a machine or a recipe that obeys a short list of commands', 'Programs, sequencing and tracing execution'],
          ['Choosing under limits', 'A bag, a budget or a timetable that cannot hold everything', 'Optimisation, and why the obvious choice can be wrong'],
          ['Checking and errors', 'A number or message that might have been copied wrongly', 'Error detection and check digits']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two-reading habit',
          left: [
            'Beaver questions are short stories with exact rules hidden in ordinary words: "only neighbours may swap", "a lantern that is off shows nothing". Most wrong answers come from a rule read once and remembered loosely.',
            'We teach students to read the story once for the situation, then a second time to underline every rule, and to draw the situation before looking at the choices.'
          ],
          rightH3: 'Why math class is enough',
          right: [
            'Because CEMC writes the questions for the provincial math curricula, nothing beyond school arithmetic, patterns and logic is assumed. A student who can organise information in a table or a sketch already has the main tool.',
            'What students rarely have is practice turning a story into that table. That is the gap the six tasks below are built to close.'
          ] }
      ]
    },
    {
      id: 'tasks', tint: 'deep', eyebrow: 'Six practice tasks',
      h2: 'Six original Beaver-style practice tasks, with answers',
      lede: 'Our teachers wrote these six tasks for this page. They are our tasks, not CEMC questions, and they are not copied or adapted from any past Beaver paper; for real past papers, use CEMC\'s free archive. Tasks 1 and 2 sit at Part A level, 3 and 4 at Part B, 5 and 6 at Part C. Cover the answer, solve each one on paper, then read the reasoning.',
      body: [
        { kind: 'p', html: '<b>Task 1: Canoe Dock (Part A).</b> Four canoes, numbered 3, 1, 4 and 2, sit in a row on a dock in that order. The camp counsellor wants them in the order 1, 2, 3, 4. The only move allowed is to swap two canoes that are side by side. What is the fewest number of swaps needed? <b>(A)</b> 2 <b>(B)</b> 3 <b>(C)</b> 4 <b>(D)</b> 5' },
        { kind: 'p', html: '<b>Answer: (B) 3.</b> Count the pairs that are in the wrong order relative to each other: 3 before 1, 3 before 2, and 4 before 2. That is three pairs. Each swap of neighbours fixes exactly one such pair, so at least three swaps are needed, and three are enough: 3 1 4 2 becomes 1 3 4 2, then 1 3 2 4, then 1 2 3 4. <i>The computer science idea:</i> these out-of-order pairs are called inversions, and counting them tells you exactly how much work a neighbour-swapping sort, such as bubble sort, must do.' },
        { kind: 'p', mt: true, html: '<b>Task 2: Trail Lanterns (Part A).</b> Each post on a winter trail has three lanterns in a row. Each lantern is either on or off, and rangers read the pattern as a signal. A post with all three lanterns off cannot be seen at night, so it is not used as a signal. How many different signals can one post show? <b>(A)</b> 3 <b>(B)</b> 6 <b>(C)</b> 7 <b>(D)</b> 8' },
        { kind: 'p', html: '<b>Answer: (C) 7.</b> Each lantern has two states, so three lanterns make 2 x 2 x 2 = 8 patterns. Removing the all-off pattern leaves 7. The trap is answer (D), which forgets the rule in the last sentence, and answer (A), which counts lanterns instead of patterns. <i>The computer science idea:</i> each lantern is a bit; three bits give eight values, and real systems often reserve one value, as here, to mean "nothing".' },
        { kind: 'table', mt: true, caption: 'Task 3: Plough Route (Part B). Ploughing time, in minutes, for each trail between six cabins (our task)', head: ['Trail', 'Minutes', 'Trail', 'Minutes'], rows: [
          ['A to B', '4', 'C to E', '10'],
          ['A to C', '2', 'D to E', '2'],
          ['B to C', '1', 'D to F', '6'],
          ['B to D', '5', 'E to F', '3'],
          ['C to D', '8', '', '']
        ] },
        { kind: 'p', html: '<b>Task 3: Plough Route (Part B).</b> A plough must clear a path from cabin A to cabin F, using the trails in the table. Trails can be used in either direction. What is the shortest total ploughing time from A to F? <b>(A)</b> 12 <b>(B)</b> 13 <b>(C)</b> 14 <b>(D)</b> 15' },
        { kind: 'p', html: '<b>Answer: (B) 13.</b> Work outward from A and keep the quickest time to each cabin. C is 2. B is 3, because A to C to B (2 + 1) beats the direct trail (4). D is 8 (B plus 5), which beats C to D (2 + 8 = 10). E is 10 by way of D (8 + 2), better than the direct C to E route (2 + 10 = 12). F is then the smaller of D to F (8 + 6 = 14) and E to F (10 + 3 = 13), so 13, by A, C, B, D, E, F. The trap is (C): stopping at the direct trail from D. <i>The computer science idea:</i> keeping the quickest known time to every place, and improving it as you go, is the heart of Dijkstra\'s shortest-path algorithm, used in every map app.' },
        { kind: 'p', mt: true, html: '<b>Task 4: Rover Commands (Part B).</b> A rover starts on a square of a grid, facing north. F moves it forward one square, R turns it right on the spot and L turns it left on the spot. Which program brings the rover back to the square where it started? <b>(A)</b> F R F R F R F <b>(B)</b> F F R F F R F F <b>(C)</b> F L F L F R F <b>(D)</b> F R R F F' },
        { kind: 'p', html: '<b>Answer: (A).</b> Trace each program on a sketch. (A) goes north, east, south and west, one square each: a small square that closes on the start. (B) ends two squares east of the start. (C) ends two squares west of the start: its last turn is R, which points the rover west, where an L would have closed the loop. (D) turns around and overshoots the start by one square. <i>The computer science idea:</i> tracing a program by hand, one instruction at a time, is how programmers check code before trusting it; the "turn on the spot" detail matters as much as a semicolon does.' },
        { kind: 'p', mt: true, html: '<b>Task 5: Portage Pack (Part C).</b> A canoe trip can carry at most 10 kg in the last pack. The choices are a tent (6 kg, worth 10 points to the group), a food barrel (5 kg, 7 points), a canoe pack (5 kg, 7 points) and a map case (1 kg, 1 point). What is the most points the pack can carry? <b>(A)</b> 11 <b>(B)</b> 12 <b>(C)</b> 14 <b>(D)</b> 17' },
        { kind: 'p', html: '<b>Answer: (C) 14.</b> The obvious move is to take the tent, the most valuable item, first. That leaves 4 kg, enough only for the map case: 11 points, which is trap (A). Leaving the tent behind and taking the food barrel and the canoe pack fills the 10 kg exactly and scores 14. Answer (D) adds everything and ignores the limit. <i>The computer science idea:</i> this is a tiny knapsack problem, and it shows why a "greedy" rule (always grab the biggest first) can lose to a careful look at combinations.' },
        { kind: 'p', mt: true, html: '<b>Task 6: Library Check Digit (Part C).</b> A school library writes each card number as four digits, a dash, and a check digit. The check digit is the last digit of the sum of the first four. For example, 4096-9 is correct because 4 + 0 + 9 + 6 = 19. One of these cards was copied wrongly. Which one? <b>(A)</b> 4096-9 <b>(B)</b> 1234-0 <b>(C)</b> 2026-1 <b>(D)</b> 7310-1' },
        { kind: 'p', html: '<b>Answer: (C) 2026-1.</b> The digits 2, 0, 2 and 6 add to 10, whose last digit is 0, so the check digit should be 0. The others pass: 1 + 2 + 3 + 4 = 10 (check 0) and 7 + 3 + 1 + 0 = 11 (check 1). A follow-up our teachers always ask: if someone swaps two digits, for example writing 1243-0, does this rule notice? It does not, because the sum stays the same. <i>The computer science idea:</i> check digits catch copying mistakes, and real schemes give each position a different weight precisely so that swapped digits are caught too.' },
        { kind: 'code', mt: true, label: 'Our checker for tasks 3 and 5 &middot; Python', lang: 'python', code: CHECK, note: 'The Beaver itself involves no programming. This checker is for older students, parents and teachers who want to confirm our answers by letting a computer try every route and every packing. It tries all routes without repeating a cabin, and every combination of gear, and keeps the highest score.' },
        { kind: 'code', label: 'What the checker prints', lang: 'text', code: CHECK_OUT }
      ]
    },
    {
      id: 'entry', tint: 'tint', eyebrow: 'How students enter',
      h2: 'How a student is entered for the Beaver',
      lede: 'There is no family sign-up for the BCC. A teacher orders it for the school, the school sets the day, and the student logs in with details the supervisor hands out. These steps follow CEMC\'s BCC page, read on 22 October 2026.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask the school this week.</b> CEMC\'s ordering deadline for 2026 is Monday, October 26, 2026. A math or computer science teacher, or whoever runs contests at the school, places the order.',
          '<b>A school new to CEMC needs an account first.</b> CEMC says a school that has never taken part in a CEMC contest must apply for a CEMC school account before it can order. That review takes time, so a first-time school may not be able to enter this autumn.',
          '<b>The order counts students, not levels.</b> CEMC asks for the total number taking part; each student picks the level at the start by clicking the matching button, such as "Grade 7/8 BCC".',
          '<b>The supervisor hands out logins.</b> About a week before the contest, user IDs and passwords appear for the teacher, and closer to the day the teacher receives a second password that opens the current Challenge.',
          '<b>Practise on the contest platform.</b> CEMC encourages students to try the practice Challenges on the BCC Practice and Live Challenges website, which it makes available closer to the contest date.',
          '<b>Write once, at school.</b> The student enters name, grade and the other details asked for, then has exactly 45 minutes. CEMC notes that "Participants will not receive their results immediately."'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the school is not taking part',
          left: [
            'CEMC\'s general rule for all its contests is that students take part through a school. Its how-contests-work page also names one fallback: finding another local school willing to let the student write with its participants. With a deadline only days away, that is a long shot for 2026, but worth asking about.',
            'If the 2026 Beaver is out of reach, the same thinking carries straight into CEMC\'s later contests. The section on what comes next lists the 2027 options.'
          ],
          rightH3: 'Certificates, and what they mean',
          right: [
            'CEMC lets the school print a Certificate of Distinction "for each participant scoring in the top 25% of all participants within their own school, for schools with at least 4 participants". The comparison is inside the school, not across Canada.',
            'CEMC is plain about the spirit of the thing: "Our contests are not tests or exams. There is no passing or failing score." We say the same to every Grade 5 student who arrives nervous.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">CEMC, Beaver Computing Challenge: contest supervision, fees, and awards</a>, read 22 October 2026. For CEMC\'s full rules on school accounts, see <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a>.' }
      ]
    },
    {
      id: 'platform', tint: 'deep', eyebrow: 'On the day',
      h2: 'Inside the 45 minutes: how the contest screen behaves',
      lede: 'The BCC runs on its own contest site, beavercomputingchallenge.ca. Its instructions page is short, and three of its lines change how a student should move through the paper.',
      body: [
        { kind: 'table', caption: 'Rules of the BCC contest screen, quoted from the instructions on beavercomputingchallenge.ca (read 22 October 2026), with our advice', head: ['What the site says', 'What it means in practice'], rows: [
          ['"You may change your answer at any time, and may complete the problems in any order."', 'Answer every question you can see quickly first, then return to the slow ones.'],
          ['"you will not be automatically moved onto the next question"', 'After answering, pick the next question yourself from the list; nothing advances on its own.'],
          ['Part A problems are meant to be easier than B, and B easier than C; "Within each group (A,B or C), the problems will be in random order."', 'Two students side by side may see the questions in a different order, so there is nothing to gain by glancing across.'],
          ['A timer shows the time remaining from the 45 minutes.', 'Check it at 15 and 30 minutes; at 40, decide what stays blank.'],
          ['An "Erase" option is offered as the fifth choice.', 'A guessed answer can be cleared back to blank if you change your mind.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A pacing plan for the 45 minutes (ours)',
          left: [
            'Minutes 0 to 15: every Part A question, carefully, because they carry the most marks. Minutes 15 to 35: Part B, then Part C, skipping any that need more than four minutes of drawing.',
            'Minutes 35 to 42: return to the skipped questions with fresh eyes. Minutes 42 to 45: apply the blank-or-guess rule from the scoring table, and stop.'
          ],
          rightH3: 'What to bring',
          right: [
            'CEMC encourages supervisors to provide scrap paper and pencils, and permits some calculators. Scrap paper matters more than the calculator: nearly every task is solved by a sketch, a table or a trace.',
            'Students who practise drawing the situation before reading the answer choices finish with time to spare far more often than students who stare at the choices.'
          ] }
      ]
    },
    {
      id: 'runup', tint: 'tint', eyebrow: 'Three weeks',
      h2: 'A three-week run-up to the November 2026 Beaver',
      lede: 'Our plan for a student starting now, in late October 2026, with the contest falling somewhere between 9 and 20 November 2026. It assumes two short live classes a week and fifteen minutes of puzzles on the other days.',
      body: [
        { kind: 'ol', items: [
          '<b>By Monday 26 October 2026:</b> confirm with the school that the BCC has been ordered, and ask which day it will be written.',
          '<b>Week of 26 October 2026:</b> open one past Beaver paper at the right level from CEMC\'s archive and try it untimed. Mark it against CEMC\'s solutions and read the Connections to Computer Science notes for the questions that went wrong.',
          '<b>Week of 2 November 2026:</b> one task family a day from the table above: ordering, codes, routes, instructions, limits, checking. Draw every situation before reading the choices. Try our six tasks without looking at the answers.',
          '<b>Week of 9 November 2026:</b> one timed 45-minute paper, scored with the real marks, including blanks. Review the questions that cost the most marks, not the ones that were hardest.',
          '<b>The day before the school\'s sitting:</b> no new material. A short warm-up of three easy puzzles, and an early night.',
          '<b>After the contest:</b> results reach the teacher about a week after the window closes on Friday 20 November 2026. Once CEMC posts the solutions, go through them together.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 5/6 writers', p: 'Twelve questions in 45 minutes is generous. The goal is accuracy on all four Part A questions and a calm try at Part C.' },
          { h3: 'Grade 7/8 writers', p: 'Fifteen questions makes pacing real. Practise skipping and returning, and the routes and limits families.' },
          { h3: 'Grade 9/10 writers', p: 'The puzzles get subtler, not longer. Students who already code should still solve on paper first.' }
        ] }
      ]
    },
    {
      id: 'next', tint: 'deep', eyebrow: 'After the Beaver',
      h2: 'What comes after the Beaver in 2027',
      lede: 'The BCC is often a student\'s first CEMC contest, not the last. Two of CEMC\'s other contests follow naturally, depending on grade. The dates below are as CEMC lists them for the 2026/27 contest year.',
      body: [
        { kind: 'table', caption: 'Natural next CEMC contests for a Beaver writer (dates from CEMC\'s contests overview, read 22 October 2026; the fit column is our view)', head: ['Contest', 'Who CEMC writes it for', 'CEMC\'s 2027 date, the Americas', 'Why it fits after the Beaver'], rows: [
          ['Canadian Computing Competition, Junior', 'Students with beginner to intermediate programming skills, any grade', 'Wednesday 17 February 2027', 'The next step for a Grade 9/10 writer who can already code: the reasoning is the same, now expressed in a program'],
          ['Gauss Contests', 'Grades 7 and 8, with younger motivated students welcome', '10 to 21 May 2027', 'For Grade 5 to 8 writers who enjoyed the logic side of the Beaver and want a math contest next']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'From puzzles to programs',
          left: [
            'A student who enjoyed tasks 3 and 5 above has met, without knowing it, two ideas the Canadian Computing Competition asks students to program: shortest paths and choosing under limits. The Beaver is a good test of whether that reasoning comes naturally before the coding is added.',
            'Our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> covers the February 2027 contest in detail, and the <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> sets out the full Junior and Senior route.'
          ],
          rightH3: 'Keeping it in proportion',
          right: [
            'A Beaver result says something about one 45-minute sitting in November. It does not measure a child\'s ability in computer science, and CEMC does not present it that way.',
            'What lasts is the habit the contest rewards: slowing down, modelling the situation, and checking an answer against the rules. That habit is what we teach, contest or no contest.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC contests overview, 2026/27 dates</a>, and the <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">past contests archive</a>, which holds BCC papers and solutions from the last ten years, read 22 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages of Beaver readiness',
    lede: 'How our teachers place a student in the first class. The stages are ours.',
    table: { caption: 'From first puzzle to a confident Beaver paper (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Guessing', 'Reads the choices first and picks the one that looks right'],
      ['2. Drawing', 'Sketches the situation, but sometimes misses a rule in the story'],
      ['3. Checking', 'Tests each choice against every rule before committing'],
      ['4. Eliminating', 'Rules out wrong choices for a stated reason, and knows when a blank is wiser']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is normal for a Grade 5 student meeting these puzzles for the first time. Stage 2 usually arrives within a few classes once drawing becomes a habit.',
      'Ask your child to explain one answer out loud. If the reason names a rule from the story, they are at stage 3 or beyond.'
    ] },
    right: { h3: 'For students', ps: [
      'Draw first, choose second. The picture is where the answer lives.',
      'When two choices look right, one of them breaks a rule you skimmed. Find the rule.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that build Beaver thinking, Grades 3 to 12',
    lede: 'All taught live online by a regular teacher, in a batch or one to one, for families in every province.',
    bands: [
      { num: 'I', h3: 'Logic and first code', sub: 'Grades 3 to 6', courses: [
        { code: 'BCC / LOGIC / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Sequences, loops and events, built as games.' },
        { code: 'BCC / LOGIC / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math for kids', blurb: 'Number sense that makes counting tasks quick.' },
        { code: 'BCC / LOGIC / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, with turtle drawings.' }
      ] },
      { num: 'II', h3: 'Reasoning in code', sub: 'Grades 6 to 9', courses: [
        { code: 'BCC / REASON / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Precise code for students who like exact rules.' },
        { code: 'BCC / REASON / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Patterns and logic behind the Part C questions.' },
        { code: 'BCC / REASON / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Lists, loops and functions, from scratch.' }
      ] },
      { num: 'III', h3: 'Contest road', sub: 'Grades 9 to 12', courses: [
        { code: 'BCC / ROAD / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior Preparation', blurb: 'The February 2027 programming contest.' },
        { code: 'BCC / ROAD / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Algorithms under a clock.' },
        { code: 'BCC / ROAD / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'For students drawn to the math contests too.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live puzzle classes around a Canadian school day',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school slots, converted to your province\'s clock.' },
      { time: 'Weekends', l: 'Weekend mornings suit younger Beaver writers well.' },
      { time: '1-on-1', l: 'Arranged around the student and the school\'s contest day.' }
    ],
    cells: [
      { h3: 'Puzzles we write', p: 'Original Beaver-style tasks, never CEMC\'s own questions.' },
      { h3: 'Draw, then decide', p: 'Every task starts on paper, before the choices.' },
      { h3: 'Real scoring', p: 'Timed practice marked with A, B, C values and blanks.' },
      { h3: 'Grades 5 to 10', p: 'Three levels, each taught at its own pace.' },
      { h3: 'Every province', p: 'Families join from Victoria to St. John\'s.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or a teacher of your own.' }
    ]
  },

  projectsH2: 'What our younger students make',
  projectsLede: 'Puzzle work runs alongside building real things. A few projects from our learners are below, with many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Whatever the school pays CEMC for the contest is separate from us. Our monthly fee covers live teaching alone, month by month, so a family can stop after November without notice or penalty.',
    free: ['A free first class', 'Two of our Beaver-style tasks to start', 'No card details needed'],
    group: ['Fifteen to twenty students in a batch', 'The same teacher each week', 'A batch time that suits your family', 'Paid monthly'],
    one: ['A teacher for one student', 'Paced to the school\'s contest day', 'Puzzles chosen for the student']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Beaver Computing Challenge: common questions',
    items: [
      { q: 'What is the Beaver Computing Challenge?', a: 'It is an online multiple-choice contest from CEMC at the University of Waterloo that introduces students in Grades 5 to 10 to computer science ideas through puzzles. Students write it at school, individually, in 45 minutes, and no programming is required.' },
      { q: 'When is the Beaver Computing Challenge in 2026?', a: 'CEMC lists the 2026 window in North and South America as Monday, November 9, 2026 to Friday, November 20, 2026. Each school picks its own day inside that window, and the ordering deadline for schools is Monday, October 26, 2026.' },
      { q: 'Does my child need to know how to code for the Beaver?', a: 'No. CEMC says the questions only need concepts from the math curriculum used across Canadian provinces. The ideas come from computer science, but they are solved with careful reading, drawing and logic.' },
      { q: 'Which level should my child write?', a: 'CEMC sets the levels by grade: Grade 6 or below can write Grade 5/6, Grade 8 or below can write Grade 7/8, and Grade 10 or below can write Grade 9/10. A student writes only one Beaver in a school year.' },
      { q: 'How is the Beaver scored?', a: 'Grade 5/6 has 12 questions out of 60 and the upper levels have 15 questions out of 90, in Parts A, B and C worth less as they get harder. A wrong answer scores 0, and each blank earns 2, up to 5 blanks at Grade 5/6 and 6 at the other levels.' },
      { q: 'Should my child guess or leave a question blank?', a: 'By our arithmetic, assuming four answer choices, a blind guess on a hard Part C question averages less than the 2 marks a blank earns. On an easy Part A question, ruling out one choice makes a guess the better bet. The blank allowance is capped, so it only covers a few questions.' },
      { q: 'Can my child register for the Beaver on their own?', a: 'No. The school orders the contest and supervises it, and the teacher hands out each student\'s login. If the school is not taking part, CEMC suggests asking another local school whether the student can write there.' },
      { q: 'Is the Beaver available in French?', a: 'Not at present. CEMC lists the Beaver Computing Challenge as available in English only. Several of its other contests, such as the Canadian Computing Competition, are offered in English and French.' },
      { q: 'Where can we find past Beaver papers?', a: 'CEMC publishes past BCC papers with solutions free in the past contests section of its website, covering the last ten years, and a practice site opens closer to the contest date. We never copy those questions; our practice tasks are our own.' },
      { q: 'When do the results come out?', a: 'CEMC says results reach the supervising teacher about one week after the two-week window ends, so in late November 2026. Students do not see their result at the end of the sitting.' },
      { q: 'When are your classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Eastern time and converted for your province.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian students who like puzzles, contests and code.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our home page for families in every province.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The February 2027 programming contest, step by step.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'How we coach the Junior and Senior levels.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests', p: 'Gauss through Euclid, the math side of CEMC.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'The school math every Beaver task assumes.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Breaking a story problem into steps.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the teacher sets two of our Beaver-style tasks and watches how the student attacks them. You leave knowing the student\'s stage and what to practise before the school\'s contest day.',
    readFirst: 'Want to see the teaching first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live lesson, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Our teachers work from India and every class is live over video, so families anywhere in Canada join the same way. Message us on WhatsApp for the fastest reply.',
    formNote: 'No card is asked for, and the first class costs nothing.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/maths-olympiad-classes-online', label: 'Math olympiad classes' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Draw it before you choose'
  },

  personalityCss: `
.ag-root.ag-bccg .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-bccg .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-bccg .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-bccg .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-bccg .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-bccg .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Beaver Computing Challenge page and contests overview, and the BCC contest site instructions, read raw on 22 October 2026: 2026 window Monday, November 9, 2026 to Friday, November 20, 2026 in the Americas; ordering deadline Monday, October 26, 2026; levels by grade (6 or below, 8 or below, 10 or below); 12 questions out of 60 and 15 out of 90; 45 minutes; written in school online, some calculators; math-curriculum-only content; English only; one BCC per school year; Part A, B, C values and the blank rule; results about one week after the window; Certificates of Distinction for the top 25% within a school of at least 4; 2025 means 37.22, 68.93, 65.84.',
    localProject: 'Six original Beaver-style practice tasks written by us (Canoe Dock, Trail Lanterns, Plough Route, Rover Commands, Portage Pack, Library Check Digit) with answers, traps and computer science connections; a Python checker for the route and packing tasks, run on 22 October 2026; our scoring arithmetic and guess-versus-blank expected marks; a three-week run-up to the November 2026 window. Lesson family: computational thinking without code.',
    requiredMentions: ['Schools order by Monday, October 26, 2026', 'Monday, November 9, 2026 to Friday, November 20, 2026', 'only require familiarity with concepts covered in the mathematics curriculum', 'Connections to Computer Science', 'at most one Beaver Computing Challenge in a school year', 'will appear as the fifth choice in all multiple choice questions', '5 x 8 + 5 x 6 + 5 x 4 = 40 + 30 + 20 = 90', 'Plough Route', 'Library Check Digit', '14 points with food barrel + canoe pack'],
    sources: [
      { claim: 'BCC 2026 window, ordering deadline, levels, format, time, setting, content, one per year, scoring parts and blanks, results timing, fee, certificates, 2025 averages.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'BCC available in English only; Grades 5 to 10.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Contest screen instructions: answer in any order, no automatic advance, A/B/C grouping in random order, wrong answers zero, Erase as fifth choice.', url: 'https://beavercomputingchallenge.ca/' },
      { claim: 'Past BCC papers and solutions from the last 10 years.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' },
      { claim: 'Students take part through a school; another local school as a fallback.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' }
    ],
    rejectedClaims: [
      'Any CEMC past Beaver question or solution: never reproduced; six original tasks are used and labelled ours.',
      'That the BCC is the Canadian edition of an international challenge: not stated on the CEMC pages read, so not claimed.',
      'A combined 2025 contestant total across the three levels: not printed; the three figures are shown separately.',
      'Fees as typed figures: written in words outside the FAQ.',
      'That our classes raise Beaver scores or earn certificates: refused.',
      'A fixed contest date for a given school: refused; each school picks its day inside the window.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
