'use strict';
// Modern Age Coders vs Spirit of Math (ag- comparison door; Canada cluster Plan 2, row 88).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: selective after-school enrichment for students already at B+ or higher, versus open enrolment placed by a
// first class. Not a ranking: Spirit of Math is described only by its own site.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src/modern-age-coders-vs-spirit-of-math/):
//  - spiritofmath.com/spirit-of-math-program/ (program.txt, fetched today): "an advanced after-school mathematics school for
//    high-performing students"; "Through weekly classes for students from Kindergarten to Grade 11"; "Our selective 39-week
//    program is designed for students who consistently perform at a B+ level or higher"; "Each 90-minute class integrates
//    the elements of our approach: drills, core curriculum, problem solving, and collaborative group work."; "Repetition
//    builds fluency."; teachers "receive more than 100 hours of initial training"; "Spirit of Math is offered at campuses
//    across Canada and internationally."
//  - spiritofmath.com/fibonaccivirtual/ (fib.txt, fetched today): "Our online after-school program is designed to challenge
//    and inspire students who are already excelling in mathematics"; "Designed in Canada specifically for students who are
//    already excelling in math and ready for more."; "Attend from anywhere, all you need is a computer and a love for
//    math."; "Students work both independently and collaboratively". The page does not say the online classes are live, so
//    this page does not say so either.
//  - spiritofmath.com/elite-contest-coaching/ (elite.txt, fetched today): "Students must apply and complete an entrance
//    competition."; "Only the top 12-16 students per level are selected."; "Online test with 12 short answer questions";
//    report card for Grades 9 to 12 "minimum 92% or A+ in math"; Grades 3 to 12 (paraphrased, the source uses an en dash).
//  - spiritofmath.com returned HTTP 429 on 22 October 2026 for /, /campus-locator/, /spirit-of-technology/ and /contests/, so
//    fetching from that host STOPPED (see FETCH-NOTE.txt). The following come from the same-day raw copies made by the
//    research pass (../competitors/som_*.txt, spiritofmath_home.txt, fetched 22 October 2026, copied into this folder):
//    campus locator "Spirit of Math in-person campuses are in over 30 locations across Canada.", "schedule an assessment
//    class", "Your child should have a B+ or higher average grade."; about/home FAQ "every student begins with a free
//    placement interview", "Students attend one weekly class and complete focused homework.", "Classes meet once a week,
//    ranging from 45 minutes in Kindergarten to 120 minutes for high school students.", "Students complete tests,
//    assignments, and a final exam each year"; home "We selectively admit high-performing students"; technology "Spirit of
//    Technology is offered in select Spirit of Math campuses.", "Python, JavaScript, and Arduino"; contests "Now in its 27th
//    year", "no Spirit of Math enrollment required for most contests".
//  Not used: founders' and staff names, named host schools in the campus list, honour-roll percentages, contest wins,
//  "Canada's Largest", "5,000+ contest placements", testimonials. No price is published on any page read.
// Our own material, labelled on the page: the digit-sum worked example (our problem; the Python check was run under
// CPython 3.13 on 22 October 2026 and prints 15, 54 and 1), the arithmetic 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 = 54 and
// 55 - 1 = 54, the criteria table's Modern Age Coders column, and the decision steps.
// Lesson family: systematic counting, and checking a shortcut against a constraint.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CHECK = `# Our check, written after the reasoning, not instead of it
def count_digit_sum(target):
    count = 0
    for n in range(100, 1000):
        if sum(int(d) for d in str(n)) == target:
            count += 1
    return count

print(count_digit_sum(5))    # the warm-up
print(count_digit_sum(10))   # the real question
print(count_digit_sum(27))   # only 999 works`;

