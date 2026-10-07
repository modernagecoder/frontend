'use strict';
// AIO to IOI pathway, Australia (ag- competition door, Australia cluster Phase 3, row 90).
// Facts read raw on 7 October 2026 from the Australian Maths Trust, fetched with curl's default user
// agent: Olympiad and Pathways Programs page, AIIO page, FARIO page, the 2026 Olympiad Program
// Calendar PDF (informatics section) and the IOI and EGOI Eligibility Criteria PDF (valid from
// 1 October 2025). Spine: an operations budget, estimating running time from input size before
// coding; the 28 million steps per second figure is our own measurement of a plain Python loop on our
// laptop, labelled as such (family checked free site-wide on 7 October 2026). No selection, invitation
// or medal is promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'AIO TO IOI', label: 'AIO to IOI pathway', blurb: 'The invitational steps from the Australian Informatics Olympiad to the International Olympiad in Informatics, from the AMT\'s 2026 calendar and eligibility rules.' },
  slug: 'aio-to-ioi-pathway-australia',
  code: 'ioip',
  accent: '#1B1B66',
  accentRationale: 'AIO to IOI pathway: a midnight navy chosen by hand, muted, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'AIO to IOI pathway in Australia',
  title: 'AIO to IOI Pathway in Australia | Informatics Olympiad Steps',
  description: 'The path from the Australian Informatics Olympiad to the IOI: AIIO, FARIO, the selection school, APIO and eligibility, from the AMT\'s 2026 calendar and rules.',
  ogDescription: 'How Australian students move from the AIO to the International Olympiad in Informatics: the invitational contests, camps and eligibility rules the Australian Maths Trust publishes, plus the efficiency thinking the later stages demand.',
  twitterDescription: 'From the AIO to the IOI: Australia\'s informatics olympiad pathway, step by step.',
  pageName: 'AIO to IOI Pathway in Australia',
  webPageDescription: 'An explainer for Australian students and parents on the informatics olympiad pathway after the Australian Informatics Olympiad: invitation into the AMT\'s programs, the Australian Invitational Informatics Olympiad, FARIO, the Informatics Selection School, APIO, EGOI and the IOI, with the 2026 calendar, eligibility rules and a lesson on estimating running time.',
  courseDescription: 'Live online algorithms and competitive programming coaching for Australian students working towards the invitational stages of the informatics olympiad pathway.',
  crumbs: [{ name: 'Australian Informatics Olympiad preparation', href: '/australian-informatics-olympiad-preparation' }],
  crumbLabel: 'AIO to IOI pathway',
  navLinks: [
    { href: '#pathway', label: 'The pathway' },
    { href: '#calendar', label: '2026 calendar' },
    { href: '#eligibility', label: 'Eligibility' },
    { href: '#budget', label: 'Efficiency lesson' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Informatics olympiad pathway &middot; Live online',
  h1: 'AIO to IOI pathway in Australia',
  lede: 'For a small number of Australian students each year, the Australian Informatics Olympiad is the first step of a much longer road. The Australian Maths Trust invites strong performers into its olympiad programs, a sequence of invitational contests, mentoring and camps from which Australia\'s team for the International Olympiad in Informatics is chosen. Very few students reach the end, and nobody can promise a place. What families can do is understand the steps, the calendar and the rules, so that a talented student knows what is coming. This page sets those out from the Trust\'s own pages and 2026 calendar, then teaches the skill that separates the later stages from the AIO: working out whether an algorithm is fast enough before writing it.',
  secondaryCta: { href: '#pathway', label: 'See the steps' },
  wa: 'Hello Modern Age Coders, I would like a free class about the informatics olympiad pathway.',
  heroNote: 'From the AMT\'s programs page, 2026 calendar and eligibility rules &middot; 7 October 2026',
  spec: [
    ['Organised by', 'Australian Maths Trust'],
    ['Entry point', 'Australian Informatics Olympiad'],
    ['After that', 'By invitation only'],
    ['Invitational contests', 'AIIO, FARIO, APIO'],
    ['Camp', 'Informatics Selection School'],
    ['International', 'IOI, and EGOI for girls'],
    ['One olympiad a year', 'Students choose one subject'],
    ['We offer', 'Coaching in algorithms, never selection']
  ],
  capsuleQ: 'In short',
  capsule: 'Students who do well in the Australian Informatics Olympiad may be invited into the Australian Maths Trust\'s olympiad programs. In 2026 the informatics calendar ran from the Australian Invitational Informatics Olympiad in February, through FARIO, the Informatics Selection School and APIO, to the International Olympiad in Informatics in August, with the European Girls Olympiad in Informatics in May. Every stage after the AIO is by invitation.',

  picks: {
    eyebrow: 'For the invitational stages',
    h2: 'Three courses for students aiming past the AIO',
    lede: 'Deeper algorithms, harder contest practice, and the mathematical thinking olympiad problems lean on.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', code: 'IOIP / 01', title: 'Algorithms and data structures', note: 'Graphs, dynamic programming and efficient structures, taught for understanding rather than memory.' },
      { course: 'competitive-programming-masterclass-college', code: 'IOIP / 02', title: 'Advanced competitive programming', note: 'Harder contest material for students who have outgrown school-level problems.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'IOIP / 03', title: 'Olympiad maths', note: 'Proof, counting and invariants: the mathematical side of olympiad informatics.' }
    ]
  },

  sections: [
    {
      id: 'pathway', tint: 'tint', eyebrow: 'The steps',
      h2: 'From one contest to an international team',
      lede: 'The Trust describes each step on its own pages. This is the order they appear in, with the Trust\'s wording.',
      body: [
        { kind: 'table', caption: 'The informatics olympiad pathway, as the AMT describes it', head: ['Step', 'What the AMT says'], rows: [
          ['Australian Informatics Olympiad', 'Open entry through schools; "students who perform well in the AIO may be invited to participate in the AMT\'s olympiad programs"'],
          ['Invitation', '"Students with strong performance at the Australian Informatics Olympiad may be invited to participate in special mentoring and participate in exclusive events."'],
          ['Australian Invitational Informatics Olympiad', 'A February contest for Australian and New Zealand students; "Around 40 students are invited to participate each year"'],
          ['French-Australian Regional Informatics Olympiad', 'Held remotely between students from France, Australia, New Zealand and Belgium since 2004; "one of the main competitions used to select students" for the IOI team'],
          ['Informatics Selection School', 'A camp the AIIO page calls "an important step in the pathway to representing Australia"'],
          ['International Olympiad in Informatics', 'Described by the AMT as "the peak competition in computer science for high school students around the world"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two points are easy to miss. First, every step after the AIO is by invitation; there is no way to enter the AIIO, FARIO or the selection school directly. Second, the Trust uses several contests and the camp together, rather than a single exam, to choose the team.',
            'The pathway also includes the Asian Pacific Informatics Olympiad, which appears in the Trust\'s 2026 calendar, and, for girls, the European Girls Olympiad in Informatics with its own mentor program.'
          ],
          right: [
            'The AMT and Australian Science Innovations "do not permit students to participate in more than one Olympiad program" in a year. A student invited into both maths and informatics, or into a science olympiad, has to choose one subject for that year.',
            'The Trust also notes that the programs are supported by an Australian Government grant for mathematics and informatics olympiads. Invitations, selection and team announcements are entirely the Trust\'s decisions.'
          ] },
        { kind: 'source', html: 'Sources: AMT <a class="ag-inline-link" href="https://amt.edu.au/olympiad-programs" rel="noopener" target="_blank">Olympiad and Pathways Programs</a>, <a class="ag-inline-link" href="https://amt.edu.au/australian-invitational-informatics-olympiad-aiio" rel="noopener" target="_blank">AIIO</a> and <a class="ag-inline-link" href="https://amt.edu.au/french-australian-regional-informatics-olympiad-fario" rel="noopener" target="_blank">FARIO</a> pages, and the <a class="ag-inline-link" href="https://amt.edu.au/aio" rel="noopener" target="_blank">AIO page</a>, read on 7 October 2026. We are independent of the AMT.' }
      ]
    },
    {
      id: 'calendar', tint: 'deep', eyebrow: 'The 2026 calendar',
      h2: 'What the informatics year looked like in 2026',
      lede: 'The Trust publishes an Olympiad Program Calendar each year. These are the informatics entries for 2026, exactly as listed.',
      body: [
        { kind: 'table', caption: 'AMT 2026 Informatics Olympiad Program Calendar', head: ['Activity', 'Type', 'Dates', 'Location'], rows: [
          ['AIIO', 'Exam', '12 February', 'School'],
          ['FARIO', 'Exam', '6 to 8 March', 'School'],
          ['EGOI Mentor Program begins', 'Problem solving', '20 March', 'Correspondence'],
          ['Informatics Selection School', 'Camp', '23 April to 1 May', 'Sydney'],
          ['APIO', 'Exam', '9 to 10 May', 'School'],
          ['IOI Mentor Program begins', 'Problem solving', '9 May', 'Correspondence'],
          ['EGOI', 'International event', '12 to 18 May', 'Cesenatico, Italy'],
          ['IOI', 'International event', '9 to 16 August', 'Tashkent, Uzbekistan'],
          ['Informatics School of Excellence', 'Camp', '10 to 19 December (to be confirmed)', 'Canberra']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read with the AIO\'s 2026 date of 27 August, the cycle is clear. A student does well in the AIO in late August, may be invited to the School of Excellence in December, then sits the AIIO in February and FARIO in March of the following year, before the selection school and APIO in autumn.',
            'That means the real preparation for the invitational stages happens in the months after the AIO, not before it. Students who stop practising once the AIO is over are the ones who find February hardest.'
          ],
          right: [
            'The calendar is published year by year, and the 2027 version had not appeared when we checked. Dates and venues change, and the Trust\'s calendar is the only reliable source for them.',
            'Several stages are sat at school or by correspondence rather than at a central venue. Families should expect a busy run from February to May for an invited student, alongside normal schoolwork.'
          ] },
        { kind: 'source', html: 'Source: AMT, <a class="ag-inline-link" href="https://amt.edu.au/wp-content/uploads/2026/01/2026-Olympiad-Program-Calendar.pdf" rel="noopener" target="_blank">2026 Olympiad Program Calendar</a> (PDF), informatics section, read on 7 October 2026.' }
      ]
    },
    {
      id: 'eligibility', tint: 'tint', eyebrow: 'Who can be selected',
      h2: 'Eligibility for Australia\'s IOI and EGOI teams',
      lede: 'The Trust publishes eligibility criteria, valid from 1 October 2025. They are short and worth reading in full on the Trust\'s site.',
      body: [
        { kind: 'three', cells: [
          { h3: 'International rules', p: 'Students must "meet all IOI regulations as stated in Section S2 of the IOI Regulations"; for EGOI, the EGOI regulations apply as well.' },
          { h3: 'An Australian school', p: 'The criteria require that a student "be attending an Australian school".' },
          { h3: 'Time to take part', p: 'Students must "have the capacity to participate in all Olympiad activities", which is why the calendar above matters.' }
        ] },
        { kind: 'p', mt: true, text: 'The criteria also note situations the Trust considers individually, and ask students in them to contact the Trust directly. We do not advise on eligibility; the published criteria and the Trust\'s staff are the authority, and anyone unsure should ask the Trust before relying on an invitation.' },
        { kind: 'source', html: 'Source: AMT, <a class="ag-inline-link" href="http://amt.edu.au/wp-content/uploads/2026/IOI-EGOI-Eligibility-Criteria-1.pdf" rel="noopener" target="_blank">IOI and EGOI Eligibility Criteria</a> (PDF), read on 7 October 2026.' }
      ]
    },
    {
      id: 'budget', tint: '', eyebrow: 'The skill the later stages demand',
      h2: 'An operations budget: is my algorithm fast enough?',
      lede: 'The AIO already marks efficiency. In the invitational contests, almost every problem has an obvious slow solution and a hidden fast one. Strong students estimate the running time before writing a single line.',
      body: [
        { kind: 'two',
          left: [
            'The idea is simple. Count roughly how many basic steps an algorithm takes for the largest input, then compare that with how many steps the computer can do in the time allowed. If the count is far too big, no amount of tidying the code will save it; a different algorithm is needed.',
            'To make that concrete we timed a plain Python loop on our own laptop. It managed about 28 million simple steps per second. Faster languages such as C++ do many more, and contest machines differ, so treat the numbers below as an illustration of scale rather than a promise about any judge.'
          ],
          right: [
            'The table shows why the jump matters. For 1,000 items, even an algorithm that compares every pair finishes almost instantly. For 100,000 items the same pairwise approach takes about 353 seconds, roughly six minutes. For a million items it takes about 35,000 seconds, nearly ten hours, while a sort-based approach still finishes in under a second.',
            'Olympiad problems are built around exactly this gap. The skill is to read the input limits in a problem statement, make this estimate in your head, and only then choose the method.'
          ] },
        { kind: 'table', mt: true, caption: 'Rough step counts and time at 28 million steps per second (our laptop, plain Python loop)', head: ['Items (n)', 'One pass: n', 'Sort-like: n log n', 'Every pair: n squared'], rows: [
          ['1,000', '1,000 steps, under 0.001 s', 'about 10,000 steps, under 0.001 s', '1,000,000 steps, about 0.04 s'],
          ['100,000', '100,000 steps, about 0.004 s', 'about 1.7 million steps, about 0.06 s', '10 billion steps, about 353 s'],
          ['1,000,000', '1,000,000 steps, about 0.04 s', 'about 20 million steps, about 0.7 s', '1 trillion steps, about 35,000 s']
        ] },
        { kind: 'source', html: 'Our measurement: a plain Python loop of 10 million additions took about 0.35 seconds on our laptop on 7 October 2026 (about 28 million steps per second). Step counts use log base 2. This is an illustration, not a statement about any contest\'s machines or limits.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student stands',
    h2: 'Four levels on the informatics pathway',
    lede: 'Each level is about the kind of problem a student can solve reliably, not about awards.',
    table: { caption: 'Readiness levels for the informatics olympiad pathway', head: ['Level', 'Typical work', 'The sign it is secure'], rows: [
      ['AIO entrant', 'First AIO problems, brute force', 'Solves the easier problems and tests them properly'],
      ['Strong AIO', 'Most AIO problems, sorting and greedy methods', 'Estimates running time before coding'],
      ['Invitational', 'Graphs, dynamic programming, data structures', 'Solves unseen problems under time pressure'],
      ['Selection level', 'Proof of correctness, advanced techniques', 'Explains why a solution is right, not just that it passes']
    ] },
    left: { h3: 'Keeping it healthy', ps: [
      'The pathway is long and selective. Students who enjoy problem solving for its own sake cope best with not being invited, which is the most common outcome.',
      'Schoolwork and sleep come first; olympiad work should fit around them.'
    ] },
    right: { h3: 'Related reading', ps: [
      'Start with our <a class="ag-inline-link" href="/australian-informatics-olympiad-preparation">AIO preparation page</a> for the contest itself.',
      'For the maths route, see the <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AMT competitions page</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for olympiad-minded programmers',
    lede: 'Grouped by depth. Each card opens a full outline.',
    bands: [
      { num: 'I', h3: 'Fluency', sub: 'Languages contests accept', courses: [
        { code: 'IOIP / L / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language most olympiad competitors use.' },
        { code: 'IOIP / L / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Quick to write, good for testing ideas.' },
        { code: 'IOIP / L / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Accepted at the AIO, strongly typed.' }
      ] },
      { num: 'II', h3: 'Algorithms', sub: 'The core toolkit', courses: [
        { code: 'IOIP / A / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The ideas every round tests.' },
        { code: 'IOIP / A / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Judged practice problems.' },
        { code: 'IOIP / A / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Advanced algorithms', blurb: 'University-level depth.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'For the invitational stages', courses: [
        { code: 'IOIP / X / 01', slug: 'competitive-programming-masterclass-college', title: 'Advanced competitive programming', blurb: 'Harder contests and techniques.' },
        { code: 'IOIP / X / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof and combinatorics.' },
        { code: 'IOIP / X / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number theory explored in code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How coaching runs',
    h2: 'One-to-one and small-group olympiad coaching',
    lede: 'Our coaches work from India, behind every Australian time zone. An 8 pm session in Sydney during daylight saving begins at 2.30 pm India time, which suits senior students who train in the evening.',
    slots: [
      { time: 'After the AIO', l: 'September to January, when invitational preparation really happens.' },
      { time: 'Weekly coaching', l: 'Problem sets with written solutions reviewed.' },
      { time: 'Contest simulations', l: 'Timed sets under realistic conditions.' }
    ],
    cells: [
      { h3: 'Estimate first', p: 'Every problem starts with an operations budget.' },
      { h3: 'Prove, then code', p: 'Students explain why a method is correct before writing it.' },
      { h3: 'Small groups', p: 'Five to ten students of similar level.' },
      { h3: 'One-to-one coaching', p: 'The usual choice at this level.' },
      { h3: 'Honest feedback', p: 'Clear advice on readiness, without inflating it.' },
      { h3: 'No selection promises', p: 'Invitations and teams are the Trust\'s decisions alone.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Work learners built for themselves, apart from any contest. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' and students\' reviews, quoted as posted on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia pay monthly in US dollars, the rate we charge everywhere outside India, with no deposit and no minimum term. The Trust\'s programs are separate and by invitation.',
    free: ['A real session with a coach', 'An honest assessment of level', 'No card details'],
    group: ['Five to ten students at one level', 'The same coach every week', 'Solutions reviewed in depth', 'A certificate at the end'],
    one: ['A coach for one student', 'Built around the pathway calendar', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about the pathway',
    h2: 'What families of olympiad students ask',
    items: [
      { q: 'How does a student get from the AIO to the IOI?', a: 'Students who do well in the AIO may be invited into the AMT\'s olympiad programs. From there, invitational contests such as the AIIO and FARIO, the Informatics Selection School and APIO lead to selection of Australia\'s IOI team.' },
      { q: 'What is the AIIO?', a: 'The Australian Invitational Informatics Olympiad, a February contest for invited Australian and New Zealand students. The AMT says around 40 students are invited each year.' },
      { q: 'What is FARIO?', a: 'The French-Australian Regional Informatics Olympiad, held remotely between students from France, Australia, New Zealand and Belgium since 2004. The AMT calls it one of the main competitions used to select the IOI team.' },
      { q: 'Can a student enter the invitational contests directly?', a: 'No. Every stage after the AIO is by invitation from the AMT.' },
      { q: 'Who is eligible for the Australian IOI team?', a: 'The AMT\'s criteria require students to meet the IOI regulations in Section S2, attend an Australian school, and be able to take part in all olympiad activities.' },
      { q: 'Can a student do the maths and informatics olympiads in the same year?', a: 'The AMT and Australian Science Innovations do not permit participation in more than one olympiad program in a year, so students choose one subject.' },
      { q: 'What is an operations budget?', a: 'A quick estimate of how many basic steps an algorithm needs for the largest input, compared with what a computer can do in the time allowed. It shows before coding whether an approach can possibly be fast enough.' },
      { q: 'Where was the IOI in 2026?', a: 'The AMT\'s 2026 calendar lists the IOI as 9 to 16 August in Tashkent, Uzbekistan.' },
      { q: 'Can you get my child selected?', a: 'No one can promise that. We teach algorithms and contest skills; invitations and selection are decided by the AMT.' },
      { q: 'Are you connected with the AMT?', a: 'No. We are an independent online school, and the facts here come from the AMT\'s published pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian competitors',
    lede: 'The contest that starts the pathway and the competitions around it.',
    items: [
      { href: '/australian-informatics-olympiad-preparation', label: 'AIO preparation', p: 'Format, judging and a testing habit.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC, AIO and CAT', p: 'The Trust\'s school competitions compared.' },
      { href: '/bebras-challenge-australia-practice', label: 'Bebras practice', p: 'Code-free computational thinking.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'The school-level contests by month.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring', p: 'The parallel maths route.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main Australian page.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad coaching session',
    lede: 'Tell us your student\'s year level, AIO experience and language. The free session works through a real problem, including the operations budget, and ends with candid advice about readiness.',
    readFirst: 'Want to look around first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> has every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a session.',
    note: 'WhatsApp is normally the fastest route. The number begins +91, India\'s code; the school runs from India and has no Australian office.',
    formNote: 'Free, no card, no pressure. One reply to set a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-informatics-olympiad-preparation', label: 'AIO preparation' },
        { href: '/bebras-challenge-australia-practice', label: 'Bebras practice' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring' }
      ] }
    ],
    bottomRight: 'Independent of the AMT; no invitation or selection promised'
  },

  personalityCss: `
.ag-root.ag-ioip .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-ioip .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ioip .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ioip .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ioip .ag-grid-3 h3 { letter-spacing: -0.003em; }
.ag-root.ag-ioip .ag-spec dt { letter-spacing: 0.05em; }
`,

  dossier: {
    curriculumAuthority: 'Australian Maths Trust, read 7 October 2026 with curl\'s default user agent. Olympiad and Pathways Programs: "Students with strong performance at the Australian Informatics Olympiad may be invited to participate in special mentoring and participate in exclusive events."; "Australian Science Innovations and the Australian Maths Trust do not permit students to participate in more than one Olympiad program"; IOI "the peak competition in computer science for high school students around the world". AIIO page: February; "Around 40 students are invited to participate each year"; Informatics Selection School "an important step in the pathway to representing Australia". FARIO page: France, Australia, New Zealand and Belgium; began 2004; "one of the main competitions used to select students". 2026 Olympiad Program Calendar (informatics): AIIO 12 February; FARIO 6-8 March; EGOI Mentor Program 20 March; Informatics Selection School 23 Apr-1 May Sydney; APIO 9-10 May; IOI Mentor Program 9 May; EGOI 12-18 May Cesenatico, Italy; IOI 9-16 August Tashkent, Uzbekistan; Informatics School of Excellence 10-19 Dec (TBC) Canberra. IOI-EGOI Eligibility Criteria (valid from 1 October 2025): Section S2 of the IOI Regulations; "be attending an Australian school"; "have the capacity to participate in all Olympiad activities".',
    localProject: 'Operations budget: a plain Python loop of 10 million additions took about 0.35 s on our laptop (about 28 million steps per second). Estimates: n = 100,000, n squared = 10 billion steps, about 353 s; n = 1,000,000, n squared = 1 trillion, about 35,000 s (nearly 10 hours), n log n about 20 million, about 0.7 s.',
    requiredMentions: ['Informatics Selection School', 'French-Australian Regional Informatics Olympiad', 'Australian Invitational Informatics Olympiad', 'Tashkent', 'Cesenatico', 'European Girls Olympiad in Informatics', 'Informatics School of Excellence', '28 million', 'operations budget', 'Section S2'],
    sources: [
      { claim: 'AMT Olympiad and Pathways Programs: invitations, one-program rule, IOI description.', url: 'https://amt.edu.au/olympiad-programs' },
      { claim: 'AMT AIIO page: February, around 40 students, Informatics Selection School.', url: 'https://amt.edu.au/australian-invitational-informatics-olympiad-aiio' },
      { claim: 'AMT FARIO page: countries, since 2004, selection role.', url: 'https://amt.edu.au/french-australian-regional-informatics-olympiad-fario' },
      { claim: 'AMT 2026 Olympiad Program Calendar PDF, informatics section.', url: 'https://amt.edu.au/wp-content/uploads/2026/01/2026-Olympiad-Program-Calendar.pdf' },
      { claim: 'AMT IOI and EGOI Eligibility Criteria PDF.', url: 'http://amt.edu.au/wp-content/uploads/2026/IOI-EGOI-Eligibility-Criteria-1.pdf' }
    ],
    rejectedClaims: [
      'Size of the IOI team and selection quotas: not stated on the pages read for informatics, so not given.',
      'Any contest machine speed or time limit: not claimed; the 28 million figure is our own laptop measurement.',
      '2027 calendar dates: not published when checked.',
      'Past Australian IOI results: not quoted.',
      'Any promise of invitation, selection or medals: refused.'
    ]
  }
};
