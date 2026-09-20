'use strict';
// Perse Coding Team Challenge preparation (ag- competition spoke, UK cluster Phase 2).
// Facts read at pctc.perse.co.uk on 20 September 2026:
//  - "The competition is open to UK pupils up to Year 11 (S4 in Scotland) and is free to enter";
//    international schools may take part for certificates but cannot compete for prizes; "PCTC is
//    sponsored by Jane Street" and it runs from The Perse School.
//  - 2027 cycle: Round 1 from 25 January to 5 February 2027, Round 2 from 1 to 12 March 2027, and the
//    Sixth Form Gold Rush from 15 to 19 March 2027, "a solo opportunity ... on a mix of six questions
//    selected from Round 2 material for 50 minutes".
//  - Round 1: "pairs (or solo, if necessary) sharing one computer", "40 minutes"; two tracks, Navigators
//    with "seven questions each worth three points", and Pathfinders where "Questions 1-5 will be worth
//    three points and questions 6-10 five points".
//  - Round 2: "teams of up to three" with "a maximum of two Years 11 students allowed per team",
//    "60 minutes", a four-level format from Level 1 (basic text and number processing) to Level 4
//    (algorithmic complexity), "every question is worth an equal ten points each".
//  - Materials: "up to 20 A4 sides (10 double-sided pages) of printed or digital code snippets".
//  - Languages: "Python, C++, C#, Java, JavaScript and Visual Basic.Net".
//  - Marking: code is typed into the online submission window or pasted from an IDE, marked
//    automatically, with "feedback given regarding the number of test cases passed or failed" although
//    "the test cases themselves are not shown". Where a team submits more than one solution the best
//    submission counts.
// Spine: you are told that you failed, not why. Our own run of 20 September 2026: the obvious one-line
// answer to "return the second largest number in a list", sorted(a)[-2], against a seven-case checklist
// written from the specification alone. Three cases pass, two return the largest value again on ties
// ([9,9,4] and [7,7,7]), and two crash outright ([4] and []). Every one of those was found without
// seeing a single judge test, which is the whole technique.
// No PCTC question is reproduced; the organiser publishes its own past papers and solutions.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'PCTC', label: 'Perse Coding Team Challenge', blurb: 'Two pupils, one computer, forty minutes, and a marker that says how many tests you failed but not which.' },
  slug: 'perse-coding-team-challenge-preparation',
  code: 'pct',
  accent: '#9C1C82',
  accentRationale: 'Perse Coding Team Challenge: a bright magenta from the solver (5.87:1 on every paper tint), the lightest of the purple family and clearly apart from the Kangaroo blue-violet and the dark Primary Maths Challenge plum',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Perse Coding Team Challenge preparation',
  title: 'Perse Coding Team Challenge Preparation | PCTC Rounds 1 and 2',
  description: 'Preparing for the Perse Coding Team Challenge: pairs on one computer for 40 minutes, teams of three for 60, six languages, and hidden test cases.',
  ogDescription: 'The PCTC marker tells a team how many test cases failed and never which ones. The fix is a checklist you write before submitting, and it costs nothing.',
  twitterDescription: 'Perse Coding Team Challenge preparation: two rounds, six languages, and hidden tests.',
  pageName: 'Perse Coding Team Challenge Preparation',
  webPageDescription: 'Preparation guidance for the Perse Coding Team Challenge, covering the two rounds, team sizes, permitted languages and notes, the four difficulty levels and how automatic marking with hidden test cases changes what a team should practise.',
  courseDescription: 'Live online programming classes in Python and other competition languages for UK pupils up to Year 11 preparing for team coding challenges.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Perse Coding Team Challenge',
  navLinks: [
    { href: '#rounds', label: 'The two rounds' },
    { href: '#hidden', label: 'Hidden tests' },
    { href: '#notes', label: 'The twenty sides' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Up to Year 11 &middot; January to March 2027',
  h1: 'Perse Coding Team Challenge preparation',
  lede: 'Two pupils, one computer, forty minutes. That is the first round of the Perse Coding Team Challenge, and the shared keyboard is not a limitation the organisers apologise for: it is the competition. A pair who both type produce half a program each; a pair who talk produce one that works. Round two stretches to teams of three and an hour, and the questions climb through four levels from basic text handling to genuine algorithmic complexity. The whole thing is free, it is open to any UK pupil up to Year 11, and it is marked by a machine that will tell a team how many hidden tests they failed without ever telling them which.',
  secondaryCta: { href: '#hidden', label: 'See how to find a bug you cannot see' },
  wa: 'Hello Modern Age Coders, my child is entering the Perse Coding Team Challenge and I would like a free class.',
  heroNote: 'Quoted from the organiser with the date we read it &middot; Our own practice tasks &middot; Nothing promised about a result',
  spec: [
    ['Organiser', 'The Perse School'],
    ['For', 'UK pupils up to Year 11, S4 in Scotland'],
    ['Cost', 'Free to enter'],
    ['Round 1', 'Pairs, one computer, 40 minutes'],
    ['Round 2', 'Teams of three, 60 minutes'],
    ['Levels', 'Four, from text handling to complexity'],
    ['Languages', 'Six, including Python'],
    ['Marking', 'Automatic, on hidden tests']
  ],
  capsuleQ: 'In short',
  capsule: 'The Perse Coding Team Challenge runs from The Perse School and is "open to UK pupils up to Year 11 (S4 in Scotland) and is free to enter". Round 1 falls between 25 January and 5 February 2027 and is sat in "pairs (or solo, if necessary) sharing one computer" for "40 minutes". Round 2 runs from 1 to 12 March 2027 in "teams of up to three", with "a maximum of two Years 11 students allowed per team", for "60 minutes", across a four-level format from basic text and number processing up to algorithmic complexity, where "every question is worth an equal ten points each". A Sixth Form Gold Rush follows from 15 to 19 March 2027: six questions from Round 2 material, solo, in 50 minutes. Teams may code in "Python, C++, C#, Java, JavaScript and Visual Basic.Net" and may bring up to 20 A4 sides of code snippets. We teach the programming, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a coding team',
    lede: 'The level a pupil should work at is set by what they can debug alone, not by their year group.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PCT / 01', title: 'Python and AI for kids', note: 'For Years 6 to 8: a first typed language, taught until a program can be read back before it runs.' },
      { course: 'python-complete-masterclass-teens', code: 'PCT / 02', title: 'Python from start to finish', note: 'The main route: strings, lists, loops and functions until they are automatic under a clock.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'PCT / 03', title: 'Algorithms and data structures', note: 'For the Level 3 and Level 4 questions, where a working answer is not yet a fast one.' }
    ]
  },

  sections: [
    {
      id: 'rounds', tint: 'tint', eyebrow: 'The two rounds',
      h2: 'Forty minutes in pairs, then an hour in threes',
      lede: 'Facts read at the organiser\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Perse Coding Team Challenge as the organiser describes it', head: ['', 'Round 1', 'Round 2', 'Sixth Form Gold Rush'], rows: [
          ['2027 dates', '25 January to 5 February', '1 to 12 March', '15 to 19 March'],
          ['Who sits it', '"pairs (or solo, if necessary) sharing one computer"', '"teams of up to three", with "a maximum of two Years 11 students allowed per team"', 'Solo, for older students'],
          ['Length', '"40 minutes"', '"60 minutes"', '"50 minutes"'],
          ['Questions', 'Navigators: seven questions at three points each. Pathfinders: questions 1 to 5 at three points, 6 to 10 at five', 'A four-level format, and "every question is worth an equal ten points each"', '"six questions selected from Round 2 material"'],
          ['Levels', 'Two tracks by experience', 'Level 1 basic text and number processing, up to Level 4 algorithmic complexity', 'Drawn from Round 2'],
          ['Prize eligibility', 'UK pupils up to Year 11, S4 in Scotland', 'The same', 'Certificates']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The two tracks in round one matter more than they look. Navigators and Pathfinders are not age bands; they are experience bands, and a school entering a Year 10 pupil who started Python in September should think hard before putting them in the harder track. The competition is free, so there is no cost to entering a pupil at the level they can actually work at.',
            'International schools may take part for certificates but cannot compete for prizes, which is worth knowing before a family abroad gets their hopes up.'
          ],
          right: [
            'Round two\'s four levels are the useful part of the design. Level 1 is basic text and number processing and Level 4 is genuine algorithmic complexity, with every question worth the same ten points. A team that can reliably finish the lower levels scores more than one that gambles on the top level and runs out of time.',
            'That equal scoring is a strategy in itself. In a competition where all questions are worth the same, the right order is easiest first, always, and a team that has agreed that in advance does not argue about it at minute forty.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://pctc.perse.co.uk/" rel="noopener" target="_blank">Perse Coding Team Challenge</a> and its <a class="ag-inline-link" href="https://pctc.perse.co.uk/coding-competition/" rel="noopener" target="_blank">competition information</a>, read 20 September 2026. Modern Age Coders is not connected with The Perse School or the challenge.' }
      ]
    },
    {
      id: 'hidden', tint: 'deep', eyebrow: 'The method',
      h2: 'You are told that you failed, not why',
      lede: 'The organiser marks automatically and gives "feedback regarding the number of test cases passed or failed", while "the test cases themselves are not shown". That one rule decides how a team should work.',
      body: [
        { kind: 'p', html: 'Imagine a question asking for <strong>the second largest number in a list</strong>. In Python the obvious answer is one line: sort the list and take the second from the end. A team writes it in fifteen seconds, submits, and is told that it passed four of seven tests. Now what? They cannot see the three that failed. They can guess, or they can have a checklist.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: the one-line answer against a checklist written from the question alone', head: ['The case', 'The list', 'What the one-liner does'], rows: [
          ['The ordinary case', '3, 9, 4, 1', 'Returns 4, correct'],
          ['Already in order', '1, 2, 3', 'Returns 2, correct'],
          ['All negative', '&minus;5, &minus;2, &minus;9', 'Returns &minus;5, correct'],
          ['Two equal at the top', '9, 9, 4', 'Returns 9: the largest again. Is that what the question wanted?'],
          ['Every value the same', '7, 7, 7', 'Returns 7, for the same reason'],
          ['One item', '4', 'Crashes'],
          ['No items', 'empty', 'Crashes']
        ] },
        { kind: 'three', cells: [
          { h3: 'Three found in a minute', p: 'Two crashes and one genuine ambiguity, all discovered before submitting anything, by a checklist that took less time to run than one failed submission.' },
          { h3: 'The checklist itself', p: 'Empty, one item, everything the same, duplicates at the interesting end, negatives, zero, and the largest size the question allows. Seven lines, and they apply to almost every task in a contest like this.' },
          { h3: 'The ambiguity is the lesson', p: 'Is the second largest of 9, 9, 4 equal to 9 or to 4? The question decides, the judge has decided, and a team that notices the ambiguity can read the wording again instead of guessing.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Hidden tests feel unfair to pupils and they are the honest version of programming. Nobody who writes software gets to see the inputs their program will meet, and the profession\'s answer is not better guessing: it is to invent the awkward cases yourself before anyone else finds them.',
            'For a forty-minute round, the practical rule is that a checklist run costs about thirty seconds and a failed submission costs a minute of confusion. The arithmetic favours the checklist every time.'
          ],
          right: [
            'It also changes how a pair should split the work. One types, one reads the question again and works out what the awkward inputs would be. That is a genuine division of labour rather than a polite way of taking turns.',
            'A pupil who enjoys this side of programming should look at the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a>, where the tests are hidden too and the programs get considerably longer.'
          ] },
        { kind: 'source', html: 'The task, the checklist and the run are ours, written and executed on 20 September 2026. No Perse Coding Team Challenge question is reproduced; the organiser publishes its own past papers and solutions.' }
      ]
    },
    {
      id: 'notes', tint: 'plain', eyebrow: 'The twenty sides',
      h2: 'You may bring notes, so bring the right ones',
      lede: 'The organiser allows "up to 20 A4 sides (10 double-sided pages) of printed or digital code snippets". Most teams either ignore that or fill it with the wrong thing.',
      body: [
        { kind: 'table', caption: 'What belongs in twenty sides of notes, and what does not', head: ['Worth the space', 'Why', 'Not worth it'], rows: [
          ['Reading input and printing output in your language', 'Every question begins and ends with it, and it is the commonest thing to forget under pressure', 'Long tutorials on syntax already known'],
          ['String handling: split, join, slice, case', 'Level 1 and 2 questions are mostly text manipulation', 'Whole language reference pages'],
          ['Sorting with a custom key, and reversing', 'Appears constantly and is easy to get subtly wrong', 'Theory about sorting algorithms'],
          ['A working loop template with a counter', 'Blanking on an off-by-one costs more minutes than anything else', 'Code nobody on the team has actually run'],
          ['The edge-case checklist', 'It is the highest-value page in the pack and nobody thinks to include it', 'Anything copied without being understood']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The rule the organiser sets, code snippets readable at normal zoom, quietly tells a team what the notes are for. They are a personal library, not a textbook, and the useful version is built during practice by writing down whatever the team had to look up.',
            'Six languages are permitted: Python, C++, C#, Java, JavaScript and Visual Basic.Net. A team should pick the one everybody in it can debug, not the one that sounds most serious. In a forty-minute round, familiarity beats power comfortably.'
          ],
          right: [
            'It is worth remembering that submissions can be repeated and the highest-scoring one counts, so a team that fixes a bug and resubmits loses nothing except time. That makes the checklist even more valuable: it converts a wasted submission into a fixed one.',
            'And the whole competition is free, which is unusual enough to say plainly. A school needs a room, some computers and a teacher willing to register, and nothing else.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a team that finishes',
    lede: 'Level is set by what a pupil can fix alone, not by what they can write with help.',
    table: { caption: 'From a first program to a checked submission', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 5 to 7', '1. A program that runs', 'Writes and fixes twenty lines without a template'],
      ['Years 7 to 9', '2. Text and numbers', 'Splits, joins and converts without looking anything up'],
      ['Years 9 to 10', '3. The checklist habit', 'Invents awkward inputs before submitting, unprompted'],
      ['Years 10 to 11', '4. Complexity', 'Notices when a working answer will be too slow, and says so']
    ] },
    left: { h3: 'If round one is close', ps: [
      'Practise in pairs on one computer, with the non-typing pupil reading the question aloud and listing the awkward cases. That is the round.',
      'Build the twenty sides from whatever the team actually looks up in practice, not from a template found online.'
    ] },
    right: { h3: 'After the challenge', ps: [
      'The <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> is the next step for a pupil who liked the hidden tests.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> has every other contest open to a UK pupil.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Programming courses for a challenge team',
    lede: 'Sorted by what a pupil can already do alone, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Before typing', sub: 'Ages 6 to 11', courses: [
        { code: 'PCT / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Loops, conditions and variables in a visual language.' },
        { code: 'PCT / A / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Games and apps, then a first look at AI.' },
        { code: 'PCT / A / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that check whether a method works.' }
      ] },
      { num: 'II', h3: 'The competition language', sub: 'Ages 10 to 16', courses: [
        { code: 'PCT / B / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, taught patiently.' },
        { code: 'PCT / B / 02', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Strings, lists and functions until they are automatic.' },
        { code: 'PCT / B / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For schools and teams that work in Java.' }
      ] },
      { num: 'III', h3: 'Levels three and four', sub: 'Where speed matters', courses: [
        { code: 'PCT / C / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and how long a method takes.' },
        { code: 'PCT / C / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Correctness under a clock, against hidden tests.' },
        { code: 'PCT / C / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Taught to the board the school uses.' }
      ] },
      { num: 'IV', h3: 'Building things', sub: 'For pupils who want more than contests', courses: [
        { code: 'PCT / D / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site with its own database, built in slices.' },
        { code: 'PCT / D / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built and evaluated honestly.' },
        { code: 'PCT / D / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Interfaces, events and state.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly programming, with the awkward inputs written first',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time fixed in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For pupils in Years 6 to 9.' },
      { time: 'Later weekday evening', l: 'For Year 10 and 11 teams.' },
      { time: 'Weekend morning', l: 'For a full practice round, start to finish.' }
    ],
    cells: [
      { h3: 'Checklist before submit', p: 'Every task starts by listing the awkward inputs, before a line of code is written.' },
      { h3: 'One keyboard practice', p: 'We run pair tasks the way round one does, with one pupil typing and one reading.' },
      { h3: 'Five to ten learners', p: 'Enough for two solutions to be compared, small enough for every program to be looked at.' },
      { h3: 'Our own tasks', p: 'Written by us in the same style. The organiser publishes its own past papers.' },
      { h3: 'One to one when useful', p: 'For a pupil working well above their year, or one with a specific gap.' },
      { h3: 'Nothing promised', p: 'We cannot register a team and promise no score, certificate or prize.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, built outside any competition. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews families have left on Google, printed as written.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly rate in US dollars for families outside India, with no registration fee and no minimum term.',
    free: ['A full lesson on a real task', 'A straight read on the right level', 'No card details taken'],
    group: ['Five to ten learners at one level', 'The same teacher weekly', 'Code read line by line', 'A certificate at the end'],
    one: ['A teacher working with one learner', 'Shaped around the specific weakness', 'Useful in the weeks before a round']
  },

  faq: {
    eyebrow: 'Perse Coding Team Challenge questions',
    h2: 'What teachers and parents ask',
    items: [
      { q: 'Who can enter the Perse Coding Team Challenge?', a: 'The organiser says the competition is "open to UK pupils up to Year 11 (S4 in Scotland) and is free to enter". International schools may take part for certificates but cannot compete for prizes.' },
      { q: 'When are the 2027 rounds?', a: 'Round 1 runs from 25 January to 5 February 2027, Round 2 from 1 to 12 March 2027, and the Sixth Form Gold Rush from 15 to 19 March 2027.' },
      { q: 'How big is a team?', a: 'Round 1 is sat in pairs, or solo if necessary, sharing one computer. Round 2 is teams of up to three, with a maximum of two Year 11 students per team.' },
      { q: 'How long is each round?', a: 'Forty minutes for Round 1, sixty for Round 2 and fifty for the Sixth Form Gold Rush, which takes six questions from Round 2 material.' },
      { q: 'Which programming languages are allowed?', a: 'The organiser lists Python, C++, C#, Java, JavaScript and Visual Basic.Net. A team should choose the language everyone in it can debug rather than the most powerful one.' },
      { q: 'Can students bring notes?', a: 'Yes. The organiser permits up to 20 A4 sides, or ten double-sided pages, of printed or digital code snippets, readable at normal zoom.' },
      { q: 'How is it marked?', a: 'Automatically. Teams are told how many test cases passed or failed, but the test cases themselves are not shown, and where more than one solution is submitted the highest-scoring one counts.' },
      { q: 'How do you debug a test you cannot see?', a: 'With a checklist written from the question. Empty input, one item, everything the same, duplicates at the interesting end, negatives, zero and the largest allowed size will find most failures in under a minute.' },
      { q: 'What are the four levels in Round 2?', a: 'The organiser describes a four-level format running from Level 1, basic text and number processing, to Level 4, algorithmic complexity, with every question worth an equal ten points.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other coding contests for school pupils',
    lede: 'What comes before this one, what comes after, and where the whole year is listed.',
    items: [
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'No programming at all, and half a million entrants.' },
      { href: '/oxford-university-computing-challenge-preparation', label: 'Oxford University Computing Challenge', p: 'The coding round that follows Bebras.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Three hours, three questions, hidden tests.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/uk-gcse-computer-science-tutoring', label: 'GCSE Computer Science tutoring', p: 'The qualification most of these pupils are heading for.' }
    ]
  },

  start: {
    h2: 'Book a free programming lesson',
    lede: 'Tell us the year group and which language the team codes in. The free lesson is a real task, checklist and all, and we say afterwards what we saw.',
    readFirst: 'Rather read first? Syllabuses sit on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp costs a UK mobile nothing and usually reaches us first. Our number is an Indian one, which we state on every page, and there is no British office.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Coding contests', links: [
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/oxford-university-computing-challenge-preparation', label: 'Computing Challenge' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Programming', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithms and data structures' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Competitive programming' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the checking; the judge keeps its tests'
  },

  personalityCss: `
.ag-root.ag-pct .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-pct .ag-capsule { border-left-width: 5px; border-radius: 0 10px 10px 0; }
.ag-root.ag-pct .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-pct .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-pct .ag-table th:first-child { width: 22%; }
.ag-root.ag-pct .ag-spec dt { letter-spacing: 0.125em; }
.ag-root.ag-pct .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-pct .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['up to Year 11 (S4 in Scotland)', 'sharing one computer', '20 A4 sides', 'Visual Basic.Net', 'the test cases themselves are not shown', '25 January to 5 February 2027', 'ten points each']
};
