'use strict';
// Choosing GCSE Computer Science at Year 9 options (ag- door, England; UK cluster Phase 3).
// Source: Ofsted, "Research review series: computing", published 16 May 2022, applies to England,
// read raw from gov.uk on 20 September 2026. All figures below are the review's own summaries of the
// research it cites, and the named organisations are its citations. Verbatim:
//  - THE SPINE: "The Wellcome Trust found that, by Year 9, there was a large gender divide in the
//    subject, with less than half the number of girls finding the subject interesting compared with
//    boys. The same report noted that, from Year 7 to Year 9, computing was the least enjoyed subject
//    for girls."
//  - "Analysis of examination data from 2021 shows that there are disproportionately few girls in
//    computer science: they make up only 21% of entries at GCSE and only 15% of entries at A level."
//  - Ten years earlier, for ICT: the "number of girls entered [for GCSE ICT] continued to lag behind
//    boys and the percentage of girls entering AS and A level has remained static at around 35% of the
//    cohort"; the imbalance "is significantly higher in the new subject of computing".
//  - A snapshot survey of 350 girls aged 14 to 18: "Over a quarter of respondents said that the subject
//    is boring and nearly a fifth said that they lack interest. Some respondents also inferred
//    confidence in their ability as a reason for why they did not choose computing for further study."
//  - "Other research has indicated that girls tend to underestimate their performance in programming
//    compared with boys".
//  - Access, from an analysis of 2018 government examination data: "the number of schools offering GCSE
//    computer science had increased, with nearly 80% of Year 11 pupils in schools that offered a GCSE
//    in computer science"; "state schools with higher proportions of disadvantaged pupils were less
//    likely to offer a GCSE in computer science"; "7.6% of pupils were in a school that did not offer
//    key stage 4 computing qualifications".
//  - "Despite the increase in the number of pupils studying computer science, the total number studying
//    computing qualifications at key stage 4 fell substantially. This is in large part due to the
//    withdrawal of ICT GCSE in 2019."
// Spine: the option form records a decision that was made two years earlier. Ofsted cites research
// showing the divide is already large by Year 9 and that computing was the least enjoyed subject for
// girls from Year 7 to Year 9, so an options evening in February is not where the choice happens.
// Second edge: a family choosing Computer Science is also choosing a board, and the three English
// boards differ more in this subject than in almost any other. Nobody says so at the options evening.
// HARD RULE, carried from the Ireland cluster: no claim that girls learn differently, and no
// girls-only teaching. The page reports participation and interest evidence and nothing beyond it.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'YEAR 9 OPTIONS', blurb: 'The evidence says the decision is largely made by Year 9, and that the board a school uses changes the course more than families expect.' },
  slug: 'choosing-gcse-computer-science-year-9-options',
  code: 'yno',
  accent: '#A51D31',
  accentRationale: 'Year 9 options: a bright crimson from the solver (6.04:1 on every paper tint) at dE 11.7, deliberately warmer and lighter than the board specification pages it links to',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Choosing GCSE Computer Science at Year 9 options',
  title: 'Choosing GCSE Computer Science | Year 9 Options Guide',
  description: 'Should your child take GCSE Computer Science? When the decision is really made, how the three English boards differ, and who it suits. First class free.',
  ogDescription: 'Ofsted cites research finding the divide is already large by Year 9. The options form records a decision made two years earlier.',
  twitterDescription: 'Choosing GCSE Computer Science at Year 9 options: what the evidence actually says.',
  pageName: 'Choosing GCSE Computer Science at Year 9 Options',
  webPageDescription: 'An evidence-based guide for families deciding whether to choose GCSE Computer Science, covering when the decision is really made, how the English boards differ, and who the subject suits.',
  courseDescription: 'Live online coding teaching for UK students in Years 8 to 10, building the fluency and confidence that make GCSE Computer Science a real option rather than a gamble.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 9 options',
  navLinks: [
    { href: '#already', label: 'When it is decided' },
    { href: '#board', label: 'You pick a board too' },
    { href: '#suits', label: 'Who it suits' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Year 9 options &middot; Ages 13 to 14',
  h1: 'Choosing GCSE Computer Science at Year 9 options',
  lede: 'Options evening feels like the moment of decision. The evidence suggests it is mostly the moment of recording one. Ofsted\'s research review on computing cites a Wellcome Trust finding that "by Year 9, there was a large gender divide in the subject, with less than half the number of girls finding the subject interesting compared with boys", and that "from Year 7 to Year 9, computing was the least enjoyed subject for girls". Whatever a family concludes in February of Year 9, two years of lessons have already shaped it. This page sets out what the research actually says, the second choice nobody mentions at options evening, and an honest account of who the subject suits and who it does not.',
  secondaryCta: { href: '#board', label: 'The choice nobody mentions' },
  wa: 'Hello Modern Age Coders, my child is choosing GCSE options and I would like a free first class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Years 8 to 10 welcome',
  spec: [
    ['The question', 'Take Computer Science or not'],
    ['When decided', 'Largely before Year 9, say the studies'],
    ['Girls at GCSE', '21 per cent of entries, 2021 data'],
    ['Also choosing', 'A board, without being told'],
    ['The fixable part', 'Fluency, and therefore confidence'],
    ['Good age to start', 'Year 8 or 9'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Two things are worth knowing before an options form is signed. The first is that the research Ofsted reviews puts the decisive period earlier than the decision: a large divide in interest is already present by Year 9, and one cited report found computing was the least enjoyed subject for girls from Year 7 to Year 9. Examination data from 2021 put girls at 21 per cent of GCSE entries and 15 per cent at A level. The second is that choosing Computer Science also means choosing a board, and the three English boards differ more in this subject than in almost any other: one sits a practical paper on a computer, one prints its questions in its own pseudo-code, one publishes a list of what you need not learn. A family can ask which board, and should. We teach Years 8 to 10 to the point where the subject is a real option. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Years 8 to 10',
    lede: 'The aim before options is fluency, because fluency is what makes the choice feel available. Cards open the full syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'YN / 01', title: 'First Python', note: 'The move from blocks to typed code, which is the single biggest predictor of whether Year 10 feels manageable.' },
      { course: 'python-complete-masterclass-teens', code: 'YN / 02', title: 'Python for Teens', note: 'Depth before the course starts, so that Year 10 is spent on problems rather than on syntax.' },
      { course: 'gcse-computer-science-course', code: 'YN / 03', title: 'GCSE Computer Science', note: 'The specification itself, for students who have chosen it and want to start ahead rather than behind.' }
    ]
  },

  sections: [
    {
      id: 'already', tint: 'tint', eyebrow: 'When it is decided',
      h2: 'The form records a decision made two years earlier',
      lede: 'From Ofsted\'s research review series on computing, published 16 May 2022 and applying to England. The figures and findings are the review\'s summaries of research it cites.',
      body: [
        { kind: 'capsule', q: 'The finding that reframes options evening', p: 'The review reports that "The Wellcome Trust found that, by Year 9, there was a large gender divide in the subject, with less than half the number of girls finding the subject interesting compared with boys. The same report noted that, from Year 7 to Year 9, computing was the least enjoyed subject for girls."' },
        { kind: 'table', mt: true, caption: 'What the review reports about who takes the subject', head: ['Finding', 'As the review states it'], rows: [
          ['Girls at GCSE and A level', 'Examination data from 2021 shows girls "make up only 21% of entries at GCSE and only 15% of entries at A level"'],
          ['Compared with the old subject', 'For ICT a decade earlier, girls were "around 35% of the cohort" at AS and A level; the imbalance "is significantly higher in the new subject of computing"'],
          ['What girls said', 'In a snapshot survey of 350 girls aged 14 to 18, "over a quarter of respondents said that the subject is boring and nearly a fifth said that they lack interest"'],
          ['And about confidence', 'Some respondents "inferred confidence in their ability as a reason for why they did not choose computing for further study", and other research indicates girls "tend to underestimate their performance in programming compared with boys"'],
          ['Access to the subject', 'On 2018 data, "nearly 80% of Year 11 pupils" were in schools offering the GCSE, but "state schools with higher proportions of disadvantaged pupils were less likely to offer" it, and "7.6% of pupils were in a school that did not offer key stage 4 computing qualifications"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we take from this',
          left: [
            'Not that anyone learns differently. The review reports participation, interest and self-assessment, and none of those is a statement about capability. We are not going to extend it into one.',
            'What it does say is that a February conversation is late. If a student finds the subject dull or believes they are bad at it, that belief formed in Years 7 to 9 and it is what the options form will encode.'
          ],
          rightH3: 'And what can be changed',
          right: [
            'Confidence in programming tracks fluency more than almost anything else, and fluency is straightforwardly teachable. A student who can write a working program unaided rarely describes themselves as bad at it.',
            'That is a Year 8 and Year 9 job, not a Year 11 one, which is the practical reason this page exists rather than a page about revision.'
          ] },
        { kind: 'p', html: 'One structural point for context. The review notes that despite more pupils taking computer science, "the total number studying computing qualifications at key stage 4 fell substantially", largely because ICT GCSE was withdrawn in 2019. So the modern subject replaced a broader one, and some students who would have taken the old qualification now take nothing at all.' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/research-review-series-computing/research-review-series-computing" rel="noopener" target="_blank">Ofsted, Research review series: computing</a>, published 16 May 2022, applies to England. It reviews research literature rather than setting policy, and the organisations named above are its citations.' }
      ]
    },
    {
      id: 'board', tint: 'deep', eyebrow: 'You pick a board too',
      h2: 'The second choice nobody mentions',
      lede: 'In most subjects the board matters little to a family. In this one it changes what two years look like, and the school has already chosen.',
      body: [
        { kind: 'table', caption: 'How the three English boards differ, in one line each', head: ['Board', 'The distinctive thing', 'Read more'], rows: [
          ['Pearson Edexcel 1CP2', 'The practical paper is sat on a computer, in Python 3, in the candidate\'s own editor, with no internet', '<a class="ag-inline-link" href="/edexcel-gcse-computer-science-1cp2-help">Edexcel 1CP2</a>'],
          ['AQA 8525', 'Questions print their algorithms in AQA pseudo-code, and each question names the form the answer must take', '<a class="ag-inline-link" href="/aqa-gcse-computer-science-8525-help">AQA 8525</a>'],
          ['Cambridge OCR J277', 'The specification carries a Not required column, and Section B lets candidates answer in their own language or the board\'s', '<a class="ag-inline-link" href="/ocr-gcse-computer-science-j277-help">OCR J277</a>']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ask the question', p: 'Which board does the school use, and which programming language does it teach? Two sentences at an options evening, and the answer shapes two years.' },
          { h3: 'Why it matters more here', p: 'In most GCSEs the boards test the same things in slightly different words. Here one board examines at a keyboard and another on paper, which is a different subject to practise for.' },
          { h3: 'It is not a reason to avoid it', p: 'All three are good qualifications. The point is to know which one your child is taking, so that preparation matches it from the first term.' }
        ] },
        { kind: 'p', html: 'There is a prior question too, and in England it is not rhetorical. Most secondary schools are academies, and academies are not required to follow the national curriculum. <a class="ag-inline-link" href="/coding-and-ai-classes-in-england">The England page</a> sets out what that means in practice, including that key stage 4 guarantees an opportunity to study the subject rather than a course everybody takes.' },
        { kind: 'p', html: 'If a school offers no computing qualification at all, that is uncommon but not unheard of. The review cites 2018 data putting 7.6 per cent of pupils in schools with no key stage 4 computing qualification, and finding that schools with more disadvantaged pupils were less likely to offer the GCSE.' }
      ]
    },
    {
      id: 'suits', tint: '', eyebrow: 'Who it suits',
      h2: 'An honest account, including who should not take it',
      lede: 'We teach this subject and we would still rather a student chose it for the right reason than chose it because a tutor was enthusiastic.',
      body: [
        { kind: 'table', caption: 'Signals worth reading, in either direction', head: ['This suggests it will go well', 'This suggests thinking harder'], rows: [
          ['Enjoys the part where something does not work and has to be fixed', 'Enjoys using computers but has never wanted to make one do something'],
          ['Can already write a short program without copying an example', 'Has done three years of blocks and never typed code'],
          ['Is comfortable being wrong out loud and trying again', 'Finds visible failure genuinely distressing rather than annoying'],
          ['Likes maths, or at least does not actively avoid it', 'Chose it because it sounds employable and for no other reason'],
          ['Wants to build a thing they have already imagined', 'Is choosing it to avoid a subject they like less']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The maths question',
          left: [
            'Computer Science is not maths, and a student does not need to be a top set mathematician. It does involve binary, logic and some arithmetic done by hand, and a student who avoids all number work will find parts of it uncomfortable.',
            'That is a reason to know what is coming, not a reason to steer away. The uncomfortable parts are a minority of the content and they are learnable.'
          ],
          rightH3: 'The blocks question',
          right: [
            'The single most useful thing a Year 9 can do before starting is write typed code. A student who arrives in Year 10 having only used blocks spends the first term fighting syntax while the content moves on without them.',
            'A term of weekly lessons in Year 9 usually removes that problem entirely, which is a small intervention at exactly the right moment.'
          ] },
        { kind: 'p', html: 'And one thing we will not say. Choosing this subject does not make a student better at other subjects. What the evidence supports about problem-solving and transfer is set out, with the claim refused, on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-uk">the problem-solving page</a>. Computer Science is worth taking because it is worth knowing, which is a good enough reason.' },
        { kind: 'p', html: 'For a student who decides against it, nothing is closed off permanently. Plenty of people start programming at sixteen, at twenty-five and at sixty, and the <a class="ag-inline-link" href="/best-coding-classes-for-adults-uk">adults page</a> exists because that is ordinary rather than remarkable.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'What to do in Years 8, 9 and 10',
    lede: 'The useful work happens before the course starts, which is the opposite of how most families approach a GCSE.',
    table: { caption: 'A sensible sequence around the options decision', head: ['When', 'What helps most', 'Why then'], rows: [
      ['Year 8', 'Move from blocks to typed code, slowly', 'There is no time pressure, so the awkward stage happens without a deadline attached'],
      ['Year 9, before options', 'Write small programs unaided, and finish some', 'Confidence follows fluency, and the options decision follows confidence'],
      ['Year 9, after options', 'Ask which board and which language, then start on it', 'Two terms of a head start costs nothing and removes the Year 10 scramble'],
      ['Year 10', 'Keep programming weekly alongside the taught content', 'Every board rewards fluency; only one of them tests it at a keyboard']
    ] },
    left: { h3: 'Year 8 is the cheapest moment', ps: [
      'Nothing is at stake, so a student can be bad at it for a month without consequence. That is exactly the condition under which people learn to program.',
      'The full sequence of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'And Year 9 is the last easy one', ps: [
      'After options are chosen the pressure changes, and a student who is behind is now behind at something that counts.',
      'A term of weekly lessons before Year 10 begins is the highest-value intervention we see.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students around the options decision',
    lede: 'Grouped by where a student is in Years 8 to 10. The free lesson settles the starting point.',
    bands: [
      { num: 'I', h3: 'Before the decision', sub: 'Years 8 and 9', courses: [
        { code: 'UK / YN1 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'The crossing from blocks to a keyboard, taken with no deadline attached.' },
        { code: 'UK / YN1 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Decomposition and precise description, which is where students who find the wording hard get stuck.' },
        { code: 'UK / YN1 / 03', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'Real programming inside a world a student already knows, which removes the hardest part of starting.' }
      ] },
      { num: 'II', h3: 'After the decision', sub: 'Getting ahead of Year 10', courses: [
        { code: 'UK / YN2 / 01', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Depth before the course begins, so Year 10 is spent on problems rather than syntax.' },
        { code: 'UK / YN2 / 02', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The specification itself, taught to whichever board the school has chosen.' },
        { code: 'UK / YN2 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and tracing, which every English board examines in some form.' }
      ] },
      { num: 'III', h3: 'If they choose something else', sub: 'Still worth learning', courses: [
        { code: 'UK / YN3 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Building something real, with no examination attached to it at all.' },
        { code: 'UK / YN3 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Training and breaking models, which interests plenty of students who did not pick the GCSE.' },
        { code: 'UK / YN3 / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'An app from sketch to something installable, for students who want to make rather than to be examined.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Small, unhurried, and before it counts',
    lede: 'Teachers work from India on a clock that never shifts, so the UK is five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After school', l: 'Where nearly every Year 8 and 9 student settles.' },
      { time: 'Early evening', l: 'For students with clubs, sport or a long journey.' },
      { time: 'Weekend morning', l: 'Calmer, and better for finishing something in one go.' }
    ],
    cells: [
      { h3: 'Being wrong is normal', p: 'Predictions out loud before anything runs, so that failure becomes information instead of embarrassment.' },
      { h3: 'Everyone builds something', p: 'A student who has made nothing has not had a lesson. Finished things are what change how a student sees themselves.' },
      { h3: 'Groups by level', p: 'Five to ten at the same stage, so nobody is the only beginner in a room of confident programmers.' },
      { h3: 'No board until there is one', p: 'Before options we teach the subject. Once a school has chosen, we teach to that specification.' },
      { h3: 'Honest placement', p: 'The free lesson ends with a frank view, including saying when a student should wait a year.' },
      { h3: 'Work parents can see', p: 'Finished projects are saved where a family can open them, which is usually how a parent finds out it is going well.' }
    ]
  },

  projectsH2: 'Things students this age have built',
  projectsLede: 'Four projects from learners around Years 8 to 10. More sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, unedited, by parents nobody asked.',

  fees: {
    h2: 'What lessons cost before GCSE',
    lede: 'One charge a month in US dollars, the rate outside India. The free lesson comes first, and billing only starts once a course and a weekly time are agreed.',
    free: ['A proper lesson, and something built in it', 'A frank view of readiness, including waiting', 'Nothing needed but a number'],
    group: ['Five to ten students at the same stage', 'One named teacher throughout', 'Work saved where a parent can see it', 'A certificate at the end of a course'],
    one: ['Only the student and the teacher', 'Useful for a student well ahead or very hesitant', 'Arranged around clubs and school commitments']
  },

  faq: {
    eyebrow: 'Questions from families at options time',
    h2: 'What parents ask before the form goes in',
    items: [
      { q: 'Is GCSE Computer Science hard?', a: 'It is demanding in a specific way: it rewards fluency in programming and precise reasoning rather than memorisation. Students who can already write small programs generally find it manageable.' },
      { q: 'Does my child need to be good at maths?', a: 'Not top set. There is binary, logic and arithmetic done by hand, so a student who avoids all number work will find parts of it uncomfortable, but it is a minority of the content.' },
      { q: 'What if they have only used Scratch?', a: 'Then typed code is the gap worth closing before Year 10. A term of weekly lessons in Year 9 usually removes the problem entirely.' },
      { q: 'Why do so few girls take it?', a: 'Ofsted\'s review reports 2021 data putting girls at 21 per cent of GCSE entries and 15 per cent at A level, and cites research finding a large divide in interest already present by Year 9. It reports participation and interest, not capability, and neither do we.' },
      { q: 'Does the exam board matter?', a: 'More than in most subjects. One English board sits its practical paper on a computer, one prints questions in its own pseudo-code and one publishes what candidates need not learn. Ask which board and which language your school uses.' },
      { q: 'What if the school does not offer it?', a: 'It happens. The review cites 2018 data putting 7.6 per cent of pupils in schools with no key stage 4 computing qualification. Learning outside school is then the only route, and it is a perfectly good one.' },
      { q: 'Will it help with other subjects?', a: 'We do not claim so. The research Ofsted reviews advises caution about transfer claims, and we take that seriously enough to have written a whole page about refusing it.' },
      { q: 'Is it too late if they choose something else?', a: 'No. People start programming at sixteen, at twenty-five and at sixty, and plenty of our students never took the GCSE.' },
      { q: 'When should we start lessons?', a: 'Year 8 or Year 9 is the cheapest moment, because nothing is at stake and a student can be bad at it for a month without consequence.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where to read next',
    lede: 'The three board pages go deep; the others cover the wider decision.',
    items: [
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'Three notations in one paper, and answering in the form the question asks.' },
      { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR GCSE Computer Science J277', p: 'The Not required column, and the notation choice in Section B.' },
      { href: '/edexcel-gcse-computer-science-1cp2-help', label: 'Edexcel GCSE Computer Science 1CP2', p: 'One question per topic, and a paper sat at a keyboard.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'Why most secondary schools are not required to teach computing at all.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'The transfer claim the research does not support, refused in full.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'What Ofcom found about British teenagers, AI and checking.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour you choose. The lesson is real teaching, something gets built in it, and it ends with a straight view of readiness.',
    readFirst: 'Prefer reading? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> covers the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sets out the sequence.',
    note: 'WhatsApp is free from a British mobile and gets the quickest answer. The number is an Indian one, said here rather than noticed later.',
    formNote: 'No card and no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA 8525' },
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR J277' },
        { href: '/edexcel-gcse-computer-science-1cp2-help', label: 'Edexcel 1CP2' }
      ] },
      { h4: 'Deciding', links: [
        { href: '/problem-solving-skills-through-coding-uk', label: 'Problem solving' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Coding for teens' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live teaching for UK students, on UK time'
  },

  personalityCss: `
.ag-root.ag-yno .ag-hero h1 { letter-spacing: -0.03em; font-weight: 700; line-height: 1.05; }
.ag-root.ag-yno .ag-capsule { border-left-width: 5px; padding-left: 1.3rem; }
.ag-root.ag-yno .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-yno .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-yno .ag-table th:first-child { width: 40%; }
.ag-root.ag-yno .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-yno .ag-spec-row dt { letter-spacing: 0.05em; }
`,

  mustMention: ['by Year 9, there was a large gender divide', 'least enjoyed subject for girls', '21% of entries at GCSE', '15% of entries at A level', '7.6% of pupils', 'withdrawal of ICT GCSE in 2019', 'underestimate their performance', '16 May 2022', 'which board', 'typed code'],

  dossier: {
    curriculumAuthority: 'England, Year 9 options. Ofsted, "Research review series: computing", published 16 May 2022, applies to England, read raw from gov.uk on 20 September 2026; all findings are the review\'s summaries of research it cites. "The Wellcome Trust found that, by Year 9, there was a large gender divide in the subject, with less than half the number of girls finding the subject interesting compared with boys. The same report noted that, from Year 7 to Year 9, computing was the least enjoyed subject for girls." "Analysis of examination data from 2021 shows that there are disproportionately few girls in computer science: they make up only 21% of entries at GCSE and only 15% of entries at A level." Ten years earlier for ICT, the "number of girls entered [for GCSE ICT] continued to lag behind boys and the percentage of girls entering AS and A level has remained static at around 35% of the cohort", and the imbalance "is significantly higher in the new subject of computing". A snapshot survey of 350 girls aged 14 to 18 found "over a quarter of respondents said that the subject is boring and nearly a fifth said that they lack interest", and some "inferred confidence in their ability as a reason for why they did not choose computing for further study"; "Other research has indicated that girls tend to underestimate their performance in programming compared with boys". On access, from 2018 examination data: "the number of schools offering GCSE computer science had increased, with nearly 80% of Year 11 pupils in schools that offered a GCSE in computer science"; "state schools with higher proportions of disadvantaged pupils were less likely to offer a GCSE in computer science"; "7.6% of pupils were in a school that did not offer key stage 4 computing qualifications". And: "Despite the increase in the number of pupils studying computer science, the total number studying computing qualifications at key stage 4 fell substantially. This is in large part due to the withdrawal of ICT GCSE in 2019." Board differences are cross-referenced to the three board pages rather than restated.',
    localProject: 'The option form records a decision made two years earlier. Ofsted\'s review cites a Wellcome Trust finding that a large divide in interest is already present by Year 9 and that computing was the least enjoyed subject for girls from Year 7 to Year 9, which reframes an options evening as the moment a decision is written down rather than made. The page reports participation, interest and self-assessment exactly as the review does and refuses to extend any of it into a claim about capability, holding the cluster rule that nothing may suggest girls learn differently. It then converts the evidence into something actionable: confidence in programming tracks fluency, fluency is teachable, and Year 8 is the cheapest moment to do it because nothing is at stake. The second section surfaces a choice families do not know they are making, since a school has already picked a board and the three English boards differ more in this subject than in almost any other, with one line each and a link to the deep page. The third gives signals in both directions, including who should think harder, and refuses the transfer claim outright. Lesson family: a decision whose real timing sits years before the form.',
    requiredMentions: ['by Year 9, there was a large gender divide', '21% of entries at GCSE', '7.6% of pupils', '16 May 2022'],
    sources: [
      { claim: 'Ofsted, Research review series: computing, published 16 May 2022: the Wellcome Trust finding on interest by Year 9, the 2021 entry shares for girls at GCSE and A level, the historic ICT comparison, the survey of 350 girls, the finding on self-assessment in programming, the 2018 access data, and the effect of the withdrawal of ICT GCSE.', url: 'https://www.gov.uk/government/publications/research-review-series-computing/research-review-series-computing' }
    ],
    rejectedClaims: [
      'Any claim that girls learn programming differently, or that any group is less able at it: the review reports participation, interest and self-assessment, and the page states explicitly that it will not extend those into capability.',
      'Girls-only teaching or batches: not offered, and not proposed anywhere on the page.',
      'That the 2021 and 2018 figures are current: they are the years the review names, and the page dates each one.',
      'Current entry numbers or the gender split for the latest series: JCQ blocks automated reads and no other primary source was read for this build.',
      'That taking the subject improves other subjects: refused, with the reader sent to the problem-solving page.',
      'Any board-specific detail beyond one line each: the three board pages carry it, and this page links rather than restates.'
    ]
  }
};
