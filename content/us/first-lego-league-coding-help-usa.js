'use strict';
// FIRST LEGO League coding help, USA (ag- competition door; UK and US exams cluster Phase 2, row US070). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/first-lego-league-coding-help-usa/:
//  - firstinspires.org/programs/fll: "The 2026-2027 FIRST LEGO League season, BIOGLOW, will be the final season of the
//    program and include two editions: Founders Edition and Future Edition"; BIOGLOW "released August 4, 2026"; part of
//    the FIRST CANOPY season; Founders Edition grades 2-8, ages 6-16, SPIKE; Explore ages 6-10, Challenge ages 9-16
//    (varies by country); Challenge teams "program a LEGO Education SPIKE Prime robot to autonomously complete missions
//    against a playing field during two-and-a-half minute matches"; Future Edition grades K-8, ages 5-16, LEGO Education
//    Computer Science & AI kits, alliance-based game; 2024-2025 stats 650000 students, 77 countries.
//  - firstinspires.org/programs/k-8 (FAQ updated August 27, 2026): next generation K-8 programs launch for the 2027-2028
//    FIRST season; "Following the conclusion of the FIRST LEGO League program in 2027"; SPIKE Prime and Essential
//    compatibility "through the 2028-2029 season"; new programs "not sponsored, endorsed, or otherwise affiliated with
//    LEGO Education or the LEGO Group"; "SPIKE products retire June 30, 2026"; innovation project stays for grades 3+.
//  - firstinspires.org/programs/fll/game-and-season and the season materials library: Explore grades 2-4, Challenge grades
//    4-8, Future Edition K-2 and 3-8.
//  - community.firstinspires.org registration blog (June 17, 2026): US and Canada teams use a refreshed FIRST Dashboard;
//    Founders Edition needs SPIKE (Essential or Prime), Future Edition needs CS & AI kits; teams with both can register
//    one team for each edition.
//  - FLL Challenge BIOGLOW season overview PDF: "teams of up to 10 children"; four equally weighted parts: Core Values,
//    Innovation Project, Robot Design, Robot Game; "15 biodiversity-inspired missions"; 2.5-minute match.
//  - FLL Challenge BIOGLOW Robot Game Rulebook PDF: three official matches, top score counts; robot "must operate
//    autonomously after it is launched and follow programming written by your team"; "Teams can use any software or
//    programming language."; "No remote controllers of any type are allowed."; one sheet of notebook paper per home area
//    for program notes; controller max one, motors max four, sensors only touch/force, color, distance/ultrasonic and
//    gyro; one launch area under 12 in. (305 mm) for 20 points; precision tokens 1: 10, 2: 15, 3: 25, 4: 35, 5: 50,
//    6: 50, start with six, lose one per interruption outside home; two technicians per home area at most; "All robot
//    game wording means precisely and only what it says."; "At an event, your head referee makes the final decision."
//  - FLL Challenge updates PDF (updated October 14th, 2026): Update 01 Lucky Leaves randomized before the match; Update 02
//    programming the robot to release an interchangeable model from its dock with the latch is allowed autonomously.
//  - FLL Challenge participation rules PDF (marked updated September 2024, linked from the 2026-2027 library): "All work
//    presented at events is the work of the children on the team."; US and Canada ages 9 to 14; teams of 2 to 10;
//    season materials released on the first Tuesday in August; "excessively instructing, prompting" may lead to removal.
//  - education.lego.com/en-us/lego-league/program-update: "Launching August 2027"; "FIRST LEGO League comes to an end
//    after the 2026-2027 BIOGLOW season"; LEGO League ages 5-16, bands 5-7 (K-2) and 8-16 (grades 3-8); 2027-2028 welcomes
//    SPIKE and legacy hardware and CS & AI; from 2028-2029 requires CS & AI kits; coding via LEGO Education Coding Canvas
//    or Python; registration "between March-May of 2027"; teams minimum 4, recommended maximum 10.
// Our own material, labelled on the page: the marginal cost of each lost precision token (0, 15, 10, 10, 5 points, read
// off the official table), the top-of-three lesson (plan A five 20-point missions at 90 percent: 90.0 expected in one
// match, 98.6 expected highest of three; plan B three of those plus a 60-point mission at 45 percent: 81.0 and 107.0;
// exact enumeration in Python), the Python code, the practice set and the eight-week plan.
// Lesson family: choosing a plan when only the highest of three attempts counts (expected maximum, not expected value).
// Siblings read so as not to repeat: first-lego-league-uk-coding-help (dead reckoning drift), first-lego-league-australia-
// coding-help (degrees to millimetres), vex-iq-programming-help (points per second).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BEST3 = '# Our model: which run plan wins when only the highest of three matches counts?\n# Mission points and success rates are invented for teaching.\nfrom itertools import product\n\ndef outcomes(missions):\n    """Every possible score for one match, with its probability."""\n    table = {}\n    for result in product([0, 1], repeat=len(missions)):\n        prob, score = 1.0, 0\n        for (points, p), hit in zip(missions, result):\n            prob *= p if hit else 1 - p\n            score += points if hit else 0\n        table[score] = table.get(score, 0) + prob\n    return table\n\ndef expected_top_of(table, n=3):\n    """Expected value of the highest score in n independent matches."""\n    total, below = 0.0, 0.0\n    for score in sorted(table):\n        at_or_below = below + table[score]\n        total += score * (at_or_below ** n - below ** n)\n        below = at_or_below\n    return total\n\nplan_a = [(20, 0.90)] * 5                  # five steady missions\nplan_b = [(20, 0.90)] * 3 + [(60, 0.45)]   # three steady, one bold\n\nfor name, plan in [("A", plan_a), ("B", plan_b)]:\n    t = outcomes(plan)\n    one = sum(s * p for s, p in t.items())\n    print(name, round(one, 1), round(expected_top_of(t), 1))\n\n# prints:  A 90.0 98.6\n#          B 81.0 107.0';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'FIRST LEGO League coding help for the final 2026 to 2027 BIOGLOW season: robot game coding rules, precision tokens, top-of-three planning and what replaces FLL in 2027.' },
  slug: 'first-lego-league-coding-help-usa',
  code: 'fllc',
  accent: '#267260',
  accentRationale: 'FIRST LEGO League coding help, USA: a deep teal #267260 from the US allocation table, 5.42:1 on paper #FBF8F2, bluer than the olive green of the UK FLL page and clear of the VEX IQ plum',
  pageType: 'market',
  market: US,
  routeLabel: 'FIRST LEGO League coding help',
  title: 'FIRST LEGO League Coding Help USA: BIOGLOW 2026-27',
  description: 'FIRST LEGO League programming help for US teams in the final 2026-27 BIOGLOW season: robot game coding rules, precision tokens and what replaces FLL.',
  ogDescription: 'BIOGLOW is the last FIRST LEGO League season. What the 2026-27 robot game rules say about code, why only your highest of three matches counts, and where US teams go in 2027.',
  twitterDescription: 'FLL coding for the final season: rules, tokens and top-of-three planning.',
  pageName: 'FIRST LEGO League Coding Help USA',
  webPageDescription: 'A guide for US students, parents and coaches to programming a FIRST LEGO League Challenge robot in the 2026 to 2027 BIOGLOW season, from the FIRST rulebook and season pages and the LEGO Education announcement, with an original top-of-three planning lesson in Python.',
  courseDescription: 'Live online coding classes for FIRST LEGO League students aged about 9 to 14 that teach the programming behind an autonomous robot game run: sequences, sensors, functions and planning, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'FIRST LEGO League coding help',
  navLinks: [
    { href: '#season', label: 'BIOGLOW' },
    { href: '#after', label: 'After 2027' },
    { href: '#rules', label: 'Coding rules' },
    { href: '#tokens', label: 'Tokens' },
    { href: '#bestof', label: 'Top of three' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 9 to 14 in Challenge &middot; The final season, 2026 to 2027',
  h1: 'FIRST LEGO League coding help for US teams',
  lede: 'Every point a FIRST LEGO League Challenge robot scores comes from code the children on the team wrote and launched by hand from home. This guide reads the 2026 to 2027 BIOGLOW Robot Game Rulebook and FIRST&rsquo;s season pages for what they say about programming, then teaches the planning idea most teams miss: since only your highest of three matches counts, the steadiest run plan is not always the right one. It also explains what changes after this season, because BIOGLOW is the last FIRST LEGO League season of all.',
  secondaryCta: { href: '#bestof', label: 'See the top-of-three lesson' },
  wa: 'Hello Modern Age Coders, my child is on a FIRST LEGO League team in the US and wants help with coding the robot. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; the team&rsquo;s code stays the team&rsquo;s',
  spec: [
    ['Season', 'BIOGLOW, 2026 to 2027'],
    ['Status', 'The final FLL season'],
    ['Match', '2.5 minutes, autonomous'],
    ['Official matches', 'Three, top score counts'],
    ['Motors', 'Four at most per match'],
    ['US ages', '9 to 14 in Challenge'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'FIRST LEGO League coding help means learning to program the LEGO robot a team launches in the robot game. In the 2026 to 2027 BIOGLOW season, the final FIRST LEGO League season, a Challenge match lasts 2.5 minutes, the robot runs autonomously on the team&rsquo;s own code, and only the highest of three matches counts. Modern Age Coders teaches that coding live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for FIRST LEGO League coders',
    lede: 'Blocks first, Python next, and the planning habits a robot game run depends on.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'FLLC / 01', title: 'Coding for kids: blocks', note: 'Ages about 9 to 12. Order, loops, events and conditions.' },
      { course: 'python-ai-kids-masterclass', code: 'FLLC / 02', title: 'Python for kids', note: 'For team members ready to type their robot code.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'FLLC / 03', title: 'Problem solving', note: 'Splitting a mission into steps that can be tested.' }
    ]
  },

  sections: [
    {
      id: 'season', tint: 'tint', eyebrow: 'The 2026 to 2027 season',
      h2: 'What is the 2026 to 2027 FIRST LEGO League season?',
      lede: 'The 2026 to 2027 season is BIOGLOW, a biodiversity challenge released on August 4, 2026 as part of the FIRST CANOPY season. FIRST says it will be the final season of FIRST LEGO League, and it comes in two editions, Founders and Future, which use different LEGO Education hardware.',
      body: [
        { kind: 'table', caption: 'The BIOGLOW editions and divisions, as FIRST lists them (firstinspires.org, read 31 October 2026)', head: ['Option', 'Grades', 'Hardware', 'What the team does'], rows: [
          ['Founders Edition: Explore', 'Grades 2 to 4 (ages 6 to 10)', 'LEGO Education SPIKE Essential', 'Design, code and discover solutions; no competitive robot game'],
          ['Founders Edition: Challenge', 'Grades 4 to 8 (ages 9 to 16, varies by country)', 'LEGO Education SPIKE Prime', 'Program a robot to complete missions autonomously in two-and-a-half minute matches'],
          ['Future Edition', 'Grades K to 2, and grades 3 to 8', 'LEGO Education Computer Science & AI kits', 'Build and code wireless hardware in an alliance-based game across the mat']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The four parts of Challenge',
          left: [
            'FIRST&rsquo;s BIOGLOW season overview gives Challenge four equally weighted parts: Core Values, Innovation Project, Robot Design and Robot Game. Coding sits inside two of them. The robot game is the code running; robot design is where judges ask how the team built and programmed it.',
            'The same overview describes the BIOGLOW robot game as 15 biodiversity-inspired missions, and Challenge teams as groups of up to 10 children.'
          ],
          rightH3: 'Who can join in the US',
          right: [
            'The Challenge participation rules linked from the 2026 to 2027 materials say US and Canada participants must not be younger than 9 or older than 14, and a competitive team has two to ten children.',
            'FIRST&rsquo;s June 17, 2026 registration post says US and Canada teams sign up through a refreshed FIRST Dashboard, and a group with both kinds of LEGO kit can register one team for each edition.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.firstinspires.org/programs/fll" rel="noopener" target="_blank">FIRST LEGO League program page</a>, the <a class="ag-inline-link" href="https://www.firstinspires.org/resources/library/fll/season-materials" rel="noopener" target="_blank">BIOGLOW season materials</a> (season overview and participation rules) and FIRST&rsquo;s community blog, read 31 October 2026. FIRST, FIRST LEGO League, BIOGLOW, LEGO and SPIKE are trademarks of their owners. We are not connected with FIRST or the LEGO Group.' }
      ]
    },
    {
      id: 'after', tint: 'deep', eyebrow: 'After this season',
      h2: 'What replaces FIRST LEGO League after 2026 to 2027?',
      lede: 'Two programs are announced for 2027 to 2028, one from each former partner. FIRST is building its own next generation of K to 8 programs, and LEGO Education is launching a program called LEGO League in August 2027. Neither has published its full game yet, so a US team choosing between them should read both announcements.',
      body: [
        { kind: 'table', caption: 'The two successor programs, from each organization&rsquo;s own page (read 31 October 2026)', head: ['Point', 'FIRST next-generation K to 8 programs', 'LEGO League (LEGO Education)'], rows: [
          ['First season', 'The 2027 to 2028 FIRST season', 'Launching August 2027, for the 2027 to 2028 season'],
          ['Ages or grades', 'Kindergarten through grade 8', 'Ages 5 to 16, in bands of 5 to 7 (grades K to 2) and 8 to 16 (grades 3 to 8)'],
          ['SPIKE kits', 'FIRST plans compatibility with SPIKE Prime and Essential through the 2028 to 2029 season', 'SPIKE and legacy hardware welcome in 2027 to 2028; from 2028 to 2029, Computer Science & AI kits required'],
          ['Coding', 'Not yet announced', 'Blocks in the LEGO Education Coding Canvas, or Python'],
          ['Names and details', 'New program names, game and hardware to be shared before 2027 to 2028', 'Registration expected between March and May of 2027'],
          ['Relationship', 'FIRST says its new programs are not sponsored, endorsed or affiliated with LEGO Education or the LEGO Group', 'LEGO Education says BIOGLOW is the final season of its collaboration with FIRST']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a family now',
          left: [
            'Nothing in the current season changes. FIRST says the 2026 to 2027 season goes ahead as planned, so a child on a Challenge team this year should simply enjoy the last BIOGLOW events and learn as much as they can.',
            'The coding a child learns this year carries into either successor. Both announcements describe team robotics with a themed game and a research project, and LEGO League names Python as its text option.'
          ],
          rightH3: 'One fact worth checking',
          right: [
            'FIRST&rsquo;s K to 8 FAQ says SPIKE products retire June 30, 2026, and points to LEGO Education for details. A team buying kits for next year should look at both successors&rsquo; hardware rules first.',
            'For a student in grade 7 or above, FIRST Tech Challenge continues for grades 7 to 12, so moving up is another route. Our <a class="ag-inline-link" href="/coding-competitions-for-middle-school-students">middle school coding competitions guide</a> compares other options.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.firstinspires.org/programs/k-8" rel="noopener" target="_blank">FIRST K-8 Programs: 2027 and Beyond</a> (FAQ updated August 27, 2026) and <a class="ag-inline-link" href="https://education.lego.com/en-us/lego-league/program-update/" rel="noopener" target="_blank">LEGO Education: Introducing LEGO League</a>, both read 31 October 2026. Details may change as both organizations publish more.' }
      ]
    },
    {
      id: 'rules', tint: 'tint', eyebrow: 'Coding rules',
      h2: 'What does the BIOGLOW rulebook say about programming the robot?',
      lede: 'The rulebook asks for a robot that operates autonomously once launched and follows programming written by the team. Teams may use any software or programming language, but no remote control of any kind, and electric parts are limited.',
      body: [
        { kind: 'table', caption: 'Rules a robot programmer needs, from the FIRST LEGO League Challenge BIOGLOW Robot Game Rulebook (read 31 October 2026)', head: ['Rule', 'What the rulebook says'], rows: [
          ['Match', 'A timed period of 2.5 minutes in which the robot autonomously completes as many missions as possible'],
          ['Official matches', 'Three, and only the team&rsquo;s best score counts toward awards and advancement'],
          ['Software', 'Any software or programming language'],
          ['Control', 'Autonomous outside home; no remote controllers of any type'],
          ['Electric parts', 'One controller, up to four motors in any mix, and only touch or force, color, distance or ultrasonic, and gyro sensors'],
          ['Program notes', 'One sheet of notebook paper per home area, not counted as equipment'],
          ['Launch', 'The robot and anything it is about to move must fit completely inside the launch area'],
          ['Inspection bonus', '20 points if all equipment fits in one launch area under 12 in. (305 mm)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Read the words exactly',
          left: [
            'The rulebook warns that "All robot game wording means precisely and only what it says." For a programmer that cuts both ways: a mission condition must be met exactly as written, and a detail the rulebook does not mention does not matter.',
            'Challenge updates outrank the rulebook. FIRST&rsquo;s October 14, 2026 updates allow a robot to release an interchangeable model from its dock with the built-in latch, so long as it does so autonomously, and say the leaves in one mission are randomized before every match.'
          ],
          rightH3: 'Why randomness changes the code',
          right: [
            'If a model&rsquo;s starting position is randomized, a program that drives to one fixed spot will sometimes miss. That is a nudge toward code that checks: drive until a sensor sees something, then act.',
            'The rulebook also lets teams calibrate sensors on any part of the mat during setup. A two-line calibration routine at the start of the first launch is cheap insurance against a strange gym light.'
          ] },
        { kind: 'source', html: 'Source: the <a class="ag-inline-link" href="https://www.firstinspires.org/resources/library/fll/season-materials" rel="noopener" target="_blank">FIRST LEGO League Challenge BIOGLOW Robot Game Rulebook and Challenge Updates</a> (updated October 14th, 2026). Short phrases only; read the full rulebook before your event.' }
      ]
    },
    {
      id: 'tokens', tint: 'deep', eyebrow: 'Precision tokens',
      h2: 'How do precision tokens affect a coding plan?',
      lede: 'A team starts each match with six precision tokens worth 50 points, and loses one each time technicians interrupt the robot outside home. The points fall unevenly as tokens go, so the first rescue costs nothing and the second costs the most.',
      body: [
        { kind: 'table', caption: 'Precision token points from the BIOGLOW rulebook, and the cost of each lost token (the cost column is our subtraction)', head: ['Tokens left', 'Points (rulebook)', 'Cost of losing the last one (ours)'], numCols: [0, 1, 2], rows: [
          ['6', '50', 'none, the starting value'],
          ['5', '50', '0'],
          ['4', '35', '15'],
          ['3', '25', '10'],
          ['2', '15', '10'],
          ['1', '10', '5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table tells a coder',
          left: [
            'One rescue per match is free. If the robot is about to wander into a mission model it will wreck, grabbing it outside home costs no points the first time, and that is worth knowing before the match.',
            'The second rescue is the expensive one. A program that needs saving twice a match is giving away 15 points, which is often more than a whole mission is worth. Fixing the run that fails is better than practicing the rescue.'
          ],
          rightH3: 'Code that comes home',
          right: [
            'The cheapest interruption is none: a run that ends with the robot back in home lets technicians handle it freely. So every run should end with a drive home, and the time for that drive belongs in the plan.',
            'We teach students to write the return trip first, test it until it never fails, and only then add the mission in the middle. A run that always comes home is a run that never costs a token.'
          ] }
      ]
    },
    {
      id: 'bestof', tint: 'tint', eyebrow: 'Top of three',
      h2: 'Should a team code for reliability or for a high score?',
      lede: 'It depends on the scoring rule, and in Challenge only the highest of three official matches counts. When the top attempt is what matters, a bolder plan that sometimes fails can beat a steady plan on average, even though it scores less in a typical single match.',
      body: [
        { kind: 'table', caption: 'Two made-up run plans (all mission points and success rates are ours, not BIOGLOW&rsquo;s), computed exactly in Python', head: ['Plan', 'Missions attempted', 'Expected score, one match', 'Expected highest of three'], numCols: [2, 3], rows: [
          ['A: steady', 'Five missions worth 20 each, each working 90 percent of the time', '90.0', '98.6'],
          ['B: bold', 'Three of those, plus one 60-point mission that works 45 percent of the time', '81.0', '107.0']
        ] },
        { kind: 'code', label: 'Our model of top-of-three scoring', lang: 'Python', code: BEST3, note: 'Our own teaching program, standard Python with no robot library. It lists every way a match can go, then works out the expected highest score across three matches.' },
        { kind: 'two', mt: true,
          leftH3: 'Why plan B can win',
          left: [
            'In a single match plan A is better, 90.0 points against 81.0. But a team gets three tries and keeps the highest. Plan B&rsquo;s big mission only has to come off once in three matches, and the chance of that is far higher than 45 percent.',
            'So under a top-of-three rule plan B&rsquo;s expected top score is 107.0 against plan A&rsquo;s 98.6. The rule of the game changed the right answer, and nothing about the robot did.'
          ],
          rightH3: 'When steady is still right',
          right: [
            'If the goal is simply to reach 100 points at least once, plan A does it in about 93 matches out of every 100 by our numbers, and plan B in about 82. A team chasing a target, not a maximum, should prefer steady.',
            'Real teams also face a time limit plan B ignores: the bold mission may take longer to reset. The model is a way to think, not an order. Each team fills in its own robot&rsquo;s numbers.'
          ] },
        { kind: 'p', mt: true, html: '<b>Worked example (ours).</b> Suppose your robot&rsquo;s riskiest mission works 4 times in 10 practice runs. The chance it fails in all three official matches is 0.6 times 0.6 times 0.6, which is 0.216. So it succeeds in at least one match about 78 percent of the time. A mission that looks unreliable in one run is quite likely to land once in three, which is why top-of-three rewards keeping it in the plan.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Practice problems for robot game planning',
      lede: 'Four original problems, written by us, at the level of a grade 5 to 8 Challenge team member. They use invented missions, not BIOGLOW&rsquo;s, and each answer shows its reasoning.',
      body: [
        { kind: 'ol', items: [
          '<b>Tokens.</b> A team interrupts its robot outside home three times in one match. How many token points does it keep? <i>Answer:</i> six minus three leaves three tokens, which the rulebook values at 25 points, so the three rescues cost 25 of the starting 50.',
          '<b>Inspection.</b> A team&rsquo;s robot plus attachments fit in one launch area and stand 290 mm tall. Do they earn the inspection bonus? <i>Answer:</i> yes, because 290 mm is under the 305 mm limit and everything fits in one launch area, so 20 points.',
          '<b>Once in three.</b> A mission works half the time. What is the chance it works in at least one of three matches? <i>Answer:</i> the chance of three failures is 0.5 cubed, or 0.125, so at least one success is 0.875, or 87.5 percent.',
          '<b>Motors.</b> A team wants two drive motors, one arm motor and one motor for a spinning attachment, plus a spare arm swapped in between runs. Is that legal? <i>Answer:</i> the rulebook allows four motors in any one match, so four is the limit; a spare arm motor would make five and is not allowed in that match.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we use problems like these',
          left: [
            'In class a student first guesses the answer, then works it out, then explains the gap. The guess-then-check habit is what makes a programmer suspicious of their own code in a useful way.',
            'The arithmetic is light on purpose. The real skill is translating a rule written in words into a number a team can act on.'
          ],
          rightH3: 'What we never do',
          right: [
            'We do not solve the team&rsquo;s BIOGLOW missions, write its robot code, or tell it which missions to choose. The participation rules say all work presented at events is the work of the children on the team, and we follow that.',
            'We teach ideas on our own invented missions, and students bring the ideas back to their team.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Season plan',
      h2: 'An eight-week coding plan for a Challenge team member',
      lede: 'Our plan for a student who meets their team each week and adds one live lesson with us. It assumes the team already has a working robot and has started on missions.',
      body: [
        { kind: 'table', caption: 'Eight weeks from first program to tournament day (our plan)', head: ['Week', 'Lesson with us', 'Try with the team'], rows: [
          ['1', 'Sequences and units: degrees, rotations, seconds', 'Drive out and back to home five times'],
          ['2', 'Wait-until and sensors', 'Stop on a color line instead of a distance'],
          ['3', 'My Blocks and functions', 'Turn the return trip into one reusable block'],
          ['4', 'Conditions and calibration', 'A start-of-match light reading'],
          ['5', 'Counting reliability', 'Ten tries per run, success written down'],
          ['6', 'Tokens and rescues', 'Which run needs saving, and why'],
          ['7', 'Top of three planning', 'Fill in the planning model with real numbers'],
          ['8', 'Explaining code to judges', 'Talk through one program in two minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Blocks or Python?',
          left: [
            'The rulebook lets teams use any software or language, so the choice is the team&rsquo;s. Most younger members start with blocks, which make order and logic visible and remove typing mistakes.',
            'Older members often move to Python, and LEGO League names Python as its text option from 2027. We teach blocks first and then Python, so a child is ready for either.'
          ],
          rightH3: 'Robot design judging',
          right: [
            'Judges in robot design want to hear how the team decided, tested and improved. A child who can show reliability counts and say why a run changed has something real to tell them.',
            'We help students learn to explain their own reasoning clearly. The engineering notebook, the code and the answers remain the team&rsquo;s own.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps to becoming the team&rsquo;s programmer',
    lede: 'Being able to build a robot and being able to program a reliable run are different skills. These are the steps between them, as we see them in class.',
    table: { caption: 'From builder to robot game programmer (our steps)', head: ['Step', 'What it looks like'], rows: [
      ['1. Order', 'Writes moves in the right order and runs them without help'],
      ['2. Senses', 'Uses a sensor to decide when to stop or turn'],
      ['3. Reuses', 'Builds functions or My Blocks so one fix changes every run'],
      ['4. Weighs', 'Chooses missions with reliability counts and the top-of-three rule in mind']
    ] },
    left: { h3: 'For parents and coaches', ps: [
      'Ask your child how often their run works out of ten. A child who knows the number is already thinking like an engineer; one who says "usually" has their next lesson.',
      'Under the participation rules, adults who over-instruct or prompt at events can be asked to leave. Coaching ideas at home is fine; the decisions at the table are the children&rsquo;s.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the drive home first. A run that always returns saves tokens and calms the technicians.',
      'Save a copy of the program before each change, and name it with the date. Going back to the last good version is faster than guessing.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for robot game coders and beyond',
    lede: 'All taught live online, one teacher throughout, in a group or individually.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages about 8 to 11', courses: [
        { code: 'FLLC / ST / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, games, first logic.' },
        { code: 'FLLC / ST / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Events and loops in depth.' },
        { code: 'FLLC / ST / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Big tasks into small ones.' }
      ] },
      { num: 'II', h3: 'Typing code', sub: 'Ages about 10 to 14', courses: [
        { code: 'FLLC / TY / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The step after blocks.' },
        { code: 'FLLC / TY / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Chance and angles in code.' },
        { code: 'FLLC / TY / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A compiled language, gently.' }
      ] },
      { num: 'III', h3: 'Beyond the table', sub: 'Making and inventing', courses: [
        { code: 'FLLC / MK / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Logic with instant feedback.' },
        { code: 'FLLC / MK / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How smart kits really work.' },
        { code: 'FLLC / MK / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep', blurb: 'Plan and pitch a project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Coding lessons that sit between team meetings',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, on a night without practice.' },
      { time: 'Weekends', l: 'A morning lesson before a scrimmage.' },
      { time: '1-on-1', l: 'Shaped around one child&rsquo;s role on the team.' }
    ],
    cells: [
      { h3: 'Invented missions', p: 'We teach on our tasks, never on BIOGLOW&rsquo;s.' },
      { h3: 'Counts, not hopes', p: 'Every run is measured out of ten.' },
      { h3: 'Blocks then Python', p: 'Ready for whichever program comes next.' },
      { h3: 'Rules read aloud', p: 'Students learn to turn rule text into numbers.' },
      { h3: 'All fifty states', p: 'Live online, any US time zone.' },
      { h3: 'Group size', p: 'Fifteen to twenty per batch, or one child.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Games, apps and AI projects our learners have built. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Registration, kits and event fees belong to FIRST and your local event; we charge only for coding lessons. Billing is monthly, so a child can study through the tournament season and stop when it ends.',
    free: ['A free first lesson', 'A short sequencing and logic task', 'No card details asked'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['A private coding teacher', 'Timed around your tournaments', 'Blocks or Python, your choice']
  },

  faq: {
    eyebrow: 'Questions from US families and coaches',
    h2: 'FIRST LEGO League coding: what people ask',
    items: [
      { q: 'Is 2026-2027 the last season of FIRST LEGO League?', a: 'Yes. FIRST says the 2026 to 2027 BIOGLOW season will be the final season of FIRST LEGO League, and LEGO Education says FIRST LEGO League comes to an end after BIOGLOW. The current season goes ahead as planned.' },
      { q: 'What will replace FIRST LEGO League in 2027?', a: 'Two programs have been announced. FIRST is launching its own next generation of K to 8 programs for the 2027 to 2028 season, and LEGO Education is launching LEGO League in August 2027 for ages 5 to 16. Program details are still being published by both.' },
      { q: 'What programming language can an FLL Challenge robot use?', a: 'Any. The BIOGLOW Robot Game Rulebook says teams can use any software or programming language, as long as the robot is autonomous outside home and no remote controller is used. Many teams use blocks, and some use Python.' },
      { q: 'How long is a FIRST LEGO League robot game match?', a: 'Two and a half minutes. The rulebook defines a match as 2.5 minutes in which the robot autonomously completes as many missions as possible. Teams play three official matches and only the highest score counts.' },
      { q: 'How many motors and sensors can an FLL robot have?', a: 'The BIOGLOW rulebook allows one controller and up to four motors in any one match. Sensors may be touch or force, color, distance or ultrasonic, and gyro, in any mix and number.' },
      { q: 'What are precision tokens in FLL?', a: 'Each team starts a match with six precision tokens worth 50 points and loses one each time it interrupts the robot outside home. Five tokens are still worth 50, four are worth 35 and three are worth 25, so the first rescue costs nothing and the second costs 15 points.' },
      { q: 'What ages can join FIRST LEGO League Challenge in the US?', a: 'The participation rules linked from the 2026 to 2027 materials say US and Canada participants must be between 9 and 14, on a team of two to ten children. FIRST lists Challenge for grades 4 to 8.' },
      { q: 'Can a tutor or parent write our team\'s robot code?', a: 'No. The participation rules say all work presented at events is the work of the children on the team. We teach programming ideas on our own invented missions, and the children write their team\'s code.' },
      { q: 'Can we still use SPIKE Prime after FLL ends?', a: 'For a while. FIRST plans to keep SPIKE Prime and Essential compatible with its new K to 8 programs through the 2028 to 2029 season, and LEGO League accepts SPIKE in 2027 to 2028 but requires Computer Science & AI kits from 2028 to 2029.' },
      { q: 'When are your coding lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of FIRST or LEGO Education?', a: 'No. Modern Age Coders is an independent coding school with no tie to FIRST, LEGO Education or the LEGO Group. FIRST LEGO League is a jointly held trademark of FIRST and the LEGO Group.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young builders in the US',
    lede: 'Other robots, other contests, and the next step in code.',
    items: [
      { href: '/vex-iq-programming-help', label: 'VEX IQ programming help', p: 'Solo coding runs for VEX IQ and RECF Engage robots.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Contest dates in coding, math and AI for this school year.' },
      { href: '/coding-competitions-for-middle-school-students', label: 'Middle school coding contests', p: 'Where a 13 or 14 year old robot coder can go next.' },
      { href: '/coding-classes-for-elementary-students', label: 'Elementary coding classes', p: 'For the Explore and K to 2 age groups.' },
      { href: '/first-lego-league-uk-coding-help', label: 'FIRST LEGO League in the UK', p: 'How the same final season runs for UK teams.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'Useful background for AI-enabled robot kits.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s grade, which edition their team is in and whether they code in blocks or Python. The teacher sets a short task on an invented mission and suggests a starting point.',
    readFirst: 'Curious how lessons feel? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Teachers work from India and teach live on video at US after-school and weekend hours. Most US families find WhatsApp the quickest way to reach us.',
    formNote: 'The first lesson is free, and you will not be asked for a card.'
  },

  footer: {
    cols: [
      { h4: 'Robotics and contests', links: [
        { href: '/vex-iq-programming-help', label: 'VEX IQ programming' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-competitions-for-middle-school-students', label: 'Middle school contests' },
        { href: '/acsl-competition-preparation', label: 'ACSL preparation' }
      ] },
      { h4: 'Coding by grade', links: [
        { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
        { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
        { href: '/coding-milestones-by-age', label: 'Coding milestones by age' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Only the top score of three counts'
  },

  personalityCss: `
.ag-root.ag-fllc .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-fllc .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-fllc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-fllc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-fllc .ag-steps li { line-height: 1.7; }
.ag-root.ag-fllc .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 31 October 2026: firstinspires.org FIRST LEGO League page (BIOGLOW final season, released August 4 2026, Founders and Future Editions, divisions and ages), K-8 Programs 2027 and Beyond FAQ (updated August 27 2026: new FIRST K-8 programs for 2027-2028, SPIKE compatibility through 2028-2029, SPIKE retirement June 30 2026, non-affiliation with LEGO), FIRST community blog on registration (June 17 2026), the BIOGLOW season overview, Robot Game Rulebook, Challenge Updates (October 14 2026) and participation rules PDFs; LEGO Education LEGO League program update page (launch August 2027, ages and bands, hardware by season, coding platform, registration March to May 2027).',
    localProject: 'Our token-cost column (0, 15, 10, 10, 5 points per lost token, from the official table), the top-of-three model in Python (plan A 90.0 one match and 98.6 highest of three; plan B 81.0 and 107.0; chance of reaching 100 at least once about 93 and 82 in 100), a 4-in-10 mission landing at least once in three matches about 78 percent of the time, four practice problems, an eight-week plan. Lesson family: expected maximum of repeated attempts.',
    requiredMentions: ['will be the final season of FIRST LEGO League', 'Launching August 2027, for the 2027 to 2028 season', 'FIRST plans compatibility with SPIKE Prime and Essential through the 2028 to 2029 season', 'Registration expected between March and May of 2027', 'Any software or programming language', 'One controller, up to four motors in any mix', '20 points if all equipment fits in one launch area under 12 in. (305 mm)', 'about 78 percent of the time', 'Two and a half minutes. The rulebook defines a match as 2.5 minutes', 'Only the top score of three counts', 'US and Canada participants must not be younger than 9 or older than 14'],
    sources: [
      { claim: 'FIRST LEGO League program page: BIOGLOW, final season, editions, divisions and ages.', url: 'https://www.firstinspires.org/programs/fll' },
      { claim: 'FIRST K-8 Programs: 2027 and Beyond FAQ: next-generation programs, SPIKE compatibility, non-affiliation with LEGO.', url: 'https://www.firstinspires.org/programs/k-8' },
      { claim: 'BIOGLOW Robot Game Rulebook, Challenge Updates, season overview and participation rules (PDFs in the season materials library).', url: 'https://www.firstinspires.org/resources/library/fll/season-materials' },
      { claim: 'LEGO Education: Introducing LEGO League, launching August 2027.', url: 'https://education.lego.com/en-us/lego-league/program-update/' },
      { claim: 'FIRST community blog: key changes to FIRST LEGO League registration (June 17, 2026).', url: 'https://community.firstinspires.org/key-changes-to-first-lego-league-registration-whats-new' }
    ],
    rejectedClaims: [
      'BIOGLOW mission names, point values and setup: not reproduced; the page uses invented missions for teaching and links the rulebook.',
      'SPIKE App block names and Python API calls: not printed, as no LEGO Education programming reference was read; the page code is plain Python with no robot library.',
      'Registration and event fees: FIRST publishes them; not printed (no typed currency).',
      'The participation rules PDF is marked updated September 2024; its US age range is printed as the rule linked from the 2026 to 2027 library, attributed to that document.',
      'Names, games or hardware of the FIRST next-generation K-8 programs: not yet announced; not guessed.',
      'Any claim that our students win awards or advance: none made.',
      'Any affiliation with FIRST, LEGO Education or the LEGO Group: none, stated on the page.'
    ]
  }
};
