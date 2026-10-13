'use strict';
// New South Wales (cg- state page, Australia cluster Phase 1 preview; index for the NSW city and suburb pages).
// Spine: ISO 8601 week dates against home-made week numbers, on the NSW Department of Education's 2027 term
// dates (read raw 7 October 2026). Measured by us on 7 October 2026 (scratchpad au/nsw_iso.py, Python
// date.isocalendar and strftime): Friday 1 January 2027 is ISO 2026-W53 (ISO 2026 has 53 weeks, ISO 2027 has
// 52); naive week = (day of year - 1) // 7 + 1 disagrees with the ISO week on 157 of 2027's 365 days, %U
// (Sunday weeks) on 54 and %W (Monday weeks, week 0 before the first Monday) on 3, the three days 1 to 3 January
// whose ISO year is 2026. Term 1 Eastern division Thursday 28 January to Friday 9 April 2027 is ISO weeks 4 to
// 14 but naive weeks 4 to 15; Term 2 17 to 26 (naive 27); Term 3 29 to 38 (naive 39); Term 4 Monday 11 October
// to Monday 20 December is 41 to 51 on both. Weekdays per term (before development days and public holidays):
// 52, 49, 50, 51 (Eastern total 202); Term 1 Western division starts Thursday 4 February, 47 weekdays. Lesson
// family: ISO week dates and calendar arithmetic; screened free site-wide on 7 October 2026 (iso week: 0 hits).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats New South Wales (STE 1): 8,072,163
// people, median age 39 (Australia 38), 2,135,964 families, 3,357,785 private dwellings; Bachelor degree level
// and above 1,838,502 (27.8 percent; 23.4 percent in 2016; Australia 26.3 percent). NSW Government About the
// HSC: NESA oversees it; at least 12 units of preliminary courses and 10 units of HSC courses including English;
// first HSC 1967, about 18,000 students, roughly 74,480 in 2022; in 2023 there were 124 written exams; each
// year more than 60,000 students sit a compulsory English exam. NSW Department of Education placement test
// page: Selective High School Placement Test for Year 7 entry in 2027 on Friday 1 to Saturday 2 May 2026, make-up
// Friday 22 May 2026; Opportunity Class Placement Test for Year 5 entry in 2027 on Friday 8 to Saturday 9 May
// 2026; computer-based on department computers; example timetable Reading 45 min, Mathematical Reasoning 40,
// Thinking Skills 40, Writing 30. NSW Curriculum: Mathematics K-10 Syllabus (2022), Early Stage 1 and Stage 1
// for K to 2, paths in Stages 4 and 5, core as the foundation for Mathematics Standard 11-12; Software
// Engineering 11-12 Syllabus (2022), Year 11 and Year 12 courses, a major software project. NSW Government
// daylight saving page. No admissions advice, rankings or school results.

