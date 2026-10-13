'use strict';
// Year 12 maths holiday revision in Australia (ag- door, Australia cluster Phase 3, row 87).
// Facts read raw on 7 October 2026: NSW Department of Education, future and past NSW term dates and
// school holidays (2027: autumn holidays Monday 12 April to Friday 23 April; winter Monday 5 July to
// Friday 16 July; spring Monday 27 September to Friday 8 October; Term 4 from Monday 11 October); NESA
// 2026 HSC key dates (written exams start 13 October 2026, finish no later than 5 November 2026);
// Victorian Government school term dates (2027: Term 1 27 January to 25 March, Term 2 12 April to
// 25 June, Term 3 12 July to 17 September, Term 4 4 October to 17 December; 2026 summer holidays 21
// December 2026 to 27 January 2027); VCAA 2026 VCE examination timetable (General Mathematics
// Examination 1 Friday 30 October and Examination 2 Monday 2 November; Mathematical Methods
// Examination 1 Thursday 5 November and Examination 2 Friday 6 November; Specialist Mathematics
// Examination 1 Monday 9 November and Examination 2 Wednesday 11 November; Foundation Mathematics
// Tuesday 17 November). Other states not described (their dates were not read). Spine: Leitner-box
// spaced repetition across a 10-weekday holiday, checked free site-wide on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'YEAR 12 HOLIDAY REVISION', label: 'Year 12 maths holiday revision', blurb: 'Using the Year 12 school holidays for maths revision in NSW and Victoria: real dates, exam windows, and a review method that makes topics stick.' },
  slug: 'year-12-maths-holiday-revision-australia',
  code: 'yhrv',
  accent: '#333054',
  accentRationale: 'Year 12 holiday revision: a muted slate navy, contrast above 4.9:1 on #EDE7DA, at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Year 12 maths holiday revision',
  title: 'Year 12 Maths Holiday Revision | NSW and Victoria, Online',
  description: 'Year 12 maths holiday revision for NSW and Victorian students: real school holiday and exam dates, a week-by-week plan, and spaced review that makes topics stick.',
  ogDescription: 'How to use the Year 12 school holidays for mathematics revision, with the 2027 NSW and Victorian term dates, the 2026 HSC and VCE mathematics exam windows, and a spaced-repetition method you can run with index cards.',
  twitterDescription: 'Year 12 maths revision in the school holidays: the real dates, and a review method that works.',
  pageName: 'Year 12 Maths Holiday Revision',
  webPageDescription: 'Planning help for Year 12 mathematics revision in the school holidays: published NSW and Victorian term and holiday dates, 2026 HSC and VCE exam windows, a holiday revision structure, and an original lesson on Leitner-box spaced repetition.',
  courseDescription: 'Live online holiday revision lessons for Australian Year 12 mathematics students in NSW and Victoria, plus regular weekly lessons through the year.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Year 12 holiday revision',
  navLinks: [
    { href: '#dates', label: 'The dates' },
    { href: '#exams', label: 'Exam windows' },
    { href: '#leitner', label: 'Spaced review' },
    { href: '#plan', label: 'A holiday plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Year 12 &middot; School holiday revision',
  h1: 'Year 12 maths holiday revision',
  lede: 'Year 12 school holidays are short, and they disappear quickly. Students who use them well tend to do two things: they plan around real dates rather than a vague sense of "the holidays", and they revise in a way that makes topics stick rather than cramming them once. This page gives the dates for NSW and Victoria from the governments\' own calendars, and a review method that takes ten minutes a day.',
  secondaryCta: { href: '#leitner', label: 'Learn the review method' },
  wa: 'Hello Modern Age Coders, I would like a free class about Year 12 maths revision in the holidays.',
  heroNote: 'Dates from government calendars &middot; A method, not a cram &middot; Holiday lessons in your time zone',
  spec: [
    ['NSW 2027 winter break', '5 to 16 July'],
    ['NSW 2027 spring break', '27 September to 8 October'],
    ['VIC 2027 Term 3 ends', 'Friday 17 September'],
    ['VIC 2027 Term 4 starts', 'Monday 4 October'],
    ['2026 HSC written exams', '13 October to 5 November at the latest'],
    ['Method', 'Spaced review with Leitner boxes'],
    ['We teach', 'Revision lessons and weekly classes'],
    ['We never', 'Promise a band or a study score']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 12 maths holiday revision pays off when it is planned around real dates and uses spaced review instead of cramming. In NSW in 2027, the winter holidays run from 5 to 16 July and the spring holidays from 27 September to 8 October, just before the HSC exam period. In Victoria, Term 3 of 2027 ends on 17 September and Term 4 starts on 4 October.',

  picks: {
    eyebrow: 'For holiday revision',
    h2: 'Three courses Year 12 students revise with',
    lede: 'The calculus core, the statistics strand, and harder problems for the final polish.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'YHRV / 01', title: 'Senior mathematics review', note: 'Functions, trigonometry and calculus revisited in order, the backbone of Year 12 revision in any state.' },
      { course: 'statistics-probability-maths-course', code: 'YHRV / 02', title: 'Statistics and probability', note: 'Distributions, random variables and data, the strand students most often leave until too late.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'YHRV / 03', title: 'Harder problems', note: 'Unfamiliar questions that train flexible thinking, useful for the final weeks before the exams.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'The 2027 dates',
      h2: 'School holidays for the Year 12 class of 2027',
      lede: 'These dates are from the NSW Department of Education\'s term-dates page and the Victorian Government\'s school term dates page, both read on 7 October 2026. Non-government schools can set different dates, so check the school calendar too.',
      body: [
        { kind: 'table', caption: 'NSW government school holidays, 2027', head: ['Holiday', 'Dates', 'Where it falls for Year 12'], rows: [
          ['Autumn school holidays', 'Monday 12 April to Friday 23 April', 'After Term 1, early in Year 12 proper'],
          ['Winter school holidays', 'Monday 5 July to Friday 16 July', 'Before trial exams in many schools'],
          ['Spring school holidays', 'Monday 27 September to Friday 8 October', 'Immediately before the HSC exam period'],
          ['Term 4 begins', 'Monday 11 October', 'The HSC exams usually run in this term']
        ] },
        { kind: 'table', caption: 'Victorian government school terms, 2027 (holidays fall between terms)', head: ['Term', 'Starts', 'Ends'], rows: [
          ['Term 1', 'Wednesday 27 January', 'Thursday 25 March'],
          ['Term 2', 'Monday 12 April', 'Friday 25 June'],
          ['Term 3', 'Monday 12 July', 'Friday 17 September'],
          ['Term 4', 'Monday 4 October', 'Friday 17 December']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In NSW, the spring holidays are the ones that matter most for Year 12: two weeks that end only days before the HSC exam period begins. In 2026 the written exams started their run on Tuesday 13 October, according to NESA\'s key dates.',
            'The winter holidays are the other key window. Many schools run trial exams early in Term 3, so the July break is often the last chance to repair a weak topic calmly before trials.'
          ],
          right: [
            'In Victoria, the gap between Term 3 ending on Friday 17 September and Term 4 starting on Monday 4 October is the final holiday before the VCE examinations. Victorian students also have the mid-year break between Term 2 ending on 25 June and Term 3 starting on 12 July.',
            'Before Year 12 even starts, the summer break matters too: the Victorian Government lists the 2026 to 2027 summer holidays as Monday 21 December 2026 to Wednesday 27 January 2027 for government schools. A light, steady start in summer makes Term 1 far less frantic.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates" rel="noopener" target="_blank">NSW Department of Education, future and past NSW term dates and school holidays</a>; <a class="ag-inline-link" href="https://www.vic.gov.au/school-term-dates-and-holidays-victoria" rel="noopener" target="_blank">Victorian Government, school term dates and holidays</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'exams', tint: 'deep', eyebrow: 'The exam windows',
      h2: 'When the 2026 maths exams fall',
      lede: 'The most recent published timetables, for the 2026 exams, give a good picture of where the final holidays sit. VCE times include reading time. Read on 7 October 2026.',
      body: [
        { kind: 'table', caption: '2026 VCE mathematics examinations (VCAA)', head: ['Study and paper', 'Date', 'Time'], rows: [
          ['General Mathematics Examination 1', 'Friday 30 October', '2:00 to 3:45 pm'],
          ['General Mathematics Examination 2', 'Monday 2 November', '2:00 to 3:45 pm'],
          ['Mathematical Methods Examination 1', 'Thursday 5 November', '9:00 to 10:15 am'],
          ['Mathematical Methods Examination 2', 'Friday 6 November', '11:45 am to 2:00 pm'],
          ['Specialist Mathematics Examination 1', 'Monday 9 November', '9:00 to 10:15 am'],
          ['Specialist Mathematics Examination 2', 'Wednesday 11 November', '11:45 am to 2:00 pm'],
          ['Foundation Mathematics', 'Tuesday 17 November', '3:00 to 5:15 pm']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For NSW, NESA\'s 2026 key dates say the HSC written exams start on Tuesday 13 October 2026 and finish no later than Thursday 5 November 2026. Individual subject dates sit on NESA\'s written exam timetable, which every student should check against their own personalised timetable.',
            'For Victoria, the VCE mathematics papers above stretch from 30 October to 17 November in 2026. A student taking both Methods and Specialist has four mathematics papers in seven days, from 5 to 11 November.'
          ],
          right: [
            'The 2027 timetables were not published when this page was written. The pattern is useful anyway: the NSW spring holidays and the Victorian September break are each followed within days, or a few weeks, by the final exams, so they are revision time, not rest time.',
            'Victoria\'s Examination 1 papers for Methods and Specialist are technology-free, which affects how the September break should be spent: plenty of by-hand practice, not only calculator work. Our <a class="ag-inline-link" href="/year-10-maths-methods-preparation">Methods preparation page</a> explains the structure.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx" rel="noopener" target="_blank">VCAA, 2026 VCE examination timetable</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc" rel="noopener" target="_blank">NESA, 2026 HSC key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'leitner', tint: 'tint', eyebrow: 'A method that sticks',
      h2: 'Spaced review with Leitner boxes',
      lede: 'Cramming a topic once feels productive and fades fast. Spaced review, coming back to a skill at growing intervals, is a simple alternative, and the Leitner box system turns it into a routine anyone can follow with index cards.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Make the cards', p: 'Write one skill per card, such as "differentiate a quotient" or "find a conditional probability", with a fresh practice question on the back.' },
          { h3: '2. Three boxes, three rhythms', p: 'Box 1 is reviewed every day, Box 2 every second day, and Box 3 every fourth day. Every card starts in Box 1.' },
          { h3: '3. Move the cards', p: 'Answer a card correctly and it moves up one box. Get it wrong and it goes back to Box 1, wherever it was.' }
        ] },
        { kind: 'p', text: 'A worked example, invented by us, over the ten weekdays of the NSW winter break, 5 to 16 July 2027. Box 1 is reviewed on days 1 to 10, Box 2 on days 1, 3, 5, 7 and 9, and Box 3 on days 1, 5 and 9. Follow one card, "differentiate a quotient".' },
        { kind: 'table', caption: 'One card through a 10-day holiday with three Leitner boxes', head: ['Day', 'Box reviewed', 'Result', 'Card moves to'], rows: [
          ['1', 'Box 1', 'Correct', 'Box 2'],
          ['3', 'Box 2', 'Correct', 'Box 3'],
          ['5', 'Box 3', 'Wrong', 'Box 1'],
          ['6', 'Box 1', 'Correct', 'Box 2'],
          ['7', 'Box 2', 'Correct', 'Box 3'],
          ['9', 'Box 3', 'Correct', 'Stays in Box 3']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The card was reviewed 6 times in 10 days instead of 10, and the reviews clustered where they were needed: after the mistake on day 5 it came back the very next day, then spread out again once it was secure. Multiply that across fifty cards and the saving in time is large.',
            'The system also produces an honest map of revision. Cards that keep falling back to Box 1 are the topics to bring to a tutor or teacher; cards that sit in Box 3 are secure and need only occasional checks.'
          ],
          right: [
            'The practice question on the back of each card should change every few reviews, so the student is solving a problem rather than remembering an answer. That is where a bank of varied questions, from past papers or a tutor, earns its keep.',
            'This is also a tiny algorithm, and students who code enjoy writing it: a list of cards, each with a box number, and a rule for which boxes to review on a given day. The Python courses on our <a class="ag-inline-link" href="/course-atlas">course atlas</a> start from programs about this size.'
          ] }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'A holiday plan',
      h2: 'A two-week revision shape that works',
      lede: 'Our suggested structure, not an official one. Adjust it to the school\'s trial dates and the student\'s weakest topics.',
      body: [
        { kind: 'table', caption: 'A two-week Year 12 maths holiday plan', head: ['Days', 'Focus', 'Daily routine'], rows: [
          ['1 to 2', 'Diagnose', 'One mixed practice set; turn every error into a Leitner card'],
          ['3 to 6', 'Repair', 'Two weak topics a day, one hour each, then the day\'s Leitner boxes'],
          ['7', 'Rest', 'No maths; the spacing works better with a gap'],
          ['8 to 11', 'Practise', 'Timed exam sections, marked honestly, new cards for new errors'],
          ['12 to 14', 'Rehearse', 'Full papers under exam conditions, then light Leitner review only']
        ] },
        { kind: 'p', text: 'Two hours a day of focused work, plus ten to fifteen minutes of card review, is enough for most students and leaves room for rest. Longer days usually trade quality for quantity, and tired revision tends not to stick.' },
        { kind: 'p', text: 'Holiday lessons with us follow the same idea: each session starts by reviewing the student\'s Box 1 cards, then tackles one weak topic properly. We teach with our own questions, never a school\'s assessment task, and we never promise a band or a study score.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Across the year',
    h2: 'Four revision moments in Year 12',
    lede: 'The holidays are only part of it. These are the points in the year where revision pays most.',
    table: { caption: 'Revision moments for Year 12 mathematics', head: ['When', 'Moment', 'What to do'], rows: [
      ['Summer before Year 12', 'Warm start', 'Re-cover Year 11 basics lightly, a few cards a day'],
      ['Mid-year break', 'Repair', 'Fix the two or three weakest topics before trials'],
      ['After trials', 'Learn from errors', 'Turn every lost mark into a card'],
      ['Final break', 'Rehearse', 'Full papers under timed conditions']
    ] },
    left: { h3: 'If revision keeps slipping', ps: [
      'A fixed daily slot works better than good intentions. Ten minutes of cards at the same time each day builds the habit.',
      'Studying with a friend, quizzing each other\'s cards, makes the routine easier to keep.'
    ] },
    right: { h3: 'NSW students', ps: [
      'For the courses themselves, see our pages on <a class="ag-inline-link" href="/hsc-maths-standard-tutoring">Standard</a>, <a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">Advanced</a> and <a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Extension 1</a>.',
      'For how results turn into a rank, see <a class="ag-inline-link" href="/atar-explained-for-coding-students">the ATAR explained</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Year 12 revision',
    lede: 'Grouped by what they revise. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Core revision', sub: 'Functions and calculus', courses: [
        { code: 'YHRV / C / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Functions to calculus, revisited in order.' },
        { code: 'YHRV / C / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For algebra slips that cost marks everywhere.' },
        { code: 'YHRV / C / 03', slug: 'ap-calculus-exam-prep', title: 'Calculus practice', blurb: 'Written for the US AP exam; plenty of derivative and integral drill.' }
      ] },
      { num: 'II', h3: 'Statistics and applied', sub: 'The other half of the papers', courses: [
        { code: 'YHRV / S / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Distributions and data, step by step.' },
        { code: 'YHRV / S / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Financial mathematics for applied courses.' },
        { code: 'YHRV / S / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data science', blurb: 'Statistics and linear algebra in context.' }
      ] },
      { num: 'III', h3: 'Final polish', sub: 'Harder and broader', courses: [
        { code: 'YHRV / F / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Unfamiliar problems for flexible thinking.' },
        { code: 'YHRV / F / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'A different syllabus, useful for varied question styles.' },
        { code: 'YHRV / F / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'For students looking ahead to first-year maths.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Holiday lessons',
    h2: 'Revision sessions in your state\'s daytime',
    lede: 'Our tutors teach from India, so holiday mornings in Australia line up with the Indian morning and early afternoon. In winter Sydney and Melbourne are four and a half hours ahead of India time; under daylight saving the gap is five and a half hours, and Perth stays two and a half hours ahead all year.',
    slots: [
      { time: 'Holiday mornings', l: 'Focused revision blocks during the break.' },
      { time: 'Weekday afternoons in term', l: 'Regular weekly lessons through Year 12.' },
      { time: 'Weekend mock papers', l: 'Timed practice with review afterwards.' }
    ],
    cells: [
      { h3: 'Start from errors', p: 'Each session begins with the student\'s own Box 1 cards.' },
      { h3: 'One topic done properly', p: 'Better one weak topic fixed than five skimmed.' },
      { h3: 'Fresh questions', p: 'New practice problems so answers are worked, not remembered.' },
      { h3: 'Groups of fifteen to twenty', p: 'Year 12 students in the same course, each explaining aloud.' },
      { h3: 'One-to-one revision', p: 'A tutor for a single student and a single topic list.' },
      { h3: 'Honest outcomes', p: 'We never promise a band, study score or rank.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, separate from school work. Find more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied from Google exactly as families posted them.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, at one rate for every family outside India. No joining fee, and payment covers only the month in progress.',
    free: ['A real revision lesson', 'An honest list of weak topics', 'No card required'],
    group: ['Five to ten Year 12 students', 'One tutor through the term', 'Practice marked together', 'A certificate at the end'],
    one: ['Your own tutor', 'Built around your topic list', 'Ideal in the holidays']
  },

  faq: {
    eyebrow: 'Questions about holiday revision',
    h2: 'What Year 12 families ask us',
    items: [
      { q: 'When are the NSW school holidays in 2027?', a: 'The NSW Department of Education lists autumn holidays from 12 to 23 April, winter holidays from 5 to 16 July, and spring holidays from 27 September to 8 October 2027, for government schools.' },
      { q: 'When do Victorian terms run in 2027?', a: 'The Victorian Government lists Term 1 from 27 January to 25 March, Term 2 from 12 April to 25 June, Term 3 from 12 July to 17 September, and Term 4 from 4 October to 17 December 2027.' },
      { q: 'When are the HSC exams?', a: 'For 2026, NESA says the HSC written exams start on 13 October and finish no later than 5 November. The 2027 timetable had not been published when this page was written.' },
      { q: 'When are the VCE maths exams?', a: 'In 2026, VCAA scheduled General Mathematics on 30 October and 2 November, Mathematical Methods on 5 and 6 November, Specialist Mathematics on 9 and 11 November, and Foundation Mathematics on 17 November.' },
      { q: 'What is the Leitner box method?', a: 'A spaced-repetition routine. Skills go on cards in numbered boxes reviewed at growing intervals, such as daily, every second day and every fourth day. A correct answer moves a card up a box; a wrong answer sends it back to the first box.' },
      { q: 'How many hours should a Year 12 student revise in the holidays?', a: 'There is no official number. Our suggestion is about two hours of focused work a day plus ten to fifteen minutes of card review, with at least one full rest day each week.' },
      { q: 'Should the holidays be used for new topics?', a: 'Usually not. Holidays suit repairing weak topics and practising exam conditions; new content is better learned during term with the class.' },
      { q: 'Do other states have similar dates?', a: 'Each state sets its own calendar. This page covers NSW and Victoria from their governments\' pages; students elsewhere should check their own education department.' },
      { q: 'Can you guarantee a better result?', a: 'No. Revision helps, but results belong to the student, and we never promise a band, study score or rank.' },
      { q: 'Do you run holiday lessons online?', a: 'Yes. Holiday sessions are live and online, usually in the Australian morning, and can be one-to-one or in a small group.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Year 12 students',
    lede: 'The courses, the rank, and the earlier years.',
    items: [
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The NSW calculus course and its paper.' },
      { href: '/hsc-maths-standard-tutoring', label: 'HSC Maths Standard', p: 'Standard 1 and Standard 2 explained.' },
      { href: '/year-10-maths-methods-preparation', label: 'Methods preparation', p: 'How VCE Methods is built and assessed.' },
      { href: '/atar-explained-for-coding-students', label: 'The ATAR explained', p: 'Ranks and scaling, from the sources.' },
      { href: '/school-holiday-coding-course-australia', label: 'School holiday coding course', p: 'For a break from maths that still builds skills.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in plain words.' }
    ]
  },

  start: {
    h2: 'Book a free revision lesson',
    lede: 'Tell us the state, the course and the topics that feel weakest. The free lesson starts a revision plan and fixes one topic properly.',
    readFirst: 'Reading first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and contests for the year are on the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.',
    note: 'WhatsApp gets the fastest response. Our +91 number is Indian because the school runs from India; there is no Australian office.',
    formNote: 'No card and no commitment. We reply once to book.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/school-holiday-coding-course-australia', label: 'Holiday coding course' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Year 12', links: [
        { href: '/hsc-maths-advanced-tutoring', label: 'Maths Advanced' },
        { href: '/year-10-maths-methods-preparation', label: 'Methods preparation' },
        { href: '/atar-explained-for-coding-students', label: 'The ATAR explained' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Review often, a little at a time'
  },

  personalityCss: `
.ag-root.ag-yhrv .ag-hero-grid { gap: clamp(1rem, 2.9vw, 2.45rem); }
.ag-root.ag-yhrv .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-yhrv .ag-capsule { border-left-width: 6px; }
.ag-root.ag-yhrv .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-yhrv .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-yhrv .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-yhrv .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-yhrv .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Calendars and exam timetables read on 7 October 2026: NSW Department of Education (2027 term dates and holidays), NESA 2026 HSC key dates, Victorian Government school term dates (2027 terms; 2026 to 2027 summer holidays), VCAA 2026 VCE examination timetable (mathematics papers). No curriculum content is described beyond exam timing.',
    localProject: 'Leitner-box spaced repetition over the 10 weekdays of the NSW 2027 winter break (5 to 16 July): Box 1 daily, Box 2 on days 1, 3, 5, 7, 9, Box 3 on days 1, 5, 9; one invented card reviewed on days 1, 3, 5, 6, 7 and 9 (6 reviews instead of 10), dropping to Box 1 after an error on day 5. Written by us.',
    requiredMentions: ['Monday 5 July to Friday 16 July', 'Monday 27 September to Friday 8 October', 'Monday 21 December 2026 to Wednesday 27 January 2027', 'General Mathematics Examination 1', 'Specialist Mathematics Examination 2', 'Wednesday 11 November', 'Leitner box', 'reviewed 6 times in 10 days'],
    sources: [
      { claim: 'NSW Department of Education, future and past NSW term dates and school holidays: 2027 holidays and Term 4 start.', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'NESA, 2026 HSC key dates: written exams from 13 October to no later than 5 November 2026.', url: 'https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc' },
      { claim: 'Victorian Government, school term dates and holidays: 2027 terms and the 2026 to 2027 summer holidays.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'VCAA, 2026 VCE examination timetable: mathematics papers, dates and times including reading.', url: 'https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx' }
    ],
    rejectedClaims: [
      'The 2027 HSC and VCE exam dates: not published when read; 2026 dates are given and labelled.',
      'Holiday dates for Queensland, Western Australia, South Australia, Tasmania, the ACT and the NT: not read, so not given.',
      'Trial exam dates: set by each school, not given.',
      'Any research claim about how much spaced repetition improves results: not quoted; the method is presented as a routine, not a promise.',
      'Any promise of a result: none.'
    ]
  }
};
