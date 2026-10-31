'use strict';
// Russian School of Mathematics alternative (ag- comparison door; UK and US exams cluster Phase 1, row US092).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). RSM facts read raw with curl on
// russianschool.com on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/russian-school-of-mathematics-alternative/):
//  - Home: "K-12 after-school math program"; "for nearly thirty years"; "multiple levels for every grade as well as a selective
//    competitions program"; FAQ: approach "based on elite math schools in the former Soviet Union, adapted to the U.S.
//    environment"; "one continuous curriculum, from K-12"; "Our average class size is 12, and with three levels per grade";
//    classrooms let students "verbalize and debate their ideas".
//  - About: first class "outside of Boston, Massachusetts"; "We do not franchise"; "RSM serves over 80,000 students across
//    North America" (RSM's figure, attributed); "A majority of RSM branches are accredited by the Western Association of
//    Schools and Colleges."
//  - Online (RSM-Online): "RSM-Online is open to students in grades 2 - 10"; "live and interactive classes on our proprietary
//    video-conferencing platform"; classes "meet anywhere from 1.5 to 4 hours per week, depending on the grade level";
//    homework "should take approximately half the length of your child's lesson to complete"; free evaluation; "Since our
//    curriculum is generally ahead of public school, children will often first learn concepts at RSM."; teachers "have a
//    background in mathematics or a related field"; tuition sent as a PDF on request (not used).
//  - Programs: "From Kindergarten To Calculus"; "tiered and selective competitions program"; "We offer tutoring only as a
//    short-term solution to prepare our students to join their peers in the classroom."; summer program "runs for 6 weeks
//    with 2 classes per week".
// Not used: tuition, RSM's competition results and university claims, testimonials, founders', principals' and students'
// names, media coverage list.
// Our own material, labelled: the criteria table's Modern Age Coders column, the age puzzle (child 10, parent 40) solved by a
// constant-difference argument and by an equation, the heads-and-legs puzzle (8 goats, 12 chickens) by reasoning, by
// equations and by a Python search, the decision steps.
// Lesson family: one problem by arithmetic reasoning and by an equation, then checked by exhaustive search.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'The Russian School of Mathematics beside live online classes at Modern Age Coders: format, grades, class size and hours, from RSM&rsquo;s own pages.' },
  slug: 'russian-school-of-mathematics-alternative',
  code: 'rsm',
  accent: '#15592B',
  accentRationale: 'Russian School of Mathematics alternative: a forest green, #15592B as allocated, darker than the jade Eureka page and strongly above contrast on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Russian School of Mathematics alternative',
  title: 'Russian School of Mathematics Alternative: Compare and Choose',
  description: 'Looking at a Russian School of Mathematics alternative? RSM\'s format, grades, class size and hours from its own site, beside live online math classes, 2026.',
  ogDescription: 'RSM is a K to 12 after-school math program with branches and an online school for grades 2 to 10, average class size 12. What it publishes, how it differs from live online classes, and two problems solved two ways.',
  twitterDescription: 'The Russian School of Mathematics and live online math classes, compared on published facts.',
  pageName: 'Russian School of Mathematics Alternative',
  webPageDescription: 'A neutral comparison of the Russian School of Mathematics and Modern Age Coders for US families, built from russianschool.com as read on 31 October 2026, with worked problems labelled as ours.',
  courseDescription: 'Live online math classes for US students from elementary to high school, with problem solving and competition math, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'RSM alternative',
  navLinks: [
    { href: '#what-rsm', label: 'What RSM is' },
    { href: '#criteria', label: 'Criteria table' },
    { href: '#fit', label: 'When each fits' },
    { href: '#two-ways', label: 'Two ways' },
    { href: '#choose', label: 'Choosing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 12 &middot; A comparison from published facts',
  h1: 'Russian School of Mathematics alternative: compare the facts, then choose',
  lede: 'The Russian School of Mathematics, usually called RSM or simply "Russian math", is one of the most widely recognized after-school math programs in North America. Families look for an alternative for ordinary reasons: there is no branch nearby, the schedule clashes with something else, the child is outside the grades RSM-Online serves, or they want one-to-one teaching. This page sets out what RSM says about itself, side by side with how Modern Age Coders works, and leaves the choice with you. We do not claim either is better; they are built differently.',
  secondaryCta: { href: '#criteria', label: 'Go to the criteria table' },
  wa: 'Hello Modern Age Coders, we are comparing math programs for our child in the US. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['RSM grades', 'K to 12 at branches'],
    ['RSM-Online', 'Grades 2 to 10'],
    ['RSM class size', 'Average 12, per RSM'],
    ['RSM hours', '1.5 to 4 a week online'],
    ['Our classes', 'Live online only'],
    ['Our formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Russian School of Mathematics (RSM) is a K to 12 after-school math program with in-person branches and RSM-Online for grades 2 to 10, an average class size of 12 and three levels per grade, according to its own site. An RSM alternative might be a different live class, an online school or a private tutor. Modern Age Coders teaches math live online in a batch of 15 to 20 or 1-on-1, including Middle School Math Mastery; the first class is free.',

  picks: {
    eyebrow: 'Live courses to compare',
    h2: 'Three live math courses families weigh against RSM',
    lede: 'Each is taught live online by a regular teacher. Choose by your child&rsquo;s stage and interests.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'RSM / 01', title: 'Middle school math', note: 'Grades 6 to 8: ratios, negatives, pre-algebra and geometry, taught for depth.' },
      { course: 'middle-school-math-competitions-course', code: 'RSM / 02', title: 'Math competitions', note: 'MATHCOUNTS, AMC 8 and Math Kangaroo problem solving.' },
      { course: 'algebra-foundations-masterclass', code: 'RSM / 03', title: 'Algebra foundations', note: 'Pre-algebra and Algebra 1 for students ready to move ahead.' }
    ]
  },

  sections: [
    {
      id: 'what-rsm', tint: 'tint', eyebrow: 'What RSM is',
      h2: 'What is the Russian School of Mathematics?',
      lede: 'RSM describes itself as a K to 12 after-school math program running for nearly thirty years, with in-person branches and an online school. Its name refers to its teaching tradition.',
      body: [
        { kind: 'table', caption: 'The Russian School of Mathematics in its own words (russianschool.com home, about, online and programs pages, checked 31 October 2026)', head: ['Point', 'What RSM says'], rows: [
          ['Program', 'A "K-12 after-school math program", "From Kindergarten To Calculus"'],
          ['Approach', '"based on elite math schools in the former Soviet Union, adapted to the U.S. environment"'],
          ['Curriculum', '"one continuous curriculum, from K-12"'],
          ['Levels', '"multiple levels for every grade as well as a selective competitions program"'],
          ['Class size', '"Our average class size is 12, and with three levels per grade"'],
          ['Online', '"RSM-Online is open to students in grades 2 - 10"'],
          ['Hours online', 'Classes "meet anywhere from 1.5 to 4 hours per week, depending on the grade level"'],
          ['Homework', 'It "should take approximately half the length of your child&rsquo;s lesson to complete"'],
          ['Starting', 'A free evaluation to recommend a class'],
          ['Summer', 'The summer program "runs for 6 weeks with 2 classes per week"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How RSM grows',
          left: [
            'RSM says its first class was held outside Boston, Massachusetts, and that "We do not franchise", opening a new location only when an experienced teacher is available to lead it. It reports serving over 80,000 students across North America.',
            'It also states: "A majority of RSM branches are accredited by the Western Association of Schools and Colleges."'
          ],
          rightH3: 'RSM&rsquo;s view of tutoring',
          right: [
            'RSM is clear that it is a classroom program. Its programs page says: "We offer tutoring only as a short-term solution to prepare our students to join their peers in the classroom."',
            'It explains that classrooms let students verbalize and debate ideas. That is a considered position, and worth knowing if you are weighing a group against a private tutor.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.russianschool.com/" rel="noopener" target="_blank">Russian School of Math</a>, its <a class="ag-inline-link" href="https://www.russianschool.com/about" rel="noopener" target="_blank">about page</a>, <a class="ag-inline-link" href="https://www.russianschool.com/online" rel="noopener" target="_blank">RSM-Online</a> and <a class="ag-inline-link" href="https://www.russianschool.com/programs" rel="noopener" target="_blank">programs</a>, checked 31 October 2026. Russian School of Mathematics and RSM are trademarks of their owner. Modern Age Coders is not affiliated with, endorsed by or connected with RSM. We do not quote RSM&rsquo;s tuition; ask RSM directly.' }
      ]
    },
    {
      id: 'criteria', tint: 'deep', eyebrow: 'Criteria table',
      h2: 'How do RSM and Modern Age Coders compare, point by point?',
      lede: 'The facts that usually decide it: format, grades, live or self-paced, class size, hours and location. RSM&rsquo;s column is from its own site; ours describes how we work.',
      body: [
        { kind: 'table', caption: 'RSM (russianschool.com, checked 31 October 2026) and Modern Age Coders compared', head: ['Criterion', 'Russian School of Mathematics', 'Modern Age Coders'], rows: [
          ['Format', 'In-person branches and RSM-Online', 'Live online only'],
          ['Grades or ages', 'K to 12 at branches; grades 2 to 10 online', 'Age 6 to adult'],
          ['Live or self-paced', 'Live classes', 'Live classes'],
          ['Class size', 'Average 12, as published', 'Batch of 15 to 20, or 1-on-1'],
          ['Levels', 'Three levels per grade; selective competitions program', 'Placed by course and a first-class check'],
          ['Weekly time', '1.5 to 4 hours a week online, by grade', 'Set by course and format'],
          ['Private tutoring', 'Short-term only, to join a class', 'A full 1-on-1 option'],
          ['Location', 'Branches in North America and beyond, plus online', 'From home, anywhere in the US'],
          ['How to start', 'Free evaluation', 'Free first class'],
          ['Subjects', 'Math, including a competitions program', 'Math, plus coding and AI']
        ] },
        { kind: 'p', mt: true, html: 'Two differences deserve plain statement. First, RSM&rsquo;s published average class of 12 is smaller than our group batch of 15 to 20; if a small group matters most to you, that counts in RSM&rsquo;s favor, and our 1-on-1 option is the way to get a smaller class with us. Second, RSM&rsquo;s online school starts at grade 2 and runs to grade 10, while our online classes start at age 6 and continue through high school, so families outside those grades often look further.' }
      ]
    },
    {
      id: 'fit', tint: 'tint', eyebrow: 'When each fits',
      h2: 'When is RSM a good fit, and when might an alternative suit better?',
      lede: 'Neither choice is right for every child. These are the situations we see families describe, with no ranking implied.',
      body: [
        { kind: 'three', cells: [
          { h3: 'RSM may suit', p: 'A child who likes a classroom of peers, has a branch nearby or is in grades 2 to 10 for the online school, and whose family wants one long-term program with levels for every grade.' },
          { h3: 'We may suit', p: 'A child who needs 1-on-1 teaching, is outside RSM-Online&rsquo;s grades, wants flexible times, or would like coding beside math from the same school.' },
          { h3: 'Something else may suit', p: 'A student who needs a short burst of help for one school unit may be better served by the school&rsquo;s own support or a specialist tutor, whichever program they belong to.' }
        ] },
        { kind: 'table', mt: true, caption: 'Questions to ask any math program, including us (our checklist)', head: ['Question', 'Why it matters'], rows: [
          ['How is my child placed, and can they move level?', 'A wrong level is the most common reason a good program feels wrong'],
          ['How long is each class, and how often?', 'Hours per week vary widely between programs and grades'],
          ['How much homework, and who checks it?', 'RSM, for example, publishes its own guide: about half the lesson length'],
          ['Does the curriculum run ahead of school?', 'RSM says its curriculum is generally ahead of public school; some children love that, some find it confusing'],
          ['What happens if we need to stop?', 'Ask about notice, pauses and summer']
        ] }
      ]
    },
    {
      id: 'two-ways', tint: 'deep', eyebrow: 'Two ways',
      h2: 'What does solving one problem two ways look like?',
      lede: 'Most serious math programs, RSM included, talk about deep reasoning rather than drills. Here is what that means in practice, with two problems we wrote, each solved by reasoning first and by algebra second.',
      body: [
        { kind: 'two',
          leftH3: 'The age puzzle, by reasoning',
          left: [
            'A parent is 4 times as old as their child. In 20 years the parent will be twice as old as the child. How old is the child now? Our worked answer: call the child&rsquo;s age one unit, so the parent is four units and the gap between them is three units.',
            'The gap between two ages never changes. In 20 years the parent is twice the child&rsquo;s age, so the gap then equals the child&rsquo;s age then: one unit plus 20 equals three units. So two units are 20, one unit is 10. The child is 10 and the parent is 40.'
          ],
          rightH3: 'The same puzzle, by equation',
          right: [
            'Let the child be c, so the parent is 4c. In 20 years: 4c + 20 = 2(c + 20). Expanding gives 4c + 20 = 2c + 40, so 2c = 20 and c = 10.',
            'Check: 40 + 20 = 60 and 10 + 20 = 30, and 60 is twice 30. The reasoning route explains why the answer works; the equation route scales to harder versions.'
          ] },
        { kind: 'table', mt: true, caption: 'Heads and legs: 20 animals, chickens and goats, with 56 legs between them (our problem, three routes)', head: ['Route', 'Working', 'Answer'], rows: [
          ['Reasoning', 'If all 20 were chickens there would be 40 legs. There are 16 extra legs, and each goat adds 2, so there are 8 goats.', '8 goats, 12 chickens'],
          ['Equations', 'c + g = 20 and 2c + 4g = 56. Double the first: 2c + 2g = 40. Subtract: 2g = 16.', 'g = 8, c = 12'],
          ['Search', 'Try every number of goats from 0 to 20 and keep the one that gives 56 legs (code below).', '8 goats, 12 chickens']
        ] },
        { kind: 'code', mt: true, label: 'heads_and_legs.py (our example)', lang: 'Python 3', code: 'heads, legs = 20, 56\nfor goats in range(heads + 1):\n    chickens = heads - goats\n    if 2 * chickens + 4 * goats == legs:\n        print("goats:", goats, "chickens:", chickens)', note: 'Output: goats: 8 chickens: 12. The loop tries all 21 cases and finds exactly one. Students who see the same answer three ways remember the idea, not just the number.' },
        { kind: 'table', mt: true, caption: 'Try these two ways (our problems; answers in brackets)', head: ['Problem', 'Reasoning hint'], rows: [
          ['A parent is 3 times as old as a child; in 12 years, twice as old. Ages now?', 'The gap stays the same (12 and 36)'],
          ['30 animals, chickens and rabbits, 84 legs', 'Start with all chickens (12 rabbits, 18 chickens)'],
          ['Two numbers add to 50 and differ by 14', 'Take away the difference, then halve (18 and 32)'],
          ['A rectangle&rsquo;s length is twice its width; perimeter 48', 'Six equal widths around (8 by 16)']
        ] }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Choosing',
      h2: 'How should a family decide between RSM and an alternative?',
      lede: 'A short process that works for any comparison. It takes two or three weeks and gives you real evidence rather than reputation.',
      body: [
        { kind: 'ol', items: [
          '<b>Write down what you want from math outside school.</b> Catching up, going ahead, competitions, or confidence. Each program serves these differently.',
          '<b>Check the practical limits first.</b> Is there an RSM branch within reach, or is your child within RSM-Online&rsquo;s grades 2 to 10? Do the class times fit your week?',
          '<b>Take the free start each program offers.</b> RSM offers a free evaluation; we offer a free first class. Watch how your child talks about each afterwards.',
          '<b>Ask the same questions of both.</b> Use the checklist above, and write the answers down.',
          '<b>Decide for one term, not forever.</b> Review after about ten weeks: is your child keen, and is the homework manageable?'
        ] },
        { kind: 'p', mt: true, html: 'Families sometimes combine programs, for example a classroom program during the school year and live online competition classes in the summer. That is a perfectly reasonable plan if the child enjoys both and the hours stay sensible.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four kinds of math learner families describe to us',
    lede: 'Our description, to help you see which program shape suits your child.',
    table: { caption: 'Learner profiles (ours)', head: ['Profile', 'What it looks like'], rows: [
      ['1. Rebuilding', 'Behind at school; needs gaps repaired before going ahead'],
      ['2. Steady', 'On track; wants depth and confidence'],
      ['3. Ahead', 'Finds school math easy; wants harder problems'],
      ['4. Competing', 'Wants MATHCOUNTS, AMC or olympiad training']
    ] },
    left: { h3: 'For parents', ps: [
      'Profile 1 often suits 1-on-1 first. Profiles 2 to 4 often enjoy a group of peers.',
      'A child can move between profiles in a single year; review the fit each term.'
    ] },
    right: { h3: 'For students', ps: [
      'If a problem has two routes, try both. The second one teaches you something the first did not.',
      'Being stuck in class is normal. Say so out loud.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live math courses from elementary to olympiad',
    lede: 'Courses for every stage, all taught live online.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Ages 6 to 10', courses: [
        { code: 'RSM / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'From age 6.' },
        { code: 'RSM / E / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5.' },
        { code: 'RSM / E / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'RSM / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry.' },
        { code: 'RSM / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'RSM / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python and math.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'RSM / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1.' },
        { code: 'RSM / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'To calculus.' },
        { code: 'RSM / H / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'AMC 10, 12 and AIME.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How our live math classes are organized',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches across US time zones.' },
      { time: 'Weekends', l: 'Morning batches and competition practice.' },
      { time: '1-on-1', l: 'Times agreed with your family.' }
    ],
    cells: [
      { h3: 'Live, always', p: 'A teacher in every class.' },
      { h3: 'Same teacher', p: 'Continuity week to week.' },
      { h3: 'Reasoning first', p: 'Two routes to each answer.' },
      { h3: 'Own problems', p: 'Practice written by our teachers.' },
      { h3: 'Math and code', p: 'Both from one school.' },
      { h3: 'Size of class', p: 'Up to twenty in a batch, or 1-on-1.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some of our math students also build software. See examples on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'In their own words: parents reviewing us on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Our fees are published below and billed monthly in US dollars, so you can compare like for like once you have asked RSM for its tuition by grade.',
    free: ['A free first class', 'Meet the teacher', 'No card needed'],
    group: ['Fifteen to twenty students', 'A regular teacher', 'Choose your batch', 'Monthly'],
    one: ['One teacher, one student', 'Paced to your child', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'RSM alternatives: common questions',
    items: [
      { q: 'What is a good alternative to the Russian School of Mathematics?', a: 'It depends on why you are looking. Families often want online classes, 1-on-1 teaching, different hours or grades outside RSM-Online. Modern Age Coders teaches live online in a batch of 15 to 20 or one to one; compare the criteria and try a free class.' },
      { q: 'What grades does RSM-Online teach?', a: 'RSM says RSM-Online is open to students in grades 2 to 10. Its in-person branches describe a K to 12 program.' },
      { q: 'How big are RSM classes?', a: 'RSM states that its average class size is 12, with three levels per grade. Our group batches are 15 to 20, and we also offer 1-on-1.' },
      { q: 'How many hours a week is RSM?', a: 'RSM says its online classes meet anywhere from 1.5 to 4 hours per week, depending on the grade level.' },
      { q: 'Why is it called the Russian School of Mathematics?', a: 'RSM says the name comes from its approach, which is based on elite math schools in the former Soviet Union, adapted to the US environment.' },
      { q: 'Does RSM offer private tutoring?', a: 'RSM says it offers tutoring only as a short-term solution to prepare students to join their peers in the classroom. We offer 1-on-1 as a full, ongoing option.' },
      { q: 'Is Modern Age Coders better than RSM?', a: 'We do not claim that. The two are built differently: RSM runs classroom programs with branches and an online school, while we teach live online only, with group and 1-on-1 options and coding alongside math.' },
      { q: 'How much does RSM cost?', a: 'We do not quote other providers\' fees. RSM says it emails a PDF of tuition by grade on request. Our own fees are shown on this page.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with RSM?', a: 'No. Modern Age Coders is independent and not affiliated with the Russian School of Mathematics. RSM\'s names are its trademarks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More comparisons and math help for US families.',
    items: [
      { href: '/modern-age-coders-vs-mathnasium', label: 'Modern Age Coders vs Mathnasium', p: 'Another after-school math option compared.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Math competitions for middle school', p: 'The contests advanced students enter.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Problem solving for grades 6 to 8.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Olympiad and AMC tutoring', p: 'For high school competitors.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Linear equations and functions.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Math, coding and AI contest dates.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade, what they are studying and what you hope a math program will do. The first class is a real lesson with the teacher who would teach them.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or compare <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Modern Age Coders is an online school whose teachers work from India and teach US students live in their own time zone. A WhatsApp message is the fastest way to arrange a class.',
    formNote: 'Free first class; we do not ask for card details.'
  },

  footer: {
    cols: [
      { h4: 'Comparisons', links: [
        { href: '/modern-age-coders-vs-mathnasium', label: 'Versus Mathnasium' },
        { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live' },
        { href: '/codakid-alternative', label: 'CodaKid alternative' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/math-competitions-for-middle-school-students', label: 'Math competitions' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '8 goats, 12 chickens'
  },

  personalityCss: `
.ag-root.ag-rsm .ag-hero h1 { letter-spacing: -0.012em; max-width: 24ch; }
.ag-root.ag-rsm .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-rsm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-rsm .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; font-size: 0.78rem; }
.ag-root.ag-rsm .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Russian School of Math, russianschool.com home, about, online and programs pages, read raw 31 October 2026: K-12 after-school program for nearly thirty years; approach based on elite math schools in the former Soviet Union adapted to the US; one continuous curriculum; multiple levels per grade and a selective competitions program; average class size 12 with three levels per grade; RSM-Online grades 2 to 10 on a proprietary video platform; 1.5 to 4 hours a week; homework about half the lesson length; free evaluation; curriculum generally ahead of public school; does not franchise; over 80,000 students across North America; majority of branches WASC accredited; tutoring only short term; summer 6 weeks with 2 classes per week.',
    localProject: 'Our age puzzle (child 10, parent 40) by a constant-gap argument and by the equation 4c + 20 = 2(c + 20); the heads-and-legs puzzle (8 goats, 12 chickens) by reasoning, by equations and by a Python search over 21 cases; a practice set solved two ways; a program checklist and a five-step decision process. Lesson family: one problem by reasoning and by algebra, checked by search.',
    requiredMentions: [
      'based on elite math schools in the former Soviet Union, adapted to the U.S. environment',
      'Our average class size is 12, and with three levels per grade',
      'RSM-Online is open to students in grades 2 - 10',
      'meet anywhere from 1.5 to 4 hours per week, depending on the grade level',
      'We offer tutoring only as a short-term solution to prepare our students to join their peers in the classroom.',
      'A majority of RSM branches are accredited by the Western Association of Schools and Colleges.',
      'runs for 6 weeks with 2 classes per week',
      'We do not franchise',
      '4c + 20 = 2(c + 20)',
      'goats: 8 chickens: 12'
    ],
    sources: [
      { claim: 'RSM program, approach, class size and levels.', url: 'https://www.russianschool.com/' },
      { claim: 'RSM history, no franchising, student numbers, accreditation.', url: 'https://www.russianschool.com/about' },
      { claim: 'RSM-Online grades, hours, homework, evaluation.', url: 'https://www.russianschool.com/online' },
      { claim: 'RSM programs, tutoring policy, summer program.', url: 'https://www.russianschool.com/programs' }
    ],
    rejectedClaims: [
      'RSM tuition: not printed; RSM sends it by PDF on request and the brief forbids quoting other providers\' prices.',
      'RSM\'s competition results, AMC 8 claims, university outcomes and press list: not repeated.',
      'Founders\', principals\', teachers\' and students\' names from RSM pages: not used.',
      'RSM branch counts and the cities listed in its timeline: not printed beyond the founding near Boston.',
      'Any claim that Modern Age Coders is better than RSM: refused; the page lets the reader choose.',
      'Any affiliation with RSM: none, stated on the page.'
    ]
  }
};
