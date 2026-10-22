'use strict';
// Ontario coding curriculum, Grades 1 to 8 (ag- curriculum reference door; Canada cluster Plan 2, row 8).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw on 22 October 2026 from the public content service behind dcp.edu.gov.on.ca
// (ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_N___strands?depth=4, N = 1 to 8; copies in
// keyword-research-2026-09/ca/src/ontario/api-math-gN-strands.json with text dumps, and in ca/src/ontario-coding-curriculum-grades-1-to-8/;
// facts-schools-contests.md rows 1 to 15):
//  - Curriculum view: title Mathematics, year 2020, Elementary (api-curriculum-views.json).
//  - C3 overall expectation, every grade: "solve problems and create computational representations of mathematical situations
//    using coding concepts and skills".
//  - C3.1 tails: G1 "sequential events"; G2 "sequential and concurrent events"; G3 "sequential, concurrent, and repeating events";
//    G4 "sequential, concurrent, repeating, and nested events"; G5 "conditional statements and other control structures";
//    G6 "writing and executing efficient code, including code that involves conditional statements and other control structures";
//    G7 "writing and executing efficient code, including code that involves events influenced by a defined count and/or subprogram
//    and other control structures"; G8 "writing and executing code, including code that involves the analysis of data in order to
//    inform and communicate decisions" (no "efficient" in the G8 C3.1).
//  - C3.2: G1 to G5 "describe how changes to the code affect the outcomes"; G6 and G7 add "and the efficiency of the code";
//    G8 "read and alter existing code involving the analysis of data in order to inform and communicate decisions, and describe
//    how changes to the code affect the outcomes and the efficiency of the code".
//  - Notes attached to C3.1 (quoted): G1 "In coding, a sequential set of instructions is executed in order."; G1 to G4 "Coding can
//    include a combination of pseudocode, block-based coding programs, and text-based coding programs."; agents "a pixelated image
//    on a screen, a classmate acting out the code when appropriate, or a physical device (e.g., robot, microcontroller)"; G2
//    "Concurrent events are when multiple things are occurring at the same time"; G3 "Loops make code more readable and reduce the
//    number of instructions that need to be written."; G4 "Loops can exist within loops, referred to as “nested loops”."; G5
//    "Conditional statements are a representation of binary logic (yes or no, true or false, 1 or 0)." and the = / == note; G6
//    "Efficient code may involve using the instructions to solve a problem, using the smallest amount of space to store program
//    data, and/or executing as fast as possible." and "Using loops whenever possible is one way to make code more efficient."; G7
//    "Sub-programs can be reused for multiple programs or can be called upon more than once from one main program." and the defined
//    count sentence; G8 "By combining mathematical and coding concepts and skills, students can write programs to draw conclusions
//    from data."; G3 C3.2 note "It is important for students to understand when order matters."; G3 situations list includes
//    "determining perimeter"; G1 situations "moving from one location to another".
//  - Neither "Scratch" nor "Python" appears in any of the eight grade files (grep count 0).
//  - Science and Technology (2022), Grade 6 A2 and A2.1 (api-scitech-g6-strands.json).
//  - CEMC (cemc.uwaterloo.ca, facts rows 136 to 141 and 162): BCC 2026 dates for North and South America, Grade 5/6 eligibility,
//    45 minutes, "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces";
//    Problem of the Week for "Grades 3 to 12"; "all students must participate through their school" (how-contests-work).
// Our own material, labelled on the page: every example program (array of dots, pattern check, loop vs pairing rule,
// doublings_past, garden rainfall), all run in Python 3 with the printed output pasted; the Scratch descriptions; the
// predict-alter-predict routine; the tool-by-grade table; the four stages; the home plan. Ministry examples (the 100-step square,
// random numbers, the ride-height check, guess the number, rectangle area) are not reused.
// Lesson family: reading and altering code (predict, change one thing, predict again).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const G4 = `# Grade 4 band: a nested loop draws an array (ours)
rows = 3
columns = 4
dots = 0
for r in range(rows):
    line = ""
    for c in range(columns):
        line = line + "o "
        dots = dots + 1
    print(line)
print(rows, "rows of", columns, "is", dots, "dots")`;

const G5 = `# Grade 5 band: is a number in the pattern 5, 9, 13, ...? (ours)
target = 47
term = 5
found = False
while term <= target:
    if term == target:
        found = True
    term = term + 4
if found:
    print(target, "is in the pattern")
else:
    print(target, "is not in the pattern")`;

const G6 = `# Grade 6 band: two ways to add 1 + 2 + ... + 100 (ours)
steps = 0
total = 0
for n in range(1, 101):
    total = total + n
    steps = steps + 1
print("Loop:", total, "after", steps, "additions")

last = 100
quick = last * (last + 1) // 2
print("Pairing rule:", quick, "after 1 calculation")`;

const G7 = `# Grade 7 band: a subprogram with a defined count (ours)
def doublings_past(start, limit):
    """How many times must start double before it is more than limit?"""
    count = 0
    value = start
    while value <= limit:
        value = value * 2
        count = count + 1
    return count