const CHECK_OUT = `15
54
1`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Spirit of Math and Modern Age Coders compared from Spirit of Math\'s own pages: entry, the 39-week year, online options, contests, and who each suits.' },
  slug: 'modern-age-coders-vs-spirit-of-math',
  code: 'macs',
  accent: '#1B5245',
  accentRationale: 'Spirit of Math comparison, Canada: a deep pine teal #1B5245, allocated for row 88 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 8.47 on the paper #FBF8F2, 7.96 on #F5F1E8 and 7.29 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Modern Age Coders vs Spirit of Math',
  title: 'Modern Age Coders vs Spirit of Math: 2026 Comparison',
  description: 'Spirit of Math admits students at B+ or higher; we place every student by a free first class. Entry, format, contests and fit, from Spirit of Math\'s own pages.',
  ogDescription: 'Spirit of Math is selective after-school math enrichment for high performers. Modern Age Coders teaches math and coding live online with open enrolment. A fair comparison from each side\'s own pages.',
  twitterDescription: 'Spirit of Math or open-enrolment live math classes: a comparison from Spirit of Math\'s own pages, October 2026.',
  pageName: 'Modern Age Coders vs Spirit of Math',
  webPageDescription: 'A comparison for Canadian parents of Spirit of Math, a selective after-school mathematics school, and Modern Age Coders, a live online math and coding school with open enrolment, built from each one\'s own published pages.',
  courseDescription: 'Live online mathematics for students across Canada, from elementary number sense to CEMC contest problems and Grade 12 university math, in a batch or one to one, open to every level.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Modern Age Coders vs Spirit of Math',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#criteria', label: 'Side by side' },
    { href: '#entry', label: 'Entry' },
    { href: '#year', label: 'The year' },
    { href: '#example', label: 'Worked example' },
    { href: '#fit', label: 'Who it suits' }
  ],
  eyebrow: 'Canada &middot; Comparison &middot; After-school math',
  h1: 'Modern Age Coders vs Spirit of Math',
  lede: 'Spirit of Math and Modern Age Coders both want children to think hard about mathematics rather than memorise steps. Where they part company is the door. Spirit of Math describes itself as a selective school for high-performing students, with a B+ average as the entry bar and an assessment before a place is offered. Modern Age Coders has no grade requirement: any student can join, and the first class is used to place them. This page compares the two on entry, format, the shape of the year, contests and coding, using Spirit of Math\'s own pages as read in October 2026, and it says where Spirit of Math is the more natural home for a child.',
  secondaryCta: { href: '#example', label: 'Try the worked example' },
  wa: 'Hello Modern Age Coders, we are looking at Spirit of Math and at your live math classes for our child in Canada. Could we book a free first class?',
  heroNote: 'Live math and coding since 2020 &middot; 10,000+ students &middot; no link of any kind with Spirit of Math',
  spec: [
    ['Spirit of Math', 'Selective, B+ or higher'],
    ['Its grades', 'Kindergarten to Grade 11'],
    ['Its year', '39 weeks, one class a week'],
    ['Modern Age Coders', 'Open to every level'],
    ['Our ages', '6 to 67'],
    ['Our week', 'Two live classes'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Spirit of Math is a selective after-school math program for Kindergarten to Grade 11 students who perform at a B+ level or higher, taught at campuses across Canada and online. Modern Age Coders teaches math live online with open enrolment, in a batch or one to one, for ages 6 to 67, in courses such as Waterloo Math Contests: Gauss to Euclid.',

  picks: {
    eyebrow: 'Courses families compare with Spirit of Math',
    h2: 'Three courses for a child who wants harder math',
    lede: 'None of the three asks for a report card. Each starts by finding out what the student can already reason through.',
    items: [
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'MACS / 01', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Grades 7 to 12. Problem solving for the CEMC contests, with original practice problems and timed papers.' },
      { course: 'middle-school-math-competitions-course', code: 'MACS / 02', title: 'Middle School Math Competitions', note: 'Ages 10 to 14. Contest-style reasoning for students who find school math too easy.' },
      { course: 'maths-through-coding', code: 'MACS / 03', title: 'Math Through Coding', note: 'Ages 10 to 15. Algebra, patterns and probability explored by writing small Python programs.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Side by side',
      h2: 'Spirit of Math and Modern Age Coders on the questions parents ask',
      lede: 'Each Spirit of Math cell is a quotation from, or a close paraphrase of, spiritofmath.com as it stood on 22 October 2026. Where its pages give different figures, the table shows the one it publishes in its FAQ and names the other.',
      body: [
        { kind: 'table', caption: 'Spirit of Math as spiritofmath.com described it on 22 October 2026, beside Modern Age Coders as we describe ourselves', head: ['Point', 'Spirit of Math', 'Modern Age Coders'], rows: [
          ['What it is', '"an advanced after-school mathematics school for high-performing students"', 'A live online school for math and coding'],
          ['Who can join', '"Our selective 39-week program is designed for students who consistently perform at a B+ level or higher"', 'Any student; no grade or mark requirement'],
          ['Before a place', 'For in-person classes, families apply and "schedule an assessment class"; its FAQ says every student begins with a free placement interview', 'A free first class that also places the student'],
          ['Grades or ages', 'Weekly classes "for students from Kindergarten to Grade 11"', 'Ages 6 to 67, from early number sense to university math'],
          ['Where', '"Spirit of Math in-person campuses are in over 30 locations across Canada."; also an online campus, Fibonacci Virtual Campus', 'Online only, anywhere in Canada'],
          ['Class length and frequency', 'Its FAQ: "Classes meet once a week, ranging from 45 minutes in Kindergarten to 120 minutes for high school students." Its program page describes a 90-minute class', 'Two live classes a week, eight a month'],
          ['Live or recorded', 'In-person campuses are taught in the room. The online page says students "work both independently and collaboratively" and does not say whether classes are live', 'Every class is live with a teacher'],
          ['Class size', 'Not stated for regular classes. Contest team: "Only the top 12-16 students per level are selected."', 'A batch of 15 to 20, or one to one'],
          ['Curriculum approach', '"drills, core curriculum, problem solving, and collaborative group work" in each class, with homework, tests and a final exam each year', 'One idea at a time, reasoned aloud, then practised on original problems written by our teachers'],
          ['Coding', '"Spirit of Technology is offered in select Spirit of Math campuses."', 'Coding courses from Scratch to C++ alongside math, for every student'],
          ['Prices published', 'No price on the pages we read', 'Yes, a monthly fee on our pricing and course pages']
        ] },
        { kind: 'source', html: 'Sources: Spirit of Math <a class="ag-inline-link" href="https://spiritofmath.com/spirit-of-math-program/" rel="noopener" target="_blank">program page</a>, <a class="ag-inline-link" href="https://spiritofmath.com/fibonaccivirtual/" rel="noopener" target="_blank">Fibonacci Virtual Campus</a>, <a class="ag-inline-link" href="https://spiritofmath.com/elite-contest-coaching/" rel="noopener" target="_blank">contest team</a> and <a class="ag-inline-link" href="https://spiritofmath.com/campus-locator/" rel="noopener" target="_blank">campus locator</a>, read 22 October 2026. Modern Age Coders has no tie to Spirit of Math, which has not reviewed or approved this page. Its programs, entry rules and campuses can change; confirm them with Spirit of Math directly.' },
        { kind: 'two', mt: true,
          leftH3: 'The one difference that drives the rest',
          left: [
            'Spirit of Math chooses its students. Its home page puts it plainly: "We selectively admit high-performing students". That choice shapes everything else: the pace can be fast because everyone in the room has already shown they can keep up, and the peer group is part of what families are buying.',
            'We do not choose. A student who is struggling with fractions and a student who is bored by Grade 8 algebra can both join; what changes is the course and the group they are placed in. The pace is set by the group, and a one to one plan exists for the student who fits no group.'
          ],
          rightH3: 'About fees',
          right: [
            'None of the Spirit of Math pages we read lists tuition. If cost matters to the decision, ask your nearest campus for the full figure for the 39-week program.',
            'Our fee is a monthly figure for eight live classes, shown lower on this page in the currency of your region. Families pay one month at a time, so there is no year to commit to up front.'
          ] }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'Getting in',
      h2: 'How entry works at Spirit of Math, and how it works here',
      lede: 'For many families the deciding question is not which program is stronger but whether their child can get in. Spirit of Math publishes its bar clearly. Ours is the absence of one.',
      body: [
        { kind: 'table', caption: 'Entry routes as Spirit of Math describes them (read 22 October 2026)', head: ['Route', 'What Spirit of Math asks for'], rows: [
          ['Regular in-person program', 'Choose a campus, apply and "schedule an assessment class". "Your child should have a B+ or higher average grade."'],
          ['Placement', 'Its FAQ says "every student begins with a free placement interview", to place them at the right level'],
          ['Fibonacci Virtual Campus', 'Designed for students "already excelling in mathematics"; "Attend from anywhere, all you need is a computer and a love for math."'],
          ['Competitive Contest Team', '"Students must apply and complete an entrance competition." The entrance test is an "Online test with 12 short answer questions".'],
          ['Contest Team, Grades 9 to 12', 'A report card with a "minimum 92% or A+ in math", alongside the other application pieces'],
          ['Contest Team places', '"Only the top 12-16 students per level are selected."']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>With us, step one is a free first class.</b> The teacher gives the student a few problems of rising difficulty and listens to how they reason, not only to the answers.',
          '<b>Step two is a placement.</b> The teacher suggests a course and a group: for example, elementary math for a Grade 4 student who needs number sense, or contest problem solving for a Grade 7 student who already finds school math easy.',
          '<b>Step three is the first month.</b> If the group turns out to be too fast or too slow, we move the student. Nobody sits an entrance test, and nobody needs a report card.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a selective door suits some children',
          left: [
            'A child who is always the first to finish in class can find it a relief to be among peers who also want the hard question. Selection guarantees that kind of room.',
            'The contest team takes this further, with an application, an entrance competition and a small number of places per level. For a student who wants that challenge and wins a place, it is a clear, demanding path.'
          ],
          rightH3: 'Why an open door suits others',
          right: [
            'Plenty of students who would enjoy thinking-first mathematics do not have a B+ average yet. Some are bright but bored, some had a weak year, some are new to the Canadian curriculum. An open door lets them start now.',
            'Open enrolment also suits a student who is past Grade 11, or an adult returning to math, since our courses carry on to university-level topics.'
          ] }
      ]
    },
    {
      id: 'year', tint: 'tint', eyebrow: 'The shape of the year',
      h2: 'A Spirit of Math year, and a year of live classes with us',
      lede: 'The two programs organise time differently. Spirit of Math runs a structured school-style year. We run month by month around a course.',
      body: [
        { kind: 'two',
          leftH3: 'At Spirit of Math, by its own account',
          left: [
            'The program runs for 39 weeks. Students attend once a week; the FAQ gives class lengths from 45 minutes in Kindergarten up to 120 minutes for high school, and the program page describes a 90-minute class. Each class combines four elements: "drills, core curriculum, problem solving, and collaborative group work."',
            'Drills are deliberate. Spirit of Math writes that "Repetition builds fluency." There is weekly homework, and the FAQ says "Students complete tests, assignments, and a final exam each year". Teachers, the program page says, "receive more than 100 hours of initial training".'
          ],
          rightH3: 'With Modern Age Coders',
          right: [
            'Students meet their teacher live twice a week, eight classes a month, all year round with no fixed term. A class usually opens with a problem from last time, introduces one new idea, and spends most of the hour on students explaining their thinking.',
            'Between classes there is a short set of practice problems, and progress shows in the problems a student can now explain from start to finish. A family can stop after any month, or move from a group to one to one.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Fluency', p: 'Spirit of Math builds speed with drills. We build it inside problems, so the arithmetic always serves a question.' },
          { h3: 'Assessment', p: 'Spirit of Math sets tests and a final exam. Our teachers judge progress by asking the student to explain a solution aloud.' },
          { h3: 'Commitment', p: 'Spirit of Math is a 39-week program. Ours runs a month at a time.' }
        ] },
        { kind: 'p', mt: true, html: 'Spirit of Math also runs online: its Fibonacci Virtual Campus, which it calls an online after-school program "Designed in Canada specifically for students who are already excelling in math and ready for more." Our classes are online by design, so the comparison is really between two online options for families without a nearby campus.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Our teaching in one problem: count carefully, then test the shortcut',
      lede: 'This is our own problem, written for our classes. It is not from Spirit of Math, CEMC or any contest. We picked it because it rewards the habit we teach most: reason step by step first, look for a shortcut second, and always check the shortcut against the rules of the problem.',
      body: [
        { kind: 'p', html: '<b>Warm-up.</b> How many three-digit numbers have digits that add up to 5? <b>The real question.</b> How many three-digit numbers have digits that add up to 10?' },
        { kind: 'ol', mt: true, items: [
          '<b>List by the first digit.</b> For a sum of 5, the hundreds digit can be 1, 2, 3, 4 or 5. If it is 1, the other two digits add to 4, which gives 5 pairs (0 and 4, 1 and 3, 2 and 2, 3 and 1, 4 and 0). If it is 2, they add to 3: 4 pairs. Then 3, 2 and 1 pairs. The total is 5 + 4 + 3 + 2 + 1 = 15.',
          '<b>Spot the pattern.</b> Two digits that add to k can be chosen in k + 1 ways, as long as neither digit has to exceed 9. The student should say that condition out loud, because it is where the real question bites.',
          '<b>Apply it to 10.</b> The hundreds digit runs from 1 to 9, so the other two digits add to 9, 8, 7 and so on down to 1. Each sum is 9 or less, so neither digit can exceed 9, and the counts are 10, 9, 8, 7, 6, 5, 4, 3 and 2. The total is 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 = 54.',
          '<b>Test a shortcut.</b> A student who knows a counting formula may turn the problem into sharing 9 among three places and get 55. Our question back: does every one of those 55 make a real three-digit number? One does not. It is the one that puts all 9 into the hundreds place, which would make the hundreds digit 10. So 55 - 1 = 54, and the two methods agree.',
          '<b>Check with a program.</b> Only now does the computer come in, to confirm the reasoning rather than replace it.'
        ] },
        { kind: 'code', mt: true, label: 'Our Python check', lang: 'python', code: CHECK, note: 'We ran this on 22 October 2026. The third line is a sanity test: only 999 has digits adding to 27.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: CHECK_OUT },
        { kind: 'two', mt: true,
          leftH3: 'What the teacher is listening for',
          left: [
            'Not the number 54. The teacher wants to hear the student say why the warm-up pattern still holds for 10, and to hear them find the one impossible case in the shortcut without being told it exists.',
            'A student who reaches 55 and stops has learned a formula. A student who asks whether all 55 are allowed has learned to check their own work, which matters far more in a contest and in a math class.'
          ],
          rightH3: 'Where it goes next',
          right: [
            'Next class: digits that add up to 20. Now some pairs would need a digit above 9, so the simple pattern breaks and the student has to adapt it.',
            'For a contest student, the same idea leads into counting with restrictions, a theme that runs through many CEMC problems. We teach it with problems we write, and send students to CEMC\'s free archive for past papers.'
          ] }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests and coding',
      h2: 'Math contests, and where coding fits in each program',
      lede: 'Families drawn to Spirit of Math often care about contests. Both programs touch them, in different ways.',
      body: [
        { kind: 'table', caption: 'Contest and coding options (Spirit of Math column from its own pages, read 22 October 2026)', head: ['', 'Spirit of Math', 'Modern Age Coders'], rows: [
          ['Its own contest', 'The International Spirit of Math Contest, "Now in its 27th year", for Grades 1 to 8', 'None. We prepare students for contests run by others'],
          ['Hosted contests', 'Its campuses host other contests during the year; it says "no Spirit of Math enrollment required for most contests"', 'We do not host contests; students write CEMC contests through their schools'],
          ['Contest training', 'A selective Competitive Contest Team for Grades 3 to 12, by application and entrance competition', 'Open-entry contest courses, including Gauss to Euclid preparation for the CEMC contests'],
          ['Coding', 'Spirit of Technology in select campuses, with "Python, JavaScript, and Arduino"', 'Live coding courses for every age, plus preparation for the Canadian Computing Competition']
        ] },
        { kind: 'p', mt: true, html: 'We are not connected with CEMC or the University of Waterloo. Students write the Waterloo contests at school, and our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC contests page</a> and <a class="ag-inline-link" href="/gauss-contest-preparation">Gauss preparation guide</a> explain how that works.' }
      ]
    },
    {
      id: 'fit', tint: 'deep', eyebrow: 'Who each suits',
      h2: 'When Spirit of Math fits, and when open enrolment fits',
      lede: 'Both are serious about mathematical thinking. The right choice depends on the child, the family\'s week, and how the child responds to selection.',
      body: [
        { kind: 'two',
          leftH3: 'Choose Spirit of Math when',
          left: [
            'Your child already holds a B+ or higher average, enjoys being stretched, and would thrive in a room chosen for high performers.',
            'There is a campus near you and you want an in-person class with a structured 39-week year, drills, homework and exams, much like an extra school subject.',
            'Your child wants the Competitive Contest Team experience, with a selective group and a demanding application.'
          ],
          rightH3: 'Choose open enrolment with us when',
          right: [
            'Your child is curious and capable but not yet at B+, or you would rather they started without an entrance step.',
            'You want two shorter live sessions a week rather than one long one, with no campus to travel to and no full year to commit to.',
            'Your child is past Grade 11, wants coding and math from one teacher team, or needs one to one help aligned with a Canadian school course such as MHF4U or Math 30-1.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Strong and selected', p: 'A B+ student who wants a selective peer group: Spirit of Math is built for exactly this.' },
          { h3: 'Strong, not yet selected', p: 'A capable student below the bar, or new to Canada: open enrolment lets them begin now.' },
          { h3: 'Beyond Grade 11', p: 'Spirit of Math\'s weekly program stops at Grade 11. Our courses carry on to Grade 12 and university math.' }
        ] }
      ]
    },
    {
      id: 'decide', tint: 'tint', eyebrow: 'Deciding',
      h2: 'Five questions to settle the choice',
      lede: 'Work through these with your child. The answers usually point one way.',
      body: [
        { kind: 'ol', items: [
          '<b>Does your child meet the bar today?</b> Spirit of Math asks for a B+ or higher average. If not, an open-entry class lets them start without waiting for a better report card.',
          '<b>How does your child react to selection?</b> Some children are lifted by earning a place; others are put off by a test. You know which.',
          '<b>What does your week allow?</b> One longer weekly class at a campus, or two live sessions from home. Count the drive.',
          '<b>Is coding on the list?</b> Spirit of Technology runs at select campuses. Our coding courses run alongside math for every student.',
          '<b>Try before deciding.</b> Spirit of Math begins with a placement interview and an assessment class; our first class is free. Doing both is the clearest test.'
        ] },
        { kind: 'p', mt: true, html: 'For more on the online math side, see our <a class="ag-inline-link" href="/online-math-tutor-canada">online math tutor page for Canada</a>, and for a closer look at a live lesson, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'How we place a student who has never sat an entrance test',
    lede: 'Our own four placement stages, judged in the first class.',
    table: { caption: 'Placement stages for problem solving in math (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Calculator', 'Gets answers to routine questions but cannot yet say why a method works'],
      ['2. Explainer', 'Explains a familiar method in their own words and catches some of their own slips'],
      ['3. Explorer', 'Tries an unfamiliar problem by listing cases or drawing, without being shown how'],
      ['4. Checker', 'Finds a shortcut, then tests it against the rules of the problem before trusting it']
    ] },
    left: { h3: 'For parents', ps: [
      'A child with a B+ average can sit at any of these stages. Marks show how well a student handles school questions; the stages show how they handle a question they have never seen.',
      'Most growth happens between stages 2 and 3, when a student first accepts that being stuck is part of the work.'
    ] },
    right: { h3: 'For students', ps: [
      'When you are stuck, list small cases. Patterns hide in lists.',
      'When you find a shortcut, ask what it assumes. Then check that assumption.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math and contest courses, open to every student',
    lede: 'Live online, with a regular teacher, for students in every province and at every level; each can be taken in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 1 to 8', courses: [
        { code: 'MACS / FND / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Number sense and reasoning for Grades 1 to 5.' },
        { code: 'MACS / FND / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Calculation through understanding, not tricks.' },
        { code: 'MACS / FND / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry, done thoroughly.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'Grades 7 to 12', courses: [
        { code: 'MACS / STR / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra every later course leans on.' },
        { code: 'MACS / STR / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Olympiad-style problems for keen solvers.' },
        { code: 'MACS / STR / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus, Grades 9 to 12.' }
      ] },
      { num: 'III', h3: 'Canadian Grade 12 and beyond', sub: 'Senior years', courses: [
        { code: 'MACS / SR / 01', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 university math', blurb: 'Alongside MHF4U and MCV4U at school.' },
        { code: 'MACS / SR / 02', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Western Canada Grade 12 math', blurb: 'Alongside Pre-calculus 12 or Math 30-1.' },
        { code: 'MACS / SR / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'For math students who also want to code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Two live math classes a week, timed for your province',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon or evening, set in your own province\'s time.' },
      { time: 'Weekends', l: 'Morning classes for students with busy weeknights.' },
      { time: '1-on-1', l: 'A personal slot, paced to one student\'s school course or contest.' }
    ],
    cells: [
      { h3: 'Open entry', p: 'No grade bar, no entrance test.' },
      { h3: 'Reason aloud', p: 'Students explain every step they take.' },
      { h3: 'Our problems', p: 'Original practice sets, never copied papers.' },
      { h3: 'Month by month', p: 'No 39-week commitment up front.' },
      { h3: 'Math and coding', p: 'Both taught by the same school.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty together, or one alone.' }
    ]
  },

  projectsH2: 'What our students build when math meets code',
  projectsLede: 'Some of our math students go on to build projects in our coding courses. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Parents\' reviews from our Google profile, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee for eight live math classes, displayed below in your region\'s currency. There is no entrance fee, no assessment fee and no year-long contract.',
    free: ['A free first class', 'A placement by the teacher', 'Nothing to pay to book'],
    group: ['Fifteen to twenty students per batch', 'One teacher for the whole course', 'Pick a batch time that suits your week', 'Paid one month at a time'],
    one: ['Just the student and the teacher', 'Paced to their school course', 'Contest or school focus, your choice']
  },

  faq: {
    eyebrow: 'Questions from Canadian parents',
    h2: 'What parents ask about Spirit of Math and about us',
    items: [
      { q: 'Is Modern Age Coders connected to Spirit of Math?', a: 'No. We are a separate live online school with no tie to Spirit of Math Schools. What this page says about Spirit of Math comes from its own website, read on 22 October 2026.' },
      { q: 'What grades does a student need for Spirit of Math?', a: 'Spirit of Math says its selective 39-week program is designed for students who consistently perform at a B+ level or higher, and its campus locator says a child should have a B+ or higher average grade. Families apply and schedule an assessment class.' },
      { q: 'Is there a Spirit of Math alternative without an entrance requirement?', a: 'Modern Age Coders has no grade requirement and no entrance test. Every student starts with a free first class, which the teacher uses to place them in a suitable course and group, or in one to one lessons.' },
      { q: 'Does Spirit of Math teach online?', a: 'Yes. Spirit of Math runs the Fibonacci Virtual Campus, which it describes as an online after-school program for students who are already excelling in mathematics. It also has in-person campuses in over 30 locations across Canada, by its own count.' },
      { q: 'How long are Spirit of Math classes?', a: 'Its FAQ says classes meet once a week, from 45 minutes in Kindergarten to 120 minutes for high school students, and its program page describes a 90-minute class. Our live classes run twice a week.' },
      { q: 'How much does Spirit of Math cost?', a: 'Spirit of Math does not list tuition on the pages we read in October 2026, so ask your nearest campus for the yearly figure. Our own fee appears on our pricing page, in the currency of your region.' },
      { q: 'What grades does Spirit of Math cover?', a: 'Its weekly program runs from Kindergarten to Grade 11, and its contest team takes students from Grade 3 to Grade 12. Our math courses run from Grade 1 to university level, for ages 6 to 67.' },
      { q: 'Does Spirit of Math teach coding?', a: 'Spirit of Math says Spirit of Technology is offered in select campuses, with Python, JavaScript and Arduino. Coding is a core part of what we teach, from Scratch for young children to C++ for contest students.' },
      { q: 'Can my child prepare for the Waterloo math contests with you?', a: 'Yes. Our Waterloo Math Contests course prepares Grades 7 to 12 for Gauss, Pascal, Cayley, Fermat and Euclid with original problems. We are not connected with CEMC; students write the contests through their schools.' },
      { q: 'When are your live math classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set the time in your province\'s own time zone.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families thinking about math enrichment.',
    items: [
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Live math help for any grade in any province.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests', p: 'How the Waterloo math contests work.' },
      { href: '/gauss-contest-preparation', label: 'Gauss preparation', p: 'The Grade 7 and 8 contest, explained.' },
      { href: '/pascal-contest-preparation', label: 'Pascal preparation', p: 'The Grade 9 contest, with our practice set.' },
      { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U tutor', p: 'Help alongside Ontario Advanced Functions.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for families in Canada.' },
      { href: '/modern-age-coders-vs-kumon', label: 'Modern Age Coders vs Kumon', p: 'Another comparison, worksheets against live teaching.' },
      { href: '/modern-age-coders-vs-mathnasium', label: 'Modern Age Coders vs Mathnasium', p: 'A comparison with a franchise math centre.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'The same case-by-case habit, applied to code.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The teacher brings three problems, each a little harder than the last, and asks your child to talk through them. There is nothing to pass. By the end you will know which course and group would suit them.',
    readFirst: 'Want to see a lesson plan before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> lays one out, and every syllabus is listed on the <a class="ag-inline-link" href="/courses">courses page</a>.',
    note: 'Classes run on live video with teachers based in India; there is no campus or office in Canada. A WhatsApp message is the fastest way to ask us anything.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Math in Canada', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests' },
        { href: '/gauss-contest-preparation', label: 'Gauss preparation' },
        { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U tutor' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Check the shortcut'
  },

  personalityCss: `
.ag-root.ag-macs .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-macs .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-macs .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-macs .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-macs .ag-band-head h3 { letter-spacing: 0.002em; }
.ag-root.ag-macs .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'Spirit of Math\'s own pages, read raw on 22 October 2026 (program, Fibonacci Virtual Campus and contest team fetched today; campus locator, technology, contests, about and home from same-day raw copies after a 429): advanced after-school school for high performers, Kindergarten to Grade 11, selective 39-week program at B+ or higher, four elements per class, 90-minute class on the program page and 45 to 120 minutes in the FAQ, over 100 hours of teacher training, over 30 in-person locations in Canada, assessment class, free placement interview, tests and a final exam, online Fibonacci Virtual Campus, contest team by application and entrance competition with 12 to 16 places per level, Spirit of Technology at select campuses, International Spirit of Math Contest in its 27th year.',
    localProject: 'An original counting problem (three-digit numbers whose digits add to 5, then to 10), reasoned in five numbered steps with the shortcut tested against the digit limit (10 + 9 + ... + 2 = 54, and 55 - 1 = 54), then checked by a Python program we ran on 22 October 2026 (prints 15, 54, 1). Plus our four placement stages and five decision questions. Lesson family: systematic counting and testing a shortcut.',
    requiredMentions: ['Our selective 39-week program is designed for students who consistently perform at a B+ level or higher', 'drills, core curriculum, problem solving, and collaborative group work', 'Your child should have a B+ or higher average grade.', 'Only the top 12-16 students per level are selected.', 'Online test with 12 short answer questions', 'ranging from 45 minutes in Kindergarten to 120 minutes for high school students', 'Spirit of Technology is offered in select Spirit of Math campuses.', 'no Spirit of Math enrollment required for most contests', '55 - 1 = 54', 'count_digit_sum'],
    sources: [
      { claim: 'Selective 39-week program, B+ or higher, Kindergarten to Grade 11, four elements per class, teacher training, campuses across Canada and internationally.', url: 'https://spiritofmath.com/spirit-of-math-program/' },
      { claim: 'Fibonacci Virtual Campus, an online after-school program for students already excelling in math.', url: 'https://spiritofmath.com/fibonaccivirtual/' },
      { claim: 'Contest team: application, entrance competition, 12 short-answer online test, report card minimum for Grades 9 to 12, top 12 to 16 per level.', url: 'https://spiritofmath.com/elite-contest-coaching/' },
      { claim: 'Over 30 in-person locations in Canada; assessment class; B+ or higher average.', url: 'https://spiritofmath.com/campus-locator/' },
      { claim: 'Spirit of Technology at select campuses; Python, JavaScript and Arduino.', url: 'https://spiritofmath.com/spirit-of-technology/' },
      { claim: 'International Spirit of Math Contest in its 27th year; most hosted contests need no enrolment.', url: 'https://spiritofmath.com/contests/' }
    ],
    rejectedClaims: [
      'Spirit of Math tuition from any third-party source: not used; its own pages publish none.',
      'That Fibonacci Virtual Campus classes are live: not stated on its page, so not claimed.',
      'Spirit of Math contest results, honour-roll percentages, "Canada\'s Largest" and contest-placement counts: not reproduced; no ratings or results of a competitor.',
      'Names of Spirit of Math founders, staff or host schools listed on the campus locator: not reproduced.',
      'Any further fetch from spiritofmath.com after the HTTP 429: none made; same-day research copies used instead.',
      'Any claim that our classes are better or that they lead to contest results: refused.',
      'Any affiliation with Spirit of Math or with CEMC: none, and the page says so.'
    ]
  }
};
