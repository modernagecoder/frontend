'use strict';
// Problem-solving coding and math classes, Canada (ag- market door; Canada cluster Plan 2, row 81).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// The owner's promise at the heart of the page (teach how to think, not to copy answers or AI output), SHOWN through
// worked thinking examples in coding and math that we wrote, not claimed.
// Sources (copies in keyword-research-2026-09/ca/src-pilots/problem-solving-coding-and-math-classes-canada/ and ca/src/):
//  - facts-schools-contests.md (verified): BC Computer Programming 11 "Key components are decomposition, patterns and
//    generalizations, abstraction, and algorithmic thinking."; BC Computer Science 11 "dividing complex problems into
//    parts that are easier to conceive, understand, and program"; Ontario Grade 1 C3.2 "read and alter existing code,
//    including code that involves sequential events, and describe how changes to the code affect the outcomes"; Ontario
//    Grade 6 C3.2 "describe how changes to the code affect the outcomes and the efficiency of the code"; MTH1W C2.2 and
//    C2.3 ("read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes"); ICD2O
//    "including automation and artificial intelligence, and assess their benefits and limitations"; New Brunswick CS 110
//    "using coding environments or AI-assisted debugging tools" (non-breaking hyphen in the source, plain on the page);
//    BCC "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"
//    and "Time allowed for completion is 45 minutes."; CEMC "Our contests are not tests or exams. There is no passing or
//    failing score."; Problem of the Week "e-mailed to educators for use with their students from Grades 3 to 12" and
//    "New problems are sent every Thursday, and their solutions are sent one week later." (the page carries a stale
//    banner too, so the page says only what CEMC describes); CCC rules: "generative AI such as CoPilot or ChatGPT" and
//    "AI-based tools within an IDE cannot be used." (ccc-junior-guide copies of cccgrader.com/rules.pdf).
//  - Ontario Ministry of Education memorandum "Mandatory Professional Activity Days for the 2026-27 School Year",
//    dated May 15, 2026 (ontario.ca, fetched raw 22 October 2026, pa-days-2026-27.html/.txt): topic "Cyber Safety and
//    Artificial Intelligence"; "how to effectively and safely use those tools with students".
//  - scripts/brand-facts.json: ages 6 to 67; groups 15 to 20 and 1:1 (the mini batch is sold only in India).
// Our own material, labelled on the page: the five thinking moves; worked example 1 (the warmest morning: version 1
// prints 0, version 2 prints -7, run under CPython on 22 October 2026); worked example 2 (home-and-away league: 2, 6,
// 12, 20, 30 games for 2 to 6 teams, n * (n - 1), checked by program); worked example 3 (seconds in a year estimated at
// about 30 million against a claimed 5 million; 60 * 60 * 24 * 365 = 31536000, printed by Python); the class outline;
// the AI rules. Lesson family: checking a claim (predict, shrink, estimate) before trusting it.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const COLD1 = `# Our example, version 1: the warmest morning of a cold week (written by Modern Age Coders)
temps = [-18, -7, -22, -11, -9]
warmest = 0
for t in temps:
    if t > warmest:
        warmest = t
print(warmest)`;

const COLD2 = `# Our example, version 2: start from a real reading, not from zero
temps = [-18, -7, -22, -11, -9]
warmest = temps[0]
for t in temps[1:]:
    if t > warmest:
        warmest = t
print(warmest)`;

const GAMES = `# Our check: count home-and-away games in a league (written by Modern Age Coders)
def games(n):
    count = 0
    for home in range(n):
        for away in range(n):
            if home != away:      # a team never plays itself
                count += 1
    return count

