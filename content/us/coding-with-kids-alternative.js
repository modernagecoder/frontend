'use strict';
// Coding with Kids alternative (ag- comparison door; US cluster Phase 3, row 60).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Coding with Kids facts read raw on codingwithkids.com on
// 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-with-kids-alternative/):
//  - llms.txt / llms-full.txt (published by the company for AI systems, "Last updated: August 12, 2026"): "students ages
//    5-18"; "Founded: 2014"; "Live instruction only; not self-paced video courses"; online and in person; program families
//    Coder's Ladder, Tech Pathways, camps, private lessons, school partnerships; curriculum: "Ages 5-7: Little Coders",
//    "Ages 8-12: Scratch, Python, Minecraft Modding, Roblox, web development", "Ages 13-18: Python, Java, C#, AP CS";
//    "Level 1 (ages 8-11)"; AI by level: "Levels 1-2" blocks, "AI tools are not introduced yet"; "Level 3" text-based, AI
//    helps explain errors and debugging; "Levels 4-6" AI supports debugging, testing, documentation; "Level 7 and above"
//    software-engineering workflows.
//  - Coder's Ladder page: "Similar to martial arts belt system"; "Achieving Level 10 means mastering all fundamentals of
//    software development."
//  - About our programs: group classes "Once per week (approximately 1 hour 15 minutes)", live online, ongoing enrollment;
//    private classes "Once per week (50 minutes)", "One-on-one or small private group"; camps "Typically 5 days", live online
//    and in person; in-person enrichment "6 or 10 weeks"; "operating since 2014", "partnered with 900+ schools".
//  - Group classes page: Welcome Class, first weekly class, Parent Orientation, individual scorecard; "New students can join
//    throughout the year, typically every four weeks"; tuition prorated; missed class supported by "a 30-minute
//    instructor-led Office Hours session"; billing periods "four to eight weeks"; cancel before the next payment.
//  - Private classes page: reserved weekly time, same instructor; one eligible missed class per billing period may be
//    credited "when reported at least 24 hours ahead".
//  - Site menu: in-person regions CO Denver/Boulder, DC, MD, OR Portland, TX Austin, VA, WA Seattle, WA Tacoma/Olympia; also
//    Australia, Canada, United Kingdom.
// Not used: prices, average rating, leadership names.
// Our own material, labelled: the four-week time arithmetic (4 x 75 = 300 minutes = 5 hours group; 4 x 50 = 200 minutes
// private), the AI-by-level side-by-side with our own practice, the decision table.
// Lesson family: multiplying a weekly time by a cycle and converting minutes to hours.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Coding with Kids&rsquo; Coder&rsquo;s Ladder, in-person options and AI-by-level rules beside Modern Age Coders, from its own pages.' },
  slug: 'coding-with-kids-alternative',
  code: 'wka',
  accent: '#49627A',
  accentRationale: 'Coding with Kids alternative: a slate blue-grey, #49627A as allocated, softer than the comparison blue and above contrast on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding with Kids alternative',
  title: 'Coding with Kids Alternative: Ladder, In-Person, Online',
  description: 'Considering Coding with Kids or an alternative? Its Coder&rsquo;s Ladder, class lengths, in-person regions and AI rules, set beside Modern Age Coders, 2026.',
  ogDescription: 'Coding with Kids teaches ages 5 to 18 live, online and in person, on a ten-level Coder&rsquo;s Ladder with AI introduced step by step. What it publishes, and how a fully online school differs.',
  twitterDescription: 'Coding with Kids and Modern Age Coders, compared on published facts.',
  pageName: 'Coding with Kids Alternative',
  webPageDescription: 'A neutral comparison of Coding with Kids and Modern Age Coders for US families, built from codingwithkids.com as read on 17 October 2026, including its published approach to AI by level.',
  courseDescription: 'Live online coding classes for US kids and teens with a regular teacher, in batches, mini batches or one to one, from Modern Age Coders.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding with Kids alternative',
  navLinks: [
    { href: '#offer', label: 'What it offers' },
    { href: '#ladder-levels', label: 'The ladder' },
    { href: '#ai-levels', label: 'AI by level' },
    { href: '#minutes', label: 'Minutes a month' },
    { href: '#side', label: 'Side by side' },
    { href: '#fees', label: 'Our fees' }
  ],
  eyebrow: 'United States &middot; Ages 5 to 18 &middot; codingwithkids.com, 17 October 2026',
  h1: 'Coding with Kids alternative: what to weigh up',
  lede: 'Coding with Kids has taught children since 2014, live and never by recorded video, both online and in classrooms in several US regions. Its signature is the Coder&rsquo;s Ladder, a ten-level path the company likens to belts in martial arts, and it publishes unusually clear rules on when children start using AI. Families who look for an alternative often want a different schedule, a fully online school, or coding taught alongside maths. Here is what Coding with Kids publishes about itself, read on 17 October 2026, and how our school is arranged by comparison.',
  secondaryCta: { href: '#offer', label: 'What Coding with Kids offers' },
  wa: 'Hello Modern Age Coders, we are weighing you against Coding with Kids for our child in the US. Could we book a free first lesson?',
  heroNote: 'Drawn from codingwithkids.com &middot; 17 October 2026 &middot; a comparison, not a verdict',
  spec: [
    ['Coding with Kids ages', '5 to 18'],
    ['Teaching since', '2014'],
    ['Group class', 'About 75 minutes, weekly'],
    ['Private class', '50 minutes, weekly'],
    ['Our learners', 'From 6, adults too'],
    ['Our class sizes', 'Batch, six or fewer, or one'],
    ['Our hours', 'Weekdays or weekends, flexible'],
    ['Begin with', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding with Kids, founded in 2014, teaches ages 5 to 18 only live, online and in person, through weekly group classes of about 75 minutes on its ten-level Coder&rsquo;s Ladder, 50-minute private classes, and five-day camps, and it introduces AI tools only from Level 3. Modern Age Coders is fully online and live, teaches coding and maths from age 6 into adulthood, in batches, mini batches of up to six or privately.',

  picks: {
    eyebrow: 'Courses at matching rungs',
    h2: 'Three of our courses beside common Coder&rsquo;s Ladder stages',
    lede: 'Blocks, the switch to text, and application building: the same broad stages, taught live online.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'WKA / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Block coding foundations, then apps and AI.' },
      { course: 'python-ai-kids-masterclass', code: 'WKA / 02', title: 'Python and AI for kids', note: 'Upper elementary and middle school. The move to typed code.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'WKA / 03', title: 'Full stack web for teens', note: 'Teens. Applications with a real backend.' }
    ]
  },

  sections: [
    {
      id: 'offer', tint: 'tint', eyebrow: 'What it offers',
      h2: 'Coding with Kids&rsquo; programs, from its own pages',
      lede: 'Coding with Kids even publishes a plain summary for AI systems (an llms.txt file, last updated August 12, 2026), which made its facts easy to check. Prices are on its site.',
      body: [
        { kind: 'table', caption: 'Coding with Kids programs (codingwithkids.com, read 17 October 2026)', head: ['Program', 'Format', 'Rhythm'], rows: [
          ['Coder&rsquo;s Ladder group classes', 'Live online, small peer group, same teacher', 'Weekly, about 1 hour 15 minutes; join throughout the year'],
          ['Private classes', 'Live online, one-on-one or a small private group', 'Weekly, 50 minutes, a reserved slot'],
          ['Tech Pathways camps', 'Live online or in person', 'Typically five days, in school breaks'],
          ['In-person enrichment', 'In person during the school year', 'Sessions of 6 or 10 weeks'],
          ['School programs', 'After-school and partnerships', 'With 900+ schools to date']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where it teaches in person',
          left: [
            'The site menu lists US locations in the Denver and Boulder area, Washington DC, Maryland, Portland in Oregon, Austin in Texas, Virginia, Seattle and Tacoma or Olympia in Washington, as well as programs in Australia, Canada and the United Kingdom.',
            'Outside those areas, families use its live online classes.'
          ],
          rightH3: 'How a new student starts',
          right: [
            'The group-class page sets out four steps: a Welcome Class with small projects, the first weekly class, a short Parent Orientation call, and progress tracked on an individual scorecard.',
            'New students can join throughout the year, usually every four weeks, with tuition prorated for a mid-cycle start.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.codingwithkids.com/about-our-programs" rel="noopener" target="_blank">About our programs</a>, <a class="ag-inline-link" href="https://www.codingwithkids.com/coders-ladder-group-classes/" rel="noopener" target="_blank">group classes</a>, <a class="ag-inline-link" href="https://www.codingwithkids.com/private-classes/" rel="noopener" target="_blank">private classes</a> and <a class="ag-inline-link" href="https://www.codingwithkids.com/llms.txt" rel="noopener" target="_blank">llms.txt</a>, read 17 October 2026. Modern Age Coders and Coding with Kids are independent of each other.' }
      ]
    },
    {
      id: 'ladder-levels', tint: 'deep', eyebrow: 'The ladder',
      h2: 'How the Coder&rsquo;s Ladder is organised by age',
      lede: 'The company describes the ladder as similar to a martial arts belt system, and says that "Achieving Level 10 means mastering all fundamentals of software development."',
      body: [
        { kind: 'table', caption: 'Curriculum by age, as Coding with Kids summarises it (read 17 October 2026)', head: ['Ages', 'What they learn'], rows: [
          ['5 to 7', 'Little Coders: early foundations with age-appropriate tools'],
          ['8 to 11', 'Level 1, the standard beginner entry for elementary students'],
          ['8 to 12', 'Scratch, Python, Minecraft modding, Roblox and web development'],
          ['13 to 18', 'Python, Java, C#, AP CS and advanced projects']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Individual pace inside a group',
          left: [
            'Its group classes are described as a consistent weekly class where every child follows an individual learning path with the energy of a small peer group. Children advance as they show skills, and graduation exams mark the move up a level.',
            'That combination, one group but personal pace, is a distinctive design worth asking about in a trial.'
          ],
          rightH3: 'What families should ask',
          right: [
            'How many children are in the group your child would join, and at how many different levels? How long do students typically stay on one level?',
            'Coding with Kids&rsquo; FAQ covers these questions; the answers depend on the child, which is why its welcome step comes before the first class.'
          ] }
      ]
    },
    {
      id: 'ai-levels', tint: 'tint', eyebrow: 'AI by level',
      h2: 'When children start using AI: a published rule',
      lede: 'Few schools publish this. Coding with Kids states that AI supports the work while students own the thinking, and introduces it in stages.',
      body: [
        { kind: 'table', caption: 'AI on the Coder&rsquo;s Ladder (Coding with Kids llms.txt, last updated August 12, 2026) and our practice', head: ['Stage', 'Coding with Kids', 'Modern Age Coders (our practice)'], rows: [
          ['Blocks', 'Levels 1 to 2: AI tools are not introduced yet', 'Younger children learn what AI is, without accounts on AI tools'],
          ['First typed code', 'Level 3: AI can explain errors and help debug', 'A teacher explains errors first; AI only where the tool allows the age'],
          ['Applications', 'Levels 4 to 6: AI supports debugging, testing and documentation', 'Teens use age-appropriate AI with disclosure in their notes'],
          ['Advanced', 'Level 7 and above: disciplined software-engineering workflows', 'Review, testing and planning habits in project courses']
        ] },
        { kind: 'p', mt: true, html: 'The two approaches point the same way: fundamentals first, AI later and openly. For any school, ask the same three questions: at what age do students first use an AI tool, which tools, and how is AI use recorded in their work? A school that can answer clearly has thought about it.' },
        { kind: 'two', mt: true,
          leftH3: 'Why delay AI for beginners',
          left: [
            'A child who has never fixed a bug alone cannot judge whether an AI suggestion is right. Learning to read an error message, find the line and test a fix is the skill that later makes AI help safe and useful rather than a shortcut.',
            'Both schools treat the block stage as the place to build that habit without assistance.'
          ],
          rightH3: 'Age rules on the tools themselves',
          right: [
            'Separately from any school policy, AI products set their own minimum ages in their terms, and some are for adults only. A good class plan respects both: the school&rsquo;s stage and the tool&rsquo;s age rule.',
            'We never place a student under 18 on a product whose terms are for adults.'
          ] }
      ]
    },
    {
      id: 'minutes', tint: 'deep', eyebrow: 'Minutes a month',
      h2: 'Live teaching time over four weeks',
      lede: 'Our arithmetic from the published class lengths. Billing periods at Coding with Kids run four to eight weeks depending on the month, so four weeks is used here only as a common unit.',
      body: [
        { kind: 'table', caption: 'Live minutes over four weeks at Coding with Kids (our calculation from its published class lengths)', head: ['Format', 'Per week', 'Over four weeks'], numCols: [1, 2], rows: [
          ['Group class', 'About 75 minutes', '4 x 75 = 300 minutes, or 5 hours'],
          ['Private class', '50 minutes', '4 x 50 = 200 minutes, about 3.3 hours'],
          ['Office Hours for an eligible absence', '30 minutes', 'As needed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the private number is smaller',
          left: [
            'A private class is shorter but every minute is aimed at one child, while a 75-minute group class shares the teacher. Minutes alone do not measure attention.',
            'That is why both columns are worth having before you compare any school, including us: ask for live minutes a month and the number of children sharing them.'
          ],
          rightH3: 'Missed classes',
          right: [
            'For group classes, Coding with Kids supports eligible absences with a 30-minute instructor-led Office Hours session. For private classes, one eligible missed class per billing period may be credited when reported at least 24 hours ahead.',
            'Ask every school for its rule in writing; it matters more over a year than any single feature.'
          ] }
      ]
    },
    {
      id: 'side', tint: 'tint', eyebrow: 'Side by side',
      h2: 'The structural differences in one table',
      lede: 'How the two schools are set up, stated without ranking.',
      body: [
        { kind: 'table', caption: 'Coding with Kids (as published on 17 October 2026) and Modern Age Coders', head: ['Point', 'Coding with Kids', 'Modern Age Coders'], rows: [
          ['Where', 'Online and in person in several US regions', 'Online only, any state'],
          ['Ages', '5 to 18', '6 and up, adults included'],
          ['Path', 'Ten-level Coder&rsquo;s Ladder plus Tech Pathways', 'Courses by age band and goal'],
          ['Group class', 'Weekly, about 75 minutes, individual pace', 'Weekly batches of 15 to 20 or mini batches of up to six'],
          ['Private', '50 minutes weekly, reserved time', 'Monthly private plans, times agreed'],
          ['Subjects', 'Coding, engineering and AI', 'Coding, AI and maths']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Coding with Kids may suit', p: 'A family near one of its locations who wants in-person classes or camps, or a child who likes a clear belt-style ladder.' },
          { h3: 'We may suit', p: 'A family anywhere in the US who wants online classes, maths alongside coding, or a teen or adult learner.' },
          { h3: 'Decide by trial', p: 'Book its Welcome Class and our free first lesson in the same month and compare what your child built.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four rungs, whichever school you choose',
    lede: 'A simple map from Coding with Kids&rsquo; published stages to what we see in our own classes.',
    table: { caption: 'Rough stages (ours)', head: ['Rung', 'What it looks like'], rows: [
      ['1. Little coder', 'Ages 5 to 7, playing with sequences and blocks'],
      ['2. Block builder', 'Makes full games in blocks, no AI yet'],
      ['3. Text switcher', 'Writes first typed programs and reads error messages'],
      ['4. App maker', 'Builds applications, tests them and documents them']
    ] },
    left: { h3: 'For parents', ps: [
      'The jump from rung 2 to rung 3 is where many children stall. Extra live help there pays off.',
      'Rules about AI matter most at rung 3, when error messages first appear.'
    ] },
    right: { h3: 'For kids', ps: [
      'When you see an error, read it out loud before asking anyone, person or AI.',
      'A belt or a level is a nice goal, but the game you finish is the real proof.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine courses across the same rungs',
    lede: 'From first blocks to full applications, each one live with a regular teacher.',
    bands: [
      { num: 'I', h3: 'Blocks', sub: 'Ages 6 to 9', courses: [
        { code: 'WKA / B / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic in blocks.' },
        { code: 'WKA / B / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Games and apps.' },
        { code: 'WKA / B / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Thinking before code.' }
      ] },
      { num: 'II', h3: 'Text', sub: 'Ages 9 to 13', courses: [
        { code: 'WKA / T / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First typed code.' },
        { code: 'WKA / T / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Scripts in a game.' },
        { code: 'WKA / T / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths in Python.' }
      ] },
      { num: 'III', h3: 'Applications', sub: 'Ages 13 to 18', courses: [
        { code: 'WKA / A / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Toward AP CS.' },
        { code: 'WKA / A / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'APIs and databases.' },
        { code: 'WKA / A / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Engineering habits.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'Fully online, fully live',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches set in your time zone.' },
      { time: 'Weekends', l: 'Morning batches on Saturday or Sunday.' },
      { time: '1-on-1', l: 'A private slot planned with you.' }
    ],
    cells: [
      { h3: 'Live every time', p: 'No recorded course replaces a class.' },
      { h3: 'Anywhere in the US', p: 'No need to live near a location.' },
      { h3: 'AI with care', p: 'Introduced by age, always disclosed.' },
      { h3: 'Maths too', p: 'Coding and maths from one school.' },
      { h3: 'Teachers in India', p: 'Scheduled around US families.' },
      { h3: 'Monthly', p: 'Simple month-by-month plans.' }
    ]
  },

  projectsH2: 'What our learners have built',
  projectsLede: 'A few projects from our live online classes. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from families in our classes, unchanged.',

  fees: {
    h2: 'Our fees',
    lede: 'Our live classes are billed monthly in US dollars. Coding with Kids sets out its own tuition and payment plans on its website.',
    free: ['A free first lesson', 'A placement check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Weekly or more', 'Times you pick']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding with Kids and alternatives: common questions',
    items: [
      { q: 'What ages does Coding with Kids teach?', a: 'Ages 5 to 18, according to its own site read on 17 October 2026, starting with Little Coders at 5 to 7.' },
      { q: 'Are Coding with Kids classes live?', a: 'Yes. It describes its delivery as live instruction only, not self-paced video courses, online and in person.' },
      { q: 'How long are its classes?', a: 'Its programs page lists weekly group classes of approximately 1 hour 15 minutes and weekly private classes of 50 minutes. Camps typically run five days.' },
      { q: 'What is the Coder\'s Ladder?', a: 'Its ten-level curriculum, likened to a martial arts belt system. The company says achieving Level 10 means mastering all fundamentals of software development.' },
      { q: 'When does Coding with Kids introduce AI?', a: 'Its published guidance says AI tools are not introduced at Levels 1 to 2, can help explain errors from Level 3, support debugging, testing and documentation at Levels 4 to 6, and sit within software-engineering workflows from Level 7.' },
      { q: 'Does Coding with Kids teach in person?', a: 'Yes, in several US regions including Denver and Boulder, Washington DC, Maryland, Portland, Austin, Virginia and parts of Washington State, according to its site menu.' },
      { q: 'How is Modern Age Coders different?', a: 'We are online only and teach coding and maths from age 6 into adulthood, in batches, mini batches of up to six or privately, with teachers in India. Coding with Kids teaches ages 5 to 18 online and in person on its own ladder.' },
      { q: 'How do new students join a Coding with Kids group?', a: 'Its group-class page describes a Welcome Class, then the first weekly class, a short Parent Orientation call and an individual scorecard. New students can join throughout the year, typically every four weeks.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Coding with Kids?', a: 'No. The two schools are unrelated; we summarise its public pages and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Guides that help with the same choice.',
    items: [
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'Why live matters to many families.' },
      { href: '/blog/how-to-use-chatgpt-to-study-without-cheating', label: 'Using AI honestly', p: 'Disclosure habits for students.' },
      { href: '/coding-classes-in-texas', label: 'Coding classes in Texas', p: 'Online options for Texas families.' },
      { href: '/coding-classes-in-georgia', label: 'Coding classes in Georgia', p: 'Online options in Georgia.' },
      { href: '/modern-age-coders-vs-juni-learning', label: 'Compared with Juni Learning', p: 'Another comparison.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Start of our US section.' },
      { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live classes', p: 'Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.' },
      { href: '/best-online-coding-classes-for-kids-usa-compared', label: 'Online coding classes for kids, compared', p: 'Six US online coding class providers for kids, compared on their own published facts.' },
      { href: '/codewizardshq-alternative', label: 'CodeWizardsHQ alternative', p: 'CodeWizardsHQ and Modern Age Coders, compared on published facts.' }
    ]
  },

  start: {
    h2: 'Book a first lesson to compare',
    lede: 'Tell us roughly which rung your child is on, blocks, first typed code or apps, and we will begin there.',
    readFirst: 'Curious about method? See <a class="ag-inline-link" href="/how-we-teach">how lessons are taught here</a> and <a class="ag-inline-link" href="/courses">every syllabus</a>.',
    note: 'There is no classroom near you to visit: we teach live online from India, scheduled for US time zones. WhatsApp is quickest.',
    formNote: 'Free first lesson, no card required.'
  },

  footer: {
    cols: [
      { h4: 'Choosing a school', links: [
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded' },
        { href: '/modern-age-coders-vs-juni-learning', label: 'vs Juni Learning' },
        { href: '/modern-age-coders-vs-outschool', label: 'vs Outschool' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-classes-in-georgia', label: 'Georgia' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids' }
      ] }
    ],
    bottomRight: 'Fundamentals first, AI later'
  },

  personalityCss: `
.ag-root.ag-wka .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-wka .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-wka .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-wka .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-wka .ag-band-head h3 { letter-spacing: -0.002em; }
`,

  dossier: {
    curriculumAuthority: 'codingwithkids.com read raw 17 October 2026: ages 5-18; founded 2014; live only, online and in person; Coder\'s Ladder group classes weekly about 1 hour 15 minutes; private classes weekly 50 minutes, one-on-one or small private group; camps typically 5 days; in-person enrichment 6 or 10 weeks; 900+ schools; curriculum by age (Little Coders 5-7, Level 1 ages 8-11, 8-12 topics, 13-18 topics); AI by level (1-2 none, 3 errors and debugging, 4-6 debugging, testing, documentation, 7+ engineering workflows); ladder likened to martial arts belts, Level 10 = fundamentals of software development; joining every four weeks, prorated; Office Hours 30 minutes; private credit if reported 24 hours ahead; billing periods four to eight weeks; in-person regions.',
    localProject: 'Our four-week arithmetic from published class lengths: 4 x 75 = 300 minutes (5 hours) group, 4 x 50 = 200 minutes private; our AI-by-level side-by-side with our own practice. Lesson family: multiplying a weekly time by a cycle.',
    requiredMentions: ['Achieving Level 10 means mastering all fundamentals of software development.', 'Levels 1 to 2: AI tools are not introduced yet', 'Level 7 and above', 'August 12, 2026', '4 x 75 = 300 minutes', '4 x 50 = 200 minutes', 'a 30-minute instructor-led Office Hours session', 'at least 24 hours ahead', 'With 900+ schools to date', 'Little Coders', 'Tacoma or Olympia', 'independent of each other'],
    sources: [
      { claim: 'Coding with Kids programs: formats, lengths, ages, history.', url: 'https://www.codingwithkids.com/about-our-programs' },
      { claim: 'Coding with Kids llms.txt: AI by level, curriculum, founding year.', url: 'https://www.codingwithkids.com/llms.txt' },
      { claim: 'Coding with Kids group classes: welcome steps, joining, office hours.', url: 'https://www.codingwithkids.com/coders-ladder-group-classes/' },
      { claim: 'Coding with Kids private classes: reserved time, missed-class credit.', url: 'https://www.codingwithkids.com/private-classes/' },
      { claim: 'Coding with Kids Coder\'s Ladder: belt comparison, Level 10.', url: 'https://www.codingwithkids.com/coders-ladder/' }
    ],
    rejectedClaims: [
      'Coding with Kids tuition and plan prices: on its site, not repeated.',
      'Its average rating: a marketing figure, not used.',
      'Names of its leadership team: not used.',
      'A group size for its classes: no number published on the pages read.',
      'That either school\'s AI approach is better: refused; the page sets them side by side.',
      'Any affiliation: none, stated on the page.'
    ]
  }
};
