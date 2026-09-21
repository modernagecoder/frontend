'use strict';
// AI and Python academy for girls, UK (ag- language and track door; UK cluster Phase 3).
// HARD RULES: never claim girls learn differently; never offer girls-only batches. Classes are mixed and placed
// by ability; the page speaks to girls and their parents about participation and about keeping going.
// Sources, read raw on 21 September 2026:
//  - Curriculum and Assessment Review: Final Report (November 2025), computing section: GCSE Computer Science
//    entries "have since plateaued at 12-13%"; "take-up of GCSE Computer Science is now 20% for boys versus 6% for
//    girls"; students "achieved 0.72 of a grade less in GCSE Computer Science compared to their other subjects",
//    and girls "typically achieved 1.11 of a grade lower than in their other subjects" (pre-pandemic SCARI data);
//    factors named include "gender stereotyping of computing and related careers" and school factors "such as
//    pedagogy and resources"; evidence that the GCSE "is perceived to be less relevant to girls"; the recommended
//    broader GCSE in Computing.
//  - National Centre for Computing Education (Teach Computing), Exam results 2025: highlights for computing: female
//    share of GCSE Computer Science entries 21.1% (2023), 21.9% (2024), 22.6% (2025); top grades 29.6% overall,
//    girls 35.7% against boys 27.8%. The blog's boy and girl entry counts contradict its own percentages, so they
//    are not used.
//  - Ofqual, Provisional entries for GCSE, AS and A level: summer 2026 exam series (published 9 June 2026): GCSE
//    computing entries 89,610 in 2025 and 83,330 in 2026, down 7.0%, the largest percentage fall of the 15 EBacc
//    subjects. No sex breakdown is given, so none is inferred.
//  - DSIT, Cyber security skills in the UK labour market 2025: "Only 17% of the cyber security workforce was female
//    compared to 30% of the digital workforce and 48% of the UK workforce."
// Spine: girls who take computer science do well; most never take it. 6% of girls against 20% of boys take the
// GCSE, yet girls who sit it gained more top grades than boys in 2025. The gap is in who starts and who keeps
// going, which is what a mixed, ability-placed class with a steady teacher can help with. The Ireland page's
// Eurostat, HEA and CodePlus material is not repeated.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'GIRLS IN CODING', blurb: 'Girls and computing in the UK: 6% take the GCSE, those who do earn more top grades, and mixed live classes that help a learner keep going.' },
  slug: 'ai-and-python-academy-for-girls-uk',
  code: 'agu',
  accent: '#591782',
  accentRationale: 'Girls in coding, UK: a deep violet from the solver (9.12:1 on every paper tint, dE 8.9 from the nearest used accent)',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AI and Python academy for girls, UK',
  title: 'AI and Python Classes for Girls in the UK | Live',
  description: 'AI and Python classes for girls in the UK, taught live in mixed groups placed by ability, with real projects and a steady teacher. From age 6, first class free.',
  ogDescription: 'Only 6% of girls take GCSE Computer Science, against 20% of boys. Girls who do take it earned more top grades than boys in 2025.',
  twitterDescription: 'AI and Python for girls in the UK: mixed live classes placed by ability, real projects, the same teacher each week. First class free.',
  pageName: 'AI and Python Academy for Girls in the UK',
  webPageDescription: 'For girls in the UK who want to learn Python and AI, and their parents: what the Curriculum and Assessment Review and the 2025 results show, and live mixed classes placed by ability.',
  courseDescription: 'Live online Python and AI for UK girls and all learners, in mixed groups placed by ability: Python from the first line, data, machine learning and creative projects, with the same teacher each week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AI and Python for girls',
  navLinks: [
    { href: '#uptake', label: 'Who takes computing' },
    { href: '#results', label: 'How girls do' },
    { href: '#keep-going', label: 'Keeping going' },
    { href: '#classes', label: 'How classes run' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Girls and their parents &middot; Mixed classes',
  h1: 'AI and Python classes for girls in the UK',
  lede: 'The national review of England\'s curriculum put the problem in one line in November 2025: "take-up of GCSE Computer Science is now 20% for boys versus 6% for girls". Girls make up fewer than a quarter of the students sitting the subject; the National Centre for Computing Education puts the female share of entries at 22.6% in 2025, up only slightly from 21.1% two years earlier. Yet the girls who do take it do well: in the same year, 35.7% of girls earned the top grades, against 27.8% of boys. So the gap is not about who can do computing. It is about who starts, and who keeps going long enough to find out they are good at it. The review points to stereotyping of computing careers and to how the subject is taught and resourced. This academy is for girls who want to learn Python and AI properly, and for the parents helping them decide. Classes are mixed and placed by ability, with the same teacher every week and projects that are worth finishing.',
  secondaryCta: { href: '#uptake', label: 'What the figures show' },
  wa: 'Hello Modern Age Coders, my daughter would like a free first Python and AI class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; mixed classes, placed by ability',
  spec: [
    ['GCSE CS take-up', 'Boys 20%, girls 6%'],
    ['Girls\' share of entries', '22.6% in 2025'],
    ['Top grades, 2025', 'Girls 35.7%, boys 27.8%'],
    ['Women in cyber security', '17% of the workforce'],
    ['Our classes', 'Mixed, placed by ability'],
    ['Learn', 'Python, data, AI, creative projects'],
    ['Ages', '6 and up, by level'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Curriculum and Assessment Review\'s final report, published in November 2025, found that take-up of GCSE Computer Science was 20% among boys but 6% among girls, and pointed to gender stereotyping of computing careers and to school factors such as pedagogy and resources. The National Centre for Computing Education reports that girls made up 22.6% of GCSE Computer Science entries in 2025, and that 35.7% of girls achieved the top grades compared with 27.8% of boys. In the workforce, DSIT found only 17% of the cyber security workforce was female, against 48% of the UK workforce. Modern Age Coders teaches Python and AI live and online to UK learners, girls included, in mixed groups of five to ten placed by ability, or one to one, with the same teacher each week and real projects. We do not run girls-only classes and do not teach girls differently. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three places to start',
    lede: 'Python for teenagers, AI and machine learning, and Python with AI for younger learners. Each card opens the full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'AGU / 01', title: 'Python for Teens', note: 'A complete route through Python for ages 13 to 18, to the point of building real programs.' },
      { course: 'ai-ml-masterclass-teens', code: 'AGU / 02', title: 'AI and Machine Learning for Teens', note: 'From Python to models that learn from data, with school maths enough to start.' },
      { course: 'python-ai-kids-masterclass', code: 'AGU / 03', title: 'Python and AI for Kids', note: 'A first step into Python and AI ideas for ages 9 to 12.' }
    ]
  },

  sections: [
    {
      id: 'uptake', tint: 'tint', eyebrow: 'Who takes computing',
      h2: 'Six per cent of girls take GCSE Computer Science',
      lede: 'From the Curriculum and Assessment Review\'s final report, published in November 2025, and Ofqual\'s provisional entries for summer 2026.',
      body: [
        { kind: 'table', caption: 'Computing uptake in England, as published', head: ['Measure', 'Figure', 'Source'], rows: [
          ['GCSE Computer Science take-up, boys', '20%', 'Curriculum and Assessment Review'],
          ['GCSE Computer Science take-up, girls', '6%', 'Curriculum and Assessment Review'],
          ['GCSE Computer Science entries overall', 'Plateaued at 12-13% of students', 'Curriculum and Assessment Review'],
          ['Girls\' share of GCSE Computer Science entries', '21.1% in 2023, 21.9% in 2024, 22.6% in 2025', 'National Centre for Computing Education'],
          ['GCSE computing entries, provisional', '89,610 in 2025, 83,330 in 2026, down 7.0%', 'Ofqual']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the review found',
          left: [
            'The review says "take-up of Computing has declined among girls", and names "a range of factors", including "gender stereotyping of computing and related careers" and school factors "such as pedagogy and resources".',
            'It also considered evidence that the GCSE "is perceived to be less relevant to girls", and recommended a broader GCSE in Computing, partly to engage a wider range of students. Our page on <a class="ag-inline-link" href="/new-computing-gcse-explained">the new Computing GCSE</a> covers that change.'
          ],
          rightH3: 'The 2026 picture',
          right: [
            'Ofqual\'s provisional entries for summer 2026 show GCSE computing falling 7.0%, the largest percentage fall of the 15 EBacc subjects. Ofqual does not split those provisional figures by sex, so we do not guess how girls fared.',
            'Either way, the subject is not gaining students, and girls remain a small minority of those who sit it.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report" rel="noopener" target="_blank">Curriculum and Assessment Review: Final Report</a>, November 2025; <a class="ag-inline-link" href="https://teachcomputing.org/blog/gcse-results-2025" rel="noopener" target="_blank">National Centre for Computing Education, Exam results 2025</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/statistics/provisional-entries-for-gcse-as-and-a-level-summer-2026-exam-series/provisional-entries-for-gcse-as-and-a-level-summer-2026-exam-series" rel="noopener" target="_blank">Ofqual, Provisional entries for summer 2026</a>, 9 June 2026. Figures cover England.' }
      ]
    },
    {
      id: 'results', tint: 'deep', eyebrow: 'How girls do',
      h2: 'The girls who take it do well',
      lede: 'Results tell a different story from uptake. Two findings sit side by side, and both matter.',
      body: [
        { kind: 'table', caption: 'GCSE Computer Science outcomes', head: ['Finding', 'Figure', 'Source'], rows: [
          ['Students achieving the top grades, 2025', '29.6%', 'National Centre for Computing Education'],
          ['Girls achieving the top grades, 2025', '35.7%', 'National Centre for Computing Education'],
          ['Boys achieving the top grades, 2025', '27.8%', 'National Centre for Computing Education'],
          ['Average grade in Computer Science against a student\'s other subjects', '0.72 of a grade lower', 'Curriculum and Assessment Review, pre-pandemic data'],
          ['The same measure for girls', '1.11 of a grade lower', 'Curriculum and Assessment Review, pre-pandemic data']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Top grades',
          left: [
            'In 2025, a larger share of girls than boys earned the highest GCSE Computer Science grades: 35.7% against 27.8%, with the gap narrowing according to the NCCE.',
            'Among those who choose the subject, girls are not behind. Many of them are ahead.'
          ],
          rightH3: 'A harder subject for everyone',
          right: [
            'The review also found that students generally score lower in Computer Science than in their other subjects, by 0.72 of a grade on average and by 1.11 for girls, using pre-pandemic data. That is a statement about how the subject is graded and taught, not about ability.',
            'For a student deciding at 13 or 14, it means Computer Science can feel harder than it is worth. Steady practice before the GCSE makes that first year far less of a shock.'
          ] },
        { kind: 'p', mt: true, html: 'We read these figures as an argument about starting and persisting, not about girls needing a different kind of teaching. We teach every learner the same way: clear explanations, real projects and a teacher who reads the code.' }
      ]
    },
    {
      id: 'keep-going', tint: 'tint', eyebrow: 'Keeping going',
      h2: 'What helps a learner keep going',
      lede: 'If the gap is in who starts and who continues, the useful question for a parent is what makes a learner continue. These are our teaching choices, not claims about girls.',
      body: [
        { kind: 'table', caption: 'What we do, and what we will not do', head: ['We do', 'We do not'], rows: [
          ['Place every learner by ability, in mixed groups of five to ten', 'Run girls-only or boys-only classes'],
          ['Keep the same teacher every week', 'Rotate teachers so no one knows the learner'],
          ['Build projects a learner chooses and can show', 'Set exercises that never become anything'],
          ['Explain every idea until it is understood', 'Assume some learners are naturally suited to code'],
          ['Offer one-to-one lessons for anyone who prefers them', 'Teach girls with a different method or pace by default']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Projects worth finishing', p: 'A quiz for a younger sibling, a chart of a football season, an image classifier, an animated story. Finishing things is what keeps anyone going.' },
          { h3: 'The same teacher', p: 'A teacher who remembers last week\'s bug and this week\'s idea is the simplest reason learners come back.' },
          { h3: 'Evidence of progress', p: 'Work kept in the learner\'s own portfolio, so progress is visible to her, to parents and later to a school or employer.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the careers are',
          left: [
            'DSIT\'s 2025 cyber skills research found "Only 17% of the cyber security workforce was female compared to 30% of the digital workforce and 48% of the UK workforce."',
            'Our pages on <a class="ag-inline-link" href="/cyber-security-course-for-teens-uk">cyber security for teens</a> and <a class="ag-inline-link" href="/data-science-course-uk">data science</a> show two of the many routes Python opens.'
          ],
          rightH3: 'Competitions and communities',
          right: [
            'The NCSC\'s CyberFirst Girls competition is covered on our <a class="ag-inline-link" href="/cyberfirst-girls-competition-preparation">CyberFirst Girls page</a>, and girls interested in maths competitions can look at the <a class="ag-inline-link" href="/mathematical-olympiad-for-girls-preparation">Mathematical Olympiad for Girls</a>.',
            'Those are community routes run by others. Our own classes stay mixed.'
          ] },
        { kind: 'source', html: 'Source for the workforce figure: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/cyber-security-skills-in-the-uk-labour-market-2025/cyber-security-skills-in-the-uk-labour-market-2025" rel="noopener" target="_blank">DSIT, Cyber security skills in the UK labour market 2025</a>.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'How classes run',
      h2: 'Python and AI, taught live, one step at a time',
      lede: 'The route depends on age and starting point. The free first class settles where to begin.',
      body: [
        { kind: 'table', caption: 'Routes by age and level', head: ['Learner', 'A sensible route'], rows: [
          ['Ages 6 to 12, new to code', 'Scratch or Coding for Kids, then Python and AI for Kids from age 9'],
          ['Ages 13 to 18, new to code', 'Python for Teens from the first line'],
          ['Teenagers who already code', 'AI and Machine Learning, or Data Science for Teens'],
          ['Girls choosing GCSE options', 'A term of Python before Year 9 options, to test the subject properly'],
          ['Creative teenagers', 'Creative coding and animation alongside Python']
        ] },
        { kind: 'p', mt: true, html: 'For families weighing the GCSE decision, our page on <a class="ag-inline-link" href="/choosing-gcse-computer-science-year-9-options">choosing GCSE Computer Science in Year 9</a> explains why the real decision often comes earlier than the options form. Whatever route a learner takes, we never work on coursework, NEA or anything submitted for assessment.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages in Python and AI',
    lede: 'Every learner starts where her current skills place her.',
    table: { caption: 'From first program to a model that learns', head: ['Stage', 'What should be true'], rows: [
      ['1. First programs', 'Short Python programs written, run and fixed without help'],
      ['2. Useful programs', 'Programs that solve a real problem with lists, loops and functions'],
      ['3. Working with data', 'Real data loaded, cleaned and charted'],
      ['4. A model that learns', 'A simple machine learning model trained, tested and explained']
    ] },
    left: { h3: 'Stage two is the turning point', ps: [
      'When a program does something she actually wanted, coding stops being homework.',
      'The full sequence of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four is within reach', ps: [
      'Machine learning builds on stages one to three, not on special talent.',
      'With steady weekly lessons, it is a realistic goal for a teenager.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses in Python and AI',
    lede: 'By age and interest. The free class decides the starting point.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Younger learners', courses: [
        { code: 'AGU / ONE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Programming', blurb: 'Block coding for ages 6 to 12.' },
        { code: 'AGU / ONE / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Python and AI ideas for ages 9 to 12.' },
        { code: 'AGU / ONE / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch to games, apps and AI, ages 6 to 12.' }
      ] },
      { num: 'II', h3: 'Python and AI', sub: 'Teenagers', courses: [
        { code: 'AGU / TWO / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The complete route through Python.' },
        { code: 'AGU / TWO / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python to real models.' },
        { code: 'AGU / TWO / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real data, pandas and charts.' }
      ] },
      { num: 'III', h3: 'Further routes', sub: 'Where Python leads', courses: [
        { code: 'AGU / THREE / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for Teens', blurb: 'Defensive security, no coding needed to start.' },
        { code: 'AGU / THREE / 02', slug: 'creative-coding-animation-mastery', title: 'Creative Coding and Animation', blurb: 'Art and animation made with code, ages 13 and up.' },
        { code: 'AGU / THREE / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The exam subject, taught properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons after school',
    lede: 'Teachers work from India, which keeps the same clock all year, so the UK is four and a half hours behind in British Summer Time and five and a half hours behind in winter. After-school and weekend slots in UK time are straightforward.',
    slots: [
      { time: 'After school', l: 'An early-evening weekday slot.' },
      { time: 'Saturday', l: 'A longer session for projects.' },
      { time: 'Sunday', l: 'For busy Saturdays.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We find out what she knows and what she would like to build.' },
      { h3: 'Mixed groups', p: 'Five to ten learners of similar level, placed by ability.' },
      { h3: 'One to one', p: 'For anyone who prefers to learn privately.' },
      { h3: 'The same teacher', p: 'One teacher each week, who knows the learner and her projects.' },
      { h3: 'A portfolio', p: 'Finished projects kept in her own account.' },
      { h3: 'Parents welcome to ask', p: 'Parents can message the team with questions about progress.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Four projects our students finished. More, from every age group, are collected in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from students and parents, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, identical for every learner outside India, with no joining fee and no commitment past the current month.',
    free: ['A look at what she already knows', 'A route suggested for her age and level', 'No payment details needed'],
    group: ['Five to ten learners at one level, mixed', 'The same teacher each week', 'Projects she chooses', 'Stop at the end of any month'],
    one: ['A teacher for one learner', 'A pace set by her', 'Suits anyone who prefers private lessons']
  },

  faq: {
    eyebrow: 'Questions from girls and parents',
    h2: 'What families ask',
    items: [
      { q: 'Are your classes girls-only?', a: 'No. Classes are mixed and placed by ability, in groups of five to ten. One-to-one lessons are available for anyone who prefers them.' },
      { q: 'Do you teach girls differently?', a: 'No. Every learner is taught the same way: clear explanations, real projects and a teacher who reads the code. We place by ability, not by gender.' },
      { q: 'How many girls take GCSE Computer Science?', a: 'The Curriculum and Assessment Review found take-up of 6% among girls against 20% among boys. The NCCE puts girls at 22.6% of entries in 2025.' },
      { q: 'Do girls do well in computer science?', a: 'Those who take it do: in 2025, 35.7% of girls achieved the top GCSE grades against 27.8% of boys, according to the NCCE.' },
      { q: 'Why do so few girls choose computing?', a: 'The review points to factors including stereotyping of computing careers, and school factors such as how the subject is taught and resourced. It also considered evidence that the GCSE is perceived as less relevant to girls.' },
      { q: 'What age can she start?', a: 'From 6, with Scratch or Coding for Kids. Python and AI for Kids suits ages 9 to 12, and teenagers start with Python for Teens.' },
      { q: 'Should she take GCSE Computer Science?', a: 'That is her decision, but a term of Python before options gives her real evidence of whether she enjoys it. Our Year 9 options page explains the timing.' },
      { q: 'Do you help with coursework?', a: 'No. We never work on coursework, NEA or anything submitted for assessment.' },
      { q: 'How much are the classes?', a: 'Her first class costs nothing. Afterwards, a place in a mixed group is USD 100 a month and one-to-one lessons are USD 150 a month, and there is no charge for joining.' },
      { q: 'What times suit a school week?', a: 'An early-evening weekday slot or a weekend session, fixed in UK time at the first class. Our teachers work four and a half hours ahead of British Summer Time and five and a half ahead in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Choices, competitions and where Python leads.',
    items: [
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Choosing GCSE Computer Science in Year 9', p: 'Why the real decision comes early.' },
      { href: '/cyberfirst-girls-competition-preparation', label: 'CyberFirst Girls competition', p: 'The NCSC competition for girls.' },
      { href: '/new-computing-gcse-explained', label: 'The new Computing GCSE', p: 'The broader GCSE the review recommended.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids', p: 'Where younger learners start.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'How we teach Python.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave a number and we will call at a UK time that suits you. Tell us her age and what she enjoys; the class checks her level and ends with a first project idea.',
    readFirst: 'Reading first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">list of courses</a>, and <a class="ag-inline-link" href="/student-labs">projects our students have finished</a>.',
    note: 'WhatsApp from a UK phone is the quickest way to reach us. We are in India, so our number begins +91, and there is no UK office.',
    formNote: 'Free first class, no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Girls in coding', links: [
        { href: '/cyberfirst-girls-competition-preparation', label: 'CyberFirst Girls' },
        { href: '/mathematical-olympiad-for-girls-preparation', label: 'Mathematical Olympiad for Girls' },
        { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Mixed classes, placed by ability, built to keep going'
  },

  personalityCss: `
.ag-root.ag-agu .ag-hero h1 { letter-spacing: -0.021em; font-weight: 690; }
.ag-root.ag-agu .ag-capsule { border-left-width: 5px; border-radius: 7px; }
.ag-root.ag-agu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-agu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-agu .ag-table th:first-child { width: 32%; }
.ag-root.ag-agu .ag-band-head h3 { letter-spacing: -0.007em; }
`,

  mustMention: ['20% for boys versus 6% for girls', '22.6%', '35.7%', '27.8%', '1.11', 'Curriculum and Assessment Review', 'mixed', 'placed by ability', 'Python', 'AI', '17%'],

  dossier: {
    curriculumAuthority: 'England, girls in computing. Curriculum and Assessment Review: Final Report (November 2025): GCSE Computer Science entries "plateaued at 12-13%"; "take-up of GCSE Computer Science is now 20% for boys versus 6% for girls"; students "achieved 0.72 of a grade less in GCSE Computer Science compared to their other subjects"; girls "typically achieved 1.11 of a grade lower than in their other subjects"; factors "gender stereotyping of computing and related careers", "pedagogy and resources"; GCSE "perceived to be less relevant to girls"; broader GCSE in Computing recommended. NCCE, Exam results 2025: female share 21.1% (2023), 21.9% (2024), 22.6% (2025); top grades 29.6% overall, girls 35.7%, boys 27.8%. Ofqual provisional entries summer 2026 (9 June 2026): GCSE computing 89,610 to 83,330, down 7.0%, largest percentage fall of 15 EBacc subjects. DSIT cyber skills 2025: "Only 17% of the cyber security workforce was female compared to 30% of the digital workforce and 48% of the UK workforce."',
    localProject: 'Girls who take computer science do well; most never take it. The page sets out uptake (6% of girls against 20% of boys; 22.6% of entries), results (girls 35.7% top grades against boys 27.8% in 2025; the relative-grade finding of 1.11 for girls read as a statement about the subject), the review\'s named factors, and the cyber workforce figure, then answers with teaching choices that are not about girls: mixed classes placed by ability, a steady teacher, projects worth finishing, and an honest try before Year 9 options. No girls-only classes and no claim that girls learn differently. Lesson family: participation data read as a starting-and-persisting problem, not an ability problem.',
    requiredMentions: ['6% for girls', '22.6%', 'mixed', 'placed by ability'],
    sources: [
      { claim: 'Curriculum and Assessment Review: Final Report (November 2025): take-up by sex, relative grades, factors, perceived relevance, broader GCSE.', url: 'https://www.gov.uk/government/publications/curriculum-and-assessment-review-final-report' },
      { claim: 'National Centre for Computing Education, Exam results 2025: female share of entries and top-grade rates by sex.', url: 'https://teachcomputing.org/blog/gcse-results-2025' },
      { claim: 'Ofqual, Provisional entries for GCSE, AS and A level: summer 2026: computing entries and change.', url: 'https://www.gov.uk/government/statistics/provisional-entries-for-gcse-as-and-a-level-summer-2026-exam-series/provisional-entries-for-gcse-as-and-a-level-summer-2026-exam-series' },
      { claim: 'DSIT, Cyber security skills in the UK labour market 2025: female share of cyber, digital and UK workforces.', url: 'https://www.gov.uk/government/publications/cyber-security-skills-in-the-uk-labour-market-2025/cyber-security-skills-in-the-uk-labour-market-2025' }
    ],
    rejectedClaims: [
      'That girls learn differently or need a different teaching method: never claimed.',
      'Girls-only classes: not offered; classes are mixed and placed by ability.',
      'The NCCE blog\'s boy and girl entry counts: inconsistent with its own percentages, so not used.',
      'A sex breakdown of the 2026 provisional entries: Ofqual gives none, so none is inferred.',
      'Scotland, Wales and Northern Ireland figures: not read; the figures are for England.',
      'Any promise about grades or careers: none made.'
    ]
  }
};
