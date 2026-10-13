'use strict';
// Victorian selective entry high schools exam: Mathematics and Quantitative Reasoning practice (ag- exam
// door, Australia cluster Phase 3, row 47). Facts read raw on 7 October 2026: vic.gov.au Selective entry high
// schools (four schools; candidates in Year 8; approximately 1,000 places for Year 9 entry; ACER manages
// applications and offers; exam in June; Year 9 entry in 2027 exam held Saturday 20 June 2026; "The required
// knowledge in any section will not exceed that found in the Year 8 curriculum.") and ACER's Victorian
// selective entry site, selectiveentry.acer.org/vic (important dates 2026; Prepare page: exam format with
// Mathematics and Quantitative Reasoning 60 mins, Reading and Verbal Reasoning 55 mins, Writing 40 mins,
// tasks 2 hours 35 minutes, about four hours in all; answer booklet with shaded multiple-choice answers;
// "There is no need for your child to practice or revise for the exam."; "It is not unusual for candidates
// to only answer half the questions correctly and many do not finish."; Exam day page: calculators not
// permitted; misconduct includes discussing exam content with tutoring companies or coaching colleges).
// Lesson family: unit analysis, letting units cancel in rate problems (checked free site-wide, 7 October
// 2026). Practice problems are our own. No admissions, selection or school-choice advice.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VIC SELECTIVE EXAM', label: 'Victorian selective entry exam maths', blurb: 'The 60-minute Mathematics and Quantitative Reasoning test sat in Year 8, what ACER says about preparation, and rate problems solved by letting units cancel.' },
  slug: 'victorian-selective-entry-exam-maths-practice',
  code: 'vsem',
  accent: '#9C384C',
  accentRationale: 'Victorian selective exam: a dusty rose red (5.5:1 on #EDE7DA), at least 13 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Victorian selective entry exam maths practice',
  title: 'Victorian Selective Entry Exam Maths Practice | Year 8',
  description: 'Victorian selective entry exam maths: the 60-minute Mathematics and Quantitative Reasoning test in Year 8, ACER\'s own advice, and unit-analysis practice.',
  ogDescription: 'The maths part of Victoria\'s selective entry high school exam, from ACER and the Victorian Government, with honest advice and rate problems where the units do the thinking.',
  twitterDescription: 'Victorian selective exam maths: the format, ACER\'s advice and unit-analysis practice.',
  pageName: 'Victorian Selective Entry Exam Maths Practice',
  webPageDescription: 'A guide for Victorian Year 8 families to the Mathematics and Quantitative Reasoning test in the selective entry high schools exam: format and rules from ACER and the Victorian Government, ACER\'s view on preparation, and original unit-analysis problems.',
  courseDescription: 'Live online maths classes for Victorian students in Years 7 and 8 covering rates, ratio, algebra and measurement from the curriculum, taught for understanding rather than as exam coaching.',
  crumbs: [{ name: 'Vibe coding and AI agents classes in Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' }],
  crumbLabel: 'Selective entry exam maths',
  navLinks: [
    { href: '#exam', label: 'The exam' },
    { href: '#acer', label: 'ACER on preparing' },
    { href: '#units', label: 'Units cancel' },
    { href: '#paper', label: 'On paper' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; Selective entry high schools exam &middot; Year 8',
  h1: 'Victorian selective entry exam maths practice',
  lede: 'Victoria\'s four selective entry high schools take students into Year 9 through a single exam sat in Year 8. The first test of the day is Mathematics and Quantitative Reasoning: 60 minutes, multiple choice, answered by shading a paper booklet, with no calculator. This page sets out the format exactly as ACER and the Victorian Government describe it, shares ACER\'s own frank advice about preparation, and teaches one reasoning habit that suits quantitative questions well: writing the units into every step so they cancel and guide the calculation. It offers no admissions or school-choice advice, and promises no result.',
  secondaryCta: { href: '#units', label: 'Try the unit problems' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 7 or 8 child, on rates and reasoning.',
  heroNote: 'Format from ACER and vic.gov.au &middot; Problems written by us &middot; No admissions advice',
  spec: [
    ['Schools', 'Four selective entry high schools'],
    ['Sat in', 'Year 8, for Year 9 entry'],
    ['First test', 'Mathematics and Quantitative Reasoning'],
    ['Maths time', '60 minutes'],
    ['Answers', 'Shaded in a paper booklet'],
    ['Calculator', 'Not permitted'],
    ['Knowledge level', 'Up to the Year 8 curriculum'],
    ['Run by', 'ACER for the Department']
  ],
  capsuleQ: 'In short',
  capsule: 'The Victorian selective entry high schools exam is sat by Year 8 students seeking a Year 9 place. Its first test, Mathematics and Quantitative Reasoning, lasts 60 minutes and is answered in a paper booklet; calculators are not permitted. The Victorian Government says required knowledge will not exceed the Year 8 curriculum. ACER runs the exam and says there is no need to practise or revise.',

  picks: {
    eyebrow: 'Maths worth having',
    h2: 'Three courses for strong Years 7 and 8 students',
    lede: 'Chosen for rates, ratio and reasoning, which matter in Year 9 regardless of school.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'VSE / 01', title: 'Years 7 to 9 maths', note: 'Rates, ratio, algebra, measurement and geometry, taught with reasons.' },
      { course: 'algebra-foundations-masterclass', code: 'VSE / 02', title: 'Algebra foundations', note: 'Expressions and equations as tools for reasoning.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'VSE / 03', title: 'Competition maths', note: 'Unfamiliar problems for students who enjoy a challenge.' }
    ]
  },

  sections: [
    {
      id: 'exam', tint: 'tint', eyebrow: 'The exam, from ACER and the government',
      h2: 'Sixty minutes of maths and quantitative reasoning',
      lede: 'Read at selectiveentry.acer.org and vic.gov.au on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'The exam sequence, as ACER publishes it', head: ['Part', 'Time'], rows: [
          ['Mathematics and Quantitative Reasoning', '60 minutes'],
          ['Break', '20 minutes'],
          ['Reading and Verbal Reasoning', '55 minutes'],
          ['Short break', '5 minutes'],
          ['Writing (two tasks)', '40 minutes'],
          ['Exam tasks in total', '2 hours 35 minutes, about 4 hours with registration and breaks']
        ] },
        { kind: 'two', mt: true,
          left: [
            'ACER describes the two halves of the first test separately. Mathematics "assesses year-level appropriate mathematical knowledge and reasoning, as well as the application of Mathematics to real-world contexts". Quantitative Reasoning "assesses the ability to think and reason using numbers, patterns, and shapes, in both abstract and real-world contexts."',
            'The Victorian Government adds that "The required knowledge in any section will not exceed that found in the Year 8 curriculum."'
          ],
          right: [
            'The four schools are Nossal High School in Berwick and Suzanne Cory High School in Werribee, both co-educational, The Mac.Robertson Girls\' High School in Melbourne and Melbourne High School in South Yarra. The government says approximately 1,000 Year 9 places are available across them each year.',
            'For Year 9 entry in 2027, ACER\'s dates were: applications from Monday 2 March 2026, closing Friday 24 April 2026, and the exam on Saturday 20 June 2026.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://selectiveentry.acer.org/vic/prepare" rel="noopener" target="_blank">ACER, Prepare: exam format</a>; <a class="ag-inline-link" href="https://selectiveentry.acer.org/vic" rel="noopener" target="_blank">ACER, Victorian Selective Entry High Schools</a>; <a class="ag-inline-link" href="https://www.vic.gov.au/selective-entry-high-schools" rel="noopener" target="_blank">vic.gov.au, Selective entry high schools</a>. Checked on 7 October 2026. We have no link with ACER or the Department.' }
      ]
    },
    {
      id: 'acer', tint: 'deep', eyebrow: 'What ACER says about preparing',
      h2: 'No need to practise or revise, in ACER\'s words',
      lede: 'This is the most useful paragraph on the page for any family considering paid help.',
      body: [
        { kind: 'capsule', q: 'From ACER\'s Prepare page', p: '"There is no need for your child to practice or revise for the exam." ACER offers a set of sample questions so children can see the style and format, and notes that they are not necessarily reflective of the exam\'s difficulty.' },
        { kind: 'two', mt: true,
          left: [
            'ACER also sets expectations honestly: "It is not unusual for candidates to only answer half the questions correctly and many do not finish." The exam is designed to identify high-ability students, so not finishing is normal, not a failure.',
            'Its tips for parents are about calm: a good night\'s sleep, no unnecessary pressure, and realistic expectations.'
          ],
          right: [
            'There is a further point families should know. ACER\'s exam rules list, among examples of misconduct, discussing exam content with tutoring companies, coaching colleges or other candidates. Any honest teacher will refuse to collect or share exam questions, and so do we.',
            'Our classes teach the Years 7 and 8 mathematics a strong student benefits from anyway: rates, ratio, algebra and problem solving. We are not exam coaching, and we will say so in the free trial.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://selectiveentry.acer.org/vic/prepare" rel="noopener" target="_blank">ACER, Prepare</a>; <a class="ag-inline-link" href="https://selectiveentry.acer.org/vic/exam-day" rel="noopener" target="_blank">ACER, Exam day: rules and misconduct</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'units', tint: '', eyebrow: 'Problems we wrote',
      h2: 'Unit analysis: let the units cancel',
      lede: 'Write every quantity with its unit, and treat units like numbers that can be multiplied and divided. When the unwanted units cancel and the wanted one remains, the calculation is set up correctly.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Rates are fractions', p: '12 litres per minute is 12 L over 1 min. Written as a fraction, it can be multiplied or flipped like any other.' },
          { h3: 'Cancel what you do not want', p: 'To find minutes from litres, divide litres by litres per minute. The litres cancel and minutes are left.' },
          { h3: 'Convert by multiplying by one', p: '1,000 m over 1 km equals one, so multiplying by it changes the unit without changing the amount.' }
        ] },
        { kind: 'table', caption: 'Original Years 7 and 8 rate problems, set up with units', head: ['Problem', 'Set-up with units', 'Answer'], rows: [
          ['A tap fills a tank at 12 litres per minute. How long to fill 300 litres?', '300 L divided by (12 L per min): litres cancel', '25 minutes'],
          ['A car uses 7 litres per 100 km. How many litres for 350 km?', '350 km times (7 L per 100 km): kilometres cancel', '24.5 litres'],
          ['Convert 72 km per hour into metres per second.', '72 km per h times (1,000 m per km) times (1 h per 3,600 s)', '20 metres per second'],
          ['A printer prints 18 pages per minute. How many pages in 2.5 hours?', '2.5 h times (60 min per h) times (18 pages per min)', '2,700 pages'],
          ['Walking at 5 km per hour, how many minutes to walk 1.5 km?', '1.5 km divided by (5 km per h) gives 0.3 h; times 60 min per h', '18 minutes'],
          ['A recipe uses 250 g of rice for 2 serves. How much rice for 7 serves?', '7 serves times (250 g per 2 serves)', '875 grams']
        ] },
        { kind: 'p', text: 'The third problem is the one students most often get wrong by guessing whether to multiply or divide by 3.6. With units written in, there is nothing to guess: kilometres must cancel, so the 1,000 metres per kilometre goes on top; hours must cancel, so the 1 hour per 3,600 seconds goes on top as well. The arithmetic then reduces to 72,000 divided by 3,600, which is 20.' },
        { kind: 'p', text: 'The walking problem shows a second advantage. Dividing 1.5 kilometres by 5 kilometres per hour leaves hours, because kilometres cancel; the answer 0.3 is therefore 0.3 of an hour, not 0.3 of anything else. Students who drop units often write 0.3 minutes or stop at 0.3 altogether. Keeping the unit forces the last conversion, 0.3 hours times 60 minutes per hour, which gives 18 minutes. The same discipline protects every multi-step rate question in Years 7 and 8, from fuel use to flow rates to speed.' },
        { kind: 'p', text: 'Unit analysis also works as a check in a multiple-choice test. If an option is in the wrong unit, or would need the units to multiply into something meaningless such as litres times minutes, it can be ruled out before any calculation.' }
      ]
    },
    {
      id: 'paper', tint: 'tint', eyebrow: 'A paper exam',
      h2: 'Shading answers in a booklet',
      lede: 'Unlike the computer-based tests in some other states, Victoria\'s exam is answered on paper.',
      body: [
        { kind: 'two',
          leftH3: 'What ACER describes',
          left: [
            'Candidates record every answer in the supplied answer booklet. For multiple-choice questions they shade in their answer, following the instructions so machine scanners can read it.',
            'Before the exam begins, the administrator goes through practice examples of how to use the booklet, and students may ask questions if unsure of a task.'
          ],
          rightH3: 'Habits worth building',
          right: [
            'Work out on paper, then shade carefully. A misaligned row of answers costs more than any hard question.',
            'Move on from a question that is taking too long; ACER says many candidates do not finish.',
            'Write units next to numbers in working, so a rushed calculation still carries its own check.'
          ] },
        { kind: 'p', text: 'ACER publishes a set of sample questions for families to download. They are there to show the style and layout of the exam rather than its difficulty, and a single calm look at them, with the answer booklet procedure explained, is all most Year 8 students need before the day.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Quantitative reasoning',
    h2: 'Four rungs across Years 7 and 8',
    lede: 'Strong students usually climb these through ordinary, good maths teaching.',
    table: { caption: 'Reasoning with units and rates', head: ['Rung', 'The student can', 'Secure when'], rows: [
      ['1. Rates as fractions', 'Write a rate such as 12 L per minute as a fraction', 'Sets up the tank problem without guessing'],
      ['2. Single conversions', 'Multiply by a fraction equal to one', 'Converts 2.5 hours to minutes in one line'],
      ['3. Chained conversions', 'Link two or three conversions', 'Converts km per hour to m per second confidently'],
      ['4. Checking by units', 'Rule out answers with impossible units', 'Explains why litres times minutes cannot be an answer']
    ] },
    left: { h3: 'Keep it in proportion', ps: [
      'ACER asks parents not to place unnecessary pressure on children and to keep expectations realistic. We agree.',
      'One or two lessons a week of genuinely interesting maths is plenty for a Year 8 student.'
    ] },
    right: { h3: 'Related Victorian pages', ps: [
      'For Melbourne families interested in AI and coding, see <a class="ag-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents in Melbourne</a>.',
      'NAPLAN for Years 7 and 9 is covered on <a class="ag-inline-link" href="/naplan-year-7-numeracy-practice">NAPLAN Year 7 numeracy</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for Years 7 and 8',
    h2: 'Maths courses for capable middle-years students',
    lede: 'Grouped by focus. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Core', sub: 'Rates, ratio, algebra', courses: [
        { code: 'VSE / C / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'The Years 7 to 9 curriculum in depth.' },
        { code: 'VSE / C / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations for real problems.' },
        { code: 'VSE / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance with reasoning.' }
      ] },
      { num: 'II', h3: 'Reasoning', sub: 'Unfamiliar problems', courses: [
        { code: 'VSE / R / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems that reward clear thinking.' },
        { code: 'VSE / R / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Patterns and logical steps.' },
        { code: 'VSE / R / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Rates and patterns modelled in code.' }
      ] },
      { num: 'III', h3: 'Ahead', sub: 'For students ready for more', courses: [
        { code: 'VSE / A / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Years 9 and 10 content.' },
        { code: 'VSE / A / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Accurate calculation without a device.' },
        { code: 'VSE / A / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Quick methods with checks.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'Live classes for Victorian students',
    lede: 'Our teachers are based in India, which is behind Melbourne. During daylight saving a 5 pm Melbourne class starts at 11.30 am India time, so after-school times are easy to keep.',
    slots: [
      { time: 'Weekday evening', l: 'After school and sport, for most Year 8 students.' },
      { time: 'Weekend', l: 'For families with busy weeknights.' },
      { time: 'Holidays', l: 'Short blocks on rates or algebra.' }
    ],
    cells: [
      { h3: 'Units in every line', p: 'Students write units beside numbers until it becomes automatic.' },
      { h3: 'Reasons out loud', p: 'Each answer comes with an explanation of the set-up.' },
      { h3: 'Fifteen to twenty per class', p: 'Students grouped by current level.' },
      { h3: 'One-to-one option', p: 'For a student wanting focused help.' },
      { h3: 'Never exam content', p: 'We do not collect or share exam questions, in line with ACER\'s rules.' },
      { h3: 'No selection promises', p: 'Offers are made through ACER\'s process; we make no claims about them.' }
    ]
  },

  projectsH2: 'Student work',
  projectsLede: 'Things our learners built for the joy of it. See the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Victorian families are billed monthly in US dollars, our single rate outside India. Nothing up front, and you can stop after any month.',
    free: ['A full trial lesson', 'Straight advice about whether classes would help', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'A regular teacher', 'Reasoned feedback', 'Certificate on completion'],
    one: ['A teacher for one student', 'Work on chosen topics', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions about the selective entry exam',
    h2: 'Victorian families ask us',
    items: [
      { q: 'How long is the maths test in the Victorian selective entry exam?', a: 'ACER lists Mathematics and Quantitative Reasoning as 60 minutes, the first test of the exam.' },
      { q: 'Is the Victorian selective exam on paper?', a: 'Yes. Candidates record answers in a supplied answer booklet and shade multiple-choice answers so scanners can read them.' },
      { q: 'Can students use a calculator?', a: 'No. ACER lists calculators among items candidates are not permitted to bring into the venue.' },
      { q: 'What maths is in the exam?', a: 'The Victorian Government says required knowledge in any section will not exceed the Year 8 curriculum. ACER says Mathematics tests year-level knowledge and reasoning, and Quantitative Reasoning tests reasoning with numbers, patterns and shapes.' },
      { q: 'Does my child need to practise?', a: 'ACER says there is no need for a child to practise or revise for the exam, and offers sample questions to show the style and format.' },
      { q: 'Is it normal not to finish?', a: 'Yes. ACER says it is not unusual for candidates to answer only half the questions correctly and that many do not finish.' },
      { q: 'What is unit analysis?', a: 'Writing units beside every quantity and multiplying or dividing them like numbers, so unwanted units cancel and the answer appears in the unit you need.' },
      { q: 'When is the exam?', a: 'For Year 9 entry in 2027 it was held on Saturday 20 June 2026. ACER publishes dates for each year on its Victorian selective entry site.' },
      { q: 'Can you advise on school choice or offers?', a: 'No. We give no admissions, selection or school-choice advice.' },
      { q: 'What time would lessons be?', a: 'We agree a weekly time after the free trial. During daylight saving Melbourne is five and a half hours ahead of India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Victorian students',
    lede: 'Coding, NAPLAN and senior maths.',
    items: [
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Vibe coding and AI agents in Melbourne', p: 'AI-era coding for teens and adults.' },
      { href: '/naplan-year-7-numeracy-practice', label: 'NAPLAN Year 7 numeracy', p: 'Proportion and the calculator split.' },
      { href: '/naplan-year-9-numeracy-practice', label: 'NAPLAN Year 9 numeracy', p: 'Algebra checked by substitution.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live lessons for all years.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests for strong students.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Problems beyond the curriculum.' }
    ]
  },

  start: {
    h2: 'Book a free Years 7 and 8 maths class',
    lede: 'Tell us where your child is strong and where they would like a challenge. The trial is a real lesson, and we will be candid about whether further classes are worthwhile.',
    readFirst: 'Browsing first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> compares every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson in detail.',
    note: 'WhatsApp is the quickest channel. Our +91 number is Indian because we teach from India and run no Australian office.',
    formNote: 'No card details, no commitment. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Victoria', links: [
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI in Melbourne' },
        { href: '/naplan-year-7-numeracy-practice', label: 'NAPLAN Year 7' },
        { href: '/naplan-year-9-numeracy-practice', label: 'NAPLAN Year 9' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/maths-challenges', label: 'Maths challenges' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Maths taught for its own sake; no selection promised'
  },

  personalityCss: `
.ag-root.ag-vsem .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.5rem); }
.ag-root.ag-vsem .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-vsem .ag-capsule { border-left-width: 5px; }
.ag-root.ag-vsem .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vsem .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vsem .ag-table td { line-height: 1.55; }
.ag-root.ag-vsem .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-vsem .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'vic.gov.au Selective entry high schools, read 7 October 2026: four schools (Nossal High School, co-educational, Berwick; Suzanne Cory High School, co-educational, Werribee; The Mac.Robertson Girls\' High School, Melbourne; Melbourne High School, South Yarra); "Each year approximately 1,000 places are available for Year 9 entry"; candidates in Year 8; ACER manages applications and offers; exam in June; Year 9 Entry in 2027 exam held Saturday 20 June 2026; "The required knowledge in any section will not exceed that found in the Year 8 curriculum." ACER selectiveentry.acer.org/vic: important dates 2026 (applications open Monday 2 March 2026, close Friday 24 April 2026, exam Saturday 20 June 2026, round 1 offers Monday 3 August 2026). Prepare page: tasks 2 hours 35 minutes, about four hours to administer; Mathematics and Quantitative Reasoning (60 mins), Break (20 mins), Reading and Verbal Reasoning (55 mins), Short break (5 mins), Writing (40 mins), two writing tasks; Mathematics and Quantitative Reasoning descriptions quoted; answer booklet, shade multiple-choice; "There is no need for your child to practice or revise for the exam."; sample questions "not necessarily reflective of the difficulty"; "It is not unusual for candidates to only answer half the questions correctly and many do not finish." Exam day page: calculators not permitted; misconduct includes "Discussing exam content with tutoring companies, coaching colleges, or other candidates". Melbourne daylight saving UTC+11; India UTC+5:30.',
    localProject: 'Original Years 7 and 8 unit-analysis problems: 300 L at 12 L per minute takes 25 minutes; 350 km at 7 L per 100 km uses 24.5 L; 72 km per hour is 20 m per second; 18 pages per minute for 2.5 hours gives 2,700 pages; 1.5 km at 5 km per hour takes 18 minutes; 250 g of rice per 2 serves gives 875 g for 7 serves.',
    requiredMentions: ['unit analysis', 'Mathematics and Quantitative Reasoning', 'Year 8 curriculum', 'Saturday 20 June 2026', 'There is no need for your child to practice or revise for the exam', 'approximately 1,000', '20 metres per second', '2,700 pages', 'Suzanne Cory High School'],
    sources: [
      { claim: 'vic.gov.au, Selective entry high schools: the four schools, places, eligibility year, ACER role, exam timing and curriculum level.', url: 'https://www.vic.gov.au/selective-entry-high-schools' },
      { claim: 'ACER, Victorian Selective Entry High Schools: important dates 2026.', url: 'https://selectiveentry.acer.org/vic' },
      { claim: 'ACER, Prepare: exam format, answer booklet, preparation advice, sample questions, expectations.', url: 'https://selectiveentry.acer.org/vic/prepare' },
      { claim: 'ACER, Exam day: items not permitted including calculators; misconduct rules.', url: 'https://selectiveentry.acer.org/vic/exam-day' }
    ],
    rejectedClaims: [
      'Selection categories, equity places, source-school caps and principal discretion: published by the government but left out, because this page gives no admissions advice.',
      'Exam dates for Year 9 entry in 2028: not yet read, so only the 2026 dates appear.',
      'Number of questions in the Mathematics and Quantitative Reasoning test: not stated on the pages read.',
      'Any reproduction of ACER sample questions: refused; all problems are original.',
      'Any claim that classes improve selection outcomes: refused.'
    ]
  }
};
