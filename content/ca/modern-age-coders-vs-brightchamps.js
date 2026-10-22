'use strict';
// Modern Age Coders vs BrightCHAMPS (ag- comparison door; Canada cluster Plan 2, row 89).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: two live online schools. BrightCHAMPS packages coding into grade-band courses (Grade 1, 2 to 3, 4 to 6,
// 7 to 12) beside other subjects for kids; we run one continuous coding and math path from age 6 to adult that reaches
// Canadian school courses and contests. A difference of shape, never a claim about depth or quality on their side.
// The older /brightchamps-alternative page is not echoed (its "less depth" and "sales push" lines are not repeated).
// Sources, read raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src/modern-age-coders-vs-brightchamps/):
//  - brightchamps.com/en-ca/courses/coding-classes-for-kids (coding_ca.txt): "Online Coding Classes for Kids in Canada";
//    "live, teacher-led sessions where children spend most of the time building"; "Beginners start with block-based
//    tools"; "Classes are taught live."; "Most tracks use small groups so kids can get help when they need it."; "Some
//    formats include individual support if the lesson or level requires it."; "These sessions are live only. Recordings are
//    not shared to protect privacy."; "Families still get project files or notes so they can see what was covered.";
//    "Progress from visual coding to Python, Java and C++"; "Concepts are always tied to a project."; "Kids build during
//    class, not after it"; "Teachers give a short run-through, then kids try it themselves."; "Explore 20 structured online
//    coding courses"; course names by grade band, e.g. "Beginner Coding Class for Kids (Grades 7 to 12)".
//  - en-ca course pages beg_4_6_group.txt and beg_7_12.txt: "60 minutes per session"; "Group sessions"; "Learn Coding with
//    your peers"; "8-12 age group" (Grades 4 to 6 group); "Learn Coding at your own pace with a teacher focused only on
//    you" and "12-18 age group" (Grades 7 to 12 one to one); "taxes not included" beside a published price (no figure or
//    currency is reproduced here).
//  - brightchamps.com/en-ca/courses (courses_ca.html): course families linked: coding, communication, DIY, financial
//    literacy, gen AI, math, robotics.
//  - brightchamps.com/en-ca/about (about_ca.txt): "We are operating in over 500 cities across 30+ countries".
//  Not used: prices and currency, the SIBLING25 promotion, live visitor counters, testimonials and named teachers or
//  students, the founder's name, funding and award claims, the "top 1%" teacher claim. The page's "45 Interactive lessons"
//  and "30 engaging sessions" disagree, so no session count is printed.
// Our own material, labelled on the page: the quiz-average debugging walkthrough (three Python programs run under
// CPython 3.13 on 22 October 2026: the buggy version prints "Average: 6.25", the traced version shows indexes 1 to 3 only,
// the fixed version prints "Average: 8.0" and "Test: 25.0"), the arithmetic 7 + 9 + 6 + 10 = 32 and 32 / 4 = 8.0, the
// criteria table's Modern Age Coders column, and the path table.
// Lesson family: debugging by stating an expectation and making the program show its work.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const BUGGY = `# Our worked example: a quiz-average bug, as a student might bring it to class
scores = [7, 9, 6, 10]

total = 0
for i in range(1, len(scores)):
    total = total + scores[i]

average = total / len(scores)
print("Average:", average)`;

const TRACED = `# Step 2: make the loop show its work
scores = [7, 9, 6, 10]

total = 0
for i in range(1, len(scores)):
    print("adding index", i, "value", scores[i])
    total = total + scores[i]

average = total / len(scores)
print("Average:", average)`;

const TRACED_OUT = `adding index 1 value 9
adding index 2 value 6
adding index 3 value 10
Average: 6.25`;

const FIXED = `# Step 4: the fix, and a test chosen to catch the old bug
def average(scores):
    total = 0
    for s in scores:          # every score, first one included
        total = total + s
    return total / len(scores)

