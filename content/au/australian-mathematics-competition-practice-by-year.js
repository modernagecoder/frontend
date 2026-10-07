'use strict';
// Australian Mathematics Competition practice by year (ag- competition door, Australia cluster Phase 3, row 91).
// Facts read raw on 7 October 2026 at the Australian Maths Trust's AMC page (amt.edu.au/amc), fetched
// with curl's default user agent: 2026 dates Tuesday 4 to Thursday 6 August, 60 minutes primary and
// 75 minutes secondary, divisions by year, topics, 30 questions (25 multiple choice, 5 integer), the
// scoring bands (3, 4, 5, then 6 to 10 marks), total 135, no penalty for incorrect responses, award
// criteria, the free Early Primary pilot for Years 1 and 2 (12 to 23 October 2026, standard from 2027),
// sample problem sets. Entry fees (AUD) are not printed. Spine: expected marks under no-penalty
// scoring; family checked free site-wide on 7 October 2026. The arithmetic is ours.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'AMC BY YEAR', label: 'Australian Mathematics Competition by year', blurb: 'The AMC division by division, from the Australian Maths Trust\'s page, with what each year should practise and how the scoring rewards a sensible plan.' },
  slug: 'australian-mathematics-competition-practice-by-year',
  code: 'amcy',
  accent: '#90242D',
  accentRationale: 'AMC by year: a deep claret chosen by hand, muted, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Australian Mathematics Competition practice by year',
  title: 'Australian Mathematics Competition Practice by Year | AMC',
  description: 'Australian Mathematics Competition practice by year: AMC divisions from Years 3 to 12, the 2026 format and scoring from the AMT, and a plan that uses the marks well.',
  ogDescription: 'The Australian Mathematics Competition year by year: who sits which division, the 30-question format, the 135-mark scoring with no penalty for wrong answers, and practice advice for each stage.',
  twitterDescription: 'AMC practice for every year level, from the Australian Maths Trust\'s own format and scoring.',
  pageName: 'Australian Mathematics Competition Practice by Year',
  webPageDescription: 'A guide for Australian students and parents to the Australian Mathematics Competition by year level: divisions, the 2026 dates and timing, question format, scoring and awards from the Australian Maths Trust, the new Early Primary paper, and practice priorities for each division, with a worked lesson on expected marks.',
  courseDescription: 'Live online competition maths classes for Australian students in Years 3 to 12 preparing for the Australian Mathematics Competition, grouped by division.',
  crumbs: [{ name: 'Australian competitions calendar', href: '/australian-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'AMC practice by year',
  navLinks: [
    { href: '#divisions', label: 'Divisions' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#marks', label: 'Marks lesson' },
    { href: '#practice', label: 'By year' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Australian Mathematics Competition &middot; Years 1 to 12',
  h1: 'AMC practice by year',
  lede: 'The Australian Mathematics Competition is the maths contest most Australian students meet first. The Australian Maths Trust says it was first run in 1978 and calls it the country\'s longest running and largest competition for school students. Every division sits a paper of thirty questions, but a Year 3 paper and a Year 12 paper ask for very different preparation. This page sets out the divisions, timing and scoring from the Trust\'s own page, explains what the scoring rules mean for how a student should spend the time, and gives practice priorities year by year. We are an independent online school; the AMC is the Trust\'s, and so are its papers.',
  secondaryCta: { href: '#practice', label: 'Jump to your year' },
  wa: 'Hello Modern Age Coders, I would like a free class to prepare for the Australian Mathematics Competition.',
  heroNote: 'Format and scoring from the AMT\'s AMC page &middot; Checked on 7 October 2026',
  spec: [
    ['Run by', 'Australian Maths Trust'],
    ['2026 dates', 'Tuesday 4 to Thursday 6 August'],
    ['Divisions', 'Years 3 and 4 up to Years 11 and 12'],
    ['New for 2027', 'Early Primary, Years 1 and 2'],
    ['Questions', '30: 25 multiple choice, 5 integer'],
    ['Time', '60 min primary, 75 min secondary'],
    ['Total', '135 marks, no penalty for wrong answers'],
    ['Delivery', 'Online or printed paper']
  ],
  capsuleQ: 'In short',
  capsule: 'The Australian Mathematics Competition is run by the Australian Maths Trust for Years 3 to 12 in five divisions, with an Early Primary paper for Years 1 and 2 joining from 2027. In 2026 it ran from Tuesday 4 to Thursday 6 August. Each paper has 30 questions, 25 multiple-choice, 5 integer, worth up to 135 marks, with 60 minutes for primary and 75 for secondary divisions.',

  picks: {
    eyebrow: 'For AMC preparation',
    h2: 'Three courses for AMC students',
    lede: 'Number sense for primary divisions, problem solving for the middle years, and full competition maths for seniors.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'AMCY / 01', title: 'Number sense for primary', note: 'Place value, estimation and quick reasoning, the base of every Middle and Upper Primary paper.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'AMCY / 02', title: 'Competition maths', note: 'Counting, geometry, number theory and logic, taught as problem solving for Junior to Senior divisions.' },
      { course: 'algebra-foundations-masterclass', code: 'AMCY / 03', title: 'Algebra for the middle years', note: 'The pre-algebra and algebra the AMC topic list names, so harder questions stop looking strange.' }
    ]
  },

  sections: [
    {
      id: 'divisions', tint: 'tint', eyebrow: 'Who sits what',
      h2: 'AMC divisions and the 2026 paper, from the Trust',
      lede: 'Every fact in this section is taken from the Australian Maths Trust\'s AMC page, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'AMC divisions and timing, as published by the AMT', head: ['Division', 'Australian years', 'Time allowed'], rows: [
          ['Early Primary (pilot in 2026, standard from 2027)', 'Years 1 and 2', '50 minutes, 25 questions'],
          ['Middle Primary', 'Years 3 and 4', '60 minutes'],
          ['Upper Primary', 'Years 5 and 6', '60 minutes'],
          ['Junior', 'Years 7 and 8', '75 minutes'],
          ['Intermediate', 'Years 9 and 10', '75 minutes'],
          ['Senior', 'Years 11 and 12', '75 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Apart from the pilot, every division answers 30 questions, "25 multiple-choice, 5 integer", either online or on printed paper. The topics, the Trust says, "may include" basic arithmetic, fractions and ratios, algebra and pre-algebra, geometry, measurement, statistics and probability, and problem-solving including enumeration.',
            'In 2026 the competition ran from Tuesday 4 to Thursday 6 August. Online entries closed on Friday 31 July and printed paper entries earlier. Entry is through schools and the fee is in Australian dollars, so we do not print it.'
          ],
          right: [
            'The Early Primary paper is new. The Trust offered a free online pilot for Years 1 and 2 between 12 and 23 October 2026, with 25 questions (20 multiple choice and 5 integer) in 50 minutes, and says that "from 2027, the AMC Early Primary division will be part of our standard AMC offerings".',
            'The Trust publishes free sample sets for each division, "6 problems and worked solutions drawn from previous competition papers". They are the right first practice material, and we link to them rather than copying them.'
          ] },
        { kind: 'source', html: 'Source: Australian Maths Trust, <a class="ag-inline-link" href="https://amt.edu.au/amc" rel="noopener" target="_blank">Australian Mathematics Competition</a>, read on 7 October 2026. We have no connection with the AMT.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'Marks and awards',
      h2: 'How the AMC is scored',
      lede: 'Later questions are worth more, the last five have number answers, and a wrong answer costs nothing.',
      body: [
        { kind: 'table', caption: 'AMC scoring, from the AMT page (marks per question and per block)', head: ['Questions', 'Marks each', 'Block total'], numCols: [2], rows: [
          ['1 to 10', '3', '30'],
          ['11 to 20', '4', '40'],
          ['21 to 25', '5', '25'],
          ['26 to 30 (integer answers)', '6, 7, 8, 9 and 10', '40'],
          ['All 30', 'Total', '135']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Trust states plainly: "There is no penalty for incorrect responses." It also states the awards. Credit, Distinction and High Distinction are given to students in the top 55, 20 and 3 per cent of their year and region (60, 25 and 5 per cent for Senior), and a Proficiency award marks a pre-set score.',
            'Above those sit Prize awards, generally no more than one student in 300 per region and year, Best in School, the Cheryl Praeger Medal for the highest-scoring girl in each year level in secondary divisions, AMC Medals, and the Peter O\'Halloran Award for a perfect score.'
          ],
          right: [
            'Because awards compare a student with others in the same year and region, cut-off scores move from year to year. The Trust says they "are approximate and will vary year by year depending on the difficulty of the competition". There is no fixed mark that guarantees an award, and we do not promise one.',
            'What the scoring does reward is a sensible plan for the time, which is the lesson below.'
          ] },
        { kind: 'source', html: 'Scoring, awards and cut-off wording quoted from the AMT\'s <a class="ag-inline-link" href="https://amt.edu.au/amc" rel="noopener" target="_blank">AMC page</a>, read on 7 October 2026.' }
      ]
    },
    {
      id: 'marks', tint: 'tint', eyebrow: 'A lesson on the scoring',
      h2: 'Expected marks: why no penalty changes how to spend the time',
      lede: 'Two facts from the Trust\'s page shape strategy: blocks of questions are worth different amounts, and wrong answers are not penalised. A little arithmetic turns those into a plan.',
      body: [
        { kind: 'two',
          leftH3: 'Where the marks are',
          left: [
            'Add the blocks and an imbalance appears. Questions 1 to 10 are worth 30 marks together; questions 26 to 30, only five questions, are worth 40 of the 135 marks. The last five are integer-answer questions, so a guess almost never helps there: the marks come only from working the problem out.',
            'That suggests a first pass through questions 1 to 20, which together are worth 70 marks and are designed to be the most approachable, before spending long on anything else.'
          ],
          rightH3: 'What a guess is worth',
          right: [
            'On a multiple-choice question, a blank earns nothing and so does a wrong answer. So any answer is at least as good as a blank. If a student can rule out all but two choices on a 5-mark question, a choice between those two is right half the time, which is 2.5 marks on average instead of zero.',
            'Across questions 21 to 25, narrowing each to two choices adds 12.5 marks on average to a student who could not finish them, which is not a trick but a direct consequence of the Trust\'s rule. Getting rid of wrong choices is a real mathematical skill, often the quickest way into a hard question.'
          ] },
        { kind: 'table', mt: true, caption: 'Expected marks from a choice between two remaining options (our arithmetic; one correct answer per question assumed)', head: ['Question block', 'Marks each', 'Expected marks per question', 'Expected over the block'], rows: [
          ['11 to 20', '4', '2', '20'],
          ['21 to 25', '5', '2.5', '12.5'],
          ['26 to 30 (integer)', '6 to 10', 'Close to zero: no choices to narrow', 'Only from working it out']
        ] },
        { kind: 'p', text: 'The habit we teach is simple. Work the early questions carefully, leave none blank, eliminate before choosing, and save real working time for the integer questions that a strong student can actually solve. None of this replaces knowing the mathematics; it just stops a capable student losing marks to the clock.' },
        { kind: 'source', html: 'Arithmetic is ours, based on the scoring and the no-penalty rule published on the AMT\'s <a class="ag-inline-link" href="https://amt.edu.au/amc" rel="noopener" target="_blank">AMC page</a>. The number of choices per multiple-choice question is not stated on that page, so the table assumes only that two remain after elimination.' }
      ]
    },
    {
      id: 'practice', tint: '', eyebrow: 'Year by year',
      h2: 'What each division should practise',
      lede: 'These priorities are our teaching advice, built on the Trust\'s topic list and our experience with each age group.',
      body: [
        { kind: 'table', caption: 'Practice priorities by division (our advice)', head: ['Division', 'Years', 'Practise first', 'Common trap'], rows: [
          ['Early Primary', '1 and 2', 'Counting, patterns, simple shapes', 'Reading the question too quickly'],
          ['Middle Primary', '3 and 4', 'Place value, simple fractions, systematic counting', 'Missing a case when listing possibilities'],
          ['Upper Primary', '5 and 6', 'Fractions and ratios, area and perimeter, working backwards', 'Mixing up units in measurement questions'],
          ['Junior', '7 and 8', 'Pre-algebra, angles, primes and factors, careful enumeration', 'Long calculations where a pattern was quicker'],
          ['Intermediate', '9 and 10', 'Algebra, similar triangles, probability, divisibility', 'Rushing the integer questions at the end'],
          ['Senior', '11 and 12', 'Algebraic manipulation, geometry, counting arguments', 'Spending too long on one hard multiple-choice question']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For every division, the most useful single resource is the Trust\'s free sample set for that division, done under time, followed by a careful look at the worked solutions. The aim is to understand why each method works, not to memorise question types, because the Trust writes unique problems each year.',
            'Students who find the AMC easy can look at the Trust\'s olympiad pathway in maths, and those who enjoy the problem-solving style often like the Maths Challenge for Young Australians modules too.'
          ],
          right: [
            'Our classes group students by division and teach the mathematics behind the AMC topic list, with competition-style problems we write ourselves. We do not reproduce the Trust\'s papers in class; we link to its public samples and past-paper shop.',
            'If a child is anxious about the competition, it helps to remember that every student receives an award certificate at some level, and that the AMC is meant as a challenge, not a test of worth.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building towards the AMC',
    h2: 'Four stages of competition readiness',
    lede: 'Stages describe how a student handles unfamiliar problems, whatever their year.',
    table: { caption: 'Competition readiness, stage by stage', head: ['Stage', 'Focus', 'The sign it is secure'], rows: [
      ['1. Calm reading', 'Understanding what is asked', 'Restates a question in their own words before starting'],
      ['2. Systematic work', 'Lists, tables and cases', 'Counts possibilities without missing or repeating any'],
      ['3. Elimination', 'Ruling out impossible choices', 'Narrows a hard question to two options quickly'],
      ['4. Full solutions', 'Integer questions worked through', 'Solves at least one of the last five on a past sample']
    ] },
    left: { h3: 'If competition maths feels unfamiliar', ps: [
      'AMC questions often look unlike classwork. That is normal; it is a different kind of thinking that improves quickly with regular practice.',
      'Twenty minutes twice a week does more than a long session the night before.'
    ] },
    right: { h3: 'More from the Trust', ps: [
      'Our <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AMT competitions page</a> compares the AMC with the AIO and CAT.',
      'The <a class="ag-inline-link" href="/maths-challenge-for-young-australians-practice">Maths Challenge page</a> covers the Trust\'s team problem-solving module.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for AMC students',
    lede: 'Grouped by division. Each card opens the full outline.',
    bands: [
      { num: 'I', h3: 'Primary divisions', sub: 'Years 1 to 6', courses: [
        { code: 'AMCY / P / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for quick reasoning.' },
        { code: 'AMCY / P / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All strands, with reasoning out loud.' },
        { code: 'AMCY / P / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns and systematic counting.' }
      ] },
      { num: 'II', h3: 'Junior and Intermediate', sub: 'Years 7 to 10', courses: [
        { code: 'AMCY / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'The content the middle divisions draw on.' },
        { code: 'AMCY / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra to equations.' },
        { code: 'AMCY / M / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Chance and counting with care.' }
      ] },
      { num: 'III', h3: 'Senior and stretch', sub: 'Years 11 and 12 and keen younger students', courses: [
        { code: 'AMCY / S / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Full problem-solving training.' },
        { code: 'AMCY / S / 02', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'The algebra and geometry seniors need.' },
        { code: 'AMCY / S / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Exploring counting problems in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live competition maths classes for Australian students',
    lede: 'Our teachers work from India, which sits behind every Australian time zone. A 4 pm lesson in Darwin begins at 12 noon India time all year, as the Northern Territory has no daylight saving.',
    slots: [
      { time: 'Terms 2 and 3', l: 'Weekly preparation leading up to August.' },
      { time: 'Weekend practice papers', l: 'Timed sample sets with review.' },
      { time: 'School holidays', l: 'Short blocks on one topic, such as counting.' }
    ],
    cells: [
      { h3: 'Read, then plan', p: 'Students decide how to approach a question before calculating.' },
      { h3: 'Eliminate first', p: 'Impossible answers are ruled out with reasons.' },
      { h3: 'Groups by division', p: 'Five to ten students sitting the same paper.' },
      { h3: 'One-to-one option', p: 'For students aiming at the hardest questions.' },
      { h3: 'Short parent notes', p: 'One strategy learned and one problem to try at home.' },
      { h3: 'No award promises', p: 'We teach maths; the result belongs to the student.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Built by learners for their own reasons, not for a competition. The full list is in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews, quoted exactly from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families are billed monthly in US dollars, our standard rate outside India, with no deposit and the option to stop at any month end. AMC entry is arranged and paid through schools.',
    free: ['A real lesson with a teacher', 'An honest view of competition readiness', 'No card details'],
    group: ['Five to ten students in one division', 'The same teacher every week', 'Problems reviewed and discussed', 'A certificate at the end'],
    one: ['A teacher for one student', 'Focused on chosen topics', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about the AMC',
    h2: 'What Australian families ask',
    items: [
      { q: 'What is the Australian Mathematics Competition?', a: 'A maths competition for school students run by the Australian Maths Trust. The Trust says it was first run in 1978 and describes it as Australia\'s longest running and largest maths competition for school students.' },
      { q: 'Which AMC division is my child in?', a: 'Middle Primary is Years 3 and 4, Upper Primary 5 and 6, Junior 7 and 8, Intermediate 9 and 10, and Senior 11 and 12. An Early Primary division for Years 1 and 2 becomes standard from 2027.' },
      { q: 'How long is the AMC?', a: '60 minutes for primary divisions and 75 minutes for secondary divisions. The Early Primary pilot was 50 minutes.' },
      { q: 'How many questions are there?', a: 'Thirty: 25 multiple-choice and 5 with integer answers. The Early Primary pilot had 25 questions.' },
      { q: 'Is there a penalty for wrong answers in the AMC?', a: 'No. The Trust states there is no penalty for incorrect responses, so a reasoned answer is always better than a blank.' },
      { q: 'How are AMC awards decided?', a: 'Mostly by comparing a student with others in the same year and region. Credit, Distinction and High Distinction go to the top 55, 20 and 3 per cent (60, 25 and 5 per cent for Senior), with further prizes and medals above those.' },
      { q: 'What are expected marks?', a: 'The average number of marks an answer would earn over many attempts. With no penalty, narrowing a 5-mark question to two choices is worth 2.5 marks on average, compared with zero for a blank.' },
      { q: 'Where can students practise?', a: 'The Trust publishes free sample sets of six problems with worked solutions for each division, and sells past papers. Our classes teach the mathematics with our own problems.' },
      { q: 'Can families enter directly?', a: 'Entry is normally arranged through schools. Check with your school\'s maths coordinator before the entry deadline.' },
      { q: 'Are you part of the AMT?', a: 'No. We are an independent online school, quoting the Trust because it runs the competition.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More competition maths in Australia',
    lede: 'The Trust\'s other contests and our wider maths pages.',
    items: [
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC, AIO and CAT preparation', p: 'Three Trust competitions compared.' },
      { href: '/maths-challenge-for-young-australians-practice', label: 'Maths Challenge practice', p: 'The Trust\'s team problem-solving module.' },
      { href: '/apsmo-maths-olympiad-practice', label: 'APSMO Maths Olympiad', p: 'Another primary and middle-years contest.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest through the year.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring', p: 'For students who want harder problems.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Our main maths page for Australia.' }
    ]
  },

  start: {
    h2: 'Book a free AMC preparation class',
    lede: 'Tell us the year level and whether the AMC is coming up. The free class works through competition-style problems at the right division and ends with honest advice.',
    readFirst: 'Prefer to browse first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson.',
    note: 'A WhatsApp message is usually quickest. Our number starts +91 as the school runs from India, with no office in Australia.',
    formNote: 'No card, no obligation. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/maths-challenge-for-young-australians-practice', label: 'Maths Challenge' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/maths-challenges', label: 'Maths challenges' }
      ] }
    ],
    bottomRight: 'Independent of the AMT; no award is promised'
  },

  personalityCss: `
.ag-root.ag-amcy .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-amcy .ag-capsule { border-left-width: 6px; }
.ag-root.ag-amcy .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-amcy .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-amcy .ag-grid-2 h3 { letter-spacing: -0.005em; }
.ag-root.ag-amcy .ag-spec dd { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Australian Maths Trust, Australian Mathematics Competition page (amt.edu.au/amc), read 7 October 2026 with curl\'s default user agent: Tuesday 4 to Thursday 6 August 2026; primary divisions 60 minutes, secondary 75 minutes; "First run in 1978, the Australian Mathematics Competition is Australia\'s longest running, largest and most well-known maths competition for school students."; online entries close Friday 31 July 2026; free Early Primary pilot 12-23 October for Years 1 and 2, 25 questions (20 multiple choice and 5 integer-answer), 50 minutes, online-only, "From 2027, the AMC Early Primary division will be part of our standard AMC offerings."; divisions Middle Primary 3-4, Upper Primary 5-6, Junior 7-8, Intermediate 9-10, Senior 11-12; topics "may include" basic arithmetic, fractions and ratios, algebra and pre-algebra, geometry, measurement, statistics and probability, problem-solving (including enumeration); "30 questions - 25 multiple-choice, 5 integer"; online or printed paper; scoring Q1-10 3 marks, Q11-20 4, Q21-25 5, Q26-30 6, 7, 8, 9, 10, total 135; "There is no penalty for incorrect responses."; awards Participation, Proficiency, Credit (top 55%, 60% Senior), Distinction (top 20%, 25% Senior), High Distinction (top 3%, 5% Senior), Prize (generally no more than 1 in 300), Best in School, Cheryl Praeger Medal, AMC Medals, Peter O\'Halloran Award; cut-offs "are approximate and will vary year by year depending on the difficulty of the competition"; sample sets "6 problems and worked solutions drawn from previous competition papers".',
    localProject: 'Expected marks under no-penalty scoring (our arithmetic): block totals 30 (Q1-10), 40 (Q11-20), 25 (Q21-25), 40 (Q26-30, integer), sum 135; Q1-20 worth 70; narrowing to two choices gives expected 2 marks per 4-mark question (20 over the block) and 2.5 per 5-mark question (12.5 over Q21-25); integer questions cannot be narrowed.',
    requiredMentions: ['Early Primary', 'Peter O\'Halloran Award', 'Cheryl Praeger Medal', '25 multiple-choice, 5 integer', '40 of the 135 marks', 'Tuesday 4 to Thursday 6 August', 'expected marks', '1978'],
    sources: [
      { claim: 'AMT Australian Mathematics Competition page: dates, timing, divisions, topics, format, scoring, awards, Early Primary pilot, sample sets.', url: 'https://amt.edu.au/amc' },
      { claim: 'AMT Maths for Young Australians page: AMC "attracts more than 250,000 entries each year" (context; not used as a page figure).', url: 'https://amt.edu.au/maths-for-young-australians' },
      { claim: 'AMT Olympiad and Pathways Programs: maths invitations follow outstanding AMC or Maths for Young Australians results.', url: 'https://amt.edu.au/olympiad-programs' }
    ],
    rejectedClaims: [
      'AMC entry fees: AUD, not printed (one-currency rule).',
      'Number of answer choices per multiple-choice question: not stated on the AMC page read, so not assumed beyond "two remaining after elimination".',
      'Award cut-off marks: not published as fixed values; not stated.',
      '2027 AMC dates: not published when checked.',
      'Any reproduction of AMC questions: refused; only the AMT\'s public samples are linked.',
      'Any award promise: refused.'
    ]
  }
};
