'use strict';
// Tasmania (cg- state page, Australia cluster Phase 5; index for the Tasmanian city pages).
// Spine: Conway's Doomsday rule on Tasmania's 2027 school calendar. The Department for Education, Children and
// Young People (DECYP) term dates page (read raw 7 October 2026) gives the 2027 term and holiday dates without
// weekdays (Term 1 4 February to 9 April, Term 2 26 April to 2 July, Term 3 19 July to 24 September, Term 4
// 11 October to 16 December, holidays 10 to 25 April, 3 to 18 July, 25 September to 10 October), but does print
// weekdays for eight other 2027 dates: school teachers commence Monday 1 February and finish Friday 17 December;
// college teachers commence Monday 25 January and finish Friday 10 December; professional learning days Friday
// 11 June (K-12 statewide), Monday 19 July (K-10 statewide), Friday 22 October (K-10 South only), Friday 29
// October (K-10 North only). Calculated by us on 7 October 2026: the 2027 doomsday is Sunday (anchor Tuesday for
// the 2000s; 27 = 2 x 12 + 3; 3 // 4 = 0; 2 + 3 + 0 = 5; Tuesday + 5 = Sunday). The rule gives Term 1 starting on
// a Thursday and Term 4 ending on a Thursday, all other term starts on Mondays and ends on Fridays, every holiday
// starting on a Saturday and ending on a Sunday; it agrees with all 8 published weekdays and with Python's
// calendar on all 22 dates checked. Monday 19 July is both the published first day of Term 3 and a K-10
// statewide professional learning day. Lesson family: Conway's Doomsday rule (day-of-week by mental arithmetic),
// screened free site-wide on 7 October 2026 ("doomsday" 0 hits). Place facts read raw 7 October 2026: ABS Census
// 2021 QuickStats Tasmania (STE 6): 557,571 people, median age 42, 150,573 families, 258,611 private dwellings,
// 2.4 per household, bachelor degree and above 101,841 (21.9 percent; 2016 16.2 percent; Australia 26.3).
// Greater Hobart 247,086. IANA tzdata 2026e: Australia/Hobart rule AT, daylight saving from the first Sunday in
// October to the first Sunday in April.