const PLACES = [
  ['Sydney', 'best-coding-classes-in-sydney'], ['Newcastle', 'online-coding-and-python-classes-in-newcastle-nsw'],
  ['the Central Coast', 'vibe-coding-and-ai-agents-classes-in-central-coast-nsw'], ['Wollongong', 'best-coding-classes-in-wollongong']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'NEW SOUTH WALES', label: 'New South Wales', blurb: 'NESA, the stages, the HSC and the placement tests, with a project on why week numbers disagree.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-new-south-wales',
  code: 'nsa',
  accent: '#287044',
  accentRationale: 'New South Wales: a eucalypt green (HSV saturation 0.64, value 0.44), at least 12 RGB units from every accent in content/ and far from the Sydney harbour blue, 4.8:1 or better on every paper tint',
  pageType: 'city',
  place: {
    name: 'New South Wales',
    eyebrow: 'New South Wales, Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'New South Wales, Australia',
  title: 'Coding and AI Classes in New South Wales | Kindergarten to HSC',
  description: 'Live online coding, Python, AI and maths classes for NSW learners from Kindergarten to HSC and adult, planned around NSW stages and terms. First lesson free.',
  ogDescription: 'Coding and AI classes across New South Wales, with a project on why the 2027 school terms land in different week numbers depending on how you count.',
  twitterDescription: 'NSW coding and AI classes, Kindergarten to HSC and adult, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for New South Wales Learners',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults across New South Wales, planned around the NSW stages and school terms.'
  },

  h1: 'Coding and AI classes in New South Wales',
  capsuleQ: 'Which coding and AI classes suit a New South Wales learner best?',
  capsule: 'Classes that speak the state\'s own language: Kindergarten and the stages, Year 11 and 12, the HSC and four school terms. New South Wales counted 8,072,163 people at the 2021 Census. We teach learners aged 6 to 67 live online, from a first Scratch game to Python, AI and HSC Software Engineering technique, either privately or with a handful of classmates at the same standard, and the trial lesson is free.',
  lead: 'Every NSW school publishes its terms as dates. Every planner, spreadsheet and app turns those dates into week numbers. And here is the trap our project is built on: depending on how you count, the same term starts and ends in different weeks. Term 1 for Eastern division schools in 2027 runs from Thursday 28 January to Friday 9 April. By the international ISO standard that is week 4 to week 14. By the obvious home-made method, day of the year divided by seven, it ends in week 15. Worse, the first three days of 2027 are not in 2027 at all by ISO reckoning: Friday 1 January belongs to week 53 of 2026. NSW learners write the code, find every disagreement and learn why international software insists on one definition.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in New South Wales.',

  picks: {
    eyebrow: 'Course picks for NSW',
    h2: 'Four routes for a New South Wales learner',
    intro: 'Matched to the stage the learner is in and what they want to build. Each begins with a free lesson and no card details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Kindergarten to Year 5', note: 'Scratch stories and games, including a school-holiday countdown that knows how many weekdays are left in term.' },
      { course: 'python-ai-kids-masterclass', band: 'Years 5 to 8', note: 'First Python with dates, timers and calendars, the gentlest way into real programs with real rules.' },
      { course: 'python-complete-masterclass-teens', band: 'Years 9 to 12', note: 'Python with the habits a major software project rewards: tests, edge cases and code another person can read.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Automating timetables, rosters and reports, where getting a week number wrong costs real people a real day.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'New South Wales in the Census',
      h2: 'Eight million people and a rising share of graduates',
      intro: 'Statewide figures as QuickStats published them after the 2021 count, set beside the national numbers.',
      body: [
        { kind: 'table', caption: 'NSW in numbers: 2021 QuickStats, ABS', head: ['Measure', 'New South Wales', 'Australia'], rows: [
          ['People', '8,072,163', 'Not compared'],
          ['Median age', '39', '38'],
          ['Families', '2,135,964', 'Not compared'],
          ['Private dwellings', '3,357,785', 'Not compared'],
          ['People aged 15 and over with a bachelor degree or higher', '1,838,502, or 27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More graduates than in 2016', p: 'In 2021, 27.8% of NSW residents aged 15 and over held a bachelor degree or higher, up from 23.4% at the 2016 Census.' },
          { h3: 'A slightly older state', p: 'The median age in New South Wales was 39 in 2021, one year above the national figure of 38.' },
          { h3: 'Sydney at its centre', p: 'Greater Sydney accounts for 5,231,147 of the state\'s people, which is why the Sydney page doubles as the hub for its suburbs.' }
        ] },
        { kind: 'p', text: 'All figures are the Bureau\'s published totals. Census tables are adjusted one by one to protect privacy, so the parts of a table are never added together here to make a total of our own.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The NSW system',
      h2: 'Stages, the HSC and the placement tests, as NSW describes them',
      intro: 'From the NSW Curriculum website, the NSW Government\'s About the HSC page and the Department of Education\'s placement test page. We describe them; we do not give admissions advice.',
      body: [
        { kind: 'table', caption: 'The NSW stages of learning, as the NSW Curriculum website sets them out', head: ['Stage', 'School years'], rows: [
          ['Early Stage 1', 'Kindergarten'],
          ['Stage 1', 'Year 1 and Year 2'],
          ['Stage 2', 'Year 3 and Year 4'],
          ['Stage 3', 'Year 5 and Year 6'],
          ['Stage 4', 'Year 7 and Year 8'],
          ['Stage 5', 'Year 9 and Year 10'],
          ['Stage 6', 'Year 11 and Year 12']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Stages, not grades', p: 'NSW teaches in two-year stages. In the Mathematics K to 10 Syllabus (2022), Stages 4 and 5 offer paths, and the core content is the foundation for Mathematics Standard 11 to 12 in Stage 6.' },
          { h3: 'The HSC', p: 'NSW describes the Higher School Certificate as the highest level of attainment school students can achieve in the state. The NSW Education Standards Authority, NESA, oversees it. Students complete at least 12 units of preliminary courses and 10 units of HSC courses, including English.' },
          { h3: 'Software Engineering', p: 'The Software Engineering 11 to 12 Syllabus (2022) has a Year 11 course on the fundamentals of creating software and a Year 12 course that extends them, built around a major software project. The project is the student\'s own work; we teach technique, never the assessed task itself.' }
        ] },
        { kind: 'table', caption: 'Placement tests for 2027 entry, as published by the NSW Department of Education', mt: true, head: ['Test', 'Entry', 'Test dates'], rows: [
          ['Selective High School Placement Test', 'Year 7 in 2027', 'Friday 1 to Saturday 2 May 2026; make-up Friday 22 May 2026'],
          ['Opportunity Class Placement Test', 'Year 5 in 2027', 'Friday 8 to Saturday 9 May 2026']
        ] },
        { kind: 'p', text: 'The department says both tests are computer-based and taken on computers it provides, and each student sits on one day only. Its example timetable for the selective test lists a 45-minute Reading test, a 40-minute Mathematical Reasoning test, a 40-minute Thinking Skills test and a 30-minute Writing test. We teach the maths and reasoning skills these sections draw on as part of ordinary lessons; we make no claims about selection or results.' },
        { kind: 'spec', title: 'The HSC in numbers, from NSW itself', p: 'The first HSC was held in 1967, when about 18,000 students sat it; NSW reports roughly 74,480 students in 2022. In 2023 there were 124 written exams, and each year more than 60,000 students sit a compulsory English exam.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which week does each 2027 term start and end in?',
      intro: 'The NSW Department of Education\'s published 2027 term dates, turned into week numbers three different ways. Our calculation, checked day by day.',
      body: [
        { kind: 'table', caption: 'NSW 2027 terms: ISO weeks against a home-made week count (our calculation)', head: ['Term (published dates)', 'ISO weeks', 'Home-made weeks', 'Weekdays'], rows: [
          ['Term 1, Eastern: Thursday 28 January to Friday 9 April', '4 to 14', '4 to 15', '52'],
          ['Term 1, Western: Thursday 4 February to Friday 9 April', '5 to 14', '5 to 15', '47'],
          ['Term 2: Tuesday 27 April to Friday 2 July', '17 to 26', '17 to 27', '49'],
          ['Term 3: Monday 19 July to Friday 24 September', '29 to 38', '29 to 39', '50'],
          ['Term 4: Monday 11 October to Monday 20 December', '41 to 51', '41 to 51', '51']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count it the obvious way', p: 'Take the day of the year, subtract one, divide by seven and add one. It is simple, and across 2027 it disagrees with the ISO week on 157 of the year\'s 365 days.' },
          { h3: '2. Ask the standard', p: 'ISO 8601 starts weeks on Monday and calls week 1 the week that contains the year\'s first Thursday. Python\'s isocalendar does exactly that, and it says Friday 1 January 2027 is in week 53 of 2026.' },
          { h3: '3. Try the shortcuts', p: 'Python\'s strftime offers two more week numbers. The Sunday-start %U disagrees with ISO on 54 days of 2027; the Monday-start %W on only 3, the first three days of January, which it calls week 0.' }
        ] },
        { kind: 'callout', h3: 'Weekdays are not school days', p: 'The weekday column counts Monday to Friday between the published first and last dates: 202 for the Eastern division across the four terms. It is not the number of days students attend. The department notes that its term dates include school development days, when students stay home, and public holidays fall inside some terms too. Learners have to say what their number counts before anyone uses it.' },
        { kind: 'p', text: 'All week numbers and day counts on this page are our calculations from the department\'s published dates, made on 7 October 2026. The dates themselves are the department\'s; check its calendar page for any change before planning around them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Dates in code',
      h2: 'Five habits for any program that handles dates',
      intro: 'Learned on NSW school terms, then used on rosters, bookings, payroll periods and anything that says "week" in its column heading.',
      body: [
        { kind: 'table', caption: 'How to stop week numbers from lying', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Name the definition', 'Write "ISO week" or "school week", never just "week"', 'Two teams meaning different things by week 15'],
          ['Keep the year with the week', 'Store 2026-W53, not 53', 'Filing 1 January 2027 under the wrong year'],
          ['Use the library, then test it', 'Call isocalendar, then check it on 1 to 4 January', 'Trusting a function on the days it was not tried'],
          ['Count what you mean', 'Separate weekdays, school days and calendar days', 'A plan built on days nobody attends'],
          ['Re-read the source', 'Check the published dates again before relying on them', 'Planning against a calendar that has changed']
        ] },
        { kind: 'p', text: 'The second habit catches the most bugs. A spreadsheet that stores only the number 53 cannot tell week 53 of 2026 from a week that does not exist in 2027, which has only 52 ISO weeks. Storing the year beside the week fixes it for good.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch calendar that counts down the weekdays to the holidays, and the surprise when it is asked about New Year\'s Day.' },
          { h3: 'Teenagers', p: 'The 2027 NSW terms in Python, three week-numbering methods side by side, and a table of every day they disagree.' },
          { h3: 'Adults', p: 'A small script that turns any published term list into ISO weeks, weekdays and a warning for days that cross a year.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Across the state',
      h2: 'NSW places with pages of their own',
      intro: 'City and suburb pages are added one at a time, only where there are enough verified local facts to say something true about that place.',
      body: [
        { kind: 'p', text: 'Places in New South Wales covered so far or planned: ' + linked(PLACES) + '. Each linked page carries its own local data project; the unlinked ones are in preparation and are named here so families know they are on the list.' },
        { kind: 'spec', title: 'Clocks in New South Wales', p: 'NSW moves its clocks forward one hour at 2am on Sunday 4 October 2026 and back at 3am on Sunday 4 April 2027, according to the NSW Government. India keeps one time all year, so the gap to our teachers is four and a half hours in the cooler months and five and a half in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a holiday countdown to a calendar that cannot be fooled',
    intro: 'Stages are a starting guide. The free lesson decides where a learner really begins.',
    cols: [
      { band: 'Kindergarten to Year 2', h3: 'Counting days', p: 'Programs that count, wait and repeat, and the first idea that days and weeks follow rules.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 3 to 6', h3: 'Calendars and timers', p: 'Building a calendar from scratch and checking it against a real one, month by month.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 7 to 12', h3: 'Standards and edge cases', p: 'ISO weeks, year boundaries and test cases chosen to break code, the habits a major software project rewards.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Dates at work', p: 'Rosters, bookings and reports that stay right across year ends, time zones and daylight saving.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will number the weeks for you. Why should a NSW student learn to check it?',
    intro: 'Because "week 15" and "week 14" can describe the same Friday, and a confident tool will not say which it means.',
    p1: 'Ask an assistant which week of 2027 Term 1 ends in and you may get 14 or 15, delivered with equal confidence, because the question never said which definition of a week it meant. Ask it to write a week-number function and it may hand back day-of-year arithmetic that is right for most of the year and wrong on 157 days. The code runs. The numbers look reasonable. The bug only shows when someone compares two systems that counted differently.',
    p2: 'A student who has lined up three week-numbering methods against the NSW terms knows the questions to ask: which definition, which year does the week belong to, and what happens on 1 January. Those questions apply to every generated answer that involves dates, money periods or time zones, and they are exactly the questions an HSC Software Engineering student is expected to ask of their own code.',
    closer: 'So the reason for a New South Wales student to learn to code in 2026 is not to out-type an AI tool. It is to be the person in the room who asks which week, and why.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the coast to the western plains, one timetable',
    intro: 'Broken Hill and Byron Bay are a long drive apart, and the state even starts Term 1 on two different days. A video lesson does not care about either.',
    cells: [
      { h3: 'Eastern or Western division', p: 'Term 1 starts a week later for Western division schools in 2027. We plan the first weeks of the year around whichever division a learner\'s school follows.' },
      { h3: 'The state\'s own vocabulary', p: 'Teachers talk about Early Stage 1, Stage 4 or Year 12 exactly as a NSW classroom would, so nothing gets lost between school and lesson. Every class is in English.' },
      { h3: 'Trial first', p: 'The opening lesson is a genuine one, with a task to finish. Afterwards the teacher suggests a level, a course and a weekly hour, and nobody asks for payment details.' },
      { h3: 'Matched classmates', p: 'Each group holds between five and ten people working at a similar standard. They come from across the state, interstate and overseas, which keeps a sensible hour open for almost every level.' },
      { h3: 'Two lessons most weeks', p: 'Around eight a month at a fixed time, paused for school holidays and exam weeks by agreement with the teacher.' },
      { h3: 'Teachers on India time', p: 'Our teachers keep India time all year, so an NSW after-school class sits in the late morning or early afternoon of their working day.' }
    ],
    spec: { title: 'Placement test season', p: 'The 2026 selective and opportunity class tests were held in May. Families who want maths and reasoning practice can simply say so in the free lesson; we fit it into ordinary classes and make no promises about results.' }
  },

  fees: {
    h2: 'What classes cost in New South Wales',
    intro: 'The same three numbers everywhere in the state.',
    first: 'A full lesson at no cost, ending with a recommended level, course and weekly time.',
    group: 'A month of teaching, usually eight lessons, with fifteen to twenty learners at the same level.',
    private: 'The same monthly rhythm of around eight lessons, one teacher and one learner.',
    closer: 'Every family outside India is billed in US dollars at one rate, which means Albury and Bondi see an identical invoice and no regional price list exists. Billing begins only after the trial lesson has fixed a course and a weekly slot; holidays off, a missed class or a move between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from our families, unedited',

  book: {
    h2: 'Tell us which stage the learner is in',
    intro: 'The first task fits the learner: a Scratch countdown for a Stage 1 child, a first Python calendar for Years 5 to 8, or the 2027 week-number puzzle for a senior student.',
    success: 'Thank you. The team will be in touch shortly about a New South Wales class.'
  },

  faq: {
    h2: 'New South Wales coding class questions',
    intro: 'What NSW families ask us first.',
    items: [
      { q: 'How many people live in New South Wales?', a: 'The 2021 Census counted 8,072,163 people in New South Wales, with a median age of 39 against 38 for Australia.' },
      { q: 'What is an ISO week?', a: 'An ISO week is a week defined by the international standard ISO 8601: it starts on Monday, and week 1 of a year is the week containing that year\'s first Thursday. That is why Friday 1 January 2027 falls in ISO week 53 of 2026.' },
      { q: 'What is the NSW week-number project?', a: 'Learners turn the NSW Department of Education\'s 2027 term dates into week numbers three ways, ISO, Sunday-start and a home-made day-of-year count, and list every day they disagree. Across 2027 the home-made count disagrees with ISO on 157 days.' },
      { q: 'What is the HSC?', a: 'The Higher School Certificate is the credential NSW describes as the highest level of attainment its school students can achieve. NESA oversees it, and students complete at least 12 units of preliminary courses and 10 units of HSC courses, including English.' },
      { q: 'Do you help with HSC Software Engineering?', a: 'We teach the programming, design and testing technique the Software Engineering 11 to 12 syllabus draws on. The major software project is the student\'s own work under NESA rules, and we never write any assessed task.' },
      { q: 'Do you prepare students for the selective and OC tests?', a: 'We teach the maths and reasoning skills the Mathematical Reasoning and Thinking Skills sections draw on, as part of normal lessons. We do not give admissions advice and make no claims about selection.' },
      { q: 'What time are lessons for NSW learners?', a: 'Any weekday afternoon or evening, or on a weekend, agreed during the trial and always written in NSW time. India runs four and a half hours behind NSW in the cooler months and five and a half behind while daylight saving lasts.' },
      { q: 'Is there a Modern Age Coders centre in New South Wales?', a: 'No, and none is claimed. Every lesson is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do coding classes cost in NSW?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for NSW and Australian learners',
    html: 'For Sydney itself, with a project on finding the middle of 885 bus stops, read <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. Learners aiming at maths competitions can start with <a class="cg-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AMC and AIO preparation</a>, and those after maths support can see <a class="cg-inline-link" href="/online-maths-tutoring-australia">online maths tutoring in Australia</a>. The national overview sits on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'New South Wales and Australia',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI in Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-nsa .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 2.8rem); }
.cg-root.cg-nsa .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-nsa .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-nsa .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-nsa .cg-section-head h2 { max-width: 36ch; letter-spacing: -0.01em; }
.cg-root.cg-nsa .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.1rem); }
.cg-root.cg-nsa .cg-table caption { font-weight: 600; letter-spacing: 0.02em; }
.cg-root.cg-nsa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nsa .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-nsa .cg-spec { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'New South Wales, ABS Census 2021 QuickStats, state 1 (read 7 October 2026): 8,072,163 people; median age 39 (Australia 38); 2,135,964 families; 3,357,785 private dwellings; level of highest educational attainment, people aged 15 and over: bachelor degree level and above 1,838,502 (27.8 percent; 2016 23.4 percent; Australia 26.3 percent). NSW Government, About the HSC: the HSC is the highest level of attainment that school students can achieve in NSW; NESA oversees the HSC; at least 12 units of preliminary courses and 10 units of HSC courses, including English; more than 60,000 students sit a compulsory English exam each year; in 2023 there were 124 written exams; first HSC 1967, about 18,000 students, roughly 74,480 in 2022. NSW Department of Education placement test page: Selective High School Placement Test for Year 7 entry in 2027, Friday 1 to Saturday 2 May 2026, make-up Friday 22 May 2026; Opportunity Class Placement Test for Year 5 entry in 2027, Friday 8 to Saturday 9 May 2026; computer-based on computers provided by the department; one test day per student; example timetable Reading Test 45 mins, Mathematical Reasoning Test 40 mins, Thinking Skills Test 40 mins, Writing Test 30 mins. NSW Curriculum primary stages page: Early Stage 1 Kindergarten; Stage 1 Year 1 and Year 2; Stage 2 Year 3 and Year 4; Stage 3 Year 5 and Year 6; Stage 4 Year 7 and Year 8; Stage 5 Year 9 and Year 10; Stage 6 Year 11 and Year 12; NESA provides the curriculum for Kindergarten to Year 12. NSW Curriculum: Mathematics K-10 Syllabus (2022), Early Stage 1 and Stage 1 for K-2, paths in Stages 4 and 5, core content as the foundation for Mathematics Standard 11-12; Software Engineering 11-12 Syllabus (2022), Year 11 course on fundamental elements of creating software, Year 12 course extends them, a major software project. NSW Department of Education term dates 2027: Term 1 Eastern Thursday 28 January to Friday 9 April, Western Thursday 4 February to Friday 9 April; Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December; school development days are included in the term dates. NSW Government daylight saving: Sunday 4 October 2026 2am AEST to Sunday 4 April 2027 3am AEDT.',
    localProject: 'ISO week dates on the 2027 NSW school terms (calculated 7 October 2026 with Python date.isocalendar and strftime). Friday 1 January 2027 = ISO 2026-W53; ISO 2026 has 53 weeks and ISO 2027 52. Over the 365 days of 2027, naive week ((day of year - 1) // 7 + 1) differs from the ISO week on 157 days, strftime %U on 54 and %W on 3 (1 to 3 January, ISO year 2026). ISO weeks by term: Term 1 Eastern 4 to 14 (naive 4 to 15), Western 5 to 14 (5 to 15), Term 2 17 to 26 (17 to 27), Term 3 29 to 38 (29 to 39), Term 4 41 to 51 (41 to 51). Weekdays Monday to Friday between published first and last dates: 52, 47 (Western Term 1), 49, 50, 51; Eastern total 202, which is not a count of student attendance days. Lesson family: ISO 8601 week dates, year-boundary weeks, calendar arithmetic; distinct from time-zone, Julian day and date-parsing pages.',
    requiredMentions: [
      '8,072,163',
      '2,135,964',
      '3,357,785',
      '1,838,502',
      '74,480',
      '124 written exams',
      'Friday 22 May 2026',
      'week 53 of 2026',
      'Thursday 28 January',
      'Monday 20 December'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, New South Wales: people, median age, families, private dwellings, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1' },
      { claim: 'NSW Government, About the HSC: NESA, unit requirements, exam snapshot, 2023 exam committees and written exams, history from 1967.', url: 'https://educationstandards.nsw.edu.au/wps/portal/nesa/11-12/hsc/about-HSC' },
      { claim: 'NSW Department of Education, placement test page: test dates for 2027 entry, computer-based delivery, example timetables.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test' },
      { claim: 'NSW Department of Education, future and past NSW term dates and school holidays (2027 terms; development days included).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'NSW Curriculum, primary stages page: Early Stage 1 Kindergarten through Stage 6 Year 11 and Year 12.', url: 'https://curriculum.nsw.edu.au/stages/primary' },
      { claim: 'NSW Curriculum, Mathematics K-10 Syllabus (2022) overview.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-k-10-2022/overview' },
      { claim: 'NSW Curriculum, Software Engineering 11-12 Syllabus (2022) overview.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview' },
      { claim: 'NSW Government, daylight saving 2026 and 2027 dates.', url: 'https://www.nsw.gov.au/about-nsw/daylight-saving' }
    ],
    rejectedClaims: [
      'Selective school cut-off scores, offers or rankings: admissions-adjacent and excluded by the cluster rules.',
      'HSC results, bands, ATAR outcomes and school league tables: excluded by the cluster rules.',
      'Student attendance days per term: the published term dates include school development days and public holidays, which were not subtracted, so only weekdays are counted.',
      'Opportunity class test section timings beyond the Reading test: not quoted in full.',
      'Income, rent, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with NESA, the NSW Department of Education or the ABS.'
    ]
  }
};
