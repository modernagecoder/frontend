'use strict';
// United Kingdom hub (cg- system, UK cluster Phase 0), rebuilt on the live URL that was a cp-uk page.
// Spine: one child, one birthday, four answers. Three published rules for when a child starts school
// (England: gov.uk summer-born advice, updated 27 April 2023; Scotland: Education Scotland Parentzone;
// Northern Ireland: Department of Education) turned into one function with the nation as an input, then
// tested either side of each cut-off. A Welsh council (Carmarthenshire, Rising 4s ended 2025/26) shows
// that the nation alone is not always enough. Our own first draft of the Northern Ireland rule was a
// year out for 2 July to 31 August birthdays; the page says so. Every fact read at the primary source on
// 19 September 2026 (see dossier.sources). The old hub's Oxbridge admissions claims are not carried over
// (owner decision 6); CCEA's site refused an automated check (403), so its qualifications are named only.

// The index of built UK pages is read from content/uk at build time, so the hub can never drift from
// the cluster: uk-ship.sh rebuilds this page after every new UK page. Only modules whose page has been
// built (src/pages/<slug>.html exists) are listed. Groups follow each module's hub.group.
const fs = require('fs');
const path = require('path');
const UK_GROUPS = [
  ['guide', 'Guides'], ['exam', 'Exams, nation by nation'], ['competition', 'Competitions'], ['nation', 'Nations'],
  ['city', 'Cities'], ['borough', 'London boroughs'], ['elevenplus', '11+ maths by area'], ['county', 'Counties and council areas'],
  ['region', 'English regions'], ['town', 'Towns'], ['area', 'Neighbourhoods'], ['maths', 'Maths by city']
];
function ukIndex() {
  const pages = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && f !== path.basename(__filename)).map(f => require(path.join(__dirname, f)))
    .filter(m => m && m.slug && fs.existsSync(path.join(__dirname, '..', '..', 'src', 'pages', m.slug + '.html')));
  const groupOf = m => (m.hub && m.hub.group) || (m.pageType === 'market' ? 'guide' : m.pageType === 'governorate' ? 'county' : m.pageType === 'district' ? 'area' : 'city');
  const label = m => (m.hub && m.hub.label) || m.routeLabel || m.place.name;
  const blocks = UK_GROUPS.map(([g, name]) => [name, pages.filter(m => groupOf(m) === g).sort((a, b) => label(a).localeCompare(label(b)))]).filter(([, l]) => l.length)
    .map(([name, l]) => ({ kind: 'p', text: `<strong>${name}:</strong> ` + l.map(m => `<a class="cg-inline-link" href="/${m.slug}">${label(m)}</a>`).join(' &middot; ') }));
  if (!blocks.length) return [];
  return [{ id: 'uk-index', tint: 'tint', eyebrow: 'The UK, page by page', h2: 'Every UK page in this series', intro: 'Each page below is written for its own place, exam or competition, with its own project and its own sources.', body: blocks }];
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'nation', tag: 'UK', blurb: 'The national page: four school systems and the places and exams we cover.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-united-kingdom',
  code: 'ukh',
  accent: '#2263A0',
  accentRationale: 'UK hub: a deep ink blue from the solver (5.07:1 on every paper tint), clear of every Irish accent and of the Birmingham and Leicester pages it links to',
  pageType: 'city',
  place: {
    name: 'United Kingdom',
    eyebrow: 'England, Scotland, Wales and Northern Ireland',
    schemaType: 'Country',
    chain: []
  },
  parents: [],
  nav: [
    { label: 'Courses', href: '/courses' },
    { label: 'AI classes, UK', href: '/ai-and-machine-learning-classes-in-uk' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'United Kingdom',
  title: 'Coding Classes in the UK | Online Coding, Python and AI',
  description: 'Live online coding, Python, AI and maths classes for children, teens and adults in England, Scotland, Wales and Northern Ireland. The first lesson is free.',
  ogDescription: 'Coding, Python and AI classes across the four UK school systems, on a page about one birthday that gives four different school start dates.',
  twitterDescription: 'UK coding classes for ages 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'gcse-computer-science-course',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for UK Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in all four UK nations, taught live in English.'
  },

  h1: 'Coding classes in the UK',
  capsuleQ: 'What are the best coding classes in the UK?',
  capsule: 'The right class for a UK learner starts from which of the four school systems they are in. England teaches computing through key stages and GCSEs set by several exam boards. In Scotland, National 5, Higher and Advanced Higher now come from Qualifications Scotland, which replaced SQA on 1 February 2026. Wales began teaching a Made-for-Wales GCSE in Computer Science in September 2025, and Northern Ireland sets its own qualifications through CCEA. Even the year a child starts school differs: a child born on 1 March 2022 usually starts in September 2026 in England and in August 2027 in Scotland. Modern Age Coders teaches live online from India, for ages 6 to 67, in groups of five to ten or one to one. The first lesson costs nothing; after that a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Type "what school year is a child born on 1 March 2022 in" into a search box or an AI assistant and you may well get one confident answer. In the UK there are at least three. England, Scotland and Northern Ireland each publish their own rule for when a child starts school, and the rules cut the year in different places: 1 September in England, 1 March in Scotland, 2 July in Northern Ireland. A child born on the wrong side of one of those days starts school a year earlier or later than a child born the day before. Wales follows the English year, but one Welsh council has just changed the term in which children start full time. This page turns those published rules into a small program, then tries to break it, because the gap between a rule written in English and a rule written in code is where most real software goes wrong.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in the UK.',

  picks: {
    eyebrow: 'Course picks for the UK',
    h2: 'Four courses across four school systems',
    intro: 'A Year 3 pupil in Leeds, an S3 pupil in Glasgow ready for real Python, a GCSE student in Cardiff, and an adult in Belfast tired of fixing the same spreadsheet by hand. Each one starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games in Scratch where a rule decides which level a character joins, and the first hunt for the one age where the rule goes wrong.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python read before it is written, for Key Stage 3 and 4 in England and Wales, S1 to S4 in Scotland and Years 8 to 11 in Northern Ireland.' },
      { course: 'gcse-computer-science-course', band: 'GCSE years', note: 'The programming and theory GCSE Computer Science asks for, taught to the specification the school has chosen.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Scripts that apply a rule to a sheet of dates or records, with the edge cases tested before anyone relies on the output.' }
    ]
  },

  sections: [
    {
      id: 'nations', tint: '', eyebrow: 'Four school systems',
      h2: 'One country, four ways through school',
      intro: 'The UK does not have one education system. England, Scotland, Wales and Northern Ireland each run their own curriculum, name their own year groups and set or regulate their own exams, so the first question in a free lesson is which system a learner is in.',
      body: [
        { kind: 'table', caption: 'Where computing sits in each nation, as the awarding bodies describe it', head: ['Nation', 'School stages', 'Computing qualifications', 'Set by'], rows: [
          ['England', 'Reception, then Years 1 to 13 in key stages', 'GCSE and A level Computer Science', 'Several exam boards, including AQA, OCR and Pearson Edexcel'],
          ['Scotland', 'Primary 1 to 7, then S1 to S6', 'National 5, Higher and Advanced Higher Computing Science', 'Qualifications Scotland, which replaced SQA on 1 February 2026'],
          ['Wales', 'Reception, then Years 1 to 13 under the Curriculum for Wales', 'Made-for-Wales GCSE Computer Science, taught from September 2025', 'WJEC'],
          ['Northern Ireland', 'Primary 1 to 7, then Years 8 to 14', 'GCSE Digital Technology and GCE Software Systems Development', 'CCEA']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'England: a board, not a single exam', p: 'A school in England picks one board\'s GCSE Computer Science, and the papers differ. Our <a class="cg-inline-link" href="/uk-gcse-computer-science-tutoring">GCSE Computer Science page</a> sets the main specifications side by side.' },
          { h3: 'Scotland: a new name, the same course', p: 'Qualifications Scotland became the national awarding body on 1 February 2026. Its own course page says the National 5 Computing Science documents remain current, so this year\'s S4 pupils work to the course last year\'s did.' },
          { h3: 'Wales: a GCSE in two halves', p: 'WJEC\'s outline for the Made-for-Wales GCSE gives it two units worth 50 percent each: a digital exam on understanding computer science, and an on-screen programming exam built on a brief released in advance, with Python as the specified language.' }
        ] },
        { kind: 'p', text: 'In Northern Ireland, CCEA sets GCSE Digital Technology and a GCE in Software Systems Development. This page names the two qualifications and leaves their detail to CCEA\'s own specifications. Our classes do not replace any of these courses or their exams. They give a learner more time writing and testing real programs than a school timetable usually allows, at an hour that fits around the school day.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One child, one birthday, four answers',
      intro: 'Three governments publish the rule for when a child starts school, and the rules disagree. Learners turn them into one function, then try to break it on the days the rules change.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Copy the rules exactly', p: 'England\'s summer-born advice, last updated on 27 April 2023, says children born from 1 September in one year to 31 August the following year are normally taught together. Scotland\'s Parentzone guidance splits birthdays at 1 March. Northern Ireland\'s Department of Education splits them between 1 July and 2 July.' },
          { h3: '2. Make the nation an input', p: 'A function that only knows England gives a confident wrong answer to a family in Glasgow or Belfast. The rule becomes data, one small table per nation, instead of a date buried inside an if statement.' },
          { h3: '3. Test the edges first', p: 'The birthdays that matter sit either side of a cut-off: 31 August and 1 September, 28 February and 1 March, 1 July and 2 July. One test on each side of each boundary catches most of the mistakes a program can make.' }
        ] },
        { kind: 'table', caption: 'The usual first full-time school year, by date of birth (Reception in England, Primary 1 in Scotland and Northern Ireland)', head: ['Date of birth', 'England', 'Scotland', 'Northern Ireland'], rows: [
          ['31 August 2021', 'September 2025', 'August 2026', 'September 2026'],
          ['1 September 2021', 'September 2026', 'August 2026', 'September 2026'],
          ['28 February 2022', 'September 2026', 'August 2026', 'September 2026'],
          ['1 March 2022', 'September 2026', 'August 2027', 'September 2026'],
          ['1 July 2022', 'September 2026', 'August 2027', 'September 2026'],
          ['2 July 2022', 'September 2026', 'August 2027', 'September 2027']
        ] },
        { kind: 'p', text: 'Read across a row and one child starts school in two or three different years. Read down a column and a single day moves a child by a whole year: 31 August against 1 September in England, 28 February against 1 March in Scotland, 1 July against 2 July in Northern Ireland. The table shows the usual pattern, not an obligation. In England, summer-born children, those born from 1 April to 31 August, do not have to start until the September after their fifth birthday. In Scotland, a child who is still 4 on the day they are due to start can have their entry deferred by a year. In Northern Ireland, the School Age (Northern Ireland) Act 2022 lets parents of children born between 1 April and 1 July ask to defer by a year.' },
        { kind: 'callout', h3: 'The bug we made building this table', p: 'Our own first draft of the Northern Ireland rule was a year out for every child whose fourth birthday falls between 2 July and 31 August. The rule says such a child starts in the September following their fifth birthday, and the draft read that as the September of the following year. A July or August birthday is followed by the September of the same year. One test on 2 July caught it. That is the whole lesson: a rule written in English has to be pinned down before it is written in code, and the pin is a test on the boundary.' }
      ]
    },
    {
      id: 'local', tint: 'tint', eyebrow: 'When the nation is not enough',
      h2: 'A Welsh council, a leap year and five habits',
      intro: 'Some rules are set below the level of the nation, and some are written in words a program can misread.',
      body: [
        { kind: 'p', text: 'Carmarthenshire County Council ended its Rising 4s policy from the 2025/26 school year. Children there now start full-time education in the school term following their fourth birthday, rather than the term in which they turn four, and the council\'s own example is a child born between 1 September and 31 December 2021, who starts full time in January 2026. A program that stores one rule for Wales is already wrong for some Welsh families, so the rule table gains a second key: the nation, then the council wherever a council publishes its own policy.' },
        { kind: 'spec', title: 'The last day in February', p: 'Scotland\'s guidance does not say 28 February. It says the last day in February, which is the 29th in a leap year. A program that hard-codes 28 misfiles a child born on 29 February 2020, and it passes every test written by someone who forgot that leap years exist.' },
        { kind: 'table', caption: 'Habits for any rule that changes at a date or a border', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Quote the rule', 'Copy the sentence from the official page, with the date the page was updated', 'A remembered rule that changed last year'],
          ['Make place an input', 'Nation first, then the council where a council sets its own policy', 'One answer applied silently everywhere'],
          ['Test both sides', 'The day before and the day of every cut-off', 'An off-by-one year that looks plausible'],
          ['Respect the calendar', 'Leap years, term dates and wording such as the last day of a month', 'A rule that fails once every four years'],
          ['Separate usual from required', 'Keep the normal start apart from deferral and compulsory age', 'Advice that reads like an obligation']
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with any government department, council, awarding body or exam board named on this page, and nothing here suggests one. The school start rules are quoted from the official pages as read on 19 September 2026, and the table is our own reading of them. For a real decision about a child\'s school place, the council\'s admissions team is the authority.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Across the UK',
      h2: 'Places and exams we already cover',
      intro: 'The UK section of this site grows one place and one exam at a time, and each page is written for its own city or course rather than copied from this one.',
      body: [
        { kind: 'p', text: 'There is more than one way to count the UK\'s places. The government\'s list of cities, published on 29 August 2022 after the Platinum Jubilee Civic Honours Competition, has 76: 55 in England, 8 in Scotland, 7 in Wales and 6 in Northern Ireland. The statistics office counts built-up areas instead of city limits. Outside London the largest at the 2021 Census was Birmingham, with 1,121,375 people, and the largest in Wales was Cardiff, with 348,535. London is the exception in that count: its settlements cannot be told apart, so its figures follow borough boundaries.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Cities and AI', p: '<a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/coding-classes-in-leicester">Leicester</a> have their own coding pages, and London has one for <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning</a>. Nationally, <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-uk">AI and machine learning classes in the UK</a> builds its project on rail data.' },
          { h3: 'Computing exams', p: '<a class="cg-inline-link" href="/uk-gcse-computer-science-tutoring">GCSE Computer Science</a>, <a class="cg-inline-link" href="/cambridge-igcse-computer-science-tuition">Cambridge IGCSE Computer Science</a> and <a class="cg-inline-link" href="/cambridge-a-level-computer-science-online-classes">Cambridge A Level Computer Science</a>, each taught to the specification the learner sits.' },
          { h3: 'Maths', p: '<a class="cg-inline-link" href="/ks2-maths-tuition-online">KS2</a>, <a class="cg-inline-link" href="/ks3-maths-tuition-online">KS3</a>, <a class="cg-inline-link" href="/gcse-maths-tuition-online">GCSE</a>, <a class="cg-inline-link" href="/a-level-maths-tuition-online">A level</a> and <a class="cg-inline-link" href="/further-maths-tuition-online">Further Maths</a>, the <a class="cg-inline-link" href="/11-plus-maths-tuition">11 plus</a>, <a class="cg-inline-link" href="/common-entrance-maths-tuition">Common Entrance</a> and the <a class="cg-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT challenges</a>.' }
        ] },
        { kind: 'p', text: 'For younger children there is <a class="cg-inline-link" href="/online-coding-classes-for-kids-uk">online coding for kids in the UK</a>. Maths by stage of life has its own pages for <a class="cg-inline-link" href="/online-maths-tuition-for-kids-in-uk">primary children</a>, <a class="cg-inline-link" href="/online-maths-tuition-for-teens-in-uk">teenagers</a>, <a class="cg-inline-link" href="/online-maths-tuition-for-college-students-in-uk">sixth form and university students</a> and <a class="cg-inline-link" href="/online-maths-classes-for-adults-in-uk">adults</a>.' }
      ]
    }
  ].concat(ukIndex()),

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a rule with an edge to a program that respects it',
    intro: 'The free lesson places a learner by watching real work. The nation decides the vocabulary; the ladder underneath is the same.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules inside games', p: 'Children build games where a rule decides who plays which level, then look for the one age at which the rule goes wrong.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Conditions and tests', p: 'Python if statements and comparisons, and the first habit of checking the value on each side of a limit.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Exams and published rules', p: 'Programming for GCSE, National 5 and CCEA courses, and real published rules turned into tested functions.', courses: ['gcse-computer-science-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rules at work', p: 'Adults automate the rule-heavy parts of a job, such as eligibility, deadlines and date ranges, and test them before a colleague depends on them.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will say which school year a child is in within a second. Why learn to write the rule yourself?',
    intro: 'Because the answer depends on a fact the question usually leaves out.',
    p1: 'Ask an assistant which year a child born on 1 March 2022 starts school and it may well give the English answer, September 2026, without saying that it assumed England. For a family in Edinburgh that answer is a year early. The assistant has not malfunctioned; it filled a gap in the question with the most common case. Noticing that there is a gap, and knowing which fact fills it, is the part that stays with the person asking.',
    p2: 'A learner who has written the four-nation function carries the habit into every rule-shaped problem: tax years, contract dates, age limits on apps, the closing date of a competition. Each one has an edge, each edge has a day on either side, and each can depend on where you are. An AI can write the function quickly once it is told the rules. Knowing which rules, whose rules and which dates to test is the programmer\'s share of the work.',
    closer: 'So the case for a UK child learning to code in 2026 is not that machines cannot write code. It is that someone has to know what the code should do, and in a country with four school systems that is rarely one thing.',
    blogAnchor: 'why learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Cornwall to Shetland, one class at one hour',
    intro: 'An online class reaches all four nations at once, with no journey and no centre to find.',
    cells: [
      { h3: 'At home', p: 'A learner in Truro and a learner in Lerwick join the same group from home, and neither travels anywhere.' },
      { h3: 'Your school words kept', p: 'Reception and Year 9, P7 and S4, Year 8 and the transfer test: teachers use the stages of the learner\'s own nation, and all teaching is in English.' },
      { h3: 'A free first lesson', p: 'A real task, then a suggested level, course and weekly hour. No card details are asked for.' },
      { h3: 'Groups across borders', p: 'Five to ten learners at one level, drawn from all four nations and other countries, so every stage has a group at a workable hour.' },
      { h3: 'Around school holidays', p: 'Two lessons a week, around eight a month, with pauses for holidays and exam weeks agreed with the family. Scottish and Northern Irish summer holidays begin earlier than English ones, and the plan allows for that.' },
      { h3: 'Teaching from India', p: 'UK time runs five and a half hours behind India time in winter and four and a half in summer. The clocks go back on 25 October 2026 and forward on 28 March 2027, and lesson times are always confirmed in UK time.' }
    ],
    spec: { title: 'Four nations, one group', p: 'A group needs five learners who match on level, subject and hour. Across four school systems that is easier to find than in any single city, which is why groups draw on learners from every part of the UK and beyond.' }
  },

  fees: {
    h2: 'What classes cost in the UK',
    intro: 'Three prices, stated once.',
    first: 'One lesson on a real problem, ending in a placement and a course suggestion.',
    group: 'A month of lessons, usually eight, with five to ten learners at the same level.',
    private: 'A month of lessons, usually eight, with one teacher for one learner.',
    closer: 'UK families pay in US dollars, the rate used for every country outside India, with no separate price list in pounds and no difference between the four nations. Payment starts only after the free lesson has settled a course and a weekly hour. The pricing page covers pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, quoted without edits',

  book: {
    h2: 'Which nation, and which school year?',
    intro: 'Tell us where the learner is at school and what they enjoy. The first task might be a Scratch game, a first Python function with a rule and an edge, or a topic from the exam they are sitting.',
    success: 'Thank you. Your UK class request is on its way to the team.'
  },

  faq: {
    h2: 'UK coding class questions',
    intro: 'The four systems, the school start rules and the lessons.',
    items: [
      { q: 'Do you teach the curriculum of every UK nation?', a: 'Yes. Teachers work with England\'s key stages and GCSEs, Scotland\'s National 5, Higher and Advanced Higher courses, the Curriculum for Wales and its Made-for-Wales GCSEs, and Northern Ireland\'s CCEA qualifications. The classes support school work and never replace it.' },
      { q: 'When does a child start school in each part of the UK?', a: 'It depends on the nation. A child born on 1 March 2022 usually starts Reception in England in September 2026, Primary 1 in Northern Ireland in September 2026 and Primary 1 in Scotland in August 2027. Summer-born and deferral rules can move the date, and the council\'s admissions team has the final word.' },
      { q: 'Who replaced SQA in Scotland?', a: 'Qualifications Scotland, on 1 February 2026. Its own course page says the existing National 5 Computing Science documents remain current.' },
      { q: 'What is the Made-for-Wales GCSE in Computer Science?', a: 'A WJEC GCSE taught from September 2025. WJEC\'s outline gives it two units of 50 percent each, a digital exam and an on-screen programming exam based on a brief released in advance, with Python as the specified language.' },
      { q: 'What is the school start project on this page?', a: 'Learners turn three published rules for when children start school into one function, with the nation as an input, then test it on the birthdays either side of each cut-off: 31 August and 1 September, 28 February and 1 March, 1 July and 2 July.' },
      { q: 'What time are lessons for UK learners?', a: 'The hour is agreed after the free lesson and depends on which groups are running. UK time is five and a half hours behind India time in winter and four and a half in summer, and every time is confirmed in UK time before any payment.' },
      { q: 'Do classes fit around GCSEs, Highers and CCEA exams?', a: 'Yes. Families agree pauses for exam weeks and holidays, and the course is chosen around the school year the learner is in, whichever nation that is.' },
      { q: 'Is there a Modern Age Coders centre in the UK?', a: 'No. All teaching is live and online, and no UK premises or office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.', boiler: true },
      { q: 'What do coding classes in the UK cost?', a: 'Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level runs at a workable hour, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Cities, exams and the AI page',
    html: 'For AI and machine learning built from the ground up, see <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-uk">AI and machine learning classes in the UK</a>. The city pages so far are <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/coding-classes-in-leicester">Leicester</a>, and every UK exam page is listed above. For the tests any class, anywhere, should pass, read <a class="cg-inline-link" href="/best-coding-class-in-the-world">eight tests for any coding class</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Across the UK',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-classes-in-leicester', label: 'Leicester' },
    { href: '/ai-and-machine-learning-classes-in-uk', label: 'AI classes, UK' }
  ],

  personalityCss: `
.cg-root.cg-ukh .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.2vw, 2.7rem); }
.cg-root.cg-ukh .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-ukh .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-ukh .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ukh .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-ukh .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2rem); }
.cg-root.cg-ukh .cg-table caption { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-ukh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ukh .cg-table th:first-child { font-weight: 700; }
.cg-root.cg-ukh .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ukh .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'United Kingdom, four school systems. England: gov.uk "Summer-born children starting school: advice for parents" (updated 27 April 2023): children born from 1 April to 31 August are summer-born and do not need to start school until the September after their fifth birthday; "Children born from 1 September in one year to 31 August the following year are normally educated together in one year group." gov.uk school starting age: most children start reception full time in September after their fourth birthday; compulsory school age is 31 December, 31 March or 31 August following the fifth birthday, whichever comes first. Scotland: Education Scotland, Parentzone "Starting school": birthdays 1 March to 31 August start in the August the year they turn 5; 1 September to the last day in February start in the August before they turn 5; a child still 4 on the start date can defer by a year. Northern Ireland: Department of Education, school starting age: aged 4 on or between 1 September and 1 July, start at the beginning of the next school year; aged 4 on or between 2 July and 31 August, start in the September following the fifth birthday; deferral under the School Age (Northern Ireland) Act 2022 for children born between 1 April and 1 July. Wales: Carmarthenshire County Council removed its Rising 4s policy from 2025/26, admitting full-time learners in the term following the fourth birthday; example, born 1 September to 31 December 2021, full time from January 2026. Qualifications: sqa.org.uk (Qualifications Scotland) "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland\'s new national awarding body", N5 Computing Science documents remain current; WJEC GCSE Computer Science (Made for Wales), teaching Sept 2025, outline version 1.4: Unit 1 Understanding Computer Science, digital exam, 50%; Unit 2 Computer Programming, on-screen exam on a pre-released brief, 50%; Python the specified language; CCEA GCSE Digital Technology and GCE Software Systems Development (names only, from CCEA page titles). Places: gov.uk List of cities, 29 August 2022, after the Platinum Jubilee Civic Honours Competition: England 55, Wales 7, Scotland 8, Northern Ireland 6 (76). ONS Towns and cities, characteristics of built-up areas, Census 2021, released 2 August 2023, tables 1c and 1d: Birmingham 1,121,375 (largest BUA in England excluding London), Cardiff 348,535 (largest in Wales); note 3, Greater London follows borough boundaries because its settlements cannot be separately identified. gov.uk clocks: back 25 October 2026 (2am), forward 28 March 2027 (1am).',
    localProject: 'One child, one birthday, four answers: the published rules for the usual first school year in England (born 1 September to 31 August taught together), Scotland (split at 1 March; last day in February) and Northern Ireland (split between 1 July and 2 July) turned into one function with the nation as an input, then tested on the birthday either side of each cut-off. Worked table for 31 August 2021, 1 September 2021, 28 February 2022, 1 March 2022, 1 July 2022 and 2 July 2022 (England Sept 2025/2026, Scotland Aug 2026/2027, NI Sept 2026/2027), computed by script and checked by hand. Our own first draft of the NI rule was a year out for 2 July to 31 August birthdays (the September following the fifth birthday read as the next calendar year); the page reports it. Second layer, the nation is not always enough: Carmarthenshire ended Rising 4s and admits full time in the term after the fourth birthday. Third, calendar wording: the last day in February is the 29th in a leap year. Lesson family: a rule as data keyed by jurisdiction, with boundary tests; distinct from Kuwait (inclusive-range fencepost counting) and Letterkenny (zero-based indexing), and from every dossier checked on 19 September 2026 for cut-off, school year, birthday, leap year and off-by-one.',
    requiredMentions: [
      '1,121,375',
      '348,535',
      'Platinum Jubilee',
      'Carmarthenshire',
      'Rising 4s',
      'School Age (Northern Ireland) Act 2022',
      'Qualifications Scotland',
      'Made-for-Wales',
      'summer-born',
      'last day in February',
      'Parentzone',
      '27 April 2023'
    ],
    sources: [
      { claim: 'gov.uk, Summer-born children starting school: advice for parents (updated 27 April 2023): "Children born from 1 April to 31 August - known as summer-born children"; "Children born from 1 September in one year to 31 August the following year are normally educated together in one year group."', url: 'https://www.gov.uk/government/publications/summer-born-children-school-admission/summer-born-children-starting-school-advice-for-parents' },
      { claim: 'gov.uk, School starting age: "Most children start reception full-time in September after their fourth birthday." Compulsory school age "on 31 December, 31 March or 31 August following their fifth birthday - whichever comes first."', url: 'https://www.gov.uk/schools-admissions/school-starting-age' },
      { claim: 'Education Scotland, Parentzone Scotland, Starting school: "If your child\'s birthday is on or between 1 March - 31 August, your child will usually start school at the beginning of the Autumn term in the August the year they turn 5." "If your child\'s birthday is on or between 1 September - last day in February ... in the August before they turn 5." Deferral if still 4 on the start date.', url: 'https://education.gov.scot/parentzone/my-child/transitions/starting-school' },
      { claim: 'Department of Education (NI), School starting age: "Where a child reaches the age of 4 on or between 1 September and 1 July, the child will usually start school at the beginning of the next school year." "Where a child reaches the age of 4 on or between 2 July and 31 August in the same calendar year, the child will start school in the September following their fifth birthday." Deferral "available on parental request to any child born between 1 April and 1 July".', url: 'https://www.education-ni.gov.uk/topics/school-starting-age' },
      { claim: 'Carmarthenshire County Council, Changes to full time education start date: the decision "to remove the Rising 4s policy and admit full time learners to primary schools in the school term following their fourth birthday", from 2025/26; example, born 1 September to 31 December 2021, January 2026.', url: 'https://www.carmarthenshire.gov.wales/council-services/education-schools/school-admissions-and-changing-schools/changes-to-full-time-education-start-date/' },
      { claim: 'Qualifications Scotland, National 5 Computing Science: "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland\'s new national awarding body." "The documents on this page remain current and you can continue to use them."', url: 'https://www.sqa.org.uk/sqa/56923.html' },
      { claim: 'WJEC, GCSE Computer Science (Made for Wales), teaching from September 2025; qualification outline version 1.4: Unit 1 Understanding Computer Science, digital only examination, 50%; Unit 2 Computer Programming, on-screen examination based on a pre-released brief, 50%; "using Python as the specified language".', url: 'https://www.wjec.co.uk/qualifications/gcse-computer-science-teaching-from-2025/' },
      { claim: 'gov.uk, List of cities (29 August 2022), following the Platinum Jubilee Civic Honours Competition: England 55, Wales 7, Scotland 8, Northern Ireland 6.', url: 'https://www.gov.uk/government/publications/list-of-cities/list-of-cities-html' },
      { claim: 'ONS, Towns and cities, characteristics of built-up areas, England and Wales: Census 2021 (released 2 August 2023), tables 1c and 1d: Birmingham 1,121,375; Cardiff 348,535; note 3 on Greater London following borough boundaries.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/housing/datasets/townsandcitiescharacteristicsofbuiltupareasenglandandwalescensus2021' },
      { claim: 'gov.uk, When do the clocks change: back 25 October 2026, forward 28 March 2027; "forward 1 hour at 1am on the last Sunday in March, and back 1 hour at 2am on the last Sunday in October."', url: 'https://www.gov.uk/when-do-the-clocks-change' }
    ],
    rejectedClaims: [
      'CCEA GCSE Digital Technology Route A and Route B detail: ccea.org.uk refused an automated check (HTTP 403, not circumvented); only the qualification names are used.',
      'Automatic approval of January and February deferrals in Scotland: found only in search summaries, not on the Parentzone page as read.',
      'A single Wales-wide start rule: only Carmarthenshire\'s own policy was read, so no rule is stated for Wales as a whole.',
      'Shares of the population in each ONS built-up area size class: the class definitions were not found in the workbook notes.',
      'The old hub\'s "Oxbridge alumni" teaching claim and its Oxbridge, CSAT and MAT admissions preparation: unverified, and admissions work is excluded by owner decision 6.',
      'Pound figures of any kind, including competitor rates the old hub printed: USD is the only currency on UK pages.'
    ]
  }
};
