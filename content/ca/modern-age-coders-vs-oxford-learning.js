'use strict';
// Modern Age Coders vs Oxford Learning (ag- comparison door; Canada cluster Plan 2, row 90).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a tutoring centre network that coaches learning skills across every school subject, starting from an
// assessment, versus a school that goes deep in two subjects, math and coding. Also answers "oxford learning cost"
// using only Oxford Learning's own words, with no figure (it publishes none) and no calculation of ours on its numbers.
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src/modern-age-coders-vs-oxford-learning/).
// Every page returned 200 with full content; the "challenge-platform" string in the HTML is Cloudflare's passive
// beacon script, not a challenge page. No further Oxford pages were fetched after these ten.
//  - oxfordlearning.com home (home.txt): "We Have Over 130 Centres Across Canada!" (also approach, math, high school);
//    "Celebrating Over 40 Years of Helping Students Get Better Grades!"; subjects from age 3 to Grade 12 (paraphrased; split
//    across tags in the source); program names in the menu (Little Readers, Destination Francais, University and College
//    Success Program, Virtual Table, SAT/ACT and SSAT prep).
//  - /online-tutoring-at-home-with-virtual-table/ (online.txt): "students work with tutors via screen-sharing technology.
//    Sessions are not pre-recorded"; "students work from workbook materials that meet their specific learning needs";
//    "we only use learning materials developed by our curriculum experts"; "a private link and class password is emailed
//    to parents the day of the class"; this page says "We Have Over 100 Centres Across Canada!" (the two counts are each
//    attributed to their own page, never reconciled by us).
//  - /tutoring-faqs/ (faqs.txt): "program price will depend on a variety of factors, including which program they are
//    enrolled in and how often they attend class."; "All Oxford Learning locations charge a competitive rate that varies
//    based on factors such as city and province."; after-school hours 4 pm to 8 pm Monday to Thursday and Saturday mornings
//    (paraphrased; the source uses an en dash); "Our regular programs run at small tables with three students to one
//    teacher."; workshops "usually no more than 8-10 students per session"; "Oxford Learning has a 30-day cancellation
//    policy."; "we recommend about 100 hours of instruction"; "If your child attends two 1-hour classes a week, it adds up to
//    about 8 hours a month of instruction."; "Generally speaking, it takes about a year to reach 100 hours." (their
//    arithmetic, quoted as theirs; we add none).
//  - /pricing/ (pricing.txt): "offer a competitive hourly rate consistent with high-quality tutoring providers
//    industry-wide"; "Monthly Payment Plans Available Through iFinance!"; "May not be available at all locations.";
//    "Pricing may vary slightly from coast to coast." No figure on the page.
//  - /how-dynamic-assessment-works/ (dynamic.txt): "The test can take up to two hours for older students"; "not only where a
//    student stands academically, but also why a student is at that level".
//  - /the-oxford-learning-difference/ (difference.txt): its method names "Cognitive Learning" and "Interactive Coaching".
//    Its "only after-school tutoring facility" claim is not repeated.
//  - /subject/math-tutoring/ (math.txt): "math tutoring programs for every age and grade level, from Grade 1 to Grade 12".
//  No coding or programming program appears on any page read (grep for coding, programming, python: no match).
//  Not used: testimonials and the named child in them, outcome promises about grades, "unmatched value".
// Our own material, labelled on the page: the (x + 3) squared misconception diagnosis and its three follow-up questions,
// the Python number test (run under CPython 3.13 on 22 October 2026; x = 0 gives 9, 9, 9, so zero cannot catch the error;
// x = 1 gives 16 against 10), the area-model explanation, the criteria table's Modern Age Coders column and the steps.
// Lesson family: diagnosing a misconception by testing a rule with numbers.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TEST = `# Our check: does (x + 3)**2 equal x**2 + 9? Test the rule with numbers.
for x in [0, 1, 2, 5, -3]:
    left = (x + 3) ** 2          # the expression itself
    wrong = x ** 2 + 9           # the student's rule
    right = x ** 2 + 6 * x + 9   # the expanded form
    print(x, left, wrong, right)`;

const TEST_OUT = `0 9 9 9
1 16 10 16
2 25 13 25
5 64 34 64
-3 0 18 0`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Oxford Learning and Modern Age Coders compared from Oxford Learning\'s own pages: the assessment, three-to-one tables, what it says about cost, and who each suits.' },
  slug: 'modern-age-coders-vs-oxford-learning',
  code: 'maco',
  accent: '#36298A',
  accentRationale: 'Oxford Learning comparison, Canada: a deep ink violet #36298A, allocated for row 90 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 10.76 on the paper #FBF8F2, 10.12 on #F5F1E8 and 9.26 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Modern Age Coders vs Oxford Learning',
  title: 'Modern Age Coders vs Oxford Learning: Cost and Fit 2026',
  description: 'Oxford Learning or a live math and coding school? Its assessment, 3-to-1 tables, what it says about cost and who each suits, from Oxford Learning\'s own pages.',
  ogDescription: 'Oxford Learning is a tutoring centre network that coaches learning skills across school subjects. Modern Age Coders teaches math and coding in depth, live online. Compared from each side\'s own pages, cost included.',
  twitterDescription: 'Oxford Learning or Modern Age Coders: a fair comparison from Oxford Learning\'s own pages, including what it says about cost.',
  pageName: 'Modern Age Coders vs Oxford Learning',
  webPageDescription: 'A comparison for Canadian parents of Oxford Learning, a tutoring centre network, and Modern Age Coders, a live online math and coding school, built from Oxford Learning\'s published pages and our own.',
  courseDescription: 'Live online mathematics and coding for students across Canada, from elementary number sense and Grade 9 algebra to Grade 12 math and Python, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Modern Age Coders vs Oxford Learning',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#criteria', label: 'Side by side' },
    { href: '#cost', label: 'Cost' },
    { href: '#model', label: 'How it works' },
    { href: '#example', label: 'Worked example' },
    { href: '#fit', label: 'Who it suits' }
  ],
  eyebrow: 'Canada &middot; Comparison &middot; Tutoring and math',
  h1: 'Modern Age Coders vs Oxford Learning',
  lede: 'Oxford Learning and Modern Age Coders answer different questions a parent might be asking. Oxford Learning is a network of tutoring centres across Canada that works on how a child learns: it begins with an assessment, then builds a customised program that can cover math, English, French, science, reading, writing or study skills, mostly at small tables in a centre. Modern Age Coders teaches two subjects, mathematics and coding, live online, and goes as deep in them as the student wants to go. This page compares the two from Oxford Learning\'s own website as read on 22 October 2026, explains what Oxford Learning says about its cost, and says plainly when a centre that covers every subject is the more useful choice.',
  secondaryCta: { href: '#cost', label: 'What Oxford Learning says about cost' },
  wa: 'Hello Modern Age Coders, we are comparing Oxford Learning with your live math classes for our child in Canada. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; independent of Oxford Learning',
  spec: [
    ['Oxford Learning', 'Tutoring centres, plus online'],
    ['Its range', 'Age 3 to Grade 12, and beyond'],
    ['Its subjects', 'Most school subjects'],
    ['Modern Age Coders', 'Live online school'],
    ['Our ages', '6 to 67'],
    ['Our subjects', 'Math and coding'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Oxford Learning is a Canadian tutoring centre network that starts with an assessment and coaches learning skills across many school subjects, usually at tables of three students to one teacher, with live online tutoring too. Modern Age Coders teaches math and coding live online to students aged 6 to 67, one to one or in a batch, in courses such as High School Mathematics.',

  picks: {
    eyebrow: 'For a student whose need is math',
    h2: 'Three math courses families weigh against a tutoring centre',
    lede: 'Each is a full course in one subject rather than general tutoring, taught by a teacher who stays with the student.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'MACO / 01', title: 'High School Mathematics', note: 'Grades 9 to 12. Algebra to calculus, with every rule explained before it is practised.' },
      { course: 'sat-math-prep-course', code: 'MACO / 02', title: 'SAT Math Prep', note: 'For Canadian students applying to universities that ask for the SAT, built on understanding rather than tricks.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'MACO / 03', title: 'IB Mathematics AA and AI', note: 'For students in an IB Diploma school, SL or HL, with help on the internal assessment.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Side by side',
      h2: 'Oxford Learning and Modern Age Coders on the points that decide it',
      lede: 'The Oxford Learning column comes from oxfordlearning.com, quoted or closely paraphrased, read on 22 October 2026. Oxford Learning centres are franchises, so some details, such as hours and fees, vary from centre to centre, as its own pages say.',
      body: [
        { kind: 'table', caption: 'Oxford Learning, from oxfordlearning.com on 22 October 2026, set against Modern Age Coders, from our own pages', head: ['Point', 'Oxford Learning', 'Modern Age Coders'], rows: [
          ['What it is', 'A tutoring network; its home page says "We Have Over 130 Centres Across Canada!"', 'A live online school for math and coding'],
          ['Format', 'In-centre programs, plus Virtual Table online, where "students work with tutors via screen-sharing technology. Sessions are not pre-recorded"', 'Live online classes only'],
          ['Ages and grades', 'Subjects from age 3 to Grade 12, and a University and College Success Program', 'Ages 6 to 67, from Grade 1 math to university topics'],
          ['Subjects', 'Math, English, French, science, reading, writing, study skills, homework help, SAT and ACT, SSAT', 'Mathematics and coding only'],
          ['Where it starts', 'A Dynamic Assessment, which "can take up to two hours for older students"', 'A free first class, which also places the student'],
          ['Group size', '"Our regular programs run at small tables with three students to one teacher." Workshops: "usually no more than 8-10 students per session"', 'Groups of 15 to 20, or a single student'],
          ['Approach', 'Cognitive Learning and Interactive Coaching: learning skills that carry across subjects, with a customised program', 'Subject depth: the reasons behind each method in math, and real programs in code'],
          ['Materials', '"we only use learning materials developed by our curriculum experts"; workbooks in Virtual Table', 'Our own lessons and practice problems, alongside the student\'s school course'],
          ['When', 'Generally after school, 4 pm to 8 pm Monday to Thursday, plus Saturday mornings; varies by centre', 'Weekdays or weekends, at a time set for your province'],
          ['Coding', 'None found on the pages we read', 'Coding courses from age 6, from Scratch to Python, Java and C++'],
          ['Prices published', 'No figure. Its pricing page describes "a competitive hourly rate" that varies', 'Yes: our monthly fee is listed on the pricing page'],
          ['Leaving', '"Oxford Learning has a 30-day cancellation policy."', 'Billed monthly; stop after any month']
        ] },
        { kind: 'source', html: 'Sources: Oxford Learning <a class="ag-inline-link" href="https://oxfordlearning.com/tutoring-faqs/" rel="noopener" target="_blank">tutoring FAQs</a>, <a class="ag-inline-link" href="https://oxfordlearning.com/pricing/" rel="noopener" target="_blank">pricing</a>, <a class="ag-inline-link" href="https://oxfordlearning.com/online-tutoring-at-home-with-virtual-table/" rel="noopener" target="_blank">Virtual Table</a>, <a class="ag-inline-link" href="https://oxfordlearning.com/how-dynamic-assessment-works/" rel="noopener" target="_blank">Dynamic Assessment</a> and <a class="ag-inline-link" href="https://oxfordlearning.com/" rel="noopener" target="_blank">home</a> pages, read 22 October 2026. Modern Age Coders is an independent school with no relationship to Oxford Learning, which has not seen or approved this comparison. One Oxford Learning page gives over 130 centres in Canada and another gives over 100; we print each as its page states it.' },
        { kind: 'two', mt: true,
          leftH3: 'Two different promises',
          left: [
            'Oxford Learning\'s promise is broad: better thinking and learning skills that help in every class. Its assessment looks at concentration, memory and reasoning as well as subject knowledge, and the program that follows can touch several subjects.',
            'Ours is narrow on purpose. We promise nothing about grades, but we do commit to teaching a student mathematics, or coding, properly: why each method works, where it comes from, and how to use it on a problem the student has not seen before.'
          ],
          rightH3: 'Why that is not a contest',
          right: [
            'A child who is behind in reading, disorganised with homework and anxious about tests across the board needs something different from a child who is fine everywhere except quadratics. The first need fits a learning-skills centre; the second fits a subject specialist.',
            'Many families need one in one year and the other later. The sections below are meant to help you tell which need you have now.'
          ] }
      ]
    },
    {
      id: 'cost', tint: 'deep', eyebrow: 'Oxford Learning cost',
      h2: 'What Oxford Learning says about its cost, in its own words',
      lede: 'Parents often search for the cost of Oxford Learning before calling a centre. Oxford Learning does not publish a figure, but its pages say a good deal about how its fees are set. Everything in this table is Oxford Learning\'s wording; we have added no numbers of our own.',
      body: [
        { kind: 'table', caption: 'Oxford Learning on price and commitment (oxfordlearning.com, read 22 October 2026)', head: ['Topic', 'What Oxford Learning says'], rows: [
          ['How fees are set', 'Your child\'s "program price will depend on a variety of factors, including which program they are enrolled in and how often they attend class."'],
          ['Across Canada', '"All Oxford Learning locations charge a competitive rate that varies based on factors such as city and province."'],
          ['The rate', 'All locations "offer a competitive hourly rate consistent with high-quality tutoring providers industry-wide"'],
          ['Variation', '"Pricing may vary slightly from coast to coast."'],
          ['Paying', '"Monthly Payment Plans Available Through iFinance!", with the note "May not be available at all locations."'],
          ['How much teaching it advises', '"we recommend about 100 hours of instruction"'],
          ['Its own example', '"If your child attends two 1-hour classes a week, it adds up to about 8 hours a month of instruction." "Generally speaking, it takes about a year to reach 100 hours."'],
          ['Cancelling', '"Oxford Learning has a 30-day cancellation policy."']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Ask the centre for its hourly rate</b> for the program your child would join, since Oxford Learning says the price depends on the program and how often the student attends.',
          '<b>Ask what the assessment costs</b>, if anything, and whether it is credited against the program.',
          '<b>Ask how many hours a month</b> they would recommend for your child, then ask for the monthly total for that number of hours.',
          '<b>Ask about the 30-day cancellation policy</b> in practice: when notice must be given and what it covers.',
          '<b>Put the monthly total beside ours.</b> Our fee is one figure per month for eight live classes; it appears in the fees section below, in your region\'s currency, with no assessment charge, monthly billing and the option to cancel at any time.'
        ] },
        { kind: 'p', mt: true, html: 'We do not quote Oxford Learning fees from third-party websites. A franchise centre sets its own rate within Oxford Learning\'s policy, and a figure copied from elsewhere can be out of date or belong to a different city.' }
      ]
    },
    {
      id: 'model', tint: 'tint', eyebrow: 'How it works',
      h2: 'An Oxford Learning program, step by step, as it describes it',
      lede: 'Oxford Learning sets out its process in some detail. Read in order, its pages describe four stages.',
      body: [
        { kind: 'ol', items: [
          '<b>The Dynamic Assessment.</b> Oxford Learning calls it a proprietary combination of licensed testing activities, taken in an assessment room away from the classroom. It measures academic and cognitive skills to understand "not only where a student stands academically, but also why a student is at that level".',
          '<b>A customised program.</b> Education coordinators use the results to choose a starting point, areas of focus and teaching methods. Oxford Learning says each student\'s program is individualised.',
          '<b>Classes at a small table.</b> Regular programs seat three students with one teacher, mixing one-on-one teaching with independent work. Centres generally run after school from Monday to Thursday and on Saturday mornings.',
          '<b>Lesson Review meetings.</b> Parents and centre staff set goals together and check them at the next meeting, from sight words to quadratic equations to remembering homework.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Virtual Table, the online option',
          left: [
            'For families who cannot reach a centre, Oxford Learning runs Virtual Table. It describes the sessions as live, with screen sharing, and says "students work from workbook materials that meet their specific learning needs".',
            'Parents receive the link on the day: Oxford Learning says "a private link and class password is emailed to parents the day of the class". New students are placed with an online placement guide.'
          ],
          rightH3: 'The breadth of the menu',
          right: [
            'Oxford Learning\'s menu runs from Little Readers for preschoolers to a University and College Success Program, with French, SAT, ACT and SSAT preparation along the way. Its math page offers programs "for every age and grade level, from Grade 1 to Grade 12".',
            'That breadth is the point of a learning-skills centre: one place can follow a child across subjects and years.'
          ] }
      ]
    },
    {
      id: 'depth', tint: 'deep', eyebrow: 'Subject depth',
      h2: 'What it means to go deep in one subject',
      lede: 'Our model starts from the subject rather than from learning skills in general. Here is what that looks like in a math course, in our own words.',
      body: [
        { kind: 'table', caption: 'How we teach a math topic (ours)', head: ['Stage', 'What happens in class', 'Why'], rows: [
          ['Where it comes from', 'The rule is built from something the student already trusts: a picture, a pattern, or a number test', 'A rule that has been seen to be true is remembered; a rule that was only announced is not'],
          ['Saying it aloud', 'The student explains the method back in their own words', 'Gaps show up in the explanation before they show up in a test'],
          ['A problem not seen before', 'The teacher sets a problem that needs the idea in a new way', 'This is what separates understanding from recall'],
          ['Linking forward', 'The class sees where the idea is used next, in the following grade or in code', 'Students stop treating each unit as a separate box']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Coding as the second subject',
          left: [
            'Because we also teach coding, a math student can test ideas with a short program, as the worked example below does. For some students, seeing a rule fail on a screen is more convincing than any explanation.',
            'Students who want to can take a full coding course alongside math, taught by the same school.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not run cognitive assessments, and we do not offer reading, writing, French or general homework help. A child whose main need is in those areas is better served by a centre that covers them.',
            'We also do not grant credits or set school marks. We teach alongside the student\'s school course, whatever province they are in.'
          ] }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'A worked example',
      h2: 'Finding the real misconception behind a wrong answer in Grade 9 or 10 algebra',
      lede: 'This example is ours, written for our classes, and is not taken from Oxford Learning or any curriculum document. A student writes (x + 3)² = x² + 9. Marking it wrong is easy. Finding out why the student believes it, and making sure the belief is gone, is the teaching.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask for the reasoning.</b> The student usually explains that the square applies to each part separately, the way 2(x + 3) becomes 2x + 6. That is the real misconception: treating squaring like multiplying by a number.',
          '<b>Test the rule with a number.</b> Try x = 1. The left side is (1 + 3)² = 16. The student\'s rule gives 1 + 9 = 10. One number is enough to show the rule is false.',
          '<b>Notice what zero hides.</b> With x = 0 both sides give 9. A student who checks only with zero would wrongly decide the rule works, so we choose test numbers on purpose.',
          '<b>Build the right rule from a picture.</b> A square with side x + 3 splits into four pieces: an x by x square, two x by 3 rectangles and a 3 by 3 square. Its area is x² + 3x + 3x + 9, which is x² + 6x + 9. The missing 6x is the two rectangles the student forgot.',
          '<b>Check the new rule the same way.</b> At x = 1: 1 + 6 + 9 = 16, which matches. At x = 5: 25 + 30 + 9 = 64, and (5 + 3)² = 64.',
          '<b>Ask three questions that separate a slip from a belief.</b> Expand (x + 5)², (2x + 1)² and (x - 4)². A student who has truly changed their idea gets the middle term each time: 10x, 4x and -8x.'
        ] },
        { kind: 'code', mt: true, label: 'Our Python number test', lang: 'python', code: TEST, note: 'Run by us on 22 October 2026. Columns: x, the expression, the student\'s rule, the expanded form.' },
        { kind: 'code', label: 'What it prints', lang: 'text', code: TEST_OUT },
        { kind: 'two', mt: true,
          leftH3: 'What the output shows',
          left: [
            'The expression and the expanded form agree on every row. The student\'s rule agrees only at x = 0, which is exactly why zero is a poor test number.',
            'The row for x = -3 is a bonus: the expression is 0 there, but the student\'s rule gives 18, a gap no one can miss.'
          ],
          rightH3: 'Why this is subject depth',
          right: [
            'A general study skill, such as checking your work, helps here. But knowing which numbers to test, and having the area picture ready, comes from teaching the subject itself.',
            'The same idea returns later, in factoring trinomials in Grade 10 and in the binomial expansions of senior math, so getting it right now saves work in every later grade.'
          ] }
      ]
    },
    {
      id: 'fit', tint: 'deep', eyebrow: 'Who each suits',
      h2: 'When Oxford Learning suits a child, and when subject depth does',
      lede: 'Our honest reading, based on what Oxford Learning publishes and what we teach.',
      body: [
        { kind: 'two',
          leftH3: 'Oxford Learning is likely the right call when',
          left: [
            'Your child needs help in several subjects at once, or with reading, writing, French or study habits rather than math alone.',
            'You want an assessment of how your child learns, including attention and memory, before any tutoring starts.',
            'You prefer an in-person centre with a small three-to-one table, or a preschooler needs early reading support, which we do not offer.'
          ],
          rightH3: 'Our subject-depth classes are likely the right call when',
          right: [
            'The need is math, or coding, and you want a teacher who knows that subject deeply and teaches the reasons behind each method.',
            'Your child is ahead and wants harder problems, contests or Grade 12 university math, not only catch-up.',
            'You want live classes at home in any province, a published monthly fee, and monthly billing you can cancel at any time.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Several subjects', p: 'A centre that covers English, French, science and study skills fits better than a two-subject school.' },
          { h3: 'Math only', p: 'A math course that goes deep fits better than general tutoring.' },
          { h3: 'Math and code', p: 'We teach coding too; we found none on Oxford Learning\'s pages.' }
        ] }
      ]
    },
    {
      id: 'decide', tint: 'tint', eyebrow: 'Deciding',
      h2: 'Four steps to decide',
      lede: 'A short order that works whichever way you lean.',
      body: [
        { kind: 'ol', items: [
          '<b>Name the need.</b> Write down the one or two things you most want to change this year. If they span subjects or study habits, start with a learning-skills centre. If they are about math or coding, start with a subject course.',
          '<b>Ask Oxford Learning the cost questions above</b>, and ask about the assessment and the cancellation policy.',
          '<b>Book our free first class.</b> The teacher works through a few problems with your child and tells you what they found.',
          '<b>Compare what your child can explain afterwards.</b> The option that left your child able to explain more, in the area you most care about, is usually the one to choose.'
        ] },
        { kind: 'p', mt: true, html: 'Our <a class="ag-inline-link" href="/online-math-tutor-canada">online math tutor page for Canada</a> covers live math lessons in more detail, and there is a separate comparison of a <a class="ag-inline-link" href="/private-math-tutor-vs-online-tutoring">private tutor and online tutoring</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages we look for in a math student',
    lede: 'Our own placement stages, judged in the first class from how a student explains their work.',
    table: { caption: 'Placement stages for school math (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Following steps', 'Can repeat a worked method on a similar question, but is lost if the question changes shape'],
      ['2. Knowing why', 'Can say where a rule comes from, for example with a picture or a number test'],
      ['3. Choosing a method', 'Picks a suitable method for a question that does not say which to use'],
      ['4. Testing their own work', 'Checks an answer with a second method or a chosen number before handing it in']
    ] },
    left: { h3: 'For parents', ps: [
      'Marks often reflect stage 1 well, because school tests reward repeating methods. Stage 2 is where long-term confidence starts.',
      'The worked example on this page is a typical stage 1 to stage 2 lesson.'
    ] },
    right: { h3: 'For students', ps: [
      'When a rule feels familiar, test it with a number other than zero.',
      'If you cannot say why a step works, ask. That question is the lesson.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses in our two subjects',
    lede: 'Math from the early grades to university, and coding for students who want a second subject. All live online, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Early and middle grades', sub: 'Grades 1 to 8', courses: [
        { code: 'MACO / EARLY / 01', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Number sense with beads, then without.' },
        { code: 'MACO / EARLY / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, placed by a short check.' },
        { code: 'MACO / EARLY / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios, integers and geometry before high school.' }
      ] },
      { num: 'II', h3: 'High school math', sub: 'Grades 9 to 12', courses: [
        { code: 'MACO / HIGH / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For the student the worked example describes.' },
        { code: 'MACO / HIGH / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'For schools that offer AP.' },
        { code: 'MACO / HIGH / 03', slug: 'act-math-prep-course', title: 'ACT math prep', blurb: 'For applicants to universities that ask for it.' }
      ] },
      { num: 'III', h3: 'The second subject, and beyond', sub: 'Teens and adults', courses: [
        { code: 'MACO / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Code that tests math ideas, and much more.' },
        { code: 'MACO / CODE / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Statistics brought to life with real data.' },
        { code: 'MACO / CODE / 03', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Calculus and linear algebra after high school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live math and coding classes, at home, in any province',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, with the time set in your own province.' },
      { time: 'Weekends', l: 'Morning slots for students with full weekday evenings.' },
      { time: '1-on-1', l: 'Arranged around one student\'s school unit or test date.' }
    ],
    cells: [
      { h3: 'Two subjects', p: 'Math and coding, taught in depth.' },
      { h3: 'Reasons first', p: 'Every rule is shown to be true before it is drilled.' },
      { h3: 'No assessment fee', p: 'The first class is free and places the student.' },
      { h3: 'Monthly', p: 'Billed monthly, cancel any time.' },
      { h3: 'School-aware', p: 'Lessons sit beside the student\'s own course.' },
      { h3: 'Two formats', p: 'A batch, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our coding students',
  projectsLede: 'Students who add coding to math go on to build real projects. A handful are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show the rest.',
  reviewsLede: 'Reviews parents left on our Google profile, reproduced as written.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee for eight live classes, shown below in your region\'s currency. No assessment charge and no registration fee; billing is monthly and can be cancelled at any time.',
    free: ['The first class at no cost', 'Placement by a math teacher', 'No card needed'],
    group: ['Fifteen to twenty in a batch', 'One teacher throughout', 'A batch time you choose', 'Paid monthly'],
    one: ['A teacher for one student', 'Paced to the school course', 'Math, coding or both']
  },

  faq: {
    eyebrow: 'Questions from Canadian parents',
    h2: 'Oxford Learning and Modern Age Coders: what parents ask',
    items: [
      { q: 'Is Modern Age Coders part of Oxford Learning?', a: 'No. Modern Age Coders is independent and has no relationship with Oxford Learning. What this page says about Oxford Learning is taken from its own website, read on 22 October 2026.' },
      { q: 'How much does Oxford Learning cost?', a: 'Oxford Learning does not publish a figure. Its pages say every location charges a competitive hourly rate that varies by city and province, and that a program price depends on the program and how often the student attends. Ask your nearest centre for the full monthly total.' },
      { q: 'Does Oxford Learning offer payment plans?', a: 'Its pricing page says monthly payment plans are available through iFinance, and adds that they may not be available at all locations. Oxford Learning also states a 30-day cancellation policy.' },
      { q: 'How many hours does Oxford Learning recommend?', a: 'Its FAQ recommends about 100 hours of instruction for maximum cognitive gain, notes that two 1-hour classes a week come to about 8 hours a month, and says it generally takes about a year to reach 100 hours.' },
      { q: 'How many students are in an Oxford Learning class?', a: 'Oxford Learning says its regular programs run at small tables with three students to one teacher, and that its small group programs and workshops usually have no more than 8 to 10 students. Our batches have 15 to 20 students, or we teach one to one.' },
      { q: 'Does Oxford Learning tutor online?', a: 'Yes. Its Virtual Table program connects students with a tutor live over screen sharing, using workbook materials, and Oxford Learning says the sessions are not pre-recorded. All of our classes are live online.' },
      { q: 'Does Oxford Learning teach coding?', a: 'We found no coding or programming program on the Oxford Learning pages we read in October 2026. Modern Age Coders teaches coding from age 6, alongside mathematics.' },
      { q: 'Is there an Oxford Learning alternative for math only?', a: 'Modern Age Coders teaches mathematics live online from Grade 1 to university level, in a group or one to one, with the reasons behind each method taught first. We do not cover reading, writing, French or general homework help.' },
      { q: 'What does the Oxford Learning assessment involve?', a: 'Oxford Learning describes its Dynamic Assessment as a set of licensed testing activities in a separate room, taking up to two hours for older students, that looks at cognitive skills as well as school subjects. Our first class is a free lesson that also places the student.' },
      { q: 'When are your live classes for Canadian students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix the time by your province\'s clock.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families weighing tutoring against a subject course.',
    items: [
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Our main page on math lessons for Canadian students.' },
      { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U tutor', p: 'Ontario Grade 12 Advanced Functions, alongside school.' },
      { href: '/private-math-tutor-vs-online-tutoring', label: 'Private tutor or online tutoring', p: 'How the two kinds of help differ.' },
      { href: '/modern-age-coders-vs-mathnasium', label: 'Modern Age Coders vs Mathnasium', p: 'Set against a franchise centre that teaches only math.' },
      { href: '/modern-age-coders-vs-kumon', label: 'Modern Age Coders vs Kumon', p: 'A comparison with a worksheet method.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests', p: 'For students who want harder math.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our Canadian hub, for the second subject.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Coding for Ontario students.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A full lesson from our classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In that class, the teacher picks two or three questions from the topic your child is studying, asks them to explain each step, and looks for the idea behind any slip. Afterwards you get a plain account of what they found and which course would help.',
    readFirst: 'Prefer to see how a lesson runs first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows one, and the <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'We have no centres: our teachers are based in India and every class is live on video, so families in any province can join. WhatsApp is the fastest way to reach us.',
    formNote: 'The first class is free; no card or deposit is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Math in Canada', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/mhf4u-advanced-functions-tutor', label: 'MHF4U tutor' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests' },
        { href: '/private-math-tutor-vs-online-tutoring', label: 'Tutor or online tutoring' }
      ] },
      { h4: 'Modern Age Coders', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Test it with a number'
  },

  personalityCss: `
