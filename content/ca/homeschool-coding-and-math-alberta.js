'use strict';
// Homeschool coding and math in Alberta (ag- market door; Canada cluster row 77).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Searches: homeschooling alberta curriculum / homeschooling alberta high school.
// Spine: Alberta's two kinds of home education program, and what the Home Education Regulation asks of every parent:
// regular evaluation with methods and dates recorded, dated samples of work, and (if not following the Programs of
// Study) the Schedule of learning outcomes. A four-week cycle that produces dated samples answers it.
// No legal or funding advice: funding lines are quoted only, families are told to ask their associate board and to check
// the official source. We never say or imply our classes are reimbursable.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/homeschool-coding-and-math-alberta/):
//  - alberta.ca/home-education (home-education.html, .txt): "Home education is a parent-directed approach to educating a
//    student in Grades 1 to 12 at home or elsewhere in which they are responsible for making all education decisions.";
//    "A parent or guardian may choose 1 of 2 home education programs"; "Supervised by school authority (funded)" and
//    "Not supervised by school authority (notification only, non-funded)"; "Each year, parents have the responsibility to
//    notify their supervising school authority of their intent to home educate their child"; "should consider looking
//    for a supervising school authority in the spring before the upcoming school year"; associate board "must also
//    arrange for certificated teachers ... to conduct at least two formal evaluations of each student each school year",
//    including "a review of the student portfolio"; non-supervised: "Each year, parents have the responsibility to notify
//    the Minister of Education of their intent to home educate their child."; "are not required to submit this program
//    plan to the Minister of Education."; "Students are not eligible for funding if a home education program is accepted
//    after September 29."; "Parents choosing to home educate their children without the supervision of a school
//    authority are not eligible to receive any Alberta Education funding." Form names on the page contain en dashes and
//    are not reproduced.
//  - Home Education Regulation, Alberta Regulation 89/2019 (home-ed-reg.pdf, pdftotext home-ed-reg.txt), "Current as of
//    September 1, 2025": s.3(2) "A home education program must enable a student to achieve applicable outcomes."; s.3(4)
//    "A home education program may follow the Alberta Programs of Study."; s.4(1)(a) "must conduct an evaluation of the
//    progress of the student at regular intervals and maintain a record of the methods and dates of those evaluations";
//    s.4(1)(b) "must maintain dated samples of student work and a general record of the student's activities"; s.4(2)(a)
//    a supervising associate board or school "must ensure that a student is given the opportunity to write" the
//    "applicable provincial assessments"; s.6 "On the recommendation of a school principal, a student receiving a home
//    education program that follows the Alberta Programs of Study is eligible to receive high school credits if the
//    student achieves the course standards and learning outcomes set out in the Alberta Programs of Study."; Schedule
//    (for programs not following the Programs of Study) item 1 "a solid core program including language arts,
//    mathematics, science and social studies", (c) "use mathematics to solve problems in business, science and daily life
//    situations", (n) "demonstrate critical and creative thinking skills in problem solving and decision making", (o)
//    "demonstrate competence in using information technologies".
//  - facts-schools-contests.md, used as they stand: PATs "administered annually to all Alberta students in grades 6 and
//    9"; diploma exams "70% of the final mark comes from course work. The remaining 30% comes from the diploma exam.";
//    math diploma courses Mathematics 30-1 and 30-2 (en dash in the source, written with a hyphen here); draft Grades 7
//    to 9 curriculum integrates "artificial intelligence, computer science", mandatory "in September 2027"; CEMC
//    "Contests may not be taken remotely or without supervision." and "Participants may only write the contest at the
//    school which ordered the contest." (src/cemc/how-contests-work.txt).
//  - facts-geo.md section 1 and 3: Official Time Act RSA 2000 c O-5.7, s.1, "official time" means "the time 6 hours
//    behind Coordinated Universal Time"; Ontario UTC-5 winter, UTC-4 from 14 March 2027.
// Our own material, labelled on the page: the four-week cycle, the Schedule mapping, the Garden Bed Planner (Python, run
// under CPython on 22 October 2026: 240 x 120 cm bed, square 32 plants, staggered 30; 225 x 160 cm bed, square 35,
// staggered 42), the portfolio list and the clock arithmetic (10:00 a.m. in Calgary is 12:00 noon in Toronto in winter
// and 1:00 p.m. in summer 2027).
// Lesson family: compare two methods before choosing one (and date the evidence).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BED = `# Our Garden Bed Planner: square rows or staggered rows? (Grades 8 to 10 math with code)
import math

