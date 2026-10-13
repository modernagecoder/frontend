'use strict';
// One-on-one coding tutor, Australia (ag- topic door; AU cluster Phase 2, row 37).
// Sources, read raw on 7 October 2026:
//  - ABS, Schools, 2025 (released 5 March 2026): student to teaching staff ratio 12.8 to one for all schools, 13.9 in
//    primary, 11.7 in secondary; 325,190 full-time equivalent teaching staff.
//  - ABS, Schools methodology, 2025: ratios "are an indicator of the level of staffing resources used and should not
//    be used as a measure of class size".
//  - Bloom, B. S. (1984), "The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as
//    One-to-One Tutoring", Educational Researcher 13(6), 4-16 (Crossref metadata, DOI 10.3102/0013189X013006004).
// Our simulation (Python, 20,000 learners per row): a mastery gate that moves on after four of the last five
// answers are correct needs a mean of 5.5 questions at 85% accuracy, 8.5 at 65% and 15.3 at 50%.
// Lesson family: mastery learning gate (four of the last five correct), and why pace differs by learner.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'ONE-TO-ONE TUTOR', blurb: 'When one-to-one coding tuition suits an Australian learner better than a small group, with a mastery-gate simulation showing how differently learners need to move.' },
  slug: 'one-on-one-coding-tutor-australia',
  code: 'ooau',
  accent: '#6C1C2C',
  accentRationale: 'One-to-one coding tutor, Australia: a deep shiraz red chosen by hand, at least 10 RGB units from every accent in use',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'One-on-one coding tutor, Australia',
  title: 'One-on-One Coding Tutor in Australia | Private Lessons',
  description: 'One-on-one coding tuition in Australia: when private lessons beat a small group, how mastery pacing works, and what a learner gets from a teacher of their own.',
  ogDescription: 'Private coding lessons for Australian learners: who they suit, why pace matters, and a simulation showing one learner may need three times the practice of another.',
  twitterDescription: 'One-on-one coding tutor in Australia: when private lessons suit, and how mastery pacing works.',
  pageName: 'One-on-One Coding Tutor in Australia',
  webPageDescription: 'A guide for Australian families and adults deciding between one-to-one and small-group coding lessons, with mastery learning explained and simulated.',
  courseDescription: 'Private, one-to-one live online coding lessons for Australian learners aged 6 to 67, paced by mastery rather than by a class timetable.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'One-on-one coding tutor',
  navLinks: [
    { href: '#who', label: 'Who it suits' },
    { href: '#school', label: 'School ratios' },
    { href: '#mastery', label: 'Mastery pacing' },
    { href: '#private-lessons', label: 'Private lessons' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 67 &middot; A teacher of your own',
  h1: 'One-on-one coding tutor in Australia',
  lede: 'Most of our learners do well in a small group, and we say so to families who ask. But some learners need a teacher to themselves: the child who finishes every task in five minutes, the teenager who freezes when others are watching, the adult who wants to work on their own project at their own speed. This page explains when one-to-one lessons are worth it, puts Australian school staffing figures in honest context, and uses a short simulation of mastery learning to show why two learners in the same class can need very different amounts of practice.',
  secondaryCta: { href: '#mastery', label: 'Mastery pacing' },
  wa: 'Hello Modern Age Coders, we are interested in one-to-one coding lessons in Australia. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; private lessons paced by mastery',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Format', 'One teacher, one learner'],
    ['Paced by', 'Mastery, not a timetable'],
    ['Subjects', 'Coding, AI and maths'],
    ['Times', 'Set for your state'],
    ['Delivery', 'Live online video'],
    ['Alternative', 'Groups of fifteen to twenty'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A one-on-one coding tutor teaches a single learner live, so every minute goes to that learner\'s code and pace. Private lessons suit learners who are much faster, much quieter or working towards a specific goal. In our mastery simulation, a learner answering 85% correctly needed about 5.5 questions to pass a gate of four of the last five, while one at 50% needed 15.3, a gap a fixed class pace cannot serve.',

  picks: {
    eyebrow: 'Common private-lesson goals',
    h2: 'Three courses often taken one to one',
    lede: 'Any course can be private. These are the ones families most often choose to take individually.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'OOAU / 01', title: 'A fast young coder\'s Python', note: 'Ages 9 to 12. For children who outpace a group and need harder challenges.' },
      { course: 'competitive-programming-for-teens-course', code: 'OOAU / 02', title: 'Competition preparation', note: 'Teens. Problem sets matched to the learner\'s exact level.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'OOAU / 03', title: 'An adult\'s AI project', note: 'Adults. Built around your own idea, at your own speed.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who it suits',
      h2: 'When private lessons are worth it',
      lede: 'One-to-one tuition costs more than a group, so it should earn its place. These are the situations where it usually does.',
      body: [
        { kind: 'table', caption: 'One-to-one or a small group: how we advise families', head: ['Situation', 'Usually suits', 'Why'], rows: [
          ['Learner is far ahead of others their age', 'One to one', 'A group pace would bore them'],
          ['Learner is anxious about others watching', 'One to one, then a group later', 'Confidence first, peers second'],
          ['Specific goal or deadline, such as a competition or school project technique', 'One to one', 'Every lesson aimed at that goal'],
          ['Adult with their own project', 'One to one', 'The project becomes the course'],
          ['Learner enjoys company and is at a typical level', 'Small group', 'Peers motivate and teach each other'],
          ['Unsure', 'Start with the free lesson', 'The teacher will recommend honestly']
        ] },
        { kind: 'p', mt: true, html: 'Groups have real advantages: children learn by explaining to each other, see other approaches and stay motivated by friends\' progress. We recommend private lessons only when the learner\'s needs clearly differ from a group\'s. For a broader look at choosing a tutor and the safety checks to make, see our <a class="ag-inline-link" href="/online-coding-tutor-australia">online coding tutor guide</a>.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'School ratios',
      h2: 'What Australian school staffing figures do and do not say',
      lede: 'Parents sometimes quote student to teacher ratios when weighing tuition. The ABS publishes them, and is careful about what they mean.',
      body: [
        { kind: 'table', caption: 'Student to teaching staff ratios, Australian schools, 2025 (ABS)', head: ['Schools', 'Students per teacher'], rows: [
          ['All schools', '12.8 students to one teacher'],
          ['Primary', '13.9 students to one teacher'],
          ['Secondary', '11.7 students to one teacher']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Not a class size',
          left: [
            'The ABS says these ratios "are an indicator of the level of staffing resources used and should not be used as a measure of class size". A ratio of 12.8 counts every teacher, including those not in front of a class at that moment.',
            'So the figure does not tell you how many children share a teacher in a typical lesson, and we would not use it to argue for private tuition.'
          ],
          rightH3: 'What is fair to say',
          right: [
            'Australia had 325,190 full-time equivalent teaching staff in 2025, according to the ABS. Classroom teachers serve whole classes by design, and individual time for one child is necessarily limited.',
            'One-to-one tuition does not replace that; it adds a different kind of time, focused entirely on one learner\'s work.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://www.abs.gov.au/statistics/people/education/schools/2025" rel="noopener" target="_blank">ABS, Schools, 2025</a> (released 5 March 2026) and <a class="ag-inline-link" href="https://www.abs.gov.au/methodologies/schools-methodology/2025" rel="noopener" target="_blank">ABS, Schools methodology, 2025</a>.' }
      ]
    },
    {
      id: 'mastery', tint: 'tint', eyebrow: 'Mastery pacing',
      h2: 'A mastery gate: move on when ready, not when the clock says',
      lede: 'Mastery learning means a learner moves to the next idea only after showing they have the current one. A simple rule makes it concrete: keep practising until four of the last five answers are right. We simulated that rule to see how much practice different learners need.',
      body: [
        { kind: 'table', caption: 'Questions needed to pass a four-of-the-last-five gate (our simulation, 20,000 learners per row)', head: ['Chance of each answer being right', 'Average questions', 'Median', '9 in 10 learners finish within'], rows: [
          ['95%', '5.1', '5', '5'],
          ['85%', '5.5', '5', '7'],
          ['75%', '6.5', '5', '10'],
          ['65%', '8.5', '6', '15'],
          ['50%', '15.3', '12', '31']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers show',
          left: [
            'A learner who gets 85% right passes in about 5.5 questions. One who gets half right needs 15.3 on average, nearly three times as much practice, and one in ten of them needs 31 or more.',
            'In a class moving at one pace, the first learner waits and the second is left behind. In a private lesson, the gate decides, and the teacher can change the explanation instead of simply adding questions.'
          ],
          rightH3: 'The idea behind it',
          right: [
            'The educational researcher Benjamin Bloom wrote about exactly this tension in a 1984 article in Educational Researcher titled "The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring".',
            'The title itself frames the question we care about: how to make group teaching nearly as responsive as a private tutor, and when a private tutor is simply the better choice.'
          ] },
        { kind: 'p', mt: true, html: 'The simulation is ours and simplified: real learners improve as they practise, so their chance of a right answer rises over time. Learners who were stuck near 50% are exactly the ones who need a different explanation, not just more questions, and that is the strongest case for a teacher of their own. Children can write this simulation themselves in Python with a loop and a list of the last five answers.' },
        { kind: 'source', html: 'Source: Bloom, B. S. (1984), Educational Researcher 13(6), 4 to 16, <a class="ag-inline-link" href="https://doi.org/10.3102/0013189X013006004" rel="noopener" target="_blank">doi.org/10.3102/0013189X013006004</a> (title and details confirmed via Crossref). The table is our own simulation, labelled as such.' }
      ]
    },
    {
      id: 'private-lessons', tint: 'deep', eyebrow: 'Private lessons',
      h2: 'What a private lesson with us looks like',
      lede: 'Every lesson is live, with the same teacher each week, and built around one learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Your pace', p: 'The teacher moves on when the learner shows mastery, and slows down when they do not, without anyone else waiting.' },
          { h3: 'Your project', p: 'Learners can bring their own idea, from a game to a school technique question to a work tool, and build it across lessons.' },
          { h3: 'Your time', p: 'Lessons are set in your local time on weekday afternoons, evenings or weekends, in any Australian state.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Live teaching', p: 'A real teacher on the call for the whole lesson, from India, sharing the learner\'s screen and code.' },
          { h3: 'Parents welcome', p: 'Families of younger children can sit in on any lesson.' },
          { h3: 'Switch formats', p: 'Learners can move between private lessons and a small group as their needs change.' }
        ] },
        { kind: 'p', mt: true, html: 'Comparing costs? Our <a class="ag-inline-link" href="/coding-classes-cost-australia">guide to coding class costs in Australia</a> sets out the group and one-to-one arithmetic per lesson and per term.' }
      ]
    },
    {
      id: 'most-from-it', tint: '', eyebrow: 'Getting the most from it',
      h2: 'Making private lessons pay off',
      lede: 'Private tuition is a bigger commitment than a group, so it is worth setting it up well from the first week.',
      body: [
        { kind: 'table', caption: 'Habits that make one-to-one coding lessons more effective', head: ['Habit', 'Why it helps'], rows: [
          ['Agree a goal in the first lesson', 'A clear target, such as a finished game or a competition level, lets the teacher plan backwards'],
          ['Keep a short project log', 'Writing one line after each lesson shows progress and exposes ideas that need revisiting'],
          ['Try the between-lesson task alone', 'Getting stuck at home produces the sharpest questions for the next lesson'],
          ['Review every few weeks', 'Learner, family and teacher check the goal still fits and adjust the plan'],
          ['Plan a move to a group', 'Many learners benefit from rejoining peers once a specific gap is closed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For parents of younger children',
          left: [
            'Short, regular lessons work better than long, occasional ones. A child who codes for an hour every week usually progresses further than one who has two hours once a fortnight.',
            'Ask your child to show you one thing they built after each lesson. Explaining it to you is itself practice, and a gentle check on understanding.'
          ],
          rightH3: 'For adult learners',
          right: [
            'Bring real material. A spreadsheet you dread at work, a website you want to build or a dataset you are curious about makes a far better lesson plan than a generic exercise.',
            'Tell the teacher how you like to learn. In a private lesson, the method can change to suit you, which is the whole point of having a teacher to yourself.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How private learners progress',
    lede: 'Milestones we watch for in one-to-one lessons.',
    table: { caption: 'Four stages in private coding lessons', head: ['Stage', 'What it looks like'], rows: [
      ['1. Diagnose', 'The teacher finds exactly what the learner knows and where they wobble'],
      ['2. Gate', 'Each idea is practised until mastery is shown, then left behind'],
      ['3. Stretch', 'Harder problems arrive as soon as the learner is ready'],
      ['4. Own', 'The learner plans and builds their own project with light guidance']
    ] },
    left: { h3: 'For children', ps: [
      'Private lessons often suit very quick or very shy children first, with a move to a group later.',
      'Parents see progress through projects their child can open at home.'
    ] },
    right: { h3: 'For teens and adults', ps: [
      'Private lessons suit specific goals: competitions, technique for school projects, a career change or a work tool.',
      'The learner\'s own material often becomes the lesson plan.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses available one to one',
    lede: 'Every course can be private. These are popular with individual learners.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'OOAU / CHD / 01', slug: 'scratch-programming-complete-course', title: 'Private Scratch', blurb: 'Games at the child\'s own speed.' },
        { code: 'OOAU / CHD / 02', slug: 'python-ai-kids-masterclass', title: 'Private Python for children', blurb: 'For quick young coders.' },
        { code: 'OOAU / CHD / 03', slug: 'mental-maths-mastery-kids', title: 'Number sense, one to one', blurb: 'Maths confidence for coders.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'OOAU / TEN / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Training at the right level.' },
        { code: 'OOAU / TEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development in Unity', blurb: 'C# and shipped games.' },
        { code: 'OOAU / TEN / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Defensive cybersecurity', blurb: 'Online safety and white-hat skills.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'OOAU / ADL / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI project', blurb: 'Your idea, built properly.' },
        { code: 'OOAU / ADL / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis for work', blurb: 'Excel, SQL and Python.' },
        { code: 'OOAU / ADL / 03', slug: 'react-js-complete-masterclass-college', title: 'React, privately', blurb: 'From JavaScript to production.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Private lessons that adapt every week',
    lede: 'With one learner, the plan can change the moment it needs to.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Mastery gates', p: 'Move on when ready, not when the week ends.' },
      { h3: 'One teacher', p: 'The same teacher every week.' },
      { h3: 'Learner\'s projects', p: 'Their ideas become the material.' },
      { h3: 'Live, online', p: 'Screen and code shared throughout.' },
      { h3: 'Flexible format', p: 'Switch to a small group any time.' },
      { h3: 'Honest advice', p: 'We will say if a group would suit better.' }
    ]
  },

  projectsH2: 'Work from our private learners',
  projectsLede: 'Projects built in one-to-one lessons, at each learner\'s own pace. Browse more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families, copied without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Private and group lessons outside India are charged monthly in US dollars, with one rate for all countries. There is no joining fee and no term contract, so you may stop after any month or switch formats.',
    free: ['A free first lesson', 'Advice on private or group', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Similar level', 'Monthly'],
    one: ['A teacher to yourself', 'Mastery pacing', 'Your own project welcome']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Common questions about one-on-one coding tutors',
    items: [
      { q: 'What is a one-on-one coding tutor?', a: 'A one-on-one coding tutor teaches a single learner in live lessons, so the pace, material and feedback are set entirely around that learner rather than a group.' },
      { q: 'What is mastery learning?', a: 'Mastery learning is an approach in which a learner moves to the next idea only after showing they have mastered the current one, rather than moving on when the class does. A simple version is a gate such as four of the last five answers correct.' },
      { q: 'Are private lessons better than a small group?', a: 'Not always. Groups suit most learners and add peers to learn from. Private lessons suit learners who are much faster, much quieter or working towards a specific goal.' },
      { q: 'Why does pace matter so much?', a: 'In our simulation, a learner who answered 85% correctly needed about 5.5 questions to pass a mastery gate, while one at 50% needed 15.3. A single class pace cannot serve both.' },
      { q: 'Does the Australian student to teacher ratio mean classes have 13 students?', a: 'No. The ABS says the ratio is an indicator of staffing resources and should not be used as a measure of class size.' },
      { q: 'Can my child switch between private and group lessons?', a: 'Yes. Learners can move between formats as their needs change, often starting privately and joining a group later.' },
      { q: 'Can adults have private coding lessons?', a: 'Yes. Adults often take one-to-one lessons to build their own project, learn for a new job or work on a specific tool.' },
      { q: 'What times are private lessons in Australia?', a: 'Any agreed slot on weekday afternoons, evenings or weekends in your local time, in every state and territory.' },
      { q: 'Are private lessons live?', a: 'Yes. Every lesson is live online with a teacher, who shares the learner\'s screen and code throughout.' },
      { q: 'How much do one-on-one lessons cost?', a: 'The first lesson is free. After that, one-to-one lessons are paid monthly with no joining fee and no term lock-in, as shown in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on tuition, costs and our Australian classes.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/online-coding-tutor-australia', label: 'Online coding tutor', p: 'What a tutor does and what to check.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Group and private arithmetic.' },
      { href: '/coding-classes-near-me-australia-online-or-local', label: 'Coding classes near me', p: 'Local or online.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'For learners with a goal in mind.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Give us a number and a time. The teacher works with the learner one to one, then tells you honestly whether private lessons or a small group would suit better.',
    readFirst: 'Reading first? Start with <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Use WhatsApp from Australia for the fastest reply; our India-based team answers from a +91 number, and we have no office in Australia.',
    formNote: 'First lesson free, no card required.'
  },

  footer: {
    cols: [
      { h4: 'Private lessons', links: [
        { href: '/online-coding-tutor-australia', label: 'Online coding tutor' },
        { href: '/coding-classes-cost-australia', label: 'What lessons cost' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' }
      ] }
    ],
    bottomRight: 'Four of the last five, then move on'
  },

  personalityCss: `
.ag-root.ag-ooau .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-ooau .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-ooau .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-ooau .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ooau .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-ooau .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, one-to-one tuition. ABS, Schools, 2025 (released 5 March 2026): student to teaching staff ratio 12.8 students to one teacher (all schools), 13.9 (primary), 11.7 (secondary); 325,190 full-time equivalent teaching staff. ABS, Schools methodology, 2025: ratios "are an indicator of the level of staffing resources used and should not be used as a measure of class size". Bloom (1984), "The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring", Educational Researcher 13(6), 4-16.',
    localProject: 'A mastery gate simulation (Python, 20,000 learners per row, cap 60 questions): moving on after four of the last five answers are correct needs on average 5.1 questions at 95% accuracy, 5.5 at 85%, 6.5 at 75%, 8.5 at 65% and 15.3 at 50% (median 12, 90th percentile 31). Lesson family: mastery learning gate.',
    requiredMentions: ['mastery learning', 'four of the last five', '15.3', '12.8 students', '13.9 students', '11.7 students', '325,190', 'indicator of the level of staffing resources', '2 Sigma Problem', 'Educational Researcher'],
    sources: [
      { claim: 'ABS, Schools, 2025: student to teaching staff ratios and FTE teaching staff.', url: 'https://www.abs.gov.au/statistics/people/education/schools/2025' },
      { claim: 'ABS, Schools methodology, 2025: ratios are not a measure of class size.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'Bloom (1984), The 2 Sigma Problem, Educational Researcher 13(6), 4-16 (Crossref metadata).', url: 'https://doi.org/10.3102/0013189X013006004' }
    ],
    rejectedClaims: [
      'The effect size reported in Bloom (1984): the article was not read raw, so no figure from it is quoted.',
      'AERO evidence on tutoring: edresearch.edu.au returned a client challenge and was not circumvented.',
      'Average Australian class sizes: no primary source read; the ABS warns its ratio is not one.',
      'Claims that one-to-one tuition always beats groups: refused; the page recommends groups for most learners.',
      'Real learners\' accuracy rates: the simulation uses fixed hypothetical rates and says so.'
    ]
  }
};
