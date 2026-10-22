'use strict';
// Homeschool coding and math in British Columbia (ag- market door; Canada cluster row 78).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Searches: homeschool bc curriculum / bc homeschool programs.
// Spine: BC's law draws a line between home education (registered with a school by 30 September under School Act s.13)
// and enrolment, including online learning; School Regulation s.3 says what a registering school must offer, and lets a
// registered Grade 10 to 12 child take online learning courses while staying registered. A coding and math plan sits
// on the home-education side of that line.
// The ministry's homeschooling page on www2.gov.bc.ca could not be read: curl exit 56 (connection reset) on
// 22 October 2026, not retried (src-pilots/homeschool-coding-and-math-bc/BLOCKED-www2.gov.bc.ca.txt). The page therefore
// quotes the School Act and School Regulation on bclaws.gov.bc.ca, the official King's Printer site, and says so. The
// term "distributed learning" is not used: the current Act says "online learning".
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/homeschool-coding-and-math-bc/):
//  - School Act [RSBC 1996] c.412 (school-act-00, -part1, -part2 .html/.txt), "This Act is current to October 13, 2026":
//    Division 4 heading "Home Education"; s.12 a parent "(a) may educate the child at home or elsewhere in accordance with
//    this Division, and (b) must provide that child with an educational program."; s.13(1) a parent "must register the
//    child on or before September 30 in each year with (a) a school of the parent's choice that is operating in British
//    Columbia", with francophone options, or "(c) an independent school operating in British Columbia."; s.13(3) "A
//    school or francophone school that registers a child under this section must provide the child with access to
//    educational services in accordance with the regulations."; s.3(3)(b) the enrolment duty "does not apply if the
//    person ... is registered under section 13"; s.1 "online learning" means "a method of instruction that relies
//    primarily on communication between students and teachers by means of the internet"; "online learning school" means
//    "a school or francophone school that offers instruction to its students through online learning only".
//    Deliberately NOT used: s.13(4) (offence) and s.14 (reports), and the s.3 age wording.
//  - School Regulation, B.C. Reg. 265/89 (school-regulation.html/.txt), "current to October 13, 2026": s.3(1) a
//    registering school "must offer (a) evaluation and assessment services sufficient to enable the parents of the child
//    to determine the educational progress achieved by the child in relation to students of similar age and ability, and
//    (b) the loan of educational resource materials that are authorized and recommended by the minister"; s.3(2) "With
//    the permission of a board", a registered child "may audit educational programs offered by the board" on the board's
//    terms (the fee wording is not used); s.3(3) "A child in grade 10, 11 or 12 registered in a school, francophone school
//    or independent school under section 13 of the Act may enroll in all or part of an educational program that is (a)
//    offered by a board or an independent school, and (b) delivered through online learning."; s.3(4) enrolling in board
//    programs "that are not delivered through online learning" means "the child ceases to be registered under section 13
//    (1) (a) of the Act and is enrolled as a student with the board."
//  - facts-schools-contests.md, used as they stand: BC ADST course list ("Computer Studies 10", "Web Development 10",
//    "Computer Programming 11", "Computer Programming 12"); Computer Programming 11 "programming language constructs to
//    support input/output, logic, decision structure, and loops" and "Key components are decomposition, patterns and
//    generalizations, abstraction, and algorithmic thinking."; Computer Programming 12 "higher-level structures, such as
//    functions, methods, or classes"; math list includes "Computer Science 11", "Pre-calculus 11", "Pre-calculus 12",
//    "Calculus 12", "Foundations of Mathematics 11"; CEMC "only educators are permitted to request a CEMC School Account",
//    "can take up to three weeks" (src/cemc/how-contests-work.txt); CMS COMC page: "Normally, all registration is done by
//    teachers or school staff."; Independent Students "Only for students whose school is not participating."; "Some of
//    our university partners are hosting an Open Writing Centre (OWC) for students whose schools are not participating
//    through a teacher."; "The OWCs are In Person" (src/cms/comc.txt); COMC 2026 registration closed 22 October 2026.
//  - facts-geo.md sections 1 and 3: BC news release 2026AG0013-000209, permanent UTC-7 after Sunday, March 8, 2026; East
//    Kootenay and Golden on UTC-6 all year; Ontario UTC-5 winter and UTC-4 from 14 March 2027.
// Our own material, labelled on the page: the line-drawing table, the weekly plan for a registered teen, the Trail
// Profile project (Python, run under CPython on 22 October 2026: 1800 m, climb 410 m, descent 10 m, net 400 m, average
// grade 22.2 %, steepest 40.0 % from 1000 m to 1200 m), the questions to ask a registering school, and the clock
// arithmetic (11:00 a.m. in Vancouver is 2:00 p.m. in Toronto in winter and 3:00 p.m. after 14 March 2027).
// Lesson family: know which side of a definition you are on (registered or enrolled; climb or net change).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TRAIL = `# Our Trail Profile project: climb, descent and the steepest stretch (Grades 10 to 12 math with code)
step = 200                      # metres walked between readings
heights = [120, 150, 210, 260, 270, 340, 420, 410, 470, 520]   # elevation in metres

