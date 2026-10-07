'use strict';
// Maths tutor vs tutoring centre, Australia (ag- comparison door; AU cluster Phase 4, row 110).
// Sources, read raw on 7 October 2026:
//  - Australian Tutoring Association, "Choosing a tutor": "Clients of tutoring businesses and coaching colleges need to
//    ask the following of any provider of tutoring or coaching services."; questions including "Is the tutoring one to
//    one or in a group? If it’s a group situation how large is it and how will the needs of my child be catered for?",
//    "Do you give reports on my child’s progress? If so, how often?" and "What do you do if a child does not seem to be
//    benefiting from the programme you apply?"
//  - Australian Tutoring Association, "How much should I charge?": "One-to-one sessions tend to levy a higher fee for
//    the student/family. Where the ratio of students to tutor is higher (such as in a class) the individual fee may be
//    significantly lower and the tutor rate overall higher." (no dollar figures quoted on this page).
//  - Australian Tutoring Association, Member Code of Conduct: "Members who do not abide by the Code may be suspended or
//    dismissed."
//  - ACARA, Australian Curriculum v9 Mathematics F-6 content: AC9M5N03 "compare and order fractions with the same and
//    related denominators including mixed numerals ..."; AC9M5N05 "solve problems involving addition and subtraction of
//    fractions with the same or related denominators, using different strategies"; AC9M6N05 "solve problems involving
//    addition and subtraction of fractions using knowledge of equivalent fractions".
// Our worked example: a 12-question fraction addition check (invented answers). 9 of 12 correct; all 3 errors are
// "add tops and bottoms" (1/2 + 1/3 answered 2/5; 1/2 + 2/5 answered 3/7; 1/3 + 1/4 answered 2/7), and all 3 have
// unrelated denominators, while every related-denominator item is right. Lesson family: distractor analysis.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'TUTOR OR CENTRE', blurb: 'A private maths tutor or a tutoring centre for an Australian child: how the two differ, what to ask, and how a good tutor reads wrong answers.' },
  slug: 'tutor-vs-tutoring-centre-maths-australia',
  code: 'tvcm',
  accent: '#3C5028',
  accentRationale: 'Tutor vs tutoring centre, Australia: an olive green chosen by hand, muted, at least 10 RGB units from every accent in use and outside the excluded hue bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Maths tutor vs tutoring centre, Australia',
  title: 'Maths Tutor vs Tutoring Centre in Australia: How to Choose',
  description: 'A private maths tutor or a tutoring centre for your child in Australia? How they differ, the questions to ask any provider, and how good tuition diagnoses mistakes.',
  ogDescription: 'Private maths tutor, tutoring centre or coaching college: how the formats differ for Australian families, the questions the tutoring peak body suggests, and a worked diagnosis of a fractions mistake.',
  twitterDescription: 'Maths tutor or tutoring centre in Australia: differences, questions to ask, and diagnosing mistakes.',
  pageName: 'Maths Tutor vs Tutoring Centre in Australia',
  webPageDescription: 'A guide for Australian families choosing between a private maths tutor, a tutoring centre and a coaching college, with a worked example of diagnosing errors.',
  courseDescription: 'Live online maths lessons for Australian learners aged 6 to 67, in small groups or one to one, with one regular teacher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'Tutor or centre',
  navLinks: [
    { href: '#formats', label: 'Formats' },
    { href: '#questions', label: 'Questions to ask' },
    { href: '#diagnosis', label: 'Reading mistakes' },
    { href: '#choosing', label: 'Choosing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 67 &middot; Maths help',
  h1: 'Maths tutor vs tutoring centre',
  lede: 'When a child starts struggling with maths, or is racing ahead, Australian families usually weigh three options: a private tutor, a tutoring centre where children work at desks with a supervising teacher, or a coaching college with larger exam-focused classes. Each can work. This page explains how they differ, lists the questions the Australian Tutoring Association suggests asking any provider, and walks through a fractions example showing the single thing that matters most: whether someone is reading your child\'s wrong answers, not just marking them.',
  secondaryCta: { href: '#diagnosis', label: 'Reading mistakes' },
  wa: 'Hello Modern Age Coders, we are choosing between a maths tutor and a tutoring centre in Australia. Could we book a free first maths lesson?',
  heroNote: 'Live maths teaching since 2020 &middot; 10,000+ students &middot; one regular teacher who reads every mistake',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Subject', 'Maths, Foundation to Year 12'],
    ['Our format', 'Live online lessons'],
    ['Group size', 'Five to ten, or one to one'],
    ['Teacher', 'The same one each week'],
    ['Focus', 'Diagnosing errors early'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A private maths tutor works with one child and adapts every minute to them; a tutoring centre places several children at desks under one supervising teacher, usually at a lower fee per child; coaching colleges run larger exam-focused classes. The format matters less than whether someone diagnoses your child\'s mistakes. In our worked fractions check, a score of 9 of 12 hid one precise gap: adding fractions with unrelated denominators.',

  picks: {
    eyebrow: 'Maths courses',
    h2: 'Three maths courses for Australian learners',
    lede: 'Each is taught live, with a teacher who looks at how your child got an answer, not only whether it is right.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'TVCM / 01', title: 'Primary maths', note: 'Foundation to Year 5. Number sense, fractions and place value.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'TVCM / 02', title: 'Middle-years maths', note: 'Years 6 to 8. Fractions, ratio, early algebra and geometry.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'TVCM / 03', title: 'Secondary maths', note: 'Years 9 to 12. Algebra through to calculus.' }
    ]
  },

  sections: [
    {
      id: 'formats', tint: 'tint', eyebrow: 'The formats',
      h2: 'Private tutor, tutoring centre and coaching college',
      lede: 'The labels vary, but most Australian maths help falls into three shapes.',
      body: [
        { kind: 'table', caption: 'Three common formats of maths help in Australia', head: ['Format', 'How it usually runs', 'Strength', 'Watch for'], rows: [
          ['Private tutor', 'One child, one tutor, at home, at the tutor\'s place or online', 'Every minute is about your child', 'Tutor\'s qualifications and screening vary widely'],
          ['Tutoring centre', 'Several children at desks working through programs, one supervising teacher', 'Structure, routine and a lower fee per child', 'How much individual teaching each child actually gets'],
          ['Coaching college', 'Larger classes aimed at exams, selective tests or senior years', 'Exam focus and practice volume', 'Pace set for the class, not the child'],
          ['Live online small group', 'Five to ten children of a similar level with one teacher on video', 'Teacher sees each child\'s working on screen, lower fee than one to one', 'Needs a quiet spot and a working computer at home']
        ] },
        { kind: 'p', mt: true, html: 'The Australian Tutoring Association, the national peak body for tutoring, explains the price side neatly: "One-to-one sessions tend to levy a higher fee for the student/family. Where the ratio of students to tutor is higher (such as in a class) the individual fee may be significantly lower and the tutor rate overall higher." In plain terms, a centre or class spreads one teacher across several children, so each family pays less and each child gets a share of the teacher.' },
        { kind: 'two', mt: true,
          leftH3: 'When a private tutor tends to suit',
          left: [
            'A child with one specific gap, such as fractions or negative numbers, often closes it fastest with a tutor who can stay on that gap for as long as it takes.',
            'Very anxious children, and children far ahead of their year, also tend to do better without a room of peers working on different material.'
          ],
          rightH3: 'When a centre or group tends to suit',
          right: [
            'Children who need routine and regular practice more than individual explanation often do well in a structured centre or small group.',
            'A group also suits families who want steady weekly maths at a lower cost, provided the teacher genuinely checks each child\'s working.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ata.edu.au/membership/tutor-resources/how-much-should-i-charge/" rel="noopener" target="_blank">Australian Tutoring Association, how much should I charge?</a>, read 7 October 2026. No dollar figures are quoted on this page; our <a class="ag-inline-link" href="/maths-tutor-cost-australia-explained">maths tutor cost guide</a> covers prices.' }
      ]
    },
    {
      id: 'questions', tint: 'deep', eyebrow: 'Questions to ask',
      h2: 'What the tutoring peak body suggests asking any provider',
      lede: 'The Australian Tutoring Association writes that "Clients of tutoring businesses and coaching colleges need to ask the following of any provider of tutoring or coaching services." Its list is long; these are the questions we think matter most for maths, quoted exactly.',
      body: [
        { kind: 'table', caption: 'Selected questions from the Australian Tutoring Association\'s "Choosing a tutor" page', head: ['Area', 'Question (quoted)', 'Why it matters for maths'], rows: [
          ['Group size', 'Is the tutoring one to one or in a group? If it’s a group situation how large is it and how will the needs of my child be catered for?', 'Tells you how much of the teacher your child really gets'],
          ['Progress', 'Do you give reports on my child’s progress? If so, how often?', 'Maths gaps should be named, not hidden in a percentage'],
          ['When it is not working', 'What do you do if a child does not seem to be benefiting from the programme you apply?', 'A good provider changes the approach, not just the worksheet'],
          ['Watching', 'Can I view the tutoring when it takes place?', 'You should be able to see how your child is taught'],
          ['Staff', 'Are your tutors screened for child protection?', 'Basic safety, for any format']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our answers, for transparency',
          left: [
            'Groups have five to ten learners at a similar level, or lessons are one to one. Parents can watch any lesson, and the teacher tells families which topics are secure and which are not.',
            'If a child is not progressing, the teacher changes the explanation or suggests switching between group and private lessons.'
          ],
          rightH3: 'One thing we cannot offer',
          right: [
            'Our teachers are based in India and teach online, so we cannot give an Australian Working With Children Check number for them. We say this up front, and parents can sit in on every lesson.',
            'For more on the checks Australian families can make, see our <a class="ag-inline-link" href="/online-coding-tutor-australia">online tutor guide</a>.'
          ] },
        { kind: 'p', mt: true, html: 'The Association also holds its members to a written code. Its Member Code of Conduct page states that "Members who do not abide by the Code may be suspended or dismissed." Membership of a professional body is one more signal parents can ask about, alongside the questions above.' },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://ata.edu.au/parent-info/choosing-a-tutor/" rel="noopener" target="_blank">Australian Tutoring Association, choosing a tutor</a> and <a class="ag-inline-link" href="https://ata.edu.au/about-us/member-code-of-conduct/" rel="noopener" target="_blank">ATA Member Code of Conduct</a>. We are not ATA members and do not claim to be.' }
      ]
    },
    {
      id: 'diagnosis', tint: 'tint', eyebrow: 'Reading mistakes',
      h2: 'Distractor analysis: what a score of 9 out of 12 hides',
      lede: 'Whichever format you choose, the most valuable thing a maths teacher does is look at the wrong answers. Assessment writers call the patterns in wrong answers distractors. Here is a short fractions check with invented answers, read the way a good tutor would read it.',
      body: [
        { kind: 'table', caption: 'A twelve-question fraction addition check (invented answers; analysis is ours)', head: ['Question', 'Correct answer', 'Learner\'s answer', 'Denominators', 'Reading'], rows: [
          ['1/2 + 1/4', '3/4', '3/4', 'Related', 'Correct'],
          ['1/3 + 1/6', '1/2', '1/2', 'Related', 'Correct'],
          ['2/5 + 1/5', '3/5', '3/5', 'Same', 'Correct'],
          ['1/2 + 1/3', '5/6', '2/5', 'Unrelated', 'Added tops and bottoms'],
          ['3/4 + 1/8', '7/8', '7/8', 'Related', 'Correct'],
          ['1/4 + 2/4', '3/4', '3/4', 'Same', 'Correct'],
          ['2/3 + 1/6', '5/6', '5/6', 'Related', 'Correct'],
          ['1/5 + 3/10', '1/2', '5/10', 'Related', 'Correct, not simplified'],
          ['3/8 + 1/8', '1/2', '1/2', 'Same', 'Correct'],
          ['1/2 + 2/5', '9/10', '3/7', 'Unrelated', 'Added tops and bottoms'],
          ['1/3 + 1/4', '7/12', '2/7', 'Unrelated', 'Added tops and bottoms'],
          ['5/6 + 1/12', '11/12', '11/12', 'Related', 'Correct']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the marking says',
          left: [
            'Nine of twelve is 75%. On a worksheet, that looks like a child who is mostly fine and occasionally careless.',
            'A busy supervisor marking a stack of sheets might circle three answers and move on, and the child might do another sheet of the same kind next week.'
          ],
          rightH3: 'What the wrong answers say',
          right: [
            'All three errors are the same mistake: add tops and bottoms, so 1/2 + 1/3 becomes 2/5. And all three have unrelated denominators, while every question with the same or related denominators is right.',
            'So this child can already do what the curriculum asks in Year 5, and has not yet met the Year 6 step of using equivalent fractions to deal with unrelated denominators. That is one precise gap, not general carelessness.'
          ] },
        { kind: 'table', mt: true, caption: 'The curriculum steps behind the diagnosis (ACARA, Australian Curriculum v9)', head: ['Code', 'Content description (quoted)'], rows: [
          ['AC9M5N03', 'compare and order fractions with the same and related denominators including mixed numerals, applying knowledge of factors and multiples; represent these fractions on a number line'],
          ['AC9M5N05', 'solve problems involving addition and subtraction of fractions with the same or related denominators, using different strategies'],
          ['AC9M6N05', 'solve problems involving addition and subtraction of fractions using knowledge of equivalent fractions']
        ] },
        { kind: 'p', mt: true, html: 'The fix is a short sequence: show why 1/2 + 1/3 cannot be 2/5 (2/5 is smaller than 1/2, which it started with), rebuild equivalent fractions with a fraction wall, then practise unrelated denominators until they are secure. Older learners can automate the check in Python: <code>from fractions import Fraction</code> lets a program test each answer and count which kind of mistake appears most. Whichever format you choose, ask the provider to show you a diagnosis like this one.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/" rel="noopener" target="_blank">ACARA, Australian Curriculum v9 Mathematics</a>, F to 6 curriculum content file, read 7 October 2026. The quiz and its answers are invented for illustration.' }
      ]
    },
    {
      id: 'choosing', tint: 'deep', eyebrow: 'Choosing',
      h2: 'A short guide to choosing',
      lede: 'Match the format to the child, not to what friends happen to use.',
      body: [
        { kind: 'table', caption: 'Which maths help suits which child', head: ['If your child', 'Consider', 'Why'], rows: [
          ['Has one clear gap, like fractions or negative numbers', 'Private tutor or one-to-one online', 'Time can be spent entirely on the gap'],
          ['Needs steady practice and routine', 'Tutoring centre or small group', 'Regular structure at a lower fee'],
          ['Is preparing for a selective test or senior exams', 'Coaching college or a focused small group', 'Exam practice volume, with diagnosis'],
          ['Is anxious about maths', 'Private tutor, then a group later', 'Confidence first, peers second'],
          ['Is well ahead of their year', 'Private tutor or an enrichment group', 'Material matched to their level, not the room\'s'],
          ['Lives far from any centre', 'Live online, group or one to one', 'No travel, wider choice of teachers']
        ] },
        { kind: 'p', mt: true, html: 'Whatever you choose, give it a term and then ask for a specific report: which topics are now secure, which are not, and what happens next. If the answer is only a percentage, ask for the diagnosis behind it. For the cost side, see our <a class="ag-inline-link" href="/maths-tutor-cost-australia-explained">maths tutor cost guide</a>; for online maths specifically, <a class="ag-inline-link" href="/online-maths-tutoring-australia">online maths tutoring in Australia</a>.' }
      ]
    },
    {
      id: 'online', tint: '', eyebrow: 'Where we sit',
      h2: 'How our live online maths lessons compare',
      lede: 'We are neither a centre nor a single private tutor. Here is how our format lines up against the questions above.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Small groups or one to one', p: 'Five to ten learners at a similar level, or a teacher to yourself, chosen after the free first lesson.' },
          { h3: 'Working on screen', p: 'Learners write their working where the teacher can see it, so mistakes are read, not just marked.' },
          { h3: 'Named gaps', p: 'Families hear which topics are secure and which need work, in plain words.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Same teacher', p: 'One regular teacher, who learns how your child thinks.' },
          { h3: 'Watch any lesson', p: 'Parents are welcome to sit in at home.' },
          { h3: 'Maths and coding', p: 'Learners who enjoy both can link them, from fractions in Python to statistics with data.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How maths learners progress with us',
    lede: 'The cycle every learner goes through, whether in a group or one to one.',
    table: { caption: 'A diagnosis-first cycle in maths lessons', head: ['Stage', 'What happens'], rows: [
      ['1. Diagnose', 'Short checks find exactly which ideas are secure'],
      ['2. Explain', 'The teacher rebuilds the shaky idea from what the learner already knows'],
      ['3. Practise', 'Practice targets the gap, with errors read as they happen'],
      ['4. Re-check', 'A fresh check confirms the gap is closed before moving on']
    ] },
    left: { h3: 'For primary children', ps: [
      'Fractions, place value and times tables are the usual gaps, and each one is checked separately.',
      'Parents hear progress topic by topic.'
    ] },
    right: { h3: 'For secondary students', ps: [
      'Algebra habits, negative numbers and fractions inside equations are the gaps we see most.',
      'Lessons connect to the school\'s current topic.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine maths courses',
    lede: 'Every course is taught live, in small groups or one to one.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Foundation to Year 6', courses: [
        { code: 'TVCM / PRI / 01', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Concrete, playful number work.' },
        { code: 'TVCM / PRI / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense, not tricks.' },
        { code: 'TVCM / PRI / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The full primary journey.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Years 7 to 12', courses: [
        { code: 'TVCM / SEC / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle-years maths', blurb: 'Fractions to early algebra.' },
        { code: 'TVCM / SEC / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The habits algebra needs.' },
        { code: 'TVCM / SEC / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Secondary maths', blurb: 'Algebra to calculus.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'Stretch and adults', courses: [
        { code: 'TVCM / BEY / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving for keen learners.' },
        { code: 'TVCM / BEY / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data to hypothesis testing.' },
        { code: 'TVCM / BEY / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths ideas explored in code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Maths lessons built around the learner\'s working',
    lede: 'Answers matter; the working behind them matters more.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Working shown', p: 'The teacher sees how each answer was reached.' },
      { h3: 'Errors read', p: 'Patterns in mistakes guide the next lesson.' },
      { h3: 'Same teacher', p: 'Week after week.' },
      { h3: 'Small groups', p: 'Five to ten, or one to one.' },
      { h3: 'Live, online', p: 'No travel, any state.' },
      { h3: 'Plain reports', p: 'Topics secure and topics to work on.' }
    ]
  },

  projectsH2: 'Learner work',
  projectsLede: 'Projects from learners who study maths and coding with us. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families on Google, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'Maths lessons outside India are billed monthly in US dollars, one rate for every country. A small group costs less per learner than one to one. There is no joining fee and no term contract.',
    free: ['A free first maths lesson', 'A quick diagnosis of strengths and gaps', 'No card details'],
    group: ['Five to ten learners', 'One regular teacher', 'Similar level', 'Monthly'],
    one: ['A teacher to yourself', 'Time on your child\'s exact gaps', 'Your own pace']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Maths tutor or tutoring centre: common questions',
    items: [
      { q: 'What is the difference between a maths tutor and a tutoring centre?', a: 'A private tutor works with one child at a time; a tutoring centre usually has several children working at desks under one supervising teacher. Coaching colleges run larger classes focused on exams.' },
      { q: 'What is distractor analysis?', a: 'Distractor analysis means looking at the pattern in a learner\'s wrong answers to find the misconception behind them, rather than only counting how many were wrong.' },
      { q: 'Is a tutoring centre cheaper than a private tutor?', a: 'Usually, per child. The Australian Tutoring Association notes that one-to-one sessions tend to cost the family more, and that the individual fee may be significantly lower in a class.' },
      { q: 'What questions should I ask a tutoring provider?', a: 'Ask how large the group is and how your child\'s needs will be met, how often you get progress reports, what happens if your child is not benefiting, whether you can watch, and how tutors are screened.' },
      { q: 'Why does my child add fractions by adding the tops and bottoms?', a: 'It is a very common misconception, often appearing only when denominators are unrelated. Rebuilding equivalent fractions, for example with a fraction wall, usually fixes it.' },
      { q: 'Which curriculum code covers adding fractions?', a: 'In the Australian Curriculum v9, AC9M5N05 covers fractions with the same or related denominators in Year 5, and AC9M6N05 extends this using equivalent fractions in Year 6.' },
      { q: 'Is online maths tutoring as good as a centre?', a: 'It can be, provided the teacher sees the learner\'s working. Online small groups also remove travel and widen the choice of teachers.' },
      { q: 'Can I watch my child\'s maths lessons?', a: 'Yes. Parents are welcome to sit in on any of our lessons at home.' },
      { q: 'Are your tutors in Australia?', a: 'No. Our teachers are based in India and teach live online at times that suit each Australian state.' },
      { q: 'How much do your maths lessons cost?', a: 'The first lesson is free. After that, maths lessons are billed monthly with no joining fee and no term contract, as shown in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on maths help for Australian families.',
    items: [
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Our main maths page for Australia.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor cost explained', p: 'What maths help costs.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy practice', p: 'How the numeracy test works.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one tutor', p: 'When private lessons suit.' },
      { href: '/coding-class-or-maths-tutor-first-australia', label: 'Coding class or maths tutor first?', p: 'Which to start with.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first maths lesson',
    lede: 'Tell us the year level and what feels hard. In the first lesson the teacher runs a short check and tells you plainly which ideas are secure and which are not.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a> or <a class="ag-inline-link" href="/courses">the full course list</a>.',
    note: 'From Australia, WhatsApp is quickest; our team in India answers on a +91 number, and we do not have an Australian office.',
    formNote: 'The first maths lesson is free; no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Maths help', links: [
        { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
        { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor cost' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-tutor-australia', label: 'Online tutor guide' },
        { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one lessons' },
        { href: '/coding-class-or-maths-tutor-first-australia', label: 'Coding or maths first?' }
      ] }
    ],
    bottomRight: 'Read the wrong answers, not just the score'
  },

  personalityCss: `
.ag-root.ag-tvcm .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-tvcm .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-tvcm .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-tvcm .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-tvcm .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-tvcm .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, maths tutor versus tutoring centre. Australian Tutoring Association: choosing a tutor (questions for "tutoring businesses and coaching colleges", including group size, progress reports and what happens if a child is not benefiting); how much should I charge ("One-to-one sessions tend to levy a higher fee for the student/family"); Member Code of Conduct ("suspended or dismissed"). ACARA Australian Curriculum v9 Mathematics: AC9M5N03, AC9M5N05 (same or related denominators), AC9M6N05 (equivalent fractions).',
    localProject: 'Distractor analysis of an invented twelve-question fraction addition check: 9 of 12 correct; all three errors are "add tops and bottoms" (1/2 + 1/3 = 2/5, 1/2 + 2/5 = 3/7, 1/3 + 1/4 = 2/7) and all three have unrelated denominators; every same or related denominator item is correct. Diagnosis: secure at AC9M5N05, not yet at AC9M6N05. Lesson family: distractor analysis.',
    requiredMentions: ['AC9M5N03', 'AC9M5N05', 'AC9M6N05', 'add tops and bottoms', '9 out of 12', 'unrelated denominators', 'distractor analysis', 'coaching colleges', 'One-to-one sessions tend to levy a higher fee', 'suspended or dismissed'],
    sources: [
      { claim: 'Australian Tutoring Association: choosing a tutor (questions for tutoring businesses and coaching colleges).', url: 'https://ata.edu.au/parent-info/choosing-a-tutor/' },
      { claim: 'Australian Tutoring Association: how much should I charge? (one-to-one versus class fees; no dollar figures used).', url: 'https://ata.edu.au/membership/tutor-resources/how-much-should-i-charge/' },
      { claim: 'Australian Tutoring Association: Member Code of Conduct.', url: 'https://ata.edu.au/about-us/member-code-of-conduct/' },
      { claim: 'ACARA: Australian Curriculum v9 Mathematics F-6 curriculum content (AC9M5N03, AC9M5N05, AC9M6N05).', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-f-6-v9.docx' }
    ],
    rejectedClaims: [
      'Named tutoring franchises or coaching colleges: none is named, ranked or compared (spec non-goal).',
      'Tutoring fees in dollars: kept off this page; the ATA dollar ranges appear only on the cost guide.',
      'Research claims that private tutoring outperforms centres: no primary study read, so none is cited.',
      'Claims that we are ATA members: we are not, and the page says so.',
      'The learner\'s answers: invented for illustration, labelled as such.'
    ]
  }
};