print("Average:", average([7, 9, 6, 10]))
print("Test:", average([100, 0, 0, 0]))`;

const FIXED_OUT = `Average: 8.0
Test: 25.0`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'BrightCHAMPS and Modern Age Coders, two live online schools, compared from BrightCHAMPS\' own Canada pages: format, grade bands, subjects and where each path leads.' },
  slug: 'modern-age-coders-vs-brightchamps',
  code: 'macb',
  accent: '#154D8A',
  accentRationale: 'BrightCHAMPS comparison, Canada: a deep harbour blue #154D8A, allocated for row 89 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 8.05 on the paper #FBF8F2, 7.57 on #F5F1E8 and 6.93 on #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Modern Age Coders vs BrightCHAMPS',
  title: 'Modern Age Coders vs BrightCHAMPS in Canada (2026)',
  description: 'BrightCHAMPS and Modern Age Coders both teach coding live online in Canada. How their courses, grade bands, subjects and paths differ, from each one\'s own pages.',
  ogDescription: 'Two live online coding schools for Canadian families. BrightCHAMPS packages coding by grade band beside other kids\' subjects; we run one path from age 6 to adult. Compared from each side\'s own pages.',
  twitterDescription: 'BrightCHAMPS or Modern Age Coders in Canada: two live online schools, compared fairly from their own pages.',
  pageName: 'Modern Age Coders vs BrightCHAMPS',
  webPageDescription: 'A comparison for Canadian parents of BrightCHAMPS and Modern Age Coders, two live online coding schools, built from BrightCHAMPS\' Canada pages and our own published details.',
  courseDescription: 'Live online coding and math for students across Canada, from block coding at age 6 through Python, Java and C++ to Ontario computer science companion classes and contest preparation, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Modern Age Coders vs BrightCHAMPS',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#criteria', label: 'Side by side' },
    { href: '#shape', label: 'Course shape' },
    { href: '#path', label: 'Where it leads' },
    { href: '#example', label: 'Debugging example' },
    { href: '#fit', label: 'Who it suits' }
  ],
  eyebrow: 'Canada &middot; Comparison &middot; Live online coding',
  h1: 'Modern Age Coders vs BrightCHAMPS for Canadian families',
  lede: 'Unlike most comparisons a Canadian parent meets, this one is between two schools that work the same basic way. BrightCHAMPS and Modern Age Coders both teach coding live, online, with a teacher on screen, in groups or one to one. So the useful question is not live against recorded, or centre against home. It is how each school packages a child\'s learning, and where that learning can lead. BrightCHAMPS, on its Canada pages, offers coding as grade-band courses beside subjects such as financial literacy, robotics and communication. We teach coding and math as one continuing path that runs from age 6 into Canadian school computer science, contests and adult study. This page sets out both, from BrightCHAMPS\' own pages as read on 22 October 2026.',
  secondaryCta: { href: '#example', label: 'See the debugging example' },
  wa: 'Hello Modern Age Coders, we are comparing BrightCHAMPS with your live coding classes for our child in Canada. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students &middot; independent of BrightCHAMPS',
  spec: [
    ['BrightCHAMPS', 'Live online, grade-band courses'],
    ['Its bands', 'Grade 1 to Grade 12'],
    ['Its subjects', 'Coding and several others'],
    ['Modern Age Coders', 'Live online, one long path'],
    ['Our ages', '6 to 67'],
    ['Our subjects', 'Coding and math'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'BrightCHAMPS teaches live online coding classes for kids in Canada as grade-band courses from Grade 1 to Grade 12, alongside subjects such as financial literacy and robotics. Modern Age Coders also teaches live online, in a batch or one to one, but as one coding and math path for ages 6 to 67, reaching courses such as the Ontario Computer Science Companion.',

  picks: {
    eyebrow: 'Where our path reaches',
    h2: 'Three courses that show where the path goes',
    lede: 'One for a young beginner, one for a teen learning a school language, and one that sits beside an Ontario credit course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'MACB / 01', title: 'Coding for Kids', note: 'Ages 6 to 12. Scratch to games, apps and simple AI, with batches grouped by age.' },
      { course: 'java-programming-masterclass-for-teens', code: 'MACB / 02', title: 'Java for Teens', note: 'Ages 13 to 18. The language many Ontario and AP courses use, from first class to objects.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'MACB / 03', title: 'Ontario Computer Science Companion', note: 'Grades 11 and 12. Help beside ICS3U or ICS4U at school, in Python or Java. We do not grant credits.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Side by side',
      h2: 'BrightCHAMPS and Modern Age Coders, point by point',
      lede: 'The BrightCHAMPS column quotes or closely paraphrases BrightCHAMPS\' own Canada pages (brightchamps.com/en-ca), read on 22 October 2026. Many rows match, which is the honest starting point: both are live online schools.',
      body: [
        { kind: 'table', caption: 'BrightCHAMPS from its en-ca pages (read 22 October 2026), and Modern Age Coders from what we publish', head: ['Point', 'BrightCHAMPS', 'Modern Age Coders'], rows: [
          ['Format', '"Classes are taught live." It describes "live, teacher-led sessions where children spend most of the time building"', 'Live classes over video with one regular teacher'],
          ['Recordings', '"These sessions are live only. Recordings are not shared to protect privacy."', 'Every class is live with a teacher'],
          ['Where', 'Online; its Canada page is titled "Online Coding Classes for Kids in Canada"', 'Online, for students in every province'],
          ['Ages and grades', 'Course bands for Grade 1, Grades 2 to 3, Grades 4 to 6 and Grades 7 to 12; one group page gives an "8-12 age group", one 1-on-1 page a "12-18 age group"', 'Ages 6 to 67, with kids, teen, college and adult courses'],
          ['Session length', '"60 minutes per session" on the course pages we read', 'Two live classes a week, eight a month'],
          ['Group or one to one', 'Both: "Group sessions" ("Learn Coding with your peers") or "a teacher focused only on you"', 'Both: a batch of 15 to 20, or one to one'],
          ['Class size', 'Not given as a number: "Most tracks use small groups so kids can get help when they need it."', '15 to 20 in a batch'],
          ['Curriculum approach', 'Project-led: "Concepts are always tied to a project." Progress "from visual coding to Python, Java and C++"', 'Concept first, then a problem or project that tests it; Scratch, Python, Java, JavaScript, C++ and more'],
          ['Other subjects', 'Its Canada course menu also links communication, DIY, financial literacy, gen AI, math and robotics', 'Coding and mathematics only'],
          ['Prices published', 'Yes, on its Canada course pages, marked "taxes not included"', 'Yes, as a monthly fee on our pricing and course pages'],
          ['First step', 'A free trial class', 'A free first class']
        ] },
        { kind: 'source', html: 'Sources: BrightCHAMPS <a class="ag-inline-link" href="https://brightchamps.com/en-ca/courses/coding-classes-for-kids" rel="noopener" target="_blank">coding classes for kids in Canada</a>, its Canada <a class="ag-inline-link" href="https://brightchamps.com/en-ca/courses" rel="noopener" target="_blank">course menu</a> and two of its grade-band course pages, read 22 October 2026. This page reproduces none of BrightCHAMPS\' prices. Modern Age Coders and BrightCHAMPS are separate companies; we have no partnership with BrightCHAMPS and it has not endorsed this page.' },
        { kind: 'two', mt: true,
          leftH3: 'Where the two are genuinely alike',
          left: [
            'Live teaching, a teacher on screen, groups or one to one, blocks for young beginners and typed languages later: on all of these, BrightCHAMPS\' Canada page and ours describe much the same thing. A family who wants live online classes rather than videos or a centre can be well served by either.',
            'That is worth saying plainly, because it means the choice is a matter of fit, not of one school doing the job and the other not.'
          ],
          rightH3: 'Where they part',
          right: [
            'The differences are structural. BrightCHAMPS builds its coding offer as a set of courses for each grade band, inside a wider menu of children\'s subjects. We build one long coding and math path whose later stages are Canadian school computer science, contest preparation and courses for adults.',
            'Neither shape is right for every child. The sections below show what each looks like and who it tends to suit.'
          ] }
      ]
    },
    {
      id: 'shape', tint: 'deep', eyebrow: 'How each packages learning',
      h2: 'Grade-band courses, or one path that keeps going',
      lede: 'BrightCHAMPS lists its Canadian coding courses by grade band and level. Our courses are listed by age group, but each leads into the next, so a student does not finish a band and start again elsewhere.',
      body: [
        { kind: 'table', caption: 'How BrightCHAMPS names its Canadian coding courses (from its en-ca coding page, read 22 October 2026)', head: ['Grade band', 'Course levels BrightCHAMPS lists', 'Formats'], rows: [
          ['Grade 1', 'Introduction, Beginner, Intermediate and Advanced Coding for Kids (Grade 1)', 'Group or 1-on-1'],
          ['Grades 2 to 3', 'Beginner, Intermediate and Advanced Coding for Kids (Grades 2 to 3)', 'Group or 1-on-1'],
          ['Grades 4 to 6', 'Beginner, Intermediate and Advanced Coding for Kids (Grades 4 to 6)', 'Group or 1-on-1'],
          ['Grades 7 to 12', 'Beginner, Intermediate and Advanced Coding for Kids (Grades 7 to 12)', 'Group or 1-on-1']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a grade band gives a family',
          left: [
            'A grade band is easy to understand: a parent finds their child\'s grade, picks a level, and sees a defined course with a set of projects. BrightCHAMPS says it offers "20 structured online coding courses" for Canada, and its pages list each course\'s projects in advance.',
            'Its course pages also show what a session is like: "Teachers give a short run-through, then kids try it themselves." Recordings are not shared, and families get project files or notes instead.'
          ],
          rightH3: 'What one continuing path gives a family',
          right: [
            'Our courses are not boxed by grade. A twelve-year-old who has outgrown blocks moves to Python in the same school, and a fifteen-year-old taking ICS3U at school can join a companion course built around that Ontario course.',
            'The same school then carries on past Grade 12: university-level programming, data structures, and courses for working adults. A student can stay with the path for years, and a parent can start their own course in the same place.'
          ] }
      ]
    },
    {
      id: 'path', tint: 'tint', eyebrow: 'Where the path leads in Canada',
      h2: 'From first blocks to Canadian school courses and contests',
      lede: 'Our own path, set out by stage, with the Canadian milestones that sit beside it. The milestones are run by schools and by CEMC, not by us; we teach students who take them.',
      body: [
        { kind: 'table', caption: 'The Modern Age Coders coding path, with Canadian milestones alongside (ours)', head: ['Stage', 'Typical age', 'What the student does with us', 'Canadian milestone beside it'], rows: [
          ['Blocks', '6 to 9', 'Scratch games and animations, with every block explained aloud', 'Ontario\'s Grades 1 to 8 math curriculum, which has a coding expectation in every grade'],
          ['First typed code', '9 to 12', 'Python or C++ through games and puzzles', 'The Beaver Computing Challenge, which CEMC offers at Grade 5/6, 7/8 and 9/10 levels'],
          ['School languages', '13 to 16', 'Python and Java, from programs to classes and objects', 'Ontario\'s Grade 10 course ICD2O, or a computing elective in another province'],
          ['School computer science', '15 to 18', 'A companion course beside ICS3U or ICS4U', 'The Ontario credit course itself, which the school grants'],
          ['Contests', '13 to 18', 'Problem solving for the Canadian Computing Competition', 'CCC Junior and Senior, written at school'],
          ['Beyond school', '18 and up', 'University-level programming, algorithms and projects', 'First-year computer science or a new career']
        ] },
        { kind: 'p', mt: true, html: 'Modern Age Coders is not connected with CEMC, the University of Waterloo or any ministry of education, and we do not grant Ontario credits or any other provincial credit. For the detail of each milestone, see our pages on <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U help</a>, the <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> and <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters for a Canadian family',
          left: [
            'By Grade 11 many Ontario students meet computer science as a credit course with marks attached. A teacher who already knows the student\'s code from earlier years can help with that course from the first week.',
            'Contest students benefit in the same way. A student who has written typed code with us since age 11 reaches CCC Junior with years of habit already in place.'
          ],
          rightH3: 'When a grade band is enough',
          right: [
            'Not every child wants a path. Many want one good course this year, to try coding and see whether it sticks. For them, a defined grade-band course is a sensible unit, and BrightCHAMPS offers exactly that.',
            'A family can also mix: a short course elsewhere to test interest, and a longer path later once the interest is clear.'
          ] }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A worked example',
      h2: 'How we teach debugging: say what you expect, then make the code show its work',
      lede: 'This walkthrough is ours, written for our teen classes; it is not from BrightCHAMPS or any other course. The bug is a common one, the kind that turns up in a first school computer science assignment. What matters is the order of the steps, which we repeat until students do it without being asked.',
      body: [
        { kind: 'code', label: 'Our example &middot; the program a student brings in', lang: 'python', code: BUGGY, note: 'We ran it on 22 October 2026. It prints Average: 6.25. The student is sure the scores average 8.' },
        { kind: 'ol', mt: true, items: [
          '<b>State the expectation.</b> Before touching the code, the student works it out by hand: 7 + 9 + 6 + 10 = 32, and 32 / 4 = 8.0. Now there is a definite gap between 8.0 and 6.25 to explain.',
          '<b>Make the loop show its work.</b> Instead of guessing, the student adds one print line inside the loop so the program reports every value it adds.',
          '<b>Read the evidence.</b> The output shows indexes 1, 2 and 3 only. The first score, 7, is never added: 9 + 6 + 10 = 25, and 25 / 4 = 6.25. The bug is now found, not guessed.',
          '<b>Fix the cause, not the symptom.</b> range(1, len(scores)) starts at 1. The cleanest fix loops over the scores themselves, so there is no index to get wrong.',
          '<b>Write a test that would have caught it.</b> A list whose first score is the only large one, [100, 0, 0, 0], must average 25.0. The old code would print 0.0 for it, so the test proves the fix.'
        ] },
        { kind: 'code', mt: true, label: 'Step 2 &middot; the loop shows its work', lang: 'python', code: TRACED },
        { kind: 'code', label: 'What step 2 prints', lang: 'text', code: TRACED_OUT },
        { kind: 'code', label: 'Step 4 &middot; the fix and the test', lang: 'python', code: FIXED },
        { kind: 'code', label: 'What the fixed version prints', lang: 'text', code: FIXED_OUT, note: 'Both lines confirmed on 22 October 2026. The second line is the test written to catch the original bug.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the order matters',
          left: [
            'Students who skip step 1 cannot tell whether a change helped, because they never said what right looks like. Students who skip step 2 change lines at random until something works, and learn nothing about why.',
            'The habit transfers to any language. In Java the print line becomes System.out.println, and the steps stay the same.'
          ],
          rightH3: 'Where this sits in a Canadian course',
          right: [
            'Loops over a list of marks are standard early material in Ontario Grade 11 computer science, and an off-by-one start is one of the most common slips. A companion class turns the slip into a lesson rather than a lost mark.',
            'For contest students, step 5 is the important one: the CCC grader tests code on inputs the student never sees, so writing your own awkward test is part of preparation.'
          ] }
      ]
    },
    {
      id: 'fit', tint: 'tint', eyebrow: 'Who each suits',
      h2: 'When BrightCHAMPS fits, and when our path fits',
      lede: 'Two live online schools can each be the right answer for a different child. This is our reading, set against what BrightCHAMPS publishes.',
      body: [
        { kind: 'two',
          leftH3: 'BrightCHAMPS may suit your child when',
          left: [
            'You would like several children\'s subjects from one provider: coding alongside financial literacy, robotics, communication or math, each as its own course.',
            'You prefer a defined course for your child\'s grade band, with its projects listed in advance, and a clear end point.',
            'Your child is in Grade 1 to Grade 6 and you want a short, packaged first course to test whether coding interests them.'
          ],
          rightH3: 'Our path may suit your child when',
          right: [
            'You want one coding and math school that a child can stay with from age 6 into high school and beyond, with the same school knowing their history.',
            'Your teen is heading for ICS3U, ICS4U, AP Computer Science or the Canadian Computing Competition and wants teaching built around those.',
            'You want math alongside coding from the same teachers, or an adult in the family wants a course too.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Many subjects', p: 'BrightCHAMPS links coding, financial literacy, robotics, communication, gen AI and math courses for Canada.' },
          { h3: 'Two subjects only', p: 'We teach coding and math only, across every age group.' },
          { h3: 'Same delivery', p: 'Both teach live online, in groups or one to one.' }
        ] }
      ]
    },
    {
      id: 'decide', tint: 'deep', eyebrow: 'Deciding',
      h2: 'Four checks before you choose a live online school',
      lede: 'These apply to any online coding school, including the two on this page.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask who teaches.</b> Will your child have the same teacher each week? Continuity is what lets a teacher spot a recurring slip.',
          '<b>Ask what happens after this course.</b> When the course or grade band ends, where does your child go next, and does the school know Canadian school courses and contests?',
          '<b>Ask about class times in your province.</b> A class set in one time zone can land awkwardly in British Columbia or Newfoundland. Check the time in your own clock, including after the clocks change.',
          '<b>Take the free first class at both.</b> Afterwards, ask your child to explain one thing they made. The class that left them able to explain more is usually the right one.'
        ] },
        { kind: 'p', mt: true, html: 'Families comparing more than two schools may find our <a class="ag-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a> hub useful, and our <a class="ag-inline-link" href="/canada-time-zones-2026-online-class-times">Canadian time zones page</a> covers class times for every province.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Placing a student who has learned elsewhere',
    lede: 'Our four placement stages, used in the first class whatever course the student took before.',
    table: { caption: 'Placement stages for students moving from another school (ours)', head: ['Stage', 'What we check'], rows: [
      ['1. Project follower', 'Can complete a guided project but would struggle to start one from nothing'],
      ['2. Project changer', 'Changes an existing project on purpose and can say what each change will do'],
      ['3. Problem solver', 'Writes a short typed program from a written problem and tests it'],
      ['4. Debugger', 'Finds and fixes their own bugs by stating what they expected and tracing the code']
    ] },
    left: { h3: 'For parents', ps: [
      'The number of projects a child has finished says less than whether they can change one on purpose. We place on what the student can do in front of us.',
      'A student moving from any project-led course often places at stage 2. Stage 3 is the step we work on first.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you fix a bug, write down what the right answer should be.',
      'Then add a print line. Let the program tell you where it went wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses along one path, from age 6 to adult',
    lede: 'Each course is taught live online by a teacher who stays with the group, and each can be taken one to one instead.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 6 to 12', courses: [
        { code: 'MACB / KID / 01', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch, games and AI ideas for beginners.' },
        { code: 'MACB / KID / 02', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Real apps built with blocks.' },
        { code: 'MACB / KID / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'First websites, made by hand.' }
      ] },
      { num: 'II', h3: 'Serious about code', sub: 'Ages 13 to 18', courses: [
        { code: 'MACB / TEEN / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'From fundamentals to the STL.' },
        { code: 'MACB / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and data structures, step by step.' },
        { code: 'MACB / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python first, then real models.' }
      ] },
      { num: 'III', h3: 'After high school', sub: 'Ages 18 and up', courses: [
        { code: 'MACB / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to advanced, for adults.' },
        { code: 'MACB / ADULT / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack development', blurb: 'React, Node.js and deployment.' },
        { code: 'MACB / ADULT / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, machine learning and deep learning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes set in your own province\'s time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school or after dinner, converted to your time zone.' },
      { time: 'Weekends', l: 'Mornings, for families who keep weeknights free.' },
      { time: '1-on-1', l: 'A slot built around one student\'s school timetable.' }
    ],
    cells: [
      { h3: 'One path', p: 'Courses that lead into each other, age 6 to adult.' },
      { h3: 'Debug first', p: 'Students learn to find their own bugs.' },
      { h3: 'School-aware', p: 'Companion classes beside ICS3U and ICS4U.' },
      { h3: 'Contest-ready', p: 'Preparation for the CCC, written at school.' },
      { h3: 'Math too', p: 'Math courses from the same school.' },
      { h3: 'Your format', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects from students on our path',
  projectsLede: 'Students at every stage finish work they can show. Here is a small sample; the <a class="ag-inline-link" href="/student-labs">student labs</a> collect many more.',
  reviewsLede: 'Google reviews from parents and students, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'We charge one monthly fee for eight live classes, shown below in your region\'s currency. Billing is monthly, there is no registration fee, and you can cancel at any time.',
    free: ['A free first class', 'Placement on the path', 'No payment details to book'],
    group: ['A batch of fifteen to twenty', 'A regular teacher', 'Batch times to choose from', 'Monthly billing'],
    one: ['One to one with a teacher', 'Paced to school or contests', 'Moves along the path with the student']
  },

  faq: {
    eyebrow: 'Questions from Canadian parents',
    h2: 'BrightCHAMPS or Modern Age Coders: questions parents ask',
    items: [
      { q: 'Is Modern Age Coders part of BrightCHAMPS?', a: 'No. They are separate companies, and Modern Age Coders has no partnership or affiliation with BrightCHAMPS. The details about BrightCHAMPS on this page come from its own Canada pages, read on 22 October 2026.' },
      { q: 'Does BrightCHAMPS teach coding in Canada?', a: 'Yes. BrightCHAMPS has Canada pages at brightchamps.com/en-ca, including one titled Online Coding Classes for Kids in Canada. It describes live, teacher-led sessions and lists courses by grade band from Grade 1 to Grade 12.' },
      { q: 'Are BrightCHAMPS classes live or recorded?', a: 'BrightCHAMPS says its classes are taught live, that sessions are live only, and that recordings are not shared to protect privacy. Our classes are also live with a teacher.' },
      { q: 'What is the main difference between BrightCHAMPS and Modern Age Coders?', a: 'Both teach live online. BrightCHAMPS offers coding as grade-band courses beside other children\'s subjects such as financial literacy and robotics. We teach coding and math as one path from age 6 to adult, including companion classes for Ontario computer science and CCC preparation.' },
      { q: 'Is there a BrightCHAMPS alternative for Canadian teens?', a: 'Modern Age Coders teaches teens live online in Python, Java and C++, with a companion course for students taking ICS3U or ICS4U at school and a course for the Canadian Computing Competition. We do not grant Ontario credits; the school grants the credit.' },
      { q: 'How long is a BrightCHAMPS session?', a: 'The BrightCHAMPS Canada course pages we read give 60 minutes per session. We run two live classes a week, eight a month.' },
      { q: 'Does BrightCHAMPS publish its prices for Canada?', a: 'Yes, its Canada course pages show prices, marked taxes not included. We do not repeat them here. Our own monthly fee is listed on our pricing page in your region\'s currency.' },
      { q: 'Can my child switch from BrightCHAMPS to Modern Age Coders?', a: 'Yes. Book a free first class and the teacher will place your child by what they can do, whatever course they took before. Many students who have finished project-led courses start with us on typed problem solving.' },
      { q: 'What times are your classes for families in Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The time is agreed in your province\'s own time zone.' },
      { q: 'Do you teach subjects other than coding?', a: 'We teach coding and mathematics only, from age 6 to adult. If you want several other children\'s subjects such as communication or financial literacy from one provider, BrightCHAMPS lists courses in those.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families choosing a coding school.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our hub for families in every province.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Support beside Ontario Grade 11 computer science.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The Canadian Computing Competition, Junior level.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Junior and Senior, with the route onward.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI classes in Canada', p: 'Machine learning for Canadian teens.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by province', p: 'Every Canadian time zone, for 2026 to 2027.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live or recorded', p: 'What live teaching adds.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'More on the method in our worked example.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'The whole path, stage by stage.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring a project your child made anywhere, or nothing at all. The teacher will ask them to change something on purpose, watch how they find a bug, and tell you where on the path they would start.',
    readFirst: 'To see a full lesson first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; every course outline is on the <a class="ag-inline-link" href="/courses">courses page</a>.',
    note: 'Our teachers are in India and teach Canadian students over live video; we keep no office in Canada. WhatsApp reaches us quickest from any time zone.',
    formNote: 'The first class is free, with no card required.'
  },

  footer: {
    cols: [
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by province' }
      ] },
      { h4: 'The path', links: [
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Say what you expect'
  },

  personalityCss: `