climb = 0
descent = 0
steepest_grade = 0
steepest_at = 0
for i in range(1, len(heights)):
    rise = heights[i] - heights[i - 1]
    if rise > 0:
        climb += rise
    else:
        descent += -rise
    grade = rise / step * 100          # percent grade = rise over run, times 100
    if grade > steepest_grade:
        steepest_grade = grade
        steepest_at = i

distance = step * (len(heights) - 1)
print("Distance:", distance, "m")
print("Total climb:", climb, "m | total descent:", descent, "m")
print("Net change:", heights[-1] - heights[0], "m")
print("Average grade:", round((heights[-1] - heights[0]) / distance * 100, 1), "%")
print("Steepest stretch: from", (steepest_at - 1) * step, "m to", steepest_at * step,
      "m at", steepest_grade, "%")`;

const TRAIL_OUT = `Distance: 1800 m
Total climb: 410 m | total descent: 10 m
Net change: 400 m
Average grade: 22.2 %
Steepest stretch: from 1000 m to 1200 m at 40.0 %`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'HOMESCHOOL BC', blurb: 'Home education in BC for coding and math, from the School Act itself: registration by 30 September, what a school must offer, online learning for Grades 10 to 12, and a plan.' },
  slug: 'homeschool-coding-and-math-bc',
  code: 'hmb',
  accent: '#154C24',
  accentRationale: 'Homeschool coding and math, British Columbia: a deep coastal-forest green #154C24, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 9.47 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  courseCodePage: true,
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Homeschool coding and math, BC',
  title: 'Homeschool Coding and Math in BC: School Act Guide',
  description: 'Homeschooling coding and math in BC: registering by 30 September under the School Act, what the school must offer, online learning in Grades 10 to 12, and a plan.',
  ogDescription: 'British Columbia home education read from the School Act and School Regulation: registration, the services a registering school must offer, the line between home education and online learning, and a coding and math plan.',
  twitterDescription: 'Homeschool coding and math in BC, built from the School Act, with a weekly plan and a Python trail project.',
  pageName: 'Homeschool Coding and Math in BC',
  webPageDescription: 'A guide for British Columbia families who home educate, quoting the School Act and School Regulation on registration, educational services, auditing and online learning for Grades 10 to 12, with a sample coding and math plan from Modern Age Coders.',
  courseDescription: 'Live online coding and math classes for home-educated children and teens in British Columbia, in a batch or one to one, as part of the family\'s educational program.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Homeschool coding and math, BC',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#law', label: 'The School Act' },
    { href: '#line', label: 'Registered or enrolled' },
    { href: '#week', label: 'A weekly plan' },
    { href: '#project', label: 'A project' },
    { href: '#teens', label: 'Grades 10 to 12' }
  ],
  eyebrow: 'British Columbia &middot; Registered home education &middot; Math and code',
  h1: 'Homeschool coding and math in British Columbia',
  lede: 'In British Columbia, home education rests on a few short sections of the School Act and one section of the School Regulation. They set a date, 30 September each year, and a distinction that matters for every family: a child registered for home education is not the same as a child enrolled in a school program, including an online learning school. This page quotes the law on both, explains where coding and math fit, then sets out one week of study and a trail project we teach. Our coding and math classes sit inside the family\'s own program, and we do not grant provincial credits. Nothing on this page is legal advice: read the Act and Regulation yourself and ask the school you register with.',
  secondaryCta: { href: '#week', label: 'Jump to one week of study' },
  wa: 'Hello Modern Age Coders, we home school in BC and would like coding and math classes. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['Province', 'British Columbia'],
    ['Law', 'School Act, ss.12 and 13'],
    ['Register by', '30 September each year'],
    ['Register with', 'A BC public or independent school'],
    ['Online learning', 'Grades 10 to 12, per Regulation s.3(3)'],
    ['Clock', 'UTC-7 all year (most of BC)'],
    ['Credits', 'We do not grant provincial credits'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'In BC, a parent may educate a child at home under the School Act and must register the child with a BC public or independent school on or before 30 September each year. That school must offer evaluation and assessment services and the loan of approved materials. Modern Age Coders runs live online coding and math classes for BC home-schoolers, one to one or in a batch, including its Python for Teens course.',

  picks: {
    eyebrow: 'Courses BC families use',
    h2: 'Three courses BC home-schoolers start with',
    lede: 'Typed Python for teens, a western Canadian Grade 12 math course, and a course that joins math and code for the middle years.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'HMB / 01', title: 'Python for Teens', note: 'For teens aged 13 to 18. Input and output, decisions, loops, functions and projects: the constructs BC\'s Computer Programming courses describe.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'HMB / 02', title: 'Pre-calculus 12 and Math 30-1', note: 'Pre-calculus 12 content, taught live, for a teen aiming at science or engineering after Grade 12. No BC credit comes with it.' },
      { course: 'maths-through-coding', code: 'HMB / 03', title: 'Math Through Coding', note: 'Ages 10 to 15. Patterns, data and probability built as small programs, for the years before high school.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: 'tint', eyebrow: 'The law itself',
      h2: 'What BC\'s School Act and School Regulation say about home education',
      lede: 'The ministry\'s homeschooling page on gov.bc.ca could not be read on 22 October 2026 (the connection was refused), so we went to the law itself on bclaws.gov.bc.ca, the King\'s Printer site. Both the Act and the Regulation were shown as current to October 13, 2026.',
      body: [
        { kind: 'table', caption: 'Home education in the BC School Act and School Regulation, quoted from bclaws.gov.bc.ca (read 22 October 2026)', head: ['Where', 'What the law says'], rows: [
          ['School Act, Division 4', 'The division is headed "Home Education".'],
          ['School Act s.12', 'A parent of a child of school age "(a) may educate the child at home or elsewhere in accordance with this Division, and (b) must provide that child with an educational program."'],
          ['School Act s.13(1)', 'The parent "must register the child on or before September 30 in each year with (a) a school of the parent\'s choice that is operating in British Columbia", or with a francophone school where eligible, or "(c) an independent school operating in British Columbia."'],
          ['School Act s.13(3)', '"A school or francophone school that registers a child under this section must provide the child with access to educational services in accordance with the regulations."'],
          ['School Regulation s.3(1)', 'The registering school "must offer (a) evaluation and assessment services sufficient to enable the parents of the child to determine the educational progress achieved by the child in relation to students of similar age and ability, and (b) the loan of educational resource materials that are authorized and recommended by the minister".'],
          ['School Regulation s.3(2)', '"With the permission of a board", a registered child "may audit educational programs offered by the board", on terms the board sets.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a coding and math plan',
          left: [
            'The Act asks the parent to provide an educational program, and the Regulation gives the family a school whose evaluation services can show progress "in relation to students of similar age and ability". That is a useful outside check for math in particular.',
            'The Act does not list subjects for home education. Families who want a structure can use the BC curriculum, which includes coding through Applied Design, Skills, and Technologies and through Computer Science 11 and 12 under Mathematics.'
          ],
          rightH3: 'Limits of this guide',
          right: [
            'This summarises two pieces of BC legislation for families; it is not legal advice. The ministry\'s own guidance, which we could not reach, may add detail; please read it, and ask the school you register with how it applies the Regulation.',
            'Modern Age Coders is not connected with the BC Ministry of Education and Child Care, any school district or any independent school. We teach classes; we do not register, assess or report on home education.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96412_02" rel="noopener" target="_blank">School Act, Part 2</a>, <a class="ag-inline-link" href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96412_01" rel="noopener" target="_blank">School Act, Part 1 (definitions)</a> and <a class="ag-inline-link" href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/265_89" rel="noopener" target="_blank">School Regulation, B.C. Reg. 265/89</a>, read 22 October 2026. Always read the live text before relying on it.' }
      ]
    },
    {
      id: 'line', tint: 'deep', eyebrow: 'Registered or enrolled',
      h2: 'Home education or online learning school: the line BC\'s law draws',
      lede: 'BC families searching for "BC homeschool programs" often find online learning schools, which are a different thing in law. The Act defines online learning as "a method of instruction that relies primarily on communication between students and teachers by means of the internet", and an online learning school as "a school or francophone school that offers instruction to its students through online learning only".',
      body: [
        { kind: 'table', caption: 'Registered for home education versus enrolled in a school program, from the School Act and Regulation (the right-hand column is our plain reading)', head: ['', 'Registered under s.13 (home education)', 'Enrolled (including an online learning school)', 'Our plain reading'], rows: [
          ['Who provides the program', 'The parent: s.12 says the parent "must provide that child with an educational program."', 'The school, whose teachers instruct the student, online or in person.', 'At home, you are the teacher of record; enrolled, the school is.'],
          ['The school\'s role', 'Offers evaluation and assessment services and loans of approved materials (Regulation s.3(1)).', 'Delivers the full educational program.', 'Registration gives you support, not instruction.'],
          ['The enrolment duty', 'School Act s.3(3)(b): the enrolment requirement "does not apply if the person ... is registered under section 13".', 'The student is enrolled.', 'One or the other, not both, for the same program.'],
          ['Taking school courses', 'Grades 10 to 12 may take online learning courses and stay registered (s.3(3)); taking a board program not delivered online ends the registration (s.3(4)).', 'Courses are part of the enrolment.', 'For teens, the delivery method decides which side you are on.']
        ] },
        { kind: 'p', mt: true, html: 'Where we sit: our classes are private lessons a family chooses as part of its own program. They are not a BC school, they are not an online learning school under the Act, and taking them does not enrol a child anywhere. A family that registers under section 13 and adds our coding and math classes is still a home-education family.' }
      ]
    },
    {
      id: 'week', tint: 'tint', eyebrow: 'A sample week',
      h2: 'A weekly coding and math plan for a registered BC teen',
      lede: 'Our own plan for a home-educated teen in about Grade 10, built from two live classes with us and three short solo sessions. It assumes the family also uses the registering school\'s evaluation services once or twice a term.',
      body: [
        { kind: 'ol', items: [
          '<b>Live session 1, math (60 minutes):</b> one Foundations of Mathematics and Pre-calculus 10 idea, such as slope and rate of change, taught from examples and checked with a second method.',
          '<b>Solo session A (30 minutes, next day):</b> a practice set on that idea, marked by the teen against worked answers, with corrections written beside each error.',
          '<b>Live session 2, coding (60 minutes):</b> a Python program that uses the same idea, such as the Trail Profile below, written by the teen with the teacher reviewing each line.',
          '<b>Solo session B (30 minutes):</b> extend the program: a new input, a second statistic, or a test case that should break it.',
          '<b>Solo session C (20 minutes, end of week):</b> a short log entry: what was learned, one thing still unclear, and the file names of the week\'s work.',
          '<b>Once or twice a term:</b> ask the registering school about its evaluation and assessment services, which the Regulation says must be offered, to see progress against students of a similar age.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'About three and a half hours', p: 'Two live hours and eighty solo minutes cover coding and math well for most teens.' },
          { h3: 'One idea, two subjects', p: 'The math idea of the week becomes the coding project of the week.' },
          { h3: 'A log, not a binder', p: 'A weekly log entry is enough to show what was done and when.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A project from our classes',
      h2: 'Project: Trail Profile, climbing and slope in Python',
      lede: 'Our teachers wrote this project for teens learning at home in Grades 10 to 12. It takes elevation readings along a hiking trail and works out the total climb, the net change and the steepest stretch. The math is slope as rate of change; the code uses the constructs BC\'s Computer Programming 11 names: "input/output, logic, decision structure, and loops".',
      body: [
        { kind: 'p', html: '<b>The data.</b> Ten elevation readings taken every 200 m along a made-up trail, from 120 m to 520 m above sea level. One short stretch goes downhill.' },
        { kind: 'code', label: 'trail.py &middot; our program', lang: 'python', code: TRAIL, note: 'Tested under Python 3 on 22 October 2026. Percent grade is rise divided by run, times 100, the way trail signs describe steepness.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: TRAIL_OUT },
        { kind: 'ol', mt: true, items: [
          '<b>Spot the difference.</b> Total climb is 410 m but the net change is 400 m. The 10 m dip between 1200 m and 1400 m has to be climbed again, so climb and net change are different quantities.',
          '<b>Check the steepest stretch by hand.</b> From 1000 m to 1200 m the trail rises from 340 m to 420 m: a rise of 80 over a run of 200, which is 40 percent.',
          '<b>Graph it.</b> Plot distance against elevation on paper. The steepest stretch is the steepest line segment, and the average grade, 22.2 percent, is the slope of the line joining the first and last points.',
          '<b>Change the data.</b> Add a reading so the trail ends lower than it starts, and predict what each line of output will say before running it.',
          '<b>Go further.</b> Grade 11 and 12 students can fit a line of best fit, or compute the angle of the steepest stretch with an inverse tangent.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this project fits BC',
          left: [
            'Computer Programming 11 describes computational thinking as "decomposition, patterns and generalizations, abstraction, and algorithmic thinking". The project decomposes a trail into stretches, generalises one calculation to all of them, and keeps only the numbers that matter.',
            'It also suits a province where many families walk steep trails; any real trail with elevation markers can supply new data.'
          ],
          rightH3: 'The idea underneath',
          right: [
            'Total climb and net change sound the same and are not, just as registered and enrolled sound similar and are not. Knowing which definition you are using is the lesson family behind this BC page.',
            'Students who can say which quantity they computed, and why, have understood rate of change rather than memorised a formula.'
          ] }
      ]
    },
    {
      id: 'teens', tint: 'tint', eyebrow: 'Grades 10 to 12',
      h2: 'Home education in BC high school: courses, credits and online learning',
      lede: 'For teens, the School Regulation opens one door that younger children do not have: online learning courses from a board or independent school while staying registered for home education. We do not grant provincial or high school credits; credit courses come from BC schools.',
      body: [
        { kind: 'table', caption: 'BC coding and math courses a home-educated teen might study or take for credit through a school (course names from curriculum.gov.bc.ca, verified on 22 October 2026)', head: ['Area', 'Courses named in the BC curriculum', 'What the curriculum says'], rows: [
          ['Coding (ADST)', 'Computer Studies 10, Web Development 10, Computer Programming 11, Computer Programming 12', 'Computer Programming 12 covers "higher-level structures, such as functions, methods, or classes"'],
          ['Coding (Mathematics)', 'Computer Science 11 and Computer Science 12', 'Listed among the BC mathematics courses'],
          ['Math', 'Foundations of Mathematics 11, Pre-calculus 11, Pre-calculus 12, Calculus 12', 'Listed among the BC mathematics courses']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The online learning route, in the Regulation\'s words',
          left: [
            'School Regulation s.3(3): "A child in grade 10, 11 or 12 registered in a school, francophone school or independent school under section 13 of the Act may enroll in all or part of an educational program that is (a) offered by a board or an independent school, and (b) delivered through online learning."',
            'Section 3(4) adds that enrolling in board programs not delivered through online learning means the child "ceases to be registered under section 13 (1) (a) of the Act and is enrolled as a student with the board." Ask the school before signing up for any course.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'We teach the content: Python and Java to the depth Computer Programming 11 and 12 describe, and Pre-calculus 11 and 12 topics in math. Many teens take a credit course online through a school and use our classes to learn the material properly.',
            'We do not grant provincial or high school credits, issue BC transcripts or replace a school course. What we offer is teaching.'
          ] },
        { kind: 'source', html: 'Sources: School Regulation, B.C. Reg. 265/89, s.3; BC curriculum pages for ADST and Mathematics as recorded in our fact sheet (curriculum.gov.bc.ca could not be reached again on 22 October 2026, so no new curriculum text was added).' }
      ]
    },
    {
      id: 'contests', tint: 'deep', eyebrow: 'Contests',
      h2: 'Math and computing contests for home-educated BC students',
      lede: 'Two Canadian organisers of school math contests both work through schools first, but they handle students without a participating school differently.',
      body: [
        { kind: 'table', caption: 'How CEMC and the Canadian Mathematical Society handle entry (read 22 October 2026)', head: ['Organiser', 'What it says', 'What a home-educated student can do'], rows: [
          ['CEMC (University of Waterloo): Gauss, Pascal, Cayley, Fermat, Euclid, Beaver, CCC', '"only educators are permitted to request a CEMC School Account"; creating one "can take up to three weeks".', 'Ask a school, perhaps the one you register with, whether it orders the contest and would host the student. Ask early.'],
          ['Canadian Mathematical Society: Canada Open Mathematics Challenge (COMC)', '"Normally, all registration is done by teachers or school staff." An Independent Students route is "Only for students whose school is not participating."', 'The CMS says some university partners host an Open Writing Centre "for students whose schools are not participating through a teacher". The CMS says "The OWCs are In Person".']
        ] },
        { kind: 'p', mt: true, html: 'The CMS set Thursday 22 October 2026 as the last day to register for the 2026 COMC, so for the next edition check the CMS page in the late summer. We help students prepare for both organisers\' contests, but cannot enter a student or run a sitting. Our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> and <a class="ag-inline-link" href="/fermat-contest-preparation">Fermat guide</a> explain what the papers ask.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/how-contests-work" rel="noopener" target="_blank">CEMC, How contests work</a> and <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/" rel="noopener" target="_blank">CMS, COMC</a>, read 22 October 2026. Modern Age Coders has no connection with CEMC or the CMS.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'Pacific time, all year',
      h2: 'Class times on BC\'s permanent clock',
      lede: 'BC stopped changing its clocks in 2026, which simplifies a home-education timetable.',
      body: [
        { kind: 'p', html: 'The BC government announced permanent, year-round daylight saving time after clocks moved forward on Sunday, March 8, 2026, which puts most of the province at UTC-7 all year. East Kootenay and Golden keep UTC-6, the same as Alberta. Eastern Canada still changes, so a class at 11:00 a.m. in Vancouver is 2:00 p.m. in Toronto during winter 2026 to 2027 and 3:00 p.m. there once Eastern clocks spring forward on 14 March 2027 (our own conversion, for families who share classes with relatives in the east). For home-educated students, weekday mornings in BC are open, so class times rarely clash with anything.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a learner starts',
    h2: 'Four stages for a home-educated coder in BC',
    lede: 'Our stages, used in the first class to place each learner fairly.',
    table: { caption: 'From reading code to writing it (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Reading', 'Follows a short program and predicts what it prints'],
      ['2. Editing', 'Changes values and conditions in a working program and explains the effect'],
      ['3. Writing', 'Writes a program from a problem statement, with input, decisions and loops'],
      ['4. Structuring', 'Organises larger programs with functions and tests, as Computer Programming 12 describes']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is underrated. A teen who predicts output correctly is thinking like a programmer before typing much at all.',
      'The registering school\'s evaluation services and the teen\'s weekly log together give two views of progress.'
    ] },
    right: { h3: 'For teens', ps: [
      'Predict, then run. If you were wrong, that is where the learning is.',
      'Keep your weekly log. It turns into a record you will be glad of.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for BC home education',
    lede: 'Each one is live online with a teacher who stays with the class, one to one or in a group, on Pacific time or your own clock.',
    bands: [
      { num: 'I', h3: 'Primary years', sub: 'About Kindergarten to Grade 5', courses: [
        { code: 'HMB / PRI / 01', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Counting and shapes for ages 4 to 7.' },
        { code: 'HMB / PRI / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Math for Kids', blurb: 'Number sense for ages 5 to 10.' },
        { code: 'HMB / PRI / 03', slug: 'scratch-programming-complete-course', title: 'Scratch Coding', blurb: 'Visual programming, one block at a time.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'About Grades 6 to 9', courses: [
        { code: 'HMB / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Math', blurb: 'Ratio, integers and equations.' },
        { code: 'HMB / MID / 02', slug: 'python-ai-kids-masterclass', title: 'Python for Kids', blurb: 'From blocks to typed code.' },
        { code: 'HMB / MID / 03', slug: 'middle-school-math-competitions-course', title: 'Math Competitions', blurb: 'Harder problems for keen learners.' }
      ] },
      { num: 'III', h3: 'Graduation years', sub: 'About Grades 10 to 12', courses: [
        { code: 'HMB / GRAD / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Classes and methods in a typed language.' },
        { code: 'HMB / GRAD / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Web Development for Teens', blurb: 'React and Node.js for teen builders.' },
        { code: 'HMB / GRAD / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High School Math', blurb: 'Through calculus readiness.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How BC home-schoolers take our classes',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Mornings or early afternoons on Pacific time.' },
      { time: 'Weekends', l: 'Weekend mornings for families who keep weekdays busy.' },
      { time: '1-on-1', l: 'A teacher who builds around your educational program.' }
    ],
    cells: [
      { h3: 'One idea, two subjects', p: 'Each math idea becomes a program.' },
      { h3: 'Weekly logs', p: 'Short records of what was learned and when.' },
      { h3: 'Your program', p: 'BC curriculum or your own, as you choose.' },
      { h3: 'Real data', p: 'Trails, weather and tides as material.' },
      { h3: 'All of BC', p: 'From the Island to the Kootenays.' },
      { h3: 'Group or private', p: 'A group of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Student work from our classes',
  projectsLede: 'Our learners build games, tools and websites. A few are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds the rest.',
  reviewsLede: 'Reviews parents have left on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee covers eight live classes with code review. Families are never tied to a school year with us: keep going month by month, or stop when your plan changes.',
    free: ['A free first class', 'A short placement task', 'No card details'],
    group: ['Fifteen to twenty learners per batch', 'Learners grouped by age and stage', 'Daytime or weekend times', 'Charged monthly'],
    one: ['A dedicated teacher', 'Fitted to your educational program', 'Projects built on real data']
  },

  faq: {
    eyebrow: 'Questions from BC families',
    h2: 'Homeschool coding and math in BC: common questions',
    items: [
      { q: 'How do I register for home education in BC?', a: 'The School Act says a parent must register the child on or before September 30 each year with a BC school of the parent\'s choice, a francophone school where eligible, or a BC independent school. Ask that school about its process.' },
      { q: 'Do I have to follow the BC curriculum when homeschooling?', a: 'The School Act asks the parent to provide an educational program but does not list subjects for home education. Many families use parts of the BC curriculum anyway. The ministry\'s guidance, which we could not reach today, may say more, so check it.' },
      { q: 'What does the school I register with have to provide?', a: 'The School Regulation says it must offer evaluation and assessment services so parents can see progress compared with students of similar age and ability, and the loan of educational resource materials authorised and recommended by the minister.' },
      { q: 'Is an online learning school the same as homeschooling in BC?', a: 'No. The School Act defines online learning as instruction that relies primarily on internet communication between students and teachers. A student in an online learning school is enrolled, while a home-educated child is registered under section 13.' },
      { q: 'Can a home-educated BC teen take courses for credit?', a: 'The Regulation says a registered child in Grade 10, 11 or 12 may enroll in all or part of a program delivered through online learning by a board or independent school. Enrolling in a non-online board program ends the home-education registration. We do not grant provincial credits.' },
      { q: 'Do your classes count as enrolment in a school?', a: 'No. Our classes are private lessons that a family adds to its own program. They are not a BC school or an online learning school, and they do not enrol a child anywhere.' },
      { q: 'Can home-educated students in BC write math contests?', a: 'CEMC contests run through schools, since only educators can open a CEMC school account. The Canadian Mathematical Society offers an Independent Students route for the COMC, with in-person Open Writing Centres hosted by some university partners.' },
      { q: 'How much coding and math is enough each week?', a: 'There is no official figure. Our sample plan for a Grade 10 teen uses two live hours and about eighty minutes of solo work each week.' },
      { q: 'When are classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most of BC is on UTC-7 all year, so times stay fixed.' },
      { q: 'Is this page legal advice?', a: 'No. It quotes the School Act and School Regulation so families can find the text quickly. Read the official versions and ask the school you register with before deciding anything.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for British Columbia.',
    items: [
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'Our main page for BC families.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page for Canadian learners.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum', p: 'A coding sequence for families teaching at home.' },
      { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool computer science', p: 'High school computer science at home.' },
      { href: '/canada-high-school-math-courses-compared', label: 'High school math compared', p: 'Pre-calculus 12 beside other provinces.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province', p: 'Where coding sits in each province.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Contest preparation from Grade 7 up.' },
      { href: '/fermat-contest-preparation', label: 'Fermat Contest', p: 'The Waterloo contest for Grade 11.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class gives your child a short placement task in coding or math and ends with a suggested weekly plan. The teacher explains the result so you can record it in your own way.',
    readFirst: 'Reading before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains our classes, and the <a class="ag-inline-link" href="/courses">course list</a> holds each full syllabus.',
    note: 'Our teachers teach from India by live video, which is how one class reaches families from Prince George to Victoria. A WhatsApp message gets the quickest reply.',
    formNote: 'There is no fee and no card for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Home education', links: [
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum' },
        { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool computer science' },
        { href: '/coding-classes-in-british-columbia', label: 'Coding classes in BC' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for Teens' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-coding-curriculum-by-province', label: 'Coding curriculum by province' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Climb is not net change'
  },

  personalityCss: `
