'use strict';
// ICAS Maths practice online (ag- competition door, Australia cluster Phase 3, row 94).
// Facts read raw on 7 October 2026 at icasassessments.com, fetched with curl's default user agent:
// Year levels and exam papers (Mathematics in Australia, Years 2 to 12; papers Intro and A to J mapped
// to Years 2 to 12; Mathematics questions 30 then 40; times 35 minutes, 45 minutes, then 1 hour),
// the 2026 event calendar (Mathematics sitting window 24 to 28 August; school entries closed Friday
// 24 July, extended for Mathematics to Sunday 16 August, 11:59pm AEST; Parent Payment System), the
// ICAS Mathematics subject page (five learning areas; paper-by-paper examples quoted) and the parent
// registration page (school, ICAS testing centre at Cliftons locations, or an authorised partner).
// "Powered by Janison". Fees (AUD) are not printed. Spine: recurring decimals to fractions, a topic the
// Papers G and H description names; family checked free site-wide on 7 October 2026; results checked
// with Python's Fraction type.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'ICAS MATHS', label: 'ICAS Maths practice', blurb: 'ICAS Mathematics from Year 2 to Year 12: papers, question counts and timing from ICAS Assessments, and a worked topic from the Years 9 and 10 papers.' },
  slug: 'icas-maths-practice-online',
  code: 'icmt',
  accent: '#303F66',
  accentRationale: 'ICAS Maths: a deep slate blue chosen by hand, muted, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'ICAS Maths practice online',
  title: 'ICAS Maths Practice Online | Papers, Timing and Topics',
  description: 'ICAS Maths practice for Years 2 to 12 in Australia: papers Intro to J, question counts and timing from ICAS Assessments, and a worked recurring decimals lesson.',
  ogDescription: 'ICAS Mathematics explained from ICAS Assessments\' own pages: which paper each year sits, 30 or 40 questions in 35 minutes to an hour, the five learning areas, the 2026 sitting window, and a worked topic.',
  twitterDescription: 'ICAS Maths for Years 2 to 12: papers, timing, topics and a worked lesson.',
  pageName: 'ICAS Maths Practice Online',
  webPageDescription: 'A guide for Australian families to ICAS Mathematics: the paper for each year from Year 2 to Year 12, number of questions and time allowed, the five learning areas, the 2026 sitting window and entry routes, and a worked lesson on converting recurring decimals to fractions, a topic named for Papers G and H.',
  courseDescription: 'Live online maths classes for Australian students from Year 2 to Year 12 that build the number, algebra, measurement, geometry and data skills ICAS Mathematics draws on.',
  crumbs: [{ name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'ICAS Maths practice',
  navLinks: [
    { href: '#papers', label: 'Papers' },
    { href: '#content', label: 'Content' },
    { href: '#entry', label: 'Entering' },
    { href: '#decimals', label: 'Worked topic' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; ICAS Mathematics &middot; Years 2 to 12',
  h1: 'ICAS Maths practice',
  lede: 'ICAS Mathematics is a school-based maths assessment that many Australian students sit each August, from Year 2 right through to Year 12. Each year level has its own paper, labelled from Intro to J, and the questions climb in difficulty through the paper so that strong students are stretched rather than simply finishing early. This page sets out which paper each year sits, how many questions and how long, the learning areas the papers cover, and how students enter, all from ICAS Assessments\' own pages. It then works through one topic the senior papers name, turning recurring decimals into fractions, because it is the kind of question that rewards understanding over speed.',
  secondaryCta: { href: '#papers', label: 'Find your child\'s paper' },
  wa: 'Hello Modern Age Coders, I would like a free maths class to prepare for ICAS Mathematics.',
  heroNote: 'From ICAS Assessments\' own pages &middot; Worked topic checked by us &middot; 7 October 2026',
  spec: [
    ['Run by', 'ICAS Assessments, powered by Janison'],
    ['Years in Australia', 'Year 2 to Year 12'],
    ['Papers', 'Intro (Year 2), then A (Year 3) to J (Year 12)'],
    ['Questions', '30 on Intro, 40 on Papers A to J'],
    ['Time', '35 minutes to 1 hour, by paper'],
    ['2026 window', '24 to 28 August'],
    ['Entry routes', 'School, testing centre or authorised partner'],
    ['We offer', 'Live maths classes, not ICAS entry']
  ],
  capsuleQ: 'In short',
  capsule: 'ICAS Mathematics is a maths assessment run by ICAS Assessments for Australian students from Year 2 to Year 12. Year 2 sits the Intro paper of 30 questions in 35 minutes; Years 3 to 12 sit Papers A to J, each with 40 questions, in 45 minutes for Papers A to C and 1 hour from Paper D. In 2026 the Mathematics sitting window was 24 to 28 August.',

  picks: {
    eyebrow: 'For ICAS Mathematics',
    h2: 'Three courses that match the ICAS papers',
    lede: 'One for the primary papers, one for the middle years, one for the senior papers.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'ICMT / 01', title: 'Primary maths, Papers Intro to D', note: 'Number, patterns, measurement and data with reasoning, the ground the primary papers cover.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ICMT / 02', title: 'Middle years, Papers E to H', note: 'Ratios, algebra, angle properties and statistics, the content the Years 7 to 10 papers describe.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'ICMT / 03', title: 'Senior maths, Papers I and J', note: 'Indices, functions, trigonometry and probability for Years 11 and 12.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Which paper, how long',
      h2: 'ICAS Mathematics papers by Australian year level',
      lede: 'ICAS Assessments publishes the paper for each year and the length of each one. These figures are theirs, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'ICAS Mathematics papers for Australian students, questions and time', head: ['Paper', 'Australian year', 'Questions', 'Time'], rows: [
          ['Intro', 'Year 2', '30', '35 minutes'],
          ['A', 'Year 3', '40', '45 minutes'],
          ['B', 'Year 4', '40', '45 minutes'],
          ['C', 'Year 5', '40', '45 minutes'],
          ['D', 'Year 6', '40', '1 hour'],
          ['E', 'Year 7', '40', '1 hour'],
          ['F', 'Year 8', '40', '1 hour'],
          ['G', 'Year 9', '40', '1 hour'],
          ['H', 'Year 10', '40', '1 hour'],
          ['I', 'Year 11', '40', '1 hour'],
          ['J', 'Year 12', '40', '1 hour']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The jump that catches families out is between Paper C and Paper D. Year 6 keeps 40 questions but gains a quarter of an hour, and the content steps up with it. From Paper D upwards, every paper is 40 questions in 1 hour, so a steady pace of about one question every minute and a half is the planning figure.',
            'ICAS Assessments notes that international schools registered with it "should sit the papers according to the Australian year levels", which is why the Australian column is the reference point.'
          ],
          right: [
            'ICAS describes the questions as increasing "in complexity throughout the paper". That changes how to practise: early questions should become quick and reliable, so that time is left for the harder ones at the end, rather than racing to finish.',
            'The school, testing centre or partner running the assessment sets up how and where students sit it. Ask them what to expect on the day, so the format is not a surprise.'
          ] },
        { kind: 'source', html: 'Source: ICAS Assessments, <a class="ag-inline-link" href="https://www.icasassessments.com/icas-year-levels-and-exam-papers/" rel="noopener" target="_blank">ICAS year levels and exam papers</a>, read on 7 October 2026. We are not connected with ICAS Assessments or Janison.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'What is tested',
      h2: 'Five learning areas, rising paper by paper',
      lede: 'ICAS Assessments lists the learning areas and gives examples for each paper. The examples below are quoted from its Mathematics page.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The learning areas', p: 'ICAS lists Number and Arithmetic, Algebra and Patterns, Measures and Units, Space and Geometry, and Chance and Data.' },
          { h3: 'The aim', p: 'ICAS says its Mathematics assessments are "designed to provide an objective ranking of students\' performance based on the curricula for the relevant year".' },
          { h3: 'The style', p: 'Questions test "logical reasoning, problem solving and critical thinking", in ICAS\'s words, rather than recall alone.' }
        ] },
        { kind: 'table', mt: true, caption: 'Examples ICAS Assessments gives for selected papers, quoted', head: ['Paper', 'Year', 'Students may be asked to'], rows: [
          ['A', 'Year 3', '"order and compare halves, quarters and eighths, multiply and divide by single digits using different techniques"'],
          ['D', 'Year 6', '"complete number sentences involving all four equations, solve problems involving parallel and perpendicular lines, or interpret and compare column graphs, dot plots and tables"'],
          ['E and F', 'Years 7 and 8', '"solve percentage and ratio problems, interpret authentic graphs to solve linear equations, solve problems using angle sum of triangles and quadrilaterals, or calculate mean, median, mode and range"'],
          ['G and H', 'Years 9 and 10', '"convert terminating and recurring decimals to fractions, factorise linear expressions, solve linear equations graphically and algebraically"'],
          ['I and J', 'Years 11 and 12', '"apply index laws involving integer and fractional indices, solve financial problems using simple and compound interest"']
        ] },
        { kind: 'source', html: 'Quotations: ICAS Assessments, <a class="ag-inline-link" href="https://www.icasassessments.com/products-icas/subjects/mathematics/" rel="noopener" target="_blank">ICAS Mathematics</a>, read on 7 October 2026. The Australian Curriculum content behind these topics is set by ACARA and taught by schools.' }
      ]
    },
    {
      id: 'entry', tint: 'tint', eyebrow: 'Taking part',
      h2: 'How students enter ICAS Mathematics',
      lede: 'ICAS Assessments describes three routes into the assessment. We are not one of them; we teach maths.',
      body: [
        { kind: 'table', caption: 'Entry routes and 2026 dates, from ICAS Assessments', head: ['Route or date', 'What ICAS Assessments says'], rows: [
          ['Through school', 'Schools register and choose the year levels and subjects; parents are invited to enter; students sit the test at school'],
          ['Testing centre', 'If a school does not offer ICAS, students can sit at an ICAS testing centre hosted at Cliftons locations across Australia'],
          ['Authorised partner', 'An approved provider that coordinates the competition locally'],
          ['Parent Payment System', 'Lets parents register and pay for their children\'s entries through the school'],
          ['2026 Mathematics window', '24 to 28 August'],
          ['2026 entry deadline', 'School entries closed Friday 24 July; for Mathematics the date was extended to Sunday 16 August, 11:59pm AEST']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For most families the school route is the only one that matters: if the school runs ICAS, entry comes through a letter or the school\'s portal. Entry fees are in Australian dollars and are set by ICAS Assessments, so we do not reproduce them.',
            'ICAS Assessments also sells past papers through its own shop. We link to the publisher rather than copying any of its questions.'
          ],
          right: [
            'Results and certificates, according to ICAS Assessments, are provided through the school and can also be viewed online. The organisers publish their own guidance on understanding results.',
            'Dates for 2027 were not published when we checked. The August pattern in 2026 is a reasonable guide, and the school will confirm.'
          ] },
        { kind: 'source', html: 'Sources: ICAS Assessments <a class="ag-inline-link" href="https://www.icasassessments.com/event-calendar/" rel="noopener" target="_blank">2026 dates</a> and <a class="ag-inline-link" href="https://www.icasassessments.com/how-to-register-your-child-for-icas-competition/" rel="noopener" target="_blank">how to register your child</a>, read on 7 October 2026.' }
      ]
    },
    {
      id: 'decimals', tint: '', eyebrow: 'A worked topic from Papers G and H',
      h2: 'Turning recurring decimals into fractions',
      lede: 'ICAS Assessments names "convert terminating and recurring decimals to fractions" among the skills for Papers G and H. The Australian Curriculum introduces the idea in Year 8 (AC9M8N03, "recognise terminating and recurring decimals"). Here is the method, with three examples we checked exactly.',
      body: [
        { kind: 'table', caption: 'Three recurring decimals converted to fractions (our examples, checked with exact fractions in Python)', head: ['Decimal', 'Method', 'Fraction'], rows: [
          ['0.272727... (27 repeating)', 'Let x be the decimal. 100x is 27.2727..., so 100x minus x is 27, and 99x is 27', '27 over 99, which simplifies to 3/11'],
          ['0.1666... (6 repeating)', '10x is 1.666... and 100x is 16.666..., so 100x minus 10x is 15, and 90x is 15', '15 over 90, which is 1/6'],
          ['2.3454545... (45 repeating)', '1000x is 2345.4545... and 10x is 23.4545..., so 990x is 2322', '2322 over 990, which simplifies to 129 over 55']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The idea is to multiply by a power of ten that lines the repeating part up with itself, then subtract so the endless tail cancels. The number of repeating digits decides the power: two repeating digits means multiplying by 100, one means 10.',
            'The third example is the one students get wrong. When some digits do not repeat, you need two multipliers, one to move past the non-repeating part and one to line up the repeat. 1000x and 10x give 990x, and only then does the fraction appear.'
          ],
          right: [
            'There is a quick check in multiple-choice conditions. A fraction in simplest form has a terminating decimal only if its denominator has no prime factors other than 2 and 5. So 3/11 and 1/6 must recur, while 1/8 must terminate. Of the unit fractions from 1/2 to 1/12, only 1/2, 1/4, 1/5, 1/8 and 1/10 terminate.',
            'Knowing why the method works makes ICAS questions on this topic quick, and it carries straight into senior maths, where the same subtraction trick appears in geometric series.'
          ] },
        { kind: 'source', html: 'Quotations: ICAS Assessments <a class="ag-inline-link" href="https://www.icasassessments.com/products-icas/subjects/mathematics/" rel="noopener" target="_blank">Mathematics page</a> and ACARA <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Mathematics content 7 to 10</a>, read on 7 October 2026. Examples are ours, checked with exact fractions in Python.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Preparing well',
    h2: 'Four habits for ICAS Mathematics',
    lede: 'Good preparation builds mathematics, not test tricks. These habits help on any paper.',
    table: { caption: 'Preparation habits for ICAS Mathematics', head: ['Habit', 'Why it helps', 'The sign it is secure'], rows: [
      ['Secure the early questions', 'Questions rise in difficulty through the paper', 'The first third of a practice paper is done calmly and correctly'],
      ['Read the whole question', 'Reasoning questions hide the key detail', 'Underlines what is asked before calculating'],
      ['Estimate before choosing', 'Many wrong options are far from the right size', 'Rules out impossible options with a quick estimate'],
      ['Check the answer fits', 'A right method can still give a slipped answer', 'Substitutes the answer back or compares it with the estimate']
    ] },
    left: { h3: 'If your child finds ICAS stressful', ps: [
      'ICAS is designed to stretch strong students, so finding later questions hard is normal, not a warning sign.',
      'Treat it as a challenge and a source of feedback, not a judgement.'
    ] },
    right: { h3: 'Other assessments', ps: [
      'Our <a class="ag-inline-link" href="/australian-mathematics-competition-practice-by-year">AMC by year page</a> covers the Australian Maths Trust\'s competition.',
      'For coding, see <a class="ag-inline-link" href="/icas-digital-technologies-practice">ICAS Digital Technologies practice</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine maths courses for ICAS students',
    lede: 'Grouped by paper range. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Papers Intro to D', sub: 'Years 2 to 6', courses: [
        { code: 'ICMT / P / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for quick, checked answers.' },
        { code: 'ICMT / P / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All strands, with reasoning.' },
        { code: 'ICMT / P / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns and logical thinking.' }
      ] },
      { num: 'II', h3: 'Papers E to H', sub: 'Years 7 to 10', courses: [
        { code: 'ICMT / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Ratios, angles and early algebra.' },
        { code: 'ICMT / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear equations and factorising.' },
        { code: 'ICMT / M / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data displays and chance.' }
      ] },
      { num: 'III', h3: 'Papers I and J', sub: 'Years 11 and 12', courses: [
        { code: 'ICMT / S / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'Indices, functions and trigonometry.' },
        { code: 'ICMT / S / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Financial maths', blurb: 'Simple and compound interest in depth.' },
        { code: 'ICMT / S / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For students who want the hardest questions.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live maths classes for ICAS students across Australia',
    lede: 'Our teachers work from India, behind every Australian time zone. A 4 pm lesson in Canberra during daylight saving begins at 10.30 am India time, so after-school classes are easy for us to schedule.',
    slots: [
      { time: 'Terms 2 and 3', l: 'Steady preparation before the August window.' },
      { time: 'Weekly classes', l: 'One topic area at a time.' },
      { time: 'Holiday blocks', l: 'Focused work on a weak learning area.' }
    ],
    cells: [
      { h3: 'Reasoning first', p: 'Students explain why an answer must be right.' },
      { h3: 'Estimation habit', p: 'Answers are checked against a rough size.' },
      { h3: 'Groups of fifteen to twenty', p: 'Grouped by paper level.' },
      { h3: 'One-to-one option', p: 'For a specific gap or a stretch goal.' },
      { h3: 'Short parent notes', p: 'What was covered and one thing to practise.' },
      { h3: 'No result promises', p: 'We teach maths; the result is the student\'s.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Made by learners for their own reasons, not for a test. See the rest in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families\' reviews, quoted exactly from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families pay monthly in US dollars, the rate we use in every country outside India. No deposit, and you can stop at any month end. ICAS entry is separate and arranged through schools or ICAS Assessments.',
    free: ['A real lesson with a teacher', 'An honest view of your child\'s level', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same teacher every week', 'Work marked and explained', 'A certificate at the end'],
    one: ['A teacher for one student', 'Focused on chosen learning areas', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about ICAS Mathematics',
    h2: 'What Australian families ask',
    items: [
      { q: 'What is ICAS Mathematics?', a: 'A maths assessment run by ICAS Assessments for students from Year 2 to Year 12 in Australia. Each year level sits its own paper, and questions grow harder through the paper.' },
      { q: 'Which ICAS Maths paper will my child sit?', a: 'Year 2 sits the Intro paper, Year 3 Paper A, and so on up to Year 12, which sits Paper J.' },
      { q: 'How many questions are in ICAS Maths, and how long is it?', a: 'The Intro paper has 30 questions in 35 minutes. Papers A to J have 40 questions: 45 minutes for Papers A to C and 1 hour from Paper D (Year 6) upwards.' },
      { q: 'When is ICAS Maths held?', a: 'In 2026 the Mathematics sitting window was 24 to 28 August. Check with the school or ICAS Assessments for the next year.' },
      { q: 'How do students enter ICAS?', a: 'Usually through their school. ICAS Assessments also describes testing centres hosted at Cliftons locations and authorised partners. We are not an entry provider.' },
      { q: 'What areas does ICAS Maths cover?', a: 'Number and Arithmetic, Algebra and Patterns, Measures and Units, Space and Geometry, and Chance and Data.' },
      { q: 'How do you turn a recurring decimal into a fraction?', a: 'Call the decimal x, multiply by a power of ten that lines up the repeating digits, and subtract so the repeating tail cancels. For 0.2727..., 100x minus x is 27, so x is 27 over 99, which is 3/11.' },
      { q: 'Where can students find practice papers?', a: 'ICAS Assessments sells past papers through its own shop. Our classes teach the mathematics with our own examples.' },
      { q: 'Will your classes raise my child\'s ICAS result?', a: 'We do not promise any result or award. We teach the mathematics the papers draw on, with reasoning and checking built in.' },
      { q: 'Are you connected with ICAS Assessments?', a: 'No. We are an independent online school, quoting ICAS Assessments because it runs the assessment.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More maths for Australian students',
    lede: 'Other assessments and our main maths pages.',
    items: [
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Our main maths page for Australia.' },
      { href: '/icas-digital-technologies-practice', label: 'ICAS Digital Technologies', p: 'The coding and computing paper.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC practice by year', p: 'The Australian Maths Trust\'s competition.' },
      { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Maths Years 7 to 10', p: 'The curriculum behind the middle papers.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'The national numeracy test.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest through the year.' }
    ]
  },

  start: {
    h2: 'Book a free maths class for ICAS',
    lede: 'Tell us the year level and which learning areas feel weakest. The free class works on those, with reasoning and estimation, and ends with honest advice.',
    readFirst: 'Would you rather browse? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> has every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is normally the quickest. The number begins with India\'s +91 code; the school operates from India with no Australian office.',
    formNote: 'Free, no card, no obligation. One reply to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/icas-digital-technologies-practice', label: 'ICAS Digital Technologies' },
        { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC by year' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/maths-challenges', label: 'Maths challenges' }
      ] }
    ],
    bottomRight: 'Independent of ICAS Assessments; no result is promised'
  },

  personalityCss: `
.ag-root.ag-icmt .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-icmt .ag-capsule { border-left-width: 5px; }
.ag-root.ag-icmt .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-icmt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-icmt .ag-grid-3 h3 { letter-spacing: -0.004em; }
.ag-root.ag-icmt .ag-spec dd { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'ICAS Assessments pages read 7 October 2026 with curl\'s default user agent. Year levels and exam papers: Mathematics in Australia Years 2 to 12; papers Intro (Year 2), A (3), B (4), C (5), D (6), E (7), F (8), G (9), H (10), I (11), J (12); Mathematics questions Intro 30, A-J 40; time Intro 35m, A-C 45m, D-J 1hr; international schools "should sit the papers according to the Australian year levels". 2026 dates: Mathematics sitting window 24-28 August; school entries close Friday 24 July (11:59pm AEST), extended for Science, Spelling Bee and Mathematics to Sunday 16 August (11:59pm AEST); Parent Payment System. Mathematics subject page: learning areas Number & Arithmetic, Algebra & Patterns, Measures & Units, Space & Geometry, Chance & Data; "designed to provide an objective ranking of students\' performance based on the curricula for the relevant year"; "logical reasoning, problem solving and critical thinking"; questions "increase in complexity throughout the paper"; Paper A, D, E-F, G-H, I-J examples quoted. Registration page: school, ICAS testing centre at Cliftons locations, authorised partner; results through the school and online. Footer: "Powered by Janison". ACARA AC9M8N03 "recognise terminating and recurring decimals".',
    localProject: 'Recurring decimals to fractions, checked with Python Fraction: 0.2727... = 27/99 = 3/11; 0.1666... = 15/90 = 1/6; 2.3454545... = 2322/990 = 129/55. Unit fractions 1/2 to 1/12 that terminate: 1/2, 1/4, 1/5, 1/8, 1/10.',
    requiredMentions: ['AC9M8N03', 'Parent Payment System', '27 over 99', '129 over 55', 'recurring decimal', 'Paper J', '40 questions', 'Sunday 16 August', 'Papers G and H'],
    sources: [
      { claim: 'ICAS Assessments, year levels and exam papers: papers by year, questions and time.', url: 'https://www.icasassessments.com/icas-year-levels-and-exam-papers/' },
      { claim: 'ICAS Assessments, Mathematics subject page: learning areas and paper examples.', url: 'https://www.icasassessments.com/products-icas/subjects/mathematics/' },
      { claim: 'ICAS Assessments, 2026 event calendar: Mathematics window and entry deadlines.', url: 'https://www.icasassessments.com/event-calendar/' },
      { claim: 'ICAS Assessments, how to register your child: school, testing centre and partner routes.', url: 'https://www.icasassessments.com/how-to-register-your-child-for-icas-competition/' },
      { claim: 'ACARA Version 9.0 Mathematics content 7-10: AC9M8N03.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-7-10-v9.docx' }
    ],
    rejectedClaims: [
      'ICAS entry fees: AUD, not printed (one-currency rule).',
      'Award bands or percentages for ICAS results: on a separate page not quoted here.',
      'Any reproduction of ICAS questions: refused; examples are ours.',
      '2027 dates: not published when checked.',
      'Any claim that we are an authorised ICAS partner: refused; we are not.'
    ]
  }
};
