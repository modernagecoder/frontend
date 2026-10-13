'use strict';
// Online coding classes in Australia compared: criteria (ag- comparison door; AU cluster Phase 4, row 112).
// No provider is named, ranked or compared (spec non-goal); the page gives criteria and a method.
// Sources, read raw on 7 October 2026:
//  - Australian Tutoring Association, "Computer-based tutoring": "Some businesses use very high pressure sales tactics
//    when selling computer software."; "Also determine whether there is a local office where issues or concerns can be
//    brought or whether the office is in another State or Territory (or even country)."; "Exercise your right to use the
//    cooling off period prior to signing any contracts. Be very careful about direct debit systems and understand the
//    full implications of any contract before signing."
//  - Australian Tutoring Association, "Choosing a tutor", fees and contracts questions: "Do you have a refund policy?",
//    "How much can I expect to pay in total for the tuition?", "Are there any cancellation Fees or charges?", "How much
//    notice will I have to give in order not to be charged for a session of tutoring?"
//  - ACARA, Australian Curriculum v9 Digital Technologies 7-10 content (docx), Years 7-8 band description: "By the end of
//    Year 8 students should have had the opportunity to apply computational thinking by defining and decomposing
//    real-world problems, creating user experiences, designing and modifying algorithms, and implementing them in a
//    general-purpose programming language."
// Our worked example: six hypothetical options A to F on four criteria (live minutes a month, learners per teacher,
// cost index with the cheapest per live hour = 100, same teacher each week). Option D is dominated by A; option F by
// both A and C. The Pareto set is A, B, C and E. Lesson family: eliminating dominated options (Pareto set).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'COMPARING CLASSES', blurb: 'How to compare online coding classes in Australia on what matters, with no provider named: criteria, contract questions and a method for ruling options out.' },
  slug: 'online-coding-classes-australia-compared',
  code: 'occo',
  accent: '#402C9C',
  accentRationale: 'Online classes compared, Australia: a deep indigo chosen by hand, muted, at least 10 RGB units from every accent in use and outside the excluded hue bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Online coding classes compared, Australia',
  title: 'Online Coding Classes in Australia Compared: What to Check',
  description: 'How to compare online coding classes in Australia: the criteria that matter, contract and refund questions to ask, and a simple method for ruling weaker options out.',
  ogDescription: 'A fair way to compare online coding classes for Australian children: live teaching time, group size, continuity, curriculum fit and contracts, plus a method for eliminating dominated options.',
  twitterDescription: 'Comparing online coding classes in Australia: criteria, contract questions and a method.',
  pageName: 'Online Coding Classes in Australia Compared',
  webPageDescription: 'A criteria-based guide to comparing online coding classes in Australia, with contract questions and a worked elimination method.',
  courseDescription: 'Live online coding classes for Australian learners aged 6 to 67, in small groups or one to one, with one regular teacher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Comparing online classes',
  navLinks: [
    { href: '#criteria', label: 'Criteria' },
    { href: '#contracts', label: 'Contracts' },
    { href: '#method', label: 'A method' },
    { href: '#curriculum', label: 'Curriculum fit' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 67 &middot; A fair comparison',
  h1: 'Online coding classes compared',
  lede: 'Search for online coding classes in Australia and you will find recorded courses, live classes of every size, apps, camps and private tutors, all described in similar glowing words. This page does not rank anyone, including us. Instead it lists the criteria that actually separate a good class from a weak one, the contract questions the Australian Tutoring Association suggests asking, and a simple mathematical method for ruling options out before you compare the rest.',
  secondaryCta: { href: '#method', label: 'The method' },
  wa: 'Hello Modern Age Coders, we are comparing online coding classes in Australia. Could we book a free first lesson to judge yours?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; judge us by the same checklist',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Our format', 'Live online lessons'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Teacher', 'The same one each week'],
    ['Contract', 'Monthly, no term lock-in'],
    ['Joining fee', 'None'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Compare online coding classes on live teaching minutes, learners per teacher, whether the same teacher stays each week, how projects are built and explained, curriculum fit, and the contract terms. First rule out any option that another beats on every criterion; in our six-option example, two drop out that way. Then weigh the remaining options against what matters most to your child.',

  picks: {
    eyebrow: 'Judge us too',
    h2: 'Three of our courses, open to the same scrutiny',
    lede: 'Apply every criterion on this page to these, exactly as you would to anyone else.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'OCCO / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Live, small groups, one regular teacher.' },
      { course: 'python-complete-masterclass-teens', code: 'OCCO / 02', title: 'Typed Python for teens', note: 'Ages 13 to 18. Projects explained, not copied.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'OCCO / 03', title: 'Python for adults', note: 'From first program to real projects.' }
    ]
  },

  sections: [
    {
      id: 'criteria', tint: 'tint', eyebrow: 'Criteria',
      h2: 'The criteria that separate strong classes from weak ones',
      lede: 'Marketing language is similar everywhere. These questions cut through it.',
      body: [
        { kind: 'table', caption: 'Criteria for comparing online coding classes', head: ['Criterion', 'What to ask', 'A strong answer looks like'], rows: [
          ['Live teaching time', 'How many minutes a month is a teacher live with my child?', 'A clear number, with recorded content counted separately'],
          ['Learners per teacher', 'How many children does one teacher teach at once?', 'A stated maximum, small enough to see each screen'],
          ['Continuity', 'Is it the same teacher every week?', 'Yes, with a named teacher who knows your child'],
          ['Building, not copying', 'Does my child build the project and explain it?', 'The child writes and explains the code; you can see it'],
          ['Progression', 'What comes after this course?', 'A path from blocks to a typed language by early secondary'],
          ['Feedback', 'How will I hear about progress?', 'Specific skills named, not just badges or percentages'],
          ['Safety', 'Can I watch lessons, and how are teachers checked?', 'Parents welcome; checks explained honestly'],
          ['Contract', 'What does stopping cost?', 'Clear notice, no hidden fees, no long lock-in']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Live versus recorded',
          left: [
            'Recorded courses can be good value for self-driven learners, but nobody notices when a child is stuck, copying or quietly gave up. Count only live minutes as teaching.',
            'If a provider mixes recorded videos with short live check-ins, ask for the live minutes separately.'
          ],
          rightH3: 'Badges versus skills',
          right: [
            'Certificates and badges are fun, but they say little on their own. Ask your child to explain one program they wrote, line by line, after a month.',
            'If they can, the class is teaching. If they cannot, the badges are decoration.'
          ] }
      ]
    },
    {
      id: 'contracts', tint: 'deep', eyebrow: 'Contracts',
      h2: 'Contract and payment questions to ask before you sign',
      lede: 'The Australian Tutoring Association publishes guidance for parents. Two of its pages are especially relevant to online programs, and these lines are quoted exactly.',
      body: [
        { kind: 'table', caption: 'Fees and contracts questions from the Australian Tutoring Association\'s "Choosing a tutor" page', head: ['Question (quoted)', 'Why it matters'], rows: [
          ['Do you have a refund policy?', 'Know what happens if the class does not suit'],
          ['How much can I expect to pay in total for the tuition?', 'The total, not the weekly figure'],
          ['Are there any cancellation Fees or charges?', 'Stopping should not be expensive'],
          ['How much notice will I have to give in order not to be charged for a session of tutoring?', 'Notice periods vary widely']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Warnings about online and software programs',
          left: [
            'On computer-based programs, the Association warns that "Some businesses use very high pressure sales tactics when selling computer software." A good class lets you think, try a lesson and decide.',
            'It also advises: "Exercise your right to use the cooling off period prior to signing any contracts. Be very careful about direct debit systems and understand the full implications of any contract before signing."'
          ],
          rightH3: 'Where the provider is based',
          right: [
            'The Association suggests parents "determine whether there is a local office where issues or concerns can be brought or whether the office is in another State or Territory (or even country)."',
            'We say ours plainly: we are based in India, with no Australian office, and families reach us by WhatsApp, email or phone. You should know that before you decide, about us or anyone else.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://ata.edu.au/parent-info/choosing-a-tutor/" rel="noopener" target="_blank">Australian Tutoring Association, choosing a tutor</a> and <a class="ag-inline-link" href="https://ata.edu.au/parent-info/computer-based-tutoring/" rel="noopener" target="_blank">computer-based tutoring</a>. This page gives general information, not legal or consumer advice.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'A method',
      h2: 'Rule out dominated options first: finding the Pareto set',
      lede: 'When options differ on several criteria, a neat first step from mathematics is to remove any option that another option beats or equals on every criterion. What is left is called the Pareto set. Here is a worked example with six made-up options.',
      body: [
        { kind: 'table', caption: 'Six hypothetical online classes (invented values; cost index: cheapest per live hour = 100)', head: ['Option', 'Live minutes a month', 'Learners per teacher', 'Cost index per live hour', 'Same teacher weekly'], rows: [
          ['Option A', '480', '8', '125', 'Yes'],
          ['Option B', '240', '20', '100', 'No'],
          ['Option C', '480', '1', '188', 'Yes'],
          ['Option D', '360', '12', '150', 'No'],
          ['Option E', '600', '15', '200', 'No'],
          ['Option F', '240', '10', '220', 'Yes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who drops out',
          left: [
            'Option D loses to Option A on every criterion: fewer live minutes, more learners per teacher, a higher cost index and no fixed teacher. D is dominated, so it can be crossed off without any further thought.',
            'Option F is dominated twice: A beats it on minutes, group size and cost, and so does C. With a fixed teacher matched by both, F has nothing left to offer that they lack.'
          ],
          rightH3: 'Who stays',
          right: [
            'Options A, B, C and E remain. Each wins on something: B is the cheapest, C has a teacher to itself, E has the most minutes and A is a middle path.',
            'Choosing among these needs your priorities. A child who needs attention points to C or A; a family on a tight budget may accept B\'s larger group; nobody should choose D or F.'
          ] },
        { kind: 'p', mt: true, html: 'The idea is named after the economist Vilfredo Pareto, and it is easy to program. A function that compares two options criterion by criterion, then a loop that keeps only options nobody dominates, fits in about ten lines of Python. Teenagers enjoy running it on a decision of their own, such as phones or laptops, and seeing how many choices drop out before any argument about preferences begins.' },
        { kind: 'p', mt: true, html: 'Two cautions. First, the method only removes options that lose on everything, so it never tells you which of the survivors to pick. Second, it is only as good as the criteria: leave out "same teacher weekly" and Option F suddenly looks closer than it is. Use the criteria table above, not just price.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'Curriculum fit',
      h2: 'Does the class lead somewhere useful at school?',
      lede: 'A class does not have to follow the school curriculum, but it helps if it heads the same way.',
      body: [
        { kind: 'two',
          leftH3: 'What the Australian Curriculum expects by Year 8',
          left: [
            'The Australian Curriculum\'s Digital Technologies band description for Years 7 and 8 says: "By the end of Year 8 students should have had the opportunity to apply computational thinking by defining and decomposing real-world problems, creating user experiences, designing and modifying algorithms, and implementing them in a general-purpose programming language."',
            'In practice, that means typed code such as Python or JavaScript, not only blocks, by early secondary school.'
          ],
          rightH3: 'What to look for in a class',
          right: [
            'For primary children, block coding is the right start, but the class should have a clear path to a typed language around Years 5 to 7.',
            'For teenagers, look for real projects in a general-purpose language, with debugging and explanation, not only drag-and-drop tools.'
          ] },
        { kind: 'source', html: 'Source: ACARA, Australian Curriculum v9 <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies 7 to 10 content</a>, read 7 October 2026.' }
      ]
    },
    {
      id: 'checklist', tint: '', eyebrow: 'Your checklist',
      h2: 'A printable checklist for the first lesson',
      lede: 'Take these into any trial lesson, ours included.',
      body: [
        { kind: 'table', caption: 'What to watch for in a trial lesson', head: ['During the lesson', 'Good sign', 'Warning sign'], rows: [
          ['First five minutes', 'The teacher asks what your child already knows', 'A scripted demo that ignores your child'],
          ['Middle of the lesson', 'Your child types or drags most of the code', 'The teacher builds while your child watches'],
          ['When stuck', 'The teacher asks a question to unstick them', 'The teacher fixes it silently'],
          ['End of the lesson', 'Your child can explain what they built', 'Your child cannot say what the code does'],
          ['After the lesson', 'A clear, unhurried next step', 'Pressure to sign today']
        ] },
        { kind: 'p', mt: true, html: 'For the money side, our guide to <a class="ag-inline-link" href="/coding-classes-cost-australia">coding class costs in Australia</a> sets out per-lesson and per-term arithmetic; for the format question, see <a class="ag-inline-link" href="/online-vs-in-person-coding-classes-australia">online versus in-person classes</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'What progress should look like in any good class',
    lede: 'Use these stages to check whether a class is moving your child forward.',
    table: { caption: 'Four signs of real progress in an online coding class', head: ['Stage', 'What you should see'], rows: [
      ['1. First month', 'Small programs your child can run and explain'],
      ['2. First term', 'A project of their own design, with bugs fixed by them'],
      ['3. First year', 'Confident use of loops, variables and conditions'],
      ['4. Beyond', 'A move to a typed language and bigger projects']
    ] },
    left: { h3: 'For children', ps: [
      'Ask to see the projects, not just the certificates.',
      'Progress shows in what your child can explain, not how many lessons they attended.'
    ] },
    right: { h3: 'For teens and adults', ps: [
      'Look for projects that solve real problems, written in a general-purpose language.',
      'Debugging their own code is the clearest sign of growing skill.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses you can test against the checklist',
    lede: 'All taught live, in small groups or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'OCCO / CHD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Games, stories and animations.' },
        { code: 'OCCO / CHD / 02', slug: 'kids-ai-web-development-course', title: 'Web and AI for kids', blurb: 'Websites with a touch of AI.' },
        { code: 'OCCO / CHD / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'OCCO / TEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and real programs.' },
        { code: 'OCCO / TEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack web for teens', blurb: 'Front end to database.' },
        { code: 'OCCO / TEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python with real data.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'OCCO / ADL / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for adults', blurb: 'A solid professional language.' },
        { code: 'OCCO / ADL / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Real websites from scratch.' },
        { code: 'OCCO / ADL / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For interviews and deeper skill.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How our classes answer the criteria',
    lede: 'Our own answers to the checklist, so you can compare like with like.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Live minutes', p: 'Every lesson is live with a teacher.' },
      { h3: 'Group size', p: 'Five to ten, or one to one.' },
      { h3: 'Continuity', p: 'The same teacher each week.' },
      { h3: 'Building', p: 'Learners write and explain their code.' },
      { h3: 'Contract', p: 'Monthly, no joining fee, no lock-in.' },
      { h3: 'Location', p: 'Based in India, taught online.' }
    ]
  },

  projectsH2: 'Projects learners built and can explain',
  projectsLede: 'Work from our learners, each one built by the learner. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews, as families wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons outside India are paid monthly in US dollars, one rate in every country. There is no joining fee, no term contract and no pressure to sign: try the free lesson, think it over, then decide.',
    free: ['A free first lesson', 'Time to decide afterwards', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Live every lesson', 'Monthly'],
    one: ['A teacher to yourself', 'Your own pace', 'Your own projects']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Comparing online coding classes: common questions',
    items: [
      { q: 'How should I compare online coding classes in Australia?', a: 'Compare live teaching minutes, learners per teacher, whether the same teacher stays each week, whether your child builds and explains the code, the path to a typed language, feedback, safety and contract terms.' },
      { q: 'What is a Pareto set?', a: 'A Pareto set is the group of options left after removing every option that another one beats or equals on every criterion. It narrows a choice without needing to decide which criterion matters most.' },
      { q: 'What is a dominated option?', a: 'An option is dominated when another option is at least as good on every criterion and better on at least one. A dominated option can be ruled out straight away.' },
      { q: 'Are recorded coding courses worth it?', a: 'They can suit very self-driven learners, but nobody notices when a child is stuck or copying. Count only live minutes as teaching time when comparing.' },
      { q: 'What contract questions should I ask?', a: 'The Australian Tutoring Association suggests asking about the refund policy, the total cost, any cancellation fees and the notice needed to avoid being charged.' },
      { q: 'Should I worry if a provider is overseas?', a: 'You should know where they are based. The Australian Tutoring Association suggests checking whether the office is in another state or even another country. We are based in India and say so.' },
      { q: 'What should my child learn by Year 8?', a: 'The Australian Curriculum expects students by the end of Year 8 to have had the chance to implement algorithms in a general-purpose programming language, such as Python or JavaScript.' },
      { q: 'How do I spot high-pressure selling?', a: 'Be wary of any provider that pushes you to sign on the day. A good class lets you try a lesson and decide in your own time.' },
      { q: 'Do you rank other providers?', a: 'No. This page gives criteria and a method, and we invite families to apply them to us as well.' },
      { q: 'How much do your classes cost?', a: 'You can try one lesson free. Ongoing lessons are charged per month rather than per term, with nothing to join; the fees section has the detail.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More to help Australian families choose well.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All of our Australian guides.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Our price worked out by the term.' },
      { href: '/online-vs-in-person-coding-classes-australia', label: 'Online or in person', p: 'Comparing the two formats.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Why copying fails quietly.' },
      { href: '/online-coding-tutor-australia', label: 'Online coding tutor', p: 'Checks to make on any tutor.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our lessons, step by step.' }
    ]
  },

  start: {
    h2: 'Try a free lesson, then compare',
    lede: 'Book a time that suits your state. Bring the checklist from this page, watch the lesson, and decide in your own time.',
    readFirst: 'Want to read more first? See <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> or look at <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Message us on WhatsApp from Australia for the fastest reply; the team is in India on a +91 number, with no office in Australia.',
    formNote: 'Free first lesson, no card, no pressure to sign.'
  },

  footer: {
    cols: [
      { h4: 'Choosing well', links: [
        { href: '/coding-classes-cost-australia', label: 'What lessons cost' },
        { href: '/online-vs-in-person-coding-classes-australia', label: 'Online or in person' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free coding classes' },
        { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think' }
      ] }
    ],
    bottomRight: 'Cross off what loses on everything'
  },

  personalityCss: `
.ag-root.ag-occo .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-occo .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-occo .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-occo .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-occo .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-occo .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, comparing online coding classes. Australian Tutoring Association, computer-based tutoring: "Some businesses use very high pressure sales tactics when selling computer software"; check "whether the office is in another State or Territory (or even country)"; "Exercise your right to use the cooling off period prior to signing any contracts. Be very careful about direct debit systems". Choosing a tutor: "Do you have a refund policy?" and related fees questions. ACARA Digital Technologies 7-10, Years 7-8 band description: "implementing them in a general-purpose programming language".',
    localProject: 'Eliminating dominated options (ours): six hypothetical classes on live minutes a month, learners per teacher, cost index per live hour (cheapest = 100) and same teacher weekly. D (360, 12, 150, no) is dominated by A (480, 8, 125, yes); F (240, 10, 220, yes) is dominated by A and by C (480, 1, 188, yes). Pareto set: A, B, C, E. Lesson family: Pareto set.',
    requiredMentions: ['Pareto set', 'cost index', 'Option F', 'high pressure sales tactics', 'cooling off period', 'direct debit systems', 'another State or Territory (or even country)', 'Do you have a refund policy', 'implementing them in a general-purpose programming language', 'Vilfredo Pareto'],
    sources: [
      { claim: 'Australian Tutoring Association: computer-based tutoring (sales tactics, office location, cooling off, direct debit).', url: 'https://ata.edu.au/parent-info/computer-based-tutoring/' },
      { claim: 'Australian Tutoring Association: choosing a tutor, fees and contracts questions.', url: 'https://ata.edu.au/parent-info/choosing-a-tutor/' },
      { claim: 'ACARA: Australian Curriculum v9 Digital Technologies 7-10 content, Years 7-8 band description.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' }
    ],
    rejectedClaims: [
      'Any named provider, ranking or price comparison: excluded (spec non-goal); the six options are invented.',
      'ACCC consumer guarantee wording: accc.gov.au returned 403 and was not circumvented; no consumer-law claim is made.',
      'Legal advice on cooling-off rights: not given; the ATA wording is quoted and the page says it is general information.',
      'Claims that live classes always beat recorded courses: refused; recorded courses can suit self-driven learners.',
      'Victorian Working with Children Check details: the Service Victoria page needs JavaScript and was not used.'
    ]
  }
};