.ag-root.ag-hmb .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-hmb .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-hmb .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-hmb .ag-table caption { text-align: left; font-weight: 500; letter-spacing: 0.01em; }
.ag-root.ag-hmb .ag-steps { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'BC School Act [RSBC 1996] c.412 (current to October 13, 2026): Division 4 Home Education, s.12, s.13(1) and (3), s.3(3)(b), s.1 definitions of online learning and online learning school; School Regulation B.C. Reg. 265/89 s.3(1) to (4) (evaluation and assessment services, loan of materials, auditing, online learning for Grades 10 to 12, non-online enrolment ends registration); BC curriculum course names and Computer Programming 11 and 12 content from the fact sheet; CEMC How contests work; CMS COMC page. Ministry homeschooling page on www2.gov.bc.ca unreachable on 22 October 2026 (connection reset), stated on the page.',
    localProject: 'Trail Profile, written by us: ten elevation readings every 200 m analysed in Python (climb 410 m, descent 10 m, net 400 m, average grade 22.2 percent, steepest 40.0 percent from 1000 m to 1200 m), run on 22 October 2026, with hand checks, a graph and extensions; a weekly plan for a registered Grade 10 teen in two live and three solo sessions; a registered-versus-enrolled table; clock arithmetic for Vancouver and Toronto. Lesson family: know which definition you are on.',
    requiredMentions: ['Trail Profile', 'Total climb: 410 m | total descent: 10 m', 'must register the child on or before September 30 in each year', 'may educate the child at home or elsewhere in accordance with this Division', 'evaluation and assessment services sufficient to enable the parents of the child', 'the loan of educational resource materials that are authorized and recommended by the minister', 'relies primarily on communication between students and teachers by means of the internet', 'A child in grade 10, 11 or 12 registered in a school, francophone school or independent school', 'Normally, all registration is done by teachers or school staff', 'Registered under s.13 (home education)'],
    sources: [
      { claim: 'School Act: home education division, s.12, s.13 registration by September 30, s.13(3) services, s.3(3)(b).', url: 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96412_02' },
      { claim: 'School Act s.1: definitions of online learning and online learning school.', url: 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96412_01' },
      { claim: 'School Regulation s.3: evaluation and assessment services, loan of materials, auditing, online learning for Grades 10 to 12, enrolment ending registration.', url: 'https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/265_89' },
      { claim: 'CEMC: only educators can request a school account; up to three weeks to review.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CMS COMC: registration normally by school staff; Independent Students route; in-person Open Writing Centres.', url: 'https://cms.math.ca/competitions/comc/' }
    ],
    rejectedClaims: [
      'Anything from the ministry\'s homeschooling page: www2.gov.bc.ca reset the connection on 22 October 2026 and was not retried, so nothing from it is quoted or summarised.',
      '"Distributed learning" history or terms: not sourced; the page uses the Act\'s current term, online learning.',
      'School Act s.13(4) and s.14: offence and reporting provisions, not reproduced.',
      'The fee wording in Regulation s.3(2): not reproduced (no money content).',
      'Funding of any kind for BC home education: not discussed (no funding advice).',
      'That our classes earn BC credits or count as enrolment: refused; the page says we do not grant provincial or high school credits and are not a school.',
      'COMC 2027 dates: not yet published, so none are printed.',
      'Any affiliation with the BC ministry, a school district, an independent school, CEMC or the CMS: none.'
    ]
  }
};
