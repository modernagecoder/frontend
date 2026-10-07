'use strict';
// Online coding tutor, Australia (ag- topic door; AU cluster Phase 2, row 36).
// Sources, read raw on 7 October 2026:
//  - NSW Office of the Children's Guardian, Working with Children Check landing page: "The Working With Children
//    Check (WWCC) is a requirement for anyone who works or volunteers in child-related work in NSW".
//  - OCG, What parents need to know about the WWCC (updated 8 December 2022): parents "need to verify the Working
//    with Children (WWC) or Application (APP) number of a self-employed or independent worker before they start";
//    examples "au pairs and nannies", tutors, paid sport coaches, music teachers outside school, party entertainers;
//    only "Cleared" or "Application in progress"; verify on the Service NSW app.
//  - OCG, Sole traders (updated 3 March 2022): independent workers "such as tutors, coaches or entertainers".
//  - Lee, I. et al. (2011), "Computational thinking for youth in practice", ACM Inroads 2(1), 32-37, DOI
//    10.1145/1929887.1929902 (Crossref metadata and abstract: a "use-modify-create" framework).
// Lesson family: use-modify-create progression (what a tutor does with a learner's code week to week).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'ONLINE CODING TUTOR', blurb: 'What to expect from an online coding tutor in Australia, what to check before you book, and how a good tutor moves a learner from using code to creating it.' },
  slug: 'online-coding-tutor-australia',
  code: 'otau',
  accent: '#485498',
  accentRationale: 'Online coding tutor, Australia: a muted dusk blue chosen by hand, at least 13 RGB units from every accent in use and below the violet band',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Online coding tutor, Australia',
  title: 'Online Coding Tutor in Australia | Kids, Teens and Adults',
  description: 'Looking for an online coding tutor in Australia? What a good tutor does each week, how to check any tutor before booking, and how our live lessons work.',
  ogDescription: 'An online coding tutor for an Australian learner: what to expect, the checks NSW asks parents to make of private tutors, and how we work from India instead.',
  twitterDescription: 'Online coding tutor in Australia: what a good tutor does, what to check, and how our live lessons work.',
  pageName: 'Online Coding Tutor in Australia',
  webPageDescription: 'A guide for Australian families and adult learners choosing an online coding tutor, covering safety checks, teaching method and lesson format.',
  courseDescription: 'Live online coding tuition for Australian learners aged 6 to 67, in small groups or one to one, from Scratch and Python to web, apps and AI.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Online coding tutor',
  navLinks: [
    { href: '#what-tutors-do', label: 'What tutors do' },
    { href: '#checks', label: 'Checks' },
    { href: '#method', label: 'Our method' },
    { href: '#lessons', label: 'Lessons' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 67 &middot; Live online tuition',
  h1: 'Online coding tutor in Australia',
  lede: 'Hiring a coding tutor is different from enrolling in a course. A tutor works with your learner\'s own code, notices the misunderstandings a course would roll past, and adjusts every week. For a child, a tutor is also an adult you are inviting into your home, even when the visit is through a screen, so the checks matter as much as the teaching. This page sets out what a good online coding tutor should do, the checks New South Wales asks parents to make of private tutors, how our teachers in India differ from a local tutor, and the three-step method we use to move learners from running code to writing their own.',
  secondaryCta: { href: '#checks', label: 'Checks' },
  wa: 'Hello Modern Age Coders, we are looking for an online coding tutor in Australia. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; one regular teacher, live, every week',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Subjects', 'Scratch, Python, web, apps, AI'],
    ['Teachers', 'Based in India'],
    ['Format', 'Live online video'],
    ['Group', 'Five to ten, or one to one'],
    ['Times', 'Set for your state'],
    ['Parents', 'Welcome to sit in'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'An online coding tutor teaches a learner live over video, working on that learner\'s own code and adjusting each week. Before booking any private tutor for a child, check their safety credentials; in New South Wales, parents must verify a self-employed tutor\'s Working with Children Check. Modern Age Coders teaches from India, so instead we keep every lesson live, teacher-led and open to parents.',

  picks: {
    eyebrow: 'Where tuition usually starts',
    h2: 'Three courses families ask a tutor for',
    lede: 'Each can be taken in a small group or one to one. The free first lesson suggests which.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'OTAU / 01', title: 'A first tutor for young children', note: 'Ages 6 to 12. Scratch games built with a patient teacher beside them.' },
      { course: 'python-complete-masterclass-teens', code: 'OTAU / 02', title: 'A Python tutor for teens', note: 'Ages 13 to 18. From first programs to projects, with feedback on every one.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'OTAU / 03', title: 'A web development tutor for adults', note: 'Adults. React and Node.js, built around projects you choose.' }
    ]
  },

  sections: [
    {
      id: 'what-tutors-do', tint: 'tint', eyebrow: 'What tutors do',
      h2: 'What a good online coding tutor does each week',
      lede: 'A tutor earns their fee in the moments a course cannot reach: the specific mistake, the specific question, the specific next step for this learner.',
      body: [
        { kind: 'table', caption: 'A course compared with a tutor', head: ['Moment', 'A pre-recorded course', 'A live tutor'], rows: [
          ['A bug the learner cannot find', 'The video carries on', 'The tutor asks the question that leads to it'],
          ['A concept half understood', 'The next lesson assumes it', 'The tutor spots it and goes back'],
          ['A learner racing ahead', 'Waits for the next unit', 'Gets a harder challenge today'],
          ['A project idea of their own', 'No room for it', 'Becomes the next few weeks of work'],
          ['A drop in motivation', 'Often unnoticed', 'Noticed and talked about']
        ] },
        { kind: 'p', mt: true, html: 'In practice, a good weekly session has three parts: a look back at what the learner built or tried since last time, new work at the edge of their ability, and a clear task to try before next week. If a tutor mostly talks while the learner watches, something is wrong. Our page on <a class="ag-inline-link" href="/one-on-one-coding-tutor-australia">one-to-one coding tuition</a> covers when individual lessons suit better than a small group.' }
      ]
    },
    {
      id: 'checks', tint: 'deep', eyebrow: 'Checks',
      h2: 'The checks NSW asks parents to make of private tutors',
      lede: 'Every state runs its own scheme for people who work with children. New South Wales publishes clear guidance for parents hiring independent tutors, and it is a sensible standard for any family.',
      body: [
        { kind: 'table', caption: 'What the NSW Office of the Children\'s Guardian says, as published', head: ['Topic', 'In the OCG\'s words'], rows: [
          ['Who needs a check', '"The Working With Children Check (WWCC) is a requirement for anyone who works or volunteers in child-related work in NSW"'],
          ['What parents should do', 'Parents "need to verify the Working with Children (WWC) or Application (APP) number of a self-employed or independent worker before they start"'],
          ['Who that includes', 'Examples given: "au pairs and nannies", tutors, paid sport coaches, music teachers outside school and party entertainers'],
          ['Which results are acceptable', '"You can only hire someone with a \'Cleared\' or \'Application in progress\' status"'],
          ['Tutors working alone', 'Sole traders "may be independent workers such as tutors, coaches or entertainers who need to have their Check verified by clients"'],
          ['How to verify', 'An online form, or the Service NSW app']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For a local private tutor',
          left: [
            'If you hire an independent tutor who will teach your child in NSW, ask for their WWC or APP number, surname and date of birth, and verify them before the first lesson. Other states have their own schemes; check the rules where you live.',
            'A tutor who is reluctant to share these details is telling you something.'
          ],
          rightH3: 'For us, plainly',
          right: [
            'Our teachers work from India, so we cannot give you an Australian Working with Children Check number to verify. We would rather say that clearly than leave you to wonder.',
            'Instead, every lesson is live and led by a teacher, children are never left alone with other students, accounts are set up by parents, and you are welcome to sit in on any lesson.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: NSW Office of the Children\'s Guardian, <a class="ag-inline-link" href="https://www.ocg.nsw.gov.au/working-children-check" rel="noopener" target="_blank">Working with Children Check</a>, <a class="ag-inline-link" href="https://www.ocg.nsw.gov.au/parents-and-carers/what-parents-need-know-about-working-children-check" rel="noopener" target="_blank">What parents need to know</a> (updated 8 December 2022) and <a class="ag-inline-link" href="https://www.ocg.nsw.gov.au/working-children-check/organisation/sole-traders" rel="noopener" target="_blank">Sole traders</a> (updated 3 March 2022). This is general information, not legal advice.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Our method',
      h2: 'Use, modify, create: how a tutor moves a learner forward',
      lede: 'The most useful thing a coding tutor knows is when to hand over control. We follow a three-step progression that researchers named use-modify-create.',
      body: [
        { kind: 'table', caption: 'The use-modify-create progression in a tutoring session', head: ['Step', 'What the learner does', 'What the tutor does'], rows: [
          ['Use', 'Runs a working program and describes what it does', 'Chooses a program just beyond what the learner could write alone'],
          ['Modify', 'Changes the program to behave differently: a new rule, a new level, a new output', 'Asks for predictions before each change and helps when it breaks'],
          ['Create', 'Writes a new program of their own using the same ideas', 'Steps back, answers questions with questions, reviews at the end']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the idea comes from',
          left: [
            'Irene Lee and colleagues described it in a 2011 article in ACM Inroads, "Computational thinking for youth in practice". The article\'s abstract says they "present a \'use-modify-create\' framework, representing three phases of students\' cognitive and practical activity in computational thinking".',
            'We use it because it matches what we see: learners who jump straight to creating often stall, and learners who only ever use never gain confidence.'
          ],
          rightH3: 'What it looks like with a child',
          right: [
            'A nine-year-old plays a short Scratch game the tutor made (use), changes it so the cat moves faster and the score doubles (modify), then builds a different game with a timer and lives (create).',
            'The same three steps work for a teenager learning Python functions, or an adult learning a web framework.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Signs it is working',
          left: [
            'The learner starts guessing what a change will do before making it, and the guesses get better. They begin to suggest their own modifications instead of waiting for the tutor\'s.',
            'Within a few weeks, the "create" step stops feeling like a test and starts feeling like the fun part.'
          ],
          rightH3: 'Signs to raise with the tutor',
          right: [
            'Lessons that are mostly the tutor typing, or a learner who can run every program but never changes one. Both mean the progression has stalled at the first step.',
            'A good tutor will welcome the conversation and adjust; that responsiveness is the reason to have a tutor at all.'
          ] },
        { kind: 'source', html: 'Source: Lee, I. et al. (2011), ACM Inroads 2(1), 32 to 37, <a class="ag-inline-link" href="https://doi.org/10.1145/1929887.1929902" rel="noopener" target="_blank">doi.org/10.1145/1929887.1929902</a>; title, publication details and abstract confirmed via Crossref on 7 October 2026.' }
      ]
    },
    {
      id: 'lessons', tint: 'deep', eyebrow: 'Lessons',
      h2: 'How online tuition works with us',
      lede: 'The practical details Australian families ask about first.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Times for your state', p: 'Lessons are set in your local time. Our teachers\' day in India overlaps with Australian afternoons and evenings, so after-school slots are routine.' },
          { h3: 'One regular teacher', p: 'The same teacher each week, who knows the learner\'s projects and where they get stuck.' },
          { h3: 'Group or individual', p: 'A small group of five to ten at a similar level, or one-to-one lessons at a pace set by the learner.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Equipment', p: 'A laptop or desktop, keyboard, mouse or trackpad, webcam and headphones, and a steady connection.' },
          { h3: 'Between lessons', p: 'A short task to try before next week, sized so it can be finished without help.' },
          { h3: 'Parents in the loop', p: 'Finished projects can be opened at home, so families see progress every week.' }
        ] },
        { kind: 'p', mt: true, html: 'Families comparing options can read our guides to <a class="ag-inline-link" href="/coding-classes-cost-australia">what coding classes cost in Australia</a> and to <a class="ag-inline-link" href="/coding-classes-near-me-australia-online-or-local">local versus online classes</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'What progress with a tutor looks like',
    lede: 'Milestones we look for, whatever the learner\'s age.',
    table: { caption: 'Four signs that tuition is working', head: ['Stage', 'What you notice'], rows: [
      ['1. Confident running', 'The learner runs and explains programs without fear of breaking them'],
      ['2. Purposeful changes', 'They change code to do something new, and predict the result first'],
      ['3. Own projects', 'They start projects of their own between lessons'],
      ['4. Independent fixing', 'They find and fix their own bugs before asking for help']
    ] },
    left: { h3: 'For children', ps: [
      'Progress shows up as projects they want to show you, and fewer "it does not work" moments.',
      'Parents are welcome in lessons, especially at the start.'
    ] },
    right: { h3: 'For teens and adults', ps: [
      'Progress shows up as larger projects, cleaner code and a growing habit of testing.',
      'Adults often bring work or study problems, which become the tutoring material.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses we tutor most often',
    lede: 'Grouped by age. All are available in small groups or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'OTAU / CHD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch with a tutor', blurb: 'Games built step by step.' },
        { code: 'OTAU / CHD / 02', slug: 'python-ai-kids-masterclass', title: 'First Python with a tutor', blurb: 'Typed code from about nine.' },
        { code: 'OTAU / CHD / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox scripting', blurb: 'Luau inside a familiar world.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'OTAU / TEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python tutoring for teens', blurb: 'Beginner to advanced.' },
        { code: 'OTAU / TEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java tutoring', blurb: 'Object-oriented programming.' },
        { code: 'OTAU / TEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Real apps with React Native.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'OTAU / ADL / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web', blurb: 'React, Node.js and deployment basics.' },
        { code: 'OTAU / ADL / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for adults', blurb: 'From zero to useful.' },
        { code: 'OTAU / ADL / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Algorithms tutoring', blurb: 'For study and interviews.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A tutor who hands over the keyboard',
    lede: 'Our teachers measure a lesson by how much the learner did, not how much the teacher said.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Use first', p: 'Every new idea starts with a working example to run.' },
      { h3: 'Then modify', p: 'Learners change it, predicting each result.' },
      { h3: 'Then create', p: 'They build something new with the same idea.' },
      { h3: 'Live, always', p: 'A teacher on the call for the whole lesson.' },
      { h3: 'Parents welcome', p: 'Sit in on any lesson you like.' },
      { h3: 'Same teacher', p: 'Continuity from week to week.' }
    ]
  },

  projectsH2: 'Built by learners with our tutors',
  projectsLede: 'A selection of finished work, each built by the learner during tuition. The full collection is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Our Google reviews, quoted as families wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Tuition outside India is priced monthly in US dollars, one rate for all countries. No enrolment fee is charged and you are not committed to a term, so stopping at the end of a month is always possible.',
    free: ['One free trial lesson', 'Advice on group or individual', 'No card asked'],
    group: ['Five to ten learners', 'The same tutor each week', 'Grouped by level', 'Month to month'],
    one: ['Individual tuition', 'Times around your week', 'Pace set by the learner']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Common questions about online coding tutors',
    items: [
      { q: 'What does an online coding tutor do?', a: 'An online coding tutor teaches live over video, working on the learner\'s own code: finding the source of bugs, filling gaps in understanding, setting the right next challenge and reviewing progress each week.' },
      { q: 'What is use-modify-create?', a: 'Use-modify-create is a teaching progression in which learners first run and explain a working program, then change it, then create their own using the same ideas. It was described by Lee and colleagues in 2011.' },
      { q: 'Does a private coding tutor need a Working with Children Check?', a: 'In New South Wales, the Working with Children Check is required for child-related work, and parents are told to verify a self-employed tutor\'s WWC or APP number before they start. Other states run their own schemes, so check local rules.' },
      { q: 'Do your teachers have an Australian Working with Children Check?', a: 'Our teachers work from India, so we cannot provide an Australian check number to verify. Instead, every lesson is live and teacher-led, children are never left alone with other students, and parents can sit in on any lesson.' },
      { q: 'How do I verify a tutor\'s WWCC in NSW?', a: 'Ask for their WWC or APP number, surname and date of birth, then use the online verify form or the Service NSW app. Only hire someone shown as Cleared or Application in progress.' },
      { q: 'Is an online tutor as effective as an in-person one?', a: 'For coding it often is, because the learner and tutor share the same screen and code. Very young children who find screens tiring may do better in person.' },
      { q: 'What times are online tutoring lessons in Australia?', a: 'Lessons are set in your local time on weekday afternoons, evenings or weekends. Our teachers in India are two and a half to five and a half hours behind Australian clocks, which fits Australian after-school hours.' },
      { q: 'Can adults get an online coding tutor too?', a: 'Yes. Adults learn Python, web development, data and AI with us, usually in evening or weekend lessons, often using their own work problems as material.' },
      { q: 'Group lessons or one to one?', a: 'Small groups suit most learners and add peers to learn from. One-to-one lessons suit those who are much faster, much quieter, or working towards a specific goal.' },
      { q: 'How much does an online coding tutor cost with you?', a: 'The first lesson is free. After that, fees are monthly with no joining fee and no term lock-in; the fees section shows group and one-to-one prices.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on choosing tuition and on our Australian classes.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-to-one coding tutor', p: 'When individual lessons make sense.' },
      { href: '/coding-classes-near-me-australia-online-or-local', label: 'Coding classes near me', p: 'Local or online, and how to check.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Per lesson and per term.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids', p: 'Year levels and time zones.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and a time that suits. The learner works through a short program with a tutor, use first, then modify, and you can judge the fit for yourself.',
    readFirst: 'Prefer to read more? See <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or <a class="ag-inline-link" href="/courses">every course we teach</a>.',
    note: 'WhatsApp is quickest from Australia. Our tutors and team are in India, so replies come from a +91 number; we have no Australian office.',
    formNote: 'Free first lesson, no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Choosing tuition', links: [
        { href: '/one-on-one-coding-tutor-australia', label: 'One-to-one tutor' },
        { href: '/coding-classes-near-me-australia-online-or-local', label: 'Local or online' },
        { href: '/coding-classes-cost-australia', label: 'What classes cost' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/best-coding-classes-in-sydney', label: 'Sydney' }
      ] }
    ],
    bottomRight: 'Use it, change it, then make your own'
  },

  personalityCss: `
.ag-root.ag-otau .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-otau .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-otau .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-otau .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-otau .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-otau .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, online coding tuition and child safety checks. NSW Office of the Children\'s Guardian: "The Working With Children Check (WWCC) is a requirement for anyone who works or volunteers in child-related work in NSW"; parents "need to verify the Working with Children (WWC) or Application (APP) number of a self-employed or independent worker before they start"; examples "au pairs and nannies", tutors, paid sport coaches, music teachers outside school, party entertainers; "You can only hire someone with a \'Cleared\' or \'Application in progress\' status"; verify via online form or the Service NSW app; sole traders "may be independent workers such as tutors, coaches or entertainers who need to have their Check verified by clients". Lee et al. (2011), ACM Inroads 2(1): "use-modify-create" framework.',
    localProject: 'The use-modify-create progression in tutoring: a learner runs and explains a working program (use), changes it with predictions (modify), then writes a new one (create); worked example of a nine-year-old with a Scratch game. Grounded in Lee et al. (2011), ACM Inroads, abstract confirmed via Crossref. Lesson family: use-modify-create.',
    requiredMentions: ['use-modify-create', 'Office of the Children\'s Guardian', 'Working with Children Check', 'APP number', 'self-employed or independent worker', 'au pairs and nannies', 'Application in progress', 'Service NSW app', 'ACM Inroads', 'child-related work in NSW'],
    sources: [
      { claim: 'NSW OCG, Working with Children Check landing page: requirement for child-related work in NSW.', url: 'https://www.ocg.nsw.gov.au/working-children-check' },
      { claim: 'NSW OCG, What parents need to know about the WWCC: verification of self-employed workers, examples, acceptable statuses, Service NSW app.', url: 'https://www.ocg.nsw.gov.au/parents-and-carers/what-parents-need-know-about-working-children-check' },
      { claim: 'NSW OCG, Sole traders: tutors as independent workers whose check is verified by clients.', url: 'https://www.ocg.nsw.gov.au/working-children-check/organisation/sole-traders' },
      { claim: 'Lee, I. et al. (2011), Computational thinking for youth in practice, ACM Inroads 2(1), 32-37: use-modify-create framework (Crossref abstract).', url: 'https://doi.org/10.1145/1929887.1929902' }
    ],
    rejectedClaims: [
      'Whether overseas online tutors legally need an NSW WWCC: not stated; the page gives no legal advice and says plainly that we cannot provide an Australian check number.',
      'Working with children schemes in other states: their pages were not read raw, so only "other states run their own schemes" is said.',
      'Any statistics on tutoring effectiveness: no primary source read raw.',
      'The full text of Lee et al. (2011): dl.acm.org returned 403 and was not circumvented; only the Crossref abstract is quoted.',
      'Claims about our teachers\' qualifications or backgrounds: not made beyond working from India.'
    ]
  }
};