.ag-root.ag-macb .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-macb .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-macb .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-macb .ag-table caption { text-align: left; font-weight: 500; letter-spacing: 0.002em; }
.ag-root.ag-macb .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-macb .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'BrightCHAMPS\' own Canada pages, read raw on 22 October 2026: coding classes for kids in Canada (live, teacher-led sessions; block-based start; classes taught live; most tracks in small groups; some individual support; live only, recordings not shared; project files or notes; visual coding to Python, Java and C++; concepts tied to projects; short run-through then hands-on; 20 structured coding courses; course names by grade band), two grade-band course pages (60 minutes per session; group sessions; 8-12 and 12-18 age groups; teacher focused only on you; taxes not included), the Canada course menu (coding, communication, DIY, financial literacy, gen AI, math, robotics) and the about page (over 500 cities across 30+ countries).',
    localProject: 'An original debugging walkthrough in five steps on a quiz-average bug: three Python programs run by us on 22 October 2026 (Average: 6.25, a trace showing indexes 1 to 3 only, then Average: 8.0 and Test: 25.0), with our arithmetic 7 + 9 + 6 + 10 = 32 and 32 / 4 = 8.0; a six-stage path table with Canadian milestones; placement stages; four checks for any online school. Lesson family: debugging by expectation and evidence.',
    requiredMentions: ['These sessions are live only. Recordings are not shared to protect privacy.', 'Most tracks use small groups so kids can get help when they need it.', 'Concepts are always tied to a project.', 'Teachers give a short run-through, then kids try it themselves.', '20 structured online coding courses', 'Learn Coding with your peers', 'adding index 1 value 9', 'Test: 25.0', '7 + 9 + 6 + 10 = 32'],
    sources: [
      { claim: 'Live, teacher-led coding classes for kids in Canada; small groups; live only, no recordings shared; visual coding to Python, Java and C++; 20 coding courses; grade-band course names.', url: 'https://brightchamps.com/en-ca/courses/coding-classes-for-kids' },
      { claim: '60 minutes per session; group sessions for an 8-12 age group (Grades 4 to 6).', url: 'https://brightchamps.com/en-ca/courses/coding-classes-for-kids/beginner-coding-course-grade-4-to-6-group' },
      { claim: 'One-to-one format for a 12-18 age group (Grades 7 to 12); prices marked taxes not included.', url: 'https://brightchamps.com/en-ca/courses/coding-classes-for-kids/beginner-coding-course-grade-7-to-12' },
      { claim: 'Canada course menu: coding, communication, DIY, financial literacy, gen AI, math, robotics.', url: 'https://brightchamps.com/en-ca/courses' },
      { claim: 'Operating in over 500 cities across 30+ countries.', url: 'https://brightchamps.com/en-ca/about' }
    ],
    rejectedClaims: [
      'BrightCHAMPS prices and their currency: not reproduced; the page says only that prices are published, marked taxes not included.',
      'The SIBLING25 promotion and the live visitor and enrolment counters on its pages: not used.',
      'BrightCHAMPS testimonials, named teachers and students, the founder, funding, awards and the top 1% teacher claim: not used.',
      'A session count per course: not printed, because one page gives both 45 lessons and 30 sessions.',
      'That BrightCHAMPS offers less depth or uses sales pressure: refused; the page describes a difference in course shape only.',
      'Any claim that our classes are better: refused.',
      'Any partnership with BrightCHAMPS, or with CEMC or a ministry: none, and the page says so; we do not grant credits.'
    ]
  }
};