const PLACES = [
  ['Hobart', 'best-coding-classes-in-hobart'], ['Launceston', 'best-coding-classes-in-launceston'],
  ['Devonport', 'ai-and-programming-classes-in-devonport'], ['Burnie', 'vibe-coding-and-ai-agents-classes-in-burnie']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'TASMANIA', label: 'Tasmania', blurb: 'Tasmanian terms, the TASC, and a project that works out the weekday of every 2027 school date in your head.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-tasmania',
  code: 'tast',
  accent: '#304454',
  accentRationale: 'Tasmania: a cold-water slate chosen by hand (HSV saturation 0.43, value 0.33), at least 11 RGB units from every accent in use and 8.2:1 against the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Tasmania',
    eyebrow: 'Tasmania, Australia',
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
  routeLabel: 'Tasmania, Australia',
  title: 'Coding and AI Classes in Tasmania | Prep to College, Online',
  description: 'Live online coding, Python, AI and maths lessons for Tasmanian learners from Prep age to college and adult, planned around Tasmanian terms. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Tasmania, with a project that finds the weekday of every 2027 school date using nothing but mental arithmetic.',
  twitterDescription: 'Tasmanian coding and AI lessons, Prep age to college and adult, live online, first lesson free.',
  ogImageCourse: 'mental-maths-mastery-kids',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Tasmanian Learners',
    description: 'Level-matched online coding, Python, AI and mathematics for children, teenagers and adults across Tasmania, planned around the Tasmanian school terms and colleges.'
  },

  h1: 'Coding and AI classes in Tasmania',
  capsuleQ: 'What should Tasmanian families look for in the best coding and AI classes?',
  capsule: 'Lessons that suit Tasmania\'s school and college calendar and teach real thinking alongside the code. Tasmania counted 557,571 people at the 2021 Census. We teach learners aged 6 to 67 live online, from early Scratch through Python, logic and AI, individually or in a small group of similar ability, and the opening lesson is free.',
  lead: 'Tasmania\'s education department lists the 2027 school terms as bare dates: Term 1 from 4 February to 9 April, Term 4 from 11 October to 16 December. Which days of the week are those? You could open a calendar. Or you could do what the mathematician John Conway did and work it out in your head in a few seconds. His Doomsday rule says that certain easy dates, 4 April, 6 June, 8 August, 10 October, 12 December, always share a weekday within any year. Find that weekday once and every other date follows by counting. Our learners turn the rule into code, check every 2027 Tasmanian school date and test it against the eight weekdays the department does print.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Tasmania.',

  picks: {
    eyebrow: 'Course picks for Tasmania',
    h2: 'Four ways in for a Tasmanian learner',
    intro: 'Based on age and what the learner enjoys. Each one starts with a trial lesson at no cost.',
    items: [
      { course: 'mental-maths-mastery-kids', band: 'Prep age to Year 4', note: 'Mental arithmetic games that build the number sense the Doomsday rule depends on.' },
      { course: 'scratch-programming-complete-course', band: 'Years 3 to 7', note: 'Scratch projects with calendars and countdowns, including one that names the weekday of any birthday.' },
      { course: 'python-complete-masterclass-teens', band: 'Years 8 to 12', note: 'Python with dates and rules: turning a clever mental method into code and proving it against a library.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College, university and adult', note: 'Python from the beginning for adults, with dates, files and the small scripts that save real time.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tasmania in the Census',
      h2: 'The smallest state, and the oldest median age',
      intro: 'Statewide figures as QuickStats published them for 2021, beside the national figure where there is one.',
      body: [
        { kind: 'table', caption: 'Tasmania in numbers: 2021 QuickStats, ABS', head: ['Measure', 'Tasmania', 'Australia'], rows: [
          ['People', '557,571', 'No figure given'],
          ['Median age', '42', '38'],
          ['Families', '150,573', 'No figure given'],
          ['Private dwellings', '258,611', 'No figure given'],
          ['Average people per household', '2.4', 'No figure given'],
          ['People aged 15 and over with a bachelor degree or higher', '101,841, or 21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A big rise in degrees', p: 'Between 2016 and 2021 the share of Tasmanians aged 15 and over holding a bachelor degree or higher climbed from 16.2% to 21.9%.' },
          { h3: 'An older island', p: 'Tasmania\'s median age of 42 was four years above the national median in 2021, so adults returning to learn make up a real share of any class.' },
          { h3: 'Hobart and the north', p: 'Greater Hobart had 247,086 residents in 2021. The rest of the state lives around Launceston, the north-west coast and smaller towns.' }
        ] },
        { kind: 'p', text: 'These are the Bureau\'s published totals. Census tables are adjusted cell by cell to protect privacy, so we do not add a table\'s rows together and call the result a total.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The Tasmanian year',
      h2: 'Four terms, separate colleges and regional days off',
      intro: 'From the Department for Education, Children and Young People\'s term dates page. We describe the calendar and give no enrolment advice.',
      body: [
        { kind: 'table', caption: '2027 school term dates for school and college students, as published by DECYP', head: ['Period', 'Dates'], rows: [
          ['Term 1', '4 February to 9 April'],
          ['Term 1 holiday', '10 April to 25 April'],
          ['Term 2', '26 April to 2 July'],
          ['Term 2 holiday', '3 July to 18 July'],
          ['Term 3', '19 July to 24 September'],
          ['Term 3 holiday', '25 September to 10 October'],
          ['Term 4', '11 October to 16 December']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Colleges keep their own end date', p: 'The department notes that colleges set their own finishing dates, which may depend on exam dates, so senior students\' last day can differ from the table.' },
          { h3: 'North and South differ', p: 'In 2027 there is a K to 10 professional learning day for the South only on Friday 22 October and one for the North only a week later, on Friday 29 October. A K to 12 day for the whole state falls on Friday 11 June.' },
          { h3: 'Senior study', p: 'Tasmanian senior courses are set by TASC. Our pages on <a class="cg-inline-link" href="/tasc-computer-science-help">TASC Computer Science</a> and <a class="cg-inline-link" href="/tasc-mathematics-methods-tutoring">TASC Mathematics Methods</a> describe them in detail.' }
        ] },
        { kind: 'spec', title: 'Dates for teachers', p: 'For 2027 the department says school teachers start on Monday 1 February and finish on Friday 17 December, and college teachers start on Monday 25 January and finish on Friday 10 December. These are among the few dates on the page printed with their weekday, which makes them perfect test cases for our project.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What day of the week does each 2027 term start?',
      intro: 'Conway\'s Doomsday rule applied by hand and in code to DECYP\'s 2027 dates, then checked against the weekdays the department prints. Our calculation, 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Weekdays of the 2027 Tasmanian term dates, worked out with the Doomsday rule (our calculation)', head: ['Date', 'Nearest doomsday in 2027', 'Weekday'], rows: [
          ['4 February, Term 1 starts', '28 February (Sunday), 24 days later', 'Thursday'],
          ['9 April, Term 1 ends', '4 April (Sunday), 5 days earlier', 'Friday'],
          ['26 April, Term 2 starts', '4 April (Sunday), 22 days earlier', 'Monday'],
          ['2 July, Term 2 ends', '11 July (Sunday), 9 days later', 'Friday'],
          ['19 July, Term 3 starts', '11 July (Sunday), 8 days earlier', 'Monday'],
          ['24 September, Term 3 ends', '5 September (Sunday), 19 days earlier', 'Friday'],
          ['11 October, Term 4 starts', '10 October (Sunday), 1 day earlier', 'Monday'],
          ['16 December, Term 4 ends', '12 December (Sunday), 4 days earlier', 'Thursday']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Find the year\'s doomsday', p: 'For the 2000s start from Tuesday. 27 divided by 12 is 2 remainder 3, and 3 divided by 4 is 0 remainder 3. Add 2, 3 and 0 to get 5, and five days after Tuesday is Sunday. Every doomsday in 2027 is a Sunday.' },
          { h3: '2. Count from a landmark', p: 'Every month has an easy doomsday: 4 April, 6 June, 8 August, 10 October and 12 December, plus the last day of February. From 10 October, a Sunday, the next day, 11 October, must be Monday.' },
          { h3: '3. Check it', p: 'The rule agrees with all eight weekdays the department prints, from Monday 25 January to Friday 17 December, and with Python\'s calendar on all 22 dates we tested. Every holiday starts on a Saturday and ends on a Sunday.' }
        ] },
        { kind: 'callout', h3: 'A Monday that is also a day off', p: 'The published first day of Term 3, Monday 19 July 2027, is also listed as a K to 10 statewide professional learning day, when students do not attend. Spotting that took nothing more than putting two lists side by side once both had weekdays. Learners discover that working out the dates is only half the job; checking them against everything else on the page is the other half.' },
        { kind: 'p', text: 'The weekdays in this section are our calculations from the department\'s published dates. The dates themselves belong to DECYP and can change; check its page before planning around them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Dates in code',
      h2: 'Five habits for turning a clever trick into reliable code',
      intro: 'Learned on a calendar rule, then applied to any shortcut someone hands you, including one an AI tool writes.',
      body: [
        { kind: 'table', caption: 'How to trust a shortcut', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Write the rule down exactly', 'Spell out every step, including the century anchor', 'A method that only works in your head'],
          ['Test against a library', 'Compare with Python\'s calendar on many dates', 'Silent errors on the dates you did not try'],
          ['Test the awkward cases', 'Leap years, 29 February and the first days of January', 'Bugs hiding in rare dates'],
          ['Use outside evidence', 'Check against weekdays published by someone else', 'Agreeing with yourself and calling it proof'],
          ['Read the whole source', 'Compare every list on the page, not just one', 'Missing a clash like a term start that is a day off']
        ] },
        { kind: 'p', text: 'The fourth habit is the easiest to skip and the most valuable. Agreeing with Python\'s calendar shows the code matches Python; agreeing with the eight weekdays the department printed shows both match the real world.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch program that asks for a birthday this year and announces the weekday, using a table of easy dates.' },
          { h3: 'Teenagers', p: 'The Doomsday rule in Python, tested against the calendar module and the department\'s eight published weekdays.' },
          { h3: 'Adults', p: 'A small tool that reads any list of dates, adds weekdays and flags dates that clash with a second list.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Around the island',
      h2: 'Tasmanian places with a page',
      intro: 'City pages are added one at a time, only where enough verified local facts exist to describe the place truthfully.',
      body: [
        { kind: 'p', text: 'Tasmanian places covered or planned: ' + linked(PLACES) + '. A linked name already has its own page and data project; the others are in preparation and are listed so families can see them coming.' },
        { kind: 'spec', title: 'Clocks in Tasmania', p: 'Tasmania moves its clocks forward on the first Sunday in October and back on the first Sunday in April, the rule recorded for Australia/Hobart in the IANA time zone database. Our teachers are on India time, four and a half hours behind Tasmania in winter and five and a half behind in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From mental maths to code that checks itself',
    intro: 'The year bands are a starting point only. The free lesson shows where a learner really fits.',
    cols: [
      { band: 'Prep age to Year 2', h3: 'Counting and patterns', p: 'Counting forward and back, repeating patterns and the first programs that loop.', courses: ['mental-maths-mastery-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 3 to 6', h3: 'Calendars and rules', p: 'Days, weeks and months as patterns, and programs that follow a rule step by step.', courses: ['scratch-programming-complete-course', 'maths-through-coding'] },
      { band: 'Years 7 to 12', h3: 'Algorithms you can prove', p: 'Turning mental methods into functions and testing them against a trusted reference.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'College to age 67', h3: 'Dates and data at work', p: 'Schedules, rosters and reports with dates that are checked, not assumed.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can tell you the weekday of any date. Why should a Tasmanian student learn the rule?',
    intro: 'Because the habit of checking an answer against independent evidence is worth more than any single answer.',
    p1: 'Ask an assistant what day 4 February 2027 falls on and it will probably be right. Ask it to write a weekday function from scratch and it may hand back something that works for most dates and slips on leap years or the first days of January. The output looks authoritative either way. The only defence is a learner who knows how to test it: against a library, against tricky dates and against evidence printed by someone else.',
    p2: 'A student who has derived 2027\'s weekdays with the Doomsday rule and matched them to the department\'s eight printed weekdays has practised exactly that discipline. It applies to every generated answer, not just dates: what independent evidence would confirm this, and have I looked at it?',
    closer: 'That is why a Tasmanian student should still learn to code in 2026: to be the person who checks the answer, not just the person who receives it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hobart, Launceston or the west coast, the same live class',
    intro: 'Tasmania\'s towns are spread across mountains and coastline. An online lesson needs no ferry and no long drive.',
    cells: [
      { h3: 'North and South calendars', p: 'Professional learning days differ between the North and South. Tell the teacher which region your school follows and lessons fit around it.' },
      { h3: 'College students too', p: 'Colleges set their own finishing dates. Senior students can plan lessons right up to their exams and pause afterwards.' },
      { h3: 'Trial lesson first', p: 'The first session is a full lesson with a finished task, then a suggested level, course and weekly time, with no card requested.' },
      { h3: 'Groups of equals', p: 'Fifteen to twenty learners per group, matched by standard and drawn from Tasmania, other states and abroad, so most levels have a good hour.' },
      { h3: 'Regular rhythm', p: 'Two lessons a week, around eight a month, at a fixed time, with school holidays paused by arrangement.' },
      { h3: 'India time behind us', p: 'Our teachers keep India time, so a Tasmanian afternoon lesson lands in the middle of their working day.' }
    ],
    spec: { title: 'Adults are welcome', p: 'With Tasmania\'s median age at 42, many of our Tasmanian enquiries come from adults. Adult learners study in adult groups or one to one.' }
  },

  fees: {
    h2: 'What lessons cost in Tasmania',
    intro: 'One price list for the whole island.',
    first: 'A full first lesson with no charge, ending with a suggested level, course and weekly time.',
    group: 'A month of lessons, generally eight, with fifteen to twenty learners at a similar level.',
    private: 'About eight lessons a month in the same pattern, one teacher with one learner.',
    closer: 'Outside India, every family pays in US dollars at a single rate, so Burnie and Battery Point receive identical invoices. Nothing is charged before the trial has agreed a course and a lesson time; the pricing page covers holidays, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Reviews from our families on Google, as posted',

  book: {
    h2: 'Tell us the learner\'s year level',
    intro: 'The first task suits the learner: a mental maths game for a young child, a Scratch birthday-weekday program for the middle years, or the Doomsday rule in Python for a senior student.',
    success: 'Thank you. The team will be in touch soon about a class in Tasmania.'
  },

  faq: {
    h2: 'Tasmanian coding class questions',
    intro: 'What Tasmanian families usually ask before booking.',
    items: [
      { q: 'How many people live in Tasmania?', a: 'The 2021 Census counted 557,571 people in Tasmania, with a median age of 42, the highest of any state, and 247,086 of them in Greater Hobart.' },
      { q: 'What is the Doomsday rule?', a: 'The Doomsday rule is a method devised by the mathematician John Conway for working out the day of the week of any date mentally. A set of easy dates, such as 4 April, 6 June and 12 December, always share one weekday within a year, and every other date is found by counting from them.' },
      { q: 'What is the Tasmanian weekday project?', a: 'Learners use the Doomsday rule to work out the weekday of every 2027 Tasmanian term and holiday date, which the department lists without weekdays, then check the method against the eight dates it does print with weekdays. All of them agree.' },
      { q: 'When are the 2027 Tasmanian school terms?', a: 'Term 1 runs 4 February to 9 April, Term 2 26 April to 2 July, Term 3 19 July to 24 September and Term 4 11 October to 16 December, according to the Department for Education, Children and Young People.' },
      { q: 'Do you help with TASC subjects?', a: 'Yes, by teaching technique and understanding. Our TASC Computer Science and Mathematics Methods pages explain what we cover. Anything submitted for assessment remains the student\'s own work.' },
      { q: 'What time are lessons for Tasmanian learners?', a: 'Afternoons, evenings or weekends, agreed in the trial and always written in Tasmanian time. India is four and a half hours behind Tasmania in winter and five and a half hours behind during daylight saving.' },
      { q: 'Can adults join?', a: 'Yes. Learners up to 67 study with us, in adult groups or one to one, from complete beginners to people automating parts of their working day.' },
      { q: 'Is there a Modern Age Coders centre in Tasmania?', a: 'No, and none is claimed. All teaching is live and online, with no premises in Australia; a learner needs a laptop or desktop, sound and a reliable connection, and the phone number shown is in India.', boiler: true },
      { q: 'How much do coding classes cost in Tasmania?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. The course, format and time are settled before anything is paid.', boiler: true },
      { q: 'How many learners share a group?', a: 'Between five and ten, grouped by level, pace and aims rather than by age or town. Where no group meets at a workable time, the learner is offered one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Tasmanian learners',
    html: 'College students can turn to <a class="cg-inline-link" href="/tasc-computer-science-help">TASC Computer Science help</a> or <a class="cg-inline-link" href="/tasc-mathematics-methods-tutoring">TASC Mathematics Methods tutoring</a>. Younger learners preparing for NAPLAN can use <a class="cg-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>, and anyone planning around the school holidays can read about our <a class="cg-inline-link" href="/school-holiday-coding-course-australia">school holiday coding course</a>. Every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tasmania and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/tasc-computer-science-help', label: 'TASC Computer Science' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-tast .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-tast .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-tast .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-tast .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tast .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-tast .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 2.15rem); }
.cg-root.cg-tast .cg-table caption { font-weight: 600; letter-spacing: 0.015em; }
.cg-root.cg-tast .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tast .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-tast .cg-spec { border-left-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Tasmania, ABS Census 2021 QuickStats, state 6 (read 7 October 2026): 557,571 people; median age 42 (Australia 38); 150,573 families; 258,611 private dwellings; average 2.4 people per household; bachelor degree level and above 101,841 (21.9 percent; Tasmania 2016 67,863, 16.2 percent; Australia 2021 26.3 percent). Greater Hobart GCCSA 6GHOB: 247,086 people. Department for Education, Children and Young People term dates page (decyp.tas.gov.au/learning/term-dates): 2027 Term 1 4 February - 9 April; Term 1 Holiday 10 April - 25 April; Term 2 26 April - 2 July; Term 2 Holiday 3 July - 18 July; Term 3 19 July - 24 September; Term 3 Holiday 25 September - 10 October; Term 4 11 October - 16 December; colleges have their own finishing dates, which may depend on exam dates; teachers in schools commence on Monday 1 February and finish on Friday 17 December; teachers in colleges commence on Monday 25 January and finish on Friday 10 December; 2027 professional learning days Friday, 11 June K-12 Statewide; Monday, 19 July K-10 Statewide; Friday, 22 October K-10 South only; Friday, 29 October K-10 North only. IANA tzdata 2026e: Zone Australia/Hobart rule AT; Rule AT 2001 to max October Sunday on or after 1st daylight saving, 2008 to max April Sunday on or after 1st standard time. TASC details are on the dedicated TASC pages.',
    localProject: 'Conway\'s Doomsday rule on the 2027 DECYP calendar (calculated 7 October 2026). Century anchor for 2000-2099 Tuesday; 2027: 27 // 12 = 2, 27 % 12 = 3, 3 // 4 = 0; 2 + 3 + 0 = 5; Tuesday + 5 = Sunday. Doomsday reference dates in 2027 (non-leap): 3 January, 28 February, 14 March, 4 April, 9 May, 6 June, 11 July, 8 August, 5 September, 10 October, 7 November, 12 December. Results: Term 1 starts Thursday 4 February, ends Friday 9 April; holidays start Saturday and end Sunday (10 to 25 April, 3 to 18 July, 25 September to 10 October); Terms 2 to 4 start on Mondays; Terms 1 to 3 end on Fridays; Term 4 ends Thursday 16 December. Agrees with all 8 weekdays printed by DECYP for 2027 and with Python datetime on all 22 dates checked. Monday 19 July is both the published Term 3 start and a K-10 statewide professional learning day. Lesson family: Conway\'s Doomsday rule, mental day-of-week calculation; distinct from ISO week numbering, Zeller-style congruence and time-zone pages.',
    requiredMentions: [
      '557,571',
      '150,573',
      '258,611',
      '101,841',
      'Friday 11 June',
      'South only',
      'North only',
      'Monday 25 January',
      'Doomsday rule'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Tasmania: people, median age, families, private dwellings, household size, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/6' },
      { claim: 'ABS Census 2021 QuickStats, Greater Hobart: people.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/6GHOB' },
      { claim: 'Department for Education, Children and Young People (Tasmania), school terms and holidays: 2027 terms, college note, teacher dates and professional learning days.', url: 'https://www.decyp.tas.gov.au/learning/term-dates/' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Hobart and rule AT.', url: 'https://data.iana.org/time-zones/tzdb/australasia' },
      { claim: 'Python documentation, datetime module, used as the independent check on every computed weekday.', url: 'https://docs.python.org/3/library/datetime.html' }
    ],
    rejectedClaims: [
      'Tasmanian public holidays, statewide and regional: the WorkSafe Tasmania and CBOS pages returned 403 and were not circumvented.',
      'Whether students attend on Monday 19 July 2027 at every school: the page lists it as a K-10 statewide professional learning day; we state only that both entries exist.',
      'TASC results, ATAR outcomes, school rankings and college comparisons: excluded by the cluster rules.',
      'Biographical detail about John Conway beyond devising the rule: not needed and not verified at a primary source.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with DECYP, TASC or the ABS.'
    ]
  }
};
