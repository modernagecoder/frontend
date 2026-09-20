'use strict';
// Best coding classes for teens in the UK (ag- door, national; UK cluster Phase 3, Best group).
// Anchored on Ofcom's Children and Parents: Media Use and Attitudes Report, published 21 May 2026,
// read from Ofcom's own PDF on 20 September 2026. Facts used, all verbatim from that report:
//  - "Nearly nine in ten (86%) children aged 8-17 say that they have heard of artificial intelligence
//    (or AI) such as ChatGPT, CoPilot or Gemini", rising "from seven in ten (69%) 8-9s to just over nine
//    in ten (92%) 13-17s".
//  - "Over half (56%) of children aged 8-17 say they have used AI"; "just over a third (35%) of 8-9s say
//    they have used AI, compared with two-thirds (66%) of 16-17s"; ABC1 67% vs C2DE 46%.
//  - Of 8-17s who have used AI: "Half (51%) say they use AI for schoolwork or homework", up "from 34% in
//    2023 to 45% in 2024, and to 51% this year", with Ofcom's footnote that "Trends are indicative due
//    to changes in methodology"; 43% use it for learning more generally; 28% to find information; 20%
//    to help make images or songs; 43% "simply for fun".
//  - "One in ten AI users aged 8-17 say they have used AI as someone to talk to or 'as a friend'."
//  - Search summaries: "Nearly eight in ten (78%) 8-17s say they at least sometimes read AI summaries
//    when searching for something online"; of those, "Nearly half (46%) ... agree that the information
//    is always accurate", against 21% who disagree and 26% neither.
//  - Recognising AI content, asked of 13-17s WHO SAID THEY WERE AWARE OF AI: "Just over half (52%) say
//    they felt confident (although only 13% describe themselves as very confident)"; 29% neither; 15%
//    not confident. Confidence is lowest of the three critical-understanding areas: 64% confident
//    recognising advertising, 65% knowing whether information is true, against 52% for AI content.
//  - The tested gap: "When tested in practice, however, a quarter (25%) were confident but were unable
//    to correctly identify the AI-generated image shown to them."
//  - Trust, again asked of 13-17s aware of AI: 31% would trust an AI-generated article "to the same
//    extent as one written by a person", 9% more, 43% less; "Taken together, four in ten (40%)
//    teenagers who are aware of AI say they would trust an AI-generated article either more than, or to
//    the same extent as, a human-written article."
// Spine: the teenagers who check. Ofcom measures a gap between confidence and verification, not a gap
// in access. Programming is the one school subject where a teenager gets an unarguable second opinion
// by running the thing, so a coding class for a UK teenager is a habit of checking before it is a
// syllabus. The data project is Ofcom's own base lines: four headline percentages with four different
// denominators (all 8-17s; AI users; those who read AI summaries; 13-17s aware of AI), which is why
// putting them on one chart produces a chart that is wrong.
// Deliberately NOT reused from best-online-coding-classes-uk: the Ofqual 2026 entry figures, Code Club,
// Skills Bootcamps and the Key Stage 1 and 2 curriculum quotes.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'TEENS', blurb: 'What Ofcom found about British teenagers and AI in 2026, a data project on its own base lines, and coding taught as a habit of checking.' },
  slug: 'best-coding-classes-for-teens-uk',
  code: 'btu',
  accent: '#A51D5F',
  accentRationale: 'Teens, UK: a crimson rose from the solver (5.80:1 on every paper tint), the widest gap left in the cluster and clear of the greens on the other UK guide pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Best coding classes for teens in the UK',
  title: 'Best Coding Classes for Teens in the UK | Ages 13 to 18',
  description: 'Coding classes for UK teenagers, ages 13 to 18: Python, web, data and AI taught live by a teacher who reads the code and teaches checking. The first class is free.',
  ogDescription: 'Ofcom found 46% of children who read AI summaries think they are always accurate. Coding is the subject where a teenager can check for themselves.',
  twitterDescription: 'Coding for UK teenagers: Python, web, data and AI, live with a teacher. First class free.',
  pageName: 'Best Coding Classes for Teens in the UK',
  webPageDescription: 'Coding classes for teenagers in the UK, set against Ofcom 2026 findings on how British children use and trust AI, with live online lessons fitted around GCSEs, Nationals, CCEA and A levels.',
  courseDescription: 'Live online coding for UK teenagers: Python, web development, data and AI, placed by ability and fitted around GCSE, National 5, Higher, CCEA and A level years.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Coding for teens, UK',
  navLinks: [
    { href: '#ofcom', label: 'What Ofcom found' },
    { href: '#bases', label: 'A data project' },
    { href: '#school', label: 'Around the exam years' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 13 to 18 &middot; Live online',
  h1: 'Best coding classes for teens in the UK',
  lede: 'Ofcom asked British children this year whether the AI summaries they read at the top of search results are always accurate. Among those who read them, 46 per cent said yes. Twenty-one per cent disagreed. That is the situation a coding class for a British teenager walks into: not a shortage of access to AI, and not a shortage of confidence, but a shortage of checking. Programming happens to be the one subject at school where a teenager can settle an argument in four seconds by running the thing. This page sets out what Ofcom actually measured, a data project built from the small print of its own report, and how our lessons fit around GCSEs, Nationals, CCEA courses and A levels.',
  secondaryCta: { href: '#bases', label: 'The data project' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for a teenager in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built around the UK exam years',
  spec: [
    ['Ages', '13 to 18'],
    ['Covers', 'Python, web, data, AI'],
    ['Fits', 'GCSE, National 5, Higher, CCEA, A level'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Teacher', 'Named, and the same one'],
    ['Habit', 'Predict, run, compare'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A coding class earns its place with a British teenager by teaching them to check. Ofcom\'s 2026 report found that 92 per cent of 13 to 17-year-olds have heard of AI, two-thirds of 16 to 17-year-olds have used it, half of child AI users use it for schoolwork, and among those who read AI summaries in search results, 46 per cent think that information is always accurate. Ofcom also tested the confidence: a quarter of the teenagers who said they were confident at spotting AI-generated content could not identify the AI-generated image they were shown. Coding is the subject where checking is cheap and the answer is not a matter of opinion. We teach teenagers live online, in groups of five to ten at one level or one to one, around GCSE, National 5, Higher, CCEA and A level years. The first lesson is free; after that it is USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for UK teenagers',
    lede: 'The language, the thing they can show people, and the models behind the tools they already use. Each card opens a full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'TEENS / 01', title: 'Python for Teens', note: 'The language most UK exam boards use, taught until a student can write it from an empty file and read code they did not write.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'TEENS / 02', title: 'Full Stack Web Development for Teens', note: 'A working site with its own data, which is the project a sixth-form or apprenticeship interviewer will actually open.' },
      { course: 'ai-ml-masterclass-teens', code: 'TEENS / 03', title: 'AI and Machine Learning for Teens', note: 'Models trained and tested by the student, so that a confident wrong answer from a chatbot becomes recognisable.' }
    ]
  },

  sections: [
    {
      id: 'ofcom', tint: 'tint', eyebrow: 'What Ofcom found',
      h2: 'British teenagers, AI, and a gap that is not about access',
      lede: 'Ofcom published its Children and Parents: Media Use and Attitudes Report on 21 May 2026. Every figure below is taken from it directly.',
      body: [
        { kind: 'table', caption: 'AI and UK children, Ofcom 2026', head: ['What Ofcom asked', 'What it found', 'Who was asked'], rows: [
          ['Heard of AI such as ChatGPT, CoPilot or Gemini', '86 per cent, rising to 92 per cent of 13 to 17s', 'All children aged 8 to 17'],
          ['Have used AI', '56 per cent, rising to 66 per cent of 16 to 17s', 'All children aged 8 to 17'],
          ['Use AI for schoolwork or homework', '51 per cent, up from 45 per cent last year', 'Children who have used AI'],
          ['At least sometimes read AI summaries in search results', '78 per cent', 'All children aged 8 to 17'],
          ['Think the information in AI summaries is always accurate', '46 per cent agree, 21 per cent disagree', 'Those who read AI summaries'],
          ['Feel confident recognising AI-generated content', '52 per cent, of whom only 13 per cent very confident', '13 to 17s who are aware of AI'],
          ['Would trust an AI-generated article at least as much as a human one', '40 per cent', '13 to 17s who are aware of AI']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Then Ofcom did something more useful than asking. It showed children two photographs of well-known people, one real and one generated, and checked. The result is the single most quotable line in the report: "When tested in practice, however, a quarter (25%) were confident but were unable to correctly identify the AI-generated image shown to them."',
            'So one teenager in four who believes they can spot AI cannot. That is not a failure of intelligence. It is what happens when a skill is never tested.'
          ],
          right: [
            'Ofcom also notes where this confidence sits relative to other judgements. Sixty-four per cent of 13 to 17s feel confident recognising advertising online and 65 per cent feel confident telling whether information is true, against 52 per cent for AI-generated content. Of the three, this is the one they trust themselves on least, and it is the one growing fastest.',
            'One more finding is worth a parent knowing: one in ten child AI users say they have used AI "as someone to talk to or as a friend". That is outside what a coding class addresses, and we mention it because it is in the report rather than because we have anything to sell about it.'
          ] },
        { kind: 'p', text: 'None of this argues that teenagers should use AI less. It argues that they need a subject in which checking is normal, fast and unarguable, and in which being wrong is visible within seconds rather than invisible forever. Programming is that subject, which is a better reason to learn it in 2026 than any career forecast.' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/childrens" rel="noopener" target="_blank">Ofcom, Children and Parents: Media Use and Attitudes Report</a>, published 21 May 2026. Figures are quoted with the base Ofcom states for each one.' }
      ]
    },
    {
      id: 'bases', tint: 'deep', eyebrow: 'A data project',
      h2: 'Four percentages, four different denominators',
      lede: 'This is a real exercise we run with teenage students, and the dataset is the report above. It takes a lesson and it changes how a student reads every statistic afterwards.',
      body: [
        { kind: 'two',
          left: [
            'Take the four figures a newspaper would headline: 56 per cent have used AI, 51 per cent use it for schoolwork, 46 per cent think AI summaries are always accurate, and 40 per cent would trust an AI article as much as a human one. Put them in a bar chart and you have made something that looks authoritative and means nothing, because no two of those bars count the same children.',
            'The 56 per cent is of all 8 to 17-year-olds. The 51 per cent is of children who have used AI, a smaller group. The 46 per cent is of children who read AI summaries in search results, a different smaller group. The 40 per cent is of 13 to 17-year-olds who are aware of AI, a different group again, and an older one.'
          ],
          right: [
            'The task we set is simple and the answer is not: state, for each figure, exactly who was counted, then say which pairs may fairly be compared and which may not. Students who are used to being right quickly find this uncomfortable, which is the point.',
            'There is a second trap in the footnotes. Ofcom reports schoolwork use rising from 34 per cent in 2023 to 45 per cent in 2024 to 51 per cent this year, and then adds that "Trends are indicative due to changes in methodology". A student who draws a trend line has drawn something the publisher explicitly warned against.'
          ] },
        { kind: 'table', mt: true, caption: 'The same report, four base lines', head: ['Figure', 'Base Ofcom used', 'What it cannot be compared with'], rows: [
          ['56 per cent have used AI', 'All children aged 8 to 17', 'Anything based only on AI users'],
          ['51 per cent use AI for schoolwork', 'Children who have used AI', 'The 56 per cent above, without recalculating'],
          ['46 per cent say AI summaries are always accurate', 'Children who read AI summaries', 'Either of the two above'],
          ['40 per cent would trust an AI article as much as a human one', '13 to 17s aware of AI', 'All three above, and any 8 to 17 figure']
        ] },
        { kind: 'p', text: 'Doing this properly needs Python rather than a calculator, because the honest version means recomputing each figure on a common base where that is possible and saying plainly where it is not. That is data science in its least glamorous and most useful form, and it is on our <a class="ag-inline-link" href="/courses/data-science-course-for-teens-python-data">data science course for teens</a>. It also happens to be excellent practice for the analysis sections of every UK computing qualification.' },
        { kind: 'p', text: 'The same discipline applies to code a tool writes. A student who can state what a function should return before running it can tell, in seconds, whether the thing they were handed is right, and a student who cannot is trusting a stranger with their coursework.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Around the exam years',
      h2: 'Four school systems, one timetable that bends',
      lede: 'A teenager in Glasgow, Cardiff, Belfast and Birmingham is on four different qualification tracks. Lessons are planned around whichever one applies.',
      body: [
        { kind: 'table', caption: 'What a teenager is usually working towards, by nation', head: ['Nation', 'The years that matter', 'Where to read more'], rows: [
          ['England', 'GCSEs in Years 10 and 11, A levels in Years 12 and 13', '<a class="ag-inline-link" href="/coding-and-ai-classes-in-england">Coding and AI classes in England</a>'],
          ['Scotland', 'National 5 in S4, Higher in S5, Advanced Higher in S6', '<a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">Coding and AI classes in Scotland</a>'],
          ['Wales', 'The Made-for-Wales GCSE, sat on screen in Python', '<a class="ag-inline-link" href="/coding-and-ai-classes-in-wales">Coding and AI classes in Wales</a>'],
          ['Northern Ireland', 'CCEA Digital Technology, on one of two routes', '<a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Coding and AI classes in Northern Ireland</a>']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The practical effect is on scheduling rather than on content. Scottish prelims land in a different month from English mocks; a Welsh candidate has an on-screen paper to rehearse for; a Northern Irish student on the programming route has controlled assessment hours inside school that we stay well clear of.',
            'What stays the same is the method. A student says what a piece of code should do, writes it, runs it, and compares the two. Doing that weekly for a year is what produces someone who checks by reflex.'
          ],
          right: [
            'Teenagers who are ahead of their school course usually want somewhere to put it. British competitions are unusually good for this, and the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what is open and when entries close.',
            'For a student aiming higher still, the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> is the national round that matters, and it rewards exactly the habit above.'
          ] },
        { kind: 'p', text: 'Exam years are handled by easing off rather than pushing harder. Lessons thin out in the weeks before papers and pick up once they are done, because a teenager revising for nine subjects does not need a tenth commitment in May.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four steps through the teenage years',
    lede: 'Where a student starts is decided by what they can already build, not by the year group on the register.',
    table: { caption: 'What a teenager can usually show at each step', head: ['Step', 'Typical starting point', 'Evidence it is done'] , rows: [
      ['1. Typed code without fear', 'A student who has only ever used blocks', 'Short Python programs written from a blank file, with the bugs found by the student'],
      ['2. Programs with structure', 'A student who can type but not plan', 'Functions, lists and files used because the problem needed them, and explained in their own words'],
      ['3. Something other people use', 'A student who wants to show someone', 'A site, game or tool put online, with a note of what it does and what it does not'],
      ['4. Judgement', 'A student who is ahead of their class', 'Code reviewed, including code from an AI tool, with a clear statement of what was kept and why']
    ] },
    left: { h3: 'Starting late is normal', ps: [
      'Plenty of fifteen-year-olds arrive having done almost nothing typed, usually because their school taught computing lightly. They move through the first two steps in a term, faster than a younger learner would, because they read and reason better.',
      'The full topic order, well past school, is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Being ahead is also normal', ps: [
      'A student already writing Python does not repeat it. They move to problems with no obvious answer, which is where algorithms, data and models begin.',
      'That is usually the point at which a competition or an independent project becomes the right next thing.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses taught live to UK teenagers',
    lede: 'Grouped by where most students are when they join. The free lesson settles which one is right.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'For a teenager new to typed code', courses: [
        { code: 'UK / T1 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'The move from blocks to a keyboard, taken slowly enough that nothing is guessed at.' },
        { code: 'UK / T1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'The whole language, taught by predicting what each piece will do before running it.' },
        { code: 'UK / T1 / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Theory and programming aligned to the board a school has actually chosen.' }
      ] },
      { num: 'II', h3: 'Building things', sub: 'For a teenager who wants something to show', courses: [
        { code: 'UK / T2 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site with a database behind it, deployed where anyone can open it.' },
        { code: 'UK / T2 / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'A phone app taken from sketch to store-ready, including the parts nobody enjoys.' },
        { code: 'UK / T2 / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Building with AI assistance', blurb: 'Working alongside AI tools properly: reviewing, testing and keeping a record of what came from where.' }
      ] },
      { num: 'III', h3: 'Going deeper', sub: 'For a teenager ahead of their school course', courses: [
        { code: 'UK / T3 / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained from data by the student, then broken on purpose to see what they cannot do.' },
        { code: 'UK / T3 / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Published datasets cleaned and questioned, base lines included, exactly as in the project above.' },
        { code: 'UK / T3 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The problems that do not yield to more typing, worked on paper before any code is written.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'A named teacher, a fixed slot, and code read every week',
    lede: 'Teachers work from India, where the clocks do not change, so the UK is five and a half hours behind in winter and four and a half in summer. Most teenagers settle on an evening or a weekend morning and keep it.',
    slots: [
      { time: 'Early evening', l: 'The common choice once homework is out of the way.' },
      { time: 'Later evening', l: 'Suits sixth formers with commitments after school.' },
      { time: 'Weekend morning', l: 'Longer, and better for finishing a project in one go.' }
    ],
    cells: [
      { h3: 'Predict before running', p: 'A student says what the code will do before it runs. Being wrong out loud is the fastest way to stop being wrong.' },
      { h3: 'A person reads the code', p: 'Every week, line by line, with the student explaining choices. This is the part a recorded course cannot do.' },
      { h3: 'AI used openly', p: 'Allowed once a student can predict the answer, and logged: what the tool suggested, what was kept, and why.' },
      { h3: 'School vocabulary', p: 'Teachers talk about Year 11, S4, CCEA or WJEC the way the student does. Lessons are in English.' },
      { h3: 'Groups by level', p: 'Five to ten teenagers at the same stage, reading each other\'s code, which is where most of the arguing happens.' },
      { h3: 'Work kept in public', p: 'Finished projects go to the student\'s own repository, which is what a sixth form, apprenticeship or university can actually look at.' }
    ]
  },

  projectsH2: 'Projects UK teenagers have put online',
  projectsLede: 'Four live examples from students of about this age. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Taken from Google exactly as written. Nobody is paid or asked to leave one.',

  fees: {
    h2: 'What UK families pay for teenage classes',
    lede: 'One monthly figure in US dollars, the same for every country outside India. No deposit and no annual contract.',
    free: ['A full lesson with a teacher', 'An honest view of the starting step', 'No card details asked for'],
    group: ['Five to ten teenagers at one level', 'The same teacher through the year', 'Code read and commented on weekly', 'A certificate at the end of a course'],
    one: ['One teacher, one teenager', 'Planned around exam dates', 'Right for deadlines and for students well ahead']
  },

  faq: {
    eyebrow: 'Questions from UK families',
    h2: 'What parents of teenagers ask first',
    items: [
      { q: 'What age range counts as teens here?', a: 'Thirteen to eighteen, which spans Year 9 to Year 13 in England and Wales, S2 to S6 in Scotland, and Year 10 to Year 14 in Northern Ireland.' },
      { q: 'How many British teenagers actually use AI?', a: 'Ofcom found in 2026 that 56 per cent of children aged 8 to 17 have used AI, rising to 66 per cent of 16 to 17-year-olds, and that 92 per cent of 13 to 17-year-olds have heard of it.' },
      { q: 'Do teenagers trust what AI tells them?', a: 'More than you might expect. Among children who read AI summaries in search results, 46 per cent agree the information is always accurate, and 40 per cent of 13 to 17-year-olds aware of AI would trust an AI-generated article at least as much as a human-written one.' },
      { q: 'Can teenagers spot AI-generated content?', a: 'Less reliably than they think. Ofcom showed children a real image and an AI-generated one, and found that a quarter of those who said they were confident could not identify the AI-generated image.' },
      { q: 'My child has never typed code. Is thirteen too late?', a: 'No. Older beginners usually move through the early stages faster because they read and reason better. A term of weekly lessons is normally enough to be writing working Python unaided.' },
      { q: 'Do you teach to our exam board?', a: 'Yes. Teachers work to the board or qualification the school has chosen, whether that is an English GCSE or A level board, National 5 and Higher in Scotland, WJEC in Wales or CCEA in Northern Ireland.' },
      { q: 'Will you help with coursework or a controlled assessment?', a: 'No. Those are set, supervised and certified inside a school, and outside help would put an entry at risk. We teach the skills they draw on, using our own projects.' },
      { q: 'What happens during exam season?', a: 'Lessons ease off in the weeks before papers and restart afterwards. A teenager revising for nine subjects does not need a tenth commitment in May.' },
      { q: 'Are the groups mixed in age?', a: 'Groups are built by level rather than by age, so a fast fourteen-year-old and a beginner sixth former can be in different rooms from their own year group. It works better than it sounds.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Continuing is USD 100 a month in a group or USD 150 a month one to one, with nothing to pay up front and no annual tie-in.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for UK families',
    lede: 'Each one goes deeper into a single part of this.',
    items: [
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page in this series.' },
      { href: '/best-online-coding-classes-uk', label: 'Best online coding classes in the UK', p: 'Seven checks for judging any provider, at any age.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'What the computing curriculum says and who has to follow it.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Everything a teenager can enter this year, with closing dates.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'The national round for students well ahead of their course.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our students have built and published.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will come back at a UK time that suits. The first lesson is real teaching on a real problem, and it ends with a straight answer about where the teenager should start.',
    readFirst: 'Rather read first? Every syllabus is on the <a class="ag-inline-link" href="/courses">course pages</a>, the method is set out in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'WhatsApp from a UK mobile is free and usually fastest. The number is Indian, which we say plainly; there is no British office.',
    formNote: 'No payment details and no commitment. We reply once, to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' }
      ] },
      { h4: 'For teenagers', links: [
        { href: '/best-online-coding-classes-uk', label: 'Choosing a class' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live lessons for UK teenagers, on UK time'
  },

  personalityCss: `
.ag-root.ag-btu .ag-hero h1 { letter-spacing: -0.03em; font-weight: 700; }
.ag-root.ag-btu .ag-capsule { border-left-width: 7px; }
.ag-root.ag-btu .ag-section-head h2 { max-width: 29ch; letter-spacing: -0.014em; }
.ag-root.ag-btu .ag-table caption { text-align: left; font-weight: 700; font-style: italic; }
.ag-root.ag-btu .ag-table th:last-child { width: 30%; }
.ag-root.ag-btu .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-btu .ag-spec-row dt { letter-spacing: 0.06em; }
`,

  mustMention: ['46 per cent', '92 per cent', '66 per cent of 16 to 17s', '78 per cent', 'When tested in practice', '25 per cent', '40 per cent', '21 May 2026', 'Trends are indicative', 'as someone to talk to'],

  dossier: {
    curriculumAuthority: 'United Kingdom, teenagers. Ofcom, Children and Parents: Media Use and Attitudes Report, published 21 May 2026, read from Ofcom\'s own PDF on 20 September 2026. "Nearly nine in ten (86%) children aged 8-17 say that they have heard of artificial intelligence (or AI) such as ChatGPT, CoPilot or Gemini", rising "from seven in ten (69%) 8-9s to just over nine in ten (92%) 13-17s". "Over half (56%) of children aged 8-17 say they have used AI", against 50 per cent last year and 46 per cent the year before, with "just over a third (35%) of 8-9s" and "two-thirds (66%) of 16-17s", and ABC1 67 per cent against C2DE 46 per cent. Of children who have used AI: "Half (51%) say they use AI for schoolwork or homework", "rising from 34% in 2023 to 45% in 2024, and to 51% this year", footnoted "Trends are indicative due to changes in methodology"; 43 per cent use it for learning generally; 28 per cent to find information; 20 per cent to make images or songs; 43 per cent "simply for fun". "One in ten AI users aged 8-17 say they have used AI as someone to talk to or \'as a friend\'." Search summaries: "Nearly eight in ten (78%) 8-17s say they at least sometimes read AI summaries when searching for something online", and of those "Nearly half (46%) ... agree that the information is always accurate", against 21 per cent disagreeing and 26 per cent neither. Asked of 13-17s who were aware of AI: "Just over half (52%) say they felt confident (although only 13% describe themselves as very confident)", 29 per cent neither, 15 per cent not confident, and confidence is lowest of the three critical-understanding areas measured, against 64 per cent for recognising advertising and 65 per cent for knowing whether information is true. Tested: "When tested in practice, however, a quarter (25%) were confident but were unable to correctly identify the AI-generated image shown to them." Trust, same base: 31 per cent would trust an AI-generated article "to the same extent as one written by a person", 9 per cent more, 43 per cent less, so "four in ten (40%) teenagers who are aware of AI say they would trust an AI-generated article either more than, or to the same extent as, a human-written article".',
    localProject: 'The teenagers who check. Ofcom measures a gap between confidence and verification rather than a gap in access, and programming is the one school subject in which checking costs four seconds and the answer is not a matter of opinion. The data project is built from Ofcom\'s own base lines: four headline percentages drawn on four different denominators, all 8 to 17s, then AI users, then those who read AI summaries, then 13 to 17s aware of AI, so a single bar chart of them is wrong by construction. A second trap sits in the footnotes, where Ofcom reports schoolwork use rising 34, 45, 51 per cent and then states that "Trends are indicative due to changes in methodology", so a student who draws a trend line has drawn what the publisher warned against. The page ends on the four qualification systems and treats exam season by easing off rather than adding to it. Lesson family: a statistic whose base line is the whole story; distinct from the criteria checklist on the best-online page, which uses Ofqual entries, Code Club and Skills Bootcamps, none of which appear here.',
    requiredMentions: ['46 per cent', '92 per cent', '78 per cent', 'When tested in practice', '21 May 2026', 'Trends are indicative'],
    sources: [
      { claim: 'Ofcom, Children and Parents: Media Use and Attitudes Report, published 21 May 2026: awareness and use of AI by age, use for schoolwork and the indicative-trend footnote, AI summaries in search and belief in their accuracy, confidence in recognising AI-generated content and the tested gap, trust in AI-generated articles, and AI used as someone to talk to.', url: 'https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-children/childrens' }
    ],
    rejectedClaims: [
      'Any figure for teenagers alone where Ofcom published a base of 8 to 17s: bases are stated beside every figure on the page and never merged.',
      'A trend in AI use for schoolwork: Ofcom footnotes the 34, 45 and 51 per cent series as indicative because the methodology changed, so the page prints the last two years and calls it no trend.',
      'GCSE, A level or Higher entry numbers: those belong to the best-online page and to JCQ, whose site blocks automated reads.',
      'Any claim that a coding class improves exam grades or school attainment: no source supports it and the page promises a habit, not an outcome.',
      'Anything about AI companionship beyond quoting Ofcom\'s one-in-ten figure: it is outside what a coding class addresses.'
    ]
  }
};
