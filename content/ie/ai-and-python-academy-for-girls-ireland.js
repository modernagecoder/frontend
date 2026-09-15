'use strict';
// AI and Python academy for girls, Ireland (ag- door, Ireland cluster, Phase 2).
// HARD RULES: never claim girls learn differently; never offer girls-only
// batches. Classes are mixed and placed by ability; the page speaks to girls
// and their parents about representation and about keeping going. Facts read at
// primary sources, 16 September 2026: Eurostat isoc_sks_itsps (women 22.0% of
// ICT specialists employed in Ireland in 2025, estimate; EU 19.5% in 2025);
// HEA Key Facts & Figures, Focus on Gender (women 18.5% of ICT enrolments in
// 2016/17, 23.1% in 2022/23; ICT 76% male); SFI/Lero, 28 April 2021 (18% of
// ICT degrees and 20% of CS degrees awarded to women over seven years);
// Research Ireland, 20 April 2026, on the CodePlus report: 23,000 participants
// to date and 6,450 in 2024/25, of whom 3,982 attended coding workshops (more
// than 700 in 2024/25) and 18,018 career talks were given; more than 30%
// intended to pursue Computer Science, "only 17% ultimately applied" two years
// later; "sustained engagement ... play a critical role". Teen-Turn: "3000+
// girls from Junior Cert to Job". CSO, 5 December 2025: 47% of male and 37% of
// female internet users had used generative AI (a participation gap only).
// CodePlus's start year is contested (2014 or 2015): written as the mid-2010s.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'GIRLS IN CODING', blurb: 'Who studies and works in computing in Ireland, why interest fades, and a mixed class that keeps a learner going.' },
  slug: 'ai-and-python-academy-for-girls-ireland',
  code: 'agi',
  accent: '#5A311A',
  accentRationale: 'Girls in coding, Ireland: a deep bog-oak brown from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'AI and Python academy for girls, Ireland',
  title: 'AI and Python Academy for Girls in Ireland | Live Online',
  description: 'AI and Python classes for girls in Ireland, taught live online in mixed groups placed by ability, with real projects and a path that lasts. First class free.',
  ogDescription: 'Women are about a fifth of Ireland\'s ICT specialists, and Irish programmes find that girls\' interest in computing fades without sustained support. A weekly class is built for exactly that.',
  twitterDescription: 'AI and Python for girls in Ireland: mixed live classes placed by ability, with the same teacher each week. First class free.',
  pageName: 'AI and Python Academy for Girls in Ireland',
  webPageDescription: 'For girls in Ireland who want to learn Python and AI, and their parents: who studies and works in computing in Ireland, what Irish programmes have learned about keeping interest alive, and live mixed classes placed by ability.',
  courseDescription: 'Live online Python and AI classes for learners in Ireland, girls and boys together, placed by ability, with the same teacher each week and projects that build towards third level.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'AI and Python for girls, Ireland',
  navLinks: [
    { href: '#numbers', label: 'The numbers' },
    { href: '#keep', label: 'Keeping interest' },
    { href: '#how', label: 'Our classes' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Girls in coding &middot; Live online',
  h1: 'AI and Python academy for girls in Ireland',
  lede: 'In Ireland, as across Europe, women are a minority in computing: about a fifth of the people working as ICT specialists and under a quarter of the students in ICT courses. Irish programmes have worked hard on this, and they have learned something important: it is not difficult to spark a girl\'s interest in coding, but it is difficult to keep it. One national initiative found that while more than 30% of its participants intended to study Computer Science, only 17% applied two years later. This page is for girls in Ireland who want to learn Python and AI, and for their parents. It sets out the numbers as the official sources give them, what Irish programmes have found, and how a weekly class can supply the one thing short programmes cannot: years of steady, visible progress. Our classes are for everyone and are mixed; we do not run separate classes for girls, and we do not teach girls differently. We teach every learner well.',
  secondaryCta: { href: '#keep', label: 'Why interest fades' },
  wa: 'Hello Modern Age Coders, I would like a free first class in Python and AI for my daughter in Ireland.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; mixed classes, placed by ability',
  spec: [
    ['For', 'Girls aged 6 to 18, and adults'],
    ['Classes', 'Mixed, placed by ability'],
    ['Learns', 'Python, data, AI'],
    ['Teacher', 'The same one each week'],
    ['Groups', 'Five to ten, or one to one'],
    ['Builds', 'A portfolio for third level'],
    ['Hours', 'After school, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Women were an estimated 22.0% of ICT specialists working in Ireland in 2025, and 23.1% of students in ICT courses in 2022/23. Irish programmes such as CodePlus find that girls\' interest in computing is easy to spark but fades without sustained engagement. The strongest thing a class can offer is not a special method but steady progress: the same teacher every week, projects the learner chooses, and a portfolio that grows towards third level. Modern Age Coders teaches Python and AI live online in mixed groups of five to ten placed by ability, or one to one, for ages 6 to 67. We do not run separate classes for girls. Trying a class costs nothing, and staying on costs USD 100 a month in a group or USD 150 a month with a private teacher.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that lead somewhere',
    lede: 'One for younger girls starting typed code, one for teenagers learning Python properly, and one for AI built rather than just used. Each card opens its syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'GIRLS / 01', title: 'Python and AI for Kids', note: 'Real typed code for girls aged about nine to twelve, starting with puzzles and small tools she designs herself.' },
      { course: 'python-complete-masterclass-teens', code: 'GIRLS / 02', title: 'Python for Teens', note: 'Two years of Python with one teacher who follows her projects from the first line to the last, and raises the bar each term.' },
      { course: 'ai-ml-masterclass-teens', code: 'GIRLS / 03', title: 'AI and Machine Learning for Teens', note: 'Machine learning she trains, tests and explains herself, the grounding a third-level Computer Science or AI course expects.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The numbers',
      h2: 'Who studies and works in computing in Ireland',
      lede: 'These are figures about participation: who takes the courses and who holds the jobs. They say nothing about ability, and nothing on this page should be read that way.',
      body: [
        { kind: 'table', caption: 'Women in Irish computing, by source', head: ['Measure', 'Figure', 'Source'], rows: [
          ['Women among ICT specialists employed in Ireland, 2025', '22.0% (an estimate)', 'Eurostat'],
          ['Women among ICT specialists employed in the EU, 2025', '19.5%', 'Eurostat'],
          ['Women among students in ICT courses, 2016/17', '18.5%', 'Higher Education Authority'],
          ['Women among students in ICT courses, 2022/23', '23.1%', 'Higher Education Authority'],
          ['Share of ICT students who were male, 2022/23', '76%, the highest of any field', 'Higher Education Authority'],
          ['Share of ICT degrees awarded to women, over seven years to 2021', '18%, and 20% for Computer Science', 'SFI and Lero, April 2021']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The direction is encouraging: the HEA\'s figures show the share of women in ICT courses rising from 18.5% to 23.1% in six years. The level is still low. In 2025, Eurostat estimates, 38.1 thousand women and 134.8 thousand men worked as ICT specialists in Ireland.',
            'Use of AI tools shows a similar gap. The CSO\'s 2025 survey found that 47% of men and 37% of women who use the internet had used generative AI. That is a gap in use, not in capacity.'
          ],
          right: [
            'The reasons usually offered are about exposure, encouragement and role models, and the evidence from Irish programmes points the same way. None of it suggests that girls need to be taught differently; everything suggests they need to be taught well and given reasons to continue.',
            'That is the gap a long-term class is suited to: not a spark, but steady progress that a learner can see.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_sks_itsps?geo=IE&amp;format=JSON&amp;lang=en&amp;sinceTimePeriod=2019" rel="noopener" target="_blank">Eurostat, ICT specialists by sex (isoc_sks_itsps)</a>; <a class="ag-inline-link" href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=ICT_specialists_in_employment" rel="noopener" target="_blank">Eurostat, ICT specialists in employment</a>; <a class="ag-inline-link" href="https://hea.ie/assets/uploads/2024/05/KEY-FACTS-FIGURES-GENDER-2024-1.pdf" rel="noopener" target="_blank">HEA, Key Facts and Figures: Focus on Gender</a>; <a class="ag-inline-link" href="https://www.sfi.ie/research-news/news/codeplus-women-pathway/" rel="noopener" target="_blank">SFI, 28 April 2021</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/generativeai/" rel="noopener" target="_blank">CSO, Household Digital Consumer Behaviour 2025</a>.' }
      ]
    },
    {
      id: 'keep', tint: 'deep', eyebrow: 'Keeping interest',
      h2: 'What Irish programmes have learned: interest is easy to spark and hard to keep',
      lede: 'Two Irish initiatives have worked with thousands of girls. Their findings are the most useful thing a parent can read on this subject.',
      body: [
        { kind: 'table', caption: 'CodePlus, from the report launched in April 2026', head: ['Measure', 'Figure'], rows: [
          ['Female post-primary students who have taken part to date', '23,000'],
          ['Taking part in 2024/25 alone', '6,450'],
          ['Of the total, students in coding workshops', '3,982, including more than 700 in 2024/25'],
          ['Career talks given by female role models', '18,018'],
          ['Students who intended to pursue Computer Science just after taking part', 'more than 30%'],
          ['Students who applied for Computer Science-related courses two years later', '17%']
        ] },
        { kind: 'two', mt: true,
          left: [
            'CodePlus has run at Trinity College Dublin since the mid-2010s and expanded in 2020 to the University of Galway and the University of Limerick. Its report found the programme "effective in sparking interest", and that "sustained engagement and broader structural factors" play a critical role in what girls finally choose.',
            'Read the numbers closely and the lesson is sharper: most of the 23,000 heard a career talk, a smaller group took the coding workshops, and the intention to study Computer Science roughly halved within two years.'
          ],
          right: [
            'Teen-Turn, an Irish charity, works on the same problem over a longer span. It aims to give teen girls, particularly from underserved areas, hands-on STEM experience, and now supports "3000+ girls from Junior Cert to Job" through after-school activities, work placements and mentoring.',
            'Both point the same way. A short, inspiring experience starts something; what keeps it going is contact that lasts, with real progress along the way. We are not connected with either programme and admire both.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.researchireland.ie/news/minister-naughton-codeplus-report/" rel="noopener" target="_blank">Research Ireland, CodePlus report (20 April 2026)</a>; <a class="ag-inline-link" href="https://codeplus.scss.tcd.ie/index.php/about/" rel="noopener" target="_blank">CodePlus, Trinity College Dublin</a>; <a class="ag-inline-link" href="https://teen-turn.com/" rel="noopener" target="_blank">Teen-Turn</a>. Sources differ on whether CodePlus began in 2014 or 2015.' }
      ]
    },
    {
      id: 'how', tint: 'tint', eyebrow: 'Our classes',
      h2: 'How a weekly class keeps a learner going, for years',
      lede: 'We do not teach girls differently, and we do not run separate classes for girls. What we do is build the conditions that the Irish evidence says matter: continuity, progress and work worth showing.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The same teacher, week after week', p: 'A teacher who knows the learner\'s projects, notices progress and sets the next challenge. Continuity is the thing short programmes cannot offer.' },
          { h3: 'Projects the learner chooses', p: 'A game, a website, a model about something she cares about. Learners who choose their projects keep working on them.' },
          { h3: 'Progress she can see', p: 'Every project is saved in her own portfolio, so a year of work is visible, to her, to her parents and later to a third-level application.' }
        ] },
        { kind: 'table', mt: true, caption: 'What we do, and what we deliberately do not do', head: ['We do', 'We do not'], rows: [
          ['Place every learner by ability, in mixed groups of five to ten', 'Run girls-only or boys-only classes'],
          ['Teach every learner with the same care and the same standard', 'Claim that girls learn in a different way'],
          ['Offer one-to-one lessons to anyone who prefers them', 'Promise outcomes, grades or university places'],
          ['Keep parents informed of progress', 'Replace school subjects or their assessments']
        ] }
      ]
    },
    {
      id: 'parents', tint: '', eyebrow: 'For parents',
      h2: 'Questions worth asking any coding class for your daughter',
      lede: 'The same questions work for any child. They matter a little more when the aim is to keep a learner going for years.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Will she have the same teacher?', p: 'Continuity is what the evidence rewards. A new face each term restarts the relationship every time.' },
          { h3: 'What will she have made by next summer?', p: 'A good class can describe the projects a year from now. Vague answers usually mean vague progress.' },
          { h3: 'How do you move her on?', p: 'Placement should follow her work, not her age. Ask how the class decides she is ready for the next step.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'Five rungs from first code to a third-level portfolio',
    lede: 'The same ladder as every learner climbs, placed by ability. The free first class shows where she starts.',
    table: { caption: 'From first code to AI', head: ['Rung', 'The learner can'], rows: [
      ['1. First programs', 'Build small games and animations and explain how they work'],
      ['2. Typed Python', 'Write and fix Python programs of her own'],
      ['3. Data', 'Load, clean and chart a real dataset, and describe it honestly'],
      ['4. Models', 'Train and test a machine learning model, and say where it fails'],
      ['5. Portfolio', 'Present finished projects in public, ready for a third-level application']
    ] },
    left: { h3: 'Why the portfolio matters', ps: [
      'A portfolio turns a year of lessons into something visible. It is proof of progress for the learner, and evidence for any course or employer later.',
      'How each subject leads to the next is mapped on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around the Irish school years', ps: [
      'Many learners start at primary school or in the Junior Cycle and aim the portfolio at Transition Year and then third level.',
      'The Irish school stages are set out one by one on <a class="ag-inline-link" href="/best-online-coding-classes-ireland">the best online coding classes in Ireland</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses, open to every learner',
    lede: 'Grouped by stage. Every course is mixed and placed by ability; the free first class decides the starting point.',
    bands: [
      { num: 'I', h3: 'Primary school', sub: 'First code and first AI', courses: [
        { code: 'GIRLS / PRIM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Stories and games that she plans on paper first.' },
        { code: 'GIRLS / PRIM / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed code for the senior primary classes.' },
        { code: 'GIRLS / PRIM / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How machines learn from examples, and how they get things wrong.' }
      ] },
      { num: 'II', h3: 'Junior Cycle and Transition Year', sub: 'Python, data and the web', courses: [
        { code: 'GIRLS / JCTY / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Python for the Junior Cycle years, taught thoroughly.' },
        { code: 'GIRLS / JCTY / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Datasets she chooses, cleaned and charted honestly.' },
        { code: 'GIRLS / JCTY / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'A full website, from the page to the database behind it.' }
      ] },
      { num: 'III', h3: 'Senior Cycle and beyond', sub: 'AI and a portfolio', courses: [
        { code: 'GIRLS / SENR / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Her own models, trained on data and checked for mistakes.' },
        { code: 'GIRLS / SENR / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A finished app to show a college or an employer.' },
        { code: 'GIRLS / SENR / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'For adult women starting or returning to code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Mixed classes, placed by ability, on Irish time',
    lede: 'Every class is live with a teacher in India, at one fixed hour each week set in Irish time. India keeps the same clock all year, so the gap to Ireland is five and a half hours from late October to late March and four and a half through the Irish summer. Most girls in Ireland take their class on a weekday after school or on a weekend morning.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Irish time, for primary and post-primary learners.' },
      { time: 'Saturday', l: 'Longer project sessions.' },
      { time: 'Evening', l: 'For older teenagers and adult learners.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'A real task with a real teacher, and an honest placement on the ladder.' },
      { h3: 'Mixed groups by level', p: 'Classes of five to ten learners who share a level, not a gender, joining from Ireland and several other countries.' },
      { h3: 'One to one on request', p: 'For any learner who prefers a teacher to herself.' },
      { h3: 'Continuity', p: 'The same teacher across months and years, the condition Irish programmes found hardest to supply.' },
      { h3: 'Parents informed', p: 'Families hear what has been built and what comes next.' },
      { h3: 'A growing portfolio', p: 'Every project kept, ready for Transition Year, the CAO and beyond.' }
    ]
  },

  projectsH2: 'Published projects from our students',
  projectsLede: 'Four projects our students built and put online. Many more are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews, unedited. Every one was written by a real family or student, without payment.',

  fees: {
    h2: 'Fees',
    lede: 'One price in US dollars, paid month by month, the same for families in every country outside India. No sign-up charge, and she can stop at the end of any month.',
    free: ['A real class with a teacher', 'An honest placement', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Projects reviewed weekly', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Paced to her goals', 'Available to anyone']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What girls and their parents in Ireland ask',
    items: [
      { q: 'Are the classes only for girls?', a: 'No. Our classes are mixed and placed by ability. This page is written for girls and their parents, but every class is open to every learner, and we do not run separate classes for girls.' },
      { q: 'Do you teach girls differently?', a: 'No. We teach every learner with the same care and standard. What Irish evidence points to is not a different method but continuity and visible progress, which a weekly class provides.' },
      { q: 'How many women work in computing in Ireland?', a: 'Eurostat estimates that women were 22.0% of the ICT specialists employed in Ireland in 2025. In higher education, the HEA reports women were 23.1% of ICT students in 2022/23.' },
      { q: 'What is CodePlus?', a: 'An initiative based at Trinity College Dublin that encourages female post-primary students to explore Computer Science through coding workshops, talks and company visits. We are not connected with it.' },
      { q: 'Why does interest fade?', a: 'The CodePlus report found that more than 30% of participants intended to pursue Computer Science, but only 17% applied two years later, and that sustained engagement plays a critical role.' },
      { q: 'Can one-to-one lessons help?', a: 'Some learners prefer a teacher to themselves, and one-to-one lessons are open to anyone at USD 150 a month.' },
      { q: 'Will this help towards Computer Science at third level?', a: 'It builds the skills and the portfolio. We make no promise about places or points; the choice and the application are the learner\'s.' },
      { q: 'What does it cost?', a: 'Nothing for the first class. Afterwards a group place is USD 100 per month and a private teacher USD 150 per month, both in US dollars, without any joining fee or annual commitment.' },
      { q: 'What time of day are classes?', a: 'Whatever weekly hour suits the family, fixed during the free first class; weekday afternoons and weekend mornings are the usual picks. Our teachers are five and a half hours ahead of Irish time in winter and four and a half ahead in summer.' },
      { q: 'What happens once the form is sent?', a: 'A member of our team phones a parent, at a time that works in Ireland, and sets up the free first class. There is no charge unless she decides to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for learners in Ireland',
    lede: 'Related pages for the path ahead.',
    items: [
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'Six checks for choosing any class.' },
      { href: '/leaving-cert-computer-science-grinds-online', label: 'Leaving Cert Computer Science grinds', p: 'For Senior Cycle students taking the subject.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'AI tools, used honestly.' },
      { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI and machine learning classes in Ireland', p: 'Building AI from the first model.' },
      { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo', p: 'The step after a free coding club.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send a parent\'s number and we will phone at a convenient time in Ireland. During the first class she works through a real task with a teacher, and you both see where she stands and what she could build next.',
    readFirst: 'Browse first if you prefer: our <a class="ag-inline-link" href="/how-we-teach">teaching approach</a>, the full set of <a class="ag-inline-link" href="/courses">course syllabuses</a>, and <a class="ag-inline-link" href="/student-labs">what our students have built</a>.',
    note: 'A WhatsApp message from Ireland costs nothing and usually gets the quickest reply. The number is registered in India, where our team works; we keep no office in Ireland.',
    formNote: 'No card and no commitment. One call to book.'
  },

  footer: {
    cols: [
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
        { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo' },
        { href: '/leaving-cert-computer-science-grinds-online', label: 'LC Computer Science grinds' }
      ] },
      { h4: 'Learning', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/best-coding-class-in-the-world', label: 'Eight tests for a class' }
      ] }
    ],
    bottomRight: 'Mixed classes, placed by ability, on Irish time'
  },

  personalityCss: `
.ag-root.ag-agi .ag-hero-grid { gap: clamp(1.2rem, 3.1vw, 2.7rem); }
.ag-root.ag-agi .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-agi .ag-capsule { border-left-width: 6px; }
.ag-root.ag-agi .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-agi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-agi .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-agi .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-agi .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['22.0% (an estimate)', '19.5%', '23.1%', '18.5%', '3,982', '18,018', 'only 17% applied two years later', '3000+ girls from Junior Cert to Job', '47% of men and 37% of women', 'we do not run separate classes for girls']
};