def count(length, width, spacing, margin, staggered):
    usable_l = length - 2 * margin          # plants stay margin cm from every edge
    usable_w = width - 2 * margin
    gap = spacing * math.sqrt(3) / 2 if staggered else spacing   # distance between rows
    rows = math.floor(usable_w / gap) + 1
    plan = []
    for r in range(rows):
        shift = spacing / 2 if (staggered and r % 2 == 1) else 0
        per_row = math.floor((usable_l - shift) / spacing) + 1
        plan.append(per_row)
    return plan

for length, width in [(240, 120), (225, 160)]:
    square = count(length, width, 30, 15, staggered=False)
    stagger = count(length, width, 30, 15, staggered=True)
    print(f"Bed {length} x {width} cm: square {sum(square)} plants {square}, "
          f"staggered {sum(stagger)} plants {stagger}")`;

const BED_OUT = `Bed 240 x 120 cm: square 32 plants [8, 8, 8, 8], staggered 30 plants [8, 7, 8, 7]
Bed 225 x 160 cm: square 35 plants [7, 7, 7, 7, 7], staggered 42 plants [7, 7, 7, 7, 7, 7]`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'HOMESCHOOL AB', blurb: 'Home education in Alberta for coding and math: the two program types, what the Home Education Regulation asks, PATs, high school credits, and a four-week plan.' },
  slug: 'homeschool-coding-and-math-alberta',
  code: 'hma',
  accent: '#325C1E',
  accentRationale: 'Homeschool coding and math, Alberta: a muted prairie green #325C1E, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 7.38 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  courseCodePage: true,
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Homeschool coding and math, Alberta',
  title: 'Homeschool Coding and Math in Alberta: Home Education Guide',
  description: 'Home education in Alberta for coding and math: supervised or notification-only programs, what the regulation asks, PATs, high school credits, and a four-week plan.',
  ogDescription: 'Alberta home education, read from alberta.ca and the Home Education Regulation, for families teaching coding and math: the two program types, dated work samples, PATs, high school credit rules and a project.',
  twitterDescription: 'Homeschool coding and math in Alberta, from the Home Education Regulation, with a four-week plan and a Python project.',
  pageName: 'Homeschool Coding and Math in Alberta',
  webPageDescription: 'A guide for Alberta families who home educate, quoting alberta.ca and the Home Education Regulation (AR 89/2019) on program types, evaluation, dated work samples, provincial assessments and high school credits, with a sample coding and math plan.',
  courseDescription: 'Live online coding and math classes for home-educated children and teens in Alberta, in a batch or one to one, as part of the family\'s own program.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Homeschool coding and math, Alberta',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#types', label: 'Two program types' },
    { href: '#regulation', label: 'The regulation' },
    { href: '#cycle', label: 'Four-week plan' },
    { href: '#project', label: 'A project' },
    { href: '#high', label: 'High school' }
  ],
  eyebrow: 'Alberta &middot; Home education &middot; Coding and math',
  h1: 'Homeschool coding and math in Alberta',
  lede: 'Alberta calls it home education, and it is set out in two places a family can read in an evening: the province\'s home education page on alberta.ca and the Home Education Regulation, Alberta Regulation 89/2019. This page quotes both on the points that shape a coding and math program: the choice between a supervised and a notification-only program, what every parent must record, how provincial tests and high school credits work, and then a four-week plan and a project from our classes. Our classes cover coding and math as one part of a family\'s program; we do not grant provincial high school credits, and this is not legal or funding advice, so read the official pages and talk to your school authority.',
  secondaryCta: { href: '#cycle', label: 'See the four-week plan' },
  wa: 'Hello Modern Age Coders, we home educate in Alberta and would like coding and math classes. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['Province', 'Alberta'],
    ['Rules', 'Home Education Regulation, AR 89/2019'],
    ['Program types', 'Supervised, or notification only'],
    ['Records', 'Dated samples of student work'],
    ['Subjects here', 'Coding and math'],
    ['Clock', 'UTC-6 all year'],
    ['Credits', 'We do not grant provincial credits'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'In Alberta, home education is parent-directed and comes in two forms: a program supervised by a school authority, or a notification-only program reported to the Minister. Either way, the Home Education Regulation asks parents to evaluate progress regularly and keep dated samples of work. Modern Age Coders teaches coding and math to home-educated students live online, in a batch or one to one, in courses such as Python for Teens.',

  picks: {
    eyebrow: 'Courses Alberta families use',
    h2: 'Three courses for home education in Alberta',
    lede: 'A middle-years math course, a full Python course for teens, and a Grade 12 course that follows the western Canadian math sequence.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'HMA / 01', title: 'Middle School Math', note: 'Ratio, integers, equations and geometry for the junior high years, with dated problem sets each month for the portfolio.' },
      { course: 'python-complete-masterclass-teens', code: 'HMA / 02', title: 'Python for Teens', note: 'Ages 13 to 18. From a first program to files, functions and projects, in a language suited to math and science work.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'HMA / 03', title: 'Grade 12 Math: Pre-calculus 12 and Math 30-1', note: 'The Math 30-1 topics taught live for teens heading towards university math or science. It carries no Alberta credit.' }
    ]
  },

  sections: [
    {
      id: 'types', tint: 'tint', eyebrow: 'What alberta.ca says',
      h2: 'Alberta home education: the two kinds of program',
      lede: 'The province\'s home education page, read on 22 October 2026, opens with a definition: "Home education is a parent-directed approach to educating a student in Grades 1 to 12 at home or elsewhere in which they are responsible for making all education decisions." It then says "A parent or guardian may choose 1 of 2 home education programs".',
      body: [
        { kind: 'table', caption: 'Alberta\'s two home education programs, quoted from alberta.ca/home-education (read 22 October 2026)', head: ['', 'Supervised by school authority (funded)', 'Not supervised by school authority (notification only, non-funded)'], rows: [
          ['Who you notify', '"Each year, parents have the responsibility to notify their supervising school authority of their intent to home educate their child"', '"Each year, parents have the responsibility to notify the Minister of Education of their intent to home educate their child."'],
          ['The program plan', 'Parents "must develop a home education program that enables the student to achieve appropriate learning outcomes."', 'Parents must develop such a program "but are not required to submit this program plan to the Minister of Education."'],
          ['Teacher evaluations', 'The associate board or school must arrange for certificated teachers "to conduct at least two formal evaluations of each student each school year", including "a review of the student portfolio".', 'No school authority evaluation is described for this type.'],
          ['Funding, as the page states it', '"Students are not eligible for funding if a home education program is accepted after September 29."', '"Parents choosing to home educate their children without the supervision of a school authority are not eligible to receive any Alberta Education funding."'],
          ['Timing advice on the page', 'A parent "should consider looking for a supervising school authority in the spring before the upcoming school year."', 'The page gives a notification form and an online option.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we say about funding',
          left: [
            'Nothing beyond what the province publishes. Questions about funding, what it can be spent on and whether any cost qualifies belong with your associate board or school and with Alberta Education. We do not advise on them.',
            'Families should read the funding section of the alberta.ca page and the Standards for Home Education Reimbursement it links to before making any plan that depends on funding.'
          ],
          rightH3: 'What this page is not',
          right: [
            'It is a reader\'s guide to two official sources, not legal or funding advice. The Education Act and the regulation are the law; your school authority applies them; check both.',
            'Modern Age Coders is not connected with Alberta Education or any school authority. We teach coding and math classes; we do not supervise, notify or evaluate home education programs.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.alberta.ca/home-education" rel="noopener" target="_blank">Alberta, Home education</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'regulation', tint: 'deep', eyebrow: 'The regulation',
      h2: 'What the Home Education Regulation asks of every parent',
      lede: 'Alberta Regulation 89/2019, in the King\'s Printer edition current as of September 1, 2025, applies to both kinds of program. A few of its sections decide how a coding and math program should be recorded.',
      body: [
        { kind: 'table', caption: 'Home Education Regulation, AR 89/2019, quoted from the King\'s Printer PDF (read 22 October 2026)', head: ['Section', 'What it says', 'What it means for coding and math (ours)'], rows: [
          ['3(2)', '"A home education program must enable a student to achieve applicable outcomes."', 'Pick outcomes first, then classes and projects that reach them.'],
          ['3(4)', '"A home education program may follow the Alberta Programs of Study."', 'Following the provincial math program is a choice, not a requirement.'],
          ['4(1)(a)', 'A parent "must conduct an evaluation of the progress of the student at regular intervals and maintain a record of the methods and dates of those evaluations".', 'A monthly check, written down with its date and how it was done.'],
          ['4(1)(b)', 'A parent "must maintain dated samples of student work and a general record of the student\'s activities".', 'Date every problem set and save every finished program.'],
          ['6', 'A student whose program "follows the Alberta Programs of Study is eligible to receive high school credits" on "the recommendation of a school principal", if the student meets the course standards and learning outcomes.', 'Credits come through a school principal, never through a tutoring provider.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If you do not follow the Programs of Study',
          left: [
            'The regulation\'s Schedule sets learning outcomes for programs that do not follow the provincial program. It opens with "a solid core program including language arts, mathematics, science and social studies".',
            'Three of its items fit coding and math directly: students should "use mathematics to solve problems in business, science and daily life situations", "demonstrate critical and creative thinking skills in problem solving and decision making", and "demonstrate competence in using information technologies".'
          ],
          rightH3: 'If you do follow them',
          right: [
            'Alberta has been renewing its curriculum. The province lists a new K to 6 mathematics curriculum as implemented under 2022/2023, and says its draft Grades 7 to 9 curriculum integrates "artificial intelligence, computer science" and other topics ahead of mandatory implementation in September 2027.',
            'Families who follow the provincial program should check which version applies to their child\'s grade each year, because the junior high change lands in September 2027.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://kings-printer.alberta.ca/documents/Regs/2019_089.pdf" rel="noopener" target="_blank">Home Education Regulation, AR 89/2019 (King\'s Printer)</a> and <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-how-we-got-here" rel="noopener" target="_blank">Alberta, curriculum: how we got here</a>, read 22 October 2026. Families must check the current official text.' }
      ]
    },
    {
      id: 'cycle', tint: 'tint', eyebrow: 'A four-week plan',
      h2: 'A four-week coding and math cycle that produces dated samples',
      lede: 'Because section 4 asks for regular evaluation and dated samples, we plan home-education coding and math in four-week cycles, each ending with a recorded check. This is our own plan for a student in about Grade 8 or 9, with two of our live classes a week.',
      body: [
        { kind: 'table', caption: 'One four-week cycle (our sample plan)', head: ['Week', 'Math focus', 'Coding focus', 'Dated sample to keep'], rows: [
          ['Week 1', 'A new idea, for example linear relations, built from tables and graphs', 'Write a short program that prints a table of values', 'The first worked page and the program file'],
          ['Week 2', 'Practice in mixed problems, including one from daily life', 'Change the program to test a second rule and compare', 'A practice set, self-checked, dated'],
          ['Week 3', 'An applied project that needs the idea, such as the Garden Bed Planner below', 'Build the project program in class, then extend it at home', 'The project plan, code and output'],
          ['Week 4', 'Review and a short written check, about forty minutes', 'Explain the project code to a parent, line by line', 'The check, marked, with the method and date recorded']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Evaluation, recorded', p: 'Week 4 gives the "methods and dates" record that section 4(1)(a) mentions, in one line per cycle.' },
          { h3: 'Samples, dated', p: 'Every week leaves at least one dated item, which builds the portfolio that supervised programs review.' },
          { h3: 'About ten cycles a year', p: 'Ten four-week cycles fit a school year with room for breaks and a summer pause.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A project from our classes',
      h2: 'Project: the Garden Bed Planner, square rows or staggered rows',
      lede: 'We wrote this project for home-educated students in Grades 8 to 10. It answers a real gardening question with geometry and a short Python program, and the answer turns out to be "it depends", which is the point. It also speaks to the Schedule\'s "daily life situations" item and to using information technology.',
      body: [
        { kind: 'p', html: '<b>The question.</b> Seedlings must be 30 cm apart and at least 15 cm from the edge of a raised bed. Is it better to plant in square rows, or in staggered rows where every second row shifts half a space along? In staggered rows the rows can sit closer together, 30 times the square root of 3 divided by 2, about 26 cm, because each plant sits in the gap between two plants of the next row and stays 30 cm from both.' },
        { kind: 'code', label: 'bed.py &middot; our program', lang: 'python', code: BED, note: 'We ran it under Python 3 on 22 October 2026. math.floor counts whole spaces; the plus 1 counts the first plant at the start of a row.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: BED_OUT },
        { kind: 'ol', mt: true, items: [
          '<b>Predict first.</b> Most students guess that staggered rows always win, because the rows are closer together.',
          '<b>Read the first result.</b> In a 240 by 120 cm bed, square rows hold 32 plants and staggered rows only 30. The usable width, 90 cm, fits four rows either way, and the shifted rows lose one plant each.',
          '<b>Read the second result.</b> In a 225 by 160 cm bed, staggered rows hold 42 against 35. The usable width, 130 cm, now fits a sixth staggered row but only five square rows.',
          '<b>Explain why.</b> Staggering helps only when the spare width is enough for an extra row. The student writes this as a sentence, then tests it on a bed of their own measurements.',
          '<b>Check by hand.</b> Draw one bed to scale on squared paper and count. The drawing and the program must agree, or one of them is wrong.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The math inside it',
          left: [
            'Measurement and margins, division with remainders, an equilateral-triangle height with a square root, and comparing two methods with evidence. That spans junior high geometry and early high school.',
            'Students who are not ready for square roots can run the program and focus on the comparison; older students derive the 26 cm figure themselves.'
          ],
          rightH3: 'For the portfolio',
          right: [
            'The prediction, the scale drawing, the program, its output and a short conclusion, each dated. One project, a week 3 sample and a week 4 check in a single folder.',
            'This is the lesson family behind the Alberta page: compare two methods with evidence before choosing one, and date what you find.'
          ] }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'Tests and contests',
      h2: 'PATs and Waterloo contests for home-educated students',
      lede: 'Alberta\'s provincial tests and the University of Waterloo\'s contests both involve a school. The regulation and CEMC\'s own standards say how.',
      body: [
        { kind: 'table', caption: 'Provincial assessments and CEMC contests for home-educated students (official wording read 22 October 2026; the last column is ours)', head: ['What', 'What the official source says', 'Our suggestion'], rows: [
          ['Provincial Achievement Tests', 'Alberta: PATs "are administered annually to all Alberta students in grades 6 and 9."', 'Ask your school authority how this applies to your child\'s program.'],
          ['Supervised programs and PATs', 'AR 89/2019 s.4(2)(a): the associate board or school "must ensure that a student is given the opportunity to write" the "applicable provincial assessments", at the time the Minister designates and under its supervision.', 'Ask the associate board early in the year when and where its students write.'],
          ['CEMC contests', 'CEMC: "Contests may not be taken remotely or without supervision." and "Participants may only write the contest at the school which ordered the contest."', 'A home-educated student needs a school that orders the contest and agrees to host them. An associate school is a natural first place to ask, though it is not obliged to.'],
          ['When to ask', 'CEMC says creating a new school account can take weeks to review.', 'Ask by October for winter contests and by January for spring ones.']
        ] },
        { kind: 'p', mt: true, html: 'Our teachers prepare students for the contests, for example the Gauss Contest in Grades 7 and 8 and the Pascal, Cayley and Fermat contests in Grades 9 to 11, but cannot enter anyone or supervise a sitting. Our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> covers each contest, and the <a class="ag-inline-link" href="/pascal-contest-preparation">Pascal</a> guide shows what Grade 9 students meet.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.alberta.ca/provincial-achievement-tests" rel="noopener" target="_blank">Alberta, Provincial Achievement Tests</a>; AR 89/2019; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a>. All read 22 October 2026. We are not connected with CEMC.' }
      ]
    },
    {
      id: 'high', tint: 'deep', eyebrow: 'High school at home',
      h2: 'Homeschooling Alberta high school: credits, Math 30-1 and diploma exams',
      lede: 'Teens in home education often ask how their math connects to an Alberta high school diploma. The regulation and the province\'s diploma exam pages give the key rules. We do not grant provincial high school credits; credits come through a school principal under section 6.',
      body: [
        { kind: 'table', caption: 'High school rules from AR 89/2019 and alberta.ca (read 22 October 2026)', head: ['Topic', 'What the official source says'], rows: [
          ['Credits for home-educated students', 'AR 89/2019 s.6: "On the recommendation of a school principal, a student receiving a home education program that follows the Alberta Programs of Study is eligible to receive high school credits if the student achieves the course standards and learning outcomes set out in the Alberta Programs of Study."'],
          ['Diploma exam courses in math', 'Alberta lists Mathematics 30-1 and Mathematics 30-2 among the diploma exam courses.'],
          ['How the final mark is made', '"70% of the final mark comes from course work. The remaining 30% comes from the diploma exam."'],
          ['Exam format', 'Alberta says students write diploma exams and PATs "in a digital environment rather than pencil and paper".']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where our classes fit',
          left: [
            'Our Grade 12 course teaches the Math 30-1 and Pre-calculus 12 topics live, and our Python and math courses build the problem solving underneath. A teen learns the content properly whatever route to credit the family chooses.',
            'We do not grant provincial high school credits, set diploma exams or recommend students for credit. That stays with a school principal.'
          ],
          rightH3: 'Questions to take to a school',
          right: [
            'Does our program follow the Alberta Programs of Study closely enough for section 6? Which principal would make a recommendation? When and where would a diploma exam be written?',
            'Ask these early, ideally the spring before the school year, as the alberta.ca page suggests for finding a supervising school authority.'
          ] },
        { kind: 'source', html: 'Sources: AR 89/2019 s.6; <a class="ag-inline-link" href="https://www.alberta.ca/diploma-exams-overview" rel="noopener" target="_blank">Alberta, diploma exams overview</a>; <a class="ag-inline-link" href="https://www.alberta.ca/provincial-achievement-tests" rel="noopener" target="_blank">Alberta, PATs</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'One clock all year',
      h2: 'Class times on Alberta\'s single clock',
      lede: 'Alberta no longer changes its clocks, which makes class times simple to keep for a whole year.',
      body: [
        { kind: 'p', html: 'Alberta\'s Official Time Act defines official time as "the time 6 hours behind Coordinated Universal Time", and Saskatchewan shares that offset. Ontario still changes, so the gap between Calgary and Toronto moves: a 10:00 a.m. class in Calgary is 12:00 noon in Toronto in winter 2026 to 2027 and 1:00 p.m. in Toronto after Ontario moves its clocks forward on 14 March 2027. That is our arithmetic, shown so families with relatives in the east are not caught out. For a home-educated student the clock barely matters, because classes can sit on a weekday morning as easily as a weekend.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages from first problem to independent work',
    lede: 'Our stages, used to place each home-educated learner in the first class.',
    table: { caption: 'Coding and math together (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Guided', 'Solves a problem or runs a program when shown each step'],
      ['2. Practising', 'Repeats a method on new numbers and explains what it does'],
      ['3. Comparing', 'Tries two methods, checks which is right or better, and says why'],
      ['4. Investigating', 'Asks their own question, plans the math and code, and writes up the result']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is where a portfolio gets interesting, because the student\'s reasoning is visible on the page and not only the answer.',
      'Home-educated students often reach stage 4 early in topics they love. Let them; nothing shows learning more clearly.'
    ] },
    right: { h3: 'For students', ps: [
      'When two methods disagree, that is not a failure. One of them has taught you something.',
      'Date your work. A folder of dated pages shows how far you have travelled.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Alberta home education',
    lede: 'Taught live online by a regular teacher, in a batch or one to one, at times that suit a home-education week.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'About Grades 1 to 6', courses: [
        { code: 'HMA / ELEM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary Math', blurb: 'Grades 1 to 5 in three levels.' },
        { code: 'HMA / ELEM / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic and step-by-step thinking.' },
        { code: 'HMA / ELEM / 03', slug: 'python-ai-kids-masterclass', title: 'Python for Kids', blurb: 'First typed code, through games and drawings.' }
      ] },
      { num: 'II', h3: 'Junior high', sub: 'About Grades 7 to 9', courses: [
        { code: 'HMA / JR / 01', slug: 'maths-through-coding', title: 'Math Through Coding', blurb: 'Math ideas built as programs, ages 10 to 15.' },
        { code: 'HMA / JR / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo Math Contests', blurb: 'Gauss and Pascal tracks.' },
        { code: 'HMA / JR / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI works, for ages 8 to 14.' }
      ] },
      { num: 'III', h3: 'Senior high', sub: 'About Grades 10 to 12', courses: [
        { code: 'HMA / SR / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High School Math', blurb: 'Algebra to calculus readiness.' },
        { code: 'HMA / SR / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Python with real data sets.' },
        { code: 'HMA / SR / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Preparation', blurb: 'Contest programming for the CCC.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes around a home-education week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Morning or midday classes on Alberta\'s fixed clock.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings for families who prefer them.' },
      { time: '1-on-1', l: 'A personal teacher who follows your program outline.' }
    ],
    cells: [
      { h3: 'Four-week cycles', p: 'Each ends with a recorded, dated check.' },
      { h3: 'Portfolio-ready', p: 'Every problem set and program is dated as it is made.' },
      { h3: 'Programs of Study or not', p: 'We follow the outline you choose.' },
      { h3: 'Projects with purpose', p: 'Real questions answered with math and code.' },
      { h3: 'Brothers and sisters', p: 'Each child placed by age and level.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or one teacher alone.' }
    ]
  },

  projectsH2: 'What our students make',
  projectsLede: 'Students from many countries share their projects with us. Some appear below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'From Google: reviews by parents, copied without changes.',

  fees: {
    h2: 'Fees',
    lede: 'Our classes are billed monthly: one fee for eight live classes with the same teacher. There is no term contract, so a family can stop at the end of any month.',
    free: ['A free first class', 'A level check in math or coding', 'No card asked for'],
    group: ['Fifteen to twenty students per batch', 'Placed by age and level', 'Weekday and weekend times', 'A monthly payment'],
    one: ['A teacher for one student', 'Follows your program outline', 'Paced to the cycle you choose']
  },

  faq: {
    eyebrow: 'Questions from Alberta families',
    h2: 'Homeschool coding and math in Alberta: common questions',
    items: [
      { q: 'What are the two kinds of home education in Alberta?', a: 'Alberta\'s page lists a program supervised by a school authority, which it labels funded, and a program not supervised by a school authority, which it labels notification only and non-funded. Read the page and talk to a school authority before choosing.' },
      { q: 'Do I have to follow the Alberta curriculum when homeschooling?', a: 'No. The Home Education Regulation says a home education program may follow the Alberta Programs of Study. Programs that do not follow them work towards the learning outcomes in the regulation\'s Schedule instead.' },
      { q: 'What records does Alberta ask home-educating parents to keep?', a: 'Section 4 of the regulation says parents must evaluate progress at regular intervals and record the methods and dates, and must keep dated samples of student work and a general record of the student\'s activities.' },
      { q: 'Can a home-educated student earn Alberta high school credits through your classes?', a: 'No. We do not grant provincial high school credits. Section 6 of the regulation says credits come on the recommendation of a school principal, for a program that follows the Alberta Programs of Study.' },
      { q: 'Are your classes covered by home education funding?', a: 'We do not advise on funding. Alberta\'s page and its Standards for Home Education Reimbursement set the rules, and your associate board or school decides. Please check those sources directly.' },
      { q: 'Do home-educated students write PATs?', a: 'Alberta says PATs are administered annually to all Alberta students in Grades 6 and 9, and the regulation says an associate board or school must give students in supervised programs the opportunity to write applicable provincial assessments. Ask your school authority.' },
      { q: 'Can a home-educated Alberta student write Waterloo contests?', a: 'Yes, at a school that orders the contest. CEMC says contests may not be taken remotely or without supervision, and participants may only write at the school which ordered the contest. Ask a nearby school early.' },
      { q: 'How does coding fit Alberta home education?', a: 'If you use the regulation\'s Schedule, coding supports outcomes such as demonstrating competence in using information technologies and using mathematics to solve problems. Our classes pair each math idea with a short program.' },
      { q: 'When are classes held for Alberta families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Alberta stays on UTC-6 all year, so the time never shifts.' },
      { q: 'Is this page legal or funding advice?', a: 'No. It quotes alberta.ca and the Home Education Regulation so you can find the source quickly. Check the official text and your school authority before you decide anything.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Alberta and across the Prairies.',
    items: [
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'Our main page for Alberta families.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All of our Canadian pages.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum', p: 'A coding sequence for home-schoolers by age.' },
      { href: '/canada-high-school-math-courses-compared', label: 'High school math compared', p: 'Math 30-1 beside other provinces\' courses.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'One-to-one math through Grade 12.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Contest preparation from Grade 7.' },
      { href: '/pascal-contest-preparation', label: 'Pascal Contest', p: 'The Waterloo contest for Grade 9.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Canadian time zones in 2026', p: 'Who changes clocks, and who no longer does.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class checks your child\'s level in math, coding or both with a short task, then maps the first four-week cycle. The teacher talks you through the result, which you can record with its date.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> covers a class in detail, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Our teachers are based in India and teach over live video, so families anywhere from Lethbridge to Fort McMurray learn from home. WhatsApp is the easiest way to ask a question first.',
    formNote: 'Booking the first class is free, and there is no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'Home education', links: [
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum' },
        { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool computer science' },
        { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for Teens' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-high-school-math-courses-compared', label: 'High school math compared' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Compare, then choose'
  },

  personalityCss: `
