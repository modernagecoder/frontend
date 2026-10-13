'use strict';
// Albany, WA (cg- regional city page, Australia cluster Phase 7, row 170). Shaped page (vibe coding and AI agents):
// leads with teenagers and adults. Spine: an agent is asked how many Albany schools teach each year level; why does a
// one-character slip make it report that none teach Year 12? Data: WA Department of Education, Western Australian
// Schools Lists, SchoolsListExcel0880.xlsx (Creative Commons Attribution 4.0, on data.wa.gov.au), downloaded 8 October
// 2026; columns used: school name, suburb, postcode, Low Year, High Year (no student numbers). Measured by us
// (scratchpad au/r5/alb_diff.py): 1,152 schools statewide, 2 without a year range; 20 schools with postcode 6330.
// Difference array over the 14 levels KIN, PPR, Y01 to Y12: schools covering each level KIN 16, PPR 14, Y01 to Y06 14,
// Y07 to Y10 8, Y11 and Y12 7. Work: 160 single increments if every covered level is updated one at a time, against
// 40 range updates plus one 14-step running-total pass; statewide 9,756 increments against 2,300 updates. Off-by-one
// version (closing the range at the high year instead of one past it): KIN 13, Y06 5, Y10 7, Y12 0. Lesson family:
// difference array (range increments) for year-level coverage; screened free site-wide on 9 October 2026 and claimed by
// AU-R5. No school is named on the page and no sector breakdown is shown.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Albany Significant Urban Area (5001), with
// Western Australia and Australia: 35,053 people; median age 45; 9,245 families; 16,140 private dwellings; 2.3 people
// per household; separate house 12,112 (90.0 percent; WA 79.7; Australia 72.3); flat or apartment 64 (0.5; WA 6.5);
// Professionals 2,717 (17.2; WA 22.0); Technicians and Trades Workers 2,500 (15.9; WA 15.3); Labourers 2,003 (12.7; WA
// 9.4); Bachelor Degree level and above 4,407 (15.2; WA 23.8; Australia 26.3); aged 15 to 19: 2,170 (6.2); aged 20 to
// 24: 1,611 (4.6; WA 6.0); industry: Cafes and Restaurants 486 (3.1; WA 2.3). WA Department of Education 2027 term
// dates: Term 2 Monday 26 April to Friday 2 July; Term 4 Monday 11 October to Thursday 16 December. IANA tz:
// Australia/Perth UTC+8, no daylight saving. Excluded by the cluster rules: income, rent, mortgage, ancestry,
// birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ALBANY', label: 'Albany, WA', blurb: 'Albany, the WA schools list, and the one-character slip that makes an AI agent report no Year 12 classes.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-albany-wa',
  code: 'alby',
  accent: '#26662E',
  accentRationale: 'Albany: a southern karri green (HSV saturation 0.63, value 0.40, hue 127), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.9:1 on white and 5.6:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Albany',
    eyebrow: 'Albany, Western Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Albany, Western Australia',
  title: 'Vibe Coding and AI Agents Classes in Albany, WA',
  description: 'Live online vibe coding and AI agents classes for Albany teens and adults: build with AI, then test what it builds against real WA data. Small groups or one to one.',
  ogDescription: 'Vibe coding and AI agents classes for Albany teens and adults, with a project where one slip makes an agent say no school teaches Year 12.',
  twitterDescription: 'Vibe coding and AI agents classes in Albany, WA, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Albany Learners',
    description: 'Level-matched online vibe coding, AI agent building, Python and testing for teenagers and adults across Albany and the Great Southern, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Albany',
  capsuleQ: 'What is the best way for an Albany learner to start building with AI agents?',
  capsule: 'Describe what you want, let the AI draft it, then test the result against data you can check by hand, with a teacher beside you. Albany\'s urban area held 35,053 people at the 2021 Census. Lessons are live and online, solo or with a few classmates at your level, and the first costs nothing.',
  lead: 'The WA Department of Education publishes every school in the state with the lowest and highest year level it teaches. For the 20 schools with an Albany postcode, an AI agent can answer "how many schools teach each year?" with a neat trick called a difference array: add one where a school\'s range starts, subtract one just after it ends, then keep a running total. Done correctly, it reports 16 schools at kindergarten, 14 through primary and 7 in Years 11 and 12. Ask for the same code in a hurry and the agent may close each range at the last year instead of the one after it. The program still runs, and now it says no Albany school teaches Year 12.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding and AI agents class for a learner in Albany.',

  picks: {
    eyebrow: 'Course picks for Albany',
    h2: 'Building with AI, from first prompt to tested agent',
    intro: 'Four routes for Albany learners. The trial lesson confirms which, and no card details are asked for.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Build web and Python projects with AI help, and learn to read and test what it writes.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python underneath, so a learner can tell when generated code is wrong.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full projects built with AI assistants, with data structures and testing taught alongside.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Working with coding agents on real tasks, including reviewing and testing their changes.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Albany in the Census',
      h2: 'A harbour city of 35,053 in the Great Southern',
      intro: 'QuickStats from the 2021 Census for the Albany urban area, set against Western Australia and Australia where available.',
      body: [
        { kind: 'table', caption: 'Albany\'s urban area, Census 2021', head: ['What was counted', 'Albany', 'Western Australia', 'Australia'], rows: [
          ['Usual residents', '35,053', 'Not compared', 'Not compared'],
          ['Median age', '45', '38', '38'],
          ['Families', '9,245', 'Not compared', 'Not compared'],
          ['Private dwellings', '16,140', 'Not compared', 'Not compared'],
          ['Separate houses, share of occupied homes', '12,112, or 90.0%', '79.7%', '72.3%'],
          ['Labourers among employed residents', '2,003, or 12.7%', '9.4%', '9.0%'],
          ['Bachelor degree or above, aged 15 and over', '4,407, or 15.2%', '23.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An older city', p: 'Albany\'s median age of 45 is seven years above both the state and national figure of 38, and only 1,611 residents, 4.6%, were aged 20 to 24.' },
          { h3: 'Almost no apartments', p: 'Just 64 dwellings were flats or apartments, 0.5% of occupied homes, against 6.5% across the state.' },
          { h3: 'Cafes and trades', p: 'Cafes and restaurants employed 486 residents, 3.1%, and 2,500 worked as technicians and trades workers.' }
        ] },
        { kind: 'p', text: 'Census tables can carry small deliberate adjustments for privacy, so parts may not match totals. Figures on this page are reproduced as the ABS published them; none is a sum we made.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why did the agent say no Albany school teaches Year 12?',
      intro: 'The WA Schools List, 20 schools with postcode 6330, and the year range each one teaches.',
      body: [
        { kind: 'table', caption: 'Schools covering each year level, postcode 6330 (our count from the 8 October 2026 list)', head: ['Year level', 'Correct difference array', 'With the off-by-one slip'], rows: [
          ['Kindergarten', '16', '13'],
          ['Pre-primary to Year 5', '14', '14'],
          ['Year 6', '14', '5'],
          ['Years 7 to 9', '8', '8'],
          ['Year 10', '8', '7'],
          ['Year 11', '7', '7'],
          ['Year 12', '7', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Mark the edges', p: 'For each school add 1 at its lowest year and subtract 1 at the position just after its highest year. Twenty schools need only 40 such updates.' },
          { h3: '2. Run the total', p: 'One pass along the 14 levels adds up the marks and gives the number of schools teaching each year. Updating every covered level one at a time would take 160 steps here.' },
          { h3: '3. Close the range in the right place', p: 'Subtracting at the highest year itself, rather than one past it, drops every school from its final year. Year 12 falls to zero and Year 6 from 14 to 5, and nothing crashes.' }
        ] },
        { kind: 'callout', h3: 'How the learner catches it', p: 'A brute-force check is easy to write: for each year level, count the schools whose range includes it. It is slower, but on 20 schools that does not matter, and it disagrees with the faulty version on four rows. Our Albany learners always ask an agent for two programs, a clever one and a plain one, and compare them before trusting either. Across the whole state the clever version saves real work, 2,300 updates instead of 9,756 increments, which is exactly why the bug is worth guarding against.' },
        { kind: 'p', text: 'Counts come from the year-range columns only. We do not name schools, compare sectors or use any student numbers, and the counts say nothing about places available at any school.' }
      ]
    },
    {
      id: 'agents', tint: 'tint', eyebrow: 'Vibe coding safely',
      h2: 'Four habits for building with an AI agent',
      intro: 'Learnt on the schools list, then applied to anything an agent builds for an Albany learner.',
      body: [
        { kind: 'table', caption: 'From fast to trustworthy', head: ['Habit', 'On the schools project', 'Why it matters'], rows: [
          ['Ask for a plain version too', 'A brute-force count beside the difference array', 'Two methods that agree are hard to fool'],
          ['Test the edges', 'Kindergarten and Year 12, the first and last levels', 'Off-by-one slips live at the ends'],
          ['Check a case by hand', 'One school\'s range traced level by level', 'You know the right answer before the code does'],
          ['Read the diff', 'The single changed index in the faulty version', 'Small edits can change every result']
        ] },
        { kind: 'p', text: 'Vibe coding means describing the program you want and letting an AI write most of it. It is genuinely fast for a learner in Albany or anywhere else. What it cannot do on its own is decide whether the result is right, and that decision is the skill these classes teach.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Prompt an agent for the coverage count, then break it on purpose and write the test that catches the break.' },
          { h3: 'University students', p: 'Prefix sums, range updates and test design, with an agent as a collaborator rather than an oracle.' },
          { h3: 'Adults at work', p: 'Use agents for spreadsheet and report tasks, with a hand-check habit that stops silent errors reaching anyone else.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no affiliation with the WA Department of Education or the ABS. The schools list and census figures belong to them; the coverage counts and update counts are our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Albany',
      h2: 'WA terms and a clock that holds still',
      intro: 'Timing details that matter to Albany families.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 2 in 2027', p: 'WA public schools run Term 2 from Monday 26 April to Friday 2 July 2027, according to the Department of Education.' },
          { h3: 'Term 4 in 2027', p: 'The year closes with Term 4 from Monday 11 October to Thursday 16 December 2027.' },
          { h3: 'One time zone all year', p: 'Western Australia keeps UTC plus 8 without daylight saving, so Albany lesson times never jump in spring or autumn.' }
        ] },
        { kind: 'spec', title: 'Two and a half hours apart', p: 'Our teachers in India are always two and a half hours behind Albany, so a 6pm lesson in Albany is 3:30pm for them every week of the year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to agents you can check',
    intro: 'Treat the ages as rough guides; the free lesson finds the right level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Prompting and reading', p: 'Asking an AI for small programs and reading every line before running them.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Testing generated code', p: 'Writing brute-force checks and edge tests for what an agent produces.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Agents in projects', p: 'Using coding agents across full projects, with reviews and test suites.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Automating reports and data tasks with agents, safely and verifiably.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent writes the code, what is left for an Albany learner to learn?',
    intro: 'The judgement about whether the code is right, which the agent does not supply.',
    p1: 'The faulty coverage program on this page looks almost identical to the correct one. One index differs. An agent that produced it would describe it confidently, and a learner who could not read Python would ship it, telling a parent that no Albany school teaches Year 12.',
    p2: 'Our Albany learners use agents every lesson, and every lesson they also write the plain check, test the first and last year, and trace one case by hand. Those habits come from understanding the code, and they make an agent safe to rely on.',
    closer: 'An Albany learner who has caught an agent\'s off-by-one slip knows that building with AI still means knowing how to code in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Little Grove to Lower King, one live lesson',
    intro: 'Albany wraps around the harbour, and an online class reaches every shore of it.',
    cells: [
      { h3: 'Anywhere around the sound', p: 'A learner in Little Grove and another in Lower King can sit in the same lesson from their own desks.' },
      { h3: 'WA year levels', p: 'Lessons use Western Australian year levels and the senior ATAR and general pathways, taught in English.' },
      { h3: 'Free opening lesson', p: 'You build something with an AI and a teacher, then get a level, course and time suggested, with no card requested.' },
      { h3: 'Fifteen to twenty learners', p: 'Each group shares a level, drawing from Albany, the rest of Australia and overseas.' },
      { h3: 'Weekly rhythm', p: 'Normally two lessons a week, about eight a month, with breaks planned around WA holidays.' },
      { h3: 'No clock changes', p: 'With no daylight saving in WA, the gap to India time never moves, so slots stay where they are.' }
    ],
    spec: { title: 'Albany time on every booking', p: 'Lesson times are confirmed in Albany time, so families never convert anything themselves.' }
  },

  fees: {
    h2: 'What vibe coding classes cost in Albany',
    intro: 'All three prices are below.',
    first: 'An opening lesson at no cost, ending with a level, a course and a time.',
    group: 'One month in a group, usually eight lessons, with fifteen to twenty learners at your stage.',
    private: 'Roughly eight one-to-one lessons a month with the same teacher.',
    closer: 'Albany learners pay the national rate in US dollars, with no Great Southern loading. Charges begin once the trial has fixed a course and slot; the pricing page sets out breaks, missed lessons and moving between group and private.'
  },

  reviewsH2: 'What families wrote on Google, reproduced exactly',

  book: {
    h2: 'Tell us what the learner wants to make with AI',
    intro: 'The first lesson follows the answer: a small game built with an AI for a Year 8 beginner, the schools coverage project for a Year 11 student, or a checked automation task for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding class in Albany.'
  },

  faq: {
    h2: 'Albany vibe coding and AI agents questions',
    intro: 'What Albany learners and parents usually ask before a first lesson.',
    items: [
      { q: 'How many people live in Albany?', a: 'The Albany urban area counted 35,053 residents in 2021, with a median age of 45.' },
      { q: 'What is a difference array?', a: 'A difference array records where ranges start and stop rather than every value inside them. Adding 1 at a range\'s start and subtracting 1 just after its end, then taking a running total, gives how many ranges cover each position.' },
      { q: 'What is vibe coding?', a: 'Vibe coding means describing what you want in plain language and letting an AI write most of the code. Our classes pair it with reading, testing and fixing that code.' },
      { q: 'What is the Albany schools project?', a: 'Learners use the WA Schools List to count how many of the 20 schools with postcode 6330 teach each year level, with a difference array and a brute-force check, then find the off-by-one slip that makes Year 12 read zero.' },
      { q: 'Are AI agents suitable for teenagers?', a: 'Teenagers use them under a teacher\'s guidance, and only tools whose own terms allow their age. Some popular AI products set a minimum age of 18, and those are reserved for adult learners.' },
      { q: 'What times are Albany lessons?', a: 'After school, weeknights or weekends, fixed during the trial and written in Albany time, which is always two and a half hours ahead of India.' },
      { q: 'Do you teach younger children?', a: 'From age 6, usually through Scratch and playful projects. The content on this page is aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Albany?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Albany coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Western Australia',
    h2: 'More for Albany and WA learners',
    html: 'Nearby pages include <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bunbury">vibe coding and AI agents in Bunbury</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">online Python classes in Perth</a>. For the thinking side of AI, see <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy and paste</a>, and for the state as a whole, <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Albany and Western Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-bunbury', label: 'Bunbury' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-alby .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.35rem); }
.cg-root.cg-alby .cg-hero h1 { font-weight: 735; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-alby .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-alby .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.83rem; text-transform: uppercase; }
.cg-root.cg-alby .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-alby .cg-grid-3 { gap: clamp(0.92rem, 2.15vw, 1.72rem); }
.cg-root.cg-alby .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-alby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-alby .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-alby .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Albany Significant Urban Area, ABS Census 2021 QuickStats, area code 5001, with Western Australia and Australia (read 8 October 2026): 35,053 people; median age 45; 9,245 families; 16,140 private dwellings; 2.3 people per household; separate house 12,112 (90.0 percent; WA 79.7; Australia 72.3); flat or apartment 64 (0.5 percent; WA 6.5); Professionals 2,717 (17.2 percent; WA 22.0); Technicians and Trades Workers 2,500 (15.9 percent; WA 15.3); Labourers 2,003 (12.7 percent; WA 9.4; Australia 9.0); Bachelor Degree level and above 4,407 (15.2 percent; WA 23.8; Australia 26.3); aged 15 to 19: 2,170 (6.2 percent); aged 20 to 24: 1,611 (4.6 percent; WA 6.0); industry: Cafes and Restaurants 486 (3.1 percent; WA 2.3). WA Department of Education 2027 term dates: Term 2 Monday 26 April to Friday 2 July; Term 4 Monday 11 October to Thursday 16 December. IANA tz database: Australia/Perth UTC+8, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Difference array (range increments) for year-level coverage. WA Department of Education, Western Australian Schools Lists, SchoolsListExcel0880.xlsx, CC BY 4.0 on data.wa.gov.au, downloaded 8 October 2026 (list headed with the 2026 Semester 1 census). Columns used: Postcode, Low Year, High Year. Statewide 1,152 schools, 2 without Low/High Year. Postcode 6330: 20 schools. Levels KIN, PPR, Y01 to Y12 (14). Coverage: KIN 16, PPR 14, Y01-Y06 14, Y07-Y10 8, Y11-Y12 7. Work: 160 per-level increments versus 40 range updates plus a 14-step running total; statewide 9,756 increments versus 2,300 updates. Faulty variant (subtract at the high year instead of high year plus one): KIN 13, PPR 14, Y01-Y05 14, Y06 5, Y07-Y09 8, Y10 7, Y11 7, Y12 0. No school names, sectors or student numbers used on the page.',
    requiredMentions: [
      '35,053',
      '9,245',
      '16,140',
      '12,112',
      '1,611',
      '4,407',
      'postcode 6330',
      'Little Grove to Lower King',
      '9,756 increments'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Albany Significant Urban Area (5001): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5001' },
      { claim: 'WA Department of Education, Western Australian Schools Lists (Excel), Creative Commons Attribution 4.0, on data.wa.gov.au.', url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists' },
      { claim: 'WA Department of Education, future term dates: 2027 Terms 2 and 4.', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Perth offset and absence of daylight saving.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Naming individual schools, comparing government and non-government schools, or using student numbers: excluded so the project stays about counting ranges.',
      'Any claim about school places, quality or enrolment availability: the year ranges say only which levels a school teaches.',
      'Treating postcode 6330 as identical to the Albany urban area: the project uses the postcode as stated, not the census boundary.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the WA Department of Education or the ABS.'
    ]
  }
};
