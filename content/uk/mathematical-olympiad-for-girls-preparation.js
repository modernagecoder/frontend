'use strict';
// Mathematical Olympiad for Girls preparation (ag- competition spoke, UK cluster Phase 2).
// UKMT facts read on 20 September 2026:
//  - Competitions calendar 2026-27: the Mathematical Olympiad for Girls and the Mathematical Competition
//    for Girls both fall on 22 September 2026.
//  - MOG page: "Tuesday 22nd September 2026"; a "2.5 hours" paper that "consists of five challenging
//    problems", of which two ask for "numerical answers only" and three "require full written
//    explanations"; eligibility "England and Wales: Year 11 and above (younger students may be entered at
//    the school's discretion)", "Scotland: S4 and above", "Northern Ireland: Year 12 and above"; entry is
//    discretionary; paper answer sheets are uploaded by 11:59pm on Wednesday 23 September 2026.
//  - Mathematical Competition for Girls: new, unlimited entry, "five similar problems, but in the
//    answer-only format", similar in style and level to the MOG answer-only questions with some questions
//    shared, and "students cannot sit both the MCG and MOG".
// Entry fees are published by UKMT in pounds and are not printed here.
// Spine: two questions want the number, three want the reason. Our own worked case, brute-forced on
// 20 September 2026: among any six people, three are mutual friends or three are mutual strangers. All
// 32,768 possible friendship patterns on six people were checked and not one avoided it; on five people,
// 12 of the 1,024 patterns do avoid it, and they are the five-cycles, for example 0-3-2-1-4-0. The answer
// to "what is the smallest group?" is the single word six. The reason is the whole question.
// No UKMT problem is reproduced; UKMT publishes its own past papers and solutions free.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'MOG', label: 'Mathematical Olympiad for Girls', blurb: 'Five problems in two and a half hours: two want a number, three want the reason.' },
  slug: 'mathematical-olympiad-for-girls-preparation',
  code: 'mog',
  accent: '#1A4C45',
  accentRationale: 'Mathematical Olympiad for Girls: a deep teal-green from the solver (7.88:1 on every paper tint), distinct from the Kent teal, the forest and olive greens and every other competition accent',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Mathematical Olympiad for Girls preparation',
  title: 'Mathematical Olympiad for Girls Preparation | MOG and MCG',
  description: 'Preparing for the UKMT Mathematical Olympiad for Girls: five problems in two and a half hours, two answer-only and three written, and how the MCG differs.',
  ogDescription: 'The MOG is the gentlest bridge in British mathematics from multiple choice to written proof: two questions want a number, three want the argument.',
  twitterDescription: 'Mathematical Olympiad for Girls preparation: five problems, two and a half hours, and the new MCG.',
  pageName: 'Mathematical Olympiad for Girls Preparation',
  webPageDescription: 'Preparation guidance for the UK Mathematics Trust Mathematical Olympiad for Girls and the Mathematical Competition for Girls, covering eligibility by nation, the format of each paper and how to practise written mathematical argument.',
  courseDescription: 'Live online olympiad mathematics classes for students in Year 11 and above preparing for the Mathematical Olympiad for Girls, teaching written proof alongside problem solving.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Mathematical Olympiad for Girls',
  navLinks: [
    { href: '#paper', label: 'The paper' },
    { href: '#reason', label: 'The number and the reason' },
    { href: '#mcg', label: 'MOG or MCG' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 11 and above &middot; 22 September 2026',
  h1: 'Mathematical Olympiad for Girls preparation',
  lede: 'Most students meet written mathematics as a cliff. One year the papers are multiple choice and the next they want a proof, and nothing in between teaches the crossing. The Mathematical Olympiad for Girls is the gentlest bridge in the British system, and it is built that way on purpose: five problems in two and a half hours, of which two ask for a numerical answer and three ask for a full written explanation. A student can walk in able to do the first kind and learn, on paper, what the second kind wants. This page is about that difference, and about how to practise the half nobody has ever asked for.',
  secondaryCta: { href: '#reason', label: 'See a number that needs a reason' },
  wa: 'Hello Modern Age Coders, my daughter is entering the Mathematical Olympiad for Girls and I would like a free class.',
  heroNote: 'Quoted from UKMT, with the date we read it &middot; Problems written by us &middot; Nothing promised about a result',
  spec: [
    ['Organiser', 'UK Mathematics Trust'],
    ['Date', 'Tuesday 22 September 2026'],
    ['Length', 'Two and a half hours'],
    ['Problems', 'Five'],
    ['Answer only', 'Two of the five'],
    ['Written explanation', 'Three of the five'],
    ['England and Wales', 'Year 11 and above'],
    ['Also that day', 'The Mathematical Competition for Girls']
  ],
  capsuleQ: 'In short',
  capsule: 'The Mathematical Olympiad for Girls is run by the UK Mathematics Trust and falls on "Tuesday 22nd September 2026". UKMT describes a paper of "2.5 hours" that "consists of five challenging problems": two ask for "numerical answers only" and three "require full written explanations". Eligibility is "England and Wales: Year 11 and above (younger students may be entered at the school\'s discretion)", "Scotland: S4 and above" and "Northern Ireland: Year 12 and above", and entry is discretionary through a school. On the same day UKMT runs the newer Mathematical Competition for Girls, an unlimited-entry paper of "five similar problems, but in the answer-only format", with some questions shared; "students cannot sit both the MCG and MOG". We teach the problem solving and the written argument, live online. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a MOG candidate',
    lede: 'Pick by whether the gap is the mathematics or the writing.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'MOG / 01', title: 'Olympiad and competition maths', note: 'Counting, number theory and geometry in the olympiad idiom, with every solution written out.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MOG / 02', title: 'High school mathematics', note: 'For a student who can see the idea but loses time getting the algebra out.' },
      { course: 'statistics-probability-maths-course', code: 'MOG / 03', title: 'Statistics and probability', note: 'Counting arguments done carefully, which is where a good many MOG problems live.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'The paper',
      h2: 'Five problems, and two different kinds of answer',
      lede: 'Facts read at UKMT\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The Mathematical Olympiad for Girls as UKMT publishes it', head: ['Part', 'What UKMT says', 'What it means on the day'], rows: [
          ['Date', '"Tuesday 22nd September 2026"', 'Early in the autumn term, before most competition seasons begin'],
          ['Length', '"2.5 hours"', 'Thirty minutes a problem, which nobody should spend evenly'],
          ['The paper', '"consists of five challenging problems"', 'Fewer, longer problems than any challenge paper'],
          ['Two of them', 'Ask for "numerical answers only"', 'Familiar ground for a student coming from the Senior Challenge'],
          ['Three of them', '"require full written explanations"', 'The part that has to be learned, and the reason this page exists'],
          ['England and Wales', '"Year 11 and above (younger students may be entered at the school\'s discretion)"', 'Sixth formers and strong Year 11s, with younger students possible'],
          ['Scotland', '"S4 and above"', 'Scottish stages, not translated year groups'],
          ['Northern Ireland', '"Year 12 and above"', 'One year higher, matching the NI school year'],
          ['Entry', 'Discretionary, arranged by a school', 'No qualifying score is needed; a teacher enters candidates']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Discretionary entry is the detail that changes who this paper is for. There is no threshold to clear first and no invitation to wait for. A teacher who thinks a student would enjoy it can enter her, which means the paper is available to students who have never done well in a timed multiple-choice round and might do very well given two and a half hours.',
            'Answer sheets are uploaded the following day, by 11:59pm on Wednesday 23 September 2026, so a school needs to have thought about scanning before the morning arrives.'
          ],
          right: [
            'Two and a half hours for five problems is unusually generous, and the generosity is the design. These are problems meant to be thought about rather than recognised, and a student who finishes early has almost certainly not written enough on the three explained questions.',
            'It falls in September, which makes it the first serious paper of the school year. That is worth planning around: the useful preparation happens in the summer term before, not in the fortnight after school goes back.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukmt.org.uk/mathematical-olympiad-for-girls" rel="noopener" target="_blank">UKMT, Mathematical Olympiad for Girls</a>, <a class="ag-inline-link" href="https://ukmt.org.uk/competitions/mathematical-competition-for-girls" rel="noopener" target="_blank">Mathematical Competition for Girls</a> and the <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">competitions calendar</a>, read 20 September 2026. We have no connection with the UK Mathematics Trust.' }
      ]
    },
    {
      id: 'reason', tint: 'deep', eyebrow: 'The method',
      h2: 'The number is one word. The reason is the question.',
      lede: 'A worked case, written by us, that shows exactly what the three explained questions are asking for.',
      body: [
        { kind: 'p', html: 'Here is a problem in the right spirit. <strong>In any group of people, some pairs are friends and the rest are strangers. What is the smallest size of group that must always contain three people who are all friends with each other, or three who are all strangers to each other?</strong> The answer is six. Written on a line by itself, that answer is worth almost nothing, and a student who has only ever sat answer-only papers has no idea why.' },
        { kind: 'table', caption: 'Our brute force of 20 September 2026: every possible pattern of friendships', head: ['Group size', 'Patterns checked', 'Patterns with no trio of mutual friends and no trio of mutual strangers'], rows: [
          ['Five people', '1,024', '12'],
          ['Six people', '32,768', '0']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why five is not enough', p: 'Twelve of the 1,024 patterns on five people escape, and they are all the same shape: a ring. Seat five people in a circle, let each be friends with their two neighbours and strangers to the other two, and no trio is all friends or all strangers.' },
          { h3: 'Why six always works', p: 'Pick any person. They have five relationships, so at least three are of the same kind, say three friends. If any two of those three are friends with each other, that pair plus the first person is a trio of friends. If none are, those three are a trio of strangers.' },
          { h3: 'What the brute force did', p: 'It checked all 32,768 patterns and found no exception, which is reassurance. The paragraph above is the proof, and it is what the three written questions on the paper are asking a student to produce.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Notice the shape of the good argument. It does not check cases; there are 32,768 of them and nobody has the afternoon. It picks an arbitrary person, counts their five relationships, and observes that three must match. That counting step is the pigeonhole principle, and it is one of the two or three techniques that unlock most olympiad counting problems.',
            'Notice also how short it is. Five sentences, no algebra, complete. Students often believe a written solution must be long, and length is usually a sign that the key idea has not been found yet.'
          ],
          right: [
            'The practical exercise this suggests is small and repeatable. Take a problem whose answer is already known and write the reason in under ten lines, for a reader who has not seen the problem. Then leave it a day and read it back cold, and see whether it still convinces.',
            'That is the whole difference between the two answer-only questions and the three explained ones, and it is trainable in a way that raw problem-solving ability is not.'
          ] },
        { kind: 'source', html: 'The problem, the argument and the brute-force check are ours, written and run on 20 September 2026: all 1,024 friendship patterns on five people and all 32,768 on six were tested, with twelve escapes at five and none at six.' }
      ]
    },
    {
      id: 'mcg', tint: 'plain', eyebrow: 'The choice',
      h2: 'MOG or MCG, and why a student cannot sit both',
      lede: 'UKMT now runs two papers for girls on the same day, and a school has to choose one per student.',
      body: [
        { kind: 'table', caption: 'The two papers compared, from UKMT\'s own descriptions', head: ['', 'Mathematical Olympiad for Girls', 'Mathematical Competition for Girls'], rows: [
          ['Entry', 'Discretionary, through a school', 'Unlimited entry'],
          ['Problems', 'Five challenging problems', '"five similar problems, but in the answer-only format"'],
          ['Answers', 'Two numerical, three fully written', 'All answer only'],
          ['Overlap', 'Its answer-only questions are the reference point', 'Similar in style and level, with some questions shared'],
          ['Both at once', 'Not possible: "students cannot sit both the MCG and MOG"', 'Not possible, for the same reason']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The honest way to choose is to ask what a student has actually done before. A student who has never written a mathematical argument, and will not have practised one before late September, may get more out of a paper that asks only for answers, and can come to the written paper next year knowing what it wants.',
            'A student who has written up solutions, even a handful, should sit the olympiad. The three explained questions are where the real learning is, and a half-finished written argument teaches more than five correct numbers.'
          ],
          right: [
            'What should not drive the decision is fear of a bad score. Neither paper is a qualification, neither appears on any record a school or university sees unless a student chooses to mention it, and both exist because UKMT wanted more girls sitting mathematics beyond the syllabus.',
            'The other rungs are open in parallel. The Senior Mathematical Challenge falls on 7 October 2026 and the <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad</a> follows in November, and a student can sit those as well as this.'
          ] }
      ]
    },
    {
      id: 'practise', tint: 'tint', eyebrow: 'How to practise',
      h2: 'Write ten lines, then read them cold',
      lede: 'There is one exercise worth doing repeatedly, and it takes twenty minutes a week.',
      body: [
        { kind: 'table', caption: 'Preparation that works for a September paper', head: ['When', 'What to do', 'Why'], rows: [
          ['Summer term before', 'Work olympiad problems without a clock', 'Problem-solving grows slowly and cannot be hurried in September'],
          ['Summer holidays', 'Write up one solution a week, properly', 'The writing is the half nobody has practised'],
          ['Early September', 'Reread old write-ups cold and mark them yourself', 'A solution that convinced you in July often does not in September'],
          ['The week before', 'One timed two-and-a-half-hour sitting', 'Stamina and pacing, not content'],
          ['On the day', 'Read all five, then start with the one you can see into', 'Nothing rewards doing them in order']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The commonest preparation mistake for this paper is to spend all of it on the two answer-only questions, because they are the familiar kind and progress feels measurable. Three fifths of the paper wants something else.',
            'The second is to read model solutions instead of writing any. Reading a good proof teaches style; writing a mediocre one and having it picked apart teaches the skill.'
          ],
          right: [
            'UKMT publishes its own past papers and full solutions free, which is the right place to meet the real style of the questions. We do not reproduce any of them here or in lessons; our problems are written by us in the same territory.',
            'If a student finds she enjoys the written questions more than the answer-only ones, that is the signal to look at the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> and keep going.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from an answer to an argument',
    lede: 'A student moves up when the previous habit is automatic, whatever her year group.',
    table: { caption: 'From a number to a proof a stranger accepts', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 9 to 10', '1. Technique out of the way', 'Algebra and counting never interrupt the thinking'],
      ['Years 10 to 11', '2. Patience', 'Will stay with one problem for half an hour unprompted'],
      ['Year 11 to 12', '3. Ten honest lines', 'Writes a short argument that a classmate can follow'],
      ['Years 12 to 13', '4. Cold reading', 'Marks her own week-old solution and finds the gap in it']
    ] },
    left: { h3: 'If September is close', ps: [
      'Write up two problems already solved, fully, and have someone read them as a stranger would. That is the highest-value evening available.',
      'Sit one timed paper for pacing, and do not add topics. Nothing in this paper needs content beyond school mathematics.'
    ] },
    right: { h3: 'What comes after', ps: [
      'The Senior Mathematical Challenge is on 7 October 2026 and the <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad</a> in November, both open to the same students.',
      'The written habit is worth more at every level above this one, and it is what university mathematics is made of.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for a sixth-form problem solver',
    lede: 'Sorted by the obstacle rather than the year group, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Olympiad mathematics', sub: 'The paper itself', courses: [
        { code: 'MOG / O / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Pigeonhole, counting and construction, written out.' },
        { code: 'MOG / O / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Probability arguments that survive being questioned.' },
        { code: 'MOG / O / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra and geometry until they are out of the way.' }
      ] },
      { num: 'II', h3: 'The school course', sub: 'Running underneath it all', courses: [
        { code: 'MOG / S / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'The sixth-form course, taught so it stops eating the same evenings.' },
        { code: 'MOG / S / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and higher, for a candidate still in Year 11.' },
        { code: 'MOG / S / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For students in independent and international schools.' }
      ] },
      { num: 'III', h3: 'Computing beside it', sub: 'Where a program helps', courses: [
        { code: 'MOG / C / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'A short program, and then the sentence that makes it unnecessary.' },
        { code: 'MOG / C / 02', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Enough code to list every case before arguing about them.' },
        { code: 'MOG / C / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Where careful counting meets a messy spreadsheet.' }
      ] },
      { num: 'IV', h3: 'Further on', sub: 'University and after', courses: [
        { code: 'MOG / N / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and how long a method takes.' },
        { code: 'MOG / N / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'What counting and probability turn into later.' },
        { code: 'MOG / N / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Problems solved against a clock and a judge.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'One problem a week, and a reader for the write-up',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual choice for Years 11 to 13.' },
      { time: 'Weekend morning', l: 'Long enough to work a problem to a finished argument.' },
      { time: 'Summer weeks', l: 'The right time to prepare for a September paper.' }
    ],
    cells: [
      { h3: 'Write-ups read as a stranger', p: 'A teacher reads the argument cold and says where it stops being convincing.' },
      { h3: 'Techniques named', p: 'Pigeonhole, extremal cases and construction are taught as a repertoire, not as tricks.' },
      { h3: 'Five to ten students', p: 'Enough for two approaches to meet, small enough for every solution to be read aloud.' },
      { h3: 'Our own problems', p: 'Written by us in the same territory. UKMT publishes its own past papers and solutions.' },
      { h3: 'One to one when wanted', p: 'For a student working beyond her year group, or one who prefers to think out loud alone.' },
      { h3: 'Nothing promised', p: 'We cannot enter anyone, and no score, award or invitation is promised by us.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition entries. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families have said about us on Google, quoted without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Priced monthly in US dollars for families outside India, with no registration fee and no minimum number of months.',
    free: ['One real problem with a teacher', 'A straight read on the level', 'No card details'],
    group: ['Five to ten students at one level', 'The same teacher weekly', 'Written arguments read closely', 'A certificate at the end'],
    one: ['A teacher working with one student', 'Shaped around what she finds hard', 'Useful when a group hour will not fit the week']
  },

  faq: {
    eyebrow: 'Mathematical Olympiad for Girls questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'When is the Mathematical Olympiad for Girls in 2026?', a: 'UKMT gives Tuesday 22 September 2026, with paper answer sheets uploaded by 11:59pm the following day.' },
      { q: 'Who can enter?', a: 'UKMT publishes it by nation: Year 11 and above in England and Wales, with younger students at the school\'s discretion; S4 and above in Scotland; Year 12 and above in Northern Ireland. Entry is discretionary and arranged by a school.' },
      { q: 'What is the paper like?', a: 'Two and a half hours and five challenging problems. Two ask for numerical answers only and three require full written explanations, which makes it the gentlest crossing in the British system from answer papers to proof.' },
      { q: 'Does a student need a qualifying score?', a: 'No. Entry is discretionary rather than by invitation, so a teacher can enter a student who would enjoy the paper without her having cleared a threshold first.' },
      { q: 'What is the Mathematical Competition for Girls?', a: 'A newer UKMT paper on the same day with unlimited entry, described as five similar problems in the answer-only format, similar in style and level to the MOG answer-only questions with some questions shared.' },
      { q: 'Can a student sit both papers?', a: 'No. UKMT says plainly that students cannot sit both the MCG and the MOG, so a school chooses one per student.' },
      { q: 'Which should my daughter sit?', a: 'If she has written up mathematical solutions before, even a few, the olympiad is where the learning is. If she has not, and will not have practised by late September, the answer-only paper is a reasonable first year, and the olympiad is there next year.' },
      { q: 'How do you practise a written question?', a: 'By writing ten honest lines about a problem already solved, then reading them back a week later as a stranger would. A good argument is usually short: if it is long, the key idea has probably not been found yet.' },
      { q: 'Do you use UKMT past papers?', a: 'No. UKMT publishes its own past papers and full solutions free. Our practice problems are written by us in the same territory.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to join and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Where to go after September',
    lede: 'The autumn rounds, the papers below this one, and the full calendar.',
    items: [
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Three and a half hours, six problems, in November.' },
      { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton and Maclaurin', p: 'The intermediate papers, split by school year.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Dates for every contest, checked with the people who run them.' },
      { href: '/junior-mathematical-olympiad-preparation', label: 'Junior Mathematical Olympiad', p: 'Where written solutions begin, at Year 8.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'How to tell a serious provider from a well-designed one.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad lesson',
    lede: 'Tell us the year group and whether she has written up a solution before. The free lesson takes one problem from a first reading to an argument on paper.',
    readFirst: 'Rather read first? Syllabuses live on the <a class="ag-inline-link" href="/courses">course pages</a>, the teaching approach on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the order of topics on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is free from a UK mobile and reaches us fastest. Our number is an Indian one, which we say on every page, and we keep no office in Britain.',
    formNote: 'No card, no obligation. One reply to settle a time.'
  },

  footer: {
    cols: [
      { h4: 'Olympiads', links: [
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad' },
        { href: '/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation', label: 'Cayley, Hamilton, Maclaurin' },
        { href: '/junior-mathematical-olympiad-preparation', label: 'Junior olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Maths courses', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A-level maths' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the reason; UKMT sets the problems'
  },

  personalityCss: `
.ag-root.ag-mog .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-mog .ag-capsule { border-left-width: 6px; border-radius: 0 2px 2px 0; }
.ag-root.ag-mog .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-mog .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.005em; }
.ag-root.ag-mog .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-mog .ag-spec dt { letter-spacing: 0.135em; }
.ag-root.ag-mog .ag-three h3 { letter-spacing: -0.007em; }
.ag-root.ag-mog .ag-slots { gap: 1.05rem; }
`,

  mustMention: ['Tuesday 22nd September 2026', 'five challenging problems', 'numerical answers only', 'require full written explanations', 'students cannot sit both the MCG and MOG', '32,768', 'Year 11 and above']
};