.ag-root.ag-maco .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-maco .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-maco .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-maco .ag-table caption { text-align: left; font-style: italic; font-weight: 500; }
.ag-root.ag-maco .ag-band-head h3 { letter-spacing: -0.002em; }
.ag-root.ag-maco .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Oxford Learning\'s own pages, read raw on 22 October 2026: home (over 130 centres in Canada, over 40 years, age 3 to Grade 12), Virtual Table (live screen sharing, not pre-recorded, workbook materials, private link, over 100 centres), tutoring FAQs (price depends on program and attendance; competitive rate by city and province; after-school hours Monday to Thursday and Saturday mornings; three students to one teacher; workshops 8 to 10; 30-day cancellation; about 100 hours recommended; two 1-hour classes a week is about 8 hours a month; about a year to reach 100 hours), pricing (competitive hourly rate, iFinance monthly plans not at all locations, pricing varies coast to coast), Dynamic Assessment (up to two hours for older students; where and why), the Oxford Learning difference (Cognitive Learning, Interactive Coaching), math tutoring (Grade 1 to Grade 12).',
    localProject: 'An original diagnosis of the (x + 3)² = x² + 9 misconception in six numbered steps: asking for the reasoning, a number test at x = 1 (16 against 10), why x = 0 hides the error, the area model giving x² + 6x + 9, checks at x = 1 and x = 5, and three follow-up expansions with middle terms 10x, 4x and -8x; plus a Python number test run on 22 October 2026. Also five cost questions to ask a centre and our four placement stages. Lesson family: testing a rule with chosen numbers.',
    requiredMentions: ['Our regular programs run at small tables with three students to one teacher.', 'usually no more than 8-10 students per session', 'Oxford Learning has a 30-day cancellation policy.', 'Generally speaking, it takes about a year to reach 100 hours.', 'Monthly Payment Plans Available Through iFinance!', 'Pricing may vary slightly from coast to coast.', 'can take up to two hours for older students', 'a private link and class password is emailed to parents the day of the class', 'With x = 0 both sides give 9', 'x² + 3x + 3x + 9'],
    sources: [
      { claim: 'Price depends on program and attendance; competitive rate by city and province; hours; three-to-one tables; workshops; 30-day cancellation; about 100 hours, 8 hours a month, about a year.', url: 'https://oxfordlearning.com/tutoring-faqs/' },
      { claim: 'Competitive hourly rate; iFinance monthly payment plans, not at all locations; pricing varies coast to coast.', url: 'https://oxfordlearning.com/pricing/' },
      { claim: 'Virtual Table: live screen-sharing sessions, not pre-recorded; workbook materials; private link emailed to parents.', url: 'https://oxfordlearning.com/online-tutoring-at-home-with-virtual-table/' },
      { claim: 'Dynamic Assessment: up to two hours for older students; measures where and why a student is at a level.', url: 'https://oxfordlearning.com/how-dynamic-assessment-works/' },
      { claim: 'Over 130 centres across Canada; over 40 years; subjects from age 3 to Grade 12.', url: 'https://oxfordlearning.com/' },
      { claim: 'Math tutoring programs from Grade 1 to Grade 12.', url: 'https://oxfordlearning.com/subject/math-tutoring/' }
    ],
    rejectedClaims: [
      'An Oxford Learning fee from any third-party site: not used; its own pages publish no figure.',
      'Any calculation of ours on Oxford Learning\'s hours (for example a yearly total): not made; its own arithmetic is quoted as its own.',
      'A single reconciled Oxford Learning centre count: not made; 130 and 100 are each attributed to their own page.',
      'Oxford Learning\'s "only after-school tutoring facility" claim, testimonials and grade outcomes: not repeated; no reviews or ratings of a competitor.',
      'That Oxford Learning teaches coding: not found on any page read, so the page says only that we found none.',
      'Any promise of better grades from our classes, or any claim that we are better: refused.',
      'Any affiliation with Oxford Learning: none, and the page says so.'
    ]
  }
};
