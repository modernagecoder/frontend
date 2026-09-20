'use strict';
// CyberFirst Girls Competition preparation (ag- competition spoke, UK cluster Phase 2).
// The competition has been renamed. Facts read on 20 September 2026:
//  - gov.uk/guidance/techfirst: "TechFirst is the government's flagship tech skills programme"; "From
//    September 2026 students in the existing CyberFirst Bursary scheme will become TechFirst scholars";
//    "National competitions will run throughout the year with prizes to be won, including the TechFirst
//    Girls Competition this November." TechFirst is delivered by DSIT with regional delivery partners.
//  - ncsc.gov.uk: the NCSC's own CyberFirst Girls Competition page no longer describes the competition,
//    and the CyberFirst overview says only that the NCSC "has supported thousands of young people
//    through the CyberFirst programme" since 2016. The 2025/26 competition was run as a partnership
//    between DSIT, NCSC and IBM, and from 1 September 2026 CyberFirst became part of TechFirst with the
//    NCSC continuing to lead the cyber pathway.
//  - NCSC news announcement of the competition: "Girls in Year 8 in England and Wales, S2 in Scotland,
//    and Year 9 in Northern Ireland are encouraged to enter" in "teams of up to four"; "A teacher at
//    their school or a school guardian must act as their mentor and register them"; the qualifying round
//    is an online set of "puzzles, covering topics from cryptography to AI to logic"; the "highest
//    scoring teams" go "to one of 13 finals held across the UK", "with one held in each of Scotland,
//    Wales and Northern Ireland and in English regions"; "Since 2017, more than 43,000 girls have taken
//    part in the CyberFirst Girls Competition". That announcement gives a qualifying round opening at
//    noon on Monday 21 November and finals on Saturday 4 February, but we could not date the article, so
//    the page describes the SHAPE of the cycle (November qualifier, February finals) and sends readers to
//    the organiser for this year's dates rather than printing a date we cannot place in a year.
// Spine: how many questions does it take to find one thing? Our computation of 20 September 2026, by
// simulating every possible target rather than trusting the formula: ten yes/no questions are enough to
// pin any number from 1 to 1,000 and nine are not, because 2^9 is 512 and 2^10 is 1,024. Four questions
// cover ten possibilities, seven cover a hundred, sixteen cover the 43,000 girls who have entered since
// 2017. That is the idea underneath most logic puzzles a qualifying round sets.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'TECHFIRST GIRLS', label: 'CyberFirst Girls Competition', blurb: 'Teams of four in one school year, now run as the TechFirst Girls Competition.' },
  slug: 'cyberfirst-girls-competition-preparation',
  code: 'cfg',
  accent: '#41676C',
  accentRationale: 'CyberFirst Girls: a mid teal-grey from the solver (5.04:1 on every paper tint), lighter than the Kent and Mathematical Olympiad for Girls teals it sits between',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CyberFirst Girls Competition preparation',
  title: 'CyberFirst Girls Competition Preparation | Now TechFirst Girls',
  description: 'Preparing for the CyberFirst Girls Competition, now the TechFirst Girls Competition: Year 8 teams of four, cryptography and logic puzzles, and regional finals.',
  ogDescription: 'The CyberFirst Girls Competition is now the TechFirst Girls Competition, delivered by DSIT. Year 8 teams of four, and puzzles from cryptography to logic.',
  twitterDescription: 'CyberFirst Girls Competition preparation: Year 8 teams of four, now run as TechFirst Girls.',
  pageName: 'CyberFirst Girls Competition Preparation',
  webPageDescription: 'Preparation guidance for the competition most people know as the CyberFirst Girls Competition and which the government now runs as the TechFirst Girls Competition, covering eligibility, team size, the qualifying round and the regional finals.',
  courseDescription: 'Live online coding, logic and cryptography classes for girls in Year 8 and equivalent year groups preparing for a school cyber competition.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'CyberFirst Girls Competition',
  navLinks: [
    { href: '#name', label: 'The new name' },
    { href: '#questions', label: 'Ten questions' },
    { href: '#practise', label: 'How to practise' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; One school year &middot; November qualifier, February finals',
  h1: 'CyberFirst Girls Competition preparation',
  lede: 'Start with the thing that will otherwise waste your evening: the competition has a new name. The government now runs it as the TechFirst Girls Competition, delivered by the Department for Science, Innovation and Technology, after CyberFirst became part of TechFirst in September 2026, and gov.uk says the TechFirst Girls Competition runs in November. Almost every page you will find still calls it CyberFirst, and so does this one, because that is what people search for. What has not changed is the shape: one school year, teams of up to four, a teacher who registers them, an online round of puzzles from cryptography to logic, and regional finals for the teams that get through.',
  secondaryCta: { href: '#questions', label: 'See the idea behind the puzzles' },
  wa: 'Hello Modern Age Coders, my daughter is entering the CyberFirst or TechFirst Girls Competition and I would like a free class.',
  heroNote: 'Sourced from gov.uk and the NCSC with the date we read it &middot; No puzzle reproduced &middot; Nothing promised about a final',
  spec: [
    ['Now run as', 'The TechFirst Girls Competition'],
    ['Delivered by', 'DSIT, with the NCSC leading cyber'],
    ['England and Wales', 'Girls in Year 8'],
    ['Scotland', 'S2'],
    ['Northern Ireland', 'Year 9'],
    ['Team', 'Up to four, with a teacher as mentor'],
    ['Qualifier', 'Online puzzles, in November'],
    ['Finals', 'Thirteen, around the UK']
  ],
  capsuleQ: 'In short',
  capsule: 'The competition most families search for as the CyberFirst Girls Competition is now the TechFirst Girls Competition. Gov.uk says "TechFirst is the government\'s flagship tech skills programme", delivered by the Department for Science, Innovation and Technology, and that "national competitions will run throughout the year with prizes to be won, including the TechFirst Girls Competition this November"; CyberFirst became part of TechFirst from September 2026, with the NCSC continuing to lead the cyber pathway. The NCSC\'s own announcements describe the competition itself: "girls in Year 8 in England and Wales, S2 in Scotland, and Year 9 in Northern Ireland" entering in "teams of up to four", registered by "a teacher at their school or a school guardian"; an online qualifying round of "puzzles, covering topics from cryptography to AI to logic"; and the highest scoring teams going "to one of 13 finals held across the UK". Since 2017 more than 43,000 girls have taken part. We teach the coding and logic underneath. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a Year 8 team',
    lede: 'The qualifying round rewards puzzle thinking and a little code, in that order.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CFG / 01', title: 'Python and AI for kids', note: 'The right level for most Year 8 entrants: typed code, logic and a first look at how AI systems work.' },
      { course: 'python-complete-masterclass-teens', code: 'CFG / 02', title: 'Python from start to finish', note: 'For a student who already writes Python and wants the loops and string work a cryptography puzzle needs.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CFG / 03', title: 'Algorithms and data structures', note: 'Searching, counting and the idea of how many steps a method needs, which is what a logic puzzle is really testing.' }
    ]
  },

  sections: [
    {
      id: 'name', tint: 'tint', eyebrow: 'The competition',
      h2: 'A new name, the same one school year',
      lede: 'Facts read at gov.uk and ncsc.gov.uk on 20 September 2026, with each attributed where it came from.',
      body: [
        { kind: 'table', caption: 'What we could confirm, and where', head: ['Part', 'What the source says', 'Source'], rows: [
          ['The programme', '"TechFirst is the government\'s flagship tech skills programme opening pathways into the UK\'s fast-growing tech sector"', 'gov.uk guidance on TechFirst'],
          ['The competition', '"National competitions will run throughout the year with prizes to be won, including the TechFirst Girls Competition this November"', 'gov.uk guidance on TechFirst'],
          ['The transition', 'CyberFirst became part of TechFirst from September 2026, with the NCSC continuing to lead the cyber pathway', 'gov.uk and NCSC'],
          ['Who can enter', '"Girls in Year 8 in England and Wales, S2 in Scotland, and Year 9 in Northern Ireland are encouraged to enter"', 'NCSC announcement'],
          ['Team size', '"teams of up to four"', 'NCSC announcement'],
          ['Registration', '"A teacher at their school or a school guardian must act as their mentor and register them"', 'NCSC announcement'],
          ['The qualifying round', 'Online "puzzles, covering topics from cryptography to AI to logic"', 'NCSC announcement'],
          ['The finals', 'The highest scoring teams go "to one of 13 finals held across the UK", "with one held in each of Scotland, Wales and Northern Ireland and in English regions"', 'NCSC announcement'],
          ['Scale', '"Since 2017, more than 43,000 girls have taken part in the CyberFirst Girls Competition"', 'NCSC announcement']
        ] },
        { kind: 'two', mt: true,
          left: [
            'On dates we are deliberately vague, and here is why. The NCSC announcement we read gives a qualifying round opening at noon on a Monday in late November with finals on a Saturday in early February, but we could not establish which cycle that announcement belongs to, and gov.uk says only that the TechFirst Girls Competition runs "this November". Rather than print a date we cannot place in a year, this page describes the shape of the cycle and sends you to the organiser.',
            'That shape is: an online qualifying round in November, sat by teams in school, and regional finals in February. A teacher registering a team in September or October is ahead of it.'
          ],
          right: [
            'The single-year-group rule is the thing most parents are surprised by. This is a Year 8 competition in England and Wales, S2 in Scotland and Year 9 in Northern Ireland: one cohort, nationally, with no discretion to enter a keen Year 7 or a strong Year 9 alongside them.',
            'Which makes the timing worth knowing a year early. A girl in Year 7 who would enjoy this has one shot at it, next autumn, and a teacher who realises that in the summer term has time to form a team.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst" rel="noopener" target="_blank">gov.uk, TechFirst</a> and the <a class="ag-inline-link" href="https://www.ncsc.gov.uk/cyberfirst/girls-competition" rel="noopener" target="_blank">NCSC CyberFirst Girls Competition pages</a>, read 20 September 2026. The NCSC\'s competition page no longer carries the competition\'s details, which is part of why this page exists. Modern Age Coders is not connected with DSIT, the NCSC or IBM.' }
      ]
    },
    {
      id: 'questions', tint: 'deep', eyebrow: 'The method',
      h2: 'How many questions does it take to find one thing?',
      lede: 'Cryptography and logic puzzles look like different subjects. Underneath a great many of them is a single idea about information, and it can be taught in ten minutes.',
      body: [
        { kind: 'p', html: '<strong>I am thinking of a number between 1 and 1,000. You may ask yes or no questions. How many do you need to be certain?</strong> Most people guess a large number or say it depends on luck. The answer is exactly ten, it does not depend on luck, and knowing why changes how a team attacks a puzzle round.' },
        { kind: 'table', caption: 'Our computation of 20 September 2026, checked by simulating every possible target', head: ['Possibilities', 'Questions needed', 'Why'], rows: [
          ['10', '4', '2 to the power 3 is 8, too few; 2 to the power 4 is 16'],
          ['100', '7', '2 to the power 6 is 64, too few; 2 to the power 7 is 128'],
          ['1,000', '10', '2 to the power 9 is 512, too few; 2 to the power 10 is 1,024'],
          ['43,000', '16', 'Enough to identify any one of the girls who have entered since 2017']
        ] },
        { kind: 'three', cells: [
          { h3: 'Each question halves it', p: 'A good question splits the possibilities as near to evenly as it can. "Is it more than 500?" leaves 500 either way. "Is it 7?" leaves 999 if the answer is no.' },
          { h3: 'Why ten and not nine', p: 'Nine questions can distinguish at most 512 things, and there are 1,000. No cleverness gets round that, which is what makes it a bound rather than a tactic.' },
          { h3: 'What it means in a puzzle', p: 'When a puzzle gives you a small number of chances, count how many possibilities each one can eliminate. If the arithmetic does not work, you are meant to find extra information somewhere, not guess harder.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'We checked this by simulating every target from 1 to 1,000 rather than trusting the formula, because the formula is exactly the sort of thing that is right in general and wrong at the edges. It came out at ten, matching the arithmetic.',
            'The habit worth teaching a team is to ask, before starting: how many possibilities are there, and how much does each move cut them down? Teams that do this stop brute-forcing puzzles that were never meant to be brute-forced.'
          ],
          right: [
            'It transfers directly to the cryptography end of a qualifying round. A cipher with a small number of possible keys can be broken by trying them all; one with an enormous number cannot, and the puzzle is then about finding a weakness rather than a bigger computer. Counting the possibilities tells you which kind you are looking at.',
            'And it is a genuinely good thing for a thirteen-year-old to carry away from a competition, whatever their score: the difference between a problem that is hard and a problem that is impossible.'
          ] },
        { kind: 'source', html: 'The figures are ours, computed on 20 September 2026 by simulating every possible target rather than applying the formula. No competition puzzle is reproduced anywhere on this page.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'How to practise',
      h2: 'A team, an hour a week, and no pressure at all',
      lede: 'The qualifying round is online, in school, and sat by four girls who may never have done anything like it.',
      body: [
        { kind: 'table', caption: 'What actually helps a first-time team', head: ['Worth doing', 'Why', 'Not worth doing'], rows: [
          ['Splitting the puzzles by taste', 'A four-person team will contain someone who likes codes and someone who likes logic', 'Everyone working on the same puzzle at once'],
          ['Writing down what has been ruled out', 'Most logic puzzles are won by elimination, and elimination that is not written down is lost', 'Holding the deductions in four separate heads'],
          ['A little Python', 'Counting letters, trying possibilities and checking a pattern are all faster written down', 'A full programming course started in October'],
          ['Counting the possibilities first', 'It tells the team whether to try everything or look for a shortcut', 'Guessing quickly to feel productive'],
          ['Treating it as an afternoon out', 'It is a puzzle round for thirteen-year-olds, not an exam', 'Any talk of a result before the round']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The most useful thing a school can do is enter a team at all. More than 43,000 girls have taken part since 2017, and the great majority of them were not planning a career in cyber security when their teacher signed them up.',
            'For a girl who enjoys it, the follow-on is not more cyber: it is programming. Almost everything interesting in the qualifying round gets easier once you can write twenty lines of Python.'
          ],
          right: [
            'We teach the coding and the logic and nothing about entering: registration is a teacher\'s job, and we have no role in the competition or any relationship with the people who run it.',
            'Other competitions in the same term are on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>, including the <a class="ag-inline-link" href="/bebras-computational-thinking-challenge-practice-uk">Bebras Challenge</a> in November, which is open to every year group and needs no programming at all.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs, and a Year 7 girl has a year to climb them',
    lede: 'The competition comes once, in one school year, so the preparation that matters happens before it.',
    table: { caption: 'From puzzles to programs', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 6 to 7', '1. Enjoying puzzles', 'Will sit with a logic problem rather than ask for the answer'],
      ['Year 7', '2. Writing deductions down', 'Keeps a record of what has been ruled out and why'],
      ['Year 7 to 8', '3. A little code', 'Can write a loop that tries every possibility'],
      ['Year 8', '4. Counting first', 'Asks how many possibilities there are before starting']
    ] },
    left: { h3: 'If November is close', ps: [
      'Do one puzzle a week as a team, out loud, with someone writing down what has been eliminated. That is the round.',
      'Do not start a programming course in October. A few lines of Python helps; a half-finished course does not.'
    ] },
    right: { h3: 'After the competition', ps: [
      'Programming is the natural next step, and everything in the qualifying round becomes easier with it.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what else is open, including contests with no year-group restriction at all.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for a curious Year 7 or Year 8',
    lede: 'Grouped by what a student can do now, with the syllabus behind each card.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 9 to 12', courses: [
        { code: 'CFG / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Logic and sequence, before the typing.' },
        { code: 'CFG / A / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Games and apps, then a first look at AI.' },
        { code: 'CFG / A / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Counting and patterns, written as programs.' }
      ] },
      { num: 'II', h3: 'The competition year', sub: 'Ages 12 to 14', courses: [
        { code: 'CFG / B / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code and how AI systems actually work.' },
        { code: 'CFG / B / 02', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Strings, loops and functions, to fluency.' },
        { code: 'CFG / B / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'From blocks to real code, in a world she knows.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Ages 14 to 18', courses: [
        { code: 'CFG / C / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'How many steps a method needs, and why it matters.' },
        { code: 'CFG / C / 02', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Taught to the board the school uses.' },
        { code: 'CFG / C / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'What is actually happening inside the tools she hears about.' }
      ] },
      { num: 'IV', h3: 'Building things', sub: 'For students who want a project', courses: [
        { code: 'CFG / D / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site with its own database.' },
        { code: 'CFG / D / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Screens, taps and what the app remembers.' },
        { code: 'CFG / D / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Patterns in real data rather than exercises.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Small groups, early evening, and puzzles talked through out loud',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'The usual slot for Years 7 and 8.' },
      { time: 'Later weekday evening', l: 'For older students.' },
      { time: 'Weekend morning', l: 'For a longer session on one problem.' }
    ],
    cells: [
      { h3: 'Reasoning out loud', p: 'Students say what they have ruled out and why, which is the habit a team round needs.' },
      { h3: 'Girls-only groups where wanted', p: 'We run mixed groups by default and girls-only groups where a family prefers one.' },
      { h3: 'Five to ten students', p: 'Enough for a better method to surface, small enough that nobody stays quiet.' },
      { h3: 'Our own puzzles', p: 'Written by us. We do not reproduce competition material.' },
      { h3: 'One to one on request', p: 'For a student who would rather think aloud without an audience.' },
      { h3: 'No part in the competition', p: 'A teacher registers a team. We have no role in the competition and promise nothing about it.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four things students here have made and published, none of them for a contest. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on our Google profile by families, printed as written.',

  fees: {
    h2: 'Fees',
    lede: 'The same monthly price in US dollars wherever a family lives outside India. Nothing to join, and you can stop at the end of any month.',
    free: ['A full lesson on a real puzzle', 'A straight read on the level', 'No card details taken'],
    group: ['Five to ten students at one level', 'The same teacher every week', 'Work talked through together', 'A certificate at the end'],
    one: ['A teacher working with one student', 'Shaped around what she finds hard', 'Useful when a group hour will not fit']
  },

  faq: {
    eyebrow: 'CyberFirst Girls questions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'Is the CyberFirst Girls Competition still running?', a: 'Yes, under a new name. Gov.uk says the government runs a TechFirst Girls Competition in November, and CyberFirst became part of TechFirst from September 2026, with the NCSC continuing to lead the cyber pathway.' },
      { q: 'Who can enter?', a: 'The NCSC\'s own announcement says girls in Year 8 in England and Wales, S2 in Scotland and Year 9 in Northern Ireland, in teams of up to four.' },
      { q: 'Who registers a team?', a: 'A teacher at the school or a school guardian must act as mentor and register the team. A family cannot enter a girl directly, and neither can we.' },
      { q: 'What is in the qualifying round?', a: 'An online set of puzzles covering topics from cryptography to AI to logic, sat by the team.' },
      { q: 'What happens to the top teams?', a: 'The highest scoring teams go to one of 13 finals held across the UK, with one in each of Scotland, Wales and Northern Ireland and the rest in English regions.' },
      { q: 'When exactly does it run?', a: 'The shape is a November qualifying round and finals in February. We do not print exact dates because gov.uk says only that the competition runs in November and we could not date the NCSC announcement that carries specific dates. Check the organiser.' },
      { q: 'How many girls take part?', a: 'The NCSC says more than 43,000 girls have taken part since 2017.' },
      { q: 'Does my daughter need to be able to code?', a: 'No. The round is puzzles rather than programming, though a little Python makes several kinds of puzzle much quicker. A full programming course started in October is not the answer.' },
      { q: 'What is the one idea worth teaching first?', a: 'Counting the possibilities. Ten yes or no questions can pin any number from 1 to 1,000 and nine cannot, because nine questions can only distinguish 512 things. Knowing whether a puzzle can be brute-forced saves more time than any trick.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other contests in the same term',
    lede: 'What else is open to a Year 8 student in the autumn, and where the whole year is listed.',
    items: [
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'November, free, every year group, no programming.' },
      { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge', p: 'Ten challenges from September to January.' },
      { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge', p: 'Teams, hidden tests, January and March.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'How to tell a serious provider from a well-designed one.' }
    ]
  },

  start: {
    h2: 'Book a free lesson',
    lede: 'Tell us the year group and whether she has written any code. The free lesson works through a real puzzle, and we say afterwards what we saw.',
    readFirst: 'Rather read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'The quickest route to us is usually a WhatsApp message, which is free from a UK mobile. The number is Indian, as we state everywhere, and there is no office in Britain.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python for kids' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/gcse-computer-science-course', label: 'GCSE Computer Science' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the thinking; a teacher enters the team'
  },

  personalityCss: `
.ag-root.ag-cfg .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cfg .ag-capsule { border-left-width: 7px; border-radius: 0 5px 5px 0; }
.ag-root.ag-cfg .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cfg .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.012em; }
.ag-root.ag-cfg .ag-table td:last-child { font-size: 0.95em; }
.ag-root.ag-cfg .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-cfg .ag-three h3 { letter-spacing: -0.005em; }
.ag-root.ag-cfg .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['TechFirst Girls Competition', 'teams of up to four', '13 finals held across the UK', '43,000 girls', 'S2 in Scotland', '2 to the power 9 is 512', 'must act as their mentor']
};