print(doublings_past(3, 100))
print(doublings_past(5, 1000))
print(doublings_past(1, 1))`;

const G8 = `# Grade 8 band: use data to make a decision (ours)
rain_mm = [12, 0, 4, 0, 0, 7, 0]   # one week of rain in the school garden

def mean(values):
    return sum(values) / len(values)

week_mean = mean(rain_mm)
spread = max(rain_mm) - min(rain_mm)
dry_days = 0
for r in rain_mm:
    if r == 0:
        dry_days = dry_days + 1

print("Mean:", round(week_mean, 1), "mm a day")
print("Range:", spread, "mm")
print("Dry days:", dry_days)
if dry_days >= 4:
    print("Decision: water the garden on dry days")
else:
    print("Decision: no extra watering")`;

const SRC_DCP = '<a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">The Ontario Curriculum: Mathematics, Grades 1 to 8 (2020)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'ONTARIO CODING, GR 1 TO 8', blurb: 'The C3.1 coding expectation in Ontario math for every grade from 1 to 8, quoted, with a worked example per band and a plan for parents.' },
  slug: 'ontario-coding-curriculum-grades-1-to-8',
  code: 'ont',
  accent: '#0C5215',
  accentRationale: 'Ontario coding curriculum, Grades 1 to 8: a deep schoolyard green, #0C5215, allocated by the Canada Plan 2 grid; 7.0 RGB units from the nearest site accent (#0F540F) and at least 14 from every other Canada accent; contrast 8.87 on the paper #FBF8F2 and 7.63 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Ontario coding curriculum, Grades 1 to 8',
  title: 'Ontario Math Curriculum Coding, Grades 1 to 8, by Grade',
  description: 'Coding in the Ontario math curriculum, Grade 1 to Grade 8: the C3.1 expectation for each grade, quoted, what it means, and a worked example for every band.',
  ogDescription: 'Every grade of Ontario’s 2020 math curriculum asks children to code. Here is the C3.1 wording for Grades 1 to 8, side by side, with our own example programs and a plan for parents.',
  twitterDescription: 'The Ontario C3.1 coding expectation for Grades 1 to 8, quoted grade by grade, with example code.',
  pageName: 'Ontario Coding Curriculum, Grades 1 to 8',
  webPageDescription: 'A reference for Ontario parents and teachers to the coding expectations in the 2020 elementary mathematics curriculum, quoted for every grade from 1 to 8, with original example programs and a home plan.',
  courseDescription: 'Live online coding for Ontario children aged 6 to 14, from Scratch blocks to first Python, taught in a batch or one to one by a regular teacher, alongside the school math program.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'Coding curriculum, Grades 1 to 8',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#grades', label: 'By grade' },
    { href: '#notes', label: 'What it means' },
    { href: '#examples', label: 'Examples' },
    { href: '#alter', label: 'Read and alter' },
    { href: '#home', label: 'At home' }
  ],
  eyebrow: 'Ontario &middot; Grades 1 to 8 &middot; Strand C, expectation C3',
  h1: 'Coding in the Ontario math curriculum, Grades 1 to 8',
  lede: 'Since the 2020 math curriculum, every Ontario child from Grade 1 to Grade 8 is expected to write code in math class. The wording changes each year, one or two words at a time, and those words decide what a child should be able to do by June. Below is the expectation for every grade, quoted from the ministry&rsquo;s own curriculum site, then what each step looks like in a real program, written and run by us.',
  secondaryCta: { href: '#grades', label: 'See the grade-by-grade table' },
  wa: 'Hello Modern Age Coders, my child is in elementary school in Ontario and I would like help with the coding part of math. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Scratch first, then Python',
  spec: [
    ['For', 'Grades 1 to 8, ages 6 to 14'],
    ['Curriculum', 'Ontario math (2020), Strand C'],
    ['Tools', 'Scratch, unplugged, then Python'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Eastern time for most of Ontario'],
    ['Teacher', 'The same one every week'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Ontario&rsquo;s 2020 elementary math curriculum puts coding in Strand C, Algebra, as expectation C3 in Grades 1 to 8. Its C3.1 wording grows from code with sequential events in Grade 1 to code that analyses data in Grade 8. Modern Age Coders teaches this live online, as a group or one to one, in Scratch Coding for Kids.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses that follow the Grade 1 to 8 coding ladder',
    lede: 'Scratch carries the early grades, the math course keeps number sense moving, and Python takes over around Grade 5 or 6.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'ONT / 01', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12. Sequences, two sprites at once, loops and loops inside loops: the Grade 1 to 4 rungs, built as games.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'ONT / 02', title: 'Elementary Math, Grades 1 to 5', note: 'Placement by grade, then counting, operations, fractions and geometry. The arithmetic every coding task leans on.' },
      { course: 'maths-through-coding', code: 'ONT / 03', title: 'Math Through Coding', note: 'Ages 10 to 15. Fractions, patterns, geometry and probability written as Python programs: the Grade 5 to 8 rungs.' }
    ]
  },

  sections: [
    {
      id: 'grades', tint: 'tint', eyebrow: 'The reference table',
      h2: 'The C3.1 coding expectation, Grade 1 to Grade 8',
      lede: 'In every grade the overall expectation is the same sentence: students will &ldquo;solve problems and create computational representations of mathematical situations using coding concepts and skills&rdquo;. What changes is the specific expectation C3.1, which ends &ldquo;by writing and executing code, including code that involves&rdquo; and then names that year&rsquo;s idea. This table quotes the part that changes.',
      body: [
        { kind: 'table', caption: 'C3.1 by grade, quoted from the Ontario elementary mathematics curriculum (2020), read 22 October 2026; the last column is ours', head: ['Grade', 'C3.1 asks for code that involves', 'A line from the curriculum&rsquo;s notes', 'What it looks like (ours)'], rows: [
          ['1', '&ldquo;sequential events&rdquo;', '&ldquo;In coding, a sequential set of instructions is executed in order.&rdquo;', 'A route of arrow cards across a floor grid'],
          ['2', '&ldquo;sequential and concurrent events&rdquo;', '&ldquo;Concurrent events are when multiple things are occurring at the same time&rdquo;', 'Two Scratch sprites moving at once'],
          ['3', '&ldquo;sequential, concurrent, and repeating events&rdquo;', '&ldquo;Loops make code more readable and reduce the number of instructions that need to be written.&rdquo;', 'A repeat block that walks a rectangle and adds up its sides'],
          ['4', '&ldquo;sequential, concurrent, repeating, and nested events&rdquo;', '&ldquo;Loops can exist within loops, referred to as &lsquo;nested loops&rsquo;.&rdquo;', 'A loop inside a loop that draws a 3 by 4 array'],
          ['5', '&ldquo;conditional statements and other control structures&rdquo;', '&ldquo;Conditional statements are a representation of binary logic (yes or no, true or false, 1 or 0).&rdquo;', 'Checking whether 47 belongs to a number pattern'],
          ['6', 'the same as Grade 5, but now &ldquo;efficient code&rdquo;', '&ldquo;Using loops whenever possible is one way to make code more efficient.&rdquo;', 'Adding 1 to 100 two ways and counting the work'],
          ['7', '&ldquo;events influenced by a defined count and/or subprogram and other control structures&rdquo;, still &ldquo;efficient code&rdquo;', '&ldquo;Sub-programs can be reused for multiple programs or can be called upon more than once from one main program.&rdquo;', 'A function that counts doublings, called three times'],
          ['8', '&ldquo;the analysis of data in order to inform and communicate decisions&rdquo;', '&ldquo;By combining mathematical and coding concepts and skills, students can write programs to draw conclusions from data.&rdquo;', 'A week of garden rainfall turned into a watering decision']
        ] },
        { kind: 'table', mt: true, caption: 'C3.2, reading and altering code, by grade (same curriculum, same date)', head: ['Grades', 'C3.2 in the curriculum&rsquo;s words'], rows: [
          ['1 to 5', '&ldquo;read and alter existing code&rdquo; that involves that grade&rsquo;s idea, &ldquo;and describe how changes to the code affect the outcomes&rdquo;'],
          ['6 and 7', 'The same, plus how changes affect &ldquo;the outcomes and the efficiency of the code&rdquo;'],
          ['8', '&ldquo;read and alter existing code involving the analysis of data in order to inform and communicate decisions, and describe how changes to the code affect the outcomes and the efficiency of the code&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three things the table shows',
          left: [
            'First, the ideas pile up rather than replace each other. Grade 4 still lists sequential and concurrent events; it simply adds nesting on top. A Grade 4 child who never got comfortable with plain repetition is being asked to put a loop inside a loop.',
            'Second, the word &ldquo;efficient&rdquo; enters C3.1 in Grade 6 and stays in Grade 7, then drops out of the Grade 8 C3.1 sentence, where data takes centre stage. Efficiency does not vanish in Grade 8: C3.2 still asks how changes affect &ldquo;the efficiency of the code&rdquo;.'
          ],
          rightH3: 'And the third',
          right: [
            'Every C3.1 is about mathematical situations, not about coding for its own sake. The Grade 3 list of possible situations includes &ldquo;determining perimeter&rdquo;; the Grade 1 list starts with &ldquo;moving from one location to another&rdquo;. The code is a way of doing math out loud, where the computer checks the thinking.',
            'That is why our examples below are all math problems first. A child who can explain why the program prints what it prints has met the expectation, whatever tool they used.'
          ] },
        { kind: 'source', html: 'Source: ' + SRC_DCP + ', Strand C, expectations C3.1 and C3.2 and the notes attached to them for each grade, read through the curriculum site&rsquo;s public content service on 22 October 2026. Grade-by-grade quotes are exact; we dropped a stray space the service prints before commas. This page is our own reading: we have no tie to the ministry or to any school board.' }
      ]
    },
    {
      id: 'notes', tint: 'deep', eyebrow: 'Reading the wording',
      h2: 'What the coding expectations mean, in plain language',
      lede: 'The curriculum&rsquo;s notes are short and precise. Five of them settle most of the questions parents ask us, starting with which program a child should use.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No tool is prescribed', p: 'The notes for Grades 1 to 4 say: &ldquo;Coding can include a combination of pseudocode, block-based coding programs, and text-based coding programs.&rdquo; Neither Scratch nor Python is named in any of the eight grade documents we read.' },
          { h3: 'Code can run on a person', p: 'Children can program &ldquo;a pixelated image on a screen, a classmate acting out the code when appropriate, or a physical device (e.g., robot, microcontroller)&rdquo;. A Grade 1 lesson with no computer at all can meet C3.1.' },
          { h3: 'Order sometimes matters', p: 'A Grade 3 note on C3.2 says: &ldquo;It is important for students to understand when order matters.&rdquo; Adding steps in any order gets the same total; turning then moving is not the same as moving then turning.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One equal sign or two',
          left: [
            'From Grade 5, the notes draw a line that trips up many beginners: &ldquo;Assignment statements assign a value to a variable and usually use a single equal sign (=), while comparison statements are used to compare two values and usually use a double equal sign (==)&rdquo;.',
            'In math class, the equal sign says two sides are the same. In most code, a single equal sign means &ldquo;put this value in this box&rdquo;. A child who writes <code>total = total + 4</code> is not writing a false equation; they are updating a running total. We spend a whole lesson on that one difference.'
          ],
          rightH3: 'What &ldquo;efficient&rdquo; means here',
          right: [
            'The Grade 6 notes define it: &ldquo;Efficient code may involve using the instructions to solve a problem, using the smallest amount of space to store program data, and/or executing as fast as possible.&rdquo; At this age that mostly means fewer instructions doing the same job, often by using a loop instead of copying a line ten times.',
            'Grade 7 adds the defined count: &ldquo;A defined count is used to repeat an instruction either for a predefined number of times (e.g., 10 repeats) or until a condition has been met (e.g., Number &lt;= 100).&rdquo; The doubling example further down is exactly that second kind of loop.'
          ] },
        { kind: 'p', mt: true, html: 'Coding also turns up outside math. The 2022 Science and Technology curriculum asks Grade 6 students to &ldquo;use coding in investigations and to model concepts, and assess the impact of coding and of emerging technologies on everyday life&rdquo;, and its A2.1 adds &ldquo;with a focus on obtaining input in different ways&rdquo;. So a Grade 6 child may meet coding twice a week in two subjects, with two teachers using two different tools.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'One example per band, ours',
      h2: 'What each band of the coding curriculum looks like in practice',
      lede: 'These are our own examples, written for this page. The early ones are described as Scratch blocks or classroom activities; from Grade 4 on they are Python programs that we ran, with the output printed under each. None is taken from the curriculum&rsquo;s own sample tasks.',
      body: [
        { kind: 'two',
          leftH3: 'Grades 1 and 2: a route, then two things at once',
          left: [
            '<b>Grade 1, unplugged.</b> Tape a 5 by 5 grid on the floor and put a toy at one corner. The child lays arrow cards in a row (forward, forward, turn right, forward) and a parent walks the route exactly as written. If the parent ends up in the wrong square, the child finds the card that is wrong. That is writing, executing, reading and altering a sequential program.',
            '<b>Grade 2, in Scratch.</b> Two sprites, a cat and a bus, each get their own script that starts with the green flag. The bus glides across the road while the cat counts to ten. The concurrent part is that both scripts run at the same moment; the math is in how many steps each glide takes and which one arrives first.'
          ],
          rightH3: 'Grade 3: one loop does the walking',
          right: [
            'A sprite walks around a rectangle that is 60 steps long and 40 steps wide. Written out in full, that is eight blocks: move, turn, move, turn, and so on. With a repeat block set to 2 around &ldquo;move 60, turn 90, move 40, turn 90&rdquo;, it is one loop with four blocks inside.',
            'Then the math: add a variable called perimeter, and inside the loop add 60 and 40 to it. The sprite finishes at 200. Ask the child to change the repeat to 3 and predict the new perimeter before pressing the flag. The answer, 300, is wrong for a rectangle, and the child has to say why.'
          ] },
        { kind: 'code', mt: true, label: 'Grade 4 &middot; nested loop &middot; Python (ours)', lang: 'python', code: G4, note: 'Output: three rows of <code>o o o o</code>, then <code>3 rows of 4 is 12 dots</code>. The inner loop runs four times for every one turn of the outer loop, which is multiplication made visible: change <code>rows</code> to 5 and the program prints 20 dots.' },
        { kind: 'code', label: 'Grade 5 &middot; a conditional inside a loop &middot; Python (ours)', lang: 'python', code: G5, note: 'Output: <code>47 is not in the pattern</code>. The terms go 5, 9, 13 and on to 45, then 49, which jumps past 47. The <code>if</code> asks a yes-or-no question on every term, which is the binary logic the Grade 5 notes describe.' },
        { kind: 'code', label: 'Grade 6 &middot; efficiency &middot; Python (ours)', lang: 'python', code: G6, note: 'Output: <code>Loop: 5050 after 100 additions</code>, then <code>Pairing rule: 5050 after 1 calculation</code>. Pair 1 with 100, 2 with 99, and so on: 50 pairs of 101. Same answer, one calculation instead of a hundred, which is what C3.2 means by the efficiency of the code.' },
        { kind: 'code', label: 'Grade 7 &middot; a subprogram with a defined count &middot; Python (ours)', lang: 'python', code: G7, note: 'Output: 6, 8 and 1. Starting from 3, five doublings reach 96 and the sixth jumps to 192, past 100; 5 needs eight to pass 1000; 1 needs one. The loop runs until a condition is met, not a fixed number of times, and the function is written once and called three times.' },
        { kind: 'code', label: 'Grade 8 &middot; data to a decision &middot; Python (ours)', lang: 'python', code: G8, note: 'Output: <code>Mean: 3.3 mm a day</code>, <code>Range: 12 mm</code>, <code>Dry days: 4</code>, then <code>Decision: water the garden on dry days</code>. The mean alone would hide the dry spell; the count of dry days is what drives the decision. Asking which measure to trust is the Grade 8 skill.' }
      ]
    },
    {
      id: 'alter', tint: 'deep', eyebrow: 'C3.2, worked',
      h2: 'Reading and altering code: our predict, change, predict routine',
      lede: 'Every grade&rsquo;s C3.2 asks children to read code someone else wrote, change it, and explain what the change did. We teach that as a routine with six steps, using the Grade 5 pattern program above. It works the same way on a Scratch script in Grade 2.',
      body: [
        { kind: 'ol', items: [
          '<b>Read it aloud, line by line.</b> &ldquo;The target is 47. The first term is 5. While the term is not past the target, check it, then add 4.&rdquo; If a line cannot be said in words, that line is the first thing to teach.',
          '<b>Predict before running.</b> Write the prediction down: in or not in? A child who guesses &ldquo;in&rdquo; because 47 is odd has found a real misconception to work on.',
          '<b>Run it and compare.</b> The program prints that 47 is not in the pattern. The gap between the prediction and the output is where the lesson is.',
          '<b>Change exactly one thing.</b> Set <code>target = 45</code>. Predict again, then run: <code>45 is in the pattern</code>. One change at a time is the only way to know which change did what.',
          '<b>Change the rule, not the number.</b> Set the step from 4 to 3 and the first term to 2, so the pattern is 2, 5, 8 and so on. Is 47 in it now? (Yes: 2 plus 15 threes is 47.)',
          '<b>Explain the effect in a sentence.</b> &ldquo;When I changed the step, the program checked a different pattern, so the answer changed.&rdquo; That sentence is the &ldquo;describe how changes to the code affect the outcomes&rdquo; half of C3.2, and it is the half children most often skip.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Adding efficiency in Grades 6 and 7',
          left: [
            'From Grade 6, C3.2 adds a second question after every change: did the code get more or less efficient? In the pattern program, there is a faster test. Subtract the first term, 47 minus 5 is 42, and check whether 42 divides evenly by 4. It does not, so 47 is out, with no loop at all.',
            'We ask students to write both versions and count how many times the loop body runs for a target of 4,001. The loop version checks 1,000 terms before reaching it; the remainder test does one division. Children remember the idea far better once they have counted the cost themselves.'
          ],
          rightH3: 'Mistakes worth making on purpose',
          right: [
            'Change <code>term &lt;= target</code> to <code>term &lt; target</code> and test with 45. The loop now stops one term too early, after checking 41, so the program says 45 is not in the pattern. Off-by-one errors like this follow students all the way to high school computer science, so we plant them early.',
            'Change the starting value of <code>found</code> to <code>True</code> and every number is suddenly in every pattern. A child who can explain why has understood that a variable remembers whatever it was last told.'
          ] }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Tools by grade',
      h2: 'Unplugged, Scratch or Python: which tool fits which grade',
      lede: 'Because the curriculum leaves the tool open, schools and boards differ. This is how we match tools to the grades, based on teaching young children online since 2020. It is our approach, not a ministry rule.',
      body: [
        { kind: 'table', caption: 'Our tool plan for the Ontario coding expectations (ours)', head: ['Grades', 'Main tool', 'Why at this age', 'Ready to move on when'], rows: [
          ['1 and 2', 'Unplugged cards, then ScratchJr or Scratch', 'Reading is still developing; arrows and blocks carry the logic without typing', 'The child can fix a wrong route without being told which card is wrong'],
          ['3 and 4', 'Scratch', 'Repeat blocks and loops inside loops are visible as shapes inside shapes', 'They choose a loop without prompting when a step repeats'],
          ['5 and 6', 'Scratch, then first Python', 'Conditionals and variables read naturally as words; typing speed is usually enough', 'They can predict a short program&rsquo;s output on paper'],
          ['7 and 8', 'Python', 'Functions, lists and data need a text language to stay readable', 'They write a function, call it twice and test an edge case']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When the school tool is different',
          left: [
            'Some Ontario classrooms use a block editor, a robot or a microcontroller kit instead of Scratch. The ideas carry over: a loop is a loop. In our first class we ask which tool the class uses and show the child how today&rsquo;s idea looks in both.',
            'For families comparing the two big options, our article on <a class="ag-inline-link" href="/blog/scratch-vs-python-which-better-young-learners">Scratch vs Python for young learners</a> sets out the trade-offs, and <a class="ag-inline-link" href="/scratch-not-working-help">Scratch not working</a> covers the common home-computer problems.'
          ],
          rightH3: 'Screens and safety for young coders',
          right: [
            'For Grades 1 and 2 we keep sessions short and mix in unplugged tasks, so a lesson is not forty minutes of staring at a screen. Scratch accounts for children can be set up by a parent, and we never ask a child to create an account on their own.',
            'We do not use chatbots or AI code generators with elementary students. The point of C3.1 is that the child writes and executes the code; a program the child did not write teaches them nothing about sequence, loops or conditions.'
          ] }
      ]
    },
    {
      id: 'home', tint: 'deep', eyebrow: 'For parents',
      h2: 'How to support the coding expectations at home',
      lede: 'Most parents did not learn to code in elementary school, and none of this needs a parent who can. Here is the plan we give families, in the order we suggest it.',
      body: [
        { kind: 'ol', items: [
          '<b>Find out the tool.</b> Ask the teacher which program or device the class codes with this term, and whether code appears on report-card comments under math.',
          '<b>Find the grade&rsquo;s key word in the table above.</b> Sequential, concurrent, repeating, nested, conditional, efficient, defined count, data. That one word is what this year is about.',
          '<b>Play it unplugged first.</b> Give spoken instructions to make a sandwich or walk to the door, and let the child debug yours. Sequence and order make sense in the body before they make sense on a screen.',
          '<b>Ask for a prediction every time.</b> &ldquo;What will happen when you press the flag?&rdquo; is the single most useful question a parent can ask, and it needs no coding knowledge.',
          '<b>Change one thing together.</b> Pick one number in your child&rsquo;s project and change it. Ask what changed on screen and why.',
          '<b>Keep the math in sight.</b> Ask what the code is calculating: steps, a total, a pattern rule. If nobody can say, the project is a cartoon rather than math.',
          '<b>Save the projects.</b> A folder of finished Scratch or Python files from September to June shows growth far better than a single mark.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Questions worth asking the teacher',
          left: [
            'How is coding assessed in math this term? Is it part of an Algebra unit or spread across the year? Which tool, and can my child use it at home? What does a strong piece of coding work look like at this grade?',
            'Teachers usually welcome these questions, and the answers tell you whether coding is a weekly habit in the classroom or a two-week unit.'
          ],
          rightH3: 'Contests and free practice',
          right: [
            'The University of Waterloo&rsquo;s CEMC runs the Beaver Computing Challenge. It lists the 2026 BCC for North and South America from Monday, November 9, 2026 to Friday, November 20, 2026, with a Grade 5/6 level, and says the questions &ldquo;only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces&rdquo;. CEMC says &ldquo;all students must participate through their school.&rdquo;',
            'CEMC&rsquo;s Problem of the Week is e-mailed to educators for students &ldquo;from Grades 3 to 12&rdquo;. Our page on <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests</a> covers the math contests from Grade 7 up. CEMC runs these on its own; we have no part in them.'
          ] },
        { kind: 'source', html: 'Where this section comes from (all read on 22 October 2026): ' + SRC_DCP + '; the Ontario Science and Technology curriculum (2022), Grade 6, A2 and A2.1, through the same content service; CEMC&rsquo;s <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">Beaver Computing Challenge</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/potw" rel="noopener" target="_blank">Problem of the Week</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">How contests work</a> pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is now',
    h2: 'Four stages of an elementary coder',
    lede: 'Our own stages, drawn from teaching young children their first lines of code. Grade level and stage often differ, and that is fine.',
    table: { caption: 'Stages of a young coder in the Ontario grades (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Follower', 'Builds a script by copying a model, block by block, and is delighted when it runs'],
      ['2. Fixer', 'Spots the wrong step in someone else&rsquo;s sequence and corrects it'],
      ['3. Predictor', 'Says what a loop or condition will do before running it, and is right more often than not'],
      ['4. Designer', 'Starts from a math question, plans the code, and explains why it works']
    ] },
    left: { h3: 'For parents', ps: [
      'Watch for stage 2 at home. A child who says &ldquo;that block is in the wrong place&rdquo; has moved past copying, whatever their grade.',
      'Stage 3 is the one that the C3.2 expectations reward, and it grows only with practice at predicting, not with more screen time.'
    ] },
    right: { h3: 'For young coders', ps: [
      'Before you press the green flag, say out loud what you think will happen.',
      'When something goes wrong, change one block, then test. Not three blocks. One.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'More courses for Ontario children in Grades 1 to 8',
    lede: 'Each one runs as live video lessons with a teacher your child will see every week, in a group or alone.',
    bands: [
      { num: 'I', h3: 'The first years', sub: 'Grades 1 to 3', courses: [
        { code: 'ONT / EAR / 01', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Counting, shapes and patterns with objects a child can hold.' },
        { code: 'ONT / EAR / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Math for Kids', blurb: 'Number bonds and estimation, built as real understanding.' },
        { code: 'ONT / EAR / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From a first Scratch game to apps, at the child&rsquo;s pace.' }
      ] },
      { num: 'II', h3: 'Thinking and building', sub: 'Grades 3 to 6', courses: [
        { code: 'ONT / MID / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational Thinking for Kids', blurb: 'Logic puzzles that train decomposition and patterns.' },
        { code: 'ONT / MID / 02', slug: 'python-ai-kids-masterclass', title: 'Python for Kids', blurb: 'Typed code, turtle drawings and small games from age 9.' },
        { code: 'ONT / MID / 03', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Loops and conditions inside games children actually play.' }
      ] },
      { num: 'III', h3: 'Ready for Grade 9', sub: 'Grades 6 to 8', courses: [
        { code: 'ONT / SR / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Math', blurb: 'Pre-algebra, geometry and data before high school.' },
        { code: 'ONT / SR / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Variables and equations, the bridge into Grade 9 math.' },
        { code: 'ONT / SR / 03', slug: 'middle-school-math-competitions-course', title: 'Math Competitions, Grades 5 to 8', blurb: 'Harder problems for children who finish early.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live coding lessons sized for young children',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon, once homework and snacks are done.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, often the calmest slot for a six-year-old.' },
      { time: '1-on-1', l: 'Paced to one child and one grade&rsquo;s expectations.' }
    ],
    cells: [
      { h3: 'Short, active sessions', p: 'Blocks, talk and unplugged moves mixed.' },
      { h3: 'Math in every project', p: 'Each program computes something real.' },
      { h3: 'Predict first, always', p: 'The habit C3.2 is built on.' },
      { h3: 'A parent summary', p: 'What we did and one task to try.' },
      { h3: 'Same teacher weekly', p: 'Someone who knows your child.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Older students&rsquo; work, to show where a Grade 3 Scratch loop can lead. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class is free. Families then pay one monthly fee for eight live classes a month; the price box shows the amount with its currency code. Nothing is signed for a term, and a family that wants to stop simply tells us before the next month begins.',
    free: ['A free first class', 'A short placement chat', 'No card details'],
    group: ['Fifteen to twenty children', 'Grouped by age', 'One regular teacher', 'Paid month by month'],
    one: ['A teacher for one child', 'Times that suit your week', 'Planned from their grade']
  },

  faq: {
    eyebrow: 'Questions from Ontario parents',
    h2: 'Coding in Ontario elementary math: common questions',
    items: [
      { q: 'Is coding part of the Ontario math curriculum?', a: 'Yes. The 2020 Ontario elementary mathematics curriculum includes coding in Strand C, Algebra, as overall expectation C3, in every grade from 1 to 8. Students are expected to solve problems and create computational representations of mathematical situations using coding concepts and skills.' },
      { q: 'What is the Grade 1 coding expectation in Ontario?', a: 'Grade 1 C3.1 asks students to solve problems and represent math situations by writing and executing code that involves sequential events, meaning instructions carried out in order. C3.2 asks them to read and alter existing code with sequential events and describe how the changes affect the outcome.' },
      { q: 'What is the Grade 3 coding expectation in Ontario?', a: 'Grade 3 C3.1 asks for code that involves sequential, concurrent and repeating events. Repeating events are loops, which the curriculum notes say make code more readable and reduce the number of instructions that need to be written.' },
      { q: 'What is the Grade 6 coding expectation in Ontario?', a: 'Grade 6 C3.1 asks students to write and execute efficient code that involves conditional statements and other control structures. Grade 6 C3.2 adds that students describe how changes to the code affect both the outcomes and the efficiency of the code.' },
      { q: 'What changes in Grades 7 and 8?', a: 'Grade 7 C3.1 adds events influenced by a defined count or a subprogram, which means loops that run until a condition is met and reusable pieces of code. Grade 8 C3.1 focuses on code that analyses data in order to inform and communicate decisions.' },
      { q: 'Does the curriculum say which coding program to use?', a: 'No. The notes say coding can combine pseudocode, block-based coding programs and text-based coding programs, and that students can program a character on a screen, a classmate acting out the code, or a device such as a robot. Neither Scratch nor Python is named in the grade documents we read.' },
      { q: 'My child has never coded. Is it too late in Grade 5?', a: 'No. Each year\'s expectation includes the earlier ideas, so a Grade 5 child starts with sequence and loops in the first weeks and reaches conditional statements quickly. Children who start later often move fast because their reading and math are stronger.' },
      { q: 'Can I help with coding if I cannot code myself?', a: 'Yes. Ask your child to predict what their program will do before running it, change one number together and talk about what changed, and ask what the code is calculating. None of that needs any coding knowledge.' },
      { q: 'Is coding tested on the EQAO assessments?', a: 'EQAO describes its Grade 3 and Grade 6 assessments as covering reading, writing and mathematics. We have not found an EQAO statement on whether coding questions appear, so we do not claim either way. Ask your school how coding is assessed in class.' },
      { q: 'Do you use AI tools with young children?', a: 'Not to write their code. In these lessons the child writes every line, in unplugged activities, Scratch and then Python, and we use no chatbots or AI code generators with elementary students. Some of our kids\' courses do teach what AI is by having children train small models of their own, with no chatbot accounts.' },
      { q: 'When do the lessons happen?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We book every lesson in your local clock. Ontario\'s Eastern zone falls back an hour on 1 November 2026 and springs forward on 14 March 2027, and we reconfirm the lesson time in each of those weeks.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. From then on a single monthly fee covers eight live lessons, and no term has to be signed. Look at the fees box on this page for today\'s figure, shown separately for a batch and for a private teacher.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Ontario families with children in elementary school.',
    items: [
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Our main page for the province, all ages.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for families across the provinces.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'How our Scratch course runs, week by week.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help from Grade 1 through Grade 12.' },
      { href: '/why-coding-and-maths-together', label: 'Why coding and math together', p: 'The case for learning the two side by side.' },
      { href: '/blog/how-coding-improves-mathematical-thinking-children', label: 'Coding and mathematical thinking', p: 'What changes in a child&rsquo;s math when they code.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Gauss in Grades 7 and 8, and what follows.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our lesson structure, written out in full.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade, the tool their class uses and how they feel about coding so far. The first lesson starts from where they are, with something they can finish and show you.',
    readFirst: 'Want to see the shape of a lesson first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> lays it out, and the <a class="ag-inline-link" href="/courses/scratch-programming-complete-course">Scratch course syllabus</a> lists every project.',
    note: 'Lessons are live video with teachers based in India, timed for Ontario afternoons and weekend mornings. Nobody visits your home, and WhatsApp is the fastest way to reach us.',
    formNote: 'Booking the free class never needs a card.'
  },

  footer: {
    cols: [
      { h4: 'Young coders', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch Coding for Kids' },
        { href: '/courses/maths-through-coding', label: 'Math Through Coding' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' }
      ] }
    ],
    bottomRight: 'Predict it, change one thing, predict again'
  },

  personalityCss: `
