'use strict';
// Problem solving skills through coding, Ireland (ag- door, Ireland cluster,
// Phase 2). Facts read at primary sources on 16 September 2026, all from the
// Educational Research Centre's national PISA 2022 report (Donohue, Perkins,
// Walsh, O'Neill, O Duibhir and Duggan, December 2023) unless stated: maths
// 491.6 vs OECD 472.4, down 8.0 on 2018 while the OECD fell 14.9; reading 516.0
// vs 475.6; science 503.8 vs 484.6, up 7.7; below Level 2 in maths 19.0% vs
// 31.1%, highest levels 7.2% vs 8.7%; process subscales interpreting 494.9,
// employing 493.6, reasoning 489.8, formulating 486.8. EVERY Irish PISA 2022
// number on this page must carry the report's non-response caveat: 1,689
// students, 22.1% of the sample, did not participate or were absent, against
// 868 (12.8%) in 2018, and the report warns of upward bias. Ireland did NOT sit
// the PISA 2022 creative thinking test (questionnaire only), confirmed against
// the OECD's own 64-country list; a search summary claiming otherwise is wrong.
// Curriculum: JC Mathematics specification (problem solving element, outcomes
// U.7 to U.10, computational thinking in the rationale, Statement of Learning
// 17) and the LC Mathematics syllabus for examination from 2015 (its definition
// of problem solving, and the 180-hour course). No grade, points or CAO
// promises anywhere. The Table 2 thinking row belongs to the thinking page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'PROBLEM SOLVING', blurb: 'What PISA and the Irish maths curriculum say about problem solving, and how coding classes build it step by step.' },
  slug: 'problem-solving-skills-through-coding-ireland',
  code: 'pss',
  accent: '#004F69',
  accentRationale: 'Problem solving door, Ireland: a deep marine blue from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Problem solving skills through coding, Ireland',
  title: 'Problem Solving Skills Through Coding | Ireland',
  description: 'Build problem-solving skills through coding in Ireland: what PISA 2022 and the maths curriculum say, and how decomposition is taught class by class.',
  ogDescription: 'Irish students score above the OECD average in maths, but formulating, turning a real situation into maths, is their weakest step. That is the step coding drills hardest.',
  twitterDescription: 'Problem solving through coding in Ireland, taught as a method rather than a talent. First class free.',
  pageName: 'Problem Solving Skills Through Coding, Ireland',
  webPageDescription: 'How coding builds problem-solving skills for learners in Ireland: Ireland\'s PISA 2022 results with their caveats, the problem-solving outcomes in the Irish maths curriculum, and the method used in our live classes.',
  courseDescription: 'Live online coding classes for learners in Ireland taught as problem solving: reading a problem, decomposing it, solving a smaller case, generalising and judging the result, from primary school to adults.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Problem solving, Ireland',
  navLinks: [
    { href: '#pisa', label: 'What PISA shows' },
    { href: '#curriculum', label: 'In the curriculum' },
    { href: '#method', label: 'The method' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Problem solving &middot; Ages 6 to 67',
  h1: 'Problem solving skills through coding in Ireland',
  lede: 'Problem solving is the skill parents most often say they want, and the one hardest to buy. It cannot be handed over in a lesson; it is built by meeting problems whose answer is not obvious and being taught a method for getting started. Irish education says so in as many words. The Leaving Certificate Mathematics syllabus defines problem solving as "engaging in a task for which the solution is not immediately obvious", and adds that the point is "the mathematical knowledge and skills that can be learned in the process of obtaining an answer, rather than on the answer itself". The Junior Cycle Mathematics specification asks students to decompose a problem "into manageable parts", the exact move a programmer makes a dozen times a day. And Ireland\'s PISA 2022 results contain a detail worth knowing: of the four things measured in mathematics, the one Irish students do least well is formulating, which means turning a real situation into something you can calculate with. This page explains all of that, with the caveats the researchers themselves insist on, and then shows the method our classes use.',
  secondaryCta: { href: '#method', label: 'See the method' },
  wa: 'Hello Modern Age Coders, I would like a free first class for a learner in Ireland who wants to build problem-solving skills.',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students &middot; a method, not a talent',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Teaches', 'A method for getting started'],
    ['Core move', 'Decomposition'],
    ['Practice', 'Problems without obvious answers'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Hours', 'After school and evenings, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Problem solving is taught as a method: read the problem properly, break it into parts, solve a smaller version, generalise, then judge the result. Irish curriculum documents ask for exactly this, from the Junior Cycle outcome about decomposing a problem into manageable parts to the Leaving Certificate definition of a task whose solution is not immediately obvious. Coding is unusually good practice for it, because every attempt is tested immediately. Modern Age Coders teaches it live online, for ages 6 to 67, in groups of five to ten placed by level or one to one. The first class is free; continuing costs USD 100 a month in a group or USD 150 a month with a teacher to yourself. We make no promises about exam results.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses where problem solving is the subject',
    lede: 'One for teenagers, one for college students and adults, one for younger children. Each card opens the syllabus.',
    items: [
      { course: 'problem-solving-dsa-masterclass-teens', code: 'SOLVE / 01', title: 'Problem Solving for Teens', note: 'Problems whose answers are not obvious, worked through with a method rather than guesswork, week after week.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'SOLVE / 02', title: 'Data Structures and Algorithms', note: 'For college students and adults: the classic structures, and how to reason about what a solution costs before writing it.' },
      { course: 'maths-through-coding', code: 'SOLVE / 03', title: 'Maths Through Coding', note: 'For younger learners: school maths turned into small programs, so a method can be seen working instead of memorised.' }
    ]
  },

  sections: [
    {
      id: 'pisa', tint: 'tint', eyebrow: 'What PISA shows',
      h2: 'Ireland in PISA 2022, and the step Irish students find hardest',
      lede: 'PISA tests fifteen-year-olds across the OECD. Ireland\'s national report was published by the Educational Research Centre in December 2023. Here are its headline figures, and then the detail that matters for problem solving.',
      body: [
        { kind: 'table', caption: 'Ireland in PISA 2022, Educational Research Centre national report', head: ['Domain', 'Ireland', 'OECD average', 'Change since 2018'], rows: [
          ['Mathematics', '491.6', '472.4', 'Down 8.0 points, while the OECD fell 14.9'],
          ['Reading', '516.0', '475.6', 'Down 2.1 points, not statistically significant'],
          ['Science', '503.8', '484.6', 'Up 7.7 points, statistically significant']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The four steps of doing maths',
          left: [
            'PISA splits mathematics into four processes. Irish students score highest on interpreting (494.9) and employing (493.6), lower on reasoning (489.8), and lowest on formulating (486.8).',
            'Formulating is the step where you turn a messy real situation into something you can actually calculate with. It is also the step a programmer performs every time they take a vague idea and decide what the program must do first.'
          ],
          rightH3: 'The caveat the researchers insist on',
          right: [
            'The report is blunt about a limitation. In 2022, 1,689 students, 22.1% of the sample, did not participate or were absent, against 868 students, 12.8%, in 2018. The report says Ireland\'s performance must be read "with consideration of the upward bias in the estimates for Ireland".',
            'So these numbers are useful, and they are not precise. Anyone quoting them without that sentence is not being straight with you.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Fewer struggling', p: '19.0% of students in Ireland performed below Level 2 in mathematics, against an OECD average of 31.1%. That is a real strength of the system.' },
          { h3: 'Fewer at the top', p: '7.2% reached the highest levels, slightly below the OECD average of 8.7%, and 28 countries and economies had a larger share of top performers.' },
          { h3: 'No creative-thinking score', p: 'Ireland did not sit the PISA 2022 creative thinking test, taking only the questionnaire. Any article giving Ireland a creative-thinking rank has it wrong.' }
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.erc.ie/wp-content/uploads/2023/12/B23617-Education-in-a-Dynamic-World-Report-online-1.pdf" rel="noopener" target="_blank">Education in a Dynamic World: the performance of students in Ireland in PISA 2022</a>, Educational Research Centre, December 2023, read 16 September 2026. The creative-thinking point is confirmed against <a class="ag-inline-link" href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/06/new-pisa-results-on-creative-thinking_7dccb55b/b3a46696-en.pdf" rel="noopener" target="_blank">OECD PISA in Focus No. 125</a>, whose list of the 64 participating countries does not include Ireland.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'In the curriculum',
      h2: 'What the Irish maths curriculum asks students to be able to do',
      lede: 'Problem solving is not an extra in Irish mathematics. It is written into the specification as an element in its own right, with learning outcomes attached.',
      body: [
        { kind: 'table', caption: 'Junior Cycle Mathematics, the problem-solving learning outcomes, and their coding equivalents', head: ['Outcome', 'What the student does', 'The same move in code'], rows: [
          ['U.7', 'Make sense of a given problem and, if necessary, mathematise a situation', 'Decide what the program must actually produce'],
          ['U.8', 'Apply knowledge and skills to solve a problem, including decomposing it into manageable parts', 'Split the work into functions you can test one at a time'],
          ['U.9', 'Interpret the solution in terms of the original question', 'Check the output answers the question that was asked'],
          ['U.10', 'Evaluate different possible solutions, their reasonableness, improvements and limitations', 'Compare approaches for speed, clarity and edge cases']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The specification defines the element itself as students being able to "investigate patterns, formulate conjectures, and engage in tasks in which the solution is not immediately obvious, in familiar and unfamiliar contexts".',
            'Its rationale names the company problem solving keeps: the course develops "understanding, fluency, reasoning, computational thinking and problem solving". Computational thinking is in the maths curriculum, not only the computing one.'
          ],
          right: [
            'At senior cycle, the Leaving Certificate Mathematics syllabus, a 180-hour course of study, says students "learn to analyse the problem and break it down into manageable steps, to reflect on their strategies and those of others and to adjust their own approaches where necessary".',
            'It also distinguishes the kind of task that builds the skill: "Problem-solving tasks activate creative mathematical thinking processes as opposed to imitative thinking processes activated by routine tasks." Routine exercises do not do this work.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf" rel="noopener" target="_blank">Junior Cycle Mathematics specification</a> and the <a class="ag-inline-link" href="https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/%20SCSEC25_Maths_syllabus_examination-2015_English.pdf" rel="noopener" target="_blank">Leaving Certificate Mathematics syllabus</a>, read 16 September 2026. The third column is our own mapping, not part of either document. We do not teach the maths courses and make no claim about exam performance.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'The method',
      h2: 'The five moves we teach, and what they look like at each age',
      lede: 'The method is the same for a seven year old making a game and an adult writing a data pipeline. Only the problems grow.',
      body: [
        { kind: 'table', caption: 'One method, three ages', head: ['Move', 'A child of eight', 'A teenager', 'An adult'], rows: [
          ['Read it properly', 'Says back what the game should do', 'Writes the requirement in one sentence', 'Lists the inputs, outputs and constraints'],
          ['Break it up', 'One part: make the cat move', 'Functions, each doing one thing', 'Modules with clear boundaries'],
          ['Solve a smaller case', 'Make it work for one level', 'Run it on three rows of data', 'Prototype on a sample before the full set'],
          ['Generalise', 'Make it work for every level', 'Handle the awkward cases too', 'Handle scale, errors and bad input'],
          ['Judge it', 'Is it fun, does it break?', 'Is it right, is it readable?', 'Is it correct, fast enough, maintainable?']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Being stuck is the lesson', p: 'Our teachers are trained to wait. A learner who is stuck and then finds a way forward has learned something a demonstration cannot teach.' },
          { h3: 'A smaller case first', p: 'Most beginners attack the whole problem at once. Solving the two-row version, by hand if needed, is the single most useful habit we teach.' },
          { h3: 'Say why, then run', p: 'The learner predicts the outcome before running the code, so every run tests their reasoning and not only their typing.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Where do AI tools come in? After the method is secure. A learner who can decompose a problem can use a tool to speed up a part they already understand, and can spot when its answer is wrong.'
          ],
          right: [
            'The habits that keep that honest are on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understand the code, do not copy-paste</a>, and the wider argument on <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-ireland">learn to think, not just use AI tools</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of problem solving',
    lede: 'A learner moves up when the teacher sees the rung used unprompted, not when a number of weeks has passed.',
    table: { caption: 'How problem solving is built', head: ['Rung', 'The learner can'], rows: [
      ['1. Restate', 'Say what the problem is asking, in their own words'],
      ['2. Decompose', 'Break it into parts that can be solved separately'],
      ['3. Reduce', 'Solve a smaller version first and check it by hand'],
      ['4. Generalise', 'Extend the working solution to all the cases'],
      ['5. Evaluate', 'Compare approaches and defend the one chosen']
    ] },
    left: { h3: 'Why restating comes first', ps: [
      'A surprising share of wrong programs solve a problem nobody asked about. Restating catches that in thirty seconds, before an hour is spent.',
      'The subjects these rungs run through are set out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Beyond school', ps: [
      'The same five moves are what technical interviews test, which is why our college and adult students work on them directly.',
      'For students in Irish third level, <a class="ag-inline-link" href="/coding-for-college-students-ireland">coding for college students</a> takes this further.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses that drill problem solving',
    lede: 'Grouped by stage. The free first class decides where a learner starts.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Method before machinery', courses: [
        { code: 'SOLVE / YOUNG / 01', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'School maths made visible and testable.' },
        { code: 'SOLVE / YOUNG / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Breaking a task into steps, with blocks.' },
        { code: 'SOLVE / YOUNG / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'First typed code, first real debugging.' }
      ] },
      { num: 'II', h3: 'Secondary school', sub: 'Problems without obvious answers', courses: [
        { code: 'SOLVE / TEEN / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'The method, practised weekly on hard problems.' },
        { code: 'SOLVE / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Fluency, so the problem gets the attention.' },
        { code: 'SOLVE / TEEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'A stricter language that rewards planning.' }
      ] },
      { num: 'III', h3: 'College and adults', sub: 'Cost, structure and trade-offs', courses: [
        { code: 'SOLVE / ADULT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'Choosing a structure for a reason you can state.' },
        { code: 'SOLVE / ADULT / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From beginner to writing real programs alone.' },
        { code: 'SOLVE / ADULT / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe Coding for College', blurb: 'Building fast with AI while reading every line.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Live classes with room to be stuck',
    lede: 'Every class is live, because the teaching happens in the pause after a question. Our teachers work from India, whose clock stays put all year, so they are four and a half hours ahead of Irish time through the summer and five and a half once Ireland turns its clocks back in late October.',
    slots: [
      { time: 'After school', l: 'Primary and secondary learners, Irish time.' },
      { time: 'Evening', l: 'College students and working adults.' },
      { time: 'Weekend', l: 'Longer problem sessions and project work.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'A real problem, worked through with a teacher, ending with an honest view of the right level.' },
      { h3: 'Five to ten per group', p: 'Learners at one level, comparing approaches to the same problem each week.' },
      { h3: 'One to one', p: 'For learners who want a faster pace or prefer to think without an audience.' },
      { h3: 'Teachers who wait', p: 'Hints before answers, and the smallest hint that will do.' },
      { h3: 'Problems, not only exercises', p: 'Tasks where the route is not given, because routine exercises build different skills.' },
      { h3: 'Progress you can see', p: 'Learners keep their attempts, so improvement in method is visible over a term.' }
    ]
  },

  projectsH2: 'Problems our students solved and published',
  projectsLede: 'Four finished projects from our students, each one a problem somebody chose to take on. More are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From our Google reviews, unedited and unpaid, written by the families who sat through the lessons.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly price in US dollars, the same in every country outside India and the same at every age. Nothing to pay to enrol, and no term or year to sign up for.',
    free: ['A genuine problem worked through', 'A clear view of the starting rung', 'No card taken'],
    group: ['Five to ten learners at one level', 'One teacher, week after week', 'Approaches compared, not just answers marked', 'A certificate at the end'],
    one: ['A teacher for a single learner', 'Problems chosen for that learner', 'Good for fast movers and quiet thinkers']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What families in Ireland ask about problem solving',
    items: [
      { q: 'Can problem solving actually be taught?', a: 'The method can. Restating, decomposing, solving a smaller case, generalising and evaluating are moves that improve with practice, and the Irish maths curriculum names several of them as learning outcomes.' },
      { q: 'Will this improve my child\'s maths results?', a: 'We make no promises about grades or exam results. What we teach is a method for approaching problems, which many families find helps across subjects.' },
      { q: 'How does Ireland do in PISA maths?', a: 'Irish fifteen-year-olds averaged 491.6 in PISA 2022 against an OECD average of 472.4, though the national report notes an upward bias, since 22.1% of the sample did not participate or were absent.' },
      { q: 'Which part of maths do Irish students find hardest?', a: 'Of the four PISA processes, formulating scored lowest at 486.8. That is the step of turning a real situation into something you can calculate with, and it is the step coding practises constantly.' },
      { q: 'Is Ireland good at creative thinking?', a: 'There is no Irish score. Ireland took only the questionnaire part of the PISA 2022 creative thinking assessment, not the test, so any published Irish rank for it is mistaken.' },
      { q: 'What age should a child start?', a: 'From six, where problem solving means breaking a task into steps with blocks. Typed code and harder problems usually follow around ten.' },
      { q: 'Is this the same as competitive programming?', a: 'No. Competition problems are one source of practice, but the aim here is a method a learner uses on their own projects, school work and later at work.' },
      { q: 'What do the classes cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no enrolment fee.' },
      { q: 'When do classes run?', a: 'After school, evenings or weekends at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens when I send the form?', a: 'We phone at a reasonable Irish hour and book the free class. There is no charge unless the learner carries on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related reading',
    lede: 'Pages that share this argument.',
    items: [
      { href: '/learn-to-think-not-just-use-ai-tools-ireland', label: 'Learn to think, not just use AI tools', p: 'Thinking in the Irish curriculum.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'Keeping the learning when tools help.' },
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'The secondary years.' },
      { href: '/coding-for-college-students-ireland', label: 'Coding for college students in Ireland', p: 'Where these skills lead.' },
      { href: '/best-coding-class-in-the-world', label: 'The best coding class in the world', p: 'The research on teaching.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Try a problem in a free first class',
    lede: 'Leave a number and we will call at a time that works in Ireland. In the free class the learner takes on a real problem with a teacher who hints rather than tells, and you get an honest view of where they are.',
    readFirst: 'Prefer to read first? Try <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">list of courses</a> or the <a class="ag-inline-link" href="/student-labs">projects our students finished</a>.',
    note: 'A WhatsApp message is free from an Irish number and usually gets the quickest answer. The number is Indian because our team is based in India; we hold no premises in Ireland.',
    formNote: 'No card details, no obligation. One call to book.'
  },

  footer: {
    cols: [
      { h4: 'Problem solving', links: [
        { href: '/learn-to-think-not-just-use-ai-tools-ireland', label: 'Learn to think' },
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens' },
        { href: '/coding-for-college-students-ireland', label: 'Coding for college students' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'A method for problems without obvious answers'
  },

  personalityCss: `
.ag-root.ag-pss .ag-hero-grid { gap: clamp(1.05rem, 3vw, 2.7rem); }
.ag-root.ag-pss .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-pss .ag-capsule { border-left-width: 8px; }
.ag-root.ag-pss .ag-section-head h2 { max-width: 37ch; }
.ag-root.ag-pss .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pss .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-pss .ag-spec dt { letter-spacing: 0.125em; }
.ag-root.ag-pss .ag-slots { gap: 1.08rem; }
`,

  mustMention: ['491.6', '472.4', '486.8', '494.9', '19.0%', '31.1%', '22.1%', '516.0', '503.8', 'not immediately obvious', 'decomposing it into manageable parts', 'upward bias']
};
