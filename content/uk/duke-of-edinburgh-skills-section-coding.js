'use strict';
// Duke of Edinburgh's Award Skills section with coding (ag- guide door; UK cluster Phase 2 row UK081).
// Siblings checked first: no live page covers DofE (one town page mentions it in passing). Group siblings
// maths-masterclasses-for-able-students-uk, online-maths-circle-uk, online-maths-summer-school-uk and
// gifted-and-talented-maths-and-coding-uk share no spine with this page.
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// duke-of-edinburgh-skills-section-coding/):
//  - DofE, Skills (dofe.org/do/skills): "Skills is about developing personal interests, and practical and
//    social skills. Throughout the section, you should keep learning and get better at your activity."; web
//    design named among examples; five most popular activities: cooking, playing an instrument, language,
//    acting/drama/theatre skills, life skills; "Talk to your DofE Leader before you start your activity";
//    partnership with IBM (SkillsBuild); "The Skills section is about learning, the Volunteering section is
//    about using your skills for good in your community."; "Paid work and core curriculum does not count, as
//    you need to do your DofE outside of work or school time."; an activity related to a university subject
//    can be written about in a UCAS personal statement.
//  - DofE, Timescales (dofe.org/do/timescales): three levels; "You have to finish all your sections before
//    your 25th birthday."; "an average of 1 hour a week"; condensed hours: no fewer than 1 session per month,
//    no more than 6 hours in a month; goal "challenging but achievable"; Bronze at least 6 months/26 weeks,
//    start "in the school year you turn 14", Skills 3 months/13 weeks plus an extra 3 months on one of
//    Volunteering, Physical or Skills; Silver start "in the school year you turn 15", at least 6 months after
//    Bronze or 12 months direct, "Physical and Skills: One section for 6 months/26 weeks and the other section
//    for 3 months/13 weeks", direct entrants' longest section 12 months; Gold "after turning 16 years old",
//    at least 12 months after Silver or 18 months otherwise, "One section for 12 months/52 weeks and the other
//    section for 6 months/26 weeks", direct entrants' longest section 18 months, Residential 5 days 4 nights.
//  - DofE, Choosing Assessors (dofe.org/do/assessors): "They must be independent , not a family member , and
//    over the age of 18." (restated without the dash), some knowledge of the activity, available over the
//    activity, write or sign off the Assessor's report and upload it to eDofE; decides whether requirements
//    are met: "effort, perseverance, improvement and making progress towards your section goals".
//  - DofE, Approved Activity Providers (dofe.org/run/aap): AAPs are organisations whose opportunities the
//    DofE has approved; "If you want to offer Volunteering, Physical, Skill or Residential opportunities, an
//    AAP licence is optional."; "The Duke of Edinburgh's Award is the UK's provider of the DofE, so we can only
//    licence UK-based organisations."; marketing statement "This activity may count towards your Duke of
//    Edinburgh's Award Skills/Volunteering/Physical section. Please check with your DofE Leader before booking
//    [attending]." used here in its Skills form; "We ask that no other DofE trademarks are used alongside this."
//  - DofE, Your DofE programme: "coding the next big app" as an example; you can do Skills "with an
//    organisation without an AAP licence"; you may change one activity per section per level.
// Decision: we are not an Approved Activity Provider and cannot be one (DofE licenses UK-based organisations
// only; our teachers are in India). The page says so, uses only the DofE's own statement, and no DofE logo.
// Our own: the three coding plans by level and section length, the sample goal, log entry and Assessor's
// notes, the Bronze week-6 Python game, every judgement. Spine: coding fits Skills cleanly because the
// section is about getting better at one thing over set weeks, and code shows progress on screen; the work
// is choosing a plan that matches the exact section length. Lesson family: a programme-rules guide with plans.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'DofE SKILLS', label: 'Coding for the DofE Skills section', blurb: 'How long the Skills section lasts at Bronze, Silver and Gold, who can be your Assessor, and a coding plan for each level.' },
  slug: 'duke-of-edinburgh-skills-section-coding',
  code: 'des',
  accent: '#307041',
  accentRationale: 'DofE Skills with coding: an outdoor fern green (#307041), 5.63:1 on #FBF8F2, the only mid green in the enrichment set and well clear of the circle olive',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Duke of Edinburgh Skills section coding',
  title: 'Duke of Edinburgh Skills Section Coding: Plans by Level',
  description: 'Coding for the Duke of Edinburgh Skills section: Bronze, Silver and Gold section lengths, who can be your Assessor, and week-by-week coding plans for each level.',
  ogDescription: 'Coding counts well as a DofE Skill if your Leader agrees. Section lengths by level, Assessor rules, and a coding plan for 13, 26 or 52 weeks.',
  twitterDescription: 'DofE Skills section with coding: timescales, Assessors, a sample goal and log, and Python plans for Bronze, Silver and Gold.',
  pageName: 'Coding for the Duke of Edinburgh Skills Section',
  webPageDescription: 'A guide to using coding as the Skills section of the Duke of Edinburgh\'s Award, built from the DofE\'s own pages, with coding plans matched to each section length and live online lessons.',
  courseDescription: 'Live online Python and web coding for young people aged 14 to 18 doing the DofE Skills section, planned to a 13, 26 or 52 week section, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'DofE Skills section coding',
  navLinks: [
    { href: '#counts', label: 'Does it count?' },
    { href: '#time', label: 'How long' },
    { href: '#assessor', label: 'Assessors' },
    { href: '#plans', label: 'Coding plans' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Bronze, Silver, Gold &middot; Ages 14 to 18 &middot; Online',
  h1: 'Coding for the Duke of Edinburgh Skills section',
  lede: 'The Skills section of the Duke of Edinburgh\'s Award is about getting steadily better at one activity over a set number of weeks, and coding suits it well because progress shows on screen. The DofE names web design and coding an app among its examples, but your DofE Leader decides whether an activity counts. Modern Age Coders teaches Python and web coding live online, an hour a week, through our Python course for teens, as a group or 1-on-1. We are not a DofE Approved Activity Provider. This page sets out the section lengths at each level, the Assessor rules and a coding plan for each.',
  secondaryCta: { href: '#plans', label: 'See the coding plans' },
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for my DofE Skills section.',
  heroNote: 'Built from dofe.org pages read 31 October 2026 &middot; Not a DofE Approved Activity Provider',
  spec: [
    ['Section', 'Skills'],
    ['Bronze', '3 months, or 6 if chosen as the longer section'],
    ['Silver', '3 or 6 months, 12 for direct entrants'],
    ['Gold', '6 or 12 months, 18 for direct entrants'],
    ['Time each week', 'An average of 1 hour'],
    ['Who approves', 'Your DofE Leader'],
    ['Our lessons', 'Python and web, live online'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'Can coding count for the Duke of Edinburgh Skills section?',
  capsule: 'Yes, if your DofE Leader agrees. The DofE says the Skills section is about developing personal interests and practical skills, and that "you should keep learning and get better at your activity". It names web design among possible Skills and coding an app among programme ideas. You need an average of 1 hour a week for 3 months at Bronze, 3 or 6 months at Silver and 6 or 12 months at Gold, with longer for direct entrants. School lessons do not count, since the DofE says core curriculum does not. Modern Age Coders teaches coding live online outside school, on our Python course for teens, in a batch of 15 to 20 or 1-on-1. We are not an Approved Activity Provider.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that fit a Skills section',
    lede: 'Pick the one that matches what you want to be able to show at the end. Every card opens the week-by-week syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'DES / 01', title: 'Python for teens', note: 'From a first program to games and data projects; the natural Bronze or Silver choice from age 14.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'DES / 02', title: 'Web design with HTML and CSS', note: 'The DofE names web design as a Skill; build and publish real pages over a section.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'DES / 03', title: 'Full stack web for teens', note: 'React and Node.js for a Gold Skills section of six or twelve months.' }
    ]
  },

  sections: [
    {
      id: 'counts', tint: 'tint', eyebrow: 'Does it count?',
      h2: 'Does coding count as a DofE Skill?',
      lede: 'Coding is a natural Skill, but approval sits with your DofE Leader, not with us and not with this page. The DofE asks every participant to check before starting.',
      body: [
        { kind: 'table', caption: 'What the DofE says about the Skills section, from dofe.org read 31 October 2026', head: ['Question', 'What the DofE says'], rows: [
          ['What is the section for?', '"Skills is about developing personal interests, and practical and social skills."'],
          ['What must you show?', 'That you keep learning and get better at your activity, towards a goal that is challenging but achievable'],
          ['Is coding an example?', 'Web design is named among Skills examples, and "coding the next big app" among programme ideas'],
          ['Who checks it counts?', '"Talk to your DofE Leader before you start your activity so they can check it\'s suitable."'],
          ['Do school lessons count?', 'No: "Paid work and core curriculum does not count, as you need to do your DofE outside of work or school time."'],
          ['Does the provider need DofE approval?', 'No: for Skills, the DofE says "an AAP licence is optional", and you can do the section with an organisation that has none'],
          ['Skills or Volunteering?', '"The Skills section is about learning, the Volunteering section is about using your skills for good in your community."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our position, plainly',
          left: [
            'Modern Age Coders is not a DofE Approved Activity Provider. The DofE says it "can only licence UK-based organisations", and our teachers work from India, so we cannot hold a licence. We do not use any DofE logo.',
            'In the DofE\'s own suggested words for independent providers: "This activity may count towards your Duke of Edinburgh\'s Award Skills section. Please check with your DofE Leader before booking."'
          ],
          rightH3: 'Learning coding versus teaching it',
          right: [
            'Taking coding lessons and improving is Skills. Running a coding club for younger children is Volunteering. A young person could do both in one programme, as long as the two activities are genuinely different.',
            'If you already study GCSE Computer Science, ask your Leader early. Coding outside school is fine in principle, but the section should not simply repeat your school course.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.dofe.org/do/skills/" rel="noopener" target="_blank">DofE, Skills</a>; <a class="ag-inline-link" href="https://www.dofe.org/run/aap/" rel="noopener" target="_blank">DofE, Approved Activity Providers</a>; <a class="ag-inline-link" href="https://www.dofe.org/do/your-dofe/" rel="noopener" target="_blank">DofE, Your DofE programme</a>. All read 31 October 2026. The Duke of Edinburgh\'s Award is a registered charity; we are not connected with it.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'How long',
      h2: 'How long is the DofE Skills section at Bronze, Silver and Gold?',
      lede: 'Between 3 and 18 months, depending on level, on which section you choose to make longer, and on whether you did the level below. The DofE expects an average of 1 hour a week throughout.',
      body: [
        { kind: 'table', caption: 'Skills section length by level, from the DofE timescales page read 31 October 2026', head: ['Level', 'Start', 'Skills section', 'If you skipped the level below'], rows: [
          ['Bronze', 'In the school year you turn 14', '3 months/13 weeks, or 6 months if you pick Skills for the extra 3 months', 'Not applicable'],
          ['Silver', 'In the school year you turn 15', 'Physical and Skills: one for 6 months/26 weeks, the other for 3 months/13 weeks', 'An extra 6 months on Volunteering or the longer of Physical and Skills, so up to 12 months'],
          ['Gold', 'After turning 16', 'Physical and Skills: one for 12 months/52 weeks, the other for 6 months/26 weeks', 'An extra 6 months on Volunteering or the longer of Physical and Skills, so up to 18 months']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Weekly time and condensed hours',
          left: [
            'The DofE asks for "an average of 1 hour a week" on each section, usually weekly at Bronze. At Silver and Gold an activity can be done for longer but less often.',
            'There are limits: you "cannot condense an activity to less than 1 session per month" and "cannot complete more than 6 hours in a month". All sections must be finished before your 25th birthday.'
          ],
          rightH3: 'Choosing the longer section',
          right: [
            'At Bronze you spend an extra 3 months on one of Volunteering, Physical or Skills, and the DofE says you should decide which before you start, though you can change your mind.',
            'Choosing coding for the longer section gives 26 weeks, enough to move from first programs to a finished project. Our plans below are written for each possible length.'
          ] },
        { kind: 'p', mt: true, html: 'Our arithmetic on the DofE averages: a 13-week Skills section is about 13 hours of activity, a 26-week section about 26 hours and a 52-week section about 52 hours. Practice between lessons is extra and sensible, but the log should record the activity time honestly.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.dofe.org/do/timescales/" rel="noopener" target="_blank">DofE, Timescales</a>, read 31 October 2026. The hour totals are our own arithmetic.' }
      ]
    },
    {
      id: 'assessor', tint: '', eyebrow: 'Assessors',
      h2: 'Who can be the Assessor for a coding Skills section?',
      lede: 'Almost any independent adult who knows the activity. A coding teacher who has watched your progress over the weeks is the obvious choice, if your Leader is happy.',
      body: [
        { kind: 'ol', items: [
          'The Assessor must be independent, not a family member, and over the age of 18, says the DofE.',
          'They should have some knowledge of the activity and be available over the time you are doing it.',
          'Give them the Skills Assessor\'s card from your Welcome Pack and tell them your goal at the start.',
          'At the end you discuss your progress, and they decide whether you met the requirements: "effort, perseverance, improvement and making progress towards your section goals".',
          'They write or sign off the Assessor\'s report and upload it to eDofE.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Can a Modern Age Coders teacher be your Assessor?',
          left: [
            'Our teachers are adults, unrelated to students and teach the activity every week, which matches the DofE description. If your DofE Leader agrees, you can ask the teacher who taught you whether they can act as your Assessor; your Leader has the final say on who assesses you.',
            'If your Leader prefers someone else, we send progress notes to whoever they choose.'
          ],
          rightH3: 'A sample Assessor\'s note (ours, for illustration)',
          right: [
            'Over 13 weekly lessons the participant moved from printing text to writing a complete quiz game with a score, a high-score file and input checking. They debugged their own errors with growing independence and met their goal of a working game a friend could play.',
            'That is the kind of note the DofE criteria point to: effort, perseverance and visible improvement. It is our invented example, not a real participant\'s report.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.dofe.org/do/assessors/" rel="noopener" target="_blank">DofE, Choosing Assessors</a>, read 31 October 2026. The sample note is ours.' }
      ]
    },
    {
      id: 'plans', tint: 'tint', eyebrow: 'Coding plans',
      h2: 'What coding could you do for 13, 26 or 52 weeks?',
      lede: 'Three plans we wrote, one per section length. Each ends in something you can show your Assessor working. They are suggestions; your goal should be your own.',
      body: [
        { kind: 'table', caption: 'Our coding plans for a Skills section', head: ['Length', 'Plan', 'Weeks 1 to a quarter', 'Middle', 'Final weeks', 'Show at the end'], rows: [
          ['13 weeks (Bronze)', 'Python games', 'Variables, input, if statements', 'Loops, lists, a guessing game', 'A quiz game with a score and saved high score', 'A game a friend can play'],
          ['26 weeks (Bronze longer, or Silver)', 'Python plus a web page', 'Python basics and functions', 'Files, data, a small text adventure', 'An HTML and CSS page presenting the project', 'A published page and a working program'],
          ['52 weeks (Gold)', 'A full web app', 'HTML, CSS and JavaScript', 'React front end and a Node.js server', 'A database-backed app with users\' data handled safely', 'A deployed app and a short write-up']
        ] },
        { kind: 'code', lang: 'Python', label: 'Week 6 of our Bronze plan: a guessing game', code: 'import random\n\nsecret = random.randint(1, 100)\ntries = 0\nwhile True:\n    guess = int(input("Guess a number from 1 to 100: "))\n    tries += 1\n    if guess < secret:\n        print("Higher")\n    elif guess > secret:\n        print("Lower")\n    else:\n        print("Got it in", tries, "tries")\n        break', note: 'By week 8 participants add input checking so a typed word does not crash the game, which is exactly the kind of improvement an Assessor can see.' },
        { kind: 'two', mt: true,
          leftH3: 'A sample goal (ours)',
          left: [
            '"By the end of my 13-week Skills section I will write a Python quiz game with at least ten questions, a score, and a high score that is saved between games, and fix my own errors using error messages."',
            'It is challenging but achievable, specific enough to check, and it names a skill (debugging) as well as a product.'
          ],
          rightH3: 'A sample weekly log entry (ours)',
          right: [
            'Week 5, 1 hour. Learned while loops. Wrote a times-table tester that keeps asking until the answer is right. Got stuck when the loop never ended; found I never changed the variable. Next week: lists, so the quiz can hold many questions.',
            'Four lines: what you did, what went wrong, how you fixed it and what is next. The DofE asks you to add logs and evidence to eDofE.'
          ] },
        { kind: 'source', html: 'The plans, code, goal and log entry are ours. Plans for under-18 participants use only tools suitable for their age.' }
      ]
    },
    {
      id: 'ucas', tint: 'deep', eyebrow: 'Beyond the Award',
      h2: 'Does a coding Skills section help with university or sixth form?',
      lede: 'It gives you something real to describe. The DofE itself says a Skills activity related to the subject you want to study can be written about in a UCAS personal statement.',
      body: [
        { kind: 'two',
          leftH3: 'What you end up with',
          left: [
            'At the end of a Skills section in coding you have a working project, a log of how you built it, and an Assessor\'s report on your effort and improvement. That is evidence of sustained independent learning, which is what selectors look for in any applicant.',
            'For computing, maths or engineering applicants it is also directly relevant. We make no promise about any offer or place.'
          ],
          rightH3: 'Keeping it going',
          right: [
            'Many participants continue after the section ends. A Bronze game can grow into a Silver web project and a Gold app, each level building on the last.',
            'For project ideas at sixth-form level, our <a class="ag-inline-link" href="/passion-project-ideas-computer-science">computer science project ideas page</a> has more, and the <a class="ag-inline-link" href="/coolest-projects-uk-project-ideas">Coolest Projects page</a> shows a place to share one.'
          ] },
        { kind: 'p', mt: true, html: 'You may change one activity in each section at each level, though the DofE does not recommend it and you restart preparation, training and assessment; the time on both activities adds up. If coding is not working out after a few weeks, talk to your Leader rather than drifting.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.dofe.org/do/skills/" rel="noopener" target="_blank">DofE, Skills</a> and <a class="ag-inline-link" href="https://www.dofe.org/do/your-dofe/" rel="noopener" target="_blank">Your DofE programme</a>, read 31 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From first program to a deployed app',
    lede: 'Our coding stages, matched loosely to the three DofE levels. Many participants start at Bronze with no coding at all.',
    table: { caption: 'Our coding stages for DofE participants', head: ['Stage', 'Fits', 'Secure when'], rows: [
      ['1. First programs', 'Bronze', 'Writes a short Python program with input, decisions and a loop'],
      ['2. Structured code', 'Bronze longer or Silver', 'Uses functions and lists to build a game or tool'],
      ['3. The web', 'Silver', 'Presents a project on a page built with HTML and CSS'],
      ['4. Full applications', 'Gold', 'Builds and deploys a web app with a front end and a server']
    ] },
    left: { h3: 'Starting from zero is normal', ps: [
      'The Skills section measures improvement, so a complete beginner has the most room to show progress.',
      'Experienced coders set a harder goal instead.'
    ] },
    right: { h3: 'Linked pages', ps: [
      'School-age coding is covered on our <a class="ag-inline-link" href="/ks3-computing-tuition-online">KS3 computing page</a>.',
      'For a coding challenge with a deadline, try the <a class="ag-inline-link" href="/national-cipher-challenge-preparation">National Cipher Challenge</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Coding courses for DofE participants',
    lede: 'Grouped by level. Every course page shows the syllabus week by week, which helps when setting a goal.',
    bands: [
      { num: 'I', h3: 'Bronze', sub: 'Ages 14 and up', courses: [
        { code: 'UK / DES / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From zero to games and tools.' },
        { code: 'UK / DES / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Web design, a named DofE Skill example.' },
        { code: 'UK / DES / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games.' }
      ] },
      { num: 'II', h3: 'Silver', sub: 'Ages 15 and up', courses: [
        { code: 'UK / DES / 04', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C# projects.' },
        { code: 'UK / DES / 05', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python with real data.' },
        { code: 'UK / DES / 06', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive, ethical skills.' }
      ] },
      { num: 'III', h3: 'Gold', sub: 'Ages 16 and up', courses: [
        { code: 'UK / DES / 07', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web for teens', blurb: 'React and Node.js applications.' },
        { code: 'UK / DES / 08', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python to real models.' },
        { code: 'UK / DES / 09', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'APIs and databases.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'An hour a week, logged as you go',
    lede: TIMING + ' One lesson a week matches the DofE average of 1 hour. Every time is in UK time; our teachers are in India and teach to the UK calendar.',
    slots: [
      { time: 'After school', l: 'Weekly group lessons for ages 14 to 18.' },
      { time: 'Weekday evening', l: 'For Gold participants at college or work.' },
      { time: 'Weekend morning', l: 'Groups and 1-on-1 lessons.' }
    ],
    cells: [
      { h3: 'Goal set in week 1', p: 'We help you write a goal your Leader can approve.' },
      { h3: 'One hour, every week', p: 'The DofE average, with dates you can log.' },
      { h3: 'Visible progress', p: 'Each week ends with code that does something new.' },
      { h3: 'Assessor-ready notes', p: 'Short progress notes your Assessor can draw on.' },
      { h3: 'Group or 1-on-1', p: '15 to 20 participants, or a private teacher.' },
      { h3: 'A finished project', p: 'Every plan ends with something that works.' }
    ]
  },

  projectsH2: 'What students have coded with us',
  projectsLede: 'Projects from teenagers in our classes. See <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews from families on our Google profile, left as written.',

  fees: {
    h2: 'Fees for a coding Skills section',
    lede: 'Paid month by month, so a 13-week Bronze section costs about three months and a Gold section runs as long as it needs. The first lesson is free.',
    free: ['A first coding lesson', 'Help drafting your Skills goal', 'Book with only a phone number'],
    group: ['15 to 20 participants', 'One hour each week', 'Progress notes for your Assessor', 'A project by the end'],
    one: ['One participant, one teacher', 'Plan built around your goal', 'Times that fit sixth form or college']
  },

  faq: {
    eyebrow: 'DofE Skills questions',
    h2: 'What participants and parents ask about coding for DofE',
    items: [
      { q: 'Does coding count for the Duke of Edinburgh Skills section?', a: 'It can. The DofE names web design among Skills examples and coding an app among programme ideas, but your DofE Leader must agree that your activity is suitable before you start.' },
      { q: 'How long is the Skills section for Bronze DofE?', a: 'Three months, or 13 weeks, unless you choose Skills as the section you do for an extra three months, which makes it six months. Bronze as a whole takes at least six months, and you can start in the school year you turn 14.' },
      { q: 'How long is the Skills section for Silver and Gold?', a: 'At Silver, one of Physical and Skills lasts six months and the other three. At Gold, one lasts twelve months and the other six. Direct entrants who skipped the level below add six months to Volunteering or the longer of the two.' },
      { q: 'How many hours a week do you need for DofE Skills?', a: 'An average of one hour a week, says the DofE. At Silver and Gold you can do longer sessions less often, but no fewer than one session a month and no more than six hours in a month.' },
      { q: 'Who can be my DofE Skills Assessor?', a: 'An adult over 18 who is independent of you, so not a family member, and who knows the activity and can follow your progress. If your Leader agrees, you can ask your coding teacher whether they can do it; your Leader has the final say.' },
      { q: 'Can I do my coding Skills section online?', a: 'Yes, if your Leader agrees. The DofE says you can do a Skills activity with an organisation that has no Approved Activity Provider licence, and its AAP rules mention activities offered in person or online.' },
      { q: 'Are you a DofE Approved Activity Provider?', a: 'No. The DofE licenses only UK-based organisations and our teachers work from India, so we cannot be one. For Skills an AAP licence is optional, and the activity may count if your DofE Leader approves it.' },
      { q: 'Do my school computing lessons count?', a: 'No. The DofE says core curriculum does not count, because the Award is done outside school or work time. Coding lessons you take outside school are different, but check with your Leader if they overlap a GCSE course.' },
      { q: 'What should my coding Skills goal be?', a: 'Something challenging but achievable and easy to check at the end, such as a working game, a published web page or a deployed app, plus a skill like debugging your own errors. Our plans on this page give examples for 13, 26 and 52 weeks.' },
      { q: 'When are lessons?', a: TIMING + ' Times are confirmed in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More coding for teenagers in the UK',
    lede: 'School computing, competitions and project showcases.',
    items: [
      { href: '/ks3-computing-tuition-online', label: 'KS3 computing', p: 'Programming in Years 7 to 9.' },
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Choosing GCSE Computer Science', p: 'The Year 9 options question.' },
      { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK', p: 'Share a finished project.' },
      { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge', p: 'Code-breaking with Python.' },
      { href: '/online-coding-summer-course-uk', label: 'Online coding summer course', p: 'A holiday of real projects.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free coding lesson for your Skills section',
    lede: 'Tell us your DofE level, how long your Skills section is and any coding you have done. After one lesson we help you draft a goal to take to your Leader.',
    readFirst: 'Checking first? Every <a class="ag-inline-link" href="/courses">course page</a> lays out its weeks, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson.',
    note: 'For the quickest response use WhatsApp; our team in India answers from a +91 number.',
    formNote: 'Booking is free and takes a minute.'
  },

  footer: {
    cols: [
      { h4: 'Teen coding', links: [
        { href: '/ks3-computing-tuition-online', label: 'KS3 computing' },
        { href: '/online-coding-summer-course-uk', label: 'Coding summer course' },
        { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects' },
        { href: '/national-cipher-challenge-preparation', label: 'Cipher Challenge' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'One hour a week, a goal, and code that works at the end'
  },

  personalityCss: `
.ag-root.ag-des .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-des .ag-capsule { border-left-width: 6px; border-radius: 0 8px 8px 0; }
.ag-root.ag-des .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-des .ag-table th:first-child { width: 18%; }
.ag-root.ag-des .ag-table caption { text-align: left; }
`,

  dossier: {
    curriculumAuthority: 'The Duke of Edinburgh\'s Award (dofe.org, read 31 October 2026). Skills: purpose, keep learning and get better, web design example, five most popular activities, check with the DofE Leader, IBM partnership, Skills versus Volunteering, paid work and core curriculum do not count, UCAS mention. Timescales: finish before 25th birthday; average 1 hour a week; condensed limits of 1 session and 6 hours a month; Bronze from the school year you turn 14, Skills 3 months plus optional extra 3; Silver from the school year you turn 15, Physical and Skills 6 and 3 months, direct entry up to 12; Gold after turning 16, 12 and 6 months, direct entry up to 18. Assessors: independent, not family, over 18, knowledge of activity, Assessor report on eDofE, effort perseverance improvement. AAPs: licence optional for Skills; only UK-based organisations licensed; suggested marketing statement; no other DofE trademarks. Your DofE: coding an app example; non-AAP organisations allowed for Skills; one change of activity per section.',
    localProject: 'Thirteen, twenty-six or fifty-two weeks. The page tabulates what the DofE says about Skills, states plainly that we are not and cannot be an Approved Activity Provider and uses the DofE\'s own suggested statement, sets out section lengths by level including direct-entry extensions, explains the Assessor rules with a labelled sample note, and gives three original coding plans matched to each length with a Bronze week-6 Python game, a sample goal and a sample log entry. Lesson family: a programme-rules guide with plans.',
    requiredMentions: ['Paid work and core curriculum does not count', 'an AAP licence is optional', 'can only licence UK-based organisations', 'This activity may count towards your Duke of Edinburgh', 'cannot condense an activity to less than 1 session per month', 'effort, perseverance, improvement and making progress towards your section goals', 'coding the next big app', 'In the school year you turn 14', 'Got it in'],
    sources: [
      { claim: 'DofE Skills section: purpose, examples, Leader approval, core curriculum rule, Skills versus Volunteering.', url: 'https://www.dofe.org/do/skills/' },
      { claim: 'DofE Timescales: levels, start ages, section lengths, weekly average, condensed hours, 25th birthday.', url: 'https://www.dofe.org/do/timescales/' },
      { claim: 'DofE Choosing Assessors: independence, age, knowledge, report, criteria.', url: 'https://www.dofe.org/do/assessors/' },
      { claim: 'DofE Approved Activity Providers: licence optional for Skills, UK-based only, suggested marketing statement.', url: 'https://www.dofe.org/run/aap/' },
      { claim: 'DofE Your DofE programme: coding an app, non-AAP organisations for Skills, changing activity.', url: 'https://www.dofe.org/do/your-dofe/' }
    ],
    rejectedClaims: [
      'That Modern Age Coders is, or could become, a DofE Approved Activity Provider: false; the DofE licenses UK-based organisations only.',
      'That coding is guaranteed to count: only the participant\'s DofE Leader can approve an activity; the page says so.',
      'DofE participation fees or AAP licence costs: not printed.',
      'IBM SkillsBuild course recommendations: age terms not checked for under-18s; mentioned only as a DofE partnership in the header, not recommended.',
      'Any DofE logo or trademark other than the descriptive Award name: not used, per the DofE request.',
      'Any promise of a UCAS advantage or offer: not made.'
    ]
  }
};