for n in range(2, 7):
    print(n, "teams:", games(n), "games;", "n * (n - 1) =", n * (n - 1))`;

const GAMES_OUT = `2 teams: 2 games; n * (n - 1) = 2
3 teams: 6 games; n * (n - 1) = 6
4 teams: 12 games; n * (n - 1) = 12
5 teams: 20 games; n * (n - 1) = 20
6 teams: 30 games; n * (n - 1) = 30`;

const SECS = `# Our check: seconds in a year of 365 days
print(60 * 60 * 24 * 365)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'THINKING', blurb: 'Problem-solving classes in coding and math for Canadian students: five thinking moves, three worked examples we wrote, where Canadian curricula ask for the same habits, and where AI fits.' },
  slug: 'problem-solving-coding-and-math-classes-canada',
  code: 'psmc',
  accent: '#311694',
  accentRationale: 'Problem-solving coding and math classes, Canada: a muted violet ink #311694, allocated for this row at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 11.84 on the paper #FBF8F2, 11.14 on #F5F1E8 and 10.19 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Problem-solving classes',
  title: 'Problem-Solving Coding and Math Classes in Canada',
  description: 'Coding and math classes in Canada that teach students to think, not copy answers or AI output: five thinking moves, three worked examples, and where AI fits.',
  ogDescription: 'Learn to think, not copy: three worked examples in code and math that show what a problem-solving class does differently, and what Canadian curricula already ask for.',
  twitterDescription: 'Problem-solving classes in Canada: five thinking moves and three worked examples in code and math.',
  pageName: 'Problem-Solving Coding and Math Classes in Canada',
  webPageDescription: 'An explanation, for Canadian families, of how live coding and math classes can teach problem solving rather than copying, with five thinking moves, original worked examples in Python and math, provincial curriculum links and a policy on AI tools.',
  courseDescription: 'Live online problem-solving classes in coding and math for Canadian students aged 6 to 67, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Problem-solving classes',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#moves', label: 'Five moves' },
    { href: '#example-code', label: 'Coding example' },
    { href: '#example-math', label: 'Math example' },
    { href: '#example-check', label: 'Checking a claim' },
    { href: '#ai', label: 'Where AI fits' }
  ],
  eyebrow: 'Canada &middot; Coding and math &middot; Problem solving',
  h1: 'Problem-solving coding and math classes in Canada',
  lede: 'A worked answer is now one photo or one prompt away for every Canadian student. That changes what a class is for. If a child can get the answer without thinking, the only thing worth paying a teacher for is the thinking itself: deciding what a problem is asking, trying a smaller version, predicting before running, checking a claim before trusting it. This page shows what that looks like, through three worked examples we wrote, one in code, one in math and one about checking an answer that sounds right. It also shows where Canadian curricula already ask for the same habits, and how we treat AI tools in class.',
  secondaryCta: { href: '#example-code', label: 'Start with the coding example' },
  wa: 'Hello Modern Age Coders, I would like my child in Canada to learn problem solving through coding and math. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; ages 6 to 67 &middot; every example on this page written by our teachers',
  spec: [
    ['What we teach', 'Thinking, through coding and math'],
    ['Thinking moves', 'Five, practised every class'],
    ['Worked examples here', 'Three, all our own'],
    ['Ages', '6 to 67'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['AI tools', 'After the thinking, as a checker'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A problem-solving class in coding or math teaches students to work out answers themselves: to predict before running code, test small cases, estimate, explain each step and check any claim, including one from an AI tool. Modern Age Coders teaches this live online to students across Canada aged 6 to 67, one to one or in a batch, through courses including Problem Solving for Kids and Math Through Coding.',

  picks: {
    eyebrow: 'Courses built on thinking',
    h2: 'Three problem-solving courses for Canadian students',
    lede: 'Each one puts the student in charge of the reasoning, with the teacher asking rather than telling.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PSMC / 01', title: 'Problem Solving for Kids', note: 'Ages 7 to 12, complete beginners. Puzzles, patterns and step-by-step plans, then code that carries them out.' },
      { course: 'maths-through-coding', code: 'PSMC / 02', title: 'Math Through Coding', note: 'Ages 10 to 15, Grades 5 to 10, no coding needed. Fractions, geometry and probability learned by building them in Python.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'PSMC / 03', title: 'Problem Solving for Teens', note: 'Ages 13 to 18. Logic, data structures and algorithms, for students heading towards contests or computer science.' }
    ]
  },

  sections: [
    {
      id: 'moves', tint: 'tint', eyebrow: 'Five thinking moves',
      h2: 'The five moves we practise in every class',
      lede: 'Problem solving sounds vague until it is broken into actions a student can take. These five are ours, and every worked example further down uses at least two of them. They work in code and in math, at age seven and at age seventeen.',
      body: [
        { kind: 'table', caption: 'Five thinking moves (our teaching framework)', head: ['Move', 'What the student does', 'The question the teacher asks'], rows: [
          ['1. Restate', 'Says the problem in their own words, including what the answer should look like', '"What exactly are we being asked for?"'],
          ['2. Shrink', 'Tries a smaller or simpler version first, and looks for a pattern', '"What if there were only two?"'],
          ['3. Predict', 'Says what a program or a calculation will produce before running it', '"What will this print, and why?"'],
          ['4. Estimate', 'Works out roughly how big the answer must be, to catch a wrong one', '"Is that answer even the right size?"'],
          ['5. Explain and change', 'Explains each step aloud, then adapts the solution when a rule changes', '"Why does that line work? What if the rule changed?"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why moves, not tips',
          left: [
            'A tip ("always draw a picture") helps with one kind of problem. A move is something a student can try on any problem when they are stuck, and they can tell whether it worked.',
            'We name the moves out loud in class. After a few weeks students start saying "let me shrink it" before the teacher does, which is the moment the habit has transferred.'
          ],
          rightH3: 'What the promise means in practice',
          right: [
            'What we promise families is simple to say and hard to fake: a student leaves able to work a problem out alone, instead of lifting an answer from a book, a classmate or an AI tool, and the teaching is the same standard in Kamloops, in Moncton or anywhere else we teach.',
            'On a screen, that means the student types and the teacher asks. If the teacher is writing most of the code or most of the working, the class has slipped, and we would want you to tell us.'
          ] }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'What schools already ask',
      h2: 'Canadian curricula already ask for these habits',
      lede: 'Problem solving is not an extra that we bolt on. Provincial curricula across Canada name the same habits in their own words. Each quoted line is copied from a ministry curriculum page that we opened on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Thinking habits named in provincial curricula (quoted from each province\'s curriculum)', head: ['Where', 'In the curriculum\'s words', 'The move it matches'], rows: [
          ['Ontario, Grade 1 math, coding', '"read and alter existing code, including code that involves sequential events, and describe how changes to the code affect the outcomes"', 'Explain and change'],
          ['Ontario, Grade 6 math, coding', '"describe how changes to the code affect the outcomes and the efficiency of the code"', 'Predict, explain and change'],
          ['Ontario, Grade 9 math (MTH1W)', '"read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes"', 'Predict'],
          ['Ontario, Grade 9 math (MTH1W)', '"create code by decomposing situations into computational steps in order to represent mathematical concepts and relationships"', 'Restate and shrink'],
          ['British Columbia, Computer Science 11', '"dividing complex problems into parts that are easier to conceive, understand, and program"', 'Shrink'],
          ['British Columbia, Computer Programming 11', '"Key components are decomposition, patterns and generalizations, abstraction, and algorithmic thinking."', 'Shrink and explain'],
          ['Ontario, Grade 10 (ICD2O)', '"including automation and artificial intelligence, and assess their benefits and limitations"', 'Checking a claim'],
          ['New Brunswick, Computer Science 110', '"using coding environments or AI-assisted debugging tools"', 'Checking a claim']
        ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics" rel="noopener" target="_blank">Ontario curriculum</a> (through its public content service), <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science" rel="noopener" target="_blank">BC Computer Science 11</a>, <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming" rel="noopener" target="_blank">BC Computer Programming 11</a> and <a class="ag-inline-link" href="https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/" rel="noopener" target="_blank">New Brunswick Computer Science 110</a>, read 22 October 2026. The third column is our reading.' },
        { kind: 'two', mt: true,
          leftH3: 'Predict before you run',
          left: [
            'Ontario\'s Grade 9 course asks students to "read code to predict its outcome". That is move three, written into a provincial math course. It is also the single habit that most separates a student who copies code from one who understands it.',
            'A student who predicts first and is wrong learns something. A student who runs first and sees the right answer often learns nothing, because there was no question in their head to answer.'
          ],
          rightH3: 'Teachers are working on AI too',
          right: [
            'Ontario\'s memorandum on mandatory professional activity days for 2026-27, dated May 15, 2026, lists "Cyber Safety and Artificial Intelligence" as a topic, including "how to effectively and safely use those tools with students".',
            'Schools and families are asking the same question this page asks: how to keep the thinking with the student when a tool can produce the answer. Our answer is in the section on AI below.'
          ] }
      ]
    },
    {
      id: 'example-code', tint: 'tint', eyebrow: 'Worked example 1: code',
      h2: 'The warmest morning: a bug that only thinking finds',
      lede: 'Our example, written for students of about 11 and up. A week of Canadian winter mornings is stored in a list, and the program should print the warmest. Version 1 looks right, runs without an error, and is wrong. Before reading on, predict what it prints.',
      body: [
        { kind: 'code', label: 'Version 1 &middot; our program, with a bug', lang: 'python', code: COLD1, note: 'It prints <b>0</b>. Every reading is below zero, so no reading is ever greater than the starting value of 0, and the program reports a temperature that never happened. Tested in Python on 22 October 2026.' },
        { kind: 'p', mt: true, html: '<b>How the five moves find it.</b> <b>Restate:</b> the answer must be one of the five readings, so 0 cannot be right. <b>Predict:</b> trace the loop by hand; warmest starts at 0, and -18 &gt; 0 is false, so it never changes. <b>Shrink:</b> try a list with one reading, [-5]; the right answer is -5 and the program says 0. <b>Explain:</b> the bug is not in the loop but in the starting value, which assumes the answer is at least 0.' },
        { kind: 'code', label: 'Version 2 &middot; the fix, start from a real reading', lang: 'python', code: COLD2, note: 'It prints <b>-7</b>, the warmest morning in the list. Starting from the first reading means the starting value is always a real answer. Tested in Python on 22 October 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this example',
          left: [
            'Version 1 is the kind of code a student copies from a summer-weather tutorial, where temperatures are positive and the bug never shows. It passes every test that does not include a Canadian January.',
            'A student who has learned to shrink and predict finds it in minutes. A student who has only learned to copy will trust the 0, because the program did not crash.'
          ],
          rightH3: 'The change test',
          right: [
            'Once the fix is in, we change the rule: "now print the coldest morning, and which day it was." A student who understood version 2 changes the comparison and adds a counter. A student who did not, starts again.',
            'For younger students the same idea works with a Scratch sprite that should stop at the highest platform on screen, when every platform is below its starting height.'
          ] }
      ]
    },
    {
      id: 'example-math', tint: 'deep', eyebrow: 'Worked example 2: math',
      h2: 'Home and away: counting games by shrinking the problem',
      lede: 'Our example, for students of about 10 and up. A hockey league has 6 teams, and every team plays every other team twice, once at home and once away. How many games are played? Three answers come up again and again in class: 36, 15 and 30. Only one is right.',
      body: [
        { kind: 'table', caption: 'Shrinking the league to find the pattern (our worked example)', head: ['Teams', 'Games, listed or counted', 'Games'], rows: [
          ['2 (A, B)', 'A at home to B; B at home to A', '2'],
          ['3 (A, B, C)', 'Each team hosts the other 2: 3 times 2', '6'],
          ['4', 'Each team hosts the other 3: 4 times 3', '12'],
          ['5', 'Each team hosts the other 4: 5 times 4', '20'],
          ['6', 'Each team hosts the other 5: 6 times 5', '30']
        ] },
        { kind: 'p', mt: true, html: '<b>Why the wrong answers are wrong.</b> <b>36</b> is 6 times 6, which counts each team playing itself; with 2 teams the same method gives 4, but we listed only 2 games. <b>15</b> counts each pair once, which is right for a league that plays once, not twice. The pattern from the shrunk cases is n times (n minus 1), and for 6 teams that is <b>30</b>. The habit is to test any formula on a case small enough to list by hand.' },
        { kind: 'code', label: 'Checking the pattern with a program (ours)', lang: 'python', code: GAMES },
        { kind: 'code', label: 'What it prints', lang: 'text', code: GAMES_OUT, note: 'Tested in Python on 22 October 2026. The program counts every home-and-away pair directly and agrees with n * (n - 1) for every league size from 2 to 6.' },
        { kind: 'two', mt: true,
          leftH3: 'Math and code on the same problem',
          left: [
            'The table is the math: shrink, list, spot the pattern, write the rule. The program is the code: count everything the slow way to check the rule. Each one checks the other.',
            'This is the core of our Math Through Coding course. A student who can do both believes the answer for a reason, not because the back of the book said so.'
          ],
          rightH3: 'The change test, again',
          right: [
            'Change the rule: each pair now plays three times. A student who understood says 6 times 5 divided by 2 times 3, which is 45, and can say why the division by 2 appears.',
            'For a Grade 12 student, the same structure leads to counting arrangements and choices, the ideas behind combinations in data management courses.'
          ] }
      ]
    },
    {
      id: 'example-check', tint: 'tint', eyebrow: 'Worked example 3: checking a claim',
      h2: 'An answer that sounds right: estimating before you trust it',
      lede: 'Our example, for any age from about 9. A confident, well-written explanation, of the kind a website, a classmate or an AI tool might give, says: "There are about 5 million seconds in a year." It sounds precise. Is it right? The move is to estimate, and it takes under a minute.',
      body: [
        { kind: 'ol', items: [
          '<b>Round to friendly numbers.</b> A minute has 60 seconds and an hour has 60 minutes, so an hour has 3,600 seconds. Call it about 4,000.',
          '<b>Scale up to a day.</b> A day has 24 hours. About 4,000 times 24 is close to 100,000 seconds; the true figure is 86,400.',
          '<b>Scale up to a year.</b> About 100,000 times 365 is about 36 million. Rounding down, a year has roughly 30 million seconds or a little more.',
          '<b>Compare with the claim.</b> 5 million is about six times too small. The claim is wrong, and we found out without a calculator.',
          '<b>Check exactly, last.</b> Only now do we compute: 60 times 60 times 24 times 365.'
        ] },
        { kind: 'code', label: 'The exact check (ours)', lang: 'python', code: SECS, note: 'It prints <b>31536000</b>, about 31.5 million, for a year of 365 days, when we ran it on 22 October 2026. The estimate of roughly 30 million was close; the confident claim of 5 million was not.' },
        { kind: 'two', mt: true,
          leftH3: 'Why we teach estimation so hard',
          left: [
            'Estimation is the cheapest defence against a wrong answer, whatever produced it: a slip on a calculator, a misread question, or a fluent paragraph from a tool that sounded sure of itself.',
            'A student who estimates first can tell in seconds whether an answer is the right size. That habit lasts long after the formulas are forgotten.'
          ],
          rightH3: 'The point about sounding right',
          right: [
            'The claim in this example is ours, invented to be wrong. Real wrong answers rarely announce themselves; they are written in the same calm tone as right ones.',
            'That is why "check a claim before you trust it" is a skill we teach directly, with planted wrong answers, rather than a warning we give once.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'Where AI fits',
      h2: 'Where AI tools fit in a problem-solving class',
      lede: 'We do not pretend AI tools do not exist; New Brunswick\'s Computer Science 110 names AI-assisted debugging tools, and Ontario\'s Grade 10 ICD2O asks students to assess AI\'s benefits and limitations. We do insist on an order. These are our class rules.',
      body: [
        { kind: 'table', caption: 'Our rules for AI tools in class, by age (ours)', head: ['Age', 'Our rule', 'Why'], rows: [
          ['6 to 12', 'No AI tools for writing code or solving problems in class', 'The habits in the five moves need years of practice without a shortcut'],
          ['13 to 17', 'Think and write first; then an AI tool may be used, with a parent\'s permission where the tool requires it, to check or explain', 'Students learn to treat AI output as a claim to test, like worked example 3'],
          ['18 and up', 'AI tools as a working partner, after the learner can read and explain the code they produce', 'Adults need the same understanding to catch the tool\'s mistakes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Contests make the case for us',
          left: [
            'For the whole sitting, the Canadian Computing Competition\'s rules ban "generative AI such as CoPilot or ChatGPT", and add that "AI-based tools within an IDE cannot be used." A student preparing for it must be able to think alone.',
            'Away from contests, anyone under 18 needs a parent\'s permission to use ChatGPT, and Claude is for adults only. We do not recommend either to younger students.'
          ],
          rightH3: 'The test we use',
          right: [
            'When a teen uses an AI tool to check work, we ask them to close it and explain the answer in their own words, then change one condition and solve it again.',
            'If they can, the tool helped. If they cannot, the tool did the thinking, and we go back to the five moves.'
          ] }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Free practice in Canada',
      h2: 'Free Canadian problems that reward thinking',
      lede: 'Some of the best problem-solving practice in Canada costs nothing. These come from CEMC, the Waterloo-based Centre for Education in Mathematics and Computing, which says of its contests: "Our contests are not tests or exams. There is no passing or failing score."',
      body: [
        { kind: 'table', caption: 'CEMC problem sources suited to thinking practice (CEMC\'s own pages, read 22 October 2026)', head: ['Source', 'What CEMC says', 'How we use it'], rows: [
          ['Beaver Computing Challenge', 'The questions "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces"; "Time allowed for completion is 45 minutes."; written in school, Monday, November 9, 2026 to Friday, November 20, 2026 in the Americas', 'Logic and computational thinking without any code, for Grades 5 to 10'],
          ['Problem of the Week', '"e-mailed to educators for use with their students from Grades 3 to 12"; "New problems are sent every Thursday, and their solutions are sent one week later."', 'One problem a week, attempted before class and discussed with the five moves'],
          ['Past contests', 'Resources from the last ten years, free, with "no registration or fee required"', 'Practice papers, always attempted before the solution is opened']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/bcc" rel="noopener" target="_blank">CEMC, Beaver Computing Challenge</a>, <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/potw" rel="noopener" target="_blank">Problem of the Week</a> and <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources" rel="noopener" target="_blank">CEMC resources</a>, read 22 October 2026. For contest entry, CEMC says "all students must participate through their school." We are not connected with CEMC, and we never reproduce its problems; we link to them and write our own.' }
      ]
    },
    {
      id: 'inclass', tint: 'deep', eyebrow: 'Inside a class',
      h2: 'What an hour of problem solving looks like',
      lede: 'Our outline for a one-hour live class. The proportions change with age, but the order does not: the problem comes before the method, and the student speaks more than the teacher.',
      body: [
        { kind: 'table', caption: 'A one-hour problem-solving class (our outline)', head: ['Minutes', 'What happens', 'The move in use'], rows: [
          ['0 to 5', 'A warm-up puzzle on screen; students restate it before anyone solves it', 'Restate'],
          ['5 to 20', 'The main problem, attempted by students first, with the teacher asking only questions', 'Shrink and predict'],
          ['20 to 35', 'Students share approaches, including wrong ones; the class finds where each one breaks', 'Explain'],
          ['35 to 50', 'Code or written working to carry out the strongest approach, then a check by estimate or by program', 'Estimate'],
          ['50 to 60', 'One rule changes; students adapt their solution and say what they changed', 'Explain and change']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'In a batch of 15 to 20', p: 'Students work in short turns and share on screen; the teacher picks who explains, so nobody can hide.' },
          { h3: 'Before a contest or test', p: 'A few one-to-one classes alongside the batch, spent on the problems the student finds hardest.' },
          { h3: 'One to one', p: 'The whole hour follows one student\'s thinking, with problems chosen from their school course.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages of a problem solver',
    lede: 'Our stages, used to place a student in the first class.',
    table: { caption: 'Four stages of problem solving (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Waits', 'Stops at the first difficulty and waits to be shown'],
      ['2. Tries', 'Has a go, but cannot say why an attempt failed'],
      ['3. Checks', 'Shrinks, predicts or estimates without being reminded, and catches their own errors'],
      ['4. Adapts', 'Changes a solution when the rule changes, and explains the change']
    ] },
    left: { h3: 'For parents', ps: [
      'At home, the most useful question is not "is it right?" but "how do you know?". It moves a child from stage 2 to stage 3 faster than any worksheet.',
      'Resist giving the answer when your child is stuck. Ask what a smaller version would look like instead.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you run code or check an answer, say out loud what you expect. Being wrong first is how you learn.',
      'If an answer appears from anywhere, a friend, a website, a tool, estimate it before you believe it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses where thinking comes first',
    lede: 'Taught live online by a teacher who stays with the student, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Younger thinkers', sub: 'Ages 5 to 12', courses: [
        { code: 'PSMC / Y / 01', slug: 'mental-maths-mastery-kids', title: 'Mental Math for Kids', blurb: 'Number sense rather than tricks, ages 5 to 10.' },
        { code: 'PSMC / Y / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Plans and loops through games, ages 6 to 12.' },
        { code: 'PSMC / Y / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI works and where it goes wrong, ages 8 to 14.' }
      ] },
      { num: 'II', h3: 'Teen problem solvers', sub: 'Ages 11 to 18', courses: [
        { code: 'PSMC / T / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'Gauss to Euclid with problems our teachers write.' },
        { code: 'PSMC / T / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior Preparation', blurb: 'Contest programming without AI, in Python or C++.' },
        { code: 'PSMC / T / 03', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A full language, learned by predicting and changing code.' }
      ] },
      { num: 'III', h3: 'Deeper reasoning', sub: 'Strong students and adults', courses: [
        { code: 'PSMC / D / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition Mathematics', blurb: 'Olympiad-style problems for students who want more.' },
        { code: 'PSMC / D / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive Programming for Teens', blurb: 'Algorithms and proof of correctness, ages 13 to 18.' },
        { code: 'PSMC / D / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The full treatment, for ages 18 and up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our classes run',
    h2: 'Live problem-solving classes on a Canadian timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in the clock of your own province.' },
      { time: 'Weekends', l: 'Weekend mornings for a slower, deeper hour.' },
      { time: '1-on-1', l: 'Arranged around the student, with problems from their own course.' }
    ],
    cells: [
      { h3: 'Problem first', p: 'Students meet the problem before the method.' },
      { h3: 'Predict, then run', p: 'No code runs before someone says what it will do.' },
      { h3: 'Planted errors', p: 'Wrong answers on purpose, for students to catch.' },
      { h3: 'AI after thinking', p: 'Tools only once the student can explain the answer.' },
      { h3: 'Code and math together', p: 'Each checks the other, as in the league example.' },
      { h3: 'Ages 6 to 67', p: 'Separate batches for children, teens and adults.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Projects are where the five moves meet real work. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews from parents on Google, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee, shown here in your own currency, for eight live classes. There is no long contract; families pay a month at a time.',
    free: ['A free first class', 'A problem matched to your child', 'No card required'],
    group: ['Batch of 15 to 20 students', 'Eight live classes each month', 'The same teacher throughout'],
    one: ['Private lessons for one student', 'Problems from their own course', 'Times arranged with you']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Problem-solving classes: questions and answers',
    items: [
      { q: 'What is a problem-solving class in coding or math?', a: 'A class where the student works out the answer, with the teacher asking questions rather than giving steps. We practise five moves: restate the problem, shrink it, predict, estimate, and explain and change the solution.' },
      { q: 'How is this different from an ordinary coding class?', a: 'Many coding classes have students follow along and type. Ours asks students to predict what code will do before running it, find bugs by reasoning, and change their program when a rule changes. The coding example on this page shows the difference.' },
      { q: 'How do you stop students copying answers or AI output?', a: 'The student types and the teacher asks. Every answer has to be explained aloud, every program is predicted before it runs, and every lesson ends with a rule change that a copied answer cannot survive.' },
      { q: 'Can my child use ChatGPT or other AI tools?', a: 'Not in class for children under 13. Teens think and write first, then may use a tool to check, with a parent\'s permission where the tool requires it; no one under 18 should use ChatGPT without a parent agreeing. Adults use AI as a partner once they can explain the code.' },
      { q: 'Does problem solving help with school math in Canada?', a: 'It matches what the curricula ask. Ontario\'s Grade 9 math course asks students to read code to predict its outcome, and BC\'s Computer Science 11 is about dividing complex problems into smaller parts. Both are habits we practise every class.' },
      { q: 'What age is right to start?', a: 'Our problem-solving course for kids starts at age 7, and mental math at 5. Teens can join Problem Solving for Teens from 13 with no experience, and adults are welcome in separate batches.' },
      { q: 'Does my child need to know how to code first?', a: 'No. Problem Solving for Kids and Math Through Coding both start from zero. The Beaver Computing Challenge, run by CEMC, also needs no coding: its questions use concepts from the math curriculum.' },
      { q: 'Are there free problem-solving resources in Canada?', a: 'Yes. CEMC at the University of Waterloo offers past contests and a weekly Problem of the Week for Grades 3 to 12 at no cost, and its contests are written through schools. We link to them and write our own problems for class.' },
      { q: 'Will this improve my child\'s marks?', a: 'We do not promise marks. What families usually notice first is that homework takes less time, children try before asking for help, and explanations start with because.' },
      { q: 'What times are classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set every time in your own province\'s clock.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on thinking, coding and math for Canadian students.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every course we teach for Canadian families.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Live math help mapped to each province\'s courses.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'More on turning a problem into steps.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'The reasoning behind finding bugs like the one above.' },
      { href: '/blog/vibe-coding-vs-learning-to-code-properly', label: 'Vibe coding or real coding?', p: 'What changes when AI writes the code.' },
      { href: '/blog/how-coding-improves-mathematical-thinking-children', label: 'Coding and mathematical thinking', p: 'Why the two subjects strengthen each other.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'Where each province puts coding.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Contest math for Grades 7 to 12.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'A first programming contest, with problems we wrote.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class starts with a problem matched to your child\'s age, solved by your child with the teacher only asking questions. At the end you will hear which of the five moves come naturally and which need practice.',
    readFirst: 'Want to watch first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows recorded lessons, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Our teachers teach from India, live over video, so a student in Kelowna or Charlottetown joins the same class from home. WhatsApp is the fastest way to reach us.',
    formNote: 'Free to book, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Thinking skills', links: [
        { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/coding-vs-maths', label: 'Coding or math first' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Shrink it, predict it, check it'
  },

  personalityCss: `
.ag-root.ag-psmc .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-psmc .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-psmc .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-psmc .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-psmc .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-psmc .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario DCP (Grade 1 and Grade 6 C3.2, MTH1W C2.2 and C2.3, ICD2O), BC curriculum (Computer Science 11, Computer Programming 11), New Brunswick Computer Science 110, Ontario Ministry memorandum on mandatory PA days for 2026-27 (May 15, 2026), CEMC BCC, Problem of the Week and resources pages, and the CCC rules on AI, all read raw on 22 October 2026.',
    localProject: 'Five thinking moves (restate, shrink, predict, estimate, explain and change); three original worked examples: the warmest-morning bug in Python (0, then -7), the home-and-away league (2, 6, 12, 20, 30 games, n * (n - 1), checked by program), and estimating seconds in a year against a planted claim of 5 million (31536000 printed by Python); age rules for AI tools; a one-hour class outline. Lesson family: checking a claim before trusting it.',
    requiredMentions: ['The warmest morning: a bug that only thinking finds', 'warmest = temps[0]', 'Home and away: counting games by shrinking the problem', '6 teams: 30 games; n * (n - 1) = 30', 'There are about 5 million seconds in a year.', 'Teachers are working on AI too','how to effectively and safely use those tools with students', 'Shrink it, predict it, check it', 'The five moves we practise in every class'],
    sources: [
      { claim: 'Ontario coding expectations C3.2 (Grades 1 and 6) and MTH1W C2.2 and C2.3; ICD2O on AI benefits and limitations.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'BC Computer Science 11 decomposition; Computer Programming 11 key components of computational thinking.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science' },
      { claim: 'New Brunswick Computer Science 110 names AI-assisted debugging tools.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'Ontario 2026-27 mandatory PA day topic Cyber Safety and Artificial Intelligence, dated May 15, 2026.', url: 'https://www.ontario.ca/document/education-ontario-policy-and-program-direction/mandatory-professional-activity-days' },
      { claim: 'BCC needs only math-curriculum concepts; 45 minutes; contests are not tests or exams.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'Problem of the Week for Grades 3 to 12, sent every Thursday.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'CCC rules forbid generative AI and AI tools within an IDE.', url: 'https://cccgrader.com/rules.pdf' }
    ],
    rejectedClaims: [
      'Any claim that problem-solving classes raise marks or contest results: refused; the page says we do not promise marks.',
      'A quoted AI tool answer: none used; the 5 million seconds claim is ours, invented to be wrong, and labelled so.',
      'CEMC Problem of the Week status for 2026-27: the page carries a stale 2024-2025 banner beside a current problem, so the page states only what CEMC describes the service as.',
      'Any CEMC past problem or solution: never reproduced; all three worked examples are ours.',
      'Recommending Claude or ChatGPT to under-18 students: refused; the page states the age rules.',
      'Any affiliation with CEMC or a ministry: none.'
    ]
  }
};