.ag-root.ag-ont .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-ont .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-ont .ag-table td:first-child { font-weight: 600; white-space: nowrap; }
.ag-root.ag-ont .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ont .ag-code-note { font-style: normal; }
.ag-root.ag-ont .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum: Mathematics, Grades 1 to 8 (2020), read raw 22 October 2026 through ws.api.dcp.edu.gov.on.ca for each grade: overall expectation C3, specific expectations C3.1 and C3.2 for Grades 1 to 8, and the notes attached to C3.1 and C3.2 (sequence, concurrency, loops, nested loops, binary logic, assignment and comparison, efficiency, defined count, sub-programs, data). Science and Technology (2022), Grade 6 A2 and A2.1. CEMC BCC, POTW and how-contests-work pages.',
    localProject: 'Our five run-checked Python examples (a nested loop array, a pattern membership check, loop versus pairing rule for 1 to 100, doublings_past with a defined count, garden rainfall to a decision) plus Scratch and unplugged examples for Grades 1 to 3; a six-step predict, change, predict routine on the pattern program; a tool-by-grade table; a seven-step home plan. Lesson family: reading and altering code.',
    requiredMentions: ['sequential, concurrent, repeating, and nested events', 'events influenced by a defined count and/or subprogram', 'the analysis of data in order to inform and communicate decisions', 'block-based coding programs', 'Loops can exist within loops', '3 rows of 4 is 12 dots', 'Pairing rule: 5050 after 1 calculation', 'doublings_past', 'Decision: water the garden on dry days', 'It is important for students to understand when order matters.'],
    sources: [
      { claim: 'C3 overall expectation and C3.1 / C3.2 wording for Grades 1 to 8, with the attached notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_6___strands?depth=4' },
      { claim: 'The elementary mathematics curriculum home (2020).', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Grade 6 Science and Technology coding expectations A2 and A2.1.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/e___sci___tech___grade_6___strands?depth=4' },
      { claim: 'Beaver Computing Challenge 2026 dates, Grade 5/6 level and curriculum-only requirement.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'Problem of the Week for Grades 3 to 12.', url: 'https://cemc.uwaterloo.ca/resources/potw' }
    ],
    rejectedClaims: [
      'That the curriculum requires Scratch or Python: neither word appears in the eight grade documents.',
      'That "efficient" appears in C3.1 from Grade 6 onward: it is in Grades 6 and 7 only; Grade 8 has it in C3.2.',
      'That EQAO tests coding: no EQAO statement was read either way; the FAQ says so.',
      'Reusing the curriculum\'s own sample code (the 100-step square, random numbers, the ride-height check, guess the number, rectangle area): every example here is ours.',
      'Any mark or report-card outcome from our classes: none promised.',
      'Any affiliation with the Ontario Ministry of Education, a school board or CEMC: none, and the page says so.',
      'AI coding tools for under-13 learners: not used or recommended.'
    ]
  }
};
