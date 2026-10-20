'use strict';
// CodeWizardsHQ alternative (ag- comparison door; US cluster Phase 3, row 56).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. CodeWizardsHQ facts read raw on its own site on 17 October
// 2026 (copies in keyword-research-2026-09/us/src/codewizardshq-alternative/):
//  - Home: programs "Elementary School (Ages 7-10)", "Middle School (Ages 11-13)", "High School (Ages 14-18)"; AI track,
//    Python Language Track, AP CS Prep Track, Internship; classes "live, instructor-led sessions with just 4-6 students per
//    class" (en dash on their site, paraphrased here); "spending 90% of class time coding"; "100% of our instructors are
//    based in the United States"; Wizard Levels and Capstone Courses; CodeStream platform; daily homework help; "We record
//    all classes"; "100% Money-Back Guarantee for the first four sessions", "Does not apply to summer camps"; "10+ YEARS OF
//    TEACHING EXCLUSIVELY ONLINE".
//  - FAQs: "Each regular program course is 12 weeks long"; 55-minute sessions; accelerated courses 2 sessions a week (6
//    weeks) or 4 a week (3 weeks); "To complete a Wizard Level with 4 courses (including the Capstone) would take
//    approximately 1 year."; placement exam for experienced students; internship requires completing the High School Core
//    Track; 1-on-1 office hours in advanced courses.
//  - Elementary page course names: "Animations and Games with Scratch", "Logic with Scratch", "Intro to Text-Based
//    Programming". Middle school: "Intro to Programming with Python" first; then JavaScript, HTML and CSS, databases and
//    APIs. AP CS page: "AP Computer Science Prep Track", ages 14-18, a 2-course program (Java I and Java II).
// Not used: prices, Trustpilot score, review counts, "success rate", founder and reviewer names (marketing or personal).
// Modern Age Coders facts from scripts/brand-facts.json.
// Our own material, labelled: the arithmetic 12 x 55 = 660 minutes = 11 hours of class per course and 44 hours per
// four-course Wizard Level (from their published figures; excludes homework help and office hours); the placement walk
// through; the side-by-side questions.
// Lesson family: unit conversion and multiplication from published figures (minutes to hours).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'A neutral look at CodeWizardsHQ and how Modern Age Coders differs, using CodeWizardsHQ&rsquo;s own published facts.' },
  slug: 'codewizardshq-alternative',
  code: 'cod',
  accent: '#50571D',
  accentRationale: 'CodeWizardsHQ alternative: a muted moss olive, #50571D as allocated, apart from the cluster blues and strong on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'CodeWizardsHQ alternative',
  title: 'CodeWizardsHQ Alternative: How the Two Compare (2026)',
  description: 'Looking at CodeWizardsHQ and alternatives? Its tracks, class size, course length and support from its own site, set beside Modern Age Coders, read October 2026.',
  ogDescription: 'CodeWizardsHQ runs a structured, level-based track of live classes for ages 7 to 18. Here is what it publishes, how Modern Age Coders differs, and how to decide, without rankings.',
  twitterDescription: 'CodeWizardsHQ and Modern Age Coders, compared on published facts.',
  pageName: 'CodeWizardsHQ Alternative',
  webPageDescription: 'A neutral comparison of CodeWizardsHQ and Modern Age Coders for US families, built from facts on the CodeWizardsHQ website read on 17 October 2026, with our own arithmetic clearly labelled.',
  courseDescription: 'Live online coding classes for US children and teens, in batches, mini batches or one to one, from Modern Age Coders.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CodeWizardsHQ alternative',
  navLinks: [
    { href: '#facts', label: 'Their facts' },
    { href: '#track', label: 'The track' },
    { href: '#hours', label: 'Hours per level' },
    { href: '#differ', label: 'How we differ' },
    { href: '#choose', label: 'Choosing' },
    { href: '#fees', label: 'Our fees' }
  ],
  eyebrow: 'United States &middot; Ages 7 to 18 &middot; Read 17 October 2026',
  h1: 'CodeWizardsHQ alternative: what each one offers',
  lede: 'CodeWizardsHQ is a US online coding school built around one idea: a structured, multi-year track where each 12-week course leads to the next. Many families who search for an alternative are not unhappy with it; they want to check whether a different structure, schedule or group size suits their child better. This page sets out what CodeWizardsHQ publishes about itself, read on its own site on 17 October 2026, places our own offer beside it in plain terms, and leaves the decision with you.',
  secondaryCta: { href: '#facts', label: 'Read the facts first' },
  wa: 'Hello Modern Age Coders, I am comparing you with CodeWizardsHQ for my child in the US. Could we book a free first lesson?',
  heroNote: 'Facts from codewizardshq.com &middot; read 17 October 2026 &middot; no rankings',
  spec: [
    ['CodeWizardsHQ ages', '7 to 18'],
    ['Their class size', 'Four to six'],
    ['Their course length', '12 weeks'],
    ['Their teachers', 'US-based'],
    ['Our ages', '6 to 67'],
    ['Our formats', 'Batch, mini batch, 1-on-1'],
    ['Our timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'CodeWizardsHQ teaches live online classes of four to six students for ages 7 to 18, in 12-week courses that stack into Wizard Levels, with US-based instructors, recorded classes and daily homework help. Modern Age Coders also teaches live online, for ages 6 to 67, in batches of 15 to 20, mini batches of up to 6 or 1-on-1, with teachers working from India and monthly billing.',

  picks: {
    eyebrow: 'If you would like to compare in class',
    h2: 'Three of our courses that match common CodeWizardsHQ starting points',
    lede: 'Comparable starting points by age, so a trial lesson with us is a like-for-like test.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'COD / 01', title: 'Scratch coding', note: 'Younger children. Games and logic in blocks before typed code.' },
      { course: 'python-ai-kids-masterclass', code: 'COD / 02', title: 'Python and AI for kids', note: 'Middle school. Python as the first typed language.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'COD / 03', title: 'AP Computer Science A', note: 'High school. Java, objects and the AP exam.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'What CodeWizardsHQ publishes',
      h2: 'CodeWizardsHQ in its own words, summarised',
      lede: 'Each row comes from codewizardshq.com, read on 17 October 2026. We have paraphrased rather than copied wording, and left out prices, ratings and success figures, which are best read on their own site.',
      body: [
        { kind: 'table', caption: 'CodeWizardsHQ at a glance, from its own website (read 17 October 2026)', head: ['Point', 'What CodeWizardsHQ says'], rows: [
          ['Programs', 'Elementary (ages 7 to 10), Middle School (11 to 13), High School (14 to 18), plus AI, Python and AP CS Prep tracks'],
          ['Format', 'Live, instructor-led online classes; not pre-recorded or self-paced'],
          ['Class size', 'Four to six students per class'],
          ['In class', 'Students spend 90% of class time coding'],
          ['Teachers', '100% of instructors based in the United States'],
          ['Course length', 'Each regular course is 12 weeks, with 55-minute sessions'],
          ['Progression', 'Courses grouped into Wizard Levels, each ending in a Capstone course'],
          ['Support', 'Recorded classes, daily homework help, a student forum; 1-on-1 office hours in advanced courses'],
          ['Trial', 'A money-back guarantee over the first four sessions instead of a free trial class; not for summer camps'],
          ['Experience', 'More than ten years teaching exclusively online']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.codewizardshq.com/" rel="noopener" target="_blank">codewizardshq.com</a> home page and <a class="ag-inline-link" href="https://www.codewizardshq.com/faqs/" rel="noopener" target="_blank">FAQs</a>, read 17 October 2026. Programs and policies change; check their site for current details. Modern Age Coders is not connected with CodeWizardsHQ.' }
      ]
    },
    {
      id: 'track', tint: 'deep', eyebrow: 'The track',
      h2: 'How the CodeWizardsHQ track is built',
      lede: 'The structure is the clearest thing that sets CodeWizardsHQ apart. Here are the first courses as its program pages list them, and what that order implies.',
      body: [
        { kind: 'table', caption: 'First courses on each CodeWizardsHQ core track, as listed on its program pages (read 17 October 2026)', head: ['Track', 'Course 1', 'Course 2', 'Course 3'], rows: [
          ['Elementary, first level', 'Animations and Games with Scratch', 'Logic with Scratch', 'Intro to Text-Based Programming'],
          ['Elementary, next level', 'Programming Fundamentals with Python', 'Logic with Python', 'Modular Programming with Python'],
          ['Elementary, later level', 'Creating Websites with HTML/CSS', 'Responsive Websites with HTML/CSS', 'Introduction to JavaScript'],
          ['AP CS Prep (ages 14 to 18)', 'Java I: Introduction to Java', 'Java II: Intermediate Java', 'Two courses in this track']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a fixed sequence gives a child',
          left: [
            'A child always knows the next step, and each course assumes the one before. CodeWizardsHQ describes its approach as a complete path rather than disconnected courses, and its middle school track moves from Python to JavaScript, HTML and CSS, then databases and APIs.',
            'Students with experience are not forced to start at the bottom: the FAQs describe a placement exam for matching to the right course.'
          ],
          rightH3: 'What a fixed sequence asks of a family',
          right: [
            'Commitment. The FAQs say a Wizard Level of four courses, including the Capstone, takes approximately one year. That suits families planning years ahead and fits less well with a child who wants one topic now, such as Roblox or an AP exam in May.',
            'For short, single-topic goals CodeWizardsHQ also lists summer camps and three-week accelerated tracks.'
          ] }
      ]
    },
    {
      id: 'hours', tint: 'tint', eyebrow: 'Our arithmetic',
      h2: 'How many hours of live class is one level?',
      lede: 'A worked example from CodeWizardsHQ&rsquo;s own published figures. The multiplication is ours; the inputs are theirs.',
      body: [
        { kind: 'table', caption: 'Live class time per course and per Wizard Level (our calculation from CodeWizardsHQ&rsquo;s published course length and session length)', head: ['Step', 'Calculation', 'Result'], rows: [
          ['Sessions in a 12-week course', 'One session a week for 12 weeks', '12 sessions'],
          ['Minutes per course', '12 x 55', '660 minutes'],
          ['Hours per course', '660 / 60', '11 hours'],
          ['Hours per Wizard Level', '4 courses x 11 hours', '44 hours'],
          ['Time to finish a level', 'Their own estimate', 'About one year']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the figure leaves out',
          left: [
            'The 44 hours count scheduled class time only. CodeWizardsHQ also offers daily homework help, recordings and, in advanced courses, office hours, so a motivated student can spend far more time with an instructor than the timetable shows.',
            'It also leaves out homework itself, which the FAQs describe as part of each course.'
          ],
          rightH3: 'Why do the sum at all',
          right: [
            'Because "a year-long level" and "44 hours of class" describe the same thing differently, and it helps to see both before comparing any provider. Ask every school you shortlist, including us, for the live minutes per month.',
            'The arithmetic is also a good habit to teach a child: turn a marketing phrase into units you can compare.'
          ] }
      ]
    },
    {
      id: 'differ', tint: 'deep', eyebrow: 'How we differ',
      h2: 'Where Modern Age Coders is set up differently',
      lede: 'Plain differences in structure, not claims of being better. Some of them will matter to your family and some will not.',
      body: [
        { kind: 'table', caption: 'Structural differences, CodeWizardsHQ (from its site, read 17 October 2026) and Modern Age Coders (our own facts)', head: ['Point', 'CodeWizardsHQ', 'Modern Age Coders'], rows: [
          ['Ages', '7 to 18', '6 to 67, with kids from age 6'],
          ['Group size', 'Four to six', '15 to 20, mini batches up to 6, or 1-on-1'],
          ['Structure', 'Fixed tracks of 12-week courses', 'Courses chosen by goal; monthly billing'],
          ['Teachers', 'Based in the United States', 'Teaching live online from India'],
          ['Subjects', 'Coding, AI and AP CS prep', 'Coding, AI and mathematics'],
          ['Missed class', 'Recording and slides provided', 'Discussed with the teacher; ask us in the first lesson']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Families who often prefer a fixed track',
          left: [
            'Those who want the decisions made for them for several years, with the same small group moving together, and who value US-based teachers.',
            'CodeWizardsHQ&rsquo;s recorded classes and drop-in homework help also suit a child who likes to review at their own pace between sessions.'
          ],
          rightH3: 'Families who often look elsewhere',
          right: [
            'Those with one clear goal this term, such as an AP exam, a Roblox game or catching up in maths, or who want coding and maths taught by one school.',
            'Also families who want month-to-month flexibility, or a private teacher whose times move with the family calendar.'
          ] },
        { kind: 'p', mt: true, html: 'One difference deserves a plain word. CodeWizardsHQ states that every one of its instructors is based in the United States; our teachers are in India and teach US students live over video, with class times set in your local time zone. Some families care a great deal about this and some not at all. The only reliable test is a lesson: listen to how clearly the teacher explains, how quickly they spot a mistake in your child&rsquo;s code, and whether your child leaves the class wanting to build something else. Group size is the other real difference. Four to six students in every class is a defining feature of CodeWizardsHQ, while our default batches are larger, with a mini batch or a private teacher available when a child needs closer attention.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Choosing',
      h2: 'A placement walk-through: a 12-year-old with some Scratch',
      lede: 'Our worked example of how a family might test both options for the same child, using each school&rsquo;s published route.',
      body: [
        { kind: 'ol', items: [
          '<b>Check the starting course.</b> CodeWizardsHQ&rsquo;s middle school track begins with Intro to Programming with Python; its FAQ offers a placement exam for experienced students.',
          '<b>Decide whether Scratch counts as experience.</b> CodeWizardsHQ&rsquo;s FAQ describes its Scratch course as structured and different from casual use, so a child may still start there or at Python.',
          '<b>Book comparable trials.</b> The first four CodeWizardsHQ sessions fall under its money-back guarantee; our first lesson is free. Test the same topic, Python, in both.',
          '<b>Compare the hour, not the brochure.</b> After each, ask your child what they built, how often they asked for help and whether they want to go back.',
          '<b>Check the calendar fit.</b> A 12-week course and a monthly plan suit different families; write down your term dates before deciding.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 7 to 10', p: 'Both teach Scratch first. Compare how quickly each moves a child toward typed code.' },
          { h3: 'Ages 11 to 13', p: 'Both start Python. Ask how projects are reviewed and how much time is spent coding live.' },
          { h3: 'Ages 14 to 18', p: 'Both prepare Java for AP Computer Science A. Ask how close to the exam each course runs.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four points at which families compare schools',
    lede: 'Questions families often ask when weighing a structured track against other options.',
    table: { caption: 'Common decision points (ours)', head: ['Moment', 'The usual question'], rows: [
      ['1. First enrollment', 'Small fixed group or flexible format?'],
      ['2. End of a course', 'Continue the track or switch topic?'],
      ['3. A hard concept', 'Keep the group or add private lessons?'],
      ['4. An exam year', 'Broad track or exam-focused course?']
    ] },
    left: { h3: 'For parents', ps: [
      'Switching between schools is easiest at the end of a course or level, when a child&rsquo;s projects show exactly what they can do.',
      'Bring that work to any trial lesson; it saves time on placement.'
    ] },
    right: { h3: 'For students', ps: [
      'Notice which class makes you want to keep coding afterwards. That is the one that is working.',
      'Do not be shy about saying a class is too easy.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine of our courses, grouped like a track',
    lede: 'For a direct comparison with a level-based curriculum. Each runs live, in a group, a mini batch or privately.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Younger children', courses: [
        { code: 'COD / F / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch to apps and AI.' },
        { code: 'COD / F / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games from zero.' },
        { code: 'COD / F / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'First websites.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Middle school', courses: [
        { code: 'COD / T / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Python first.' },
        { code: 'COD / T / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages.' },
        { code: 'COD / T / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Databases behind apps.' }
      ] },
      { num: 'III', h3: 'Advanced', sub: 'High school', courses: [
        { code: 'COD / A / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Before AP CS A.' },
        { code: 'COD / A / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The exam itself.' },
        { code: 'COD / A / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'Apps with a backend.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'Our classes, described the same way',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches in Eastern to Pacific time.' },
      { time: 'Weekends', l: 'Morning batches for busy school weeks.' },
      { time: '1-on-1', l: 'A slot that moves with your calendar.' }
    ],
    cells: [
      { h3: 'Live teaching', p: 'A teacher in every class, never a video in place of one.' },
      { h3: 'Goal-first', p: 'Pick the course that fits this term.' },
      { h3: 'Three group sizes', p: 'Batch, mini batch or private.' },
      { h3: 'Maths too', p: 'One school for coding and maths.' },
      { h3: 'Teachers in India', p: 'Scheduled around US school days.' },
      { h3: 'Month by month', p: 'Stop or switch at a month end.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Apps and games our learners built, a fair thing to compare with any school&rsquo;s student showcase. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Our parents&rsquo; Google reviews, reproduced exactly. CodeWizardsHQ publishes its own reviews on its site.',

  fees: {
    h2: 'Our fees',
    lede: 'Ours are shown here in US dollars and billed monthly. We do not reproduce CodeWizardsHQ&rsquo;s prices; its site lists them, along with its own payment options.',
    free: ['A free first lesson', 'Comparable to a first session', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Goal set with you', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'CodeWizardsHQ and alternatives: common questions',
    items: [
      { q: 'What is CodeWizardsHQ?', a: 'A US online coding school for ages 7 to 18 that teaches live classes of four to six students in 12-week courses, grouped into Wizard Levels, according to its own website read on 17 October 2026.' },
      { q: 'How long is a CodeWizardsHQ course?', a: 'Its FAQs say each regular course is 12 weeks long with 55-minute sessions, and that a Wizard Level of four courses takes approximately one year. Accelerated versions run over six or three weeks.' },
      { q: 'Does CodeWizardsHQ offer a free trial?', a: 'Its site says it offers a money-back guarantee over the first four sessions instead of a free trial class, and that the guarantee does not apply to summer camps.' },
      { q: 'Are CodeWizardsHQ classes recorded?', a: 'Yes. Its site says all classes are recorded and the video and slides are made available after each session.' },
      { q: 'How is Modern Age Coders different?', a: 'We teach ages 6 to 67, in batches of 15 to 20, mini batches of up to 6 or 1-on-1, with monthly billing, teachers working live from India, and maths as well as coding. CodeWizardsHQ uses smaller fixed groups, US-based instructors and multi-course tracks.' },
      { q: 'Which is better for my child?', a: 'That depends on your child and your calendar, not on either school. A child who thrives in a small, steady group on a long track may prefer one; a child with a single goal or a moving schedule may prefer the other. Try both.' },
      { q: 'Can my child switch between the two?', a: 'Yes, families do. The easiest time is at the end of a course. Bring your child\'s recent projects so either school can place them quickly.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Is Modern Age Coders part of CodeWizardsHQ?', a: 'No. We are a separate, independent school. This page reports CodeWizardsHQ\'s published information and links to its site.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other comparisons and guides for US families.',
    items: [
      { href: '/modern-age-coders-vs-outschool', label: 'Compared with Outschool', p: 'A class marketplace vs one school.' },
      { href: '/modern-age-coders-vs-juni-learning', label: 'Compared with Juni Learning', p: 'Another live provider.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'What recordings can and cannot do.' },
      { href: '/online-coding-classes-cost', label: 'Online coding class costs', p: 'How fees are structured.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A', p: 'Our Java and AP route.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our US pages.' },
      { href: '/create-and-learn-alternative', label: 'Create & Learn alternative', p: 'Create & Learn and Modern Age Coders, compared on published facts.' },
      { href: '/id-tech-alternative', label: 'iD Tech alternative', p: 'iD Tech camps and lessons beside year-round live classes, compared on published facts.' },
      { href: '/codakid-alternative', label: 'CodaKid alternative', p: 'CodaKid and live online classes, compared on published facts.' }
    ]
  },

  start: {
    h2: 'Try a first lesson to compare',
    lede: 'Book the same topic you would start with elsewhere, so the comparison is fair. Tell us your child&rsquo;s age and any coding they have already done.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how a lesson with us runs</a>, or compare syllabuses in the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Our teachers teach live from India, timed for US families; nothing is pre-recorded in place of a class. WhatsApp reaches us quickest.',
    formNote: 'The first lesson is free, with no card.'
  },

  footer: {
    cols: [
      { h4: 'Comparisons', links: [
        { href: '/modern-age-coders-vs-juni-learning', label: 'vs Juni Learning' },
        { href: '/modern-age-coders-vs-outschool', label: 'vs Outschool' },
        { href: '/tynker-alternative', label: 'Tynker alternative' },
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Forty-four hours, our arithmetic'
  },

  personalityCss: `
.ag-root.ag-cod .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cod .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cod .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cod .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cod .ag-steps { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'CodeWizardsHQ website read raw 17 October 2026: programs by age (7-10, 11-13, 14-18), AI, Python and AP CS Prep tracks; live classes of 4 to 6; 90% of class time coding; US-based instructors; 12-week courses with 55-minute sessions; Wizard Levels of four courses in about one year; Capstone courses; placement exam; recorded classes, daily homework help, office hours in advanced courses; four-session money-back guarantee not for summer camps; course names on the elementary and AP pages; more than ten years teaching online.',
    localProject: 'Our arithmetic from their figures: 12 x 55 = 660 minutes = 11 hours per course; 4 x 11 = 44 hours per Wizard Level. Our placement walk-through for a 12-year-old. Lesson family: unit conversion from published figures.',
    requiredMentions: ['Four to six students per class', 'Animations and Games with Scratch', 'Intro to Programming with Python', 'Java I: Introduction to Java', '12 x 55', '660 minutes', '44 hours', 'approximately one year', 'Students spend 90% of class time coding', 'not connected with CodeWizardsHQ', 'not for summer camps', 'read on 17 October 2026'],
    sources: [
      { claim: 'CodeWizardsHQ home: programs, class size, teachers, support, guarantee.', url: 'https://www.codewizardshq.com/' },
      { claim: 'CodeWizardsHQ FAQs: course length, levels, placement, recordings, internship.', url: 'https://www.codewizardshq.com/faqs/' },
      { claim: 'CodeWizardsHQ elementary program: course names.', url: 'https://www.codewizardshq.com/coding-classes-elementary-school-students/' },
      { claim: 'CodeWizardsHQ AP CS Prep Track: Java I and Java II, ages 14-18.', url: 'https://www.codewizardshq.com/apcs/' }
    ],
    rejectedClaims: [
      'CodeWizardsHQ prices and financing terms: not printed.',
      'Its Trustpilot score, review count, student total and "success rate": marketing figures, not used.',
      'Names of its founder, staff or reviewers: not used.',
      'Any claim that we are better or that our outcomes are higher: refused.',
      'Any affiliation: none, stated on the page.'
    ]
  }
};