.ag-root.ag-hma .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-hma .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-hma .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-hma .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-hma .ag-three { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'alberta.ca Home education page (definition, two program types, yearly notification to a supervising school authority or the Minister, plan not submitted for notification-only programs, two formal evaluations and portfolio review in supervised programs, funding lines quoted only); Home Education Regulation AR 89/2019, current as of September 1, 2025 (ss.3(2), 3(4), 4(1)(a), 4(1)(b), 4(2)(a), 6 and Schedule items 1, (c), (n), (o)); Alberta PAT, diploma exam and curriculum pages; Official Time Act; CEMC How contests work. All read 22 October 2026.',
    localProject: 'Garden Bed Planner, written by us: square versus staggered planting at 30 cm spacing and 15 cm margins, computed in Python (240 x 120 cm: 32 versus 30; 225 x 160 cm: 35 versus 42), run on 22 October 2026, with predict, read, explain and check-by-hand steps; a four-week cycle with a dated sample each week; a Schedule mapping for coding and math; clock arithmetic for Calgary and Toronto. Lesson family: compare two methods with evidence before choosing one.',
    requiredMentions: ['Garden Bed Planner', 'staggered 42 plants', 'a parent-directed approach to educating a student in Grades 1 to 12', 'Not supervised by school authority (notification only, non-funded)', 'are not required to submit this program plan to the Minister of Education', 'must maintain dated samples of student work', 'A home education program may follow the Alberta Programs of Study', 'demonstrate competence in using information technologies', 'Students are not eligible for funding if a home education program is accepted after September 29', 'Dated sample to keep'],
    sources: [
      { claim: 'Alberta home education definition, two program types, notification, evaluations, funding lines.', url: 'https://www.alberta.ca/home-education' },
      { claim: 'Home Education Regulation AR 89/2019: outcomes, Programs of Study optional, evaluation records, dated samples, provincial assessments, high school credits, Schedule.', url: 'https://kings-printer.alberta.ca/documents/Regs/2019_089.pdf' },
      { claim: 'PATs administered annually in Grades 6 and 9; digital format.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'Diploma exams: 70 percent course work, 30 percent exam; Mathematics 30-1 and 30-2.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Curriculum renewal: new K to 6 math; draft 7 to 9 with AI and computer science, mandatory September 2027.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'CEMC contests supervised in person at the ordering school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' }
    ],
    rejectedClaims: [
      'That our classes qualify for home education funding or reimbursement: never stated or implied; families are sent to the province and their school authority.',
      'Funding amounts, percentages and reimbursement rules beyond the two quoted lines: not summarised (no funding advice).',
      'That our classes earn Alberta credits: refused; the page says we do not grant provincial high school credits and cites s.6.',
      'The home education kindergarten pilot and its eligibility ages: out of scope for a coding and math page.',
      'The January 2026 cancellation and its stated reason: not reproduced.',
      'The investigation and termination clauses of s.1.2: not reproduced.',
      'Form names containing en dashes: not reproduced.',
      'Any affiliation with Alberta Education, a school authority or CEMC: none.'
    ]
  }
};
